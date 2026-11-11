# Content for page 46, Ptolemy's theorem, read by geo-view-42-45.py (argument geo_pages_46)
PAGES = [dict(
    slug='ptolemy-theorem', prev='sss-similarity', prev_h1='SSS Similarity', prev_key='sssSimilarity', prev_dragged='draggedSSSSimilarity',
    key='ptolemy', dragged='draggedPtolemy', dragged_comment='B slid towards C: a longer side AB, both sides of the equation change together',
    dragged_expr="{ ...PROOFS.ptolemy.model, params: { ...PROOFS.ptolemy.model.params, tb: -0.3 } }",
    demo_drag="{ drag: '[data-handle=\"B\"]', dx: 12, dy: 14, ms: 1400 },",
    subCategory='Circle',
    title="Ptolemy's Theorem Proof | Diagonals and Sides of a Cyclic Quadrilateral Step by Step",
    desc="Watch the proof of Ptolemy's theorem: in a cyclic quadrilateral the product of the diagonals equals the sum of the products of the opposite sides, by two pairs of similar triangles, step by step. Then drag the vertices round the circle.",
    h1="Ptolemy's Theorem", name="Ptolemy's Theorem Proof",
    appdesc="Step-by-step interactive proof of Ptolemy's theorem: a point K on one diagonal, inscribed angles and two pairs of similar triangles whose proportions add up, with draggable vertices on the circle.",
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="38" r="30" fill="none" stroke="#E6F1FB" stroke-width="1.4"/><polygon points="18,20 66,30 58,62 14,50" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><line x1="18" y1="20" x2="58" y2="62" stroke="#FAC775" stroke-width="1.6"/><line x1="66" y1="30" x2="14" y2="50" stroke="#FAC775" stroke-width="1.6"/><text x="40" y="78" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">Ptolemy</text></svg>',
    keywords=["ptolemy's theorem", 'ptolemy theorem proof', 'cyclic quadrilateral', 'product of diagonals', 'inscribed angles', 'similar triangles', 'chords of a circle', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'construct', 'inscribed', 'first', 'second', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $B$, $C$ or $D$ round the circle and watch the two sides of the equation in the readout change together and stay equal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""Ptolemy's theorem is about a quadrilateral $ABCD$ inscribed in a circle, a [cyclic quadrilateral](!/geometry/visual-tools/cyclic-quadrilateral). It says that the product of the two diagonals equals the sum of the products of the two pairs of opposite sides:

$$AC \\cdot BD = AB \\cdot CD + AD \\cdot BC$$

It comes from Ptolemy's Almagest, where it was the tool for computing tables of chords, the ancestor of the sine table. The converse holds as well: a quadrilateral whose sides and diagonals satisfy this equation is cyclic; for every other quadrilateral the left side is smaller than the right (Ptolemy's inequality).

The proof uses the [inscribed angle theorem](!/geometry/visual-tools/inscribed-angle) and [AA similarity](!/geometry/visual-tools/aa-similarity) twice, after one construction: a point $K$ on the diagonal $AC$ chosen to copy an angle. In the player $B$, $C$ and $D$ slide round the circle, $A$ sets the radius and $O$ moves the circle; the readout shows the two sides of the equation, in units of 60 pixels."""),
        ('The Point K', r"""Everything turns on one well-chosen point. On the diagonal $AC$ take the point $K$ for which

$$\\angle ABK = \\angle DBC$$

Both angles are marked $\\theta$ in the player. The point exists because the ray $BD$ runs inside the angle $ABC$, so $\\angle DBC$ is smaller than $\\angle ABC$ and the ray from $B$ making the angle $\\theta$ with $BA$ falls inside the angle, crossing $AC$. Taking $\\theta$ away from $\\angle ABC$ on either side gives a second pair of equal angles for free:

$$\\angle KBC = \\angle ABC - \\theta = \\angle ABD$$"""),
        ('Inscribed Angles', r"""Two pairs of equal angles come from the circle. The angles $\\angle BAC$ and $\\angle BDC$ both stand on the arc $BC$, seen from $A$ and from $D$ on the far side of it; by the [inscribed angle theorem](!/geometry/visual-tools/inscribed-angle) they are equal, marked $\\varphi$. In the same way $\\angle BCA$ and $\\angle BDA$ both stand on the arc $AB$ and are equal, marked $\\psi$:

$$\\angle BAC = \\angle BDC = \\varphi, \\qquad \\angle BCA = \\angle BDA = \\psi$$

Note that $\\angle BAK$ is the same angle as $\\angle BAC$, and $\\angle BCK$ the same as $\\angle BCA$, since $K$ lies on $AC$."""),
        ('The First Pair of Similar Triangles', r"""Compare the triangles $ABK$ and $DBC$. They have $\\angle ABK = \\angle DBC = \\theta$ by the choice of $K$, and $\\angle BAK = \\angle BDC = \\varphi$ by the inscribed angles. By [AA similarity](!/geometry/visual-tools/aa-similarity) they are similar, with $A \\leftrightarrow D$, $B \\leftrightarrow B$, $K \\leftrightarrow C$, so corresponding sides are in proportion:

$$\\frac{AK}{DC} = \\frac{AB}{DB}, \\qquad AK \\cdot BD = AB \\cdot CD$$

One of the two products of opposite sides has appeared, paired with the piece $AK$ of the diagonal."""),
        ('The Second Pair of Similar Triangles', r"""Now compare $KBC$ and $ABD$. They have $\\angle KBC = \\angle ABD$ (both are $\\angle ABC - \\theta$) and $\\angle BCK = \\angle BDA = \\psi$. Again by AA they are similar, with $K \\leftrightarrow A$, $B \\leftrightarrow B$, $C \\leftrightarrow D$:

$$\\frac{KC}{AD} = \\frac{BC}{BD}, \\qquad KC \\cdot BD = AD \\cdot BC$$

The other product of opposite sides, paired with the other piece $KC$ of the diagonal."""),
        ('Why It Holds', r"""Add the two results:

$$AK \\cdot BD + KC \\cdot BD = AB \\cdot CD + AD \\cdot BC$$

On the left, $(AK + KC) \\cdot BD$, and $AK + KC = AC$ because $K$ lies on the diagonal $AC$. So

$$AC \\cdot BD = AB \\cdot CD + AD \\cdot BC$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, one construction, the inscribed angle theorem, AA similarity twice, and an addition. The whole weight of the proof is carried by the point $K$: it cuts the diagonal $AC$ into two pieces, each of which is matched with one product of opposite sides.

For a quadrilateral that is not cyclic the same construction still gives two similar triangles, but $K$ no longer lies on $AC$; the triangle inequality $AK + KC > AC$ then turns the equation into Ptolemy's inequality."""),
        ('Dragging the Figure', r"""Drag $B$, $C$ or $D$ round the circle: the quadrilateral changes shape, the point $K$ slides along $AC$ to keep $\\angle ABK = \\angle DBC$, the four marked angles change, and the two sides of the equation in the readout change together and stay equal. Drag $A$ to change the radius (the other three vertices keep their places on the circle) or $O$ to move the whole figure.

The player keeps the four vertices in the order $A$, $B$, $C$, $D$ round the circle, so the quadrilateral stays convex with $AC$ and $BD$ as its diagonals, keeps the centre inside it and keeps every side long enough for its labels. A drag that would break one of these is refused."""),
        ('Consequences', r"""• **Pythagoras.** A rectangle is cyclic, with equal diagonals $d$ and sides $a$, $b$: Ptolemy gives $d^2 = a^2 + b^2$, another proof of the [Pythagorean theorem](!/geometry/visual-tools/pythagorean-theorem).
• **The addition formulas.** With $AC$ a diameter of a circle of diameter 1, the sides are sines of the inscribed angles, and Ptolemy's equation becomes $\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$; that is how Ptolemy built his table of chords.
• **The regular pentagon.** For four vertices of a regular pentagon with side $s$ and diagonal $d$, Ptolemy gives $d^2 = s^2 + sd$, so $d/s$ is the golden ratio.
• **Equilateral triangle.** For a point $P$ on the arc $BC$ of the circumcircle of an equilateral triangle $ABC$, Ptolemy gives $PA = PB + PC$.
• **Ptolemy's inequality and the converse.** For any four points $AC \\cdot BD \\le AB \\cdot CD + AD \\cdot BC$, with equality exactly when they lie on a circle (or a line) in that order; so the equation is a test for a quadrilateral to be cyclic, alongside the [opposite angles test](!/geometry/visual-tools/cyclic-quadrilateral).
• **Power of a point.** The [intersecting chords](!/geometry/visual-tools/intersecting-chords) theorem is the other classical relation between the diagonals of a cyclic quadrilateral; together with Ptolemy it determines the two pieces of each diagonal from the four sides."""),
    ],
    order=[('the-statement', 'given'), ('the-point-k', 'construct'), ('inscribed-angles', 'inscribed'), ('the-first-pair-of-similar-triangles', 'first'), ('the-second-pair-of-similar-triangles', 'second'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ("What does Ptolemy's theorem say?", 'In a quadrilateral ABCD inscribed in a circle, the product of the diagonals equals the sum of the products of the opposite sides: AC·BD = AB·CD + AD·BC. Conversely, a quadrilateral satisfying this equation is cyclic.'),
        ("How is Ptolemy's theorem proved?", 'Take K on the diagonal AC with angle ABK = angle DBC. Inscribed angles on the arc BC make triangles ABK and DBC similar, so AK·BD = AB·CD; inscribed angles on the arc AB make triangles KBC and ABD similar, so KC·BD = AD·BC. Adding, and using AK + KC = AC, gives the theorem.'),
        ("What is Ptolemy's theorem used for?", 'It gives the Pythagorean theorem for a rectangle, the golden ratio for a regular pentagon, the sine addition formulas when one diagonal is a diameter, and a test for a quadrilateral to be cyclic; Ptolemy used it to compute his table of chords.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The cyclic quadrilateral ABCD with its diagonals AC and BD.'),
            ('construct', 'The point K, frozen', 'K on AC with ∠ABK = ∠DBC, both marked θ.'),
            ('inscribed', 'Inscribed angles, frozen', 'φ at A and D on the arc BC; ψ at C and D on the arc AB.'),
            ('first', 'The first pair, frozen', 'ABK and DBC shaded: AK·BD = AB·CD.'),
            ('second', 'The second pair, frozen', 'KBC and ABD shaded: KC·BD = AD·BC.'),
            ('conclude', 'The conclusion, frozen', 'Adding, with AK + KC = AC: AC·BD = AB·CD + AD·BC.')],
    dragged_cap='After dragging B, frozen', dragged_txt='B slid towards C: AB longer, BC shorter, the two sides of the equation still equal.',
    notes=[('given', 'Drag a vertex round the circle.', 'the-statement', 'Learn more about the statement'),
           ('construct', 'One copied angle fixes K on the diagonal.', 'the-point-k', 'Learn more about the point K'),
           ('inscribed', 'Same arc, same angle, twice.', 'inscribed-angles', 'Learn more about the inscribed angles'),
           ('first', 'θ and φ: AA, and the first product.', 'the-first-pair-of-similar-triangles', 'Learn more about the first pair'),
           ('second', 'The leftover angles and ψ: the second product.', 'the-second-pair-of-similar-triangles', 'Learn more about the second pair'),
           ('conclude', 'Drag a vertex: the two sides of the readout stay equal.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $B$, $C$ or $D$ round the circle, $A$ for the radius or $O$ for the centre; the readout under the canvas shows $AC \\cdot BD$ and $AB \\cdot CD + AD \\cdot BC$. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['THE POINT K\nNext → : K on AC with ∠ABK = ∠DBC, both θ.',
               'INSCRIBED ANGLES\nφ at A and D on the arc BC; ψ at C and D on the arc AB.',
               'FIRST PAIR\nABK ~ DBC by θ and φ: AK·BD = AB·CD.',
               'SECOND PAIR\nKBC ~ ABD by the leftover angles and ψ: KC·BD = AD·BC.',
               'ADD\nAK + KC = AC: AC·BD = AB·CD + AD·BC.'],
    demo_drag_say='DRAG B\nSlide B round the circle: both sides of the readout change together.',
    drag_desc='B, C and D slide round the circle, A sets the radius, O moves the circle; the hollow point K follows on AC',
    readout_desc='the line under the figure: AC·BD and AB·CD + AD·BC, in units of 60 pixels, live while you drag',
    p3top='94px', p3left='calc(25% + 60px)',
    frame2=[('The point K', 'on the diagonal AC; the two shaded pairs meet along BK', '150px', 'calc(25% - 10px)'),
            ('The two pairs', 'ABK with DBC, and KBC with ABD, four shaded triangles over the quadrilateral', '236px', 'calc(25% - 120px)'),
            ('The marked angles', 'θ twice at B, φ at A and D, ψ at C and D', '96px', 'calc(25% + 120px)'),
            ('Justification tags', 'Given, Construction, Inscribed angles, AA similarity (twice), Adding', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the quadrilateral is shaped by dragging its vertices round the circle and K follows.',
    input_rows=[['$B$, $C$, $D$', 'solid dot', 'slide round the circle; $K$ moves along $AC$ to keep $\\angle ABK = \\angle DBC$'],
                ['$A$', 'solid dot', 'sets the radius of the circle; $B$, $C$, $D$ keep their places on it'],
                ['$O$', 'solid dot', 'moves the whole circle'],
                ['$K$', 'hollow dot', 'cannot be dragged: fixed on $AC$ by the copied angle'],
                ['vertices out of order, a vertex too close to its neighbour, or the centre outside the quadrilateral', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $D$, $K$, $O$',
    measures_desc="write each marked angle's size in degrees beside its arc: θ, φ and ψ",
    readout_short='the two sides of the equation', tags='**Given**, **Construction**, **Inscribed angles**, **AA similarity**, **Adding**',
    beh1='The readout is a check, not a step of the proof. The argument uses the inscribed angle theorem and AA similarity, never the numbers, which is why the two sides agree for every position of the vertices.',
    beh2t='K is computed from an angle', beh2='K is where the ray from B that makes the angle ∠DBC with BA meets the diagonal AC; it is the only construction in the proof, and the player recomputes it at every drag.',
)]
