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

//   const keyWords = [
//     "expected value visualization",
//     "expected value calculator",
//     "weighted average probability",
//     "discrete expected value",
//     "continuous expected value",
//     "mean of random variable",
//     "probability weighted average",
//     "expected value examples",
//     "interactive expected value",
//     "E[X] calculator",
//     "probability distribution mean",
//     "expected value formula",
//     "visual probability tools",
//     "expected value interactive"
//   ];

//     const sectionsContent={

//     obj1:{
//       title:`What is Expected Value?`,
//       content:`Expected value is the long-run average value of a random variable over many repetitions. It represents the center or "expected" outcome, calculated as a probability-weighted average of all possible values.`,
//       before:``,
//       after:``,
//       link:'#what-is-expected-value',
//     },
//     obj2:{
//       title:`Types of Expected Value`,
//       content:`Expected value calculations differ based on whether the random variable is discrete (countable outcomes) or continuous (infinite possible values in a range). Each requires different visualization approaches.`,
//       before:``,
//       after:``,
//       link:'#types',
//     },
  
//     obj3:{
//       title:`Applications`,
//       content:`Expected value is fundamental in decision theory, finance, insurance, game theory, and risk assessment. It helps quantify average outcomes when dealing with uncertainty.`,
//       before:``,
//       after:``,
//       link:'#applications',
//     }
  
//   }


//   const introContent = {
//   id: "intro",
//   title: "Interactive Expected Value Tools",
//   content: `Explore expected value through interactive visualizations. See how probability weights combine with outcomes to produce the long-run average.`
// }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Expected Value Visualizations - Interactive Tools | Learn Math Class",
//         description: "Interactive expected value visualization tools for discrete and continuous distributions. Calculate and visualize E[X] with step-by-step explanations.",
//         keywords: keyWords.join(", "),
//         url: "/probability/visual-tools/expected-value",
//          name: "Expected Value Visualizations"
//       },
        
//        }
//     }
//    }

// export default function ExpectedValueLanding({seoData,sectionsContent , introContent}) {

    
//   const genericSections=[
//     {
//         id:'1',
//         title: sectionsContent.obj1.title,
//         link: sectionsContent.obj1.link,
//         content: sectionsContent.obj1.content
//     },
//     {
//         id:'2',
//         title: sectionsContent.obj2.title,
//         link: sectionsContent.obj2.link,
//         content: sectionsContent.obj2.content
//     },
//     {
//         id:'3',
//         title: sectionsContent.obj3.title,
//         link: sectionsContent.obj3.link,
//         content: sectionsContent.obj3.content
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
//       __html: JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "WebPage",
//         "name": seoData.name,
//         "description": seoData.description,
//         "keywords": seoData.keywords,
//         "url": `https://www.learnmathclass.com${seoData.url}`,
//         "dateModified": new Date().toISOString(),
//         "inLanguage": "en-US",
//         "mainEntity": {
//           "@type": "Article",
//           "name": seoData.name,
//           "dateModified": new Date().toISOString(),
//           "author": {
//             "@type": "Organization",
//             "name": "Learn Math Class"
//           }
//         }
//       })
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
//    <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Expected Value Visualizations</h1>
//    <br/>
//    <br/>
   
//    <div style={cardStyles.container}>
       
//      <Link href="/probability/visual-tools/expected-value/weighted" style={cardStyles.card}>
//        <div style={cardStyles.title}>Weighted Expected Value</div>
//        <div style={cardStyles.description}>
//          Visualize expected value as a weighted average with interactive probability weights.
//        </div>
//      </Link>

//       <Link href="/probability/visual-tools/expected-value/discrete" style={cardStyles.card}>
//        <div style={cardStyles.title}>Discrete Expected Value</div>
//        <div style={cardStyles.description}>
//          Calculate expected value for discrete random variables with probability mass functions.
//        </div>
//      </Link>
//    </div>
   
