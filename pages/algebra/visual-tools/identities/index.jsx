import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
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
      title: ``,
      content: ``,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
      link: '',
    },

  }

  const introContent = {
    id: "intro",
    title: ``,
    content: ``
  }

  const faqQuestions = {
    obj1: {
      question: ``,
      answer: ``
    },
    obj2: {
      question: ``,
      answer: ``
    },
    obj3: {
      question: ``,
      answer: ``
    },
    obj4: {
      question: ``,
      answer: ``
    },
    obj5: {
      question: ``,
      answer: ``
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
      introContent,
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

export default function AlgebraicIdentitiesLanding({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

  // const genericSections = [
  //   {
  //     id: '1',
  //     title: sectionsContent.obj1.title,
  //     link: '',
  //     content: sectionsContent.obj1.content
  //   },
  //   {
  //     id: '2',
  //     title: sectionsContent.obj2.title,
  //     link: '',
  //     content: sectionsContent.obj2.content
  //   },
  //   {
  //     id: '3',
  //     title: sectionsContent.obj3.title,
  //     link: '',
  //     content: sectionsContent.obj3.content
  //   },
  //   {
  //     id: '4',
  //     title: sectionsContent.obj4.title,
  //     link: '',
  //     content: sectionsContent.obj4.content
  //   },
  //   {
  //     id: '5',
  //     title: sectionsContent.obj5.title,
  //     link: '',
  //     content: sectionsContent.obj5.content
  //   }
  // ]

  const cardStyles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      margin: '40px 0',
      flexWrap: 'wrap',
      maxWidth: '1200px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    card: {
      border: '2px solid #e2e8f0',
      borderRadius: '8px',
      padding: '30px',
      width: '280px',
      textAlign: 'center',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'inherit'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#2563eb',
      marginBottom: '15px'
    },
    description: {
      fontSize: '16px',
      color: '#4b5563',
      lineHeight: '1.5'
    }
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
        <Link href="/algebra/visual-tools/identities/square-of-sum" style={cardStyles.card}>
          <div style={cardStyles.title}>(a + b)²</div>
          <div style={cardStyles.description}>
            Square of a sum.
          </div>
        </Link>

        <Link href="/algebra/visual-tools/identities/square-of-difference" style={cardStyles.card}>
          <div style={cardStyles.title}>(a − b)²</div>
          <div style={cardStyles.description}>
            Square of a difference.
          </div>
        </Link>

        <Link href="/algebra/visual-tools/identities/square-of-trinomial" style={cardStyles.card}>
          <div style={cardStyles.title}>(a + b + c)²</div>
          <div style={cardStyles.description}>
            Square of a trinomial.
          </div>
        </Link>

        <Link href="/algebra/visual-tools/identities/difference-of-squares" style={cardStyles.card}>
          <div style={cardStyles.title}>a² − b²</div>
          <div style={cardStyles.description}>
            Difference of squares.
          </div>
        </Link>
      </div>

      <br/>
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
    </>
  )
}