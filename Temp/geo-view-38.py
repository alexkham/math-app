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

ins_after_line("    { params: { view: 'hl-congruence' } },", "    { params: { view: 'secant-tangent' } },\n")

VIEW = r"""    'secant-tangent': {
      proofKey: 'secantTangent',
      title: 'Secant-Tangent Theorem Proof | PT² = PA · PB Step by Step',
      description: 'Watch the proof that from a point outside a circle the square of the tangent equals the product of the secant segments, by the difference of squares and Pythagoras, step by step. Then drag the point and the secant.',
      h1Title: 'The Secant-Tangent Theorem',
      url: '/geometry/visual-tools/secant-tangent',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="46" r="22" fill="#85B7EB" fill-opacity="0.25" stroke="#E6F1FB" stroke-width="1.4"/><line x1="8" y1="26" x2="70" y2="58" stroke="#FAC775" stroke-width="1.6"/><line x1="8" y1="26" x2="41" y2="25" stroke="#B5D4F4" stroke-width="1.6"/><circle cx="8" cy="26" r="2.4" fill="#E6F1FB"/><circle cx="41" cy="25" r="2.2" fill="#B5D4F4"/><circle cx="31" cy="38" r="2.2" fill="#FAC775"/><circle cx="68" cy="57" r="2.2" fill="#FAC775"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">PT² = PA·PB</text></svg>`,
      category: 'Proofs',
      subCategory: 'Circle',
      name: 'Secant-Tangent Theorem Proof',
      keywords: [
        'secant tangent theorem',
        'tangent secant theorem',
        'power of a point',
        'tangent squared equals product',
        'euclid III.36',
        'circle theorems',
        'secant segments',
        'geometry proof visualizer',
        'interactive geometry proof'
      ],
      sectionsContent: {
        obj0: {
          title: 'Getting Started with the Visualizer',
          content: `Step through the proof, then drag the near end of the secant round the circle, or move the outside point, and watch the square of the tangent stay equal to the product of the two secant segments. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows.`,
          before: '',
          after: '',
          link: ''
        },
        obj1: {
          title: 'The Statement',
          content: `Take a point $P$ outside a circle. From $P$ draw a tangent, touching the circle at $T$, and a secant, cutting the circle at $A$ (the nearer point) and $B$ (the farther). The theorem says

$$PT^2 = PA \\cdot PB$$

the square of the tangent segment equals the product of the whole secant and its outside part. It is Proposition 36 of Book III of Euclid's Elements, and it is the outside version of the [intersecting chords](!/geometry/visual-tools/intersecting-chords) theorem: in both, the product depends only on $P$ and the circle, a number called the power of $P$.

The proof is Euclid's and uses no similar triangles, only the perpendicular from the centre, a difference of squares and Pythagoras. In the player $O$ and $P$ are free and $A$ slides round the near side of the circle; $B$ is the second point where the line $PA$ meets the circle, and $T$ the point of contact of the tangent from $P$. The readout under the canvas shows $PT^2$ and $PA \\cdot PB$.`,
          before: '',
          after: '',
          link: ''
        },
        obj2: {
          title: 'The Midpoint of the Chord',
          content: `The secant cuts off the chord $AB$. Drop the perpendicular from the centre $O$ to this chord and call its foot $M$. The perpendicular from the centre to a chord [bisects the chord](!/geometry/visual-tools/chord-bisector), so

$$AM = MB$$

marked in the player with one tick each. The point $M$ is the hinge of the proof: it turns the two secant segments $PA$ and $PB$ into a sum and a difference of the same two lengths.`,
          before: '',
          after: '',
          link: ''
        },
        obj3: {
          title: 'A Difference of Squares',
          content: `The four points lie on one line in the order $P$, $A$, $M$, $B$, with $A$ between $P$ and $M$. So

$$PA = PM - AM, \\qquad PB = PM + MB = PM + AM$$

and the product of the two secant segments is a product of a difference and a sum:

$$PA \\cdot PB = (PM - AM)(PM + AM) = PM^2 - AM^2$$

Only squares of lengths remain, and squares of lengths are what Pythagoras delivers.`,
          before: '',
          after: '',
          link: ''
        },
        obj4: {
          title: 'Two Right Triangles',
          content: `Both $PM$ and $AM$ are legs of right triangles with the right angle at $M$ and the other leg $OM$: the triangles $OMP$ and $OMA$, shaded in the player. By the [Pythagorean theorem](!/geometry/visual-tools/pythagorean-theorem),

$$PM^2 = OP^2 - OM^2, \\qquad AM^2 = OA^2 - OM^2$$

Subtracting, $OM^2$ cancels:

$$PA \\cdot PB = PM^2 - AM^2 = OP^2 - OA^2 = OP^2 - R^2$$

where $R = OA$ is the radius. The right-hand side knows nothing about the secant: only where $P$ is and how big the circle is. So every secant from $P$ gives the same product.`,
          before: '',
          after: '',
          link: ''
        },
        obj5: {
          title: 'The Tangent',
          content: `Now the tangent. The [tangent is perpendicular to the radius](!/geometry/visual-tools/tangent-radius) at the point of contact, so the triangle $OTP$ is right-angled at $T$, and by Pythagoras once more

$$PT^2 = OP^2 - OT^2 = OP^2 - R^2$$

the same number as before. The tangent is the secant's limiting case, in which $A$ and $B$ have come together at $T$ and $PA \\cdot PB$ has become $PT \\cdot PT$; the proof treats it separately only because the chord $AB$ has shrunk to a point and has no midpoint construction.`,
          before: '',
          after: '',
          link: ''
        },
        obj6: {
          title: 'Why It Holds',
          content: `Both sides equal $OP^2 - R^2$, so $PT^2 = PA \\cdot PB$. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, the perpendicular bisecting the chord, a difference of squares, Pythagoras (twice), and tangent perpendicular to radius with Pythagoras again.

The number $OP^2 - R^2$ is the power of $P$ with respect to the circle. For $P$ outside it is positive and equals the square of the tangent; for $P$ inside it is negative and its absolute value is the product of the two parts of any chord through $P$, as on the intersecting chords page; for $P$ on the circle it is zero. One quantity, three theorems.`,
          before: '',
          after: '',
          link: ''
        },
        obj7: {
          title: 'Dragging the Figure',
          content: `Drag $A$ round the near side of the circle: the secant turns about $P$, $B$ and $M$ follow, the two segments $PA$ and $PB$ change, and the readout keeps their product equal to $PT^2$, which does not change at all. Drag $P$ to change the power itself, or $O$ to move the circle; the tangent and its point of contact are recomputed.

The player keeps $P$ outside the circle, keeps $A$ the nearer of the two secant points, and refuses a drag that would make the chord shorter than a few units or carry a point out of the frame.`,
          before: '',
          after: '',
          link: ''
        },
        obj8: {
          title: 'Consequences',
          content: `• **Two secants.** Two secants from $P$ cutting the circle at $A$, $B$ and at $C$, $D$ satisfy $PA \\cdot PB = PC \\cdot PD$, since both products equal $OP^2 - R^2$. Together with the intersecting chords theorem this is the full power-of-a-point theorem.
• **Two tangents.** Both tangents from $P$ have $PT^2 = OP^2 - R^2$, so the [two tangents](!/geometry/visual-tools/two-tangents) from a point are equal; that page proves it directly, and the [hypotenuse-leg](!/geometry/visual-tools/hl-congruence) criterion gives a third route.
• **Constructing the tangent length.** Given $PA$ and $PB$, the tangent is their geometric mean, $PT = \\sqrt{PA \\cdot PB}$, which is why the tangent-secant figure appears in the classical construction of a mean proportional.
• **The converse.** If a point $T$ on a circle and a secant $PAB$ satisfy $PT^2 = PA \\cdot PB$, then $PT$ is tangent (Euclid III.37); the proof compares with the true tangent from $P$ and uses this theorem.
• **Radical axis.** The points with equal power with respect to two circles form a line, the radical axis; for two intersecting circles it is the line through their common points.`,
          before: '',
          after: '',
          link: ''
        }
      },
      faqQuestions: {
        obj1: {
          question: 'What is the secant-tangent theorem?',
          answer: 'From a point P outside a circle, if a tangent touches the circle at T and a secant cuts it at A and B, then PT² = PA · PB: the square of the tangent equals the product of the whole secant and its outside part.'
        },
        obj2: {
          question: 'How is the secant-tangent theorem proved without similar triangles?',
          answer: 'Drop the perpendicular from the centre to the chord AB; its foot M is the midpoint. Then PA · PB = (PM − AM)(PM + AM) = PM² − AM², and Pythagoras in the right triangles OMP and OMA turns this into OP² − R². The tangent gives PT² = OP² − R² by Pythagoras in OTP.'
        },
        obj3: {
          question: 'What is the power of a point?',
          answer: 'The number OP² − R², where O is the centre and R the radius. Outside the circle it equals the square of the tangent and the product of the two secant segments from P; inside, its absolute value is the product of the two parts of any chord through P.'
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Secant-Tangent Theorem Proof Visualizer",
          "description": "Step-by-step interactive proof that the square of the tangent from an outside point equals the product of the secant segments, via the difference of squares and Pythagoras, with a draggable figure.",
          "url": "https://www.learnmathclass.com/geometry/visual-tools/secant-tangent",
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
            { "@type": "ListItem", "position": 4, "name": "The Secant-Tangent Theorem", "item": "https://www.learnmathclass.com/geometry/visual-tools/secant-tangent" }
          ]
        }
      }
    },
"""
ins_before_close('"name": "The Hypotenuse-Leg Criterion", "item"', VIEW, close='  };')

