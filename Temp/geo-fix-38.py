import os
p=os.path.join('pages','geometry','visual-tools','[view].jsx')
s=open(p,encoding='utf-8',newline='').read()
pairs=[
 (r"""{ n: 1, label: 'The tangent triangle', desc: 'OTP, right-angled at T: PT² = OP² − R²', pos: { top: '60px', left: 'calc(25% - 40px)' } },""",
  r"""{ n: 1, label: 'The tangent triangle', desc: 'OTP, right-angled at T: PT² = OP² − R²', pos: { top: '150px', left: 'calc(25% + 0px)' } },"""),
 (r"""{ n: 2, label: 'The two right triangles', desc: 'OMP and OMA on the chord: PM² − AM² = OP² − R²', pos: { top: '200px', left: 'calc(25% - 70px)' } },""",
  r"""{ n: 2, label: 'The two right triangles', desc: 'OMP and OMA on the chord: PM² − AM² = OP² − R²', pos: { top: '150px', left: 'calc(25% - 50px)' } },"""),
 (r"""{ n: 3, label: 'The midpoint M', desc: 'the foot of the perpendicular from O, with AM = MB (one tick each)', pos: { top: '130px', left: 'calc(25% + 20px)' } },""",
  r"""{ n: 3, label: 'The midpoint M', desc: 'the foot of the perpendicular from O, with AM = MB (one tick each)', pos: { top: '160px', left: 'calc(25% + 60px)' } },"""),
]
for a,b in pairs:
    assert s.count(a)==1, a[:40]; s=s.replace(a,b)
open(p,'w',encoding='utf-8',newline='').write(s); print('pins moved')
