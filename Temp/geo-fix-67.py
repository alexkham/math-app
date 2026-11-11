import os
p = os.path.join('pages', 'geometry', 'visual-tools', '[view].jsx')
s = open(p, encoding='utf-8', newline='').read()
a = "{ n: 2, label: 'The two triangles', desc: 'ABD and ACD, shaded either side of AD', pos: { top: '236px', left: 'calc(25% - 100px)' } },"
assert s.count(a) == 1
s = s.replace(a, a.replace("top: '236px', left: 'calc(25% - 100px)'", "top: '205px', left: 'calc(25% - 70px)'"))
open(p, 'w', encoding='utf-8', newline='').write(s); print('fix ok')
