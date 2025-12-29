// // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // import Sections from '@/app/components/page-components/section/Sections'
// // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// // import React from 'react'
// // import '../pages.css'
// // import Head from 'next/head'
// // import DiscreteProbabilityDistributions from '@/app/components/visualizations/probability/discrete-distribution/DiscreteProbabilityDistributions'
// // import ContinuousProbabilityDistributions from '@/app/components/visualizations/probability/continuous-distribution/ContinuousProbabilityDistribution'


// // export async function getStaticProps(){

// //   const keyWords=['','','','','']

// //   // •

  
// // // <hr style="border-width:1px;"></hr>

// // // <hr style="color:blue;" />

// // // <hr style="border-color:#3498db; border-width:1px;" />



// // // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@




// //     const sectionsContent={

// //     obj1:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
  
// //     },
// //     obj2:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
  
// //     obj3:{
  
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj4:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj5:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj6:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj7:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj8:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj9:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj10:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj11:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj12:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj13:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
// //       link:'',
  
// //     },
// //     obj14:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
// //       link:'',
  
// //     },


// //     obj15:{
  
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     }
  
// //   }


// //   const introContent = {
// //   id: "intro",
// //   title: "",
// //   content: ``
// // }




// //    return {
// //       props:{
// //          sectionsContent,
// //          introContent,
// //           seoData: {
// //         title: "Title | Learn Math Class",
// //         description: "Metadescription",
// //         keywords: keyWords.join(", "),
// //         url: "/url",
// //          name: "name"
// //       },
        
// //        }
// //     }
// //    }

// // export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
// //   const genericSections=[
// //     {
// //         id:'1',
// //         title:sectionsContent.obj1.title,
// //         link:sectionsContent.obj1.link,
// //         content:[
// //           sectionsContent.obj1.content,
// //         ]
// //     },
// //     {
// //         id:'2',
// //         title:sectionsContent.obj2.title,
// //         link:sectionsContent.obj2.link,
// //         content:[
// //           sectionsContent.obj2.content,
// //         ]
// //     },
// //     {
// //         id:'3',
// //         title:sectionsContent.obj3.title,
// //         link:sectionsContent.obj3.link,
// //         content:[
// //           sectionsContent.obj3.content,
// //         ]
// //     },
// //     {
// //         id:'4',
// //         title:sectionsContent.obj4.title,
// //         link:sectionsContent.obj4.link,
// //         content:[
// //           sectionsContent.obj4.content,
// //         ]
// //     },
// //     {
// //         id:'5',
// //         title:sectionsContent.obj5.title,
// //         link:sectionsContent.obj5.link,
// //         content:[
// //           sectionsContent.obj5.content,
// //         ]
// //     },
// //     {
// //         id:'6',
// //         title:sectionsContent.obj6.title,
// //         link:sectionsContent.obj6.link,
// //         content:[
// //           sectionsContent.obj6.content,
// //         ]
// //     },
// //     {
// //         id:'7',
// //         title:sectionsContent.obj7.title,
// //         link:sectionsContent.obj7.link,
// //         content:[
// //           sectionsContent.obj7.content,
// //         ]
// //     },
// //     {
// //         id:'8',
// //         title:sectionsContent.obj8.title,
// //         link:sectionsContent.obj8.link,
// //         content:[
// //           sectionsContent.obj8.content,
// //         ]
// //     },
// //     {
// //         id:'9',
// //         title:sectionsContent.obj9.title,
// //         link:sectionsContent.obj9.link,
// //         content:[
// //           sectionsContent.obj9.content,
// //         ]
// //     },
// //     {
// //         id:'10',
// //         title:sectionsContent.obj10.title,
// //         link:sectionsContent.obj10.link,
// //         content:[
// //           sectionsContent.obj10.content,
// //         ]
// //     },
// //     {
// //         id:'11',
// //         title:sectionsContent.obj11.title,
// //         link:sectionsContent.obj11.link,
// //         content:[
// //           sectionsContent.obj11.content,
// //         ]
// //     },
// //     {
// //         id:'12',
// //         title:sectionsContent.obj12.title,
// //         link:sectionsContent.obj12.link,
// //         content:[
// //           sectionsContent.obj12.content,
// //         ]
// //     },
// //     {
// //         id:'13',
// //         title:sectionsContent.obj13.title,
// //         link:sectionsContent.obj13.link,
// //         content:[
// //           sectionsContent.obj13.content,
// //         ]
// //     },
// //     {
// //         id:'14',
// //         title:sectionsContent.obj14.title,
// //         link:sectionsContent.obj14.link,
// //         content:[
// //           sectionsContent.obj14.content,
// //         ]
// //     },
// //     {
// //         id:'15',
// //         title:sectionsContent.obj15.title,
// //         link:sectionsContent.obj15.link,
// //         content:[
// //           sectionsContent.obj15.content,
// //         ]
// //     },
// //     // {
// //     //     id:'1',
// //     //     title:sectionsContent.obj1.title,
// //     //     link:sectionsContent.obj1.link,
// //     //     content:[
// //     //       sectionsContent.obj1.content,
// //     //     ]
// //     // },
// //     // {
// //     //     id:'1',
// //     //     title:sectionsContent.obj1.title,
// //     //     link:sectionsContent.obj1.link,
// //     //     content:[
// //     //       sectionsContent.obj1.content,
// //     //     ]
// //     // },
// //     // {
// //     //     id:'1',
// //     //     title:sectionsContent.obj1.title,
// //     //     link:sectionsContent.obj1.link,
// //     //     content:[
// //     //       sectionsContent.obj1.content,
// //     //     ]
// //     // },
    
// // ]

// //   return (
// //    <>
// //    <Head>
// //   <title>{seoData.title}</title>
// //   <meta name="description" content={seoData.description} />
// //   <meta name="keywords" content={seoData.keywords} />
// //   <meta name="viewport" content="width=device-width, initial-scale=1" />
// //   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
// //   <meta property="og:title" content={seoData.title} />
// //   <meta property="og:description" content={seoData.description} />
// //   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// //   <meta property="og:type" content="article" />
// //   <meta property="og:site_name" content="Learn Math Class" />
  
// //   <meta name="twitter:card" content="summary" />
// //   <meta name="twitter:title" content={seoData.title} />
// //   <meta name="twitter:description" content={seoData.description} />
  
// //   <meta name="robots" content="index, follow" />
  
// //   <script 
// //     type="application/ld+json"
// //     dangerouslySetInnerHTML={{ 
// //       __html: JSON.stringify({
// //         "@context": "https://schema.org",
// //         "@type": "WebPage",
// //         "name": seoData.name,
// //         "description": seoData.description,
// //         "keywords": seoData.keywords,
// //         "url": `https://www.learnmathclass.com${seoData.url}`,
// //         "dateModified": new Date().toISOString(),
// //         "inLanguage": "en-US",
// //         "mainEntity": {
// //           "@type": "Article",
// //           "name": seoData.name,
// //           "dateModified": new Date().toISOString(),
// //           "author": {
// //             "@type": "Organization",
// //             "name": "Learn Math Class"
// //           }
// //         }
// //       })
// //     }}
// //   />
// // </Head>
// //    {/* <GenericNavbar/> */}
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //     <OperaSidebar 
// //            side='right'
// //            // topOffset='65px' 
// //            sidebarWidth='45px'
// //            panelWidth='200px'
// //            iconColor='white'
// //            panelBackgroundColor='#f2f2f2'
// //          /> 
// //    <Breadcrumb/>
// //    <br/>
// //    <br/>
// //    <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Page Title</h1>
// //    <br/>
// //    <DiscreteProbabilityDistributions/>
// //    <ContinuousProbabilityDistributions/>
// //    <br/>
// //    {/* <SectionTableOfContents sections={genericSections}/> */}
// //    <br/>
// //    <br/>
// //    <br/>
// //     {/* <IntroSection 
// //           id={introContent.id}
// //           title={introContent.title}
// //           content={introContent.content}
// //            backgroundColor='#f9fafb'
// //           //  "#f2f2f2"
// //           textColor="#06357a"
// //         /> */}
// //    <br/>
// //    <br/>
// //    {/* <Sections sections={genericSections}/> */}
// //    <br/>
// //    <br/>
// //    <br/>
// //    {/* <ScrollUpButton/> */}
// //    </>
// //   )
// // }


// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import React from 'react'
// import '../../../../pages/pages.css'
// import Head from 'next/head'
// import DiscreteProbabilityDistributions from '@/app/components/visualizations/probability/discrete-distribution/DiscreteProbabilityDistributions'
// import ContinuousProbabilityDistributions from '@/app/components/visualizations/probability/continuous-distribution/ContinuousProbabilityDistribution'

// export async function getStaticPaths() {
//   const paths = [
//     { params: { view: 'discrete' } },
//     { params: { view: 'continuous' } }
//   ];

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const viewConfig = {
//     'discrete': {
//       component: 'DiscreteProbability',
//       title: "Discrete Probability Distributions - Interactive PMF Calculator | Learn Math Class",
//       description: "Interactive discrete probability distribution calculator with visualizations for Binomial, Poisson, Geometric and more. Explore probability mass functions (PMF) with real-time calculations.",
//       name: "Discrete Probability Distributions",
//       url: "/probability/visual-tools/probability-function/discrete",
//       h1: "Discrete Probability Distribution Visualizer",
//       introTitle: "Understanding Discrete Probability Distributions",
//       introContent: "Discrete probability distributions assign probabilities to countable outcomes. Use the probability mass function (PMF) to calculate the probability of specific values occurring in experiments with distinct, separate outcomes.",
//       keywords: [
//         "discrete probability distribution",
//         "probability mass function",
//         "PMF calculator",
//         "binomial distribution calculator",
//         "Poisson distribution calculator",
//         "geometric distribution calculator",
//         "discrete random variable",
//         "PMF visualization",
//         "interactive discrete probability",
//         "countable probability outcomes",
//         "discrete distribution examples",
//         "PMF formula calculator",
//         "discrete probability tools",
//         "probability mass function graph",
//         "discrete distribution calculator"
//       ],
//       sectionsContent: {
//         obj1: {
//           title: "What is a Discrete Probability Distribution?",
//           content: `A discrete probability distribution describes random variables with countable outcomes. The **probability mass function (PMF)** assigns a probability to each possible value. Common examples include the number of heads in coin flips, dice rolls, or customer arrivals per hour.

// The PMF must satisfy two conditions: each probability is between 0 and 1, and all probabilities sum to 1. This ensures the function represents a valid probability distribution over all possible outcomes.

// For comprehensive coverage of discrete distributions including **expected value**, **variance**, and **moment generating functions**, see our detailed probability theory pages.`,
//           link: ''
//         },
//         obj2: {
//           title: "Using the Interactive Visualizer",
//           content: `Select a distribution type from the dropdown menu to begin. Each distribution (Binomial, Poisson, Geometric, Hypergeometric, Negative Binomial) appears with parameter controls specific to that distribution.

// Adjust parameters using the sliders or input fields. The visualization updates in real-time, showing the probability mass function as a bar chart. Each bar represents the probability of a specific outcome.

// Click on individual bars to see exact probability values. Toggle between different view modes to focus on cumulative probabilities, complement probabilities, or probability ranges.`,
//           link: ''
//         },
//         obj3: {
//           title: "Common Discrete Distributions",
//           content: `**Binomial Distribution** models the number of successes in a fixed number of independent trials. Use it for yes/no experiments repeated multiple times, like flipping coins or quality control testing.

// **Poisson Distribution** describes events occurring over time or space intervals. Common applications include customer arrivals, website visits per hour, or defects per manufacturing batch.

// **Geometric Distribution** represents the number of trials until the first success. Examples include rolling dice until you get a six or testing items until finding a defect.`,
//           link: ''
//         },
//         obj4: {
//           title: "Reading the PMF Graph",
//           content: `The vertical axis shows probability values ranging from 0 to 1. Taller bars indicate more likely outcomes. The horizontal axis displays all possible values the random variable can take.

// The distribution's shape reveals important characteristics. Symmetric distributions cluster around a central value. Skewed distributions have longer tails on one side, indicating extreme values are more likely in that direction.

// The total area of all bars always equals 1, representing certainty that one of the outcomes will occur. Compare bar heights to understand relative likelihood of different outcomes.`,
//           link: ''
//         },
//         obj5: {
//           title: "Calculating Exact Probabilities",
//           content: `Use the value selector to calculate the probability of specific outcomes. Enter a single value to find $P(X = k)$, the probability the random variable equals exactly that number.

// For range calculations, specify minimum and maximum values to compute $P(a \\leq X \\leq b)$. The tool sums probabilities across all values in the range and highlights the relevant bars.

// The cumulative probability option calculates $P(X \\leq k)$, useful for questions like "what's the probability of at most 5 successes?" Toggle the display to see both individual and cumulative probabilities simultaneously.`,
//           link: ''
//         },
//         obj6: {
//           title: "Understanding Distribution Parameters",
//           content: `Each distribution has specific parameters that control its shape and behavior. For the Binomial distribution, $n$ represents the number of trials and $p$ is the success probability. Increasing $n$ widens the distribution while changing $p$ shifts its center.

// The Poisson distribution uses $\\lambda$ (lambda), representing the average rate of occurrence. Higher $\\lambda$ values shift the distribution rightward and increase spread. The geometric distribution's parameter $p$ determines how quickly we expect the first success.

// Experiment with different parameter values to understand their effects. Notice how **expected value** and **spread** change as you adjust parameters. This builds intuition for choosing appropriate distributions in real applications.`,
//           link: ''
//         },
//         obj7: {
//           title: "Comparing Multiple Distributions",
//           content: `Use the comparison mode to display multiple probability distributions simultaneously. This reveals how different parameter choices or distribution types produce different probability patterns.

// Overlay distributions to see how the Binomial distribution approximates the Poisson distribution under certain conditions. Or compare geometric distributions with different success probabilities to understand how parameter changes affect the shape.

// The comparison feature helps identify which distribution best fits your data or problem. Look for matches in shape, spread, and the range of likely values.`,
//           link: ''
//         },
//         obj8: {
//           title: "Expected Value and Variance",
//           content: `The visualizer displays calculated statistics including **expected value** (mean) and **variance** for each distribution. The expected value marks the long-run average outcome if you repeated the experiment infinitely.

// Variance measures how spread out the distribution is around the mean. Higher variance indicates greater uncertainty about which specific value will occur. Standard deviation, shown as the square root of variance, provides spread in the original units.

// These summary statistics help compare distributions quickly. Two distributions might have the same mean but different variances, indicating different levels of predictability in their outcomes.`,
//           link: ''
//         },
//         obj9: {
//           title: "Real-World Applications",
//           content: `Discrete probability distributions model countless real scenarios. The Binomial distribution applies to quality control (testing a batch of items), medical trials (number of patients responding to treatment), or survey analysis (counting yes responses).

// Poisson distributions describe rare events: website crashes per month, earthquake occurrences, or phone calls to a help desk. The geometric distribution models scenarios requiring persistence: sales calls until closing a deal or attempts until passing a test.

// For detailed applications in **statistical inference**, **hypothesis testing**, and **confidence intervals**, see our advanced probability theory resources.`,
//           link: ''
//         },
//         obj10: {
//           title: "Probability Calculations Step-by-Step",
//           content: `The tool provides detailed calculation breakdowns. When you select a value or range, see the exact formula used with your specific parameters substituted in.

// For binomial calculations, observe how the combination formula combines with success and failure probabilities. Poisson calculations show the exponential and factorial components. Each step displays intermediate results.

// Understanding these calculations builds deeper knowledge than using black-box calculators. See how mathematical formulas translate to actual probability values you can interpret and apply.`,
//           link: ''
//         },
//         obj11: {
//           title: "Common Probability Questions",
//           content: `The visualizer helps answer typical probability questions. "What's the probability of exactly k successes?" corresponds to reading a single bar height. "What's the probability of at least k successes?" requires summing bars from k rightward.

// For "between a and b successes" questions, sum bars in that range. The complement probability option quickly calculates "probability of NOT having k successes" by subtracting from 1.

// Practice with preset examples covering common question types. Each example includes the problem context, relevant parameters, and the probability calculation approach.`,
//           link: ''
//         },
//         obj12: {
//           title: "Related Probability Concepts",
//           content: `**Random Variables** - Discrete distributions describe discrete random variables, where outcomes are countable values.

// **Cumulative Distribution Function** - The CDF gives the probability a random variable is less than or equal to a specific value.

// **Continuous Distributions** - For uncountable outcomes like measurements, use probability density functions instead of mass functions.

// **Expected Value Calculator** - Compute the mean of discrete probability distributions with various probability assignments.

// **Variance Calculator** - Calculate the spread of discrete distributions to quantify uncertainty around the expected value.`,
//           link: ''
//         }
//       },
//       faqQuestions: {
//         obj1: {
//           question: "What is a probability mass function (PMF)?",
//           answer: "A probability mass function assigns a probability to each possible value of a discrete random variable. It specifies the probability that the random variable equals exactly each value in its range of possible outcomes."
//         },
//         obj2: {
//           question: "How do you calculate discrete probability?",
//           answer: "For discrete probability, use the probability mass function specific to your distribution. Substitute your parameters into the formula, then evaluate for the outcome value you're interested in. Sum probabilities across multiple values for range calculations."
//         },
//         obj3: {
//           question: "When should you use discrete probability distributions?",
//           answer: "Use discrete probability distributions when your random variable has countable outcomes, such as counts, whole numbers, or distinct categories. Examples include coin flips, dice rolls, number of defects, or customer arrivals."
//         },
//         obj4: {
//           question: "What's the difference between PMF and PDF?",
//           answer: "PMF (probability mass function) applies to discrete random variables with countable outcomes. PDF (probability density function) applies to continuous random variables. PMF gives exact probabilities for specific values, while PDF requires integration over intervals."
//         },
//         obj5: {
//           question: "How do discrete distributions apply in real life?",
//           answer: "Discrete distributions model scenarios with countable outcomes: quality control (number of defective items), insurance (number of claims), epidemiology (number of cases), and business (number of sales or customer arrivals)."
//         }
//       },
//       schemas: {
//         webApplication: {
//           "@context": "https://schema.org",
//           "@type": "WebApplication",
//           "name": "Discrete Probability Distribution Calculator",
//           "description": "Interactive discrete probability distribution calculator with visualizations for Binomial, Poisson, Geometric and more. Explore probability mass functions (PMF) with real-time calculations.",
//           "url": "https://www.learnmathclass.com/probability/visual-tools/probability-function/discrete",
//           "applicationCategory": "EducationalApplication",
//           "operatingSystem": "Any",
//           "offers": {
//             "@type": "Offer",
//             "price": "0",
//             "priceCurrency": "USD"
//           },
//           "featureList": [
//             "Interactive probability mass function (PMF) visualization for multiple discrete distributions",
//             "Real-time parameter adjustment with instant graph updates",
//             "Calculate exact probabilities for specific values and ranges",
//             "Compare multiple discrete distributions side-by-side",
//             "Binomial, Poisson, Geometric, Hypergeometric, and Negative Binomial distributions",
//             "Display expected value, variance, and standard deviation",
//             "Step-by-step probability calculation breakdowns"
//           ],
//           "author": {
//             "@type": "Organization",
//             "name": "Learn Math Class"
//           },
//           "datePublished": "2024-01-15",
//           "dateModified": new Date().toISOString(),
//           "inLanguage": "en-US",
//           "isAccessibleForFree": true,
//           "learningResourceType": "Interactive Tool",
//           "educationalLevel": "High School, College",
//           "keywords": "discrete probability distribution, PMF calculator, binomial distribution, Poisson distribution, geometric distribution, probability mass function, discrete random variable, PMF visualization, interactive discrete probability, countable probability outcomes, discrete distribution examples, PMF formula calculator, discrete probability tools, probability mass function graph, discrete distribution calculator"
//         },
//         breadcrumb: {
//           "@context": "https://schema.org",
//           "@type": "BreadcrumbList",
//           "itemListElement": [
//             {
//               "@type": "ListItem",
//               "position": 1,
//               "name": "Home",
//               "item": "https://www.learnmathclass.com"
//             },
//             {
//               "@type": "ListItem",
//               "position": 2,
//               "name": "Probability",
//               "item": "https://www.learnmathclass.com/probability"
//             },
//             {
//               "@type": "ListItem",
//               "position": 3,
//               "name": "Visual Tools",
//               "item": "https://www.learnmathclass.com/probability/visual-tools"
//             },
//             {
//               "@type": "ListItem",
//               "position": 4,
//               "name": "Probability Functions",
//               "item": "https://www.learnmathclass.com/probability/visual-tools/probability-function"
//             },
//             {
//               "@type": "ListItem",
//               "position": 5,
//               "name": "Discrete Distributions",
//               "item": "https://www.learnmathclass.com/probability/visual-tools/probability-function/discrete"
//             }
//           ]
//         }
//       }
//     },
    
//     'continuous': {
//       component: 'ContinuousProbability',
//       title: "Continuous Probability Distributions - Interactive PDF Calculator | Learn Math Class",
//       description: "Interactive continuous probability distribution calculator with visualizations for Normal, Exponential, Uniform and more. Explore probability density functions (PDF) with real-time calculations.",
//       name: "Continuous Probability Distributions",
//       url: "/probability/visual-tools/probability-function/continuous",
//       h1: "Continuous Probability Distribution Visualizer",
//       introTitle: "Understanding Continuous Probability Distributions",
//       introContent: "Continuous probability distributions describe random variables that can take any value within an interval. The probability density function (PDF) defines relative likelihood across the range, with probabilities calculated by integrating over intervals rather than at specific points.",
//       keywords: [
//         "continuous probability distribution",
//         "probability density function",
//         "PDF calculator",
//         "normal distribution calculator",
//         "exponential distribution calculator",
//         "uniform distribution calculator",
//         "continuous random variable",
//         "PDF visualization",
//         "interactive continuous probability",
//         "probability density graph",
//         "continuous distribution examples",
//         "PDF formula calculator",
//         "continuous probability tools",
//         "bell curve calculator",
//         "Gaussian distribution calculator"
//       ],
//       sectionsContent: {
//         obj1: {
//           title: "What is a Continuous Probability Distribution?",
//           content: `A continuous probability distribution describes random variables that can take any value in an interval. Unlike discrete distributions, continuous distributions use the **probability density function (PDF)** rather than a probability mass function.

// The PDF gives relative likelihood but not direct probabilities. Probability for exact values is always zero in continuous distributions. Instead, calculate probabilities over intervals by integrating the PDF.

// The area under the entire PDF curve equals 1, ensuring the distribution covers all possible outcomes. For detailed theory on **integration**, **PDF properties**, and **cumulative distribution functions**, see our comprehensive probability resources.`,
//           link: ''
//         },
//         obj2: {
//           title: "Using the Interactive Visualizer",
//           content: `Select a distribution from the dropdown menu: Normal (Gaussian), Exponential, Uniform, Student's t, Chi-square, or F-distribution. Each distribution displays with its specific parameters.

// Adjust parameters using sliders or input fields. For the Normal distribution, change the mean $\\mu$ to shift the curve left or right, and the standard deviation $\\sigma$ to make it wider or narrower.

// The curve updates instantly as you modify parameters. Observe how the shape, center, and spread change with different parameter values. Toggle between PDF and CDF views to see different representations.`,
//           link: ''
//         },
//         obj3: {
//           title: "Common Continuous Distributions",
//           content: `**Normal Distribution** is the most important continuous distribution, describing measurements like heights, test scores, or measurement errors. Its bell-shaped curve is symmetric around the mean.

// **Exponential Distribution** models time between events or lifetimes of products. Used extensively in reliability engineering, queueing theory, and survival analysis.

// **Uniform Distribution** gives equal probability density to all values in an interval. Useful for modeling random selection or generating random numbers for simulations.`,
//           link: ''
//         },
//         obj4: {
//           title: "Reading the PDF Curve",
//           content: `The vertical axis shows probability density, not probability. Higher values indicate regions where outcomes are more likely, but the height itself isn't a probability.

// The curve's shape reveals distribution characteristics. Symmetric curves like the Normal distribution have equal spread on both sides of the mean. Skewed distributions like the Exponential have longer tails on one side.

// The area under any portion of the curve represents probability. Wider regions capture more area and thus higher probability. The visualizer shades selected regions to show the area corresponding to your probability calculation.`,
//           link: ''
//         },
//         obj5: {
//           title: "Calculating Probabilities Over Intervals",
//           content: `Use the interval selector to calculate probabilities. Specify lower and upper bounds to find $P(a \\leq X \\leq b)$. The tool shades the region and displays the probability as the area under the curve.

// For one-sided probabilities, leave one bound at infinity. Calculate $P(X \\leq a)$ for "at most" questions or $P(X \\geq b)$ for "at least" questions. The visualization shades from the bound to the tail of the distribution.

// The tool performs numerical integration to compute areas since most continuous distributions lack simple closed-form solutions for probability calculations. Results show multiple decimal places for precision.`,
//           link: ''
//         },
//         obj6: {
//           title: "Understanding Distribution Parameters",
//           content: `The Normal distribution has two parameters: mean $\\mu$ (center location) and standard deviation $\\sigma$ (spread). The empirical rule states approximately 68% of data falls within one $\\sigma$ of $\\mu$.

// Exponential distributions use rate parameter $\\lambda$ (lambda), which equals 1 divided by the mean. Higher $\\lambda$ indicates faster decay and shorter expected time between events.

// Uniform distributions need minimum $a$ and maximum $b$ bounds. The PDF height is constant at $1/(b-a)$ across the interval. All intervals of equal length have equal probability.`,
//           link: ''
//         },
//         obj7: {
//           title: "Normal Distribution Deep Dive",
//           content: `The Normal distribution's bell curve is perfectly symmetric with mean, median, and mode all equal. The **68-95-99.7 rule** provides quick probability estimates: 68% within one standard deviation, 95% within two, 99.7% within three.

// Standard Normal distribution (mean 0, standard deviation 1) is the baseline form. Any Normal distribution can be standardized using z-scores: $z = (x - \\mu)/\\sigma$. This transformation enables using standard Normal tables.

// The visualizer includes z-score calculations. Enter a value to see its z-score and corresponding percentile. Or enter a percentile to find the value separating that percentage of the distribution.`,
//           link: ''
//         },
//         obj8: {
//           title: "Comparing Distribution Shapes",
//           content: `Use comparison mode to overlay multiple distributions or different parameter sets. Compare Normal distributions with different standard deviations to understand spread. Or compare Normal and Student's t distributions to see how they differ.

// Notice how some distributions have similar shapes but different supports (ranges where they're defined). The Exponential distribution is defined only for positive values, while the Normal extends infinitely in both directions.

// Shape comparison helps select appropriate distributions for modeling. Match your data's characteristics (symmetric vs skewed, bounded vs unbounded, heavy-tailed vs light-tailed) to distribution properties.`,
//           link: ''
//         },
//         obj9: {
//           title: "Expected Value and Variance",
//           content: `The visualizer displays **expected value** (mean) and **variance** for each distribution. For symmetric distributions like Normal, the expected value marks the peak. For skewed distributions like Exponential, the mean lies to the right of the peak.

// Variance quantifies spread around the mean. Comparing Normal distributions with different variances shows how this affects the curve width. Higher variance creates flatter, wider curves indicating greater uncertainty.

// These statistics summarize the distribution in two numbers. The mean tells you the central tendency, while variance tells you the spread. Together they provide a quick distribution description.`,
//           link: ''
//         },
//         obj10: {
//           title: "Real-World Applications",
//           content: `Continuous distributions model measured quantities. The Normal distribution applies to heights, weights, IQ scores, measurement errors, and financial returns. Most natural phenomena involving multiple independent factors follow Normal distributions due to the Central Limit Theorem.

// Exponential distributions describe lifetimes and waiting times: time until equipment failure, time between customer arrivals, or duration of phone calls. Common in reliability engineering and queueing theory.

// For applications in **statistical inference**, **confidence intervals**, and **hypothesis testing**, see our advanced probability and statistics pages.`,
//           link: ''
//         },
//         obj11: {
//           title: "Percentiles and Quantiles",
//           content: `The percentile tool finds values corresponding to specific cumulative probabilities. The 75th percentile is the value where 75% of the distribution lies below and 25% above.

// Quartiles divide the distribution into fourths. The median (50th percentile) splits the distribution in half. The first and third quartiles (25th and 75th percentiles) mark the boundaries for the middle 50% of values.

// Use percentile calculations for understanding data spread and identifying outliers. Values beyond the 95th or below the 5th percentile are often considered unusual or worthy of investigation.`,
//           link: ''
//         },
//         obj12: {
//           title: "Related Probability Concepts",
//           content: `**Cumulative Distribution Function (CDF)** - Gives the probability a random variable is less than or equal to a value, computed by integrating the PDF from negative infinity.

// **Discrete Distributions** - For countable outcomes, use probability mass functions rather than probability density functions.

// **Standard Normal Table** - Convert any Normal distribution to standard form for probability lookup using z-score transformations.

// **Central Limit Theorem** - Explains why the Normal distribution appears so frequently in nature and statistics.

// **Continuous Random Variables** - Learn about properties, transformations, and joint distributions of continuous random variables.`,
//           link: ''
//         }
//       },
//       faqQuestions: {
//         obj1: {
//           question: "What is a probability density function (PDF)?",
//           answer: "A probability density function describes the relative likelihood of a continuous random variable taking values in different regions. The PDF itself doesn't give probabilities; instead, probabilities are found by integrating the PDF over intervals."
//         },
//         obj2: {
//           question: "How do you calculate continuous probability?",
//           answer: "Calculate continuous probability by integrating the probability density function over the desired interval. Use P(a ≤ X ≤ b) = ∫[a to b] f(x)dx, where f(x) is the PDF. The result equals the area under the curve between a and b."
//         },
//         obj3: {
//           question: "Why is the probability of an exact value zero in continuous distributions?",
//           answer: "In continuous distributions, the probability of any single exact value is zero because there are infinitely many possible values. Probabilities only make sense over intervals. Even very small intervals have positive probability, but individual points have zero probability."
//         },
//         obj4: {
//           question: "What's the difference between PDF and CDF?",
//           answer: "PDF (probability density function) shows relative likelihood at each point and requires integration for probabilities. CDF (cumulative distribution function) directly gives P(X ≤ x) without integration. The CDF is the integral of the PDF from negative infinity to x."
//         },
//         obj5: {
//           question: "When should you use continuous probability distributions?",
//           answer: "Use continuous probability distributions for measurements and variables that can take any value in an interval: heights, weights, temperatures, times, distances, voltages, or any measured quantity with decimals rather than whole number counts."
//         }
//       },
//       schemas: {
//         webApplication: {
//           "@context": "https://schema.org",
//           "@type": "WebApplication",
//           "name": "Continuous Probability Distribution Calculator",
//           "description": "Interactive continuous probability distribution calculator with visualizations for Normal, Exponential, Uniform and more. Explore probability density functions (PDF) with real-time calculations.",
//           "url": "https://www.learnmathclass.com/probability/visual-tools/probability-function/continuous",
//           "applicationCategory": "EducationalApplication",
//           "operatingSystem": "Any",
//           "offers": {
//             "@type": "Offer",
//             "price": "0",
//             "priceCurrency": "USD"
//           },
//           "featureList": [
//             "Interactive probability density function (PDF) visualization for multiple continuous distributions",
//             "Real-time parameter adjustment with instant curve updates",
//             "Calculate probabilities over intervals through numerical integration",
//             "Normal, Exponential, Uniform, Student's t, Chi-square, and F-distributions",
//             "Z-score calculations and percentile conversions for Normal distribution",
//             "Display expected value, variance, and standard deviation",
//             "Compare multiple continuous distributions with overlay visualization"
//           ],
//           "author": {
//             "@type": "Organization",
//             "name": "Learn Math Class"
//           },
//           "datePublished": "2024-01-15",
//           "dateModified": new Date().toISOString(),
//           "inLanguage": "en-US",
//           "isAccessibleForFree": true,
//           "learningResourceType": "Interactive Tool",
//           "educationalLevel": "High School, College",
//           "keywords": "continuous probability distribution, PDF calculator, normal distribution calculator, exponential distribution calculator, uniform distribution calculator, continuous random variable, PDF visualization, interactive continuous probability, probability density graph, continuous distribution examples, PDF formula calculator, continuous probability tools, bell curve calculator, Gaussian distribution calculator"
//         },
//         breadcrumb: {
//           "@context": "https://schema.org",
//           "@type": "BreadcrumbList",
//           "itemListElement": [
//             {
//               "@type": "ListItem",
//               "position": 1,
//               "name": "Home",
//               "item": "https://www.learnmathclass.com"
//             },
//             {
//               "@type": "ListItem",
//               "position": 2,
//               "name": "Probability",
//               "item": "https://www.learnmathclass.com/probability"
//             },
//             {
//               "@type": "ListItem",
//               "position": 3,
//               "name": "Visual Tools",
//               "item": "https://www.learnmathclass.com/probability/visual-tools"
//             },
//             {
//               "@type": "ListItem",
//               "position": 4,
//               "name": "Probability Functions",
//               "item": "https://www.learnmathclass.com/probability/visual-tools/probability-function"
//             },
//             {
//               "@type": "ListItem",
//               "position": 5,
//               "name": "Continuous Distributions",
//               "item": "https://www.learnmathclass.com/probability/visual-tools/probability-function/continuous"
//             }
//           ]
//         }
//       }
//     }
//   };

//   const currentConfig = viewConfig[params.view];
//   const sectionsContent = currentConfig.sectionsContent;
//   const faqQuestions = currentConfig.faqQuestions;
//   const schemas = {
//     ...currentConfig.schemas,
//     faq: {
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       "mainEntity": Object.keys(faqQuestions).map(key => ({
//         "@type": "Question",
//         "name": faqQuestions[key].question,
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": faqQuestions[key].answer
//         }
//       }))
//     }
//   };

//   const introContent = {
//     id: "intro",
//     title: currentConfig.introTitle,
//     content: currentConfig.introContent
//   };

//   return {
//     props: {
//       sectionsContent,
//       introContent,
//       faqQuestions,
//       schemas,
//       seoData: {
//         title: currentConfig.title,
//         description: currentConfig.description,
//         keywords: currentConfig.keywords.join(", "),
//         url: currentConfig.url,
//         name: currentConfig.name
//       },
//       currentView: params.view,
//       componentName: currentConfig.component,
//       h1Title: currentConfig.h1
//     }
//   };
// }

// export default function ProbabilityFunctionViewPage({ seoData, sectionsContent, introContent, faqQuestions, schemas, currentView, componentName, h1Title }) {
//   const genericSections = Object.keys(sectionsContent).map((key, index) => ({
//     id: `${index + 1}`,
//     title: sectionsContent[key].title,
//     link: sectionsContent[key].link || `#section-${index + 1}`,
//     content: [sectionsContent[key].content]
//   }));

//   return (
//     <>
//       <Head>
//         <title>{seoData.title}</title>
//         <meta name="description" content={seoData.description} />
//         <meta name="keywords" content={seoData.keywords} />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

//         <meta property="og:title" content={seoData.title} />
//         <meta property="og:description" content={seoData.description} />
//         <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//         <meta property="og:type" content="article" />
//         <meta property="og:site_name" content="Learn Math Class" />

//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={seoData.title} />
//         <meta name="twitter:description" content={seoData.description} />

//         <meta name="robots" content="index, follow" />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(schemas.webApplication)
//           }}
//         />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(schemas.breadcrumb)
//           }}
//         />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(schemas.faq)
//           }}
//         />
//       </Head>
      
//       <br />
//       <br />
//       <br />
//       <br />
//       <OperaSidebar
//         side='right'
//         sidebarWidth='45px'
//         panelWidth='200px'
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'
//       />
//       <Breadcrumb />
//       <br />
//       <br />
//       <h1 className='title' style={{ marginTop: '-50px', marginBottom: '-70px' }}>{h1Title}</h1>
//       <br />
//     <div style={{transform:'scale(0.8)'}}>
//       {componentName === 'DiscreteProbability' && (
//         <DiscreteProbabilityDistributions />
//       )}

//       {componentName === 'ContinuousProbability' && (
//         <ContinuousProbabilityDistributions />
//       )}
//       </div>

//       <br />
//       <SectionTableOfContents sections={genericSections} />
//       <br />
//       <br />
//       <br />
//       {/* <IntroSection
//         id={introContent.id}
//         title={introContent.title}
//         content={introContent.content}
//         backgroundColor='#f9fafb'
//         textColor="#06357a"
//       /> */}
//       <br />
//       <br />
//       <Sections sections={genericSections} />
//       <br />
//       <br />
//       <br />
//     </>
//   );
// }


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import DiscreteProbabilityDistributions from '@/app/components/visualizations/probability/discrete-distribution/DiscreteProbabilityDistributions'
import ContinuousProbabilityDistributions from '@/app/components/visualizations/probability/continuous-distribution/ContinuousProbabilityDistribution'


export async function getStaticPaths() {
  const paths = [
    { params: { view: 'discrete' } },
    { params: { view: 'continuous' } }
  ];

  return { paths, fallback: false };
}


export async function getStaticProps({ params }){

  const viewConfig = {
    'discrete': {
      component: 'DiscreteProbability',
      title: "Discrete Probability Distributions - Interactive PMF Visualizer | Learn Math Class",
      description: "Interactive discrete probability distribution visualizer with Binomial, Poisson, Geometric and more. Explore probability mass functions with real-time parameter controls and calculations.",
      keywords: [
        'discrete probability distribution',
        'probability mass function',
        'PMF calculator',
        'binomial distribution',
        'Poisson distribution',
        'geometric distribution',
        'discrete random variable',
        'interactive PMF',
        'probability mass calculator',
        'discrete distribution visualizer',
        'hypergeometric distribution',
        'negative binomial distribution',
        'PMF interactive tool',
        'discrete probability calculator',
        'probability mass function graph'
      ],
      url: "/probability/visual-tools/probability-function/discrete",
      name: "Discrete Probability Distributions",
      h1: "Discrete Probability Distribution Visualizer",
      introTitle: "Understanding Discrete Probability Distributions",
      introContent: "Discrete probability distributions describe random variables with countable outcomes. The probability mass function (PMF) assigns exact probabilities to specific values. Explore six fundamental discrete distributions with interactive parameter controls.",
      sectionsContent: {
        obj1: {
          title: `Selecting a Distribution Type`,
          content: `Click the distribution tabs at the top to switch between six discrete distributions. Each tab shows the distribution name: Discrete Uniform, Binomial, Geometric, Negative Binomial, Hypergeometric, and Poisson. The selected distribution displays in blue with its parameter controls below. Start with Discrete Uniform for the simplest case, or jump directly to the distribution relevant to your problem. Each distribution has a brief description underneath its name explaining what it models. The tool remembers your last selection, making it easy to compare distributions by switching back and forth.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj2: {
          title: `Adjusting Distribution Parameters`,
          content: `Use the sliders to change distribution parameters and watch the bar chart update instantly. Each distribution has different parameters: Binomial uses $n$ (number of trials) and $p$ (success probability), while Poisson uses only $\\lambda$ (rate parameter). Drag sliders smoothly or click anywhere on the slider track to jump to that value. The current parameter values display next to each slider label. For the Hypergeometric distribution, note that the number of draws and success states cannot exceed the population size. The tool automatically constrains parameters to valid ranges. Experiment with extreme parameter values to see how distributions behave at their limits.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj3: {
          title: `Reading the Bar Chart`,
          content: `The bar chart displays probability values on the vertical axis and possible outcome values on the horizontal axis. Each bar height represents the probability of that specific outcome occurring. Taller bars indicate more likely values. The chart automatically scales to show all bars clearly, adjusting the vertical axis as you change parameters. Hover over any bar to see the exact probability value displayed in a tooltip. The tooltip shows both the outcome value $k$ and its probability $P(X = k)$ to six decimal places. For distributions with many possible values, the chart shows only values with non-negligible probability. Compare bar heights directly to understand relative likelihoods.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj4: {
          title: `Understanding Probability Values`,
          content: `All probability values fall between 0 and 1, where 0 means impossible and 1 means certain. Values close to 0 indicate unlikely outcomes, while values near 1 indicate highly likely outcomes. The sum of all bar heights always equals exactly 1, representing certainty that one of the outcomes will occur. For symmetric distributions like Binomial with $p = 0.5$, the highest bars cluster around the center. For skewed distributions like Geometric, the highest bar appears on one side with a long tail extending in the other direction. Notice how probability spreads out as you increase variance parameters. When comparing distributions, similar shapes suggest similar probabilistic behavior.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj5: {
          title: `Comparing Distribution Shapes`,
          content: `Switch between distributions to observe different probability patterns. The Discrete Uniform creates equal-height bars across all values in its range. Binomial distributions form bell-shaped patterns that become more symmetric as $n$ increases. Geometric distributions always show exponential decay with the highest probability at the first value. Poisson distributions shift rightward as $\\lambda$ increases, transitioning from highly skewed to approximately symmetric. Negative Binomial distributions extend the geometric pattern, showing where the $r$-th success is likely to occur. Hypergeometric distributions resemble Binomial but account for sampling without replacement. Understanding these shape differences helps you select the appropriate distribution for your scenario.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj6: {
          title: `Working with Different Scenarios`,
          content: `Each distribution models specific real-world scenarios. Use Binomial for fixed-trial experiments like flipping a coin 10 times or testing 50 items for defects. Choose Poisson for rare events occurring over time, such as website visits per hour or earthquakes per year. Select Geometric when counting trials until the first success, like rolling dice until you get a six. Negative Binomial extends this to count trials until the $r$-th success. Use Hypergeometric when sampling without replacement from a finite population, such as drawing cards or selecting items from a batch. The parameter controls let you adjust scenarios to match your specific situation. The explanation panel provides formulas and typical applications for the selected distribution.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj7: {
          title: `What is a Probability Mass Function?`,
          content: `The probability mass function (PMF) assigns a probability to each discrete value a random variable can take. Written as $P(X = k)$, it gives the probability that random variable $X$ equals exactly $k$. The PMF must satisfy two properties: each probability is between 0 and 1, and all probabilities sum to 1. For example, a fair six-sided die has PMF $P(X = k) = 1/6$ for $k = 1, 2, 3, 4, 5, 6$. The PMF differs from the **probability density function** used for continuous variables. For comprehensive coverage of **random variables**, **expectation**, and **variance** calculations using PMFs, see our detailed probability theory pages.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj8: {
          title: `Binomial Distribution Fundamentals`,
          content: `The Binomial distribution models the number of successes in $n$ independent trials, each with success probability $p$. Its PMF is $P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$, where $\\binom{n}{k}$ is the binomial coefficient. The expected value is $E[X] = np$ and variance is $\\text{Var}(X) = np(1-p)$. As $n$ increases with $p$ fixed, the distribution becomes more bell-shaped and approximates a Normal distribution. When $n$ is large and $p$ is small such that $np$ remains moderate, it approximates a Poisson distribution. For detailed derivations of Binomial properties, applications in **hypothesis testing**, and connections to **combinatorics**, see our Binomial distribution theory page.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj9: {
          title: `Poisson Distribution Basics`,
          content: `The Poisson distribution describes the number of events occurring in a fixed interval when events happen at a constant average rate $\\lambda$. Its PMF is $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$. Both the mean and variance equal $\\lambda$. This distribution applies when events occur independently and the average rate stays constant. The Poisson approximates Binomial when $n$ is large, $p$ is small, and $np \\approx \\lambda$. Common applications include modeling rare events, arrivals in queueing systems, and defects in manufacturing. For in-depth coverage of Poisson process theory, **exponential distribution** connections, and statistical inference with Poisson data, see our detailed Poisson distribution page.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj10: {
          title: `Geometric vs Negative Binomial`,
          content: `The Geometric distribution models trials until the first success, with PMF $P(X = k) = (1-p)^{k-1} p$. It has the memoryless property: the probability of success in future trials doesn't depend on past failures. The Negative Binomial generalizes this to count trials until the $r$-th success. Its PMF is $P(X = k) = \\binom{k-1}{r-1} p^r (1-p)^{k-r}$. When $r = 1$, Negative Binomial reduces to Geometric. Both distributions are right-skewed with exponential decay. For comprehensive theory on these distributions, their role in **survival analysis**, and applications in **sequential experiments**, see our detailed pages on Geometric and Negative Binomial distributions.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj11: {
          title: `When to Use Each Distribution`,
          content: `Choose Discrete Uniform when all outcomes in a range are equally likely, such as rolling a fair die or selecting a random integer. Use Binomial for counting successes in a fixed number of independent trials with constant success probability. Select Poisson when counting rare events over time or space intervals with a constant average rate. Choose Geometric when counting trials until the first success occurs. Use Negative Binomial when counting trials until $r$ successes occur, generalizing the geometric case. Select Hypergeometric when sampling without replacement from a finite population, where the composition of remaining items changes after each draw. The key distinction is whether sampling is with replacement (Binomial) or without replacement (Hypergeometric).`,
          before: ``,
          after: ``,
          link: '',
        },
        obj12: {
          title: `Related Probability Concepts`,
          content: `**Expected Value Calculator** - Compute the mean of discrete probability distributions to find the long-run average outcome.

**Variance Calculator** - Calculate the spread of probability distributions to quantify uncertainty around the expected value.

**Cumulative Distribution Function** - The CDF gives probabilities of being less than or equal to a value, computed by summing the PMF.

**Continuous Probability Distributions** - For uncountable outcomes like measurements, explore probability density functions instead.

**Combinatorics** - Understanding combinations and permutations is essential for calculating binomial and hypergeometric probabilities.

**Random Variables** - Learn about discrete random variables, their properties, and how probability mass functions define their behavior.`,
          before: ``,
          after: ``,
          link: '',
        }
      },
      faqQuestions: {
        obj1: {
          question: "What is a probability mass function?",
          answer: "A probability mass function (PMF) assigns a probability to each possible value of a discrete random variable. It specifies P(X = k) for every k in the variable's range. All probabilities must be between 0 and 1, and they must sum to exactly 1."
        },
        obj2: {
          question: "How do you calculate probabilities with discrete distributions?",
          answer: "Use the distribution's probability mass function formula with your specific parameters. Substitute the parameters and the value k you're interested in, then evaluate the formula. For ranges, sum the PMF values across all k in that range."
        },
        obj3: {
          question: "When should you use a Binomial distribution?",
          answer: "Use Binomial when you have a fixed number of independent trials, each with the same probability of success, and you're counting the total number of successes. Examples include coin flips, quality control testing, and survey responses."
        },
        obj4: {
          question: "What's the difference between Geometric and Negative Binomial distributions?",
          answer: "Geometric counts trials until the first success occurs. Negative Binomial generalizes this to count trials until r successes occur. When r equals 1, Negative Binomial reduces to Geometric. Both model sequential trials with constant success probability."
        },
        obj5: {
          question: "How does Poisson distribution relate to Binomial distribution?",
          answer: "Poisson approximates Binomial when n is large, p is small, and their product np remains moderate. This makes Poisson useful for modeling rare events. The Poisson parameter λ equals np from the Binomial setup."
        }
      }
    },
    
    'continuous': {
      component: 'ContinuousProbability',
      title: "Continuous Probability Distributions - Interactive PDF Visualizer | Learn Math Class",
      description: "Interactive continuous probability distribution visualizer with Normal, Exponential, Uniform distributions. Explore probability density functions with real-time PDF/CDF toggle and parameter controls.",
      keywords: [
        'continuous probability distribution',
        'probability density function',
        'PDF calculator',
        'normal distribution',
        'Gaussian distribution',
        'exponential distribution',
        'uniform distribution',
        'continuous random variable',
        'interactive PDF',
        'probability density calculator',
        'bell curve visualizer',
        'CDF calculator',
        'PDF vs CDF',
        'continuous probability calculator',
        'probability density graph'
      ],
      url: "/probability/visual-tools/probability-function/continuous",
      name: "Continuous Probability Distributions",
      h1: "Continuous Probability Distribution Visualizer",
      introTitle: "Understanding Continuous Probability Distributions",
      introContent: "Continuous probability distributions describe random variables that can take any value in an interval. The probability density function (PDF) shows relative likelihood, while the cumulative distribution function (CDF) shows accumulated probability. Explore three fundamental continuous distributions with interactive controls.",
      sectionsContent: {
        obj1: {
          title: `Selecting a Distribution Type`,
          content: `Click the distribution tabs at the top to switch between three continuous distributions: Uniform, Normal (Gaussian), and Exponential. The selected distribution appears highlighted in blue. Each distribution has a brief description explaining its key characteristics. The Uniform distribution shows constant density over an interval. The Normal distribution displays the classic bell curve shape, symmetric around its mean. The Exponential distribution models waiting times with exponential decay. The tool maintains your previous parameter settings when switching between distributions, making it easy to compare how different distributions behave with similar parameter ranges.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj2: {
          title: `Using the PDF vs CDF Toggle`,
          content: `Toggle between PDF (Probability Density Function) and CDF (Cumulative Distribution Function) views using the buttons above the chart. The PDF view shows the density curve, indicating relative likelihood at each point. Higher curves mean greater density, though the height itself is not a probability. The CDF view shows cumulative probability, displaying $P(X \\leq x)$ at each point. The CDF always increases from 0 to 1, creating an S-shaped curve for most distributions. Switch between views to understand how density accumulates into probability. The PDF shows where probability is concentrated, while the CDF shows total probability up to any point. Both views use the same parameters, so changes in one immediately reflect in the other.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj3: {
          title: `Adjusting Distribution Parameters`,
          content: `Use the sliders to adjust parameters specific to each distribution. For the Uniform distribution, set the lower bound $a$ and upper bound $b$ to define the interval. The Normal distribution uses mean $\\mu$ to shift the curve left or right, and standard deviation $\\sigma$ to control spread. Larger $\\sigma$ creates wider, flatter curves; smaller $\\sigma$ creates taller, narrower curves. The Exponential distribution uses rate parameter $\\lambda$, where larger values create steeper decay and smaller expected values. Drag sliders smoothly or click to jump to specific values. Parameter values display next to each label. The curve updates instantly as you adjust parameters, providing immediate visual feedback on how parameters affect distribution shape.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj4: {
          title: `Reading the Curve`,
          content: `The horizontal axis shows the random variable's values, while the vertical axis shows either density (PDF) or cumulative probability (CDF). For PDF views, curve height indicates relative likelihood. Higher sections correspond to more probable regions, but remember that height is density, not probability. Probability requires integrating the PDF over an interval. For CDF views, the curve height directly gives $P(X \\leq x)$. At any point $x$, read up to the curve and across to the vertical axis to find the cumulative probability. Hover over the curve to see exact values in a tooltip. The tooltip displays both the $x$ value and the corresponding function value (density or cumulative probability) to four decimal places.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj5: {
          title: `Understanding Density vs Probability`,
          content: `Probability density is not the same as probability. Density can exceed 1, especially for narrow distributions concentrated in small intervals. The Normal distribution with small standard deviation can have peak densities much greater than 1. Probability is the area under the PDF curve over an interval, not the height. For any single point, probability equals zero in continuous distributions. To find probability for an interval $[a, b]$, integrate the PDF: $P(a \\leq X \\leq b) = \\int_a^b f(x)dx$. The CDF provides this directly: $P(a \\leq X \\leq b) = F(b) - F(a)$. The total area under any PDF always equals 1, ensuring all possible outcomes have probability 1 collectively.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj6: {
          title: `Comparing Distribution Shapes`,
          content: `Each distribution has distinctive shape characteristics. The Uniform distribution shows a flat, rectangular shape in PDF view, with constant density across the interval and zero outside. Its CDF is a straight diagonal line within the interval. The Normal distribution creates the famous bell curve in PDF view, symmetric and smooth with a single peak at the mean. Its CDF is an S-curve, transitioning smoothly from 0 to 1. The Exponential distribution shows exponential decay in PDF view, starting at its maximum and decreasing rapidly. Its CDF rises quickly then gradually approaches 1. Switch between distributions and adjust parameters to see how shapes transform. Understanding these shape patterns helps identify which distribution best models your data.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj7: {
          title: `What is a Probability Density Function?`,
          content: `The probability density function (PDF) describes the relative likelihood of a continuous random variable taking values near each point. Written as $f(x)$, the PDF must be non-negative everywhere and integrate to 1 over its entire range. Unlike discrete PMFs that give exact probabilities, PDFs give density. Probability comes from integration: $P(a \\leq X \\leq b) = \\int_a^b f(x)dx$. The height $f(x)$ indicates relative likelihood but is not itself a probability. Regions with higher PDF have greater probability per unit width. For comprehensive theory on **continuous random variables**, **integration**, and **cumulative distribution functions**, see our detailed probability density function page.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj8: {
          title: `Normal Distribution Fundamentals`,
          content: `The Normal distribution, also called Gaussian, is the most important continuous distribution. Its PDF is $f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$. The parameters $\\mu$ (mean) and $\\sigma$ (standard deviation) determine location and spread. The distribution is perfectly symmetric around $\\mu$. The **68-95-99.7 rule** states that approximately 68% of values fall within one standard deviation of the mean, 95% within two, and 99.7% within three. The **Central Limit Theorem** explains why Normal distributions appear throughout nature and statistics. For detailed coverage of **z-scores**, **standardization**, and applications in **statistical inference**, see our Normal distribution theory page.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj9: {
          title: `Exponential Distribution Basics`,
          content: `The Exponential distribution models the time between events in a Poisson process. Its PDF is $f(x) = \\lambda e^{-\\lambda x}$ for $x \\geq 0$, where $\\lambda$ is the rate parameter. Both the expected value and standard deviation equal $1/\\lambda$. The distribution has the memoryless property: the probability of an event in the next interval doesn't depend on how much time has passed. This makes it unique among continuous distributions. Common applications include modeling equipment lifetimes, waiting times, and radioactive decay. For comprehensive coverage of the **Poisson process**, **memoryless property**, and connections to **reliability theory**, see our Exponential distribution page.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj10: {
          title: `Understanding Integration and Area`,
          content: `Integration calculates the area under the PDF curve, converting density into probability. The definite integral $\\int_a^b f(x)dx$ gives $P(a \\leq X \\leq b)$, the probability that $X$ falls between $a$ and $b$. For the entire range, $\\int_{-\\infty}^{\\infty} f(x)dx = 1$, ensuring probabilities sum to certainty. The CDF is the integral of the PDF from negative infinity to $x$: $F(x) = \\int_{-\\infty}^{x} f(t)dt$. Most continuous distributions lack simple closed-form solutions for these integrals, requiring numerical methods. For detailed coverage of **integration techniques**, **numerical integration**, and **CDF properties**, see our comprehensive probability theory pages.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj11: {
          title: `When to Use Each Distribution`,
          content: `Choose the Uniform distribution when all values in an interval are equally likely, such as random positions on a board or random timestamps within a window. Use the Normal distribution for measurements affected by many small independent factors, including heights, weights, test scores, and measurement errors. The **Central Limit Theorem** justifies Normal assumptions for sample means. Select the Exponential distribution for time until an event occurs, especially in memoryless scenarios like equipment failure or radioactive decay. If data shows decay that depends on history, consider other distributions like Weibull. For symmetric data with heavier tails than Normal, consider Student's t-distribution. Match your distribution choice to your data's shape and the process generating it.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj12: {
          title: `Related Probability Concepts`,
          content: `**Cumulative Distribution Function** - The CDF gives accumulated probability, calculated by integrating the PDF from negative infinity to any point.

**Discrete Probability Distributions** - For countable outcomes, use probability mass functions rather than density functions.

**Standard Normal Distribution** - The special case of Normal with mean 0 and standard deviation 1, used for **z-score** transformations.

**Central Limit Theorem** - Explains why sample means follow Normal distributions regardless of the population distribution.

**Expected Value and Variance** - Learn to calculate these summary statistics by integrating with the PDF.

**Statistical Inference** - Apply continuous distributions to **confidence intervals**, **hypothesis testing**, and **estimation**.`,
          before: ``,
          after: ``,
          link: '',
        }
      },
      faqQuestions: {
        obj1: {
          question: "What is a probability density function?",
          answer: "A probability density function (PDF) describes the relative likelihood of a continuous random variable at each point. The PDF itself gives density, not probability. Probabilities are calculated by integrating the PDF over intervals. The area under the entire PDF curve equals 1."
        },
        obj2: {
          question: "How do you calculate probability with continuous distributions?",
          answer: "Calculate probability by integrating the PDF over the desired interval. Use P(a ≤ X ≤ b) = ∫[a to b] f(x)dx. Alternatively, use the CDF: P(a ≤ X ≤ b) = F(b) - F(a), where F is the cumulative distribution function."
        },
        obj3: {
          question: "Why is the probability of an exact value zero?",
          answer: "In continuous distributions, there are infinitely many possible values. The probability of any single exact value is zero because a point has zero width. Probabilities only make sense over intervals with positive width, calculated through integration."
        },
        obj4: {
          question: "What's the difference between PDF and CDF?",
          answer: "PDF (probability density function) shows relative likelihood and requires integration to find probabilities. CDF (cumulative distribution function) directly gives P(X ≤ x) without integration. The CDF is the integral of the PDF from negative infinity to x."
        },
        obj5: {
          question: "When should you use a Normal distribution?",
          answer: "Use Normal distribution for measurements affected by many independent random factors, such as heights, weights, test scores, and errors. The Central Limit Theorem makes Normal appropriate for sample means. Normal fits symmetric data without heavy tails or extreme outliers."
        }
      }
    }
  };

  const currentConfig = viewConfig[params.view];
  const sectionsContent = currentConfig.sectionsContent;
  const faqQuestions = currentConfig.faqQuestions;
  
  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": currentConfig.name,
      "description": currentConfig.description,
      "url": `https://www.learnmathclass.com${currentConfig.url}`,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": params.view === 'discrete' ? [
        "Interactive visualization of six discrete probability distributions",
        "Real-time parameter adjustment with instant bar chart updates",
        "Binomial, Poisson, Geometric, Negative Binomial, Hypergeometric, and Discrete Uniform distributions",
        "Hover tooltips showing exact probability values to six decimal places",
        "Detailed explanations with formulas, expected values, and variance calculations",
        "Visual comparison of distribution shapes across different parameter values",
        "Educational panel with real-world applications and usage examples"
      ] : [
        "Interactive visualization of three fundamental continuous distributions",
        "Toggle between PDF (probability density) and CDF (cumulative) views",
        "Normal (Gaussian), Exponential, and Continuous Uniform distributions",
        "Real-time parameter adjustment with instant curve updates",
        "Hover tooltips showing exact density or probability values to four decimal places",
        "Detailed explanations with formulas, mean, variance, and applications",
        "Visual comparison of distribution shapes and characteristics"
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
      "keywords": currentConfig.keywords.join(", ")
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
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/probability/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Probability Functions",
          "item": "https://www.learnmathclass.com/probability/visual-tools/probability-function"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": currentConfig.name,
          "item": `https://www.learnmathclass.com${currentConfig.url}`
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
  };

  const introContent = {
    id: "intro",
    title: currentConfig.introTitle,
    content: currentConfig.introContent
  };

   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
          seoData: {
        title: currentConfig.title,
        description: currentConfig.description,
        keywords: currentConfig.keywords.join(", "),
        url: currentConfig.url,
        name: currentConfig.name
      },
      currentView: params.view,
      componentName: currentConfig.component,
      h1Title: currentConfig.h1
       }
    }
   }

export default function ProbabilityFunctionViewPage({seoData, sectionsContent, introContent, faqQuestions, schemas, currentView, componentName, h1Title}) {

    
  const genericSections=[
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
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
    }
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
   <h1 className='title' style={{marginTop:'-40px',marginBottom:'-100px'}}>{h1Title}</h1>
   <br/>
   <div style={{transform:'scale(0.8)'}}>
   {componentName === 'DiscreteProbability' && (
     <DiscreteProbabilityDistributions />
   )}
   
   {componentName === 'ContinuousProbability' && (
     <ContinuousProbabilityDistributions />
   )}
   </div>
   
   <br/>
   <SectionTableOfContents sections={genericSections}/>
   <br/>
   <br/>
   <br/>
    {/* <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          textColor="#06357a"
        /> */}
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