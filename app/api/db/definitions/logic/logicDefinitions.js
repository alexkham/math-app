const logicTermsList = [
  {
    name: "Bound Variable",
    formula: "A variable that is within the scope of a quantifier (∀,∃) or binding operator, where its value is controlled by that operator. Denoted like: ∀x(P(x)) or ∃x(Q(x)), where x is bound",
    fields: {
      "properties": `- Has defined scope
   - Cannot be freely substituted
   - Value determined by quantifier
   - Same variable can be bound differently in different scopes`,
      "examples": `Bound variables in:
   ∀x(x > 0): x is bound by ∀
   ∃y(y² = 2): y is bound by ∃
   ∫₀¹ x dx: x is bound by integral
   
   Nested scopes:
   ∀x∃y(x < y): both x and y are bound`
    },
    category: "Logic Basics"
   },
   {
    name: "Unbound Variable",
    formula: "A variable that appears in a formula without being controlled by any quantifier or binding operator. Also called a free variable. In P(x,y), both x and y are unbound if no quantifiers are present",
    fields: {
      "properties": `- No defined scope
  - Can be freely substituted
  - Value not controlled by formula
  - Must be specified externally`,
      "examples": `Free variables:
  P(x): x is free
  x + y = 5: both x and y are free
  
  Mixed example:
  ∀x(P(x,y)): x is bound, y is free`
    },
    category: "Logic Basics"
  },
  {
    name: "Proposition",
    formula: "A declarative statement that is either true or false, but not both. Also called a propositional variable or atomic formula in formal logic.",
    fields: {
      "properties": `- Has exactly one truth value (true/false)
   - Must be declarative (not a question or command)
   - Must be unambiguous
   - Truth value is independent of observer`,
      "examples": `Valid propositions:
   - "2 + 2 = 4"
   - "Paris is the capital of France"
   - "All integers greater than 2 are prime"
   
   Not propositions:
   - "x + 1 = 5" (variable statement)
   - "How old are you?" (question)
   - "Go to sleep" (command)`
    },
    category: "Logic Basics"
   },
   {
    name: "Predicate",
    formula: "A statement containing variables that becomes a proposition (true/false) when those variables are given specific values. Denoted as P(x), Q(x,y), etc., where P, Q are predicates and x, y are variables in their domains.",
    fields: {
      "properties": `- Takes one or more variables as input
   - Returns a truth value when variables are specified
   - Forms basis for quantified statements
   - Domain must be specified for each variable`,
      "examples": `Single variable predicate:
   P(x): "x is prime"
   - P(2) is true
   - P(4) is false
   
   Two variable predicate:
   Q(x,y): "x is greater than y"
   - Q(5,3) is true
   - Q(2,7) is false`,
      "usage": "Fundamental for expressing mathematical statements and forming basis for predicate logic and quantifiers"
    },
    category: "Logic Basics"
   },
   {
    name: "Quantifier",
    formula: "A logical operator that specifies the quantity of specimens in a domain for which a predicate holds. Two main types: universal quantifier ($\\forall$: 'for all') and existential quantifier ($\\exists$: 'there exists')",
    fields: {
      "properties": `- Binds variables in predicates
   - Has scope of application
   - Can be nested
   - Can be negated`,
      "examples": `Universal quantifier:
   $\\forall x(x^2 \\geq 0)$ - "For all x, x squared is non-negative"
   
   Existential quantifier:
   $\\exists x(x^2 = 2)$ - "There exists x where x squared equals 2"
   
   Combined quantifiers:
   $\\forall x \\exists y(y > x)$ - "For all x there exists y greater than x"`,
      "negation": `Negating quantifiers:
   - $\\neg(\\forall x)P(x) \\equiv \\exists x(\\neg P(x))$
   - $\\neg(\\exists x)P(x) \\equiv \\forall x(\\neg P(x))$`
    },
    category: "Logic Basics"
   },
   {
    name: "Inference",
    formula: "A logical process of deriving a conclusion from given premises through valid logical rules. Symbolically: If P₁, P₂, ..., Pₙ are premises and C is conclusion, write: P₁, P₂, ..., Pₙ ⊢ C",
    fields: {
      "properties": `
   - Must follow valid rules of logic
   - Preserves truth from premises to conclusion
   - Can be direct or indirect
   - Forms basis of mathematical proofs`,
      "examples": `Modus Ponens:
   P₁: p → q
   P₂: p
   ∴ q
   
   Modus Tollens:
   P₁: p → q
   P₂: ¬q
   ∴ ¬p`,
      "types": `
      - Direct inference
   - Conditional inference
   - Deductive reasoning
   - Inductive reasoning
   - Transitive inference`
    },
    category: "Reasoning"
   },
    {
      name: "Axiom",
      formula: "A statement accepted as true without proof in a logical system.",
      fields: [],
      category: "Foundations"
    },
    {
      name: "Theorem",
      formula: "A statement that has been proven based on axioms and logical rules.",
      fields: [],
      category: "Foundations"
    },
    {
      name: "Proof",
      formula: "A logical argument that demonstrates the truth of a statement (conclusion) from given or previously established statements (premises, axioms) through valid rules of inference. Written as: Given P₁,...,Pₙ, prove C",
      fields: {
        "properties": `- Must follow valid logical rules
     - Each step must be justified
     - No circular reasoning allowed
     - Assumptions must be stated clearly
     - Must be complete and rigorous`,
        "types": `- Direct proof
     - Proof by contradiction
     - Proof by contrapositive
     - Mathematical induction
     - Proof by cases
     - Existence proofs
     - Uniqueness proofs`,
        "structure": `Standard format:
     1. Given/Assumptions
     2. Statement to prove
     3. Logical steps
     4. Therefore conclusion`,
        "examples": `Direct proof example:
     Prove: If n is even, then n² is even
     Proof:
     - Let n be even
     - Then n = 2k for some integer k
     - n² = (2k)² = 4k² = 2(2k²)
     - Therefore n² is even`
      },
      category: "Reasoning"
     },
    {
      name: "Premise",
      formula: "A proposition or statement (P₁, P₂, ..., Pₙ) assumed or proven to be true, from which a conclusion is drawn. In formal logic notation, premises are listed above a horizontal line with conclusion below: $\\frac{P_1,P_2,...,P_n}{C}$",
      fields: {
        "properties": `- Must be clearly stated
     - Truth value must be known or assumed
     - Can be axioms, definitions, or proven statements
     - Independent of conclusion being proven`,
        "examples": `Syllogism premises:
     P₁: All men are mortal
     P₂: Socrates is a man
     C: Therefore, Socrates is mortal
     
     Logical form:
     P₁: p → q
     P₂: p
     C: Therefore, q`,
        "types": `- Major premise (general statement)
     - Minor premise (specific instance)
     - Hidden/Implicit premises
     - Axioms (taken as self-evident)`
      },
      category: "Reasoning"
     },
     {
      name: "Conclusion",
      formula: "The statement C derived from premises P₁, P₂, ..., Pₙ through valid logical inference. In formal notation: P₁, P₂, ..., Pₙ ⊢ C or $\\frac{P_1,P_2,...,P_n}{C}$",
      fields: {
        "properties": `- Must follow logically from premises
     - Truth value depends on:
      • Truth of premises
      • Validity of inference rules
     - Cannot contain new variables not in premises
     - Strength depends on premise support`,
        "examples": `Valid conclusion:
     P₁: If it rains, ground is wet
     P₂: It is raining
     C: Therefore, ground is wet
     
     Formal logic:
     P₁: p → q
     P₂: p
     C: ∴ q`,
        "validity": `A conclusion is valid if:
     - Premises are true
     - Rules of inference are correct
     - No logical fallacies present`
      },
      category: "Reasoning"
     },
     {
      name: "Validity",
      formula: "An argument is valid if and only if it is impossible for all premises to be true and the conclusion false. In formal notation: if premises P₁, P₂, ..., Pₙ are true, then conclusion C must be true: (P₁ ∧ P₂ ∧ ... ∧ Pₙ) → C",
      fields: {
        "properties": `- Independent of actual truth of premises
     - Depends only on logical structure
     - Preserved through valid inference rules
     - Different from soundness (valid + true premises)`,
        "examples": `Valid but not sound:
     P₁: All cats are green
     P₂: Whiskers is a cat
     C: Therefore, Whiskers is green
     (Valid structure, false premise)
     
     Valid and sound:
     P₁: All squares have 4 sides
     P₂: Figure A is a square
     C: Therefore, Figure A has 4 sides`,
        "testing": `Ways to test validity:
     - Truth tables
     - Formal proofs
     - Counter-example method
     - Venn diagrams`
      },
      category: "Reasoning"
     },
    {
      name: "Soundness",
      formula: "The property of an argument being both valid and having true premises.",
      fields: [],
      category: "Reasoning"
    },
    {
      name: "Argument",
      formula: "A logical structure consisting of premises P₁, P₂, ..., Pₙ and a conclusion C where the premises are meant to support the conclusion. In formal notation: P₁, P₂, ..., Pₙ ⊢ C or $\\frac{P_1,P_2,...,P_n}{C}$",
      fields: {
        "properties": `- Must have at least one premise
     - Must have exactly one conclusion
     - Can be valid or invalid
     - Can be sound or unsound
     - Form determines validity, not content`,
        "examples": `Deductive argument:
     P₁: All mammals are warm-blooded
     P₂: All dogs are mammals
     C: Therefore, all dogs are warm-blooded
     
     Symbolic form:
     P₁: p → q
     P₂: r → p
     C: Therefore, r → q`,
        "types": `- Deductive (conclusion follows necessarily)
     - Inductive (conclusion probable but not certain)
     - Direct (straight line of reasoning)
     - Indirect (proof by contradiction)`
      },
      category: "Reasoning"
     },
    {
      name: "Fallacy",
      formula: "A flaw or error in reasoning that renders an argument invalid.",
      fields: [],
      category: "Errors in Logic"
    },
    {
      name: "Contradiction",
      formula: "A statement that is always false regardless of the truth values of its components.",
      fields: [],
      category: "Truth Values"
    },
    {
      name: "Tautology",
      formula: "A compound proposition that evaluates to true for all possible truth values of its variables. In formal notation: if T is tautology, then T ≡ 1 or ⊨ T",
      fields: {
        "properties": `- True under all interpretations
     - Truth table shows all true results
     - Used in proving logical equivalence
     - Negation is a contradiction`,
        "examples": `Common tautologies:
     - Law of excluded middle: p ∨ ¬p
     - Double negation: p ≡ ¬¬p
     - Modus ponens: ((p → q) ∧ p) → q
     
     Truth table for p ∨ ¬p:
     p | ¬p | p ∨ ¬p
     T | F  | T
     F | T  | T`,
        "verification": `Can be verified by:
     - Truth tables
     - Logical equivalences
     - Formal proofs`
      },
      category: "Truth Values"
     },
     {
      name: "Modus Ponens",
      formula: "A fundamental rule of inference: given (P → Q) and P, we can deduce Q. Formally written as: $\\frac{P \\to Q,\\; P}{Q}$ or (P → Q) ∧ P ⊢ Q",
      fields: {
        "properties": `- Also called "law of detachment"
     - Valid for any propositions P and Q
     - Forms basis for direct proofs
     - Cannot be applied in reverse`,
        "examples": `Logical form:
     P₁: P → Q (If P then Q)
     P₂: P (P is true)
     C: Therefore, Q (Q must be true)
     
     Real example:
     P₁: If it rains, then streets are wet
     P₂: It is raining
     C: Therefore, streets are wet`,
        "applications": `Used in:
     - Mathematical proofs
     - Programming logic
     - Legal reasoning
     - Everyday inference`
      },
      category: "Inference Rules"
     },
     {
      name: "Modus Tollens",
      formula: "A rule of inference: given (P → Q) and ¬Q, we can deduce ¬P. Formally written as: $\\frac{P \\to Q,\\; \\neg Q}{\\neg P}$ or (P → Q) ∧ ¬Q ⊢ ¬P",
      fields: {
        "properties": `- Also called "denying the consequent"
     - Valid for any propositions P and Q
     - Contrapositive of Modus Ponens
     - Often used in proof by contradiction`,
        "examples": `Logical form:
     P₁: P → Q (If P then Q)
     P₂: ¬Q (Q is false)
     C: Therefore, ¬P (P must be false)
     
     Real example:
     P₁: If it's raining, ground is wet
     P₂: Ground is not wet
     C: Therefore, it's not raining`,
        "applications": `Used in:
     - Indirect proofs
     - Scientific reasoning (falsification)
     - Diagnostic reasoning
     - Error detection`
      },
      category: "Inference Rules"
     },
     {
      name: "Disjunctive Syllogism",
      formula: "A rule of inference: given (P ∨ Q) and ¬P, we can deduce Q. Formally written as: $\\frac{P \\lor Q,\\; \\neg P}{Q}$ or (P ∨ Q) ∧ ¬P ⊢ Q",
      fields: {
        "properties": `- Also called "elimination of disjunction"
     - Valid for any propositions P and Q
     - Works with either disjunct being false
     - Requires exclusive OR not necessary`,
        "examples": `Logical form:
     P₁: P ∨ Q (Either P or Q)
     P₂: ¬P (Not P)
     C: Therefore, Q (Q must be true)
     
     Real example:
     P₁: Either it's day or night
     P₂: It's not day
     C: Therefore, it's night`,
        "applications": `Used in:
     - Process of elimination
     - Troubleshooting
     - Decision making
     - Case analysis`
      },
      category: "Inference Rules"
     },
     {
      name: "Conjunction",
      formula: "A logical operation combining two statements P and Q with AND (∧), true only when both statements are true. Formally: P ∧ Q is true iff both P and Q are true",
      fields: {
        "properties": `- Commutative: P ∧ Q ≡ Q ∧ P
     - Associative: (P ∧ Q) ∧ R ≡ P ∧ (Q ∧ R)
     - Idempotent: P ∧ P ≡ P
     - Identity: P ∧ true ≡ P`,
        "examples": `Truth table:
     P | Q | P ∧ Q
     T | T | T
     T | F | F
     F | T | F
     F | F | F
     
     Real example:
     P: It's raining
     Q: It's cold
     P ∧ Q: It's raining and cold`,
        "negation": "De Morgan's Law: ¬(P ∧ Q) ≡ ¬P ∨ ¬Q"
      },
      category: "Logical Connectives"
     },
     {
      name: "Disjunction",
      formula: "A logical operation combining two statements P and Q with OR (∨), true when at least one statement is true. Formally: P ∨ Q is true iff either P is true or Q is true (or both)",
      fields: {
        "properties": `- Commutative: P ∨ Q ≡ Q ∨ P
     - Associative: (P ∨ Q) ∨ R ≡ P ∨ (Q ∨ R)
     - Idempotent: P ∨ P ≡ P
     - Identity: P ∨ false ≡ P`,
        "examples": `Truth table:
     P | Q | P ∨ Q
     T | T | T
     T | F | T
     F | T | T
     F | F | F
     
     Real example:
     P: It's sunny
     Q: It's cloudy
     P ∨ Q: It's either sunny or cloudy`,
        "negation": "De Morgan's Law: ¬(P ∨ Q) ≡ ¬P ∧ ¬Q"
      },
      category: "Logical Connectives"
     },
    {
      name: "Disjunctive Normal Form (DNF)",
      formula: "A logical formula is in DNF if it is a disjunction (OR) of conjunctions (AND) of literals (variables or their negations): $(p \\land q) \\lor (\\neg p \\land r) \\lor (q \\land r)$",
      fields: {
        "properties": `
      - Every formula can be converted to DNF
     - Each conjunction is a minterm
     - No conjunction contains both a variable and its negation
     - No distributive laws needed after conversion`,
        "examples": `Converting to DNF:
     $$(p \\to q) \\equiv (\\neg p \\lor q)$$
     
     $$(p \\leftrightarrow q) \\equiv (p \\land q) \\lor (\\neg p \\land \\neg q)$$
     
     Complex example:
     $$\\neg(p \\land q) \\equiv (\\neg p \\lor \\neg q)$$`
      },
      category: "Logic"
     },
     {
      name: "Conjunctive Normal Form (CNF)",
      formula: "A logical formula is in CNF if it is a conjunction (AND) of disjunctions (OR) of literals (variables or their negations): $(p \\lor q) \\land (\\neg p \\lor r) \\land (q \\lor r)$",
      fields: {
        "properties": `
        - Every formula can be converted to CNF
     - Each disjunction is a maxterm
     - No disjunction contains both a variable and its negation
     - Useful in automated theorem proving`,
        "examples": `Converting to CNF:
     $$(p \\to q) \\equiv (\\neg p \\lor q)$$
     
     $$(p \\leftrightarrow q) \\equiv (p \\lor \\neg q) \\land (\\neg p \\lor q)$$
     
     Complex example:
     $$\\neg(p \\lor q) \\equiv (\\neg p \\land \\neg q)$$`
      },
      category: "Logic"
     },
     {
      name: "Conditional",
      formula: "A logical operation denoted as P → Q (if P, then Q), establishing a relationship where P implies Q. Formally written as: if P is true and P → Q is true, then Q must be true",
      fields: {
        "properties": `
        - Not commutative: P → Q ≢ Q → P
        - Transitive: If P → Q and Q → R, then P → R
        - Contrapositive equivalence: P → Q ≡ ¬Q → ¬P
        - False antecedent: If P is false, P → Q is true (vacuously true)`,
        "equivalent_forms": `- Material implication: P → Q ≡ ¬P ∨ Q
        - Negation: ¬(P → Q) ≡ P ∧ ¬Q`,
        "examples": `Mathematical:
        P: n is even
        Q: n² is even
        P → Q: If n is even, then n² is even
    
        Real-world:
        P: It rains
        Q: The ground is wet
        P → Q: If it rains, then the ground is wet`
      },
      category: "Logical Connectives"
    },
    {
      name: "Antecedent",
      formula: "In a conditional statement P → Q, the antecedent P is the hypothesis or condition that implies the consequent",
      fields: {
        "properties": `
        - Acts as the "if" part of an "if-then" statement
        - Determines the domain or conditions under which the implication holds
        - Can be simple (P) or compound (P ∧ R)`,
        "significance": `- False antecedent makes the conditional vacuously true
        - Strength of antecedent affects the logical strength of the conditional
        - Multiple antecedents can be combined: (P ∧ Q) → R`,
        "examples": `Mathematical:
        In "If x > 0, then x² > 0"
        Antecedent is "x > 0"
    
        Real-world:
        In "If it rains, then the ground is wet"
        Antecedent is "it rains"`
      },
      category: "Logical Connectives"
    },
    {
      name: "Consequent",
      formula: "In a conditional statement P → Q, the consequent Q is the conclusion or result that follows from the antecedent",
      fields: {
        "properties": `
        - Acts as the "then" part of an "if-then" statement
        - Need not be causally related to antecedent
        - Can be simple (Q) or compound (Q ∨ R)`,
        "significance": `- Truth depends on both antecedent truth and conditional validity
        - Multiple consequents possible through conjunction
        - Forms basis for modus ponens inference rule`,
        "examples": `Mathematical:
        In "If x > 0, then x² > 0"
        Consequent is "x² > 0"
    
        Real-world:
        In "If it rains, then the ground is wet"
        Consequent is "the ground is wet"`
      },
      category: "Logical Connectives"
    },
    {
      name: "Biconditional",
      formula: "A logical operation denoted as P ↔ Q (P if and only if Q), indicating that P and Q have the same truth value. Formally: (P → Q) ∧ (Q → P)",
      fields: {
        "properties": `
             - Commutative: P ↔ Q ≡ Q ↔ P
             - Transitive: If P ↔ Q and Q ↔ R, then P ↔ R
             - Equivalence relation: defines logical equivalence
             - Stronger than simple conditional: requires both directions`,
        "equivalent_forms": `
             - P ↔ Q ≡ (P → Q) ∧ (Q → P)
             - P ↔ Q ≡ (P ∧ Q) ∨ (¬P ∧ ¬Q)
             - ¬(P ↔ Q) ≡ P ⊕ Q (exclusive or)`,
        "examples": `
             Mathematical:
             P: x² = 4
             Q: x = ±2
             P ↔ Q: x² = 4 if and only if x = ±2
    
             Real-world:
             P: Today is a weekend
             Q: Today is Saturday or Sunday
             P ↔ Q: Today is a weekend if and only if it's Saturday or Sunday`
      },
      category: "Logical Connectives"
    },
    {
      name: "Deduction",
      formula: "A form of logical inference where a conclusion necessarily follows from a set of premises. If all premises are true, the conclusion must be true.",
      fields: {
        "characteristics": `
             - Moves from general to specific
             - Truth-preserving when valid
             - Conclusion certainty depends on premises
             - Forms basis of mathematical proofs`,
        "methods": `
             - Modus Ponens: ((P → Q) ∧ P) ⊢ Q
             - Modus Tollens: ((P → Q) ∧ ¬Q) ⊢ ¬P
             - Hypothetical Syllogism: ((P → Q) ∧ (Q → R)) ⊢ (P → R)`,
        "examples": `
             Mathematical:
             Premise 1: All integers divisible by 4 are even
             Premise 2: 12 is divisible by 4
             Conclusion: Therefore, 12 is even
    
             Real-world:
             Premise 1: All mammals are warm-blooded
             Premise 2: Dogs are mammals
             Conclusion: Therefore, dogs are warm-blooded`,
        "applications": `
             - Mathematical proofs
             - Legal reasoning
             - Computer programming
             - Scientific hypothesis testing`
      },
      category: "Reasoning"
    },
    {
      name: "Induction",
      formula: "A method of reasoning that derives general principles from specific observations, establishing probable (not certain) conclusions.",
      fields: {
        "characteristics": `
             - Moves from specific to general
             - Conclusion extends beyond premises
             - Results in probability, not certainty
             - Subject to new evidence`,
        "methods": `
             - Simple Enumeration: observing pattern in instances
             - Elimination: removing alternative explanations
             - Analogy: reasoning from similar cases
             - Statistical Inference: generalizing from samples`,
        "examples": `
             Mathematical:
             Observation 1: 1 = 1
             Observation 2: 1 + 2 = 3
             Observation 3: 1 + 2 + 3 = 6
             Conjecture: Sum of first n integers = n(n+1)/2
    
             Scientific:
             Observation: Every observed swan is white
             Induction: Therefore, all swans are white
             (Note: Shows limitation - black swans exist)`,
        "limitations": `
             - Problem of induction (Hume)
             - Cannot guarantee universal truth
             - Susceptible to counterexamples
             - Requires representative samples`
      },
      category: "Reasoning"
    },
    {
      name: "Universal Quantifier",
      formula: "Denoted by ∀x P(x), asserts that predicate P holds for every element x in the domain of discourse. Read as 'for all x, P(x)'",
      fields: {
        "properties": `
             - Distributes over conjunction: ∀x(P(x) ∧ Q(x)) ≡ ∀xP(x) ∧ ∀xQ(x)
             - Does not distribute over disjunction: ∀x(P(x) ∨ Q(x)) ≢ ∀xP(x) ∨ ∀xQ(x)
             - Ordering matters with different quantifiers
             - Empty domain: ∀xP(x) is vacuously true`,
        "negation": `
             - ¬(∀xP(x)) ≡ ∃x¬P(x)
             - Double negation: ¬(¬(∀xP(x))) ≡ ∀xP(x)
             - Important in proofs by contradiction`,
        "examples": `
             Mathematical:
             ∀x(x² ≥ 0) - For all real numbers, their square is non-negative
             
             Set Theory:
             ∀x(x ∈ ℕ → x + 1 ∈ ℕ) - Natural numbers are closed under addition by 1
             
             Real-world:
             ∀x(x is a mammal → x is warm-blooded)
             "All mammals are warm-blooded"`,
        "common_uses": `
             - Mathematical theorems
             - Logical necessity
             - Set theory axioms
             - Database queries`
      },
      category: "Quantifiers"
     },
     {
      name: "Existential Quantifier",
      formula: "Denoted by ∃x P(x), asserts that predicate P holds for at least one element x in the domain of discourse. Read as 'there exists x such that P(x)'",
      fields: {
        "properties": `
             - Distributes over disjunction: ∃x(P(x) ∨ Q(x)) ≡ ∃xP(x) ∨ ∃xQ(x)
             - Does not distribute over conjunction: ∃x(P(x) ∧ Q(x)) ≢ ∃xP(x) ∧ ∃xQ(x)
             - Can be defined using universal quantifier and negation
             - Empty domain: ∃xP(x) is false`,
        "negation": `
             - ¬(∃xP(x)) ≡ ∀x¬P(x)
             - Double negation: ¬(¬(∃xP(x))) ≡ ∃xP(x)
             - Used in constructive proofs`,
        "examples": `
             Mathematical:
             ∃x(x² = 2) - There exists a number whose square is 2
             
             Set Theory:
             ∃x(x ∈ ℕ ∧ x + 1 = 1) - There exists a natural number that when added to 1 equals 1
             
             Real-world:
             ∃x(x is a planet ∧ x has rings)
             "There exists a planet that has rings"`,
        "unique_existence": `
             - ∃!x P(x): exactly one element satisfies P
             - ∃x(P(x) ∧ ∀y(P(y) → y = x))
             - Important in mathematical definitions`
      },
      category: "Quantifiers"
     },
     {
      name: "Logical Connective",
      formula: "Operators that combine simple propositions into compound propositions, forming the basic building blocks of logical expressions",
      fields: {
        "types": `
             - Unary connectives: negation (¬)
             - Binary connectives: conjunction (∧), disjunction (∨)
             - Implications: conditional (→), biconditional (↔)
             - Other: exclusive or (⊕), NAND (↑), NOR (↓)`,
        "properties": `
             - Truth-functionality: output determined by inputs
             - Completeness: some sets of connectives are functionally complete
             - Interdefinability: connectives can define each other
             - Precedence: standard order of operations`,
        "examples": `
             Basic Combinations:
             P ∧ Q: Conjunction (AND)
             P ∨ Q: Disjunction (OR)
             ¬P: Negation (NOT)
             P → Q: Implication (IF-THEN)
             P ↔ Q: Biconditional (IF AND ONLY IF)`,
        "functional_completeness": `
             - {¬, ∧} is functionally complete
             - {¬, ∨} is functionally complete
             - {↑} (NAND) is functionally complete alone
             - {↓} (NOR) is functionally complete alone`,
        "applications": `
             - Digital circuit design
             - Programming language operators
             - Database queries
             - Artificial intelligence logic`
      },
      category: "Logical Connectives"
     },
     {
      name: "Implication",
      formula: "A logical relationship P → Q between statements P (antecedent) and Q (consequent) where P implies Q. The implication is false only when P is true and Q is false.",
      fields: {
        "properties": `
             - Not commutative: P → Q ≢ Q → P
             - Not associative: (P → Q) → R ≢ P → (Q → R)
             - Equivalent to ¬P ∨ Q
             - Vacuously true when P is false`,
        "types": `
             - Material implication: truth-functional P → Q
             - Strict implication: necessarily P → Q
             - Counterfactual: if P were true, Q would be true
             - Causal implication: P causes Q`,
        "examples": `
             Mathematical:
             P: n is prime
             Q: n has exactly two factors
             P → Q: If n is prime, then n has exactly two factors
             
             Real-world:
             P: It is raining
             Q: The ground is wet
             P → Q: If it is raining, then the ground is wet`,
        "important_rules": `
             - Modus Ponens: ((P → Q) ∧ P) ⊢ Q
             - Modus Tollens: ((P → Q) ∧ ¬Q) ⊢ ¬P
             - Hypothetical Syllogism: ((P → Q) ∧ (Q → R)) ⊢ (P → R)`,
        "truth_table": `
             P | Q | P → Q
             T | T |   T
             T | F |   F
             F | T |   T
             F | F |   T`,
        "common_fallacies": `
             - Affirming the consequent: ((P → Q) ∧ Q) ⊬ P
             - Denying the antecedent: ((P → Q) ∧ ¬P) ⊬ ¬Q
             - Mistaking correlation for causation`
      },
      category: "Logical Connectives"
     },
    {
      name: "Equivalence",
      formula: "Two logical statements $p$ and $q$ are equivalent ($p \\equiv q$) if they have identical truth values under all possible valuations of their variables",
      fields: {
        "properties": `- Reflexive: $p \\equiv p$
     - Symmetric: if $p \\equiv q$ then $q \\equiv p$
     - Transitive: if $p \\equiv q$ and $q \\equiv r$ then $p \\equiv r$`,
        "examples": `Common equivalences:
     $p \\to q \\equiv \\neg p \\lor q$
     $(p \\land q) \\equiv \\neg(\\neg p \\lor \\neg q)$ (De Morgan's Law)
     $\\neg\\neg p \\equiv p$ (Double Negation)`,
        "verification": "Can be proven using truth tables or logical proofs"
      },
      category: "Logical Connectives"
     },
     {
      name: "Negation",
      formula: "A unary logical operator (¬P or ~P) that reverses the truth value of a proposition P. If P is true, ¬P is false; if P is false, ¬P is true.",
      fields: {
        "properties": `
             - Involution: ¬(¬P) ≡ P (double negation law)
             - Contradictions: P ∧ ¬P is always false
             - Tautologies: P ∨ ¬P is always true
             - Basic completeness: {¬, ∧} or {¬, ∨} are functionally complete`,
        "laws": `
             - De Morgan's Laws:
               ¬(P ∧ Q) ≡ ¬P ∨ ¬Q
               ¬(P ∨ Q) ≡ ¬P ∧ ¬Q
             - Implication: ¬(P → Q) ≡ P ∧ ¬Q
             - Biconditional: ¬(P ↔ Q) ≡ P ⊕ Q`,
        "examples": `
             Mathematical:
             P: x > 0
             ¬P: x ≤ 0
             
             Logical:
             P: All ravens are black
             ¬P: Some ravens are not black
             
             Real-world:
             P: It is raining
             ¬P: It is not raining`,
        "applications": `
             - Proof by contradiction
             - Boolean algebra
             - Digital circuit design
             - Database queries`
      },
      category: "Logical Connectives"
     },
     {
      name: "Satisfiability",
      formula: "A logical formula is satisfiable if there exists at least one assignment of truth values to its variables that makes the entire formula true. Formally: ∃x₁...∃xₙ φ(x₁,...,xₙ) = true",
      fields: {
        "properties": `
             - NP-complete problem (SAT)
             - Related to validity: φ valid ⇔ ¬φ unsatisfiable
             - Independent of syntax
             - Preserved under logical equivalence`,
        "types": `
             - Boolean Satisfiability (SAT)
             - Horn-SAT (conjunction of Horn clauses)
             - 2-SAT (clauses with at most 2 literals)
             - 3-SAT (clauses with at most 3 literals)`,
        "examples": `
             Satisfiable Formula:
             (P ∨ Q) ∧ (¬P ∨ R)
             Satisfied by P=true, Q=false, R=true
             
             Unsatisfiable Formula:
             P ∧ ¬P
             No assignment can make this true`,
        "applications": `
             - Automated theorem proving
             - Circuit design verification
             - Constraint satisfaction
             - Planning problems`
      },
      category: "Formal Logic"
     },
     {
      name: "Logical Form",
      formula: "The underlying structure of a logical statement abstracted from its specific content, revealing the logical relationships between its components.",
      fields: {
        "components": `
             - Atomic propositions
             - Logical connectives
             - Quantifiers
             - Variables and constants
             - Predicates and relations`,
        "importance": `
             - Reveals logical structure
             - Enables formal analysis
             - Facilitates proof construction
             - Shows logical equivalence`,
        "examples": `
             Natural Language:
             "All humans are mortal and Socrates is human"
             Logical Form:
             (∀x(H(x) → M(x))) ∧ H(s)
             
             Natural Language:
             "Either it's raining or someone left the sprinkler on"
             Logical Form:
             R ∨ ∃x(P(x) ∧ S(x))`,
        "transformations": `
             - Standardization of variables
             - Removal of ambiguity
             - Explicit quantifier scope
             - Prenex normal form
             - Skolemization`
      },
      category: "Formal Logic"
     },
     {
      name: "Logical Consistency",
      formula: "A set of statements is logically consistent if and only if there exists at least one interpretation under which all statements in the set are true simultaneously. Formally: ∃M(M ⊨ φ₁ ∧ φ₂ ∧ ... ∧ φₙ)",
      fields: {
        "properties": `
             - Binary property of sets of statements
             - Independent of actual truth values
             - Preserved under logical equivalence
             - Related to satisfiability of conjunction`,
        "testing_methods": `
             - Truth table analysis
             - Model finding
             - Proof by contradiction
             - Semantic tableaux`,
        "examples": `
             Consistent Set:
             1. All birds can fly
             2. Penguins are birds
             3. Some birds cannot fly
             (Consistent because not all birds must fly)
     
             Inconsistent Set:
             1. All birds can fly
             2. Penguins are birds
             3. Penguins cannot fly
             4. All penguins must be able to fly
             (Contradicts itself about penguins' ability to fly)`,
        "applications": `
             - Database integrity
             - Knowledge base verification
             - Legal reasoning
             - Scientific theory development`
      },
      category: "Formal Logic"
     },
     {
      name: "Rule of Inference",
      formula: "A pattern of reasoning Γ ⊢ φ that preserves truth, where Γ is a set of premises and φ is the conclusion",
      fields: {
        "basic_rules": `
             - Modus Ponens: P→Q, P ⊢ Q
             - Modus Tollens: P→Q, ¬Q ⊢ ¬P
             - Hypothetical Syllogism: P→Q, Q→R ⊢ P→R
             - Disjunctive Syllogism: P∨Q, ¬P ⊢ Q`,
        "derived_rules": `
             - Resolution: (P∨Q), (¬P∨R) ⊢ Q∨R
             - And-Introduction: P, Q ⊢ P∧Q
             - Or-Introduction: P ⊢ P∨Q
             - Universal Instantiation: ∀xP(x) ⊢ P(a)`,
        "examples": `
             Modus Ponens Example:
             1. If it rains, the ground is wet (P→Q)
             2. It is raining (P)
             Therefore: The ground is wet (Q)
     
             Resolution Example:
             1. Either John or Mary is guilty (P∨Q)
             2. John is not guilty (¬P)
             Therefore: Mary is guilty (Q)`,
        "soundness": `
             - Truth-preserving
             - Validity guaranteed
             - Independent of content
             - Formal correctness`
      },
      category: "Inference Rules"
     },
     {
      name: "Logical Consequence",
      formula: "A statement φ is a logical consequence of premises Γ (written Γ ⊨ φ) if φ is true in every model where all premises in Γ are true",
      fields: {
        "properties": `
             - Transitive: If A⊨B and B⊨C, then A⊨C
             - Monotonic in classical logic
             - Independent of syntax
             - Preserved under substitution`,
        "types": `
             - Semantic consequence (model-theoretic)
             - Syntactic consequence (proof-theoretic)
             - Material consequence
             - Strict consequence`,
        "examples": `
             Semantic Consequence:
             Premises:
             - All humans are mortal
             - Socrates is human
             Consequence:
             - Socrates is mortal
             
             Material Consequence:
             Premises:
             - If it rains, streets are wet
             - Streets are not wet
             Consequence:
             - It is not raining`,
        "relationship_to_validity": `
             - A ⊨ B iff A → B is valid
             - Γ ⊨ φ iff Γ ⊢ φ (completeness)
             - Truth preservation
             - Necessity preservation`
      },
      category: "Reasoning"
     },

     {
      name: "Formal System",
      formula: "A mathematical structure consisting of a formal language L, a set of axioms A, and a set of inference rules R that together define valid derivations. Denoted as FS = (L, A, R)",
      fields: {
        "components": `
             - Formal language (syntax)
             - Formation rules
             - Transformation rules
             - Axioms or axiom schemas
             - Inference rules`,
        "properties": `
             - Consistency: no contradictions derivable
             - Completeness: all truths derivable
             - Soundness: only valid conclusions derivable
             - Decidability: existence of decision procedure`,
        "examples": `
             Propositional Logic:
             - Language: P, Q, R, ∧, ∨, ¬, →, (, )
             - Axioms: P∨¬P, (P→Q)→((Q→R)→(P→R))
             - Rules: Modus Ponens
             
             Peano Arithmetic:
             - Language: 0, S, +, ×, =
             - Axioms: ∀x(S(x)≠0), ∀x∀y(S(x)=S(y)→x=y)
             - Rules: Mathematical induction`,
        "applications": `
             - Mathematical logic
             - Programming language semantics
             - Automated theorem proving
             - Type theory`
      },
      category: "Formal Logic"
     },
     {
      name: "Formal Language",
      formula: "A set of strings over an alphabet Σ, defined by precise formation rules. L ⊆ Σ*",
      fields: {
        "components": `
             - Alphabet (set of symbols)
             - Grammar rules
             - Well-formed formulas
             - Syntax rules
             - Semantics (interpretation)`,
        "hierarchy": `
             - Regular languages
             - Context-free languages
             - Context-sensitive languages
             - Recursively enumerable languages`,
        "examples": `
             Propositional Logic:
             Alphabet: {P, Q, R, ∧, ∨, ¬, →, (, )}
             WFF: P∧Q, (P→Q)∨R, ¬(P∧¬Q)
             
             First-Order Logic:
             Alphabet: {∀, ∃, P, f, x, y, =, ∧, ∨, ¬}
             WFF: ∀x∃yP(x,y), ∀x(P(x)→Q(x))`,
        "applications": `
             - Programming languages
             - Logic systems
             - Compiler design
             - Protocol specification`
      },
      category: "Formal Logic"
     },
     {
      name: "Natural Deduction",
      formula: "A proof system that models logical reasoning through introduction and elimination rules for logical connectives. Proofs are trees of judgments Γ ⊢ φ",
      fields: {
        "rules": `
             - Introduction rules (I-rules)
             - Elimination rules (E-rules)
             - Structural rules
             - Derived rules`,
        "inference_patterns": `
             - ∧-Introduction: P, Q ⊢ P∧Q
             - ∨-Elimination: P∨Q, [P⊢R], [Q⊢R] ⊢ R
             - →-Introduction: [P⊢Q] ⊢ P→Q
             - ∀-Introduction: [a]⊢P(a) ⊢ ∀xP(x)`,
        "examples": `
             Proof of P∧Q ⊢ Q∧P:
             1. P∧Q     (premise)
             2. P       (∧-elimination)
             3. Q       (∧-elimination)
             4. Q∧P     (∧-introduction)
             
             Proof of P, P→Q ⊢ Q:
             1. P       (premise)
             2. P→Q     (premise)
             3. Q       (→-elimination)`,
        "characteristics": `
             - Local rules
             - Assumption management
             - Normal forms
             - Cut elimination`
      },
      category: "Proof Methods"
     },
     {
      name: "Sequent Calculus",
      formula: "A formal proof system using sequents of the form Γ ⊢ Δ, where Γ and Δ are finite multisets of formulas. Read as 'Γ entails Δ'",
      fields: {
        "rules": `
             - Left rules (operating on Γ)
             - Right rules (operating on Δ)
             - Structural rules (weakening, contraction)
             - Cut rule (transitivity of entailment)`,
        "properties": `
             - Cut elimination theorem
             - Subformula property
             - Decidability for propositional logic
             - Conservative extension`,
        "examples": `
             Basic Rules:
             Axiom: A ⊢ A
             Cut: (Γ ⊢ Δ,A) and (A,Π ⊢ Λ) implies (Γ,Π ⊢ Δ,Λ)
             
             Sample Derivation:
             1. P ⊢ P                  (axiom)
             2. P,Q ⊢ P               (weakening)
             3. P,Q ⊢ P∨Q             (∨-right)`,
        "applications": `
             - Proof theory
             - Automated theorem proving
             - Type systems
             - Program verification`
      },
      category: "Proof Methods"
     },
     {
      name: "Truth Table",
      formula: "A systematic listing of all possible combinations of truth values for atomic propositions and the resulting truth values of compound expressions",
      fields: {
        "structure": `
             - Input columns (atomic propositions)
             - Intermediate columns (subexpressions)
             - Output column (final result)
             - 2ⁿ rows for n variables`,
        "applications": `
             - Validity checking
             - Satisfiability testing
             - Logical equivalence
             - Circuit design`,
        "examples": `
             Simple AND (P ∧ Q):
             P | Q | P ∧ Q
             T | T |   T
             T | F |   F
             F | T |   F
             F | F |   F
             
             Implication (P → Q):
             P | Q | P → Q
             T | T |   T
             T | F |   F
             F | T |   T
             F | F |   T`,
        "analysis_methods": `
             - Tautology detection
             - Contradiction detection
             - Equivalence checking
             - Minimal forms`
      },
      category: "Truth Values"
     },
     {
      name: "Symbolic Representation",
      formula: "A formal system of notation using well-defined symbols to express logical relationships and operations with precision and clarity",
      fields: {
        "basic_symbols": `
             - Propositional variables: P, Q, R
             - Logical connectives: ∧, ∨, ¬, →, ↔
             - Quantifiers: ∀, ∃
             - Grouping symbols: (, ), [, ]`,
        "notation_systems": `
             - Polish notation (prefix)
             - Reverse Polish notation (postfix)
             - Infix notation
             - Abstract syntax trees`,
        "examples": `
             Classical Expression:
             ((P → Q) ∧ P) → Q
             
             Polish Notation:
             →∧→PQP Q
             
             Abstract Syntax Tree:
             →
             ∧   Q
             →P  P`,
        "advantages": `
             - Unambiguous interpretation
             - Formal manipulation rules
             - Computer processability
             - Mathematical rigor`
      },
      category: "Formal Logic"
     },
     {
      name: "Non-contradiction",
      formula: "The logical principle that asserts ¬(P ∧ ¬P) is always true. No statement can be both true and false in the same sense at the same time",
      fields: {
        "properties": `
             - Foundational to classical logic
             - Related to consistency
             - Independent of excluded middle
             - Preserved under substitution`,
        "formal_expressions": `
             - Propositional: ¬(P ∧ ¬P)
             - Predicate: ¬∃x(P(x) ∧ ¬P(x))
             - Modal: □¬(P ∧ ¬P)
             - Semantic: not(P is true and P is false)`,
        "examples": `
             Classical:
             "A circle cannot be both round and not round"
             
             Mathematical:
             "A number cannot be both prime and composite"
             
             Logical:
             "A proposition cannot be both true and false"`,
        "philosophical_aspects": `
             - Aristotelian foundation
             - Intuitionistic acceptance
             - Dialectical challenges
             - Quantum interpretations`
      },
      category: "Logical Principles"
     },
     {
      name: "Law of Excluded Middle",
      formula: "The principle that every proposition P is either true or false, formally expressed as P ∨ ¬P",
      fields: {
        "properties": `
             - Tautology in classical logic
             - Not accepted in intuitionistic logic
             - Independent of non-contradiction
             - Basis for proof by contradiction`,
        "formal_expressions": `
             - Propositional: P ∨ ¬P
             - Predicate: ∀x(P(x) ∨ ¬P(x))
             - Modal: □(P ∨ ¬P)
             - Semantic: P is true or P is false`,
        "examples": `
             Classical:
             "Either it is raining or it is not raining"
             
             Mathematical:
             "A number is either prime or not prime"
             
             Set Theory:
             "An element is either in a set or not in a set"`,
        "applications": `
             - Proof by contradiction
             - Classical mathematics
             - Boolean algebra
             - Digital logic`
      },
      category: "Logical Principles"
     },
     {
      name: "Necessary and Sufficient Conditions",
      formula: "P is necessary for Q if Q → P, and P is sufficient for Q if P → Q. If both hold, then P ↔ Q",
      fields: {
        "definitions": `
             - Necessary: Q cannot be true without P being true
             - Sufficient: P being true guarantees Q is true
             - Necessary and Sufficient: P ↔ Q (biconditional)
             - Neither: P and Q are logically independent`,
        "logical_forms": `
             - Necessary: Q → P
             - Sufficient: P → Q
             - Both: P ↔ Q
             - Neither: No logical connection`,
        "examples": `
             Mathematical:
             Being a square is sufficient (but not necessary) for being a rectangle
             Having four equal sides is necessary (but not sufficient) for being a square
             Being divisible by both 2 and 3 is necessary and sufficient for being divisible by 6
             
             Real-world:
             Being 18 is necessary (but not sufficient) for voting
             Having a valid passport is sufficient (but not necessary) for ID
             Being a US citizen and 35+ years old is necessary and sufficient for presidential eligibility`,
        "applications": `
             - Mathematical proofs
             - Legal reasoning
             - Scientific explanation
             - Policy analysis`
      },
      category: "Logical Principles"
     },
     {
      name: "Propositional Calculus",
      formula: "A formal system dealing with propositions and logical connectives, where formulas are built from atomic propositions using logical operators",
      fields: {
        "components": `
             - Atomic propositions: P, Q, R...
             - Logical connectives: ∧, ∨, ¬, →, ↔
             - Well-formed formulas (WFF)
             - Inference rules
             - Axiom schemas`,
        "properties": `
             - Decidable
             - Sound and complete
             - Compact
             - Truth-functional`,
        "examples": `
             Basic WFFs:
             P ∧ Q
             ¬(P ∨ Q) → R
             (P → Q) ↔ (¬Q → ¬P)
             
             Natural Language:
             "If it rains (P) and it's cold (Q), then I'll stay home (R)"
             Formalized: (P ∧ Q) → R`,
        "applications": `
             - Digital circuit design
             - Boolean algebra
             - Program verification
             - Expert systems`
      },
      category: "Formal Logic"
     },
     {
      name: "First-order Logic",
      formula: "A formal system extending propositional logic with quantifiers (∀, ∃) and predicates, allowing expression of relationships and properties",
      fields: {
        "components": `
             - Variables: x, y, z...
             - Constants: a, b, c...
             - Predicates: P(x), Q(x,y)...
             - Functions: f(x), g(x,y)...
             - Quantifiers: ∀, ∃`,
        "expressions": `
             - Terms: variables, constants, functions
             - Atomic formulas: predicates applied to terms
             - Quantified formulas: ∀x P(x), ∃x P(x)
             - Complex formulas: combinations with connectives`,
        "examples": `
             Mathematical:
             "Every natural number has a successor"
             ∀x∃y(S(y,x))
             
             Real-world:
             "Some student knows all topics"
             ∃x(Student(x) ∧ ∀y(Topic(y) → Knows(x,y)))`,
        "limitations": `
             - Cannot quantify over predicates
             - Cannot express finite cardinality directly
             - Some mathematical concepts require schemas
             - Not categorical for infinite structures`
      },
      category: "Formal Logic"
     },
     {
      name: "Higher-order Logic",
      formula: "A logical system allowing quantification over predicates, functions, and other higher-order objects, extending first-order logic's expressiveness",
      fields: {
        "features": `
             - Predicate quantification
             - Function quantification
             - Type hierarchy
             - Lambda abstraction`,
        "types": `
             - Second-order: quantification over sets/predicates
             - Third-order: quantification over sets of sets
             - ω-order: arbitrary finite orders
             - Type theory connection`,
        "examples": `
             Second-order:
             "Every non-empty property has a minimal element"
             ∀P((∃xP(x)) → (∃y(P(y) ∧ ∀z(P(z) → y≤z))))
             
             Set theory:
             "Two sets are equal if they have the same elements"
             ∀X∀Y(∀z(z∈X ↔ z∈Y) → X=Y)`,
        "applications": `
             - Mathematical foundations
             - Type theory
             - Program verification
             - Category theory
             
             Limitations:
             - Incomplete semantics
             - Undecidable
             - Model-theoretic complexity`
      },
      category: "Formal Logic"
     },
     {
      name: "Interpretation",
      formula: "A mapping I from a formal language L to a domain D that assigns semantic meaning to the symbols and expressions of L. Written as I: L → D",
      fields: {
        "components": `
             - Domain (universe of discourse)
             - Function symbols interpretation
             - Predicate symbols interpretation
             - Constant symbols interpretation
             - Truth value assignment`,
        "properties": `
             - Homomorphic structure
             - Preserves logical operations
             - Unique evaluation of terms
             - Satisfaction relation (⊨)`,
        "examples": `
             Arithmetic Interpretation:
             Domain: Natural numbers
             0: zero element
             S: successor function
             +: addition function
             ×: multiplication function
             
             Set-theoretic Interpretation:
             Domain: Power set of natural numbers
             ∈: membership relation
             ∪: union operation
             ∩: intersection operation`,
        "applications": `
             - Model checking
             - Semantics definition
             - Consistency proofs
             - Theory comparison`
      },
      category: "Formal Logic"
     },
     {
      name: "Model Theory",
      formula: "Mathematical study of the relationship between formal theories T and their models M, where M ⊨ T denotes M is a model of T",
      fields: {
        "key_concepts": `
             - Satisfaction (⊨)
             - Elementary equivalence
             - Theory completeness
             - Model completeness`,
        "fundamental_theorems": `
             - Compactness Theorem
             - Löwenheim-Skolem Theorems
             - Completeness Theorem
             - Preservation Theorems`,
        "examples": `
             Field Theory:
             - Real numbers as model
             - Complex numbers as model
             - Finite fields as models
             
             Group Theory:
             - Symmetric groups
             - Cyclic groups
             - Matrix groups`,
        "applications": `
             - Mathematical logic
             - Universal algebra
             - Algebraic geometry
             - Computer science`,
        "methods": `
             - Elementary chains
             - Ultraproducts
             - Back-and-forth construction
             - Model companions`
      },
      category: "Formal Logic"
     },
     {
      name: "Proof Theory",
      formula: "Study of formal proofs as mathematical objects and the structural relationships between them",
      fields: {
        "fundamental_concepts": `
             - Formal proof systems
             - Proof normalization
             - Cut elimination
             - Proof search`,
        "proof_systems": `
             - Natural deduction
             - Sequent calculus
             - Hilbert systems
             - Resolution calculus`,
        "theoretical_results": `
             - Normalization theorem
             - Cut-elimination theorem
             - Herbrand's theorem
             - Consistency proofs`,
        "applications": `
             - Automated theorem proving
             - Program verification
             - Type theory
             - Constructive mathematics`,
        "methods": `
             - Structural induction
             - Proof transformation
             - Term rewriting
             - Proof mining`,
        "examples": `
             Natural Deduction:
             Proof of A∧B ⊢ B∧A
             1. A∧B          premise
             2. A            ∧-elimination
             3. B            ∧-elimination
             4. B∧A          ∧-introduction
             
             Sequent Calculus:
             Proof of ⊢ A→(B→(A∧B))
             1. A,B ⊢ A      axiom
             2. A,B ⊢ B      axiom
             3. A,B ⊢ A∧B    ∧-right
             4. A ⊢ B→(A∧B)  →-right
             5. ⊢ A→(B→(A∧B)) →-right`
      },
      category: "Proof Methods"
     },
     {
      name: "String",
      formula: "A finite sequence s = a₁a₂...aₙ where each aᵢ belongs to an alphabet Σ. Formally written as s ∈ Σ*",
      fields: {
        "properties": `
             - Has finite length |s|
             - Can be empty (ε)
             - Can be concatenated
             - Has substrings`,
        "operations": `
             - Concatenation (s₁·s₂)
             - Reversal (sᴿ)
             - Substring extraction
             - Length computation`,
        "examples": `
             Over alphabet Σ = {a,b}:
             Empty string: ε
             Simple strings: a, ab, baa
             Concatenation: ab·ba = abba
             
             In formal logic:
             Well-formed formula: (P∧Q)→R
             Not well-formed: )P∧(`,
        "applications": `
             - Formal languages
             - Pattern matching
             - Computability theory
             - Programming languages`
      },
      category: "Formal Language"
     },
     {
      name: "Expression",
      formula: "A syntactically valid combination of symbols according to formation rules of a formal system",
      fields: {
        "types": `
             - Atomic expressions
             - Compound expressions
             - Well-formed formulas
             - Terms and formulas`,
        "components": `
             - Constants
             - Variables
             - Operators
             - Delimiters
             - Functions`,
        "examples": `
             Logical Expressions:
             P ∧ (Q ∨ R)
             ∀x(P(x) → Q(x))
             
             Mathematical Expressions:
             2x + 3y = 5
             ∫₀¹ x² dx`,
        "formation_rules": `
             - Precedence rules
             - Scope rules
             - Type rules
             - Syntactic categories`,
        "properties": `
             - Well-formedness
             - Unambiguous parsing
             - Type correctness
             - Semantic meaning`
      },
      category: "Formal Language"
     },
     {
      name: "Elementary Proposition",
      formula: "An atomic statement P that has a truth value and cannot be decomposed into simpler logical statements",
      fields: {
        "characteristics": `
             - Atomic (indivisible)
             - Truth-valued
             - Independent
             - Basic building block`,
        "properties": `
             - Binary truth value
             - No internal logical structure
             - Can be negated
             - Combines with connectives`,
        "examples": `
             Basic Statements:
             "It is raining"
             "2 is prime"
             "The sky is blue"
             
             Counter-examples (not elementary):
             "It is raining and cold" (compound)
             "If x>0 then x²>0" (conditional)
             "All numbers are positive" (quantified)`,
        "usage": `
             - Foundation for complex logic
             - Truth table construction
             - Propositional calculus
             - Logical analysis`,
        "limitations": `
             - Cannot express quantification
             - No internal structure
             - No predicates
             - No variables`
      },
      category: "Logic Basics"
     },
     {
      name: "Syntax Tree",
      formula: "A hierarchical data structure T = (V,E,r) representing the grammatical structure of an expression, where V is the set of nodes, E the edges, and r the root",
      fields: {
        "properties": `
             - Hierarchical structure
             - Unique root node
             - Directed edges
             - Preserves operator precedence`,
        "types": `
             - Abstract syntax trees (AST)
             - Parse trees
             - Derivation trees
             - Expression trees`,
        // "examples": `
        //      Logical Expression:
        //      P ∧ (Q ∨ R)
        //      Tree Structure:
        //          ∧
        //         / \
        //        P   ∨
        //           / \
        //          Q   R
             
        //      Arithmetic Expression:
        //      (2 + 3) × 4
        //      Tree Structure:
        //          ×
        //         / \
        //        +   4
        //       / \
        //      2   3`,
        "applications": `
             - Compiler design
             - Expression evaluation
             - Language processing
             - Proof representation`
      },
      category: "Structures"
     },
     {
      name: "Node",
      formula: "A fundamental unit v ∈ V in a tree structure containing data and maintaining relationships with other nodes through edges E",
      fields: {
        "properties": `
             - Contains data/value
             - Has parent (except root)
             - May have children
             - Has depth/level`,
        "types": `
             - Root node
             - Internal nodes
             - Leaf nodes
             - Operator nodes`,
        "relationships": `
             - Parent-child
             - Siblings
             - Ancestors
             - Descendants`,
        "examples": `
             Logical Operators:
             Node(∧): connects conjuncts
             Node(∨): connects disjuncts
             Node(¬): unary negation
             
             Expression Trees:
             Node(+): addition operator
             Node(2): numeric literal
             Node(x): variable`,
        "operations": `
             - Node creation
             - Child addition/removal
             - Value modification
             - Tree traversal`
      },
      category: "Structures"
     },
     {
      name: "Leaf Node",
      formula: "A terminal node l ∈ V in a tree structure with no children, formally: l ∈ V such that ∄v ∈ V: (l,v) ∈ E",
      fields: {
        "properties": `
             - No children
             - Terminal element
             - Contains atomic data
             - Always has parent (except if root)`,
        "characteristics": `
             - Degree = 0
             - Terminal in traversal
             - Contains primitive values
             - Cannot be expanded`,
        "examples": `
             In Expression Trees:
             - Variables (x, y, z)
             - Constants (2, 3.14, true)
             - Atomic propositions (P, Q, R)
             
             In Parse Trees:
             - Tokens
             - Literals
             - Identifiers
             - Terminal symbols`,
        "usage": `
             - Expression evaluation
             - Tree traversal endpoints
             - Pattern matching
             - Value storage`
      },
      category: "Structures"
     },
     {
      name: "Root Node",
      formula: "The unique node r ∈ V in a tree structure with no parent, serving as the origin point. Formally: r ∈ V such that ∄v ∈ V: (v,r) ∈ E",
      fields: {
        "properties": `
             - No parent node
             - Unique in tree
             - Level/depth 0
             - Ancestor of all nodes`,
        "characteristics": `
             - Entry point for traversal
             - Contains main operator/function
             - Defines scope/context
             - Maximum in partial ordering`,
        "examples": `
             Expression Trees:
             P ∧ (Q ∨ R):
             Root = ∧ (main connective)
             
             Function Application:
             f(g(x)):
             Root = f (outermost function)
             
             Arithmetic:
             (2 + 3) × 4:
             Root = × (last operation)`,
        "operations": `
             - Tree initialization
             - Subtree access
             - Structure modification
             - Tree rebalancing`
      },
      category: "Structures"
     },
     {
      name: "Branch",
      formula: "A directed edge e = (u,v) ∈ E in a tree structure connecting a parent node u to a child node v",
      fields: {
        "properties": `
             - Directed relationship
             - Unique parent end
             - Weight/cost possible
             - Represents hierarchy`,
        "types": `
             - Left branch
             - Right branch
             - Ordered branches
             - Weighted branches`,
        "examples": `
             Binary Operations:
             ∧-branches: connect to both operands
             ¬-branch: connects to single operand
             
             Function Application:
             f(x,y): two branches to arguments
             
             Parse Trees:
             IF-THEN: branches to condition and body`,
        "operations": `
             - Branch creation
             - Branch deletion
             - Path traversal
             - Tree restructuring`
      },
      category: "Structures"
     },
     {
      name: "Partial Proposition",
      formula: "An incomplete logical statement φ(x₁,...,xₙ) containing free variables or undefined terms that requires additional context to determine truth value",
      fields: {
        "characteristics": `
             - Contains free variables
             - Truth value undefined
             - Context dependent
             - Requires completion`,
        "types": `
             - Open formulas
             - Templates
             - Schemata
             - Placeholders`,
        "examples": `
             Predicate Logic:
             P(x): "x is prime"
             Q(x,y): "x is greater than y"
             
             Templates:
             "If ___, then ___"
             "___ is a ___ of ___"`,
        "completion_methods": `
             - Variable binding
             - Substitution
             - Context provision
             - Quantification`
      },
      category: "Logic Basics"
     },
     {
      name: "Complete Proposition",
      formula: "A logical statement p that is fully specified and has a well-defined truth value under any given interpretation I",
      fields: {
        "properties": `
             - Has definite truth value
             - No free variables
             - Context independent
             - Well-formed formula`,
        "types": `
             - Ground formulas
             - Closed formulas
             - Sentences
             - Full assertions`,
        "examples": `
             Atomic Propositions:
             "2 is prime"
             "Today is Monday"
             "Water freezes at 0°C"
             
             Compound Propositions:
             "If it rains, then the ground is wet"
             "All natural numbers are either even or odd"
             "(2 + 2 = 4) ∧ (3 × 3 = 9)"`,
        "verification": `
             - Truth value determinable
             - Interpretation independent
             - Testable conditions
             - Logical evaluation`
      },
      category: "Logic Basics"
     },
     {
      name: "Degree of Syntax Tree",
      formula: "The maximum number d of child nodes for any node v in the tree T. Formally: d = max{|children(v)| : v ∈ V}",
      fields: {
        "properties": `
             - Fixed for specific types
             - Affects tree balance
             - Influences traversal
             - Impacts complexity`,
        "common_degrees": `
             - Binary trees (d=2)
             - Ternary trees (d=3)
             - N-ary trees
             - Variable degree trees`,
        "examples": `
             Logical Operators:
             ¬ (degree 1)
             ∧,∨,→,↔ (degree 2)
             IF-THEN-ELSE (degree 3)
             
             Function Application:
             f(x) (degree 1)
             g(x,y) (degree 2)
             h(x,y,z) (degree 3)`,
        "implications": `
             - Storage requirements
             - Processing efficiency
             - Tree balancing
             - Algorithm design`
      },
      category: "Structures"
     },
     {
      name: "Construction Sequence",
      formula: "An ordered sequence of steps S = (s₁, s₂, ..., sₙ) that, when executed in order, produces a valid logical structure or proof",
      fields: {
        "components": `
             - Initial state
             - Transformation rules
             - Intermediate states
             - Final state`,
        "properties": `
             - Well-defined steps
             - Preserves validity
             - Deterministic
             - Finite length`,
        "examples": `
             Formula Construction:
             1. Start with P
             2. Add conjunction: P ∧
             3. Add second operand: P ∧ Q
             4. Add parentheses: (P ∧ Q)
             
             Proof Construction:
             1. State premises
             2. Apply inference rule
             3. State intermediate conclusion
             4. Repeat until goal reached`,
        "applications": `
             - Proof building
             - Expression parsing
             - Tree construction
             - Formula generation`
      },
      category: "Proof Methods"
     },
     {
      name: "Compound Proposition",
      formula: "A proposition p constructed by combining simpler propositions using logical connectives. Formally: p := q ∘ r where ∘ ∈ {∧, ∨, →, ↔}",
      fields: {
        "components": `
             - Simple propositions
             - Logical connectives
             - Grouping symbols
             - Precedence rules`,
        "construction_rules": `
             - Binary connective usage
             - Unary negation
             - Proper parenthesization
             - Well-formed combinations`,
        "examples": `
             Basic Forms:
             P ∧ Q (conjunction)
             P ∨ Q (disjunction)
             P → Q (implication)
             
             Complex Forms:
             (P ∧ Q) → R
             ¬(P ∨ Q) ∧ (R → S)
             (P → Q) ↔ (¬Q → ¬P)`,
        "evaluation": `
             - Truth-functional
             - Component-based
             - Precedence-respecting
             - Context-independent`
      },
      category: "Logical Connectives"
     },
     {
      name: "Substitution",
      formula: "An operation σ that replaces variables or subexpressions with other expressions. Formally: σ: V → Terms where V is the set of variables",
      fields: {
        "properties": `
             - Preserves well-formedness
             - Compositional
             - Type-preserving
             - Capture-avoiding`,
        "types": `
             - Variable substitution
             - Term substitution
             - Expression substitution
             - Pattern substitution`,
        "examples": `
             Variable Substitution:
             P(x) [x/a] = P(a)
             
             Term Substitution:
             (x + y)[x/(a+b)] = (a+b) + y
             
             Formula Substitution:
             (P → Q)[P/R∧S] = ((R∧S) → Q)`,
        "applications": `
             - Proof steps
             - Equation solving
             - Unification
             - Pattern matching`
      },
      category: "Reasoning"
     },
     {
      name: "Structural Induction",
      formula: "A proof technique establishing that a property P holds for all instances of a recursively defined structure S by showing it holds for base cases and is preserved by construction steps",
      fields: {
        "components": `
             - Base case(s)
             - Inductive hypothesis
             - Construction rules
             - Inductive step`,
        "proof_structure": `
             - Prove for atomic elements
             - Assume for substructures
             - Prove for composite
             - Consider all constructions`,
        "examples": `
             List Induction:
             Base: P(empty list)
             Step: P(list) → P(cons(x,list))
             
             Tree Induction:
             Base: P(leaf)
             Step: P(left) ∧ P(right) → P(node(left,right))
             
             Formula Induction:
             Base: P(atomic formulas)
             Step: P(φ) ∧ P(ψ) → P(φ∘ψ)`,
        "applications": `
             - Data structure properties
             - Program correctness
             - Grammar validation
             - Type systems`
      },
      category: "Proof Methods"
     }
    
  ];
  
  export default logicTermsList;
  