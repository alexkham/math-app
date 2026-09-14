import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import LinearSystemWrapper from '../../../../app/components/linear-algebra copy/matrix/LinearSystemWrapper'
import linearSystemDiagrams from '../../../../app/components/linear-algebra copy/matrix/linearSystemDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'solution set of a linear system',
    'solving systems of linear equations',
    'reduced row echelon form',
    'rref calculator',
    'row echelon form step by step',
    'unique solution no solution infinitely many',
    'consistent inconsistent system',
    'free variables',
    'parametric solution',
    'augmented matrix',
    'gauss jordan elimination',
    'homogeneous system null space',
    'linear system visualizer',
    'linear algebra visualizer',
    'interactive linear systems tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Augmented matrix** — $[A \\mid \\mathbf{b}]$, the coefficients and the constants side by side, one row per equation.

**Row operations** — swapping two rows, scaling a row by a non-zero constant, and adding a multiple of one row to another; each rewrites the system without changing its solutions.

**Row echelon form** — pivots step to the right down the rows, with zeros below each pivot; the result of the forward pass.

**Reduced row echelon form** — echelon form with every pivot equal to $1$ and zeros above each pivot as well; the result of the backward pass, and unique for a given matrix.

**Pivot column, leading variable** — a column of $A$ containing a pivot; its variable is determined by the others.

**Free column, free variable** — a column of $A$ with no pivot; its variable can be chosen at will.

**Consistent** — the system has at least one solution; inconsistent if a row reduces to $0 = c$ with $c \\neq 0$.

**Particular solution and directions** — for infinitely many solutions, $\\mathbf{x} = \\mathbf{p} + t_1 \\mathbf{v}_1 + \\cdots$: one solution plus one direction per free variable.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Choose a system, then watch the augmented matrix reduce until the answer can be read off.

• Use the **Preset** pills for six systems: one solution, infinitely many, none, a homogeneous system, an overdetermined but consistent one, and one with two free variables
• Use the **Shape** steppers for $1$ to $4$ equations and $1$ to $4$ unknowns, independently; resizing keeps the existing entries
• Edit any entry of $A$ or of $\\mathbf{b}$ directly, or press **Shuffle** for a random system; half the time one equation is a multiple of another, so the non-unique cases turn up often
• Hover the **?** icon for a reminder of the three outcomes and how the reduced form reveals them
• Press play or step manually; the step log on the right lists every row operation

The run has a forward pass, a consistency check, and a backward pass, and it ends in one of three final scenes. The constants stay in amber throughout, so the right-hand side is always distinguishable from the coefficients.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `How the Reduction Runs`,
      content: `The visualizer performs Gauss-Jordan elimination in the standard order.

• **Forward pass** — for each column of $A$ in turn: find a pivot at or below the current row, swapping rows if needed; mark it; clear every entry below it. A column with no available pivot is skipped, and its variable is declared free
• **Consistency check** — if any row now reads $0 \\cdots 0 \\mid c$ with $c \\neq 0$, the system is inconsistent and the run ends there
• **Backward pass** — from the last pivot up: divide the pivot row so the pivot is $1$, then clear every entry above the pivot
• **Classification** — with a pivot in every column of $A$, the right-hand column is the solution; otherwise the solution is written as a particular solution plus one direction per free variable

The row operations act on the whole augmented row, constants included. That is what makes them legal: each one replaces an equation by an [equivalent equation](!/algebra/equations), so the solution set never changes from the first scene to the last.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `Reading the Scene Player`,
      content: `Each scene shows the augmented matrix with the current operation in the caption.

