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

ins_after_line("    { params: { view: 'asa-congruence' } },", "    { params: { view: 'aas-congruence' } },\n")

VIEW = r"""    'aas-congruence': {
      proofKey: 'aasCongruence',
      title: 'AAS Congruence Proof | Two Angles and a Side Not Between Them Step by Step',
      description: 'Watch the proof that two triangles with two equal angles and an equal side not between them are congruent: the angle sum fixes the third angle and angle-side-angle finishes, step by step. Then drag the vertices.',
      h1Title: 'The AAS Congruence Criterion',
      url: '/geometry/visual-tools/aas-congruence',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="10,62 70,62 48,14" fill="#85B7EB" fill-opacity="0.35" stroke="#E6F1FB" stroke-width="1.4"/><path d="M 24 62 A 14 14 0 0 0 18 51" fill="none" stroke="#FAC775" stroke-width="1.6"/><path d="M 58 62 A 12 12 0 0 1 64 49" fill="none" stroke="#B5D4F4" stroke-width="1.6"/><path d="M 43 25 A 12 12 0 0 0 54 27" fill="none" stroke="#FAC775" stroke-width="1.6" stroke-dasharray="3 2"/><line x1="56" y1="40" x2="62" y2="37" stroke="#E6F1FB" stroke-width="1.6"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">AAS from ASA</text></svg>`,
      category: 'Proofs',
      subCategory: 'Triangle',
      name: 'AAS Congruence Proof',
      keywords: [
        'AAS congruence',
        'angle angle side',
        'congruent triangles proof',
        'triangle congruence criteria',
        'AAS from ASA',
        'euclid I.26',
        'angle sum',
        'congruence theorems',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the vertices and watch the readout keep the third angle equal to 180° minus the other two. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `Two angles and a side determine a triangle whether or not the side lies between the angles. When it does, that is the [ASA congruence](!/geometry/visual-tools/asa-congruence) criterion, proved from side-angle-side on its own page. When it does not, the criterion is called angle-angle-side:

$$\\angle A = \\angle A', \\; \\angle B = \\angle B', \\; BC = B'C' \\implies ABC \\cong A'B'C'$$

Here the side $BC$ touches the angle at $B$ but not the angle at $A$. It is the second half of Proposition 26 of Book I of Euclid's Elements, and the proof is the shortest on these pages: the angle sum turns it into angle-side-angle.

The player shows the triangle $ABC$ with its angle $\\alpha$ at $A$, its angle $\\beta$ at $B$ and the side $BC$ marked with one tick; the second triangle is not drawn, since the argument never leaves the first. The readout under the canvas shows the angle at $C$ and the value $180°$ minus the two given angles.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The Angle Sum',
          content: `Call the third angle of the first triangle, at $C$, $\\gamma$. By the [triangle angle sum](!/geometry/visual-tools/triangle-angle-sum) theorem the three angles of any triangle add up to a straight angle:

$$\\alpha + \\beta + \\gamma = 180°$$

so $\\gamma = 180° - \\alpha - \\beta$. The second triangle has the same two angles $\\alpha$ and $\\beta$, so its third angle, at $C'$, is also $180° - \\alpha - \\beta$. The player marks $\\gamma$ at $C$ and lights the three angles together.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'The Third Angle',
          content: `Both third angles are the same number, so they are equal:

$$\\angle C = \\angle C' = 180° - \\alpha - \\beta = \\gamma$$

The triangles now agree in all three angles. That alone is not enough for congruence, since two triangles of the same shape can differ in size; the one given side is what pins the size down, and it is used next.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'The Side Between Two Angles',
          content: `Look at the given side again. $BC$ has the angle $\\beta$ at its end $B$ and the angle $\\gamma$ at its end $C$; $B'C'$ has the same angle $\\beta$ at $B'$ and, by the previous step, the same angle $\\gamma$ at $C'$. So the given side does lie between two equal angles after all, just not the two that were given:

$$\\angle B = \\angle B', \\qquad BC = B'C', \\qquad \\angle C = \\angle C'$$

This is exactly the angle-side-angle pattern, and the [ASA congruence](!/geometry/visual-tools/asa-congruence) criterion gives $ABC \\cong A'B'C'$.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'Why It Holds',
          content: `The proof has two moves. The angle sum converts the two given angles into the third, so that every angle is known in both triangles; then the given side, whichever it is, lies between two known angles, and angle-side-angle applies. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given data, the angle sum, equal remainders, and angle-side-angle.

The same two moves work when the given side is $CA$ instead of $BC$, or when the two given angles are at $B$ and $C$ and the side is $AB$ or $CA$: with all three angles known, any side lies between two of them. That is why angle-angle-side needs no case distinction. What it does need is that the side be the one opposite the same angle in both triangles; a side opposite $\\alpha$ in one triangle and opposite $\\beta$ in the other proves nothing.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Dragging the Figure',
          content: `Drag $A$, $B$ or $C$: the triangle changes shape, the three marked angles change with it, and the readout shows the angle at $C$ staying equal to $180°$ minus the angles at $A$ and $B$ for every shape. Turn on **Measures** to see all three angles in degrees and add them up.

A drag that would flatten the triangle or carry a vertex out of the frame is refused.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Consequences',
          content: `• **Used on these pages.** Angle-angle-side carried the [angle bisector theorem](!/geometry/visual-tools/angle-bisector) page, where two right triangles share the bisected angle, and the [incentre](!/geometry/visual-tools/incentre) page, where it makes the distances from the incentre to the sides equal.
• **Four criteria.** With side-angle-side taken as given, these pages have now derived side-side-side, angle-side-angle and angle-angle-side from it. Any two angles and any side, or any two sides and the included angle, or all three sides, determine a triangle.
• **Why not three angles.** Three equal angles give only the same shape, not the same size; that is similarity, not congruence. Angle-angle-side needs its one side for exactly this reason.
• **Why not SSA.** Two sides and an angle not between them do not determine a triangle in general: with $AB$, $BC$ and the angle at $A$ given, the vertex $C$ can fall at either of two points on a ray from $A$, giving two different triangles. The exception is a right or obtuse given angle, and the special case of hypotenuse and leg in a right triangle.
• **Right triangles.** A right triangle with one acute angle and any one side is determined, since the right angle is the second angle and angle-angle-side or angle-side-angle applies.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What is the AAS congruence criterion?',
          answer: 'If two angles of one triangle and a side not between them equal two angles of another triangle and the corresponding side, the triangles are congruent.'
        },
        obj2: {
          question: 'How is AAS proved from ASA?',
          answer: 'The angle sum of a triangle is 180°, so two equal angles force the third angles to be equal too. Then the given side lies between two equal angles, and ASA applies.'
        },
        obj3: {
          question: 'Why is SSA not a congruence criterion?',
          answer: 'Two sides and a non-included angle can fit two different triangles: the third vertex can fall at either of two points on a ray from the given angle. Only when the given angle is right or obtuse, or in the hypotenuse-leg case, is the triangle determined.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "AAS Congruence Proof Visualizer",
          "description": "Step-by-step interactive proof that two triangles with two equal angles and an equal side not between them are congruent, via the angle sum and ASA, with draggable vertices.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/aas-congruence",
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
            { "@type": "ListItem", "position": 4, "name": "The AAS Congruence Criterion", "item": "https://www.learnmathclass.com/geometry/visual-tools/aas-congruence" }
          ]
        }
      }
    },
"""
ins_before_close('"name": "The ASA Congruence Criterion", "item"', VIEW, close='  };')

