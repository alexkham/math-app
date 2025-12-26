import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../pages/pages.css'
import Head from 'next/head'


export async function getStaticProps(){

   const keyWords = [
  'cumulative distribution function',
  'cdf',
  'cdf in probability',
  'cdf meaning',
  'cdf definition',
  'what is a cdf',
  'cdf of a random variable',
  'P(X ≤ x)',
  'F_X(x)',
  'cumulative probability',
  'cdf properties',
  'right-continuous cdf',
  'non-decreasing cdf',
  'discrete cdf',
  'continuous cdf',
  'mixed distribution cdf',
  'cdf vs pdf',
  'cdf vs pmf',
  'using cdf to calculate probability',
  'interval probability cdf'
];

  

    const sectionsContent={

    from:{
      title:`From Events to Random Variables`,
      content:`
Probability is first defined for events, but many questions involve numerical values rather than yes-or-no outcomes. A random variable connects these two views by assigning a number to each outcome of an experiment.

Once a random variable is defined, statements about its value naturally form events. Expressions like $X \le x$, $X > x$, or $a < X \le b$ describe collections of outcomes and therefore have probabilities attached to them.

The cumulative distribution function is built exactly on this connection. It takes events of the form $X \le x$ and assigns to each value $x$ the probability of that event, linking random variables back to the event-based foundation of probability.
`,
      before:``,
      after:``,
  
  
    },
    definition:{
      title:`CDF Defined (Core Meaning)`,
      content:`
The cumulative distribution function describes how probability is distributed along the values of a random variable. For each possible value, it tells us how much probability has accumulated up to that point.

Instead of asking whether the random variable takes one specific value, the CDF answers a broader question: how likely it is that the value does not exceed a given level. As the value increases, the accumulated probability can only stay the same or grow.

This perspective is what makes the CDF so powerful. It focuses on accumulation rather than individual outcomes, providing a single, consistent way to describe the behavior of a random variable across its entire range.
`,
      before:``,
      after:``,
  
    },
  
    mathematical:{
  
      title:`Mathematical Definition`,
      content:`
Formally, the cumulative distribution function of a random variable $X$ is defined by

$F_X(x) = P(X \\le x)$

For each real number $x$, the CDF assigns the probability that the random variable takes a value less than or equal to $x$. The function $F_X$ maps numbers on the real line to values between 0 and 1.

The choice of “less than or equal to” is not arbitrary. It ensures that the CDF behaves consistently across discrete, continuous, and mixed random variables, allowing a single definition to cover all cases.
`,
      before:``,
      after:``,
  
    },
    properties:{
      title:`Key Properties of the CDF`,
      content:`
The cumulative distribution function obeys several fundamental properties that follow directly from the probability axioms.

- **Values between 0 and 1**  
  For every $x$, the CDF satisfies $0 \\le F_X(x) \\le 1$.

- **Non-decreasing**  
  As $x$ increases, $F_X(x)$ can only stay the same or increase. Accumulated probability never decreases.

- **Right-continuous**  
  The value of the CDF at a point includes the probability at that point, which ensures consistent behavior for jumps in discrete cases.

- **Limits at infinity**  
  As $x \\to -\\infty$, $F_X(x) \\to 0$.  
  As $x \\to +\\infty$, $F_X(x) \\to 1$.

These properties are what distinguish a valid CDF from an arbitrary function and guarantee that it represents a genuine probability distribution.
`,
      before:``,
      after:``,
  
    },
    discrete:{
      title:`Discrete Random Variables`,
      content:`
For a discrete random variable, probability is concentrated at specific values. The CDF reflects this by increasing only at those values and remaining flat everywhere else.

In this case, the CDF is a step function. Each jump corresponds to a value the random variable can take, and the size of the jump equals the probability assigned to that value.

This makes the connection to the probability mass function clear: the PMF determines the jump sizes, while the CDF accumulates those jumps as the value increases. Reading the CDF from left to right shows how probability builds up one possible value at a time.
`,
      before:``,
      after:``,
  
    },
    continuous:{
      title:`Continuous Random Variables`,
      content:`
For a continuous random variable, probability is spread smoothly over intervals rather than concentrated at individual points. As a result, the CDF increases continuously instead of jumping.

In this setting, the CDF describes how probability accumulates as the value grows along the real line. The slope of this accumulation is captured by the probability density function, which indicates how rapidly probability is building at each point.

A key consequence is that a continuous random variable assigns zero probability to any single exact value. Probabilities are obtained only by looking at intervals, and the CDF provides a direct way to compute them.
`,
      before:``,
      after:``,
  
    },
    mixed:{
      title:`Mixed Distributions`,
      content:`
Some random variables do not fit neatly into purely discrete or purely continuous categories. They may assign positive probability to certain specific values while also spreading probability continuously over intervals.

The CDF handles this naturally. It combines flat regions, smooth increases, and sudden jumps within a single function. Jumps represent discrete probability masses, while smooth segments represent continuously distributed probability.

This is one reason the CDF is more general than the PMF or PDF. Even when neither of those fully describes a distribution on its own, the CDF still provides a complete and consistent representation.
`,
      before:``,
      after:``,
  
    },
    using:{
      title:`Using the CDF to Compute Probabilities`,
      content:`
One of the main advantages of the cumulative distribution function is that it allows probabilities to be computed directly from differences of values.

For any two numbers $a < b$, the probability that the random variable lies between them is obtained by subtracting accumulated probabilities:

$P(a < X \\le b) = F_X(b) - F_X(a)$

This works uniformly for discrete, continuous, and mixed random variables. One-sided probabilities are handled just as easily by reading the CDF at a single point.

Because of this, the CDF often simplifies probability calculations by replacing sums or integrals with simple evaluations of a single function.
`,
      before:``,
      after:``,
  
    },
    vs:{
      title:`CDF vs PMF vs PDF`,
      content:`
The CDF, PMF, and PDF describe probability distributions from different perspectives, but they are not interchangeable.

The **CDF** tracks accumulated probability. It tells how much probability lies at or below a given value and always exists for any random variable.

The **PMF** applies only to discrete random variables. It assigns probabilities to individual values, and the CDF is obtained by summing these probabilities up to a point.

The **PDF** applies only to continuous random variables. It describes how densely probability is spread, and the CDF is obtained by accumulating this density over an interval.

Because the CDF works in all cases, it serves as the most general representation of a probability distribution, with the PMF and PDF appearing as special cases derived from it.
`,
      before:``,
      after:``,
  
    },
    visual:{
      title:`Visual Interpretation`,
      content:`
The cumulative distribution function can be understood visually as probability accumulating along the number line.

Starting from the far left, the CDF begins at zero and increases as more possible values are included. In discrete cases, this accumulation appears as upward jumps. In continuous cases, it appears as a smooth rising curve. Mixed distributions show both behaviors together.

Reading the CDF from left to right shows how probability builds up. At any point, the height of the curve represents how much of the total probability lies at or below that value.
`,
      before:``,
      after:``,
  
    },
    mistakes:{
      title:`Common Mistakes`,
      content:`
The cumulative distribution function is often misunderstood because it looks simple but encodes a lot of structure.

A common mistake is confusing the CDF with a density or mass function. The CDF does not describe how much probability sits *at* a point, but how much has accumulated *up to* that point.

Another frequent error is forgetting that the CDF is cumulative. Interpreting its value as a probability of an exact outcome leads to incorrect conclusions, especially in continuous cases.

In discrete distributions, jumps in the CDF are sometimes misread as arbitrary features. Each jump has a precise meaning: its size equals the probability assigned to that value.

Finally, it is easy to forget that every valid CDF must satisfy basic properties such as monotonicity and proper limits. Violating these properties means the function cannot represent a probability distribution.
`,
      before:``,
      after:``,
  
    },
    matters:{
      title:`Why the CDF Matters`,
      content:`
The cumulative distribution function fully characterizes the distribution of a random variable. Knowing the CDF is enough to recover all probability statements about the variable.

It provides a single framework that works for discrete, continuous, and mixed distributions. This makes it a central object in probability theory and a natural bridge between different types of models.

Many important concepts rely directly on the CDF, including quantiles, medians, percentiles, and probability intervals. In both theory and applications, the CDF is often the most convenient way to reason about probabilities.
`,
      before:``,
      after:``,
  
    },
    connections:{
      title:`Connections to Other Probability Concepts`,
      content:`
The CDF ties together several core ideas in probability.

- **Events** appear as statements of the form $X \le x$.  
- **Random variables** provide the numerical structure the CDF describes.  
- **PMF and PDF** are specific ways probability is distributed, both derived from the CDF.  
- **Probability axioms** guarantee the basic properties of the CDF.  
- **Quantiles and percentiles** are defined by inverting the CDF.  
- **Expectation and variance** can be expressed using the CDF.

Through these connections, the CDF serves as a unifying object that links foundational probability concepts with practical calculations.
`,
      before:``,
      after:``,
  
    },
    obj4:{
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
    obj4:{
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
    obj4:{
      title:``,
      content:``,
      before:``,
      after:``,
  
    },


    obj5:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    }
  
  }


  const introContent = {
  id: "intro",
  title: "Accumulating Probability",
  content: `
When working with random variables, we are often not interested in the probability of an exact value, but in how much probability lies **up to** a certain point. Questions like “How likely is the value to be below this threshold?” or “What fraction of outcomes fall to the left of this number?” appear naturally.

The cumulative distribution function captures this idea directly. Instead of focusing on individual outcomes, it tracks how probability accumulates as values increase along the number line. This single object provides a unified way to describe distributions, whether they are discrete, continuous, or a mixture of both.

The sections that follow explain how this accumulation works, how it is defined formally, and why the cumulative distribution function plays a central role in probability theory.
`
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Cumulative Distribution Function (CDF) | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probability/cdf",
         name: "name"
      },
        
       }
    }
   }

