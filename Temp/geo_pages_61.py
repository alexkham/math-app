# Content for page 61, the angle bisector locus, read by geo-view-42-45.py (argument geo_pages_61)
PAGES = [dict(
    slug='angle-bisector-locus', prev='perpendicular-bisector', prev_h1='Perpendicular Bisector Theorem', prev_key='perpendicularBisector', prev_dragged='draggedPerpBisector',
    key='angleBisectorLocus', dragged='draggedBisectorLocus', dragged_comment='P moved out along the bisector: both distances longer, still equal',
    dragged_expr="{ ...PROOFS.angleBisectorLocus.model, params: { ...PROOFS.angleBisectorLocus.model.params, t: 0.82 } }",
    demo_drag="{ drag: '[data-handle=\"P\"]', dx: 14, dy: -2, ms: 1400 },",
    subCategory='Lines and Angles',
    title='Angle Bisector Locus Proof | Equidistant from the Two Arms Step by Step',
    desc='Watch the proof that a point lies on the bisector of an angle exactly when it is equally far from the two arms, by AAS one way and HL the other, step by step. Then drag the point along the bisector.',
    h1='Angle Bisector: Equidistant from the Arms', name='Angle Bisector Locus Proof',
    appdesc='Step-by-step interactive proof that the bisector of an angle is the locus of points equidistant from its arms, by AAS and HL congruence of right triangles, with a draggable point and angle.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="8" y1="44" x2="76" y2="64" stroke="#E6F1FB" stroke-width="1.6"/><line x1="8" y1="44" x2="72" y2="12" stroke="#E6F1FB" stroke-width="1.6"/><line x1="8" y1="44" x2="76" y2="38" stroke="#FAC775" stroke-width="1.4" stroke-dasharray="3 2"/><circle cx="52" cy="40" r="2.4" fill="#FAC775"/><line x1="52" y1="40" x2="48" y2="54" stroke="#E6F1FB" stroke-width="1"/><line x1="52" y1="40" x2="46" y2="27" stroke="#E6F1FB" stroke-width="1"/><text x="40" y="78" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">PD = PE</text></svg>',
    keywords=['angle bisector locus', 'angle bisector equidistant from sides', 'points on angle bisector', 'converse angle bisector theorem', 'distance from a point to a line', 'aas congruence', 'hl congruence', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'feet', 'aas', 'equal', 'converse', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $P$ along the dashed bisector, or drag $O$, $A$ or $B$ to change the angle, and watch the two distances in the readout stay equal while the two half angles stay equal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""The bisector of an angle is the ray from its vertex that cuts it into two equal angles. The theorem describes it by distances: for a point $P$ inside the angle $AOB$, with $D$ and $E$ the feet of the perpendiculars from $P$ to the arms $OA$ and $OB$,

$$P \\text{ is on the bisector} \\iff PD = PE$$

So the bisector is the locus of points inside the angle that are equally far from its arms. It is the angle version of the [perpendicular bisector](!/geometry/visual-tools/perpendicular-bisector) theorem, with "equally far from two points" replaced by "equally far from two lines". It is a different statement from the [angle bisector theorem](!/geometry/visual-tools/angle-bisector), which is about the ratio in which the bisector of a triangle's angle cuts the opposite side, though that page uses this one.

In the player $O$, $A$ and $B$ are free and $P$ slides along the bisector; the readout shows $PD$, $PE$ and the two angles at $O$."""),
        ('The Perpendiculars', r"""The distance from a point to a line is the length of the perpendicular from it ([the perpendicular is shortest](!/geometry/visual-tools/perpendicular-shortest)). Drop $PD \\perp OA$ and $PE \\perp OB$. The claim is now about two segments:

$$PD = PE$$"""),
        ('Angle, Angle, Side', r"""Compare the right triangles $OPD$ and $OPE$. They have

$$\\angle POD = \\angle POE, \\qquad \\angle ODP = \\angle OEP = 90°, \\qquad OP = OP$$

two angles and a side that is not between them, the common hypotenuse $OP$. By [AAS](!/geometry/visual-tools/aas-congruence) they are congruent."""),
        ('Equal Distances', r"""Corresponding parts of congruent triangles are equal, so the legs opposite the equal angles at $O$ agree:

$$PD = PE$$

Every point of the bisector is equally far from the two arms."""),
        ('The Converse', r"""Now start from a point $P$ inside the angle with $PD = PE$, without knowing where it lies. The triangles $OPD$ and $OPE$ are right-angled at $D$ and $E$, share the hypotenuse $OP$, and have equal legs $PD = PE$. By the [hypotenuse-leg criterion](!/geometry/visual-tools/hl-congruence) they are congruent, so

$$\\angle POD = \\angle POE$$"""),
        ('Why It Holds', r"""$OP$ makes equal angles with the two arms, which is what it means to bisect the angle; so $P$ lies on the bisector. With the forward direction,

$$P \\text{ on the bisector} \\iff PD = PE$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, a construction, AAS, corresponding parts, HL and the definition of the bisector.

Both directions compare the same two right triangles with the common hypotenuse $OP$: AAS when the equal angles are known, HL when the equal distances are known."""),
        ('Dragging the Figure', r"""Drag $P$ along the dashed bisector: the perpendiculars and their feet move, and the readout shows $PD$ and $PE$ equal at every position. Drag $O$, $A$ or $B$ to change the angle; the bisector turns with the arms, and $P$ keeps its place along it.

The player keeps the angle between $30°$ and $120°$, the feet $D$ and $E$ on the drawn arms, and everything in the frame; a drag that would break one of these is refused."""),
        ('Consequences', r"""• **The incentre.** The bisectors of two angles of a triangle meet at a point equally far from all three sides, so it lies on the third bisector too: the [incentre](!/geometry/visual-tools/incentre), the centre of the inscribed circle.
• **Excentres.** The same argument with the external bisectors gives three more points equally far from the three side lines, the centres of the excircles; internal and external bisectors are perpendicular ([bisectors of a linear pair](!/geometry/visual-tools/linear-pair-bisectors)).
• **Tangents from a point.** A circle touching both arms of an angle has its centre equally far from them, so on the bisector; this is why the centre of a circle lies on the bisector of the angle between [two tangents](!/geometry/visual-tools/two-tangents).
• **Two crossing lines.** The points equally far from two crossing lines fill the two bisectors of the four angles they make, a pair of perpendicular lines.
• **The angle bisector theorem.** On the [angle bisector theorem](!/geometry/visual-tools/angle-bisector) page the equal distances from the foot of the bisector to the two sides make the two areas proportional to the sides."""),
    ],
    order=[('the-statement', 'given'), ('the-perpendiculars', 'feet'), ('angle-angle-side', 'aas'), ('equal-distances', 'equal'), ('the-converse', 'converse'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('Is every point on an angle bisector equidistant from the sides of the angle?', 'Yes. The perpendiculars from the point to the two sides form two right triangles with equal angles at the vertex and a common hypotenuse, so they are congruent by AAS and the two perpendiculars are equal.'),
        ('What is the converse of the angle bisector locus theorem?', 'If a point inside an angle is the same distance from both sides, it lies on the bisector: the two right triangles share their hypotenuse and have equal legs, so they are congruent by HL and the angles at the vertex are equal.'),
        ('How is this different from the angle bisector theorem?', 'The angle bisector theorem says the bisector of an angle of a triangle divides the opposite side in the ratio of the adjacent sides. This page is about distances to the arms of the angle; the angle bisector theorem uses it as one step.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The angle AOB, its dashed bisector with two equal angles φ, and P on it.'),
            ('feet', 'The perpendiculars, frozen', 'PD ⟂ OA and PE ⟂ OB, square marks at D and E.'),
            ('aas', 'Angle, angle, side, frozen', 'OPD and OPE shaded: φ, a right angle and the common side OP.'),
            ('equal', 'Equal distances, frozen', 'PD = PE, one tick each.'),
            ('converse', 'The converse, frozen', 'From PD = PE: HL on the two right triangles.'),
            ('conclude', 'The conclusion, frozen', 'Equal angles at O: P lies on the bisector.')],
    dragged_cap='After dragging P, frozen', dragged_txt='P moved out along the bisector: both distances longer, still equal.',
    notes=[('given', 'Drag P along the dashed bisector.', 'the-statement', 'Learn more about the statement'),
           ('feet', 'The distance to a line is the perpendicular.', 'the-perpendiculars', 'Learn more about the perpendiculars'),
           ('aas', 'Two angles and the common hypotenuse.', 'angle-angle-side', 'Learn more about AAS'),
           ('equal', 'The legs opposite the equal angles.', 'equal-distances', 'Learn more about the equal distances'),
           ('converse', 'Common hypotenuse, equal legs: HL.', 'the-converse', 'Learn more about the converse'),
           ('conclude', 'Drag P: the readout keeps PD = PE.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $P$ along the bisector, or $O$, $A$ or $B$ to change the angle; the readout under the canvas shows $PD$, $PE$ and the two angles at $O$. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['PERPENDICULARS\nNext → : PD ⟂ OA and PE ⟂ OB, the distances to the arms.',
               'AAS\nEqual angles at O, right angles, OP common: congruent.',
               'EQUAL\nSo PD = PE.',
               'CONVERSE\nFrom PD = PE alone, HL makes the angles at O equal.',
               'CONCLUDE\nP is on the bisector exactly when PD = PE.'],
    demo_drag_say='DRAG P\nSlide P along the bisector: PD and PE stay equal.',
    drag_desc='P slides along the dashed bisector, O, A and B change the angle; the hollow feet D and E follow',
    readout_desc='the line under the figure: PD, PE and the two angles at O, live while you drag',
    p3top='120px', p3left='calc(25% + 60px)',
    frame2=[('The bisector', 'the dashed ray from O, with two equal angles φ', '170px', 'calc(25% + 110px)'),
            ('The two right triangles', 'OPD and OPE, shaded either side of OP', '236px', 'calc(25% - 60px)'),
            ('The perpendiculars', 'PD and PE, one tick each: equal at the end', '96px', 'calc(25% - 20px)'),
            ('Justification tags', 'Given, Construction, AAS, Corresponding parts, HL congruence, Definition', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the angle and the point on its bisector are placed by dragging.',
    input_rows=[['$P$', 'solid dot', 'slides along the bisector of the angle'],
                ['$O$, $A$, $B$', 'solid dot', 'move the vertex and the arms; the bisector turns with them'],
                ['$D$, $E$', 'hollow dot', 'cannot be dragged: the feet of the perpendiculars from $P$'],
                ['an angle under $30°$ or over $120°$, a foot off its arm, or a point out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $O$, $A$, $B$, $P$, $D$, $E$',
    measures_desc="write each marked angle's size in degrees beside its arc: the two halves φ",
    readout_short='$PD$, $PE$ and the two angles at $O$', tags='**Given**, **Construction**, **AAS**, **Corresponding parts**, **HL congruence**, **Definition**',
    beh1='The readout is a check, not a step of the proof. The argument uses AAS and HL, never the numbers, which is why the distances agree wherever you drag P.',
    beh2t='P stays on the bisector', beh2='P is kept on the bisector, the hypothesis of the forward direction; the converse is argued from PD = PE alone, so it holds for every point inside the angle, not just the ones the player can reach.',
)]
