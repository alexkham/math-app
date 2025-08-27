
import { Metadata } from 'next'
import Head from 'next/head'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import TruthTable from '@/app/components/logic-calculator/truth-tables/TruthTable'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import '../../../pages.css'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'

export const metadata = {
  title: 'Tautologies Truth Tables',
  description: 'Truth Tables Calculator and Guide',
  metadataBase: new URL('https://www.learnmathclass.com'),
  alternates: {
    canonical: '/tables/truth-tables/contradictions'
  }
}

export default function ContradictionsTruthTablesPage({ keyWords, contradictionExplanations ,menuItems}) {

     
    const contradictionOperators = {
        'P ∧ ¬P': { 
          symbol: 'P ∧ ¬P', 
          func: (a) => a && !a,
          variables: 1,
          subExpressions: [
            { symbol: '¬P', func: (a) => !a }
          ]
        },
        '(P → Q) ∧ (P → ¬Q) ∧ P': { 
          symbol: '(P → Q) ∧ (P → ¬Q) ∧ P', 
          func: (a, b) => (!a || b) && (!a || !b) && a,
          variables: 2,
          subExpressions: [
            { symbol: 'P → Q', func: (a, b) => !a || b },
            { symbol: 'P → ¬Q', func: (a, b) => !a || !b },
            { symbol: '¬Q', func: (a, b) => !b },
            { symbol: '(P → Q) ∧ (P → ¬Q)', func: (a, b) => (!a || b) && (!a || !b) }
          ]
        },
        '(P ∨ Q) ∧ ¬P ∧ ¬Q': { 
          symbol: '(P ∨ Q) ∧ ¬P ∧ ¬Q', 
          func: (a, b) => (a || b) && !a && !b,
          variables: 2,
          subExpressions: [
            { symbol: 'P ∨ Q', func: (a, b) => a || b },
            { symbol: '¬P', func: (a, b) => !a },
            { symbol: '¬Q', func: (a, b) => !b },
            { symbol: '¬P ∧ ¬Q', func: (a, b) => !a && !b }
          ]
        },
        'P ↔ ¬P': { 
          symbol: 'P ↔ ¬P', 
          func: (a) => a === !a,
          variables: 1,
          subExpressions: [
            { symbol: '¬P', func: (a) => !a }
          ]
        },
        '(P ∧ Q) ∧ (¬P ∨ ¬Q)': { 
          symbol: '(P ∧ Q) ∧ (¬P ∨ ¬Q)', 
          func: (a, b) => (a && b) && (!a || !b),
          variables: 2,
          subExpressions: [
            { symbol: 'P ∧ Q', func: (a, b) => a && b },
            { symbol: '¬P', func: (a, b) => !a },
            { symbol: '¬Q', func: (a, b) => !b },
            { symbol: '¬P ∨ ¬Q', func: (a, b) => !a || !b }
          ]
        },
        '(P → Q) ∧ (Q → R) ∧ P ∧ ¬R': { 
          symbol: '(P → Q) ∧ (Q → R) ∧ P ∧ ¬R', 
          func: (a, b, c) => (!a || b) && (!b || c) && a && !c,
          variables: 3,
          subExpressions: [
            { symbol: 'P → Q', func: (a, b, c) => !a || b },
            { symbol: 'Q → R', func: (a, b, c) => !b || c },
            { symbol: '¬R', func: (a, b, c) => !c },
            { symbol: '(P → Q) ∧ (Q → R)', func: (a, b, c) => (!a || b) && (!b || c) }
          ]
        },
        '(P → Q) ∧ (Q → R) ∧ ¬R ∧ P': { 
          symbol: '(P → Q) ∧ (Q → R) ∧ ¬R ∧ P', 
          func: (a, b, c) => (!a || b) && (!b || c) && !c && a,
          variables: 3,
          subExpressions: [
            { symbol: 'P → Q', func: (a, b, c) => !a || b },
            { symbol: 'Q → R', func: (a, b, c) => !b || c },
            { symbol: '¬R', func: (a, b, c) => !c },
            { symbol: '(P → Q) ∧ (Q → R)', func: (a, b, c) => (!a || b) && (!b || c) }
          ]
        },
        '(P ↔ Q) ∧ (P ↔ ¬Q)': { 
          symbol: '(P ↔ Q) ∧ (P ↔ ¬Q)', 
          func: (a, b) => (a === b) && (a === !b),
          variables: 2,
          subExpressions: [
            { symbol: 'P ↔ Q', func: (a, b) => a === b },
            { symbol: '¬Q', func: (a, b) => !b },
            { symbol: 'P ↔ ¬Q', func: (a, b) => a === !b }
          ]
        },
        '(P ∧ Q) ∧ (P ∧ ¬Q)': { 
          symbol: '(P ∧ Q) ∧ (P ∧ ¬Q)', 
          func: (a, b) => (a && b) && (a && !b),
          variables: 2,
          subExpressions: [
            { symbol: 'P ∧ Q', func: (a, b) => a && b },
            { symbol: '¬Q', func: (a, b) => !b },
            { symbol: 'P ∧ ¬Q', func: (a, b) => a && !b }
          ]
        },
        '(¬(P → Q)) ∧ (P ∧ Q)': { 
          symbol: '(¬(P → Q)) ∧ (P ∧ Q)', 
          func: (a, b) => !((!a || b)) && (a && b),
          variables: 2,
          subExpressions: [
            { symbol: 'P → Q', func: (a, b) => !a || b },
            { symbol: '¬(P → Q)', func: (a, b) => !((!a || b)) },
            { symbol: 'P ∧ Q', func: (a, b) => a && b }
          ]
        }
      };

 
      
  return (
    <>
    <Head>
  <title>Contradictions Truth Tables | Learn Math Class</title>
  <meta name="description" content="Truth Tables Calculator and Guide" />
  <meta name="keywords" content={keyWords.join(', ')} />
  <link rel="canonical" href="https://www.learnmathclass.com/tables/truth-tables/contradictions" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta property="og:title" content="Contradictions Truth Tables | Learn Math Class" />
  <meta property="og:description" content="Truth Tables Calculator and Guide" />
  <meta property="og:url" content="https://www.learnmathclass.com/tables/truth-tables/contradictions" />
  <meta property="og:type" content="website" />
</Head>
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
      <h1 className='title' style={{marginTop:'-30px', marginBottom:'-60px'}}>Contradictions Truth Tables</h1> 
      <VerticalButtonGroup 
      items={menuItems}
      width="200px"       
    //   backgroundColor ='#0070f3'
    //   color = 'white'
      isSticky={true}
      verticalOffset='250px'
      />

      <div style={{marginLeft:'20px',transform:'scale(0.95)',marginTop:'-60px'}}>
      <TruthTable operators={contradictionOperators} explanations={contradictionExplanations}/> 
      </div>
      <br/> 
      <br/>
      <ScrollUpButton/> 
    </>
  )
}

