import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import PowerIterationWrapper from '../../../../app/components/linear-algebra copy/matrix/PowerIterationWrapper'
import powerIterationDiagrams from '../../../../app/components/linear-algebra copy/matrix/powerIterationDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'power iteration',
    'power method eigenvalue',
    'dominant eigenvalue',
    'power method calculator',
    'power iteration step by step',
    'largest eigenvalue iterative method',
    'power method convergence rate',
    'eigenvalue ratio convergence',
    'power method example 2x2',
    'power method 3x3',
    'numerical linear algebra',
    'PageRank power iteration',
    'eigenvector iteration',
    'linear algebra visualizer',
    'interactive matrix tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Power iteration** (power method) — the loop $\\mathbf{x}_{k+1} = A\\mathbf{x}_k / s_k$, which converges to the eigenvector of the eigenvalue of largest modulus.

[Dominant eigenvalue](!/linear-algebra/definitions#dominant_eigenvalue) — the eigenvalue $\\lambda_1$ with the largest absolute value; it must be strictly larger in modulus than every other for the method to converge.

**Scale factor** — the number $s_k$ divided out at each step; here the entry of $A\\mathbf{x}_k$ with the largest magnitude, which tends to $\\lambda_1$.

[Normalization](!/linear-algebra/vectors/magnitude#6) — rescaling so the largest entry is $1$, keeping the numbers from overflowing or vanishing.

**Convergence ratio** — $|\\lambda_2 / \\lambda_1|$, the factor by which the error shrinks per step.

[Rayleigh quotient](!/linear-algebra/definitions#rayleigh_quotient) — $\\mathbf{x}^TA\\mathbf{x} / \\mathbf{x}^T\\mathbf{x}$, a more accurate eigenvalue estimate for symmetric matrices, not used by the tool.

**Tie** — two eigenvalues of equal largest modulus, such as $\\pm 1$ or a complex pair; the iteration then oscillates instead of converging.

**Inverse and shifted iteration** — applying the same loop to $A^{-1}$ or $(A - sI)^{-1}$ to find the smallest eigenvalue or one near $s$.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Choose a [matrix](!/linear-algebra/matrix#1) and a starting [vector](!/linear-algebra/vectors#1), then watch the estimates converge, or fail to.

• Use the **Preset** pills for seven matrices: a classic fast case, a faster one, a slow one, a negative dominant eigenvalue, a $3 \\times 3$, a tie between $1$ and $-1$, and a rotation with complex eigenvalues
• Use the **Size** stepper for $2 \\times 2$ or $3 \\times 3$, and the **steps** stepper for how many iterations to run, from one to fifteen
• Edit the entries of $A$ or of the start vector directly, or press **Shuffle** for a random matrix with small integer eigenvalues
• Hover the **?** icon for a reminder of why repeated multiplication finds the dominant eigenvector
• Press play or step manually; the step log on the right keeps every estimate

The final scene compares the last estimate with the exact dominant eigenvalue from the [characteristic polynomial](!/linear-algebra/eigen/characteristic-equation#2), reports the error, and gives the convergence ratio $|\\lambda_2 / \\lambda_1|$ that explains how fast the estimates moved.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `The Loop`,
      content: `Every step is the same three moves.

• **Multiply** — $\\mathbf{y} = A\\mathbf{x}_k$
• **Read the estimate** — $\\lambda_{k+1}$ is the entry of $\\mathbf{y}$ with the largest magnitude, sign included; since $\\mathbf{x}_k$ has largest entry $1$, that entry of $\\mathbf{y}$ is what $A$ did to it
• **Rescale** — $\\mathbf{x}_{k+1} = \\mathbf{y} / \\lambda_{k+1}$, so the largest entry is $1$ again

The caption of each step reports the change in the estimate and the largest change in any entry of the vector, so convergence is visible as those numbers shrink. The tool notes when the estimate has stopped moving to four decimals.

If $A\\mathbf{x}_k$ ever comes out zero, $\\mathbf{x}_k$ was in the null space and the run stops with a request for a different start.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `Reading the Scene Player`,
      content: `Each step shows the same four objects left to right.

• $A$, then the current vector $\\mathbf{x}_k$ in muted grey
• The product $A\\mathbf{x}_k$, with the entry of largest magnitude in accent: it is the new eigenvalue estimate
• The rescaled $\\mathbf{x}_{k+1}$ in primary blue, with an arrow from the accent entry to the $1$ it became
• In the final scene, the last vector beside the exact eigenvector, scaled the same way, as the target

A vector that stops changing and an estimate that stops moving mean convergence. A vector whose entries keep swapping or an estimate that alternates in sign mean a tie or a complex pair, and the final scene says which.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `Choosing a Matrix`,
      content: `The seven presets each make a different point.

• **Classic** — eigenvalues $5$ and $2$, ratio $0.4$; the estimates $4, 4.5, 4.78, 4.91, 4.96, 4.98$ approach $5$ from below
• **Fast** — eigenvalues $9$ and $1$, ratio $0.11$; nearly a digit per step
• **Slow** — eigenvalues $10$ and $9$, ratio $0.9$; after six steps the estimate is still far from $10$, and it takes dozens of steps to settle
• **Negative dominant** — eigenvalues $-3$ and $2$; the signed scale factor keeps the vector steady while the estimate converges to $-3$
• **$3 \\times 3$** — eigenvalues $11$, $2$, $1$, ratio $2/11$; the same matrix as the eigenvalue tool's default
• **Tie $\\pm 1$** — the swap matrix, with eigenvalues $1$ and $-1$; the vector alternates between two directions forever
• **Rotation** — complex eigenvalues $\\pm i$; the vector rotates and the estimate flips sign each step

Shuffle produces integer matrices with small integer eigenvalues; some will have ties, and the final scene will say so.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `Why It Works`,
      content: `Suppose $A$ has eigenvalues $|\\lambda_1| > |\\lambda_2| \\geq \\cdots \\geq |\\lambda_n|$ with eigenvectors $\\mathbf{v}_1, \\ldots, \\mathbf{v}_n$, and expand the start vector in that [basis](!/linear-algebra/vector-spaces#2):

$$\\mathbf{x}_0 = c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_n\\mathbf{v}_n$$

Each multiplication by $A$ scales each component by its eigenvalue, so

$$A^k\\mathbf{x}_0 = c_1\\lambda_1^k\\mathbf{v}_1 + c_2\\lambda_2^k\\mathbf{v}_2 + \\cdots = \\lambda_1^k\\left(c_1\\mathbf{v}_1 + c_2\\left(\\tfrac{\\lambda_2}{\\lambda_1}\\right)^k\\mathbf{v}_2 + \\cdots\\right)$$

Every ratio $\\lambda_i / \\lambda_1$ has modulus below $1$, so all the other components die out geometrically and $A^k\\mathbf{x}_0$ lines up with $\\mathbf{v}_1$. The slowest to die is the $\\mathbf{v}_2$ component, shrinking by $|\\lambda_2 / \\lambda_1|$ per step; that ratio is the convergence rate.

Rescaling changes nothing about the direction and keeps the entries readable. Once $\\mathbf{x}_k$ is close to $\\mathbf{v}_1$, $A\\mathbf{x}_k \\approx \\lambda_1\\mathbf{x}_k$, so the entry that was $1$ becomes $\\lambda_1$: the scale factor is the eigenvalue estimate.

Two things can go wrong. If $c_1 = 0$, the start has no $\\mathbf{v}_1$ component and the iteration converges to the next eigenvector instead; rounding error usually rescues it, but slowly. And if $|\\lambda_2| = |\\lambda_1|$, nothing dies out, and the vector oscillates between the two directions. For the theory, see the [eigenvalues overview](!/linear-algebra/eigen) and the [diagonalization page](!/linear-algebra/eigen/diagonalization).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Key Properties`,
      content: `Facts about the method.

• **Converges** when a single eigenvalue has strictly largest modulus and the start vector has a component along its eigenvector
• **Rate** is linear with factor $|\\lambda_2 / \\lambda_1|$: the error roughly multiplies by that ratio every step
• **Finds only the dominant pair**; other eigenvalues need inverse iteration, shifts, or deflation
• **Negative dominant eigenvalue** is fine when the scale factor keeps its sign; with an absolute-value normalization the vector would flip each step
• **Symmetric matrices** converge in the eigenvalue estimate twice as fast if the Rayleigh quotient is used, with error $|\\lambda_2 / \\lambda_1|^{2k}$
• **Cost per step** is one matrix-vector product, which is why it scales to enormous sparse matrices
• **Inverse iteration** on $(A - sI)^{-1}$ finds the eigenvalue nearest $s$, and converges fast when $s$ is a good guess
• **Does not need** the characteristic polynomial, a [determinant](!/linear-algebra/determinants#1), or any factorization of $A$`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `Why It Matters`,
      content: `Power iteration is the eigenvalue method that scales.

• **PageRank** is the dominant eigenvector of the web's link matrix, computed by exactly this loop over billions of pages
• **Markov chains** reach their steady state by power iteration on the transition matrix; the eigenvalue is $1$ and the vector is the stationary distribution
• **Spectral radius** estimates, which decide whether an iterative solver converges or a dynamical system is stable, come from the dominant eigenvalue
• **Principal components**: the first principal direction is the dominant eigenvector of the covariance matrix, and power iteration is the basic way to get it without forming everything
• **Sparse and matrix-free problems**, where $A$ is only available as a function that multiplies vectors, admit no factorization; iteration is the only option
• **Foundation for better methods**: inverse iteration, the QR algorithm, and Lanczos and Arnoldi are all refinements of the same idea`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Worked Example`,
      content: `Take the default preset,

$$A = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}, \\qquad \\mathbf{x}_0 = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$$

The eigenvalues are $5$ and $2$, from $\\lambda^2 - 7\\lambda + 10 = 0$, with dominant eigenvector $(1, 1)$.

**Step 1.** $A\\mathbf{x}_0 = (4, 2)$. Largest entry $4$, so $\\lambda_1 \\approx 4$ and $\\mathbf{x}_1 = (1, 0.5)$.

**Step 2.** $A\\mathbf{x}_1 = (4.5, 3.5)$. Estimate $4.5$, $\\mathbf{x}_2 = (1, 0.7778)$.

**Step 3.** $A\\mathbf{x}_2 = (4.7778, 4.3333)$. Estimate $4.7778$, $\\mathbf{x}_3 = (1, 0.9070)$.

**Step 4.** $A\\mathbf{x}_3 = (4.9070, 4.7209)$. Estimate $4.9070$, $\\mathbf{x}_4 = (1, 0.9621)$.

**Step 5.** $A\\mathbf{x}_4 = (4.9621, 4.8863)$. Estimate $4.9621$, $\\mathbf{x}_5 = (1, 0.9847)$.

**Step 6.** $A\\mathbf{x}_5 = (4.9847, 4.9542)$. Estimate $4.9847$, $\\mathbf{x}_6 = (1, 0.9939)$.

The errors in the estimate are $1, 0.5, 0.22, 0.093, 0.038, 0.015$; each is about $0.4$ times the one before, matching $|\\lambda_2 / \\lambda_1| = 2/5$. The vector's second entry closes on $1$ at the same rate. Six more steps would bring the estimate within $0.0001$ of $5$.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `A few mistakes recur.

• **Skipping the rescaling** — the direction still converges, but the entries grow like $\\lambda_1^k$ and soon overflow, or shrink to nothing if $|\\lambda_1| < 1$
• **Normalizing by absolute value with a negative eigenvalue** — the vector then flips sign every step and looks like it is not converging; keep the sign of the scale factor
• **Reading a tie as slow convergence** — if the estimates alternate between two values forever, two eigenvalues share the largest modulus; more steps will not help
• **Starting on a wrong eigenvector** — a start vector that is exactly an eigenvector for a smaller eigenvalue stays there; the classic preset with $\\mathbf{x}_0 = (1, 1)$ would "converge" in one step only because $(1, 1)$ is already the dominant eigenvector
• **Expecting all eigenvalues** — the method gives one pair; the others need shifts, inverse iteration, or deflation
• **Trusting few steps with a small ratio gap** — when $|\\lambda_2|$ is close to $|\\lambda_1|$ the estimate creeps; the slow preset is still $0.4$ away from its eigenvalue after six steps`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `[Eigenvalues and eigenvectors](!/linear-algebra/visual-tools/eigenvalues-eigenvectors) — what the method computes, one pair at a time; the eigenvalue tool finds them all exactly.

[Diagonalization](!/linear-algebra/visual-tools/matrix-diagonalization) — the expansion $\\mathbf{x}_0 = \\sum c_i\\mathbf{v}_i$ behind the convergence proof, and the formula $A^k = PD^kP^{-1}$ that shows which term wins.

[Matrix powers](!/linear-algebra/visual-tools/matrix-power) — power iteration is $A^k\\mathbf{x}_0$ computed one product at a time, with rescaling.

**Markov chains** — the steady state as a dominant eigenvector with eigenvalue $1$.

**Inverse iteration and shifts** — the same loop on $(A - sI)^{-1}$, targeting any eigenvalue.

**QR algorithm** — power iteration applied to a whole basis at once, with orthogonalization, giving all eigenvalues.

**Spectral radius** — the largest $|\\lambda|$, which the method estimates directly.

**Matrix norms** — the operator norm is the square root of the dominant eigenvalue of $A^TA$, another power-iteration target.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `The Starting Point`,
      content: `The method needs nothing but $A$ and a start vector. The frozen picture below shows the default preset's $A$ beside $\\mathbf{x}_0 = (1, 0)$, already scaled so its largest entry is $1$.

Almost any start works; the only bad choice is one with no component along the dominant eigenvector.`,
      before: ``,
      after: `The start vector's expansion in eigenvectors is what the whole method is about, even though it is never computed. Here $(1, 0) = \\tfrac{2}{3}(1, 1) + \\tfrac{1}{3}(1, -2)$, and the first component will be multiplied by $5$ each step while the second is multiplied by $2$. After $k$ steps their ratio has changed by $(2/5)^k$, and that is exactly how fast the vector turns toward $(1, 1)$.

The tool rescales whatever you enter so its largest entry is $1$, purely for readability; scaling the start changes nothing about the iterates' directions.`,
      link: '',
    },
    obj12: {
      title: `The First Step`,
      content: `The frozen picture below shows the first step on the default preset: $A\\mathbf{x}_0 = (4, 2)$, the entry $4$ marked as the estimate, and the rescaled $\\mathbf{x}_1 = (1, 0.5)$.

One multiplication has already moved the vector a third of the way from $(1, 0)$ toward $(1, 1)$.`,
      before: ``,
      after: `The estimate $4$ is the first entry of $A\\mathbf{x}_0$, and it is what $A$ did to the entry that was $1$. It is not yet the eigenvalue because $\\mathbf{x}_0$ is not yet an eigenvector; the estimate only becomes exact when the vector stops changing, since then $A\\mathbf{x} = s\\mathbf{x}$ is the eigenvector equation itself.

The choice of the largest entry as scale factor is one of several conventions. Dividing by the Euclidean length is equally common and gives a unit vector; the eigenvalue is then read from the Rayleigh quotient rather than from a single entry.`,
      link: '',
    },
    obj13: {
      title: `Closing In`,
      content: `The frozen picture below is the third step: $A\\mathbf{x}_2 = (4.7778, 4.3333)$, estimate $4.7778$, and $\\mathbf{x}_3 = (1, 0.9070)$.

The estimate's error has gone $1, 0.5, 0.22$, each step multiplying it by about $0.4$, the ratio $2/5$ of the two eigenvalues.`,
      before: ``,
      after: `This geometric shrinking is the signature of the power method, and it is also its limitation. The rate is fixed by the matrix, not by the algorithm; nothing in the loop can speed it up. When the ratio is $0.4$, four decimals cost about a dozen steps. When it is $0.9$, they cost about ninety.

The remedies all change the matrix rather than the loop: shifting to $A - sI$ to shrink the ratio, or inverting to $(A - sI)^{-1}$ so that the eigenvalue nearest $s$ becomes overwhelmingly dominant.`,
      link: '',
    },
    obj14: {
      title: `Converged`,
      content: `After six steps the frozen picture below shows $\\mathbf{x}_6 = (1, 0.9939)$ beside the exact eigenvector $(1, 1)$, with the estimate at $4.9847$ against the true $5$.

Not yet four decimals, but the final scene reports the error and the ratio, so the number of further steps needed is predictable.`,
      before: ``,
      after: `The exact values in the final scene come from the characteristic polynomial, which the tool computes only for the comparison; the method itself never needs it. That is the point: for a $2 \\times 2$ the polynomial is easier, but for a matrix with a million rows there is no polynomial to solve, and the loop of matrix-vector products is all there is.

The comparison also shows what the method delivers: one eigenvalue and one eigenvector, with an accuracy you choose by the number of steps.`,
      link: '',
    },
    obj15: {
      title: `When Convergence Is Slow`,
      content: `The slow preset has eigenvalues $10$ and $9$. The frozen picture below shows its sixth step: the estimate is still around $9.6$ and the vector is nowhere near the eigenvector $(1, 1)$.

With ratio $0.9$, each step removes only a tenth of the remaining error.`,
      before: ``,
      after: `The two eigenvectors of this matrix are $(1, 1)$ and $(1, -1)$, and the start $(1, 0)$ is exactly halfway between them. Since $9/10$ is close to $1$, the unwanted component decays very slowly, and it takes about $22$ steps to get the estimate within $0.1$ of $10$ and about $65$ to get within $0.001$.

Shifting fixes it. Iterating on $A - 8I$, with eigenvalues $2$ and $1$, has ratio $0.5$; iterating on $(A - 9.9I)^{-1}$, with eigenvalues $10$ and $-1.11$, has ratio $0.11$ and converges in a handful of steps. Choosing the shift is the art of the method.`,
      link: '',
    },
    obj16: {
      title: `When There Is No Dominant Eigenvalue`,
      content: `The tie preset is the swap matrix $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ with eigenvalues $1$ and $-1$. The frozen picture below shows its verdict: the vector alternates between $(1, 0)$ and $(0, 1)$ and never settles.

Both eigenvalues have modulus $1$, so neither component outgrows the other.`,
      before: ``,
      after: `The rotation preset fails the same way for a different reason: its eigenvalues are $\\pm i$, complex, again with equal modulus. The vector turns a quarter circle each step and the estimate flips between $1$ and $-1$.

In both cases the fix is a shift. The swap matrix shifted to $A + 0.5I$ has eigenvalues $1.5$ and $-0.5$, ratio $1/3$, and converges at once to $(1, 1)$. A real matrix with a dominant complex pair cannot be fixed by a real shift; the two-dimensional invariant plane is what the iteration actually finds, and the block power method or the QR algorithm is the tool for it.`,
      link: '',
    }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from PowerIterationWrapper's own buildScenes on the default preset
     (and the slow and tie presets for their special scenes) and rendered
     through frozenMatrixSvgFixed. Stills are found by phase and step. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: powerIterationDiagrams[key], caption, text })

  const stateUnits = {
    intro: unit('intro', 'Starting point, frozen',
      'The default preset A = [4, 1; 2, 3] with x&#8320; = (1, 0), already scaled so its largest entry is 1. ' +
      'Eigenvalues 5 and 2; the dominant eigenvector is (1, 1).'),
    step1: unit('step1', 'First step, frozen',
      'A x&#8320; = (4, 2). The entry 4 is the first estimate, and dividing by it gives x&#8321; = (1, 0.5) - ' +
      'already a third of the way toward (1, 1).'),
    step3: unit('step3', 'Third step, frozen',
      'A x&#8322; = (4.7778, 4.3333), estimate 4.7778, x&#8323; = (1, 0.9070). The errors 1, 0.5, 0.22 ' +
      'shrink by about 0.4 per step, the ratio 2/5 of the eigenvalues.'),
    done: unit('done', 'After six steps, frozen',
      'x&#8326; = (1, 0.9939) beside the exact eigenvector (1, 1); estimate 4.9847 against the true 5, ' +
      'an error of 0.015 that six more steps would cut below 0.0001.'),
    slow: unit('slow', 'Slow convergence, frozen',
      'The slow preset [9.5, 0.5; 0.5, 9.5] at its sixth step: eigenvalues 10 and 9, ratio 0.9, estimate ' +
      'still around 9.6 and the vector far from (1, 1). Each step removes only a tenth of the error.'),
    tie: unit('tie', 'No dominant eigenvalue, frozen',
      'The swap matrix with eigenvalues 1 and &minus;1: the vector alternates between (1, 0) and (0, 1) ' +
      'forever. Equal moduli mean nothing decays, so nothing converges.'),
  }


  /* ---- per-phase scene notes, passed into the component (Line 1) ----
     PowerIterationWrapper accepts an explanations prop keyed by scene
     phase: intro, iterate, done. Captions render with
     dangerouslySetInnerHTML, so these are raw HTML anchors. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#why-it-works" style="color:#1d4ed8;font-weight:600">why it works</a></div>`

  const explanations = {
    intro: note('Any start with a component along the dominant eigenvector will do.', 'the-starting-point', 'Learn more about the start'),
    iterate: note('Multiply, read the largest entry, rescale; the error shrinks by |&lambda;&#8322;/&lambda;&#8321;| per step.', 'closing-in', 'Learn more about the rate'),
    done: note('One eigenvalue and one eigenvector, to any accuracy the ratio allows.', 'converged', 'Learn more about the result'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is power iteration?",
      answer: "Power iteration, or the power method, finds the eigenvalue of largest absolute value and its eigenvector by repeatedly multiplying a vector by the matrix and rescaling. Because each multiplication scales every eigenvector component by its eigenvalue, the component with the largest eigenvalue grows fastest and eventually dominates, so the vector lines up with the dominant eigenvector and the rescaling factor converges to the dominant eigenvalue."
    },
    obj2: {
      question: "How fast does the power method converge?",
      answer: "Linearly, with the error multiplied by about |λ₂/λ₁| at every step, where λ₁ is the dominant eigenvalue and λ₂ the next largest in modulus. A ratio of 0.4 gives four decimals in about a dozen steps; a ratio of 0.9 needs roughly ninety. If the two largest moduli are equal, the method does not converge at all. For symmetric matrices the Rayleigh quotient estimate of the eigenvalue converges twice as fast, with the square of the ratio."
    },
    obj3: {
      question: "When does power iteration fail?",
      answer: "When no single eigenvalue has strictly the largest modulus. Two real eigenvalues such as 1 and −1 make the vector alternate between two directions, and a complex pair, as for a rotation, makes it turn without settling. It also fails, in exact arithmetic, if the start vector has no component along the dominant eigenvector; in practice rounding error introduces one and the method recovers slowly. A shift, iterating on A − sI, usually repairs a tie between real eigenvalues."
    },
    obj4: {
      question: "How do you find the other eigenvalues with the power method?",
      answer: "By changing the matrix. Inverse iteration applies the same loop to (A − sI)⁻¹, whose dominant eigenvalue corresponds to the eigenvalue of A closest to the shift s, so any eigenvalue can be targeted with a rough guess, and convergence is fast when the guess is good. Deflation removes an eigenvalue already found so the next one becomes dominant. The QR algorithm runs power iteration on a whole orthogonal basis at once and finds all eigenvalues."
    },
    obj5: {
      question: "Where is power iteration used?",
      answer: "Wherever the matrix is too large to factor. Google's PageRank is the dominant eigenvector of the web link matrix computed by power iteration; Markov chain steady states, the first principal component in data analysis, spectral radius estimates for stability and for solver convergence, and eigenvalue problems where the matrix is only available as a function that multiplies vectors all use it or its refinements, the Lanczos and Arnoldi methods."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Power Iteration Visualizer",
      "description": "Step-by-step visualizer for the power method: multiply a start vector by a 2×2 or 3×3 matrix, read the entry of largest magnitude as the eigenvalue estimate, rescale, and repeat, with the estimates compared against the exact dominant eigenvalue and the convergence ratio |λ₂/λ₁| explained.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/power-iteration",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Editable 2×2 or 3×3 matrix and start vector, seven presets and a shuffle with integer eigenvalues",
        "One scene per step: A xₖ, the largest entry as the estimate, and the rescaled xₖ₊₁",
        "Change in the estimate and in the vector reported at every step",
        "Final comparison with the exact dominant eigenvalue and eigenvector",
        "Convergence ratio |λ₂/λ₁| computed and explained",
        "Ties, complex pairs and negative dominant eigenvalues handled and explained",
        "One to fifteen steps, adjustable playback speed and scrollable step log"
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
      "educationalLevel": "College",
      "keywords": "power iteration, power method eigenvalue, dominant eigenvalue, power method calculator, power iteration step by step, largest eigenvalue iterative method, power method convergence rate, eigenvalue ratio convergence, power method example 2x2, power method 3x3, numerical linear algebra, PageRank power iteration, eigenvector iteration, linear algebra visualizer, interactive matrix tool"
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
          "name": "Power Iteration",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/power-iteration"
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
      relatedTools: getRelatedTools('linear-algebra-power-iteration'),
      sectionsContent,
      stateUnits,
      explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Power Iteration Visualizer | Dominant Eigenvalue Step by Step",
        description: "Watch the power method find the dominant eigenvalue of a 2×2 or 3×3 matrix: multiply, read the largest entry, rescale, repeat. Estimates compared with the exact eigenvalue, convergence ratio explained, ties and complex pairs handled.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/power-iteration",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="66" x2="12" y2="14" stroke="#B5D4F4" stroke-width="1"/><line x1="12" y1="66" x2="68" y2="66" stroke="#B5D4F4" stroke-width="1"/><line x1="12" y1="66" x2="64" y2="22" stroke="#FAC775" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="12" y1="66" x2="56" y2="66" stroke="#85B7EB" stroke-width="2" opacity="0.5"/><line x1="12" y1="66" x2="56" y2="52" stroke="#85B7EB" stroke-width="2" opacity="0.7"/><line x1="12" y1="66" x2="56" y2="38" stroke="#85B7EB" stroke-width="2" opacity="0.85"/><line x1="12" y1="66" x2="58" y2="28" stroke="#97C459" stroke-width="3"/><path d="M 62 24.5 L 53.5 27 L 57.5 33 Z" fill="#97C459"/><text x="66" y="18" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">v&#8321;</text><text x="40" y="77" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">x&#8342;&#8330;&#8321; = A x&#8342; / s</text></svg>`,
        name: "Power Iteration Visualizer",
        hubDescription: "Run the power method on a matrix of your own numbers: multiply a start vector by A, read the entry of largest magnitude as the eigenvalue estimate, rescale, and repeat for as many steps as you choose. Each step reports how much the estimate and the vector moved, and the final scene compares them with the exact dominant eigenvalue and eigenvector, gives the convergence ratio |λ₂/λ₁|, and explains ties, complex pairs and negative dominant eigenvalues. Presets range from a fast case to a crawling one and a swap matrix that never converges.",
        category: 'Matrices',
        subCategory: 'Eigenvalues'
      }
    }
  }
}

export default function PowerIterationVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas, relatedTools }) {

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
    plain('obj2', 'the-loop'),
    stateRow('obj11', 'the-starting-point', 'intro'),
    stateRow('obj12', 'the-first-step', 'step1'),
    stateRow('obj13', 'closing-in', 'step3'),
    stateRow('obj14', 'converged', 'done'),
    stateRow('obj15', 'when-convergence-is-slow', 'slow'),
    stateRow('obj16', 'when-there-is-no-dominant-eigenvalue', 'tie'),
    plain('obj3', 'the-scene-player'),
    plain('obj4', 'choosing-a-matrix'),
    plain('obj5', 'why-it-works'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Power Iteration</h1>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <PowerIterationWrapper
   defaultPreset='classic'
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
