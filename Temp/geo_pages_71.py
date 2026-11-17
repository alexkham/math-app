# Content for page 71, the diagonals of a regular pentagon trisect its angle, read by geo-view-42-45.py (argument geo_pages_71)
# Strings in single quotes must not contain an apostrophe.
PAGES = [dict(
    slug='pentagon-diagonals', prev='cointerior-bisectors', prev_h1='Bisectors of Co-interior Angles', prev_key='cointeriorBisectors', prev_dragged='draggedCointeriorBisectors',
    key='pentagonDiagonals', dragged='draggedPentagonDiagonals', dragged_comment='A turned to the left: the pentagon turns with it, still three angles of 36° at A',
    dragged_expr="{ ...PROOFS.pentagonDiagonals.model, points: { ...PROOFS.pentagonDiagonals.model.points, A: { x: 250, y: 92 } } }",
    demo_drag="{ drag: '[data-handle=\"A\"]', dx: -12, dy: 2, ms: 1400 },",
    subCategory='Polygon',
    title='Diagonals of a Regular Pentagon Trisect Its Angle | Proof Step by Step',
    desc='Watch the proof that the two diagonals from a vertex of a regular pentagon cut its 108° angle into three angles of 36°, by the polygon angle sum and isosceles triangles, step by step. Then turn and resize the pentagon.',
    h1='Diagonals of a Regular Pentagon', name='Pentagon Diagonals Proof',
    appdesc='Step-by-step interactive proof that the diagonals from one vertex of a regular pentagon trisect its angle into three angles of 36°, with a draggable vertex that turns and resizes the pentagon.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="40,8 70,30 59,64 21,64 10,30" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><line x1="40" y1="8" x2="59" y2="64" stroke="#FAC775" stroke-width="1.4"/><line x1="40" y1="8" x2="21" y2="64" stroke="#FAC775" stroke-width="1.4"/><path d="M33,28 A21,21 0 0 0 47,28" fill="none" stroke="#FAC775" stroke-width="1.2"/><text x="40" y="77" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">36° + 36° + 36°</text></svg>',
    keywords=['regular pentagon diagonals', 'pentagon diagonals trisect angle', 'regular pentagon angles 36 degrees', 'interior angle of a regular pentagon', 'pentagon 108 degrees', 'golden triangle', 'isosceles triangle', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'interior', 'first', 'second', 'middle', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $A$ to turn and resize the pentagon and watch the three angles at $A$ in the readout stay at $36°$ each. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""Let $ABCDE$ be a regular pentagon: all five sides are equal and all five angles are equal. From the vertex $A$ two diagonals can be drawn, $AC$ and $AD$. The theorem says they cut the angle at $A$ into three equal parts:

$$\\angle BAC = \\angle CAD = \\angle DAE = 36°$$

so the diagonals trisect the angle. By symmetry the same happens at every vertex.

The proof needs only the [polygon angle sum](!/geometry/visual-tools/polygon-angle-sum), the [isosceles base angles](!/geometry/visual-tools/isosceles-base-angles) theorem and the [angle sum of a triangle](!/geometry/visual-tools/triangle-angle-sum). In the player $B$, $C$, $D$, $E$ are $A$ turned about the centre by $72°$ at a time, so the pentagon stays regular whatever you drag; the readout shows the three angles at $A$."""),
        ('Each Angle Is 108°', r"""The angles of any pentagon add up to $(5 - 2) \\cdot 180° = 540°$. In a regular pentagon they are equal, so each one is

$$\\beta = \\frac{540°}{5} = 108°$$

as on the [regular polygon angles](!/geometry/visual-tools/regular-polygon-angles) page. This holds at $B$ and at $E$, and also at $A$."""),
        ('The Triangle ABC', r"""The triangle $ABC$ has the two equal sides $AB$ and $BC$, sides of the pentagon, so it is isosceles and its base angles at $A$ and $C$ are equal; call them $\\varphi$. The angle between the equal sides is $108°$, so the angle sum gives

$$108° + 2\\varphi = 180°, \\qquad \\varphi = 36°$$

So the diagonal $AC$ makes $\\angle BAC = 36°$ with the side $AB$."""),
        ('The Triangle AED', r"""In the same way the triangle $AED$ has $AE = ED$ and the angle $108°$ at $E$, so its base angles at $A$ and $D$ are $36°$ too:

$$\\angle DAE = 36°$$"""),
        ('The Middle Angle', r"""The whole angle at $A$ is $108°$, made of $\\angle BAC$, the middle angle $\\psi = \\angle CAD$ and $\\angle DAE$:

$$\\psi = 108° - 36° - 36° = 36°$$"""),
        ('Why It Holds', r"""All three parts of the angle at $A$ are $36°$:

$$\\angle BAC = \\angle CAD = \\angle DAE = 36°$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, the polygon angle sum, the isosceles base angles theorem (twice), subtracting and combining.

The same three steps work at every vertex, so each diagonal of a regular pentagon makes $36°$ with the sides at its ends."""),
        ('Dragging the Figure', r"""Drag $A$: the whole pentagon turns about its centre and grows or shrinks with it, because the other vertices are $A$ turned by $72°$, $144°$, $216°$ and $288°$. The readout keeps the three angles at $A$ at $36°$.

The player keeps $A$ within $30°$ of the top, the pentagon within a small range of sizes so the angle marks stay readable, and every vertex inside the frame; a drag that would break this is refused."""),
        ('Consequences', r"""• **The golden triangle.** The triangle $ACD$ has $36°$ at $A$ and $108° - 36° = 72°$ at $C$ and at $D$: an isosceles triangle with angles $36°$, $72°$, $72°$, called the golden triangle. In it the ratio of a long side to the short side, here diagonal to side of the pentagon, is the golden ratio $(1 + \\sqrt{5})/2 \\approx 1.618$.
• **The pentagram.** Drawing all five diagonals gives a five-pointed star; each of its points has an angle of $36°$, the angle between two diagonals from one vertex.
• **Diagonals parallel to sides.** With the transversal $AD$, the angles $\\angle CAD = 36°$ and $\\angle ADE = 36°$ are alternate angles and equal, so $AC \\parallel ED$: each diagonal is parallel to the side it does not meet, the converse direction of the [parallel lines](!/geometry/visual-tools/parallel-lines) page.
• **Other regular polygons.** In a regular $n$-gon the diagonals from one vertex cut its angle into $n - 2$ equal parts of $180°/n$ each; for the pentagon that is three parts of $36°$, for the [regular hexagon](!/geometry/visual-tools/regular-hexagon) four parts of $30°$.
• **Isosceles triangles everywhere.** Every triangle made of two sides and a diagonal of a regular pentagon is isosceles with angles $108°$, $36°$, $36°$."""),
    ],
    order=[('the-statement', 'given'), ('each-angle-is-108', 'interior'), ('the-triangle-abc', 'first'), ('the-triangle-aed', 'second'), ('the-middle-angle', 'middle'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('Do the diagonals of a regular pentagon trisect its angles?', 'Yes. The two diagonals from a vertex cut its 108° angle into three equal angles of 36° each.'),
        ('Why is the angle between a side and a diagonal 36°?', 'A side, the next side and the diagonal joining their ends make an isosceles triangle with the angle 108° between the equal sides, so each base angle is (180° − 108°)/2 = 36°.'),
        ('What is the interior angle of a regular pentagon?', 'The angles of a pentagon add up to 540°, and in a regular pentagon they are equal, so each one is 108°.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The regular pentagon with the diagonals AC and AD.'),
            ('interior', 'Each angle is 108°, frozen', 'β = 108° at B and at E.'),
            ('first', 'The triangle ABC, frozen', 'ABC shaded: base angles φ = 36° at A and C.'),
            ('second', 'The triangle AED, frozen', 'AED shaded: base angles φ = 36° at A and D.'),
            ('middle', 'The middle angle, frozen', 'ψ = 108° − 36° − 36° = 36°.'),
            ('conclude', 'The conclusion, frozen', 'Three angles of 36° at A.')],
    dragged_cap='After dragging A, frozen', dragged_txt='A turned to the left: the pentagon turns with it, still three angles of 36° at A.',
    notes=[('given', 'Drag A: the pentagon turns and stays regular.', 'the-statement', 'Learn more about the statement'),
           ('interior', '540° shared by five equal angles.', 'each-angle-is-108', 'Learn more about the 108°'),
           ('first', 'Two equal sides and 108° between them.', 'the-triangle-abc', 'Learn more about ABC'),
           ('second', 'The same triangle at the other side.', 'the-triangle-aed', 'Learn more about AED'),
           ('middle', 'What is left of 108°.', 'the-middle-angle', 'Learn more about the middle angle'),
           ('conclude', 'Drag A: the readout keeps three angles of 36°.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $A$ to turn and resize the pentagon; the readout under the canvas shows the three angles at $A$. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['108°\nNext → : each angle of the pentagon is 540°/5 = 108°.',
               'TRIANGLE ABC\nIsosceles with 108° at B: φ = 36°.',
               'TRIANGLE AED\nThe same at the other side: 36°.',
               'MIDDLE\n108° − 36° − 36° = 36°.',
               'CONCLUDE\nThe diagonals trisect the angle at A.'],
    demo_drag_say='DRAG A\nTurn the pentagon: the three angles stay 36°.',
    drag_desc='A turns and resizes the pentagon; B, C, D and E follow as A turned by 72° at a time',
    readout_desc='the line under the figure: the three angles at A, live while you drag',
    p3top='84px', p3left='calc(25% + 40px)',
    frame2=[('The diagonals AC and AD', 'from A to the two far vertices', '200px', 'calc(25% + 10px)'),
            ('The triangle AED', 'shaded, with base angles φ at A and D', '196px', 'calc(25% - 62px)'),
            ('The three angles at A', 'φ, ψ and φ, 36° each', '110px', 'calc(25% + 60px)'),
            ('Justification tags', 'Given, Polygon angle sum, Isosceles base angles, Subtracting, Combining', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the pentagon is turned and resized by dragging one vertex and stays regular.',
    input_rows=[['$A$', 'solid dot', 'turns and resizes the pentagon about its centre'],
                ['$B$, $C$, $D$, $E$', 'hollow dot', 'cannot be dragged: $A$ turned by $72°$ at a time'],
                ['$A$ turned more than $30°$ from the top, a pentagon too small or too large, or a vertex out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $D$, $E$',
    measures_desc="write each marked angle's size in degrees beside its arc: β twice, φ four times and ψ",
    readout_short='the three angles at A', tags='**Given**, **Polygon angle sum**, **Isosceles base angles**, **Subtracting**, **Combining**',
    beh1='The readout is a check, not a step of the proof. The argument uses the angle sums and isosceles triangles, never the numbers, which is why the three angles agree for every pentagon you drag.',
    beh2t='The pentagon is regular by construction', beh2='B, C, D and E are A turned about the centre by 72° each, which makes all sides and angles equal whatever you drag; that is the hypothesis, built into the figure.',
)]
