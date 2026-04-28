// import React from 'react'
// import setTheoryFormulasList from '@/app/api/db/formulas/set-theory/setTheoryFormulas'
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import '../../pages.css'
// import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import FormulasTOC from '@/app/components/examples/FormulaTOC'

// export default function AlgebraFormulasPage() {
//   return (
//     <>
//     {/* <GenericNavbar/> */}
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <OperaSidebar 
//       side='right'
//       topOffset='65px' 
//       sidebarWidth='45px'
//       panelWidth='200px'
      
//       iconColor='white'
//       panelBackgroundColor='#f2f2f2'/> 
//     <Breadcrumb/>
//     <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Set Theory Formulas</h1>
//     {/* <div style={{transform:'scale(0.8)'}}> */}
//     <FormulasTOC data={setTheoryFormulasList}/>
//     {/* </div> */}
//     {/* <div style={{transform:'scale(0.95)'}}>
//     <FormulaAccordionWrapper data={setTheoryFormulasList} groupByField={['category']}/>
//     </div> */}
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     {/* <ScrollUpButton/> */}
//     </>
//   )
// }




import React from 'react'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import FormulasTOC from '@/app/components/examples/FormulaTOC'
import Head from 'next/head'
import '../../pages.css'

export async function getStaticProps() {
  const { default: setTheoryFormulasList } = await import('@/app/api/db/formulas/set-theory/setTheoryFormulas')

  const keyWords = [
    'set theory formulas',
    'set operation laws',
    'De Morgan laws sets',
    'commutative law sets',
    'associative law sets',
    'distributive law sets',
    'complement laws set theory',
    'idempotent law sets',
    'absorption law sets',
    'identity law sets',
    'inclusion-exclusion principle',
    'cardinality of power set',
    'set difference formula',
    'symmetric difference formula',
    'set theory reference sheet'
  ]

  const faqQuestions = {
    obj1: {
      question: "What are the main set theory formulas?",
      answer: "The main set theory formulas include the commutative, associative, and distributive laws for union and intersection, the identity and domination laws involving the empty set and universal set, complement laws, De Morgan's laws, absorption laws, and cardinality formulas such as the inclusion-exclusion principle."
    },
    obj2: {
      question: "What are De Morgan's laws in set theory?",
      answer: "De Morgan's laws state that the complement of a union equals the intersection of the complements, and the complement of an intersection equals the union of the complements. Both laws generalize to arbitrary collections of sets."
    },
    obj3: {
      question: "How does the inclusion-exclusion principle work for two sets?",
      answer: "For two finite sets A and B, the cardinality of their union is |A| + |B| - |A intersection B|. Subtracting the intersection size corrects for elements that would otherwise be counted twice. When A and B are disjoint the formula simplifies to |A| + |B|."
    },
    obj4: {
      question: "What is the cardinality of a power set?",
      answer: "The power set of a set A with n elements contains exactly 2^n subsets. Each element is either included or excluded from a given subset, producing two independent choices per element and 2^n total subsets."
    },
    obj5: {
      question: "What is the difference between set difference and symmetric difference?",
      answer: "Set difference A minus B contains elements in A but not in B. Symmetric difference A triangle B contains elements in exactly one of the two sets, equivalent to the union minus the intersection. Set difference is not commutative while symmetric difference is."
    }
  }

  const seoData = {
    title: "Set Theory Formulas & Examples | Learn Math Class",
    description: "Complete set theory formulas with examples. Covers De Morgan's laws, inclusion-exclusion, complement laws, cardinality, distributive and absorption laws.",
    keywords: keyWords.join(", "),
    url: "/set-theory/formulas",
    name: "Set Theory Formulas and Examples"
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Set Theory Formulas and Examples",
      "description": "Complete set theory formulas with examples. Covers De Morgan's laws, inclusion-exclusion, complement laws, cardinality, distributive and absorption laws.",
      "url": "https://www.learnmathclass.com/set-theory/formulas",
      "inLanguage": "en-US",
      "learningResourceType": "Reference",
      "educationalLevel": "High School, College",
      "educationalUse": "Learning",
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student"
      },
      "about": {
        "@type": "Thing",
        "name": "Set Theory"
      },
      "teaches": [
        "Commutative, associative, and distributive laws for sets",
        "Identity, domination, and idempotent laws",
        "Complement laws and the double complement",
        "De Morgan's laws for union and intersection",
        "Inclusion-exclusion principle and cardinality formulas",
        "Set difference, symmetric difference, and set equality"
      ],
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
      "dateModified": new Date().toISOString()
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
          "name": "Set Theory",
          "item": "https://www.learnmathclass.com/set-theory"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Set Theory Formulas and Examples",
          "item": "https://www.learnmathclass.com/set-theory/formulas"
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
      setTheoryFormulasList,
      faqQuestions,
      schemas,
      seoData,
    }
  }
}

export default function SetTheoryFormulasPage({
  setTheoryFormulasList,
  faqQuestions,
  schemas,
  seoData
}) {
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.learningResource) }}
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
        topOffset='65px'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb/>
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Set Theory Formulas</h1>
      {/* <div style={{transform:'scale(0.8)'}}> */}
      <FormulasTOC data={setTheoryFormulasList}/>
      {/* </div> */}
      {/* <div style={{transform:'scale(0.95)'}}>
      <FormulaAccordionWrapper data={setTheoryFormulasList} groupByField={['category']}/>
      </div> */}
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
      {/* <ScrollUpButton/> */}
    </>
  )
}