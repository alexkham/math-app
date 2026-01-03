import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import React from 'react'
import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
import Head from 'next/head'
import { useRouter } from 'next/router'
import CategoriesList from '@/app/components/page-components/lists/CategoriesList'
import '../../../pages/pages.css'

export async function getStaticProps() {
  const { default: calculusTermsList } = await import('@/app/api/db/definitions/calculus/calculusDefinitions')
  
  const keyWords = [
    'calculus terminology',
    'calculus terms',
    'calculus definitions',
    'calculus definition and examples',
    'calculus vocabulary'
  ]

  // Define the canonical URL
  const baseUrl = 'https://www.learnmathclass.com'
  const path = '/calculus/definitions'
  const canonicalUrl = `${baseUrl}${path}`
  
  const lastModified = new Date().toISOString() // Update this when content changes
  
  return {
    props: {
      calculusTermsList,
      keyWords,
      canonicalUrl,
      lastModified,
    }
  }
}

export default function AlgebraDefinitionsPage({ 
  calculusTermsList, 
  keyWords, 
  canonicalUrl,
  lastModified 
}) {
  const router = useRouter()

  // Redirect if URL has query parameters or trailing slash
  React.useEffect(() => {
    if (router.asPath !== '/calculus/definitions') {
      router.push('/calculus/definitions')
    }
  }, [router])

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Calculus Terms and Definitions",
    "description": "Comprehensive list of calculus terms, definitions and examples for students and educators.",
    "keywords": keyWords.join(", "),
    "url": canonicalUrl,
    "dateModified": lastModified,
    "inLanguage": "en-US",
    "mainEntity": {
      "@type": "Article",
      "name": "Calculus Terms and Definitions",
      "dateModified": lastModified,
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      }
    }
  }

  const pageTitle = "Calculus Terms and Definitions | Learn Math Class"
  const pageDescription = "Complete guide to calculus terminology, definitions, and examples. Perfect for students learning algebra fundamentals and mathematical concepts."

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
      <br />
      <br />
      <br />
      <br />
      <Breadcrumb />
      <OperaSidebar
        side='right'
        // topOffset='65px'
        sidebarWidth='45px'
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <main>
        <h1 className='title' style={{marginTop:'-30px', marginBottom:'20px'}}>
          Calculus Terms and Definitions
        </h1>
        <CategoriesList
        data={calculusTermsList}
        baseUrl='/calculus/definitions'
        />
        <FormulaAccordionWrapper
          groupByField={'category'}
          data={calculusTermsList}
          type='Definition'
        />
        <br />
        <br />
        <br />
         {/* <ScrollUpButton/> */} 
      </main>
    </>
  );
}