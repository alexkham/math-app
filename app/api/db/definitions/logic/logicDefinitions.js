// const logicTermsList = [

//        // ─── SYNTAX ──────────────────────────────────────────────────────────────
 
//   {
//     id: 'proposition',
//     name: 'Proposition',
//     category: 'Syntax',
//     formula: `A declarative statement that carries exactly one truth value: true or false, but not both`,
//     link: { url: '/logic/propositional-logic/syntax', text: 'Propositional Logic Syntax' },
//     fields: {
//       intuition: `A proposition is the atomic unit of logical reasoning — a complete claim whose truth can be evaluated. Questions, commands, and exclamations are not propositions because they lack a definite truth value.`,
//       examples: `Propositions:
// - "$2 + 3 = 5$" (true)
// - "Every prime greater than 2 is odd" (true)
// - "The moon is made of cheese" (false)
 
// Not propositions:
// - "$x + 1 = 5$" (contains a free variable)
// - "Close the door" (command)
// - "Is it raining?" (question)`,
//       'related concepts': `- [Elementary Proposition](!/logic/definitions#elementary_proposition)
// - [Compound Proposition](!/logic/definitions#compound_proposition)
// - [Well-Formed Formula](!/logic/definitions#well_formed_formula)`
//     },
//   },
 
//   {
//     id: 'elementary_proposition',
//     name: 'Elementary Proposition',
//     category: 'Syntax',
//     formula: `An atomic, indivisible statement $P$ that cannot be broken into simpler logical components`,
//     link: { url: '/logic/propositional-logic/syntax#alphabet', text: 'Propositional Logic Alphabet' },
//     fields: {
//       intuition: `Elementary propositions are the building blocks from which all compound expressions are constructed. They are denoted by single letters — $P$, $Q$, $R$ — and carry a truth value on their own, without internal logical structure.`,
//       properties: `- Cannot be decomposed using logical connectives
// - Represented by propositional variables ($P$, $Q$, $R$, ...)
// - Each has exactly one truth value under a given assignment
// - Serve as the leaf nodes in a syntax tree`,
//       'related concepts': `- [Proposition](!/logic/definitions#proposition)
// - [Compound Proposition](!/logic/definitions#compound_proposition)
// - [Logical Connective](!/logic/definitions#logical_connective)`
//     },
//   },
 
//   {
//     id: 'compound_proposition',
//     name: 'Compound Proposition',
//     category: 'Syntax',
//     formula: `A proposition built by combining simpler propositions using logical connectives: $\\varphi := P \\circ Q$ where $\\circ \\in \\{\\land, \\lor, \\to, \\leftrightarrow, \\neg\\}$`,
//     link: { url: '/logic/propositional-logic/syntax#formation', text: 'Formation Rules' },
//     fields: {
//       intuition: `Compound propositions are constructed from elementary propositions and connectives according to formation rules. Their truth value is determined entirely by the truth values of their components and the connectives joining them.`,
//       examples: `- $P \\land Q$ (conjunction)
// - $P \\lor Q$ (disjunction)
// - $\\neg P$ (negation)
// - $(P \\to Q) \\leftrightarrow (\\neg Q \\to \\neg P)$ (nested compound)`,
//       'related concepts': `- [Elementary Proposition](!/logic/definitions#elementary_proposition)
// - [Logical Connective](!/logic/definitions#logical_connective)
// - [Well-Formed Formula](!/logic/definitions#well_formed_formula)`
//     },
//   },
 
//   {
//     id: 'well_formed_formula',
//     name: 'Well-Formed Formula (WFF)',
//     category: 'Syntax',
//     formula: `An expression constructed according to the formation rules of propositional logic, ensuring unambiguous syntactic structure`,
//     link: { url: '/logic/propositional-logic/syntax', text: 'Well-Formed Formulas' },
//     fields: {
//       intuition: `A WFF is a syntactically valid logical expression. Just as natural language has grammar, propositional logic has formation rules that determine which symbol sequences constitute proper formulas. An expression that violates these rules — like "$\\land P )(Q$" — is not a WFF and cannot be assigned a truth value.`,
//       properties: `- Every propositional variable is a WFF
// - If $\\varphi$ is a WFF, then $\\neg \\varphi$ is a WFF
// - If $\\varphi$ and $\\psi$ are WFFs, then $(\\varphi \\circ \\psi)$ is a WFF for any binary connective $\\circ$
// - No other expressions are WFFs`,
//       'related concepts': `- [Proposition](!/logic/definitions#proposition)
// - [Logical Connective](!/logic/definitions#logical_connective)
// - [Literal](!/logic/definitions#literal)`
//     },
//   },
 
//   {
//     id: 'literal',
//     name: 'Literal',
//     category: 'Syntax',
//     formula: `An atomic proposition or its negation: $P$ (positive literal) or $\\neg P$ (negative literal)`,
//     link: { url: '/logic/propositional-logic/syntax#normal_forms', text: 'Normal Forms' },
//     fields: {
//       intuition: `Literals are the simplest meaningful units in normal form representations. Every clause in CNF or DNF is built entirely from literals joined by a single connective type.`,
//       examples: `Given propositional variable $P$:
// - $P$ is a positive literal
// - $\\neg P$ is a negative literal
// - $P \\land Q$ is NOT a literal (it is a conjunction of two literals)`,
//       'related concepts': `- [Elementary Proposition](!/logic/definitions#elementary_proposition)
// - [Negation](!/logic/definitions#negation)
// - [DNF](!/logic/definitions#dnf)
// - [CNF](!/logic/definitions#cnf)`
//     },
//   },
 
//   {
//     id: 'logical_connective',
//     name: 'Logical Connective',
//     category: 'Syntax',
//     formula: `An operator that combines or modifies propositions to form compound propositions: $\\neg$, $\\land$, $\\lor$, $\\to$, $\\leftrightarrow$`,
//     link: { url: '/logic/propositional-logic/syntax#alphabet', text: 'Propositional Logic Alphabet' },
//     fields: {
//       intuition: `Connectives are the glue of propositional logic. Each one defines a truth function — a rule that determines the truth value of the compound expression from the truth values of its components.`,
//       properties: `- Unary: negation ($\\neg$)
// - Binary: conjunction ($\\land$), disjunction ($\\lor$), conditional ($\\to$), biconditional ($\\leftrightarrow$)
// - Truth-functional: output determined entirely by input truth values
// - Some sets are functionally complete: $\\{\\neg, \\land\\}$ and $\\{\\neg, \\lor\\}$ can express all others`,
//       'related concepts': `- [Negation](!/logic/definitions#negation)
// - [Conjunction](!/logic/definitions#conjunction)
// - [Disjunction](!/logic/definitions#disjunction)
// - [Conditional](!/logic/definitions#conditional)
// - [Biconditional](!/logic/definitions#biconditional)`
//     },
//   },
 
//   {
//     id: 'negation',
//     name: 'Negation',
//     category: 'Syntax',
//     formula: `A unary connective $\\neg P$ that reverses the truth value of $P$`,
//     link: { url: '/logic/propositional-logic/syntax#alphabet', text: 'Propositional Logic Alphabet' },
//     fields: {
//       intuition: `Negation flips true to false and false to true. It is the only standard unary connective in propositional logic.`,
//       properties: `- Involution: $\\neg(\\neg P) \\equiv P$
// - $P \\land \\neg P$ is always false (contradiction)
// - $P \\lor \\neg P$ is always true (law of excluded middle)
// - De Morgan's laws: $\\neg(P \\land Q) \\equiv \\neg P \\lor \\neg Q$ and $\\neg(P \\lor Q) \\equiv \\neg P \\land \\neg Q$`,
//       'related concepts': `- [Logical Connective](!/logic/definitions#logical_connective)
// - [Contradiction](!/logic/definitions#contradiction)
// - [Law of Excluded Middle](!/logic/definitions#law_of_excluded_middle)
// - [Literal](!/logic/definitions#literal)`
//     },
//   },
 
