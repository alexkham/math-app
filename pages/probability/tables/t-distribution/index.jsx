import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../pages/pages.css'
import '../../../../pages/tables/table.css'
import Head from 'next/head'
import TTableContainer from '@/app/components/t-table/TTableContainer'


export async function getStaticProps(){

  const keyWords=['t distribution table', 't table', 'student t distribution', 
    'critical t values', 't score table', 'degrees of freedom table',
    'confidence interval table', 't test table', 'two tailed t table',
    'one tailed t table', 't critical values', 'student t table',
    'hypothesis testing table', 't statistic table', 't distribution critical values',
    'statistical tables']

    const sectionsContent={

    obj1:{
      title:`What is the T-Distribution?`,
      content:`The t-distribution, also called Student's t-distribution, is a probability distribution used when sample sizes are small or population standard deviation is unknown. It's similar to the normal distribution but has heavier tails, accounting for additional uncertainty. The shape depends on degrees of freedom (df = n - 1), approaching the normal distribution as df increases. It's essential for t-tests and constructing confidence intervals.`,
      before:``,
      after:``,
    },
    
    obj2:{
      title:`How to Read the T-Table`,
      content:`The table shows critical t-values for different significance levels (α) and degrees of freedom (df). The left column lists degrees of freedom, while column headers show significance levels for one-tailed and two-tailed tests. For a 95% confidence interval with 20 df, use the 0.025 two-tailed column (α/2 = 0.025). The intersection gives the critical value. Values beyond this threshold indicate statistical significance.`,
      before:``,
      after:``,
    },
  
    obj3:{
      title:`T-Distribution Properties`,
      content:`The t-distribution is symmetric around zero with mean = 0. Variance equals df/(df-2) for df > 2. As degrees of freedom increase, the distribution converges to the standard normal distribution (z-distribution). With df ≥ 30, t-values approximate z-values. The heavier tails account for estimation uncertainty when using sample standard deviation instead of population standard deviation.`,
      before:``,
      after:``,
    },
    
    obj4:{
      title:`Common Applications`,
      content:`T-distributions are used in one-sample t-tests (comparing sample mean to population mean), two-sample t-tests (comparing two group means), paired t-tests (comparing before/after measurements), confidence intervals for means with unknown population variance, regression analysis for testing coefficient significance, and ANOVA. Essential when working with small samples (n < 30) or unknown population parameters.`,
      before:``,
      after:``,
    },

    obj5:{
      title:`Degrees of Freedom and Critical Values`,
      content:`Degrees of freedom represent the number of independent pieces of information available for estimation. For single sample tests, df = n - 1. For two-sample tests, df calculation depends on whether variances are equal. Lower df means wider distribution and higher critical values, reflecting greater uncertainty. Critical values determine rejection regions for hypothesis tests and confidence interval widths.`,
      before:``,
      after:``,
    }
  }




   return {
      props:{
         sectionsContent,
          seoData: {
        title: "T-Distribution Table - Critical T Values & Student's T | Learn Math Class",
        description: "Complete t-distribution table with critical values for all degrees of freedom and significance levels. Essential for t-tests, confidence intervals, and hypothesis testing in statistics.",
        keywords: keyWords.join(", "),
        url: "/probability/tables/t-distribution",
        name: "T-Distribution Table"
      },
        
       }
    }
   }

export default function TDistributionTable({seoData, sectionsContent}) {

    
  const genericSections=[
    {
        id:'what-is',
        title:'What is the T-Distribution?',
        link:'#what-is',
        content: sectionsContent.obj1.content
    },
    {
        id:'how-to-read',
        title:'How to Read the T-Table',
        link:'#how-to-read',
        content: sectionsContent.obj2.content
    },
    {
        id:'properties',
        title:'T-Distribution Properties',
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
        id:'degrees-freedom',
        title:'Degrees of Freedom',
        link:'#degrees-freedom',
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
          "headline": "T-Distribution Table - Critical T Values",
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
   <br/>
   <br/>
   <br/>
   <br/>
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'20px'}}>T-Distribution Table</h1>
   <br/>
   <SectionTableOfContents sections={genericSections}
   stickyWidth={'220px'}
   showSecondaryNav={true}
   secondaryNavMode='siblings'
   secondaryNavTitle='Other Probability Tables'/>
   <br/>
   <br/>
   <TTableContainer/>
   <br/>
   
   <br/>
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