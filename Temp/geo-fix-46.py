import os
p = os.path.join('pages', 'geometry', 'visual-tools', '[view].jsx')
s = open(p, encoding='utf-8', newline='').read()
a = "{ n: 3, label: 'Draggable points', desc: 'B, C and D slide round the circle, A sets the radius, O moves the circle; the hollow point K follows on AC', pos: { top: '94px', left: 'calc(25% + 60px)' } },"
assert s.count(a) == 1
s = s.replace(a, a.replace("left: 'calc(25% + 60px)'", "left: 'calc(25% + 28px)'"))
open(p, 'w', encoding='utf-8', newline='').write(s); print('fix ok')
