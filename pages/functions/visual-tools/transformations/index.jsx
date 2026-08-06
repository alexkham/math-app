


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// Canonical per-tab explanations live in getStaticProps below (SSR/SEO-visible);
// the component renders them as the info panel's "About" tab.
import FunctionTransformations from '../../../../app/components/functions/transformations/FunctionsTransformations'
import transformDiagrams from '../../../../app/components/functions/transformations/functionTransformationsDiagrams'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'


export async function getStaticProps(){

  const keyWords = [
    'function transformations',
    'transformations of functions',
    'function shift and scale',
    'horizontal shift',
    'vertical shift',
    'horizontal stretch',
    'vertical stretch',
    'function reflection',
    'g(x) = a f(b(x-h)) + k',
    'transformation visualizer',
    'interactive function transformation',
    'parent function transformation',
    'translate stretch reflect function',
    'function transformation rules',
    'graph transformation tool',
  ]

  const sectionsContent = {

    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Open the page and three panels appear. On the left is the **base function picker** — every family the visualizer supports (linear, quadratic, cubic, reciprocal, exponential, logarithmic, sine, cosine, absolute value, square root). In the center is the **plot panel** with two curves: a dashed gray line showing the untransformed base $f(x)$, and a solid blue curve showing the transformed $g(x)$. On the right is the **info panel** with a contextual explanation of whatever transformation you are currently studying.

Below the plot sit two interactive strips. The **applied chip strip** shows the current values of all four transformation parameters ($a$, $k$, $b$, $h$), with active (non-default) parameters highlighted in blue. Below it, a **tab bar** lets you isolate one transformation at a time or jump to a Custom tab where all four work simultaneously.

The page launches with quadratic as the base and all parameters at defaults — $g(x)$ sits exactly on top of $f(x)$. Drag any slider and the blue curve separates from the gray.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Picking a Base Function`,
      content: `The picker on the left lists ten base function families, with sine and cosine grouped together under "Trigonometric". Each entry shows a small glyph of the family's characteristic shape. Click to switch — the plot resets the transformed curve to match the base, and all four transformation parameters return to their defaults ($a = 1$, $b = 1$, $h = 0$, $k = 0$).

The base function controls only the *starting shape*. The four transformations work the same way for every family: $a$ scales vertically, $k$ shifts vertically, $b$ scales horizontally, $h$ shifts horizontally. What changes between families is how those transformations affect family-specific features — moving the vertex of a parabola, the asymptote of a reciprocal, the midline of a sinusoid, or the domain start of a square root.

Switching base functions resets parameters but preserves the active tab, so you can compare the same transformation across different bases without losing your place.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `The Four Tabs and the Custom Tab`,
      content: `Five tabs sit below the plot, controlling which transformation you study:

• [Vertical scale](!#the-vertical-scale) — isolates $a$. Only the slider for $a$ appears; $k$, $b$, $h$ stay at their defaults
• [Vertical shift](!#the-vertical-shift) — isolates $k$
• [Horizontal scale](!#the-horizontal-scale) — isolates $b$
• [Horizontal shift](!#the-horizontal-shift) — isolates $h$
• [Custom](!#combining-all-four-transformations) — shows all four sliders at once for combined transformations

When a single transformation has a non-default value, its tab badge shows that value in monospace. Switching tabs does not reset parameters — values you set in one tab persist when you move to another, so you can build up multiple transformations even from the single-parameter tabs.

The Reset button inside each tab resets only that tab's parameter; the Custom tab's Reset resets all four.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Manual vs Auto Mode`,
      content: `Each single-parameter tab (everything except Custom) has a **Manual / Auto** toggle at the top.

• **Manual** — the default. Drag the slider yourself. Every drag updates the plot, the equation, and the info panel.
• **Auto** — the slider becomes a playback control. Three buttons appear: step backward, play/pause, and step forward. Pressing play animates the parameter back and forth across its full range, ping-ponging between min and max indefinitely. The plot updates frame by frame, so you see exactly what the transformation does as the parameter sweeps.

Auto mode is the fastest way to build intuition for a single transformation. Set $a$ to auto and watch the parabola stretch, compress, and flip across the $x$-axis without your hands leaving the keyboard. Custom tab does not support Auto — combined transformations are designed for manual exploration.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Reading the Two Curves`,
      content: `The plot always shows two curves at once:

• **Dashed gray curve** — the untransformed base function $f(x)$. Stays fixed regardless of parameter values, so you always have a reference for what the transformation is doing
• **Solid blue curve** — the transformed function $g(x) = a \\cdot f(b(x - h)) + k$. Moves, stretches, and flips as you adjust parameters

Two equation badges in the plot header label the curves: the gray base equation (e.g., $f(x) = x^2$) and the blue transformed equation, which rewrites symbolically every time a parameter changes. When all four parameters are at their defaults, the equations are identical and the curves overlap exactly.

Crosshair, axis labels, and curve tooltips work the same as in any other visualizer in the series — mouse over the blue curve to read off $g(x)$ at the cursor position.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `The Applied Chip Strip`,
      content: `Just below the plot, a horizontal strip labeled "Applied" shows four chips: one each for $a$, $k$, $b$, and $h$. Each chip displays the parameter's current value in monospace.

When a parameter is at its default ($a = 1$, $b = 1$, $h = 0$, $k = 0$), its chip is grayed out — indicating that no transformation is currently being applied in that direction. When a parameter is non-default, its chip lights up blue and bolds, making the active transformations scannable at a glance.

The chip strip is especially useful in Custom mode, where multiple transformations can compound. A glance at the chips tells you exactly which transformations are active and at what magnitude, without having to read off four sliders.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `The Side Info Panel`,
      content: `The info panel on the right reads the current tab and the current base function and assembles a contextual explanation in two parts:

• **General** — what this transformation does, independent of the base function. The formula, the qualitative effects of positive and negative parameter values, the conditions for stretches versus compressions, and reflections
• **Applied to [base]** — what this specific parameter value does to *this* specific function family. The vertex of the parabola moves to $(h, k)$, the amplitude of the sine becomes $|a|$, the vertical asymptote of the reciprocal moves to $x = h$, and so on

When the parameter is at its default, the applied section reminds you that no transformation has been applied yet and prompts you to move the slider. Switch to the Custom tab and the info panel lists every non-default transformation in one place, each with its general formula and family-specific consequence.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `The Four Transformations Mathematically`,
      content: `The transformed function is

$$g(x) = a \\cdot f(b(x - h)) + k$$

Each parameter controls one type of transformation:

• $a$ — **vertical scale and reflection**. Multiplies outputs by $a$. $|a| > 1$ stretches vertically; $|a| < 1$ compresses; $a < 0$ reflects across the $x$-axis.
• $k$ — **vertical shift**. Adds $k$ to every output. Positive $k$ moves the curve up, negative moves it down. Shape is unchanged.
• $b$ — **horizontal scale and reflection**. Multiplies inputs by $b$. $|b| > 1$ *compresses* horizontally (counterintuitive); $|b| < 1$ stretches; $b < 0$ reflects across the $y$-axis.
• $h$ — **horizontal shift**. Subtracts $h$ from the input. Positive $h$ moves the curve *right* (the minus sign in $f(x - h)$ is the source of the inversion).

The four transformations commute in pairs (vertical with horizontal) but not across axes. The order in $g(x) = a \\cdot f(b(x - h)) + k$ is the canonical convention.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Why Horizontal Transformations Are "Backwards"`,
      content: `The most common stumbling block in function transformations is that horizontal operations behave opposite to what intuition suggests:

• Replacing $x$ with $x - h$ moves the graph **right** by $h$, not left
• Replacing $x$ with $bx$ where $b > 1$ **compresses** the graph horizontally, not stretches it

The reason is that the substitution acts on the *input* axis, not the output. If you want $g$ to take value $f(0)$ at $x = h$ (i.e. move that feature right to $h$), you need $g(h) = f(0)$, which means the input to $f$ must equal $0$ when $x = h$ — hence $f(x - h)$. Similarly, if $b$ doubles, you reach the same input value of $f$ in half the distance, so the curve compresses.

The visualizer makes this concrete: drag $h$ to $+3$ and watch the curve slide right by three units, in spite of the minus sign in the formula. Setting $b$ to auto and watching it sweep through the same effect is the quickest cure for the confusion.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Functions Families Gallery** — companion tool plotting twelve standard function families with parameter sliders; the natural prerequisite for this visualizer.

**Functions** — general theory of functions: domain, range, composition, inverses.

**Graphing Functions** — broader treatment of graph features (intercepts, asymptotes, end behavior) that transformations preserve or change.

**Parent Functions** — the canonical untransformed members of each family used as the starting point here.

**Composition of Functions** — how function composition relates to and generalizes the four affine transformations.

**Inverse Functions** — reflecting a graph across the line $y = x$, a transformation not covered here but built from the same conceptual toolkit.

**Equation and Inequality Visualizers** — companion tools for solving $f(x) = n$ and $f(x) > 0$ across all the same function families.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `The Vertical Scale`,
      content: `The parameter $a$ multiplies every output: $g(x) = a \\cdot f(x)$, stretching the curve away from the x-axis or squashing it toward it.`,
      before: ``,
      after: `The frozen $a = 2$ doubles every height of the parabola: same vertex, same axis crossings, twice the climb. Values between $0$ and $1$ flatten instead; negative values add a flip across the x-axis on top of the scaling.

Two things never move under $a$: the roots (heights of zero stay zero) and the x-positions of every feature. Vertical scaling is a pure output operation — the curve's horizontal anatomy is untouchable.

The animation mode makes the special values legible: watch the curve pass through the flatline at $a = 0$ and emerge inverted on the other side.`,
      link: '',
    },
    obj12: {
      title: `The Vertical Shift`,
      content: `The parameter $k$ adds a constant to every output: $g(x) = f(x) + k$, sliding the whole curve up or down as a rigid body.`,
      before: ``,
      after: `The frozen $k = 3$ lifts the parabola's vertex from the origin to $(0, 3)$ — and every other point by exactly the same amount. Nothing about the shape changes: distances, slopes, and widths all survive.

What does change is the curve's relationship to the x-axis: roots appear, merge, and vanish as the curve rises past it. Sliding $k$ on the parabola is watching the discriminant change sign in real time.

Together with the [horizontal shift](!#the-horizontal-shift), this pair forms the rigid motions; the two scales are the shape-changers.`,
      link: '',
    },
    obj13: {
      title: `The Horizontal Scale`,
      content: `The parameter $b$ multiplies the input before the function sees it: $g(x) = f(bx)$ — and the effect runs opposite to intuition.`,
      before: ``,
      after: `The frozen $b = 2$ makes the parabola **narrower**, not wider: with the input doubled, the curve reaches each height at half the distance. Compression by $b$, not expansion — the "backwards" behavior examined in [Why Horizontal Transformations Are "Backwards"](!#why-horizontal-transformations-are-backwards).

Fractional $b$ stretches; negative $b$ adds a y-axis flip. Heights are untouched — this is the exact mirror of the [vertical scale](!#the-vertical-scale), acting on the other axis.

On the parabola, $f(2x) = 4x^2$ happens to equal a vertical scaling by $4$ — a coincidence of the quadratic worth testing against sine, where no such disguise exists.`,
      link: '',
    },
    obj14: {
      title: `The Horizontal Shift`,
      content: `The parameter $h$ shifts inputs: $g(x) = f(x - h)$, sliding the curve along the x-axis — with the sign convention that trips everyone once.`,
      before: ``,
      after: `The frozen $h = 3$ moves the vertex to $x = 3$: *subtracting* $3$ inside the parentheses moves the curve to the *right*. The rule reads backwards until you see it from the input's side — the point that used to happen at $0$ now happens at $3$, because $3 - 3 = 0$.

Like the [vertical shift](!#the-vertical-shift), this is a rigid motion: shape perfectly preserved, position changed. Every feature — vertex, roots, extrema — translates by exactly $h$.

The badge convention in the tool keeps the sign honest: the chip shows $h = 3$, and the equation card writes $f(x - 3)$, letting you watch the notation and the geometry agree.`,
      link: '',
    },
    obj15: {
      title: `Combining All Four Transformations`,
      content: `The Custom tab opens all four sliders at once, assembling the full form $g(x) = a \\cdot f(b(x - h)) + k$ — the template every transformed function in this course fits.`,
      before: ``,
      after: `The frozen combination $0.5 \\cdot f(1.5(x - 2)) + 1$ shows all four at work: widened by the vertical scale, narrowed by the horizontal one, and carried to a new vertex at $(2, 1)$ by the two shifts.

Order matters inside the formula but not on the sliders: the expression applies $h$, then $b$, then $a$, then $k$ — input operations inside-out, output operations outside-in. The tool computes the composition correctly whatever order you drag in.

Reading a transformed formula backwards into its four moves is the skill this tab drills — and it is precisely the skill needed for [tangent lines under transformation](!#the-four-transformations-mathematically), for graph sketching, and for every "describe the transformation" exam question ever set.`,
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
      question: "What does the Transformations of Functions visualizer do?",
      answer: "It applies the four affine transformations — vertical scale, vertical shift, horizontal scale, and horizontal shift — to any of ten base function families. Two curves are plotted side by side: the dashed base function and the solid transformed function. Sliders let you isolate one transformation at a time or combine all four, and the info panel explains the effect on the chosen family in real time."
    },
    obj2: {
      question: "What is the general transformation formula?",
      answer: "Any combination of the four affine transformations can be written as g(x) equals a times f of b times (x minus h), plus k. Here a controls vertical scale and reflection, k is vertical shift, b is horizontal scale and reflection, and h is horizontal shift. The visualizer plots g(x) for any choice of these four parameters applied to any chosen base function."
    },
    obj3: {
      question: "Why does a positive h shift the graph to the right and not left?",
      answer: "The transformation replaces x with x minus h in the function. For g to take the same value at x equals h that f took at x equals zero, the input to f must equal zero when x equals h — which requires subtracting h from x. The minus sign in the formula and the rightward motion of the graph are two sides of the same fact: the substitution acts on the input axis, opposite to how the output moves."
    },
    obj4: {
      question: "What is the difference between the single-parameter tabs and the Custom tab?",
      answer: "Each single-parameter tab — Vertical scale, Vertical shift, Horizontal scale, Horizontal shift — exposes one parameter at a time with a Manual/Auto toggle so you can animate that single transformation. The Custom tab shows all four sliders simultaneously without Auto mode, letting you build combined transformations and explore how multiple effects compound."
    },
    obj5: {
      question: "How does Auto mode work?",
      answer: "Auto mode replaces manual slider control with a playback animation. The parameter sweeps back and forth across its full range, ping-ponging between minimum and maximum indefinitely. Step-backward and step-forward buttons let you advance frame by frame; the play/pause button stops or resumes the animation. Available on every single-parameter tab but not on Custom."
    },
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Transformations of Functions Visualizer",
      "description": "Interactive visualizer for the four affine transformations applied to any of ten base function families, with side-by-side base and transformed curves.",
      "url": "https://www.learnmathclass.com/functions/visual-tools/transformations",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Ten base function families: linear, quadratic, cubic, reciprocal, exponential, logarithmic, sine, cosine, absolute value, square root",
        "Four affine transformations isolated in their own tabs plus a Custom tab combining all four",
        "Dashed base curve and solid transformed curve plotted together for instant comparison",
        "Auto mode that animates a single parameter back and forth across its range with play, pause, and step controls",
        "Applied chip strip showing current parameter values with active transformations highlighted",
        "Side info panel with general explanation plus family-specific consequences of the current transformation",
        "Equation badges that rewrite symbolically as parameters change"
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
          "name": "Transformations of Functions",
          "item": "https://www.learnmathclass.com/functions/visual-tools/transformations"
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
  // two-curve scene + attached picture-reading panel, no link (own page).
  const stateUnits = {
    a: demoUnitFrame({ svg: transformDiagrams.a, caption: 'a = 2, frozen',
      text: 'Every height doubled: same vertex, same roots, twice the climb. The gray original shows what the blue curve left behind.' }),
    k: demoUnitFrame({ svg: transformDiagrams.k, caption: 'k = 3, frozen',
      text: 'The whole parabola lifted rigidly by 3 &#8212; shape untouched, vertex now at (0, 3), roots gone above the axis.' }),
    b: demoUnitFrame({ svg: transformDiagrams.b, caption: 'b = 2, frozen',
      text: 'Input doubled means the curve narrows: each height reached at half the distance &#8212; the famous backwards behavior.' }),
    h: demoUnitFrame({ svg: transformDiagrams.h, caption: 'h = 3, frozen',
      text: 'Subtracting 3 inside the parentheses slides the curve right: the vertex now lives at x = 3.' }),
    custom: demoUnitFrame({ svg: transformDiagrams.custom, caption: 'All four at once, frozen',
      text: 'Widened by a = 0.5, narrowed by b = 1.5, carried to (2, 1) by the shifts &#8212; the full template in one picture.' }),
  };

  // Canonical per-tab explanations for the info panel's About tab
  // (SSR/SEO-visible; keyed by the tool's tab keys).
  const explanations = {
    a:
      '**Vertical scale** $g(x) = a \\cdot f(x)$ — a pure output operation: heights scale, roots and x-positions never move.\n\n' +
      '[Learn more about the vertical scale](!#the-vertical-scale) · [All five tabs](!#the-four-tabs-and-the-custom-tab)',
    k:
      '**Vertical shift** $g(x) = f(x) + k$ — a rigid slide up or down: shape preserved, axis crossings changing as the curve passes the x-axis.\n\n' +
      '[Learn more about the vertical shift](!#the-vertical-shift) · [All five tabs](!#the-four-tabs-and-the-custom-tab)',
    b:
      '**Horizontal scale** $g(x) = f(bx)$ — the backwards one: $b > 1$ compresses, fractions stretch, negatives flip across the y-axis.\n\n' +
      '[Learn more about the horizontal scale](!#the-horizontal-scale) · [All five tabs](!#the-four-tabs-and-the-custom-tab)',
    h:
      '**Horizontal shift** $g(x) = f(x - h)$ — minus inside means motion right: the input that used to happen at 0 now happens at $h$.\n\n' +
      '[Learn more about the horizontal shift](!#the-horizontal-shift) · [All five tabs](!#the-four-tabs-and-the-custom-tab)',
    custom:
      '**Custom** $g(x) = a \\cdot f(b(x - h)) + k$ — all four moves composed: input operations inside-out, output operations outside-in.\n\n' +
      '[Learn more about combining transformations](!#combining-all-four-transformations) · [All five tabs](!#the-four-tabs-and-the-custom-tab)',
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
        title: "Function Transformations Visualizer | Shift, Scale, Reflect",
        description: "Visualize the four affine transformations on ten base function families. Isolate vertical/horizontal shifts and scales or combine them, with live base + transformed plots.",
        keywords: keyWords.join(", "),
        url: "/functions/visual-tools/transformations",
        name: "Transformations of Functions Visualizer",
        hubDescription: "Pick a base function — linear, quadratic, cubic, reciprocal, exponential, logarithmic, sine, cosine, absolute value, or square root — and apply the four affine transformations: g(x) = a · f(b(x − h)) + k. Isolate one transformation at a time with Auto-mode animation, or combine all four in the Custom tab. The dashed base curve stays visible alongside the transformed curve so every change reads at a glance.",
        category: "Transformations",
        subCategory: ""
      },
    }
  }
}


