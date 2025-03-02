import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../pages.css'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'

export default function PropositionalLogicPage() {
    const introContent={
        id:'intro',
        title:'Propositional Logic: An Overview',
        content: 
            //  `Propositional logic (also called sentential logic or Boolean logic) is a branch of mathematical (formal) logic that deals with statements (propositions) which may be either true or false, but not both. It focuses on how these statements can be combined using logical operators to form more complex expressions.`,
// `# Propositional Logic  
// Propositional logic (also called **sentential logic** or **Boolean logic**) is a branch of logic that deals with statements (propositions) that can be either **true** or **false**, but not both. It focuses on how these statements can be combined using logical operators to form more complex expressions.  
// ## **Key Components of Propositional Logic**  
// ### 1. **Propositions**  
// - A **proposition** is a declarative statement that is either **true (T)** or **false (F)**.  
//   **Examples**:  
//     - "The sky is blue." (Proposition)  
//     - "2 + 2 = 5." (Proposition)  
//     - "What time is it?" (Not a proposition because it is a question.)  
// ### 2. **Logical Operators**  
// Propositions can be combined using logical **connectives** (operators):  

// - **Negation (¬ or NOT)** → "It is not raining" (¬P)  
// - **Conjunction (∧ or AND)** → "It is raining AND it is cold" (P ∧ Q)  
// - **Disjunction (∨ or OR)** → "It is raining OR it is cold" (P ∨ Q)  
// - **Implication (→ or IF-THEN)** → "If it is raining, then the ground is wet" (P → Q)  
// - **Biconditional (↔ or IF AND ONLY IF)** → "You pass IF AND ONLY IF you study" (P ↔ Q)  
// ### 3. **Truth Tables**  
// Truth tables are used to show the truth values of compound propositions based on their components. For example, in an AND operation (P ∧ Q), the result is **true** only when both P and Q are **true**.  

// ### 4. **Tautologies and Contradictions**  
// - A **tautology** is a statement that is always **true**, regardless of the truth values of its components. Example:  
//   - \( P \vee \neg P \) (Law of the Excluded Middle)  
// - A **contradiction** is a statement that is always **false**. Example:  
//   - \( P \wedge \neg P \)  

// ### 5. **Applications of Propositional Logic**  
// - Used in **mathematics**, **computer science** (e.g., circuit design, programming logic), and **artificial intelligence**.  
// - Forms the basis of Boolean algebra in digital electronics.  
// `  
// `# Propositional Logic

// Propositional logic (also called **sentential logic** or **Boolean logic**) is a branch of logic that deals with statements (propositions) that can be either **true** or **false**, but not both. It focuses on how these statements can be combined using logical operators to form more complex expressions.

// ## Key Components of Propositional Logic

// ### 1. Propositions

// - A **proposition** is a declarative statement that is either **true (T)** or **false (F)**.
//   **Examples**:
// - **"The sky is blue."** (Proposition)
//   - "2 + 2 = 5." (Proposition)
//   - "What time is it?" (Not a proposition because it is a question.)

// ### 2. Logical Operators

// Propositions can be combined using logical **connectives** (operators):

// - **Negation (¬ or NOT)** → "It is not raining" (¬P)
// - **Conjunction (∧ or AND)** → "It is raining AND it is cold" (P ∧ Q)
// - **Disjunction (∨ or OR)** → "It is raining OR it is cold" (P ∨ Q)
// - **Implication (→ or IF-THEN)** → "If it is raining, then the ground is wet" (P → Q)
// - **Biconditional (↔ or IF AND ONLY IF)** → "You pass IF AND ONLY IF you study" (P ↔ Q)

// ### 3. Truth Tables

// Truth tables are used to show the truth values of compound propositions based on their components. For example, in an AND operation (P ∧ Q), the result is **true** only when both P and Q are **true**.

// ### 4. Tautologies and Contradictions

// - A **tautology** is a statement that is always **true**, regardless of the truth values of its components. Example:
//   - (P ∨ ¬P) (Law of the Excluded Middle)
// - A **contradiction** is a statement that is always **false**. Example:
//   - (P ∧ ¬P)

// ### 5. Applications of Propositional Logic`

`Propositional logic examines statements that are either true or false, focusing on how these are combined using operators. It forms a foundational sub-field of mathematical logic alongside first-order logic, higher-order logic, and others. This formal system represents and analyzes statements with definite truth values.
**Syntax** defines the formal structure with propositions and logical connectives. 
**Semantics** determines truth values using truth tables, identifying tautologies and contradictions.
**Equivalences** include laws like De Morgan's and distributive laws for simplification.
**Inference Rules** such as modus ponens enable step-by-step proofs.
**Normal Forms** provide standard representation methods like CNF and DNF.
**Proof Techniques** include contradiction and direct proof methods to validate arguments.
This logical system finds applications across mathematics, computer science (circuit design, program verification), artificial intelligence (knowledge representation), philosophy, and many other fields.`


    }

    const propositionalLogicSections=[
        {
            id:"laws",
            title:"Basic laws of Propositional Logic",
            link:'/logic/propositional-logic/laws',
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
