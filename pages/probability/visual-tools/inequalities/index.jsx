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
//     "probability inequalities",
//     "Markov inequality",
//     "Chebyshev inequality",
//     "probability bounds",
//     "tail probability bounds",
//     "concentration inequalities",
//     "probability theory tools",
//     "statistical inequalities",
//     "distribution bounds",
//     "probability upper bounds",
//     "variance bounds",
//     "expected value inequalities",
//     "interactive probability inequalities",
//     "probability visualization"
//   ];

//     const sectionsContent={

//     obj1:{
//       title:`What are Probability Inequalities?`,
//       content:`Probability inequalities provide upper bounds on the probability of events without requiring full knowledge of the distribution. They are fundamental tools in probability theory and statistics.`,
//       before:``,
//       after:``,
//       link:'#what-are-inequalities',
//     },
//     obj2:{
//       title:`Why Use Inequalities?`,
//       content:`When we know limited information about a random variable (like its mean or variance), inequalities let us bound probabilities and make guarantees about tail behavior.`,
//       before:``,
//       after:``,
//       link:'#why-use-inequalities',
//     },
  
//     obj3:{
//       title:`Applications`,
//       content:`Probability inequalities are used in statistical inference, machine learning convergence proofs, algorithm analysis, and risk assessment across various fields.`,
//       before:``,
//       after:``,
//       link:'#applications',
//     }
  
//   }


//   const introContent = {
//   id: "intro",
//   title: "Interactive Probability Inequality Tools",
//   content: `Explore fundamental probability inequalities through interactive visualizations. See how these bounds work across different distributions and parameter settings.`
// }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Probability Inequalities - Interactive Visualizations | Learn Math Class",
//         description: "Interactive tools for Markov and Chebyshev inequalities. Visualize probability bounds across multiple distributions with step-by-step explanations.",
//         keywords: keyWords.join(", "),
//         url: "/probability/visual-tools/inequalities",
//          name: "Probability Inequalities"
//       },
        
//        }
//     }
//    }

// export default function InequalitiesLanding({seoData,sectionsContent , introContent}) {

    
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
//    <GenericNavbar/>
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
//    <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Probability Inequalities</h1>
//    <br/>
//    <br/>
   
//    <div style={cardStyles.container}>
//      <Link href="/probability/visual-tools/inequalities/markov" style={cardStyles.card}>
//        <div style={cardStyles.title}>Markov Inequality</div>
//        <div style={cardStyles.description}>
//          Bound tail probabilities using only the expected value. P(X ≥ a) ≤ E[X] / a
//        </div>
//      </Link>
     
