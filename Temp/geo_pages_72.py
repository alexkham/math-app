# Content for page 72, the diagonal and side of a regular pentagon are in the golden ratio, read by geo-view-42-45.py (argument geo_pages_72)
# Strings in single quotes must not contain an apostrophe.
PAGES = [dict(
    slug='pentagon-golden-ratio', prev='pentagon-diagonals', prev_h1='Diagonals of a Regular Pentagon', prev_key='pentagonDiagonals', prev_dragged='draggedPentagonDiagonals',
    key='pentagonGoldenRatio', dragged='draggedPentagonGoldenRatio', dragged_comment='A turned to the left: the pentagon turns with it, still d/s = 1.618',
    dragged_expr="{ ...PROOFS.pentagonGoldenRatio.model, points: { ...PROOFS.pentagonGoldenRatio.model.points, A: { x: 255, y: 94 } } }",
    demo_drag="{ drag: '[data-handle=\"A\"]', dx: -10, dy: 2, ms: 1400 },",
    subCategory='Polygon',
    title='Regular Pentagon and the Golden Ratio | Diagonal over Side Proof Step by Step',
    desc='Watch the proof that the diagonal of a regular pentagon is the golden ratio times its side, (1 + √5)/2, by isosceles triangles and AA similarity, step by step. Then turn and resize the pentagon.',
    h1='The Regular Pentagon and the Golden Ratio', name='Pentagon Golden Ratio Proof',
    appdesc='Step-by-step interactive proof that the diagonal and side of a regular pentagon are in the golden ratio (1 + √5)/2, by angle chasing, isosceles triangles and AA similarity, with a draggable vertex.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="40,8 70,30 59,64 21,64 10,30" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><line x1="40" y1="8" x2="59" y2="64" stroke="#FAC775" stroke-width="1.4"/><line x1="70" y1="30" x2="10" y2="30" stroke="#FAC775" stroke-width="1.4"/><circle cx="47.4" cy="30" r="2.2" fill="#FAC775"/><text x="40" y="77" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">d/s = (1 + √5)/2</text></svg>',
    keywords=['regular pentagon golden ratio', 'pentagon diagonal to side ratio', 'golden ratio proof', 'diagonal of a regular pentagon', 'golden triangle', 'phi 1.618 pentagon', 'aa similarity', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'angles', 'apex', 'isosceles', 'similar', 'solve', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $A$ to turn and resize the pentagon and watch the readout: the diagonal over the side stays $1.618$ and the two smaller ratios stay $0.618$. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""In a regular pentagon $ABCDE$ all five sides have the same length $s$ and all five diagonals have the same length $d$. The theorem says their ratio is the golden ratio:

$$\\frac{d}{s} = \\frac{1 + \\sqrt{5}}{2} \\approx 1.618$$

The proof draws two diagonals, $AC$ and $BE$, crossing at a point $P$, and compares two triangles. It needs the $36°$ angles from the [diagonals of a regular pentagon](!/geometry/visual-tools/pentagon-diagonals) page, the [isosceles converse](!/geometry/visual-tools/isosceles-converse) and [AA similarity](!/geometry/visual-tools/aa-similarity).

In the player $B$, $C$, $D$, $E$ are $A$ turned about the centre by $72°$ at a time, so the pentagon stays regular whatever you drag, and $P$ is found where the two diagonals cross; the readout shows $AC/AB$, $AP/AB$ and $AB/AC$."""),
        ('The 36° Angles', r"""Each angle of the pentagon is $108°$, and a diagonal cuts off an isosceles triangle with two sides of the pentagon, whose base angles are $(180° - 108°)/2 = 36°$. So every diagonal makes

$$\\varphi = 36°$$

with the sides at its two ends: at $A$ and $C$ for the diagonal $AC$, at $B$ and $E$ for the diagonal $BE$."""),
        ('The Triangle APE', r"""In the triangle $APE$ the angle at $A$ is what is left of $108°$ after the $36°$ between $AB$ and $AC$:

$$\\angle EAP = 108° - 36° = 72°$$

The angle at $E$ is $\\angle AEB = 36°$, so the angle at $P$ is $180° - 72° - 36° = 72°$. The angles at $A$ and $P$ are equal, so the sides opposite them are equal:

$$EP = EA = s$$"""),
        ('The Triangle ABP', r"""The triangle $ABP$ has the angle $36°$ at $A$ and the angle $36°$ at $B$, so it is isosceles too:

$$AP = BP$$

And $BP$ is what is left of the diagonal $BE$ after $EP$: $BP = BE - EP = d - s$. So $AP = d - s$."""),
        ('Two Similar Triangles', r"""The triangles $ABP$ and $ACB$ share the angle $36°$ at $A$, and each has a second angle of $36°$, at $B$ in $ABP$ and at $C$ in $ACB$. By [AA similarity](!/geometry/visual-tools/aa-similarity) they are similar, with $A \\to A$, $B \\to C$, $P \\to B$, so their sides are in proportion:

$$\\frac{AP}{AB} = \\frac{AB}{AC}, \\qquad \\frac{d - s}{s} = \\frac{s}{d}$$"""),
        ('Solving for the Ratio', r"""Multiply out the proportion: $d(d - s) = s^2$, that is

$$d^2 - ds - s^2 = 0$$

Divide by $s^2$ and write $x = d/s$: $x^2 - x - 1 = 0$. The two roots are $(1 \\pm \\sqrt{5})/2$; a ratio of lengths is positive, so

$$x = \\frac{1 + \\sqrt{5}}{2} \\approx 1.618$$"""),
        ('Why It Holds', r"""The diagonal of a regular pentagon is the golden ratio times its side:

$$\\frac{d}{s} = \\frac{1 + \\sqrt{5}}{2}$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, the pentagon diagonals page, the isosceles converse (twice), AA similarity, algebra and combining.

The same proportion says that $P$ divides the diagonal $BE$ in the golden ratio: $BE/EP = d/s$ and $EP/BP = s/(d - s) = d/s$, the whole is to the larger part as the larger part is to the smaller."""),
        ('Dragging the Figure', r"""Drag $A$: the whole pentagon turns about its centre and grows or shrinks with it, because the other vertices are $A$ turned by $72°$, $144°$, $216°$ and $288°$. The ratios in the readout do not change, because the shape does not change, only its size and position.

The player keeps $A$ within $20°$ of the top, the pentagon within a small range of sizes so the angle marks stay readable, and every vertex inside the frame; a drag that would break this is refused."""),
        ('Consequences', r"""• **The golden ratio itself.** The number $(1 + \\sqrt{5})/2$ satisfies $x^2 = x + 1$ and $1/x = x - 1 \\approx 0.618$, which is why the readout shows $1.618$ and $0.618$ together.
• **The golden triangle.** The triangle $ACD$ has angles $36°$, $72°$, $72°$, and its long side over its short side is $d/s$, the golden ratio; the triangle $ABP$, with $108°$, $36°$, $36°$, is the golden gnomon.
• **The pentagram.** The five diagonals make a star whose crossing points cut every diagonal into three pieces in the golden ratio, and the inner pentagon is again regular, smaller by the factor $(1 + \\sqrt{5})/2$ squared.
• **cos 36°.** Dropping a perpendicular in the golden triangle gives $\\cos 36° = (1 + \\sqrt{5})/4$, half the golden ratio.
• **Constructing a pentagon.** Because $d/s$ is built from $\\sqrt{5}$, a regular pentagon can be constructed with ruler and compass, unlike a regular heptagon; see the [regular polygon angles](!/geometry/visual-tools/regular-polygon-angles) page for its angles."""),
    ],
    order=[('the-statement', 'given'), ('the-36-angles', 'angles'), ('the-triangle-ape', 'apex'), ('the-triangle-abp', 'isosceles'), ('two-similar-triangles', 'similar'), ('solving-for-the-ratio', 'solve'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('What is the ratio of the diagonal to the side of a regular pentagon?', 'The golden ratio, (1 + √5)/2, about 1.618. The diagonal is about 1.618 times as long as the side.'),
        ('How is the golden ratio in a pentagon proved?', 'Two diagonals cross at a point P. Angle chasing with the 36° angles shows that two triangles are isosceles, which gives AP = d − s, and that the triangles ABP and ACB are similar, which gives (d − s)/s = s/d. That equation becomes x² − x − 1 = 0 for x = d/s.'),
        ('Where do the diagonals of a regular pentagon cross?', 'Each crossing point divides a diagonal in the golden ratio: the longer piece equals the side of the pentagon and the whole diagonal over the longer piece is (1 + √5)/2.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The regular pentagon with the diagonals AC and BE crossing at P.'),
            ('angles', 'The 36° angles, frozen', 'φ = 36° at A, C, B and E.'),
            ('apex', 'The triangle APE, frozen', 'APE shaded: 2φ at A and P, so EP = EA = s.'),
            ('isosceles', 'The triangle ABP, frozen', 'ABP shaded: AP = BP = d − s.'),
            ('similar', 'Two similar triangles, frozen', 'ABP and ACB with the same angles.'),
            ('solve', 'Solving for the ratio, frozen', 'd² − ds − s² = 0.'),
            ('conclude', 'The conclusion, frozen', 'd/s = (1 + √5)/2.')],
    dragged_cap='After dragging A, frozen', dragged_txt='A turned to the left: the pentagon turns with it, still d/s = 1.618.',
    notes=[('given', 'Drag A: the ratios stay the same.', 'the-statement', 'Learn more about the statement'),
           ('angles', 'Each diagonal makes 36° with the sides.', 'the-36-angles', 'Learn more about the 36° angles'),
           ('apex', 'Two angles of 72°.', 'the-triangle-ape', 'Learn more about APE'),
           ('isosceles', 'Two angles of 36°.', 'the-triangle-abp', 'Learn more about ABP'),
           ('similar', 'Same angles, sides in proportion.', 'two-similar-triangles', 'Learn more about the similar triangles'),
           ('solve', 'A quadratic in d/s.', 'solving-for-the-ratio', 'Learn more about solving'),
           ('conclude', 'Drag A: the readout keeps 1.618.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $A$ to turn and resize the pentagon; the readout under the canvas shows $AC/AB$, $AP/AB$ and $AB/AC$. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['36°\nNext → : every diagonal makes 36° with the sides.',
               'APE\nTwo angles of 72°: EP = EA = s.',
               'ABP\nTwo angles of 36°: AP = BP = d − s.',
               'SIMILAR\nABP and ACB: (d − s)/s = s/d.',
               'SOLVE\nd² − ds − s² = 0.',
               'CONCLUDE\nd/s = (1 + √5)/2.'],
    demo_drag_say='DRAG A\nTurn the pentagon: the ratio stays 1.618.',
    drag_desc='A turns and resizes the pentagon; B, C, D and E follow as A turned by 72° at a time, and P follows',
    readout_desc='the line under the figure: AC/AB, AP/AB and AB/AC, live while you drag',
    p3top='84px', p3left='calc(25% + 40px)',
    frame2=[('The crossing point P', 'where the diagonals AC and BE meet', '186px', 'calc(25% + 12px)'),
            ('The triangle APE', 'shaded, with 2φ at A and P', '144px', 'calc(25% - 50px)'),
            ('The equal pieces', 'AP and BP, two ticks each', '180px', 'calc(25% + 52px)'),
            ('Justification tags', 'Given, Pentagon diagonals, Isosceles converse, AA similarity, Algebra, Combining', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the pentagon is turned and resized by dragging one vertex and stays regular.',
    input_rows=[['$A$', 'solid dot', 'turns and resizes the pentagon about its centre'],
                ['$B$, $C$, $D$, $E$', 'hollow dot', 'cannot be dragged: $A$ turned by $72°$ at a time'],
                ['$P$', 'hollow dot', 'cannot be dragged: where the diagonals $AC$ and $BE$ cross'],
                ['$A$ turned more than $20°$ from the top, a pentagon too small or too large, or a vertex out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $D$, $E$, $P$',
    measures_desc="write each marked angle's size in degrees beside its arc: φ four times and 2φ twice",
    readout_short='AC/AB, AP/AB and AB/AC', tags='**Given**, **Pentagon diagonals**, **Isosceles converse**, **AA similarity**, **Algebra**, **Combining**',
    beh1='The readout is a check, not a step of the proof. The argument uses angles, isosceles triangles and similarity, never the numbers, which is why the ratio is the same for every pentagon you drag.',
    beh2t='P is found, not placed', beh2='P is computed as the crossing of the diagonals AC and BE, and the pentagon is regular by construction; nothing about the golden ratio is built in, so the 1.618 in the readout is a real check.',
)]
