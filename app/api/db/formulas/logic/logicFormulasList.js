const logicFormulasList = [
    
// ─────────────────────────────────────────────────────────────────────────────
// LOGIC FORMULAS — Batch 1
// Categories 1-6: Idempotent, Commutative, Associative, Distributive, Identity, Domination
// 12 entries
// ─────────────────────────────────────────────────────────────────────────────

// ─── Idempotent Laws ──────────────────────────────────────────────────────────

{
  name: 'Idempotent Law for Conjunction',
  entity: 'conjunction',
  category: 'Idempotent Laws',
  formula: `$$P \\land P \\equiv P$$`,
  link: { label: 'Laws of Propositional Logic', url: '/logic/propositional-logic/laws' },
  explanation: `Conjoining a proposition with itself yields the original proposition. The connective adds no new information when both operands are identical.`,
  related_formulas: `- [Idempotent Law for Disjunction](!/logic/formulas#idempotent_law_for_disjunction)\n- [Absorption Conjunction Form](!/logic/formulas#absorption_conjunction_form)`,
  related_definitions: `- [Conjunction](!/logic/definitions#conjunction)\n- [Logical Equivalence](!/logic/definitions#equivalence)`,
},

{
  name: 'Idempotent Law for Disjunction',
  entity: 'disjunction',
  category: 'Idempotent Laws',
  formula: `$$P \\lor P \\equiv P$$`,
  link: { label: 'Laws of Propositional Logic', url: '/logic/propositional-logic/laws' },
  explanation: `Disjoining a proposition with itself yields the original proposition. Repetition under OR contributes nothing new.`,
  related_formulas: `- [Idempotent Law for Conjunction](!/logic/formulas#idempotent_law_for_conjunction)\n- [Absorption Disjunction Form](!/logic/formulas#absorption_disjunction_form)`,
  related_definitions: `- [Disjunction](!/logic/definitions#disjunction)\n- [Logical Equivalence](!/logic/definitions#equivalence)`,
},

// ─── Commutative Laws ─────────────────────────────────────────────────────────

{
  name: 'Commutative Law for Conjunction',
  entity: 'conjunction',
  category: 'Commutative Laws',
  formula: `$$P \\land Q \\equiv Q \\land P$$`,
  link: { label: 'Laws of Propositional Logic', url: '/logic/propositional-logic/laws' },
  explanation: `Order of operands does not affect the truth value of a conjunction. Both arrangements have identical truth tables.`,
  related_formulas: `- [Commutative Law for Disjunction](!/logic/formulas#commutative_law_for_disjunction)`,
  related_definitions: `- [Conjunction](!/logic/definitions#conjunction)\n- [Logical Equivalence](!/logic/definitions#equivalence)`,
},

{
  name: 'Commutative Law for Disjunction',
  entity: 'disjunction',
  category: 'Commutative Laws',
  formula: `$$P \\lor Q \\equiv Q \\lor P$$`,
  link: { label: 'Laws of Propositional Logic', url: '/logic/propositional-logic/laws' },
  explanation: `Order of operands does not affect the truth value of a disjunction. Both arrangements have identical truth tables.`,
  related_formulas: `- [Commutative Law for Conjunction](!/logic/formulas#commutative_law_for_conjunction)`,
  related_definitions: `- [Disjunction](!/logic/definitions#disjunction)\n- [Logical Equivalence](!/logic/definitions#equivalence)`,
},

// ─── Associative Laws ─────────────────────────────────────────────────────────

{
  name: 'Associative Law for Conjunction',
  entity: 'conjunction',
  category: 'Associative Laws',
  formula: `$$(P \\land Q) \\land R \\equiv P \\land (Q \\land R)$$`,
  link: { label: 'Laws of Propositional Logic', url: '/logic/propositional-logic/laws' },
  explanation: `Grouping does not affect the truth value of a chain of conjunctions. Parentheses can be omitted when only AND connectives appear, justifying the unparenthesized form $P \\land Q \\land R$.`,
  related_formulas: `- [Associative Law for Disjunction](!/logic/formulas#associative_law_for_disjunction)\n- [Commutative Law for Conjunction](!/logic/formulas#commutative_law_for_conjunction)`,
  related_definitions: `- [Conjunction](!/logic/definitions#conjunction)\n- [Logical Equivalence](!/logic/definitions#equivalence)`,
},

{
  name: 'Associative Law for Disjunction',
  entity: 'disjunction',
  category: 'Associative Laws',
  formula: `$$(P \\lor Q) \\lor R \\equiv P \\lor (Q \\lor R)$$`,
  link: { label: 'Laws of Propositional Logic', url: '/logic/propositional-logic/laws' },
  explanation: `Grouping does not affect the truth value of a chain of disjunctions. Parentheses can be omitted when only OR connectives appear, justifying the unparenthesized form $P \\lor Q \\lor R$.`,
  related_formulas: `- [Associative Law for Conjunction](!/logic/formulas#associative_law_for_conjunction)\n- [Commutative Law for Disjunction](!/logic/formulas#commutative_law_for_disjunction)`,
  related_definitions: `- [Disjunction](!/logic/definitions#disjunction)\n- [Logical Equivalence](!/logic/definitions#equivalence)`,
},

// ─── Distributive Laws ────────────────────────────────────────────────────────

{
  name: 'Distributive Law of Conjunction over Disjunction',
  entity: 'conjunction',
  category: 'Distributive Laws',
  formula: `$$P \\land (Q \\lor R) \\equiv (P \\land Q) \\lor (P \\land R)$$`,
  link: { label: 'Laws of Propositional Logic', url: '/logic/propositional-logic/laws' },
  explanation: `Conjunction distributes over disjunction: a single AND with a parenthesized OR can be rewritten as an OR of two ANDs. This is the core step for converting formulas into Disjunctive Normal Form.`,
  variants: `Right-to-left form (factoring out a common conjunct):\n\n$$(P \\land Q) \\lor (P \\land R) \\equiv P \\land (Q \\lor R)$$`,
  related_formulas: `- [Distributive Law of Disjunction over Conjunction](!/logic/formulas#distributive_law_of_disjunction_over_conjunction)\n- [De Morgan Law for Conjunction](!/logic/formulas#de_morgan_law_for_conjunction)`,
  related_definitions: `- [Conjunction](!/logic/definitions#conjunction)\n- [Disjunction](!/logic/definitions#disjunction)\n- [DNF](!/logic/definitions#dnf)`,
},

{
  name: 'Distributive Law of Disjunction over Conjunction',
  entity: 'disjunction',
  category: 'Distributive Laws',
  formula: `$$P \\lor (Q \\land R) \\equiv (P \\lor Q) \\land (P \\lor R)$$`,
  link: { label: 'Laws of Propositional Logic', url: '/logic/propositional-logic/laws' },
  explanation: `Disjunction distributes over conjunction: a single OR with a parenthesized AND can be rewritten as an AND of two ORs. This is the core step for converting formulas into Conjunctive Normal Form.`,
  variants: `Right-to-left form (factoring out a common disjunct):\n\n$$(P \\lor Q) \\land (P \\lor R) \\equiv P \\lor (Q \\land R)$$`,
  related_formulas: `- [Distributive Law of Conjunction over Disjunction](!/logic/formulas#distributive_law_of_conjunction_over_disjunction)\n- [De Morgan Law for Disjunction](!/logic/formulas#de_morgan_law_for_disjunction)`,
  related_definitions: `- [Disjunction](!/logic/definitions#disjunction)\n- [Conjunction](!/logic/definitions#conjunction)\n- [CNF](!/logic/definitions#cnf)`,
},

// ─── Identity Laws ────────────────────────────────────────────────────────────

{
  name: 'Identity Law for Conjunction',
  entity: 'conjunction',
  category: 'Identity Laws',
  formula: `$$P \\land \\top \\equiv P$$`,
  link: { label: 'Laws of Propositional Logic', url: '/logic/propositional-logic/laws' },
  explanation: `Conjoining any proposition with the always-true constant $\\top$ leaves the proposition unchanged. The truth constant is the identity element for AND.`,
  notation: `$\\top$ denotes the tautology constant (always true). Some texts write $T$, $1$, or "true".`,
  related_formulas: `- [Identity Law for Disjunction](!/logic/formulas#identity_law_for_disjunction)\n- [Domination Law for Conjunction](!/logic/formulas#domination_law_for_conjunction)`,
  related_definitions: `- [Conjunction](!/logic/definitions#conjunction)\n- [Tautology](!/logic/definitions#tautology)\n- [Logical Equivalence](!/logic/definitions#equivalence)`,
},

{
  name: 'Identity Law for Disjunction',
  entity: 'disjunction',
  category: 'Identity Laws',
  formula: `$$P \\lor \\bot \\equiv P$$`,
  link: { label: 'Laws of Propositional Logic', url: '/logic/propositional-logic/laws' },
  explanation: `Disjoining any proposition with the always-false constant $\\bot$ leaves the proposition unchanged. The falsity constant is the identity element for OR.`,
  notation: `$\\bot$ denotes the contradiction constant (always false). Some texts write $F$, $0$, or "false".`,
  related_formulas: `- [Identity Law for Conjunction](!/logic/formulas#identity_law_for_conjunction)\n- [Domination Law for Disjunction](!/logic/formulas#domination_law_for_disjunction)`,
  related_definitions: `- [Disjunction](!/logic/definitions#disjunction)\n- [Contradiction](!/logic/definitions#contradiction)\n- [Logical Equivalence](!/logic/definitions#equivalence)`,
},

// ─── Domination Laws ──────────────────────────────────────────────────────────

{
  name: 'Domination Law for Conjunction',
  entity: 'conjunction',
  category: 'Domination Laws',
  formula: `$$P \\land \\bot \\equiv \\bot$$`,
  link: { label: 'Laws of Propositional Logic', url: '/logic/propositional-logic/laws' },
  explanation: `Conjoining any proposition with the always-false constant $\\bot$ yields $\\bot$. Falsity dominates conjunction: a single false operand forces the entire AND to be false.`,
  notation: `$\\bot$ denotes the contradiction constant (always false).`,
  related_formulas: `- [Domination Law for Disjunction](!/logic/formulas#domination_law_for_disjunction)\n- [Identity Law for Conjunction](!/logic/formulas#identity_law_for_conjunction)`,
  related_definitions: `- [Conjunction](!/logic/definitions#conjunction)\n- [Contradiction](!/logic/definitions#contradiction)\n- [Logical Equivalence](!/logic/definitions#equivalence)`,
},

{
  name: 'Domination Law for Disjunction',
  entity: 'disjunction',
  category: 'Domination Laws',
  formula: `$$P \\lor \\top \\equiv \\top$$`,
  link: { label: 'Laws of Propositional Logic', url: '/logic/propositional-logic/laws' },
  explanation: `Disjoining any proposition with the always-true constant $\\top$ yields $\\top$. Truth dominates disjunction: a single true operand forces the entire OR to be true.`,
  notation: `$\\top$ denotes the tautology constant (always true).`,
  related_formulas: `- [Domination Law for Conjunction](!/logic/formulas#domination_law_for_conjunction)\n- [Identity Law for Disjunction](!/logic/formulas#identity_law_for_disjunction)`,
  related_definitions: `- [Disjunction](!/logic/definitions#disjunction)\n- [Tautology](!/logic/definitions#tautology)\n- [Logical Equivalence](!/logic/definitions#equivalence)`,
},


// ─────────────────────────────────────────────────────────────────────────────
// LOGIC FORMULAS — Batch 2
// Categories 7-10 + 14, 15: Negation Laws, Double Negation, De Morgan,
// Absorption, Redundancy, Monotonicity
// 11 entries
// ─────────────────────────────────────────────────────────────────────────────

// ─── Negation Laws ────────────────────────────────────────────────────────────

{
  name: 'Law of Excluded Middle',
  entity: 'law_of_excluded_middle',
  category: 'Negation Laws',
  formula: `$$P \\lor \\neg P \\equiv \\top$$`,
  link: { label: 'Laws of Propositional Logic', url: '/logic/propositional-logic/laws' },
  explanation: `Every proposition is either true or false — there is no third option. The disjunction of a proposition with its own negation is always true, regardless of the truth value of $P$.`,
  conditions: `Holds in classical logic. Not accepted in intuitionistic logic, where existence requires constructive evidence.`,
  related_formulas: `- [Law of Non Contradiction](!/logic/formulas#law_of_non_contradiction)\n- [Double Negation Law](!/logic/formulas#double_negation_law)\n- [Domination Law for Disjunction](!/logic/formulas#domination_law_for_disjunction)`,
  related_definitions: `- [Negation](!/logic/definitions#negation)\n- [Tautology](!/logic/definitions#tautology)\n- [Disjunction](!/logic/definitions#disjunction)`,
},

{
  name: 'Law of Non Contradiction',
  entity: 'non_contradiction',
  category: 'Negation Laws',
  formula: `$$P \\land \\neg P \\equiv \\bot$$`,
  link: { label: 'Laws of Propositional Logic', url: '/logic/propositional-logic/laws' },
  explanation: `No proposition can be simultaneously true and false. The conjunction of a proposition with its own negation is always false, regardless of the truth value of $P$.`,
  variants: `Equivalent statement (the negation form):\n\n$$\\neg(P \\land \\neg P) \\equiv \\top$$`,
  related_formulas: `- [Law of Excluded Middle](!/logic/formulas#law_of_excluded_middle)\n- [Double Negation Law](!/logic/formulas#double_negation_law)\n- [Domination Law for Conjunction](!/logic/formulas#domination_law_for_conjunction)`,
  related_definitions: `- [Negation](!/logic/definitions#negation)\n- [Contradiction](!/logic/definitions#contradiction)\n- [Conjunction](!/logic/definitions#conjunction)`,
},

// ─── Double Negation ──────────────────────────────────────────────────────────

{
  name: 'Double Negation Law',
  entity: 'negation',
  category: 'Double Negation',
  formula: `$$\\neg(\\neg P) \\equiv P$$`,
  link: { label: 'Laws of Propositional Logic', url: '/logic/propositional-logic/laws' },
  explanation: `Negating a proposition twice returns the original proposition. Negation is an involution: applying it an even number of times has no net effect.`,
  conditions: `Valid in classical logic. Intuitionistic logic accepts $P \\to \\neg(\\neg P)$ but not the reverse direction.`,
  related_formulas: `- [De Morgan Law for Conjunction](!/logic/formulas#de_morgan_law_for_conjunction)\n- [De Morgan Law for Disjunction](!/logic/formulas#de_morgan_law_for_disjunction)\n- [Law of Excluded Middle](!/logic/formulas#law_of_excluded_middle)`,
  related_definitions: `- [Negation](!/logic/definitions#negation)\n- [Logical Equivalence](!/logic/definitions#equivalence)`,
},

// ─── De Morgan's Laws ─────────────────────────────────────────────────────────

{
  name: 'De Morgan Law for Conjunction',
  entity: 'negation',
  category: 'De Morgan Laws',
  formula: `$$\\neg(P \\land Q) \\equiv \\neg P \\lor \\neg Q$$`,
  link: { label: 'Laws of Propositional Logic', url: '/logic/propositional-logic/laws' },
  explanation: `Negating a conjunction is equivalent to disjoining the negations of its parts. The negation crosses the parentheses, the connective flips from AND to OR, and each operand is negated.`,
  derivation: `Verified by truth table — both sides agree on all four assignments of $P$ and $Q$:\n\n| $P$ | $Q$ | $P \\land Q$ | $\\neg(P \\land Q)$ | $\\neg P \\lor \\neg Q$ |\n|---|---|---|---|---|\n| T | T | T | F | F |\n| T | F | F | T | T |\n| F | T | F | T | T |\n| F | F | F | T | T |`,
  related_formulas: `- [De Morgan Law for Disjunction](!/logic/formulas#de_morgan_law_for_disjunction)\n- [Double Negation Law](!/logic/formulas#double_negation_law)\n- [Negation of a Conditional](!/logic/formulas#negation_of_a_conditional)`,
  related_definitions: `- [Negation](!/logic/definitions#negation)\n- [Conjunction](!/logic/definitions#conjunction)\n- [Disjunction](!/logic/definitions#disjunction)`,
},

{
  name: 'De Morgan Law for Disjunction',
  entity: 'negation',
  category: 'De Morgan Laws',
  formula: `$$\\neg(P \\lor Q) \\equiv \\neg P \\land \\neg Q$$`,
  link: { label: 'Laws of Propositional Logic', url: '/logic/propositional-logic/laws' },
  explanation: `Negating a disjunction is equivalent to conjoining the negations of its parts. The negation crosses the parentheses, the connective flips from OR to AND, and each operand is negated.`,
  derivation: `Verified by truth table — both sides agree on all four assignments of $P$ and $Q$:\n\n| $P$ | $Q$ | $P \\lor Q$ | $\\neg(P \\lor Q)$ | $\\neg P \\land \\neg Q$ |\n|---|---|---|---|---|\n| T | T | T | F | F |\n| T | F | T | F | F |\n| F | T | T | F | F |\n| F | F | F | T | T |`,
  related_formulas: `- [De Morgan Law for Conjunction](!/logic/formulas#de_morgan_law_for_conjunction)\n- [Double Negation Law](!/logic/formulas#double_negation_law)`,
  related_definitions: `- [Negation](!/logic/definitions#negation)\n- [Disjunction](!/logic/definitions#disjunction)\n- [Conjunction](!/logic/definitions#conjunction)`,
},

// ─── Absorption Laws ──────────────────────────────────────────────────────────

{
  name: 'Absorption Conjunction Form',
  entity: 'absorption',
  category: 'Absorption Laws',
  formula: `$$P \\land (P \\lor Q) \\equiv P$$`,
  link: { label: 'Laws of Propositional Logic', url: '/logic/propositional-logic/laws' },
  explanation: `When $P$ already appears at the outer AND, wrapping it together with anything inside an inner OR adds no information — the result simplifies back to $P$. The inner disjunction is "absorbed" by the outer $P$.`,
  related_formulas: `- [Absorption Disjunction Form](!/logic/formulas#absorption_disjunction_form)\n- [Idempotent Law for Conjunction](!/logic/formulas#idempotent_law_for_conjunction)\n- [Redundancy Law for Conjunction](!/logic/formulas#redundancy_law_for_conjunction)`,
  related_definitions: `- [Conjunction](!/logic/definitions#conjunction)\n- [Disjunction](!/logic/definitions#disjunction)\n- [Logical Equivalence](!/logic/definitions#equivalence)`,
},

{
  name: 'Absorption Disjunction Form',
  entity: 'absorption',
  category: 'Absorption Laws',
  formula: `$$P \\lor (P \\land Q) \\equiv P$$`,
  link: { label: 'Laws of Propositional Logic', url: '/logic/propositional-logic/laws' },
  explanation: `When $P$ already appears at the outer OR, wrapping it together with anything inside an inner AND adds no information — the result simplifies back to $P$. The inner conjunction is "absorbed" by the outer $P$.`,
  related_formulas: `- [Absorption Conjunction Form](!/logic/formulas#absorption_conjunction_form)\n- [Idempotent Law for Disjunction](!/logic/formulas#idempotent_law_for_disjunction)\n- [Redundancy Law for Disjunction](!/logic/formulas#redundancy_law_for_disjunction)`,
  related_definitions: `- [Disjunction](!/logic/definitions#disjunction)\n- [Conjunction](!/logic/definitions#conjunction)\n- [Logical Equivalence](!/logic/definitions#equivalence)`,
},

// ─── Redundancy Laws ──────────────────────────────────────────────────────────

{
  name: 'Redundancy Law for Disjunction',
  entity: 'absorption',
  category: 'Redundancy Laws',
  formula: `$$P \\lor (Q \\lor P) \\equiv P \\lor Q$$`,
  link: { label: 'Laws of Propositional Logic', url: '/logic/propositional-logic/laws' },
  explanation: `If $P$ already participates in a disjunction, repeating it adds no information. The duplicate is dropped, leaving the simpler $P \\lor Q$.`,
  derivation: `Follows from associativity, commutativity, and idempotence:\n\n$$P \\lor (Q \\lor P) \\equiv P \\lor (P \\lor Q) \\equiv (P \\lor P) \\lor Q \\equiv P \\lor Q$$`,
  related_formulas: `- [Redundancy Law for Conjunction](!/logic/formulas#redundancy_law_for_conjunction)\n- [Idempotent Law for Disjunction](!/logic/formulas#idempotent_law_for_disjunction)\n- [Absorption Disjunction Form](!/logic/formulas#absorption_disjunction_form)`,
  related_definitions: `- [Disjunction](!/logic/definitions#disjunction)\n- [Logical Equivalence](!/logic/definitions#equivalence)`,
},

{
  name: 'Redundancy Law for Conjunction',
  entity: 'absorption',
  category: 'Redundancy Laws',
  formula: `$$P \\land (Q \\land P) \\equiv P \\land Q$$`,
  link: { label: 'Laws of Propositional Logic', url: '/logic/propositional-logic/laws' },
  explanation: `If $P$ already participates in a conjunction, repeating it adds no information. The duplicate is dropped, leaving the simpler $P \\land Q$.`,
  derivation: `Follows from associativity, commutativity, and idempotence:\n\n$$P \\land (Q \\land P) \\equiv P \\land (P \\land Q) \\equiv (P \\land P) \\land Q \\equiv P \\land Q$$`,
  related_formulas: `- [Redundancy Law for Disjunction](!/logic/formulas#redundancy_law_for_disjunction)\n- [Idempotent Law for Conjunction](!/logic/formulas#idempotent_law_for_conjunction)\n- [Absorption Conjunction Form](!/logic/formulas#absorption_conjunction_form)`,
  related_definitions: `- [Conjunction](!/logic/definitions#conjunction)\n- [Logical Equivalence](!/logic/definitions#equivalence)`,
},

// ─── Monotonicity Laws ────────────────────────────────────────────────────────

{
  name: 'Disjunction Introduction',
  entity: 'conditional',
  category: 'Monotonicity Laws',
  formula: `$$P \\to (P \\lor Q)$$`,
  link: { label: 'Laws of Propositional Logic', url: '/logic/propositional-logic/laws' },
  explanation: `From any true proposition $P$, one may infer the disjunction of $P$ with anything. Adding alternatives to a true claim cannot make it false. Also called the addition rule.`,
  conditions: `A tautology — true under every assignment of $P$ and $Q$.`,
  related_formulas: `- [Conjunction Elimination](!/logic/formulas#conjunction_elimination)\n- [Idempotent Law for Disjunction](!/logic/formulas#idempotent_law_for_disjunction)`,
  related_definitions: `- [Conditional](!/logic/definitions#conditional)\n- [Disjunction](!/logic/definitions#disjunction)\n- [Tautology](!/logic/definitions#tautology)`,
},

{
  name: 'Conjunction Elimination',
  entity: 'conditional',
  category: 'Monotonicity Laws',
  formula: `$$(P \\land Q) \\to P$$`,
  link: { label: 'Laws of Propositional Logic', url: '/logic/propositional-logic/laws' },
  explanation: `From a conjunction one may infer either of its conjuncts. If $P \\land Q$ is true, then $P$ alone must be true. Also called the simplification rule.`,
  conditions: `A tautology — true under every assignment of $P$ and $Q$.`,
  variants: `The symmetric form for the right conjunct:\n\n$$(P \\land Q) \\to Q$$`,
  related_formulas: `- [Disjunction Introduction](!/logic/formulas#disjunction_introduction)\n- [Idempotent Law for Conjunction](!/logic/formulas#idempotent_law_for_conjunction)`,
  related_definitions: `- [Conditional](!/logic/definitions#conditional)\n- [Conjunction](!/logic/definitions#conjunction)\n- [Tautology](!/logic/definitions#tautology)`,
},



// ─────────────────────────────────────────────────────────────────────────────
// LOGIC FORMULAS — Batch 3
// Categories 11-13: Conditional Equivalences, Biconditional Equivalences,
// Tautology/Contradiction Duality
// 9 entries
// ─────────────────────────────────────────────────────────────────────────────

// ─── Conditional Equivalences ─────────────────────────────────────────────────

{
  name: 'Material Implication',
  entity: 'conditional',
  category: 'Conditional Equivalences',
  formula: `$$P \\to Q \\equiv \\neg P \\lor Q$$`,
  link: { label: 'Implication in Logic Laws', url: '/logic/propositional-logic/semantics/implication#implication_laws' },
  explanation: `A conditional can be rewritten as a disjunction. The conditional fails only when $P$ is true and $Q$ is false — equivalently, when $\\neg P$ is false and $Q$ is false, i.e. when $\\neg P \\lor Q$ is false. In every other case both expressions are true.`,
  derivation: `Verified by truth table:\n\n| $P$ | $Q$ | $P \\to Q$ | $\\neg P$ | $\\neg P \\lor Q$ |\n|---|---|---|---|---|\n| T | T | T | F | T |\n| T | F | F | F | F |\n| F | T | T | T | T |\n| F | F | T | T | T |`,
  related_formulas: `- [Contrapositive Equivalence](!/logic/formulas#contrapositive_equivalence)\n- [Negation of a Conditional](!/logic/formulas#negation_of_a_conditional)\n- [De Morgan Law for Conjunction](!/logic/formulas#de_morgan_law_for_conjunction)`,
  related_definitions: `- [Conditional](!/logic/definitions#conditional)\n- [Negation](!/logic/definitions#negation)\n- [Disjunction](!/logic/definitions#disjunction)`,
},

{
  name: 'Contrapositive Equivalence',
  entity: 'contrapositive',
  category: 'Conditional Equivalences',
  formula: `$$P \\to Q \\equiv \\neg Q \\to \\neg P$$`,
  link: { label: 'Implication in Logic Laws', url: '/logic/propositional-logic/semantics/implication#implication_laws' },
  explanation: `A conditional is logically equivalent to its contrapositive — both parts negated and swapped. This equivalence is the basis for proof by contraposition: to prove $P \\to Q$, one may instead prove $\\neg Q \\to \\neg P$.`,
  derivation: `Apply Material Implication to both sides, then commutativity and Double Negation:\n\n$$P \\to Q \\equiv \\neg P \\lor Q \\equiv Q \\lor \\neg P \\equiv \\neg(\\neg Q) \\lor \\neg P \\equiv \\neg Q \\to \\neg P$$`,
  related_formulas: `- [Material Implication](!/logic/formulas#material_implication)\n- [Negation of a Conditional](!/logic/formulas#negation_of_a_conditional)\n- [Double Negation Law](!/logic/formulas#double_negation_law)`,
  related_definitions: `- [Contrapositive](!/logic/definitions#contrapositive)\n- [Conditional](!/logic/definitions#conditional)\n- [Converse](!/logic/definitions#converse)\n- [Inverse (of Conditional)](!/logic/definitions#inverse_conditional)`,
},

{
  name: 'Negation of a Conditional',
  entity: 'conditional',
  category: 'Conditional Equivalences',
  formula: `$$\\neg(P \\to Q) \\equiv P \\land \\neg Q$$`,
  link: { label: 'Equivalences with Implications', url: '/logic/propositional-logic/semantics/equivalences#conditional' },
  explanation: `The negation of a conditional is a conjunction, not another conditional. To deny "if $P$ then $Q$" is to assert that $P$ holds while $Q$ fails — the one case in which the implication is broken.`,
  derivation: `Apply Material Implication and then De Morgan, finishing with Double Negation:\n\n$$\\neg(P \\to Q) \\equiv \\neg(\\neg P \\lor Q) \\equiv \\neg(\\neg P) \\land \\neg Q \\equiv P \\land \\neg Q$$`,
  related_formulas: `- [Material Implication](!/logic/formulas#material_implication)\n- [De Morgan Law for Disjunction](!/logic/formulas#de_morgan_law_for_disjunction)\n- [Double Negation Law](!/logic/formulas#double_negation_law)`,
  related_definitions: `- [Conditional](!/logic/definitions#conditional)\n- [Negation](!/logic/definitions#negation)\n- [Conjunction](!/logic/definitions#conjunction)`,
},

{
  name: 'Exportation',
  entity: 'conditional',
  category: 'Conditional Equivalences',
  formula: `$$(P \\land Q) \\to R \\equiv P \\to (Q \\to R)$$`,
  link: { label: 'Equivalences with Implications', url: '/logic/propositional-logic/semantics/equivalences#conditional' },
  explanation: `A conditional with a conjunctive antecedent can be rewritten as a chain of conditionals — pulling one conjunct out into a separate hypothesis. Used to convert between curried and uncurried forms of multi-premise rules.`,
  derivation: `Apply Material Implication, De Morgan, and associativity of disjunction:\n\n$$(P \\land Q) \\to R \\equiv \\neg(P \\land Q) \\lor R \\equiv (\\neg P \\lor \\neg Q) \\lor R \\equiv \\neg P \\lor (\\neg Q \\lor R) \\equiv \\neg P \\lor (Q \\to R) \\equiv P \\to (Q \\to R)$$`,
  related_formulas: `- [Material Implication](!/logic/formulas#material_implication)\n- [De Morgan Law for Conjunction](!/logic/formulas#de_morgan_law_for_conjunction)\n- [Associative Law for Disjunction](!/logic/formulas#associative_law_for_disjunction)`,
  related_definitions: `- [Conditional](!/logic/definitions#conditional)\n- [Conjunction](!/logic/definitions#conjunction)`,
},

// ─── Biconditional Equivalences ───────────────────────────────────────────────

{
  name: 'Biconditional as Two Conditionals',
  entity: 'biconditional',
  category: 'Biconditional Equivalences',
  formula: `$$P \\leftrightarrow Q \\equiv (P \\to Q) \\land (Q \\to P)$$`,
  link: { label: 'Implication in Logic Laws', url: '/logic/propositional-logic/semantics/implication#implication_laws' },
  explanation: `A biconditional asserts both directions of implication at once. To prove $P \\leftrightarrow Q$, one proves $P \\to Q$ and $Q \\to P$ separately; this equivalence is the foundation of every "if and only if" proof.`,
  related_formulas: `- [Biconditional as Disjunction of Conjunctions](!/logic/formulas#biconditional_as_disjunction_of_conjunctions)\n- [Negation of a Biconditional](!/logic/formulas#negation_of_a_biconditional)\n- [Material Implication](!/logic/formulas#material_implication)`,
  related_definitions: `- [Biconditional](!/logic/definitions#biconditional)\n- [Conditional](!/logic/definitions#conditional)\n- [Conjunction](!/logic/definitions#conjunction)`,
},

{
  name: 'Biconditional as Disjunction of Conjunctions',
  entity: 'biconditional',
  category: 'Biconditional Equivalences',
  formula: `$$P \\leftrightarrow Q \\equiv (P \\land Q) \\lor (\\neg P \\land \\neg Q)$$`,
  link: { label: 'Equivalences with Biconditionals', url: '/logic/propositional-logic/semantics/equivalences#biconditional' },
  explanation: `A biconditional is true exactly when both operands share the same truth value — either both true or both false. The disjunction enumerates these two satisfying cases, putting the formula directly into Disjunctive Normal Form.`,
  derivation: `Start from the two-conditional form and apply Material Implication and distribution:\n\n$$P \\leftrightarrow Q \\equiv (P \\to Q) \\land (Q \\to P) \\equiv (\\neg P \\lor Q) \\land (\\neg Q \\lor P)$$\n\nDistributing yields four disjuncts; two are contradictions ($\\neg P \\land \\neg Q$ vs $P$, etc.) and reduce away, leaving:\n\n$$\\equiv (P \\land Q) \\lor (\\neg P \\land \\neg Q)$$`,
  related_formulas: `- [Biconditional as Two Conditionals](!/logic/formulas#biconditional_as_two_conditionals)\n- [Negation of a Biconditional](!/logic/formulas#negation_of_a_biconditional)\n- [Distributive Law of Conjunction over Disjunction](!/logic/formulas#distributive_law_of_conjunction_over_disjunction)`,
  related_definitions: `- [Biconditional](!/logic/definitions#biconditional)\n- [Conjunction](!/logic/definitions#conjunction)\n- [Disjunction](!/logic/definitions#disjunction)\n- [Negation](!/logic/definitions#negation)\n- [DNF](!/logic/definitions#dnf)`,
},

{
  name: 'Negation of a Biconditional',
  entity: 'biconditional',
  category: 'Biconditional Equivalences',
  formula: `$$\\neg(P \\leftrightarrow Q) \\equiv (P \\land \\neg Q) \\lor (\\neg P \\land Q)$$`,
  link: { label: 'Equivalences with Biconditionals', url: '/logic/propositional-logic/semantics/equivalences#biconditional' },
  explanation: `The negation of a biconditional is the exclusive-or pattern: true when $P$ and $Q$ disagree. The two disjuncts enumerate the two ways disagreement can occur — $P$ true with $Q$ false, or $P$ false with $Q$ true.`,
  variants: `Equivalent compact form using exclusive-or:\n\n$$\\neg(P \\leftrightarrow Q) \\equiv P \\oplus Q$$`,
  related_formulas: `- [Biconditional as Two Conditionals](!/logic/formulas#biconditional_as_two_conditionals)\n- [Biconditional as Disjunction of Conjunctions](!/logic/formulas#biconditional_as_disjunction_of_conjunctions)\n- [De Morgan Law for Disjunction](!/logic/formulas#de_morgan_law_for_disjunction)`,
  related_definitions: `- [Biconditional](!/logic/definitions#biconditional)\n- [Conjunction](!/logic/definitions#conjunction)\n- [Negation](!/logic/definitions#negation)\n- [Disjunction](!/logic/definitions#disjunction)`,
},

// ─── Tautology and Contradiction Duality ──────────────────────────────────────

{
  name: 'Negation of Tautology',
  entity: 'tautology',
  category: 'Tautology and Contradiction Duality',
  formula: `$$\\neg \\top \\equiv \\bot$$`,
  link: { label: 'Tautology vs Contradiction', url: '/logic/propositional-logic/semantics/tautology#tautology_contradiction' },
  explanation: `The negation of the truth constant is the falsity constant. Tautology and contradiction are duals under negation: applying $\\neg$ to a formula that is always true produces a formula that is always false.`,
  notation: `$\\top$ denotes the tautology constant (always true); $\\bot$ denotes the contradiction constant (always false).`,
  related_formulas: `- [Negation of Contradiction](!/logic/formulas#negation_of_contradiction)\n- [Law of Excluded Middle](!/logic/formulas#law_of_excluded_middle)\n- [Double Negation Law](!/logic/formulas#double_negation_law)`,
  related_definitions: `- [Tautology](!/logic/definitions#tautology)\n- [Contradiction](!/logic/definitions#contradiction)\n- [Negation](!/logic/definitions#negation)`,
},

{
  name: 'Negation of Contradiction',
  entity: 'contradiction',
  category: 'Tautology and Contradiction Duality',
  formula: `$$\\neg \\bot \\equiv \\top$$`,
  link: { label: 'Tautology vs Contradiction', url: '/logic/propositional-logic/semantics/tautology#tautology_contradiction' },
  explanation: `The negation of the falsity constant is the truth constant. Tautology and contradiction are duals under negation: applying $\\neg$ to a formula that is always false produces a formula that is always true.`,
  notation: `$\\bot$ denotes the contradiction constant (always false); $\\top$ denotes the tautology constant (always true).`,
  related_formulas: `- [Negation of Tautology](!/logic/formulas#negation_of_tautology)\n- [Law of Non Contradiction](!/logic/formulas#law_of_non_contradiction)\n- [Double Negation Law](!/logic/formulas#double_negation_law)`,
  related_definitions: `- [Contradiction](!/logic/definitions#contradiction)\n- [Tautology](!/logic/definitions#tautology)\n- [Negation](!/logic/definitions#negation)`,
},


  ];
  
  export default logicFormulasList;
  



 // {
    //   name: "Double Negation Law",
    //   formula: "$\\neg(\\neg P) = P$",
    //   fields: {
    //     "Explanation": "Negating something twice brings you back to where you started. Saying 'not not P' is just another way of saying 'P'. It's like undoing a negative to get back to the original statement.",
    //     "$P$": "Any statement or proposition",
    //     "$\\neg$": "Negation operator, meaning 'not'",
    //     "$\\neg(\\neg P)$": "The negation of the negation of P",
    //     "Example": "If it's not not raining, then it is raining.",
    //     "Use Cases": "Simplifying logical expressions, making proofs clearer"
    //   },
    //   category: "Logical Equivalences"
    // },
    // {
    //   name: "De Morgan's Law (Conjunction)",
    //   formula: "$\\neg(P \\land Q) = \\neg P \\lor \\neg Q$",
    //   fields: {
    //     "Explanation": "The negation of 'P and Q' is the same as 'not P or not Q'. Denying an 'and' statement turns it into an 'or' statement with both parts negated.",
    //     "$P, Q$": "Statements or propositions",
    //     "$\\land$": "Logical 'and' operator",
    //     "$\\lor$": "Logical 'or' operator",
    //     "$\\neg$": "Negation operator, meaning 'not'",
    //     "Example": "Not (I'm awake and it's sunny) equals (I'm not awake or it's not sunny).",
    //     "Use Cases": "Transforming logical statements, simplifying conditions in programming"
    //   },
    //   category: "De Morgan's Laws"
    // },
    // {
    //   name: "De Morgan's Law (Disjunction)",
    //   formula: "$\\neg(P \\lor Q) = \\neg P \\land \\neg Q$",
    //   fields: {
    //     "Explanation": "Negating 'P or Q' turns it into 'not P and not Q'. So, denying an 'or' statement gives you an 'and' statement where both parts are negated.",
    //     "$P, Q$": "Statements or propositions",
    //     "$\\lor$": "Logical 'or' operator",
    //     "$\\land$": "Logical 'and' operator",
    //     "$\\neg$": "Negation operator, meaning 'not'",
    //     "Example": "Not (I'll go or you'll stay) equals (I won't go and you won't stay).",
    //     "Use Cases": "Simplifying logic in proofs, refining search queries"
    //   },
    //   category: "De Morgan's Laws"
    // },
    // {
    //   name: "Implication as Disjunction",
    //   formula: "$P \\rightarrow Q = \\neg P \\lor Q$",
    //   fields: {
    //     "Explanation": "Saying 'if P then Q' is the same as saying 'either not P or Q'. It's a way to express implications using 'or'.",
    //     "$P, Q$": "Statements or propositions",
    //     "$\\rightarrow$": "Logical 'implies' operator",
    //     "$\\neg$": "Negation operator",
    //     "$\\lor$": "Logical 'or' operator",
    //     "Example": "If it's raining, then the ground is wet equals either it's not raining or the ground is wet.",
    //     "Use Cases": "Rewriting logical implications, simplifying expressions in logic circuits"
    //   },
    //   category: "Logical Equivalences"
    // },
    // {
    //   name: "Contrapositive",
    //   formula: "$P \\rightarrow Q = \\neg Q \\rightarrow \\neg P$",
    //   fields: {
    //     "Explanation": "An implication is equivalent to its contrapositive. So 'if P then Q' means the same as 'if not Q then not P'.",
    //     "$P, Q$": "Statements or propositions",
    //     "$\\rightarrow$": "Logical 'implies' operator",
    //     "$\\neg$": "Negation operator",
    //     "Example": "If the alarm rings, then I wake up equals if I don't wake up, then the alarm didn't ring.",
    //     "Use Cases": "Proof techniques, logical reasoning in arguments"
    //   },
    //   category: "Logical Equivalences"
    // },
    // {
    //   name: "Biconditional Definition",
    //   formula: "$P \\leftrightarrow Q = (P \\rightarrow Q) \\land (Q \\rightarrow P)$",
    //   fields: {
    //     "Explanation": "Saying 'P if and only if Q' means both 'if P then Q' and 'if Q then P' happen together.",
    //     "$P, Q$": "Statements or propositions",
    //     "$\\leftrightarrow$": "Logical 'if and only if' operator",
    //     "$\\rightarrow$": "Logical 'implies' operator",
    //     "$\\land$": "Logical 'and' operator",
    //     "Example": "I will go if and only if you go equals if I go then you go, and if you go then I go.",
    //     "Use Cases": "Defining equivalence, constructing precise statements"
    //   },
    //   category: "Logical Equivalences"
    // },
    // {
    //   name: "Distributive Law (Conjunction over Disjunction)",
    //   formula: "$P \\land (Q \\lor R) = (P \\land Q) \\lor (P \\land R)$",
    //   fields: {
    //     "Explanation": "You can distribute 'and' over 'or' just like multiplication over addition in arithmetic.",
    //     "$P, Q, R$": "Statements or propositions",
    //     "$\\land$": "Logical 'and' operator",
    //     "$\\lor$": "Logical 'or' operator",
    //     "Example": "It's hot and (sunny or humid) equals (hot and sunny) or (hot and humid).",
    //     "Use Cases": "Simplifying logical expressions, designing logical circuits"
    //   },
    //   category: "Logical Laws"
    // },
    // {
    //   name: "Distributive Law (Disjunction over Conjunction)",
    //   formula: "$P \\lor (Q \\land R) = (P \\lor Q) \\land (P \\lor R)$",
    //   fields: {
    //     "Explanation": "Similarly, 'or' can distribute over 'and', like addition over multiplication in arithmetic.",
    //     "$P, Q, R$": "Statements or propositions",
    //     "$\\lor$": "Logical 'or' operator",
    //     "$\\land$": "Logical 'and' operator",
    //     "Example": "I will eat or (you cook and we have ingredients) equals (I will eat or you cook) and (I will eat or we have ingredients).",
    //     "Use Cases": "Breaking down complex conditions, optimizing logical formulas"
    //   },
    //   category: "Logical Laws"
    // },
    // {
    //   name: "Identity Law (Conjunction)",
    //   formula: "$P \\land \\text{True} = P$",
    //   fields: {
    //     "Explanation": "Anything 'and' true is just that thing. True doesn't change the outcome when using 'and'.",
    //     "$P$": "Any statement or proposition",
    //     "$\\land$": "Logical 'and' operator",
    //     "$\\text{True}$": "Logical constant representing truth",
    //     "Example": "It's raining and true equals it's raining.",
    //     "Use Cases": "Simplifying expressions, removing redundant conditions"
    //   },
    //   category: "Logical Laws"
    // },
    // {
    //   name: "Identity Law (Disjunction)",
    //   formula: "$P \\lor \\text{False} = P$",
    //   fields: {
    //     "Explanation": "Anything 'or' false is just that thing. False doesn't affect the outcome when using 'or'.",
    //     "$P$": "Any statement or proposition",
    //     "$\\lor$": "Logical 'or' operator",
    //     "$\\text{False}$": "Logical constant representing falsehood",
    //     "Example": "It's raining or false equals it's raining.",
    //     "Use Cases": "Simplifying logical statements, cleaning up expressions"
    //   },
    //   category: "Logical Laws"
    // },
    // {
    //   name: "Domination Law (Conjunction)",
    //   formula: "$P \\land \\text{False} = \\text{False}$",
    //   fields: {
    //     "Explanation": "Anything 'and' false is always false. Since one part is false, the whole expression is false.",
    //     "$P$": "Any statement or proposition",
    //     "$\\land$": "Logical 'and' operator",
    //     "$\\text{False}$": "Logical constant representing falsehood",
    //     "Example": "It's raining and false equals false.",
    //     "Use Cases": "Simplifying expressions, understanding contradictions"
    //   },
    //   category: "Logical Laws"
    // },
    // {
    //   name: "Domination Law (Disjunction)",
    //   formula: "$P \\lor \\text{True} = \\text{True}$",
    //   fields: {
    //     "Explanation": "Anything 'or' true is always true. Since one part is true, the whole expression is true.",
    //     "$P$": "Any statement or proposition",
    //     "$\\lor$": "Logical 'or' operator",
    //     "$\\text{True}$": "Logical constant representing truth",
    //     "Example": "It's raining or true equals true.",
    //     "Use Cases": "Simplifying logical statements, understanding tautologies"
    //   },
    //   category: "Logical Laws"
    // },
    // {
    //   name: "Idempotent Law (Conjunction)",
    //   formula: "$P \\land P = P$",
    //   fields: {
    //     "Explanation": "Doing 'and' with the same thing doesn't change anything. It's like repeating yourself.",
    //     "$P$": "Any statement or proposition",
    //     "$\\land$": "Logical 'and' operator",
    //     "Example": "I'm hungry and I'm hungry equals I'm hungry.",
    //     "Use Cases": "Simplifying redundant expressions, optimizing logic circuits"
    //   },
    //   category: "Logical Laws"
    // },
    // {
    //   name: "Idempotent Law (Disjunction)",
    //   formula: "$P \\lor P = P$",
    //   fields: {
    //     "Explanation": "Doing 'or' with the same thing doesn't change anything. It's like offering the same choice twice.",
    //     "$P$": "Any statement or proposition",
    //     "$\\lor$": "Logical 'or' operator",
    //     "Example": "I'll study or I'll study equals I'll study.",
    //     "Use Cases": "Removing redundancies, simplifying choices"
    //   },
    //   category: "Logical Laws"
    // },
    // {
    //   name: "Negation of Quantifiers (Universal)",
    //   formula: "$\\neg (\\forall x\\, P(x)) = \\exists x\\, \\neg P(x)$",
    //   fields: {
    //     "Explanation": "Saying 'not all x are P' means 'there exists at least one x that's not P'.",
    //     "$\\forall$": "Universal quantifier meaning 'for all'",
    //     "$\\exists$": "Existential quantifier meaning 'there exists'",
    //     "$x$": "Elements in a domain",
    //     "$P(x)$": "A property or condition involving x",
    //     "$\\neg$": "Negation operator",
    //     "Example": "Not everyone is tall means there is someone who is not tall.",
    //     "Use Cases": "Transforming statements in proofs, logic in mathematical arguments"
    //   },
    //   category: "Quantifier Rules"
    // },
    // {
    //   name: "Negation of Quantifiers (Existential)",
    //   formula: "$\\neg (\\exists x\\, P(x)) = \\forall x\\, \\neg P(x)$",
    //   fields: {
    //     "Explanation": "Saying 'there is no x such that P(x)' means 'for all x, not P(x)'.",
    //     "$\\exists$": "Existential quantifier meaning 'there exists'",
    //     "$\\forall$": "Universal quantifier meaning 'for all'",
    //     "$x$": "Elements in a domain",
    //     "$P(x)$": "A property or condition involving x",
    //     "$\\neg$": "Negation operator",
    //     "Example": "There is no solution means all options fail.",
    //     "Use Cases": "Negating statements in proofs, logical reasoning"
    //   },
    //   category: "Quantifier Rules"
    // },
    // {
    //   name: "Universal Instantiation",
    //   formula: "$\\forall x\\, P(x) \\rightarrow P(c)$",
    //   fields: {
    //     "Explanation": "If something is true for everything, it's true for any specific thing.",
    //     "$\\forall$": "Universal quantifier meaning 'for all'",
    //     "$x$": "Elements in a domain",
    //     "$P(x)$": "A property or condition involving x",
    //     "$P(c)$": "The property applied to a specific element c",
    //     "$c$": "A specific element in the domain",
    //     "$\\rightarrow$": "Logical 'implies' operator",
    //     "Example": "All birds can fly implies that this specific bird can fly.",
    //     "Use Cases": "Applying general truths to specific cases"
    //   },
    //   category: "Inference Rules"
    // },
    // {
    //   name: "Existential Generalization",
    //   formula: "$P(c) \\rightarrow \\exists x\\, P(x)$",
    //   fields: {
    //     "Explanation": "If something is true for a specific case, then there exists at least one case where it's true.",
    //     "$\\exists$": "Existential quantifier meaning 'there exists'",
    //     "$x$": "Elements in a domain",
    //     "$P(x)$": "A property or condition involving x",
    //     "$P(c)$": "The property applied to a specific element c",
    //     "$c$": "A specific element in the domain",
    //     "$\\rightarrow$": "Logical 'implies' operator",
    //     "Example": "This apple is red implies there exists a red apple.",
    //     "Use Cases": "Building general statements from specific examples"
    //   },
    //   category: "Inference Rules"
    // },
    // {
    //   name: "Modus Ponens",
    //   formula: "From $(P \\rightarrow Q)$ and $P$, infer $Q$",
    //   fields: {
    //     "Explanation": "If 'P implies Q' and 'P is true', then 'Q must be true'. It's a basic rule of logical deduction.",
    //     "$P, Q$": "Statements or propositions",
    //     "$\\rightarrow$": "Logical 'implies' operator",
    //     "Example": "If it's raining, then the ground is wet. It's raining, so the ground is wet.",
    //     "Use Cases": "Basic logical deduction, reasoning in proofs"
    //   },
    //   category: "Inference Rules"
    // },
    // {
    //   name: "Modus Tollens",
    //   formula: "From $(P \\rightarrow Q)$ and $\\neg Q$, infer $\\neg P$",
    //   fields: {
    //     "Explanation": "If 'P implies Q' and 'Q is false', then 'P must be false' too.",
    //     "$P, Q$": "Statements or propositions",
    //     "$\\rightarrow$": "Logical 'implies' operator",
    //     "$\\neg$": "Negation operator",
    //     "Example": "If I study, I'll pass the test. I didn't pass, so I didn't study.",
    //     "Use Cases": "Deductive reasoning, problem-solving in logic"
    //   },
    //   category: "Inference Rules"
    // },
    // {
    //   name: "Hypothetical Syllogism",
    //   formula: "From $(P \\rightarrow Q)$ and $(Q \\rightarrow R)$, infer $(P \\rightarrow R)$",
    //   fields: {
    //     "Explanation": "If 'P leads to Q' and 'Q leads to R', then 'P leads to R'. It's a chain of logical implications.",
    //     "$P, Q, R$": "Statements or propositions",
    //     "$\\rightarrow$": "Logical 'implies' operator",
    //     "Example": "If I wake up early, I'll go jogging. If I go jogging, I'll feel good. So, if I wake up early, I'll feel good.",
    //     "Use Cases": "Building logical arguments, planning sequences of events"
    //   },
    //   category: "Inference Rules"
    // },
    // {
    //   name: "Disjunctive Syllogism",
    //   formula: "From $(P \\lor Q)$ and $\\neg P$, infer $Q$",
    //   fields: {
    //     "Explanation": "If 'P or Q' is true and 'P is false', then 'Q must be true'.",
    //     "$P, Q$": "Statements or propositions",
    //     "$\\lor$": "Logical 'or' operator",
    //     "$\\neg$": "Negation operator",
    //     "Example": "Either I will have tea or coffee. I won't have tea, so I'll have coffee.",
    //     "Use Cases": "Making decisions, eliminating possibilities"
    //   },
    //   category: "Inference Rules"
    // },
    // {
    //   name: "Law of Excluded Middle",
    //   formula: "$P \\lor \\neg P = \\text{True}$",
    //   fields: {
    //     "Explanation": "A statement is either true or not true. There's no middle ground.",
    //     "$P$": "Any statement or proposition",
    //     "$\\lor$": "Logical 'or' operator",
    //     "$\\neg$": "Negation operator",
    //     "$\\text{True}$": "Logical constant representing truth",
    //     "Example": "It is either raining or not raining.",
    //     "Use Cases": "Fundamental principle in classical logic, binary reasoning"
    //   },
    //   category: "Logical Laws"
    // },
    // {
    //   name: "Law of Non-Contradiction",
    //   formula: "$P \\land \\neg P = \\text{False}$",
    //   fields: {
    //     "Explanation": "A statement can't be both true and not true at the same time.",
    //     "$P$": "Any statement or proposition",
    //     "$\\land$": "Logical 'and' operator",
    //     "$\\neg$": "Negation operator",
    //     "$\\text{False}$": "Logical constant representing falsehood",
    //     "Example": "I can't be both asleep and not asleep simultaneously.",
    //     "Use Cases": "Ensuring consistency in arguments, detecting contradictions"
    //   },
    //   category: "Logical Laws"
    // }