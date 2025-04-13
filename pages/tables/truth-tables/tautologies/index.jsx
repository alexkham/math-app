
import { Metadata } from 'next'
import Head from 'next/head'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import TruthTable from '@/app/components/logic-calculator/truth-tables/TruthTable'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import '../../../pages.css'
import VerticalButtonGroup from '@/app/components/VerticalButtonGroup'

export const metadata = {
  title: 'Tautologies Truth Tables',
  description: 'Truth Tables Calculator and Guide',
  metadataBase: new URL('https://www.learnmathclass.com'),
  alternates: {
    canonical: '/tables/truth-tables/implications'
  }
}

export default function ImplicationsTruthTablesPage({ keyWords, tautologyExplanations ,menuItems}) {

     


    const tautologyOperators = {
        'P ∨ ¬P': { 
          symbol: 'P ∨ ¬P', 
          func: (a) => a || !a,
          variables: 1,
          subExpressions: [
            { symbol: '¬P', func: (a) => !a }
          ]
        },
        '(P → Q) ∨ (Q → P)': { 
          symbol: '(P → Q) ∨ (Q → P)', 
          func: (a, b) => (!a || b) || (!b || a),
          variables: 2,
          subExpressions: [
            { symbol: 'P → Q', func: (a, b) => !a || b },
            { symbol: 'Q → P', func: (a, b) => !b || a }
          ]
        },
        '(P ∧ Q) → P': { 
          symbol: '(P ∧ Q) → P', 
          func: (a, b) => !(a && b) || a,
          variables: 2,
          subExpressions: [
            { symbol: 'P ∧ Q', func: (a, b) => a && b }
          ]
        },
        '((P → Q) ∧ (Q → R)) → (P → R)': { 
          symbol: '((P → Q) ∧ (Q → R)) → (P → R)', 
          func: (a, b, c) => ((!a || b) && (!b || c)) ? (!a || c) : true,
          variables: 3,
          subExpressions: [
            { symbol: 'P → Q', func: (a, b, c) => !a || b },
            { symbol: 'Q → R', func: (a, b, c) => !b || c },
            { symbol: '(P → Q) ∧ (Q → R)', func: (a, b, c) => (!a || b) && (!b || c) },
            { symbol: 'P → R', func: (a, b, c) => !a || c }
          ]
        },
        '((P → Q) ∧ P) → Q': { 
          symbol: '((P → Q) ∧ P) → Q', 
          func: (a, b) => ((!a || b) && a) ? b : true,
          variables: 2,
          subExpressions: [
            { symbol: 'P → Q', func: (a, b) => !a || b },
            { symbol: '(P → Q) ∧ P', func: (a, b) => (!a || b) && a }
          ]
        },
        'P → (Q → P)': { 
          symbol: 'P → (Q → P)', 
          func: (a, b) => !a || (!b || a),
          variables: 2,
          subExpressions: [
            { symbol: 'Q → P', func: (a, b) => !b || a }
          ]
        },
        '(P → (Q ∨ R)) → ((P → Q) ∨ (P → R))': { 
          symbol: '(P → (Q ∨ R)) → ((P → Q) ∨ (P → R))', 
          func: (a, b, c) => (!a || (b || c)) ? ((!a || b) || (!a || c)) : true,
          variables: 3,
          subExpressions: [
            { symbol: 'Q ∨ R', func: (a, b, c) => b || c },
            { symbol: 'P → (Q ∨ R)', func: (a, b, c) => !a || (b || c) },
            { symbol: 'P → Q', func: (a, b, c) => !a || b },
            { symbol: 'P → R', func: (a, b, c) => !a || c },
            { symbol: '(P → Q) ∨ (P → R)', func: (a, b, c) => (!a || b) || (!a || c) }
          ]
        },
        '((P ∨ Q) ∧ ¬P) → Q': { 
          symbol: '((P ∨ Q) ∧ ¬P) → Q', 
          func: (a, b) => ((a || b) && !a) ? b : true,
          variables: 2,
          subExpressions: [
            { symbol: 'P ∨ Q', func: (a, b) => a || b },
            { symbol: '¬P', func: (a, b) => !a },
            { symbol: '(P ∨ Q) ∧ ¬P', func: (a, b) => (a || b) && !a }
          ]
        },
        '(P ↔ Q) → ((P → Q) ∧ (Q → P))': { 
          symbol: '(P ↔ Q) → ((P → Q) ∧ (Q → P))', 
          func: (a, b) => (a === b) ? ((!a || b) && (!b || a)) : true,
          variables: 2,
          subExpressions: [
            { symbol: 'P ↔ Q', func: (a, b) => a === b },
            { symbol: 'P → Q', func: (a, b) => !a || b },
            { symbol: 'Q → P', func: (a, b) => !b || a },
            { symbol: '(P → Q) ∧ (Q → P)', func: (a, b) => (!a || b) && (!b || a) }
          ]
        }
      };
      
  return (
    <>
    <Head>
  <title>Tautologies Truth Tables | Learn Math Class</title>
  <meta name="description" content="Truth Tables Calculator and Guide" />
  <meta name="keywords" content={keyWords.join(', ')} />
  <link rel="canonical" href="https://www.learnmathclass.com/tables/truth-tables/tautologies" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta property="og:title" content="Tautologies Truth Tables | Learn Math Class" />
  <meta property="og:description" content="Truth Tables Calculator and Guide" />
  <meta property="og:url" content="https://www.learnmathclass.com/tables/truth-tables/tautologies" />
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
      <h1 className='title' style={{marginTop:'-30px', marginBottom:'-10px'}}>Tautologies Truth Tables</h1> 
      <VerticalButtonGroup 
      items={menuItems}
      width="100px"       
    //   backgroundColor ='#0070f3'
    //   color = 'white'
      isSticky={true}
      verticalOffset='200px'
      />

      <div style={{marginLeft:'20px',transform:'scale(0.95)',marginTop:'-40px'}}>
      <TruthTable operators={tautologyOperators} explanations={tautologyExplanations}/> 
      </div>
      <br/> 
      <br/>
      <ScrollUpButton/> 
    </>
  )
}

