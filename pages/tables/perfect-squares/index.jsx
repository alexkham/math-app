


// import Head from 'next/head';
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
// import SquareRootsTable from '@/app/components/tables/SquareRootsTable';
// import ExplanationDetails from '@/app/components/ExplanationDetails';
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import '../../../pages.css';
// import PerfectSquaresPage from '../../../../app/components/tables/PerfectSquaresPage';

// export default function PerfectSquaresTablePage({ keyWords, combinedInstructions }) {
//   return (
//     <>
//       <Head>
//         <title>Perfect Squares 1-10000 | Square Numbers Table | Learn Math Class</title>
//         <meta name="description" content="Explore perfect squares from 1 to 10000 with our comprehensive table. Learn about square numbers, find square roots, and understand perfect squares in mathematics." />
//         <meta name="keywords" content={keyWords.join(', ')} />
//         <link rel="canonical" href="https://www.learnmathclass.com/tables/arithmetics/perfect-squares" />
        
//         {/* Open Graph tags */}
//         <meta property="og:title" content="Perfect Squares Table (1-10000) - Learn Math Class" />
//         <meta property="og:description" content="Complete table of perfect squares and their square roots. Interactive search and educational explanations included." />
//         <meta property="og:url" content="https://www.learnmathclass.com/tables/arithmetics/perfect-squares" />
//         <meta property="og:type" content="website" />
//         <meta property="og:site_name" content="Learn Math Class" />
        
//         {/* Twitter Card tags */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Perfect Squares Table (1-10000)" />
//         <meta name="twitter:description" content="Explore perfect squares and their square roots with our interactive table and search tool." />
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
//         Perfect Squares 1 - 10000
//       </h1>

//       <div style={{ marginBottom: '30px' }}>
//         <ExplanationDetails
//           title="About This Table"
//           instructions={combinedInstructions}
//           links={[
//             { text: "Root Calculator", url: "/calculators/root-calculator" },
//             { text: "Square Root Visualizer", url: "/visual-tools/square-root" }
//           ]}
//         />
//       </div>
//       {/* <div style={{marginLeft:'-300px'}}> */}
//    <PerfectSquaresPage/>
//    {/* </div> */}
//       {/* <div style={{transform:'scale(0.9)'}}>
//         <SquareRootsTable/>
//       </div> */}

//       <br/>
//       <br/>
//       <br/>
//       {/* <ScrollUpButton/> */}
//     </>
//   );
// }

// export async function getStaticProps() {
//   const keyWords = [
//     'perfect square',
//     'square root',
//     'square numbers',
//     'perfect squares table',
//     'square root table',
//     'integer squares',
//     'quadratic numbers',
//     'mathematical squares'
//   ];

//   const combinedInstructions = [
//     "Use the search bar to find any perfect square between 1 and 10000",
//     "Table shows perfect squares organized in columns for easy reading",
//     "Each entry shows both the square root (√) and its perfect square",
//     "Numbers not found in search aren't perfect squares",
//     "Perfect squares are numbers that result from an integer multiplied by itself",
//     "For example: 1=1×1, 4=2×2, 9=3×3, 16=4×4",
//     "They follow a pattern: each perfect square is the previous one plus the next odd number",
//     "Used extensively in geometry for area calculations and in algebra for factoring",
//     "You can always find their exact square root (no decimals)",
//     "Perfect squares connect to many math concepts like the Pythagorean theorem"
//   ];

//   return {
//     props: {
//       keyWords,
//       combinedInstructions
//     },
//     // Revalidate every 24 hours
//     revalidate: 86400
//   };
// }



import Head from 'next/head';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import SquareRootsTable from '@/app/components/tables/SquareRootsTable';
import ExplanationDetails from '@/app/components/ExplanationDetails';
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import '../../../pages.css';
import PerfectSquaresPage from '../../../app/components/tables/PerfectSquaresPage';

export default function PerfectSquaresTablePage({ seoData, combinedInstructions, faqQuestions, schemas }) {
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
        Perfect Squares 1 - 10000
      </h1>

      <div style={{ marginBottom: '30px' }}>
        <ExplanationDetails
          title="About This Table"
          instructions={combinedInstructions}
          links={[
            { text: "Root Calculator", url: "/calculators/root-calculator" },
            { text: "Square Root Visualizer", url: "/visual-tools/square-root" }
          ]}
        />
      </div>
      {/* <div style={{marginLeft:'-300px'}}> */}
   <PerfectSquaresPage/>
   {/* </div> */}
      {/* <div style={{transform:'scale(0.9)'}}>
        <SquareRootsTable/>
      </div> */}

      <br/>
      <br/>
      <br/>
      {/* <ScrollUpButton/> */}
    </>
  );
}