//      <Link href="/probability/visual-tools/inequalities/chebyshev" style={cardStyles.card}>
//        <div style={cardStyles.title}>Chebyshev Inequality</div>
//        <div style={cardStyles.description}>
//          Bound deviations from the mean using variance. P(|X - μ| ≥ a) ≤ σ² / a²
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
    "probability inequalities",
    "Markov inequality",
    "Chebyshev inequality",
    "probability bounds",
    "tail probability",
    "concentration inequalities",
    "probability upper bounds",
    "distribution-free bounds",
    "variance bounds",
    "expected value bounds",
    "probability theory inequalities",
    "statistical inequalities",
    "tail bounds visualization",
    "interactive probability bounds",
    "Chebyshev vs Markov"
  ]

  const sectionsContent = {

    obj1: {
      title: `What are Probability Inequalities?`,
      content: `Probability inequalities provide upper bounds on the probability of events using limited information about a distribution. Instead of requiring the complete probability distribution, these bounds use summary statistics like [expected value](!/probability/expected-value) or [variance](!/probability/variance).

The key insight: even with incomplete knowledge, we can still make guaranteed statements about probability. If we know only E[X], Markov's inequality bounds tail probabilities. If we also know variance, Chebyshev's inequality provides tighter bounds.

These bounds are called "distribution-free" because they apply to any distribution satisfying minimal conditions. The tradeoff is that distribution-free bounds are often conservative—the actual probability is typically much smaller than the bound.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Markov vs Chebyshev Inequality`,
      content: `The two fundamental probability inequalities differ in requirements and strength:

**Markov Inequality** requires only:
• X is non-negative
• E[X] is known
• Bound: P(X ≥ a) ≤ E[X] / a

**Chebyshev Inequality** requires:
• E[X] = μ is known
• Var(X) = σ² is known
• Bound: P(|X - μ| ≥ a) ≤ σ² / a²

Chebyshev uses more information (variance) and produces tighter bounds. Both inequalities become tighter as the threshold increases—the further into the tail you look, the smaller the probability and the more useful the bound becomes.

The visualization tools demonstrate both bounds across multiple distributions, showing how they compare to actual tail probabilities.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `When Bounds Are Useful`,
      content: `Probability bounds are most valuable when:

• The exact distribution is unknown but summary statistics are available
• You need worst-case guarantees rather than exact probabilities
• You're proving theoretical results about convergence or concentration
• Quick estimates are needed without complex calculations

The bounds become tighter (more useful) when:

• The threshold is far from the mean
• Variance is small relative to the threshold
• The actual distribution is well-behaved (not heavy-tailed)

The bounds are loose (less useful) when:

• The threshold is close to or below the mean
• The distribution has high variance or heavy tails
• You need precise probability values`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Applications of Probability Inequalities`,
      content: `Probability inequalities appear throughout mathematics, statistics, and computer science:

**Theoretical Statistics**: Proving the [weak law of large numbers](!/probability/central-limit-theorem), convergence of estimators, and consistency of statistical procedures.

**Algorithm Analysis**: Bounding worst-case running times, analyzing randomized algorithms, and proving probabilistic guarantees.

**Machine Learning**: Generalization bounds, PAC learning theory, and concentration of empirical risk around true risk.

**Quality Control**: Setting tolerance limits, determining sample sizes, and bounding defect rates.

**Risk Management**: Worst-case loss bounds, Value at Risk approximations, and insurance reserve calculations.

These applications share a common need: making reliable probability statements with incomplete information.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Related Concepts and Tools`,
      content: `Probability inequalities connect to many concepts on this site:

**Theory Pages:**

• [Markov Inequality](!/probability/inequalities/markov) covers the complete theory

• [Chebyshev Inequality](!/probability/inequalities/chebyshev) provides detailed explanations

• [Expected Value](!/probability/expected-value) is required for Markov's bound

• [Variance](!/probability/variance) is required for Chebyshev's bound

**Visual Tools:**

• [Expected Value Visualizer](!/probability/visual-tools/expected-value) shows E[X] concepts

• [Variance Visualizer](!/probability/visual-tools/variance) demonstrates spread around the mean

• [Distribution Visualizers](!/probability/visual-tools/distributions) display PDFs and CDFs

**Related Topics:**

• [Probability Distributions](!/probability/distributions) covers common distributions

• [Central Limit Theorem](!/probability/central-limit-theorem) uses concentration concepts`,
      before: ``,
      after: ``,
      link: '',
    },

  }

  const introContent = {
    id: "intro",
    title: "Interactive Probability Inequality Visualizations",
    content: `Explore Markov and Chebyshev inequalities through interactive tools. Each visualization displays the probability bound alongside the actual tail probability across nine different distributions. Adjust parameters to see how bounds tighten or loosen, and compare how much the bound overestimates the true probability.`
  }

  const faqQuestions = {
    obj1: {
      question: "What is the difference between Markov and Chebyshev inequality?",
      answer: "Markov inequality uses only the expected value to bound P(X ≥ a) for non-negative X. Chebyshev inequality uses both mean and variance to bound P(|X - μ| ≥ a) for any distribution. Chebyshev requires more information but provides tighter bounds."
    },
    obj2: {
      question: "Why are probability bounds useful?",
      answer: "Probability bounds provide guaranteed upper limits on tail probabilities when the exact distribution is unknown. They're essential in algorithm analysis, statistical proofs, quality control, and risk management where worst-case guarantees are needed."
    },
    obj3: {
      question: "When is Markov inequality useless?",
      answer: "Markov inequality is useless when the threshold a is less than or equal to E[X], because the bound E[X]/a becomes greater than or equal to 1. A bound exceeding 100% probability tells us nothing. The bound is only informative when a > E[X]."
    },
    obj4: {
      question: "Why are probability bounds often loose?",
      answer: "Bounds are distribution-free, meaning they must work for ANY distribution satisfying the conditions. The worst-case distribution determines the bound, making it conservative for well-behaved distributions. Actual probabilities are often much smaller than the bound."
    },
    obj5: {
      question: "What distributions can I explore in these tools?",
      answer: "Both visualizers support nine distributions: three continuous (Normal, Exponential, Uniform) and six discrete (Poisson, Binomial, Geometric, Negative Binomial, Hypergeometric, Discrete Uniform). This lets you compare bounds across different distribution shapes."
    }
  }

  const schemas = {
    collectionPage: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Probability Inequality Visualization Tools",
      "description": "Interactive visual tools for understanding Markov and Chebyshev inequalities with probability bounds across multiple distributions.",
      "url": "https://www.learnmathclass.com/probability/visual-tools/inequalities",
      "inLanguage": "en-US",
      "about": {
        "@type": "Thing",
        "name": "Probability Inequalities"
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
          "name": "Markov Inequality Visualizer",
          "url": "https://www.learnmathclass.com/probability/visual-tools/inequalities/markov",
          "description": "Interactive visualization of Markov inequality bounds across multiple distributions"
        },
        {
          "@type": "WebPage",
          "name": "Chebyshev Inequality Visualizer",
          "url": "https://www.learnmathclass.com/probability/visual-tools/inequalities/chebyshev",
          "description": "Interactive visualization of Chebyshev inequality bounds for deviation from mean"
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
            "name": "Markov Inequality Visualizer",
            "url": "https://www.learnmathclass.com/probability/visual-tools/inequalities/markov",
            "applicationCategory": "EducationalApplication",
            "description": "Interactive tool for exploring Markov inequality tail bounds"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Chebyshev Inequality Visualizer",
            "url": "https://www.learnmathclass.com/probability/visual-tools/inequalities/chebyshev",
            "applicationCategory": "EducationalApplication",
            "description": "Interactive tool for exploring Chebyshev inequality deviation bounds"
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
          "name": "Probability Inequalities",
          "item": "https://www.learnmathclass.com/probability/visual-tools/inequalities"
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
        title: "Probability Inequalities - Markov & Chebyshev Visualizers | Learn Math Class",
        description: "Interactive Markov and Chebyshev inequality visualizers. Explore probability bounds across 9 distributions with real-time bound vs actual comparisons.",
        keywords: keyWords.join(", "),
        url: "/probability/visual-tools/inequalities",
        name: "Probability Inequality Visualization Tools"
      },
    }
  }
}

