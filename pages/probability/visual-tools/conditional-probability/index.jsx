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

//  const keyWords = [
//   "conditional probability visualization",
//   "Bayes theorem interactive",
//   "probability given condition",
//   "conditional probability calculator",
//   "visual probability tools",
//   "tree diagram conditional probability",
//   "Venn diagram conditional probability",
//   "waffle chart probability",
//   "conditional probability examples",
//   "P(A|B) calculator",
//   "interactive probability learning",
//   "probability visualization tools",
//   "conditional probability explained",
//   "visual conditional probability"
// ];

//     const sectionsContent={

//     obj1:{
//       title:`What is Conditional Probability?`,
//       content:`Conditional probability measures the likelihood of an event occurring given that another event has already occurred. Written as P(A|B), it reads "the probability of A given B."`,
//       before:``,
//       after:``,
//     },
//     obj2:{
//       title:`Visualization Methods`,
//       content:`Different visualization approaches help understand conditional probability from various perspectives. Choose the method that best fits your learning style or problem type.`,
//       before:``,
//       after:``,
//     },
  
//     obj3:{
//       title:`Applications and Examples`,
//       content:`Conditional probability is fundamental in statistics, machine learning, medical testing, and decision-making. Visual tools make these concepts more intuitive and accessible.`,
//       before:``,
//       after:``,
//     },
  
//   }


//   const introContent = {
//   id: "intro",
//   title: "Interactive Conditional Probability Tools",
//   content: `Explore conditional probability through multiple visual representations. Each tool offers a unique perspective on how probabilities change when conditions are applied.`
// }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Conditional Probability Visualizations - Interactive Tools | Learn Math Class",
//         description: "Interactive conditional probability visualization tools including tree diagrams, Venn diagrams, and waffle charts. Learn P(A|B) with step-by-step visual explanations.",
//         keywords: keyWords.join(", "),
//         url: "/probability/visual-tools/conditional-probability",
//          name: "Conditional Probability Visualizations"
//       },
        
//        }
//     }
//    }

// export default function ConditionalProbabilityLanding({seoData,sectionsContent , introContent}) {

    
//   const genericSections=[
//     {
//         id:'1',
//         title:'What is Conditional Probability?',
//         link:'#what-is-conditional-probability',
//         content: sectionsContent.obj1.content
//     },
//     {
//         id:'2',
//         title:'Visualization Methods',
//         link:'#visualization-methods',
//         content: sectionsContent.obj2.content
//     },
//     {
//         id:'3',
//         title:'Applications and Examples',
//         link:'#applications-and-examples',
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
//    <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Conditional Probability Visualizations</h1>
//    <br/>
//    <br/>
   
//    <div style={cardStyles.container}>
//      <Link href="/probability/visual-tools/conditional-probability/tree-diagram" style={cardStyles.card}>
//        <div style={cardStyles.title}>Tree Diagrams</div>
//        <div style={cardStyles.description}>
//          Visualize sequential events and conditional probabilities through branching paths.
//        </div>
//      </Link>
     
//      <Link href="/probability/visual-tools/conditional-probability/venn-diagram" style={cardStyles.card}>
//        <div style={cardStyles.title}>Venn Diagrams</div>
//        <div style={cardStyles.description}>
//          Understand conditional probability through overlapping sets and regions.
//        </div>
//      </Link>

