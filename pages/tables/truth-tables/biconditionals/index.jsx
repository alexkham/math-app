
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
  title: 'Biconditionals Truth Tables',
  description: 'Truth Tables Calculator and Guide',
  metadataBase: new URL('https://www.learnmathclass.com'),
  alternates: {
    canonical: '/tables/truth-tables/biconditionals'
  }
}

export default function BiconditionalsTruthTablesPage({ keyWords, biconditionalExplanations ,menuItems}) {

     


    const biconditionalOperators = {
        'P ↔ Q': { 
          symbol: 'P ↔ Q', 
          func: (a, b) => (a && b) || (!a && !b),
          variables: 2,
          subExpressions: [
            { symbol: 'P → Q', func: (a, b) => !a || b },
            { symbol: 'Q → P', func: (a, b) => !b || a },
            { symbol: '(P → Q) ∧ (Q → P)', func: (a, b) => (!a || b) && (!b || a) }
          ]
        },
        '(P ↔ Q) ↔ (¬P ↔ ¬Q)': { 
          symbol: '(P ↔ Q) ↔ (¬P ↔ ¬Q)', 
          func: (a, b) => ((a && b) || (!a && !b)) === ((!a && !b) || (a && b)),
          variables: 2,
          subExpressions: [
            { symbol: 'P ↔ Q', func: (a, b) => (a && b) || (!a && !b) },
            { symbol: '¬P', func: (a, b) => !a },
            { symbol: '¬Q', func: (a, b) => !b },
            { symbol: '¬P ↔ ¬Q', func: (a, b) => (!a && !b) || (a && b) }
          ]
        },
        '(P ↔ Q) ↔ ((P → Q) ∧ (Q → P))': { 
          symbol: '(P ↔ Q) ↔ ((P → Q) ∧ (Q → P))', 
          func: (a, b) => ((a && b) || (!a && !b)) === ((!a || b) && (!b || a)),
          variables: 2,
          subExpressions: [
            { symbol: 'P ↔ Q', func: (a, b) => (a && b) || (!a && !b) },
            { symbol: 'P → Q', func: (a, b) => !a || b },
            { symbol: 'Q → P', func: (a, b) => !b || a },
            { symbol: '(P → Q) ∧ (Q → P)', func: (a, b) => (!a || b) && (!b || a) }
          ]
        },
        '((P ↔ Q) ∧ (Q ↔ R)) ↔ (P ↔ R)': { 
          symbol: '((P ↔ Q) ∧ (Q ↔ R)) ↔ (P ↔ R)', 
          func: (a, b, c) => ((((a && b) || (!a && !b)) && ((b && c) || (!b && !c)))) === ((a && c) || (!a && !c)),
          variables: 3,
          subExpressions: [
            { symbol: 'P ↔ Q', func: (a, b, c) => (a && b) || (!a && !b) },
            { symbol: 'Q ↔ R', func: (a, b, c) => (b && c) || (!b && !c) },
            { symbol: '(P ↔ Q) ∧ (Q ↔ R)', func: (a, b, c) => ((a && b) || (!a && !b)) && ((b && c) || (!b && !c)) },
            { symbol: 'P ↔ R', func: (a, b, c) => (a && c) || (!a && !c) }
          ]
        },
        '(P ↔ Q) → ((P → Q) ∧ (Q → P))': { 
          symbol: '(P ↔ Q) → ((P → Q) ∧ (Q → P))', 
          func: (a, b) => !((a && b) || (!a && !b)) || ((!a || b) && (!b || a)),
          variables: 2,
          subExpressions: [
            { symbol: 'P ↔ Q', func: (a, b) => (a && b) || (!a && !b) },
            { symbol: 'P → Q', func: (a, b) => !a || b },
            { symbol: 'Q → P', func: (a, b) => !b || a },
            { symbol: '(P → Q) ∧ (Q → P)', func: (a, b) => (!a || b) && (!b || a) }
          ]
        },
        '(P → Q) ↔ (¬Q → ¬P)': { 
          symbol: '(P → Q) ↔ (¬Q → ¬P)', 
          func: (a, b) => (!a || b) === (!(!b) || !a),
          variables: 2,
          subExpressions: [
            { symbol: 'P → Q', func: (a, b) => !a || b },
            { symbol: '¬Q', func: (a, b) => !b },
            { symbol: '¬P', func: (a, b) => !a },
            { symbol: '¬Q → ¬P', func: (a, b) => !(!b) || !a }
          ]
        },
        'P ↔ ¬¬P': { 
          symbol: 'P ↔ ¬¬P', 
          func: (a) => a === !!a,
          variables: 1,
          subExpressions: [
            { symbol: '¬P', func: (a) => !a },
            { symbol: '¬¬P', func: (a) => !!a }
          ]
        },
        '(P ∧ Q) ↔ ¬(¬P ∨ ¬Q)': { 
          symbol: '(P ∧ Q) ↔ ¬(¬P ∨ ¬Q)', 
          func: (a, b) => (a && b) === !(!a || !b),
          variables: 2,
          subExpressions: [
            { symbol: 'P ∧ Q', func: (a, b) => a && b },
            { symbol: '¬P', func: (a, b) => !a },
            { symbol: '¬Q', func: (a, b) => !b },
            { symbol: '¬P ∨ ¬Q', func: (a, b) => !a || !b },
            { symbol: '¬(¬P ∨ ¬Q)', func: (a, b) => !(!a || !b) }
          ]
        }
      };
      
  return (
    <>
    <Head>
  <title>Logic Biconditional Truth Tables | Learn Math Class</title>
  <meta name="description" content="Truth Tables Calculator and Guide" />
  <meta name="keywords" content={keyWords.join(', ')} />
  <link rel="canonical" href="https://www.learnmathclass.com/tables/truth-tables/biconditionals" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta property="og:title" content="Tautologies Truth Tables | Learn Math Class" />
  <meta property="og:description" content="Truth Tables Calculator and Guide" />
  <meta property="og:url" content="https://www.learnmathclass.com/tables/truth-tables/biconditionals" />
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
      <h1 className='title' style={{marginTop:'-10px', marginBottom:'-100px'}}>Biconditionals (Double Implications) Truth Tables</h1> 
      <VerticalButtonGroup 
      
      items={menuItems}
      width="200px"       
    //   backgroundColor ='#0070f3'
    //   color = 'white'
      isSticky={true}
      verticalOffset='250px'
      theme=''
      />

      <div style={{marginLeft:'20px',transform:'scale(0.95)',marginTop:'-60px'}}>
      <TruthTable operators={biconditionalOperators} explanations={biconditionalExplanations}/> 
      </div>
      <br/> 
      <br/>
      <ScrollUpButton/> 
    </>
  )
}