ins_after_line("  const draggedHL = {", "  // P moved below and the secant turned: different PA and PB, the same product and the same PT²\n  const draggedSecant = { ...PROOFS.secantTangent.model, points: { ...PROOFS.secantTangent.model.points, P: { x: 95, y: 300 } }, params: { r: 120, ta: 2.6 } }\n")

UNITS = """    'secant-tangent': {
      given: unit(D['secantTangent-given'], 'Opening scene, frozen',
        'The circle about O, the outside point P, the tangent PT and the secant through A and B.'),
      foot: unit(D['secantTangent-foot'], 'The midpoint of the chord, frozen',
        'OM perpendicular to the chord: M is the midpoint, AM = MB.'),
      squares: unit(D['secantTangent-squares'], 'A difference of squares, frozen',
        'PA = PM − AM and PB = PM + AM, so PA · PB = PM² − AM².'),
      pyth: unit(D['secantTangent-pyth'], 'Two right triangles, frozen',
        'OMP and OMA shaded: PM² − AM² = OP² − OA² = OP² − R².'),
      tangent: unit(D['secantTangent-tangent'], 'The tangent, frozen',
        'OT ⟂ PT, so PT² = OP² − OT² = OP² − R².'),
      conclude: unit(D['secantTangent-conclude'], 'The conclusion, frozen',
        'Both equal the power of P: PT² = PA · PB.'),
      dragged: unit(proofStill('secantTangent', 5, { model: draggedSecant }), 'After dragging P and A, frozen',
        'P moved below and the secant turned: different PA and PB, the same product, the same PT².'),
    },
"""
ins_before_close("'hl-congruence': {\n      given: unit(D['hlCongruence-given']", UNITS)

