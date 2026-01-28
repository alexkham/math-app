


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
// import Link from 'next/link'


// export async function getStaticProps(){

//   const keyWords=[
//     'probability function',
//     'probability mass function',
//     'probability density function',
//     'PMF calculator',
//     'PDF calculator',
//     'discrete probability',
//     'continuous probability',
//     'probability distribution',
//     'interactive probability',
//     'probability visualization',
//     'distribution calculator',
//     'probability tools',
//     'PMF vs PDF',
//     'probability function examples',
//     'statistical distributions'
//   ]

//     const sectionsContent={

//     obj1:{
//       title:`What are Probability Functions?`,
//       content:`[Probability functions](!/probability/probability-function) assign probabilities to outcomes of [random variables](!/probability/random-variables). 
//       For [discrete random variables](!/probability/random-variables#types) , the probability mass function (PMF) gives the probability of each specific value. 
//       For [continuous random variables](!/probability/random-variables#types), the probability density function (PDF) describes relative likelihood over intervals.`,
//       before:``,
//       after:``,
//       link:'/probability/probability-function',
  
  
//     },
//     obj2:{
//       title:`Discrete vs Continuous Distributions`,
//       content:`[Discrete distributions](!/probability/distributions/discrete) apply to countable outcomes like coin flips, dice rolls, or customer counts. 
//       The PMF gives exact probabilities for specific values. 
//       [Continuous distributions](!/probability/distributions/continuous) describe measurable quantities like height, weight, or time. 
//       The PDF requires integration over intervals to calculate probabilities.`,
//       before:``,
//       after:``,
//       link:'/probability/distributions',
  
//     },
  
//     obj3:{
  
//       title:`Interactive Visualization Tools`,
//       content:`Our interactive tools let you explore probability functions through real-time visualization. Adjust distribution parameters and instantly see how the probability function changes. Compare discrete and continuous distributions to understand their fundamental differences.`,
//       before:``,
//       after:``,
//       link:'/probability/visual-tools',
  
//     }
  
//   }


//   const introContent = {
//   id: "intro",
//   title: "Interactive Probability Function Visualizers",
//   content: `Explore probability functions through interactive tools. Select discrete distributions to work with probability mass functions (PMF) or continuous distributions for probability density functions (PDF).`
// }

//   const faqQuestions = {
//     obj1: {
//       question: "What is the difference between PMF and PDF?",
//       answer: "PMF (probability mass function) applies to discrete random variables with countable outcomes and gives exact probabilities for specific values. PDF (probability density function) applies to continuous random variables and gives density values, requiring integration over intervals to calculate probabilities."
//     },
//     obj2: {
//       question: "When should I use discrete probability distributions?",
//       answer: "Use discrete probability distributions when outcomes are countable, such as number of successes, number of events, or any whole number counts. Examples include coin flips, dice rolls, customer arrivals, or defect counts."
//     },
//     obj3: {
//       question: "When should I use continuous probability distributions?",
//       answer: "Use continuous probability distributions for measurements that can take any value in an interval, such as height, weight, time, temperature, or distance. These variables have infinite possible values within their range."
//     },
//     obj4: {
//       question: "How do probability functions assign probabilities?",
//       answer: "For discrete variables, the PMF assigns a probability to each specific value, with all probabilities summing to 1. For continuous variables, the PDF assigns density, and probabilities are found by integrating the PDF over intervals."
//     },
//     obj5: {
//       question: "What are the most common probability distributions?",
//       answer: "Common discrete distributions include Binomial, Poisson, and Geometric. Common continuous distributions include Normal (Gaussian), Exponential, and Uniform. The Normal distribution is the most widely used in statistics."
//     }
//   }

