import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import Head from 'next/head'
import ExpandingCardsGrid from '@/app/components/cards/expanding-cards/ExpandingCardsGrid'
import '../../../pages/pages.css'

export async function getStaticProps(){

  const keyWords=['probability tables', 'statistical tables', 'distribution tables',
    'probability distribution tables', 'cumulative probability tables', 
    'statistical reference tables', 'probability calculator tables',
    'binomial table', 'normal distribution table', 't distribution table', 'poisson table',
    'z score table', 'statistical lookup tables']

//   const tableCards = [
//     {
//       id: 1,
//       title: 'Binomial Distribution Table',
//       summary: 'Lookup probabilities for fixed trials with binary outcomes',
//       description: 'Select number of trials (n), probability of success (p), and number of successes (k) from the table. Get instant probability values P(X = k) for exactly k successes and cumulative probabilities P(X ≤ k). Pre-calculated values eliminate manual computation. Navigate by choosing n from rows, p from columns, and read corresponding probabilities. Covers common parameter combinations for quick reference.',
//       icon: '',
//       linkTitle: 'Open Binomial Table',
//       link: '/probability/tables/binomial-distribution'
//     },
//     {
//       id: 2,
//       title: 'Normal Distribution (Z-Score) Table',
//       summary: 'Convert z-scores to probabilities and percentiles',
//       description: 'Locate your z-score using row and column intersection. Rows show the first decimal place, columns show the second decimal. Returns cumulative probability P(Z ≤ z) directly from the table cell. Use for finding percentiles, critical values, and areas under the standard normal curve. Covers z-values from -3.99 to +3.99 with two-decimal precision. No calculation required - just lookup and read.',
//       icon: '',
//       linkTitle: 'Open Normal Table',
//       link: '/probability/tables/normal-distribution'
//     },
//     {
//       id: 3,
//       title: 'T-Distribution Table',
//       summary: 'Find critical t-values for hypothesis tests and confidence intervals',
//       description: 'Select degrees of freedom (df) from the left column and significance level (α) from the header row. Table displays critical t-values at each intersection. Choose one-tailed or two-tailed columns based on your test type. Use these values to determine rejection regions and construct confidence intervals. Covers df from 1 to 120+ and common alpha levels including 0.10, 0.05, 0.025, 0.01, and 0.005.',
//       icon: '',
//       linkTitle: 'Open T-Distribution Table',
//       link: '/probability/tables/t-distribution'
//     },
//     {
//       id: 4,
//       title: 'Poisson Distribution Table',
//       summary: 'Calculate probabilities for events occurring at constant rates',
//       description: 'Choose lambda (λ) representing your average event rate from column headers. Select number of events (k) from the row. Read probability P(X = k) at the intersection. Sum values for cumulative probabilities. Table provides pre-calculated exponential values so you avoid complex formulas. Covers λ values from 0.1 to 15+ for rare event modeling in fixed intervals.',
//       icon: '',
//       linkTitle: 'Open Poisson Table',
//       link: '/probability/tables/poisson-distribution'
//     }
//   ]

const tableCards = [
  {
    id: 1,
    title: 'Binomial Distribution Table',
    summary: 'Lookup probabilities for fixed trials with binary outcomes',
    description: 'Comprehensive probability table displaying binomial values across multiple parameter combinations. Features exact probabilities P(X=k) and cumulative probabilities P(X≤k) for various trial counts, success rates, and outcome values. Organized grid format with pre-calculated values covering common statistical scenarios.',
    icon: '',
    linkTitle: 'Open Binomial Table',
    link: '/probability/tables/binomial-distribution'
  },
  {
    id: 2,
    title: 'Normal Distribution (Z-Score) Table',
    summary: 'Convert z-scores to probabilities and percentiles',
    description: 'Standard normal probability table showing cumulative probabilities for z-scores. Grid displays values from -3.99 to +3.99 with two-decimal precision. Provides percentile conversions and area calculations under the normal curve. Includes both positive and negative z-value ranges.',
    icon: '',
    linkTitle: 'Open Normal Table',
    link: '/probability/tables/normal-distribution'
  },
  {
    id: 3,
    title: 'T-Distribution Table',
    summary: 'Find critical t-values for hypothesis tests and confidence intervals',
    description: 'Critical value reference table for t-distribution across degrees of freedom and significance levels. Features separate columns for one-tailed and two-tailed tests. Covers df ranges from 1 to 120+ and multiple alpha levels including 0.10, 0.05, 0.025, 0.01, and 0.005.',
    icon: '',
    linkTitle: 'Open T-Distribution Table',
    link: '/probability/tables/t-distribution'
  },
  {
    id: 4,
    title: 'Poisson Distribution Table',
    summary: 'Calculate probabilities for events occurring at constant rates',
    description: 'Event probability table displaying Poisson values for different lambda rates and event counts. Shows exact probabilities P(X=k) and cumulative distributions. Covers lambda values from 0.1 to 15+ with pre-calculated exponential terms for rare event scenarios.',
    icon: '',
    linkTitle: 'Open Poisson Table',
    link: '/probability/tables/poisson-distribution'
  }
]


   return {
      props:{
          tableCards,
          seoData: {
        title: "Probability Tables - Statistical Distribution Reference Tables | Learn Math Class",
        description: "Comprehensive collection of probability distribution tables including binomial, normal (z-score), t-distribution, and Poisson tables. Calculate probabilities, find critical values, and solve statistical problems.",
        keywords: keyWords.join(", "),
        url: "/probability/tables",
        name: "Probability Tables"
      },
        
       }
    }
   }

export default function ProbabilityTablesPage({seoData, tableCards}) {

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
        "inLanguage": "en-US"
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'30px'}}>Probability Distribution Tables</h1>
   <ExpandingCardsGrid cards={tableCards}/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}