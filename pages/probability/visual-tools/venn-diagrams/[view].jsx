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
// import VennExplorer from '@/app/components/probability/venn-explorer/VennExplorer'
// import VennExplorer2 from '@/app/components/probability/venn-explorer/VennExplorer2'


// export async function getStaticPaths() {
//   const paths = [
//     { params: { view: 'two-sets' } },
//     { params: { view: 'three-sets' } },
//   ];

//   return { paths, fallback: false };
// }


// export async function getStaticProps({ params }){

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


// const viewConfig = {
//     'two-sets': {
//       mode: 2,
//       title: "2-Set Venn Diagrams - Interactive Probability Tool | Learn Math Class",
//       description: "Interactive 2-set Venn diagram tool for visualizing probability events. Explore intersections, unions, and complements with dynamic examples and step-by-step explanations.",
//       name: "2-Set Venn Diagrams",
//       url: "/probability/visual-tools/venn-diagrams/two-sets",
//       h1: "2-Set Venn Diagrams",
//       introTitle: "Understanding 2-Set Venn Diagrams",
//       introContent: "Two-set Venn diagrams visualize the relationship between two events A and B. They help understand fundamental concepts like intersection (A ∩ B), union (A ∪ B), and complements."
//     },
//     'three-sets': {
//       mode: 3,
//       title: "3-Set Venn Diagrams - Interactive Probability Tool | Learn Math Class",
//       description: "Interactive 3-set Venn diagram tool for complex probability analysis. Visualize all possible intersections and unions between three events with comprehensive examples.",
//       name: "3-Set Venn Diagrams",
//       url: "/probability/visual-tools/venn-diagrams/three-sets",
//       h1: "3-Set Venn Diagrams",
//       introTitle: "Understanding 3-Set Venn Diagrams",
//       introContent: "Three-set Venn diagrams show relationships between three events A, B, and C. They reveal complex interactions including triple intersections and various combinations of unions and complements."
//     }
//   };

// const currentConfig = viewConfig[params.view];

//     const sectionsContent={

//     obj1:{
//       title: currentConfig.mode === 2 ? `Basic Two-Set Operations` : `Basic Three-Set Operations`,
//       content: currentConfig.mode === 2 
//         ? `Two-set Venn diagrams consist of four distinct regions: A only, B only, A ∩ B (intersection), and the complement (neither A nor B).`
//         : `Three-set Venn diagrams contain eight distinct regions representing all possible combinations of the three sets and their complements.`,
//       before:``,
//       after:``,
//     },
//     obj2:{
//       title: `Key Probability Concepts`,
//       content: currentConfig.mode === 2
//         ? `Use 2-set diagrams to visualize P(A ∪ B) = P(A) + P(B) - P(A ∩ B) and understand conditional probability P(A|B).`
//         : `Use 3-set diagrams for complex probability calculations including the inclusion-exclusion principle for three events.`,
//       before:``,
//       after:``,
//     },
  
//     obj3:{
//       title: `Interactive Examples`,
//       content: `Adjust the diagram regions to see how probabilities change. Each region represents a unique outcome in the sample space.`,
//       before:``,
//       after:``,
//     },
  
//   }


//   const introContent = {
//   id: "intro",
//   title: currentConfig.introTitle,
//   content: currentConfig.introContent
// }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: currentConfig.title,
//         description: currentConfig.description,
//         keywords: keyWords.join(", "),
//         url: currentConfig.url,
//          name: currentConfig.name
//       },
//       currentMode: currentConfig.mode,
//       h1Title: currentConfig.h1
        
//        }
//     }
//    }

// export default function VennDiagramsPage({seoData, sectionsContent, introContent, currentMode, h1Title}) {

    
//   const genericSections=[
//     {
//         id:'1',
//         title: sectionsContent.obj1.title,
//         link: '',
//         content: sectionsContent.obj1.content
//     },
//     {
//         id:'2',
//         title: sectionsContent.obj2.title,
//         link: '',
//         content: sectionsContent.obj2.content
//     },
//     {
//         id:'3',
//         title: sectionsContent.obj3.title,
//         link: '',
//         content: sectionsContent.obj3.content
//     }
// ]

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
  
//   <meta name="twitter:card" content="summary_large_image" />
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
//    <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>{h1Title}</h1>
//    <br/>
//    <br/>
   
//    {currentMode === 2 ? (
//      <VennExplorer2 problemsData={[]} />
//    ) : (
//      <VennExplorer problemsData={[]} />
//    )}
   
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
import VennExplorer from '@/app/components/probability/venn-explorer/VennExplorer'
import VennExplorer2 from '@/app/components/probability/venn-explorer/VennExplorer2'


export async function getStaticPaths() {
  const paths = [
    { params: { view: `two-sets` } },
    { params: { view: `three-sets` } },
  ];

  return { paths, fallback: false };
}


