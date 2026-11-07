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

ins_after_line("    { params: { view: 'two-secants' } },", "    { params: { view: 'ceva-theorem' } },\n")

VIEW = r"""    'ceva-theorem': {
      proofKey: 'ceva',
      title: "Ceva's Theorem Proof | Three Concurrent Cevians Step by Step",
      description: "Watch the proof of Ceva's theorem: when three cevians of a triangle pass through one point, the product of the three ratios they cut on the sides is 1, by comparing areas, step by step. Then drag the point and the vertices.",
      h1Title: "Ceva's Theorem",
      url: '/geometry/visual-tools/ceva-theorem',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="8,66 72,66 46,12" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><line x1="8" y1="66" x2="58" y2="37" stroke="#FAC775" stroke-width="1.4"/><line x1="72" y1="66" x2="27" y2="40" stroke="#FAC775" stroke-width="1.4"/><line x1="46" y1="12" x2="38" y2="66" stroke="#FAC775" stroke-width="1.4"/><circle cx="41" cy="48" r="2.6" fill="#E6F1FB"/><text x="40" y="78" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">Ceva</text></svg>`,
      category: 'Proofs',
      subCategory: 'Triangle',
      name: "Ceva's Theorem Proof",
      keywords: [
        "ceva's theorem",
        'ceva theorem proof',
        'concurrent cevians',
        'cevians of a triangle',
        'ratio of areas',
        'triangle centres',
        'concurrency',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the point $P$ anywhere inside the triangle, or a vertex, and watch the three ratios change while their product stays at 1. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `A cevian is a segment from a vertex of a triangle to a point on the opposite side. Ceva's theorem says when three of them pass through one point: if $AD$, $BE$ and $CF$ are cevians of triangle $ABC$ meeting at a point $P$ inside it, then

$$\\frac{BD}{DC} \\cdot \\frac{CE}{EA} \\cdot \\frac{AF}{FB} = 1$$

Each fraction is the ratio in which a cevian cuts the side it lands on, taken going round the triangle in one direction. The converse holds too: if the product is 1, the three cevians are concurrent. That converse is how the theorem is mostly used; the [medians](!/geometry/visual-tools/centroid), for instance, cut each side in the ratio $1 : 1$, so the product is $1$ and they meet at a point.

The proof here is by areas, and uses nothing but the formula half base times height. In the player $P$ is free inside the triangle; $D$, $E$, $F$ are where the lines through $P$ meet the sides. The readout under the canvas shows the three ratios and their product.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'Same Height, Same Ratio',
          content: `The cevian $AD$ splits the triangle into $ABD$ and $ADC$. These two triangles have their bases $BD$ and $DC$ on the same line and the same apex $A$, so they have the same height, and their areas (written with square brackets) are in the ratio of their bases:

$$\\frac{[ABD]}{[ADC]} = \\frac{BD}{DC}$$

This is the same fact that drives the [angle bisector theorem](!/geometry/visual-tools/angle-bisector) page: a ratio of lengths on a line becomes a ratio of areas of triangles standing on them.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'The Same with Apex P',
          content: `The point $P$ lies on $AD$, so the same two bases $BD$ and $DC$ carry a second pair of triangles with apex $P$: $PBD$ and $PDC$, shaded in the player. They too have equal heights, so

$$\\frac{[PBD]}{[PDC]} = \\frac{BD}{DC}$$

Two different pairs of areas, the same ratio.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'Subtracting the Areas',
          content: `If two fractions are equal, $a/b = c/d$, then so is the fraction of their differences, $(a - c)/(b - d) = a/b$. Apply this to the two pairs of areas. Because $P$ is on $AD$, the small triangle $PBD$ sits inside $ABD$ and leaves $ABP$; likewise $PDC$ inside $ADC$ leaves $ACP$:

$$\\frac{BD}{DC} = \\frac{[ABD] - [PBD]}{[ADC] - [PDC]} = \\frac{[ABP]}{[ACP]}$$

So the cevian from $A$ cuts the opposite side in the ratio of the two areas on either side of it at $P$. The segments $BD$ and $DC$ have disappeared; only the triangles around $P$ remain.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'The Other Two Cevians',
          content: `Nothing in the previous three steps was special to the vertex $A$. Running the same argument from $B$ along the cevian $BE$, and from $C$ along $CF$, gives

$$\\frac{CE}{EA} = \\frac{[BCP]}{[BAP]}, \\qquad \\frac{AF}{FB} = \\frac{[CAP]}{[CBP]}$$

In each case the ratio on the side is the ratio of the two triangles around $P$ that touch that side's ends. The player now shows all three triangles $ABP$, $BCP$, $CAP$ that tile the big triangle.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `Multiply the three results:

$$\\frac{BD}{DC} \\cdot \\frac{CE}{EA} \\cdot \\frac{AF}{FB} = \\frac{[ABP]}{[ACP]} \\cdot \\frac{[BCP]}{[BAP]} \\cdot \\frac{[CAP]}{[CBP]} = 1$$

Each of the three areas appears exactly once in a numerator and once in a denominator, so the whole product cancels to $1$. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, same-height triangles twice, a subtraction of equal ratios, the same argument twice more, and a multiplication.

The converse follows by a short contradiction: if the product is $1$ but the third cevian missed the point where the first two meet, the cevian that does pass through that point would cut the side in the same ratio, forcing it to land at the same point.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Drag $P$ anywhere inside the triangle: the three cevians swing, the three feet $D$, $E$, $F$ slide along the sides, the three ratios in the readout change, and their product stays at $1.00$. Drag $A$, $B$ or $C$ to reshape the triangle. Pull $P$ towards a side and watch one ratio grow large while another shrinks to compensate.

The player keeps $P$ strictly inside the triangle, so that all three feet lie on the sides themselves; Ceva's theorem also holds for $P$ outside, with one or two feet on the extensions of the sides, but then signed ratios are needed, and the player keeps to the inside case. A drag that would carry a vertex out of the frame or flatten the triangle is refused.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **The triangle centres at once.** By the converse, the medians are concurrent (each ratio is 1), the angle bisectors are concurrent at the [incentre](!/geometry/visual-tools/incentre) (the angle bisector theorem makes the product $\\tfrac{c}{b} \\cdot \\tfrac{a}{c} \\cdot \\tfrac{b}{a} = 1$), and the altitudes are concurrent at the [orthocentre](!/geometry/visual-tools/orthocentre) (the feet cut the sides in ratios of cosines that cancel). Each of those pages proves its concurrency directly; Ceva proves all three with one calculation.
• **Barycentric coordinates.** The areas $[BCP]$, $[CAP]$, $[ABP]$, divided by the whole, are the barycentric coordinates of $P$; the proof shows that each cevian ratio is a quotient of two of them.
• **Menelaus.** The companion theorem of Menelaus says the same product is $-1$ (with signed lengths) when $D$, $E$, $F$ lie on one line instead of three concurrent lines; it has a similar area proof.
• **Gergonne and Nagel points.** The cevians to the points where the incircle touches the sides are concurrent (the [two tangents](!/geometry/visual-tools/two-tangents) from each vertex are equal, so the product is 1); so are the cevians to the points of contact of the excircles.
• **Trigonometric form.** Replacing each ratio by the ratio of sines of the angles the cevian makes at its vertex gives the trigonometric Ceva, often easier to apply.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: "What does Ceva's theorem say?",
          answer: 'If three cevians AD, BE, CF of a triangle pass through one point, then (BD/DC)(CE/EA)(AF/FB) = 1; and conversely, if the product is 1, the three cevians are concurrent.'
        },
        obj2: {
          question: "How is Ceva's theorem proved with areas?",
          answer: 'Triangles on the bases BD and DC with the same apex have areas in the ratio BD/DC, first with apex A and then with apex P. Subtracting the small pair from the large pair gives BD/DC = [ABP]/[ACP]. The other two ratios are similar quotients of the three triangles around P, and the product cancels to 1.'
        },
        obj3: {
          question: 'What is a cevian?',
          answer: 'A segment from a vertex of a triangle to a point on the opposite side (or its extension). Medians, angle bisectors and altitudes are all cevians.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Ceva's Theorem Proof Visualizer",
          "description": "Step-by-step interactive proof of Ceva's theorem by comparing areas of triangles with equal heights, with a draggable concurrency point and vertices.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/ceva-theorem",
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
            { "@type": "ListItem", "position": 4, "name": "Ceva's Theorem", "item": "https://www.learnmathclass.com/geometry/visual-tools/ceva-theorem" }
          ]
        }
      }
    },
"""
ins_before_close('"name": "Two Secants from a Point", "item"', VIEW, close='  };')

