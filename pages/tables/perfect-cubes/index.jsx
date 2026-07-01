// // import React from 'react';
// // import Head from 'next/head';
// // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';

// // import ExplanationDetails from '@/app/components/ExplanationDetails';
// // import '../../../pages.css';
// // import CubeRootsTable from '@/app/components/tables/CubeRootsTable';
// // import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// // import PerfectCubesPage from '../../../../app/components/tables/PerfectCubesPage';

// // export default function PerfectCubesTablePage({ keyWords, combinedInstructions }) {
// //   return (
// //     <>
// //       <Head>
// //         <title>Perfect Cubes 1-10000 | Cube Numbers Table | Learn Math Class</title>
// //         <meta name="description" content="Explore perfect cubes from 1 to 1000000 with our comprehensive table. Learn about cube numbers, find cube roots, and understand perfect cubes in mathematics." />
// //         <meta name="keywords" content={keyWords.join(', ')} />
// //         <link rel="canonical" href="https://www.learnmathclass.com/tables/arithmetics/perfect-cubes" />
        
// //         {/* Open Graph tags */}
// //         <meta property="og:title" content="Perfect Cubes Table (1-1000000) - Learn Math Class" />
// //         <meta property="og:description" content="Complete table of perfect cubes and their cube roots. Interactive search and educational explanations included." />
// //         <meta property="og:url" content="https://www.learnmathclass.com/tables/arithmetics/perfect-cubes" />
// //         <meta property="og:type" content="website" />
// //         <meta property="og:site_name" content="Learn Math Class" />
        
// //         {/* Twitter Card tags */}
// //         <meta name="twitter:card" content="summary_large_image" />
// //         <meta name="twitter:title" content="Perfect Cube Table (1-1000000)" />
// //         <meta name="twitter:description" content="Explore perfect cubes and their cube roots with our interactive table and search tool." />
// //       </Head>

// //       {/* <GenericNavbar/> */}
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       <Breadcrumb/>
// //       <OperaSidebar
// //         side='right'
// //         // topOffset='65px'
// //         sidebarWidth='45px'
// //         panelWidth='300px'
// //         iconColor='white'
// //         panelBackgroundColor='#f2f2f2'
// //       />

// //       <h1 className='title' style={{marginTop:'0px',marginBottom:'30px'}}>
// //         Perfect Cubes 1 - 1000000
// //       </h1>

// //       <div style={{ marginBottom: '30px' }}>
// //         <ExplanationDetails
// //           title="About This Table"
// //           instructions={combinedInstructions}
// //           links={[
// //             { text: "Root Calculator", url: "/calculators/root-calculator" },
// //             // { text: "Square Root Visualizer", url: "/visual-tools/square-root" }
// //           ]}
// //         />
// //       </div>

// //       {/* <div style={{transform:'scale(0.9)'}}>
// //        <CubeRootsTable/>
// //       </div> */}
// //       <PerfectCubesPage/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       {/* <ScrollUpButton/> */}
// //     </>
// //   );
// // }

// // export async function getStaticProps() {
// //   const keyWords = [
// //     'perfect cube',
// //     'cube root',
// //     'square numbers',
// //     'perfect cubes table',
// //     'cube root table',
// //     'integer cubes',
// //     'cube numbers',
// //     'mathematical cubes'
// //   ];

// //   const combinedInstructions = [
// //     "Use the search bar to find any perfect cube between 1 and 1,000,000",
// //     "Table shows perfect cubes organized in columns for easy reading",
// //     "Each entry shows both the cube root (∛) and its perfect cube",
// //     "Numbers not found in search aren't perfect cubes",
// //     "Perfect cubes are numbers that result from an integer multiplied by itself twice",
// //     "For example: 1=1×1×1, 8=2×2×2, 27=3×3×3, 64=4×4×4",
// //     "They follow a pattern: each perfect cube grows by the sum of three consecutive odd numbers from the previous one",
// //     "Used extensively in geometry for volume calculations and in algebra for factoring cubic expressions",
// //     "You can always find their exact cube root (no decimals)",
// //     "Perfect cubes connect to many math concepts like volume calculations and cubic equations"
// //   ];

