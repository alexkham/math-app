import Head from 'next/head'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import ExplanationDetails from '@/app/components/ExplanationDetails'
import InverseFunctionExplorer from '@/app/components/trigonometry/InverseFunctionExplorer'
import inverseFunctionDiagrams from '@/app/components/trigonometry/inverseFunctionDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'
import { processContent } from '@/app/utils/contentProcessor'
import '@/pages/pages.css'

/* Visual tool page, steps 1-7 (visual-tool-page-creation-instructions v2).
   How-to instructions are a live mesh with the usage sections: each ends in
   an anchor link to its section. Line 1 adds one section per preset state,
   each with a framed unit rendered from the tool's own scene. The tool's
   stage notes are page-fed (explanations prop) and carry the anchor pairs.
   IntroSection and KeyTermsCard stay commented (step 4, rulings 2-3). */

export async function getStaticProps() {

  const keyWords = [
    'inverse trig functions',
    'arcsin arccos arctan graph',
    'horizontal line test trig',
    'principal interval inverse',
    'restrict domain sine',
    'reflect across y = x',
    'inverse function explorer',
    'arcsin(sin x)',
    'composition inverse trig',
    'domain and range of arcsin',
    'why restrict domain inverse',
    'arctan horizontal asymptotes',
    'one-to-one trig functions',
    'interactive inverse trig tool',
    'inverse trig visualizer',
  ]

  const instructions = [
    'The **Function** row switches between $\\sin$, $\\cos$ and $\\tan$. Each has its own principal interval, so switching also resets the domain cut to fit the new function. [Learn more about choosing the function](!#choosing-the-function)',
    'The **Step** row walks the four ideas in order: **1. Line test**, **2. Restrict**, **3. Reflect**, **4. Compose**. Each step changes what the graph shows and what the explanation panel says. [Learn more about the four steps](!#the-four-steps)',
    'In step 1, drag the **red handle** on the right edge to move the horizontal line up and down, or press a **Line level** button. The counter reports how many times the line crosses the curve in view; two or more means no inverse exists. [Learn more about the line test](!#the-line-test)',
    'In step 2, drag the two **blue handles** on the $x$-axis to choose which piece of the curve to keep. They snap to multiples of $\\frac{\\pi}{12}$, the kept domain is printed below, and a badge judges the piece: not one-to-one, partial range, non-standard, or principal. [Learn more about restricting the domain](!#restricting-the-domain)',
    'The **Use principal interval** button jumps both handles to the standard cut: $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ for sine, $[0, \\pi]$ for cosine, $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ for tangent. [Learn more about the principal interval](!#the-principal-interval-shortcut)',
    'In step 3, press **Reflect across y = x**. The kept piece swings over the dashed diagonal into the inverse curve, the axis labels swap from $\\pi$ units to numbers, and a table shows domain and range trading places. The button refuses a piece that is not one-to-one. [Learn more about reflecting](!#reflecting-across-y-x)',
    'In step 4, drag the **blue handle** along the $x$-axis or press a **Try** button to pick an input $x$. The tool computes the inverse of $f(x)$ and draws the fold: an input outside the shaded principal interval lands somewhere else. [Learn more about the fold](!#composing-and-the-fold)',
    'The **Examples** row loads five ready states, one per idea: the failing line test, arcsin, arccos, arctan, and the composition fold. [Learn more about the examples](!#the-examples-row)',
    'The legend under the graph fixes the colours: **blue** is the parent function, **amber** is the inverse, **red** is the horizontal line and its crossings, and the pale blue band is the kept domain. [Learn more about the colours](!#the-legend-and-colours)',
    'The **Explanations** panel on the right rewrites itself for the current step and state: it counts crossings, judges the kept piece, tabulates the swap, or writes out the composition line by line. [Learn more about the explanations panel](!#the-explanations-panel)',
  ]

  /* Stage notes for the tool's own panel. The component renders them under its
     live text through renderText; each ends in the Line 1 anchor pair. */
  const explanations = {
    lineTest: 'One crossing too many is enough to rule an inverse out. [Learn more about the failing line test](!#the-line-test-fails) · [the line test](!#the-line-test)',
    restrict: 'The goal is a piece that is hit exactly once at every level and still reaches the full range. [Learn more about restricting](!#restricting-the-domain) · [why restriction is needed](!#why-restriction-is-necessary)',
    reflect: 'The reflected piece is the inverse only because the kept piece was one-to-one. [Learn more about arcsine](!#arcsine) · [arccosine](!#arccosine) · [arctangent](!#arctangent)',
    compose: 'The composition undoes the function only on the principal interval. [Learn more about the fold](!#the-composition-fold) · [composing](!#composing-and-the-fold)',
  }

  const diagrams = inverseFunctionDiagrams()

  const stateUnits = {
    lineTestFails: demoUnitFrame({
      svg: diagrams.lineTestFails,
      caption: 'Step 1: y = 1/2 against the full sine curve',
      text: 'The dashed red line meets the curve at several points in view, and infinitely many overall. Each crossing is a different x with the same output, so no single answer exists for &ldquo;which x gives 1/2&rdquo;.',
    }),
    arcsin: demoUnitFrame({
      svg: diagrams.arcsin,
      caption: 'Step 3: sine kept on [&minus;&pi;/2, &pi;/2], then reflected',
      text: 'The blue piece is sine on its principal interval; the amber curve is its mirror image in y = x, which is arcsin. Its domain is [&minus;1, 1] and its range is [&minus;&pi;/2, &pi;/2] &mdash; the kept piece with the axes swapped.',
    }),
    arccos: demoUnitFrame({
      svg: diagrams.arccos,
      caption: 'Step 3: cosine kept on [0, &pi;], then reflected',
      text: 'Cosine needs a different cut: [0, &pi;], where it falls steadily from 1 to &minus;1. The amber reflection is arccos, defined on [&minus;1, 1] and returning angles in [0, &pi;].',
    }),
    arctan: demoUnitFrame({
      svg: diagrams.arctan,
      caption: 'Step 3: tangent kept on (&minus;&pi;/2, &pi;/2), then reflected',
      text: 'The dashed vertical asymptotes of tangent reflect into horizontal ones. Arctan is defined for every real input and never quite reaches &minus;&pi;/2 or &pi;/2.',
    }),
    compositionFold: demoUnitFrame({
      svg: diagrams.compositionFold,
      caption: 'Step 4: arcsin(sin(5&pi;/6))',
      text: 'The input 5&pi;/6 lies outside the shaded principal interval. sin(5&pi;/6) = 1/2, and arcsin returns the one angle inside the interval with that value, &pi;/6. The composition folds the input back instead of undoing sine.',
    }),
  }

  const sectionsContent = {
    obj0: { title: ``, content: ``, before: ``, after: ``, link: '' },

    obj1: {
      title: `Choosing the Function`,
      content: `The **Function** row offers three buttons — $\\sin$, $\\cos$ and $\\tan$ — because these are the three functions whose inverses the tool builds: [arcsine](!/trigonometry/inverse-functions#2), [arccosine](!/trigonometry/inverse-functions#3) and [arctangent](!/trigonometry/inverse-functions#4).

Switching function keeps you on the same step but resets what depends on the function. The domain cut jumps to the new function's principal interval if you are on step 3 or 4, and back to $[-\\pi, \\pi]$ if you are on step 1 or 2. The composition probe returns to a default input chosen to show a fold.

The three functions are worth comparing on the same step. On step 1 all three fail the line test, but tangent fails differently: its line crosses one point per branch rather than two per cycle. On step 2 the cuts that work are different for each — sine and tangent are restricted around zero, cosine from $0$ to $\\pi$. On step 3 only tangent's reflection has **horizontal asymptotes**, because only tangent had vertical ones to begin with.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `The Four Steps`,
      content: `The **Step** row is the spine of the tool. Its four buttons are the four stages of building an inverse function, in the order they logically depend on each other:

- **1. Line test** — show that the full function has no inverse.
- **2. Restrict** — cut the domain down to a piece that does.
- **3. Reflect** — turn that piece into the inverse by swapping $x$ and $y$.
- **4. Compose** — see what the inverse does when fed the original function.

Each step changes both the graph and the controls below it: the line-level buttons appear on steps 1 and 2, the domain readout and principal-interval shortcut on step 2, the reflect button on step 3, and the input selector on step 4. The explanation panel follows the step as well.

The steps can be visited in any order, and the state carries over between them: the line level set on step 1 is still there on step 2, where it now counts crossings on the kept piece only. That carry-over is deliberate. The line that failed on step 1 is the same line that passes on step 2, and seeing it pass is the whole point of restricting.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `The Line Test`,
      content: `On step 1 the whole curve is drawn in blue and a dashed red horizontal line crosses it. Drag the **red handle** at the right end of the line to move it vertically, or press one of the **Line level** buttons to jump to a standard value such as $\\frac{1}{2}$ or $-1$. The line snaps to those values when dragged close to them.

Every crossing is marked with a red dot, and the **Crossings in view** counter reports how many there are. That number is the test. The **horizontal line test** says a function has an inverse only if no horizontal line meets its graph more than once, so a single line with two or more crossings is enough to rule an inverse out.

A level outside the range, such as $1.5$ for sine, gives zero crossings. The explanation panel points out that this proves nothing: missing the curve is allowed. It is two or more crossings that fail the test, and for sine and cosine every level strictly between $-1$ and $1$ does exactly that. For tangent, every level fails, since each branch covers all real numbers.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Restricting the Domain`,
      content: `On step 2 the full curve fades and only the piece between two blue handles, **a** and **b**, stays solid. Drag either handle along the $x$-axis to change the kept piece; both snap to multiples of $\\frac{\\pi}{12}$, and the **Kept domain** readout prints the interval in $\\pi$ units.

The red line from step 1 is still there, but now it only counts crossings on the kept piece. Crossings that fall outside the cut are shown as hollow grey circles, so you can see exactly which solutions the restriction threw away.

A badge judges the current piece, from worst to best:

- **Not one-to-one** — the piece contains a turning point, or for tangent spans an asymptote, so some level is still hit twice.
- **One-to-one, partial range** — every level is hit at most once, but the piece misses part of the range, so some outputs would have no answer.
- **One-to-one, full range, not standard** — the piece works, but it is not the convention.
- **Principal interval** — the piece that defines the inverse function.

Faint bars on the axes show the kept domain and the range it reaches, which step 3 will swap.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `The Principal Interval Shortcut`,
      content: `On step 2 the **Use principal interval** button moves both handles to the standard cut for the current function in one press, and the badge turns to **Principal interval**.

The three cuts are:

$$\\sin: \\left[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right] \\qquad \\cos: [0, \\pi] \\qquad \\tan: \\left(-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right)$$

The shortcut is there so the destination is never a guessing game, but it is more useful after you have tried to find the cut by hand. Dragging the handles past a peak of sine turns the badge back to **Not one-to-one**; pulling them inward from the principal interval turns it to **partial range**. The principal interval is the widest cut around zero that avoids the first failure without falling into the second.

Other cuts pass the test as well — sine on $\\left[\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right]$ is one-to-one and reaches the full range — and the tool accepts them, labelled **not standard**. Which one counts is a convention, discussed in [principal intervals as conventions](!#principal-intervals-as-conventions).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Reflecting Across y = x`,
      content: `On step 3 the dashed diagonal $y = x$ appears, and the kept piece from step 2 stays solid blue. Press **Reflect across y = x** and the piece swings across the diagonal into an amber curve: the inverse. Press the button again to undo it.

Three things change during the swing. The curve itself moves, every point $(x, y)$ travelling to $(y, x)$. The axis labels cross-fade, because the horizontal axis now carries numbers and the vertical axis now carries angles in $\\pi$ units. And the faint domain and range bars trade places, drawn in a colour that blends from blue to amber as they go.

The explanation panel shows the same swap as a table: the kept piece's domain becomes the inverse's range, and its range becomes the inverse's domain. When the kept piece is the principal interval, the amber curve is labelled with its proper name — $\\arcsin x$, $\\arccos x$ or $\\arctan x$.

If the kept piece is not one-to-one, the button is disabled and the panel says why: the reflection of such a piece would fail the vertical line test, so it would not be a function at all.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Composing and the Fold`,
      content: `On step 4 the principal interval is shaded amber and a blue handle sits on the $x$-axis. Drag it, or press one of the **Try** buttons, to choose an input $x$. The tool then draws the composition as a path: up from $x$ to the curve, across at the height $f(x)$, and down to the angle the inverse returns, marked with an amber diamond.

The panel writes the same thing out:

$$\\arcsin(\\sin x) = \\arcsin(\\text{value}) = \\text{result}$$

If the input is already inside the shaded interval, the result equals the input and the badge reads **No fold**. If it lies outside, the result is a different angle — the one angle inside the interval with the same function value — and an amber arrow on the axis shows the input being **folded** back. The Try buttons are chosen so that most of them fold.

For tangent at an odd multiple of $\\frac{\\pi}{2}$, the tool reports that the composition is undefined, since tangent itself is undefined there.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `The Examples Row`,
      content: `The **Examples** row under the controls loads five complete states at once — function, step, line level, cut and reflection — one for each idea the tool teaches:

- **line test fails** — sine on its full domain with $y = \\frac{1}{2}$ crossing it repeatedly.
- **arcsin** — sine cut to $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ and already reflected.
- **arccos** — cosine cut to $[0, \\pi]$ and reflected.
- **arctan** — tangent cut to $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ and reflected, asymptotes turned horizontal.
- **composition fold** — $\\arcsin(\\sin \\frac{5\\pi}{6})$ landing at $\\frac{\\pi}{6}$.

These are the same five states frozen further down this page, so each example button and each frozen figure show exactly the same picture. Loading an example does not lock anything: every handle and button works from there, which makes the examples useful starting points rather than a separate mode.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `The Legend and Colours`,
      content: `The legend under the graph fixes four colours, and they mean the same thing on every step:

- **Blue** is the parent function — $\\sin$, $\\cos$ or $\\tan$ — and also the blue handles that belong to it, the domain cut and the composition input.
- **Amber** is the inverse — the reflected curve on step 3, the principal interval and the returned angle on step 4.
- **Red** is the horizontal line and its crossings, the instrument of the line test.
- A **pale blue band** marks the kept domain on step 2.

The convention matters most on step 3, where the two curves are on screen together and the reflection animation blends one colour into the other. It matters again on step 4, where the path from input to output starts blue and ends amber: the input belongs to the function, the output belongs to the inverse.

The same convention is used in the figures on the [inverse trigonometric functions](!/trigonometry/inverse-functions) lesson, so a figure there and a state of this tool read as the same picture.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `The Explanations Panel`,
      content: `The panel on the right of the tool does not hold fixed text. It is computed from the current state and rewrites itself as you work.

On step 1 it states how many times the line crosses the curve and draws the conclusion. On step 2 it prints the kept domain, counts crossings on it, and explains the verdict badge in words — for example, that the piece reaches only part of the range, and which outputs would have no answer. On step 3 it shows the domain-and-range table and, for tangent, the note about the asymptotes turning horizontal. On step 4 it writes out the composition line by line and says whether the input was folded.

Under the live text, each step carries a short note with two links into this page: one to the frozen state that shows the idea, one to the section that explains it. Those notes are the bridge between working the tool and reading about it.

Whenever a result depends on a convention — the principal interval in particular — the panel names it, so a non-standard cut is labelled as a valid inverse of that piece but not as $\\arcsin$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Why Restriction Is Necessary`,
      content: `A function has an inverse only if every output comes from exactly one input. The trigonometric functions fail that condition as badly as a function can: they are periodic, so every value they take, they take infinitely often. $\\sin x = \\frac{1}{2}$ at $\\frac{\\pi}{6}$, at $\\frac{5\\pi}{6}$, and at every angle $2\\pi$ away from either.

That is what the line test on step 1 shows, and it leaves two options. One is to give up on an inverse function and accept a relation that returns many answers. The other is to throw away most of the domain and keep a single piece on which the function is **one-to-one**. Mathematics takes the second option, because a function is far more useful than a relation — it can be graphed, composed and computed.

The restriction is not a trick to make the test pass. It is a choice about which answer the inverse will return when asked, for instance, which angle has sine $\\frac{1}{2}$. The inverse returns $\\frac{\\pi}{6}$ because $\\frac{\\pi}{6}$ is the solution inside the kept piece. The [lesson section](!/trigonometry/inverse-functions#1) develops the same argument in prose.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj12: {
      title: `Principal Intervals as Conventions`,
      content: `Many restrictions make a trigonometric function one-to-one with its full range. Sine works on $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$, but equally on $[\\frac{\\pi}{2}, \\frac{3\\pi}{2}]$ or on any interval of length $\\pi$ between two consecutive turning points. The tool accepts all of them on step 2.

The **principal interval** is the one everyone agrees to use, and the choice has reasons. It contains $0$, so small angles map to themselves. It covers angles in the first quadrant, where the special values live. And it is one continuous piece on which the function is **monotonic** — sine and tangent increasing, cosine decreasing — which is why cosine's interval is $[0, \\pi]$ rather than one centred on zero: cosine turns at zero, so no interval centred there can be one-to-one.

Because the interval is a convention, the inverse inherits it. $\\arcsin$ always returns an angle in $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$, $\\arccos$ in $[0, \\pi]$, $\\arctan$ in $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$. The [monotonicity](!/trigonometry/properties#6) of each function on its interval is treated on the properties page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj13: {
      title: `Domain and Range Trade Places`,
      content: `Reflecting a graph across $y = x$ sends every point $(x, y)$ to $(y, x)$. Whatever the original graph's inputs were, they become the reflected graph's outputs, and the other way round. That single fact produces every domain and range of the inverse functions without memorising them.

$$\\begin{array}{c|c|c} & \\text{domain} & \\text{range} \\\\ \\hline \\sin \\text{ (restricted)} & [-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}] & [-1, 1] \\\\ \\arcsin & [-1, 1] & [-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}] \\end{array}$$

The same swap gives $\\arccos: [-1, 1] \\to [0, \\pi]$ and $\\arctan: \\mathbb{R} \\to (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$. It also explains the one feature that looks new: tangent's vertical asymptotes at $\\pm\\frac{\\pi}{2}$ become arctangent's horizontal asymptotes at $y = \\pm\\frac{\\pi}{2}$, because a vertical line reflects into a horizontal one.

The composition fold on step 4 is the same fact read backwards. $\\arcsin(\\sin x)$ can only return values in the range of $\\arcsin$, so for inputs outside that range it cannot return $x$. The [graphs of the inverse functions](!/trigonometry/inverse-functions#9) are compared side by side on the lesson page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj14: {
      title: `Related Concepts and Tools`,
      content: `This tool builds the inverse functions from the graphs of the originals, so the pages it leans on are the ones that establish those graphs.

The [Trigonometric Functions Graphs](!/trigonometry/visual-tools/functions-graphs) explorer draws each of the six functions on its own and reads values along the curve — the place to settle the shape of sine, cosine and tangent before cutting them. The [Trigonometric Function Parameters](!/trigonometry/visual-tools/function-parameters) tool changes the amplitude, period and shift of those curves, which is useful for seeing why the principal interval of $\\sin(Bx)$ scales with $B$. The [Unit Circle Visualizer](!/visual-tools/unit-circle) is where the values being inverted come from: the angle whose sine is $\\frac{1}{2}$ is found there by reading the circle backwards.

For the theory in prose, the [inverse trigonometric functions](!/trigonometry/inverse-functions) lesson covers each inverse, the notation, evaluation, and [compositions](!/trigonometry/inverse-functions#8) in full, and the [properties](!/trigonometry/properties) page covers periodicity and monotonicity, the two facts that make restriction both necessary and possible.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj15: {
      title: `The Line Test Fails`,
      content: `The first example loads sine on its full domain with the line $y = \\frac{1}{2}$. It is the picture behind the [line test](!#the-line-test).`,
      after: `Several red dots sit on the one dashed line, and the counter reports every one of them. Each dot is a different angle whose sine is $\\frac{1}{2}$ — $\\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$, and their copies a full turn apart. An inverse would have to pick one of them, and on the full domain nothing says which. That is the problem the next step, [restricting the domain](!#restricting-the-domain), exists to solve.`,
      before: ``,
      link: '',
    },

    obj16: {
      title: `Arcsine`,
      content: `Sine cut to $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ and reflected is the definition of $\\arcsin$, shown here exactly as the [reflection step](!#reflecting-across-y-x) draws it.`,
      after: `The blue piece rises steadily from $-1$ to $1$, so each height is reached once. Its mirror image in the dashed diagonal, in amber, therefore passes the vertical line test and is a function: $\\arcsin$, with domain $[-1, 1]$ and range $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$. Every feature of the amber curve is a feature of the blue one with the axes exchanged.`,
      before: ``,
      link: '',
    },

    obj17: {
      title: `Arccosine`,
      content: `Cosine needs a different cut, because it turns at $0$. Its principal interval is $[0, \\pi]$, and the reflection of that piece is $\\arccos$.`,
      after: `On $[0, \\pi]$ cosine falls steadily from $1$ to $-1$, so the kept piece is one-to-one and reaches the whole range. The amber reflection is $\\arccos$: defined on $[-1, 1]$, returning angles in $[0, \\pi]$, and decreasing, as its parent was. The different interval is why $\\arcsin$ and $\\arccos$ return different angles for the same input, as compared in [principal intervals as conventions](!#principal-intervals-as-conventions).`,
      before: ``,
      link: '',
    },

    obj18: {
      title: `Arctangent`,
      content: `Tangent cut to the open interval $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ and reflected gives $\\arctan$, the one inverse whose domain is every real number.`,
      after: `The dashed blue lines are tangent's asymptotes at the ends of the cut; after the reflection they are the dashed amber lines at $y = \\pm\\frac{\\pi}{2}$. Arctan approaches both and reaches neither. The domain of $\\arctan$ is all of $\\mathbb{R}$, because the range of the kept tangent piece was all of $\\mathbb{R}$ — the swap described in [domain and range trade places](!#domain-and-range-trade-places).`,
      before: ``,
      link: '',
    },

    obj19: {
      title: `The Composition Fold`,
      content: `The last example feeds $\\frac{5\\pi}{6}$ into sine and the result into $\\arcsin$ — the standard case where the composition does not give back its input. It is the frozen form of [composing and the fold](!#composing-and-the-fold).`,
      after: `$\\sin \\frac{5\\pi}{6} = \\frac{1}{2}$, and $\\arcsin \\frac{1}{2} = \\frac{\\pi}{6}$, so $\\arcsin(\\sin \\frac{5\\pi}{6}) = \\frac{\\pi}{6}$, not $\\frac{5\\pi}{6}$. The amber arrow on the axis carries the input into the shaded interval, to the one angle there with the same sine. The composition is the identity only on the principal interval; everywhere else it folds.`,
      before: ``,
      link: '',
    },
  }

  const introContent = {
    id: 'intro',
    title: '',
    content: ``,
  }

  const faqQuestions = {
    obj0: {
      question: 'Why do the trigonometric functions need a restricted domain to have an inverse?',
      answer: 'Because they are periodic, every value they take is taken infinitely many times, so a horizontal line crosses the graph more than once and the horizontal line test fails. Restricting the domain to one piece on which the function is one-to-one, called the principal interval, leaves exactly one input for each output, and that piece has an inverse.',
      sectionId: 'why-restriction-is-necessary',
    },
    obj1: {
      question: 'Why is the principal interval of cosine [0, pi] and not centred on zero?',
      answer: 'Cosine has a turning point at zero, so any interval centred on zero contains two inputs for most outputs and is not one-to-one. On [0, pi] cosine decreases steadily from 1 to -1, reaching every value in its range exactly once, which makes it the natural choice.',
      sectionId: 'principal-intervals-as-conventions',
    },
    obj2: {
      question: 'Why is arcsin(sin x) not always equal to x?',
      answer: 'Arcsin only returns angles in its range, the interval from -pi/2 to pi/2. If x lies outside that interval, arcsin cannot return x; it returns the one angle inside the interval with the same sine. For example, arcsin(sin(5pi/6)) = arcsin(1/2) = pi/6. The composition is the identity only on the principal interval.',
      sectionId: 'composing-and-the-fold',
    },
    obj3: {
      question: 'How do the domain and range of an inverse function relate to the original?',
      answer: 'Reflecting a graph across the line y = x sends each point (x, y) to (y, x), so the domain and range trade places. The restricted sine has domain from -pi/2 to pi/2 and range from -1 to 1; arcsin therefore has domain from -1 to 1 and range from -pi/2 to pi/2.',
      sectionId: 'domain-and-range-trade-places',
    },
    obj4: {
      question: 'Why does arctan have horizontal asymptotes?',
      answer: 'Tangent, restricted to the open interval from -pi/2 to pi/2, has vertical asymptotes at both ends. Reflecting across y = x turns a vertical line into a horizontal one, so arctan has horizontal asymptotes at y = -pi/2 and y = pi/2, approaching both without reaching either.',
      sectionId: 'arctangent',
    },
  }

  const schemas = {
    webApplication: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Inverse Trigonometric Functions Explorer',
      url: 'https://www.learnmathclass.com/trigonometry/visual-tools/inverse-functions',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires JavaScript',
      description: 'Interactive explorer that builds arcsin, arccos and arctan in four steps: the horizontal line test, restricting the domain, reflecting across y = x, and the composition fold.',
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
        { '@type': 'ListItem', position: 4, name: 'Inverse Trigonometric Functions', item: 'https://www.learnmathclass.com/trigonometry/visual-tools/inverse-functions' },
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
      relatedTools: getRelatedTools('inverse-functions'),
      instructions,
      explanations,
      stateUnits,
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: 'Inverse Trig Functions Explorer | Learn Math Class',
        description: 'Build arcsin, arccos and arctan step by step: fail the horizontal line test, restrict the domain, reflect across y = x, and watch the composition fold.',
        hubDescription: 'An interactive explorer that builds the inverse trigonometric functions in four steps. Drag a horizontal line to watch the line test fail, drag two handles to cut the domain until the function is one-to-one, reflect the kept piece across y = x, and feed inputs through the composition to see where it folds. Works on sine, cosine and tangent, with the principal interval of each marked.',
        category: 'Functions',
        subCategory: 'Inverse Functions',
        keywords: keyWords.join(', '),
        url: '/trigonometry/visual-tools/inverse-functions',
        name: 'Inverse Trigonometric Functions Explorer',
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="8" y1="40" x2="72" y2="40" stroke="#B5D4F4" stroke-width="0.9"/><line x1="40" y1="8" x2="40" y2="72" stroke="#B5D4F4" stroke-width="0.9"/><line x1="14" y1="66" x2="66" y2="14" stroke="#B5D4F4" stroke-width="1" stroke-dasharray="3,2"/><path d="M 24.3 55.7 C 30 55.7, 34 47, 40 40 C 46 33, 50 24.3, 55.7 24.3" fill="none" stroke="#85B7EB" stroke-width="1.9"/><path d="M 24.3 55.7 C 24.3 50, 33 46, 40 40 C 47 34, 55.7 30, 55.7 24.3" fill="none" stroke="#FAC775" stroke-width="1.9"/><circle cx="24.3" cy="55.7" r="2.2" fill="#85B7EB" stroke="#185FA5" stroke-width="0.8"/><circle cx="55.7" cy="24.3" r="2.2" fill="#FAC775" stroke="#854F0B" stroke-width="0.8"/><text x="62" y="30" font-family="Georgia,serif" font-size="7.5" fill="#85B7EB" font-style="italic">sin</text><text x="46" y="16" font-family="Georgia,serif" font-size="7.5" fill="#FAC775" font-style="italic">arcsin</text><text x="40" y="77" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle">y = x</text></svg>`,
      },
    },
  }
}

export default function InverseFunctionsToolPage({
  relatedTools,
  instructions,
  explanations,
  stateUnits,
  seoData,
  sectionsContent,
  introContent,
  faqQuestions,
  schemas,
}) {

  const plain = (id, obj) => ({ id, title: obj.title, link: obj.link, content: [obj.content] })
  const framed = (id, obj, unitKey) => ({
    id,
    title: obj.title,
    link: obj.link,
    content: [
      obj.content,
      <div key={`u-${unitKey}`} dangerouslySetInnerHTML={{ __html: stateUnits[unitKey] }} />,
      obj.after,
    ],
  })

  const genericSections = [
    plain('choosing-the-function', sectionsContent.obj1),
    plain('the-four-steps', sectionsContent.obj2),
    plain('the-line-test', sectionsContent.obj3),
    plain('restricting-the-domain', sectionsContent.obj4),
    plain('the-principal-interval-shortcut', sectionsContent.obj5),
    plain('reflecting-across-y-x', sectionsContent.obj6),
    plain('composing-and-the-fold', sectionsContent.obj7),
    plain('the-examples-row', sectionsContent.obj8),
    plain('the-legend-and-colours', sectionsContent.obj9),
    plain('the-explanations-panel', sectionsContent.obj10),
    plain('why-restriction-is-necessary', sectionsContent.obj11),
    plain('principal-intervals-as-conventions', sectionsContent.obj12),
    plain('domain-and-range-trade-places', sectionsContent.obj13),
    framed('the-line-test-fails', sectionsContent.obj15, 'lineTestFails'),
    framed('arcsine', sectionsContent.obj16, 'arcsin'),
    framed('arccosine', sectionsContent.obj17, 'arccos'),
    framed('arctangent', sectionsContent.obj18, 'arctan'),
    framed('the-composition-fold', sectionsContent.obj19, 'compositionFold'),
    plain('related-concepts-and-tools', sectionsContent.obj14),
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
        Inverse Trigonometric Functions
      </h1>
      <br />

      <div style={{ width: '80%', margin: 'auto' }}>
        <ExplanationDetails
          title='How to use'
          instructions={instructions}
          accent='#1e40af'
        />
      </div>
      <br />

      <div style={{ width: '90%', margin: 'auto', zoom: 0.9 }}>
        <InverseFunctionExplorer
          explanations={explanations}
          renderText={processContent}
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
