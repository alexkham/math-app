import Head from 'next/head'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import TruthTable from '@/app/components/logic-calculator/truth-tables/TruthTable'
import '../../../pages.css'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'

import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export default function ContradictionsTruthTablesPage({ keyWords, contradictionExplanations, menuItems, seoData, faqQuestions, schemas, sectionsContent }) {

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

    const genericSections = [
      {
        id: '1',
        title: sectionsContent.obj1.title,
        link: sectionsContent.obj1.link,
        content: [sectionsContent.obj1.content]
      },
      {
        id: '2',
        title: sectionsContent.obj2.title,
        link: sectionsContent.obj2.link,
        content: [sectionsContent.obj2.content]
      },
      {
        id: '3',
        title: sectionsContent.obj3.title,
        link: sectionsContent.obj3.link,
        content: [sectionsContent.obj3.content]
      },
      {
        id: '4',
        title: sectionsContent.obj4.title,
        link: sectionsContent.obj4.link,
        content: [sectionsContent.obj4.content]
      },
      {
        id: '5',
        title: sectionsContent.obj5.title,
        link: sectionsContent.obj5.link,
        content: [sectionsContent.obj5.content]
      },
      {
        id: '6',
        title: sectionsContent.obj6.title,
        link: sectionsContent.obj6.link,
        content: [sectionsContent.obj6.content]
      },
      {
        id: '7',
        title: sectionsContent.obj7.title,
        link: sectionsContent.obj7.link,
        content: [sectionsContent.obj7.content]
      },
      {
        id: '8',
        title: sectionsContent.obj8.title,
        link: sectionsContent.obj8.link,
        content: [sectionsContent.obj8.content]
      },
      {
        id: '9',
        title: sectionsContent.obj9.title,
        link: sectionsContent.obj9.link,
        content: [sectionsContent.obj9.content]
      },
      {
        id: '10',
        title: sectionsContent.obj10.title,
        link: sectionsContent.obj10.link,
        content: [sectionsContent.obj10.content]
      },
      {
        id: '11',
        title: sectionsContent.obj11.title,
        link: sectionsContent.obj11.link,
        content: [sectionsContent.obj11.content]
      },
      {
        id: '12',
        title: sectionsContent.obj12.title,
        link: sectionsContent.obj12.link,
        content: [sectionsContent.obj12.content]
      },
    ]

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
      __html: JSON.stringify(schemas.learningResource)
    }}
  />

  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.breadcrumb)
    }}
  />

  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.faq)
    }}
  />
</Head>
      <br/>
      <br/>
      <br/>
      <br/>
      <Breadcrumb/>
      <OperaSidebar 
          side='right'
          sidebarWidth='45px'
          panelWidth='300px'
          iconColor='white'
          panelBackgroundColor='#f2f2f2'/> 
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Contradictions Truth Tables</h1> 

      <br/>
      <div style={{display: 'grid', gridTemplateColumns: '200px 1fr', gap: '0px', alignItems: 'start', paddingTop: '30px'}}>
        <div style={{marginTop: '40px'}}>
          <VerticalButtonGroup items={menuItems} width="200px" />
        </div>
        <TruthTable operators={contradictionOperators} explanations={contradictionExplanations}/>
      </div>
      <br/>
      <SectionTableOfContents sections={genericSections}
        showSecondaryNav={true}
        secondaryNavMode="siblings"
        secondaryNavTitle="More in this Section"
      />
      <br/>
      <Sections sections={genericSections}/>
      <br/> 
      <br/>
    </>
  )
}

