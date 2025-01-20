const logicTermsList = [
  {
    name: "Bound Variable",
    formula: "A variable that is tied to a quantifier or binding operator and has a defined scope.",
    fields: [],
    category: "Logic Basics"
  },
  {
    name: "Unbound Variable",
    formula: "A variable that is not tied to any quantifier or binding operator, remaining free or undefined in its context.",
    fields: [],
    category: "Logic Basics"
  },
    {
      name: "Proposition",
      formula: "A declarative statement that is either true or false.",
      fields: [],
      category: "Logic Basics"
    },
    {
      name: "Predicate",
      formula: "A function or relation that returns a truth value.",
      fields: [],
      category: "Logic Basics"
    },
    {
      name: "Quantifier",
      formula: "A logical operator that specifies the quantity of specimens in a domain for which a predicate holds.",
      fields: [],
      category: "Logic Basics"
    },
    {
      name: "Inference",
      formula: "A logical process of deriving a conclusion from premises.",
      fields: [],
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
      formula: "A sequence of logical steps demonstrating the truth of a statement.",
      fields: [],
      category: "Reasoning"
    },
    {
      name: "Premise",
      formula: "A statement assumed to be true for the purpose of an argument or proof.",
      fields: [],
      category: "Reasoning"
    },
    {
      name: "Conclusion",
      formula: "The statement derived as a result of a logical argument.",
      fields: [],
      category: "Reasoning"
    },
    {
      name: "Validity",
      formula: "The property of an argument where the conclusion logically follows from the premises.",
      fields: [],
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
      formula: "A set of premises and a conclusion forming a logical structure.",
      fields: [],
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
      formula: "A statement that is always true regardless of the truth values of its components.",
      fields: [],
      category: "Truth Values"
    },
    {
      name: "Modus Ponens",
      formula: "A rule of inference stating that if P → Q and P are true, then Q is true.",
      fields: [],
      category: "Inference Rules"
    },
    {
      name: "Modus Tollens",
      formula: "A rule of inference stating that if P → Q and ¬Q are true, then ¬P is true.",
      fields: [],
      category: "Inference Rules"
    },
    {
      name: "Disjunctive Syllogism",
      formula: "A rule of inference stating that if P ∨ Q and ¬P are true, then Q is true.",
      fields: [],
      category: "Inference Rules"
    },
    {
      name: "Conjunction",
      formula: "A compound statement formed by combining two statements with 'and'.",
      fields: [],
      category: "Logical Connectives"
    },
    {
      name: "Disjunction",
      formula: "A compound statement formed by combining two statements with 'or'.",
      fields: [],
      category: "Logical Connectives"
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
      formula: "A logical relationship where two statements have the same truth value.",
      fields: [],
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
  