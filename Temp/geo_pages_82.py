# Content for page 82, a median halves the area of a triangle, read by geo-view-42-45.py (argument geo_pages_82)
# Strings in single quotes must not contain an apostrophe.
PAGES = [dict(
    slug='median-halves-area', prev='alternate-angle-bisectors', prev_h1='Bisectors of Alternate Angles', prev_key='alternateBisectors', prev_dragged='draggedAlternateBisectors',
    key='medianArea', dragged='draggedMedianArea', dragged_comment='A moved to the right: the foot of the altitude passes M, the two areas still equal',
    dragged_expr="{ ...PROOFS.medianArea.model, points: { ...PROOFS.medianArea.model.points, A: { x: 330, y: 150 } } }",
    demo_drag="{ drag: '[data-handle=\"A\"]', dx: 14, dy: 4, ms: 1400 },",
    subCategory='Triangle',
    title='A Median Divides a Triangle Into Two Equal Areas | Proof Step by Step',
    desc='Watch the proof that a median of a triangle splits it into two triangles of equal area, by equal bases and a common height, step by step. Then drag the vertices.',
    h1='A Median Halves the Area', name='Median Halves the Area Proof',
    appdesc='Step-by-step interactive proof that the median of a triangle divides it into two triangles of equal area, with draggable vertices.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="28,14 8,60 40,60" fill="#FAC775" fill-opacity="0.35"/><polygon points="28,14 40,60 72,60" fill="#E6F1FB" fill-opacity="0.25"/><polygon points="28,14 8,60 72,60" fill="none" stroke="#E6F1FB" stroke-width="1.4"/><line x1="28" y1="14" x2="40" y2="60" stroke="#FAC775" stroke-width="1.6"/><line x1="24" y1="57" x2="24" y2="63" stroke="#E6F1FB" stroke-width="1.2"/><line x1="56" y1="57" x2="56" y2="63" stroke="#E6F1FB" stroke-width="1.2"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">[ABM] = [AMC]</text></svg>',
    keywords=['median divides triangle into two equal areas', 'median of a triangle area', 'median halves the area', 'triangles with equal bases and the same height', 'area of a triangle', 'median of a triangle', 'triangle theorems', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'height', 'areas', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $A$, $B$ or $C$ and watch the readout: the two shaded triangles change shape, but their areas stay equal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""In a triangle $ABC$ let $M$ be the midpoint of $BC$. The segment $AM$ is the median from $A$, and it cuts the triangle into two smaller triangles, $ABM$ and $AMC$. Writing $[XYZ]$ for the area of a triangle $XYZ$, the theorem says

$$[ABM] = [AMC]$$

so each median cuts the triangle into two halves of equal area, even though the two halves usually have different shapes.

In the player $A$, $B$ and $C$ can be dragged; $M$ is computed as the midpoint and $H$ as the foot of the perpendicular from $A$. The readout shows both areas, in square units of $60$ pixels."""),
        ('One Height for Both', r"""Drop the perpendicular $AH$ from $A$ to the line $BC$. The triangles $ABM$ and $AMC$ both have their base on the line $BC$ and their third vertex at $A$, so the distance from that vertex to the base line is the same for both:

$$\\text{height of } ABM = \\text{height of } AMC = AH$$"""),
        ('The Two Areas', r"""The area of a triangle is half its base times its height:

$$[ABM] = \\frac{1}{2} \\cdot BM \\cdot AH, \\qquad [AMC] = \\frac{1}{2} \\cdot MC \\cdot AH$$"""),
        ('Why It Holds', r"""$M$ is the midpoint of $BC$, so $BM = MC$, and the two products are equal:

$$[ABM] = \\frac{1}{2} \\cdot BM \\cdot AH = \\frac{1}{2} \\cdot MC \\cdot AH = [AMC]$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, the altitude, the area of a triangle and the midpoint.

Only the bases and the shared height matter. The shapes of the two triangles, and where the foot $H$ falls, play no part."""),
        ('Dragging the Figure', r"""Drag $A$ to slide the apex: the foot $H$ moves along $BC$, passing from one side of $M$ to the other, and the readout keeps the two areas equal. Drag $B$ or $C$ to stretch or tilt the base; $M$ stays in the middle.

The player keeps $BC$ long and close to level, keeps $A$ well above it with the foot $H$ between $B$ and $C$ and away from $M$ so that their names stay apart, and keeps the figure in the frame; a drag that would break one of these is refused."""),
        ('Consequences', r"""• **Six equal pieces.** The three medians meet at the [centroid](!/geometry/visual-tools/centroid) and cut the triangle into six small triangles, all of the same area; each median halves both the whole triangle and the smaller triangles along it.
• **Any ratio.** With the same height, the areas are in the ratio of the bases: if a point divides $BC$ as $BD : DC = 2 : 1$, then $[ABD] : [ADC] = 2 : 1$. This is the idea behind the area proof of the [intercept theorem](!/geometry/visual-tools/intercept-theorem).
• **Parallelograms.** A diagonal cuts a parallelogram into two triangles of equal area, and joining a vertex to the midpoint of a far side cuts off a quarter of the area.
• **Adding areas.** Splitting a figure into triangles with known bases and heights is also how [Viviani's theorem](!/geometry/visual-tools/viviani-theorem) is proved."""),
    ],
    order=[('the-statement', 'given'), ('one-height-for-both', 'height'), ('the-two-areas', 'areas'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('Does a median divide a triangle into two equal areas?', 'Yes. The median from a vertex to the midpoint of the opposite side cuts the triangle into two triangles of equal area.'),
        ('Why are the two areas equal?', 'The two triangles have equal bases, the two halves of the side, and the same height, the distance from the vertex to that side. Half the base times the height is the same for both.'),
        ('Are the two triangles congruent?', 'Usually not. They have the same area but different shapes, unless the triangle is isosceles with the median drawn from its apex.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The triangle ABC and the median AM, with BM = MC.'),
            ('height', 'One height for both, frozen', 'The perpendicular AH to BC.'),
            ('areas', 'The two areas, frozen', 'ABM and AMC shaded.'),
            ('conclude', 'The conclusion, frozen', '[ABM] = [AMC].')],
    dragged_cap='After dragging A, frozen', dragged_txt='A moved to the right: the foot of the altitude passes M, the two areas still equal.',
    notes=[('given', 'Drag a vertex: the areas stay equal.', 'the-statement', 'Learn more about the statement'),
           ('height', 'The same height for both triangles.', 'one-height-for-both', 'Learn more about the height'),
           ('areas', 'Half the base times the height.', 'the-two-areas', 'Learn more about the two areas'),
           ('conclude', 'Drag a vertex: the readout keeps the areas equal.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $A$, $B$ or $C$; the readout under the canvas shows the areas of $ABM$ and $AMC$. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['HEIGHT\nNext → : both triangles have the height AH.',
               'AREAS\nHalf the base times the height.',
               'CONCLUDE\nBM = MC, so [ABM] = [AMC].'],
    demo_drag_say='DRAG A\nMove A: the shapes change, the areas stay equal.',
    drag_desc='A, B and C move freely; the hollow points M and H follow',
    readout_desc='the line under the figure: the areas of ABM and AMC, live while you drag',
    p3top='150px', p3left='calc(25% - 40px)',
    frame2=[('The median AM', 'from A to the midpoint of BC', '178px', 'calc(25% - 18px)'),
            ('The height AH', 'dashed, square to BC', '183px', 'calc(25% - 60px)'),
            ('The equal halves', 'BM and MC, one tick each', '240px', 'calc(25% + 60px)'),
            ('Justification tags', 'Given, Altitude, Triangle area, Midpoint', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the triangle is changed by dragging its vertices.',
    input_rows=[['$A$, $B$, $C$', 'solid dot', 'move freely; the triangle changes'],
                ['$M$, $H$', 'hollow dot', 'cannot be dragged: the midpoint of $BC$ and the foot of the perpendicular from $A$'],
                ['$BC$ too short or tilted too far, $A$ too low, $H$ outside $BC$ or too close to $M$, or a point out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $H$, $M$',
    measures_desc='this figure has no marked angles, so Measures changes nothing',
    readout_short='the areas of ABM and AMC', tags='**Given**, **Altitude**, **Triangle area**, **Midpoint**',
    beh1='The readout is a check, not a step of the proof. The argument uses equal bases and a shared height, never the numbers, which is why the two areas agree for every position you drag.',
    beh2t='The areas are measured', beh2='Each area in the readout is computed from the corner positions of its own triangle; nothing makes them agree, so the equality in the readout is a real check.',
)]