// //   return {
// //     props: {
// //       keyWords,
// //       combinedInstructions
// //     },
// //     // Revalidate every 24 hours
// //     revalidate: 86400
// //   };
// // }



// import React from 'react';
// import Head from 'next/head';
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';

// import ExplanationDetails from '@/app/components/ExplanationDetails';
// import '../../../pages.css';
// import CubeRootsTable from '@/app/components/tables/CubeRootsTable';
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import PerfectCubesPage from '../../../app/components/tables/PerfectCubesPage';

// export default function PerfectCubesTablePage({ seoData, combinedInstructions, faqQuestions, schemas }) {
//   return (
//     <>
//       <Head>
//         <title>{seoData.title}</title>
//         <meta name="description" content={seoData.description} />
//         <meta name="keywords" content={seoData.keywords} />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

//         <meta property="og:title" content={seoData.title} />
//         <meta property="og:description" content={seoData.description} />
//         <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//         <meta property="og:type" content="article" />
//         <meta property="og:site_name" content="Learn Math Class" />

//         <meta name="twitter:card" content="summary" />
//         <meta name="twitter:title" content={seoData.title} />
//         <meta name="twitter:description" content={seoData.description} />

//         <meta name="robots" content="index, follow" />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(schemas.webApplication)
//           }}
//         />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(schemas.breadcrumb)
//           }}
//         />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(schemas.faq)
//           }}
//         />
//       </Head>

//       {/* <GenericNavbar/> */}
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <Breadcrumb/>
//       <OperaSidebar
//         side='right'
//         // topOffset='65px'
//         sidebarWidth='45px'
//         panelWidth='300px'
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'
//       />

//       <h1 className='title' style={{marginTop:'0px',marginBottom:'30px'}}>
//         Perfect Cubes 1 - 1000000
//       </h1>

//       <div style={{ marginBottom: '30px' }}>
//         <ExplanationDetails
//           title="About This Table"
//           instructions={combinedInstructions}
//           links={[
//             { text: "Root Calculator", url: "/calculators/root-calculator" },
//             // { text: "Square Root Visualizer", url: "/visual-tools/square-root" }
//           ]}
//         />
//       </div>

//       {/* <div style={{transform:'scale(0.9)'}}>
//        <CubeRootsTable/>
//       </div> */}
//       <PerfectCubesPage/>
//       <br/>
//       <br/>
//       <br/>
//       {/* <ScrollUpButton/> */}
//     </>
//   );
// }

// export async function getStaticProps() {
//   const keyWords = [
//     'perfect cubes table',
//     'perfect cubes 1 to 1000000',
//     'cube numbers list',
//     'cube roots table',
//     'is a number a perfect cube',
//     'perfect cube checker',
//     'list of perfect cubes',
//     'perfect cubes chart',
//     'cube numbers up to 1000000',
//     'perfect cube last digit',
//     'palindromic perfect cubes',
//     'perfect cubes with prime roots',
//     'cubes of triangular numbers',
//     'perfect cubes pattern',
//     'perfect cubes quiz'
//   ];

//   const combinedInstructions = [
//     'The Perfect Cube Tool above the table answers three kinds of questions',
//     '"Is N a cube?" tests any number: the tool reports the result and highlights the nearest cubes in the table',
//     '"Cube of N" computes N cubed for any integer and jumps to that cell with its details open',
//     '"Range" finds and highlights every perfect cube that falls between two numbers you enter',
//     'Each table cell shows the cube root and the cube for one of the 100 perfect cubes from 1 to 1,000,000',
//     "Cells are color-coded by the root's last digit, revealing the cubing involution: digits 0, 1, 4, 5, 6, 9 are fixed, while 2 swaps with 8 and 3 swaps with 7",
//     'Hover any cell to see the gap to the next perfect cube, which is always 3n^2 + 3n + 1',
//     'Click a cell to open a details panel with prime factorizations of cube and root, digit sum, last-digit mapping, mod 9 value, and property tags',
//     'The Patterns section has five filters: palindromic cubes, cubes that are also squares (sixth powers), cubes with prime roots, cubes of triangular numbers, and cubes preserving the last digit',
//     'The Properties section explains four facts: n^3 as a sum of n consecutive odd numbers, the last-digit involution, the gap formula 3n^2 + 3n + 1, and the mod 9 rule (cubes are 0, 1, or 8 mod 9)',
//     'The built-in quiz at the bottom lets you test your recall, with score persisting for the visit'
//   ];

