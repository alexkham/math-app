import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import FractionCalculator from '@/app/components/calculators/fraction-calculator/FractionCalculator'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import Head from 'next/head'


export async function getStaticProps() {
  const keyWords = ['fractions calculator','calculate the fraction','fractions',
    'decimal to fraction','adding fractions','multiplying fractions','dividing fractions',
    'fraction to decimal','adding and subtracting fractions','fraction and decimal calculator',
    'reducing fractions calculator'];

  return {
    props: {
      seoData: {
        title: "Fraction Calculator - Add, Subtract, Multiply & Divide Fractions | Learn Math Class",
        description: "Free fraction calculator for adding, subtracting, multiplying, and dividing fractions. Convert decimals to fractions and simplify fractions online.",
        keywords: keyWords.join(", "),
        url: "/calculators/fraction-calculator",
        name: "Fraction Calculator"
      },
      keyWords
    }
  }
}

export default function FractionCalculatorPage({ seoData, keyWords }) {

  // const keyWords=['fractions calculator','calculate the fraction','fractions',
  //   'decimal to fraction','adding fractions','multiplying fractions','dividing fractions',
  //   'fraction to decimal','adding and subtracting fractions','fraction and decimal calculator',
  //   'reducing fractions calculator']


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
           // topOffset='65px'
           sidebarWidth='45px'
           panelWidth='300px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         />
   <Breadcrumb/>
   <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Fraction Calculator</h1>
   <FractionCalculator/>
   <br/>
   <br/>
   <br/>
   <br/>
   <ScrollUpButton/>
   </>
  )
}
