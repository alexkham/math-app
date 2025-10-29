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
      navigationGroup
    }
  }
}

export default function FactorialCalculatorPage({ seoData, keyWords ,navigationGroup}) {

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
        <FactorialCalculator/>
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