//   const faqQuestions = {
//     obj1: {
//       question: "What is a perfect cube?",
//       answer: "A perfect cube is a non-negative integer that can be written as the product of an integer with itself three times. The first ten perfect cubes are 1, 8, 27, 64, 125, 216, 343, 512, 729, and 1000, formed by cubing the integers 1 through 10. Every perfect cube has an integer cube root."
//     },
//     obj2: {
//       question: "How can you tell if a number is a perfect cube?",
//       answer: "Two quick checks rule out most non-cubes. First, every perfect cube is congruent to 0, 1, or 8 modulo 9, so any number that is 2, 3, 4, 5, 6, or 7 mod 9 is immediately disqualified. Second, the last digit of a cube is fully determined by the last digit of its root, so an inconsistent last-digit pattern can also rule it out. If both tests pass, take the cube root and verify that the result is an integer."
//     },
//     obj3: {
//       question: "How many perfect cubes are there between 1 and 1,000,000?",
//       answer: "There are exactly 100 perfect cubes from 1 to 1,000,000, corresponding to the cubes of the integers from 1 through 100. The first is 1, equal to 1 cubed, and the last is 1,000,000, equal to 100 cubed."
//     },
//     obj4: {
//       question: "What is the gap between two consecutive perfect cubes?",
//       answer: "The difference between (n+1) cubed and n cubed is always 3n^2 + 3n + 1. For example, the gap between 10 cubed (1000) and 11 cubed (1331) is 331, which equals 3 times 100 plus 3 times 10 plus 1. As a corollary, n cubed equals the sum of n consecutive odd numbers: 1 cubed is 1, 2 cubed is 3 plus 5, 3 cubed is 7 plus 9 plus 11."
//     },
//     obj5: {
//       question: "How does cubing affect a number's last digit?",
//       answer: "Cubing acts as an involution on the last digit. The digits 0, 1, 4, 5, 6, and 9 are fixed: the cube ends in the same digit as the root. The digits 2 and 8 swap with each other, as do 3 and 7. So the last digit of a perfect cube uniquely determines the last digit of its cube root, which makes mental cube-root extraction much easier."
//     }
//   };

//   const schemas = {
//     webApplication: {
//       "@context": "https://schema.org",
//       "@type": "WebApplication",
//       "name": "Perfect Cubes Table and Tool 1 to 1,000,000",
//       "description": "Look up every perfect cube from 1 to 1,000,000. Test any number, cube any integer, or find cubes in a range. Pattern filters, cell details, and a quiz.",
//       "url": "https://www.learnmathclass.com/tables/arithmetics/perfect-cubes",
//       "applicationCategory": "EducationalApplication",
//       "operatingSystem": "Any",
//       "offers": {
//         "@type": "Offer",
//         "price": "0",
//         "priceCurrency": "USD"
//       },
//       "featureList": [
//         "Three-mode lookup tool: test if a number is a perfect cube, compute the cube of any integer, or find every cube within a range",
//         "Searchable table of every perfect cube from 1 to 1,000,000 with click-to-expand cell details",
//         "Cells color-coded by the root's last digit, illustrating the cubing involution where 0, 1, 4, 5, 6, 9 are fixed and 2 swaps with 8, 3 swaps with 7",
//         "Hover tooltips showing the gap to the next perfect cube (the 3n^2 + 3n + 1 rule)",
//         "Five pattern filters: palindromic cubes, sixth powers (cubes that are also squares), prime-root cubes, cubes of triangular numbers, and cubes preserving the last digit",
//         "Per-cell details panel with prime factorization of both cube and root, digit sum, last-digit mapping (root to cube), and mod 9 value",
//         "Built-in quiz with persistent score for memorizing the perfect-cubes table"
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
//       "educationalLevel": "Elementary, Middle School, High School",
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
//           "name": "Perfect Cubes",
//           "item": "https://www.learnmathclass.com/tables/arithmetics/perfect-cubes"
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
//   };

