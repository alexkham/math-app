// import React from 'react'
// import algebraFormulasList from '@/app/api/db/formulas/algebra/algebraFormulas'
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import '../../pages.css'
// import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import FormulasTOC from '@/app/components/examples/FormulaTOC'

// export default function AlgebraFormulasPage() {

//   const keyWords=['algebra formulas','algebra examples','algebra','algebra equation']
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
//     <h1 className='title' style={{marginTop:'-20px',marginBottom:'-10px'}}>Algebra Formulas</h1>
//     <FormulasTOC data={algebraFormulasList} />
//     <div style={{transform:'scale(0.95)'}}>
//     <FormulaAccordionWrapper data={algebraFormulasList} 
//     groupByField={['category']}
//    />
//     </div>
//     <br/>
//     <ScrollUpButton/>
//     </>
//   )
// }


import React from 'react'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import FormulasTOC from '@/app/components/examples/FormulaTOC'
import Head from 'next/head'
import { useRouter } from 'next/router'
import '../../../pages/pages.css'

export async function getStaticProps() {
  const { default: algebraFormulasList } = await import('@/app/api/db/formulas/algebra/algebraFormulas')
  
  const keyWords = [
    'algebra formulas',
    'algebra examples',
    'algebra',
    'algebra equation',
    'algebra rules'
  ]

  // Define the canonical URL
  const baseUrl = 'https://www.learnmathclass.com'
  const path = '/algebra/formulas'
  const canonicalUrl = `${baseUrl}${path}`
  
  const lastModified = new Date().toISOString() // Update this when content changes
  
  return {
    props: {
      algebraFormulasList,
      keyWords,
      canonicalUrl,
      lastModified,
    }
  }
}

export default function AlgebraFormulasPage({ 
  algebraFormulasList, 
  keyWords, 
  canonicalUrl,
  lastModified 
}) {
  const router = useRouter()

  // Redirect if URL has query parameters or trailing slash
  React.useEffect(() => {
    if (router.asPath !== '/algebra/formulas') {
      router.push('/algebra/formulas')
    }
  }, [router])

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Algebra Formulas and Examples",
    "description": "Comprehensive collection of algebra formulas with examples and explanations. Essential reference for students and educators.",
    "keywords": keyWords.join(", "),
    "url": canonicalUrl,
    "dateModified": lastModified,
    "inLanguage": "en-US",
    "mainEntity": {
      "@type": "Article",
      "name": "Algebra Formulas",
      "dateModified": lastModified,
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      }
    }
  }

  const pageTitle = "Algebra Formulas and Examples | Learn Math Class"
  const pageDescription = "Complete collection of algebra formulas with step-by-step examples and explanations. Perfect for students and teachers learning algebraic concepts."

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
      {/* <GenericNavbar/> */}
      <br/>
      <br/>
      <br/>
      <br/>
      <OperaSidebar
        side='right'
        // topOffset='55px'
        sidebarWidth='45px'
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb/>
      <main>
        <h1 className='title' style={{marginTop:'-20px',marginBottom:'-10px'}}>
          Algebra Formulas
        </h1>
        <FormulasTOC data={algebraFormulasList} />
        <div style={{transform:'scale(0.95)'}}>
          <FormulaAccordionWrapper 
            data={algebraFormulasList}
            groupByField={['category']}
          />
        </div>
        <br/>
         {/* <ScrollUpButton/> */} 
      </main>
    </>
  );
}