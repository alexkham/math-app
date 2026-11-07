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
    assert s.count(anchor) == 1, anchor
    i = s.index(anchor)
    j = s.index(nl + close + nl, i) + len(nl)
    s = s[:j] + block.replace('\n', nl) + s[j:]

# 1. paths
ins_after_line("    { params: { view: 'sss-congruence' } },", "    { params: { view: 'asa-congruence' } },\n")

# 2. viewConfig
VIEW = r"""    'asa-congruence': {
      proofKey: 'asaCongruence',
      title: 'ASA Congruence Proof | Two Angles and the Side Between Them Step by Step',
      description: 'Watch the proof that two triangles with two equal angles and the equal side between them are congruent, derived from the side-angle-side criterion by contradiction, step by step. Then slide the cut-off point and drag the vertices.',
      h1Title: 'The ASA Congruence Criterion',
      url: '/geometry/visual-tools/asa-congruence',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="10,62 70,62 34,14" fill="#85B7EB" fill-opacity="0.35" stroke="#E6F1FB" stroke-width="1.4"/><polygon points="10,62 70,62 22,38" fill="#FAC775" fill-opacity="0.5" stroke="#E6F1FB" stroke-width="1"/><path d="M 22 62 A 12 12 0 0 0 16 53" fill="none" stroke="#FAC775" stroke-width="1.6"/><path d="M 58 62 A 12 12 0 0 1 62 51" fill="none" stroke="#B5D4F4" stroke-width="1.6"/><circle cx="22" cy="38" r="2.4" fill="#FAC775"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">ASA from SAS</text></svg>`,
      category: 'Proofs',
      subCategory: 'Triangle',
      name: 'ASA Congruence Proof',
      keywords: [
        'ASA congruence',
        'angle side angle',
        'congruent triangles proof',
        'triangle congruence criteria',
        'ASA from SAS',
        'euclid I.26',
        'proof by contradiction',
        'congruence theorems',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then slide the point $E$ along the side $AC$ and watch the angle $ABE$ fall short of the angle $ABC$ for every position. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `Two triangles are congruent when one can be laid exactly on the other. The congruence criteria say which three measurements are enough to force that. Side-angle-side is the one taken as given on these pages; the [SSS congruence](!/geometry/visual-tools/sss-congruence) page derived side-side-side from it. This page derives angle-side-angle:

$$\\angle A = \\angle A', \\; AB = A'B', \\; \\angle B = \\angle B' \\implies ABC \\cong A'B'C'$$

two angles and the side between them determine a triangle. It is the first half of Proposition 26 of Book I of Euclid's Elements, and the proof is Euclid's: suppose the triangles were not congruent, and find a part equal to its whole.

The player shows the first triangle $ABC$ with its angle $\\alpha$ at $A$, its angle $\\beta$ at $B$ and the side $AB$ between them marked with one tick. The second triangle is not drawn; everything known about it is carried by the point $E$, which is placed on $AC$ so that $AE$ equals the second triangle's side $A'C'$. The readout under the canvas shows the angles $ABC$ and $ABE$.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'Suppose the Sides Differ',
          content: `The whole proof comes down to one length. If $AC = A'C'$ then the two triangles agree in $AB = A'B'$, $AC = A'C'$ and the angle $\\alpha$ between those sides, and side-angle-side makes them congruent at once. So it is enough to show $AC = A'C'$.

The proof is by contradiction, the same shape of argument as on the [tangent perpendicular to radius](!/geometry/visual-tools/tangent-radius) page. Suppose the two sides are not equal. Then one of them is longer; the two triangles play the same role, so there is no loss in supposing $AC$ is the longer. The shorter length $A'C'$ then fits inside $AC$: measure it off from $A$ along $AC$ and call the end $E$. The player marks $AE$ with two ticks, draws $E$ as a draggable point strictly between $A$ and $C$, and joins $B$ to $E$.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'Two Sides and the Angle Between',
          content: `Compare the new triangle $ABE$ with the second triangle $A'B'C'$:

$$AB = A'B', \\qquad AE = A'C', \\qquad \\angle BAE = \\angle B'A'C' = \\alpha$$

The first is given, the second is how $E$ was chosen, and the third holds because $E$ lies on $AC$, so the angle $BAE$ is the angle $BAC$ itself. Two sides and the included angle agree, so by side-angle-side $ABE \\cong A'B'C'$. Congruent triangles have equal corresponding angles, and the angle at $B$ in $ABE$ corresponds to the angle at $B'$:

$$\\angle ABE = \\angle A'B'C' = \\beta$$

The player shades the triangle $ABE$ and marks its angle at $B$ as $\\beta'$: the angle that the supposition says equals $\\beta$.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'A Part of the Angle',
          content: `Now look at the picture instead of the supposition. $E$ lies on the segment $AC$ strictly between $A$ and $C$, so the ray from $B$ through $E$ runs inside the angle $ABC$, between the rays $BA$ and $BC$. The angle $ABE$ is therefore a part of the angle $ABC$, and a part is less than the whole:

$$\\angle ABE < \\angle ABC = \\beta$$

The readout makes the same comparison in degrees for the figure on screen, and the inequality holds wherever $E$ is slid along $AC$.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'The Contradiction',
          content: `The two previous sections say opposite things about the same angle. From the supposition, $\\angle ABE = \\beta$. From the picture, $\\angle ABE < \\beta$. An angle cannot both equal $\\beta$ and be smaller than $\\beta$, so the supposition was false: $AC$ is not longer than $A'C'$.

The supposition also covered the other case. If $A'C'$ were the longer side, the same construction in the second triangle, cutting $A'E' = AC$ off $A'C'$, gives $A'B'E' \\cong ABC$ by side-angle-side and the same impossible equality of a part with its whole. So neither side is longer than the other, and $AC = A'C'$.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `With $AC = A'C'$ established, the two triangles agree in $AB = A'B'$, $AC = A'C'$ and the angle $\\alpha$ between those sides, and side-angle-side gives $ABC \\cong A'B'C'$. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given data, a supposition, side-angle-side, a part being less than its whole, the contradiction, and side-angle-side again.

The shape of the argument is worth noticing. Nothing is measured and nothing is constructed in the given triangles; the only construction, the point $E$, lives inside the supposition, and the proof shows that it cannot exist. Side-angle-side is used twice, once to turn the supposition into an equality of angles and once, after the supposition has collapsed, to finish.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Slide $E$ along $AC$: the shaded triangle $ABE$ grows and shrinks, and the readout shows the angle $ABE$ staying below the angle $ABC$ the whole way, approaching it only as $E$ approaches $C$. Drag $A$, $B$ or $C$ to reshape the triangle; $E$ keeps its place as a fraction of the way along $AC$.

The player keeps $E$ strictly between $A$ and $C$, away from both ends, so that the part is always a visible part; a drag that would carry a vertex out of the frame or flatten the triangle is refused.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **Used on these pages.** Angle-side-angle carried the [parallelogram opposite sides](!/geometry/visual-tools/parallelogram-sides) page, where a diagonal and two pairs of alternate angles make two congruent triangles, and the [parallelogram diagonals](!/geometry/visual-tools/parallelogram-diagonals) page.
• **AAS.** Two angles and a side not between them also determine a triangle: by the [angle sum](!/geometry/visual-tools/triangle-angle-sum) the third angle is determined too, and then the given side is between two known angles. This is the second half of Euclid's Proposition 26.
• **The converse of the isosceles theorem.** If two angles of a triangle are equal, the sides opposite them are equal: the triangle is congruent to itself read backwards, by angle-side-angle on the base.
• **Surveying.** A length that cannot be reached, across a river or up a cliff, is fixed by one measured base and two sighted angles, because angle-side-angle leaves the triangle no freedom.
• **Three criteria.** Side-angle-side, side-side-side and angle-side-angle are the three criteria of Euclid's first book; together with angle-angle-side they cover every way three independent measurements can fix a triangle, apart from the right-triangle case of hypotenuse and leg.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What is the ASA congruence criterion?',
          answer: 'If two angles of one triangle and the side between them equal two angles of another triangle and the side between them, the triangles are congruent: the remaining sides and angle agree as well.'
        },
        obj2: {
          question: 'How is ASA proved from SAS?',
          answer: 'By contradiction. If the sides next to the equal angles differed, cutting the shorter length off the longer side would give, by SAS, a smaller triangle with the same angle at the far vertex; but that angle is only a part of the original one. So the sides are equal and SAS finishes.'
        },
        obj3: {
          question: 'What is the difference between ASA and AAS?',
          answer: 'In ASA the given side lies between the two given angles; in AAS it does not. AAS follows from ASA, because the angle sum fixes the third angle, after which the given side is between two known angles.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "ASA Congruence Proof Visualizer",
          "description": "Step-by-step interactive proof that two triangles with two equal angles and the equal included side are congruent, derived from SAS by contradiction, with a draggable cut-off point and vertices.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/asa-congruence",
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
            { "@type": "ListItem", "position": 4, "name": "The ASA Congruence Criterion", "item": "https://www.learnmathclass.com/geometry/visual-tools/asa-congruence" }
          ]
        }
      }
    },
"""
ins_before_close('"name": "The SSS Congruence Criterion", "item"', VIEW, close='  };')

