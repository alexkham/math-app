
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// Canonical explanations for the gallery live in getStaticProps below (SSR/SEO-visible);
// the component's built-in FAMILIES texts remain only as a legacy fallback.
import FunctionGallery from '../../../../app/components/functions/types/FunctionGallery'
import functionTypesDiagrams from '../../../../app/components/functions/types/functionTypesDiagrams'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'


export async function getStaticProps(){

  const keyWords = [
    'function families',
    'function types',
    'function gallery',
    'visualize functions',
    'linear function visualizer',
    'quadratic function visualizer',
    'cubic function visualizer',
    'exponential function visualizer',
    'logarithmic function visualizer',
    'trigonometric function visualizer',
    'rational function visualizer',
    'absolute value function',
    'square root function',
    'interactive function plotter',
    'function parameters explorer',
  ]

  const sectionsContent = {

    obj1: {
      title: `Getting Started with the Gallery`,
      content: `Open the page and three panels appear side by side. On the left is the **family picker** — a vertical list of every function family the gallery covers. In the center is the **plot panel**, with the family name in the header, the current symbolic equation displayed as a badge, and an interactive graph of $y = f(x)$. On the right is the **info panel**, with tabs for an explanation of the active family and external resources.

The gallery launches on the [linear family](!#the-linear-family) with default parameters $a = 1$, $b = 0$ — the line $y = x$. Click any family in the sidebar to switch to it. The plot, equation, sliders, and explanation all update at once. Parameters reset to their family-specific defaults on every switch, so you always start from a representative example.

The plot supports zoom, crosshair readout, and curve tooltips by default. Mouse over the curve to see the corresponding $(x, f(x))$ values.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Browsing the Family Picker`,
      content: `The picker lists every family with a small glyph showing the characteristic shape of that family and the family's name. Twelve families are included, covering most of pre-calculus and the standard families seen through introductory calculus:

• [Linear](!#the-linear-family) — straight lines
• [Quadratic](!#the-quadratic-family) — parabolas
• [Cubic](!#the-cubic-family) — odd-degree polynomials with an inflection point
• [Power](!#the-power-family) — $ax^n$ for adjustable exponent $n$
• [Rational](!#the-rational-family) — reciprocal curves with vertical asymptotes
• [Exponential](!#the-exponential-family) — multiplicative growth or decay
• [Logarithmic](!#the-logarithmic-family) — the inverse of exponential
• [Trigonometric](!#the-trigonometric-group) — [sine](!#the-sine-family), [cosine](!#the-cosine-family), and [tangent](!#the-tangent-family) (grouped together)
• [Absolute value](!#the-absolute-value-family) — sharp V shape
• [Square root](!#the-square-root-family) — half-sideways parabola

The currently selected family is highlighted in light blue with a darker glyph color, so the picker doubles as a status indicator.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `The Trigonometric Group`,
      content: `Three of the families — [sine](!#the-sine-family), [cosine](!#the-cosine-family), and [tangent](!#the-tangent-family) — share a tinted, bordered box labeled "Trigonometric" inside the picker. The grouping reflects how they are usually taught and used together: same four-parameter form $f(x) = A \\cdot \\text{trig}(Bx + C) + D$, related by phase shifts, and bundled in every standard textbook chapter.

Sine and cosine differ only by a phase shift of $\\frac{\\pi}{2}$ — they have identical periodicity, amplitude, and offset behavior. Tangent is the odd one out: same parameter scheme but a different period ($\\pi$ rather than $2\\pi$), unbounded values, and vertical asymptotes where the cosine in its denominator vanishes.

Switching between the three families is the fastest way to see the structural family resemblances and the points where they diverge.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Adjusting Parameters with the Sliders`,
      content: `Below the family list sit the parameter sliders for the currently active family. Each family has its own set:

• **Linear**: slope $a$, intercept $b$
• **Quadratic**: coefficients $a$, $b$, $c$
• **Cubic**: leading coefficient $a$, middle coefficient $b$
• **Power**: coefficient $a$, exponent $n$ (including non-integer values)
• **Rational**: numerator $a$, shift $h$
• **Exponential**: coefficient $a$, base
• **Logarithmic**: scale $a$, vertical shift $d$
• **Sine / Cosine / Tangent**: amplitude $A$, frequency $B$, phase $C$, offset $D$
• **Absolute / Square root**: coefficient $a$, shift $h$

Each slider shows the parameter name on the left and its current numeric value on the right in blue monospace. Dragging the slider updates the plot, the equation badge, and the explanation in real time — there is no apply step.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Reading the Plot and Equation Badge`,
      content: `The plot panel header has two elements. On the left, the **family name** identifies what is being graphed. On the right, the **equation badge** — in monospaced blue type — shows the current symbolic form with parameter values substituted. As you drag a slider, the equation rewrites character by character to match.

The plot itself is a coordinate system with axis labels, gridlines, and the curve $y = f(x)$ drawn in accent blue. A crosshair follows the mouse, and a small tooltip near the curve shows the value $f(x)$ at the cursor's $x$-coordinate. Functions with restricted domains — square root undefined for negative inputs, logarithm undefined at and below zero, tangent and rational families undefined at asymptotes — are simply not drawn outside their domains, leaving gaps in the curve that make the domain visible.

The plot starts zoomed to roughly $[-10, 10]$ on both axes. You can pan and zoom for closer inspection.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Exploring the Info Panel`,
      content: `The right-side info panel updates whenever you select a family. Two tabs are available:

• **Explanation** — a short prose summary of the family. Covers the canonical equation, what each parameter does, the shape and behavior of the curve, and any defining features (asymptotes, periodicity, vertex, inflection point, domain restrictions). Mathematical notation renders inline.
• **Resources** — external links to relevant Wikipedia articles for further reading. Each family includes at least one curated link.

The explanation is intentionally brief — it complements the visual rather than replacing dedicated theory pages. Once you have the shape in your head from the gallery, the linked resources can fill in any formal definitions or proofs.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What is a Function Family?`,
      content: `A **function family** is a parametrized class of functions sharing the same algebraic structure. The [linear family](!#the-linear-family) $f(x) = ax + b$ contains every straight line; the [quadratic family](!#the-quadratic-family) $f(x) = ax^2 + bx + c$ contains every parabola; the [sine family](!#the-sine-family) $f(x) = A \\sin(Bx + C) + D$ contains every shifted, scaled sinusoid.

Each member of a family is determined by a small set of numerical parameters, and members of the same family share qualitative features — number of roots, end behavior, symmetry, domain — regardless of specific parameter values. Two parabolas can look very different numerically, but both have a single vertex, both open in one direction, and both come from a degree-two polynomial.

Recognizing a function family at sight is one of the foundational skills of algebra and pre-calculus. The gallery is built to support that pattern recognition: see the same family across many parameter choices, and the invariant shape settles into memory.

For deeper theory on function classification, see **functions theory**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Defining Features Across Families`,
      content: `Different families are distinguished by which qualitative features they support. The gallery's families illustrate most of the patterns you encounter in elementary mathematics:

• **End behavior** — [linear](!#the-linear-family) and odd-degree polynomials like the [cubic](!#the-cubic-family) go to $\\pm\\infty$ in opposite directions; even-degree polynomials head the same way at both ends; [exponentials](!#the-exponential-family) hit a horizontal asymptote on one side; trig functions oscillate forever.
• **Roots** — linear has exactly one (when nonzero); the [quadratic](!#the-quadratic-family) has zero, one, or two; exponential and pure sine/cosine families have none in some configurations.
• **Asymptotes** — [rational](!#the-rational-family), [tangent](!#the-tangent-family), and [logarithmic](!#the-logarithmic-family) families have vertical asymptotes; exponential, rational, and logarithmic have horizontal ones in the appropriate limit.
• **Periodicity** — only the [trigonometric families](!#the-trigonometric-group) repeat exactly.
• **Domain restrictions** — [square root](!#the-square-root-family) requires $x \\geq h$; logarithm requires $x > 0$ after shifting; rational excludes $x = h$.
• **Smoothness** — [absolute value](!#the-absolute-value-family) has a corner where it is not differentiable; every other family in the gallery is smooth wherever defined.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `How to Compare Families`,
      content: `The gallery is designed to support side-by-side comparison even though only one family is plotted at a time. A few suggested workflows:

• **Match the parameters when possible.** Setting amplitude $A = 1$, frequency $B = 1$, phase $C = 0$, offset $D = 0$ on [sine](!#the-sine-family), [cosine](!#the-cosine-family), and [tangent](!#the-tangent-family) shows the canonical curves directly comparable to each other.
• **Sweep a single parameter.** Hold all but one slider fixed and drag the remaining one across its range — the family's response to that single parameter becomes obvious without competing changes confusing the picture.
• **Compare growth rates.** Switch between [power](!#the-power-family) ($n = 2$, then $n = 3$), [exponential](!#the-exponential-family) (base $2$), and [logarithmic](!#the-logarithmic-family) to see how quickly each family blows up or flattens for large $x$.
• **Find an inverse pair.** Exponential and logarithmic are inverses of each other; setting matching parameters and mentally reflecting one across $y = x$ should yield the other.

The plot's fixed default zoom makes these comparisons consistent — you are always looking at the same window, which makes shape comparison meaningful.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Functions** — the general theory of functions: domain, range, composition, inverses, and classification.

**Function Transformations** — visualizers for vertical and horizontal shifts, stretches, and reflections applied to any base function.

**Polynomial Functions** — focused theory and tools for the polynomial subfamilies covered here (linear, quadratic, cubic, and higher).

**Exponential and Logarithmic Functions** — paired study of inverse function families, growth and decay models, and natural log.

**Trigonometric Functions** — full coverage of sine, cosine, tangent, and their reciprocals beyond the gallery's brief introduction.

**Rational Functions** — asymptote analysis, partial fractions, and behavior near poles.

**Equations and Inequalities Visualizer** — companion tools for solving $f(x) = n$ and $f(x) > 0$ across all the same function families.

**Function Graphs Reference** — printable reference sheets of canonical curves from each family.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `The Linear Family`,
      content: `The linear family is $f(x) = ax + b$ — every straight line that is a function. Two parameters fix a member completely: the slope $a$ and the intercept $b$.`,
      before: ``,
      after: `The gallery's default member is $f(x) = x$: slope $1$, intercept $0$, the identity line through the origin. Drag the slope slider and the line tilts; drag $b$ and it slides vertically without changing direction.

The defining property is a constant rate of change: every unit step in $x$ changes $f(x)$ by exactly $a$, everywhere. That is why the graph can never bend. A nonzero slope guarantees exactly one root at $x = -\\frac{b}{a}$; slope zero degenerates the family into horizontal constant lines.

Linear functions are the local model for everything smooth: zoom far enough into any differentiable curve — the [cubic](!#the-cubic-family) near its inflection point, the [sine wave](!#the-sine-family) near a zero crossing — and what you see approaches a straight line.`,
      link: '',
    },
    obj12: {
      title: `The Quadratic Family`,
      content: `The quadratic family is $f(x) = ax^2 + bx + c$ — the parabolas. The gallery's default member is $f(x) = 0.3x^2 - 3$, an upward-opening parabola with vertex at $(0, -3)$.`,
      before: ``,
      after: `The sign of $a$ decides the opening direction — up for positive, down for negative — and $|a|$ controls the width: the smaller it is, the flatter the bowl. The vertex sits at $x = -\\frac{b}{2a}$, the single turning point of the curve, and the vertical line through it is the parabola's axis of symmetry.

Root count is governed by the discriminant $b^2 - 4ac$: two real roots when positive, one repeated root when zero, none when negative. On the default member the discriminant is $3.6 > 0$, and the two roots are visible where the curve crosses the axis near $x = \\pm 3.16$.

The quadratic is the even-degree prototype: both ends head the same way, unlike the [linear](!#the-linear-family) and [cubic](!#the-cubic-family) families whose ends diverge. It reappears inside the [power family](!#the-power-family) as the special case $n = 2$.`,
      link: '',
    },
    obj13: {
      title: `The Cubic Family`,
      content: `The gallery's cubic family is $f(x) = ax^3 + bx$, an odd-degree polynomial with the default member $f(x) = 0.2x^3 - 2x$.`,
      before: ``,
      after: `The two ends run in opposite directions — down on the left, up on the right when $a > 0$ — the signature of odd degree. The default member has three roots ($x = 0$ and $x = \\pm\\sqrt{10}$), two turning points, and an inflection point at the origin where concavity flips.

Because this form omits the $x^2$ and constant terms, every member is symmetric about the origin: $f(-x) = -f(x)$, an odd function in the exact sense. Dragging $b$ negative deepens the middle wiggle; $b \\geq 0$ flattens it away, leaving a monotone S-curve.

Compare it with the [quadratic](!#the-quadratic-family) to see the even/odd contrast, and with the [power family](!#the-power-family) at $n = 3$ for the pure cubic without the linear correction term.`,
      link: '',
    },
    obj14: {
      title: `The Power Family`,
      content: `The power family is $f(x) = ax^n$ with an adjustable exponent — one family that impersonates several others. The default member is $f(x) = x^2$.`,
      before: ``,
      after: `The exponent decides the character. Positive integers give polynomials: $n = 1$ recovers the [linear](!#the-linear-family) identity, $n = 2$ the parabola, $n = 3$ the pure cubic. Negative exponents produce reciprocal curves with asymptotes, overlapping the [rational family](!#the-rational-family): $n = -1$ is exactly $\\frac{a}{x}$. Fractional exponents give roots — $n = 0.5$ is the [square root](!#the-square-root-family) shape, defined only for $x \\geq 0$.

The tell-tale is the behavior near $x = 0$: polynomials pass through the origin, negative powers blow up beside it, fractional powers stop dead at it. Sweeping the $n$ slider across its range replays this whole taxonomy in a few seconds — the single most instructive drag in the gallery.`,
      link: '',
    },
    obj15: {
      title: `The Rational Family`,
      content: `The rational family here is the shifted reciprocal $f(x) = \\frac{a}{x - h}$, with the default member $f(x) = \\frac{1}{x}$.`,
      before: ``,
      after: `The denominator vanishes at $x = h$, and the plot shows the consequence: a vertical asymptote (dashed red) with the curve exploding to $+\\infty$ on one side and $-\\infty$ on the other. Far from the pole the values shrink toward zero, giving a horizontal asymptote at $y = 0$. The graph is two disconnected branches.

The default member is odd, symmetric about the origin, with branches in the first and third quadrants; negative $a$ flips them into the second and fourth. Dragging $h$ slides the whole picture — pole, branches and all — horizontally.

The same hyperbola shape appears in the [power family](!#the-power-family) at $n = -1$, and the [tangent family](!#the-tangent-family) repeats the asymptote behavior periodically.`,
      link: '',
    },
    obj16: {
      title: `The Exponential Family`,
      content: `The exponential family is $f(x) = a \\cdot b^x$ — constant multiplicative growth. The default member is $f(x) = 2^x$.`,
      before: ``,
      after: `Each unit step right multiplies the value by the base: $1, 2, 4, 8, \\ldots$ Rightward the curve outruns every polynomial; leftward it hugs the $x$-axis without ever touching it — a horizontal asymptote at $y = 0$ and therefore no root. Bases between $0$ and $1$ mirror the picture into decay.

The value at $x = 0$ is always $a$, whatever the base — every member pierces the $y$-axis at its coefficient.

Exponentials are the inverse partners of the [logarithmic family](!#the-logarithmic-family): reflect $y = 2^x$ across the line $y = x$ and you get $y = \\log_2 x$. Racing this family against the [power family](!#the-power-family) at large $x$ is one of the comparisons suggested in [How to Compare Families](!#how-to-compare-families).`,
      link: '',
    },
    obj17: {
      title: `The Logarithmic Family`,
      content: `The logarithmic family is $f(x) = a\\ln(x) + d$, defaulting to the natural logarithm $f(x) = \\ln(x)$.`,
      before: ``,
      after: `The domain is $x > 0$ only — the curve simply does not exist left of the vertical asymptote at $x = 0$ (dashed red), where it plunges toward $-\\infty$. It crosses the axis at $x = 1$ (since $\\ln 1 = 0$), reaches $1$ at $x = e \\approx 2.718$, and keeps climbing forever — but ever more slowly, with no horizontal asymptote despite appearances.

That deceleration is the mirror image of exponential acceleration: the logarithm is the [exponential family](!#the-exponential-family) reflected across the line $y = x$. Where the exponential turns addition into multiplication, the logarithm turns multiplication back into addition.

Its vertical-asymptote behavior groups it with the [rational](!#the-rational-family) and [tangent](!#the-tangent-family) families in [Defining Features Across Families](!#defining-features-across-families).`,
      link: '',
    },
    obj18: {
      title: `The Sine Family`,
      content: `The sine family is the general sinusoid $f(x) = A\\sin(Bx + C) + D$; the default member is the pure $f(x) = \\sin(x)$.`,
      before: ``,
      after: `Four parameters, four independent motions: amplitude $A$ sets the wave height, frequency $B$ compresses the period to $\\frac{2\\pi}{B}$, phase $C$ slides the wave horizontally, offset $D$ lifts its midline. The default wave oscillates between $-1$ and $1$ with period $2\\pi \\approx 6.28$ — about three full cycles fit in the plot window.

Sine is odd and bounded, its zeros evenly spaced at multiples of $\\pi$, and — together with its trigonometric siblings — it is the only kind of family in the gallery that repeats exactly forever.

The [cosine family](!#the-cosine-family) is this same wave advanced by a quarter period; the group view in [The Trigonometric Group](!#the-trigonometric-group) treats the three siblings side by side.`,
      link: '',
    },
    obj19: {
      title: `The Cosine Family`,
      content: `The cosine family is $f(x) = A\\cos(Bx + C) + D$, defaulting to $f(x) = \\cos(x)$.`,
      before: ``,
      after: `Cosine is the sine wave shifted by a quarter period: $\\cos(x) = \\sin(x + \\frac{\\pi}{2})$. The practical difference is the starting value — at $x = 0$ cosine sits at its maximum $A + D$, not at the midline. That makes it an even function, symmetric across the $y$-axis, where [sine](!#the-sine-family) is odd.

Everything else transfers unchanged: period $\\frac{2\\pi}{B}$, bounds $D \\pm A$, zeros now at odd multiples of $\\frac{\\pi}{2}$.

Flipping between the sine and cosine picker entries with identical parameters is the cleanest way to see a pure phase shift with no other change — one of the workflows recommended in [How to Compare Families](!#how-to-compare-families).`,
      link: '',
    },
    obj20: {
      title: `The Tangent Family`,
      content: `The tangent family is $f(x) = A\\tan(Bx + C) + D$, defaulting to $f(x) = \\tan(x)$ — the unruly member of the trigonometric trio.`,
      before: ``,
      after: `Since $\\tan(x) = \\frac{\\sin(x)}{\\cos(x)}$, the function blows up wherever cosine vanishes: vertical asymptotes (dashed red) at $x = \\frac{\\pi}{2} + k\\pi$, visible four times across the window. Between consecutive asymptotes the curve sweeps from $-\\infty$ to $+\\infty$ in one strictly increasing branch.

Two departures from its siblings: tangent is unbounded — no amplitude ceiling, so $A$ acts as a vertical scale rather than a wave height — and its period is $\\pi$, half that of [sine](!#the-sine-family) and [cosine](!#the-cosine-family).

Its asymptote pattern makes it the periodic cousin of the [rational family](!#the-rational-family); the family resemblances and differences are laid out in [The Trigonometric Group](!#the-trigonometric-group).`,
      link: '',
    },
    obj21: {
      title: `The Absolute Value Family`,
      content: `The absolute value family is $f(x) = a\\,|x - h|$, defaulting to $f(x) = |x|$.`,
      before: ``,
      after: `The graph is a sharp V with its corner at $x = h$: the left arm has slope $-a$, the right arm $+a$, and the switch happens instantly. At the corner the function is continuous but not differentiable — the only non-smooth point offered by any family in the gallery.

Algebraically the V is two [linear](!#the-linear-family) pieces glued together, which is why absolute value is often the first genuinely piecewise example students meet. Negative $a$ flips the V upside down into a peak.

The corner's abruptness stands out most next to the [quadratic](!#the-quadratic-family): both are symmetric about a vertical line through their extreme point, but the parabola turns smoothly where the V snaps.`,
      link: '',
    },
    obj22: {
      title: `The Square Root Family`,
      content: `The square root family is $f(x) = a\\sqrt{x - h}$, defaulting to $f(x) = \\sqrt{x}$.`,
      before: ``,
      after: `The curve exists only for $x \\geq h$ — left of the starting point there is simply nothing to draw, the domain restriction visible as blank plot. At the start the tangent is vertical: the function rises steeply from $(h, 0)$, then flattens without bound, growing forever but slower than any linear function.

It is half of a sideways parabola: the inverse of the [quadratic](!#the-quadratic-family) $x^2$ restricted to non-negative inputs, just as the [logarithmic family](!#the-logarithmic-family) inverts the exponential. Inside the [power family](!#the-power-family) it is the fractional case $n = \\frac{1}{2}$.

Its combination of a hard domain edge and gentle growth makes it the standard first example of a function whose domain is not all of $\\mathbb{R}$.`,
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
      question: "What does the Functions Families gallery show?",
      answer: "It plots twelve standard function families with adjustable parameters: linear, quadratic, cubic, power, rational, exponential, logarithmic, sine, cosine, tangent, absolute value, and square root. Each family has its own sliders for parameters like slope, amplitude, frequency, and shift. The plot, symbolic equation, and explanation panel all update in real time as you drag a slider."
    },
    obj2: {
      question: "What is a function family?",
      answer: "A function family is a parametrized class of functions sharing the same algebraic structure. The linear family contains every straight line; the quadratic family contains every parabola; the sine family contains every shifted and scaled sinusoid. Members of the same family share qualitative features regardless of specific parameter values."
    },
    obj3: {
      question: "How are the trigonometric functions grouped?",
      answer: "Sine, cosine, and tangent appear together inside a tinted bordered box labeled Trigonometric in the family picker. They share the same four-parameter form — amplitude A, frequency B, phase C, and offset D — and are usually taught together. Sine and cosine differ by a phase shift of pi over two; tangent has a different period and adds vertical asymptotes."
    },
    obj4: {
      question: "What features can I see in the plot?",
      answer: "The plot has axis labels, gridlines, a crosshair that follows the mouse, and a tooltip showing f(x) at the cursor's x-coordinate. Functions with restricted domains — square root, logarithm, tangent, rational — are drawn only where they are defined, so domain restrictions appear visually as gaps in the curve."
    },
    obj5: {
      question: "How do I compare two function families?",
      answer: "Switch between families using the picker and watch how the same parameter values produce different shapes, or set a base parameter set on one family and then change families to see how the structure changes. The default zoom is consistent across families, so shape comparisons are meaningful. Useful comparisons include exponential vs polynomial growth and exponential vs logarithmic as an inverse pair."
    },
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Functions Families Gallery",
      "description": "Interactive gallery of twelve standard function families with adjustable parameter sliders, live plots, and per-family explanations.",
      "url": "https://www.learnmathclass.com/functions/visual-tools/types",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Twelve function families covered: linear, quadratic, cubic, power, rational, exponential, logarithmic, sine, cosine, tangent, absolute value, square root",
        "Per-family parameter sliders with live plot updates",
        "Symbolic equation badge that rewrites as parameters change",
        "Trigonometric families grouped in their own panel for direct comparison",
        "Interactive plot with crosshair, curve tooltip, and zoom",
        "Side info panel with per-family explanation and external resource links",
        "Domain restrictions rendered as visible gaps in the curve"
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
          "name": "Function Families",
          "item": "https://www.learnmathclass.com/functions/visual-tools/types"
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
  // plot + attached picture-reading panel, one frame, no link (own page).
  const stateUnits = {
    linear: demoUnitFrame({ svg: functionTypesDiagrams.linear, caption: 'f(x) = x, frozen',
      text: 'The identity line at default parameters: slope 1, intercept 0 &#8212; through the origin, climbing one unit up for every unit right.' }),
    quadratic: demoUnitFrame({ svg: functionTypesDiagrams.quadratic, caption: 'f(x) = 0.3x&#178; &#8722; 3, frozen',
      text: 'A wide upward bowl with its vertex at (0, &#8722;3); the two axis crossings near &#177;3.16 are the roots the discriminant promises.' }),
    cubic: demoUnitFrame({ svg: functionTypesDiagrams.cubic, caption: 'f(x) = 0.2x&#179; &#8722; 2x, frozen',
      text: 'Ends running opposite ways, two turning points, and an inflection at the origin &#8212; the full odd-degree signature in one window.' }),
    power: demoUnitFrame({ svg: functionTypesDiagrams.power, caption: 'f(x) = x&#178;, frozen',
      text: 'At n = 2 the family wears its parabola disguise; dragging the exponent replays polynomials, reciprocals, and roots in this same window.' }),
    rational: demoUnitFrame({ svg: functionTypesDiagrams.rational, caption: 'f(x) = 1/x, frozen',
      text: 'Two branches split by the vertical asymptote at x = 0, each flattening toward y = 0 as it runs away from the pole.' }),
    exponential: demoUnitFrame({ svg: functionTypesDiagrams.exponential, caption: 'f(x) = 2&#739;, frozen',
      text: 'Doubling with every step right, hugging the axis to the left &#8212; runaway growth on one side, an asymptote on the other.' }),
    logarithmic: demoUnitFrame({ svg: functionTypesDiagrams.logarithmic, caption: 'f(x) = ln(x), frozen',
      text: 'Nothing exists left of the asymptote at x = 0; the curve crosses at x = 1, then climbs forever at an ever-slowing pace.' }),
    sine: demoUnitFrame({ svg: functionTypesDiagrams.sine, caption: 'f(x) = sin(x), frozen',
      text: 'Three full cycles of the pure wave: period 2&#960;, bounded between &#8722;1 and 1, zeros at every multiple of &#960;.' }),
    cosine: demoUnitFrame({ svg: functionTypesDiagrams.cosine, caption: 'f(x) = cos(x), frozen',
      text: 'The same wave as sine arriving a quarter period early: maximum at x = 0 and mirror symmetry across the y-axis.' }),
    tangent: demoUnitFrame({ svg: functionTypesDiagrams.tangent, caption: 'f(x) = tan(x), frozen',
      text: 'Strictly increasing branches sweeping from &#8722;&#8734; to +&#8734; between red asymptotes spaced &#960; apart.' }),
    absolute: demoUnitFrame({ svg: functionTypesDiagrams.absolute, caption: 'f(x) = |x|, frozen',
      text: 'Two straight arms meeting in a sharp corner at the origin &#8212; continuous everywhere, differentiable everywhere but there.' }),
    sqrt: demoUnitFrame({ svg: functionTypesDiagrams.sqrt, caption: 'f(x) = &#8730;x, frozen',
      text: 'A curve that starts vertically at the origin and flattens forever &#8212; with nothing at all to its left.' }),
  };

  // Canonical per-family explanations for the gallery's info panel.
  // Hoisted from the component's built-in FAMILIES texts (kept there only as a
  // legacy fallback) so the content is SSR/SEO-visible, and extended with
  // anchors down to each family's dedicated section.
  const explanations = {
    linear:
      '## Linear\n' +
      'A **straight line**: $f(x) = ax + b$.\n' +
      'The slope **a** sets the tilt — every step right of 1 moves the line up by $a$. ' +
      'The intercept **b** slides the whole line vertically; it is the value where the line crosses the $y$-axis.\n' +
      '- Constant rate of change everywhere\n' +
      '- Exactly one root (unless $a = 0$)\n\n' +
      '[Learn more about the linear family](!#the-linear-family)',
    quadratic:
      '## Quadratic\n' +
      'A **parabola**: $f(x) = ax^2 + bx + c$.\n' +
      'The sign of **a** decides whether it opens up or down; $|a|$ controls how narrow it is. ' +
      'It has a single turning point — the **vertex** — at $x = -\\frac{b}{2a}$.\n' +
      '- Zero, one, or two roots depending on the discriminant $b^2 - 4ac$\n\n' +
      '[Learn more about the quadratic family](!#the-quadratic-family)',
    cubic:
      '## Cubic\n' +
      'An odd-degree **polynomial**: $f(x) = ax^3 + bx$.\n' +
      'The two ends head in **opposite** directions. There can be up to two turning points, and always an ' +
      '**inflection point** where the curve switches concavity.\n\n' +
      '[Learn more about the cubic family](!#the-cubic-family)',
    power:
      '## Power\n' +
      'The family $f(x) = ax^n$.\n' +
      'Integer **n** gives polynomials; **negative n** gives reciprocals with asymptotes; ' +
      '**fractional n** gives roots. The behavior right around $x = 0$ is the tell-tale of which kind you have.\n\n' +
      '[Learn more about the power family](!#the-power-family)',
    rational:
      '## Rational\n' +
      'A **reciprocal** curve: $f(x) = \\dfrac{a}{x - h}$.\n' +
      'The denominator hits zero at $x = h$ — a **vertical asymptote**. Far from there the curve flattens ' +
      'toward the **horizontal asymptote** $y = 0$. Two disconnected branches.\n\n' +
      '[Learn more about the rational family](!#the-rational-family)',
    exponential:
      '## Exponential\n' +
      'Constant **multiplicative** growth: $f(x) = a\\,b^x$.\n' +
      'Base $b > 1$ grows, $0 < b < 1$ decays. The curve approaches — but never touches — the $x$-axis on one side, ' +
      'so it has a **horizontal asymptote** and no root.\n\n' +
      '[Learn more about the exponential family](!#the-exponential-family)',
    logarithmic:
      '## Logarithmic\n' +
      'The **inverse of the exponential**: $f(x) = a\\ln(x) + d$.\n' +
      'Defined only for $x > 0$, with a **vertical asymptote** at $x = 0$. It grows without bound, but ever more ' +
      'slowly — the mirror image of exponential growth across $y = x$.\n\n' +
      '[Learn more about the logarithmic family](!#the-logarithmic-family)',
    sine:
      '## Sine\n' +
      'The general sinusoid: $f(x) = A\\sin(Bx + C) + D$.\n' +
      '- **A** — amplitude (height of the wave)\n' +
      '- **B** — frequency (squeezes the period to $\\frac{2\\pi}{B}$)\n' +
      '- **C** — phase (slides it sideways)\n' +
      '- **D** — vertical offset (lifts the midline)\n' +
      'Periodic and bounded between $D - A$ and $D + A$. Crosses zero at $x = 0$ when $C = D = 0$.\n\n' +
      '[Learn more about the sine family](!#the-sine-family) · [All trigonometric families](!#the-trigonometric-group)',
    cosine:
      '## Cosine\n' +
      '$f(x) = A\\cos(Bx + C) + D$.\n' +
      'Same shape as sine but **shifted by $\\frac{\\pi}{2}$**: $\\cos(x) = \\sin(x + \\frac{\\pi}{2})$. ' +
      'At $x = 0$ the value is $A + D$, not zero.\n' +
      '- **A** — amplitude\n' +
      '- **B** — frequency (period $\\frac{2\\pi}{B}$)\n' +
      '- **C** — phase shift\n' +
      '- **D** — vertical offset\n\n' +
      '[Learn more about the cosine family](!#the-cosine-family) · [All trigonometric families](!#the-trigonometric-group)',
    tangent:
      '## Tangent\n' +
      '$f(x) = A\\tan(Bx + C) + D$, with $\\tan(x) = \\dfrac{\\sin(x)}{\\cos(x)}$.\n' +
      'The denominator hits zero at $x = \\frac{\\pi}{2} + k\\pi$, giving **vertical asymptotes** there. ' +
      'Unbounded, with period $\\pi$ (not $2\\pi$ like sine and cosine).\n' +
      '- **A** — vertical scale\n' +
      '- **B** — frequency (period $\\frac{\\pi}{B}$)\n' +
      '- **C** — phase shift\n' +
      '- **D** — vertical offset\n\n' +
      '[Learn more about the tangent family](!#the-tangent-family) · [All trigonometric families](!#the-trigonometric-group)',
    absolute:
      '## Absolute value\n' +
      'A sharp **V shape**: $f(x) = a\\,|x - h|$.\n' +
      'The corner sits at $x = h$. The function is **not differentiable** at the vertex — the slope jumps ' +
      'straight from $-a$ to $+a$ with no smooth transition.\n\n' +
      '[Learn more about the absolute value family](!#the-absolute-value-family)',
    sqrt:
      '## Square root\n' +
      'Half a sideways parabola: $f(x) = a\\sqrt{x - h}$.\n' +
      'Defined only where $x \\ge h$. Steep right at the start, then flattening as $x$ grows — it is the ' +
      '**inverse** of $x^2$ restricted to non-negative inputs.\n\n' +
      '[Learn more about the square root family](!#the-square-root-family)',
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
        title: "Function Families Gallery | Interactive Function Visualizer",
        description: "Explore 12 function families — linear, quadratic, cubic, power, rational, exponential, logarithmic, trig, absolute, sqrt — with live sliders and plots.",
        keywords: keyWords.join(", "),
        url: "/functions/visual-tools/types",
        name: "Functions Families Gallery",
        hubDescription: "Pick a function family from a sidebar of twelve standard families — linear, quadratic, cubic, power, rational, exponential, logarithmic, sine, cosine, tangent, absolute value, and square root — and adjust its parameters with live sliders. The plot, symbolic equation, and explanation panel update in real time, with the three trigonometric families grouped together for direct comparison.",
        category: "",
        subCategory: ""
      },
    }
  }
}


export default function FunctionFamiliesGalleryPage({seoData, sectionsContent, introContent, faqQuestions, schemas, explanations, stateUnits}) {

  const genericSections = [
    { id:'getting-started-with-the-gallery',      title:sectionsContent.obj1.title,  link:sectionsContent.obj1.link,  content:[sectionsContent.obj1.content] },
    { id:'browsing-the-family-picker',            title:sectionsContent.obj2.title,  link:sectionsContent.obj2.link,  content:[sectionsContent.obj2.content] },
    { id:'the-trigonometric-group',               title:sectionsContent.obj3.title,  link:sectionsContent.obj3.link,  content:[sectionsContent.obj3.content] },
    { id:'adjusting-parameters-with-the-sliders', title:sectionsContent.obj4.title,  link:sectionsContent.obj4.link,  content:[sectionsContent.obj4.content] },
    { id:'reading-the-plot-and-equation-badge',   title:sectionsContent.obj5.title,  link:sectionsContent.obj5.link,  content:[sectionsContent.obj5.content] },
    { id:'exploring-the-info-panel',              title:sectionsContent.obj6.title,  link:sectionsContent.obj6.link,  content:[sectionsContent.obj6.content] },
    { id:'what-is-a-function-family',             title:sectionsContent.obj7.title,  link:sectionsContent.obj7.link,  content:[sectionsContent.obj7.content] },
    { id:'defining-features-across-families',     title:sectionsContent.obj8.title,  link:sectionsContent.obj8.link,  content:[sectionsContent.obj8.content] },
    { id:'how-to-compare-families',               title:sectionsContent.obj9.title,  link:sectionsContent.obj9.link,  content:[sectionsContent.obj9.content] },
    { id:'the-linear-family',                     title:sectionsContent.obj11.title, link:sectionsContent.obj11.link, content:[sectionsContent.obj11.content, <div key={'u-linear'} dangerouslySetInnerHTML={{ __html: stateUnits.linear }} />, sectionsContent.obj11.after] },
    { id:'the-quadratic-family',                  title:sectionsContent.obj12.title, link:sectionsContent.obj12.link, content:[sectionsContent.obj12.content, <div key={'u-quadratic'} dangerouslySetInnerHTML={{ __html: stateUnits.quadratic }} />, sectionsContent.obj12.after] },
    { id:'the-cubic-family',                      title:sectionsContent.obj13.title, link:sectionsContent.obj13.link, content:[sectionsContent.obj13.content, <div key={'u-cubic'} dangerouslySetInnerHTML={{ __html: stateUnits.cubic }} />, sectionsContent.obj13.after] },
    { id:'the-power-family',                      title:sectionsContent.obj14.title, link:sectionsContent.obj14.link, content:[sectionsContent.obj14.content, <div key={'u-power'} dangerouslySetInnerHTML={{ __html: stateUnits.power }} />, sectionsContent.obj14.after] },
    { id:'the-rational-family',                   title:sectionsContent.obj15.title, link:sectionsContent.obj15.link, content:[sectionsContent.obj15.content, <div key={'u-rational'} dangerouslySetInnerHTML={{ __html: stateUnits.rational }} />, sectionsContent.obj15.after] },
    { id:'the-exponential-family',                title:sectionsContent.obj16.title, link:sectionsContent.obj16.link, content:[sectionsContent.obj16.content, <div key={'u-exponential'} dangerouslySetInnerHTML={{ __html: stateUnits.exponential }} />, sectionsContent.obj16.after] },
    { id:'the-logarithmic-family',                title:sectionsContent.obj17.title, link:sectionsContent.obj17.link, content:[sectionsContent.obj17.content, <div key={'u-logarithmic'} dangerouslySetInnerHTML={{ __html: stateUnits.logarithmic }} />, sectionsContent.obj17.after] },
    { id:'the-sine-family',                       title:sectionsContent.obj18.title, link:sectionsContent.obj18.link, content:[sectionsContent.obj18.content, <div key={'u-sine'} dangerouslySetInnerHTML={{ __html: stateUnits.sine }} />, sectionsContent.obj18.after] },
    { id:'the-cosine-family',                     title:sectionsContent.obj19.title, link:sectionsContent.obj19.link, content:[sectionsContent.obj19.content, <div key={'u-cosine'} dangerouslySetInnerHTML={{ __html: stateUnits.cosine }} />, sectionsContent.obj19.after] },
    { id:'the-tangent-family',                    title:sectionsContent.obj20.title, link:sectionsContent.obj20.link, content:[sectionsContent.obj20.content, <div key={'u-tangent'} dangerouslySetInnerHTML={{ __html: stateUnits.tangent }} />, sectionsContent.obj20.after] },
    { id:'the-absolute-value-family',             title:sectionsContent.obj21.title, link:sectionsContent.obj21.link, content:[sectionsContent.obj21.content, <div key={'u-absolute'} dangerouslySetInnerHTML={{ __html: stateUnits.absolute }} />, sectionsContent.obj21.after] },
    { id:'the-square-root-family',                title:sectionsContent.obj22.title, link:sectionsContent.obj22.link, content:[sectionsContent.obj22.content, <div key={'u-sqrt'} dangerouslySetInnerHTML={{ __html: stateUnits.sqrt }} />, sectionsContent.obj22.after] },
    { id:'related-concepts-and-tools',            title:sectionsContent.obj10.title, link:sectionsContent.obj10.link, content:[sectionsContent.obj10.content] },
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Functions Families</h1>
      <br/>
      <FunctionGallery explanations={explanations}/>
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