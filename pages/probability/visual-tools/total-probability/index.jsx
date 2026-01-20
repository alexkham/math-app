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
// import TotalProbabilityVisualizer from '@/app/components/probability/total-probability/TotalProbabilityVisualizer'
// import TotalProbabilityVisualizerV2 from '@/app/components/probability/total-probability/TotalProbabilityVisualizerV2'


// export async function getStaticProps(){

//   const keyWords=['','','','','']

//   // •

  
// // <hr style="border-width:1px;"></hr>

// // <hr style="color:blue;" />

// // <hr style="border-color:#3498db; border-width:1px;" />



// // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// // <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
//         //     {processContent(sectionsContent.normal.notation)}
//         // </div>,


// //   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
// //     {processContent(sectionsContent.normal.parameters)}
// // </div>,
        
// //  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
// //                   {processContent(sectionsContent.obj4.content)}
// //                   </div>,


//     const sectionsContent={

//     obj1:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
  
//     },
//     obj2:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
  
//     obj3:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj4:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj5:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj6:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj7:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj8:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj9:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj10:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj11:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj12:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj13:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },
//     obj14:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },


//     obj15:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     }
  
//   }


//   const introContent = {
//   id: "intro",
//   title: "",
//   content: ``
// }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Total Probability Visualizer | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/probability/visual-tools/total-probability",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function TotalProbabilityPage({seoData,sectionsContent , introContent}) {

    
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
//     },
//     {
//         id:'4',
//         title:sectionsContent.obj4.title,
//         link:sectionsContent.obj4.link,
//         content:[
//           sectionsContent.obj4.content,
//         ]
//     },
//     {
//         id:'5',
//         title:sectionsContent.obj5.title,
//         link:sectionsContent.obj5.link,
//         content:[
//           sectionsContent.obj5.content,
//         ]
//     },
//     {
//         id:'6',
//         title:sectionsContent.obj6.title,
//         link:sectionsContent.obj6.link,
//         content:[
//           sectionsContent.obj6.content,
//         ]
//     },
//     {
//         id:'7',
//         title:sectionsContent.obj7.title,
//         link:sectionsContent.obj7.link,
//         content:[
//           sectionsContent.obj7.content,
//         ]
//     },
//     {
//         id:'8',
//         title:sectionsContent.obj8.title,
//         link:sectionsContent.obj8.link,
//         content:[
//           sectionsContent.obj8.content,
//         ]
//     },
//     {
//         id:'9',
//         title:sectionsContent.obj9.title,
//         link:sectionsContent.obj9.link,
//         content:[
//           sectionsContent.obj9.content,
//         ]
//     },
//     {
//         id:'10',
//         title:sectionsContent.obj10.title,
//         link:sectionsContent.obj10.link,
//         content:[
//           sectionsContent.obj10.content,
//         ]
//     },
//     {
//         id:'11',
//         title:sectionsContent.obj11.title,
//         link:sectionsContent.obj11.link,
//         content:[
//           sectionsContent.obj11.content,
//         ]
//     },
//     {
//         id:'12',
//         title:sectionsContent.obj12.title,
//         link:sectionsContent.obj12.link,
//         content:[
//           sectionsContent.obj12.content,
//         ]
//     },
//     {
//         id:'13',
//         title:sectionsContent.obj13.title,
//         link:sectionsContent.obj13.link,
//         content:[
//           sectionsContent.obj13.content,
//         ]
//     },
//     {
//         id:'14',
//         title:sectionsContent.obj14.title,
//         link:sectionsContent.obj14.link,
//         content:[
//           sectionsContent.obj14.content,
//         ]
//     },
//     {
//         id:'15',
//         title:sectionsContent.obj15.title,
//         link:sectionsContent.obj15.link,
//         content:[
//           sectionsContent.obj15.content,
//         ]
//     },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
    
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
//            // topOffset='65px' 
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          /> 
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'-50px',marginBottom:'-120px'}}>Total Probability Visualizer</h1>
//    <br/>
//    {/* <TotalProbabilityVisualizer/> */}
//    <div style={{transform:'scale(0.85)'}}>
//    <TotalProbabilityVisualizerV2/>
//    </div>
//    <br/>
//    {/* <SectionTableOfContents sections={genericSections}/> */}
//    <br/>
//    <br/>
//    <br/>
//     {/* <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           //  "#f2f2f2"
//           textColor="#06357a"
//         /> */}
//    <br/>
//    <br/>
//    {/* <Sections sections={genericSections}/> */}
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
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
import TotalProbabilityVisualizer from '@/app/components/probability/total-probability/TotalProbabilityVisualizer'
import TotalProbabilityVisualizerV2 from '@/app/components/probability/total-probability/TotalProbabilityVisualizerV2'


