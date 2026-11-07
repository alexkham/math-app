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

ins_after_line("    { params: { view: 'ceva-theorem' } },", "    { params: { view: 'menelaus-theorem' } },\n")

VIEW = r"""    'menelaus-theorem': {
      proofKey: 'menelaus',
      title: "Menelaus' Theorem Proof | A Line Across a Triangle Step by Step",
      description: "Watch the proof of Menelaus' theorem: when a line crosses the three sides of a triangle (one of them extended), the product of the three ratios it cuts on them is 1, by comparing areas, step by step. Then drag the line and the vertices.",
      h1Title: "Menelaus' Theorem",
      url: '/geometry/visual-tools/menelaus-theorem',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="8,66 56,66 42,14" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><line x1="56" y1="66" x2="72" y2="66" stroke="#E6F1FB" stroke-width="1.4" stroke-dasharray="3 2"/><line x1="26" y1="30" x2="74" y2="70" stroke="#FAC775" stroke-width="1.6"/><circle cx="31" cy="34" r="2.4" fill="#E6F1FB"/><circle cx="49" cy="49" r="2.4" fill="#E6F1FB"/><circle cx="70" cy="66" r="2.4" fill="#E6F1FB"/><text x="22" y="78" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">Menelaus</text></svg>`,
      category: 'Proofs',
      subCategory: 'Triangle',
      name: "Menelaus' Theorem Proof",
      keywords: [
        "menelaus' theorem",
        'menelaus theorem proof',
        'transversal of a triangle',
        'collinear points',
        'ratio of areas',
        'collinearity',
        "ceva's theorem",
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag $D$ along the side $BC$ or $F$ along the extension of $AB$ to swing the line, or drag a vertex, and watch the three ratios change while their product stays at 1. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `A line that is not parallel to any side of a triangle and misses its vertices crosses all three side lines. If it enters the triangle it crosses two sides between their ends and the third one on its extension; such a line is called a transversal. Menelaus' theorem says: if a line meets the sides $BC$, $CA$ of triangle $ABC$ at $D$, $E$ and the line $AB$ at $F$, then

$$\\frac{BD}{DC} \\cdot \\frac{CE}{EA} \\cdot \\frac{AF}{FB} = 1$$

The three fractions are the same ones as in [Ceva's theorem](!/geometry/visual-tools/ceva-theorem), taken going round the triangle in one direction; there the three points come from three concurrent lines, here they lie on one line. With signed lengths the product is $-1$ for Menelaus and $+1$ for Ceva, which is how the two are told apart; the player uses plain lengths. The converse holds too: if the product is 1 and exactly one (or all three) of the points lies on an extension, the three points are collinear.

The proof here is by areas, like the one for Ceva. In the player $D$ slides along $BC$ and $F$ along the extension of $AB$ beyond $B$; $E$ is where the line through them meets $CA$. The readout under the canvas shows the three ratios and their product.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'Cutting the Side BC',
          content: `The triangles $FBD$ and $FDC$ have their bases $BD$ and $DC$ on the same line and the same apex $F$, so they have the same height, and their areas (written with square brackets) are in the ratio of their bases:

$$\\frac{[FBD]}{[FDC]} = \\frac{BD}{DC}$$

This is the one fact the whole proof uses, the same one that drives the [angle bisector theorem](!/geometry/visual-tools/angle-bisector) and [Ceva](!/geometry/visual-tools/ceva-theorem): a ratio of lengths along a line is a ratio of areas of triangles standing on them with a common apex.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'Cutting the Side CA',
          content: `The same apex $F$ serves for the second side. The bases $CE$ and $EA$ lie on the line $CA$, so the triangles $FCE$ and $FEA$ have the same height from $F$, and

$$\\frac{[FCE]}{[FEA]} = \\frac{CE}{EA}$$`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'Cutting the Line AB',
          content: `The third pair of segments, $AF$ and $FB$, lies on the line $AB$, and $F$ is one of their ends, so $F$ cannot be the apex this time. The point $E$ is: it lies on the transversal and not on $AB$. The triangles $EAF$ and $EFB$ have the same height from $E$, so

$$\\frac{[EAF]}{[EFB]} = \\frac{AF}{FB}$$

Since $F$ lies beyond $B$, the segment $FB$ is the short piece and $AF$ the long one; the ratio is larger than 1 in the opening figure.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'Pairing the Areas',
          content: `Multiply the three results:

$$\\frac{BD}{DC} \\cdot \\frac{CE}{EA} \\cdot \\frac{AF}{FB} = \\frac{[FBD]}{[FDC]} \\cdot \\frac{[FCE]}{[FEA]} \\cdot \\frac{[EAF]}{[EFB]}$$

The area $[FEA]$ is the same as $[EAF]$, so it cancels. Four areas are left, and they pair up along the transversal itself. The triangles $FBD$ and $FBE$ stand on the bases $FD$ and $FE$, which lie on the transversal, with the common apex $B$; the triangles $FCE$ and $FCD$ stand on $FE$ and $FD$ with the common apex $C$. Same height again:

$$\\frac{[FBD]}{[FBE]} = \\frac{FD}{FE}, \\qquad \\frac{[FCE]}{[FCD]} = \\frac{FE}{FD}$$

The player highlights the four triangles; $FBE$ is the one shaded at the previous step as $EFB$.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `Putting the two pairs together,

$$\\frac{BD}{DC} \\cdot \\frac{CE}{EA} \\cdot \\frac{AF}{FB} = \\frac{[FBD]}{[FBE]} \\cdot \\frac{[FCE]}{[FCD]} = \\frac{FD}{FE} \\cdot \\frac{FE}{FD} = 1$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, then same-height triangles five times (three along the sides, two along the transversal), and a multiplication. Nothing else is needed: no similar triangles, no parallels, no measurement.

The usual textbook proof instead draws the perpendiculars from $A$, $B$, $C$ to the transversal and uses three pairs of similar right triangles; the area proof avoids similarity, which is why it fits this section, where similarity has no page yet.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Drag $D$ along $BC$ or $F$ along the extension of $AB$: the transversal swings, $E$ slides along $CA$, the three ratios in the readout change, and their product stays at $1.00$. Drag $A$, $B$ or $C$ to reshape the triangle; $D$ and $F$ keep their positions along their lines and $E$ is recomputed. Pull $F$ far out and watch $AF/FB$ sink towards 1 while $CE/EA$ shrinks to make up for it.

The player keeps $F$ beyond $B$ and $D$ on the side $BC$ itself, which forces $E$ onto the side $CA$ itself: a line through one side and one extension always crosses the second side. The theorem also holds when all three points lie on extensions (the line misses the triangle), with the same proof; the player keeps to the case where the line enters the triangle. A drag that would carry $F$ or a vertex out of the frame, or bring two of the points too close, is refused.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **A test for collinearity.** The converse is the theorem's main use: to show that three points on the side lines of a triangle lie on one line, compute the three ratios and check that the product is 1 with an odd number of the points on extensions. Many classical collinearities (the Simson line, the Pascal line, the line through the three external centres of similitude of three circles) are proved this way.
• **The dual of Ceva.** [Ceva's theorem](!/geometry/visual-tools/ceva-theorem) uses the same three ratios for three concurrent cevians; Menelaus uses them for three collinear points. The two proofs by areas share their first step and differ afterwards: Ceva subtracts areas around $P$, Menelaus pairs them along the transversal.
• **Transversal of a cevian.** Applying Menelaus to the triangle cut off by a cevian gives the ratio in which a second cevian divides the first; for two [medians](!/geometry/visual-tools/centroid) this gives the $2 : 1$ ratio at the centroid in one line.
• **Signed form.** With directed lengths along each side the product is $-1$, which records that an odd number of the points lie on extensions; the player, working with plain lengths, shows the value 1.
• **Trigonometric form.** Replacing each ratio by a ratio of sines of the angles at the opposite vertex gives a trigonometric Menelaus, parallel to the trigonometric Ceva.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: "What does Menelaus' theorem say?",
          answer: 'If a line meets the sides BC, CA of a triangle ABC at D, E and the line AB at F, then (BD/DC)(CE/EA)(AF/FB) = 1 (with signed lengths, −1); and conversely, if the product is 1 and an odd number of the points lie on extensions, the three points are collinear.'
        },
        obj2: {
          question: "How is Menelaus' theorem proved with areas?",
          answer: 'Each ratio on a side equals a ratio of areas of two triangles with the same apex: BD/DC = [FBD]/[FDC], CE/EA = [FCE]/[FEA], AF/FB = [EAF]/[EFB]. After [FEA] cancels, the four remaining areas pair up along the transversal, [FBD]/[FBE] = FD/FE and [FCE]/[FCD] = FE/FD, and the product is 1.'
        },
        obj3: {
          question: "How do Menelaus' and Ceva's theorems differ?",
          answer: 'Both use the same three ratios on the sides of a triangle. In Ceva the three points come from three cevians through one point and the signed product is +1; in Menelaus the three points lie on one line and the signed product is −1.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Menelaus' Theorem Proof Visualizer",
          "description": "Step-by-step interactive proof of Menelaus' theorem by comparing areas of triangles with equal heights, with a draggable transversal and vertices.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/menelaus-theorem",
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
            { "@type": "ListItem", "position": 4, "name": "Menelaus' Theorem", "item": "https://www.learnmathclass.com/geometry/visual-tools/menelaus-theorem" }
          ]
        }
      }
    },
"""
ins_before_close('"name": "Ceva\'s Theorem", "item"', VIEW, close='  };')

