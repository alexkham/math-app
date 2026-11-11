import os
p = os.path.join('pages', 'geometry', 'visual-tools', '[view].jsx')
s = open(p, encoding='utf-8', newline='').read()
a = "{ n: 1, label: 'The five radii', desc: 'equal, one tick each, cutting the pentagon into five triangles', pos: { top: '250px', left: 'calc(25% - 70px)' } },"
assert s.count(a) == 1
s = s.replace(a, a.replace("top: '250px', left: 'calc(25% - 70px)'", "top: '225px', left: 'calc(25% - 67px)'"))
open(p, 'w', encoding='utf-8', newline='').write(s); print('fix ok')
