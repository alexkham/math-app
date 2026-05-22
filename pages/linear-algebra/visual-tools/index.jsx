// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import Head from 'next/head'
// import React from 'react'
// import '@/pages/pages.css'
// import VisualToolsPage from '../../../app/components/page-components/visual-tools-page/VisualToolsPage'
// import { buildToolIndexData } from '../../../app/components/page-components/visual-tools-page/buildToolsPageData'


// export async function getStaticProps(){

//   const keyWords = [
//     'free trigonometry visual tools',
//     'free trigonometry calculator',
//     'free math calculator',
//     'free online calculator',
//     'trigonometry visualizer',
//     'angle visualizer',
//     'unit circle',
//     'sine cosine graphs',
//     'trigonometric identities',
//     'triangle solver',
//     'inverse trigonometric functions',
//     'interactive trigonometry'
//   ]

//   // Auto-pull active tools from the filesystem.
//   // Scans pages/trigonometry/visual-tools/* for index files and [view].jsx
//   // dynamic routes, extracts SEO + viewConfig metadata, returns { children: [...] }.
//   const toolsData = await buildToolIndexData('linear-algebra/visual-tools')

//   // Coming-soon tools as customItems, appended after the auto-pulled ones.
//   // VisualToolsPage merges these into the main list at the specified `at` positions.
//   // const comingSoonItems = [
//   //   {
//   //     at: 'end',
//   //     id: 'unit-circle',
//   //     title: 'Unit Circle (coming soon)',
//   //     description: 'Interactive unit circle showing angle, radian measure, sine, cosine, and tangent values at every standard position.',
//   //     href: '#',
//   //     hasViews: false,
//   //   },
//   //   {
//   //     at: 'end',
//   //     id: 'graphs',
//   //     title: 'Sine & Cosine Graphs (coming soon)',
//   //     description: 'Adjustable amplitude, period, phase shift, and vertical shift on sine and cosine curves with side-by-side comparison.',
//   //     href: '#',
//   //     hasViews: false,
//   //   },
//   //   {
//   //     at: 'end',
//   //     id: 'identities',
//   //     title: 'Trigonometric Identities (coming soon)',
//   //     description: 'Visual proofs and animated derivations of Pythagorean, sum-and-difference, double-angle, and half-angle identities.',
//   //     href: '#',
//   //     hasViews: false,
//   //   },
//   //   {
//   //     at: 'end',
//   //     id: 'triangle-solvers',
//   //     title: 'Triangle Solvers (coming soon)',
//   //     description: 'Solve any triangle from given sides and angles using the Law of Sines and Law of Cosines with full step-by-step reasoning.',
//   //     href: '#',
//   //     hasViews: false,
//   //   },
//   //   {
//   //     at: 'end',
//   //     id: 'inverse-functions',
//   //     title: 'Inverse Functions (coming soon)',
//   //     description: 'Visualizer for arcsine, arccosine, and arctangent — domain restrictions, principal branches, and inverse-pair graphs.',
//   //     href: '#',
//   //     hasViews: false,
//   //   },
//   // ]

//   const intro = {
//     title: "Free interactive tools for learning trigonometry",
//     description: "Each tool turns a piece of trigonometry into something you can manipulate, watch, and step through — angles, the unit circle, graph transformations, identity proofs, triangle solving, and inverse functions.",
//     tip: "Start with the Angle Visualizer to get a feel for how the controls and live readouts work."
//   }


//   const comingSoonItems = [
//   {
//     at: 'end',
//     title: 'Unit Circle Visualizer and Calculator',
//     description: 'Interactive unit circle with a draggable angle point and live readouts for all six trigonometric functions — sine, cosine, tangent, cosecant, secant, and cotangent. Set any angle in degrees or radians (including angles beyond 360° to show multiple rotations), or drag the point directly on the circle. Special angles like 30°, 45°, 60°, and their counterparts in every quadrant are marked and snap to exact values. Includes a full explanation of why the radius equals 1, how the four quadrants determine the signs of sine and cosine, and how degrees and radians relate.',
//     href: '/visual-tools/unit-circle',
//     category: 'Unit Circle',
//     icon: '⊙',
//   },
// ]

