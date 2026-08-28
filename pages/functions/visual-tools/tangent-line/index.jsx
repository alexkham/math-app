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
import TangentLine from '../../../../app/components/functions/tangent/TangentLine'
import tangentDiagrams from '../../../../app/components/functions/tangent/tangentLineDiagrams'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'

export async function getStaticProps(){

  const keyWords = [
    'tangent line visualizer',
    'tangent line at a point',
    'derivative visualizer',
    'point-slope form tangent',
    'slope-intercept form tangent',
    'tangent line equation',
    'instantaneous rate of change',
    'tangent line calculator',
    'secant to tangent',
    'critical point visualizer',
    'interactive derivative',
    'tangent of function',
    'visualize derivative',
    'f prime x slope',
    'tangent line undefined corner vertical',
  ]

  const sectionsContent = {

    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Open the page and three panels appear. On the left is the **function picker** with ten base function families. In the center sits the **plot panel**, with the chosen function $f(x)$ drawn in blue and its **tangent line** at the chosen point drawn in amber. On the right is the **info panel** with two tabs — a live explanation of the current state and a general theory tab about tangents.

Below the plot, the centerpiece of the tool is the **tangent point card**: an amber-bordered block containing the $x_0$ slider, the current values of $x_0$, $y_0$, and slope $m$, and the tangent equation written in both point-slope and slope-intercept forms.

The page launches with the quadratic family and $x_0 = 1$. Drag the $x_0$ slider and the tangent line slides along the curve in real time, the equations recalculate, and the info panel updates with the new slope and intercept.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Picking a Base Function`,
      content: `The picker on the left lists ten base functions, with sine and cosine grouped under "Trigonometric". Each entry shows a small shape glyph and the family name:

• Polynomial: [Identity](!#tangent-to-the-identity) ($x$), [Linear (2x)](!#tangent-to-the-scaled-linear), [Quadratic](!#tangent-to-the-quadratic) ($x^2$), [Cubic](!#tangent-to-the-cubic) ($x^3$)
• Algebraic: [Reciprocal](!#tangent-to-the-reciprocal) ($1/x$), [Square root](!#tangent-to-the-square-root) ($\\sqrt{x}$), [Absolute](!#tangent-to-the-absolute-value) ($|x|$)
• Transcendental: [Exponential](!#tangent-to-the-exponential) ($e^x$), [Logarithmic](!#tangent-to-the-logarithm) ($\\ln x$)
• Trigonometric: [Sine](!#tangent-to-sine), [Cosine](!#tangent-to-cosine)

Click any entry to switch. The transformation parameters $a$, $k$, $b$, $h$ reset to defaults and $x_0$ returns to its default value, so you always start each family from a clean slate. The picker covers the most pedagogically important functions for studying derivatives — including deliberately tricky ones (absolute value's corner, square root's vertical tangent) that demonstrate when the tangent fails to exist.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Transforming the Base Function`,
      content: `Below the function picker, four sliders apply the standard affine transformations to the chosen base $f(x)$:

• $a$ — **vertical scale** (stretches, compresses, or reflects across the $x$-axis)
• $k$ — **vertical shift**
• $b$ — **horizontal scale**
• $h$ — **horizontal shift**

The transformed function is $g(x) = a \\cdot f(b(x - h)) + k$. Its derivative — and therefore the slope $m$ of the tangent at any $x_0$ — follows the chain rule: $g'(x) = a \\cdot b \\cdot f'(b(x - h))$.

Transformations are most useful here for two reasons. First, they let you keep the same function family while moving features around — drag the parabola's vertex to wherever you want it, then study tangents near that vertex. Second, they let you build a function whose tangent at the default $x_0 = 1$ is something specific you want to see.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Dragging $x_0$ — the Tangent Point`,
      content: `The $x_0$ slider lives at the top of the **tangent point card** below the plot, and it is the tool's primary interaction. Drag it to move the point of tangency along the curve from $-10$ to $+10$.

As you drag, four things change at once in real time:

• The point of tangency slides along the blue curve
• The amber tangent line pivots to match the new slope
• The tangent equations rewrite themselves with the new $x_0$, $y_0$, and $m$
• The info panel's "Explanation" tab updates with the new numerical values

A green "**critical point**" badge appears next to the function name whenever the slope $m$ is effectively zero — flagging local extrema as you sweep across them. A red "**tangent undefined**" badge appears whenever $x_0$ lands at a corner, vertical tangent, or outside the function's domain.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Reading the Tangent Equation Card`,
      content: `The lower half of the tangent point card displays the tangent line in two equivalent forms:

$$\\text{Point-slope:} \\quad y = m(x - x_0) + y_0$$

$$\\text{Slope-intercept:} \\quad y = mx + (y_0 - m \\cdot x_0)$$

Both forms are computed automatically from the current $x_0$, $y_0$, and $m$. Point-slope form makes the connection to the derivative obvious: this is the line through $(x_0, y_0)$ with slope $f'(x_0)$. Slope-intercept form is what you would simplify to in a homework problem and what graphing software typically expects.

The slope $m$ appears in the card header, and special cases are handled cleanly. When $m = 0$, both forms collapse to $y = y_0$ — the horizontal tangent at a critical point. When $x_0 = 0$, the parenthesized $(x - x_0)$ in point-slope form simplifies to just $x$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `The Applied Chip Strip and Visibility Toggles`,
      content: `Below the tangent equation card sit two horizontal strips.

The **Applied** strip shows seven chips: four for the transformation parameters $a$, $k$, $b$, $h$, and three for the tangent-specific values $x_0$, $y_0$, $m$. Active (non-default) parameters glow blue; the tangent values are color-coded amber for the $x$-axis quantities and blue for $y_0$. The chip strip is a scannable summary of the entire current state — useful for screenshots, classroom display, and step-back verification when sliders have been dragged far from defaults.

The **Show** strip below has two toggle buttons, one each for the function $f$ and the tangent line. Click a button to hide that curve from the plot. Hiding $f$ leaves the tangent line alone in the plot window, useful for verifying that the equation in the card is in fact the line drawn. Hiding the tangent leaves only the function, useful for cleanly observing where you want to place $x_0$ next.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `The Info Panel`,
      content: `The side info panel has two tabs:

• **Explanation** — reads the current state. Shows the symbolic forms of $f(x)$ and $f'(x)$, the numerical values of $x_0$, $y_0$, $m$, and the $y$-intercept of the tangent, and renders the tangent equation in both forms. When $x_0$ is at a critical point ($m \\approx 0$), an extra note explains that this is a candidate for a local extremum. When the tangent is undefined, a different note explains why and suggests sliding $x_0$ to a smooth part of the curve.

• **Concepts** — general theory of tangent lines independent of the current state. Covers the secant-to-tangent limit definition, the relationship between the slope of the tangent and the derivative, the two equivalent forms of the equation, and the three ways the tangent can fail to exist (corners, vertical tangents, points outside the domain).

The Explanation tab is the right place to look when you want to know **what is happening right now**; the Concepts tab is the right place for **why it works that way in general**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What the Tangent Line Is`,
      content: `At any smooth point on a curve, the **tangent line** is the unique straight line that touches the curve at that point and matches its direction. Its slope is the function's **instantaneous rate of change** at that point — the **derivative** $f'(x_0)$.

The tangent emerges as the limit of **secant lines**. Pick two points on the curve, $(x_0, f(x_0))$ and $(x_0 + \\Delta x, f(x_0 + \\Delta x))$. The line through them has slope

$$\\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}$$

As $\\Delta x \\to 0$ the second point slides into the first and the secant rotates into the tangent. Its slope becomes

$$f'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}$$

This is the definition of the derivative. Every tangent line you see in the visualizer is the geometric realization of this limit at the chosen $x_0$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `When the Tangent Fails to Exist`,
      content: `Not every point on every curve has a tangent. The visualizer flags three failure modes with a red "tangent undefined" badge:

• **Corners** — the absolute value function $|x|$ at $x = 0$ has a sharp V; the slope jumps from $-1$ to $+1$ with no single line that fits both sides. The left and right derivatives exist but disagree.
• **Vertical tangents** — the square root function $\\sqrt{x}$ at $x = 0$ has a tangent whose slope is infinite. A vertical line cannot be written in the form $y = mx + b$, so the equation forms break down even though the geometric line exists.
• **Outside the domain** — the logarithm $\\ln x$ has no values at $x \\leq 0$, so there is no curve there to be tangent to. The reciprocal $1/x$ similarly has no value at $x = 0$.

In all three cases the derivative does not exist at the affected point. Sliding $x_0$ across one of these points lets you watch the badge appear and the equation card reset — a concrete tour of the differentiability failures discussed in introductory calculus.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Derivative** — the function $f'(x)$ whose value at any $x$ equals the slope of the tangent at that point. The tangent line at $x_0$ is the geometric realization of $f'(x_0)$.

**Secant Line** — the line through two distinct points on the curve; the tangent emerges as the secant's limit as the two points merge.

**Critical Points** — points where the derivative is zero or undefined; candidates for local maxima, minima, and saddle points.

**Differentiability** — the property of having a well-defined derivative at a point. The visualizer's three "tangent undefined" cases are the three standard failures.

**Linear Approximation** — using the tangent line as a substitute for the function near $x_0$, the basis of Newton's method and Taylor series.

**Function Transformations** — the companion visualizer for $a$, $k$, $b$, $h$ alone, without the tangent overlay.

**Functions Families Gallery** — companion gallery of the same base functions seen here, useful as a prerequisite for understanding what each family looks like before studying its tangents.

**Inverse Functions** — reflecting a graph across $y = x$; tangent lines of inverse functions are related by reciprocal slopes.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Tangent to the Identity`,
      content: `The line $y = x$ is its own tangent everywhere: slope $1$ at every point, so the tangent construction returns the function itself.`,
      before: ``,
      after: `The frozen scene dashes the amber tangent so the coincidence stays visible — it lies exactly on the blue line, whatever $x_0$ you drag to. A constant derivative means one tangent serves all points.

Self-tangency is the degenerate case that calibrates all the others: the tangent line is the **best linear approximation**, and a line's best linear approximation is itself, error zero everywhere.

The [scaled linear function](!#tangent-to-the-scaled-linear) repeats the story at slope $2$; the first genuinely moving tangent belongs to the [quadratic](!#tangent-to-the-quadratic).`,
      link: '',
    },
    obj12: {
      title: `Tangent to the Scaled Linear`,
      content: `The line $f(x) = 2x$ has derivative $2$ everywhere — a constant slope read directly off the function, no limit needed.`,
      before: ``,
      after: `As with the [identity](!#tangent-to-the-identity), the tangent coincides with the curve at every point; the dashed amber overlay is the only way to see it at all. Drag $x_0$ and nothing about the line changes — only the marked point slides.

The pair of line families anchors the derivative scale: slope $1$ and slope $2$, the two reference speeds against which every curved tangent below can be compared.`,
      link: '',
    },
    obj13: {
      title: `Tangent to the Quadratic`,
      content: `The parabola is where the tangent starts to move: $f'(x) = 2x$, so the slope at the frozen $x_0 = 1.5$ is exactly $3$.`,
      before: ``,
      after: `Drag the point and watch the slope track twice its position: negative on the left arm, zero at the vertex, positive on the right. The vertex is the tangent's resting place — the horizontal tangent that marks every smooth extremum.

The parabola also keeps a geometric secret: the tangent at $x_0$ crosses the x-axis exactly at $x_0/2$, halfway to the origin — a fact worth verifying with the draggable point.

The tangent equation card assembles $y = f(x_0) + f'(x_0)(x - x_0)$ live; the quadratic is the cleanest place to watch each ingredient move.`,
      link: '',
    },
    obj14: {
      title: `Tangent to the Cubic`,
      content: `The cubic's derivative $3x^2$ is never negative — every tangent points weakly uphill, even through the flat moment at the origin.`,
      before: ``,
      after: `The frozen $x_0 = 1$ gives slope $3$. Drag toward zero and the tangent flattens into the horizontal — but unlike the parabola's vertex, this is **not** an extremum: the curve pauses and continues upward. A horizontal tangent marks a critical point; only the surrounding slopes decide what kind.

That distinction — extremum versus inflection with zero slope — is the classic first-derivative-test lesson, and the cubic is its canonical exhibit.

Symmetric positions give equal slopes: $f'(-x_0) = f'(x_0)$, the derivative of an odd function being even.`,
      link: '',
    },
    obj15: {
      title: `Tangent to the Reciprocal`,
      content: `Every tangent to $1/x$ points downhill: $f'(x) = -1/x^2$ is negative on both branches, steepening without bound near the wall at $x = 0$.`,
      before: ``,
      after: `At the frozen $x_0 = 1$ the slope is exactly $-1$, and the tangent $y = 2 - x$ encloses a triangle with the axes of area $2$ — remarkably, the **same** area for every choice of $x_0$, one of the reciprocal's classic invariants.

Approach the singularity and the tangent tilts toward vertical while sliding off to infinity; there is no tangent **at** $x = 0$ because there is no point there at all — the domain hole, not a differentiability failure.`,
      link: '',
    },
    obj16: {
      title: `Tangent to the Exponential`,
      content: `The exponential's defining property becomes visible geometry: $f'(x) = e^x = f(x)$, so the tangent's slope always equals the curve's height.`,
      before: ``,
      after: `At the frozen $x_0 = 1$: height $e$, slope $e$. Drag anywhere and the equality holds — the only function (up to scaling) whose steepness is its own value.

A consequence worth checking with the equation card: every tangent to $e^x$ crosses the x-axis exactly at $x_0 - 1$, one unit to the left of the tangent point, at every position. The subtangent has constant length $1$.

Its inverse partner the [logarithm](!#tangent-to-the-logarithm) flips the relationship: slope equal to the reciprocal of position.`,
      link: '',
    },
    obj17: {
      title: `Tangent to the Logarithm`,
      content: `The logarithm's tangent flattens as it climbs: $f'(x) = 1/x$, steep against the wall, nearly horizontal far out.`,
      before: ``,
      after: `At the frozen $x_0 = 2$ the slope is $\\tfrac{1}{2}$. Drag toward zero and the tangent rears toward vertical as $1/x$ blows up — the graphical version of the logarithm's unbounded steepness at its domain edge.

The mirror fact to the exponential's constant subtangent: every tangent to $\\ln(x)$ crosses the y-axis at $\\ln(x_0) - 1$, one unit below the tangent point's height.

Only positive $x_0$ is available — the slider simply cannot cross into territory where the function does not exist.`,
      link: '',
    },
    obj18: {
      title: `Tangent to the Square Root`,
      content: `The square root's tangents flatten with distance — $f'(x) = \\tfrac{1}{2\\sqrt{x}}$ — but the interesting drama is at the start of the curve.`,
      before: ``,
      after: `At the frozen $x_0 = 4$: height $2$, slope $\\tfrac{1}{4}$. Drag the point toward zero and the tangent tilts up and up, approaching **vertical** — infinite slope at the endpoint. The tangent at $x = 0$ exists geometrically (the y-axis itself) but not as a $y = mx + b$ equation, which is why the tool reports it as undefined.

This is one of the two failure modes cataloged in [When the Tangent Fails to Exist](!#when-the-tangent-fails-to-exist): a vertical tangent — direction defined, slope not.

Everywhere else the root behaves: half the reciprocal of its own height, the chain rule's first classic exercise.`,
      link: '',
    },
    obj19: {
      title: `Tangent to the Absolute Value`,
      content: `Away from the corner, $|x|$ is just a line in disguise: slope $+1$ on the right arm, $-1$ on the left, the tangent coinciding with whichever arm holds the point.`,
      before: ``,
      after: `The frozen $x_0 = 2$ shows the coincidence — the dashed amber tangent lies along the right arm exactly, as on the [identity](!#tangent-to-the-identity). Drag across to negative territory and the tangent snaps to the other arm; slope jumps from $+1$ to $-1$ with nothing in between.

At $x = 0$ itself there is no tangent at all: the left and right slopes disagree, so no single line fits. This is the **corner** failure mode — the second entry in [When the Tangent Fails to Exist](!#when-the-tangent-fails-to-exist), and the standard first example of continuity without differentiability.`,
      link: '',
    },
    obj20: {
      title: `Tangent to Sine`,
      content: `Sine's tangents cycle with the wave itself: $f'(x) = \\cos(x)$, the slope at every point read off the **other** wave.`,
      before: ``,
      after: `The frozen $x_0 = 0$ shows the most celebrated tangent in trigonometry: slope $\\cos(0) = 1$, giving the line $y = x$ — the small-angle approximation $\\sin(x) \\approx x$ drawn as geometry.

Drag to the crest at $\\pi/2$ and the tangent goes horizontal; every peak and trough of the wave is a resting point. Between them the slope oscillates through the full $[-1, 1]$ range, peaking exactly at the zero crossings.

[Cosine](!#tangent-to-cosine) tells the same story a quarter period out of phase — with a sign flip in its derivative.`,
      link: '',
    },
    obj21: {
      title: `Tangent to Cosine`,
      content: `Cosine's slopes are sine's values negated: $f'(x) = -\\sin(x)$ — downhill through the first half period, uphill through the second.`,
      before: ``,
      after: `The frozen $x_0 = \\pi/2$ catches cosine at its descent through zero: slope $-\\sin(\\pi/2) = -1$, the steepest the wave ever gets. At the crests ($x = 0$, $2\\pi$) the tangent rests horizontal.

The derivative pair closes into a cycle — sine to cosine to negative sine to negative cosine and back — which the tangent point makes tactile: four drags of a quarter period each return the slope pattern to its start.

Together with [sine](!#tangent-to-sine), this pair is the reason simple harmonic motion never escapes trigonometry.`,
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
      question: "What does the Tangent Line Visualizer do?",
      answer: "It draws the tangent line to any function at any chosen x value. Pick a base function from ten families, optionally transform it with vertical scale, vertical shift, horizontal scale, and horizontal shift sliders, then drag the x₀ slider to move the point of tangency. The tangent line follows in real time and its equation appears in both point-slope and slope-intercept forms below the plot."
    },
    obj2: {
      question: "What are the two forms of the tangent line equation?",
      answer: "Point-slope form is y = m(x − x₀) + y₀, where m is the slope, x₀ and y₀ are the coordinates of the point of tangency. Slope-intercept form is y = mx + b where b is the y-intercept y₀ − m·x₀. Both describe the same line; point-slope makes the construction obvious while slope-intercept is the canonical simplified form."
    },
    obj3: {
      question: "How is the slope of the tangent related to the derivative?",
      answer: "They are the same thing. The slope of the tangent line to f at x₀ is by definition the value of the derivative f'(x₀). The visualizer computes the slope directly from the symbolic derivative of the transformed function and shows it as m in the tangent point card."
    },
    obj4: {
      question: "Why does the visualizer say tangent undefined sometimes?",
      answer: "Three situations produce no well-defined tangent: corners like the absolute value at x = 0 where the slope jumps discontinuously; vertical tangents like the square root at x = 0 where the slope is infinite; and points outside the domain like the logarithm at x ≤ 0 where the function itself has no value. In all three cases the derivative does not exist and the equation forms break down."
    },
    obj5: {
      question: "What is a critical point?",
      answer: "A critical point is an x value where the derivative is zero or undefined. The visualizer flags zero-slope points with a green badge as you slide x₀ across local maxima or minima of the curve. Critical points are the candidate locations for local extrema, and identifying them is the first step in optimization problems."
    },
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Tangent Line Visualizer",
      "description": "Interactive tangent line visualizer. Pick a function, transform it, and drag the point of tangency to see the tangent line and its equation update in real time.",
      "url": "https://www.learnmathclass.com/functions/visual-tools/tangent-line",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Ten base functions including identity, polynomial, reciprocal, exponential, logarithmic, square root, absolute value, sine, and cosine",
        "Affine transformation sliders for vertical scale, vertical shift, horizontal scale, and horizontal shift",
        "Draggable x₀ slider that moves the point of tangency along the curve in real time",
        "Tangent line equation displayed in both point-slope and slope-intercept forms",
        "Live readouts of x₀, y₀, slope m, and y-intercept",
        "Critical point badge that highlights candidate extrema as you sweep x₀",
        "Tangent undefined badge for corners, vertical tangents, and points outside the domain",
        "Side info panel with state-specific explanation tab and general theory concepts tab"
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
          "name": "Tangent Line Visualizer",
          "item": "https://www.learnmathclass.com/functions/visual-tools/tangent-line"
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
  // tangent scene + attached picture-reading panel, no link (own page).
  const stateUnits = {
    identity: demoUnitFrame({ svg: tangentDiagrams.identity, caption: 'y = x, tangent at x&#8320; = 2',
      text: 'The dashed amber tangent lies exactly on the blue line: a line is its own best linear approximation, everywhere.' }),
    linearScale: demoUnitFrame({ svg: tangentDiagrams.linearScale, caption: 'y = 2x, tangent at x&#8320; = 1',
      text: 'Constant slope 2: one tangent serves every point, coinciding with the curve itself.' }),
    quadratic: demoUnitFrame({ svg: tangentDiagrams.quadratic, caption: 'x&#178;, tangent at x&#8320; = 1.5',
      text: 'Slope 2x&#8320; = 3 at the frozen point; drag left and the tangent tilts down through the horizontal rest at the vertex.' }),
    cubic: demoUnitFrame({ svg: tangentDiagrams.cubic, caption: 'x&#179;, tangent at x&#8320; = 1',
      text: 'Slope 3x&#8320;&#178; = 3 &#8212; and never negative anywhere: every cubic tangent points weakly uphill.' }),
    reciprocal: demoUnitFrame({ svg: tangentDiagrams.reciprocal, caption: '1/x, tangent at x&#8320; = 1',
      text: 'Slope &#8722;1 at (1, 1); the tangent and the axes enclose a triangle of area 2 &#8212; the same area from every tangent point.' }),
    exponential: demoUnitFrame({ svg: tangentDiagrams.exponential, caption: 'e&#739;, tangent at x&#8320; = 1',
      text: 'Height e, slope e: the tangent&#8217;s steepness equals the curve&#8217;s value at every point.' }),
    logarithmic: demoUnitFrame({ svg: tangentDiagrams.logarithmic, caption: 'ln(x), tangent at x&#8320; = 2',
      text: 'Slope 1/x&#8320; = &#189;: gentle out here, rearing toward vertical as the point approaches the wall at zero.' }),
    sqrt: demoUnitFrame({ svg: tangentDiagrams.sqrt, caption: '&#8730;x, tangent at x&#8320; = 4',
      text: 'Slope &#188; at (4, 2) &#8212; and an endpoint drama off-screen left: the tangent turns vertical at x = 0.' }),
    absolute: demoUnitFrame({ svg: tangentDiagrams.absolute, caption: '|x|, tangent at x&#8320; = 2',
      text: 'The dashed tangent coincides with the right arm; at the corner itself, no single line fits and the tangent fails.' }),
    sine: demoUnitFrame({ svg: tangentDiagrams.sine, caption: 'sin(x), tangent at x&#8320; = 0',
      text: 'Slope cos(0) = 1: the tangent is y = x &#8212; the small-angle approximation drawn as geometry.' }),
    cosine: demoUnitFrame({ svg: tangentDiagrams.cosine, caption: 'cos(x), tangent at x&#8320; = &#960;/2',
      text: 'Caught at its steepest descent: slope &#8722;sin(&#960;/2) = &#8722;1 as the wave crosses zero.' }),
  };

  // Canonical per-family explanations for the info panel's Family tab
  // (SSR/SEO-visible; the component has no built-in per-family texts).
  const explanations = {
    identity:
      '**Identity** $x$ — derivative $1$ everywhere: the tangent coincides with the line at every point.\n\n' +
      '[Learn more about this tangent](!#tangent-to-the-identity)',
    linearScale:
      '**Linear** $2x$ — derivative $2$: constant slope, one tangent for all points.\n\n' +
      '[Learn more about this tangent](!#tangent-to-the-scaled-linear)',
    quadratic:
      '**Quadratic** $x^2$ — derivative $2x$: slope proportional to position, horizontal rest at the vertex.\n\n' +
      '[Learn more about this tangent](!#tangent-to-the-quadratic)',
    cubic:
      '**Cubic** $x^3$ — derivative $3x^2 \\geq 0$: a horizontal tangent at the origin that is an inflection, not an extremum.\n\n' +
      '[Learn more about this tangent](!#tangent-to-the-cubic)',
    reciprocal:
      '**Reciprocal** $1/x$ — derivative $-1/x^2$: every tangent points downhill, and each cuts a triangle of constant area 2 with the axes.\n\n' +
      '[Learn more about this tangent](!#tangent-to-the-reciprocal)',
    exponential:
      '**Exponential** $e^x$ — its own derivative: slope equals height everywhere, subtangent of constant length 1.\n\n' +
      '[Learn more about this tangent](!#tangent-to-the-exponential)',
    logarithmic:
      '**Logarithm** $\\ln(x)$ — derivative $1/x$: unboundedly steep at the domain wall, ever flatter far out.\n\n' +
      '[Learn more about this tangent](!#tangent-to-the-logarithm)',
    sqrt:
      '**Square root** $\\sqrt{x}$ — derivative $1/(2\\sqrt{x})$: a vertical tangent at the endpoint $x = 0$, slope undefined there.\n\n' +
      '[Learn more about this tangent](!#tangent-to-the-square-root) · [When the tangent fails](!#when-the-tangent-fails-to-exist)',
    absolute:
      '**Absolute value** $|x|$ — slope $\\pm 1$ on the arms, no tangent at the corner: left and right slopes disagree.\n\n' +
      '[Learn more about this tangent](!#tangent-to-the-absolute-value) · [When the tangent fails](!#when-the-tangent-fails-to-exist)',
    sine:
      '**Sine** — derivative $\\cos(x)$: slope read off the other wave, with $y = x$ as the tangent at the origin.\n\n' +
      '[Learn more about this tangent](!#tangent-to-sine)',
    cosine:
      '**Cosine** — derivative $-\\sin(x)$: steepest at the zero crossings, resting at every crest and trough.\n\n' +
      '[Learn more about this tangent](!#tangent-to-cosine)',
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
        title: "Tangent Line Visualizer | Derivative & Slope at a Point",
        description: "Visualize the tangent line to any function at any x₀. Drag the tangent point, transform the function, and read both forms of the tangent equation in real time.",
        keywords: keyWords.join(", "),
        url: "/functions/visual-tools/tangent-line",
        name: "Tangent Line Visualizer",
        hubDescription: "Drag the x₀ slider and watch the tangent line follow the curve in real time. Pick a base function — linear, quadratic, cubic, reciprocal, exponential, logarithmic, square root, absolute, sine, cosine — apply affine transformations, and read both the point-slope and slope-intercept forms of the tangent equation alongside the slope m = f'(x₀). Critical points and undefined-tangent failures are flagged automatically.",
          category: "Function Properties",
        subCategory: ""
      },
    }
  }
}


export default function TangentLineVisualizerPage({seoData, sectionsContent, introContent, faqQuestions, schemas, explanations, stateUnits}) {

  const unit = (key) => <div key={'u-' + key} dangerouslySetInnerHTML={{ __html: stateUnits[key] }} />;

  const genericSections = [
    { id:'getting-started-with-the-visualizer', title:sectionsContent.obj1.title, link:sectionsContent.obj1.link, content:[sectionsContent.obj1.content] },
    { id:'picking-a-base-function', title:sectionsContent.obj2.title, link:sectionsContent.obj2.link, content:[sectionsContent.obj2.content] },
    { id:'transforming-the-base-function', title:sectionsContent.obj3.title, link:sectionsContent.obj3.link, content:[sectionsContent.obj3.content] },
    { id:'dragging-x0-the-tangent-point', title:sectionsContent.obj4.title, link:sectionsContent.obj4.link, content:[sectionsContent.obj4.content] },
    { id:'reading-the-tangent-equation-card', title:sectionsContent.obj5.title, link:sectionsContent.obj5.link, content:[sectionsContent.obj5.content] },
    { id:'the-applied-chip-strip-and-visibility-toggles', title:sectionsContent.obj6.title, link:sectionsContent.obj6.link, content:[sectionsContent.obj6.content] },
    { id:'the-info-panel', title:sectionsContent.obj7.title, link:sectionsContent.obj7.link, content:[sectionsContent.obj7.content] },
    { id:'what-the-tangent-line-is', title:sectionsContent.obj8.title, link:sectionsContent.obj8.link, content:[sectionsContent.obj8.content] },
    { id:'when-the-tangent-fails-to-exist', title:sectionsContent.obj9.title, link:sectionsContent.obj9.link, content:[sectionsContent.obj9.content] },
    { id:'tangent-to-the-identity', title:sectionsContent.obj11.title, link:sectionsContent.obj11.link, content:[sectionsContent.obj11.content, unit('identity'), sectionsContent.obj11.after] },
    { id:'tangent-to-the-scaled-linear', title:sectionsContent.obj12.title, link:sectionsContent.obj12.link, content:[sectionsContent.obj12.content, unit('linearScale'), sectionsContent.obj12.after] },
    { id:'tangent-to-the-quadratic', title:sectionsContent.obj13.title, link:sectionsContent.obj13.link, content:[sectionsContent.obj13.content, unit('quadratic'), sectionsContent.obj13.after] },
    { id:'tangent-to-the-cubic', title:sectionsContent.obj14.title, link:sectionsContent.obj14.link, content:[sectionsContent.obj14.content, unit('cubic'), sectionsContent.obj14.after] },
    { id:'tangent-to-the-reciprocal', title:sectionsContent.obj15.title, link:sectionsContent.obj15.link, content:[sectionsContent.obj15.content, unit('reciprocal'), sectionsContent.obj15.after] },
    { id:'tangent-to-the-exponential', title:sectionsContent.obj16.title, link:sectionsContent.obj16.link, content:[sectionsContent.obj16.content, unit('exponential'), sectionsContent.obj16.after] },
    { id:'tangent-to-the-logarithm', title:sectionsContent.obj17.title, link:sectionsContent.obj17.link, content:[sectionsContent.obj17.content, unit('logarithmic'), sectionsContent.obj17.after] },
    { id:'tangent-to-the-square-root', title:sectionsContent.obj18.title, link:sectionsContent.obj18.link, content:[sectionsContent.obj18.content, unit('sqrt'), sectionsContent.obj18.after] },
    { id:'tangent-to-the-absolute-value', title:sectionsContent.obj19.title, link:sectionsContent.obj19.link, content:[sectionsContent.obj19.content, unit('absolute'), sectionsContent.obj19.after] },
    { id:'tangent-to-sine', title:sectionsContent.obj20.title, link:sectionsContent.obj20.link, content:[sectionsContent.obj20.content, unit('sine'), sectionsContent.obj20.after] },
    { id:'tangent-to-cosine', title:sectionsContent.obj21.title, link:sectionsContent.obj21.link, content:[sectionsContent.obj21.content, unit('cosine'), sectionsContent.obj21.after] },
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Tangent Line Visualizer</h1>
      <br/>
      <TangentLine explanations={explanations}/>
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