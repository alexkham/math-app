// Surfaced on the /probability hub via buildSectionData extraction.
// Kept at the very top: first match wins, and commented-out code below
// contains apostrophes that corrupt extraction further down the file.
const hubMeta = {
  name: 'Rules of Probability',
  hubDescription: 'The working toolkit of probability: axiomatic bounds, complement and difference rules, addition and inclusion-exclusion, multiplication and chain rules, the law of total probability, and the Bayes theorem — each stated formally and illustrated.',
}

// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
// import React from 'react'
// import '../../pages.css'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
// import IntroSection from '@/app/components/page-components/section/IntroContentSection';
// import Sections from '@/app/components/page-components/section/Sections';
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
// import ExpandableTable from '@/app/components/generic-table/ExpandableTable';
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'



// export async function getStaticProps(){


//     const keyWords=[
//         'probability rules','probability laws','probability','bayes rule',
//         'bayes rule in probability'
//     ]
   


//     const probabilityRulesData = {
//         "Basic Axiomatic Properties": [
//           {
//             id: 1,
//             rule: "Non-negativity & Bounds",
//             formula: "$0 \\le P(A) \\le 1$",
//             explanation: "The probability of any event lies between 0 and 1, inclusive."
//           },
//           {
//             id: 2,
//             rule: "Empty-Set Rule",
//             formula: "$P(\\varnothing) = 0$",
//             explanation: "The probability of the empty event (impossible outcome) is zero."
//           }
//         ],
      
//         "Set-Operation Rules": [
//           {
//             id: 3,
//             rule: "Complement Rule",
//             formula: "$P(A^c) = 1 - P(A)$",
//             explanation: "The probability of the complement of A equals one minus the probability of A."
//           },
//           {
//             id: 4,
//             rule: "Difference Rule",
//             formula: "$P(A \\setminus B) = P(A) - P(A \\cap B)$",
//             explanation: "The probability of A excluding B equals the probability of A minus the probability of A and B."
//           },
//           {
//             id: 5,
//             rule: "Subset Absorption",
//             formula: "If $B \\subseteq A$, then $P(A \\cap B) = P(B)$ and $P(A \\cup B) = P(A)$",
//             explanation: "If B is contained in A, the intersection has B’s probability and the union has A’s."
//           },
//           {
//             id: 6,
//             rule: "Complement Absorption",
//             formula: "If $A \\subseteq B^c$, then $P(A \\cap B^c) = P(A)$ and $P(A \\cup B^c) = P(B^c)$",
//             explanation: "When A lies entirely outside B, intersection yields A and union yields the complement of B."
//           },
//           {
//             id: 7,
//             rule: "Mutual Exclusivity",
//             formula: "If $A \\cap B = \\varnothing$, then $P(A \\cap B) = 0$ and $P(A \\cup B) = P(A) + P(B)$",
//             explanation: "Disjoint events have zero probability of occurring together, and their union is the sum of probabilities."
//           }
//         ],
      
//         "Additive & Inequality Rules": [
//           {
//             id: 8,
//             rule: "Addition Rule",
//             formula: "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$",
//             explanation: "The probability of A or B equals the sum minus the overlap."
//           },
//           {
//             id: 9,
//             rule: "Inclusion–Exclusion Principle",
//             formula: "$P\\bigl(\\bigcup_{i=1}^n A_i\\bigr) = \\sum_i P(A_i)\n  - \\sum_{i<j}P(A_i \\cap A_j) + \\cdots + (-1)^{n-1}P\\bigl(\\bigcap_{i=1}^n A_i\\bigr)$",
//             explanation: "General formula for the probability of a union of n events, correcting for over-counted overlaps."
//           },
//           {
//             id: 10,
//             rule: "Monotonicity & Boole’s Inequality",
//             formula: "If $A \\subseteq B$, then $P(A) \\le P(B)$; and $P\\bigl(\\bigcup_i A_i\\bigr) \\le \\sum_i P(A_i)$",
//             explanation: "Probabilities respect subset ordering, and the probability of any union is at most the sum of individual probabilities."
//           }
//         ],
      
//         "Multiplicative & Conditional Rules": [
//           {
//             id: 11,
//             rule: "Multiplication & Chain Rules",
//             formula: "$P(A \\cap B) = P(B)\\,P(A \\mid B)$;\n  $P\\bigl(\\bigcap_{i=1}^n A_i\\bigr) = \\prod_{i=1}^n P\\bigl(A_i \\mid A_1 \\cap \\cdots \\cap A_{i-1}\\bigr)$",
//             explanation: "Compute joint probabilities via conditional probabilities, extended through the chain rule."
//           },
//           {
//             id: 12,
//             rule: "Law of Total Probability",
//             formula: "$P(A) = \\sum_i P(A \\mid B_i)\\,P(B_i)$",
//             explanation: "Expresses P(A) as a weighted sum over a partition of the sample space."
//           },
//           {
//             id: 13,
//             rule: "Bayes’ Theorem",
//             formula: "$P(B_j \\mid A) = \\dfrac{P(A \\mid B_j)\\,P(B_j)}{\\sum_i P(A \\mid B_i)\\,P(B_i)}$",
//             explanation: "Relates the reverse conditional probability to the forward conditional probability and priors."
//           }
//         ]
//       };
      
    
//     const sectionsContent={

