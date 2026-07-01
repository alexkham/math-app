// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../../../pages/pages.css'
// import Head from 'next/head'
// import ZTableContainer from '@/app/components/z-table/ZTableContainer'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// export async function getStaticProps(){

//   const keyWords=['normal distribution table', 'z score table', 'standard normal table', 
//     'z table', 'normal probability table', 'gaussian distribution table',
//     'cumulative normal distribution', 'standard normal distribution', 'z value table',
//     'probability z table', 'normal curve table', 'z score lookup',
//     'P(Z < z)', 'standard normal cumulative', 'bell curve table',
//     'normal distribution calculator']

//     const sectionsContent={

//     obj1:{
//       title:`What is the Normal Distribution?`,
//       content:`The normal distribution, also called the Gaussian distribution or bell curve, is a continuous probability distribution symmetric around its mean. It's characterized by two parameters: μ (mean) and σ (standard deviation). The standard normal distribution has μ = 0 and σ = 1, and any normal distribution can be standardized using the z-score transformation: z = (x - μ)/σ.`,
//       before:``,
//       after:``,
//     },
    
//     obj2:{
//       title:`How to Read the Z-Table`,
//       content:`The z-table shows cumulative probabilities P(Z ≤ z) for the standard normal distribution. The left column shows the z-score to one decimal place, and the top row shows the second decimal place. To find P(Z ≤ 1.96), locate 1.9 in the left column and 0.06 across the top. For negative z-scores, use symmetry: P(Z ≤ -z) = 1 - P(Z ≤ z). For P(Z > z), calculate 1 - P(Z ≤ z).`,
//       before:``,
//       after:``,
//     },
  
//     obj3:{
//       title:`Normal Distribution Properties`,
//       content:`The normal distribution is symmetric around the mean with 68% of values within ±1σ, 95% within ±2σ, and 99.7% within ±3σ (empirical rule). The total area under the curve equals 1. The mean, median, and mode are all equal. The probability density function is f(x) = (1/(σ√(2π))) × e^(-(x-μ)²/(2σ²)). The distribution extends from -∞ to +∞ but is nearly zero beyond ±3σ.`,
//       before:``,
//       after:``,
//     },
    
//     obj4:{
//       title:`Common Applications`,
//       content:`Normal distributions model natural phenomena like human heights and weights, test scores, measurement errors, IQ scores, blood pressure readings, and manufacturing tolerances. In statistics, it's fundamental for hypothesis testing, confidence intervals, regression analysis, and the Central Limit Theorem. Many statistical tests assume normality, making z-tables essential for calculating p-values and critical values.`,
//       before:``,
//       after:``,
//     },

//     obj5:{
//       title:`Z-Score Calculation and Interpretation`,
//       content:`A z-score indicates how many standard deviations a value is from the mean. Positive z-scores are above the mean, negative below. A z-score of 1.96 corresponds to the 97.5th percentile (used for 95% confidence intervals). Z-scores enable comparison across different normal distributions and conversion to percentiles. The table provides precise probabilities for standardized values essential in statistical inference.`,
//       before:``,
//       after:``,
//     }
//   }


//   const introContent = {
//     id: "intro",
//     title: "Standard Normal Distribution Table (Z-Table)",
//     content: `This comprehensive z-table provides cumulative probabilities for the standard normal distribution. Use it to find probabilities, calculate percentiles, determine critical values for hypothesis tests, and convert z-scores to probabilities for statistical analysis and inference.`
//   }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Normal Distribution Table - Z Score Table & Standard Normal | Learn Math Class",
//         description: "Complete standard normal distribution (z-score) table with cumulative probabilities. Find z-values, calculate percentiles, and solve normal probability problems with our comprehensive z-table.",
//         keywords: keyWords.join(", "),
//         url: "/tables/normal-distribution",
//         name: "Normal Distribution Table"
//       },
        
//        }
//     }
//    }

// export default function NormalDistributionTable({seoData, sectionsContent, introContent}) {

    
//   const genericSections=[
//     {
//         id:'what-is',
//         title:'What is the Normal Distribution?',
//         link:'/probability/distributions/continuous#normal',
//         content: sectionsContent.obj1.content
//     },
//     {
//         id:'how-to-read',
//         title:'How to Read the Z-Table',
//         link:'#how-to-read',
//         content: sectionsContent.obj2.content
//     },
//     {
//         id:'properties',
//         title:'Normal Distribution Properties',
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
//         id:'z-score',
//         title:'Z-Score Calculation',
//         link:'#z-score',
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
//           "headline": "Normal Distribution Table - Z Score Table",
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
//    {/* <GenericNavbar/> */}
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     <OperaSidebar 
//            side='right'
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          /> 
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Normal Distribution (Z-Score) Table</h1>
//    <br/>
//     <SectionTableOfContents sections={genericSections}
//     stickyWidth={'250px'}
//     showSecondaryNav={true}
//     secondaryNavMode='siblings'
//     secondaryNavTitle='Other Probability Tables'/>
//    <div style={{width:'80%',margin:'auto'}}>
//    <ZTableContainer/>
//    </div>
//    <br/>
  
