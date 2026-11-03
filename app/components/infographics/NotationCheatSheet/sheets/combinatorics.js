// Notation cheat sheet for the whole combinatorics section.
// Rows are short forms of the notation cards on its pages; each group links to its card.
const sheet = {
  id: 'combinatorics-notation-cheat-sheet',
  source: '/combinatorics',
  eyebrow: 'Notation · Cheat sheet',
  title: 'Combinatorics Notation at a Glance',
  lead: 'The marks from the notation cards across the combinatorics pages: how each is read and what it means. Every group links to the full card on its page.',
  groups: [
    {
      page: 'Permutations', href: '/combinatorics/permutations#notation',
      rows: [
        { tex: '$n!$', read: 'n factorial', means: '$n \\times (n-1) \\times \\cdots \\times 1$: the count of complete rearrangements.' },
        { tex: '$P(n, r)$ · $_nP_r$', read: 'P n r; n permute r', means: 'Ordered selections of $r$ from $n$: $n!/(n-r)!$.' },
        { tex: '$!n$ · $D_n$', read: 'subfactorial n; derangements of n', means: 'Permutations that leave nothing in its place.' },
      ],
    },
    {
      page: 'Binomial coefficient', href: '/combinatorics/binomial-coefficient#notation',
      rows: [
        { tex: '$\\binom{n}{k}$', read: 'n choose k', means: 'Unordered selections of $k$ from $n$; no bar between the numbers.' },
        { tex: '$C(n, k)$ · $_nC_k$', read: 'C n k; n choose k on a calculator', means: 'The linear spellings: introductory texts, and calculator keys.' },
        { tex: '$C_n^k$ vs $C_k^n$', read: 'C with n and k in the corners', means: 'The European forms; which corner holds $n$ varies by tradition.' },
      ],
    },
    {
      page: 'Binomial theorem', href: '/combinatorics/binomial-theorem#notation',
      rows: [
        { tex: '$\\textstyle\\sum_{k=0}^{n}$', read: 'the sum as k runs from zero to n', means: 'Sigma folds the $n + 1$ terms of the expansion into one expression.' },
        { tex: '$T_{k+1}$', read: 'the k-plus-first term', means: 'The term containing $b^k$; numbering starts at $T_1$.' },
        { tex: '$\\textstyle\\sum_{k_1 + \\cdots + k_r = n}$', read: 'the sum over all splittings of n', means: 'One term for every way of writing $n$ as $r$ non-negative parts.' },
      ],
    },
  ],
  clashes: {
    label: 'Same marks, different job',
    rows: [
      { tex: '$\\binom{n}{k}$', text: 'A count; not a fraction with its bar missing, and not a column vector.' },
      { tex: '$P(n, r)$ vs $P(A)$', text: 'A permutation count here; a probability in probability.' },
      { tex: '$!n$ vs $n!$', text: 'The position decides: derangements before the number, factorial after it.' },
      { tex: '$C_n^k$', text: 'Read the corners by the book’s convention; $n$ may sit on top or below.' },
    ],
  },
  symbolsHref: '/math-symbols/combinatorics#basic_notations,permutations_and_combinations,binomial_theorem',
  symbolsLabel: 'Combinatorics symbols table',
  parentHref: '/combinatorics',
  parentLabel: 'Combinatorics',
};

export default sheet;
