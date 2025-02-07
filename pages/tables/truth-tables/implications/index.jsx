
import { Metadata } from 'next'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import TruthTable from '@/app/components/logic-calculator/truth-tables/TruthTable'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import '../../../pages.css'

export const metadata = {
  title: 'Implications Truth Tables',
  description: 'Truth Tables Calculator and Guide',
  metadataBase: new URL('https://www.learnmathclass.com'),
  alternates: {
    canonical: '/tables/truth-tables/implications'
  }
}

export default function ImplicationsTruthTablesPage({ keyWords, implicationExplanations }) {

    const implicationOperators = {
        'P→Q': { symbol: 'P→Q', func: (a, b) => !a || b },
        'Q→P': { symbol: 'Q→P', func: (a, b) => !b || a },
        '¬P→Q': { symbol: '¬P→Q', func: (a, b) => a || b },
        'P→¬Q': { symbol: 'P→¬Q', func: (a, b) => !a || !b },
        '¬P→¬Q': { symbol: '¬P→¬Q', func: (a, b) => a || !b },
        '¬Q→¬P': { symbol: '¬Q→¬P', func: (a, b) => b || !a }
      };
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
      <h1 className='title' style={{marginTop:'-30px', marginBottom:'-10px'}}>Implications Truth Tables</h1>  
      <TruthTable operators={implicationOperators} explanations={implicationExplanations}/> 
      <br/> 
      <br/>
      <ScrollUpButton/> 
    </>
  )
}

export async function getStaticProps() {
  const keyWords = ['truth table','implications truth table','logical implications',
    'negations logic','antecedent','consequent'
  ]
  
  const implicationExplanations = {
    'P→Q': {
      text: "Material implication P→Q (if P then Q) is defined as ¬P∨Q in propositional logic. Truth table follows from this definition: implication is false only when antecedent P is true and consequent Q is false. This reflects logical consequence - when premise holds, conclusion must follow. In terms of truth values: T→F = F, while all other combinations yield T. Formula: P→Q ≡ ¬P∨Q demonstrates equivalence between implication and disjunction with negated antecedent.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" }]
    },
    'Q→P': {
      text: "Converse implication Q→P (if Q then P) reverses antecedent and consequent. While P→Q means &quot;if P then Q&quot;, Q→P expresses &quot;if Q then P&quot;. These are not logically equivalent as shown by different truth tables. The converse demonstrates implication&apos;s non-symmetry - a key principle in propositional logic. Formula: Q→P ≡ ¬Q∨P. Understanding converse helps identify logical fallacies in argumentation.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" }]
    },
    '¬P→Q': {
      text: "Negated antecedent implication ¬P→Q means &quot;if not P then Q&quot;. This form shows how negating premise affects logical relationship. Formula: ¬P→Q ≡ P∨Q (by material implication definition and double negation). Truth table reveals: when P is false (¬P is true), Q must be true for valid implication. Common in proof by contradiction where we assume negation of premise.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" }]
    },
    'P→¬Q': {
      text: "Negated consequent implication P→¬Q means &quot;if P then not Q&quot;. Formula: P→¬Q ≡ ¬P∨¬Q. Truth table shows this form&apos;s use in expressing negative conclusions from positive premises. Critical in exclusive relationships where one condition precludes another. Common in mathematical proofs showing mutual exclusivity.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" }]
    },
    '¬P→¬Q': {
      text: "Double negation implication ¬P→¬Q means &quot;if not P then not Q&quot;. Formula: ¬P→¬Q ≡ P∨¬Q. Not equivalent to original P→Q, demonstrating how negation placement fundamentally alters logical relationships. Truth table shows distinct behavior from basic implication. Important in contrapositive reasoning and proof strategies.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" }]
    },
    '¬Q→¬P': {
      text: "Contrapositive ¬Q→¬P is logically equivalent to original implication P→Q. Formula: ¬Q→¬P ≡ Q∨¬P ≡ ¬P∨Q ≡ P→Q. Truth table proves this equivalence. Fundamental theorem in propositional logic: statement is logically equivalent to its contrapositive. Essential in proof techniques where proving contrapositive is easier than direct proof.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" }]
    }
   };
//    const implicationOperators = {
//     'P→Q': { symbol: 'P→Q', func: (a, b) => !a || b },
//     'Q→P': { symbol: 'Q→P', func: (a, b) => !b || a },
//     '¬P→Q': { symbol: '¬P→Q', func: (a, b) => a || b },
//     'P→¬Q': { symbol: 'P→¬Q', func: (a, b) => !a || !b },
//     '¬P→¬Q': { symbol: '¬P→¬Q', func: (a, b) => a || !b },
//     '¬Q→¬P': { symbol: '¬Q→¬P', func: (a, b) => b || !a }
//   };
  

  return {
    props: {
      keyWords,
      implicationExplanations,
    //   implicationOperators
    }
  }
}