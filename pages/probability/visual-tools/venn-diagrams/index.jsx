
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
//   "Venn diagram visualization",
//   "event relationships in probability",
//   "intersection and union of events",
//   "Venn diagram calculator",
//   "probability event decomposition",
//   "Venn diagram regions explained",
//   "complements intersections unions",
//   "probability event structure",
//   "visualizing probability events",
//   "probability sets and regions",
//   "set operations Venn diagram",
//   "event algebra visualization",
//   "probability diagrams interactive",
//   "sample space event diagrams"
// ];

//     const sectionsContent={

//     obj1:{
//       title:`What are Venn Diagrams?`,
//       content:`Venn diagrams are visual representations of sets and their relationships. In probability theory, they help us understand how events relate to each other through intersections, unions, and complements.`,
//       before:``,
//       after:``,
//     },
//     obj2:{
//       title:`Types of Venn Diagrams`,
//       content:`We offer interactive tools for different complexity levels. Choose the number of sets that matches your problem.`,
//       before:``,
//       after:``,
//     },
  
//     obj3:{
//       title:`Applications in Probability`,
//       content:`Venn diagrams are essential for visualizing probability concepts including conditional probability, independent events, and the addition rule.`,
//       before:``,
//       after:``,
//     },
  
//   }


//   const introContent = {
//   id: "intro",
//   title: "Interactive Venn Diagram Tools",
//   content: `Explore probability relationships visually with our interactive Venn diagram tools. Select the number of sets below to get started.`
// }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Venn Diagrams - Interactive Probability Tools | Learn Math Class",
//         description: "Interactive Venn diagram tools for visualizing probability events. Explore 2-set and 3-set diagrams with step-by-step explanations and examples.",
//         keywords: keyWords.join(", "),
//         url: "/probability/visual-tools/venn-diagrams",
//          name: "Venn Diagrams"
//       },
        
//        }
//     }
//    }

// export default function VennDiagramsLanding({seoData,sectionsContent , introContent}) {

    
//   const genericSections=[
//     {
//         id:'1',
//         title:'What are Venn Diagrams?',
//         link:'',
//         content: sectionsContent.obj1.content
//     },
//     {
//         id:'2',
//         title:'Types of Venn Diagrams',
//         link:'',
//         content: sectionsContent.obj2.content
//     },
//     {
//         id:'3',
//         title:'Applications in Probability',
//         link:'',
//         content: sectionsContent.obj3.content
//     }
// ]

// const cardStyles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '20px',
//     margin: '40px 0',
//     flexWrap: 'wrap'
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
//   cardHover: {
//     transform: 'translateY(-4px)',
//     boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
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
//    <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Venn Diagrams</h1>
//    <br/>
//    <br/>
   
//    <div style={cardStyles.container}>
//      <Link href="/probability/visual-tools/venn-diagrams/two-sets" style={cardStyles.card}>
//        <div style={cardStyles.title}>2-Set Venn Diagrams</div>
//        <div style={cardStyles.description}>
//          Visualize relationships between two events. Perfect for basic probability problems.
//        </div>
//      </Link>
     