//      <Link href="/probability/visual-tools/conditional-probability/waffle-chart" style={cardStyles.card}>
//        <div style={cardStyles.title}>Waffle Charts</div>
//        <div style={cardStyles.description}>
//          See proportions and conditional probabilities in a grid-based visual format.
//        </div>
//      </Link>
//      <Link href="/probability/visual-tools/conditional-probability/contingency-table" style={cardStyles.card}>
//        <div style={cardStyles.title}>Contingency Table</div>
//        <div style={cardStyles.description}>
//         Interactive 2×2 table visualizing conditional probability relationships between events A and B.
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
    "conditional probability visualization",
    "conditional probability tools",
    "P(A|B) visualization",
    "tree diagram probability",
    "Venn diagram conditional probability",
    "waffle chart probability",
    "contingency table probability",
    "interactive probability tools",
    "visual probability learning",
    "conditional probability calculator",
    "probability visualization methods",
    "Bayes theorem visualization",
    "joint probability visualization",
    "probability given condition",
    "conditional probability examples"
  ]

  const sectionsContent = {

    obj1: {
      title: `What is Conditional Probability?`,
      content: `[Conditional probability](!/probability/conditional-probability) measures how the likelihood of an event changes when we know another event has occurred. Written as P(A|B), it reads "the probability of A given B." The vertical bar represents the condition—we restrict our view to only those outcomes where B happens, then ask how often A also occurs within that restricted space.

The fundamental formula connects conditional probability to [joint probability](!/probability/joint-probability) and marginal probability:

$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$

This formula shows that conditional probability equals the joint probability of both events divided by the probability of the conditioning event. Each visualization tool on this page demonstrates this relationship from a different perspective, helping you build intuition for how conditioning changes probability calculations.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Why Use Visual Tools?`,
      content: `Conditional probability concepts become clearer through visual representation. Abstract formulas like P(A|B) = P(A ∩ B) / P(B) gain concrete meaning when you can see the regions, paths, or proportions they describe.

Visual tools help in several ways:

• They show how conditioning restricts the [sample space](!/probability/sample-space) to a subset of outcomes

• They make the relationship between joint and conditional probabilities visible

• They demonstrate why P(A|B) differs from P(B|A)

• They illustrate concepts like [independence](!/probability/independence) and the [law of total probability](!/probability/total-probability)

Each visualization method emphasizes different aspects of conditional probability. Tree diagrams excel at sequential problems. Venn diagrams show set relationships. Waffle charts display proportions intuitively. Contingency tables organize all probability types in one view.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Choosing the Right Visualization`,
      content: `Select your visualization based on the problem structure and what aspect of conditional probability you want to understand:

**Tree Diagrams** work best for sequential events where one outcome leads to another. Medical testing (disease → test result), quality control (defect → detection), and multi-stage experiments fit this format naturally. The branching structure shows how probabilities multiply along paths.

**Venn Diagrams** suit problems involving overlapping categories or set relationships. Survey data (groups with shared characteristics), classification problems, and logical relationships become clear through overlapping regions.

**Waffle Charts** excel at showing proportions and percentages visually. Risk assessment, demographic data, and any scenario where you want to see "how many out of 100" benefit from this grid-based approach.

**Contingency Tables** provide the most complete view, displaying joint, marginal, and conditional probabilities simultaneously. Statistical analysis, independence testing, and [Bayes' theorem](!/probability/bayes-theorem) applications work well with this format.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Applications of Conditional Probability`,
      content: `Conditional probability appears throughout statistics, data science, and everyday reasoning. Understanding these visual tools prepares you for practical applications:

**Medical Testing**: Given a positive test result, what is the probability of actually having the disease? This classic application of [Bayes' theorem](!/probability/bayes-theorem) becomes intuitive through tree diagrams and contingency tables.

**Machine Learning**: Classification algorithms compute P(class | features)—the probability of a category given observed data. Naive Bayes classifiers directly apply conditional probability concepts.

**Risk Assessment**: Insurance, finance, and safety analysis all involve conditional probabilities. Given certain risk factors, how does the probability of an outcome change?

**Quality Control**: Manufacturing processes use conditional probability to understand defect rates given various conditions, inspection accuracy, and process reliability.

Each visualization tool helps build the intuition needed for these real-world applications.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Related Concepts and Calculators`,
      content: `These visualization tools connect to broader probability concepts available on this site:

**Theoretical Foundations:**

• [Conditional Probability](!/probability/conditional-probability) covers the complete theory of P(A|B)

• [Bayes' Theorem](!/probability/bayes-theorem) explains how to reverse conditional probabilities

• [Joint Probability](!/probability/joint-probability) details probability of multiple events occurring together

• [Independence](!/probability/independence) describes when P(A|B) = P(A)

• [Total Probability](!/probability/total-probability) shows how to compute P(A) from conditional probabilities

**Calculators:**

• [Conditional Probability Calculator](!/probability/calculators/conditional-probability) computes P(A|B) from inputs

• [Bayes' Theorem Calculator](!/probability/calculators/bayes-calculator) applies Bayes' formula

• [Joint Probability Calculator](!/probability/calculators/joint-probability) works with joint distributions`,
      before: ``,
      after: ``,
      link: '',
    },

  }

  const introContent = {
    id: "intro",
    title: "Interactive Conditional Probability Visualizations",
    content: `Explore conditional probability through four distinct visual approaches. Each tool demonstrates how P(A|B) works from a different perspective—tree diagrams show sequential branching, Venn diagrams display set relationships, waffle charts reveal proportions, and contingency tables organize all probability types together. Choose the visualization that matches your problem type or learning style.`
  }

  const faqQuestions = {
    obj1: {
      question: "What is conditional probability?",
      answer: "Conditional probability P(A|B) measures the probability of event A occurring given that event B has already occurred. It equals the joint probability P(A ∩ B) divided by the probability of the condition P(B). The vertical bar | means 'given' or 'assuming.'"
    },
    obj2: {
      question: "Which visualization should I use for conditional probability?",
      answer: "Use tree diagrams for sequential events (one leads to another). Use Venn diagrams for overlapping categories and set relationships. Use waffle charts for proportions and percentages. Use contingency tables when you need to see joint, marginal, and conditional probabilities together."
    },
    obj3: {
      question: "How do these tools help understand Bayes' theorem?",
      answer: "Each tool visualizes how P(A|B) relates to P(B|A). Tree diagrams show paths in both directions. Venn diagrams display the same intersection from different perspectives. Contingency tables show how the same joint probability appears in calculations for both conditional probabilities with different denominators."
    },
    obj4: {
      question: "What is the difference between conditional and joint probability?",
      answer: "Joint probability P(A ∩ B) is the probability both events occur together. Conditional probability P(A|B) is the probability of A given B has occurred. They relate through the formula: P(A|B) = P(A ∩ B) / P(B). Joint probability considers the entire sample space; conditional probability restricts to outcomes where B occurs."
    },
    obj5: {
      question: "Are these visualization tools free to use?",
      answer: "Yes, all conditional probability visualization tools are completely free with no registration required. They work directly in your browser and include interactive controls, adjustable parameters, and detailed explanations of the probability calculations."
    }
  }

  const schemas = {
    collectionPage: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Conditional Probability Visualization Tools",
      "description": "Interactive visual tools for understanding conditional probability including tree diagrams, Venn diagrams, waffle charts, and contingency tables.",
      "url": "https://www.learnmathclass.com/probability/visual-tools/conditional-probability",
      "inLanguage": "en-US",
      "about": {
        "@type": "Thing",
        "name": "Conditional Probability"
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
          "name": "Tree Diagram - Conditional Probability",
          "url": "https://www.learnmathclass.com/probability/visual-tools/conditional-probability/tree-diagram",
          "description": "Interactive tree diagram for visualizing sequential conditional probabilities"
        },
        {
          "@type": "WebPage",
          "name": "Venn Diagram - Conditional Probability",
          "url": "https://www.learnmathclass.com/probability/visual-tools/conditional-probability/venn-diagram",
          "description": "Interactive Venn diagram showing conditional probability through set relationships"
        },
        {
          "@type": "WebPage",
          "name": "Waffle Chart - Conditional Probability",
          "url": "https://www.learnmathclass.com/probability/visual-tools/conditional-probability/waffle-chart",
          "description": "Interactive waffle chart displaying conditional probability as grid proportions"
        },
        {
          "@type": "WebPage",
          "name": "Contingency Table - Conditional Probability",
          "url": "https://www.learnmathclass.com/probability/visual-tools/conditional-probability/contingency-table",
          "description": "Interactive contingency table showing joint, marginal, and conditional probabilities"
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
            "name": "Tree Diagram Visualization",
            "url": "https://www.learnmathclass.com/probability/visual-tools/conditional-probability/tree-diagram",
            "applicationCategory": "EducationalApplication",
            "description": "Interactive tree diagram for sequential conditional probability visualization"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Venn Diagram Visualization",
            "url": "https://www.learnmathclass.com/probability/visual-tools/conditional-probability/venn-diagram",
            "applicationCategory": "EducationalApplication",
            "description": "Interactive Venn diagram for set-based conditional probability"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Waffle Chart Visualization",
            "url": "https://www.learnmathclass.com/probability/visual-tools/conditional-probability/waffle-chart",
            "applicationCategory": "EducationalApplication",
            "description": "Interactive waffle chart for proportional conditional probability"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Contingency Table Visualization",
            "url": "https://www.learnmathclass.com/probability/visual-tools/conditional-probability/contingency-table",
            "applicationCategory": "EducationalApplication",
            "description": "Interactive contingency table for joint and conditional probabilities"
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
          "name": "Conditional Probability Visualizations",
          "item": "https://www.learnmathclass.com/probability/visual-tools/conditional-probability"
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
        title: "Conditional Probability Visualizations - Interactive Tools | Learn Math Class",
        description: "Explore conditional probability with interactive tree diagrams, Venn diagrams, waffle charts, and contingency tables. Visual tools for understanding P(A|B).",
        keywords: keyWords.join(", "),
        url: "/probability/visual-tools/conditional-probability",
        name: "Conditional Probability Visualization Tools"
      },
    }
  }
}

