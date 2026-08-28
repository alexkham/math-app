


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// Canonical per-family explanations live in getStaticProps below (SSR/SEO-visible);
// the component renders them as the info panel's "Families" tab.
import FunctionComposition from '../../../../app/components/functions/compositions/FunctionCompositions'
import compDiagrams from '../../../../app/components/functions/compositions/functionCompositionDiagrams'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'


export async function getStaticProps(){

  const keyWords = [
    'function composition',
    'composition of functions',
    'f of g of x',
    'f composed with g',
    'function composition visualizer',
    'composite function calculator',
    'inner and outer function',
    'how to compose functions',
    'order of composition',
    'non-commutative composition',
    'f circle g',
    'g circle f',
    'inverse function composition',
    'identity function composition',
    'visualize composite functions',
  ]

  const sectionsContent = {

    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Open the page and three panels appear. On the left, the **picker** is split into two halves: **Outer ($f$)** at the top and **Inner ($g$)** below. Each lists ten base functions. In the center, the **plot panel** shows up to four curves:

• $f \\circ g$ in solid blue — the composition $f(g(x))$
• $g \\circ f$ in solid amber — the composition $g(f(x))$
• $f$ in dashed gray (off by default) — outer alone, for reference
• $g$ in dashed teal (off by default) — inner alone, for reference

A **legend chip strip** below the plot lets you toggle any curve. By default only the two compositions are shown, so the asymmetry between $f \\circ g$ and $g \\circ f$ is the visual focus. On the right, the **info panel** shows the symbolic forms of both compositions and explains why the order matters for this specific pair.

The page launches with the [quadratic](!#composing-with-the-quadratic) $f(x) = x^2$ and [sine](!#composing-with-sine) $g(x) = \\sin(x)$. You see $f(g(x)) = \\sin^2(x)$ in blue and $g(f(x)) = \\sin(x^2)$ in amber — clearly two different curves built from the same two ingredients.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Picking Outer and Inner Functions`,
      content: `Two independent pickers control the composition:

• **Outer** ($f$) — the function applied **second**. Highlighted in **gray** when active. This is the function you eventually feed the result into.
• **Inner** ($g$) — the function applied **first**. Highlighted in **teal** when active. This is what processes $x$ before $f$ sees it.

Ten functions are available on each side: the [identity](!#composing-with-the-identity), [quadratic](!#composing-with-the-quadratic) $x^2$, [cubic](!#composing-with-the-cubic) $x^3$, [reciprocal](!#composing-with-the-reciprocal) $1/x$, [exponential](!#composing-with-the-exponential) $e^x$, [logarithm](!#composing-with-the-logarithm) $\\ln(x)$, [sine](!#composing-with-sine), [cosine](!#composing-with-cosine), [absolute value](!#composing-with-the-absolute-value) $|x|$, and [square root](!#composing-with-the-square-root) $\\sqrt{x}$.

You can pick [the same function for both sides](!#composing-a-function-with-itself), in which case $f \\circ g = g \\circ f$ trivially and you see one curve doubled. Most pairs produce two distinctly different curves — that's the point. The picker uses **color** to signal which side you're choosing for: gray dot = outer, teal dot = inner.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `The Legend Chips`,
      content: `Below the plot, four colored chips correspond to the four available curves:

• $f$ — gray chip showing $f$'s equation. Off by default.
• $g$ — teal chip showing $g$'s equation. Off by default.
• $f \\circ g$ — blue chip showing the composed expression $f(g(x))$. On by default.
• $g \\circ f$ — amber chip showing $g(f(x))$. On by default.

Click any chip to toggle that curve's visibility. The chip dims and the curve disappears.

The chip text updates live with the symbolic expression. With outer = $\\sqrt{x}$ and inner = $x^2$, the $f \\circ g$ chip reads "$\\sqrt{(x)^2}$" and the $g \\circ f$ chip reads "$(\\sqrt{x})^2$" — visibly different expressions even though they look similar at a glance. Algebraically the first simplifies to $|x|$ and the second to $x$ (for $x \\geq 0$), which the plot then confirms.

Toggling the underlying functions $f$ and $g$ on lets you see directly how each composed curve relates to its ingredients.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Why Order Matters`,
      content: `Function composition is **not commutative** — in general, $f \\circ g \\ne g \\circ f$. The two compositions evaluate the same two functions but in opposite orders, and the resulting outputs are usually completely different.

Concrete example with $f(x) = x^2$ and $g(x) = x + 1$:

• $f(g(x)) = (x + 1)^2 = x^2 + 2x + 1$ — square first the shifted value
• $g(f(x)) = x^2 + 1$ — add 1 to the squared value

Plotting both, $f \\circ g$ is a parabola shifted left by 1, while $g \\circ f$ is a parabola shifted up by 1. Same two functions, two very different graphs.

The plot makes this asymmetry the **main visual story**: by hiding $f$ and $g$ by default and showing the two compositions side-by-side, the page foregrounds exactly how much the order changes the result. Swap which function you pick for outer vs inner — the blue and amber curves swap roles.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Special Cases the Tool Highlights`,
      content: `The info panel watches the current pair and surfaces noteworthy combinations:

• [Same function on both sides](!#composing-a-function-with-itself) — $f \\circ g = g \\circ f$ trivially. The blue and amber curves coincide exactly.

• [Identity as outer](!#composing-with-the-identity) — $f(g(x)) = g(x)$. The composition is just $g$ unchanged. Useful to see that the identity function $f(x) = x$ acts as the neutral element for composition.

• **Identity as inner** — $g(f(x)) = f(x)$. Symmetric to the above.

• [Exponential and logarithm](!#the-inverse-pair-exponential-and-logarithm) — these are **inverse** functions. The info panel flags this: $e^{\\ln x} = x$ for $x > 0$, and $\\ln(e^x) = x$ for all real $x$. Both compositions collapse to (a restricted) identity. The plot shows two straight lines along $y = x$ — the visual signature of an inverse pair.

• [Square root and quadratic](!#the-square-and-the-square-root) — a classic asymmetric pair: $\\sqrt{x^2} = |x|$ (defined for all $x$, V-shaped), while $(\\sqrt{x})^2 = x$ (defined only for $x \\geq 0$). The two compositions are different graphs, illustrating that even when one composition simplifies cleanly, the reverse may not.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Domain Restrictions in Composition`,
      content: `Composition can create domain restrictions that neither original function had. The visualizer surfaces these naturally — wherever the composed value is undefined, the curve simply disappears from the plot.

Patterns to watch for:

• **Inner produces values outside outer's domain** — pick $g(x) = x^2 - 4$ (always non-negative or negative for $|x| < 2$) and $f(x) = \\ln(x)$ (needs positive input). The composition $\\ln(x^2 - 4)$ is defined only where $x^2 - 4 > 0$, i.e., $|x| > 2$. The blue curve has a gap in the middle.

• **Outer expands the visible domain via even powers** — $\\sqrt{x^2}$ is defined for all $x$ because $x^2 \\geq 0$ always, even though $\\sqrt{x}$ alone needs $x \\geq 0$. The composed domain is broader than the outer function's natural domain.

• **Reciprocal in the inner** — $1/x$ has a singularity at $0$; any composition with $1/x$ as inner has a vertical asymptote at $x = 0$, no matter what the outer function is.

These domain effects often determine whether the two composition orders look anywhere near each other.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Composition Notation`,
      content: `Two equivalent notations appear throughout the visualizer:

• **Function-of-function**: $f(g(x))$ — read "$f$ of $g$ of $x$". The outermost function is the last to act; you evaluate inside-out.
• **Circle notation**: $(f \\circ g)(x)$ — read "$f$ composed with $g$ of $x$" or "$f$ ring $g$". Same meaning. The $\\circ$ symbol is the **composition operator**.

The order in $f \\circ g$ is read **right-to-left as inputs flow left-to-right**: $g$ is applied first (it sits next to the $x$), then $f$ wraps around. Many students initially read this backwards. The picker labels "Outer ($f$)" and "Inner ($g$)" reinforce the correct mental model: outer = applied second, inner = applied first.

In the chip strip, both forms appear: the chip label uses circle notation ($f \\circ g$) while the formula uses the equivalent function-of-function form built from the actual expressions.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Is Function Composition?`,
      content: `**Composition** takes two functions $f$ and $g$ and builds a new function by chaining them: the output of one becomes the input of the other. Formally, $(f \\circ g)(x) = f(g(x))$ for every $x$ in the domain of $g$ for which $g(x)$ lies in the domain of $f$.

Geometrically, composition is a **two-step pipeline**:
1. Feed $x$ into $g$, producing the intermediate value $g(x)$.
2. Feed that intermediate value into $f$, producing the final value $f(g(x))$.

The result is itself a function — call it $h(x) = f(g(x))$ — that you can graph, differentiate, integrate, or further compose. Most "complicated" functions you meet in calculus are compositions of simpler ones: $\\sin(x^2)$ is sine composed with squaring; $e^{-x^2/2}$ is exponential composed with negative-half-square.

Composition is the natural way to **build up** functions from a small library of primitives, which is why it appears in nearly every later topic: chain rule, inverse functions, change of variables, transformations, and more.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Why Composition Matters`,
      content: `Composition is the **operation** by which simple functions combine into complex ones. Three big places it shows up:

• **Chain rule in calculus** — to differentiate $h(x) = f(g(x))$, the chain rule gives $h'(x) = f'(g(x)) \\cdot g'(x)$. Every nested derivative computation is a composition unpacking. Without understanding composition, the chain rule looks arbitrary; with it, the rule is just "apply the derivative-of-pipeline rule."

• **Inverse functions** — a function $f^{-1}$ is the inverse of $f$ precisely when $f \\circ f^{-1} = f^{-1} \\circ f = \\text{id}$, the identity. Composition is the operation that defines what "inverse" means.

• **Function transformations** — the standard transformation $g(x) = a \\cdot f(b(x - h)) + k$ is a composition of $f$ with the affine function $bx - bh$, then composed with another affine function $ay + k$. Every transformation visualizer is implicitly working with composition.

Beyond these, composition is the algebraic backbone of category theory, group theory, and most of abstract mathematics. Mastering it visually here pays off broadly.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Inverse Functions** — the special case of composition where $f \\circ g = g \\circ f = \\text{id}$. The companion visualizer plots $f$ and $f^{-1}$ together with the $y = x$ mirror line.

**Function Transformations** — visualizer for the affine composition pattern $a \\cdot f(b(x-h)) + k$. Composition with $bx - bh$ on the inside and $ay + k$ on the outside.

**Chain Rule** — calculus theory for differentiating compositions. Reads directly from the inner-outer structure the picker exposes.

**Function Types** — the catalog of base function families used as building blocks. Every entry in the picker comes from this catalog.

**Domain of a Function** — composed functions often have restricted domains that neither original function had. The Domain visualizer helps reason about these restrictions.

**Function Symmetry** — composing two even functions stays even; composing two odd functions stays odd; mixed compositions may break both. A nice cross-cutting exercise.

**Trigonometric Identities** — many trig identities are statements about specific compositions: $\\sin^2 + \\cos^2 = 1$, double-angle formulas involve compositions of trig with doubling.

**Polynomial Functions** — the closure of polynomials under composition is the foundation of polynomial algebra.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Composing with the Identity`,
      content: `The identity $f(x) = x$ is composition's neutral element: whichever side it occupies, the other function passes through untouched.`,
      before: ``,
      after: `The algebra is one line each way: identity as outer gives $f(g(x)) = g(x)$; identity as inner gives $g(f(x)) = g(x)$ as well. Composition with the identity is the function-world analogue of multiplying by $1$.

That neutrality is what makes the identity the reference point for [inverse functions](!#the-inverse-pair-exponential-and-logarithm): a pair of functions are inverses precisely when their composition collapses to this do-nothing map.

In the picker, choosing identity for either role is the fastest sanity check that you have the outer/inner reading right — whichever curve survives unchanged is the other function.`,
      link: '',
    },
    obj12: {
      title: `Composing with the Quadratic`,
      content: `Squaring is the page's launch outer function, and the launch pair $x^2 \\circ \\sin$ is the canonical order-matters demonstration.`,
      before: ``,
      after: `As outer, squaring acts on outputs: $(\\sin x)^2$ oscillates between $0$ and $1$ — never negative, twice the frequency, all the wave's dips folded upward. As inner, it acts on inputs: $\\sin(x^2)$ keeps the full $[-1, 1]$ range but its oscillations accelerate as $x^2$ races ahead — slow near the origin, frantic at the edges.

One function, two completely different jobs depending on which seat it takes. Output-side squaring reshapes **values**; input-side squaring reshapes **pacing**.

Squaring's even symmetry also transfers differently: $\\sin(x^2)$ is even (the input forgets sign), while $(\\sin x)^2$ is even for its own reason — the output forgets sign. Compare with [the cubic](!#composing-with-the-cubic), which preserves sign in both roles.`,
      link: '',
    },
    obj13: {
      title: `Composing with the Cubic`,
      content: `Cubing looks like squaring's sibling, but it keeps the sign of whatever passes through — and that changes both compositions.`,
      before: ``,
      after: `As outer, $(\\sin x)^3$ still oscillates through negative values — the wave is squashed toward the axis at small amplitudes but keeps its sign pattern, unlike the always-positive $(\\sin x)^2$. As inner, $\\sin(x^3)$ accelerates even more violently than $\\sin(x^2)$: the cubic's input-stretching grows with the cube of distance.

Cubing preserves oddness: sine is odd, cubing is odd, and both compositions are odd too — a composition of odd functions is always odd. The frozen scene shows it: both curves have point symmetry through the origin.

Put this section's picture next to [the quadratic's](!#composing-with-the-quadratic) and the even/odd contrast — the deepest difference between the two power functions — is visible at a glance.`,
      link: '',
    },
    obj14: {
      title: `Composing with the Reciprocal`,
      content: `The reciprocal $1/x$ injects singularities into any composition it joins — but where those singularities land depends entirely on its seat.`,
      before: ``,
      after: `As outer, $1/\\sin(x)$ blows up wherever the inner function crosses zero: vertical asymptotes at every multiple of $\\pi$, turning the gentle sine wave into the spiky cosecant. As inner, $\\sin(1/x)$ has a single trouble spot at $x = 0$ — but what a spot: as $x \\to 0$, $1/x$ sweeps through infinitely many periods, and the curve oscillates infinitely fast, a classic pathological example.

The rule of thumb the pair teaches: an outer reciprocal converts the inner function's **zeros** into asymptotes; an inner reciprocal concentrates all the drama at its own singularity.

The domain effects here are the extreme case of the patterns cataloged in [Domain Restrictions in Composition](!#domain-restrictions-in-composition).`,
      link: '',
    },
    obj15: {
      title: `Composing with the Exponential`,
      content: `The exponential $e^x$ maps everything to positive territory — and as an outer function it lifts any bounded wave into a positive one.`,
      before: ``,
      after: `As outer, $e^{\\sin x}$ oscillates between $e^{-1} \\approx 0.37$ and $e \\approx 2.72$: the sine's symmetric swing becomes an asymmetric breathing between reciprocal bounds, always positive. As inner, $\\sin(e^x)$ is flat and slow on the far left (where $e^x$ barely moves) and oscillates ever faster to the right as $e^x$ explodes.

The exponential's signature — turning addition into multiplication — shows in the outer role: equal ups and downs of sine become equal **ratios** above and below $1$.

Its inverse partnership with the [logarithm](!#composing-with-the-logarithm) collapses both compositions to the identity — the special case given its own section in [the inverse pair](!#the-inverse-pair-exponential-and-logarithm).`,
      link: '',
    },
    obj16: {
      title: `Composing with the Logarithm`,
      content: `The logarithm is the fussiest function in the picker — it demands positive input, so its compositions live or die by what the inner function delivers.`,
      before: ``,
      after: `As outer, $\\ln(x^2)$ survives everywhere except $x = 0$: the squaring feeds it positive values on both sides, doubling the log's usual half-line domain into two mirrored branches. This is the domain-**expansion** trick — the composed domain is bigger than the log's own.

As inner, $(\\ln x)^2$ keeps the log's restriction: nothing exists for $x \\leq 0$. The squared output bends the log's slow climb into a valley bottoming at $x = 1$, where $\\ln 1 = 0$.

The general lesson: an outer function inherits its **input supply** from the inner one. Whether a composition's domain shrinks, survives, or grows is decided at that interface — the theme of [Domain Restrictions in Composition](!#domain-restrictions-in-composition).`,
      link: '',
    },
    obj17: {
      title: `Composing with Sine`,
      content: `Sine brings periodicity to whichever seat it takes — but only the outer seat lets it keep its own rhythm.`,
      before: ``,
      after: `As outer, $\\sin(x^2)$ is sine forced to dance to the quadratic's tune: still bounded in $[-1, 1]$, but with wavelength shrinking as the input accelerates. As inner, $(\\sin x)^2$ keeps sine's steady period; the squaring only reshapes the values.

The bound $[-1, 1]$ survives whenever sine is the **last** function applied — an outer sine caps any composition. An inner sine instead hands its bounded output to the outer function, which is why $e^{\\sin x}$ and $(\\sin x)^2$ are both bounded but $\\sin(e^x)$ merely oscillates.

Sine and [cosine](!#composing-with-cosine) behave identically in composition up to a phase shift — swap them in any pair and the curves slide by a quarter period.`,
      link: '',
    },
    obj18: {
      title: `Composing with Cosine`,
      content: `Cosine composes exactly like sine — with one practical difference: it starts at its peak, and that changes where the composed features land.`,
      before: ``,
      after: `As outer, $\\cos(x^2)$ begins at $\\cos(0) = 1$ and ripples outward symmetrically — an even function of an even function. As inner, $(\\cos x)^2$ oscillates between $0$ and $1$ with its maxima at multiples of $\\pi$, tracing the power-reduction identity $\\cos^2 x = \\tfrac{1 + \\cos 2x}{2}$ in live geometry.

Because cosine is even, an inner cosine makes **any** composition even: $f(\\cos x)$ always has mirror symmetry across the $y$-axis, whatever $f$ is. That inheritance rule — symmetry flowing from the inner function outward — is one of composition's cleanest structural facts.

Everything else transfers from [sine](!#composing-with-sine) with a $\\pi/2$ shift.`,
      link: '',
    },
    obj19: {
      title: `Composing with the Absolute Value`,
      content: `Absolute value is the fold: it reflects everything negative up into positive territory, and the two seats fold different things.`,
      before: ``,
      after: `As outer, $|\\sin x|$ folds the **output**: every dip of the wave flips upward, producing the rectified sine — period halved to $\\pi$, range $[0, 1]$. As inner, $\\sin|x|$ folds the **input**: the right half of the sine wave is mirrored to the left, making the curve even but leaving each half unchanged.

The pair is the cleanest illustration of the outer/inner asymmetry because the fold is so easy to see: one graph is creased along the $x$-axis, the other along the $y$-axis.

Like the [quadratic](!#composing-with-the-quadratic), an inner $|x|$ forces evenness on any composition — both erase the input's sign before the outer function ever sees it.`,
      link: '',
    },
    obj20: {
      title: `Composing with the Square Root`,
      content: `The square root brings the sharpest domain scissors in the picker: whatever the inner function sends below zero is simply cut away.`,
      before: ``,
      after: `As outer, $\\sqrt{\\sin x}$ exists only where $\\sin x \\geq 0$ — the positive arches survive as rounded humps and the negative dips vanish entirely, leaving a curve that lives on alternating intervals $[2k\\pi, (2k{+}1)\\pi]$. As inner, $\\sin(\\sqrt{x})$ exists only for $x \\geq 0$ and oscillates ever more **slowly**, since $\\sqrt{x}$ feeds sine a decelerating input — the mirror image of the accelerating $\\sin(x^2)$.

An outer root censors the inner function's negative stretches; an inner root restricts the axis and stretches the pacing. Two different scissors from the same function.

Its algebraically famous pairing with the quadratic — $\\sqrt{x^2}$ versus $(\\sqrt{x})^2$ — gets its own treatment in [The Square and the Square Root](!#the-square-and-the-square-root).`,
      link: '',
    },
    obj21: {
      title: `The Inverse Pair: Exponential and Logarithm`,
      content: `Pick $e^x$ and $\\ln x$ together, in either order, and composition performs its most elegant trick: both curves collapse onto the line $y = x$.`,
      before: ``,
      after: `The collapse is the **definition** of inverse functions made visible: $f$ and $g$ are inverses exactly when $f \\circ g$ and $g \\circ f$ are the identity. The frozen scene shows the fine print too — $e^{\\ln x} = x$ exists only for $x > 0$ (blue half-line), while $\\ln(e^x) = x$ holds for every real $x$ (amber full line).

That asymmetry between the two identity-copies is not a defect; it records the original domains. Undoing in one order can only recover what the first function accepted.

The identity target of this collapse is the subject of [Composing with the Identity](!#composing-with-the-identity); the general theory lives on the inverse-functions tool, linked under Related Concepts.`,
      link: '',
    },
    obj22: {
      title: `The Square and the Square Root`,
      content: `The pair $x^2$ and $\\sqrt{x}$ looks like an inverse pair — and the frozen scene shows precisely why it only half-is.`,
      before: ``,
      after: `Order one: $\\sqrt{x^2} = |x|$ — defined for every $x$, but V-shaped: squaring first destroys the sign, and the root cannot recover it. Order two: $(\\sqrt{x})^2 = x$ — a perfect identity, but only on $x \\geq 0$, the root's own domain.

So one order gives the wrong function everywhere, and the other gives the right function on half the line. The failure is informative: $x^2$ is not one-to-one, and only one-to-one functions have true inverses. Restrict the square to $x \\geq 0$ and the pair becomes a genuine inverse pair — which is exactly how the square root is defined.

Compare the clean double-identity of [the exponential and logarithm](!#the-inverse-pair-exponential-and-logarithm) to see what full invertibility looks like.`,
      link: '',
    },
    obj23: {
      title: `Composing a Function with Itself`,
      content: `Choose the same function for both seats and the order question evaporates: $f \\circ f$ is $f \\circ f$ whichever way you read it.`,
      before: ``,
      after: `The frozen example is squaring twice: $(x^2)^2 = x^4$ — a flatter valley near the origin and far steeper walls. Self-composition **iterates** a function, and iteration compounds its character: powers multiply ($x^2$ twice is $x^4$), growth stacks ($e^{e^x}$ grows absurdly), and contraction deepens.

Iterated maps are a field of their own — fixed points, cycles, chaos all live in the question "what happens when you compose a function with itself many times?" The visualizer shows iteration depth two; the interesting behavior at depth $n$ starts here.

Note the coinciding curves in the scene: the blue and amber graphs are identical by construction, the degenerate case flagged in [Special Cases](!#special-cases-the-tool-highlights).`,
      link: '',
    },
  }


  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }


  const faqQuestions = {
    obj1: {
      question: "What does the Function Composition Visualizer do?",
      answer: "It plots both compositions of two chosen functions on the same graph — f composed with g in blue and g composed with f in amber — so you can see how the order changes the result. Ten base functions are available for each role, the outer f and the inner g, and the info panel shows the symbolic forms of both compositions side by side."
    },
    obj2: {
      question: "What is function composition?",
      answer: "Function composition takes two functions f and g and builds a new function by chaining them: feed x into g, then feed the result into f. The composed function is written f of g of x, or in circle notation f circle g of x. It is defined wherever g's output lies in f's domain."
    },
    obj3: {
      question: "Is function composition commutative?",
      answer: "No. In general f composed with g is not equal to g composed with f. The order in which you apply the two functions matters because the intermediate value passed between them is different. The visualizer foregrounds this by drawing both compositions on the same plot as two visually distinct curves."
    },
    obj4: {
      question: "How do I read f of g of x correctly?",
      answer: "Read it inside-out: g acts on x first, producing g of x; then f acts on that result. In the circle notation f circle g, the function next to the x — that is g — is applied first, and f wraps around the outside. The picker labels Outer and Inner reinforce this: outer is applied second, inner is applied first."
    },
    obj5: {
      question: "When does composition simplify?",
      answer: "Composition simplifies dramatically for inverse pairs — for example exponential and logarithm collapse to the identity. With the identity function on either side, the composition equals the other function. Same function on both sides makes the two compositions equal trivially. The visualizer flags these special cases automatically in the info panel."
    },
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Function Composition Visualizer",
      "description": "Interactive visualizer that plots both compositions f of g and g of f for any two chosen functions on the same graph, illustrating why composition is not commutative.",
      "url": "https://www.learnmathclass.com/functions/visual-tools/composition",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Two independent pickers for outer f and inner g, each with ten base functions",
        "Four curves available: f, g, f composed with g, and g composed with f",
        "Toggleable legend chips for each curve",
        "Live symbolic expressions of both compositions",
        "Automatic notes for special pairs: identity, inverses, same-function cases",
        "Side info panel with explanation and reading guide for composition notation"
      ],
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "learningResourceType": "Interactive Tool",
      "educationalLevel": "High School, College",
      "keywords": keyWords.join(", ")
    },

    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.learnmathclass.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Functions",
          "item": "https://www.learnmathclass.com/functions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/functions/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Composition of Functions",
          "item": "https://www.learnmathclass.com/functions/visual-tools/composition"
        }
      ]
    },

    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": Object.keys(faqQuestions).map(key => ({
        "@type": "Question",
        "name": faqQuestions[key].question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faqQuestions[key].answer
        }
      }))
    }
  }


  // Framed illustration units for the per-state sections (Line 1 v5): frozen
  // composition pair + attached picture-reading panel, no link (own page).
  const stateUnits = {
    identity: demoUnitFrame({ svg: compDiagrams.identity, caption: 'Identity &#8728; quadratic, frozen',
      text: 'Both compositions collapse onto the same parabola &#8212; the identity passes x&#178; through untouched from either seat.' }),
    quadratic: demoUnitFrame({ svg: compDiagrams.quadratic, caption: 'x&#178; and sin(x), both orders',
      text: 'Blue: (sin&#8202;x)&#178; folded positive at doubled frequency. Amber: sin(x&#178;) accelerating outward. Same ingredients, different seats.' }),
    cubic: demoUnitFrame({ svg: compDiagrams.cubic, caption: 'x&#179; and sin(x), both orders',
      text: 'Blue: (sin&#8202;x)&#179; keeps its sign pattern, squashed toward the axis. Amber: sin(x&#179;) oscillates ever faster. Both curves odd.' }),
    reciprocal: demoUnitFrame({ svg: compDiagrams.reciprocal, caption: '1/x and sin(x), both orders',
      text: 'Blue: 1/sin(x) &#8212; asymptotes at every multiple of &#960;. Amber: sin(1/x) &#8212; infinitely fast oscillation packed against x = 0.' }),
    exponential: demoUnitFrame({ svg: compDiagrams.exponential, caption: 'e&#739; and sin(x), both orders',
      text: 'Blue: e^(sin&#8202;x) breathing between 1/e and e, always positive. Amber: sin(e&#739;) flat on the left, frantic on the right.' }),
    logarithmic: demoUnitFrame({ svg: compDiagrams.logarithmic, caption: 'ln(x) and x&#178;, both orders',
      text: 'Blue: ln(x&#178;) &#8212; two mirrored branches, the domain doubled by the inner square. Amber: (ln&#8202;x)&#178; &#8212; a valley bottoming at x = 1, half-line only.' }),
    sine: demoUnitFrame({ svg: compDiagrams.sine, caption: 'sin(x) and x&#178;, both orders',
      text: 'Blue: sin(x&#178;) &#8212; bounded but accelerating. Amber: (sin&#8202;x)&#178; &#8212; steady rhythm, values folded positive.' }),
    cosine: demoUnitFrame({ svg: compDiagrams.cosine, caption: 'cos(x) and x&#178;, both orders',
      text: 'Blue: cos(x&#178;) ripples out symmetrically from its peak at the origin. Amber: (cos&#8202;x)&#178; traces the power-reduction identity.' }),
    absolute: demoUnitFrame({ svg: compDiagrams.absolute, caption: '|x| and sin(x), both orders',
      text: 'Blue: |sin&#8202;x| creased along the x-axis &#8212; the rectified wave. Amber: sin|x| creased along the y-axis &#8212; the mirrored wave.' }),
    sqrt: demoUnitFrame({ svg: compDiagrams.sqrt, caption: '&#8730;x and sin(x), both orders',
      text: 'Blue: &#8730;(sin&#8202;x) survives only on the positive arches. Amber: sin(&#8730;x) lives on x &#8805; 0 and slows as it goes.' }),
    inversePair: demoUnitFrame({ svg: compDiagrams.inversePair, caption: 'e&#739; &#8728; ln(x) and ln &#8728; e&#739;, frozen',
      text: 'Both compositions collapse onto y = x &#8212; blue on the positive half-line only, amber across the whole axis. Inverses, with their domains showing.' }),
    sqrtSquare: demoUnitFrame({ svg: compDiagrams.sqrtSquare, caption: '&#8730;(x&#178;) versus (&#8730;x)&#178;, frozen',
      text: 'Blue: &#8730;(x&#178;) = |x| &#8212; the V, everywhere. Amber: (&#8730;x)&#178; = x &#8212; the identity, but only for x &#8805; 0. Half an inverse pair.' }),
    selfCompose: demoUnitFrame({ svg: compDiagrams.selfCompose, caption: 'x&#178; &#8728; x&#178;, frozen',
      text: 'Squaring twice gives x&#8308;: flatter valley, steeper walls &#8212; and the blue and amber curves coincide exactly, since order cannot matter.' }),
  };

  // Canonical per-family explanations for the info panel's Families tab
  // (SSR/SEO-visible; the component has no built-in per-family texts).
  const explanations = {
    identity:
      '**Identity** $f(x) = x$ — composition\u2019s neutral element: whichever seat it takes, the other function passes through unchanged.\n\n' +
      '[Learn more about composing with the identity](!#composing-with-the-identity)',
    quadratic:
      '**Quadratic** $x^2$ — as outer it folds outputs positive; as inner it accelerates the pacing and forces evenness.\n\n' +
      '[Learn more about composing with the quadratic](!#composing-with-the-quadratic)',
    cubic:
      '**Cubic** $x^3$ — squaring\u2019s sign-preserving sibling: compositions keep their sign pattern, and odd meets odd stays odd.\n\n' +
      '[Learn more about composing with the cubic](!#composing-with-the-cubic)',
    reciprocal:
      '**Reciprocal** $1/x$ — as outer it turns the inner function\u2019s zeros into vertical asymptotes; as inner it packs infinite oscillation against $x = 0$.\n\n' +
      '[Learn more about composing with the reciprocal](!#composing-with-the-reciprocal)',
    exponential:
      '**Exponential** $e^x$ — as outer it lifts any wave into positive territory between reciprocal bounds; as inner it makes pacing explode rightward.\n\n' +
      '[Learn more about composing with the exponential](!#composing-with-the-exponential)',
    logarithmic:
      '**Logarithm** $\\ln(x)$ — demands positive input: an inner square doubles its domain, while as inner it restricts everything to $x > 0$.\n\n' +
      '[Learn more about composing with the logarithm](!#composing-with-the-logarithm)',
    sine:
      '**Sine** — as outer it caps any composition into $[-1, 1]$; as inner it hands a bounded wave to whatever comes next.\n\n' +
      '[Learn more about composing with sine](!#composing-with-sine)',
    cosine:
      '**Cosine** — sine shifted a quarter period; as inner it forces evenness on any composition, since $\\cos(-x) = \\cos(x)$.\n\n' +
      '[Learn more about composing with cosine](!#composing-with-cosine)',
    absolute:
      '**Absolute value** $|x|$ — the fold: as outer it creases the graph along the $x$-axis, as inner along the $y$-axis.\n\n' +
      '[Learn more about composing with the absolute value](!#composing-with-the-absolute-value)',
    sqrt:
      '**Square root** $\\sqrt{x}$ — the domain scissors: as outer it censors the inner function\u2019s negative stretches; as inner it restricts and decelerates.\n\n' +
      '[Learn more about composing with the square root](!#composing-with-the-square-root)',
  };

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      explanations,
      stateUnits,
      seoData: {
        title: "Function Composition Visualizer | f∘g vs g∘f",
        description: "Plot both compositions of any two functions on the same graph. See why f composed with g and g composed with f are usually two very different curves.",
        keywords: keyWords.join(", "),
        url: "/functions/visual-tools/composition",
        name: "Function Composition Visualizer",
        hubDescription: "Pick an outer function f and an inner function g from ten base families to see both compositions plotted on the same graph — f composed with g in blue, g composed with f in amber. The visual contrast makes it immediate that composition is not commutative, while live symbolic expressions and special-case notes for identity and inverse pairs build the intuition behind f of g of x.",
        category: "",
        subCategory: ""
      },
    }
  }
}


