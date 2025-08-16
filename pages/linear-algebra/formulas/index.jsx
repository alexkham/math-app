// import React from 'react'
// import linearAlgebraFormulasList from '@/app/api/db/formulas/linear-algebra/linearAlgebraFormulas'
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import '../../pages.css'
// import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import FormulasTOC from '@/app/components/examples/FormulaTOC'

// export default function LinearAlgebraFormulasPage() {

//   const keyWords=['linear algebra formulas','linear algebra equations']
//   return (
//     <>
//     <GenericNavbar/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <OperaSidebar 
//       side='right'
//       topOffset='65px' 
//       sidebarWidth='45px'
//       panelWidth='300px'
      
//       iconColor='white'
//       panelBackgroundColor='#f2f2f2'/> 
//     <Breadcrumb/>
//     <h1 className='title' style={{marginTop:'-20px',marginBottom:'-10px'}}>Linear Algebra Formulas</h1>
//     <FormulasTOC data={linearAlgebraFormulasList} />
//     <div style={{transform:'scale(0.95)'}}>
//     <FormulaAccordionWrapper data={linearAlgebraFormulasList} groupByField={['category']}/>
//     </div>
//     <br/>
//     <ScrollUpButton/>
//     </>
//   )
// }


import React from 'react'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import '../../pages.css'
import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import FormulasTOC from '@/app/components/examples/FormulaTOC'
import Head from 'next/head'

export async function getStaticProps() {
  const { default: linearAlgebraFormulasList } = await import('@/app/api/db/formulas/linear-algebra/linearAlgebraFormulas')
  
  const keyWords = [
    'linear algebra formulas',
    'linear algebra equations',
    'matrix operations',
    'vector space formulas',
    'eigenvalues equations'
  ]

  const canonicalUrl = 'https://www.learnmathclass.com/linear-algebra/formulas'
  const lastModified = new Date().toISOString()
  
  return {
    props: {
      linearAlgebraFormulasList,
      keyWords,
      canonicalUrl,
      lastModified,
    }
  }
}

export default function LinearAlgebraFormulasPage({ 
  linearAlgebraFormulasList, 
  keyWords, 
  canonicalUrl,
  lastModified 
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Linear Algebra Formulas and Equations",
    "description": "Comprehensive collection of linear algebra formulas and equations covering matrices, vector spaces, and transformations.",
    "keywords": keyWords.join(", "),
    "url": canonicalUrl,
    "dateModified": lastModified,
    "inLanguage": "en-US",
    "mainEntity": {
      "@type": "Article",
      "name": "Linear Algebra Formulas",
      "dateModified": lastModified,
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      }
    }
  }

  const pageTitle = "Linear Algebra Formulas and Equations | Learn Math Class"
  const pageDescription = "Complete collection of linear algebra formulas and equations covering matrices, vector spaces, eigenvalues, and linear transformations with examples."

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keyWords.join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Learn Math Class" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:modified_time" content={lastModified} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <GenericNavbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <OperaSidebar
        side='right'
        topOffset='65px'
        sidebarWidth='45px'
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />

      <Breadcrumb/>
      <main>
        <h1 className='title' style={{marginTop:'-20px',marginBottom:'-10px'}}>
          Linear Algebra Formulas
        </h1>
        <FormulasTOC data={linearAlgebraFormulasList} />
        <div style={{transform:'scale(0.95)'}}>
          <FormulaAccordionWrapper 
            data={linearAlgebraFormulasList}
            groupByField={['category']}
          />
        </div>
        <br/>
        <ScrollUpButton/>
      </main>
    </>
  )
}