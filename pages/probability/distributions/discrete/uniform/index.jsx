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
import DiscreteUniformDistribution from '@/app/components/visualizations/probability/discrete-distribution/DiscreteUniformDistributionPMF'
import DiscreteUniformDistributionCDF from '@/app/components/visualizations/probability/discrete-distribution/CDFs/DiscreteUniformDistributionCDF'


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
      title:`The Probabilistic Experiment Behind Discrete Uniform distribution`,
      content:`
      The discrete uniform distribution represents situations where a random experiment produces outcomes from a finite set, and every outcome is equally likely. There is no preference, weighting, or bias toward any value in the set. The defining feature is not randomness alone, but symmetry: the mechanism that generates outcomes treats all possibilities identically.

This distribution is appropriate when the experiment consists of one selection from a known finite collection and there is no additional structure such as repeated trials, success–failure outcomes, or [dependence](!/probability/independence) between selections. Once the range of possible values is fixed, the distribution is fully determined. There are no hidden dynamics — probability is spread evenly across the entire support.

Due to this simplicity, the discrete uniform distribution often serves as a baseline model. More complex [discrete distributions](!/probability/distributions/discrete) can frequently be understood as deviations from uniformity caused by repetition, conditioning, or structural constraints.

      `,
      before:``,
      after:``,
      link:'',
      example:`
      Example:

Rolling a [fair six-sided die](!/probability/models/dice-roll) once. The possible outcomes are $\{1,2,3,4,5,6\}$, and each value has the same probability. No outcome is favored over another by the mechanism of the experiment.
      `,
  
  
    },
    obj2:{
      title:`Parameters`,
      content:`
  $a$  : the smallest integer in the range  
  
  $b$  : the largest integer in the range

The uniform discrete distribution assigns equal probability to each integer between $a$ and $b$, inclusive. 

The values must be equally spaced and finite in number. 

The parameters define the range — once $a$ and $b$ are set, every integer in that closed interval has probability $\\frac{1}{b - a + 1}$.

This distribution is used when there's no reason to favor any outcome over another — every value is equally likely by design.
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
      The **probability mass function (PMF)** of a **discrete uniform distribution** is given by:

$$P(X = x) = \\frac{1}{b - a + 1} = \\frac{1}{n}, \\quad x \\in \\{x_1, x_2, \\dots, x_n\\}$$

Where :
$a$ = lower bound (integer)
$b$ = upper bound (integer)
$𝑛=b−a+1$ is total number of possible values 

### Intuition Behind the Formula

**Uniformity**: The term "uniform" implies that each outcome is equally likely. That is, no single value of the random variable is preferred over another. This is the key feature of a uniform distribution.

**Support (Range of the Random Variable)**:
  * The random variable $X$ can take on $n = b - a + 1$ distinct values: $x_1, x_2, \\ldots, x_n$.
  * These values could be consecutive integers (like $1, 2, 3, \\ldots, n$) or any set of $n$ distinct values.
  * The **range** or **support** is thus a finite, countable set.

**Logic Behind the Formula**:
 
 The total probability must sum to 1:
  
  $\\sum_{i=1}^n P(X = x_i) = 1$
  
Since all probabilities are equal:
  
  $n \\cdot \\frac{1}{n} = (b - a + 1) \\cdot \\frac{1}{b - a + 1} = 1$
  
  This makes the individual probability of each outcome $\\frac{1}{n} = \\frac{1}{b - a + 1}$.


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
Suppose you roll a fair six-sided die. The possible outcomes are $\\{1, 2, 3, 4, 5, 6\\}$, and the probability of each face is:

$P(X = x) = \\frac{1}{6} = \\frac{1}{6 - 1 + 1}, \\quad x = 1, 2, 3, 4, 5, 6$

Each face has an equal and independent chance of appearing.
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
      $X \\sim \\text{Unif}(a, b)$ or $X \\sim \\text{DU}(a, b)$ — **distribution of the random variable**.

$\\text{DiscreteUniform}(a, b)$ — **used to denote the distribution itself (not the random variable)**.

$\\text{U}(a, b)$ — **also used, though it can refer to either discrete or continuous; context is important**.

$P(X = k) = \\frac{1}{b - a + 1}, \\quad \\text{for } k = a, a+1, \\ldots, b$ — **probability mass function (PMF)**, where:

\t$a$ — minimum value (lower bound)

\t$b$ — maximum value (upper bound)

\t$k$ — any integer in the range $[a, b]$

\t$b - a + 1$ — total number of possible outcomes

**Key properties:**

\t$E[X] = \\frac{a + b}{2}$ — expected value (mean)

\t$\\text{Var}(X) = \\frac{(b - a + 1)^2 - 1}{12}$ — variance

**Special case:**

\t$\\text{DiscreteUniform}(1, n)$ — uniform distribution on $\\{1, 2, \\ldots, n\\}$, often used for fair dice or simple random selection

      
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
         @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See More Examples of Discrete Uniform Distribution](!/probability/distributions/discrete/uniform#11) →@
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
  title: "Discrete Uniform Distribution: Equal-Chance Selection",
  content: `
  The probabilistic experiment behind the discrete uniform distribution is one where a single outcome is selected from a finite set of possibilities, and every outcome is equally likely. There is no notion of success or failure, repetition, or accumulation — only a fair selection from a fixed range. Rolling a fair die or randomly choosing an integer from a known interval are typical examples. The defining feature of this experiment is the absence of bias: no outcome is favored over another.
  `
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Discrete Uniform Distribution | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probability/distributions/discrete/uniform",
         name: "name"
      },
        
       }
    }
   }

export default function DiscreteUniformDistributionPage({seoData,sectionsContent , introContent}) {

    
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

          
    <div key={'notation-uniform'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
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
      <div key={'parameters-uniform'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
                {processContent(sectionsContent.obj2.content,)}
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
           <div key={'pmf-uniform'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
                      {processContent(sectionsContent.obj4.content)}
                  </div>,
          <div key={'uniform-pmf-visualization'} style={{transform:'scale(0.8)'}}>
         
          <DiscreteUniformDistribution/>
          </div>        
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
           <div key={'uniform-pmf-visualization'} style={{transform:'scale(0.8)'}}>
         
         
          <DiscreteUniformDistributionCDF/>
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Discrete Uniform Distribution</h1>
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
