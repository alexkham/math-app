


// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import '../../../../pages/pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// // import MultiplicationTablesPage from '../../../../app/components/tables/MultiplicationTablePage'
// import MultiplicationTablePage from '../../../app/components/tables/MultiplicationTablePage'


// export async function getStaticProps(){

//   const keyWords = [
//     'multiplication tables',
//     'times table chart',
//     'multiplication chart',
//     'times table generator',
//     'multiplication grid 20x20',
//     '2 times table',
//     '3 times table',
//     '4 times table',
//     '5 times table',
//     '6 times table',
//     '7 times table',
//     '8 times table',
//     '9 times table',
//     '12 times table',
//     'times tables 1 to 100'
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


//   const introContent = {
//     id: "intro",
//     title: "",
//     content: ``
//   }


//   const faqQuestions = {
//     obj1: {
//       question: "What is a multiplication table?",
//       answer: "A multiplication table, also called a times table, is a grid that shows the product of two numbers. The cell at row a, column b contains the value of a times b. Standard charts cover 1 through 10 or 12, while extended grids reach 20 by 20 and beyond."
//     },
//     obj2: {
//       question: "How do you read a multiplication chart?",
//       answer: "To find the product of a and b, locate row a and move across to column b. The number in that cell is the answer. Because multiplication is commutative, the cell at row b, column a holds the same value, so the chart can be read either way."
//     },
//     obj3: {
//       question: "What are the easiest times tables to memorize?",
//       answer: "The 1s, 10s, 2s, and 5s are usually learned first because they follow simple patterns: any number unchanged, append a zero, doubling, and an alternation of 5 and 0 in the last digit. The 11s from 11 times 1 to 11 times 9 also follow a memorable digit-repeating pattern. The 7s and 8s tend to be the last to stick."
//     },
//     obj4: {
//       question: "Why is the multiplication grid symmetric?",
//       answer: "The multiplication grid is symmetric across its main diagonal because multiplication is commutative: a times b equals b times a for any two numbers. Every off-diagonal cell has a mirror twin on the other side of the diagonal with the same product."
//     },
//     obj5: {
//       question: "What is a factor pair?",
//       answer: "A factor pair of a number N is a pair of positive integers (a, b) such that a times b equals N. Every divisor of N pairs uniquely with another divisor. Factor pairs come in pairs except when N is a perfect square, where the square root pairs with itself."
//     }
//   }


//   const schemas = {
//     webApplication: {
//       "@context": "https://schema.org",
//       "@type": "WebApplication",
//       "name": "Multiplication Tables and Times Table Tool",
//       "description": "Generate any times table from 1 to 999. Browse 10x10 to 20x20 multiplication grids, find factor pairs of any number, and test yourself with a quiz.",
//       "url": "https://www.learnmathclass.com/tables/arithmetics/multiplication",
//       "applicationCategory": "EducationalApplication",
//       "operatingSystem": "Any",
//       "offers": {
//         "@type": "Offer",
//         "price": "0",
//         "priceCurrency": "USD"
//       },
//       "featureList": [
//         "Three-mode tool: generate any times table from 1 to 999, compute the product of two numbers, or find every factor pair of a number inside the grid",
//         "Selectable grid sizes from 10x10 up to 20x20 multiplication tables",
//         "Single-row times-table mode with pagination supporting up to 100 multipliers per row",
//         "Click-to-expand cell details with factors, commutative partner, full factor-pair list, and property tags",
//         "Five pattern filters: perfect squares (the diagonal), prime products, even products, odd products, and highly composite products",
//         "Visual diagonal-symmetry mini-grid illustrating the commutative property a times b equals b times a",
//         "Built-in quiz with three rotating question types and persistent score for the visit"
//       ],
//       "author": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       },
//       "datePublished": "2024-01-15",
//       "dateModified": new Date().toISOString(),
//       "inLanguage": "en-US",
//       "isAccessibleForFree": true,
//       "learningResourceType": "Reference Table and Interactive Tool",
//       "educationalLevel": "Elementary, Middle School",
//       "keywords": keyWords.join(", ")
//     },

