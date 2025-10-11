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



export async function getStaticProps(){

    
    const sectionsContent={
  
      basic:{
        title:`2 Basic Types of Distributions`,
        content:``,
        before:`Probability distributions are mathematical models that quantify how likely different outcomes are when dealing with uncertainty and randomness. These powerful tools allow us to systematically describe and predict the behavior of random phenomena across countless real-world scenarios. They fall into two fundamental categories: **discrete distributions** deal with countable outcomes (like number of successes, coin flips, or defective items), while **continuous distributions** handle measurable quantities that can take any value within a range (like height, time, or temperature). The key difference lies in whether you can list all possible outcomes (discrete) or whether outcomes form an unbroken continuum (continuous).

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
    
      obj3:{
    
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


    const distributionsData = {
        basic: {
          title: "Probability Distributions",
          leftTitle: "[Discrete Distributions](!/probability/distributions#discrete)",
          rightTitle: "Continuous Distributions",
          left: [
            "[Discrete Uniform](!/probability/distributions/discrete#uniform):\nEqual probability for finite outcomes",
            "[Binomial](!/probability/distributions/discrete#binomial):\nSuccesses in n trials with probability p each",
            "[Geometric](!/probability/distributions/discrete#geometric):\nTrials until first success (probability p)",
            
            "[Negative Binomial](!/probability/distributions/discrete#negative-binomial):\nTrials until r-th success (generalization of geometric)",
            "[Hypergeometric](!/probability/distributions/discrete#hypergeometric):\nSampling without replacement from finite population",
            "[Poisson](!/probability/distributions/discrete#poisson):\nRare events over time interval (rate λ)",
          ],
          right: [
            "**Uniform**:\nEqual likelihood over interval [a,b]",
            "**Normal**:\nBell curve with mean μ and variance σ²",
            "**Exponential**:\nWaiting time between events (rate λ)",
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
      
    
const introContent = {
    id: "intro",
    title: "Why Distributions Matter",
    content: `Probability distributions serve as the crucial bridge between theoretical probability and real-world data analysis, transforming abstract mathematical concepts into concrete analytical tools. They form the foundation for statistical inference, machine learning algorithms, and mathematical modeling across all quantitative disciplines.

Distributions provide the mathematical framework for describing random variables and their behavior. When we observe data from experiments or natural phenomena, distributions help us identify underlying patterns, estimate parameters, and make probabilistic statements about future observations. They connect the idealized world of mathematical probability with the messy reality of actual measurements and observations.

From a pure mathematical perspective, distributions are elegant functions that encode all the probabilistic information about a random variable. They allow us to compute expected values, variances, and higher moments, perform hypothesis testing, and derive sampling distributions. Understanding distributions means understanding how randomness behaves mathematically—whether you're working with discrete counting processes, continuous measurements, or complex stochastic systems.

Mastering probability distributions gives you the mathematical foundation to tackle problems involving uncertainty, from simple coin flips to sophisticated statistical models.`
  }
  
  
      return {
        props:{
          sectionsContent,
          introContent,
          distributionsData,
          discreteDistributionsTypesData

          
        }
      }
    }
    

export default function DistributionsPage({sectionsContent,introContent,distributionsData,discreteDistributionsTypesData}) {
   
    
  const distributionsSections=[
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
        id:'discrete-section',
        title:sectionsContent.discrete.title,
        link:sectionsContent.discrete.link,
        content:[
          sectionsContent.discrete.before,
          // <GenericTable tableData={discreteDistributionsTypesData}
          // />
          <GenericTable key={2} tableData={discreteDistributionsTypesData} theme='lightBlue'
          cellFontSize={'16px'}
          headerFontSize={'18px'}/>,
          sectionsContent.discrete.after,
          
        ]
    },
    // {
    //     id:'',
    //     title:'',
    //     link:'',
    //     content:''
    // }
]


  return (
   <>
   <GenericNavbar/>
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
   <SectionTableOfContents sections={distributionsSections}/>
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
   <ScrollUpButton/>


   </>
  )
}
