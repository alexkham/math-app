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

ins_after_line("    { params: { view: 'kite-diagonals' } },", "    { params: { view: 'hl-congruence' } },\n")

VIEW = r"""    'hl-congruence': {
      proofKey: 'hlCongruence',
      title: 'Hypotenuse-Leg Congruence Proof | Right Triangles Step by Step',
      description: 'Watch the proof that two right triangles with equal hypotenuses and one pair of equal legs are congruent: laid leg to leg they make an isosceles triangle, and angle-angle-side finishes, step by step. Then drag the figure.',
      h1Title: 'The Hypotenuse-Leg Criterion',
      url: '/geometry/visual-tools/hl-congruence',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="10,62 40,62 40,16" fill="#FAC775" fill-opacity="0.45" stroke="#E6F1FB" stroke-width="1.4"/><polygon points="70,62 40,62 40,16" fill="#85B7EB" fill-opacity="0.45" stroke="#E6F1FB" stroke-width="1.4"/><path d="M 34 62 L 34 56 L 40 56" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><path d="M 46 62 L 46 56 L 40 56" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><line x1="4" y1="62" x2="76" y2="62" stroke="#B5D4F4" stroke-width="1" stroke-dasharray="3 2"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">HL</text></svg>`,
      category: 'Proofs',
      subCategory: 'Triangle',
      name: 'HL Congruence Proof',
      keywords: [
        'hypotenuse leg congruence',
        'HL congruence',
        'right triangle congruence',
        'RHS congruence',
        'congruent triangles proof',
        'triangle congruence criteria',
        'hypotenuse leg theorem',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then slide $A$ along the line and drag $B$ or $C$, and watch the copy keep the same angle at its far vertex and the same other leg. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `Two sides and an angle not between them do not determine a triangle in general; the [AAS congruence](!/geometry/visual-tools/aas-congruence) page explains why. Right triangles are the exception. If the angle is the right angle, the two sides are the hypotenuse and one leg, and they are enough:

$$\\angle C = \\angle C' = 90°, \\; AB = A'B', \\; BC = B'C' \\implies ABC \\cong A'B'C'$$

This is the hypotenuse-leg criterion, also written HL or, in some countries, RHS (right angle, hypotenuse, side). The proof here lays the second triangle against the first along the equal legs, so that the two hypotenuses become the equal sides of one [isosceles triangle](!/geometry/visual-tools/isosceles-base-angles).

In the player the right angle is at $C$, $BC$ is the common leg, $AB$ and $A'B$ are the hypotenuses, and $A'$ is placed as the mirror image of $A$ through $C$. The readout under the canvas shows the angles at $A$ and $A'$ and the two other legs $CA$ and $CA'$.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'Leg to Leg',
          content: `Take the equal legs first. The second triangle has a leg $B'C'$ equal to $BC$; move it so that this leg lies on $BC$, with $C'$ at $C$ and $B'$ at $B$, and so that its far vertex falls on the other side of the line $BC$ from $A$. Call that vertex $A'$. Then $A'BC$ is right-angled at $C$ and $A'B = A'B' = AB$, marked in the player with one tick on each hypotenuse and two ticks on the common leg.

The two triangles now sit leg to leg, one on each side of $BC$, filled in two colours. The claim to prove is that they are congruent, and in particular that $CA' = CA$.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'A Straight Line',
          content: `At $C$ there are two right angles, $\\angle BCA$ on one side of $BC$ and $\\angle BCA'$ on the other. Together they make

$$\\angle BCA + \\angle BCA' = 90° + 90° = 180°$$

a straight angle, so $CA$ and $CA'$ are opposite rays and $A$, $C$, $A'$ lie on one line. The player draws it dashed. This is the same fact about a straight angle that the [vertical angles](!/geometry/visual-tools/vertical-angles) page uses, read the other way round.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'The Isosceles Triangle',
          content: `Now look at the large triangle $ABA'$ made by the two hypotenuses and the line through $C$. Its sides $AB$ and $A'B$ are the two hypotenuses, which are equal, so $ABA'$ is isosceles with apex $B$, and by the [isosceles base angles](!/geometry/visual-tools/isosceles-base-angles) theorem its base angles are equal:

$$\\angle BAA' = \\angle BA'A = \\alpha$$

Because $C$ lies on the base $AA'$, these two angles are exactly the angles of the two right triangles at their far vertices: $\\angle BAC = \\alpha$ and $\\angle BA'C = \\alpha$.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'Angle-Angle-Side',
          content: `Compare the two right triangles once more:

$$\\angle A = \\angle A' = \\alpha, \\qquad \\angle C = \\angle C' = 90°, \\qquad BC = BC$$

Two angles agree, and the side $BC$, which is opposite $\\alpha$ in both triangles, is common. That is the [AAS congruence](!/geometry/visual-tools/aas-congruence) pattern, so $ABC \\cong A'BC$.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `Since $A'BC$ is the second given triangle moved into place, the two given triangles are congruent: in right triangles the hypotenuse and one leg determine everything else, including the other leg, $CA = CA'$. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given data, a straight angle, the isosceles theorem, and angle-angle-side.

There is a second proof, by computation. The [Pythagorean theorem](!/geometry/visual-tools/pythagorean-theorem) gives the other leg from the hypotenuse and the known leg, $CA^2 = AB^2 - BC^2$, and the same in the second triangle, so $CA = C'A'$; then all three sides agree and [SSS congruence](!/geometry/visual-tools/sss-congruence) finishes. The proof shown here is older and uses no lengths at all.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Slide $A$ along the line through $C$: the first triangle gets a longer or shorter leg $CA$, and the copy follows with $CA' = CA$, since $A'$ is always the mirror of $A$ through $C$; the readout keeps the angles at $A$ and $A'$ equal. Drag $B$ to change the common leg and the hypotenuses, or $C$ to move the right angle; $A$ stays on the perpendicular to $BC$ at $C$.

A drag that would flatten either triangle, shorten the common leg too far, or carry a vertex out of the frame is refused.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **Used on these pages.** Hypotenuse-leg is the usual way to show the [two tangents](!/geometry/visual-tools/two-tangents) from a point are equal (the radii are legs, the segment to the centre a common hypotenuse) and that the perpendicular from the centre [bisects a chord](!/geometry/visual-tools/chord-bisector) (two radii as hypotenuses, the perpendicular a common leg). Those pages used Pythagoras instead; either route works. It also gives the equal tangent lengths on the [incentre](!/geometry/visual-tools/incentre) page.
• **The SSA exception.** Two sides and a non-included angle fail in general because the third vertex can fall at two places. When the angle is right, one of the two places disappears, and the triangle is determined.
• **Five criteria.** Side-angle-side, side-side-side, angle-side-angle, angle-angle-side and hypotenuse-leg: every congruence criterion used in school geometry now has a page here, all derived from side-angle-side.
• **Perpendicular bisector, again.** A point equidistant from two points lies on their perpendicular bisector: drop the perpendicular to the segment, and hypotenuse-leg makes the two halves equal.
• **Reflections.** The proof places $A'$ as the mirror image of $A$ in $C$ along the line; the theorem says that any right triangle with the same hypotenuse and leg is that mirror image, up to moving it rigidly.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What is the hypotenuse-leg congruence criterion?',
          answer: 'Two right triangles are congruent if their hypotenuses are equal and one pair of legs is equal. It is also called HL, or RHS (right angle, hypotenuse, side).'
        },
        obj2: {
          question: 'How is hypotenuse-leg proved?',
          answer: 'Lay the two triangles leg to leg on opposite sides of the equal leg. The two right angles make a straight line, the equal hypotenuses make an isosceles triangle with equal base angles, and then angle-angle-side applies. Alternatively, Pythagoras gives the other leg and SSS finishes.'
        },
        obj3: {
          question: 'Why does SSA work for right triangles but not in general?',
          answer: 'With two sides and a non-included angle the third vertex can usually fall at either of two points. When the given angle is a right angle, the two points coincide in a single reflection, so the triangle is determined.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Hypotenuse-Leg Congruence Proof Visualizer",
          "description": "Step-by-step interactive proof that two right triangles with equal hypotenuses and one pair of equal legs are congruent, via an isosceles triangle and AAS, with a draggable figure.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/hl-congruence",
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
            { "@type": "ListItem", "position": 4, "name": "The Hypotenuse-Leg Criterion", "item": "https://www.learnmathclass.com/geometry/visual-tools/hl-congruence" }
          ]
        }
      }
    },
"""
ins_before_close('"name": "The Diagonals of a Kite", "item"', VIEW, close='  };')

