// import React from 'react'
// import trigonometryFormulaList from '@/app/api/db/formulas/trigonometry/trigonometryFormulas'
// import MyNavbar from '@/app/components/nav-bar/MyNavbar'
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import '../../pages.css'
// import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import FormulasTOC from '@/app/components/examples/FormulaTOC'

// export default function ProbabilityFormulasPage() {

//   const keyWords=['trigonometry formulas','trigonometry identities',
//     'trigonometric identities','trig formula','trigonometry laws']
//   return (
//     <>
//    <GenericNavbar/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <OperaSidebar 
//       side='right'
//       topOffset='65px' 
//       sidebarWidth='45px'
//       panelWidth='200px'
      
//       iconColor='white'
//       panelBackgroundColor='#f2f2f2'/> 
//     <Breadcrumb/>
//     <h1 className='title' style={{marginTop:'-10px',marginBottom:'10px'}}>Trigonometry Formulas</h1>
//     <FormulasTOC  data={trigonometryFormulaList}/>
//     <div style={{transform:'scale(0.95)'}}>
//     <FormulaAccordionWrapper data={trigonometryFormulaList} groupByField={['category']}/>
//     </div>
//     <br/>
//     <ScrollUpButton />
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
  const { default: trigonometryFormulaList } = await import('@/app/api/db/formulas/trigonometry/trigonometryFormulas')
  
  const keyWords = [
    'trigonometry formulas',
    'trigonometry identities',
    'trigonometric identities',
    'trig formula',
    'trigonometry laws'
  ]

  const canonicalUrl = 'https://www.learnmathclass.com/trigonometry/formulas'
  const lastModified = new Date().toISOString()
  
  return {
    props: {
      trigonometryFormulaList,
      keyWords,
      canonicalUrl,
      lastModified,
    }
  }
}

export default function TrigonometryFormulasPage({ 
  trigonometryFormulaList, 
  keyWords, 
  canonicalUrl,
  lastModified 
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Trigonometry Formulas and Identities",
    "description": "Comprehensive collection of trigonometry formulas, identities, and laws with examples and detailed explanations.",
    "keywords": keyWords.join(", "),
    "url": canonicalUrl,
    "dateModified": lastModified,
    "inLanguage": "en-US",
    "mainEntity": {
      "@type": "Article",
      "name": "Trigonometry Formulas",
      "dateModified": lastModified,
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      }
    }
  }

  const pageTitle = "Trigonometry Formulas and Identities | Learn Math Class"
  const pageDescription = "Complete collection of trigonometry formulas, identities, and laws with step-by-step examples. Essential reference for trigonometry students and educators."

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
        <h1 className='title' style={{marginTop:'-10px',marginBottom:'10px'}}>
          Trigonometry Formulas
        </h1>
        <FormulasTOC data={trigonometryFormulaList}/>
        <div style={{transform:'scale(0.95)'}}>
          <FormulaAccordionWrapper 
            data={trigonometryFormulaList}
            groupByField={['category']}
          />
        </div>
        <br/>
        <ScrollUpButton />
      </main>
    </>
  )
}