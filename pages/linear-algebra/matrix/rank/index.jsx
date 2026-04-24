import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../pages.css'
import Head from 'next/head'


export async function getStaticProps(){
const keyWords = [
  'matrix rank',
  'rank of a matrix',
  'how to find matrix rank',
  'column rank row rank',
  'rank nullity theorem',
  'full rank matrix',
  'rank deficient matrix',
  'rank and linear systems',
  'rank row reduction',
  'matrix rank properties',
  'four fundamental subspaces',
  'rank and invertibility',
  'Sylvester rank inequality',
  'rank special matrices',
  'column space dimension'
]
  // •

//   \u2022 First item
// \u2022 Second item

  
// <hr style="border-width:1px;"></hr>

// <hr style="color:blue;" />

// <hr style="border-color:#3498db; border-width:1px;" />



// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
        //     {processContent(sectionsContent.normal.notation)}
        // </div>,


//   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
//     {processContent(sectionsContent.normal.parameters)}
// </div>,
        
//  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
//                   {processContent(sectionsContent.obj4.content)}
//                   </div>,


//  <div key={'dist'} style={{
//                     textAlign: 'center',
//                     transform: 'scale(0.98)',
//                     transformOrigin: 'center',
//                     marginTop:'50px',
//                     marginLeft:'-150px'
//                   }} dangerouslySetInnerHTML={{ 
//                     __html:   sectionContent.distributions.svg,
//                   }} />


const sectionsContent = {
  obj1: {
    title: `What Rank Measures`,
    content: `The rank of an $m \\times n$ matrix $A$ is a single non-negative integer $r$ that captures how much of the matrix's potential dimensionality is actually used. It satisfies

$$0 \\leq \\text{rank}(A) \\leq \\min(m, n)$$

When $\\text{rank}(A) = \\min(m, n)$, the matrix has full rank — every row and every column contributes something that no combination of the others can reproduce. When $\\text{rank}(A) < \\min(m, n)$, the matrix is rank-deficient, meaning at least one row or column is a [linear combination](!/linear-algebra/vectors/linear-combinations) of the others.

A $5 \\times 3$ matrix with rank $3$ uses all three of its column directions. A $5 \\times 3$ matrix with rank $2$ has one column that is redundant — it lies in the [span](!/linear-algebra/vector-spaces/span) of the other two. The rank does not say which column is redundant (often more than one subset works), only that the effective column count is $2$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Column Rank and Row Rank`,
    content: `The column rank of $A$ is the dimension of its column space — the subspace of $\\mathbb{R}^m$ spanned by the columns of $A$. It counts the maximum number of [linearly independent](!/linear-algebra/vector-spaces/linear-independence) columns.

The row rank is the dimension of the row space — the subspace of $\\mathbb{R}^n$ spanned by the rows. It counts the maximum number of linearly independent rows.

A fundamental theorem states that these two numbers are always equal:

$$\\text{column rank of } A = \\text{row rank of } A$$

This common value is called the rank of $A$, written $\\text{rank}(A)$ or $\\text{rk}(A)$.

The equality is not obvious. The columns live in $\\mathbb{R}^m$ and the rows live in $\\mathbb{R}^n$ — two different spaces, potentially of different dimensions. The proof goes through row reduction: elementary row operations do not change the row space, and in [reduced row echelon form](!/linear-algebra/linear-systems/echelon-form), the number of nonzero rows (row rank) equals the number of pivot columns (column rank). Since row operations preserve both counts, the equality holds for the original matrix.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Computing Rank via Row Reduction`,
    content: `The standard method for finding the rank of a matrix is to reduce it to row echelon form and count the pivot positions.

## Worked Example

$$A = \\begin{pmatrix} 1 & 2 & 0 & -1 & 3 \\\\ 2 & 4 & 1 & 0 & 5 \\\\ -1 & -2 & 3 & 4 & 1 \\\\ 0 & 0 & 2 & 3 & -1 \\end{pmatrix}$$

Subtract $2$ times row $1$ from row $2$, and add row $1$ to row $3$:

$$\\begin{pmatrix} 1 & 2 & 0 & -1 & 3 \\\\ 0 & 0 & 1 & 2 & -1 \\\\ 0 & 0 & 3 & 3 & 4 \\\\ 0 & 0 & 2 & 3 & -1 \\end{pmatrix}$$

Subtract $3$ times row $2$ from row $3$, and subtract $2$ times row $2$ from row $4$:

$$\\begin{pmatrix} 1 & 2 & 0 & -1 & 3 \\\\ 0 & 0 & 1 & 2 & -1 \\\\ 0 & 0 & 0 & -3 & 7 \\\\ 0 & 0 & 0 & -1 & 1 \\end{pmatrix}$$

Subtract $3$ times row $4$ from row $3$:

$$\\begin{pmatrix} 1 & 2 & 0 & -1 & 3 \\\\ 0 & 0 & 1 & 2 & -1 \\\\ 0 & 0 & 0 & 0 & 4 \\\\ 0 & 0 & 0 & -1 & 1 \\end{pmatrix}$$

Swap rows $3$ and $4$ to place the pivot:

$$\\begin{pmatrix} 1 & 2 & 0 & -1 & 3 \\\\ 0 & 0 & 1 & 2 & -1 \\\\ 0 & 0 & 0 & -1 & 1 \\\\ 0 & 0 & 0 & 0 & 4 \\end{pmatrix}$$

There are four pivots, in columns $1$, $3$, $4$, and $5$. So $\\text{rank}(A) = 4$. Column $2$ is the only non-pivot column, corresponding to the single free variable if this matrix were the coefficient matrix of a system.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Rank and Dimension`,
    content: `For an $m \\times n$ matrix $A$, the rank can be at most $\\min(m, n)$. Whether it reaches this maximum depends on the matrix's entries, not just its shape.

Full column rank means $\\text{rank}(A) = n$ — all $n$ columns are independent. When $A$ has full column rank, the system $Ax = \\mathbf{b}$ has at most one solution for any $\\mathbf{b}$, because no free variables exist. The null space is $\\{\\mathbf{0}\\}$.

Full row rank means $\\text{rank}(A) = m$ — all $m$ rows are independent. When $A$ has full row rank, the system $Ax = \\mathbf{b}$ has at least one solution for every $\\mathbf{b}$, because the column space is all of $\\mathbb{R}^m$.

When $A$ is square ($m = n$) and has full rank $n$, both conditions hold simultaneously: the system has exactly one solution for every right-hand side, and $A$ is [invertible](!/linear-algebra/matrix/inverse).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Rank and Linear Systems`,
    content: `The solvability of a [linear system](!/linear-algebra/linear-systems) $Ax = \\mathbf{b}$ is determined entirely by comparing the rank of the coefficient matrix $A$ with the rank of the augmented matrix $[A \\mid \\mathbf{b}]$.

A solution exists if and only if $\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}])$. This condition means that $\\mathbf{b}$ lies in the column space of $A$ — it can be expressed as a linear combination of the columns.

When solutions exist, uniqueness depends on whether the rank equals the number of unknowns $n$. If $\\text{rank}(A) = n$, there are no free variables and the solution is unique. If $\\text{rank}(A) < n$, there are $n - \\text{rank}(A)$ free variables, and the solution set is an infinite family parametrized by those free variables.

The three possible outcomes are: $\\text{rank}(A) < \\text{rank}([A \\mid \\mathbf{b}])$ means the system is inconsistent and has no solution. $\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}]) = n$ means there is exactly one solution. $\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}]) < n$ means there are infinitely many solutions.

There is no scenario with a finite number of solutions greater than one. A linear system either has zero, one, or infinitely many solutions.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `The Rank-Nullity Theorem`,
    content: `For an $m \\times n$ matrix $A$, the rank and the nullity — the dimension of the null space $\\{\\mathbf{x} : A\\mathbf{x} = \\mathbf{0}\\}$ — satisfy

$$\\text{rank}(A) + \\text{nullity}(A) = n$$

The $n$ columns of $A$ partition into two groups: the pivot columns, which contribute to the column space and drive the rank, and the free columns, which contribute to the null space and drive the nullity. Every column does exactly one of these things.

For a $3 \\times 5$ matrix with rank $2$, the nullity is $3$. The column space is a two-dimensional subspace of $\\mathbb{R}^3$ (a plane through the origin), and the null space is a three-dimensional subspace of $\\mathbb{R}^5$.

For a square $n \\times n$ matrix, the theorem says $\\text{rank}(A) + \\text{nullity}(A) = n$. If the rank is $n$ (full rank), the nullity is $0$ — the null space contains only $\\mathbf{0}$, and $A$ is invertible. If the rank is less than $n$, the null space is nontrivial, the [determinant](!/linear-algebra/determinants) is zero, and $A$ is singular.

The rank-nullity theorem is sometimes called the dimension theorem for linear maps. If $A$ defines a [linear transformation](!/linear-algebra/transformations) $T: \\mathbb{R}^n \\to \\mathbb{R}^m$, then the rank is the dimension of the image (range) of $T$, and the nullity is the dimension of the kernel. Their sum equals the dimension of the domain.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Properties of Rank`,
    content: `The rank function obeys several inequalities and identities that constrain how matrix operations affect it.

The rank of the zero matrix is $0$, and this is the only matrix with rank zero. For any nonzero scalar $c$, $\\text{rank}(cA) = \\text{rank}(A)$ — scaling does not create or destroy independence.

Transposition preserves rank: $\\text{rank}(A^T) = \\text{rank}(A)$. This is a restatement of the equality of row rank and column rank.

The rank of a product can only decrease:

$$\\text{rank}(AB) \\leq \\min(\\text{rank}(A), \\text{rank}(B))$$

Multiplying by a matrix can collapse dimensions but cannot create new independent directions. There is also a lower bound due to Sylvester's inequality:

$$\\text{rank}(A) + \\text{rank}(B) - n \\leq \\text{rank}(AB)$$

for $A$ of size $m \\times n$ and $B$ of size $n \\times p$. This says the rank of the product cannot drop too far below the ranks of the factors.

The rank of a sum satisfies $\\text{rank}(A + B) \\leq \\text{rank}(A) + \\text{rank}(B)$. Equality holds when the column spaces of $A$ and $B$ are disjoint (intersect only at $\\mathbf{0}$).

Multiplying by an invertible matrix preserves rank exactly: if $P$ and $Q$ are invertible, then $\\text{rank}(PAQ) = \\text{rank}(A)$. This is because invertible matrices neither collapse nor create dimensions.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Rank of Special Matrices`,
    content: `Several [matrix types](!/linear-algebra/matrix/types) have rank that can be read off directly from their structure.

The identity matrix $I_n$ has rank $n$ — all columns are standard basis vectors, which are linearly independent. Every invertible matrix has full rank by definition.

A [diagonal](!/linear-algebra/matrix/types) matrix has rank equal to the number of nonzero diagonal entries. The zero entries correspond to collapsed coordinate directions.

A rank-$1$ matrix has the form $A = \\mathbf{u}\\mathbf{v}^T$, an outer product of two nonzero vectors. Every column of $A$ is a scalar multiple of $\\mathbf{u}$, so the column space is the one-dimensional line through $\\mathbf{u}$. Equivalently, every row is a scalar multiple of $\\mathbf{v}^T$. Rank-$1$ matrices are the building blocks of the outer product decomposition of matrix multiplication.

A [symmetric](!/linear-algebra/matrix/types) positive definite matrix always has full rank — all its eigenvalues are strictly positive, so no dimension is collapsed. A [nilpotent](!/linear-algebra/matrix/types) matrix of order $n > 1$ always has rank strictly less than $n$, since its determinant is zero.

The rank of $A^T A$ equals the rank of $A$. This follows from the fact that the null spaces of $A$ and $A^T A$ are identical: $A\\mathbf{x} = \\mathbf{0}$ implies $A^T A \\mathbf{x} = \\mathbf{0}$, and conversely $A^T A \\mathbf{x} = \\mathbf{0}$ implies $\\mathbf{x}^T A^T A \\mathbf{x} = \\|A\\mathbf{x}\\|^2 = 0$, so $A\\mathbf{x} = \\mathbf{0}$. By the rank-nullity theorem, equal nullities with the same $n$ give equal ranks.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Rank and the Four Fundamental Subspaces`,
    content: `Every $m \\times n$ matrix $A$ gives rise to four [subspaces](!/linear-algebra/vector-spaces/fundamental-spaces), and the rank governs all of their dimensions.

The column space of $A$ is the span of the columns, a subspace of $\\mathbb{R}^m$ with dimension equal to $\\text{rank}(A)$. The row space of $A$ is the span of the rows, a subspace of $\\mathbb{R}^n$ also with dimension $\\text{rank}(A)$. The null space of $A$ consists of all solutions to $A\\mathbf{x} = \\mathbf{0}$, a subspace of $\\mathbb{R}^n$ with dimension $n - \\text{rank}(A)$. The left null space consists of all solutions to $A^T\\mathbf{y} = \\mathbf{0}$, a subspace of $\\mathbb{R}^m$ with dimension $m - \\text{rank}(A)$.

These four subspaces split into two pairs of [orthogonal](!/linear-algebra/orthogonality) complements. In $\\mathbb{R}^n$, the row space and the null space are orthogonal complements: every vector in $\\mathbb{R}^n$ can be uniquely decomposed into a row-space component and a null-space component, and the two are perpendicular. In $\\mathbb{R}^m$, the column space and the left null space form the analogous pair.

The four dimensions add up correctly on both sides: $\\text{rank}(A) + (n - \\text{rank}(A)) = n$ in $\\mathbb{R}^n$, and $\\text{rank}(A) + (m - \\text{rank}(A)) = m$ in $\\mathbb{R}^m$. The rank is the single number that controls the entire structural decomposition.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

const introContent = {
    id: "intro",
  title: `Measuring the Effective Size of a Matrix`,
  content: `A matrix may have many rows and columns, but some of them may carry redundant information — expressible as combinations of others. The rank strips away this redundancy and counts the number of truly independent directions the matrix uses, revealing its effective dimensionality and governing the solvability of every linear system it defines.`,
}



const faqQuestions = {
  obj1: {
    question: "What is the rank of a matrix?",
    answer: "The rank of a matrix is the number of linearly independent rows, which always equals the number of linearly independent columns. It measures the effective dimensionality of the matrix and satisfies 0 ≤ rank(A) ≤ min(m, n) for an m × n matrix. A matrix with rank equal to min(m, n) is said to have full rank.",
    sectionId: "1"
  },
  obj2: {
    question: "How do you find the rank of a matrix?",
    answer: "Reduce the matrix to row echelon form using elementary row operations and count the number of pivot positions. Each pivot corresponds to one independent row and one independent column. The number of pivots is the rank.",
    sectionId: "3"
  },
  obj3: {
    question: "What is the rank-nullity theorem?",
    answer: "For an m × n matrix A, the rank plus the nullity equals n, the number of columns. The rank counts the pivot columns (dimensions in the column space) and the nullity counts the free columns (dimensions in the null space). Every column contributes to exactly one of these two counts.",
    sectionId: "6"
  },
  obj4: {
    question: "How does rank determine the solutions of a linear system?",
    answer: "A system Ax = b has a solution if and only if rank(A) equals rank([A|b]). When solutions exist, the system has a unique solution if rank(A) equals the number of unknowns, and infinitely many solutions if the rank is less. A linear system can never have exactly two or any other finite number greater than one.",
    sectionId: "5"
  },
  obj5: {
    question: "What are the four fundamental subspaces of a matrix?",
    answer: "Every m × n matrix defines four subspaces: the column space and left null space in Rᵐ, and the row space and null space in Rⁿ. The rank determines all four dimensions — the column space and row space both have dimension equal to the rank, while the null space has dimension n − rank and the left null space has dimension m − rank.",
    sectionId: "9"
  }
}


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": seoData.name,
//     "description": seoData.description,
//     "url": "https://www.learnmathclass.com" + seoData.url,
//     "inLanguage": "en-US",
//     "learningResourceType": "Explanation",
//     "educationalLevel": "High School, College",
//     "educationalUse": "Learning",
//     "audience": {
//       "@type": "EducationalAudience",
//       "educationalRole": "student"
//     },
//     "about": {
//       "@type": "Thing",
//       "name": "Matrix Rank"
//     },
//     "teaches": [
//       "Definition of rank and the equality of column rank and row rank",
//       "Computing rank via row reduction and pivot counting",
//       "Full rank, rank deficiency, and their implications",
//       "The rank-nullity theorem and dimension counting",
//       "Rank conditions for solvability of linear systems",
//       "The four fundamental subspaces and their dimensions"
//     ],
//     "keywords": keyWords.join(", "),
//     "author": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "publisher": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "datePublished": "2024-01-15",
//     "dateModified": new Date().toISOString()
//   },

//   breadcrumb: {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       {
//         "@type": "ListItem",
//         "position": 1,
//         "name": "Home",
//         "item": "https://www.learnmathclass.com"
//       },
//       {
//         "@type": "ListItem",
//         "position": 2,
//         "name": "Linear Algebra",
//         "item": "https://www.learnmathclass.com/linear-algebra"
//       },
//       {
//         "@type": "ListItem",
//         "position": 3,
//         "name": "Matrices",
//         "item": "https://www.learnmathclass.com/linear-algebra/matrix"
//       },
//       {
//         "@type": "ListItem",
//         "position": 4,
//         "name": "Rank of a Matrix",
//         "item": "https://www.learnmathclass.com/linear-algebra/matrix/rank"
//       }
//     ]
//   },

//   faq: {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": Object.keys(faqQuestions).map(key => ({
//       "@type": "Question",
//       "name": faqQuestions[key].question,
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": faqQuestions[key].answer
//       }
//     }))
//   }
// }

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Rank of a Matrix",
    "description": "Learn matrix rank — how to compute it by row reduction, the rank-nullity theorem, rank conditions for linear systems, properties of rank, and the four fundamental subspaces.",
    "url": "https://www.learnmathclass.com/linear-algebra/matrix/rank",
    "inLanguage": "en-US",
    "learningResourceType": "Explanation",
    "educationalLevel": "High School, College",
    "educationalUse": "Learning",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "about": {
      "@type": "Thing",
      "name": "Matrix Rank"
    },
    "teaches": [
      "Definition of rank and the equality of column rank and row rank",
      "Computing rank via row reduction and pivot counting",
      "Full rank, rank deficiency, and their implications",
      "The rank-nullity theorem and dimension counting",
      "Rank conditions for solvability of linear systems",
      "The four fundamental subspaces and their dimensions"
    ],
    "keywords": keyWords.join(", "),
    "author": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString()
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
        "name": "Matrices",
        "item": "https://www.learnmathclass.com/linear-algebra/matrix"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Rank of a Matrix",
        "item": "https://www.learnmathclass.com/linear-algebra/matrix/rank"
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


   return {
  props: {
    sectionsContent,
    introContent,
    faqQuestions,
    schemas,
    seoData: {
      title: "Matrix Rank: Definition & Computation | Learn Math Class",
      description: "Learn matrix rank — how to compute it by row reduction, the rank-nullity theorem, rank conditions for linear systems, properties of rank, and the four fundamental subspaces.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/matrix/rank",
      name: "Rank of a Matrix"
    },
  }
}
   }

export default function MatrixRankPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {   
    
  const genericSections=[
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    // {
    //     id:'10',
    //     title:sectionsContent.obj10.title,
    //     link:sectionsContent.obj10.link,
    //     content:[
    //       sectionsContent.obj10.content,
    //     ]
    // },
    // {
    //     id:'11',
    //     title:sectionsContent.obj11.title,
    //     link:sectionsContent.obj11.link,
    //     content:[
    //       sectionsContent.obj11.content,
    //     ]
    // },
    // {
    //     id:'12',
    //     title:sectionsContent.obj12.title,
    //     link:sectionsContent.obj12.link,
    //     content:[
    //       sectionsContent.obj12.content,
    //     ]
    // },
    // {
    //     id:'13',
    //     title:sectionsContent.obj13.title,
    //     link:sectionsContent.obj13.link,
    //     content:[
    //       sectionsContent.obj13.content,
    //     ]
    // },
    // {
    //     id:'14',
    //     title:sectionsContent.obj14.title,
    //     link:sectionsContent.obj14.link,
    //     content:[
    //       sectionsContent.obj14.content,
    //     ]
    // },
    // {
    //     id:'15',
    //     title:sectionsContent.obj15.title,
    //     link:sectionsContent.obj15.link,
    //     content:[
    //       sectionsContent.obj15.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    
]

  return (
   <>
<Head>
  <title>{seoData.title}</title>
  <meta name="description" content={seoData.description} />
  <meta name="keywords" content={seoData.keywords} />
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
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.learningResource)
    }}
  />

  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.breadcrumb)
    }}
  />

  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.faq)
    }}
  />
</Head>
   {/* <GenericNavbar/> */}
   <br/>
   <br/>
   <br/>
   <br/>
    <OperaSidebar 
           side='right'
           // topOffset='65px' 
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         /> 
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Rank of a Matrix</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
         secondaryNavTitle="More in this Section"
   
   />
   <br/>
   <br/>
   <br/>
    <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        />
   <br/>
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}
