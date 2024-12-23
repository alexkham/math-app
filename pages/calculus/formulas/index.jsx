// import React from 'react'
// import calculusFormulasList from '@/app/api/db/formulas/calculus/calculusFormulasList'
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import '../../pages.css'
// import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import FormulasTOC from '@/app/components/examples/FormulaTOC'

// export default function CalculusFormulasPage() {
//   const keyWords=['calculus formulas','derivative formulas',
//     'calculus equations','calculus rules','differentiation rules']
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
//     <h1 className='title' style={{marginTop:'-20px',marginBottom:'-10px'}}>Calculus Formulas</h1>
//     <FormulasTOC data={calculusFormulasList} />
//     <div style={{transform:'scale(0.95)'}}>
//     <FormulaAccordionWrapper data={calculusFormulasList} groupByField={['category']}/>
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
import { useRouter } from 'next/router'

export async function getStaticProps() {
  const { default: calculusFormulasList } = await import('@/app/api/db/formulas/calculus/calculusFormulasList')
  
  const keyWords = [
    'calculus formulas',
    'derivative formulas',
    'calculus equations',
    'calculus rules',
    'differentiation rules'
  ]

  // Define the canonical URL
  const baseUrl = 'https://www.learnmathclass.com'
  const path = '/calculus/formulas'
  const canonicalUrl = `${baseUrl}${path}`
  
  const lastModified = new Date().toISOString() // Update this when content changes
  
  return {
    props: {
      calculusFormulasList,
      keyWords,
      canonicalUrl,
      lastModified,
    }
  }
}

export default function CalculusFormulasPage({ 
  calculusFormulasList, 
  keyWords, 
  canonicalUrl,
  lastModified 
}) {
  const router = useRouter()

  // Redirect if URL has query parameters or trailing slash
  React.useEffect(() => {
    if (router.asPath !== '/calculus/formulas') {
      router.push('/calculus/formulas')
    }
  }, [router])

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Calculus Formulas and Rules",
    "description": "Comprehensive collection of calculus formulas, derivative rules, and equations with examples and explanations.",
    "keywords": keyWords.join(", "),
    "url": canonicalUrl,
    "dateModified": lastModified,
    "inLanguage": "en-US",
    "mainEntity": {
      "@type": "Article",
      "name": "Calculus Formulas",
      "dateModified": lastModified,
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      }
    }
  }

  const pageTitle = "Calculus Formulas and Rules | Learn Math Class"
  const pageDescription = "Complete collection of calculus formulas, derivative rules, and equations with step-by-step examples. Essential reference for calculus students and educators."

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keyWords.join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Canonical URL - Critical for SEO */}
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
          Calculus Formulas
        </h1>
        <FormulasTOC data={calculusFormulasList} />
        <div style={{transform:'scale(0.95)'}}>
          <FormulaAccordionWrapper 
            data={calculusFormulasList}
            groupByField={['category']}
          />
        </div>
        <br/>
        <ScrollUpButton/>
      </main>
    </>
  )
}