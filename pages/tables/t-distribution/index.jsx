// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../../pages/pages.css'

// import Head from 'next/head'
// import TTableContainer from '@/app/components/t-table/TTableContainer'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// export async function getStaticProps(){

//   const keyWords=['t distribution table', 't table', 'student t distribution', 
//     'critical t values', 't score table', 'degrees of freedom table',
//     'confidence interval table', 't test table', 'two tailed t table',
//     'one tailed t table', 't critical values', 'student t table',
//     'hypothesis testing table', 't statistic table', 't distribution critical values',
//     'statistical tables']

//     const sectionsContent={

//     obj1:{
//       title:`What is the T-Distribution?`,
//       content:`The t-distribution, also called Student's t-distribution, is a probability distribution used when sample sizes are small or population standard deviation is unknown. It's similar to the normal distribution but has heavier tails, accounting for additional uncertainty. The shape depends on degrees of freedom (df = n - 1), approaching the normal distribution as df increases. It's essential for t-tests and constructing confidence intervals.`,
//       before:``,
//       after:``,
//     },
    
//     obj2:{
//       title:`How to Read the T-Table`,
//       content:`The table shows critical t-values for different significance levels (α) and degrees of freedom (df). The left column lists degrees of freedom, while column headers show significance levels for one-tailed and two-tailed tests. For a 95% confidence interval with 20 df, use the 0.025 two-tailed column (α/2 = 0.025). The intersection gives the critical value. Values beyond this threshold indicate statistical significance.`,
//       before:``,
//       after:``,
//     },
  
//     obj3:{
//       title:`T-Distribution Properties`,
//       content:`The t-distribution is symmetric around zero with mean = 0. Variance equals df/(df-2) for df > 2. As degrees of freedom increase, the distribution converges to the standard normal distribution (z-distribution). With df ≥ 30, t-values approximate z-values. The heavier tails account for estimation uncertainty when using sample standard deviation instead of population standard deviation.`,
//       before:``,
//       after:``,
//     },
    
//     obj4:{
//       title:`Common Applications`,
//       content:`T-distributions are used in one-sample t-tests (comparing sample mean to population mean), two-sample t-tests (comparing two group means), paired t-tests (comparing before/after measurements), confidence intervals for means with unknown population variance, regression analysis for testing coefficient significance, and ANOVA. Essential when working with small samples (n < 30) or unknown population parameters.`,
//       before:``,
//       after:``,
//     },

//     obj5:{
//       title:`Degrees of Freedom and Critical Values`,
//       content:`Degrees of freedom represent the number of independent pieces of information available for estimation. For single sample tests, df = n - 1. For two-sample tests, df calculation depends on whether variances are equal. Lower df means wider distribution and higher critical values, reflecting greater uncertainty. Critical values determine rejection regions for hypothesis tests and confidence interval widths.`,
//       before:``,
//       after:``,
//     }
//   }




//    return {
//       props:{
//          sectionsContent,
//           seoData: {
//         title: "T-Distribution Table - Critical T Values & Student's T | Learn Math Class",
//         description: "Complete t-distribution table with critical values for all degrees of freedom and significance levels. Essential for t-tests, confidence intervals, and hypothesis testing in statistics.",
//         keywords: keyWords.join(", "),
//         url: "/tables/t-distribution",
//         name: "T-Distribution Table"
//       },
        
//        }
//     }
//    }

// export default function TDistributionTable({seoData, sectionsContent}) {

    
//   const genericSections=[
//     {
//         id:'what-is',
//         title:'What is the T-Distribution?',
//         link:'#what-is',
//         content: sectionsContent.obj1.content
//     },
//     {
//         id:'how-to-read',
//         title:'How to Read the T-Table',
//         link:'#how-to-read',
//         content: sectionsContent.obj2.content
//     },
//     {
//         id:'properties',
//         title:'T-Distribution Properties',
//         link:'#properties',
//         content: sectionsContent.obj3.content
//     },
//     {
//         id:'applications',
//         title:'Common Applications',
//         link:'#applications',
//         content: sectionsContent.obj4.content
//     },
//     {
//         id:'degrees-freedom',
//         title:'Degrees of Freedom',
//         link:'#degrees-freedom',
//         content: sectionsContent.obj5.content
//     }
// ]

//   return (
//    <>
//    <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
//   <meta property="og:title" content={seoData.title} />
//   <meta property="og:description" content={seoData.description} />
//   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//   <meta property="og:type" content="article" />
//   <meta property="og:site_name" content="Learn Math Class" />
  
