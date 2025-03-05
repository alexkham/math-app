import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Sections from '@/app/components/page-components/section/Sections'
import ExpandableTable from '@/app/components/data-wrapper/generic-table/ExpandableTable'

export default function TautologyPage() {

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
          name: "Double Negation Implication",
          expression: "((P → Q) ∧ (P → ¬Q)) → ¬P",
          explanation: "If P implies both Q and not-Q, then P must be false"
        },
        {
          id: "20",
          name: "Triple Negation Implication",
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
          name: "Hypothetical Syllogism Disjunctive Form",
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

    const tautologySections=[
            {
            id:'definition',
            title:'Definition and Notation',
            content:`A **tautology** is a proposition that is always true, regardless of the truth values of its components. In [propositional logic](!/logic/propositional-logic), a tautology is a formula that evaluates to true under all possible truth assignments. 
            Example:
\t\t\t\t\t\t$P∨¬P$
(The [law](!/logic/propositional-logic/laws) of the excluded middle: "P or not P" is always true.)
The **notation** commonly used for **tautology** in logic is:  

\t\t\t\t\t\t$\\top$  

(The **top symbol**, also called "verum" or "true constant").  

Alternatively, a **tautology can be denoted** explicitly as:  

\t\t\t\t\t\t$\\vdash P$

which means **"P is provable"** or **"P is always true"**.  

In some texts, tautologies are also expressed using [equivalence](!/logic/propositional-logic/equivalences) sign like this: 

\t\t\t\t\t\t$P \\equiv \\top$

to explicitly state that a proposition $\( P \)$ is always true (equivalent to true).
`
          },
            {
            id:'tautology_vs_equivalence',
            title:'Tautology vs Equivalence',
            content:`## Are all equivalences tautologies?
            As the definition of [equivalence](!/logic/propositional-logic/equivalences) states, two propositions $𝐴$ and $𝐵$ are logically equivalent if they always have the same truth value in every possible scenario. This means that their truth tables are identical. This is a **bilateral relationship** meaning both expressions evaluate to **true** together or **false** together in all cases. It does not matter if they are true or false, the key here is that they are **the same (equal)**.
**Example**:

\t\t\t\t\t\t$(𝑃→𝑄)≡(¬𝑃∨𝑄)$

(Material implication rewritten in disjunctive form.)
As long as the equivalence is valid -the overall bilateral expression as a whole evaluates to true and falls under [definition](!/logic/propositional-logic/tautology#definition) of tautology.
So the final answer to that question is **YES** , as long as equivalence is valid- it is a tautology.

## Are all tautologies logical equivalences?
According to [definition](!/logic/propositional-logic/tautology#definition), a tautology is about a **single proposition that is always true**, while [equivalence](!/logic/propositional-logic/equivalences) is a relationship between two propositions that always have the same truth value.
A tautology must always evaluate to true, but it does not necessarily have to express a relationship between two statements.In fact, there are numerous tautologies that are unilateral expressions that evaluate to true in all possible valuations but don't express a relationship of equality between two propositions.
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

All those are tautologies that do not fall under the definition of [equivalence](!/logic/propositional-logic/equivalences).

This distinction means that while every valid [equivalence](!/logic/propositional-logic/equivalences) is a tautology, not each tautology is [equivalence](!/logic/propositional-logic/equivalences) because some tautologies do not express a two-sided relationship between two propositions.
This means that the set of all logical equivalences is a subset of the set of all tautologies.




<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 650">
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
            {
            id:'laws_as-tautologies',
            title:'Logic Laws as Tautologies',
            
            content:`As discussed in previous [section](!/logic/propositional-logic/tautology#tautology_vs_equivalence), valid equivalence is bilateral statement evaluating to true and in this way it is a **tautology**.
            Since all [propositional logic laws](!/logic/propositional-logic/laws) are either [equivalences](!/logic/propositional-logic/equivalences) or directly tautological statements, we conclude that all propositional logic laws are tautologies.
## Propositional Logic Laws as Equivalences
           Many fundamental laws of propositional logic are expressed as equivalences, meaning both sides of the equation always yield the same truth value. Since the equivalence itself must always hold, it is a **tautology**.
           **Examples**:
           **De Morgan’s Laws**:

\t\t\t\t\t\t$¬(𝑃∨𝑄)≡(¬𝑃∧¬𝑄)$

\t\t\t\t\t\t$¬(P∧Q)≡(¬P∨¬Q)$

**Commutative Laws**:

\t\t\t\t\t\t$P∨Q≡Q∨P$

\t\t\t\t\t\t$P∧Q≡Q∧P$

These laws are always true, making them **tautologies**.See more examples of basic propositional logic laws [here](!/logic/propositional-logic/laws).

## Propositional Logic Laws That Are Directly Tautologies
Some laws are one-sided expressions that are true in all cases without establishing an equivalence. These are still tautologies.

**Law of the Excluded Middle**:

\t\t\t\t\t\t$P∨¬P≡T$
This states that every proposition is either true or false, making it a tautology.

**Law of Non-Contradiction**:

\t\t\t\t\t\t$¬(P∧¬P)≡T$
This states that no proposition can be both true and false simultaneously, which is always true.

Since all [propositional logic laws](!/logic/propositional-logic/laws) either express equivalences that are tautologies or standalone tautologies, we conclude that all propositional logic laws are **tautologies**.

Visit corresponding page to learn more about [propositional logic laws](!/logic/propositional-logic/laws).

Use this tool to evaluate [truth tables](!/logic/truth-tables).

            `
          },
            {
            id:'other',
            title:'Tautologies that are not laws',
            content:[
                `While all propositional logic laws are **tautologies**, not all **tautologies** qualify as laws. A law in logic is a fundamental principle that defines how logical operations behave, often used in formal proofs and reasoning systems.
                However, some **tautologies** are simply valid logical statements that always evaluate to true without establishing a fundamental logical principle.
                These non-law tautologies may still be useful in proofs, derivations, or formal logic, but they do not define core logical rules like De Morgan’s Laws or the Law of the Excluded Middle. Instead, they are often the result of specific logical constructions, implications, or transformations that hold universally without being considered foundational.

                `,
                <ExpandableTable data={tautologies}
                key={1}
                copyableFields={'expression'}/>,
                `
                Use this [tool](!/logic/truth-tables) to generate truth tables dynamically and evaluate those expressions.`
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
    <GenericNavbar/>
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
    <h1 className='title' style={{marginTop:'-30px'}}>Tautology</h1>
    <br/>
    <SectionTableOfContents sections={tautologySections}/>
    <br/>
 <Sections sections={tautologySections}/>
    <br/>
    <br/>
    <ScrollUpButton/>
    
    </>
  )
}
