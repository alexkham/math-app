// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import React from 'react'
// import '../../pages.css'
// import TruthTable from '@/app/components/logic-calculator/truth-tables/TruthTable'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'

// export default function TruthTablesPage() {

//   const keyWords=['truth table','and truth table','or truth table','xor truth table',
//     'nand truth table','nor truth table', 'xnor truth table'

//   ]
  
//   const truthExplanations = {
//     AND: {
//       text: "AND returns true only when both P and Q are true because it represents the strictest form of logical agreement. This mirrors real-world scenarios where multiple conditions must be met simultaneously. AND is fundamental to logic because it allows us to check complete fulfillment of multiple requirements. In set theory, AND corresponds to intersection - finding what sets have in common. This concept extends to validation where we need to ensure all conditions are satisfied before proceeding.",
//       links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" }],
//       // links: [{ title: "Logic Gates", link: "/learn/logic-gates" }]
//     },
//     OR: {
//       text: "OR returns true if at least one input is true, representing logical disjunction. It fails only when all inputs are false, making it more permissive than AND. This operator is crucial in scenarios where multiple valid paths can lead to the same outcome. OR naturally maps to combining possibilities or accepting alternatives. In mathematical terms, it unifies conditions, accepting results from any valid source.",
//       // links: [{ title: "OR Operations", link: "/learn/or" }]
//       links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" }],
//     },
//     XOR: {
//       text: "XOR (exclusive OR) yields true when inputs differ, capturing the concept of mutual exclusivity. It enforces a strict either/or relationship, rejecting cases where inputs match. This makes XOR essential for comparing binary states and detecting changes between values. XOR helps identify exact differences between logical states. The operation is self-inverse, meaning applying it twice with the same values returns the original input.",
//       // links: [{ title: "XOR Logic", link: "/learn/xor" }]
//       links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" }],
//     },
//     NAND: {
//       text: "NAND inverts the AND operation, yielding true in all cases except when both inputs are true. This seemingly simple inversion holds special power in logic. NAND's functional completeness means it can be used to construct all other logical operations. Any logical function can be built using only NAND gates. The universality of NAND demonstrates how complex logic can emerge from simple foundations.",
//       // links: [{ title: "NAND Gates", link: "/learn/nand" }]
//       links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" }],
//     },
//     NOR: {
//       text: "NOR yields true only when both inputs are false, representing joint denial. Like NAND, it is functionally complete. NOR's behavior of requiring total absence of true inputs makes it useful in detecting complete system shutdowns or verifying full conditions. NOR can express any other logical operation through combinations. This universality shows the deep connection between negation and logical completeness.",
//       // links: [{ title: "NOR Logic", link: "/learn/nor" }]
//       links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" }],
//     },
//     XNOR: {
//       text: "XNOR returns true when inputs match - both true or both false. It acts as a logical equality checker between binary values. This behavior makes XNOR essential in comparison operations and error detection where we need to verify matching states. XNOR effectively tests for logical equivalence between inputs. It serves as the foundation for detecting bit parity and ensuring data consistency.",
//       // links: [{ title: "XNOR Operations", link: "/learn/xnor" }]
//       links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" }],
//     }
//   };
//   return (
//     <>
//     <GenericNavbar/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <Breadcrumb/>
//     <OperaSidebar 
//         side='right'
//         topOffset='65px' 
//         sidebarWidth='45px'
//         panelWidth='300px'
        
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'/> 
//     <h1 className='title' style={{marginTop:'-30px', marginBottom:'-10px'}}>Truth Tables</h1>  
//     <TruthTable explanations={truthExplanations}/> 
//     <br/> 
//     <br/>
//     <ScrollUpButton/> 
//     </>
//   )
// }



import { Metadata } from 'next'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import TruthTable from '@/app/components/logic-calculator/truth-tables/TruthTable'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import '../../pages.css'
import VerticalButtonGroup from '@/app/components/VerticalButtonGroup'

export const metadata = {
  title: 'Truth Tables',
  description: 'Truth Tables Calculator and Guide',
  metadataBase: new URL('https://www.learnmathclass.com'),
  alternates: {
    canonical: '/tables/truth-tables'
  }
}

export default function TruthTablesPage({ keyWords, truthExplanations }) {

  const menuItems=[

    {
      title: "Implications",
      // icon: <Home />,
      link: "/tables/truth-tables/implications"
    },

  ]
  return (
    <>
      <GenericNavbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Breadcrumb/>
      <OperaSidebar 
          side='right'
          // topOffset='65px' 
          sidebarWidth='45px'
          panelWidth='300px'
          iconColor='white'
          panelBackgroundColor='#f2f2f2'/> 
      <h1 className='title' style={{marginTop:'-30px', marginBottom:'-10px'}}>Truth Tables</h1> 
      <VerticalButtonGroup 
      items={menuItems}
      width="100px"       
    //   backgroundColor ='#0070f3'
    //   color = 'white'
      isSticky={true}
      verticalOffset='200px'
      />
      <div style={{marginLeft:'20px'}}>
      <TruthTable explanations={truthExplanations}/> 
      </div>
      <br/> 
      <br/>
      <ScrollUpButton/> 
    </>
  )
}

export async function getStaticProps() {
  const keyWords = ['truth table','and truth table','or truth table','xor truth table',
    'nand truth table','nor truth table', 'xnor truth table'
  ]
  
  const truthExplanations = {
    AND: {
      text: "AND returns true only when both P and Q are true because it represents the strictest form of logical agreement. This mirrors real-world scenarios where multiple conditions must be met simultaneously. AND is fundamental to logic because it allows us to check complete fulfillment of multiple requirements. In set theory, AND corresponds to intersection - finding what sets have in common. This concept extends to validation where we need to ensure all conditions are satisfied before proceeding.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" }],
    },
    OR: {
      text: "OR returns true if at least one input is true, representing logical disjunction. It fails only when all inputs are false, making it more permissive than AND. This operator is crucial in scenarios where multiple valid paths can lead to the same outcome. OR naturally maps to combining possibilities or accepting alternatives. In mathematical terms, it unifies conditions, accepting results from any valid source.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" }],
    },
    XOR: {
      text: "XOR (exclusive OR) yields true when inputs differ, capturing the concept of mutual exclusivity. It enforces a strict either/or relationship, rejecting cases where inputs match. This makes XOR essential for comparing binary states and detecting changes between values. XOR helps identify exact differences between logical states. The operation is self-inverse, meaning applying it twice with the same values returns the original input.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" }],
    },
    NAND: {
      text: "NAND inverts the AND operation, yielding true in all cases except when both inputs are true. This seemingly simple inversion holds special power in logic. NAND's functional completeness means it can be used to construct all other logical operations. Any logical function can be built using only NAND gates. The universality of NAND demonstrates how complex logic can emerge from simple foundations.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" }],
    },
    NOR: {
      text: "NOR yields true only when both inputs are false, representing joint denial. Like NAND, it is functionally complete. NOR's behavior of requiring total absence of true inputs makes it useful in detecting complete system shutdowns or verifying full conditions. NOR can express any other logical operation through combinations. This universality shows the deep connection between negation and logical completeness.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" }],
    },
    XNOR: {
      text: "XNOR returns true when inputs match - both true or both false. It acts as a logical equality checker between binary values. This behavior makes XNOR essential in comparison operations and error detection where we need to verify matching states. XNOR effectively tests for logical equivalence between inputs. It serves as the foundation for detecting bit parity and ensuring data consistency.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" }],
    }
  };
  

  return {
    props: {
      keyWords,
      truthExplanations
    }
  }
}