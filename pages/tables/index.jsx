// // import Link from 'next/link';
// // import Head from 'next/head';
// // import { Book, Calculator, PieChart, Sigma, Percent,Section ,DraftingCompass,BookOpenCheck } from 'lucide-react';

// // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
// // import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'

// // const categoryIcons = {
// //   'Algebra': Book,
// //   'Calculus': Sigma,
// //   'Trigonometry': PieChart,
// //   'Probability': Percent,
// //   'Arithmetics': Calculator,
// //   'Math-Symbols':Section,
// //   'Truth-Tables':BookOpenCheck,
// //   'Angle-Conversion-Table': DraftingCompass,
// //   'Trigonometry-Tables': PieChart ,
// // };




// // export default function Tables({ categories ,categoryLinks }) {
 
// //   return (
// //     <>
// //       <Head>
// //         <title>Mathematical Tables | Learn Math Class</title>
// //         <meta name="description" content="Explore our comprehensive collection of mathematical tables including algebra, calculus, trigonometry, probability, and arithmetics." />
// //         <link rel="canonical" href="https://www.learnmathclass.com/tables" />
// //       </Head>
// //       {/* <GenericNavbar/> */}
// //       <br/>
// //       <br/>
// //       <br/>
// //       <OperaSidebar 
// //         side='right'
// //         // topOffset='60px' 
// //         sidebarWidth='45px'
// //         panelWidth='200px'
// //         iconColor='white'
// //         panelBackgroundColor='#f2f2f2'
// //       /> 
// //       <div >
// //         <Breadcrumb/>
// //         <h1 >Mathematical Tables</h1>
// //         <div >
// //           {categories.map((category) => {
// //             const Icon = categoryIcons[category];
// //             return (
// //               <Link href={categoryLinks[category]} key={category} className={styles.link}>
// //                 <div className={styles.card}>
// //                   <div className={styles.cardContent}>
// //                     <Icon className={styles.icon} />
// //                     <h2 className={styles.categoryTitle}>{category.replaceAll('-',' ')}</h2>
// //                     <p className={styles.description}>Explore {category.toLowerCase().replaceAll('-',' ')} tables and functions</p>
// //                   </div>
// //                   <div className={styles.cardFooter}>
// //                     <span className={styles.viewText}>View Tables →</span>
// //                   </div>
// //                 </div>
// //               </Link>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </>
// //   );


// // }

// // export async function getStaticProps() {

// //   const categoryLinks = {
// //     // 'Algebra': '/algebra',
// //     // 'Calculus': '/calculus',
// //     // 'Trigonometry': '/trigonometry',
// //     'Probability': '/tables/probability',
// //     'Arithmetics': '/tables/arithmetics',
// //     'Math-Symbols': '/math-symbols',
// //     'Truth-Tables':'/logic/truth-tables',
// //     'Angle-Conversion-Table':'/tables/angle-conversion',
// //     'Trigonometry-Tables':'/tables/trigonometry'

// //   };
  
// //   const categories = 
// //   [
// //     // 'Algebra', 
// //     // 'Calculus', 
// //     // 'Trigonometry',
// //      'Probability',
// //       'Arithmetics',
// //       'Math-Symbols',
// //       'Truth-Tables',
// //       'Angle-Conversion-Table',
// //       'Trigonometry-Tables',

// //    ];
// //   return { props: { categories, categoryLinks } };
// // }

// import React from 'react'

// export default function index() {
//   return (
//    <>
//    <h1>Tables</h1>
   
   
//    </>
//   )
// }





import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Head from 'next/head'
import React from 'react'
import '@/pages/pages.css'
import VisualToolsPage from '../../app/components/page-components/visual-tools-page/VisualToolsPage'
import { buildToolIndexData } from '../../app/components/page-components/visual-tools-page/buildToolsPageData'