//       obj0: {
//   title: `Key Terms`,
//   content: `
// - [Mutual Exclusiveness](!/probability/definitions#mutual_exclusiveness) — events with $A \\cap B = \\emptyset$, simplifying the addition rule
// - [Independent Events](!/probability/definitions#independent_events) — events where $P(A \\cap B) = P(A) \\cdot P(B)$
// - [Complement of a Set](!/probability/definitions#complement_of_set) — $A^c$, with $P(A^c) = 1 - P(A)$
// - [Union of Sets](!/probability/definitions#union_of_sets) — $A \\cup B$, the event in the addition rule
// - [Intersection of Sets](!/probability/definitions#intersection_of_sets) — $A \\cap B$, the event in the multiplication rule
// - [Conditional Probability](!/probability/definitions#conditional_probability) — $P(A \\mid B)$, used in the multiplication rule`,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Definitions](!/probability/definitions) →@`,
//   link: '',
// },
  
//       basic:{
//         title:`Basic Axiomatic Properties`,
//         content:``,
//         before:``,
//         after:``,
    
    
//       },
//       set:{
//         title:`Set-Operation Rules`,
//         content:``,
//         before:``,
//         after:``,
    
//       },
    
//       additive:{
    
//         title:`Additive & Inequality Rules`,
//         content:``,
//         before:``,
//         after:``,
    
//       },
//       multy:{
//         title:`Multiplicative & Conditional Rules`,
//         content:``,
//         before:``,
//         after:``,
    
//       },
  
  
//     //   obj5:{
    
//     //     title:``,
//     //     content:``,
//     //     before:``,
//     //     after:``,
    
//     //   }
    
//     }


//     const introContent = {
//         id: "intro",
//         title: "Welcome to the Rules of Probability.",
//         content: `Grounded in the three [axioms](!/probability#axioms) of probability—non-negativity, normalization and finite additivity—this section translates those foundational principles into practical tools. You’ll begin by revisiting the [basic axiomatic properties](!/probability/rules#basic) before moving on to [set-operation rules](!/probability/rules#set) (complements, differences and absorption), [additive rules](!/probability/rules#additive) (addition, inclusion–exclusion and Boole’s inequality) and [multiplicative rules](!/probability/rules#multy) (chain rule, law of total probability and Bayes’ theorem). Each law here is built on the axioms to ensure consistency and rigor. In upcoming chapters, you’ll see how these rules power classical (combinatorial) models, discrete and continuous distributions, conditional probability and independence, Bayesian inference, expectation and variance, limit theorems and stochastic processes. Keep this axiomatic framework in mind as your roadmap through the broader probability theory landscape.
// `
//       }
  
//       return {
//         props:{
//           sectionsContent,
//           introContent,
//           probabilityRulesData
          
//         }
//       }
//     }
    

// export default function ProbabilityRulesPage({ sectionsContent,
//     introContent,
//     probabilityRulesData}) {

  

//     // const probabilityRulesData = {
//     //     "Basic Axiomatic Properties": [
//     //       {
//     //         id: 1,
//     //         rule: "Non-negativity & Bounds",
//     //         formula: "$0 \\le P(A) \\le 1$",
//     //         explanation: "The probability of any event lies between 0 and 1, inclusive."
//     //       },
//     //       {
//     //         id: 2,
//     //         rule: "Empty-Set Rule",
//     //         formula: "$P(\\varnothing) = 0$",
//     //         explanation: "The probability of the empty event (impossible outcome) is zero."
//     //       }
//     //     ],
      
//     //     "Set-Operation Rules": [
//     //       {
//     //         id: 3,
//     //         rule: "Complement Rule",
//     //         formula: "$P(A^c) = 1 - P(A)$",
//     //         explanation: "The probability of the complement of A equals one minus the probability of A."
//     //       },
//     //       {
//     //         id: 4,
//     //         rule: "Difference Rule",
//     //         formula: "$P(A \\setminus B) = P(A) - P(A \\cap B)$",
//     //         explanation: "The probability of A excluding B equals the probability of A minus the probability of A and B."
//     //       },
//     //       {
//     //         id: 5,
//     //         rule: "Subset Absorption",
//     //         formula: "If $B \\subseteq A$, then $P(A \\cap B) = P(B)$ and $P(A \\cup B) = P(A)$",
//     //         explanation: "If B is contained in A, the intersection has B’s probability and the union has A’s."
//     //       },
//     //       {
//     //         id: 6,
//     //         rule: "Complement Absorption",
//     //         formula: "If $A \\subseteq B^c$, then $P(A \\cap B^c) = P(A)$ and $P(A \\cup B^c) = P(B^c)$",
//     //         explanation: "When A lies entirely outside B, intersection yields A and union yields the complement of B."
//     //       },
//     //       {
//     //         id: 7,
//     //         rule: "Mutual Exclusivity",
//     //         formula: "If $A \\cap B = \\varnothing$, then $P(A \\cap B) = 0$ and $P(A \\cup B) = P(A) + P(B)$",
//     //         explanation: "Disjoint events have zero probability of occurring together, and their union is the sum of probabilities."
//     //       }
//     //     ],
      
//     //     "Additive & Inequality Rules": [
//     //       {
//     //         id: 8,
//     //         rule: "Addition Rule",
//     //         formula: "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$",
//     //         explanation: "The probability of A or B equals the sum minus the overlap."
//     //       },
//     //       {
//     //         id: 9,
//     //         rule: "Inclusion–Exclusion Principle",
//     //         formula: "$P\\bigl(\\bigcup_{i=1}^n A_i\\bigr) = \\sum_i P(A_i)\n  - \\sum_{i<j}P(A_i \\cap A_j) + \\cdots + (-1)^{n-1}P\\bigl(\\bigcap_{i=1}^n A_i\\bigr)$",
//     //         explanation: "General formula for the probability of a union of n events, correcting for over-counted overlaps."
//     //       },
//     //       {
//     //         id: 10,
//     //         rule: "Monotonicity & Boole’s Inequality",
//     //         formula: "If $A \\subseteq B$, then $P(A) \\le P(B)$; and $P\\bigl(\\bigcup_i A_i\\bigr) \\le \\sum_i P(A_i)$",
//     //         explanation: "Probabilities respect subset ordering, and the probability of any union is at most the sum of individual probabilities."
//     //       }
//     //     ],
      
