
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// Canonical per-family explanations live in getStaticProps below (SSR/SEO-visible);
// the component renders them as the info panel's "Family" tab.
import FunctionSymmetry from '../../../../app/components/functions/symmetry/FunctionSymmetry'
import symmetryDiagrams from '../../../../app/components/functions/symmetry/functionSymmetryDiagrams'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'


export async function getStaticProps(){

  const keyWords = [
    'function symmetry',
    'even and odd functions',
    'even function',
    'odd function',
    'symmetry visualizer',
    'f(-x) = f(x)',
    'f(-x) = -f(x)',
    'y-axis symmetry function',
    'origin symmetry function',
    'how to test even odd function',
    'function neither even nor odd',
    'symmetry of trigonometric functions',
    'symmetry of polynomial',
    'graph symmetry test',
    'mirror reflection function',
  ]

  const sectionsContent = {

    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Open the page and three panels appear. On the left is the **function picker** with eleven base functions grouped by their natural symmetry — even, odd, or neither. In the center is the **plot panel** with three curves drawn on top of each other:

• $f(x)$ in **solid blue**
• $f(-x)$ in **dashed amber** (the function reflected across the y-axis)
• $-f(-x)$ in **dotted teal** (the function rotated 180° about the origin)

Below the plot sits a **verdict card** that names the symmetry — Even, Odd, or Neither — followed by a step-by-step algebraic derivation. On the right is the **info panel** with two tabs.

The page launches with quadratic. Blue and amber overlap exactly: the dashes punch through the solid line. That visual coincidence is the proof that $f(-x) = f(x)$, so the function is even.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Picking a Function`,
      content: `The picker groups eleven base functions by their natural symmetry — a deliberate teaching layout:

• [Even](!#even-functions) ($f(-x) = f(x)$, y-axis mirror) — [Quadratic](!#symmetry-of-the-quadratic) $x^2$, [Absolute](!#symmetry-of-the-absolute-value) $|x|$, [Cosine](!#symmetry-of-cosine)
• [Odd](!#odd-functions) ($f(-x) = -f(x)$, origin rotation) — [Identity](!#symmetry-of-the-identity) $x$, [Cubic](!#symmetry-of-the-cubic) $x^3$, [Sine](!#symmetry-of-sine), [Reciprocal](!#symmetry-of-the-reciprocal) $1/x$
• [Neither](!#functions-with-neither-symmetry) — [Square root](!#symmetry-of-the-square-root), [Exponential](!#symmetry-of-the-exponential), [Logarithmic](!#symmetry-of-the-logarithm), [the mixed polynomial](!#symmetry-of-the-mixed-polynomial) $x^2 + x$

The Neither group is instructive on its own. Square root and logarithm fail the comparison because they are not defined for negative inputs; exponential because $e^{-x} = 1/e^x$ is neither equal to $e^x$ nor to $-e^x$; and $x^2 + x$ is the classic example of a polynomial with mixed-parity terms.

Click any entry to switch. Transformation parameters reset to defaults on every switch. The current verdict can differ from the group label once sliders are moved — that is the central point of the tool.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `The Three Curves and What Overlaps Mean`,
      content: `The visual proof rests on a simple idea: a function has a symmetry exactly when two of the three plotted curves coincide.

• $f(x)$ and $f(-x)$ **overlap** $\\iff$ $f(-x) = f(x)$ $\\iff$ **even**. The dashed amber line punches through the solid blue.
• $f(x)$ and $-f(-x)$ **overlap** $\\iff$ $-f(-x) = f(x)$, equivalently $f(-x) = -f(x)$ $\\iff$ **odd**. The dotted teal punches through the solid blue.
• **No overlaps** $\\iff$ **neither**.

The three curves use deliberately distinct stroke patterns — solid, long-dash, fine-dot — so overlapping curves remain visually distinguishable as two separate lines rather than collapsing into one. Even when the geometric coincidence is exact, you can still see both curves at the overlap, which makes the visual evidence trustworthy.

A legend in the sidebar lets you toggle any of the three curves off if you want to inspect them individually.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `The Verdict Card`,
      content: `Below the plot, a card displays the **verdict** — Even, Odd, or Neither — in large monospace, color-coded:

• **Even** in blue, with the blurb "symmetric across the y-axis"
• **Odd** in teal, with "symmetric about the origin"
• **Neither** in gray, with "no symmetry detected"

The verdict is computed at runtime by sampling the function and checking whether $f(x) - f(-x) \\approx 0$ everywhere (even) or $f(x) + f(-x) \\approx 0$ everywhere (odd). It always reflects the current state — so if you transform an even base function with a nonzero horizontal shift, the verdict immediately changes to Neither, even though the base family is listed under Even in the picker.

The card's border color, header text, and accent badges all derive from the current verdict color, so the entire card reads as one coordinated visual signal of the function's current symmetry status.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `The Derivation Block`,
      content: `Inside the verdict card, a three-step algebraic derivation walks through the symmetry test for the base function:

1. **State** $f(x)$ — the canonical form, e.g., $f(x) = x^2$
2. **Substitute** $-x$ — perform the substitution and simplify, e.g., $f(-x) = (-x)^2 = x^2$
3. **Compare** — state the conclusion in plain algebra, e.g., $f(-x) = x^2 = f(x)$, so $f$ is even

This is the same hand-derivation a student would do on paper, written in monospace so the substitution steps line up neatly. Each family in the picker comes with its own per-step strings, so the derivation is specific to the function you have selected rather than generic.

When you transform the function with sliders and the verdict changes from the base symmetry, a small note appears at the bottom of the derivation block: "The base function is *odd*, but the transformation broke the symmetry. The runtime verdict on $g(x)$ is *neither*." The derivation always describes the base; the verdict always describes the current state.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Intersection Markers`,
      content: `Purple dots in the plot mark the points where $f(x)$ and $f(-x)$ cross. Their meaning depends on the verdict:

• **Even** — the curves coincide everywhere, so the "intersection" is the entire curve. No dots appear; the visual evidence is the dashed line covering the solid line.
• **Odd** — $f(x) = f(-x)$ together with $f(-x) = -f(x)$ forces $f(x) = 0$ wherever the two curves cross. The purple dots therefore mark the **zeros** of $f$ — a beautiful, non-obvious consequence of odd symmetry.
• **Neither** — the dots simply mark wherever the function and its y-mirror happen to meet, without any deeper structural meaning.

Below the verdict card, a small strip lists the intersection points with their coordinates. For odd functions like $x^3$ or $\\sin x$, this strip becomes a list of zeros — a useful by-product of the symmetry visualization.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Transforming and Breaking Symmetry`,
      content: `Below the family picker, four sliders apply the affine transformations:

• $a$ — **vertical scale** (preserves both even and odd symmetry)
• $k$ — **vertical shift** (breaks odd symmetry; preserves even)
• $b$ — **horizontal scale** (preserves both)
• $h$ — **horizontal shift** (breaks even symmetry; preserves odd only if it didn't have any)

Watch what happens. Start on the even quadratic with default parameters — blue and amber overlap, verdict reads Even. Drag $h$ to $+1$ — the parabola shifts right, the mirror axis of symmetry slides off the y-axis to $x = 1$, but $f(-x)$ still mirrors across $x = 0$. The two curves no longer coincide. The verdict immediately flips to Neither.

Now switch to the odd cubic. Drag $k$ to $+2$ — the curve lifts vertically. The 180° rotation now centers on $(0, 2)$ instead of the origin, so it no longer matches the origin-centered $-f(-x)$. Verdict flips to Neither. Set $k = 0$, then drag $a$ to $-1$ — odd symmetry is preserved because flipping odd produces another odd function. The verdict stays Odd.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Even and Odd Mean`,
      content: `An **even** function satisfies $f(-x) = f(x)$ for every $x$ in its domain. Geometrically, folding the graph along the y-axis lands it exactly on itself. The y-axis is a mirror.

Classic examples: $x^2$, $x^4$, $|x|$, $\\cos x$, and more generally any polynomial whose terms all have even exponents.

An **odd** function satisfies $f(-x) = -f(x)$. Geometrically, rotating the graph 180° about the origin lands it on itself. Equivalently, the graph is symmetric under combined reflection across both the x- and y-axes.

Classic examples: $x$, $x^3$, $\\sin x$, $\\tan x$, $1/x$, and any polynomial with only odd-exponent terms. Note that every odd function defined at $x = 0$ must satisfy $f(0) = -f(0)$, forcing $f(0) = 0$. Odd graphs always pass through the origin.

Most functions are **neither** even nor odd. The y-axis mirror and the origin rotation both land the graph somewhere new. This is the default state; even and odd are special properties only specific families have.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Why Transformations Break Symmetry`,
      content: `Symmetry is a property of the function relative to specific axes — the y-axis for even, the origin for odd. Transformations move those axes around, and the symmetry breaks unless the transformation respects them.

Concretely, for $g(x) = a \\cdot f(b(x - h)) + k$:

• $h \\ne 0$ shifts the input axis. For an even base function whose mirror was the y-axis, the new mirror is now the line $x = h$. The curve is still symmetric, but not across $x = 0$, so $g(-x) \\ne g(x)$ in general.

• $k \\ne 0$ shifts every output. For an odd base function whose rotation center was the origin, the new rotation center is $(0, k)$. The graph is still 180°-symmetric, but about a point that is not the origin, so $g(-x) \\ne -g(x)$ in general.

• $a$ and $b$ rescale but do not move the axes. An even function flipped or rescaled vertically remains even (multiplying outputs preserves $f(-x) = f(x)$); an odd function rescaled or reflected remains odd.

The runtime verdict captures all of this automatically. You can use the sliders as a quick exploration of which transformations preserve which symmetries.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Even and Odd Functions** — formal theory page covering definitions, proofs, sum and product rules for even and odd functions, and Fourier-series connections.

**Function Transformations** — visualizer for $a$, $k$, $b$, $h$ alone, useful for separating the effects of each parameter before bringing symmetry on top.

**Domain of a Function** and **Range of a Function** — companion visualizers in the same Function Properties group; together they characterize a function's structural features.

**Reflections** — geometric operations on graphs; even and odd are the two special cases where a reflection or rotation lands the graph on itself.

**Periodic Functions** — a different kind of symmetry: $f(x + T) = f(x)$ for some period $T$. Sine and cosine are both periodic *and* have parity symmetry; most periodic functions only have one or the other.

**Inverse Functions** — graph reflection across the line $y = x$; another kind of symmetric relationship between two functions, though strictly speaking not a symmetry of one graph alone.

**Trigonometric Identities** — the identities $\\sin(-x) = -\\sin(x)$ and $\\cos(-x) = \\cos(x)$ are exactly the parity statements visualized here, written algebraically.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Even Functions`,
      content: `Three picker families satisfy $f(-x) = f(x)$ for every input: the [quadratic](!#symmetry-of-the-quadratic), the [absolute value](!#symmetry-of-the-absolute-value), and [cosine](!#symmetry-of-cosine). Their graphs are mirror-symmetric across the y-axis — fold the plane along the vertical axis and each curve lands on itself.

In the three-curve view this reads as a coincidence: the amber $f(-x)$ curve disappears underneath the blue $f$, while the teal $-f(x)$ hangs separate below. One overlap, one outsider — the even signature.`,
      before: ``, after: ``, link: '',
    },
    obj12: {
      title: `Symmetry of the Quadratic`,
      content: `The parabola is evenness at its most familiar: $(-x)^2 = x^2$, so negating the input changes nothing at all.`,
      before: ``,
      after: `The frozen scene shows the even signature exactly: amber hides under blue (the mirror image IS the curve), while the teal $-f(x)$ opens downward on its own. The derivation is one line — squaring destroys the sign before it can matter.

Every even power behaves identically, which is where the name "even" comes from: $x^2$, $x^4$, $x^6$ all fold onto themselves across the y-axis.

But evenness is fragile: nudge the parabola sideways with $h$ and the mirror match breaks instantly — the experiment [Transforming and Breaking Symmetry](!#transforming-and-breaking-symmetry) runs live.`,
      link: '',
    },
    obj13: {
      title: `Symmetry of the Absolute Value`,
      content: `The V-shape wears its evenness openly: $|-x| = |x|$ is practically the definition of the absolute value.`,
      before: ``,
      after: `Both arms of the V are each other's mirror image, meeting at the corner on the axis of symmetry itself. Amber under blue, teal inverted below — the same overlap pattern as the [quadratic](!#symmetry-of-the-quadratic), delivered by a piecewise function instead of a power.

The absolute value is the evenness *machine*: composing any function with $|x|$ on the input side manufactures an even result, which is exactly what the reflections tool demonstrates with $f(|x|)$.`,
      link: '',
    },
    obj14: {
      title: `Symmetry of Cosine`,
      content: `Cosine is the transcendental member of the even group: $\\cos(-x) = \\cos(x)$, a mirror symmetry the unit circle explains in one glance — angles $\\theta$ and $-\\theta$ share the same x-coordinate.`,
      before: ``,
      after: `The frozen wave shows amber vanished under blue along the entire axis — not just near the origin — and the teal flip riding exactly half a period out of phase.

Cosine's evenness is why it starts at a maximum: the curve must approach the y-axis identically from both sides, so the axis crossing is a turning point, never a slope.

Its partner [sine](!#symmetry-of-sine) carries the opposite parity — together they split every function on the circle into even and odd parts.`,
      link: '',
    },
    obj15: {
      title: `Odd Functions`,
      content: `Four families satisfy $f(-x) = -f(x)$: the [identity](!#symmetry-of-the-identity), the [cubic](!#symmetry-of-the-cubic), [sine](!#symmetry-of-sine), and the [reciprocal](!#symmetry-of-the-reciprocal). Their symmetry is rotational — spin the graph $180°$ about the origin and it lands on itself.

The three-curve view shows the odd signature: amber $f(-x)$ and teal $-f(x)$ coincide with *each other*, leaving the blue curve to match them as a rotated copy of itself. A different overlap than the even case — and the tool's verdict card reads the difference automatically.`,
      before: ``, after: ``, link: '',
    },
    obj16: {
      title: `Symmetry of the Identity`,
      content: `The line $y = x$ is the smallest odd function: $-x$ is both $f(-x)$ and $-f(x)$, so the two comparison curves collapse into one.`,
      before: ``,
      after: `All the structure is visible at the origin: the line passes straight through it, as every odd function defined there must — $f(0) = -f(0)$ forces $f(0) = 0$.

The frozen scene shows amber and teal fused into a single line mirroring the blue one across the y-axis; rotating the picture half a turn about the origin swaps them back onto themselves.

Odd powers generalize the pattern: $x$, $x^3$, $x^5$ all rotate onto themselves, which is where "odd" gets its name — the [cubic](!#symmetry-of-the-cubic) is the next rung.`,
      link: '',
    },
    obj17: {
      title: `Symmetry of the Cubic`,
      content: `The cubic curls through the origin with point symmetry: $(-x)^3 = -x^3$, the sign passing cleanly through the odd power.`,
      before: ``,
      after: `Rotate the S-curve half a turn about the origin and it lands on itself — the rising right arm becomes the falling left arm. In the three-curve view, amber and teal trace one shared curve, the blue original's $180°$ twin.

The cubic also shows why odd functions have no choice at zero: the curve must pass through the origin, and its inflection sits exactly there.

Sums preserve the pattern: $x^3 + x$ stays odd, but add an even term — as in [the mixed polynomial](!#symmetry-of-the-mixed-polynomial) — and the parity shatters.`,
      link: '',
    },
    obj18: {
      title: `Symmetry of Sine`,
      content: `Sine is the wave with rotational symmetry: $\\sin(-x) = -\\sin(x)$, each crest on the right matched by a trough on the left.`,
      before: ``,
      after: `On the unit circle the identity is geometric: angles $\\theta$ and $-\\theta$ have opposite y-coordinates. On the graph it is the odd overlap — amber and teal sharing one curve, the blue wave rotating onto itself about the origin.

Sine and [cosine](!#symmetry-of-cosine) make the canonical even/odd pair, and their parities drive the trigonometric even-odd identities: every negative-angle formula in trigonometry is one of these two symmetries restated.`,
      link: '',
    },
    obj19: {
      title: `Symmetry of the Reciprocal`,
      content: `The hyperbola $1/x$ is odd around its own singularity: $1/(-x) = -1/x$, the two branches trading places under a half-turn.`,
      before: ``,
      after: `The first-quadrant branch rotates exactly onto the third-quadrant branch — origin symmetry that survives even though the function is not defined *at* the origin. Oddness never required $f(0)$ to exist; it only constrains the points that do.

The frozen view shows the familiar coincidence of amber and teal, here split across two disconnected pieces — a reminder that symmetry is a property of the whole point set, not of a connected curve.`,
      link: '',
    },
    obj20: {
      title: `Functions with Neither Symmetry`,
      content: `Four families answer "neither": the [square root](!#symmetry-of-the-square-root), the [exponential](!#symmetry-of-the-exponential), the [logarithm](!#symmetry-of-the-logarithm), and [the mixed polynomial](!#symmetry-of-the-mixed-polynomial) $x^2 + x$ — and they fail for three *different* reasons.

The root and the logarithm never get to take the test: their domains exclude the negative inputs the comparison needs. The exponential takes it and fails both halves. The mixed polynomial fails because its terms disagree — one even, one odd, no shared verdict. Three failure modes, all visible as three genuinely different curves in the frozen scenes.`,
      before: ``, after: ``, link: '',
    },
    obj21: {
      title: `Symmetry of the Square Root`,
      content: `The square root cannot be even or odd for the simplest reason: $\\sqrt{-x}$ does not exist where $\\sqrt{x}$ does — the comparison has nowhere to happen.`,
      before: ``,
      after: `The frozen scene shows the disqualification visually: blue lives on the right, amber entirely on the left, teal below-right — three curves with almost no common ground. Symmetry questions need a domain symmetric about zero, and $[0, \\infty)$ is anything but.

This is the "domain blocks the comparison" verdict in the tool — a third answer distinct from failing the test, because the test itself never runs.

The [logarithm](!#symmetry-of-the-logarithm) fails identically; one-sided domains and parity are simply incompatible.`,
      link: '',
    },
    obj22: {
      title: `Symmetry of the Exponential`,
      content: `The exponential takes the symmetry test on a full domain and fails both halves: $e^{-x} = 1/e^x$, which is neither $e^x$ nor $-e^x$.`,
      before: ``,
      after: `The three curves are three genuinely different objects: blue growth, amber decay (its y-axis mirror), and teal negative growth (its flip). No overlaps anywhere — the visual definition of "neither".

Yet the failure is structured: $e^{-x}$ is the *reciprocal* of $e^x$, a multiplicative symmetry the additive even/odd test cannot see. Some functions are asymmetric; the exponential is symmetric in a different currency.

Its even and odd parts have names — $\\cosh$ and $\\sinh$ — the standard decomposition applied to the most famous "neither" function.`,
      link: '',
    },
    obj23: {
      title: `Symmetry of the Logarithm`,
      content: `The logarithm shares the square root's disqualification: defined only for $x > 0$, it has no mirror-side values to compare.`,
      before: ``,
      after: `The frozen picture makes "neither" look like territory: blue climbs on the right, amber (the mirror $\\ln(-x)$) occupies the left half-plane, teal dives on the right — no two curves share a domain, let alone coincide.

The derivation block simply reports "undefined for $x > 0$" — the honest verdict when the comparison cannot be evaluated.

Interestingly, the amber curve $\\ln(-x)$ *is* a legitimate function — it is the [y-axis reflection](!#symmetry-of-the-square-root) of the logarithm — it just is not equal to the original, which is what evenness would demand.`,
      link: '',
    },
    obj24: {
      title: `Symmetry of the Mixed Polynomial`,
      content: `The sum $x^2 + x$ is the textbook parity-breaker: an even term plus an odd term, whose symmetries cancel rather than combine.`,
      before: ``,
      after: `Compute the test: $f(-x) = x^2 - x$. That matches neither $f(x) = x^2 + x$ nor $-f(x) = -x^2 - x$ — the even term keeps its sign, the odd term flips, and the mixture agrees with nothing.

The frozen scene shows three distinct parabolas, the amber one being the blue's mirror — a *shifted-looking* twin, not a coincident one.

The example generalizes into the decomposition theorem: every function splits uniquely as even part plus odd part — here literally $x^2$ plus $x$, the two terms this polynomial was built from.`,
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
      question: "What does the Function Symmetry Visualizer do?",
      answer: "It plots three curves on one graph — the function f(x), its y-axis reflection f(-x), and its origin rotation -f(-x) — and detects whether any of them coincide. When f(x) overlaps with f(-x), the function is even. When f(x) overlaps with -f(-x), the function is odd. When none overlap, the function is neither. A verdict card below the plot states the result and walks through the algebraic derivation."
    },
    obj2: {
      question: "What is an even function?",
      answer: "A function is even when f(-x) = f(x) for every x in its domain. Geometrically, the graph is symmetric across the y-axis — folding the plane along the y-axis lands the graph exactly on itself. Classic examples include x squared, the absolute value function, cosine, and any polynomial whose terms all have even exponents."
    },
    obj3: {
      question: "What is an odd function?",
      answer: "A function is odd when f(-x) = -f(x). Geometrically, the graph is symmetric about the origin — rotating it 180 degrees around the origin lands it back on itself. Classic examples include x, x cubed, sine, tangent, and the reciprocal function. Every odd function defined at zero must pass through the origin, since f(0) must equal -f(0)."
    },
    obj4: {
      question: "How do transformations affect symmetry?",
      answer: "Vertical and horizontal scaling preserve whatever symmetry the base function had. Horizontal shifts h break even symmetry because they move the mirror axis off the y-axis. Vertical shifts k break odd symmetry because they move the rotation center off the origin. The visualizer detects the symmetry of the transformed function at runtime, so the verdict can disagree with the family group when sliders break the symmetry."
    },
    obj5: {
      question: "What do the purple dots in the plot mean?",
      answer: "They mark the points where f(x) and f(-x) cross. For odd functions these are the zeros of f — because if f(x) = f(-x) at a point and also f(-x) = -f(x), then f(x) = 0 there. For even functions the entire curve coincides and no dots appear. For neither functions the dots simply mark wherever the function and its y-mirror happen to meet."
    },
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Function Symmetry Visualizer",
      "description": "Interactive visualizer for even, odd, and neither function symmetry. Plots f(x), f(-x), and -f(-x) together and detects which curves coincide.",
      "url": "https://www.learnmathclass.com/functions/visual-tools/symmetry",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Eleven base functions grouped by natural symmetry: even, odd, and neither",
        "Three coordinated curves: f(x), f(-x), and -f(-x) with distinct stroke patterns",
        "Color-coded verdict card showing even, odd, or neither in real time",
        "Step-by-step algebraic derivation specific to each base function",
        "Runtime symmetry detection on the transformed function, not just the base",
        "Purple intersection markers showing where f(x) and f(-x) cross",
        "Four transformation sliders illustrating how shifts break symmetry",
        "Side info panel with state explanation and general parity theory"
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
          "name": "Function Symmetry",
          "item": "https://www.learnmathclass.com/functions/visual-tools/symmetry"
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
  // three-curve scene + attached picture-reading panel, no link (own page).
  const EVEN_TEXT = 'Amber f(&#8722;x) hides under the blue curve &#8212; the mirror image IS the function &#8212; while teal &#8722;f(x) hangs separate.';
  const ODD_TEXT = 'Amber f(&#8722;x) and teal &#8722;f(x) trace one shared curve: the blue original&#8217;s half-turn twin.';
  const stateUnits = {
    quadratic: demoUnitFrame({ svg: symmetryDiagrams.quadratic, caption: 'x&#178;: even, frozen', text: EVEN_TEXT }),
    absolute: demoUnitFrame({ svg: symmetryDiagrams.absolute, caption: '|x|: even, frozen',
      text: 'Both arms mirror across the y-axis; amber under blue, the teal flip pointing down. The corner sits on the axis of symmetry itself.' }),
    cosine: demoUnitFrame({ svg: symmetryDiagrams.cosine, caption: 'cos(x): even, frozen',
      text: 'Amber vanished under blue along the whole wave; the teal flip rides half a period out of phase.' }),
    identity: demoUnitFrame({ svg: symmetryDiagrams.identity, caption: 'x: odd, frozen',
      text: 'Amber and teal fuse into one line &#8212; f(&#8722;x) and &#8722;f(x) are literally the same &#8212; mirroring the blue identity.' }),
    cubic: demoUnitFrame({ svg: symmetryDiagrams.cubic, caption: 'x&#179;: odd, frozen', text: ODD_TEXT }),
    sine: demoUnitFrame({ svg: symmetryDiagrams.sine, caption: 'sin(x): odd, frozen',
      text: 'Every right-side crest matched by a left-side trough; amber and teal share one curve.' }),
    reciprocal: demoUnitFrame({ svg: symmetryDiagrams.reciprocal, caption: '1/x: odd, frozen',
      text: 'The two branches rotate onto each other about the origin &#8212; symmetry surviving a hole at its own center.' }),
    sqrt: demoUnitFrame({ svg: symmetryDiagrams.sqrt, caption: '&#8730;x: neither, frozen',
      text: 'Blue on the right, amber marooned on the left, teal below: three curves with no common ground &#8212; the domain never allowed the test.' }),
    exponential: demoUnitFrame({ svg: symmetryDiagrams.exponential, caption: 'e&#739;: neither, frozen',
      text: 'Growth, decay, and negative growth &#8212; three genuinely different curves, no overlap anywhere.' }),
    logarithmic: demoUnitFrame({ svg: symmetryDiagrams.logarithmic, caption: 'ln(x): neither, frozen',
      text: 'Blue right, amber left, teal diving &#8212; no two curves even share a domain.' }),
    quadraticPlusLinear: demoUnitFrame({ svg: symmetryDiagrams.quadraticPlusLinear, caption: 'x&#178; + x: neither, frozen',
      text: 'Three distinct parabolas: the even term keeps its sign, the odd term flips, and the mixture agrees with nothing.' }),
  };

  // Canonical per-family explanations for the info panel's Family tab
  // (SSR/SEO-visible; the component has no built-in per-family texts).
  const explanations = {
    quadratic:
      '**Quadratic** $x^2$ — even: $(-x)^2 = x^2$, the sign destroyed before it can matter. Amber coincides with blue.\n\n' +
      '[Learn more about the quadratic](!#symmetry-of-the-quadratic) · [Even functions](!#even-functions)',
    absolute:
      '**Absolute value** $|x|$ — even by definition: $|-x| = |x|$. The evenness machine of the whole library.\n\n' +
      '[Learn more about the absolute value](!#symmetry-of-the-absolute-value) · [Even functions](!#even-functions)',
    cosine:
      '**Cosine** — even: angles $\\theta$ and $-\\theta$ share an x-coordinate on the unit circle, so $\\cos(-x) = \\cos(x)$.\n\n' +
      '[Learn more about cosine](!#symmetry-of-cosine) · [Even functions](!#even-functions)',
    identity:
      '**Identity** $x$ — odd, minimally: $f(-x)$ and $-f(x)$ are the same expression, $-x$.\n\n' +
      '[Learn more about the identity](!#symmetry-of-the-identity) · [Odd functions](!#odd-functions)',
    cubic:
      '**Cubic** $x^3$ — odd: the sign passes through the odd power, and the S-curve rotates onto itself about the origin.\n\n' +
      '[Learn more about the cubic](!#symmetry-of-the-cubic) · [Odd functions](!#odd-functions)',
    sine:
      '**Sine** — odd: $\\sin(-x) = -\\sin(x)$, opposite y-coordinates for opposite angles.\n\n' +
      '[Learn more about sine](!#symmetry-of-sine) · [Odd functions](!#odd-functions)',
    reciprocal:
      '**Reciprocal** $1/x$ — odd around its own singularity: the branches trade places under a half-turn.\n\n' +
      '[Learn more about the reciprocal](!#symmetry-of-the-reciprocal) · [Odd functions](!#odd-functions)',
    sqrt:
      '**Square root** $\\sqrt{x}$ — neither: the one-sided domain never lets the comparison run.\n\n' +
      '[Learn more about the square root](!#symmetry-of-the-square-root) · [Neither group](!#functions-with-neither-symmetry)',
    exponential:
      '**Exponential** $e^x$ — neither: $e^{-x} = 1/e^x$ fails both halves of the test; its even and odd parts are cosh and sinh.\n\n' +
      '[Learn more about the exponential](!#symmetry-of-the-exponential) · [Neither group](!#functions-with-neither-symmetry)',
    logarithmic:
      '**Logarithm** $\\ln(x)$ — neither: defined only for $x > 0$, so parity has no mirror side to check.\n\n' +
      '[Learn more about the logarithm](!#symmetry-of-the-logarithm) · [Neither group](!#functions-with-neither-symmetry)',
    quadraticPlusLinear:
      '**Mixed polynomial** $x^2 + x$ — neither: even term plus odd term, whose parities cancel rather than combine.\n\n' +
      '[Learn more about the mixed polynomial](!#symmetry-of-the-mixed-polynomial) · [Neither group](!#functions-with-neither-symmetry)',
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
        title: "Function Symmetry Visualizer | Even, Odd, or Neither",
        description: "Plot f(x), f(-x), and -f(-x) together to see whether a function is even, odd, or neither. Watch transformations break symmetry in real time.",
        keywords: keyWords.join(", "),
        url: "/functions/visual-tools/symmetry",
        name: "Function Symmetry Visualizer",
        hubDescription: "See whether any function is even, odd, or neither by plotting f(x) alongside its y-axis reflection f(-x) and its origin rotation -f(-x) on one graph. Overlapping curves prove the symmetry visually, a color-coded verdict card states the result, and a step-by-step algebraic derivation walks through the test. Transformation sliders let you watch shifts break even or odd symmetry in real time.",
        category: "Function Properties",
        subCategory: ""
      },
    }
  }
}


export default function FunctionSymmetryPage({seoData, sectionsContent, introContent, faqQuestions, schemas, explanations, stateUnits}) {

  const unit = (key) => <div key={'u-' + key} dangerouslySetInnerHTML={{ __html: stateUnits[key] }} />;

  const genericSections = [
    { id:'getting-started-with-the-visualizer', title:sectionsContent.obj1.title, link:sectionsContent.obj1.link, content:[sectionsContent.obj1.content] },
    { id:'picking-a-function', title:sectionsContent.obj2.title, link:sectionsContent.obj2.link, content:[sectionsContent.obj2.content] },
    { id:'the-three-curves-and-what-overlaps-mean', title:sectionsContent.obj3.title, link:sectionsContent.obj3.link, content:[sectionsContent.obj3.content] },
    { id:'the-verdict-card', title:sectionsContent.obj4.title, link:sectionsContent.obj4.link, content:[sectionsContent.obj4.content] },
    { id:'the-derivation-block', title:sectionsContent.obj5.title, link:sectionsContent.obj5.link, content:[sectionsContent.obj5.content] },
    { id:'intersection-markers', title:sectionsContent.obj6.title, link:sectionsContent.obj6.link, content:[sectionsContent.obj6.content] },
    { id:'transforming-and-breaking-symmetry', title:sectionsContent.obj7.title, link:sectionsContent.obj7.link, content:[sectionsContent.obj7.content] },
    { id:'what-even-and-odd-mean', title:sectionsContent.obj8.title, link:sectionsContent.obj8.link, content:[sectionsContent.obj8.content] },
    { id:'why-transformations-break-symmetry', title:sectionsContent.obj9.title, link:sectionsContent.obj9.link, content:[sectionsContent.obj9.content] },
    { id:'even-functions', title:sectionsContent.obj11.title, link:sectionsContent.obj11.link, content:[sectionsContent.obj11.content] },
    { id:'symmetry-of-the-quadratic', title:sectionsContent.obj12.title, link:sectionsContent.obj12.link, content:[sectionsContent.obj12.content, unit('quadratic'), sectionsContent.obj12.after] },
    { id:'symmetry-of-the-absolute-value', title:sectionsContent.obj13.title, link:sectionsContent.obj13.link, content:[sectionsContent.obj13.content, unit('absolute'), sectionsContent.obj13.after] },
    { id:'symmetry-of-cosine', title:sectionsContent.obj14.title, link:sectionsContent.obj14.link, content:[sectionsContent.obj14.content, unit('cosine'), sectionsContent.obj14.after] },
    { id:'odd-functions', title:sectionsContent.obj15.title, link:sectionsContent.obj15.link, content:[sectionsContent.obj15.content] },
    { id:'symmetry-of-the-identity', title:sectionsContent.obj16.title, link:sectionsContent.obj16.link, content:[sectionsContent.obj16.content, unit('identity'), sectionsContent.obj16.after] },
    { id:'symmetry-of-the-cubic', title:sectionsContent.obj17.title, link:sectionsContent.obj17.link, content:[sectionsContent.obj17.content, unit('cubic'), sectionsContent.obj17.after] },
    { id:'symmetry-of-sine', title:sectionsContent.obj18.title, link:sectionsContent.obj18.link, content:[sectionsContent.obj18.content, unit('sine'), sectionsContent.obj18.after] },
    { id:'symmetry-of-the-reciprocal', title:sectionsContent.obj19.title, link:sectionsContent.obj19.link, content:[sectionsContent.obj19.content, unit('reciprocal'), sectionsContent.obj19.after] },
    { id:'functions-with-neither-symmetry', title:sectionsContent.obj20.title, link:sectionsContent.obj20.link, content:[sectionsContent.obj20.content] },
    { id:'symmetry-of-the-square-root', title:sectionsContent.obj21.title, link:sectionsContent.obj21.link, content:[sectionsContent.obj21.content, unit('sqrt'), sectionsContent.obj21.after] },
    { id:'symmetry-of-the-exponential', title:sectionsContent.obj22.title, link:sectionsContent.obj22.link, content:[sectionsContent.obj22.content, unit('exponential'), sectionsContent.obj22.after] },
    { id:'symmetry-of-the-logarithm', title:sectionsContent.obj23.title, link:sectionsContent.obj23.link, content:[sectionsContent.obj23.content, unit('logarithmic'), sectionsContent.obj23.after] },
    { id:'symmetry-of-the-mixed-polynomial', title:sectionsContent.obj24.title, link:sectionsContent.obj24.link, content:[sectionsContent.obj24.content, unit('quadraticPlusLinear'), sectionsContent.obj24.after] },
    { id:'related-concepts-and-tools', title:sectionsContent.obj10.title, link:sectionsContent.obj10.link, content:[sectionsContent.obj10.content] },
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Function Symmetry</h1>
      <br/>
      <FunctionSymmetry explanations={explanations}/>
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