//   const schemas = {
//     webApplication: {
//       "@context": "https://schema.org",
//       "@type": "WebApplication",
//       "name": "Probability Functions Visualizer",
//       "description": "Interactive probability function tools for discrete (PMF) and continuous (PDF) distributions. Visualize Binomial, Poisson, Normal, Exponential and more with real-time calculations.",
//       "url": "https://www.learnmathclass.com/probability/visual-tools/probability-function",
//       "applicationCategory": "EducationalApplication",
//       "operatingSystem": "Any",
//       "offers": {
//         "@type": "Offer",
//         "price": "0",
//         "priceCurrency": "USD"
//       },
//       "featureList": [
//         "Interactive discrete probability distributions with PMF visualization",
//         "Interactive continuous probability distributions with PDF and CDF visualization",
//         "Real-time parameter adjustment for all distributions",
//         "Binomial, Poisson, Geometric, Negative Binomial, Hypergeometric distributions",
//         "Normal, Exponential, and Uniform distributions",
//         "Detailed mathematical explanations with formulas",
//         "Educational tool for learning probability theory"
//       ],
//       "author": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       },
//       "datePublished": "2024-01-15",
//       "dateModified": new Date().toISOString(),
//       "inLanguage": "en-US",
//       "isAccessibleForFree": true,
//       "learningResourceType": "Interactive Tool",
//       "educationalLevel": "High School, College",
//       "keywords": keyWords.join(", ")
//     },
//     breadcrumb: {
//       "@context": "https://schema.org",
//       "@type": "BreadcrumbList",
//       "itemListElement": [
//         {
//           "@type": "ListItem",
//           "position": 1,
//           "name": "Home",
//           "item": "https://www.learnmathclass.com"
//         },
//         {
//           "@type": "ListItem",
//           "position": 2,
//           "name": "Probability",
//           "item": "https://www.learnmathclass.com/probability"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Visual Tools",
//           "item": "https://www.learnmathclass.com/probability/visual-tools"
//         },
//         {
//           "@type": "ListItem",
//           "position": 4,
//           "name": "Probability Functions",
//           "item": "https://www.learnmathclass.com/probability/visual-tools/probability-function"
//         }
//       ]
//     },
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
//   }


//    return {
//       props:{
//          sectionsContent,
//          introContent,
//          faqQuestions,
//          schemas,
//           seoData: {
//         title: "Probability Functions - Interactive PMF & PDF Visualizers | Learn Math Class",
//         description: "Interactive probability function tools for discrete (PMF) and continuous (PDF) distributions. Visualize Binomial, Poisson, Normal, Exponential and more with real-time calculations.",
//         keywords: keyWords.join(", "),
//         url: "/probability/visual-tools/probability-function",
//          name: "Probability Functions"
//       },
        
//        }
//     }
//    }

// export default function ProbabilityFunctionPage({seoData,sectionsContent , introContent, faqQuestions, schemas}) {

    
//   const genericSections=[
//     {
//         id:'1',
//         title:sectionsContent.obj1.title,
//         link:sectionsContent.obj1.link,
//         content:[
//           sectionsContent.obj1.content,
//         ]
//     },
//     {
//         id:'2',
//         title:sectionsContent.obj2.title,
//         link:sectionsContent.obj2.link,
//         content:[
//           sectionsContent.obj2.content,
//         ]
//     },
//     {
//         id:'3',
//         title:sectionsContent.obj3.title,
//         link:sectionsContent.obj3.link,
//         content:[
//           sectionsContent.obj3.content,
//         ]
//     }
// ]

// const cardStyles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '20px',
//     margin: '40px 0',
//     flexWrap: 'wrap',
//     maxWidth: '1200px',
//     marginLeft: 'auto',
//     marginRight: 'auto'
//   },
//   card: {
//     border: '2px solid #e2e8f0',
//     borderRadius: '8px',
//     padding: '30px',
//     width: '280px',
//     textAlign: 'center',
//     backgroundColor: 'white',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//     transition: 'transform 0.2s, box-shadow 0.2s',
//     cursor: 'pointer',
//     textDecoration: 'none',
//     color: 'inherit'
//   },
//   title: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     color: '#2563eb',
//     marginBottom: '15px'
//   },
//   description: {
//     fontSize: '16px',
//     color: '#4b5563',
//     lineHeight: '1.5'
//   }
// }

//   return (
//    <>
//    <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
//   <meta property="og:title" content={seoData.title} />
//   <meta property="og:description" content={seoData.description} />
//   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//   <meta property="og:type" content="article" />
//   <meta property="og:site_name" content="Learn Math Class" />
  
//   <meta name="twitter:card" content="summary" />
//   <meta name="twitter:title" content={seoData.title} />
//   <meta name="twitter:description" content={seoData.description} />
  
//   <meta name="robots" content="index, follow" />
  
//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.webApplication)
//     }}
//   />
  
