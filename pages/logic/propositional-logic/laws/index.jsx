// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import '../../../pages.css'
// import DataWrapper2 from '@/app/components/data-wrapper/generic-table/DataWrapper'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// export async function getStaticProps(){


//   const keyWords=['logic laws','mathematical logic','propositional logic',
//     'propositional logic laws','propositional logic rules','laws of logic',
//     'rules of logic','propositional calculus','discrete math propositional logic']


//    const logicLawsData = {
//         "Identity Laws": [
//           { id: 1, law: "Identity Law (AND)", formula: "p ∧ T ≡ p", explanation: "AND with True does not change p", topic: "Equivalences" },
//           { id: 2, law: "Identity Law (OR)", formula: "p ∨ F ≡ p", explanation: "OR with False does not change p", topic: "Equivalences" }
//         ],
        
//         "Domination Laws (Universal Bound Laws)": [
//           { id: 3, law: "Domination Law (OR)", formula: "p ∨ T ≡ T", explanation: "Anything OR True is always True", topic: "Semantics" },
//           { id: 4, law: "Domination Law (AND)", formula: "p ∧ F ≡ F", explanation: "Anything AND False is always False", topic: "Semantics" }
//         ],
        
//         "Idempotent Laws": [
//           { id: 5, law: "Idempotent Law (OR)", formula: "p ∨ p ≡ p", explanation: "OR-ing a value with itself does nothing", topic: "Equivalences" },
//           { id: 6, law: "Idempotent Law (AND)", formula: "p ∧ p ≡ p", explanation: "AND-ing a value with itself does nothing", topic: "Equivalences" }
//         ],
        
//         "Double Negation Law": [
//           { id: 7, law: "Double Negation", formula: "¬(¬p) ≡ p", explanation: "Negating twice returns the original value", topic: "Equivalences" }
//         ],
        
//         "Commutative Laws": [
//           { id: 8, law: "Commutative Law (OR)", formula: "p ∨ q ≡ q ∨ p", explanation: "Order does not matter for OR", topic: "Equivalences" },
//           { id: 9, law: "Commutative Law (AND)", formula: "p ∧ q ≡ q ∧ p", explanation: "Order does not matter for AND", topic: "Equivalences" }
//         ],
        
//         "Associative Laws": [
//           { id: 10, law: "Associative Law (OR)", formula: "(p ∨ q) ∨ r ≡ p ∨ (q ∨ r)", explanation: "Grouping does not matter for OR", topic: "Equivalences" },
//           { id: 11, law: "Associative Law (AND)", formula: "(p ∧ q) ∧ r ≡ p ∧ (q ∧ r)", explanation: "Grouping does not matter for AND", topic: "Equivalences" }
//         ],
        
//         "Distributive Laws": [
//           { id: 12, law: "Distributive Law (OR over AND)", formula: "p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)", explanation: "OR distributes over AND", topic: "Normal Forms" },
//           { id: 13, law: "Distributive Law (AND over OR)", formula: "p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)", explanation: "AND distributes over OR", topic: "Normal Forms" }
//         ],
        
//         "De Morgan's Laws": [
//           { id: 14, law: "De Morgan's Law (OR)", formula: "¬(p ∨ q) ≡ ¬p ∧ ¬q", explanation: "Negating OR flips it to AND with negated terms", topic: "Normal Forms" },
//           { id: 15, law: "De Morgan's Law (AND)", formula: "¬(p ∧ q) ≡ ¬p ∨ ¬q", explanation: "Negating AND flips it to OR with negated terms", topic: "Normal Forms" }
//         ],
        
//         "Absorption Laws": [
//           { id: 16, law: "Absorption Law (OR)", formula: "p ∨ (p ∧ q) ≡ p", explanation: "Redundant term in OR can be removed", topic: "Equivalences" },
//           { id: 17, law: "Absorption Law (AND)", formula: "p ∧ (p ∨ q) ≡ p", explanation: "Redundant term in AND can be removed", topic: "Equivalences" }
//         ],
        
//         "Negation Laws": [
//           { id: 18, law: "Negation Law (OR)", formula: "p ∨ ¬p ≡ T", explanation: "A statement is always True or False (Law of Excluded Middle)", topic: "Semantics" },
//           { id: 19, law: "Negation Law (AND)", formula: "p ∧ ¬p ≡ F", explanation: "A statement cannot be both True and False (Contradiction Law)", topic: "Semantics" }
//         ],
        
//         "Contrapositive Law": [
//           { id: 20, law: "Contrapositive Law", formula: "(p → q) ≡ (¬q → ¬p)", explanation: "If p implies q, then not q implies not p", topic: "Proof Techniques" }
//         ],
//         "Redundancy Laws": [
//           { id: 21, law: "Redundancy Law (OR over OR)", formula: "p ∨ (q ∨ p) ≡ p ∨ q", explanation: "If p is already part of the OR, repeating it is unnecessary", topic: "Equivalences" },
//           { id: 22, law: "Redundancy Law (AND over AND)", formula: "p ∧ (q ∧ p) ≡ p ∧ q", explanation: "If p is already in the AND, no need to repeat", topic: "Equivalences" }
//         ],
        
