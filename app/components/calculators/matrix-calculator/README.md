# Matrix Calculator — Skipped Operations

Operations listed below are **not currently implemented** and are **not rendered in the UI**. They are excluded from the `operationsByType` lists in the component.

## Single Matrix Operations

| Operation | Reason | Difficulty | Notes |
|---|---|---|---|
| **Eigenvalues** | Requires QR algorithm (iterative, convergence-dependent) | Hard | Closed-form exists only for 2×2 and 3×3 (cubic formula). General NxN needs iterative QR with Wilkinson shifts. |
| **Eigenvectors** | Depends on eigenvalue computation | Hard | For each eigenvalue λ, solve (A − λI)v = 0. Blocked by eigenvalue implementation. |
| **Characteristic Polynomial** | Requires Faddeev–LeVerrier algorithm or similar | Medium-Hard | Returns coefficients of det(A − λI). Non-trivial for arbitrary N. |
| **QR Decomposition** | Gram-Schmidt variant with numerical stability concerns | Medium-Hard | Modified Gram-Schmidt or Householder reflections needed for stability. Classical Gram-Schmidt loses orthogonality. |
| **Singular Value Decomposition** | Depends on eigenvalue decomposition of AᵀA | Hard | Full SVD (U, Σ, Vᵀ) requires computing eigenvalues/eigenvectors of AᵀA. Most complex operation on the list. |

## Two Matrix Operations

| Operation | Reason | Difficulty | Notes |
|---|---|---|---|
| **Matrix Power** | Ambiguous semantics in two-matrix context | N/A | Unclear what "power" means with two matrices. Use **Matrix Power (Scalar)** under Scalar Operations instead, which raises A to an integer exponent. |

## Scalar Operations

| Operation | Reason | Difficulty | Notes |
|---|---|---|---|
| **Exponential** | Taylor series truncation, convergence issues | Hard | e^A = Σ Aⁿ/n! — requires deciding truncation depth, handling convergence, numerical overflow for large matrices. Padé approximation is more robust but complex. |
| **Logarithm** | Inverse of matrix exponential | Hard | Requires eigenvalue decomposition or iterative methods. Only defined for matrices with no eigenvalues on ℝ⁻. |

---

## What IS Implemented

### Single (6 operations)
Transpose, Determinant, Inverse, Trace, Rank, LU Decomposition

### Two (7 operations)
Addition, Subtraction, Multiplication, Element-wise Multiplication, Kronecker Product, Commutator, Anti-commutator

### Scalar (4 operations)
Scalar Multiplication, Scalar Addition, Scalar Subtraction, Matrix Power (Scalar)

### System (6 operations)
Solve Linear System, Gaussian Elimination, Gauss-Jordan, Cramer's Rule, Matrix Equation AX=B, Least Squares Solution

**Total: 23 implemented, 8 skipped**