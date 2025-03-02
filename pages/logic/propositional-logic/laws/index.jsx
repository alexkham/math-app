import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../../pages.css'
import DataWrapper2 from '@/app/components/data-wrapper/generic-table/DataWrapper'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'

export default function PropositionalLogicLawsPage() {

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
      
      // const logicLawsData = {
      //   "Identity Laws": [
      //     { 
      //       id: 1, 
      //       law: "Identity Law (AND)", 
      //       formula: "p ∧ T ≡ p",
      //       explanation: "AND with True does not change p",
      //       category: "Equivalences"
      //     },
      //     { 
      //       id: 2, 
      //       law: "Identity Law (OR)", 
      //       formula: "p ∨ F ≡ p",
      //       explanation: "OR with False does not change p",
      //       category: "Equivalences"
      //     }
      //   ],
      
      //   "Domination Laws": [
      //     { 
      //       id: 3, 
      //       law: "Domination Law (OR)", 
      //       formula: "p ∨ T ≡ T",
      //       explanation: "Anything OR True is always True",
      //       category: "Equivalences"
      //     },
      //     { 
      //       id: 4, 
      //       law: "Domination Law (AND)", 
      //       formula: "p ∧ F ≡ F",
      //       explanation: "Anything AND False is always False",
      //       category: "Equivalences"
      //     }
      //   ],
      
      //   "Idempotent Laws": [
      //     { 
      //       id: 5, 
      //       law: "Idempotent Law (OR)", 
      //       formula: "p ∨ p ≡ p",
      //       explanation: "OR-ing a value with itself does nothing",
      //       category: "Equivalences"
      //     },
      //     { 
      //       id: 6, 
      //       law: "Idempotent Law (AND)", 
      //       formula: "p ∧ p ≡ p",
      //       explanation: "AND-ing a value with itself does nothing",
      //       category: "Equivalences"
      //     }
      //   ],
      
      //   "Double Negation Law": [
      //     { 
      //       id: 7, 
      //       law: "Double Negation", 
      //       formula: "¬(¬p) ≡ p",
      //       explanation: "Negating twice returns the original value",
      //       category: "Equivalences"
      //     }
      //   ],
      
      //   "Commutative Laws": [
      //     { 
      //       id: 8, 
      //       law: "Commutative Law (OR)", 
      //       formula: "p ∨ q ≡ q ∨ p",
      //       explanation: "Order does not matter for OR",
      //       category: "Equivalences"
      //     },
      //     { 
      //       id: 9, 
      //       law: "Commutative Law (AND)", 
      //       formula: "p ∧ q ≡ q ∧ p",
      //       explanation: "Order does not matter for AND",
      //       category: "Equivalences"
      //     }
      //   ],
      
      //   "De Morgan’s Laws": [
      //     { 
      //       id: 14, 
      //       law: "De Morgan’s Law (OR)", 
      //       formula: "¬(p ∨ q) ≡ ¬p ∧ ¬q",
      //       explanation: "Negating OR flips it to AND with negated terms",
      //       category: "Equivalences"
      //     },
      //     { 
      //       id: 15, 
      //       law: "De Morgan’s Law (AND)", 
      //       formula: "¬(p ∧ q) ≡ ¬p ∨ ¬q",
      //       explanation: "Negating AND flips it to OR with negated terms",
      //       category: "Equivalences"
      //     }
      //   ],
      
      //   "Negation and Contradiction Laws": [
      //     { 
      //       id: 18, 
      //       law: "Law of the Excluded Middle", 
      //       formula: "p ∨ ¬p ≡ T",
      //       explanation: "Every statement is either true or false, no middle ground",
      //       category: "Semantics (Tautology)"
      //     },
      //     { 
      //       id: 19, 
      //       law: "Contradiction Law", 
      //       formula: "p ∧ ¬p ≡ F",
      //       explanation: "A statement cannot be both True and False",
      //       category: "Semantics (Contradiction)"
      //     }
      //   ],
      
      //   "Contrapositive Law": [
      //     { 
      //       id: 20, 
      //       law: "Contrapositive Law", 
      //       formula: "(p → q) ≡ (¬q → ¬p)",
      //       explanation: "If p implies q, then not q implies not p",
      //       category: "Proof Techniques"
      //     }
      //   ]
      // };
      
      const config = {
        displayColumns: ["law", "topic","formula", "explanation"],  // Show name, formula, and explanation
        copyableFields: ["formula"],  // Allow copying just the formula
        searchableFields: ["law","topic", "formula", "explanation"]  // Allow searching by name, formula, or explanation
      };
      
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
    <h1 className='title' style={{marginTop:'0px', marginBottom:'0px'}}>Basic Propositional Logic Laws</h1>
    <div style={{transform:'scale(0.87)',marginTop:'-100px'}}>
    <DataWrapper2 data={logicLawsData}
    config={config}/>
    </div>
    <br/>
    <br/>
    <br/>
    <ScrollUpButton/>
    
    </>
  )
}
