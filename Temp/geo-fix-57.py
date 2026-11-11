import os
p = os.path.join('pages', 'geometry', 'visual-tools', '[view].jsx')
s = open(p, encoding='utf-8', newline='').read()
for a, b in [("{ n: 2, label: 'The angles at A and C', desc: 'α and γ, equal at the end', pos: { top: '236px', left: 'calc(25% - 100px)' } },",
              "{ n: 2, label: 'The angles at A and C', desc: 'α and γ, equal at the end', pos: { top: '212px', left: 'calc(25% - 77px)' } },"),
             ("{ n: 3, label: 'The angles at B and D', desc: 'β and δ, equal at the end', pos: { top: '150px', left: 'calc(25% + 60px)' } },",
              "{ n: 3, label: 'The angles at B and D', desc: 'β and δ, equal at the end', pos: { top: '172px', left: 'calc(25% + 35px)' } },")]:
    assert s.count(a) == 1, a
    s = s.replace(a, b)
open(p, 'w', encoding='utf-8', newline='').write(s); print('fix ok')