export async function getStaticProps() {
  const keyWords = ['truth table','logic biconditional','logical equivalence',
    'double implication examples','propositional logic','logic'
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
        title: "Tautologies",
        // icon: <Home />,
        link: "/tables/truth-tables/tautologies"
      },
    {
      title: "Contradictions",
      // icon: <Home />,
      link: "/tables/truth-tables/contradictions"
    },

  ]


  
  const biconditionalExplanations = {
    'P ↔ Q': {
      text: "This formula represents the most basic biconditional relationship in propositional logic. It states that P and Q must have the same truth value - both true or both false. The biconditional is equivalent to the conjunction of two implications (P→Q) ∧ (Q→P), demonstrating that logical equivalence requires mutual implication. This fundamental relation is used to establish definitions and equivalences in formal logical systems.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" }
      ]
    },
    '(P ↔ Q) ↔ (¬P ↔ ¬Q)': {
      text: "This [tautology](!/logic/propositional-logic/semantics/tautology) demonstrates that a biconditional relationship is preserved under negation. If P is equivalent to Q, then not-P is equivalent to not-Q, and vice versa. This illustrates an important symmetry in classical logic, showing that logical equivalence is preserved when we negate both sides of an equivalence. The expression is true for all possible truth values of P and Q, confirming its status as a [tautology](!/logic/propositional-logic/semantics/tautology).",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" }
      ]
    },
    '(P ↔ Q) ↔ ((P → Q) ∧ (Q → P))': {
      text: "This [tautology](!/logic/propositional-logic/semantics/tautology) demonstrates that logical equivalence (↔) can be expressed as the conjunction of two implications. If P is equivalent to Q, then P implies Q and Q implies P. This formal representation of biconditional logic is foundational in mathematical proofs and logical analysis, establishing that equivalence requires mutual implication in both directions.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" }
      ]
    },
    '((P ↔ Q) ∧ (Q ↔ R)) ↔ (P ↔ R)': {
      text: "This [tautology](!/logic/propositional-logic/semantics/tautology) illustrates the transitivity property of logical equivalence. If P is equivalent to Q, and Q is equivalent to R, then P must be equivalent to R. This principle is central to constructing chains of equivalent statements in formal proofs and mathematical reasoning. The formula is valid for all possible combinations of truth values, confirming its status as a fundamental logical truth.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" }
      ]
    },
    '(P ↔ Q) → ((P → Q) ∧ (Q → P))': {
      text: "This [tautology](!/logic/propositional-logic/semantics/tautology) demonstrates that logical equivalence (↔) implies the conjunction of two implications. If P is equivalent to Q, then P implies Q and Q implies P. This formal representation of biconditional logic is foundational in mathematical proofs and logical analysis, establishing that equivalence requires mutual implication in both directions.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" }
      ]
    },
    '(P → Q) ↔ (¬Q → ¬P)': {
      text: "This expression demonstrates that a conditional statement is logically equivalent to its contrapositive. The formula is a [tautology](!/logic/propositional-logic/semantics/tautology) that is true in all cases and is foundational in classical logic and mathematical proof strategies. The equivalence allows one to prove a statement by proving its contrapositive, which is often simpler or more direct. This principle is frequently used in indirect proofs and logical reasoning.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" }
      ]
    },
    'P ↔ ¬¬P': {
      text: "This [tautology](!/logic/propositional-logic/semantics/tautology) illustrates the double negation principle in classical logic. It states that a proposition P is logically equivalent to its double negation (not not P). This principle distinguishes classical logic from intuitionistic logic, where double negation elimination is not universally accepted. The formula is true for all possible truth values of P, confirming its status as a fundamental logical truth.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" }
      ]
    },
    '(P ∧ Q) ↔ ¬(¬P ∨ ¬Q)': {
      text: "This [tautology](!/logic/propositional-logic/semantics/tautology) expresses one of De Morgan's laws in the form of a biconditional. It demonstrates that the conjunction of two propositions is logically equivalent to the negation of the disjunction of their negations. This equivalence is fundamental in simplifying logical expressions and is widely used in circuit design, formal proofs, and mathematical reasoning. The formula is valid for all possible combinations of truth values.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" }
      ]
    }
  };
  
  
  
  return {
    props: {
      keyWords,
      biconditionalExplanations,
      menuItems
    }
  }
}