ORDER = """    'secant-tangent': [
      ['obj0', 'getting-started'],
      ['obj1', 'the-statement', 'given'],
      ['obj2', 'the-midpoint-of-the-chord', 'foot'],
      ['obj3', 'a-difference-of-squares', 'squares'],
      ['obj4', 'two-right-triangles', 'pyth'],
      ['obj5', 'the-tangent', 'tangent'],
      ['obj6', 'why-it-holds', 'conclude'],
      ['obj7', 'dragging-the-figure', 'dragged'],
      ['obj8', 'consequences'],
    ],
"""
ins_before_close("'hl-congruence': [\n      ['obj0', 'getting-started'],", ORDER)

EXPL = """    'secant-tangent': {
      given: note('B is where the line PA meets the circle again; drag A and it follows.', 'the-statement', 'Learn more about the statement'),
      foot: note('The chord-bisector theorem; see its own page.', 'the-midpoint-of-the-chord', 'Learn more about the midpoint'),
      squares: note('Sum times difference.', 'a-difference-of-squares', 'Learn more about the difference of squares'),
      pyth: note('OM² cancels; only OP and the radius remain.', 'two-right-triangles', 'Learn more about the two right triangles'),
      tangent: note('The tangent is the secant with A = B = T.', 'the-tangent', 'Learn more about the tangent'),
      conclude: note('Drag A: PA and PB change, PT² does not.', 'why-it-holds', 'Learn more about why it holds'),
    },
"""
ins_before_close("'hl-congruence': {\n      given: note(", EXPL)