export async function getStaticProps() {
  const keyWords = [
    'perfect squares table',
    'perfect squares 1 to 10000',
    'square numbers list',
    'square roots table',
    'is a number a perfect square',
    'perfect square checker',
    'list of perfect squares',
    'perfect squares chart',
    'square numbers up to 10000',
    'perfect square last digit',
    'palindromic perfect squares',
    'square triangular numbers',
    'perfect squares with prime roots',
    'perfect squares pattern',
    'perfect squares quiz'
  ];

  const combinedInstructions = [
    'The Perfect Square Tool above the table answers three kinds of questions',
    '"Is N a square?" tests any number: the tool reports the result and highlights the two nearest squares in the table',
    '"Square of N" computes N squared for any integer and jumps to that cell with its details open',
    '"Range" finds and highlights every perfect square that falls between two numbers you enter',
    'Each table cell shows the square root and the square for one of the 100 perfect squares from 1 to 10000',
    'Cells are color-coded by last digit — every perfect square ends in 0, 1, 4, 5, 6, or 9',
    'Hover any cell to see the gap to the next perfect square, which is always the next odd number',
    'Click a cell to open a details panel with prime factorizations, digit sum, last digit, and property tags',
    'The Patterns section has five filters: palindromic squares, squares ending in 25, Pythagorean triple members, prime-root squares, and square triangular numbers',
    'The Properties section explains four invariants: sum of odd numbers, odd divisor count, the 2n+1 gap, and the mod 4 rule',
    'The built-in quiz at the bottom lets you test your recall, with score persisting for the visit'
  ];

  const faqQuestions = {
    obj1: {
      question: "What is a perfect square?",
      answer: "A perfect square is a non-negative integer that can be written as the product of an integer with itself. The first ten perfect squares are 1, 4, 9, 16, 25, 36, 49, 64, 81, and 100, formed by squaring the integers 1 through 10. Every perfect square has an integer square root."
    },
    obj2: {
      question: "How can you tell if a number is a perfect square?",
      answer: "Three quick checks rule out most non-squares. First, the last digit of a perfect square is always 0, 1, 4, 5, 6, or 9, so numbers ending in 2, 3, 7, or 8 are immediately disqualified. Second, every perfect square is congruent to 0 or 1 modulo 4. If both tests pass, take the square root and verify that the result is an integer."
    },
    obj3: {
      question: "How many perfect squares are there between 1 and 10000?",
      answer: "There are exactly 100 perfect squares from 1 to 10000, corresponding to the squares of the integers from 1 through 100. The first is 1, equal to 1 squared, and the last is 10000, equal to 100 squared."
    },
    obj4: {
      question: "What pattern do consecutive perfect squares follow?",
      answer: "The gap between two consecutive perfect squares n squared and (n+1) squared is always 2n+1, the next odd number. The gap from 1 to 4 is 3, from 4 to 9 is 5, from 9 to 16 is 7, and so on. Equivalently, the n-th perfect square equals the sum of the first n odd numbers: 1, 1 plus 3 equals 4, 1 plus 3 plus 5 equals 9."
    },
    obj5: {
      question: "Why do perfect squares have an odd number of divisors?",
      answer: "Divisors of any positive integer pair up as d and n divided by d. For non-squares these are always distinct, so divisors come in pairs and the total count is even. For a perfect square, the pairing collapses at the square root, which is its own partner, leaving exactly one unpaired divisor. That is why perfect squares are the only positive integers with an odd divisor count."
    }
  };

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Perfect Squares Table and Tool 1 to 10000",
      "description": "Look up every perfect square from 1 to 10000. Test any number, square any integer, or find squares in a range. Filters, cell details, and a quiz.",
      "url": "https://www.learnmathclass.com/tables/arithmetics/perfect-squares",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Three-mode lookup tool: test if a number is a perfect square, compute the square of any integer, or find every square within a range",
        "Searchable table of every perfect square from 1 to 10000 with click-to-expand cell details",
        "Cells color-coded by last digit, illustrating that perfect squares end only in 0, 1, 4, 5, 6, or 9",
        "Hover tooltips showing the gap to the next perfect square (the 2n+1 rule)",
        "Five pattern filters: palindromic squares, squares ending in 25, Pythagorean triple members, prime-root squares, and square triangular numbers",
        "Per-cell details panel with prime factorization of both square and root, digit sum, and tagged special properties",
        "Built-in quiz with persistent score for memorizing the perfect-squares table"
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
          "name": "Perfect Squares",
          "item": "https://www.learnmathclass.com/tables/arithmetics/perfect-squares"
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
        title: "Perfect Squares 1-10000 Table & Tool | Learn Math Class",
        description: "Look up every perfect square from 1 to 10000. Test any number, square any integer, or find squares in a range. Filters, cell details, and a quiz.",
        keywords: keyWords.join(", "),
        url: "/tables/arithmetics/perfect-squares",
        name: "Perfect Squares Table and Tool 1 to 10000",
        category:'Arithmetic'
      }
    },
    revalidate: 86400
  };
}