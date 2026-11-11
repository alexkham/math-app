import ast
g = 'Temp/geo-view-42-45.py'
s = open(g, encoding='utf-8').read()
BS = chr(92)
bad = BS + BS + '"D' + BS + BS + '"'
good = BS + '"D' + BS + '"'
assert s.count(bad) == 1, s.count(bad)
s = s.replace(bad, good)
open(g, 'w', encoding='utf-8').write(s)
ast.parse(s)
print('syntax ok')