export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
  const genericSections=[
    {
        id:'1',
        title:sectionsContent.from.title,
        link:'',
        content:[
            sectionsContent.from.content,
        ]
    },
    {
        id:'definition',
        title:sectionsContent.definition.title,
        link:'',
        content:[
            sectionsContent.definition.content,
        ]
    },
    {
        id:'mathematical',
        title:sectionsContent.mathematical.title,
        link:'',
        content:[
            sectionsContent.mathematical.content,
        ]
    },
    {
        id:'properties',
        title:sectionsContent.properties.title,
        link:'',
        content:[
            sectionsContent.properties.content,
        ]
    },
    {
        id:'discrete',
        title:sectionsContent.discrete.title,
        link:'',
        content:[
            sectionsContent.discrete.content,
        ]
    },
    {
        id:'continuous',
        title:sectionsContent.continuous.title,
        link:'',
        content:[
            sectionsContent.continuous.content,
        ]
    },
    {
        id:'mixed',
        title:sectionsContent.mixed.title,
        link:'',
        content:[
            sectionsContent.mixed.content,
        ]
    },
    {
        id:'using',
        title:sectionsContent.using.title,
        link:'',
        content:[
            sectionsContent.using.content,
        ]
    },
    {
        id:'vs',
        title:sectionsContent.vs.title,
        link:'',
        content:[
            sectionsContent.vs.content,
        ]
    },
    {
        id:'visual',
        title:sectionsContent.visual.title,
        link:'',
        content:[
            sectionsContent.visual.content,
        ]
    },
    {
        id:'mistakes',
        title:sectionsContent.mistakes.title,
        link:'',
        content:[
            sectionsContent.mistakes.content,
        ]
    },
    {
        id:'matters',
        title:sectionsContent.matters.title,
        link:'',
        content:[
            sectionsContent.matters.content,
        ]
    },
    {
        id:'connections',
        title:sectionsContent.connections.title,
        link:'',
        content:[
            sectionsContent.connections.content,
        ]
    },
    // {
    //     id:'',
    //     title:'',
    //     link:'',
    //     content:''
    // },
    // {
    //     id:'',
    //     title:'',
    //     link:'',
    //     content:''
    // },
    // {
    //     id:'',
    //     title:'',
    //     link:'',
    //     content:''
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Cumulative Distribution Function (CDF)</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
    secondaryNavMode="siblings"  // or "siblings"
    secondaryNavTitle="Other Pages in Probability Section" 
   
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
   <Sections sections={genericSections}
   
   />
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}
