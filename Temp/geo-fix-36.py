import os
p=os.path.join('pages','geometry','visual-tools','[view].jsx')
s=open(p,encoding='utf-8',newline='').read()
a=r"""{ n: 2, label: 'The crossing M', desc: 'the midpoint of BD, with the right-angle mark; the two angles φ are the linear pair', pos: { top: '96px', left: 'calc(25% + 60px)' } },"""
b=r"""{ n: 2, label: 'The crossing M', desc: 'the midpoint of BD, with the right-angle mark; the two angles φ are the linear pair', pos: { top: '150px', left: 'calc(25% + 40px)' } },"""
assert s.count(a)==1; s=s.replace(a,b)
open(p,'w',encoding='utf-8',newline='').write(s); print('pin moved')
