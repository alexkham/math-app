import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import InequalityVisualizer from '../../../../app/components/algebra/inequalities/visualizer/InequalityVisualizer'


export async function getStaticProps(){

  const keyWords = [
    'inequality visualizer',
    'solve inequality graphically',
    'f(x) > 0 visualizer',
    'interactive inequality solver',
    'visual inequality solver',
    'sign chart inequality',
    'inequality solution set',
    'inequality intervals',
    'linear inequality visualizer',
    'quadratic inequality visualizer',
    'polynomial inequality solver',
    'rational inequality visualizer',
    'inequality step by step',
    'algebra inequality tool',
    'strict vs non-strict inequality',
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `
- **Inequality** $f(x) > 0$ (or $<, \\geq, \\leq$) — a statement asking which $x$ make $f(x)$ positive, negative, non-negative, or non-positive
- **Solution set** — the set of all $x$ satisfying the inequality, typically a union of intervals on the real line
- **Direction** — which comparison the inequality uses: $>$, $<$, $\\geq$, or $\\leq$
- **Strictness** — whether the inequality is strict ($>$, $<$) or non-strict ($\\geq$, $\\leq$); affects whether boundary points belong to the solution
- **Sign chart** — a table tracking the sign of $f(x)$ across intervals separated by its zeros and undefined points
- **Critical point** — a zero of $f(x)$ or a point where $f$ is undefined; the only places the sign of $f(x)$ can change
- **Factor** — one of the building blocks of $f(x)$ when written as a product; each gets its own row in the sign chart
- **Interval** — a maximal piece of the real line on which $f(x)$ has constant sign
- **Marble** — the draggable probe positioned at some $x$ in the visualizer; lets you read off the sign of $f(x)$ at that point
- **Pole** — a point where $f$ is undefined (typically a denominator zero); excluded from the solution set regardless of strictness
`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Open the explorer and you see a curve $y = f(x)$ with a draggable marble sitting on it. The inequality currently being solved is displayed symbolically above the graph (e.g. $f(x) > 0$), with each factor of $f$ rendered as a clickable element.

The layout has two columns. On the left, the **Hero panel** shows the inequality and the curve with the marble; the **Controls panel** below it holds the type tabs, parameter sliders, templates, direction and strictness toggles, and interaction modes. On the right, the **Sign chart panel** displays signs of every factor across every interval, and the **Explanation panel** narrates the current step or live reading.

The whole interface is wired together: hovering or clicking a factor in the inequality highlights its row in the sign chart; clicking a column in the sign chart moves the marble; clicking a row in the explanation panel does the same. Everything stays in sync.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Selecting an Inequality Type`,
      content: `The **type bar** at the top of the page is a row of tabs, one per inequality family the visualizer supports. Each tab carries a tooltip describing its structure. Click a tab to switch families.

Switching the type does three things at once:

• The graph updates to show the new function $f(x)$
• The parameter sliders below reconfigure to match the new family's parameters
• The sign chart rebuilds with a new set of factors and intervals

The currently active type is highlighted in blue. Common families include linear, quadratic, polynomial, and rational forms — each leading to a different sign-chart structure. Higher-degree types produce more factors and more critical points, but the solution-set logic is identical across all of them.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Direction and Strictness`,
      content: `Two controls determine *which* inequality you are solving for the current $f(x)$:

• **Direction** — choose between $>$, $<$, $\\geq$, or $\\leq$. Selecting $>$ asks for $x$ where $f(x)$ is positive; selecting $\\leq$ asks for $x$ where $f(x)$ is non-positive
• **Strictness** — toggles between strict ($>$, $<$) and non-strict ($\\geq$, $\\leq$). The strict and non-strict versions of an inequality differ only at the boundary points (zeros of $f$): strict excludes them, non-strict includes them

Strictness has a visible effect on the solution set: boundary points render as open circles for strict comparisons and filled circles for non-strict ones. Poles — points where $f$ is undefined — are always excluded, regardless of strictness, because $f(x)$ has no value there to compare against zero.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Three Interaction Modes and Keyboard Shortcuts`,
      content: `The Controls panel offers three modes for moving the marble, each grouped behind its own button. Only one is active at a time.

• **Drag** — grab the marble with the mouse and slide it along the $x$-axis. Hold shift to snap to integer values
• **Step** — Previous and Next buttons jump the marble between named stops: critical points, midpoints of intervals, and other landmarks
• **Auto** — the marble plays back the sequence of stops automatically, with a speed slider for playback rate

Keyboard shortcuts work whenever the page has focus and you are not in an input:

• **Arrow Left / Arrow Right** — nudge the marble by $0.1$; Shift nudges by $1$
• **[** and **]** — step the marble to the previous or next named stop
• **Space** — toggle play/pause in auto mode, or switch to auto mode
• **R** — reset all parameters, marble position, and mode to defaults`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Adjusting Parameters and Using Templates`,
      content: `Each inequality type has its own **parameter sliders**, laid out in a three-column grid below the graph. Drag a slider, click a tick to snap to a notable value, or type directly into the numeric input. Sliders that hit invalid combinations (such as a denominator forced to zero) display a red error chip with the reason.

Each parameter has a value chip showing whether it is positive (blue), negative (amber), or zero (dashed). The mode toggle next to the chip switches between slider and numeric input for finer control.

Above the sliders, the **Templates** strip offers a few preset parameter combinations for the current type — useful starting points for common shapes like "no solution", "solution is a single interval", "solution is two disjoint intervals", and similar. Click a template to load it.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Reading the Sign Chart`,
      content: `The **Sign chart panel** on the right is a compact table tracking the sign of $f(x)$ across the real line. Reading it top to bottom:

• **Header row** — the critical $x$-values (zeros of $f$ and any poles), in increasing order, dividing the real line into intervals
• **Factor rows** — for each factor of $f$, a row of $+$, $-$, or $0$ entries showing the sign of that factor in each interval
• **Product row** — highlighted, gives the sign of $f(x)$ itself in each interval, computed by multiplying the factor signs
• **Pole columns** — points where $f$ is undefined, marked in red

The chart is interactive. Hover or click any factor in the inequality above to highlight its row. Click an interval cell to send the marble there. Click a critical-point column to land the marble exactly on the boundary. The same highlighting flows from the explanation panel and the curve, so every part of the interface points at the same intervals.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Reading the Explanation Panel`,
      content: `The **Explanation panel** below the sign chart has two tabs.

• **Steps** — a numbered list reconstructing the standard solving procedure: identify the factors of $f$, locate their zeros and any poles, build the sign chart, pick the intervals matching the chosen direction, and assemble the solution set with the right boundary inclusion. Each step is tied directly to what is on screen.
• **Live** — a compact table that recomputes whenever the marble moves. It shows the marble's $x$, the sign of each factor at that $x$, the combined sign of $f(x)$, and ends with a verdict: does the inequality hold at this $x$?

If the marble sits at a pole, the Live tab flags $f(x)$ as undefined and notes that this $x$ is excluded from the solution set. A short verbal summary below the table phrases the conclusion in plain language.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What an Inequality Means Geometrically`,
      content: `The inequality $f(x) > 0$ asks for every $x$ at which the graph $y = f(x)$ sits *above* the $x$-axis. The inequality $f(x) < 0$ asks for every $x$ where the graph sits *below*. The non-strict versions $\\geq$ and $\\leq$ include the boundary points where the graph touches the $x$-axis.

Unlike equations — whose solutions are typically isolated points where the curve crosses a level — inequalities have solution sets that are *regions* of the real line, almost always unions of intervals. A linear inequality has one half-line as its solution; a quadratic produces either a bounded interval, two unbounded intervals, an empty set, or the whole real line; rational inequalities can have arbitrarily many disjoint pieces.

The solution set changes whenever the sign of $f(x)$ changes, which happens only at zeros or poles. That is why the sign chart, which catalogs those exact points, is the natural tool for solving any inequality.

For comprehensive theory on inequalities, see **inequalities theory**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `How the Sign Chart Builds the Solution Set`,
      content: `Given the sign chart, building the solution set is mechanical:

1. **Pick the rows matching the direction**. For $f(x) > 0$ or $f(x) \\geq 0$, look at intervals where the product row is $+$. For $f(x) < 0$ or $f(x) \\leq 0$, look where it is $-$.
2. **Include or exclude boundary zeros** based on strictness. Strict comparisons exclude zeros (open intervals); non-strict comparisons include them (closed intervals).
3. **Always exclude poles**. Even with non-strict comparisons, points where $f$ is undefined cannot be in the solution.
4. **Take the union** of all qualifying intervals. The result is the solution set, written in interval notation.

Every inequality of this kind reduces to this procedure once the sign chart is built. The visualizer carries out each step on screen — colored intervals on the curve, highlighted columns in the chart, and a final interval-notation summary in the explanation panel.

For the companion equation case, see **equations visualizer**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Inequalities** — the general theory of inequalities, methods of solution, and classification by type.

**Equation Visualizer** — the companion tool for $f(x) = n$; uses the same marble-and-sign-chart layout but solves for discrete points rather than interval sets.

**Linear Inequalities** — the simplest case, where $f$ is degree one and the solution is a single half-line.

**Quadratic Inequalities** — degree-two case, where the discriminant determines whether the solution is a bounded interval, two unbounded intervals, the empty set, or the whole real line.

**Polynomial Inequalities** — higher-degree cases that can have arbitrarily many intervals in their solution set, each bounded by a real root.

**Rational Inequalities** — inequalities of the form $p(x)/q(x) > 0$, where poles at zeros of $q$ are always excluded from the solution.

**Sign Charts** — the general technique for tracking the sign of a function across intervals.

**Interval Notation** — the standard notation for expressing inequality solution sets as unions of intervals.`,
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
      question: "What does the Inequality Visual Explorer do?",
      answer: "It solves inequalities of the form f(x) compared to zero — strictly greater, strictly less, greater or equal, or less or equal. A curve representing f(x) is plotted against the x-axis, and the solution set is the union of intervals where the curve has the right sign. You drag a marble to probe values, and the sign chart of f(x) shows the structure of the solution interval by interval."
    },
    obj2: {
      question: "What inequality types can the visualizer handle?",
      answer: "Multiple inequality families are supported via the type tabs at the top of the page, including linear, quadratic, polynomial, and rational forms. Each type has its own parameter sliders so you can adjust the shape of the curve, and the sign chart and explanation panel rebuild automatically when you switch types."
    },
    obj3: {
      question: "What is the difference between strict and non-strict inequalities?",
      answer: "Strict inequalities use greater than or less than and exclude the boundary points where f(x) equals zero. Non-strict inequalities use greater or equal or less or equal and include those boundary points. The visualizer's strictness toggle controls this: boundary points render as open circles when strict and filled circles when non-strict. Poles, where f is undefined, are always excluded regardless of strictness."
    },
    obj4: {
      question: "How do I read the sign chart?",
      answer: "Each column in the sign chart corresponds to an interval bounded by critical points (zeros of f and any poles), and each row corresponds to a factor of f. Entries are plus, minus, or zero showing the sign of that factor in that interval. The highlighted product row at the bottom gives the sign of f(x) itself, and intervals where its sign matches the inequality direction are part of the solution set."
    },
    obj5: {
      question: "Why are poles always excluded from the solution?",
      answer: "A pole is an x-value where f is undefined, typically a zero of the denominator in a rational expression. At such a point, f(x) has no value to compare against zero, so the inequality cannot be evaluated. Poles are excluded even when the comparison is non-strict, because non-strictness only governs whether zeros of f are included, not points where f itself fails to exist."
    },
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Inequality Visual Explorer",
      "description": "Interactive visualizer for solving inequalities f(x) > 0, < 0, ≥ 0, ≤ 0 by dragging a marble along the curve. Switch types, change direction and strictness, and read the sign chart of f(x).",
      "url": "https://www.learnmathclass.com/algebra/visual-tools/inequality",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Draggable marble probe along the curve y = f(x) compared against the x-axis",
        "Multiple inequality families selectable from a top type bar with per-family parameter sliders",
        "Direction toggle for greater, less, greater-or-equal, and less-or-equal comparisons",
        "Strictness toggle that switches boundary inclusion between open and closed",
        "Sign chart of f(x) broken down factor by factor with interactive intervals, columns, and pole columns",
        "Three interaction modes: free drag, step through named stops, and auto-play with adjustable speed",
        "Explanation panel with Steps tab for guided solution and Live tab for real-time check at the current marble position",
        "Keyboard shortcuts for nudging, stepping, play/pause, and reset"
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
          "name": "Algebra",
          "item": "https://www.learnmathclass.com/algebra"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/algebra/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Inequality Visual Explorer",
          "item": "https://www.learnmathclass.com/algebra/visual-tools/inequality"
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
        title: "Inequality Visual Explorer | Solve f(x) > 0 Visually",
        description: "Solve inequalities like f(x) > 0 by dragging a marble along the curve. Switch types, change direction and strictness, and read the sign chart of f(x).",
        keywords: keyWords.join(", "),
        url: "/algebra/visual-tools/inequality",
        name: "Inequality Visual Explorer",
        hubDescription: "Drag a marble along the x-axis and watch which intervals satisfy the inequality. Switch between linear, quadratic, polynomial, and rational inequality families, toggle the direction between greater, less, and their non-strict variants, and read the sign chart that builds the solution set interval by interval.",
        category: "",
        subCategory: "",
        image:'/visual-tools/greater2.jpg'

      },
    }
  }
}


export default function InequalityVisualExplorerPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

  const genericSections = [
    { id:'0',  title:sectionsContent.obj0.title,  link:sectionsContent.obj0.link,  content:[sectionsContent.obj0.content] },
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'-30px'}}>Inequality Visual Explorer</h1>
      <br/>
      <div style={{transform:'scale(0.95)'}}>
        <InequalityVisualizer/>
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