//    <br/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//     <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           textColor="#06357a"
//         />
//    <br/>
//    <br/>
//    <Sections sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//    <ScrollUpButton/>
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
    "expected value visualization",
    "expected value calculator",
    "E[X] calculator",
    "weighted average probability",
    "discrete expected value",
    "probability weighted average",
    "mean of random variable",
    "expected value formula",
    "interactive expected value",
    "expected value examples",
    "probability distribution mean",
    "visual expected value",
    "expected value tool",
    "calculate expected value",
    "expected value interactive"
  ]

  const sectionsContent = {

    obj1: {
      title: `What is Expected Value?`,
      content: `[Expected value](!/probability/expected-value) represents the long-run average outcome of a random variable over many repetitions. Denoted E[X] or μ, it measures the center of a probability distribution—the value you would "expect" on average if you repeated an experiment infinitely many times.

The expected value is calculated as a probability-weighted average. Unlike a simple average where all values contribute equally, expected value weights each outcome by its probability of occurrence. High-probability outcomes influence the result more than low-probability outcomes.

$$E[X] = \\sum_{i} x_i \\cdot P(X = x_i)$$

For discrete [random variables](!/probability/random-variables), this formula sums each possible value multiplied by its probability. The visualization tools on this page demonstrate how probability weights "pull" the expected value toward high-probability outcomes.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Expected Value vs Simple Average`,
      content: `A key insight from these visualizations is the difference between expected value and simple average. The simple average treats all values equally:

$$\\text{Simple Average} = \\frac{x_1 + x_2 + ... + x_n}{n}$$

Expected value weights by probability:

$$E[X] = x_1 \\cdot p_1 + x_2 \\cdot p_2 + ... + x_n \\cdot p_n$$

When all outcomes have equal probability (like a fair die), these two values are identical. When probabilities differ, expected value shifts toward high-probability outcomes. The weighted visualization tool demonstrates this "pulling" effect—larger probability weights exert stronger pull on E[X].

This distinction matters in real applications. A biased die, a loaded game, or any situation with unequal probabilities requires expected value, not simple averaging.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Visualization Approaches`,
      content: `Two complementary tools help build intuition for expected value:

**Weighted Expected Value Visualizer** shows probability as physical "weights" that pull the expected value along a number line. Preset distributions like "Pull Right," "Pull Left," and "Pull Center" demonstrate how probability concentration affects E[X]. An animation mode cycles through distributions automatically.

**Discrete Expected Value Visualization** displays a bar chart of the probability mass function with adjustable sliders. Each bar shows P(X = x), and the contribution x · P(X = x) appears inside each bar. The red dashed line marks E[X], moving as you adjust probabilities.

Both tools normalize probabilities automatically, ensuring they sum to 1. This lets you focus on relative probability weights without worrying about the constraint.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Applications of Expected Value`,
      content: `Expected value appears throughout probability, statistics, and decision-making:

**Decision Theory**: Compare options by their expected outcomes. Choose the action with highest expected value (or lowest expected cost).

**Finance**: Calculate expected returns on investments, expected portfolio values, and risk-adjusted returns.

**Insurance**: Price policies based on expected claims. Premium must exceed expected payout for profitability.

**Game Theory**: Analyze strategies by their expected payoffs. Fair games have E[X] = 0 for net winnings.

**Quality Control**: Predict average defect rates, expected production yields, and mean time between failures.

The [variance](!/probability/variance) measures spread around expected value. Together, E[X] and Var(X) characterize a distribution's center and dispersion.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Related Concepts and Calculators`,
      content: `Expected value connects to many probability concepts on this site:

**Theory Pages:**

• [Expected Value](!/probability/expected-value) covers complete theory and formulas

• [Variance](!/probability/variance) measures spread around E[X]

• [Random Variables](!/probability/random-variables) explains discrete and continuous types

• [Probability Distributions](!/probability/distributions) covers common distributions and their expected values

**Calculators:**

• [Expected Value Calculators](!/probability/calculators/expected-value) compute E[X] for various inputs

• [Discrete Distribution Calculators](!/probability/calculators/discrete-distributions) include expected value for specific distributions

**Visual Tools:**

• [Variance Visualizer](!/probability/visual-tools/variance) shows spread around the mean

• [Distribution Visualizers](!/probability/visual-tools/distributions) display PMFs and CDFs with expected value markers`,
      before: ``,
      after: ``,
      link: '',
    },

  }

  const introContent = {
    id: "intro",
    title: "Interactive Expected Value Visualizations",
    content: `Explore expected value through two interactive tools. The weighted visualizer shows how probability "weights" pull E[X] toward high-probability outcomes. The discrete visualizer lets you adjust probabilities and see how each value contributes to the expected value. Both tools demonstrate why expected value is called a probability-weighted average.`
  }

  const faqQuestions = {
    obj1: {
      question: "What is expected value in probability?",
      answer: "Expected value E[X] is the long-run average outcome of a random variable. It equals the sum of each possible value multiplied by its probability: E[X] = Σ xᵢ · P(X = xᵢ). Unlike a simple average, expected value weights outcomes by their likelihood of occurrence."
    },
    obj2: {
      question: "How is expected value different from average?",
      answer: "A simple average treats all values equally (sum divided by count). Expected value weights each value by its probability. When all outcomes are equally likely, they're the same. When probabilities differ, expected value shifts toward high-probability outcomes."
    },
    obj3: {
      question: "What do the visualization tools show?",
      answer: "The weighted visualizer shows probability as physical weights pulling E[X] along a number line. The discrete visualizer displays a bar chart where you can adjust probabilities with sliders and see each value's contribution to E[X]. Both demonstrate the probability-weighted average concept."
    },
    obj4: {
      question: "Can expected value be a non-integer?",
      answer: "Yes. Expected value is often not a possible outcome of the random variable. For a fair die, E[X] = 3.5, which you can never actually roll. Expected value represents the theoretical long-run average, not a specific outcome."
    },
    obj5: {
      question: "Why is expected value important?",
      answer: "Expected value helps make decisions under uncertainty. It's used in finance (expected returns), insurance (pricing policies), game theory (fair games), and quality control (average defect rates). It provides a single number summarizing the center of a probability distribution."
    }
  }

  const schemas = {
    collectionPage: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Expected Value Visualization Tools",
      "description": "Interactive visual tools for understanding expected value including weighted average visualizer and discrete distribution calculator.",
      "url": "https://www.learnmathclass.com/probability/visual-tools/expected-value",
      "inLanguage": "en-US",
      "about": {
        "@type": "Thing",
        "name": "Expected Value"
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
          "name": "Weighted Expected Value Visualizer",
          "url": "https://www.learnmathclass.com/probability/visual-tools/expected-value/weighted",
          "description": "Interactive visualization showing expected value as probability-weighted average with pulling weights"
        },
        {
          "@type": "WebPage",
          "name": "Discrete Expected Value Visualization",
          "url": "https://www.learnmathclass.com/probability/visual-tools/expected-value/discrete",
          "description": "Interactive bar chart with adjustable probabilities for calculating discrete expected value"
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
            "name": "Weighted Expected Value Visualizer",
            "url": "https://www.learnmathclass.com/probability/visual-tools/expected-value/weighted",
            "applicationCategory": "EducationalApplication",
            "description": "Interactive tool showing expected value as weighted average with visual probability weights"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Discrete Expected Value Visualization",
            "url": "https://www.learnmathclass.com/probability/visual-tools/expected-value/discrete",
            "applicationCategory": "EducationalApplication",
            "description": "Interactive bar chart calculator for discrete expected value"
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
          "name": "Expected Value Visualizations",
          "item": "https://www.learnmathclass.com/probability/visual-tools/expected-value"
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
        title: "Expected Value Visualizations - Interactive Tools | Learn Math Class",
        description: "Interactive expected value visualization tools. See how probability weights pull E[X] toward high-probability outcomes with weighted and discrete visualizers.",
        keywords: keyWords.join(", "),
        url: "/probability/visual-tools/expected-value",
        name: "Expected Value Visualization Tools"
      },
    }
  }
}

