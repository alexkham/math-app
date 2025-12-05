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
  // Primary
  'joint probability',
  'joint distribution',
  'joint probability table',
  'contingency table probability',
  'joint probability formula',
  'probability of two events together',
  'joint pmf',
  'joint pdf',

  // Secondary
  'marginal probability',
  'conditional probability',
  'independence of random variables',
  'dependence between variables',
  'bivariate distribution',
  'joint cumulative distribution',
  'joint density function',
  'probability combinations',
  'multivariate probability',

  // Long-tail
  'how to calculate joint probability',
  'joint probability explained simply',
  'joint probability with table example',
  'joint probability discrete case',
  'joint probability continuous case',
  'joint distribution interpretation',
  'probability of multiple outcomes at once',
  'difference between joint and conditional probability',

  // Question keywords (PAA)
  'what is joint probability',
  'how do you compute joint probability',
  'what is a joint probability table',
  'how do you find marginal probability from a table',
  'how do you know if variables are independent',
  'what does joint distribution mean'
];


    const sectionsContent={

    definition:{
      title:`Definition and Meaning of Joint Probability`,
      content:`
Joint probability measures the likelihood that two or more events occur simultaneously and that multiple random variables take specific values at the same time.

This estimates the likelihood of **combinations rather than isolated outcomes**. When we ask “what is the chance that both A happens and B happens together,” we are asking about joint probability. It shows how different outcomes **line up within the same situation** and how they naturally occur **side by side**.

Joint probability also captures how **random quantities behave together**, whether their outcomes **depend on each other or not**, and how their joint behavior forms patterns that cannot be seen by looking at each variable alone. This is the point where **dependence and independence start to show up**: joint probability reveals whether outcomes tend to move together, avoid each other, or behave completely separately.

In simple terms, it is a way to look at **the whole outcome**, and it is the first place where **any kind of relationship** between variables becomes visible.

`,
      before:``,
      after:``,
  
  
    },
    notation:{
      title:`Useful Notation`,
      content:`
Before working with joint probability formulas, we establish the standard notation:

- $X, Y, Z$ — random variables
- $P(X=x, Y=y)$ or $P(x,y)$ — joint probability mass function (discrete)
- $f(x,y)$ or $f_{X,Y}(x,y)$ — joint probability density function (continuous)
- $P(A \\cap B)$ — probability of events $A$ and $B$ both occurring
- $(x,y)$ — a point in the joint sample space
- $\\mathbb{R}^2, \\mathbb{R}^n$ — multidimensional spaces

These symbols appear consistently throughout joint probability calculations and provide a compact way to express relationships between multiple random variables.


@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

`,
      before:``,
      after:``,
  
    },
  
    tables:{
  
      title:`Contingency Tables (Joint Probability Tables)`,
      content:`
A contingency table is a simple way to organize joint probabilities for discrete variables. One variable forms the rows, the other forms the columns, and each cell shows the likelihood of the two outcomes occurring together.

The table displays the **entire joint distribution at once**, making it easy to see which combinations are more likely, which are rare, and how the variables behave side by side.

- **Rows** represent the possible values of one variable  
- **Columns** represent the values of the other  
- **Cells** contain the joint probabilities for each pair of outcomes  
- **All cell values together must sum to 1**  
- **Patterns in the table** often hint at dependence or independence  

A small table illustrates the idea:

|        | \(y_1\) | \(y_2\) |
|--------|--------|--------|
| \(x_1\) | \(P(x_1, y_1)\) | \(P(x_1, y_2)\) |
| \(x_2\) | \(P(x_2, y_1)\) | \(P(x_2, y_2)\) |

This layout makes it easy to read, compare, and analyze how outcomes **pair up** across the two variables.
`,
      before:``,
      after:``,
  
    },
    calculate:{
      title:`Ways to Calculate Joint Probability`,
      content:`
Joint probability does not rely on a single formula. How we compute it depends on the situation, the type of variables, and the information available. Here are the general ways it is actually done.

**1. Direct reasoning from the situation.**  
Sometimes we do not start with tables, formulas, or densities. We simply look at the scenario and ask how many combined outcomes are possible and how many of them satisfy the conditions we care about.  
If all outcomes are equally likely, joint probability can be found by counting the favourable combined outcomes and dividing by the total number of combined outcomes.  
This is the most basic way to calculate joint probability and often the first step before any formal tool is introduced.

**2. Using tables (discrete variables).**  
When outcomes are discrete, we often organize all combinations into a contingency table.  
Each cell shows the likelihood of a specific pair of values, and probabilities for larger sets are found by adding the relevant cells.  
Tables make joint behaviour easy to read and compare.

**3. Using densities (continuous variables).**  
For continuous variables, we compute joint probability by integrating the joint density over the region of interest.  
This replaces the idea of adding cell values with measuring how probability mass is spread over an area.

**4. Using the joint CDF.**  
Sometimes we use the joint cumulative distribution function, which gives the probability that both variables fall within certain ranges.  
Joint probabilities for rectangles or regions can be found by evaluating or combining CDF values.

**5. Applying probability rules to combined conditions.**  
In both discrete and continuous settings, joint probability is obtained by applying the appropriate rules—adding probabilities for unions, integrating or summing over regions, or combining conditions that involve more than one variable.

In short, joint probability is calculated by reasoning about the combined outcomes and then using the tool that matches the type of variables involved—whether pure logic, tables, densities, or cumulative functions.
`,
      before:``,
      after:``,
  
    },
    marginal:{
      title:`Marginal Probabilities`,
      content:`
Marginal probabilities describe the likelihood of each variable on its own, after we set aside the combined outcomes. They are obtained from the joint distribution by “collecting” all probabilities that correspond to a particular value of one variable.

**From a table (discrete variables).**  
In a contingency table, marginals appear naturally as the row totals and column totals.  
• Row totals give the probabilities for the values of one variable.  
• Column totals give the probabilities for the values of the other.  
They represent the standalone behaviour of each variable, separated from the combinations.

**From a density (continuous variables).**  
For continuous variables, marginal probabilities (densities) are obtained by integrating the joint density over the other variable.  
This gathers all the mass that belongs to a specific value or range of one variable.

**Why marginals matter.**  
They show how each variable behaves individually, without the influence of the other. But they also lose information: once we collapse the joint structure, any patterns of dependence disappear. Joint behaviour is richer; marginals are only the isolated pieces.

Marginals form the bridge between the full joint picture and the behaviour of each variable on its own.
`,
      before:``,
      after:``,
  
    },
    independence:{
      title:`Independence in Joint Probability`,
      content:`
Two variables are independent when knowing the value of one tells us nothing about the other. In terms of joint probability, this means that the likelihood of their combined outcome is just the product of their individual probabilities.

**How it appears in a table (discrete case).**  
In a contingency table, independence shows up when every cell equals  
(row marginal) × (column marginal).  
The entire table follows this pattern — no row or column deviates from it.

**How it appears with densities (continuous case).**  
For continuous variables, independence means the joint density breaks into the product of the two marginal densities. The density surface has no tilt, stretch, or pattern linking the variables.

**What independence means in practice.**  
Independence says the variables do not influence each other, do not track each other, and do not create patterns together. Most real-world variables are not independent — dependence is the norm, independence is the special case.

Independence is the cleanest possible relationship between variables: completely separate behaviour.
`,
      before:``,
      after:``,
  
    },
    properties:{
      title:`Properties of Joint Probability`,
      content:`
- **Non-negativity:** joint values can never be negative  
- **Normalization:** all joint probabilities together sum (or integrate) to 1  
- **Reduction to marginals:** summing or integrating over one variable gives the marginal for the other  
- **Full description:** the joint distribution contains all information about the variables’ combined behaviour  
- **Dependence visible:** any relationship between variables shows up in the joint structure
`,
      before:``,
      after:``,
  
    },
    conditional:{
      title:`Connection to Conditional Probability`,
      content:`
• Conditional probability is built directly from the joint distribution  
• $\(P(X=x \\mid Y=y)\)$ is found by taking the joint value and dividing by the marginal of \(Y\)  
• In a table: cell ÷ column total  
• In a density: joint density ÷ marginal density  
• The chain rule comes from this relationship and breaks joint probabilities into conditional pieces  
• Bayes’ theorem is a direct consequence of joint and marginal probabilities working together
`,
      before:``,
      after:``,
  
    },
    distributions:{
      title:`Common Joint Distributions`,
      content:`
- **Multinomial distribution:** joint outcomes for repeated categorical trials  
- **Bivariate normal distribution:** joint behaviour of two correlated normal variables  
- **Joint uniform distribution:** probability spread evenly over a region  
- **Joint Bernoulli / 2×2 models:** simplest case of two binary variables  
 These serve as standard examples of how joint behaviour can be shaped by dependence patterns and constraints
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


    obj5:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    }
  
  }


  const introContent = {
  id: "intro",
  title: "When More Than One Random Variable Matters",
  content: `
  Joint probability appears whenever more than one outcome matters at the same time. Real situations often involve several random quantities unfolding together—[events](!/probability/events) happening simultaneously, measurements taken jointly, or variables interacting within the same scenario.

Because of this, probability must describe not only individual outcomes but the combined possibilities they create. Joint probability provides that structure: it represents how outcomes coexist, how variables relate, and how multivariate behaviour is organized.

The sections below outline how joint probability is represented, how it connects to marginals and [conditionals](!/probability/conditional-probability), and how it forms the foundation for analysing relationships between [random variables](!/probability/random-variables).`
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Title | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/url",
         name: "name"
      },
        
       }
    }
   }

export default function JointProbabilityPage({seoData,sectionsContent , introContent}) {

    
  const genericSections=[
    {
        id:'definition',
        title:sectionsContent.definition.title,
        link:'',
        content:[
            sectionsContent.definition.content,
        ]
    },
    {
        id:'notation',
        title:sectionsContent.notation.title,
        link:'',
        content:[
            sectionsContent.notation.content,
        ]
    },
    {
        id:'tables',
        title:sectionsContent.tables.title,
        link:'',
        content:[
            sectionsContent.tables.content,
        ]
    },
    {
        id:'calculate',
        title:sectionsContent.calculate.title,
        link:'',
        content:[
            sectionsContent.calculate.content,

        ]
    },
    {
        id:'marginal',
        title:sectionsContent.marginal.title,
        link:'',
        content:[
            sectionsContent.marginal.content,
        ]
    },
    {
        id:'independence',
        title:sectionsContent.independence.title,
        link:'',
        content:[
          sectionsContent.independence.content,
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
        id:'conditional',
        title:sectionsContent.conditional.title,
        link:'',
        content:[
          sectionsContent.conditional.content,
        ]
    },
    {
        id:'distributions',
        title:sectionsContent.distributions.title,
        link:'',
        content:[
          sectionsContent.distributions.content,
        ]
    },
    {
        id:'',
        title:'',
        link:'',
        content:''
    },
    {
        id:'',
        title:'',
        link:'',
        content:''
    },
    {
        id:'',
        title:'',
        link:'',
        content:''
    },
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Joint Probability</h1>
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
   <ScrollUpButton/>
   </>
  )
}
