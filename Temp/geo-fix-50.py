import os
p = os.path.join('pages', 'geometry', 'visual-tools', '[view].jsx')
s = open(p, encoding='utf-8', newline='').read()
a = "{ n: 3, label: 'Draggable points', desc: 'D moves freely and C follows as its mirror image, so the legs stay equal; A and B move the long base; the hollow point E follows', pos: { top: '150px', left: 'calc(25% - 70px)' } },"
assert s.count(a) == 1
s = s.replace(a, a.replace("top: '150px', left: 'calc(25% - 70px)'", "top: '175px', left: 'calc(25% - 37px)'"))
b = "{ n: 2, label: 'The isosceles triangle EBC', desc: 'shaded: CE = CB, base angles β at E and B', pos: { top: '236px', left: 'calc(25% + 80px)' } },"
assert s.count(b) == 1
s = s.replace(b, b.replace("top: '236px', left: 'calc(25% + 80px)'", "top: '215px', left: 'calc(25% + 73px)'"))
open(p, 'w', encoding='utf-8', newline='').write(s); print('fix ok')