//     //     "Multiplicative & Conditional Rules": [
//     //       {
//     //         id: 11,
//     //         rule: "Multiplication & Chain Rules",
//     //         formula: "$P(A \\cap B) = P(B)\\,P(A \\mid B)$;\n  $P\\bigl(\\bigcap_{i=1}^n A_i\\bigr) = \\prod_{i=1}^n P\\bigl(A_i \\mid A_1 \\cap \\cdots \\cap A_{i-1}\\bigr)$",
//     //         explanation: "Compute joint probabilities via conditional probabilities, extended through the chain rule."
//     //       },
//     //       {
//     //         id: 12,
//     //         rule: "Law of Total Probability",
//     //         formula: "$P(A) = \\sum_i P(A \\mid B_i)\\,P(B_i)$",
//     //         explanation: "Expresses P(A) as a weighted sum over a partition of the sample space."
//     //       },
//     //       {
//     //         id: 13,
//     //         rule: "Bayes’ Theorem",
//     //         formula: "$P(B_j \\mid A) = \\dfrac{P(A \\mid B_j)\\,P(B_j)}{\\sum_i P(A \\mid B_i)\\,P(B_i)}$",
//     //         explanation: "Relates the reverse conditional probability to the forward conditional probability and priors."
//     //       }
//     //     ]
//     //   };
      


//       const probabilityRulesSections=[
//          {
//         id:'0',
//         title:sectionsContent.obj0.title,
//         link:sectionsContent.obj0.link,
//         content:[
//           sectionsContent.obj0.content,
//           sectionsContent.obj0.after,
//         ]
//     },
//         {
//             id:'basic',
//             title:sectionsContent.basic.title,
//             link:'',
//             content:[
//                 // <ExpandableTable/>

//                 <div key={11} style={{marginLeft:'50px',marginRight:'50px'}}>
//                 <ExpandableTable key={21}
//                 data={probabilityRulesData[sectionsContent.basic.title]}
//                  displayColumns={ ["rule", "formula", "explanation"]}
//                  copyableFields={["formula"]}
//                  includedFields={ ["rule", "formula", "explanation"]} />
//                  </div> ,
//             ]
//         },
//         {
//             id:'set',
//             title:sectionsContent.set.title,
//             link:'',
//             content:[
//                 <div key={12} style={{marginLeft:'50px',marginRight:'50px'}}>
//                 <ExpandableTable key={22}
//                 data={probabilityRulesData[sectionsContent.set.title]}
//                  displayColumns={ ["rule", "formula", "explanation"]}
//                  copyableFields={["formula"]}
//                  includedFields={ ["rule", "formula", "explanation"]} />
//                  </div> ,
//             ]
//         },
//         {
//             id:'additive',
//             title:sectionsContent.additive.title,
//             link:'',
//             content:[
//                 <div key={13} style={{marginLeft:'50px',marginRight:'50px'}}>
//                 <ExpandableTable key={23}
//                 data={probabilityRulesData[sectionsContent.additive.title]}
//                  displayColumns={ ["rule", "formula", "explanation"]}
//                  copyableFields={["formula"]}
//                  includedFields={ ["rule", "formula", "explanation"]} />
//                  </div> ,
//             ]
//         },
//         {
//             id:'multy',
//             title:sectionsContent.multy.title,
//             link:'',
//             content:[
//                 <div key={14} style={{marginLeft:'50px',marginRight:'50px'}}>
//                 <ExpandableTable key={24}
//                 data={probabilityRulesData[sectionsContent.multy.title]}
//                  displayColumns={ ["rule", "formula", "explanation"]}
//                  copyableFields={["formula"]}
//                  includedFields={ ["rule", "formula", "explanation"]} />
//                  </div> ,
//             ]
//         }
//     ]
    
    
   
    

//   return (
//     <>
//     {/* <GenericNavbar/> */}
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <OperaSidebar 
//            side='right'
//            topOffset='55px' 
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          /> 
//     <Breadcrumb/>
//     <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Rules of Probability</h1>
//     <br/>
//     <SectionTableOfContents
//     sections={probabilityRulesSections}/>
//     <br/>
//     <br/>
//     <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//           backgroundColor="#f2f2f2"
//           textColor="#06357a"
//         />
//     <br/>
//       <KeyTermsCard
//       id="0"
//       title={sectionsContent.obj0.title}
//       content={sectionsContent.obj0.content}
//       after={sectionsContent.obj0.after}
//       variant="light"
//     />
//     <br/>
//     <Sections
//     sections={probabilityRulesSections.slice(1)}/>
//     <br/>
// {/* <ScrollUpButton/> */}
//     <br/>
    
    
    
//     </>
//   )
// }



// tables-optimized: v4 | 2026-05-22 | 1 table (summary capstone — decision matrix by use case)
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import React from 'react'
import '../../pages.css'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
import IntroSection from '@/app/components/page-components/section/IntroContentSection';
import Sections from '@/app/components/page-components/section/Sections';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import ExpandableTable from '@/app/components/generic-table/ExpandableTable';
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import renderOutcomeGrid from '@/app/utils/illustrations/probability/outcomes/outcomeGrid'



