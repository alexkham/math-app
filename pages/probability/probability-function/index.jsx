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
  'probability function',
  'pmf', 'pdf',
  'probability mass function',
  'probability density function',
  'how to find probability',
  'probability function examples',
  'discrete probability function',
  'continuous probability function',
  'probability function formula',
  'pmf vs pdf'
];


    const sectionsContent={

    notation:{
      title:`Notation and Symbols`,
      content:`
When we work with probability functions, a few symbols show up again and again.
Here is what they **really** mean in everyday language:

$(X)$ — this is the random variable. Think of it as the “thing that can happen” when you run a random experiment: the number on a die, waiting time, measurement, etc.

 $(x)$ — a particular outcome or value that (X) might take. It’s just one possible result you might see.

 $(p(x))$ — what the probability function looks like in the **discrete** case. It tells you directly: *“What is the chance that the outcome is exactly (x)?”

 $(f(x))$ — what the probability function looks like in the **continuous** case. It’s not the probability of (X = x) (that’s zero for continuous variables). Instead, it shows how “dense” the probability is around that point — where the curve rises or falls.

 $(P(,\\cdot,))$ — our general way to talk about the probability of something happening.
  Whatever we put inside the parentheses describes the event:
  $(P(X=3))$, $(P(X>10))$, $(P(a \\le X \\le b))$, etc.

 $(\\int f(x),dx)$ — the tool we use to get actual probabilities in the continuous case.
  It measures the **area under the curve** over an interval, which *is* the probability for continuous variables.

This is the “language” we use to describe how probabilities behave, whether the outcomes are separate points or part of a continuous range.

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@
      
`,
      before:``,
      after:``,
  
  
    },
    ways:{
      title:`Ways to Figure Out the Probability Function`,
      content:`
A probability function doesn’t appear automatically. There are only a few practical ways we decide what the probabilities (or densities) should be. Almost every situation fits into one of the following approaches.

**1. Using Symmetry (Fair Models)**
Sometimes the setup itself tells us all outcomes are equally likely.
Examples: a fair coin, a fair die, a shuffled deck.
In these cases:
• every outcome gets the same chance
• the probability function spreads probability evenly across all possible values

**2. Using Counting (Combinatorics)**
When outcomes are equally likely but involve structure (drawing balls, cards, forming groups), we use counting.
We figure out the probability function by:
• counting how many outcomes match the condition
• counting how many total outcomes exist
• assigning probabilities using the ratio “favorable / total”

**3. Using a Model (Standard Distributions)**
Many real situations follow known patterns. We use a known distribution instead of deriving everything from scratch.
Examples:
• repeated independent trials → binomial distribution
• waiting times → exponential distribution
• measurement noise → normal distribution
• rare events in time → Poisson distribution

**4. Using Data (Empirical Estimation)**
When we have observations, we estimate the probability function directly from data.
For discrete data:
• count how often each value appears
• divide by the total number of observations
• this gives the empirical PMF

For continuous data:
• build a histogram or use smoothing to approximate the density
• the resulting curve acts as an estimated PDF
`,
      before:``,
      after:``,
  
    },
  
    properties:{
  
      title:`Properties of a Probability Function`,
      content:`
A probability function (whether it is a PMF or a PDF) has to follow a few basic requirements to make sense. These describe what the function itself must look like and how it must behave.

**1. It Cannot Be Negative**
• For discrete variables: p(x) ≥ 0 for all x
• For continuous variables: f(x) ≥ 0 for all x
A probability or density can never go below zero.

**2. It Must Account for All Probability**
• For discrete variables: the sum of p(x) over all possible x equals 1
• For continuous variables: the total area under f(x) over the entire real line equals 1
Together, all possible outcomes must absorb all the probability.

There are other characteristics that can describe how a probability function behaves, but these two are the essential ones. Everything else you’ll ever see—how intervals get probabilities, how events combine, how distributions are shaped—comes from the basic axioms of probability and the conclusions that follow from them. These two conditions are the foundation, and the rest grows naturally from there.
`,
      before:``,
      after:``,
  
    },
    use:{
      title:`How We Use a Probability Function`,
      content:`
Once we know the probability function of a random variable, we can start using it to answer meaningful questions. The probability function is the tool that lets us turn the idea of uncertainty into concrete numbers.

**1. Finding the Probability of an Event**
• For discrete variables, we add up p(x) for the values that belong to the event.
• For continuous variables, we take the area under f(x) over the interval of interest.
This tells us how likely a certain outcome or range of outcomes is.

**2. Understanding the Shape of a Distribution**
• The probability function shows where probability is concentrated.
• It helps us see if values cluster, spread out, or have long tails.
• It tells us whether outcomes tend to be centered around something or scattered widely.

**3. Computing the Expected Value and Variance**
• The expected value uses p(x) or f(x) to find the long-run average outcome.
• The variance shows how much the values tend to vary around that average.
These are key numbers for summarizing the behavior of a random variable.

**4. Making Predictions and Decisions**
• Probability functions help model real processes, such as waiting times, counts, or measurements.
• They let us estimate risks, compare scenarios, and evaluate chances of rare or extreme events.
• They are central to simulations, forecasting, and probability-based decision making.

A probability function is more than a definition — it is the engine behind almost every calculation and interpretation in probability. Once we have it, we can analyze the random variable in a meaningful, quantitative way.
`,
      before:``,
      after:``,
  
    },


    pdf_pmf:{
  
      title:`The Two Forms of a Probability Function`,
      content:`
A probability function comes in two different forms, depending on whether the random variable takes separate values or ranges over a continuum. These two forms behave differently, but both serve the same purpose: they show how probability is spread out.

**1. Probability Mass Function (PMF) — Discrete Case**
The PMF is used when the random variable takes separate, countable values (like 0, 1, 2, 3… or the faces of a die).
• p(x) tells us the probability that X equals the value x.
• Each value gets its own probability.
• All the probability values together must add up to 1.
Examples: number of heads, number of arrivals, rolling a die, drawing a card from a finite deck.

**2. Probability Density Function (PDF) — Continuous Case**
The PDF is used when the random variable ranges over a continuous interval (like measurements, time, distance).
• f(x) is not a probability; it shows how tightly probability is packed around x.
• Actual probabilities come from the area under the curve of f(x).
• The total area under the entire density curve must be 1.
Examples: waiting times, heights, lengths, measurement errors, anything that can take any real value in an interval.

3. How They Relate
• Both PMF and PDF describe where probability is located.
• PMF handles individual points; PDF handles intervals.
• PMF assigns probabilities directly; PDF requires integration to get probabilities.
• They both reflect the same idea: how likely different outcomes are, given the type of random variable we’re working with.

These two forms are simply two versions of the same concept — the probability function — adapted to the nature of the random variable.
`,
      before:``,
      after:``,
  
    },
    connections: {
  title: `Connection to Other Probability Concepts`,
  content: `The probability function does not stand alone. It connects directly to other major ideas in probability, forming the backbone of the entire subject.

**1. Random Variables**
• The probability function describes how a random variable behaves.
• Once we know the PF, we fully understand the variable’s distribution.

**2. Distributions**
• Every probability distribution is built from its probability function.
• The PF tells us how probability is spread out; the distribution summarizes that spread.

**3. The Cumulative Distribution Function (CDF)**
• The CDF adds up probability from negative infinity up to a value.
• It is built directly from the PF:
  – by summing the PMF in the discrete case,
  – by integrating the PDF in the continuous case.

**4. Probability Models**
• A probability model combines:
  – the sample space,
  – the events,
  – and the probability function.
• Without the PF, a probability model cannot assign chances to outcomes.

**5. Real-World Problems**
• Almost every calculation—predicting outcomes, estimating risks, modeling processes—begins with knowing the PF.
• It is the starting point for simulations, decision-making, and statistical inference.

The probability function is not just a definition. It is the link that connects random variables, distributions, cumulative functions, and probability models into one coherent framework.
`
}
,
    obj5:{
  
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
  
    },
    obj5:{
  
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
  
    },
    obj5:{
  
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
  
    },
  
  }


  const introContent = {
  id: "intro",
  title: "Probability Functions: Definition and Purpose",
  content: `
  
  **What Is a Probability Function?**

It is a mathematical relation that describes how probability is distributed over the possible outcomes of a **random variable**.

There are two forms of probability functions:

• **Probability Mass Function (PMF)** for **discrete** random variables, which assigns a probability to each individual value.

• **Probability Density Function (PDF)** for **continuous** random variables, which assigns a density, where probabilities are obtained from the **area under the curve**, not from point values.

In both cases, the probability function tells us **where probability is located** and **how it is spread out** across possible outcomes.

 **Why Do We Need It?**

The probability function is the **starting point** for everything in probability theory.
It connects the outcome of a **random experiment** to the mathematical behavior of a **random variable**, and it is the core ingredient from which **probability distributions** are built.

Through the probability function we can:

• determine how likely specific outcomes or intervals are,
• describe the full **probability distribution** of a random variable,
• model real-world processes such as waiting times, measurements, or counts,
• compute basic numerical characteristics like **expectation**, **variance**, and **quantiles**,
• analyze how probability is concentrated or spread out,
• and interpret the results of repeated **random experiments**.

Every major concept in probability — random variables, distributions, events, outcomes, and long-run behavior — is tied back to the probability function as its foundation.

 **What Questions Does a Probability Function Answer?**

A probability function lets us answer questions such as:

• Which outcomes are more likely?
• What is the probability that the variable falls within a given range?
• How is probability distributed across possible values?
• What does the random variable “look like” in terms of behavior and likelihood?
`
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Title | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probability/probability-function",
         name: "name"
      },
        
       }
    }
   }

export default function ProbabilityFunctionPage({seoData,sectionsContent , introContent}) {

    
  const genericSections=[
    {
        id:'notation',
        title:sectionsContent.notation.title,
        link:'',
        content:[
          sectionsContent.notation.content,
        ]
    },
    {
        id:'ways',
        title:sectionsContent.ways.title,
        link:'',
        content:[
          sectionsContent.ways.content
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
        id:'use',
        title:sectionsContent.use.title,
        link:'',
        content:[
          sectionsContent.use.content,
        ]
    },
    {
        id:'pdf_pmf',
        title:sectionsContent.pdf_pmf.title,
        link:'',
        content:[
          sectionsContent.pdf_pmf.content,
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
   <GenericNavbar/>
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Probability Function</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
     showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "siblings"
         secondaryNavTitle="More in Probability Section"/>
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
   <ScrollUpButton/>
   </>
  )
}
