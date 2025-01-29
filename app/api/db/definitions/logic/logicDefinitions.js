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
        "properties": `- Every formula can be converted to DNF
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
        "properties": `- Every formula can be converted to CNF
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
      formula: "A statement of the form P → Q, indicating that P implies Q.",
      fields: [],
      category: "Logical Connectives"
    },
    {
      name: "Biconditional",
      formula: "A statement of the form P ↔ Q, indicating that P and Q are logically equivalent.",
      fields: [],
      category: "Logical Connectives"
    },
    {
      name: "Deduction",
      formula: "A process of reasoning from general principles to specific cases.",
      fields: [],
      category: "Reasoning"
    },
    {
      name: "Induction",
      formula: "A process of reasoning from specific cases to general principles.",
      fields: [],
      category: "Reasoning"
    },
    {
      name: "Universal Quantifier",
      formula: "A quantifier that asserts a predicate holds for all elements in a domain.",
      fields: [],
      category: "Quantifiers"
    },
    {
      name: "Existential Quantifier",
      formula: "A quantifier that asserts a predicate holds for at least one element in a domain.",
      fields: [],
      category: "Quantifiers"
    },
    {
      name: "Logical Connective",
      formula: "A symbol or word used to combine propositions into more complex statements.",
      fields: [],
      category: "Logical Connectives"
    },
    {
      name: "Implication",
      formula: "A logical relationship where one statement guarantees the truth of another.",
      fields: [],
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
      formula: "A logical operation that inverts the truth value of a statement.",
      fields: [],
      category: "Logical Connectives"
    },
    {
      name: "Satisfiability",
      formula: "The property of a logical formula being true under at least one interpretation.",
      fields: [],
      category: "Formal Logic"
    },
    {
      name: "Logical Form",
      formula: "The abstract structure of a statement in terms of its logical components.",
      fields: [],
      category: "Formal Logic"
    },
    {
      name: "Logical Consistency",
      formula: "The property of a set of statements being able to coexist without contradiction.",
      fields: [],
      category: "Formal Logic"
    },
    {
      name: "Rule of Inference",
      formula: "A logical rule that specifies valid steps for deriving conclusions from premises.",
      fields: [],
      category: "Inference Rules"
    },
    {
      name: "Logical Consequence",
      formula: "A statement that must be true if the premises are true.",
      fields: [],
      category: "Reasoning"
    },

    {
        name: "Formal System",
        formula: "A set of rules and symbols for creating and manipulating logical expressions.",
        fields: [],
        category: "Formal Logic"
      },
      {
        name: "Formal Language",
        formula: "A structured set of symbols and rules for constructing valid expressions.",
        fields: [],
        category: "Formal Logic"
      },
      {
        name: "Natural Deduction",
        formula: "A proof method based on applying inference rules directly to derive conclusions.",
        fields: [],
        category: "Proof Methods"
      },
      {
        name: "Sequent Calculus",
        formula: "A formal system for proving logical statements using sequences.",
        fields: [],
        category: "Proof Methods"
      },
      {
        name: "Truth Table",
        formula: "A table showing all possible truth values of a logical expression.",
        fields: [],
        category: "Truth Values"
      },
      {
        name: "Symbolic Representation",
        formula: "A formal notation using symbols to represent logical expressions.",
        fields: [],
        category: "Formal Logic"
      },
      {
        name: "Non-contradiction",
        formula: "A principle stating that a statement cannot be both true and false.",
        fields: [],
        category: "Logical Principles"
      },
      {
        name: "Law of Excluded Middle",
        formula: "A principle stating that a statement is either true or false, with no middle ground.",
        fields: [],
        category: "Logical Principles"
      },
      {
        name: "Necessary and Sufficient Conditions",
        formula: "Conditions describing when one statement guarantees or is guaranteed by another.",
        fields: [],
        category: "Logical Principles"
      },
      {
        name: "Propositional Calculus",
        formula: "A formal system for reasoning about propositions and their logical relationships.",
        fields: [],
        category: "Formal Logic"
      },
      {
        name: "First-order Logic",
        formula: "A logical system that includes quantifiers and predicates.",
        fields: [],
        category: "Formal Logic"
      },
      {
        name: "Higher-order Logic",
        formula: "A logical system that extends first-order logic by allowing quantification over predicates.",
        fields: [],
        category: "Formal Logic"
      },
      {
        name: "Interpretation",
        formula: "An assignment of meanings to symbols in a logical system.",
        fields: [],
        category: "Formal Logic"
      },
      {
        name: "Model Theory",
        formula: "The study of the relationships between formal languages and their interpretations.",
        fields: [],
        category: "Formal Logic"
      },
      {
        name: "Proof Theory",
        formula: "The study of the structure and properties of formal proofs.",
        fields: [],
        category: "Proof Methods"
      },
      {
        name: "String",
        formula: "A finite sequence of symbols from a given alphabet.",
        fields: [],
        category: "Formal Language"
      },
      {
        name: "Expression",
        formula: "A combination of symbols representing a value or logical formula.",
        fields: [],
        category: "Formal Language"
      },
      {
        name: "Elementary Proposition",
        formula: "A proposition that cannot be broken into simpler components.",
        fields: [],
        category: "Logic Basics"
      },
      {
        name: "Syntax Tree",
        formula: "A tree representation of the syntactic structure of a logical or formal expression.",
        fields: [],
        category: "Structures"
      },
      {
        name: "Node",
        formula: "A point in a tree structure representing a component of the syntax.",
        fields: [],
        category: "Structures"
      },
      {
        name: "Leaf Node",
        formula: "A node in a tree structure that has no children.",
        fields: [],
        category: "Structures"
      },
      {
        name: "Root Node",
        formula: "The topmost node in a tree structure.",
        fields: [],
        category: "Structures"
      },
      {
        name: "Branch",
        formula: "A connection between nodes in a tree structure.",
        fields: [],
        category: "Structures"
      },
      {
        name: "Partial Proposition",
        formula: "A statement that is incomplete or lacks sufficient information to have a truth value.",
        fields: [],
        category: "Logic Basics"
      },
      {
        name: "Complete Proposition",
        formula: "A fully specified statement with a definite truth value.",
        fields: [],
        category: "Logic Basics"
      },
      {
        name: "Degree of Syntax Tree",
        formula: "The maximum number of children a node in the tree can have.",
        fields: [],
        category: "Structures"
      },
      {
        name: "Construction Sequence",
        formula: "A step-by-step process for building a structure or expression.",
        fields: [],
        category: "Proof Methods"
      },
      {
        name: "Compound Proposition",
        formula: "A proposition formed by combining two or more propositions with logical connectives.",
        fields: [],
        category: "Logical Connectives"
      },
      {
        name: "Substitution",
        formula: "The replacement of a variable or symbol with another value or expression.",
        fields: [],
        category: "Reasoning"
      },
      {
        name: "Structural Induction",
        formula: "A proof technique for recursively defined structures.",
        fields: [],
        category: "Proof Methods"
      }
    
  ];
  
  export default logicTermsList;
  