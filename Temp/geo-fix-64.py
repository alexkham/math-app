import os
p = os.path.join('pages', 'geometry', 'visual-tools', '[view].jsx')
s = open(p, encoding='utf-8', newline='').read()
a = "{ n: 3, label: 'Draggable points', desc: 'A and C move freely and turn or resize the triangle; the hollow points B and B′ follow', pos: { top: '170px', left: 'calc(25% + 60px)' } },"
assert s.count(a) == 1
s = s.replace(a, a.replace("top: '170px', left: 'calc(25% + 60px)'", "top: '120px', left: 'calc(25% + 40px)'"))
open(p, 'w', encoding='utf-8', newline='').write(s); print('fix ok')
