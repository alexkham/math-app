import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import SiblingsNav from '@/app/components/SiblingsNav'

import SquareOfSum from '@/app/components/algebra/identities/SquareOfSum'
import SquareOfDifference from '@/app/components/algebra/identities/SquareOfDifference'
import SquareOfTrinomial from '@/app/components/algebra/identities/SquareOfTrinomial'
import DifferenceOfSquares from '@/app/components/algebra/identities/DifferenceOfSquares'


export async function getStaticPaths() {
  const paths = [
    { params: { view: 'square-of-sum' } },
    { params: { view: 'square-of-difference' } },
    { params: { view: 'square-of-trinomial' } },
    { params: { view: 'difference-of-squares' } },
  ]

  return { paths, fallback: false }
}


export async function getStaticProps({ params }) {

  const viewConfig = {

    'square-of-sum': {
      component: 'SquareOfSum',
      title: "Square of a Sum (a+b)² - Visual Proof | Learn Math Class",
      description: "Interactive visual proof of (a+b)² = a² + 2ab + b² through animated geometric dissection.",
      name: "Square of a Sum Visualization",
      url: "/algebra/visual-tools/identities/square-of-sum",
      h1: "Square of a Sum  (a+b)²",
      introTitle: ``,
      introContent: ``,
      keywords: [
        "(a+b)^2",
        "square of a sum",
        "square of sum proof",
        "(a+b)^2 = a^2 + 2ab + b^2",
        "binomial square",
        "geometric proof of (a+b)^2",
        "visual algebra",
        "algebraic identity proof",
        "square of binomial",
        "expand (a+b)^2",
        "perfect square trinomial",
        "(a+b) squared",
        "FOIL visualization",
        "interactive algebra",
        "binomial expansion"
      ],
      faqQuestions: {
        obj1: { question: ``, answer: `` },
        obj2: { question: ``, answer: `` },
        obj3: { question: ``, answer: `` },
        obj4: { question: ``, answer: `` },
        obj5: { question: ``, answer: `` },
      },
      sectionsContent: {
        obj1: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj2: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj3: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj4: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj5: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj6: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj7: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj8: { title: ``, content: ``, before: ``, after: ``, link: '' },
      }
    },

    'square-of-difference': {
      component: 'SquareOfDifference',
      title: "Square of a Difference (a-b)² - Visual Proof | Learn Math Class",
      description: "Interactive visual proof of (a-b)² = a² - 2ab + b² through animated geometric dissection.",
      name: "Square of a Difference Visualization",
      url: "/algebra/visual-tools/identities/square-of-difference",
      h1: "Square of a Difference  (a-b)²",
      introTitle: ``,
      introContent: ``,
      keywords: [
        "(a-b)^2",
        "square of a difference",
        "square of difference proof",
        "(a-b)^2 = a^2 - 2ab + b^2",
        "binomial square",
        "geometric proof of (a-b)^2",
        "visual algebra",
        "algebraic identity proof",
        "square of binomial difference",
        "expand (a-b)^2",
        "perfect square trinomial",
        "(a-b) squared",
        "subtraction binomial square",
        "interactive algebra",
        "binomial expansion"
      ],
      faqQuestions: {
        obj1: { question: ``, answer: `` },
        obj2: { question: ``, answer: `` },
        obj3: { question: ``, answer: `` },
        obj4: { question: ``, answer: `` },
        obj5: { question: ``, answer: `` },
      },
      sectionsContent: {
        obj1: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj2: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj3: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj4: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj5: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj6: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj7: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj8: { title: ``, content: ``, before: ``, after: ``, link: '' },
      }
    },

    'square-of-trinomial': {
      component: 'SquareOfTrinomial',
      title: "Square of a Trinomial (a+b+c)² - Visual Proof | Learn Math Class",
      description: "Interactive visual proof of (a+b+c)² expansion through a 3x3 grid of pieces.",
      name: "Square of a Trinomial Visualization",
      url: "/algebra/visual-tools/identities/square-of-trinomial",
      h1: "Square of a Trinomial  (a+b+c)²",
      introTitle: ``,
      introContent: ``,
      keywords: [
        "(a+b+c)^2",
        "square of trinomial",
        "trinomial squared",
        "(a+b+c)^2 expansion",
        "a^2+b^2+c^2+2ab+2ac+2bc",
        "trinomial square proof",
        "visual algebra",
        "algebraic identity proof",
        "3x3 grid algebra",
        "geometric proof of trinomial square",
        "interactive algebra",
        "polynomial expansion",
        "trinomial expansion",
        "perfect square trinomial",
        "expand (a+b+c)^2"
      ],
      faqQuestions: {
        obj1: { question: ``, answer: `` },
        obj2: { question: ``, answer: `` },
        obj3: { question: ``, answer: `` },
        obj4: { question: ``, answer: `` },
        obj5: { question: ``, answer: `` },
      },
      sectionsContent: {
        obj1: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj2: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj3: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj4: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj5: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj6: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj7: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj8: { title: ``, content: ``, before: ``, after: ``, link: '' },
      }
    },

    'difference-of-squares': {
      component: 'DifferenceOfSquares',
      title: "Difference of Squares a² - b² - Visual Proof | Learn Math Class",
      description: "Interactive visual proof of a² - b² = (a+b)(a-b) through geometric slice and rearrange.",
      name: "Difference of Squares Visualization",
      url: "/algebra/visual-tools/identities/difference-of-squares",
      h1: "Difference of Squares  a² − b²",
      introTitle: ``,
      introContent: ``,
      keywords: [
        "a^2 - b^2",
        "difference of squares",
        "difference of squares proof",
        "a^2 - b^2 = (a+b)(a-b)",
        "factoring difference of squares",
        "geometric proof difference of squares",
        "visual algebra",
        "algebraic identity proof",
        "factor a^2 - b^2",
        "interactive algebra",
        "polynomial factoring",
        "binomial factoring",
        "(a+b)(a-b)",
        "slice and rearrange proof",
        "algebraic factoring"
      ],
      faqQuestions: {
        obj1: { question: ``, answer: `` },
        obj2: { question: ``, answer: `` },
        obj3: { question: ``, answer: `` },
        obj4: { question: ``, answer: `` },
        obj5: { question: ``, answer: `` },
      },
      sectionsContent: {
        obj1: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj2: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj3: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj4: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj5: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj6: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj7: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj8: { title: ``, content: ``, before: ``, after: ``, link: '' },
      }
    },

  }

  const currentConfig = viewConfig[params.view]

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": currentConfig.name,
      "description": currentConfig.description,
      "url": `https://www.learnmathclass.com${currentConfig.url}`,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": getFeatureList(params.view),
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
      "keywords": currentConfig.keywords.join(", ")
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
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": currentConfig.name,
          "item": `https://www.learnmathclass.com${currentConfig.url}`
        }
      ]
    },

    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": Object.keys(currentConfig.faqQuestions).map(key => ({
        "@type": "Question",
        "name": currentConfig.faqQuestions[key].question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": currentConfig.faqQuestions[key].answer
        }
      }))
    }
  }

  const introContent = {
    id: "intro",
    title: currentConfig.introTitle,
    content: currentConfig.introContent
  }

  return {
    props: {
      sectionsContent: currentConfig.sectionsContent,
      introContent,
      faqQuestions: currentConfig.faqQuestions,
      schemas,
      seoData: {
        title: currentConfig.title,
        description: currentConfig.description,
        keywords: currentConfig.keywords.join(", "),
        url: currentConfig.url,
        name: currentConfig.name
      },
      currentView: params.view,
      componentName: currentConfig.component,
      h1Title: currentConfig.h1
    }
  }
}


