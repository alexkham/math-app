// Moved 2026-09-13 from pages/visual-tools/matrix-types (top-level route) and
// brought up to the tool-page template the same day: full Head block, three
// JSON-LD schemas, content sections, FAQ, and a seoData block with hub
// metadata for the section landing's auto-discovery.
// The old URL /visual-tools/matrix-types is permanently redirected here in
// next.config.js. Search Console (90 days to 2026-09-12): 5 clicks, 192
// impressions. A content page on the same topic exists at
// /linear-algebra/matrix/types (3,417 impressions) - consolidation of the
// two is a separate decision. The generator component is unchanged.

// Line 1 pass 2026-09-13: nine states (the nine entries of the type selector)
// wired to five existing sections that already treat them in pairs. Wiring is
// Case A - MatrixGenerator already accepts an `explanations` prop and already
// receives matrixTypesExplanations from this page, so the component is
// untouched; each state's anchor is appended to its own `description`, which
// the component renders through processContent. Stills come from
// app/components/matrices/matrixTypesDiagrams.js, an SVG port of the
// component's HTML/CSS matrix display.

import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import MatrixGenerator from '@/app/components/matrices/MatrixGenerator'
import matrixTypesDiagrams from '@/app/components/matrices/matrixTypesDiagrams'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import Head from 'next/head'
import '@/pages/pages.css'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps() {

  const keyWords = [
    'matrix types',
    'types of matrices',
    'different types of matrices',
    'kinds of matrix',
    'special matrices',
    'identity matrix',
    'zero matrix',
    'scalar matrix',
    'diagonal matrix',
    'upper triangular matrix',
    'lower triangular matrix',
    'symmetric matrix',
    'skew symmetric matrix',
    'matrix generator',
    'linear algebra visualizer'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `[Square matrix](!/linear-algebra/definitions#square_matrix) — a matrix with as many rows as columns, $n \\times n$. Every type on this page is square; the main diagonal only makes sense when it is.

**Main diagonal** — the entries $a_{i,i}$ from the top-left corner to the bottom-right. Most special types are defined by what sits on it and what sits off it.

[Identity matrix](!/linear-algebra/definitions#identity_matrix) — $I_n$, ones on the diagonal and zeros elsewhere; the matrix that changes nothing under multiplication.

**Zero matrix** — every entry $0$; the matrix that changes nothing under addition.

**Scalar matrix** — $\\lambda I$, a single number $\\lambda$ repeated down the diagonal.

[Diagonal matrix](!/linear-algebra/definitions#diagonal_matrix) — any entries on the diagonal, zeros everywhere else.

[Triangular matrix](!/linear-algebra/decompositions/lower-upper#1) — zeros below the diagonal (upper) or above it (lower); the diagonal and one side are free.

[Symmetric matrix](!/linear-algebra/definitions#symmetric_matrix) — equal to its transpose, $a_{i,j} = a_{j,i}$; a mirror across the diagonal.

**Skew-symmetric matrix** — the negative of its transpose, $a_{i,j} = -a_{j,i}$, which forces every diagonal entry to $0$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started with the Generator`,
      content: `The generator builds a [matrix](!/linear-algebra/matrix#1) of the type you choose at the size you choose, and explains what makes it that type.

• Pick a **Matrix Size** from the first dropdown; every type is square, so one number fixes both [dimensions](!/linear-algebra/vector-spaces/dimension#1)
• Pick a **Matrix Type** from the second dropdown: random, identity, zero, scalar, diagonal, upper triangular, lower triangular, symmetric, or skew-symmetric
• The matrix appears with its defining pattern coloured, so the forced entries and the free entries can be told apart at a glance
• Below it, a short explanation states the rule in words and in symbols, lists the properties that follow from it, and links to a fuller reference
• **Clear** empties the display so a fresh type or size can be generated

Generate the same type at two or three sizes in a row. The pattern is what stays fixed; the numbers are incidental, and for the random type they are the whole point.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `The Nine Types at a Glance`,
      content: `Every type is a rule about which entries are free and which are forced.

• [Identity and zero](!#identity-and-zero) — no free entries at all. The identity is ones on the diagonal, the zero matrix is zeros everywhere
• [Scalar and diagonal](!#scalar-and-diagonal) — free only on the diagonal. Scalar repeats one number; diagonal allows any numbers
• [Triangular](!#triangular-matrices) — free on the diagonal and on one side of it; the other side is zero
• [Symmetric and skew-symmetric](!#symmetric-and-skew-symmetric) — free on and above the diagonal, with the entries below determined by reflection, equal for symmetric and negated for skew-symmetric
• [Random](!#random-matrices) — every entry free. The control case that shows what the other rules take away

Counting the free entries is a good exercise. At $n \\times n$: identity and zero have $0$, scalar has $1$, diagonal has $n$, triangular and symmetric have $n(n+1)/2$, skew-symmetric has $n(n-1)/2$, and random has $n^2$. The [how the types relate](!#how-the-types-relate) section turns those counts into a family tree.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Identity and Zero`,
      content: `The identity matrix $I_n$ has $1$ on every diagonal entry and $0$ everywhere else. It is the multiplicative unit: $IA = AI = A$ for every matrix $A$ of compatible size, just as $1 \\cdot x = x$ for numbers. Its [determinant](!/linear-algebra/determinants#1) is $1$, every [eigenvalue](!/linear-algebra/eigen#2) is $1$, and it is its own inverse and its own transpose.

The zero matrix $0$ has every entry equal to $0$. It is the additive unit: $A + 0 = A$. Its determinant is $0$, every eigenvalue is $0$, its [rank](!/linear-algebra/matrix/rank#1) is $0$, and multiplying anything by it gives the zero matrix again.

Between them these two matrices play the roles of $1$ and $0$ in ordinary arithmetic, and most identities about matrices are checked first on them. The identity is also the matrix of the transformation that leaves every [vector](!/linear-algebra/vectors#1) where it is, and the zero matrix is the transformation that sends every vector to the origin.

Both are special cases of the [scalar matrix](!#scalar-and-diagonal): the identity with $\\lambda = 1$, the zero matrix with $\\lambda = 0$.`,
      before: ``,
      after: `The two stills show the extremes of what the highlighting means. On the identity, three cells are amber and six are not, and the amber ones are the only positions the type says anything about. On the zero matrix nothing is amber at all, because the type constrains every entry equally and no position is distinguished from the rest.

Neither matrix has any free value: change one entry of either and it stops being that type. That is unusual. Of the nine types, only these two are a single fixed matrix at each size; the rest describe families.`,
      link: '',
    },

    obj4: {
      title: `Scalar and Diagonal`,
      content: `A scalar matrix is $\\lambda I$: the same number $\\lambda$ on every diagonal entry, zeros elsewhere. Multiplying by it scales every vector by $\\lambda$ in every direction, and it commutes with every other matrix of the same size, $(\\lambda I) A = A (\\lambda I) = \\lambda A$. Its determinant is $\\lambda^n$ and its only eigenvalue is $\\lambda$.

A diagonal matrix drops the requirement that the diagonal entries agree: any numbers $d_1, \\ldots, d_n$ on the diagonal, zeros elsewhere. It scales each coordinate axis by its own factor, which is the simplest non-trivial [linear transformation](!/linear-algebra/transformations#1) there is.

Diagonal matrices are the ones every computation is easiest for:

• The product of two diagonal matrices is diagonal, with the diagonal entries multiplied
• The determinant is the product $d_1 d_2 \\cdots d_n$
• The eigenvalues are the diagonal entries themselves, with the standard [basis](!/linear-algebra/vector-spaces#2) vectors as [eigenvectors](!/linear-algebra/eigen#2)
• The inverse exists exactly when no $d_i$ is zero, and is the diagonal matrix of the reciprocals
• Powers are computed entry by entry, $D^k$ has diagonal $d_i^k$

Much of linear algebra is the search for a change of basis that makes a given matrix diagonal, precisely because of that list.`,
      before: ``,
      after: `The two stills are highlighted identically, and that is the point: scalar and diagonal impose the same **pattern** of zeros, and differ only in how much freedom the amber cells have. The scalar still repeats one value, $3$, three times; the diagonal still carries $4$, $7$ and $2$ independently.

So the scalar matrices sit inside the diagonal matrices as the case $d_1 = \\cdots = d_n$, and the identity sits inside the scalar matrices as $\\lambda = 1$. Three of the nine types are one nested family, distinguished only by how many values you are allowed to choose.`,
      link: '',
    },

    obj5: {
      title: `Triangular Matrices`,
      content: `An upper triangular matrix has every entry below the main diagonal equal to $0$; the diagonal and everything above it are free. A lower triangular matrix is the mirror image, zeros above and freedom below. The transpose of one is the other.

Triangular matrices are where determinants and eigenvalues become readable:

• The determinant is the product of the diagonal entries, with no expansion needed
• The eigenvalues are the diagonal entries
• The matrix is invertible exactly when no diagonal entry is zero
• Products and inverses of upper triangular matrices are upper triangular, and likewise for lower

This is why so many algorithms aim for triangular form. Gaussian elimination reduces a matrix to upper triangular form so a system can be solved by back-substitution. The LU decomposition writes $A = LU$ with $L$ lower and $U$ upper triangular, so that $\\det A$ is the product of the diagonal of $U$ and each new right-hand side costs two triangular solves. The QR and [Cholesky decompositions](!/linear-algebra/decompositions/cholesky#1) have a triangular factor for the same reason.

A matrix that is both upper and lower triangular has zeros on both sides, so it is [diagonal](!#scalar-and-diagonal).`,
      before: ``,
      after: `Put the two stills side by side and the mirror symmetry is the whole definition. Each highlights six of the nine cells, the two highlighted regions overlap exactly on the diagonal, and reflecting either picture across that diagonal produces the other.

The count generalises: at size $n$ a triangular matrix has $n(n+1)/2$ free entries, a little over half of $n^2$. That is the saving every triangular algorithm is trading on — back-substitution touches only the highlighted half, which is why reaching triangular form is worth the elimination that gets you there.`,
      link: '',
    },

    obj6: {
      title: `Symmetric and Skew-Symmetric`,
      content: `A symmetric matrix equals its own transpose, $A = A^T$, so the entry at row $i$, column $j$ equals the entry at row $j$, column $i$. The matrix mirrors across its main diagonal, and the generator colours matching pairs the same to show it.

Symmetric matrices have the best-behaved spectral theory of any class:

• Every eigenvalue is real
• Eigenvectors for different eigenvalues are perpendicular
• The matrix can be diagonalised by an orthogonal change of basis, $A = Q D Q^T$

They arise wherever a quantity depends symmetrically on two indices: covariance matrices, the Hessian of a function, the matrix of a [quadratic form](!/linear-algebra/decompositions/spectral#6), adjacency matrices of undirected graphs.

A skew-symmetric matrix is the negative of its transpose, $A^T = -A$, so $a_{i,j} = -a_{j,i}$. Setting $i = j$ gives $a_{i,i} = -a_{i,i}$, which forces every diagonal entry to $0$. The eigenvalues are purely imaginary or zero, and an odd-sized skew-symmetric matrix always has determinant $0$. In three dimensions the skew-symmetric matrices are exactly the cross-product maps $v \\mapsto \\omega \\times v$, which is why they describe angular velocity and infinitesimal rotations.

Every square matrix splits uniquely into a symmetric and a skew-symmetric part, $A = \\tfrac{1}{2}(A + A^T) + \\tfrac{1}{2}(A - A^T)$.`,
      before: ``,
      after: `These are the only two types the generator colours by pair rather than by position. Each mirrored pair gets its own colour, so the constraint being illustrated is a relation between two cells, not a property of one. In the symmetric still the paired cells hold equal values, $7$ with $7$ and $2$ with $2$; in the skew-symmetric still they hold opposite ones, $7$ with $-7$.

The diagonal is where the two types part company. Symmetric leaves it free and marks it yellow, three values to choose. Skew-symmetric forces it to zero and leaves it unhighlighted, since $a_{i,i} = -a_{i,i}$ has only one solution. That is why the free-value counts differ: six against three at size $3$.`,
      link: '',
    },

    obj7: {
      title: `Random Matrices`,
      content: `The random type fills every entry independently with a number drawn at random. It has no structure, and that is its use: it is the control against which the other eight types are seen.

Generate a random matrix and check the special properties fail. The transpose is a different matrix. The determinant is not the product of the diagonal. The eigenvalues bear no visible relation to the entries. Then generate a symmetric or triangular matrix of the same size and watch each property return.

Random matrices also matter in their own right. Almost every random square matrix is invertible, since singularity requires the exact cancellation $\\det A = 0$. They are used to test algorithms, to initialise the weights of neural networks, and in random matrix theory, where the statistics of their eigenvalues turn out to be universal.`,
      before: ``,
      after: `The still is the only one on this page with no colour in it, and the absence is the information. Nine free entries, no forced zeros, no mirrored pairs, nothing the type guarantees — so the generator has nothing to mark.

Read the other eight stills against this one and each is a statement about which of these nine cells stop being free. Identity and zero remove all nine, triangular removes three, symmetric and skew-symmetric tie six of them together in pairs. The colour in every other still is exactly the structure that this one lacks.`,
      link: '',
    },

    obj8: {
      title: `How the Types Relate`,
      content: `The types nest. Each rule below is a special case of the ones after it.

• The **identity** and the **zero matrix** are **scalar** matrices, with $\\lambda = 1$ and $\\lambda = 0$
• Every scalar matrix is **diagonal**
• Every diagonal matrix is both **upper** and **lower triangular**, and it is the only kind that is both
• Every diagonal matrix is **symmetric**, since it equals its transpose
• The zero matrix is the only matrix that is both symmetric and **skew-symmetric**, because $a_{i,j} = a_{j,i}$ and $a_{i,j} = -a_{j,i}$ together force every entry to $0$

Some pairs are unrelated. A triangular matrix is symmetric only if it is diagonal. A symmetric matrix need not be invertible, and an invertible matrix need not be any of the special types.

The counts of free entries from the [overview](!#the-nine-types-at-a-glance) track the nesting: $0 \\le 1 \\le n \\le n(n+1)/2 \\le n^2$ as the rules loosen from identity through scalar, diagonal, and triangular or symmetric to random.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Determinants and Eigenvalues by Type`,
      content: `For most of the special types the determinant and the eigenvalues can be read off without computation, and the generator lists them with each matrix.

• **Identity**: determinant $1$, all eigenvalues $1$
• **Zero**: determinant $0$, all eigenvalues $0$
• **Scalar** $\\lambda I$: determinant $\\lambda^n$, all eigenvalues $\\lambda$
• **Diagonal**: determinant the product of the diagonal, eigenvalues the diagonal entries
• **Triangular**: the same as diagonal, product of the diagonal and eigenvalues on the diagonal, because the entries off the triangle contribute nothing to either
• **Symmetric**: no shortcut for the values, but they are guaranteed real, and the determinant is their product
• **Skew-symmetric**: eigenvalues purely imaginary or zero; determinant $0$ when $n$ is odd, and a perfect square when $n$ is even
• **Random**: nothing can be said in advance, which is the point of the type

The triangular case is the one to remember. It is why row reduction computes determinants, and why the eigenvalues of a matrix are found by bringing it to triangular form rather than by expanding a [characteristic polynomial](!/linear-algebra/eigen/characteristic-equation#2).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Where the Types Appear`,
      content: `Each special type is the answer to a question that comes up repeatedly.

**Identity** — the matrix of the do-nothing transformation, the target of every inverse computation, and the $I$ in $A - \\lambda I$.

**Diagonal** — the goal of diagonalisation. A matrix that can be written $P D P^{-1}$ has all its powers, exponentials and functions computed on the diagonal of $D$.

**Triangular** — the output of Gaussian elimination and the factors in the LU, QR and Cholesky decompositions. Systems with triangular coefficient matrices are solved by substitution in $n^2$ operations.

**Symmetric** — covariance and correlation matrices in statistics, Hessians in optimisation, stiffness and mass matrices in mechanics, adjacency matrices of undirected graphs. Positive definiteness is a property only symmetric matrices have.

**Skew-symmetric** — angular velocity and the generators of rotations in physics, and the matrices of [cross products](!/linear-algebra/vectors/cross-product#1) in three dimensions.

**Scalar** — uniform scaling, and the centre of the matrix algebra: the only matrices that commute with everything.

**Zero** — the kernel of every homomorphism, and the matrix a nilpotent matrix eventually becomes under powers.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Common Mistakes`,
      content: `The rules are short, and the errors come from applying them loosely.

• **Confusing diagonal with triangular** — a diagonal matrix has zeros on both sides of the diagonal; a triangular matrix has zeros on one side only
• **Reading symmetric as "looks balanced"** — symmetry is the precise condition $a_{i,j} = a_{j,i}$ for every pair; one mismatched pair breaks it
• **Allowing a nonzero diagonal in a skew-symmetric matrix** — the condition $a_{i,i} = -a_{i,i}$ forces every diagonal entry to $0$
• **Calling every scalar multiple of a matrix a scalar matrix** — a scalar matrix is a multiple of the identity specifically, $\\lambda I$
• **Assuming special types are invertible** — a diagonal or triangular matrix with a zero on the diagonal is singular, and a symmetric matrix can be singular too
• **Expecting the product of two symmetric matrices to be symmetric** — $(AB)^T = B^T A^T = BA$, which equals $AB$ only when the two commute
• **Applying these types to non-square matrices** — the diagonal, and every rule built on it, needs a square matrix`,
      before: ``,
      after: ``,
      link: '',
    },

    obj12: {
      title: `Related Concepts`,
      content: `[Transpose](!/linear-algebra/visual-tools/matrix-transpose) — the operation behind the symmetric and skew-symmetric definitions and the mirror between upper and lower triangular.

[Determinant](!/linear-algebra/visual-tools/matrix-determinant) — the product of the diagonal for diagonal and triangular matrices; zero for the zero matrix and for odd skew-symmetric matrices.

[Eigenvalues and eigenvectors](!/linear-algebra/visual-tools/eigenvalues-eigenvectors) — readable from the diagonal for diagonal and triangular matrices; real and orthogonal for symmetric ones.

[Diagonalisation](!/linear-algebra/visual-tools/matrix-diagonalization) — the change of basis that turns a matrix into a diagonal one.

[Matrix inverse](!/linear-algebra/visual-tools/matrix-inverse) — exists for diagonal and triangular matrices exactly when the diagonal has no zeros.

[Gaussian elimination and LU decomposition](!/linear-algebra/visual-tools/gauss-elimination) — the routes to triangular form.

[Orthogonal matrices](!/linear-algebra/visual-tools/orthogonal-matrices) — the other classic type, defined by $A^T A = I$, which the generator does not cover.

[Positive definite matrices](!/linear-algebra/visual-tools/cholesky-decomposition) — symmetric matrices with positive eigenvalues, the type behind least squares and optimisation.`,
      before: ``,
      after: ``,
      link: '',
    },
  }

  const faqQuestions = {
    obj1: {
      question: "What are the main types of square matrices?",
      answer: "The classic types are the identity matrix (ones on the diagonal, zeros elsewhere), the zero matrix, scalar matrices (a single number repeated down the diagonal), diagonal matrices (any entries on the diagonal, zeros elsewhere), upper and lower triangular matrices (zeros below or above the diagonal), symmetric matrices (equal to their transpose), and skew-symmetric matrices (equal to the negative of their transpose). Each is a rule about which entries are free and which are forced."
    },
    obj2: {
      question: "What is the difference between a diagonal matrix and a triangular matrix?",
      answer: "A diagonal matrix has zeros everywhere except on the main diagonal. A triangular matrix has zeros on one side of the diagonal only: below it for upper triangular, above it for lower triangular, with the diagonal and the other side free. A matrix that is both upper and lower triangular is diagonal."
    },
    obj3: {
      question: "Why must the diagonal of a skew-symmetric matrix be zero?",
      answer: "Skew-symmetric means each entry equals the negative of its mirror image across the diagonal. A diagonal entry is its own mirror image, so it must equal its own negative, and the only number equal to its own negative is zero."
    },
    obj4: {
      question: "How do you find the determinant of a triangular or diagonal matrix?",
      answer: "Multiply the diagonal entries. For both diagonal and triangular matrices the determinant is the product of the main diagonal, and the eigenvalues are the diagonal entries themselves. This is why row reduction to triangular form is the practical way to compute a determinant."
    },
    obj5: {
      question: "Why are symmetric matrices important?",
      answer: "Symmetric matrices have real eigenvalues, perpendicular eigenvectors for distinct eigenvalues, and can always be diagonalised by an orthogonal change of basis. They arise as covariance matrices, Hessians, quadratic forms, and adjacency matrices of undirected graphs, and positive definiteness, the property behind least squares and optimisation, is defined only for them."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Square Matrix Types Generator",
      "description": "Interactive generator for the classic types of square matrix: identity, zero, scalar, diagonal, upper and lower triangular, symmetric, skew-symmetric and random, at any size, with the defining pattern coloured and the properties of each type explained.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-types",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Nine matrix types: random, identity, zero, scalar, diagonal, upper triangular, lower triangular, symmetric, skew-symmetric",
        "Adjustable square size",
        "Defining pattern coloured so forced and free entries can be told apart",
        "Rule stated in words and symbols for each type",
        "Properties listed for each type: determinant, eigenvalues, behaviour under multiplication",
        "Reference link for every type"
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
          "name": "Matrix Types",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-types"
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
     One still per state of the type selector, from the component's own cell
     geometry and highlight colours. The paired sections carry two units each;
     random-matrices carries one. See matrixTypesDiagrams.js. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: matrixTypesDiagrams[key], caption, text })

  const stateUnits = {
    identity: unit('identity', 'Identity, frozen',
      'Size 3, type Identity. Ones on the diagonal, zeros off it, and the diagonal highlighted amber - the ' +
      'entries the type forces. Every other entry is fixed at 0, so nothing here is free.'),
    zero: unit('zero', 'Zero, frozen',
      'Size 3, type Zero. Nothing is highlighted because nothing is distinguished: every entry is forced to 0, ' +
      'and no position carries information.'),
    scalar: unit('scalar', 'Scalar, frozen',
      'Size 3, type Scalar, with &lambda; = 3. The same number repeats down the highlighted diagonal; ' +
      'one free value determines the whole matrix.'),
    diagonal: unit('diagonal', 'Diagonal, frozen',
      'Size 3, type Diagonal, showing 4, 7 and 2. The highlight is the same as for scalar, but the three ' +
      'diagonal entries are now independent - three free values instead of one.'),
    upperTriangular: unit('upperTriangular', 'Upper triangular, frozen',
      'Size 3, type Upper Triangular. The highlight covers the diagonal and everything above it, the six free ' +
      'entries; the three below the diagonal are forced to 0.'),
    lowerTriangular: unit('lowerTriangular', 'Lower triangular, frozen',
      'Size 3, type Lower Triangular. The mirror image: the highlighted six sit on and below the diagonal, ' +
      'and the three above are forced to 0. Transposing one type gives the other.'),
    symmetric: unit('symmetric', 'Symmetric, frozen',
      'Size 3, type Symmetric. The diagonal is yellow and each mirrored pair gets its own colour, so ' +
      'a&#8321;&#8322; = a&#8322;&#8321; = 7 share one colour and a&#8321;&#8323; = a&#8323;&#8321; = 2 another. ' +
      'Six free values: three on the diagonal, three above it.'),
    skewSymmetric: unit('skewSymmetric', 'Skew-symmetric, frozen',
      'Size 3, type Skew-symmetric. The diagonal is unhighlighted because it is forced to 0, and each ' +
      'coloured pair differs by a sign: 7 against &minus;7, 2 against &minus;2, 8 against &minus;8. Three free values.'),
    random: unit('random', 'Random, frozen',
      'Size 3, type Random - the same matrix the explanation panel prints. No highlighting, because no entry ' +
      'is constrained: all nine are free. This is the baseline the eight special types are departures from.'),
  }


  const matrixTypesExplanations = {
    identity: {
      description: "The identity matrix acts like the number 1 in multiplication - any matrix multiplied by identity stays unchanged. $I_n = \\begin{bmatrix} \\color{red}1 & 0 & 0 \\\\ 0 & \\color{red}1 & 0 \\\\ 0 & 0 & \\color{red}1 \\end{bmatrix}$.\n Just as 1 is the neutral element for multiplication of numbers, the identity matrix is the neutral element for matrix multiplication.\n [Learn more about the identity matrix](!#identity-and-zero) · [all nine types](!#the-nine-types-at-a-glance)",
      properties: ["Multiplicative identity", "Eigenvalues = 1", "Determinant = 1"],
      link: "/linear-algebra/matrix/types#2"
    },
    zero: {
      description: "The zero matrix is the matrix equivalent of the number 0. Every entry is zero, making it the additive identity for matrices. $0 = \\begin{bmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}$.\n Adding or subtracting a zero matrix from any matrix leaves the original matrix unchanged.\n [Learn more about the zero matrix](!#identity-and-zero) · [all nine types](!#the-nine-types-at-a-glance)",
      properties: ["Additive identity", "Eigenvalues = 0", "Rank = 0"],
      link: "/linear-algebra/matrix#3"
    },
    scalar: {
      description: "A scalar matrix is an identity matrix multiplied by some number λ. It always takes the form: $\\begin{bmatrix} \\color{red}λ & 0 & 0 \\\\ 0 & \\color{red}λ & 0 \\\\ 0 & 0 & \\color{red}λ \\end{bmatrix}$ For example, when λ = 3: $\\begin{bmatrix} 3 & 0 & 0 \\\\ 0 & 3 & 0 \\\\ 0 & 0 & 3 \\end{bmatrix}$.\n These matrices commute with all other matrices of compatible size.\n [Learn more about scalar matrices](!#scalar-and-diagonal) · [all nine types](!#the-nine-types-at-a-glance)",
      properties: ["$λI$ form", "Commutes with all matrices", "Eigenvalues = $λ$"],
      link: "/linear-algebra/matrix/types#3"
   },
    diagonal: {
      description: "A diagonal matrix has non-zero elements only on its main diagonal. All other entries must be 0: $\\begin{bmatrix} \\color{red}a & 0 & 0 \\\\ 0 & \\color{red}b & 0 \\\\ 0 & 0 & \\color{red}c \\end{bmatrix}$.\n These matrices are particularly easy to work with as operations like multiplication become simple element-wise operations on the diagonal.\n [Learn more about diagonal matrices](!#scalar-and-diagonal) · [all nine types](!#the-nine-types-at-a-glance)",
      properties: ["Simple operations", "Eigenvalues are diagonal elements", "Easy determinant"],
      link: "/linear-algebra/matrix/types#3"
    },
    upperTriangular: {
      description: "Upper triangular matrices have all entries below the main diagonal equal to 0. The entries above can be any number: $\\begin{bmatrix} \\color{red}a & \\color{red}b & \\color{red}c \\\\ 0 & \\color{red}d & \\color{red}e \\\\ 0 & 0 & \\color{red}f \\end{bmatrix}$.\n These matrices appear naturally in many matrix decomposition methods.\n [Learn more about upper triangular matrices](!#triangular-matrices) · [all nine types](!#the-nine-types-at-a-glance)",
      properties: ["Determinant = product of diagonal", "Upper entries free", "Lower entries = 0"],
      link: "/linear-algebra/matrix/types#4"
    },
    lowerTriangular: {
      description: "Lower triangular matrices have all entries above the main diagonal equal to 0. The entries below can be any number: $\\begin{bmatrix} \\color{red}a & 0 & 0 \\\\ \\color{red}b & \\color{red}c & 0 \\\\ \\color{red}d & \\color{red}e & \\color{red}f \\end{bmatrix}$.\n These matrices are fundamental in LU decomposition and Gaussian elimination.\n [Learn more about lower triangular matrices](!#triangular-matrices) · [all nine types](!#the-nine-types-at-a-glance)",
      properties: ["Determinant = product of diagonal", "Lower entries free", "Upper entries = 0"],
      link: "/linear-algebra/matrix/types#4"
    },
    symmetric: {
      description: "A symmetric matrix is equal to its transpose - it mirrors across its main diagonal. If entry (i,j) is x, then entry (j,i) must also be x: $\\begin{bmatrix} a & \\color{red}b & \\color{blue}c \\\\ \\color{red}b & d & \\color{green}e \\\\ \\color{blue}c & \\color{green}e & f \\end{bmatrix}$.\n These matrices are crucial in optimization and quadratic forms. Notice how elements of the same color must be equal, showing the mirror property across the diagonal.\n [Learn more about symmetric matrices](!#symmetric-and-skew-symmetric) · [all nine types](!#the-nine-types-at-a-glance)",
      properties: ["$A = A^T$", "Real eigenvalues", "Orthogonal eigenvectors"],
      link: "/linear-algebra/matrix/types#5"
  },
    skewSymmetric: {
      description: "In a skew-symmetric matrix, each entry (i,j) equals the negative of entry (j,i). The main diagonal must be 0: $\\begin{bmatrix} 0 & \\color{red}a & \\color{red}b \\\\ \\color{red}{-a} & 0 & \\color{red}c \\\\ \\color{red}{-b} & \\color{red}{-c} & 0 \\end{bmatrix}$.\n These matrices represent rotations and angular velocities in physics.\n [Learn more about skew-symmetric matrices](!#symmetric-and-skew-symmetric) · [all nine types](!#the-nine-types-at-a-glance)",
      properties: ["$A = -A^T$", "Diagonal = 0", "Pure imaginary eigenvalues"],
      link: "/linear-algebra/matrix/types#6"
    },
    random: {
      description: "A random matrix has entries chosen at random, often from a specific probability distribution. Here's an example: $\\begin{bmatrix} 3 & 7 & 2 \\\\ 5 & 1 & 9 \\\\ 4 & 6 & 8 \\end{bmatrix}$.\n These matrices are essential in statistical analysis, quantum mechanics, and machine learning, especially for initializing neural networks.\n [Learn more about random matrices](!#random-matrices) · [all nine types](!#the-nine-types-at-a-glance)",
      properties: ["Testing", "Simulation", "Algorithm verification"],
      link: null
    }
  };

  return {
    props: {
      relatedTools: getRelatedTools('linear-algebra-matrix-types'),
      sectionsContent,
      stateUnits,
      faqQuestions,
      schemas,
      matrixTypesExplanations,
      seoData: {
        title: "Matrix Types Generator and Visualizer | Learn Math Class",
        description: "Generate identity, zero, scalar, diagonal, triangular, symmetric and skew-symmetric matrices at any size, with the defining pattern coloured and the properties of each type explained.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/matrix-types",
        name: "Square Matrix Types Generator",
        hubDescription: "Generate a square matrix of any of the classic special types — identity, zero, scalar, diagonal, upper and lower triangular, symmetric, skew-symmetric, or random — at the size you choose, and see which entries are forced and which are free. Each type comes with a short explanation, its defining pattern in colour, and the properties that follow from it: what its determinant and eigenvalues look like, what it does under multiplication, and where it turns up in decompositions and physics.",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="14" width="16" height="16" fill="#FAC775" stroke="#854F0B" stroke-width="1.2"/><rect x="32" y="14" width="16" height="16" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.8"/><rect x="50" y="14" width="16" height="16" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.8"/><rect x="14" y="32" width="16" height="16" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.8"/><rect x="32" y="32" width="16" height="16" fill="#FAC775" stroke="#854F0B" stroke-width="1.2"/><rect x="50" y="32" width="16" height="16" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.8"/><rect x="14" y="50" width="16" height="16" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.8"/><rect x="32" y="50" width="16" height="16" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.8"/><rect x="50" y="50" width="16" height="16" fill="#FAC775" stroke="#854F0B" stroke-width="1.2"/><text x="22" y="25" font-family="Georgia,serif" font-size="9" fill="#412402" text-anchor="middle">1</text><text x="40" y="43" font-family="Georgia,serif" font-size="9" fill="#412402" text-anchor="middle">1</text><text x="58" y="61" font-family="Georgia,serif" font-size="9" fill="#412402" text-anchor="middle">1</text><text x="40" y="25" font-family="Georgia,serif" font-size="9" fill="#888780" text-anchor="middle">0</text><text x="58" y="25" font-family="Georgia,serif" font-size="9" fill="#888780" text-anchor="middle">0</text><text x="22" y="43" font-family="Georgia,serif" font-size="9" fill="#888780" text-anchor="middle">0</text><text x="58" y="43" font-family="Georgia,serif" font-size="9" fill="#888780" text-anchor="middle">0</text><text x="22" y="61" font-family="Georgia,serif" font-size="9" fill="#888780" text-anchor="middle">0</text><text x="40" y="61" font-family="Georgia,serif" font-size="9" fill="#888780" text-anchor="middle">0</text><text x="40" y="76" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">special matrices</text></svg>`,
        category: 'Matrices',
        subCategory: 'Special Matrices'
      }
    },
    revalidate: 86400
  };
}


export default function MatrixTypesPage({ seoData, sectionsContent, stateUnits, faqQuestions, schemas, matrixTypesExplanations, relatedTools }) {

  const plain = (obj, id) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [ sectionsContent[obj].content ],
  })

  // [prose, framed unit(s), deeper prose] - the paired sections carry two
  // stills, one per state, since each treats two of the nine types.
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
    plain('obj1', 'getting-started'),
    plain('obj2', 'the-nine-types-at-a-glance'),
    stateRow('obj3', 'identity-and-zero', 'identity', 'zero'),
    stateRow('obj4', 'scalar-and-diagonal', 'scalar', 'diagonal'),
    stateRow('obj5', 'triangular-matrices', 'upperTriangular', 'lowerTriangular'),
    stateRow('obj6', 'symmetric-and-skew-symmetric', 'symmetric', 'skewSymmetric'),
    stateRow('obj7', 'random-matrices', 'random'),
    plain('obj8', 'how-the-types-relate'),
    plain('obj9', 'determinants-and-eigenvalues-by-type'),
    plain('obj10', 'where-the-types-appear'),
    plain('obj11', 'common-mistakes'),
    plain('obj12', 'related-concepts'),
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Square Matrix Types Generator</h1>
      <br/>
      <div style={{transform:'scale(0.95)'}}>
        <MatrixGenerator explanations={matrixTypesExplanations}/>
      </div>
      <br/>
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
