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

ins_after_line("    { params: { view: 'secant-tangent' } },", "    { params: { view: 'two-secants' } },\n")

VIEW = r"""    'two-secants': {
      proofKey: 'twoSecants',
      title: 'Two Secants Theorem Proof | PA · PB = PC · PD Step by Step',
      description: 'Watch the proof that two secants from a point outside a circle cut off equal products, by the difference of squares and Pythagoras, step by step. Then drag the secants and the point.',
      h1Title: 'Two Secants from a Point',
      url: '/geometry/visual-tools/two-secants',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="44" r="22" fill="#85B7EB" fill-opacity="0.25" stroke="#E6F1FB" stroke-width="1.4"/><line x1="8" y1="30" x2="70" y2="36" stroke="#FAC775" stroke-width="1.6"/><line x1="8" y1="30" x2="60" y2="64" stroke="#B5D4F4" stroke-width="1.6"/><circle cx="8" cy="30" r="2.4" fill="#E6F1FB"/><circle cx="29" cy="32" r="2.2" fill="#FAC775"/><circle cx="70" cy="36" r="2.2" fill="#FAC775"/><circle cx="33" cy="46" r="2.2" fill="#B5D4F4"/><circle cx="60" cy="64" r="2.2" fill="#B5D4F4"/><text x="40" y="78" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">PA·PB = PC·PD</text></svg>`,
      category: 'Proofs',
      subCategory: 'Circle',
      name: 'Two Secants Theorem Proof',
      keywords: [
        'two secants theorem',
        'secant secant theorem',
        'power of a point',
        'secant segments product',
        'intersecting secants',
        'circle theorems',
        'euclid III.36',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the near end of either secant round the circle, or move the outside point, and watch the two products stay equal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `Take a point $P$ outside a circle and draw two secants from it, one cutting the circle at $A$ and $B$, the other at $C$ and $D$, with $A$ and $C$ the nearer points. Then

$$PA \\cdot PB = PC \\cdot PD$$

the product of the whole secant and its outside part is the same for every secant from $P$. This completes the power-of-a-point family on these pages: the [intersecting chords](!/geometry/visual-tools/intersecting-chords) theorem is the same statement for a point inside the circle, and the [secant-tangent](!/geometry/visual-tools/secant-tangent) theorem is the case where one secant has shrunk to a tangent. In Euclid it is the outside half of Proposition 36 of Book III.

The proof is the secant-tangent argument done twice. In the player $O$ and $P$ are free, $A$ and $C$ slide round the near side of the circle, and $B$, $D$ are where the lines $PA$, $PC$ meet the circle again. The readout under the canvas shows the two products.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The Two Midpoints',
          content: `Each secant cuts off a chord, $AB$ and $CD$. Drop the perpendicular from the centre $O$ to each chord and call the feet $M$ and $N$. The perpendicular from the centre [bisects the chord](!/geometry/visual-tools/chord-bisector), so

$$AM = MB, \\qquad CN = ND$$

marked with one tick each on the first chord and two ticks each on the second. The feet $M$ and $N$ are where the two secants will be compared: each of them turns its secant's two segments into a sum and a difference of the same two lengths.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'Differences of Squares',
          content: `On the first secant the points lie in the order $P$, $A$, $M$, $B$, so $PA = PM - AM$ and $PB = PM + MB = PM + AM$, and

$$PA \\cdot PB = (PM - AM)(PM + AM) = PM^2 - AM^2$$

On the second secant, with $P$, $C$, $N$, $D$ in order, the same algebra gives

$$PC \\cdot PD = (PN - CN)(PN + CN) = PN^2 - CN^2$$

Two products have become two differences of squares, and squares of lengths are what Pythagoras provides.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'The First Secant',
          content: `$PM$ and $AM$ are legs of the right triangles $OMP$ and $OMA$, both right-angled at $M$ with the common leg $OM$; the player shades them. By the [Pythagorean theorem](!/geometry/visual-tools/pythagorean-theorem),

$$PM^2 = OP^2 - OM^2, \\qquad AM^2 = OA^2 - OM^2$$

Subtracting, $OM^2$ cancels and only the distance to the centre and the radius remain:

$$PA \\cdot PB = PM^2 - AM^2 = OP^2 - OA^2 = OP^2 - R^2$$`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'The Second Secant',
          content: `Nothing in the previous step used anything special about the first secant. Repeat it on the second: $ONP$ and $ONC$ are right-angled at $N$ with the common leg $ON$, so $PN^2 = OP^2 - ON^2$ and $CN^2 = OC^2 - ON^2$, and

$$PC \\cdot PD = PN^2 - CN^2 = OP^2 - OC^2 = OP^2 - R^2$$

The foot moved from $M$ to $N$ and the radius from $OA$ to $OC$, but the result is the same expression, because every radius is $R$ and $OP$ is the same segment.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `Both products equal $OP^2 - R^2$, so $PA \\cdot PB = PC \\cdot PD$. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, the perpendicular bisecting the chord, a difference of squares, and Pythagoras twice on each secant.

The number $OP^2 - R^2$ is the power of $P$ with respect to the circle. It is positive outside the circle, where it is the square of the tangent and the product of any secant's segments; negative inside, where its absolute value is the product of the two parts of any chord through $P$; and zero on the circle. Three theorems, one quantity, one proof pattern: midpoint, difference of squares, Pythagoras.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Drag $A$ or $C$ round the near side of the circle: its secant turns about $P$, the far end and the midpoint follow, the two segments change, and the readout keeps the product equal to the other secant's product. Drag $P$ to change the power itself, or $O$ to move the circle.

The player keeps $P$ outside the circle, keeps $A$ and $C$ the nearer ends of their secants, keeps the two secants apart, and refuses a drag that would make a chord shorter than a few units or carry a point out of the frame.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **Tangents as a limit.** Let $C$ and $D$ come together: the second secant becomes a tangent $PT$ and the product becomes $PT^2$, which is the secant-tangent theorem; let both become tangents and the [two tangents](!/geometry/visual-tools/two-tangents) from $P$ are equal.
• **Four concyclic points.** The converse holds: if two lines through $P$ meet at $A$, $B$ and $C$, $D$ with $PA \\cdot PB = PC \\cdot PD$ and $P$ outside both segments, then $A$, $B$, $C$, $D$ lie on one circle. This is the usual test for a [cyclic quadrilateral](!/geometry/visual-tools/cyclic-quadrilateral) by lengths rather than angles.
• **Similar triangles.** Joining $A$ to $D$ and $C$ to $B$ makes the triangles $PAD$ and $PCB$ similar, with the common angle at $P$ and equal inscribed angles at $B$ and $D$; the equal products are the proportion $PA : PC = PD : PB$ read crosswise. These pages avoid similarity, which is why the proof above goes through Pythagoras instead.
• **Radical axis.** For two circles, the points with equal power with respect to both lie on a line; a point on it sends equal tangents to both circles.
• **Measuring an unreachable circle.** The power of $P$ can be found from any one secant, and then every other secant from $P$ is pinned down: given the outside part, the whole follows.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What is the two secants theorem?',
          answer: 'If two secants from a point P outside a circle cut it at A, B and at C, D, then PA · PB = PC · PD: the product of the whole secant and its outside part is the same for every secant from P.'
        },
        obj2: {
          question: 'How is the two secants theorem proved?',
          answer: 'Drop the perpendicular from the centre to each chord; its foot is the midpoint. Then each product is a difference of squares, PM² − AM², and Pythagoras in the right triangles OMP and OMA turns it into OP² − R². Both secants give this same number.'
        },
        obj3: {
          question: 'How is this related to the intersecting chords theorem?',
          answer: 'They are the same fact for a point outside and a point inside the circle: the product of the two segments on any line through P equals the absolute value of OP² − R², the power of P.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Two Secants Theorem Proof Visualizer",
          "description": "Step-by-step interactive proof that two secants from an outside point cut off equal products, via the difference of squares and Pythagoras, with draggable secants.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/two-secants",
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
            { "@type": "ListItem", "position": 4, "name": "Two Secants from a Point", "item": "https://www.learnmathclass.com/geometry/visual-tools/two-secants" }
          ]
        }
      }
    },
"""
ins_before_close('"name": "The Secant-Tangent Theorem", "item"', VIEW, close='  };')

