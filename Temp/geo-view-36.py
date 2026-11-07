import os
p = os.path.join('pages', 'geometry', 'visual-tools', '[view].jsx')
s = open(p, encoding='utf-8', newline='').read()
nl = '\r\n' if '\r\n' in s else '\n'

def ins_after_line(anchor, block):
    global s
    assert s.count(anchor) == 1, anchor
    i = s.index(anchor) + len(anchor)
    j = s.index(nl, i) + len(nl)
    s = s[:j] + block.replace('\n', nl) + s[j:]

def ins_before_close(anchor, block, close='  }'):
    global s
    anchor = anchor.replace('\n', nl)
    assert s.count(anchor) == 1, anchor
    i = s.index(anchor)
    j = s.index(nl + close + nl, i) + len(nl)
    s = s[:j] + block.replace('\n', nl) + s[j:]

ins_after_line("    { params: { view: 'aas-congruence' } },", "    { params: { view: 'kite-diagonals' } },\n")

VIEW = r"""    'kite-diagonals': {
      proofKey: 'kiteDiagonals',
      title: 'Kite Diagonals Proof | Perpendicular Diagonals, One Bisecting the Other, Step by Step',
      description: 'Watch the proof that the diagonals of a kite are perpendicular and that the axis bisects the other diagonal, from SSS, SAS and a linear pair, step by step. Then drag the vertices.',
      h1Title: 'The Diagonals of a Kite',
      url: '/geometry/visual-tools/kite-diagonals',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="40,8 16,30 40,70 64,30" fill="#85B7EB" fill-opacity="0.35" stroke="#E6F1FB" stroke-width="1.4"/><line x1="40" y1="8" x2="40" y2="70" stroke="#FAC775" stroke-width="1.4" stroke-dasharray="3 2"/><line x1="16" y1="30" x2="64" y2="30" stroke="#FAC775" stroke-width="1.4" stroke-dasharray="3 2"/><path d="M 40 36 L 46 36 L 46 30" fill="none" stroke="#E6F1FB" stroke-width="1.4"/><text x="40" y="78" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">Kite</text></svg>`,
      category: 'Proofs',
      subCategory: 'Quadrilateral',
      name: 'Kite Diagonals Proof',
      keywords: [
        'kite diagonals',
        'kite diagonals perpendicular',
        'kite properties proof',
        'axis of symmetry of a kite',
        'quadrilateral diagonals',
        'SSS SAS congruence',
        'linear pair',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the vertices and watch the diagonals stay at right angles and the crossing stay at the midpoint of the short diagonal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `A kite is a quadrilateral with two pairs of equal adjacent sides: $AB = AD$ and $CB = CD$, the equal sides meeting at the two ends $A$ and $C$ of its axis. The theorem says what its diagonals do:

$$AC \\perp BD \\qquad \\text{and} \\qquad BM = MD$$

where $M$ is the crossing of the diagonals: the diagonals are perpendicular, and the axis cuts the other diagonal in half. The axis also bisects the angles at $A$ and at $C$. A [rhombus](!/geometry/visual-tools/rhombus-diagonals) is a kite with all four sides equal, and its perpendicular diagonals are the special case.

In the player $A$, $B$ and $C$ are free; $D$ is placed as the mirror image of $B$ in the line $AC$, which is exactly what makes $AD = AB$ and $CD = CB$. The readout under the canvas shows the angle at $M$ and the two halves of $BD$.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The Axis and Two Triangles',
          content: `Draw the axis $AC$. It splits the kite into the triangles $ABC$ and $ADC$, which share the side $AC$ and have the kite's equal sides as their other sides:

$$AB = AD, \\qquad CB = CD, \\qquad AC = AC$$

Three pairs of equal sides, so by the [SSS congruence](!/geometry/visual-tools/sss-congruence) criterion $ABC \\cong ADC$. The player shades the two triangles in different colours.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'The Axis Bisects the Angle',
          content: `Congruent triangles have equal corresponding angles. In $ABC$ and $ADC$ the angle at $A$ corresponds to the angle at $A$, so

$$\\angle BAC = \\angle DAC = \\alpha$$

the axis bisects the angle of the kite at $A$. The same argument at the other end gives $\\angle BCA = \\angle DCA$. The proof only needs the equal angles at $A$, which it uses next as the included angles of two smaller triangles.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'Two Smaller Triangles',
          content: `Draw the other diagonal $BD$ and call its crossing with the axis $M$. The axis now splits the upper part of the kite into the triangles $ABM$ and $ADM$:

$$AB = AD, \\qquad \\angle BAM = \\angle DAM = \\alpha, \\qquad AM = AM$$

Two sides and the included angle agree, so $ABM \\cong ADM$ by side-angle-side. Nothing new was assumed: the equal sides are the kite's, the equal angles came from the previous step, and $AM$ is shared.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'The Linear Pair',
          content: `Corresponding parts of $ABM$ and $ADM$ give two things at once. The sides opposite $\\alpha$ are equal, $BM = MD$ (three ticks), so $M$ is the midpoint of $BD$: the axis bisects the other diagonal. And the angles at $M$ are equal, $\\angle AMB = \\angle AMD = \\varphi$.

Those two angles sit side by side along the straight line $BD$, a linear pair, so they add up to a straight angle, as on the [vertical angles](!/geometry/visual-tools/vertical-angles) page:

$$\\varphi + \\varphi = 180° \\implies \\varphi = 90°$$

The diagonals are perpendicular.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `The proof uses the kite's definition twice: once through side-side-side, to show that the axis bisects the angle at $A$, and once through side-angle-side, to show that the two halves of the kite on either side of the axis match. Equal angles along a straight line then have to be right angles. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given sides, SSS, corresponding parts, SAS, and a linear pair.

Another way to say it: $A$ and $C$ are both the same distance from $B$ as from $D$, so each lies on the perpendicular bisector of $BD$, and the axis is that perpendicular bisector. The proof above is that fact spelled out with triangles.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Drag $B$: it swings about the axis and $D$ mirrors it, so the kite changes shape while $AB = AD$ and $CB = CD$ stay true; the readout keeps the angle at $M$ at $90°$ and the two halves of $BD$ equal. Drag $A$ or $C$ to lengthen or tilt the axis.

The player keeps the kite convex: the foot of $B$ on the axis must fall strictly between $A$ and $C$. A drag that would push it past an end, making a dart (a concave kite) in which the diagonals still cross at right angles but outside the figure, is refused, as is one that carries a vertex out of the frame.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **Area of a kite.** The diagonals are perpendicular, so the kite is four right triangles with legs along the diagonals, and its area is half the product of the diagonals: $\\tfrac12 \\, AC \\cdot BD$. The same formula holds for a rhombus and a square.
• **The perpendicular bisector.** The axis of a kite is the perpendicular bisector of the other diagonal; every point of it is equidistant from $B$ and $D$. This is the fact behind the [circumcentre](!/geometry/visual-tools/circumcentre), where three such bisectors meet.
• **Kites on these pages.** A circle's centre with the two points of contact of the [two tangents](!/geometry/visual-tools/two-tangents) from an outside point make a kite with two right angles; the centre, the ends of a chord and the foot of the [perpendicular from the centre](!/geometry/visual-tools/chord-bisector) make the same picture in halves.
• **Tangential quadrilateral.** Every convex kite has an inscribed circle touching all four sides, since the axis bisects the angles at $A$ and $C$ and their bisectors meet the other two angle bisectors at one point.
• **Not every quadrilateral with perpendicular diagonals is a kite.** Perpendicular diagonals alone give the area formula but not equal sides; a kite needs one diagonal to bisect the other as well.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What is a kite in geometry?',
          answer: 'A quadrilateral with two pairs of equal adjacent sides, the equal sides meeting at the two ends of its axis. A rhombus is a kite with all four sides equal.'
        },
        obj2: {
          question: 'Why are the diagonals of a kite perpendicular?',
          answer: 'The axis splits the kite into two congruent triangles (SSS), so it bisects the angle at its end. The two smaller triangles on either side of the axis are then congruent by SAS, so the two angles at the crossing are equal; they form a linear pair, so each is 90°.'
        },
        obj3: {
          question: 'Does each diagonal of a kite bisect the other?',
          answer: 'Only the axis, the diagonal through the vertices where the equal sides meet, bisects the other one. The other diagonal bisects the axis only when the kite is a rhombus.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Kite Diagonals Proof Visualizer",
          "description": "Step-by-step interactive proof that the diagonals of a kite are perpendicular and that the axis bisects the other diagonal, from SSS, SAS and a linear pair, with draggable vertices.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/kite-diagonals",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "author": { "@type": "Organization", "name": "Learn Math Class" },
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool"
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
            { "@type": "ListItem", "position": 2, "name": "Geometry", "item": "https://www.learnmathclass.com/geometry" },
            { "@type": "ListItem", "position": 3, "name": "Visual Tools", "item": "https://www.learnmathclass.com/geometry/visual-tools" },
            { "@type": "ListItem", "position": 4, "name": "The Diagonals of a Kite", "item": "https://www.learnmathclass.com/geometry/visual-tools/kite-diagonals" }
          ]
        }
      }
    },
"""
ins_before_close('"name": "The AAS Congruence Criterion", "item"', VIEW, close='  };')

