
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
import FunctionDomain from '../../../../app/components/functions/domain/FunctionDomain'
import domainDiagrams from '../../../../app/components/functions/domain/functionDomainDiagrams'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'


export async function getStaticProps(){

  const keyWords = [
    'domain of function',
    'function domain visualizer',
    'find domain of function',
    'domain calculator',
    'function input values',
    'domain of f(x)',
    'domain of logarithm',
    'domain of square root',
    'domain of reciprocal',
    'restricted domain function',
    'domain vs range',
    'domain interval notation',
    'allowable inputs function',
    'x-axis domain visualizer',
    'open closed endpoints domain',
  ]

  const sectionsContent = {

    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Open the page and three panels appear. On the left is the **function picker** with eleven base functions grouped by domain shape — those that accept every real number, and those with built-in domain restrictions. In the center is the **plot panel** with the function $g(x)$ in blue and a colored band drawn directly **on the x-axis** showing the domain. On the right is the **info panel** with two tabs.

Below the plot sits the **domain card** — a colored block displaying the domain in interval notation, the same domain drawn on a horizontal 1D number line, and a draggable **test point slider** that lets you check whether a specific x-value is in the domain and, if so, see the value $g(x)$ that the function produces there.

The page launches with the logarithmic family. Its domain is $x > 0$ — the function is undefined for zero and negative inputs. The x-axis band starts just to the right of $0$ with an open endpoint and extends rightward; the test point at $x = 1$ shows $g(1) = 0$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Picking a Function`,
      content: `The picker groups eleven base functions by the **shape of their domain**:

• [Unrestricted](!#functions-defined-on-all-of-the-reals) ($\\mathbb{R}$) — [Identity](!#the-identity-function), [Linear (2x)](!#the-scaled-linear-function), [Quadratic](!#the-quadratic-function), [Cubic](!#the-cubic-function), [Exponential](!#the-exponential-function), [Sine](!#the-sine-function), [Cosine](!#the-cosine-function), [Absolute](!#the-absolute-value-function). All accept every real number as input.
• [Restricted](!#the-restricted-families) — [Logarithmic](!#the-logarithm-and-its-open-boundary) (domain $x > 0$), [Square root](!#the-square-root-and-its-closed-boundary) (domain $x \\geq 0$), [Reciprocal](!#the-reciprocal-and-its-excluded-point) (domain $x \\neq 0$). Each has a built-in restriction baked into its definition.

The grouping is the pedagogical point. Most functions you encounter in pre-calculus accept any input; the three families that don't are the canonical cases worth studying — and the ones where transformations actually move the domain boundary around. Picking an unrestricted family is useful for contrast: the colored band on the x-axis just extends from $-\\infty$ to $+\\infty$, and changing parameters doesn't move it.

Click any entry to switch. Transformation parameters reset to defaults on every switch.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Why Only $b$ and $h$ Change the Domain`,
      content: `Below the family list, four sliders apply the standard affine transformations:

• $a$ — **vertical scale**. Multiplies the output by $a$.
• $k$ — **vertical shift**. Adds $k$ to the output.
• $b$ — **horizontal scale**. Multiplies the input by $b$.
• $h$ — **horizontal shift**. Subtracts $h$ from the input.

A small "**affects domain**" badge appears on the labels for $b$ and $h$ but not on $a$ or $k$. The reason is structural and the mirror image of the range case. The transformed function is $g(x) = a \\cdot f(b(x - h)) + k$. The input that reaches the inner $f$ is $b(x - h)$ — only $b$ and $h$ appear there. After $f$ produces a value, $a$ and $k$ scale and shift it, but by then the legality of the input has already been decided.

Drag $a$ or $k$ as wildly as you want — the x-axis band does not move. Drag $b$ or $h$ and the band immediately rescales and shifts. The visualizer makes this asymmetry visible in real time.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Reading the X-Axis Highlight and Domain Bar`,
      content: `The domain is shown in two coordinated places:

• **On the x-axis of the main plot** — a colored band traces the interval of legal inputs directly on the axis, in the same coordinate system as the function. You can see which inputs the blue curve has values at and which it leaves blank. Open and closed endpoints render as hollow and filled circles; infinite extents render as arrows.

• **On a horizontal number line below the plot** — the same domain interval is drawn flat, in the more familiar number-line orientation with tick marks and integer labels every two units. The number line view sits in its own colored card and is easier to read at a glance.

The two views always agree. The on-axis version makes the geometric relationship between input restrictions and the curve unmistakable; the number-line version is the canonical representation you would draw by hand.

For excluded domains like the reciprocal, both views mark the excluded value with a red ×, showing the hole in the domain visually.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Probing with the Test Point Slider`,
      content: `Inside the domain card sits a **test point slider** labeled "x = ...". Drag it from $-10$ to $+10$ along the number line. As you move:

• The slider's thumb on the number line jumps to that position, with a vertical marker and a filled circle.
• A dashed vertical reference line appears in the main plot at the corresponding $x$ value — drawn in the highlight color when the input is in the domain, and red when it is not.
• Below the slider, an "**in domain**" or "**outside domain**" badge updates with the result.
• Next to the badge, the actual function value appears: $g(x) = \\ldots$ for legal inputs, or "$g(x)$ is undefined" for inputs outside the domain.

The function value display is the key difference from the range visualizer. Where the range tool only answers achievability, the domain tool tells you **what comes out** whenever the input is legal — so you can use it as both a domain checker and a quick function evaluator.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `The Domain Card and Applied Chips`,
      content: `At the top of the domain card, the **domain in interval notation** is displayed as a monospace string — e.g., $x > 0$, $x \\geq 0$, $x \\neq 0$, or "all real x" for unrestricted families. This is the same string you would write on a homework assignment.

Below the plot, an **Applied** strip shows the four transformation parameter chips with their current values. The four chips are deliberately dimmed compared to other visualizers in the series; a separator and a "**b, h affect domain**" callout reinforce which parameters actually matter for this tool's question. Even though $a$ and $k$ appear in the strip, they are visually de-emphasized — a visual reminder that they could be at any value and the domain would still be the same.

The card's border color, header text, and accent badges all derive from the chosen highlight color, so the entire domain UI reads as one coordinated block.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Customizing the Highlight Color`,
      content: `Under the family picker and parameter sliders, an **Appearance** section contains a color swatch labeled "Domain color". Click it to open a native color picker and choose any color you want for the domain highlight, the domain card chrome, the number-line band, and the dashed reference line.

The color cascades through several visual elements simultaneously:

• X-axis highlight band in the plot
• Number-line fill below the plot
• Dashed vertical reference line when the test point is in domain
• Domain card border, header text, and "in domain" badge
• "Affects domain" badges on the relevant parameter sliders

Outside-domain elements (the red badge, the red reference line, the red × at excluded points) remain red regardless of the chosen highlight color — the contrast between "valid" and "invalid" is preserved.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Is the Domain of a Function?`,
      content: `The **domain** of a function is the set of inputs where the function is defined — equivalently, the set of $x$-values for which $f(x)$ produces a real number output. Inputs outside the domain are forbidden; the function simply has no value there.

Different function families have qualitatively different domain restrictions:

• Polynomials ($x$, $x^2$, $x^3$, $|x|$), exponential $e^x$, sine, and cosine accept every real number. Their domain is all of $\\mathbb{R}$.
• $\\sqrt{x}$ — defined only for $x \\geq 0$, since the square root of a negative number is not real
• $\\ln(x)$ — defined only for $x > 0$, since the logarithm of zero or a negative number is not real
• $1/x$ — defined everywhere except $x = 0$, since division by zero is undefined

Domain is independent of range. A function can have a tiny domain and reach every real number ($\\ln x$ has domain $x > 0$ but range $\\mathbb{R}$), or accept every real number and stay bounded ($\\sin x$ has domain $\\mathbb{R}$ but range $[-1, 1]$). Together, domain and range fully characterize what goes in and what can come out.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Open vs Closed Endpoints and Excluded Values`,
      content: `Three subtle distinctions show up in the visualizer's domain bar:

• **Closed endpoint (filled circle)** — the boundary value is **included** in the domain. Square root has domain $x \\geq 0$ with a closed endpoint at $0$, because $\\sqrt{0} = 0$ is defined. The bar shows a filled dot.

• **Open endpoint (hollow circle)** — the boundary value is **excluded** from the domain. Logarithm has domain $x > 0$ with an open endpoint at $0$, because $\\ln(0)$ is undefined (the limit is $-\\infty$). The bar shows a hollow dot.

• **Excluded value (red ×)** — the function is defined everywhere except one value. Reciprocal has domain $x \\neq 0$ — every nonzero real number is a legal input, but $0$ is the vertical asymptote and forbidden. The bar shows a full fill broken by a small red × at the excluded point.

The distinction between open and closed endpoints matters for continuity, limits, and whether a function attains its extreme values. The visualizer makes the boundary type visible by eye, so the difference reads at a glance rather than as an abstract notation.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Range of a Function** — the partner concept showing which outputs the function can produce. Use the companion range visualizer to see how the mirror rule works — only $a$ and $k$ (not $b$ and $h$) affect the range.

**Functions** — general theory of functions, including formal definitions of domain, range, and image.

**Function Transformations** — visualizer for $a$, $k$, $b$, $h$ alone, useful for separating the effects of each parameter before adding the domain analysis on top.

**Functions Families Gallery** — gallery of the same eleven base functions plotted side by side, useful as a prerequisite for understanding what each curve looks like.

**Inverse Functions** — visualizer for reflecting a function across $y = x$. The domain of $f$ becomes the range of $f^{-1}$, a fundamental duality made concrete by the domain and inverse tools together.

**Asymptotes** — vertical asymptotes correspond to excluded values in the domain (like $x = 0$ for the reciprocal). The visualizer's red × marker is one geometric expression of this idea.

**Limits and Continuity** — the open/closed endpoint distinction shown in the visualizer is foundational for continuity at boundary points and for one-sided limits.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Functions Defined on All of the Reals`,
      content: `Eight of the picker's eleven functions accept every real input: the [identity](!#the-identity-function), the [scaled linear](!#the-scaled-linear-function), the [quadratic](!#the-quadratic-function), the [cubic](!#the-cubic-function), the [exponential](!#the-exponential-function), [sine](!#the-sine-function), [cosine](!#the-cosine-function), and the [absolute value](!#the-absolute-value-function). Their domain bar is one unbroken green band from edge to edge.

For these families the domain story is deliberately boring — and that is worth seeing. Whatever $b$ and $h$ you dial in, an all-of-$\\mathbb{R}$ domain maps onto all of $\\mathbb{R}$ again: shifting or rescaling the whole real line gives back the whole real line. The interesting cases live in the [restricted group](!#the-restricted-families).`,
      before: ``, after: ``, link: '',
    },
    obj12: {
      title: `The Identity Function`,
      content: `The identity $f(x) = x$ accepts everything and changes nothing — the baseline case for every domain question.`,
      before: ``,
      after: `Its green band spans the axis with no endpoints to mark, and no slider can break it: transformed, the identity just becomes another line, and [lines](!#the-scaled-linear-function) are domain-proof.

Its real use in this tool is as a control: switch here after a restricted family and watch every red mark vanish — the difference you just saw was the function's doing, not the sliders'.`,
      link: '',
    },
    obj13: {
      title: `The Scaled Linear Function`,
      content: `The line $f(x) = 2x$ doubles its input — and doubling is something every real number tolerates.`,
      before: ``,
      after: `Like the [identity](!#the-identity-function), its domain is all of $\\mathbb{R}$ under every parameter setting. What the scaling **does** move is the range and the steepness — a reminder that domain (allowed inputs) and range (produced outputs) are independent questions.

Every polynomial shares this immunity: addition and multiplication never refuse an input. Division and even roots are where refusals start — the theme of the [restricted families](!#the-restricted-families).`,
      link: '',
    },
    obj14: {
      title: `The Quadratic Function`,
      content: `Squaring accepts every real number — negative inputs included — so the parabola's domain bar is solid green.`,
      before: ``,
      after: `The quadratic is the classic place where students first confuse domain with range: the outputs never dip below zero, but the **inputs** are unrestricted. The visualizer separates the two visually — the green band on the x-axis is about inputs only, and it never shrinks however the parabola moves.

Note the contrast with its inverse: undoing a square means taking a [square root](!#the-square-root-and-its-closed-boundary), and **that** function pays for the parabola's generosity with a halved domain.`,
      link: '',
    },
    obj15: {
      title: `The Cubic Function`,
      content: `Cubing accepts every real input and — unlike squaring — returns every real output too.`,
      before: ``,
      after: `Domain $\\mathbb{R}$, range $\\mathbb{R}$: the cubic is unrestricted in both directions, which is why its inverse (the cube root) is also defined everywhere, needing none of the caution the square root demands. Odd powers never refuse an input and never repeat an output.

In the tool this makes the cubic the cleanest demonstration that $a$, $k$, $b$, $h$ all leave the green band alone — there is simply nothing to break.`,
      link: '',
    },
    obj16: {
      title: `The Exponential Function`,
      content: `The exponential $e^x$ takes any real exponent — its domain is the whole line, even though its outputs never leave positive territory.`,
      before: ``,
      after: `That mismatch is the exponential's signature: domain $\\mathbb{R}$, range $(0, \\infty)$. Feed it $-1000$ and it answers with a very small positive number, not a refusal.

The refusals belong to its inverse: the [logarithm](!#the-logarithm-and-its-open-boundary) inherits the exponential's **range** as its domain — positive inputs only. Inverting a function swaps domain and range, and this pair is the tool's best illustration of the swap.`,
      link: '',
    },
    obj17: {
      title: `The Sine Function`,
      content: `Sine accepts any angle — wind around the circle as many times as you like — so its domain is all of $\\mathbb{R}$.`,
      before: ``,
      after: `Periodicity and full domain go together: the wave repeats forever in both directions with no boundary to mark. The bounded part of sine's story is its **range**, locked inside $[-1, 1]$.

Contrast this with tangent — periodic but riddled with excluded points at every half-period. Periodicity alone tells you nothing about domain; it is the division inside tangent that punches the holes, the same mechanism as the [reciprocal's excluded point](!#the-reciprocal-and-its-excluded-point).`,
      link: '',
    },
    obj18: {
      title: `The Cosine Function`,
      content: `Cosine, like [sine](!#the-sine-function), accepts every real input — the same endless wave, shifted a quarter period.`,
      before: ``,
      after: `Everything said about sine's domain transfers verbatim: unbroken green band, immunity to all four sliders, range trapped in $[-1, 1]$.

The pair is useful in this tool for a subtler point: two different functions can have **identical** domain behavior. Domain is a coarse fingerprint — it distinguishes the logarithm from the sine instantly, but cannot tell sine from cosine at all.`,
      link: '',
    },
    obj19: {
      title: `The Absolute Value Function`,
      content: `The absolute value $|x|$ happily accepts negatives — it just strips their sign — so its domain runs the whole axis.`,
      before: ``,
      after: `The V-shape has a corner, and a corner is a **differentiability** problem, not a domain problem: the function is defined and continuous everywhere, including at $x = 0$. The green band takes no notice of the kink.

That distinction — defined everywhere versus smooth everywhere — is worth one deliberate look here, because the domain bar and the curve tell different stories at the corner point.`,
      link: '',
    },
    obj20: {
      title: `The Restricted Families`,
      content: `Three functions in the picker refuse some inputs, one for each classic reason: the [logarithm](!#the-logarithm-and-its-open-boundary) needs strictly positive input (an open boundary), the [square root](!#the-square-root-and-its-closed-boundary) needs non-negative input (a closed boundary), and the [reciprocal](!#the-reciprocal-and-its-excluded-point) refuses exactly one value (an excluded point).

Open half-line, closed half-line, punctured line — these three shapes, moved and scaled by $b$ and $h$, cover nearly every domain you will meet before calculus. The [endpoint distinction](!#open-vs-closed-endpoints-and-excluded-values) between them is exactly what the visualizer's markers encode.`,
      before: ``, after: ``, link: '',
    },
    obj21: {
      title: `The Logarithm and Its Open Boundary`,
      content: `The logarithm demands strictly positive input: its domain is $(0, \\infty)$, and the boundary point itself is **not** included.`,
      before: ``,
      after: `The open circle at $x = 0$ is the whole story: $\\ln(0)$ does not exist — the curve dives toward $-\\infty$ as the input approaches zero, but zero itself is refused. Red band left of the marker, green strictly right of it.

Drag $h$ and the wall slides to $x = h$, open circle and all; flip $b$ negative and the inequality reverses — the domain becomes $(-\\infty, h)$, the green and red bands trading sides. This is the [parameter rule](!#why-only-b-and-h-change-the-domain) acting on a boundary you can watch.

Compare the [square root's closed dot](!#the-square-root-and-its-closed-boundary): one pixel of difference on screen, a real mathematical distinction underneath.`,
      link: '',
    },
    obj22: {
      title: `The Square Root and Its Closed Boundary`,
      content: `The square root accepts zero — $\\sqrt{0} = 0$ is a perfectly good value — so its domain $[0, \\infty)$ **includes** its boundary.`,
      before: ``,
      after: `That inclusion is the filled green dot at the origin: the curve genuinely starts there, at an actual point, rather than falling away toward a wall it can never touch. Everything left of the dot is red; the dot itself is green.

The contrast with the [logarithm](!#the-logarithm-and-its-open-boundary) is the cleanest open-versus-closed lesson in the tool: both domains are half-lines with boundary zero, and the single question "is the boundary point itself allowed?" separates $[0, \\infty)$ from $(0, \\infty)$.

Interval notation mirrors the markers exactly: square bracket = filled dot, round parenthesis = open circle.`,
      link: '',
    },
    obj23: {
      title: `The Reciprocal and Its Excluded Point`,
      content: `The reciprocal $1/x$ accepts everything except a single number: its domain is all of $\\mathbb{R}$ with the one point $x = 0$ punched out.`,
      before: ``,
      after: `The domain bar shows green in both directions with a lone open circle at the origin — a puncture, not a wall. Unlike the half-line restrictions, almost nothing is lost: one input out of infinitely many.

But that one point carries consequences: the vertical asymptote, the split into two branches, the sign flip from $-\\infty$ to $+\\infty$. A single excluded input can dominate a function's entire geometry.

Shift $h$ and the puncture follows to $x = h$. Every rational function's domain is built this way — the real line minus the zeros of its denominator, one open circle per zero.`,
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
      question: "What does the Domain of a Function Visualizer do?",
      answer: "It draws the set of legal inputs of a function — its domain — directly on the x-axis of the plot and as a horizontal number line below it. Pick a base function from eleven families grouped by domain shape, transform it with vertical scale, vertical shift, horizontal scale, and horizontal shift sliders, and the domain updates in real time. A test point slider lets you check whether a specific x-value is in the domain and see the function value there."
    },
    obj2: {
      question: "Why do only b and h change the domain?",
      answer: "The transformed function is g(x) = a · f(b(x − h)) + k. The input that reaches the inner f is b(x − h), so only b and h appear there. After f produces a value, a and k scale and shift the output — but by then the legality of the input has already been decided. Multiplying or shifting the output can't make a forbidden input suddenly legal. Drag a or k freely and the x-axis domain band stays put; drag b or h and the band immediately rescales and shifts."
    },
    obj3: {
      question: "What does the test point slider do?",
      answer: "Drag it to pick any x-value between -10 and +10. The visualizer answers whether that value is in the domain of g and, if so, computes the function value g(x). A green in-domain badge appears with the value when legal, a red outside-domain badge appears with 'g(x) is undefined' when not. A dashed vertical reference line is drawn in the main plot at the chosen x, in highlight color or red depending on the answer."
    },
    obj4: {
      question: "What is the difference between an open and closed endpoint?",
      answer: "A closed endpoint, shown as a filled circle, means the boundary value is included in the domain. The square root function has a closed endpoint at x = 0 because the square root of zero is zero, a defined value. An open endpoint, shown as a hollow circle, means the boundary is excluded. The logarithm has an open endpoint at x = 0 because ln(0) is undefined."
    },
    obj5: {
      question: "How are the eleven base functions grouped in the picker?",
      answer: "They are grouped by whether their domain is restricted. Unrestricted contains eight functions that accept every real number — identity, linear, quadratic, cubic, exponential, sine, cosine, and absolute value. Restricted contains three functions with built-in domain restrictions — logarithmic with domain x > 0, square root with domain x ≥ 0, and reciprocal with domain x ≠ 0."
    },
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Domain of a Function Visualizer",
      "description": "Interactive visualizer for the domain of a function. Pick a base function, transform it, and see the set of legal inputs drawn directly on the x-axis.",
      "url": "https://www.learnmathclass.com/functions/visual-tools/domain",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Eleven base functions grouped by domain shape: unrestricted families and the three classic restricted families",
        "Four transformation sliders with badges marking which ones affect the domain",
        "Domain drawn directly on the x-axis of the main plot in the same coordinate system",
        "Horizontal number line below the plot for an alternative view of the domain interval",
        "Test point slider that checks domain membership and computes the function value for legal inputs",
        "Open and closed endpoints rendered as hollow and filled circles",
        "Excluded values marked with a red cross for domains with a single hole",
        "Customizable highlight color cascading through all domain-related UI elements"
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
          "name": "Domain of a Function",
          "item": "https://www.learnmathclass.com/functions/visual-tools/domain"
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
  // domain view + attached picture-reading panel, no link (own page).
  const R_TEXT = {
    identity: 'The identity line over one unbroken green band: every real input accepted, none changed.',
    linearScale: 'The doubled line f(x) = 2x over a full green band &#8212; scaling an input is never a reason to refuse it.',
    quadratic: 'The parabola over a solid green band: inputs unrestricted, even though outputs never go negative.',
    cubic: 'The cubic over a full green band &#8212; unrestricted in domain and range alike.',
    exponential: 'e&#739; over a full green band: any exponent is welcome, however negative, and the answer is just very small.',
    sine: 'The endless wave over an endless green band &#8212; any angle, wound any number of times.',
    cosine: 'The same full-domain picture as sine, shifted a quarter period.',
    absolute: 'The V over a solid green band: the corner at zero is a smoothness issue, not a domain one.',
  };
  const stateUnits = {};
  for (const k of Object.keys(R_TEXT)) {
    const caps = { identity: 'f(x) = x', linearScale: 'f(x) = 2x', quadratic: 'f(x) = x&#178;', cubic: 'f(x) = x&#179;',
      exponential: 'f(x) = e&#739;', sine: 'f(x) = sin(x)', cosine: 'f(x) = cos(x)', absolute: 'f(x) = |x|' };
    stateUnits[k] = demoUnitFrame({ svg: domainDiagrams[k], caption: caps[k] + ', domain frozen', text: R_TEXT[k] });
  }
  stateUnits.logarithmic = demoUnitFrame({ svg: domainDiagrams.logarithmic, caption: 'ln(x), domain frozen',
    text: 'Red band to the left, green strictly to the right, and the open circle at x = 0 recording the refusal: the boundary point itself is not allowed.' });
  stateUnits.sqrt = demoUnitFrame({ svg: domainDiagrams.sqrt, caption: '&#8730;x, domain frozen',
    text: 'The filled green dot at the origin is the difference: zero is accepted, the curve genuinely starts there. Domain [0, &#8734;).' });
  stateUnits.reciprocal = demoUnitFrame({ svg: domainDiagrams.reciprocal, caption: '1/x, domain frozen',
    text: 'Green in both directions with one puncture: a lone open circle at x = 0, the single refused input that shapes the whole graph.' });

  // Canonical per-family explanations for the info panel's Family tab
  // (SSR/SEO-visible; the component has no built-in per-family texts).
  const explanations = {
    identity:
      '**Identity** $f(x) = x$ — domain $\\mathbb{R}$: every input accepted, none changed. The control case for every domain question.\n\n' +
      '[Learn more about the identity function](!#the-identity-function) · [All-of-R families](!#functions-defined-on-all-of-the-reals)',
    linearScale:
      '**Linear** $f(x) = 2x$ — domain $\\mathbb{R}$: doubling never refuses an input. Polynomials are domain-proof.\n\n' +
      '[Learn more about the scaled linear function](!#the-scaled-linear-function) · [All-of-R families](!#functions-defined-on-all-of-the-reals)',
    quadratic:
      '**Quadratic** $x^2$ — domain $\\mathbb{R}$, range $[0, \\infty)$: the classic reminder that inputs and outputs are separate questions.\n\n' +
      '[Learn more about the quadratic function](!#the-quadratic-function) · [All-of-R families](!#functions-defined-on-all-of-the-reals)',
    cubic:
      '**Cubic** $x^3$ — domain $\\mathbb{R}$ and range $\\mathbb{R}$: unrestricted both ways, which is why the cube root needs no caution either.\n\n' +
      '[Learn more about the cubic function](!#the-cubic-function) · [All-of-R families](!#functions-defined-on-all-of-the-reals)',
    exponential:
      '**Exponential** $e^x$ — domain $\\mathbb{R}$, range $(0, \\infty)$: its inverse, the logarithm, inherits that range as a restricted domain.\n\n' +
      '[Learn more about the exponential function](!#the-exponential-function) · [All-of-R families](!#functions-defined-on-all-of-the-reals)',
    sine:
      '**Sine** — domain $\\mathbb{R}$: any angle, wound any number of times. The bounded part of its story is the range $[-1, 1]$.\n\n' +
      '[Learn more about the sine function](!#the-sine-function) · [All-of-R families](!#functions-defined-on-all-of-the-reals)',
    cosine:
      '**Cosine** — domain $\\mathbb{R}$, identical domain behavior to sine: domain is a coarse fingerprint that cannot tell the two apart.\n\n' +
      '[Learn more about the cosine function](!#the-cosine-function) · [All-of-R families](!#functions-defined-on-all-of-the-reals)',
    absolute:
      '**Absolute value** $|x|$ — domain $\\mathbb{R}$: the corner at zero is a differentiability problem, not a domain problem.\n\n' +
      '[Learn more about the absolute value function](!#the-absolute-value-function) · [All-of-R families](!#functions-defined-on-all-of-the-reals)',
    logarithmic:
      '**Logarithm** $\\ln(x)$ — domain $(0, \\infty)$, an **open** boundary: zero itself is refused, marked by the open circle.\n\n' +
      '[Learn more about the logarithm](!#the-logarithm-and-its-open-boundary) · [Restricted families](!#the-restricted-families)',
    sqrt:
      '**Square root** $\\sqrt{x}$ — domain $[0, \\infty)$, a **closed** boundary: zero is accepted, marked by the filled dot.\n\n' +
      '[Learn more about the square root](!#the-square-root-and-its-closed-boundary) · [Restricted families](!#the-restricted-families)',
    reciprocal:
      '**Reciprocal** $1/x$ — domain $\\mathbb{R} \\setminus \\{0\\}$: one **excluded point**, and an entire geometry shaped by it.\n\n' +
      '[Learn more about the reciprocal](!#the-reciprocal-and-its-excluded-point) · [Restricted families](!#the-restricted-families)',
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
        title: "Domain of a Function Visualizer | Legal Inputs on the X-Axis",
        description: "Visualize the domain of any transformed function on the x-axis. Drag a test point to check membership and see why only b and h change the domain.",
        keywords: keyWords.join(", "),
        url: "/functions/visual-tools/domain",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="8" y1="56" x2="74" y2="56" stroke="#B5D4F4" stroke-width="0.9"/><line x1="40" y1="12" x2="40" y2="62" stroke="#B5D4F4" stroke-width="0.9"/><path d="M 30 56 Q 44 34 70 26" fill="none" stroke="#85B7EB" stroke-width="1.9"/><rect x="30" y="53" width="40" height="6" rx="3" fill="#97C459" fill-opacity="0.6" stroke="#3B6D11" stroke-width="1"/><line x1="8" y1="68" x2="74" y2="68" stroke="#B5D4F4" stroke-width="0.9"/><line x1="30" y1="68" x2="70" y2="68" stroke="#97C459" stroke-width="3"/><circle cx="30" cy="68" r="2.6" fill="#97C459" stroke="#27500A" stroke-width="1"/><circle cx="50" cy="68" r="2.6" fill="#FAC775" stroke="#854F0B" stroke-width="1"/></svg>`,
        name: "Domain of a Function Visualizer",
        hubDescription: "See the set of legal inputs of any function drawn directly on the x-axis as a colored band, with a horizontal number line below the plot and a draggable test point that checks domain membership and computes the function value for legal inputs. Pick from eleven base functions grouped by domain shape and watch the domain respond live to horizontal scale and shift — while vertical transformations leave it unchanged.",
        category: "Function Properties",
        subCategory: ""
      },
    }
  }
}


export default function DomainOfFunctionPage({seoData, sectionsContent, introContent, faqQuestions, schemas, explanations, stateUnits}) {

  const unit = (key) => <div key={'u-' + key} dangerouslySetInnerHTML={{ __html: stateUnits[key] }} />;

  const genericSections = [
    { id:'getting-started-with-the-visualizer',         title:sectionsContent.obj1.title,  link:sectionsContent.obj1.link,  content:[sectionsContent.obj1.content] },
    { id:'picking-a-function',                          title:sectionsContent.obj2.title,  link:sectionsContent.obj2.link,  content:[sectionsContent.obj2.content] },
    { id:'why-only-b-and-h-change-the-domain',          title:sectionsContent.obj3.title,  link:sectionsContent.obj3.link,  content:[sectionsContent.obj3.content] },
    { id:'reading-the-x-axis-highlight-and-domain-bar', title:sectionsContent.obj4.title,  link:sectionsContent.obj4.link,  content:[sectionsContent.obj4.content] },
    { id:'probing-with-the-test-point-slider',          title:sectionsContent.obj5.title,  link:sectionsContent.obj5.link,  content:[sectionsContent.obj5.content] },
    { id:'the-domain-card-and-applied-chips',           title:sectionsContent.obj6.title,  link:sectionsContent.obj6.link,  content:[sectionsContent.obj6.content] },
    { id:'customizing-the-highlight-color',             title:sectionsContent.obj7.title,  link:sectionsContent.obj7.link,  content:[sectionsContent.obj7.content] },
    { id:'what-is-the-domain-of-a-function',            title:sectionsContent.obj8.title,  link:sectionsContent.obj8.link,  content:[sectionsContent.obj8.content] },
    { id:'open-vs-closed-endpoints-and-excluded-values', title:sectionsContent.obj9.title, link:sectionsContent.obj9.link,  content:[sectionsContent.obj9.content] },
    { id:'functions-defined-on-all-of-the-reals',       title:sectionsContent.obj11.title, link:sectionsContent.obj11.link, content:[sectionsContent.obj11.content] },
    { id:'the-identity-function',                       title:sectionsContent.obj12.title, link:sectionsContent.obj12.link, content:[sectionsContent.obj12.content, unit('identity'), sectionsContent.obj12.after] },
    { id:'the-scaled-linear-function',                  title:sectionsContent.obj13.title, link:sectionsContent.obj13.link, content:[sectionsContent.obj13.content, unit('linearScale'), sectionsContent.obj13.after] },
    { id:'the-quadratic-function',                      title:sectionsContent.obj14.title, link:sectionsContent.obj14.link, content:[sectionsContent.obj14.content, unit('quadratic'), sectionsContent.obj14.after] },
    { id:'the-cubic-function',                          title:sectionsContent.obj15.title, link:sectionsContent.obj15.link, content:[sectionsContent.obj15.content, unit('cubic'), sectionsContent.obj15.after] },
    { id:'the-exponential-function',                    title:sectionsContent.obj16.title, link:sectionsContent.obj16.link, content:[sectionsContent.obj16.content, unit('exponential'), sectionsContent.obj16.after] },
    { id:'the-sine-function',                           title:sectionsContent.obj17.title, link:sectionsContent.obj17.link, content:[sectionsContent.obj17.content, unit('sine'), sectionsContent.obj17.after] },
    { id:'the-cosine-function',                         title:sectionsContent.obj18.title, link:sectionsContent.obj18.link, content:[sectionsContent.obj18.content, unit('cosine'), sectionsContent.obj18.after] },
    { id:'the-absolute-value-function',                 title:sectionsContent.obj19.title, link:sectionsContent.obj19.link, content:[sectionsContent.obj19.content, unit('absolute'), sectionsContent.obj19.after] },
    { id:'the-restricted-families',                     title:sectionsContent.obj20.title, link:sectionsContent.obj20.link, content:[sectionsContent.obj20.content] },
    { id:'the-logarithm-and-its-open-boundary',         title:sectionsContent.obj21.title, link:sectionsContent.obj21.link, content:[sectionsContent.obj21.content, unit('logarithmic'), sectionsContent.obj21.after] },
    { id:'the-square-root-and-its-closed-boundary',     title:sectionsContent.obj22.title, link:sectionsContent.obj22.link, content:[sectionsContent.obj22.content, unit('sqrt'), sectionsContent.obj22.after] },
    { id:'the-reciprocal-and-its-excluded-point',       title:sectionsContent.obj23.title, link:sectionsContent.obj23.link, content:[sectionsContent.obj23.content, unit('reciprocal'), sectionsContent.obj23.after] },
    { id:'related-concepts-and-tools',                  title:sectionsContent.obj10.title, link:sectionsContent.obj10.link, content:[sectionsContent.obj10.content] },
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Domain of a Function</h1>
      <br/>
      <FunctionDomain explanations={explanations}/>
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