//   return {
//     props: {
//       combinedInstructions,
//       faqQuestions,
//       schemas,
//       seoData: {
//         title: "Perfect Cubes 1-1000000 Table & Tool | Learn Math Class",
//         description: "Look up every perfect cube from 1 to 1,000,000. Test any number, cube any integer, or find cubes in a range. Pattern filters, cell details, and a quiz.",
//         keywords: keyWords.join(", "),
//         url: "/tables/arithmetics/perfect-cubes",
//         name: "Perfect Cubes Table and Tool 1 to 1,000,000"
//       }
//     },
//     revalidate: 86400
//   };
// }



import React from 'react';
import Head from 'next/head';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';

import ExplanationDetails from '@/app/components/ExplanationDetails';
import '../../../pages.css';
import CubeRootsTable from '@/app/components/tables/CubeRootsTable';
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import PerfectCubesPage from '../../../app/components/tables/PerfectCubesPage';

export default function PerfectCubesTablePage({ seoData, combinedInstructions, faqQuestions, schemas }) {
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
      <Breadcrumb/>
      <OperaSidebar
        side='right'
        // topOffset='65px'
        sidebarWidth='45px'
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />

      <h1 className='title' style={{marginTop:'0px',marginBottom:'30px'}}>
        Perfect Cubes 1 - 1000000
      </h1>

      <div style={{ marginBottom: '30px' }}>
        <ExplanationDetails
          title="About This Table"
          instructions={combinedInstructions}
          links={[
            { text: "Root Calculator", url: "/calculators/root-calculator" },
            // { text: "Square Root Visualizer", url: "/visual-tools/square-root" }
          ]}
        />
      </div>

      {/* <div style={{transform:'scale(0.9)'}}>
       <CubeRootsTable/>
      </div> */}
      <PerfectCubesPage/>
      <br/>
      <br/>
      <br/>
      {/* <ScrollUpButton/> */}
    </>
  );
}