ins_after_line("  const draggedASA = {", "  // C pulled left and down: a wider angle at C, the readout still matching\n  const draggedAAS = { ...PROOFS.aasCongruence.model, points: { ...PROOFS.aasCongruence.model.points, C: { x: 200, y: 150 } } }\n")

UNITS = """    'aas-congruence': {
      given: unit(D['aasCongruence-given'], 'Opening scene, frozen',
        'Triangle ABC with the angle α at A, the angle β at B and the side BC, which does not lie between them.'),
      sum: unit(D['aasCongruence-sum'], 'The angle sum, frozen',
        'The third angle γ at C: α + β + γ = 180°, in both triangles.'),
      third: unit(D['aasCongruence-third'], 'The third angle, frozen',
        'γ = 180° − α − β in both triangles, so the angles at C and C′ are equal.'),
      asa: unit(D['aasCongruence-asa'], 'The side between two angles, frozen',
        'BC has β at one end and γ at the other: the ASA pattern.'),
      conclude: unit(D['aasCongruence-conclude'], 'The conclusion, frozen',
        'ABC ≅ A′B′C′ by ASA.'),
      dragged: unit(proofStill('aasCongruence', 4, { model: draggedAAS }), 'After dragging C, frozen',
        'C pulled left and down: a wider angle at C, and the readout still shows it equal to 180° minus the other two.'),
    },
"""
ins_before_close("'asa-congruence': {\n      given: unit(D['asaCongruence-given']", UNITS)