ins_after_line("  const draggedSecant = {", "  // P moved below and both secants turned: four different segments, the two products still equal\n  const draggedTwoSecants = { ...PROOFS.twoSecants.model, points: { ...PROOFS.twoSecants.model.points, P: { x: 95, y: 300 } }, params: { ta: 2.4, tc: -2.95 } }\n")

UNITS = """    'two-secants': {
      given: unit(D['twoSecants-given'], 'Opening scene, frozen',
        'The circle about O, the outside point P, and the two secants through A, B and C, D.'),
      foot: unit(D['twoSecants-foot'], 'The two midpoints, frozen',
        'OM and ON perpendicular to the chords: AM = MB, CN = ND.'),
      squares: unit(D['twoSecants-squares'], 'Differences of squares, frozen',
        'PA · PB = PM² − AM² and PC · PD = PN² − CN².'),
      pyth: unit(D['twoSecants-pyth'], 'The first secant, frozen',
        'OMP and OMA shaded: PM² − AM² = OP² − R².'),
      same: unit(D['twoSecants-same'], 'The second secant, frozen',
        'ONP and ONC shaded: PN² − CN² = OP² − R² as well.'),
      conclude: unit(D['twoSecants-conclude'], 'The conclusion, frozen',
        'Both products are the power of P: PA · PB = PC · PD.'),
      dragged: unit(proofStill('twoSecants', 5, { model: draggedTwoSecants }), 'After dragging P, A and C, frozen',
        'P moved below and both secants turned: four different segments, the two products still equal.'),
    },
"""
ins_before_close("'secant-tangent': {\n      given: unit(D['secantTangent-given']", UNITS)

