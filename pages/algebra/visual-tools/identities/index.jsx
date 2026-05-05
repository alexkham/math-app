
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../../pages/pages.css'
import Head from 'next/head'
import Link from 'next/link'


export async function getStaticProps(){

  const keyWords = [
    "algebraic identities",
    "visual algebra proofs",
    "geometric proofs of identities",
    "square of sum visualization",
    "square of difference visualization",
    "square of trinomial visualization",
    "difference of squares visualization",
    "(a+b)^2 proof",
    "(a-b)^2 proof",
    "(a+b+c)^2 proof",
    "a^2 - b^2 proof",
    "interactive algebra tools",
    "visual mathematics",
    "algebra geometric dissection",
    "animated algebraic identities"
  ]

  const sectionsContent = {

    obj1: {
      title: `What These Visualizers Do`,
      content: `Each visualizer in this collection turns one algebraic identity into an animated geometric proof. A square is built, marked, cut, and rearranged step by step. At the end, the same area is described two ways — and that double description is the identity.

Every tool follows the same four-step rhythm: a **starting square** that represents the identity's left-hand side, a **labelling step** that splits sides into named segments, a **dissection or rearrangement** that physically reorganises the area, and a **summing step** that adds up the pieces to produce the right-hand side. Across the four identities the specifics differ — what gets cut, what overlaps, what rotates — but the underlying argument is always the same: total area is preserved, only its arrangement changes.

The animation is paired with a written step panel that updates as you move forward. By the time you reach the final step, the equation has been built piece by piece, and you can read it directly off the diagram instead of recalling it from memory.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Learning by Watching Areas Move`,
      content: `Algebraic identities are usually presented as formulas to memorise. The visual approach replaces memorisation with a physical argument that you can watch happen. Two ideas do most of the work:

• **Area is conserved under cutting and rearranging.** Slice a square into pieces and slide them around — the total area never changes. So if a shape can be described two different ways before and after, those two descriptions must be equal as numbers.

• **Each term in the expansion corresponds to a specific piece.** Instead of $2ab$ being "a coefficient with a 2 in front", it becomes two visibly identical rectangles sitting at opposite corners. Instead of $-2ab$ being a sign rule, it becomes two strips that overlap on a patch counted twice. The sign and the coefficient stop being arbitrary — they are forced by what you see.

This is why the visual proofs tend to stick. You are not remembering a formula; you are remembering a picture, and the formula is what the picture says.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Step Through at Your Own Pace`,
      content: `Every visualizer ships with the same set of controls so you can watch the proof in whatever way suits you best:

• **Play** runs the entire animation end to end. Useful for a first overview before going deeper.

• **Step Forward / Step Back** advance or reverse one transition at a time. Useful when you want to study a specific move — a rotation, a colour fill, an overlap — without it slipping past.

• **Pause** halts whatever is moving without losing position, so you can stop on a frame that matters.

• **Speed** ranges from 0.5× to 2×. Slower for first viewings; faster for review.

• **Reset** returns to step 1 and replays the intro fade-in.

This is why the visualizers reward repeated viewing. The first pass at default speed gives you the overall shape of the proof. A second pass stepping through manually lets you stop on each transition and ask "where did that piece come from? where did it go?" By the third pass the proof has stopped being a sequence of moves and started being a single object you understand all at once.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Pick a Visualizer`,
      content: `Each visualizer has its own dedicated page with a deeper write-up of how the proof works, what the controls do, and why the geometry matches the algebra. Use the brief descriptions below to pick a starting point.

<span id="sum"></span>**Square of a Sum** — $(a+b)^2 = a^2 + 2ab + b^2$. The cleanest entry point: a square is sliced by a 2×2 grid into four rectangles, and the four areas are read off. Best place to start if you have not seen this style of proof before. **Open Square of a Sum visualizer**.

<span id="difference"></span>**Square of a Difference** — $(a-b)^2 = a^2 - 2ab + b^2$. Two strips cover the square but overlap on a small corner; the discard step explains why the middle term is negative and the last term is positive. Best for understanding sign behaviour. **Open Square of a Difference visualizer**.

<span id="trinomial"></span>**Square of a Trinomial** — $(a+b+c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc$. Extends the binomial-square argument to three terms with a 3×3 grid. The final explosion view separates the nine pieces. Best after you are comfortable with the binomial case. **Open Square of a Trinomial visualizer**.

<span id="diff-of-squares"></span>**Difference of Squares** — $a^2 - b^2 = (a+b)(a-b)$. A small square is removed from a larger one; the resulting L-shape is sliced and rotated into a rectangle whose sides are exactly the two factors. Best for understanding factoring geometrically. **Open Difference of Squares visualizer**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Related Concepts and Tools`,
      content: `These visualization tools connect to broader algebra concepts and resources:

**Theoretical Foundations:**

• **Polynomials** — Polynomial structure, terms, degrees, and standard operations.

• **Factoring** — Common polynomial factorings including the difference of squares and perfect square trinomials.

• **Exponents and Powers** — Power rules and the laws of exponents that underlie squaring and higher powers.

**Reference Tools:**

• **Powers Table** — Searchable reference of integer powers, useful for spotting perfect squares and computing $(a+b)^2$ for specific values.

**More Visual Tools:**

• **Algebra Visual Tools** — Index of all interactive algebra visualizations and proofs, including this identity collection.`,
      before: ``,
      after: ``,
      link: '',
    },

  }

  const faqQuestions = {
    obj1: {
      question: "What is an algebraic identity?",
      answer: "An algebraic identity is an equation that holds true for every value of its variables. For example, (a+b)^2 = a^2 + 2ab + b^2 is true for any numbers a and b. Identities differ from regular equations because they describe a permanent algebraic relationship rather than a problem to solve for a specific value."
    },
    obj2: {
      question: "Why prove algebraic identities geometrically?",
      answer: "Geometric proofs replace symbol manipulation with area arguments. A square is cut into pieces and rearranged; the total area is preserved, so the algebraic equation follows from comparing the before and after configurations. This builds intuition through spatial reasoning and makes each term in the expansion visible as a specific piece of the diagram."
    },
    obj3: {
      question: "Which identity visualizer should I use?",
      answer: "Use Square of a Sum for (a+b)^2 expansions and to see the source of the 2ab middle term. Use Square of a Difference for (a-b)^2 and to understand why the middle term is negative. Use Square of a Trinomial for (a+b+c)^2 to extend binomial intuition to three terms. Use Difference of Squares for factoring a^2 - b^2 into (a+b)(a-b)."
    },
    obj4: {
      question: "Are these geometric proofs rigorous?",
      answer: "Yes. Each animated dissection is a valid mathematical proof: every piece is accounted for, total area is preserved through the rearrangement, and the final equation follows from comparing area expressions before and after. The visual matches the algebra exactly, which is the standard for a geometric proof."
    },
    obj5: {
      question: "Are these tools free to use?",
      answer: "Yes, all algebraic identity visualizers are completely free with no registration required. They run directly in your browser with interactive controls including animation playback, step navigation, and adjustable speed."
    }
  }

  const schemas = {
    collectionPage: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Algebraic Identities Visualizations",
      "description": "Interactive visual proofs of fundamental algebraic identities through geometric dissection.",
      "url": "https://www.learnmathclass.com/algebra/visual-tools/identities",
      "inLanguage": "en-US",
      "about": {
        "@type": "Thing",
        "name": "Algebraic Identities"
      },
      "keywords": keyWords.join(", "),
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "hasPart": [
        {
          "@type": "WebPage",
          "name": "Square of a Sum (a+b)²",
          "url": "https://www.learnmathclass.com/algebra/visual-tools/identities/square-of-sum",
          "description": "Interactive visual proof of (a+b)² = a² + 2ab + b² by geometric dissection."
        },
        {
          "@type": "WebPage",
          "name": "Square of a Difference (a-b)²",
          "url": "https://www.learnmathclass.com/algebra/visual-tools/identities/square-of-difference",
          "description": "Interactive visual proof of (a-b)² = a² - 2ab + b² by geometric dissection."
        },
        {
          "@type": "WebPage",
          "name": "Square of a Trinomial (a+b+c)²",
          "url": "https://www.learnmathclass.com/algebra/visual-tools/identities/square-of-trinomial",
          "description": "Interactive visual proof of (a+b+c)² expansion through a 3x3 grid of pieces."
        },
        {
          "@type": "WebPage",
          "name": "Difference of Squares a² - b²",
          "url": "https://www.learnmathclass.com/algebra/visual-tools/identities/difference-of-squares",
          "description": "Interactive visual proof of a² - b² = (a+b)(a-b) by slice and rearrange."
        }
      ]
    },

    itemList: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Square of a Sum Visualization",
            "url": "https://www.learnmathclass.com/algebra/visual-tools/identities/square-of-sum",
            "applicationCategory": "EducationalApplication",
            "description": "Interactive visual proof of (a+b)² = a² + 2ab + b²"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Square of a Difference Visualization",
            "url": "https://www.learnmathclass.com/algebra/visual-tools/identities/square-of-difference",
            "applicationCategory": "EducationalApplication",
            "description": "Interactive visual proof of (a-b)² = a² - 2ab + b²"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Square of a Trinomial Visualization",
            "url": "https://www.learnmathclass.com/algebra/visual-tools/identities/square-of-trinomial",
            "applicationCategory": "EducationalApplication",
            "description": "Interactive visual proof of (a+b+c)² expansion"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Difference of Squares Visualization",
            "url": "https://www.learnmathclass.com/algebra/visual-tools/identities/difference-of-squares",
            "applicationCategory": "EducationalApplication",
            "description": "Interactive visual proof of a² - b² = (a+b)(a-b)"
          }
        }
      ]
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
          "name": "Identities",
          "item": "https://www.learnmathclass.com/algebra/visual-tools/identities"
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
      faqQuestions,
      schemas,
      seoData: {
        title: "Algebraic Identities - Interactive Visual Proofs | Learn Math Class",
        description: "Explore fundamental algebraic identities through interactive geometric dissection. Visual proofs for (a+b)², (a-b)², (a+b+c)², and a²-b².",
        keywords: keyWords.join(", "),
        url: "/algebra/visual-tools/identities",
        name: "Algebraic Identities Visualizations"
      },
    }
  }
}

