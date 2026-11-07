import os
p=os.path.join('pages','geometry','visual-tools','[view].jsx')
s=open(p,encoding='utf-8',newline='').read()
pairs=[
 (r"""{ n: 1, label: 'The first secant', desc: 'OMP and OMA on the chord AB: PM² − AM² = OP² − R²', pos: { top: '110px', left: 'calc(25% - 40px)' } },""",
  r"""{ n: 1, label: 'The first secant', desc: 'OMP and OMA on the chord AB: PM² − AM² = OP² − R²', pos: { top: '150px', left: 'calc(25% - 20px)' } },"""),
 (r"""{ n: 2, label: 'The second secant', desc: 'ONP and ONC on the chord CD: PN² − CN² = OP² − R²', pos: { top: '230px', left: 'calc(25% - 90px)' } },""",
  r"""{ n: 2, label: 'The second secant', desc: 'ONP and ONC on the chord CD: PN² − CN² = OP² − R²', pos: { top: '175px', left: 'calc(25% - 50px)' } },"""),
]
for a,b in pairs:
    assert s.count(a)==1, a[:40]; s=s.replace(a,b)
open(p,'w',encoding='utf-8',newline='').write(s); print('pins moved')
