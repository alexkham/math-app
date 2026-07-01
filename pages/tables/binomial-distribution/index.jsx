// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../../../pages/pages.css'
// import Head from 'next/head'
// import BinomialCumulativeTable from '@/app/components/probability/tables/BinomialCumulativeTable'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// export async function getStaticProps(){

//   const keyWords=['binomial distribution table', 'binomial probability table', 'cumulative binomial distribution',
//     'binomial distribution calculator', 'binomial probability', 'discrete probability distribution',
//     'n choose k', 'success probability', 'bernoulli trials', 'binomial coefficients',
//     'P(X ≤ x)', 'P(X = k)', 'binomial cumulative probability', 'binomial pmf',
//     'statistical tables', 'probability mass function']

//     const sectionsContent={

//     obj1:{
//       title:`What is a Binomial Distribution?`,
//       content:`The binomial distribution is a discrete probability distribution that models the number of successes in a fixed number of independent trials, where each trial has only two possible outcomes (success or failure) and the probability of success remains constant across all trials. It's defined by two parameters: n (number of trials) and p (probability of success).`,
//       before:``,
//       after:``,
//     },
    
//     obj2:{
//       title:`How to Read the Binomial Distribution Table`,
//       content:`The table displays cumulative probabilities P(X ≤ k) for various combinations of n (number of trials), k (number of successes), and p (probability of success). To find the probability of exactly k successes, calculate P(X = k) = P(X ≤ k) - P(X ≤ k-1). For probabilities with p > 0.5, use the complement: P(X ≤ k) when p' = 1-p equals P(X ≥ n-k) for the original p.`,
//       before:``,
//       after:``,
//     },
  
//     obj3:{
//       title:`Binomial Distribution Formula`,
//       content:`The probability mass function is P(X = k) = C(n,k) × p^k × (1-p)^(n-k), where C(n,k) = n!/(k!(n-k)!) is the binomial coefficient. The mean (expected value) is μ = np, variance is σ² = np(1-p), and standard deviation is σ = √(np(1-p)). These formulas allow you to calculate exact probabilities when tables don't cover your specific parameters.`,
//       before:``,
//       after:``,
//     },
    
//     obj4:{
//       title:`Common Applications`,
//       content:`Binomial distributions appear in quality control (defective items in a sample), medical trials (number of patients responding to treatment), sports statistics (number of successful free throws), survey analysis (number of respondents agreeing), genetics (inheritance patterns), and A/B testing (conversion rates). Any scenario with fixed independent trials and binary outcomes follows this distribution.`,
//       before:``,
//       after:``,
//     },

//     obj5:{
//       title:`Properties and Characteristics`,
//       content:`The binomial distribution is symmetric when p = 0.5, right-skewed when p < 0.5, and left-skewed when p > 0.5. As n increases, it approximates the normal distribution (especially when np ≥ 5 and n(1-p) ≥ 5). The sum of probabilities across all possible values equals 1. Maximum probability occurs near the mean μ = np.`,
//       before:``,
//       after:``,
//     }
//   }


//   const introContent = {
//     id: "intro",
//     title: "Binomial Distribution Table",
//     content: `This comprehensive binomial distribution table provides cumulative probabilities for various parameter combinations. Use it to quickly find probabilities without manual calculation, verify your computational results, or solve problems involving discrete binary outcomes across multiple independent trials.`
//   }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Binomial Distribution Table - Cumulative Probability Tables | Learn Math Class",
//         description: "Comprehensive binomial distribution tables with cumulative probabilities for n trials and probability p. Includes formulas, examples, and how to read binomial probability tables for statistical analysis.",
//         keywords: keyWords.join(", "),
//         url: "/tables/binomial-distribution",
//         name: "Binomial Distribution Table"
//       },
        
//        }
//     }
//    }

// export default function BinomialDistributionTablePage({seoData, sectionsContent, introContent}) {

    
//   const genericSections=[
//     {
//         id:'what-is',
//         title:'What is a Binomial Distribution?',
//         link:'#what-is',
//         content: sectionsContent.obj1.content
//     },
//     {
//         id:'how-to-read',
//         title:'How to Read the Table',
//         link:'#how-to-read',
//         content: sectionsContent.obj2.content
//     },
//     {
//         id:'formula',
//         title:'Binomial Distribution Formula',
//         link:'#formula',
//         content: sectionsContent.obj3.content
//     },
//     {
//         id:'applications',
//         title:'Common Applications',
//         link:'#applications',
//         content: sectionsContent.obj4.content
//     },
//     {
//         id:'properties',
//         title:'Properties and Characteristics',
//         link:'#properties',
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
//           "headline": "Binomial Distribution Table - Cumulative Probability Tables",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Binomial Distribution Table</h1>
//    <br/>
//    <SectionTableOfContents sections={genericSections}  stickyWidth={'180px'} 
//    showSecondaryNav={true}
//    secondaryNavMode='siblings'
//    secondaryNavTitle='Other Probability Tables'
   
