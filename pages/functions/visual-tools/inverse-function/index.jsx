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
import FunctionInverse from '../../../../app/components/functions/inverse/FunctionInverse'
import inverseDiagrams from '../../../../app/components/functions/inverse/functionInverseDiagrams'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'


export async function getStaticProps(){

  const keyWords = [
    'inverse functions',
    'inverse function visualizer',
    'inverse function calculator',
    'inverse function graph',
    'reflection across y = x',
    'horizontal line test',
    'one-to-one function',
    'restricted domain inverse',
    'self-inverse function',
    'inverse trig functions',
    'arcsin arccos visualizer',
    'principal branch sine cosine',
    'inverse of transformed function',
    'how to find inverse function',
    'f inverse of x',
  ]

  const sectionsContent = {

    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Open the page and three panels appear. On the left is the **function picker** with eleven base functions. In the center is the **plot panel** with three curves: the function $g(x)$ in blue, its inverse $g^{-1}(x)$ in amber, and a dashed gray line $y = x$ that acts as the mirror across which $g$ and $g^{-1}$ reflect. On the right is the **info panel** with three tabs.

Below the picker sit four parameter sliders ($a$, $k$, $b$, $h$) that transform the base function. The page launches on the quadratic family — a classic example of a function that requires a restricted domain to be invertible.

Two header badges flag the current state. A yellow "**domain restricted**" badge appears for functions like quadratic, absolute value, sine, and cosine. A green "**self-inverse (at defaults)**" badge appears for functions like identity and reciprocal, which equal their own inverses when no transformation is applied.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Picking a Base Function`,
      content: `The picker lists eleven families, with sine and cosine grouped under "Trigonometric":

• Polynomial: [Identity](!#the-identity-and-its-inverse) ($x$), [Linear (2x)](!#the-scaled-linear-function-and-its-inverse), [Cubic](!#the-cubic-and-the-cube-root) ($x^3$), [Quadratic](!#the-quadratic-and-the-square-root) ($x^2$)
• Algebraic: [Reciprocal](!#the-reciprocal-and-its-inverse) ($1/x$), [Square root](!#the-square-root-and-its-inverse) ($\\sqrt{x}$), [Absolute](!#the-absolute-value-and-its-inverse) ($|x|$)
• Transcendental: [Exponential](!#the-exponential-and-the-logarithm) ($e^x$), [Logarithmic](!#the-logarithm-and-the-exponential) ($\\ln x$)
• Trigonometric: [Sine](!#sine-and-the-arcsine), [Cosine](!#cosine-and-the-arccosine)

Functions marked with a small **R** badge in the picker are **restricted** — they fail the horizontal line test in their natural domain and need to be restricted to an invertible branch before the inverse can be defined. The visualizer shows both the full curve (faded) and the chosen branch (bold) for restricted families. The bottom of the picker spells out what R means.

Click any family to switch. Parameters reset to defaults on every switch, so you always start fresh.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Transforming the Function`,
      content: `The four sliders below the picker apply the standard affine transformations to the base function:

• $a$ — **vertical scale and reflection**
• $k$ — **vertical shift**
• $b$ — **horizontal scale and reflection**
• $h$ — **horizontal shift**

The transformed function is $g(x) = a \\cdot f(b(x - h)) + k$. The visualizer **re-derives the inverse symbolically** every time you move a slider, so $g^{-1}(x) = h + f^{-1}((x - k) / a) / b$ updates in real time. Both equations are displayed as monospace badges in the plot header.

The most important thing this slider strip teaches: transforming $f$ does not just move the inverse on the screen, it changes **which** transformations the inverse carries. A vertical scale of $f$ becomes a horizontal scale of $f^{-1}$. Vertical shifts on $f$ become horizontal shifts on $f^{-1}$. The Parameters tab in the info panel makes this explicit.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Reading the Plot`,
      content: `Up to four curves can appear in the plot at once:

• **Gray dashed line** $y = x$ — the mirror line. Every point on $g$ has a mirror point on $g^{-1}$ across this line; their graphs are reflections of each other.
• **Blue solid curve** — $g(x)$. The transformed function.
• **Amber solid curve** — $g^{-1}(x)$. The inverse, drawn only where it is defined.
• **Faded blue dashed curve** — $g$ **full** (restricted families only). Shows the full base curve, with the bold blue curve highlighting the invertible branch.

For unrestricted families like cubic or exponential, only the three solid curves appear. For restricted families like quadratic, you see all four — the faded full parabola alongside the bold branch on $x \\geq 0$, plus the inverse $\\sqrt{x}$ in amber.

Crosshair and curve tooltips work the same as in other visualizers in the series — mouse over any curve to read off coordinates.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `The Applied Chip Strip and Show Toggles`,
      content: `Two horizontal strips sit below the plot.

The **Applied** strip shows four chips, one per transformation parameter. Active (non-default) parameters glow blue with their current value. At a glance, you can tell which transformations are currently changing $g$ — and therefore which mirrored transformations are affecting $g^{-1}$.

The **Show** strip below has one toggle button per curve in the plot. Click a button to hide that curve. Hiding $y = x$ removes visual clutter; hiding $g^{-1}$ lets you focus on the function alone; hiding the full faded curve focuses you on just the invertible branch. The buttons preview the curve's color and line style (solid versus dashed) and show the curve's equation in monospace.

For self-inverse functions at default parameters, $g$ and $g^{-1}$ are the same curve and overlap exactly. Toggling either off shows that they were on top of each other.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `The Info Panel — Three Tabs`,
      content: `The side info panel has three tabs:

• **Explanation** — reads the current state. Shows the base function and its inverse, the transformed equations, and special notes for the current family (self-inverse identity, restriction explanation for restricted families). Closes with the inverse-check identity $g(g^{-1}(x)) = x$.

• **Parameters** — explains the rule by which transformations of $f$ become transformations of $f^{-1}$. Includes a table showing each correspondence (vertical scale on $f$ becomes horizontal scale on $f^{-1}$, vertical shift becomes horizontal shift, and so on), then describes the current parameter values one by one. The most useful tab for understanding **why** the inverse changes the way it does.

• **Concepts** — general theory: reflection across $y = x$, the horizontal line test, restricted branches, the mirror identity. Independent of the current state.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What is an Inverse Function?`,
      content: `The **inverse** of a function $f$ is the function $f^{-1}$ that undoes $f$: if $f(a) = b$ then $f^{-1}(b) = a$. Every input-output pair $(a, b)$ on the graph of $f$ becomes the pair $(b, a)$ on $f^{-1}$ — the coordinates swap.

Geometrically, swapping coordinates is the **reflection across the line $y = x$**. The visualizer always draws this mirror line as a dashed gray reference, and you can verify that $g$ and $g^{-1}$ are mirror images of each other across it: pick any point on the blue curve, reflect it across $y = x$, and you will land on the amber curve.

The defining identity is the composition

$$g \\circ g^{-1}(x) = x \\quad \\text{and} \\quad g^{-1} \\circ g(x) = x$$

on whichever domains both sides are defined.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `The Horizontal Line Test and Restricted Branches`,
      content: `Not every function has a single-valued inverse. A function $f$ is invertible only when no horizontal line crosses its graph more than once — the **horizontal line test**. If a horizontal line hits $f$ twice, two different inputs produce the same output, and the inverse would have to map one input to two outputs, which is not allowed for a function.

Functions that fail the test can still be inverted on a restricted subdomain where they are strictly monotonic:

• **Quadratic** $x^2$ restricted to $[0, \\infty) \\to$ inverse is $\\sqrt{x}$
• **Absolute value** $|x|$ restricted to $[0, \\infty) \\to$ inverse is the identity on $[0, \\infty)$
• **Sine** restricted to $[-\\pi/2, \\pi/2] \\to$ inverse is $\\arcsin(x)$, defined on $[-1, 1]$
• **Cosine** restricted to $[0, \\pi] \\to$ inverse is $\\arccos(x)$, defined on $[-1, 1]$

These are called **principal branches**. The visualizer shows the discarded portion as a faded curve and the kept portion as a bold curve, making the cut explicit and visible. When you transform a restricted function, the restriction boundary moves along with it.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `How Transformations of $f$ Become Transformations of $f^{-1}$`,
      content: `Solving $y = a \\cdot f(b(x - h)) + k$ for $x$ gives the inverse explicitly:

$$g^{-1}(x) = h + \\frac{1}{b} \\cdot f^{-1}\\!\\left(\\frac{x - k}{a}\\right)$$

Reading the formula, each transformation on $f$ has a **mirrored** counterpart on $f^{-1}$ — when you swap axes (which is what reflecting across $y = x$ does), vertical operations become horizontal and vice versa:

• Vertical scale $a$ on $f$ becomes horizontal scale $1/a$ on $f^{-1}$
• Vertical shift $k$ on $f$ becomes horizontal shift $k$ on $f^{-1}$
• Horizontal scale $b$ on $f$ becomes vertical scale $1/b$ on $f^{-1}$
• Horizontal shift $h$ on $f$ becomes vertical shift $h$ on $f^{-1}$

This is the same as the geometric fact that reflecting across $y = x$ swaps horizontal and vertical directions. The visualizer's Parameters tab describes the active correspondences in plain English as you move the sliders, and the equation badges in the plot header show the consequence symbolically.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Functions Families Gallery** — companion gallery showing the same base functions used here, useful as a prerequisite for understanding what each family looks like before studying its inverse.

**Function Transformations** — visualizer for the four affine transformations alone, without the inverse overlay. Helpful for building intuition before adding the inverse layer here.

**Composition of Functions** — the operation behind the inverse identity $g \\circ g^{-1} = \\text{id}$. Inverses are defined precisely as compositional partners.

**One-to-One Functions** — the formal property a function must have to be invertible. Equivalent to passing the horizontal line test.

**Inverse Trigonometric Functions** — focused treatment of $\\arcsin$, $\\arccos$, $\\arctan$, and the standard principal-branch conventions used here.

**Logarithm and Exponential** — paired study of the canonical example of inverse functions, with $\\ln$ and $e^x$ as exact inverses.

**Derivative of an Inverse Function** — the rule $\\left(f^{-1}\\right)'(x) = 1 / f'(f^{-1}(x))$; a calculus follow-up to the geometric reflection studied here.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Functions That Are Their Own Inverse`,
      content: `Two picker families answer the inversion question with "already done": the [identity](!#the-identity-and-its-inverse) and the [reciprocal](!#the-reciprocal-and-its-inverse) are **self-inverse** — applying them twice returns the input, so $f^{-1} = f$.

Geometrically, self-inverse means the graph is its own mirror image across $y = x$. The identity lies **on** the mirror; the reciprocal straddles it symmetrically. In the plots for both, the amber inverse curve lands exactly on the blue one — the visualizer dashes the amber so the coincidence stays visible.`,
      before: ``, after: ``, link: '',
    },
    obj12: {
      title: `The Identity and Its Inverse`,
      content: `The identity $f(x) = x$ is the fixed point of inversion itself: its graph is the mirror line, so reflecting changes nothing at all.`,
      before: ``,
      after: `Blue curve, amber inverse, and gray mirror all coincide in one line — the degenerate case that makes the reflection rule legible everywhere else. Undoing "do nothing" is doing nothing.

Every [self-inverse function](!#functions-that-are-their-own-inverse) has a graph symmetric across this line; the identity is simply the extreme case where the graph and the line are the same object.`,
      link: '',
    },
    obj13: {
      title: `The Scaled Linear Function and Its Inverse`,
      content: `Doubling is undone by halving: $f(x) = 2x$ has the inverse $f^{-1}(x) = x/2$, the cleanest nontrivial inverse pair in the picker.`,
      before: ``,
      after: `The two lines reflect across the mirror with slopes $2$ and $\\tfrac{1}{2}$ — reciprocal slopes, which is the general rule for linear inverses: reflection across $y = x$ swaps rise with run.

Every nonzero linear function is invertible with no restriction: one-to-one is automatic when a graph climbs (or falls) steadily. The lesson generalizes as monotonicity — the property the [horizontal line test](!#the-horizontal-line-test-and-restricted-branches) checks for.`,
      link: '',
    },
    obj14: {
      title: `The Cubic and the Cube Root`,
      content: `Cubing is fully undone by the cube root: both functions are defined on all of $\\mathbb{R}$, so this pair needs no restriction anywhere.`,
      before: ``,
      after: `The cubic passes the horizontal line test despite its flat spot at the origin — it never actually turns around, so every output is hit exactly once. That is why $\\sqrt[3]{x}$, unlike $\\sqrt{x}$, accepts negative inputs without complaint.

Compare the [quadratic](!#the-quadratic-and-the-square-root), one degree lower: the even power folds, fails the test, and pays with a restricted branch. Odd degree grants full invertibility; even degree costs half the domain.`,
      link: '',
    },
    obj15: {
      title: `The Reciprocal and Its Inverse`,
      content: `The reciprocal undoes itself: if $y = 1/x$, then $x = 1/y$ — the same formula read backwards, making $1/x$ the picker's second [self-inverse](!#functions-that-are-their-own-inverse) function.`,
      before: ``,
      after: `Both hyperbola branches are symmetric across the mirror line, each mapping onto itself under reflection. The dashed amber curve traces the blue one exactly.

Self-inversion here has an arithmetic reading: flipping a fraction twice restores it. The excluded point at $x = 0$ survives inversion — the inverse (being the same function) excludes it too, in both domain and range.`,
      link: '',
    },
    obj16: {
      title: `The Exponential and the Logarithm`,
      content: `The exponential's inverse is the natural logarithm: $e^x$ and $\\ln(x)$ reflect into each other across $y = x$ with no restriction needed — the exponential is strictly increasing everywhere.`,
      before: ``,
      after: `The reflection swaps their asymptotes along with everything else: the exponential's horizontal floor at $y = 0$ becomes the logarithm's vertical wall at $x = 0$; domain $\\mathbb{R}$ and range $(0, \\infty)$ trade places exactly.

This is the pair to study for the domain-range swap rule: whatever holds for $f$ on one axis holds for $f^{-1}$ on the other. The [logarithmic entry](!#the-logarithm-and-the-exponential) shows the same picture from the other side.`,
      link: '',
    },
    obj17: {
      title: `The Logarithm and the Exponential`,
      content: `Choosing the logarithm as the base function shows the same inverse pair from the other direction: now $\\ln(x)$ is blue and $e^x$ is amber.`,
      before: ``,
      after: `Nothing mathematical changes — inversion is symmetric, $(f^{-1})^{-1} = f$ — but the visual swap is worth one deliberate look: the blue curve now owns the vertical asymptote and the restricted domain, the amber one the horizontal floor.

That interchangeability is the point: an inverse pair is one relationship viewed from two ends, not two separate facts. The [exponential entry](!#the-exponential-and-the-logarithm) is this section's mirror twin, in every sense.`,
      link: '',
    },
    obj18: {
      title: `The Quadratic and the Square Root`,
      content: `The parabola fails the horizontal line test — every positive output comes from two inputs — so inverting it requires surgery: keep only the branch $x \\geq 0$, shown bold over the faded full curve.`,
      before: ``,
      after: `The kept right half is one-to-one, and its reflection is exactly $\\sqrt{x}$ — the amber curve. The discarded left half is why $\\sqrt{x}$ returns only the non-negative root: the branch choice made here **is** the definition of the square root function.

Choosing the other branch ($x \\leq 0$) would have produced $-\\sqrt{x}$ instead. Branch choice is a genuine convention, standardized so that everyone's square root agrees.

This is the template for every restricted family: fold detected by the [horizontal line test](!#the-horizontal-line-test-and-restricted-branches), branch kept, reflection taken.`,
      link: '',
    },
    obj19: {
      title: `The Square Root and Its Inverse`,
      content: `Starting from $\\sqrt{x}$ and inverting lands back on the parabola — but only its right half: $f^{-1}(x) = x^2$ restricted to $x \\geq 0$.`,
      before: ``,
      after: `The restriction is inherited, not imposed: the square root's range is $[0, \\infty)$, so its inverse's domain can be no larger. Inverting never recovers what a restriction already discarded — the left half of the parabola is gone for good.

Together with the [quadratic entry](!#the-quadratic-and-the-square-root), this pair shows both directions of the same relationship, and why $(\\sqrt{x})^2 = x$ holds on $x \\geq 0$ while $\\sqrt{x^2} = |x|$ does not reduce to $x$ — the asymmetry the composition tool demonstrates as its star example.`,
      link: '',
    },
    obj20: {
      title: `The Absolute Value and Its Inverse`,
      content: `The V fails the horizontal line test as badly as a function can — every positive output has exactly two preimages — so only the branch $x \\geq 0$ survives, where $|x|$ is simply $x$.`,
      before: ``,
      after: `The kept branch coincides with the identity on the half-line, so its inverse does too: blue branch, amber inverse, and mirror line all overlap for $x \\geq 0$. The faded left arm is the discarded half.

The absolute value makes the restriction lesson stark: what remains after cutting to a branch can be almost trivial. The interesting content was in the fold itself — and the fold is exactly what one-to-one functions are forbidden to have.`,
      link: '',
    },
    obj21: {
      title: `Sine and the Arcsine`,
      content: `A periodic wave hits every output infinitely often — the worst possible horizontal line test failure — so sine is restricted to one increasing sweep, $[-\\pi/2, \\pi/2]$, before inverting.`,
      before: ``,
      after: `That single bold arch, rising from $-1$ to $1$, reflects into $\\arcsin(x)$: a curve living on the domain $[-1, 1]$ (sine's range, swapped into position) and producing angles in $[-\\pi/2, \\pi/2]$ — the **principal values**.

Every other period of the faded wave could have been chosen; the standardized branch is the one crossing the origin. Calculators answer $\\arcsin(0.5) = 30°$ rather than $150°$ because of exactly this convention.

[Cosine's branch](!#cosine-and-the-arccosine) solves the same problem with a different cut — comparing the two shows how branch choice adapts to each function's shape.`,
      link: '',
    },
    obj22: {
      title: `Cosine and the Arccosine`,
      content: `Cosine's restriction cannot copy sine's: on $[-\\pi/2, \\pi/2]$ cosine rises and falls, failing the test inside the window. The invertible sweep is $[0, \\pi]$ instead — one full descent from $1$ to $-1$.`,
      before: ``,
      after: `Reflecting that falling branch produces $\\arccos(x)$: defined on $[-1, 1]$, returning angles in $[0, \\pi]$, and **decreasing** — the visible signature that distinguishes it from arcsine at a glance.

The two arc functions are tied by $\\arccos(x) = \\pi/2 - \\arcsin(x)$: complementary branches of complementary functions.

Together with [sine](!#sine-and-the-arcsine), this closes the picker's tour of restriction strategies: same disease (periodicity), same cure (one monotone sweep), different incision points.`,
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
      question: "What does the Inverse Function Visualizer show?",
      answer: "It plots a function alongside its inverse, reflected across the line y = x. Pick a base function from eleven families, transform it with vertical scale, vertical shift, horizontal scale, and horizontal shift sliders, and the inverse is re-derived symbolically in real time. For functions that need a domain restriction to be invertible — quadratic, absolute value, sine, cosine — the visualizer shows the discarded portion as a faded curve and the kept invertible branch in bold."
    },
    obj2: {
      question: "What is the relationship between a function and its inverse on a graph?",
      answer: "The inverse f-inverse is the reflection of f across the line y = x. Every point (a, b) on f becomes (b, a) on f-inverse, with x and y coordinates swapped. The visualizer always draws y = x as a dashed gray mirror line so you can verify the symmetry by eye."
    },
    obj3: {
      question: "Why do some functions need a domain restriction?",
      answer: "A function has a single-valued inverse only if it passes the horizontal line test — no horizontal line crosses its graph more than once. Quadratic, absolute value, sine, and cosine all fail this test in their natural domain. Restricting them to a domain where they are strictly monotonic — for instance the right half of the parabola or the principal branch of sine — recovers invertibility."
    },
    obj4: {
      question: "What happens to the four transformation parameters under inversion?",
      answer: "Reflecting across y = x swaps horizontal and vertical directions, so vertical operations on f become horizontal operations on f-inverse and vice versa. Specifically, vertical scale a on f becomes horizontal scale 1/a on f-inverse, vertical shift k becomes horizontal shift k, horizontal scale b becomes vertical scale 1/b, and horizontal shift h becomes vertical shift h."
    },
    obj5: {
      question: "What is a self-inverse function?",
      answer: "A self-inverse function is its own inverse: f(f(x)) = x. The identity function f(x) = x and the reciprocal f(x) = 1/x are the standard examples shown in the visualizer. When such a function is at default parameters, the blue f curve and the amber f-inverse curve coincide exactly on top of each other. Applying any non-trivial transformation generally breaks the self-inverse property."
    },
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Inverse Function Visualizer",
      "description": "Interactive inverse function visualizer. Pick a base function, transform it, and watch the inverse re-derived live as a reflection across y = x.",
      "url": "https://www.learnmathclass.com/functions/visual-tools/inverse-function",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Eleven base function families including polynomials, exponential, logarithmic, square root, absolute value, and trigonometric",
        "Transformation sliders for vertical scale, vertical shift, horizontal scale, and horizontal shift",
        "Inverse equation re-derived symbolically in real time as parameters change",
        "Dashed y = x mirror line drawn behind every plot for direct visualization of the reflection",
        "Restricted families show both faded full curve and bold invertible branch",
        "Domain restricted and self-inverse badges flag the current state",
        "Side info panel with state explanation, parameter mapping table, and general inverse function theory"
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
          "name": "Inverse Function Visualizer",
          "item": "https://www.learnmathclass.com/functions/visual-tools/inverse-function"
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
  // pair view + attached picture-reading panel, no link (own page).
  const stateUnits = {
    identity: demoUnitFrame({ svg: inverseDiagrams.identity, caption: 'f(x) = x, frozen',
      text: 'Curve, inverse, and mirror in one line: the identity is the fixed point of reflection itself.' }),
    linearScale: demoUnitFrame({ svg: inverseDiagrams.linearScale, caption: '2x and x/2, frozen',
      text: 'Two lines with reciprocal slopes, reflecting into each other across the dashed mirror.' }),
    cubic: demoUnitFrame({ svg: inverseDiagrams.cubic, caption: 'x&#179; and &#8731;x, frozen',
      text: 'A full inverse pair with no restriction anywhere: the cubic never turns around, so the cube root accepts every real input.' }),
    reciprocal: demoUnitFrame({ svg: inverseDiagrams.reciprocal, caption: '1/x, self-inverse, frozen',
      text: 'The dashed amber curve retraces the blue hyperbola exactly: flipping a fraction twice restores it.' }),
    exponential: demoUnitFrame({ svg: inverseDiagrams.exponential, caption: 'e&#739; and ln(x), frozen',
      text: 'The reflection swaps the asymptotes: horizontal floor becomes vertical wall, domain and range trade axes.' }),
    logarithmic: demoUnitFrame({ svg: inverseDiagrams.logarithmic, caption: 'ln(x) and e&#739;, frozen',
      text: 'The same pair viewed from the other end &#8212; now the blue curve owns the wall and the amber one the floor.' }),
    quadratic: demoUnitFrame({ svg: inverseDiagrams.quadratic, caption: 'x&#178; restricted, and &#8730;x, frozen',
      text: 'The faded left arm is the price of invertibility: only the bold right branch reflects into the square root.' }),
    sqrt: demoUnitFrame({ svg: inverseDiagrams.sqrt, caption: '&#8730;x and its inverse, frozen',
      text: 'Inverting the root lands on the parabola&#8217;s right half only &#8212; the restriction is inherited from the root&#8217;s range.' }),
    absolute: demoUnitFrame({ svg: inverseDiagrams.absolute, caption: '|x| restricted, frozen',
      text: 'The kept branch of the V is just y = x, so branch, inverse, and mirror coincide; the faded arm is the discarded half.' }),
    sine: demoUnitFrame({ svg: inverseDiagrams.sine, caption: 'sin(x) on [&#8722;&#960;/2, &#960;/2], and arcsin, frozen',
      text: 'One bold rising arch of the faded wave reflects into arcsine: domain [&#8722;1, 1], principal values on the y-axis.' }),
    cosine: demoUnitFrame({ svg: inverseDiagrams.cosine, caption: 'cos(x) on [0, &#960;], and arccos, frozen',
      text: 'Cosine&#8217;s cut is one falling sweep, so arccosine falls too &#8212; from &#960; down to 0 across its [&#8722;1, 1] domain.' }),
  };

  // Canonical per-family explanations for the info panel's Family tab
  // (SSR/SEO-visible; the component has no built-in per-family texts).
  const explanations = {
    identity:
      '**Identity** $f(x) = x$ — self-inverse: its graph **is** the mirror line, so reflection changes nothing.\n\n' +
      '[Learn more about the identity](!#the-identity-and-its-inverse) · [Self-inverse functions](!#functions-that-are-their-own-inverse)',
    linearScale:
      '**Linear** $f(x) = 2x$, $f^{-1}(x) = x/2$ — reciprocal slopes: reflection across $y = x$ swaps rise with run.\n\n' +
      '[Learn more about the linear pair](!#the-scaled-linear-function-and-its-inverse)',
    cubic:
      '**Cubic** $x^3$, inverse $\\sqrt[3]{x}$ — odd degree passes the horizontal line test everywhere: no restriction, full-line inverse.\n\n' +
      '[Learn more about the cubic pair](!#the-cubic-and-the-cube-root)',
    reciprocal:
      '**Reciprocal** $1/x$ — self-inverse: flipping a fraction twice restores it, and each hyperbola branch mirrors onto itself.\n\n' +
      '[Learn more about the reciprocal](!#the-reciprocal-and-its-inverse) · [Self-inverse functions](!#functions-that-are-their-own-inverse)',
    exponential:
      '**Exponential** $e^x$, inverse $\\ln(x)$ — the reflection swaps asymptotes and trades domain $\\mathbb{R}$ for range $(0, \\infty)$.\n\n' +
      '[Learn more about this pair](!#the-exponential-and-the-logarithm)',
    logarithmic:
      '**Logarithm** $\\ln(x)$, inverse $e^x$ — the same pair from the other end: $(f^{-1})^{-1} = f$.\n\n' +
      '[Learn more about this pair](!#the-logarithm-and-the-exponential)',
    quadratic:
      '**Quadratic** $x^2$ restricted to $x \\geq 0$ — the branch choice that **defines** the square root; the discarded arm is why $\\sqrt{x}$ is never negative.\n\n' +
      '[Learn more about the quadratic pair](!#the-quadratic-and-the-square-root) · [Restricted branches](!#the-horizontal-line-test-and-restricted-branches)',
    sqrt:
      '**Square root** $\\sqrt{x}$, inverse $x^2$ on $x \\geq 0$ — the restriction is inherited: inversion cannot recover what a branch cut discarded.\n\n' +
      '[Learn more about the square root pair](!#the-square-root-and-its-inverse)',
    absolute:
      '**Absolute value** $|x|$ restricted to $x \\geq 0$ — the kept branch is the identity on a half-line; the fold was the whole obstruction.\n\n' +
      '[Learn more about the absolute value](!#the-absolute-value-and-its-inverse) · [Restricted branches](!#the-horizontal-line-test-and-restricted-branches)',
    sine:
      '**Sine** on $[-\\pi/2, \\pi/2]$, inverse $\\arcsin(x)$ — one monotone sweep of the wave, reflected into the principal-value branch.\n\n' +
      '[Learn more about sine and arcsine](!#sine-and-the-arcsine) · [Restricted branches](!#the-horizontal-line-test-and-restricted-branches)',
    cosine:
      '**Cosine** on $[0, \\pi]$, inverse $\\arccos(x)$ — a falling branch, so arccosine falls too; tied to arcsine by $\\arccos(x) = \\pi/2 - \\arcsin(x)$.\n\n' +
      '[Learn more about cosine and arccosine](!#cosine-and-the-arccosine) · [Restricted branches](!#the-horizontal-line-test-and-restricted-branches)',
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
        title: "Inverse Function Visualizer | Reflect Across y = x",
        description: "Visualize any function and its inverse as reflections across y = x. Transform the base function and watch the inverse re-derived live, with restricted branches highlighted.",
        keywords: keyWords.join(", "),
        url: "/functions/visual-tools/inverse-function",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="64" x2="72" y2="64" stroke="#B5D4F4" stroke-width="0.9"/><line x1="16" y1="8" x2="16" y2="70" stroke="#B5D4F4" stroke-width="0.9"/><line x1="16" y1="64" x2="68" y2="12" stroke="#B5D4F4" stroke-width="1.2" stroke-dasharray="3,2.5"/><path d="M 18 60 C 30 58, 40 50, 52 26 C 56 18, 58 14, 60 12" fill="none" stroke="#FAC775" stroke-width="1.9"/><path d="M 20 62 C 22 50, 30 40, 54 28 C 62 24, 66 22, 68 20" fill="none" stroke="#97C459" stroke-width="1.9"/><text x="56" y="52" font-family="Georgia,serif" font-size="6.5" fill="#B5D4F4" text-anchor="middle" font-style="italic">y = x</text><text x="53" y="16" font-family="Georgia,serif" font-size="7.5" fill="#FAC775" text-anchor="middle" font-style="italic">f</text><text x="68" y="31" font-family="Georgia,serif" font-size="7" fill="#C0DD97" text-anchor="middle" font-style="italic">f&#8315;&#185;</text></svg>`,
        name: "Inverse Function Visualizer",
        hubDescription: "Plot any function alongside its inverse as a reflection across the line y = x. Pick a base function — linear, cubic, reciprocal, exponential, logarithmic, square root, quadratic, absolute, sine, or cosine — apply affine transformations, and watch the inverse re-derived symbolically in real time. For functions that need a domain restriction to be invertible, the discarded portion appears faded and the principal branch in bold.",
        category: "",
        subCategory: ""
      },
    }
  }
}


export default function InverseFunctionVisualizerPage({seoData, sectionsContent, introContent, faqQuestions, schemas, explanations, stateUnits}) {

  const unit = (key) => <div key={'u-' + key} dangerouslySetInnerHTML={{ __html: stateUnits[key] }} />;

  const genericSections = [
    { id:'getting-started-with-the-visualizer',               title:sectionsContent.obj1.title,  link:sectionsContent.obj1.link,  content:[sectionsContent.obj1.content] },
    { id:'picking-a-base-function',                           title:sectionsContent.obj2.title,  link:sectionsContent.obj2.link,  content:[sectionsContent.obj2.content] },
    { id:'transforming-the-function',                         title:sectionsContent.obj3.title,  link:sectionsContent.obj3.link,  content:[sectionsContent.obj3.content] },
    { id:'reading-the-plot',                                  title:sectionsContent.obj4.title,  link:sectionsContent.obj4.link,  content:[sectionsContent.obj4.content] },
    { id:'the-applied-chip-strip-and-show-toggles',           title:sectionsContent.obj5.title,  link:sectionsContent.obj5.link,  content:[sectionsContent.obj5.content] },
    { id:'the-info-panel-three-tabs',                         title:sectionsContent.obj6.title,  link:sectionsContent.obj6.link,  content:[sectionsContent.obj6.content] },
    { id:'what-is-an-inverse-function',                       title:sectionsContent.obj7.title,  link:sectionsContent.obj7.link,  content:[sectionsContent.obj7.content] },
    { id:'the-horizontal-line-test-and-restricted-branches',  title:sectionsContent.obj8.title,  link:sectionsContent.obj8.link,  content:[sectionsContent.obj8.content] },
    { id:'how-transformations-of-f-become-transformations-of-f-1', title:sectionsContent.obj9.title, link:sectionsContent.obj9.link, content:[sectionsContent.obj9.content] },
    { id:'functions-that-are-their-own-inverse',              title:sectionsContent.obj11.title, link:sectionsContent.obj11.link, content:[sectionsContent.obj11.content] },
    { id:'the-identity-and-its-inverse',                      title:sectionsContent.obj12.title, link:sectionsContent.obj12.link, content:[sectionsContent.obj12.content, unit('identity'), sectionsContent.obj12.after] },
    { id:'the-scaled-linear-function-and-its-inverse',        title:sectionsContent.obj13.title, link:sectionsContent.obj13.link, content:[sectionsContent.obj13.content, unit('linearScale'), sectionsContent.obj13.after] },
    { id:'the-cubic-and-the-cube-root',                       title:sectionsContent.obj14.title, link:sectionsContent.obj14.link, content:[sectionsContent.obj14.content, unit('cubic'), sectionsContent.obj14.after] },
    { id:'the-reciprocal-and-its-inverse',                    title:sectionsContent.obj15.title, link:sectionsContent.obj15.link, content:[sectionsContent.obj15.content, unit('reciprocal'), sectionsContent.obj15.after] },
    { id:'the-exponential-and-the-logarithm',                 title:sectionsContent.obj16.title, link:sectionsContent.obj16.link, content:[sectionsContent.obj16.content, unit('exponential'), sectionsContent.obj16.after] },
    { id:'the-logarithm-and-the-exponential',                 title:sectionsContent.obj17.title, link:sectionsContent.obj17.link, content:[sectionsContent.obj17.content, unit('logarithmic'), sectionsContent.obj17.after] },
    { id:'the-quadratic-and-the-square-root',                 title:sectionsContent.obj18.title, link:sectionsContent.obj18.link, content:[sectionsContent.obj18.content, unit('quadratic'), sectionsContent.obj18.after] },
    { id:'the-square-root-and-its-inverse',                   title:sectionsContent.obj19.title, link:sectionsContent.obj19.link, content:[sectionsContent.obj19.content, unit('sqrt'), sectionsContent.obj19.after] },
    { id:'the-absolute-value-and-its-inverse',                title:sectionsContent.obj20.title, link:sectionsContent.obj20.link, content:[sectionsContent.obj20.content, unit('absolute'), sectionsContent.obj20.after] },
    { id:'sine-and-the-arcsine',                              title:sectionsContent.obj21.title, link:sectionsContent.obj21.link, content:[sectionsContent.obj21.content, unit('sine'), sectionsContent.obj21.after] },
    { id:'cosine-and-the-arccosine',                          title:sectionsContent.obj22.title, link:sectionsContent.obj22.link, content:[sectionsContent.obj22.content, unit('cosine'), sectionsContent.obj22.after] },
    { id:'related-concepts-and-tools',                        title:sectionsContent.obj10.title, link:sectionsContent.obj10.link, content:[sectionsContent.obj10.content] },
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Inverse Functions Visualizer/Explorer</h1>
      <br/>
      <FunctionInverse explanations={explanations}/>
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