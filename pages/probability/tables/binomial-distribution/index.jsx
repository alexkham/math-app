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
import BinomialCumulativeTable from '@/app/components/probability/tables/BinomialCumulativeTable'


export async function getStaticProps(){

  const keyWords=['binomial distribution table', 'binomial probability table', 'cumulative binomial distribution',
    'binomial distribution calculator', 'binomial probability', 'discrete probability distribution',
    'n choose k', 'success probability', 'bernoulli trials', 'binomial coefficients',
    'P(X ≤ x)', 'P(X = k)', 'binomial cumulative probability', 'binomial pmf',
    'statistical tables', 'probability mass function']

    const sectionsContent={

    obj1:{
      title:`What is a Binomial Distribution?`,
      content:`The binomial distribution is a discrete probability distribution that models the number of successes in a fixed number of independent trials, where each trial has only two possible outcomes (success or failure) and the probability of success remains constant across all trials. It's defined by two parameters: n (number of trials) and p (probability of success).`,
      before:``,
      after:``,
    },
    
    obj2:{
      title:`How to Read the Binomial Distribution Table`,
      content:`The table displays cumulative probabilities P(X ≤ k) for various combinations of n (number of trials), k (number of successes), and p (probability of success). To find the probability of exactly k successes, calculate P(X = k) = P(X ≤ k) - P(X ≤ k-1). For probabilities with p > 0.5, use the complement: P(X ≤ k) when p' = 1-p equals P(X ≥ n-k) for the original p.`,
      before:``,
      after:``,
    },
  
    obj3:{
      title:`Binomial Distribution Formula`,
      content:`The probability mass function is P(X = k) = C(n,k) × p^k × (1-p)^(n-k), where C(n,k) = n!/(k!(n-k)!) is the binomial coefficient. The mean (expected value) is μ = np, variance is σ² = np(1-p), and standard deviation is σ = √(np(1-p)). These formulas allow you to calculate exact probabilities when tables don't cover your specific parameters.`,
      before:``,
      after:``,
    },
    
    obj4:{
      title:`Common Applications`,
      content:`Binomial distributions appear in quality control (defective items in a sample), medical trials (number of patients responding to treatment), sports statistics (number of successful free throws), survey analysis (number of respondents agreeing), genetics (inheritance patterns), and A/B testing (conversion rates). Any scenario with fixed independent trials and binary outcomes follows this distribution.`,
      before:``,
      after:``,
    },

    obj5:{
      title:`Properties and Characteristics`,
      content:`The binomial distribution is symmetric when p = 0.5, right-skewed when p < 0.5, and left-skewed when p > 0.5. As n increases, it approximates the normal distribution (especially when np ≥ 5 and n(1-p) ≥ 5). The sum of probabilities across all possible values equals 1. Maximum probability occurs near the mean μ = np.`,
      before:``,
      after:``,
    }
  }


  const introContent = {
    id: "intro",
    title: "Binomial Distribution Table",
    content: `This comprehensive binomial distribution table provides cumulative probabilities for various parameter combinations. Use it to quickly find probabilities without manual calculation, verify your computational results, or solve problems involving discrete binary outcomes across multiple independent trials.`
  }




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Binomial Distribution Table - Cumulative Probability Tables | Learn Math Class",
        description: "Comprehensive binomial distribution tables with cumulative probabilities for n trials and probability p. Includes formulas, examples, and how to read binomial probability tables for statistical analysis.",
        keywords: keyWords.join(", "),
        url: "/probability/tables/binomial-distribution",
        name: "Binomial Distribution Table"
      },
        
       }
    }
   }

export default function BinomialDistributionTablePage({seoData, sectionsContent, introContent}) {

    
  const genericSections=[
    {
        id:'what-is',
        title:'What is a Binomial Distribution?',
        link:'#what-is',
        content: sectionsContent.obj1.content
    },
    {
        id:'how-to-read',
        title:'How to Read the Table',
        link:'#how-to-read',
        content: sectionsContent.obj2.content
    },
    {
        id:'formula',
        title:'Binomial Distribution Formula',
        link:'#formula',
        content: sectionsContent.obj3.content
    },
    {
        id:'applications',
        title:'Common Applications',
        link:'#applications',
        content: sectionsContent.obj4.content
    },
    {
        id:'properties',
        title:'Properties and Characteristics',
        link:'#properties',
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
          "headline": "Binomial Distribution Table - Cumulative Probability Tables",
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'-20px'}}>Binomial Distribution Table</h1>
   <br/>
   <SectionTableOfContents sections={genericSections}  stickyWidth={'180px'} 
   showSecondaryNav={true}
   secondaryNavMode='siblings'
   secondaryNavTitle='Other Probability Tables'
   
   />
  
  
   <div style={{marginLeft:'130px'}}>
   <BinomialCumulativeTable/>
   </div>
   <br/>
   {/* <SectionTableOfContents sections={genericSections}/> */}
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