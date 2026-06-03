// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
// import '../../pages.css'
// import Head from 'next/head'
// import FormulasTOC from '@/app/components/examples/FormulaTOC'

// export default function CombinatoricsFormulasPage({ combinatoricsFormulaList, keyWords }) {
//   return (
//     <>
//       <Head>
//         <title>Combinatorics Formulas | Learn Math Class</title>
//         <meta name="description" content="Explore comprehensive combinatorics formulas including permutations and combinations." />
//         <meta name="keywords" content={keyWords.join(', ')} />
//         <link rel="canonical" href="https://www.learnmathclass.com/combinatorics/formulas" />
//         <meta name="author" content="Learn Math Class" />
//         <meta name="robots" content="index, follow" />
//       </Head>
//      {/* <GenericNavbar/> */}
//       <br/>
//       <br/>
//       <br/>
//       <br/>
      
//         <Breadcrumb />
//         <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}} >Combinatorics Formulas</h1>
//         <FormulasTOC data={combinatoricsFormulaList}/>
//         {/* <FormulaAccordionWrapper data={combinatoricsFormulaList} groupByField={['category']} /> */}
      
//       {/* <ScrollUpButton /> */}
//     </>
//   )
// }

// export async function getStaticProps() {
//   const combinatoricsFormulaList = await import('@/app/api/db/formulas/combinatorics/combinatoricsFormulas')
  
//   const keyWords = [
//     "combinatorics formulas",
//     "permutation formulas",
//     "combination and permutation formula",
//     "combination permutation formula"
//   ]

//   return {
//     props: {
//       combinatoricsFormulaList: combinatoricsFormulaList.default,
//       keyWords
//     }
//   }
// }


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
import '../../pages.css'
import Head from 'next/head'
import FormulasTOC from '@/app/components/examples/FormulaTOC'

export default function CombinatoricsFormulasPage({
  combinatoricsFormulaList,
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

        <meta name="author" content="Learn Math Class" />
        <meta name="robots" content="index, follow" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemas.learningResource)
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

        <Breadcrumb />
        <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}} >Combinatorics Formulas</h1>
        <FormulasTOC data={combinatoricsFormulaList}/>
        {/* <FormulaAccordionWrapper data={combinatoricsFormulaList} groupByField={['category']} /> */}

      {/* <ScrollUpButton /> */}
    </>
  )
}

export async function getStaticProps() {
  const combinatoricsFormulaList = await import('@/app/api/db/formulas/combinatorics/combinatoricsFormulas')

  const keyWords = [
    'combinatorics formulas',
    'permutation formulas',
    'combination formulas',
    'combinatorics cheat sheet',
    'binomial coefficient formula',
    'multinomial coefficient formula',
    'factorial formula',
    'n choose k formula',
    'P(n, r) formula',
    'C(n, r) formula',
    'stars and bars formula',
    'derangement formula',
    'counting formulas',
    'combinatorics formulas list',
    'combinatorial identities'
  ]

  const faqQuestions = {
    obj1: {
      question: "What is the formula for permutations?",
      answer: "The number of permutations of r items chosen from n distinct items, where order matters, is P(n, r) = n! divided by (n minus r) factorial. When all n items are arranged, P(n, n) = n factorial. For permutations with repetition allowed, the count is n to the r."
    },
    obj2: {
      question: "What is the formula for combinations?",
      answer: "The number of combinations of r items chosen from n distinct items, where order does not matter, is C(n, r) = n! divided by r! times (n minus r)!. This is the binomial coefficient, also written as n choose r. For combinations with repetition allowed, the count is C(n plus r minus 1, r)."
    },
    obj3: {
      question: "What is the difference between P(n, r) and C(n, r)?",
      answer: "P(n, r) counts ordered arrangements of r items chosen from n; C(n, r) counts unordered selections of r items chosen from n. Their relationship is C(n, r) = P(n, r) divided by r factorial, because each combination corresponds to r! different permutations of the same r items."
    },
    obj4: {
      question: "What is the stars and bars formula?",
      answer: "Stars and bars counts the number of ways to distribute n identical items into k distinct bins. With empty bins allowed (weak compositions) the count is C(n plus k minus 1, k minus 1). With every bin nonempty (strong compositions) the count is C(n minus 1, k minus 1)."
    },
    obj5: {
      question: "What is the binomial theorem formula?",
      answer: "The binomial theorem states that (a plus b) to the n equals the sum from r = 0 to n of C(n, r) times a to the (n minus r) times b to the r. The coefficients C(n, r) are the binomial coefficients and form row n of Pascal's triangle."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Combinatorics Formulas Reference",
      "description": "Combinatorics formulas reference: factorial, permutation P(n,r), combination C(n,r), binomial coefficient, multinomial, stars and bars, Pascal's triangle.",
      "url": "https://www.learnmathclass.com/combinatorics/formulas",
      "inLanguage": "en-US",
      "learningResourceType": "Reference",
      "educationalLevel": "High School, College, Graduate",
      "educationalUse": "Learning",
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student"
      },
      "about": {
        "@type": "Thing",
        "name": "Combinatorics Formulas"
      },
      "teaches": [
        "Factorial n! and permutation formulas P(n, r)",
        "Combination formula C(n, r) and the binomial coefficient",
        "Permutations with repetition n^r and with identical items",
        "Circular permutations (n - 1)! and derangement count",
        "Weak and strong compositions via stars and bars",
        "Multinomial coefficient and partition into groups",
        "Binomial theorem and Pascal's triangle identities"
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
          "name": "Combinatorics",
          "item": "https://www.learnmathclass.com/combinatorics"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Combinatorics Formulas",
          "item": "https://www.learnmathclass.com/combinatorics/formulas"
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
      combinatoricsFormulaList: combinatoricsFormulaList.default,
      faqQuestions,
      schemas,
      seoData: {
        title: "Combinatorics Formulas Cheat Sheet | Learn Math Class",
        description: "Combinatorics formulas reference: factorial, permutation P(n,r), combination C(n,r), binomial coefficient, multinomial, stars and bars, Pascal's triangle.",
        keywords: keyWords.join(", "),
        url: "/combinatorics/formulas",
        name: "Combinatorics Formulas Reference"
      }
    }
  }
}