//    <br/>
//    <br/>
//    <br/>
//     {/* <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//           backgroundColor='#f9fafb'
//           textColor="#06357a"
//         /> */}
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
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../pages/pages.css'
import Head from 'next/head'
import ZTableContainer from '@/app/components/z-table/ZTableContainer'


export async function getStaticProps(){

  const keyWords=[
    'normal distribution table',
    'z table',
    'z score table',
    'standard normal table',
    'cumulative normal distribution',
    'standard normal distribution',
    'P(Z less than z) table',
    'P(Z greater than z) table',
    'normal probability lookup',
    'gaussian distribution table',
    'bell curve table',
    'z value table',
    'negative z table',
    'positive z table',
    'standard normal CDF table'
  ]

    const sectionsContent={

    obj1:{
      title:`Getting Started with the Table`,
      content:`This page hosts four standard-normal z-tables selected from a dropdown above. The table area is empty until you pick a type.

Quick orientation:
- Use the **Type of Z-table** dropdown to choose between four configurations
- Each table covers $z$-values across one half of the standard-normal range in $0.1$ row increments
- The selected table title appears just above the table once a choice is made
- All four tables refer to the same standard normal distribution with mean $\\mu = 0$ and standard deviation $\\sigma = 1$
- Switching between types reloads the displayed table immediately`,
      before:``,
      after:``,
      link:'',
    },

    obj2:{
      title:`Choosing a Z-Table Type`,
      content:`The dropdown offers four configurations covering the two probability directions and the two halves of the $z$-axis:

- **Cumulative (less than Z) Positive Values** — Gives $P(Z \\leq z)$ for $z$ from $0$ to $4.1$
- **Cumulative (less than Z) Negative Values** — Gives $P(Z \\leq z)$ for $z$ from $-4.0$ to $0$
- **Complementary Cumulative (greater than Z) for Positive Values** — Gives $P(Z > z)$ for $z$ from $0$ to $4.1$
- **Complementary Cumulative (greater than Z) for Negative Values** — Gives $P(Z > z)$ for $z$ from $-4.1$ to $0$

Pick the table that matches the direction of the inequality in your question and the sign of your $z$-value.`,
      before:``,
      after:``,
      link:'',
    },

    obj3:{
      title:`Looking Up a Probability`,
      content:`Standard z-tables organize values by the first decimal of $z$ along the row axis and the second decimal along the columns. To look up $P(Z \\leq 1.96)$ in the cumulative-positive table:
- Locate row $1.9$
- Move across to the column matching the second decimal $6$
- Read the cell value: approximately $0.9750$

The result is the cumulative probability — the area to the left of $z$ under the standard normal curve. For $z$-values not exactly tabulated, interpolate between the two nearest entries or fall back to a calculator for exact precision.`,
      before:``,
      after:``,
      link:'',
    },

    obj4:{
      title:`Working with Negative Z-Values`,
      content:`For negative $z$-values, use the dedicated negative tables rather than computing from the positive tables each time. The **Cumulative Negative Values** table gives $P(Z \\leq -z)$ directly for $z$ from $-4.0$ to $0$.

You can also derive negative-value probabilities from positive ones using the symmetry of the standard normal:

$$P(Z \\leq -z) = 1 - P(Z \\leq z)$$

Both approaches give the same numerical result. The negative table is faster for lookups; the symmetry relation is handy when you only have a positive-value table on hand or want to double-check a value.`,
      before:``,
      after:``,
      link:'',
    },

    obj5:{
      title:`Cumulative vs Complementary Cumulative`,
      content:`The four tables split along two axes — direction of inequality and sign of $z$:

- **Cumulative** ($P(Z \\leq z)$) gives the area to the **left** of $z$
- **Complementary cumulative** ($P(Z > z)$) gives the area to the **right** of $z$

The two are exact complements: $P(Z > z) = 1 - P(Z \\leq z)$. Use cumulative tables for "at most" or "less than" questions, and complementary cumulative tables for "more than" or "exceeds" questions.

For two-sided questions like $P(|Z| < z)$, combine the two: $P(|Z| < z) = 2 \\cdot P(Z \\leq z) - 1$.`,
      before:``,
      after:``,
      link:'',
    },

    obj6:{
      title:`What Is the Standard Normal Distribution?`,
      content:`The **standard normal distribution** is the normal distribution with mean $\\mu = 0$ and standard deviation $\\sigma = 1$. It is symmetric around $0$ with the classic bell shape, and the total area under its density curve is $1$.

Its probability density function is:

$$\\varphi(z) = \\dfrac{1}{\\sqrt{2\\pi}}\\, e^{-z^2/2}$$

and its cumulative distribution function $\\Phi(z) = P(Z \\leq z)$ is exactly what the cumulative z-tables on this page list to four decimal places.

Any normal distribution $N(\\mu, \\sigma^2)$ can be converted to standard normal via the $z$-score transformation, so a single set of standard tables answers questions for every normal distribution.

For a full treatment, see the **normal distribution page**.`,
      before:``,
      after:``,
      link:'',
    },

    obj7:{
      title:`Understanding Z-Scores`,
      content:`A **$z$-score** measures how many standard deviations a value $x$ lies from the mean $\\mu$ of a normal distribution with standard deviation $\\sigma$:

$$z = \\dfrac{x - \\mu}{\\sigma}$$

Positive $z$-scores are above the mean, negative below. A $z$-score of $0$ is exactly at the mean.

Key reference values from the cumulative table:
- $z = 1.00$ gives $P(Z \\leq z) \\approx 0.8413$
- $z = 1.645$ gives $P(Z \\leq z) \\approx 0.9500$ (the $95$th percentile)
- $z = 1.96$ gives $P(Z \\leq z) \\approx 0.9750$ (basis of $95\\%$ confidence intervals)
- $z = 2.33$ gives $P(Z \\leq z) \\approx 0.9901$

For more on standardization, see the **z-score page**.`,
      before:``,
      after:``,
      link:'',
    },

    obj8:{
      title:`The Empirical Rule`,
      content:`For any normal distribution, the **empirical rule** (also called the $68$-$95$-$99.7$ rule) says:

- About $68\\%$ of values lie within $1$ standard deviation of the mean: $\\mu \\pm \\sigma$
- About $95\\%$ lie within $2$ standard deviations: $\\mu \\pm 2\\sigma$
- About $99.7\\%$ lie within $3$ standard deviations: $\\mu \\pm 3\\sigma$

Expressed via $z$-scores: $P(-1 \\leq Z \\leq 1) \\approx 0.68$, $P(-2 \\leq Z \\leq 2) \\approx 0.95$, and $P(-3 \\leq Z \\leq 3) \\approx 0.997$.

Most observed data points fall within $\\pm 3\\sigma$, which is why z-tables typically only need to cover $z$-values up to about $\\pm 4$.

For more, see the **empirical rule page**.`,
      before:``,
      after:``,
      link:'',
    },

    obj9:{
      title:`Common Applications`,
      content:`Z-tables are central to:
- **Hypothesis testing** — Computing $p$-values and critical values for $z$-tests
- **Confidence intervals** — Looking up critical $z$-values like $1.96$ for $95\\%$ confidence
- **Percentile calculations** — Converting a $z$-score to a percentile rank, or vice versa
- **Quality control** — Determining process capability and defect rates from $z$-scores
- **Standardized testing** — Converting raw scores to percentile ranks
- **Risk modeling** — Computing tail probabilities for returns assumed normal

Wherever a continuous variable is well-approximated by a normal distribution and a probability question arises, a z-table gives the answer to four decimal places without computation.`,
      before:``,
      after:``,
      link:'',
    },

    obj10:{
      title:`Related Tables and Tools`,
      content:`**Related Tables:**

**Binomial Distribution Table** - Cumulative binomial probabilities; the binomial converges to a normal distribution for large $n$.

**Poisson Distribution Table** - Cumulative Poisson probabilities; approximated by the normal for large means.

**t Distribution Table** - Critical values for small-sample inference; converges to standard normal as degrees of freedom grow.

**Related Tools:**

**Normal Distribution Calculator** - Returns exact $P(Z \\leq z)$ for any $z$ without lookup or interpolation.

**Z-Score Calculator** - Converts a raw value $x$ to a $z$-score given $\\mu$ and $\\sigma$.

**Related Concepts:**

**Central Limit Theorem** - Why the normal distribution shows up so widely across applied statistics.

**Empirical Rule** - The $68$-$95$-$99.7$ summary of normal-distribution spread.`,
      before:``,
      after:``,
      link:'',
    }

  }


  const introContent = {
    id: "intro",
    title: "Standard Normal Distribution Table (Z-Table)",
    content: ``
  }


  const faqQuestions = {
    obj1: {
      question: "What is a z-table?",
      answer: "A z-table lists probabilities for the standard normal distribution at tabulated z-values. This page provides four such tables: cumulative for positive z, cumulative for negative z, complementary cumulative for positive z, and complementary cumulative for negative z, each accurate to four decimal places."
    },
    obj2: {
      question: "How do I look up a probability in a z-table?",
      answer: "Locate the row matching the first decimal of your z-score, then move across to the column matching the second decimal. The cell value is the probability. For z = 1.96 in the cumulative-positive table, row 1.9 and the column for the second decimal 6 give about 0.9750."
    },
    obj3: {
      question: "What is the difference between cumulative and complementary cumulative?",
      answer: "Cumulative tables give P(Z less than or equal to z), the area to the left of z. Complementary cumulative tables give P(Z greater than z), the area to the right. The two are exact complements: P(Z greater than z) equals 1 minus P(Z less than or equal to z)."
    },
    obj4: {
      question: "How do I find P(Z greater than z) without a complementary table?",
      answer: "Use the relationship P(Z greater than z) equals 1 minus P(Z less than or equal to z). Look up P(Z less than or equal to z) in the cumulative-positive table and subtract from 1. The complementary cumulative tables on this page do that subtraction for you."
    },
    obj5: {
      question: "What is the standard normal distribution?",
      answer: "The standard normal distribution is the normal distribution with mean 0 and standard deviation 1. Its density is symmetric around 0 with the classic bell shape, and the total area under the curve is 1. Any normal distribution can be converted to standard normal using the z-score formula z equals (x minus mu) over sigma."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Normal Distribution Z-Score Table",
      "description": "Four standard-normal z-tables selected from a dropdown: cumulative and complementary cumulative probabilities for positive and negative z-values, accurate to four decimal places.",
      "url": "https://www.learnmathclass.com/tables/normal-distribution",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Four selectable z-table types from a dropdown: cumulative for positive z, cumulative for negative z, complementary cumulative for positive z, and complementary cumulative for negative z",
        "Coverage from z = -4.1 to z = 4.1 in 0.1 row increments across the four tables",
        "Cumulative tables give P(Z less than or equal to z), the area to the left of z under the standard normal curve",
        "Complementary cumulative tables give P(Z greater than z), the area to the right of z",
        "Header above the table updates to show which type is currently displayed",
        "Dropdown selector stays accessible at the top of the page while switching between table types"
      ],
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "learningResourceType": "Reference Table and Interactive Tool",
      "educationalLevel": "High School, College",
      "keywords": keyWords.join(", ")
    },

    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.learnmathclass.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Tables",
          "item": "https://www.learnmathclass.com/tables"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Normal Distribution Table",
          "item": "https://www.learnmathclass.com/tables/normal-distribution"
        }
      ]
    },

    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": Object.keys(faqQuestions).map(key => ({
        "@type": "Question",
        "name": faqQuestions[key].question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faqQuestions[key].answer
        }
      }))
    }
  }


   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
          seoData: {
        title: "Normal Distribution Z-Score Table | Learn Math Class",
        description: "Look up cumulative and complementary cumulative probabilities for the standard normal distribution. Z-tables for positive and negative z-values from -4 to 4.",
        keywords: keyWords.join(", "),
        url: "/tables/normal-distribution",
        name: "Normal Distribution Z-Score Table",
        hubDescription: "Look up standard-normal probabilities four ways from a single dropdown: cumulative P(Z less than or equal to z) for positive z, cumulative for negative z, complementary P(Z greater than z) for positive z, and complementary for negative z. Each table covers z-values from -4.1 to 4.1 in 0.1 row increments.",
        category: "Probability",
        subCategory: ""
      },
        
       }
    }
   }

export default function NormalDistributionTable({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

  const genericSections = Object.keys(sectionsContent).map((key, index) => ({
    id: `${index + 1}`,
    title: sectionsContent[key].title,
    link: sectionsContent[key].link,
    content: [sectionsContent[key].content]
  }))

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
      __html: JSON.stringify(schemas.webApplication)
    }}
  />

  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.breadcrumb)
    }}
  />

  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.faq)
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Normal Distribution (Z-Score) Table</h1>
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