//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.breadcrumb)
//     }}
//   />
  
//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.faq)
//     }}
//   />
// </Head>
//    {/* <GenericNavbar/> */}
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     <OperaSidebar 
//            side='right'
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          /> 
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Probability Functions</h1>
//    <br/>
//    <br/>
   
//    <div style={cardStyles.container}>
//      <Link href="/probability/visual-tools/probability-function/discrete" style={cardStyles.card}>
//        <div style={cardStyles.title}>Discrete Distributions</div>
//        <div style={cardStyles.description}>
//          Explore probability mass functions (PMF) for Binomial, Poisson, Geometric, and other discrete distributions.
//        </div>
//      </Link>
     
//      <Link href="/probability/visual-tools/probability-function/continuous" style={cardStyles.card}>
//        <div style={cardStyles.title}>Continuous Distributions</div>
//        <div style={cardStyles.description}>
//          Visualize probability density functions (PDF) for Normal, Exponential, Uniform, and other continuous distributions.
//        </div>
//      </Link>
//    </div>
   
//    <br/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//     {/* <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           textColor="#06357a"
//         /> */}
//    <br/>
//    <br/>
//    <Sections sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
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
import Link from 'next/link'


export async function getStaticProps(){

  const keyWords = [
    "probability function",
    "probability mass function",
    "probability density function",
    "PMF visualizer",
    "PDF visualizer",
    "discrete probability distribution",
    "continuous probability distribution",
    "PMF vs PDF",
    "interactive probability distributions",
    "distribution visualizer",
    "binomial distribution calculator",
    "normal distribution visualizer",
    "Poisson distribution tool",
    "probability function calculator",
    "random variable distributions"
  ]

  const sectionsContent = {

    obj1: {
      title: `What are Probability Functions?`,
      content: `A [probability function](!/probability/probability-function) assigns probabilities to outcomes of a [random variable](!/probability/random-variables). The type of function depends on whether the variable is discrete or continuous.

For discrete random variables, the [probability mass function (PMF)](!/probability/probability-function/pmf) gives the exact probability that the variable equals each specific value. The PMF satisfies two properties: every probability is between 0 and 1, and all probabilities sum to exactly 1.

For continuous random variables, the [probability density function (PDF)](!/probability/probability-function/pdf) describes relative likelihood across a range of values. Unlike the PMF, the PDF value at a point is not a probability—it's a density. Probabilities are found by integrating the PDF over intervals. The total area under any PDF equals 1.

These visualization tools let you explore both types interactively, seeing how parameters affect the shape and spread of each distribution.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Discrete vs Continuous Distributions`,
      content: `The fundamental distinction in probability theory is between [discrete](!/probability/distributions/discrete) and [continuous](!/probability/distributions/continuous) random variables.

**Discrete distributions** apply to countable outcomes. Examples include:
• Number of heads in coin flips (Binomial)
• Customer arrivals per hour (Poisson)
• Trials until first success (Geometric)
• Defects in a sample (Hypergeometric)

The PMF gives exact probabilities like P(X = 5) = 0.246.

**Continuous distributions** apply to measurements taking any value in an interval. Examples include:
• Heights and weights (Normal)
• Time until failure (Exponential)
• Random positions (Uniform)

The PDF requires integration: P(2 ≤ X ≤ 5) = ∫f(x)dx from 2 to 5.

The discrete tool displays bar charts showing individual probabilities. The continuous tool shows smooth curves with a PDF/CDF toggle to switch between density and cumulative views.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Available Distributions`,
      content: `The visualization tools cover nine fundamental distributions used throughout probability and statistics.

**Discrete Distributions (6 types):**

• Discrete Uniform: Equal probability for each value in a range
• [Binomial](!/probability/distributions/discrete/binomial): Successes in n independent trials
• [Geometric](!/probability/distributions/discrete/geometric): Trials until first success
• [Negative Binomial](!/probability/distributions/discrete/negative-binomial): Trials until r successes
• [Hypergeometric](!/probability/distributions/discrete/hypergeometric): Sampling without replacement
• [Poisson](!/probability/distributions/discrete/poisson): Events at constant average rate

**Continuous Distributions (3 types):**

• [Uniform](!/probability/distributions/continuous/uniform): Constant density over an interval
• [Normal](!/probability/distributions/continuous/normal): Bell-shaped curve, symmetric around mean
• [Exponential](!/probability/distributions/continuous/exponential): Time between Poisson events

Each distribution has adjustable parameters so you can explore how changing n, p, λ, μ, or σ affects the shape.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Key Concepts in Probability Functions`,
      content: `Understanding probability functions requires grasping several foundational concepts:

**Expected Value**: The long-run average of the random variable, calculated as E[X] = Σx·P(X=x) for discrete or E[X] = ∫x·f(x)dx for continuous. See the [expected value](!/probability/expected-value) page for detailed theory.

**Variance**: Measures spread around the mean. [Variance](!/probability/variance) equals E[(X-μ)²] and determines distribution width.

**Cumulative Distribution Function**: The [CDF](!/probability/cdf) gives P(X ≤ x), showing accumulated probability up to any point. For continuous distributions, the CDF is the integral of the PDF.

**Parameters**: Each distribution has parameters controlling its shape. Binomial has n and p; Normal has μ and σ; Poisson has λ. The visualizers let you adjust these and see immediate effects.

These concepts connect across all distributions, making it valuable to explore multiple distributions and observe common patterns.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Related Tools and Resources`,
      content: `These probability function visualizers connect to other tools and theory pages on the site:

**Related Visual Tools:**

• [Expected Value Visualizer](!/probability/visual-tools/expected-value) shows how E[X] relates to distribution shape

• [Variance Visualizer](!/probability/visual-tools/variance) demonstrates spread around the mean

• [CDF Visualizers](!/probability/visual-tools/cdf) focus specifically on cumulative distribution

• [Distribution Visualizers](!/probability/visual-tools/distributions) provide additional distribution tools

**Theory Pages:**

• [Probability Function](!/probability/probability-function) covers PMF and PDF theory in depth

• [Random Variables](!/probability/random-variables) explains discrete vs continuous variables

• [Probability Distributions](!/probability/distributions) provides comprehensive distribution coverage

**Calculators:**

• [Discrete Distribution Calculators](!/probability/calculators/discrete-distributions) compute exact probabilities

• [Continuous Distribution Calculators](!/probability/calculators/continuous-distributions) handle integration`,
      before: ``,
      after: ``,
      link: '',
    },

  }

  const introContent = {
    id: "intro",
    title: "Interactive Probability Function Visualizers",
    content: `Explore probability mass functions (PMF) for discrete distributions and probability density functions (PDF) for continuous distributions. Each tool provides interactive parameter controls, real-time chart updates, and detailed explanations with formulas for six discrete and three continuous distributions.`
  }

  const faqQuestions = {
    obj1: {
      question: "What is the difference between PMF and PDF?",
      answer: "PMF (probability mass function) applies to discrete random variables and gives exact probabilities for specific values like P(X=5). PDF (probability density function) applies to continuous random variables and gives density values. For PDFs, probabilities require integration over intervals since P(X=exact value) = 0 for continuous variables."
    },
    obj2: {
      question: "Which distributions are available in these tools?",
      answer: "The discrete visualizer includes six distributions: Discrete Uniform, Binomial, Geometric, Negative Binomial, Hypergeometric, and Poisson. The continuous visualizer includes three distributions: Continuous Uniform, Normal (Gaussian), and Exponential. Each has adjustable parameters."
    },
    obj3: {
      question: "How do I choose between discrete and continuous distributions?",
      answer: "Use discrete distributions when outcomes are countable (whole numbers like counts, successes, or arrivals). Use continuous distributions for measurements that can take any value in a range (like height, time, or temperature). The nature of your random variable determines which type applies."
    },
    obj4: {
      question: "What does the CDF toggle show in the continuous visualizer?",
      answer: "The CDF (cumulative distribution function) shows P(X ≤ x) at each point. While PDF shows density (relative likelihood), CDF shows accumulated probability. The CDF always increases from 0 to 1 and directly gives probabilities without integration."
    },
    obj5: {
      question: "Why do probability density values sometimes exceed 1?",
      answer: "PDF values are densities, not probabilities, so they can exceed 1. Probability comes from area under the curve, not height. A narrow distribution concentrated in a small interval will have high density but the total area still equals 1."
    }
  }

  const schemas = {
    collectionPage: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Probability Function Visualization Tools",
      "description": "Interactive visual tools for exploring probability mass functions (PMF) and probability density functions (PDF) across nine distributions.",
      "url": "https://www.learnmathclass.com/probability/visual-tools/probability-function",
      "inLanguage": "en-US",
      "about": {
        "@type": "Thing",
        "name": "Probability Functions"
      },
      "keywords": keyWords.join(", "),
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "hasPart": [
        {
          "@type": "WebPage",
          "name": "Discrete Probability Distribution Visualizer",
          "url": "https://www.learnmathclass.com/probability/visual-tools/probability-function/discrete",
          "description": "Interactive PMF visualizer for six discrete distributions with parameter controls"
        },
        {
          "@type": "WebPage",
          "name": "Continuous Probability Distribution Visualizer",
          "url": "https://www.learnmathclass.com/probability/visual-tools/probability-function/continuous",
          "description": "Interactive PDF/CDF visualizer for three continuous distributions with parameter controls"
        }
      ]
    },

    itemList: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Discrete Probability Distribution Visualizer",
            "url": "https://www.learnmathclass.com/probability/visual-tools/probability-function/discrete",
            "applicationCategory": "EducationalApplication",
            "description": "Interactive tool for visualizing PMF of Binomial, Poisson, Geometric, and other discrete distributions"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Continuous Probability Distribution Visualizer",
            "url": "https://www.learnmathclass.com/probability/visual-tools/probability-function/continuous",
            "applicationCategory": "EducationalApplication",
            "description": "Interactive tool for visualizing PDF and CDF of Normal, Exponential, and Uniform distributions"
          }
        }
      ]
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
  }

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Probability Functions - Interactive PMF & PDF Visualizers | Learn Math Class",
        description: "Interactive probability function visualizers for 9 distributions. Explore PMF for discrete and PDF/CDF for continuous distributions with real-time parameter controls.",
        keywords: keyWords.join(", "),
        url: "/probability/visual-tools/probability-function",
        name: "Probability Function Visualization Tools"
      },
    }
  }
}