export async function getStaticProps() {
  const keyWords = [
    'contradiction truth table',
    'logical contradiction',
    'P and not P',
    'unsatisfiable formula',
    'contradiction examples logic',
    'law of non-contradiction',
    'contradictory propositions',
    'always false formula',
    'inconsistent premises logic',
    'contradiction proof',
    'propositional logic contradiction',
    'self-contradictory statement',
    'contradiction vs tautology',
    'logical impossibility'
  ]

  const menuItems = [
    {
      title: "Basic Propositions",
      link: "/logic/truth-tables"
    },
    {
      title: "Implications",
      link: "/logic/truth-tables/implications"
    },
    {
      title: "Biconditionals",
      link: "/logic/truth-tables/biconditionals"
    },
    {
      title: "Tautologies",
      link: "/logic/truth-tables/tautologies"
    },
  ]

  const contradictionExplanations = {
    'P ∧ ¬P': {
      text: "This represents the simplest [contradiction](!/logic/propositional-logic/semantics/contradiction) in logic: a proposition and its negation cannot both be true simultaneously. This form is sometimes called the law of non-contradiction and is a fundamental principle in classical logic. No matter what truth value is assigned to P, the formula evaluates to false because a statement cannot be both true and false at the same time.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" },
        { title: "Read Full Explanation", link: "/logic/truth-tables/contradictions#3" }
      ]
    },
    '(P → Q) ∧ (P → ¬Q) ∧ P': {
      text: "This formula creates a [contradiction](!/logic/propositional-logic/semantics/contradiction) by asserting that P implies both Q and not-Q, while also asserting that P is true. When P is true, the implications force Q to be both true and false simultaneously, which is impossible. This contradiction demonstrates how inconsistent premises lead to logical impossibility.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" },
        { title: "Read Full Explanation", link: "/logic/truth-tables/contradictions#4" }
      ]
    },
    '(P ∨ Q) ∧ ¬P ∧ ¬Q': {
      text: "This [contradiction](!/logic/propositional-logic/semantics/contradiction) asserts that either P or Q must be true (through the disjunction P∨Q), while simultaneously claiming that both P and Q are false (through the conjunctions with ¬P and ¬Q). These claims directly contradict each other, making the entire formula unsatisfiable under any assignment of truth values.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" },
        { title: "Read Full Explanation", link: "/logic/truth-tables/contradictions#5" }
      ]
    },
    'P ↔ ¬P': {
      text: "This formula states that P is logically equivalent to its own negation, which is impossible. For the biconditional to be true, P and ¬P would need to have the same truth value. However, P and ¬P always have opposite truth values by definition, making this formula a [contradiction](!/logic/propositional-logic/semantics/contradiction) in all possible interpretations.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" },
        { title: "Read Full Explanation", link: "/logic/truth-tables/contradictions#6" }
      ]
    },
    '(P ∧ Q) ∧ (¬P ∨ ¬Q)': {
      text: "This [contradiction](!/logic/propositional-logic/semantics/contradiction) first asserts that both P and Q are true, then claims that at least one of them is false. These claims are mutually exclusive. The formula can be rewritten using De Morgan's laws to show that it's equivalent to claiming that P∧Q∧¬(P∧Q), which is clearly contradictory.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" },
        { title: "Read Full Explanation", link: "/logic/truth-tables/contradictions#7" }
      ]
    },
    '(P → Q) ∧ (Q → R) ∧ P ∧ ¬R': {
      text: "This formula creates a [contradiction](!/logic/propositional-logic/semantics/contradiction) through a chain of implications. It states that P implies Q, and Q implies R, while asserting that P is true and R is false. Following the chain: if P is true, then Q must be true; if Q is true, then R must be true. But the formula also claims R is false, creating an irreconcilable contradiction.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" },
        { title: "Read Full Explanation", link: "/logic/truth-tables/contradictions#8" }
      ]
    },
    '(P → Q) ∧ (Q → R) ∧ ¬R ∧ P': {
      text: "Similar to the previous [contradiction](!/logic/propositional-logic/semantics/contradiction), this formula establishes a chain of implications from P to R, while simultaneously asserting that P is true and R is false. The chain of implications forces R to be true when P is true, directly contradicting the claim that R is false.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" },
        { title: "Read Full Explanation", link: "/logic/truth-tables/contradictions#9" }
      ]
    },
    '(P ↔ Q) ∧ (P ↔ ¬Q)': {
      text: "This [contradiction](!/logic/propositional-logic/semantics/contradiction) asserts that P is logically equivalent to both Q and not-Q. This would require Q and not-Q to have the same truth value, which is impossible. The formula forces P to simultaneously equal both a statement and its negation, creating an irreconcilable logical conflict.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" },
        { title: "Read Full Explanation", link: "/logic/truth-tables/contradictions#10" }
      ]
    },
    '(P ∧ Q) ∧ (P ∧ ¬Q)': {
      text: "This formula directly contradicts itself by claiming that Q is both true and false while P is true. The first conjunction asserts that P and Q are both true, while the second conjunction claims that P is true and Q is false. Since Q cannot be simultaneously true and false, this formula is a [contradiction](!/logic/propositional-logic/semantics/contradiction).",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" },
        { title: "Read Full Explanation", link: "/logic/truth-tables/contradictions#11" }
      ]
    },
    '(¬(P → Q)) ∧ (P ∧ Q)': {
      text: "This [contradiction](!/logic/propositional-logic/semantics/contradiction) arises from the definition of material implication. The negation of (P→Q) is true only when P is true and Q is false. However, the second part of the formula asserts that both P and Q are true. These conditions cannot be satisfied simultaneously, making the formula a contradiction.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" },
        { title: "Read Full Explanation", link: "/logic/truth-tables/contradictions#12" }
      ]
    }
  };

  const sectionsContent = {
    obj1: {
      title: `What Is a Contradiction?`,
      content: `A [contradiction](!/logic/propositional-logic/semantics/contradiction) is a compound proposition that is false under every possible assignment of truth values to its variables. No matter what combination of true and false you assign, the formula always evaluates to false. In a truth table, the final column contains only F values.

Contradictions are also called unsatisfiable formulas — there is no interpretation that makes them true. They are the logical opposite of [tautologies](!/logic/propositional-logic/semantics/tautology): the negation of a contradiction is a tautology, and the negation of a tautology is a contradiction.

The simplest contradiction is P ∧ ¬P — a proposition and its negation conjoined. This expresses the law of non-contradiction, one of the three classical laws of thought. More complex contradictions arise from inconsistent sets of premises, broken implication chains, and conflicting equivalences.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj2: {
      title: `Contradictions in Proofs and Reasoning`,
      content: `Contradictions are not just logical curiosities — they are a powerful proof tool. Proof by [contradiction](!/logic/propositional-logic/semantics/contradiction) (reductio ad absurdum) works by assuming the negation of the desired conclusion and showing that this assumption leads to a contradiction. Since contradictions cannot be true, the assumption must be false, and the original statement must be true.

Contradictions also serve as a diagnostic tool for consistency. If a set of premises conjoined produces a contradiction, the premises are mutually inconsistent — they cannot all be true simultaneously. Identifying the source of the contradiction reveals which premises conflict.

In formal systems, the principle of explosion (ex falso quodlibet) states that from a contradiction, any statement can be derived. This makes contradictions maximally dangerous in a logical system: a single contradiction makes the entire system trivially provable and therefore useless.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj3: {
      title: `P ∧ ¬P: The Law of Non-Contradiction`,
      content: `P ∧ ¬P is the simplest possible [contradiction](!/logic/propositional-logic/semantics/contradiction): it asserts that a proposition P is both true and false at the same time. The truth table has only two rows, and both evaluate to false.

When P is true, ¬P is false, so the conjunction is false. When P is false, ¬P is true, but P itself is false, so the conjunction is again false. There is no escape — the formula is unsatisfiable.

The law of non-contradiction (that P ∧ ¬P is always false) is one of the foundational principles of classical logic. Together with the law of excluded middle (P ∨ ¬P is always true) and the law of identity, it forms the three classical laws of thought attributed to Aristotle.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj4: {
      title: `(P → Q) ∧ (P → ¬Q) ∧ P: Inconsistent Implications`,
      content: `This [contradiction](!/logic/propositional-logic/semantics/contradiction) arises from asserting three mutually inconsistent claims: P implies Q, P implies ¬Q, and P is true.

When P is true, the first [implication](!/logic/propositional-logic/semantics/implication) forces Q to be true. But the second implication forces Q to be false. Q cannot be both true and false, so no truth assignment satisfies all three conjuncts.

When P is false, both implications are vacuously true, but the third conjunct (P itself) is false, making the whole conjunction false. Either way, the formula is false.

This pattern illustrates a general principle: if a set of premises forces a variable to take contradictory values, the premises are inconsistent.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj5: {
      title: `(P ∨ Q) ∧ ¬P ∧ ¬Q: Denied Disjunction`,
      content: `This [contradiction](!/logic/propositional-logic/semantics/contradiction) asserts a disjunction (at least one of P or Q is true) while simultaneously denying both disjuncts (P is false and Q is false).

The disjunction P ∨ Q requires at least one of its components to be true. But ¬P and ¬Q together assert that both are false. These requirements are mutually exclusive — if both P and Q are false, the disjunction P ∨ Q is false, contradicting the first conjunct.

By De Morgan&apos;s law, ¬P ∧ ¬Q is equivalent to ¬(P ∨ Q). So the formula reduces to (P ∨ Q) ∧ ¬(P ∨ Q), which is the basic contradiction pattern X ∧ ¬X.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj6: {
      title: `P ↔ ¬P: Self-Contradictory Equivalence`,
      content: `The [biconditional](!/logic/truth-tables/biconditionals) P ↔ ¬P asserts that P and its negation have the same truth value. But by definition, P and ¬P always have opposite truth values — when one is true, the other is false.

When P is true, ¬P is false, and the biconditional T ↔ F evaluates to false. When P is false, ¬P is true, and F ↔ T evaluates to false. Both rows are false — this is a [contradiction](!/logic/propositional-logic/semantics/contradiction).

Compare this with the tautology P ↔ ¬¬P (double negation), where the two sides always agree. Here the two sides always disagree, producing the opposite result.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj7: {
      title: `(P ∧ Q) ∧ (¬P ∨ ¬Q): Conjunction Meets De Morgan`,
      content: `This [contradiction](!/logic/propositional-logic/semantics/contradiction) asserts that both P and Q are true (via P ∧ Q) while also asserting that at least one of them is false (via ¬P ∨ ¬Q).

By De Morgan&apos;s law, ¬P ∨ ¬Q is equivalent to ¬(P ∧ Q). So the formula is equivalent to (P ∧ Q) ∧ ¬(P ∧ Q) — the basic contradiction pattern X ∧ ¬X where X = P ∧ Q.

The truth table has four rows, and the result is false in all of them. In the only row where P ∧ Q is true (T, T), ¬P ∨ ¬Q is false. In all other rows, P ∧ Q is already false.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj8: {
      title: `(P → Q) ∧ (Q → R) ∧ P ∧ ¬R: Broken Implication Chain`,
      content: `This [contradiction](!/logic/propositional-logic/semantics/contradiction) constructs a chain of [implications](!/logic/propositional-logic/semantics/implication) (P → Q → R) while asserting the start of the chain (P is true) and denying its end (R is false).

The chain forces a cascade: P is true, so Q must be true (by P → Q). Q is true, so R must be true (by Q → R). But the formula also asserts ¬R — R is false. This is irreconcilable.

The truth table has eight rows (three variables), and all evaluate to false. This pattern generalizes: any implication chain P → Q₁ → Q₂ → ··· → Qₙ combined with P ∧ ¬Qₙ is a contradiction, because the chain forces Qₙ to be true while ¬Qₙ asserts it is false.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj9: {
      title: `(P → Q) ∧ (Q → R) ∧ ¬R ∧ P: Reordered Chain Contradiction`,
      content: `This formula is logically identical to the previous one — the conjuncts ¬R and P are simply reordered. Conjunction is commutative: the order of conjuncts does not affect the truth value.

The [contradiction](!/logic/propositional-logic/semantics/contradiction) arises for exactly the same reason: the implication chain P → Q → R forces R to be true when P is true, but ¬R asserts R is false. Both formulas are included to illustrate that reordering conjuncts does not resolve inconsistency.

In practice, recognizing that two seemingly different formulas are logically equivalent (differing only in conjunct order) is an important skill in logical analysis and proof checking.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj10: {
      title: `(P ↔ Q) ∧ (P ↔ ¬Q): Conflicting Equivalences`,
      content: `This [contradiction](!/logic/propositional-logic/semantics/contradiction) asserts that P is equivalent to Q and also equivalent to ¬Q. If P ↔ Q holds, then P and Q have the same truth value. If P ↔ ¬Q also holds, then P and ¬Q have the same truth value. But Q and ¬Q always differ, so P cannot match both.

When P and Q are both true: P ↔ Q is true, but P ↔ ¬Q becomes T ↔ F = false. When P is true and Q is false: P ↔ Q becomes T ↔ F = false. Every row fails at least one [biconditional](!/logic/truth-tables/biconditionals).

This pattern generalizes: asserting equivalence with both a proposition and its negation is always contradictory.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj11: {
      title: `(P ∧ Q) ∧ (P ∧ ¬Q): Asserting Q and ¬Q`,
      content: `This [contradiction](!/logic/propositional-logic/semantics/contradiction) directly asserts Q and ¬Q simultaneously (under the assumption that P is true). The first conjunct says P and Q are both true. The second says P is true and Q is false.

Extracting Q from the first conjunct and ¬Q from the second gives Q ∧ ¬Q — the basic contradiction. The presence of P in both conjuncts is a red herring; the real conflict is between Q and ¬Q.

The formula can be rewritten as P ∧ (Q ∧ ¬Q) by factoring out P. Since Q ∧ ¬Q is always false, the entire conjunction is always false regardless of P.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj12: {
      title: `(¬(P → Q)) ∧ (P ∧ Q): Negated Implication Conflict`,
      content: `This [contradiction](!/logic/propositional-logic/semantics/contradiction) exploits the definition of material [implication](!/logic/propositional-logic/semantics/implication). The negation ¬(P → Q) is true only when P is true and Q is false (since P → Q ≡ ¬P ∨ Q, its negation is P ∧ ¬Q).

But the second conjunct P ∧ Q asserts that both P and Q are true. The first conjunct requires Q to be false; the second requires Q to be true. These conditions are mutually exclusive.

The formula reduces to (P ∧ ¬Q) ∧ (P ∧ Q) = P ∧ (¬Q ∧ Q) = P ∧ ⊥ = ⊥. The conflict between Q and ¬Q makes the formula unsatisfiable.`,
      before: ``,
      after: ``,
      link: ``,
    },
  }

  const faqQuestions = {
    obj1: {
      question: "What is a contradiction in logic?",
      answer: "A contradiction is a formula that is false under every possible assignment of truth values to its variables. The simplest example is P ∧ ¬P — a proposition and its negation cannot both be true. Contradictions are also called unsatisfiable formulas."
    },
    obj2: {
      question: "What is the law of non-contradiction?",
      answer: "The law of non-contradiction states that a proposition and its negation cannot both be true at the same time: P ∧ ¬P is always false. It is one of the three classical laws of thought and a foundational principle in logic and mathematics."
    },
    obj3: {
      question: "How do you identify a contradiction in a truth table?",
      answer: "A formula is a contradiction if its final column in the truth table contains only false values for every row. No matter what combination of truth values you assign to the variables, the formula always evaluates to false."
    },
    obj4: {
      question: "What is the difference between a contradiction and a tautology?",
      answer: "A tautology is always true under every truth value assignment; a contradiction is always false. They are logical opposites — the negation of a tautology is a contradiction, and the negation of a contradiction is a tautology."
    },
    obj5: {
      question: "How are contradictions used in proofs?",
      answer: "Proof by contradiction (reductio ad absurdum) assumes the negation of the desired conclusion and derives a contradiction, proving the original statement must be true. If assuming ¬P leads to a contradiction, then P must hold."
    },
    obj6: {
      question: "Can inconsistent premises produce a contradiction?",
      answer: "Yes. When premises are mutually inconsistent — such as P → Q, P → ¬Q, and P all being asserted together — their conjunction is a contradiction. No truth value assignment can satisfy all premises simultaneously."
    },
    obj7: {
      question: "What does it mean for a formula to be unsatisfiable?",
      answer: "An unsatisfiable formula has no truth value assignment that makes it true. Unsatisfiable and contradiction mean the same thing: the formula is false in every possible interpretation."
    },
    obj8: {
      question: "Why does P ↔ ¬P produce a contradiction?",
      answer: "The biconditional P ↔ ¬P requires P and ¬P to share the same truth value. But by definition P and ¬P always have opposite values — when P is true, ¬P is false, and vice versa — so the biconditional is always false."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Contradiction Truth Tables",
      "description": "Explore contradiction truth tables with interactive calculator. Learn why P ∧ ¬P is always false, identify unsatisfiable formulas, and understand proof by contradiction and inconsistent premises.",
      "url": "https://www.learnmathclass.com/logic/truth-tables/contradictions",
      "inLanguage": "en-US",
      "learningResourceType": "Interactive Tool",
      "educationalLevel": "High School, College",
      "educationalUse": "Learning",
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student"
      },
      "about": {
        "@type": "Thing",
        "name": "Contradiction Truth Tables"
      },
      "teaches": [
        "Contradictions as always-false formulas",
        "The law of non-contradiction (P ∧ ¬P)",
        "Identifying contradictions via truth tables",
        "Contradictions from inconsistent premises",
        "Implication chains leading to contradictions",
        "Relationship between contradictions and tautologies"
      ],
      "keywords": keyWords.join(", "),
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString()
    },

    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.learnmathclass.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Logic",
          "item": "https://www.learnmathclass.com/logic"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Truth Tables",
          "item": "https://www.learnmathclass.com/logic/truth-tables"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Contradiction Truth Tables",
          "item": "https://www.learnmathclass.com/logic/truth-tables/contradictions"
        }
      ]
    },

    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": Object.keys(faqQuestions).map(key => ({
        "@type": "Question",
        "name": faqQuestions[key].question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faqQuestions[key].answer
        }
      }))
    }
  }

  return {
    props: {
      keyWords,
      contradictionExplanations,
      menuItems,
      sectionsContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Contradiction Truth Tables: Always False | Learn Math Class",
        description: "Explore contradiction truth tables with interactive calculator. Learn why P ∧ ¬P is always false, identify unsatisfiable formulas, and understand proof by contradiction and inconsistent premises.",
        keywords: keyWords.join(", "),
        url: "/logic/truth-tables/contradictions",
        name: "Contradiction Truth Tables"
      },
    }
  }
}