• In a **pivot** scene, the pivot cell is accent and its row is primary
• In an **eliminate** or **back-eliminate** scene, the pivot row is primary, the row being changed is secondary, and the entry being cleared is accent
• In a **normalize** scene, the pivot being scaled to $1$ is accent
• In a **swap** scene, the two rows exchanging places are primary and secondary
• In a **skip** scene, the zero entries scanned are muted, and the caption names the free variable
• In the **inconsistent** scene, the offending row is highlighted and its constant marked
• In the **unique** scene, the pivots and the right-hand column are highlighted and the solution vector appears beside the matrix
• In the **infinite** scene, the pivots and free columns are highlighted and the particular solution and direction vectors appear beside the matrix, with the parameters named`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `Choosing a System`,
      content: `The six presets cover the whole map.

• **One solution** — three equations, three unknowns, three pivots, solution $(5, 3, -2)$; the textbook case
• **Infinitely many** — two equations, three unknowns; the middle column has no pivot, and the solution is a line $\\mathbf{p} + t\\mathbf{v}$
• **No solution** — three equations, two unknowns, and the second equation contradicts twice the first; a row reduces to $0 = 1$
• **Homogeneous** — $\\mathbf{b} = \\mathbf{0}$; always consistent, and the solution set is the null space of $A$, here a line through the origin
• **Overdetermined** — three equations, two unknowns, but consistent; the third equation is implied by the first two and reduces to a zero row
• **Two free variables** — two equations, four unknowns; the solution set is a plane, with two parameters

The shape of the system does not decide the outcome. Overdetermined systems can be consistent, square systems can have infinitely many solutions, and only the reduction says which.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `The Three Outcomes`,
      content: `A system $A\\mathbf{x} = \\mathbf{b}$ of $m$ equations in $n$ unknowns has exactly one of three solution sets, and the reduced row echelon form of $[A \\mid \\mathbf{b}]$ displays which.

**No solution.** Some row of the reduced matrix is $(0, \\ldots, 0 \\mid c)$ with $c \\neq 0$, the equation $0 = c$. The system is inconsistent: $\\mathbf{b}$ is not a combination of the columns of $A$. In [rank](!/linear-algebra/matrix/rank#1) terms, $\\operatorname{rank}[A \\mid \\mathbf{b}] = \\operatorname{rank} A + 1$.

**Exactly one solution.** The system is consistent and every column of $A$ has a pivot, so $\\operatorname{rank} A = n$. Each row of the reduced matrix reads $x_j = c_j$, and the solution is the right-hand column. This needs at least as many equations as unknowns, $m \\geq n$, but is not guaranteed by it.

**Infinitely many solutions.** The system is consistent and some column of $A$ has no pivot, so $\\operatorname{rank} A < n$. Each free variable is a parameter, and each leading variable is its constant minus the free-column entries times the parameters:

$$\\mathbf{x} = \\mathbf{p} + t_1 \\mathbf{v}_1 + \\cdots + t_k \\mathbf{v}_k, \\qquad k = n - \\operatorname{rank} A$$

Here $\\mathbf{p}$ is the solution with all parameters zero, and each $\\mathbf{v}_j$ is the direction obtained by setting one parameter to $1$. The $\\mathbf{v}_j$ [span](!/linear-algebra/vector-spaces/span#1) the null space of $A$, and the solution set is that null space shifted to pass through $\\mathbf{p}$.

The tool reduces all the way to reduced form because that is where the three cases separate cleanly. For echelon forms and the reduction algorithm in detail, see the [echelon form theory page](!/linear-algebra/linear-systems/echelon-form); for the rank conditions behind the three cases, see the [solvability theory page](!/linear-algebra/linear-systems/solvability); for the homogeneous case, see the [homogeneous systems page](!/linear-algebra/linear-systems/homogeneous).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Key Properties`,
      content: `Facts that hold for every system, whatever its shape.

• **Row operations preserve solutions**: each is reversible and replaces an equation by an equivalent one
• **Reduced form is unique**: whatever sequence of operations is used, the reduced row echelon form of a matrix is the same
• **Consistency**: $A\\mathbf{x} = \\mathbf{b}$ is consistent exactly when $\\operatorname{rank}[A \\mid \\mathbf{b}] = \\operatorname{rank} A$
• **Uniqueness**: a consistent system has a unique solution exactly when $\\operatorname{rank} A = n$
• **Number of parameters**: a consistent system with $\\operatorname{rank} A = r$ has an $(n - r)$-parameter family of solutions
• **Homogeneous systems** are always consistent, since $\\mathbf{x} = \\mathbf{0}$ works, and have non-trivial solutions exactly when $\\operatorname{rank} A < n$
• **Structure**: the solutions of $A\\mathbf{x} = \\mathbf{b}$ are one particular solution plus every solution of $A\\mathbf{x} = \\mathbf{0}$
• **Square case**: for $m = n$, a unique solution exists exactly when $\\det A \\neq 0$, which is where Cramer's rule applies`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `Why It Matters`,
      content: `Classifying a system is the first question asked of any set of linear constraints.

• **Modelling**: whether a set of conditions can be met at all, met in exactly one way, or leaves freedom, is the inconsistent, unique and infinite case respectively
• **Circuits, structures, balances**: node and loop equations, force balances and chemical balances are linear systems, and free variables correspond to undetermined currents, redundant members or adjustable proportions
• **Least squares**: when a system is inconsistent, as measured data usually makes it, the next question is the closest consistent system, which is what [least squares](!/linear-algebra/orthogonality/least-squares#3) answers
• **Null spaces and eigenvectors**: [eigenvectors](!/linear-algebra/eigen#2) are the non-trivial solutions of the homogeneous system $(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$, read off exactly as in the homogeneous preset
• **Rank in practice**: the reduction is the practical way to find rank, and the free-variable count is the nullity
• **Algorithms**: Gauss-Jordan elimination is the [basis](!/linear-algebra/vector-spaces#2) of every direct linear solver, with pivoting added for numerical stability`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Worked Example`,
      content: `Take the default preset,

