import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import Head from 'next/head'
import { useRouter } from 'next/router'

export async function getStaticProps() {
  const { default: probabilityTermsList } = await import('@/app/api/db/definitions/probability/probabilityDefinitions')
  
  const keyWords = [
    'probability terminology',
    'probability terms',
    'probability definitions',
    'probability definition and examples',
    'probability vocabulary'
  ]

  // Define the canonical URL
  const baseUrl = 'https://www.learnmathclass.com'
  const path = '/probability/definitions'
  const canonicalUrl = `${baseUrl}${path}`
  
  const lastModified = new Date().toISOString() // Update this when content changes
  
  return {
    props: {
     probabilityTermsList,
      keyWords,
      canonicalUrl,
      lastModified,
    }
  }
}

export default function ProbabilityDefinitionsPage({ 
probabilityTermsList, 
  keyWords, 
  canonicalUrl,
  lastModified 
}) {
  const router = useRouter()

  // Redirect if URL has query parameters or trailing slash
  React.useEffect(() => {
    if (router.asPath !== '/probability/definitions') {
      router.push('/probability/definitions')
    }
  }, [router])

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Algebra Terms and Definitions",
    "description": "Comprehensive list of probability terms, definitions and examples for students and educators.",
    "keywords": keyWords.join(", "),
    "url": canonicalUrl,
    "dateModified": lastModified,
    "inLanguage": "en-US",
    "mainEntity": {
      "@type": "Article",
      "name": "Probability Terms and Definitions",
      "dateModified": lastModified,
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      }
    }
  }

  const pageTitle = "Probability Terms and Definitions | Learn Math Class"
  const pageDescription = "Complete guide to probability terminology, definitions, and examples. Perfect for students learning probability fundamentals and mathematical concepts."

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

      <GenericNavbar />
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
          Probability Terms and Definitions
        </h1>
        <FormulaAccordionWrapper
          groupByField={'category'}
          data={probabilityTermsList}
          type='Definition'
        />
        <br />
        <br />
        <br />
        <ScrollUpButton />
      </main>
    </>
  )
}