# 3. dragged const
ins_after_line("  const draggedSSS = {", "  // E slid towards A and C pulled right: a smaller part of a different whole\n  const draggedASA = { ...PROOFS.asaCongruence.model, points: { ...PROOFS.asaCongruence.model.points, C: { x: 310, y: 110 } }, params: { t: 0.38 } }\n")

# 4. unitsByView
UNITS = """    'asa-congruence': {
      given: unit(D['asaCongruence-given'], 'Opening scene, frozen',
        'Triangle ABC with the angle α at A, the angle β at B and the side AB between them.'),
      suppose: unit(D['asaCongruence-suppose'], 'Supposing the sides differ, frozen',
        'E on AC with AE = A′C′ (two ticks), and the segment BE.'),
      sas: unit(D['asaCongruence-sas'], 'Two sides and the angle between, frozen',
        'ABE shaded: congruent to A′B′C′ by SAS, so its angle at B, marked β′, would equal β.'),
      inside: unit(D['asaCongruence-inside'], 'A part of the angle, frozen',
        'BE runs inside the angle ABC: β′ is only a part of β.'),
      contra: unit(D['asaCongruence-contra'], 'The contradiction, frozen',
        'β′ cannot both equal β and be smaller: the supposition fails, AC = A′C′.'),
      conclude: unit(D['asaCongruence-conclude'], 'The conclusion, frozen',
        'AB, AC and the angle α between them agree: ABC ≅ A′B′C′ by SAS.'),
      dragged: unit(proofStill('asaCongruence', 5, { model: draggedASA }), 'After dragging E and C, frozen',
        'E slid towards A and C pulled right: a smaller part of a different whole, still short of it.'),
    },
"""
ins_before_close("'sss-congruence': {\n      given: unit(D['sssCongruence-given']".replace('\n', nl), UNITS)

