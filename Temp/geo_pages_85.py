# Content for page 85, a quadrilateral whose diagonals bisect each other is a parallelogram, read by geo-view-42-45.py (argument geo_pages_85)
# Strings in single quotes must not contain an apostrophe.
PAGES = [dict(
    slug='diagonals-bisect-converse', prev='regular-polygon-area', prev_h1='Area of a Regular Polygon', prev_key='regularPolygonArea', prev_dragged='draggedRegularPolygonArea',
    key='diagonalsBisectConverse', dragged='draggedDiagonalsBisectConverse', dragged_comment='A moved: a new quadrilateral, still a parallelogram',
    dragged_expr="{ ...PROOFS.diagonalsBisectConverse.model, points: { ...PROOFS.diagonalsBisectConverse.model.points, A: { x: 165, y: 270 } } }",
    demo_drag="{ drag: '[data-handle=\"A\"]', dx: -10, dy: 10, ms: 1400 },",
    subCategory='Quadrilateral',
    title='Diagonals That Bisect Each Other Make a Parallelogram | Proof Step by Step',
    desc='Watch the proof that a quadrilateral whose diagonals bisect each other is a parallelogram, by vertical angles, SAS congruence and alternate angles, step by step. Then drag the diagonals.',
    h1='Diagonals That Bisect Each Other', name='Diagonals Bisect Converse Proof',
    appdesc='Step-by-step interactive proof that if the diagonals of a quadrilateral bisect each other, the quadrilateral is a parallelogram, with draggable diagonals.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="10,56 22,16 70,24 58,64" fill="none" stroke="#E6F1FB" stroke-width="1.4"/><line x1="10" y1="56" x2="70" y2="24" stroke="#FAC775" stroke-width="1.6"/><line x1="22" y1="16" x2="58" y2="64" stroke="#FAC775" stroke-width="1.6"/><circle cx="40" cy="40" r="2" fill="#FAC775"/><text x="40" y="77" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">AO = OC, BO = OD</text></svg>',
    keywords=['diagonals bisect each other parallelogram', 'converse of parallelogram diagonals theorem', 'quadrilateral with bisecting diagonals', 'parallelogram test', 'prove a quadrilateral is a parallelogram', 'SAS congruence', 'alternate angles', 'quadrilateral theorems', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'vertical', 'sas', 'alternate', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $A$ or $B$ to change the diagonals, or $O$ to move the point where they cross, and watch the readout: the angles between opposite sides stay at $0°$. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""In a quadrilateral $ABCD$ the diagonals $AC$ and $BD$ cross at $O$. Suppose each diagonal is cut in half at that point:

$$AO = OC, \\qquad BO = OD$$

The theorem says that $ABCD$ is then a parallelogram: $AB \\parallel CD$ and $AD \\parallel BC$. It is the converse of the [parallelogram diagonals](!/geometry/visual-tools/parallelogram-diagonals) theorem, which says that the diagonals of a parallelogram bisect each other.

In the player $A$, $B$ and $O$ can be dragged; $C$ and $D$ are $A$ and $B$ mirrored in $O$, so the diagonals always bisect each other and nothing about the sides is built in. The readout shows the angle between $AB$ and $CD$ and between $AD$ and $BC$."""),
        ('Vertical Angles', r"""The angles $\\angle AOB$ and $\\angle COD$ lie opposite each other where the diagonals cross. They are [vertical angles](!/geometry/visual-tools/vertical-angles), so

$$\\angle AOB = \\angle COD = \\theta$$"""),
        ('Two Congruent Triangles', r"""The triangles $AOB$ and $COD$ have two pairs of equal sides, $AO = OC$ and $BO = OD$, and the equal angles $\\theta$ between them. By SAS congruence:

$$\\triangle AOB \\cong \\triangle COD$$"""),
        ('Alternate Angles', r"""In the congruent triangles the angles at $A$ and $C$ match:

$$\\angle OAB = \\angle OCD = \\alpha$$

These two angles lie on opposite sides of the diagonal $AC$, between the lines $AB$ and $CD$, so they are alternate angles for those lines. Equal alternate angles make the lines parallel, the converse part of the [parallel lines and a transversal](!/geometry/visual-tools/parallel-lines) theorem:

$$AB \\parallel CD$$"""),
        ('Why It Holds', r"""The same three steps work for the other two triangles, $AOD$ and $COB$: the vertical angles at $O$ are equal, the triangles are congruent by SAS, and the matching angles at $A$ and $C$ are alternate angles for $AD$ and $BC$. So

$$AD \\parallel BC$$

With both pairs of opposite sides parallel, $ABCD$ is a parallelogram. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, vertical angles, SAS congruence, the alternate angles converse and combining.

The congruent triangles also give $AB = CD$ and $AD = BC$, the [opposite sides](!/geometry/visual-tools/parallelogram-sides) of a parallelogram."""),
        ('Dragging the Figure', r"""Drag $A$ or $B$ to lengthen, shorten or turn a diagonal, or $O$ to move the crossing: the quadrilateral changes shape, but the readout keeps both angles between opposite sides at $0°$.

The player keeps the diagonals long and crossing at an angle between $60°$ and $110°$, keeps the angles at the corners large enough for their marks, and keeps the figure in the frame; a drag that would break one of these is refused."""),
        ('Consequences', r"""• **A test for parallelograms.** To show a quadrilateral is a parallelogram it is enough to show that its diagonals bisect each other; the [equal opposite sides](!/geometry/visual-tools/parallelogram-from-sides) page gives a second test.
• **Rectangles.** If the diagonals also have equal length, the parallelogram is a rectangle, the converse of the [rectangle diagonals](!/geometry/visual-tools/rectangle-diagonals) theorem.
• **Rhombuses.** If the diagonals bisect each other at right angles, the parallelogram is a rhombus, as on the [rhombus diagonals](!/geometry/visual-tools/rhombus-diagonals) page.
• **Completing a parallelogram.** Given three corners $A$, $B$, $C$, mirror $B$ in the midpoint of $AC$ to get the fourth corner: the diagonals then bisect each other, so the figure is a parallelogram. Doubling the median of a triangle in this way is a common construction."""),
    ],
    order=[('the-statement', 'given'), ('vertical-angles', 'vertical'), ('two-congruent-triangles', 'sas'), ('alternate-angles', 'alternate'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('If the diagonals of a quadrilateral bisect each other, is it a parallelogram?', 'Yes. A quadrilateral whose diagonals cut each other in half is always a parallelogram.'),
        ('How is it proved?', 'The vertical angles where the diagonals cross are equal, so the two opposite triangles are congruent by SAS. Their matching angles are alternate angles for a pair of opposite sides, which are therefore parallel; the other pair of triangles gives the other pair of sides.'),
        ('What extra condition makes it a rectangle or a rhombus?', 'Equal diagonals make it a rectangle, and perpendicular diagonals make it a rhombus.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The diagonals cut each other in half at O.'),
            ('vertical', 'Vertical angles, frozen', 'θ at O, twice.'),
            ('sas', 'Two congruent triangles, frozen', 'AOB and COD shaded.'),
            ('alternate', 'Alternate angles, frozen', 'α at A and C: AB ∥ CD.'),
            ('conclude', 'The conclusion, frozen', 'Both pairs of sides parallel.')],
    dragged_cap='After dragging A, frozen', dragged_txt='A moved: a new quadrilateral, still a parallelogram.',
    notes=[('given', 'Drag a diagonal: the sides stay parallel.', 'the-statement', 'Learn more about the statement'),
           ('vertical', 'Opposite angles at the crossing.', 'vertical-angles', 'Learn more about vertical angles'),
           ('sas', 'Two sides and the angle between them.', 'two-congruent-triangles', 'Learn more about the congruent triangles'),
           ('alternate', 'Equal alternate angles: parallel lines.', 'alternate-angles', 'Learn more about alternate angles'),
           ('conclude', 'Drag A, B or O: the readout stays at 0°.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $A$ or $B$ to change the diagonals, or $O$ to move the crossing; the readout under the canvas shows the angles between opposite sides. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['VERTICAL\nNext → : the angles at O are equal, θ and θ.',
               'SAS\nAOB ≅ COD.',
               'ALTERNATE\nα at A and C: AB ∥ CD.',
               'CONCLUDE\nThe same for AD and BC.'],
    demo_drag_say='DRAG A\nChange a diagonal: the sides stay parallel.',
    drag_desc='A and B change the diagonals and O moves the crossing; the hollow points C and D follow as mirror images',
    readout_desc='the line under the figure: the angle between AB and CD and between AD and BC, live while you drag',
    p3top='150px', p3left='calc(25% - 40px)',
    frame2=[('The halves of the diagonals', 'one tick on AO and OC, two on BO and OD', '163px', 'calc(25% + 20px)'),
            ('The triangles AOB and COD', 'shaded, congruent by SAS', '196px', 'calc(25% - 96px)'),
            ('The parallel marks', 'one arrow on AB and CD, two on AD and BC', '216px', 'calc(25% + 104px)'),
            ('Justification tags', 'Given, Vertical angles, SAS congruence, Alternate angles converse, Combining', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the diagonals are changed by dragging.',
    input_rows=[['$A$, $B$', 'solid dot', 'change the diagonals; the quadrilateral changes shape'],
                ['$O$', 'solid dot', 'moves the point where the diagonals cross'],
                ['$C$, $D$', 'hollow dot', 'cannot be dragged: $A$ and $B$ mirrored in $O$'],
                ['diagonals too short, crossing at under $60°$ or over $110°$, a corner angle too small, or a point out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $D$, $O$',
    measures_desc="write each marked angle's size in degrees beside its arc: θ twice and α twice",
    readout_short='the angles between opposite sides', tags='**Given**, **Vertical angles**, **SAS congruence**, **Alternate angles converse**, **Combining**',
    beh1='The readout is a check, not a step of the proof. The argument uses vertical angles, SAS and alternate angles, never the numbers, which is why both angles stay at 0° for every position you drag.',
    beh2t='Only the diagonals are built', beh2='C and D are made by mirroring A and B in O, which fixes only the diagonals; nothing makes the sides parallel, so the 0° in the readout is a real check.',
)]
