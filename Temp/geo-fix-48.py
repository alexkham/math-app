import os
p = os.path.join('pages', 'geometry', 'visual-tools', '[view].jsx')
s = open(p, encoding='utf-8', newline='').read()
BS = chr(92)
bad = "**Thales' theorem**, **Angle sum**, **Inscribed angles**, **Combining**) naming"
good = "**Thales" + BS + "' theorem**, **Angle sum**, **Inscribed angles**, **Combining**) naming"
print('bad', s.count(bad), 'good', s.count(good))
if s.count(bad) == 1:
    s = s.replace(bad, good)
    open(p, 'w', encoding='utf-8', newline='').write(s)
    print('fixed')
s = open(p, encoding='utf-8', newline='').read()
i = s.find("radius**, **Thales")
print(ascii(s[i:i + 40]))
