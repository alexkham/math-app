import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import PowerWrapper from '../../../../app/components/linear-algebra copy/matrix/PowerWrapper'
import powerDiagrams, { meta as powerMeta } from '../../../../app/components/linear-algebra copy/matrix/powerDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'matrix power',
    'matrix powers',
    'matrix to the power n',
    'matrix exponentiation',
    'A squared matrix',
    'A cubed matrix',
    'matrix power visualizer',
    'matrix power calculator',
    'repeated matrix multiplication',
    'matrix power formula',
    'powers of a matrix step by step',
    'fibonacci matrix power',
    'markov chain matrix power',
    'linear algebra visualizer',
    'interactive matrix tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `[Matrix power](!/linear-algebra/matrix/operations#9) — $A^n = A \\cdot A \\cdots A$, the product of $n$ copies of a [square matrix](!/linear-algebra/definitions#square_matrix) $A$.

[Square requirement](!/linear-algebra/definitions#conformability) — only a square matrix can be multiplied by itself; an $m \\times n$ matrix with $m \\neq n$ has no powers.

[Exponent rules](!/linear-algebra/matrix/operations#9) — $A^m A^n = A^{m+n}$ and $(A^m)^n = A^{mn}$, exactly as for numbers; $A^0 = I$ and $A^1 = A$.

[Associativity](!/linear-algebra/matrix/operations#6) — $(AB)C = A(BC)$, which is why the copies of $A$ can be grouped in any order and the power is well defined.

**Path expansion** — the entry $(A^n)_{i,j}$ is the sum over all index chains $i \\to k_1 \\to \\cdots \\to k_{n-1} \\to j$ of the products $a_{i,k_1} a_{k_1,k_2} \\cdots a_{k_{n-1},j}$; there are $s^{n-1}$ of them for an $s \\times s$ matrix.

**Bracket and collapse** — the tool's choreography: group the next pair of factors, then replace the pair by the higher power.

[Diagonalization shortcut](!/linear-algebra/definitions#diagonalization) — if $A = PDP^{-1}$ then $A^n = PD^nP^{-1}$, and only the diagonal entries are raised to the power.

[Nilpotent and idempotent](!/linear-algebra/matrix/types#8) — matrices with $A^k = 0$ for some $k$, or with $A^2 = A$; two cases where the powers stop changing.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Set the size of $A$ and the exponent, then watch the copies collapse into a single power.

• Use the **Matrix size** stepper for $2 \\times 2$ up to $4 \\times 4$; both [dimensions](!/linear-algebra/vector-spaces/dimension#1) move together because $A$ must be square
• Use the **Exponent** stepper for $n$ from $1$ to $5$; the run has $2(n - 1) + 1$ scenes, two per collapse plus the definition
• Hover the **?** icon for a reminder of what a [matrix](!/linear-algebra/matrix#1) power is and why the matrix must be square
• Press play or step manually through the scene player; the speed selector and step log let you control pace and review
• From $A^3$ upward the cells switch to a $\\Sigma$ summary; **hover any cell** to see its full expansion as a tooltip, with the number of terms in its header

Everything is symbolic. The entries of $A$ stay as $a_{i,j}$, so what you see is the structure of each entry of $A^n$, not a numerical result.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `Bracket and Collapse`,
      content: `The visualizer computes $A^n$ the way the definition suggests: pairwise, from the left.

• **Definition** — the opening scene shows $n$ copies of $A$ in a row with multiplication signs between them
• **Bracket** — a dashed group encloses the leftmost pair, labelled with the power it is about to become; the exponents add, $p + 1$
• **Collapse** — the pair is replaced by a single matrix $A^{p+1}$, highlighted, with one fewer bare copy of $A$ to its right
• The bracket and collapse repeat until one matrix remains; the final scene wraps $A^n$ in a solid group

The left-to-right grouping is a choice, not a requirement. Matrix multiplication is associative, so $(A \\cdot A) \\cdot A$ and $A \\cdot (A \\cdot A)$ give the same $A^3$, and the caption on the final scene says so. What the choreography shows is the exponent growing by one at each collapse and the cell contents growing with it.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `Reading the Scene Player`,
      content: `The cells change character as the power grows, because their content grows exponentially.

• **$A$** — each cell is a single entry $a_{i,j}$
• **$A^2$** — each cell shows its full content inline: for a $2 \\times 2$, $a_{i,1} a_{1,j} + a_{i,2} a_{2,j}$, two products
• **$A^3$ and beyond** — each cell shows a $\\Sigma$ summary, $\\sum_{k_1, k_2} a_{i,k_1} a_{k_1,k_2} a_{k_2,j}$, because the full sum has $s^{n-1}$ terms; hover the cell and a tooltip lists every term, with the count in its header
• In a **bracket** scene, the two matrices being grouped are highlighted primary inside a dashed outline labelled with the coming power
• In a **collapse** scene, the new power is highlighted accent, and on the final scene it sits inside a solid outline
• The step log on the right keeps a record of every bracket and collapse

The tooltips are where the definition becomes concrete. A cell of $A^4$ in a $3 \\times 3$ matrix holds $27$ products of four factors each; the tooltip shows all of them.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `Choosing Size and Exponent`,
      content: `Size sets how many terms each cell has; the exponent sets how many factors each term has.

• A $2 \\times 2$ matrix at exponent $2$ is the smallest non-trivial case: four cells, two terms each, everything visible inline
• Raising the exponent to $3$ at size $2$ gives four terms per cell, and the display switches to the $\\Sigma$ summary with tooltips
• Raising the size to $3$ at exponent $2$ gives three terms per cell, still inline; at exponent $3$, nine terms; at exponent $4$, twenty-seven
• A $4 \\times 4$ matrix at exponent $5$ has $256$ terms per cell, which is the point at which the $\\Sigma$ notation stops being a convenience and becomes the only sensible way to write the entry

The term count is $s^{n-1}$ for an $s \\times s$ matrix, one term for every chain of intermediate indices. That growth is why powers are computed by repeated multiplication or by diagonalization, never by expanding the formula.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `What a Matrix Power Is`,
      content: `For a [square matrix](!/linear-algebra/matrix/types#1) $A$ and a positive integer $n$,

$$A^n = \\underbrace{A \\cdot A \\cdots A}_{n \\text{ factors}}, \\qquad A^0 = I$$

Because [matrix multiplication](!/linear-algebra/formulas#matrix_multiplication) is associative, the product does not depend on how the factors are grouped, and the familiar exponent rules follow: $A^m A^n = A^{m+n}$ and $(A^m)^n = A^{mn}$. What does not follow is anything involving two different matrices: $(AB)^n$ is not $A^n B^n$ unless $A$ and $B$ commute.

Entry by entry, the power is a sum over chains of indices. Applying the row-times-column rule $n - 1$ times gives

$$(A^n)_{i,j} = \\sum_{k_1, \\ldots, k_{n-1}} a_{i,k_1} a_{k_1,k_2} \\cdots a_{k_{n-1},j}$$

one product for every way of getting from $i$ to $j$ in $n$ steps through intermediate indices. This is the formula the tool's cells display, inline while it is short and as a $\\Sigma$ with a tooltip once it is not.

The path reading is literal for adjacency matrices: if $a_{i,j}$ is $1$ when there is an edge from $i$ to $j$ and $0$ otherwise, then $(A^n)_{i,j}$ counts the walks of length $n$ from $i$ to $j$. For the algebra of matrix operations in general, see the [matrix operations theory page](!/linear-algebra/matrix/operations).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Key Properties`,
      content: `Powers of a single matrix behave like powers of a number; powers of products do not.

• **Exponent rules**: $A^m A^n = A^{m+n}$, $(A^m)^n = A^{mn}$, $A^0 = I$
• **Commuting powers**: $A^m$ and $A^n$ always commute with each other
• **Products**: $(AB)^n = A^n B^n$ only when $AB = BA$
• **Determinant**: $\\det(A^n) = (\\det A)^n$
• **Transpose and inverse**: $(A^n)^T = (A^T)^n$, and $(A^n)^{-1} = (A^{-1})^n = A^{-n}$ when $A$ is invertible
• **Diagonal matrices**: $D^n$ raises each diagonal entry to the $n$-th power
• **Diagonalizable matrices**: $A = PDP^{-1}$ gives $A^n = PD^nP^{-1}$, so the [eigenvalues](!/linear-algebra/eigen#2) are raised to the power and the [eigenvectors](!/linear-algebra/eigen#2) are untouched
• **Idempotent**: $A^2 = A$ means every power equals $A$; projections are the standard example
• **Nilpotent**: $A^k = 0$ for some $k$; strictly triangular matrices are the standard example
• **Growth**: for large $n$, $A^n$ is dominated by the eigenvalue of largest absolute value`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `Why It Matters`,
      content: `Anything that evolves by the same linear rule at every step is a matrix power.

• **Markov chains**: if $P$ holds the one-step transition probabilities, $P^n$ holds the $n$-step probabilities, and $P^n$ converging is the chain settling to a steady state
• **Graph walks**: $(A^n)_{i,j}$ counts walks of length $n$ from vertex $i$ to vertex $j$ in the graph with adjacency matrix $A$
• **Linear recurrences**: the Fibonacci numbers, and every sequence defined by a fixed linear rule, are read off the powers of a companion matrix
• **Discrete dynamical systems**: population models, coupled oscillators sampled in time, and any system with $\\mathbf{x}_{t+1} = A\\mathbf{x}_t$ have $\\mathbf{x}_t = A^t \\mathbf{x}_0$
• **The matrix exponential**: $e^{At} = \\sum A^n t^n / n!$ solves linear differential equations, and every term is a matrix power
• **Eigenvalues by iteration**: power iteration multiplies a [vector](!/linear-algebra/vectors#1) by $A$ repeatedly, and the vector turns toward the dominant eigenvector`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Worked Example`,
      content: `Take the Fibonacci matrix

$$A = \\begin{pmatrix} 1 & 1 \\\\ 1 & 0 \\end{pmatrix}$$

Then

$$A^2 = \\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix}, \\quad A^3 = \\begin{pmatrix} 3 & 2 \\\\ 2 & 1 \\end{pmatrix}, \\quad A^4 = \\begin{pmatrix} 5 & 3 \\\\ 3 & 2 \\end{pmatrix}, \\quad A^5 = \\begin{pmatrix} 8 & 5 \\\\ 5 & 3 \\end{pmatrix}$$

Every power holds three consecutive Fibonacci numbers: $A^n$ has $F_{n+1}$ in the top left, $F_n$ on the anti-diagonal, and $F_{n-1}$ in the bottom right. The exponent rule $A^{m+n} = A^m A^n$ turns into the addition formula $F_{m+n} = F_m F_{n+1} + F_{m-1} F_n$, and $\\det(A^n) = (\\det A)^n = (-1)^n$ is Cassini's identity, $F_{n+1} F_{n-1} - F_n^2 = (-1)^n$.

Check one entry of $A^4$ against the path formula: $(A^4)_{1,1}$ is the sum over the eight chains $1 \\to k_1 \\to k_2 \\to k_3 \\to 1$ of the products $a_{1,k_1} a_{k_1,k_2} a_{k_2,k_3} a_{k_3,1}$. Since the only zero entry is $a_{2,2}$, a chain contributes $1$ exactly when it never steps $2 \\to 2$; there are five such chains, and $(A^4)_{1,1} = 5 = F_5$. Set the visualizer to $2 \\times 2$ and exponent $4$, hover the top-left cell of $A^4$, and count the eight terms.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `A few mistakes recur.

• **Raising each entry to the power** — $A^2$ is $A \\cdot A$, not the matrix of squared entries; those agree only for diagonal matrices
• **Applying $(AB)^n = A^n B^n$** — false unless $A$ and $B$ commute, because the factors cannot be reordered
• **Powers of non-square matrices** — undefined; the inner dimensions of $A \\cdot A$ must match, which forces $A$ to be square
• **Expanding the formula by hand** — the term count is $s^{n-1}$ per cell; multiply repeatedly or diagonalize instead
• **Forgetting $A^0 = I$** — the empty product is the identity, which is what makes $A^m A^0 = A^m$ work
• **Expecting powers to shrink or grow uniformly** — the behaviour of $A^n$ is governed by the eigenvalues, and different directions can grow, shrink or rotate at the same time`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `[Matrix multiplication](!/visual-tools/matrix-multiplication) — the operation repeated; every collapse is one product.

[Matrix composition](!/linear-algebra/visual-tools/matrix-composition-2d) — a power is the same transformation applied $n$ times in a row.

[Diagonalization](!/linear-algebra/visual-tools/matrix-diagonalization) — the shortcut $A^n = PD^nP^{-1}$ that turns powers into scalar powers.

[Eigenvalues](!/linear-algebra/visual-tools/eigenvalues-eigenvectors) — they decide whether $A^n$ grows, decays or oscillates, and power iteration extracts the dominant one.

[Determinant](!/linear-algebra/visual-tools/matrix-determinant) — multiplicative, so $\\det(A^n) = (\\det A)^n$.

[Inverse](!/linear-algebra/visual-tools/matrix-inverse) — negative powers, when $A$ is invertible.

**Adjacency matrices** — powers count walks in a graph.

**Matrix exponential** — the infinite series of powers that solves linear differential equations.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `The Definition: n Copies of A`,
      content: `The player opens with $n$ copies of $A$ in a row, multiplication signs between them, and no power formed yet. At the defaults that is four $2 \\times 2$ copies.

Nothing is computed. What the scene establishes is the definition, $A^4 = A \\cdot A \\cdot A \\cdot A$, and the plan: collapse the copies pairwise from the left.`,
      before: ``,
      after: `The row of identical factors is the whole content of the definition, and it makes the square requirement visible: each multiplication sign needs the columns of the matrix on its left to match the rows of the matrix on its right, which for identical matrices means rows equal columns.

Associativity is what makes the row unambiguous. Without it, $A \\cdot A \\cdot A$ would need brackets to mean anything; with it, any bracketing gives the same matrix, and the tool's left-to-right choice is just one of the possibilities.`,
      link: '',
    },
    obj12: {
      title: `The First Collapse: A Squared`,
      content: `The first bracket groups the leftmost pair and the first collapse replaces it by $A^2$, leaving two bare copies to its right. At $2 \\times 2$ every cell of $A^2$ is written out in full: $a_{i,1} a_{1,j} + a_{i,2} a_{2,j}$.

The frozen picture below is that collapse: $A^2 \\cdot A \\cdot A$, with the square highlighted and its ${powerMeta.termsPerCell[2]} terms per cell readable inline.`,
      before: ``,
      after: `Each cell of $A^2$ is a row of $A$ dotted with a column of $A$, the same row-times-column rule as any product, applied to a matrix and itself. The two terms are the two chains $i \\to 1 \\to j$ and $i \\to 2 \\to j$.

This is the last power at which everything fits in the cell. The next collapse multiplies every term by a further row-times-column sum, and the count doubles.`,
      link: '',
    },
    obj13: {
      title: `The Second Collapse: A Cubed and the Σ Summary`,
      content: `The second collapse forms $A^3$, and the cells change character: each now holds ${powerMeta.termsPerCell[3]} products of three factors, too many to write inline, so the tool shows a $\\Sigma$ summary and moves the full expansion into a hover tooltip.

The frozen picture below is $A^3 \\cdot A$ with the cube highlighted, each cell reading $\\sum_{k_1, k_2} a_{i,k_1} a_{k_1,k_2} a_{k_2,j}$.`,
      before: ``,
      after: `The summary is the general formula for a matrix power, one product for every chain of intermediate indices. Hovering a cell in the live tool lists the chains explicitly, and the header of the tooltip counts them.

Reading the $\\Sigma$ as a sum over paths is what turns matrix powers into counting. For an adjacency matrix the products are $0$ or $1$ and the sum counts walks; for a transition matrix the products are probabilities and the sum is the probability of arriving in $n$ steps.`,
      link: '',
    },
    obj14: {
      title: `The Result: A to the Fourth`,
      content: `The final collapse leaves a single matrix, $A^4$, inside a solid outline. Each cell is a sum of ${powerMeta.termsPerCell[4]} products of four factors, summarised as $\\sum_{k_1, k_2, k_3} a_{i,k_1} \\cdots a_{k_3,j}$.

The frozen picture below is the result at the defaults.`,
      before: ``,
      after: `The exponent went $1, 2, 3, 4$ across the three collapses, and the term count went $1, 2, 4, 8$: multiplying by one more $A$ doubles the number of chains, because each existing chain can be extended through either of the two intermediate indices.

The final caption makes the point that the bracketing did not matter. Grouping from the right, or as $(A \\cdot A)(A \\cdot A)$, would have produced the same matrix by a different sequence of scenes, and that freedom, associativity, is what makes $A^4$ a well-defined thing rather than a recipe.`,
      link: '',
    },
    obj15: { title: ``, content: ``, before: ``, after: ``, link: '' }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     PowerWrapper keeps its scene builder private, so these stills are
     composed in powerDiagrams.js from the same cell semantics (inline
     products for A², Σ summaries beyond) and rendered through
     frozenMatrixSvgFixed. The tool's group-bracket overlays are not
     reproduced; the highlights carry each state. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: powerDiagrams[key], caption, text })

  const stateUnits = {
    chain: unit('chain', 'The definition, frozen',
      'Four copies of A in a row: A<sup>4</sup> = A&middot;A&middot;A&middot;A. Nothing computed yet; the copies will ' +
      'collapse pairwise from the left, and associativity is what makes that choice harmless.'),
    square: unit('square', 'First collapse, frozen',
      'A<sup>2</sup>&middot;A&middot;A with the square highlighted. Each cell reads a<sub>i,1</sub>a<sub>1,j</sub> + ' +
      'a<sub>i,2</sub>a<sub>2,j</sub> - a row of A against a column of A, the last power that fits inline.'),
    cube: unit('cube', 'Second collapse, frozen',
      'A<sup>3</sup>&middot;A with the cube highlighted. Four products per cell now, so the tool writes the &Sigma; ' +
      'summary over k<sub>1</sub>, k<sub>2</sub> and moves the expansion into a hover tooltip.'),
    final: unit('final', 'The result, frozen',
      'A<sup>4</sup> alone: eight products of four factors in every cell, one for each chain of intermediate ' +
      'indices. The term count doubled at every collapse.'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is a matrix power?",
      answer: "A matrix power A^n is the product of n copies of a square matrix A: A · A · … · A. It is defined only for square matrices, because the columns of one factor must match the rows of the next. By convention A^0 is the identity matrix and A^1 is A itself."
    },
    obj2: {
      question: "Is A squared the same as squaring each entry?",
      answer: "No. A² means A multiplied by A using the row-times-column rule, so each entry of A² is a sum of products of entries from a row and a column of A. Squaring the entries individually gives a different matrix, except for diagonal matrices, where the two agree because all the off-diagonal products vanish."
    },
    obj3: {
      question: "How many terms does an entry of A^n have?",
      answer: "For an s × s matrix, each entry of A^n is a sum of s^(n−1) products of n entries of A, one product for every chain of intermediate indices from the row to the column. A 2 × 2 matrix has 2 terms per entry of A², 4 per entry of A³, and 8 per entry of A⁴; a 3 × 3 matrix has 3, 9 and 27. This growth is why powers are computed by repeated multiplication or diagonalization rather than by expanding the formula."
    },
    obj4: {
      question: "Does the order of grouping matter when computing a matrix power?",
      answer: "No. Matrix multiplication is associative, so (A·A)·A equals A·(A·A), and any way of bracketing n copies of A gives the same A^n. The visualizer collapses the copies from the left, but that is a presentational choice. What is not allowed is reordering different matrices: (AB)^n equals A^n B^n only when A and B commute."
    },
    obj5: {
      question: "What are matrix powers used for?",
      answer: "Matrix powers describe anything that evolves by the same linear rule at every step. The n-th power of a transition matrix gives n-step probabilities in a Markov chain, the n-th power of an adjacency matrix counts walks of length n in a graph, and powers of a companion matrix generate linear recurrences such as the Fibonacci numbers. Powers also appear in the matrix exponential that solves linear differential equations and in power iteration for finding eigenvalues."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Matrix Power Visualizer",
      "description": "Step-by-step visualizer for matrix powers. Watch n copies of A collapse pairwise into A^n, with every cell showing its real symbolic content inline or as a Σ summary with a hover tooltip listing every term.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-power",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Bracket-and-collapse choreography from n copies of A down to A^n",
        "Sizes 2×2 to 4×4 and exponents 1 to 5",
        "Cells of A² written out inline; cells of higher powers summarised with Σ",
        "Hover tooltips listing every term of any cell, with the term count",
        "Dashed and solid group outlines marking the pair being collapsed and the result",
        "Adjustable playback speed and scrollable step log",
        "Tooltip explaining matrix powers and the square requirement"
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
      "keywords": "matrix power, matrix powers, matrix to the power n, matrix exponentiation, A squared matrix, A cubed matrix, matrix power visualizer, matrix power calculator, repeated matrix multiplication, matrix power formula, powers of a matrix step by step, fibonacci matrix power, markov chain matrix power, linear algebra visualizer, interactive matrix tool"
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
          "name": "Matrix Power",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-power"
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
      relatedTools: getRelatedTools('linear-algebra-matrix-power'),
      sectionsContent,
      stateUnits,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Matrix Power Visualizer | Aⁿ by Repeated Multiplication",
        description: "Visualize matrix powers step by step. Watch n copies of A collapse pairwise into Aⁿ, with every cell showing its symbolic content and a hover tooltip listing every term.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/matrix-power",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="30" width="7" height="7" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.7"/><rect x="11" y="30" width="7" height="7" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.7"/><rect x="4" y="37" width="7" height="7" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.7"/><rect x="11" y="37" width="7" height="7" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.7"/><text x="22" y="40" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle">&#183;</text><rect x="26" y="30" width="7" height="7" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.7"/><rect x="33" y="30" width="7" height="7" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.7"/><rect x="26" y="37" width="7" height="7" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.7"/><rect x="33" y="37" width="7" height="7" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.7"/><rect x="2" y="27" width="40" height="20" fill="none" stroke="#B5D4F4" stroke-width="0.8" stroke-dasharray="2,1.5" rx="3"/><text x="50" y="40" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle">&#8594;</text><rect x="57" y="27" width="10" height="10" fill="#FAC775" stroke="#854F0B" stroke-width="0.9"/><rect x="67" y="27" width="10" height="10" fill="#FAC775" stroke="#854F0B" stroke-width="0.9"/><rect x="57" y="37" width="10" height="10" fill="#FAC775" stroke="#854F0B" stroke-width="0.9"/><rect x="67" y="37" width="10" height="10" fill="#FAC775" stroke="#854F0B" stroke-width="0.9"/><text x="67" y="20" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">A&#178;</text><text x="40" y="64" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">A&#8319; = A&#183;A&#183;&#8943;&#183;A</text></svg>`,
        name: "Matrix Power Visualizer",
        hubDescription: "Watch n copies of a square matrix collapse pairwise into Aⁿ, one bracket-and-collapse per stage, with the exponent growing by one each time. Cells of A² are written out in full as sums of products; from A³ upward each cell shows a Σ summary, and hovering it lists every term with the count in the header. Sizes 2×2 to 4×4 and exponents up to 5, which is enough to see the term count double or triple at every collapse.",
        category: 'Matrices',
        subCategory: 'Matrix Operations'
      }
    }
  }
}

export default function MatrixPowerVisualizer({seoData, sectionsContent, stateUnits, introContent, faqQuestions, schemas, relatedTools }) {

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
    plain('obj2', 'bracket-and-collapse'),
    stateRow('obj11', 'the-definition', 'chain'),
    stateRow('obj12', 'the-first-collapse', 'square'),
    stateRow('obj13', 'the-second-collapse', 'cube'),
    stateRow('obj14', 'the-result', 'final'),
    plain('obj3', 'the-scene-player'),
    plain('obj4', 'choosing-size-and-exponent'),
    plain('obj5', 'what-a-matrix-power-is'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Matrix Powers</h1>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <PowerWrapper
   title=""
   defaultSize={2}
   defaultExponent={4}
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
