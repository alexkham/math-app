// Per-cell explanations for the 2x2 contingency table.
//
// The 2x3, 2x4 and 3x3 tables each shipped with one of these; the 2x2 - which
// is the DEFAULT view of the contingency-tables page - did not, so selecting a
// cell there produced no explanation at all. This file closes that gap, using
// the same key vocabulary the component already dispatches on:
//
//   cell keys        AB, AnotB, notAB, notAnotB
//   conditional keys <cell>-<marginal>, e.g. AB-A (P(B|A)) or AB-B (P(A|B))
//
// Wording follows the 2x3 file so the four tables read consistently.

const explanations2x2 = {
  default:
    "No selection made. Click any cell in the main table to see its joint probability explanation, " +
    "or click any row in the conditional panels to understand how probabilities change when " +
    "conditioning on known information.",

  AB:
    "This cell shows the joint probability P(A ∩ B), the probability that A and B both occur. " +
    "It is calculated as P(A) × P(B|A), combining the marginal probability of A with the conditional " +
    "probability of B given A.",
  AnotB:
    "This cell shows the joint probability P(A ∩ Bᶜ), the probability that A occurs and B does not. " +
    "It is calculated as P(A) × P(Bᶜ|A), and together with P(A ∩ B) it accounts for the whole of row A.",
  notAB:
    "This cell shows the joint probability P(Aᶜ ∩ B), the probability that B occurs while A does not. " +
    "It is calculated as P(Aᶜ) × P(B|Aᶜ).",
  notAnotB:
    "This cell shows the joint probability P(Aᶜ ∩ Bᶜ), the probability that neither event occurs. " +
    "It is calculated as P(Aᶜ) × P(Bᶜ|Aᶜ), and the four cells together sum to 1.",

  'AB-A':
    "This shows P(B|A), the conditional probability of B given that A has occurred. Knowing A " +
    "restricts the sample space to row A, and the figure is the joint probability P(A ∩ B) divided " +
    "by the marginal P(A).",
  'AnotB-A':
    "This shows P(Bᶜ|A), the conditional probability that B does not occur given that A has. It is " +
    "P(A ∩ Bᶜ) divided by P(A), and it is the complement of P(B|A) within row A.",
  'notAB-notA':
    "This shows P(B|Aᶜ), the conditional probability of B given that A has not occurred. The sample " +
    "space is restricted to row Aᶜ, and the figure is P(Aᶜ ∩ B) divided by P(Aᶜ).",
  'notAnotB-notA':
    "This shows P(Bᶜ|Aᶜ), the probability that neither event occurs given that A did not. It is " +
    "P(Aᶜ ∩ Bᶜ) divided by P(Aᶜ), completing row Aᶜ.",

  'AB-B':
    "This shows P(A|B), the conditional probability of A given that B has occurred. Note that this " +
    "conditions on the COLUMN rather than the row: the figure is P(A ∩ B) divided by the marginal " +
    "P(B), and it is generally not equal to P(B|A).",
  'notAB-B':
    "This shows P(Aᶜ|B), the probability that A did not occur given that B did. It is P(Aᶜ ∩ B) " +
    "divided by P(B), and together with P(A|B) it sums to 1 within column B.",
  'AnotB-notB':
    "This shows P(A|Bᶜ), the conditional probability of A given that B did not occur. It is " +
    "P(A ∩ Bᶜ) divided by the marginal P(Bᶜ).",
  'notAnotB-notB':
    "This shows P(Aᶜ|Bᶜ), the probability that neither event occurred given that B did not. It is " +
    "P(Aᶜ ∩ Bᶜ) divided by P(Bᶜ), completing column Bᶜ.",
};

export default explanations2x2;
