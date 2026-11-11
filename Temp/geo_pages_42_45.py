# Content for pages 42-45 (the similarity group), read by geo-view-42-45.py
PAGES = []

# ---------------------------------------------------------------- 42
PAGES.append(dict(
    slug='intercept-theorem', prev='menelaus-theorem', prev_h1="Menelaus' Theorem", prev_key='menelaus', prev_dragged='draggedMenelaus',
    key='interceptTheorem', dragged='draggedIntercept', dragged_comment='D further down AB: the two ratios grow together',
    title='Intercept Theorem Proof | A Parallel Cuts Two Sides in the Same Ratio',
    desc='Watch the proof of the intercept theorem (basic proportionality theorem): a line parallel to one side of a triangle cuts the other two sides in the same ratio, by comparing areas, step by step. Then drag the parallel and the vertices.',
    h1='Intercept Theorem', name='Intercept Theorem Proof',
    appdesc='Step-by-step interactive proof of the intercept theorem (basic proportionality theorem) by comparing areas of triangles between parallels, with a draggable parallel and vertices.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="10,68 70,68 42,10" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><line x1="25" y1="45" x2="56" y2="45" stroke="#FAC775" stroke-width="1.8"/><circle cx="25" cy="45" r="2.4" fill="#E6F1FB"/><circle cx="56" cy="45" r="2.4" fill="#E6F1FB"/><text x="40" y="79" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">AD/DB = AE/EC</text></svg>',
    keywords=['intercept theorem', 'basic proportionality theorem', 'thales theorem proportional', 'side splitter theorem', 'parallel line in a triangle', 'proportional segments', 'ratio of areas', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'equal', 'left', 'right', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $D$ along the side $AB$ to move the parallel, or drag a vertex, and watch the two ratios in the readout stay equal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""The intercept theorem, also called the basic proportionality theorem or Thales' theorem in some countries, says: if a line parallel to one side of a triangle meets the other two sides, it cuts them in the same ratio. In triangle $ABC$, with $D$ on $AB$, $E$ on $AC$ and $DE \\parallel BC$,

$$\\frac{AD}{DB} = \\frac{AE}{EC}$$

Equivalently $AD/AB = AE/AC$: the small triangle $ADE$ has its two sides from $A$ in the same ratio to the sides of $ABC$. The theorem is the gateway to similar triangles; the [AA similarity](!/geometry/visual-tools/aa-similarity) page is built on it.

The proof here is by areas, in the same style as [Ceva](!/geometry/visual-tools/ceva-theorem) and [Menelaus](!/geometry/visual-tools/menelaus-theorem): nothing but the formula half base times height. In the player $D$ slides along $AB$ and $E$ is placed on $AC$ so that $DE$ stays parallel to $BC$; the readout shows the two ratios and $DE/BC$."""),
        ('Equal Areas Between Parallels', r"""Join $B$ to $E$ and $C$ to $D$. The triangles $BDE$ and $CDE$ stand on the same base $DE$, and their third vertices $B$ and $C$ lie on the line $BC$, which is parallel to $DE$. Two parallel lines stay the same distance apart, so the heights of the two triangles from $B$ and from $C$ down to the line $DE$ are equal:

$$[BDE] = [CDE]$$

This is the one place where the parallel is used. Everything after it is the same-height argument from the [angle bisector theorem](!/geometry/visual-tools/angle-bisector) page."""),
        ('Cutting the Side AB', r"""The triangles $ADE$ and $BDE$ have their bases $AD$ and $DB$ on the line $AB$ and the same apex $E$, so they have the same height, and their areas are in the ratio of their bases:

$$\\frac{[ADE]}{[BDE]} = \\frac{AD}{DB}$$"""),
        ('Cutting the Side AC', r"""The same on the other side. The triangles $ADE$ and $CDE$ have their bases $AE$ and $EC$ on the line $AC$ and the same apex $D$:

$$\\frac{[ADE]}{[CDE]} = \\frac{AE}{EC}$$"""),
        ('Why It Holds', r"""The two fractions have the same numerator $[ADE]$, and their denominators $[BDE]$ and $[CDE]$ are equal by the parallel. So

$$\\frac{AD}{DB} = \\frac{[ADE]}{[BDE]} = \\frac{[ADE]}{[CDE]} = \\frac{AE}{EC}$$

Flip both sides and add 1 to get the other common form: $(DB + AD)/AD = (EC + AE)/AE$, that is $AB/AD = AC/AE$. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, equal areas between parallels, same-height triangles twice, and equal denominators.

The converse is also true: if $AD/DB = AE/EC$ then $DE \\parallel BC$. It has the same proof read backwards, and the [SAS similarity](!/geometry/visual-tools/sas-similarity) page carries it out."""),
        ('Dragging the Figure', r"""Drag $D$ along $AB$: the parallel $DE$ moves up and down the triangle, $E$ slides along $AC$ to keep it parallel, and the two ratios in the readout stay equal while they change together. The third number, $DE/BC$, equals $AD/AB$; that is the next theorem, on the AA similarity page. Drag $A$, $B$ or $C$ to reshape the triangle; $D$ keeps its fraction of $AB$.

The player keeps $D$ between $A$ and $B$. The theorem also holds when the parallel meets the extensions of the sides beyond $A$ or beyond $B$ and $C$, with the same proof, but the player keeps to the case where the parallel crosses the triangle. A drag that would carry a vertex out of the frame or flatten the triangle is refused."""),
        ('Consequences', r"""• **Similar triangles.** The theorem is the first step of the [AA similarity](!/geometry/visual-tools/aa-similarity) criterion: cut off a copy of the smaller triangle at the vertex $A$, and the intercept theorem gives the proportions.
• **The midsegment theorem again.** When $D$ is the midpoint of $AB$, the equal ratios force $E$ to be the midpoint of $AC$; that is the converse direction of the [midsegment theorem](!/geometry/visual-tools/midsegment).
• **Dividing a segment.** To cut a segment into $n$ equal parts with a ruler and compass, draw any ray from one end, mark $n$ equal steps on it, join the last mark to the other end and draw parallels through the other marks; the intercept theorem makes the pieces equal.
• **The converse.** If a line through $D$ and $E$ cuts $AB$ and $AC$ in the same ratio, it is parallel to $BC$; the [SAS similarity](!/geometry/visual-tools/sas-similarity) page proves this by the same areas.
• **Ceva and Menelaus.** [Ceva](!/geometry/visual-tools/ceva-theorem) and [Menelaus](!/geometry/visual-tools/menelaus-theorem) use the same same-height argument on the three sides of a triangle at once."""),
    ],
    order=[('the-statement', 'given'), ('equal-areas-between-parallels', 'equal'), ('cutting-the-side-ab', 'left'), ('cutting-the-side-ac', 'right'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('What does the intercept theorem say?', 'If a line parallel to one side of a triangle meets the other two sides at D and E, it cuts them in the same ratio: AD/DB = AE/EC, or equivalently AD/AB = AE/AC. It is also called the basic proportionality theorem or the side-splitter theorem.'),
        ('How is the intercept theorem proved with areas?', 'Triangles BDE and CDE have the same base DE and equal heights (B and C lie on a parallel to DE), so their areas are equal. Then AD/DB = [ADE]/[BDE] and AE/EC = [ADE]/[CDE] by equal heights; same numerator, equal denominators, so the ratios are equal.'),
        ('Is the converse of the intercept theorem true?', 'Yes. If D on AB and E on AC satisfy AD/DB = AE/EC, then DE is parallel to BC. The same areas prove it: the equal ratios force [BDE] = [CDE], so B and C are at the same distance from the line DE.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'DE parallel to BC, with D on AB and E on AC.'),
            ('equal', 'Equal areas between parallels, frozen', 'BDE and CDE shaded: same base DE, equal heights, equal areas.'),
            ('left', 'Cutting the side AB, frozen', 'ADE and BDE with the apex E: [ADE]/[BDE] = AD/DB.'),
            ('right', 'Cutting the side AC, frozen', 'ADE and CDE with the apex D: [ADE]/[CDE] = AE/EC.'),
            ('conclude', 'The conclusion, frozen', 'Same numerator, equal denominators: AD/DB = AE/EC.')],
    dragged_cap='After dragging D, frozen', dragged_txt='D further down AB: both ratios grow together, and DE/BC with them.',
    notes=[('given', 'Drag D: the parallel moves, E follows.', 'the-statement', 'Learn more about the statement'),
           ('equal', 'Same base, apexes on a parallel: equal areas.', 'equal-areas-between-parallels', 'Learn more about the equal areas'),
           ('left', 'Same height from E, so areas go as the bases.', 'cutting-the-side-ab', 'Learn more about cutting AB'),
           ('right', 'Same height from D, the other side.', 'cutting-the-side-ac', 'Learn more about cutting AC'),
           ('conclude', 'Drag D: the two ratios in the readout stay equal.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $D$ along $AB$, or $A$, $B$ or $C$; the readout under the canvas shows $AD/DB$, $AE/EC$ and $DE/BC$. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['EQUAL AREAS\nNext → : BDE and CDE share the base DE, and B, C lie on a parallel: [BDE] = [CDE].',
               'SIDE AB\nADE and BDE with the apex E: [ADE]/[BDE] = AD/DB.',
               'SIDE AC\nADE and CDE with the apex D: [ADE]/[CDE] = AE/EC.',
               'CONCLUDE\nSame numerator, equal denominators: AD/DB = AE/EC.'],
    demo_drag_say='DRAG D\nMove the parallel: both ratios change, and stay equal.',
    drag_desc='D slides along AB; A, B and C move freely; the hollow point E follows so that DE stays parallel to BC',
    readout_desc='the line under the figure: AD/DB, AE/EC and DE/BC, live while you drag',
    frame2=[('The parallel', 'DE, marked with the same chevron as BC', '150px', 'calc(25% - 10px)'),
            ('The shaded triangles', 'ADE at the top, BDE and CDE below it on the base DE', '236px', 'calc(25% - 110px)'),
            ('The cross lines', 'BE and CD, the sides of the two equal triangles', '236px', 'calc(25% + 60px)'),
            ('Justification tags', 'Given, Parallel lines, Same height (twice), Equal denominators', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the parallel and the triangle are shaped by dragging and E follows.',
    input_rows=[['$D$', 'solid dot', 'slides along the side $AB$; $E$ moves along $AC$ so that $DE$ stays parallel to $BC$'],
                ['$A$, $B$, $C$', 'solid dot', 'reshape the triangle; $D$ keeps its fraction of $AB$'],
                ['$E$', 'hollow dot', 'cannot be dragged: placed on $AC$ by the parallel through $D$'],
                ['a vertex out of the frame, or a flattened triangle', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $D$, $E$',
    measures_desc="write each marked angle's size in degrees beside its arc (this proof marks no angles)",
    readout_short='the two ratios and $DE/BC$', tags='**Given**, **Parallel lines**, **Same height**, **Equal denominators**',
    beh1='The readout is a check, not a step of the proof. The argument uses only that triangles of equal height have areas in the ratio of their bases, never the numbers, which is why the ratios agree for every position of the parallel.',
    beh2t='The parallel is built in', beh2='E is placed on AC at the same fraction as D on AB, which is exactly what makes DE parallel to BC; the chevrons mark the parallel pair.',
))

# ---------------------------------------------------------------- 43
PAGES.append(dict(
    slug='aa-similarity', prev='intercept-theorem', prev_h1='Intercept Theorem', prev_key='interceptTheorem', prev_dragged='draggedIntercept',
    key='aaSimilarity', dragged='draggedAASimilarity', dragged_comment='D further down AB: a larger second triangle, the same three ratios',
    title='AA Similarity Proof | Two Equal Angles Make Similar Triangles Step by Step',
    desc='Watch the proof of the AA similarity criterion: two triangles with two equal angles have their sides in proportion, by a congruent copy and the intercept theorem, step by step. Then drag the copy and the vertices.',
    h1='AA Similarity', name='AA Similarity Proof',
    appdesc='Step-by-step interactive proof of the AA similarity criterion: a congruent copy of the second triangle inside the first, ASA, and the intercept theorem, with a draggable copy and vertices.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="8,68 72,68 44,10" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><polygon points="8,68 42,68 27,38" fill="#FAC775" fill-opacity="0.45" stroke="#FAC775" stroke-width="1.4"/><path d="M18,68 A10,10 0 0 0 15,60" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><path d="M36,68 A6,6 0 0 1 39,63" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><text x="40" y="79" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">AA</text></svg>',
    keywords=['aa similarity', 'aa similarity criterion proof', 'similar triangles', 'two equal angles', 'angle angle similarity', 'proportional sides', 'intercept theorem', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'parallel', 'asa', 'intercept', 'third', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $D$ along the side $AB$ to change the size of the second triangle, or drag a vertex, and watch the three ratios in the readout stay equal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""Two triangles are similar when their angles are equal and their sides are in proportion. The AA criterion says that two equal angles are enough: if triangles $ABC$ and $A'B'C'$ have $\\angle A' = \\angle A$ and $\\angle B' = \\angle B$, then

$$\\frac{A'B'}{AB} = \\frac{B'C'}{BC} = \\frac{C'A'}{CA}$$

The third angles are equal at once, by the [angle sum](!/geometry/visual-tools/triangle-angle-sum); the content of the theorem is the proportion of the sides.

The second triangle is not drawn in the player. Instead its size is recorded by the point $D$ on $AB$ with $AD = A'B'$ (the tick), and the proof builds a congruent copy $ADE$ of $A'B'C'$ inside $ABC$. Drag $D$ to choose any size for $A'B'C'$; the readout shows the three ratios, all equal to $AD/AB$."""),
        ('The Parallel Through D', r"""Through $D$ draw the line parallel to $BC$; it meets $AC$ at $E$. The side $AB$ is a transversal of the two parallels, so the corresponding angles are equal ([parallel lines and a transversal](!/geometry/visual-tools/parallel-lines)):

$$\\angle ADE = \\angle ABC = \\beta$$

The small triangle $ADE$ now has the angle $\\alpha$ at $A$ and the angle $\\beta$ at $D$, the same two angles as $A'B'C'$."""),
        ('The Congruent Copy', r"""Compare $ADE$ with $A'B'C'$: the angle at $A$ equals the angle at $A'$, the side $AD$ equals $A'B'$ by construction, and the angle at $D$ equals the angle at $B'$. Two angles and the side between them: by [ASA](!/geometry/visual-tools/asa-congruence) the triangles are congruent, and so

$$AE = A'C', \\qquad DE = B'C'$$

Everything about $A'B'C'$ is now inside $ABC$, as the triangle $ADE$."""),
        ('The First Two Ratios', r"""$DE \\parallel BC$, so the [intercept theorem](!/geometry/visual-tools/intercept-theorem) gives $AD/DB = AE/EC$. Flip both fractions and add 1 to each side: $(DB + AD)/AD = (EC + AE)/AE$, that is

$$\\frac{AD}{AB} = \\frac{AE}{AC}$$

Two of the three sides of the copy are in the same ratio to the sides of $ABC$."""),
        ('The Third Ratio', r"""The side $DE$ does not lie along a side of $ABC$, so one more construction is needed. Through $E$ draw the parallel to $AB$; it meets $BC$ at $F$. In the quadrilateral $DEFB$ both pairs of opposite sides are parallel, so it is a parallelogram and its [opposite sides are equal](!/geometry/visual-tools/parallelogram-sides): $DE = BF$. Now apply the intercept theorem in the angle at $C$, where $EF \\parallel AB$ cuts $CA$ and $CB$: $CE/CA = CF/CB$, so $AE/AC = BF/BC$, and

$$\\frac{AE}{AC} = \\frac{DE}{BC}$$"""),
        ('Why It Holds', r"""Put the two results together: $AD/AB = AE/AC = DE/BC$. Replace $AD$, $AE$, $DE$ by their equals $A'B'$, $A'C'$, $B'C'$ from the congruent copy:

$$\\frac{A'B'}{AB} = \\frac{A'C'}{AC} = \\frac{B'C'}{BC}$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, corresponding angles on parallel lines, ASA, the intercept theorem twice, and a substitution.

Once AA is in hand, every other similarity criterion is a short step away: the [SAS](!/geometry/visual-tools/sas-similarity) and [SSS](!/geometry/visual-tools/sss-similarity) similarity pages both end by calling AA."""),
        ('Dragging the Figure', r"""Drag $D$ along $AB$: the copy $ADE$ grows or shrinks, the parallels $DE$ and $EF$ move with it, and the three ratios in the readout change together and stay equal. When $D$ is the midpoint of $AB$ the copy is the [midsegment](!/geometry/visual-tools/midsegment) triangle and every ratio is $0.50$. Drag $A$, $B$ or $C$ to reshape the big triangle; $D$ keeps its fraction of $AB$ and the copy keeps its angles.

The player keeps $D$ between $A$ and $B$, that is, the second triangle smaller than the first. If $A'B'C'$ is the larger one, swap the roles of the two triangles; the ratios are then the reciprocals. A drag that would carry a vertex out of the frame or flatten the triangle is refused."""),
        ('Consequences', r"""• **The other criteria.** [SAS similarity](!/geometry/visual-tools/sas-similarity) and [SSS similarity](!/geometry/visual-tools/sss-similarity) reduce to AA once a parallel is found.
• **Right triangles.** Two right triangles with one equal acute angle are similar; the altitude to the hypotenuse cuts a right triangle into two triangles similar to it, which gives the geometric-mean relations and a second proof of the [Pythagorean theorem](!/geometry/visual-tools/pythagorean-theorem).
• **The angle bisector theorem.** The [angle bisector theorem](!/geometry/visual-tools/angle-bisector) is often proved by AA, with a parallel to the bisector through a vertex; this section proves it by areas instead.
• **Circles.** Equal [inscribed angles](!/geometry/visual-tools/inscribed-angle) on the same arc make similar triangles; that is the usual route to the [intersecting chords](!/geometry/visual-tools/intersecting-chords) and [secant](!/geometry/visual-tools/two-secants) theorems, which this section proved by Pythagoras instead, and the route to Ptolemy's theorem.
• **Trigonometry.** The sine, cosine and tangent of an angle are well defined because all right triangles with that angle are similar by AA."""),
    ],
    order=[('the-statement', 'given'), ('the-parallel-through-d', 'parallel'), ('the-congruent-copy', 'asa'), ('the-first-two-ratios', 'intercept'), ('the-third-ratio', 'third'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('What does the AA similarity criterion say?', "If two angles of one triangle equal two angles of another, the triangles are similar: the third angles are equal and the three pairs of corresponding sides are in the same ratio."),
        ('How is AA similarity proved?', "Cut off AD = A'B' on AB and draw DE parallel to BC. Corresponding angles give angle ADE = angle B, so ADE is congruent to A'B'C' by ASA. The intercept theorem gives AD/AB = AE/AC, and a second parallel EF through E, with DEFB a parallelogram, gives AE/AC = DE/BC."),
        ('Why is one equal angle not enough for similarity?', 'Fix an angle and change the lengths of its two arms independently: the triangles you get have the same angle at that vertex but different shapes. With two equal angles the third is fixed by the angle sum, and the shape is determined.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The angles α and β of ABC; AD = A′B′ marked on AB.'),
            ('parallel', 'The parallel through D, frozen', 'DE parallel to BC: the corresponding angle at D is β.'),
            ('asa', 'The congruent copy, frozen', 'ADE shaded: α, AD = A′B′, β, so ADE ≅ A′B′C′ by ASA.'),
            ('intercept', 'The first two ratios, frozen', 'By the intercept theorem AD/AB = AE/AC.'),
            ('third', 'The third ratio, frozen', 'EF parallel to AB; DEFB is a parallelogram, so DE = BF and AE/AC = DE/BC.'),
            ('conclude', 'The conclusion, frozen', 'AD/AB = AE/AC = DE/BC, with AD, AE, DE the sides of A′B′C′.')],
    dragged_cap='After dragging D, frozen', dragged_txt='D further down AB: a larger copy, the three ratios still equal.',
    notes=[('given', 'Drag D: the size of the second triangle.', 'the-statement', 'Learn more about the statement'),
           ('parallel', 'Corresponding angles on the parallels.', 'the-parallel-through-d', 'Learn more about the parallel'),
           ('asa', 'Angle, side, angle: a congruent copy.', 'the-congruent-copy', 'Learn more about the copy'),
           ('intercept', 'The parallel cuts AB and AC in the same ratio.', 'the-first-two-ratios', 'Learn more about the first two ratios'),
           ('third', 'A second parallel brings in DE.', 'the-third-ratio', 'Learn more about the third ratio'),
           ('conclude', 'Drag D: the three ratios in the readout stay equal.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $D$ along $AB$ to resize the second triangle, or $A$, $B$ or $C$; the readout under the canvas shows the three ratios and the angle at $D$. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['PARALLEL\nNext → : DE parallel to BC; the corresponding angle at D is β.',
               'ASA\nα, AD = A′B′, β: the copy ADE is congruent to A′B′C′.',
               'INTERCEPT\nDE ∥ BC gives AD/AB = AE/AC.',
               'THIRD RATIO\nEF ∥ AB: DEFB is a parallelogram, DE = BF, so AE/AC = DE/BC.',
               'SUBSTITUTE\nAD, AE, DE are the sides of A′B′C′: three equal ratios.'],
    demo_drag_say='DRAG D\nResize the copy: the three ratios change together.',
    drag_desc='D slides along AB and sets the size of the second triangle; A, B and C move freely; the hollow points E and F follow',
    readout_desc='the line under the figure: AD/AB, AE/AC, DE/BC and the angle at D, live while you drag',
    frame2=[('The copy ADE', 'the shaded triangle, congruent to A′B′C′ by ASA', '140px', 'calc(25% - 70px)'),
            ('The two parallels', 'DE with one chevron like BC, EF with two like AB', '200px', 'calc(25% + 50px)'),
            ('The parallelogram DEFB', 'shaded below the copy: DE = BF', '250px', 'calc(25% - 40px)'),
            ('Justification tags', 'Given, Parallel lines, ASA, Intercept theorem (twice), Substituting', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the size of the second triangle and the shape of the first are set by dragging.',
    input_rows=[['$D$', 'solid dot', 'slides along $AB$: $AD = A\'B\'$, the size of the second triangle; $E$ and $F$ follow'],
                ['$A$, $B$, $C$', 'solid dot', 'reshape the triangle; $D$ keeps its fraction of $AB$'],
                ['$E$, $F$', 'hollow dot', 'cannot be dragged: placed by the parallels through $D$ and through $E$'],
                ['a vertex out of the frame, or a flattened triangle', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $D$, $E$, $F$',
    measures_desc="write each marked angle's size in degrees beside its arc: α at A, β at B and at D",
    readout_short='the three ratios and the angle at $D$', tags='**Given**, **Parallel lines**, **ASA**, **Intercept theorem**, **Substituting**',
    beh1='The readout is a check, not a step of the proof. The argument uses corresponding angles, ASA and the intercept theorem, never the numbers, which is why the three ratios agree for every position of D.',
    beh2t='The second triangle is not drawn', beh2='Only its size matters, and that is recorded by AD = A′B′; the proof builds a congruent copy ADE of it inside ABC, so everything can be seen in one figure.',
    p3top='150px', p3left='calc(25% - 60px)',
))

# ---------------------------------------------------------------- 44
PAGES.append(dict(
    slug='sas-similarity', prev='aa-similarity', prev_h1='AA Similarity', prev_key='aaSimilarity', prev_dragged='draggedAASimilarity',
    key='sasSimilarity', dragged='draggedSASSimilarity', dragged_comment='D further down AB: a larger second triangle, DE still parallel to BC',
    title='SAS Similarity Proof | Two Sides in Ratio and the Included Angle Step by Step',
    desc='Watch the proof of the SAS similarity criterion: two sides in the same ratio and an equal included angle make similar triangles, by comparing areas to find a parallel, step by step. Then drag the copy and the vertices.',
    h1='SAS Similarity', name='SAS Similarity Proof',
    appdesc='Step-by-step interactive proof of the SAS similarity criterion by comparing areas to show that DE is parallel to BC, then corresponding angles and AA, with a draggable copy and vertices.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="8,68 72,68 44,10" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><polygon points="44,10 28,43 59,43" fill="#FAC775" fill-opacity="0.45" stroke="#FAC775" stroke-width="1.4"/><path d="M39,21 A11,11 0 0 0 50,21" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><text x="40" y="79" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">SAS</text></svg>',
    keywords=['sas similarity', 'sas similarity criterion proof', 'similar triangles', 'two sides in proportion', 'included angle', 'converse of the intercept theorem', 'ratio of areas', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'left', 'right', 'equal', 'parallel', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $D$ along the side $AB$ to change the size of the second triangle, or drag a vertex, and watch $DE$ stay parallel to $BC$ and the angles at $D$ and $B$ stay equal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""The SAS similarity criterion says: if two sides of one triangle are in the same ratio to two sides of another, and the angles between those sides are equal, the triangles are similar. With $\\angle A' = \\angle A$ and

$$\\frac{A'B'}{AB} = \\frac{A'C'}{AC}$$

all three angles are equal and the third pair of sides is in the same ratio.

As on the [AA similarity](!/geometry/visual-tools/aa-similarity) page the second triangle is not drawn. Mark $D$ on $AB$ with $AD = A'B'$ and $E$ on $AC$ with $AE = A'C'$ (one and two ticks); by [SAS congruence](!/geometry/visual-tools/sss-congruence) the triangle $ADE$ is a congruent copy of $A'B'C'$, and the hypothesis says $AD/AB = AE/AC$. What has to be shown is that $ADE$ is similar to $ABC$, and the key is to prove that $DE$ is parallel to $BC$: the converse of the [intercept theorem](!/geometry/visual-tools/intercept-theorem), proved here by areas."""),
        ('Cutting the Side AB', r"""Join $B$ to $E$. The triangles $ADE$ and $ABE$ have their bases $AD$ and $AB$ on the same line and the same apex $E$, so they have the same height:

$$\\frac{[ADE]}{[ABE]} = \\frac{AD}{AB}$$"""),
        ('Cutting the Side AC', r"""Join $C$ to $D$. The triangles $ADE$ and $ACD$ have their bases $AE$ and $AC$ on the line $AC$ and the same apex $D$:

$$\\frac{[ADE]}{[ACD]} = \\frac{AE}{AC}$$"""),
        ('Equal Areas', r"""The hypothesis $AD/AB = AE/AC$ now reads $[ADE]/[ABE] = [ADE]/[ACD]$. The numerators are the same, so the denominators are equal: $[ABE] = [ACD]$. Each of these two triangles is made of $ADE$ and one more piece, $BDE$ or $CDE$. Take $ADE$ away from both:

$$[BDE] = [CDE]$$"""),
        ('The Parallel', r"""The triangles $BDE$ and $CDE$ have the same base $DE$ and equal areas, so their heights are equal: $B$ and $C$ are at the same distance from the line $DE$, and on the same side of it. A line through two points at the same distance from a line, on the same side, is parallel to it:

$$BC \\parallel DE$$

This is the converse of the [intercept theorem](!/geometry/visual-tools/intercept-theorem), and the argument is that theorem's proof read backwards."""),
        ('Why It Holds', r"""With $DE \\parallel BC$ the corresponding angles are equal ([parallel lines](!/geometry/visual-tools/parallel-lines)): $\\angle ADE = \\angle B = \\beta$ and $\\angle AED = \\angle C = \\gamma$. The triangles $ADE$ and $ABC$ share the angle at $A$ and now agree in all three angles, so by [AA similarity](!/geometry/visual-tools/aa-similarity)

$$\\frac{DE}{BC} = \\frac{AD}{AB} = \\frac{AE}{AC}$$

Since $ADE$ is a congruent copy of $A'B'C'$, the same angles and the same ratio hold for $A'B'C'$. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, same-height triangles twice, equal ratios, equal areas on the same base, and AA similarity."""),
        ('Dragging the Figure', r"""Drag $D$ along $AB$: $E$ moves along $AC$ so that $AD/AB = AE/AC$ stays true (that is the hypothesis), the copy $ADE$ grows or shrinks, and $DE$ stays parallel to $BC$, as the proof says it must. The readout shows the common ratio, $DE/BC$, and the angles at $D$ and at $B$, which stay equal. Drag $A$, $B$ or $C$ to reshape the big triangle.

The player keeps the second triangle smaller than the first; for a larger one swap the roles. A drag that would carry a vertex out of the frame or flatten the triangle is refused."""),
        ('Consequences', r"""• **The converse of the intercept theorem.** The middle of this proof shows that a line cutting two sides of a triangle in the same ratio is parallel to the third side; it is used on its own as often as the theorem itself.
• **SSS similarity.** The [SSS similarity](!/geometry/visual-tools/sss-similarity) criterion is proved by SAS similarity in two lines.
• **Scaling from a point.** Enlarging a figure from a centre $A$ by a factor $k$ sends every segment to a parallel segment $k$ times as long; SAS similarity is the reason, applied to each triangle with a vertex at $A$.
• **The midsegment theorem.** When $D$ and $E$ are midpoints, the hypothesis holds with ratio $\\tfrac12$ and the conclusion is the [midsegment theorem](!/geometry/visual-tools/midsegment), both the parallel and the half length.
• **Spiral similarity.** With the included angle equal but the triangles turned, SAS similarity is the criterion behind spiral similarities, which turn and scale a figure about one centre."""),
    ],
    order=[('the-statement', 'given'), ('cutting-the-side-ab', 'left'), ('cutting-the-side-ac', 'right'), ('equal-areas', 'equal'), ('the-parallel', 'parallel'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('What does the SAS similarity criterion say?', "If A'B'/AB = A'C'/AC and the included angles at A and A' are equal, then the triangles ABC and A'B'C' are similar: all three angles are equal and B'C'/BC is the same ratio."),
        ('How is SAS similarity proved?', "Mark D on AB and E on AC with AD = A'B' and AE = A'C', so AD/AB = AE/AC. Same heights give [ADE]/[ABE] = AD/AB and [ADE]/[ACD] = AE/AC, so [ABE] = [ACD] and [BDE] = [CDE]; equal areas on the same base DE put B and C at the same distance from DE, so DE is parallel to BC. Corresponding angles and AA finish."),
        ('Why must the equal angle be the included one?', "Two sides in ratio with an equal angle opposite one of them do not determine the triangle: the third vertex can be in two positions, just as with the failed SSA congruence. With the angle between the two sides the triangle is fixed."),
    ],
    stills=[('given', 'Opening scene, frozen', 'ADE shaded: AD = A′B′, AE = A′C′, so AD/AB = AE/AC and ADE ≅ A′B′C′.'),
            ('left', 'Cutting the side AB, frozen', 'ADE and ABE with the apex E: [ADE]/[ABE] = AD/AB.'),
            ('right', 'Cutting the side AC, frozen', 'ADE and ACD with the apex D: [ADE]/[ACD] = AE/AC.'),
            ('equal', 'Equal areas, frozen', 'BDE and CDE shaded: [ABE] = [ACD], so [BDE] = [CDE].'),
            ('parallel', 'The parallel, frozen', 'Same base, equal areas, equal heights: DE ∥ BC.'),
            ('conclude', 'The conclusion, frozen', 'Corresponding angles β and γ: ADE ~ ABC by AA.')],
    dragged_cap='After dragging D, frozen', dragged_txt='D further down AB: a larger copy, DE still parallel to BC.',
    notes=[('given', 'Drag D: the size of the second triangle.', 'the-statement', 'Learn more about the statement'),
           ('left', 'Same height from E, so areas go as the bases.', 'cutting-the-side-ab', 'Learn more about cutting AB'),
           ('right', 'Same height from D, the other side.', 'cutting-the-side-ac', 'Learn more about cutting AC'),
           ('equal', 'Equal ratios, equal areas; take ADE away.', 'equal-areas', 'Learn more about the equal areas'),
           ('parallel', 'Same base and equal areas: equal heights.', 'the-parallel', 'Learn more about the parallel'),
           ('conclude', 'Drag D: the angles at D and B stay equal.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $D$ along $AB$ to resize the second triangle, or $A$, $B$ or $C$; the readout under the canvas shows the ratios and the angles at $D$ and $B$. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['SIDE AB\nNext → : ADE and ABE with the apex E: [ADE]/[ABE] = AD/AB.',
               'SIDE AC\nADE and ACD with the apex D: [ADE]/[ACD] = AE/AC.',
               'EQUAL AREAS\nEqual ratios make [ABE] = [ACD]; take ADE away: [BDE] = [CDE].',
               'PARALLEL\nSame base DE, equal areas, equal heights: BC ∥ DE.',
               'AA\nCorresponding angles β and γ: ADE ~ ABC.'],
    demo_drag_say='DRAG D\nResize the copy: DE stays parallel, the angles stay equal.',
    drag_desc='D slides along AB and sets the size of the second triangle; A, B and C move freely; the hollow point E follows with AE/AC = AD/AB',
    readout_desc='the line under the figure: the common ratio, DE/BC and the angles at D and B, live while you drag',
    frame2=[('The copy ADE', 'the shaded triangle at A, congruent to A′B′C′', '140px', 'calc(25% - 70px)'),
            ('The cross lines', 'BE and CD: the triangles ABE and ACD have equal areas', '236px', 'calc(25% + 60px)'),
            ('The parallel found', 'DE and BC, marked with the same chevron', '200px', 'calc(25% + 100px)'),
            ('Justification tags', 'Given, Same height (twice), Equal ratios, Same base, AA similarity', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the size of the second triangle and the shape of the first are set by dragging.',
    input_rows=[['$D$', 'solid dot', 'slides along $AB$: $AD = A\'B\'$; $E$ moves on $AC$ so that $AE/AC = AD/AB$, the hypothesis'],
                ['$A$, $B$, $C$', 'solid dot', 'reshape the triangle; $D$ keeps its fraction of $AB$'],
                ['$E$', 'hollow dot', 'cannot be dragged: placed on $AC$ by the given ratio'],
                ['a vertex out of the frame, or a flattened triangle', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $D$, $E$',
    measures_desc="write each marked angle's size in degrees beside its arc: α at A, β at B and D, γ at C and E",
    readout_short='the common ratio, $DE/BC$ and the angles at $D$ and $B$', tags='**Given**, **Same height**, **Equal ratios**, **Same base**, **AA similarity**',
    beh1='The readout is a check, not a step of the proof. The argument uses only areas of triangles with equal heights, then corresponding angles and AA, never the numbers.',
    beh2t='The second triangle is not drawn', beh2='Its two given sides are recorded by AD = A′B′ and AE = A′C′; the copy ADE is congruent to it by SAS, so the proof works inside ABC.',
    p3top='150px', p3left='calc(25% - 60px)',
))

# ---------------------------------------------------------------- 45
PAGES.append(dict(
    slug='sss-similarity', prev='sas-similarity', prev_h1='SAS Similarity', prev_key='sasSimilarity', prev_dragged='draggedSASSimilarity',
    key='sssSimilarity', dragged='draggedSSSSimilarity', dragged_comment='D further down AB: a larger second triangle, the same angles',
    title='SSS Similarity Proof | Three Sides in the Same Ratio Step by Step',
    desc='Watch the proof of the SSS similarity criterion: two triangles with their three sides in the same ratio have equal angles, by SAS similarity and a congruent copy, step by step. Then drag the copy and the vertices.',
    h1='SSS Similarity', name='SSS Similarity Proof',
    appdesc='Step-by-step interactive proof of the SSS similarity criterion: SAS similarity makes the copy ADE similar to ABC, so DE equals the third side and SSS congruence finishes, with a draggable copy and vertices.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="8,68 72,68 44,10" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><polygon points="44,10 28,43 59,43" fill="#FAC775" fill-opacity="0.45" stroke="#FAC775" stroke-width="1.4"/><line x1="34" y1="28" x2="38" y2="26" stroke="#E6F1FB" stroke-width="1.4"/><line x1="50" y1="26" x2="54" y2="28" stroke="#E6F1FB" stroke-width="1.4"/><line x1="43" y1="40" x2="43" y2="46" stroke="#E6F1FB" stroke-width="1.4"/><text x="40" y="79" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">SSS</text></svg>',
    keywords=['sss similarity', 'sss similarity criterion proof', 'similar triangles', 'three sides in proportion', 'proportional sides equal angles', 'sas similarity', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'sas', 'subst', 'sss', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $D$ along the side $AB$ to change the size of the second triangle, or drag a vertex, and watch the angles at $D$ and $B$ stay equal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""The SSS similarity criterion says: if the three sides of one triangle are in the same ratio to the three sides of another,

$$\\frac{A'B'}{AB} = \\frac{B'C'}{BC} = \\frac{C'A'}{CA}$$

then the triangles are similar, that is, their angles are equal too. It is the similarity version of [SSS congruence](!/geometry/visual-tools/sss-congruence), and the proof ends by calling that theorem.

As on the [AA](!/geometry/visual-tools/aa-similarity) and [SAS](!/geometry/visual-tools/sas-similarity) pages the second triangle is not drawn: mark $D$ on $AB$ with $AD = A'B'$ and $E$ on $AC$ with $AE = A'C'$. Then $AD/AB = AE/AC$ is the given ratio, and the triangle $ADE$ has two sides of $A'B'C'$ about the angle $A$. The proof shows that its third side is the third side of $A'B'C'$ as well."""),
        ('SAS Similarity First', r"""The triangles $ADE$ and $ABC$ share the angle at $A$, and the sides about it are in the same ratio, $AD/AB = AE/AC$. By [SAS similarity](!/geometry/visual-tools/sas-similarity), $ADE$ is similar to $ABC$: $DE$ is parallel to $BC$ and

$$\\frac{DE}{BC} = \\frac{AD}{AB}$$"""),
        ('The Third Side', r"""Now compare with the hypothesis. $AD/AB = A'B'/AB$ by construction, and the hypothesis says $A'B'/AB = B'C'/BC$. So

$$\\frac{DE}{BC} = \\frac{B'C'}{BC}, \\qquad DE = B'C'$$

The copy $ADE$ has all three sides of $A'B'C'$: $AD = A'B'$, $AE = A'C'$ and now $DE = B'C'$ (three ticks)."""),
        ('The Congruent Copy', r"""Three pairs of equal sides: by [SSS congruence](!/geometry/visual-tools/sss-congruence) the triangles $ADE$ and $A'B'C'$ are congruent, so the angles of $A'B'C'$ are the angles of $ADE$:

$$\\angle A' = \\angle DAE, \\qquad \\angle B' = \\angle ADE, \\qquad \\angle C' = \\angle AED$$"""),
        ('Why It Holds', r"""$DE \\parallel BC$, so the corresponding angles are equal ([parallel lines](!/geometry/visual-tools/parallel-lines)): $\\angle ADE = \\angle B = \\beta$ and $\\angle AED = \\angle C = \\gamma$, while the angle at $A$ is shared. The angles of $ADE$, and therefore of $A'B'C'$, are the angles of $ABC$:

$$\\angle A' = \\alpha, \\qquad \\angle B' = \\beta, \\qquad \\angle C' = \\gamma$$

Together with the given ratio of sides this is the similarity. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, SAS similarity, a substitution, SSS congruence and corresponding angles.

The three criteria now form a chain: AA rests on the intercept theorem, SAS on AA, SSS on SAS, and all of them, in the end, on areas."""),
        ('Dragging the Figure', r"""Drag $D$ along $AB$: $E$ moves along $AC$ with the same ratio, the copy $ADE$ grows or shrinks and keeps its shape, $DE$ stays parallel to $BC$, and the angles at $D$ and $B$ in the readout stay equal. Drag $A$, $B$ or $C$ to reshape the big triangle; the copy follows.

The player keeps the second triangle smaller than the first; for a larger one swap the roles. A drag that would carry a vertex out of the frame or flatten the triangle is refused."""),
        ('Consequences', r"""• **Shape from sides alone.** Three side lengths fix a triangle up to congruence (SSS); three ratios fix it up to similarity. A triangle with sides $3, 4, 5$ is right-angled whatever its size.
• **Scale drawings and maps.** A plan with every length in the same ratio to the original has the same angles everywhere; SSS similarity, applied triangle by triangle, is why a scale drawing is a faithful picture.
• **The chain of criteria.** [AA](!/geometry/visual-tools/aa-similarity) rests on the [intercept theorem](!/geometry/visual-tools/intercept-theorem), [SAS](!/geometry/visual-tools/sas-similarity) on AA, and SSS on SAS; each proof is a short reduction to the previous one.
• **Congruence as a special case.** With ratio $1$ the three similarity criteria become [SSS](!/geometry/visual-tools/sss-congruence), SAS and [ASA](!/geometry/visual-tools/asa-congruence) congruence; the proofs here use the congruence criteria and the intercept theorem, nothing more.
• **The HL case.** For right triangles, hypotenuse and one leg in the same ratio give similarity, by Pythagoras and SSS similarity, parallel to the [HL congruence](!/geometry/visual-tools/hl-congruence) page."""),
    ],
    order=[('the-statement', 'given'), ('sas-similarity-first', 'sas'), ('the-third-side', 'subst'), ('the-congruent-copy', 'sss'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('What does the SSS similarity criterion say?', "If A'B'/AB = B'C'/BC = C'A'/CA, the triangles ABC and A'B'C' are similar: their corresponding angles are equal."),
        ('How is SSS similarity proved?', "Mark D on AB with AD = A'B' and E on AC with AE = A'C'. Then AD/AB = AE/AC with the common angle A, so ADE is similar to ABC by SAS similarity and DE/BC = AD/AB = B'C'/BC, giving DE = B'C'. Now ADE and A'B'C' are congruent by SSS, and the angles of ADE are those of ABC because DE is parallel to BC."),
        ('Is SSS similarity the same as SSS congruence?', 'SSS congruence needs equal sides and gives equal triangles; SSS similarity needs sides in one common ratio and gives equal angles. Congruence is the case where the ratio is 1.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'ADE shaded: AD = A′B′ (one tick), AE = A′C′ (two ticks).'),
            ('sas', 'SAS similarity first, frozen', 'Common angle at A, AD/AB = AE/AC: ADE ~ ABC, DE ∥ BC.'),
            ('subst', 'The third side, frozen', 'DE/BC = AD/AB = B′C′/BC, so DE = B′C′ (three ticks).'),
            ('sss', 'The congruent copy, frozen', 'Three equal sides: ADE ≅ A′B′C′.'),
            ('conclude', 'The conclusion, frozen', 'Corresponding angles β and γ: the angles of A′B′C′ are those of ABC.')],
    dragged_cap='After dragging D, frozen', dragged_txt='D further down AB: a larger copy, the same angles.',
    notes=[('given', 'Drag D: the size of the second triangle.', 'the-statement', 'Learn more about the statement'),
           ('sas', 'Two sides in ratio about a common angle.', 'sas-similarity-first', 'Learn more about the first step'),
           ('subst', 'The given ratio makes DE the third side.', 'the-third-side', 'Learn more about the third side'),
           ('sss', 'Three equal sides: a congruent copy.', 'the-congruent-copy', 'Learn more about the copy'),
           ('conclude', 'Drag D: the angles at D and B stay equal.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $D$ along $AB$ to resize the second triangle, or $A$, $B$ or $C$; the readout under the canvas shows the common ratio and the angles at $D$ and $B$. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['SAS SIMILARITY\nNext → : common angle at A, AD/AB = AE/AC: ADE ~ ABC and DE ∥ BC.',
               'THIRD SIDE\nDE/BC = AD/AB = B′C′/BC, so DE = B′C′.',
               'SSS\nThree equal sides: ADE ≅ A′B′C′.',
               'ANGLES\nCorresponding angles β and γ: A′B′C′ has the angles of ABC.'],
    demo_drag_say='DRAG D\nResize the copy: its shape, and the angles, do not change.',
    drag_desc='D slides along AB and sets the size of the second triangle; A, B and C move freely; the hollow point E follows with the same ratio',
    readout_desc='the line under the figure: the common ratio, DE/BC and the angles at D and B, live while you drag',
    frame2=[('The copy ADE', 'the shaded triangle at A, with one, two and three ticks on its sides', '140px', 'calc(25% - 70px)'),
            ('The parallel', 'DE and BC, marked with the same chevron', '200px', 'calc(25% + 100px)'),
            ('The angles', 'β at B and at D, γ at C and at E, α at A', '262px', 'calc(25% - 120px)'),
            ('Justification tags', 'Given, SAS similarity, Substituting, SSS, Corresponding angles', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the size of the second triangle and the shape of the first are set by dragging.',
    input_rows=[['$D$', 'solid dot', 'slides along $AB$: $AD = A\'B\'$; $E$ moves on $AC$ with $AE/AC = AD/AB$, the given ratio'],
                ['$A$, $B$, $C$', 'solid dot', 'reshape the triangle; $D$ keeps its fraction of $AB$'],
                ['$E$', 'hollow dot', 'cannot be dragged: placed on $AC$ by the given ratio'],
                ['a vertex out of the frame, or a flattened triangle', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $D$, $E$',
    measures_desc="write each marked angle's size in degrees beside its arc: α at A, β at B and D, γ at C and E",
    readout_short='the common ratio, $DE/BC$ and the angles at $D$ and $B$', tags='**Given**, **SAS similarity**, **Substituting**, **SSS**, **Corresponding angles**',
    beh1='The readout is a check, not a step of the proof. The argument uses SAS similarity, a substitution, SSS congruence and corresponding angles, never the numbers.',
    beh2t='The second triangle is not drawn', beh2='Its three sides are recorded by AD = A′B′, AE = A′C′ and, once proved, DE = B′C′; the copy ADE stands in for it inside ABC.',
    p3top='150px', p3left='calc(25% - 60px)',
))
