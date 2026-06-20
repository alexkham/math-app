


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import FunctionTransformations from '../../../../app/components/functions/transformations/FunctionsTransformations'


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

• **Vertical scale** — isolates $a$. Only the slider for $a$ appears; $k$, $b$, $h$ stay at their defaults
• **Vertical shift** — isolates $k$
• **Horizontal scale** — isolates $b$
• **Horizontal shift** — isolates $h$
• **Custom** — shows all four sliders at once for combined transformations

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

• **$a$ — vertical scale and reflection**. Multiplies outputs by $a$. $|a| > 1$ stretches vertically; $|a| < 1$ compresses; $a < 0$ reflects across the $x$-axis.
• **$k$ — vertical shift**. Adds $k$ to every output. Positive $k$ moves the curve up, negative moves it down. Shape is unchanged.
• **$b$ — horizontal scale and reflection**. Multiplies inputs by $b$. $|b| > 1$ *compresses* horizontally (counterintuitive); $|b| < 1$ stretches; $b < 0$ reflects across the $y$-axis.
• **$h$ — horizontal shift**. Subtracts $h$ from the input. Positive $h$ moves the curve *right* (the minus sign in $f(x - h)$ is the source of the inversion).

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

    obj11: { title:``, content:``, before:``, after:``, link:'' },
    obj12: { title:``, content:``, before:``, after:``, link:'' },
    obj13: { title:``, content:``, before:``, after:``, link:'' },
    obj14: { title:``, content:``, before:``, after:``, link:'' },
    obj15: { title:``, content:``, before:``, after:``, link:'' },
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


  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
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


export default function FunctionTransformationsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

  const genericSections = [
    { id:'1',  title:sectionsContent.obj1.title,  link:sectionsContent.obj1.link,  content:[sectionsContent.obj1.content] },
    { id:'2',  title:sectionsContent.obj2.title,  link:sectionsContent.obj2.link,  content:[sectionsContent.obj2.content] },
    { id:'3',  title:sectionsContent.obj3.title,  link:sectionsContent.obj3.link,  content:[sectionsContent.obj3.content] },
    { id:'4',  title:sectionsContent.obj4.title,  link:sectionsContent.obj4.link,  content:[sectionsContent.obj4.content] },
    { id:'5',  title:sectionsContent.obj5.title,  link:sectionsContent.obj5.link,  content:[sectionsContent.obj5.content] },
    { id:'6',  title:sectionsContent.obj6.title,  link:sectionsContent.obj6.link,  content:[sectionsContent.obj6.content] },
    { id:'7',  title:sectionsContent.obj7.title,  link:sectionsContent.obj7.link,  content:[sectionsContent.obj7.content] },
    { id:'8',  title:sectionsContent.obj8.title,  link:sectionsContent.obj8.link,  content:[sectionsContent.obj8.content] },
    { id:'9',  title:sectionsContent.obj9.title,  link:sectionsContent.obj9.link,  content:[sectionsContent.obj9.content] },
    { id:'10', title:sectionsContent.obj10.title, link:sectionsContent.obj10.link, content:[sectionsContent.obj10.content] },
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
      <FunctionTransformations/>
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