ORDER = """    'aas-congruence': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-angle-sum', 'sum'],
      ['obj3', 'the-third-angle', 'third'],
      ['obj4', 'the-side-between-two-angles', 'asa'],
      ['obj5', 'why-it-holds', 'conclude'],
      ['obj6', 'dragging-the-figure', 'dragged'],
      ['obj7', 'consequences'],
    ],
"""
ins_before_close("'asa-congruence': [\n      ['obj0', 'getting-started'],", ORDER)

EXPL = """    'aas-congruence': {
      given: note('The side touches one given angle but not the other.', 'the-statement', 'Learn more about the statement'),
      sum: note('The angle sum; see its own proof.', 'the-angle-sum', 'Learn more about the angle sum'),
      third: note('Same two angles, same remainder.', 'the-third-angle', 'Learn more about the third angle'),
      asa: note('Now the side is between two known angles.', 'the-side-between-two-angles', 'Learn more about the ASA pattern'),
      conclude: note('Drag a vertex: the readout keeps the third angle in step.', 'why-it-holds', 'Learn more about why it holds'),
    },
"""
ins_before_close("'asa-congruence': {\n      given: note(", EXPL)

INSTR = """    'aas-congruence': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag $A$, $B$ or $C$; the readout under the canvas compares the angle at $C$ with $180°$ minus the angles at $A$ and $B$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each marked angle\\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
"""
ins_before_close("'asa-congruence': [\n      '**▶ Play**", INSTR)

DEMO = """    'aas-congruence': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'ANGLE SUM\\nNext → marks the third angle γ: α + β + γ = 180°.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THIRD ANGLE\\nThe same in both triangles, so the angles at C and C′ are equal.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'ASA\\nBC now lies between two equal angles, β and γ.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'CONGRUENT\\nAngle-side-angle finishes the proof.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG C\\nPull C to the left: the angles change, the readout stays in step.' },
          { drag: '[data-handle="C"]', dx: -30, dy: 10, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
"""
ins_before_close("'asa-congruence': {\n      'getting-started': {", DEMO)

HOWTO = """    'aas-congruence': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each marked angle\\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'A, B and C all move freely', pos: { top: '76px', left: 'calc(25% + 30px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the angle at C beside 180° minus the angles at A and B, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 5 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 5 of 5', mockupProps: { step: 4 }, callouts: [
            { n: 1, label: 'The given side', desc: 'BC, one tick: it touches the angle at B but not the angle at A', pos: { top: '170px', left: 'calc(25% + 100px)' } },
            { n: 2, label: 'The given angles', desc: 'α at A and β at B, the two angles the second triangle shares', pos: { top: '250px', left: 'calc(25% - 130px)' } },
            { n: 3, label: 'The third angle', desc: 'γ at C, found from the angle sum; it puts BC between two known angles', pos: { top: '40px', left: 'calc(25% + 40px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Triangle angle sum, Equal remainders, ASA congruence', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the triangle is shaped by dragging its vertices.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$A$, $B$, $C$', 'solid dot', 'reshapes the triangle; all three marked angles and the readout follow'],
          ['a flattened triangle, or a vertex out of the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$, $B$, $C$' },
          { control: '**Measures**', description: 'write each marked angle\\'s size in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the angle at $C$ and the value $180°$ minus the angles at $A$ and $B$. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Triangle angle sum**, **Equal remainders**, **ASA congruence**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses the angle sum and ASA, never the numbers, which is why the third angle stays in step for every shape.' },
        { title: 'The second triangle is not drawn', content: 'Everything the proof needs from A′B′C′ is its two angles, equal to those of ABC, and its side B′C′ = BC. The argument runs entirely in the first triangle.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
"""
ins_before_close("'asa-congruence': {\n      labels:", HOWTO)

open(p, 'w', encoding='utf-8', newline='').write(s)
print('view ok', s.count("'aas-congruence'"))
