import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import FactorialCalculator from '@/app/components/calculators/arithmetics/FactorialCalculator'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import Head from 'next/head'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'


export async function getStaticProps() {
  const keyWords = ['factorial','factorial calculator','factorial meaning',
    'n factorial calculator','factorial n','0 factorial','1 factorial',
    'factorial in mathematics','factorial in math','zero factorial','factorial calculator online'];

const navigationGroup=[
  {title:'Other Calculators',
    items:[
      {title:'Exponent Calculator',link:'/calculators/exponent-calculator'},
      {title:'Root Calculator',link:'/calculators/root-calculator'},
      {title:'Modulo Calculator',link:'/calculators/modulo-calculator'},
      {title:'Logarithm Calculator',link:'/calculators/log-calculator'},
      {title:'Percentage Calculator',link:'/calculators/percentage-calculator'},
      // {title:'Factorial Calculator',link:'/calculators/factorial-calculator'},
      {title:'Fractions Calculator',link:'/calculators/fraction-calculator'},
      {title:'Complex Numbers Calculator',link:'/calculators/complex-numbers'},
      {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
      {title:'Statistics Calculator',link:'/calculators/statistics-calculator'},
    ]
  }
]

// factorialExplanations.js
const factorialActualExplanations = {
  basic: {
    text: "The basic factorial (n!) is the product of all positive integers less than or equal to n. For example, 5! = 5 × 4 × 3 × 2 × 1 = 120. By convention, 0! = 1. Factorials grow extremely rapidly and are fundamental in combinatorics, probability, and algebra.",
    links: [
      { title: "Learn more about Factorials", link: "/factorial" }
    ]
  },
  double: {
    text: "The double factorial (n!!) is the product of all integers from 1 to n that have the same parity (odd or even) as n. For example, 8!! = 8 × 6 × 4 × 2 = 384 and 7!! = 7 × 5 × 3 × 1 = 105. Double factorials appear in combinatorial problems and calculus.",
    links: [
      { title: "Learn more about Double Factorials", link: "/factorial" }
    ]
  },
  sub: {
    text: "The subfactorial (!n) counts the number of derangements of n objects - permutations where no element appears in its original position. For example, !3 = 2 because there are 2 ways to arrange 3 items so none are in their original spots. Subfactorials are used in probability and combinatorics.",
    links: [
      { title: "Learn more about Subfactorials", link: "/factorial" }
    ]
  },
  multi: {
    text: "The multifactorial (n(k)!) is a generalization where you multiply every k-th number. For example, with k=3, 10(3)! = 10 × 7 × 4 × 1 = 280. When k=1 it's a regular factorial, k=2 is double factorial. Multifactorials extend factorial concepts to broader mathematical contexts.",
    links: [
      { title: "Learn more about Multifactorials", link: "/factorial" }
    ]
  },
  primorial: {
    text: "The primorial (n#) is the product of all prime numbers less than or equal to n. For example, 10# = 2 × 3 × 5 × 7 = 210. Primorials are important in number theory, particularly in studying prime number distributions and appear in various mathematical theorems.",
    links: [
      { title: "Learn more about Primorials", link: "/factorial" }
    ]
  }
};


  return {
    props: {
      seoData: {
        title: "Factorial Calculator - Calculate n! Online | Learn Math Class",
        description: "Free factorial calculator with step-by-step solutions. Calculate factorials, understand factorial meaning, and learn about 0! and factorial mathematics.",
        keywords: keyWords.join(", "),
        url: "/calculators/factorial-calculator",
        name: "Factorial Calculator"
      },
      keyWords,
      navigationGroup,
      factorialActualExplanations
    }
  }
}

export default function FactorialCalculatorPage({ seoData, keyWords ,
  navigationGroup ,factorialActualExplanations}) {

    // const keyWords=['factorial','factorial calculator','factorial meaning',
    //   'n factorial calculator','factorial n','0 factorial','1 factorial',
    // 'factorial in mathematics','factorial in math','zero factorial','factorial calculator online',]
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
     <style jsx>{`
  @media (max-width: 1024px) {
    .layout-container > div:first-child,
    .layout-container > div:first-child *,
    :global([class*="vertical"]),
    :global([class*="vertical"]) * {
      position: static !important;
    }
  }
  
  .layout-container {
    display: grid;
    grid-template-columns: 20% 80%;
    gap: 20px;
    width: 100%;
  }
  
  @media (max-width: 1024px) {
    .layout-container {
      grid-template-columns: 1fr;
    }
  }
`}</style>

   <GenericNavbar/>
   <br/>
   <br/>
   <br/>
   <br/>
   <OperaSidebar
           side='right'
           topOffset='55px'
           sidebarWidth='45px'
           panelWidth='300px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         />
   <Breadcrumb/>
   <h1 className='title' style={{marginTop:'-30px',marginBottom:'10px' }}>Factorial Calculator</h1>
   
     {/* <VerticalButtonGroup 
            items={navigationGroup}
            width="250px"       
            theme='lightBlue'
            isSticky={true}
            verticalOffset='200px'
         />
   <FactorialCalculator/> */}
     <div className="layout-container">
     {/* <div style={{
      display: 'grid',
      gridTemplateColumns: '10% 90%',
      gap: '20px',
      width: '100%'
   }}> */}
      {/* Left column - Sidebar */}
      <div>
        <br/>
       
         <VerticalButtonGroup 
            items={navigationGroup}
            width="250px"       
            theme='lightBlue'
            isSticky={true}
            verticalOffset='200px'
         />
      </div>

      {/* Right column - Table */}
      <div>
         <div style={{width:'100%',margin:'auto'}}>
          <div style={{transform:'scale(0.95)'}}>
        {/* <ExponentCalculator explanations={explanations}/> */}
        <FactorialCalculator
        explanations={factorialActualExplanations}/>
      </div> 
          
           {/* <div style={{transform:'scale(0.90)'}}>
        <RootCalculator explanations={explanations}
        />
      </div>  */}
            <br/>
            <br/>
            <br/>
           
            
         </div>
      </div>
   </div>
   <br/>
   <br/>
   <br/>
   <br/>
   <ScrollUpButton/>
   
   
   </>
  )
}
