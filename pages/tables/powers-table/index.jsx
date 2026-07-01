// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import PowerTable from '@/app/components/tables/PowerTable'
// import '../../../pages.css'
// import ExplanationDetails from '@/app/components/ExplanationDetails';
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'

// export default function PowersTablePage({keyWords,instructions}) {
  
//   return (
//     <>
//      <Head>
//         <title> Powers of Integer Numbers from 1 to 10 | Powers Table | Learn Math Class</title>
//         <meta name="description" content="Explore powers of integer numbers from 1 to 10000 with our comprehensive table. " />
//         <meta name="keywords" content={keyWords.join(', ')} />
//         <link rel="canonical" href="https://www.learnmathclass.com/tables/arithmetics/powers-table" />
        
      
//       </Head>
//     {/* <GenericNavbar/> */}
//     <br/>
//     <br/>
//     <br/>
//     <Breadcrumb/>
//      <OperaSidebar
//             side='right'
//             // topOffset='65px'
//             sidebarWidth='45px'
//             panelWidth='300px'
//             iconColor='white'
//             panelBackgroundColor='#f2f2f2'
//           />
//     <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Table of Powers base 1-10</h1>
//    <br/>
//    <br/>
//    <div style={{ marginBottom: '-30px' }}>
//    <ExplanationDetails
//      title="About This Table"
//      instructions={instructions}
//      links={[
//         { text: "Exponents Calculator", url: "/calculators/exponent-calculator" },
//         { text: "Natural Exponential Table", url: "/tables/arithmetics/exponential-table" }
//       ]}/>
//       </div>
//     <div style={{transform:'scale(0.9)'}}>
//     <PowerTable/>
//     </div>
//     <br/>
//     <br/>
//     <br/>
//     {/* <ScrollUpButton/> */}
//     </>
//   )
// }
 

// export async function getStaticProps() {

//     const keyWords=[
//         'table of exponents','power table','exponent table',
//         'integers exponents', 'exponent chart'
//     ]

//     const instructions=[
        
//         "Use search bar to find specific powers",
//         "Input search term",
//         "Click Search button",
//         "Click × to clear search",
//         "Numbers highlighted in yellow are search matches",
//         "Scroll to navigate through all powers"
//       ]
   
  
    
//     return {
//       props: {
//         keyWords,
//         instructions
//       },
//       // Revalidate every 24 hours
//       revalidate: 86400
//     };
//   }


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import PowerTable from '@/app/components/tables/PowerTable'
import '@/pages.css'
import ExplanationDetails from '@/app/components/ExplanationDetails';
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'

export default function PowersTablePage({seoData, instructions, faqQuestions, schemas}) {
  
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
    {/* <GenericNavbar/> */}
    <br/>
    <br/>
    <br/>
    <Breadcrumb/>
     <OperaSidebar
            side='right'
            // topOffset='65px'
            sidebarWidth='45px'
            panelWidth='300px'
            iconColor='white'
            panelBackgroundColor='#f2f2f2'
          />
    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Table of Powers base 1-10</h1>
   <br/>
   <br/>
   <div style={{ marginBottom: '-30px' }}>
   <ExplanationDetails
     title="About This Table"
     instructions={instructions}
     links={[
        // { text: "Exponents Calculator", url: "/calculators/exponent-calculator" },
        { text: "Natural Exponential Table", url: "/tables/arithmetics/exponential-table" }
      ]}/>
      </div>
    <div style={{transform:'scale(0.9)'}}>
    <PowerTable/>
    </div>
    <br/>
    <br/>
    <br/>
    {/* <ScrollUpButton/> */}
    </>
  )
}
 