//         "Conditional & Biconditional Laws": [
//           { id: 23, law: "Implication as OR", formula: "p → q ≡ ¬p ∨ q", explanation: "A conditional statement can be rewritten as OR", topic: "Equivalences" },
//           { id: 24, law: "Inverse Law for Implication", formula: "(p → q) ≢ (¬p → ¬q)", explanation: "Just because p→q is true, it doesn't mean ¬p→¬q is true", topic: "Proof Techniques" },
//           { id: 25, law: "Equivalence Breakdown", formula: "p ↔ q ≡ (p → q) ∧ (q → p)", explanation: "A biconditional means both directions must be true", topic: "Equivalences" }
//         ],
        
//         "Exclusive OR Laws": [
//           { id: 26, law: "Definition of XOR", formula: "p ⊕ q ≡ (p ∨ q) ∧ ¬(p ∧ q)", explanation: "XOR is true when exactly one of p or q is true", topic: "Equivalences" },
//           { id: 27, law: "Involution of XOR", formula: "p ⊕ p ≡ F", explanation: "A value XOR itself is always false", topic: "Semantics" },
//           { id: 28, law: "Commutative Law of XOR", formula: "p ⊕ q ≡ q ⊕ p", explanation: "Order does not matter for XOR", topic: "Equivalences" },
//           { id: 29, law: "Associative Law of XOR", formula: "(p ⊕ q) ⊕ r ≡ p ⊕ (q ⊕ r)", explanation: "Grouping does not matter for XOR", topic: "Equivalences" }
//         ],
        
//         "Monotonicity Laws": [
//           { id: 30, law: "Monotonicity of OR", formula: "p → (p ∨ q)", explanation: "Adding a term to an OR does not make it false", topic: "Proof Techniques" },
//           { id: 31, law: "Monotonicity of AND", formula: "(p ∧ q) → p", explanation: "Removing a term from an AND does not make it true", topic: "Proof Techniques" }
//         ],
        
//         "Expansion Laws": [
//           { id: 32, law: "Ternary Absorption", formula: "(p ∧ q) ∨ (p ∧ r) ≡ p ∧ (q ∨ r)", explanation: "Factoring out common terms", topic: "Normal Forms" }
//         ],
        
//         "Resolution Laws": [
//           { id: 33, law: "Resolution", formula: "(p ∨ q), (¬p ∨ r) ⊢ (q ∨ r)", explanation: "If we have p∨q and ¬p∨r, we can conclude q∨r", topic: "Inference Rules" }
//         ],
        
//         "Peirce's Law": [
//           { id: 34, law: "Peirce's Law", formula: "((p → q) → p) → p", explanation: "Valid in classical logic but not in intuitionistic logic", topic: "Proof Techniques" }
//         ]
//       };
    
//       const config = {
//         displayColumns: ["law", "topic","formula", "explanation"],  // Show name, formula, and explanation
//         copyableFields: ["formula"],  // Allow copying just the formula
//         searchableFields: ["law","topic", "formula", "explanation"]  // Allow searching by name, formula, or explanation
//       };
      


//    return {
//       props:{
//         //  sectionsContent,
//         config,
//         logicLawsData,
//         seoData: {
//       title: "Propositional Logic Laws - Complete Reference Guide | Learn Math Class",
//       description: "Comprehensive collection of propositional logic laws including De Morgan's, distributive, absorption, and identity laws. Essential discrete mathematics reference.",
//       keywords: keyWords.join(", "),
//       url: "/logic/propositional-logic/laws",
//       name: "Propositional Logic Laws"
//     },
//     keyWords,
//        }
//     }
//    }
  

// export default function PropositionalLogicLawsPage({ seoData, config, logicLawsData, keyWords }) {

//     // const logicLawsData = {
//     //     "Identity Laws": [
//     //       { id: 1, law: "Identity Law (AND)", formula: "p ∧ T ≡ p", explanation: "AND with True does not change p", topic: "Equivalences" },
//     //       { id: 2, law: "Identity Law (OR)", formula: "p ∨ F ≡ p", explanation: "OR with False does not change p", topic: "Equivalences" }
//     //     ],
        
//     //     "Domination Laws (Universal Bound Laws)": [
//     //       { id: 3, law: "Domination Law (OR)", formula: "p ∨ T ≡ T", explanation: "Anything OR True is always True", topic: "Semantics" },
//     //       { id: 4, law: "Domination Law (AND)", formula: "p ∧ F ≡ F", explanation: "Anything AND False is always False", topic: "Semantics" }
//     //     ],
        
