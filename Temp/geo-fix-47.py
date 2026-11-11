import os
p = os.path.join('pages', 'geometry', 'visual-tools', '[view].jsx')
s = open(p, encoding='utf-8', newline='').read()
a = "{ n: 1, label: 'The two small triangles', desc: 'ACD at the A side and CBD at the B side, each with the angles α, β, 90°', pos: { top: '236px', left: 'calc(25% - 110px)' } },"
assert s.count(a) == 1
s = s.replace(a, a.replace("left: 'calc(25% - 110px)'", "left: 'calc(25% + 4px)'"))
open(p, 'w', encoding='utf-8', newline='').write(s); print('fix ok')