ins_after_line("  const draggedCeva = {", "  // F pulled further out along AB: AF/FB nearer 1, CE/EA smaller, the product still 1\n  const draggedMenelaus = { ...PROOFS.menelaus.model, params: { ...PROOFS.menelaus.model.params, u: 1.6 } }\n")

UNITS = """    'menelaus-theorem': {
      given: unit(D['menelaus-given'], 'Opening scene, frozen',
        'The transversal through D, E and F; F beyond B on the extension of AB.'),
      cutbc: unit(D['menelaus-cutbc'], 'Cutting the side BC, frozen',
        'FBD and FDC shaded: [FBD]/[FDC] = BD/DC.'),
      cutca: unit(D['menelaus-cutca'], 'Cutting the side CA, frozen',
        'FCE and FEA shaded: [FCE]/[FEA] = CE/EA.'),
      cutab: unit(D['menelaus-cutab'], 'Cutting the line AB, frozen',
        'EAF and EFB with the apex E: [EAF]/[EFB] = AF/FB.'),
      pair: unit(D['menelaus-pair'], 'Pairing the areas, frozen',
        'The four areas left, paired along the transversal: FD/FE and FE/FD.'),
      conclude: unit(D['menelaus-conclude'], 'The conclusion, frozen',
        'The product is (FD/FE)(FE/FD) = 1.'),
      dragged: unit(proofStill('menelaus', 5, { model: draggedMenelaus }), 'After dragging F, frozen',
        'F pulled further out: AF/FB nearer 1, CE/EA smaller, the product still 1.'),
    },
"""
ins_before_close("'ceva-theorem': {\n      given: unit(D['ceva-given']", UNITS)