export async function getStaticProps(){


    const keyWords=[
        'probability rules','probability laws','probability','bayes rule',
        'bayes rule in probability'
    ]

    const linkStyle = 'color: inherit; text-decoration: underline;'

    // ---------- v4 SUMMARY CAPSTONE ----------
    // Decision matrix: reorganizes the rules by reader goal, complementing the
    // four category-keyed ExpandableTables above.
    const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Goal</th>
      <th style="${tableHeaders.summary}">Rule</th>
      <th style="${tableHeaders.summary}">Formula</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Get P(A<sup>c</sup>) from P(A)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Complement Rule</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(A<sup>c</sup>) = 1 &minus; P(A)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Get P(A &cup; B) with general overlap</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Addition Rule</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(A &cup; B) = P(A) + P(B) &minus; P(A &cap; B)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Get P(A &cup; B) when A, B are disjoint</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Mutual Exclusivity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(A &cup; B) = P(A) + P(B)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Get P of a union of n events</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Inclusion&ndash;Exclusion</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">alternating sums of pairwise, triple, &hellip; intersections</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Bound P(&cup; A<sub>i</sub>) from above</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Boole&apos;s Inequality</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(&cup; A<sub>i</sub>) &le; &Sigma; P(A<sub>i</sub>)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Get P(A &cap; B) for general events</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Multiplication Rule</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(A &cap; B) = P(B) &middot; P(A | B)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Get P(A) from a partition {B<sub>i</sub>}</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Law of Total Probability</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(A) = &Sigma;<sub>i</sub> P(A | B<sub>i</sub>) &middot; P(B<sub>i</sub>)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Reverse a conditional probability</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Bayes&apos; Theorem</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(B | A) = P(A | B) &middot; P(B) / P(A)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Compare P(A) and P(B) when A &sube; B</td>
      <td style="padding: 12px 15px; color: #34495e;">Monotonicity</td>
      <td style="padding: 12px 15px; color: #34495e;">A &sube; B &rArr; P(A) &le; P(B)</td>
    </tr>
  </tbody>
</table>
`


    const probabilityRulesData = {
        "Basic Axiomatic Properties": [
          {
            id: 1,
            rule: "Non-negativity & Bounds",
            formula: "$0 \\le P(A) \\le 1$",
            explanation: "The probability of any event lies between 0 and 1, inclusive."
          },
          {
            id: 2,
            rule: "Empty-Set Rule",
            formula: "$P(\\varnothing) = 0$",
            explanation: "The probability of the empty event (impossible outcome) is zero."
          }
        ],
      
        "Set-Operation Rules": [
          {
            id: 3,
            rule: "Complement Rule",
            formula: "$P(A^c) = 1 - P(A)$",
            explanation: "The probability of the complement of A equals one minus the probability of A."
          },
          {
            id: 4,
            rule: "Difference Rule",
            formula: "$P(A \\setminus B) = P(A) - P(A \\cap B)$",
            explanation: "The probability of A excluding B equals the probability of A minus the probability of A and B."
          },
          {
            id: 5,
            rule: "Subset Absorption",
            formula: "If $B \\subseteq A$, then $P(A \\cap B) = P(B)$ and $P(A \\cup B) = P(A)$",
            explanation: "If B is contained in A, the intersection has B’s probability and the union has A’s."
          },
          {
            id: 6,
            rule: "Complement Absorption",
            formula: "If $A \\subseteq B^c$, then $P(A \\cap B^c) = P(A)$ and $P(A \\cup B^c) = P(B^c)$",
            explanation: "When A lies entirely outside B, intersection yields A and union yields the complement of B."
          },
          {
            id: 7,
            rule: "Mutual Exclusivity",
            formula: "If $A \\cap B = \\varnothing$, then $P(A \\cap B) = 0$ and $P(A \\cup B) = P(A) + P(B)$",
            explanation: "Disjoint events have zero probability of occurring together, and their union is the sum of probabilities."
          }
        ],
      
        "Additive & Inequality Rules": [
          {
            id: 8,
            rule: "Addition Rule",
            formula: "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$",
            explanation: "The probability of A or B equals the sum minus the overlap."
          },
          {
            id: 9,
            rule: "Inclusion–Exclusion Principle",
            formula: "$P\\bigl(\\bigcup_{i=1}^n A_i\\bigr) = \\sum_i P(A_i)\n  - \\sum_{i<j}P(A_i \\cap A_j) + \\cdots + (-1)^{n-1}P\\bigl(\\bigcap_{i=1}^n A_i\\bigr)$",
            explanation: "General formula for the probability of a union of n events, correcting for over-counted overlaps."
          },
          {
            id: 10,
            rule: "Monotonicity & Boole’s Inequality",
            formula: "If $A \\subseteq B$, then $P(A) \\le P(B)$; and $P\\bigl(\\bigcup_i A_i\\bigr) \\le \\sum_i P(A_i)$",
            explanation: "Probabilities respect subset ordering, and the probability of any union is at most the sum of individual probabilities."
          }
        ],
      
        "Multiplicative & Conditional Rules": [
          {
            id: 11,
            rule: "Multiplication & Chain Rules",
            formula: "$P(A \\cap B) = P(B)\\,P(A \\mid B)$;\n  $P\\bigl(\\bigcap_{i=1}^n A_i\\bigr) = \\prod_{i=1}^n P\\bigl(A_i \\mid A_1 \\cap \\cdots \\cap A_{i-1}\\bigr)$",
            explanation: "Compute joint probabilities via conditional probabilities, extended through the chain rule."
          },
          {
            id: 12,
            rule: "Law of Total Probability",
            formula: "$P(A) = \\sum_i P(A \\mid B_i)\\,P(B_i)$",
            explanation: "Expresses P(A) as a weighted sum over a partition of the sample space."
          },
          {
            id: 13,
            rule: "Bayes’ Theorem",
            formula: "$P(B_j \\mid A) = \\dfrac{P(A \\mid B_j)\\,P(B_j)}{\\sum_i P(A \\mid B_i)\\,P(B_i)}$",
            explanation: "Relates the reverse conditional probability to the forward conditional probability and priors."
          }
        ]
      };
      
    
    const sectionsContent={

      obj0: {
  title: `Key Terms`,
  content: `
- [Mutual Exclusiveness](!/probability/definitions#mutual_exclusiveness) — events with $A \\cap B = \\emptyset$, simplifying the addition rule
- [Independent Events](!/probability/definitions#independent_events) — events where $P(A \\cap B) = P(A) \\cdot P(B)$
- [Complement of a Set](!/probability/definitions#complement_of_set) — $A^c$, with $P(A^c) = 1 - P(A)$
- [Union of Sets](!/probability/definitions#union_of_sets) — $A \\cup B$, the event in the addition rule
- [Intersection of Sets](!/probability/definitions#intersection_of_sets) — $A \\cap B$, the event in the multiplication rule
- [Conditional Probability](!/probability/definitions#conditional_probability) — $P(A \\mid B)$, used in the multiplication rule`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Definitions](!/probability/definitions) →@`,
  link: '',
},
  
      basic:{
        title:`Basic Axiomatic Properties`,
        content:``,
        before:``,
        after:``,
    
    
      },
      set:{
        title:`Set-Operation Rules`,
        content:``,
        before:``,
        after:``,
    
      },
    
      additive:{
    
        title:`Additive & Inequality Rules`,
        content:``,
        before:``,
        after:``,
    
      },
      multy:{
        title:`Multiplicative & Conditional Rules`,
        content:``,
        before:``,
        after:``,
    
      },

      summary:{
        title:`Quick Lookup: Which Rule to Use`,
        content:`The four categories above organize the rules by their mechanical type — axiomatic, set-operation, additive, and multiplicative. In practice, however, the question a reader brings to this page tends to run in the opposite direction: given a probability problem, which rule applies? The table below reorganizes the most-used rules by the kind of question they answer, providing a one-line guide from a reader's goal to the appropriate rule and its formula.`,
        before:``,
        after:``,
      },

      pitfalls:{
        title:`Common Pitfalls`,
        content:`Each of the four mistakes below is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Leaving out the triple intersection**

The probability of a union of three events is found by inclusion–exclusion, but the work stops after the pairwise intersections are subtracted. Outcomes that lie in all three events then drop out of the count completely.

Wrong working: a number is drawn at random from $1$ to $30$; $A$ = divisible by $2$, $B$ = divisible by $3$, $C$ = divisible by $5$.
$$P(A \\cup B \\cup C) = \\frac{15}{30} + \\frac{10}{30} + \\frac{6}{30} - \\frac{5}{30} - \\frac{3}{30} - \\frac{2}{30} = \\frac{21}{30} = \\frac{7}{10}$$

Right working: the number $30$ lies in all three events, so $P(A \\cap B \\cap C) = \\frac{1}{30}$ is added back.
$$P(A \\cup B \\cup C) = \\frac{21}{30} + \\frac{1}{30} = \\frac{22}{30} = \\frac{11}{15}$$

Why it happens: with two events the formula ends after a single subtraction, and the pattern "add the single terms, subtract the overlaps" is carried over to three events unchanged.

How to check: count the complement directly. The numbers from $1$ to $30$ divisible by none of $2$, $3$, $5$ are $1, 7, 11, 13, 17, 19, 23, 29$, eight of them, so the union holds $30 - 8 = 22$ numbers.

**Adding the chances for at least one**

To find the chance of at least one success over several trials, the success probabilities of the single trials are added. That treats the trials as disjoint events, although several of them can succeed together.

Wrong working: four rolls of a fair die.
$$P(\\text{at least one six}) = \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} = \\frac{2}{3}$$

Right working: the complement of "at least one six" is "no six in four rolls", which has probability $\\left(\\frac{5}{6}\\right)^4$.
$$P(\\text{at least one six}) = 1 - \\left(\\frac{5}{6}\\right)^4 = 1 - \\frac{625}{1296} = \\frac{671}{1296} \\approx 0.518$$

Why it happens: each roll does add some chance of a six, and the addition rule for disjoint events is the first rule learned for "or". By Boole's inequality, the sum is only an upper bound for the union.

How to check: raise the number of rolls. With seven rolls the sum gives $\\frac{7}{6}$, more than $1$, which no probability can be. The complement rule gives $1 - \\left(\\frac{5}{6}\\right)^7 \\approx 0.721$.

**Swapping the condition**

The question asks for $P(A \\mid B)$, but the known value $P(B \\mid A)$ is used in its place. The two conditional probabilities are in general different numbers.

Wrong working: one card is drawn from a standard deck; $K$ = king, $F$ = face card (jack, queen or king). Every king is a face card, so $P(F \\mid K) = 1$, and this is given as the answer:
$$P(K \\mid F) = 1$$

Right working: the Bayes theorem turns the condition around.
$$P(K \\mid F) = \\frac{P(F \\mid K)\\,P(K)}{P(F)} = \\frac{1 \\cdot \\frac{4}{52}}{\\frac{12}{52}} = \\frac{4}{12} = \\frac{1}{3}$$

Why it happens: in words, "a face card given a king" and "a king given a face card" sound alike, and in symbols the two differ only in the order of the letters.

How to check: count inside the condition. Of the $12$ face cards, $4$ are kings, so $P(K \\mid F) = \\frac{4}{12}$; of the $4$ kings, all $4$ are face cards, so $P(F \\mid K) = 1$.

**Multiplying unconditional probabilities**

The probability that several events happen in sequence is found by multiplying their single probabilities, although the earlier events change the probabilities of the later ones. The plain product $P(A)\\,P(B)$ holds only for independent events.

Wrong working: two cards are drawn without replacement; both should be aces.
$$P(\\text{both aces}) = \\frac{4}{52} \\cdot \\frac{4}{52} = \\frac{1}{169}$$

Right working: after a first ace, $3$ aces remain among $51$ cards.
$$P(\\text{both aces}) = P(A_1)\\,P(A_2 \\mid A_1) = \\frac{4}{52} \\cdot \\frac{3}{51} = \\frac{12}{2652} = \\frac{1}{221}$$

Why it happens: on its own, the second card is an ace with probability $\\frac{4}{52}$, just like the first, so the product looks natural. The chain rule needs the probability for the second card given what the first card was.

How to check: count ordered pairs directly. There are $52 \\cdot 51 = 2652$ ordered pairs of different cards and $4 \\cdot 3 = 12$ of them are two aces, so the probability is $\\frac{12}{2652} = \\frac{1}{221}$.`,
        before:``,
        after:``,
      },
  
  
    //   obj5:{
    
    //     title:``,
    //     content:``,
    //     before:``,
    //     after:``,
    
    //   }
    
    }


    const introContent = {
        id: "intro",
        title: "Welcome to the Rules of Probability.",
        content: `Grounded in the three [axioms](!/probability#axioms) of probability—non-negativity, normalization and countable additivity—this section translates those foundational principles into practical tools. You’ll begin by revisiting the [basic axiomatic properties](!/probability/rules#basic) before moving on to [set-operation rules](!/probability/rules#set) (complements, differences and absorption), [additive rules](!/probability/rules#additive) (addition, inclusion–exclusion and Boole’s inequality) and [multiplicative rules](!/probability/rules#multy) (chain rule, law of total probability and Bayes’ theorem). Each law here is built on the axioms to ensure consistency and rigor. In upcoming chapters, you’ll see how these rules power classical (combinatorial) models, discrete and continuous distributions, conditional probability and independence, Bayesian inference, expectation and variance, limit theorems and stochastic processes. Keep this axiomatic framework in mind as your roadmap through the broader probability theory landscape.
`
      }
  
  const ogAddRule = { kind: 'dice', svgTitle: 'Two dice: first die 6 has 6 outcomes, doubles has 6, they share only (6,6), so P(A or B) = 6/36 + 6/36 - 1/36 = 11/36',
    events: [{ label: 'A: first die 6', test: (a) => a === 6, color: 'f' }, { label: 'B: doubles', test: (a, b) => a === b, color: 'r' }],
    notes: [{ text: 'shared cell: (6,6)', color: 'g' }, { text: 'P(A ∪ B) = 6/36 + 6/36' }, { text: '− 1/36 = 11/36', color: 'r' }, { text: '(6,6) counted once' }],
    caption: 'The addition rule: subtract the overlap counted twice' };
  const demoUnits = {
    addRule: demoUnitFrame({
      svg: renderOutcomeGrid(ogAddRule),
      caption: 'The addition rule on two dice',
      text: 'A, first die 6, is the blue bottom row: 6 outcomes. B, doubles, is the amber diagonal: 6 outcomes. Adding 6/36 + 6/36 counts the corner (6,6) twice, because it is in both. Subtracting P(A &#8745; B) = 1/36 once leaves the 11 distinct outcomes of A &#8746; B: P(A &#8746; B) = 11/36.',
    }),
  };

      return {
        props:{
          sectionsContent,
          introContent,
          probabilityRulesData,
          summaryTable,
          demoUnits,
        }
      }
    }
    

export default function ProbabilityRulesPage({ sectionsContent,
    introContent,
    probabilityRulesData,
    summaryTable, demoUnits }) {

  
    const tableWrapStyle = { margin: '20px auto', width: '100%' }

    // const probabilityRulesData = {
    //     "Basic Axiomatic Properties": [
    //       {
    //         id: 1,
    //         rule: "Non-negativity & Bounds",
    //         formula: "$0 \\le P(A) \\le 1$",
    //         explanation: "The probability of any event lies between 0 and 1, inclusive."
    //       },
    //       {
    //         id: 2,
    //         rule: "Empty-Set Rule",
    //         formula: "$P(\\varnothing) = 0$",
    //         explanation: "The probability of the empty event (impossible outcome) is zero."
    //       }
    //     ],
      
    //     "Set-Operation Rules": [
    //       {
    //         id: 3,
    //         rule: "Complement Rule",
    //         formula: "$P(A^c) = 1 - P(A)$",
    //         explanation: "The probability of the complement of A equals one minus the probability of A."
    //       },
    //       {
    //         id: 4,
    //         rule: "Difference Rule",
    //         formula: "$P(A \\setminus B) = P(A) - P(A \\cap B)$",
    //         explanation: "The probability of A excluding B equals the probability of A minus the probability of A and B."
    //       },
    //       {
    //         id: 5,
    //         rule: "Subset Absorption",
    //         formula: "If $B \\subseteq A$, then $P(A \\cap B) = P(B)$ and $P(A \\cup B) = P(A)$",
    //         explanation: "If B is contained in A, the intersection has B’s probability and the union has A’s."
    //       },
    //       {
    //         id: 6,
    //         rule: "Complement Absorption",
    //         formula: "If $A \\subseteq B^c$, then $P(A \\cap B^c) = P(A)$ and $P(A \\cup B^c) = P(B^c)$",
    //         explanation: "When A lies entirely outside B, intersection yields A and union yields the complement of B."
    //       },
    //       {
    //         id: 7,
    //         rule: "Mutual Exclusivity",
    //         formula: "If $A \\cap B = \\varnothing$, then $P(A \\cap B) = 0$ and $P(A \\cup B) = P(A) + P(B)$",
    //         explanation: "Disjoint events have zero probability of occurring together, and their union is the sum of probabilities."
    //       }
    //     ],
      
    //     "Additive & Inequality Rules": [
    //       {
    //         id: 8,
    //         rule: "Addition Rule",
    //         formula: "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$",
    //         explanation: "The probability of A or B equals the sum minus the overlap."
    //       },
    //       {
    //         id: 9,
    //         rule: "Inclusion–Exclusion Principle",
    //         formula: "$P\\bigl(\\bigcup_{i=1}^n A_i\\bigr) = \\sum_i P(A_i)\n  - \\sum_{i<j}P(A_i \\cap A_j) + \\cdots + (-1)^{n-1}P\\bigl(\\bigcap_{i=1}^n A_i\\bigr)$",
    //         explanation: "General formula for the probability of a union of n events, correcting for over-counted overlaps."
    //       },
    //       {
    //         id: 10,
    //         rule: "Monotonicity & Boole’s Inequality",
    //         formula: "If $A \\subseteq B$, then $P(A) \\le P(B)$; and $P\\bigl(\\bigcup_i A_i\\bigr) \\le \\sum_i P(A_i)$",
    //         explanation: "Probabilities respect subset ordering, and the probability of any union is at most the sum of individual probabilities."
    //       }
    //     ],
      
    //     "Multiplicative & Conditional Rules": [
    //       {
    //         id: 11,
    //         rule: "Multiplication & Chain Rules",
    //         formula: "$P(A \\cap B) = P(B)\\,P(A \\mid B)$;\n  $P\\bigl(\\bigcap_{i=1}^n A_i\\bigr) = \\prod_{i=1}^n P\\bigl(A_i \\mid A_1 \\cap \\cdots \\cap A_{i-1}\\bigr)$",
    //         explanation: "Compute joint probabilities via conditional probabilities, extended through the chain rule."
    //       },
    //       {
    //         id: 12,
    //         rule: "Law of Total Probability",
    //         formula: "$P(A) = \\sum_i P(A \\mid B_i)\\,P(B_i)$",
    //         explanation: "Expresses P(A) as a weighted sum over a partition of the sample space."
    //       },
    //       {
    //         id: 13,
    //         rule: "Bayes’ Theorem",
    //         formula: "$P(B_j \\mid A) = \\dfrac{P(A \\mid B_j)\\,P(B_j)}{\\sum_i P(A \\mid B_i)\\,P(B_i)}$",
    //         explanation: "Relates the reverse conditional probability to the forward conditional probability and priors."
    //       }
    //     ]
    //   };
      


      const probabilityRulesSections=[
         {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
          sectionsContent.obj0.after,
        ]
    },
        {
            id:'basic',
            title:sectionsContent.basic.title,
            link:'',
            content:[
                // <ExpandableTable/>

                <div key={11} style={{marginLeft:'50px',marginRight:'50px'}}>
                <ExpandableTable key={21}
                data={probabilityRulesData[sectionsContent.basic.title]}
                 displayColumns={ ["rule", "formula", "explanation"]}
                 copyableFields={["formula"]}
                 includedFields={ ["rule", "formula", "explanation"]} />
                 </div> ,
            ]
        },
        {
            id:'set',
            title:sectionsContent.set.title,
            link:'',
            content:[
                <div key={12} style={{marginLeft:'50px',marginRight:'50px'}}>
                <ExpandableTable key={22}
                data={probabilityRulesData[sectionsContent.set.title]}
                 displayColumns={ ["rule", "formula", "explanation"]}
                 copyableFields={["formula"]}
                 includedFields={ ["rule", "formula", "explanation"]} />
                 </div> ,
            ]
        },
        {
            id:'additive',
            title:sectionsContent.additive.title,
            link:'',
            content:[
                <div key={13} style={{marginLeft:'50px',marginRight:'50px'}}>
                <ExpandableTable key={23}
                data={probabilityRulesData[sectionsContent.additive.title]}
                 displayColumns={ ["rule", "formula", "explanation"]}
                 copyableFields={["formula"]}
                 includedFields={ ["rule", "formula", "explanation"]} />
                 </div> ,
                  <div key={'unit-addRule'} dangerouslySetInnerHTML={{ __html: demoUnits.addRule }} />,
            `For disjoint events the overlap is empty and the rule reduces to P(A) + P(B).`,
            `
The additive rules, stated formally:

@academic[formula_callout:Complement Rule
$$P(A^c) = 1 - P(A)$$
/probability/formulas#complement_rule]@

@academic[formula_callout:Monotonicity Rule
$$A \\subseteq B \\implies P(A) \\leq P(B)$$
/probability/formulas#monotonicity_rule]@

@academic[formula_callout:Difference Rule
$$P(A \\setminus B) = P(A) - P(A \\cap B)$$
/probability/formulas#difference_rule]@

@academic[formula_callout:Addition Rule
$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$
/probability/formulas#addition_rule]@

@academic[formula_callout:Inclusion-Exclusion Principle
$$P(A \\cup B \\cup C) = P(A) + P(B) + P(C) - P(A \\cap B) - P(A \\cap C) - P(B \\cap C) + P(A \\cap B \\cap C)$$
/probability/formulas#inclusion-exclusion_principle]@

@academic[pitfall,aside:true,width:35%:Leaving out the triple intersection
For a number drawn from $1$ to $30$, with $A$, $B$, $C$ = divisible by $2$, $3$, $5$, stopping after the pairwise terms gives $\\frac{15 + 10 + 6 - 5 - 3 - 2}{30} = \\frac{7}{10}$. Adding back $P(A \\cap B \\cap C) = \\frac{1}{30}$ gives $\\frac{22}{30} = \\frac{11}{15}$.
[Read more](!#pitfalls)]@

With three events, the single terms count every outcome in an overlap more than once, and the pairwise intersections are subtracted to correct this. An outcome that lies in all three events is touched by all six of these terms: three single terms and three pairwise ones. The final term of the formula, with its plus sign, decides how often such an outcome is counted in the end.

@academic[formula_callout:Booles Inequality
$$P\\!\\left(\\bigcup_{i=1}^{n} A_i\\right) \\leq \\sum_{i=1}^{n} P(A_i)$$
/probability/formulas#booles_inequality]@

@academic[pitfall,aside:true,width:35%:Adding the chances for at least one
Adding $\\frac{1}{6}$ for each of four die rolls gives $P(\\text{at least one six}) = \\frac{4}{6} = \\frac{2}{3}$, but several rolls can show a six together. By the complement rule, $1 - \\left(\\frac{5}{6}\\right)^4 = \\frac{671}{1296} \\approx 0.518$.
[Read more](!#pitfalls)]@

Boole's inequality bounds the probability of a union by the sum of the single probabilities, and the bound is reached only when no two of the events can happen together. Questions of the form "at least one" over repeated trials, such as at least one six in several rolls of a die, ask for exactly such a union, with one event for each trial.

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@
`,
            ]
        },
        {
            id:'multy',
            title:sectionsContent.multy.title,
            link:'',
            content:[
                <div key={14} style={{marginLeft:'50px',marginRight:'50px'}}>
                <ExpandableTable key={24}
                data={probabilityRulesData[sectionsContent.multy.title]}
                 displayColumns={ ["rule", "formula", "explanation"]}
                 copyableFields={["formula"]}
                 includedFields={ ["rule", "formula", "explanation"]} />
                 </div> ,
            `
The multiplicative rules, stated formally:

@academic[formula_callout:Multiplication Rule
$$P(A \\cap B) = P(A)\\,P(B \\mid A) = P(B)\\,P(A \\mid B)$$
/probability/formulas#multiplication_rule]@

@academic[pitfall,aside:true,width:35%:Swapping the condition
For one card, with $K$ = king and $F$ = face card, taking $P(K \\mid F)$ to equal $P(F \\mid K) = 1$ says every face card is a king. The Bayes theorem gives $P(K \\mid F) = \\frac{1 \\cdot \\frac{4}{52}}{\\frac{12}{52}} = \\frac{1}{3}$.
[Read more](!#pitfalls)]@

The multiplication rule can be written starting from either event: $P(A)\\,P(B \\mid A)$ and $P(B)\\,P(A \\mid B)$ are two routes to the same joint probability. Setting them equal and dividing by $P(A)$ is how the Bayes theorem in the table above is obtained, and it is the tool for turning a conditional probability around.

@academic[formula_callout:Chain Rule
$$P(A_1 \\cap A_2 \\cap \\cdots \\cap A_n) = P(A_1)\\,P(A_2 \\mid A_1)\\,P(A_3 \\mid A_1 \\cap A_2) \\cdots P(A_n \\mid A_1 \\cap \\cdots \\cap A_{n-1})$$
/probability/formulas#chain_rule]@

@academic[pitfall,aside:true,width:35%:Multiplying unconditional probabilities
Drawing two cards without replacement, $P(\\text{both aces}) = \\frac{4}{52} \\cdot \\frac{4}{52} = \\frac{1}{169}$ ignores that the first ace leaves $3$ aces among $51$ cards. The chain rule gives $\\frac{4}{52} \\cdot \\frac{3}{51} = \\frac{1}{221}$.
[Read more](!#pitfalls)]@

Each factor in the chain rule is conditioned on everything that came before it. In sequential experiments, such as drawing cards from a deck without putting them back, the earlier draws change what is left, and with it the probabilities for the later draws.

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@
`,
            ]
        },
        {
            id:'summary',
            title:sectionsContent.summary.title,
            link:'',
            content:[
                sectionsContent.summary.content,
                <div key={'summary-table'} style={tableWrapStyle}
                     dangerouslySetInnerHTML={{ __html: summaryTable }} />,
            ]
        },
        {
            id:'pitfalls',
            title:sectionsContent.pitfalls.title,
            link:'',
            content:[
                sectionsContent.pitfalls.content,
            ]
        }
    ]
    
    
   
    

  return (
    <>
    {/* <GenericNavbar/> */}
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
    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Rules of Probability</h1>
    <br/>
    <SectionTableOfContents
    sections={probabilityRulesSections}/>
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
      <KeyTermsCard
      id="0"
      title={sectionsContent.obj0.title}
      content={sectionsContent.obj0.content}
      after={sectionsContent.obj0.after}
      variant="light"
    />
    <br/>
    <Sections
    sections={probabilityRulesSections.slice(1)}/>
    <br/>
{/* <ScrollUpButton/> */}
    <br/>
    
    
    
    </>
  )
}