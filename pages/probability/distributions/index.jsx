

import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import TableSplitBreakdown from '@/app/components/breakdowns/2-way-split/TableSplit'
import GenericTable from '@/app/components/generic-table/GenericTable'
import { distributionsDiagramsData } from '@/app/api/db/diagrams/probability/distributions'
import { probabilityFunctionData } from '@/app/api/db/diagrams/probability/probabilityFunction'
import Head from 'next/head'



export async function getStaticProps(){

    const keyWords = [
      'probability distributions',
      'discrete distributions',
      'continuous distributions',
      'binomial distribution',
      'normal distribution',
      'poisson distribution',
      'probability mass function',
      'probability density function',
      'statistical distributions',
      'random variables',
      'probability theory',
      'discrete random variable',
      'continuous random variable',
      'probability models',
      'distribution functions'
    ]
    
    const sectionsContent={
  
      basic:{
        title:`2 Basic Types of Distributions`,
        content:``,
        before:`Probability distributions are mathematical models that quantify how likely different outcomes are when dealing with uncertainty and randomness. These powerful tools allow us to systematically describe and predict the behavior of random phenomena across countless real-world scenarios. They fall into two fundamental categories: [discrete distributions](!/probability/distributions#discrete_dist) deal with countable outcomes (like number of successes, coin flips, or defective items), while [continuous distributions](!/probability/distributions#continuous_dist) handle measurable quantities that can take any value within a range (like height, time, or temperature). The key difference lies in whether you can list all possible outcomes (discrete) or whether outcomes form an unbroken continuum (continuous).

        `,
        between:`
        Within each of these two fundamental categories, distributions are further divided into several groups based on the specific scenarios they model. Discrete distributions branch into various types designed for different counting situations—from equal-probability outcomes to success-trial patterns to rare event modeling. Continuous distributions similarly divide into specialized forms that describe different real-world phenomena, ranging from uniform spreads across intervals to bell-shaped patterns to asymmetric waiting-time behaviors.
       
        `,
        after:`Understanding these distributions is essential for statistical modeling, hypothesis testing, and making predictions about uncertain events. Each distribution has specific scenarios where it naturally applies - choosing the right one depends on the nature of your data and the underlying process generating it. Master these fundamentals, and you'll have the foundation for advanced statistical analysis and data science applications.`,
    
    
      },
      discrete:{
        title:`Discrete Distributions`,
        link:'/probability/distributions/discrete',
        content:``,
        before:`@academic[proof:Reminder:Random Variable is a function that maps each fundamental outcome of a probabilistic experiment to a real number.]@
        **Discrete Random Variable** is a [random variable](!/probability#concepts) whose set of attainable values is either a finite collection or a countably infinite list.
       And finally, the term [discrete distribution](!/probability/distributions/discrete) simply refers to the probability distribution that assigns probabilities to each possible value of a discrete random variable.
       There are six classic discrete distributions—uniform, binomial, geometric, Poisson, negative binomial and hypergeometric—each distinguished by the structure of trials or sampling they model (e.g. fixed number of trials vs. waiting time, constant‐rate events, or draws with/without replacement).  They differ in their support and key parameters—such as the number of trials $n$, success probability $p$, event rate $\\lambda$, target successes $r$, or population size $N$.
       
       
       `,
        after:`
        Understanding which distribution fits a given scenario is key to solving probability problems correctly. Each type has its own signature—whether you're counting successes in a fixed number of trials, waiting for events to happen, or sampling from a limited population. Just as importantly, each distribution comes with ready-made formulas for mean and variance that would be extremely difficult (or impossible) to derive from scratch every time you need them. Recognizing these patterns lets you pick the right tool and set up your calculations with confidence.
        `,
    
      },
    
      continuous:{
    
        title:`Continuous Distributions`,
        link:'/probability/distributions/continuous',
        content:``,
        before:`@academic[proof:Reminder:Random Variable is a function that maps each fundamental outcome of a probabilistic experiment to a real number.]@
       A **Continuous Random Variable** is a random variable that can take on any value within an interval or collection of intervals on the real line—its possible values form an uncountable set. Instead of assigning probabilities to individual points, a continuous distribution uses a **probability density function (PDF)** to describe the relative likelihood of values, with probabilities determined by integrating the density over intervals.
Common continuous distributions include the uniform, normal, exponential, gamma, beta, and chi-square distributions, among others—each characterized by different underlying phenomena they model, such as equal likelihood over an interval, bell-shaped symmetry around a mean, waiting times between events, or distributions arising from transformations of other random variables. They vary in their support (the range of possible values) and the parameters that control their shape and behavior.
        `,
        after:`Identifying the appropriate continuous distribution for a problem is essential for accurate probabilistic modeling and analysis. The key lies in recognizing the underlying structure—whether you're dealing with measurements that cluster symmetrically around a center, modeling time until an event occurs, working with proportions bounded between zero and one, or analyzing variables constructed from other random quantities. Each distribution provides established formulas for expected values, variances, and other properties that capture its essential behavior, sparing you from complex integrations each time. Mastering these characteristic patterns enables you to select the right framework and approach your analysis with clarity.`,
    
      },
      function:{
        title:`Probability Function`,
        content:`In probability theory, every random process is ultimately described by a rule that assigns probabilities to possible outcomes. This rule is known as a probability function. 

      A [probability function](!/probability/probability-function) is the basic rule that assigns probabilities to the outcomes of a random experiment. It translates uncertainty into a precise mathematical structure by specifying how likely each possible value of a random variable is.

This concept exists independently of any named distribution. In simple or irregular situations, the probability function may not follow a standard form, but it still governs how probabilities are assigned. When the underlying rule has a clear, organized pattern, it becomes possible to describe it through familiar distribution families such as Binomial, Poisson, or Normal. In those cases, the probability function takes on specific forms: a probability mass function for discrete variables or a probability density function for continuous variables.

For [discrete random variables](!/probability/distributions#discrete_dist), this rule appears as a probability mass function (PMF), which specifies the probability of each individual value. For [continuous variables](!/probability/distributions#continuous_dist), the rule takes the form of a probability density function (PDF), which describes how probability is distributed across an interval. Although they behave differently, both PMFs and PDFs serve the same fundamental role: they encode the entire structure of the random phenomenon.
`,
        before:``,
        after:`
Understanding probability function patterns is crucial because every distribution (does not matter if discrete or continuous) is based directly on them. If you want to explore how PMFs and PDFs work, how they differ, and why they matter, see the full explanation on the dedicated [Probability Function](!/probability/probability-function) page.`,
        link:'/probability/probability-function'
    
      },
  
  
      what:{
    
        title:`What a Probability Distribution Is`,
        content:`
A probability distribution is a mathematical model that assigns probabilities to the possible values of a [random variable](!/probability/random-variables), thereby encoding the structure of uncertainty associated with a random process. It provides the complete probabilistic characterization of a random phenomenon, specifying not just what outcomes can occur, but how probability is allocated across them.

Formally, given a [probability space](!/probability/sample-space) $(\\Omega, \\mathcal{F}, \\mathbb{P})$ and a [random variable](!/probability/random-variables) $X : \\Omega \\to \\mathbb{R}$, the probability distribution of $X$ is the probability measure induced by $X$ on the measurable subsets of $\\mathbb{R}$, defined by 

$$\\mathbb{P}_X(A) = \\mathbb{P}(X \\in A)$$ 

for all measurable sets $A$. This induced measure encapsulates all probabilistic information about $X$ and serves as the primary object of analysis in statistical inference and probabilistic modeling.

The relationship between [random variable](!/probability/random-variables) and distribution is foundational. A [random variable](!/probability/random-variables) is a function that maps outcomes from the [sample space](!/probability/sample-space) to real numbers—it translates abstract [events](!/probability/events) into measurable quantities. The distribution captures how probability flows through this mapping. While the [random variable](!/probability/random-variables) provides the mechanism for quantification, the distribution describes the probabilistic behavior of those quantities. Two random variables defined on different probability spaces may share the same distribution if they exhibit identical probabilistic structure, making the distribution the essential mathematical object for analysis.

The distribution functions as a model that captures the regularities of randomness in quantitative form. It abstracts from individual realizations and describes the law governing the occurrence of outcomes. Distributions provide the foundation for defining [expectation](!/probability/expected-value), [variance](!/probability/variance), moments, and limit theorems, forming the central organizing concept of probability theory.

`,
        before:``,
        after:``,
    
      },
      notation:{
    
        title:`Useful Notation`,
        content:`
Throughout this page, we use standard probability notation:

- $\\Omega$ — the sample space, the set of all possible outcomes of a random experiment
- $\\mathcal{F}$ — a σ-algebra of events, the collection of measurable subsets of $\\Omega$
- $\\mathbb{P}$ — a probability measure on $(\\Omega, \\mathcal{F})$, assigning probabilities to events
- $X : \\Omega \\to \\mathbb{R}$ — a random variable, a measurable function mapping outcomes to real numbers
- $\\mathbb{P}_X$ — the probability distribution of $X$, the induced measure on $\\mathbb{R}$
- $A$ — a measurable set, typically a subset of $\\mathbb{R}$

The triple $(\\Omega, \\mathcal{F}, \\mathbb{P})$ is called a probability space and provides the foundational structure for all probability theory.

 @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

`,
        before:``,
        after:``,
    
      },
      common:{
    
        title:`What All Distributions Have in Common`,
        content:`
Despite their diversity, all probability distributions share fundamental structural properties.

Every distribution assigns probabilities through a [probability function](!/probability/probability-function)—either a probability mass function (PMF) for discrete variables or a probability density function (PDF) for continuous variables. These functions encode how probability is distributed across the support.

Every distribution has a [cumulative distribution function (CDF)](!/probability/cdf), defined as $F_X(x) = \\mathbb{P}(X \\leq x)$. The CDF completely characterizes the distribution and exists for every random variable, whether discrete or continuous.

The **support** is the set of values where the distribution assigns positive probability or density. It defines what outcomes are possible under the model.

Distributions are determined by **parameters**—numerical constants that specify a particular member of a distribution family. Parameters control location (such as $\\mu$), scale (such as $\\sigma$), or shape.

All distributions have an [expected value (mean)](!/probability/expected-value), provided the integral or sum $\\mathbb{E}[X]$ exists and is finite. 

Similarly, [variance](!/probability/varance) $\\text{Var}(X) = \\mathbb{E}[(X - \\mu)^2]$ measures dispersion when it exists. 

Not all distributions have finite moments—the Cauchy distribution, for instance, has no finite mean.

Distributions can be characterized by **moment generating functions** or **characteristic functions**, which encode all moments when they exist and provide tools for deriving distributional properties.`,
        before:``,
        after:``,
    
      },
      matter:{
    
        title:`Why Distributions Matter`,
        content:`
Probability distributions form the conceptual foundation of quantitative reasoning under uncertainty.

Distributions provide the mathematical framework for **modeling** random phenomena. By identifying the appropriate distribution, we translate real-world randomness into a precise mathematical structure amenable to rigorous analysis. The distribution captures the essential probabilistic behavior of a system while abstracting away irrelevant details.

In **statistical inference**, distributions enable us to draw conclusions from data. Sample statistics follow known distributions, allowing us to estimate population parameters, test hypotheses, and construct confidence intervals. The sampling distribution of estimators derives directly from the underlying probability distributions of the data.

For **prediction**, distributions quantify uncertainty about future outcomes. Rather than producing single-valued forecasts, distributional models provide probabilistic statements—the likelihood of various scenarios, credible intervals, and risk assessments. This probabilistic framework is essential for decision-making under uncertainty.

Distributions bridge probability theory and data science. They connect theoretical probability spaces to empirical observations, enabling the development of statistical methods, machine learning algorithms, and stochastic models. Without distributions, the mathematical treatment of randomness and data analysis as we know it would not exist.`,
        before:``,
        after:``,
    
      },
      cdf:{
    
        title:`Cumulative Distribution Function (CDF)`,
        content:`While the [probability function](!/probability/probability-function) (PMF or PDF) focuses on the likelihood of specific values or densities, the **Cumulative Distribution Function (CDF)** captures the accumulation of probability across the variable's range. The CDF, typically denoted as $F_X(x)$, defines the probability that a [random variable](!/probability/random-variables) $X$ takes a value less than or equal to $x$:

$$F_X(x) = \\mathbb{P}(X \\leq x)$$

This function serves as a complete characterization of any [random variable](!/probability/random-variables), whether [discrete](!/probability/distributions/discrete) or [continuous](!/probability/distributions/continuous). In the discrete case, the CDF forms a step function that increases in jumps at each outcome. In the continuous case, it appears as a smooth, continuous curve that represents the integral of the density function from $-\infty$ to $x$.

The [CDF](!/probability/cdf) is universally applicable and mathematically powerful. It allows us to easily calculate the probability of intervals—simply by taking the difference $F(b) - F(a)$—and is the basis for defining **Quantiles** and **Percentiles**. Because probabilities cannot be negative and total probability must sum to one, every CDF fundamentally starts at 0 (at $-\infty$) and monotonically increases to 1 (at $+\infty$).`,
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


    const distributionsData = {
        basic: {
          title: "Probability Distributions",
          leftTitle: "[Discrete Distributions](!/probability/distributions#discrete_dist)",
          rightTitle: "[Continuous Distributions](!/probability/distributions#continuous_dist)",
          left: [
            "[Discrete Uniform](!/probability/distributions/discrete#uniform):\nEqual probability for finite outcomes",
            "[Binomial](!/probability/distributions/discrete#binomial):\nSuccesses in n trials with probability p each",
            "[Geometric](!/probability/distributions/discrete#geometric):\nTrials until first success (probability p)",
            
            "[Negative Binomial](!/probability/distributions/discrete#negative_binomial):\nTrials until r-th success (generalization of geometric)",
            "[Hypergeometric](!/probability/distributions/discrete#hypergeometric):\nSampling without replacement from finite population",
            "[Poisson](!/probability/distributions/discrete#poisson):\nRare events over time interval (rate λ)",
          ],
          right: [
            "[Uniform](!/probability/distributions/continuous#uniform):\nEqual likelihood over interval [a,b]",
            "[Normal](!/probability/distributions/continuous#normal):\nBell curve with mean μ and variance σ²",
            "[Exponential](!/probability/distributions/continuous#exponential):\nWaiting time between events (rate λ)",
            "**Gamma**:\nWaiting time until k-th event (shape, rate)",
            "**Beta**:\nRandom proportions on [0,1] (shape parameters α,β)",
            "**Chi-Square**:\nSum of squared normal variables (degrees of freedom ν)"
          ]
        }
       };


       const discreteDistributionsTypesData = {
        tableTitle: 'Common Discrete Distributions',
        rows: [
          {
            type: '[Discrete Uniform](!/probability/distributions/discrete#uniform)',
            description: 'Every outcome in a finite set has exactly the same probability—complete symmetry across the support.',
            examples: 'Roll of a fair six-sided die; drawing one card at random from a deck'
          },
          {
            type: '[Binomial](!/probability/distributions/discrete#binomial)',
            description: 'Counts the number of successes in a fixed number $n$ of independent Bernoulli($p$) trials; probability varies with the count of successes.',
            examples: 'Number of heads in 10 coin flips; number of defective items in 20 manufactured parts'
          },
          {
            type: '[Geometric](!/probability/distributions/discrete#geometric)',
            description: 'Measures how many trials are needed until the first success in independent Bernoulli($p$) trials; has the memoryless property.',
            examples: 'Tossing a coin repeatedly until the first head appears; number of attempts before a free-throw is made'
          },
         
          {
            type: '[Negative Binomial](!/probability/distributions/discrete#negative-binomial)',
            description: 'Generalizes the geometric to count trials until the $r$th success in Bernoulli($p$) trials; allows modeling multiple required successes.',
            examples: 'Number of coin tosses until 5 heads occur; calls made until 3 sales are closed'
          },
          {
            type: '[Hypergeometric](!/probability/distributions/discrete#hypergeometric)',
            description: 'Counts successes in a sample drawn without replacement from a finite population; trials are dependent and probabilities change with each draw.',
            examples: 'Drawing 5 cards from a 52-card deck and counting aces; selecting defective items from a batch without replacement'
          },
           {
            type: '[Poisson](!/probability/distributions/discrete#poisson)',
            description: 'Models the count of rare, independent events occurring in a fixed interval at average rate $\\lambda$; arises as a limit of the binomial with small $p$.',
            examples: 'Number of emails received per hour; calls arriving at a call center per minute'
          },
        ]
      };

      const continuousDistributionsTypesData = {
  tableTitle: 'Common Continuous Distributions',
  rows: [
    {
      type: '[Continuous Uniform](!/probability/distributions/continuous#uniform)',
      description: 'Every value in the interval $[a,b]$ has equal probability density—complete symmetry across the support.',
      examples: 'Random angle between 0° and 360°; arrival time uniformly distributed within an hour'
    },
    {
      type: '[Normal (Gaussian)](!/probability/distributions/continuous#normal)',
      description: 'Bell-shaped distribution symmetric around mean $\\mu$ with spread controlled by variance $\\sigma^2$; arises from the Central Limit Theorem.',
      examples: 'Heights of adult humans; measurement errors in scientific instruments; test scores'
    },
    {
      type: '[Exponential](!/probability/distributions/continuous#exponential)',
      description: 'Models the waiting time between independent events occurring at constant rate $\\lambda$; has the memoryless property.',
      examples: 'Time between arrivals at a queue; lifespan of a radioactive particle; time until next phone call'
    },
    {
      type: '[Gamma](!/probability/distributions/continuous#gamma)',
      description: 'Generalizes the exponential to model the waiting time until the $k$th event at rate $\\lambda$; uses shape parameter $k$ and rate parameter $\\lambda$.',
      examples: 'Time until $k$ customers arrive; total rainfall accumulation; time to complete multiple tasks'
    },
    {
      type: '[Beta](!/probability/distributions/continuous#beta)',
      description: 'Models random proportions or probabilities on $[0,1]$ with shape parameters $\\alpha$ and $\\beta$; flexible family for bounded continuous variables.',
      examples: 'Proportion of defective items in a batch; click-through rate; task completion percentage'
    },
    {
      type: '[Chi-Square](!/probability/distributions/continuous#chi-square)',
      description: 'Distribution of the sum of $\\nu$ squared independent standard normal variables; used in hypothesis testing and confidence intervals.',
      examples: 'Goodness-of-fit test statistic; sample variance of normal data; test of independence in contingency tables'
    }
  ]
};

const fundamentalPropertiesData = {
  tableTitle: 'Fundamental Properties and Components of Probability Distributions',
  rows: [
    {
      component: 'Probability Function (PMF/PDF)',
      description: 'Assigns probabilities across the support via mass (discrete) or density (continuous) functions.',
      expression: '$f(x)$',
      scope: 'Discrete (PMF) or Continuous (PDF)',
      role: 'Encodes how probability is distributed across the support.'
    },
    {
      component: 'Cumulative Distribution Function (CDF)',
      description: 'The probability that a random variable is less than or equal to a specific value.',
      expression: '$F_X(x) = P(X \\leq x)$',
      scope: 'Discrete and Continuous',
      role: 'Completely characterizes the distribution.'
    },
    {
      component: 'Support',
      description: 'The set of values where the distribution assigns positive probability or density.',
      expression: '$\\{x \\mid f(x) > 0\\}$',
      scope: 'Discrete and Continuous',
      role: 'Defines possible outcomes under the model.'
    },
    {
      component: 'Parameters',
      description: 'Numerical constants that specify a particular member of a distribution family.',
      expression: '$\\mu, \\sigma$',
      scope: 'Discrete and Continuous',
      role: 'Control location, scale, or shape of the distribution.'
    },
    {
      component: 'Expected Value (Mean)',
      description: 'The long-term average value of the random variable.',
      expression: '$E[X]$',
      scope: 'Discrete and Continuous',
      role: 'Determines the center of the distribution if the sum/integral is finite.'
    },
    {
      component: 'Variance',
      description: 'A measure of the dispersion or spread of the distribution.',
      expression: '$Var(X) = E[(X - \\mu)^2]$',
      scope: 'Discrete and Continuous',
      role: 'Measures dispersion when it exists.'
    },
    {
      component: 'Moment Generating Functions',
      description: 'Functions used to encode all moments and derive distributional properties.',
      expression: '$M_X(t) = E[e^{tX}]$',
      scope: 'Discrete and Continuous',
      role: 'Provides tools for deriving properties and encoding moments.'
    }
  ]
};
      
    
const introContent = {
    id: "intro",
    title: "Modeling Random Phenomena",
    content: `
    Probability is about uncertainty, but uncertainty alone is not enough to work mathematically. To reason, compare, and make predictions, we need a way to describe how uncertainty is structured. Probability distributions provide that structure.

Distributions sit at the core of probability theory and statistics. They organize random behavior into well-defined mathematical forms, allowing different random phenomena to be compared, analyzed, and modeled in a unified way. Whether outcomes are counted or measured, rare or frequent, symmetric or skewed, distributions give probability its shape.

This page serves as a conceptual map of probability distributions. It explains how distributions fit into probability theory, how they relate to random variables, and how the major categories of distributions are organized. Specific distribution families and formulas are explored on their own pages; here, the focus is on the ideas that tie them all together.

    `
  }
  
  
      return {
        props:{
          sectionsContent,
          introContent,
          distributionsData,
          discreteDistributionsTypesData,
          continuousDistributionsTypesData,
          fundamentalPropertiesData,
          seoData: {
            title: "Probability Distributions: Discrete & Continuous | Learn Math Class",
            description: "Comprehensive guide to probability distributions including discrete distributions (binomial, Poisson, geometric) and continuous distributions (normal, exponential, gamma). Learn probability mass functions, density functions, and their real-world applications.",
            keywords: keyWords.join(", "),
            url: "/probability/distributions",
            name: "Probability Distributions"
          },
          
        }
      }
    }
    

export default function DistributionsPage({sectionsContent,introContent,
  distributionsData,discreteDistributionsTypesData,fundamentalPropertiesData,
continuousDistributionsTypesData, seoData}) {
   
    
  const distributionsSections=[

     {
        id:'what',
        title:sectionsContent.what.title,
        link:sectionsContent.what.link,
        content:[
          sectionsContent.what.content,
        ]
    },
     {
        id:'notation',
        title:sectionsContent.notation.title,
        link:sectionsContent.notation.link,
        content:[
          sectionsContent.notation.content,
        ]
    },
     {
        id:'common',
        title:sectionsContent.common.title,
        link:sectionsContent.common.link,
        content:[
          sectionsContent.common.content,
           <GenericTable key={'properties'} tableData={fundamentalPropertiesData} theme='lightBlue'
          cellFontSize={'16px'}
          headerFontSize={'18px'}/>,
          
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
    {
        id:'basic',
        title:sectionsContent.basic.title,
        link:'',
        content:[
          sectionsContent.basic.before,
          <div key={11} style={{
                               textAlign: 'center',
                               transform: 'scale(0.85)',
                               transformOrigin: 'center',
                               marginTop:'-30px'
                             }} dangerouslySetInnerHTML={{ 
                               __html: distributionsDiagramsData['two basic types'].svg 
                             }} />,
                             sectionsContent.basic.between,
          <div style={{transform:'scale(0.9)'}} key={1}>
            <TableSplitBreakdown content={distributionsData.basic} key={1} />
            </div>,
            sectionsContent.basic.after,
        ]
    },
    {
        id:'discrete_dist',
        title:sectionsContent.discrete.title,
        link:sectionsContent.discrete.link,
        content:[
          sectionsContent.discrete.before,
          <GenericTable key={2} tableData={discreteDistributionsTypesData} theme='lightBlue'
          cellFontSize={'16px'}
          headerFontSize={'18px'}/>,
          sectionsContent.discrete.after,
          
        ]
    },
     {
        id:'continuous_dist',
        title:sectionsContent.continuous.title,
        link:sectionsContent.continuous.link,
        content:[
          sectionsContent.continuous.before,
           <GenericTable key={3} tableData={continuousDistributionsTypesData} theme='lightBlue'
          cellFontSize={'16px'}
          headerFontSize={'18px'}/>,
          sectionsContent.continuous.after,

        ]
    },
     {
        id:'function',
        title:sectionsContent.function.title,
        link:sectionsContent.function.link,
        content:[
          sectionsContent.function.content,
           <div key={'function'} style={{
                              textAlign: 'center',
                              transform: 'scale(0.98)',
                              transformOrigin: 'center',
                              marginTop:'50px',
                              marginLeft:'-150px'
                            }} dangerouslySetInnerHTML={{ 
                              __html:   probabilityFunctionData["Probability Function:General Concept"].svg,
                            }} />,

          sectionsContent.function.after,
        ]
    },

     {
        id:'cdf',
        title:sectionsContent.cdf.title,
        link:sectionsContent.cdf.link,
        content:[
          sectionsContent.cdf.content,
        ]
    },

     {
        id:'matter',
        title:sectionsContent.matter.title,
        link:sectionsContent.matter.link,
        content:[
          sectionsContent.matter.content,
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
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={seoData.title} />
  <meta name="twitter:description" content={seoData.description} />
  
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Learn Math Class" />
  
  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Probability Distributions: Discrete and Continuous",
        "name": seoData.name,
        "description": seoData.description,
        "keywords": seoData.keywords,
        "url": `https://www.learnmathclass.com${seoData.url}`,
        "datePublished": new Date().toISOString(),
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "author": {
          "@type": "Organization",
          "name": "Learn Math Class",
          "url": "https://www.learnmathclass.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Learn Math Class",
          "url": "https://www.learnmathclass.com"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://www.learnmathclass.com${seoData.url}`
        },
        "about": [
          {
            "@type": "Thing",
            "name": "Discrete Probability Distributions"
          },
          {
            "@type": "Thing",
            "name": "Continuous Probability Distributions"
          },
          {
            "@type": "Thing",
            "name": "Probability Mass Function"
          },
          {
            "@type": "Thing",
            "name": "Probability Density Function"
          }
        ],
        "educationalLevel": "College",
        "educationalUse": "Learning",
        "teaches": [
          "Understanding discrete and continuous probability distributions",
          "Applying binomial, Poisson, and geometric distributions",
          "Working with normal, exponential, and gamma distributions",
          "Selecting appropriate distribution models for real-world scenarios"
        ]
      })
    }}
  />
  
  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify({
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
            "name": "Probability Distributions",
            "item": `https://www.learnmathclass.com${seoData.url}`
          }
        ]
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
           topOffset='55px' 
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         /> 
   <Breadcrumb/>
   <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Probability Distributions</h1>
   <br/>
   <SectionTableOfContents sections={distributionsSections}
   showSecondaryNav={true}
         secondaryNavMode="siblings"
         secondaryNavTitle="Similar Pages in This Section"/>
   <br/>
   <br/>
   <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
          backgroundColor="#f2f2f2"
          textColor="#06357a"
        />
   <br/>
   <br/>
   <br/>
   <Sections sections={distributionsSections}/>
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