//   {
//     id: 'conjunction',
//     name: 'Conjunction',
//     category: 'Syntax',
//     formula: `A binary connective $P \\land Q$ that is true only when both $P$ and $Q$ are true`,
//     link: { url: '/logic/propositional-logic/syntax#alphabet', text: 'Propositional Logic Alphabet' },
//     fields: {
//       intuition: `Conjunction corresponds to "and" in natural language. The compound statement $P \\land Q$ requires both components to hold simultaneously.`,
//       properties: `- Commutative: $P \\land Q \\equiv Q \\land P$
// - Associative: $(P \\land Q) \\land R \\equiv P \\land (Q \\land R)$
// - Idempotent: $P \\land P \\equiv P$
// - Identity: $P \\land \\top \\equiv P$
// - Annihilation: $P \\land \\bot \\equiv \\bot$`,
//       'related concepts': `- [Disjunction](!/logic/definitions#disjunction)
// - [Logical Connective](!/logic/definitions#logical_connective)
// - [CNF](!/logic/definitions#cnf)`
//     },
//   },
 
//   {
//     id: 'disjunction',
//     name: 'Disjunction',
//     category: 'Syntax',
//     formula: `A binary connective $P \\lor Q$ that is true when at least one of $P$ or $Q$ is true`,
//     link: { url: '/logic/propositional-logic/syntax#alphabet', text: 'Propositional Logic Alphabet' },
//     fields: {
//       intuition: `Disjunction corresponds to the inclusive "or" in natural language. The compound statement $P \\lor Q$ holds whenever one or both components are true. It is false only when both are false.`,
//       properties: `- Commutative: $P \\lor Q \\equiv Q \\lor P$
// - Associative: $(P \\lor Q) \\lor R \\equiv P \\lor (Q \\lor R)$
// - Idempotent: $P \\lor P \\equiv P$
// - Identity: $P \\lor \\bot \\equiv P$
// - Annihilation: $P \\lor \\top \\equiv \\top$`,
//       'related concepts': `- [Conjunction](!/logic/definitions#conjunction)
// - [Logical Connective](!/logic/definitions#logical_connective)
// - [DNF](!/logic/definitions#dnf)`
//     },
//   },
 
//   {
//     id: 'dnf',
//     name: 'Disjunctive Normal Form (DNF)',
//     category: 'Syntax',
//     formula: `A formula expressed as a disjunction of conjunctions of literals: $(L_1 \\land L_2) \\lor (L_3 \\land L_4) \\lor \\ldots$`,
//     link: { url: '/logic/propositional-logic/syntax#normal_forms', text: 'Normal Forms' },
//     fields: {
//       intuition: `In DNF, the top-level operator is OR, and each clause is a conjunction (AND) of literals. Every propositional formula can be converted to an equivalent DNF expression. DNF is obtained directly from a truth table by forming one conjunction per true row and joining them with OR.`,
//       examples: `$$(P \\land Q) \\lor (\\neg P \\land R) \\lor (Q \\land R)$$
 
// Converting $P \\to Q$:
// $$P \\to Q \\equiv \\neg P \\lor Q \\equiv (\\neg P) \\lor (Q)$$`,
//       'related concepts': `- [CNF](!/logic/definitions#cnf)
// - [Literal](!/logic/definitions#literal)
// - [Disjunction](!/logic/definitions#disjunction)
// - [Conjunction](!/logic/definitions#conjunction)`
//     },
//   },
 
//   {
//     id: 'cnf',
//     name: 'Conjunctive Normal Form (CNF)',
//     category: 'Syntax',
//     formula: `A formula expressed as a conjunction of disjunctions of literals: $(L_1 \\lor L_2) \\land (L_3 \\lor L_4) \\land \\ldots$`,
//     link: { url: '/logic/propositional-logic/syntax#normal_forms', text: 'Normal Forms' },
//     fields: {
//       intuition: `In CNF, the top-level operator is AND, and each clause is a disjunction (OR) of literals. Every propositional formula has an equivalent CNF representation. CNF is widely used in automated theorem proving and satisfiability testing (SAT solvers).`,
//       examples: `$$(P \\lor Q) \\land (\\neg P \\lor R) \\land (Q \\lor R)$$
 
// Converting $P \\leftrightarrow Q$:
// $$P \\leftrightarrow Q \\equiv (P \\lor \\neg Q) \\land (\\neg P \\lor Q)$$`,
//       'related concepts': `- [DNF](!/logic/definitions#dnf)
// - [Literal](!/logic/definitions#literal)
// - [Conjunction](!/logic/definitions#conjunction)
// - [Disjunction](!/logic/definitions#disjunction)`
//     },
//   },
 
//   // ─── SEMANTICS ───────────────────────────────────────────────────────────
 
//   {
//     id: 'conditional',
//     name: 'Conditional (Implication)',
//     category: 'Semantics',
//     formula: `$P \\to Q$: false only when $P$ is true and $Q$ is false; true in all other cases`,
//     link: { url: '/logic/propositional-logic/semantics/implication#definition', text: 'Logical Implication' },
//     fields: {
//       intuition: `The conditional "if $P$ then $Q$" asserts a dependency: whenever $P$ holds, $Q$ must also hold. When $P$ is false, the conditional is vacuously true — a promise not triggered cannot be broken.`,
//       properties: `- Not commutative: $P \\to Q \\not\\equiv Q \\to P$
// - Transitive: if $P \\to Q$ and $Q \\to R$, then $P \\to R$
// - Material implication: $P \\to Q \\equiv \\neg P \\lor Q$
// - Negation: $\\neg(P \\to Q) \\equiv P \\land \\neg Q$`,
//       'related concepts': `- [Antecedent](!/logic/definitions#antecedent)
// - [Consequent](!/logic/definitions#consequent)
// - [Contrapositive](!/logic/definitions#contrapositive)
// - [Converse](!/logic/definitions#converse)
// - [Biconditional](!/logic/definitions#biconditional)`
//     },
//   },
 
//   {
//     id: 'biconditional',
//     name: 'Biconditional',
//     category: 'Semantics',
//     formula: `$P \\leftrightarrow Q$: true when $P$ and $Q$ share the same truth value, equivalent to $(P \\to Q) \\land (Q \\to P)$`,
//     link: { url: '/logic/truth-tables/biconditionals', text: 'Biconditionals' },  // ⚠️
//     fields: {
//       intuition: `The biconditional "$P$ if and only if $Q$" asserts that both propositions are logically tied: they are true together and false together. It combines both directions of implication into a single statement.`,
//       properties: `- Commutative: $P \\leftrightarrow Q \\equiv Q \\leftrightarrow P$
// - Equivalent forms: $P \\leftrightarrow Q \\equiv (P \\land Q) \\lor (\\neg P \\land \\neg Q)$
// - Negation: $\\neg(P \\leftrightarrow Q) \\equiv P \\oplus Q$ (exclusive or)
// - Transitive: if $P \\leftrightarrow Q$ and $Q \\leftrightarrow R$, then $P \\leftrightarrow R$`,
//       'related concepts': `- [Conditional](!/logic/definitions#conditional)
// - [Equivalence](!/logic/definitions#equivalence)`
//     },
//   },
 
//   {
//     id: 'antecedent',
//     name: 'Antecedent',
//     category: 'Semantics',
//     formula: `In a conditional $P \\to Q$, the antecedent is $P$ — the hypothesis or "if" part`,
//     link: { url: '/logic/propositional-logic/semantics/implication#definition', text: 'Logical Implication' },
//     fields: {
//       intuition: `The antecedent is the condition that triggers the implication. When the antecedent is false, the entire conditional is vacuously true regardless of the consequent.`,
//       examples: `In "$x > 0 \\to x^2 > 0$", the antecedent is "$x > 0$"
 