INSTR = """    'secant-tangent': [
      '**▶ Play** runs the proof, **Next →** and **← Back** step one scene at a time, **Reset** restores the opening scene and the original figure. [Learn more about the controls](!#getting-started)',
      'Drag $A$ round the near side of the circle, $P$ outside it, or $O$; the readout under the canvas keeps $PT^2$ beside $PA \\\\cdot PB$. [Learn more about why it holds](!#why-it-holds)',
      '**Labels** toggles the point names, **Measures** writes each marked angle\\'s size beside its arc. The **Step explanations** log keeps every step so far. [Learn more about reading a scene](!#getting-started)',
    ],
"""
ins_before_close("'hl-congruence': [\n      '**▶ Play**", INSTR)

DEMO = """    'secant-tangent': {
      'getting-started': {
        title: 'A run through the proof player',
        script: [
          { say: 'THE MIDPOINT\\nNext → drops OM to the chord: M is the midpoint of AB.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'SQUARES\\nPA · PB = (PM − AM)(PM + AM) = PM² − AM².' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'PYTHAGORAS\\nIn OMP and OMA: PM² − AM² = OP² − R².' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'THE TANGENT\\nOT ⟂ PT, so PT² = OP² − R² too.' },
          { click: { button: 'Next' } },
          { wait: 1800 },
          { say: 'DONE\\nPT² = PA · PB: the power of P.' },
          { click: { button: 'Next' } },
          { wait: 2000 },
          { say: 'DRAG A\\nTurn the secant: PA and PB change, the product does not.' },
          { drag: '[data-handle="A"]', dx: -14, dy: 12, ms: 1400 },
          { wait: 1200 },
          { say: 'RESET\\nBack to step 1 and the original figure.' },
          { click: { button: 'Reset', exact: true } },
          { wait: 1200 },
        ]
      }
    },
"""
ins_before_close("'hl-congruence': {\n      'getting-started': {", DEMO)

