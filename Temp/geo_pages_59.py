# Content for page 59, the angle of a regular polygon, read by geo-view-42-45.py (argument geo_pages_59)
PAGES = [dict(
    slug='regular-polygon-angles', prev='midpoint-of-hypotenuse', prev_h1='Midpoint of the Hypotenuse', prev_key='midpointHypotenuse', prev_dragged='draggedMidHyp',
    key='regularPolygonAngles', dragged='draggedRegularPolygon', dragged_comment='A moved: the pentagon turned and grew, every angle still 108°',
    dragged_expr="{ ...PROOFS.regularPolygonAngles.model, points: { ...PROOFS.regularPolygonAngles.model.points, A: { x: 305, y: 82 } } }",
    demo_drag="{ drag: '[data-handle=\"A\"]', dx: 12, dy: -4, ms: 1400 },",
    subCategory='Polygon',
    title='Regular Polygon Angle Proof | Each Interior Angle Is 180° − 360°/n Step by Step',
    desc='Watch the proof that each interior angle of a regular polygon is 180° − 360°/n, shown on a regular pentagon: congruent triangles from the centre, the angles at the centre and isosceles base angles, step by step. Then drag the pentagon.',
    h1='Angles of a Regular Polygon', name='Regular Polygon Angles Proof',
    appdesc='Step-by-step interactive proof that each interior angle of a regular n-gon is 180° − 360°/n, by congruent isosceles triangles about the centre, shown on a draggable regular pentagon.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="38" r="30" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><polygon points="40,8 69,29 58,62 22,62 11,29" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><line x1="40" y1="38" x2="40" y2="8" stroke="#E6F1FB" stroke-width="1"/><line x1="40" y1="38" x2="69" y2="29" stroke="#E6F1FB" stroke-width="1"/><path d="M61,24 A10,10 0 0 1 62,37" fill="none" stroke="#FAC775" stroke-width="1.6"/><text x="40" y="78" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">180° − 360°/n</text></svg>',
    keywords=['regular polygon interior angle', 'interior angle of a regular polygon formula', 'regular pentagon angle 108', 'central angle of a regular polygon', 'exterior angle 360/n', 'regular polygon', 'isosceles triangles', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'radii', 'central', 'isosceles', 'combine', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $A$ to turn and resize the pentagon, or $O$ to move it, and watch the three angles in the readout stay at $72°$, $54°$ and $108°$. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""A regular polygon has all its sides equal and all its angles equal, and its vertices lie on a circle with centre $O$. The theorem gives the size of each interior angle of a regular polygon with $n$ sides:

$$\\text{interior angle} = 180° - \\frac{360°}{n} = \\frac{(n - 2) \\cdot 180°}{n}$$

For the pentagon in the player that is $180° - 72° = 108°$. The two forms of the formula come from two proofs: the second divides the [polygon angle sum](!/geometry/visual-tools/polygon-angle-sum) by $n$, the first, proved here, works from the centre of the polygon, as on the [regular hexagon](!/geometry/visual-tools/regular-hexagon) page.

In the player $O$ and $A$ are free, and $B$ to $E$ are $A$ turned about $O$ by $72°$ at a time; the readout shows the angle at the centre, a base angle and an interior angle."""),
        ('Five Congruent Triangles', r"""Join $O$ to the five vertices. The five segments are radii, so they are equal. They cut the pentagon into five triangles $OAB$, $OBC$, $OCD$, $ODE$, $OEA$, each with two radii and one side of the pentagon. The sides are equal because the pentagon is regular, so the five triangles have the same three side lengths, and by [SSS](!/geometry/visual-tools/sss-congruence) they are congruent."""),
        ('The Angle at the Centre', r"""Congruent triangles have equal angles, so the five angles at $O$ are equal, $\\theta$ each. Together they fill the full turn round $O$ ([angles around a point](!/geometry/visual-tools/angles-around-a-point)):

$$5\\theta = 360°, \\qquad \\theta = 72°$$

For a regular $n$-gon, $\\theta = 360°/n$; this is the central angle of the polygon."""),
        ('The Base Angles', r"""Each of the five triangles is isosceles, with the two radii as equal sides, so its [base angles](!/geometry/visual-tools/isosceles-base-angles) are equal, $\\varphi$ each. The [angle sum](!/geometry/visual-tools/triangle-angle-sum) of the triangle gives

$$\\theta + 2\\varphi = 180°, \\qquad \\varphi = \\frac{180° - 72°}{2} = 54°$$"""),
        ('Two Base Angles at Each Vertex', r"""At the vertex $B$ the radius $OB$ splits the interior angle $ABC$ into two parts. One part, $\\angle ABO$, is a base angle of the triangle $OAB$; the other, $\\angle OBC$, is a base angle of $OBC$. Both are $\\varphi$, so

$$\\angle ABC = 2\\varphi = 108°$$

and the same at every vertex, since all five triangles are congruent."""),
        ('Why It Holds', r"""In general $2\\varphi = 180° - \\theta$, so

$$\\text{interior angle} = 180° - \\frac{360°}{n}$$

$60°$ for the equilateral triangle, $90°$ for the square, $108°$ for the pentagon, $120°$ for the hexagon, $135°$ for the octagon. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, SSS, angles around a point, isosceles base angles, adding, and combining.

As a check, $n$ such angles add up to $n \\cdot 180° - 360° = (n - 2) \\cdot 180°$, the polygon angle sum. And the exterior angle at each vertex is $180°$ minus the interior one, $360°/n$, the same as the angle at the centre; $n$ of them make the $360°$ of the [polygon exterior angles](!/geometry/visual-tools/polygon-exterior-angles) page."""),
        ('Dragging the Figure', r"""Drag $A$: the whole pentagon turns with it and grows or shrinks, since $B$ to $E$ are always $A$ turned about $O$ by $72°$ steps, and the three angles in the readout do not change. Drag $O$ to move the circle; $A$ stays where it is, so the pentagon turns and resizes about the new centre.

The player keeps the radius within a range that keeps the five angle marks at the centre readable and the pentagon in the frame; a drag outside that range is refused."""),
        ('Consequences', r"""• **Tilings.** Copies of one regular polygon fill the plane round a vertex only if the interior angle divides $360°$: $60°$, $90°$ and $120°$ do, $108°$ does not, so the only regular tilings use triangles, squares and hexagons.
• **Exterior angle = central angle.** Both are $360°/n$: turning by the exterior angle at each vertex, a walker turns as far as the radius does from one vertex to the next.
• **Counting sides from the angle.** An interior angle of $140°$ means $360°/n = 40°$, so $n = 9$; any angle $180° - 360°/n$ fixes $n$.
• **The hexagon.** For $n = 6$ the base angles are $60°$, so the triangles are equilateral and the side equals the radius, the [regular hexagon](!/geometry/visual-tools/regular-hexagon) theorem.
• **Diagonals of the pentagon.** The angles $108°$ and $36°$ that appear when the diagonals are drawn give the golden ratio as the ratio of diagonal to side, through [similar triangles](!/geometry/visual-tools/aa-similarity)."""),
    ],
    order=[('the-statement', 'given'), ('five-congruent-triangles', 'radii'), ('the-angle-at-the-centre', 'central'), ('the-base-angles', 'isosceles'), ('two-base-angles-at-each-vertex', 'combine'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('What is the formula for the interior angle of a regular polygon?', 'Each interior angle of a regular polygon with n sides is 180° − 360°/n, which is the same as (n − 2)·180°/n. For a pentagon it is 108°, for a hexagon 120°, for an octagon 135°.'),
        ('How is the interior angle of a regular polygon derived?', 'The radii from the centre cut the polygon into n congruent isosceles triangles whose angles at the centre are 360°/n each. Their base angles are (180° − 360°/n)/2, and two of them meet at every vertex, so the interior angle is 180° − 360°/n.'),
        ('What is the exterior angle of a regular polygon?', '360°/n, the same as the angle at the centre between two neighbouring radii; the n exterior angles add up to 360°.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The regular pentagon ABCDE in its circle, five equal sides.'),
            ('radii', 'Five congruent triangles, frozen', 'Five equal radii: five triangles congruent by SSS.'),
            ('central', 'The angle at the centre, frozen', 'Five equal angles θ round O: θ = 72°.'),
            ('isosceles', 'The base angles, frozen', 'OAB shaded: base angles φ = (180° − 72°)/2 = 54°.'),
            ('combine', 'Two base angles at each vertex, frozen', 'The angle at B is φ + φ = 108°.'),
            ('conclude', 'The conclusion, frozen', 'Each interior angle is 180° − 360°/n.')],
    dragged_cap='After dragging A, frozen', dragged_txt='A moved: the pentagon turned and grew, every angle still 108°.',
    notes=[('given', 'Drag A: the pentagon turns and resizes.', 'the-statement', 'Learn more about the statement'),
           ('radii', 'Two radii and a side in every triangle.', 'five-congruent-triangles', 'Learn more about the five triangles'),
           ('central', 'Five equal angles make a full turn.', 'the-angle-at-the-centre', 'Learn more about the angle at the centre'),
           ('isosceles', 'Two radii: equal base angles.', 'the-base-angles', 'Learn more about the base angles'),
           ('combine', 'The radius splits the angle at B into two base angles.', 'two-base-angles-at-each-vertex', 'Learn more about the angle at a vertex'),
           ('conclude', 'Drag A: the readout keeps 72°, 54° and 108°.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $A$ to turn and resize the pentagon, or $O$ to move it; the readout under the canvas shows the angle at the centre, a base angle and an interior angle. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['RADII\nNext → : five equal radii cut the pentagon into five congruent triangles.',
               'CENTRE\nFive equal angles round O: 360°/5 = 72° each.',
               'BASE ANGLES\nEach triangle is isosceles: (180° − 72°)/2 = 54°.',
               'VERTEX\nTwo base angles meet at B: 2 · 54° = 108°.',
               'CONCLUDE\nIn general the interior angle is 180° − 360°/n.'],
    demo_drag_say='DRAG A\nTurn the pentagon: the angles do not change.',
    drag_desc='A turns and resizes the pentagon, O moves the circle; the hollow points B to E follow, 72° apart',
    readout_desc='the line under the figure: the angle at the centre, a base angle and an interior angle, live while you drag',
    p3top='170px', p3left='calc(25% - 40px)',
    frame2=[('The five radii', 'equal, one tick each, cutting the pentagon into five triangles', '250px', 'calc(25% - 70px)'),
            ('The angles at the centre', 'five angles θ round O, 72° each', '200px', 'calc(25% + 60px)'),
            ('The angle at B', 'β = φ + φ, made of the base angles of OAB and OBC', '96px', 'calc(25% + 140px)'),
            ('Justification tags', 'Given, SSS, Angles around a point, Isosceles base angles, Adding, Combining', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the pentagon is turned, resized and moved by dragging, and stays regular.',
    input_rows=[['$A$', 'solid dot', 'turns and resizes the pentagon; the other four vertices follow'],
                ['$O$', 'solid dot', 'moves the centre; $A$ stays put, so the pentagon turns about the new centre'],
                ['$B$ to $E$', 'hollow dot', 'cannot be dragged: $A$ turned about $O$ by $72°$, $144°$, and so on'],
                ['a radius too small or too large for the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$ to $E$ and $O$',
    measures_desc="write each marked angle's size in degrees beside its arc: θ at the centre, φ at A and B, β at B",
    readout_short='the angle at the centre, a base angle and an interior angle', tags='**Given**, **SSS**, **Angles around a point**, **Isosceles base angles**, **Adding**, **Combining**',
    beh1='The readout is a check, not a step of the proof. The argument uses SSS, the full turn, isosceles base angles and the angle sum, never the numbers, which is why the angles stay the same for every pentagon you drag.',
    beh2t='Five sides stand for n', beh2='The player shows a pentagon, but every step is written for n sides as well: n triangles, 360°/n at the centre, 180° − 360°/n at each vertex.',
)]
