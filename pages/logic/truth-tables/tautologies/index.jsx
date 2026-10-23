import Head from 'next/head'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import TruthTable from '@/app/components/logic-calculator/truth-tables/TruthTable'
import '../../../pages.css'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'

import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'


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
      {
        id: 'pitfalls',
        title: sectionsContent.pitfalls.title,
        link: sectionsContent.pitfalls.link,
        content: [sectionsContent.pitfalls.content]
      },
      // faq: rendered component — must be built here, not in getStaticProps
      {
        id: 'faq',
        title: sectionsContent.faq.title,
        link: ``,
        content: [
          <div key={'faq-wrap'} style={{width:'80%',margin:'auto'}}>
            <FAQSection
              faqQuestions={faqQuestions}
              theme={'leftBorder'}
              width={'100%'}
              openFirst={false}
            />
          </div>,
        ]
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Tautologies Truth Tables</h1> 

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
      text: "This [tautology](!/logic/propositional-logic/semantics/tautology) expresses that a proposition or its negation must always be true, capturing the law of excluded middle in classical logic. The expression evaluates to true for both possible truth values of P. It is a fundamental truth in propositional logic, showing that every statement must either hold or not hold, with no third option. This [tautology](!/logic/propositional-logic/semantics/tautology) is essential in establishing completeness and soundness in logical systems.",
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
      text: "This [tautology](!/logic/propositional-logic/semantics/tautology) expresses that if P implies a disjunction, then it must imply at least one of the disjuncts. The formula is logically valid under every truth value assignment. It holds in classical logic but not in constructive (intuitionistic) logic, and it is useful when decomposing compound implications into simpler components.",
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

Tautologies are also called logically valid formulas. They represent logical truths — statements whose truth depends entirely on their logical structure, not on the meaning of their components.

@academic[rule_corollary_plain:The negation of a tautology is a [contradiction](!/logic/propositional-logic/semantics/contradiction) (always false), and vice versa.]@

Tautologies play a central role in formal logic: they define the valid inference rules, establish equivalences between formulas, and serve as the axioms of many deductive systems. Recognizing tautologies is essential for constructing sound mathematical proofs.

Three marks travel with the idea and do not appear in truth tables themselves. The symbol ⊤ names the proposition that is true outright, ⊢P says P can be derived from no assumptions at all, and ⊨P says P holds under every interpretation. The last two look interchangeable and are not — one is about proof, the other about truth. All three are set out in [tautology notation](!/logic/propositional-logic/semantics/tautology#notation).

@academic[pitfall,aside:true,width:35%:Checking only some rows
Calling P → Q a tautology after the rows P = T, Q = T and P = F, Q = F, where it is T, misses the row P = T, Q = F, where it is F. A tautology must be T in all 2ⁿ rows.
[Read more](!#pitfalls)]@

Deciding whether a formula is a tautology is a finite task. A formula with n variables has 2ⁿ rows: two for a formula in P alone, four for one in P and Q, eight once R is added. Each row is evaluated on its own, and the verdict is read from the final column as a whole.`,
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
      content: `@academic[rule:Law of excluded middle
The formula P ∨ ¬P states that for any proposition P, either P is true or its negation ¬P is true. There is no third option.]@

This is the law of excluded middle (tertium non datur), one of the three classical laws of thought alongside the law of non-[contradiction](!/logic/propositional-logic/semantics/contradiction) and the law of identity.

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
      content: `@academic[rule:Conjunction elimination
The formula (P ∧ Q) → P states that if both P and Q are true, then P is true.]@

This is the simplification rule (or conjunction elimination): from a conjunction, either conjunct can be inferred.

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

Hypothetical syllogism is the logical basis for chain reasoning in mathematics: proving A → B → C → D by establishing each link separately.

@academic[pitfall,aside:true,width:35%:Chaining through a shared consequent
From P → Q and R → Q, concluding P → R fails at P = T, Q = T, R = F: both premises are T, but P → R is F. Q must be the consequent of the first link and the antecedent of the second, as in P → Q and Q → R.
[Read more](!#pitfalls)]@

In a longer proof the links of a chain are often established far apart, in separate lemmas or steps, and joined only at the end. Joining them means keeping the outer propositions, P and R, and dropping the middle one, Q, that the two links share.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj7: {
      title: `((P → Q) ∧ P) → Q: Modus Ponens`,
      content: `@academic[rule:Modus Ponens
Modus ponens is the most fundamental rule of inference in deductive logic: if P → Q is true and P is true, then Q must be true.]@

The Latin name means "method of affirming" — by affirming the antecedent, we affirm the consequent.

The truth table confirms this is a [tautology](!/logic/propositional-logic/semantics/tautology). The antecedent (P → Q) ∧ P is true only in one row: P = T, Q = T (since P → Q requires Q to be true when P is true). In that row, Q is indeed true. In all other rows, the antecedent is false and the outer implication holds vacuously.

@academic[pitfall,aside:true,width:35%:Affirming the consequent
Concluding P from P → Q and Q fails at P = F, Q = T: both premises are T, but P is F. The known fact has to be the antecedent, so ((P → Q) ∧ Q) → P is not a tautology.
[Read more](!#pitfalls)]@

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
      content: `@academic[rule:Disjunctive Syllogism
Disjunctive syllogism states: if at least one of P or Q is true, and P is false, then Q must be true.]@

The disjunction guarantees one disjunct, the negation eliminates one, and the remaining disjunct is forced.

The truth table confirms that this formula is a [tautology](!/logic/propositional-logic/semantics/tautology). The antecedent (P ∨ Q) ∧ ¬P is true only when P is false and Q is true — and in that case Q is indeed true. In all other rows the antecedent is false, making the outer implication vacuously true.

@academic[pitfall,aside:true,width:35%:Affirming a disjunct
Concluding ¬Q from P ∨ Q and P fails at P = T, Q = T: both premises are T, but ¬Q is F. The disjunction is inclusive, so only a false disjunct lets the other one be concluded.
[Read more](!#pitfalls)]@

Disjunctive syllogism is one of the most commonly used inference rules in natural deduction and everyday reasoning. It formalizes the intuitive argument: "it&apos;s one or the other; it&apos;s not this one; therefore it&apos;s the other."`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj11: {
      title: `(P ↔ Q) → ((P → Q) ∧ (Q → P)): Biconditional Decomposition`,
      content: `This [tautology](!/logic/propositional-logic/semantics/tautology) states that if the biconditional P ↔ Q is true (P and Q have the same truth value), then P implies Q and Q implies P. The [biconditional](!/logic/truth-tables/biconditionals) decomposes into the conjunction of both directions of implication.

The biconditional P ↔ Q is true when P and Q share the same truth value (both true or both false). In both cases, P → Q and Q → P are each true, so their conjunction is true and the outer implication holds. When P ↔ Q is false (P and Q differ), the outer implication is vacuously true.

@academic[pitfall,aside:true,width:35%:Proving only one direction
Stopping after a proof of P → Q does not establish P ↔ Q: at P = F, Q = T, P → Q is T but P ↔ Q is F. That row is ruled out only by Q → P, which is F there.
[Read more](!#pitfalls)]@

This decomposition is the standard way to prove a biconditional in mathematics: prove the forward direction (P → Q) and the backward direction (Q → P) separately, then combine them.`,
      before: ``,
      after: ``,
      link: ``,
    },
    pitfalls: {
      title: `Common Pitfalls`,
      content: `Five slips account for many wrong answers when tautologies are checked or used as inference rules. Each is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Checking only some rows**

A formula is evaluated on a few rows, comes out T in each of them, and is declared a tautology. A single F row anywhere in the table is enough to show that it is not one.

Wrong working: for P → Q, take P = T, Q = T: T → T is T. Take P = F, Q = F: F → F is T. Both rows give T, so P → Q is a tautology.

Right working: two variables give four rows. For (P, Q) equal to (T, T), (T, F), (F, T), (F, F), the formula P → Q takes the values T, F, T, T. The row (T, F) gives F, so P → Q is not a tautology. By contrast, (P ∧ Q) → P is T in all four rows.

Why it happens: the rows where the variables share a value are the easiest to evaluate, and a run of T values feels like evidence. A truth table settles the question only when it is complete.

How to check: count the rows first, 2ⁿ for n variables, and fill in every one. To refute a claimed tautology, search directly for an F row; for an implication, that is a row where the antecedent is T and the consequent is F.

**Chaining through a shared consequent**

Two implications that end in the same proposition are joined as if they formed a chain. P → Q and R → Q both lead into Q, so nothing in them leads from P to R.

Wrong working: "If it rains, the ground is wet. If the sprinkler runs, the ground is wet. So if it rains, the sprinkler runs." In symbols, ((P → Q) ∧ (R → Q)) → (P → R).

Right working: at P = T, Q = T, R = F, the premise P → Q is T → T, which is T, and R → Q is F → T, which is T, so the antecedent is T. The conclusion P → R is T → F, which is F. The formula is F in that row and is not a tautology. Hypothetical syllogism needs Q → R, with Q as the antecedent of the second link; then ((P → Q) ∧ (Q → R)) → (P → R) is T in all eight rows.

Why it happens: both premises mention Q, and the shared letter looks like the link between them. In syllogistic logic the same pattern is known as the fallacy of the undistributed middle.

How to check: write the links one under the other; the consequent of each line must be the antecedent of the next. Or test a row with P = T and R = F, where the conclusion is F: if both premises can be T there, the chain fails.

**Affirming the consequent**

From a rule P → Q and the fact Q, the conclusion P is drawn. Modus ponens works only from the antecedent; knowing the consequent says nothing about P.

Wrong working: "If it rains, the ground is wet. The ground is wet. So it rained." In symbols, ((P → Q) ∧ Q) → P.

Right working: at P = F, Q = T, the premise P → Q is F → T, which is T, and Q is T, so the antecedent is T, while the conclusion P is F. The formula is F in that row, so it is not a tautology: the ground can be wet from a sprinkler. Modus ponens, ((P → Q) ∧ P) → Q, is T in all four rows.

Why it happens: both arguments combine an implication with one of its parts, and the rule is remembered as "the implication plus one part gives the other part".

How to check: look for a row where the premises are T and the conclusion is F. For a conclusion P, try P = F: with Q = T both premises hold, so the argument is invalid.

**Affirming a disjunct**

From P ∨ Q and P, the conclusion ¬Q is drawn, as if "or" meant "one but not both".

Wrong working: "The light is on or the fan is on. The light is on. So the fan is off." In symbols, ((P ∨ Q) ∧ P) → ¬Q.

Right working: at P = T, Q = T, the premise P ∨ Q is T and P is T, so the antecedent is T, while the conclusion ¬Q is F. The formula is F in that row. The connective ∨ is inclusive, so P ∨ Q allows both disjuncts to be true. Disjunctive syllogism uses a false disjunct instead: ((P ∨ Q) ∧ ¬P) → Q is T in all four rows.

Why it happens: everyday "or" often means one or the other but not both, as in "tea or coffee", so knowing one alternative seems to rule out the other.

How to check: test the row where both disjuncts are T. If the conclusion fails there, the argument relied on an exclusive or.

**Proving only one direction**

To prove P ↔ Q, only the forward direction P → Q is proved, and the biconditional is claimed.

Wrong working: from "if n is divisible by 4 then n is even", conclude "n is divisible by 4 if and only if n is even".

Right working: at P = F, Q = T (for example n = 6, which is even but not divisible by 4), the formula P → Q is F → T, which is T, while P ↔ Q is F. The backward direction Q → P is T → F, which is F in that row, and it is the part that was never proved. Only P → Q and Q → P together give P ↔ Q, since (P → Q) ∧ (Q → P) has the same truth table as P ↔ Q.

Why it happens: the forward direction is often the one stated first, or the easier one, and once it is done the proof feels complete.

How to check: before writing "if and only if", make sure the proof has two parts, one for each arrow. A quick test: look for a case where Q is true and P is false, such as n = 6 in the example.`,
      before: ``,
      after: ``,
      link: ``,
    },
    faq: {
      title: `Tautologies FAQ`,
    },
  }

  // FAQ pass: cut the five questions whose own section h2 names the pattern and
  // defines it in the first line (tautology, excluded middle, modus ponens,
  // hypothetical syllogism, disjunctive syllogism), the contingency question
  // (contingency is never defined on this page) and conjunction elimination
  // (no search demand). Kept the proof-method question; invented two from
  // buried content in obj3, obj4 and obj8.
  const faqQuestions = {
    obj1: {
      question: "How do you prove a formula is a tautology?",
      answer: "Construct its truth table and verify that the final column is true in every row. If the formula has n variables, the table has 2ⁿ rows. If all rows evaluate to true, the formula is a tautology. Alternatively, use algebraic simplification or formal proof. Test any formula yourself in the [truth table generator](!/logic/truth-tables).",
      sectionId: "1"
    },
    obj2: {
      question: "Why does intuitionistic logic reject the law of excluded middle?",
      answer: "Intuitionistic logic demands constructive proof: asserting P ∨ ¬P requires actually proving P or proving ¬P. For statements where neither has been established — an unsolved conjecture, for instance — the disjunction cannot be asserted. Classical logic, by contrast, accepts P ∨ ¬P for every proposition on the grounds that no third truth value exists. The disagreement marks the main divide between the two systems.",
      sectionId: "3"
    },
    obj3: {
      question: "What are the paradoxes of material implication?",
      answer: "Two tautologies strike most people as wrong on first sight: (P → Q) ∨ (Q → P), which says that of any two propositions one implies the other, and P → (Q → P), which says a true proposition is implied by anything. Both follow from the truth-table definition of the conditional, where a false antecedent makes the whole implication true. They signal no deep connection between the statements — only how material implication is defined.",
      sectionId: "4"
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