# Content for page 69, the incentre-excentre lemma, read by geo-view-42-45.py (argument geo_pages_69)
# Strings in single quotes must not contain an apostrophe.
PAGES = [dict(
    slug='incentre-excentre-lemma', prev='bisector-arc-midpoint', prev_h1='Angle Bisector and the Arc Midpoint', prev_key='arcMidpoint', prev_dragged='draggedArcMidpoint',
    key='incentreExcentre', dragged='draggedIncentreExcentre', dragged_comment='C slid round the circle: a new incentre and a new M, still MB = MC = MI',
    dragged_expr="{ ...PROOFS.incentreExcentre.model, params: { ...PROOFS.incentreExcentre.model.params, tc: 0.3 } }",
    demo_drag="{ drag: '[data-handle=\"C\"]', dx: -12, dy: 10, ms: 1400 },",
    subCategory='Circle',
    title='Incentre-Excentre Lemma Proof | The Arc Midpoint Is Equidistant from the Incentre Step by Step',
    desc='Watch the proof of the incentre-excentre lemma: the point where the angle bisector meets the circumcircle again is equally far from the two other vertices and the incentre, by angles in the same segment and the exterior angle theorem, step by step. Then drag the triangle.',
    h1='The Incentre-Excentre Lemma', name='Incentre-Excentre Lemma Proof',
    appdesc='Step-by-step interactive proof of the incentre-excentre lemma (trillium theorem): MB = MC = MI for the arc midpoint M and the incentre I, by angle chasing, with draggable vertices on the circle.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="36" r="28" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><polygon points="36,8 16,50 64,50" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><line x1="36" y1="8" x2="40" y2="64" stroke="#E6F1FB" stroke-width="1.1"/><circle cx="38" cy="38" r="2.2" fill="#FAC775"/><circle cx="40" cy="64" r="2.2" fill="#FAC775"/><line x1="40" y1="64" x2="16" y2="50" stroke="#FAC775" stroke-width="1.2"/><line x1="40" y1="64" x2="64" y2="50" stroke="#FAC775" stroke-width="1.2"/><text x="40" y="77" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">MB = MI = MC</text></svg>',
    keywords=['incentre excentre lemma', 'incenter excenter lemma', 'trillium theorem', 'arc midpoint equidistant from incenter', 'angle bisector circumcircle', 'incentre', 'circle theorems', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'segment', 'bisector', 'sum', 'exterior', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $A$, $B$ or $C$ round the circle and watch the readout: the three distances $MB$, $MC$ and $MI$ stay equal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""Let $I$ be the [incentre](!/geometry/visual-tools/incentre) of a triangle $ABC$, the point where its angle bisectors meet. The bisector $AI$ meets the circumcircle again at $M$, the [midpoint of the arc](!/geometry/visual-tools/bisector-arc-midpoint) $BC$, so $MB = MC$. The incentre-excentre lemma (also called the trillium theorem) adds a third equal length:

$$MB = MC = MI$$

The circle about $M$ through $B$ and $C$ passes through the incentre; it also passes through the excentre opposite $A$, which gives the lemma its name. It is one of the most used facts in olympiad geometry.

Write $\\alpha$, $\\beta$ for the angles at $A$ and $B$. In the player the vertices slide round the circle, $I$ is computed as the incentre and $M$ as the second point of $AI$ on the circle; the readout shows the three distances."""),
        ('Angles in the Same Segment', r"""The angles $MBC$ and $MAC$ both stand on the arc $MC$, from the same side of the chord, so by [angles in the same segment](!/geometry/visual-tools/angles-in-same-segment) they are equal:

$$\\angle MBC = \\angle MAC = \\frac{\\alpha}{2}$$

the second because $AM$ bisects the angle at $A$."""),
        ('The Bisector at B', r"""The incentre lies on the bisector of the angle at $B$ as well, so $BI$ cuts $\\beta$ into two halves:

$$\\angle ABI = \\angle IBC = \\frac{\\beta}{2}$$"""),
        ('The Angle at B', r"""The angle between $BI$ and $BM$ is made of two parts, $\\angle IBC$ and $\\angle CBM$:

$$\\angle MBI = \\frac{\\beta}{2} + \\frac{\\alpha}{2} = \\theta$$"""),
        ('The Angle at I', r"""Now look at the triangle $ABI$. The ray $IM$ continues $AI$ beyond $I$, so the angle $MIB$ is an exterior angle of $ABI$ at $I$. By the [exterior angle theorem](!/geometry/visual-tools/exterior-angle) it equals the sum of the two remote interior angles:

$$\\angle MIB = \\angle IAB + \\angle IBA = \\frac{\\alpha}{2} + \\frac{\\beta}{2} = \\theta$$"""),
        ('Why It Holds', r"""In the triangle $MBI$ the angles at $B$ and $I$ are both $\\theta$, so by the [isosceles converse](!/geometry/visual-tools/isosceles-converse) the sides opposite them are equal:

$$MI = MB$$

and $MB = MC$ because $M$ is the arc midpoint. So $MB = MC = MI$. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, angles in the same segment, the angle bisector, adding, the exterior angle theorem and the isosceles converse.

The same chase with the external bisector at $B$ shows that the excentre $I_A$ opposite $A$, which also lies on the line $AM$, satisfies $MI_A = MB$ as well: $M$ is the midpoint of $II_A$."""),
        ('Dragging the Figure', r"""Drag $A$, $B$ or $C$ round the circle: the incentre moves, the arc midpoint $M$ moves with $B$ and $C$, and the three distances in the readout stay equal. Dragging $A$ alone moves $I$ along the fixed line towards $M$ but keeps $MI$ equal to $MB$, so $I$ slides along a circle about $M$.

The player keeps $A$ on the larger arc, the sides, $AI$ and $BI$ long enough, the angles at $A$ and $B$ above $45°$ and the angle at $C$ above $40°$, so the angle marks stay readable; a drag that would break one of these is refused. The circle about $M$ through $B$, $I$ and $C$ is not drawn, because most of it would fall outside the canvas."""),
        ('Consequences', r"""• **Locating the incentre.** If the circumcircle and the vertices $B$, $C$ are known, the incentre of any triangle $ABC$ with $A$ on the arc lies on the circle about $M$ through $B$ and $C$; its position on that circle is where $AM$ meets it.
• **The excentre.** The excentre $I_A$ is the other end of the diameter of that circle through $I$: $M$ is the midpoint of $II_A$.
• **Euler distance formula.** The lemma is the key step in proving $OI^2 = R^2 - 2Rr$ for the distance between the [circumcentre](!/geometry/visual-tools/circumcentre) and the incentre.
• **Equal chords from the arc midpoint.** The equal lengths $MB$, $MC$ come from the [arc midpoint](!/geometry/visual-tools/bisector-arc-midpoint) theorem; the lemma adds the third point $I$ on the same circle.
• **Olympiad problems.** Any problem with an incentre and a circumcircle usually reaches for this lemma within a few lines."""),
    ],
    order=[('the-statement', 'given'), ('angles-in-the-same-segment', 'segment'), ('the-bisector-at-b', 'bisector'), ('the-angle-at-b', 'sum'), ('the-angle-at-i', 'exterior'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('What is the incentre-excentre lemma?', 'If the bisector of the angle at A of triangle ABC meets the circumcircle again at M, then M is equally far from B, from C and from the incentre I: MB = MC = MI. The circle about M through these points also passes through the excentre opposite A.'),
        ('How is the incentre-excentre lemma proved?', 'Angles in the same segment give angle MBC = MAC = α/2, and the bisector at B gives angle IBC = β/2, so angle MBI = α/2 + β/2. The angle MIB is an exterior angle of triangle ABI, so it also equals α/2 + β/2. The triangle MBI has two equal angles, so MI = MB.'),
        ('Why is it also called the trillium theorem?', 'The three equal segments from M to B, I and C, together with the circle through them, look like the petals of a trillium flower; the name is used in Russian geometry texts.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The incentre I on the bisector AM, M on the circumcircle.'),
            ('segment', 'Angles in the same segment, frozen', '∠MBC = ∠MAC = α/2.'),
            ('bisector', 'The bisector at B, frozen', 'BI halves the angle at B: β/2 and β/2.'),
            ('sum', 'The angle at B, frozen', 'MBI shaded: ∠MBI = α/2 + β/2 = θ.'),
            ('exterior', 'The angle at I, frozen', 'ABI shaded: the exterior angle at I is α/2 + β/2 = θ.'),
            ('conclude', 'The conclusion, frozen', 'Two equal angles θ: MI = MB = MC.')],
    dragged_cap='After dragging C, frozen', dragged_txt='C slid round the circle: a new incentre and a new M, still MB = MC = MI.',
    notes=[('given', 'Drag a vertex: the three distances stay equal.', 'the-statement', 'Learn more about the statement'),
           ('segment', 'Two angles on the arc MC.', 'angles-in-the-same-segment', 'Learn more about the same segment'),
           ('bisector', 'I is on the bisector at B too.', 'the-bisector-at-b', 'Learn more about the bisector at B'),
           ('sum', 'Two parts make the angle at B.', 'the-angle-at-b', 'Learn more about the angle at B'),
           ('exterior', 'An exterior angle of ABI.', 'the-angle-at-i', 'Learn more about the angle at I'),
           ('conclude', 'Drag a vertex: the readout keeps MB = MC = MI.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $A$, $B$ or $C$ round the circle; the readout under the canvas shows $MB$, $MC$ and $MI$. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['SAME SEGMENT\nNext → : ∠MBC = ∠MAC = α/2.',
               'BISECTOR\nBI halves the angle at B: β/2 each.',
               'AT B\n∠MBI = α/2 + β/2.',
               'AT I\nThe exterior angle of ABI at I is α/2 + β/2 too.',
               'ISOSCELES\nEqual angles in MBI: MI = MB = MC.'],
    demo_drag_say='DRAG C\nMove C: I and M move, the three distances stay equal.',
    drag_desc='A, B and C slide round the circle (A on the larger arc); the hollow points I and M follow',
    readout_desc='the line under the figure: MB, MC and MI, live while you drag',
    p3top='96px', p3left='calc(25% + 60px)',
    frame2=[('The incentre I', 'where the bisectors from A and B meet, on the line AM', '163px', 'calc(25% + 42px)'),
            ('The isosceles triangle MBI', 'shaded, with equal angles θ at B and I', '282px', 'calc(25% - 45px)'),
            ('The three equal lengths', 'MB, MI and MC, one tick each', '248px', 'calc(25% + 75px)'),
            ('Justification tags', 'Given, Same segment, Angle bisector, Adding, Exterior angle theorem, Isosceles converse', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the triangle is shaped by dragging its vertices round the circle and I and M follow.',
    input_rows=[['$A$, $B$, $C$', 'solid dot', 'slide round the circle ($A$ on the larger arc); the incentre and $M$ follow'],
                ['$I$, $M$', 'hollow dot', 'cannot be dragged: the incentre, and the second point of $AI$ on the circle'],
                ['$A$ on the smaller arc, a side, $AI$ or $BI$ too short, an angle of the triangle too small, or a point out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $I$, $M$',
    measures_desc="write each marked angle's size in degrees beside its arc: the halves at A and B, α/2 at B, and θ",
    readout_short='MB, MC and MI', tags='**Given**, **Angles in the same segment**, **Angle bisector**, **Adding**, **Exterior angle theorem**, **Isosceles converse**',
    beh1='The readout is a check, not a step of the proof. The argument is an angle chase, never the numbers, which is why the three distances agree for every triangle you drag.',
    beh2t='I and M are computed', beh2='I is the incentre of the triangle and M is the second point where AI meets the circle; neither is placed by hand, so the equal distances in the readout are a real check.',
)]
