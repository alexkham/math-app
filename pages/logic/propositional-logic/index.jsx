// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import React from 'react'
// import '../../pages.css'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'

// export default function PropositionalLogicPage() {

//   const keyWords=['propositional logic',
   
//     'propositional calculus',
   
//     'sentential logic'];


//     const introContent={
//         id:'intro',
//         title:'Propositional Logic: An Overview',
//         content: 
// `Propositional logic examines statements that are either true or false, focusing on how these are combined using operators. It forms a foundational sub-field of mathematical logic alongside first-order logic, higher-order logic, and others. This formal system represents and analyzes statements with definite truth values.
// **Syntax** defines the formal structure with propositions and logical connectives. 
// **Semantics** determines truth values using truth tables, identifying tautologies and contradictions.
// **Equivalences** include laws like De Morgan's and distributive laws for simplification.
// **Inference Rules** such as modus ponens enable step-by-step proofs.
// **Normal Forms** provide standard representation methods like CNF and DNF.
// **Proof Techniques** include contradiction and direct proof methods to validate arguments.
// This logical system finds applications across mathematics, computer science (circuit design, program verification), artificial intelligence (knowledge representation), philosophy, and many other fields.`


//     }

//     const propositionalLogicSections=[
//         {
//             id:"laws",
//             title:"Basic laws of Propositional Logic",
//             link:'/logic/propositional-logic/laws',
//             content:        
//                 `### Understanding Propositional Logic Laws
// Propositional logic provides a powerful framework for formal reasoning, and at its core are several fundamental laws that help us manipulate logical expressions. 
// On this [page](!/logic/propositional-logic/laws) we aggregated a summary of these laws and rules.
// They may be  grouped into families based on their logical functions:
//      **Basic Operators**: Identity, Domination, and Idempotent laws establish how basic operations behave with constants and themselves
//      **Structural Laws**: Commutative, Associative, and Distributive laws govern how expressions can be rearranged
//      **Transformation Rules**: Double Negation, De Morgan's Laws, and Absorption laws help convert between different logical forms
//       **Semantic Principles**: Negation laws represent fundamental truths about contradictions and the law of excluded middle
//       **Implications**: Contrapositive and Conditional laws help reason through logical implications
//      **Special Operators**: Exclusive OR laws define the behavior of XOR operations
//      **Advanced Principles**: Resolution, Monotonicity, and Peirce's Law provide powerful tools for formal proofs
// Each law is presented with its formal notation, a plain-language explanation, and its relevant topic area (such as Equivalences, Semantics, Normal Forms, or Proof Techniques). This organization makes it easier to find specific laws when constructing proofs or simplifying expressions.
// Whether you're working on simplifying complex logical statements, converting expressions to normal forms, or building formal proofs, these laws provide the essential toolkit for manipulating propositional logic expressions with confidence and precision.`

            

//         }
//     ]
//   return (
//     <>
//     <GenericNavbar/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//      <OperaSidebar
//            side='right'
//            topOffset='55px'
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          />
//     <Breadcrumb/>
//     <h1 className='title' style={{marginTop:'-20px',marginBottom:'30px'}}>Propositional Logic</h1>
//     <SectionTableOfContents sections={propositionalLogicSections}/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <IntroSection
//          id={introContent.id}
//          title={introContent.title} 
//          content={introContent.content}
//          backgroundColor="#f2f2f2"
//          textColor="#06357a"
//        />
//     <br/>
//     <br/>
//     <Sections sections={propositionalLogicSections}/>
//     <br/>
//     <br/>
//     <br/>
//     <ScrollUpButton/>
    
//     </>
//   )
// }

// File: pages/logic/propositional-logic.js
import React from 'react'
import Head from 'next/head'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import '../../pages.css'

export default function PropositionalLogicPage({ keyWords, introContent, propositionalLogicSections }) {
  return (
    <>
      <Head>
        <title>Propositional Logic | Learn Math Class</title>
        <meta name="description" content="Learn about propositional logic, including syntax, semantics, equivalences, inference rules, normal forms, and proof techniques." />
        <meta name="keywords" content={keyWords.join(', ')} />
        <link rel="canonical" href="https://www.learnmathclass.com/logic/propositional-logic" />
        <meta property="og:title" content="Propositional Logic | Learn Math Class" />
        <meta property="og:description" content="Learn about propositional logic, its rules, laws and applications in mathematics and computer science." />
        <meta property="og:url" content="https://www.learnmathclass.com/logic/propositional-logic" />
        <meta property="og:type" content="website" />
      </Head>
      
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
      <h1 className='title' style={{marginTop:'-20px',marginBottom:'30px'}}>Propositional Logic</h1>
      <SectionTableOfContents sections={propositionalLogicSections}/>
      <br/>
      <br/>
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
      <Sections sections={propositionalLogicSections}/>
      <br/>
      <br/>
      <br/>
      <ScrollUpButton/>
    </>
  )
}

