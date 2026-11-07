import os
p=os.path.join('pages','geometry','visual-tools','[view].jsx')
s=open(p,encoding='utf-8',newline='').read()
pairs=[
 (r"""{ n: 3, label: 'Draggable points', desc: 'B and C move freely, A slides along the perpendicular at C; the hollow vertex A′ is the mirror of A through C', pos: { top: '80px', left: 'calc(25% - 14px)' } },""",
  r"""{ n: 3, label: 'Draggable points', desc: 'B and C move freely, A slides along the perpendicular at C; the hollow vertex A′ is the mirror of A through C', pos: { top: '100px', left: 'calc(25% - 60px)' } },"""),
 (r"""{ n: 2, label: 'The hypotenuses', desc: 'AB and A′B, one tick each: the equal sides of the isosceles triangle ABA′', pos: { top: '110px', left: 'calc(25% - 120px)' } },""",
  r"""{ n: 2, label: 'The hypotenuses', desc: 'AB and A′B, one tick each: the equal sides of the isosceles triangle ABA′', pos: { top: '160px', left: 'calc(25% - 90px)' } },"""),
]
for a,b in pairs:
    assert s.count(a)==1, a[:40]; s=s.replace(a,b)
open(p,'w',encoding='utf-8',newline='').write(s); print('pins moved')