ins_after_line("  const draggedKite = {", "  // A slid towards C and B raised: shorter legs, a steeper hypotenuse, the angles at A and A′ still equal\n  const draggedHL = { ...PROOFS.hlCongruence.model, points: { ...PROOFS.hlCongruence.model.points, B: { x: 270, y: 85 }, C: { x: 270, y: 300 } }, params: { t: 0.45 } }\n")

UNITS = """    'hl-congruence': {
      given: unit(D['hlCongruence-given'], 'Opening scene, frozen',
        'ABC and its copy A′BC leg to leg: right angles at C, AB = A′B, BC in common.'),
      line: unit(D['hlCongruence-line'], 'A straight line, frozen',
        'Two right angles at C make a straight angle: A, C, A′ are collinear.'),
      iso: unit(D['hlCongruence-iso'], 'The isosceles triangle, frozen',
        'ABA′ has two equal hypotenuses as sides, so the base angles at A and A′ are both α.'),
      aas: unit(D['hlCongruence-aas'], 'Angle-angle-side, frozen',
        'α, the right angle and the common leg BC: ABC ≅ A′BC by AAS.'),
      conclude: unit(D['hlCongruence-conclude'], 'The conclusion, frozen',
        'Hypotenuse and leg determine a right triangle; in particular CA = CA′.'),
      dragged: unit(proofStill('hlCongruence', 4, { model: draggedHL }), 'After dragging A and B, frozen',
        'A slid towards C and B raised: shorter legs, steeper hypotenuses, the angles at A and A′ still equal.'),
    },
"""
ins_before_close("'kite-diagonals': {\n      given: unit(D['kiteDiagonals-given']", UNITS)