//     breadcrumb: {
//       "@context": "https://schema.org",
//       "@type": "BreadcrumbList",
//       "itemListElement": [
//         {
//           "@type": "ListItem",
//           "position": 1,
//           "name": "Home",
//           "item": "https://www.learnmathclass.com"
//         },
//         {
//           "@type": "ListItem",
//           "position": 2,
//           "name": "Tables",
//           "item": "https://www.learnmathclass.com/tables"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Arithmetic",
//           "item": "https://www.learnmathclass.com/tables/arithmetics"
//         },
//         {
//           "@type": "ListItem",
//           "position": 4,
//           "name": "Multiplication Tables",
//           "item": "https://www.learnmathclass.com/tables/arithmetics/multiplication"
//         }
//       ]
//     },

//     faq: {
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       "mainEntity": Object.keys(faqQuestions).map(key => ({
//         "@type": "Question",
//         "name": faqQuestions[key].question,
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": faqQuestions[key].answer
//         }
//       }))
//     }
//   }


//    return {
//       props:{
//          sectionsContent,
//          introContent,
//          faqQuestions,
//          schemas,
//          seoData: {
//            title: "Multiplication Tables & Times Table Tool | Learn Math Class",
//            description: "Generate any times table from 1 to 999. Browse 10x10 to 20x20 multiplication grids, find factor pairs of any number, and test yourself with a quiz.",
//            keywords: keyWords.join(", "),
//            url: "/tables/multiplication",
//            name: "Multiplication Tables and Times Table Tool"
//          }
//        }
//     }
//    }

// export default function MultiplicationTablesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
//   const genericSections=[
//     {
//         id:'1',
//         title:'section1',
//         link:'',
//         content:''
//     },
//     {
//         id:'2',
//         title:'section2',
//         link:'',
//         content:''
//     },
//     {
//         id:'',
//         title:'',
//         link:'',
//         content:''
//     }
// ]

//   return (
//    <>
//    <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
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
//       __html: JSON.stringify(schemas.webApplication)
//     }}
//   />

//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.breadcrumb)
//     }}
//   />

//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.faq)
//     }}
//   />
// </Head>
//    {/* <GenericNavbar/> */}
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     <OperaSidebar 
//            side='right'
//            // topOffset='65px' 
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          /> 
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Multiplication Tables</h1>
//    <br/>
//    {/* <MultiplicationTables/> */}
//   <MultiplicationTablePage/>
//    <br/>
//    <br/>
//    {/* <SectionTableOfContents sections={genericSections}/> */}
//    <br/>
//    <br/>
//    <br/>
//     {/* <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//           backgroundColor="#f2f2f2"
//           textColor="#34383c"
//         /> */}
//    <br/>
//    <br/>
//    {/* <Sections sections={genericSections}/> */}
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import '@/pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import MultiplicationTablesPage from '../../../../app/components/tables/MultiplicationTablePage'
import MultiplicationTablePage from '../../../app/components/tables/MultiplicationTablePage'


export async function getStaticProps(){

  const keyWords = [
    'multiplication tables',
    'times table chart',
    'multiplication chart',
    'times table generator',
    'multiplication grid 20x20',
    '2 times table',
    '3 times table',
    '4 times table',
    '5 times table',
    '6 times table',
    '7 times table',
    '8 times table',
    '9 times table',
    '12 times table',
    'times tables 1 to 100'
  ]

  const sectionsContent={

    obj1:{
      title:``,
      content:``,
      before:``,
      after:``,
    },
    obj2:{
      title:``,
      content:``,
      before:``,
      after:``,
    },
    obj3:{
      title:``,
      content:``,
      before:``,
      after:``,
    },
    obj4:{
      title:``,
      content:``,
      before:``,
      after:``,
    },
    obj5:{
      title:``,
      content:``,
      before:``,
      after:``,
    }

  }


  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }


  const faqQuestions = {
    obj1: {
      question: "What is a multiplication table?",
      answer: "A multiplication table, also called a times table, is a grid that shows the product of two numbers. The cell at row a, column b contains the value of a times b. Standard charts cover 1 through 10 or 12, while extended grids reach 20 by 20 and beyond."
    },
    obj2: {
      question: "How do you read a multiplication chart?",
      answer: "To find the product of a and b, locate row a and move across to column b. The number in that cell is the answer. Because multiplication is commutative, the cell at row b, column a holds the same value, so the chart can be read either way."
    },
    obj3: {
      question: "What are the easiest times tables to memorize?",
      answer: "The 1s, 10s, 2s, and 5s are usually learned first because they follow simple patterns: any number unchanged, append a zero, doubling, and an alternation of 5 and 0 in the last digit. The 11s from 11 times 1 to 11 times 9 also follow a memorable digit-repeating pattern. The 7s and 8s tend to be the last to stick."
    },
    obj4: {
      question: "Why is the multiplication grid symmetric?",
      answer: "The multiplication grid is symmetric across its main diagonal because multiplication is commutative: a times b equals b times a for any two numbers. Every off-diagonal cell has a mirror twin on the other side of the diagonal with the same product."
    },
    obj5: {
      question: "What is a factor pair?",
      answer: "A factor pair of a number N is a pair of positive integers (a, b) such that a times b equals N. Every divisor of N pairs uniquely with another divisor. Factor pairs come in pairs except when N is a perfect square, where the square root pairs with itself."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Multiplication Tables and Times Table Tool",
      "description": "Generate any times table from 1 to 999. Browse 10x10 to 20x20 multiplication grids, find factor pairs of any number, and test yourself with a rotating quiz.",
      "url": "https://www.learnmathclass.com/tables/multiplication",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Three-mode tool: generate any times table from 1 to 999, compute the product of two numbers, or find every factor pair of a number inside the grid",
        "Four selectable grid sizes: 10x10, 12x12, 15x15, and 20x20",
        "Single-row times-table mode with pagination supporting up to 100 multipliers per row, with the matching row highlighted in the main grid",
        "Click any cell to expand a details panel showing factors, commutative partner, full factor-pair list of the product, and property tags (perfect square, prime, even or odd, highly composite)",
        "Five pattern filters: perfect squares (the diagonal), prime products, even products, odd products, and highly composite products",
        "Four properties cards covering commutativity (with a visual mirror mini-grid), the squares diagonal, the identity element, and the distributive property",
        "Built-in quiz with three rotating question types and a running score for the session"
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
      "educationalLevel": "Elementary, Middle School",
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
          "name": "Multiplication Tables",
          "item": "https://www.learnmathclass.com/tables/arithmetics/multiplication"
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
         introContent,
         faqQuestions,
         schemas,
         seoData: {
           title: "Multiplication Tables & Times Table Tool | Learn Math Class",
           description: "Generate any times table from 1 to 999. Browse 10x10 to 20x20 multiplication grids, find factor pairs of any number, and test yourself with a rotating quiz.",
           keywords: keyWords.join(", "),
           url: "/tables/multiplication",
           name: "Multiplication Tables and Times Table Tool",
           hubDescription: "Generate any times table from 1 to 999, compute the product of two numbers, or find every factor pair of any number inside a multiplication grid sized 10x10, 12x12, 15x15, or 20x20. Filter the grid by pattern (perfect squares, primes, even or odd products, highly composite), open any cell to see its factors and commutative partner, and drill with a three-type quiz.",
           category: "Arithmetic",
           subCategory: ""
         }
       }
    }
   }

export default function MultiplicationTablesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
  const genericSections=[
    {
        id:'1',
        title:'section1',
        link:'',
        content:''
    },
    {
        id:'2',
        title:'section2',
        link:'',
        content:''
    },
    {
        id:'',
        title:'',
        link:'',
        content:''
    }
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Multiplication Tables</h1>
   <br/>
   {/* <MultiplicationTables/> */}
  <MultiplicationTablePage/>
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
          backgroundColor="#f2f2f2"
          textColor="#34383c"
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