// Corrected problem data for the 3-Set Venn Diagram tool (VennExplorer.jsx).
//
// The component ships a `defaultProblems` array containing one problem,
// "Demographics Study", which is mathematically inconsistent: its solution
// [0.08, 0.02, 0.24, 0.16, 0.30, 0.10, 0.00, 0.10] gives
// P(B) = r1+r2+r5+r6 = 0.50 while the problem states the marginal P(B) = 0.2,
// and calculation #5 prints "0.2 - 0.1 - 0.0 = 0.10" while region 5 is 0.30
// (with the correct value that line would give -0.20, a negative probability).
//
// The route already renders <VennExplorer problemsData={...} />, and the
// component uses problemsData whenever it is non-empty, so the repair lives
// here and the component is left untouched.
//
// THE REPAIR - the eight region values are kept exactly as shipped, because
// they are internally consistent; what was wrong was the stated marginal and
// two missing givens:
//
//   P(B) = 0.5, not 0.2
//   event B relabelled "Employed", not "Unemployed" - see below
//   two constraints added: P(B n C) = 0.38 and P(A n B n C) = 0.08
//
// Deriving all eight regions from those givens reproduces the shipped
// solution exactly:
//
//   P(A n B) = P(A) - P(A n Bc) = 0.5 - 0.4  = 0.1
//   P(A n C) = P(A) - P(A n Cc) = 0.5 - 0.18 = 0.32
//   r1 = 0.08 (given)
//   r2 = P(A n B) - r1 = 0.1  - 0.08 = 0.02
//   r3 = P(A n C) - r1 = 0.32 - 0.08 = 0.24
//   r4 = P(A n Bc)     - r3 = 0.4  - 0.24 = 0.16
//   r5 = P(B n C)      - r1 = 0.38 - 0.08 = 0.30
//   r6 = P(B) - P(A n B) - r5 = 0.5  - 0.1  - 0.30 = 0.10
//   r7 = P(C) - P(A n C) - r5 = 0.62 - 0.32 - 0.30 = 0.00
//   r8 = 1 - 0.9 = 0.10
//
// WHY "Employed" AND NOT "Unemployed". The repair forces P(B) = 0.5, and a
// 50% unemployment rate is not a figure to put in front of a student as the
// tool's only worked example. Region 7 settles it independently: it is 0.00,
// and under the old label that region reads "not a woman, employed, academic"
// - a population with zero employed male academics. Relabelled, it reads "not
// a woman, not employed, academic": every male academic in the survey is
// employed, which is an ordinary thing for a survey to find. No numeral
// changes with the relabel; only the eight explanation strings do.
//
// Two of the component's hardcoded "General Solution Steps" quote this
// problem's numbers directly ("P(A n B) = 0.5 - 0.4 = 0.1" and
// "P(A n C) = 0.5 - 0.18 = 0.32"); both stay correct under this repair, which
// is a further reason to keep the region values rather than restate.

export const threeSetProblems = [
  {
    name: "Demographics Study",
    events: ["Woman", "Employed", "Academic"],
    marginals: [0.5, 0.5, 0.62],
    constraints: [
      { display: "P(A ∩ Bᶜ) = 0.4" },
      { display: "P(A ∩ Cᶜ) = 0.18" },
      { display: "P(B ∩ C) = 0.38" },
      { display: "P(A ∩ B ∩ C) = 0.08" }
    ],
    solution: [0.08, 0.02, 0.24, 0.16, 0.30, 0.10, 0.00, 0.10],
    explanations: [
      "Woman AND Employed AND Academic",
      "Woman AND Employed AND NOT Academic",
      "Woman AND NOT Employed AND Academic",
      "Woman AND NOT Employed AND NOT Academic",
      "NOT Woman AND Employed AND Academic",
      "NOT Woman AND Employed AND NOT Academic",
      "NOT Woman AND NOT Employed AND Academic",
      "NOT Woman AND NOT Employed AND NOT Academic"
    ],
    calculations: {
      0: { step: "Given P(A∩B∩C)", formula: "P(A∩B∩C) = 0.08" },
      1: { step: "P(A∩B∩Cᶜ) = P(A∩B) - P(A∩B∩C)", formula: "= 0.1 - 0.08 = 0.02" },
      2: { step: "P(A∩Bᶜ∩C) = P(A∩C) - P(A∩B∩C)", formula: "= 0.32 - 0.08 = 0.24" },
      3: { step: "P(A∩Bᶜ∩Cᶜ) = P(A∩Bᶜ) - P(A∩Bᶜ∩C)", formula: "= 0.4 - 0.24 = 0.16" },
      4: { step: "P(Aᶜ∩B∩C) = P(B∩C) - P(A∩B∩C)", formula: "= 0.38 - 0.08 = 0.30" },
      5: { step: "P(Aᶜ∩B∩Cᶜ) = P(B) - P(A∩B) - P(Aᶜ∩B∩C)", formula: "= 0.5 - 0.1 - 0.30 = 0.10" },
      6: { step: "P(Aᶜ∩Bᶜ∩C) = P(C) - P(A∩C) - P(Aᶜ∩B∩C)", formula: "= 0.62 - 0.32 - 0.30 = 0.00" },
      7: { step: "P(Aᶜ∩Bᶜ∩Cᶜ) = 1 - sum of all other regions", formula: "= 1 - 0.9 = 0.10" }
    }
  }
];

export default threeSetProblems;