// This function gets called at build time to make the page statically generated
export async function getStaticProps() {
  const keyWords = ['propositional logic', 'propositional calculus', 'sentential logic'];

  const introContent = {
    id: 'intro',
    title: 'Propositional Logic: An Overview',
    content: 
`Propositional logic examines statements that are either true or false, focusing on how these are combined using operators. It forms a foundational sub-field of mathematical logic alongside first-order logic, higher-order logic, and others. This formal system represents and analyzes statements with definite truth values.
**Syntax** defines the formal structure with propositions and logical connectives. 
**Semantics** determines truth values using truth tables, identifying tautologies and contradictions.
**Equivalences** include laws like De Morgan's and distributive laws for simplification.
**Inference Rules** such as modus ponens enable step-by-step proofs.
**Normal Forms** provide standard representation methods like CNF and DNF.
**Proof Techniques** include contradiction and direct proof methods to validate arguments.
This logical system finds applications across mathematics, computer science (circuit design, program verification), artificial intelligence (knowledge representation), philosophy, and many other fields.`
  }

  const propositionalLogicSections = [
    {
      id: "laws",
      title: "Basic laws of Propositional Logic",
      link: '/logic/propositional-logic/laws',
      content:        
`### Understanding Propositional Logic Laws
Propositional logic provides a powerful framework for formal reasoning, and at its core are several fundamental laws that help us manipulate logical expressions. 
On this [page](!/logic/propositional-logic/laws) we aggregated a summary of these laws and rules.
They may be  grouped into families based on their logical functions:
     **Basic Operators**: Identity, Domination, and Idempotent laws establish how basic operations behave with constants and themselves
     **Structural Laws**: Commutative, Associative, and Distributive laws govern how expressions can be rearranged
     **Transformation Rules**: Double Negation, De Morgan's Laws, and Absorption laws help convert between different logical forms
      **Semantic Principles**: Negation laws represent fundamental truths about contradictions and the law of excluded middle
      **Implications**: Contrapositive and Conditional laws help reason through logical implications
     **Special Operators**: Exclusive OR laws define the behavior of XOR operations
     **Advanced Principles**: Resolution, Monotonicity, and Peirce's Law provide powerful tools for formal proofs
Each law is presented with its formal notation, a plain-language explanation, and its relevant topic area (such as Equivalences, Semantics, Normal Forms, or Proof Techniques). This organization makes it easier to find specific laws when constructing proofs or simplifying expressions.
Whether you're working on simplifying complex logical statements, converting expressions to normal forms, or building formal proofs, these laws provide the essential toolkit for manipulating propositional logic expressions with confidence and precision.`
    },
    {
      id:'equivalences',
      title:"Logical Equivalences",
      link:'/logic/propositional-logic/equivalences',
      content:`Logical equivalences are statements in propositional logic that always have the same truth value regardless of the truth values of their individual components. 
      If two propositions $A$ and $𝐵$ are logically equivalent, we write:$A≡B$.      
This means that for every possible truth assignment,$A$ and $𝐵$ yield the same truth value.
Logical equivalences form the foundation of [propositional logic laws](!/logic/propositional-logic#laws). Each law in Boolean algebra is a logical equivalence that helps us simplify, manipulate, or prove logical expressions.
However, not all logical equivalences are laws. Some are specific derivations that are still true but are not considered "fundamental" enough to be named as laws.
Logical equivalences are essential in **mathematical logic**, shaping both **syntax** and **semantics**. Syntactically, they allow transformations between logically identical formulas, crucial for **normal forms** like CNF and DNF. Semantically, they ensure truth preservation across interpretations, making them fundamental in [truth tables](!/logic/truth-tables) and **model theory**. In **proof techniques**, equivalences justify valid transformations within formal systems, aiding in **inferences** and **proof simplifications**. By bridging **truth conditions** with **formal derivations**, logical equivalences unify reasoning in propositional logic, predicate logic, and beyond.
`
    }
  ]

  return {
    props: {
      keyWords,
      introContent,
      propositionalLogicSections
    },
    // Optional: revalidate the page after a certain period (in seconds)
    revalidate: 86400 // Regenerate once per day
  }
}