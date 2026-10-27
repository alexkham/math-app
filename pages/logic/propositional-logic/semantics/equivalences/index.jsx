// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import '../../../../pages.css'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Sections from '@/app/components/page-components/section/Sections'
// import MyList from '@/app/components/page-components/lists/MyList'
// import ExpandableTable from '@/app/components/data-wrapper/generic-table/ExpandableTable'
// import Head from 'next/head'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'

// export async function getStaticProps(){

//   const keyWords=[
//       'logic', 'propositional logic', 'logic equivalence','laws of logical equivalenece'
//       ,'biconditional','biconditional statement'
//   ]


//   const introContent = {
//     id: "intro",
//     title: "Introduction to Logical Equivalences",
//     content: `**Logical equivalences** are fundamental building blocks in propositional logic that help us understand when two different-looking statements actually mean the same thing. Two logical statements are **logically equivalent** if they always produce identical truth values, regardless of the truth values of their components.
   
//    Understanding logical equivalences is crucial for simplifying complex logical expressions, constructing proofs, and analyzing logical arguments. This comprehensive guide explores multiple verification methods, from truth tables for small expressions to algebraic manipulation using established logical laws.
   
//    We'll cover essential equivalences including **material implication** (transforming "if-then" statements), **De Morgan's laws** (handling negations of compound statements), and **biconditional equivalences** (understanding "if and only if" relationships). You'll also learn fundamental laws like the distributive, associative, and absorption laws that form the foundation of logical reasoning.
   
//    Whether you're working with simple propositions or complex nested statements, mastering these equivalences will give you powerful tools for logical analysis, proof construction, and mathematical reasoning. Each equivalence comes with clear explanations and practical applications to help you understand not just **what** these relationships are, but **why** they work.`
//    }

//   const verify=[
//     `**Truth Tables (Brute-Force Method)**:
// Construct a truth table for both expressions.
// Check if the final column values are identical for all possible truth values of the variables.
// If they match in every row, the expressions are logically equivalent.
// ✅ Best for: Propositional logic with a small number of variables.
// ❌ Not practical for more than 3-4 variables due to exponential growth in rows.`,
// `**Algebraic Manipulation Using Logical Laws**:
// Apply known logical equivalences ([laws](!/logic/propositional-logic/laws)) (e.g., De Morgan’s laws, distributive, commutative, associative properties) to transform one statement into another.
// If you can rewrite $𝑃$ into $𝑄$ (or vice versa), they are equivalent.
// ✅ Best for: Proofs and simplifying expressions without constructing tables.
// ❌ Requires familiarity with logical laws.`,
// `**Using Logical Implications**:
// Show that $𝑃→𝑄$ and $𝑄→𝑃$ are both true.
// If both implications hold, then $𝑃≡𝑄$.
// ✅ Best for: When equivalences involve implications.
// ❌ Requires proving two separate implications.`,
// `**Venn Diagrams (Set-Theoretic Approach)**:
// Represent logical statements using sets and intersections/unions.
// If two statements cover the same region, they are equivalent.
// ✅ Best for: Visualizing logical expressions.
// ❌ Not practical for complex expressions.`

// ]

// const biconditionalEquivalences = [
//   {
//     id: "1",
//     name: "Biconditional as Two Implications",
//     equivalence: "$p \\leftrightarrow q \\equiv (p \\rightarrow q) \\land (q \\rightarrow p)$",
//     explanation: "A biconditional means both directions of implication must be true."
//   },
//   {
//     id: "2",
//     name: "Negation Preservation in Biconditional",
//     equivalence: "$p \\leftrightarrow q \\equiv \\neg p \\leftrightarrow \\neg q$",
//     explanation: "Negating both sides of a biconditional does not change its truth value."
//   },
//   {
//     id: "3",
//     name: "Biconditional in Terms of AND and OR",
//     equivalence: "$p \\leftrightarrow q \\equiv (p \\land q) \\lor (\\neg p \\land \\neg q)$",
//     explanation: "Two statements are equivalent if both are true or both are false."
//   },
//   {
//     id: "4",
//     name: "Negation of a Biconditional",
//     equivalence: "$\\neg (p \\leftrightarrow q) \\equiv p \\leftrightarrow \\neg q$",
//     explanation: "Negating a biconditional swaps one side, making it an XOR."
//   }
// ];

// const logicalLaws = [
//   `**Identity Laws**: 
//   $P \\lor \\text{false} \\equiv P$, 
//   $P \\land \\text{true} \\equiv P$`,
//   `**Domination Laws**: 
//   $P \\lor \\text{true} \\equiv \\text{true}$, 
//   $P \\land \\text{false} \\equiv \\text{false}$`,
//   `**Idempotent Laws**: 
//   $P \\lor P \\equiv P$, 
//   $P \\land P \\equiv P$`,
//   `**Double Negation Law**:
//    $\\neg (\\neg P) \\equiv P$`,
//   `**Commutative Laws**:
//    $P \\lor Q \\equiv Q \\lor P$, 
//    $P \\land Q \\equiv Q \\land P$`,
//   `**Associative Laws**: 
//   $P \\lor (Q \\lor R) \\equiv (P \\lor Q) \\lor R$, 
//   $P \\land (Q \\land R) \\equiv (P \\land Q) \\land R$`,
//   `**Distributive Laws**:
//    $P \\land (Q \\lor R) \\equiv (P \\land Q) \\lor (P \\land R)$,
//     $P \\lor (Q \\land R) \\equiv (P \\lor Q) \\land (P \\lor R)$`,
//   `**Absorption Laws**:
//    $P \\lor (P \\land Q) \\equiv P$,
//    $P \\land (P \\lor Q) \\equiv P$`,
//   `**De Morgan’s Laws**:
//    $\\neg (P \\lor Q) \\equiv \\neg P \\land \\neg Q$,
//     $\\neg (P \\land Q) \\equiv \\neg P \\lor \\neg Q$`,
//   `**Law of Excluded Middle**:
//    $P \\lor \\neg P \\equiv \\text{true}$`,
//   `**Law of Non-Contradiction**:
//    $P \\land \\neg P \\equiv \\text{false}$`
// ];