//     //     "Idempotent Laws": [
//     //       { id: 5, law: "Idempotent Law (OR)", formula: "p ∨ p ≡ p", explanation: "OR-ing a value with itself does nothing", topic: "Equivalences" },
//     //       { id: 6, law: "Idempotent Law (AND)", formula: "p ∧ p ≡ p", explanation: "AND-ing a value with itself does nothing", topic: "Equivalences" }
//     //     ],
        
//     //     "Double Negation Law": [
//     //       { id: 7, law: "Double Negation", formula: "¬(¬p) ≡ p", explanation: "Negating twice returns the original value", topic: "Equivalences" }
//     //     ],
        
//     //     "Commutative Laws": [
//     //       { id: 8, law: "Commutative Law (OR)", formula: "p ∨ q ≡ q ∨ p", explanation: "Order does not matter for OR", topic: "Equivalences" },
//     //       { id: 9, law: "Commutative Law (AND)", formula: "p ∧ q ≡ q ∧ p", explanation: "Order does not matter for AND", topic: "Equivalences" }
//     //     ],
        
//     //     "Associative Laws": [
//     //       { id: 10, law: "Associative Law (OR)", formula: "(p ∨ q) ∨ r ≡ p ∨ (q ∨ r)", explanation: "Grouping does not matter for OR", topic: "Equivalences" },
//     //       { id: 11, law: "Associative Law (AND)", formula: "(p ∧ q) ∧ r ≡ p ∧ (q ∧ r)", explanation: "Grouping does not matter for AND", topic: "Equivalences" }
//     //     ],
        
//     //     "Distributive Laws": [
//     //       { id: 12, law: "Distributive Law (OR over AND)", formula: "p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)", explanation: "OR distributes over AND", topic: "Normal Forms" },
//     //       { id: 13, law: "Distributive Law (AND over OR)", formula: "p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)", explanation: "AND distributes over OR", topic: "Normal Forms" }
//     //     ],
        
//     //     "De Morgan's Laws": [
//     //       { id: 14, law: "De Morgan's Law (OR)", formula: "¬(p ∨ q) ≡ ¬p ∧ ¬q", explanation: "Negating OR flips it to AND with negated terms", topic: "Normal Forms" },
//     //       { id: 15, law: "De Morgan's Law (AND)", formula: "¬(p ∧ q) ≡ ¬p ∨ ¬q", explanation: "Negating AND flips it to OR with negated terms", topic: "Normal Forms" }
//     //     ],
        
//     //     "Absorption Laws": [
//     //       { id: 16, law: "Absorption Law (OR)", formula: "p ∨ (p ∧ q) ≡ p", explanation: "Redundant term in OR can be removed", topic: "Equivalences" },
//     //       { id: 17, law: "Absorption Law (AND)", formula: "p ∧ (p ∨ q) ≡ p", explanation: "Redundant term in AND can be removed", topic: "Equivalences" }
//     //     ],
        
//     //     "Negation Laws": [
//     //       { id: 18, law: "Negation Law (OR)", formula: "p ∨ ¬p ≡ T", explanation: "A statement is always True or False (Law of Excluded Middle)", topic: "Semantics" },
//     //       { id: 19, law: "Negation Law (AND)", formula: "p ∧ ¬p ≡ F", explanation: "A statement cannot be both True and False (Contradiction Law)", topic: "Semantics" }
//     //     ],
        
//     //     "Contrapositive Law": [
//     //       { id: 20, law: "Contrapositive Law", formula: "(p → q) ≡ (¬q → ¬p)", explanation: "If p implies q, then not q implies not p", topic: "Proof Techniques" }
//     //     ],
//     //     "Redundancy Laws": [
//     //       { id: 21, law: "Redundancy Law (OR over OR)", formula: "p ∨ (q ∨ p) ≡ p ∨ q", explanation: "If p is already part of the OR, repeating it is unnecessary", topic: "Equivalences" },
//     //       { id: 22, law: "Redundancy Law (AND over AND)", formula: "p ∧ (q ∧ p) ≡ p ∧ q", explanation: "If p is already in the AND, no need to repeat", topic: "Equivalences" }
//     //     ],
        
//     //     "Conditional & Biconditional Laws": [
//     //       { id: 23, law: "Implication as OR", formula: "p → q ≡ ¬p ∨ q", explanation: "A conditional statement can be rewritten as OR", topic: "Equivalences" },
//     //       { id: 24, law: "Inverse Law for Implication", formula: "(p → q) ≢ (¬p → ¬q)", explanation: "Just because p→q is true, it doesn't mean ¬p→¬q is true", topic: "Proof Techniques" },
//     //       { id: 25, law: "Equivalence Breakdown", formula: "p ↔ q ≡ (p → q) ∧ (q → p)", explanation: "A biconditional means both directions must be true", topic: "Equivalences" }
//     //     ],
        
