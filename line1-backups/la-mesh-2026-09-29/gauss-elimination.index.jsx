// ===========================================================
// REBUILD IN PROGRESS - 2026-09-13
//
// Everything between the banners below is the PREVIOUS version of
// this page, line-commented rather than deleted so it can be
// restored verbatim: strip the leading '// ' from each line.
//
// It rendered GaussJordanCalculator (app/components/matrix-multiplication/),
// the last pre-MatrixCore tool left in this section. That component is
// untouched and still on disk; only this page stopped importing it.
//
// Its prose, frozen stills (gaussEliminationDiagrams) and per-stage
// notes all describe that component's UI - 'Generate Random Matrix',
// 'Stage X of Y', the two transform buttons - so none of it survives
// the swap unedited. Content, SEO, Line 1 and Line 3 are rebuilt in
// the next pass; what follows the banner is the interim shell.
// ===========================================================

// ############ BEGIN PREVIOUS PAGE ############
// // Moved 2026-09-13 from pages/visual-tools/gauss-elimination (top-level route).
// // The old URL /visual-tools/gauss-elimination is permanently redirected here
// // in next.config.js. Search Console (90 days to 2026-09-12): 29 clicks,
// // 4,518 impressions, position 18.5 - low clicks, real demand, hence move +
// // redirect rather than leave in place. Content unchanged; only the paths,
// // the breadcrumb schema and the hub metadata (hubDescription, svg, category)
// // used by the section landing's auto-discovery were added.
//
// import React from 'react';
// import Head from 'next/head';
// import GaussJordanCalculator from '@/app/components/matrix-multiplication/GaussJordanCalculator';
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
// import '@/pages/pages.css';
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
// import Sections from '@/app/components/page-components/section/Sections';
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
// import gaussEliminationDiagrams from '@/app/components/matrix-multiplication/gaussEliminationDiagrams';
// import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame';
// import RelatedTools from '@/app/components/related-tools/RelatedTools';
// import { getRelatedTools } from '@/app/utils/getRelatedTools';
//
// export async function getStaticProps() {
//
//   const keyWords = [
//     'gaussian elimination calculator',
//     'gauss jordan elimination',
//     'row echelon form calculator',
//     'reduced row echelon form',
//     'solve matrix equations',
//     'system of linear equations solver',
//     'matrix row reduction',
//     'echelon method calculator',
//     'gaussian elimination step by step',
//     'matrix equation calculator',
//     'row operations calculator',
//     'linear algebra calculator',
//     'matrix solver online',
//     'free gaussian elimination tool',
//     'interactive matrix calculator'
//   ]
//
//   const sectionsContent = {
//     obj0: {
//       title: `Key Terms`,
//       content: `**Gaussian elimination** — the algorithm that reduces a matrix to echelon form using elementary row operations, so a linear system can be solved by substitution.
//
// **Augmented matrix** — the coefficient matrix with the right-hand side appended as a final column, written $[A \\mid b]$; row operations act on the whole row at once.
//
// **Pivot** — the first non-zero entry of a row in echelon form. Its column is a pivot column, and the variable of that column is a leading variable.
//
// **Row echelon form (REF)** — zero rows at the bottom, each pivot strictly to the right of the pivot above it, and zeros below every pivot.
//
// **Reduced row echelon form (RREF)** — echelon form with every pivot equal to $1$ and zeros above each pivot as well as below. Also called Gauss-Jordan form.
//
// **Elementary row operation** — one of three moves that preserve the solution set: swapping two rows, scaling a row by a non-zero constant, or adding a multiple of one row to another.
//
// **Back-substitution** — solving for the variables from the bottom row upward once the matrix is in echelon form.
//
// **Free variable** — a variable whose column has no pivot; each one contributes a parameter to an infinite solution set.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },
//
//     obj1: {
//       title: `Getting Started with the Calculator`,
//       content: `The Gaussian elimination calculator transforms matrices into echelon form or reduced row echelon form through a series of row operations.
//
// **Choose Matrix Size**: Select your desired matrix dimensions from the size options (2×3, 3×4, 4×5, or 5×6). The calculator automatically adjusts to your selection.
//
// **Input Your Matrix**: Click any cell to enter values manually. Type numbers directly into each input field. Use negative numbers where needed—the calculator handles all real numbers.
//
// **Generate Random Matrix**: Click this button to populate your matrix with random values between -20 and 20. This is perfect for practicing the method or testing different scenarios quickly.
//
// **Start the Transformation**: Once your matrix is ready, choose between "Transform to Echelon Form" or "Transform to Reduced Echelon Form" depending on your needs. The calculator begins processing immediately.`,
//       before: ``,
//       after: `The still above is stage 1 of the worked example used throughout this page, the system $2y + z = 4$, $2x + 4y + z = 9$, $x + y + 3z = 8$. The vertical bar marks the split between the coefficients and the right-hand side; everything to its left is the matrix of the system, the single column to its right is what each equation equals.
//
// That matrix was chosen deliberately. Its top-left entry is $0$, so the run has to begin with a row swap, and no pivot it meets is already $1$, so every pivot needs scaling. Between them those two facts make the run pass through every kind of step the calculator can take.`,
//       link: '',
//     },
//
//     obj2: {
//       title: `Understanding Echelon Form`,
//       content: `When you click "Transform to Echelon Form", the calculator applies row operations to achieve a specific structure.
//
// **Watch the Transformation**: The calculator shows each row operation as it happens. You'll see row swaps, scaling operations, and elimination steps with detailed explanations.
//
// **Highlighted Rows**: During each step, the affected rows are highlighted in the matrix. This visual feedback helps you track which rows are being modified and why.
//
// **Step Counter**: The display shows "Stage X of Y" at the bottom. Use the Previous and Next buttons to review any step at your own pace.
//
// **Play/Pause Feature**: Click Play to automatically advance through all steps with a 1-second delay. Pause at any time to examine a particular operation more closely.
//
// The **"?" tooltip** next to the button explains the three requirements for echelon form: zero rows at bottom, leading entries moving right, and zeros below pivots.`,
//       before: ``,
//       after: `The first still is the operation that does the work: a multiple of the pivot row subtracted from a row below it, leaving a $0$ under the pivot. Two rows are highlighted, and only one of them changed — the pivot row is the instrument, not the target, and it comes through untouched.
//
// The second still is where the run stops. Every entry below a pivot is now $0$ and the leading entries step to the right as you go down, which is the definition of echelon form. Notice what is **not** true: the pivots are $1$ here only because scaling happened to be applied, and the entries **above** them are still whatever they were. Clearing those is the other button's job.
//
// From this form the system is solved bottom-up: the last row gives one unknown outright, and each row above it is solved once the ones below are known. That is back-substitution, and echelon form is exactly the shape that makes it possible.`,
//       link: '',
//     },
//
//     obj3: {
//       title: `Understanding Reduced Echelon Form`,
//       content: `Reduced row echelon form (RREF) takes the process further than standard echelon form.
//
// **Additional Requirements**: RREF demands that every leading entry equals 1 (called a leading 1 or pivot), and each column containing a leading 1 has zeros everywhere else—both above and below.
//
// **Solution Reading**: RREF makes reading solutions trivial. Each leading 1 corresponds directly to a variable, and the rightmost column shows the solution values.
//
// **Automatic Back-Substitution**: Unlike regular echelon form which requires back-substitution, RREF performs this automatically. The solution is immediately visible in the final matrix.
//
// **Tooltip Guidance**: The "?" tooltip explains all RREF requirements clearly. Hover over it if you need clarification on what makes a matrix fully reduced.
//
// Use RREF when you want the most simplified form possible and need solutions that are immediately readable without additional calculations.`,
//       before: ``,
//       after: `The first still is the step echelon form never takes. Both runs clear entries below a pivot; only this one goes back and clears the entries above it too. Everything else the two buttons do is identical, which is why the echelon run on this matrix takes seven stages and the reduced run takes ten — three extra eliminations, one per entry above a pivot.
//
// The second still is the payoff. The coefficient block has become the identity, so the rows read $x = 1.42$, $y = 1.08$, $z = 1.83$ directly. No back-substitution, no arithmetic left to do; the answer is the last column.
//
// That is the trade. Reduced echelon form costs more operations but ends with the solution written out, while echelon form stops earlier and asks you to finish by hand. For solving one system by hand the second is usually faster overall; for reading off a solution, or for finding an inverse or a null space, the extra work of the first pays for itself.`,
//       link: '',
//     },
//
//     obj4: {
//       title: `Navigating Step-by-Step Explanations`,
//       content: `The explanation panel on the right shows exactly what happens at each stage.
//
// **Initial Matrix**: Stage 1 always displays your starting matrix before any operations.
//
// **Row Operations**: Each subsequent stage describes the specific operation performed:
// - **Row Swaps**: "Swap row X with row Y" when positioning non-zero pivots
// - **Row Scaling**: "Scale row X by dividing each element by [value]" to create leading 1s
// - **Row Elimination**: "Eliminate in row X using row Y" to create zeros above or below pivots
//
// **Before and After**: For scaling and elimination operations, you see the complete row before transformation, followed by the resulting row after. This transparency helps you understand the arithmetic.
//
// **Manual Navigation**: Use Previous and Next buttons to jump to any stage. Review confusing steps multiple times or skip ahead to see the final result.
//
// The explanations use mathematical notation and precise language to match what you'd see in a linear algebra textbook, reinforcing proper terminology.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },
//
//     obj5: {
//       title: `Reset and Error Handling`,
//       content: `The calculator includes helpful features to prevent mistakes and start fresh.
//
// **Reset Button**: Click Reset to clear everything and start over with a new 3×4 matrix of zeros. This doesn't just clear values—it resets the entire calculator state including all stages and explanations.
//
// **Automatic Reset**: Whenever you manually change a matrix value after viewing stages, the calculator automatically clears all stages and explanations. This prevents confusion from viewing outdated transformations.
//
// **Zero Matrix Error**: If you try to transform a matrix filled entirely with zeros, you'll see an error message: "Cannot transform a zero matrix." The calculator prevents wasted computation on trivial cases.
//
// **Input Validation**: The number inputs accept only valid numerical values. Invalid entries are automatically converted to zero.
//
// These safeguards ensure you always work with valid matrices and understand when a transformation can't be performed.`,
//       before: ``,
//       after: `The still is the input the calculator refuses. A zero matrix has no non-zero entry anywhere, so the search for a pivot fails in the very first column and there is nothing to eliminate with; both transform buttons stop and show the error instead of running.
//
// It is worth being clear about what the error does and does not mean. The zero matrix is a perfectly valid matrix, and it is already in both echelon and reduced echelon form — vacuously, since there are no pivots for any rule to be violated by. The refusal is a guard against a pointless run, not a claim that the input is malformed.`,
//       link: '',
//     },
//
//     obj6: {
//       title: `What is Gaussian Elimination?`,
//       content: `Gaussian elimination is an algorithm for solving systems of linear equations by transforming the augmented matrix through row operations.
//
// Named after Carl Friedrich Gauss, this method systematically eliminates variables to reach a form where solutions are easily found. It works by creating zeros below (and optionally above) leading entries through strategic row operations.
//
// The method succeeds for any consistent system and clearly identifies inconsistent systems (no solution) or systems with infinitely many solutions. It's taught in virtually every linear algebra course because it's both systematic and powerful.
//
// For detailed theory on **systems of linear equations**, see **linear algebra fundamentals**. For matrix properties, explore **matrix theory pages**.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },
//
//     obj7: {
//       title: `Row Echelon Form vs Reduced Row Echelon Form`,
//       content: `These are two different levels of matrix simplification achieved through Gaussian elimination.
//
// **Row Echelon Form (REF)** requires:
// 1. All zero rows at the bottom
// 2. Each leading entry (pivot) to the right of the pivot above it
// 3. Zeros below all pivots
//
// **Reduced Row Echelon Form (RREF)** adds:
// 4. Every pivot must equal 1
// 5. Zeros above AND below each pivot
//
// RREF is also called **Gauss-Jordan elimination**. While REF is sufficient for solving systems (requiring back-substitution), RREF provides solutions directly without additional work.
//
// REF is faster to compute but requires more work to extract solutions. RREF takes more computation but gives immediate answers. Choose based on whether you prefer computational efficiency or solution clarity.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },
//
//     obj8: {
//       title: `Row Operations Explained`,
//       content: `Three types of **elementary row operations** are allowed in Gaussian elimination:
//
// **Row Swapping**: Exchange two rows. Written as $R_i \\leftrightarrow R_j$. Used to position non-zero pivots correctly.
//
// **Row Scaling**: Multiply every element in a row by a non-zero constant. Written as $R_i \\rightarrow k \\cdot R_i$. Used to create leading 1s.
//
// **Row Addition**: Add a multiple of one row to another row. Written as $R_i \\rightarrow R_i + k \\cdot R_j$. Used to create zeros above or below pivots.
//
// These operations preserve the solution set of the system—the transformed matrix has exactly the same solutions as the original. This equivalence is why the method works: we manipulate the matrix into a simpler form that's easier to solve, knowing the solutions remain unchanged.
//
// For more on **elementary matrices** and **matrix equivalence**, see **advanced linear algebra topics**.`,
//       before: ``,
//       after: `The two stills are the first two of the three operations, taken from the worked run. In the swap, rows 1 and 2 trade places because the pivot position held a $0$; both rows are highlighted, since a swap is the only operation that changes two rows at once. In the scaling, row 1 is divided by its leading entry so the pivot becomes $1$, and only that row is highlighted.
//
// What matters about all three is that each is reversible. A swap undoes itself, a scaling by $c$ is undone by scaling by $1/c$, and adding a multiple of a row is undone by subtracting it. Reversible operations cannot gain or lose solutions, which is why the matrix at every stage of the run describes exactly the same system as the one you typed in — a different-looking set of equations with an identical solution set.
//
// The elimination operation itself is shown in the [echelon form](!#row-echelon-form) section, where it does the actual work of creating zeros.`,
//       link: '',
//     },
//
//     obj9: {
//       title: `Applications of Gaussian Elimination`,
//       content: `Gaussian elimination appears throughout mathematics, science, and engineering:
//
// **Solving Linear Systems**: The primary use—finding values for variables in systems of equations. Essential in engineering design, economics, physics simulations, and more.
//
// **Matrix Inversion**: Computing $A^{-1}$ by augmenting A with the identity matrix and row-reducing to RREF. The right half becomes the inverse.
//
// **Determinant Calculation**: Track row swaps and scaling factors during elimination. The determinant equals (±1) times the product of diagonal elements in echelon form.
//
// **Rank Determination**: The number of non-zero rows in echelon form equals the matrix rank, revealing dimension of the column space.
//
// **Circuit Analysis**: Kirchhoff's laws produce linear systems solved via Gaussian elimination in electrical engineering.
//
// **Least Squares Problems**: Normal equations in regression and curve fitting are solved using this method.
//
// **Computer Graphics**: Transformations and projections in 3D rendering rely on solving matrix equations efficiently.
//
// For **matrix inverse calculation**, see **inverse matrix tools**. For **determinant computation**, explore **determinant calculators**.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },
//
//     obj10: {
//       title: `Related Matrix Operations`,
//       content: `Gaussian elimination connects to many other matrix concepts:
//
// [LU Decomposition](!/linear-algebra/visual-tools/lu-decomposition) — Factors a matrix as $A = LU$ using a variant of Gaussian elimination. Useful for solving multiple systems with the same coefficient matrix.
//
// [Matrix Rank](!/linear-algebra/visual-tools/matrix-rank) — Determined by counting non-zero rows in echelon form. Reveals the dimension of column space and solution structure.
//
// [Null Space](!/linear-algebra/visual-tools/four-fundamental-subspaces) — Found by solving $Ax = 0$ using RREF. The special solutions form a basis for the null space.
//
// [Matrix Inverse](!/linear-algebra/visual-tools/matrix-inverse) — Computed by augmenting with identity and row-reducing. Only possible for square, full-rank matrices.
//
// [Determinant](!/linear-algebra/visual-tools/matrix-determinant) — Calculated from the row operations performed during elimination. Product of pivots (with sign from swaps) gives the determinant.
//
// [Eigenvalues](!/linear-algebra/visual-tools/eigenvalues-eigenvectors) — While not computed directly by Gaussian elimination, characteristic polynomial roots (eigenvalues) connect to determinants.
//
// For **LU decomposition tools**, see **matrix factorization calculators**. For **null space computation**, explore **kernel calculators**.`,
//       before: ``,
//       after: ``,
//       link: '',
//     }
//   }
//
//   const faqQuestions = {
//     obj1: {
//       question: "What is Gaussian elimination used for?",
//       answer: "Gaussian elimination is used to solve systems of linear equations by transforming the augmented matrix into row echelon form or reduced row echelon form. It systematically eliminates variables through row operations to find solutions, determine if systems are consistent, and identify systems with infinitely many solutions."
//     },
//     obj2: {
//       question: "What is the difference between echelon form and reduced echelon form?",
//       answer: "Row echelon form requires zero rows at bottom, leading entries moving right, and zeros below pivots. Reduced row echelon form (RREF) additionally requires that all leading entries equal 1 and have zeros above them as well. RREF provides solutions directly, while echelon form requires back-substitution."
//     },
//     obj3: {
//       question: "What are the three elementary row operations?",
//       answer: "The three elementary row operations are: (1) Row swapping - exchanging two rows, (2) Row scaling - multiplying all elements in a row by a non-zero constant, and (3) Row addition - adding a multiple of one row to another row. These operations preserve the solution set of the system."
//     },
//     obj4: {
//       question: "How do you solve a system of equations using Gaussian elimination?",
//       answer: "To solve using Gaussian elimination: (1) Write the augmented matrix, (2) Use row operations to transform to row echelon form, (3) Continue to reduced row echelon form or use back-substitution, (4) Read solutions from the final matrix. Each leading 1 corresponds to a variable, and the rightmost column shows solution values."
//     },
//     obj5: {
//       question: "When does a system have no solution or infinitely many solutions?",
//       answer: "A system has no solution if row reduction produces a row like [0 0 0 | 5] (zeros on left, non-zero on right). It has infinitely many solutions if there are free variables - fewer pivots than variables. This appears as columns without leading 1s in reduced row echelon form."
//     }
//   }
//
//   const schemas = {
//     webApplication: {
//       "@context": "https://schema.org",
//       "@type": "WebApplication",
//       "name": "Gaussian Elimination Calculator - Row Echelon Form Solver",
//       "description": "Interactive Gaussian elimination calculator. Transform matrices to echelon or reduced echelon form with step-by-step solutions. Free tool for linear algebra.",
//       "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/gauss-elimination",
//       "applicationCategory": "EducationalApplication",
//       "operatingSystem": "Any",
//       "offers": {
//         "@type": "Offer",
//         "price": "0",
//         "priceCurrency": "USD"
//       },
//       "featureList": [
//         "Interactive matrix input with customizable sizes (2x3 to 5x6)",
//         "Transform to row echelon form (REF)",
//         "Transform to reduced row echelon form (RREF)",
//         "Step-by-step explanations for each row operation",
//         "Visual highlighting of affected rows during operations",
//         "Play/Pause automatic step progression",
//         "Random matrix generation for practice"
//       ],
//       "author": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       },
//       "datePublished": "2024-01-15",
//       "dateModified": new Date().toISOString(),
//       "inLanguage": "en-US",
//       "isAccessibleForFree": true,
//       "learningResourceType": "Interactive Tool",
//       "educationalLevel": "High School, College",
//       "keywords": keyWords.join(", ")
//     },
//     breadcrumb: {
//       "@context": "https://schema.org",
//       "@type": "BreadcrumbList",
//       "itemListElement": [
//         {
//           "@type": "ListItem",
//           "position": 1,
//           "name": "Home",
//           "item": "https://www.learnmathclass.com"
//         },
//         {
//           "@type": "ListItem",
//           "position": 2,
//           "name": "Linear Algebra",
//           "item": "https://www.learnmathclass.com/linear-algebra"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Visual Tools",
//           "item": "https://www.learnmathclass.com/linear-algebra/visual-tools"
//         },
//         {
//           "@type": "ListItem",
//           "position": 4,
//           "name": "Gaussian Elimination Calculator",
//           "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/gauss-elimination"
//         }
//       ]
//     },
//     faq: {
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       "mainEntity": Object.keys(faqQuestions).map(key => ({
//         "@type": "Question",
//         "name": faqQuestions[key].question,
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": faqQuestions[key].answer
//         }
//       }))
//     }
//   }
//
//   /* ---- frozen-state demonstration units (Line 1) ----
//      Eight stills from gaussEliminationDiagrams.js, which replicates
//      performElimination and freezes the tool's own stages, highlight rows
//      included. The worked matrix is chosen so the run hits every stage kind:
//      its first pivot is 0 (forcing a swap) and no pivot is 1 (forcing a scale
//      every time). */
//   const unit = (key, caption, text) => demoUnitFrame({ svg: gaussEliminationDiagrams[key], caption, text })
//
//   const stateUnits = {
//     initial: unit('initial', 'Stage 1, frozen',
//       'The augmented matrix as entered, before any operation, with the bar separating the coefficients from the ' +
//       'right-hand side. Nothing is highlighted yet because no row has been touched.'),
//     swap: unit('swap', 'A row swap, frozen',
//       'The first pivot position held a 0, so rows 1 and 2 traded places to bring a non-zero entry into it. ' +
//       'Both rows are highlighted: a swap is the one operation that changes two rows at once.'),
//     scale: unit('scale', 'A row scaling, frozen',
//       'Row 1 divided by its leading entry 2, so the pivot becomes 1 and the rest of the row is halved. ' +
//       'One row highlighted, and the solution set is unchanged because the divisor is non-zero.'),
//     eliminate: unit('eliminate', 'An elimination below the pivot, frozen',
//       'A multiple of the pivot row subtracted from a row beneath it, putting a 0 under the pivot. Both rows are ' +
//       'highlighted - the one that changed and the one it was changed by, which itself does not move.'),
//     refDone: unit('refDone', 'Echelon form, frozen',
//       'The end of the Transform to Echelon Form run: every entry below a pivot is 0, the staircase descends to ' +
//       'the right, and the system is ready for back-substitution from the bottom row upward.'),
//     eliminateAbove: unit('eliminateAbove', 'An elimination above the pivot, frozen',
//       'The step echelon form never performs. Reduced echelon clears entries above a pivot as well as below, which ' +
//       'is the whole difference between the two buttons.'),
//     rrefDone: unit('rrefDone', 'Reduced echelon form, frozen',
//       'The end of the Transform to Reduced Echelon Form run: an identity block beside the solution column, so ' +
//       'x = 1.42, y = 1.08, z = 1.83 can be read straight off with no substitution at all.'),
//     zeroError: unit('zeroError', 'The zero matrix, frozen',
//       'Every entry 0, and no pivot anywhere. Both transform buttons refuse this input and show an error rather ' +
//       'than running: there is nothing to eliminate.'),
//   }
//
//
//   /* ---- per-stage notes, passed into the component (Line 1) ----
//      GaussJordanCalculator accepts an additive `notes` prop keyed by stage kind
//      - initial, swap, scale, eliminate, eliminateAbove, zeroError - and renders
//      the value as raw HTML under the current stage's explanation. */
//   const note = (body, slug, label) =>
//     `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
//     `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
//     ` &middot; <a href="#what-gaussian-elimination-is" style="color:#1d4ed8;font-weight:600">what elimination is</a></div>`
//
//   const notes = {
//     initial: note('The starting point: three equations written as one augmented matrix.', 'getting-started', 'Learn more about getting started'),
//     swap: note('A swap only reorders equations, so the solution set is untouched.', 'row-operations', 'Learn more about row operations'),
//     scale: note('Dividing a row by a non-zero number leaves the same solutions.', 'row-operations', 'Learn more about row operations'),
//     eliminate: note('Subtracting a multiple of one row from another is the operation that creates the zeros.', 'row-echelon-form', 'Learn more about echelon form'),
//     eliminateAbove: note('Clearing above the pivot too - this is what separates reduced echelon from echelon.', 'reduced-row-echelon-form', 'Learn more about reduced echelon form'),
//     zeroError: note('A zero matrix has no pivot to work with, so neither transform can run.', 'reset-and-error-handling', 'Learn more about error handling'),
//   }
//
//
//   return {
//     props: {
//       relatedTools: getRelatedTools('linear-algebra-gauss-elimination'),
//       sectionsContent,
//       stateUnits,
//       notes,
//       faqQuestions,
//       schemas,
//       seoData: {
//         title: "Gaussian Elimination Calculator | Solve Matrix Equations",
//         description: "Interactive Gaussian elimination calculator. Transform matrices to echelon or reduced echelon form with step-by-step solutions. Free tool for linear algebra.",
//         keywords: keyWords.join(", "),
//         url: "/linear-algebra/visual-tools/gauss-elimination",
//         name: "Gaussian Elimination Calculator",
//         hubDescription: "Transform any matrix to row echelon form (REF) or reduced row echelon form (RREF) one row operation at a time. Choose a size from 2×3 up to 5×6, fill the cells by hand or generate random values, then pick which form to reduce to. Each stage shows the operation performed — row swap, scaling, or elimination — with the affected rows highlighted in the matrix and the row state before and after spelled out in textbook notation. Step manually with Previous and Next, or hit Play for automatic 1-second advance. RREF makes solutions immediately readable; REF stops earlier and leaves back-substitution to you.",
//         svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="18" width="14" height="14" fill="#FAC775" stroke="#854F0B" stroke-width="1.2"/><rect x="24" y="18" width="14" height="14" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="38" y="18" width="14" height="14" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="54" y="18" width="14" height="14" fill="#C0DD97" stroke="#3B6D11" stroke-width="0.9"/><rect x="10" y="32" width="14" height="14" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.8"/><rect x="24" y="32" width="14" height="14" fill="#FAC775" stroke="#854F0B" stroke-width="1.2"/><rect x="38" y="32" width="14" height="14" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="54" y="32" width="14" height="14" fill="#C0DD97" stroke="#3B6D11" stroke-width="0.9"/><rect x="10" y="46" width="14" height="14" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.8"/><rect x="24" y="46" width="14" height="14" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.8"/><rect x="38" y="46" width="14" height="14" fill="#FAC775" stroke="#854F0B" stroke-width="1.2"/><rect x="54" y="46" width="14" height="14" fill="#C0DD97" stroke="#3B6D11" stroke-width="0.9"/><line x1="52" y1="16" x2="52" y2="62" stroke="#185FA5" stroke-width="1.2" stroke-dasharray="3,2"/><text x="17" y="28" font-family="Georgia,serif" font-size="8" fill="#412402" text-anchor="middle">1</text><text x="31" y="42" font-family="Georgia,serif" font-size="8" fill="#412402" text-anchor="middle">1</text><text x="45" y="56" font-family="Georgia,serif" font-size="8" fill="#412402" text-anchor="middle">1</text><text x="17" y="42" font-family="Georgia,serif" font-size="8" fill="#888780" text-anchor="middle">0</text><text x="17" y="56" font-family="Georgia,serif" font-size="8" fill="#888780" text-anchor="middle">0</text><text x="31" y="56" font-family="Georgia,serif" font-size="8" fill="#888780" text-anchor="middle">0</text><text x="40" y="72" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">row echelon</text></svg>`,
//         category: 'Linear Systems',
//         subCategory: 'Solving'
//       }
//     }
//   }
// }
//
// export default function GaussianEliminationCalculatorPage({ seoData, sectionsContent, stateUnits, notes, faqQuestions, schemas, relatedTools }) {
//
//   const plain = (obj, id) => ({
//     id,
//     title: sectionsContent[obj].title,
//     link: sectionsContent[obj].link,
//     content: [ sectionsContent[obj].content ],
//   })
//
//   // [prose, framed unit(s), deeper prose]; a unit never closes a section.
//   const stateRow = (obj, id, ...unitKeys) => ({
//     id,
//     title: sectionsContent[obj].title,
//     link: sectionsContent[obj].link,
//     content: [
//       sectionsContent[obj].content,
//       ...unitKeys.map((k) => (
//         <div key={`u-${k}`} dangerouslySetInnerHTML={{ __html: stateUnits[k] }} />
//       )),
//       sectionsContent[obj].after,
//     ],
//   })
//
//   const genericSections = [
//     plain('obj0', 'key-terms'),
//     stateRow('obj1', 'getting-started', 'initial'),
//     stateRow('obj2', 'row-echelon-form', 'eliminate', 'refDone'),
//     stateRow('obj3', 'reduced-row-echelon-form', 'eliminateAbove', 'rrefDone'),
//     plain('obj4', 'step-by-step-explanations'),
//     stateRow('obj5', 'reset-and-error-handling', 'zeroError'),
//     plain('obj6', 'what-gaussian-elimination-is'),
//     plain('obj7', 'ref-versus-rref'),
//     stateRow('obj8', 'row-operations', 'swap', 'scale'),
//     plain('obj9', 'applications'),
//     plain('obj10', 'related-concepts'),
//   ]
//
//   return (
//     <>
//       <Head>
//         <title>{seoData.title}</title>
//         <meta name="description" content={seoData.description} />
//         <meta name="keywords" content={seoData.keywords} />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
//
//         <meta property="og:title" content={seoData.title} />
//         <meta property="og:description" content={seoData.description} />
//         <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//         <meta property="og:type" content="website" />
//         <meta property="og:site_name" content="Learn Math Class" />
//
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={seoData.title} />
//         <meta name="twitter:description" content={seoData.description} />
//
//         <meta name="author" content="Learn Math Class" />
//
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(schemas.webApplication)
//           }}
//         />
//
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(schemas.breadcrumb)
//           }}
//         />
//
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(schemas.faq)
//           }}
//         />
//       </Head>
//
//       {/* <GenericNavbar/> */}
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//
//       <OperaSidebar
//         side='right'
//         topOffset='55px'
//         sidebarWidth='45px'
//         panelWidth='200px'
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'
//       />
//
//       <Breadcrumb/>
//
//       <main className="container">
//         <h1 className="title" style={{marginTop:'0px',marginBottom:'10px'}}>
//           Gaussian Elimination Calculator
//         </h1>
//
//         <section aria-label="Matrix Equation Solver">
//           <h2 className='title' style={{marginBottom:'0px'}}>
//             Solve Systems of Linear Equations
//           </h2>
//
//           <GaussJordanCalculator notes={notes} />
//         </section>
//
//         <br/>
//         <br/>
//
//         <SectionTableOfContents sections={genericSections}
//           showSecondaryNav={true}
//           secondaryNavMode="siblings"
//           secondaryNavTitle="More in this Section"
//         />
//
//         <br/>
//         <br/>
//         <br/>
//
//         <RelatedTools tools={relatedTools}/>
//         <br/>
//         <br/>
//         <Sections sections={genericSections}/>
//
//         <br/>
//         <br/>
//         <br/>
//
//         {/* <ScrollUpButton /> */}
//       </main>
//
//       <style jsx>{`
//         .container {
//
//           margin: 0 auto;
//           padding: 20px;
//         }
//         .title {
//           text-align: center;
//           margin: 2rem 0;
//         }
//         @media (max-width: 768px) {
//           .title {
//             font-size: 1.5rem;
//             margin: 1rem 0;
//           }
//         }
//       `}</style>
//     </>
//   );
// }
//
// ############ END PREVIOUS PAGE ############

// ===========================================================
// Rebuilt 2026-09-13 on GaussEliminationWrapper (MatrixCore), the
// section standard. The previous version is line-commented above.
//
// Line 1: gaussDiagrams.js freezes four runs of the tool's own
// buildScenes - REF and RREF on the default preset, plus the free-column
// and inconsistent presets - so every still on this page is a real state
// the tool passes through, not a drawing of one. The `explanations` prop
// links each scene phase back to the section that explains it.
// ===========================================================

import React from 'react'
import Head from 'next/head'
import '@/pages/pages.css'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import { getRelatedTools } from '@/app/utils/getRelatedTools'
import GaussEliminationWrapper from '../../../../app/components/linear-algebra copy/matrix/GaussEliminationWrapper'
import gaussDiagrams from '../../../../app/components/linear-algebra copy/matrix/gaussDiagrams'

export async function getStaticProps() {

  const keyWords = [
    'gaussian elimination calculator',
    'gauss jordan elimination',
    'row echelon form calculator',
    'reduced row echelon form',
    'solve matrix equations',
    'system of linear equations solver',
    'matrix row reduction',
    'echelon method calculator',
    'gaussian elimination step by step',
    'matrix equation calculator',
    'row operations calculator',
    'augmented matrix calculator',
    'back substitution calculator',
    'pivot and free variables',
    'interactive matrix calculator'
  ]

  // Page-owned intro block (not a component prop): the phrase and the
  // sentence under it are the page's own copy, so they stay in this file
  // where the rest of the SEO text lives.
  const intro = {
    heading: 'Solve Systems of Linear Equations',
    body: 'Row reduce the augmented matrix [A | b] one elementary operation at a time — stop at row echelon form, or carry on to reduced row echelon form. Every step names the operation, highlights the rows it touches, and says why the solution set is unchanged. Editable entries, six presets and a shuffle, up to 5 equations and 5 unknowns.'
  }

  const sectionsContent = {
    obj0: {
      title: `Key Terms`,
      content: `[Gaussian elimination](!/linear-algebra/definitions#gaussian_elimination) — the algorithm that reduces a [matrix](!/linear-algebra/definitions#matrix) to echelon form using [elementary row operations](!/linear-algebra/formulas#elementary_row_operations), so a linear system can be solved by substitution.

[Augmented matrix](!/linear-algebra/definitions#augmented_matrix) — the coefficient matrix with the right-hand side appended as a final column, written $[A \\mid b]$. In the tool the constants are the amber column; row operations act on the whole row at once, constants included.

[Pivot](!/linear-algebra/definitions#pivot) — the first non-zero entry of a row once the rows above it have been cleared. Its column is a pivot column, and the variable of that column is a leading variable.

[Row echelon form (REF)](!/linear-algebra/definitions#row_echelon_form) — zero rows at the bottom, each pivot strictly to the right of the pivot above it, and zeros below every pivot. Note what is **not** required: the [pivots](!/linear-algebra/definitions#pivot) need not be $1$.

[Reduced row echelon form (RREF)](!/linear-algebra/definitions#reduced_row_echelon_form) — echelon form with every pivot equal to $1$ and zeros above each pivot as well as below. Also called Gauss-Jordan form. Unlike echelon form, it is unique for a given matrix.

[Elementary row operation](!/linear-algebra/definitions#elementary_row_operation) — one of three moves that preserve the [solution set](!/algebra/definitions#solution_set): swapping two rows, scaling a row by a non-zero constant, or adding a multiple of one row to another.

[Back-substitution](!/linear-algebra/definitions#back_substitution) — solving for the variables from the bottom row upward once the matrix is in echelon form.

[Free variable](!/linear-algebra/definitions#free_variable) — a variable whose column has no pivot. Each one contributes a parameter to an infinite solution set.

[Rank](!/linear-algebra/definitions#rank) — the number of pivots. It is the count the tool reports at the end, and it decides everything: rank equal to the number of unknowns means one solution, fewer means free variables.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Using the Calculator`,
      content: `The calculator runs elimination on an augmented matrix $[A \\mid b]$ and shows one elementary row operation per step.

**Pick a target form**: the two pills at the top left choose where the run stops — **Echelon form** clears below the [pivots](!/linear-algebra/linear-systems/echelon-form#4) and stops there, **Reduced echelon form** goes all the way to Gauss-Jordan. Switching pills rebuilds the run on the same matrix, which is the fastest way to see what the extra work actually is.

**Pick a matrix**: the presets cover the cases worth seeing — a matrix that needs a swap, one whose first pivot is already $1$, one with a free variable, an inconsistent system, a longer four-unknown run, and the zero matrix. Or set the shape with the steppers, type your own entries, or press **Shuffle** for a random system.

**Read the entries**: coefficients on the left, constants on the right in amber, separated by the bar. Values may be typed as integers or decimals; results are displayed as exact fractions wherever one exists, so a third reads $1/3$ rather than a string of digits.

**Step the run**: **Back** and **Next** move one operation at a time, **Play** advances automatically at the speed set in the dropdown, and any entry in the step log on the right can be clicked to jump straight to it.`,
      before: ``,
      after: `The still above is the opening scene of the default preset, the system $2y + z = 4$, $2x + 4y + z = 9$, $x + y + 3z = 8$. Nothing has been touched yet: the bar marks the split between the coefficients and the right-hand side, and everything to the right of it is what each equation equals.

That matrix is the default for a reason. Its top-left entry is $0$, so the run cannot start without a row swap, and no pivot it meets is already $1$, so the reduced run has to scale at every pivot. Between them those two facts make one matrix pass through every kind of step the calculator can take.`,
      link: '',
    },

    obj2: {
      title: `The Two Target Forms`,
      content: `Both target forms run the same forward pass. They differ only in where they stop.

**Echelon form** asks for three things: any all-zero rows sit at the bottom, each leading entry is strictly to the right of the one above it, and every entry below a leading entry is $0$. That is the staircase. It says nothing about the pivots themselves, so the tool leaves them as it finds them — a pivot of $2$ stays $2$.

**Reduced echelon form** adds two more: every pivot is $1$, and every other entry of a pivot column is $0$, above as well as below. Getting there costs one scaling per pivot and one extra elimination per entry above a pivot.

On the default preset the difference is exact and countable: the echelon run takes 8 steps, the reduced run takes 14. The six extra steps are three scalings and three clearings above a pivot.

**Which to use**: echelon form is cheaper and enough to solve a system, because back-substitution finishes the job. Reduced echelon form costs more but ends with the answer written out, and it is what you want when the [matrix](!/linear-algebra/matrix#1) is standing in for something else — an inverse, a null space [basis](!/linear-algebra/vector-spaces#2), a [rank](!/linear-algebra/matrix/rank#1) computation.`,
      before: ``,
      after: `The first still is where the plain run stops. Every entry below a pivot is $0$ and the leading entries — $2$, $2$, $3$ — step to the right as you go down. The pivots are not $1$, and the entries above them are still whatever they were, because echelon form does not ask for either.

The second is where the reduced run stops on the same matrix. The coefficient block has become the identity, so the rows read $x = 17/12$, $y = 13/12$, $z = 11/6$ directly off the amber column. No substitution, no arithmetic left to do.

Both stills describe the same system. That is the point of the whole method: the two matrices look nothing alike, and every solution of one is a solution of the other.`,
      link: '',
    },

    obj3: {
      title: `Finding a Pivot`,
      content: `Each column is handled in turn, left to right, and each one begins with the same question: is there a non-zero entry at or below the current row?

If there is, the topmost one becomes the **pivot**. The tool names it, reports which pivot number it is, and highlights it. Its column is a pivot column and the matching variable is a leading variable — determined, once everything below it is known.

If there is not, the column is skipped and the current row does not advance. That case is covered in [columns with no pivot](!#free-columns).

A pivot is always strictly to the right of the pivot above it and exactly one row below, which is what produces the staircase. The number of pivots at the end of the run is the **rank** of the matrix, and the tool reports it in the final step.

The tool tests for "non-zero" with a tolerance rather than an exact comparison. That matters more than it sounds: floating-point arithmetic routinely leaves an entry sitting at $10^{-17}$ instead of $0$, and a calculator that pivots on such an entry produces nonsense — a scale factor of $10^{16}$ and a row of garbage.`,
      before: ``,
      after: `The still is the first pivot of the default run, immediately after the swap: the $2$ at row 1, column 1, marked and its row highlighted. Column 1 is now a pivot column and $x_1$ is a leading variable.

Notice that the pivot is $2$ and stays $2$. In the echelon run nothing scales it, and nothing needs to — the eliminations below it divide by it rather than requiring it to be $1$.`,
      link: '',
    },

    obj4: {
      title: `Swapping Rows`,
      content: `A swap is used for exactly one purpose: the pivot position holds a $0$ and some row below it does not.

Written $R_i \\leftrightarrow R_j$, it exchanges two whole rows, constants included. It is the only one of the three operations that changes two rows at once, and the tool highlights both.

A swap cannot change anything about the system, because it only reorders the equations, and the order in which equations are written has never meant anything. It is also its own inverse: swapping the same pair again puts everything back.

Every run on a matrix whose leading entry is $0$ has to begin with one — which is why the default preset starts that way.`,
      before: ``,
      after: `The still is the opening swap of the default run. Row 1 held a $0$ in the pivot position and row 2 held a $2$, so the two traded places and the $2$ came up where a pivot belongs.

Both rows are highlighted, and both really did move. Compare that with an elimination, where two rows are highlighted but only one of them changes.`,
      link: '',
    },

    obj5: {
      title: `Scaling to a Leading 1`,
      content: `Scaling multiplies every entry of one row by a non-zero constant. Written $R_i \\rightarrow k \\cdot R_i$, or as the tool writes it, $R_i \\leftarrow R_i / d$ where $d$ is the pivot.

**This step belongs to the reduced run only.** Echelon form does not require leading $1$s, so the plain run never scales anything; the reduced run scales at every pivot that is not already $1$.

The divisor is the pivot, which is non-zero by construction, so the equation still says exactly the same thing — a scaled equation has the same solutions. And it is reversible: scaling by $d$ is undone by scaling by $1/d$.

The payoff comes at the end. A unit pivot is what lets the constant on the right be read as the value of the variable, with no arithmetic in between. It also simplifies every elimination that follows, because the factor becomes the entry itself rather than a ratio.`,
      before: ``,
      after: `The still is the first scaling of the reduced run: row 1 divided by its pivot $2$, so the leading entry becomes $1$ and the rest of the row is halved — the constant along with it.

One row highlighted, one row changed. Switch the tool to **Echelon form** and this scene does not exist.`,
      link: '',
    },

    obj6: {
      title: `Eliminating Below the Pivot`,
      content: `This is the operation that does the work, and it is the reason the method is called elimination.

To clear the entry in row $k$ under a pivot in row $r$, the tool computes the factor as that entry divided by the pivot, then subtracts the factor times the pivot row from row $k$. Written $R_k \\rightarrow R_k - f \\cdot R_r$. Because the whole row is involved, the constant on the right moves too.

**Only the target row changes.** The pivot row is the instrument, not the target, and it comes through untouched. The tool highlights both rows, which can be misleading until you notice that only one of them has different numbers afterwards.

When the factor is negative the operation is an addition, and the tool says so rather than writing "subtract $-2$".

After every operation, entries that have come out as floating-point dust are snapped to exactly $0$. Without that, the entry directly under a pivot lands at something like $-4.9 \\times 10^{-18}$ instead of $0$, the next pass sees it as non-zero, and the run picks up a step that subtracts nothing from nothing.`,
      before: ``,
      after: `The still is the first elimination of the default run. Row 3 held a $1$ under the pivot $2$, so the factor was $1/2$ and half the pivot row was subtracted from it, putting a $0$ under the pivot.

Two rows lit, one row changed. The pivot row above is identical to what it was a step earlier.`,
      link: '',
    },

    obj7: {
      title: `Clearing Above the Pivot`,
      content: `This is the step echelon form never takes, and the whole difference between the two buttons.

The arithmetic is identical to [eliminating below](!#eliminating): factor equals entry over pivot, subtract the factor times the pivot row. The only difference is the direction — the target row sits above the pivot rather than below it.

There is one per non-zero entry above a pivot, which on a square system with a full set of pivots means one for every row above each pivot. That is why the reduced run is so much longer: on the default preset it accounts for three of the six extra steps, the scalings accounting for the other three.

The effect is that each leading variable ends up appearing in exactly one equation. That is what makes the final matrix readable: no variable is entangled with any other, so each row states the value of one unknown outright.`,
      before: ``,
      after: `The still is the first above-pivot elimination of the reduced run, clearing the entry in row 1 above the second pivot.

From here the column containing that pivot is $0$ everywhere except the pivot itself. Repeat for every pivot and the coefficient block is the identity.`,
      link: '',
    },

    obj8: {
      title: `Columns With No Pivot`,
      content: `Sometimes a column is already $0$ from the current row down. There is nothing to pivot on and nothing to eliminate, so the column is skipped.

The important detail is that the **current row does not advance**. The next pivot will be found further to the right, on the same row. That is how a staircase ends up with a step wider than one column.

A skipped column marks a **free variable**: no equation from that point on pins it down. If the system is consistent, each free variable can take any value, so the [solution set](!/algebra/equations) is infinite — a line for one free variable, a plane for two.

Counting them is the rank-nullity theorem in miniature: pivots plus free columns equals the number of unknowns. The tool reports both at the end.

The zero-matrix preset is the extreme case. Every column is skipped, there are no pivots at all, and rank is $0$. A zero matrix is already in echelon form and in reduced echelon form — vacuously, since there are no pivots for any of the rules to be violated by.`,
      before: ``,
      after: `The still is a skipped column from the free-variable preset, two equations in three unknowns. Column 2 was scanned from the remaining row down, found to be $0$, and passed over.

The run continues on the same row and finds its second pivot in column 3. Two pivots, three unknowns, one free variable, and infinitely many solutions.`,
      link: '',
    },

    obj9: {
      title: `When There Is No Solution`,
      content: `Elimination does not only solve systems. It also proves when a system cannot be solved.

If a row reduces to all zeros on the left with a non-zero constant on the right, that row is the equation $0 = c$ with $c \\neq 0$. No choice of unknowns satisfies it, so the system is **inconsistent** and has no solution at all.

The contradiction was in the original equations the whole time. Elimination did not create it — it brought it into view by combining the equations until the conflict was written in one row.

Geometrically it means $b$ is not in the [column space](!/linear-algebra/vector-spaces/fundamental-spaces#2) of $A$: the right-hand side is not reachable by any combination of the columns, so no amount of further reduction can help.

The tool highlights the offending row in the final step and names the equation it has become.`,
      before: ``,
      after: `The still is the inconsistent preset at the end of its run. Row 3 reads $0 = 1$, and the row is marked.

Note that the first two rows reduced perfectly well and the matrix has two honest pivots. A system can be most of the way to a solution and still have none.`,
      link: '',
    },

    obj10: {
      title: `Stepping Through the Run`,
      content: `The step log on the right is the record of the whole run, and it is the part of the tool worth spending time in.

**One operation per step.** Each entry names the operation in $R$ notation — $R_3 \\leftarrow R_3 - (1/2) \\cdot R_1$ — and explains underneath where the factor came from and why the solution set survived it.

**Click any step** to jump the matrix to that state. The log grows as the run advances, so the steps above the current one are the history of how the matrix got here.

**Play** advances automatically; the speed dropdown runs from slow to very fast. **Back** and **Next** step one operation at a time, and **Reset** returns to the opening scene.

**The matrix is the state after the operation named.** A caption and the matrix beside it always agree: read the caption, then look at which entry became $0$.

Switching target form or changing the matrix rebuilds the run from the top, so the step count in the indicator is always the length of the run you are actually watching.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `The Three Elementary Row Operations`,
      content: `Everything the calculator does is one of three moves, and each has its own section above.

**Row swapping** — exchange two rows, $R_i \\leftrightarrow R_j$. Used to bring a non-zero entry into a pivot position. See [swapping rows](!#swapping-rows).

**Row scaling** — multiply every entry of a row by a non-zero constant, $R_i \\rightarrow k \\cdot R_i$. Used to make a leading $1$. See [scaling to a leading 1](!#scaling-to-a-leading-1).

**Row addition** — add a multiple of one row to another, $R_i \\rightarrow R_i + k \\cdot R_j$. Used to create zeros. See [eliminating below the pivot](!#eliminating) and [clearing above](!#clearing-above).

What matters about all three is that each is **reversible**. A swap undoes itself, a scaling by $k$ is undone by scaling by $1/k$, and adding a multiple of a row is undone by subtracting it. An operation that can be undone cannot gain or lose solutions, which is why the matrix at every stage of the run describes exactly the same system as the one you typed in — a different-looking set of equations with an identical solution set.

Two matrices connected by a chain of these operations are called **row equivalent**. Every matrix is row equivalent to exactly one reduced row echelon form, which is why RREF is unique while echelon form is not.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj12: {
      title: `Back-Substitution`,
      content: `Echelon form stops short of the answer on purpose. Back-substitution is the short walk from there to the solution.

The bottom non-zero row involves only the last leading variable, so it gives that variable outright. Substitute it into the row above, which then involves only one unknown quantity, and solve. Work upward until every leading variable is known.

The tool does this for you when the echelon run finishes with a pivot in every column, and reports the result in the final step — for the default preset, $x = 17/12$, $y = 13/12$, $z = 11/6$. Switch to the reduced run and you get the same three numbers, read straight off the last column instead.

That is the trade in one sentence. Reduced echelon form costs more operations but ends with the answer written out; echelon form stops earlier and asks you to finish by hand. For solving a single system by hand, echelon form plus back-substitution is usually the faster route overall.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj13: {
      title: `What Gaussian Elimination Is`,
      content: `Gaussian elimination is an algorithm for solving systems of linear equations by transforming the augmented matrix with row operations until the answer can be read or substituted out.

Named after Carl Friedrich Gauss, though versions of it appear in Chinese mathematics roughly two thousand years earlier, it works by systematically removing each leading variable from the equations below it. The variant that continues to reduced row echelon form is usually called **Gauss-Jordan elimination**.

The method never fails to reach an answer. It solves any consistent system, identifies any inconsistent one by producing a row that reads $0 = c$, and identifies infinitely many solutions by leaving columns without pivots. There is no case it cannot classify, which is unusual for an algorithm this simple, and it is why every linear algebra course starts here.

It is also the computational backbone of the subject. Rank, inverses, [determinants](!/linear-algebra/determinants#1), null spaces and column spaces are all read off the echelon form of a matrix, so a great many later constructions are elimination wearing a different name.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj14: {
      title: `Applications`,
      content: `Elimination appears throughout mathematics, science and engineering:

**Solving linear systems** — the primary use. Essential in structural engineering, economics, physics simulations and anywhere a model produces more than a couple of simultaneous equations.

**Matrix inversion** — augment $A$ with the identity and row reduce to reduced echelon form. The right half becomes $A^{-1}$.

**Determinant calculation** — track the swaps and scalings performed. The determinant is the product of the pivots, with a sign flip for each swap.

**Rank and the four subspaces** — the number of pivots is the rank; the pivot columns of the original matrix are a basis of the column space; the free columns generate the null space.

**Circuit analysis** — Kirchhoff's laws produce a linear system for every non-trivial circuit, solved by elimination.

**Least squares** — the [normal equations](!/linear-algebra/orthogonality/least-squares#3) of a regression or curve fit are a linear system, solved the same way.

**Computer graphics** — transformations, projections and the intersection problems behind rendering all reduce to solving matrix equations.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj15: {
      title: `Related Matrix Operations`,
      content: `Gaussian elimination connects to most of the rest of linear algebra:

[LU Decomposition](!/linear-algebra/visual-tools/lu-decomposition) — factors a matrix as $A = LU$ by recording the elimination itself. $U$ is the echelon form and $L$ holds the factors used to get there, which makes it the direct continuation of this page.

[Solution Sets of Linear Systems](!/linear-algebra/visual-tools/linear-system-solutions) — takes the reduced form further and classifies the answer: one solution, none, or a parametrised infinity with one direction vector per free variable.

[Matrix Rank](!/linear-algebra/visual-tools/matrix-rank) — the same forward pass, counting pivots instead of solving. Rank is the single number that decides which of the three cases a system falls into.

[Four Fundamental Subspaces](!/linear-algebra/visual-tools/four-fundamental-subspaces) — bases for the column space, null space, row space and left null space, all read off an echelon form.

[Matrix Inverse](!/linear-algebra/visual-tools/matrix-inverse) — elimination applied to $[A \\mid I]$. Only possible for square matrices with a pivot in every column.

[Determinant](!/linear-algebra/visual-tools/matrix-determinant) — the product of the pivots, signed by the swaps, which is exactly the bookkeeping this run already performs.

[Cramer's Rule](!/linear-algebra/visual-tools/cramers-rule) — the determinant-based alternative for small square systems. Elegant, and far slower than elimination past $3 \\times 3$.`,
      before: ``,
      after: ``,
      link: '',
    }
  }

  const faqQuestions = {
    obj1: {
      question: "What is Gaussian elimination used for?",
      answer: "Gaussian elimination solves systems of linear equations by transforming the augmented matrix into row echelon form or reduced row echelon form using elementary row operations. It finds the solution of a consistent system, proves when a system is inconsistent by producing a row that reads 0 = c, and identifies infinitely many solutions by leaving columns without pivots."
    },
    obj2: {
      question: "What is the difference between echelon form and reduced echelon form?",
      answer: "Row echelon form requires zero rows at the bottom, each leading entry strictly to the right of the one above it, and zeros below every pivot. It does not require the pivots to be 1. Reduced row echelon form adds two conditions: every pivot equals 1, and every other entry of a pivot column is 0, above as well as below. Reduced echelon form gives the solution directly; echelon form requires back-substitution."
    },
    obj3: {
      question: "What are the three elementary row operations?",
      answer: "Swapping two rows, scaling a row by a non-zero constant, and adding a multiple of one row to another. Each is reversible, which is why none of them can gain or lose solutions: the matrix at every stage describes the same system as the original."
    },
    obj4: {
      question: "How do you solve a system of equations using Gaussian elimination?",
      answer: "Write the augmented matrix [A | b]. Working column by column, find a non-zero entry at or below the current row, swap it up if needed, and subtract multiples of that pivot row from the rows below to clear the column. When the staircase is complete, solve from the bottom row upward by back-substitution, or continue to reduced row echelon form and read the solution off the last column."
    },
    obj5: {
      question: "When does a system have no solution or infinitely many solutions?",
      answer: "A system has no solution when row reduction produces a row of zeros on the left with a non-zero constant on the right, the equation 0 = c. It has infinitely many solutions when some column never takes a pivot: each such column is a free variable and contributes one parameter to the solution set. Exactly one solution requires a pivot in every column and no contradictory row."
    },
    obj6: {
      question: "Do the pivots have to equal 1 in row echelon form?",
      answer: "No. Row echelon form only requires zeros below each leading entry and each leading entry to the right of the one above. Leading 1s are a requirement of reduced row echelon form, not of echelon form. This calculator leaves the pivots as it finds them in the echelon run and scales them to 1 only in the reduced run."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Gaussian Elimination Calculator - Row Echelon Form Solver",
      "description": "Interactive Gaussian elimination calculator. Row reduce an augmented matrix to echelon or reduced echelon form one operation at a time, with a full step log and exact fractions.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/gauss-elimination",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Editable augmented matrix, up to 5 equations and 5 unknowns",
        "Switch between row echelon form and reduced row echelon form on the same matrix",
        "One elementary row operation per step, named in R notation",
        "Step log with click-to-jump, play, pause and speed control",
        "Pivot row and target row highlighted at every operation",
        "Exact fractions rather than rounded decimals",
        "Presets for row swaps, free variables, inconsistent systems and the zero matrix",
        "Random system generator",
        "Back-substitution result reported at the end of an echelon run"
      ],
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "learningResourceType": "Interactive Tool",
      "educationalLevel": "High School, College",
      "keywords": keyWords.join(", ")
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
          "name": "Gaussian Elimination Calculator",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/gauss-elimination"
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

  /* ---- frozen-state demonstration units (Line 1) ----
     Ten stills from gaussDiagrams.js, which runs the tool's own
     buildScenes and freezes the first scene of each phase. Four runs are
     needed because no single one reaches every phase: REF and RREF on the
     default preset, plus the free-variable and inconsistent presets. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: gaussDiagrams[key], caption, text })

  const stateUnits = {
    intro: unit('intro', 'Opening scene, frozen',
      'The augmented matrix as entered, before any operation, with the bar separating the coefficients ' +
      'from the right-hand side. Nothing is highlighted yet because no row has been touched.'),
    refDone: unit('refDone', 'Echelon form, frozen',
      'The end of an Echelon form run: every entry below a pivot is 0, the staircase descends to the ' +
      'right, and the pivots are 2, 2 and 3 - left exactly as they were found.'),
    rrefDone: unit('rrefDone', 'Reduced echelon form, frozen',
      'The end of a Reduced echelon form run on the same matrix: an identity block beside the solution ' +
      'column, so x = 17/12, y = 13/12, z = 11/6 can be read off with no substitution at all.'),
    pivot: unit('pivot', 'First pivot, frozen',
      'The 2 at row 1, column 1 named as pivot number one, its row highlighted. Column 1 is a pivot ' +
      'column and x&#8321; is a leading variable.'),
    swap: unit('swap', 'A row swap, frozen',
      'The pivot position held a 0, so rows 1 and 2 traded places to bring a non-zero entry into it. ' +
      'Both rows are highlighted, and both really moved: a swap is the one operation that changes two ' +
      'rows at once.'),
    scale: unit('scale', 'A row scaling, frozen',
      'Row 1 divided by its pivot 2, so the leading entry becomes 1 and the rest of the row is halved. ' +
      'One row highlighted, and a scene that exists only in the reduced run.'),
    eliminate: unit('eliminate', 'An elimination below the pivot, frozen',
      'A multiple of the pivot row subtracted from a row beneath it, putting a 0 under the pivot. Both ' +
      'rows are highlighted - the one that changed and the one it was changed by, which itself does not move.'),
    eliminateAbove: unit('eliminateAbove', 'An elimination above the pivot, frozen',
      'The step echelon form never performs. Reduced echelon clears entries above a pivot as well as ' +
      'below, which is the whole difference between the two target forms.'),
    skip: unit('skip', 'A skipped column, frozen',
      'A column scanned from the current row down and found to be 0 throughout. No pivot, no elimination, ' +
      'and the current row does not advance - the next pivot will be further right on the same row.'),
    noSolution: unit('noSolution', 'An inconsistent system, frozen',
      'The end of a run whose third row reduced to 0 = 1. The row is marked; no choice of unknowns ' +
      'satisfies it, so the system has no solution at all.'),
  }

  /* ---- per-phase scene notes, passed into the component (Line 1) ----
     GaussEliminationWrapper accepts an explanations prop keyed by scene
     phase: intro, swap, pivot, scale, eliminate, eliminateAbove, skip,
     done. Captions render with dangerouslySetInnerHTML, so these are raw
     HTML anchors. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#what-gaussian-elimination-is" style="color:#1d4ed8;font-weight:600">what elimination is</a></div>`

  const explanations = {
    intro: note('Three equations written as one augmented matrix, constants in amber.', 'getting-started', 'Learn more about using the calculator'),
    swap: note('A swap only reorders equations, so the solution set is untouched.', 'swapping-rows', 'Learn more about swaps'),
    pivot: note('The pivot count at the end of the run is the rank of the matrix.', 'finding-a-pivot', 'Learn more about pivots'),
    scale: note('Dividing a row by a non-zero number leaves the same solutions - and this step belongs to the reduced run only.', 'scaling-to-a-leading-1', 'Learn more about scaling'),
    eliminate: note('Subtracting a multiple of one row from another is the operation that creates the zeros.', 'eliminating', 'Learn more about elimination'),
    eliminateAbove: note('Clearing above the pivot too - this is what separates reduced echelon from echelon.', 'clearing-above', 'Learn more about clearing above'),
    skip: note('A column with no pivot is a free variable, and the current row stays where it is.', 'free-columns', 'Learn more about free columns'),
    done: note('Echelon form is solved by back-substitution; reduced echelon form is read straight off the last column.', 'the-two-target-forms', 'Learn more about the two forms'),
  }

  return {
    props: {
      relatedTools: getRelatedTools('linear-algebra-gauss-elimination'),
      intro,
      sectionsContent,
      stateUnits,
      explanations,
      faqQuestions,
      schemas,
      seoData: {
        title: "Gaussian Elimination Calculator | Row Echelon Form Step by Step",
        description: "Row reduce an augmented matrix to echelon or reduced echelon form one operation at a time. Editable entries, exact fractions, a full step log, and presets for swaps, free variables and inconsistent systems.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/gauss-elimination",
        name: "Gaussian Elimination Calculator",
        hubDescription: "Row reduce an augmented matrix [A | b] one elementary operation at a time, stopping at row echelon form or carrying on to reduced row echelon form. Switch between the two targets on the same matrix to see exactly which extra operations Gauss-Jordan performs: both runs share the same pivots and the same below-pivot eliminations, and the reduced run adds the scalings and the above-pivot clearings. Every step names the operation in R notation, highlights the pivot row and the row it changes, and explains why the solution set is untouched. Results are exact fractions, the final step reports the rank and either the solution, the free variables, or the row that proves the system unsolvable. Edit the entries, pick a preset - swap-first, free variable, inconsistent, zero matrix - or shuffle a random system, up to 5 equations and 5 unknowns.",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="18" width="14" height="14" fill="#FAC775" stroke="#854F0B" stroke-width="1.2"/><rect x="24" y="18" width="14" height="14" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="38" y="18" width="14" height="14" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="54" y="18" width="14" height="14" fill="#C0DD97" stroke="#3B6D11" stroke-width="0.9"/><rect x="10" y="32" width="14" height="14" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.8"/><rect x="24" y="32" width="14" height="14" fill="#FAC775" stroke="#854F0B" stroke-width="1.2"/><rect x="38" y="32" width="14" height="14" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="54" y="32" width="14" height="14" fill="#C0DD97" stroke="#3B6D11" stroke-width="0.9"/><rect x="10" y="46" width="14" height="14" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.8"/><rect x="24" y="46" width="14" height="14" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.8"/><rect x="38" y="46" width="14" height="14" fill="#FAC775" stroke="#854F0B" stroke-width="1.2"/><rect x="54" y="46" width="14" height="14" fill="#C0DD97" stroke="#3B6D11" stroke-width="0.9"/><line x1="52" y1="16" x2="52" y2="62" stroke="#185FA5" stroke-width="1.2" stroke-dasharray="3,2"/><text x="17" y="28" font-family="Georgia,serif" font-size="8" fill="#412402" text-anchor="middle">1</text><text x="31" y="42" font-family="Georgia,serif" font-size="8" fill="#412402" text-anchor="middle">1</text><text x="45" y="56" font-family="Georgia,serif" font-size="8" fill="#412402" text-anchor="middle">1</text><text x="17" y="42" font-family="Georgia,serif" font-size="8" fill="#888780" text-anchor="middle">0</text><text x="17" y="56" font-family="Georgia,serif" font-size="8" fill="#888780" text-anchor="middle">0</text><text x="31" y="56" font-family="Georgia,serif" font-size="8" fill="#888780" text-anchor="middle">0</text><text x="40" y="72" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">row echelon</text></svg>`,
        category: 'Linear Systems',
        subCategory: 'Solving'
      }
    }
  }
}

export default function GaussianEliminationCalculatorPage({ seoData, intro, sectionsContent, stateUnits, explanations, schemas, relatedTools }) {

  const plain = (obj, id) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [ sectionsContent[obj].content ],
  })

  // [prose, framed unit(s), deeper prose]; a unit never closes a section.
  const stateRow = (obj, id, ...unitKeys) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [
      sectionsContent[obj].content,
      ...unitKeys.map((k) => (
        <div key={`u-${k}`} dangerouslySetInnerHTML={{ __html: stateUnits[k] }} />
      )),
      sectionsContent[obj].after,
    ],
  })

  const genericSections = [
    plain('obj0', 'key-terms'),
    stateRow('obj1', 'getting-started', 'intro'),
    stateRow('obj2', 'the-two-target-forms', 'refDone', 'rrefDone'),
    stateRow('obj3', 'finding-a-pivot', 'pivot'),
    stateRow('obj4', 'swapping-rows', 'swap'),
    stateRow('obj5', 'scaling-to-a-leading-1', 'scale'),
    stateRow('obj6', 'eliminating', 'eliminate'),
    stateRow('obj7', 'clearing-above', 'eliminateAbove'),
    stateRow('obj8', 'free-columns', 'skip'),
    stateRow('obj9', 'no-solution', 'noSolution'),
    plain('obj10', 'the-scene-player'),
    plain('obj11', 'row-operations'),
    plain('obj12', 'back-substitution'),
    plain('obj13', 'what-gaussian-elimination-is'),
    plain('obj14', 'applications'),
    plain('obj15', 'related-concepts'),
  ]

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Learn Math Class" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />

        <meta name="author" content="Learn Math Class" />

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
        topOffset='55px'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />

      <Breadcrumb/>

      <main className="container">
        <h1 className="title" style={{marginTop:'0px',marginBottom:'14px'}}>
          Gaussian Elimination Calculator
        </h1>

        <section aria-label="Matrix Equation Solver">
          {/* Page-owned intro: the h2 keeps the heading level for SEO,
              the paragraph carries what used to be the component's
              subtitle prop. */}
          <div className="tool-intro">
            <h2>{intro.heading}</h2>
            <p>{intro.body}</p>
          </div>

          <GaussEliminationWrapper
            defaultPreset='swapFirst'
            defaultMode='ref'
            explanations={explanations}
            title={null}
            subtitle={null}
          />
        </section>

        <br/>
        <br/>

        <SectionTableOfContents sections={genericSections}
          showSecondaryNav={true}
          secondaryNavMode="siblings"
          secondaryNavTitle="More in this Section"
        />

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
      </main>

      <style jsx>{`
        .container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 20px;
        }
        /* OperaSidebar's fixed 45px rail only exists from the tablet
           breakpoint up (app/lib/breakpoints.js hides it on tabletDown),
           so the gutter that clears it is scoped to the same width. Below
           that there is no rail and the space would just be wasted. */
        @media (min-width: 768px) {
          .container {
            padding-right: 62px;
          }
        }
        .title {
          text-align: center;
          margin: 2rem 0;
        }
        .tool-intro {
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-left: 4px solid #3b82f6;
          border-radius: 6px;
          padding: 9px 14px;
          margin: 0 0 14px;
        }
        .tool-intro h2 {
          margin: 0 0 2px;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.35;
          color: #1e40af;
          text-align: left;
        }
        .tool-intro p {
          margin: 0;
          font-size: 12.5px;
          line-height: 1.55;
          color: #3f5372;
        }
        @media (max-width: 768px) {
          .container {
            padding: 14px;
          }
          .title {
            font-size: 1.5rem;
            margin: 1rem 0;
          }
          .tool-intro {
            padding: 8px 11px;
          }
          .tool-intro p {
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
}
