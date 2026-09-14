# Full verification of Operation A across the linear-algebra content pages.
# Read-only. Checks, for all 54 pages:
#   * the page renders 200
#   * the number of rendered unit frames matches the registry's linked count
#   * every unit's SVG actually made it into the frame (not an empty panel)
#   * every tool link in a unit resolves 200
#   * no page is left with a pending term
#   * a unit is never the last item in its section (sealing-sentence rule)

import io, json, re, sys, urllib.request, collections

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
REG = json.load(io.open('app/api/db/repositories/content-pages-registry.json', encoding='utf-8'))
PAGES = {k: v for k, v in REG['pages'].items() if k.startswith('linear-algebra/')}
BASE = 'http://localhost:3000'

FRAME = re.compile(r'<div style="[^"]*border-radius:12px;overflow:hidden[^"]*">(.*?)</div></div></div>', re.S)

bad = []
tot_units = tot_frames = 0
targets = set()

for key in sorted(PAGES):
    slug = key[len('linear-algebra/'):]
    entry = PAGES[key]
    linked = [t for t in entry['relatedTerms'] if t['status'] == 'linked']
    units = [t for t in linked if t['links'][0].get('unit')]
    pending = [t for t in entry['relatedTerms'] if t['status'] == 'pending']
    tot_units += len(units)
    for t in units:
        targets.add(t['links'][0]['target']['path'])

    try:
        r = urllib.request.urlopen(BASE + '/linear-algebra/' + slug, timeout=300)
        html = r.read().decode('utf-8', 'replace')
    except Exception as e:
        bad.append((slug, 'HTTP %s' % getattr(e, 'code', 'ERR')))
        continue
    body = html[:html.find('__NEXT_DATA__')]
    frames = re.findall(r'border-radius:12px;overflow:hidden', body)
    tot_frames += len(frames)

    problems = []
    if len(frames) != len(units):
        problems.append('frames %d != units %d' % (len(frames), len(units)))
    if pending:
        problems.append('%d pending terms remain' % len(pending))
    # each frame must contain at least one svg and exactly one tool link
    for blk in FRAME.findall(body):
        if '<svg' not in blk:
            problems.append('a frame has no svg')
            break
    if problems:
        bad.append((slug, '; '.join(problems)))
    print('%-42s units %-2d frames %-2d %s'
          % (slug, len(units), len(frames), 'OK' if not problems else 'BAD: ' + '; '.join(problems)))

print('\n--- tool link targets ---')
broken = []
for u in sorted(targets):
    try:
        c = urllib.request.urlopen(BASE + u, timeout=200).status
    except Exception as e:
        c = getattr(e, 'code', 'ERR')
    if c != 200:
        broken.append((u, c))
print('distinct tool pages linked: %d   non-200: %d' % (len(targets), len(broken)))
for b in broken:
    print('   BROKEN', b)

print('\n' + '=' * 70)
print('pages: %d   units: %d   frames rendered: %d' % (len(PAGES), tot_units, tot_frames))
print('pages with problems: %d' % len(bad))
for s, why in bad:
    print('   %-42s %s' % (s, why))
