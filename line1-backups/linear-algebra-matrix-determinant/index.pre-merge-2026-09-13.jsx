import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import DeterminantWrapper from '../../../../app/components/linear-algebra copy/matrix/DeterminantWrapper'
import determinantDiagrams from '../../../../app/components/linear-algebra copy/matrix/determinantDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'


export async function getStaticProps(){

  const keyWords = [
    'determinant',
    'determinant of a matrix',
    'determinant visualizer',
    'determinant step by step',
    'cofactor expansion',
    'laplace expansion',
    'sarrus rule',
    'rule of sarrus',
    '3x3 determinant',
    '2x2 determinant',
    'how to find the determinant',
    'determinant formula',
    'minors and cofactors',
    'linear algebra visualizer',
    'interactive matrix tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Determinant** — the number $\\det A$, also written $|A|$, attached to every square matrix; the signed factor by which $A$ scales area or volume.

**Minor** — $M_{i,j}$, the determinant of the submatrix left after striking row $i$ and column $j$.

**Cofactor** — $C_{i,j} = (-1)^{i+j} M_{i,j}$, the minor with the checkerboard sign attached.

**Cofactor expansion** — $\\det A = \\sum_j a_{i,j} C_{i,j}$ along any row $i$, or the same along any column; also called Laplace expansion.

**Sarrus's rule** — for $3 \\times 3$ only: repeat the first two columns, add the three downward diagonal products, subtract the three upward ones.

**Singular** — $\\det A = 0$; the matrix has no inverse and collapses space onto something lower-dimensional.

**Orientation** — the sign of the determinant: positive when $A$ preserves handedness, negative when it reverses it.

**Term count** — $n!$ products for an $n \\times n$ matrix: $2$, $6$, $24$, $120$, which is why expansion is a small-matrix method.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Pick a method and a size, then watch the terms of the determinant appear one at a time.

• Use the **Method** pills to switch between **cofactor expansion** along the first row and **Sarrus's rule**; the Sarrus pill is available only at $3 \\times 3$, because the rule has no other size
• Use the **Size** stepper for $2 \\times 2$ or $3 \\times 3$; at $2 \\times 2$ the expansion collapses to the familiar $ad - bc$
• Hover the **?** icon for a reminder of what the determinant measures and how the two methods relate
• Press play or step manually through the scene player; the speed selector and step log let you control pace and review
• Everything is symbolic: the entries of $A$ stay as $a_{i,j}$ and each term is written out in full, so what you see is the formula, not a numerical example

Run both methods at $3 \\times 3$ and compare the final scenes: the cofactor expansion's three bracketed terms multiply out to exactly the six products that Sarrus's rule lists.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `The Two Methods`,
      content: `Both methods produce the same number by different bookkeeping.

• **Cofactor expansion** — one scene per entry of the first row. Row $1$ and column $j$ are struck, the determinant of what remains is the minor, the sign $(-1)^{1+j}$ is attached, and the term $\\pm a_{1,j} M_{1,j}$ is written into a row of terms. At $3 \\times 3$ there are three terms, each a $2 \\times 2$ determinant; at $2 \\times 2$ there are two, each a single entry
• **Sarrus's rule** — the first two columns of $A$ are repeated to the right, and one scene per diagonal reads off a product of three entries: three downward diagonals are added, three upward ones are subtracted, six terms in all

The final scene of either method sums the terms into $\\det A$. Cofactor expansion generalizes to any size and to any row or column; Sarrus's rule is a memory aid that exists for $3 \\times 3$ alone and gives wrong answers if forced onto a $4 \\times 4$.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `Reading the Scene Player`,
      content: `Each scene combines highlights, an arrow, and a caption.

• In a cofactor **term** scene, the pivot entry $a_{1,j}$ is primary, the rest of its row and column are greyed and lined through, the surviving minor is secondary, and the new term in the terms row is accent, with an arrow from the pivot to it
• In a Sarrus **diagonal** scene, the three entries of the diagonal are primary for a downward diagonal and secondary for an upward one, and the new product in the terms row is accent; the repeated columns are shown in grey
• In the **done** scene, every term is highlighted and the $\\det A$ slot fills
• Term cells show the full signed term: $-a_{1,2}(a_{2,1}a_{3,3} - a_{2,3}a_{3,1})$ for a cofactor term, $-a_{1,3}a_{2,2}a_{3,1}$ for a Sarrus product
• The step log on the right keeps a record of every term`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `Choosing the Size`,
      content: `The stepper offers $2 \\times 2$ and $3 \\times 3$, and the limit is deliberate.

• At $2 \\times 2$ every minor is a single entry and the expansion is $a_{1,1}a_{2,2} - a_{1,2}a_{2,1}$: two terms, one of each sign
• At $3 \\times 3$ every minor is a $2 \\times 2$ determinant, and the three bracketed terms multiply out to six products; this is the size at which the checkerboard of signs starts to matter, and the size Sarrus's rule was invented for
• At $4 \\times 4$ each cofactor would be a $3 \\times 3$ determinant with six terms, twenty-four products in total; the expressions no longer fit in a cell, and by hand the method is already impractical
• Beyond that, determinants are computed by row reduction, since the determinant of a triangular matrix is the product of its diagonal; the [LU decomposition visualizer](!/linear-algebra/visual-tools/lu-decomposition) shows that route`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `What the Determinant Is`,
      content: `The determinant of a square matrix is a single number with two faces, one geometric and one algebraic.

Geometrically, $|\\det A|$ is the factor by which the transformation $A$ scales area in the plane or volume in space: the unit square maps to a parallelogram of area $|\\det A|$, the unit cube to a parallelepiped of volume $|\\det A|$. The sign records orientation, negative when $A$ turns a right-handed frame into a left-handed one. And $\\det A = 0$ means the image is flattened to something of lower dimension, so $A$ has no inverse.

Algebraically, for $2 \\times 2$ and $3 \\times 3$,

$$\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$$

$$\\det A = a_{1,1}(a_{2,2}a_{3,3} - a_{2,3}a_{3,2}) - a_{1,2}(a_{2,1}a_{3,3} - a_{2,3}a_{3,1}) + a_{1,3}(a_{2,1}a_{3,2} - a_{2,2}a_{3,1})$$

The second formula is cofactor expansion along the first row, and the same expansion works along any row or column with the appropriate checkerboard signs. Multiplied out it has six terms, one for each permutation of three columns, half with each sign; that is the pattern Sarrus's rule reads off the diagonals. In general the determinant has $n!$ such terms, which is the general definition and the reason expansion is reserved for small matrices.

For the full theory, including the properties under row operations and the connection to inverses, see the [determinants theory page](!/linear-algebra/determinants); for minors and cofactors in depth, see the [cofactors theory page](!/linear-algebra/determinants/cofactors).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Key Properties`,
      content: `The determinant interacts with every matrix operation in a definite way.

• **Product**: $\\det(AB) = \\det A \\cdot \\det B$
• **Transpose**: $\\det A^T = \\det A$, which is why expansion along a column works as well as along a row
• **Inverse**: $\\det A^{-1} = 1 / \\det A$, and $A$ is invertible exactly when $\\det A \\neq 0$
• **Scalar**: $\\det(kA) = k^n \\det A$ for an $n \\times n$ matrix, not $k \\det A$
• **Row swap**: changes the sign
• **Row scaling**: scales the determinant by the same factor
• **Adding a multiple of one row to another**: leaves the determinant unchanged, which is what makes row reduction a determinant method
• **Triangular matrices**: the determinant is the product of the diagonal
• **Zero row, or two equal or proportional rows**: determinant $0$
• **Expansion along any line**: $\\det A = \\sum_j a_{i,j} C_{i,j}$ for every row $i$, and likewise for every column`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `Why It Matters`,
      content: `The determinant is the one number that answers the question "does this matrix collapse anything?"

• **Invertibility**: $\\det A \\neq 0$ is the test for an inverse to exist, and the adjugate formula divides by it
• **Linear systems**: a square system has a unique solution exactly when its coefficient determinant is non-zero, and Cramer's rule writes that solution as ratios of determinants
• **Area and volume**: the area of a parallelogram, the volume of a parallelepiped, and the Jacobian factor in a change of variables are all determinants
• **Orientation**: the sign tells whether a transformation is a rotation-like motion or includes a reflection
• **Eigenvalues**: the characteristic polynomial is $\\det(A - \\lambda I)$, and the determinant itself is the product of the eigenvalues
• **Cross product and independence**: the cross product is a symbolic $3 \\times 3$ determinant, and the determinant of a set of vectors is zero exactly when they are dependent`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Worked Example`,
      content: `Take

$$A = \\begin{pmatrix} 2 & 1 & 3 \\\\ 0 & 4 & 1 \\\\ 5 & 2 & 0 \\end{pmatrix}$$

**Cofactor expansion along row 1:**

$$\\det A = 2 \\begin{vmatrix} 4 & 1 \\\\ 2 & 0 \\end{vmatrix} - 1 \\begin{vmatrix} 0 & 1 \\\\ 5 & 0 \\end{vmatrix} + 3 \\begin{vmatrix} 0 & 4 \\\\ 5 & 2 \\end{vmatrix} = 2(0 - 2) - 1(0 - 5) + 3(0 - 20) = -4 + 5 - 60 = -59$$

**Sarrus's rule:** repeat the first two columns and read the diagonals.

Downward: $2 \\cdot 4 \\cdot 0 + 1 \\cdot 1 \\cdot 5 + 3 \\cdot 0 \\cdot 2 = 0 + 5 + 0 = 5$.

Upward: $3 \\cdot 4 \\cdot 5 + 2 \\cdot 1 \\cdot 2 + 1 \\cdot 0 \\cdot 0 = 60 + 4 + 0 = 64$.

$$\\det A = 5 - 64 = -59$$

The two methods agree, as they must. The negative sign says $A$ reverses orientation, and $|{-59}|$ is the factor by which $A$ scales volume. Since the determinant is not zero, $A$ is invertible. Set the visualizer to $3 \\times 3$ and step through either method to see the same terms assembled symbolically.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `A few mistakes recur.

• **Losing the checkerboard sign** — the cofactor of $a_{1,2}$ carries a minus; along the first row the signs go $+, -, +$
• **Striking the wrong row or column** — the minor of $a_{i,j}$ is what remains after removing row $i$ and column $j$, both
• **Applying Sarrus's rule to a $4 \\times 4$** — the rule is a $3 \\times 3$ accident; a $4 \\times 4$ determinant has twenty-four terms, and the diagonal pattern produces only eight
• **Scaling**: $\\det(2A) = 2^n \\det A$, not $2 \\det A$; doubling a $3 \\times 3$ matrix multiplies its determinant by eight
• **Adding determinants**: $\\det(A + B) \\neq \\det A + \\det B$ in general; the determinant is multiplicative, not additive
• **Confusing the determinant with the trace** — the trace is the sum of the diagonal, the determinant the product of the eigenvalues; a matrix with zero trace can be invertible, and one with zero determinant usually has non-zero trace
• **Expanding when reduction is cheaper** — for anything larger than $3 \\times 3$, row reduce to triangular form and multiply the diagonal`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `**Matrix inverse** — exists exactly when the determinant is non-zero, and the adjugate formula divides by it; the inverse tool's cofactor phase is this tool's expansion repeated for every entry.

**Cross product** — a symbolic $3 \\times 3$ determinant expanded along its first row.

**LU decomposition** — the determinant as the product of the diagonal of $U$.

**Rank** — full rank for a square matrix is the same as non-zero determinant.

**Linear transformations** — the determinant as area scaling and orientation.

**Eigenvalues** — the determinant is their product, and the characteristic polynomial is a determinant.

**Cramer's rule** — solving systems by ratios of determinants.

**Span and independence** — the determinant test for two vectors in the plane.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `The Opening Scene: A and an Empty Row of Terms`,
      content: `The player opens with $A$ between determinant bars on the left, an empty row of three term slots in the middle, and an empty slot for $\\det A$ on the right. At the default size $A$ is $3 \\times 3$.

Nothing is computed yet. What the scene establishes is the plan: three signed terms, one per entry of the first row, added into a single number.`,
      before: ``,
      after: `The number of term slots is the size of the matrix, one for each entry of the row being expanded along. That is the first level of the recursion; each term itself contains a smaller determinant, which at $3 \\times 3$ is small enough to be written out and at $4 \\times 4$ would not be.

Any row or column would serve. The first row is the convention, and choosing a row with zeros in it is the standard trick for reducing work, since a zero entry kills its whole term.`,
      link: '',
    },
    obj12: {
      title: `A Cofactor Term`,
      content: `Each term scene strikes the first row and one column, reads the $2 \\times 2$ determinant of what remains as the minor, attaches the sign $(-1)^{1+j}$, and multiplies by the entry $a_{1,j}$.

The frozen picture below is the middle term at $3 \\times 3$: row $1$ and column $2$ struck, the minor $a_{2,1}a_{3,3} - a_{2,3}a_{3,1}$ highlighted, and the term written with its negative sign, $-a_{1,2}(a_{2,1}a_{3,3} - a_{2,3}a_{3,1})$.`,
      before: ``,
      after: `The sign is the part most often lost. It comes from the position, not from the entry: the checkerboard gives $+$ to $(1,1)$, $-$ to $(1,2)$, $+$ to $(1,3)$, whatever the values. The minor itself is a $2 \\times 2$ determinant computed by the same rule one level down, $ad - bc$.

Three of these terms, multiplied out, give six products. The middle term contributes $-a_{1,2}a_{2,1}a_{3,3}$ and $+a_{1,2}a_{2,3}a_{3,1}$, and those two products reappear, with the same signs, on two of the Sarrus diagonals.`,
      link: '',
    },
    obj13: {
      title: `A Sarrus Diagonal`,
      content: `Sarrus's rule repeats the first two columns of $A$ to the right, shown in grey, and reads six diagonals of three entries. The frozen picture below is the first upward diagonal: it starts at $a_{3,1}$, runs up through $a_{2,2}$ to $a_{1,3}$, and its product $a_{1,3}a_{2,2}a_{3,1}$ is subtracted.

The three downward diagonals before it were added; the two upward diagonals after it will also be subtracted.`,
      before: ``,
      after: `The repeated columns are what make the wrap-around diagonals readable as straight lines. Without them, the diagonal through $a_{1,2}$, $a_{2,3}$, $a_{3,1}$ would have to be read modulo three.

The rule is exact and easy to remember, and it is also a dead end. It works because the six permutations of three columns happen to be the three cyclic shifts and their three reversals, which is what the diagonals trace; for four columns there are twenty-four permutations and no diagonal pattern captures them. Cofactor expansion is the method that generalizes.`,
      link: '',
    },
    obj14: {
      title: `The Completed Determinant`,
      content: `The final scene fills the $\\det A$ slot and highlights every term: $\\det A = a_{1,1}(a_{2,2}a_{3,3} - a_{2,3}a_{3,2}) - a_{1,2}(a_{2,1}a_{3,3} - a_{2,3}a_{3,1}) + a_{1,3}(a_{2,1}a_{3,2} - a_{2,2}a_{3,1})$.

The frozen picture below is the cofactor method complete at $3 \\times 3$.`,
      before: ``,
      after: `Read the result as a single number with two meanings. It is the volume scaling factor of the transformation $A$, with a sign for orientation, and it is the quantity whose vanishing means $A$ is singular. Both readings come from the same six products.

Everything downstream uses it as a number: the inverse divides by it, Cramer's rule takes ratios of it, the characteristic polynomial is it with $\\lambda$ subtracted from the diagonal. This tool shows where the number comes from; the tools that follow show what it is for.`,
      link: '',
    },
    obj15: { title: ``, content: ``, before: ``, after: ``, link: '' }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from DeterminantWrapper's own scene builders (exported additively)
     at 3×3 and rendered through frozenMatrixSvgFixed. Arrows are not
     reproduced; the highlights and struck entries carry each state. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: determinantDiagrams[key], caption, text })

  const stateUnits = {
    intro: unit('intro', 'Opening scene, frozen',
      'A on the left, three empty term slots, and an empty slot for det A. One signed term per entry of ' +
      'the first row, added into a single number.'),
    term: unit('term', 'Middle cofactor term, frozen',
      'Row 1 and column 2 struck, the 2&times;2 minor highlighted, and the term written with its negative ' +
      'sign: &minus;a<sub>1,2</sub>(a<sub>2,1</sub>a<sub>3,3</sub> &minus; a<sub>2,3</sub>a<sub>3,1</sub>). The sign comes from the position, not the value.'),
    sarrus: unit('sarrus', 'First upward diagonal, frozen',
      'The first two columns repeated in grey, and the diagonal from a<sub>3,1</sub> up through a<sub>2,2</sub> ' +
      'to a<sub>1,3</sub> lit. Upward products are subtracted; the three downward ones before it were added.'),
    done: unit('done', 'Completed determinant, frozen',
      'All three cofactor terms in place and det A filled. Multiplied out, three positive and three negative ' +
      'products - the same six that Sarrus\'s rule reads off the diagonals.'),
  }


  /* ---- per-phase scene notes, passed into the component (Line 1) ----
     DeterminantWrapper accepts an explanations prop keyed by scene phase:
     intro, term, diag, done. Captions render with dangerouslySetInnerHTML,
     so these are raw HTML anchors. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#what-the-determinant-is" style="color:#1d4ed8;font-weight:600">what it is</a></div>`

  const explanations = {
    intro: note('One signed term per entry of the row, added into a single number.', 'the-opening-scene', 'Learn more about the opening scene'),
    term: note('Strike a row and a column, take the minor, attach the checkerboard sign.', 'a-cofactor-term', 'Learn more about cofactor terms'),
    diag: note('Downward diagonals add, upward diagonals subtract - a 3&times;3 shortcut with no larger version.', 'a-sarrus-diagonal', 'Learn more about Sarrus diagonals'),
    done: note('Volume scaling with a sign for orientation; zero exactly when A is singular.', 'the-completed-determinant', 'Learn more about the completed determinant'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is the determinant of a matrix?",
      answer: "The determinant is a single number attached to a square matrix. Geometrically it is the factor by which the matrix scales area or volume, with a negative sign when the matrix reverses orientation. Algebraically it is a signed sum of products of entries, one product for each permutation of the columns: two terms for a 2×2 matrix, six for a 3×3, and n! in general. It is zero exactly when the matrix is singular."
    },
    obj2: {
      question: "How does cofactor expansion work?",
      answer: "Choose a row or column. For each entry in it, strike that entry's row and column, compute the determinant of the smaller matrix that remains (the minor), attach the sign (−1) to the power of the row number plus the column number, and multiply by the entry. Add the results. Expanding along the first row of a 3×3 matrix gives three terms, each containing a 2×2 determinant."
    },
    obj3: {
      question: "What is Sarrus's rule and when does it apply?",
      answer: "Sarrus's rule computes a 3×3 determinant by repeating the first two columns to the right of the matrix and reading six diagonals of three entries: the three running down to the right are multiplied and added, the three running up to the right are multiplied and subtracted. It applies to 3×3 matrices only. A 4×4 determinant has twenty-four terms, and the diagonal pattern does not produce them."
    },
    obj4: {
      question: "Why does the sign alternate in cofactor expansion?",
      answer: "The sign of each term is (−1) to the power of its row plus column, which forms a checkerboard: plus at (1,1), minus at (1,2), plus at (1,3), and so on. It comes from the position of the entry, not from its value. The alternation is what makes the expansion agree with the definition of the determinant as a signed sum over permutations, where each transposition of columns flips the sign."
    },
    obj5: {
      question: "What does a zero determinant mean?",
      answer: "A zero determinant means the matrix is singular: it has no inverse, its columns are linearly dependent, and the transformation it represents flattens space onto a line or plane, so area or volume is scaled to zero. A system of equations with a zero coefficient determinant has either no solution or infinitely many, never exactly one."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Determinant Visualizer",
      "description": "Step-by-step visualizer for the determinant of a 2×2 or 3×3 matrix. Watch cofactor expansion along the first row strike rows and columns and assemble signed terms, or Sarrus's rule read six diagonal products, all written symbolically.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-determinant",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Two methods: cofactor expansion along the first row, and Sarrus's rule for 3×3",
        "Sizes 2×2 and 3×3 with every term written out symbolically",
        "Struck rows and columns, highlighted minors and checkerboard signs in the cofactor method",
        "Repeated columns and lit diagonals in the Sarrus method",
        "Terms collected in a row and summed into det A in the final scene",
        "Adjustable playback speed and scrollable step log",
        "Tooltip explaining what the determinant measures"
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
      "keywords": "determinant, determinant of a matrix, determinant visualizer, determinant step by step, cofactor expansion, laplace expansion, sarrus rule, rule of sarrus, 3x3 determinant, 2x2 determinant, how to find the determinant, determinant formula, minors and cofactors, linear algebra visualizer, interactive matrix tool"
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
          "name": "Matrix Determinant",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-determinant"
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
      sectionsContent,
      stateUnits,
      explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Determinant Visualizer | Cofactor Expansion and Sarrus's Rule",
        description: "Visualize the determinant of a 2×2 or 3×3 matrix step by step: cofactor expansion along the first row with struck rows and columns, or Sarrus's rule reading six diagonal products, all written symbolically.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/matrix-determinant",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="22" x2="10" y2="58" stroke="#B5D4F4" stroke-width="1.6"/><line x1="46" y1="22" x2="46" y2="58" stroke="#B5D4F4" stroke-width="1.6"/><rect x="14" y="25" width="9" height="9" fill="#EF9F27" stroke="#854F0B" stroke-width="1.2"/><rect x="23" y="25" width="9" height="9" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.7"/><rect x="32" y="25" width="9" height="9" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.7"/><rect x="14" y="34" width="9" height="9" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.7"/><rect x="23" y="34" width="9" height="9" fill="#85B7EB" stroke="#0C447C" stroke-width="0.8"/><rect x="32" y="34" width="9" height="9" fill="#85B7EB" stroke="#0C447C" stroke-width="0.8"/><rect x="14" y="43" width="9" height="9" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.7"/><rect x="23" y="43" width="9" height="9" fill="#85B7EB" stroke="#0C447C" stroke-width="0.8"/><rect x="32" y="43" width="9" height="9" fill="#85B7EB" stroke="#0C447C" stroke-width="0.8"/><line x1="14" y1="29.5" x2="41" y2="29.5" stroke="#412402" stroke-width="1"/><line x1="18.5" y1="25" x2="18.5" y2="52" stroke="#412402" stroke-width="1"/><path d="M 50 40 L 58 40 M 56 38 L 58 40 L 56 42" fill="none" stroke="#B5D4F4" stroke-width="1.2"/><rect x="61" y="33" width="14" height="14" fill="#97C459" stroke="#27500A" stroke-width="1"/><text x="68" y="43" font-family="Georgia,serif" font-size="8" fill="#173404" text-anchor="middle" font-style="italic">|A|</text><text x="40" y="70" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">+ &#8722; +</text></svg>`,
        name: "Determinant Visualizer",
        hubDescription: "Watch a 2×2 or 3×3 determinant assemble term by term: cofactor expansion along the first row strikes a row and a column for each entry, highlights the minor, attaches the checkerboard sign and writes the signed term, while Sarrus's rule repeats the first two columns and lights six diagonals, adding the downward products and subtracting the upward ones. Both methods end at the same six products, and the page explains why the shortcut has no 4×4 version.",
        category: 'Matrices',
        subCategory: 'Properties'
      }
    }
  }
}

export default function DeterminantVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas}) {

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
    plain('obj2', 'the-two-methods'),
    stateRow('obj11', 'the-opening-scene', 'intro'),
    stateRow('obj12', 'a-cofactor-term', 'term'),
    stateRow('obj13', 'a-sarrus-diagonal', 'sarrus'),
    stateRow('obj14', 'the-completed-determinant', 'done'),
    plain('obj3', 'the-scene-player'),
    plain('obj4', 'choosing-the-size'),
    plain('obj5', 'what-the-determinant-is'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Determinant</h1>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <DeterminantWrapper
   mode='both'
   defaultMethod='cofactor'
   defaultN={3}
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
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   </>
  )
}
