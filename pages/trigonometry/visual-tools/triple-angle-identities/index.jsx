import Head from 'next/head'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import SiblingsNavStandalone from '@/app/components/SiblingsNavStandalone'
import ExplanationDetails from '@/app/components/ExplanationDetails'
import TripleAngleExplorer from '@/app/components/trigonometry/TripleAngleExplorer'
import tripleAngleDiagrams from '@/app/components/trigonometry/tripleAngleDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'
import { processContent } from '@/app/utils/contentProcessor'
import '@/pages/pages.css'

/* Visual tool page, steps 1-7 (visual-tool-page-creation-instructions v2).
   Mirrors the double- and half-angle identity pages: one section per
   identity and one per proof step, each with a framed unit rendered from the
   tool's own TripleAngleScene. How-to instructions are a live mesh with the
   usage sections. The tool's step descriptions and derived-card intros are
   page-fed (explanations prop) and carry the anchor pairs.
   IntroSection and KeyTermsCard stay commented (step 4, rulings 2-3). */

const STEP_TITLES = [
  'Split the Angle',
  'Apply the Angle-Sum Formula',
  'Substitute the Double-Angle Identities',
  'Apply the Pythagorean Identity',
  'Collect Terms',
]
const STEP_SLUGS = [
  'split-the-angle',
  'apply-the-angle-sum-formula',
  'substitute-the-double-angle-identities',
  'apply-the-pythagorean-identity',
  'collect-terms',
]
const FN_WORD = { sin: 'sine', cos: 'cosine', tan: 'tangent', csc: 'cosecant', sec: 'secant', cot: 'cotangent' }
const stepSlug = (fn, i) => `${FN_WORD[fn]}-step-${i + 1}-${STEP_SLUGS[i]}`
const identitySlug = (fn) => `the-${FN_WORD[fn]}-triple-angle-identity`