export default function FunctionCompositionPage({seoData, sectionsContent, introContent, faqQuestions, schemas, explanations, stateUnits}) {

  const unit = (key) => <div key={'u-' + key} dangerouslySetInnerHTML={{ __html: stateUnits[key] }} />;

  const genericSections = [
    { id:'getting-started-with-the-visualizer',      title:sectionsContent.obj1.title,  link:sectionsContent.obj1.link,  content:[sectionsContent.obj1.content] },
    { id:'picking-outer-and-inner-functions',        title:sectionsContent.obj2.title,  link:sectionsContent.obj2.link,  content:[sectionsContent.obj2.content] },
    { id:'the-legend-chips',                         title:sectionsContent.obj3.title,  link:sectionsContent.obj3.link,  content:[sectionsContent.obj3.content] },
    { id:'why-order-matters',                        title:sectionsContent.obj4.title,  link:sectionsContent.obj4.link,  content:[sectionsContent.obj4.content] },
    { id:'special-cases-the-tool-highlights',        title:sectionsContent.obj5.title,  link:sectionsContent.obj5.link,  content:[sectionsContent.obj5.content] },
    { id:'domain-restrictions-in-composition',       title:sectionsContent.obj6.title,  link:sectionsContent.obj6.link,  content:[sectionsContent.obj6.content] },
    { id:'composition-notation',                     title:sectionsContent.obj7.title,  link:sectionsContent.obj7.link,  content:[sectionsContent.obj7.content] },
    { id:'what-is-function-composition',             title:sectionsContent.obj8.title,  link:sectionsContent.obj8.link,  content:[sectionsContent.obj8.content] },
    { id:'why-composition-matters',                  title:sectionsContent.obj9.title,  link:sectionsContent.obj9.link,  content:[sectionsContent.obj9.content] },
    { id:'composing-with-the-identity',              title:sectionsContent.obj11.title, link:sectionsContent.obj11.link, content:[sectionsContent.obj11.content, unit('identity'), sectionsContent.obj11.after] },
    { id:'composing-with-the-quadratic',             title:sectionsContent.obj12.title, link:sectionsContent.obj12.link, content:[sectionsContent.obj12.content, unit('quadratic'), sectionsContent.obj12.after] },
    { id:'composing-with-the-cubic',                 title:sectionsContent.obj13.title, link:sectionsContent.obj13.link, content:[sectionsContent.obj13.content, unit('cubic'), sectionsContent.obj13.after] },
    { id:'composing-with-the-reciprocal',            title:sectionsContent.obj14.title, link:sectionsContent.obj14.link, content:[sectionsContent.obj14.content, unit('reciprocal'), sectionsContent.obj14.after] },
    { id:'composing-with-the-exponential',           title:sectionsContent.obj15.title, link:sectionsContent.obj15.link, content:[sectionsContent.obj15.content, unit('exponential'), sectionsContent.obj15.after] },
    { id:'composing-with-the-logarithm',             title:sectionsContent.obj16.title, link:sectionsContent.obj16.link, content:[sectionsContent.obj16.content, unit('logarithmic'), sectionsContent.obj16.after] },
    { id:'composing-with-sine',                      title:sectionsContent.obj17.title, link:sectionsContent.obj17.link, content:[sectionsContent.obj17.content, unit('sine'), sectionsContent.obj17.after] },
    { id:'composing-with-cosine',                    title:sectionsContent.obj18.title, link:sectionsContent.obj18.link, content:[sectionsContent.obj18.content, unit('cosine'), sectionsContent.obj18.after] },
    { id:'composing-with-the-absolute-value',        title:sectionsContent.obj19.title, link:sectionsContent.obj19.link, content:[sectionsContent.obj19.content, unit('absolute'), sectionsContent.obj19.after] },
    { id:'composing-with-the-square-root',           title:sectionsContent.obj20.title, link:sectionsContent.obj20.link, content:[sectionsContent.obj20.content, unit('sqrt'), sectionsContent.obj20.after] },
    { id:'the-inverse-pair-exponential-and-logarithm', title:sectionsContent.obj21.title, link:sectionsContent.obj21.link, content:[sectionsContent.obj21.content, unit('inversePair'), sectionsContent.obj21.after] },
    { id:'the-square-and-the-square-root',           title:sectionsContent.obj22.title, link:sectionsContent.obj22.link, content:[sectionsContent.obj22.content, unit('sqrtSquare'), sectionsContent.obj22.after] },
    { id:'composing-a-function-with-itself',         title:sectionsContent.obj23.title, link:sectionsContent.obj23.link, content:[sectionsContent.obj23.content, unit('selfCompose'), sectionsContent.obj23.after] },
    { id:'related-concepts-and-tools',               title:sectionsContent.obj10.title, link:sectionsContent.obj10.link, content:[sectionsContent.obj10.content] },
  ]

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
      {/* <GenericNavbar/> */}
      <br/>
      <br/>
      <br/>
      <br/>
      <OperaSidebar
        side='right'
        // topOffset='65px'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb/>
      <br/>
      <br/>
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Composition of Functions</h1>
      <br/>
      <FunctionComposition explanations={explanations}/>
      <br/>
      <SectionTableOfContents sections={genericSections}
        showSecondaryNav={true}
        secondaryNavMode="siblings"
        secondaryNavTitle="More in this Section"
      />
      <br/>
      <br/>
      <br/>
      {/* <IntroSection
        id={introContent.id}
        title={introContent.title}
        content={introContent.content}
        backgroundColor='#f9fafb'
        textColor="#06357a"
      /> */}
      <br/>
      {/* <KeyTermsCard
        id="0"
        title={sectionsContent.obj0.title}
        content={sectionsContent.obj0.content}
        after={sectionsContent.obj0.after}
        variant="light"
      /> */}
      <br/>
      <Sections sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      {/* <ScrollUpButton/> */}
    </>
  )
}