ins_after_line("  const draggedTwoSecants = {", "  // P pulled towards B: BD/DC small, AF/FB large, the product still 1\n  const draggedCeva = { ...PROOFS.ceva.model, points: { ...PROOFS.ceva.model.points, P: { x: 340, y: 270 } } }\n")

UNITS = """    'ceva-theorem': {
      given: unit(D['ceva-given'], 'Opening scene, frozen',
        'The three cevians AD, BE, CF through P.'),
      base: unit(D['ceva-base'], 'Same height, same ratio, frozen',
        'ABD and ADC stand on BD and DC with the apex A: [ABD]/[ADC] = BD/DC.'),
      apex: unit(D['ceva-apex'], 'The same with apex P, frozen',
        'PBD and PDC shaded: [PBD]/[PDC] = BD/DC too.'),
      cancel: unit(D['ceva-cancel'], 'Subtracting the areas, frozen',
        'ABP and ACP shaded: BD/DC = [ABP]/[ACP].'),
      others: unit(D['ceva-others'], 'The other two cevians, frozen',
        'The three triangles around P: CE/EA = [BCP]/[BAP], AF/FB = [CAP]/[CBP].'),
      conclude: unit(D['ceva-conclude'], 'The conclusion, frozen',
        'Each area once above and once below: the product is 1.'),
      dragged: unit(proofStill('ceva', 5, { model: draggedCeva }), 'After dragging P, frozen',
        'P pulled towards B: BD/DC small, AF/FB large, the product still 1.'),
    },
"""
ins_before_close("'two-secants': {\n      given: unit(D['twoSecants-given']", UNITS)