$$\\left[\\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\\\ 0 & 2 & 5 & -4 \\\\ 2 & 5 & -1 & 27 \\end{array}\\right]$$

**Forward pass.** Column $1$: pivot $1$ in row $1$; row $2$ already has $0$; $R_3 \\leftarrow R_3 - 2R_1$ gives $(0, 3, -3 \\mid 15)$. Column $2$: pivot $2$ in row $2$; $R_3 \\leftarrow R_3 - \\tfrac{3}{2}R_2$ gives $(0, 0, -\\tfrac{21}{2} \\mid 21)$. Column $3$: pivot $-\\tfrac{21}{2}$ in row $3$.

$$\\left[\\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\\\ 0 & 2 & 5 & -4 \\\\ 0 & 0 & -\\tfrac{21}{2} & 21 \\end{array}\\right]$$

No row reads $0 = c$, so the system is consistent, and with three pivots for three unknowns the solution is unique.

**Backward pass.** $R_3 \\leftarrow R_3 / (-\\tfrac{21}{2})$ gives $(0, 0, 1 \\mid -2)$. Clear above: $R_2 \\leftarrow R_2 - 5R_3 = (0, 2, 0 \\mid 6)$ and $R_1 \\leftarrow R_1 - R_3 = (1, 1, 0 \\mid 8)$. Then $R_2 \\leftarrow R_2 / 2 = (0, 1, 0 \\mid 3)$ and $R_1 \\leftarrow R_1 - R_2 = (1, 0, 0 \\mid 5)$.

$$\\left[\\begin{array}{ccc|c} 1 & 0 & 0 & 5 \\\\ 0 & 1 & 0 & 3 \\\\ 0 & 0 & 1 & -2 \\end{array}\\right], \\qquad \\mathbf{x} = (5, 3, -2)$$

Check: $5 + 3 - 2 = 6$, $6 - 10 = -4$, $10 + 15 + 2 = 27$.