export async function getStaticProps(){

  const keyWords = [
    'total probability theorem',
    'law of total probability',
    'total probability visualizer',
    'partition probability',
    'total probability calculator',
    'probability tree diagram',
    'marginal probability calculator',
    'joint probability visualization',
    'Bayes theorem application',
    'conditional probability paths',
    'interactive probability tool',
    'total probability formula',
    'probability partition example',
    'law of total probability calculator',
    'total probability interactive'
  ]

  const sectionsContent = {
    obj1: {
      title: `Using the Interactive Visualizer`,
      content: `The Total Probability Visualizer lets you explore how probabilities flow through partitioned sample spaces. Start by selecting the number of A events (2-5) and B outcomes (2-5) using the control buttons. Notice that these numbers have an inverse relationship - more A events means fewer possible B outcomes to keep the visualization readable.

The tree diagram shows probability paths from left to right. The first level branches represent your A events, each labeled with its probability P(Aᵢ). The second level shows all possible B outcomes for each A event, labeled with conditional probabilities P(Bⱼ|Aᵢ). Click on any outcome in the calculations panel to highlight its corresponding path through the tree.

Use the "Customize Data" button to reveal probability sliders. Adjust P(A) values and they automatically normalize to sum to 1. Similarly, conditional probabilities P(B|A) for each A event normalize across their row. Watch how the tree diagram and calculations update in real-time as you modify probabilities.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Understanding the Calculations Panel`,
      content: `The right panel displays four types of probability calculations. The **Marginal Probabilities** section shows P(Bⱼ) for each outcome, calculated using the total probability formula by summing across all paths that lead to that outcome. Click any marginal probability to highlight all contributing paths in the tree.

The **View All Paths** buttons let you highlight every path passing through a specific A event, making it easy to see how that partition element contributes to different outcomes. The **Joint Probabilities** section displays P(Aᵢ ∩ Bⱼ) for every combination, calculated by multiplying along each path from start to endpoint.

The **Bayes' Theorem** section shows reversed conditional probabilities P(Aᵢ|Bⱼ), demonstrating how to work backward from observed outcomes to determine which partition element likely occurred. These calculations automatically update as you adjust your probability values, providing instant feedback on how changes propagate through the system.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `What is the Law of Total Probability?`,
      content: `The law of total probability provides a method for calculating the probability of an event B by considering all possible ways B can occur through a partition of the sample space. If events A₁, A₂, ..., Aₙ form a partition (mutually exclusive and exhaustive), then the probability of any event B is given by:

$$P(B) = \\sum_{i=1}^{n} P(A_i) \\cdot P(B|A_i)$$

This formula says that to find P(B), we sum the probabilities of B occurring through each partition element Aᵢ. Each term P(Aᵢ) · P(B|Aᵢ) represents one path to B through the partition. The visualizer displays this graphically - each path from start to a B outcome corresponds to one term in this sum.

The power of this theorem lies in breaking complex probability problems into simpler conditional pieces. When direct calculation of P(B) is difficult, partitioning the sample space into cases where conditional probabilities are easier to determine makes the problem tractable.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Partitions of the Sample Space`,
      content: `A partition of the sample space is a collection of events that are mutually exclusive (no overlap) and collectively exhaustive (cover all possibilities). In the visualizer, the A events form a partition - exactly one A event occurs in any outcome, and together they account for all possibilities.

Mathematically, events A₁, A₂, ..., Aₙ partition the sample space if: (1) Aᵢ ∩ Aⱼ = ∅ for all i ≠ j (mutually exclusive), and (2) A₁ ∪ A₂ ∪ ... ∪ Aₙ = S (collectively exhaustive). These properties ensure that probabilities P(A₁), P(A₂), ..., P(Aₙ) sum to exactly 1.

Common partitions include: categorizing by different scenarios (rainy/sunny, male/female, treatment groups in experiments), age groups in demographic studies, or different disease states in medical testing. The visualizer lets you explore how outcomes distribute across partition elements and how this affects total probabilities.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Connection to Bayes' Theorem`,
      content: `The law of total probability and Bayes' theorem are intrinsically connected. While total probability calculates P(B) by conditioning on partition elements, Bayes' theorem reverses this to find P(Aᵢ|B):

$$P(A_i|B) = \\frac{P(A_i) \\cdot P(B|A_i)}{P(B)} = \\frac{P(A_i) \\cdot P(B|A_i)}{\\sum_{j=1}^{n} P(A_j) \\cdot P(B|A_j)}$$

Notice that the denominator is exactly the total probability formula. This connection means the two theorems work together - total probability computes the normalizing constant needed for Bayes' theorem. The visualizer displays both: marginal P(B) values use total probability, while the Bayes' theorem section shows the reversed conditionals.

This relationship is crucial in statistical inference. Given an observed outcome B, Bayes' theorem determines which partition element Aᵢ most likely caused it, using the total probability of B as the normalizing factor. The visualizer lets you see how prior probabilities P(Aᵢ) and likelihoods P(B|Aᵢ) combine to produce posterior probabilities P(Aᵢ|B).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Joint and Marginal Probabilities`,
      content: `Joint probabilities P(Aᵢ ∩ Bⱼ) represent the probability that both events occur simultaneously. In the tree diagram, each endpoint corresponds to a joint probability, calculated by multiplying along the path: P(Aᵢ ∩ Bⱼ) = P(Aᵢ) · P(Bⱼ|Aᵢ). Click any joint probability in the panel to see its path highlighted.

Marginal probabilities are obtained by summing joint probabilities. The marginal P(Bⱼ) is found by summing all joint probabilities involving Bⱼ across different A events: P(Bⱼ) = Σᵢ P(Aᵢ ∩ Bⱼ). This is exactly the total probability formula - marginal probabilities are computed using total probability.

The relationship between joint and marginal probabilities is fundamental to probability theory. Marginals represent "overall" probabilities ignoring certain variables, while joints represent "specific" probabilities of combinations. The visualizer shows both simultaneously, helping you understand how conditioning on partition elements (the A events) breaks down marginal probabilities into their joint components.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Real-World Applications`,
      content: `The law of total probability appears throughout practical probability problems. In **medical diagnosis**, doctors partition patients by test results (positive/negative) and use total probability to find overall disease prevalence: P(Disease) = P(Test+)·P(Disease|Test+) + P(Test-)·P(Disease|Test-).

In **quality control**, manufacturers partition production by machine or shift. The probability of a defective item is: P(Defective) = Σ P(Machineᵢ)·P(Defective|Machineᵢ). This helps identify which machines or shifts contribute most to defects.

**Risk assessment** in finance and insurance uses partitions by economic scenarios. The total probability of a loss event considers all possible economic conditions: P(Loss) = Σ P(Scenarioᵢ)·P(Loss|Scenarioᵢ). The visualizer's interactive nature makes it easy to explore how different scenario probabilities affect overall risk.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Probability Trees and Path Analysis`,
      content: `Probability trees provide a visual representation of sequential or conditional probability structures. Each branch represents a possible outcome with its associated probability. In the total probability context, the first level branches show the partition (A events), and second level branches show outcomes (B events) conditional on each partition element.

Path probabilities are calculated by multiplying probabilities along the path. A path from start through Aᵢ to Bⱼ has probability P(Aᵢ) · P(Bⱼ|Aᵢ) = P(Aᵢ ∩ Bⱼ). The tree structure makes this multiplication rule visual and intuitive. The visualizer highlights paths when you click outcomes, showing exactly which probabilities multiply together.

Trees excel at organizing complex conditional relationships. When multiple stages of conditioning exist, trees prevent confusion about which probabilities to multiply versus add. The total probability theorem corresponds to summing across all paths reaching the same endpoint - the visualizer makes this summation explicit in the marginal probability calculations.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Common Mistakes and Misconceptions`,
      content: `A common error is confusing P(B|A) with P(A|B). The total probability formula uses P(B|A) values (likelihoods of B given different A events), not the reverse. The visualizer's tree structure helps prevent this - arrows point from A to B, showing the direction of conditioning clearly.

Another mistake is forgetting that partition elements must be exhaustive. If your A events don't cover all possibilities, the total probability formula gives an incomplete answer. The visualizer enforces this - probabilities P(Aᵢ) always sum to 1, ensuring the partition is complete.

Some students incorrectly try to apply total probability without a proper partition. The theorem requires mutually exclusive, exhaustive events. Using overlapping categories or incomplete sets leads to wrong answers. The visualizer's structure - where you must specify distinct A events that account for all probability mass - reinforces the partition requirement.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Total Probability vs. Addition Rule`,
      content: `The total probability theorem is sometimes confused with the basic addition rule for mutually exclusive events. While both involve summing probabilities, they apply in different contexts. The addition rule P(A ∪ B) = P(A) + P(B) combines probabilities of mutually exclusive events A and B directly.

Total probability, by contrast, calculates P(B) by conditioning on a partition: P(B) = Σ P(Aᵢ)·P(B|Aᵢ). This is necessary when you don't know P(B) directly but do know how likely B is under different partition elements. The multiplication by P(Aᵢ) weights each conditional probability by how likely that partition element is.

Think of it this way: addition rule combines alternatives (A or B), while total probability combines pathways (B through A₁, or B through A₂, etc.). The visualizer shows these pathways explicitly - each path to a B outcome represents one term in the total probability sum.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Related Probability Concepts`,
      content: `**Conditional Probability** forms the foundation of total probability. Understanding P(B|A) is essential before applying the total probability theorem. For detailed coverage of conditional probability, see **conditional probability theory** and **conditional probability visualizations**.

**Bayes' Theorem** reverses the conditioning in total probability problems. After computing P(B) using total probability, Bayes' theorem finds P(Aᵢ|B). These theorems work as a pair in many applications. Learn more at **Bayes' theorem calculator** and **Bayes' theorem examples**.

**Independence** provides an important special case. When B is independent of the partition, P(B|Aᵢ) equals P(B) for all i, and total probability simplifies to P(B) = Σ P(Aᵢ)·P(B) = P(B). Explore independence at **independent events** and **testing independence**.

**Probability distributions** can be analyzed using total probability by conditioning on parameter values or mixture components. See **mixture distributions** and **conditional distributions** for applications in statistical modeling.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj12: {
      title: `Practice Problems and Exercises`,
      content: `Use the visualizer to explore these scenarios:

**Problem 1 - Medical Testing**: Set up two A events (Disease, No Disease) with P(Disease) = 0.01. Set conditional probabilities P(Test+|Disease) = 0.95 and P(Test+|No Disease) = 0.05. Use total probability to find P(Test+). The visualizer shows this equals 0.01·0.95 + 0.99·0.05 = 0.059.

**Problem 2 - Manufacturing**: Create three A events for three machines with P(M₁) = 0.5, P(M₂) = 0.3, P(M₃) = 0.2. Set defect rates P(Defect|M₁) = 0.02, P(Defect|M₂) = 0.05, P(Defect|M₃) = 0.03. Calculate overall defect probability using total probability.

**Problem 3 - Weather**: Set A events for weather conditions (Sunny, Cloudy, Rainy). Choose reasonable probabilities for each. Then set conditional probabilities for traffic delay given each weather condition. Use total probability to find overall delay probability. Experiment with different weather probabilities to see how total delay probability changes.`,
      before: ``,
      after: ``,
      link: '',
    }
  }

  const faqQuestions = {
    obj1: {
      question: "What is the law of total probability?",
      answer: "The law of total probability states that if A₁, A₂, ..., Aₙ form a partition of the sample space, then P(B) = Σ P(Aᵢ)·P(B|Aᵢ). This formula calculates the probability of event B by considering all possible ways B can occur through the partition elements, weighting each path by the probability of that partition element."
    },
    obj2: {
      question: "How does the visualizer calculate marginal probabilities?",
      answer: "The visualizer calculates marginal probabilities P(Bⱼ) using the total probability formula: it sums P(Aᵢ)·P(Bⱼ|Aᵢ) across all A events. Each term represents one path through the tree to outcome Bⱼ. Click any marginal probability to see all contributing paths highlighted in the tree diagram."
    },
    obj3: {
      question: "What is a partition of the sample space?",
      answer: "A partition is a collection of events that are mutually exclusive (no overlap) and collectively exhaustive (cover all possibilities). The A events in the visualizer form a partition - exactly one occurs in any outcome, and their probabilities sum to 1. This structure is required for the total probability theorem to work correctly."
    },
    obj4: {
      question: "How is total probability related to Bayes' theorem?",
      answer: "Total probability calculates P(B) by conditioning on partition elements: P(B) = Σ P(Aᵢ)·P(B|Aᵢ). Bayes' theorem reverses this to find P(Aᵢ|B) = P(Aᵢ)·P(B|Aᵢ)/P(B), where the denominator is the total probability. The two theorems work together - total probability provides the normalizing constant for Bayes' theorem."
    },
    obj5: {
      question: "When should I use the law of total probability?",
      answer: "Use total probability when you need to find P(B) but don't know it directly. Instead, you know how to partition the sample space into cases where conditional probabilities P(B|Aᵢ) are easier to determine. Common applications include medical diagnosis, quality control, risk assessment, and any scenario where outcomes can be categorized into distinct cases."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Total Probability Visualizer",
      "description": "Interactive tool for visualizing the law of total probability with tree diagrams, marginal probabilities, joint probabilities, and Bayes' theorem calculations.",
      "url": "https://www.learnmathclass.com/probability/visual-tools/total-probability",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Interactive probability tree diagram with adjustable partitions",
        "Real-time calculation of marginal probabilities using total probability formula",
        "Joint probability visualization for all outcome combinations",
        "Bayes' theorem calculations showing reversed conditional probabilities",
        "Customizable probability sliders with automatic normalization",
        "Click-to-highlight path tracing through the probability tree",
        "Dynamic updates showing how probability changes propagate through the system"
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
      "keywords": keyWords.join(", ")
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
          "name": "Total Probability Visualizer",
          "item": "https://www.learnmathclass.com/probability/visual-tools/total-probability"
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
      faqQuestions,
      schemas,
      seoData: {
        title: "Total Probability Visualizer - Interactive Tool | Learn Math Class",
        description: "Visualize the law of total probability with interactive tree diagrams. Calculate marginal, joint, and conditional probabilities with real-time updates and path highlighting.",
        keywords: keyWords.join(", "),
        url: "/probability/visual-tools/total-probability",
        name: "Total Probability Visualizer"
      }
    }
  }
}

export default function TotalProbabilityPage({seoData, sectionsContent, faqQuestions, schemas}) {

  const genericSections = Object.keys(sectionsContent).map((key, index) => ({
    id: `${index + 1}`,
    title: sectionsContent[key].title,
    link: sectionsContent[key].link,
    content: [sectionsContent[key].content]
  }))

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
      <h1 className='title' style={{marginTop:'-50px',marginBottom:'-120px'}}>Total Probability Visualizer</h1>
      <br/>
      <div style={{transform:'scale(0.85)'}}>
        <TotalProbabilityVisualizerV2/>
      </div>
      <br/>
      <SectionTableOfContents sections={genericSections}/>
      <br/>
      <br/>
      <br/>
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