export default function ProbabilityFunctionPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

  const genericSections = [
    {
      id: '1',
      title: 'What are Probability Functions?',
      link: '',
      content: sectionsContent.obj1.content
    },
    {
      id: '2',
      title: 'Discrete vs Continuous Distributions',
      link: '',
      content: sectionsContent.obj2.content
    },
    {
      id: '3',
      title: 'Available Distributions',
      link: '',
      content: sectionsContent.obj3.content
    },
    {
      id: '4',
      title: 'Key Concepts in Probability Functions',
      link: '',
      content: sectionsContent.obj4.content
    },
    {
      id: '5',
      title: 'Related Tools and Resources',
      link: '',
      content: sectionsContent.obj5.content
    }
  ]

  const cardStyles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      margin: '40px 0',
      flexWrap: 'wrap',
      maxWidth: '1200px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    card: {
      border: '2px solid #e2e8f0',
      borderRadius: '8px',
      padding: '30px',
      width: '280px',
      textAlign: 'center',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'inherit'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#2563eb',
      marginBottom: '15px'
    },
    description: {
      fontSize: '16px',
      color: '#4b5563',
      lineHeight: '1.5'
    }
  }

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
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Learn Math Class" />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        
        <meta name="robots" content="index, follow" />
        
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(schemas.collectionPage)
          }}
        />

        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(schemas.itemList)
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
      <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Probability Functions</h1>
      <br/>
      <br/>
      
      <div style={cardStyles.container}>
        <Link href="/probability/visual-tools/probability-function/discrete" style={cardStyles.card}>
          <div style={cardStyles.title}>Discrete Distributions</div>
          <div style={cardStyles.description}>
            Explore PMF for 6 distributions: Binomial, Poisson, Geometric, Negative Binomial, Hypergeometric, and Discrete Uniform with parameter sliders.
          </div>
        </Link>
        
        <Link href="/probability/visual-tools/probability-function/continuous" style={cardStyles.card}>
          <div style={cardStyles.title}>Continuous Distributions</div>
          <div style={cardStyles.description}>
            Visualize PDF and CDF for Normal, Exponential, and Uniform distributions. Toggle between density and cumulative views.
          </div>
        </Link>
      </div>
      
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