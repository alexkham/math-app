import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import '../../../../pages.css'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Sections from '@/app/components/page-components/section/Sections'
import ExpandableTable from '@/app/components/data-wrapper/generic-table/ExpandableTable'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Head from 'next/head';
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import vennTruthTableDiagrams from '@/app/components/diagrams/set-theory/vennTruthTableDiagrams'
import { tableHeaders } from '@/app/styles/theme'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'


export async function getStaticProps(){


  
 const keyWords=['logic','propositional logic','contradiction',
  'tautology','tautology and contradiction','tautology and contradiction']



  const contradictions = [
    {
      id: "1",
      name: "Simple Contradiction",
      expression: "P ∧ ¬P",
      explanation: "A proposition and its negation cannot both be true"
    },
    {
      id: "2",
      name: "Multiple Contradiction",
      expression: "(P ∧ Q) ∧ ¬(P ∧ Q)",
      explanation: "A compound proposition and its negation cannot both be true"
    },
    {
      id: "3",
      name: "Implication Contradiction",
      expression: "(P → Q) ∧ (P ∧ ¬Q)",
      explanation: "Cannot have P implying Q while P is true and Q is false"
    },
    {
      id: "4",
      name: "Biconditional Contradiction",
      expression: "(P ↔ Q) ∧ (P ∧ ¬Q)",
      explanation: "Cannot have P equivalent to Q while P is true and Q is false"
    },
    {
      id: "5",
      name: "Disjunction Contradiction",
      expression: "¬(P ∨ Q) ∧ (P ∨ Q)",
      explanation: "A disjunction and its negation cannot both be true"
    },
    {
      id: "6",
      name: "Exclusive Disjunction Contradiction",
      expression: "(P ⊕ Q) ∧ (P ↔ Q)",
      explanation: "P and Q cannot be both different and the same"
    },
    {
      id: "7",
      name: "Triple Contradiction",
      expression: "P ∧ ¬P ∧ Q",
      explanation: "Adding propositions to a contradiction still yields a contradiction"
    },
    {
      id: "8",
      name: "Negated Tautology",
      expression: "¬(P → P)",
      explanation: "The negation of a self-implication tautology"
    },
    {
      id: "9",
      name: "Material Implication Contradiction",
      expression: "(P → Q) ∧ ¬(¬P ∨ Q)",
      explanation: "Contradicts the material implication equivalence"
    },
    {
      id: "10",
      name: "Syllogism Contradiction",
      expression: "((P → Q) ∧ (Q → R)) ∧ (P ∧ ¬R)",
      explanation: "Contradicts the transitive property of implication"
    },
    {
      id: "11",
      name: "Distributive Law Contradiction",
      expression: "¬((P ∧ (Q ∨ R)) ↔ ((P ∧ Q) ∨ (P ∧ R)))",
      explanation: "Negation of the distributive property of conjunction over disjunction"
    },
    {
      id: "12",
      name: "Absorption Law Contradiction",
      expression: "¬((P ∨ (P ∧ Q)) ↔ P)",
      explanation: "Negation of the absorption property"
    },
    {
      id: "13",
      name: "Double Negation Contradiction",
      expression: "¬(¬¬P ↔ P)",
      explanation: "Negation of the double negation equivalence"
    },
    {
      id: "14",
      name: "Contraposition Contradiction",
      expression: "¬((P → Q) ↔ (¬Q → ¬P))",
      explanation: "Negation of the contrapositive equivalence"
    },
    {
      id: "15",
      name: "Material Equivalence Contradiction",
      expression: "¬((P ↔ Q) ↔ ((P → Q) ∧ (Q → P)))",
      explanation: "Negation of the definition of the biconditional"
    },
    {
      id: "16",
      name: "Exportation Law Contradiction",
      expression: "¬(((P ∧ Q) → R) ↔ (P → (Q → R)))",
      explanation: "Negation of the exportation equivalence"
    },
    {
      id: "17",
      name: "Self-Contradiction with Implication",
      expression: "(P → Q) ∧ (P → ¬Q) ∧ P",
      explanation: "P implies contradictory outcomes while P is true"
    },
    {
      id: "18",
      name: "Conjunction-Disjunction Contradiction",
      expression: "(P ∧ Q) ∧ ¬(P ∨ Q)",
      explanation: "Cannot have a conjunction be true while its disjunction is false"
    },
    {
      id: "19",
      name: "Tautology-Contradiction Implication",
      expression: "((P ∨ ¬P) → (Q ∧ ¬Q))",
      explanation: "A tautology cannot imply a contradiction"
    },
    {
      id: "20",
      name: "Vacuous Truth Contradiction",
      expression: "¬P ∧ ¬(P → Q)",
      explanation: "Contradicts the principle of vacuous truth for implication"
    },
    {
      id: "21",
      name: "Biconditional Chain Contradiction",
      expression: "(P ↔ Q) ∧ (Q ↔ R) ∧ ¬(P ↔ R)",
      explanation: "Contradicts the transitivity of the biconditional"
    },
    {
      id: "22",
      name: "Disjunctive Syllogism Contradiction",
      expression: "(P ∨ Q) ∧ ¬P ∧ ¬Q",
      explanation: "Contradicts the disjunctive syllogism principle"
    },
    {
      id: "23",
      name: "Hypothetical Syllogism Contradiction",
      expression: "(P → Q) ∧ (Q → R) ∧ (P ∧ ¬R)",
      explanation: "Contradicts the hypothetical syllogism principle"
    },
    {
      id: "24",
      name: "Exclusive Or Contradiction",
      expression: "(P ⊕ Q) ∧ ¬(P ∨ Q)",
      explanation: "Exclusive OR requires at least one proposition to be true"
    }
  ];


  
  const introContent = {
    id: "intro",
    title: "Introduction",
    content: `Contradictions form a cornerstone concept in propositional logic, representing logical impossibility. A contradiction is a formula that evaluates to false under all possible interpretations of its variables. The simplest example is P ∧ ¬P, which states that a proposition and its negation are simultaneously true – an impossible scenario. 

Unlike ordinary propositions that may be true or false depending on circumstances, contradictions are guaranteed to be false, providing absolute certainty in logical analysis. This property makes contradictions invaluable in proof techniques, particularly in reductio ad absurdum (proof by contradiction), where we demonstrate that assuming the opposite of what we want to prove leads to a logical impossibility.

This page explores contradictions in detail, examining their properties, relationship to [tautologies](!/logic/propositional-logic/semantics/tautology), and applications in logical reasoning and formal proofs.`
  }

  // Concept introduction ("Definition" section) — template B, definition
  // first. Running instance: P ∧ ¬P, then (P ∨ Q) ∧ ¬P ∧ ¬Q. Old definition
  // text is kept in contradictionContent.definition, unused; its paragraphs,
  // example box, pitfall aside and the nonContradiction demo frame with its
  // line are carried in unchanged.
  const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
  const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
    cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
  const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
  const ciOneTable = ciTableOpen(['P', '¬P', 'P ∧ ¬P']) +
    ciRow(['T', 'F', 'F'], { color: '#a4243b', cols: [2] }) +
    ciRow(['F', 'T', 'F'], { shade: true, last: true, color: '#a4243b', cols: [2] }) +
    '</tbody></table>'
  const ciTwoTable = ciTableOpen(['P', 'Q', 'P ∨ Q', '¬P ∧ ¬Q', '(P ∨ Q) ∧ ¬P ∧ ¬Q']) +
    ciRow(['T', 'T', 'T', 'F', 'F'], { color: '#a4243b', cols: [4] }) +
    ciRow(['T', 'F', 'T', 'F', 'F'], { shade: true, color: '#a4243b', cols: [4] }) +
    ciRow(['F', 'T', 'T', 'F', 'F'], { color: '#a4243b', cols: [4] }) +
    ciRow(['F', 'F', 'F', 'T', 'F'], { shade: true, last: true, color: '#a4243b', cols: [4] }) +
    '</tbody></table>'

  const contradictionContent={
      
    definition:{
      title:'Definition',
      description:`A **contradiction** is a proposition that is always false, regardless of the truth values of its components. In [propositional logic](!/logic/propositional-logic), a contradiction is a formula that evaluates to false under all possible truth assignments.

@academic[example:Example

\t\t\t\t\t$P∧¬P$

(The [law](!/logic/propositional-logic/laws) of non-contradiction: "P and not P" is always false.)]@

@academic[pitfall,aside:true,width:35%:Judging from a single row
Calling $P \\land Q$ a contradiction because it is F at $P = T$, $Q = F$ ignores the row $P = T$, $Q = T$, where it is T. A contradiction is F in every row; $P \\land Q$ is a contingency.
[Read more](!#pitfalls)]@
To decide whether a formula is a contradiction, build its full truth table: a formula with $n$ variables has $2^n$ rows, one for each assignment of truth values. The verdict is read from the column under the main connective. $P \\land \\neg P$ has a single variable and two rows, and its column reads F, F.
`
    },

    notation:{
      title: `Contradiction Notation`,
      lead: `The mirror of the tautology marks: a constant for falsehood, a turnstile carrying a negation, and the equivalence spelling. Everything here is the [tautology notation](!/logic/propositional-logic/semantics/tautology#notation) reflected — same grammar, opposite pole.`,
      inherited: `$\\top$, $\\vdash$ and $\\vDash$ are owned by the [tautology page](!/logic/propositional-logic/semantics/tautology#notation); the connectives and letters by [propositional logic notation](!/logic/propositional-logic/syntax#notation); $\\equiv$ by [equivalence notation](!/logic/propositional-logic/semantics/equivalences#notation).`,
      entries: [
        {
          id: 'falsum',
          tex: `$\\bot$`,
          read: `bottom; falsum; the false constant`,
          means: `The false constant — $\\top$ turned upside down, and the inversion is the whole idea: $\\bot$ denotes falsehood itself, a formula false under every assignment, as **Definition** above establishes with $P \\wedge \\neg P$.`,
          cases: `Inside formulas it absorbs and annihilates in mirror image: $P \\wedge \\bot$ is $\\bot$, $P \\vee \\bot$ is $P$ — the [laws](!/logic/propositional-logic/laws) reflect the $\\top$ rules exactly. Proof by contradiction is the practical payoff: derive $\\bot$ and the assumption falls.`,
          alsoWritten: `$F$ or $\\mathbf{F}$ in truth tables and elementary texts — the tables on this page use it; some systems write $0$, borrowing Boolean algebra's values.`,
          sameGlyphElsewhere: `The identical glyph is the [perpendicular sign](!/linear-algebra/orthogonality/inner-product#notation) $\\perp$ of geometry and linear algebra, where it relates two objects rather than naming a constant — same shape, different arity.`,
        },
        {
          id: 'turnstile-negation',
          tex: `$\\vdash \\neg P$`,
          read: `the negation of P is provable`,
          means: `The turnstile applied to a negation: $\\vdash \\neg P$ certifies that $\\neg P$ is derivable — which is the proof-side way of declaring $P$ contradictory, since a formula false in every case has a provable negation.`,
          cases: `The mirror is exact — $\\vdash P$ marks a [tautology](!/logic/propositional-logic/semantics/tautology#notation), $\\vdash \\neg P$ a contradiction; negation is what carries a claim from one pole to the other.`,
          confusedWith: `$\\nvdash P$. "Not provable" is a much weaker statement than "the negation is provable" — the crossed turnstile denies a derivation exists; $\\vdash \\neg P$ supplies one for the opposite formula.`,
        },
        {
          id: 'equiv-bot',
          tex: `$P \\equiv \\bot$`,
          read: `P is equivalent to the false constant`,
          means: `The equivalence spelling: rather than call $P$ a contradiction, assert that it agrees with $\\bot$ in every case — the same construction the tautology page makes with $\\top$.`,
          cases: `The laws of **Contradictions as Logic Laws** below are written this way, in the $F$ dialect: $P \\wedge \\neg P \\equiv F$; a simplification chain ending at $\\bot$ has proved a contradiction.`,
          confusedWith: `A claim that $P$ is false right now. Like its twin, $\\equiv$ delivers a verdict over all cases, not a truth assignment in one — the sentence "$P$ happens to be false" is a different, weaker statement.`,
        },
      ],
      symbolsHref: `/math-symbols/math-logic`,
      symbolsLabel: `All logic symbols`,
      parentHref: `/logic/propositional-logic/semantics`,
      parentLabel: `Semantics`,
    },
    laws:{
      title:'Contradictions as Logic Laws',
      description:`As discussed in previous [section](!/logic/propositional-logic/semantics/contradiction#definition), a contradiction is a proposition that always evaluates to false. Some contradictions are so fundamental that they represent core principles of propositional logic.
          
          ## Negations of Logical Laws as Contradictions


@academic[rule_corollary_plain:When we negate certain fundamental laws of propositional logic, we obtain expressions that are always false, making them **contradictions**.]@
          
          **Examples**:
          
          **Negation of the Law of Excluded Middle**:
          \t\t\t\t\t\t$¬(P∨¬P)≡F$
          This states that a proposition is neither true nor false, which is always false, making it a contradiction.
          
          **Negation of the Law of Non-Contradiction**:
          \t\t\t\t\t\t$P∧¬P≡F$
          This states that a proposition is both true and false simultaneously, which is always false.
          
          ## Contradictory Forms of Equivalences
          We can also derive contradictions by asserting the negation of logical equivalences:
          
          **Negation of Commutative Laws**:
          \t\t\t\t\t\t$¬((P∨Q)↔(Q∨P))≡F$
          \t\t\t\t\t\t$¬((P∧Q)↔(Q∧P))≡F$
          
          **Negation of De Morgan's Laws**:
          \t\t\t\t\t\t$¬(¬(P∨Q)↔(¬P∧¬Q))≡F$
          \t\t\t\t\t\t$¬(¬(P∧Q)↔(¬P∨¬Q))≡F$
          
@academic[pitfall,aside:true,width:35%:Pushing the negation in without flipping the connective
Rewriting $\\neg(P \\lor \\neg P)$ as $\\neg P \\lor \\neg\\neg P$ gives $\\neg P \\lor P$, which is T in both rows, a tautology. De Morgan's law turns the $\\lor$ into $\\land$: $\\neg P \\land P$, which is F in both rows.
[Read more](!#pitfalls)]@
In each of these formulas the negation sign stands in front of a parenthesis, so its scope is the whole law inside it. There are two ways to confirm that the result is a contradiction. One is to evaluate the law first and then negate its entire column. The other is to move the negation inward step by step, with De Morgan's laws and double negation, until it reaches the single letters. Both routes must end with F in every row.

          These contradictions are the logical foundation of proof by contradiction methods, where assuming the negation of the statement to be proved leads to a contradiction, thereby validating the original statement.
          
          Visit corresponding page to learn more about [propositional logic laws](!/logic/propositional-logic/laws).
          
          Use this tool to evaluate [truth tables](!/logic/truth-tables).

@academic[punchline:Negate any law of logic and the result is a formula that no assignment can make true.]@
          `

    },
    other:{
      title:'Contradictions that are not laws',
      description: `While some contradictions are negations of fundamental logical laws, not all **contradictions** represent the negation of logical laws. A law in logic is a fundamental principle that defines how logical operations behave, often used in formal proofs and reasoning systems.
          
@academic[fact,aside:true,width:35%:Twenty-four entries, one formula
$P \\land \\neg P$ and $Q \\land \\neg Q$ share no letter, yet they are equivalent: in all four rows of $(P, Q)$ both columns read F. Up to equivalence, all 24 entries of the table below are one and the same formula, $\\bot$.]@
      However, some **contradictions** are simply well-formed logical statements that always evaluate to false without being the direct negation of a fundamental principle.
      
      These non-law contradictions may still be useful in proofs, particularly in proof by contradiction methods (reductio ad absurdum), but they do not represent the negation of core logical rules like De Morgan's Laws or the Law of Excluded Middle. Instead, they are often the result of specific logical constructions or transformations that yield contradictory results.
      
            `,
            description2: `
     Use this [tool](!/logic/truth-tables) to generate truth tables dynamically and evaluate these contradictions.`
    },
    contradiction_vs_tautology:{
      title:'Contradiction vs Tautology',
      description: `@academic[fact,aside:true,width:35%:From a contradiction, anything follows
$(P \\land \\neg P) \\to Q$ is a tautology whatever $Q$ says, even "the moon is made of cheese": its left side is never true, so no row can make the implication false. This is the principle of explosion, ex falso quodlibet.]@
In propositional logic, tautologies and contradictions represent opposite ends of logical certainty. 
      While [tautology](!/logic/propositional-logic/semantics/tautology) is a logical formula that always evaluates to true, no matter what truth values are assigned to its variables, a contradiction, in contrast, is always false regardless of its variables' values.
      These concepts are perfect mirrors of each other - applying negation to a [tautology](!/logic/propositional-logic/semantics/tautology) produces a contradiction, and negating a contradiction creates a [tautology](!/logic/propositional-logic/semantics/tautology). 
      This relationship is not just a curiosity but forms the foundation of logical reasoning. Tautologies tell us what must be true in all possible worlds, while contradictions show us what cannot be true under any circumstances. Together, they establish the boundaries of logical possibility and impossibility, providing the framework for all logical deduction in propositional logic.`,
      svg:    
      `<svg width="500" height="300" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" 
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
</svg>`,
     description2:       
     `@academic[pitfall,aside:true,width:35%:Negating a formula that is not a tautology
Taking $\\neg(P \\to Q)$ for a contradiction because $P \\to Q$ is not a tautology fails at $P = T$, $Q = F$, where $\\neg(P \\to Q)$ is T. A contingency negates to a contingency: $\\neg(P \\to Q)$ is T in one row and F in the other three.
[Read more](!#pitfalls)]@
These two related and opposite concepts exist in perfect duality through negation as shown in the diagram – the negation of any [tautology](!/logic/propositional-logic/semantics/tautology) produces a contradiction, and negating any contradiction creates a [tautology](!/logic/propositional-logic/semantics/tautology). This relationship reveals a fundamental symmetry in logical reasoning.
     
     This duality plays a crucial role in logical analysis. Tautologies provide the foundation for valid arguments and proofs, as they represent statements that must necessarily be true. Contradictions enable powerful proof techniques like reductio ad absurdum, where we disprove statements by showing they lead to contradictions. Together, they establish the boundary conditions of logical reasoning – what must be true and what cannot be true – providing the fixed points around which all logical deduction revolves in propositional logic.`


    },

    pitfalls:{
      title:'Common Pitfalls',
      description:`Four slips account for many wrong answers about contradictions. Each is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Judging from a single row**

A formula is evaluated in one assignment, comes out false there, and is declared a contradiction. A contradiction must be false in every assignment; a formula that is false in some rows and true in others is a contingency.

Wrong working: at $P = T$, $Q = F$ the formula $P \\land Q$ is $T \\land F$, which is F. So $P \\land Q$ is called a contradiction.

Right working: for $(P, Q)$ equal to $(T, T)$, $(T, F)$, $(F, T)$, $(F, F)$, the formula $P \\land Q$ takes the values T, F, F, F. The first row is T, so $P \\land Q$ is satisfiable: it is a contingency, not a contradiction.

Why it happens: an ordinary false statement and a contradiction both come out F, and the checking stops at the first F. The word "every" in the definition is easy to skip.

How to check: look for one row where the formula is T. If such a row exists, the formula is not a contradiction.

**Pushing the negation in without flipping the connective**

To simplify a negated law, the negation is moved inside the parentheses and applied to each part, but the connective between the parts is kept. De Morgan's laws require the connective to change as well: $\\lor$ becomes $\\land$, and $\\land$ becomes $\\lor$.

Wrong working: $\\neg(P \\lor \\neg P)$ becomes $\\neg P \\lor \\neg\\neg P$, which is $\\neg P \\lor P$. At $P = T$ this is $F \\lor T$, which is T, and at $P = F$ it is $T \\lor F$, which is T. The negated law of excluded middle comes out as a tautology.

Right working: $\\neg(P \\lor \\neg P) \\equiv \\neg P \\land \\neg\\neg P \\equiv \\neg P \\land P$. At $P = T$ this is $F \\land T$, which is F, and at $P = F$ it is $T \\land F$, which is F. The formula is a contradiction, as the section states.

Why it happens: negating each part looks like the whole job, much as a minus sign is multiplied into a bracket in algebra. The change of connective has no counterpart there, so it is forgotten.

How to check: a negation must have the opposite value of the original in every row. At $P = T$, $P \\lor \\neg P$ is T, so its negation must be F there; $\\neg P \\lor P$ is T at $P = T$, so it cannot be the negation.

**Joining a contradiction with or**

The rule that a contradiction stays a contradiction when more letters are attached is applied to every connective. It holds for $\\land$ only. A disjunction is true as soon as one part is true, so the attached part can make the whole formula true.

Wrong working: $P \\land \\neg P$ is a contradiction, and the Triple Contradiction $P \\land \\neg P \\land Q$ shows that attaching $Q$ keeps it one. So $(P \\land \\neg P) \\lor Q$ is called a contradiction too.

Right working: $P \\land \\neg P$ is F in every row, so $(P \\land \\neg P) \\lor Q$ has the same value as $F \\lor Q$, which is the value of $Q$. At $Q = T$ the formula is T, so it is a contingency, equivalent to $Q$.

Why it happens: the table shows the case with $\\land$, and the pattern is carried over without checking which connective does the attaching. The identity law $P \\lor \\bot \\equiv P$ and the domination law $P \\land \\bot \\equiv \\bot$ are easy to mix up.

How to check: replace the contradictory part by F and simplify. $F \\land Q$ is F in every row; $F \\lor Q$ is just $Q$.

**Negating a formula that is not a tautology**

The fact that negating a tautology gives a contradiction is stretched to every formula that is not a tautology. It applies to tautologies only: a formula that is neither a tautology nor a contradiction is a contingency, and so is its negation.

Wrong working: $P \\to Q$ is F at $P = T$, $Q = F$, so it is not a tautology. Therefore $\\neg(P \\to Q)$ is called a contradiction.

Right working: for $(P, Q)$ equal to $(T, T)$, $(T, F)$, $(F, T)$, $(F, F)$, the formula $P \\to Q$ takes the values T, F, T, T, and $\\neg(P \\to Q)$ takes the values F, T, F, F. The row $P = T$, $Q = F$ makes the negation T, so it is a contingency, equivalent to $P \\land \\neg Q$.

Why it happens: tautologies and contradictions are learned as a pair, and every formula gets sorted into one of the two. The third group, the contingencies, drops out of view.

How to check: negation flips every entry of the column. A contradiction needs a column of F only, so the original column must be T only; if it holds even one F, the negation holds a T.`
    },

    faq:{
      title:`Contradiction FAQ`,
    }

  }

// Three questions written from scratch — this page had no faqQuestions object.
// The page's own h2s cover the definition and contradiction-vs-tautology, and
// /logic/truth-tables/contradictions owns identification, unsatisfiability,
// inconsistent premises and explosion. These target buried content: the ⊥
// symbol, proof by contradiction (reserved for this page when it was cut from
// the truth-tables page) and the false-vs-contradictory confusion.
const faqQuestions = {
  obj1: {
    question: "What does the symbol ⊥ mean in logic?",
    answer: "⊥ (read 'bottom' or 'falsum') is the constant for falsehood: a formula false under every assignment, the upside-down twin of ⊤. Truth tables often write it F or 0. Inside formulas it absorbs conjunctions and vanishes from disjunctions: P ∧ ⊥ is ⊥, while P ∨ ⊥ is P. The same glyph also serves as the perpendicularity sign in geometry — one shape, two unrelated jobs.",
    sectionId: "notation"
  },
  obj2: {
    question: "How does proof by contradiction work?",
    answer: "Proof by contradiction (reductio ad absurdum) establishes a statement by assuming its negation and deriving something impossible. Assume ¬P, reason until a contradiction such as Q ∧ ¬Q appears, and conclude that the assumption was untenable — so P holds. The method works because a contradiction is false under every assignment: any assumption that forces one cannot be true.",
    sectionId: "contradictions_as_laws"
  },
  obj3: {
    question: "Is every false statement a contradiction?",
    answer: "No. An ordinary false statement is false under the particular circumstances at hand but could be true under others — its truth table contains both values. A contradiction is false under every possible assignment: no circumstances whatever make it true. 'It is raining' may happen to be false; 'it is raining and it is not raining' cannot be true at all. Test any formula in the [truth table generator](!/logic/truth-tables).",
    sectionId: "definition"
  }
}

  const conceptIntroFigures = {
    oneTable: ciOneTable,
    twoTable: ciTwoTable,
  };

  const demoUnits = {
    nonContradiction: demoUnitFrame({
      svg: vennTruthTableDiagrams['contradiction'],
      caption: 'P &#8743; &#172;P covers no case',
      text: 'Let circle A stand for the cases where P is true. P &#8743; &#172;P asks for cases inside A and outside A at once, and there are none, so nothing is shaded: the formula is false under every assignment, which is what makes it a contradiction. Check other formulas on the',
      href: '/set-theory/visual-tools/venn-truth-table',
      linkText: 'Venn truth-table explorer',
    }),
  };

  return{
    props:{

      demoUnits,
      conceptIntroFigures,
      contradictions,
      introContent,
      contradictionContent,
      faqQuestions,
       seoData: {
      title: "Contradiction in Propositional Logic - Complete Guide | Learn Math Class",
      description: "Learn about contradictions in propositional logic, their relationship to tautologies, and how they represent logical impossibilities. Explore examples, notation, and applications in logical reasoning.",
      keywords: keyWords.join(", "),
      url: "/logic/propositional-logic/semantics/contradiction",
      name: "Contradiction in Propositional Logic"
    },
    keyWords

    }
  }
}

