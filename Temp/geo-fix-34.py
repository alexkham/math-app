import os
p=os.path.join('pages','geometry','visual-tools','[view].jsx')
s=open(p,encoding='utf-8',newline='').read(); nl='\r\n' if '\r\n' in s else '\n'
pairs=[
 (r"  // E slid towards A and C pulled right: a smaller part of a different whole", r"  // E slid towards C and C pulled right: a larger part of a different whole"),
 (r"C: { x: 310, y: 110 } }, params: { t: 0.38 } }", r"C: { x: 310, y: 110 } }, params: { t: 0.72 } }"),
 (r"'E slid towards A and C pulled right: a smaller part of a different whole, still short of it.'", r"'E slid towards C and C pulled right: a larger part of a different whole, still short of it.'"),
 (r"{ say: 'SLIDE E\nPull E towards A: the part shrinks, and never reaches the whole.' },", r"{ say: 'SLIDE E\nPull E towards C: the part grows, and never reaches the whole.' },"),
 (r"""{ drag: '[data-handle="E"]', dx: -14, dy: 24, ms: 1400 },""", r"""{ drag: '[data-handle="E"]', dx: 16, dy: -26, ms: 1400 },"""),
]
for a,b in pairs:
    assert s.count(a)==1, a[:50]
    s=s.replace(a,b)
open(p,'w',encoding='utf-8',newline='').write(s); print('view fixed', repr(nl))