export default function FunctionTransformationsPage({seoData, sectionsContent, introContent, faqQuestions, schemas, explanations, stateUnits}) {

  const unit = (key) => <div key={'u-' + key} dangerouslySetInnerHTML={{ __html: stateUnits[key] }} />;

  const genericSections = [
    { id:'getting-started-with-the-visualizer', title:sectionsContent.obj1.title, link:sectionsContent.obj1.link, content:[sectionsContent.obj1.content] },
    { id:'picking-a-base-function', title:sectionsContent.obj2.title, link:sectionsContent.obj2.link, content:[sectionsContent.obj2.content] },
    { id:'the-four-tabs-and-the-custom-tab', title:sectionsContent.obj3.title, link:sectionsContent.obj3.link, content:[sectionsContent.obj3.content] },
    { id:'manual-vs-auto-mode', title:sectionsContent.obj4.title, link:sectionsContent.obj4.link, content:[sectionsContent.obj4.content] },
    { id:'reading-the-two-curves', title:sectionsContent.obj5.title, link:sectionsContent.obj5.link, content:[sectionsContent.obj5.content] },
    { id:'the-applied-chip-strip', title:sectionsContent.obj6.title, link:sectionsContent.obj6.link, content:[sectionsContent.obj6.content] },
    { id:'the-side-info-panel', title:sectionsContent.obj7.title, link:sectionsContent.obj7.link, content:[sectionsContent.obj7.content] },
    { id:'the-four-transformations-mathematically', title:sectionsContent.obj8.title, link:sectionsContent.obj8.link, content:[sectionsContent.obj8.content] },
    { id:'why-horizontal-transformations-are-backwards', title:sectionsContent.obj9.title, link:sectionsContent.obj9.link, content:[sectionsContent.obj9.content] },
    { id:'the-vertical-scale', title:sectionsContent.obj11.title, link:sectionsContent.obj11.link, content:[sectionsContent.obj11.content, unit('a'), sectionsContent.obj11.after] },
    { id:'the-vertical-shift', title:sectionsContent.obj12.title, link:sectionsContent.obj12.link, content:[sectionsContent.obj12.content, unit('k'), sectionsContent.obj12.after] },
    { id:'the-horizontal-scale', title:sectionsContent.obj13.title, link:sectionsContent.obj13.link, content:[sectionsContent.obj13.content, unit('b'), sectionsContent.obj13.after] },
    { id:'the-horizontal-shift', title:sectionsContent.obj14.title, link:sectionsContent.obj14.link, content:[sectionsContent.obj14.content, unit('h'), sectionsContent.obj14.after] },
    { id:'combining-all-four-transformations', title:sectionsContent.obj15.title, link:sectionsContent.obj15.link, content:[sectionsContent.obj15.content, unit('custom'), sectionsContent.obj15.after] },
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'30px'}}>Transformations of Functions</h1>
      <br/>
      <div style={{transform:'scale(1.1)'}}>
      <FunctionTransformations explanations={explanations}/>
      </div>
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