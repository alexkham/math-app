# Content for page 79, Viviani's theorem, read by geo-view-42-45.py (argument geo_pages_79)
# Strings in single quotes must not contain an apostrophe.
PAGES = [dict(
    slug='viviani-theorem', prev='vertical-angle-bisectors', prev_h1='Bisectors of Vertical Angles', prev_key='verticalBisectors', prev_dragged='draggedVerticalBisectors',
    key='viviani', dragged='draggedViviani', dragged_comment='P moved right and down: three new distances, the same sum',
    dragged_expr="{ ...PROOFS.viviani.model, points: { ...PROOFS.viviani.model.points, P: { x: 310, y: 270 } } }",
    demo_drag="{ drag: '[data-handle=\"P\"]', dx: 10, dy: 8, ms: 1400 },",
    subCategory='Triangle',
    title="Viviani's Theorem | Distances to the Sides of an Equilateral Triangle Proof Step by Step",
    desc="Watch the proof of Viviani's theorem: from any point inside an equilateral triangle the three perpendicular distances to the sides add up to the height, by splitting the area into three triangles, step by step. Then drag the point and the triangle.",
    h1="Viviani's Theorem", name='Viviani Theorem Proof',
    appdesc='Step-by-step interactive proof that the sum of the distances from an interior point to the sides of an equilateral triangle equals its height, with a draggable point and triangle.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="10,62 62,62 36,17" fill="none" stroke="#E6F1FB" stroke-width="1.4"/><line x1="32" y1="46" x2="32" y2="62" stroke="#FAC775" stroke-width="1.6"/><line x1="32" y1="46" x2="44" y2="39" stroke="#FAC775" stroke-width="1.6"/><line x1="32" y1="46" x2="24" y2="35" stroke="#FAC775" stroke-width="1.6"/><circle cx="32" cy="46" r="2" fill="#FAC775"/><line x1="70" y1="62" x2="70" y2="17" stroke="#E6F1FB" stroke-width="1.2" stroke-dasharray="3 2"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">PD + PE + PF = h</text></svg>',
    keywords=['viviani theorem', 'vivianis theorem', 'sum of distances to the sides of an equilateral triangle', 'point inside equilateral triangle', 'distance from a point to the sides', 'height of an equilateral triangle', 'area proof', 'triangle theorems', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'split', 'parts', 'whole', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $P$ around inside the triangle, or $A$ or $B$ to turn and resize it, and watch the readout: the three distances change but their sum always equals the height $h$. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""Let $ABC$ be an [equilateral triangle](!/geometry/visual-tools/equilateral-triangle) with side $a$ and height $h$, and let $P$ be any point inside it. Drop the perpendiculars $PD$, $PE$ and $PF$ from $P$ to the sides $BC$, $CA$ and $AB$; each is the shortest way from $P$ to that side, as on the [perpendicular is shortest](!/geometry/visual-tools/perpendicular-shortest) page. Viviani's theorem says

$$PD + PE + PF = h$$

so the sum of the three distances is the same for every point inside the triangle.

In the player $P$, $A$ and $B$ can be dragged, $C$ is computed so that the triangle stays equilateral, and the feet $D$, $E$, $F$ are computed. The height is drawn as a bar beside the triangle, from the line $AB$ up to the level of $C$. The readout shows the sum of the three distances and the height, in units of $60$ pixels."""),
        ('Three Triangles', r"""Join $P$ to the three vertices. The triangles $PBC$, $PCA$ and $PAB$ meet at $P$ and together fill the triangle $ABC$ without overlapping, so their areas add up to its area. Writing $[XYZ]$ for the area of a triangle $XYZ$:

$$[ABC] = [PBC] + [PCA] + [PAB]$$"""),
        ('The Small Triangles', r"""Each small triangle has a side of $ABC$ as its base and the perpendicular from $P$ to that side as its height. All three sides have the same length $a$, so

$$[PBC] = \\frac{1}{2}a \\cdot PD, \\qquad [PCA] = \\frac{1}{2}a \\cdot PE, \\qquad [PAB] = \\frac{1}{2}a \\cdot PF$$"""),
        ('The Whole Triangle', r"""The whole triangle has the base $AB = a$ and the height $h$:

$$[ABC] = \\frac{1}{2}a \\cdot h$$"""),
        ('Why It Holds', r"""Put the four areas together:

$$\\frac{1}{2}a \\cdot PD + \\frac{1}{2}a \\cdot PE + \\frac{1}{2}a \\cdot PF = \\frac{1}{2}a \\cdot h$$

and divide both sides by $\\frac{1}{2}a$:

$$PD + PE + PF = h$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, area addition, the area of a triangle (twice) and combining.

The equal sides are what make it work: they let the common factor $\\frac{1}{2}a$ come out of all three areas. Nothing in the proof depends on where $P$ is, as long as it is inside."""),
        ('Dragging the Figure', r"""Drag $P$: the perpendiculars change length, one growing as others shrink, and the readout keeps their sum equal to $h$. Drag $A$ or $B$ to turn or resize the triangle; the height changes and the sum follows it.

The player keeps $P$ inside the triangle with some room to each side so that every mark stays readable, keeps $AB$ close to level and of a fair size, and keeps the figure in the frame; a drag that would break one of these is refused."""),
        ('Consequences', r"""• **The centre.** At the centre of the triangle the three distances are equal, so each is $\\frac{h}{3}$: the radius of the inscribed circle is one third of the height, as the [incentre](!/geometry/visual-tools/incentre) and [centroid](!/geometry/visual-tools/centroid) pages agree, since in an equilateral triangle these centres coincide.
• **The height itself.** Moving $P$ to the vertex $C$ makes $PD$ and $PE$ zero and $PF$ the height, the extreme case of the formula.
• **Other triangles.** For a triangle with sides $a$, $b$, $c$ the same area argument gives $a \\cdot PD + b \\cdot PE + c \\cdot PF = 2[ABC]$; only when the sides are equal does this become a fixed plain sum.
• **Regular polygons.** The proof works for any polygon with equal sides, such as a square or a [regular hexagon](!/geometry/visual-tools/regular-hexagon): splitting it into triangles from $P$ shows that the distances to the sides always have the same sum.
• **Equidistant points.** The points equally far from two sides lie on the [angle bisector](!/geometry/visual-tools/angle-bisector-locus) between them, which is another way to find the centre where all three distances agree."""),
    ],
    order=[('the-statement', 'given'), ('three-triangles', 'split'), ('the-small-triangles', 'parts'), ('the-whole-triangle', 'whole'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ("What does Viviani's theorem say?", 'From any point inside an equilateral triangle, the three perpendicular distances to the sides add up to the height of the triangle.'),
        ("How is Viviani's theorem proved?", 'Join the point to the three vertices. The three small triangles fill the whole one; each has a side of length a as its base and one of the distances as its height. Adding their areas and comparing with half of a times the height gives the result.'),
        ('Does it work for other triangles?', 'Not as a plain sum. For any triangle the sides times the distances add up to twice the area, which is a fixed plain sum only when the three sides are equal.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'P inside the triangle with the perpendiculars PD, PE, PF and the height h.'),
            ('split', 'Three triangles, frozen', 'PBC, PCA and PAB shaded: they fill ABC.'),
            ('parts', 'The small triangles, frozen', 'Base a, heights PD, PE and PF.'),
            ('whole', 'The whole triangle, frozen', 'Base a, height h.'),
            ('conclude', 'The conclusion, frozen', 'PD + PE + PF = h.')],
    dragged_cap='After dragging P, frozen', dragged_txt='P moved right and down: three new distances, the same sum.',
    notes=[('given', 'Drag P: the sum stays equal to h.', 'the-statement', 'Learn more about the statement'),
           ('split', 'Three triangles fill the whole.', 'three-triangles', 'Learn more about the three triangles'),
           ('parts', 'Each part: half a times its distance.', 'the-small-triangles', 'Learn more about the small triangles'),
           ('whole', 'The whole: half a times h.', 'the-whole-triangle', 'Learn more about the whole triangle'),
           ('conclude', 'Drag P: the readout keeps the sum at h.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $P$ inside the triangle, or $A$ or $B$ to turn and resize it; the readout under the canvas shows the sum of the distances and the height. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['SPLIT\nNext → : three triangles fill ABC.',
               'PARTS\nEach part is ½a times its distance.',
               'WHOLE\nThe whole triangle is ½a·h.',
               'CONCLUDE\nPD + PE + PF = h.'],
    demo_drag_say='DRAG P\nMove P: the distances change, the sum stays h.',
    drag_desc='P moves freely inside the triangle; A and B turn and resize it, and the hollow points C, D, E and F follow',
    readout_desc='the line under the figure: PD + PE + PF and the height h, live while you drag',
    p3top='232px', p3left='calc(25% - 68px)',
    frame2=[('The perpendiculars', 'PD, PE and PF from P to the sides', '170px', 'calc(25% - 20px)'),
            ('The three triangles', 'shaded, filling ABC', '242px', 'calc(25% - 81px)'),
            ('The height h', 'a bar beside the triangle, up to the level of C', '192px', 'calc(25% + 82px)'),
            ('Justification tags', 'Given, Area addition, Triangle area, Combining', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the point and the triangle are moved by dragging.',
    input_rows=[['$P$', 'solid dot', 'moves freely inside the triangle'],
                ['$A$, $B$', 'solid dot', 'turn and resize the triangle; it stays equilateral'],
                ['$C$, $D$, $E$, $F$', 'hollow dot', 'cannot be dragged: the third vertex and the feet of the perpendiculars'],
                ['$P$ too close to a side or outside, $AB$ tilted too far, too short or too long, or a point out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $D$, $E$, $F$, $P$',
    measures_desc='this figure has no marked angles, so Measures changes nothing',
    readout_short='PD + PE + PF and the height h', tags='**Given**, **Area addition**, **Triangle area**, **Combining**',
    beh1='The readout is a check, not a step of the proof. The argument uses areas, never the numbers, which is why the sum equals the height for every position you drag.',
    beh2t='The feet are computed', beh2='D, E and F are found as the feet of the perpendiculars from P, and the height from C to AB; nothing makes the distances add up, so the equality in the readout is a real check.',
)]
