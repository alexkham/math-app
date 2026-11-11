# Content for page 47, the right triangle altitude theorem, read by geo-view-42-45.py (argument geo_pages_47)
PAGES = [dict(
    slug='right-triangle-altitude', prev='ptolemy-theorem', prev_h1="Ptolemy's Theorem", prev_key='ptolemy', prev_dragged='draggedPtolemy',
    key='altitudeTheorem', dragged='draggedAltitude', dragged_comment='C moved right along the semicircle: AD longer than DB, every product still equal to its square',
    dragged_expr="{ ...PROOFS.altitudeTheorem.model, params: { ...PROOFS.altitudeTheorem.model.params, tc: -1.25 } }",
    demo_drag="{ drag: '[data-handle=\"C\"]', dx: 16, dy: -5, ms: 1400 },",
    subCategory='Triangle',
    title='Right Triangle Altitude Theorem Proof | Geometric Mean Step by Step',
    desc='Watch the proof of the right triangle altitude theorem: the altitude to the hypotenuse is the geometric mean of the two pieces it cuts, and each leg is the geometric mean of the hypotenuse and its adjacent piece, by three similar triangles, step by step. Then drag the right angle round the semicircle.',
    h1='Right Triangle Altitude Theorem', name='Right Triangle Altitude Theorem Proof',
    appdesc='Step-by-step interactive proof of the right triangle altitude theorem and the leg theorems (geometric mean) by three similar triangles, with Pythagoras as the sum, and a draggable right-angle vertex on the semicircle.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="8,64 72,64 30,16" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><line x1="30" y1="16" x2="30" y2="64" stroke="#FAC775" stroke-width="1.8"/><polyline points="30,58 36,58 36,64" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><text x="40" y="78" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">h² = pq</text></svg>',
    keywords=['right triangle altitude theorem', 'geometric mean theorem', 'altitude on hypotenuse', 'leg theorem', 'euclid vi.8', 'similar right triangles', 'geometric mean', 'pythagorean theorem proof', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'angles', 'altitude', 'leg1', 'leg2', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $C$ round the semicircle to change the shape of the right triangle, or drag $A$ or $B$, and watch each square in the readout stay equal to its product. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""In a right triangle $ABC$ with the right angle at $C$, drop the altitude $CD$ to the hypotenuse $AB$. It cuts the hypotenuse into two pieces $AD$ and $DB$, and three relations hold:

$$CD^2 = AD \\cdot DB, \\qquad AC^2 = AD \\cdot AB, \\qquad BC^2 = BD \\cdot AB$$

The first is the altitude theorem (Euclid VI.8, corollary): the altitude is the geometric mean of the two pieces. The other two are the leg theorems: each leg is the geometric mean of the hypotenuse and the piece next to that leg. Adding the leg theorems gives the Pythagorean theorem, so this page is also a second proof of it, by similarity instead of by rearrangement.

All three come from one picture: the altitude cuts the right triangle into two smaller right triangles, and all three triangles are similar. In the player $C$ slides round the semicircle on $AB$, which keeps the angle at $C$ right by [Thales' theorem](!/geometry/visual-tools/thales-theorem); $D$ is the foot of the altitude. The readout shows $CD^2$ beside $AD \\cdot DB$ and $AC^2$ beside $AD \\cdot AB$."""),
        ('The Two Acute Angles', r"""Call the acute angles of the triangle $\\alpha$ at $A$ and $\\beta$ at $B$. By the [angle sum](!/geometry/visual-tools/triangle-angle-sum), $\\alpha + \\beta = 90°$. Now look at the two small triangles. In $ACD$ the angle at $D$ is right and the angle at $A$ is $\\alpha$, so the angle at $C$ is $90° - \\alpha = \\beta$. In $CBD$ the angle at $D$ is right and the angle at $B$ is $\\beta$, so the angle at $C$ is $90° - \\beta = \\alpha$:

$$\\angle ACD = \\beta, \\qquad \\angle DCB = \\alpha$$

The altitude splits the right angle at $C$ into the two acute angles of the triangle, swapped: $\\beta$ on the side of $A$, $\\alpha$ on the side of $B$. Each small triangle therefore has the angles $\\alpha$, $\\beta$, $90°$, exactly like the whole triangle."""),
        ('The Altitude Theorem', r"""Compare the two small triangles $ACD$ and $CBD$. Both have the angles $\\alpha$, $\\beta$ and $90°$, so by [AA similarity](!/geometry/visual-tools/aa-similarity) they are similar. Match the vertices by their angles: $\\alpha$ sits at $A$ in the first and at $C$ in the second, $\\beta$ at $C$ and at $B$, the right angle at $D$ in both, so $A \\leftrightarrow C$, $C \\leftrightarrow B$, $D \\leftrightarrow D$. Corresponding sides are in proportion:

$$\\frac{AD}{CD} = \\frac{CD}{BD}, \\qquad CD^2 = AD \\cdot DB$$

The altitude is the geometric mean of the two pieces of the hypotenuse."""),
        ('The First Leg', r"""Now compare the small triangle $ACD$ with the whole triangle $ABC$. They share the angle $\\alpha$ at $A$, and both have a right angle, at $D$ and at $C$. By AA they are similar, with $A \\leftrightarrow A$, $C \\leftrightarrow B$, $D \\leftrightarrow C$:

$$\\frac{AD}{AC} = \\frac{AC}{AB}, \\qquad AC^2 = AD \\cdot AB$$

The leg $AC$ is the geometric mean of the whole hypotenuse and the piece $AD$ next to it."""),
        ('The Second Leg', r"""In the same way $CBD$ and $ABC$ share the angle $\\beta$ at $B$ and both have a right angle, so they are similar, with $C \\leftrightarrow A$, $B \\leftrightarrow B$, $D \\leftrightarrow C$:

$$\\frac{BD}{BC} = \\frac{BC}{AB}, \\qquad BC^2 = BD \\cdot AB$$

The leg $BC$ is the geometric mean of the hypotenuse and the piece $BD$ next to it."""),
        ('Why It Holds', r"""Three similar triangles, three proportions, three products. Adding the two leg theorems gives

$$AC^2 + BC^2 = AD \\cdot AB + BD \\cdot AB = (AD + DB) \\cdot AB = AB^2$$

because $D$ lies between $A$ and $B$. That is the [Pythagorean theorem](!/geometry/visual-tools/pythagorean-theorem), proved here by similarity; the rearrangement proof on its own page uses areas instead. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, the angle sum, AA similarity three times, and an addition.

The whole page rests on one observation, that the altitude copies the two acute angles into the small triangles. Everything else is reading off proportions."""),
        ('Dragging the Figure', r"""Drag $C$ round the semicircle: the right angle stays right, the altitude and its foot $D$ move, the two pieces of the hypotenuse trade length, and in the readout $CD^2$ stays equal to $AD \\cdot DB$ while $AC^2$ stays equal to $AD \\cdot AB$. When $C$ is at the top of the semicircle the triangle is isosceles, $D$ is the midpoint and the altitude equals half the hypotenuse. Drag $A$ or $B$ to change the hypotenuse; $C$ keeps its place on the new semicircle.

The player keeps $C$ above $AB$ and the foot $D$ at least a little way from both ends, so the two small triangles stay visible. A drag that would carry a point out of the frame or squash a small triangle is refused."""),
        ('Consequences', r"""• **Constructing a geometric mean.** To draw a segment of length $\\sqrt{ab}$ with ruler and compass, lay $a$ and $b$ end to end, draw the semicircle on the whole, and raise the perpendicular at the join: its height to the semicircle is $\\sqrt{ab}$, by the altitude theorem. This is how Euclid squares a rectangle (II.14).
• **Pythagoras by similarity.** The sum of the two leg theorems is $AC^2 + BC^2 = AB^2$, the proof of the [Pythagorean theorem](!/geometry/visual-tools/pythagorean-theorem) that Euclid gives in Book VI.
• **The inverse Pythagorean theorem.** Writing the area twice, $AC \\cdot BC = AB \\cdot CD$, and combining with the altitude theorem gives $1/CD^2 = 1/AC^2 + 1/BC^2$.
• **Trigonometry.** With the hypotenuse as the unit, the leg theorems read $\\cos^2\\alpha = AD$ and $\\cos^2\\beta = BD$, so $\\cos^2\\alpha + \\sin^2\\alpha = 1$ is the sum of the two pieces.
• **Thales in reverse.** The converse of the altitude theorem holds: if $D$ on $AB$ has $CD^2 = AD \\cdot DB$ with $CD \\perp AB$, then the angle at $C$ is right and $C$ lies on the circle with diameter $AB$, as on the [Thales' theorem](!/geometry/visual-tools/thales-theorem) page."""),
    ],
    order=[('the-statement', 'given'), ('the-two-acute-angles', 'angles'), ('the-altitude-theorem', 'altitude'), ('the-first-leg', 'leg1'), ('the-second-leg', 'leg2'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('What does the right triangle altitude theorem say?', 'In a right triangle the altitude to the hypotenuse is the geometric mean of the two pieces into which it cuts the hypotenuse: CD² = AD·DB. Each leg is the geometric mean of the hypotenuse and the adjacent piece: AC² = AD·AB and BC² = BD·AB.'),
        ('How is the altitude theorem proved?', 'The altitude splits the right angle into the two acute angles of the triangle, so the two small triangles have the same angles as the whole one. ACD ~ CBD gives AD/CD = CD/BD, so CD² = AD·DB; ACD ~ ABC gives AC² = AD·AB; CBD ~ ABC gives BC² = BD·AB.'),
        ('How does the altitude theorem prove the Pythagorean theorem?', 'Add the two leg theorems: AC² + BC² = AD·AB + BD·AB = (AD + DB)·AB = AB², because the two pieces together make the whole hypotenuse.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The right triangle with the altitude CD to the hypotenuse; right angles at C and D.'),
            ('angles', 'The two acute angles, frozen', 'α at A and β at B; the altitude splits the right angle into β and α.'),
            ('altitude', 'The altitude theorem, frozen', 'ACD and CBD shaded: ACD ~ CBD, so CD² = AD·DB.'),
            ('leg1', 'The first leg, frozen', 'ACD ~ ABC: AC² = AD·AB.'),
            ('leg2', 'The second leg, frozen', 'CBD ~ ABC: BC² = BD·AB.'),
            ('conclude', 'The conclusion, frozen', 'Adding the leg theorems: AC² + BC² = AB².')],
    dragged_cap='After dragging C, frozen', dragged_txt='C moved to the right: AD longer than DB, every square still equal to its product.',
    notes=[('given', 'Drag C round the semicircle: the angle stays right.', 'the-statement', 'Learn more about the statement'),
           ('angles', 'α + β = 90°, so the altitude copies both angles.', 'the-two-acute-angles', 'Learn more about the acute angles'),
           ('altitude', 'Two small triangles with the same angles.', 'the-altitude-theorem', 'Learn more about the altitude theorem'),
           ('leg1', 'The small triangle at A against the whole.', 'the-first-leg', 'Learn more about the first leg'),
           ('leg2', 'The small triangle at B against the whole.', 'the-second-leg', 'Learn more about the second leg'),
           ('conclude', 'Drag C: the squares in the readout stay equal to the products.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $C$ round the semicircle on $AB$, or $A$ or $B$; the readout under the canvas shows $CD^2$ beside $AD \\cdot DB$ and $AC^2$ beside $AD \\cdot AB$. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['ACUTE ANGLES\nNext → : α + β = 90°, so the altitude splits the right angle into β and α.',
               'ALTITUDE\nACD ~ CBD: AD/CD = CD/BD, so CD² = AD·DB.',
               'FIRST LEG\nACD ~ ABC: AC² = AD·AB.',
               'SECOND LEG\nCBD ~ ABC: BC² = BD·AB.',
               'ADD\nAC² + BC² = (AD + DB)·AB = AB²: Pythagoras.'],
    demo_drag_say='DRAG C\nSlide C round the semicircle: the squares stay equal to the products.',
    drag_desc='C slides round the semicircle on AB, A and B move freely; the hollow foot D follows',
    readout_desc='the line under the figure: CD² beside AD·DB and AC² beside AD·AB, live while you drag',
    p3top='150px', p3left='calc(25% - 60px)',
    frame2=[('The two small triangles', 'ACD at the A side and CBD at the B side, each with the angles α, β, 90°', '236px', 'calc(25% - 110px)'),
            ('The altitude', 'CD, the geometric mean of AD and DB; the right angle at D is marked', '150px', 'calc(25% + 16px)'),
            ('The copied angles', 'β and α at C, the acute angles of the triangle swapped', '96px', 'calc(25% - 10px)'),
            ('Justification tags', 'Given, Angle sum, AA similarity (three times), Adding', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the right triangle is shaped by dragging and the foot D follows.',
    input_rows=[['$C$', 'solid dot', 'slides round the semicircle on $AB$, so the angle at $C$ stays right; $D$ follows'],
                ['$A$, $B$', 'solid dot', 'move the ends of the hypotenuse; $C$ keeps its place on the new semicircle'],
                ['$D$', 'hollow dot', 'cannot be dragged: the foot of the altitude from $C$'],
                ['$C$ below $AB$, $D$ too close to an end, or a point out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $D$',
    measures_desc="write each marked angle's size in degrees beside its arc: α and β, each twice",
    readout_short='two squares beside their products', tags='**Given**, **Angle sum**, **AA similarity**, **Adding**',
    beh1='The readout is a check, not a step of the proof. The argument uses the angle sum and AA similarity, never the numbers, which is why the squares equal the products for every position of C.',
    beh2t='The right angle is built in', beh2='C is kept on the circle with diameter AB, so by Thales the angle at C is always right; the semicircle itself is not drawn.',
)]