//     //     "Exclusive OR Laws": [
//     //       { id: 26, law: "Definition of XOR", formula: "p ⊕ q ≡ (p ∨ q) ∧ ¬(p ∧ q)", explanation: "XOR is true when exactly one of p or q is true", topic: "Equivalences" },
//     //       { id: 27, law: "Involution of XOR", formula: "p ⊕ p ≡ F", explanation: "A value XOR itself is always false", topic: "Semantics" },
//     //       { id: 28, law: "Commutative Law of XOR", formula: "p ⊕ q ≡ q ⊕ p", explanation: "Order does not matter for XOR", topic: "Equivalences" },
//     //       { id: 29, law: "Associative Law of XOR", formula: "(p ⊕ q) ⊕ r ≡ p ⊕ (q ⊕ r)", explanation: "Grouping does not matter for XOR", topic: "Equivalences" }
//     //     ],
        
//     //     "Monotonicity Laws": [
//     //       { id: 30, law: "Monotonicity of OR", formula: "p → (p ∨ q)", explanation: "Adding a term to an OR does not make it false", topic: "Proof Techniques" },
//     //       { id: 31, law: "Monotonicity of AND", formula: "(p ∧ q) → p", explanation: "Removing a term from an AND does not make it true", topic: "Proof Techniques" }
//     //     ],
        
//     //     "Expansion Laws": [
//     //       { id: 32, law: "Ternary Absorption", formula: "(p ∧ q) ∨ (p ∧ r) ≡ p ∧ (q ∨ r)", explanation: "Factoring out common terms", topic: "Normal Forms" }
//     //     ],
        
//     //     "Resolution Laws": [
//     //       { id: 33, law: "Resolution", formula: "(p ∨ q), (¬p ∨ r) ⊢ (q ∨ r)", explanation: "If we have p∨q and ¬p∨r, we can conclude q∨r", topic: "Inference Rules" }
//     //     ],
        
//     //     "Peirce's Law": [
//     //       { id: 34, law: "Peirce's Law", formula: "((p → q) → p) → p", explanation: "Valid in classical logic but not in intuitionistic logic", topic: "Proof Techniques" }
//     //     ]
//     //   };
    
//     //   const config = {
//     //     displayColumns: ["law", "topic","formula", "explanation"],  // Show name, formula, and explanation
//     //     copyableFields: ["formula"],  // Allow copying just the formula
//     //     searchableFields: ["law","topic", "formula", "explanation"]  // Allow searching by name, formula, or explanation
//     //   };
      
//   return (
//     <>
//     <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
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
//     {/* <GenericNavbar/> */}
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//       <OperaSidebar
//               side='right'
//               topOffset='55px'
//               sidebarWidth='45px'
//               panelWidth='200px'
//               iconColor='white'
//               panelBackgroundColor='#f2f2f2'
//             />
//     <Breadcrumb/>
//     <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Basic Propositional Logic Laws</h1>
//     <p style={{textAlign:'center', maxWidth:'820px', margin:'0 auto 6px', fontFamily:'Arial, sans-serif', fontSize:'15px', color:'#06357a'}}>
//       Every law below is written with the standard connectives — ∧, ∨, ¬, →, ↔, ⊕, ≡, ⊢. Each symbol is catalogued with its LaTeX code in the <a href="/math-symbols/math-logic">logic symbols reference</a>, and the <a href="/keyboard">mathematical keyboard</a> lets you type them directly.
//     </p>
//     <div style={{transform:'scale(0.87)',marginTop:'-100px'}}>
//     <DataWrapper2 data={logicLawsData}
//     config={config}/>
//     </div>
//     <br/>
//     <br/>
//     <br/>
//     {/* <ScrollUpButton/> */}
    
//     </>
//   )
// }



import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Link from 'next/link'
import '../../../pages.css'
import DataWrapper2 from '@/app/components/data-wrapper/generic-table/DataWrapper'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'


