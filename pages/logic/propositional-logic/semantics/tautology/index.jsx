import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import '../../../../pages.css'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Sections from '@/app/components/page-components/section/Sections'
import ExpandableTable from '@/app/components/data-wrapper/generic-table/ExpandableTable'
import { renderAcademicBlockHTML } from '@/app/utils/academicBlocks'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import vennTruthTableDiagrams from '@/app/components/diagrams/set-theory/vennTruthTableDiagrams'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'
import { tableHeaders } from '@/app/styles/theme'




export async function getStaticProps(){

  const keyWords=['tautology','propositional logic','tautology examples','tautology definition',
    'tautology in logic','tautology vs contradiction','logical laws'
  ]

  const tautologies = [
    {
      id: "1",
      name: "Self-Implication",
      expression: "P → P",
      explanation: "If P then P - a proposition always implies itself"
    },
    // {
    //   id: "2",
    //   name: "Law of Excluded Middle",
    //   expression: "P ∨ ¬P",
    //   explanation: "Either P or not P - one must be true"
    // },
    {
      id: "3",
      name: "Non-Contradiction",
      expression: "¬(P ∧ ¬P)",
      explanation: "Not both P and not P - contradictions cannot be true"
    },
    {
      id: "4",
      name: "Self-Equivalence",
      expression: "P ↔ P",
      explanation: "P if and only if P - a proposition is always equivalent to itself"
    },
    {
      id: "5",
      name: "Modus Ponens Form",
      expression: "((P → Q) ∧ P) → Q",
      explanation: "If P implies Q and P is true, then Q must be true"
    },
    {
      id: "6",
      name: "Hypothetical Syllogism",
      expression: "((P → Q) ∧ (Q → R)) → (P → R)",
      explanation: "If P implies Q and Q implies R, then P implies R"
    },
    {
      id: "7",
      name: "Weakening",
      expression: "P → (Q → P)",
      explanation: "If P is true, then it remains true regardless of Q"
    },
    {
      id: "8",
      name: "Proof by Contradiction Form",
      expression: "(¬P → P) → P",
      explanation: "If assuming not-P leads to P, then P must be true"
    },
    {
      id: "9",
      name: "Peirce's Law",
      expression: "((P → Q) → P) → P",
      explanation: "Classical logical principle not provable in intuitionistic logic"
    },
    {
      id: "10",
      name: "Disjunctive Weakening",
      expression: "P ∨ (P → Q)",
      explanation: "Either P is true or if P then Q - always true"
    },
    {
      id: "11",
      name: "Implication Disjunction",
      expression: "(P → Q) ∨ (Q → P)",
      explanation: "Either P implies Q or Q implies P - always true"
    },
    {
      id: "12",
      name: "Conjunction Implication",
      expression: "(P → Q) → ((P ∧ R) → Q)",
      explanation: "If P implies Q, then P and R together also imply Q"
    },
    {
      id: "13",
      name: "Conjunction Introduction Form",
      expression: "P → (Q → (P ∧ Q))",
      explanation: "If P and Q are both true, their conjunction is true"
    },
    {
      id: "14",
      name: "Modus Ponens Alternative Form",
      expression: "(P ∧ (P → Q)) → Q",
      explanation: "If P is true and P implies Q, then Q is true"
    },
    {
      id: "15",
      name: "Modus Tollens Form",
      expression: "(¬Q ∧ (P → Q)) → ¬P",
      explanation: "If Q is false and P implies Q, then P must be false"
    },
    {
      id: "16",
      name: "Self-Contradiction Implication",
      expression: "(P → ¬P) → ¬P",
      explanation: "If P implies its own negation, then P must be false"
    },
    {
      id: "17",
      name: "Implication Negation Equivalence",
      expression: "¬(P → Q) ↔ (P ∧ ¬Q)",
      explanation: "An implication is false only when its antecedent is true and consequent is false"
    },
    {
      id: "18",
      name: "Contradiction Implication",
      expression: "(P → (Q ∧ ¬Q)) → ¬P",
      explanation: "If P implies a contradiction, then P must be false"
    },
    {
      id: "19",
      name: "Reductio ad Absurdum",
      expression: "((P → Q) ∧ (P → ¬Q)) → ¬P",
      explanation: "If P implies both Q and not-Q, then P must be false"
    },
    {
      id: "20",
      name: "Negation Introduction",
      expression: "(P → Q) → ((P → ¬Q) → ¬P)",
      explanation: "If P implies contradictory results, P must be false"
    },
    {
      id: "21",
      name: "Material Implication Alternative",
      expression: "(P → Q) → (¬P ∨ Q)",
      explanation: "If P implies Q, then either P is false or Q is true"
    },
    {
      id: "22",
      name: "Disjunctive Implication",
      expression: "(P ∨ Q) → (¬P → Q)",
      explanation: "If either P or Q is true, then not-P implies Q"
    },
    {
      id: "23",
      name: "Constructive Dilemma",
      expression: "((P → Q) ∧ (R → S) ∧ (P ∨ R)) → (Q ∨ S)",
      explanation: "Complex syllogism with disjunctive conclusion"
    },
    {
      id: "24",
      name: "Biconditional Expansion",
      expression: "(P ↔ Q) ↔ ((P → Q) ∧ (Q → P))",
      explanation: "P if and only if Q means P implies Q and Q implies P"
    }
   ];

  
   const introContent = {
    id: "intro",
    title: "Introduction",
    content:`Tautologies represent a fundamental concept in propositional logic, embodying logical certainty. A tautology is a formula that evaluates to true under all possible interpretations of its variables. The classic example is P ∨ ¬P (the law of excluded middle), which states that either a proposition or its negation must be true – an inescapable truth.

Unlike regular propositions whose truth depends on specific circumstances, tautologies are guaranteed to be true, providing absolute certainty in logical systems. This property makes tautologies essential in logical reasoning, serving as the foundation for valid arguments, logical equivalences, and formal proofs.

This page explores tautologies comprehensively, examining their properties, relationship to contradictions, and their crucial role in establishing the framework of logical deduction and mathematical reasoning.`
  }

  // Concept introduction (section "definition") — template G, exclusion.
  // Candidates: P ∨ ¬P, P ∧ ¬P, P → Q, P ∧ (P ∨ Q), P → (Q → P). Old
  // definition text is kept in sectionsContent.definition, unused; its example
  // box, pitfall aside (another session, uncommitted), two passages and the
  // excludedMiddle demo frame with its line are carried in unchanged.
  const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
  const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
    cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
  const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
  const ciCandidatesTable = ciTableOpen(['candidate', 'formula', 'in words']) +
    ciRow(['A', 'P ∨ ¬P', 'P or not P']) +
    ciRow(['B', 'P ∧ ¬P', 'P and not P'], { shade: true }) +
    ciRow(['C', 'P → Q', 'if P then Q']) +
    ciRow(['D', 'P ∧ (P ∨ Q)', 'P, and also P or Q'], { shade: true }) +
    ciRow(['E', 'P → (Q → P)', 'if P, then (if Q then P)'], { last: true }) +
    '</tbody></table>'
  const ciTruthTable = ciTableOpen(['P', 'Q', 'A', 'B', 'C', 'D', 'E']) +
    ciRow(['T', 'T', 'T', 'F', 'T', 'T', 'T']) +
    ciRow(['T', 'F', 'T', 'F', '<span style="color:#a4243b;font-weight:bold">F</span>', 'T', 'T'], { shade: true }) +
    ciRow(['F', 'T', 'T', 'F', 'T', '<span style="color:#a4243b;font-weight:bold">F</span>', 'T']) +
    ciRow(['F', 'F', 'T', 'F', 'T', '<span style="color:#a4243b;font-weight:bold">F</span>', 'T'], { shade: true }) +
    ciRow(['every row T?', '', 'yes', 'no', 'no', 'no', 'yes'], { last: true, color: '#2563EB', cols: [2, 6] }) +
    '</tbody></table>'

  const sectionsContent={
    definition:{
      title:'Definition',
      content:`A **tautology** is a proposition that is always true, regardless of the truth values of its components. In [propositional logic](!/logic/propositional-logic), a tautology is a formula that evaluates to true under all possible truth assignments.
            @academic[example:Example
\t\t\t\t\t\t$P∨¬P$
(The [law](!/logic/propositional-logic/laws) of the excluded middle: "P or not P" is always true.)]@
@academic[pitfall,aside:true,width:35%:Checking only some rows
Calling $P \\to (P \\land Q)$ a tautology after the rows $P = T$, $Q = T$ and $P = F$ misses the row $P = T$, $Q = F$, where $P \\land Q$ is F and the formula is F. It is not a tautology.
[Read more](!#pitfalls)]@
To test a formula, list every truth assignment of its variables in a truth table and evaluate the formula in each row. With $n$ variables there are $2^n$ rows: two for $P∨¬P$, four for a formula in $P$ and $Q$, eight for one in $P$, $Q$ and $R$. The formula is a tautology exactly when its column holds T in all of these rows.
`

    },

    notation:{
      title: `Tautology Notation`,
      lead: `The constant that is true by definition, and the two turnstiles that certify truth by different means — one by proof, one by inspection of every case. Telling those two apart is the oldest distinction in formal logic.`,
      inherited: `The connectives and letters come from [propositional logic notation](!/logic/propositional-logic/syntax#notation), the meta-level $\\equiv$ from [equivalence notation](!/logic/propositional-logic/semantics/equivalences#notation); the mirror constant $\\bot$ belongs to the [contradiction page](!/logic/propositional-logic/semantics/contradiction).`,
      entries: [
        {
          id: 'verum',
          tex: `$\\top$`,
          read: `top; verum; the true constant`,
          means: `A constant, not a variable: $\\top$ denotes truth itself — a formula true under every assignment, needing no letters. It stands for the whole class of tautologies the way a single number stands for a value.`,
          cases: `As a constant it can sit inside formulas — $P \\vee \\top$ is $\\top$, $P \\wedge \\top$ is $P$; the [laws page](!/logic/propositional-logic/laws) states these as the identity and domination rules.`,
          sameGlyphElsewhere: `The same glyph is the [perpendicularity mark's](!/linear-algebra/orthogonality/inner-product#notation) upside-down twin, and in other fields marks the top of an ordering; in logic it is always the true constant.`,
        },
        {
          id: 'turnstile',
          tex: `$\\vdash P$`,
          read: `turnstile P; P is provable`,
          means: `The single turnstile is a **syntactic** certificate: $\\vdash P$ claims a derivation of $P$ exists in the proof system — obtained by pushing symbols according to rules, without consulting truth values at all.`,
          cases: `With premises on the left it becomes an argument: $P, P \\to Q \\vdash Q$ reads "from these, $Q$ is derivable"; bare on the left, $\\vdash P$ marks $P$ as a theorem of the system.`,
          confusedWith: `A statement inside the language. The turnstile is metalanguage — it talks about formulas from outside; writing $\\vdash$ between two connectives produces no formula the [formation rules](!/logic/propositional-logic/syntax#notation) recognize.`,
        },
        {
          id: 'double-turnstile',
          tex: `$\\vDash P$`,
          read: `double turnstile P; P is valid`,
          means: `The double turnstile is a **semantic** certificate: $\\vDash P$ claims $P$ comes out true under every assignment — established by checking cases, as a truth table does, not by deriving anything.`,
          cases: `The two turnstiles answer different questions about the same formula — $\\vdash P$ asks "can it be proved?", $\\vDash P$ asks "is it always true?"; that a system's answers agree in both directions is exactly what soundness and completeness assert.`,
          confusedWith: `The single turnstile. One extra bar swaps proof for truth — and the pair also appears with premises, where $\\Gamma \\vDash P$ means every model of $\\Gamma$ makes $P$ true, the semantic cousin of $\\Gamma \\vdash P$.`,
        },
        {
          id: 'equiv-top',
          tex: `$P \\equiv \\top$`,
          read: `P is equivalent to the true constant`,
          means: `The third spelling: rather than name $P$ a tautology, assert that it agrees with $\\top$ in every case — the [equivalence relation](!/logic/propositional-logic/semantics/equivalences#notation) applied to a constant.`,
          cases: `Handy where a proof already runs in equivalences — a chain of law-substitutions ending in $\\top$ has proved a tautology, which is the algebraic verification method in **Are all equivalences tautologies?** below.`,
          confusedWith: `An assignment. $P \\equiv \\top$ does not set $P$ true — it reports that $P$ was already true in every case; the $\\equiv$ is a verdict, not an instruction.`,
        },
      ],
      symbolsHref: `/math-symbols/math-logic`,
      symbolsLabel: `All logic symbols`,
      parentHref: `/logic/propositional-logic/semantics`,
      parentLabel: `Semantics`,
    },
    tautology_equivalence:{
      title:'Tautology vs Equivalence',
      content:`## Are all equivalences tautologies?
            As the definition of [equivalence](!/logic/propositional-logic/semantics/equivalences) states, two propositions $A$ and $B$ are logically equivalent if they always have the same truth value in every possible scenario. This means that their truth tables are identical. This is a **bilateral relationship** meaning both expressions evaluate to **true** together or **false** together in all cases. It does not matter if they are true or false, the key here is that they are **the same (equal)**.
@academic[example:Example

\t\t\t\t\t\t$(P→Q)≡(¬P∨Q)$

(Material implication rewritten in disjunctive form.)
As long as the equivalence is valid, its biconditional $(P→Q)↔(¬P∨Q)$ evaluates to true in every valuation and falls under [definition](!/logic/propositional-logic/semantics/tautology#definition) of tautology.
So the final answer to that question is **YES** , as long as equivalence is valid- its biconditional form ($A↔B$) is a tautology.]@

## Are all tautologies logical equivalences?
According to [definition](!/logic/propositional-logic/semantics/tautology#definition), a tautology is about a **single proposition that is always true**, while [equivalence](!/logic/propositional-logic/semantics/equivalences) is a relationship between two propositions that always have the same truth value.
A tautology must always evaluate to true, but it does not necessarily have to express a relationship between two statements. In fact, there are numerous tautologies that are unilateral expressions that evaluate to true in all possible valuations but don't express a relationship of equality between two propositions.
**Examples**:
Law of Excluded Middle:
\t\t\t\t\t\t $P∨¬P$
Always true, but doesn't equate two propositions.

Self-implication:
\t\t\t\t\t\t$P→P$
Tautological but doesn't equate different propositions.
**More examples**:

\t\t\t\t\t\t$P ∨ (P → Q)$

\t\t\t\t\t\t$(P → Q) ∨ (Q → P)$

\t\t\t\t\t\t$P → (Q → (P ∧ Q))$

All those are tautologies that do not fall under the definition of [equivalence](!/logic/propositional-logic/semantics/equivalences).

This distinction means that while every valid [equivalence](!/logic/propositional-logic/semantics/equivalences) $A≡B$ makes $A↔B$ a tautology, not each tautology is [equivalence](!/logic/propositional-logic/semantics/equivalences) because some tautologies do not express a two-sided relationship between two propositions.
This means that the biconditionals $A↔B$ of all logical equivalences form a subset of the set of all tautologies.




<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 650" style="margin-left: 300px;">
  <!-- Background -->
  <rect width="500" height="200" fill="white" />
  
  <!-- Tautologies circle (larger) -->
  <ellipse cx="250" cy="200" rx="245" ry="195" fill="#E6F2FF" stroke="#000" stroke-width="2"/>
  <text x="250" y="60" text-anchor="middle" font-family="Arial" font-size="24" font-weight="bold">Tautologies</text>
  <text x="250" y="90" text-anchor="middle" font-family="Arial" font-size="14">(e.g., P → P, P ∨ ¬P)</text>
  
  <!-- Equivalences circle (middle) -->
  <ellipse cx="250" cy="230" rx="150" ry="120" fill="#CCE5FF" stroke="#000" stroke-width="2"/>
  <text x="250" y="170" text-anchor="middle" font-family="Arial" font-size="20" font-weight="bold">Equivalences</text>
  <text x="250" y="195" text-anchor="middle" font-family="Arial" font-size="14">(e.g., P ↔ Q, when logically equivalent)</text>
  
  <!-- Examples outside of Laws but inside Equivalences (moved right to center) -->
  <text x="250" y="220" text-anchor="middle" font-family="Arial" font-size="12" fill="#333333">P ↔ Q where P and Q</text>
  <text x="250" y="235" text-anchor="middle" font-family="Arial" font-size="12" fill="#333333">are equivalent but</text>
  <text x="250" y="250" text-anchor="middle" font-family="Arial" font-size="12" fill="#333333">not named laws</text>
  
  <!-- Examples outside of Equivalences but inside Tautologies (moved higher) -->
  <text x="380" y="100" text-anchor="middle" font-family="Arial" font-size="12" fill="#333333">Non-equivalence tautologies</text>
  <text x="380" y="115" text-anchor="middle" font-family="Arial" font-size="12" fill="#333333">(e.g., ((P → Q) → P) → P,</text>
  <text x="380" y="130" text-anchor="middle" font-family="Arial" font-size="12" fill="#333333">(¬P → P) → P)</text>
</svg>
`

    },
    laws:{

      title:'Logic Laws as Tautologies',
      content:`As discussed in previous [section](!/logic/propositional-logic/semantics/tautology#tautology_vs_equivalence), a valid equivalence $A≡B$ means its biconditional $A↔B$ is a **tautology**.
            Since all [propositional logic laws](!/logic/propositional-logic/laws) apart from inference rules (such as resolution) and non-equivalences (such as the inverse law) are either [equivalences](!/logic/propositional-logic/semantics/equivalences) or directly tautological statements, we conclude that all these laws yield tautologies.
## Propositional Logic Laws as Equivalences
@academic[fact,aside:true,width:35%:Named for saying nothing
Wittgenstein brought tautology, an old word for needless repetition, into logic in his Tractatus of 1921, where he held that every law of logic is one. A formula true in every row rules out no case, so it tells nothing about the world, and that is why it can never fail.]@
           Many fundamental laws of propositional logic are expressed as equivalences, meaning both sides of the equation always yield the same truth value. Since the equivalence must always hold, the biconditional joining its two sides is a **tautology**.
           **Examples**:
           **De Morgan’s Laws**:

\t\t\t\t\t\t$¬(P∨Q)≡(¬P∧¬Q)$

\t\t\t\t\t\t$¬(P∧Q)≡(¬P∨¬Q)$

**Commutative Laws**:

\t\t\t\t\t\t$P∨Q≡Q∨P$

\t\t\t\t\t\t$P∧Q≡Q∧P$

The biconditionals of these laws are always true, making them **tautologies**. See more examples of basic propositional logic laws [here](!/logic/propositional-logic/laws).

## Propositional Logic Laws That Are Directly Tautologies
Some laws are one-sided expressions that are true in all cases without establishing an equivalence. These are still tautologies.

**Law of the Excluded Middle**:

\t\t\t\t\t\t$P∨¬P≡T$
This states that every proposition is either true or false, making it a tautology.

**Law of Non-Contradiction**:

\t\t\t\t\t\t$¬(P∧¬P)≡T$
This states that no proposition can be both true and false simultaneously, which is always true.

@academic[pitfall,aside:true,width:35%:Reading a tautological conditional as an equivalence
Turning the tautology $((P \\to Q) \\land P) \\to Q$ into $(P \\to Q) \\land P \\equiv Q$ fails at $P = F$, $Q = T$: the left side is F and $Q$ is T. The conditional holds in one direction only.
[Read more](!#pitfalls)]@
Since all [propositional logic laws](!/logic/propositional-logic/laws) apart from inference rules and non-equivalences either express equivalences whose biconditionals are tautologies or standalone tautologies, we conclude that all these laws yield **tautologies**.

Visit corresponding page to learn more about [propositional logic laws](!/logic/propositional-logic/laws).

Use this tool to evaluate [truth tables](!/logic/truth-tables).

            `,

    },
    other:{
      title:'Tautologies that are not laws',
      before:`While all equivalence and tautology laws of propositional logic yield **tautologies**, not all **tautologies** qualify as laws. A law in logic is a fundamental principle that defines how logical operations behave, often used in formal proofs and reasoning systems.
                However, some **tautologies** are simply valid logical statements that always evaluate to true without establishing a fundamental logical principle.
                These non-law tautologies may still be useful in proofs, derivations, or formal logic, but they do not define core logical rules like De Morgan’s Laws or the Law of the Excluded Middle. Instead, they are often the result of specific logical constructions, implications, or transformations that hold universally without being considered foundational.

                `,
      after:  `
                Use this [tool](!/logic/truth-tables) to generate truth tables dynamically and evaluate those expressions.`
    },
  tautology_contradiction:{
    title:'Tautology vs Contradiction',
    before: `While a tautology affirms itself under every possible interpretation, its logical counterpart — the contradiction — fails under all of them. These two aren’t just opposites in outcome; they’re structurally bound by negation.`,
    after:
    `@academic[pitfall,aside:true,width:35%:Treating not a tautology as a contradiction
Calling $P \\to Q$ a contradiction because it is not a tautology, and so taking $\\neg(P \\to Q)$ for a tautology, fails at $P = T$, $Q = T$: there $P \\to Q$ is T and $\\neg(P \\to Q)$ is F. Both formulas are contingencies.
[Read more](!#pitfalls)]@
This is not just an abstract symmetry — it's a fundamental mechanism in logical systems.
    This reciprocal relationship plays out in reasoning strategies: to show something is necessarily true (a tautology), one might show that its negation leads to a contradiction — a technique known as reductio ad absurdum. The tension between the two is constructive: from the impossibility of one, we often infer the necessity of the other.
    Take for example the classic tautology 'P ∨ ¬P'. Its truth table confirms that it's always true, regardless of whether 'P' is true or false. Now consider the negation: '¬(P ∨ ¬P)'. No matter what truth value you assign to 'P', this formula is always false — a contradiction. In practice, this duality underpins proof techniques, logic solvers, and model checkers. If a system can show that assuming '¬φ' leads to a contradiction, it immediately concludes that 'φ' must be a tautology — turning logical failure into proof.`,
    svg:`
    <svg width="500" height="300" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" 
         style="display: block; margin: 0 auto; fill:none; stroke:none; fill-rule:evenodd; clip-rule:evenodd; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:1.5;">
      <defs>
        <!-- Arrow markers -->
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <path d="M0,0 L10,3.5 L0,7 Z" fill="#777777" />
        </marker>
      </defs>
      
      <!-- Left node (green/tautology) with checkmark -->
      <circle cx="125" cy="150" r="60" fill="#3cc583" stroke="#ffffff" stroke-width="2" />
      <!-- Checkmark icon -->
      <path d="M 90 150 L 115 175 L 160 120" stroke="#ffffff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" />
      
      <!-- Right node (red/contradiction) with X -->
      <circle cx="375" cy="150" r="60" fill="#e55753" stroke="#ffffff" stroke-width="2" />
      <!-- X icon -->
      <path d="M 335 110 L 415 190 M 415 110 L 335 190" stroke="#ffffff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" />
      
      <!-- Upper arrow (flatter curve) -->
      <path d="M185 110 C225 90, 275 90, 315 110" stroke="#777777" stroke-width="0.8" fill="none" marker-end="url(#arrowhead)" />
      <!-- Upper arrow negation label -->
      <text x="250" y="80" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#444444">negation (¬)</text>
      
      <!-- Lower arrow (flatter curve) -->
      <path d="M315 190 C275 210, 225 210, 185 190" stroke="#777777" stroke-width="0.8" fill="none" marker-end="url(#arrowhead)" />
      <!-- Lower arrow negation label -->
      <text x="250" y="220" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#444444">negation (¬)</text>
      
      <!-- Labels -->
      <text x="125" y="230" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#3cc583">Tautology</text>
      <text x="375" y="230" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#e55753">Contradiction</text>
    </svg>
    `,
    table:`<table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:80%;margin:auto"><thead><tr style="background-color:#f2f2f2"><th style="width:20%;padding:12px;text-align:left;border:1px solid #ddd;font-weight:700">Property</th><th style="width:40%;padding:12px;text-align:left;border:1px solid #ddd;font-weight:700">Tautology</th><th style="width:40%;padding:12px;text-align:left;border:1px solid #ddd;font-weight:700">Contradiction</th></tr></thead><tbody><tr><td style="padding:12px;text-align:left;border:1px solid #ddd;font-weight:700">Definition</td><td style="padding:12px;text-align:left;border:1px solid #ddd">Always true under every interpretation</td><td style="padding:12px;text-align:left;border:1px solid #ddd">Always false under every interpretation</td></tr><tr style="background-color:#f9f9f9"><td style="padding:12px;text-align:left;border:1px solid #ddd;font-weight:700">Symbolic Trait</td><td style="padding:12px;text-align:left;border:1px solid #ddd">⊨ φ (φ is valid)</td><td style="padding:12px;text-align:left;border:1px solid #ddd">⊨ ¬φ (¬φ is valid)</td></tr><tr><td style="padding:12px;text-align:left;border:1px solid #ddd;font-weight:700">Truth Table</td><td style="padding:12px;text-align:left;border:1px solid #ddd">All rows are <span style="background-color:#f0f0f0;padding:2px 4px;border-radius:3px;font-family:monospace">T</span></td><td style="padding:12px;text-align:left;border:1px solid #ddd">All rows are <span style="background-color:#f0f0f0;padding:2px 4px;border-radius:3px;font-family:monospace">F</span></td></tr><tr style="background-color:#f9f9f9"><td style="padding:12px;text-align:left;border:1px solid #ddd;font-weight:700">Negation</td><td style="padding:12px;text-align:left;border:1px solid #ddd">Becomes a contradiction</td><td style="padding:12px;text-align:left;border:1px solid #ddd">Becomes a tautology</td></tr><tr><td style="padding:12px;text-align:left;border:1px solid #ddd;font-weight:700">Role in Proofs</td><td style="padding:12px;text-align:left;border:1px solid #ddd">Represents logical necessity</td><td style="padding:12px;text-align:left;border:1px solid #ddd">Used to derive absurdity in indirect proofs</td></tr><tr style="background-color:#f9f9f9"><td style="padding:12px;text-align:left;border:1px solid #ddd;font-weight:700">Example</td><td style="padding:12px;text-align:left;border:1px solid #ddd"><span style="font-family:monospace">'P ∨ ¬P'</span></td><td style="padding:12px;text-align:left;border:1px solid #ddd"><span style="font-family:monospace">'P ∧ ¬P'</span></td></tr><tr><td style="padding:12px;text-align:left;border:1px solid #ddd;font-weight:700">Practical Use</td><td style="padding:12px;text-align:left;border:1px solid #ddd">Validates general rules, laws of logic</td><td style="padding:12px;text-align:left;border:1px solid #ddd">Signals inconsistency, contradiction in assumptions</td></tr><tr style="background-color:#f9f9f9"><td style="padding:12px;text-align:left;border:1px solid #ddd;font-weight:700">Evaluation Outcome</td><td style="padding:12px;text-align:left;border:1px solid #ddd">True in all models</td><td style="padding:12px;text-align:left;border:1px solid #ddd">False in all models</td></tr><tr><td style="padding:12px;text-align:left;border:1px solid #ddd;font-weight:700">Logical Status</td><td style="padding:12px;text-align:left;border:1px solid #ddd">Universally affirmed</td><td style="padding:12px;text-align:left;border:1px solid #ddd">Universally rejected</td></tr></tbody></table>
`  ,
  },

  pitfalls:{
    title:'Common Pitfalls',
    content:`Three slips account for many wrong answers on the topics of this page. Each is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Checking only some rows**

A formula is evaluated in a few rows, comes out T in each of them, and is called a tautology. A tautology must be T in every row of its truth table, so the rows that were not checked can still hold an F.

Wrong working: for $P \\to (P \\land Q)$, the row $P = T$, $Q = T$ gives $T \\to T$, which is T. When $P = F$ the formula is $F \\to (P \\land Q)$, which is T for either value of $Q$. Every row tried gives T, so the formula is called a tautology.

Right working: the four rows for $(P, Q)$ are $(T, T)$, $(T, F)$, $(F, T)$, $(F, F)$, and the formula takes the values T, F, T, T. In the row $P = T$, $Q = F$, $P \\land Q$ is F and the formula is $T \\to F$, which is F. It is a contingency, not a tautology.

Why it happens: once a few rows give T, the formula starts to look always true, and the remaining rows seem like a formality. The rows that are skipped are often the ones with mixed values, which are where formulas of this kind fail.

How to check: count the rows first, $2^n$ for $n$ variables, and evaluate every one. A shortcut for conditionals is to look only for a row with the part before the arrow T and the part after it F; if no such row exists, the conditional is a tautology.

**Reading a tautological conditional as an equivalence**

A conditional $A \\to B$ that is a tautology is treated as if $A \\equiv B$ held. Only an equivalence makes the biconditional $A \\leftrightarrow B$ a tautology; a tautological conditional, such as the form of an inference rule, guarantees one direction only.

Wrong working: $((P \\to Q) \\land P) \\to Q$, the form of modus ponens, is T in all four rows. So $(P \\to Q) \\land P \\equiv Q$, and $((P \\to Q) \\land P) \\leftrightarrow Q$ is taken to be a tautology too.

Right working: in the row $P = F$, $Q = T$, $P \\to Q$ is T and $(P \\to Q) \\land P$ is $T \\land F$, which is F, while $Q$ is T. The biconditional is $F \\leftrightarrow T$, which is F, so $(P \\to Q) \\land P \\not\\equiv Q$. The conditional is a tautology; the biconditional is not.

Why it happens: both laws and inference rules are listed as tautologies, so their forms are read in the same way. The arrow $\\to$ and the double arrow $\\leftrightarrow$ also look alike, and the second direction is assumed without being tested.

How to check: test the reverse conditional $B \\to A$ on its own. Here $Q \\to ((P \\to Q) \\land P)$ is F at $P = F$, $Q = T$, so the reverse direction fails and the two sides are not equivalent.

**Treating not a tautology as a contradiction**

The rule that the negation of a tautology is a contradiction is read as if every formula were one or the other. A formula that is not a tautology is then called a contradiction, and its negation is called a tautology.

Wrong working: $P \\to Q$ is F at $P = T$, $Q = F$, so it is not a tautology. It is called a contradiction, and so $\\neg(P \\to Q)$ is taken to be a tautology.

Right working: for $(P, Q)$ equal to $(T, T)$, $(T, F)$, $(F, T)$, $(F, F)$, the formula $P \\to Q$ takes the values T, F, T, T, and $\\neg(P \\to Q)$ takes F, T, F, F. Each column holds both T and F, so both formulas are contingencies. The negation of a contingency is again a contingency.

Why it happens: tautology and contradiction are shown side by side as opposites, and the negation rule links only these two. The third category, contingency, is not part of the picture and is easy to forget.

How to check: before negating, find one row with T and one row with F. If both exist, the formula and its negation are both contingencies, and neither is a tautology.`
  },

  faq:{
    title:`Tautology FAQ`,
  }

  }

// Three questions written from scratch — this page had no faqQuestions object.
// The page's own h2s already answer "tautology vs contradiction" and "are laws
// tautologies", and /logic/truth-tables/tautologies owns the proof-method and
// intuitionistic questions. These target buried notation content (⊤, the
// turnstiles) and the Peirce's law table row.
const faqQuestions = {
  obj1: {
    question: "What does the symbol ⊤ mean in logic?",
    answer: "⊤ (read 'top' or 'verum') is the constant for truth itself: a formula that is true under every assignment, containing no variables. Its mirror image ⊥ denotes the always-false constant. Inside formulas it simplifies by the identity and domination laws: P ∧ ⊤ reduces to P, while P ∨ ⊤ reduces to ⊤. Writing P ≡ ⊤ is another way of saying P is a tautology.",
    sectionId: "notation"
  },
  obj2: {
    question: "What is the difference between ⊢ and ⊨ in logic?",
    answer: "The single turnstile ⊢ is syntactic: ⊢ P claims a derivation of P exists in the proof system, obtained by applying rules without consulting truth values. The double turnstile ⊨ is semantic: ⊨ P claims P is true under every assignment, as a truth table shows. That the two agree — everything provable is valid and everything valid is provable — is what soundness and completeness assert.",
    sectionId: "notation"
  },
  obj3: {
    question: "What is Peirce's law?",
    answer: "Peirce's law is the tautology ((P → Q) → P) → P: if P follows from the mere assumption that P implies Q, then P holds outright. A truth table confirms it is true in all four rows. Its interest is philosophical — the law is valid in classical logic but not provable in intuitionistic logic, so it serves as a test case separating the two systems. Check it in the [truth table generator](!/logic/truth-tables).",
    sectionId: "other"
  }
}

  const conceptIntroFigures = {
    candidatesTable: ciCandidatesTable,
    truthTable: ciTruthTable,
  };

  const demoUnits = {
    excludedMiddle: demoUnitFrame({
      svg: vennTruthTableDiagrams['tautology'],
      caption: 'P &#8744; &#172;P covers every case',
      text: 'Let circle A stand for the cases where P is true. P &#8744; &#172;P shades A together with everything outside it, so no case is left unshaded: the formula is true under every assignment, which is what makes it a tautology. Check other formulas on the',
      href: '/set-theory/visual-tools/venn-truth-table',
      linkText: 'Venn truth-table explorer',
    }),
  };

  return {
    props:{
      demoUnits,
      conceptIntroFigures,
      tautologies,
      introContent,
      sectionsContent,
      keyWords,
      faqQuestions


    }
  }
}