export async function getStaticProps() {

  const keyWords = [
    'triple angle identities',
    'sin 3x formula',
    'cos 3x formula',
    'tan 3x formula',
    'sin 3 theta derivation',
    'cos 3 theta proof',
    'triple angle formula proof',
    '3 sin x minus 4 sin cubed x',
    '4 cos cubed x minus 3 cos x',
    'multiple angle identities',
    'triple angle identity explorer',
    'derive sin 3x step by step',
    'angle sum double angle triple',
    'interactive trig identities',
    'triple angle calculator',
  ]

  const instructions = [
    'The six **tabs** across the top switch between $\\sin 3\\theta$, $\\cos 3\\theta$, $\\tan 3\\theta$, $\\csc 3\\theta$, $\\sec 3\\theta$ and $\\cot 3\\theta$. Sine and cosine open the step-by-step derivation; the other four open a derived-identity card. [Learn more about switching functions](!#switching-between-functions)',
    'Drag the **θ slider** between $10°$ and $80°$. The circle figure redraws, and every numerical check on the page recomputes at the new angle. [Learn more about the angle](!#adjusting-the-angle)',
    'Press **Play** to run the derivation one line at a time, or step with **‹ Prev** and **Next ›**. **Reset** returns to the start and the speed menu sets how fast Play advances. [Learn more about playing the derivation](!#playing-through-the-derivation)',
    'The figure shows $3\\theta$ as $2\\theta + \\theta$ on the unit circle at step 1, then the equation chain growing one line per step. [Learn more about the figure](!#reading-the-figure)',
    'The **Derivation** panel on the right lists every step taken so far with the rule it used. Click any earlier step to jump back to it. [Learn more about the derivation panel](!#the-derivation-panel)',
    'The two cards under the controls compare $f(3\\theta)$ with the current line of the chain at the chosen angle. They agree on every line, which is the check that no step went wrong. [Learn more about the numerical check](!#checking-each-line-numerically)',
    'On the tan, csc, sec and cot tabs, the card explains where the identity comes from, shows the short derivation, and verifies it at θ. The **source buttons** jump to the identities it was built from. [Learn more about derived identities](!#working-with-derived-identities)',
    'The **formula table** under the tool lists all six identities with their values at θ. Click a row to open that function. [Learn more about the formula table](!#reading-the-formula-table)',
  ]

  /* Step descriptions (sin, cos) and card intros (tan, csc, sec, cot) for the
     tool's own panel. Each ends in the Line 1 anchor pair: the step or state
     section, then the identity section that owns it. */
  const stepText = {
    sin: [
      'Write 3θ as 2θ + θ. On the unit circle, turning through 3θ is the same as turning through 2θ and then one more θ.',
      'Apply sin(α + β) = sin α cos β + cos α sin β with α = 2θ and β = θ.',
      'Replace sin 2θ with 2 sin θ cos θ and cos 2θ with 1 − 2 sin²θ.',
      'Use the Pythagorean identity to write cos²θ as 1 − sin²θ, so every term is in sin θ.',
      'Expand and collect: 2 sin θ − 2 sin³θ + sin θ − 2 sin³θ = 3 sin θ − 4 sin³θ.',
    ],
    cos: [
      'Write 3θ as 2θ + θ. On the unit circle, turning through 3θ is the same as turning through 2θ and then one more θ.',
      'Apply cos(α + β) = cos α cos β − sin α sin β with α = 2θ and β = θ.',
      'Replace cos 2θ with 2 cos²θ − 1 and sin 2θ with 2 sin θ cos θ.',
      'Use the Pythagorean identity to write sin²θ as 1 − cos²θ, so every term is in cos θ.',
      'Expand and collect: 2 cos³θ − cos θ − 2 cos θ + 2 cos³θ = 4 cos³θ − 3 cos θ.',
    ],
  }
  const explanations = {
    sin: { steps: stepText.sin.map((t, i) => `${t} [Full treatment](!#${stepSlug('sin', i)}) · [The sine identity](!#${identitySlug('sin')})`) },
    cos: { steps: stepText.cos.map((t, i) => `${t} [Full treatment](!#${stepSlug('cos', i)}) · [The cosine identity](!#${identitySlug('cos')})`) },
    tan: { content: `Tangent is sine over cosine. So once we have sin(3θ) and cos(3θ), tan(3θ) follows directly. [Full treatment](!#${identitySlug('tan')}) · [Derived identities](!#working-with-derived-identities)` },
    csc: { content: `Cosecant is the reciprocal of sine. So csc(3θ) = 1 / sin(3θ). [Full treatment](!#${identitySlug('csc')}) · [Derived identities](!#working-with-derived-identities)` },
    sec: { content: `Secant is the reciprocal of cosine. So sec(3θ) = 1 / cos(3θ). [Full treatment](!#${identitySlug('sec')}) · [Derived identities](!#working-with-derived-identities)` },
    cot: { content: `Cotangent is the reciprocal of tangent. So cot(3θ) = 1 / tan(3θ). [Full treatment](!#${identitySlug('cot')}) · [Derived identities](!#working-with-derived-identities)` },
  }

  const D = tripleAngleDiagrams()

  const stepCaption = [
    'Step 1: 3θ as 2θ + θ on the unit circle, θ = 35&#176;',
    'Step 2: the angle-sum formula applied',
    'Step 3: both double-angle identities substituted',
    'Step 4: the Pythagorean identity applied',
    'Step 5: terms collected',
  ]
  const stepUnitText = {
    sin: [
      'The 2&#952; arc and one more &#952; arc make up the whole 3&#952; turn. Everything after this step is algebra on that split.',
      'sin(2&#952; + &#952;) expands into two products, each still containing a double angle.',
      'sin 2&#952; and cos 2&#952; are replaced, so only functions of &#952; itself remain &#8212; but both sin and cos.',
      'cos&#178;&#952; becomes 1 &#8722; sin&#178;&#952;, and the expression is now written in sin &#952; alone.',
      'The chain closes at 3 sin &#952; &#8722; 4 sin&#179;&#952;, a cubic in sin &#952;.',
    ],
    cos: [
      'The same split as for sine: 3&#952; is the 2&#952; turn followed by one more &#952;.',
      'cos(2&#952; + &#952;) expands into a difference of two products.',
      'cos 2&#952; and sin 2&#952; are replaced by their double-angle forms in &#952;.',
      'sin&#178;&#952; becomes 1 &#8722; cos&#178;&#952;, so every term is in cos &#952;.',
      'The chain closes at 4 cos&#179;&#952; &#8722; 3 cos &#952;, a cubic in cos &#952;.',
    ],
  }

  const stateUnits = {
    sinOverview: demoUnitFrame({ svg: D.sin.overview, caption: 'The complete sine derivation, frozen',
      text: 'Five lines from sin(2&#952; + &#952;) to 3 sin &#952; &#8722; 4 sin&#179;&#952;: the angle sum, both double-angle identities, and one Pythagorean substitution.' }),
    cosOverview: demoUnitFrame({ svg: D.cos.overview, caption: 'The complete cosine derivation, frozen',
      text: 'The same five moves for cosine, ending at 4 cos&#179;&#952; &#8722; 3 cos &#952;, written in cos &#952; alone.' }),
    tan: demoUnitFrame({ svg: D.tan, caption: 'tan(3&#952;), derived',
      text: 'Sine over cosine, then top and bottom divided by cos&#179;&#952;, which turns every term into a power of tan &#952;.' }),
    csc: demoUnitFrame({ svg: D.csc, caption: 'csc(3&#952;), derived',
      text: 'The reciprocal of the sine identity: two lines, with no new algebra.' }),
    sec: demoUnitFrame({ svg: D.sec, caption: 'sec(3&#952;), derived',
      text: 'The reciprocal of the cosine identity: two lines, with no new algebra.' }),
    cot: demoUnitFrame({ svg: D.cot, caption: 'cot(3&#952;), derived',
      text: 'The reciprocal of the tangent identity, with numerator and denominator swapped.' }),
  }
  for (const fn of ['sin', 'cos']) {
    D[fn].steps.forEach((svg, i) => {
      stateUnits[`${fn}Step${i + 1}`] = demoUnitFrame({ svg, caption: stepCaption[i], text: stepUnitText[fn][i] })
    })
  }

  const sectionsContent = {
    obj0: { title: ``, content: ``, before: ``, after: ``, link: '' },

    obj1: {
      title: `Switching Between Functions`,
      content: `The tab strip across the top of the tool holds one tab for each of the six functions of $3\\theta$. The active tab is highlighted and its identity is written out in the bar beneath it.

The tabs fall into two groups. **Sine and cosine** are proved from scratch: their tabs open a step-by-step derivation that starts from the angle sum and ends at the identity. **Tangent, cosecant, secant and cotangent** are derived from those two: their tabs open a shorter card that shows how each follows from the sine and cosine results.

Switching tabs resets the derivation to its start, so every function begins from step 0. The angle θ is kept, so all six identities can be compared at the same value. The current function is also written into the page address as @[?fn=]@, which means a link to this page can open straight onto, say, the cosine derivation.

The [formula table](!#reading-the-formula-table) under the tool is a second way to switch: clicking any of its rows opens that function.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Adjusting the Angle`,
      content: `The **θ slider** sits under the identity bar and runs from $10°$ to $80°$ in whole degrees, with the current value printed at its right.

The angle matters in two places. On step 1 of the sine and cosine derivations, the figure draws the unit circle with the $2\\theta$ arc, the extra $\\theta$ arc and the full $3\\theta$ turn at the chosen angle, so dragging the slider opens and closes the split. Everywhere else, θ is the value at which the identities are checked numerically: the metric cards under the derivation, the verification cards of the derived identities, and the value column of the formula table all recompute as the slider moves.

The range stops short of $90°$ on purpose. At $3\\theta$ near a multiple of $90°$, tangent, secant or cotangent run off to infinity, and the checks would print $\\infty$ instead of numbers. Between $10°$ and $80°$ most values stay finite; where one does not, the card says so rather than showing a meaningless figure.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Playing Through the Derivation`,
      content: `On the sine and cosine tabs, a control bar under the figure drives the derivation. It has five steps, and the counter at the right reads **Step n of 5**.

- **Play** advances one step every few seconds until the end, then changes to **Replay**. While running it reads **Pause**.
- **Next ›** and **‹ Prev** move one step at a time and stop Play.
- **Reset** returns to step 0, before anything has been drawn.
- The **speed** menu sets how fast Play advances: $0.5\\times$, $1\\times$, $1.5\\times$ or $2\\times$.

Each step does one thing, named in bold in the [derivation panel](!#the-derivation-panel): split the angle, apply the angle-sum formula, substitute the double-angle identities, apply the Pythagorean identity, collect terms. The five steps are the same for sine and cosine, which is why the two derivations are worth running side by side — the moves are identical, only the formulas differ.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Reading the Figure`,
      content: `The figure in the middle of the tool changes character between the first step and the rest.

At **step 1** it is a unit circle. A solid radius lies along the positive axis, a dashed indigo radius marks the angle $2\\theta$, and a second solid radius marks $3\\theta$. Two short arcs near the centre show the split — $2\\theta$ in light indigo, the extra $\\theta$ in red — and a longer arc labels the whole $3\\theta$. A banner at the top states the step in words: $\\sin 3\\theta = \\sin(2\\theta + \\theta)$.

From **step 2** on, the figure becomes a card headed by the identity being proved, and the equation chain is written into it one line per step. Each line carries the rule that produced it in small grey text at its right, and the final line is set in bold.

This split is deliberate. The geometry does exactly one job — it justifies writing $3\\theta$ as $2\\theta + \\theta$ — and the rest of the proof is algebra, so the figure stops pretending otherwise.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `The Derivation Panel`,
      content: `The panel headed **Derivation** on the right of the sine and cosine tabs is a running log of the proof. Before the first step it asks you to press Play; after that, every step taken appears as a numbered entry with its rule in bold and a one- or two-sentence explanation below.

The newest step is outlined in indigo and the panel scrolls to keep it in view. Earlier steps stay listed, so the whole argument can be read top to bottom at any point.

Every entry is clickable. Clicking an earlier step jumps the tool back to it — the figure, the metric cards and the step counter all follow — and stops Play. That makes the panel the fastest way to compare two moments of the proof.

Each explanation ends with two links into this page: one to the section that treats that step in full, with its frozen figure, and one to the section on the identity as a whole.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Checking Each Line Numerically`,
      content: `Two cards under the control bar check the derivation as it runs. The left one always shows $f(3\\theta)$ — $\\sin 3\\theta$ or $\\cos 3\\theta$ — at the current angle. The right one shows the current line of the chain, evaluated at the same angle.

Every line of a correct derivation is equal to the thing being derived, so the two cards must agree on every step, to three decimal places. They do. At $\\theta = 35°$, for instance, $\\sin 105° \\approx 0.966$, and so is $\\sin 2\\theta\\cos\\theta + \\cos 2\\theta\\sin\\theta$, and so is $3\\sin\\theta - 4\\sin^3\\theta$.

The check is not a proof — agreement at one angle could be a coincidence — but it catches the common mistakes instantly. A sign dropped in the angle-sum formula, a wrong double-angle form, or a slip in collecting terms would show up as two different numbers. Move the [angle slider](!#adjusting-the-angle) while a step is showing and the two cards move together, which is the check at every angle at once.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Working with Derived Identities`,
      content: `The tangent, cosecant, secant and cotangent tabs open a card instead of a step-by-step derivation, because none of the four needs one. Each is built from identities already proved.

The card has three parts. **How this identity follows** gives the one-sentence reason — tangent is sine over cosine, cosecant is the reciprocal of sine, and so on — followed by **source buttons** naming the identities it depends on. Clicking a source button switches to that tab, so the dependency can be followed back to its proof. **Derivation** lays out the short algebra, two or three lines, each with a note on what was done. **Verify at θ** compares the two sides numerically at the current angle.

Tangent is the only one with a real step: after dividing $\\sin 3\\theta$ by $\\cos 3\\theta$, top and bottom are divided by $\\cos^3\\theta$ so that every term becomes a power of $\\tan\\theta$. The other three are reciprocals, and their derivations are a definition and a substitution.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Reading the Formula Table`,
      content: `Under the tool, a table lists all six triple-angle identities at once, one row per function. Its columns are the function, the identity, its value at the current θ, and its source — **angle sum** for sine and cosine, or the functions it was derived from for the other four.

The active function's row is marked with an indigo bar on its left. Clicking any row switches the tool to that function, the same as clicking its tab.

The table is useful in two ways. As a reference, it holds the six results in one place without scrolling through the derivations. As a check, its value column shows all six functions of $3\\theta$ at the same angle, so relationships between them can be read off directly: the tangent value is the sine value divided by the cosine value, and the three reciprocals are one over their partners. Moving the [angle slider](!#adjusting-the-angle) updates the whole column.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Why Three θ Is Two θ Plus θ`,
      content: `There is no new identity behind the triple-angle formulas. They are what the **angle-sum identities** give when one of the two angles is itself a double angle.

The angle-sum identities express $\\sin(\\alpha + \\beta)$ and $\\cos(\\alpha + \\beta)$ in terms of the sines and cosines of $\\alpha$ and $\\beta$. Taking $\\alpha = \\beta = \\theta$ gives the double-angle identities. Taking $\\alpha = 2\\theta$ and $\\beta = \\theta$ gives an expression for $\\sin 3\\theta$ that still contains $\\sin 2\\theta$ and $\\cos 2\\theta$, and substituting the double-angle identities removes them.

The same move repeats: $4\\theta = 3\\theta + \\theta$, $5\\theta = 4\\theta + \\theta$, and so on, each built from the one before. The triple angle is the first case where the build takes more than one application, which is why its derivation is worth following line by line. The [sum and difference](!/trigonometry/identities#sum) and [double-angle](!/trigonometry/identities#double) identities are both set out on the identities lesson.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Why Each Result Uses Only One Function`,
      content: `Step 4 of both derivations uses the **Pythagorean identity**, $\\sin^2\\theta + \\cos^2\\theta = 1$, to remove one of the two functions. Without it, the sine result would be correct but mixed:

$$\\sin 3\\theta = 3\\sin\\theta\\cos^2\\theta - \\sin^3\\theta$$

Replacing $\\cos^2\\theta$ by $1 - \\sin^2\\theta$ turns that into a polynomial in $\\sin\\theta$ alone, $3\\sin\\theta - 4\\sin^3\\theta$. The cosine derivation does the same in the other direction and ends at $4\\cos^3\\theta - 3\\cos\\theta$.

The one-function form is what makes the identities useful. It says that $\\cos 3\\theta$ is a cubic polynomial in $\\cos\\theta$, which lets a triple-angle equation be solved as a cubic equation, and it is the start of a pattern: $\\cos n\\theta$ is always a polynomial of degree $n$ in $\\cos\\theta$. The removal works because each derivation happens to leave only even powers of the unwanted function, and even powers can always be rewritten with the Pythagorean identity.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Where Triple-Angle Identities Are Used`,
      content: `The triple-angle identities turn up wherever an angle and its triple have to be related.

**Exact values.** Setting $\\theta = 20°$ in the cosine identity gives $\\cos 60° = 4\\cos^3 20° - 3\\cos 20°$, so $\\cos 20°$ is a root of the cubic $4x^3 - 3x - \\frac{1}{2} = 0$. This is the classical proof that a $60°$ angle cannot be trisected with straightedge and compass: the cubic has no solution built from square roots alone.

**Cubic equations.** Run the other way, the identity solves cubics. An equation of the form $4x^3 - 3x = c$ with $|c| \\le 1$ has the solution $x = \\cos\\left(\\frac{1}{3}\\arccos c\\right)$, which is the trigonometric method for cubics with three real roots.

**Integration and series.** Solving the sine identity for $\\sin^3\\theta$ gives $\\sin^3\\theta = \\frac{3\\sin\\theta - \\sin 3\\theta}{4}$, which reduces a cube to first powers — the same power-reduction move the [power-reducing](!/trigonometry/identities#power-reducing) identities make for squares.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj12: {
      title: `Related Concepts and Tools`,
      content: `The triple-angle identities sit at the end of a chain of identities, and the tools for the earlier links are the natural neighbours.

• [Double Angle Identities](!/trigonometry/visual-tools/double-angle-identities) — the identities substituted at step 3 of both derivations, each with its own geometric proof.
• [Half Angle Identities](!/trigonometry/visual-tools/half-angle-identities) — the double-angle identities solved the other way, for $\\theta/2$.
• [Pythagorean Identities](!/trigonometry/visual-tools/pythagorean-identities) — the identity used at step 4 to write each result in one function.
• [Basic Trigonometric Identities](!/trigonometry/visual-tools/basic-identities) — the reciprocal and quotient identities behind the derived tan, csc, sec and cot forms.
• [Unit Circle](!/visual-tools/unit-circle) — the setting of the step-1 figure, where $3\\theta$ is split into $2\\theta + \\theta$.

For the theory in prose, the [trigonometric identities](!/trigonometry/identities) lesson covers every family in one place, including the [triple-angle identities](!/trigonometry/identities#triple) themselves.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj13: {
      title: `The Sine Triple-Angle Identity`,
      content: `The identity $\\sin(3\\theta) = 3\\sin\\theta - 4\\sin^3\\theta$ is derived in the tool in five steps, from the angle sum to a cubic in $\\sin\\theta$.`,
      after: `The derivation runs: [split the angle](!#${stepSlug('sin', 0)}), [apply the angle-sum formula](!#${stepSlug('sin', 1)}), [substitute the double-angle identities](!#${stepSlug('sin', 2)}), [apply the Pythagorean identity](!#${stepSlug('sin', 3)}), and [collect terms](!#${stepSlug('sin', 4)}).

The result is odd in $\\sin\\theta$, as it must be: $\\sin 3\\theta$ changes sign with $\\theta$. It is also bounded as it should be — at $\\sin\\theta = 1$ it gives $3 - 4 = -1$, which is $\\sin 270°$.`,
      before: ``,
      link: '',
    },

    obj14: {
      title: `The Cosine Triple-Angle Identity`,
      content: `The identity $\\cos(3\\theta) = 4\\cos^3\\theta - 3\\cos\\theta$ is derived in the same five steps as the sine identity, ending in a cubic in $\\cos\\theta$.`,
      after: `The derivation runs: [split the angle](!#${stepSlug('cos', 0)}), [apply the angle-sum formula](!#${stepSlug('cos', 1)}), [substitute the double-angle identities](!#${stepSlug('cos', 2)}), [apply the Pythagorean identity](!#${stepSlug('cos', 3)}), and [collect terms](!#${stepSlug('cos', 4)}).

The polynomial $4x^3 - 3x$ is the third Chebyshev polynomial, and it is the identity behind the [uses](!#where-triple-angle-identities-are-used) in exact values and cubic equations.`,
      before: ``,
      link: '',
    },

    obj15: {
      title: `The Tangent Triple-Angle Identity`,
      content: `The identity $\\tan(3\\theta) = \\dfrac{3\\tan\\theta - \\tan^3\\theta}{1 - 3\\tan^2\\theta}$ is not proved from scratch; it is the sine identity divided by the cosine identity.`,
      after: `After the division, top and bottom are divided by $\\cos^3\\theta$. Each term of $3\\sin\\theta - 4\\sin^3\\theta$ and of $4\\cos^3\\theta - 3\\cos\\theta$ has degree three in sine and cosine, so each becomes a power of $\\tan\\theta$ once the $\\sec^2\\theta = 1 + \\tan^2\\theta$ relation is used. The denominator vanishes at $\\tan^2\\theta = \\frac{1}{3}$, which is $\\theta = 30°$, where $3\\theta = 90°$ and tangent is undefined.`,
      before: ``,
      link: '',
    },

    obj16: {
      title: `The Cosecant Triple-Angle Identity`,
      content: `The identity $\\csc(3\\theta) = \\dfrac{1}{3\\sin\\theta - 4\\sin^3\\theta}$ is the reciprocal of the [sine identity](!#${identitySlug('sin')}).`,
      after: `Its derivation is two lines: the definition $\\csc 3\\theta = \\frac{1}{\\sin 3\\theta}$ and a substitution. It is undefined wherever $\\sin 3\\theta = 0$, which in the tool's range happens at $\\theta = 60°$.`,
      before: ``,
      link: '',
    },

    obj17: {
      title: `The Secant Triple-Angle Identity`,
      content: `The identity $\\sec(3\\theta) = \\dfrac{1}{4\\cos^3\\theta - 3\\cos\\theta}$ is the reciprocal of the [cosine identity](!#${identitySlug('cos')}).`,
      after: `As with cosecant, the derivation is a definition and a substitution. It is undefined wherever $\\cos 3\\theta = 0$, which in the tool's range happens at $\\theta = 30°$.`,
      before: ``,
      link: '',
    },

    obj18: {
      title: `The Cotangent Triple-Angle Identity`,
      content: `The identity $\\cot(3\\theta) = \\dfrac{1 - 3\\tan^2\\theta}{3\\tan\\theta - \\tan^3\\theta}$ is the reciprocal of the [tangent identity](!#${identitySlug('tan')}), with numerator and denominator exchanged.`,
      after: `It could equally be written in $\\cot\\theta$ by dividing top and bottom by $\\tan^3\\theta$, but the tool keeps it in $\\tan\\theta$ so that it reads directly as the tangent identity turned over. It is undefined wherever $\\sin 3\\theta = 0$.`,
      before: ``,
      link: '',
    },
  }

  /* Step sections, generated in walk order: sin steps 1-5, cos steps 1-5. */
  const stepProse = {
    sin: [
      [`The derivation begins with geometry: $3\\theta$ is written as $2\\theta + \\theta$.`,
       `On the unit circle, turning through $3\\theta$ is the same as turning through $2\\theta$ and then one more $\\theta$, so $\\sin 3\\theta = \\sin(2\\theta + \\theta)$. This is the only geometric step; it is what lets the [angle-sum identities](!#why-three-is-two-plus) take over.`],
      [`The angle-sum formula $\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$ is applied with $\\alpha = 2\\theta$ and $\\beta = \\theta$.`,
       `$$\\sin 3\\theta = \\sin 2\\theta\\cos\\theta + \\cos 2\\theta\\sin\\theta$$ The expression is correct but still contains double angles, which the next step removes.`],
      [`Both double-angle identities are substituted: $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$ and $\\cos 2\\theta = 1 - 2\\sin^2\\theta$.`,
       `$$\\sin 3\\theta = 2\\sin\\theta\\cos^2\\theta + (1 - 2\\sin^2\\theta)\\sin\\theta$$ The form of $\\cos 2\\theta$ was chosen to be in $\\sin\\theta$, so only one $\\cos^2\\theta$ is left to deal with.`],
      [`The Pythagorean identity replaces $\\cos^2\\theta$ with $1 - \\sin^2\\theta$.`,
       `$$\\sin 3\\theta = 2\\sin\\theta(1 - \\sin^2\\theta) + \\sin\\theta - 2\\sin^3\\theta$$ Every term is now in $\\sin\\theta$ alone, the point of [writing each result in one function](!#why-each-result-uses-only-one-function).`],
      [`Expanding and collecting finishes the chain.`,
       `$$2\\sin\\theta - 2\\sin^3\\theta + \\sin\\theta - 2\\sin^3\\theta = 3\\sin\\theta - 4\\sin^3\\theta$$ This is the [sine triple-angle identity](!#${identitySlug('sin')}).`],
    ],
    cos: [
      [`The cosine derivation starts from the same split: $\\cos 3\\theta = \\cos(2\\theta + \\theta)$.`,
       `The geometry is identical to the sine case — the $2\\theta$ turn followed by one more $\\theta$ — and again it is the only geometric step.`],
      [`The angle-sum formula for cosine, $\\cos(\\alpha + \\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$, is applied with $\\alpha = 2\\theta$, $\\beta = \\theta$.`,
       `$$\\cos 3\\theta = \\cos 2\\theta\\cos\\theta - \\sin 2\\theta\\sin\\theta$$ The minus sign is the one place the cosine derivation differs in structure from the sine one.`],
      [`The double-angle identities are substituted, this time with $\\cos 2\\theta = 2\\cos^2\\theta - 1$.`,
       `$$\\cos 3\\theta = (2\\cos^2\\theta - 1)\\cos\\theta - 2\\sin^2\\theta\\cos\\theta$$ Choosing the form of $\\cos 2\\theta$ in $\\cos\\theta$ leaves a single $\\sin^2\\theta$ to remove.`],
      [`The Pythagorean identity replaces $\\sin^2\\theta$ with $1 - \\cos^2\\theta$.`,
       `$$\\cos 3\\theta = 2\\cos^3\\theta - \\cos\\theta - 2(1 - \\cos^2\\theta)\\cos\\theta$$ Every term is now in $\\cos\\theta$ alone.`],
      [`Expanding and collecting finishes the chain.`,
       `$$2\\cos^3\\theta - \\cos\\theta - 2\\cos\\theta + 2\\cos^3\\theta = 4\\cos^3\\theta - 3\\cos\\theta$$ This is the [cosine triple-angle identity](!#${identitySlug('cos')}).`],
    ],
  }
  const stepSections = []
  for (const fn of ['sin', 'cos']) {
    stepProse[fn].forEach(([content, after], i) => {
      stepSections.push({
        id: stepSlug(fn, i),
        unitKey: `${fn}Step${i + 1}`,
        title: `${FN_WORD[fn][0].toUpperCase()}${FN_WORD[fn].slice(1)} Step ${i + 1}: ${STEP_TITLES[i]}`,
        content,
        after,
      })
    })
  }

  /* Animated demos (ToolDemoPlayer v3) against the real TripleAngleExplorer
     (syncQuery off, so demos never touch the page URL). One θ range per card:
     range 0. Tab buttons and table rows share labels: tab = nth 0, row = nth 1. */
  const demos = {
    'playing-through-the-derivation': {
      title: 'Stepping through the proof',
      script: [
        { say: `DRAG θ → 60°
Circle: 2θ arc (indigo) + θ arc (red).
Together: the 3θ turn.` },
        { slide: { range: 0 }, to: 60, ms: 1400 },
        { wait: 2200 },
        { say: `TAP Next ›
Step 1: split the angle.
sin 3θ = sin(2θ + θ).` },
        { click: { button: 'Next ›', exact: true } },
        { wait: 2400 },
        { say: `TAP Next ›
Step 2: angle-sum formula.
Figure turns into the equation card.` },
        { click: { button: 'Next ›', exact: true } },
        { wait: 2600 },
        { say: `TAP Next › ×3
Double-angle in. Pythagorean swap.
Collect: 3 sin θ − 4 sin³θ.` },
        { click: { button: 'Next ›', exact: true } },
        { wait: 900 },
        { click: { button: 'Next ›', exact: true } },
        { wait: 900 },
        { click: { button: 'Next ›', exact: true } },
        { wait: 2600 },
        { say: `TAP ‹ Prev
One line back.
Derivation log follows.` },
        { click: { button: '‹ Prev', exact: true } },
        { wait: 2400 },
      ],
    },
    'checking-each-line-numerically': {
      title: 'Checking every line',
      script: [
        { say: `TAP Next ›
Left card: sin 3θ.
Right card: the current line.` },
        { click: { button: 'Next ›', exact: true } },
        { wait: 2400 },
        { say: `TAP Next ›
New line. Same number.
Equal cards = no mistake.` },
        { click: { button: 'Next ›', exact: true } },
        { wait: 2400 },
        { say: `DRAG θ → 20°
Both cards move together.
Equal at every angle.` },
        { slide: { range: 0 }, to: 20, ms: 1500 },
        { wait: 2400 },
        { say: `TAP Next › ×3
Final line. Cards still equal.
Identity checked.` },
        { click: { button: 'Next ›', exact: true } },
        { wait: 700 },
        { click: { button: 'Next ›', exact: true } },
        { wait: 700 },
        { click: { button: 'Next ›', exact: true } },
        { wait: 2400 },
        { say: `TAP cos(3θ)
Same five moves.
Ends at 4 cos³θ − 3 cos θ.` },
        { click: { button: 'cos(3θ)', exact: true } },
        { wait: 2400 },
      ],
    },
    'working-with-derived-identities': {
      title: 'Derived identities and the table',
      script: [
        { say: `TAP tan(3θ)
No proof steps. Derived card.
tan 3θ = sin 3θ / cos 3θ.` },
        { click: { button: 'tan(3θ)', exact: true } },
        { wait: 2800 },
        { say: `DRAG θ → 50°
Verify cards: both sides equal.
Live at every angle.` },
        { slide: { range: 0 }, to: 50, ms: 1400 },
        { wait: 2400 },
        { say: `TAP csc(3θ)
Reciprocal of sin 3θ.
Two lines. No new algebra.` },
        { click: { button: 'csc(3θ)', exact: true } },
        { wait: 2400 },
        { say: `TAP See sin(3θ) proof →
Source button. Jumps to the proof
this identity is built from.` },
        { click: { button: 'See sin(3θ) proof' } },
        { wait: 2400 },
        { say: `TAP TABLE ROW sec(3θ)
Table = second switch.
All six values at the same θ.` },
        { click: { button: 'sec(3θ)', nth: 1 } },
        { wait: 2600 },
      ],
    },
  }

  const introContent = { id: 'intro', title: '', content: `` }

  const faqQuestions = {
    obj0: {
      question: 'What are the triple-angle identities?',
      answer: 'They express the trigonometric functions of 3 theta in terms of functions of theta: sin 3 theta = 3 sin theta - 4 sin cubed theta, cos 3 theta = 4 cos cubed theta - 3 cos theta, and tan 3 theta = (3 tan theta - tan cubed theta) / (1 - 3 tan squared theta). The cosecant, secant and cotangent forms are their reciprocals.',
      sectionId: 'switching-between-functions',
    },
    obj1: {
      question: 'How is sin 3 theta derived?',
      answer: 'Write 3 theta as 2 theta + theta and apply the angle-sum formula, substitute the double-angle identities for sin 2 theta and cos 2 theta, replace cos squared theta with 1 - sin squared theta using the Pythagorean identity, and collect terms. The result is 3 sin theta - 4 sin cubed theta.',
      sectionId: 'the-sine-triple-angle-identity',
    },
    obj2: {
      question: 'Why is cos 3 theta written only in terms of cos theta?',
      answer: 'The Pythagorean identity sin squared theta + cos squared theta = 1 removes every even power of sine, leaving a polynomial in cos theta alone: 4 cos cubed theta - 3 cos theta. That one-function form is what lets a triple-angle equation be solved as a cubic.',
      sectionId: 'why-each-result-uses-only-one-function',
    },
    obj3: {
      question: 'Where are the triple-angle identities used?',
      answer: 'They give exact values such as the cubic equation satisfied by cos 20 degrees, the classical proof that a 60 degree angle cannot be trisected with straightedge and compass, the trigonometric method for solving cubic equations with three real roots, and power reduction of sin cubed and cos cubed in integration.',
      sectionId: 'where-triple-angle-identities-are-used',
    },
    obj4: {
      question: 'How can I check a triple-angle identity numerically?',
      answer: 'Evaluate both sides at the same angle. At theta = 35 degrees, sin 105 degrees is about 0.966, and so is 3 sin 35 degrees - 4 sin cubed 35 degrees. The tool shows this comparison on every step of the derivation and for every identity in its formula table.',
      sectionId: 'checking-each-line-numerically',
    },
  }

  const schemas = {
    webApplication: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Triple Angle Identities Explorer',
      url: 'https://www.learnmathclass.com/trigonometry/visual-tools/triple-angle-identities',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires JavaScript',
      description: 'Interactive step-by-step derivation of sin 3 theta, cos 3 theta and tan 3 theta from the angle-sum and double-angle identities, with the reciprocal forms and a live numerical check.',
      inLanguage: 'en-US',
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      publisher: { '@type': 'Organization', name: 'Learn Math Class' },
    },
    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.learnmathclass.com' },
        { '@type': 'ListItem', position: 2, name: 'Trigonometry', item: 'https://www.learnmathclass.com/trigonometry' },
        { '@type': 'ListItem', position: 3, name: 'Visual Tools', item: 'https://www.learnmathclass.com/trigonometry/visual-tools' },
        { '@type': 'ListItem', position: 4, name: 'Triple Angle Identities', item: 'https://www.learnmathclass.com/trigonometry/visual-tools/triple-angle-identities' },
      ],
    },
    faq: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: Object.keys(faqQuestions).map((key) => ({
        '@type': 'Question',
        name: faqQuestions[key].question,
        acceptedAnswer: { '@type': 'Answer', text: faqQuestions[key].answer },
      })),
    },
  }

  return {
    props: {
      relatedTools: getRelatedTools('triple-angle-identities'),
      instructions,
      explanations,
      demos,
      stateUnits,
      sectionsContent,
      stepSections,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: 'Triple Angle Identities: Step-by-Step | Learn Math Class',
        description: 'Derive sin 3θ, cos 3θ and tan 3θ one step at a time from the angle-sum and double-angle identities, with every line checked numerically as you go.',
        hubDescription: 'An interactive explorer for the triple-angle identities. Play through the derivation of sin 3 theta and cos 3 theta one line at a time, from the angle sum through the double-angle and Pythagorean identities to a cubic in one function, with every line checked numerically at the chosen angle. Tangent, cosecant, secant and cotangent follow as derived cards, and a formula table holds all six.',
        category: 'Identities',
        keywords: keyWords.join(', '),
        url: '/trigonometry/visual-tools/triple-angle-identities',
        name: 'Triple Angle Identities Explorer',
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="24" fill="none" stroke="#B5D4F4" stroke-width="1.2"/><line x1="14" y1="40" x2="66" y2="40" stroke="#B5D4F4" stroke-width="0.8"/><line x1="40" y1="14" x2="40" y2="66" stroke="#B5D4F4" stroke-width="0.8"/><line x1="40" y1="40" x2="64" y2="40" stroke="#E6F1FB" stroke-width="1.5"/><line x1="40" y1="40" x2="58.39" y2="24.57" stroke="#B5D4F4" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="40" y1="40" x2="49.5" y2="17.96" stroke="#E6F1FB" stroke-width="1.5"/><path d="M 50 40 A 10 10 0 0 0 47.66 33.57" fill="none" stroke="#B5D4F4" stroke-width="2"/><path d="M 47.66 33.57 A 10 10 0 0 0 43.96 30.82" fill="none" stroke="#ED93B1" stroke-width="2"/><path d="M 57 40 A 17 17 0 0 0 46.73 24.39" fill="none" stroke="#FAC775" stroke-width="1.3"/><text x="61" y="21" font-family="Georgia,serif" font-size="8" fill="#FAC775" font-style="italic">3θ</text><text x="40" y="77" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle">3θ = 2θ + θ</text></svg>`,
      },
    },
  }
}

