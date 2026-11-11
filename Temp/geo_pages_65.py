# Content for page 65, the exterior angle of a cyclic quadrilateral, read by geo-view-42-45.py (argument geo_pages_65)
PAGES = [dict(
    slug='cyclic-exterior-angle', prev='30-60-90-triangle', prev_h1='The 30-60-90 Triangle', prev_key='triangle306090', prev_dragged='draggedThirtySixty',
    key='cyclicExteriorAngle', dragged='draggedCyclicExterior', dragged_comment='C slid round the circle: the exterior angle at B and the angle at D changed together',
    dragged_expr="{ ...PROOFS.cyclicExteriorAngle.model, params: { ...PROOFS.cyclicExteriorAngle.model.params, tc: 1.1 } }",
    demo_drag="{ drag: '[data-handle=\"C\"]', dx: -12, dy: 6, ms: 1400 },",
    subCategory='Circle',
    title='Exterior Angle of a Cyclic Quadrilateral Proof | Equals the Opposite Angle Step by Step',
    desc='Watch the proof that the exterior angle of a cyclic quadrilateral equals the interior angle at the opposite vertex, by a linear pair and the opposite angles of a cyclic quadrilateral, step by step. Then drag the vertices round the circle.',
    h1='Exterior Angle of a Cyclic Quadrilateral', name='Cyclic Exterior Angle Proof',
    appdesc='Step-by-step interactive proof that the exterior angle of a cyclic quadrilateral equals the interior opposite angle, with draggable vertices on the circle.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="38" cy="40" r="28" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><polygon points="18,20 58,24 54,62 16,56" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><line x1="58" y1="24" x2="76" y2="26" stroke="#FAC775" stroke-width="1.4" stroke-dasharray="3 2"/><path d="M66,25 A8,8 0 0 1 64,32" fill="none" stroke="#FAC775" stroke-width="1.6"/><path d="M22,51 A8,8 0 0 0 18,48" fill="none" stroke="#FAC775" stroke-width="1.6"/><text x="40" y="78" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">ε = δ</text></svg>',
    keywords=['exterior angle of a cyclic quadrilateral', 'cyclic quadrilateral exterior angle theorem', 'exterior angle equals interior opposite angle', 'cyclic quadrilateral', 'opposite angles supplementary', 'circle theorems', 'concyclic points test', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'linear', 'cyclic', 'subtract', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $A$ or $C$ round the circle and watch the exterior angle at $B$ and the interior angle at $D$ in the readout stay equal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""Let $ABCD$ be a quadrilateral inscribed in a circle, and extend the side $AB$ beyond $B$ to a point $E$. The angle $\\varepsilon = \\angle CBE$ is the exterior angle at $B$, and $\\delta = \\angle ADC$ is the interior angle at $D$, the vertex opposite $B$. The theorem says

$$\\varepsilon = \\delta$$

the exterior angle of a cyclic quadrilateral equals the interior opposite angle. It is the circle's version of the [exterior angle theorem](!/geometry/visual-tools/exterior-angle) for triangles, and it is a restatement of the [cyclic quadrilateral](!/geometry/visual-tools/cyclic-quadrilateral) theorem, that opposite angles add up to $180°$, in a form that is often quicker to use.

In the player the four vertices slide round a fixed circle; the readout shows $\\varepsilon$, $\\delta$ and the sum of the opposite angles $\\beta + \\delta$."""),
        ('A Linear Pair', r"""At $B$ the interior angle $\\beta = \\angle ABC$ and the exterior angle $\\varepsilon = \\angle CBE$ lie side by side along the straight line through $A$, $B$ and $E$. Together they fill a straight angle:

$$\\beta + \\varepsilon = 180°$$"""),
        ('Opposite Angles', r"""The vertices $B$ and $D$ are opposite in the quadrilateral. By the [cyclic quadrilateral](!/geometry/visual-tools/cyclic-quadrilateral) theorem the opposite angles of a quadrilateral inscribed in a circle add up to $180°$:

$$\\beta + \\delta = 180°$$

(That page proves it with four isosceles triangles on the radii; it also follows from the [inscribed angle theorem](!/geometry/visual-tools/inscribed-angle), since $\\beta$ and $\\delta$ stand on the two arcs $ADC$ and $ABC$, which together make the whole circle.)"""),
        ('Two Supplements', r"""Both $\\varepsilon$ and $\\delta$ make $180°$ with the same angle $\\beta$:

$$\\varepsilon = 180° - \\beta = \\delta$$

so the exterior angle at $B$ equals the interior angle at $D$."""),
        ('Why It Holds', r"""The exterior angle at a vertex is the supplement of the interior angle there, and in a cyclic quadrilateral the interior opposite angle is the supplement of that same interior angle. Two supplements of one angle are equal:

$$\\varepsilon = \\delta$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, the linear pair, the cyclic quadrilateral, subtracting and combining.

The converse is a useful test: if an exterior angle of a quadrilateral equals the interior opposite angle, then the opposite angles add up to $180°$, and by the converse of the cyclic quadrilateral theorem the four vertices lie on one circle."""),
        ('Dragging the Figure', r"""Drag any vertex round the circle: the quadrilateral changes shape, the extension at $B$ turns with $A$ and $B$, and the readout shows $\\varepsilon$ and $\\delta$ changing together while $\\beta + \\delta$ stays at $180°$. Both angles depend only on $A$ and $C$: moving $D$ along its arc, or $B$ along its arc, changes neither, since every point of an arc sees the chord $AC$ under the same angle.

The player keeps the vertices in order round the circle, the sides long enough for the angle marks and the extension inside the frame; a drag that would break one of these is refused."""),
        ('Consequences', r"""• **Testing for concyclic points.** To show that four points lie on a circle it is enough to find one exterior angle equal to the interior opposite angle; this is how many olympiad configurations are proved cyclic.
• **Isosceles trapezoids.** In a cyclic trapezoid the exterior angle at one end of a base equals the angle at the other end of the same base, which is why every cyclic trapezoid is an [isosceles trapezoid](!/geometry/visual-tools/isosceles-trapezoid).
• **Similar triangles from secants.** For two secants from a point $P$ meeting the circle at $A, B$ and $D, C$, the exterior angle theorem makes the triangles $PBC$ and $PDA$ similar, which gives the [two secants](!/geometry/visual-tools/two-secants) theorem $PA \\cdot PB = PC \\cdot PD$ by similarity.
• **The tangent case.** When $C$ slides into $B$ the side $BC$ becomes a tangent and the theorem becomes the [tangent-chord angle](!/geometry/visual-tools/tangent-chord-angle) theorem.
• **Triangles.** For a triangle the exterior angle equals the sum of the two remote interior angles; for a cyclic quadrilateral it equals the single opposite angle. Both say that the exterior angle is what the rest of the figure forces it to be."""),
    ],
    order=[('the-statement', 'given'), ('a-linear-pair', 'linear'), ('opposite-angles', 'cyclic'), ('two-supplements', 'subtract'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('What is the exterior angle theorem for a cyclic quadrilateral?', 'The exterior angle at any vertex of a cyclic quadrilateral equals the interior angle at the opposite vertex.'),
        ('How is the exterior angle of a cyclic quadrilateral proved?', 'The exterior angle and the interior angle at the same vertex add up to 180° (a linear pair), and the interior angle and the opposite interior angle also add up to 180° (opposite angles of a cyclic quadrilateral). Both are supplements of the same angle, so they are equal.'),
        ('Can the exterior angle be used to show a quadrilateral is cyclic?', 'Yes. If an exterior angle equals the interior opposite angle, the opposite angles add up to 180°, and a quadrilateral whose opposite angles are supplementary can be inscribed in a circle.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The cyclic quadrilateral with AB extended to E; ε at B and δ at D marked.'),
            ('linear', 'A linear pair, frozen', 'β and ε along the line A, B, E: β + ε = 180°.'),
            ('cyclic', 'Opposite angles, frozen', 'β and δ, opposite angles of a cyclic quadrilateral: β + δ = 180°.'),
            ('subtract', 'Two supplements, frozen', 'ε = 180° − β = δ.'),
            ('conclude', 'The conclusion, frozen', 'The exterior angle at B equals the interior angle at D.')],
    dragged_cap='After dragging C, frozen', dragged_txt='C slid round the circle: ε and δ changed together, still equal.',
    notes=[('given', 'Drag A or C: ε and δ change together.', 'the-statement', 'Learn more about the statement'),
           ('linear', 'Interior and exterior angle fill a straight line.', 'a-linear-pair', 'Learn more about the linear pair'),
           ('cyclic', 'Opposite angles of a cyclic quadrilateral.', 'opposite-angles', 'Learn more about the opposite angles'),
           ('subtract', 'Two supplements of the same angle.', 'two-supplements', 'Learn more about the supplements'),
           ('conclude', 'Drag A or C: the readout keeps ε = δ.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $A$, $B$, $C$ or $D$ round the circle, keeping them in order; the readout under the canvas shows $\\varepsilon$, $\\delta$ and $\\beta + \\delta$. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['LINEAR PAIR\nNext → : β and ε lie along the line A, B, E: β + ε = 180°.',
               'CYCLIC\nOpposite angles of a cyclic quadrilateral: β + δ = 180°.',
               'SUBTRACT\nε = 180° − β = δ.',
               'CONCLUDE\nThe exterior angle equals the interior opposite angle.'],
    demo_drag_say='DRAG C\nSlide C round the circle: ε and δ change together.',
    drag_desc='A, B, C and D slide round the circle in order; the hollow point E follows on AB extended',
    readout_desc='the line under the figure: ε, δ and β + δ, live while you drag',
    p3top='94px', p3left='calc(25% + 28px)',
    frame2=[('The exterior angle ε', 'at B, between BC and AB extended to E', '120px', 'calc(25% + 140px)'),
            ('The opposite angle δ', 'at D, equal to ε', '262px', 'calc(25% - 120px)'),
            ('The interior angle β', 'at B, the supplement of both ε and δ', '170px', 'calc(25% + 60px)'),
            ('Justification tags', 'Given, Linear pair, Cyclic quadrilateral, Subtracting, Combining', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the quadrilateral is shaped by dragging its vertices round the circle.',
    input_rows=[['$A$, $B$, $C$, $D$', 'solid dot', 'slide round the circle, keeping their order'],
                ['$E$', 'hollow dot', 'cannot be dragged: on $AB$ extended beyond $B$'],
                ['vertices out of order, a side too short, or a point out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $D$, $E$',
    measures_desc="write each marked angle's size in degrees beside its arc: ε, β and δ",
    readout_short='ε, δ and β + δ', tags='**Given**, **Linear pair**, **Cyclic quadrilateral**, **Subtracting**, **Combining**',
    beh1='The readout is a check, not a step of the proof. The argument uses only the linear pair and the cyclic quadrilateral theorem, never the numbers, which is why ε and δ agree for every shape you drag.',
    beh2t='The circle is built in', beh2='The four vertices are kept on one fixed circle, which is the hypothesis; the centre of the circle is not shown because the proof never uses it.',
)]
