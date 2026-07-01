// import dynamic from 'next/dynamic'
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import '../../../pages.css'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'

// // Dynamically import the client component with no SSR
// const LogarithmTable = dynamic(
//   () => import('@/app/components/logarithm-table/LogarithmTable'),
//   { ssr: false }
// )


//  export async function getStaticProps(){

//   const keyWords=[
//     'logarithm table','logarithm','log calculator','logarithm calculator','logarithmic calculator',
//     'calculator of log','log log calculator'
//   ]

  
//   const sectionsContent={

//     obj1:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
  
//     },
//     obj2:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },
  
//     obj3:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },
//     obj4:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },


//     obj5:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     }
  
//   }



//    return {
//       props:{
//          sectionsContent,
//            seoData: {
//       title: "Logarithm Table & Calculator - Log Values | Learn Math Class",
//       description: "Interactive logarithm table with calculator. Find log values, natural logarithms, and common logarithms with step-by-step calculations.",
//       keywords: keyWords.join(", "),
//       url: "/tables/logarithm",
//       name: "Logarithm Table"
//     },
//     keyWords
        
//        }
//     }
//    }
  



// export default function LogarithmTablePage({sectionsContent,seoData,keyWords}) {
//   return (
//     <div className='tables-main'>
//       <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
//   <meta property="og:title" content={seoData.title} />
//   <meta property="og:description" content={seoData.description} />
//   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//   <meta property="og:type" content="article" />
//   <meta property="og:site_name" content="Learn Math Class" />
  
//   <meta name="twitter:card" content="summary" />
//   <meta name="twitter:title" content={seoData.title} />
//   <meta name="twitter:description" content={seoData.description} />
  
//   <meta name="robots" content="index, follow" />
  
//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "WebPage",
//         "name": seoData.name,
//         "description": seoData.description,
//         "keywords": seoData.keywords,
//         "url": `https://www.learnmathclass.com${seoData.url}`,
//         "dateModified": new Date().toISOString(),
//         "inLanguage": "en-US",
//         "mainEntity": {
//           "@type": "Article",
//           "name": seoData.name,
//           "dateModified": new Date().toISOString(),
//           "author": {
//             "@type": "Organization",
//             "name": "Learn Math Class"
//           }
//         }
//       })
//     }}
//   />
// </Head>
//       {/* <GenericNavbar/> */}
//       <br />
//       <br />
//       <br />
     
//         <OperaSidebar 
//              side='right'
//              topOffset='55px' 
//              sidebarWidth='45px'
//              panelWidth='200px'
//              iconColor='white'
//              panelBackgroundColor='#f2f2f2'
//            /> 
//      <Breadcrumb />
//       <div style={{position:'absolute', top:'100px', width:'95%', left:'0', right:'0'}}>
      
//         <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Logarithm Table</h1>
//         <LogarithmTable />
//       </div>
//       {/* <ScrollUpButton /> */}
//     </div>
//   )
// }


import dynamic from 'next/dynamic'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import '@/pages.css'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Head from 'next/head'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'