ins_after_line("  const draggedAAS = {", "  // B swung down and out: a wider, lower kite, the right angle at M unchanged\n  const draggedKite = { ...PROOFS.kiteDiagonals.model, points: { ...PROOFS.kiteDiagonals.model.points, B: { x: 120, y: 260 } } }\n")

UNITS = """    'kite-diagonals': {
      given: unit(D['kiteDiagonals-given'], 'Opening scene, frozen',
        'The kite ABCD: AB = AD (one tick), CB = CD (two ticks).'),
      sss: unit(D['kiteDiagonals-sss'], 'The axis and two triangles, frozen',
        'The axis AC splits the kite into ABC and ADC, congruent by SSS.'),
      bisect: unit(D['kiteDiagonals-bisect'], 'The axis bisects the angle, frozen',
        'Corresponding angles: ∠BAC = ∠DAC = α.'),
      sas: unit(D['kiteDiagonals-sas'], 'Two smaller triangles, frozen',
        'The diagonal BD and its crossing M; ABM ≅ ADM by SAS.'),
      linear: unit(D['kiteDiagonals-linear'], 'The linear pair, frozen',
        'BM = MD (three ticks) and the equal angles φ at M along BD: φ = 90°.'),
      conclude: unit(D['kiteDiagonals-conclude'], 'The conclusion, frozen',
        'AC ⟂ BD, and M is the midpoint of BD.'),
      dragged: unit(proofStill('kiteDiagonals', 5, { model: draggedKite }), 'After dragging B, frozen',
        'B swung down and out, D mirroring it: a wider kite, the right angle at M unchanged.'),
    },
"""
ins_before_close("'aas-congruence': {\n      given: unit(D['aasCongruence-given']", UNITS)