export default function ExpectedValueLanding({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

  const genericSections = [
    {
      id: '1',
      title: 'What is Expected Value?',
      link: '',
      content: sectionsContent.obj1.content
    },
    {
      id: '2',
      title: 'Expected Value vs Simple Average',
      link: '',
      content: sectionsContent.obj2.content
    },
    {
      id: '3',
      title: 'Visualization Approaches',
      link: '',
      content: sectionsContent.obj3.content
    },
    {
      id: '4',
      title: 'Applications of Expected Value',
      link: '',
      content: sectionsContent.obj4.content
    },
    {
      id: '5',
      title: 'Related Concepts and Calculators',
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
      <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Expected Value Visualizations</h1>
      <br/>
      <br/>
      
      <div style={cardStyles.container}>
        <Link href="/probability/visual-tools/expected-value/weighted" style={cardStyles.card}>
          <div style={cardStyles.title}>Weighted Expected Value</div>
          <div style={cardStyles.description}>
            See how probability "weights" pull E[X] toward high-probability outcomes. Includes preset distributions and animation mode.
          </div>
        </Link>

        <Link href="/probability/visual-tools/expected-value/discrete" style={cardStyles.card}>
          <div style={cardStyles.title}>Discrete Expected Value</div>
          <div style={cardStyles.description}>
            Adjust probabilities with sliders and see each value's contribution to E[X] in an interactive bar chart.
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