export async function getStaticProps(){


  const keyWords=['logic laws','mathematical logic','propositional logic',
    'propositional logic laws','propositional logic rules','laws of logic',
    'rules of logic','propositional calculus','discrete math propositional logic']


   const logicLawsData = {
        "Identity Laws": [
          { id: 1, law: "Identity Law (AND)", formula: "p ∧ T ≡ p", explanation: "AND with True does not change p", topic: "Equivalences" },
          { id: 2, law: "Identity Law (OR)", formula: "p ∨ F ≡ p", explanation: "OR with False does not change p", topic: "Equivalences" }
        ],
        
        "Domination Laws (Universal Bound Laws)": [
          { id: 3, law: "Domination Law (OR)", formula: "p ∨ T ≡ T", explanation: "Anything OR True is always True", topic: "Semantics" },
          { id: 4, law: "Domination Law (AND)", formula: "p ∧ F ≡ F", explanation: "Anything AND False is always False", topic: "Semantics" }
        ],
        
        "Idempotent Laws": [
          { id: 5, law: "Idempotent Law (OR)", formula: "p ∨ p ≡ p", explanation: "OR-ing a value with itself does nothing", topic: "Equivalences" },
          { id: 6, law: "Idempotent Law (AND)", formula: "p ∧ p ≡ p", explanation: "AND-ing a value with itself does nothing", topic: "Equivalences" }
        ],
        
        "Double Negation Law": [
          { id: 7, law: "Double Negation", formula: "¬(¬p) ≡ p", explanation: "Negating twice returns the original value", topic: "Equivalences" }
        ],
        
        "Commutative Laws": [
          { id: 8, law: "Commutative Law (OR)", formula: "p ∨ q ≡ q ∨ p", explanation: "Order does not matter for OR", topic: "Equivalences" },
          { id: 9, law: "Commutative Law (AND)", formula: "p ∧ q ≡ q ∧ p", explanation: "Order does not matter for AND", topic: "Equivalences" }
        ],
        
        "Associative Laws": [
          { id: 10, law: "Associative Law (OR)", formula: "(p ∨ q) ∨ r ≡ p ∨ (q ∨ r)", explanation: "Grouping does not matter for OR", topic: "Equivalences" },
          { id: 11, law: "Associative Law (AND)", formula: "(p ∧ q) ∧ r ≡ p ∧ (q ∧ r)", explanation: "Grouping does not matter for AND", topic: "Equivalences" }
        ],
        
        "Distributive Laws": [
          { id: 12, law: "Distributive Law (OR over AND)", formula: "p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)", explanation: "OR distributes over AND", topic: "Normal Forms" },
          { id: 13, law: "Distributive Law (AND over OR)", formula: "p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)", explanation: "AND distributes over OR", topic: "Normal Forms" }
        ],
        
        "De Morgan's Laws": [
          { id: 14, law: "De Morgan's Law (OR)", formula: "¬(p ∨ q) ≡ ¬p ∧ ¬q", explanation: "Negating OR flips it to AND with negated terms", topic: "Normal Forms" },
          { id: 15, law: "De Morgan's Law (AND)", formula: "¬(p ∧ q) ≡ ¬p ∨ ¬q", explanation: "Negating AND flips it to OR with negated terms", topic: "Normal Forms" }
        ],
        
        "Absorption Laws": [
          { id: 16, law: "Absorption Law (OR)", formula: "p ∨ (p ∧ q) ≡ p", explanation: "Redundant term in OR can be removed", topic: "Equivalences" },
          { id: 17, law: "Absorption Law (AND)", formula: "p ∧ (p ∨ q) ≡ p", explanation: "Redundant term in AND can be removed", topic: "Equivalences" }
        ],
        
        "Negation Laws": [
          { id: 18, law: "Negation Law (OR)", formula: "p ∨ ¬p ≡ T", explanation: "A statement is always True or False (Law of Excluded Middle)", topic: "Semantics" },
          { id: 19, law: "Negation Law (AND)", formula: "p ∧ ¬p ≡ F", explanation: "A statement cannot be both True and False (Contradiction Law)", topic: "Semantics" }
        ],
        
        "Contrapositive Law": [
          { id: 20, law: "Contrapositive Law", formula: "(p → q) ≡ (¬q → ¬p)", explanation: "If p implies q, then not q implies not p", topic: "Proof Techniques" }
        ],
        "Redundancy Laws": [
          { id: 21, law: "Redundancy Law (OR over OR)", formula: "p ∨ (q ∨ p) ≡ p ∨ q", explanation: "If p is already part of the OR, repeating it is unnecessary", topic: "Equivalences" },
          { id: 22, law: "Redundancy Law (AND over AND)", formula: "p ∧ (q ∧ p) ≡ p ∧ q", explanation: "If p is already in the AND, no need to repeat", topic: "Equivalences" }
        ],
        
        "Conditional & Biconditional Laws": [
          { id: 23, law: "Implication as OR", formula: "p → q ≡ ¬p ∨ q", explanation: "A conditional statement can be rewritten as OR", topic: "Equivalences" },
          { id: 24, law: "Inverse Law for Implication", formula: "(p → q) ≢ (¬p → ¬q)", explanation: "Just because p→q is true, it doesn't mean ¬p→¬q is true", topic: "Proof Techniques" },
          { id: 25, law: "Equivalence Breakdown", formula: "p ↔ q ≡ (p → q) ∧ (q → p)", explanation: "A biconditional means both directions must be true", topic: "Equivalences" }
        ],
        
        "Exclusive OR Laws": [
          { id: 26, law: "Definition of XOR", formula: "p ⊕ q ≡ (p ∨ q) ∧ ¬(p ∧ q)", explanation: "XOR is true when exactly one of p or q is true", topic: "Equivalences" },
          { id: 27, law: "Involution of XOR", formula: "p ⊕ p ≡ F", explanation: "A value XOR itself is always false", topic: "Semantics" },
          { id: 28, law: "Commutative Law of XOR", formula: "p ⊕ q ≡ q ⊕ p", explanation: "Order does not matter for XOR", topic: "Equivalences" },
          { id: 29, law: "Associative Law of XOR", formula: "(p ⊕ q) ⊕ r ≡ p ⊕ (q ⊕ r)", explanation: "Grouping does not matter for XOR", topic: "Equivalences" }
        ],
        
        "Monotonicity Laws": [
          { id: 30, law: "Monotonicity of OR", formula: "p → (p ∨ q)", explanation: "Adding a term to an OR does not make it false", topic: "Proof Techniques" },
          { id: 31, law: "Monotonicity of AND", formula: "(p ∧ q) → p", explanation: "Removing a term from an AND does not make it true", topic: "Proof Techniques" }
        ],
        
        "Expansion Laws": [
          { id: 32, law: "Ternary Absorption", formula: "(p ∧ q) ∨ (p ∧ r) ≡ p ∧ (q ∨ r)", explanation: "Factoring out common terms", topic: "Normal Forms" }
        ],
        
        "Resolution Laws": [
          { id: 33, law: "Resolution", formula: "(p ∨ q), (¬p ∨ r) ⊢ (q ∨ r)", explanation: "If we have p∨q and ¬p∨r, we can conclude q∨r", topic: "Inference Rules" }
        ],
        
        "Peirce's Law": [
          { id: 34, law: "Peirce's Law", formula: "((p → q) → p) → p", explanation: "Valid in classical logic but not in intuitionistic logic", topic: "Proof Techniques" }
        ]
      };
    
      const config = {
        displayColumns: ["law", "topic","formula", "explanation"],  // Show name, formula, and explanation
        copyableFields: ["formula"],  // Allow copying just the formula
        searchableFields: ["law","topic", "formula", "explanation"]  // Allow searching by name, formula, or explanation
      };

// Four questions written from scratch, sourced from table rows — this page is
// a pure reference table with no prose sections, which is exactly the
// "comparison table whose rows answer questions the prose never asks" case.
// De Morgan is unclaimed (the formulas page renders no FAQ); Peirce's law
// stays with the tautology page; contrapositive with the implication pages.
const faqQuestions = {
  obj1: {
    question: "What are De Morgan's laws?",
    answer: "De Morgan's laws describe how negation passes over AND and OR: ¬(p ∨ q) ≡ ¬p ∧ ¬q, and ¬(p ∧ q) ≡ ¬p ∨ ¬q. Negating a disjunction turns it into a conjunction of negations, and vice versa — the connective flips and the negation lands on each term. The laws are central to simplifying expressions and converting formulas to normal forms."
  },
  obj2: {
    question: "What is the absorption law in logic?",
    answer: "The absorption laws remove redundant terms: p ∨ (p ∧ q) ≡ p and p ∧ (p ∨ q) ≡ p. In the first, if p already holds the conjunction adds nothing; if p fails, p ∧ q fails with it. Either way the whole expression rises and falls with p alone. Absorption is a workhorse of Boolean simplification, collapsing circuits and formulas without changing their behaviour."
  },
  obj3: {
    question: "What is the distributive law in logic?",
    answer: "Each of AND and OR distributes over the other: p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r), and p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r). The first mirrors multiplication distributing over addition in algebra; the second has no arithmetic analogue and is special to logic. Both directions are used when converting expressions to conjunctive or disjunctive normal form."
  },
  obj4: {
    question: "What is XOR in logic?",
    answer: "XOR (exclusive or, written ⊕) is true when exactly one of its operands is true: p ⊕ q ≡ (p ∨ q) ∧ ¬(p ∧ q). It differs from OR by excluding the both-true case. It is commutative, associative, and p ⊕ p ≡ F — a value never differs from itself. Type ⊕ and the other connectives with the [mathematical keyboard](!/keyboard)."
  }
}


   return {
      props:{
        //  sectionsContent,
        config,
        logicLawsData,
        faqQuestions,
        seoData: {
      title: "Propositional Logic Laws - Complete Reference Guide | Learn Math Class",
      description: "Comprehensive collection of propositional logic laws including De Morgan's, distributive, absorption, and identity laws. Essential discrete mathematics reference.",
      keywords: keyWords.join(", "),
      url: "/logic/propositional-logic/laws",
      name: "Propositional Logic Laws"
    },
    keyWords,
       }
    }
   }
  