export async function getStaticProps(){

  const keyWords = [
   
  ]

  // const faqQuestions = {
  //   obj1: {
  //     question: "What linear algebra visual tools are available?",
  //     answer: "The collection includes matrix multiplication visualizers, Gaussian elimination calculators for REF and RREF, vector operation tools, linear systems solvers, determinant calculators, and eigenvalue visualizers. Each tool focuses on one specific topic with step-by-step animation and editable inputs."
  //   },
  //   obj2: {
  //     question: "Which tool should I use to learn matrix multiplication?",
  //     answer: "Start with the Matrix Multiplication Visualizer and Calculator. It animates each dot product element by element, highlights the active row and column, and lets you step forward and back through every multiplication and addition that builds the result matrix."
  //   },
  //   obj3: {
  //     question: "How do the Gaussian elimination tools work?",
  //     answer: "Enter any matrix from 2 by 3 up to 5 by 6, choose REF or RREF as the target form, and the calculator performs one row operation per step. Each step shows the operation type, highlights the affected rows, and displays the matrix state before and after, with manual stepping or auto-play available."
  //   },
  //   obj4: {
  //     question: "Are these linear algebra tools free to use?",
  //     answer: "Yes, every visualizer and calculator in the collection is completely free with no registration required. The tools run directly in the browser, include step-by-step explanations, and work for both learning and homework verification."
  //   },
  //   obj5: {
  //     question: "Which tool should I pick first?",
  //     answer: "If matrix arithmetic still feels mechanical, the Matrix Multiplication Visualizer makes the row-by-column structure visible. For solving systems and understanding pivots, the Gaussian Elimination Calculator is the natural next step. Vector and determinant tools work well alongside both."
  //   }
  // }

  // const schemas = {
  //   collectionPage: {
  //     "@context": "https://schema.org",
  //     "@type": "CollectionPage",
  //     "name": "Linear Algebra Visual Tools",
  //     "description": "Free linear algebra visualizers and calculators: matrix multiplication, Gaussian elimination, vector operations, and linear systems. Step-by-step and free.",
  //     "url": "https://www.learnmathclass.com/linear-algebra/visual-tools",
  //     "inLanguage": "en-US",
  //     "about": {
  //       "@type": "Thing",
  //       "name": "Linear Algebra"
  //     },
  //     "keywords": keyWords.join(", "),
  //     "author": {
  //       "@type": "Organization",
  //       "name": "Learn Math Class"
  //     },
  //     "publisher": {
  //       "@type": "Organization",
  //       "name": "Learn Math Class"
  //     },
  //     "datePublished": "2024-01-15",
  //     "dateModified": new Date().toISOString(),
  //     "hasPart": [
  //       {
  //         "@type": "WebPage",
  //         "name": "Matrix Multiplication Visualizer and Calculator",
  //         "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-multiplication",
  //         "description": "Step-by-step animated matrix multiplication showing each dot product as it builds the result element by element."
  //       },
  //       {
  //         "@type": "WebPage",
  //         "name": "Gaussian Elimination Calculator",
  //         "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/gauss-elimination",
  //         "description": "Transforms matrices to row echelon form or reduced row echelon form one row operation at a time."
  //       }
  //       // NOTE: Add other tools auto-pulled from filesystem here as they come online.
  //     ]
  //   },

  //   itemList: {
  //     "@context": "https://schema.org",
  //     "@type": "ItemList",
  //     "name": "Linear Algebra Visual Tools",
  //     "itemListElement": [
  //       {
  //         "@type": "ListItem",
  //         "position": 1,
  //         "item": {
  //           "@type": "SoftwareApplication",
  //           "name": "Matrix Multiplication Visualizer and Calculator",
  //           "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-multiplication",
  //           "applicationCategory": "EducationalApplication",
  //           "description": "Animated step-by-step matrix multiplication with editable matrices and play controls."
  //         }
  //       },
  //       {
  //         "@type": "ListItem",
  //         "position": 2,
  //         "item": {
  //           "@type": "SoftwareApplication",
  //           "name": "Gaussian Elimination Calculator",
  //           "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/gauss-elimination",
  //           "applicationCategory": "EducationalApplication",
  //           "description": "Reduces matrices to REF or RREF with one row operation per step."
  //         }
  //       }
  //       // NOTE: Mirror additions to collectionPage.hasPart here.
  //     ]
  //   },

  //   breadcrumb: {
  //     "@context": "https://schema.org",
  //     "@type": "BreadcrumbList",
  //     "itemListElement": [
  //       {
  //         "@type": "ListItem",
  //         "position": 1,
  //         "name": "Home",
  //         "item": "https://www.learnmathclass.com"
  //       },
  //       {
  //         "@type": "ListItem",
  //         "position": 2,
  //         "name": "Linear Algebra",
  //         "item": "https://www.learnmathclass.com/linear-algebra"
  //       },
  //       {
  //         "@type": "ListItem",
  //         "position": 3,
  //         "name": "Visual Tools",
  //         "item": "https://www.learnmathclass.com/linear-algebra/visual-tools"
  //       }
  //     ]
  //   },

  //   faq: {
  //     "@context": "https://schema.org",
  //     "@type": "FAQPage",
  //     "mainEntity": Object.keys(faqQuestions).map(key => ({
  //       "@type": "Question",
  //       "name": faqQuestions[key].question,
  //       "acceptedAnswer": {
  //         "@type": "Answer",
  //         "text": faqQuestions[key].answer
  //       }
  //     }))
  //   }
  // }

  // Auto-pull active tools from the filesystem.
  // Scans pages/linear-algebra/visual-tools/* for index files and [view].jsx
  // dynamic routes, extracts SEO + viewConfig metadata, returns { children: [...] }.
  const toolsData = await buildToolIndexData('tables')

  // const intro = {
  //   title: "Free interactive tools for learning linear algebra",
  //   description: "Each tool turns a piece of linear algebra into something you can manipulate, watch, and step through — matrix operations, row reduction, vector geometry, systems of equations, and more.",
  //   tip: "Start with the Matrix Multiplication Visualizer to see how dot products build the result one element at a time."
  // }

  // const comingSoonItems = [
  //   {
  //     at: 'end',
  //     title: 'Matrix Multiplication Visualizer',
  //     description: 'Step-by-step animated matrix multiplication with full control over the calculation. Watch each dot product form element-by-element, with red highlighting on the specific pair of values currently being multiplied and yellow on the full row-and-column being combined. Step forward and back, pause, resume, or let it auto-play. Resize either matrix from 1×1 up to 10×10, generate random values within any range, or edit cells by hand — the result matrix dimensions update automatically, and incompatible dimensions are caught before computation starts. A running commentary below the grids spells out every multiplication and the accumulating sum, so the formula C[i][j] = Σ A[i][k]·B[k][j] becomes concrete arithmetic you can verify by hand.',
  //     href: '/visual-tools/matrix-multiplication',
  //     category: 'Matrices',
  //     subCategory:'Matrix Operations',
  //     icon: '',
  //   },
  //   {
  //     at: 'end',
  //     title: 'Gaussian Elimination Calculator',
  //     description: 'Transform any matrix to row echelon form (REF) or reduced row echelon form (RREF) one row operation at a time. Choose a size from 2×3 up to 5×6, fill the cells by hand or generate random values, then pick which form to reduce to. Each stage shows the operation performed — row swap, scaling, or elimination — with the affected rows highlighted in the matrix and the row state before and after spelled out in textbook notation. Step manually with Previous and Next, or hit Play for automatic 1-second advance. RREF makes solutions immediately readable; REF stops earlier and leaves back-substitution to you.',
  //     href: '/visual-tools/gauss-elimination',
  //     category: 'Matrices',
  //     subCategory:'Matrix Operations',
  //     icon: '',
  //   },
  // ]

  return {
    props:{
      toolsData,
      // comingSoonItems,
      // intro,
      // faqQuestions,
      // schemas,
      seoData: {
        title: "Free Linear Algebra Visual Tools | Learn Math Class",
        description: "Free linear algebra visualizers and calculators: matrix multiplication, Gaussian elimination, vector operations, and linear systems. Step-by-step and free.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools",
        name: "Linear Algebra Visual Tools"
      },
    }
  }
}

export default function LinearAlgebraVisualToolsLanding({
  seoData,
  toolsData,
  // comingSoonItems,
  // intro,
  // faqQuestions,
  // schemas
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
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Learn Math Class" />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={seoData.title} />
  <meta name="twitter:description" content={seoData.description} />

  <meta name="robots" content="index, follow" />

  {/* <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schemas.collectionPage)
    }}
  /> */}

  {/* <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schemas.itemList)
    }}
  /> */}

  {/* <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schemas.breadcrumb)
    }}
  /> */}

  {/* <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schemas.faq)
    }}
  /> */}
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

   <VisualToolsPage
     tools={toolsData}
    //  customItems={comingSoonItems}
     pageTitle="Tables"
    //  intro={intro}
     icon="🧮"
     dropdownLabel="All Tools"
     theme="deepBlue"
     sidebar={true}
     sidebarBrandName="Tables"
     sidebarBrandSub=""
   />

   <br/>
   <br/>
   <br/>
   </>
  )
}