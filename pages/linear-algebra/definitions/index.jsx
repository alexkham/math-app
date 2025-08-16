

import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import Head from 'next/head'
import { useRouter } from 'next/router'
import CategoriesList from '@/app/components/page-components/lists/CategoriesList'

export async function getStaticProps() {
  const { default: linearAlgebraTermsList } = await import('@/app/api/db/definitions/linear-algebra/linearAlgebraDefinitions')
  
  const keyWords = [
    'linear algebra terminology',
    'linear algebra terms',
    'linear algebra definitions',
    'linear algebra definition and examples',
    'linear algebra vocabulary'
  ];

  const definitionsCategoryExplanations = {
    "Vector Operations": "Core vector arithmetic and geometric operations including addition, multiplication, dot/cross products that form the foundation for manipulating vectors.",
 
    "Vectors Basic Terms": "Fundamental concepts that define vectors and their components, including basic properties and representations in space.",
 
    "Vectors": "Primary vector concepts covering structure, magnitude, direction and fundamental types like unit and zero vectors.",
 
    "Vectors Orthogonality": "Concepts related to perpendicular vectors and methods to create orthogonal/orthonormal vector sets.",
 
    "Vectors Geometric Interpretations": "Geometric meaning and visualization of vectors through angles, directions, and spatial relationships.",
 
    "Vectors Transformations": "Operations that change vectors while preserving certain properties, including linear transformations and their matrix representations.",
 
    "Vectors Applications": "Practical uses of vectors in describing physical quantities, gradients, and positions.",
 
    "Matrix Operations": "Basic arithmetic operations with matrices including addition, multiplication, and scalar operations.",
 
    "Matrix Properties": "Key characteristics of matrices like determinant, rank, trace, and eigenvalues that describe their behavior.",
 
    "Matrix Transformations": "Operations that convert matrices into special forms or decompose them into simpler components.",
 
    "Matrix Applications": "Practical uses of matrices in solving systems and representing data.",
 
    "Special Matrices": "Matrices with unique properties like diagonal, triangular, orthogonal forms that have specific applications.",
 
    "Matrices Basic Terms": "Essential concepts defining matrices, their structure, and basic classifications."
 }

  // Define the canonical URL
  const baseUrl = 'https://www.learnmathclass.com'
  const path = '/linear-algebra/definitions'
  const canonicalUrl = `${baseUrl}${path}`
  
  const lastModified = new Date().toISOString() // Update this when content changes
  
  return {
    props: {
      linearAlgebraTermsList,
      keyWords,
      canonicalUrl,
      lastModified,
      definitionsCategoryExplanations
    }
  }
}

export default function LinearAlgebraDefinitionsPage({ 
  linearAlgebraTermsList, 
  keyWords, 
  canonicalUrl,
  lastModified ,
  definitionsCategoryExplanations
}) {
  const router = useRouter()

  // Redirect if URL has query parameters or trailing slash
  React.useEffect(() => {
    if (router.asPath !== '/linear-algebra/definitions') {
      router.push('/linear-algebra/definitions')
    }
  }, [router])

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Linear Algebra Terms and Definitions",
    "description": "Comprehensive list of linear algebra terms, definitions and examples for students and educators.",
    "keywords": keyWords.join(", "),
    "url": canonicalUrl,
    "dateModified": lastModified,
    "inLanguage": "en-US",
    "mainEntity": {
      "@type": "Article",
      "name": "Linear Algebra Terms and Definitions",
      "dateModified": lastModified,
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      }
    }
  }

  const pageTitle = "Linear Algebra Terms and Definitions | Learn Math Class"
  const pageDescription = "Complete guide to linear algebra terminology, definitions, and examples. Perfect for students learning algebra fundamentals and mathematical concepts."

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
        topOffset='65px'
        sidebarWidth='45px'
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />

      <main>
        <h1 className='title' style={{marginTop:'-30px', marginBottom:'20px'}}>
         Linear Algebra Terms and Definitions
        </h1>
        <CategoriesList data={linearAlgebraTermsList}
        baseUrl='/linear-algebra/definitions'
        categoryExplanations={definitionsCategoryExplanations}/>
        <FormulaAccordionWrapper
          groupByField={'category'}
          data={linearAlgebraTermsList}
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