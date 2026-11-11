import os
p = os.path.join('pages', 'geometry', 'visual-tools', '[view].jsx')
s = open(p, encoding='utf-8', newline='').read()
a = "{ n: 3, label: 'The interior angles', desc: 'α to ε, filling the straight angle with the exterior angle at each vertex', pos: { top: '236px', left: 'calc(25% - 30px)' } },"
assert s.count(a) == 1
s = s.replace(a, a.replace("top: '236px', left: 'calc(25% - 30px)'", "top: '168px', left: '25%'"))
open(p, 'w', encoding='utf-8', newline='').write(s); print('fix ok')