//   return {
//     props:{
//       toolsData,
//    comingSoonItems,
//       intro,
//       seoData: {
//         title: "Free Trigonometry Visual Tools | Learn Math Class",
//         description: "Free interactive trigonometry visualizers and calculators: angle explorer, unit circle, sine and cosine graphs, identity proofs, triangle solvers, and inverse functions. Step-by-step and free to use.",
//         keywords: keyWords.join(", "),
//         url: "/linear-algebra/visual-tools",
//         name: "Trigonometry Visual Tools"
//       },
//     }
//   }
// }

// export default function TrigonometryVisualToolsLanding({
//   seoData,
//   toolsData,
//  comingSoonItems,
//   intro
// }) {

//   return (
//    <>
//    <Head>
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
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     <OperaSidebar
//            side='right'
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          />
//    <Breadcrumb/>
//    <br/>
//    <br/>

//    <VisualToolsPage
//      tools={toolsData}
//      customItems={comingSoonItems}
//      pageTitle="Trigonometry Visual Tools"
//      intro={intro}
//      icon="📐"
//      dropdownLabel="All Tools"
//      theme="deepBlue"
//      sidebar={true}
//      sidebarBrandName="Trigonometry"
//      sidebarBrandSub="Visual Tools"
//    />

//    <br/>
//    <br/>
//    <br/>
//    </>
//   )
// }



// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import Head from 'next/head'
// import React from 'react'
// import '@/pages/pages.css'
// import VisualToolsPage from '../../../app/components/page-components/visual-tools-page/VisualToolsPage'
// import { buildToolIndexData } from '../../../app/components/page-components/visual-tools-page/buildToolsPageData'


// export async function getStaticProps(){

//   const keyWords = [
//     'free linear algebra visual tools',
//     'free linear algebra calculator',
//     'matrix calculator',
//     'matrix visualizer',
//     'matrix multiplication',
//     'gaussian elimination calculator',
//     'row echelon form',
//     'reduced row echelon form',
//     'vector calculator',
//     'dot product visualizer',
//     'linear systems solver',
//     'determinant calculator',
//     'eigenvalue calculator',
//     'interactive linear algebra',
//     'free math calculator',
//     'free online calculator'
//   ]

//   // Auto-pull active tools from the filesystem.
//   // Scans pages/linear-algebra/visual-tools/* for index files and [view].jsx
//   // dynamic routes, extracts SEO + viewConfig metadata, returns { children: [...] }.
//   const toolsData = await buildToolIndexData('linear-algebra/visual-tools')

//   const intro = {
//     title: "Free interactive tools for learning linear algebra",
//     description: "Each tool turns a piece of linear algebra into something you can manipulate, watch, and step through — matrix operations, row reduction, vector geometry, systems of equations, and more.",
//     tip: "Start with the Matrix Multiplication Visualizer to see how dot products build the result one element at a time."
//   }

//   const comingSoonItems = [
//     {
//       at: 'end',
//       title: 'Matrix Multiplication Visualizer and Calculator',
//       description: 'Step-by-step animated matrix multiplication with full control over the calculation. Watch each dot product form element-by-element, with red highlighting on the specific pair of values currently being multiplied and yellow on the full row-and-column being combined. Step forward and back, pause, resume, or let it auto-play. Resize either matrix from 1×1 up to 10×10, generate random values within any range, or edit cells by hand — the result matrix dimensions update automatically, and incompatible dimensions are caught before computation starts. A running commentary below the grids spells out every multiplication and the accumulating sum, so the formula C[i][j] = Σ A[i][k]·B[k][j] becomes concrete arithmetic you can verify by hand.',
//       href: '/visual-tools/matrix-multiplication',
//       category: 'Matrix Operations',
//       icon: '×',
//     },
//     {
//       at: 'end',
//       title: 'Gaussian Elimination Calculator',
//       description: 'Transform any matrix to row echelon form (REF) or reduced row echelon form (RREF) one row operation at a time. Choose a size from 2×3 up to 5×6, fill the cells by hand or generate random values, then pick which form to reduce to. Each stage shows the operation performed — row swap, scaling, or elimination — with the affected rows highlighted in the matrix and the row state before and after spelled out in textbook notation. Step manually with Previous and Next, or hit Play for automatic 1-second advance. RREF makes solutions immediately readable; REF stops earlier and leaves back-substitution to you.',
//       href: '/visual-tools/gauss-elimination',
//       category: 'Matrix Operations',
//       icon: '⇄',
//     },
//   ]