export default function ContradictionPage({demoUnits, conceptIntroFigures,
  seoData,
  contradictions,
  introContent,
  contradictionContent,
  faqQuestions,
  keyWords
}) {
//  const keyWords=['logic','propositional logic','contradiction',
//   'tautology','tautology and contradiction','tautology and contradiction']

 

  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // "Definition" section concept introduction — template B (definition first).
  const conceptIntro = {
    beats: [
      {
        id: 'intuition',
        lead: `Some statements cannot be true, however the world turns out.`,
        content: [
          `"The light is on and the light is not on" needs no checking: whatever the light is doing, the sentence fails. It is like a contract whose second clause cancels the first — it defeats itself, and no facts can rescue it. Logic needs a name for formulas of this kind.`,
        ],
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `A [contradiction](!/logic/definitions#contradiction) is a formula that is false under every assignment of truth values to its variables.`,
        formula: [
          `@academic[example:Example

\t\t\t\t\t$P∧¬P$

(The [law](!/logic/propositional-logic/laws) of non-contradiction: "P and not P" is always false.)]@`,
        ],
        footer: `So $P \\land \\neg P$ is a contradiction: it is false whether $P$ is true or false.`,
      },
      {
        id: 'kind',
        lead: `Being a contradiction is a property of a formula's shape, not of its content.`,
        content: [
          `A **contradiction** is a proposition that is always false, regardless of the truth values of its components. In [propositional logic](!/logic/propositional-logic), a contradiction is a formula that evaluates to false under all possible truth assignments.`,
          <div key={'unit-nonContradiction'} dangerouslySetInnerHTML={{ __html: demoUnits.nonContradiction }} />,
          `Its negation, ¬(P ∧ ¬P), shades everything: the negation of a contradiction is a tautology.`,
        ],
      },
      {
        id: 'example',
        kind: 'instance',
        lead: `Truth tables show it row by row: P ∧ ¬P in two rows, a longer formula in four.`,
        content: [
          `To decide whether a formula is a contradiction, build its full truth table: a formula with $n$ variables has $2^n$ rows, one for each assignment of truth values. The verdict is read from the column under the main connective. $P \\land \\neg P$ has a single variable and two rows, and its column reads F, F.`,
          ciTable('oneTable'),
          `With two variables there are four rows to check. In $(P \\lor Q) \\land \\neg P \\land \\neg Q$, the first part needs at least one of $P$, $Q$ true and the second needs both false, so every row fails.`,
          ciTable('twoTable'),
        ],
      },
      {
        id: 'verify',
        lead: `The definition promised false in every row — so one false row proves nothing.`,
        content: [
          `Both tables kept the promise: the last column is F all the way down. A formula that is F in some rows and T in others is not a contradiction, however many F's it shows.`,
          `@academic[pitfall,aside:true,width:35%:Judging from a single row
Calling $P \\land Q$ a contradiction because it is F at $P = T$, $Q = F$ ignores the row $P = T$, $Q = T$, where it is T. A contradiction is F in every row; $P \\land Q$ is a contingency.
[Read more](!#pitfalls)]@`,
        ],
      },
      {
        id: 'caveat',
        lead: `Scope: contradictions are one of three kinds of formula, and most formulas are none of the extremes.`,
        content: `A formula is a tautology (T in every row), a contradiction (F in every row) or a contingency (some of each). Negation swaps the first two, turning any contradiction into a [tautology](!/logic/propositional-logic/semantics/tautology) and back. Some contradictions are negated laws of logic and some are not, as the section on [contradictions that are not laws](!/logic/propositional-logic/semantics/contradiction#other_contradictions) shows.`,
      },
      {
        id: 'exit',
        content: `The rest of the page covers the notation, contradictions as negated laws, other contradictions, and how contradictions mirror tautologies.`,
      },
    ],
  }

    const contradictionSections=[
            {
            id:'definition',
            title: contradictionContent.definition.title,
            content:[
              <ConceptIntro key={'definition-intro'} data={conceptIntro} />,
            ]
          },
          {
            id:'notation',
            title: contradictionContent.notation.title,
            content:[
              <NotationSection
                key={'notation'}
                title={contradictionContent.notation.title}
                lead={contradictionContent.notation.lead}
                inherited={contradictionContent.notation.inherited}
                entries={contradictionContent.notation.entries}
                symbolsHref={contradictionContent.notation.symbolsHref}
                symbolsLabel={contradictionContent.notation.symbolsLabel}
                parentHref={contradictionContent.notation.parentHref}
                parentLabel={contradictionContent.notation.parentLabel}
                theme={'navy'}
              />,
            ]
          },
           
          {
            id:'contradictions_as_laws',
            title:contradictionContent.laws.title,
            content:contradictionContent.laws.description
          },
          {
            id:'other_contradictions',
            title:contradictionContent.other.title,
            content:[
              contradictionContent.other.description ,
                <ExpandableTable data={contradictions}
                key={1}
                copyableFields={'expression'}/>,
                `@academic[pitfall,aside:true,width:35%:Joining a contradiction with or
Treating $(P \\land \\neg P) \\lor Q$ as a contradiction, like the Triple Contradiction, fails at $Q = T$, where the formula is T. Only $\\land$ keeps a contradiction false; $(P \\land \\neg P) \\lor Q$ is equivalent to $Q$.
[Read more](!#pitfalls)]@
Several entries of the table build a larger contradiction from a smaller one, as the Triple Contradiction attaches $Q$ to $P \\land \\neg P$. The connective that does the attaching decides the outcome. A conjunction is true only in the rows where every part is true, so a part that is false in every row keeps the whole conjunction false in every row, whatever the other parts are.`,
                contradictionContent.other.description2 ,
               
            ]
          },
                {
            id:'contradiction_vs_tautology',
            title:contradictionContent.contradiction_vs_tautology.title,
            content:[

              contradictionContent.contradiction_vs_tautology.description,
              contradictionContent.contradiction_vs_tautology.svg,
              contradictionContent.contradiction_vs_tautology.description2,

            ]
          },
          {
            id:'pitfalls',
            title:contradictionContent.pitfalls.title,
            content:contradictionContent.pitfalls.description
          },
          // faq: rendered component — must be built here, not in getStaticProps
          {
            id:'faq',
            title:contradictionContent.faq.title,
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
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": seoData.name,
        "description": seoData.description,
        "keywords": seoData.keywords,
        "url": `https://www.learnmathclass.com${seoData.url}`,
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "mainEntity": {
          "@type": "Article",
          "name": seoData.name,
          "dateModified": new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          }
        }
      })
    }}
  />
