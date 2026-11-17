# Content for page 80, Pitot's theorem, read by geo-view-42-45.py (argument geo_pages_80)
# Strings in single quotes must not contain an apostrophe.
PAGES = [dict(
    slug='pitot-theorem', prev='viviani-theorem', prev_h1="Viviani's Theorem", prev_key='viviani', prev_dragged='draggedViviani',
    key='pitot', dragged='draggedPitot', dragged_comment='R moved round the circle: new sides, the two sums still equal',
    dragged_expr="{ ...PROOFS.pitot.model, params: { ...PROOFS.pitot.model.params, tr: 90 * Math.PI / 180 } }",
    demo_drag="{ drag: '[data-handle=\"R\"]', dx: -10, dy: 4, ms: 1400 },",
    subCategory='Quadrilateral',
    title="Pitot's Theorem | Tangential Quadrilateral Opposite Sides Proof Step by Step",
    desc="Watch the proof of Pitot's theorem: in a quadrilateral drawn round a circle the two pairs of opposite sides have equal sums, by the equal tangents from each vertex, step by step. Then drag the points of contact round the circle.",
    h1="Pitot's Theorem", name='Pitot Theorem Proof',
    appdesc='Step-by-step interactive proof that in a tangential quadrilateral the sums of opposite sides are equal, with draggable points of contact.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="38" r="17" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><polygon points="15,22 59,16 63,50 30,64" fill="none" stroke="#E6F1FB" stroke-width="1.4"/><line x1="15" y1="22" x2="38" y2="19" stroke="#FAC775" stroke-width="2"/><line x1="15" y1="22" x2="23" y2="43" stroke="#FAC775" stroke-width="2"/><text x="40" y="77" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">AB + CD = BC + DA</text></svg>',
    keywords=['pitot theorem', 'pitots theorem', 'tangential quadrilateral', 'quadrilateral circumscribed about a circle', 'sum of opposite sides equal', 'incircle of a quadrilateral', 'equal tangents', 'quadrilateral theorems', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'tangents', 'first', 'second', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag any of the points of contact $P$, $Q$, $R$, $S$ round the circle and watch the readout: the sides change, but $AB + CD$ and $BC + DA$ stay equal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""A quadrilateral $ABCD$ is drawn round a circle with centre $O$: each of its four sides touches the circle, $AB$ at $P$, $BC$ at $Q$, $CD$ at $R$ and $DA$ at $S$. Such a quadrilateral is called tangential. Pitot's theorem says

$$AB + CD = BC + DA$$

so the two pairs of opposite sides have the same sum.

In the player the circle is fixed and $P$, $Q$, $R$, $S$ slide round it. The side through each point of contact is the tangent there, square to the radius as on the [tangent and radius](!/geometry/visual-tools/tangent-radius) page, and each vertex is where two neighbouring tangents meet. The readout shows both sums, in units of $60$ pixels."""),
        ('Equal Tangents', r"""From each vertex two tangents touch the circle, and by the [two tangents](!/geometry/visual-tools/two-tangents) theorem they have the same length. In the player the two tangents from a vertex share a colour:

$$AP = AS, \\qquad BP = BQ, \\qquad CQ = CR, \\qquad DR = DS$$"""),
        ('The First Pair of Sides', r"""$P$ lies on $AB$ and $R$ on $CD$, so each of these sides is the sum of its two pieces:

$$AB + CD = AP + PB + CR + RD$$

There is one piece from each of the four vertices."""),
        ('The Second Pair of Sides', r"""In the same way $Q$ splits $BC$ and $S$ splits $DA$:

$$BC + DA = BQ + QC + DS + SA$$

Again there is one piece from each vertex."""),
        ('Why It Holds', r"""Replace each piece in the second sum by the equal piece from the same vertex, $BQ = BP$, $QC = CR$, $DS = DR$ and $SA = AP$:

$$BC + DA = BP + CR + DR + AP = AB + CD$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, the two tangents theorem, segment addition (twice) and combining.

Each vertex gives one tangent length to each sum, which is why the two sums must agree whatever the shape of the quadrilateral."""),
        ('Dragging the Figure', r"""Drag $P$, $Q$, $R$ or $S$ round the circle: the two sides through that point turn, the vertices at their ends move, and the readout keeps $AB + CD$ equal to $BC + DA$.

The player keeps the points of contact in order round the circle, keeps each arc between neighbours between $55°$ and $120°$ so that no vertex runs far away or becomes too sharp, and keeps the figure in the frame; a drag that would break one of these is refused."""),
        ('Consequences', r"""• **The converse.** A convex quadrilateral with $AB + CD = BC + DA$ always has a circle touching all four sides, so the equal sums are exactly the test for a tangential quadrilateral.
• **The centre.** $O$ is equally far from all four sides, so it lies on the bisector of every angle of $ABCD$, as on the [angle bisector locus](!/geometry/visual-tools/angle-bisector-locus) page; for a triangle the same point is the [incentre](!/geometry/visual-tools/incentre).
• **Kites and rhombuses.** A kite has $AB = AD$ and $CB = CD$, so its opposite sums agree and it always has an inscribed circle, as does every rhombus; see the [kite diagonals](!/geometry/visual-tools/kite-diagonals) and [rhombus diagonals](!/geometry/visual-tools/rhombus-diagonals) pages.
• **Rectangles.** A rectangle that is not a square has $AB + CD = 2 \\cdot AB$ and $BC + DA = 2 \\cdot BC$, which differ, so no circle can touch all four of its sides.
• **Area.** Joining $O$ to the vertices splits the quadrilateral into four triangles of height $r$, so its area is $r$ times half its perimeter, $r \\cdot (AB + CD)$."""),
    ],
    order=[('the-statement', 'given'), ('equal-tangents', 'tangents'), ('the-first-pair-of-sides', 'first'), ('the-second-pair-of-sides', 'second'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ("What does Pitot's theorem say?", 'In a quadrilateral whose four sides all touch one circle, the sums of the two pairs of opposite sides are equal: AB + CD = BC + DA.'),
        ("How is Pitot's theorem proved?", 'The two tangents from each vertex to the circle are equal. Each side is made of two tangent pieces from its two ends, and each sum of opposite sides uses exactly one piece from every vertex, so the two sums are equal.'),
        ('Does every quadrilateral have an inscribed circle?', 'No. A convex quadrilateral has one exactly when its opposite sides have equal sums, which is true for every kite and rhombus but not, for example, for a rectangle that is not a square.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'ABCD drawn round the circle, touching it at P, Q, R, S.'),
            ('tangents', 'Equal tangents, frozen', 'One colour per vertex: AP = AS, BP = BQ, CQ = CR, DR = DS.'),
            ('first', 'The first pair of sides, frozen', 'AB + CD = AP + PB + CR + RD.'),
            ('second', 'The second pair of sides, frozen', 'BC + DA = BQ + QC + DS + SA.'),
            ('conclude', 'The conclusion, frozen', 'AB + CD = BC + DA.')],
    dragged_cap='After dragging R, frozen', dragged_txt='R moved round the circle: new sides, the two sums still equal.',
    notes=[('given', 'Drag a point of contact: the sums stay equal.', 'the-statement', 'Learn more about the statement'),
           ('tangents', 'Two equal tangents from each vertex.', 'equal-tangents', 'Learn more about the equal tangents'),
           ('first', 'One piece from each vertex.', 'the-first-pair-of-sides', 'Learn more about the first pair'),
           ('second', 'Again one piece from each vertex.', 'the-second-pair-of-sides', 'Learn more about the second pair'),
           ('conclude', 'Drag a point of contact: the readout keeps the sums equal.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $P$, $Q$, $R$ or $S$ round the circle; the readout under the canvas shows $AB + CD$ and $BC + DA$. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['TANGENTS\nNext → : two equal tangents from each vertex.',
               'FIRST PAIR\nAB + CD takes one piece from each vertex.',
               'SECOND PAIR\nSo does BC + DA.',
               'CONCLUDE\nAB + CD = BC + DA.'],
    demo_drag_say='DRAG R\nMove R round the circle: the sums stay equal.',
    drag_desc='P, Q, R and S slide round the circle; the hollow vertices A, B, C and D follow',
    readout_desc='the line under the figure: AB + CD and BC + DA, live while you drag',
    p3top='174px', p3left='calc(25% + 19px)',
    frame2=[('Equal tangents', 'one colour for the two tangents from each vertex', '129px', 'calc(25% - 65px)'),
            ('The circle', 'touching AB, BC, CD and DA at P, Q, R and S', '204px', 'calc(25% + 21px)'),
            ('The readout', 'AB + CD and BC + DA, always equal', '320px', 'calc(25% + 122px)'),
            ('Justification tags', 'Given, Two tangents, Segment addition, Combining', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the quadrilateral is changed by dragging the points where it touches the circle.',
    input_rows=[['$P$, $Q$, $R$, $S$', 'solid dot', 'slide round the circle; the two sides through the point turn'],
                ['$A$, $B$, $C$, $D$, $O$', 'hollow dot', 'cannot be dragged: where neighbouring tangents meet, and the centre'],
                ['points of contact out of order, an arc between neighbours under $55°$ or over $120°$, or a vertex out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $D$, $O$, $P$, $Q$, $R$, $S$',
    measures_desc='this figure has no marked angles, so Measures changes nothing',
    readout_short='AB + CD and BC + DA', tags='**Given**, **Two tangents**, **Segment addition**, **Combining**',
    beh1='The readout is a check, not a step of the proof. The argument uses equal tangents, never the numbers, which is why the two sums agree for every position you drag.',
    beh2t='The vertices are computed', beh2='A, B, C and D are found where the tangents at neighbouring points of contact meet; nothing makes the opposite sides add up, so the equality in the readout is a real check.',
)]
