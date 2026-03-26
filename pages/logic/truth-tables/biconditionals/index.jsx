import Head from 'next/head'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import TruthTable from '@/app/components/logic-calculator/truth-tables/TruthTable'
import '../../../pages.css'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'

import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'


export default function BiconditionalsTruthTablesPage({ keyWords, biconditionalExplanations, menuItems, seoData, faqQuestions, schemas, sectionsContent }) {

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
    ]

  return (
    <>
<Head>
  <title>{seoData.title}</title>
  <meta name="description" content={seoData.description} />
  <meta name="keywords" content={seoData.keywords} />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
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
      <h1 className='title' style={{marginTop:'-10px', marginBottom:'0px'}}>Biconditionals (Double Implications) Truth Tables</h1> 

      <br/>
      <div style={{display: 'grid', gridTemplateColumns: '200px 1fr', gap: '0px', alignItems: 'start', paddingTop: '30px'}}>
        <div style={{marginTop: '40px'}}>
          <VerticalButtonGroup items={menuItems} width="200px" />
        </div>
        <TruthTable operators={biconditionalOperators} explanations={biconditionalExplanations}/>
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
    'biconditional truth table',
    'logical biconditional',
    'double implication',
    'P if and only if Q',
    'biconditional operator',
    'logical equivalence truth table',
    'iff truth table',
    'biconditional tautology',
    'mutual implication',
    'contrapositive equivalence',
    'De Morgan biconditional',
    'double negation equivalence',
    'propositional logic biconditional',
    'biconditional examples'
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
      title: "Tautologies",
      link: "/logic/truth-tables/tautologies"
    },
    {
      title: "Contradictions",
      link: "/logic/truth-tables/contradictions"
    },
  ]

  const biconditionalExplanations = {
    'P ↔ Q': {
      text: "This formula represents the most basic biconditional relationship in propositional logic. It states that P and Q must have the same truth value - both true or both false. The biconditional is equivalent to the conjunction of two implications (P→Q) ∧ (Q→P), demonstrating that logical equivalence requires mutual implication. This fundamental relation is used to establish definitions and equivalences in formal logical systems.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" },
        { title: "Read Full Explanation", link: "/logic/truth-tables/biconditionals#3" }
      ]
    },
    '(P ↔ Q) ↔ (¬P ↔ ¬Q)': {
      text: "This [tautology](!/logic/propositional-logic/semantics/tautology) demonstrates that a biconditional relationship is preserved under negation. If P is equivalent to Q, then not-P is equivalent to not-Q, and vice versa. This illustrates an important symmetry in classical logic, showing that logical equivalence is preserved when we negate both sides of an equivalence. The expression is true for all possible truth values of P and Q, confirming its status as a [tautology](!/logic/propositional-logic/semantics/tautology).",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" },
        { title: "Read Full Explanation", link: "/logic/truth-tables/biconditionals#4" }
      ]
    },
    '(P ↔ Q) ↔ ((P → Q) ∧ (Q → P))': {
      text: "This [tautology](!/logic/propositional-logic/semantics/tautology) demonstrates that logical equivalence (↔) can be expressed as the conjunction of two implications. If P is equivalent to Q, then P implies Q and Q implies P. This formal representation of biconditional logic is foundational in mathematical proofs and logical analysis, establishing that equivalence requires mutual implication in both directions.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" },
        { title: "Read Full Explanation", link: "/logic/truth-tables/biconditionals#5" }
      ]
    },
    '((P ↔ Q) ∧ (Q ↔ R)) ↔ (P ↔ R)': {
      text: "This [tautology](!/logic/propositional-logic/semantics/tautology) illustrates the transitivity property of logical equivalence. If P is equivalent to Q, and Q is equivalent to R, then P must be equivalent to R. This principle is central to constructing chains of equivalent statements in formal proofs and mathematical reasoning. The formula is valid for all possible combinations of truth values, confirming its status as a fundamental logical truth.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" },
        { title: "Read Full Explanation", link: "/logic/truth-tables/biconditionals#6" }
      ]
    },
    '(P ↔ Q) → ((P → Q) ∧ (Q → P))': {
      text: "This [tautology](!/logic/propositional-logic/semantics/tautology) demonstrates that logical equivalence (↔) implies the conjunction of two implications. If P is equivalent to Q, then P implies Q and Q implies P. This formal representation of biconditional logic is foundational in mathematical proofs and logical analysis, establishing that equivalence requires mutual implication in both directions.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" },
        { title: "Read Full Explanation", link: "/logic/truth-tables/biconditionals#7" }
      ]
    },
    '(P → Q) ↔ (¬Q → ¬P)': {
      text: "This expression demonstrates that a conditional statement is logically equivalent to its contrapositive. The formula is a [tautology](!/logic/propositional-logic/semantics/tautology) that is true in all cases and is foundational in classical logic and mathematical proof strategies. The equivalence allows one to prove a statement by proving its contrapositive, which is often simpler or more direct. This principle is frequently used in indirect proofs and logical reasoning.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" },
        { title: "Read Full Explanation", link: "/logic/truth-tables/biconditionals#8" }
      ]
    },
    'P ↔ ¬¬P': {
      text: "This [tautology](!/logic/propositional-logic/semantics/tautology) illustrates the double negation principle in classical logic. It states that a proposition P is logically equivalent to its double negation (not not P). This principle distinguishes classical logic from intuitionistic logic, where double negation elimination is not universally accepted. The formula is true for all possible truth values of P, confirming its status as a fundamental logical truth.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" },
        { title: "Read Full Explanation", link: "/logic/truth-tables/biconditionals#9" }
      ]
    },
    '(P ∧ Q) ↔ ¬(¬P ∨ ¬Q)': {
      text: "This [tautology](!/logic/propositional-logic/semantics/tautology) expresses one of De Morgan's laws in the form of a biconditional. It demonstrates that the conjunction of two propositions is logically equivalent to the negation of the disjunction of their negations. This equivalence is fundamental in simplifying logical expressions and is widely used in circuit design, formal proofs, and mathematical reasoning. The formula is valid for all possible combinations of truth values.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: "/logic/propositional-logic/semantics/equivalence-validator" },
        { title: "Read Full Explanation", link: "/logic/truth-tables/biconditionals#10" }
      ]
    }
  };

  const sectionsContent = {
    obj1: {
      title: `What Is a Biconditional?`,
      content: `The biconditional P ↔ Q (read "P if and only if Q") is a compound proposition that is true exactly when P and Q have the same truth value — both true or both false. It is false when they differ.

The biconditional is equivalent to the conjunction of two conditionals: P ↔ Q ≡ (P → Q) ∧ (Q → P). This means P is both sufficient and necessary for Q. In mathematics, "if and only if" (abbreviated iff) signals that a definition or characterization is being given — the two sides are interchangeable.

The truth table for P ↔ Q has two true rows (TT and FF) and two false rows (TF and FT). This symmetric structure reflects the fact that the biconditional treats P and Q identically — P ↔ Q is the same as Q ↔ P.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj2: {
      title: `Biconditionals and Logical Equivalence`,
      content: `A biconditional P ↔ Q that is a [tautology](!/logic/propositional-logic/semantics/tautology) — true in every row of its truth table — establishes that P and Q are logically equivalent. Logical equivalence means the two formulas have identical truth tables: they agree on every possible input.

Many of the formulas on this page are tautological biconditionals. For example, (P ↔ Q) ↔ ((P → Q) ∧ (Q → P)) is true in every row, confirming that "if and only if" and "mutual [implication](!/logic/propositional-logic/semantics/implication)" mean exactly the same thing.

Key properties of the biconditional include symmetry (P ↔ Q ≡ Q ↔ P), transitivity (if P ↔ Q and Q ↔ R then P ↔ R), and preservation under negation ((P ↔ Q) ↔ (¬P ↔ ¬Q)). These properties make the biconditional the natural connective for expressing equivalences in formal systems.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj3: {
      title: `P ↔ Q: The Basic Biconditional`,
      content: `P ↔ Q is the fundamental biconditional. It asserts that P and Q share the same truth value. When both are true, the biconditional is true. When both are false, it is also true. When they differ, it is false.

The decomposition P ↔ Q ≡ (P → Q) ∧ (Q → P) shows that the biconditional requires mutual [implication](!/logic/propositional-logic/semantics/implication): P implies Q (the "only if" direction) and Q implies P (the "if" direction). This is why "if and only if" proofs in mathematics always have two parts — one for each direction.

The biconditional can also be expressed using other connectives: P ↔ Q ≡ (P ∧ Q) ∨ (¬P ∧ ¬Q), which directly states that either both hold or neither does.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj4: {
      title: `(P ↔ Q) ↔ (¬P ↔ ¬Q): Negation Preservation`,
      content: `This [tautology](!/logic/propositional-logic/semantics/tautology) states that if P is equivalent to Q, then ¬P is equivalent to ¬Q — and conversely. Negating both sides of an equivalence preserves the equivalence.

The proof is direct: P ↔ Q means P and Q have the same truth value. If both are true, then ¬P and ¬Q are both false — still matching. If both are false, then ¬P and ¬Q are both true — still matching. In either case ¬P ↔ ¬Q holds.

This symmetry under negation is a distinctive feature of the biconditional. It does not hold for the conditional: P → Q is not equivalent to ¬P → ¬Q (that would be the inverse, which is a common logical fallacy).`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj5: {
      title: `(P ↔ Q) ↔ ((P → Q) ∧ (Q → P)): Mutual Implication`,
      content: `This [tautology](!/logic/propositional-logic/semantics/tautology) formally establishes that the biconditional is identical to the conjunction of both directions of [implication](!/logic/propositional-logic/semantics/implication). P ↔ Q holds if and only if P → Q and Q → P both hold.

This equivalence is the standard definition of the biconditional in many logic textbooks. It also provides the standard proof strategy for biconditional statements: prove the forward direction (P → Q) and the backward direction (Q → P) separately.

The truth table confirms that both sides agree in all four rows. When P and Q match (TT or FF), both implications hold and the biconditional is true. When they differ (TF or FT), one implication fails and both the conjunction and the biconditional are false.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj6: {
      title: `((P ↔ Q) ∧ (Q ↔ R)) ↔ (P ↔ R): Transitivity`,
      content: `This [tautology](!/logic/propositional-logic/semantics/tautology) establishes that logical equivalence is transitive: if P is equivalent to Q and Q is equivalent to R, then P is equivalent to R.

The reasoning is straightforward. P ↔ Q means P and Q share a truth value. Q ↔ R means Q and R share a truth value. Therefore P and R share a truth value, giving P ↔ R.

Transitivity allows chaining equivalences in proofs: if you show A ↔ B, then B ↔ C, then C ↔ D, you can conclude A ↔ D. This is one of the most common proof patterns in mathematics — simplifying a complex statement step by step through a chain of equivalent forms.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj7: {
      title: `(P ↔ Q) → ((P → Q) ∧ (Q → P)): Decomposition`,
      content: `This [tautology](!/logic/propositional-logic/semantics/tautology) states that the biconditional implies mutual [implication](!/logic/propositional-logic/semantics/implication). If P ↔ Q holds, then both P → Q and Q → P hold. This is one direction of the full equivalence established in section 5.

The formula is vacuously true whenever P ↔ Q is false (the antecedent fails), and directly true whenever P ↔ Q holds (since the biconditional forces both implications).

While section 5 shows the biconditional is the conjunction of both implications (a biconditional equivalence), this formula shows only the forward direction (an implication). Both are tautologies, but they express different strengths of the same underlying relationship.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj8: {
      title: `(P → Q) ↔ (¬Q → ¬P): Contrapositive Equivalence`,
      content: `This [tautology](!/logic/propositional-logic/semantics/tautology) states that every conditional is logically equivalent to its contrapositive. P → Q and ¬Q → ¬P have identical truth tables — they are true and false in exactly the same rows.

The contrapositive equivalence is one of the most important results in propositional logic and one of the most used tools in mathematical proof. To prove "if P then Q," it is often easier to prove "if not Q then not P" — the two statements are logically identical.

Note that this is a biconditional [tautology](!/logic/propositional-logic/semantics/tautology): both directions hold. The conditional implies its contrapositive, and the contrapositive implies the original conditional. This is stronger than the converse or inverse relationships, which are not equivalent to the original.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj9: {
      title: `P ↔ ¬¬P: Double Negation`,
      content: `This [tautology](!/logic/propositional-logic/semantics/tautology) states that any proposition P is logically equivalent to its double negation ¬¬P. Negating a proposition twice returns it to its original truth value.

The truth table is trivial: when P is true, ¬P is false and ¬¬P is true — matching P. When P is false, ¬P is true and ¬¬P is false — again matching P.

Double negation elimination (from ¬¬P infer P) is accepted in classical logic but not in intuitionistic logic, where proving ¬¬P does not constructively establish P. This distinction is fundamental to the philosophy of mathematics and the debate between classical and constructive foundations.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj10: {
      title: `(P ∧ Q) ↔ ¬(¬P ∨ ¬Q): De Morgan&apos;s Law`,
      content: `This [tautology](!/logic/propositional-logic/semantics/tautology) expresses De Morgan&apos;s first law as a biconditional: the conjunction P ∧ Q is equivalent to the negation of the disjunction of the negations, ¬(¬P ∨ ¬Q).

Reading it plainly: "P and Q" is the same as "it is not the case that not-P or not-Q." If both P and Q hold, then neither ¬P nor ¬Q holds, so their disjunction is false and its negation is true. If either P or Q fails, the corresponding negation is true, the disjunction is true, and its negation is false.

De Morgan&apos;s laws (the second being P ∨ Q ↔ ¬(¬P ∧ ¬Q)) are essential tools in simplifying logical expressions, designing digital circuits, and converting between conjunctive and disjunctive normal forms.`,
      before: ``,
      after: ``,
      link: ``,
    },
  }

  const faqQuestions = {
    obj1: {
      question: "What is a biconditional in logic?",
      answer: "A biconditional (P ↔ Q) states that P and Q have the same truth value — both true or both false. It is equivalent to the conjunction of two conditionals: (P → Q) ∧ (Q → P), meaning each side implies the other."
    },
    obj2: {
      question: "What is the truth table for P ↔ Q?",
      answer: "P ↔ Q is true when both P and Q are true, or when both are false. It is false when P and Q have different truth values. This gives two true rows and two false rows in a two-variable truth table."
    },
    obj3: {
      question: "How is a biconditional related to mutual implication?",
      answer: "The biconditional P ↔ Q is logically equivalent to (P → Q) ∧ (Q → P). This means P if and only if Q: P is sufficient for Q and also necessary for Q. The equivalence is itself a tautology."
    },
    obj4: {
      question: "What does 'if and only if' mean in logic?",
      answer: "'If and only if' (abbreviated iff) expresses a biconditional. P if and only if Q means P implies Q and Q implies P — the two propositions are logically equivalent and always share the same truth value."
    },
    obj5: {
      question: "Why is the contrapositive equivalence a tautology?",
      answer: "(P → Q) ↔ (¬Q → ¬P) is a tautology because a conditional and its contrapositive always have the same truth value. This equivalence is foundational in proof strategies — proving the contrapositive is logically identical to proving the original statement."
    },
    obj6: {
      question: "What is the transitivity of biconditionals?",
      answer: "If P ↔ Q and Q ↔ R, then P ↔ R. This transitivity property lets you chain equivalences: if two propositions are each equivalent to a third, they are equivalent to each other."
    },
    obj7: {
      question: "How does De Morgan's law appear as a biconditional?",
      answer: "(P ∧ Q) ↔ ¬(¬P ∨ ¬Q) expresses De Morgan's law as a biconditional tautology. It states that the conjunction of P and Q is equivalent to the negation of the disjunction of their negations."
    },
    obj8: {
      question: "What is the double negation biconditional?",
      answer: "P ↔ ¬¬P is a tautology in classical logic stating that any proposition is equivalent to its double negation. This principle is accepted in classical logic but not in intuitionistic logic, where double negation elimination does not hold universally."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Biconditional Truth Tables",
      "description": "Explore biconditional (↔) truth tables with interactive calculator. Learn logical equivalence, mutual implication, contrapositive, De Morgan's law, double negation, and transitivity of biconditionals.",
      "url": "https://www.learnmathclass.com/logic/truth-tables/biconditionals",
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
        "name": "Biconditional Truth Tables"
      },
      "teaches": [
        "Biconditional (if and only if) truth values",
        "Equivalence of biconditional and mutual implication",
        "Contrapositive equivalence as a tautology",
        "Transitivity of logical equivalence",
        "De Morgan's law as a biconditional",
        "Double negation principle in classical logic"
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
          "name": "Biconditional Truth Tables",
          "item": "https://www.learnmathclass.com/logic/truth-tables/biconditionals"
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
      biconditionalExplanations,
      menuItems,
      sectionsContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Biconditional Truth Tables: Logic ↔ Guide | Learn Math Class",
        description: "Explore biconditional (↔) truth tables with interactive calculator. Learn logical equivalence, mutual implication, contrapositive, De Morgan's law, double negation, and transitivity of biconditionals.",
        keywords: keyWords.join(", "),
        url: "/logic/truth-tables/biconditionals",
        name: "Biconditional Truth Tables"
      },
    }
  }
}