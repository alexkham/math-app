import os
p=os.path.join('pages','geometry','visual-tools','[view].jsx')
s=open(p,encoding='utf-8',newline='').read()
pairs=[
 (r"""{ n: 3, label: 'Draggable points', desc: 'A, B and C all move freely', pos: { top: '76px', left: 'calc(25% + 30px)' } },""",
  r"""{ n: 3, label: 'Draggable points', desc: 'A, B and C all move freely', pos: { top: '76px', left: 'calc(25% + 60px)' } },"""),
 (r"""{ n: 3, label: 'The third angle', desc: 'γ at C, found from the angle sum; it puts BC between two known angles', pos: { top: '40px', left: 'calc(25% + 40px)' } },""",
  r"""{ n: 3, label: 'The third angle', desc: 'γ at C, found from the angle sum; it puts BC between two known angles', pos: { top: '112px', left: 'calc(25% - 10px)' } },"""),
]
for a,b in pairs:
    assert s.count(a)==1, a[:40]; s=s.replace(a,b)
open(p,'w',encoding='utf-8',newline='').write(s); print('pins moved')