For contrast, the **infinitely many** preset reduces to rows $(1, 2, 0 \\mid 4)$ and $(0, 0, 1 \\mid 1)$: $x_2$ is free, $x_1 = 4 - 2x_2$, $x_3 = 1$, so $\\mathbf{x} = (4, 0, 1) + t(-2, 1, 0)$. And the **no solution** preset produces the row $(0, 0 \\mid 1)$ after one elimination, the equation $0 = 1$.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `A few mistakes recur.

• **Forgetting the constants** — a row operation applies to the whole augmented row; leaving $\\mathbf{b}$ unchanged turns a legal move into a different system
• **Reading a zero row as inconsistency** — $(0, 0, 0 \\mid 0)$ is a redundant equation, harmless; only $(0, \\ldots, 0 \\mid c)$ with $c \\neq 0$ signals no solution
• **Counting equations to predict the outcome** — more equations than unknowns does not mean no solution, and fewer does not mean infinitely many; the pivots decide
• **Stopping at echelon form for the infinite case** — the parametric solution is easiest to write from reduced form, where each leading variable appears in exactly one row
• **Choosing the wrong free variables** — free variables are the non-pivot columns; picking a pivot variable as a parameter produces a valid but tangled description
• **Missing the swap** — a $0$ in the pivot position with a non-zero entry below it is not a free variable; swap and continue`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `[Gaussian elimination](!/linear-algebra/visual-tools/gauss-elimination) — the forward pass on its own, which reaches echelon form.

[Matrix rank](!/linear-algebra/visual-tools/matrix-rank) — the pivot count, which decides uniqueness; rank plus free variables equals the number of unknowns.

[Cramer's rule](!/linear-algebra/visual-tools/cramers-rule) — the square, non-singular case solved by determinants instead.

[LU decomposition](!/linear-algebra/visual-tools/lu-decomposition) — the forward pass with the multipliers kept.

[Null space](!/linear-algebra/visual-tools/four-fundamental-subspaces) — the solution set of the homogeneous system, spanned by the direction vectors.

**Column space** — consistency means $\\mathbf{b}$ lies in it.

[Least squares](!/linear-algebra/visual-tools/least-squares) — what to do when the system is inconsistent.

[Eigenvectors](!/linear-algebra/visual-tools/eigenvalues-eigenvectors) — solutions of a homogeneous system with a parameter.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `The Opening Scene: The Augmented Matrix`,
      content: `The player opens with $[A \\mid \\mathbf{b}]$, the coefficients on the left and the constants in amber on the right, one row per equation. At the default preset it is $3 \\times 4$.

