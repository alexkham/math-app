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
If you can rewrite $𝑃$ into $𝑄$ (or vice versa), they are equivalent.
✅ Best for: Proofs and simplifying expressions without constructing tables.
❌ Requires familiarity with logical laws.`,
`**Using Logical Implications**:
Show that $𝑃→𝑄$ and $𝑄→𝑃$ are both true.
If both implications hold, then $𝑃≡𝑄$.
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
    explanation: `"if $𝑝$ then $𝑞$" is the same as saying "either $𝑝$ is false or $𝑞$ is true."`
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
    name: "Nested Implications in a Disjunction",
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
    before:`To verify that two logical statements $𝑃$ and $𝑄$ are logically equivalent ($𝑃≡𝑄$), we need to show that they always have the same truth value in all cases. 
            There are several methods to do this:
            
            `,
    after:``,

  },

  laws:{

    title:'Fundamental Equivalences (Laws)',
    content:``,
    before: `Some logical equivalences are considered [laws of logic](!/logic/propositional-logic/laws).A law is a fundamental equivalence—one that is taken as a basic principle, rather than something that needs to be proven from other rules. 
    On the other hand, many of logical equivalences, while being valid transformations, are not considered fundamental laws because they depend on definitions, are derived from the laws, or are specific to certain logical systems.
    
    `,
    after: `For more information about [laws of propositional logic](!/logic/propositional-logic/laws), you can visit this page.`,

  },
  conditional:{
    title:'Equivalences with Implications',
    content:``,
    before:  
    `In propositional logic, a conditional statement (**implication**) is written as:
\t\t\t\t\t\t\t            $𝑃→𝑄$ 
  which means "if $𝑃$, then $𝑄$".
However, **implications** can be rewritten using logical equivalences. 
Here are the key ones:

`,
    after:`
All logical equivalences involving **implications** provide ways to rewrite conditional statements in different but logically identical forms. A common theme among them is restructuring the relationship between the antecedent ($𝑝$) and the consequent ($𝑞$) using negation, disjunction, or conjunction while preserving truth values. These transformations help simplify logical expressions and proofs.
`,

  },
  biconditional:{

    title:'Equivalences with Biconditionals',
    content:``,
    before:`Logical equivalences involving **biconditional statements** ($𝑝↔𝑞$) focus on expressing the mutual dependence of two propositions in different but logically equivalent ways. The biconditional means "p if and only if q," meaning both must have the same truth value (either both true or both false).
                Here are some equivalences involving **biconditional statements**:
                
                `,
    after:   `
     **Conclusion on Biconditional Equivalences**  
    Biconditional equivalences highlight the **fundamental symmetry** in logic: two statements are **logically interchangeable** if and only if they always have the same truth value. These equivalences allow us to express $p \\leftrightarrow q$ in different but logically equivalent ways, making it easier to manipulate and analyze logical statements.  
        - **They break down into implications**, showing that mutual implication defines equivalence.  
        - **They connect to conjunction and disjunction**, emphasizing that two statements are equivalent when they share truth values.  
        - **Negating a biconditional results in an XOR**, reinforcing that logical opposition emerges when one statement is true and the other is false.  
    
    In formal logic, these properties make biconditionals a powerful tool for **proofs, simplifications, and logical reasoning** across mathematics, philosophy, and computing.`,

  }

}

  return {
    props:{
       verify,
       biconditionalEquivalences,
       logicalLaws,
       logicalEquivalences,
       sectionsContent,
       keyWords,
       introContent
    }
  }
}

export default function EquivalencesPage({verify ,biconditionalEquivalences ,logicalLaws ,logicalEquivalences,
  sectionsContent,keyWords ,introContent}) {


    const equivalencesSections=[
        {
          id:'definition',
          title:sectionsContent.definition.title,

          content:sectionsContent.definition.content,
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
            boxed={true} color={'blue'} compact={true} type={'number'} />
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

 sectionsContent.laws.after,

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
sectionsContent.conditional.after,
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
             sectionsContent.biconditional.after,
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