//      <Link href="/probability/visual-tools/venn-diagrams/three-sets" style={cardStyles.card}>
//        <div style={cardStyles.title}>3-Set Venn Diagrams</div>
//        <div style={cardStyles.description}>
//          Explore complex interactions between three events with all possible regions.
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
    "venn diagram probability",
    "interactive venn diagrams",
    "set theory visualization",
    "probability venn diagrams",
    "venn diagram calculator",
    "2 set venn diagram",
    "3 set venn diagram",
    "intersection union probability",
    "event relationships venn",
    "probability set operations",
    "venn diagram examples",
    "conditional probability venn",
    "visualize probability events",
    "venn diagram tool",
    "probability diagrams interactive"
  ];

  const sectionsContent = {
    obj1: {
      title: 'What are Venn Diagrams?',
      content: `Venn diagrams are visual representations using overlapping circles to show relationships between [sets](!/probability/sets) or [events](!/probability/events). In probability theory, each circle represents an event, and overlapping regions show where events occur together.

The diagrams make abstract probability concepts concrete. You can see intersections (events happening together), unions (at least one event occurring), and complements (events not happening) as distinct visual regions.

Named after mathematician John Venn, these diagrams are fundamental tools for understanding probability relationships, solving complex problems, and visualizing the addition rule, multiplication rule, and [conditional probability](!/probability/conditional-probability).`,
      before: '',
      after: '',
      link: ''
    },
    obj2: {
      title: 'Two-Set Venn Diagrams',
      content: `Two-set Venn diagrams use two overlapping circles to represent events A and B. The diagram creates four distinct regions: A only, B only, both A and B (intersection), and neither A nor B (complement).

These diagrams are perfect for visualizing fundamental probability [rules](!/probability/rules). The addition rule $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ becomes visually obvious - you add both circles but subtract the overlap to avoid double-counting.

Use 2-set diagrams for problems involving two events: medical test accuracy (disease and positive test), quality control (two types of defects), or any scenario with two characteristics.`,
      before: '',
      after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[2-Set Venn Diagram Tool](!/probability/visual-tools/venn-diagrams/two-sets) →@`,
      link: ''
    },
    obj3: {
      title: 'Three-Set Venn Diagrams',
      content: `Three-set Venn diagrams use three overlapping circles for events A, B, and C. This creates eight distinct regions representing all possible combinations: each event alone, pairs of events, all three together, and none.

The complexity increases significantly with three sets. The inclusion-exclusion principle $P(A \\cup B \\cup C) = P(A) + P(B) + P(C) - P(A \\cap B) - P(A \\cap C) - P(B \\cap C) + P(A \\cap B \\cap C)$ becomes manageable when you can see each region.

Three-set diagrams handle complex scenarios: survey responses with three categories, quality control with multiple defect types, or medical conditions with three risk factors.`,
      before: '',
      after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[3-Set Venn Diagram Tool](!/probability/visual-tools/venn-diagrams/three-sets) →@`,
      link: ''
    },
    obj4: {
      title: 'Visualizing Probability Operations',
      content: `Venn diagrams make set operations intuitive. Intersection ($A \\cap B$) appears as the overlapping region - where both events occur simultaneously. Union ($A \\cup B$) encompasses all regions covered by either circle - where at least one event occurs.

Complements are easy to see: $A'$ (not A) is everything outside circle A. The visual representation prevents errors when dealing with compound events like $(A \\cup B)'$ or $A' \\cap B$.

[Conditional probability](!/probability/conditional-probability) $P(A|B)$ restricts attention to circle B, then finds what fraction of that region overlaps with A. This "given B" restriction becomes a simple visual focus rather than an abstract concept.`,
      before: '',
      after: '',
      link: ''
    },
    obj5: {
      title: 'Understanding Mutually Exclusive Events',
      content: `Mutually exclusive (disjoint) events have no overlap - their circles don't intersect. In a Venn diagram, you see two separate circles with no shared region, making $P(A \\cap B) = 0$ visually obvious.

For mutually exclusive events, the addition rule simplifies to $P(A \\cup B) = P(A) + P(B)$ since there's no overlap to subtract. Examples include rolling odd vs even on a die, or drawing a heart vs spade from a deck.

Contrast this with [independent events](!/probability/independence), which can overlap in a Venn diagram. Independence means $P(A \\cap B) = P(A)P(B)$, a multiplicative relationship that doesn't require non-overlapping circles.`,
      before: '',
      after: '',
      link: ''
    },
    obj6: {
      title: 'Applications in Real-World Problems',
      content: `Venn diagrams excel at organizing survey data. If 60% like coffee, 50% like tea, and 30% like both, draw two overlapping circles: 30% in the intersection, 30% in coffee-only, 20% in tea-only, and 20% like neither.

Medical diagnosis uses Venn diagrams for test accuracy. One circle represents having the disease, another represents testing positive. The overlap shows true positives, while non-overlapping regions show false positives and false negatives.

Quality control, customer preferences, genetic inheritance, and logical reasoning all benefit from Venn diagram visualization. Any problem with categorical overlaps becomes clearer when drawn.`,
      before: '',
      after: '',
      link: ''
    },
    obj7: {
      title: 'Related Probability Tools',
      content: `Venn diagrams complement other probability visualization tools. [Tree diagrams](!/probability/tree-diagrams) show sequential events over time, while Venn diagrams show relationships at a single point in time.

Contingency tables organize the same information in tabular form - each Venn diagram region corresponds to a table cell. Some people prefer visual circles, others prefer numerical tables.`,
      before: '',
      after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Conditional Probability Visualizations](!/probability/visual-tools/conditional-probability) →@

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Probability Calculators](!/probability/calculators) →@

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Set Theory](!/probability/sets) →@`,
      link: ''
    }
  };

  const faqQuestions = {
    obj1: {
      question: "What is a Venn diagram used for in probability?",
      answer: "Venn diagrams visualize relationships between events using overlapping circles. They show intersections (events occurring together), unions (at least one event), and complements (events not occurring). This makes probability rules like P(A ∪ B) = P(A) + P(B) - P(A ∩ B) visually intuitive."
    },
    obj2: {
      question: "What's the difference between 2-set and 3-set Venn diagrams?",
      answer: "Two-set diagrams use two circles creating four regions: A only, B only, both, and neither. Three-set diagrams use three circles creating eight regions for all combinations of three events. Three-set diagrams handle more complex problems but require careful attention to all possible intersections."
    },
    obj3: {
      question: "How do you calculate probabilities from a Venn diagram?",
      answer: "Each region in a Venn diagram represents a distinct outcome. Sum the probabilities of relevant regions for your event. For P(A ∪ B), add all regions in either circle. For P(A ∩ B), use only the overlapping region. For P(A'), sum regions outside circle A."
    },
    obj4: {
      question: "What are mutually exclusive events on a Venn diagram?",
      answer: "Mutually exclusive events appear as non-overlapping circles - they have no intersection region. This means P(A ∩ B) = 0, so the events cannot occur simultaneously. For these events, P(A ∪ B) = P(A) + P(B) since there's no overlap to subtract."
    },
    obj5: {
      question: "Can Venn diagrams show more than 3 sets?",
      answer: "While theoretically possible, Venn diagrams become impractical beyond three sets. Four sets require complex shapes beyond simple circles, and five or more sets create diagrams too complicated to be useful. For multiple events, tree diagrams or tables work better than Venn diagrams."
    }
  };

  const schemas = {
    collectionPage: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Interactive Venn Diagram Tools",
      "description": "Interactive Venn diagram tools for visualizing probability events. Explore 2-set and 3-set diagrams with step-by-step explanations and examples.",
      "url": "https://www.learnmathclass.com/probability/visual-tools/venn-diagrams",
      "inLanguage": "en-US",
      "about": {
        "@type": "Thing",
        "name": "Venn Diagrams in Probability"
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
          "name": "2-Set Venn Diagrams",
          "url": "https://www.learnmathclass.com/probability/visual-tools/venn-diagrams/two-sets",
          "description": "Interactive tool for visualizing relationships between two probability events"
        },
        {
          "@type": "WebPage",
          "name": "3-Set Venn Diagrams",
          "url": "https://www.learnmathclass.com/probability/visual-tools/venn-diagrams/three-sets",
          "description": "Interactive tool for complex probability analysis with three events"
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
            "name": "2-Set Venn Diagram Tool",
            "url": "https://www.learnmathclass.com/probability/visual-tools/venn-diagrams/two-sets",
            "applicationCategory": "EducationalApplication",
            "description": "Interactive visualization for two-event probability relationships"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "SoftwareApplication",
            "name": "3-Set Venn Diagram Tool",
            "url": "https://www.learnmathclass.com/probability/visual-tools/venn-diagrams/three-sets",
            "applicationCategory": "EducationalApplication",
            "description": "Interactive visualization for three-event probability relationships"
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
          "name": "Venn Diagrams",
          "item": "https://www.learnmathclass.com/probability/visual-tools/venn-diagrams"
        }
      ]
    }
  };

  const introContent = {
    id: "intro",
    title: "Interactive Venn Diagram Tools",
    content: `Explore probability relationships visually with our interactive Venn diagram tools. Select the number of sets below to get started.`
  };

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Venn Diagrams - Interactive Probability Tools | Learn Math Class",
        description: "Interactive Venn diagram tools for visualizing probability events. Explore 2-set and 3-set diagrams with step-by-step explanations and examples.",
        keywords: keyWords.join(", "),
        url: "/probability/visual-tools/venn-diagrams",
        name: "Venn Diagrams"
      }
    }
  };
}

export default function VennDiagramsLanding({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

  const genericSections = Object.keys(sectionsContent).map((key, index) => ({
    id: `${index + 1}`,
    title: sectionsContent[key].title,
    link: sectionsContent[key].link,
    content: [sectionsContent[key].content]
  }));

  const cardStyles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      margin: '40px 0',
      flexWrap: 'wrap'
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
  };

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
            __html: JSON.stringify({
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
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      /> 
      <Breadcrumb/>
      <br/>
      <br/>
      <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Venn Diagrams</h1>
      <br/>
      <br/>
      
      <div style={cardStyles.container}>
        <Link href="/probability/visual-tools/venn-diagrams/two-sets" style={cardStyles.card}>
          <div style={cardStyles.title}>2-Set Venn Diagrams</div>
          <div style={cardStyles.description}>
            Visualize relationships between two events. Perfect for basic probability problems.
          </div>
        </Link>
        
        <Link href="/probability/visual-tools/venn-diagrams/three-sets" style={cardStyles.card}>
          <div style={cardStyles.title}>3-Set Venn Diagrams</div>
          <div style={cardStyles.description}>
            Explore complex interactions between three events with all possible regions.
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
  );
}