//   <meta name="twitter:card" content="summary" />
//   <meta name="twitter:title" content={seoData.title} />
//   <meta name="twitter:description" content={seoData.description} />
  
//   <meta name="robots" content="index, follow" />
  
//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "WebPage",
//         "name": seoData.name,
//         "description": seoData.description,
//         "keywords": seoData.keywords,
//         "url": `https://www.learnmathclass.com${seoData.url}`,
//         "datePublished": new Date().toISOString(),
//         "dateModified": new Date().toISOString(),
//         "inLanguage": "en-US",
//         "mainEntity": {
//           "@type": "Article",
//           "name": seoData.name,
//           "headline": "T-Distribution Table - Critical T Values",
//           "datePublished": new Date().toISOString(),
//           "dateModified": new Date().toISOString(),
//           "author": {
//             "@type": "Organization",
//             "name": "Learn Math Class"
//           },
//           "publisher": {
//             "@type": "Organization",
//             "name": "Learn Math Class"
//           }
//         }
//       })
//     }}
//   />
// </Head>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>T-Distribution Table</h1>
//    <br/>
//    <SectionTableOfContents sections={genericSections}
//    stickyWidth={'220px'}
//    showSecondaryNav={true}
//    secondaryNavMode='siblings'
//    secondaryNavTitle='Other Probability Tables'/>
//    <br/>
//    <br/>
//    <TTableContainer/>
//    <br/>
   
//    <br/>
//    <br/>
//    <br/>
//    <Sections sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }



import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../pages/pages.css'