Nothing has been reduced yet. What the scene establishes is that the system and the [matrix](!/linear-algebra/matrix#1) are the same object written two ways, and that operations on rows are operations on equations.`,
      before: ``,
      after: `The augmented matrix drops the variable names because they carry no information the column position does not. Column $j$ is $x_j$ wherever it sits, and the bar, or here the colour, marks the constants.

The three outcomes are not visible yet. They emerge from the reduction, and the shape of the matrix alone, three equations for three unknowns here, does not predict which one it will be.`,
      link: '',
    },
    obj12: {
      title: `The Forward Pass`,
      content: `The forward pass works down the columns of $A$: find a pivot, swap rows if it sits lower, and clear everything beneath it by subtracting multiples of the pivot row, constants included.

The frozen picture below is the first elimination of the default preset, $R_3 \\leftarrow R_3 - 2R_1$, with the pivot row primary, the row being changed secondary, and the cleared entry marked.`,
      before: ``,
      after: `Every operation here is reversible, which is why the solution set survives: adding twice row one to row three would restore the original. The reduction rewrites the equations in a form that is easier to read, and nothing more.

This pass is the same one the rank tool performs, and it does the same job: the pivots it finds count the independent equations. Where it differs is that the constants come along, so that the consistency check and the eventual solution are available at the end.`,
      link: '',
    },
    obj13: {
      title: `The Backward Pass`,
      content: `Once the forward pass is done and no row contradicts itself, the backward pass makes each pivot $1$ and clears the entries above it, working from the last pivot up.

The frozen picture below is the first backward elimination of the default preset, $R_2 \\leftarrow R_2 - 5R_3$, clearing the entry above the third pivot.`,
      before: ``,
      after: `Echelon form would already allow back substitution by hand. Reduced form goes one step further so that each leading variable appears in exactly one equation with coefficient $1$, and that equation states its value directly.

The reduced form is unique: however the operations are sequenced, the same matrix results. That uniqueness is what makes it a canonical description of the solution set rather than one convenient rewriting among many.`,
      link: '',
    },
    obj14: {
      title: `One Solution`,
      content: `When the system is consistent and every column of $A$ has a pivot, the reduced matrix is the identity next to the solution.

The frozen picture below is the default preset finished: pivots down the diagonal, the right-hand column reading $5, 3, -2$, and the solution [vector](!/linear-algebra/vectors#1) beside it.`,
      before: ``,
      after: `Three pivots for three unknowns is the condition. It says the columns of $A$ are independent, so $\\mathbf{b}$ is reached by exactly one combination of them, and each row of the reduced matrix names one coordinate of that combination.

For a square system this is the same as $\\det A \\neq 0$, and the same solution could have been produced by Cramer's rule. The reduction is the cheaper route and, unlike the determinant formula, it also handles the two other outcomes.`,
      link: '',
    },
    obj15: {
      title: `No Solution`,
      content: `When a row reduces to zeros on the left and a non-zero constant on the right, the equation it represents is $0 = c$, and nothing satisfies it.

The frozen picture below is the no-solution preset at that moment: the third row reading $(0, 0 \\mid 1)$, highlighted, after the second equation was found to contradict twice the first.`,
      before: ``,
      after: `The contradiction was present in the original equations, just not visible: $x_1 + x_2 = 2$ and $2x_1 + 2x_2 = 5$ cannot both hold. Elimination exposes it by subtracting one from the other.

In terms of the columns, $\\mathbf{b}$ lies outside the column space of $A$. The rank of the augmented matrix exceeds the rank of $A$ by one, which is the algebraic form of the test. Inconsistent systems are the normal case for measured data, and least squares is the tool for the closest consistent replacement.`,
      link: '',
    },
    obj16: {
      title: `Infinitely Many Solutions`,
      content: `When the system is consistent but some column of $A$ has no pivot, the corresponding variable is free, and the solution set is a line, plane or higher-dimensional flat.

The frozen picture below is the infinitely-many preset finished: reduced rows $(1, 2, 0 \\mid 4)$ and $(0, 0, 1 \\mid 1)$, the free column marked, and beside the matrix the particular solution $\\mathbf{p} = (4, 0, 1)$ and the direction $\\mathbf{v}_1 = (-2, 1, 0)$.`,
      before: ``,
      after: `Reading the parametric form from reduced rows is mechanical. Set the free variable $x_2 = t$; the first row says $x_1 + 2t = 4$, so $x_1 = 4 - 2t$; the second says $x_3 = 1$. Collect the constants into $\\mathbf{p}$ and the coefficients of $t$ into $\\mathbf{v}_1$, and $\\mathbf{x} = \\mathbf{p} + t\\mathbf{v}_1$.

The direction vectors span the null space of $A$, the solutions of $A\\mathbf{x} = \\mathbf{0}$, and the full solution set is that null space shifted by $\\mathbf{p}$. With two free variables, as in the last preset, there are two directions and the set is a plane. This is the structure theorem for linear systems in one picture: one particular solution plus every homogeneous solution.`,
      link: '',
    }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from LinearSystemWrapper's own buildScenes on three presets and
     rendered through frozenMatrixSvgFixed. Stills are found by phase. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: linearSystemDiagrams[key], caption, text })

  const stateUnits = {
    intro: unit('intro', 'Augmented matrix, frozen',
      '[A | b] for the default preset, the constants in amber. The system and the matrix are one object ' +
      'written two ways; the shape alone does not say which of the three outcomes is coming.'),
    eliminate: unit('eliminate', 'Forward pass, frozen',
      'R<sub>3</sub> &larr; R<sub>3</sub> &minus; 2R<sub>1</sub>, constants included. Reversible, so the ' +
      'solution set is untouched - the equations are being rewritten, not changed.'),
    backelim: unit('backelim', 'Backward pass, frozen',
      'R<sub>2</sub> &larr; R<sub>2</sub> &minus; 5R<sub>3</sub>, clearing the entry above the third pivot. ' +
      'Reduced form puts each leading variable in exactly one equation with coefficient 1.'),
    unique: unit('unique', 'One solution, frozen',
      'The identity on the left, 5, 3, &minus;2 on the right, and the solution vector beside it. Three pivots ' +
      'for three unknowns: independent columns, one combination reaching b.'),
    none: unit('none', 'No solution, frozen',
      'The third row reading 0 0 | 1 - the equation 0 = 1. The contradiction was in the original equations; ' +
      'elimination made it visible.'),
    infinite: unit('infinite', 'Infinitely many solutions, frozen',
      'Reduced rows (1, 2, 0 | 4) and (0, 0, 1 | 1) with the free middle column marked, and beside them ' +
      'p = (4, 0, 1) and v<sub>1</sub> = (&minus;2, 1, 0): the solution line x = p + t v<sub>1</sub>.'),
  }


  /* ---- per-phase scene notes, passed into the component (Line 1) ----
     LinearSystemWrapper accepts an explanations prop keyed by scene phase:
     intro, pivot, swap, eliminate, skip, inconsistent, normalize, backelim,
     unique, infinite. Captions render with dangerouslySetInnerHTML, so
     these are raw HTML anchors. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#the-three-outcomes" style="color:#1d4ed8;font-weight:600">the three outcomes</a></div>`

  const explanations = {
    intro: note('Rows are equations; row operations rewrite them without changing the solutions.', 'the-opening-scene', 'Learn more about the opening scene'),
    pivot: note('A pivot makes its variable a leading variable, determined by the others.', 'the-forward-pass', 'Learn more about the forward pass'),
    swap: note('Reordering equations changes nothing.', 'the-forward-pass', 'Learn more about the forward pass'),
    eliminate: note('Subtract a multiple of the pivot row, constants included.', 'the-forward-pass', 'Learn more about the forward pass'),
    skip: note('No pivot in this column: its variable is free, and the solution set, if any, is infinite.', 'infinitely-many-solutions', 'Learn more about free variables'),
    inconsistent: note('0 = c with c &ne; 0: b is outside the column space of A.', 'no-solution', 'Learn more about inconsistent systems'),
    normalize: note('A unit pivot lets the constant be read as the value of the variable.', 'the-backward-pass', 'Learn more about the backward pass'),
    backelim: note('Clear above each pivot so every leading variable appears in one equation only.', 'the-backward-pass', 'Learn more about the backward pass'),
    unique: note('A pivot in every column: the right-hand column is the solution.', 'one-solution', 'Learn more about the unique case'),
    infinite: note('One particular solution plus the null space: p + t<sub>1</sub>v<sub>1</sub> + &hellip;', 'infinitely-many-solutions', 'Learn more about the infinite case'),
  }


  const faqQuestions = {
    obj1: {
      question: "How many solutions can a system of linear equations have?",
      answer: "Exactly one, none, or infinitely many. There is no fourth possibility: if two different solutions exist, every point on the line through them is also a solution. Row reducing the augmented matrix decides which case holds: a row reading 0 = c with c non-zero means no solution, a pivot in every column of A means exactly one, and a free column in a consistent system means infinitely many."
    },
    obj2: {
      question: "What is the difference between row echelon form and reduced row echelon form?",
      answer: "In row echelon form each pivot lies to the right of the pivot above it and the entries below each pivot are zero; it is the result of the forward pass. In reduced row echelon form every pivot is also 1 and the entries above each pivot are zero as well; it is the result of the backward pass. Echelon form is enough for back substitution, while reduced form lets the solution, or its parametric description, be read directly. The reduced form of a matrix is unique."
    },
    obj3: {
      question: "What is a free variable?",
      answer: "A free variable corresponds to a column of the coefficient matrix that contains no pivot after reduction. No equation pins it down, so it can be assigned any value, and each choice determines the leading variables through the reduced equations. A consistent system with k free variables has a k-parameter family of solutions: a line for one free variable, a plane for two."
    },
    obj4: {
      question: "How do you write the solution when there are infinitely many?",
      answer: "Assign a parameter to each free variable, then read each leading variable from its row of the reduced matrix: the constant minus the free-column entries times the parameters. Collect the constants into a particular solution p and the coefficients of each parameter into a direction vector, giving x = p + t₁v₁ + t₂v₂ + …. The direction vectors span the null space of the coefficient matrix."
    },
    obj5: {
      question: "Can a system with more equations than unknowns have a solution?",
      answer: "Yes. Extra equations may be consequences of the others, in which case they reduce to zero rows and change nothing. The overdetermined preset has three equations in two unknowns and a unique solution because the third equation is the sum of the first two. What decides the outcome is the pivot pattern after reduction, not the count of equations."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Linear System Solution Set Visualizer",
      "description": "Step-by-step visualizer that row reduces an augmented matrix to reduced row echelon form and classifies the system: one solution, no solution, or infinitely many with a parametric description.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/linear-system-solutions",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Editable augmented matrix up to 4 equations in 4 unknowns, with six presets and a shuffle",
        "Forward pass with pivots, swaps, eliminations and skipped free columns, one scene each",
        "Consistency check that stops the run at a 0 = c row",
        "Backward pass to reduced row echelon form",
        "Final classification: solution vector, or particular solution plus direction vectors",
        "Right-hand side kept in colour throughout",
        "Adjustable playback speed and a scrollable log of row operations"
      ],
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2026-09-12",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "learningResourceType": "Interactive Tool",
      "educationalLevel": "High School, College",
      "keywords": "solution set of a linear system, solving systems of linear equations, reduced row echelon form, rref calculator, row echelon form step by step, unique solution no solution infinitely many, consistent inconsistent system, free variables, parametric solution, augmented matrix, gauss jordan elimination, homogeneous system null space, linear system visualizer, linear algebra visualizer, interactive linear systems tool"
    },

    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.learnmathclass.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Linear Algebra",
          "item": "https://www.learnmathclass.com/linear-algebra"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Linear System Solutions",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/linear-system-solutions"
        }
      ]
    },

    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": Object.keys(faqQuestions).map(key => ({
        "@type": "Question",
        "name": faqQuestions[key].question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faqQuestions[key].answer
        }
      }))
    }
  }


  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }


  return {
    props: {
      relatedTools: getRelatedTools('linear-algebra-linear-system-solutions'),
      sectionsContent,
      stateUnits,
      explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Linear System Solutions Visualizer | One, None, or Infinitely Many",
        description: "Row reduce an augmented matrix to reduced row echelon form step by step and read the solution set: one solution, no solution, or infinitely many with a parametric description.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/linear-system-solutions",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="24" width="9" height="9" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><rect x="17" y="24" width="9" height="9" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.7"/><rect x="26" y="24" width="9" height="9" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.7"/><rect x="8" y="33" width="9" height="9" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.7"/><rect x="17" y="33" width="9" height="9" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><rect x="26" y="33" width="9" height="9" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.7"/><rect x="8" y="42" width="9" height="9" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.7"/><rect x="17" y="42" width="9" height="9" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.7"/><rect x="26" y="42" width="9" height="9" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><line x1="38" y1="22" x2="38" y2="53" stroke="#B5D4F4" stroke-width="1.2" stroke-dasharray="2.5,2"/><rect x="41" y="24" width="9" height="9" fill="#97C459" stroke="#27500A" stroke-width="0.8"/><rect x="41" y="33" width="9" height="9" fill="#97C459" stroke="#27500A" stroke-width="0.8"/><rect x="41" y="42" width="9" height="9" fill="#97C459" stroke="#27500A" stroke-width="0.8"/><text x="12.5" y="31" font-family="Georgia,serif" font-size="7" fill="#412402" text-anchor="middle">1</text><text x="21.5" y="40" font-family="Georgia,serif" font-size="7" fill="#412402" text-anchor="middle">1</text><text x="30.5" y="49" font-family="Georgia,serif" font-size="7" fill="#412402" text-anchor="middle">1</text><text x="64" y="30" font-family="Georgia,serif" font-size="6.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">one</text><text x="64" y="39" font-family="Georgia,serif" font-size="6.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">none</text><text x="64" y="48" font-family="Georgia,serif" font-size="6.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">many</text><text x="40" y="66" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">[A | b] &#8594; rref</text></svg>`,
        name: "Linear System Solutions Visualizer",
        hubDescription: "Row reduce a system of your own numbers all the way to reduced row echelon form, one operation per scene, and read the solution set from the result: the solution vector when every column has a pivot, the row 0 = c that proves there is none, or a particular solution plus one direction per free variable when there are infinitely many. Six presets cover the three outcomes, a homogeneous system, an overdetermined but consistent one, and a plane of solutions with two free variables.",
        category: 'Linear Systems',
        subCategory: 'Solving'
      }
    }
  }
}

export default function LinearSystemSolutionsVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas, relatedTools }) {

  const plain = (obj, id) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [ sectionsContent[obj].content ],
  })

  const stateRow = (obj, id, unitKey) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [
      sectionsContent[obj].content,
      <div key={`u-${unitKey}`} dangerouslySetInnerHTML={{ __html: stateUnits[unitKey] }} />,
      sectionsContent[obj].after,
    ],
  })

  const genericSections=[
    plain('obj0', 'key-terms'),
    plain('obj1', 'getting-started'),
    plain('obj2', 'how-the-reduction-runs'),
    stateRow('obj11', 'the-opening-scene', 'intro'),
    stateRow('obj12', 'the-forward-pass', 'eliminate'),
    stateRow('obj13', 'the-backward-pass', 'backelim'),
    stateRow('obj14', 'one-solution', 'unique'),
    stateRow('obj15', 'no-solution', 'none'),
    stateRow('obj16', 'infinitely-many-solutions', 'infinite'),
    plain('obj3', 'the-scene-player'),
    plain('obj4', 'choosing-a-system'),
    plain('obj5', 'the-three-outcomes'),
    plain('obj6', 'key-properties'),
    plain('obj7', 'why-it-matters'),
    plain('obj8', 'worked-example'),
    plain('obj9', 'common-mistakes'),
    plain('obj10', 'related-concepts'),
  ]


  return (
   <>
   <Head>
  <title>{seoData.title}</title>
  <meta name="description" content={seoData.description} />
  <meta name="keywords" content={seoData.keywords} />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

  <meta property="og:title" content={seoData.title} />
  <meta property="og:description" content={seoData.description} />
  <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Learn Math Class" />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={seoData.title} />
  <meta name="twitter:description" content={seoData.description} />

  <meta name="robots" content="index, follow" />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApplication) }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
  />
</Head>
   <br/>
   <br/>
   <br/>
   <br/>
    <OperaSidebar
           side='right'
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         />
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Solution Sets of Linear Systems</h1>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <LinearSystemWrapper
   defaultPreset='unique'
   explanations={explanations}
   />
   </div>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"
         secondaryNavTitle="More in this Section"
   />
   <br/>
   <br/>
   <br/>
   <br/>
   <RelatedTools tools={relatedTools}/>
   <br/>
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   </>
  )
}
