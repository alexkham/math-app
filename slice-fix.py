# Restore the sections that <Sections sections={X.slice(1)}/> was deleting.
#
#   python slice-fix.py [--section=calculus] [--apply]
#
# Only touches pages slice-audit.py reports: those whose genericSections[0] is a
# real lesson section rather than the Key Terms entry. On those pages Key Terms
# is already rendered separately by <KeyTermsCard id="0">, and the array starts
# at id '1', so .slice(1) drops live prose that the table of contents still
# links to. Removing the .slice(1) restores it and cannot duplicate anything.
#
# The table-of-contents call already passes the full array and is left alone.

import io, re, sys, subprocess

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
apply = '--apply' in sys.argv
args = [a for a in sys.argv[1:] if a.startswith('--section=')]

out = subprocess.run([sys.executable, 'slice-audit.py'] + args,
                     capture_output=True, text=True, encoding='utf-8').stdout
paths = re.findall(r'^\s+(pages/\S+index\.jsx)', out, flags=re.M)
print('%d page(s) reported by slice-audit.py' % len(paths))

fixed = 0
def mask_comments(src):
    """Blank comments to \\x00 without changing length, so offsets still index
    the original. Pages archive old versions in '//' blocks that contain their
    own <Sections .../> line; without this mask the first match is the ARCHIVED
    one and the live render keeps its .slice(1)."""
    out = list(src)
    for m in re.finditer(r'^[ \t]*//[^\n]*', src, flags=re.M):
        for i in range(m.start(), m.end()):
            out[i] = '\x00'
    tmp = ''.join(out)
    for m in re.finditer(r'/\*.*?\*/', tmp, flags=re.S):
        for i in range(m.start(), m.end()):
            out[i] = '\x00'
    for m in re.finditer(r'\{/\*.*?\*/\}', tmp, flags=re.S):
        for i in range(m.start(), m.end()):
            out[i] = '\x00'
    return ''.join(out)


for p in paths:
    raw = io.open(p, encoding='utf-8', newline='').read()
    m = re.search(r'(<Sections\s+sections=\{\w+)\.slice\(1\)(\})', mask_comments(raw))
    if not m:
        print('   SKIP (no live slice found) %s' % p)
        continue
    new = raw[:m.start()] + m.group(1) + m.group(2) + raw[m.end():]
    print('   %s' % p)
    fixed += 1
    if apply:
        io.open(p, 'w', encoding='utf-8', newline='').write(new)

print('\n%d page(s) %s' % (fixed, 'FIXED' if apply else 'to fix - DRY RUN'))
