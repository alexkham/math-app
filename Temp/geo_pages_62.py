# Content for page 62, the diagonals of a square, read by geo-view-42-45.py (argument geo_pages_62)
PAGES = [dict(
    slug='square-diagonals', prev='angle-bisector-locus', prev_h1='Angle Bisector: Equidistant from the Arms', prev_key='angleBisectorLocus', prev_dragged='draggedBisectorLocus',
    key='squareDiagonals', dragged='draggedSquare', dragged_comment='B moved up a little: the square turned, its diagonals still equal and perpendicular',
    dragged_expr="{ ...PROOFS.squareDiagonals.model, points: { ...PROOFS.squareDiagonals.model.points, B: { x: 370, y: 290 } } }",
    demo_drag="{ drag: '[data-handle=\"B\"]', dx: -8, dy: -8, ms: 1400 },",
    subCategory='Quadrilateral',
    title='Square Diagonals Proof | Equal, Perpendicular, 45° and Side √2 Step by Step',
    desc='Watch the proof that the diagonals of a square are equal, perpendicular, bisect each other, meet the sides at 45° and are √2 times the side, by isosceles right triangles, SAS and Pythagoras, step by step. Then drag the square.',
    h1='Diagonals of a Square', name='Square Diagonals Proof',
    appdesc='Step-by-step interactive proof of the properties of the diagonals of a square: 45° with the sides, equal, perpendicular, bisecting each other and side times √2, with a draggable square.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="10" width="52" height="52" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><line x1="14" y1="62" x2="66" y2="10" stroke="#FAC775" stroke-width="1.6"/><line x1="14" y1="10" x2="66" y2="62" stroke="#FAC775" stroke-width="1.6"/><polyline points="36,32 40,36 44,32" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">d = s√2</text></svg>',
    keywords=['diagonals of a square', 'square diagonal length', 'diagonal of a square formula', 'square diagonals perpendicular', 'square diagonal 45 degrees', 'isosceles right triangle', 'square properties', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'half', 'equal', 'perpendicular', 'bisect', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $A$ or $B$ to turn and resize the square, and watch the readout: the two diagonals stay equal to each other and to the side times $\\sqrt2$, and they cross at $90°$. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""A square has four equal sides and four right angles. Its diagonals $AC$ and $BD$ have every good property a quadrilateral's diagonals can have:

$$AC = BD = AB\\sqrt2, \\qquad AC \\perp BD, \\qquad OA = OB = OC = OD$$

and each diagonal meets the sides at $45°$, halving the right angles. A square is both a rectangle and a rhombus, so these facts also follow from the [rectangle diagonals](!/geometry/visual-tools/rectangle-diagonals) (equal) and the [rhombus diagonals](!/geometry/visual-tools/rhombus-diagonals) (perpendicular) pages; this page proves them directly, from one observation: a diagonal cuts the square into two isosceles right triangles.

In the player $A$ and $B$ are free, and $D$ and $C$ are built so that $ABCD$ is always a square; the readout shows both diagonals, the side times $\\sqrt2$ and the angle between the diagonals."""),
        ('Half a Square', r"""The diagonal $AC$ cuts off the triangle $ABC$, with $AB = BC$ (sides of the square) and a right angle at $B$. It is isosceles, so its [base angles](!/geometry/visual-tools/isosceles-base-angles) at $A$ and $C$ are equal, $\\varphi$ each, and the [angle sum](!/geometry/visual-tools/triangle-angle-sum) gives

$$2\\varphi + 90° = 180°, \\qquad \\varphi = 45°$$

The diagonal halves the right angles at $A$ and $C$, meeting the sides at $45°$."""),
        ('Equal Diagonals', r"""Draw the second diagonal $BD$. The triangles $ABC$ and $BAD$ share the side $AB$, have $BC = AD$, and have right angles at $B$ and $A$ between those sides. By SAS they are congruent, so

$$AC = BD$$

The same isosceles argument in $BAD$ gives $\\angle ABD = 45°$."""),
        ('A Right Angle at the Centre', r"""Let the diagonals cross at $O$. In the triangle $OAB$ the angle at $A$ is $\\angle CAB = 45°$ and the angle at $B$ is $\\angle DBA = 45°$, so by the angle sum

$$\\angle AOB = 180° - 45° - 45° = 90°$$

The diagonals are perpendicular."""),
        ('The Diagonals Bisect Each Other', r"""The triangle $OAB$ has equal angles at $A$ and $B$, so the sides facing them are equal: $OA = OB$. Each of the four triangles $OAB$, $OBC$, $OCD$, $ODA$ around $O$ has two $45°$ angles in the same way, so

$$OA = OB = OC = OD$$

The diagonals cut each other in half, and $O$ is equally far from all four corners: the centre of the square's circumcircle."""),
        ('Why It Holds', r"""Finally, the length. In the right triangle $ABC$ the [Pythagorean theorem](!/geometry/visual-tools/pythagorean-theorem) gives

$$AC^2 = AB^2 + BC^2 = 2 \\cdot AB^2, \\qquad AC = AB\\sqrt2$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, isosceles base angles, SAS, the angle sum, equal angles facing equal sides, and the Pythagorean theorem.

Everything comes from the four triangles with angles $45°$, $45°$, $90°$: the two halves of the square cut by a diagonal, and the four quarters cut by both."""),
        ('Dragging the Figure', r"""Drag $A$ or $B$: the square turns and grows or shrinks, $C$ and $D$ follow, and the readout shows $AC = BD = AB\\sqrt2$ and $\\angle AOB = 90°$ at every position. The ratio of diagonal to side never changes: it is always $\\sqrt2 \\approx 1.414$.

The player keeps the side long enough for the marks and the whole square inside the frame; a drag that would push a corner out is refused."""),
        ('Consequences', r"""• **The diagonal formula.** A square of side $s$ has diagonal $s\\sqrt2$; conversely a square with diagonal $d$ has side $d/\\sqrt2$ and area $d^2/2$, half the square on the diagonal.
• **Doubling the square.** The square on the diagonal has twice the area of the original, the construction Socrates draws in Plato's Meno.
• **√2 is irrational.** The diagonal and the side of a square have no common measure; this was the first irrational ratio found, by the Pythagoreans.
• **The 45-45-90 triangle.** Half a square is the right isosceles triangle with sides in the ratio $1 : 1 : \\sqrt2$, which gives $\\sin 45° = \\cos 45° = 1/\\sqrt2$.
• **Rectangle and rhombus.** A square is both: equal diagonals from the [rectangle](!/geometry/visual-tools/rectangle-diagonals) page, perpendicular ones from the [rhombus](!/geometry/visual-tools/rhombus-diagonals) page, both bisecting from the [parallelogram](!/geometry/visual-tools/parallelogram-diagonals) page. A quadrilateral whose diagonals are equal, perpendicular and bisect each other is a square."""),
    ],
    order=[('the-statement', 'given'), ('half-a-square', 'half'), ('equal-diagonals', 'equal'), ('a-right-angle-at-the-centre', 'perpendicular'), ('the-diagonals-bisect-each-other', 'bisect'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('How long is the diagonal of a square?', 'The side times √2. In the right triangle formed by two sides and a diagonal, the Pythagorean theorem gives d² = s² + s² = 2s², so d = s√2, about 1.414 times the side.'),
        ('Are the diagonals of a square perpendicular?', 'Yes. Each diagonal meets the sides at 45°, so in each of the four triangles around the crossing point the two angles at the square\'s corners are 45° and the angle at the centre is 90°.'),
        ('What angle does the diagonal of a square make with a side?', '45°. The diagonal cuts the square into two isosceles right triangles, whose base angles are (180° − 90°)/2 = 45°.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The square ABCD: four equal sides, four right angles.'),
            ('half', 'Half a square, frozen', 'ABC shaded: isosceles with a right angle at B, base angles φ = 45°.'),
            ('equal', 'Equal diagonals, frozen', 'BD drawn; ABC and BAD congruent by SAS: AC = BD.'),
            ('perpendicular', 'A right angle at the centre, frozen', 'OAB shaded: two 45° angles, so 90° at O.'),
            ('bisect', 'The diagonals bisect each other, frozen', 'OA = OB = OC = OD, two ticks each.'),
            ('conclude', 'The conclusion, frozen', 'AC = BD = AB · √2.')],
    dragged_cap='After dragging B, frozen', dragged_txt='B moved up a little: the square turned, its diagonals still equal and perpendicular.',
    notes=[('given', 'Drag A or B: C and D keep the square.', 'the-statement', 'Learn more about the statement'),
           ('half', 'Half a square is a 45-45-90 triangle.', 'half-a-square', 'Learn more about half a square'),
           ('equal', 'Two sides and the right angle: SAS.', 'equal-diagonals', 'Learn more about the equal diagonals'),
           ('perpendicular', 'Two 45° angles leave 90° at O.', 'a-right-angle-at-the-centre', 'Learn more about the right angle'),
           ('bisect', 'Equal angles face equal sides.', 'the-diagonals-bisect-each-other', 'Learn more about the bisection'),
           ('conclude', 'Drag a corner: the readout keeps AC = BD = AB·√2.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $A$ or $B$ to turn and resize the square; the readout under the canvas shows both diagonals, the side times $\\sqrt2$ and the angle at $O$. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['45°\nNext → : ABC is isosceles with a right angle: base angles 45°.',
               'SAS\nABC and BAD are congruent: AC = BD.',
               'PERPENDICULAR\nTwo 45° angles in OAB leave 90° at O.',
               'BISECT\nEqual angles, equal sides: OA = OB = OC = OD.',
               'LENGTH\nPythagoras: AC = AB · √2.'],
    demo_drag_say='DRAG B\nTurn the square: the diagonals keep every property.',
    drag_desc='A and B move freely and turn or resize the square; the hollow points C, D and O follow',
    readout_desc='the line under the figure: AC, BD, AB·√2 and the angle at O, live while you drag',
    p3top='150px', p3left='calc(25% + 50px)',
    frame2=[('The two diagonals', 'AC and BD, equal and crossing at right angles at O', '150px', 'calc(25% - 10px)'),
            ('The 45° angles', 'φ at A, B and C, where the diagonals halve the right angles', '250px', 'calc(25% - 110px)'),
            ('The half diagonals', 'OA, OB, OC, OD, two ticks each', '100px', 'calc(25% + 110px)'),
            ('Justification tags', 'Given, Isosceles base angles, SAS, Angle sum, Equal angles equal sides, Pythagorean theorem', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the square is turned and resized by dragging two corners and stays a square.',
    input_rows=[['$A$, $B$', 'solid dot', 'move freely; the square is built on the side $AB$'],
                ['$C$, $D$, $O$', 'hollow dot', 'cannot be dragged: the other two corners and the crossing of the diagonals'],
                ['a side too short, or a corner out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $D$, $O$',
    measures_desc="write each marked angle's size in degrees beside its arc: the 45° angles φ",
    readout_short='both diagonals, the side times √2 and the angle at O', tags='**Given**, **Isosceles base angles**, **SAS**, **Angle sum**, **Equal angles, equal sides**, **Pythagorean theorem**',
    beh1='The readout is a check, not a step of the proof. The argument uses isosceles base angles, SAS, the angle sum and Pythagoras, never the numbers, which is why the readout agrees for every square you drag.',
    beh2t='The square is built in', beh2='D is placed on the perpendicular to AB at A at the distance AB, and C = D + (B − A), so ABCD is always a square; that is the hypothesis, built into the figure.',
)]