function getFeatureList(view) {
  const features = {
    'square-of-sum': [
      "Animated geometric dissection of (a+b)²",
      "Interactive step-by-step proof",
      "Adjustable animation speed",
      "Step navigation controls",
      "Visual area decomposition"
    ],
    'square-of-difference': [
      "Animated geometric dissection of (a-b)²",
      "Interactive step-by-step proof",
      "Adjustable animation speed",
      "Step navigation controls",
      "Visual area decomposition"
    ],
    'square-of-trinomial': [
      "Animated 3x3 grid dissection of (a+b+c)²",
      "Interactive step-by-step proof",
      "Adjustable animation speed",
      "Step navigation controls",
      "Visual area decomposition into 9 pieces"
    ],
    'difference-of-squares': [
      "Animated slice-and-rearrange proof of a² - b²",
      "Interactive step-by-step factoring",
      "Adjustable animation speed",
      "Step navigation controls",
      "Visual rearrangement to (a+b)(a-b)"
    ]
  }
  return features[view] || []
}


export default function AlgebraicIdentityViewPage({
  seoData,
  sectionsContent,
  introContent,
  faqQuestions,
  schemas,
  currentView,
  componentName,
  h1Title
}) {

  // const genericSections = Object.keys(sectionsContent).length > 0
  //   ? [
  //       { id: '1', title: sectionsContent.obj1?.title || '', link: '', content: sectionsContent.obj1?.content || '' },
  //       { id: '2', title: sectionsContent.obj2?.title || '', link: '', content: sectionsContent.obj2?.content || '' },
  //       { id: '3', title: sectionsContent.obj3?.title || '', link: '', content: sectionsContent.obj3?.content || '' },
  //       { id: '4', title: sectionsContent.obj4?.title || '', link: '', content: sectionsContent.obj4?.content || '' },
  //       { id: '5', title: sectionsContent.obj5?.title || '', link: '', content: sectionsContent.obj5?.content || '' },
  //       { id: '6', title: sectionsContent.obj6?.title || '', link: '', content: sectionsContent.obj6?.content || '' },
  //       { id: '7', title: sectionsContent.obj7?.title || '', link: '', content: sectionsContent.obj7?.content || '' },
  //       { id: '8', title: sectionsContent.obj8?.title || '', link: '', content: sectionsContent.obj8?.content || '' },
  //     ].filter(section => section.title)
  //   : []

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
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Learn Math Class" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />

        <meta name="robots" content="index, follow" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemas.webApplication)
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
      <br />
      <br />
      <br />
      <br />
      <OperaSidebar
        side='right'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb />
      <br />
      <br />
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>{h1Title}</h1>

      <SiblingsNav>
        {componentName === 'SquareOfSum' && (
          <div style={{ transform: 'scale(0.9)' }}>
            <SquareOfSum />
          </div>
        )}

        {componentName === 'SquareOfDifference' && (
          <div style={{ transform: 'scale(0.9)' }}>
            <SquareOfDifference />
          </div>
        )}

        {componentName === 'SquareOfTrinomial' && (
          <div style={{ transform: 'scale(0.9)' }}>
            <SquareOfTrinomial />
          </div>
        )}

        {componentName === 'DifferenceOfSquares' && (
          <div style={{ transform: 'scale(0.9)' }}>
            <DifferenceOfSquares />
          </div>
        )}
      </SiblingsNav>

      <br />
      {/* {genericSections.length > 0 && (
        <>
          <SectionTableOfContents sections={genericSections} />
          <br />
          <br />
          <br />
          <IntroSection
            id={introContent.id}
            title={introContent.title}
            content={introContent.content}
            backgroundColor='#f9fafb'
            textColor="#06357a"
          />
          <br />
          <br />
          <Sections sections={genericSections} />
        </>
      )} */}
      <br />
      <br />
      <br />
    </>
  )
}