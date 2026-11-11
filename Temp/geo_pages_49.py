# Content for page 49, the polygon exterior angle sum, read by geo-view-42-45.py (argument geo_pages_49)
PAGES = [dict(
    slug='polygon-exterior-angles', prev='tangent-chord-angle', prev_h1='Tangent-Chord Angle Theorem', prev_key='tangentChord', prev_dragged='draggedTangentChord',
    key='polygonExteriorAngles', dragged='draggedPolygonExterior', dragged_comment='A pulled to the right: the five exterior angles change, their sum stays 360°',
    dragged_expr="{ ...PROOFS.polygonExteriorAngles.model, points: { ...PROOFS.polygonExteriorAngles.model.points, A: { x: 335, y: 105 } } }",
    demo_drag="{ drag: '[data-handle=\"A\"]', dx: 14, dy: 6, ms: 1400 },",
    subCategory='Polygon',
    title='Polygon Exterior Angle Sum Proof | One Full Turn Step by Step',
    desc='Watch the proof that the exterior angles of a convex polygon add up to 360°, shown on a pentagon: a straight angle at each vertex, minus the interior angle sum, step by step. Then drag the vertices.',
    h1='Polygon Exterior Angle Sum', name='Polygon Exterior Angle Sum Proof',
    appdesc='Step-by-step interactive proof that the exterior angles of a convex polygon add up to 360°, on a pentagon with draggable vertices: linear pairs at every vertex minus the interior angle sum.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="40,12 66,31 56,62 24,62 14,31" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><line x1="40" y1="12" x2="50" y2="4" stroke="#FAC775" stroke-width="1.4"/><line x1="66" y1="31" x2="74" y2="37" stroke="#FAC775" stroke-width="1.4"/><line x1="56" y1="62" x2="52" y2="72" stroke="#FAC775" stroke-width="1.4"/><line x1="24" y1="62" x2="14" y2="62" stroke="#FAC775" stroke-width="1.4"/><line x1="14" y1="31" x2="10" y2="20" stroke="#FAC775" stroke-width="1.4"/><text x="40" y="78" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">360°</text></svg>',
    keywords=['exterior angles of a polygon', 'exterior angle sum 360', 'polygon exterior angle theorem', 'sum of exterior angles proof', 'convex polygon', 'pentagon exterior angles', 'turning angles', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'linear', 'straight', 'interior', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag any vertex of the pentagon, keeping it convex, and watch the five exterior angles change while their sum in the readout stays at 360°. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""Walk round a convex polygon and extend each side beyond the vertex you arrive at. The angle between that extension and the next side is the exterior angle at the vertex: it is the turn you make there. The theorem says that the exterior angles, one at each vertex and all taken the same way round, add up to a full turn:

$$\\alpha' + \\beta' + \\gamma' + \\delta' + \\varepsilon' = 360°$$

for the pentagon in the player, and $360°$ for every convex polygon, however many sides it has. The [triangle version](!/geometry/visual-tools/exterior-angle-sum) has its own page; this page proves the general statement from the [polygon angle sum](!/geometry/visual-tools/polygon-angle-sum).

In the player the five vertices are free; each side is drawn extended a little beyond its far end, and the exterior angles are marked there. The readout shows the sum of the exterior angles and, for comparison, the sum of the interior ones."""),
        ('Linear Pairs', r"""At the vertex $A$ the interior angle $\\alpha$ (between the sides $AE$ and $AB$) and the exterior angle $\\alpha'$ (between $AB$ and the extension of $EA$) lie side by side along the straight line through $E$, $A$ and the extension. Two angles that fill a straight line are a linear pair, and they add up to $180°$, as on the [vertical angles](!/geometry/visual-tools/vertical-angles) page:

$$\\alpha + \\alpha' = 180°$$

Nothing is special about $A$: at every vertex the interior and the exterior angle make a straight angle, so $\\beta + \\beta' = \\gamma + \\gamma' = \\delta + \\delta' = \\varepsilon + \\varepsilon' = 180°$."""),
        ('Five Straight Angles', r"""Add the five equations, one per vertex:

$$(\\alpha + \\alpha') + (\\beta + \\beta') + (\\gamma + \\gamma') + (\\delta + \\delta') + (\\varepsilon + \\varepsilon') = 5 \\cdot 180° = 900°$$

On the left are all five interior angles and all five exterior angles together. For a polygon with $n$ sides the same addition gives $n \\cdot 180°$."""),
        ('The Interior Sum', r"""The interior angles of a convex pentagon add up to $(5 - 2) \\cdot 180° = 540°$: the [polygon angle sum](!/geometry/visual-tools/polygon-angle-sum) page cuts the pentagon into three triangles from one vertex. For an $n$-gon the interior angles add up to $(n - 2) \\cdot 180°$:

$$\\alpha + \\beta + \\gamma + \\delta + \\varepsilon = 540°$$"""),
        ('Why It Holds', r"""Take the interior sum away from the total of the straight angles:

$$\\alpha' + \\beta' + \\gamma' + \\delta' + \\varepsilon' = 900° - 540° = 360°$$

For an $n$-gon, $n \\cdot 180° - (n - 2) \\cdot 180° = 2 \\cdot 180° = 360°$: the number of sides cancels out, and the exterior angles of every convex polygon add up to one full turn. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, linear pairs, an addition, the polygon angle sum and a subtraction.

There is also a picture behind the algebra: walking once round the polygon you turn by each exterior angle in turn, and when you are back at the start facing the way you began you have turned through exactly $360°$."""),
        ('Dragging the Figure', r"""Drag any vertex: the two sides at it swing, the exterior angle there and at its two neighbours change, and the sum in the readout stays at $360°$ while the interior sum stays at $540°$. Pull a vertex outwards and its exterior angle grows; push it towards the centre and the exterior angle shrinks towards $0°$ as the two sides straighten out.

The player keeps the pentagon convex (every corner turning the same way), with sides long enough for the angle marks and all the extensions inside the frame. A drag that would make the pentagon dent inwards, or carry a point out of the frame, is refused; for a non-convex polygon the statement needs signed turns, and the player keeps to the convex case."""),
        ('Consequences', r"""• **Regular polygons.** In a regular $n$-gon every exterior angle is $360°/n$, so every interior angle is $180° - 360°/n$: $108°$ for the pentagon, $120°$ for the hexagon, $135°$ for the octagon.
• **Only three regular tilings.** The plane can be tiled by equal regular polygons only when the interior angle $180° - 360°/n$ divides $360°$, which happens for $n = 3, 4, 6$ and no other $n$.
• **Turtle geometry.** A turtle that repeats "forward, turn by $t$" closes a regular polygon after $360°/t$ steps; the exterior angle sum is why.
• **The triangle case.** For $n = 3$ the theorem is the [sum of exterior angles](!/geometry/visual-tools/exterior-angle-sum) of a triangle, proved there directly from the [exterior angle theorem](!/geometry/visual-tools/exterior-angle).
• **Total curvature.** For a smooth closed convex curve the same statement is that the tangent turns through $360°$ once round; the polygon theorem is its discrete form."""),
    ],
    order=[('the-statement', 'given'), ('linear-pairs', 'linear'), ('five-straight-angles', 'straight'), ('the-interior-sum', 'interior'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('What is the sum of the exterior angles of a polygon?', '360°, for every convex polygon, whatever the number of sides, when one exterior angle is taken at each vertex and all the same way round.'),
        ('How is the exterior angle sum of a polygon proved?', 'At each of the n vertices the interior and the exterior angle make a straight angle, so together they come to n·180°. The interior angles add up to (n − 2)·180° by the polygon angle sum, so the exterior angles add up to n·180° − (n − 2)·180° = 360°.'),
        ('What is the exterior angle of a regular polygon?', '360° divided by the number of sides: 72° for a regular pentagon, 60° for a hexagon, 45° for an octagon. The interior angle is 180° minus that.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The pentagon with every side extended the same way round; the five exterior angles marked.'),
            ('linear', 'Linear pairs, frozen', 'Interior and exterior angle at each vertex make a straight angle; α and α′ lit.'),
            ('straight', 'Five straight angles, frozen', 'All ten angles lit: five straight angles, 900°.'),
            ('interior', 'The interior sum, frozen', 'The five interior angles: 540° by the polygon angle sum.'),
            ('conclude', 'The conclusion, frozen', 'The five exterior angles: 900° − 540° = 360°.')],
    dragged_cap='After dragging A, frozen', dragged_txt='A pulled to the right: the exterior angles at E, A and B change, the sum is still 360°.',
    notes=[('given', 'Drag a vertex: the exterior angles change, the sum does not.', 'the-statement', 'Learn more about the statement'),
           ('linear', 'Interior plus exterior is a straight angle.', 'linear-pairs', 'Learn more about linear pairs'),
           ('straight', 'One straight angle per vertex.', 'five-straight-angles', 'Learn more about the five straight angles'),
           ('interior', 'Three triangles make 540°.', 'the-interior-sum', 'Learn more about the interior sum'),
           ('conclude', 'Drag a vertex: the readout stays at 360°.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag any vertex, keeping the pentagon convex; the readout under the canvas shows the sum of the exterior angles and the sum of the interior angles. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['LINEAR PAIRS\nNext → : at each vertex the interior and the exterior angle make 180°.',
               'ADD\nFive straight angles: 900°.',
               'INTERIOR SUM\nThe interior angles add up to 540°.',
               'SUBTRACT\n900° − 540° = 360°: the exterior angles make one full turn.'],
    demo_drag_say='DRAG A\nMove a vertex: three exterior angles change, the sum does not.',
    drag_desc='every vertex A to E moves freely while the pentagon stays convex; the extensions follow',
    readout_desc='the line under the figure: the sum of the five exterior angles and the sum of the five interior angles, live while you drag',
    p3top='60px', p3left='calc(25% + 40px)',
    frame2=[('The exterior angles', 'α′ to ε′, between each side and the extension of the side before it, all the same way round', '60px', 'calc(25% - 80px)'),
            ('The extensions', 'each side drawn a little past its far end', '262px', 'calc(25% + 110px)'),
            ('The interior angles', 'α to ε, filling the straight angle with the exterior angle at each vertex', '236px', 'calc(25% - 30px)'),
            ('Justification tags', 'Given, Linear pair, Adding, Polygon angle sum, Subtracting', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the pentagon is shaped by dragging its vertices and the extensions follow.',
    input_rows=[['$A$, $B$, $C$, $D$, $E$', 'solid dot', 'move freely; the two sides at the vertex, their extensions and three exterior angles follow'],
                ['the extension ends', 'none', 'cannot be dragged: each side continued a little past its far end'],
                ['a dent (non-convex shape), a side shorter than the angle marks, or a point out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$ to $E$',
    measures_desc="write each marked angle's size in degrees beside its arc: the five exterior and the five interior angles",
    readout_short='the two sums', tags='**Given**, **Linear pair**, **Adding**, **Polygon angle sum**, **Subtracting**',
    beh1='The readout is a check, not a step of the proof. The argument uses linear pairs and the polygon angle sum, never the numbers, which is why the sum is 360° for every convex pentagon you can drag.',
    beh2t='Five sides stand for n', beh2='The player shows a pentagon, but every step of the proof is written for n sides as well: n straight angles, (n − 2)·180° inside, 360° left over.',
)]
