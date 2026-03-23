import Head from 'next/head'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import TruthTable from '@/app/components/logic-calculator/truth-tables/TruthTable'
import '../../../pages.css'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'

import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'


export default function TautologiesTruthTablesPage({ seoData, keyWords, tautologyExplanations, menuItems, sectionsContent, faqQuestions, schemas }) {

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
      <h1 className='title' style={{marginTop:'-30px', marginBottom:'0px'}}>Tautologies Truth Tables</h1> 

      <br/>
      <div style={{display: 'grid', gridTemplateColumns: '200px 1fr', gap: '0px', alignItems: 'start', paddingTop: '30px'}}>
        <div style={{marginTop: '40px'}}>
          <VerticalButtonGroup items={menuItems} width="200px" />
        </div>
        <TruthTable operators={tautologyOperators} explanations={tautologyExplanations}/>
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
    'tautology truth table',
    'logical tautology',
    'always true formula',
    'law of excluded middle',
    'modus ponens tautology',
    'disjunctive syllogism',
    'hypothetical syllogism',
    'tautology examples logic',
    'propositional logic tautology',
    'valid formula',
    'logical validity',
    'tautology vs contradiction',
    'conjunction elimination',
    'contrapositive equivalence'
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
      title: "Contradictions",
      link: "/logic/truth-tables/contradictions"
    },
  ]

  const validatorLink = "/logic/propositional-logic/semantics/equivalence-validator"

  const tautologyExplanations = {
    'P ∨ ¬P': {
      text: "This [tautology](!/logic/propositional-logic/semantics/tautology) expresses that a proposition or its negation must always be true, capturing the principle of bivalence in classical logic. The expression evaluates to true for both possible truth values of P. It is a fundamental truth in propositional logic, showing that every statement must either hold or not hold, with no third option. This [tautology](!/logic/propositional-logic/semantics/tautology) is essential in establishing completeness and soundness in logical systems.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: validatorLink },
        { title: "Read Full Explanation", link: "/logic/truth-tables/tautologies#3" }
      ]
    },
    '(P → Q) ∨ (Q → P)': {
      text: "This proposition is a [tautology](!/logic/propositional-logic/semantics/tautology) because, for any two propositions P and Q, at least one of the implications holds under every truth assignment. It demonstrates that between any two propositions, either the first implies the second or the second implies the first. This universality makes it a useful tool in comparing and ordering propositions in formal logic.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: validatorLink },
        { title: "Read Full Explanation", link: "/logic/truth-tables/tautologies#4" }
      ]
    },
    '(P ∧ Q) → P': {
      text: "This [tautology](!/logic/propositional-logic/semantics/tautology) reflects that if both P and Q are true, then P must be true. The expression captures the nature of logical conjunction — when both components are assumed, either can be inferred individually. The implication also holds vacuously when the antecedent is false. This formula is used frequently in formal proofs and deductive reasoning systems.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: validatorLink },
        { title: "Read Full Explanation", link: "/logic/truth-tables/tautologies#5" }
      ]
    },
    '((P → Q) ∧ (Q → R)) → (P → R)': {
      text: "This formula is a [tautology](!/logic/propositional-logic/semantics/tautology) expressing the transitivity of implication. If P implies Q and Q implies R, then it must follow that P implies R. The formula is true under all combinations of truth values for P, Q, and R. It is foundational in formal deduction and is widely used in mathematical proofs where multi-step reasoning is required.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: validatorLink },
        { title: "Read Full Explanation", link: "/logic/truth-tables/tautologies#6" }
      ]
    },
    '((P → Q) ∧ P) → Q': {
      text: "This [tautology](!/logic/propositional-logic/semantics/tautology) captures the principle of modus ponens: from the implication P→Q and the affirmation of P, Q necessarily follows. It is a basic but powerful tool in formal proof systems and deductive logic. The formula evaluates to true in all possible combinations of P and Q, confirming its status as a [tautology](!/logic/propositional-logic/semantics/tautology).",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: validatorLink },
        { title: "Read Full Explanation", link: "/logic/truth-tables/tautologies#7" }
      ]
    },
    'P → (Q → P)': {
      text: "This expression states that if P is true, then regardless of the truth value of Q, the implication Q→P holds. This [tautology](!/logic/propositional-logic/semantics/tautology) illustrates that a true statement remains true even in the context of additional assumptions. It holds in all cases and is used frequently in formal systems, particularly in structuring nested implications.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: validatorLink },
        { title: "Read Full Explanation", link: "/logic/truth-tables/tautologies#8" }
      ]
    },
    '(P → (Q ∨ R)) → ((P → Q) ∨ (P → R))': {
      text: "This [tautology](!/logic/propositional-logic/semantics/tautology) expresses that if P implies a disjunction, then it must imply at least one of the disjuncts. The formula is logically valid under every truth value assignment. It is useful in constructive logic and formal reasoning, particularly when decomposing compound implications into simpler components.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: validatorLink },
        { title: "Read Full Explanation", link: "/logic/truth-tables/tautologies#9" }
      ]
    },
    '((P ∨ Q) ∧ ¬P) → Q': {
      text: "This [tautology](!/logic/propositional-logic/semantics/tautology) reflects the pattern of disjunctive syllogism. If either P or Q is true, and P is known to be false, then Q must be true. The formula is logically valid in all cases and is frequently used in propositional proofs that rely on elimination of alternatives.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: validatorLink },
        { title: "Read Full Explanation", link: "/logic/truth-tables/tautologies#10" }
      ]
    },
    '(P ↔ Q) → ((P → Q) ∧ (Q → P)': {
      text: "This formula is a [tautology](!/logic/propositional-logic/semantics/tautology) that defines the structure of logical equivalence. It shows that if P is logically equivalent to Q, then P implies Q and Q implies P. This bidirectional implication is essential in constructing definitions and proving equivalences between statements in formal logic.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: validatorLink },
        { title: "Read Full Explanation", link: "/logic/truth-tables/tautologies#11" }
      ]
    },
    '(P ↔ Q) → ((P → Q) ∧ (Q → P))': {
      text: "This [tautology](!/logic/propositional-logic/semantics/tautology) demonstrates that logical equivalence (↔) can be expressed as the conjunction of two implications. If P is equivalent to Q, then P implies Q and Q implies P. This formal representation of biconditional logic is foundational in mathematical proofs and logical analysis, establishing that equivalence requires mutual implication in both directions.",
      links: [
        { title: "Generate Your Own Logical Expressions and See the Truth Tables", link: "/logic/truth-tables" },
        { title: "Check our logic equivalence validator", link: validatorLink },
        { title: "Read Full Explanation", link: "/logic/truth-tables/tautologies#11" }
      ]
    }
  };

  const sectionsContent = {
    obj1: {
      title: `What Is a Tautology?`,
      content: `A [tautology](!/logic/propositional-logic/semantics/tautology) is a compound proposition that is true under every possible assignment of truth values to its variables. No matter what combination of true and false you assign, the formula always evaluates to true. In a truth table, the final column contains only T values.

Tautologies are also called logically valid formulas. They represent logical truths — statements whose truth depends entirely on their logical structure, not on the meaning of their components. The negation of a tautology is a [contradiction](!/logic/propositional-logic/semantics/contradiction) (always false), and vice versa.

Tautologies play a central role in formal logic: they define the valid inference rules, establish equivalences between formulas, and serve as the axioms of many deductive systems. Recognizing tautologies is essential for constructing sound mathematical proofs.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj2: {
      title: `Key Tautological Patterns`,
      content: `Several tautological patterns appear repeatedly in logic and mathematics:

• **Law of excluded middle**: P ∨ ¬P — every proposition is either true or false.

• **Modus ponens**: ((P → Q) ∧ P) → Q — if the implication and its antecedent both hold, the consequent follows.

• **Hypothetical syllogism**: ((P → Q) ∧ (Q → R)) → (P → R) — implication chains are transitive.

• **Disjunctive syllogism**: ((P ∨ Q) ∧ ¬P) → Q — eliminating one disjunct forces the other.

• **Conjunction elimination**: (P ∧ Q) → P — a conjunction implies each of its conjuncts.

• **Contrapositive equivalence**: (P → Q) ↔ (¬Q → ¬P) — an implication equals its contrapositive.

These patterns are the building blocks of deductive reasoning. Each corresponds to an inference rule used in natural deduction and other formal proof systems.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj3: {
      title: `P ∨ ¬P: Law of Excluded Middle`,
      content: `The formula P ∨ ¬P states that for any proposition P, either P is true or its [negation](!/logic/propositional-logic/syntax/negation) ¬P is true. There is no third option. This is the law of excluded middle (tertium non datur), one of the three classical laws of thought alongside the law of non-[contradiction](!/logic/propositional-logic/semantics/contradiction) and the law of identity.

The truth table has only two rows (P = T and P = F), and the result is T in both. When P is true, the first disjunct holds. When P is false, ¬P is true and the second disjunct holds.

The law of excluded middle is accepted in classical logic but rejected in intuitionistic logic, where asserting P ∨ ¬P requires a constructive proof of one disjunct. This distinction is fundamental to the philosophy of mathematics and the foundations of constructive reasoning.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj4: {
      title: `(P → Q) ∨ (Q → P): Implication Comparability`,
      content: `This [tautology](!/logic/propositional-logic/semantics/tautology) states that for any two propositions, at least one of them implies the other. This may seem surprising, but it follows directly from how material [implication](!/logic/propositional-logic/semantics/implication) works: P → Q is false only when P is true and Q is false, and Q → P is false only when Q is true and P is false. These two falsifying conditions cannot hold simultaneously.

If P and Q are both true, both implications hold. If both are false, both hold (vacuously). If one is true and the other false, exactly one implication holds. In every case, the disjunction is true.

This result does not mean that there is a meaningful logical relationship between any two propositions — it is a consequence of the truth-functional definition of material implication, where a false antecedent makes the conditional vacuously true.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj5: {
      title: `(P ∧ Q) → P: Conjunction Elimination`,
      content: `The formula (P ∧ Q) → P states that if both P and Q are true, then P is true. This is the simplification rule (or conjunction elimination): from a conjunction, either conjunct can be inferred.

The [tautology](!/logic/propositional-logic/semantics/tautology) holds vacuously when the antecedent P ∧ Q is false (any row where P or Q is false), and it holds directly when the antecedent is true (the single row where both P and Q are true, in which case P is certainly true).

Conjunction elimination is one of the most basic inference rules in natural deduction. Its symmetric counterpart (P ∧ Q) → Q is equally valid. Together they establish that a conjunction carries exactly the information of both its components.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj6: {
      title: `((P → Q) ∧ (Q → R)) → (P → R): Hypothetical Syllogism`,
      content: `This [tautology](!/logic/propositional-logic/semantics/tautology) expresses the transitivity of [implication](!/logic/propositional-logic/semantics/implication): if P implies Q and Q implies R, then P implies R. The implication chain can be extended to any length — if P → Q, Q → R, and R → S, then P → S.

The truth table has eight rows (three variables). In every row, the formula evaluates to true. The only way the outer implication could be false is if the antecedent ((P → Q) ∧ (Q → R)) were true and the consequent (P → R) were false. But P → R is false only when P is true and R is false, and if P is true and P → Q holds then Q is true, and if Q is true and Q → R holds then R is true — contradicting R being false.

Hypothetical syllogism is the logical basis for chain reasoning in mathematics: proving A → B → C → D by establishing each link separately.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj7: {
      title: `((P → Q) ∧ P) → Q: Modus Ponens`,
      content: `Modus ponens is the most fundamental rule of inference in deductive logic: if P → Q is true and P is true, then Q must be true. The Latin name means "method of affirming" — by affirming the antecedent, we affirm the consequent.

The truth table confirms this is a [tautology](!/logic/propositional-logic/semantics/tautology). The antecedent (P → Q) ∧ P is true only in one row: P = T, Q = T (since P → Q requires Q to be true when P is true). In that row, Q is indeed true. In all other rows, the antecedent is false and the outer implication holds vacuously.

Modus ponens is the engine of forward reasoning. Given a known fact P and a rule P → Q, we conclude Q. Nearly every mathematical proof uses modus ponens, often implicitly, when applying a theorem to specific premises.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj8: {
      title: `P → (Q → P): Positive Antecedent Principle`,
      content: `This [tautology](!/logic/propositional-logic/semantics/tautology) states that if P is true, then P is implied by any proposition Q. The nested [implication](!/logic/propositional-logic/semantics/implication) Q → P holds whenever P is true, regardless of Q&apos;s truth value, because a true consequent makes any conditional true.

When P is true, Q → P is true (true consequent). When P is false, the outer implication P → (Q → P) is vacuously true (false antecedent). Either way, the formula holds.

This principle reflects a property of material implication that can seem counterintuitive: a true proposition is implied by everything. In formal axiom systems (such as Hilbert-style systems), P → (Q → P) often appears as an axiom, establishing that truths can be freely "weakened" by additional hypotheses.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj9: {
      title: `(P → (Q ∨ R)) → ((P → Q) ∨ (P → R)): Implication Over Disjunction`,
      content: `This [tautology](!/logic/propositional-logic/semantics/tautology) states that if P implies a disjunction Q ∨ R, then P implies at least one of the disjuncts individually. The formula distributes implication over disjunction.

The proof is straightforward: if P is false, both P → Q and P → R are vacuously true, so the consequent holds. If P is true, then Q ∨ R must be true (by the antecedent), meaning at least one of Q or R is true. Whichever is true makes the corresponding implication (P → Q or P → R) true.

This principle is valid in classical logic. In intuitionistic logic, the result is more subtle because constructive disjunction requires knowing which disjunct holds, not merely that one does.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj10: {
      title: `((P ∨ Q) ∧ ¬P) → Q: Disjunctive Syllogism`,
      content: `Disjunctive syllogism states: if at least one of P or Q is true, and P is false, then Q must be true. The disjunction guarantees one disjunct, the negation eliminates one, and the remaining disjunct is forced.

The truth table confirms that this formula is a [tautology](!/logic/propositional-logic/semantics/tautology). The antecedent (P ∨ Q) ∧ ¬P is true only when P is false and Q is true — and in that case Q is indeed true. In all other rows the antecedent is false, making the outer implication vacuously true.

Disjunctive syllogism is one of the most commonly used inference rules in natural deduction and everyday reasoning. It formalizes the intuitive argument: "it&apos;s one or the other; it&apos;s not this one; therefore it&apos;s the other."`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj11: {
      title: `(P ↔ Q) → ((P → Q) ∧ (Q → P)): Biconditional Decomposition`,
      content: `This [tautology](!/logic/propositional-logic/semantics/tautology) states that if P and Q are logically equivalent (P ↔ Q), then P implies Q and Q implies P. The [biconditional](!/logic/propositional-logic/semantics/biconditional) decomposes into the conjunction of both directions of implication.

The biconditional P ↔ Q is true when P and Q share the same truth value (both true or both false). In both cases, P → Q and Q → P are each true, so their conjunction is true and the outer implication holds. When P ↔ Q is false (P and Q differ), the outer implication is vacuously true.

This decomposition is the standard way to prove a biconditional in mathematics: prove the forward direction (P → Q) and the backward direction (Q → P) separately, then combine them.`,
      before: ``,
      after: ``,
      link: ``,
    },
  }

  const faqQuestions = {
    obj1: {
      question: "What is a tautology in logic?",
      answer: "A tautology is a formula that is true under every possible assignment of truth values to its variables. Its truth table has only true values in the final column. The negation of a tautology is a contradiction."
    },
    obj2: {
      question: "What is the law of excluded middle?",
      answer: "The law of excluded middle states that P ∨ ¬P is always true — every proposition is either true or false with no third option. It is one of the classical laws of thought and is accepted in classical logic but rejected in intuitionistic logic."
    },
    obj3: {
      question: "What is modus ponens?",
      answer: "Modus ponens is the inference rule that from P → Q and P, we can conclude Q. The formula ((P → Q) ∧ P) → Q is a tautology, confirming that this rule is logically valid under every truth assignment."
    },
    obj4: {
      question: "What is hypothetical syllogism?",
      answer: "Hypothetical syllogism is the transitivity of implication: if P → Q and Q → R, then P → R. It allows chaining implications in multi-step proofs and is a tautology confirmed by truth table analysis."
    },
    obj5: {
      question: "What is disjunctive syllogism?",
      answer: "Disjunctive syllogism states that if P ∨ Q is true and P is false, then Q must be true. The formula ((P ∨ Q) ∧ ¬P) → Q is a tautology. It formalizes the process of eliminating one alternative to conclude the other."
    },
    obj6: {
      question: "How do you prove a formula is a tautology?",
      answer: "Construct its truth table and verify that the final column is true in every row. If the formula has n variables, the table has 2ⁿ rows. If all rows evaluate to true, the formula is a tautology. Alternatively, use algebraic simplification or formal proof."
    },
    obj7: {
      question: "What is the difference between a tautology and a contingency?",
      answer: "A tautology is true in every row of its truth table. A contingency is true in some rows and false in others — its truth value depends on the specific assignment. A contradiction is false in every row."
    },
    obj8: {
      question: "Why is conjunction elimination a tautology?",
      answer: "(P ∧ Q) → P is a tautology because whenever both P and Q are true, P is certainly true. When the conjunction is false, the implication holds vacuously. This justifies inferring either conjunct from a conjunction."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Tautology Truth Tables",
      "description": "Interactive truth tables for logical tautologies: law of excluded middle, modus ponens, hypothetical syllogism, disjunctive syllogism, conjunction elimination, and contrapositive equivalence.",
      "url": "https://www.learnmathclass.com/logic/truth-tables/tautologies",
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
        "name": "Tautology Truth Tables"
      },
      "teaches": [
        "Tautologies as always-true formulas",
        "Law of excluded middle (P ∨ ¬P)",
        "Modus ponens and conjunction elimination",
        "Hypothetical syllogism and implication transitivity",
        "Disjunctive syllogism and alternative elimination",
        "Biconditional decomposition into mutual implication"
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
          "name": "Tautology Truth Tables",
          "item": "https://www.learnmathclass.com/logic/truth-tables/tautologies"
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
      tautologyExplanations,
      menuItems,
      sectionsContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Tautology Truth Tables: Always True Formulas | Learn Math Class",
        description: "Interactive truth tables for logical tautologies: law of excluded middle, modus ponens, hypothetical syllogism, disjunctive syllogism, conjunction elimination, and contrapositive equivalence.",
        keywords: keyWords.join(", "),
        url: "/logic/truth-tables/tautologies",
        name: "Tautology Truth Tables"
      },
    }
  }
}