# 5. orderByView
ORDER = """    'asa-congruence': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'suppose-the-sides-differ', 'suppose'],
      ['obj3', 'two-sides-and-the-angle-between', 'sas'],
      ['obj4', 'a-part-of-the-angle', 'inside'],
      ['obj5', 'the-contradiction', 'contra'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
"""
ins_before_close("'sss-congruence': [\n      ['obj0', 'getting-started'],".replace('\n', nl), ORDER)

# 6. EXPLANATIONS
EXPL = """    'asa-congruence': {
      given: note('The second triangle is not drawn; E carries its side A′C′.', 'the-statement', 'Learn more about the statement'),
      suppose: note('Enough to show AC = A′C′; suppose not.', 'suppose-the-sides-differ', 'Learn more about the supposition'),
      sas: note('AB = A′B′, AE = A′C′ and the angle α between them.', 'two-sides-and-the-angle-between', 'Learn more about the SAS step'),
      inside: note('Slide E: the part never reaches the whole.', 'a-part-of-the-angle', 'Learn more about the part and the whole'),
      contra: note('Equal and smaller at once: impossible.', 'the-contradiction', 'Learn more about the contradiction'),
      conclude: note('SAS once more, now with AC = A′C′.', 'why-it-holds', 'Learn more about why it holds'),
    },
"""
ins_before_close("'sss-congruence': {\n      given: note(".replace('\n', nl), EXPL)