// const logicalEquivalences = [
//   {
//     id: "1",
//     name: "Material Implication",
//     equivalence: "$p \\rightarrow q \\equiv \\neg p \\lor q$",
//     explanation: `"if $𝑝$ then $𝑞$" is the same as saying "either $𝑝$ is false or $𝑞$ is true."`
//   },
//   {
//     id: "2",
//     name: "Contrapositive",
//     equivalence: "$p \\rightarrow q \\equiv \\neg q \\rightarrow \\neg p$",
//     explanation: "Reversing and negating an implication produces an equivalent statement."
//   },
//   {
//     id: "3",
//     name: "Disjunction Form of Implication",
//     equivalence: "$p \\lor q \\equiv \\neg p \\rightarrow q$",
//     explanation: "A disjunction can be rewritten as an implication."
//   },
//   {
//     id: "4",
//     name: "Implication as a Conjunction",
//     equivalence: "$p \\land q \\equiv \\neg (p \\rightarrow \\neg q)$",
//     explanation: "A conjunction can be expressed using an implication and negation."
//   },
//   {
//     id: "5",
//     name: "Negation of an Implication",
//     equivalence: "$\\neg (p \\rightarrow q) \\equiv p \\land \\neg q$",
//     explanation: "An implication is false only when the antecedent is true and the consequent is false."
//   },
//   {
//     id: "6",
//     name: "Implication Distribution over Conjunction",
//     equivalence: "$(p \\rightarrow q) \\land (p \\rightarrow r) \\equiv p \\rightarrow (q \\land r)$",
//     explanation: "If \( p \) implies both \( q \) and \( r \), then it implies their conjunction."
//   },
//   {
//     id: "7",
//     name: "Nested Implications in a Disjunction",
//     equivalence: "$(p \\rightarrow r) \\land (q \\rightarrow r) \\equiv (p \\lor q) \\rightarrow r$",
//     explanation: "If both \( p \) and \( q \) imply \( r \), then their disjunction also implies \( r \)."
//   },
//   {
//     id: "8",
//     name: "Implication Distribution over Disjunction",
//     equivalence: "$(p \\rightarrow q) \\lor (p \\rightarrow r) \\equiv p \\rightarrow (q \\lor r)$",
//     explanation: "If \( p \) implies either \( q \) or \( r \), then \( p \) implies their disjunction."
//   },
//   {
//     id: "9",
//     name: "Nested Implications in a Conjunction",
//     equivalence: "$(p \\rightarrow r) \\lor (q \\rightarrow r) \\equiv (p \\land q) \\rightarrow r$",
//     explanation: "If either \( p \) or \( q \) implies \( r \), then their conjunction implies \( r \)."
//   }
// ];

// const sectionsContent={

//   definition:{
//     title:'Definition and Notation',
//     content:`## Definition
//           Two logical statements (or propositions) are logically equivalent if they **always** have the same truth value, regardless of the truth values of their individual components. This means that no matter what, both expressions will evaluate to either true or false together in every possible case.
          
// ## Notation
//           Logical equivalence is usually written as:   

// \t\t\t\t\t\t\t\t $P≡Q$
//    Sometimes notation like this is used :

// \t\t\t\t\t\t\t\t  $P⇔Q$

// Both of those forms are legitimate and acceptable to notate equivalence.Both notations indicate that $𝑃$ and $𝑄$ always produce the same truth values.
// In boolean algebra also used this notation:

// \t\t\t\t\t\t\t\t  $P=Q$

// In [LaTeX](!/latex) source, $≡$ is produced by the command \\equiv and $⇔$ by \\Leftrightarrow.

// The notations for logical equivalence and **biconditional** ($P↔Q$ or $𝑃⟺𝑄$) can sometimes look similar, but they have different meanings, and they are not always interchangeable.
// $P≡Q$ means $𝑃$ and $𝑄$  are logically equivalent in all possible cases.
// $𝑃↔𝑄$ is just a statement that says $𝑃$ and $𝑄$ happen to be true or false together in a specific context - it can be true or false, depending on $𝑃$ and $𝑄$.          `,
//     before:``,
//     after:``,


//   },
//   verify:{
//     title:'How to Verify Logical Equivalence?',
//     content:``,
//     before:`To verify that two logical statements $𝑃$ and $𝑄$ are logically equivalent ($𝑃≡𝑄$), we need to show that they always have the same truth value in all cases. 
//             There are several methods to do this:
            
//             `,
//     after:``,

//   },

//   laws:{

//     title:'Fundamental Equivalences (Laws)',
//     content:``,
//     before: `Some logical equivalences are considered [laws of logic](!/logic/propositional-logic/laws).A law is a fundamental equivalence—one that is taken as a basic principle, rather than something that needs to be proven from other rules. 
//     On the other hand, many of logical equivalences, while being valid transformations, are not considered fundamental laws because they depend on definitions, are derived from the laws, or are specific to certain logical systems.
    
//     `,
//     after: `For more information about [laws of propositional logic](!/logic/propositional-logic/laws), you can visit this page.`,

//   },
//   conditional:{
//     title:'Equivalences with Implications',
//     content:``,
//     before:  
//     `In propositional logic, a conditional statement (**implication**) is written as:
// \t\t\t\t\t\t\t            $𝑃→𝑄$ 
//   which means "if $𝑃$, then $𝑄$".
// However, **implications** can be rewritten using logical equivalences. 
// Here are the key ones:

// `,
//     after:`
// All logical equivalences involving **implications** provide ways to rewrite conditional statements in different but logically identical forms. A common theme among them is restructuring the relationship between the antecedent ($𝑝$) and the consequent ($𝑞$) using negation, disjunction, or conjunction while preserving truth values. These transformations help simplify logical expressions and proofs.
// `,

//   },
//   biconditional:{

//     title:'Equivalences with Biconditionals',
//     content:``,
//     before:`Logical equivalences involving **biconditional statements** ($𝑝↔𝑞$) focus on expressing the mutual dependence of two propositions in different but logically equivalent ways. The biconditional means "p if and only if q," meaning both must have the same truth value (either both true or both false).
//                 Here are some equivalences involving **biconditional statements**:
                
//                 `,
//     after:   `
//      **Conclusion on Biconditional Equivalences**  
//     Biconditional equivalences highlight the **fundamental symmetry** in logic: two statements are **logically interchangeable** if and only if they always have the same truth value. These equivalences allow us to express \( p \leftrightarrow q \) in different but logically equivalent ways, making it easier to manipulate and analyze logical statements.  
//         - **They break down into implications**, showing that mutual implication defines equivalence.  
//         - **They connect to conjunction and disjunction**, emphasizing that two statements are equivalent when they share truth values.  
//         - **Negating a biconditional results in an XOR**, reinforcing that logical opposition emerges when one statement is true and the other is false.  
    
//     In formal logic, these properties make biconditionals a powerful tool for **proofs, simplifications, and logical reasoning** across mathematics, philosophy, and computing.`,

//   }

// }

//   return {
//     props:{
//        verify,
//        biconditionalEquivalences,
//        logicalLaws,
//        logicalEquivalences,
//        sectionsContent,
//        keyWords,
//        introContent
//     }
//   }
// }

// export default function EquivalencesPage({verify ,biconditionalEquivalences ,logicalLaws ,logicalEquivalences,
//   sectionsContent,keyWords ,introContent}) {


//     const equivalencesSections=[
//         {
//           id:'definition',
//           title:sectionsContent.definition.title,
         
//           content:sectionsContent.definition.content,
//         },
//         {
//             id:'verify',
//             title:sectionsContent.verify.title,
//             content:[
//               sectionsContent.verify.before,
//             <MyList data={verify}
//             key={4}
//             boxed={true} color={'blue'} compact={true} type={'number'} />
//         ]
//           },
         
//         {
//             id:'laws',
//             title:sectionsContent.laws.title,
//             link:'/logic/propositional-logic/laws',
//             content:[
//              sectionsContent.laws.before,
// <MyList data={logicalLaws}
// key={1}
//  boxed={true} color={'blue'} compact={true} type={'dot'} width={'300px'}/>,

//  sectionsContent.laws.after,

