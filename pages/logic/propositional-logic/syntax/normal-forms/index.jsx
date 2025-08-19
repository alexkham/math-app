

import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import CNFConverter from '@/app/components/logic-calculator/normal-form-converters/CNFConverter'
import DNFConverter from '@/app/components/logic-calculator/normal-form-converters/DNFConverter'
import NormalFormsConverter from '@/app/components/logic-calculator/normal-form-converters/NormalFormsConverter'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../../../pages.css'
import Head from 'next/head'

export default function NormalFormsPage({dnfExplanations, cnfExplanations, title, description, keywords, canonicalUrl}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.learnmathclass.com/images/normal-forms-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://www.learnmathclass.com/images/normal-forms-og.jpg" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Normal Forms Converter",
            "description": description,
            "url": canonicalUrl,
            "applicationCategory": "EducationalApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "author": {
              "@type": "Organization",
              "name": "LearnMathClass",
              "url": "https://www.learnmathclass.com"
            }
          })}
        </script>
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
      <h1 className='title' style={{marginTop:'-10px', marginBottom:'-20px'}}>Normal Forms Converters</h1>
      <div style={{transform:'scale(0.95)'}}>
        <NormalFormsConverter
          dnfExplanations={dnfExplanations}
          cnfExplanations={cnfExplanations}
        />
      </div>
      <br/>
      <br/>
      <br/>
    </>
  )
}

export async function getStaticProps() {
  const dnfExplanations = {
    title: "How DNF Conversion Works:",
    steps: [
      "1. Create a truth table for the expression",
      "2. Find all rows where the expression evaluates to true",
      "3. For each 'true' row, create a conjunction (AND) of literals that makes that row true:",
      "   • If a variable is true in the row, use the variable itself",
      "   • If a variable is false in the row, use the negation of the variable",
      "4. Join all these conjunctions with OR operations",
      "5. The resulting expression is in DNF",
    ]
  }
  
  const cnfExplanations = {
    title: "How CNF Conversion Works:",
    steps: [
      "1. Create a truth table for the expression",
      "2. Find all rows where the expression evaluates to false",
      "3. For each 'false' row, create a disjunction (OR) of literals that makes that row false:",
      "   • If a variable is true in the row, use the negation of the variable",
      "   • If a variable is false in the row, use the variable itself",
      "4. Join all these disjunctions with AND operations",
      "5. The resulting expression is in CNF",
    ]
  }

  // SEO metadata
  const title = "DNF and CNF Converter | Normal Forms in Propositional Logic | LearnMathClass";
  const description = "Convert logical expressions to Disjunctive Normal Form (DNF) and Conjunctive Normal Form (CNF) with our free online converter. Learn step-by-step conversion methods with clear explanations.";
  const keywords = "dnf, cnf, normal form, disjunctive normal form, conjunctive normal form, propositional logic, logical expressions, truth table, boolean algebra, logical forms";
  const canonicalUrl = "https://www.learnmathclass.com/logic/propositional-logic/syntax/normal-forms";

  return {
    props: {
      dnfExplanations,
      cnfExplanations,
      title,
      description,
      keywords,
      canonicalUrl
    }
  }
}