export async function getStaticProps() {
  const keyWords = ['truth table','tautology truth table','tautology',
    'tautology examples'
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

  ]


  

  
  const tautologyExplanations = {
    'P ∨ ¬P': {
      text: "This [tautology](!/logic/propositional-logic/tautology) expresses that a proposition or its negation must always be true, capturing the principle of bivalence in classical logic. The expression evaluates to true for both possible truth values of P. It is a fundamental truth in propositional logic, showing that every statement must either hold or not hold, with no third option. This [tautology](!/logic/propositional-logic/tautology) is essential in establishing completeness and soundness in logical systems.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/equivalence-validator" }
      ]
    },
    '(P → Q) ∨ (Q → P)': {
      text: "This proposition is a [tautology](!/logic/propositional-logic/tautology) because, for any two propositions P and Q, at least one of the implications holds under every truth assignment. It demonstrates that between any two propositions, either the first implies the second or the second implies the first. This universality makes it a useful tool in comparing and ordering propositions in formal logic.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/equivalence-validator" }
      ]
    },
    '(P ∧ Q) → P': {
      text: "This [tautology](!/logic/propositional-logic/tautology) reflects that if both P and Q are true, then P must be true. The expression captures the nature of logical conjunction — when both components are assumed, either can be inferred individually. The implication also holds vacuously when the antecedent is false. This formula is used frequently in formal proofs and deductive reasoning systems.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/equivalence-validator" }
      ]
    },
    '((P → Q) ∧ (Q → R)) → (P → R)': {
      text: "This formula is a [tautology](!/logic/propositional-logic/tautology) expressing the transitivity of implication. If P implies Q and Q implies R, then it must follow that P implies R. The formula is true under all combinations of truth values for P, Q, and R. It is foundational in formal deduction and is widely used in mathematical proofs where multi-step reasoning is required.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/equivalence-validator" }
      ]
    },
    '((P → Q) ∧ P) → Q': {
      text: "This [tautology](!/logic/propositional-logic/tautology) captures the principle of modus ponens: from the implication P→Q and the affirmation of P, Q necessarily follows. It is a basic but powerful tool in formal proof systems and deductive logic. The formula evaluates to true in all possible combinations of P and Q, confirming its status as a [tautology](!/logic/propositional-logic/tautology).",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/equivalence-validator" }
      ]
    },
    'P → (Q → P)': {
      text: "This expression states that if P is true, then regardless of the truth value of Q, the implication Q→P holds. This [tautology](!/logic/propositional-logic/tautology) illustrates that a true statement remains true even in the context of additional assumptions. It holds in all cases and is used frequently in formal systems, particularly in structuring nested implications.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/equivalence-validator" }
      ]
    },
    '(P → (Q ∨ R)) → ((P → Q) ∨ (P → R))': {
      text: "This [tautology](!/logic/propositional-logic/tautology) expresses that if P implies a disjunction, then it must imply at least one of the disjuncts. The formula is logically valid under every truth value assignment. It is useful in constructive logic and formal reasoning, particularly when decomposing compound implications into simpler components.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/equivalence-validator" }
      ]
    },
    '((P ∨ Q) ∧ ¬P) → Q': {
      text: "This [tautology](!/logic/propositional-logic/tautology) reflects the pattern of disjunctive syllogism. If either P or Q is true, and P is known to be false, then Q must be true. The formula is logically valid in all cases and is frequently used in propositional proofs that rely on elimination of alternatives.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/equivalence-validator" }
      ]
    },
    '(P ↔ Q) → ((P → Q) ∧ (Q → P)': {
      text: "This formula is a [tautology](!/logic/propositional-logic/tautology) that defines the structure of logical equivalence. It shows that if P is logically equivalent to Q, then P implies Q and Q implies P. This bidirectional implication is essential in constructing definitions and proving equivalences between statements in formal logic.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/equivalence-validator" }
      ]
    },
    '(P → Q) ↔ (¬Q → ¬P)': {
      text: "This expression demonstrates that a statement ([tautology](!/logic/propositional-logic/tautology)) is logically equivalent to its contrapositive. The formula is true in all cases and is foundational in classical logic and mathematical proof strategies. The equivalence allows one to prove a statement by proving its contrapositive, which is often simpler or more direct.",
      links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/equivalence-validator" }
      ]
    },
    '(P ↔ Q) → ((P → Q) ∧ (Q → P))': {
  text: "This [tautology](!/logic/propositional-logic/tautology) demonstrates that logical equivalence (↔) can be expressed as the conjunction of two implications. If P is equivalent to Q, then P implies Q and Q implies P. This formal representation of biconditional logic is foundational in mathematical proofs and logical analysis, establishing that equivalence requires mutual implication in both directions.",
  links: [{ title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
    { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/equivalence-validator" }
  ]
}
  };
  
  return {
    props: {
      keyWords,
      tautologyExplanations,
      menuItems
    }
  }
}