// Dynamically import the client component with no SSR
const LogarithmTable = dynamic(
  () => import('@/app/components/logarithm-table/LogarithmTable'),
  { ssr: false }
)


 export async function getStaticProps(){

  const keyWords=[
    'logarithm table',
    'log table',
    'common logarithm table',
    'base 10 log table',
    'four-decimal log table',
    'mantissa table',
    'log lookup',
    'log calculator',
    'logarithm calculator',
    'how to read a log table',
    'mean differences logarithm',
    'characteristic and mantissa',
    'log of two-digit numbers',
    'logarithm of numbers 10 to 99',
    'common log base 10'
  ]

  
  const sectionsContent={

    obj1:{
      title:`Getting Started with the Table`,
      content:`The table covers common (base-10) logarithms for values from $10$ to $99.99$, organized as a four-decimal mantissa table. To find a log, you read two table sections: the main grid for the first decimal digit, then a mean-difference column for the second.

Quick orientation:
- Column **N** shows the integer base from $10$ to $99$
- Columns $0$ through $9$ give the mantissa for the first decimal digit
- Columns **Mean Diff $1$** through **Mean Diff $9$** give the correction for the second decimal digit
- The calculator above the table accepts any positive value and returns the four-decimal log value
- The column header row and the input area stay sticky as you scroll`,
      before:``,
      after:``,
      link:'',
    },

    obj2:{
      title:`Using the Calculate Input`,
      content:`Type any positive number into the input and click **Calculate** to compute its logarithm.

Behavior:
- The input accepts decimals; values are rounded to two decimal places for the lookup
- The result appears as a four-decimal mantissa just above the table
- The matching row scrolls into view and centers automatically
- The cell used for the first decimal and the mean-difference cell used for the second decimal both highlight in yellow
- Negative numbers, zero, and non-numeric input show an error message in place of a result
- Click **Reset** to clear the input, the result, and all highlights`,
      before:``,
      after:``,
      link:'',
    },

    obj3:{
      title:`Reading the Mean Differences`,
      content:`The mean-difference columns extend the lookup beyond one-decimal precision. Without them, the table would only handle values like $25.0$, $25.1$, $25.2$; the mean differences let you read $\\log(25.43)$ or $\\log(25.78)$ directly.

How to use them:
- Find the row for the integer part of your number (for $25.43$, use row $25$)
- Read the value in the column matching the first decimal (column $4$)
- Read the value in **Mean Diff** matching the second decimal (Mean Diff $3$)
- Add the two values to get your final mantissa

Mean differences shrink as the row number grows because the spacing between consecutive log values gets smaller for larger numbers — this is the curvature of the log function shown in the table itself.`,
      before:``,
      after:``,
      link:'',
    },

    obj4:{
      title:`Hover Tooltips and Cell Detail`,
      content:`Every cell in the table has a tooltip on hover:
- Main grid cells show the original number that the mantissa corresponds to, along with the four-decimal value
- Mean-difference cells show the differential value itself

After a calculation, the table highlights three things at once:
- The row containing the integer base
- The cell at the intersection with the first-decimal column
- The mean-difference cell at the corresponding second-decimal column

The sticky column header stays visible while you scroll through the $90$-row table, so the digit labels at the top remain readable at any vertical position.`,
      before:``,
      after:``,
      link:'',
    },

    obj5:{
      title:`Looking Up a Value by Hand`,
      content:`For $\\log_{10}(23.47)$ using the table alone:
- Locate row $23$
- Read column $4$ — that gives the mantissa for $23.4$
- Read **Mean Diff $7$** on the same row — that adds the contribution from the second decimal
- Sum the two values to get the mantissa for $23.47$

The result is the mantissa only. The **characteristic** (integer part of the log) is determined by the number of digits before the decimal point in your original value, not from the table. For $23.47$ the characteristic is $1$ because there are two digits before the decimal point, so $\\log_{10}(23.47) \\approx 1 + \\text{(mantissa)}$.

For a deeper look at the lookup procedure, see the **logarithms theory page**.`,
      before:``,
      after:``,
      link:'',
    },

    obj6:{
      title:`What Is a Logarithm?`,
      content:`A **logarithm** answers the question: to what power must the base be raised to produce a given number? For base $10$:

$$\\log_{10}(x) = y \\quad \\iff \\quad 10^y = x$$

Simple examples: $\\log_{10}(100) = 2$ because $10^2 = 100$, and $\\log_{10}(1000) = 3$ because $10^3 = 1000$.

For values between powers of $10$ the logarithm is a non-integer. This table gives those non-integer values to four decimal places for every value from $10$ to $99.99$.

For a fuller treatment, see the **logarithms page**.`,
      before:``,
      after:``,
      link:'',
    },

    obj7:{
      title:`Common vs Natural Logarithms`,
      content:`Two logarithm bases dominate practical use:
- **Common logarithm** ($\\log_{10}$, often written just $\\log$) uses base $10$ — this table is a common log table
- **Natural logarithm** ($\\ln$) uses base $e \\approx 2.71828$

Conversion between them uses the change-of-base formula:

$$\\ln(x) = \\log_{10}(x) \\cdot \\ln(10)$$

with $\\ln(10) \\approx 2.302585$. So any value read from this table can be converted to a natural log by multiplying by $2.302585$.

For more on this, see the **logarithm properties page**.`,
      before:``,
      after:``,
      link:'',
    },

    obj8:{
      title:`Characteristic and Mantissa`,
      content:`Every common logarithm splits into two parts:
- The **characteristic** is the integer part, determined by the magnitude of the original number
- The **mantissa** is the fractional part, looked up in the table

For a number with $d$ digits before the decimal point, the characteristic is $d - 1$:
- $\\log_{10}(347) = 2 + \\text{mantissa}$
- $\\log_{10}(34.7) = 1 + \\text{mantissa}$
- $\\log_{10}(3.47) = 0 + \\text{mantissa}$

The mantissa stays the same when you shift the decimal point — only the characteristic changes. This is why a single table covering $10$ to $99.99$ extends to every positive number: pick up the mantissa from the table, then prepend the characteristic determined by counting digits.`,
      before:``,
      after:``,
      link:'',
    },

    obj9:{
      title:`Related Tools and Concepts`,
      content:`**Related Tools:**

**Logarithm Calculator** - Computes $\\log_{10}$ and $\\ln$ directly for any positive input without a lookup.

**Antilogarithm Table** - The inverse lookup: given a logarithm, find the original number.

**Related Concepts:**

**Logarithm Rules** - Product, quotient, and power rules for combining logarithms.

**Change of Base** - Convert a logarithm in any base into another base.

**Exponential Functions** - Inverses of logarithms; $\\log_b$ inverts $b^x$.

**Slide Rule** - The mechanical computer built on logarithm tables, superseded by electronic calculators.`,
      before:``,
      after:``,
      link:'',
    }

  }


  const faqQuestions = {
    obj1: {
      question: "What is a logarithm table?",
      answer: "A logarithm table lists the common (base-10) logarithm values of numbers within a given range, typically printed to four decimal places. This table covers every value from 10 to 99.99, organized so each row gives 19 lookup values for one integer base: 10 main mantissa columns plus 9 mean-difference corrections."
    },
    obj2: {
      question: "How do I read a logarithm table?",
      answer: "Find the row matching the integer part of your number, read the column matching the first decimal digit, then add the mean-difference value from the column matching the second decimal digit. For log of 23.47, you use row 23, column 4 for the main mantissa, and Mean Diff 7 for the second-decimal correction, summing the two."
    },
    obj3: {
      question: "What is the mean difference in a log table?",
      answer: "Mean differences are small corrections that extend the table from one-decimal precision to two-decimal precision. Without them, the table would only handle values like 25.4 or 25.5; the mean differences let you read log(25.43) by adding the Mean Diff 3 entry on row 25 to the column-4 value on the same row."
    },
    obj4: {
      question: "What is the difference between common log and natural log?",
      answer: "The common logarithm uses base 10 and is often written as log. The natural logarithm uses base e (about 2.71828) and is written as ln. To convert a common log to a natural log, multiply by ln(10), which is approximately 2.302585."
    },
    obj5: {
      question: "What are the characteristic and mantissa?",
      answer: "Every common logarithm splits into an integer characteristic and a fractional mantissa. The mantissa is what you read from the table. The characteristic is the integer part, determined by the magnitude of the number: a number with d digits before the decimal point has characteristic d minus 1. So 347, 34.7, and 3.47 all share the same mantissa but have characteristics 2, 1, and 0."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Logarithm Table",
      "description": "Four-decimal common logarithm table covering values from 10 to 99.99, with a built-in calculator that highlights the row and cell used for any input value.",
      "url": "https://www.learnmathclass.com/tables/logarithm",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Four-decimal common (base-10) logarithm table covering every value from 10 to 99.99",
        "Built-in calculator that accepts any positive number and returns the log value to four decimal places",
        "Mean differences columns 1 through 9 for second-decimal precision",
        "Automatic highlighting of the row, first-decimal cell, and mean-difference cell used in the calculation",
        "Auto-scroll that centers the highlighted row in view after each calculation",
        "Hover tooltips on every cell showing the original number and its corresponding mantissa",
        "Sticky column header and input area that stay visible while scrolling through the 90-row table"
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
          "name": "Tables",
          "item": "https://www.learnmathclass.com/tables"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Logarithm Table",
          "item": "https://www.learnmathclass.com/tables/logarithm"
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
      props:{
         sectionsContent,
         faqQuestions,
         schemas,
           seoData: {
      title: "Logarithm Table - Base 10 Log Values | Learn Math Class",
      description: "Look up common logarithms for numbers 10 to 99.99 in a four-decimal mantissa table. Built-in calculator highlights the row and cell used for any input value.",
      keywords: keyWords.join(", "),
      url: "/tables/logarithm",
      name: "Logarithm Table",
      hubDescription: "Look up common (base-10) logarithms for any value from 10 to 99.99 in a four-decimal mantissa table with mean-difference corrections. Type a number into the built-in calculator to see the result and watch the matching row, first-decimal cell, and mean-difference cell highlight automatically.",
      category: "Algebra",
      subCategory: ""
    },
    keyWords
        
       }
    }
   }
  



export default function LogarithmTablePage({sectionsContent, faqQuestions, schemas, seoData, keyWords}) {

  const genericSections = Object.keys(sectionsContent).map((key, index) => ({
    id: `${index + 1}`,
    title: sectionsContent[key].title,
    link: sectionsContent[key].link,
    content: [sectionsContent[key].content]
  }))

  return (
    <div className='tables-main'>
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
      {/* <GenericNavbar/> */}
      <br />
      <br />
      <br />
     
        <OperaSidebar 
             side='right'
             topOffset='55px' 
             sidebarWidth='45px'
             panelWidth='200px'
             iconColor='white'
             panelBackgroundColor='#f2f2f2'
           /> 
     <Breadcrumb />
      <div style={{position:'absolute', top:'100px', width:'95%', left:'0', right:'0'}}>
      
        <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Logarithm Table</h1>
        <LogarithmTable />
        <br/>
        <br/>
        <SectionTableOfContents sections={genericSections}/>
        <br/>
        <br/>
        <Sections sections={genericSections}/>
        <br/>
        <br/>
      </div>
      {/* <ScrollUpButton /> */}
    </div>
  )
}