export async function getStaticProps() {
  const keyWords = [
    'perfect cubes table',
    'perfect cubes 1 to 1000000',
    'cube numbers list',
    'cube roots table',
    'is a number a perfect cube',
    'perfect cube checker',
    'list of perfect cubes',
    'perfect cubes chart',
    'cube numbers up to 1000000',
    'perfect cube last digit',
    'palindromic perfect cubes',
    'perfect cubes with prime roots',
    'cubes of triangular numbers',
    'perfect cubes pattern',
    'perfect cubes quiz'
  ];

  const combinedInstructions = [
    'The Perfect Cube Tool above the table answers three kinds of questions',
    '"Is N a cube?" tests any number: the tool reports the result and highlights the nearest cubes in the table',
    '"Cube of N" computes N cubed for any integer and jumps to that cell with its details open',
    '"Range" finds and highlights every perfect cube that falls between two numbers you enter',
    'Each table cell shows the cube root and the cube for one of the 100 perfect cubes from 1 to 1,000,000',
    "Cells are color-coded by the root's last digit, revealing the cubing involution: digits 0, 1, 4, 5, 6, 9 are fixed, while 2 swaps with 8 and 3 swaps with 7",
    'Hover any cell to see the gap to the next perfect cube, which is always 3n^2 + 3n + 1',
    'Click a cell to open a details panel with prime factorizations of cube and root, digit sum, last-digit mapping, mod 9 value, and property tags',
    'The Patterns section has five filters: palindromic cubes, cubes that are also squares (sixth powers), cubes with prime roots, cubes of triangular numbers, and cubes preserving the last digit',
    'The Properties section explains four facts: n^3 as a sum of n consecutive odd numbers (with a visual dot pyramid), the last-digit involution, the gap formula 3n^2 + 3n + 1, and the mod 9 rule (cubes are 0, 1, or 8 mod 9)',
    'The built-in quiz at the bottom lets you test your recall, with score persisting for the visit'
  ];

  const faqQuestions = {
    obj1: {
      question: "What is a perfect cube?",
      answer: "A perfect cube is a non-negative integer that can be written as the product of an integer with itself three times. The first ten perfect cubes are 1, 8, 27, 64, 125, 216, 343, 512, 729, and 1000, formed by cubing the integers 1 through 10. Every perfect cube has an integer cube root."
    },
    obj2: {
      question: "How can you tell if a number is a perfect cube?",
      answer: "Two quick checks rule out most non-cubes. First, every perfect cube is congruent to 0, 1, or 8 modulo 9, so any number that is 2, 3, 4, 5, 6, or 7 mod 9 is immediately disqualified. Second, the last digit of a cube is fully determined by the last digit of its root, so an inconsistent last-digit pattern can also rule it out. If both tests pass, take the cube root and verify that the result is an integer."
    },
    obj3: {
      question: "How many perfect cubes are there between 1 and 1,000,000?",
      answer: "There are exactly 100 perfect cubes from 1 to 1,000,000, corresponding to the cubes of the integers from 1 through 100. The first is 1, equal to 1 cubed, and the last is 1,000,000, equal to 100 cubed."
    },
    obj4: {
      question: "What is the gap between two consecutive perfect cubes?",
      answer: "The difference between (n+1) cubed and n cubed is always 3n^2 + 3n + 1. For example, the gap between 10 cubed (1000) and 11 cubed (1331) is 331, which equals 3 times 100 plus 3 times 10 plus 1. As a corollary, n cubed equals the sum of n consecutive odd numbers: 1 cubed is 1, 2 cubed is 3 plus 5, 3 cubed is 7 plus 9 plus 11."
    },
    obj5: {
      question: "How does cubing affect a number's last digit?",
      answer: "Cubing acts as an involution on the last digit. The digits 0, 1, 4, 5, 6, and 9 are fixed: the cube ends in the same digit as the root. The digits 2 and 8 swap with each other, as do 3 and 7. So the last digit of a perfect cube uniquely determines the last digit of its cube root, which makes mental cube-root extraction much easier."
    }
  };

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Perfect Cubes Table and Tool 1 to 1,000,000",
      "description": "Look up every perfect cube from 1 to 1,000,000. Test any number, cube any integer, or find cubes within a range, with pattern filters, cell details, and a built-in quiz.",
      "url": "https://www.learnmathclass.com/tables/arithmetics/perfect-cubes",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Three-mode lookup tool: test if a number is a perfect cube, compute the cube of any integer, or find every cube within a range you enter",
        "Reference table of every perfect cube from 1 to 1,000,000 — all 100 cubes, organized in 10 vertical stacks of 10",
        "Cells color-coded by the root's last digit, illustrating the cubing involution: 0, 1, 4, 5, 6, 9 are fixed, 2 swaps with 8, and 3 swaps with 7",
        "Hover tooltips on every cell showing the gap to the next perfect cube (the 3n^2 + 3n + 1 rule)",
        "Five pattern filters: palindromic cubes, sixth powers (cubes that are also squares), prime-root cubes, cubes of triangular numbers, and cubes preserving the last digit",
        "Click any cell to expand a details panel with prime factorizations of cube and root, digit sum, last-digit mapping, mod 9 value, and property tags",
        "Four properties cards (sum of consecutive odd numbers with a visual dot pyramid, last-digit involution, gap formula, mod-9 rule) plus a built-in quiz with session-persistent score"
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
          "name": "Perfect Cubes",
          "item": "https://www.learnmathclass.com/tables/arithmetics/perfect-cubes"
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
  };

  return {
    props: {
      combinedInstructions,
      faqQuestions,
      schemas,
      seoData: {
        title: "Perfect Cubes 1-1000000 Table & Tool | Learn Math Class",
        description: "Look up every perfect cube from 1 to 1,000,000. Test any number, cube any integer, or find cubes within a range. Pattern filters, cell details, and a quiz.",
        keywords: keyWords.join(", "),
        url: "/tables/arithmetics/perfect-cubes",
        name: "Perfect Cubes Table and Tool 1 to 1,000,000",
        hubDescription: "Look up every perfect cube from 1 to 1,000,000 in one of three modes: test whether a number is a cube, compute the cube of any integer, or find every cube within a range. Cells are color-coded by the root's last digit, hover for the gap to the next cube, and click any cell for prime factorization, digit sum, and mod-9 details.",
        category: "Arithmetic",
        subCategory: ""
      }
    },
    revalidate: 86400
  };
}