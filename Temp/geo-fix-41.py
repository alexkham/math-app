import os
p = os.path.join('pages', 'geometry', 'visual-tools', '[view].jsx')
s = open(p, encoding='utf-8', newline='').read()
a = "{ n: 3, label: 'F beyond B', desc: 'the third point, on the extension of AB; AF is the long piece, FB the short one', pos: { top: '270px', left: 'calc(25% + 120px)' } },"
assert s.count(a) == 1
s = s.replace(a, a.replace("left: 'calc(25% + 120px)'", "left: 'calc(25% + 138px)'"))
open(p, 'w', encoding='utf-8', newline='').write(s); print('fix ok')