HOWTO = """    'secant-tangent': {
      labels: { inputs: 'Figure', output: 'Log' },
      overview: {
        frames: [
          { title: 'Opening scene: the controls', mockupProps: { step: 0 }, callouts: [
            { n: 1, label: 'Proof', desc: 'the theorem loaded in the player; the ? gives its idea in one line', pos: { top: '4px', left: '6px' } },
            { n: 2, label: 'Display', desc: 'Labels shows the point names, Measures writes each marked angle\\'s size beside its arc', pos: { top: '4px', left: '216px' } },
            { n: 3, label: 'Draggable points', desc: 'A slides round the near side of the circle, P and O move freely; the hollow points T and B are computed', pos: { top: '70px', left: 'calc(25% - 180px)' } },
            { n: 4, label: 'Readout', desc: 'the line under the figure: PT² beside PA · PB, live while you drag', pos: { top: '310px', left: '26px' } },
            { n: 5, label: 'Back, Play, Next, Reset', desc: 'step through the proof or run it; Reset returns to step 1 and restores the original figure', pos: { top: '344px', left: 'calc(25% - 226px)' } },
            { n: 6, label: 'Speed and step counter', desc: 'how fast Play advances, and which of the 6 steps is on screen', pos: { top: '336px', left: 'calc(25% + 108px)' } },
            { n: 7, label: 'Step explanations', desc: 'every step reached so far, with its justification tag and a link to the section that explains it; click an entry to jump back to it', pos: { top: '54px', left: 'calc(50% - 10px)' } },
          ] },
          { title: 'Proof complete: step 6 of 6', mockupProps: { step: 5 }, callouts: [
            { n: 1, label: 'The tangent triangle', desc: 'OTP, right-angled at T: PT² = OP² − R²', pos: { top: '60px', left: 'calc(25% - 40px)' } },
            { n: 2, label: 'The two right triangles', desc: 'OMP and OMA on the chord: PM² − AM² = OP² − R²', pos: { top: '200px', left: 'calc(25% - 70px)' } },
            { n: 3, label: 'The midpoint M', desc: 'the foot of the perpendicular from O, with AM = MB (one tick each)', pos: { top: '130px', left: 'calc(25% + 20px)' } },
            { n: 4, label: 'Justification tags', desc: 'Given, Perpendicular bisects the chord, Difference of squares, Pythagorean theorem, Tangent ⟂ radius + Pythagoras, Conclusion', pos: { top: '126px', left: 'calc(50% + 40px)' } },
            { n: 5, label: 'Replay', desc: 'at the last step Play becomes Replay and Next is off', pos: { top: '340px', left: 'calc(25% - 150px)' } },
          ] },
        ],
      },
      inputs: {
        intro: 'The figure is the only input. Nothing is typed; the secant is turned by dragging and the rest follows.',
        columns: ['Point', 'Drawn as', 'What a drag does'],
        rows: [
          ['$A$', 'solid dot on the circle', 'slides round the near side; the secant $PAB$ turns about $P$, and $B$, $M$ follow'],
          ['$P$', 'solid dot', 'moves the outside point; the tangent and the secant are recomputed, and the power $OP^2 - R^2$ changes'],
          ['$O$', 'solid dot', 'moves the circle (its radius is fixed)'],
          ['$T$, $B$, $M$', 'hollow dot', 'cannot be dragged: the point of contact, the far end of the secant, the midpoint of the chord'],
          ['$P$ inside the circle, $A$ farther from $P$ than $B$, a chord shorter than a few units, or a point out of the frame', '—', 'refused'],
        ],
        note: 'Dragging never changes the current step. The proof stays where it was; only the figure changes.'
      },
      controls: {
        rows: [
          { control: '**▶ Play** / **⏸ Pause**', description: 'runs the proof one step at a time at the chosen speed; at the last step the button becomes **↻ Replay**' },
          { control: '**Next →** / **← Back**', description: 'one step forward or back; both stop Play' },
          { control: '**Reset**', description: 'back to step 1 and the original figure' },
          { control: 'Speed', description: 'Slow, Normal, Fast, Very Fast: the pause between steps while playing' },
          { control: '**Labels**', description: 'show or hide the point names $O$, $P$, $T$, $A$, $B$, $M$' },
          { control: '**Measures**', description: 'write each marked angle\\'s size in degrees beside its arc (this proof marks only right angles)' },
          { control: 'Click a log entry', description: 'moves the canvas back to that step' },
        ]
      },
      output: {
        where: 'Under the canvas, the readout gives $PT^2$ and $PA \\\\cdot PB$ in the same units. On the right, the **Step explanations** log keeps every step reached so far; the current one is framed in blue.',
        what: 'Each entry has a number, a title, a justification tag (**Given**, **Perpendicular bisects the chord**, **Difference of squares**, **Pythagorean theorem**, **Tangent ⟂ radius + Pythagoras**, **Conclusion**) naming the rule that allows the step, and a note with a link to the section that explains it.'
      },
      behavior: [
        { title: 'No measurement is used', content: 'The readout is a check, not a step of the proof. The argument uses the chord-bisector theorem, an algebraic identity and Pythagoras, never the numbers, which is why the two values agree for every position of A and P.' },
        { title: 'B is a reflection', content: 'The far end of the secant is drawn as the mirror image of A in the perpendicular from O; that is what the chord-bisector theorem says it is, and it keeps the secant through P for every drag.' },
        { title: 'Reset restores the figure', content: 'Reset returns both the step and the figure to their starting state. Back only changes the step.' },
        { title: 'On a phone', content: 'Touch and drag a point to move it without scrolling the page; a touch anywhere else on the canvas scrolls as usual.' },
      ]
    },
"""
ins_before_close("'hl-congruence': {\n      labels:", HOWTO)

open(p, 'w', encoding='utf-8', newline='').write(s)
print('view ok', s.count("'secant-tangent'"))
