const logicFormulasList = [
    {
      name: "Double Negation Law",
      formula: "$\\neg(\\neg P) = P$",
      fields: {
        "Explanation": "Negating something twice brings you back to where you started. Saying 'not not P' is just another way of saying 'P'. It's like undoing a negative to get back to the original statement.",
        "$P$": "Any statement or proposition",
        "$\\neg$": "Negation operator, meaning 'not'",
        "$\\neg(\\neg P)$": "The negation of the negation of P",
        "Example": "If it's not not raining, then it is raining.",
        "Use Cases": "Simplifying logical expressions, making proofs clearer"
      },
      category: "Logical Equivalences"
    },
    {
      name: "De Morgan's Law (Conjunction)",
      formula: "$\\neg(P \\land Q) = \\neg P \\lor \\neg Q$",
      fields: {
        "Explanation": "The negation of 'P and Q' is the same as 'not P or not Q'. Denying an 'and' statement turns it into an 'or' statement with both parts negated.",
        "$P, Q$": "Statements or propositions",
        "$\\land$": "Logical 'and' operator",
        "$\\lor$": "Logical 'or' operator",
        "$\\neg$": "Negation operator, meaning 'not'",
        "Example": "Not (I'm awake and it's sunny) equals (I'm not awake or it's not sunny).",
        "Use Cases": "Transforming logical statements, simplifying conditions in programming"
      },
      category: "De Morgan's Laws"
    },
    {
      name: "De Morgan's Law (Disjunction)",
      formula: "$\\neg(P \\lor Q) = \\neg P \\land \\neg Q$",
      fields: {
        "Explanation": "Negating 'P or Q' turns it into 'not P and not Q'. So, denying an 'or' statement gives you an 'and' statement where both parts are negated.",
        "$P, Q$": "Statements or propositions",
        "$\\lor$": "Logical 'or' operator",
        "$\\land$": "Logical 'and' operator",
        "$\\neg$": "Negation operator, meaning 'not'",
        "Example": "Not (I'll go or you'll stay) equals (I won't go and you won't stay).",
        "Use Cases": "Simplifying logic in proofs, refining search queries"
      },
      category: "De Morgan's Laws"
    },
    {
      name: "Implication as Disjunction",
      formula: "$P \\rightarrow Q = \\neg P \\lor Q$",
      fields: {
        "Explanation": "Saying 'if P then Q' is the same as saying 'either not P or Q'. It's a way to express implications using 'or'.",
        "$P, Q$": "Statements or propositions",
        "$\\rightarrow$": "Logical 'implies' operator",
        "$\\neg$": "Negation operator",
        "$\\lor$": "Logical 'or' operator",
        "Example": "If it's raining, then the ground is wet equals either it's not raining or the ground is wet.",
        "Use Cases": "Rewriting logical implications, simplifying expressions in logic circuits"
      },
      category: "Logical Equivalences"
    },
    {
      name: "Contrapositive",
      formula: "$P \\rightarrow Q = \\neg Q \\rightarrow \\neg P$",
      fields: {
        "Explanation": "An implication is equivalent to its contrapositive. So 'if P then Q' means the same as 'if not Q then not P'.",
        "$P, Q$": "Statements or propositions",
        "$\\rightarrow$": "Logical 'implies' operator",
        "$\\neg$": "Negation operator",
        "Example": "If the alarm rings, then I wake up equals if I don't wake up, then the alarm didn't ring.",
        "Use Cases": "Proof techniques, logical reasoning in arguments"
      },
      category: "Logical Equivalences"
    },
    {
      name: "Biconditional Definition",
      formula: "$P \\leftrightarrow Q = (P \\rightarrow Q) \\land (Q \\rightarrow P)$",
      fields: {
        "Explanation": "Saying 'P if and only if Q' means both 'if P then Q' and 'if Q then P' happen together.",
        "$P, Q$": "Statements or propositions",
        "$\\leftrightarrow$": "Logical 'if and only if' operator",
        "$\\rightarrow$": "Logical 'implies' operator",
        "$\\land$": "Logical 'and' operator",
        "Example": "I will go if and only if you go equals if I go then you go, and if you go then I go.",
        "Use Cases": "Defining equivalence, constructing precise statements"
      },
      category: "Logical Equivalences"
    },
    {
      name: "Distributive Law (Conjunction over Disjunction)",
      formula: "$P \\land (Q \\lor R) = (P \\land Q) \\lor (P \\land R)$",
      fields: {
        "Explanation": "You can distribute 'and' over 'or' just like multiplication over addition in arithmetic.",
        "$P, Q, R$": "Statements or propositions",
        "$\\land$": "Logical 'and' operator",
        "$\\lor$": "Logical 'or' operator",
        "Example": "It's hot and (sunny or humid) equals (hot and sunny) or (hot and humid).",
        "Use Cases": "Simplifying logical expressions, designing logical circuits"
      },
      category: "Logical Laws"
    },
    {
      name: "Distributive Law (Disjunction over Conjunction)",
      formula: "$P \\lor (Q \\land R) = (P \\lor Q) \\land (P \\lor R)$",
      fields: {
        "Explanation": "Similarly, 'or' can distribute over 'and', like addition over multiplication in arithmetic.",
        "$P, Q, R$": "Statements or propositions",
        "$\\lor$": "Logical 'or' operator",
        "$\\land$": "Logical 'and' operator",
        "Example": "I will eat or (you cook and we have ingredients) equals (I will eat or you cook) and (I will eat or we have ingredients).",
        "Use Cases": "Breaking down complex conditions, optimizing logical formulas"
      },
      category: "Logical Laws"
    },
    {
      name: "Identity Law (Conjunction)",
      formula: "$P \\land \\text{True} = P$",
      fields: {
        "Explanation": "Anything 'and' true is just that thing. True doesn't change the outcome when using 'and'.",
        "$P$": "Any statement or proposition",
        "$\\land$": "Logical 'and' operator",
        "$\\text{True}$": "Logical constant representing truth",
        "Example": "It's raining and true equals it's raining.",
        "Use Cases": "Simplifying expressions, removing redundant conditions"
      },
      category: "Logical Laws"
    },
    {
      name: "Identity Law (Disjunction)",
      formula: "$P \\lor \\text{False} = P$",
      fields: {
        "Explanation": "Anything 'or' false is just that thing. False doesn't affect the outcome when using 'or'.",
        "$P$": "Any statement or proposition",
        "$\\lor$": "Logical 'or' operator",
        "$\\text{False}$": "Logical constant representing falsehood",
        "Example": "It's raining or false equals it's raining.",
        "Use Cases": "Simplifying logical statements, cleaning up expressions"
      },
      category: "Logical Laws"
    },
    {
      name: "Domination Law (Conjunction)",
      formula: "$P \\land \\text{False} = \\text{False}$",
      fields: {
        "Explanation": "Anything 'and' false is always false. Since one part is false, the whole expression is false.",
        "$P$": "Any statement or proposition",
        "$\\land$": "Logical 'and' operator",
        "$\\text{False}$": "Logical constant representing falsehood",
        "Example": "It's raining and false equals false.",
        "Use Cases": "Simplifying expressions, understanding contradictions"
      },
      category: "Logical Laws"
    },
    {
      name: "Domination Law (Disjunction)",
      formula: "$P \\lor \\text{True} = \\text{True}$",
      fields: {
        "Explanation": "Anything 'or' true is always true. Since one part is true, the whole expression is true.",
        "$P$": "Any statement or proposition",
        "$\\lor$": "Logical 'or' operator",
        "$\\text{True}$": "Logical constant representing truth",
        "Example": "It's raining or true equals true.",
        "Use Cases": "Simplifying logical statements, understanding tautologies"
      },
      category: "Logical Laws"
    },
    {
      name: "Idempotent Law (Conjunction)",
      formula: "$P \\land P = P$",
      fields: {
        "Explanation": "Doing 'and' with the same thing doesn't change anything. It's like repeating yourself.",
        "$P$": "Any statement or proposition",
        "$\\land$": "Logical 'and' operator",
        "Example": "I'm hungry and I'm hungry equals I'm hungry.",
        "Use Cases": "Simplifying redundant expressions, optimizing logic circuits"
      },
      category: "Logical Laws"
    },
    {
      name: "Idempotent Law (Disjunction)",
      formula: "$P \\lor P = P$",
      fields: {
        "Explanation": "Doing 'or' with the same thing doesn't change anything. It's like offering the same choice twice.",
        "$P$": "Any statement or proposition",
        "$\\lor$": "Logical 'or' operator",
        "Example": "I'll study or I'll study equals I'll study.",
        "Use Cases": "Removing redundancies, simplifying choices"
      },
      category: "Logical Laws"
    },
    {
      name: "Negation of Quantifiers (Universal)",
      formula: "$\\neg (\\forall x\\, P(x)) = \\exists x\\, \\neg P(x)$",
      fields: {
        "Explanation": "Saying 'not all x are P' means 'there exists at least one x that's not P'.",
        "$\\forall$": "Universal quantifier meaning 'for all'",
        "$\\exists$": "Existential quantifier meaning 'there exists'",
        "$x$": "Elements in a domain",
        "$P(x)$": "A property or condition involving x",
        "$\\neg$": "Negation operator",
        "Example": "Not everyone is tall means there is someone who is not tall.",
        "Use Cases": "Transforming statements in proofs, logic in mathematical arguments"
      },
      category: "Quantifier Rules"
    },
    {
      name: "Negation of Quantifiers (Existential)",
      formula: "$\\neg (\\exists x\\, P(x)) = \\forall x\\, \\neg P(x)$",
      fields: {
        "Explanation": "Saying 'there is no x such that P(x)' means 'for all x, not P(x)'.",
        "$\\exists$": "Existential quantifier meaning 'there exists'",
        "$\\forall$": "Universal quantifier meaning 'for all'",
        "$x$": "Elements in a domain",
        "$P(x)$": "A property or condition involving x",
        "$\\neg$": "Negation operator",
        "Example": "There is no solution means all options fail.",
        "Use Cases": "Negating statements in proofs, logical reasoning"
      },
      category: "Quantifier Rules"
    },
    {
      name: "Universal Instantiation",
      formula: "$\\forall x\\, P(x) \\rightarrow P(c)$",
      fields: {
        "Explanation": "If something is true for everything, it's true for any specific thing.",
        "$\\forall$": "Universal quantifier meaning 'for all'",
        "$x$": "Elements in a domain",
        "$P(x)$": "A property or condition involving x",
        "$P(c)$": "The property applied to a specific element c",
        "$c$": "A specific element in the domain",
        "$\\rightarrow$": "Logical 'implies' operator",
        "Example": "All birds can fly implies that this specific bird can fly.",
        "Use Cases": "Applying general truths to specific cases"
      },
      category: "Inference Rules"
    },
    {
      name: "Existential Generalization",
      formula: "$P(c) \\rightarrow \\exists x\\, P(x)$",
      fields: {
        "Explanation": "If something is true for a specific case, then there exists at least one case where it's true.",
        "$\\exists$": "Existential quantifier meaning 'there exists'",
        "$x$": "Elements in a domain",
        "$P(x)$": "A property or condition involving x",
        "$P(c)$": "The property applied to a specific element c",
        "$c$": "A specific element in the domain",
        "$\\rightarrow$": "Logical 'implies' operator",
        "Example": "This apple is red implies there exists a red apple.",
        "Use Cases": "Building general statements from specific examples"
      },
      category: "Inference Rules"
    },
    {
      name: "Modus Ponens",
      formula: "From $(P \\rightarrow Q)$ and $P$, infer $Q$",
      fields: {
        "Explanation": "If 'P implies Q' and 'P is true', then 'Q must be true'. It's a basic rule of logical deduction.",
        "$P, Q$": "Statements or propositions",
        "$\\rightarrow$": "Logical 'implies' operator",
        "Example": "If it's raining, then the ground is wet. It's raining, so the ground is wet.",
        "Use Cases": "Basic logical deduction, reasoning in proofs"
      },
      category: "Inference Rules"
    },
    {
      name: "Modus Tollens",
      formula: "From $(P \\rightarrow Q)$ and $\\neg Q$, infer $\\neg P$",
      fields: {
        "Explanation": "If 'P implies Q' and 'Q is false', then 'P must be false' too.",
        "$P, Q$": "Statements or propositions",
        "$\\rightarrow$": "Logical 'implies' operator",
        "$\\neg$": "Negation operator",
        "Example": "If I study, I'll pass the test. I didn't pass, so I didn't study.",
        "Use Cases": "Deductive reasoning, problem-solving in logic"
      },
      category: "Inference Rules"
    },
    {
      name: "Hypothetical Syllogism",
      formula: "From $(P \\rightarrow Q)$ and $(Q \\rightarrow R)$, infer $(P \\rightarrow R)$",
      fields: {
        "Explanation": "If 'P leads to Q' and 'Q leads to R', then 'P leads to R'. It's a chain of logical implications.",
        "$P, Q, R$": "Statements or propositions",
        "$\\rightarrow$": "Logical 'implies' operator",
        "Example": "If I wake up early, I'll go jogging. If I go jogging, I'll feel good. So, if I wake up early, I'll feel good.",
        "Use Cases": "Building logical arguments, planning sequences of events"
      },
      category: "Inference Rules"
    },
    {
      name: "Disjunctive Syllogism",
      formula: "From $(P \\lor Q)$ and $\\neg P$, infer $Q$",
      fields: {
        "Explanation": "If 'P or Q' is true and 'P is false', then 'Q must be true'.",
        "$P, Q$": "Statements or propositions",
        "$\\lor$": "Logical 'or' operator",
        "$\\neg$": "Negation operator",
        "Example": "Either I will have tea or coffee. I won't have tea, so I'll have coffee.",
        "Use Cases": "Making decisions, eliminating possibilities"
      },
      category: "Inference Rules"
    },
    {
      name: "Law of Excluded Middle",
      formula: "$P \\lor \\neg P = \\text{True}$",
      fields: {
        "Explanation": "A statement is either true or not true. There's no middle ground.",
        "$P$": "Any statement or proposition",
        "$\\lor$": "Logical 'or' operator",
        "$\\neg$": "Negation operator",
        "$\\text{True}$": "Logical constant representing truth",
        "Example": "It is either raining or not raining.",
        "Use Cases": "Fundamental principle in classical logic, binary reasoning"
      },
      category: "Logical Laws"
    },
    {
      name: "Law of Non-Contradiction",
      formula: "$P \\land \\neg P = \\text{False}$",
      fields: {
        "Explanation": "A statement can't be both true and not true at the same time.",
        "$P$": "Any statement or proposition",
        "$\\land$": "Logical 'and' operator",
        "$\\neg$": "Negation operator",
        "$\\text{False}$": "Logical constant representing falsehood",
        "Example": "I can't be both asleep and not asleep simultaneously.",
        "Use Cases": "Ensuring consistency in arguments, detecting contradictions"
      },
      category: "Logical Laws"
    }
  ];
  
  export default logicFormulasList;
  