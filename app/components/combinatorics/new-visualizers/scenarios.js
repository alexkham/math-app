// /components/visual-tools/scenarios.js
// Index/metadata for every combinatorics visualizer scene.
// As each scene is built, import it and add the entry here.

import FullPermutation from "./scenes/FullPermutation.jsx";

export const SCENARIOS = [
  {
    slug: "full-permutation",
    title: "Full Permutation",
    blurb: "Arrange all n distinct items linearly — order matters, no repetition.",
    formula: "P(n) = n!",
    family: "permutations",
    component: FullPermutation,
  },

  // ── To be built ──────────────────────────────────────
  // {
  //   slug: "permutation-with-identical-items",
  //   title: "Permutation with Identical Items",
  //   blurb: "Arrange n items where some are indistinguishable.",
  //   formula: "n! / (n₁! n₂! … nₖ!)",
  //   family: "permutations",
  //   component: PermutationWithIdenticalItems,
  // },
  // {
  //   slug: "partial-permutation",
  //   title: "Partial Permutation",
  //   blurb: "Choose and arrange r items out of n — order matters, no repetition.",
  //   formula: "P(n,r) = n! / (n−r)!",
  //   family: "permutations",
  //   component: PartialPermutation,
  // },
  // {
  //   slug: "permutation-with-repetition",
  //   title: "Permutation with Repetition",
  //   blurb: "Arrange r items from n with repetition allowed.",
  //   formula: "nʳ",
  //   family: "permutations",
  //   component: PermutationWithRepetition,
  // },
  // {
  //   slug: "circular-permutation",
  //   title: "Circular Permutation",
  //   blurb: "Arrange n items around a circle — rotations considered the same.",
  //   formula: "(n−1)!",
  //   family: "permutations",
  //   component: CircularPermutation,
  // },
  // {
  //   slug: "simple-combination",
  //   title: "Simple Combination",
  //   blurb: "Choose r items out of n — order does not matter.",
  //   formula: "C(n,r) = n! / (r! (n−r)!)",
  //   family: "combinations",
  //   component: SimpleCombination,
  // },
  // {
  //   slug: "partition-into-groups",
  //   title: "Partition into Groups",
  //   blurb: "Split n items into groups of fixed sizes.",
  //   formula: "n! / (n₁! n₂! … nₖ!)",
  //   family: "combinations",
  //   component: PartitionIntoGroups,
  // },
  // {
  //   slug: "weak-composition",
  //   title: "Weak Composition",
  //   blurb: "Distribute n identical items into r boxes — empty boxes allowed.",
  //   formula: "C(n+r−1, r−1)",
  //   family: "combinations",
  //   component: WeakComposition,
  // },
  // {
  //   slug: "strong-composition",
  //   title: "Strong Composition",
  //   blurb: "Distribute n identical items into r boxes — every box non-empty.",
  //   formula: "C(n−1, r−1)",
  //   family: "combinations",
  //   component: StrongComposition,
  // },
  // {
  //   slug: "distribution-into-cells",
  //   title: "Distribution into Cells",
  //   blurb: "Place n distinguishable items into r distinguishable cells.",
  //   formula: "rⁿ",
  //   family: "combinations",
  //   component: DistributionIntoCells,
  // },
];

// Convenience map for slug lookup.
export const SCENARIO_BY_SLUG = Object.fromEntries(
  SCENARIOS.map((s) => [s.slug, s])
);