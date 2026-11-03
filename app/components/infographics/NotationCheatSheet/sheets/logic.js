// Notation cheat sheet for the logic section (the propositional-logic pages).
// Rows are short forms of the notation cards on its pages; each group links to its card.
const sheet = {
  id: 'logic-notation-cheat-sheet',
  source: '/logic/propositional-logic',
  eyebrow: 'Notation · Cheat sheet',
  title: 'Propositional Logic Notation at a Glance',
  lead: 'The marks from the notation cards across the propositional-logic pages: how each is read and what it means. Every group links to the full card on its page.',
  groups: [
    {
      page: 'Syntax', href: '/logic/propositional-logic/syntax#notation',
      rows: [
        { tex: '$P, Q, R$ · $P_1, P_2$', read: 'proposition letters', means: 'Capital letters name atomic propositions; subscripts extend the supply.' },
        { tex: '$\\neg \\; \\wedge \\; \\vee \\; \\to \\; \\leftrightarrow$', read: 'not; and; or; implies; if and only if', means: 'The five connectives: negation, conjunction, disjunction, implication, biconditional.' },
        { tex: '$\\varphi, \\psi$', read: 'phi and psi', means: 'Placeholders for whole formulas in the formation rules.' },
        { tex: '$(\\varphi \\wedge \\psi)$', read: 'parenthesised conjunction', means: 'Every binary connective brings its own parentheses; no precedence at this level.' },
      ],
    },
    {
      page: 'Implication', href: '/logic/propositional-logic/semantics/implication#notation',
      rows: [
        { tex: '$p \\to q$', read: 'if p then q; p implies q', means: 'The conditional connective: antecedent $p$, consequent $q$.' },
        { tex: '$p \\Rightarrow q$', read: 'p implies q, in the meta sense', means: 'The double shaft claims the implication holds in every case; older texts write $p \\supset q$.' },
        { tex: '$p \\to q$ in words', read: 'the English phrasings of one arrow', means: '"if $p$, then $q$"; "$p$ is sufficient for $q$"; "$q$ is necessary for $p$"; "$p$ only if $q$".' },
      ],
    },
    {
      page: 'Equivalences', href: '/logic/propositional-logic/semantics/equivalences#notation',
      rows: [
        { tex: '$P \\equiv Q$', read: 'P is logically equivalent to Q', means: 'A claim about formulas: $P$ and $Q$ agree in every case.' },
        { tex: '$P \\Leftrightarrow Q$', read: 'P if and only if Q, in the meta sense', means: 'The double-shafted spelling of the same claim.' },
        { tex: '$P = Q$', read: 'P equals Q', means: 'Boolean algebra’s spelling, where formulas denote values in $\\{0, 1\\}$.' },
      ],
    },
    {
      page: 'Tautology', href: '/logic/propositional-logic/semantics/tautology#notation',
      rows: [
        { tex: '$\\top$', read: 'top; verum; the true constant', means: 'Truth itself: a formula true under every assignment.' },
        { tex: '$\\vdash P$', read: 'turnstile P; P is provable', means: 'The single turnstile: a derivation of $P$ exists in the proof system.' },
        { tex: '$\\vDash P$', read: 'double turnstile P; P is valid', means: 'The double turnstile: $P$ is true under every assignment.' },
        { tex: '$P \\equiv \\top$', read: 'P is equivalent to the true constant', means: 'The third way to say that $P$ is a tautology.' },
      ],
    },
    {
      page: 'Contradiction', href: '/logic/propositional-logic/semantics/contradiction#notation',
      rows: [
        { tex: '$\\bot$', read: 'bottom; falsum; the false constant', means: 'Falsehood itself: a formula false under every assignment.' },
        { tex: '$\\vdash \\neg P$', read: 'the negation of P is provable', means: 'The proof-side way to declare $P$ a contradiction.' },
        { tex: '$P \\equiv \\bot$', read: 'P is equivalent to the false constant', means: 'The equivalence spelling of "contradiction".' },
      ],
    },
  ],
  clashes: {
    label: 'Same marks, different job',
    rows: [
      { tex: '$\\to$ vs $\\Rightarrow$', text: 'A connective inside a formula; a claim about formulas.' },
      { tex: '$\\leftrightarrow$ vs $\\equiv$', text: 'The biconditional connective; logical equivalence in the metalanguage.' },
      { tex: '$\\vdash$ vs $\\vDash$', text: 'Provable by the rules; true in every case.' },
      { tex: '$\\supset$', text: 'Implication in older logic texts; superset in set theory.' },
      { tex: '$\\bot$', text: 'The false constant here; perpendicular in geometry.' },
    ],
  },
  symbolsHref: '/math-symbols/math-logic#logical_operations',
  symbolsLabel: 'Logic symbols table',
  parentHref: '/logic/propositional-logic',
  parentLabel: 'Propositional logic',
};

export default sheet;