export async function getStaticProps() {
  const keyWords = ['truth table','contradiction truth table','contradiction',
    'contradiction examples','propositional logic', 'mathematical logic'
  ]

  const menuItems=[

    {
      title: "Basic Propositions",
      // icon: <Home />,
      link: "/tables/truth-tables"
    },

    {
      title: "Implications",
      // icon: <Home />,
      link: "/tables/truth-tables/implications"
    },

    {
      title: "Biconditionals",
      // icon: <Home />,
      link: "/tables/truth-tables/biconditionals"
    },

    {
        title: "Tautologies",
        // icon: <Home />,
        link: "/tables/truth-tables/tautologies"
      },

  ]


  
  const contradictionExplanations = {
    'P ∧ ¬P': {
      text: "This represents the simplest [contradiction](!/logic/propositional-logic/semantics/contradiction) in logic: a proposition and its negation cannot both be true simultaneously. This form is sometimes called the law of non-contradiction and is a fundamental principle in classical logic. No matter what truth value is assigned to P, the formula evaluates to false because a statement cannot be both true and false at the same time.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" }
      ]
    },
    '(P → Q) ∧ (P → ¬Q) ∧ P': {
      text: "This formula creates a [contradiction](!/logic/propositional-logic/semantics/contradiction) by asserting that P implies both Q and not-Q, while also asserting that P is true. When P is true, the implications force Q to be both true and false simultaneously, which is impossible. This contradiction demonstrates how inconsistent premises lead to logical impossibility.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" }
      ]
    },
    '(P ∨ Q) ∧ ¬P ∧ ¬Q': {
      text: "This [contradiction](!/logic/propositional-logic/semantics/contradiction) asserts that either P or Q must be true (through the disjunction P∨Q), while simultaneously claiming that both P and Q are false (through the conjunctions with ¬P and ¬Q). These claims directly contradict each other, making the entire formula unsatisfiable under any assignment of truth values.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" }
      ]
    },
    'P ↔ ¬P': {
      text: "This formula states that P is logically equivalent to its own negation, which is impossible. For the biconditional to be true, P and ¬P would need to have the same truth value. However, P and ¬P always have opposite truth values by definition, making this formula a [contradiction](!/logic/propositional-logic/semantics/contradiction) in all possible interpretations.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" }
      ]
    },
    '(P ∧ Q) ∧ (¬P ∨ ¬Q)': {
      text: "This [contradiction](!/logic/propositional-logic/semantics/contradiction) first asserts that both P and Q are true, then claims that at least one of them is false. These claims are mutually exclusive. The formula can be rewritten using De Morgan's laws to show that it's equivalent to claiming that P∧Q∧¬(P∧Q), which is clearly contradictory.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" }
      ]
    },
    '(P → Q) ∧ (Q → R) ∧ P ∧ ¬R': {
      text: "This formula creates a [contradiction](!/logic/propositional-logic/semantics/contradiction) through a chain of implications. It states that P implies Q, and Q implies R, while asserting that P is true and R is false. Following the chain: if P is true, then Q must be true; if Q is true, then R must be true. But the formula also claims R is false, creating an irreconcilable contradiction.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" }
      ]
    },
    '(P → Q) ∧ (Q → R) ∧ ¬R ∧ P': {
      text: "Similar to the previous [contradiction](!/logic/propositional-logic/semantics/contradiction), this formula establishes a chain of implications from P to R, while simultaneously asserting that P is true and R is false. The chain of implications forces R to be true when P is true, directly contradicting the claim that R is false.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" }
      ]
    },
    '(P ↔ Q) ∧ (P ↔ ¬Q)': {
      text: "This [contradiction](!/logic/propositional-logic/semantics/contradiction) asserts that P is logically equivalent to both Q and not-Q. This would require Q and not-Q to have the same truth value, which is impossible. The formula forces P to simultaneously equal both a statement and its negation, creating an irreconcilable logical conflict.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" }
      ]
    },
    '(P ∧ Q) ∧ (P ∧ ¬Q)': {
      text: "This formula directly contradicts itself by claiming that Q is both true and false while P is true. The first conjunction asserts that P and Q are both true, while the second conjunction claims that P is true and Q is false. Since Q cannot be simultaneously true and false, this formula is a [contradiction](!/logic/propositional-logic/semantics/contradiction).",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" }
      ]
    },
    '(¬(P → Q)) ∧ (P ∧ Q)': {
      text: "This [contradiction](!/logic/propositional-logic/semantics/contradiction) arises from the definition of material implication. The negation of (P→Q) is true only when P is true and Q is false. However, the second part of the formula asserts that both P and Q are true. These conditions cannot be satisfied simultaneously, making the formula a contradiction.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" }
      ]
    }
  };
  
 
  
  return {
    props: {
      keyWords,
      contradictionExplanations,
      menuItems
    }
  }
}