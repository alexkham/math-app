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
  'expected value',
  'expectation',
  'expected value formula',
  'mean of a random variable',
  'how to calculate expected value',
  'expected value pmf',
  'expected value pdf',
  'expected value of a function',
  'expected value of a sum',
  'linearity of expectation'
];


    const sectionsContent={

    intuition:{
      title:`The Intuition Behind Expected Value`,
      content:`
The simplest way to think about expected value is as the **long-run average** of a random variable.
If you could run the same random experiment again and again, the results would fluctuate from trial
to trial, but the average of all outcomes would settle around a single number. That number is the
expected value.

For discrete random variables, this average is formed by giving more weight to outcomes that are more likely.
For continuous variables, the density curve shows where values tend to concentrate, and the expected
value reflects the balance point of that curve.

The value that occurs most often and the expected value are not necessarily the same.
In fact, the expected value might not match any specific outcome at all.
It is simply the number that reflects the overall behavior of the distribution — a kind of “center of gravity” for probability.
`,
      before:``,
      after:``,
  
  
    },
    notation:{
      title:`Notation We Use for Expected Value`,
      content:`
When we talk about expected value, a few symbols appear again and again.  
Here is what they mean in plain language, without the formal overload.

$E(X)$ or $𝔼[X]$ — the expected value of the random variable $X$.  
This is the most common way to write “the long-run average of $X$.”

$Σ$ (the summation sign) — used in the discrete case.  
It tells us we are adding together the contributions from all possible values of $X$,
each weighted by its probability.

$∫$ (the integral sign) — used in the continuous case.  
It represents adding up contributions continuously along the density curve.

$p(x)$ — the probability that $X$ takes the value x (for discrete variables).  
This comes from the PMF.

$f(x)$ — the probability density at x (for continuous variables).  
It shows where values tend to concentrate.

$E[g(X)]$ — the expected value of some function of $X$.  
This appears when computing variance, powers of $X$, or transformations.

All of these symbols simply help express the same idea:  
expected value is a weighted average based on the probability function of the variable.

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

`,
      before:``,
      after:``,
  
    },
  
    calculate:{
  
      title:`How to Calculate Expected Value`,
      content:`
Expected value is always computed the same way: we take each possible value of the random variable, give it the weight it deserves based on its probability, and combine all those weighted contributions into a single average. The only difference between discrete and continuous variables is how we perform this combination.

**Discrete Random Variables (using a PMF)**  
For discrete variables, we use a weighted sum: multiply each value $x$ by its probability $p(x)$, then add all these products together. This gives the formula $E(X) = Σ x · p(x)$. It is simply a probability-weighted average of all possible outcomes.

**Continuous Random Variables (using a PDF)**  
For continuous variables, we replace the weighted sum with a weighted integral: multiply each x by its density $f(x)$, and integrate over all possible values. This gives the formula $E(X) = ∫ x · f(x) dx$. Here, the density $f(x)$ plays a role similar to $p(x)$, except probabilities come from the area under the curve rather than point values.

In both cases, the underlying idea is identical: expected value is the average of all possible outcomes, each weighted by how likely it is.

**Special Formulas for Common Distributions**  
Every well-known probability distribution—both discrete and continuous—comes with its own closed-form formula for expected value. These formulas are derived once from the summation or integral definitions and then reused to make calculations much faster. For example, the binomial distribution has $E(X) = np$, the geometric has $E(X) = 1/p$, and the exponential has $E(X) = 1/λ$. Using these established results saves time and avoids repeating long sums or integrals each time.

`,
      before:``,
      after:``,
  
    },
    function:{
      title:`Expected Value of a Function`,
      content:`
Sometimes we are not interested in the expected value of $X$ itself, but in the expected value of some function of $X$. This happens in many situations: when computing variance, when working with powers of $X$, when modeling profits or losses, or any time we transform the random variable into something new. The idea is exactly the same as before: we weight the values of $g(X)$ by the probability function of $X$.

**Discrete Case**  
For discrete variables, we take all possible values of $X$, apply the function $g$ to each one, multiply by the probability $p(x)$, and add the results. The formula is $E[g(X)] = Σ g(x) · p(x)$. This gives the long-run average of the transformed quantity $g(X)$.

**Continuous Case**  
For continuous variables, we do the same but with an integral instead of a sum. We multiply $g(x)$ by the density $f(x)$ and integrate across all possible values. The formula is $E[g(X)] = ∫ g(x) f(x) dx$. The density determines how much each transformed value contributes to the final average.

Expected value of a function is a fundamental idea because it appears everywhere: in variance, in risk analysis, in moments of distributions, and in many applied calculations where the quantity of interest is built from $X$ rather than $X$ itself.
`,
      before:``,
      after:``,
  
    },


    properties:{
  
      title:`Properties of Expected Value`,
      content:`
Expected value follows a small set of structural rules that make it one of the most useful ideas in probability. These properties describe how expectation behaves when random variables are combined or transformed, and they allow many calculations to be broken into simpler parts.

**Linearity of Expectation (Expected Value of a Sum)**  
The most important property is linearity: $E(X + Y) = E(X) + E(Y)$. This works for any random variables, even if they are dependent. The idea extends to any number of variables: $E(X1 + X2 + ... + Xn) = E(X1) + E(X2) + ... + E(Xn)$. Linearity is what allows us to compute the average of a complicated expression by breaking it into smaller pieces whose expectations are known.

**Scaling and Shifting**  
If we multiply a random variable by a constant or shift it by adding a constant, the expected value behaves in a predictable way:
 $E(aX + b) = aE(X) + b$. 
This shows how expectation responds to changes of units, rescaling, or adding fixed adjustments.

**Expectation of a Product (Independence Case)**  
For independent variables, expectation interacts cleanly with multiplication: $E(XY) = E(X)E(Y)$. This is not true in general when X and Y are dependent, but it is an important special case that appears often in probability and statistics.

**When Expected Value Exists**  
Expected value is not guaranteed to be finite for every distribution. Some distributions, such as the Cauchy distribution, have no defined expected value because the integral diverges. This reminds us that expectation is a mathematical quantity that depends on the shape and behavior of the probability function.

These properties make expectation a powerful tool: they let us simplify expressions, evaluate combinations of random variables, and understand how averages behave under transformations.
`,
      before:``,
      after:``,
  
    },
    sum:{
  
      title:`Expected Value of a Sum`,
      content:`
A key fact about expected value is that it adds up cleanly when random variables are added. If we combine two random variables by adding them, the expected value of the total is simply the sum of their individual expected values. In symbols, $E(X + Y) = E(X) + E(Y)$. This rule works whether the variables are independent or dependent, which makes it unusually powerful.

The same idea extends to any number of variables: $E(X1 + X2 + ... + Xn) = E(X1) + E(X2) + ... + E(Xn)$. This property allows complicated expressions to be handled piece by piece, turning difficult problems into simple ones whose individual expectations are easy to compute. Because of this, linearity of expectation is one of the most widely used tools in probability.
`,
      before:``,
      after:``,
  
    },
    examples:{
  
      title:`Examples of Expected Value`,
      content:`
These short examples show how expected value works for different types of random variables. They are not full derivations, just quick illustrations of the idea.

**Fair Die**  
A fair six-sided die has outcomes 1 through 6, all equally likely. The expected value is the average of these values with equal weights, which gives $E(X) = 3.5$. This number does not need to be one of the outcomes.

**Bernoulli** $(p)$  
A Bernoulli variable takes the value $1$ with probability $p$ and $0$ with probability $1 − p$. The expected value is $E(X) = p$, reflecting the long-run proportion of successes.

**Exponential** $(λ)$  
An exponential distribution with rate λ has expected value $E(X) = 1/λ$. This gives the average waiting time between events in many real-world models.

**Simple Profit Model**  
If a game pays +10 with probability 0.2 and −4 with probability 0.8, the expected profit is E(X) = 10·0.2 + (−4)·0.8 = −1.2. This tells you the average change in wealth per play over the long run.

These examples highlight how expected value captures the broad tendency of a random variable, whether the situation is discrete, continuous, or based on a practical scenario.
`,
      before:``,
      after:``,
  
    },
    related:{
  
      title:`Relation to Other Probability Concepts`,
      content:`
Expected value sits at the center of many other ideas in probability. It is the quantity used to define variance, since variance measures how far values tend to deviate from the expected value. It also appears in the law of large numbers, which explains why averages from repeated experiments settle near E(X). Many probability distributions are summarized by their mean, and formulas for standard distributions highlight this connection.

Expected value also links directly to more advanced topics. The expected value of a function is used in risk calculations, moment methods, and the analysis of transformed variables. In statistics, expectation provides the foundation for covariance, correlation, regression, and many estimation techniques. Because of these relationships, understanding expected value is essential for moving deeper into both probability and statistics.
`,
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
  title: "Understanding Expected Value",
  content: `
Expected value is the number that describes the long-run average outcome of a random variable.If you could repeat the same random experiment over and over, the expected value tells you what the results would settle around on average.

It works the same way for:

• discrete random variables (like dice, counts, or outcomes from models), and  
• continuous random variables (like time, distance, or measurements), 

even though the way we calculate it differs.

Expected value is one of the most important ideas in probability.It connects the outcome of a random experiment to the overall behavior of a distribution and
provides the foundation for variance, covariance, risk calculations, and many principles in probability and statistics.
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
        url: "/probability/expected-value",
         name: "name"
      },
        
       }
    }
   }

export default function ExpectedValuePage({seoData,sectionsContent , introContent}) {

    
  const genericSections=[
    {
        id:'intuition',
        title:sectionsContent.intuition.title,
        link:'',
        content:[
            sectionsContent.intuition.content,
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
        id:'calculate',
        title:sectionsContent.calculate.title,
        link:'',
        content:[
            sectionsContent.calculate.content,
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
        id:'function',
        title:sectionsContent.function.title,
        link:'',
        content:[
            sectionsContent.function.content,
        ]
    },
   
    {
        id:'sum',
        title:sectionsContent.sum.title,
        link:'',
        content:[
            sectionsContent.sum.content,
        ]
    },
    {
        id:'examples',
        title:sectionsContent.examples.title,
        link:'',
        content:[
            sectionsContent.examples.content,
        ]
    },
    {
        id:'related',
        title:sectionsContent.related.title,
        link:'',
        content:[
            sectionsContent.related.content,
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Expected Value</h1>
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
   {/* <ScrollUpButton/> */}
   </>
  )
}