//   return {
//     props:{
//       toolsData,
//       comingSoonItems,
//       intro,
//       seoData: {
//         title: "Free Linear Algebra Visual Tools | Learn Math Class",
//         description: "Free interactive linear algebra visualizers and calculators: matrix multiplication, Gaussian elimination, vector operations, systems solvers, and more. Step-by-step and free to use.",
//         keywords: keyWords.join(", "),
//         url: "/linear-algebra/visual-tools",
//         name: "Linear Algebra Visual Tools"
//       },
//     }
//   }
// }

// export default function LinearAlgebraVisualToolsLanding({
//   seoData,
//   toolsData,
//   comingSoonItems,
//   intro
// }) {

//   return (
//    <>
//    <Head>
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
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     <OperaSidebar
//            side='right'
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          />
//    <Breadcrumb/>
//    <br/>
//    <br/>

//    <VisualToolsPage
//      tools={toolsData}
//      customItems={comingSoonItems}
//      pageTitle="Linear Algebra Visual Tools"
//      intro={intro}
//      icon="🧮"
//      dropdownLabel="All Tools"
//      theme="deepBlue"
//      sidebar={true}
//      sidebarBrandName="Linear Algebra"
//      sidebarBrandSub="Visual Tools"
//    />

//    <br/>
//    <br/>
//    <br/>
//    </>
//   )
// }


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Head from 'next/head'
import React from 'react'
import '@/pages/pages.css'
import VisualToolsPage from '../../../app/components/page-components/visual-tools-page/VisualToolsPage'
import { buildToolIndexData } from '../../../app/components/page-components/visual-tools-page/buildToolsPageData'