// The antecedent can be compound:
// In "$(P \\land Q) \\to R$", the antecedent is "$P \\land Q$"`,
//       'related concepts': `- [Consequent](!/logic/definitions#consequent)
// - [Conditional](!/logic/definitions#conditional)
// - [Contrapositive](!/logic/definitions#contrapositive)`
//     },
//   },
 
//   {
//     id: 'consequent',
//     name: 'Consequent',
//     category: 'Semantics',
//     formula: `In a conditional $P \\to Q$, the consequent is $Q$ — the conclusion or "then" part`,
//     link: { url: '/logic/propositional-logic/semantics/implication#definition', text: 'Logical Implication' },
//     fields: {
//       intuition: `The consequent is the result claimed by the implication. The conditional is violated only when the antecedent holds but the consequent does not.`,
//       examples: `In "$x > 0 \\to x^2 > 0$", the consequent is "$x^2 > 0$"
 
// The consequent can be compound:
// In "$P \\to (Q \\lor R)$", the consequent is "$Q \\lor R$"`,
//       'related concepts': `- [Antecedent](!/logic/definitions#antecedent)
// - [Conditional](!/logic/definitions#conditional)`
//     },
//   },
 
//   {
//     id: 'converse',
//     name: 'Converse',
//     category: 'Semantics',
//     formula: `The converse of $P \\to Q$ is $Q \\to P$ — the conditional with antecedent and consequent swapped`,
//     link: { url: '/logic/propositional-logic/semantics/implication#properties', text: 'Properties of Implication' },
//     fields: {
//       intuition: `Swapping "if" and "then" produces the converse. A conditional and its converse are generally not equivalent — the truth of one does not guarantee the truth of the other.`,
//       'common errors': `Assuming $P \\to Q$ and $Q \\to P$ are equivalent is the fallacy of affirming the consequent. For example: "If it rains, the ground is wet" does not imply "If the ground is wet, it rained."`,
//       'related concepts': `- [Conditional](!/logic/definitions#conditional)
// - [Contrapositive](!/logic/definitions#contrapositive)
// - [Inverse (Conditional)](!/logic/definitions#inverse_conditional)`
//     },
//   },
 
//   {
//     id: 'contrapositive',
//     name: 'Contrapositive',
//     category: 'Semantics',
//     formula: `The contrapositive of $P \\to Q$ is $\\neg Q \\to \\neg P$ — always logically equivalent to the original`,
//     link: { url: '/logic/propositional-logic/semantics/implication#properties', text: 'Properties of Implication' },
//     fields: {
//       intuition: `The contrapositive negates both parts and swaps their positions. Unlike the converse, the contrapositive is guaranteed to have the same truth value as the original conditional. This equivalence underpins proof by contrapositive.`,
//       properties: `- $P \\to Q \\equiv \\neg Q \\to \\neg P$ (always)
// - The contrapositive of the contrapositive returns the original
// - Central to proof by contraposition: to prove $P \\to Q$, prove $\\neg Q \\to \\neg P$ instead`,
//       'related concepts': `- [Conditional](!/logic/definitions#conditional)
// - [Converse](!/logic/definitions#converse)
// - [Inverse (Conditional)](!/logic/definitions#inverse_conditional)
// - [Negation](!/logic/definitions#negation)`
//     },
//   },
 
//   {
//     id: 'inverse_conditional',
//     name: 'Inverse (of Conditional)',
//     category: 'Semantics',
//     formula: `The inverse of $P \\to Q$ is $\\neg P \\to \\neg Q$ — not logically equivalent to the original`,
//     link: { url: '/logic/propositional-logic/semantics/implication#implication_laws', text: 'Implication in Logic Laws' },
//     fields: {
//       intuition: `The inverse negates both parts without swapping. It is logically equivalent to the converse ($Q \\to P$), but not to the original conditional. Confusing a conditional with its inverse is a common reasoning error.`,
//       'common errors': `"If it rains, the ground is wet" does NOT mean "If it does not rain, the ground is not wet." The ground could be wet for other reasons.`,
//       'related concepts': `- [Conditional](!/logic/definitions#conditional)
// - [Contrapositive](!/logic/definitions#contrapositive)
// - [Converse](!/logic/definitions#converse)`
//     },
//   },
 
//   {
//     id: 'equivalence',
//     name: 'Logical Equivalence',
//     category: 'Semantics',
//     formula: `Two formulas $\\varphi$ and $\\psi$ are logically equivalent ($\\varphi \\equiv \\psi$) if they have identical truth values under every possible assignment`,
//     link: { url: '/logic/propositional-logic/semantics/equivalences', text: 'Logical Equivalences' },  // ⚠️
//     fields: {
//       intuition: `Logical equivalence means two expressions are interchangeable in any context without altering truth. It is the semantic counterpart of the biconditional: $\\varphi \\equiv \\psi$ holds exactly when $\\varphi \\leftrightarrow \\psi$ is a tautology.`,
//       properties: `- Reflexive: $\\varphi \\equiv \\varphi$
// - Symmetric: if $\\varphi \\equiv \\psi$ then $\\psi \\equiv \\varphi$
// - Transitive: if $\\varphi \\equiv \\psi$ and $\\psi \\equiv \\chi$ then $\\varphi \\equiv \\chi$`,
//       'related concepts': `- [Biconditional](!/logic/definitions#biconditional)
// - [Tautology](!/logic/definitions#tautology)`
//     },
//   },
 
//   {
//     id: 'tautology',
//     name: 'Tautology',
//     category: 'Semantics',
//     formula: `A formula $\\varphi$ that evaluates to true under every possible truth assignment. Notation: $\\models \\varphi$ or $\\varphi \\equiv \\top$`,
//     link: { url: '/logic/propositional-logic/semantics/tautology#definition', text: 'Tautology' },
//     fields: {
//       intuition: `A tautology is true by virtue of its logical form alone, regardless of what its component propositions say about the world. The truth table for a tautology contains only T in the output column.`,
//       examples: `- $P \\lor \\neg P$ (law of excluded middle)
// - $(P \\to Q) \\leftrightarrow (\\neg Q \\to \\neg P)$ (contrapositive equivalence)
// - $((P \\to Q) \\land P) \\to Q$ (modus ponens)`,
//       'related concepts': `- [Contradiction](!/logic/definitions#contradiction)
// - [Contingency](!/logic/definitions#contingency)
// - [Equivalence](!/logic/definitions#equivalence)`
//     },
//   },
 
//   {
//     id: 'contradiction',
//     name: 'Contradiction',
//     category: 'Semantics',
//     formula: `A formula $\\varphi$ that evaluates to false under every possible truth assignment. Notation: $\\varphi \\equiv \\bot$`,
//     link: { url: '/logic/propositional-logic/semantics/contradiction', text: 'Contradiction' },  // ⚠️
//     fields: {
//       intuition: `A contradiction is false by logical structure alone. No matter what truth values its variables take, the formula can never be satisfied. The negation of any tautology is a contradiction, and vice versa.`,
//       examples: `- $P \\land \\neg P$
// - $(P \\to Q) \\land P \\land \\neg Q$`,
//       'related concepts': `- [Tautology](!/logic/definitions#tautology)
// - [Contingency](!/logic/definitions#contingency)
// - [Non-contradiction](!/logic/definitions#non_contradiction)`
//     },
//   },
 
//   {
//     id: 'contingency',
//     name: 'Contingency',
//     category: 'Semantics',
//     formula: `A formula that is neither a tautology nor a contradiction — it is true under some assignments and false under others`,
//     link: { url: '/logic/propositional-logic/semantics#contigency', text: 'Contingency, Tautology or Contradiction' },
//     fields: {
//       intuition: `Most propositions encountered in practice are contingencies. Their truth value depends on the specific circumstances — unlike tautologies (always true) or contradictions (always false). A contingency is satisfiable but not valid.`,
//       examples: `- $P \\lor Q$ — true when at least one is true, false when both are false
// - $P \\to Q$ — false only when $P$ is true and $Q$ is false`,
//       'related concepts': `- [Tautology](!/logic/definitions#tautology)
// - [Contradiction](!/logic/definitions#contradiction)
// - [Satisfiability](!/logic/definitions#satisfiability)`
//     },
//   },
 