// ]
//           },
//           {
//             id:'conditional',
//             title:sectionsContent.conditional.title,
//             content:[
//             sectionsContent.conditional.before,
// <ExpandableTable data={logicalEquivalences}
// key={2}
// copyableFields={'equivalence'}
// includedFields={['name','equivalence','explanation']}/>,
// sectionsContent.conditional.after,
// ]
//           },
//           {
//             id:'biconditional',
//             title:sectionsContent.biconditional.title,
//             content:[
//                 sectionsContent.biconditional.before,
//                 <ExpandableTable data={biconditionalEquivalences}
//                 key={3}
//                 copyableFields={'equivalence'}
//                 includedFields={['name','equivalence','explanation']}/>,
//              sectionsContent.biconditional.after,
//             ]
//           },
//         //   {
//         //     id:'',
//         //     title:'',
//         //     content:``
//         //   },
         


//     ]


   


//   return (
//     <>
//     <Head>
//   <title>Logical Equivalences in Propositional Logic | Learn Math Class</title>
//   <meta name="description" content="Master logical equivalences in propositional logic. Learn verification methods, fundamental laws, implications, biconditionals, and truth tables." />
//   <link rel="canonical" href="https://www.learnmathclass.com/logic/propositional-logic/semantics/equivalences" />
//   <meta name="keywords" content="logic, propositional logic, logical equivalence, laws of logical equivalence, biconditional, biconditional statement" />
//   <meta property="og:title" content="Logical Equivalences in Propositional Logic | Learn Math Class" />
//   <meta property="og:description" content="Master logical equivalences in propositional logic. Learn verification methods, fundamental laws, implications, biconditionals, and truth tables." />
//   <meta property="og:url" content="https://www.learnmathclass.com/logic/propositional-logic/semantics/equivalences" />
  
//   <script type="application/ld+json">
//     {`{
//       "@context": "https://schema.org",
//       "@type": "Article",
//       "headline": "Logical Equivalences in Propositional Logic",
//       "description": "Master logical equivalences in propositional logic. Learn verification methods, fundamental laws, implications, biconditionals, and truth tables.",
//       "url": "https://www.learnmathclass.com/logic/propositional-logic/semantics/equivalences",
//       "author": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       }
//     }`}
//   </script>
// </Head>
//     {/* <GenericNavbar/> */}
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <OperaSidebar
//             side='right'
//             topOffset='55px'
//             sidebarWidth='45px'
//             panelWidth='200px'
//             iconColor='white'
//             panelBackgroundColor='#f2f2f2'
//           />
//     <Breadcrumb/>
//     <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Logical Equivalences</h1>
//     <br/>
//     <br/>
//     <br/>
//     {/* <div style={{display:'flex',flexDirection:'row',maxWidth:'1300px'}}> */}
//     <SectionTableOfContents sections={equivalencesSections}
//      showSecondaryNav={true}
//      secondaryNavMode="siblings"
//      secondaryNavTitle="Similar Pages"/>

//      <br/>
//          <br/>
//          <br/>
//          <IntroSection
//               id={introContent.id}
//               title={introContent.title} 
//               content={introContent.content}
//               backgroundColor="#f2f2f2"
//               textColor="#06357a"
//             />

//     {/* </div> */}
   
//     <br/>
//     <Sections sections={equivalencesSections}/>
//     <br/>
//     <br/>
//     <br/>
//     {/* <ScrollUpButton/> */}
    
//     </>
//   )
// }



import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import '../../../../pages.css'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Sections from '@/app/components/page-components/section/Sections'
import MyList from '@/app/components/page-components/lists/MyList'
import ExpandableTable from '@/app/components/data-wrapper/generic-table/ExpandableTable'
import Head from 'next/head'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import vennTruthTableDiagrams from '@/app/components/diagrams/set-theory/vennTruthTableDiagrams'
import { tableHeaders } from '@/app/styles/theme'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'