export async function getStaticProps({ params }){

  const viewConfig = {
    'two-sets': {
      mode: 2,
      title: `2-Set Venn Diagram - Interactive Probability Tool | Learn Math Class`,
      description: `Interactive 2-set Venn diagram for probability calculations. Click segments, explore intersections, unions, and complements with step-by-step solutions.`,
      name: `2-Set Venn Diagram Tool`,
      url: `/probability/visual-tools/venn-diagrams/two-sets`,
      h1: `2-Set Venn Diagram`,
      keywords: [
        `2 set venn diagram`,
        `two circle venn diagram`,
        `venn diagram calculator`,
        `intersection probability calculator`,
        `union probability tool`,
        `P(A∩B) calculator`,
        `P(A∪B) visualization`,
        `interactive venn diagram`,
        `probability regions calculator`,
        `set theory visualization`,
        `complement probability`,
        `venn diagram solver`,
        `two event probability`,
        `probability diagram tool`,
        `visual set operations`
      ],
//       sectionsContent: {
//         obj1: {
//           title: `Getting Started with 2-Set Diagrams`,
//           content: `The 2-set Venn diagram displays two overlapping circles labeled A and B. Four numbered segments represent all possible outcomes: both events (intersection), A only, B only, and neither event (complement).

// View the pre-loaded example problems by clicking the problem name buttons. Each problem shows event descriptions, marginal probabilities $P(A)$ and $P(B)$, and given constraints that help determine all four region probabilities.

// The diagram automatically calculates probabilities for all four segments based on the given information. Click any numbered segment to highlight it and see detailed calculations.`,
//           before: ``,
//           after: ``,
//           link: ``
//         },
//         obj2: {
//           title: `Clicking and Hovering Interactions`,
//           content: `Click any numbered segment (1-4) in the diagram to select it. Selected segments highlight in gold and display their corresponding outcome below. Click again to deselect.

// Hover over segments to preview which outcome they represent. The segment highlights in yellow, and the matching outcome in the list also highlights.

// Hover over outcomes in the left panel to see their location in the diagram. This two-way interaction helps connect symbolic notation like $A \\cap B$ with visual diagram regions.`,
//           before: ``,
//           after: ``,
//           link: ``
//         },
//         obj3: {
//           title: `Understanding the Four Regions`,
//           content: `**Segment #1 ($A \\cap B$)**: The intersection where both circles overlap. Both events occur simultaneously. This is the most central region of probability calculations.

// **Segment #2 ($A \\cap B^c$)**: Event A occurs but B does not. This is the left portion of circle A that doesn't overlap with B.

// **Segment #3 ($A^c \\cap B$)**: Event B occurs but A does not. This is the right portion of circle B that doesn't overlap with A.

// **Segment #4 ($A^c \\cap B^c$)**: Neither event occurs. This region lies outside both circles, representing outcomes where both A and B fail to happen.`,
//           before: ``,
//           after: ``,
//           link: ``
//         },
//         obj4: {
//           title: `Using Show Calculations Feature`,
//           content: `Toggle the "Show Calculations" button to reveal step-by-step solutions for each region's probability. The calculations explain how constraints and marginal probabilities determine each segment.

// For segment #1, the calculation typically starts with given information like $P(A \\cap B) = 0.15$. For segment #2, it uses $P(A \\cap B^c) = P(A) - P(A \\cap B)$.

// Each calculation shows the formula and the numerical result. This feature helps understand the logical sequence for solving Venn diagram problems from constraints to complete solutions.`,
//           before: ``,
//           after: ``,
//           link: ``
//         },
//         obj5: {
//           title: `Reading Probability Values`,
//           content: `Each outcome displays its calculated probability on the right side, shown to three decimal places. These values always sum to exactly 1.000, representing the complete [sample space](!/probability/sample-space).

// The probabilities reflect the given constraints and marginal probabilities. In the "Student Survey" example, $P(A \\cap B) = 0.150$ means 15% of the population are both students and employed.

// Compare different regions to understand relative likelihoods. If $P(A \\cap B^c) = 0.450$ is much larger than $P(A \\cap B) = 0.150$, most students are unemployed in this scenario.`,
//           before: ``,
//           after: ``,
//           link: ``
//         },
//         obj6: {
//           title: `Working with Multiple Problems`,
//           content: `Switch between example problems using the buttons at the top. Each problem has different event descriptions, marginal probabilities, and constraints.

// The "Student Survey" problem examines students and employment. The "Health Screening" problem analyzes medical test accuracy with true positives and false positives.

// Each problem demonstrates different constraint types. Some give $P(A \\cap B)$ directly, others give $P(A \\cap B^c)$, requiring different solution approaches.`,
//           before: ``,
//           after: ``,
//           link: ``
//         },
//         obj7: {
//           title: `Understanding Set Operations`,
//           content: `[Set operations](!/probability/sets) form the mathematical foundation of Venn diagrams. The intersection $A \\cap B$ represents "A **and** B" - outcomes where both events occur.

// The union $A \\cup B$ represents "A **or** B" - outcomes in either circle. Calculate it as $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$, subtracting the overlap to avoid double-counting.

// The complement $A^c$ represents "not A" - everything outside circle A. By definition, $P(A) + P(A^c) = 1$. These operations extend naturally to three or more sets.`,
//           before: ``,
//           after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Set Theory Fundamentals](!/probability/sets) →@`,
//           link: ``
//         },
//         obj8: {
//           title: `Conditional Probability in 2-Set Diagrams`,
//           content: `[Conditional probability](!/probability/conditional-probability) $P(A|B)$ asks "what's the probability of A given that B occurred?" Visually, focus only on circle B, then find what fraction of B overlaps with A.

// Calculate it as $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$. If $P(A \\cap B) = 0.15$ and $P(B) = 0.40$, then $P(A|B) = 0.15/0.40 = 0.375$ or 37.5%.

// The diagram makes this intuitive: restrict attention to region B (segments #1 and #3), then see what portion is also in A (only segment #1).`,
//           before: ``,
//           after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Conditional Probability](!/probability/conditional-probability) →@`,
//           link: ``
//         },
//         obj9: {
//           title: `Applying the Addition Rule`,
//           content: `The addition rule calculates the probability of A or B occurring: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. The diagram shows why subtraction is necessary.

// Adding $P(A)$ and $P(B)$ counts the intersection twice - once in A's total and once in B's total. Subtracting $P(A \\cap B)$ corrects this double-counting.

// In terms of segments: $P(A \\cup B)$ equals segments #1 + #2 + #3, which is $P(A) + P(B) - P(A \\cap B)$ algebraically. The visual matches the formula perfectly.`,
//           before: ``,
//           after: ``,
//           link: ``
//         },
//         obj10: {
//           title: `Related Probability Tools`,
//           content: `**3-Set Venn Diagrams** - Extend these concepts to three events with eight regions

// **Contingency Tables** - Organize the same probability information in tabular format

// **Tree Diagrams** - Show sequential conditional probabilities over time

// **Probability Calculators** - Compute exact values for various probability scenarios

// **Independence Tests** - Determine if events are independent using $P(A \\cap B) = P(A)P(B)$`,
//           before: ``,
//           after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[3-Set Venn Diagrams](!/probability/visual-tools/venn-diagrams/three-sets) →@

// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Probability Calculators](!/probability/calculators) →@`,
//           link: ``
//         }
//       },
sectionsContent: {
  obj1: {
    title: `Getting Started with 2-Set Diagrams`,
    content: `The 2-set [Venn diagram](!/probability/visual-tools/venn-diagrams) displays two overlapping circles labeled A and B. Four numbered segments represent all possible outcomes: both events (intersection), A only, B only, and neither event (complement).

View the pre-loaded example problems by clicking the problem name buttons. Each problem shows event descriptions, marginal probabilities $P(A)$ and $P(B)$, and given constraints that help determine all four region probabilities.

The diagram automatically calculates probabilities for all four segments based on the given information. Click any numbered segment to highlight it and see detailed calculations.`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `Clicking and Hovering Interactions`,
    content: `Click any numbered segment (1-4) in the diagram to select it. Selected segments highlight in gold and display their corresponding outcome below. Click again to deselect.

Hover over segments to preview which outcome they represent. The segment highlights in yellow, and the matching outcome in the list also highlights.

Hover over outcomes in the left panel to see their location in the diagram. This two-way interaction helps connect symbolic notation like $A \\cap B$ with visual diagram regions.`,
    before: ``,
    after: ``,
    link: ``
  },
  obj3: {
    title: `Understanding the Four Regions`,
    content: `**Segment #1 ($A \\cap B$)**: The intersection where both circles overlap. Both [events](!/probability/events) occur simultaneously. This is the most central region of probability calculations.

**Segment #2 ($A \\cap B^c$)**: Event A occurs but B does not. This is the left portion of circle A that doesn't overlap with B.

**Segment #3 ($A^c \\cap B$)**: Event B occurs but A does not. This is the right portion of circle B that doesn't overlap with A.

**Segment #4 ($A^c \\cap B^c$)**: Neither event occurs. This region lies outside both circles, representing outcomes where both A and B fail to happen.`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `Using Show Calculations Feature`,
    content: `Toggle the "Show Calculations" button to reveal step-by-step solutions for each region's probability. The calculations explain how constraints and marginal probabilities determine each segment.

For segment #1, the calculation typically starts with given information like $P(A \\cap B) = 0.15$. For segment #2, it uses $P(A \\cap B^c) = P(A) - P(A \\cap B)$.

Each calculation shows the formula and the numerical result. This feature helps understand the logical sequence for solving Venn diagram problems from constraints to complete solutions.`,
    before: ``,
    after: ``,
    link: ``
  },
  obj5: {
    title: `Reading Probability Values`,
    content: `Each outcome displays its calculated probability on the right side, shown to three decimal places. These values always sum to exactly 1.000, representing the complete [sample space](!/probability/sample-space).

The probabilities reflect the given constraints and marginal probabilities. In the "Student Survey" example, $P(A \\cap B) = 0.150$ means 15% of the population are both students and employed.

Compare different regions to understand relative likelihoods. If $P(A \\cap B^c) = 0.450$ is much larger than $P(A \\cap B) = 0.150$, most students are unemployed in this scenario.`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Working with Multiple Problems`,
    content: `Switch between example problems using the buttons at the top. Each problem has different event descriptions, marginal probabilities, and constraints.

The "Student Survey" problem examines students and employment. The "Health Screening" problem analyzes medical test accuracy with true positives and false positives.

Each problem demonstrates different constraint types. Some give $P(A \\cap B)$ directly, others give $P(A \\cap B^c)$, requiring different solution approaches.`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `Understanding Set Operations`,
    content: `[Set operations](!/probability/sets) form the mathematical foundation of Venn diagrams. The intersection $A \\cap B$ represents "A **and** B" - outcomes where both events occur.

The union $A \\cup B$ represents "A **or** B" - outcomes in either circle. Calculate it as $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$, subtracting the overlap to avoid double-counting.

The complement $A^c$ represents "not A" - everything outside circle A. By definition, $P(A) + P(A^c) = 1$. These operations extend naturally to three or more sets.`,
    before: ``,
    after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Set Theory Fundamentals](!/probability/sets) →@`,
    link: ``
  },
  obj8: {
    title: `Conditional Probability in 2-Set Diagrams`,
    content: `[Conditional probability](!/probability/conditional-probability) $P(A|B)$ asks "what's the probability of A given that B occurred?" Visually, focus only on circle B, then find what fraction of B overlaps with A.

Calculate it as $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$. If $P(A \\cap B) = 0.15$ and $P(B) = 0.40$, then $P(A|B) = 0.15/0.40 = 0.375$ or 37.5%.

The diagram makes this intuitive: restrict attention to region B (segments #1 and #3), then see what portion is also in A (only segment #1).`,
    before: ``,
    after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Conditional Probability](!/probability/conditional-probability) →@`,
    link: ``
  },
  obj9: {
    title: `Applying the Addition Rule`,
    content: `The addition rule calculates the probability of A or B occurring: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. The diagram shows why subtraction is necessary.

Adding $P(A)$ and $P(B)$ counts the intersection twice - once in A's total and once in B's total. Subtracting $P(A \\cap B)$ corrects this double-counting.

In terms of segments: $P(A \\cup B)$ equals segments #1 + #2 + #3, which is $P(A) + P(B) - P(A \\cap B)$ algebraically. The visual matches the formula perfectly.`,
    before: ``,
    after: ``,
    link: ``
  },
  obj10: {
    title: `Related Probability Tools`,
    content: `[3-Set Venn Diagrams](!/probability/visual-tools/venn-diagrams/three-sets) - Extend these concepts to three events with eight regions

[Contingency Tables](!/probability/visual-tools/conditional-probability/contingency-table) - Organize the same probability information in tabular format

[Tree Diagrams](!/probability/tree-diagrams) - Show sequential conditional probabilities over time

[Probability Calculators](!/probability/calculators) - Compute exact values for various probability scenarios

**Independence Tests** - Determine if events are [independent](!/probability/independence) using $P(A \\cap B) = P(A)P(B)$`,
    before: ``,
    after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[3-Set Venn Diagrams](!/probability/visual-tools/venn-diagrams/three-sets) →@

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Probability Calculators](!/probability/calculators) →@`,
    link: ``
  }
},      

faqQuestions: {
        obj1: {
          question: `How do you use a 2-set Venn diagram calculator?`,
          answer: `Select an example problem to view events and constraints. The tool automatically calculates probabilities for all four regions (A∩B, A∩Bᶜ, Aᶜ∩B, Aᶜ∩Bᶜ). Click segments to highlight regions, hover to preview outcomes, and toggle 'Show Calculations' to see step-by-step solutions explaining how each probability was determined.`
        },
        obj2: {
          question: `What are the four regions in a 2-set Venn diagram?`,
          answer: `The four regions represent all possible outcome combinations: (1) A∩B - both events occur (intersection), (2) A∩Bᶜ - only A occurs, (3) Aᶜ∩B - only B occurs, and (4) Aᶜ∩Bᶜ - neither occurs (outside both circles). These four regions partition the entire sample space and their probabilities sum to 1.`
        },
        obj3: {
          question: `How do you calculate P(A∪B) from a Venn diagram?`,
          answer: `P(A∪B) is the probability of A or B occurring. Add segments #1, #2, and #3 (all regions in either circle). Using the formula: P(A∪B) = P(A) + P(B) - P(A∩B). The subtraction removes double-counting of the intersection, which is included in both P(A) and P(B).`
        },
        obj4: {
          question: `What does P(A|B) mean in a Venn diagram?`,
          answer: `P(A|B) is conditional probability - the probability of A given that B occurred. Visually, restrict attention to only circle B, then find what fraction also contains A. Mathematically: P(A|B) = P(A∩B)/P(B). In the diagram, divide segment #1 by segments #1 + #3.`
        },
        obj5: {
          question: `Why do all Venn diagram regions sum to 1?`,
          answer: `The four regions represent all possible mutually exclusive outcomes in the sample space. Every outcome must fall into exactly one region: both events, A only, B only, or neither. Since these exhaust all possibilities and don't overlap, their probabilities must sum to 1 (100% probability).`
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "2-Set Venn Diagram Tool",
          "description": "Interactive 2-set Venn diagram for probability calculations. Click segments, explore intersections, unions, and complements with step-by-step solutions.",
          "url": "https://www.learnmathclass.com/probability/visual-tools/venn-diagrams/two-sets",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "featureList": [
            "Interactive 2-circle Venn diagram with clickable segments",
            "Automatic probability calculation for all 4 regions",
            "Multiple pre-loaded example problems",
            "Step-by-step calculation display with toggle",
            "Hover preview for outcomes and regions",
            "Visual highlighting of selected segments",
            "Real-time connection between notation and diagram"
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
          "keywords": "2 set venn diagram, two circle venn diagram, venn diagram calculator, intersection probability calculator, union probability tool, P(A∩B) calculator, P(A∪B) visualization, interactive venn diagram, probability regions calculator, set theory visualization, complement probability, venn diagram solver, two event probability, probability diagram tool, visual set operations"
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
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "2-Set Venn Diagram",
              "item": "https://www.learnmathclass.com/probability/visual-tools/venn-diagrams/two-sets"
            }
          ]
        }
      }
    },
    'three-sets': {
      mode: 3,
      title: `3-Set Venn Diagram - Interactive Probability Tool | Learn Math Class`,
      description: `Interactive 3-set Venn diagram for complex probability problems. Visualize 8 regions, solve systems of equations, and explore triple intersections with calculations.`,
      name: `3-Set Venn Diagram Tool`,
      url: `/probability/visual-tools/venn-diagrams/three-sets`,
      h1: `3-Set Venn Diagram`,
      keywords: [
        `3 set venn diagram`,
        `three circle venn diagram`,
        `triple intersection probability`,
        `complex venn diagram`,
        `8 region venn diagram`,
        `P(A∩B∩C) calculator`,
        `inclusion exclusion principle`,
        `three event probability`,
        `venn diagram solver`,
        `interactive 3 set diagram`,
        `probability system equations`,
        `three way intersection`,
        `venn diagram calculator`,
        `complex probability visualization`,
        `multi-event probability tool`
      ],
//       sectionsContent: {
//         obj1: {
//           title: `Getting Started with 3-Set Diagrams`,
//           content: `The 3-set Venn diagram displays three overlapping circles labeled A, B, and C. Eight numbered segments represent all possible outcome combinations from three events.

// The center segment (#1) shows the triple intersection where all three events occur simultaneously. Segments #2-#7 represent various two-way intersections and single-event-only regions. Segment #8 lies outside all circles.

// View the pre-loaded "Demographics Study" example showing how constraints like $P(A \\cap B^c) = 0.4$ and $P(A \\cap C^c) = 0.18$ determine all eight region probabilities through systematic calculation.`,
//           before: ``,
//           after: ``,
//           link: ``
//         },
//         obj2: {
//           title: `Navigating Eight Regions`,
//           content: `Click any numbered segment (1-8) to select and highlight it. The corresponding outcome displays in the middle panel with its probability value and explanation.

// **Segments #1-7** lie within at least one circle. **Segment #8** represents $A^c \\cap B^c \\cap C^c$ - outcomes where none of the three events occur.

// Hover over segments to preview which outcome they represent. Hover over outcomes in the list to see their diagram location. This bidirectional connection clarifies complex notation like $A \\cap B^c \\cap C$.`,
//           before: ``,
//           after: ``,
//           link: ``
//         },
//         obj3: {
//           title: `Understanding the Eight Outcomes`,
//           content: `**Segment #1** ($A \\cap B \\cap C$): All three events occur - the center intersection.

// **Segments #2-4**: Two events occur, one doesn't - the three two-way intersections excluding the center.

// **Segments #5-7**: Only one event occurs - portions of single circles that don't overlap with others.

// **Segment #8** ($A^c \\cap B^c \\cap C^c$): None of the events occur - outside all three circles.

// These eight mutually exclusive regions partition the entire [sample space](!/probability/sample-space), and their probabilities sum to exactly 1.000.`,
//           before: ``,
//           after: ``,
//           link: ``
//         },
//         obj4: {
//           title: `Using Show Calculations`,
//           content: `Toggle "Show Calculations" to reveal step-by-step solutions for all eight regions. The tool displays the logical sequence for solving the system of probability equations.

// The solution typically starts by finding pairwise intersections: $P(A \\cap B) = P(A) - P(A \\cap B^c)$. Then it solves for the triple intersection using all available constraints.

// Once the triple intersection is known, other regions follow systematically. For example, $P(A \\cap B \\cap C^c) = P(A \\cap B) - P(A \\cap B \\cap C)$. Each calculation builds on previous results.`,
//           before: ``,
//           after: ``,
//           link: ``
//         },
//         obj5: {
//           title: `Reading Probability Solutions`,
//           content: `Each of the eight outcomes displays its calculated probability to three decimal places. In the Demographics example, $P(A \\cap B \\cap C) = 0.080$ means 8% of the population are women, unemployed, **and** have academic background.

// Compare region sizes to understand relationships. If $P(A \\cap B^c \\cap C) = 0.240$ is much larger than $P(A \\cap B \\cap C) = 0.080$, academic women are predominantly employed in this dataset.

// The probabilities reflect both the given marginals $P(A), P(B), P(C)$ and the specific constraints. Different constraints yield completely different regional distributions.`,
//           before: ``,
//           after: ``,
//           link: ``
//         },
//         obj6: {
//           title: `Solving Systems of Equations`,
//           content: `Three-set problems require solving systems of equations. Given three marginals and two or three constraints, the tool determines all eight unknown region probabilities.

// The general approach: (1) Use constraints to find pairwise intersections like $P(A \\cap B)$. (2) Set up equations relating the triple intersection to known values. (3) Solve for the center region. (4) Calculate remaining regions systematically.

// Click "Show Calculations" to see the General Solution Steps outlining this process. Individual region calculations appear when you select specific segments.`,
//           before: ``,
//           after: ``,
//           link: ``
//         },
//         obj7: {
//           title: `The Inclusion-Exclusion Principle`,
//           content: `For three [sets](!/probability/sets), the inclusion-exclusion principle calculates $P(A \\cup B \\cup C)$ - the probability that at least one event occurs.

// $$P(A \\cup B \\cup C) = P(A) + P(B) + P(C) - P(A \\cap B) - P(A \\cap C) - P(B \\cap C) + P(A \\cap B \\cap C)$$

// The formula adds individual probabilities, subtracts pairwise overlaps (to correct double-counting), then adds back the triple intersection (which was subtracted three times but should only be subtracted twice).

// In the diagram, $P(A \\cup B \\cup C)$ equals segments #1 through #7 - everything inside at least one circle.`,
//           before: ``,
//           after: ``,
//           link: ``
//         },
//         obj8: {
//           title: `Conditional Probability with Three Events`,
//           content: `[Conditional probability](!/probability/conditional-probability) extends to three events. $P(A \\cap B | C)$ asks: given C occurred, what's the probability both A and B occur?

// Visually, restrict to circle C (segments #1, #3, #5, #7), then find what fraction also lies in both A and B (only segment #1).

// Calculate as $P(A \\cap B | C) = \\frac{P(A \\cap B \\cap C)}{P(C)}$. If $P(A \\cap B \\cap C) = 0.08$ and $P(C) = 0.62$, then $P(A \\cap B | C) = 0.08/0.62 \\approx 0.129$ or 12.9%.`,
//           before: ``,
//           after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Conditional Probability](!/probability/conditional-probability) →@`,
//           link: ``
//         },
//         obj9: {
//           title: `When to Use 3-Set Diagrams`,
//           content: `Use 3-set Venn diagrams when analyzing three distinct characteristics or categories simultaneously. Common applications include:

// **Survey analysis**: Demographic studies with three attributes (age group, employment status, education level)

// **Medical research**: Patients with three conditions or risk factors

// **Quality control**: Products with three types of potential defects

// **Market segmentation**: Customers categorized by three preferences or behaviors

// For four or more events, contingency tables or tree diagrams become more practical than Venn diagrams.`,
//           before: ``,
//           after: ``,
//           link: ``
//         },
//         obj10: {
//           title: `Related Probability Tools`,
//           content: `**2-Set Venn Diagrams** - Simpler version with four regions for two events

// **Contingency Tables** - Alternative tabular representation of multi-event probabilities

// **Tree Diagrams** - Sequential probability representation for dependent events

// **Bayes Theorem Calculator** - Specialized tool for reverse conditional probabilities

// **Probability Calculators** - General probability computation tools for various scenarios`,
//           before: ``,
//           after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[2-Set Venn Diagrams](!/probability/visual-tools/venn-diagrams/two-sets) →@

// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Probability Calculators](!/probability/calculators) →@`,
//           link: ``
//         }
//       },
sectionsContent: {
  obj1: {
    title: `Getting Started with 3-Set Diagrams`,
    content: `The 3-set [Venn diagram](!/probability/visual-tools/venn-diagrams) displays three overlapping circles labeled A, B, and C. Eight numbered segments represent all possible outcome combinations from three [events](!/probability/events).

The center segment (#1) shows the triple intersection where all three events occur simultaneously. Segments #2-#7 represent various two-way intersections and single-event-only regions. Segment #8 lies outside all circles.

View the pre-loaded "Demographics Study" example showing how constraints like $P(A \\cap B^c) = 0.4$ and $P(A \\cap C^c) = 0.18$ determine all eight region probabilities through systematic calculation.`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `Navigating Eight Regions`,
    content: `Click any numbered segment (1-8) to select and highlight it. The corresponding outcome displays in the middle panel with its probability value and explanation.

**Segments #1-7** lie within at least one circle. **Segment #8** represents $A^c \\cap B^c \\cap C^c$ - outcomes where none of the three events occur.

Hover over segments to preview which outcome they represent. Hover over outcomes in the list to see their diagram location. This bidirectional connection clarifies complex notation like $A \\cap B^c \\cap C$.`,
    before: ``,
    after: ``,
    link: ``
  },
  obj3: {
    title: `Understanding the Eight Outcomes`,
    content: `**Segment #1** ($A \\cap B \\cap C$): All three events occur - the center intersection.

**Segments #2-4**: Two events occur, one doesn't - the three two-way intersections excluding the center.

**Segments #5-7**: Only one event occurs - portions of single circles that don't overlap with others.

**Segment #8** ($A^c \\cap B^c \\cap C^c$): None of the events occur - outside all three circles.

These eight mutually exclusive regions partition the entire [sample space](!/probability/sample-space), and their probabilities sum to exactly 1.000.`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `Using Show Calculations`,
    content: `Toggle "Show Calculations" to reveal step-by-step solutions for all eight regions. The tool displays the logical sequence for solving the system of probability equations.

The solution typically starts by finding pairwise intersections: $P(A \\cap B) = P(A) - P(A \\cap B^c)$. Then it solves for the triple intersection using all available constraints.

Once the triple intersection is known, other regions follow systematically. For example, $P(A \\cap B \\cap C^c) = P(A \\cap B) - P(A \\cap B \\cap C)$. Each calculation builds on previous results.`,
    before: ``,
    after: ``,
    link: ``
  },
  obj5: {
    title: `Reading Probability Solutions`,
    content: `Each of the eight outcomes displays its calculated probability to three decimal places. In the Demographics example, $P(A \\cap B \\cap C) = 0.080$ means 8% of the population are women, unemployed, **and** have academic background.

Compare region sizes to understand relationships. If $P(A \\cap B^c \\cap C) = 0.240$ is much larger than $P(A \\cap B \\cap C) = 0.080$, academic women are predominantly employed in this dataset.

The probabilities reflect both the given marginals $P(A), P(B), P(C)$ and the specific constraints. Different constraints yield completely different regional distributions.`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Solving Systems of Equations`,
    content: `Three-set problems require solving systems of equations. Given three marginals and two or three constraints, the tool determines all eight unknown region probabilities.

The general approach: (1) Use constraints to find pairwise intersections like $P(A \\cap B)$. (2) Set up equations relating the triple intersection to known values. (3) Solve for the center region. (4) Calculate remaining regions systematically.

Click "Show Calculations" to see the General Solution Steps outlining this process. Individual region calculations appear when you select specific segments.`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `The Inclusion-Exclusion Principle`,
    content: `For three [sets](!/probability/sets), the inclusion-exclusion principle calculates $P(A \\cup B \\cup C)$ - the probability that at least one event occurs.

$$P(A \\cup B \\cup C) = P(A) + P(B) + P(C) - P(A \\cap B) - P(A \\cap C) - P(B \\cap C) + P(A \\cap B \\cap C)$$

The formula adds individual probabilities, subtracts pairwise overlaps (to correct double-counting), then adds back the triple intersection (which was subtracted three times but should only be subtracted twice).

In the diagram, $P(A \\cup B \\cup C)$ equals segments #1 through #7 - everything inside at least one circle.`,
    before: ``,
    after: ``,
    link: ``
  },
  obj8: {
    title: `Conditional Probability with Three Events`,
    content: `[Conditional probability](!/probability/conditional-probability) extends to three events. $P(A \\cap B | C)$ asks: given C occurred, what's the probability both A and B occur?

Visually, restrict to circle C (segments #1, #3, #5, #7), then find what fraction also lies in both A and B (only segment #1).

Calculate as $P(A \\cap B | C) = \\frac{P(A \\cap B \\cap C)}{P(C)}$. If $P(A \\cap B \\cap C) = 0.08$ and $P(C) = 0.62$, then $P(A \\cap B | C) = 0.08/0.62 \\approx 0.129$ or 12.9%.`,
    before: ``,
    after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Conditional Probability](!/probability/conditional-probability) →@`,
    link: ``
  },
  obj9: {
    title: `When to Use 3-Set Diagrams`,
    content: `Use 3-set Venn diagrams when analyzing three distinct characteristics or categories simultaneously. Common applications include:

**Survey analysis**: Demographic studies with three attributes (age group, employment status, education level)

**Medical research**: Patients with three conditions or risk factors

**Quality control**: Products with three types of potential defects

**Market segmentation**: Customers categorized by three preferences or behaviors

For four or more events, contingency tables or [tree diagrams](!/probability/tree-diagrams) become more practical than Venn diagrams.`,
    before: ``,
    after: ``,
    link: ``
  },
  obj10: {
    title: `Related Probability Tools`,
    content: `[2-Set Venn Diagrams](!/probability/visual-tools/venn-diagrams/two-sets) - Simpler version with four regions for two events

[Contingency Tables](!/probability/visual-tools/conditional-probability/contingency-table) - Alternative tabular representation of multi-event probabilities

[Tree Diagrams](!/probability/tree-diagrams) - Sequential probability representation for dependent events

[Bayes Theorem Calculator](!/probability/calculators/bayes-calculator) - Specialized tool for reverse conditional probabilities

[Probability Calculators](!/probability/calculators) - General probability computation tools for various scenarios`,
    before: ``,
    after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[2-Set Venn Diagrams](!/probability/visual-tools/venn-diagrams/two-sets) →@

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Probability Calculators](!/probability/calculators) →@`,
    link: ``
  }
},      