ORDER = """    'ceva-theorem': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'same-height-same-ratio', 'base'],
      ['obj3', 'the-same-with-apex-p', 'apex'],
      ['obj4', 'subtracting-the-areas', 'cancel'],
      ['obj5', 'the-other-two-cevians', 'others'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
"""
ins_before_close("'two-secants': [\n      ['obj0', 'getting-started'],", ORDER)

EXPL = """    'ceva-theorem': {
      given: note('Drag P: the three feet slide along the sides.', 'the-statement', 'Learn more about the statement'),
      base: note('Same height, so areas go as the bases.', 'same-height-same-ratio', 'Learn more about same-height triangles'),
      apex: note('The same two bases, seen from P.', 'the-same-with-apex-p', 'Learn more about the apex P'),
      cancel: note('Equal ratios survive subtraction.', 'subtracting-the-areas', 'Learn more about subtracting the areas'),
      others: note('Three triangles around P, three ratios.', 'the-other-two-cevians', 'Learn more about the other cevians'),
      conclude: note('Drag P: the product in the readout stays 1.', 'why-it-holds', 'Learn more about why it holds'),
    },
"""
ins_before_close("'two-secants': {\n      given: note(", EXPL)

INSTR = """    'ceva-theorem': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag $P$ anywhere inside the triangle, or $A$, $B$ or $C$; the readout under the canvas shows the three ratios and their product. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each marked angle\\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
"""
ins_before_close("'two-secants': [\n      '**▶ Play**", INSTR)

DEMO = """    'ceva-theorem': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'SAME HEIGHT\\nNext → : ABD and ADC share the apex A, so [ABD]/[ADC] = BD/DC.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'APEX P\\nThe same bases seen from P: [PBD]/[PDC] = BD/DC.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'SUBTRACT\\nWhat is left is ABP and ACP: BD/DC = [ABP]/[ACP].' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE OTHERS\\nThe same from B and from C: three triangles around P.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'MULTIPLY\\nEach area once above and once below: the product is 1.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG P\\nPull P towards B: the ratios change, the product does not.' },
          { drag: '[data-handle="P"]', dx: 30, dy: 12, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
"""
ins_before_close("'two-secants': {\n      'getting-started': {", DEMO)

HOWTO = """    'ceva-theorem': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each marked angle\\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'P moves anywhere inside the triangle, A, B and C move freely; the hollow feet D, E, F follow', pos: { top: '150px', left: 'calc(25% + 40px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the three ratios BD/DC, CE/EA, AF/FB and their product, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The triangles around P', desc: 'ABP, BCP and CAP: each cevian ratio is a quotient of two of their areas', pos: { top: '236px', left: 'calc(25% - 110px)' } },
            { n: 2, label: 'The small triangles', desc: 'PBD and PDC, the first pair with apex P; subtracted from ABD and ADC', pos: { top: '236px', left: 'calc(25% + 60px)' } },
            { n: 3, label: 'The three feet', desc: 'D, E, F, where the cevians through P land on the sides', pos: { top: '140px', left: 'calc(25% + 110px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Same height (twice), Subtracting, Same argument, Multiplying', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the point and the triangle are shaped by dragging and the feet follow.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$P$', 'solid dot', 'moves anywhere inside the triangle; the three cevians and their feet $D$, $E$, $F$ follow'],
          ['$A$, $B$, $C$', 'solid dot', 'reshape the triangle; $P$ stays where it is, the feet are recomputed'],
          ['$D$, $E$, $F$', 'hollow dot', 'cannot be dragged: where the lines through $P$ meet the sides'],
          ['$P$ on or outside a side, a flattened triangle, or a vertex out of the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$, $B$, $C$, $P$, $D$, $E$, $F$' },
          { control: '**Measures**', description: 'write each marked angle\\'s size in degrees beside its arc (this proof marks no angles)' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the three ratios and their product. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Same height**, **Subtracting**, **Same argument**, **Multiplying**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses only that triangles of equal height have areas in the ratio of their bases, never the numbers, which is why the product is 1 for every position of P.' },
        { title: 'The feet are computed', content: 'D, E and F are where the lines from the vertices through P meet the opposite sides; that is what makes the three cevians concurrent by construction, which is the hypothesis of the theorem.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
"""
ins_before_close("'two-secants': {\n      labels:", HOWTO)

open(p, 'w', encoding='utf-8', newline='').write(s)
print('view ok', s.count("'ceva-theorem'"))
