# Derives the planted-unit records straight from opa-specs.py instead of having
# them retyped by hand, then appends them to opa-planted.json.
#
# For each unit the spec already states the page, the section it was placed in,
# the tool (from the href) and the frozen states (from the svg expression). The
# only thing missing is which mapped TERM on that page the unit is credited to,
# and $conceptToolMap already answers that: the term whose winning tool is the
# one the unit links to. Where several terms qualify, the first unused one wins;
# where none does, the page is reported rather than guessed at.
#
#   python opa-autorecord.py <page-slug> [...] [--apply]

import io, json, re, sys, importlib.util

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

_s = importlib.util.spec_from_file_location('opa_specs', 'opa-specs.py')
_m = importlib.util.module_from_spec(_s)
_s.loader.exec_module(_m)
SPECS = _m.SPECS

REG = json.load(io.open('app/api/db/repositories/content-pages-registry.json', encoding='utf-8'))
CMAP = REG['$meta']['$conceptToolMap']
PLANTED = 'opa-planted.json'


def diagram_refs(svg):
    """'luDiagrams.swap' or ['a.b','c.d'] or 'x["row-column"]' -> dotted names."""
    items = svg if isinstance(svg, list) else [svg]
    out = []
    for it in items:
        m = re.match(r'^(\w+)\["([^"]+)"\]$', it.strip())
        out.append('%s.%s' % (m.group(1), m.group(2)) if m else it.strip())
    return out


def main():
    apply = '--apply' in sys.argv
    slugs = [a for a in sys.argv[1:] if not a.startswith('--')]

    units, unresolved = [], []
    used = set()
    for slug in slugs:
        spec = SPECS[slug]
        page_terms = REG['pages']['linear-algebra/' + slug]['relatedTerms']
        pending = [t['entity'] for t in page_terms if t['status'] == 'pending']
        for sec_id, unit_name, _sealing in spec['place']:
            u = spec['units'][unit_name]
            tool = u['href'].rsplit('/', 1)[-1]
            cand = [e for e in pending
                    if CMAP.get(e, {}).get('tool') == tool and (slug, e) not in used]
            if not cand:
                # fall back to a term listing this tool as a runner-up
                cand = [e for e in pending
                        if tool in (CMAP.get(e, {}).get('runnersUp') or [])
                        and (slug, e) not in used]
            if not cand:
                unresolved.append((slug, sec_id, unit_name, tool))
                continue
            ent = cand[0]
            used.add((slug, ent))
            refs = diagram_refs(u['svg'])
            units.append({'page': slug, 'entity': ent, 'tool': tool,
                          'fromSection': sec_id, 'diagrams': refs,
                          'arrangement': 'sequence' if len(refs) > 1 else 'single'})
            print('%-34s sec %-3s %-30s -> %s' % (slug, sec_id, tool, ent))

    if unresolved:
        print('\nUNRESOLVED - no mapped term on the page wins with this tool:')
        for slug, sec, name, tool in unresolved:
            terms = [t['entity'] for t in REG['pages']['linear-algebra/' + slug]['relatedTerms']
                     if t['status'] == 'pending']
            print('  %-32s sec %-3s %-28s' % (slug, sec, tool))
            print('      pending terms: %s' % ', '.join(terms))

    print('\nresolved %d unit(s), %d unresolved' % (len(units), len(unresolved)))

    if apply and units:
        d = json.load(io.open(PLANTED, encoding='utf-8'))
        d['done'] = sorted(set(d['done']) | set(slugs))
        d['units'] += units
        io.open(PLANTED, 'w', encoding='utf-8').write(
            json.dumps(d, ensure_ascii=False, indent=2) + '\n')
        print('appended to %s (done %d, units %d)' % (PLANTED, len(d['done']), len(d['units'])))
    elif not apply:
        print('DRY RUN - nothing appended.')


main()