//    />
  
  
//    <div style={{marginLeft:'130px'}}>
//    <BinomialCumulativeTable/>
//    </div>
//    <br/>
//    {/* <SectionTableOfContents sections={genericSections}/> */}
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
import BinomialCumulativeTable from '@/app/components/probability/tables/BinomialCumulativeTable'


export async function getStaticProps(){

  const keyWords=[
    'binomial distribution table',
    'binomial probability table',
    'cumulative binomial table',
    'binomial PMF table',
    'P(X = x) binomial',
    'P(X less or equal x) binomial',
    'P(X greater or equal x) binomial',
    'binomial probability lookup',
    'n trials k successes table',
    'success probability p table',
    'binomial coefficient table',
    'bernoulli trials table',
    'discrete probability distribution table',
    'binomial statistical table',
    'n up to 50 binomial table'
  ]

  const sectionsContent={

    obj1:{
      title:`Getting Started with the Table`,
      content:`The table lists binomial probabilities for every combination of $n$ from $1$ to $50$, $x$ from $0$ to $n$, and $28$ standard values of $p$ ranging from $0.01$ to $0.99$.

Quick orientation:
- The leftmost frozen column shows $n$ (number of trials), appearing once per group
- The second frozen column shows $x$ (number of successes), one row per value
- Each remaining column is a fixed probability $p$ shown in the header
- Cells display the probability rounded to four decimal places; hover for six-decimal detail

The three buttons above the table switch which probability the cells show: exact, left-cumulative, or right-cumulative. Use the search form to jump directly to a specific $(n, x, p)$ cell.`,
      before:``,
      after:``,
      link:'',
    },

    obj2:{
      title:`Switching Between Probability Types`,
      content:`Three buttons at the top control what every cell in the table represents:
- **P(X = x)** shows the probability of **exactly** $x$ successes in $n$ trials
- **P(X &le; x)** shows the **left-cumulative** probability of at most $x$ successes
- **P(X &ge; x)** shows the **right-cumulative** probability of at least $x$ successes

The active mode is highlighted in blue, and the formula label plus its description appear in the info panel just below the buttons.

Use **P(X = x)** when a problem asks for a single specific count, **P(X &le; x)** for "no more than" questions, and **P(X &ge; x)** for "at least" questions. Switching modes clears any active search highlight so the next lookup applies to the new probability type.`,
      before:``,
      after:``,
      link:'',
    },

    obj3:{
      title:`Searching for a Specific Probability`,
      content:`The search form locates the exact cell for the parameters you enter:
- **n** accepts integers from $1$ to $50$
- **x** accepts integers from $0$ to $n$ (validated against your entered $n$)
- **p** accepts decimals from $0$ to $1$

Click **Find Probability** to run the search. The matching cell is highlighted in orange and the page scrolls smoothly to center it.

If your $p$ value does not match one of the $28$ tabulated columns exactly, the table snaps to the closest available $p$ and shows a notice listing the value used (for example, entering $0.27$ snaps to $0.25$). Invalid inputs surface an inline red error explaining what to fix. Click **Clear All** to reset every field and remove the highlight.`,
      before:``,
      after:``,
      link:'',
    },

    obj4:{
      title:`Reading Cells and Tooltips`,
      content:`Each cell shows a four-decimal probability. Hover over any cell to reveal a tooltip with:
- The probability label for the active mode (one of $P(X = x)$, $P(X \\leq x)$, $P(X \\geq x)$)
- The full six-decimal probability value
- The exact $n$, $x$, and $p$ associated with that cell

Row formatting helps scanning:
- Each new $n$ group starts with a thicker top border
- The $n$ column only displays its label on the first row of each group
- The $n$ and $x$ columns stay frozen on the left as you scroll horizontally through the $p$ columns
- The header row stays frozen on top as you scroll down through the trial counts`,
      before:``,
      after:``,
      link:'',
    },

    obj5:{
      title:`Choosing the Right Probability Mode`,
      content:`Translate the question first, then pick the mode:
- "Exactly $k$ successes" &rarr; use **P(X = x)** with $x = k$
- "At most $k$" or "$k$ or fewer" or "no more than $k$" &rarr; use **P(X &le; x)** with $x = k$
- "At least $k$" or "$k$ or more" &rarr; use **P(X &ge; x)** with $x = k$
- "Fewer than $k$" &rarr; use **P(X &le; x)** with $x = k - 1$
- "More than $k$" &rarr; use **P(X &ge; x)** with $x = k + 1$
- "Between $a$ and $b$ inclusive" &rarr; use **P(X &le; x)** at $x = b$ minus **P(X &le; x)** at $x = a - 1$

Two facts that often shortcut a lookup: $P(X = x) = P(X \\leq x) - P(X \\leq x - 1)$, and $P(X \\geq x) = 1 - P(X \\leq x - 1)$.`,
      before:``,
      after:``,
      link:'',
    },

    obj6:{
      title:`What Is the Binomial Distribution?`,
      content:`The **binomial distribution** models the number of successes $X$ in a fixed sequence of $n$ independent trials, where each trial has the same success probability $p$ and only two possible outcomes (success or failure).

A scenario qualifies as binomial when four conditions hold simultaneously: a fixed number of trials, two outcomes per trial, a constant success probability, and independence between trials. Coin flips, fixed-size quality samples, and a series of free throws at a fixed shooter all fit naturally.

The random variable $X$ takes integer values from $0$ to $n$, and its distribution depends only on the pair $(n, p)$.

For a fuller treatment, see the **binomial distribution theory page**.`,
      before:``,
      after:``,
      link:'',
    },

    obj7:{
      title:`Binomial Probability Formula`,
      content:`The probability mass function of a binomial random variable is:

$$P(X = x) = \\binom{n}{x} p^x (1 - p)^{n - x}$$

where $\\binom{n}{x} = \\dfrac{n!}{x!(n - x)!}$ is the binomial coefficient.

The cumulative forms are sums of the PMF:

$$P(X \\leq x) = \\sum_{i=0}^{x} \\binom{n}{i} p^i (1 - p)^{n - i}$$

$$P(X \\geq x) = \\sum_{i=x}^{n} \\binom{n}{i} p^i (1 - p)^{n - i}$$

The mean is $\\mu = np$, the variance is $\\sigma^2 = np(1 - p)$, and the standard deviation is $\\sigma = \\sqrt{np(1 - p)}$.

For derivations and worked examples, see the **binomial PMF page**.`,
      before:``,
      after:``,
      link:'',
    },

    obj8:{
      title:`Symmetry and the Complement Trick`,
      content:`The binomial distribution is symmetric when $p = 0.5$, right-skewed when $p < 0.5$, and left-skewed when $p > 0.5$.

A useful symmetry relation lets you reuse the table when $p$ is large:

$$P_{n, p}(X = x) = P_{n, 1 - p}(X = n - x)$$

For cumulative forms:

$$P_{n, p}(X \\leq x) = P_{n, 1 - p}(X \\geq n - x) = 1 - P_{n, 1 - p}(X \\leq n - x - 1)$$

In practice, this means a value at $(n, x, p)$ can be looked up at $(n, n - x, 1 - p)$ — useful when one side of the table is sparser for your problem.`,
      before:``,
      after:``,
      link:'',
    },

    obj9:{
      title:`Common Applications`,
      content:`Binomial probabilities apply whenever the four binomial conditions hold. Common settings:
- **Quality control** — defective items in a fixed-size sample from a production line
- **Clinical trials** — number of patients responding to a treatment among a fixed cohort
- **Survey analysis** — number of respondents giving a specific answer in a fixed-size survey
- **A/B testing** — number of conversions among a fixed visitor count
- **Genetics** — number of offspring inheriting a trait under Mendelian assumptions
- **Sports statistics** — number of successful attempts in a fixed series of trials

For these and similar problems the table answers a single lookup faster than recomputing the formula by hand.`,
      before:``,
      after:``,
      link:'',
    },

    obj10:{
      title:`Related Tables and Tools`,
      content:`**Related Tables:**

**Normal Distribution Table** - Standard normal cumulative probabilities; useful when $n$ is large and the normal approximation to the binomial applies.

**Poisson Distribution Table** - Cumulative Poisson probabilities; useful when $n$ is large and $p$ is small, so $np$ stays moderate.

**t Distribution Table** - Critical values for small-sample inference.

**Related Tools:**

**Binomial Distribution Calculator** - Returns exact probabilities for any $(n, x, p)$ without snapping to a tabulated $p$.

**Binomial Distribution Visualizer** - Shows the PMF and CDF as bar charts that update as $n$ and $p$ change.

**Related Concepts:**

**Bernoulli Trials** - The single-trial building block of the binomial.

**Binomial Coefficient** - The combinatorial count $\\binom{n}{x}$.

**Expected Value and Variance** - The summary statistics $np$ and $np(1 - p)$.`,
      before:``,
      after:``,
      link:'',
    }

  }

  const faqQuestions = {
    obj1: {
      question: "What does the binomial distribution table show?",
      answer: "The table shows binomial probabilities for every combination of n from 1 to 50, x from 0 to n, and 28 standard p values from 0.01 to 0.99. Three buttons switch the displayed probability between P(X = x), P(X less than or equal to x), and P(X greater than or equal to x)."
    },
    obj2: {
      question: "How do I find a specific binomial probability in the table?",
      answer: "Enter the number of trials n, the number of successes x, and the success probability p into the search form, then click Find Probability. The matching cell is highlighted and the page scrolls to center it. If p does not match a tabulated column, the table snaps to the closest available p."
    },
    obj3: {
      question: "What is the difference between P(X = x) and P(X less than or equal to x)?",
      answer: "P(X = x) is the probability of exactly x successes in n trials. P(X less than or equal to x) is the left-cumulative probability of at most x successes, equal to the sum of P(X = 0) through P(X = x). The table switches between these modes with the buttons above it."
    },
    obj4: {
      question: "When should I use the binomial distribution?",
      answer: "Use the binomial distribution when an experiment has a fixed number of independent trials, each with only two outcomes (success or failure) and the same success probability p. Quality control, clinical trials, A/B testing, and Bernoulli sequences all fit this pattern."
    },
    obj5: {
      question: "What if my p value is not in the table?",
      answer: "The search form snaps to the nearest tabulated p among the 28 standard values and displays a notice with the value used. For an exact result at an arbitrary p, use the binomial distribution calculator instead of the table."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Binomial Distribution Table",
      "description": "Interactive binomial probability table covering n from 1 to 50 and 28 standard p values, with exact, left-cumulative, and right-cumulative probability modes.",
      "url": "https://www.learnmathclass.com/tables/binomial-distribution",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Binomial probabilities for n from 1 to 50 and 28 standard p values from 0.01 to 0.99",
        "Three probability modes: P(X = x), P(X less than or equal to x), and P(X greater than or equal to x)",
        "Search form that highlights the cell matching entered n, x, and p",
        "Snap-to-nearest column behavior when p is not tabulated, with notice of the value used",
        "Frozen n and x columns and a sticky header for unobstructed scanning",
        "Hover tooltips showing six-decimal probabilities and the full parameter triple",
        "Input validation with inline error messages for out-of-range values"
      ],
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "learningResourceType": "Interactive Tool",
      "educationalLevel": "High School, College",
      "keywords": "binomial distribution table, binomial probability table, cumulative binomial table, binomial PMF table, P(X = x) binomial, P(X less or equal x) binomial, P(X greater or equal x) binomial, binomial probability lookup, n trials k successes table, success probability p table, binomial coefficient table, bernoulli trials table, discrete probability distribution table, binomial statistical table, n up to 50 binomial table"
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
          "name": "Probability",
          "item": "https://www.learnmathclass.com/probability"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Tables",
          "item": "https://www.learnmathclass.com/probability/tables"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Binomial Distribution Table",
          "item": "https://www.learnmathclass.com/probability/tables/binomial-distribution"
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
      faqQuestions,
      schemas,
      seoData: {
        title: "Binomial Distribution Table - Cumulative & Exact | Learn Math Class",
        description: "Look up binomial probabilities for n up to 50 and 28 standard p values. Switch between P(X = x), P(X less or equal x), and P(X greater or equal x) modes.",
        keywords: keyWords.join(", "),
        url: "/tables/binomial-distribution",
        name: "Binomial Distribution Table",
        hubDescription: "Look up binomial probabilities for every n from 1 to 50, every x from 0 to n, and 28 standard p values from 0.01 to 0.99. Switch between exact P(X = x), left-cumulative P(X less or equal x), and right-cumulative P(X greater or equal x) with one click, or search a specific (n, x, p) cell directly.",
        category: "Probability",
        subCategory: ""
      },
    }
  }
}

export default function BinomialDistributionTablePage({seoData, sectionsContent, faqQuestions, schemas}) {

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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Binomial Distribution Table</h1>
   <br/>
    <div style={{marginLeft:'130px'}}>
   <BinomialCumulativeTable/>
   </div>
   <br/>
     <SectionTableOfContents sections={genericSections}  stickyWidth={'250px'}
   showSecondaryNav={true}
   secondaryNavMode='siblings'
   secondaryNavTitle='Other Probability Tables'

   />
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