import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../../../pages.css'
import LogicalEquivalenceVerifier from '@/app/components/logic-calculator/EquivalenceChecker'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import Head from 'next/head'



export async function getStaticProps(){

  const keyWords=[ 'logical equivalence validator',
  'propositional logic equivalence',
  'logical formula equivalence',
  'logic equivalence checker',
  'propositional formula validator',
  'truth table equivalence' ]


  return {
    props:{
      keyWords
      
    }
  }
}




export default function EquivalenceValidatorPage({keyWords}) {
  return (
    <>
    <Head>
  <title>Logical Equivalence Validator | Learn Math Class</title>
  <meta name="description" content="Interactive logical equivalence validator for propositional logic. Check if two logical expressions are equivalent with step-by-step verification." />
  <meta name="keywords" content={keyWords.join(', ')} />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="canonical" href="https://www.learnmathclass.com/logic/propositional-logic/semantics/equivalence-validator" />
  
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Logical Equivalence Validator | Learn Math Class" />
  <meta property="og:description" content="Interactive tool to validate logical equivalence in propositional logic expressions." />
  <meta property="og:url" content="https://www.learnmathclass.com/logic/propositional-logic/semantics/equivalence-validator" />
  <meta property="og:site_name" content="Learn Math Class" />
  
  <meta name="robots" content="index, follow" />
  
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Logical Equivalence Validator",
        "description": "Interactive tool to validate logical equivalence in propositional logic expressions.",
        "url": "https://www.learnmathclass.com/logic/propositional-logic/semantics/equivalence-validator",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Web Browser",
        "keywords": keyWords
      })
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
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
            "name": "Semantics", 
            "item": "https://www.learnmathclass.com/logic/propositional-logic/semantics"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Equivalence Validator",
            "item": "https://www.learnmathclass.com/logic/propositional-logic/semantics/equivalence-validator"
          }
        ]
      })
    }}
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
    <h1 className='title' style={{marginTop:'0px', marginBottom:'20px'}}>Logical Equivalence Validator</h1>
    <div style={{transform:'scale(0.95)'}}>
    <LogicalEquivalenceVerifier/>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <ScrollUpButton/>

    
    
    </>
  )
}