export default function ConditionalProbabilityLanding({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

  const genericSections = [
    {
      id: '1',
      title: 'What is Conditional Probability?',
      link: '',
      content: sectionsContent.obj1.content
    },
    {
      id: '2',
      title: 'Why Use Visual Tools?',
      link: '',
      content: sectionsContent.obj2.content
    },
    {
      id: '3',
      title: 'Choosing the Right Visualization',
      link: '',
      content: sectionsContent.obj3.content
    },
    {
      id: '4',
      title: 'Applications of Conditional Probability',
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
      <GenericNavbar/>
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
      <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Conditional Probability Visualizations</h1>
      <br/>
      <br/>
      
      <div style={cardStyles.container}>
        <Link href="/probability/visual-tools/conditional-probability/tree-diagram" style={cardStyles.card}>
          <div style={cardStyles.title}>Tree Diagrams</div>
          <div style={cardStyles.description}>
            Visualize sequential events and conditional probabilities through branching paths. Adjust P(A), P(B|A), and P(B|Aᶜ) with interactive sliders.
          </div>
        </Link>
        
        <Link href="/probability/visual-tools/conditional-probability/venn-diagram" style={cardStyles.card}>
          <div style={cardStyles.title}>Venn Diagrams</div>
          <div style={cardStyles.description}>
            Understand conditional probability through overlapping sets and regions. Click compartments to see how P(A|Bᵢ) changes across partitions.
          </div>
        </Link>

        <Link href="/probability/visual-tools/conditional-probability/waffle-chart" style={cardStyles.card}>
          <div style={cardStyles.title}>Waffle Charts</div>
          <div style={cardStyles.description}>
            See proportions and conditional probabilities in a grid-based format. Four regions demonstrate how distribution affects conditional probability.
          </div>
        </Link>

        <Link href="/probability/visual-tools/conditional-probability/contingency-table" style={cardStyles.card}>
          <div style={cardStyles.title}>Contingency Tables</div>
          <div style={cardStyles.description}>
            Interactive 2×2 table showing joint, marginal, and conditional probabilities with clickable highlighting and formula breakdowns.
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
      <ScrollUpButton/>
    </>
  )
}