ORDER = """    'hl-congruence': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement'],
      ['obj2', 'leg-to-leg', 'given'],
      ['obj3', 'a-straight-line', 'line'],
      ['obj4', 'the-isosceles-triangle', 'iso'],
      ['obj5', 'angle-angle-side', 'aas'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
"""
ins_before_close("'kite-diagonals': [\n      ['obj0', 'getting-started'],", ORDER)

EXPL = """    'hl-congruence': {
      given: note('A′ is the mirror of A through C; slide A and it follows.', 'leg-to-leg', 'Learn more about placing the triangles'),
      line: note('Two right angles make a straight angle.', 'a-straight-line', 'Learn more about the straight line'),
      iso: note('Equal hypotenuses, equal base angles; see the isosceles page.', 'the-isosceles-triangle', 'Learn more about the isosceles triangle'),
      aas: note('Two angles and the common leg; see the AAS page.', 'angle-angle-side', 'Learn more about the AAS step'),
      conclude: note('Drag B or C: the angles at A and A′ stay equal.', 'why-it-holds', 'Learn more about why it holds'),
    },
"""
ins_before_close("'kite-diagonals': {\n      given: note(", EXPL)

INSTR = """    'hl-congruence': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Slide $A$ along the line, or drag $B$ or $C$; the copy $A\\'$ follows, and the readout under the canvas keeps the angles at $A$ and $A\\'$ and the legs $CA$ and $CA\\'$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each marked angle\\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
"""
ins_before_close("'kite-diagonals': [\n      '**▶ Play**", INSTR)

DEMO = """    'hl-congruence': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'A STRAIGHT LINE\\nNext → : two right angles at C put A, C, A′ on one line.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'ISOSCELES\\nAB = A′B, so the angles at A and A′ are both α.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'AAS\\nα, the right angle and the common leg BC.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'DONE\\nHypotenuse and leg determine the right triangle.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'SLIDE A\\nPull A towards C: the copy follows, the angles stay equal.' },
          { drag: '[data-handle="A"]', dx: 16, dy: 0, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
"""
ins_before_close("'kite-diagonals': {\n      'getting-started': {", DEMO)

HOWTO = """    'hl-congruence': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each marked angle\\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'B and C move freely, A slides along the perpendicular at C; the hollow vertex A′ is the mirror of A through C', pos: { top: '80px', left: 'calc(25% - 14px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: the angles at A and A′ and the legs CA and CA′, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 5 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 5 of 5', mockupProps: { step: 4 }, callouts: [
            { n: 1, label: 'The common leg', desc: 'BC, two ticks: the equal legs laid on each other, with a right angle on each side at C', pos: { top: '150px', left: 'calc(25% + 24px)' } },
            { n: 2, label: 'The hypotenuses', desc: 'AB and A′B, one tick each: the equal sides of the isosceles triangle ABA′', pos: { top: '110px', left: 'calc(25% - 120px)' } },
            { n: 3, label: 'The base angles', desc: 'α at A and at A′: equal, and the angles AAS needs', pos: { top: '236px', left: 'calc(25% + 120px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Straight angle, Isosceles base angles, AAS congruence, Conclusion', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the first triangle is shaped by dragging and the copy follows.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$A$', 'solid dot', 'slides along the perpendicular to $BC$ at $C$, changing the leg $CA$; $A\\'$ mirrors it'],
          ['$B$, $C$', 'solid dot', 'move the common leg; the perpendicular at $C$ turns with it and $A$, $A\\'$ follow'],
          ['$A\\'$', 'hollow dot', 'cannot be dragged: the mirror image of $A$ through $C$'],
          ['a flattened triangle, a very short common leg, or a vertex out of the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $A$, $B$, $C$, $A\\'$' },
          { control: '**Measures**', description: 'write each marked angle\\'s size in degrees beside its arc' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives the angles at $A$ and $A\\'$ and the legs $CA$ and $CA\\'$. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Straight angle**, **Isosceles base angles**, **AAS congruence**, **Conclusion**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses a straight angle, the isosceles theorem and AAS, never the numbers, which is why the angles at A and A′ agree for every shape.' },
        { title: 'The copy is a reflection', content: 'Placing the second triangle leg to leg with its far vertex across BC puts A′ at the mirror image of A through C; that is what the theorem proves, and what the player draws from the start.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
"""
ins_before_close("'kite-diagonals': {\n      labels:", HOWTO)

open(p, 'w', encoding='utf-8', newline='').write(s)
print('view ok', s.count("'hl-congruence'"))
