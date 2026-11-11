# Content for page 64, the 30-60-90 triangle, read by geo-view-42-45.py (argument geo_pages_64)
PAGES = [dict(
    slug='30-60-90-triangle', prev='equilateral-triangle', prev_h1='Equilateral Triangle: All Angles 60°', prev_key='equilateralTriangle', prev_dragged='draggedEquilateral',
    key='triangle306090', dragged='draggedThirtySixty', dragged_comment='A moved in and up: the triangle turned and shrank, the ratio 1 : √3 : 2 unchanged',
    dragged_expr="{ ...PROOFS.triangle306090.model, points: { ...PROOFS.triangle306090.model.points, A: { x: 375, y: 195 } } }",
    demo_drag="{ drag: '[data-handle=\"A\"]', dx: -10, dy: -6, ms: 1400 },",
    subCategory='Triangle',
    title='30-60-90 Triangle Proof | Short Leg Half the Hypotenuse Step by Step',
    desc='Watch the proof that in a 30-60-90 triangle the side opposite 30° is half the hypotenuse and the long leg is half the hypotenuse times √3, by reflecting the triangle into an equilateral triangle, step by step. Then drag the triangle.',
    h1='The 30-60-90 Triangle', name='30-60-90 Triangle Proof',
    appdesc='Step-by-step interactive proof of the 30-60-90 triangle side ratio 1 : √3 : 2, by reflecting the triangle in its long leg to an equilateral triangle and using Pythagoras, with a draggable triangle.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="20,40 66,40 20,14" fill="#85B7EB" fill-opacity="0.35" stroke="#E6F1FB" stroke-width="1.4"/><polygon points="20,40 66,40 20,66" fill="none" stroke="#FAC775" stroke-width="1.2" stroke-dasharray="3 2"/><polyline points="20,34 26,34 26,40" fill="none" stroke="#E6F1FB" stroke-width="1.1"/><text x="40" y="78" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">1 : √3 : 2</text></svg>',
    keywords=['30-60-90 triangle', '30 60 90 triangle proof', 'side opposite 30 degrees half the hypotenuse', '30-60-90 triangle ratio', 'special right triangles', 'equilateral triangle', 'pythagorean theorem', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'reflect', 'sas', 'equilateral', 'half', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $A$ or $C$ to turn and resize the triangle, and watch the readout: $BC$ stays equal to $AB/2$ and $AC$ to $AB\\sqrt3/2$, while the angle at $A$ stays $30°$. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""A 30-60-90 triangle is a right triangle with acute angles $30°$ and $60°$. In the player the right angle is at $C$, the $30°$ angle at $A$ and the $60°$ angle at $B$. The theorem gives its sides:

$$BC = \\frac{AB}{2}, \\qquad AC = \\frac{\\sqrt3}{2}\\,AB, \\qquad BC : AC : AB = 1 : \\sqrt3 : 2$$

The side opposite the $30°$ angle is half the hypotenuse. This is one of the two special right triangles, together with the 45-45-90 triangle on the [square diagonals](!/geometry/visual-tools/square-diagonals) page, and it is the source of the exact values $\\sin 30° = \\tfrac12$ and $\\cos 30° = \\tfrac{\\sqrt3}{2}$.

The trick is that a 30-60-90 triangle is half of an [equilateral triangle](!/geometry/visual-tools/equilateral-triangle). In the player $A$ and $C$ are free and $B$ is placed on the perpendicular at $C$ so that the angle at $A$ stays $30°$; the readout compares the sides with $AB/2$ and $AB\\sqrt3/2$."""),
        ('Reflecting the Triangle', r"""Extend the leg $BC$ beyond $C$ to a point $B'$ with $CB' = CB$, and join $A$ to $B'$. Because the angle at $C$ is right, $B'$ is the mirror image of $B$ in the line $AC$, and $B$, $C$, $B'$ lie on one line. The triangle and its reflection together make the big triangle $ABB'$."""),
        ('Side, Angle, Side', r"""The triangles $ACB$ and $ACB'$ share the side $AC$, have $CB = CB'$, and have right angles at $C$ between those sides. By SAS they are congruent, so

$$AB' = AB, \\qquad \\angle CAB' = 30°, \\qquad \\angle AB'C = 60°$$"""),
        ('An Equilateral Triangle', r"""Now look at the big triangle $ABB'$. Its angle at $A$ is made of two $30°$ angles, so it is $60°$; its angles at $B$ and $B'$ are $60°$ each. A triangle with three equal angles is [equilateral](!/geometry/visual-tools/equilateral-triangle):

$$AB = BB' = AB'$$"""),
        ('Half the Hypotenuse', r"""$C$ is the midpoint of $BB'$, since $CB = CB'$. So

$$BC = \\frac{BB'}{2} = \\frac{AB}{2}$$

The short leg, opposite the $30°$ angle, is half the hypotenuse."""),
        ('Why It Holds', r"""The long leg comes from the [Pythagorean theorem](!/geometry/visual-tools/pythagorean-theorem) in the right triangle $ABC$:

$$AC^2 = AB^2 - BC^2 = AB^2 - \\frac{AB^2}{4} = \\frac34\\,AB^2, \\qquad AC = \\frac{\\sqrt3}{2}\\,AB$$

So the sides are in the ratio $1 : \\sqrt3 : 2$. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, a construction, SAS, the equilateral triangle, halving, and the Pythagorean theorem.

The converse also holds: if one leg of a right triangle is half the hypotenuse, the angle opposite it is $30°$. The same reflection gives a triangle with three equal sides, hence three $60°$ angles, and the angle at $A$ is half of one."""),
        ('Dragging the Figure', r"""Drag $A$ or $C$: the triangle turns and grows or shrinks, $B$ and its mirror image $B'$ follow, and the readout shows $BC = AB/2$ and $AC = AB\\sqrt3/2$ at every position, with the angle at $A$ fixed at $30°$. Only the scale changes, never the shape.

The player keeps the long leg long enough for the marks and both the triangle and its mirror image inside the frame; a drag that would push a point out is refused."""),
        ('Consequences', r"""• **Exact trigonometric values.** With hypotenuse 1 the legs are $\\tfrac12$ and $\\tfrac{\\sqrt3}{2}$: $\\sin 30° = \\cos 60° = \\tfrac12$, $\\cos 30° = \\sin 60° = \\tfrac{\\sqrt3}{2}$, $\\tan 30° = \\tfrac{1}{\\sqrt3}$, $\\tan 60° = \\sqrt3$.
• **The height of an equilateral triangle.** An equilateral triangle of side $s$ has height $\\tfrac{\\sqrt3}{2}s$ and area $\\tfrac{\\sqrt3}{4}s^2$.
• **The midpoint of the hypotenuse.** The median from the right angle is half the hypotenuse ([midpoint of the hypotenuse](!/geometry/visual-tools/midpoint-of-hypotenuse)); in a 30-60-90 triangle it is also equal to the short leg, cutting off an equilateral triangle at the $60°$ vertex.
• **The regular hexagon.** Half of each of the six equilateral triangles of a [regular hexagon](!/geometry/visual-tools/regular-hexagon) is a 30-60-90 triangle, so the distance from the centre to a side is $\\tfrac{\\sqrt3}{2}$ times the side.
• **Special right triangles.** Together with the 45-45-90 triangle of the [square diagonals](!/geometry/visual-tools/square-diagonals) page, it is one of the two right triangles whose sides and angles are both known exactly without tables."""),
    ],
    order=[('the-statement', 'given'), ('reflecting-the-triangle', 'reflect'), ('side-angle-side', 'sas'), ('an-equilateral-triangle', 'equilateral'), ('half-the-hypotenuse', 'half'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('What are the side ratios of a 30-60-90 triangle?', '1 : √3 : 2. The side opposite 30° is half the hypotenuse, and the side opposite 60° is half the hypotenuse times √3.'),
        ('Why is the side opposite 30° half the hypotenuse?', 'Reflect the triangle in its longer leg. The triangle and its mirror image together make a triangle with three 60° angles, which is equilateral, so the hypotenuse equals the doubled short leg.'),
        ('How do you find the long leg of a 30-60-90 triangle?', 'Multiply the short leg by √3, or the hypotenuse by √3/2. It follows from the Pythagorean theorem once the short leg is known to be half the hypotenuse.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The right triangle ABC with α = 30° at A and β = 60° at B.'),
            ('reflect', 'Reflecting the triangle, frozen', 'B reflected in AC to B′: CB = CB′.'),
            ('sas', 'Side, angle, side, frozen', 'ACB and ACB′ congruent by SAS: 30° and 60° copied.'),
            ('equilateral', 'An equilateral triangle, frozen', 'Three 60° angles: ABB′ is equilateral.'),
            ('half', 'Half the hypotenuse, frozen', 'BC is half of BB′, and BB′ = AB.'),
            ('conclude', 'The conclusion, frozen', 'Pythagoras: AC = AB · √3/2, the ratio 1 : √3 : 2.')],
    dragged_cap='After dragging A, frozen', dragged_txt='A moved in and up: the triangle turned and shrank, the ratio 1 : √3 : 2 unchanged.',
    notes=[('given', 'Drag A or C: the angle at A stays 30°.', 'the-statement', 'Learn more about the statement'),
           ('reflect', 'A mirror image across the long leg.', 'reflecting-the-triangle', 'Learn more about the reflection'),
           ('sas', 'Two legs and the right angle: SAS.', 'side-angle-side', 'Learn more about SAS'),
           ('equilateral', 'Three 60° angles make three equal sides.', 'an-equilateral-triangle', 'Learn more about the equilateral triangle'),
           ('half', 'C is the midpoint of BB′.', 'half-the-hypotenuse', 'Learn more about the half'),
           ('conclude', 'Drag a vertex: the readout keeps the ratio.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $A$ or $C$ to turn and resize the triangle; the readout under the canvas compares $BC$ with $AB/2$ and $AC$ with $AB\\sqrt3/2$. [Learn more about why it holds](!#why-it-holds)',
    demo_says=["REFLECT\nNext → : B reflected in AC to B′, with CB = CB′.",
               "SAS\nACB and ACB′ are congruent: 30° and 60° are copied.",
               "EQUILATERAL\nABB′ has three 60° angles: it is equilateral.",
               "HALF\nBC is half of BB′ = AB.",
               "PYTHAGORAS\nAC = AB · √3/2: the ratio 1 : √3 : 2."],
    demo_drag_say='DRAG A\nTurn and shrink the triangle: the ratio stays 1 : √3 : 2.',
    drag_desc='A and C move freely and turn or resize the triangle; the hollow points B and B′ follow',
    readout_desc='the line under the figure: BC beside AB/2, AC beside AB·√3/2, and the angle at A, live while you drag',
    p3top='170px', p3left='calc(25% + 60px)',
    frame2=[('The mirror image', 'ACB′, the triangle reflected in its long leg AC', '262px', 'calc(25% + 20px)'),
            ('The equilateral triangle', 'ABB′, with two ticks on AB and AB′', '120px', 'calc(25% + 60px)'),
            ('The short leg', 'BC, half of BB′, one tick like CB′', '150px', 'calc(25% - 120px)'),
            ('Justification tags', 'Given, Construction, SAS, Equilateral triangle, Halving, Pythagorean theorem', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the triangle is turned and resized by dragging two vertices and keeps its angles.',
    input_rows=[['$A$, $C$', 'solid dot', 'move freely; the triangle is built on the long leg $CA$'],
                ["$B$, $B'$", 'hollow dot', 'cannot be dragged: $B$ is placed so the angle at $A$ is $30°$, $B\'$ is its mirror image'],
                ['a leg too short, or a point out of the frame', '—', 'refused']],
    labels_desc="show or hide the point names $A$, $B$, $C$, $B'$",
    measures_desc="write each marked angle's size in degrees beside its arc: α = 30° and β = 60°",
    readout_short='the sides beside AB/2 and AB·√3/2', tags='**Given**, **Construction**, **SAS**, **Equilateral triangle**, **Halving**, **Pythagorean theorem**',
    beh1='The readout is a check, not a step of the proof. The argument uses SAS, the equilateral triangle and Pythagoras, never the numbers, which is why the ratio holds for every size you drag.',
    beh2t='The angles are built in', beh2='B is placed on the perpendicular to CA at C at the distance CA/√3, which makes the angle at A 30° whatever you drag; that is the hypothesis, built into the figure.',
)]
