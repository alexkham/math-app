import os
p=os.path.join('pages','geometry','visual-tools','[view].jsx')
s=open(p,encoding='utf-8',newline='').read()
a=r"""{ n: 3, label: 'Draggable points', desc: 'P moves anywhere inside the triangle, A, B and C move freely; the hollow feet D, E, F follow', pos: { top: '150px', left: 'calc(25% + 40px)' } },"""
b=r"""{ n: 3, label: 'Draggable points', desc: 'P moves anywhere inside the triangle, A, B and C move freely; the hollow feet D, E, F follow', pos: { top: '120px', left: 'calc(25% - 10px)' } },"""
assert s.count(a)==1; s=s.replace(a,b)
open(p,'w',encoding='utf-8',newline='').write(s); print('pin moved')
