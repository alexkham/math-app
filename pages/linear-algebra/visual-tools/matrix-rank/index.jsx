import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import RankWrapper from '../../../../app/components/linear-algebra copy/matrix/RankWrapper'
import rankDiagrams from '../../../../app/components/linear-algebra copy/matrix/rankDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'matrix rank',
    'rank of a matrix',
    'rank calculator',
    'matrix rank visualizer',
    'how to find the rank of a matrix',
    'row echelon form',
    'pivot columns',
    'row reduction rank',
    'rank nullity theorem',
    'full rank matrix',
    'rank deficient matrix',
    'linearly independent rows',
    'column space basis',
    'linear algebra visualizer',
    'interactive matrix tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `[Rank](!/linear-algebra/definitions#rank) — the number of linearly independent rows of a [matrix](!/linear-algebra/definitions#matrix), which always equals the number of linearly independent columns. Written $\\operatorname{rank} A$.

[Pivot](!/linear-algebra/linear-systems/echelon-form#4) — the first non-zero entry of a row in echelon form. The rank is the number of [pivots](!/linear-algebra/definitions#pivot).

[Pivot column](!/linear-algebra/linear-systems/echelon-form#4) — a column of $A$ containing a pivot after reduction; the pivot columns of $A$ form a basis of its [column space](!/linear-algebra/definitions#column_space).

**Free column** — a column with no pivot; it is a [linear combination](!/linear-algebra/definitions#linear_combination) of the pivot columns to its left.

[Row echelon form](!/linear-algebra/definitions#row_echelon_form) — a matrix in which each pivot lies strictly to the right of the pivot in the row above, and zero rows sit at the bottom.

**Row operations** — swapping two rows, scaling a row, and adding a multiple of one row to another. None of them changes the rank.

**Nullity** — the [dimension](!/linear-algebra/definitions#dimension) of the null space, equal to the number of free columns: $n - \\operatorname{rank} A$.

[Rank-nullity theorem](!/linear-algebra/matrix/rank#6) — $\\operatorname{rank} A + \\operatorname{nullity} A = n$, the number of columns.

**Full rank** — $\\operatorname{rank} A = \\min(m, n)$, the largest value an $m \\times n$ matrix can have.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Choose a [matrix](!/linear-algebra/matrix#1), then watch it reduce to echelon form one row operation at a time until the [pivots](!/linear-algebra/linear-systems/echelon-form#4) can be counted.

• Use the **Preset** pills for six matrices chosen to show different outcomes: rank-deficient, full rank, rank 1, wide, tall, and zero
• Use the **Size** steppers to set rows and columns independently (1 to 5 each); resizing keeps the existing entries and pads with zeros
• Edit any **entry** directly in the grid — the run rebuilds as you type
• Press **Shuffle** for a random matrix of small integers; half the time one row is secretly a multiple of another, so rank deficiency turns up often
• Hover the **?** icon for a reminder of what rank is and why row operations preserve it
• Press play or step manually; the step log on the right lists every row operation performed

This is the one tool in the section that works with actual numbers, because rank cannot be read off a symbolic matrix: it depends on which entries happen to cancel.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `How the Reduction Runs`,
      content: `The visualizer processes the columns from left to right, keeping a current row that starts at row $1$ and moves down once per pivot.

• **Look for a pivot**: scan the current column at and below the current row for a non-zero entry
• **Skip**: if there is none, the column has no pivot; it is a free column, and the current row stays where it is
• **Swap**: if the first non-zero entry is below the current row, swap the two rows to bring it up
• **Pivot**: mark the entry as a pivot, count it, and record the column as a pivot column
• **Eliminate**: for every non-zero entry below the pivot, subtract the right multiple of the pivot row so that entry becomes $0$; one scene per row cleared
• **Done**: when the columns or the rows run out, the matrix is in row echelon form, and the rank is the number of pivots

Only two kinds of row operation are used, swapping and adding a multiple of one row to another. Scaling a row is never needed to find the rank, and the pivots are left as they are rather than normalized to $1$.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `Reading the Scene Player`,
      content: `Each scene shows the original $A$ on the left and the current reduced matrix $R$ on the right, with the row operation in the caption.

• In a **pivot** scene, the pivot cell is accent and its row is primary
• In an **eliminate** scene, the pivot row is primary, the row being cleared is secondary, and the entry being turned into $0$ is accent; the caption names the multiple subtracted
• In a **swap** scene, the two rows exchanging places are primary and secondary
• In a **skip** scene, the entries scanned and found to be zero are muted
• In the **done** scene, every pivot in $R$ is accent, the pivot columns of the original $A$ are highlighted, and the rank appears in its own slot
• Fractions that arise during elimination are shown as $a/b$ in a slightly smaller font`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `Choosing a Matrix`,
      content: `The six presets each make a different point.

• **Rank 2 of 3** — row $2$ is twice row $1$, so elimination wipes it out; the run shows a pivot, two eliminations, a swap, a second pivot, and a skipped column, which is every branch in one matrix
• **Full rank** — three pivots in a $3 \\times 3$; the columns are independent and the matrix is invertible
• **Rank 1** — every row is a multiple of the first; one pivot, then everything below it cancels and the remaining columns are skipped
• **Wide $2 \\times 4$** — at most two pivots, however the entries are chosen; the rank is capped by the row count and at least two columns must be free
• **Tall $4 \\times 2$** — at most two pivots, capped by the column count; the extra rows reduce to zero
• **Zero matrix** — no pivots at all, rank $0$, and every column free

Editing entries by hand is the best way to see how fragile rank is: change one entry of the rank-1 preset and the rank jumps to $2$.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `What Rank Is`,
      content: `The rank of an $m \\times n$ matrix $A$ is the [dimension](!/linear-algebra/vector-spaces/dimension#1) of its [column space](!/linear-algebra/vector-spaces/fundamental-spaces#2), the number of linearly independent columns. A fundamental theorem says this equals the dimension of the [row space](!/linear-algebra/vector-spaces/fundamental-spaces#3), the number of linearly independent rows, so rank can be found from either side.

Row reduction finds it. Row operations replace the rows of $A$ by combinations of the same rows, so the row space never changes, and neither does the rank. In echelon form the non-zero rows are visibly independent, one per pivot, so

$$\\operatorname{rank} A = \\text{number of pivots} = \\text{number of non-zero rows in echelon form}$$

The pivot columns tell the column-space story: the columns of the original $A$ in the pivot positions are a basis of the column space, and each free column is a combination of the pivot columns to its left.

The rank is bounded by both dimensions,

$$\\operatorname{rank} A \\leq \\min(m, n)$$

and the rank-nullity theorem accounts for the rest of the columns:

$$\\operatorname{rank} A + \\operatorname{nullity} A = n$$

where the nullity, the dimension of the null space, is the number of free columns. For the full treatment, including rank and the four fundamental [subspaces](!/linear-algebra/vector-spaces/subspaces#1), see the [matrix rank theory page](!/linear-algebra/matrix/rank).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Key Properties`,
      content: `Rank interacts with the matrix operations in a few standard ways.

• **Row rank equals column rank**: the number of independent rows equals the number of independent columns
• **Bound**: $\\operatorname{rank} A \\leq \\min(m, n)$, with equality called full rank
• **Transpose**: $\\operatorname{rank} A^T = \\operatorname{rank} A$
• **Row operations**: swapping, scaling by a non-zero number, and adding a multiple of one row to another all preserve rank
• **Product**: $\\operatorname{rank}(AB) \\leq \\min(\\operatorname{rank} A, \\operatorname{rank} B)$
• **Invertibility**: a square $n \\times n$ matrix is invertible exactly when $\\operatorname{rank} A = n$, equivalently $\\det A \\neq 0$
• **Rank-nullity**: $\\operatorname{rank} A + \\operatorname{nullity} A = n$
• **Rank 1**: a non-zero matrix has rank $1$ exactly when it is an outer product $\\mathbf{u}\\mathbf{v}^T$
• **Zero**: $\\operatorname{rank} A = 0$ only for the zero matrix`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `Why It Matters`,
      content: `Rank is the single number that says how much of the available space a matrix actually uses.

• **Solvability**: $A\\mathbf{x} = \\mathbf{b}$ is consistent exactly when $\\operatorname{rank} A = \\operatorname{rank} [A \\mid \\mathbf{b}]$; the solution is unique when the rank equals the number of unknowns
• **Linear independence**: the columns of $A$ are independent exactly when the rank equals the number of columns, which is how a set of [vectors](!/linear-algebra/vectors#1) is tested for independence in practice
• **Dimension of the image**: the rank is the dimension of the set of all outputs $A\\mathbf{x}$; a rank-deficient transformation flattens space
• **Invertibility**: full rank is the condition for a [square matrix](!/linear-algebra/matrix/types#1) to have an inverse
• **Data**: the rank of a data matrix is the number of independent features, and low-rank approximation is the basis of compression and dimensionality reduction
• **Networks and systems**: the rank of an incidence or controllability matrix decides whether a network is connected or a system can be steered`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Worked Example`,
      content: `Take the default preset,

$$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 1 & 0 & 1 \\end{pmatrix}$$

Column $1$: the entry $1$ in row $1$ is the first pivot. Clear below it with $R_2 \\leftarrow R_2 - 2R_1$ and $R_3 \\leftarrow R_3 - R_1$:

$$\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 0 & 0 \\\\ 0 & -2 & -2 \\end{pmatrix}$$

Column $2$: row $2$ has a $0$ but row $3$ has $-2$, so swap $R_2 \\leftrightarrow R_3$. The $-2$ is the second pivot, and there is nothing below it to clear:

$$\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & -2 & -2 \\\\ 0 & 0 & 0 \\end{pmatrix}$$

Column $3$: the only row left is row $3$, and its entry is $0$. No pivot; the column is free.

Two pivots, so $\\operatorname{rank} A = 2$. The pivot columns are $1$ and $2$, and columns $(1, 2, 1)^T$ and $(2, 4, 0)^T$ of the original $A$ form a basis of the column space. Column $3$ is free: indeed $(3, 6, 1)^T = (1, 2, 1)^T + (2, 4, 0)^T$. The nullity is $3 - 2 = 1$, and $2 + 1 = 3$ as the rank-nullity theorem requires. Row $2$ of $A$ was twice row $1$, which is exactly the dependency the elimination exposed.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `A few mistakes recur.

• **Counting non-zero rows of the original matrix** — rank is read from the echelon form, not from $A$; a matrix can have three non-zero rows and rank $1$
• **Counting non-zero entries or columns** — rank counts pivots, one per independent direction, not entries
• **Reading the pivot columns from $R$ instead of $A$** — the pivot positions are found in $R$, but the basis of the column space is the columns of the original $A$ in those positions; row operations change the column space
• **Forgetting that a swap may be needed** — a $0$ in the current position does not mean the column is free; a non-zero entry lower down still gives a pivot
• **Expecting rank to exceed the smaller dimension** — a $2 \\times 4$ matrix has rank at most $2$, however its entries are chosen
• **Confusing rank with determinant** — the [determinant](!/linear-algebra/determinants#1) is a number defined only for square matrices; rank is defined for every matrix, and a zero determinant just says the rank is less than $n$
• **Trusting floating point** — with decimal entries, a value that should be $0$ may come out as $10^{-16}$; this tool treats anything below $10^{-9}$ as zero`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `[Gaussian elimination](!/linear-algebra/visual-tools/gauss-elimination) — the row reduction this tool performs; the same procedure solves linear systems.

**Row echelon form** — the target shape, in which the pivots are visible.

[Linear independence](!/linear-algebra/visual-tools/span-independence-2d) — the columns are independent exactly when the rank equals their number.

[Column space and row space](!/linear-algebra/visual-tools/four-fundamental-subspaces) — the two subspaces whose common dimension is the rank.

**Null space** — the free columns count its dimension, the nullity.

**Rank-nullity theorem** — rank plus nullity equals the number of columns.

[Determinant](!/linear-algebra/visual-tools/matrix-determinant) — zero exactly when a square matrix fails to have full rank.

[Inverse](!/linear-algebra/visual-tools/matrix-inverse) — exists exactly when a square matrix has full rank.

[Outer product](!/linear-algebra/visual-tools/vector-outer-product) — the rank-1 matrices.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `The Opening Scene: A on the Left, a Copy on the Right`,
      content: `The player opens with the matrix $A$ on the left and an identical copy $R$ on the right. $A$ will stay fixed for reference; $R$ is the working copy that the row operations transform.

Nothing has been reduced yet. What the scene fixes is the plan and the ceiling: the rank will be the number of pivots found, and it cannot exceed the smaller of the two dimensions.`,
      before: ``,
      after: `Keeping the original in view matters at the end, because the pivot columns are found in $R$ but the basis of the column space is read from $A$. Row operations preserve the row space and the rank, but they do change the column space, so the columns of $R$ are not the columns to keep.

There is no precondition on $A$. Any matrix of any shape has a rank, including rectangular ones and the zero matrix.`,
      link: '',
    },
    obj12: {
      title: `Finding a Pivot`,
      content: `For each column in turn, the tool scans downward from the current row for a non-zero entry. The first one found becomes a pivot and its row becomes the pivot row.

The frozen picture below is the first pivot of the default preset: the $1$ at row $1$, column $1$, marked in $R$, with its row highlighted.`,
      before: ``,
      after: `A pivot certifies a new independent direction. Column $j$ gets a pivot exactly when it is not a combination of the columns before it, so every pivot adds one to the dimension of the column space, and the final count is the rank.

The value of the pivot is irrelevant; only that it is non-zero. The tool leaves pivots unnormalized, since scaling a row to make its pivot $1$ changes nothing about the count.`,
      link: '',
    },
    obj13: {
      title: `Eliminating Below the Pivot`,
      content: `Once a pivot is fixed, every non-zero entry below it in the same column is cleared: the row is replaced by itself minus the right multiple of the pivot row, one row per scene.

The frozen picture below is the first elimination of the default preset, $R_2 \\leftarrow R_2 - 2R_1$, which turns row $2$ into zeros because it was twice row $1$ to begin with.`,
      before: ``,
      after: `This is the operation that exposes dependencies. A row that is a combination of the rows above it is reduced to zero, and a zero row contributes no pivot. In the default preset, row $2$ vanishes in one step, which is the elimination discovering that $R_2 = 2R_1$.

Adding a multiple of one row to another leaves the span of the rows unchanged: the new row is a combination of the old ones, and the old row can be recovered by subtracting the same multiple back. That is why the rank of $R$ is always the rank of $A$.`,
      link: '',
    },
    obj14: {
      title: `Swapping Rows and Skipping Columns`,
      content: `Two things can interrupt the pattern. If the current row has a $0$ in the current column but a lower row does not, the rows are swapped so the pivot can be taken from the current row. If every entry from the current row down is $0$, the column has no pivot and is skipped.

The frozen picture below is the skipped third column of the default preset: the only remaining row has a $0$ there, so the scan finds nothing and the column is free.`,
      before: ``,
      after: `A swap is bookkeeping: it reorders the rows and changes nothing about their span or their number of independent members. In the default preset the swap brings the $-2$ up from row $3$ so the second pivot sits in row $2$.

A skip is information. A skipped column is a linear combination of the pivot columns to its left, and it is exactly the kind of column that the rank-nullity theorem counts on the nullity side. Every skipped column raises the nullity by one and leaves the rank alone.`,
      link: '',
    },
    obj15: {
      title: `The Completed Reduction`,
      content: `The final scene shows $R$ in row echelon form with every pivot marked, the pivot columns highlighted in the original $A$, and the rank in its own slot.

The frozen picture below is the default preset finished: two pivots, rank $2$, pivot columns $1$ and $2$, and one free column.`,
      before: ``,
      after: `Three readings come from the one picture. The rank is the number of pivots, here $2$. The pivot columns of $A$, columns $1$ and $2$, are a basis of the column space. The free column, column $3$, is a combination of the other two, and there is one of it, so the nullity is $1$ and $2 + 1 = 3$ is the number of columns.

Whether the matrix has full rank is now a glance: full rank means the pivot count reached $\\min(m, n)$. For a square matrix that is the same as being invertible, and for a rectangular one it means the columns, or the rows, whichever there are fewer of, are independent.`,
      link: '',
    }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from RankWrapper's own buildScenes on the default preset and
     rendered through frozenMatrixSvgFixed. Each still is the first scene of
     its phase; the run length depends on the numbers, so the diagrams module
     finds scenes by phase rather than by index. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: rankDiagrams[key], caption, text })

  const stateUnits = {
    intro: unit('intro', 'Opening scene, frozen',
      'A on the left and its working copy R on the right, still identical. The rank will be the ' +
      'number of pivots found in R; the basis of the column space will be read from A.'),
    pivot: unit('pivot', 'First pivot, frozen',
      'The 1 at row 1, column 1 marked as pivot number one, its row highlighted. A pivot certifies ' +
      'a column that is not a combination of the columns before it.'),
    eliminate: unit('eliminate', 'First elimination, frozen',
      'R<sub>2</sub> &larr; R<sub>2</sub> &minus; 2&middot;R<sub>1</sub> has just turned row 2 into zeros: ' +
      'the elimination discovering that row 2 was twice row 1.'),
    skip: unit('skip', 'Skipped column, frozen',
      'Column 3 scanned from the last remaining row and found to be 0 - no pivot, a free column. ' +
      'The rank stays at 2 and the nullity picks up its one.'),
    done: unit('done', 'Completed reduction, frozen',
      'Echelon form with two pivots marked, the pivot columns lit in the original A, and rank 2 in ' +
      'its slot. Columns 1 and 2 of A are a basis of the column space; column 3 is free.'),
  }


  /* ---- per-phase scene notes, passed into the component (Line 1) ----
     RankWrapper accepts an explanations prop keyed by scene phase:
     intro, pivot, swap, eliminate, skip, done. Captions render with
     dangerouslySetInnerHTML, so these are raw HTML anchors. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#what-rank-is" style="color:#1d4ed8;font-weight:600">what it is</a></div>`

  const explanations = {
    intro: note('Count the pivots after reduction; row operations never change the rank.', 'the-opening-scene', 'Learn more about the opening scene'),
    pivot: note('A pivot certifies a column that is not a combination of the ones before it.', 'finding-a-pivot', 'Learn more about pivots'),
    swap: note('Reordering rows changes nothing about their span.', 'swapping-and-skipping', 'Learn more about swaps and skips'),
    eliminate: note('Subtracting a multiple of one row from another keeps the row space - and exposes any dependency.', 'eliminating-below', 'Learn more about elimination'),
    skip: note('A column with no pivot is a combination of the pivot columns to its left; it counts toward the nullity.', 'swapping-and-skipping', 'Learn more about swaps and skips'),
    done: note('Rank = pivots; pivot columns of A span the column space; rank + nullity = number of columns.', 'the-completed-reduction', 'Learn more about the completed reduction'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is the rank of a matrix?",
      answer: "The rank of a matrix is the number of linearly independent rows, which always equals the number of linearly independent columns. It measures how many independent directions the matrix carries, and it is the dimension of the column space. Rank can be found by row reducing to echelon form and counting the pivots."
    },
    obj2: {
      question: "How do you find the rank of a matrix by row reduction?",
      answer: "Reduce the matrix to row echelon form using row operations: for each column, find a non-zero entry at or below the current row, swap rows if needed to bring it up, mark it as a pivot, and subtract multiples of the pivot row to clear the entries below it. Columns with no non-zero entry in the remaining rows are skipped. The rank is the number of pivots, which equals the number of non-zero rows in the echelon form."
    },
    obj3: {
      question: "Why don't row operations change the rank?",
      answer: "Each row operation replaces the rows by combinations of the same rows, and each is reversible, so the set of all combinations of the rows, the row space, is unchanged. The rank is the dimension of that space. Swapping rows, scaling a row by a non-zero number, and adding a multiple of one row to another all have this property."
    },
    obj4: {
      question: "What is the rank-nullity theorem?",
      answer: "For an m × n matrix A, the rank plus the nullity equals n, the number of columns. The rank counts the pivot columns and the nullity counts the free columns, and every column is one or the other. The nullity is the dimension of the null space, the set of solutions to A x = 0."
    },
    obj5: {
      question: "What does full rank mean?",
      answer: "A matrix has full rank when its rank equals the smaller of its two dimensions, which is the largest value the rank can take. For a square n × n matrix, full rank means rank n, and that is equivalent to being invertible and to having a non-zero determinant. For a rectangular matrix, full rank means either the columns or the rows, whichever there are fewer of, are linearly independent."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Matrix Rank Visualizer",
      "description": "Step-by-step visualizer for the rank of a matrix. Row reduce an editable numeric matrix to echelon form one operation at a time, count the pivots, and read off the pivot columns and nullity.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-rank",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Editable numeric matrix from 1×1 up to 5×5, with six presets and a shuffle",
        "One scene per row operation: pivot, swap, eliminate, skip",
        "Original matrix kept beside the working copy throughout",
        "Pivot columns highlighted in the original matrix at the end",
        "Rank, pivot columns, free columns and nullity reported in the final scene",
        "Adjustable playback speed and a scrollable log of row operations",
        "Tooltip explaining rank and why row operations preserve it"
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
      "keywords": "matrix rank, rank of a matrix, rank calculator, matrix rank visualizer, how to find the rank of a matrix, row echelon form, pivot columns, row reduction rank, rank nullity theorem, full rank matrix, rank deficient matrix, linearly independent rows, column space basis, linear algebra visualizer, interactive matrix tool"
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
          "name": "Matrix Rank",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-rank"
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
      relatedTools: getRelatedTools('linear-algebra-matrix-rank'),
      sectionsContent,
      stateUnits,
      explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Matrix Rank Visualizer | Row Reduce and Count the Pivots",
        description: "Visualize the rank of a matrix step by step. Row reduce an editable numeric matrix to echelon form one operation at a time, count the pivots, and read off the pivot columns and nullity.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/matrix-rank",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="20" width="12" height="12" fill="#FAC775" stroke="#854F0B" stroke-width="1.2"/><rect x="22" y="20" width="12" height="12" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="34" y="20" width="12" height="12" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="10" y="32" width="12" height="12" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.8"/><rect x="22" y="32" width="12" height="12" fill="#FAC775" stroke="#854F0B" stroke-width="1.2"/><rect x="34" y="32" width="12" height="12" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="10" y="44" width="12" height="12" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.8"/><rect x="22" y="44" width="12" height="12" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.8"/><rect x="34" y="44" width="12" height="12" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.8"/><text x="16" y="29" font-family="Georgia,serif" font-size="8" fill="#412402" text-anchor="middle">1</text><text x="28" y="41" font-family="Georgia,serif" font-size="8" fill="#412402" text-anchor="middle">-2</text><text x="16" y="53" font-family="Georgia,serif" font-size="8" fill="#888780" text-anchor="middle">0</text><text x="28" y="53" font-family="Georgia,serif" font-size="8" fill="#888780" text-anchor="middle">0</text><text x="40" y="53" font-family="Georgia,serif" font-size="8" fill="#888780" text-anchor="middle">0</text><path d="M 50 38 L 58 38 M 56 36 L 58 38 L 56 40" fill="none" stroke="#B5D4F4" stroke-width="1.2"/><rect x="61" y="31" width="14" height="14" fill="#97C459" stroke="#27500A" stroke-width="1"/><text x="68" y="42" font-family="Georgia,serif" font-size="9" fill="#173404" text-anchor="middle" font-weight="bold">2</text><text x="40" y="68" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">rank = pivots</text></svg>`,
        name: "Matrix Rank Visualizer",
        hubDescription: "Row reduce a matrix of your own numbers to echelon form one operation at a time — find a pivot, swap rows when needed, clear the entries below, skip the columns that have no pivot — and count the pivots to read off the rank. Six presets cover rank-deficient, full rank, rank 1, wide, tall and zero matrices, a shuffle produces random ones, and the final scene highlights the pivot columns in the original matrix and reports the nullity.",
        category: 'Matrices',
        subCategory: 'Properties'
      }
    }
  }
}

export default function RankVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas, relatedTools }) {

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
    stateRow('obj12', 'finding-a-pivot', 'pivot'),
    stateRow('obj13', 'eliminating-below', 'eliminate'),
    stateRow('obj14', 'swapping-and-skipping', 'skip'),
    stateRow('obj15', 'the-completed-reduction', 'done'),
    plain('obj3', 'the-scene-player'),
    plain('obj4', 'choosing-a-matrix'),
    plain('obj5', 'what-rank-is'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Matrix Rank</h1>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <RankWrapper
   defaultPreset='deficient'
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
