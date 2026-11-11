import os
p = os.path.join('pages', 'geometry', 'visual-tools', '[view].jsx')
s = open(p, encoding='utf-8', newline='').read()
a = "{ n: 3, label: 'The angles', desc: 'β at B and at D, γ at C and at E, α at A', pos: { top: '262px', left: 'calc(25% - 120px)' } },"
assert s.count(a) == 1
s = s.replace(a, a.replace("top: '262px', left: 'calc(25% - 120px)'", "top: '286px', left: 'calc(25% - 196px)'"))
open(p, 'w', encoding='utf-8', newline='').write(s); print('fix ok')
