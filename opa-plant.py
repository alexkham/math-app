# Applies Operation A demonstration units to a content page mechanically.
#
# The judgement (which section earns a unit, which tool, which frozen state) and
# the prose live in opa-specs.py. This file only performs the five identical
# edits every page needs, so the wiring cannot drift page to page:
#
#   1. import demoUnitFrame + the diagrams module(s)
#   2. build `const demoUnits = {...}` inside getStaticProps
#   3. add `demoUnits,` to the props object
#   4. add `demoUnits` to the page component's destructured signature
#   5. append the unit div + its sealing sentence to the section's content array
#
# Every edit is made against a LENGTH-PRESERVING comment mask, so a match can
# never land in the archived page kept at the top of these files.
#
#   python opa-plant.py <page-slug> [--apply]
#   python opa-plant.py --all [--apply]

import io, re, sys, importlib

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
SPECS = importlib.import_module('opa-specs'.replace('-', '_')).SPECS \
    if False else None

# opa-specs.py has a hyphen, so import it by path
import importlib.util
_spec = importlib.util.spec_from_file_location('opa_specs', 'opa-specs.py')
_mod = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_mod)
SPECS = _mod.SPECS


def mask(src):
    out = list(src)
    for m in re.finditer(r'^[ \t]*//[^\n]*', src, flags=re.M):
        for i in range(m.start(), m.end()):
            out[i] = '\x00'
    tmp = ''.join(out)
    for m in re.finditer(r'/\*.*?\*/', tmp, flags=re.S):
        for i in range(m.start(), m.end()):
            out[i] = '\x00'
    return ''.join(out)


def js(s):
    """Escape a python string for a JS single-quoted literal."""
    return s.replace('\\', '\\\\').replace("'", "\\'")


def build_units_block(spec):
    lines = ['', '  // Operation A demonstration units: a frozen tool state, an explanation',
             '  // panel reading that state, and the contextual link, in one frame. Built',
             '  // here and rendered as content-array items - never interpolated into',
             '  // sectionsContent, which cannot carry a wrapper div around an <svg>.',
             '  const demoUnits = {']
    for name, u in spec['units'].items():
        svg = u['svg']
        svg_js = ('[' + ', '.join(svg) + ']') if isinstance(svg, list) else svg
        if u.get('note'):
            for ln in u['note'].split('\n'):
                lines.append('    // ' + ln)
        lines.append('    %s: demoUnitFrame({' % name)
        lines.append('      svg: %s,' % svg_js)
        lines.append("      caption: '%s'," % js(u['caption']))
        lines.append("      text: '%s'," % js(u['text']))
        lines.append("      href: '%s'," % js(u['href']))
        lines.append("      linkText: '%s'," % js(u['linkText']))
        lines.append('    }),')
    lines.append('  };')
    lines.append('')
    return '\n'.join(lines)


def plant(slug, apply):
    spec = SPECS[slug]
    path = 'pages/linear-algebra/%s/index.jsx' % slug
    src = io.open(path, encoding='utf-8', newline='').read()
    orig = src
    steps = []

    # 1 - imports, after the last live import line
    m_src = mask(src)
    imports = list(re.finditer(r'^import [^\n]*$', m_src, flags=re.M))
    if not imports:
        return 'no live import line found', None
    ins = imports[-1].end()
    block = '\n' + "import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'"
    for name, mod in spec['imports']:
        block += "\nimport %s from '%s'" % (name, mod)
    if 'demoUnitFrame' not in m_src:
        src = src[:ins] + block + src[ins:]
        steps.append('imports')

    # 2 - units block, immediately before the props return
    m_src = mask(src)
    # Spacing varies page to page: "return {\n  props: {" and "return{\n props:{"
    # both occur, so the pattern has to be tolerant rather than literal.
    m = re.search(r'\n[ \t]*return\s*\{\s*props\s*:\s*\{', m_src)
    if not m:
        return 'props return not found', None
    src = src[:m.start()] + '\n' + build_units_block(spec) + src[m.start():]
    steps.append('units')

    # 3 - props entry
    m_src = mask(src)
    m = re.search(r'(\n[ \t]*return\s*\{\s*props\s*:\s*\{)', m_src)
    src = src[:m.end(1)] + '\n    demoUnits,' + src[m.end(1):]
    steps.append('props')

    # 4 - component signature
    m_src = mask(src)
    m = re.search(r'export default function \w+\(\{([^}]*)\}\)', m_src)
    if not m:
        return 'component signature not found', None
    if 'demoUnits' not in m.group(1):
        # The signature may be one line or many, and may already end with a
        # trailing comma before the closing brace. Appending ", demoUnits"
        # blindly produces "schemas,\n, demoUnits})" - a syntax error. Insert
        # after the last actual identifier instead.
        inner = m.group(1)
        cut = len(inner.rstrip())
        sep = '' if inner.rstrip().endswith(',') else ','
        at = m.start(1) + cut
        src = src[:at] + sep + ' demoUnits' + src[at:]
        steps.append('signature')

    # 5 - place each unit in its section's content array
    for sec_id, unit_name, sealing in spec['place']:
        m_src = mask(src)
        sm = re.search(r"id\s*:\s*'%s'\s*,[\s\S]{0,400}?content\s*:\s*\[" % re.escape(sec_id), m_src)
        if not sm:
            return 'section id %s / content[ not found' % sec_id, None
        depth, i = 1, sm.end()
        while i < len(m_src) and depth:
            if m_src[i] == '[':
                depth += 1
            elif m_src[i] == ']':
                depth -= 1
            i += 1
        close = i - 1
        add = ("          <div key={'unit-%s'} dangerouslySetInnerHTML={{ __html: demoUnits.%s }} />,\n"
               "          `%s`,\n        " % (unit_name, unit_name, sealing))
        src = src[:close] + add + src[close:]
        steps.append('place:' + sec_id)

    if apply:
        io.open(path, 'w', encoding='utf-8', newline='').write(src)
    return None, (steps, len(src) - len(orig))


def main():
    apply = '--apply' in sys.argv
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    slugs = sorted(SPECS) if '--all' in sys.argv else args
    for slug in slugs:
        err, res = plant(slug, apply)
        if err:
            print('%-44s FAILED: %s' % (slug, err))
        else:
            steps, delta = res
            print('%-44s %s  (+%d chars)' % (slug, ', '.join(steps), delta))
    print('\n%s' % ('WRITTEN' if apply else 'DRY RUN - nothing written.'))


main()