ORDER = """    'menelaus-theorem': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'cutting-the-side-bc', 'cutbc'],
      ['obj3', 'cutting-the-side-ca', 'cutca'],
      ['obj4', 'cutting-the-line-ab', 'cutab'],
      ['obj5', 'pairing-the-areas', 'pair'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
"""
ins_before_close("'ceva-theorem': [\n      ['obj0', 'getting-started'],", ORDER)

EXPL = """    'menelaus-theorem': {
      given: note('Drag D or F: the line swings, E follows.', 'the-statement', 'Learn more about the statement'),
      cutbc: note('Same height from F, so areas go as the bases.', 'cutting-the-side-bc', 'Learn more about cutting BC'),
      cutca: note('The same apex F, the second side.', 'cutting-the-side-ca', 'Learn more about cutting CA'),
      cutab: note('F is an end here, so the apex is E.', 'cutting-the-line-ab', 'Learn more about cutting AB'),
      pair: note('What is left pairs up along the transversal.', 'pairing-the-areas', 'Learn more about pairing the areas'),
      conclude: note('Drag the line: the product in the readout stays 1.', 'why-it-holds', 'Learn more about why it holds'),
    },
"""
ins_before_close("'ceva-theorem': {\n      given: note(", EXPL)

INSTR = """    'menelaus-theorem': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag $D$ along $BC$ or $F$ along the extension of $AB$, or $A$, $B$ or $C$; the readout under the canvas shows the three ratios and their product. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each marked angle\\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
"""
ins_before_close("'ceva-theorem': [\n      '**▶ Play**", INSTR)