export default function TripleAngleIdentitiesPage({
  relatedTools,
  instructions,
  explanations,
  demos,
  stateUnits,
  seoData,
  sectionsContent,
  stepSections,
  introContent,
  faqQuestions,
  schemas,
}) {

  const plain = (id, obj) => ({ id, title: obj.title, link: obj.link, content: [obj.content] })
  const withDemo = (id, obj) => ({
    id,
    title: obj.title,
    link: obj.link,
    content: [
      <ToolDemoPlayer
        key={`demo-${id}`}
        script={demos[id].script}
        title={demos[id].title}
        label={`Demo: ${demos[id].title}`}
        scale={0.6}
        renderText={processContent}
      >
        <TripleAngleExplorer explanations={explanations} renderText={processContent} showFrozen={false} syncQuery={false} />
      </ToolDemoPlayer>,
      obj.content,
    ],
  })
  const framed = (id, obj, unitKey) => ({
    id,
    title: obj.title,
    link: obj.link || '',
    content: [
      obj.content,
      <div key={`u-${unitKey}`} dangerouslySetInnerHTML={{ __html: stateUnits[unitKey] }} />,
      obj.after,
    ],
  })

  const genericSections = [
    plain('switching-between-functions', sectionsContent.obj1),
    plain('adjusting-the-angle', sectionsContent.obj2),
    withDemo('playing-through-the-derivation', sectionsContent.obj3),
    plain('reading-the-figure', sectionsContent.obj4),
    plain('the-derivation-panel', sectionsContent.obj5),
    withDemo('checking-each-line-numerically', sectionsContent.obj6),
    withDemo('working-with-derived-identities', sectionsContent.obj7),
    plain('reading-the-formula-table', sectionsContent.obj8),
    plain('why-three-is-two-plus', sectionsContent.obj9),
    plain('why-each-result-uses-only-one-function', sectionsContent.obj10),
    plain('where-triple-angle-identities-are-used', sectionsContent.obj11),
    plain('related-concepts-and-tools', sectionsContent.obj12),
    framed('the-sine-triple-angle-identity', sectionsContent.obj13, 'sinOverview'),
    framed('the-cosine-triple-angle-identity', sectionsContent.obj14, 'cosOverview'),
    framed('the-tangent-triple-angle-identity', sectionsContent.obj15, 'tan'),
    framed('the-cosecant-triple-angle-identity', sectionsContent.obj16, 'csc'),
    framed('the-secant-triple-angle-identity', sectionsContent.obj17, 'sec'),
    framed('the-cotangent-triple-angle-identity', sectionsContent.obj18, 'cot'),
    ...stepSections.map((s) => framed(s.id, s, s.unitKey)),
  ].filter((s) => s.title)

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Learn Math Class" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />

        <meta name="robots" content="index, follow" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApplication) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
        />
      </Head>

      <br />
      <br />
      <br />
      <br />
      <OperaSidebar
        side='right'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb />
      <br />
      <br />
      <h1 className='title' style={{ marginTop: '-50px', marginBottom: '0px' }}>
        Triple Angle Identities
      </h1>
      <br />

      <div style={{ width: '80%', margin: 'auto' }}>
        <ExplanationDetails
          title='How to use'
          instructions={instructions}
          accent='#4F46E5'
        />
      </div>
      <br />

      <SiblingsNavStandalone
        bg="#ffffff"
        color="#64748b"
        activeColor="#4F46E5"
        activeBg="#eef2ff"
        topOffset='200px'
      />
      <div style={{ width: '90%', margin: 'auto', zoom: 0.9 }}>
        <TripleAngleExplorer
          explanations={explanations}
          renderText={processContent}
          showFrozen={false}
        />
      </div>

      <br />
      <br />

      <SectionTableOfContents
        sections={genericSections}
        showSecondaryNav={true}
        secondaryNavMode="siblings"
        secondaryNavTitle="More in this Section"
      />
      <br />
      <br />

      {/* IntroSection and KeyTermsCard stay commented on a tool page
          (visual-tool-page-creation-instructions v2, step 4, rulings 2 and 3).

      <IntroSection
        id={introContent.id}
        title={introContent.title}
        content={introContent.content}
        backgroundColor='#f9fafb'
        textColor="#06357a"
      />
      <KeyTermsCard
        id="0"
        title={sectionsContent.obj0.title}
        content={sectionsContent.obj0.content}
        after={sectionsContent.obj0.after}
        variant="light"
      />
      */}

      <RelatedTools tools={relatedTools} />

      <Sections sections={genericSections} />

      <br />
      <br />
      <br />
    </>
  )
}
