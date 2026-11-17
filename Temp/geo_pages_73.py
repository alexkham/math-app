# Content for page 73, the point angles of a pentagram add up to 180°, read by geo-view-42-45.py (argument geo_pages_73)
# Strings in single quotes must not contain an apostrophe.
PAGES = [dict(
    slug='pentagram-angles', prev='pentagon-golden-ratio', prev_h1='The Regular Pentagon and the Golden Ratio', prev_key='pentagonGoldenRatio', prev_dragged='draggedPentagonGoldenRatio',
    key='pentagramAngles', dragged='draggedPentagramAngles', dragged_comment='A moved to the left: the five angles change, their sum is still 180°',
    dragged_expr="{ ...PROOFS.pentagramAngles.model, points: { ...PROOFS.pentagramAngles.model.points, A: { x: 230, y: 90 } } }",
    demo_drag="{ drag: '[data-handle=\"A\"]', dx: -10, dy: 2, ms: 1400 },",
    subCategory='Polygon',
    title='Angles of a Pentagram Add Up to 180° | Star Angle Sum Proof Step by Step',
    desc='Watch the proof that the five point angles of any five-pointed star add up to 180°, by the exterior angle theorem twice and the angle sum of a triangle, step by step. Then drag the points of the star.',
    h1='The Angles of a Pentagram', name='Pentagram Angles Proof',
    appdesc='Step-by-step interactive proof that the point angles of any five-pointed star (pentagram) add up to 180°, with all five points draggable.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="40,6 61,66 8,28 72,28 19,66" fill="#85B7EB" fill-opacity="0.25" stroke="#E6F1FB" stroke-width="1.4" stroke-linejoin="round"/><path d="M36,17 A12,12 0 0 0 44,17" fill="none" stroke="#FAC775" stroke-width="1.4"/><text x="40" y="78" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">α + β + γ + δ + ε = 180°</text></svg>',
    keywords=['pentagram angle sum', 'sum of angles of a star', 'five pointed star angles 180', 'star polygon angles', 'pentagram angles proof', 'exterior angle theorem', 'triangle angle sum', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'first', 'second', 'sum', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag any of the five points of the star and watch the readout: the five angles change, but their sum stays $180°$. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""Take five points $A$, $B$, $C$, $D$, $E$ round a convex pentagon and join every second one: $A \\to C \\to E \\to B \\to D \\to A$. The five segments make a five-pointed star, a pentagram. Call its point angles $\\alpha$, $\\beta$, $\\gamma$, $\\delta$, $\\varepsilon$. The theorem says

$$\\alpha + \\beta + \\gamma + \\delta + \\varepsilon = 180°$$

for every such star, regular or not. In a regular star each point is $36°$, as on the [diagonals of a regular pentagon](!/geometry/visual-tools/pentagon-diagonals) page, and five times $36°$ is $180°$; the theorem says the total stays the same however the star is bent.

The proof uses the [exterior angle theorem](!/geometry/visual-tools/exterior-angle) twice and the [angle sum of a triangle](!/geometry/visual-tools/triangle-angle-sum) once. In the player all five points can be dragged, and the two crossings $X$ and $Y$ are computed; the readout shows the five angles and their sum."""),
        ('The First Exterior Angle', r"""The segment $EB$ crosses $AC$ at $X$. Look at the triangle $CEX$: its angles at $C$ and $E$ are the star angles $\\gamma$ and $\\varepsilon$. At $X$ the ray $XA$ continues the side $CX$, so the angle $\\theta = \\angle AXY$ between $XA$ and the side $XE$ is an exterior angle of $CEX$, and it equals the sum of the two remote interior angles:

$$\\theta = \\angle AXY = \\gamma + \\varepsilon$$"""),
        ('The Second Exterior Angle', r"""In the same way $EB$ crosses $AD$ at $Y$, and the triangle $BDY$ has the star angles $\\beta$ and $\\delta$ at $B$ and $D$. The ray $YA$ continues $DY$, so $\\psi = \\angle AYX$ is an exterior angle of $BDY$:

$$\\psi = \\angle AYX = \\beta + \\delta$$"""),
        ('The Triangle at the Top', r"""The triangle $AXY$, the top point of the star, has the angles $\\alpha$ at $A$, $\\theta$ at $X$ and $\\psi$ at $Y$. Its angles add up to $180°$:

$$\\alpha + \\theta + \\psi = 180°, \\qquad \\alpha + (\\gamma + \\varepsilon) + (\\beta + \\delta) = 180°$$"""),
        ('Why It Holds', r"""Rearranging the last line:

$$\\alpha + \\beta + \\gamma + \\delta + \\varepsilon = 180°$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, the exterior angle theorem (twice), the angle sum of a triangle and combining.

The two exterior angles move four of the five star angles into one triangle, next to the fifth; the triangle then forces the total. Nothing depends on the star being regular, only on the order in which its points are joined."""),
        ('Dragging the Figure', r"""Drag any of the five points: the star bends, the five angles in the readout change, one growing as others shrink, and their sum stays $180°$. The crossings $X$ and $Y$ follow.

The player keeps the five points in order round a convex pentagon, so that the segments really make a star, keeps every point angle above $22°$ and the top point large enough for its marks, and keeps the figure in the frame; a drag that would break one of these is refused."""),
        ('Consequences', r"""• **The regular star.** In a regular pentagram the five angles are equal, so each is $180°/5 = 36°$.
• **Stars with more points.** For a star made by joining every second vertex of a convex $n$-gon ($n \\ge 5$), the point angles add up to $(n - 4) \\cdot 180°$: $180°$ for five points, $540°$ for seven.
• **The inner pentagon.** The five crossings of the star make a small pentagon inside. Its angle at $X$ is the angle of the triangle $CEX$ there, $180° - (\\gamma + \\varepsilon)$, and the same holds at the other four crossings. Each star angle is used twice, so the five inner angles add up to $5 \\cdot 180° - 2 \\cdot 180° = 540°$, as the [polygon angle sum](!/geometry/visual-tools/polygon-angle-sum) says.
• **Turning along the star.** Walking round the star $A \\to C \\to E \\to B \\to D \\to A$ turns through $180° - \\alpha$ at each point, $900° - 180° = 720°$ in all: two full turns, compared with one full turn round a convex polygon on the [sum of exterior angles](!/geometry/visual-tools/exterior-angle-sum) page.
• **A quick check.** Any proof with a star drawn on a pentagon can use the $180°$ total to find a missing point angle from the other four."""),
    ],
    order=[('the-statement', 'given'), ('the-first-exterior-angle', 'first'), ('the-second-exterior-angle', 'second'), ('the-triangle-at-the-top', 'sum'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('What do the angles of a five-pointed star add up to?', 'The five point angles of any five-pointed star add up to 180°, whether or not the star is regular.'),
        ('How is the pentagram angle sum proved?', 'Two of the crossing points of the star are vertices of the top triangle. The angle at each of them is an exterior angle of a triangle containing two of the other star points, so it equals the sum of those two angles. The top triangle then has the angles α, γ + ε and β + δ, which add up to 180°.'),
        ('What is each angle of a regular pentagram?', 'In a regular pentagram the five point angles are equal, so each is 180°/5 = 36°.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The star A → C → E → B → D with its five point angles.'),
            ('first', 'The first exterior angle, frozen', 'CEX shaded: θ = γ + ε at X.'),
            ('second', 'The second exterior angle, frozen', 'BDY shaded: ψ = β + δ at Y.'),
            ('sum', 'The triangle at the top, frozen', 'AXY shaded: α + θ + ψ = 180°.'),
            ('conclude', 'The conclusion, frozen', 'α + β + γ + δ + ε = 180°.')],
    dragged_cap='After dragging A, frozen', dragged_txt='A moved to the left: the five angles change, their sum is still 180°.',
    notes=[('given', 'Drag any point: the sum stays 180°.', 'the-statement', 'Learn more about the statement'),
           ('first', 'An exterior angle of CEX.', 'the-first-exterior-angle', 'Learn more about the first exterior angle'),
           ('second', 'An exterior angle of BDY.', 'the-second-exterior-angle', 'Learn more about the second exterior angle'),
           ('sum', 'Three angles of one triangle.', 'the-triangle-at-the-top', 'Learn more about the top triangle'),
           ('conclude', 'Drag any point: the readout keeps 180°.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag any of the five points; the readout under the canvas shows the five point angles and their sum. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['FIRST\nNext → : θ at X is an exterior angle of CEX, θ = γ + ε.',
               'SECOND\nψ at Y is an exterior angle of BDY, ψ = β + δ.',
               'TOP\nα + θ + ψ = 180° in the triangle AXY.',
               'CONCLUDE\nα + β + γ + δ + ε = 180°.'],
    demo_drag_say='DRAG A\nBend the star: the angles change, the sum stays 180°.',
    drag_desc='all five points A, B, C, D, E can be dragged; the hollow crossings X and Y follow',
    readout_desc='the line under the figure: the five point angles and their sum, live while you drag',
    p3top='90px', p3left='calc(25% + 40px)',
    frame2=[('The crossing X', 'where EB meets AC, with the angle θ', '196px', 'calc(25% + 52px)'),
            ('The triangle CEX', 'shaded, with γ at C and ε at E', '218px', 'calc(25% + 15px)'),
            ('The top triangle AXY', 'shaded, with α, θ and ψ', '156px', 'calc(25% - 12px)'),
            ('Justification tags', 'Given, Exterior angle theorem, Angle sum, Combining', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the star is shaped by dragging its five points.',
    input_rows=[['$A$, $B$, $C$, $D$, $E$', 'solid dot', 'move freely; the star bends'],
                ['$X$, $Y$', 'hollow dot', 'cannot be dragged: where $EB$ crosses $AC$ and $AD$'],
                ['points out of convex order, a point angle under $22°$, the top point too small, or a point out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $D$, $E$, $X$, $Y$',
    measures_desc="write each marked angle's size in degrees beside its arc: the five point angles, θ and ψ",
    readout_short='the five point angles and their sum', tags='**Given**, **Exterior angle theorem**, **Angle sum**, **Combining**',
    beh1='The readout is a check, not a step of the proof. The argument uses the exterior angle theorem and the angle sum, never the numbers, which is why the total is 180° for every star you drag.',
    beh2t='The points are free', beh2='All five points move independently and X and Y are computed crossings; nothing about the angle sum is built into the figure, so the 180° in the readout is a real check.',
)]