export default function AlgebraicIdentitiesLanding({seoData, sectionsContent, faqQuestions, schemas}) {

  const genericSections = [
    {
      id: '1',
      title: sectionsContent.obj1.title,
      link: '',
      content: sectionsContent.obj1.content
    },
    {
      id: '2',
      title: sectionsContent.obj2.title,
      link: '',
      content: sectionsContent.obj2.content
    },
    {
      id: '3',
      title: sectionsContent.obj3.title,
      link: '',
      content: sectionsContent.obj3.content
    },
    {
      id: '4',
      title: sectionsContent.obj4.title,
      link: '',
      content: sectionsContent.obj4.content
    },
    {
      id: '5',
      title: sectionsContent.obj5.title,
      link: '',
      content: sectionsContent.obj5.content
    }
  ]

  const cards = [
    {
      formula: '(a + b)²',
      label: 'Square of a Sum',
      expansion: 'a² + 2ab + b²',
      blurb: 'Watch a square split into a 2×2 grid of four rectangles. The two identical ab pieces sit at opposite corners — the source of the doubled middle term. The cleanest entry point if you have not seen this style of proof before.',
      viewHref: '/algebra/visual-tools/identities/square-of-sum',
      readMoreHref: '#sum'
    },
    {
      formula: '(a − b)²',
      label: 'Square of a Difference',
      expansion: 'a² − 2ab + b²',
      blurb: 'Two ab strips cover an a-square but overlap on a small b² corner. The discard step makes the negative middle term unmistakable — the minus sign is geometry, not a rule to memorise.',
      viewHref: '/algebra/visual-tools/identities/square-of-difference',
      readMoreHref: '#difference'
    },
    {
      formula: '(a + b + c)²',
      label: 'Square of a Trinomial',
      expansion: 'a² + b² + c² + 2ab + 2ac + 2bc',
      blurb: 'The binomial-square argument extended to three terms. A 3×3 grid produces nine pieces — three squared terms on the diagonal and three pairs of cross-products that explode outward in the final view.',
      viewHref: '/algebra/visual-tools/identities/square-of-trinomial',
      readMoreHref: '#trinomial'
    },
    {
      formula: 'a² − b²',
      label: 'Difference of Squares',
      expansion: '(a + b)(a − b)',
      blurb: 'A small square is cut from a larger one. The L-shape that remains slices into two rectangles, and one rotates 90° to fit beside the other — forming a rectangle whose sides are the two factors. Geometric factoring at its clearest.',
      viewHref: '/algebra/visual-tools/identities/difference-of-squares',
      readMoreHref: '#diff-of-squares'
    }
  ]

  const cardStyles = {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px',
      margin: '40px auto',
      maxWidth: '1200px',
      padding: '0 20px',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #d8e1ec',
      borderRadius: '10px',
      padding: '28px 26px',
      backgroundColor: '#ffffff',
      boxShadow: '0 1px 3px rgba(20, 58, 102, 0.06), 0 4px 12px rgba(20, 58, 102, 0.04)',
      transition: 'transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease',
      fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
    },
    label: {
      fontSize: '13px',
      letterSpacing: '0.8px',
      textTransform: 'uppercase',
      color: '#6b7a8f',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontWeight: 600,
      marginBottom: '10px',
    },
    formula: {
      fontSize: '32px',
      fontWeight: 500,
      fontStyle: 'italic',
      color: '#143a66',
      fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
      marginBottom: '6px',
      lineHeight: 1.1,
    },
    expansion: {
      fontSize: '17px',
      fontStyle: 'italic',
      color: '#2c5d99',
      fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
      marginBottom: '18px',
      paddingBottom: '16px',
      borderBottom: '1px solid #ecf1f7',
    },
    blurb: {
      fontSize: '15px',
      color: '#3a4a5e',
      lineHeight: 1.55,
      marginBottom: '22px',
      flex: '1 1 auto',
      fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
    },
    actions: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      marginTop: 'auto',
    },
    primaryAction: {
      display: 'inline-block',
      padding: '10px 16px',
      background: '#2c5d99',
      color: '#ffffff',
      borderRadius: '6px',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: 600,
      textAlign: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      letterSpacing: '0.3px',
      transition: 'background 0.15s ease',
    },
    secondaryAction: {
      display: 'inline-block',
      padding: '8px 16px',
      color: '#2c5d99',
      borderRadius: '6px',
      textDecoration: 'none',
      fontSize: '13px',
      fontWeight: 500,
      textAlign: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      letterSpacing: '0.3px',
      border: '1px solid transparent',
    },
  }

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Learn Math Class" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />

        <meta name="robots" content="index, follow" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemas.collectionPage)
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemas.itemList)
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemas.breadcrumb)
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemas.faq)
          }}
        />
      </Head>
      <br/>
      <br/>
      <br/>
      <br/>
      <OperaSidebar
        side='right'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb/>
      <br/>
      <br/>
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Algebraic Identities</h1>
      <br/>
      <br/>

      <div style={cardStyles.container}>
        {cards.map((c) => (
          <div key={c.viewHref} style={cardStyles.card}>
            <div style={cardStyles.label}>{c.label}</div>
            <div style={cardStyles.formula}>{c.formula}</div>
            <div style={cardStyles.expansion}>= {c.expansion}</div>
            <div style={cardStyles.blurb}>{c.blurb}</div>
            <div style={cardStyles.actions}>
              <Link href={c.viewHref} style={cardStyles.primaryAction}>
                Open visualizer →
              </Link>
              <Link href={c.readMoreHref} style={cardStyles.secondaryAction}>
                Read more ↓
              </Link>
            </div>
          </div>
        ))}
      </div>

      <br/>
      <br/>
      <SectionTableOfContents sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      <Sections sections={genericSections}/>
      <br/>
      <br/>
      <br/>
    </>
  )
}