DEMO = """    'menelaus-theorem': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'SIDE BC\\nNext → : FBD and FDC share the apex F, so [FBD]/[FDC] = BD/DC.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'SIDE CA\\nThe same apex F: [FCE]/[FEA] = CE/EA.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'LINE AB\\nNow the apex is E: [EAF]/[EFB] = AF/FB.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'PAIR UP\\n[FEA] cancels; the rest pair up along the transversal.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'MULTIPLY\\n(FD/FE)(FE/FD) = 1.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG F\\nPull F further out: the ratios change, the product does not.' },
          { drag: '[data-handle="F"]', dx: 22, dy: 0, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
"""
ins_before_close("'ceva-theorem': {\n      'getting-started': {", DEMO)

HOWTO = """    'menelaus-theorem': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each marked angle\\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'D slides along BC, F along the extension of AB; A, B and C move freely; the hollow point E follows', pos: { top: '150px', left: 'calc(25% + 60px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the three ratios BD/DC, CE/EA, AF/FB and their product, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The transversal', desc: 'the dashed line through D, E and F; FD and FE are the bases of the last two pairs', pos: { top: '110px', left: 'calc(25% + 40px)' } },
            { n: 2, label: 'The shaded triangles', desc: 'FBD and FDC on BC, FCE and FEA on CA, EFB on AB: every ratio is a quotient of two of their areas', pos: { top: '236px', left: 'calc(25% - 110px)' } },
            { n: 3, label: 'F beyond B', desc: 'the third point, on the extension of AB; AF is the long piece, FB the short one', pos: { top: '270px', left: 'calc(25% + 120px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Same height (five times), Multiplying', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the line and the triangle are shaped by dragging and the third point follows.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$D$', 'solid dot', 'slides along the side $BC$; the transversal swings about $F$ and $E$ follows'],
          ['$F$', 'solid dot', 'slides along the extension of $AB$ beyond $B$; the transversal swings about $D$ and $E$ follows'],
          ['$A$, $B$, $C$', 'solid dot', 'reshape the triangle; $D$ and $F$ keep their places along their lines, $E$ is recomputed'],
          ['$E$', 'hollow dot', 'cannot be dragged: where the line $DF$ meets $CA$'],
          ['$F$ or a vertex out of the frame, two points too close, a flattened triangle', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$, $B$, $C$, $D$, $E$, $F$' },
          { control: '**Measures**', description: 'write each marked angle\\'s size in degrees beside its arc (this proof marks no angles)' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the three ratios and their product. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Same height**, **Multiplying**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses only that triangles of equal height have areas in the ratio of their bases, never the numbers, which is why the product is 1 for every position of the line.' },
        { title: 'The third point is computed', content: 'E is where the line through D and F meets CA; that is what makes the three points collinear by construction, which is the hypothesis of the theorem.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
"""
ins_before_close("'ceva-theorem': {\n      labels:", HOWTO)

open(p, 'w', encoding='utf-8', newline='').write(s)
print('view ok', s.count("'menelaus-theorem'"))