export default function PropositionalLogicLawsPage({ seoData, config, logicLawsData, faqQuestions, keyWords }) {

    // const logicLawsData = {
    //     "Identity Laws": [
    //       { id: 1, law: "Identity Law (AND)", formula: "p ∧ T ≡ p", explanation: "AND with True does not change p", topic: "Equivalences" },
    //       { id: 2, law: "Identity Law (OR)", formula: "p ∨ F ≡ p", explanation: "OR with False does not change p", topic: "Equivalences" }
    //     ],
        
    //     "Domination Laws (Universal Bound Laws)": [
    //       { id: 3, law: "Domination Law (OR)", formula: "p ∨ T ≡ T", explanation: "Anything OR True is always True", topic: "Semantics" },
    //       { id: 4, law: "Domination Law (AND)", formula: "p ∧ F ≡ F", explanation: "Anything AND False is always False", topic: "Semantics" }
    //     ],
        
    //     "Idempotent Laws": [
    //       { id: 5, law: "Idempotent Law (OR)", formula: "p ∨ p ≡ p", explanation: "OR-ing a value with itself does nothing", topic: "Equivalences" },
    //       { id: 6, law: "Idempotent Law (AND)", formula: "p ∧ p ≡ p", explanation: "AND-ing a value with itself does nothing", topic: "Equivalences" }
    //     ],
        
    //     "Double Negation Law": [
    //       { id: 7, law: "Double Negation", formula: "¬(¬p) ≡ p", explanation: "Negating twice returns the original value", topic: "Equivalences" }
    //     ],
        
    //     "Commutative Laws": [
    //       { id: 8, law: "Commutative Law (OR)", formula: "p ∨ q ≡ q ∨ p", explanation: "Order does not matter for OR", topic: "Equivalences" },
    //       { id: 9, law: "Commutative Law (AND)", formula: "p ∧ q ≡ q ∧ p", explanation: "Order does not matter for AND", topic: "Equivalences" }
    //     ],
        
    //     "Associative Laws": [
    //       { id: 10, law: "Associative Law (OR)", formula: "(p ∨ q) ∨ r ≡ p ∨ (q ∨ r)", explanation: "Grouping does not matter for OR", topic: "Equivalences" },
    //       { id: 11, law: "Associative Law (AND)", formula: "(p ∧ q) ∧ r ≡ p ∧ (q ∧ r)", explanation: "Grouping does not matter for AND", topic: "Equivalences" }
    //     ],
        
    //     "Distributive Laws": [
    //       { id: 12, law: "Distributive Law (OR over AND)", formula: "p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)", explanation: "OR distributes over AND", topic: "Normal Forms" },
    //       { id: 13, law: "Distributive Law (AND over OR)", formula: "p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)", explanation: "AND distributes over OR", topic: "Normal Forms" }
    //     ],
        
    //     "De Morgan's Laws": [
    //       { id: 14, law: "De Morgan's Law (OR)", formula: "¬(p ∨ q) ≡ ¬p ∧ ¬q", explanation: "Negating OR flips it to AND with negated terms", topic: "Normal Forms" },
    //       { id: 15, law: "De Morgan's Law (AND)", formula: "¬(p ∧ q) ≡ ¬p ∨ ¬q", explanation: "Negating AND flips it to OR with negated terms", topic: "Normal Forms" }
    //     ],
        
    //     "Absorption Laws": [
    //       { id: 16, law: "Absorption Law (OR)", formula: "p ∨ (p ∧ q) ≡ p", explanation: "Redundant term in OR can be removed", topic: "Equivalences" },
    //       { id: 17, law: "Absorption Law (AND)", formula: "p ∧ (p ∨ q) ≡ p", explanation: "Redundant term in AND can be removed", topic: "Equivalences" }
    //     ],
        
    //     "Negation Laws": [
    //       { id: 18, law: "Negation Law (OR)", formula: "p ∨ ¬p ≡ T", explanation: "A statement is always True or False (Law of Excluded Middle)", topic: "Semantics" },
    //       { id: 19, law: "Negation Law (AND)", formula: "p ∧ ¬p ≡ F", explanation: "A statement cannot be both True and False (Contradiction Law)", topic: "Semantics" }
    //     ],
        
    //     "Contrapositive Law": [
    //       { id: 20, law: "Contrapositive Law", formula: "(p → q) ≡ (¬q → ¬p)", explanation: "If p implies q, then not q implies not p", topic: "Proof Techniques" }
    //     ],
    //     "Redundancy Laws": [
    //       { id: 21, law: "Redundancy Law (OR over OR)", formula: "p ∨ (q ∨ p) ≡ p ∨ q", explanation: "If p is already part of the OR, repeating it is unnecessary", topic: "Equivalences" },
    //       { id: 22, law: "Redundancy Law (AND over AND)", formula: "p ∧ (q ∧ p) ≡ p ∧ q", explanation: "If p is already in the AND, no need to repeat", topic: "Equivalences" }
    //     ],
        
    //     "Conditional & Biconditional Laws": [
    //       { id: 23, law: "Implication as OR", formula: "p → q ≡ ¬p ∨ q", explanation: "A conditional statement can be rewritten as OR", topic: "Equivalences" },
    //       { id: 24, law: "Inverse Law for Implication", formula: "(p → q) ≢ (¬p → ¬q)", explanation: "Just because p→q is true, it doesn't mean ¬p→¬q is true", topic: "Proof Techniques" },
    //       { id: 25, law: "Equivalence Breakdown", formula: "p ↔ q ≡ (p → q) ∧ (q → p)", explanation: "A biconditional means both directions must be true", topic: "Equivalences" }
    //     ],
        
    //     "Exclusive OR Laws": [
    //       { id: 26, law: "Definition of XOR", formula: "p ⊕ q ≡ (p ∨ q) ∧ ¬(p ∧ q)", explanation: "XOR is true when exactly one of p or q is true", topic: "Equivalences" },
    //       { id: 27, law: "Involution of XOR", formula: "p ⊕ p ≡ F", explanation: "A value XOR itself is always false", topic: "Semantics" },
    //       { id: 28, law: "Commutative Law of XOR", formula: "p ⊕ q ≡ q ⊕ p", explanation: "Order does not matter for XOR", topic: "Equivalences" },
    //       { id: 29, law: "Associative Law of XOR", formula: "(p ⊕ q) ⊕ r ≡ p ⊕ (q ⊕ r)", explanation: "Grouping does not matter for XOR", topic: "Equivalences" }
    //     ],
        
    //     "Monotonicity Laws": [
    //       { id: 30, law: "Monotonicity of OR", formula: "p → (p ∨ q)", explanation: "Adding a term to an OR does not make it false", topic: "Proof Techniques" },
    //       { id: 31, law: "Monotonicity of AND", formula: "(p ∧ q) → p", explanation: "Removing a term from an AND does not make it true", topic: "Proof Techniques" }
    //     ],
        
    //     "Expansion Laws": [
    //       { id: 32, law: "Ternary Absorption", formula: "(p ∧ q) ∨ (p ∧ r) ≡ p ∧ (q ∨ r)", explanation: "Factoring out common terms", topic: "Normal Forms" }
    //     ],
        
    //     "Resolution Laws": [
    //       { id: 33, law: "Resolution", formula: "(p ∨ q), (¬p ∨ r) ⊢ (q ∨ r)", explanation: "If we have p∨q and ¬p∨r, we can conclude q∨r", topic: "Inference Rules" }
    //     ],
        
    //     "Peirce's Law": [
    //       { id: 34, law: "Peirce's Law", formula: "((p → q) → p) → p", explanation: "Valid in classical logic but not in intuitionistic logic", topic: "Proof Techniques" }
    //     ]
    //   };
    
    //   const config = {
    //     displayColumns: ["law", "topic","formula", "explanation"],  // Show name, formula, and explanation
    //     copyableFields: ["formula"],  // Allow copying just the formula
    //     searchableFields: ["law","topic", "formula", "explanation"]  // Allow searching by name, formula, or explanation
    //   };
      
  return (
    <>
    <Head>
  <title>{seoData.title}</title>
  <meta name="description" content={seoData.description} />
  <meta name="keywords" content={seoData.keywords} />
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
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": seoData.name,
        "description": seoData.description,
        "keywords": seoData.keywords,
        "url": `https://www.learnmathclass.com${seoData.url}`,
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "mainEntity": {
          "@type": "Article",
          "name": seoData.name,
          "dateModified": new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          }
        }
      })
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
              topOffset='55px'
              sidebarWidth='45px'
              panelWidth='200px'
              iconColor='white'
              panelBackgroundColor='#f2f2f2'
            />
    <Breadcrumb/>
    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Basic Propositional Logic Laws</h1>
    <p style={{textAlign:'center', maxWidth:'820px', margin:'0 auto 6px', fontFamily:'Arial, sans-serif', fontSize:'15px', color:'#06357a'}}>
      Every law below is written with the standard connectives — ∧, ∨, ¬, →, ↔, ⊕, ≡, ⊢. Each symbol is catalogued with its LaTeX code in the <Link href="/math-symbols/math-logic">logic symbols reference</Link>, and the <Link href="/keyboard">mathematical keyboard</Link> lets you type them directly.
    </p>
    <div style={{transform:'scale(0.87)',marginTop:'-100px'}}>
    <DataWrapper2 data={logicLawsData}
    config={config}/>
    </div>
    <br/>
    {/* faq: this page has no Sections wrapper, so the heading is rendered manually */}
    <h2 style={{textAlign:'center', color:'#06357a', fontFamily:'Arial, sans-serif'}}>Logic Laws FAQ</h2>
    <div style={{width:'80%',margin:'auto'}}>
      <FAQSection
        faqQuestions={faqQuestions}
        theme={'leftBorder'}
        width={'100%'}
        openFirst={false}
      />
    </div>
    <br/>
    <br/>
    <br/>
    {/* <ScrollUpButton/> */}

    </>
  )
}