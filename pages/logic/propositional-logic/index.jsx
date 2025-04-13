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
            id:'properties',
            title:'Properties of Propositions',
            content:`Propositions in classical logic have several important properties. 
            Here are a few key ones:
## 1.Logical Equivalence:

Two propositions $𝑃$ and $𝑄$ are logically equivalent (denoted $𝑃≡𝑄$) if they have the same truth value in every possible interpretation.
**Example**:
\t\t\t\t\t\t$𝑃∨𝑄≡𝑄∨𝑃$
(Commutativity of disjunction)
Read more about [equivalence](!/logic/propositional-logic#equivalences).
## 2.Consistency & Inconsistency:

A set of propositions is consistent if it is possible for all of them to be true at the same time.
A set of propositions is inconsistent if they cannot all be true simultaneously (i.e., they lead to a contradiction).
**Example**:
The set {"It is raining", "It is not raining"} is inconsistent.
The set {"It is raining", "The ground is wet"} is consistent.
## 3.Implication (Entailment / Logical Consequence):

A proposition $𝑄$ is a logical consequence of $𝑃$ (denoted $𝑃⊨𝑄$) if whenever $𝑃$ is true, $𝑄$ must also be true.
**Example**:
\t\t\t\t\t\t$𝑃=$ "It is raining."
\t\t\t\t\t\t$𝑄=$ "The ground is wet."
If $𝑃$ is true, then $𝑄$ logically follows (assuming no weird circumstances).
Read more about logical [implications](!/logic/propositional-logic/implication).
## 4. Independence:

A proposition is independent of another if neither one logically determines the truth value of the other.
**Example**:
"It is raining" and "The stock market is up" are independent because knowing one does not tell us anything about the other.
## 5.Validity & Invalidity:

A proposition is valid if it is true in all possible interpretations (i.e., a [tautology](!/logic/propositional-logic#contigency)).
A proposition is invalid if it is not true in all interpretations (i.e., it is either a [contingency or a contradiction](!/logic/propositional-logic#contigency)).

Validity is an important concept in logic because valid statements are universally true, meaning they hold regardless of the truth values of their components.

## 6.Satisfiability & Unsatisfiability:

A proposition is satisfiable if there is at least one interpretation where it is true (i.e., a [tautology or a contingency](!/logic/propositional-logic#contigency)).
A proposition is unsatisfiable if it is false in all possible interpretations (i.e., a [contradiction](!/logic/propositional-logic#contigency)).
            `
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
    },
           {
            id:'contigency',
            title:'Contigency, Tautology or Contradiction',
            content:`In classical **propositional logic**, every proposition falls into **one of three categories** based on its truth value across all possible interpretations:

## 1. [Tautology](!/logic/propositional-logic/tautology) 
 A proposition that is **always true**, no matter what.
**Example**:     
\t\t\t\t\t\t$p \\lor \\neg p$
     ("Either it will rain or it won’t"—this is always true.)
     **Validity and Tautologies**
A proposition is valid if it is true in all possible interpretations—in other words, if it is a [tautology](!/logic/propositional-logic/tautology).
If a proposition is valid, it means there is no possible scenario where it is false.

\t\t\t\t\t\t$𝑝∨¬𝑝$
(Law of the Excluded Middle) is valid because it’s always true.

## 2. **Contradiction** 
A proposition that is **always false**, no matter what. 
**Example**:     
\t\t\t\t\t\t$p \\land \\neg p$   
   ("It is raining and it is not raining"—this is never true.)
   **Unsatisfiability and Contradictions**
A proposition is unsatisfiable if it is false in every possible interpretation—which means it is a contradiction.

$𝑝∧¬𝑝$ is unsatisfiable because there is no way to make it true.

## 3. **Contingency** 
 A proposition that is **sometimes true and sometimes false**, depending on the values of its variables. Example:  
   
\t\t\t\t\t\t$p \\lor q$   
   (If **p** is "It will rain" and **q** is "It will snow," this can be true or false depending on the weather.)
   **Satisfiability and Contingencies**
A proposition is satisfiable if there is at least one interpretation where it is true.Otherwise it would be **contradiction**.
A contingent proposition (one that is sometimes true and sometimes false) is always satisfiable because it has at least one true case.

$𝑝∨𝑞$ is satisfiable because it’s true in cases where either $𝑝$ or $𝑞$ is true.

**These three categories exhaust all possibilities** for a proposition in classical logic. Every proposition must be one of these. 
<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <!-- Universe rectangle -->
  <rect x="50" y="50" width="300" height="200" fill="white" stroke="black" stroke-width="3"/>
  <text x="200" y="35" font-size="16" font-family="Arial" text-anchor="middle">All Possible Propositions</text>
  
  <!-- Three sections that completely partition the universe -->
  <rect x="50" y="50" width="100" height="200" fill="lightblue" stroke="black" stroke-width="1"/>
  <text x="100" y="150" font-size="14" font-family="Arial" text-anchor="middle">Tautology</text>
  
  <rect x="150" y="50" width="100" height="200" fill="lightgreen" stroke="black" stroke-width="1"/>
  <text x="200" y="150" font-size="14" font-family="Arial" text-anchor="middle">Contingency</text>
  
  <rect x="250" y="50" width="100" height="200" fill="lightcoral" stroke="black" stroke-width="1"/>
  <text x="300" y="150" font-size="14" font-family="Arial" text-anchor="middle">Contradiction</text>
</svg>


`
          },

           //     {
        //     id:'',
        //     title:'',
        //     content:``
        //   },
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