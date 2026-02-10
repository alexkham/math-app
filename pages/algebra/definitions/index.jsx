
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import React from 'react'
import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
import Head from 'next/head'
import { useRouter } from 'next/router'
import CategoriesList from '@/app/components/page-components/lists/CategoriesList'
import SecondaryNavbar from '@/app/components/nav-bar/SecondaryNavbar'
import '../../../pages/pages.css'

export async function getStaticProps() {
  const { default: algebraTermsList } = await import('@/app/api/db/definitions/algebra/algebraDefinitions')
  
  const keyWords = [
    'algebra terminology',
    'algebra terms',
    'algebra definitions',
    'algebra definition and examples',
    'algebra vocabulary'
  ]

  // Define the canonical URL
  const baseUrl = 'https://www.learnmathclass.com'
  const path = '/algebra/definitions'
  const canonicalUrl = `${baseUrl}${path}`
  
  const lastModified = new Date().toISOString() // Update this when content changes
  const definitionsCategoryExplanations = {
    "Roots": "Core concepts and operations with roots. Key terms include Square Root (x where x² = n), Cube Root (x where x³ = n), Radical Symbol (√), Perfect Squares/Cubes, and methods of simplification. Covers both real and imaginary roots, radical expressions, and related operations.",
    
    "Logarithms": "Functions that determine the exponent needed for a base to reach a number. Includes Natural Logarithm (base e), Common Logarithm (base 10), Binary Logarithm (base 2), and their properties. Covers logarithmic functions, equations, identities and transformations.",
    
    "Exponents": "Rules and operations involving powers. Features basic concepts like Base and Power, Laws of Exponents, Exponential Functions (a^x), and applications in growth/decay. Includes special cases like Zero, Negative, and Fractional exponents."
   };
   
   
  
  return {
    props: {
      algebraTermsList,
      keyWords,
      canonicalUrl,
      lastModified,
      definitionsCategoryExplanations
    }
  }
}

export default function AlgebraDefinitionsPage({ 
  algebraTermsList, 
  keyWords, 
  canonicalUrl,
  lastModified ,
  definitionsCategoryExplanations
}) {
  const router = useRouter()

  // Redirect if URL has query parameters or trailing slash
  React.useEffect(() => {
    if (router.asPath !== '/algebra/definitions') {
      router.push('/algebra/definitions')
    }
  }, [router])

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Algebra Terms and Definitions",
    "description": "Comprehensive list of algebra terms, definitions and examples for students and educators.",
    "keywords": keyWords.join(", "),
    "url": canonicalUrl,
    "dateModified": lastModified,
    "inLanguage": "en-US",
    "mainEntity": {
      "@type": "Article",
      "name": "Algebra Terms and Definitions",
      "dateModified": lastModified,
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      }
    }
  }

  const pageTitle = "Algebra Terms and Definitions | Learn Math Class"
  const pageDescription = "Complete guide to algebra terminology, definitions, and examples. Perfect for students learning algebra fundamentals and mathematical concepts."

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
        // topOffset='55px'
        sidebarWidth='45px'
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <main>
        <h1 className='title' style={{marginTop:'-30px', marginBottom:'20px'}}>
          Algebra Terms and Definitions
        </h1>
        {/* <SecondaryNavbar alignment='left' mode='siblings' title='Similar Pages'/> */}
        <CategoriesList data={algebraTermsList} 
        baseUrl='/algebra/definitions'
        categoryExplanations={definitionsCategoryExplanations}/>
        <FormulaAccordionWrapper
          groupByField={'category'}
          data={algebraTermsList}
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