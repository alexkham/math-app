import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../../pages/pages.css'
import Head from 'next/head'
import { processContent } from '@/app/utils/contentProcessor'
import BinomialDistribution from '@/app/components/visualizations/probability/discrete-distribution/BinomialDistributionPMF'
import BinomialDistributionCDF from '@/app/components/visualizations/probability/discrete-distribution/CDFs/BinomialDistributionCDF'


export async function getStaticProps(){

  const keyWords=['','','','','']

  // •

  
// <hr style="border-width:1px;"></hr>

// <hr style="color:blue;" />

// <hr style="border-color:#3498db; border-width:1px;" />



// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@




    const sectionsContent={

    obj1:{
      title:`The Probabilistic Experiment Behind binomial distribution`,
      content:`
      The binomial distribution models the number of successes obtained when the same experiment is repeated a fixed number of times under identical conditions. Each repetition — called a [Bernoulli trial](!/probability/distributions/discrete#bernoulli) — has only two outcomes (success or failure), and the probability of success remains constant across trials. Crucially, the trials are independent.

What distinguishes the binomial distribution is that the number of trials is fixed in advance, and the [random variable](!/probability/random-variables) counts how many successes occur, not when they occur. The order of outcomes does not matter, only the total count does. This makes the binomial distribution a natural model for controlled, repeatable processes.

The binomial distribution captures variability caused by chance alone when conditions are stable. It breaks down if probabilities change from trial to trial, if trials influence each other, or if the number of trials is not predetermined.
     
`,
      before:``,
      after:``,
      link:'',
      example:`
      **Example**:

Flipping a coin $10$ times and counting how many times it lands heads. Each flip is independent, the probability of heads stays the same, and the total number of flips is fixed before starting.
`,
  
  
    },
    obj2:{
      title:`Parameters`,
      content:`
      $𝑛$ : fixed number of independent trials;

$𝑝$ : probability of success in each trial;

This distribution models the number of successes when repeating the same binary experiment $𝑛$ times under identical conditions. The two parameters fully describe the setup: 

$𝑛$ gives the structure — how many attempts, and $𝑝$ defines the behavior of each — what chance success has.

It’s useful to compare with the negative binomial, where instead of fixing how many trials you run, you fix how many successes you want and ask: how many trials will it take? Both deal with repeated binary outcomes, but what’s held constant — trials vs. successes — flips.
      `,
      before:``,
      after:``,
      link:'',
  
    },
  
    obj3:{
  
      title:`Support (Range)`,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj4:{
      title:`Probability Mass Function (PMF) and Support (Range)`,
      content:`
The **probability mass function (PMF)** of a **binomial distribution** is given by:

$$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}, \\quad k = 0, 1, 2, \\ldots, n$$

where $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ is the binomial coefficient.

 **Fixed Number of Trials**: The binomial distribution models the number of successes in $n$ independent trials, where each trial has only two possible outcomes: success or failure.

 **Support (Range of the Random Variable)**:
  * The random variable $X$ can take on values from $0$ to $n$ (inclusive).
  * These represent the possible number of successes: $0, 1, 2, \\ldots, n$.
  * The **support** is thus a finite set of $n+1$ non-negative integers.

 **Logic Behind the Formula**:
  * $\\binom{n}{k}$: The number of ways to choose $k$ successes from $n$ trials
  * $p^k$: The probability of getting exactly $k$ successes
  * $(1-p)^{n-k}$: The probability of getting exactly $n-k$ failures
  * The total probability sums to 1:
  
  $\\sum_{k=0}^{n} P(X = k) = \\sum_{k=0}^{n} \\binom{n}{k} p^k (1-p)^{n-k} = 1$
  
  * This follows from the binomial theorem: $(p + (1-p))^n = 1^n = 1$

      `,
      before:``,
      after:``,
      link:'',
  
    },
    obj5:{
      title:`Cumulative Distribution Function (CDF)`,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj6:{
      title:`Expected Value (mean)`,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj7:{
      title:`Variance and Standard Deviation`,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj8:{
      title:`Mode and Median`,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj9:{
      title:`Moment Generating Function`,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj10:{
      title:`Key Properties`,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj11:{
      title:`Applications and Examples`,
      content:`      
### Practical Example

Suppose you flip a fair coin $n = 5$ times, where the probability of heads (success) is $p = 0.5$. The probability of getting exactly $k = 3$ heads is:

$P(X = 3) = \\binom{5}{3} (0.5)^3 (0.5)^{5-3} = 10 \\cdot 0.125 \\cdot 0.25 = 0.3125$

This means there's a 31.25% chance of getting exactly 3 heads in 5 coin flips.

The possible outcomes range from $k = 0$ (no heads) to $k = 5$ (all heads), with probabilities determined by the formula above.
      `,
      before:``,
      after:``,
      link:'',
  
    },
    obj12:{
      title:`Interactive Calculator`,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj13:{
      title:`Special / Limiting Cases (optional)`,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',
  
    },
    obj14:{
      title:`Related Distributions`,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',
  
    },


    obj15:{
  
      title:`Notation Used`,
      content:`
$X \\sim \\text{Bin}(n, p)$ or $X \\sim \\text{B}(n, p)$ — **distribution of the random variable**.  

$\\text{Binomial}(n, p)$ — **used to denote the distribution itself (not the random variable)**.

$B(n,p)$ — **occasionally used in theoretical or formal contexts (less common)**.

$P(X = k) = \\binom{n}{k} p^k (1 - p)^{n - k}$ — **probability mass function (PMF)**, where:

\t$n$ — number of trials

\t$p$ — probability of success on each trial

\t$k$ — number of successes ($k = 0, 1, 2, \\ldots, n$)

\t$\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ — binomial coefficient

**Alternative notations:**

\t$q = 1 - p$ — probability of failure, so PMF can be written as $P(X = k) = \\binom{n}{k} p^k q^{n-k}$

\t$X \\sim \\text{Binomial}(n, p)$ — more verbose but explicit

**Key properties:**

\t$E[X] = np$ — expected value (mean)

\t$\\text{Var}(X) = np(1-p)$ — variance

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@
     
`,
      before:``,
      after:``,
      link:'',
  
    },
  
    obj16:{
  
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    links:{
      decide:`@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn More About Distinguishing Discrete Distributions](!/probability/distributions/discrete#decide) →@
        `,
        example:`
         @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See More Examples of Binomial Distribution](!/probability/distributions/discrete/binomial#11) →@
            `,
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
  
  }


  const introContent = {
  id: "intro",
  title: "Binomial Distribution: Repeated Trials with Fixed Count",
  content: `
  The binomial distribution arises from repeating the same Bernoulli experiment a fixed number of times under identical conditions. Each trial is independent, each has exactly two outcomes (success or failure), and the probability of success remains constant across trials. The experiment does not ask when success happens, but rather how many successes occur in the predetermined number of trials.
  `
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Discrete Binomial Distribution | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probability/distributions/discrete/binomial",
         name: "name"
      },
        
       }
    }
   }

export default function BinomialDistributionPage({seoData,sectionsContent , introContent}) {

    
  const genericSections=[
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
          sectionsContent.links.decide,
          sectionsContent.obj1.example,
          sectionsContent.links.example,

        ]
    },
     {
        id:'15',
        title:sectionsContent.obj15.title,
        link:sectionsContent.obj15.link,
        content:[

           <div key={'notation-binomial'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
                      {processContent(sectionsContent.obj15.content,)}
                  </div>,
          // sectionsContent.obj15.content,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          // sectionsContent.obj2.content,
            <div key={'parameters-binomial'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
    {processContent( sectionsContent.obj2.content)}
</div>,
        
        ]
    },
    // {
    //     id:'3',
    //     title:sectionsContent.obj3.title,
    //     link:sectionsContent.obj3.link,
    //     content:[
    //       sectionsContent.obj3.content,
    //     ]
    // },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          // sectionsContent.obj4.content,
           <div key={'pmf-binomial'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
                  {processContent(sectionsContent.obj4.content)}
                  </div>,
                  <div key={'binomial-pmf-visualization'} style={{transform:'scale(0.8)'}}>
                  <BinomialDistribution/>
                  </div>
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
           <div key={'binomial-cdf-visualization'} style={{transform:'scale(0.8)'}}>
                  
                  <BinomialDistributionCDF/>
                  </div>
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
        ]
    },
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
        ]
    },
    {
        id:'12',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
        ]
    },
    {
        id:'13',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
        ]
    },
    {
        id:'14',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
        ]
    },
   
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    
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
   {/* <GenericNavbar/> */}
   <br/>
   <br/>
   <br/>
   <br/>
    <OperaSidebar 
           side='right'
           // topOffset='65px' 
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         /> 
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Binomial Distribution</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}/>
   <br/>
   <br/>
   <br/>
    <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        />
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
