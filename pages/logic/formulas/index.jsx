import React from 'react'
import logicFormulasList from '@/app/api/db/formulas/logic/logicFormulasList'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import '../../pages.css'
import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import FormulasTOC from '@/app/components/examples/FormulaTOC'
import Head from 'next/head'

export async function getStaticProps() {
  const keyWords = ['mathematical logic','logic laws','logic formulas','logic rules','logic math',
    'laws of logic','discrete math laws of logic','discrete mathematics logic'];

  return {
    props: {
      seoData: {
        title: "Mathematical Logic Formulas - Laws & Rules | Learn Math Class",
        description: "Complete collection of mathematical logic formulas, laws, and rules. Essential discrete mathematics logic formulas for students and professionals.",
        keywords: keyWords.join(", "),
        url: "/logic/formulas",
        name: "Mathematical Logic Formulas"
      },
      keyWords
    }
  }
}

export default function LinearAlgebraFormulasPage({ seoData, keyWords }) {

//  const keyWords=['mathematical logic','logic laws','logic formulas','logic rules','logic math',
//   'laws of logic','discrete math laws of logic','discrete mathematics logic',]

  return (
    <>
    <Head>
  <title>{seoData.title}</title>
  <meta name="description" content={seoData.description} />
  <meta name="keywords" content={seoData.keywords} />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
  <meta property="og:title" content={seoData.title} />
  <meta property="og:description" content={seoData.description} />
  <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Learn Math Class" />
  
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={seoData.title} />
  <meta name="twitter:description" content={seoData.description} />
  
  <meta name="robots" content="index, follow" />
  
  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": seoData.name,
        "description": seoData.description,
        "keywords": seoData.keywords,
        "url": `https://www.learnmathclass.com${seoData.url}`,
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "mainEntity": {
          "@type": "Article",
          "name": seoData.name,
          "dateModified": new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          }
        }
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
      panelBackgroundColor='#f2f2f2'/> 
    <Breadcrumb/>
    <h1 className='title' style={{marginTop:'-20px',marginBottom:'-10px'}}>Mathematical Logic Formulas</h1>
    <FormulasTOC data={logicFormulasList} />
    <div style={{transform:'scale(0.95)'}}>
    <FormulaAccordionWrapper data={logicFormulasList} groupByField={['category']}/>
    </div>
    <br/>
    <ScrollUpButton/>
    </>
  )
}
