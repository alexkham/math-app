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
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import renderVennRegions from '@/app/utils/illustrations/logic/venn/vennRegions'
import { tableHeaders } from '@/app/styles/theme'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'


export default function BiconditionalsTruthTablesPage({demoUnits, conceptIntroFigures, keyWords, biconditionalExplanations, menuItems, seoData, faqQuestions, schemas, sectionsContent }) {

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
        '((P ↔ Q) ∧ (Q ↔ R)) → (P ↔ R)': { 
          symbol: '((P ↔ Q) ∧ (Q ↔ R)) → (P ↔ R)', 
          func: (a, b, c) => !(((a && b) || (!a && !b)) && ((b && c) || (!b && !c))) || ((a && c) || (!a && !c)),
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

    const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

    // Section 1 concept introduction — template I (naming).
    const conceptIntro = {
      beats: [
        {
          id: 'intuition',
          lead: `You already use statements that tie two facts together so tightly that neither can hold alone.`,
          content: [
            `"The lamp is lit exactly when the switch is on" rules out a lit lamp with the switch off, and a dark lamp with the switch on. Either both facts hold or neither does.`,
          ],
        },
        {
          id: 'example',
          kind: 'instance',
          lead: `The same tie turns up in arithmetic, in geometry and in everyday life.`,
          content: [
            `Each statement joins two parts, and in each one the parts stand or fall together.`,
            ciTable('placesTable'),
          ],
        },
        {
          id: 'shared',
          lead: `What they share: the whole statement is true exactly when its two parts have the same truth value.`,
          content: [
            `Both true: fine. Both false: also fine — an odd number with an odd last digit does not break the rule. Only a mismatch, one part true and the other false, makes the statement false.`,
            ciTable('iffTable'),
          ],
        },
        {
          id: 'definition',
          kind: 'definition',
          statement: `The [biconditional](!/logic/definitions#biconditional) $P \\leftrightarrow Q$, read "P if and only if Q", is the connective that is true exactly when $P$ and $Q$ have the same truth value.`,
          footer: `So "n is even ↔ the last digit of n is even" is a biconditional: true for every whole number n.`,
        },
        {
          id: 'kind',
          lead: `It is one of the five connectives: it builds a new formula from two, with its own truth table.`,
          content: [
            `The biconditional P ↔ Q (read "P if and only if Q") is a compound proposition that is true exactly when P and Q have the same truth value — both true or both false. It is false when they differ.`,
            `@academic[pitfall,aside:true,width:35%:Reading P ↔ Q as both true
Taking P ↔ Q to mean "P and Q are both true" marks the FF row F, which is the table of P ∧ Q. At P = F, Q = F, P ∧ Q is F but P ↔ Q is T, because the two values match.
[Read more](!#pitfalls)]@`,
            `The truth table for P ↔ Q has two true rows (TT and FF) and two false rows (TF and FT). This symmetric structure reflects the fact that the biconditional treats P and Q identically — P ↔ Q is the same as Q ↔ P.`,
          ],
        },
        {
          id: 'caveat',
          lead: `What the name buys: one symbol that carries two implications at once.`,
          content: [
            `The biconditional is equivalent to the conjunction of two conditionals: P ↔ Q ≡ (P → Q) ∧ (Q → P). This means P is both sufficient and necessary for Q. In mathematics, "if and only if" (abbreviated iff) signals that a definition or characterization is being given — the two sides are interchangeable.`,
            `So proving a biconditional always means proving two things, and once proved it lets either side replace the other. The next section, [biconditionals and logical equivalence](!/logic/truth-tables/biconditionals#2), shows when that replacement is guaranteed.`,
          ],
        },
        {
          id: 'exit',
          content: `The rest of the page builds the truth tables of the basic biconditional and of the biconditional laws: negation, mutual implication, transitivity, decomposition, the contrapositive, double negation and De Morgan's law.`,
        },
      ],
    }

    const genericSections = [
      {
        id: '1',
        title: sectionsContent.obj1.title,
        link: sectionsContent.obj1.link,
        content: [<ConceptIntro key={'obj1-intro'} data={conceptIntro} />]
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
        content: [sectionsContent.obj3.content,
          <div key={'unit-biconditionalRegions'} dangerouslySetInnerHTML={{ __html: demoUnits.biconditionalRegions }} />,
          `Shading the two crescents instead gives ¬(P ↔ Q), exclusive or.`,
          `@academic[punchline:A biconditional asks only whether two statements agree, never whether either of them is true.]@`,
        ]
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Biconditionals (Double Implications) Truth Tables</h1> 

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
    '((P ↔ Q) ∧ (Q ↔ R)) → (P ↔ R)': {
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

  // Concept introduction (section 1, "What Is a Biconditional?") — template I,
  // naming. Running instance: P ↔ Q, recognised in three everyday "exactly
  // when" statements. Old obj1 text is kept in sectionsContent.obj1, unused;
  // its three paragraphs and pitfall aside are carried in unchanged.
  const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
  const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
    cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
  const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
  const ciPlacesTable = ciTableOpen(['statement', 'first part', 'second part', 'can one hold without the other?']) +
    ciRow(['a whole number is even exactly when its last digit is even', 'n is even', 'last digit even', 'no']) +
    ciRow(['a triangle is equilateral exactly when all its angles are 60°', 'equilateral', 'all angles 60°', 'no'], { shade: true }) +
    ciRow(['the lamp is lit exactly when the switch is on', 'lamp lit', 'switch on', 'no'], { last: true }) +
    '</tbody></table>'
  const ciIffTable = ciTableOpen(['P', 'Q', 'P ↔ Q', 'the two parts']) +
    ciRow(['T', 'T', 'T', 'agree'], { color: '#2563EB', cols: [2] }) +
    ciRow(['T', 'F', 'F', 'differ'], { shade: true }) +
    ciRow(['F', 'T', 'F', 'differ']) +
    ciRow(['F', 'F', 'T', 'agree'], { shade: true, last: true, color: '#2563EB', cols: [2] }) +
    '</tbody></table>'

  const sectionsContent = {
    obj1: {
      title: `What Is a Biconditional?`,
      content: `The biconditional P ↔ Q (read "P if and only if Q") is a compound proposition that is true exactly when P and Q have the same truth value — both true or both false. It is false when they differ.

The biconditional is equivalent to the conjunction of two conditionals: P ↔ Q ≡ (P → Q) ∧ (Q → P). This means P is both sufficient and necessary for Q. In mathematics, "if and only if" (abbreviated iff) signals that a definition or characterization is being given — the two sides are interchangeable.

@academic[pitfall,aside:true,width:35%:Reading P ↔ Q as both true
Taking P ↔ Q to mean "P and Q are both true" marks the FF row F, which is the table of P ∧ Q. At P = F, Q = F, P ∧ Q is F but P ↔ Q is T, because the two values match.
[Read more](!#pitfalls)]@

The truth table for P ↔ Q has two true rows (TT and FF) and two false rows (TF and FT). This symmetric structure reflects the fact that the biconditional treats P and Q identically — P ↔ Q is the same as Q ↔ P.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj2: {
      title: `Biconditionals and Logical Equivalence`,
      content: `@academic[rule_theorem_plain:A biconditional P ↔ Q that is a [tautology](!/logic/propositional-logic/semantics/tautology) — true in every row of its truth table — establishes that P and Q are logically equivalent.]@

Logical equivalence means the two formulas have identical truth tables: they agree on every possible input.

@academic[pitfall,aside:true,width:35%:Checking only some rows
Seeing (P → Q) ↔ (Q → P) come out T at P = Q = T and at P = Q = F suggests that P → Q and Q → P are equivalent. At P = T, Q = F it is F, so they are not: only a biconditional that is T in all four rows gives an equivalence.
[Read more](!#pitfalls)]@

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
      content: `This [tautology](!/logic/propositional-logic/semantics/tautology) states that if P is equivalent to Q, then ¬P is equivalent to ¬Q — and conversely.

@academic[rule_plain:Negating both sides of an equivalence preserves the equivalence.]@

@academic[pitfall,aside:true,width:35%:Negating both sides of a biconditional
Taking ¬P ↔ ¬Q as the negation of P ↔ Q fails at P = Q = T: there ¬(P ↔ Q) is F but ¬P ↔ ¬Q is T. Negating one side gives the negation: ¬(P ↔ Q) ≡ P ↔ ¬Q.
[Read more](!#pitfalls)]@

The proof is direct: P ↔ Q means P and Q have the same truth value. If both are true, then ¬P and ¬Q are both false — still matching. If both are false, then ¬P and ¬Q are both true — still matching. In either case ¬P ↔ ¬Q holds.

This symmetry under negation is a distinctive feature of the biconditional. It does not hold for the conditional: P → Q is not equivalent to ¬P → ¬Q (that would be the inverse, which is a common logical fallacy).`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj5: {
      title: `(P ↔ Q) ↔ ((P → Q) ∧ (Q → P)): Mutual Implication`,
      content: `This [tautology](!/logic/propositional-logic/semantics/tautology) formally establishes that the biconditional is identical to the conjunction of both directions of [implication](!/logic/propositional-logic/semantics/implication).

@academic[rule_plain:P ↔ Q holds if and only if P → Q and Q → P both hold.]@

@academic[pitfall,aside:true,width:35%:Proving only one direction
Showing P → Q and concluding P ↔ Q misses the row P = F, Q = T: there P → Q is T but P ↔ Q is F. The biconditional also needs Q → P, which is exactly what fails in that row.
[Read more](!#pitfalls)]@

This equivalence is the standard definition of the biconditional in many logic textbooks. It also provides the standard proof strategy for biconditional statements: prove the forward direction (P → Q) and the backward direction (Q → P) separately.

The truth table confirms that both sides agree in all four rows. When P and Q match (TT or FF), both implications hold and the biconditional is true. When they differ (TF or FT), one implication fails and both the conjunction and the biconditional are false.

@academic[punchline:An if-and-only-if claim is two implications in one, and proving it means proving both.]@`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj6: {
      title: `((P ↔ Q) ∧ (Q ↔ R)) → (P ↔ R): Transitivity`,
      content: `This [tautology](!/logic/propositional-logic/semantics/tautology) establishes that logical equivalence is transitive: if P is equivalent to Q and Q is equivalent to R, then P is equivalent to R.

@academic[fact,aside:true,width:35%:A ↔ chain counts its false letters
Grouping does not matter, since (P ↔ Q) ↔ R ≡ P ↔ (Q ↔ R), yet at P = T, Q = R = F the chain P ↔ Q ↔ R is T. Because X ↔ T is X and X ↔ F is ¬X, each false letter flips the result: a chain of ↔ is true exactly when an even number of its letters are false.]@

The reasoning is straightforward. P ↔ Q means P and Q share a truth value. Q ↔ R means Q and R share a truth value. Therefore P and R share a truth value, giving P ↔ R.

Transitivity allows chaining equivalences in proofs: if you show A ↔ B, then B ↔ C, then C ↔ D, you can conclude A ↔ D. This is one of the most common proof patterns in mathematics — simplifying a complex statement step by step through a chain of equivalent forms.

Such a chain is a list of separate claims, A ↔ B, B ↔ C and C ↔ D, joined by "and". Writing the letters in one line with the connective repeated, as in P ↔ Q ↔ R, makes a single formula instead, and that formula has to be read from its own truth table, not as a list.`,
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
      content: `@academic[rule:Contrapositive equivalence
This [tautology](!/logic/propositional-logic/semantics/tautology) states that every conditional is logically equivalent to its contrapositive.]@

P → Q and ¬Q → ¬P have identical truth tables — they are true and false in exactly the same rows.

The contrapositive equivalence is one of the most important results in propositional logic and one of the most used tools in mathematical proof. To prove "if P then Q," it is often easier to prove "if not Q then not P" — the two statements are logically identical.

Note that this is a biconditional [tautology](!/logic/propositional-logic/semantics/tautology): both directions hold. The conditional implies its contrapositive, and the contrapositive implies the original conditional. This is stronger than the converse or inverse relationships, which are not equivalent to the original.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj9: {
      title: `P ↔ ¬¬P: Double Negation`,
      content: `@academic[rule:Double negation
This [tautology](!/logic/propositional-logic/semantics/tautology) states that any proposition P is logically equivalent to its double negation ¬¬P.]@

Negating a proposition twice returns it to its original truth value.

The truth table is trivial: when P is true, ¬P is false and ¬¬P is true — matching P. When P is false, ¬P is true and ¬¬P is false — again matching P.

@academic[fact,aside:true,width:35%:Three negations shrink to one
Intuitionistic logic refuses ¬¬P → P, yet it proves ¬¬¬P ↔ ¬P. The contrapositive of P → ¬¬P gives ¬¬¬P → ¬P, and P → ¬¬P applied to ¬P gives the converse.]@

Double negation elimination (from ¬¬P infer P) is accepted in classical logic but not in intuitionistic logic, where proving ¬¬P does not constructively establish P. This distinction is fundamental to the philosophy of mathematics and the debate between classical and constructive foundations.

Intuitionistic logic does keep the opposite step, from P infer ¬¬P: once P is established, any claim that P leads to a contradiction is refuted. What it refuses is only the removal of a double negation, and it accepts contraposition, from P → Q infer ¬Q → ¬P.`,
      before: ``,
      after: ``,
      link: ``,
    },
    obj10: {
      title: `(P ∧ Q) ↔ ¬(¬P ∨ ¬Q): De Morgan&apos;s Law`,
      content: `This [tautology](!/logic/propositional-logic/semantics/tautology) expresses De Morgan&apos;s first law as a biconditional: the conjunction P ∧ Q is equivalent to the negation of the disjunction of the negations, ¬(¬P ∨ ¬Q).

@academic[pitfall,aside:true,width:35%:Keeping the connective in De Morgan's law
Passing the outer negation of ¬(¬P ∨ ¬Q) to each part and keeping the ∨ gives P ∨ Q. At P = T, Q = F, ¬(¬P ∨ ¬Q) is F but P ∨ Q is T. The negation flips the connective: ¬(¬P ∨ ¬Q) ≡ P ∧ Q.
[Read more](!#pitfalls)]@

Reading it plainly: "P and Q" is the same as "it is not the case that not-P or not-Q." If both P and Q hold, then neither ¬P nor ¬Q holds, so their disjunction is false and its negation is true. If either P or Q fails, the corresponding negation is true, the disjunction is true, and its negation is false.

De Morgan&apos;s laws (the second being P ∨ Q ↔ ¬(¬P ∧ ¬Q)) are essential tools in simplifying logical expressions, designing digital circuits, and converting between conjunctive and disjunctive normal forms.`,
      before: ``,
      after: ``,
      link: ``,
    },
    pitfalls: {
      title: `Common Pitfalls`,
      content: `Five slips account for many wrong answers on biconditional truth tables. Each is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Reading P ↔ Q as both true**

The biconditional is read as a claim that P and Q both hold, as if "P if and only if Q" meant "P and Q". The row where both are false is then marked F, and the column that comes out belongs to a different connective.

Wrong working: P ↔ Q is true when P and Q are true, so for (P, Q) equal to (T, T), (T, F), (F, T), (F, F) the column reads T, F, F, F.

Right working: P ↔ Q is true when P and Q have the same truth value. In the row (F, F) the values match, so the column reads T, F, F, T. The column T, F, F, F is the table of P ∧ Q, which differs from P ↔ Q exactly in the row (F, F).

Why it happens: everyday "if and only if" sentences are usually about the case where both parts happen, so the case where neither happens is overlooked. The phrase "both true or both false" is remembered without its second half.

How to check: count the T rows. P ↔ Q has two, TT and FF; a column with a single T, in the TT row, is P ∧ Q.

**Checking only some rows**

A biconditional between two formulas is evaluated in a few rows, it comes out true there, and the two formulas are declared equivalent. Equivalence needs the biconditional to be true in every row.

Wrong working: for (P → Q) ↔ (Q → P), take P = Q = T: both implications are T, so the biconditional is T. Take P = Q = F: both implications are T again. So P → Q ≡ Q → P.

Right working: two variables give four rows. For (P, Q) equal to (T, T), (T, F), (F, T), (F, F), P → Q takes T, F, T, T and Q → P takes T, T, F, T, so the biconditional takes T, F, F, T. It is not a tautology, and P → Q is not equivalent to its converse Q → P.

Why it happens: the rows where P and Q have the same value are the easiest to evaluate, and in those rows a formula and its converse always agree, because swapping P and Q changes nothing when they are equal.

How to check: list all the rows before deciding, four for two variables and eight for three, and look for a single F in the final column. One F is enough to rule out the equivalence.

**Negating both sides of a biconditional**

To negate P ↔ Q, the negation is placed on both sides, giving ¬P ↔ ¬Q. Section 4 shows that this formula is equivalent to P ↔ Q itself, so it cannot be its negation.

Wrong working: ¬(P ↔ Q) ≡ ¬P ↔ ¬Q.

Right working: at P = Q = T, P ↔ Q is T, so ¬(P ↔ Q) is F, while ¬P ↔ ¬Q is F ↔ F, which is T. The negation goes on one side only: ¬(P ↔ Q) ≡ P ↔ ¬Q ≡ ¬P ↔ Q, true exactly when P and Q differ, which is the exclusive or.

Why it happens: the negation is distributed over the biconditional like a minus sign multiplied into a bracket. Negation preservation, (P ↔ Q) ↔ (¬P ↔ ¬Q), says precisely that the two negations cancel out.

How to check: the negation must be F wherever P ↔ Q is T. Test P = Q = T: ¬P ↔ ¬Q is T there, so it is not the negation.

**Proving only one direction**

An "if and only if" statement is proved by showing one implication, usually P → Q, and the proof stops there. One implication still allows a row in which the biconditional is false.

Wrong working: if x = 2, then x² = 4. So x = 2 if and only if x² = 4.

Right working: P → Q rules out only the row P = T, Q = F. In the row P = F, Q = T, P → Q is T but P ↔ Q is F, because Q → P is T → F, which is F. In the example, x = −2 gives x² = 4 while x = 2 is false, so the backward direction fails and the biconditional is false. Only P → Q and Q → P together rule out both mixed rows: P ↔ Q ≡ (P → Q) ∧ (Q → P).

Why it happens: the forward direction is often the interesting one, and the backward direction feels as if it should follow automatically. It does not: P → Q is T in three rows, P ↔ Q only in two.

How to check: an "if and only if" proof has two parts, one for each arrow. Before finishing, look for the part that starts from Q and arrives at P.

**Keeping the connective in De Morgan's law**

To simplify ¬(¬P ∨ ¬Q), the outer negation is passed to each part, but the ∨ between the parts is kept. The result is a different formula.

Wrong working: ¬(¬P ∨ ¬Q) ≡ ¬¬P ∨ ¬¬Q ≡ P ∨ Q.

Right working: at P = T, Q = F, ¬P ∨ ¬Q is F ∨ T, which is T, so ¬(¬P ∨ ¬Q) is F, while P ∨ Q is T. De Morgan's law changes the connective: ¬(¬P ∨ ¬Q) ≡ ¬¬P ∧ ¬¬Q ≡ P ∧ Q, which is F in that row, as it should be.

Why it happens: the negation is treated like a minus sign, as in −(a + b) = −a + (−b), where the operation between the terms keeps its form. In words, "not (not P or not Q)" gets heard as "P or Q".

How to check: test a row where P and Q differ, such as P = T, Q = F. The original and the rewritten formula must have the same value there.`,
      before: ``,
      after: ``,
      link: ``,
    },
    faq: {
      title: `Biconditionals FAQ`,
    },
  }

  // FAQ pass: cut six questions whose own section h2 names the topic with a
  // defining first line (biconditional, mutual implication, contrapositive
  // tautology, transitivity, De Morgan, double negation) — the last four are
  // also phrasings with no search demand. Kept the truth-table and iff
  // questions (both buried mid-paragraph); invented necessary-vs-sufficient
  // from obj1's second paragraph.
  const faqQuestions = {
    obj1: {
      question: "What is the truth table for P ↔ Q?",
      answer: "P ↔ Q is true when both P and Q are true, or when both are false. It is false when P and Q have different truth values. This gives two true rows (TT, FF) and two false rows (TF, FT) in a two-variable truth table. See it row by row in the [truth table generator](!/logic/truth-tables).",
      sectionId: "3"
    },
    obj2: {
      question: "What does 'if and only if' mean in logic?",
      answer: "'If and only if' (abbreviated iff) expresses a biconditional. 'P if and only if Q' means P implies Q and Q implies P: the two sides always share a truth value and are interchangeable. Because both directions are claimed, proving an iff statement takes two parts — forward and backward. Mathematical definitions are implicitly iff statements.",
      sectionId: "1"
    },
    obj3: {
      question: "What is the difference between a necessary and a sufficient condition?",
      answer: "In the conditional P → Q, the truth of P is sufficient for the truth of Q — P guarantees Q. In the same conditional, Q is necessary for P: P cannot hold without Q. A biconditional P ↔ Q says each side is both necessary and sufficient for the other, which is why it is read 'P if and only if Q.'",
      sectionId: "1"
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
    }
  }

  const vrBiconditional = { kind: 'two', id: 'vrBic', test: (p, q) => p === q, formula: 'P ↔ Q', svgTitle: 'P if and only if Q: the overlap and the region outside both circles are shaded, the two crescents are not', caption: 'True when P and Q agree: both, or neither' };
  const conceptIntroFigures = {
    placesTable: ciPlacesTable,
    iffTable: ciIffTable,
  };

  const demoUnits = {
    biconditionalRegions: demoUnitFrame({
      svg: renderVennRegions(vrBiconditional),
      caption: 'P &#8596; Q: both, or neither',
      text: 'Circle P holds the assignments where P is true, circle Q those where Q is true. P &#8596; Q is true where the two agree: in the overlap, where both are true, and outside both circles, where both are false. The two crescents, where exactly one of them is true, stay empty. These are the TT and FF rows of the truth table; the empty crescents are its TF and FT rows.',
    }),
  };

  return {
    props: {
      demoUnits,
      conceptIntroFigures,
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