</Head>
     <Head>
      <title>Contradiction in Propositional Logic | Learn Math Class</title>
      <meta name="description" content="Learn about contradictions in propositional logic, their relationship to tautologies, and how they represent logical impossibilities. Explore examples, notation, and applications in logical reasoning." />
      <meta name="keywords" content="contradiction, propositional logic, logical fallacy, law of non-contradiction, tautology, logical reasoning, formal proofs, reductio ad absurdum, proof by contradiction" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://www.learnmathclass.com/logic/propositional-logic/semantics/contradiction" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.learnmathclass.com/logic/propositional-logic/semantics/contradiction" />
      <meta property="og:title" content="Contradiction in Propositional Logic | Learn Math Class" />
      <meta property="og:description" content="Explore contradictions in propositional logic - logical formulas that always evaluate to false regardless of their variables' truth values." />
      <meta property="og:image" content="https://www.learnmathclass.com/images/og-contradiction.jpg" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.learnmathclass.com/logic/propositional-logic/semantics/contradiction" />
      <meta property="twitter:title" content="Contradiction in Propositional Logic | Learn Math Class" />
      <meta property="twitter:description" content="Explore contradictions in propositional logic - logical formulas that always evaluate to false regardless of their variables' truth values." />
      <meta property="twitter:image" content="https://www.learnmathclass.com/images/twitter-contradiction.jpg" />
      
      {/* Mobile responsiveness */}
      {/* Structured data (JSON-LD) for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Contradiction in Propositional Logic",
            "description": "Learn about contradictions in propositional logic, their relationship to tautologies, and how they represent logical impossibilities.",
            "author": {
              "@type": "Organization",
              "name": "Learn Math Class"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Learn Math Class",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.learnmathclass.com/logo.png"
              }
            },
            "datePublished": "2023-01-15",
            "dateModified": "2023-05-20",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.learnmathclass.com/logic/propositional-logic/semantics/contradiction"
            }
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
    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Contradiction</h1>
    <br/>
    <SectionTableOfContents sections={contradictionSections}
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
 <Sections sections={contradictionSections}/>
    <br/>
    <br/>
    {/* <ScrollUpButton/> */}
    
    </>
  )
}
