# Find pages where <Sections sections={X.slice(1)}/> deletes a real section.
#
#   python slice-audit.py [--section=calculus]
#
# The .slice(1) idiom exists because on some pages genericSections[0] IS the Key
# Terms entry, rendered separately by <KeyTermsCard>. Copied onto a page whose
# array does NOT start with Key Terms, the same line silently deletes the first
# real lesson section: it still appears in the table of contents, its anchor
# still exists in every link that points at it, and its prose renders nowhere.
#
# Detection is source-only and conservative: report a page when it slices and the
# first entry of its live genericSections is not a Key Terms entry. Key Terms is
# recognised by id ('key-terms' or '0') or by the title of the sectionsContent
# key it points at.

import io, os, re, sys

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
ONLY = next((a.split('=', 1)[1] for a in sys.argv if a.startswith('--section=')), None)


def live(src):
    s = '\n'.join('' if l.lstrip().startswith('//') else l for l in src.split('\n'))
    s = re.sub(r'/\*.*?\*/', '', s, flags=re.S)
    return re.sub(r'\{/\*.*?\*/\}', '', s, flags=re.S)


ENTRY = re.compile(r"\{\s*id\s*:\s*[`'\"]([a-z0-9\-]+)[`'\"]\s*,\s*title\s*:\s*sectionsContent(?:\.(\w+)|\[\s*'(\w+)'\s*\])")
HELPER = re.compile(r"\b\w+\(\s*'(obj\d+)'\s*,\s*'([a-z0-9\-]+)'")

hits, sliced, scanned = [], 0, 0
for root, dirs, files in os.walk('pages'):
    if 'index.jsx' not in files:
        continue
    rel = root.replace(os.sep, '/')
    if ONLY and not rel.startswith('pages/' + ONLY):
        continue
    path = rel + '/index.jsx'
    src = live(io.open(path, encoding='utf-8').read())
    scanned += 1
    m = re.search(r'<Sections\s+sections=\{(\w+)\.slice\((\d+)\)\}', src)
    if not m:
        continue
    sliced += 1
    arr, n = m.group(1), int(m.group(2))
    i = src.rfind('const ' + arr)
    tail = src[i:] if i >= 0 else src
    first_id = first_key = None
    e = ENTRY.search(tail)
    h = HELPER.search(tail)
    if e and (not h or e.start() < h.start()):
        first_id, first_key = e.group(1), (e.group(2) or e.group(3))
    elif h:
        first_id, first_key = h.group(2), h.group(1)
    if first_id is None:
        continue
    title = ''
    t = re.search(r"\n\s{2,8}" + re.escape(first_key or '') + r"\s*:\s*\{\s*\n?\s*title\s*:\s*[`'\"]([^`'\"]*)", src)
    if t:
        title = t.group(1)
    is_kt = first_id in ('key-terms', '0') or title.strip().lower() == 'key terms'
    if not is_kt:
        hits.append((path, arr, n, first_id, first_key, title))

print('scanned %d index pages, %d use .slice()' % (scanned, sliced))
print('\nPages where .slice(1) deletes a REAL section (%d):' % len(hits))
for path, arr, n, fid, fkey, title in hits:
    print('   %-58s drops id %-12s (%s: %s)' % (path, "'" + fid + "'", fkey, title[:40]))