export async function getStaticProps(){

  const keyWords=[
      'logic', 'propositional logic', 'logic equivalence','laws of logical equivalenece'
      ,'biconditional','biconditional statement'
  ]


  const introContent = {
    id: "intro",
    title: "Introduction to Logical Equivalences",
    content: `**Logical equivalences** are fundamental building blocks in propositional logic that help us understand when two different-looking statements actually mean the same thing. Two logical statements are **logically equivalent** if they always produce identical truth values, regardless of the truth values of their components.
   
   Understanding logical equivalences is crucial for simplifying complex logical expressions, constructing proofs, and analyzing logical arguments. This comprehensive guide explores multiple verification methods, from truth tables for small expressions to algebraic manipulation using established logical laws.
   
   We'll cover essential equivalences including **material implication** (transforming "if-then" statements), **De Morgan's laws** (handling negations of compound statements), and **biconditional equivalences** (understanding "if and only if" relationships). You'll also learn fundamental laws like the distributive, associative, and absorption laws that form the foundation of logical reasoning.
   
   Whether you're working with simple propositions or complex nested statements, mastering these equivalences will give you powerful tools for logical analysis, proof construction, and mathematical reasoning. Each equivalence comes with clear explanations and practical applications to help you understand not just **what** these relationships are, but **why** they work.`
   }

  const verify=[
    `**Truth Tables (Brute-Force Method)**:
Construct a truth table for both expressions.
Check if the final column values are identical for all possible truth values of the variables.
If they match in every row, the expressions are logically equivalent.
✅ Best for: Propositional logic with a small number of variables.
❌ Not practical for more than 3-4 variables due to exponential growth in rows.`,
`**Algebraic Manipulation Using Logical Laws**:
Apply known logical equivalences ([laws](!/logic/propositional-logic/laws)) (e.g., De Morgan’s laws, distributive, commutative, associative properties) to transform one statement into another.
If you can rewrite $P$ into $Q$ (or vice versa), they are equivalent.
✅ Best for: Proofs and simplifying expressions without constructing tables.
❌ Requires familiarity with logical laws.`,
`**Using Logical Implications**:
Show that $P→Q$ and $Q→P$ are both tautologies.
If both implications are tautologies, then $P≡Q$.
✅ Best for: When equivalences involve implications.
❌ Requires proving two separate implications.`,
`**Venn Diagrams (Set-Theoretic Approach)**:
Represent logical statements using sets and intersections/unions.
If two statements cover the same region, they are equivalent.
✅ Best for: Visualizing logical expressions.
❌ Not practical for complex expressions.`

]

const biconditionalEquivalences = [
  {
    id: "1",
    name: "Biconditional as Two Implications",
    equivalence: "$p \\leftrightarrow q \\equiv (p \\rightarrow q) \\land (q \\rightarrow p)$",
    explanation: "A biconditional means both directions of implication must be true."
  },
  {
    id: "2",
    name: "Negation Preservation in Biconditional",
    equivalence: "$p \\leftrightarrow q \\equiv \\neg p \\leftrightarrow \\neg q$",
    explanation: "Negating both sides of a biconditional does not change its truth value."
  },
  {
    id: "3",
    name: "Biconditional in Terms of AND and OR",
    equivalence: "$p \\leftrightarrow q \\equiv (p \\land q) \\lor (\\neg p \\land \\neg q)$",
    explanation: "Two statements are equivalent if both are true or both are false."
  },
  {
    id: "4",
    name: "Negation of a Biconditional",
    equivalence: "$\\neg (p \\leftrightarrow q) \\equiv p \\leftrightarrow \\neg q$",
    explanation: "Negating a biconditional swaps one side, making it an XOR."
  }
];

const logicalLaws = [
  `**Identity Laws**: 
  $P \\lor \\text{false} \\equiv P$, 
  $P \\land \\text{true} \\equiv P$`,
  `**Domination Laws**: 
  $P \\lor \\text{true} \\equiv \\text{true}$, 
  $P \\land \\text{false} \\equiv \\text{false}$`,
  `**Idempotent Laws**: 
  $P \\lor P \\equiv P$, 
  $P \\land P \\equiv P$`,
  `**Double Negation Law**:
   $\\neg (\\neg P) \\equiv P$`,
  `**Commutative Laws**:
   $P \\lor Q \\equiv Q \\lor P$, 
   $P \\land Q \\equiv Q \\land P$`,
  `**Associative Laws**: 
  $P \\lor (Q \\lor R) \\equiv (P \\lor Q) \\lor R$, 
  $P \\land (Q \\land R) \\equiv (P \\land Q) \\land R$`,
  `**Distributive Laws**:
   $P \\land (Q \\lor R) \\equiv (P \\land Q) \\lor (P \\land R)$,
    $P \\lor (Q \\land R) \\equiv (P \\lor Q) \\land (P \\lor R)$`,
  `**Absorption Laws**:
   $P \\lor (P \\land Q) \\equiv P$,
   $P \\land (P \\lor Q) \\equiv P$`,
  `**De Morgan’s Laws**:
   $\\neg (P \\lor Q) \\equiv \\neg P \\land \\neg Q$,
    $\\neg (P \\land Q) \\equiv \\neg P \\lor \\neg Q$`,
  `**Law of Excluded Middle**:
   $P \\lor \\neg P \\equiv \\text{true}$`,
  `**Law of Non-Contradiction**:
   $P \\land \\neg P \\equiv \\text{false}$`
];

const logicalEquivalences = [
  {
    id: "1",
    name: "Material Implication",
    equivalence: "$p \\rightarrow q \\equiv \\neg p \\lor q$",
    explanation: `"if $p$ then $q$" is the same as saying "either $p$ is false or $q$ is true."`
  },
  {
    id: "2",
    name: "Contrapositive",
    equivalence: "$p \\rightarrow q \\equiv \\neg q \\rightarrow \\neg p$",
    explanation: "Reversing and negating an implication produces an equivalent statement."
  },
  {
    id: "3",
    name: "Disjunction Form of Implication",
    equivalence: "$p \\lor q \\equiv \\neg p \\rightarrow q$",
    explanation: "A disjunction can be rewritten as an implication."
  },
  {
    id: "4",
    name: "Implication as a Conjunction",
    equivalence: "$p \\land q \\equiv \\neg (p \\rightarrow \\neg q)$",
    explanation: "A conjunction can be expressed using an implication and negation."
  },
  {
    id: "5",
    name: "Negation of an Implication",
    equivalence: "$\\neg (p \\rightarrow q) \\equiv p \\land \\neg q$",
    explanation: "An implication is false only when the antecedent is true and the consequent is false."
  },
  {
    id: "6",
    name: "Implication Distribution over Conjunction",
    equivalence: "$(p \\rightarrow q) \\land (p \\rightarrow r) \\equiv p \\rightarrow (q \\land r)$",
    explanation: "If $p$ implies both $q$ and $r$, then it implies their conjunction."
  },
  {
    id: "7",
    name: "Implications with a Common Consequent",
    equivalence: "$(p \\rightarrow r) \\land (q \\rightarrow r) \\equiv (p \\lor q) \\rightarrow r$",
    explanation: "If both $p$ and $q$ imply $r$, then their disjunction also implies $r$."
  },
  {
    id: "8",
    name: "Implication Distribution over Disjunction",
    equivalence: "$(p \\rightarrow q) \\lor (p \\rightarrow r) \\equiv p \\rightarrow (q \\lor r)$",
    explanation: "If $p$ implies either $q$ or $r$, then $p$ implies their disjunction."
  },
  {
    id: "9",
    name: "Nested Implications in a Conjunction",
    equivalence: "$(p \\rightarrow r) \\lor (q \\rightarrow r) \\equiv (p \\land q) \\rightarrow r$",
    explanation: "If either $p$ or $q$ implies $r$, then their conjunction implies $r$."
  }
];

// Concept introduction ("Definition" section) — template A, definition last.
// Running instance: P → Q against ¬P ∨ Q, the Venn truth-table tool's
// "named" state, with Q → P as the near-miss. Old definition text is kept in
// sectionsContent.definition, unused, and reused verbatim.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciSameTable = ciTableOpen(['P', 'Q', 'P → Q', '¬P', '¬P ∨ Q']) +
  ciRow(['T', 'T', 'T', 'F', 'T'], { color: '#2563EB', cols: [2, 4] }) +
  ciRow(['T', 'F', 'F', 'F', 'F'], { shade: true, color: '#2563EB', cols: [2, 4] }) +
  ciRow(['F', 'T', 'T', 'T', 'T'], { color: '#2563EB', cols: [2, 4] }) +
  ciRow(['F', 'F', 'T', 'T', 'T'], { shade: true, last: true, color: '#2563EB', cols: [2, 4] }) +
  '</tbody></table>'
const ciMissTable = ciTableOpen(['P', 'Q', 'P → Q', 'Q → P', 'agree?']) +
  ciRow(['T', 'T', 'T', 'T', 'yes']) +
  ciRow(['T', 'F', 'F', 'T', 'no'], { shade: true, color: '#a4243b', cols: [4] }) +
  ciRow(['F', 'T', 'T', 'F', 'no'], { color: '#a4243b', cols: [4] }) +
  ciRow(['F', 'F', 'T', 'T', 'yes'], { shade: true, last: true }) +
  '</tbody></table>'

const sectionsContent={

  definition:{
    title:'Definition',
    content:`Two logical statements (or propositions) are logically equivalent if they **always** have the same truth value, regardless of the truth values of their individual components. This means that no matter what, both expressions will evaluate to either true or false together in every possible case.`,
    before:``,
    after:``,


  },

  notation: {
    title: `Equivalence Notation`,
    lead: `Three legitimate spellings for one meta-claim — and a lookalike connective that is not one of them. The ≡-versus-↔ boundary is the working distinction of this whole page.`,
    inherited: `The letters $P$, $Q$ and the connectives inside every law come from [propositional logic notation](!/logic/propositional-logic/syntax#notation); the biconditional $\\leftrightarrow$ itself is one of those five connectives.`,
    entries: [
      {
        id: 'triple-bar',
        tex: `$P \\equiv Q$`,
        read: `P is logically equivalent to Q`,
        means: `The triple bar makes a claim **about** formulas: $P$ and $Q$ agree in every possible case. It is a statement in the metalanguage — always simply true or false — produced in [LaTeX](!/latex) by @[\\equiv]@.`,
        cases: `Laws are equivalences promoted to principles — every row of the [laws table](!/logic/propositional-logic/laws) is an $\\equiv$ claim; **How to Verify Logical Equivalence?** below gives the checking methods.`,
        confusedWith: `The biconditional. $P \\leftrightarrow Q$ is a formula **inside** the language whose truth varies with $P$ and $Q$; $P \\equiv Q$ is a verdict about all cases at once. The bridge: $P \\equiv Q$ exactly when $P \\leftrightarrow Q$ is a tautology.`,
        sameGlyphElsewhere: `The same triple bar states [congruence](!/arithmetic/modulo#2) in number theory — with a trailing modulus — and "identically equal" in algebra; three jobs, one stroke.`,
      },
      {
        id: 'double-arrow',
        tex: `$P \\Leftrightarrow Q$`,
        read: `P if and only if Q — in the meta sense`,
        means: `The double-shafted arrow, an equally accepted spelling of the same meta-claim — @[\\Leftrightarrow]@ in LaTeX. The double shaft is the meta-marker: $\\Leftrightarrow$ stands above the language the single-shafted $\\leftrightarrow$ lives inside.`,
        cases: `The shaft convention runs in parallel one level down: $\\Rightarrow$ versus $\\to$ on the [implication page](!/logic/propositional-logic/semantics/implication) — double shafts talk about formulas, single shafts build them.`,
        confusedWith: `A stronger biconditional. $\\Leftrightarrow$ is not "very iff" — it is $\\equiv$ in arrow costume; treating it as a connective puts a meta-mark inside a formula, which the formation rules never generate.`,
      },
      {
        id: 'boolean-equals',
        tex: `$P = Q$`,
        read: `P equals Q — Boolean algebra's spelling`,
        means: `Boolean algebra writes equivalence with the plain equals sign — there, formulas denote values in $\\{0, 1\\}$ and equality of values is exactly agreement in all cases. Same claim, an algebraist's dialect.`,
        cases: `The dialect travels with the algebra: simplification chains in circuit design and Boolean identities read $P = Q$ throughout; logic texts keep $\\equiv$ to avoid overloading their own equals.`,
        confusedWith: `Numeric equality. $P = Q$ asserts nothing about numbers — the letters still hold truth values; importing arithmetic habits (adding to both sides) produces nonsense.`,
      },
    ],
    symbolsHref: `/math-symbols/math-logic`,
    symbolsLabel: `All logic symbols`,
    parentHref: `/logic/propositional-logic/semantics`,
    parentLabel: `Semantics`,
  },
  verify:{
    title:'How to Verify Logical Equivalence?',
    content:``,
    before:`To verify that two logical statements $P$ and $Q$ are logically equivalent ($P≡Q$), we need to show that they always have the same truth value in all cases. 
            There are several methods to do this:
            
            `,
    after:``,

  },

  laws:{

    title:'Fundamental Equivalences (Laws)',
    content:``,
    before: `Some logical equivalences are considered [laws of logic](!/logic/propositional-logic/laws). A law is a fundamental equivalence—one that is taken as a basic principle, rather than something that needs to be proven from other rules. 
    On the other hand, many of logical equivalences, while being valid transformations, are not considered fundamental laws because they depend on definitions, are derived from the laws, or are specific to certain logical systems.
    
    `,
    after: `For more information about [laws of propositional logic](!/logic/propositional-logic/laws), you can visit this page.`,

  },
  conditional:{
    title:'Equivalences with Implications',
    content:``,
    before:  
    `In propositional logic, a conditional statement (**implication**) is written as:
\t\t\t\t\t\t\t            $P→Q$ 
  which means "if $P$, then $Q$".
However, **implications** can be rewritten using logical equivalences. 
Here are the key ones:

`,
    after:`
All logical equivalences involving **implications** provide ways to rewrite conditional statements in different but logically identical forms. A common theme among them is restructuring the relationship between the antecedent ($p$) and the consequent ($q$) using negation, disjunction, or conjunction while preserving truth values. These transformations help simplify logical expressions and proofs.
`,

  },
  biconditional:{

    title:'Equivalences with Biconditionals',
    content:``,
    before:`Logical equivalences involving **biconditional statements** ($p↔q$) focus on expressing the mutual dependence of two propositions in different but logically equivalent ways. The biconditional means "p if and only if q," meaning both must have the same truth value (either both true or both false).
                Here are some equivalences involving **biconditional statements**:
                
                `,
    after:   `
     **Conclusion on Biconditional Equivalences**  
    Biconditional equivalences highlight the **fundamental symmetry** in logic: two statements are **logically interchangeable** if and only if they always have the same truth value. These equivalences allow us to express $p \\leftrightarrow q$ in different but logically equivalent ways, making it easier to manipulate and analyze logical statements.  
        - **They break down into implications**, showing that mutual implication defines equivalence.  
        - **They connect to conjunction and disjunction**, emphasizing that two statements are equivalent when they share truth values.  
        - **Negating a biconditional results in an XOR**, reinforcing that logical opposition emerges when one statement is true and the other is false.  
    
    In formal logic, these properties make biconditionals a powerful tool for **proofs, simplifications, and logical reasoning** across mathematics, philosophy, and computing.`,

  },

  pitfallBoxes:{
    verify:`@academic[pitfall,aside:true,width:35%:Checking only some rows
Comparing $p \\to q$ and $q \\to p$ only at $p = q = T$ and $p = q = F$, where both are T, makes them look equivalent. At $p = T$, $q = F$ the first is F and the second is T, so they are not equivalent.
[Read more](!#pitfalls)]@
Whichever method is used, the claim being tested is the same: the two formulas agree in every row of the truth table. With $n$ variables there are $2^n$ rows, four for two variables and eight for three, and the verdict depends on all of them. A single row in which the two columns differ is enough to show that the formulas are not equivalent.`,
    laws:`@academic[pitfall,aside:true,width:35%:Keeping the connective in De Morgan's law
Rewriting $\\neg (P \\land Q)$ as $\\neg P \\land \\neg Q$ fails at $P = T$, $Q = F$: there $\\neg (P \\land Q)$ is T but $\\neg P \\land \\neg Q$ is F. The negation flips the connective, so $\\neg (P \\land Q) \\equiv \\neg P \\lor \\neg Q$.
[Read more](!#pitfalls)]@
De Morgan's laws are the tools for moving a negation inside brackets. They are needed whenever a negated compound has to be simplified, for example when stating exactly what it means for "the file is open and the disk is full" to fail. Each of the two laws is checked on four rows, one for each pair of truth values of $P$ and $Q$.`,
    conditional:`@academic[pitfall,aside:true,width:35%:Negating an implication into an implication
Writing $\\neg (p \\to q)$ as $p \\to \\neg q$ fails at $p = F$, $q = T$: there $\\neg (p \\to q)$ is F but $p \\to \\neg q$ is T. The negation is a conjunction, $\\neg (p \\to q) \\equiv p \\land \\neg q$.
[Read more](!#pitfalls)]@
Negating a conditional comes up whenever a claim of the form "if $p$, then $q$" has to be refuted. To deny such a claim is to describe the cases in which it fails, and the truth table of $p \\to q$ has exactly one such row. Material implication turns the arrow into $\\neg p \\lor q$, and from there De Morgan's law carries the negation inside.

@academic[pitfall,aside:true,width:35%:Joining the antecedents with AND
Rewriting $(p \\to r) \\land (q \\to r)$ as $(p \\land q) \\to r$ fails at $p = T$, $q = F$, $r = F$: the left side is F, the right side is T. Joined by $\\land$, the two implications combine their antecedents with $\\lor$: $(p \\lor q) \\to r$.
[Read more](!#pitfalls)]@
Four of the equivalences in the table merge two implications that share one part into a single implication. When the shared part is the antecedent $p$, the connective between the two implications passes to the consequents unchanged. In the other two the shared part is the consequent $r$, and the parts being combined are the antecedents.`,
    biconditional:`@academic[pitfall,aside:true,width:35%:Negating both sides of a biconditional
Taking $\\neg p \\leftrightarrow \\neg q$ as the negation of $p \\leftrightarrow q$ fails at $p = q = T$: there $\\neg (p \\leftrightarrow q)$ is F but $\\neg p \\leftrightarrow \\neg q$ is T. Negating one side gives the negation: $\\neg (p \\leftrightarrow q) \\equiv p \\leftrightarrow \\neg q$.
[Read more](!#pitfalls)]@
The biconditional is true exactly when its two sides have the same truth value, so its negation is true exactly when they differ. Two rows of the table above place negation signs at the sides of a biconditional, and they do different things: one leaves the truth value unchanged, the other turns it into its opposite. A negation written outside the brackets, $\\neg (p \\leftrightarrow q)$, describes the rows $p = T$, $q = F$ and $p = F$, $q = T$.`,
  },

  pitfalls:{
    title:'Common Pitfalls',
    content:`Five slips account for many wrong answers when equivalences are checked or used. Each is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Checking only some rows**

Two formulas are compared on a few convenient rows of the truth table, they agree there, and they are declared equivalent. Equivalence is a claim about every row, so agreement on some of them proves nothing.

Wrong working: for $p \\to q$ and $q \\to p$, take $p = q = T$: both are T. Take $p = q = F$: both are T. The two formulas agree, so $p \\to q \\equiv q \\to p$.

Right working: two variables give four rows. For $(p, q)$ equal to $(T, T)$, $(T, F)$, $(F, T)$, $(F, F)$, the formula $p \\to q$ takes the values T, F, T, T and $q \\to p$ takes T, T, F, T. The columns differ in the rows $(T, F)$ and $(F, T)$, so the formulas are not equivalent: $q \\to p$ is the converse of $p \\to q$.

Why it happens: the rows where both variables have the same value are the easiest to evaluate, and agreement there feels like evidence. A truth table settles equivalence only when it is complete.

How to check: count the rows first, $2^n$ for $n$ variables, and fill in every one. To refute an equivalence, one row with different values is enough; to confirm it, all $2^n$ rows must match.

**Keeping the connective in De Morgan's law**

The negation in front of a bracket is passed to each part inside, but the connective between the parts is left as it was. The result is not equivalent to the original formula.

Wrong working: to simplify $\\neg (P \\land Q)$, apply the negation to each part, giving $\\neg P$ and $\\neg Q$, and keep the $\\land$ between them: $\\neg (P \\land Q) \\equiv \\neg P \\land \\neg Q$.

Right working: at $P = T$, $Q = F$, the conjunction $P \\land Q$ is F, so $\\neg (P \\land Q)$ is T, while $\\neg P \\land \\neg Q$ is $F \\land T$, which is F. De Morgan's law changes the connective: $\\neg (P \\land Q) \\equiv \\neg P \\lor \\neg Q$, and $\\neg P \\lor \\neg Q$ is $F \\lor T$, which is T in that row. In the same way, $\\neg (P \\lor Q) \\equiv \\neg P \\land \\neg Q$.

Why it happens: the negation is treated like a minus sign multiplied into a bracket, as in $-(a + b) = -a + (-b)$, where the operation between the terms keeps its form. In words, "not both" gets heard as "neither".

How to check: test the row $P = T$, $Q = F$. "Not both $P$ and $Q$" is true there, because $Q$ is false, so the rewritten form must be T in that row too.

**Negating an implication into an implication**

Asked to negate "if $p$, then $q$", the learner moves the negation onto the consequent and keeps the arrow, writing $p \\to \\neg q$. That formula is a different implication, not the negation.

Wrong working: $\\neg (p \\to q) \\equiv p \\to \\neg q$, so the negation of "if it rains, the ground is wet" would be "if it rains, the ground is not wet".

Right working: rewrite with material implication and De Morgan's law: $\\neg (p \\to q) \\equiv \\neg (\\neg p \\lor q) \\equiv \\neg \\neg p \\land \\neg q \\equiv p \\land \\neg q$. The wrong form fails at $p = F$, $q = T$: there $p \\to q$ is T, so $\\neg (p \\to q)$ is F, but $p \\to \\neg q$ is $F \\to F$, which is T. The negation is "it rains and the ground is not wet".

Why it happens: in everyday speech, "it is not true that if it rains the ground is wet" sounds like a claim about what happens when it rains, so the "if" is kept. The negation of a conditional states a single case: the one row where $p \\to q$ is F.

How to check: the negation of a formula must be T exactly where the formula is F. $p \\to q$ is F only at $p = T$, $q = F$, so its negation must be T in that row and F in the other three. $p \\land \\neg q$ passes this test; $p \\to \\neg q$ fails it, being T in both rows with $p = F$.

**Joining the antecedents with AND**

Two implications with the same consequent, $(p \\to r) \\land (q \\to r)$, are merged by joining their antecedents with $\\land$, the connective that stands between the two implications. With a shared consequent the connective changes.

Wrong working: by analogy with $(p \\to q) \\land (p \\to r) \\equiv p \\to (q \\land r)$, write $(p \\to r) \\land (q \\to r) \\equiv (p \\land q) \\to r$.

Right working: at $p = T$, $q = F$, $r = F$, the implication $p \\to r$ is F, so the left side is F, while $(p \\land q) \\to r$ is $F \\to F$, which is T. With material implication and the distributive law: $(\\neg p \\lor r) \\land (\\neg q \\lor r) \\equiv (\\neg p \\land \\neg q) \\lor r \\equiv \\neg (p \\lor q) \\lor r \\equiv (p \\lor q) \\to r$.

Why it happens: the equivalences for a shared antecedent keep the connective, and the same is expected of a shared consequent. But once the arrow is rewritten, $p \\to r \\equiv \\neg p \\lor r$, the antecedent stands under a negation, and De Morgan's law turns the connective over.

How to check: read it in words. "If it rains, the ground is wet, and if the sprinkler runs, the ground is wet" means the ground is wet when either one happens, which is $(p \\lor q) \\to r$. Or test the row $p = T$, $q = F$, $r = F$.

**Negating both sides of a biconditional**

To negate $p \\leftrightarrow q$, the negation is put on both sides, giving $\\neg p \\leftrightarrow \\neg q$. That formula is equivalent to $p \\leftrightarrow q$ itself, so it has the opposite value of the negation in every row.

Wrong working: $\\neg (p \\leftrightarrow q) \\equiv \\neg p \\leftrightarrow \\neg q$.

Right working: at $p = q = T$, $p \\leftrightarrow q$ is T, so $\\neg (p \\leftrightarrow q)$ is F, but $\\neg p \\leftrightarrow \\neg q$ is $F \\leftrightarrow F$, which is T. The negation goes on one side only: $\\neg (p \\leftrightarrow q) \\equiv p \\leftrightarrow \\neg q \\equiv \\neg p \\leftrightarrow q$, true exactly when $p$ and $q$ differ.

Why it happens: the negation is distributed over the biconditional as if it were multiplied into a bracket. The row Negation Preservation in Biconditional in the table shows that negating both sides changes nothing, which is exactly why it cannot produce the negation.

How to check: count the negations. A negation on one side flips the value of the biconditional, so two of them cancel and one negates. Test $p = q = T$: the negation must be F there.`,
  },

  faq:{
    title:`Logical Equivalence FAQ`,
  }

}

// Four questions written from scratch — this page had no faqQuestions object.
// Section headings already own "what is logical equivalence" and "how to verify",
// so these target the buried content: the ≡ vs ↔ notation trap and the three
// most-searched table-row equivalences.
const faqQuestions = {
  obj1: {
    question: "What is the difference between ≡ and ↔ in logic?",
    answer: "The triple bar ≡ makes a claim about two formulas: P ≡ Q says they agree in every possible case, so it is itself always simply true or false. The single arrow ↔ is a connective inside the language, and the truth of P ↔ Q varies with its components. The bridge between them: P ≡ Q holds exactly when P ↔ Q is a tautology.",
    sectionId: "notation"
  },
  obj2: {
    question: "What is material implication?",
    answer: "Material implication is the equivalence p → q ≡ ¬p ∨ q: the statement \"if p then q\" says exactly that either p is false or q is true. Both sides are false in only one case — p true and q false — so their truth values always match. The rewrite removes the arrow, so implications can be simplified using the [laws of logic](!/logic/propositional-logic/laws) for AND, OR, and NOT.",
    sectionId: "conditional"
  },
  obj3: {
    question: "What is the negation of an implication?",
    answer: "The negation of p → q is p ∧ ¬q: the antecedent true and the consequent false. That is the single row of the truth table where an [implication](!/logic/propositional-logic/semantics/implication) fails, so denying \"if p then q\" asserts exactly that case. The negation of an implication is a conjunction — not another implication, and not p → ¬q, a frequent mistake.",
    sectionId: "conditional"
  },
  obj4: {
    question: "What is the negation of a biconditional?",
    answer: "Negating a biconditional produces an exclusive or: ¬(p ↔ q) ≡ p ↔ ¬q, true exactly when p and q have different truth values. A biconditional asserts that both statements match — both true or both false — so its denial asserts a mismatch: one true and the other false. Attaching the negation to either side gives the same equivalent result.",
    sectionId: "biconditional"
  }
}

  const conceptIntroFigures = {
    named: vennTruthTableDiagrams['named'],
    sameTable: ciSameTable,
    missTable: ciMissTable,
  };

  const demoUnits = {
    absorption: demoUnitFrame({
      svg: vennTruthTableDiagrams['independent'],
      caption: 'Absorption: P &#8743; (P &#8744; Q) &#8801; P',
      text: 'Read circle A as the cases where P is true and B as the cases where Q is true. P &#8744; Q covers both circles; intersecting that with A leaves exactly A. The shaded region is the same as P alone, so the two formulas agree in every case and are logically equivalent. The part of B outside A is absorbed. Try the other absorption law on the',
      href: '/set-theory/visual-tools/venn-truth-table',
      linkText: 'Venn truth-table explorer',
    }),
  };

  return {
    props:{
      demoUnits,
      conceptIntroFigures,
       verify,
       biconditionalEquivalences,
       logicalLaws,
       logicalEquivalences,
       sectionsContent,
       keyWords,
       introContent,
       faqQuestions
    }
  }
}