import Head from 'next/head'
import TTableContainer from '@/app/components/t-table/TTableContainer'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


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
      content:`The **t-distribution**, also called **Student's t-distribution**, is a continuous probability distribution used for inference about a population mean when the population standard deviation is unknown and the sample standard deviation is used in its place. It was introduced by William Sealy Gosset in 1908 under the pen name "Student" while he worked at Guinness Brewery, where he needed reliable inference from small samples of barley.

The distribution is symmetric and bell-shaped around zero, like the standard normal, but has **heavier tails** that account for the extra uncertainty introduced by estimating the standard deviation from the sample. Its shape is controlled by a single parameter, the **degrees of freedom** $\\nu$ (typically $\\nu = n - 1$ for a one-sample test). As $\\nu$ increases, the t-distribution converges to the standard normal $N(0,1)$ — by $\\nu \\geq 30$ the two are nearly indistinguishable for most practical purposes.

The probability density function is

$$f(t \\mid \\nu) = \\frac{\\Gamma\\!\\left(\\frac{\\nu+1}{2}\\right)}{\\sqrt{\\nu \\pi}\\,\\Gamma\\!\\left(\\frac{\\nu}{2}\\right)} \\left(1 + \\frac{t^2}{\\nu}\\right)^{-\\frac{\\nu+1}{2}}$$

For full theory see the **t-distribution page**.`,
      before:``,
      after:``,
    },
    
    obj2:{
      title:`Using the Interactive T-Table`,
      content:`The table above is **interactive** — pick the variant you need and set your degrees of freedom, and the table regenerates with exact probabilities.

**Step 1 — Pick a table variant from the dropdown:**

• **Cumulative (less than t), Positive Values** — gives $P(T \\leq t)$ for $t$ from $0$ to $4.1$ in steps of $0.1$
• **Cumulative (less than t), Negative Values** — gives $P(T \\leq t)$ for $t$ from $-4.0$ to $0$
• **Complementary Cumulative (greater than t), Positive Values** — gives $P(T > t)$ for $t$ from $0$ to $4.1$, the right-tail area
• **Complementary Cumulative (greater than t), Negative Values** — gives $P(T > t)$ for $t$ from $-4.1$ to $0$

**Step 2 — Enter degrees of freedom** in the Degrees of Freedom input (default $30$). Each row of the table is one $t$ value at the increment $0.1$, evaluated at your $\\nu$.

**Step 3 — Read off the probability**. For a one-tailed test, use the complementary-cumulative variant directly: the value at the table $t$ is your $p$-value. For a two-tailed test, double it. For a confidence interval, take the cumulative-less-than-t variant and read off the $t$ value at the target probability (e.g., $0.975$ for a $95\\%$ interval).`,
      before:``,
      after:``,
    },
  
    obj3:{
      title:`T-Distribution Properties`,
      content:`The t-distribution has a small number of clean properties that make it tractable for hand calculation and easy to compare to the normal:

• **Symmetric around zero** — the mean is $0$ for $\\nu > 1$ (undefined for $\\nu = 1$, the Cauchy case)
• **Variance** — $\\dfrac{\\nu}{\\nu - 2}$ for $\\nu > 2$, otherwise undefined or infinite; always greater than $1$, reflecting the heavier tails
• **Skewness** — $0$ for $\\nu > 3$
• **Excess kurtosis** — $\\dfrac{6}{\\nu - 4}$ for $\\nu > 4$, positive for all finite $\\nu$, decaying to $0$ as $\\nu \\to \\infty$

The symmetry around zero means that for any positive $t$, $P(T \\leq -t) = P(T \\geq t)$ — which is why the negative-value tables in the widget above are mirror images of the positive ones.

As $\\nu \\to \\infty$, $T_\\nu \\to Z \\sim N(0, 1)$. At $\\nu = 30$ the difference is around $1\\%$ in the tail; by $\\nu = 100$ the t and z critical values agree to three decimals.`,
      before:``,
      after:``,
    },
    
    obj4:{
      title:`Common Applications`,
      content:`The t-distribution is the workhorse of small-sample inference about means. The standard scenarios:

• **One-sample t-test** — testing whether a population mean $\\mu$ equals a hypothesized value $\\mu_0$ using $t = \\dfrac{\\bar{x} - \\mu_0}{s / \\sqrt{n}}$ with $\\nu = n - 1$
• **Two-sample t-test (independent)** — comparing two group means; degrees of freedom depend on whether variances are pooled (equal-variance assumption) or unequal (Welch's t-test, with the Satterthwaite df approximation)
• **Paired t-test** — comparing before/after measurements on the same subjects, applied to the differences with $\\nu = n - 1$
• **Confidence interval for a mean** — $\\bar{x} \\pm t_{\\nu,\\, \\alpha/2} \\cdot \\dfrac{s}{\\sqrt{n}}$ when $\\sigma$ is unknown
• **Regression** — the standard t-statistic for each coefficient $\\hat{\\beta}_j$ uses a t-distribution with $\\nu = n - p$ where $p$ is the number of fitted parameters

For all of these, the t-distribution replaces the standard normal whenever the population standard deviation must be estimated from the sample. With **large samples** ($n \\geq 30$ as a rough guide) the two are close enough that the z-distribution is often used instead — see the **normal distribution table**.`,
      before:``,
      after:``,
    },

    obj5:{
      title:`Degrees of Freedom and Critical Values`,
      content:`**Degrees of freedom** ($\\nu$, or $df$) measure how many independent observations are available for estimating variability after the parameters of interest have been fitted. For a one-sample test on $n$ observations, $\\nu = n - 1$ because one degree is consumed by estimating the mean. For two independent samples with equal variances, $\\nu = n_1 + n_2 - 2$; for Welch's unequal-variance test, $\\nu$ is given by the Satterthwaite approximation. In regression with $n$ observations and $p$ fitted coefficients (including the intercept), $\\nu = n - p$.

The **critical t-value** $t_{\\nu,\\, \\alpha}$ is the value such that $P(T_\\nu > t_{\\nu,\\, \\alpha}) = \\alpha$. Lower $\\nu$ produces a wider distribution and therefore larger critical values, reflecting the extra uncertainty from a small sample. For example, the two-tailed $5\\%$ critical value drops from $t_{4,\\, 0.025} = 2.776$ to $t_{29,\\, 0.025} = 2.045$ to $t_{\\infty,\\, 0.025} = 1.960$ (the normal value).

Use the widget above to read off any $t_{\\nu,\\, \\alpha}$ directly. To get the critical value for a given right-tail area $\\alpha$, choose the **Complementary Cumulative (greater than t), Positive Values** table at your $\\nu$ and find the row where the probability equals $\\alpha$.`,
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
        url: "/tables/t-distribution",
        name: "T-Distribution Table",
        category:'Probability'
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>T-Distribution Table</h1>
   <br/>
   
   <TTableContainer/>
   <br/>
   <SectionTableOfContents sections={genericSections}
   stickyWidth={'220px'}
   showSecondaryNav={true}
   secondaryNavMode='siblings'
   secondaryNavTitle='Other Probability Tables'/>
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