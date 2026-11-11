# Content for page 63, the equilateral triangle, read by geo-view-42-45.py (argument geo_pages_63)
PAGES = [dict(
    slug='equilateral-triangle', prev='square-diagonals', prev_h1='Diagonals of a Square', prev_key='squareDiagonals', prev_dragged='draggedSquare',
    key='equilateralTriangle', dragged='draggedEquilateral', dragged_comment='B moved up and in: the triangle turned and shrank, every angle still 60°',
    dragged_expr="{ ...PROOFS.equilateralTriangle.model, points: { ...PROOFS.equilateralTriangle.model.points, B: { x: 390, y: 275 } } }",
    demo_drag="{ drag: '[data-handle=\"B\"]', dx: -10, dy: -8, ms: 1400 },",
    subCategory='Triangle',
    title='Equilateral Triangle Angles Proof | All Angles 60° Step by Step',
    desc='Watch the proof that every angle of an equilateral triangle is 60°, by the isosceles base angles twice and the angle sum, and why a triangle with three equal angles is equilateral, step by step. Then drag the triangle.',
    h1='Equilateral Triangle: All Angles 60°', name='Equilateral Triangle Proof',
    appdesc='Step-by-step interactive proof that an equilateral triangle has three 60° angles and that an equiangular triangle is equilateral, with a draggable triangle.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="10,64 70,64 40,12" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><path d="M22,64 A12,12 0 0 0 16,54" fill="none" stroke="#FAC775" stroke-width="1.6"/><path d="M58,64 A12,12 0 0 1 64,54" fill="none" stroke="#FAC775" stroke-width="1.6"/><path d="M34,22 A12,12 0 0 0 46,22" fill="none" stroke="#FAC775" stroke-width="1.6"/><text x="40" y="77" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">60° each</text></svg>',
    keywords=['equilateral triangle', 'equilateral triangle angles', 'angles of an equilateral triangle 60', 'equiangular triangle', 'equilateral triangle proof', 'isosceles triangle', 'triangle angle sum', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'first', 'second', 'equal', 'sum', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $A$ or $B$ to turn and resize the triangle, and watch the three angles in the readout stay at $60°$. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""A triangle is equilateral when its three sides are equal, and equiangular when its three angles are equal. The theorem says the two are the same thing, and gives the angle:

$$AB = BC = CA \\iff \\alpha = \\beta = \\gamma = 60°$$

An equilateral triangle is an isosceles triangle in three ways at once, with each vertex as the apex, and the whole proof is the [isosceles base angles](!/geometry/visual-tools/isosceles-base-angles) theorem applied twice, followed by the [angle sum](!/geometry/visual-tools/triangle-angle-sum).

In the player $A$ and $B$ are free and $C$ is placed so that the triangle stays equilateral; the readout shows the three angles and the common side."""),
        ('Apex at A', r"""Take $A$ as the apex: the sides $AB$ and $AC$ are equal, so the triangle is isosceles and its base angles, at $B$ and $C$, are equal:

$$\\beta = \\gamma$$"""),
        ('Apex at B', r"""Now take $B$ as the apex: $BA = BC$, so the base angles at $A$ and $C$ are equal:

$$\\alpha = \\gamma$$"""),
        ('Three Equal Angles', r"""Put the two together: $\\beta = \\gamma$ and $\\alpha = \\gamma$, so

$$\\alpha = \\beta = \\gamma$$

Every equilateral triangle is equiangular. (Taking $C$ as the apex would give $\\alpha = \\beta$ as well, but it is not needed.)"""),
        ('Sixty Degrees', r"""The angles of a triangle add up to $180°$:

$$\\alpha + \\beta + \\gamma = 3\\alpha = 180°, \\qquad \\alpha = \\beta = \\gamma = 60°$$

The size of an equilateral triangle does not matter: big or small, every angle is $60°$."""),
        ('Why It Holds', r"""The converse runs the other way. If a triangle has $\\alpha = \\beta = \\gamma$, then the sides facing equal angles are equal: $\\alpha = \\beta$ gives $BC = CA$, and $\\beta = \\gamma$ gives $CA = AB$. (If two sides facing equal angles were unequal, the [larger side would face the larger angle](!/geometry/visual-tools/larger-side-larger-angle), a contradiction.) So

$$\\text{equilateral} \\iff \\text{equiangular}$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, isosceles base angles twice, combining, the angle sum, and equal angles facing equal sides.

For four or more sides the two ideas come apart: a rhombus has equal sides without equal angles, and a rectangle has equal angles without equal sides. The triangle is the only polygon where either one forces the other."""),
        ('Dragging the Figure', r"""Drag $A$ or $B$: the triangle turns and grows or shrinks, $C$ follows so that the three sides stay equal, and the three angles in the readout stay at $60°$. Only the common side length changes.

The player keeps the side long enough for the angle marks and the whole triangle inside the frame; a drag that would push a vertex out is refused."""),
        ('Consequences', r"""• **The regular hexagon.** Six equilateral triangles meet round a point, $6 \\cdot 60° = 360°$, and make a [regular hexagon](!/geometry/visual-tools/regular-hexagon) whose side equals its radius.
• **Regular polygons.** The equilateral triangle is the regular polygon with $n = 3$; the [regular polygon angle](!/geometry/visual-tools/regular-polygon-angles) $180° - 360°/n$ gives $60°$.
• **Tiling.** Since $60°$ divides $360°$, equilateral triangles tile the plane, six at every vertex.
• **Constructing 60°.** Euclid's first proposition builds an equilateral triangle with two circles of the same radius; that gives a $60°$ angle with compass and ruler, and bisecting it gives $30°$.
• **The 30-60-90 triangle.** The altitude of an equilateral triangle cuts it into two right triangles with angles $30°$, $60°$, $90°$, whose short leg is half the hypotenuse; it gives $\\sin 30° = \\tfrac12$ and $\\cos 30° = \\tfrac{\\sqrt3}{2}$."""),
    ],
    order=[('the-statement', 'given'), ('apex-at-a', 'first'), ('apex-at-b', 'second'), ('three-equal-angles', 'equal'), ('sixty-degrees', 'sum'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('Why are all angles of an equilateral triangle 60°?', 'Any two equal sides make the angles opposite them equal (isosceles base angles), so all three angles are equal. They add up to 180°, so each is 60°.'),
        ('Is a triangle with three equal angles always equilateral?', 'Yes. In a triangle, equal angles face equal sides, so three equal angles give three equal sides. An equiangular triangle is equilateral.'),
        ('Can a quadrilateral have equal sides without equal angles?', 'Yes: a rhombus has four equal sides but its angles are equal only when it is a square. Only for triangles do equal sides force equal angles and the other way round.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The equilateral triangle ABC, one tick on each side.'),
            ('first', 'Apex at A, frozen', 'AB = AC: the base angles β and γ are equal.'),
            ('second', 'Apex at B, frozen', 'BA = BC: the base angles α and γ are equal.'),
            ('equal', 'Three equal angles, frozen', 'α = β = γ.'),
            ('sum', 'Sixty degrees, frozen', '3α = 180°: every angle is 60°.'),
            ('conclude', 'The conclusion, frozen', 'Equilateral exactly when equiangular.')],
    dragged_cap='After dragging B, frozen', dragged_txt='B moved up and in: the triangle turned and shrank, every angle still 60°.',
    notes=[('given', 'Drag A or B: C keeps the sides equal.', 'the-statement', 'Learn more about the statement'),
           ('first', 'Two equal sides at A: equal base angles.', 'apex-at-a', 'Learn more about the apex at A'),
           ('second', 'Two equal sides at B: equal base angles.', 'apex-at-b', 'Learn more about the apex at B'),
           ('equal', 'Two equalities give three.', 'three-equal-angles', 'Learn more about the three angles'),
           ('sum', 'Three equal angles making 180°.', 'sixty-degrees', 'Learn more about the 60° angles'),
           ('conclude', 'Drag a vertex: the readout keeps 60° three times.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $A$ or $B$ to turn and resize the triangle; the readout under the canvas shows the three angles and the common side. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['APEX A\nNext → : AB = AC, so β = γ.',
               'APEX B\nBA = BC, so α = γ.',
               'EQUAL\nSo α = β = γ.',
               'SUM\n3α = 180°: each angle is 60°.',
               'CONVERSE\nEqual angles face equal sides: equiangular means equilateral.'],
    demo_drag_say='DRAG B\nTurn and shrink the triangle: the angles stay 60°.',
    drag_desc='A and B move freely and turn or resize the triangle; the hollow point C follows so all sides stay equal',
    readout_desc='the line under the figure: α, β, γ and the common side, live while you drag',
    p3top='150px', p3left='calc(25% + 60px)',
    frame2=[('The three angles', 'α, β, γ, each 60° at the end', '236px', 'calc(25% - 100px)'),
            ('The equal sides', 'one tick on each side', '150px', 'calc(25% - 70px)'),
            ('The apex at C', 'γ, equal to both base angles', '96px', 'calc(25% + 60px)'),
            ('Justification tags', 'Given, Isosceles base angles (twice), Combining, Angle sum, Equal angles equal sides', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the triangle is turned and resized by dragging two vertices and stays equilateral.',
    input_rows=[['$A$, $B$', 'solid dot', 'move freely; the triangle is built on the side $AB$'],
                ['$C$', 'hollow dot', 'cannot be dragged: $B$ turned about $A$ by $60°$'],
                ['a side too short, or a vertex out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$',
    measures_desc="write each marked angle's size in degrees beside its arc: α, β, γ",
    readout_short='the three angles and the common side', tags='**Given**, **Isosceles base angles**, **Combining**, **Angle sum**, **Equal angles, equal sides**',
    beh1='The readout is a check, not a step of the proof. The argument uses isosceles base angles and the angle sum, never the numbers, which is why every angle stays 60° for every triangle you drag.',
    beh2t='The triangle is equilateral by construction', beh2='C is B turned about A by 60°, so AC = AB and the triangle is equilateral whatever you drag; that is the hypothesis, built into the figure.',
)]