export async function getStaticProps() {

    const keyWords = [
      'powers table',
      'powers of integers',
      'table of exponents',
      'exponent table',
      'powers of 1 to 10',
      'integer power chart',
      'powers of 2',
      'powers of 3',
      'powers of 10',
      'exponent chart',
      'powers reference table',
      'find which power a number is',
      'is a number a perfect power',
      'first 10 powers of an integer',
      'powers of integers list'
    ]

    const instructions = [
      "Each of the 10 stacks shows all 10 powers of one base — base^1 through base^10 — for bases 1 to 10",
      "Top row covers bases 1 to 5, bottom row covers bases 6 to 10",
      "Stack titles show the value range, e.g., base 2 spans 2 to 1024 and base 10 spans 10 to 10 billion",
      "Enter any number in the search bar to look it up — for example, 729 to find 3 to the 6th power",
      "Click Search or press Enter; the table scrolls to the matching stack and highlights the cell in yellow",
      "If the number is not a power in the table, a not-found message appears below the search bar",
      "Click the times button to clear the current search and reset highlights",
      "The largest value is 10 to the 10th power (10 billion); BigInt arithmetic is used so every value is exact"
    ]


    const faqQuestions = {
      obj1: {
        question: "What is a power of an integer?",
        answer: "A power of an integer is the result of multiplying an integer by itself a fixed number of times. The integer being multiplied is called the base, and the number of times it is multiplied is called the exponent. For example, 2 to the 5th power means 2 multiplied by itself 5 times, which equals 32. Powers are written as base^exponent, and they grow very fast as the exponent increases."
      },
      obj2: {
        question: "How do you read the notation base^exponent?",
        answer: "Read base^exponent as the base raised to the exponent. For instance, 3^4 is read as three to the fourth power and equals 3 times 3 times 3 times 3, which is 81. Special names: an exponent of 2 is called squaring (3^2 is three squared) and an exponent of 3 is called cubing (3^3 is three cubed). Any nonzero integer raised to the 0 power equals 1 by convention."
      },
      obj3: {
        question: "What range of powers does this table cover?",
        answer: "The table covers all 100 powers from 1 to the first power up to 10 to the tenth power. Values range from 1 (which is 1 to any power) up to 10 billion (10 to the tenth power). Each of the 10 bases from 1 through 10 has its own stack showing all 10 of its first powers in order. The full range of values spans ten orders of magnitude."
      },
      obj4: {
        question: "How can I tell if a number is a power of an integer?",
        answer: "Type the number into the search bar and click Search. If it appears in the table as some base^exponent, the table scrolls to its stack and highlights the matching cell in yellow. If it does not appear, a not-found message confirms that the number is not equal to any of the 100 powers in the table. Note that very small numbers may appear in multiple stacks: 1 is 1 to any power, and 64 is both 2^6, 4^3, and 8^2."
      },
      obj5: {
        question: "What are some common powers worth memorizing?",
        answer: "Powers of 2 dominate in computing: 2^10 equals 1024 (one kibibyte), 2^16 is 65536, and 2^20 is roughly one million. Powers of 10 are the basis of scientific notation: 10^3 is one thousand, 10^6 is one million, and 10^9 is one billion. Squares from 1 to 12 (1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144) and cubes from 1 to 10 (1, 8, 27, 64, 125, 216, 343, 512, 729, 1000) are standard knowledge for arithmetic and algebra."
      }
    }


    const schemas = {
      webApplication: {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Powers Table 1 to 10 with Searchable Lookup",
        "description": "Reference table of all 100 powers from 1^1 to 10^10. Look up any number to find which power it is, with yellow-highlighted matches and ten per-base stacks.",
        "url": "https://www.learnmathclass.com/tables/arithmetics/powers-table",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "featureList": [
          "Reference table of 100 powers — 10 integer bases (1 through 10) each raised to the 10 powers 1 through 10",
          "Two-row layout: bases 1 to 5 on top, bases 6 to 10 below, with one stack per base",
          "Stack titles showing the full value range of each base, from base^1 to base^10",
          "Search bar with an Enter or click trigger: type any number to find which power (if any) it equals",
          "Smooth auto-scroll to the matching stack with the matching cell highlighted in yellow",
          "Clear-search button and a not-found message when the entered number is not present in the table",
          "BigInt arithmetic for exact precision across the full range, from 1 up to 10 to the tenth power (10 billion)"
        ],
        "author": {
          "@type": "Organization",
          "name": "Learn Math Class"
        },
        "datePublished": "2024-01-15",
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "isAccessibleForFree": true,
        "learningResourceType": "Reference Table and Interactive Tool",
        "educationalLevel": "Elementary, Middle School, High School",
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
            "name": "Tables",
            "item": "https://www.learnmathclass.com/tables"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Arithmetic",
            "item": "https://www.learnmathclass.com/tables/arithmetics"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Powers Table",
            "item": "https://www.learnmathclass.com/tables/arithmetics/powers-table"
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
        instructions,
        faqQuestions,
        schemas,
        seoData: {
          title: "Powers Table 1-10 (Exponents 1 to 10) | Learn Math Class",
          description: "Reference table of all 100 powers from 1^1 to 10^10. Look up any number to find which power it is, with yellow-highlighted matches and ten per-base stacks.",
          keywords: keyWords.join(", "),
          url: "/tables/arithmetics/powers-table",
          name: "Powers Table 1 to 10 with Searchable Lookup",
          hubDescription: "Reference table of all 100 powers of integer bases 1 through 10, from base^1 up to base^10. Type any number into the search bar to find which power it equals (if any) — the table scrolls to the matching stack and highlights the cell in yellow. Stack titles show each base's range, for example base 7 spans 7 through 282,475,249, and base 10 reaches 10 billion.",
          category: "Arithmetic",
          subCategory: ""
        }
      },
      // Revalidate every 24 hours
      revalidate: 86400
    };
  }