//   {
//     id: 'satisfiability',
//     name: 'Satisfiability',
//     category: 'Semantics',
//     formula: `A formula $\\varphi$ is satisfiable if there exists at least one truth assignment under which $\\varphi$ evaluates to true`,
//     link: { url: '/logic/propositional-logic#properties', text: 'Properties of Propositions' },
//     fields: {
//       intuition: `A satisfiable formula is one that can possibly be true — it is not a contradiction. Both tautologies and contingencies are satisfiable; only contradictions are unsatisfiable. Determining satisfiability (the SAT problem) is a foundational question in logic and computer science.`,
//       properties: `- $\\varphi$ is valid (tautology) $\\Leftrightarrow$ $\\neg \\varphi$ is unsatisfiable
// - $\\varphi$ is satisfiable $\\Leftrightarrow$ $\\neg \\varphi$ is not valid
// - Every tautology is satisfiable, but not every satisfiable formula is a tautology`,
//       'related concepts': `- [Tautology](!/logic/definitions#tautology)
// - [Contradiction](!/logic/definitions#contradiction)
// - [Contingency](!/logic/definitions#contingency)
// - [Assignment](!/logic/definitions#assignment)`
//     },
//   },
 
//   {
//     id: 'truth_table',
//     name: 'Truth Table',
//     category: 'Semantics',
//     formula: `A tabular listing of all possible truth value combinations for a formula's variables and the resulting truth value of the formula`,
//     link: { url: '/logic/truth-tables', text: 'Truth Tables' },  // ⚠️
//     fields: {
//       intuition: `A truth table systematically evaluates a formula under every possible input. For $n$ propositional variables, the table has $2^n$ rows. It is the primary tool for checking whether a formula is a tautology, contradiction, or contingency, and for verifying logical equivalences.`,
//       properties: `- $2^n$ rows for $n$ variables
// - Columns for each subexpression and the final result
// - All-true output column $\\Rightarrow$ tautology
// - All-false output column $\\Rightarrow$ contradiction
// - Mixed output $\\Rightarrow$ contingency`,
//       'related concepts': `- [Tautology](!/logic/definitions#tautology)
// - [Contradiction](!/logic/definitions#contradiction)
// - [Assignment](!/logic/definitions#assignment)
// - [Satisfiability](!/logic/definitions#satisfiability)`
//     },
//   },
 
//   {
//     id: 'assignment',
//     name: 'Assignment (Valuation)',
//     category: 'Semantics',
//     formula: `A function $v$ that maps each propositional variable to a truth value: $v: \\{P, Q, R, \\ldots\\} \\to \\{T, F\\}$`,
//     link: { url: '/logic/propositional-logic/semantics', text: 'Semantics' },  // ⚠️
//     fields: {
//       intuition: `An assignment fixes the truth value of every variable in a formula, allowing the formula's overall truth value to be computed. Each row of a truth table corresponds to one assignment. A formula is satisfied by an assignment if it evaluates to true under that assignment.`,
//       properties: `- Determines the truth value of any well-formed formula via the truth functions of its connectives
// - A formula with $n$ variables has $2^n$ possible assignments
// - An assignment that makes $\\varphi$ true is called a model of $\\varphi$`,
//       'related concepts': `- [Truth Table](!/logic/definitions#truth_table)
// - [Satisfiability](!/logic/definitions#satisfiability)
// - [Well-Formed Formula](!/logic/definitions#well_formed_formula)`
//     },
//   },
 
//   {
//     id: 'absorption',
//     name: 'Absorption',
//     category: 'Semantics',
//     formula: `$P \\land (P \\lor Q) \\equiv P$ and $P \\lor (P \\land Q) \\equiv P$`,
//     link: { url: '/logic/propositional-logic/laws', text: 'Laws of Propositional Logic' },  // ⚠️
//     fields: {
//       intuition: `Absorption eliminates redundant structure. If $P$ already appears at the top level, wrapping it inside an additional disjunction or conjunction with another variable adds no information — the result simplifies back to $P$.`,
//       properties: `- Conjunction form: $P \\land (P \\lor Q) \\equiv P$
// - Disjunction form: $P \\lor (P \\land Q) \\equiv P$
// - Useful for simplifying logical expressions and Boolean circuits`,
//       'related concepts': `- [Conjunction](!/logic/definitions#conjunction)
// - [Disjunction](!/logic/definitions#disjunction)
// - [Equivalence](!/logic/definitions#equivalence)`
//     },
//   },
 
//   {
//     id: 'law_of_excluded_middle',
//     name: 'Law of Excluded Middle',
//     category: 'Semantics',
//     formula: `$P \\lor \\neg P$ is always true — every proposition is either true or false, with no third option`,
//     link: { url: '/logic/propositional-logic/laws', text: 'Laws of Propositional Logic' },  // ⚠️
//     fields: {
//       intuition: `This law asserts that there is no middle ground between truth and falsity in classical logic. For any proposition $P$, either $P$ holds or $\\neg P$ holds. Together with non-contradiction, it establishes the binary nature of classical truth.`,
//       properties: `- A tautology in classical logic
// - Not accepted in intuitionistic logic
// - Basis for proof by contradiction
// - Equivalent to: every proposition has a definite truth value`,
//       'related concepts': `- [Tautology](!/logic/definitions#tautology)
// - [Non-contradiction](!/logic/definitions#non_contradiction)
// - [Negation](!/logic/definitions#negation)`
//     },
//   },
 
//   {
//     id: 'non_contradiction',
//     name: 'Non-contradiction',
//     category: 'Semantics',
//     formula: `$\\neg(P \\land \\neg P)$ is always true — no proposition can be simultaneously true and false`,
//     link: { url: '/logic/propositional-logic/laws', text: 'Laws of Propositional Logic' },  // ⚠️
//     fields: {
//       intuition: `Non-contradiction states that $P$ and $\\neg P$ cannot both hold at once. Any system that violates this principle collapses — from a contradiction, every statement becomes provable (the principle of explosion).`,
//       properties: `- A tautology in classical logic
// - $P \\land \\neg P \\equiv \\bot$ (the conjunction is a contradiction)
// - Foundational to logical consistency
// - Accepted in both classical and intuitionistic logic`,
//       'related concepts': `- [Contradiction](!/logic/definitions#contradiction)
// - [Law of Excluded Middle](!/logic/definitions#law_of_excluded_middle)
// - [Negation](!/logic/definitions#negation)`
//     },
//   },
 

    
//   ];
  
//   export default logicTermsList;
  


