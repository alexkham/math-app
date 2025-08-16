import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import FractionCircleApp from '@/app/components/fractions/FractionCircle'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import Head from 'next/head'


// export async function getStaticProps(){
// const explanationContent = `
// # Understanding Fractions

// ## What You're Seeing
// The [circle](!/combinatorics) shows parts of a whole. Blue sections represent the numerator, total sections represent the denominator.

// ## Fraction in Math
// A fraction shows part of something whole:
// Top number = parts you have
// Bottom number = total equal parts

// ## Decimal and Percentage Forms
// Fractions can be written as decimals or percentages by dividing top by bottom.

// ## Equivalent Fractions
// Different fractions can represent the same amount. Multiply or divide both numbers by the same amount.

// ## Converting Fractions to Decimals
// Divide the top number by the bottom number.
// `;
//    return {
//       props:{
//          explanationContent,
        
//        }
//     }
//    }



export async function getStaticProps(){

  
  const explanationContent = `
# Understanding Fractions

## What You're Seeing
The circle shows parts of a whole. Blue sections represent the numerator, total sections represent the denominator.

## Fraction in Math
A fraction shows part of something whole:
Top number = parts you have
Bottom number = total equal parts

## Decimal and Percentage Forms
Fractions can be written as decimals or percentages by dividing top by bottom.

## Equivalent Fractions
Different fractions can represent the same amount. Multiply or divide both numbers by the same amount.

## Converting Fractions to Decimals
Divide the top number by the bottom number.
`;
  
  const keyWords = ['fraction in math','decimal to fraction','fractions','fraction to decimal',
    'equivalent fractions','converting fractions to decimals'];
  
  return {
    props: {
      seoData: {
        title: "Fractions Visualizer - Interactive Learning Tool | Learn Math Class",
        description: "Interactive fractions visualizer with circle diagrams. Learn fractions, decimals, percentages, and equivalent fractions through visual representation.",
        keywords: keyWords.join(", "),
        url: "/visual-tools/fractions-visualizer"
      },
      explanationContent,
      keyWords
    }
  }
}
export default function FractionsVisualizerPage({seoData, explanationContent, keyWords}) {

 
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
        "name": seoData.title,
        "description": seoData.description,
        "keywords": seoData.keywords,
        "url": `https://www.learnmathclass.com${seoData.url}`,
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "mainEntity": {
          "@type": "Article",
          "name": "Fractions Visualizer",
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
   <br/>
   <br/>
  
   <h1 className='title' style={{marginTop:'-30px'}}>Fractions Visualizer</h1>
    <br/>
   <br/>
   <FractionCircleApp  explanationContent={explanationContent}/>
   <br/>
   <br/>
   <br/>
   <br/>
   <ScrollUpButton/>
   </>
  )
}
