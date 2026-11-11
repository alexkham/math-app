# Content for page 56, the Simson line, read by geo-view-42-45.py (argument geo_pages_56)
PAGES = [dict(
    slug='simson-line', prev='regular-hexagon', prev_h1='Regular Hexagon: Side Equals Radius', prev_key='regularHexagon', prev_dragged='draggedHexagon',
    key='simsonLine', dragged='draggedSimson', dragged_comment='P slid round towards B: the feet moved, still on one line',
    dragged_expr="{ ...PROOFS.simsonLine.model, params: { ...PROOFS.simsonLine.model.params, tp: 2.02 } }",
    demo_drag="{ drag: '[data-handle=\"P\"]', dx: 8, dy: 3, ms: 1400 },",
    subCategory='Circle',
    title='Simson Line Proof | Feet of Perpendiculars from the Circumcircle Step by Step',
    desc='Watch the proof of the Simson line: the feet of the perpendiculars from a point of the circumcircle to the three sides of a triangle lie on one line, by two auxiliary circles, a cyclic quadrilateral and vertical angles, step by step. Then drag the point round the circle.',
    h1='Simson Line', name='Simson Line Proof',
    appdesc='Step-by-step interactive proof of the Simson line theorem with the two circles on PB and PC as diameters, the exterior angle of a cyclic quadrilateral and vertical angles, with draggable points on the circumcircle.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="38" r="30" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><polygon points="36,8 12,52 68,52" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><circle cx="34" cy="68" r="2.4" fill="#E6F1FB"/><line x1="4" y1="60" x2="76" y2="36" stroke="#FAC775" stroke-width="1.6"/><line x1="34" y1="68" x2="34" y2="52" stroke="#E6F1FB" stroke-width="1" stroke-dasharray="2 2"/><text x="40" y="79" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">Simson</text></svg>',
    keywords=['simson line', 'simson line proof', 'wallace line', 'feet of perpendiculars collinear', 'circumcircle', 'pedal triangle', 'cyclic quadrilateral', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'first', 'second', 'cyclic', 'complement', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $P$ round the arc $BC$, or a vertex round the circle, and watch the three feet stay on one line: the angle $FDE$ in the readout stays at $180°$. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""Take a triangle $ABC$ and a point $P$ on its circumcircle. Drop the perpendiculars from $P$ to the three side lines, with feet $D$ on $BC$, $E$ on $CA$ and $F$ on $AB$. The theorem of the Simson line (found by William Wallace in 1797 and credited to Robert Simson) says that

$$D, \\ E, \\ F \\text{ are collinear}$$

The line through them is the Simson line of $P$. For a point not on the circumcircle the three feet form a genuine triangle, the pedal triangle; the circumcircle is exactly where that triangle flattens into a line.

The player shows the usual case: $P$ on the arc $BC$ away from $A$, so that $D$ falls on the side $BC$, $E$ on the side $CA$, and $F$ on $AB$ extended beyond $B$. The readout shows the two angles at $D$ that the proof compares, and the angle $FDE$, which is $180°$."""),
        ('The First Circle', r"""The angles $PDB$ and $PFB$ are right angles, and both stand on the segment $PB$. By the converse of [Thales' theorem](!/geometry/visual-tools/thales-theorem), $D$ and $F$ lie on the circle with diameter $PB$, so $P$, $B$, $D$, $F$ are concyclic. In that circle the angles at $D$ and at $P$ both stand on the arc $BF$, and the [inscribed angle theorem](!/geometry/visual-tools/inscribed-angle) makes them equal:

$$\\angle BDF = \\angle BPF = \\theta_1$$"""),
        ('The Second Circle', r"""The same with $C$: the right angles $PDC$ and $PEC$ stand on $PC$, so $D$ and $E$ lie on the circle with diameter $PC$, and the inscribed angles on the arc $CE$ give

$$\\angle CDE = \\angle CPE = \\theta_2$$

The two angles at $D$ that decide whether $F$, $D$, $E$ are collinear have now been moved to $P$."""),
        ('The Cyclic Quadrilateral', r"""Now use the circumcircle itself. $A$, $B$, $P$, $C$ lie on it in that order, so $ABPC$ is a [cyclic quadrilateral](!/geometry/visual-tools/cyclic-quadrilateral) and its opposite angles at $B$ and $C$ add up to $180°$. Because $F$ lies on $AB$ extended beyond $B$, the angle $PBF$ is the exterior angle at $B$, the supplement of $\\angle ABP$; so it equals the interior angle at $C$:

$$\\angle PBF = \\angle ACP = \\angle PCE = \\varphi$$

(the last because $E$ lies on $CA$)."""),
        ('The Complements', r"""The triangle $PFB$ has a right angle at $F$, so its other two angles add up to $90°$ ([angle sum](!/geometry/visual-tools/triangle-angle-sum)): $\\theta_1 = \\angle BPF = 90° - \\varphi$. The triangle $PEC$ has a right angle at $E$: $\\theta_2 = \\angle CPE = 90° - \\varphi$. So

$$\\theta_1 = \\theta_2, \\qquad \\angle BDF = \\angle CDE$$"""),
        ('Why It Holds', r"""The points $B$, $D$, $C$ lie on one line, with $F$ and $E$ on opposite sides of it. The rays $DF$ and $DE$ make equal angles with the opposite rays $DB$ and $DC$. Two angles like that are [vertical angles](!/geometry/visual-tools/vertical-angles) exactly when their other arms are opposite rays too, so $DF$ and $DE$ are the two halves of one line:

$$F, \\ D, \\ E \\text{ are collinear}$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, inscribed angles in two auxiliary circles, the cyclic quadrilateral, the angle sum, and vertical angles.

The converse holds as well: if the feet of the perpendiculars from $P$ are collinear, $P$ lies on the circumcircle. For other positions of $P$ the same chase works with the angles arranged differently; the player keeps to the one case, so the proof reads exactly as written."""),
        ('Dragging the Figure', r"""Drag $P$ round the arc $BC$: the three perpendiculars swing, the two auxiliary circles change size, the feet slide along the sides, and the Simson line turns, while the readout keeps $\\angle BDF = \\angle CDE$ and $\\angle FDE = 180°$. Drag $A$, $B$ or $C$ round the circle to change the triangle.

The player keeps to the case drawn: $P$ on the arc $BC$ away from $A$, $D$ inside $BC$, $E$ inside $CA$, and $F$ on $AB$ beyond $B$. Moving $P$ far towards $C$ would put $E$ outside the side and the angles would have to be read differently, so such drags are refused, as are drags that crowd the points or leave the frame."""),
        ('Consequences', r"""• **Diametrically opposite points.** The Simson lines of two opposite ends of a diameter are perpendicular, and they meet on the [nine-point circle](!/geometry/visual-tools/nine-point-circle).
• **The orthocentre.** The Simson line of $P$ bisects the segment from $P$ to the [orthocentre](!/geometry/visual-tools/orthocentre) $H$; its midpoint lies on the nine-point circle.
• **Vertices.** When $P$ is a vertex, say $B$, two of the feet coincide with $B$ and the Simson line is the altitude from $B$.
• **The converse as a test.** To show that four points lie on a circle, drop perpendiculars from one of them to the sides of the triangle of the other three and check that the feet are collinear.
• **Angle between Simson lines.** As $P$ moves round the circle its Simson line turns by half the arc travelled, in the opposite direction, so the Simson lines envelop a curve with three cusps, the Steiner deltoid."""),
    ],
    order=[('the-statement', 'given'), ('the-first-circle', 'first'), ('the-second-circle', 'second'), ('the-cyclic-quadrilateral', 'cyclic'), ('the-complements', 'complement'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('What is the Simson line?', 'For a point P on the circumcircle of a triangle, the feet of the perpendiculars from P to the three side lines lie on one line, called the Simson line (or Wallace line) of P.'),
        ('How is the Simson line theorem proved?', 'The right angles at the feet put P, B, D, F on the circle with diameter PB and P, C, D, E on the circle with diameter PC, so the angles BDF and CDE equal the angles BPF and CPE at P. These are complements of equal angles at B and C (the exterior angle of the cyclic quadrilateral ABPC), so the two angles at D are equal vertical angles and F, D, E are collinear.'),
        ('Is the converse of the Simson line theorem true?', 'Yes. If the feet of the perpendiculars from a point P to the three sides of a triangle are collinear, then P lies on the circumcircle of the triangle.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'P on the circumcircle and the three perpendiculars, with feet D, E, F.'),
            ('first', 'The first circle, frozen', 'The circle on PB through D and F: ∠BDF = ∠BPF = θ₁.'),
            ('second', 'The second circle, frozen', 'The circle on PC through D and E: ∠CDE = ∠CPE = θ₂.'),
            ('cyclic', 'The cyclic quadrilateral, frozen', 'The exterior angle at B equals the angle at C: both φ.'),
            ('complement', 'The complements, frozen', 'θ₁ = 90° − φ = θ₂.'),
            ('conclude', 'The conclusion, frozen', 'The Simson line through F, D and E.')],
    dragged_cap='After dragging P, frozen', dragged_txt='P slid round towards B: the feet moved, still on one line.',
    notes=[('given', 'Drag P round the arc: the feet move together.', 'the-statement', 'Learn more about the statement'),
           ('first', 'Two right angles on PB: one circle.', 'the-first-circle', 'Learn more about the first circle'),
           ('second', 'Two right angles on PC: another circle.', 'the-second-circle', 'Learn more about the second circle'),
           ('cyclic', 'Exterior angle of a cyclic quadrilateral.', 'the-cyclic-quadrilateral', 'Learn more about the cyclic quadrilateral'),
           ('complement', 'Complements of equal angles are equal.', 'the-complements', 'Learn more about the complements'),
           ('conclude', 'Drag P: the readout keeps ∠FDE at 180°.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $P$ round the arc $BC$, or $A$, $B$ or $C$ round the circle; the readout under the canvas shows $\\angle BDF$, $\\angle CDE$ and $\\angle FDE$. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['FIRST CIRCLE\nNext → : right angles on PB put D and F on one circle: ∠BDF = ∠BPF.',
               'SECOND CIRCLE\nRight angles on PC: ∠CDE = ∠CPE.',
               'CYCLIC\nABPC is cyclic: the exterior angle at B equals the angle at C.',
               'COMPLEMENTS\nBoth angles at P are 90° − φ.',
               'COLLINEAR\nEqual vertical angles at D: F, D, E on one line.'],
    demo_drag_say='DRAG P\nSlide P round the arc towards C: the feet stay on one line.',
    drag_desc='P slides round the arc BC, A, B and C slide round the circle; the hollow feet D, E, F follow',
    readout_desc='the line under the figure: the angles BDF and CDE, and the angle FDE, live while you drag',
    p3top='96px', p3left='calc(25% + 60px)',
    frame2=[('The Simson line', 'the dashed line through F, D and E', '200px', 'calc(25% + 110px)'),
            ('The two small circles', 'on PB and on PC as diameters, each through two of the feet', '262px', 'calc(25% - 120px)'),
            ('The angles at P', 'θ₁ and θ₂ between the perpendiculars and PB, PC', '300px', 'calc(25% + 40px)'),
            ('Justification tags', 'Given, Inscribed angles (twice), Cyclic quadrilateral, Angle sum, Vertical angles', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the triangle and the point P are placed by dragging round the circle and the feet follow.',
    input_rows=[['$P$', 'solid dot', 'slides round the arc $BC$ away from $A$; the perpendiculars and the feet follow'],
                ['$A$, $B$, $C$', 'solid dot', 'slide round the circle and change the triangle'],
                ['$D$, $E$, $F$', 'hollow dot', 'cannot be dragged: the feet of the perpendiculars from $P$'],
                ['$P$ off the arc $BC$, a foot outside the case drawn, crowded points, or a point out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $P$, $D$, $E$, $F$',
    measures_desc="write each marked angle's size in degrees beside its arc: θ₁, θ₂ and φ",
    readout_short='the two angles at D and the angle FDE', tags='**Given**, **Inscribed angles**, **Cyclic quadrilateral**, **Angle sum**, **Vertical angles**',
    beh1='The readout is a check, not a step of the proof. The argument uses inscribed angles, the cyclic quadrilateral and vertical angles, never the numbers, which is why the angle FDE is 180° wherever you drag P.',
    beh2t='One case is shown', beh2='The player keeps P on the arc BC away from A, with F beyond B on AB extended; other positions give the same theorem with the angles arranged differently, which the statement section explains.',
)]
