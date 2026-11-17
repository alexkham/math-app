# Content for page 68, the bisector meets the circumcircle at the arc midpoint, read by geo-view-42-45.py (argument geo_pages_68)
# Strings in single quotes must not contain an apostrophe.
PAGES = [dict(
    slug='bisector-arc-midpoint', prev='isosceles-converse', prev_h1='Equal Angles Make an Isosceles Triangle', prev_key='isoscelesConverse', prev_dragged='draggedIsoConverse',
    key='arcMidpoint', dragged='draggedArcMidpoint', dragged_comment='C slid round the circle: a new arc BC and a new midpoint M, still MB = MC',
    dragged_expr="{ ...PROOFS.arcMidpoint.model, params: { ...PROOFS.arcMidpoint.model.params, tc: 0.9 } }",
    demo_drag="{ drag: '[data-handle=\"C\"]', dx: -12, dy: 10, ms: 1400 },",
    subCategory='Circle',
    title='Angle Bisector Meets the Circumcircle at the Arc Midpoint | Proof Step by Step',
    desc='Watch the proof that the bisector of an angle of an inscribed triangle meets the circumcircle at the midpoint of the opposite arc, by inscribed and central angles and SAS, step by step. Then drag the triangle round the circle.',
    h1='Angle Bisector and the Arc Midpoint', name='Bisector Arc Midpoint Proof',
    appdesc='Step-by-step interactive proof that the angle bisector from a vertex of an inscribed triangle meets the circumcircle at the midpoint of the opposite arc, with draggable vertices on the circle.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="38" r="30" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><polygon points="36,8 14,52 66,52" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><line x1="36" y1="8" x2="40" y2="68" stroke="#FAC775" stroke-width="1.6"/><circle cx="40" cy="68" r="2.4" fill="#FAC775"/><line x1="40" y1="68" x2="14" y2="52" stroke="#E6F1FB" stroke-width="1"/><line x1="40" y1="68" x2="66" y2="52" stroke="#E6F1FB" stroke-width="1"/><text x="40" y="79" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">MB = MC</text></svg>',
    keywords=['angle bisector circumcircle', 'angle bisector meets circumcircle at arc midpoint', 'midpoint of arc', 'inscribed triangle angle bisector', 'incenter excenter lemma', 'inscribed angle theorem', 'circle theorems', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'halves', 'central', 'sas', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $B$ or $C$ round the circle and watch $MB$ and $MC$ in the readout stay equal. Drag $A$ along its arc too: the point $M$ does not move at all. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""Let $ABC$ be a triangle inscribed in a circle with centre $O$. Extend the bisector of the angle at $A$ until it meets the circle again at a point $M$; it lands on the arc $BC$ that does not contain $A$. The theorem says

$$MB = MC$$

so $M$ is the midpoint of that arc. A surprising part of it: $M$ depends only on $B$ and $C$. Wherever $A$ sits on the other arc, its angle bisector passes through the same point $M$.

The proof uses the [inscribed angle theorem](!/geometry/visual-tools/inscribed-angle) and SAS. In the player the three vertices slide round the circle and $M$ is found as the second point where the bisector from $A$ meets it, so nothing about $M$ is assumed; the readout shows $MB$, $MC$ and the two halves of the angle at $A$."""),
        ('The Two Halves', r"""The line $AM$ bisects the angle at $A$, so

$$\\angle BAM = \\angle MAC = \\varphi$$

Each half is an inscribed angle: $\\angle BAM$ stands on the arc $BM$ and $\\angle MAC$ on the arc $MC$, the two arcs into which $M$ divides the arc $BC$."""),
        ('The Central Angles', r"""Join the centre $O$ to $B$, $M$ and $C$. By the [inscribed angle theorem](!/geometry/visual-tools/inscribed-angle) the central angle on an arc is twice the inscribed angle on the same arc:

$$\\angle BOM = 2\\varphi = \\angle MOC$$

So the arcs $BM$ and $MC$ subtend equal angles at the centre."""),
        ('Side, Angle, Side', r"""The triangles $BOM$ and $MOC$ have $OB = OM$ and $OM = OC$, all radii, and the equal angles $2\\varphi$ at $O$ between those sides. By SAS they are congruent."""),
        ('Why It Holds', r"""The third sides of the congruent triangles are equal:

$$MB = MC$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, the angle bisector, the inscribed angle theorem, SAS and corresponding parts.

Equal chords $MB$ and $MC$ cut off equal arcs, so $M$ is the midpoint of the arc $BC$, and being equally far from $B$ and $C$ it lies on the [perpendicular bisector](!/geometry/visual-tools/perpendicular-bisector) of $BC$, which also passes through $O$. Since the arc $BC$ depends only on $B$ and $C$, so does $M$: every position of $A$ on the other arc gives a bisector through the same point."""),
        ('Dragging the Figure', r"""Drag $B$ or $C$ round the circle: the arc $BC$ changes, its midpoint $M$ moves, and the readout keeps $MB = MC$ with the two halves at $A$ equal. Drag $A$ along its arc: the bisector swings about $M$ but always passes through it, and $MB$, $MC$ do not change.

The player keeps $A$ on the larger arc, on the same side of $BC$ as the centre, keeps the sides long enough for the marks and the figure in the frame; a drag that would break one of these is refused."""),
        ('Consequences', r"""• **The incentre and the excentre.** The point $M$ is also equally far from the [incentre](!/geometry/visual-tools/incentre) $I$, which lies on $AM$: $MB = MC = MI$. The circle about $M$ through $B$ and $C$ passes through $I$ and the excentre opposite $A$ (the incentre-excentre lemma).
• **The perpendicular bisector meets the bisector on the circle.** The bisector of the angle at $A$ and the perpendicular bisector of $BC$ are different lines that meet on the circumcircle, at $M$; this is a quick way to find the incentre with ruler and compass on a drawn circumcircle.
• **Constructing the arc midpoint.** The midpoint of an arc $BC$ can be found without measuring: draw any inscribed angle on the other arc and its bisector.
• **Equal chords, equal arcs.** The proof shows that equal inscribed angles stand on equal chords, as on the [equal chords](!/geometry/visual-tools/equal-chords) page.
• **The angle bisector theorem.** The foot $D$ of the bisector on $BC$ divides it in the ratio $AB : AC$ ([angle bisector theorem](!/geometry/visual-tools/angle-bisector)); $M$ is where the same line meets the circle."""),
    ],
    order=[('the-statement', 'given'), ('the-two-halves', 'halves'), ('the-central-angles', 'central'), ('side-angle-side', 'sas'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('Where does the angle bisector of a triangle meet the circumcircle?', 'At the midpoint of the arc opposite the vertex, the arc between the other two vertices that does not contain the first. That point is equally far from those two vertices.'),
        ('How is the arc midpoint theorem proved?', 'The two halves of the bisected angle are inscribed angles on the arcs into which the bisector divides the opposite arc. The central angles on those arcs are twice the halves, so they are equal, and SAS on the radii makes the two chords from the midpoint equal.'),
        ('Does the arc midpoint depend on the third vertex?', 'No. It is the midpoint of the arc between the other two vertices, so every position of the third vertex on the other arc gives an angle bisector through the same point.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The inscribed triangle and the bisector from A meeting the circle again at M.'),
            ('halves', 'The two halves, frozen', 'φ and φ at A: inscribed angles on the arcs BM and MC.'),
            ('central', 'The central angles, frozen', 'OB, OM, OC drawn: 2φ and 2φ at O.'),
            ('sas', 'Side, angle, side, frozen', 'BOM and MOC shaded: two radii and equal angles, congruent by SAS.'),
            ('conclude', 'The conclusion, frozen', 'MB = MC: M is the midpoint of the arc BC.')],
    dragged_cap='After dragging C, frozen', dragged_txt='C slid round the circle: a new arc BC and a new midpoint M, still MB = MC.',
    notes=[('given', 'Drag A: M does not move.', 'the-statement', 'Learn more about the statement'),
           ('halves', 'Two inscribed angles on two arcs.', 'the-two-halves', 'Learn more about the halves'),
           ('central', 'Twice the inscribed angle at the centre.', 'the-central-angles', 'Learn more about the central angles'),
           ('sas', 'Two radii and the angle between them.', 'side-angle-side', 'Learn more about SAS'),
           ('conclude', 'Drag B or C: the readout keeps MB = MC.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $B$ or $C$ round the circle, or $A$ along its arc; the readout under the canvas shows $MB$, $MC$ and the two halves of the angle at $A$. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['HALVES\nNext → : the bisector cuts the angle at A into two halves φ.',
               'CENTRE\nThe central angles on the arcs BM and MC are both 2φ.',
               'SAS\nTwo radii and equal angles: BOM and MOC are congruent.',
               'CONCLUDE\nMB = MC: M is the midpoint of the arc BC.'],
    demo_drag_say='DRAG C\nMove C: the arc changes, M stays its midpoint.',
    drag_desc='A, B and C slide round the circle (A on the larger arc); the hollow point M follows on the bisector from A',
    readout_desc='the line under the figure: MB, MC and the two halves at A, live while you drag',
    p3top='96px', p3left='calc(25% + 60px)',
    frame2=[('The bisector AM', 'from A to the second point M where it meets the circle', '150px', 'calc(25% - 10px)'),
            ('The central angles', '2φ and 2φ at O, on the arcs BM and MC', '210px', 'calc(25% + 60px)'),
            ('The equal chords', 'MB and MC, two ticks each', '290px', 'calc(25% - 110px)'),
            ('Justification tags', 'Given, Angle bisector, Inscribed angle theorem, SAS, Corresponding parts', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the triangle is shaped by dragging its vertices round the circle and M follows.',
    input_rows=[['$B$, $C$', 'solid dot', 'slide round the circle; the arc $BC$ and its midpoint $M$ move'],
                ['$A$', 'solid dot', 'slides along the larger arc; its bisector swings about $M$, which stays put'],
                ['$M$', 'hollow dot', 'cannot be dragged: where the bisector from $A$ meets the circle again'],
                ['$A$ on the smaller arc, a side too short, or a point out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $M$, $O$',
    measures_desc="write each marked angle's size in degrees beside its arc: φ twice and 2φ twice",
    readout_short='MB, MC and the two halves at A', tags='**Given**, **Angle bisector**, **Inscribed angle theorem**, **SAS**, **Corresponding parts**',
    beh1='The readout is a check, not a step of the proof. The argument uses the inscribed angle theorem and SAS, never the numbers, which is why MB = MC for every triangle you drag.',
    beh2t='M is found, not placed', beh2='M is computed as the second point where the line from A through the foot of the bisector meets the circle; the player never places it at the arc midpoint, so the equality in the readout is a real check.',
)]
