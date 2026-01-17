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
import HypergeometricDistribution from '@/app/components/visualizations/probability/discrete-distribution/HypergeometricDistributionPMF'
import HypergeometricDistributionCDF from '@/app/components/visualizations/probability/discrete-distribution/CDFs/HypergeometricDistributionCDF'


export async function getStaticProps(){

  const keyWords=['','','','','']

  // •

  
// <hr style="border-width:1px;"></hr>

// <hr style="color:blue;" />

// <hr style="border-color:#3498db; border-width:1px;" />



// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@




  //   const sectionsContent={

  //   obj1:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  
  //   },
  //   obj2:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  
  //   obj3:{
  
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj4:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj5:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj6:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj7:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj8:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj9:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj10:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj11:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj12:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj13:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  //     link:'',
  
  //   },
  //   obj14:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  //     link:'',
  
  //   },


  //   obj15:{
  
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   }
  
  // }


  
    const sectionsContent={

    obj1:{
      title:`The Probabilistic Experiment Behind hypergeometric distribution`,
      content:`
      The hypergeometric distribution counts the number of successes obtained when sampling without replacement from a finite population. The population contains a fixed number of successes and failures, and each draw permanently alters the composition of the population.

Unlike the [binomial distribution](!/probability/distributions/discrete/binomial), trials are not [independent](!/probability/independence). The probability of success changes after each draw because items are not returned. The number of draws is fixed in advance, and the [random variable](!/probability/random-variables) counts how many successes appear in the sample.

This distribution captures situations where resources are limited or where selection without replacement is intrinsic to the experiment. It reflects dependence between outcomes — a key distinction from trial-based models.
      `,
      before:``,
      after:``,
      link:'',
      example:`
      **Example**:

Drawing $5$ cards from a standard deck without replacement and counting how many are hearts. Each draw changes the probabilities for subsequent draws, because the deck composition changes.
      `,
  
  
    },
    obj2:{
      title:`Parameters`,
      content:`
      $𝑁$: total population size

$𝐾$: number of successes in the population

$𝑛$: number of draws (without replacement), where $𝑛≤𝑁$

The hypergeometric distribution models the number of successes in $𝑛$ draws from a finite population of size $𝑁$ that contains exactly $𝐾$ successes, without replacement. 

Unlike the [binomial distribution](!/probability/distributions/discrete/binomial), where each trial is independent, here each draw changes the probabilities — once an item is drawn, it doesn't go back. This dependency is what defines the distribution’s behavior.
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
      The **probability mass function (PMF)** of a **hypergeometric distribution** is given by:

$$P(X = k) = \\frac{\\binom{K}{k} \\binom{N-K}{n-k}}{\\binom{N}{n}}, \\quad k = \\max(0, n-N+K), \\ldots, \\min(n, K)$$

where $\\binom{a}{b} = \\frac{a!}{b!(a-b)!}$ is the binomial coefficient.


 **Sampling Without Replacement**: The hypergeometric distribution models the number of successes when drawing $n$ items without replacement from a finite population of size $N$ containing exactly $K$ success items.

 **Support (Range of the Random Variable)**:
  * The random variable $X$ can take on values from $\\max(0, n-N+K)$ to $\\min(n, K)$.
  * $X = k$ means exactly $k$ successes are drawn in the sample of size $n$.
  * The lower bound ensures we don't draw more failures than available: $n-k \\leq N-K$
  * The upper bound ensures we don't draw more successes than available: $k \\leq K$ and $k \\leq n$
  * The **support** is thus a finite set of non-negative integers.

 **Logic Behind the Formula**:
  * $\\binom{K}{k}$: The number of ways to choose $k$ successes from $K$ available successes
  * $\\binom{N-K}{n-k}$: The number of ways to choose $n-k$ failures from $N-K$ available failures
  * $\\binom{N}{n}$: The total number of ways to choose $n$ items from $N$ items
  * The total probability sums to 1:
  
  $\\sum_{k=\\max(0,n-N+K)}^{\\min(n,K)} P(X = k) = \\sum_{k=\\max(0,n-N+K)}^{\\min(n,K)} \\frac{\\binom{K}{k} \\binom{N-K}{n-k}}{\\binom{N}{n}} = 1$
  
  * This follows from Vandermonde's identity.
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

Suppose you have a deck of $N = 52$ cards containing $K = 13$ hearts. You draw $n = 5$ cards without replacement. The probability of getting exactly $k = 2$ hearts is:

$$P(X = 2) = \\frac{\\binom{13}{2} \\binom{52-13}{5-2}}{\\binom{52}{5}} = \\frac{\\binom{13}{2} \\binom{39}{3}}{\\binom{52}{5}} = \\frac{78 \\cdot 9139}{2598960} \\approx 0.274$$

This means there's about a 27.4% chance of getting exactly 2 hearts when drawing 5 cards from a standard deck.

Note: When $N$ is very large relative to $n$, the hypergeometric distribution approximates the binomial distribution with $p = \\frac{K}{N}$.
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
      $X \\sim \\text{Hypergeometric}(N, K, n)$ or $X \\sim \\text{Hyp}(N, K, n)$ — **distribution of the random variable**.

$\\text{Hypergeometric}(N, K, n)$ — **used to denote the distribution itself (not the random variable)**.

$\\text{H}(N, K, n)$ — **occasionally used in compact form, especially in software or formulas**.

$P(X = k) = \\frac{\\binom{K}{k} \\binom{N - K}{n - k}}{\\binom{N}{n}}, \\quad \\text{for valid } k$ — **probability mass function (PMF)**, where:

\t$N$ — total population size

\t$K$ — number of success states in the population

\t$n$ — number of draws (sample size) without replacement

\t$k$ — number of observed successes in the sample

\t$\\max(0, n - (N - K)) \\leq k \\leq \\min(n, K)$ — valid range for $k$

\t$\\binom{a}{b} = \\frac{a!}{b!(a-b)!}$ — binomial coefficient

**Key properties:**

\t$E[X] = n \\frac{K}{N}$ — expected value (mean)

\t$\\text{Var}(X) = n \\frac{K}{N} \\frac{N-K}{N} \\frac{N-n}{N-1}$ — variance

**Relationship to binomial distribution:**

\t$\\text{Hypergeometric}(N, K, n) \\approx \\text{Binomial}(n, p)$ where $p = \\frac{K}{N}$, when $N$ is large relative to $n$ (sampling with replacement approximation)
      
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
         @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See More Examples of Hypergeometric Distribution](!/probability/distributions/discrete/hypergeometric#11) →@
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
  title: "Hypergeometric Distribution: Sampling Without Replacement",
  content: `
  The hypergeometric distribution arises from sampling without replacement from a finite population containing two types of items, typically labeled success and failure. A fixed number of draws is made, and the random variable counts how many successes appear in the sample. Because items are not replaced, each draw changes the probabilities of subsequent draws, introducing dependence between trials — the key distinction from the binomial experiment.
  `
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Discrete Hypergeometric Distribution | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probability/distributions/discrete/hypergeometric",
         name: "name"
      },
        
       }
    }
   }

export default function HypergeometricDistributionPage({seoData,sectionsContent , introContent}) {

    
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
          // sectionsContent.obj15.content,
          
      <div key={'notation-hypergeometric'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
                {processContent(sectionsContent.obj15.content,)}
            </div>,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          // sectionsContent.obj2.content,
          
            <div key={'parameters-hypergeometric'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
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
           <div key={'pmf-hypergeometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
                  {processContent(sectionsContent.obj4.content)}
                  </div>,
                  <div key={'hypergeometric-pmf-visualization'} style={{transform:'scale(0.8)'}}>
                  <HypergeometricDistribution/>
                  </div>
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
           <div key={'hypergeometric-cdf-visualization'} style={{transform:'scale(0.8)'}}>
                  
                  <HypergeometricDistributionCDF/>
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Hypergeometric Distribution</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
    secondaryNavMode="siblings"  // or "siblings"
    secondaryNavTitle="Other Discrete Distributions" 
   
   />
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
