import re, os, sys
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

def strip_comments(s):
    lits = []
    def stash(m):
        lits.append(m.group(0)); return '\x00L%d\x00' % (len(lits) - 1)
    s = re.sub(r'"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\'|`(?:\\.|[^`\\])*`', stash, s)
    s = re.sub(r'//.*$', '', s, flags=re.M)
    s = re.sub(r'/\*[\s\S]*?\*/', '', s)
    return re.sub(r'\x00L(\d+)\x00', lambda m: lits[int(m.group(1))], s)

base = sys.argv[1]
for d in sorted(os.listdir(base)):
    f = os.path.join(base, d, 'index.jsx')
    if not os.path.isfile(f):
        continue
    c = strip_comments(open(f, encoding='utf-8').read())
    name = re.search(r'name\s*:\s*["\'`]([^"\'`]{3,100})["\'`]', c)
    hub = re.search(r'hubDescription\s*:\s*["\'`]([^"\'`]{10,2000})["\'`]', c)
    print(f"{d:14} | name: {(name.group(1)[:50] if name else 'NONE'):52} | hub: {'yes' if hub else '-'}")
