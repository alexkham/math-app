# Content for page 84, the area of a regular polygon is half the perimeter times the apothem, read by geo-view-42-45.py (argument geo_pages_84)
# Strings in single quotes must not contain an apostrophe.
PAGES = [dict(
    slug='regular-polygon-area', prev='concentric-circles-chord', prev_h1='A Chord of Two Concentric Circles', prev_key='concentricChord', prev_dragged='draggedConcentricChord',
    key='regularPolygonArea', dragged='draggedRegularPolygonArea', dragged_comment='A moved: the hexagon turned and shrank, the two values still equal',
    dragged_expr="{ ...PROOFS.regularPolygonArea.model, points: { ...PROOFS.regularPolygonArea.model.points, A: { x: 185, y: 175 } } }",
    demo_drag="{ drag: '[data-handle=\"A\"]', dx: -12, dy: 10, ms: 1400 },",
    subCategory='Polygon',
    title='Area of a Regular Polygon | Half the Perimeter Times the Apothem Proof Step by Step',
    desc='Watch the proof that the area of a regular polygon is half its perimeter times its apothem, by cutting it into congruent triangles from the centre, step by step, on a regular hexagon. Then drag the centre and a vertex.',
    h1='Area of a Regular Polygon', name='Regular Polygon Area Proof',
    appdesc='Step-by-step interactive proof that the area of a regular polygon equals one half of the perimeter times the apothem, with a draggable regular hexagon.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="26,12 54,12 68,36 54,60 26,60 12,36" fill="none" stroke="#E6F1FB" stroke-width="1.4"/><polygon points="40,36 26,12 54,12" fill="#FAC775" fill-opacity="0.35"/><polygon points="40,36 54,60 26,60" fill="#FAC775" fill-opacity="0.35"/><polygon points="40,36 12,36 26,12" fill="#E6F1FB" fill-opacity="0.2"/><line x1="40" y1="36" x2="40" y2="12" stroke="#FAC775" stroke-width="1.6"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">area = ½ · P · a</text></svg>',
    keywords=['area of a regular polygon', 'regular polygon area formula', 'half perimeter times apothem', 'apothem', 'area of a regular hexagon', 'regular polygon', 'polygon theorems', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'split', 'congruent', 'one', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $O$ to move the hexagon, or $A$ to turn and resize it, and watch the readout: the measured area and half the perimeter times the apothem stay equal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""A regular polygon has all its sides equal and all its angles equal, and a centre $O$ equally far from all its vertices. Its apothem $a$ is the perpendicular distance from $O$ to a side, the segment $OM$ in the player. For a regular polygon with perimeter $P$ the theorem says

$$\\text{area} = \\frac{1}{2} \\cdot P \\cdot a$$

The player shows a regular hexagon $ABCDEF$ with side $s$, so $P = 6s$; the proof is the same for any number of sides.

In the player $O$ and $A$ can be dragged; the other vertices are $A$ turned about $O$ by $60°$ at a time, as on the [regular hexagon](!/geometry/visual-tools/regular-hexagon) page. The readout shows the area measured from the corner positions and the value of $\\frac{1}{2} \\cdot P \\cdot a$, in square units of $60$ pixels."""),
        ('Six Triangles', r"""Join $O$ to the six vertices. The triangles $OAB$, $OBC$, $OCD$, $ODE$, $OEF$ and $OFA$, shaded in turn, fill the hexagon without overlapping, so

$$\\text{area} = [OAB] + [OBC] + [OCD] + [ODE] + [OEF] + [OFA]$$

where $[XYZ]$ is the area of the triangle $XYZ$."""),
        ('Congruent Triangles', r"""Each triangle has two sides from $O$ to neighbouring vertices, all equal because $O$ is equally far from every vertex, and a third side $s$. By [SSS congruence](!/geometry/visual-tools/sss-congruence) the six triangles are congruent, so they have the same area and the same height from $O$ to their base, the apothem $a$."""),
        ('One Triangle', r"""The triangle $OAB$ has the base $AB = s$ and the height $OM = a$:

$$[OAB] = \\frac{1}{2} \\cdot s \\cdot a$$"""),
        ('Why It Holds', r"""Six triangles of the same area give

$$\\text{area} = 6 \\cdot \\frac{1}{2} \\cdot s \\cdot a = \\frac{1}{2} \\cdot (6s) \\cdot a = \\frac{1}{2} \\cdot P \\cdot a$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, area addition, SSS congruence, the area of a triangle and combining.

With $n$ sides the same steps give $n$ triangles and $\\frac{1}{2} \\cdot (ns) \\cdot a$, and $ns$ is again the perimeter."""),
        ('Dragging the Figure', r"""Drag $O$ to move the whole hexagon, or $A$ to turn it about $O$ and change its size: the side and the apothem change together, and the readout keeps the two values equal.

The player keeps the hexagon between two sizes and every vertex far enough inside the frame for its name; a drag that would break one of these is refused."""),
        ('Consequences', r"""• **The hexagon in numbers.** In a regular hexagon the side equals the radius and the apothem is $\\frac{\\sqrt{3}}{2}s$, so its area is $\\frac{3\\sqrt{3}}{2}s^2$, six equilateral triangles.
• **The circle.** As the number of sides grows, the perimeter approaches the circumference $2\\pi r$ and the apothem approaches the radius $r$, and $\\frac{1}{2} \\cdot 2\\pi r \\cdot r = \\pi r^2$, the area of the circle.
• **Polygons with an inscribed circle.** The apothem is the radius of the circle touching every side. Any polygon with such a circle, regular or not, has area $\\frac{1}{2} \\cdot P \\cdot r$ by the same splitting; for a triangle this is $r$ times half the perimeter, with $r$ the radius of the circle about the [incentre](!/geometry/visual-tools/incentre), and the [Pitot theorem](!/geometry/visual-tools/pitot-theorem) page shows such a quadrilateral.
• **Distances from any point.** From any point inside a regular polygon, the distances to the sides add up to $n$ times the apothem; for the equilateral triangle this is [Viviani's theorem](!/geometry/visual-tools/viviani-theorem)."""),
    ],
    order=[('the-statement', 'given'), ('six-triangles', 'split'), ('congruent-triangles', 'congruent'), ('one-triangle', 'one'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('What is the area formula for a regular polygon?', 'The area is half the perimeter times the apothem, where the apothem is the distance from the centre to a side.'),
        ('Why does the formula work?', 'Lines from the centre to the vertices cut the polygon into congruent triangles. Each has a side as its base and the apothem as its height, so together they give half the apothem times the total length of the sides.'),
        ('What is the apothem?', 'The apothem of a regular polygon is the perpendicular segment from its centre to a side, and its length is the radius of the circle that touches every side.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The regular hexagon with its apothem OM.'),
            ('split', 'Six triangles, frozen', 'The six triangles from O, shaded in turn.'),
            ('congruent', 'Congruent triangles, frozen', 'Six congruent triangles with the same height a.'),
            ('one', 'One triangle, frozen', '[OAB] = ½ · s · a.'),
            ('conclude', 'The conclusion, frozen', 'Area = ½ · P · a.')],
    dragged_cap='After dragging A, frozen', dragged_txt='A moved: the hexagon turned and shrank, the two values still equal.',
    notes=[('given', 'Drag A: the readout keeps the two values equal.', 'the-statement', 'Learn more about the statement'),
           ('split', 'Six triangles fill the hexagon.', 'six-triangles', 'Learn more about the six triangles'),
           ('congruent', 'SSS: all six are congruent.', 'congruent-triangles', 'Learn more about the congruent triangles'),
           ('one', 'Half the base times the height.', 'one-triangle', 'Learn more about one triangle'),
           ('conclude', 'Drag O or A: the two values stay equal.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $O$ to move the hexagon, or $A$ to turn and resize it; the readout under the canvas shows the area and half the perimeter times the apothem. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['SPLIT\nNext → : six triangles from the centre.',
               'CONGRUENT\nSSS: the six are congruent, height a each.',
               'ONE\n[OAB] = ½ · s · a.',
               'CONCLUDE\nArea = ½ · P · a.'],
    demo_drag_say='DRAG A\nTurn and resize: the two values stay equal.',
    drag_desc='O moves the hexagon and A turns and resizes it; the hollow vertices B to F and the point M follow',
    readout_desc='the line under the figure: the measured area and half the perimeter times the apothem, live while you drag',
    p3top='150px', p3left='calc(25% - 40px)',
    frame2=[('The apothem a', 'from O square to the side AB', '144px', 'calc(25% - 16px)'),
            ('The six triangles', 'shaded in turn, all congruent', '183px', 'calc(25% - 60px)'),
            ('The side s', 'one of six equal sides', '204px', 'calc(25% + 52px)'),
            ('Justification tags', 'Given, Area addition, SSS congruence, Triangle area, Combining', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the hexagon is moved, turned and resized by dragging.',
    input_rows=[['$O$', 'solid dot', 'moves the whole hexagon'],
                ['$A$', 'solid dot', 'turns the hexagon about $O$ and changes its size'],
                ['$B$ to $F$, $M$', 'hollow dot', 'cannot be dragged: $A$ turned about $O$ by $60°$ at a time, and the midpoint of $AB$'],
                ['a hexagon too small or too big, or a vertex out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$ to $F$, $M$ and $O$',
    measures_desc='this figure has no marked angles, so Measures changes nothing',
    readout_short='the area and half the perimeter times the apothem', tags='**Given**, **Area addition**, **SSS congruence**, **Triangle area**, **Combining**',
    beh1='The readout is a check, not a step of the proof. The argument uses congruent triangles and the triangle area, never the numbers, which is why the two values agree for every position you drag.',
    beh2t='The area is measured', beh2='The area in the readout is computed from the six corner positions, separately from the side and the apothem; nothing makes the two values agree, so the equality in the readout is a real check.',
)]
