// logic.methods.js (logic)
// Single data source for /logic/methods (hub) and
// /logic/methods/[view] (leaf pages).
//
// Item states are derived (see app/components/methods/resolveMethodRefs.js):
//   no slug            → atomic card on the hub, anchor '#<id>'
//   slug + page        → live leaf page '/logic/methods/<slug>'
//   slug, no page      → planned card on the hub (dimmed, no link)
// `indexed: false` keeps a leaf noindex until it meets the release criteria.

import { ruleUrl } from '../../../methods/ruleAnchors';

// Inline link to a rule / lesson through the anchor map (same tab).
const link = (id, text) => `[${text}](!${ruleUrl(id)})`;

const HUB = '/logic/methods';

const logicMethods = {
  hubPath: HUB,
  hubLabel: 'logic methods',
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    // ═══ I. Atomic ═════════════════════════════════════════════════════
    {
      id: 'de-morgan',
      name: 'How to push a negation into a bracket',
      subtitle: "De Morgan's laws",
      glyph: '¬(∧)',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'A negation stands in front of a bracket joined by $\\land$ or $\\lor$: $\\neg(P \\land Q)$, $\\neg(P \\lor \\neg Q)$, $\\neg(\\neg P \\lor Q)$.',
      formula: '\\neg(P \\land Q) \\equiv \\neg P \\lor \\neg Q, \\qquad \\neg(P \\lor Q) \\equiv \\neg P \\land \\neg Q',
      fields: {
        steps: [
          '1. Put a $\\neg$ on each part inside the bracket.',
          '2. Flip the connective: $\\land$ becomes $\\lor$, and $\\lor$ becomes $\\land$.',
          '3. Cancel any $\\neg\\neg$ that appears.',
        ],
        worked_example: '$\\neg(P \\lor \\neg Q) \\equiv \\neg P \\land \\neg\\neg Q \\equiv \\neg P \\land Q$',
      },
      links: [
        { url: ruleUrl('lg.de-morgan-law-for-conjunction'), label: 'De Morgan law for conjunction' },
        { url: ruleUrl('lg.de-morgan-law-for-disjunction'), label: 'De Morgan law for disjunction' },
        { url: ruleUrl('lesson.lg.truth-tables.biconditionals.10'), label: "De Morgan's law as a biconditional (lesson)" },
      ],
    },
    {
      id: 'distributive-laws',
      name: 'How to distribute and over or, or or over and',
      subtitle: 'Distributive laws',
      glyph: '∧ ∨',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'A part is joined by $\\land$ to a bracket with $\\lor$, or by $\\lor$ to a bracket with $\\land$, or two terms share a part you want to factor out: $P \\land (Q \\lor R)$, $P \\lor (Q \\land \\neg R)$, $(P \\land Q) \\lor (P \\land \\neg Q)$.',
      formula: 'P \\land (Q \\lor R) \\equiv (P \\land Q) \\lor (P \\land R), \\qquad P \\lor (Q \\land R) \\equiv (P \\lor Q) \\land (P \\lor R)',
      fields: {
        steps: [
          '1. Copy the outside part onto each part of the bracket, with the outside connective.',
          '2. Join the new pieces with the connective that was inside the bracket.',
          '3. To factor out a shared part, read the law from right to left.',
        ],
        worked_example: '$P \\lor (Q \\land \\neg R) \\equiv (P \\lor Q) \\land (P \\lor \\neg R)$',
      },
      links: [
        { url: ruleUrl('lg.distributive-law-of-conjunction-over-disjunction'), label: 'Distributive law of conjunction over disjunction' },
        { url: ruleUrl('lg.distributive-law-of-disjunction-over-conjunction'), label: 'Distributive law of disjunction over conjunction' },
      ],
    },
    {
      id: 'double-negation',
      name: 'How to remove a double negation',
      subtitle: 'Double negation law',
      glyph: '¬¬P',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: "Two negations act on the same formula, often after De Morgan's law or a contrapositive: $\\neg\\neg P$, $\\neg\\neg(P \\land \\neg Q)$, $\\neg Q \\to \\neg\\neg P$.",
      formula: '\\neg(\\neg P) \\equiv P',
      fields: {
        steps: [
          '1. Find two $\\neg$ signs that act on the same formula with nothing in between.',
          '2. Delete both; the formula keeps its value in every row.',
        ],
        worked_example: '$\\neg\\neg(P \\land \\neg Q) \\equiv P \\land \\neg Q$',
      },
      links: [
        { url: ruleUrl('lg.double-negation-law'), label: 'Double negation law' },
        { url: ruleUrl('lesson.lg.truth-tables.biconditionals.9'), label: 'Double negation as a biconditional (lesson)' },
      ],
    },
    {
      id: 'implication-equivalence',
      name: 'How to rewrite an implication without the arrow',
      subtitle: 'Material implication',
      glyph: 'P→Q',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'An arrow has to go before you can use De Morgan, distribute, or reach a normal form: $P \\to Q$, $(P \\land Q) \\to R$, $\\neg P \\to Q$.',
      formula: 'P \\to Q \\equiv \\neg P \\lor Q',
      fields: {
        steps: [
          '1. Negate the antecedent (the part before the arrow), with brackets if it is compound.',
          '2. Join it to the consequent with $\\lor$.',
        ],
        worked_example: '$(P \\land Q) \\to R \\equiv \\neg(P \\land Q) \\lor R \\equiv \\neg P \\lor \\neg Q \\lor R$',
      },
      links: [
        { url: ruleUrl('lg.material-implication'), label: 'Material implication' },
        { url: ruleUrl('lesson.lg.truth-tables.implications.3'), label: 'Material implication truth table (lesson)' },
      ],
    },

    // ═══ II. Composite — leaf pages ═════════════════════════════════════
    {
      id: 'truth-table',
      slug: 'truth-table',
      name: 'How to build a truth table',
      description: 'List all $2^n$ rows, add one column per subformula from the inside out, and fill each column with the rule of its connective.',
      uses: ['connective truth tables', 'subformulas', '2^n rows'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Build a Truth Table | Learn Math Class',
        description: 'Build a truth table step by step: count the 2^n rows, fill the letter columns, add one column per subformula and read the result. Worked examples and mistakes.',
        keywords: ['how to make a truth table', 'truth table steps', 'truth table examples', 'construct a truth table', 'truth table for three variables'],
      },
      page: {
        h1: 'How to Build a Truth Table',
        lead:
          'A truth table lists every way to assign T and F to the letters of a formula and shows the value of the formula in each row. Work from the inside out: one column per subformula, filled row by row with the rule of its connective.',
        recognize:
          'The question says "construct the truth table", "for which values is it true", or asks for the value of a formula in every case: $P \\land \\neg Q$, $P \\leftrightarrow \\neg Q$, $(P \\land Q) \\to R$. It is also the first step of a tautology, contradiction or equivalence check. Test: count the distinct letters $n$; the table has $2^n$ rows.',
        recognizeNote: `Truth tables and the five connectives are introduced on the ${link('lesson.lg.truth-tables', 'truth tables page')}; the rule for the arrow is in ${link('lesson.lg.truth-tables.implications.1', 'what is a logical implication')}.`,
        methods: [
          {
            name: 'A column for every subformula',
            tag: 'usual',
            preferred: true,
            formula: '\\neg P,\\quad P \\land Q,\\quad P \\lor Q,\\quad P \\to Q,\\quad P \\leftrightarrow Q',
            body: 'Evaluate one connective at a time, innermost first, so each cell needs only one rule.',
          },
          {
            name: 'Hunt for the false rows',
            tag: 'shortcut',
            formula: 'A \\to B \\text{ is F only when } A = T,\\ B = F',
            body: `When the main connective is an arrow, find the rows with the left side T and the right side F, and mark every other row T; this is the ${link('lg.material-implication', 'material implication')} reading.`,
          },
        ],
        steps: {
          traceLabel: 'On $(P \\to Q) \\land \\neg Q$',
          items: [
            {
              title: 'Count the letters and the rows.',
              body: 'Each letter can be T or F, so $n$ letters give $2^n$ rows: 2, 4, 8, 16.',
              state: '$n = 2$, so $2^2 = 4$ rows',
            },
            {
              title: 'Fill the letter columns in the standard order.',
              body: 'The first letter column is half T, then half F; each next column halves the blocks; the last one alternates T, F. Every row is then a different assignment.',
              state: '$P$: T, T, F, F; $Q$: T, F, T, F',
            },
            {
              title: 'List the subformulas from the inside out.',
              body: 'Break the formula at its connectives. The last column is the whole formula; its main connective is the one applied last.',
              state: '$P \\to Q$, then $\\neg Q$, then $(P \\to Q) \\land \\neg Q$',
            },
            {
              title: 'Fill each column with one connective rule.',
              body: '$\\neg$ flips the value; $\\land$ is T only when both sides are T; $\\lor$ is F only when both are F; $\\to$ is F only for T followed by F; $\\leftrightarrow$ is T when the two sides match.',
              state: '$P \\to Q$: T, F, T, T; $\\neg Q$: F, T, F, T',
            },
            {
              title: 'Read the final column.',
              body: 'Combine the columns with the main connective. Where the final column is T, the formula is true.',
              state: '$\\begin{array}{c|c|c|c|c} P & Q & P \\to Q & \\neg Q & (P \\to Q) \\land \\neg Q \\\\ \\hline T & T & T & F & F \\\\ T & F & F & T & F \\\\ F & T & T & F & F \\\\ F & F & T & T & T \\end{array}$',
            },
          ],
        },
        examples: [
          {
            title: 'a negated letter',
            badge: '2 letters',
            lines: [
              { math: '$P$: T, T, F, F; $Q$: T, F, T, F', why: 'standard order, 4 rows' },
              { math: '$\\neg Q$: F, T, F, T', why: 'flip the $Q$ column' },
              { math: '$P \\land \\neg Q$: F, T, F, F', why: 'T only where both are T', answer: true },
            ],
          },
          {
            title: 'a biconditional',
            badge: '2 letters',
            lines: [
              { math: '$\\neg Q$: F, T, F, T', why: 'flip the $Q$ column' },
              { math: '$P$ and $\\neg Q$ match in rows 2 and 3', why: 'compare with $P$: T, T, F, F' },
              { math: '$P \\leftrightarrow \\neg Q$: F, T, T, F', why: 'T exactly where they match', answer: true },
            ],
          },
          {
            title: 'three letters',
            badge: '8 rows',
            lines: [
              { math: '$P \\land Q$: T, T, F, F, F, F, F, F', why: 'T only in the first two rows' },
              { math: '$R$: T, F, T, F, T, F, T, F', why: 'the last column alternates' },
              { math: '$(P \\land Q) \\to R$: T, F, T, T, T, T, T, T', why: 'F only for T followed by F', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check any table in the [proposition analyzer](!/logic/propositional-logic/syntax/tree-builder), which prints the truth table of a formula, or see each row as a region in the [Venn diagram and truth table tool](!/set-theory/visual-tools/venn-truth-table).',
        visual: {
          caption:
            'Each row of the table is one possible world: one choice of T or F for every letter. Each new letter doubles the number of worlds, which is why $n$ letters give $2^n$ rows. A formula is a rule that says T or F in each world, so listing all rows describes it completely. The columns for subformulas follow the same idea as working out an arithmetic expression from the innermost brackets outward.',
        },
        pitfalls: [
          {
            title: 'Counting too few rows',
            wrong: 'three letters, $2 \\cdot 3 = 6$ rows',
            right: 'three letters, $2^3 = 8$ rows',
          },
          {
            title: 'Making the arrow false when the first part is false',
            wrong: '$P \\to Q$ at $P = F$, $Q = T$ is F',
            right: 'it is T; the only F row of $P \\to Q$ is $P = T$, $Q = F$',
          },
          {
            title: 'Reading the negation as covering the whole formula',
            wrong: '$\\neg P \\land Q$ at $P = T$, $Q = F$: $\\neg(T \\land F) = T$',
            right: '$\\neg$ binds tightest: $\\neg T \\land F = F \\land F = F$',
          },
          {
            title: 'Mixing row orders',
            wrong: 'two formulas tabled in different row orders, then compared row by row',
            right: 'use one fixed order for both: T before F, first letter changing slowest',
          },
        ],
        related: ['tautology-check', 'equivalence-truth-table', 'parse-tree'],
        builtOn: [
          { label: 'Truth table generator (lesson)', url: ruleUrl('lesson.lg.truth-tables') },
          { label: 'Material implication', url: ruleUrl('lg.material-implication') },
          { label: 'The basic biconditional (lesson)', url: ruleUrl('lesson.lg.truth-tables.biconditionals.3') },
        ],
      },
    },
    {
      id: 'tautology-check',
      slug: 'tautology-check',
      name: 'How to check whether a formula is a tautology',
      description: 'Show a formula is true in every row: build its truth table, or assume one row makes it false and reach a clash.',
      uses: ['truth table', 'counterexample row', 'assume it is false'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Check Whether a Formula Is a Tautology | Learn Math Class',
        description: 'Check whether a formula is a tautology: build its truth table or assume it is false and find a clash. Worked examples, a counterexample and common mistakes.',
        keywords: ['how to check if a formula is a tautology', 'tautology truth table', 'prove a tautology', 'is it a tautology', 'tautology examples logic'],
      },
      page: {
        h1: 'How to Check Whether a Formula Is a Tautology',
        lead:
          'A tautology is true in every row of its truth table. To prove it, check all $2^n$ rows or show that no row can make it false; to disprove it, one false row is enough.',
        recognize:
          'The question asks "is this a tautology", "is this always true", "is this formula valid", or asks you to prove an argument form such as modus ponens: $P \\lor \\neg P$, $((P \\to Q) \\land P) \\to Q$, $(P \\to Q) \\to (Q \\to P)$. Test: the answer is yes or no, and a "no" must come with a row where the formula is F.',
        recognizeNote: `Tautologies are defined in ${link('lesson.lg.truth-tables.tautologies.1', 'what is a tautology')}; the ${link('lesson.lg.propositional-logic.semantics.tautology', 'tautology lesson')} lists the classic ones.`,
        methods: [
          {
            name: 'Full truth table',
            tag: 'usual',
            preferred: true,
            formula: '\\text{all } 2^n \\text{ rows are T}',
            body: `Build the table and scan the final column; best for up to three letters. The ${link('lesson.lg.truth-tables.tautologies.2', 'key tautological patterns')} are all checked this way.`,
          },
          {
            name: 'Assume it is false',
            tag: 'short',
            formula: 'A \\to B \\text{ is F} \\iff A \\text{ is T and } B \\text{ is F}',
            body: 'Suppose some row makes the formula F, force the values this needs, and look for a letter that must be both T and F. A clash means no such row exists.',
          },
          {
            name: 'Simplify with the laws',
            tag: 'laws',
            formula: 'A \\equiv \\cdots \\equiv \\top',
            body: `Rewrite the formula until it becomes $\\top$, as in [simplifying a logical expression](!${HUB}/simplify-propositions); best with four or more letters.`,
          },
        ],
        steps: {
          traceLabel: 'On $((P \\to Q) \\land P) \\to Q$',
          items: [
            {
              title: 'Set up the rows.',
              body: `Count the letters and list all $2^n$ rows as in [building a truth table](!${HUB}/truth-table).`,
              state: '2 letters, 4 rows',
            },
            {
              title: 'Evaluate the subformulas.',
              body: 'Fill one column per connective, innermost first.',
              state: '$P \\to Q$: T, F, T, T; $(P \\to Q) \\land P$: T, F, F, F',
            },
            {
              title: 'Fill the final column.',
              body: 'Apply the main connective. For an arrow, a row is F only when the left side is T and the right side is F.',
              state: '$((P \\to Q) \\land P) \\to Q$: T, T, T, T',
            },
            {
              title: 'Read the verdict.',
              body: 'All T: a tautology. Any F: not a tautology, and that row is the counterexample to report. Not a tautology does not mean a contradiction.',
              state: 'all four rows T: a tautology',
            },
          ],
        },
        examples: [
          {
            title: 'excluded middle',
            badge: '1 letter',
            lines: [
              { math: '$P \\lor \\neg P$: $T \\lor F$, then $F \\lor T$', why: 'only two rows' },
              { math: '$P \\lor \\neg P$: T, T, a tautology', why: 'every row is T', answer: true },
            ],
          },
          {
            title: 'a converse in disguise',
            badge: 'not a tautology',
            lines: [
              { math: '$P \\to Q$: T, F, T, T; $Q \\to P$: T, T, F, T', why: 'the two inner columns' },
              { math: '$(P \\to Q) \\to (Q \\to P)$: T, T, F, T', why: 'row 3 is T followed by F' },
              { math: 'not a tautology: $P = F$, $Q = T$', why: 'one F row is enough', answer: true },
            ],
          },
          {
            title: 'hypothetical syllogism',
            badge: 'assume false',
            lines: [
              { math: 'suppose $((P \\to Q) \\land (Q \\to R)) \\to (P \\to R)$ is F', why: 'look for a falsifying row' },
              { math: 'then $P \\to R$ is F, so $P = T$, $R = F$', why: 'the only F row of an arrow' },
              { math: '$P \\to Q$ is T with $P = T$, so $Q = T$', why: 'the left part must be T' },
              { math: '$Q \\to R$ is T with $R = F$, so $Q = F$', why: 'clashes with $Q = T$' },
              { math: 'no row is F: a tautology', why: 'all eight rows are T', answer: true },
            ],
          },
        ],
        examplesAfter: 'Type a formula into the [proposition analyzer](!/logic/propositional-logic/syntax/tree-builder): its badge reads Tautology, Contradiction or Contingent.',
        visual: {
          caption:
            'A tautology is true because of its shape, not because of the facts its letters stand for. Whatever you put in for $P$ and $Q$, the pattern forces T. That is why checking finitely many rows settles the question: the rows list every way the letters can turn out. The assume-false method runs the same check backwards: instead of testing every row, it shows that the one kind of row that could fail cannot exist.',
        },
        pitfalls: [
          {
            title: 'Checking only some rows',
            wrong: 'call $P \\to Q$ a tautology after the rows $(T, T)$ and $(F, F)$',
            right: 'the row $P = T$, $Q = F$ gives F, so $P \\to Q$ is not a tautology',
          },
          {
            title: 'Reading not a tautology as a contradiction',
            wrong: '$P \\to Q$ is not a tautology, so it is always false',
            right: 'it is T in three rows, so it is contingent',
            note: `A contradiction needs F in every row; see [checking for a contradiction](!${HUB}/contradiction-check).`,
          },
          {
            title: 'Reading a tautological conditional as an equivalence',
            wrong: '$(P \\land Q) \\to P$ is a tautology, so $P \\land Q \\equiv P$',
            right: 'at $P = T$, $Q = F$, $P \\land Q$ is F and $P$ is T; only the arrow is a tautology',
          },
        ],
        related: ['contradiction-check', 'truth-table', 'truth-table-or-laws'],
        builtOn: [
          { label: 'What is a tautology (lesson)', url: ruleUrl('lesson.lg.truth-tables.tautologies.1') },
          { label: 'Modus ponens (lesson)', url: ruleUrl('lesson.lg.truth-tables.tautologies.7') },
          { label: 'Hypothetical syllogism (lesson)', url: ruleUrl('lesson.lg.truth-tables.tautologies.6') },
          { label: 'Law of excluded middle', url: ruleUrl('lg.law-of-excluded-middle') },
        ],
      },
    },
    {
      id: 'contradiction-check',
      slug: 'contradiction-check',
      name: 'How to check whether a formula is a contradiction',
      description: 'Show a formula is false in every row with a truth table, or reduce it with the laws to a clash of the form $A \\land \\neg A$.',
      uses: ['truth table', 'law of non-contradiction', 'De Morgan'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Check Whether a Formula Is a Contradiction | Learn Math Class',
        description: 'Check whether a formula is a contradiction: show every truth table row is F, or reduce it with the laws to P and not P. Worked examples and common mistakes.',
        keywords: ['how to check if a formula is a contradiction', 'contradiction truth table', 'unsatisfiable formula', 'prove a contradiction logic', 'contradiction examples logic'],
      },
      page: {
        h1: 'How to Check Whether a Formula Is a Contradiction',
        lead:
          'A contradiction is false in every row of its truth table: no assignment makes it true. Prove it by checking all rows or by reducing it to $\\bot$; disprove it by finding a single row where it is T.',
        recognize:
          'The question asks "is this a contradiction", "is this unsatisfiable", "can these statements all be true", or whether a set of premises is consistent: $P \\leftrightarrow \\neg P$, $(P \\lor Q) \\land \\neg P \\land \\neg Q$, $(P \\land Q) \\land (\\neg P \\lor \\neg Q)$. Test: several conditions are joined by $\\land$ and seem to fight each other.',
        recognizeNote: `Contradictions are defined in ${link('lesson.lg.truth-tables.contradictions.1', 'what is a contradiction')}; the ${link('lesson.lg.propositional-logic.semantics.contradiction', 'contradiction lesson')} covers them in depth.`,
        methods: [
          {
            name: 'Full truth table',
            tag: 'usual',
            preferred: true,
            formula: '\\text{all } 2^n \\text{ rows are F}',
            body: 'Build the table and scan the final column; a single T row ends the check.',
          },
          {
            name: 'Reduce to a clash',
            tag: 'laws',
            formula: 'A \\land \\neg A \\equiv \\bot',
            body: `Rewrite until a part and its negation are joined by $\\land$, then use the ${link('lg.law-of-non-contradiction', 'law of non-contradiction')}.`,
          },
          {
            name: 'Negate and test for a tautology',
            tag: 'dual',
            formula: 'A \\equiv \\bot \\iff \\neg A \\equiv \\top',
            body: `A formula is a contradiction exactly when its negation is a tautology; then use [checking for a tautology](!${HUB}/tautology-check).`,
          },
        ],
        steps: {
          traceLabel: 'On $(P \\lor Q) \\land \\neg P \\land \\neg Q$',
          items: [
            {
              title: 'Set up the rows.',
              body: `List all $2^n$ assignments as in [building a truth table](!${HUB}/truth-table).`,
              state: '2 letters, 4 rows',
            },
            {
              title: 'Evaluate the parts.',
              body: 'Fill one column for each part joined by $\\land$.',
              state: '$P \\lor Q$: T, T, T, F; $\\neg P$: F, F, T, T; $\\neg Q$: F, T, F, T',
            },
            {
              title: 'Combine with the main connective.',
              body: 'A conjunction is T only in a row where every part is T. Look for such a row.',
              state: 'no row has all three parts T: F, F, F, F',
            },
            {
              title: 'Read the verdict.',
              body: 'All F: a contradiction. Any T: the formula is satisfiable, and that row is the witness to report.',
              state: 'all four rows F: a contradiction',
            },
          ],
        },
        examples: [
          {
            title: 'a self-denying biconditional',
            badge: '1 letter',
            lines: [
              { math: '$P = T$: $T \\leftrightarrow F$ is F', why: 'the sides differ' },
              { math: '$P = F$: $F \\leftrightarrow T$ is F', why: 'the sides differ' },
              { math: '$P \\leftrightarrow \\neg P$ is a contradiction', why: 'both rows are F', answer: true },
            ],
          },
          {
            title: 'exclusive or',
            badge: 'satisfiable',
            lines: [
              { math: '$(P \\land \\neg Q) \\lor (\\neg P \\land Q)$: F, T, T, F', why: 'T when exactly one is T' },
              { math: 'not a contradiction: $P = T$, $Q = F$', why: 'one T row is a witness', answer: true },
            ],
          },
          {
            title: 'by the laws',
            badge: 'no table',
            lines: [
              { math: '$(P \\land Q) \\land (\\neg P \\lor \\neg Q)$', why: 'start' },
              { math: '$\\equiv (P \\land Q) \\land \\neg(P \\land Q)$', why: 'De Morgan, read backward' },
              { math: '$\\equiv \\bot$', why: 'a part and its negation', answer: true },
            ],
          },
        ],
        examplesAfter: 'The [proposition analyzer](!/logic/propositional-logic/syntax/tree-builder) labels a formula Contradiction when its whole column is F.',
        visual: {
          caption:
            'Think of each part of a conjunction as a filter on the rows. $P \\lor Q$ throws away the row where both letters are F; $\\neg P$ throws away the rows where $P$ is T; $\\neg Q$ throws away the rows where $Q$ is T. A contradiction is a set of filters that together throw away every row. In the [Venn diagram and truth table tool](!/set-theory/visual-tools/venn-truth-table) this shows up as a shaded region that ends up empty.',
        },
        pitfalls: [
          {
            title: 'Judging from a single row',
            wrong: '$P \\land \\neg Q$ is F at $P = Q = T$, so it is a contradiction',
            right: 'at $P = T$, $Q = F$ it is T, so it is satisfiable',
          },
          {
            title: 'Pushing the negation in without flipping the connective',
            wrong: 'in $(P \\land Q) \\land (\\neg P \\lor \\neg Q)$, write $\\neg P \\lor \\neg Q$ as $\\neg(P \\lor Q)$',
            right: '$\\neg P \\lor \\neg Q \\equiv \\neg(P \\land Q)$, which clashes with $P \\land Q$',
          },
          {
            title: 'Joining a contradiction with or',
            wrong: '$(P \\land \\neg P) \\lor Q \\equiv \\bot$',
            right: '$(P \\land \\neg P) \\lor Q \\equiv \\bot \\lor Q \\equiv Q$',
          },
          {
            title: 'Negating a formula that is not a tautology',
            wrong: '$P \\to Q$ is not a tautology, so $\\neg(P \\to Q)$ is a contradiction',
            right: '$\\neg(P \\to Q) \\equiv P \\land \\neg Q$ is T at $P = T$, $Q = F$',
          },
        ],
        related: ['tautology-check', 'simplify-propositions', 'truth-table-or-laws'],
        builtOn: [
          { label: 'Law of non-contradiction', url: ruleUrl('lg.law-of-non-contradiction') },
          { label: 'De Morgan law for conjunction', url: ruleUrl('lg.de-morgan-law-for-conjunction') },
          { label: 'What is a contradiction (lesson)', url: ruleUrl('lesson.lg.truth-tables.contradictions.1') },
          { label: 'Denied disjunction (lesson)', url: ruleUrl('lesson.lg.truth-tables.contradictions.5') },
        ],
      },
    },
    {
      id: 'equivalence-truth-table',
      slug: 'equivalence-truth-table',
      name: 'How to prove two formulas are equivalent with a truth table',
      description: 'Tabulate both formulas over the same $2^n$ rows and compare the final columns; one mismatched row disproves the equivalence.',
      uses: ['truth table', 'column comparison', 'counterexample row'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Prove Two Formulas Are Equivalent with a Truth Table | Learn Math Class',
        description: 'Prove two logic formulas are equivalent with a truth table: use the same rows, compare the final columns, and find a counterexample row. Examples and mistakes.',
        keywords: ['logical equivalence truth table', 'how to prove logical equivalence', 'are two statements equivalent', 'truth table equivalence examples', 'check logical equivalence'],
      },
      page: {
        h1: 'How to Prove Two Formulas Are Equivalent with a Truth Table',
        lead:
          'Two formulas are logically equivalent when they have the same value in every row. Put both on one truth table with the same letters and the same row order, then compare the two final columns.',
        recognize:
          `The question asks "show that $A \\equiv B$", "are these logically equivalent", or "does this rewrite keep the meaning": $\\neg(P \\land Q)$ and $\\neg P \\lor \\neg Q$, $P \\to Q$ and $\\neg Q \\to \\neg P$, $(P \\to Q) \\to R$ and $P \\to (Q \\to R)$. Test: at most three letters in total; with more, prefer [proving it with the laws](!${HUB}/equivalence-laws).`,
        recognizeNote: `Logical equivalence is defined in the ${link('lesson.lg.propositional-logic.semantics.equivalences', 'equivalences lesson')} and tied to the biconditional in ${link('lesson.lg.truth-tables.biconditionals.2', 'biconditionals and logical equivalence')}.`,
        methods: [
          {
            name: 'Compare the two columns',
            tag: 'usual',
            preferred: true,
            formula: 'A \\equiv B \\iff A \\text{ and } B \\text{ agree in every row}',
            body: 'Tabulate both formulas side by side and compare them row by row.',
          },
          {
            name: 'Test the biconditional',
            tag: 'one column',
            formula: 'A \\equiv B \\iff A \\leftrightarrow B \\text{ is a tautology}',
            body: `Build one column for $A \\leftrightarrow B$ and use [checking for a tautology](!${HUB}/tautology-check).`,
          },
        ],
        steps: {
          traceLabel: 'On $\\neg(P \\land Q)$ and $\\neg P \\lor \\neg Q$',
          items: [
            {
              title: 'Collect the letters of both formulas.',
              body: 'Use every letter that appears in either formula, even if one side lacks it. That fixes $n$ and the $2^n$ rows.',
              state: '$P$ and $Q$: 4 rows',
            },
            {
              title: 'Tabulate the first formula.',
              body: `Fill its columns as in [building a truth table](!${HUB}/truth-table).`,
              state: '$P \\land Q$: T, F, F, F; $\\neg(P \\land Q)$: F, T, T, T',
            },
            {
              title: 'Tabulate the second formula in the same rows.',
              body: 'Keep the same row order, or the comparison means nothing.',
              state: '$\\neg P$: F, F, T, T; $\\neg Q$: F, T, F, T; $\\neg P \\lor \\neg Q$: F, T, T, T',
            },
            {
              title: 'Compare the final columns.',
              body: `Same value in every row: equivalent. One row that differs: not equivalent, and that row is the counterexample. Here the match is ${link('lg.de-morgan-law-for-conjunction', "De Morgan's law")}.`,
              state: 'F, T, T, T both times: equivalent',
            },
          ],
        },
        examples: [
          {
            title: 'the contrapositive',
            badge: 'equivalent',
            lines: [
              { math: '$P \\to Q$: T, F, T, T', why: 'F only at $P = T$, $Q = F$' },
              { math: '$\\neg Q \\to \\neg P$: T, F, T, T', why: 'F only at $Q = F$, $P = T$' },
              { math: '$P \\to Q \\equiv \\neg Q \\to \\neg P$', why: 'the columns match', answer: true },
            ],
          },
          {
            title: 'the converse',
            badge: 'not equivalent',
            lines: [
              { math: '$P \\to Q$: T, F, T, T', why: 'F only at $P = T$, $Q = F$' },
              { math: '$Q \\to P$: T, T, F, T', why: 'F only at $Q = T$, $P = F$' },
              { math: 'not equivalent: rows $(T, F)$ and $(F, T)$ differ', why: 'one differing row is enough', answer: true },
            ],
          },
          {
            title: 'grouping of arrows',
            badge: '3 letters',
            lines: [
              { math: '$(P \\to Q) \\to R$: T, F, T, T, T, F, T, F', why: '$P \\to Q$ is F only in rows 3, 4' },
              { math: '$P \\to (Q \\to R)$: T, F, T, T, T, T, T, T', why: 'T in every row with $P = F$' },
              { math: 'not equivalent: row $P = F$, $Q = T$, $R = F$', why: 'F against T there', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check any pair in the [equivalence validator](!/logic/propositional-logic/semantics/equivalence-validator), which compares the two columns for you.',
        visual: {
          caption:
            'Each formula picks out the set of rows where it is true. Two formulas are equivalent when they pick out exactly the same set. That is why the comparison must cover every row: the sets could agree on most rows and still differ on one. In the [Venn diagram and truth table tool](!/set-theory/visual-tools/venn-truth-table) the rows become regions, and equivalent formulas shade the same regions.',
        },
        pitfalls: [
          {
            title: 'Checking only the easy rows',
            wrong: 'at $P = Q = T$ and $P = Q = F$ both $P \\to Q$ and $Q \\to P$ are T, so they are equivalent',
            right: 'the rows $(T, F)$ and $(F, T)$ differ, so they are not equivalent',
          },
          {
            title: 'Giving each side its own letters',
            wrong: '$P \\land (Q \\lor \\neg Q)$ gets 4 rows, $P$ gets 2, and the rows are matched by position',
            right: 'give both sides the 4 rows of $P$ and $Q$: T, T, F, F twice, so they are equivalent',
          },
          {
            title: 'Taking a one-way implication for an equivalence',
            wrong: '$P \\to (P \\lor Q)$ is a tautology, so $P \\equiv P \\lor Q$',
            right: 'the columns T, T, F, F and T, T, T, F differ at $P = F$, $Q = T$',
          },
        ],
        related: ['equivalence-laws', 'truth-table', 'truth-table-or-laws'],
        builtOn: [
          { label: 'Biconditionals and logical equivalence (lesson)', url: ruleUrl('lesson.lg.truth-tables.biconditionals.2') },
          { label: 'De Morgan law for conjunction', url: ruleUrl('lg.de-morgan-law-for-conjunction') },
          { label: 'Contrapositive equivalence', url: ruleUrl('lg.contrapositive-equivalence') },
        ],
      },
    },
    {
      id: 'equivalence-laws',
      slug: 'equivalence-laws',
      name: 'How to prove an equivalence with the laws of logic',
      description: 'Transform one side into the other with named laws: remove arrows, push negations inward, then distribute and collapse.',
      uses: ['material implication', 'De Morgan', 'distributive laws', 'complement and identity laws'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Prove an Equivalence with the Laws of Logic | Learn Math Class',
        description: 'Prove a logical equivalence with the laws of logic: remove arrows, push negations inward, distribute and collapse, one law per line. Examples and mistakes.',
        keywords: ['prove logical equivalence using laws', 'logical equivalence without truth table', 'laws of logic proof', 'propositional logic equivalence proof', 'logic laws examples'],
      },
      page: {
        h1: 'How to Prove an Equivalence with the Laws of Logic',
        lead:
          'Start from one side and rewrite it, one named law per line, until it becomes the other side. Every law is an equivalence, so each line has the same truth table as the one before.',
        recognize:
          'The question says "prove using the laws of logic", "without a truth table", or "show algebraically": $(P \\to Q) \\land (P \\to \\neg Q) \\equiv \\neg P$, $P \\to (Q \\to R) \\equiv (P \\land Q) \\to R$. The laws are the better tool with four or more letters, where a table needs 16 rows or more. Test: one side looks more complicated than the other; start there.',
        recognizeNote: `The laws are collected in the ${link('lesson.lg.propositional-logic.laws', 'propositional logic laws')} reference and explained on the ${link('lesson.lg.propositional-logic.semantics.equivalences', 'equivalences lesson')}.`,
        methods: [
          {
            name: 'Rewrite one side into the other',
            tag: 'usual',
            preferred: true,
            formula: 'A \\equiv A_1 \\equiv A_2 \\equiv \\cdots \\equiv B',
            body: 'Work on the more complex side only and name a law on every line.',
          },
          {
            name: 'Meet in the middle',
            tag: 'both sides',
            formula: 'A \\equiv C \\quad \\text{and} \\quad B \\equiv C',
            body: `Rewrite both sides into the same simple form, for example by [converting to CNF](!${HUB}/convert-to-cnf).`,
          },
          {
            name: 'Truth table',
            tag: 'check',
            formula: 'A \\text{ and } B \\text{ agree in all } 2^n \\text{ rows}',
            body: `Fine for up to three letters; see [proving equivalence with a truth table](!${HUB}/equivalence-truth-table).`,
          },
        ],
        steps: {
          traceLabel: 'On $(P \\to Q) \\land (P \\to \\neg Q) \\equiv \\neg P$',
          items: [
            {
              title: 'Start from the more complex side.',
              body: 'Copy it as the first line. The simpler side is the target.',
              state: '$(P \\to Q) \\land (P \\to \\neg Q)$',
            },
            {
              title: 'Rewrite every arrow.',
              body: `Use ${link('lg.material-implication', 'material implication')} for $\\to$ and the ${link('lg.biconditional-as-two-conditionals', 'biconditional as two conditionals')} for $\\leftrightarrow$.`,
              state: '$(\\neg P \\lor Q) \\land (\\neg P \\lor \\neg Q)$',
              atomic: 'implication-equivalence',
            },
            {
              title: 'Push negations onto single letters.',
              body: `Use ${link('lg.de-morgan-law-for-conjunction', "De Morgan's laws")} for a negated bracket and the ${link('lg.double-negation-law', 'double negation law')} for $\\neg\\neg$. Here every $\\neg$ already sits on a letter.`,
              state: 'no change: $(\\neg P \\lor Q) \\land (\\neg P \\lor \\neg Q)$',
            },
            {
              title: 'Factor or expand with a distributive law.',
              body: `Both brackets share $\\neg P \\lor$, so the ${link('lg.distributive-law-of-disjunction-over-conjunction', 'distributive law of or over and')}, read right to left, pulls it out.`,
              state: '$\\neg P \\lor (Q \\land \\neg Q)$',
              atomic: 'distributive-laws',
            },
            {
              title: 'Collapse complements and constants.',
              body: `$Q \\land \\neg Q \\equiv \\bot$ by the ${link('lg.law-of-non-contradiction', 'law of non-contradiction')}, then $\\neg P \\lor \\bot \\equiv \\neg P$ by the ${link('lg.identity-law-for-disjunction', 'identity law')}. Stop when you reach the target.`,
              state: '$\\neg P \\lor \\bot \\equiv \\neg P$',
            },
          ],
        },
        examples: [
          {
            title: 'De Morgan then double negation',
            badge: '2 laws',
            lines: [
              { math: '$\\neg(P \\lor \\neg Q)$', why: 'start' },
              { math: '$\\equiv \\neg P \\land \\neg\\neg Q$', why: 'De Morgan: $\\lor$ becomes $\\land$' },
              { math: '$\\equiv \\neg P \\land Q$', why: 'double negation', answer: true },
            ],
          },
          {
            title: 'exportation',
            badge: 'arrows',
            lines: [
              { math: '$P \\to (Q \\to R) \\equiv \\neg P \\lor (\\neg Q \\lor R)$', why: 'material implication twice' },
              { math: '$\\equiv (\\neg P \\lor \\neg Q) \\lor R$', why: 'associative law' },
              { math: '$\\equiv \\neg(P \\land Q) \\lor R$', why: 'De Morgan, read backward' },
              { math: '$\\equiv (P \\land Q) \\to R$', why: 'material implication, read backward', answer: true },
            ],
          },
          {
            title: 'a negated arrow',
            badge: 'factor',
            lines: [
              { math: '$\\neg(P \\to Q) \\lor (P \\land Q)$', why: 'start' },
              { math: '$\\equiv (P \\land \\neg Q) \\lor (P \\land Q)$', why: 'negation of a conditional' },
              { math: '$\\equiv P \\land (\\neg Q \\lor Q)$', why: 'factor out $P$' },
              { math: '$\\equiv P \\land \\top \\equiv P$', why: 'excluded middle, then identity', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check each line against the one before in the [equivalence validator](!/logic/propositional-logic/semantics/equivalence-validator).',
        visual: {
          caption:
            'Each law is a pair of formulas with identical truth tables, checked once and for all. Replacing a part of a formula by an equivalent part cannot change any row of the whole table, so every line of the chain has the same table as the first. The chain proves that the two ends agree in all $2^n$ rows without writing out a single row.',
        },
        pitfalls: [
          {
            title: "Keeping the connective in De Morgan's law",
            wrong: '$\\neg(P \\land Q) \\equiv \\neg P \\land \\neg Q$',
            right: '$\\neg(P \\land Q) \\equiv \\neg P \\lor \\neg Q$: the connective flips',
          },
          {
            title: 'Negating an arrow part by part',
            wrong: '$\\neg(P \\to Q) \\equiv \\neg P \\to \\neg Q$',
            right: '$\\neg(P \\to Q) \\equiv P \\land \\neg Q$',
          },
          {
            title: 'Distributing to only one part',
            wrong: '$P \\land (Q \\lor R) \\equiv (P \\land Q) \\lor R$',
            right: '$P \\land (Q \\lor R) \\equiv (P \\land Q) \\lor (P \\land R)$',
          },
          {
            title: 'Using a one-way rule as a law',
            wrong: '$(P \\land Q) \\to P$ holds, so replace $P \\land Q$ by $P$',
            right: 'only equivalences may replace a part; $P \\land Q$ and $P$ differ at $P = T$, $Q = F$',
          },
        ],
        related: ['equivalence-truth-table', 'simplify-propositions', 'truth-table-or-laws'],
        builtOn: [
          { label: 'Material implication', url: ruleUrl('lg.material-implication') },
          { label: 'Distributive law of disjunction over conjunction', url: ruleUrl('lg.distributive-law-of-disjunction-over-conjunction') },
          { label: 'Exportation', url: ruleUrl('lg.exportation') },
          { label: 'Propositional logic laws (lesson)', url: ruleUrl('lesson.lg.propositional-logic.laws') },
        ],
      },
    },
    {
      id: 'simplify-propositions',
      slug: 'simplify-propositions',
      name: 'How to simplify a logical expression',
      description: 'Remove arrows, push negations onto letters, then factor and collapse with the complement, identity and absorption laws.',
      uses: ['material implication', 'De Morgan', 'distributive laws', 'absorption'],
      level: 'composite',
      tag: 'Composite',
      meta: '6 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Simplify a Logical Expression | Learn Math Class',
        description: 'Simplify a logical expression in a fixed order: remove arrows, apply De Morgan, cancel double negations, factor and collapse. Worked examples and mistakes.',
        keywords: ['how to simplify logical expressions', 'simplify propositional logic', 'logic simplification laws', 'simplify boolean expression logic', 'simplification examples logic'],
      },
      page: {
        h1: 'How to Simplify a Logical Expression',
        lead:
          'Simplifying means finding a shorter formula with the same truth table. Work in a fixed order: get rid of the arrows, move every negation onto a single letter, then factor and collapse until no law makes the formula shorter.',
        recognize:
          'The question says "simplify", "write in simplest form", or "reduce": $\\neg(P \\to \\neg Q) \\lor (P \\land \\neg Q)$, $(P \\to Q) \\land P$, $P \\lor (P \\land Q)$. Simplifying can also settle a tautology or contradiction question: the result is then $\\top$ or $\\bot$. Test: a letter appears more than once, or a negation stands in front of a bracket.',
        recognizeNote: `The laws used here are listed in the ${link('lesson.lg.propositional-logic.laws', 'propositional logic laws')} reference, each with its truth-table check.`,
        steps: {
          traceLabel: 'On $\\neg(P \\to \\neg Q) \\lor (P \\land \\neg Q)$',
          items: [
            {
              title: 'Rewrite the arrows.',
              body: `Replace each $A \\to B$ by $\\neg A \\lor B$ (${link('lg.material-implication', 'material implication')}).`,
              state: '$\\neg(\\neg P \\lor \\neg Q) \\lor (P \\land \\neg Q)$',
              atomic: 'implication-equivalence',
            },
            {
              title: 'Push the negations into the brackets.',
              body: `A $\\neg$ in front of a bracket moves inside and flips $\\land$ and $\\lor$ (${link('lg.de-morgan-law-for-disjunction', "De Morgan's law")}).`,
              state: '$(\\neg\\neg P \\land \\neg\\neg Q) \\lor (P \\land \\neg Q)$',
              atomic: 'de-morgan',
            },
            {
              title: 'Cancel the double negations.',
              body: `$\\neg\\neg A$ becomes $A$ by the ${link('lg.double-negation-law', 'double negation law')}.`,
              state: '$(P \\land Q) \\lor (P \\land \\neg Q)$',
              atomic: 'double-negation',
            },
            {
              title: 'Factor out the shared letter.',
              body: `Both terms contain $P$; the ${link('lg.distributive-law-of-conjunction-over-disjunction', 'distributive law')}, read right to left, pulls it out.`,
              state: '$P \\land (Q \\lor \\neg Q)$',
              atomic: 'distributive-laws',
            },
            {
              title: 'Collapse complements and constants.',
              body: `$Q \\lor \\neg Q \\equiv \\top$ by ${link('lg.law-of-excluded-middle', 'excluded middle')}, and $P \\land \\top \\equiv P$ by the ${link('lg.identity-law-for-conjunction', 'identity law')}. When one term contains another, use ${link('lg.absorption-disjunction-form', 'absorption')}: $P \\lor (P \\land Q) \\equiv P$.`,
              state: '$P \\land \\top \\equiv P$',
            },
            {
              title: 'Check the result.',
              body: 'Compare the truth tables of the start and the result: the columns must match in every row.',
              state: 'both columns: T, T, F, F',
            },
          ],
        },
        examples: [
          {
            title: 'absorption',
            badge: '1 law',
            lines: [
              { math: '$P \\lor (P \\land Q)$', why: 'the term $P \\land Q$ contains $P$' },
              { math: '$\\equiv P$', why: 'absorption', answer: true },
            ],
          },
          {
            title: 'an arrow and its premise',
            badge: 'distribute',
            lines: [
              { math: '$(P \\to Q) \\land P \\equiv (\\neg P \\lor Q) \\land P$', why: 'material implication' },
              { math: '$\\equiv (\\neg P \\land P) \\lor (Q \\land P)$', why: 'distribute $\\land P$' },
              { math: '$\\equiv \\bot \\lor (P \\land Q)$', why: 'non-contradiction' },
              { math: '$\\equiv P \\land Q$', why: 'identity law', answer: true },
            ],
          },
          {
            title: 'down to a contradiction',
            badge: 'result is false',
            lines: [
              { math: '$(P \\lor Q) \\land (P \\lor \\neg Q) \\land \\neg P$', why: 'start' },
              { math: '$\\equiv (P \\lor (Q \\land \\neg Q)) \\land \\neg P$', why: 'factor out $P \\lor$' },
              { math: '$\\equiv (P \\lor \\bot) \\land \\neg P \\equiv P \\land \\neg P$', why: 'non-contradiction, then identity' },
              { math: '$\\equiv \\bot$', why: 'a letter and its negation', answer: true },
            ],
          },
        ],
        examplesAfter: 'Confirm that the start and the result match in the [equivalence validator](!/logic/propositional-logic/semantics/equivalence-validator).',
        visual: {
          caption:
            'Simplifying is the logic version of collecting like terms. The fixed order matters: arrows and negated brackets hide the structure, so they go first. Once only $\\land$, $\\lor$ and negated letters remain, shared letters become visible and the distributive law can pull them out. Pairs like $Q \\lor \\neg Q$ then say "always true" and drop away, the way $x - x$ drops out of a sum.',
        },
        pitfalls: [
          {
            title: 'Absorbing into the wrong term',
            wrong: '$P \\land (P \\lor Q) \\equiv P \\land Q$',
            right: '$P \\land (P \\lor Q) \\equiv P$ by absorption',
          },
          {
            title: "Keeping the connective in De Morgan's law",
            wrong: '$\\neg(\\neg P \\lor \\neg Q) \\equiv P \\lor Q$',
            right: '$\\neg(\\neg P \\lor \\neg Q) \\equiv P \\land Q$',
          },
          {
            title: 'Letting a contradiction swallow an or',
            wrong: '$(P \\land \\neg P) \\lor Q \\equiv \\bot$',
            right: '$(P \\land \\neg P) \\lor Q \\equiv \\bot \\lor Q \\equiv Q$',
          },
          {
            title: 'Dropping the premise',
            wrong: '$(P \\to Q) \\land P \\equiv Q$',
            right: '$(P \\to Q) \\land P \\equiv P \\land Q$; at $P = F$, $Q = T$ the formula is F but $Q$ is T',
          },
        ],
        related: ['equivalence-laws', 'convert-to-cnf', 'truth-table-or-laws'],
        builtOn: [
          { label: 'Absorption (disjunction form)', url: ruleUrl('lg.absorption-disjunction-form') },
          { label: 'Law of excluded middle', url: ruleUrl('lg.law-of-excluded-middle') },
          { label: 'Identity law for conjunction', url: ruleUrl('lg.identity-law-for-conjunction') },
          { label: 'Propositional logic laws (lesson)', url: ruleUrl('lesson.lg.propositional-logic.laws') },
        ],
      },
    },
    {
      id: 'convert-to-cnf',
      slug: 'convert-to-cnf',
      name: 'How to convert a formula to conjunctive normal form',
      description: 'Rewrite as an and of or-clauses: remove arrows, push negations onto letters, then distribute or over and.',
      uses: ['material implication', 'De Morgan', 'distributive law of or over and'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Convert a Formula to Conjunctive Normal Form (CNF) | Learn Math Class',
        description: 'Convert a formula to conjunctive normal form: remove arrows, push negations onto letters, distribute or over and, or use the truth table. Worked examples.',
        keywords: ['how to convert to cnf', 'conjunctive normal form steps', 'cnf conversion examples', 'product of sums logic', 'convert formula to cnf'],
      },
      page: {
        h1: 'How to Convert a Formula to Conjunctive Normal Form',
        lead:
          'A formula is in conjunctive normal form (CNF) when it is an and of clauses, and each clause is an or of letters and negated letters. Get there by removing arrows, pushing negations onto letters, and distributing $\\lor$ over $\\land$.',
        recognize:
          'The question asks for CNF, a product of sums, clause form, or input for a SAT solver: $\\neg(P \\to Q) \\lor R$, $P \\to (Q \\land R)$, $(P \\land Q) \\lor (\\neg P \\land R)$. Test for the answer: no $\\to$ or $\\leftrightarrow$, every $\\neg$ on a single letter, and no $\\land$ inside a bracket that is joined by $\\lor$.',
        recognizeNote: `Normal forms are explained with the ${link('lesson.lg.propositional-logic.syntax.normal-forms', 'normal forms converter')}, together with minterms and maxterms.`,
        methods: [
          {
            name: 'Rewrite with the laws',
            tag: 'usual',
            preferred: true,
            formula: 'A \\lor (B \\land C) \\equiv (A \\lor B) \\land (A \\lor C)',
            body: `Remove arrows, push negations in, then apply the ${link('lg.distributive-law-of-disjunction-over-conjunction', 'distributive law of or over and')}; this gives a short CNF.`,
          },
          {
            name: 'Read it off the truth table',
            tag: 'table',
            formula: '\\text{one clause per F row: a T letter appears negated, an F letter plain}',
            body: 'For each row where the formula is F, write the clause that is false only in that row. The result is the full canonical CNF.',
          },
        ],
        steps: {
          traceLabel: 'On $\\neg(P \\to Q) \\lor R$',
          items: [
            {
              title: 'Remove the arrows.',
              body: `Use ${link('lg.material-implication', 'material implication')} for $\\to$; split $\\leftrightarrow$ into two conditionals first.`,
              state: '$\\neg(\\neg P \\lor Q) \\lor R$',
              atomic: 'implication-equivalence',
            },
            {
              title: 'Push every negation onto a letter.',
              body: `Apply ${link('lg.de-morgan-law-for-disjunction', "De Morgan's law")} to each negated bracket, from the outside in.`,
              state: '$(\\neg\\neg P \\land \\neg Q) \\lor R$',
              atomic: 'de-morgan',
            },
            {
              title: 'Cancel double negations.',
              body: 'Replace each $\\neg\\neg A$ by $A$.',
              state: '$(P \\land \\neg Q) \\lor R$',
              atomic: 'double-negation',
            },
            {
              title: 'Distribute or over and.',
              body: 'Any $\\land$ inside a bracket that is joined by $\\lor$ must come out: each part of the $\\land$ gets its own copy of the other side.',
              state: '$(P \\lor R) \\land (\\neg Q \\lor R)$',
              atomic: 'distributive-laws',
            },
            {
              title: 'Tidy the clauses.',
              body: `Drop any clause that contains a letter and its negation, since it is always T (${link('lg.law-of-excluded-middle', 'excluded middle')}), and repeated letters inside a clause.`,
              state: 'nothing to drop: $(P \\lor R) \\land (\\neg Q \\lor R)$',
            },
          ],
        },
        examples: [
          {
            title: 'an arrow into an and',
            badge: '1 distribution',
            lines: [
              { math: '$P \\to (Q \\land R) \\equiv \\neg P \\lor (Q \\land R)$', why: 'material implication' },
              { math: '$\\equiv (\\neg P \\lor Q) \\land (\\neg P \\lor R)$', why: 'distribute $\\neg P \\lor$', answer: true },
            ],
          },
          {
            title: 'from the truth table',
            badge: 'F rows',
            lines: [
              { math: '$P \\leftrightarrow Q$: T, F, F, T', why: 'F rows are $(T, F)$ and $(F, T)$' },
              { math: 'row $(T, F)$ gives $\\neg P \\lor Q$', why: 'negate the T letter' },
              { math: 'row $(F, T)$ gives $P \\lor \\neg Q$', why: 'negate the T letter' },
              { math: '$(\\neg P \\lor Q) \\land (P \\lor \\neg Q)$', why: 'and of the clauses', answer: true },
            ],
          },
          {
            title: 'two terms joined by or',
            badge: '4 clauses',
            lines: [
              { math: '$(P \\land Q) \\lor (\\neg P \\land R)$', why: 'start' },
              { math: '$\\equiv (P \\lor \\neg P) \\land (P \\lor R) \\land (Q \\lor \\neg P) \\land (Q \\lor R)$', why: 'pair each part with each part' },
              { math: '$\\equiv (P \\lor R) \\land (\\neg P \\lor Q) \\land (Q \\lor R)$', why: 'drop the always-true clause', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check that the start and your CNF are equivalent in the [equivalence validator](!/logic/propositional-logic/semantics/equivalence-validator).',
        visual: {
          caption:
            'A CNF is a list of conditions that must all hold. Each clause rules out the rows where all of its literals are F; a clause that uses every letter rules out exactly one row of the truth table. Joining the clauses with $\\land$ rules out every false row and leaves the true rows. That is why the table method works, and why the law method, which keeps the formula short, ends with the same truth table.',
        },
        pitfalls: [
          {
            title: 'Distributing the wrong connective',
            wrong: '$(P \\land \\neg Q) \\lor R \\equiv (P \\land R) \\lor (\\neg Q \\land R)$',
            right: 'distribute $\\lor$ over $\\land$: $(P \\lor R) \\land (\\neg Q \\lor R)$',
          },
          {
            title: 'Stopping with a negated bracket',
            wrong: '$\\neg(P \\land Q) \\lor R$ is in CNF',
            right: 'push the negation in first: $\\neg P \\lor \\neg Q \\lor R$, a single clause',
          },
          {
            title: 'Using the DNF sign rule',
            wrong: 'the F row $P = T$, $Q = F$ of $P \\leftrightarrow Q$ gives the clause $P \\lor \\neg Q$',
            right: 'negate the letters that are T: $\\neg P \\lor Q$',
          },
          {
            title: 'Distributing before removing the arrows',
            wrong: '$P \\to (Q \\land R) \\equiv (P \\to Q) \\land (P \\to R)$, now in CNF',
            right: 'arrows are not allowed in CNF; rewrite them: $(\\neg P \\lor Q) \\land (\\neg P \\lor R)$',
          },
        ],
        related: ['convert-to-dnf', 'simplify-propositions', 'truth-table-or-laws'],
        builtOn: [
          { label: 'Distributive law of disjunction over conjunction', url: ruleUrl('lg.distributive-law-of-disjunction-over-conjunction') },
          { label: 'De Morgan law for disjunction', url: ruleUrl('lg.de-morgan-law-for-disjunction') },
          { label: 'Material implication', url: ruleUrl('lg.material-implication') },
          { label: 'Normal forms converter (lesson)', url: ruleUrl('lesson.lg.propositional-logic.syntax.normal-forms') },
        ],
      },
    },
    {
      id: 'convert-to-dnf',
      slug: 'convert-to-dnf',
      name: 'How to convert a formula to disjunctive normal form',
      description: 'Rewrite as an or of and-terms: remove arrows, push negations onto letters, then distribute and over or.',
      uses: ['material implication', 'De Morgan', 'distributive law of and over or'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Convert a Formula to Disjunctive Normal Form (DNF) | Learn Math Class',
        description: 'Convert a formula to disjunctive normal form: remove arrows, push negations onto letters, distribute and over or, or use the truth table. Worked examples.',
        keywords: ['how to convert to dnf', 'disjunctive normal form steps', 'dnf conversion examples', 'sum of products logic', 'convert formula to dnf'],
      },
      page: {
        h1: 'How to Convert a Formula to Disjunctive Normal Form',
        lead:
          'A formula is in disjunctive normal form (DNF) when it is an or of terms, and each term is an and of letters and negated letters. Each term describes one way to make the formula true.',
        recognize:
          'The question asks for DNF, a sum of products, or a list of the cases that make a formula true: $(P \\to Q) \\land \\neg(Q \\land R)$, $P \\land (Q \\lor \\neg R)$, $(P \\lor Q) \\land (\\neg P \\lor \\neg Q)$. Test for the answer: no arrows, every $\\neg$ on a single letter, and no $\\lor$ inside a bracket that is joined by $\\land$.',
        recognizeNote: `Normal forms, minterms and maxterms are explained with the ${link('lesson.lg.propositional-logic.syntax.normal-forms', 'normal forms converter')}.`,
        methods: [
          {
            name: 'Rewrite with the laws',
            tag: 'usual',
            preferred: true,
            formula: 'A \\land (B \\lor C) \\equiv (A \\land B) \\lor (A \\land C)',
            body: `Remove arrows, push negations in, then apply the ${link('lg.distributive-law-of-conjunction-over-disjunction', 'distributive law of and over or')}.`,
          },
          {
            name: 'Read it off the truth table',
            tag: 'table',
            formula: '\\text{one term per T row: a T letter appears plain, an F letter negated}',
            body: 'For each row where the formula is T, write the term that is true only in that row. The result is the full canonical DNF.',
          },
        ],
        steps: {
          traceLabel: 'On $(P \\to Q) \\land \\neg(Q \\land R)$',
          items: [
            {
              title: 'Remove the arrows.',
              body: `Use ${link('lg.material-implication', 'material implication')}; split $\\leftrightarrow$ into two conditionals first.`,
              state: '$(\\neg P \\lor Q) \\land \\neg(Q \\land R)$',
              atomic: 'implication-equivalence',
            },
            {
              title: 'Push every negation onto a letter.',
              body: `Apply ${link('lg.de-morgan-law-for-conjunction', "De Morgan's law")}, then cancel any $\\neg\\neg$.`,
              state: '$(\\neg P \\lor Q) \\land (\\neg Q \\lor \\neg R)$',
              atomic: 'de-morgan',
            },
            {
              title: 'Distribute and over or.',
              body: 'Multiply out as with two brackets in algebra: each term of the first bracket with each term of the second.',
              state: '$(\\neg P \\land \\neg Q) \\lor (\\neg P \\land \\neg R) \\lor (Q \\land \\neg Q) \\lor (Q \\land \\neg R)$',
              atomic: 'distributive-laws',
            },
            {
              title: 'Drop the impossible terms.',
              body: `A term with a letter and its negation is always F (${link('lg.law-of-non-contradiction', 'non-contradiction')}) and disappears from an or; so do repeated terms.`,
              state: '$(\\neg P \\land \\neg Q) \\lor (\\neg P \\land \\neg R) \\lor (Q \\land \\neg R)$',
            },
          ],
        },
        examples: [
          {
            title: 'one distribution',
            badge: 'laws',
            lines: [
              { math: '$P \\land (Q \\lor \\neg R)$', why: 'an or inside an and' },
              { math: '$\\equiv (P \\land Q) \\lor (P \\land \\neg R)$', why: 'distribute $P \\land$', answer: true },
            ],
          },
          {
            title: 'from the truth table',
            badge: 'T rows',
            lines: [
              { math: '$P \\to Q$: T, F, T, T', why: 'T rows $(T, T)$, $(F, T)$, $(F, F)$' },
              { math: 'terms $P \\land Q$, $\\neg P \\land Q$, $\\neg P \\land \\neg Q$', why: 'negate the F letters' },
              { math: '$(P \\land Q) \\lor (\\neg P \\land Q) \\lor (\\neg P \\land \\neg Q)$', why: 'or of the terms', answer: true },
            ],
          },
          {
            title: 'exclusive or',
            badge: '4 terms',
            lines: [
              { math: '$(P \\lor Q) \\land (\\neg P \\lor \\neg Q)$', why: 'start' },
              { math: '$\\equiv (P \\land \\neg P) \\lor (P \\land \\neg Q) \\lor (Q \\land \\neg P) \\lor (Q \\land \\neg Q)$', why: 'four products' },
              { math: '$\\equiv (P \\land \\neg Q) \\lor (\\neg P \\land Q)$', why: 'drop the two impossible terms', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check that the start and your DNF are equivalent in the [equivalence validator](!/logic/propositional-logic/semantics/equivalence-validator).',
        visual: {
          caption:
            'A DNF is a list of the ways a formula can be true. A term that uses every letter, such as $\\neg P \\land Q$, is T in exactly one row of the truth table, so joining the terms of the true rows with $\\lor$ rebuilds the formula row by row. The law method reaches a shorter list, where each term covers several rows at once. CNF is the mirror image: it lists the ways the formula can fail.',
        },
        pitfalls: [
          {
            title: 'Distributing the wrong connective',
            wrong: '$P \\land (Q \\lor \\neg R) \\equiv (P \\lor Q) \\land (P \\lor \\neg R)$',
            right: 'distribute $\\land$ over $\\lor$: $(P \\land Q) \\lor (P \\land \\neg R)$',
          },
          {
            title: 'Using the CNF sign rule',
            wrong: 'the T row $P = F$, $Q = T$ gives the term $P \\land \\neg Q$',
            right: 'negate the letters that are F: $\\neg P \\land Q$',
          },
          {
            title: 'Calling an and of ors a DNF',
            wrong: '$(P \\lor Q) \\land R$ is in DNF',
            right: 'distribute first: $(P \\land R) \\lor (Q \\land R)$',
          },
          {
            title: 'Building terms from the false rows',
            wrong: '$P \\to Q$ in DNF is $P \\land \\neg Q$',
            right: '$P \\land \\neg Q$ is its negation; use the three T rows instead',
          },
        ],
        related: ['convert-to-cnf', 'truth-table', 'truth-table-or-laws'],
        builtOn: [
          { label: 'Distributive law of conjunction over disjunction', url: ruleUrl('lg.distributive-law-of-conjunction-over-disjunction') },
          { label: 'De Morgan law for conjunction', url: ruleUrl('lg.de-morgan-law-for-conjunction') },
          { label: 'Law of non-contradiction', url: ruleUrl('lg.law-of-non-contradiction') },
          { label: 'Normal forms converter (lesson)', url: ruleUrl('lesson.lg.propositional-logic.syntax.normal-forms') },
        ],
      },
    },
    {
      id: 'negate-implication',
      slug: 'negate-implication',
      name: 'How to negate a conditional statement',
      description: 'The negation of $P \\to Q$ is $P \\land \\neg Q$: keep the condition, deny the conclusion, and join them with and.',
      uses: ['material implication', 'De Morgan', 'double negation'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Negate a Conditional Statement | Learn Math Class',
        description: 'Negate a conditional statement: the negation of P → Q is P and not Q, not another if-then. A step-by-step law chain, examples in symbols and words, mistakes.',
        keywords: ['how to negate a conditional statement', 'negation of an implication', 'negate if then statement', 'negation of p implies q', 'negating conditionals examples'],
      },
      page: {
        h1: 'How to Negate a Conditional Statement',
        lead:
          'A conditional $P \\to Q$ fails in exactly one case: $P$ is true and $Q$ is false. So its negation is not another if-then statement; it is the conjunction $P \\land \\neg Q$.',
        recognize:
          'The question asks for the negation of an if-then statement, for what would make it false, or for a counterexample: $\\neg(P \\to Q)$, $\\neg(P \\to \\neg Q)$, "it is not true that if it rains, the game is canceled". Test: a $\\neg$ stands in front of an arrow, or a "not" governs a whole if-then sentence.',
        recognizeNote: `Conditionals and their single false row are explained in the ${link('lesson.lg.propositional-logic.semantics.implication', 'implication lesson')}.`,
        methods: [
          {
            name: 'Law chain',
            tag: 'usual',
            preferred: true,
            formula: '\\neg(P \\to Q) \\equiv \\neg(\\neg P \\lor Q) \\equiv P \\land \\neg Q',
            body: 'Remove the arrow, then push the negation inside; this works for any nesting.',
          },
          {
            name: 'Use the rule directly',
            tag: 'shortcut',
            formula: '\\neg(P \\to Q) \\equiv P \\land \\neg Q',
            body: `Quote the ${link('lg.negation-of-a-conditional', 'negation of a conditional')}: keep $P$, negate $Q$, join with $\\land$.`,
          },
        ],
        steps: {
          traceLabel: 'On $\\neg(P \\to Q)$',
          items: [
            {
              title: 'Name the condition and the conclusion.',
              body: 'In "if $P$ then $Q$", $P$ is the antecedent and $Q$ the consequent. Put brackets around them if they are compound.',
              state: 'antecedent $P$, consequent $Q$',
            },
            {
              title: 'Rewrite the arrow.',
              body: `${link('lg.material-implication', 'Material implication')} turns $P \\to Q$ into $\\neg P \\lor Q$.`,
              state: '$\\neg(\\neg P \\lor Q)$',
              atomic: 'implication-equivalence',
            },
            {
              title: 'Push the negation inside.',
              body: `By ${link('lg.de-morgan-law-for-disjunction', "De Morgan's law")}, $\\neg$ goes onto each part and $\\lor$ becomes $\\land$.`,
              state: '$\\neg\\neg P \\land \\neg Q$',
              atomic: 'de-morgan',
            },
            {
              title: 'Cancel the double negation.',
              body: 'The result keeps the antecedent and denies the consequent.',
              state: '$P \\land \\neg Q$',
              atomic: 'double-negation',
            },
          ],
        },
        examples: [
          {
            title: 'a negated consequent',
            badge: 'symbols',
            lines: [
              { math: '$\\neg(P \\to \\neg Q) \\equiv \\neg(\\neg P \\lor \\neg Q)$', why: 'material implication' },
              { math: '$\\equiv \\neg\\neg P \\land \\neg\\neg Q$', why: 'De Morgan' },
              { math: '$\\equiv P \\land Q$', why: 'double negation twice', answer: true },
            ],
          },
          {
            title: 'in words',
            badge: 'sentence',
            lines: [
              { math: '$P$: it rains; $Q$: the game is canceled', why: 'name the parts' },
              { math: '$\\neg(P \\to Q) \\equiv P \\land \\neg Q$', why: 'negation of a conditional' },
              { math: 'It rains and the game is not canceled.', why: 'keep $P$, deny $Q$', answer: true },
            ],
          },
          {
            title: 'a nested arrow',
            badge: 'twice',
            lines: [
              { math: '$\\neg(P \\to (Q \\to R)) \\equiv P \\land \\neg(Q \\to R)$', why: 'outer arrow first' },
              { math: '$\\equiv P \\land (Q \\land \\neg R)$', why: 'negate the inner arrow' },
              { math: '$\\equiv P \\land Q \\land \\neg R$', why: 'associative law', answer: true },
            ],
          },
        ],
        examplesAfter: 'Compare $\\neg(P \\to Q)$ with your answer in the [equivalence validator](!/logic/propositional-logic/semantics/equivalence-validator).',
        visual: {
          caption:
            'The truth table of $P \\to Q$ has three T rows and one F row: $P = T$, $Q = F$. The negation flips every row, so it is T in exactly that one row and F elsewhere. A formula that is T in a single row is a single and-term, here $P \\land \\neg Q$. Any if-then answer, such as $P \\to \\neg Q$, is T in at least three rows, so it cannot be the negation.',
        },
        pitfalls: [
          {
            title: 'Answering with another conditional',
            wrong: '$\\neg(P \\to Q) \\equiv P \\to \\neg Q$',
            right: '$\\neg(P \\to Q) \\equiv P \\land \\neg Q$; at $P = F$ the arrow form is T but the negation is F',
          },
          {
            title: 'Negating both parts',
            wrong: '$\\neg(P \\to Q) \\equiv \\neg P \\land \\neg Q$',
            right: 'only the consequent is negated: $P \\land \\neg Q$',
          },
          {
            title: 'Answering with the inverse',
            wrong: 'the negation of "if it rains, the game is canceled" is "if it does not rain, the game is not canceled"',
            right: 'the negation is "it rains and the game is not canceled"',
          },
        ],
        related: ['converse-inverse-contrapositive', 'equivalence-laws', 'truth-table-or-laws'],
        builtOn: [
          { label: 'Negation of a conditional', url: ruleUrl('lg.negation-of-a-conditional') },
          { label: 'Material implication', url: ruleUrl('lg.material-implication') },
          { label: 'De Morgan law for disjunction', url: ruleUrl('lg.de-morgan-law-for-disjunction') },
          { label: 'What is a logical implication (lesson)', url: ruleUrl('lesson.lg.truth-tables.implications.1') },
        ],
      },
    },
    {
      id: 'converse-inverse-contrapositive',
      slug: 'converse-inverse-contrapositive',
      name: 'How to write the converse, inverse and contrapositive',
      description: 'Swap the parts for the converse, negate both for the inverse, do both for the contrapositive; only the contrapositive keeps the meaning.',
      uses: ['contrapositive equivalence', 'double negation', 'truth table'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Write the Converse, Inverse and Contrapositive | Learn Math Class',
        description: 'Write the converse, inverse and contrapositive of an if-then statement, and see why only the contrapositive is equivalent. Worked examples and common mistakes.',
        keywords: ['converse inverse contrapositive', 'how to write the contrapositive', 'converse of a conditional', 'inverse of a statement logic', 'contrapositive examples'],
      },
      page: {
        h1: 'How to Write the Converse, Inverse and Contrapositive',
        lead:
          'Every conditional $P \\to Q$ has three relatives. The converse swaps the parts, the inverse negates both, and the contrapositive does both. Only the contrapositive is equivalent to the original.',
        recognize:
          'The question asks for the converse, inverse or contrapositive of a statement, asks which of them are true, or calls for a proof by contrapositive: "if a number is divisible by 4, then it is even", $\\neg P \\to Q$, $P \\to \\neg Q$. Test: the statement is a single if-then; first find which part is the condition.',
        recognizeNote: `The three related forms are defined in ${link('lesson.lg.truth-tables.implications.2', 'converse, inverse and contrapositive')}.`,
        steps: {
          traceLabel: 'On $\\neg P \\to Q$',
          items: [
            {
              title: 'Write the statement as an arrow.',
              body: 'Find the condition (after "if") and the conclusion (after "then"). "$Q$ if $P$" and "$P$ only if $Q$" both mean $P \\to Q$.',
              state: 'antecedent $\\neg P$, consequent $Q$',
            },
            {
              title: 'Swap the parts for the converse.',
              body: `The ${link('lesson.lg.truth-tables.implications.4', 'converse')} reverses the arrow.`,
              state: 'converse: $Q \\to \\neg P$',
            },
            {
              title: 'Negate both parts for the inverse.',
              body: `The ${link('lesson.lg.truth-tables.implications.7', 'inverse')} keeps the order and negates each part.`,
              state: 'inverse: $\\neg\\neg P \\to \\neg Q$',
            },
            {
              title: 'Swap and negate for the contrapositive.',
              body: `The ${link('lesson.lg.truth-tables.implications.8', 'contrapositive')} reverses the arrow and negates both parts. It is equivalent to the original by ${link('lg.contrapositive-equivalence', 'contrapositive equivalence')}.`,
              state: 'contrapositive: $\\neg Q \\to \\neg\\neg P$',
            },
            {
              title: 'Cancel the double negations.',
              body: 'Write $\\neg\\neg P$ as $P$ so each form is easy to read. Then judge truth: the contrapositive matches the original, and the converse matches the inverse.',
              state: 'inverse $P \\to \\neg Q$; contrapositive $\\neg Q \\to P$',
              atomic: 'double-negation',
            },
          ],
        },
        examples: [
          {
            title: 'a negated conclusion',
            badge: 'symbols',
            lines: [
              { math: 'converse of $P \\to \\neg Q$: $\\neg Q \\to P$', why: 'swap the parts' },
              { math: 'inverse: $\\neg P \\to \\neg\\neg Q \\equiv \\neg P \\to Q$', why: 'negate both, then cancel' },
              { math: 'contrapositive: $\\neg\\neg Q \\to \\neg P \\equiv Q \\to \\neg P$', why: 'swap and negate, then cancel', answer: true },
            ],
          },
          {
            title: 'divisible by 4',
            badge: 'in words',
            lines: [
              { math: '$P$: $n$ is divisible by 4; $Q$: $n$ is even', why: 'the original is true' },
              { math: 'converse: if $n$ is even, it is divisible by 4', why: 'false: take $n = 6$' },
              { math: 'inverse: if $n$ is not divisible by 4, it is not even', why: 'false: take $n = 6$' },
              { math: 'contrapositive: if $n$ is not even, it is not divisible by 4', why: 'true, like the original', answer: true },
            ],
          },
          {
            title: 'compare the tables',
            badge: 'check',
            lines: [
              { math: '$P \\to Q$ and $\\neg Q \\to \\neg P$: T, F, T, T', why: 'the same column' },
              { math: '$Q \\to P$ and $\\neg P \\to \\neg Q$: T, T, F, T', why: 'the same column' },
              { math: '$P \\to Q \\equiv \\neg Q \\to \\neg P$ and $Q \\to P \\equiv \\neg P \\to \\neg Q$', why: 'two equivalent pairs', answer: true },
            ],
          },
        ],
        examplesAfter: 'Test any pair, for example $P \\to Q$ against $Q \\to P$, in the [equivalence validator](!/logic/propositional-logic/semantics/equivalence-validator).',
        visual: {
          caption:
            'The original $P \\to Q$ rules out one row: $P$ true and $Q$ false. The contrapositive $\\neg Q \\to \\neg P$ rules out the row where $\\neg Q$ is true and $\\neg P$ is false, which is the same row, so the two say the same thing. The converse rules out a different row, $Q$ true and $P$ false, and so does the inverse. That is why the four forms pair up.',
        },
        pitfalls: [
          {
            title: 'Taking the inverse for the contrapositive',
            wrong: 'the contrapositive of $P \\to Q$ is $\\neg P \\to \\neg Q$',
            right: 'it is $\\neg Q \\to \\neg P$: swap as well as negate',
          },
          {
            title: 'Assuming the converse is true',
            wrong: '"if divisible by 4, then even" is true, so "if even, then divisible by 4" is true',
            right: '$n = 6$ is even but not divisible by 4',
            note: 'This is the fallacy of affirming the consequent.',
          },
          {
            title: 'Negating only one part',
            wrong: 'the contrapositive of $P \\to Q$ is $\\neg Q \\to P$',
            right: 'negate both parts: $\\neg Q \\to \\neg P$',
          },
        ],
        related: ['negate-implication', 'equivalence-truth-table', 'truth-table-or-laws'],
        builtOn: [
          { label: 'Contrapositive equivalence', url: ruleUrl('lg.contrapositive-equivalence') },
          { label: 'Converse, inverse and contrapositive (lesson)', url: ruleUrl('lesson.lg.truth-tables.implications.2') },
          { label: 'Contrapositive equivalence as a biconditional (lesson)', url: ruleUrl('lesson.lg.truth-tables.biconditionals.8') },
        ],
      },
    },
    {
      id: 'parse-tree',
      slug: 'parse-tree',
      name: 'How to draw the parse tree of a formula',
      description: 'Find the main connective by precedence, make it the root, and split each part the same way until only letters remain.',
      uses: ['operator precedence', 'main connective', 'subformulas'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Draw the Parse Tree of a Formula | Learn Math Class',
        description: 'Draw the parse tree of a logic formula: restore brackets by precedence, find the main connective, split each part and evaluate from the leaves. With examples.',
        keywords: ['parse tree logic', 'how to draw a syntax tree', 'main connective of a formula', 'formation tree propositional logic', 'operator precedence logic'],
      },
      page: {
        h1: 'How to Draw the Parse Tree of a Formula',
        lead:
          'A parse tree shows how a formula is built: the connective applied last sits at the root, its parts hang below it, and the letters are the leaves. Find the main connective, split, and repeat on each part.',
        recognize:
          'The question asks for a parse tree, syntax tree or formation tree, for the main connective, or for the order in which a formula is evaluated: $\\neg P \\land Q \\to R$, $\\neg(P \\lor Q)$, $P \\land Q \\lor R$. Test: if brackets are missing, the tree decides how the formula is read.',
        recognizeNote: `Well-formed formulas and the precedence of connectives are defined in the ${link('lesson.lg.propositional-logic.syntax', 'syntax lesson')}; syntax trees are explained with the ${link('lesson.lg.propositional-logic.syntax.tree-builder', 'tree builder')}.`,
        steps: {
          traceLabel: 'On $\\neg P \\land Q \\to R$',
          items: [
            {
              title: 'Restore the brackets.',
              body: 'Precedence, tightest first: $\\neg$, $\\land$, $\\lor$, $\\to$, $\\leftrightarrow$. A $\\neg$ applies only to what directly follows it.',
              state: '$((\\neg P) \\land Q) \\to R$',
            },
            {
              title: 'Find the main connective.',
              body: 'It is the one connective outside all brackets, and it is applied last.',
              state: 'main connective: $\\to$',
            },
            {
              title: 'Make it the root and hang its parts below.',
              body: 'A binary connective gets a left and a right child; $\\neg$ gets a single child.',
              state: 'root $\\to$; children $\\neg P \\land Q$ and $R$',
            },
            {
              title: 'Repeat on every part.',
              body: 'Split each child at its own main connective until every branch ends in a letter.',
              state: '$\\land$ with children $\\neg P$ and $Q$; $\\neg$ with child $P$',
            },
            {
              title: 'Evaluate from the leaves up.',
              body: 'For one row, write the letter values at the leaves and compute each node from its children; the root gives the value of the formula.',
              state: 'at $P = F$, $Q = T$, $R = F$: $\\neg P$ is T, $\\land$ is T, the root is F',
            },
          ],
        },
        examples: [
          {
            title: 'a negated bracket',
            badge: 'negation at the root',
            lines: [
              { math: '$\\neg(P \\lor Q)$: main connective $\\neg$', why: 'it negates the whole bracket' },
              { math: 'root $\\neg$, child $\\lor$, leaves $P$ and $Q$', why: '4 nodes on 3 levels', answer: true },
            ],
          },
          {
            title: 'missing brackets',
            badge: 'precedence',
            lines: [
              { math: '$P \\land Q \\lor R$ reads $(P \\land Q) \\lor R$', why: '$\\land$ binds tighter than $\\lor$' },
              { math: 'root $\\lor$; children $P \\land Q$ and $R$', why: 'the main connective comes last' },
              { math: 'node $\\land$ with leaves $P$ and $Q$', why: '5 nodes in all', answer: true },
            ],
          },
          {
            title: 'a biconditional of arrows',
            badge: '9 nodes',
            lines: [
              { math: '$(P \\to Q) \\leftrightarrow (\\neg Q \\to \\neg P)$: root $\\leftrightarrow$', why: 'the only connective outside brackets' },
              { math: 'left: $\\to$ with leaves $P$ and $Q$', why: 'split the left part' },
              { math: 'right: $\\to$ with children $\\neg Q$ and $\\neg P$', why: 'split the right part' },
              { math: 'each $\\neg$ has one leaf: 9 nodes, depth 3', why: 'count down from the root', answer: true },
            ],
          },
        ],
        examplesAfter: 'Type any formula into the [parse tree builder](!/logic/propositional-logic/syntax/tree-builder) to see its tree and its truth table.',
        visual: {
          caption:
            'The tree is the formula with its grammar made visible. Two strings that look alike, such as $\\neg P \\land Q$ and $\\neg(P \\land Q)$, have different roots and so different truth tables. Evaluation always runs from the leaves to the root, the same inside-out order as the columns of a truth table: every inner node of the tree is one column of the table.',
        },
        pitfalls: [
          {
            title: 'Putting the negation at the root',
            wrong: '$\\neg P \\land Q$: root $\\neg$ above $P \\land Q$',
            right: 'the root is $\\land$; the $\\neg$ sits above $P$ alone',
          },
          {
            title: 'Reading the connectives left to right',
            wrong: '$P \\lor Q \\land R$ as $(P \\lor Q) \\land R$',
            right: 'by precedence it is $P \\lor (Q \\land R)$, with root $\\lor$',
            note: 'Some calculators give $\\land$ and $\\lor$ the same level; write the brackets to be safe.',
          },
          {
            title: 'Dropping the brackets in a chain of arrows',
            wrong: 'write $P \\to (Q \\to R)$ as $P \\to Q \\to R$',
            right: 'keep the brackets: at $P = F$, $Q = T$, $R = F$ the two groupings give T and F',
          },
        ],
        related: ['truth-table', 'simplify-propositions', 'truth-table-or-laws'],
        builtOn: [
          { label: 'Propositional logic syntax (lesson)', url: ruleUrl('lesson.lg.propositional-logic.syntax') },
          { label: 'Propositional logic (lesson)', url: ruleUrl('lesson.lg.propositional-logic') },
          { label: 'Truth table generator (lesson)', url: ruleUrl('lesson.lg.truth-tables') },
        ],
      },
    },

    // ═══ III. Strategy ══════════════════════════════════════════════════
    {
      id: 'truth-table-or-laws',
      slug: 'truth-table-or-laws',
      name: 'How to choose between a truth table and the laws',
      description: 'Pick a truth table or a chain of laws from what the question asks and how many letters the formula has.',
      uses: ['truth tables', 'laws of logic', 'normal forms'],
      level: 'strategy',
      tag: 'Strategy',
      meta: 'decision tree',
      category: 'strategy',
      indexed: false,
      seo: {
        title: 'Truth Table or Laws of Logic: Which Should I Use? (Decision Tree) | Learn Math Class',
        description: 'Choose between a truth table and the laws of logic for tautologies, equivalences, normal forms, simplification and negation, with a decision tree and links.',
        keywords: ['truth table or laws of logic', 'when to use a truth table', 'logical equivalence methods', 'propositional logic decision tree', 'how to prove a tautology'],
      },
      page: {
        h1: 'Truth Table or Laws of Logic: Which Should I Use?',
        lead:
          'A truth table checks a formula row by row and always works, but it doubles in size with every new letter. The laws of logic rewrite a formula without any rows and scale to any size. Name the task first, then count the letters.',
        recognize:
          'You have a propositional formula and are not sure whether to tabulate it or transform it: "is $((P \\lor Q) \\land \\neg P) \\to Q$ a tautology", "show $P \\to (Q \\to R) \\equiv (P \\land Q) \\to R$", "write $\\neg(P \\to Q) \\lor R$ in CNF". Test: say what the answer looks like (a column, a yes or no, a new formula) and count the letters $n$; a table has $2^n$ rows.',
        recognizeNote: `Truth tables and the laws, as two ways to verify an equivalence, are compared in the ${link('lesson.lg.propositional-logic.semantics.equivalences', 'equivalences lesson')}.`,
        tree: {
          rootId: 'task',
          svgW: 1100,
          nodes: {
            task: {
              type: 'q',
              text: 'What does the question ask for?',
              children: [
                { label: 'values in every row', to: 'tableLeaf' },
                { label: 'always true or false?', to: 'tautLeaf' },
                { label: 'two formulas equal?', to: 'size' },
                { label: 'a new form', to: 'form' },
                { label: 'deny an if-then', to: 'negLeaf' },
              ],
            },
            size: {
              type: 'q',
              text: 'How many letters in total?',
              children: [
                { label: '3 or fewer', to: 'eqTableLeaf' },
                { label: '4 or more', to: 'eqLawsLeaf' },
              ],
            },
            form: {
              type: 'q',
              text: 'Which form?',
              children: [
                { label: 'CNF or DNF', to: 'cnfLeaf' },
                { label: 'shortest form', to: 'simpLeaf' },
              ],
            },
            tableLeaf: { type: 'leaf', to: 'truth-table', short: 'Truth table' },
            tautLeaf: { type: 'leaf', to: 'tautology-check', short: 'Tautology check' },
            eqTableLeaf: { type: 'leaf', to: 'equivalence-truth-table', short: 'Compare columns' },
            eqLawsLeaf: { type: 'leaf', to: 'equivalence-laws', short: 'Chain of laws' },
            cnfLeaf: { type: 'leaf', to: 'convert-to-cnf', short: 'Normal form' },
            simpLeaf: { type: 'leaf', to: 'simplify-propositions', short: 'Simplify' },
            negLeaf: { type: 'leaf', to: 'negate-implication', short: 'Negate if-then' },
          },
          branches: [
            {
              condition: 'You need the value of a formula in every case, or the cases where it is true.',
              answer: `Build a table: it lists all $2^n$ assignments, and with up to three letters it is quick. Use [building a truth table](!${HUB}/truth-table); tables are introduced on the ${link('lesson.lg.truth-tables', 'truth tables page')}.`,
            },
            {
              condition: 'You must decide whether a formula is always true or always false.',
              answer: `With up to three letters, check every row: use [checking for a tautology](!${HUB}/tautology-check) or [checking for a contradiction](!${HUB}/contradiction-check). With four or more, simplify with the laws until you reach $\\top$ or $\\bot$. Both terms are defined in ${link('lesson.lg.truth-tables.tautologies.1', 'what is a tautology')}.`,
            },
            {
              condition: 'You must decide whether two formulas with at most three letters in total are equivalent.',
              answer: `Compare the columns: a table answers both yes and no, and a mismatched row is a ready counterexample. Use [proving equivalence with a truth table](!${HUB}/equivalence-truth-table), based on ${link('lesson.lg.truth-tables.biconditionals.2', 'biconditionals and logical equivalence')}.`,
            },
            {
              condition: 'You must prove an equivalence with four or more letters, or the question says to use the laws.',
              answer: `Rewrite one side into the other with named laws, since a table would need 16 rows or more. Use [proving an equivalence with the laws](!${HUB}/equivalence-laws) together with the ${link('lesson.lg.propositional-logic.laws', 'laws reference')}.`,
            },
            {
              condition: 'You must write a formula in conjunctive or disjunctive normal form.',
              answer: `Use the laws for a short form, or read the canonical form off the truth table when there are few letters. Use [converting to CNF](!${HUB}/convert-to-cnf) or [converting to DNF](!${HUB}/convert-to-dnf); both forms are explained with the ${link('lesson.lg.propositional-logic.syntax.normal-forms', 'normal forms converter')}.`,
            },
            {
              condition: 'You must simplify a formula or write it in its shortest form.',
              answer: `Use the laws in a fixed order: arrows, negations, distribution, collapse. Use [simplifying a logical expression](!${HUB}/simplify-propositions), then check the result with a table; the laws are listed in the ${link('lesson.lg.propositional-logic.laws', 'laws reference')}.`,
            },
            {
              condition: 'You must negate an if-then statement or say what would make it false.',
              answer: `No table is needed: the negation of $P \\to Q$ is always $P \\land \\neg Q$, by the ${link('lg.negation-of-a-conditional', 'negation of a conditional')}. Use [negating a conditional](!${HUB}/negate-implication); for the converse, inverse and contrapositive, use [writing the related conditionals](!${HUB}/converse-inverse-contrapositive).`,
            },
          ],
        },
        examplesAfter: 'Not sure how a formula behaves? The [proposition analyzer](!/logic/propositional-logic/syntax/tree-builder) shows its tree, its truth table and its verdict at once.',
        related: ['truth-table', 'equivalence-laws', 'simplify-propositions'],
        builtOn: [
          { label: 'Truth table generator (lesson)', url: ruleUrl('lesson.lg.truth-tables') },
          { label: 'Logical equivalences (lesson)', url: ruleUrl('lesson.lg.propositional-logic.semantics.equivalences') },
          { label: 'What is a tautology (lesson)', url: ruleUrl('lesson.lg.truth-tables.tautologies.1') },
          { label: 'Normal forms converter (lesson)', url: ruleUrl('lesson.lg.propositional-logic.syntax.normal-forms') },
        ],
      },
    },
  ],

  categories: [
    { id: 'atomic', label: 'Single-rule moves', blurb: 'Atomic · one rule, applied once' },
    { id: 'composite', label: 'Truth tables, equivalences and normal forms', blurb: 'Composite · each opens its own page' },
    { id: 'strategy', label: 'Choosing a method', blurb: 'Strategy' },
  ],

  filters: {
    level: {
      label: 'Level',
      options: [
        { value: 'atomic', label: 'Atomic' },
        { value: 'composite', label: 'Composite' },
        { value: 'strategy', label: 'Strategy' },
      ],
    },
  },

  sidebarLinks: {
    title: 'Other methods',
    links: [
      { url: '/algebra/methods', label: 'Algebra methods' },
      { url: '/set-theory/methods', label: 'Set theory methods' },
      { url: '/combinatorics/methods', label: 'Combinatorics methods' },
    ],
  },
};

export default logicMethods;
