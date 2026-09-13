# One-time inventory: is each linear-algebra tool's frozen diagram SYMBOLIC
# (matrix/vector entries rendered by frozenMatrixSvg) or GEOMETRIC (axes, arrows,
# a plotted plane)? Read-only.
#
# Operation A pairs a frozen state with prose. A symbolic state under prose about
# planes and directions is exactly the mismatch the zero-force rule tells us to
# skip, so this classification decides which sections a tool can serve before any
# unit is authored.

import io, json, os, re, sys

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
REG = json.load(io.open('app/api/db/repositories/visual-tools-registry.json', encoding='utf-8'))
LA = {k: v for k, v in REG['tools'].items() if v.get('section') == 'linear-algebra'}

GEO_HINTS = ('axis', 'axes', 'arrow', 'marker', 'grid', 'polyline', 'circle cx',
             'plot', 'gridline', 'vectorArrow', 'drawAxes')
SYM_HINTS = ('frozenMatrixSvg', 'matrices:', 'layout:', 'highlights:')

rows = []
for k in sorted(LA):
    mod = LA[k].get('diagramsModule')
    if not mod or not os.path.exists(mod):
        rows.append((k, '?', 'module missing', LA[k].get('diagramStates') or []))
        continue
    src = io.open(mod, encoding='utf-8').read()
    low = src.lower()
    sym = sum(low.count(h.lower()) for h in SYM_HINTS)
    geo = sum(low.count(h.lower()) for h in GEO_HINTS)
    kind = 'symbolic' if sym > geo else ('geometric' if geo > sym else 'mixed')
    rows.append((k, kind, '%s (sym %d / geo %d)' % (os.path.basename(mod), sym, geo),
                 LA[k].get('diagramStates') or []))

for kind in ('geometric', 'mixed', 'symbolic', '?'):
    sel = [r for r in rows if r[1] == kind]
    if not sel:
        continue
    print('=== %s (%d) ===' % (kind.upper(), len(sel)))
    for k, _, note, states in sel:
        print('  %-38s %s' % (k.replace('linear-algebra-', ''), ', '.join(states)))
    print()
