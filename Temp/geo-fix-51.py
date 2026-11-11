import os
p = os.path.join('pages', 'geometry', 'visual-tools', '[view].jsx')
s = open(p, encoding='utf-8', newline='').read()
a = "{ n: 2, label: 'The halves', desc: 'α/2 twice and β/2 twice around O, inside the larger arcs of α and β', pos: { top: '200px', left: 'calc(25% + 60px)' } },"
assert s.count(a) == 1
s = s.replace(a, a.replace("top: '200px', left: 'calc(25% + 60px)'", "top: '240px', left: 'calc(25% + 73px)'"))
open(p, 'w', encoding='utf-8', newline='').write(s); print('fix ok')
