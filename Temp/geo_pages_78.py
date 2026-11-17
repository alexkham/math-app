# Content for page 78, the bisectors of vertical angles lie on one line, read by geo-view-42-45.py (argument geo_pages_78)
# Strings in single quotes must not contain an apostrophe.
PAGES = [dict(
    slug='vertical-angle-bisectors', prev='tangent-secant-angle', prev_h1='The Angle Between a Tangent and a Secant', prev_key='tangentSecantAngle', prev_dragged='draggedTangentSecantAngle',
    key='verticalBisectors', dragged='draggedVerticalBisectors', dragged_comment='C moved to the right: a wider pair of vertical angles, the bisectors still in line',
    dragged_expr="{ ...PROOFS.verticalBisectors.model, points: { ...PROOFS.verticalBisectors.model.points, C: { x: 200, y: 115 } } }",
    demo_drag="{ drag: '[data-handle=\"C\"]', dx: 8, dy: 0, ms: 1400 },",
    subCategory='Lines and Angles',
    title='Bisectors of Vertical Angles Lie on One Line | Proof Step by Step',
    desc='Watch the proof that the bisectors of two vertical angles form a single straight line, by vertical angles and the straight angle, step by step. Then drag the two crossing lines.',
    h1='Bisectors of Vertical Angles', name='Vertical Angle Bisectors Proof',
    appdesc='Step-by-step interactive proof that the angle bisectors of a pair of vertical angles are collinear, with draggable crossing lines.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="8" y1="54" x2="72" y2="26" stroke="#E6F1FB" stroke-width="1.4"/><line x1="16" y1="14" x2="64" y2="66" stroke="#E6F1FB" stroke-width="1.4"/><line x1="6" y1="36" x2="74" y2="44" stroke="#FAC775" stroke-width="1.6" stroke-dasharray="4 2"/><circle cx="40" cy="40" r="2.2" fill="#FAC775"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">α/2 + β + α/2 = 180°</text></svg>',
    keywords=['bisectors of vertical angles', 'vertical angle bisectors collinear', 'bisectors of vertically opposite angles form a straight line', 'vertical angles', 'angle bisector', 'straight angle', 'lines and angles', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'vertical', 'halves', 'straight', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $A$ or $C$ to turn a line, or $O$ to move the crossing, and watch the readout: the three angles from $OP$ round to $OQ$ always add up to $180°$. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""Two lines $AB$ and $CD$ cross at $O$. The angles $\\angle AOC$ and $\\angle BOD$ lie opposite each other: they are [vertical angles](!/geometry/visual-tools/vertical-angles). Draw the bisector $OP$ of $\\angle AOC$ and the bisector $OQ$ of $\\angle BOD$. The theorem says

$$P,\\ O,\\ Q \\text{ lie on one straight line}$$

so the two bisectors are the two halves of a single line through $O$. It is the opposite of the [bisectors of a linear pair](!/geometry/visual-tools/linear-pair-bisectors), which are perpendicular.

In the player $A$, $C$ and $O$ can be dragged, $B$ and $D$ are their mirror images in $O$ so that $AB$ and $CD$ stay straight lines, and the bisectors are computed; the readout shows $\\alpha$, $\\beta$ and the sum of the three angles from $OP$ to $OQ$."""),
        ('Vertical Angles', r"""The angles $\\angle AOC$ and $\\angle BOD$ are vertical angles, so they are equal:

$$\\angle AOC = \\angle BOD = \\alpha$$"""),
        ('The Two Halves', r"""$OP$ halves $\\angle AOC$ and $OQ$ halves $\\angle BOD$. The half of $\\angle AOC$ next to $OC$ and the half of $\\angle BOD$ next to $OB$ are

$$\\angle POC = \\angle BOQ = \\frac{\\alpha}{2}$$"""),
        ('The Straight Angle', r"""Between those two halves lies the angle $\\beta = \\angle COB$. The angles $\\angle AOC$ and $\\angle COB$ together fill the straight angle $AOB$ along the line $AB$:

$$\\alpha + \\beta = 180°$$"""),
        ('Why It Holds', r"""Go from $OP$ round to $OQ$ through $OC$ and $OB$:

$$\\angle POQ = \\frac{\\alpha}{2} + \\beta + \\frac{\\alpha}{2} = \\alpha + \\beta = 180°$$

A $180°$ angle at $O$ is a straight angle, so $OP$ and $OQ$ point in opposite directions along one line. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, vertical angles, the angle bisector, the straight angle and adding.

The same holds for the other pair of vertical angles, $\\angle COB$ and $\\angle DOA$: their bisectors make a second line through $O$, perpendicular to the first."""),
        ('Dragging the Figure', r"""Drag $A$ or $C$ to turn one of the lines, or $O$ to move the crossing: the angles $\\alpha$ and $\\beta$ change, one growing as the other shrinks, and the readout keeps the sum from $OP$ to $OQ$ at $180°$.

The player keeps $\\alpha$ between $50°$ and $130°$ so that every mark stays readable, keeps both lines long and keeps the figure in the frame; a drag that would break one of these is refused."""),
        ('Consequences', r"""• **The two bisector lines are perpendicular.** The bisectors of $\\angle AOC$ and $\\angle COB$ make $\\frac{\\alpha}{2} + \\frac{\\beta}{2} = 90°$, as on the [bisectors of a linear pair](!/geometry/visual-tools/linear-pair-bisectors) page; so the four bisectors at a crossing form two perpendicular lines.
• **Angle bisectors of two lines.** Those two perpendicular lines are the set of points equally far from the two given lines, as on the [angle bisector locus](!/geometry/visual-tools/angle-bisector-locus) page.
• **A check on a drawing.** If the bisectors of two opposite angles at a crossing do not line up, the drawing is not of two straight lines.
• **Mirror symmetry.** Reflecting in the bisector line swaps the two given lines, which is another way to see that it bisects both vertical angles at once."""),
    ],
    order=[('the-statement', 'given'), ('vertical-angles', 'vertical'), ('the-two-halves', 'halves'), ('the-straight-angle', 'straight'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('Do the bisectors of vertical angles form a straight line?', 'Yes. The bisectors of two vertical angles point in opposite directions from the crossing, so together they make one straight line.'),
        ('How is it proved?', 'Vertical angles are equal, say α each, and the angle between them on either side is β with α + β = 180°. From one bisector round to the other the angle is α/2 + β + α/2 = α + β = 180°, a straight angle.'),
        ('What about the bisectors of the other pair of vertical angles?', 'They form a second straight line through the crossing, perpendicular to the first one.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'Two crossing lines and the bisectors OP and OQ.'),
            ('vertical', 'Vertical angles, frozen', 'α at both vertical angles.'),
            ('halves', 'The two halves, frozen', 'α/2 next to OC and next to OB.'),
            ('straight', 'The straight angle, frozen', 'β between the halves, α + β = 180°.'),
            ('conclude', 'The conclusion, frozen', 'α/2 + β + α/2 = 180°: OP and OQ in line.')],
    dragged_cap='After dragging C, frozen', dragged_txt='C moved to the right: a wider pair of vertical angles, the bisectors still in line.',
    notes=[('given', 'Drag a line: OP and OQ stay in line.', 'the-statement', 'Learn more about the statement'),
           ('vertical', 'Opposite angles at a crossing.', 'vertical-angles', 'Learn more about vertical angles'),
           ('halves', 'Each bisector halves its angle.', 'the-two-halves', 'Learn more about the halves'),
           ('straight', 'Two angles along one line.', 'the-straight-angle', 'Learn more about the straight angle'),
           ('conclude', 'Drag a line: the readout keeps 180°.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $A$ or $C$ to turn a line, or $O$ to move the crossing; the readout under the canvas shows $\\alpha$, $\\beta$ and the sum from $OP$ to $OQ$. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['VERTICAL\nNext → : the vertical angles are equal, α and α.',
               'HALVES\nThe bisectors make α/2 next to OC and OB.',
               'STRAIGHT\nα + β = 180° along AB.',
               'CONCLUDE\nα/2 + β + α/2 = 180°: one line.'],
    demo_drag_say='DRAG C\nTurn the line CD: OP and OQ stay in line.',
    drag_desc='A and C turn the lines and O moves the crossing; B and D follow as mirror images, and the hollow points P and Q follow',
    readout_desc='the line under the figure: α, β and the sum from OP to OQ, live while you drag',
    p3top='98px', p3left='calc(25% - 75px)',
    frame2=[('The bisector OP', 'halving the angle AOC', '190px', 'calc(25% - 90px)'),
            ('The angle β', 'between OC and OB, above O', '110px', 'calc(25% + 10px)'),
            ('The bisector OQ', 'halving the vertical angle BOD', '178px', 'calc(25% + 90px)'),
            ('Justification tags', 'Given, Vertical angles, Angle bisector, Straight angle, Adding', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the lines are turned and moved by dragging.',
    input_rows=[['$A$, $C$', 'solid dot', 'turn the lines $AB$ and $CD$ about $O$'],
                ['$O$', 'solid dot', 'moves the crossing; both lines move with it'],
                ['$B$, $D$, $P$, $Q$', 'hollow dot', 'cannot be dragged: $A$ and $C$ mirrored in $O$, and the ends of the bisectors'],
                ['$\\alpha$ under $50°$ or over $130°$, a line too short, or a point out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $D$, $O$, $P$, $Q$',
    measures_desc="write each marked angle's size in degrees beside its arc: α twice, α/2 twice and β",
    readout_short='α, β and the sum from OP to OQ', tags='**Given**, **Vertical angles**, **Angle bisector**, **Straight angle**, **Adding**',
    beh1='The readout is a check, not a step of the proof. The argument uses vertical angles and the straight angle, never the numbers, which is why the sum is 180° for every position you drag.',
    beh2t='The bisectors are computed', beh2='P and Q are found along the computed bisectors of the two vertical angles; nothing makes them line up, so the 180° in the readout is a real check.',
)]
