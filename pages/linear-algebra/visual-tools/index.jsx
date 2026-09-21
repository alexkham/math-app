
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
        },
        {
          "@type": "WebPage",
          "name": "Square Matrix Types Generator",
          "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-types",
          "description": "Generates identity, zero, scalar, diagonal, triangular, symmetric and skew-symmetric matrices with their defining patterns and properties."
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
    tip: "Start with Matrix Multiplication by Columns to see what a product actually does to a vector, or with the Matrix Multiplication Visualizer if you want the row by column rule element by element."
  }

  // Cross-listed tools that live at top-level /visual-tools/* routes on
  // purpose: Search Console (90 days to 2026-09-12) puts matrix-multiplication
  // at 325 clicks, 4th page on the whole site, so its URL is not moved.
  // Gaussian elimination and matrix types were relocated into this folder
  // the same day and are now auto-discovered like every other tool here.
  const comingSoonItems = [
    {
      at: 'end',
      title: 'Matrix Multiplication Visualizer',
      description: 'Symbolic, step-by-step animation of A × B = C. Pick a scenario — general A × B, matrix × vector, or vector × matrix — set the shapes with linked steppers, and toggle the order to see when B × A exists and when it does not. Four strategies show the same product four ways: row · column builds one cell at a time as a dot product, column by column and row by row build C as weighted sums of the columns of A or the rows of B, and the sum of outer products accumulates C from rank-one pieces. Highlights on A and B, arrows into C, a running formula, and a step log with a permanent lead note make every term traceable, and each strategy links to a full explanation on the page.',
      href: '/visual-tools/matrix-multiplication',
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="26" width="10" height="10" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><rect x="14" y="26" width="10" height="10" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><rect x="4" y="36" width="10" height="10" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="14" y="36" width="10" height="10" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><text x="28" y="42" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle">&#215;</text><rect x="33" y="26" width="10" height="10" fill="#97C459" stroke="#27500A" stroke-width="1"/><rect x="43" y="26" width="10" height="10" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="33" y="36" width="10" height="10" fill="#97C459" stroke="#27500A" stroke-width="1"/><rect x="43" y="36" width="10" height="10" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><text x="57" y="42" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle">=</text><rect x="62" y="26" width="10" height="10" fill="#EF9F27" stroke="#854F0B" stroke-width="1.3"/><rect x="72" y="26" width="7" height="10" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="62" y="36" width="10" height="10" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="72" y="36" width="7" height="10" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><path d="M 14 22 Q 40 12 66 22" fill="none" stroke="#B5D4F4" stroke-width="0.9" stroke-dasharray="2.5,2"/><path d="M 66 22 L 62.5 20.5 L 63.5 24.5 Z" fill="#B5D4F4"/><text x="40" y="62" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">row &#215; column</text></svg>`,
      category: 'Matrices',
      subCategory:'Matrix Operations',
      icon: '',
    },
  ]

  // Keep the structured data in step with the cards the page actually renders:
  // the auto-discovered tools in this folder PLUS the cross-listed ones above.
  // Written here rather than by hand inside `schemas` because the hand-written
  // list had drifted - it pointed matrix multiplication at
  // /linear-algebra/visual-tools/matrix-multiplication, which does not exist
  // (the tool stays at the top-level /visual-tools route by owner decision),
  // and it never gained the tools added since.
  const schemaTools = [...toolsData.items, ...comingSoonItems]

  schemas.collectionPage.hasPart = schemaTools.map((tool) => ({
    "@type": "WebPage",
    "name": tool.title,
    "url": `https://www.learnmathclass.com${tool.href}`,
    "description": tool.shortDescription || tool.description || ''
  }))

  schemas.itemList.itemListElement = schemaTools.map((tool, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "SoftwareApplication",
      "name": tool.title,
      "url": `https://www.learnmathclass.com${tool.href}`,
      "applicationCategory": "EducationalApplication",
      "description": tool.shortDescription || tool.description || ''
    }
  }))

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