faqQuestions: {
        obj1: {
          question: `How do you use a 3-set Venn diagram calculator?`,
          answer: `The tool displays three overlapping circles with 8 numbered segments. View the pre-loaded example showing events, marginal probabilities, and constraints. Click segments to highlight regions, hover to preview outcomes, and toggle 'Show Calculations' to see how the system of equations solves for all 8 region probabilities including the critical triple intersection.`
        },
        obj2: {
          question: `What are the 8 regions in a 3-set Venn diagram?`,
          answer: `The 8 regions represent all outcome combinations: (1) A∩B∩C - all three events, (2-4) two events without the third, (5-7) one event only, and (8) Aᶜ∩Bᶜ∩Cᶜ - none occur. These mutually exclusive regions partition the sample space completely, with probabilities summing to 1.`
        },
        obj3: {
          question: `How do you calculate the triple intersection P(A∩B∩C)?`,
          answer: `Use the given marginals P(A), P(B), P(C) and constraints to set up a system of equations. First find pairwise intersections like P(A∩B) using constraints such as P(A∩Bᶜ). Then solve for P(A∩B∩C) by relating it to known pairwise intersections. The tool shows complete step-by-step calculations.`
        },
        obj4: {
          question: `What is the inclusion-exclusion principle for 3 sets?`,
          answer: `The inclusion-exclusion principle calculates P(A∪B∪C): add individual probabilities P(A) + P(B) + P(C), subtract pairwise intersections - P(A∩B) - P(A∩C) - P(B∩C), then add back the triple intersection + P(A∩B∩C). This corrects for overlaps counted multiple times.`
        },
        obj5: {
          question: `When should you use a 3-set Venn diagram instead of 2-set?`,
          answer: `Use 3-set diagrams when analyzing three distinct categories simultaneously - demographic studies with three attributes, medical conditions with three risk factors, or quality control with three defect types. Use 2-set diagrams for simpler two-category problems, as they're easier to interpret and calculate.`
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "3-Set Venn Diagram Tool",
          "description": "Interactive 3-set Venn diagram for complex probability problems. Visualize 8 regions, solve systems of equations, and explore triple intersections with calculations.",
          "url": "https://www.learnmathclass.com/probability/visual-tools/venn-diagrams/three-sets",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "featureList": [
            "Interactive 3-circle Venn diagram with 8 clickable segments",
            "Automatic solution of probability equation systems",
            "Triple intersection calculation P(A∩B∩C)",
            "Step-by-step solution display for all 8 regions",
            "Pre-loaded complex probability examples",
            "Hover and click interactions for region exploration",
            "Inclusion-exclusion principle visualization",
            "General solution steps explanation"
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
          "keywords": "3 set venn diagram, three circle venn diagram, triple intersection probability, complex venn diagram, 8 region venn diagram, P(A∩B∩C) calculator, inclusion exclusion principle, three event probability, venn diagram solver, interactive 3 set diagram, probability system equations, three way intersection, venn diagram calculator, complex probability visualization, multi-event probability tool"
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
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "3-Set Venn Diagram",
              "item": "https://www.learnmathclass.com/probability/visual-tools/venn-diagrams/three-sets"
            }
          ]
        }
      }
    }
  };

  const currentConfig = viewConfig[params.view];
  const sectionsContent = currentConfig.sectionsContent;
  const faqQuestions = currentConfig.faqQuestions;
  const schemas = {
    ...currentConfig.schemas,
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

  return {
    props: {
      sectionsContent,
      faqQuestions,
      schemas,
      seoData: {
        title: currentConfig.title,
        description: currentConfig.description,
        keywords: currentConfig.keywords.join(", "),
        url: currentConfig.url,
        name: currentConfig.name
      },
      currentMode: currentConfig.mode,
      h1Title: currentConfig.h1
    }
  }
}

export default function VennDiagramsPage({seoData, sectionsContent, faqQuestions, schemas, currentMode, h1Title}) {

  const genericSections = Object.keys(sectionsContent).map((key, index) => ({
    id: `${index + 1}`,
    title: sectionsContent[key].title,
    link: sectionsContent[key].link,
    content: [sectionsContent[key].content]
  }));

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
      <br/>
      <br/>
      <br/>
      <br/>
      <OperaSidebar 
        side={`right`}
        sidebarWidth={`45px`}
        panelWidth={`200px`}
        iconColor={`white`}
        panelBackgroundColor={`#f2f2f2`}
      /> 
      <Breadcrumb/>
      <br/>
      <br/>
      <h1 className={`title`} style={{marginTop:`-10px`,marginBottom:`20px`}}>{h1Title}</h1>
      <br/>
      <br/>
      
      {currentMode === 2 ? (
        <VennExplorer2 problemsData={[]} />
      ) : (
        <VennExplorer problemsData={[]} />
      )}
      
      <br/>
      <SectionTableOfContents sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      <Sections sections={genericSections}/>
      <br/>
      <br/>
      <br/>
    </>
  )
}