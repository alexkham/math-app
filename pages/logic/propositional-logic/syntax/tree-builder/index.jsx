

import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import Head from 'next/head'
import '../../../../pages.css'
import PropositionTreeBuilder from '@/app/components/logic-calculator/proposition-tree/PropositionTreeBuilder'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'

export async function getStaticProps() {
  const keyWords = [
    'propositional logic', 'propositional calculus', 'sentential logic',
    'propositional logic syntax', 'logic syntax', 'syntax', 'syntax tree'
  ]

  const pageTitle = "Proposition Analyzer & Tree Builder | Learn Math Class"
  const pageDescription = "Interactive proposition analyzer and syntax tree builder for propositional logic. Parse logical expressions and visualize their syntactic structure with step-by-step analysis."
  const canonicalUrl = 'https://www.learnmathclass.com/logic/propositional-logic/syntax/tree-builder'
  const lastModified = new Date().toISOString()

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Proposition Analyzer & Tree Builder",
    "description": pageDescription,
    "url": canonicalUrl,
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "keywords": keyWords.join(", "),
    "dateModified": lastModified,
    "inLanguage": "en-US",
    "author": {
      "@type": "Organization",
      "name": "Learn Math Class"
    }
  }

  const breadcrumbData = {
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
        "name": "Logic",
        "item": "https://www.learnmathclass.com/logic"
      },
      {
        "@type": "ListItem",
        "position": 3, 
        "name": "Propositional Logic",
        "item": "https://www.learnmathclass.com/logic/propositional-logic"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Syntax", 
        "item": "https://www.learnmathclass.com/logic/propositional-logic/syntax"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Tree Builder",
        "item": "https://www.learnmathclass.com/logic/propositional-logic/syntax/tree-builder"
      }
    ]
  }

  return {
    props: {
      keyWords,
      pageTitle,
      pageDescription,
      structuredData,
      breadcrumbData,
      canonicalUrl
    }
  }
}

export default function TreeBuilderPage({ 
  keyWords, 
  pageTitle, 
  pageDescription, 
  structuredData, 
  breadcrumbData, 
  canonicalUrl 
}) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keyWords.join(', ')} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={canonicalUrl} />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Learn Math Class" />
        
        <meta name="robots" content="index, follow" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
      </Head>

      <GenericNavbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <OperaSidebar
        side='right'
        topOffset='55px'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb/>
      <h1 className='title' style={{marginTop:'10px', marginBottom:'-10px'}}>
        Proposition Analyzer & Tree Builder
      </h1>
      
      <PropositionTreeBuilder/>
      
      <br/>
      <br/>
      <br/>
      <ScrollUpButton/>
    </>
  )
}