ORDER = """    'kite-diagonals': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-axis-and-two-triangles', 'sss'],
      ['obj3', 'the-axis-bisects-the-angle', 'bisect'],
      ['obj4', 'two-smaller-triangles', 'sas'],
      ['obj5', 'the-linear-pair', 'linear'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
"""
ins_before_close("'aas-congruence': [\n      ['obj0', 'getting-started'],", ORDER)

EXPL = """    'kite-diagonals': {
      given: note('D is the mirror of B in the axis; drag B and it follows.', 'the-statement', 'Learn more about the statement'),
      sss: note('Three equal sides; see the SSS page.', 'the-axis-and-two-triangles', 'Learn more about the two triangles'),
      bisect: note('The axis is a line of symmetry.', 'the-axis-bisects-the-angle', 'Learn more about the bisected angle'),
      sas: note('Two sides and the angle between them.', 'two-smaller-triangles', 'Learn more about the smaller triangles'),
      linear: note('Equal angles along a straight line are right angles.', 'the-linear-pair', 'Learn more about the linear pair'),
      conclude: note('Drag B: the right angle at M stays.', 'why-it-holds', 'Learn more about why it holds'),
    },
"""
ins_before_close("'aas-congruence': {\n      given: note(", EXPL)

INSTR = """    'kite-diagonals': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag $A$, $B$ or $C$; $D$ mirrors $B$ in the axis, and the readout under the canvas keeps the angle at $M$ and the two halves of $BD$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each marked angle\\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
"""
ins_before_close("'aas-congruence': [\n      '**▶ Play**", INSTR)

