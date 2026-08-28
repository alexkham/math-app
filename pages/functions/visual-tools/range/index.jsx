

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
import FunctionRange from '../../../../app/components/functions/range/FunctionRange'
import rangeDiagrams from '../../../../app/components/functions/range/functionRangeDiagrams'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'


export async function getStaticProps(){

  const keyWords = [
    'range of function',
    'function range visualizer',
    'find range of function',
    'range calculator',
    'function output values',
    'range of f(x)',
    'range of quadratic',
    'range of exponential',
    'range of trigonometric functions',
    'bounded function range',
    'range vs domain',
    'range interval notation',
    'achievable outputs function',
    'y-axis range visualizer',
    'open closed endpoints range',
  ]

  const sectionsContent = {

    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Open the page and three panels appear. On the left is the **function picker** with eleven base functions grouped by the shape of their range — all real numbers, bounded below, bounded between $-1$ and $1$, or all reals with one excluded value. In the center is the **plot panel** with the function $g(x)$ in blue and a colored band drawn directly **on the y-axis** showing the range. On the right is the **info panel** with two tabs.

Below the plot sits the **range card** — a colored block displaying the range in interval notation, the same range drawn on a horizontal 1D number line, and a draggable **test point slider** that lets you check whether a specific y-value is achievable as an output of $g$.

The page launches with the quadratic family. Its range is $y \\geq 0$ — the parabola never produces negative values. The y-axis band starts at $y = 0$ and extends upward; the test point at $y = 1$ shows a green "achievable" badge.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Picking a Function`,
      content: `The picker groups eleven base functions by the **shape of their range** rather than by algebraic type — a deliberate choice that makes the visualizer act as a reference for range classification:

• [Unrestricted](!#ranges-covering-all-of-the-reals) ($\\mathbb{R}$) — [Identity](!#the-identity-function), [Linear (2x)](!#the-scaled-linear-function), [Cubic](!#the-cubic-function), [Logarithmic](!#the-logarithmic-function). All reach every real number as an output.
• [Bounded below](!#ranges-bounded-below) — [Quadratic](!#the-quadratic-function), [Absolute](!#the-absolute-value-function), [Square root](!#the-square-root-function) (range $[0, \\infty)$), [Exponential](!#the-exponential-function) (range $(0, \\infty)$). Their outputs have a floor.
• [Bounded](!#ranges-bounded-on-both-sides) $[-1, 1]$ — [Sine](!#the-sine-function), [Cosine](!#the-cosine-function). Periodic functions with a hard ceiling and floor.
• **Excluded point** — [Reciprocal](!#the-reciprocal-and-its-missing-output). Reaches every real number except $0$ — its horizontal asymptote.

Notice that logarithmic appears here under "Unrestricted" even though its **domain** is restricted to positive numbers. Domain and range are independent: a function can have a restricted domain and still produce every real number as output.

Click any entry to switch. Transformation parameters reset to defaults on every switch.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Why Only $a$ and $k$ Change the Range`,
      content: `Below the family list, four sliders apply the standard affine transformations:

• $a$ — **vertical scale**. Multiplies every output by $a$.
• $k$ — **vertical shift**. Adds $k$ to every output.
• $b$ — **horizontal scale**. Multiplies the input by $b$.
• $h$ — **horizontal shift**. Subtracts $h$ from the input.

A small "**affects range**" badge appears on the labels for $a$ and $k$ but not on $b$ or $h$. The reason is structural. The transformed function is $g(x) = a \\cdot f(b(x - h)) + k$. Reading right to left along the formula: $b$ and $h$ act on the input **before** $f$ runs, so they change **which** x produces each output — but the set of outputs $f$ can produce stays the same. Then $a$ scales those outputs and $k$ shifts them.

Drag $b$ or $h$ as wildly as you want — the y-axis band does not move. Drag $a$ or $k$ and the band immediately rescales and shifts. The visualizer makes this asymmetry visible in real time.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Reading the Y-Axis Highlight and Range Bar`,
      content: `The range is shown in two coordinated places:

• **On the y-axis of the main plot** — a colored band traces the interval of achievable outputs directly on the axis, in the same coordinate system as the function. You can see which heights the blue curve actually reaches and which it skips. Open and closed endpoints render as hollow and filled circles, respectively; infinite extents render as arrows.

• **On a horizontal number line below the plot** — the same range interval is drawn flat, like a one-dimensional version of the y-axis. This rotates the y-axis 90 degrees so it sits in the more familiar number-line orientation and gives it more room for tick marks and labels.

The two views always agree. The number-line version is easier to read at a glance and easier to compare across screenshots; the y-axis version makes the geometric relationship between the function and its range unmistakable.

For excluded ranges like the reciprocal, both views mark the excluded value with a red ×, showing the hole in the range visually.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Probing with the Test Point Slider`,
      content: `Inside the range card sits a **test point slider** labeled "x = ..." (despite the label, it represents a y-value being tested as a potential output). Drag it from $-10$ to $+10$ along the range bar. As you move:

• The slider's thumb on the number line jumps to that position, with a vertical marker and a filled circle.
• A horizontal dashed reference line appears in the main plot at the corresponding $y$ value, drawn in the highlight color when the value is achievable and in red when it is not.
• Below the slider, an "**achievable**" or "**not achievable**" badge updates with the result: green for in-range, red for out-of-range.

The achievability check answers the question that defines the range itself: *does there exist any input $x$ such that $g(x)$ equals this $y$?* When the test point sits inside the colored band, the answer is yes — and the dashed line will cross the curve somewhere. Drag it outside the band, and the dashed line never touches the curve.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `The Range Card and Applied Chips`,
      content: `At the top of the range card, the **range in interval notation** is displayed as a monospace string — e.g., $y \\geq 0$, $-1 \\leq y \\leq 1$, $y \\neq 0$. This is the same string you would write on a homework assignment.

Below the plot, an **Applied** strip shows the four transformation parameter chips with their current values. The four chips are deliberately dimmed compared to other visualizers in the series; a separator and an "**a, k affect range**" callout to the right reinforce which parameters actually matter for this tool's question. Even though $b$ and $h$ are shown, they are visually de-emphasized — a visual reminder that they could be at any value and the range would still be the same.

The card's border color, header text, and accent badges all derive from the chosen highlight color, so the entire range UI reads as one coordinated block.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Customizing the Highlight Color`,
      content: `Under the family picker and parameter sliders, an **Appearance** section contains a single color swatch labeled "Range color". Click it to open a native color picker and choose any color you want for the range highlight, the range card chrome, the number-line band, and the dashed reference line.

The color cascades through several visual elements simultaneously:

• Y-axis highlight band in the plot
• Number-line fill below the plot
• Dashed horizontal reference line when the test point is achievable
• Range card border, header text, and "achievable" badge
• "Affects range" badges on the relevant parameter sliders

Changing the color is useful for matching the visualizer to a presentation slide deck or a printed worksheet, or simply for personal preference. The Reset button next to the section header returns the color to the default blue.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Is the Range of a Function?`,
      content: `The **range** of a function is the set of all outputs it can produce — equivalently, the image of the domain under the function. If $y$ is in the range, then there exists at least one $x$ such that $f(x) = y$. If $y$ is not in the range, no input produces it.

Different function families have qualitatively different ranges:

• $x^2$ — always non-negative; the range is $[0, \\infty)$
• $e^x$ — always strictly positive; the range is $(0, \\infty)$
• $\\sin(x)$ and $\\cos(x)$ — always between $-1$ and $1$ inclusive
• $1/x$ — reaches every real number except $0$
• $x^3$, $\\ln x$, identity — reach every real number

Range is independent of domain. A function can have a tiny domain and reach every real number, or have an enormous domain and stay confined to a small interval. The natural logarithm illustrates both points at once: domain restricted to $x > 0$, range equal to all of $\\mathbb{R}$.

The range together with the domain fully characterizes the input-output behavior of a function. Together they answer "what goes in" and "what can come out."`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Open vs Closed Endpoints and Excluded Values`,
      content: `Three subtle distinctions show up in the visualizer's range bar:

• **Closed endpoint (filled circle)** — the boundary value is **reached**. Square root has range $y \\geq 0$ with a closed endpoint at $0$, because $\\sqrt{0} = 0$ exactly. The range bar shows a filled dot.

• **Open endpoint (hollow circle)** — the boundary value is **approached** but never reached. Exponential has range $y > 0$ with an open endpoint at $0$, because $e^x$ gets arbitrarily close to $0$ as $x \\to -\\infty$ but never equals $0$. The range bar shows a hollow dot.

• **Excluded value (red ×)** — the function reaches every value except one. Reciprocal has range $y \\neq 0$ — every nonzero real number is hit somewhere on the curve, but $0$ is the horizontal asymptote, never touched. The range bar shows a full fill broken by a small red × at the excluded value.

The distinction between open and closed endpoints is genuinely important in calculus and analysis: it determines whether the function attains its extreme values, whether continuity holds at the boundary, and whether a maximum or minimum exists.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Domain of a Function** — the partner concept showing which inputs are allowed. Use the companion domain visualizer to see how domain transformations work and why $b$ and $h$ (not $a$ and $k$) affect it — the mirror image of the rule shown here.

**Functions** — general theory of functions, including formal definitions of domain, range, and image.

**Function Transformations** — visualizer for $a$, $k$, $b$, $h$ alone, useful for separating the effects of each parameter before bringing range analysis on top.

**Functions Families Gallery** — gallery of the same eleven base functions plotted side by side, useful as a prerequisite for understanding what each curve looks like.

**Inverse Functions** — visualizer for reflecting a function across $y = x$. The range of $f$ becomes the domain of $f^{-1}$ — a fundamental duality that the inverse and domain/range tools together make concrete.

**Bounded Functions** — functions whose range fits inside an interval; the trigonometric examples in this visualizer are the canonical examples.

**Asymptotes** — horizontal asymptotes are values the function approaches but never reaches, and they are exactly the open endpoints and excluded values of the range. The reciprocal's $y = 0$ asymptote is a worked example.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Ranges Covering All of the Reals`,
      content: `Four functions in the picker produce every real number as an output: the [identity](!#the-identity-function), the [scaled linear](!#the-scaled-linear-function), the [cubic](!#the-cubic-function), and — the surprise of the group — the [logarithm](!#the-logarithmic-function). Their range bar is one unbroken green band up the whole y-axis.

The logarithm's membership is the teaching moment: a function with a heavily **restricted domain** can still have a **complete range**. Domain and range restrictions are independent, and this group proves it in one glance.`,
      before: ``, after: ``, link: '',
    },
    obj12: {
      title: `The Identity Function`,
      content: `The identity outputs exactly what it receives, so its range is all of $\\mathbb{R}$ — every height on the y-axis gets hit exactly once.`,
      before: ``,
      after: `The green band runs the whole axis with nothing to mark. As with the domain tool, the identity is the control case: switch here and every red stripe vanishes.

One nuance worth a look: the identity hits each output exactly once. The [cubic](!#the-cubic-function) also covers everything, but with a different rhythm — the comparison shows that "range = ℝ" says nothing about **how often** each value is reached.`,
      link: '',
    },
    obj13: {
      title: `The Scaled Linear Function`,
      content: `Doubling still reaches every height: $f(x) = 2x$ has range $\\mathbb{R}$, just traversed twice as fast.`,
      before: ``,
      after: `Every nonzero linear function is onto the reals — steepness changes the pace, never the coverage. Only the degenerate $a = 0$ collapses the range to a single value, which you can watch happen by dragging the vertical-scale slider through zero.

That collapse is the range tool's most dramatic slider moment: an entire axis of outputs shrinking to one green dot at $y = k$.`,
      link: '',
    },
    obj14: {
      title: `The Cubic Function`,
      content: `Odd powers are onto: $x^3$ produces every real output, from arbitrarily negative to arbitrarily positive.`,
      before: ``,
      after: `The cubic pairs with the [quadratic](!#the-quadratic-function) as the parity lesson of this page: an odd power covers the whole y-axis, an even power only half of it. One sign change in the exponent, half the range gone.

Full range plus full domain also makes the cubic invertible everywhere — the cube root needs no restriction, unlike the square root story on the domain page.`,
      link: '',
    },
    obj15: {
      title: `The Logarithmic Function`,
      content: `The logarithm climbs without bound and dives without bound: its range is all of $\\mathbb{R}$, despite a domain of only half the line.`,
      before: ``,
      after: `Slow growth is still unbounded growth — $\\ln(x)$ eventually exceeds any height, and near zero it plunges below any depth. The green band covers the entire y-axis while the curve itself lives only on the right half-plane.

This is the mirror image of its inverse: the [exponential](!#the-exponential-function) has full domain and restricted range; the logarithm has restricted domain and full range. Inversion swaps the two restrictions — the cleanest statement of the domain-range duality this pair of tools is built around.`,
      link: '',
    },
    obj16: {
      title: `Ranges Bounded Below`,
      content: `Four functions never output anything below a floor: the [quadratic](!#the-quadratic-function), the [absolute value](!#the-absolute-value-function), and the [square root](!#the-square-root-function) all bottom out at $0$ and include it — while the [exponential](!#the-exponential-function) presses toward $0$ forever without ever reaching it.

Same floor, two different relationships with it: three closed dots and one open circle. Whether the boundary output is **attained** is exactly the open-versus-closed distinction, now on the y-axis.`,
      before: ``, after: ``, link: '',
    },
    obj17: {
      title: `The Quadratic Function`,
      content: `Squares are never negative: the parabola's outputs fill $[0, \\infty)$, with the floor value $0$ genuinely attained at the vertex.`,
      before: ``,
      after: `The filled green dot at $y = 0$ records the attainment: $f(0) = 0$ is a real output, produced by a real input. Everything below the floor is red — no input, however clever, squares to a negative.

Every output above the floor is hit **twice** ($x$ and $-x$), the vertex value once. That double-covering is why inverting the parabola requires choosing a branch.

Drag $a$ negative and the whole picture flips: range $(-\\infty, 0]$, the floor becoming a ceiling — the range rule $y = aL + k$ acting live.`,
      link: '',
    },
    obj18: {
      title: `The Absolute Value Function`,
      content: `The V outputs distances, and distances start at zero: range $[0, \\infty)$, floor attained at the corner.`,
      before: ``,
      after: `Identical range to the [quadratic](!#the-quadratic-function) — same closed floor, same double-covering of positive outputs — from a completely different shape. Range, like domain, is a coarse fingerprint: it cannot tell the parabola from the V.

What distinguishes them is **how** the floor is touched: the parabola kisses it smoothly, the V hits it at a corner. The range bar sees only the same green dot.`,
      link: '',
    },
    obj19: {
      title: `The Square Root Function`,
      content: `The square root returns the non-negative root only: range $[0, \\infty)$, starting from the attained output $\\sqrt{0} = 0$.`,
      before: ``,
      after: `Here range and domain have the same shape — $[0, \\infty)$ both ways — a coincidence peculiar to this function among the picker's eleven. The curve starts at the origin and covers each output exactly once, making it invertible without any branch-picking.

The single-covering is the point of contrast with its siblings in the bounded-below group: same green half-axis, but reached once per value rather than twice.`,
      link: '',
    },
    obj20: {
      title: `The Exponential Function`,
      content: `The exponential outputs only positive values — and the boundary $0$ is approached forever but never produced: range $(0, \\infty)$, **open** at the floor.`,
      before: ``,
      after: `The open circle at $y = 0$ is the range-side signature of a horizontal asymptote: the curve flattens toward the floor as $x \\to -\\infty$, yet $e^x = 0$ has no solution. An asymptote is precisely an output the function approaches but never attains.

Compare the [quadratic's](!#the-quadratic-function) filled dot: same-looking floor, opposite answer to "is the floor a real output?" — the whole open/closed lesson in two markers.

Shift $k$ upward and the excluded floor rides with it: range $(k, \\infty)$, the asymptote always exactly at the open circle.`,
      link: '',
    },
    obj21: {
      title: `Ranges Bounded on Both Sides`,
      content: `[Sine](!#the-sine-function) and [cosine](!#the-cosine-function) are the picker's only two-sided prisoners: every output lands in $[-1, 1]$, with both walls included. Green band from $-1$ to $1$, closed dots at both ends, red everywhere else.

A bounded range is what makes amplitude a meaningful idea — and it is why these two functions model oscillation: outputs that can neither escape upward nor downward have nowhere to go but back and forth.`,
      before: ``, after: ``, link: '',
    },
    obj22: {
      title: `The Sine Function`,
      content: `Sine's outputs sweep $[-1, 1]$ and touch both walls: $\\sin(\\pi/2) = 1$ and $\\sin(-\\pi/2) = -1$ are attained exactly, infinitely often.`,
      before: ``,
      after: `Both endpoint dots are filled — the extremes are genuine outputs, hit once per period — and every interior value is hit twice per period. Nothing outside the band is ever produced, however far $x$ travels.

Under the transformation $a \\sin(x) + k$ the band becomes $[k - |a|, k + |a|]$: amplitude is nothing more than the half-width of the range. Watching the green band stretch as you drag $a$ is the best definition of amplitude the tool can offer.`,
      link: '',
    },
    obj23: {
      title: `The Cosine Function`,
      content: `Cosine shares sine's prison exactly: range $[-1, 1]$, both walls attained — only the **inputs** achieving each output differ.`,
      before: ``,
      after: `The range bar cannot distinguish [sine](!#the-sine-function) from cosine at all — identical green band, identical closed dots. The phase shift between them lives entirely on the x-axis, invisible to any output-side measurement.

That invisibility is the deeper point: range collapses a function to the **set** of its outputs, forgetting when and how often each occurs. Two functions can be output-identical yet nowhere equal.`,
      link: '',
    },
    obj24: {
      title: `The Reciprocal and Its Missing Output`,
      content: `The reciprocal produces every real output except one: $1/x = 0$ has no solution, so the range is $\\mathbb{R} \\setminus \\{0\\}$ — a green axis with a single puncture.`,
      before: ``,
      after: `The open circle at $y = 0$ is the output-side twin of the reciprocal's excluded input: this function misses exactly one value in each direction, and both misses trace back to the same fraction $1/x$ never being zero and never accepting zero.

The missing output is again a horizontal asymptote wearing range clothing: both branches flatten toward $y = 0$ without arriving, just like the [exponential's](!#the-exponential-function) floor — but here the asymptote is approached from **both** sides, puncturing the middle of the range rather than capping its end.

Shift $k$ and the puncture rides to $y = k$: every transformed reciprocal misses exactly one output, always at its horizontal asymptote.`,
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
      question: "What does the Range of a Function Visualizer do?",
      answer: "It draws the set of achievable outputs of a function — its range — directly on the y-axis of the plot and as a horizontal number line below it. Pick a base function from eleven families grouped by range shape, transform it with vertical scale, vertical shift, horizontal scale, and horizontal shift sliders, and the range updates in real time. A test point slider lets you check whether any specific y-value is achievable as an output."
    },
    obj2: {
      question: "Why do only a and k change the range?",
      answer: "The transformed function is g(x) = a · f(b(x − h)) + k. The parameters b and h act on the input before f runs — they change which x produces each output but not which outputs f itself can produce. Only a and k act on the output side: a scales every output and k shifts every output. Drag b or h freely and the y-axis range band stays put; drag a or k and the band immediately rescales and shifts."
    },
    obj3: {
      question: "What does the test point slider do?",
      answer: "Drag it to pick any y-value between -10 and +10. The visualizer answers whether that value is achievable as an output of g — that is, whether some input x produces g(x) equal to that y. A green achievable badge appears when yes, a red not-achievable badge appears when no. A horizontal dashed reference line is drawn in the main plot at the chosen y, showing whether it crosses the function curve."
    },
    obj4: {
      question: "What is the difference between an open and closed endpoint?",
      answer: "A closed endpoint, shown as a filled circle, means the boundary value is actually reached by the function. The square root function reaches y = 0 exactly. An open endpoint, shown as a hollow circle, means the boundary is approached but never reached. The exponential function approaches y = 0 but never touches it. The distinction matters for whether a function attains its extreme values."
    },
    obj5: {
      question: "How are the eleven base functions grouped in the picker?",
      answer: "They are grouped by the shape of their range. Unrestricted contains functions that reach all real numbers — identity, linear, cubic, and logarithmic. Bounded below contains functions with a floor — quadratic, absolute value, square root, exponential. Bounded between minus one and one contains sine and cosine. Excluded point contains the reciprocal, which reaches every real number except zero."
    },
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Range of a Function Visualizer",
      "description": "Interactive visualizer for the range of a function. Pick a base function, transform it, and see the set of achievable outputs drawn directly on the y-axis and as a number line.",
      "url": "https://www.learnmathclass.com/functions/visual-tools/range",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Eleven base functions grouped by range shape: unrestricted, bounded below, bounded between -1 and 1, and excluded point",
        "Four transformation sliders with badges marking which ones affect the range",
        "Range drawn directly on the y-axis of the main plot in the same coordinate system",
        "Horizontal number line below the plot for an alternative view of the range interval",
        "Test point slider that checks whether any chosen y-value is achievable as an output",
        "Open and closed endpoints rendered as hollow and filled circles",
        "Excluded values marked with a red cross for ranges with a single hole",
        "Customizable highlight color cascading through all range-related UI elements"
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
          "name": "Range of a Function",
          "item": "https://www.learnmathclass.com/functions/visual-tools/range"
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
  // range view + attached picture-reading panel, no link (own page).
  const stateUnits = {
    identity: demoUnitFrame({ svg: rangeDiagrams.identity, caption: 'f(x) = x, range frozen',
      text: 'One unbroken green band up the y-axis: every height is an output, each hit exactly once.' }),
    linearScale: demoUnitFrame({ svg: rangeDiagrams.linearScale, caption: 'f(x) = 2x, range frozen',
      text: 'Full green band: doubling covers every output, just twice as fast.' }),
    cubic: demoUnitFrame({ svg: rangeDiagrams.cubic, caption: 'f(x) = x&#179;, range frozen',
      text: 'Odd power, full coverage: from arbitrarily deep to arbitrarily high, nothing on the y-axis is missed.' }),
    logarithmic: demoUnitFrame({ svg: rangeDiagrams.logarithmic, caption: 'f(x) = ln(x), range frozen',
      text: 'The curve lives only on the right half-plane, yet the green band covers the entire y-axis &#8212; restricted domain, complete range.' }),
    quadratic: demoUnitFrame({ svg: rangeDiagrams.quadratic, caption: 'f(x) = x&#178;, range frozen',
      text: 'Green from zero upward with a filled dot at the floor: 0 is genuinely attained at the vertex; below it, red.' }),
    absolute: demoUnitFrame({ svg: rangeDiagrams.absolute, caption: 'f(x) = |x|, range frozen',
      text: 'The same range as the parabola &#8212; [0, &#8734;), floor attained at the corner &#8212; from a different shape.' }),
    sqrt: demoUnitFrame({ svg: rangeDiagrams.sqrt, caption: 'f(x) = &#8730;x, range frozen',
      text: 'Range [0, &#8734;), floor attained at the origin &#8212; and each output reached exactly once.' }),
    exponential: demoUnitFrame({ svg: rangeDiagrams.exponential, caption: 'f(x) = e&#739;, range frozen',
      text: 'Green above zero with an OPEN circle at the floor: the curve presses toward y = 0 forever without producing it.' }),
    sine: demoUnitFrame({ svg: rangeDiagrams.sine, caption: 'f(x) = sin(x), range frozen',
      text: 'A green band from &#8722;1 to 1 with filled dots at both walls &#8212; the extremes are real outputs, hit once per period.' }),
    cosine: demoUnitFrame({ svg: rangeDiagrams.cosine, caption: 'f(x) = cos(x), range frozen',
      text: 'The identical band to sine&#8202;: range cannot tell the two apart &#8212; the phase difference lives on the x-axis.' }),
    reciprocal: demoUnitFrame({ svg: rangeDiagrams.reciprocal, caption: 'f(x) = 1/x, range frozen',
      text: 'Green in both directions with one puncture at y = 0: the single output no input can produce.' }),
  };

  // Canonical per-family explanations for the info panel's Family tab
  // (SSR/SEO-visible; the component has no built-in per-family texts).
  const explanations = {
    identity:
      '**Identity** $f(x) = x$ — range $\\mathbb{R}$: every output attained, each exactly once.\n\n' +
      '[Learn more about the identity function](!#the-identity-function) · [Full-range families](!#ranges-covering-all-of-the-reals)',
    linearScale:
      '**Linear** $f(x) = 2x$ — range $\\mathbb{R}$: every nonzero linear function is onto the reals; only $a = 0$ collapses the range.\n\n' +
      '[Learn more about the scaled linear function](!#the-scaled-linear-function) · [Full-range families](!#ranges-covering-all-of-the-reals)',
    cubic:
      '**Cubic** $x^3$ — range $\\mathbb{R}$: odd powers cover the whole axis, where even powers cover half.\n\n' +
      '[Learn more about the cubic function](!#the-cubic-function) · [Full-range families](!#ranges-covering-all-of-the-reals)',
    logarithmic:
      '**Logarithm** $\\ln(x)$ — range $\\mathbb{R}$ despite the restricted domain: slow growth is still unbounded growth.\n\n' +
      '[Learn more about the logarithmic function](!#the-logarithmic-function) · [Full-range families](!#ranges-covering-all-of-the-reals)',
    quadratic:
      '**Quadratic** $x^2$ — range $[0, \\infty)$, **closed** at the floor: $0$ is attained at the vertex; interior outputs are hit twice.\n\n' +
      '[Learn more about the quadratic function](!#the-quadratic-function) · [Bounded-below families](!#ranges-bounded-below)',
    absolute:
      '**Absolute value** $|x|$ — range $[0, \\infty)$, floor attained at the corner: output-identical to the parabola.\n\n' +
      '[Learn more about the absolute value function](!#the-absolute-value-function) · [Bounded-below families](!#ranges-bounded-below)',
    sqrt:
      '**Square root** $\\sqrt{x}$ — range $[0, \\infty)$, attained and single-covered: the only picker family with matching domain and range shapes.\n\n' +
      '[Learn more about the square root function](!#the-square-root-function) · [Bounded-below families](!#ranges-bounded-below)',
    exponential:
      '**Exponential** $e^x$ — range $(0, \\infty)$, **open** at the floor: the horizontal asymptote is an output approached but never produced.\n\n' +
      '[Learn more about the exponential function](!#the-exponential-function) · [Bounded-below families](!#ranges-bounded-below)',
    sine:
      '**Sine** — range $[-1, 1]$, both walls attained: amplitude is the half-width of this band.\n\n' +
      '[Learn more about the sine function](!#the-sine-function) · [Bounded families](!#ranges-bounded-on-both-sides)',
    cosine:
      '**Cosine** — range $[-1, 1]$, identical to sine: the phase shift is invisible to any output-side measurement.\n\n' +
      '[Learn more about the cosine function](!#the-cosine-function) · [Bounded families](!#ranges-bounded-on-both-sides)',
    reciprocal:
      '**Reciprocal** $1/x$ — range $\\mathbb{R} \\setminus \\{0\\}$: one missing output, at the horizontal asymptote.\n\n' +
      '[Learn more about the reciprocal](!#the-reciprocal-and-its-missing-output)',
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
        title: "Range of a Function Visualizer | Achievable Outputs",
        description: "Visualize the range of any transformed function on the y-axis. Drag a test point to check achievability and see why only a and k change the range.",
        keywords: keyWords.join(", "),
        url: "/functions/visual-tools/range",
        name: "Range of a Function Visualizer",
        hubDescription: "See the set of achievable outputs of any function drawn directly on the y-axis as a colored band, with a horizontal number line below the plot and a draggable test point that checks whether any specific y-value is reached. Pick from eleven base functions grouped by range shape and watch the range respond live to vertical scale and shift — while horizontal transformations leave it unchanged.",
        category: "Function Properties",
        subCategory: ""
      },
    }
  }
}


export default function RangeOfFunctionPage({seoData, sectionsContent, introContent, faqQuestions, schemas, explanations, stateUnits}) {

  const unit = (key) => <div key={'u-' + key} dangerouslySetInnerHTML={{ __html: stateUnits[key] }} />;

  const genericSections = [
    { id:'getting-started-with-the-visualizer',          title:sectionsContent.obj1.title,  link:sectionsContent.obj1.link,  content:[sectionsContent.obj1.content] },
    { id:'picking-a-function',                           title:sectionsContent.obj2.title,  link:sectionsContent.obj2.link,  content:[sectionsContent.obj2.content] },
    { id:'why-only-a-and-k-change-the-range',            title:sectionsContent.obj3.title,  link:sectionsContent.obj3.link,  content:[sectionsContent.obj3.content] },
    { id:'reading-the-y-axis-highlight-and-range-bar',   title:sectionsContent.obj4.title,  link:sectionsContent.obj4.link,  content:[sectionsContent.obj4.content] },
    { id:'probing-with-the-test-point-slider',           title:sectionsContent.obj5.title,  link:sectionsContent.obj5.link,  content:[sectionsContent.obj5.content] },
    { id:'the-range-card-and-applied-chips',             title:sectionsContent.obj6.title,  link:sectionsContent.obj6.link,  content:[sectionsContent.obj6.content] },
    { id:'customizing-the-highlight-color',              title:sectionsContent.obj7.title,  link:sectionsContent.obj7.link,  content:[sectionsContent.obj7.content] },
    { id:'what-is-the-range-of-a-function',              title:sectionsContent.obj8.title,  link:sectionsContent.obj8.link,  content:[sectionsContent.obj8.content] },
    { id:'open-vs-closed-endpoints-and-excluded-values', title:sectionsContent.obj9.title,  link:sectionsContent.obj9.link,  content:[sectionsContent.obj9.content] },
    { id:'ranges-covering-all-of-the-reals',             title:sectionsContent.obj11.title, link:sectionsContent.obj11.link, content:[sectionsContent.obj11.content] },
    { id:'the-identity-function',                        title:sectionsContent.obj12.title, link:sectionsContent.obj12.link, content:[sectionsContent.obj12.content, unit('identity'), sectionsContent.obj12.after] },
    { id:'the-scaled-linear-function',                   title:sectionsContent.obj13.title, link:sectionsContent.obj13.link, content:[sectionsContent.obj13.content, unit('linearScale'), sectionsContent.obj13.after] },
    { id:'the-cubic-function',                           title:sectionsContent.obj14.title, link:sectionsContent.obj14.link, content:[sectionsContent.obj14.content, unit('cubic'), sectionsContent.obj14.after] },
    { id:'the-logarithmic-function',                     title:sectionsContent.obj15.title, link:sectionsContent.obj15.link, content:[sectionsContent.obj15.content, unit('logarithmic'), sectionsContent.obj15.after] },
    { id:'ranges-bounded-below',                         title:sectionsContent.obj16.title, link:sectionsContent.obj16.link, content:[sectionsContent.obj16.content] },
    { id:'the-quadratic-function',                       title:sectionsContent.obj17.title, link:sectionsContent.obj17.link, content:[sectionsContent.obj17.content, unit('quadratic'), sectionsContent.obj17.after] },
    { id:'the-absolute-value-function',                  title:sectionsContent.obj18.title, link:sectionsContent.obj18.link, content:[sectionsContent.obj18.content, unit('absolute'), sectionsContent.obj18.after] },
    { id:'the-square-root-function',                     title:sectionsContent.obj19.title, link:sectionsContent.obj19.link, content:[sectionsContent.obj19.content, unit('sqrt'), sectionsContent.obj19.after] },
    { id:'the-exponential-function',                     title:sectionsContent.obj20.title, link:sectionsContent.obj20.link, content:[sectionsContent.obj20.content, unit('exponential'), sectionsContent.obj20.after] },
    { id:'ranges-bounded-on-both-sides',                 title:sectionsContent.obj21.title, link:sectionsContent.obj21.link, content:[sectionsContent.obj21.content] },
    { id:'the-sine-function',                            title:sectionsContent.obj22.title, link:sectionsContent.obj22.link, content:[sectionsContent.obj22.content, unit('sine'), sectionsContent.obj22.after] },
    { id:'the-cosine-function',                          title:sectionsContent.obj23.title, link:sectionsContent.obj23.link, content:[sectionsContent.obj23.content, unit('cosine'), sectionsContent.obj23.after] },
    { id:'the-reciprocal-and-its-missing-output',        title:sectionsContent.obj24.title, link:sectionsContent.obj24.link, content:[sectionsContent.obj24.content, unit('reciprocal'), sectionsContent.obj24.after] },
    { id:'related-concepts-and-tools',                   title:sectionsContent.obj10.title, link:sectionsContent.obj10.link, content:[sectionsContent.obj10.content] },
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Range of a Function</h1>
      <br/>
      <FunctionRange explanations={explanations}/>
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