export default function InequalitiesLanding({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

  const genericSections = [
    {
      id: '1',
      title: 'What are Probability Inequalities?',
      link: '',
      content: sectionsContent.obj1.content
    },
    {
      id: '2',
      title: 'Markov vs Chebyshev Inequality',
      link: '',
      content: sectionsContent.obj2.content
    },
    {
      id: '3',
      title: 'When Bounds Are Useful',
      link: '',
      content: sectionsContent.obj3.content
    },
    {
      id: '4',
      title: 'Applications of Probability Inequalities',
      link: '',
      content: sectionsContent.obj4.content
    },
    {
      id: '5',
      title: 'Related Concepts and Tools',
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
      <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Probability Inequalities</h1>
      <br/>
      <br/>
      
      <div style={cardStyles.container}>
        <Link href="/probability/visual-tools/inequalities/markov" style={cardStyles.card}>
          <div style={cardStyles.title}>Markov Inequality</div>
          <div style={cardStyles.description}>
            Bound tail probabilities using only expected value. Explore P(X ≥ a) ≤ E[X] / a across 9 distributions.
          </div>
        </Link>
        
        <Link href="/probability/visual-tools/inequalities/chebyshev" style={cardStyles.card}>
          <div style={cardStyles.title}>Chebyshev Inequality</div>
          <div style={cardStyles.description}>
            Bound deviations from the mean using variance. Explore P(|X - μ| ≥ a) ≤ σ² / a² with interactive controls.
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