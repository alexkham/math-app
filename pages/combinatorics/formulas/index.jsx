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
  }

  return {
    props: {
      combinatoricsFormulaList: combinatoricsFormulaList.default,
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