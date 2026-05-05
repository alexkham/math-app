
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import React from 'react'
import '../../../pages/pages.css'
import Head from 'next/head'
import ModernCardsGroup from '@/app/components/cards/ModernCardsGroup'
import QuickNav from '@/app/components/cards/QuickNav'
import ScrollToTop from '@/app/components/scroll-up-button/ScrollToTop'
import ToolsPageHeader from '@/app/components/cards/ToolsPageHeader'


export async function getStaticProps(){

  const keyWords = [
    'algebra visualization tools',
    'interactive algebra tools',
    'algebra visualizer',
    'visual algebra learning',
    'algebraic identities visualizer',
    'algebra geometric proofs',
    'powers table',
    'visual algebraic proofs',
    'algebra interactive learning',
    'algebra teaching tools',
    'visual algebra calculator',
    'algebra concept visualization',
    'animated algebra proofs',
    'algebra dissection proofs',
    'visual mathematics tools'
  ]

  const cardsData = [
    {
      title: "Algebraic Identities Visualizers",
      description: "Interactive geometric proofs of fundamental algebraic identities. Watch (a+b)², (a-b)², (a+b+c)², and a²-b² come alive through animated dissection — see exactly why each identity holds, step by step.",
      backgroundColor: "#2c5d99",
      textColor: "#ffffff",
      ratio: 2,
      image: '/images/algebra-identities.jpg',
      href: "/algebra/visual-tools/identities"
    },
    {
      title: "Powers Table",
      description: "Searchable reference table of powers from 1¹ to 10¹⁰. Find any power instantly, compare growth rates across bases, and explore the fundamental patterns of exponentiation in a clean side-by-side layout.",
      backgroundColor: "#2c5d99",
      textColor: "#ffffff",
      ratio: 2,
      image: '/images/powers-table.jpg',
      href: "/algebra/visual-tools/powers-table"
    },
  ]

  const faqQuestions = {
    obj1: {
      question: "What algebra visualization tools are available?",
      answer: "The collection currently includes interactive visualizers for algebraic identities — (a+b)², (a-b)², (a+b+c)², and a²-b² — each demonstrated through animated geometric dissection, plus a searchable powers reference table covering bases 1 through 10."
    },
    obj2: {
      question: "How do algebra visualization tools help learning?",
      answer: "Visual tools turn abstract algebraic identities into concrete geometric pictures. Instead of just memorizing formulas, learners see why each identity is true. Areas, lengths, and rearrangements replace symbol manipulation, building durable intuition."
    },
    obj3: {
      question: "Are the geometric proofs rigorous?",
      answer: "Yes. Each animated proof is a valid dissection argument: total area is preserved, pieces are accounted for, and the final equation follows from comparing areas before and after rearrangement. The visuals match the algebra exactly."
    },
    obj4: {
      question: "Are these algebra tools free to use?",
      answer: "Yes, all algebra visualization tools are completely free with no registration required. They run directly in your browser with interactive controls, animation playback, and step-by-step explanations."
    },
    obj5: {
      question: "Can I use these tools for teaching algebra?",
      answer: "Absolutely. The animated identities are particularly useful for classroom demonstrations, where the geometric proof can be paused, rewound, and discussed step by step. Students can also explore the tools independently to build understanding at their own pace."
    }
  }

  const seoData = {
    title: "Algebra Visual Tools - Interactive Visualizers | Learn Math Class",
    description: "Interactive algebra visualization tools including animated identity proofs and powers reference. Learn algebra through geometric dissection and visual exploration.",
    keywords: keyWords.join(", "),
    url: "/algebra/visual-tools",
    name: "Algebra Visual Tools"
  }

  const schemas = {
    collectionPage: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Algebra Visual Tools",
      "description": "Interactive visualization tools for learning algebra including animated identity proofs, powers table, and geometric dissection demonstrations.",
      "url": "https://www.learnmathclass.com/algebra/visual-tools",
      "inLanguage": "en-US",
      "about": {
        "@type": "Thing",
        "name": "Algebra Visualization"
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
          "name": "Algebraic Identities Visualizers",
          "url": "https://www.learnmathclass.com/algebra/visual-tools/identities",
          "description": "Animated geometric proofs of fundamental algebraic identities"
        },
        {
          "@type": "WebPage",
          "name": "Powers Table",
          "url": "https://www.learnmathclass.com/algebra/visual-tools/powers-table",
          "description": "Searchable reference table of powers from 1 to 10"
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
            "name": "Algebraic Identities Visualizers",
            "url": "https://www.learnmathclass.com/algebra/visual-tools/identities",
            "applicationCategory": "EducationalApplication",
            "description": "Animated geometric dissection proofs of algebraic identities"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Powers Table",
            "url": "https://www.learnmathclass.com/algebra/visual-tools/powers-table",
            "applicationCategory": "EducationalApplication",
            "description": "Searchable reference table of integer powers"
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
          "name": "Algebra Visual Tools",
          "item": "https://www.learnmathclass.com/algebra/visual-tools"
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

  const pageArticle = `Algebra often feels like a world of symbols pushed around by rules. These visualization tools turn that abstraction into geometry — every identity becomes a picture, every formula becomes a thing you can see, dissect, and rearrange.

The Algebraic Identities Visualizers animate four of the most fundamental identities — (a+b)², (a-b)², (a+b+c)², and a²-b² — through geometric dissection. A square is decomposed, slid apart, and recombined while you watch. Total area is preserved throughout; only its arrangement changes. That conservation of area is the proof. By the end of each animation, you have seen exactly why the identity holds, not just memorized that it does.

(a+b)² appears as a square of side a+b broken into a², 2ab, and b². The mixed term 2ab shows up as two identical rectangles, making the doubling immediately obvious. (a-b)² rearranges differently, starting from a larger square and subtracting strips. The structure of each identity dictates the shape of its proof.

The a²-b² identity is especially elegant. A square of side b is removed from a square of side a, and the L-shaped region that remains is cut and reassembled into a rectangle with sides (a+b) and (a-b). The factorization a² - b² = (a+b)(a-b) is no longer a trick to memorize — it is a piece of paper, cut and rearranged.

The Powers Table complements the visualizers with a clean, searchable reference for every integer power from 1¹ to 10¹⁰. Compare growth rates side by side, spot patterns in trailing digits, and look up specific values without reaching for a calculator.

Each tool runs directly in your browser with no installation required. Use them for self-study, classroom demonstrations, or any moment when an algebraic identity needs a picture to make it stick.`

  const sectionsContent = {
    obj1: { title: ``, content: ``, before: ``, after: `` },
    obj2: { title: ``, content: ``, before: ``, after: `` },
    obj3: { title: ``, content: ``, before: ``, after: `` },
    obj4: { title: ``, content: ``, before: ``, after: `` },
    obj5: { title: ``, content: ``, before: ``, after: `` }
  }

  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }

  return {
    props: {
      sectionsContent,
      introContent,
      cardsData,
      faqQuestions,
      schemas,
      pageArticle,
      seoData
    }
  }
}

export default function AlgebraVisualToolsPage({seoData, sectionsContent, introContent, cardsData, faqQuestions, schemas, pageArticle}) {

  const genericSections = [
    { id: '1', title: 'section1', link: '', content: '' },
    { id: '2', title: 'section2', link: '', content: '' },
    { id: '',  title: '',         link: '', content: '' }
  ]

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
      {/* <GenericNavbar/> */}
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Algebra Visual Tools</h1>
      <QuickNav items={cardsData} dropdownLabel="All Tools"
      
      accentColor="#2c5d99"
  accentColorHover="#1e4170"
      />
      <br/>
      <ScrollToTop
        top={'80px'}
        center={true}
      />
      <br/>
      <ToolsPageHeader
       accentColor="#2c5d99"
  accentColorSecondary="#3a72b8"
        items={cardsData}
        icon="🔍"
        intro={{
          title: "Explore Interactive Algebra Tools",
          description: "Master algebraic concepts through hands-on geometric visualization and animated dissection proofs.",
          tip: "Click any tool below to see its description and start exploring."
        }}
        article={pageArticle}
        onFilteredItemsChange={(filtered) => setDisplayedItems(filtered)}
      />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <ModernCardsGroup items={cardsData}/>
      <br/>
      {/* <SectionTableOfContents sections={genericSections}/> */}
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
      <br/>
      {/* <Sections sections={genericSections}/> */}
      <br/>
      <br/>
      <br/>
      {/* <ScrollUpButton/> */}
    </>
  )
}