DEMO = """    'kite-diagonals': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'THE AXIS\\nNext → draws AC: two triangles with three equal sides.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'BISECTED\\nThe angles at A are equal: the axis bisects the angle.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'SAS\\nBD and its crossing M; ABM ≅ ADM.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'LINEAR PAIR\\nBM = MD, and the equal angles at M are right angles.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'DONE\\nThe diagonals are perpendicular, and AC bisects BD.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG B\\nSwing B outward: D mirrors it, the right angle stays.' },
          { drag: '[data-handle="B"]', dx: -16, dy: 22, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
"""
ins_before_close("'aas-congruence': {\n      'getting-started': {", DEMO)

HOWTO = """    'kite-diagonals': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each marked angle\\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'A, B and C move freely; the hollow vertex D is the mirror image of B in the axis AC', pos: { top: '150px', left: 'calc(25% - 150px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the angle at M and the two halves of BD, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The axis', desc: 'AC, joining the two vertices where the equal sides meet; it bisects the angles at A and C', pos: { top: '220px', left: 'calc(25% + 10px)' } },
            { n: 2, label: 'The crossing M', desc: 'the midpoint of BD, with the right-angle mark; the two angles φ are the linear pair', pos: { top: '96px', left: 'calc(25% + 60px)' } },
            { n: 3, label: 'The two halves', desc: 'BM and MD, three ticks each: corresponding sides of ABM and ADM', pos: { top: '150px', left: 'calc(25% - 130px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, SSS congruence, Corresponding parts, SAS congruence, Linear pair, Conclusion', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the kite is shaped by dragging three of its vertices and the fourth follows.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$B$', 'solid dot', 'swings about the axis; $D$ mirrors it, so $AB = AD$ and $CB = CD$ stay true'],
          ['$A$, $C$', 'solid dot', 'move the ends of the axis; $D$ is recomputed as the mirror of $B$'],
          ['$D$, $M$', 'hollow dot', 'cannot be dragged: the mirror of $B$, and the crossing of the diagonals'],
          ['a dart (foot of $B$ past an end of the axis), or a vertex out of the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$, $B$, $C$, $D$, $M$' },
          { control: '**Measures**', description: 'write each marked angle\\'s size in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the angle at $M$ and the lengths $BM$ and $MD$. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **SSS congruence**, **Corresponding parts**, **SAS congruence**, **Linear pair**, **Conclusion**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses two congruences and a linear pair, never the numbers, which is why the angle at M is 90° for every shape.' },
        { title: 'D is a reflection', content: 'Placing D as the mirror image of B in the axis is the same as requiring AD = AB and CD = CB; that is what the player draws from the start, and what the theorem then shows the diagonals to do.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
"""
ins_before_close("'aas-congruence': {\n      labels:", HOWTO)

open(p, 'w', encoding='utf-8', newline='').write(s)
print('view ok', s.count("'kite-diagonals'"))