const logicTermsList = [

       // ─── SYNTAX ──────────────────────────────────────────────────────────────
 
  {
    id: 'proposition',
    name: 'Proposition',
    category: 'Syntax',
    formula: `A declarative statement that carries exactly one truth value: true or false, but not both`,
    link: { url: '/logic/propositional-logic/syntax', text: 'Propositional Logic Syntax' },
    fields: {
      intuition: `A proposition is the atomic unit of logical reasoning — a complete claim whose truth can be evaluated. Questions, commands, and exclamations are not propositions because they lack a definite truth value.`,
      examples: `Propositions:
- "$2 + 3 = 5$" (true)
- "Every prime greater than 2 is odd" (true)
- "The moon is made of cheese" (false)
 
Not propositions:
- "$x + 1 = 5$" (contains a free variable)
- "Close the door" (command)
- "Is it raining?" (question)`,
      'related concepts': `- [Elementary Proposition](!/logic/definitions#elementary_proposition)
- [Compound Proposition](!/logic/definitions#compound_proposition)
- [Well-Formed Formula](!/logic/definitions#well_formed_formula)`
    },
  },
 
  {
    id: 'elementary_proposition',
    name: 'Elementary Proposition',
    category: 'Syntax',
    formula: `An atomic, indivisible statement $P$ that cannot be broken into simpler logical components`,
    link: { url: '/logic/propositional-logic/syntax#alphabet', text: 'Propositional Logic Alphabet' },
    fields: {
      intuition: `Elementary propositions are the building blocks from which all compound expressions are constructed. They are denoted by single letters — $P$, $Q$, $R$ — and carry a truth value on their own, without internal logical structure.`,
      properties: `- Cannot be decomposed using logical connectives
- Represented by propositional variables ($P$, $Q$, $R$, ...)
- Each has exactly one truth value under a given assignment
- Serve as the leaf nodes in a syntax tree`,
      'related concepts': `- [Proposition](!/logic/definitions#proposition)
- [Compound Proposition](!/logic/definitions#compound_proposition)
- [Logical Connective](!/logic/definitions#logical_connective)`
    },
  },
 
  {
    id: 'compound_proposition',
    name: 'Compound Proposition',
    category: 'Syntax',
    formula: `A proposition built by combining simpler propositions using logical connectives: $\\varphi := P \\circ Q$ where $\\circ \\in \\{\\land, \\lor, \\to, \\leftrightarrow, \\neg\\}$`,
    link: { url: '/logic/propositional-logic/syntax#formation', text: 'Formation Rules' },
    fields: {
      intuition: `Compound propositions are constructed from elementary propositions and connectives according to formation rules. Their truth value is determined entirely by the truth values of their components and the connectives joining them.`,
      examples: `- $P \\land Q$ (conjunction)
- $P \\lor Q$ (disjunction)
- $\\neg P$ (negation)
- $(P \\to Q) \\leftrightarrow (\\neg Q \\to \\neg P)$ (nested compound)`,
      'related concepts': `- [Elementary Proposition](!/logic/definitions#elementary_proposition)
- [Logical Connective](!/logic/definitions#logical_connective)
- [Well-Formed Formula](!/logic/definitions#well_formed_formula)`
    },
  },
 
  {
    id: 'well_formed_formula',
    name: 'Well-Formed Formula (WFF)',
    category: 'Syntax',
    formula: `An expression constructed according to the formation rules of propositional logic, ensuring unambiguous syntactic structure`,
    link: { url: '/logic/propositional-logic/syntax', text: 'Well-Formed Formulas' },
    fields: {
      intuition: `A WFF is a syntactically valid logical expression. Just as natural language has grammar, propositional logic has formation rules that determine which symbol sequences constitute proper formulas. An expression that violates these rules — like "$\\land P )(Q$" — is not a WFF and cannot be assigned a truth value.`,
      properties: `- Every propositional variable is a WFF
- If $\\varphi$ is a WFF, then $\\neg \\varphi$ is a WFF
- If $\\varphi$ and $\\psi$ are WFFs, then $(\\varphi \\circ \\psi)$ is a WFF for any binary connective $\\circ$
- No other expressions are WFFs`,
      'related concepts': `- [Proposition](!/logic/definitions#proposition)
- [Logical Connective](!/logic/definitions#logical_connective)
- [Literal](!/logic/definitions#literal)`
    },
  },
 
  {
    id: 'literal',
    name: 'Literal',
    category: 'Syntax',
    formula: `An atomic proposition or its negation: $P$ (positive literal) or $\\neg P$ (negative literal)`,
    link: { url: '/logic/propositional-logic/syntax#normal_forms', text: 'Normal Forms' },
    fields: {
      intuition: `Literals are the simplest meaningful units in normal form representations. Every clause in CNF or DNF is built entirely from literals joined by a single connective type.`,
      examples: `Given propositional variable $P$:
- $P$ is a positive literal
- $\\neg P$ is a negative literal
- $P \\land Q$ is NOT a literal (it is a conjunction of two literals)`,
      'related concepts': `- [Elementary Proposition](!/logic/definitions#elementary_proposition)
- [Negation](!/logic/definitions#negation)
- [DNF](!/logic/definitions#dnf)
- [CNF](!/logic/definitions#cnf)`
    },
  },
 
  {
    id: 'logical_connective',
    name: 'Logical Connective',
    category: 'Syntax',
    formula: `An operator that combines or modifies propositions to form compound propositions: $\\neg$, $\\land$, $\\lor$, $\\to$, $\\leftrightarrow$`,
    link: { url: '/logic/propositional-logic/syntax#alphabet', text: 'Propositional Logic Alphabet' },
    fields: {
      intuition: `Connectives are the glue of propositional logic. Each one defines a truth function — a rule that determines the truth value of the compound expression from the truth values of its components.`,
      properties: `- Unary: negation ($\\neg$)
- Binary: conjunction ($\\land$), disjunction ($\\lor$), conditional ($\\to$), biconditional ($\\leftrightarrow$)
- Truth-functional: output determined entirely by input truth values
- Some sets are functionally complete: $\\{\\neg, \\land\\}$ and $\\{\\neg, \\lor\\}$ can express all others`,
      'related concepts': `- [Negation](!/logic/definitions#negation)
- [Conjunction](!/logic/definitions#conjunction)
- [Disjunction](!/logic/definitions#disjunction)
- [Conditional](!/logic/definitions#conditional)
- [Biconditional](!/logic/definitions#biconditional)`
    },
  },
 
  {
    id: 'negation',
    name: 'Negation',
    category: 'Syntax',
    formula: `A unary connective $\\neg P$ that reverses the truth value of $P$`,
    link: { url: '/logic/propositional-logic/syntax#alphabet', text: 'Propositional Logic Alphabet' },
    fields: {
      intuition: `Negation flips true to false and false to true. It is the only standard unary connective in propositional logic.`,
      properties: `- Involution: $\\neg(\\neg P) \\equiv P$
- $P \\land \\neg P$ is always false (contradiction)
- $P \\lor \\neg P$ is always true (law of excluded middle)
- De Morgan's laws: $\\neg(P \\land Q) \\equiv \\neg P \\lor \\neg Q$ and $\\neg(P \\lor Q) \\equiv \\neg P \\land \\neg Q$`,
      'related concepts': `- [Logical Connective](!/logic/definitions#logical_connective)
- [Contradiction](!/logic/definitions#contradiction)
- [Law of Excluded Middle](!/logic/definitions#law_of_excluded_middle)
- [Literal](!/logic/definitions#literal)`,
      'related formulas': `- [Biconditional as Disjunction of Conjunctions](!/logic/formulas#biconditional)
- [Double Negation Law](!/logic/formulas#negation)
- [Law of Excluded Middle](!/logic/formulas#law_of_excluded_middle)
- [Law of Non Contradiction](!/logic/formulas#non_contradiction)
- [Material Implication](!/logic/formulas#conditional)
- [Negation of Contradiction](!/logic/formulas#contradiction)
- [Negation of Tautology](!/logic/formulas#tautology)`
    },
  },
 
  {
    id: 'conjunction',
    name: 'Conjunction',
    category: 'Syntax',
    formula: `A binary connective $P \\land Q$ that is true only when both $P$ and $Q$ are true`,
    link: { url: '/logic/propositional-logic/syntax#alphabet', text: 'Propositional Logic Alphabet' },
    fields: {
      intuition: `Conjunction corresponds to "and" in natural language. The compound statement $P \\land Q$ requires both components to hold simultaneously.`,
      properties: `- Commutative: $P \\land Q \\equiv Q \\land P$
- Associative: $(P \\land Q) \\land R \\equiv P \\land (Q \\land R)$
- Idempotent: $P \\land P \\equiv P$
- Identity: $P \\land \\top \\equiv P$
- Annihilation: $P \\land \\bot \\equiv \\bot$`,
      'related concepts': `- [Disjunction](!/logic/definitions#disjunction)
- [Logical Connective](!/logic/definitions#logical_connective)
- [CNF](!/logic/definitions#cnf)`,
      'related formulas': `- [Absorption Conjunction Form](!/logic/formulas#absorption)
- [Biconditional as Two Conditionals](!/logic/formulas#biconditional)
- [Conjunction Elimination](!/logic/formulas#conditional)
- [De Morgan Law for Conjunction](!/logic/formulas#negation)
- [Distributive Law of Disjunction over Conjunction](!/logic/formulas#disjunction)
- [Idempotent Law for Conjunction](!/logic/formulas#conjunction)
- [Law of Non Contradiction](!/logic/formulas#non_contradiction)`
    },
  },
 
  {
    id: 'disjunction',
    name: 'Disjunction',
    category: 'Syntax',
    formula: `A binary connective $P \\lor Q$ that is true when at least one of $P$ or $Q$ is true`,
    link: { url: '/logic/propositional-logic/syntax#alphabet', text: 'Propositional Logic Alphabet' },
    fields: {
      intuition: `Disjunction corresponds to the inclusive "or" in natural language. The compound statement $P \\lor Q$ holds whenever one or both components are true. It is false only when both are false.`,
      properties: `- Commutative: $P \\lor Q \\equiv Q \\lor P$
- Associative: $(P \\lor Q) \\lor R \\equiv P \\lor (Q \\lor R)$
- Idempotent: $P \\lor P \\equiv P$
- Identity: $P \\lor \\bot \\equiv P$
- Annihilation: $P \\lor \\top \\equiv \\top$`,
      'related concepts': `- [Conjunction](!/logic/definitions#conjunction)
- [Logical Connective](!/logic/definitions#logical_connective)
- [DNF](!/logic/definitions#dnf)`,
      'related formulas': `- [Absorption Conjunction Form](!/logic/formulas#absorption)
- [Biconditional as Disjunction of Conjunctions](!/logic/formulas#biconditional)
- [De Morgan Law for Conjunction](!/logic/formulas#negation)
- [Disjunction Introduction](!/logic/formulas#conditional)
- [Distributive Law of Conjunction over Disjunction](!/logic/formulas#conjunction)
- [Idempotent Law for Disjunction](!/logic/formulas#disjunction)
- [Law of Excluded Middle](!/logic/formulas#law_of_excluded_middle)`
    },
  },
 
  {
    id: 'dnf',
    name: 'Disjunctive Normal Form (DNF)',
    category: 'Syntax',
    formula: `A formula expressed as a disjunction of conjunctions of literals: $(L_1 \\land L_2) \\lor (L_3 \\land L_4) \\lor \\ldots$`,
    link: { url: '/logic/propositional-logic/syntax#normal_forms', text: 'Normal Forms' },
    fields: {
      intuition: `In DNF, the top-level operator is OR, and each clause is a conjunction (AND) of literals. Every propositional formula can be converted to an equivalent DNF expression. DNF is obtained directly from a truth table by forming one conjunction per true row and joining them with OR.`,
      examples: `$$(P \\land Q) \\lor (\\neg P \\land R) \\lor (Q \\land R)$$
 
Converting $P \\to Q$:
$$P \\to Q \\equiv \\neg P \\lor Q \\equiv (\\neg P) \\lor (Q)$$`,
      'related concepts': `- [CNF](!/logic/definitions#cnf)
- [Literal](!/logic/definitions#literal)
- [Disjunction](!/logic/definitions#disjunction)
- [Conjunction](!/logic/definitions#conjunction)`,
      'related formulas': `- [Biconditional as Disjunction of Conjunctions](!/logic/formulas#biconditional)
- [Distributive Law of Conjunction over Disjunction](!/logic/formulas#conjunction)`
    },
  },
 
  {
    id: 'cnf',
    name: 'Conjunctive Normal Form (CNF)',
    category: 'Syntax',
    formula: `A formula expressed as a conjunction of disjunctions of literals: $(L_1 \\lor L_2) \\land (L_3 \\lor L_4) \\land \\ldots$`,
    link: { url: '/logic/propositional-logic/syntax#normal_forms', text: 'Normal Forms' },
    fields: {
      intuition: `In CNF, the top-level operator is AND, and each clause is a disjunction (OR) of literals. Every propositional formula has an equivalent CNF representation. CNF is widely used in automated theorem proving and satisfiability testing (SAT solvers).`,
      examples: `$$(P \\lor Q) \\land (\\neg P \\lor R) \\land (Q \\lor R)$$
 
Converting $P \\leftrightarrow Q$:
$$P \\leftrightarrow Q \\equiv (P \\lor \\neg Q) \\land (\\neg P \\lor Q)$$`,
      'related concepts': `- [DNF](!/logic/definitions#dnf)
- [Literal](!/logic/definitions#literal)
- [Conjunction](!/logic/definitions#conjunction)
- [Disjunction](!/logic/definitions#disjunction)`,
      'related formulas': `- [Distributive Law of Disjunction over Conjunction](!/logic/formulas#disjunction)`
    },
  },
 
  // ─── SEMANTICS ───────────────────────────────────────────────────────────
 
  {
    id: 'conditional',
    name: 'Conditional (Implication)',
    category: 'Semantics',
    formula: `$P \\to Q$: false only when $P$ is true and $Q$ is false; true in all other cases`,
    link: { url: '/logic/propositional-logic/semantics/implication#definition', text: 'Logical Implication' },
    fields: {
      intuition: `The conditional "if $P$ then $Q$" asserts a dependency: whenever $P$ holds, $Q$ must also hold. When $P$ is false, the conditional is vacuously true — a promise not triggered cannot be broken.`,
      properties: `- Not commutative: $P \\to Q \\not\\equiv Q \\to P$
- Transitive: if $P \\to Q$ and $Q \\to R$, then $P \\to R$
- Material implication: $P \\to Q \\equiv \\neg P \\lor Q$
- Negation: $\\neg(P \\to Q) \\equiv P \\land \\neg Q$`,
      'related concepts': `- [Antecedent](!/logic/definitions#antecedent)
- [Consequent](!/logic/definitions#consequent)
- [Contrapositive](!/logic/definitions#contrapositive)
- [Converse](!/logic/definitions#converse)
- [Biconditional](!/logic/definitions#biconditional)`,
      'related formulas': `- [Biconditional as Two Conditionals](!/logic/formulas#biconditional)
- [Contrapositive Equivalence](!/logic/formulas#contrapositive)
- [Disjunction Introduction](!/logic/formulas#conditional)`
    },
  },
 
  {
    id: 'biconditional',
    name: 'Biconditional',
    category: 'Semantics',
    formula: `$P \\leftrightarrow Q$: true when $P$ and $Q$ share the same truth value, equivalent to $(P \\to Q) \\land (Q \\to P)$`,
    link: { url: '/logic/truth-tables/biconditionals', text: 'Biconditionals' },  // ⚠️
    fields: {
      intuition: `The biconditional "$P$ if and only if $Q$" asserts that both propositions are logically tied: they are true together and false together. It combines both directions of implication into a single statement.`,
      properties: `- Commutative: $P \\leftrightarrow Q \\equiv Q \\leftrightarrow P$
- Equivalent forms: $P \\leftrightarrow Q \\equiv (P \\land Q) \\lor (\\neg P \\land \\neg Q)$
- Negation: $\\neg(P \\leftrightarrow Q) \\equiv P \\oplus Q$ (exclusive or)
- Transitive: if $P \\leftrightarrow Q$ and $Q \\leftrightarrow R$, then $P \\leftrightarrow R$`,
      'related concepts': `- [Conditional](!/logic/definitions#conditional)
- [Equivalence](!/logic/definitions#equivalence)`,
      'related formulas': `- [Biconditional as Two Conditionals](!/logic/formulas#biconditional)`
    },
  },
 
  {
    id: 'antecedent',
    name: 'Antecedent',
    category: 'Semantics',
    formula: `In a conditional $P \\to Q$, the antecedent is $P$ — the hypothesis or "if" part`,
    link: { url: '/logic/propositional-logic/semantics/implication#definition', text: 'Logical Implication' },
    fields: {
      intuition: `The antecedent is the condition that triggers the implication. When the antecedent is false, the entire conditional is vacuously true regardless of the consequent.`,
      examples: `In "$x > 0 \\to x^2 > 0$", the antecedent is "$x > 0$"
 
The antecedent can be compound:
In "$(P \\land Q) \\to R$", the antecedent is "$P \\land Q$"`,
      'related concepts': `- [Consequent](!/logic/definitions#consequent)
- [Conditional](!/logic/definitions#conditional)
- [Contrapositive](!/logic/definitions#contrapositive)`
    },
  },
 
  {
    id: 'consequent',
    name: 'Consequent',
    category: 'Semantics',
    formula: `In a conditional $P \\to Q$, the consequent is $Q$ — the conclusion or "then" part`,
    link: { url: '/logic/propositional-logic/semantics/implication#definition', text: 'Logical Implication' },
    fields: {
      intuition: `The consequent is the result claimed by the implication. The conditional is violated only when the antecedent holds but the consequent does not.`,
      examples: `In "$x > 0 \\to x^2 > 0$", the consequent is "$x^2 > 0$"
 
The consequent can be compound:
In "$P \\to (Q \\lor R)$", the consequent is "$Q \\lor R$"`,
      'related concepts': `- [Antecedent](!/logic/definitions#antecedent)
- [Conditional](!/logic/definitions#conditional)`
    },
  },
 
  {
    id: 'converse',
    name: 'Converse',
    category: 'Semantics',
    formula: `The converse of $P \\to Q$ is $Q \\to P$ — the conditional with antecedent and consequent swapped`,
    link: { url: '/logic/propositional-logic/semantics/implication#properties', text: 'Properties of Implication' },
    fields: {
      intuition: `Swapping "if" and "then" produces the converse. A conditional and its converse are generally not equivalent — the truth of one does not guarantee the truth of the other.`,
      'common errors': `Assuming $P \\to Q$ and $Q \\to P$ are equivalent is the fallacy of affirming the consequent. For example: "If it rains, the ground is wet" does not imply "If the ground is wet, it rained."`,
      'related concepts': `- [Conditional](!/logic/definitions#conditional)
- [Contrapositive](!/logic/definitions#contrapositive)
- [Inverse (Conditional)](!/logic/definitions#inverse_conditional)`,
      'related formulas': `- [Contrapositive Equivalence](!/logic/formulas#contrapositive)`
    },
  },
 
  {
    id: 'contrapositive',
    name: 'Contrapositive',
    category: 'Semantics',
    formula: `The contrapositive of $P \\to Q$ is $\\neg Q \\to \\neg P$ — always logically equivalent to the original`,
    link: { url: '/logic/propositional-logic/semantics/implication#properties', text: 'Properties of Implication' },
    fields: {
      intuition: `The contrapositive negates both parts and swaps their positions. Unlike the converse, the contrapositive is guaranteed to have the same truth value as the original conditional. This equivalence underpins proof by contrapositive.`,
      properties: `- $P \\to Q \\equiv \\neg Q \\to \\neg P$ (always)
- The contrapositive of the contrapositive returns the original
- Central to proof by contraposition: to prove $P \\to Q$, prove $\\neg Q \\to \\neg P$ instead`,
      'related concepts': `- [Conditional](!/logic/definitions#conditional)
- [Converse](!/logic/definitions#converse)
- [Inverse (Conditional)](!/logic/definitions#inverse_conditional)
- [Negation](!/logic/definitions#negation)`,
      'related formulas': `- [Contrapositive Equivalence](!/logic/formulas#contrapositive)`
    },
  },
 
  {
    id: 'inverse_conditional',
    name: 'Inverse (of Conditional)',
    category: 'Semantics',
    formula: `The inverse of $P \\to Q$ is $\\neg P \\to \\neg Q$ — not logically equivalent to the original`,
    link: { url: '/logic/propositional-logic/semantics/implication#implication_laws', text: 'Implication in Logic Laws' },
    fields: {
      intuition: `The inverse negates both parts without swapping. It is logically equivalent to the converse ($Q \\to P$), but not to the original conditional. Confusing a conditional with its inverse is a common reasoning error.`,
      'common errors': `"If it rains, the ground is wet" does NOT mean "If it does not rain, the ground is not wet." The ground could be wet for other reasons.`,
      'related concepts': `- [Conditional](!/logic/definitions#conditional)
- [Contrapositive](!/logic/definitions#contrapositive)
- [Converse](!/logic/definitions#converse)`,
      'related formulas': `- [Contrapositive Equivalence](!/logic/formulas#contrapositive)`
    },
  },
 
  {
    id: 'equivalence',
    name: 'Logical Equivalence',
    category: 'Semantics',
    formula: `Two formulas $\\varphi$ and $\\psi$ are logically equivalent ($\\varphi \\equiv \\psi$) if they have identical truth values under every possible assignment`,
    link: { url: '/logic/propositional-logic/semantics/equivalences', text: 'Logical Equivalences' },  // ⚠️
    fields: {
      intuition: `Logical equivalence means two expressions are interchangeable in any context without altering truth. It is the semantic counterpart of the biconditional: $\\varphi \\equiv \\psi$ holds exactly when $\\varphi \\leftrightarrow \\psi$ is a tautology.`,
      properties: `- Reflexive: $\\varphi \\equiv \\varphi$
- Symmetric: if $\\varphi \\equiv \\psi$ then $\\psi \\equiv \\varphi$
- Transitive: if $\\varphi \\equiv \\psi$ and $\\psi \\equiv \\chi$ then $\\varphi \\equiv \\chi$`,
      'related concepts': `- [Biconditional](!/logic/definitions#biconditional)
- [Tautology](!/logic/definitions#tautology)`,
      'related formulas': `- [Absorption Conjunction Form](!/logic/formulas#absorption)
- [Double Negation Law](!/logic/formulas#negation)
- [Idempotent Law for Conjunction](!/logic/formulas#conjunction)
- [Idempotent Law for Disjunction](!/logic/formulas#disjunction)`
    },
  },
 
  {
    id: 'tautology',
    name: 'Tautology',
    category: 'Semantics',
    formula: `A formula $\\varphi$ that evaluates to true under every possible truth assignment. Notation: $\\models \\varphi$ or $\\varphi \\equiv \\top$`,
    link: { url: '/logic/propositional-logic/semantics/tautology#definition', text: 'Tautology' },
    fields: {
      intuition: `A tautology is true by virtue of its logical form alone, regardless of what its component propositions say about the world. The truth table for a tautology contains only T in the output column.`,
      examples: `- $P \\lor \\neg P$ (law of excluded middle)
- $(P \\to Q) \\leftrightarrow (\\neg Q \\to \\neg P)$ (contrapositive equivalence)
- $((P \\to Q) \\land P) \\to Q$ (modus ponens)`,
      'related concepts': `- [Contradiction](!/logic/definitions#contradiction)
- [Contingency](!/logic/definitions#contingency)
- [Equivalence](!/logic/definitions#equivalence)`,
      'related formulas': `- [Disjunction Introduction](!/logic/formulas#conditional)
- [Domination Law for Disjunction](!/logic/formulas#disjunction)
- [Identity Law for Conjunction](!/logic/formulas#conjunction)
- [Law of Excluded Middle](!/logic/formulas#law_of_excluded_middle)
- [Negation of Contradiction](!/logic/formulas#contradiction)
- [Negation of Tautology](!/logic/formulas#tautology)`
    },
  },
 
  {
    id: 'contradiction',
    name: 'Contradiction',
    category: 'Semantics',
    formula: `A formula $\\varphi$ that evaluates to false under every possible truth assignment. Notation: $\\varphi \\equiv \\bot$`,
    link: { url: '/logic/propositional-logic/semantics/contradiction', text: 'Contradiction' },  // ⚠️
    fields: {
      intuition: `A contradiction is false by logical structure alone. No matter what truth values its variables take, the formula can never be satisfied. The negation of any tautology is a contradiction, and vice versa.`,
      examples: `- $P \\land \\neg P$
- $(P \\to Q) \\land P \\land \\neg Q$`,
      'related concepts': `- [Tautology](!/logic/definitions#tautology)
- [Contingency](!/logic/definitions#contingency)
- [Non-contradiction](!/logic/definitions#non_contradiction)`,
      'related formulas': `- [Domination Law for Conjunction](!/logic/formulas#conjunction)
- [Identity Law for Disjunction](!/logic/formulas#disjunction)
- [Law of Non Contradiction](!/logic/formulas#non_contradiction)
- [Negation of Contradiction](!/logic/formulas#contradiction)
- [Negation of Tautology](!/logic/formulas#tautology)`
    },
  },
 
  {
    id: 'contingency',
    name: 'Contingency',
    category: 'Semantics',
    formula: `A formula that is neither a tautology nor a contradiction — it is true under some assignments and false under others`,
    link: { url: '/logic/propositional-logic/semantics#contigency', text: 'Contingency, Tautology or Contradiction' },
    fields: {
      intuition: `Most propositions encountered in practice are contingencies. Their truth value depends on the specific circumstances — unlike tautologies (always true) or contradictions (always false). A contingency is satisfiable but not valid.`,
      examples: `- $P \\lor Q$ — true when at least one is true, false when both are false
- $P \\to Q$ — false only when $P$ is true and $Q$ is false`,
      'related concepts': `- [Tautology](!/logic/definitions#tautology)
- [Contradiction](!/logic/definitions#contradiction)
- [Satisfiability](!/logic/definitions#satisfiability)`
    },
  },
 
  {
    id: 'satisfiability',
    name: 'Satisfiability',
    category: 'Semantics',
    formula: `A formula $\\varphi$ is satisfiable if there exists at least one truth assignment under which $\\varphi$ evaluates to true`,
    link: { url: '/logic/propositional-logic#properties', text: 'Properties of Propositions' },
    fields: {
      intuition: `A satisfiable formula is one that can possibly be true — it is not a contradiction. Both tautologies and contingencies are satisfiable; only contradictions are unsatisfiable. Determining satisfiability (the SAT problem) is a foundational question in logic and computer science.`,
      properties: `- $\\varphi$ is valid (tautology) $\\Leftrightarrow$ $\\neg \\varphi$ is unsatisfiable
- $\\varphi$ is satisfiable $\\Leftrightarrow$ $\\neg \\varphi$ is not valid
- Every tautology is satisfiable, but not every satisfiable formula is a tautology`,
      'related concepts': `- [Tautology](!/logic/definitions#tautology)
- [Contradiction](!/logic/definitions#contradiction)
- [Contingency](!/logic/definitions#contingency)
- [Assignment](!/logic/definitions#assignment)`
    },
  },
 
  {
    id: 'truth_table',
    name: 'Truth Table',
    category: 'Semantics',
    formula: `A tabular listing of all possible truth value combinations for a formula's variables and the resulting truth value of the formula`,
    link: { url: '/logic/truth-tables', text: 'Truth Tables' },  // ⚠️
    fields: {
      intuition: `A truth table systematically evaluates a formula under every possible input. For $n$ propositional variables, the table has $2^n$ rows. It is the primary tool for checking whether a formula is a tautology, contradiction, or contingency, and for verifying logical equivalences.`,
      properties: `- $2^n$ rows for $n$ variables
- Columns for each subexpression and the final result
- All-true output column $\\Rightarrow$ tautology
- All-false output column $\\Rightarrow$ contradiction
- Mixed output $\\Rightarrow$ contingency`,
      'related concepts': `- [Tautology](!/logic/definitions#tautology)
- [Contradiction](!/logic/definitions#contradiction)
- [Assignment](!/logic/definitions#assignment)
- [Satisfiability](!/logic/definitions#satisfiability)`
    },
  },
 
  {
    id: 'assignment',
    name: 'Assignment (Valuation)',
    category: 'Semantics',
    formula: `A function $v$ that maps each propositional variable to a truth value: $v: \\{P, Q, R, \\ldots\\} \\to \\{T, F\\}$`,
    link: { url: '/logic/propositional-logic/semantics', text: 'Semantics' },  // ⚠️
    fields: {
      intuition: `An assignment fixes the truth value of every variable in a formula, allowing the formula's overall truth value to be computed. Each row of a truth table corresponds to one assignment. A formula is satisfied by an assignment if it evaluates to true under that assignment.`,
      properties: `- Determines the truth value of any well-formed formula via the truth functions of its connectives
- A formula with $n$ variables has $2^n$ possible assignments
- An assignment that makes $\\varphi$ true is called a model of $\\varphi$`,
      'related concepts': `- [Truth Table](!/logic/definitions#truth_table)
- [Satisfiability](!/logic/definitions#satisfiability)
- [Well-Formed Formula](!/logic/definitions#well_formed_formula)`
    },
  },
 
  {
    id: 'absorption',
    name: 'Absorption',
    category: 'Semantics',
    formula: `$P \\land (P \\lor Q) \\equiv P$ and $P \\lor (P \\land Q) \\equiv P$`,
    link: { url: '/logic/propositional-logic/laws', text: 'Laws of Propositional Logic' },  // ⚠️
    fields: {
      intuition: `Absorption eliminates redundant structure. If $P$ already appears at the top level, wrapping it inside an additional disjunction or conjunction with another variable adds no information — the result simplifies back to $P$.`,
      properties: `- Conjunction form: $P \\land (P \\lor Q) \\equiv P$
- Disjunction form: $P \\lor (P \\land Q) \\equiv P$
- Useful for simplifying logical expressions and Boolean circuits`,
      'related concepts': `- [Conjunction](!/logic/definitions#conjunction)
- [Disjunction](!/logic/definitions#disjunction)
- [Equivalence](!/logic/definitions#equivalence)`
    },
  },
 
  {
    id: 'law_of_excluded_middle',
    name: 'Law of Excluded Middle',
    category: 'Semantics',
    formula: `$P \\lor \\neg P$ is always true — every proposition is either true or false, with no third option`,
    link: { url: '/logic/propositional-logic/laws', text: 'Laws of Propositional Logic' },  // ⚠️
    fields: {
      intuition: `This law asserts that there is no middle ground between truth and falsity in classical logic. For any proposition $P$, either $P$ holds or $\\neg P$ holds. Together with non-contradiction, it establishes the binary nature of classical truth.`,
      properties: `- A tautology in classical logic
- Not accepted in intuitionistic logic
- Basis for proof by contradiction
- Equivalent to: every proposition has a definite truth value`,
      'related concepts': `- [Tautology](!/logic/definitions#tautology)
- [Non-contradiction](!/logic/definitions#non_contradiction)
- [Negation](!/logic/definitions#negation)`
    },
  },
 
  {
    id: 'non_contradiction',
    name: 'Non-contradiction',
    category: 'Semantics',
    formula: `$\\neg(P \\land \\neg P)$ is always true — no proposition can be simultaneously true and false`,
    link: { url: '/logic/propositional-logic/laws', text: 'Laws of Propositional Logic' },  // ⚠️
    fields: {
      intuition: `Non-contradiction states that $P$ and $\\neg P$ cannot both hold at once. Any system that violates this principle collapses — from a contradiction, every statement becomes provable (the principle of explosion).`,
      properties: `- A tautology in classical logic
- $P \\land \\neg P \\equiv \\bot$ (the conjunction is a contradiction)
- Foundational to logical consistency
- Accepted in both classical and intuitionistic logic`,
      'related concepts': `- [Contradiction](!/logic/definitions#contradiction)
- [Law of Excluded Middle](!/logic/definitions#law_of_excluded_middle)
- [Negation](!/logic/definitions#negation)`
    },
  },
 

    
  ];
  
  export default logicTermsList;