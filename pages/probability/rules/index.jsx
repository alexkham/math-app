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



export async function getStaticProps(){


    const keyWords=[
        'probability rules','probability laws','probability','bayes rule',
        'bayes rule in probability'
    ]
   


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
        content: `Grounded in the three [axioms](!/probability#axioms) of probability—non-negativity, normalization and finite additivity—this section translates those foundational principles into practical tools. You’ll begin by revisiting the [basic axiomatic properties](!/probability/rules#basic) before moving on to [set-operation rules](!/probability/rules#set) (complements, differences and absorption), [additive rules](!/probability/rules#additive) (addition, inclusion–exclusion and Boole’s inequality) and [multiplicative rules](!/probability/rules#multy) (chain rule, law of total probability and Bayes’ theorem). Each law here is built on the axioms to ensure consistency and rigor. In upcoming chapters, you’ll see how these rules power classical (combinatorial) models, discrete and continuous distributions, conditional probability and independence, Bayesian inference, expectation and variance, limit theorems and stochastic processes. Keep this axiomatic framework in mind as your roadmap through the broader probability theory landscape.
`
      }
  
      return {
        props:{
          sectionsContent,
          introContent,
          probabilityRulesData
          
        }
      }
    }
    

export default function ProbabilityRulesPage({ sectionsContent,
    introContent,
    probabilityRulesData}) {

  

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
            ]
        }
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
    <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Rules of Probability</h1>
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
    <br/>
    <Sections
    sections={probabilityRulesSections}/>
    <br/>
<ScrollUpButton/>
    <br/>
    
    
    
    </>
  )
}
