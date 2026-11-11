# Content for page 60, the perpendicular bisector theorem, read by geo-view-42-45.py (argument geo_pages_60)
PAGES = [dict(
    slug='perpendicular-bisector', prev='regular-polygon-angles', prev_h1='Angles of a Regular Polygon', prev_key='regularPolygonAngles', prev_dragged='draggedRegularPolygon',
    key='perpendicularBisector', dragged='draggedPerpBisector', dragged_comment='P moved up the bisector: both distances longer, still equal',
    dragged_expr="{ ...PROOFS.perpendicularBisector.model, params: { ...PROOFS.perpendicularBisector.model.params, t: 0.88 } }",
    demo_drag="{ drag: '[data-handle=\"P\"]', dx: 0, dy: -14, ms: 1400 },",
    subCategory='Lines and Angles',
    title='Perpendicular Bisector Theorem Proof | Equidistant Points Step by Step',
    desc='Watch the proof that a point lies on the perpendicular bisector of a segment exactly when it is equally far from the two ends, by SAS one way and SSS the other, step by step. Then drag the point along the bisector.',
    h1='Perpendicular Bisector Theorem', name='Perpendicular Bisector Theorem Proof',
    appdesc='Step-by-step interactive proof of the perpendicular bisector theorem and its converse: SAS gives equal distances, SSS and a linear pair give the right angle, with a draggable point on the bisector.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="60" x2="70" y2="60" stroke="#E6F1FB" stroke-width="1.6"/><line x1="40" y1="6" x2="40" y2="72" stroke="#FAC775" stroke-width="1.4" stroke-dasharray="3 2"/><line x1="40" y1="22" x2="10" y2="60" stroke="#E6F1FB" stroke-width="1.2"/><line x1="40" y1="22" x2="70" y2="60" stroke="#E6F1FB" stroke-width="1.2"/><circle cx="40" cy="22" r="2.4" fill="#FAC775"/><polyline points="40,54 46,54 46,60" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><text x="40" y="79" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">PA = PB</text></svg>',
    keywords=['perpendicular bisector theorem', 'perpendicular bisector proof', 'equidistant from two points', 'converse of perpendicular bisector theorem', 'locus of points equidistant', 'sas congruence', 'sss congruence', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'join', 'sas', 'equal', 'converse', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $P$ along the dashed perpendicular bisector, or drag $A$ or $B$, and watch the two distances in the readout stay equal while the angle at $M$ stays $90°$. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""The perpendicular bisector of a segment $AB$ is the line through its midpoint $M$ at right angles to it. The theorem describes it by distances:

$$P \\text{ is on the perpendicular bisector of } AB \\iff PA = PB$$

The forward direction says that every point of the bisector is equally far from $A$ and $B$; the converse says that every point equally far from $A$ and $B$ is on the bisector. Together they make the perpendicular bisector the locus of points equidistant from $A$ and $B$.

This is the fact behind the [circumcentre](!/geometry/visual-tools/circumcentre), the [chord bisector](!/geometry/visual-tools/chord-bisector) and the [kite diagonals](!/geometry/visual-tools/kite-diagonals) pages. In the player $A$ and $B$ are free and $P$ slides along the perpendicular at $M$; the readout shows $PA$, $PB$ and the angle at $M$."""),
        ('Two Triangles', r"""Join $P$ to $A$, to $B$ and to the midpoint $M$. The segment $PM$, which lies along the bisector, cuts the triangle $PAB$ into the two triangles $PMA$ and $PMB$. They share the side $PM$, and the whole proof, in both directions, compares these two triangles."""),
        ('Side, Angle, Side', r"""For $P$ on the perpendicular bisector, the triangles $PMA$ and $PMB$ have

$$AM = MB, \\qquad \\angle PMA = \\angle PMB = 90°, \\qquad PM = PM$$

two sides and the angle between them. By SAS they are congruent."""),
        ('Equal Distances', r"""Corresponding parts of congruent triangles are equal, so the third sides agree:

$$PA = PB$$

Every point of the perpendicular bisector is equally far from the two ends of the segment."""),
        ('The Converse', r"""Now forget the bisector and start from a point $P$ with $PA = PB$; let $M$ be the midpoint of $AB$. The triangles $PMA$ and $PMB$ have $PA = PB$, $AM = MB$ and the common side $PM$: three pairs of equal sides, so by [SSS](!/geometry/visual-tools/sss-congruence) they are congruent, and

$$\\angle PMA = \\angle PMB$$

This is the same argument as on the [isosceles base angles](!/geometry/visual-tools/isosceles-base-angles) page, where the triangle $PAB$ with $PA = PB$ is isosceles and $PM$ is its median."""),
        ('Why It Holds', r"""The angles $PMA$ and $PMB$ lie side by side along the line $AB$, so they make a straight angle, $180°$. They are equal, so each is half of it:

$$\\angle PMA = \\angle PMB = 90°$$

$PM$ is perpendicular to $AB$ at its midpoint, so $P$ is on the perpendicular bisector. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, a construction, SAS, corresponding parts, SSS and the linear pair.

The two directions use the same two triangles: SAS when the right angle is known, SSS when the equal distances are known."""),
        ('Dragging the Figure', r"""Drag $P$ along the dashed line: the two segments $PA$ and $PB$ grow or shrink together, and the readout shows them equal at every position while the angle at $M$ stays $90°$. Drag $A$ or $B$ to turn or stretch the segment; the bisector turns with it and $P$ keeps its place along it.

The player keeps $P$ on the bisector above $AB$ and the whole dashed line inside the frame; a drag that would push it out is refused."""),
        ('Consequences', r"""• **The circumcentre.** The perpendicular bisectors of two sides of a triangle meet at a point equally far from all three vertices, so the third bisector passes through it too: the [circumcentre](!/geometry/visual-tools/circumcentre).
• **Chords.** The centre of a circle is equally far from the ends of any chord, so it lies on the chord's perpendicular bisector: the [chord bisector](!/geometry/visual-tools/chord-bisector) theorem from the other side.
• **Kites and rhombuses.** In a kite two vertices are each equally far from the other two, so the line through them is the perpendicular bisector of the other diagonal: the [kite diagonals](!/geometry/visual-tools/kite-diagonals) are perpendicular.
• **Construction.** Two arcs of equal radius about $A$ and about $B$ meet in two points equally far from both; the line through them is the perpendicular bisector, which is how it is drawn with ruler and compass.
• **Reflection.** Reflecting in the perpendicular bisector swaps $A$ and $B$; every point of the mirror line is its own image and so is equally far from a point and its image."""),
    ],
    order=[('the-statement', 'given'), ('two-triangles', 'join'), ('side-angle-side', 'sas'), ('equal-distances', 'equal'), ('the-converse', 'converse'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('What does the perpendicular bisector theorem say?', 'A point lies on the perpendicular bisector of a segment AB if and only if it is the same distance from A and from B. The perpendicular bisector is the locus of points equidistant from the two ends.'),
        ('How is the perpendicular bisector theorem proved?', 'For P on the bisector, the triangles PMA and PMB (M the midpoint) have AM = MB, right angles at M and the common side PM, so they are congruent by SAS and PA = PB. Conversely, if PA = PB the same triangles are congruent by SSS, so the angles at M are equal and, forming a straight angle, are 90° each.'),
        ('How do you construct a perpendicular bisector?', 'Draw two arcs of the same radius, more than half of AB, centred at A and at B. They cross at two points, each equally far from A and B, so both lie on the perpendicular bisector; the line through them is the bisector.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The segment AB, its midpoint M and the dashed perpendicular bisector; P on it.'),
            ('join', 'Two triangles, frozen', 'PA, PB and PM drawn; the triangles PMA and PMB shaded.'),
            ('sas', 'Side, angle, side, frozen', 'AM = MB, right angles at M, PM common: PMA ≅ PMB.'),
            ('equal', 'Equal distances, frozen', 'PA = PB, two ticks each.'),
            ('converse', 'The converse, frozen', 'From PA = PB: SSS makes the angles at M equal.'),
            ('conclude', 'The conclusion, frozen', 'Equal angles in a straight line: 90° each, P on the bisector.')],
    dragged_cap='After dragging P, frozen', dragged_txt='P moved up the bisector: both distances longer, still equal.',
    notes=[('given', 'Drag P along the dashed line.', 'the-statement', 'Learn more about the statement'),
           ('join', 'One segment, two triangles.', 'two-triangles', 'Learn more about the two triangles'),
           ('sas', 'Two sides and the right angle between them.', 'side-angle-side', 'Learn more about SAS'),
           ('equal', 'The third sides of congruent triangles.', 'equal-distances', 'Learn more about the equal distances'),
           ('converse', 'Three equal sides: equal angles at M.', 'the-converse', 'Learn more about the converse'),
           ('conclude', 'Drag P: the readout keeps PA = PB and 90°.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $P$ along the perpendicular bisector, or $A$ or $B$; the readout under the canvas shows $PA$, $PB$ and the angle at $M$. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['TRIANGLES\nNext → : PA, PB and PM drawn: two triangles sharing PM.',
               'SAS\nAM = MB, right angles at M, PM common: congruent.',
               'EQUAL\nSo PA = PB.',
               'CONVERSE\nFrom PA = PB alone, SSS makes the angles at M equal.',
               'LINEAR PAIR\nEqual angles on a line: 90° each, so P is on the bisector.'],
    demo_drag_say='DRAG P\nSlide P along the bisector: PA and PB stay equal.',
    drag_desc='P slides along the dashed bisector, A and B move the segment; the hollow midpoint M follows',
    readout_desc='the line under the figure: PA, PB and the angle at M, live while you drag',
    p3top='110px', p3left='calc(25% + 30px)',
    frame2=[('The bisector', 'the dashed line through M at right angles to AB', '70px', 'calc(25% - 30px)'),
            ('The two triangles', 'PMA and PMB, shaded either side of PM', '236px', 'calc(25% - 110px)'),
            ('The ticks', 'one tick for AM = MB, two for PA = PB', '236px', 'calc(25% + 90px)'),
            ('Justification tags', 'Given, Construction, SAS, Corresponding parts, SSS, Linear pair', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the segment and the point on its bisector are placed by dragging.',
    input_rows=[['$P$', 'solid dot', 'slides along the perpendicular bisector of $AB$'],
                ['$A$, $B$', 'solid dot', 'move the ends of the segment; the bisector turns with it'],
                ['$M$', 'hollow dot', 'cannot be dragged: the midpoint of $AB$'],
                ['a segment too short, or the dashed line out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $M$, $P$',
    measures_desc="write each marked angle's size in degrees beside its arc (this proof marks only the right angle at M)",
    readout_short='$PA$, $PB$ and the angle at $M$', tags='**Given**, **Construction**, **SAS**, **Corresponding parts**, **SSS**, **Linear pair**',
    beh1='The readout is a check, not a step of the proof. The argument uses SAS, SSS and the linear pair, never the numbers, which is why the distances agree wherever you drag P.',
    beh2t='P stays on the bisector', beh2='P is kept on the perpendicular at the midpoint, which is the hypothesis of the forward direction; the converse is argued from PA = PB alone, so it holds for any point, not just the ones the player can reach.',
)]
