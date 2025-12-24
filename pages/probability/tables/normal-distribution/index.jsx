import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import ZTableContainer from '@/app/components/z-table/ZTableContainer'


export async function getStaticProps(){

  const keyWords=['normal distribution table', 'z score table', 'standard normal table', 
    'z table', 'normal probability table', 'gaussian distribution table',
    'cumulative normal distribution', 'standard normal distribution', 'z value table',
    'probability z table', 'normal curve table', 'z score lookup',
    'P(Z < z)', 'standard normal cumulative', 'bell curve table',
    'normal distribution calculator']

    const sectionsContent={

    obj1:{
      title:`What is the Normal Distribution?`,
      content:`The normal distribution, also called the Gaussian distribution or bell curve, is a continuous probability distribution symmetric around its mean. It's characterized by two parameters: μ (mean) and σ (standard deviation). The standard normal distribution has μ = 0 and σ = 1, and any normal distribution can be standardized using the z-score transformation: z = (x - μ)/σ.`,
      before:``,
      after:``,
    },
    
    obj2:{
      title:`How to Read the Z-Table`,
      content:`The z-table shows cumulative probabilities P(Z ≤ z) for the standard normal distribution. The left column shows the z-score to one decimal place, and the top row shows the second decimal place. To find P(Z ≤ 1.96), locate 1.9 in the left column and 0.06 across the top. For negative z-scores, use symmetry: P(Z ≤ -z) = 1 - P(Z ≤ z). For P(Z > z), calculate 1 - P(Z ≤ z).`,
      before:``,
      after:``,
    },
  
    obj3:{
      title:`Normal Distribution Properties`,
      content:`The normal distribution is symmetric around the mean with 68% of values within ±1σ, 95% within ±2σ, and 99.7% within ±3σ (empirical rule). The total area under the curve equals 1. The mean, median, and mode are all equal. The probability density function is f(x) = (1/(σ√(2π))) × e^(-(x-μ)²/(2σ²)). The distribution extends from -∞ to +∞ but is nearly zero beyond ±3σ.`,
      before:``,
      after:``,
    },
    
    obj4:{
      title:`Common Applications`,
      content:`Normal distributions model natural phenomena like human heights and weights, test scores, measurement errors, IQ scores, blood pressure readings, and manufacturing tolerances. In statistics, it's fundamental for hypothesis testing, confidence intervals, regression analysis, and the Central Limit Theorem. Many statistical tests assume normality, making z-tables essential for calculating p-values and critical values.`,
      before:``,
      after:``,
    },

    obj5:{
      title:`Z-Score Calculation and Interpretation`,
      content:`A z-score indicates how many standard deviations a value is from the mean. Positive z-scores are above the mean, negative below. A z-score of 1.96 corresponds to the 97.5th percentile (used for 95% confidence intervals). Z-scores enable comparison across different normal distributions and conversion to percentiles. The table provides precise probabilities for standardized values essential in statistical inference.`,
      before:``,
      after:``,
    }
  }


  const introContent = {
    id: "intro",
    title: "Standard Normal Distribution Table (Z-Table)",
    content: `This comprehensive z-table provides cumulative probabilities for the standard normal distribution. Use it to find probabilities, calculate percentiles, determine critical values for hypothesis tests, and convert z-scores to probabilities for statistical analysis and inference.`
  }




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Normal Distribution Table - Z Score Table & Standard Normal | Learn Math Class",
        description: "Complete standard normal distribution (z-score) table with cumulative probabilities. Find z-values, calculate percentiles, and solve normal probability problems with our comprehensive z-table.",
        keywords: keyWords.join(", "),
        url: "/probability/tables/normal-distribution",
        name: "Normal Distribution Table"
      },
        
       }
    }
   }

export default function NormalDistributionTable({seoData, sectionsContent, introContent}) {

    
  const genericSections=[
    {
        id:'what-is',
        title:'What is the Normal Distribution?',
        link:'#what-is',
        content: sectionsContent.obj1.content
    },
    {
        id:'how-to-read',
        title:'How to Read the Z-Table',
        link:'#how-to-read',
        content: sectionsContent.obj2.content
    },
    {
        id:'properties',
        title:'Normal Distribution Properties',
        link:'#properties',
        content: sectionsContent.obj3.content
    },
    {
        id:'applications',
        title:'Common Applications',
        link:'#applications',
        content: sectionsContent.obj4.content
    },
    {
        id:'z-score',
        title:'Z-Score Calculation',
        link:'#z-score',
        content: sectionsContent.obj5.content
    }
]

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
        "datePublished": new Date().toISOString(),
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "mainEntity": {
          "@type": "Article",
          "name": seoData.name,
          "headline": "Normal Distribution Table - Z Score Table",
          "datePublished": new Date().toISOString(),
          "dateModified": new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Learn Math Class"
          }
        }
      })
    }}
  />
</Head>
   {/* <GenericNavbar/> */}
   <br/>
   <br/>
   <br/>
   <br/>
    <OperaSidebar 
           side='right'
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         /> 
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Normal Distribution (Z-Score) Table</h1>
   <br/>
    <SectionTableOfContents sections={genericSections}
    stickyWidth={'250px'}
    showSecondaryNav={true}
    secondaryNavMode='siblings'
    secondaryNavTitle='Other Probability Tables'/>
   <div style={{width:'80%',margin:'auto'}}>
   <ZTableContainer/>
   </div>
   <br/>
  
   <br/>
   <br/>
   <br/>
    {/* <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
          backgroundColor='#f9fafb'
          textColor="#06357a"
        /> */}
   <br/>
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}