export default function EquivalencesPage({demoUnits, conceptIntroFigures, verify ,biconditionalEquivalences ,logicalLaws ,logicalEquivalences,
  sectionsContent,keyWords ,introContent ,faqQuestions}) {


    const ciSvg = (key) => <div dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />
    const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

    // "Definition" section concept introduction — template A (definition last).
    const conceptIntro = {
      beats: [
        {
          id: 'intuition',
          lead: `Two formulas can look different and still say the same thing.`,
          content: [
            `"If it rains, the ground is wet" and "it does not rain, or the ground is wet" are worded differently, yet it is hard to imagine a situation where one is true and the other false. Logic can check that suspicion exactly.`,
          ],
        },
        {
          id: 'example',
          kind: 'instance',
          lead: `P → Q and ¬P ∨ Q have the same column in every row of their truth table.`,
          content: [
            `List all four assignments of $P$ and $Q$ and evaluate both formulas. The two highlighted columns match row for row.`,
            ciTable('sameTable'),
          ],
          visual: ciSvg('named'),
          caption: `With circle A for the cases where $P$ is true and B for $Q$, the shaded region is $A^c \\cup B$ — the cases where $\\neg P \\lor Q$ holds, which are exactly the cases where $P \\to Q$ holds. The same state is on the [Venn truth-table explorer](!/set-theory/visual-tools/venn-truth-table).`,
        },
        {
          id: 'forcing',
          lead: `Matching in every row means no situation can tell them apart — and a single mismatch would.`,
          content: [
            `Because the rows cover every possible case, two formulas with identical columns can replace each other anywhere without changing any truth value. Like two routes to the same address, it does not matter which one is taken. Compare $P \\to Q$ with its converse $Q \\to P$: they agree in two rows and disagree in two, so they are not interchangeable.`,
            ciTable('missTable'),
          ],
        },
        {
          id: 'definition',
          kind: 'definition',
          statement: `Two formulas are [logically equivalent](!/logic/definitions#equivalence), written $P \\equiv Q$, when they have the same truth value under every assignment of truth values to their variables.`,
          formula: [
            `Two logical statements (or propositions) are logically equivalent if they **always** have the same truth value, regardless of the truth values of their individual components. This means that no matter what, both expressions will evaluate to either true or false together in every possible case.`,
          ],
          footer: `So $P \\to Q \\equiv \\neg P \\lor Q$, while $P \\to Q$ and $Q \\to P$ are not equivalent.`,
        },
        {
          id: 'kind',
          lead: `Equivalence is a relation between two formulas — a claim about them, not a formula itself.`,
          content: `$P \\equiv Q$ says something about $P$ and $Q$ across all cases at once; it is simply true or false. The biconditional $P \\leftrightarrow Q$ is different: it is a formula whose truth changes from row to row. The two are linked — $P \\equiv Q$ holds exactly when $P \\leftrightarrow Q$ is a tautology — and the [notation](!/logic/propositional-logic/semantics/equivalences#notation) section keeps them apart.`,
        },
        {
          id: 'caveat',
          lead: `It takes every row: agreement in most rows is not enough.`,
          content: `$P \\to Q$ and $Q \\to P$ agree half the time, and that is exactly why they are easy to confuse. To claim an equivalence, all $2^n$ rows must match; to refute one, a single row is enough. The section on [how to verify logical equivalence](!/logic/propositional-logic/semantics/equivalences#verify) gives the methods.`,
        },
        {
          id: 'exit',
          content: `The rest of the page covers the notation, ways to verify an equivalence, the laws of logic, and equivalences involving the conditional and the biconditional.`,
        },
      ],
    }

    const equivalencesSections=[
        {
          id:'definition',
          title:sectionsContent.definition.title,

          content:[
            <ConceptIntro key={'definition-intro'} data={conceptIntro} />,
          ],
        },
        {
          id:'notation',
          title:sectionsContent.notation.title,
          content:[
            <NotationSection
              key={'notation'}
              title={sectionsContent.notation.title}
              lead={sectionsContent.notation.lead}
              inherited={sectionsContent.notation.inherited}
              entries={sectionsContent.notation.entries}
              symbolsHref={sectionsContent.notation.symbolsHref}
              symbolsLabel={sectionsContent.notation.symbolsLabel}
              parentHref={sectionsContent.notation.parentHref}
              parentLabel={sectionsContent.notation.parentLabel}
              theme={'navy'}
            />,
          ]
        },
        {
            id:'verify',
            title:sectionsContent.verify.title,
            content:[
              sectionsContent.verify.before,
            <MyList data={verify}
            key={4}
            boxed={true} color={'blue'} compact={true} type={'number'} />,
            sectionsContent.pitfallBoxes.verify,
            `@academic[punchline:Every method tests the same claim, agreement in all $2^n$ rows, and one mismatched row is enough to refute it.]@`,
        ]
          },
         
        {
            id:'laws',
            title:sectionsContent.laws.title,
            link:'/logic/propositional-logic/laws',
            content:[
             sectionsContent.laws.before,
<MyList data={logicalLaws}
key={1}
 boxed={true} color={'blue'} compact={true} type={'dot'} width={'300px'}/>,
 sectionsContent.pitfallBoxes.laws,

 sectionsContent.laws.after,
 <div key={'unit-absorption'} dangerouslySetInnerHTML={{ __html: demoUnits.absorption }} />,
 `Equivalent formulas always shade the same region: that is equivalence seen as a picture.`,
 `@academic[fact,aside:true,width:35%:Every law has a mirror image
In any valid equivalence built from $\\neg$, $\\land$ and $\\lor$, swapping $\\land$ with $\\lor$ and $\\text{true}$ with $\\text{false}$ gives another valid equivalence. Negating both sides and pushing the negations inward with De Morgan's laws turns a law into its mirror, so every law proved gives a second one free.]@
Most of the laws in the list come in pairs. The identity, domination, idempotent, commutative, associative, distributive and absorption laws, and De Morgan's laws, each have one version with $\\lor$ and one with $\\land$, and inside each pair the constants $\\text{true}$ and $\\text{false}$ trade places as well. The law of excluded middle and the law of non-contradiction form such a pair too, even though they carry different names. Only the double negation law, which contains neither connective, stands alone.`,

]
          },
          {
            id:'conditional',
            title:sectionsContent.conditional.title,
            content:[
            sectionsContent.conditional.before,
<ExpandableTable data={logicalEquivalences}
key={2}
copyableFields={'equivalence'}
includedFields={['name','equivalence','explanation']}/>,
sectionsContent.pitfallBoxes.conditional,
sectionsContent.conditional.after,
`@academic[fact,aside:true,width:35%:One connective is enough
NAND, $p \\uparrow q \\equiv \\neg (p \\land q)$, can express every other connective: $\\neg p \\equiv p \\uparrow p$ and $p \\land q \\equiv (p \\uparrow q) \\uparrow (p \\uparrow q)$, and $\\neg$ with $\\land$ already give the rest. Peirce found this around 1880 but never published it; today it lets whole chips be built from NAND gates alone.]@
Rows 1, 3 and 4 of the table translate between the arrow and the other connectives: $p \\to q$ becomes $\\neg p \\lor q$, $p \\lor q$ becomes $\\neg p \\to q$, and $p \\land q$ becomes $\\neg (p \\to \\neg q)$. With these rewrites, any formula can be expressed using only $\\neg$ and $\\to$, and the remaining connectives become shorthand for longer formulas. Many logic textbooks start from such a small set of connectives and define all the others through equivalences like these. The fewer connectives a system starts from, the fewer cases its proofs about formulas have to cover.`,
]
          },
          {
            id:'biconditional',
            title:sectionsContent.biconditional.title,
            content:[
                sectionsContent.biconditional.before,
                <ExpandableTable data={biconditionalEquivalences}
                key={3}
                copyableFields={'equivalence'}
                includedFields={['name','equivalence','explanation']}/>,
                sectionsContent.pitfallBoxes.biconditional,
             sectionsContent.biconditional.after,
            ]
          },
          {
            id:'pitfalls',
            title:sectionsContent.pitfalls.title,
            content:[
              sectionsContent.pitfalls.content,
            ]
          },
          // faq: rendered component — must be built here, not in getStaticProps
          {
            id:'faq',
            title:sectionsContent.faq.title,
            link:``,
            content:[
              <div key={'faq-wrap'} style={{width:'80%',margin:'auto'}}>
                <FAQSection
                  faqQuestions={faqQuestions}
                  theme={'leftBorder'}
                  width={'100%'}
                  openFirst={false}
                />
              </div>,
            ]
          },
        //   {
        //     id:'',
        //     title:'',
        //     content:``
        //   },
         


    ]


    const pageUrl = 'https://www.learnmathclass.com/logic/propositional-logic/semantics/equivalences'
    const pageDescription = 'Master logical equivalences in propositional logic. Learn verification methods, fundamental laws, implications, biconditionals, and truth tables.'

    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Logical Equivalences in Propositional Logic',
      description: pageDescription,
      url: pageUrl,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': pageUrl
      },
      author: {
        '@type': 'Organization',
        name: 'Learn Math Class',
        url: 'https://www.learnmathclass.com'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Learn Math Class',
        url: 'https://www.learnmathclass.com'
      },
      about: keyWords
    }

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Logic',
          item: 'https://www.learnmathclass.com/logic'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Propositional Logic',
          item: 'https://www.learnmathclass.com/logic/propositional-logic'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Semantics',
          item: 'https://www.learnmathclass.com/logic/propositional-logic/semantics'
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Logical Equivalences',
          item: pageUrl
        }
      ]
    }

    const serializeJsonLd = (schema) => {
      return JSON.stringify(schema)
        .replace(/</g, '\\u003c')
        .replace(/>/g, '\\u003e')
        .replace(/&/g, '\\u0026')
        .replace(/\u2028/g, '\\u2028')
        .replace(/\u2029/g, '\\u2029')
    }


  return (
    <>
    <Head>
  <title>Logical Equivalences in Propositional Logic | Learn Math Class</title>
  <meta name="description" content={pageDescription} />
  <link rel="canonical" href={pageUrl} />
  <meta name="keywords" content="logic, propositional logic, logical equivalence, laws of logical equivalence, biconditional, biconditional statement" />
  <meta property="og:title" content="Logical Equivalences in Propositional Logic | Learn Math Class" />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:url" content={pageUrl} />

  <script
    type="application/ld+json"
    key="jsonld-article"
    dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleSchema) }}
  />
  <script
    type="application/ld+json"
    key="jsonld-breadcrumb"
    dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbSchema) }}
  />
</Head>
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
    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Logical Equivalences</h1>
    <br/>
    <br/>
    <br/>
    {/* <div style={{display:'flex',flexDirection:'row',maxWidth:'1300px'}}> */}
    <SectionTableOfContents sections={equivalencesSections}
     showSecondaryNav={true}
     secondaryNavMode="siblings"
     secondaryNavTitle="Similar Pages"/>

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

    {/* </div> */}
   
    <br/>
    <Sections sections={equivalencesSections}/>
    <br/>
    <br/>
    <br/>
    {/* <ScrollUpButton/> */}
    
    </>
  )
}