export default function TautologyPage({demoUnits, tautologies ,introContent ,sectionsContent,keyWords ,faqQuestions, conceptIntroFigures}) {

  // const theoremHTML = renderAcademicBlockHTML("Theorem 1.2 (Existence and Uniqueness).\nA system of linear equations has either no solutions, exactly one solution, or infinitely many solutions.", 
  //   "definition");
  const theoremHTML = renderAcademicBlockHTML(
    "Theorem 1.2 (Existence and Uniqueness).\nA system of linear equations has either no solutions, exactly one solution, or infinitely many solutions.",
    "definition"
  );

  const content="Theorem 1.2 (Existence and Uniqueness).\nA system of linear equations has either no solutions, exactly one solution, or infinitely many solutions."


  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // "Definition" section concept introduction — template G (exclusion).
  const conceptIntro = {
    beats: [
      {
        id: 'candidates',
        lead: `Five formulas, and the question is which of them can never come out false.`,
        content: [
          `Some of these say something about the world — whether $P$ and $Q$ happen to be true. Others might be true no matter what. Before naming that property, list them.`,
          ciTable('candidatesTable'),
        ],
      },
      {
        id: 'sort',
        kind: 'instance',
        lead: `Checked in every row of a truth table, only A and E are true throughout.`,
        content: [
          `To test a formula, list every truth assignment of its variables in a truth table and evaluate the formula in each row. With $n$ variables there are $2^n$ rows: two for $P∨¬P$, four for a formula in $P$ and $Q$, eight for one in $P$, $Q$ and $R$. The formula is a tautology exactly when its column holds T in all of these rows.`,
          ciTable('truthTable'),
          `@academic[pitfall,aside:true,width:35%:Checking only some rows
Calling $P \\to (P \\land Q)$ a tautology after the rows $P = T$, $Q = T$ and $P = F$ misses the row $P = T$, $Q = F$, where $P \\land Q$ is F and the formula is F. It is not a tautology.
[Read more](!#pitfalls)]@`,
        ],
      },
      {
        id: 'fault',
        lead: `Each rejected formula fails in a particular row, and the near-miss E fails in none.`,
        content: `B is false in every row — it can never be true. C fails in the single row where $P$ is true and $Q$ is false. D fails whenever $P$ is false, because then "$P$ and anything" is false. E looks as if it should depend on $Q$, but it cannot fail: when $P$ is true the inner $Q \\to P$ is true, and when $P$ is false the whole implication is true automatically.`,
      },
      {
        id: 'rule',
        lead: `The rule: true under every assignment of truth values, whatever the components say.`,
        content: [
          `A formula with this property is true because of its shape, not because of facts about $P$ or $Q$. The most familiar example is A:`,
          `@academic[example:Example
\t\t\t\t\t\t$P∨¬P$
(The [law](!/logic/propositional-logic/laws) of the excluded middle: "P or not P" is always true.)]@`,
          <div key={'unit-excludedMiddle'} dangerouslySetInnerHTML={{ __html: demoUnits.excludedMiddle }} />,
          `A tautology always fills the whole diagram; a contradiction always leaves it empty.`,
        ],
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `A [tautology](!/logic/definitions#tautology) is a proposition that is always true, regardless of the truth values of its components. In [propositional logic](!/logic/propositional-logic), a tautology is a formula that evaluates to true under all possible truth assignments.`,
        footer: `Of the five candidates, A and E are tautologies.`,
      },
      {
        id: 'kind',
        lead: `Being a tautology is a property of a formula: it either has it or does not.`,
        content: `"Tautology" classifies formulas, the way "even" classifies numbers. Every formula falls into exactly one of three groups: true in every row (a tautology, like A and E), false in every row (a [contradiction](!/logic/propositional-logic/semantics/contradiction), like B), or true in some rows and false in others (like C and D).`,
      },
      {
        id: 'caveat',
        lead: `A rejected formula is usually still useful: it is true somewhere.`,
        content: `C and D are not tautologies, but each has rows where it is true — they are satisfiable, and most useful statements are of this kind. Only B is hopeless, false everywhere. And any rejected formula can be turned into a tautology by joining it with its own negation: $C \\lor \\lnot C$ is true in every row.`,
      },
      {
        id: 'exit',
        content: `The rest of the page covers tautology notation, how tautologies relate to logical equivalence, the laws of logic read as tautologies, other important tautologies, and how tautologies and contradictions mirror each other.`,
      },
    ],
  }

    const tautologySections=[
            {
            id:'definition',
            title:sectionsContent.definition.title,
            content:[
              <ConceptIntro key={'definition-intro'} data={conceptIntro} />,
            ],
          },
          {
            id:'notation',
            title:sectionsContent.notation.title,
            content:[
              <NotationSection
                key={'notation'}
                title={sectionsContent.notation.title}
                lead={sectionsContent.notation.lead}
                inherited={sectionsContent.notation.inherited}
                entries={sectionsContent.notation.entries}
                symbolsHref={sectionsContent.notation.symbolsHref}
                symbolsLabel={sectionsContent.notation.symbolsLabel}
                parentHref={sectionsContent.notation.parentHref}
                parentLabel={sectionsContent.notation.parentLabel}
                theme={'navy'}
              />,
            ]
          },
            {
            id:'tautology_vs_equivalence',
            title: sectionsContent.tautology_equivalence.title,
            content:sectionsContent.tautology_equivalence.content
          },
            {
            id:'laws_as-tautologies',
            title:sectionsContent.laws.title,
            
            content:sectionsContent.laws.content,
          },
            {
            id:'other',
            title:sectionsContent.other.title,
            content:[
                sectionsContent.other.before,
                <ExpandableTable data={tautologies}
                key={1}
                copyableFields={'expression'}/>,
                sectionsContent.other.after,
            ]
          },
            {
            id:'tautology_vs_contradiction',
            title:sectionsContent.tautology_contradiction.title,
            content:[
              sectionsContent.tautology_contradiction.before,
              
              <div key={2} dangerouslySetInnerHTML={{ __html: renderAcademicBlockHTML(
                `The negation of a tautology is always a contradiction, and the negation of a contradiction is always a tautology.`, "theorem") }} />
              ,
            sectionsContent.tautology_contradiction.after,
            sectionsContent.tautology_contradiction.svg,
            sectionsContent.tautology_contradiction.table,
            `@academic[punchline:Negation swaps the two extremes, so showing a formula is always true is the same task as showing its negation is never true.]@`,



``

]
          },
          {
            id:'pitfalls',
            title:sectionsContent.pitfalls.title,
            content:sectionsContent.pitfalls.content,
          },
          // faq: rendered component — must be built here, not in getStaticProps
          {
            id:'faq',
            title:sectionsContent.faq.title,
            link:``,
            content:[
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
          //     {
        //     id:'',
        //     title:'',
        //     content:``
        //   },
    ]
  return (
    <>
    <Head>
  <title>Tautology in Propositional Logic | Learn Math Class</title>
  <meta name="description" content="Learn about tautologies in propositional logic. Understand definitions, examples, and relationships with contradictions and logical equivalences." />
  <meta name="keywords" content={keyWords.join(', ')} />
  <link rel="canonical" href="https://www.learnmathclass.com/logic/propositional-logic/semantics/tautology" />
  
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Tautology in Propositional Logic | Learn Math Class" />
  <meta property="og:description" content="Learn about tautologies in propositional logic. Complete guide with definitions and examples." />
  <meta property="og:url" content="https://www.learnmathclass.com/logic/propositional-logic/semantics/tautology" />
  <meta property="og:site_name" content="Learn Math Class" />
  
  <meta name="robots" content="index, follow" />
  
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Tautology in Propositional Logic",
        "description": "Learn about tautologies in propositional logic. Complete educational guide.",
        "author": {
          "@type": "Organization",
          "name": "Learn Math Class"
        },
        "mainEntityOfPage": "https://www.learnmathclass.com/logic/propositional-logic/semantics/tautology",
        "keywords": keyWords
      })
    }}
  />
</Head>
    {/* <GenericNavbar/> */}
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
    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Tautology</h1>
    <br/>
    <SectionTableOfContents sections={tautologySections}
     showSecondaryNav={true}
     secondaryNavMode="siblings"
     secondaryNavTitle="Similar Pages"/>
    <br/>
    <br/>
    <br/>
    <IntroSection
         id={introContent.id}
         title={introContent.title} 
         content={introContent.content}
         backgroundColor="#f2f2f2"
         textColor="#06357a"
       />
    <br/>
    <br/>
 <Sections sections={tautologySections}/>
    <br/>
    <br/>
    {/* <ScrollUpButton/> */}
    
    </>
  )
}
