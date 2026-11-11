# Content for page 67, the converse of the isosceles base angles theorem, read by geo-view-42-45.py (argument geo_pages_67)
# Strings in single quotes must not contain an apostrophe.
PAGES = [dict(
    slug='isosceles-converse', prev='angles-in-same-segment', prev_h1='Angles in the Same Segment', prev_key='anglesSameSegment', prev_dragged='draggedSameSegment',
    key='isoscelesConverse', dragged='draggedIsoConverse', dragged_comment='A lowered: smaller base angles, still equal, and the two sides still equal',
    dragged_expr="{ ...PROOFS.isoscelesConverse.model, params: { ...PROOFS.isoscelesConverse.model.params, t: 0.55 } }",
    demo_drag="{ drag: '[data-handle=\"A\"]', dx: 0, dy: 16, ms: 1400 },",
    subCategory='Triangle',
    title='Converse of the Isosceles Triangle Theorem Proof | Equal Angles, Equal Sides Step by Step',
    desc='Watch the proof that a triangle with two equal angles has equal sides opposite them, by the angle bisector from the apex and AAS congruence, step by step. Then drag the apex.',
    h1='Equal Angles Make an Isosceles Triangle', name='Isosceles Converse Proof',
    appdesc='Step-by-step interactive proof of the converse of the isosceles base angles theorem: equal base angles give equal sides, by the angle bisector and AAS congruence, with a draggable apex.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="10,64 70,64 40,12" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><line x1="40" y1="12" x2="40" y2="64" stroke="#FAC775" stroke-width="1.4" stroke-dasharray="3 2"/><path d="M22,64 A12,12 0 0 0 16,54" fill="none" stroke="#FAC775" stroke-width="1.6"/><path d="M58,64 A12,12 0 0 1 64,54" fill="none" stroke="#FAC775" stroke-width="1.6"/><line x1="23" y1="38" x2="27" y2="41" stroke="#E6F1FB" stroke-width="1.4"/><line x1="53" y1="41" x2="57" y2="38" stroke="#E6F1FB" stroke-width="1.4"/><text x="40" y="77" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">β = β → AB = AC</text></svg>',
    keywords=['converse of isosceles triangle theorem', 'equal base angles equal sides', 'isosceles triangle converse proof', 'euclid i.6', 'angle bisector', 'aas congruence', 'isosceles triangle', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'bisect', 'aas', 'equal', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $A$ up or down to change the two equal base angles, or drag $B$ or $C$, and watch the two sides $AB$ and $AC$ in the readout stay equal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""The [isosceles base angles](!/geometry/visual-tools/isosceles-base-angles) theorem says that equal sides give equal angles. This page proves the converse (Euclid I.6): in a triangle $ABC$,

$$\\angle B = \\angle C \\implies AB = AC$$

the sides opposite two equal angles are equal. Together the two theorems say that a triangle is isosceles exactly when two of its angles are equal, which is how isosceles triangles are usually recognised in practice: by their angles.

In the player $B$ and $C$ are free and $A$ slides along the perpendicular to $BC$ at its midpoint, which keeps the base angles equal; the readout shows both base angles and both sides."""),
        ('The Bisector', r"""Draw the bisector of the angle at $A$; it meets $BC$ at a point $D$. It cuts the angle at $A$ into two equal halves:

$$\\angle BAD = \\angle CAD = \\varphi$$

Now $AD$ splits the triangle into the two triangles $ABD$ and $ACD$."""),
        ('Angle, Angle, Side', r"""Compare the triangles $ABD$ and $ACD$:

$$\\angle ABD = \\angle ACD = \\beta, \\qquad \\angle BAD = \\angle CAD = \\varphi, \\qquad AD = AD$$

Two pairs of equal angles and a pair of equal sides. The common side $AD$ is not the side between the two angles (it lies opposite the angle at $B$ in one triangle and at $C$ in the other), so this is the angle-angle-side pattern, and by [AAS](!/geometry/visual-tools/aas-congruence) the triangles are congruent."""),
        ('Equal Sides', r"""Corresponding parts of congruent triangles are equal. The side $AB$ of the first triangle and the side $AC$ of the second both lie opposite the angle at $D$, so they correspond:

$$AB = AC$$"""),
        ('Why It Holds', r"""A triangle with two equal angles has equal sides opposite them:

$$\\angle B = \\angle C \\implies AB = AC$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, a construction, AAS, corresponding parts and combining.

The same congruence gives more: $BD = DC$ and the angles at $D$ are equal and add up to $180°$, so they are right angles. The bisector from the apex is also the median and the altitude, and it lies on the [perpendicular bisector](!/geometry/visual-tools/perpendicular-bisector) of the base. Euclid proved I.6 differently, by contradiction: if $AB$ were longer, cut off a piece equal to $AC$ and get a triangle equal to the whole, which is impossible."""),
        ('Dragging the Figure', r"""Drag $A$ up or down: the two base angles change together and stay equal, the bisector stays on the axis of the triangle, and the readout shows $AB$ and $AC$ equal at every height. Drag $B$ or $C$ to change the base; $A$ keeps its place along the perpendicular at the new midpoint.

The player keeps the base angles between $20°$ and $80°$ so the marks stay readable, and keeps the triangle in the frame; a drag outside that range is refused."""),
        ('Consequences', r"""• **Recognising isosceles triangles.** In many proofs an isosceles triangle appears through its angles: two equal angles are enough to conclude two equal sides.
• **Equiangular means equilateral.** Applying the theorem twice to a triangle with three equal angles gives three equal sides, the converse half of the [equilateral triangle](!/geometry/visual-tools/equilateral-triangle) page.
• **Larger angle, larger side.** The unequal version is the [larger side, larger angle](!/geometry/visual-tools/larger-side-larger-angle) theorem and its converse: the larger of two angles faces the larger side.
• **Tangents and chords.** Two tangents from a point make equal angles with the chord of contact, so the tangent lengths are equal, as on the [two tangents](!/geometry/visual-tools/two-tangents) page.
• **Angles in a circle.** A triangle inscribed in a circle with two equal angles has two equal sides; equal [inscribed angles](!/geometry/visual-tools/inscribed-angle) stand on equal chords."""),
    ],
    order=[('the-statement', 'given'), ('the-bisector', 'bisect'), ('angle-angle-side', 'aas'), ('equal-sides', 'equal'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('What is the converse of the isosceles triangle theorem?', 'If two angles of a triangle are equal, the sides opposite them are equal, so the triangle is isosceles.'),
        ('How is the converse proved?', 'Draw the bisector of the third angle. It cuts the triangle into two triangles with two pairs of equal angles and a common side not between them, so they are congruent by AAS, and the two sides opposite the equal angles are equal.'),
        ('Is a triangle with two equal angles always isosceles?', 'Yes. Equal base angles force equal sides opposite them; the theorem and its converse together say that a triangle is isosceles exactly when two of its angles are equal.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The triangle ABC with equal angles β at B and C.'),
            ('bisect', 'The bisector, frozen', 'AD bisects the angle at A: two halves φ.'),
            ('aas', 'Angle, angle, side, frozen', 'ABD and ACD shaded: β, φ and the common side AD.'),
            ('equal', 'Equal sides, frozen', 'AB = AC, one tick each.'),
            ('conclude', 'The conclusion, frozen', 'Equal base angles make an isosceles triangle.')],
    dragged_cap='After dragging A, frozen', dragged_txt='A lowered: smaller base angles, still equal, and the two sides still equal.',
    notes=[('given', 'Drag A: the base angles stay equal.', 'the-statement', 'Learn more about the statement'),
           ('bisect', 'The bisector halves the angle at A.', 'the-bisector', 'Learn more about the bisector'),
           ('aas', 'Two angles and a side not between them.', 'angle-angle-side', 'Learn more about AAS'),
           ('equal', 'The sides opposite the angle at D.', 'equal-sides', 'Learn more about the equal sides'),
           ('conclude', 'Drag A: the readout keeps AB = AC.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $A$ up or down to change the base angles, or $B$ or $C$; the readout under the canvas shows both base angles and both sides. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['BISECTOR\nNext → : AD bisects the angle at A into two halves φ.',
               'AAS\nβ, φ and the common side AD: ABD and ACD are congruent.',
               'EQUAL\nSo AB = AC.',
               'CONCLUDE\nEqual base angles make an isosceles triangle.'],
    demo_drag_say='DRAG A\nLower the apex: the angles stay equal, so do the sides.',
    drag_desc='A slides up and down the axis of the triangle, B and C move the base; the hollow point D follows',
    readout_desc='the line under the figure: both base angles and both sides, live while you drag',
    p3top='120px', p3left='calc(25% + 40px)',
    frame2=[('The bisector AD', 'from the apex to the base, with two halves φ at A', '160px', 'calc(25% + 10px)'),
            ('The two triangles', 'ABD and ACD, shaded either side of AD', '236px', 'calc(25% - 100px)'),
            ('The equal sides', 'AB and AC, one tick each', '150px', 'calc(25% + 80px)'),
            ('Justification tags', 'Given, Construction, AAS, Corresponding parts, Combining', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the triangle is shaped by dragging and keeps its two equal base angles.',
    input_rows=[['$A$', 'solid dot', 'slides along the perpendicular to $BC$ at its midpoint; the two base angles change together'],
                ['$B$, $C$', 'solid dot', 'move the base; $A$ keeps its place along the new perpendicular'],
                ['$D$', 'hollow dot', 'cannot be dragged: where the bisector of the angle at $A$ meets $BC$'],
                ['a base angle under $20°$ or over $80°$, or a point out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $D$',
    measures_desc="write each marked angle's size in degrees beside its arc: β twice and φ twice",
    readout_short='both base angles and both sides', tags='**Given**, **Construction**, **AAS**, **Corresponding parts**, **Combining**',
    beh1='The readout is a check, not a step of the proof. The argument uses the bisector and AAS, never the numbers, which is why the two sides agree for every triangle you drag.',
    beh2t='The equal angles are built in', beh2='A is kept on the perpendicular to BC at its midpoint, which makes the base angles equal whatever you drag; that is the hypothesis, built into the figure.',
)]