# 7. INSTRUCTIONS
INSTR = """    'asa-congruence': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Slide $E$ along $AC$, or drag $A$, $B$ or $C$; the readout under the canvas compares the angle $ABE$ with the angle $ABC$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each marked angle\\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
"""
ins_before_close("'sss-congruence': [\n      '**▶ Play**".replace('\n', nl), INSTR)

# 8. DEMOS
DEMO = """    'asa-congruence': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'SUPPOSE\\nNext → supposes AC longer and cuts AE = A′C′ off it.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'SAS\\nABE ≅ A′B′C′, so its angle at B would equal β.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'A PART\\nBut BE runs inside the angle ABC: the part is less than the whole.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'CONTRADICTION\\nEqual and smaller at once: the sides cannot differ.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'SAS AGAIN\\nWith AC = A′C′ the triangles are congruent.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'SLIDE E\\nPull E towards A: the part shrinks, and never reaches the whole.' },
          { drag: '[data-handle="E"]', dx: -14, dy: 24, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
"""
ins_before_close("'sss-congruence': {\n      'getting-started': {".replace('\n', nl), DEMO)

# 9. HOW_TO_USE
HOWTO = """    'asa-congruence': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each marked angle\\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'A, B and C move freely; from step 2 the point E slides along AC', pos: { top: '76px', left: 'calc(25% - 14px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the angle ABC and, from step 2, the angle ABE, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The point E', desc: 'on AC with AE = A′C′ (two ticks); slide it along the side', pos: { top: '150px', left: 'calc(25% - 110px)' } },
            { n: 2, label: 'The triangle ABE', desc: 'shaded: congruent to the second triangle by SAS under the supposition', pos: { top: '220px', left: 'calc(25% - 40px)' } },
            { n: 3, label: 'The angles at B', desc: 'β, the given angle, and β′, the angle ABE: a part of it', pos: { top: '236px', left: 'calc(25% + 120px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Supposition, SAS congruence, A part of the whole, Contradiction, SAS congruence', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the triangle is shaped by dragging and the point E slides along one side.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$E$', 'solid dot on $AC$', 'slides along $AC$ between $A$ and $C$; the shaded triangle $ABE$ and its angle at $B$ follow'],
          ['$A$, $B$, $C$', 'solid dot', 'reshape the triangle; $E$ keeps its place as a fraction of the way along $AC$'],
          ['$E$ at or beyond $A$ or $C$, a flattened triangle, or a vertex out of the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$, $B$, $C$, $E$' },
          { control: '**Measures**', description: 'write each marked angle\\'s size in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the angle $ABC$ and the angle $ABE$. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Supposition**, **SAS congruence**, **A part of the whole**, **Contradiction**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses SAS and the fact that a part is less than its whole, never the numbers.' },
        { title: 'The second triangle is not drawn', content: 'Everything the proof needs from A′B′C′ is its angles, equal to those of ABC, and its side A′C′, carried by the point E. Drawing it would add nothing the argument uses.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state, including the position of E. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
"""
ins_before_close("'sss-congruence': {\n      labels:".replace('\n', nl), HOWTO)

open(p, 'w', encoding='utf-8', newline='').write(s)
print('view ok', s.count("'asa-congruence'"))