ORDER = """    'two-secants': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-two-midpoints', 'foot'],
      ['obj3', 'differences-of-squares', 'squares'],
      ['obj4', 'the-first-secant', 'pyth'],
      ['obj5', 'the-second-secant', 'same'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
"""
ins_before_close("'secant-tangent': [\n      ['obj0', 'getting-started'],", ORDER)

EXPL = """    'two-secants': {
      given: note('B and D are where the lines PA and PC meet the circle again.', 'the-statement', 'Learn more about the statement'),
      foot: note('The chord-bisector theorem, twice.', 'the-two-midpoints', 'Learn more about the midpoints'),
      squares: note('Sum times difference, on each secant.', 'differences-of-squares', 'Learn more about the differences of squares'),
      pyth: note('OM² cancels; only OP and the radius remain.', 'the-first-secant', 'Learn more about the first secant'),
      same: note('The same two triangles on the other secant.', 'the-second-secant', 'Learn more about the second secant'),
      conclude: note('Drag A or C: the two products stay equal.', 'why-it-holds', 'Learn more about why it holds'),
    },
"""
ins_before_close("'secant-tangent': {\n      given: note(", EXPL)

INSTR = """    'two-secants': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag $A$ or $C$ round the near side of the circle, $P$ outside it, or $O$; the readout under the canvas keeps $PA \\\\cdot PB$ beside $PC \\\\cdot PD$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each marked angle\\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
"""
ins_before_close("'secant-tangent': [\n      '**▶ Play**", INSTR)

DEMO = """    'two-secants': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'THE MIDPOINTS\\nNext → drops OM and ON: M and N bisect the chords.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'SQUARES\\nEach product is a difference of squares.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'FIRST SECANT\\nPythagoras in OMP and OMA: OP² − R².' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'SECOND SECANT\\nThe same in ONP and ONC: OP² − R² again.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'DONE\\nPA · PB = PC · PD: the power of P.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG A\\nTurn the first secant: its product does not change.' },
          { drag: '[data-handle="A"]', dx: -14, dy: 12, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
"""
ins_before_close("'secant-tangent': {\n      'getting-started': {", DEMO)

HOWTO = """    'two-secants': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each marked angle\\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'A and C slide round the near side of the circle, P and O move freely; the hollow points B and D are computed', pos: { top: '84px', left: 'calc(25% - 180px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: PA · PB beside PC · PD, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The first secant', desc: 'OMP and OMA on the chord AB: PM² − AM² = OP² − R²', pos: { top: '110px', left: 'calc(25% - 40px)' } },
            { n: 2, label: 'The second secant', desc: 'ONP and ONC on the chord CD: PN² − CN² = OP² − R²', pos: { top: '230px', left: 'calc(25% - 90px)' } },
            { n: 3, label: 'The midpoints', desc: 'M and N, feet of the perpendiculars from O, with one and two ticks for the equal halves', pos: { top: '160px', left: 'calc(25% + 80px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Perpendicular bisects the chord, Difference of squares, Pythagorean theorem (twice), Conclusion', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the secants are turned by dragging and the rest follows.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$A$, $C$', 'solid dot on the circle', 'slides round the near side; its secant turns about $P$, and the far end and midpoint follow'],
          ['$P$', 'solid dot', 'moves the outside point; both secants are recomputed, and the power $OP^2 - R^2$ changes'],
          ['$O$', 'solid dot', 'moves the circle (its radius is fixed)'],
          ['$B$, $D$, $M$, $N$', 'hollow dot', 'cannot be dragged: the far ends of the secants and the midpoints of the chords'],
          ['$P$ inside the circle, a near end farther than its far end, the two secants too close, a short chord, or a point out of the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $O$, $P$, $A$, $B$, $C$, $D$, $M$, $N$' },
          { control: '**Measures**', description: 'write each marked angle\\'s size in degrees beside its arc (this proof marks only right angles)' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives $PA \\\\cdot PB$ and $PC \\\\cdot PD$ in the same units. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Perpendicular bisects the chord**, **Difference of squares**, **Pythagorean theorem**, **Conclusion**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses the chord-bisector theorem, an algebraic identity and Pythagoras, never the numbers, which is why the two products agree for every position of the secants.' },
        { title: 'B and D are reflections', content: 'The far end of each secant is drawn as the mirror image of the near end in the perpendicular from O; that is what the chord-bisector theorem says it is, and it keeps both secants through P for every drag.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
"""
ins_before_close("'secant-tangent': {\n      labels:", HOWTO)

open(p, 'w', encoding='utf-8', newline='').write(s)
print('view ok', s.count("'two-secants'"))