export async function getStaticProps(){

  const keyWords = [
    'free linear algebra visual tools',
    'linear algebra calculator',
    'matrix calculator',
    'matrix visualizer',
    'matrix multiplication visualizer',
    'gaussian elimination calculator',
    'row echelon form calculator',
    'reduced row echelon form',
    'vector calculator',
    'dot product visualizer',
    'linear systems solver',
    'determinant calculator',
    'eigenvalue calculator',
    'interactive linear algebra',
    'free linear algebra tools'
  ]

  const faqQuestions = {
    obj1: {
      question: "What linear algebra visual tools are available?",
      answer: "The collection includes matrix multiplication visualizers, Gaussian elimination calculators for REF and RREF, vector operation tools, linear systems solvers, determinant calculators, and eigenvalue visualizers. Each tool focuses on one specific topic with step-by-step animation and editable inputs."
    },
    obj2: {
      question: "Which tool should I use to learn matrix multiplication?",
      answer: "Start with the Matrix Multiplication Visualizer and Calculator. It animates each dot product element by element, highlights the active row and column, and lets you step forward and back through every multiplication and addition that builds the result matrix."
    },
    obj3: {
      question: "How do the Gaussian elimination tools work?",
      answer: "Enter any matrix from 2 by 3 up to 5 by 6, choose REF or RREF as the target form, and the calculator performs one row operation per step. Each step shows the operation type, highlights the affected rows, and displays the matrix state before and after, with manual stepping or auto-play available."
    },
    obj4: {
      question: "Are these linear algebra tools free to use?",
      answer: "Yes, every visualizer and calculator in the collection is completely free with no registration required. The tools run directly in the browser, include step-by-step explanations, and work for both learning and homework verification."
    },
    obj5: {
      question: "Which tool should I pick first?",
      answer: "If matrix arithmetic still feels mechanical, the Matrix Multiplication Visualizer makes the row-by-column structure visible. For solving systems and understanding pivots, the Gaussian Elimination Calculator is the natural next step. Vector and determinant tools work well alongside both."
    }
  }

  const schemas = {
    collectionPage: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Linear Algebra Visual Tools",
      "description": "Free linear algebra visualizers and calculators: matrix multiplication, Gaussian elimination, vector operations, and linear systems. Step-by-step and free.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools",
      "inLanguage": "en-US",
      "about": {
        "@type": "Thing",
        "name": "Linear Algebra"
      },
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
      "dateModified": new Date().toISOString(),
      "hasPart": [
        {
          "@type": "WebPage",
          "name": "Matrix Multiplication Visualizer and Calculator",
          "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-multiplication",
          "description": "Step-by-step animated matrix multiplication showing each dot product as it builds the result element by element."
        },
        {
          "@type": "WebPage",
          "name": "Gaussian Elimination Calculator",
          "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/gauss-elimination",
          "description": "Transforms matrices to row echelon form or reduced row echelon form one row operation at a time."
        }
        // NOTE: Add other tools auto-pulled from filesystem here as they come online.
      ]
    },

    itemList: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Linear Algebra Visual Tools",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Matrix Multiplication Visualizer and Calculator",
            "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-multiplication",
            "applicationCategory": "EducationalApplication",
            "description": "Animated step-by-step matrix multiplication with editable matrices and play controls."
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Gaussian Elimination Calculator",
            "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/gauss-elimination",
            "applicationCategory": "EducationalApplication",
            "description": "Reduces matrices to REF or RREF with one row operation per step."
          }
        }
        // NOTE: Mirror additions to collectionPage.hasPart here.
      ]
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
          "name": "Linear Algebra",
          "item": "https://www.learnmathclass.com/linear-algebra"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools"
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

  // Auto-pull active tools from the filesystem.
  // Scans pages/linear-algebra/visual-tools/* for index files and [view].jsx
  // dynamic routes, extracts SEO + viewConfig metadata, returns { children: [...] }.
  const toolsData = await buildToolIndexData('linear-algebra/visual-tools')

  const intro = {
    title: "Free interactive tools for learning linear algebra",
    description: "Each tool turns a piece of linear algebra into something you can manipulate, watch, and step through — matrix operations, row reduction, vector geometry, systems of equations, and more.",
    tip: "Start with the Matrix Multiplication Visualizer to see how dot products build the result one element at a time."
  }

  const comingSoonItems = [
    {
      at: 'end',
      title: 'Matrix Multiplication Visualizer',
      description: 'Step-by-step animated matrix multiplication with full control over the calculation. Watch each dot product form element-by-element, with red highlighting on the specific pair of values currently being multiplied and yellow on the full row-and-column being combined. Step forward and back, pause, resume, or let it auto-play. Resize either matrix from 1×1 up to 10×10, generate random values within any range, or edit cells by hand — the result matrix dimensions update automatically, and incompatible dimensions are caught before computation starts. A running commentary below the grids spells out every multiplication and the accumulating sum, so the formula C[i][j] = Σ A[i][k]·B[k][j] becomes concrete arithmetic you can verify by hand.',
      href: '/visual-tools/matrix-multiplication',
      category: 'Matrices',
      subCategory:'Matrix Operations',
      icon: '',
    },
    {
      at: 'end',
      title: 'Gaussian Elimination Calculator',
      description: 'Transform any matrix to row echelon form (REF) or reduced row echelon form (RREF) one row operation at a time. Choose a size from 2×3 up to 5×6, fill the cells by hand or generate random values, then pick which form to reduce to. Each stage shows the operation performed — row swap, scaling, or elimination — with the affected rows highlighted in the matrix and the row state before and after spelled out in textbook notation. Step manually with Previous and Next, or hit Play for automatic 1-second advance. RREF makes solutions immediately readable; REF stops earlier and leaves back-substitution to you.',
      href: '/visual-tools/gauss-elimination',
      category: 'Matrices',
      subCategory:'Matrix Operations',
      icon: '',
    },
  ]

  return {
    props:{
      toolsData,
      comingSoonItems,
      intro,
      faqQuestions,
      schemas,
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
  comingSoonItems,
  intro,
  faqQuestions,
  schemas
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

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schemas.collectionPage)
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schemas.itemList)
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
     customItems={comingSoonItems}
     pageTitle="Linear Algebra Visual Tools"
     intro={intro}
     icon="🧮"
     dropdownLabel="All Tools"
     theme="deepBlue"
     sidebar={true}
     sidebarBrandName="Linear Algebra"
     sidebarBrandSub="Visual Tools"
   />

   <br/>
   <br/>
   <br/>
   </>
  )
}