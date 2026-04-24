import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../pages.css'
import Head from 'next/head'


export async function getStaticProps(){
const keyWords = [
  "Gaussian elimination",
  "row reduction",
  "forward elimination",
  "back substitution",
  "Gauss-Jordan elimination",
  "elementary row operations",
  "pivot position",
  "row echelon form",
  "reduced row echelon form",
  "augmented matrix reduction",
  "partial pivoting",
  "parametric vector form",
  "Gaussian elimination examples",
  "computational cost elimination"
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

//     const sectionsContent={

//     obj1:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
  
//     },
//     obj2:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
  
//     obj3:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj4:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj5:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj6:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj7:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj8:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj9:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj10:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj11:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj12:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj13:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },
//     obj14:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },


//     obj15:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     }
  
//   }
const sectionsContent = {
  obj1: {
    title: `The Goal`,
    content: `The input is an augmented matrix $[A \\mid \\mathbf{b}]$ representing a linear system $A\\mathbf{x} = \\mathbf{b}$. The output is an equivalent system — one with exactly the same solution set — in a form simple enough that the solution can be read off directly or obtained with minimal effort.

The "simple form" is [echelon form](!/linear-algebra/linear-systems/echelon-form): a staircase pattern where the leading entry of each row is to the right of the leading entry of the row above, and everything below each leading entry is zero. Once the augmented matrix is in echelon form, the solution is extracted by back substitution — solving from the last equation upward.

Optionally, the reduction can continue to reduced row echelon form (RREF), where each leading entry is $1$ and is the only nonzero entry in its column. In RREF, the solution is visible by inspection.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The Three Elementary Row Operations`,
    content: `Gaussian elimination uses three operations, each of which transforms the augmented matrix without changing the solution set.

Row swap ($R_i \\leftrightarrow R_j$): interchange two rows. This reorders the equations — a cosmetic change that is sometimes necessary to place a nonzero entry in the pivot position.

Row scaling ($kR_i \\to R_i$, $k \\neq 0$): multiply every entry in a row by a nonzero scalar. This rescales one equation. Multiplying by zero is forbidden because it would destroy information.

Row addition ($R_i + cR_j \\to R_i$): add $c$ times row $j$ to row $i$, replacing row $i$ with the result. This is the operation that actually eliminates entries — by choosing $c$ appropriately, a targeted entry becomes zero.

Each operation is reversible: swapping the same pair undoes the swap, scaling by $1/k$ undoes scaling by $k$, and subtracting $c$ times row $j$ from row $i$ undoes the addition. Reversibility guarantees that no solutions are created or lost. Each operation also corresponds to left-multiplication by an [elementary matrix](!/linear-algebra/matrix/operations), connecting the algorithm to the theory of [matrix factorization](!/linear-algebra/decompositions).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Forward Elimination`,
    content: `Forward elimination is the first phase of the algorithm. It sweeps through the augmented matrix from left to right, top to bottom, creating zeros below each pivot.

Start with the leftmost column that contains a nonzero entry. Identify a nonzero entry in that column to serve as the pivot — if the entry in the current top row is zero, swap that row with a row below that has a nonzero entry in this column. Then use row addition to eliminate every entry below the pivot: for each row $i$ below the pivot row, add $-\\frac{a_{ij}}{a_{pj}}$ times the pivot row to row $i$, zeroing out the $(i, j)$ entry.

Move one column to the right and one row down, and repeat the process on the submatrix below and to the right of the current pivot. Continue until no rows or columns remain to process.

The result is a matrix in row echelon form: a staircase of pivots descending from upper-left to lower-right, with zeros filling in below and to the left of each pivot. Any rows that are entirely zero sit at the bottom.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Pivots and Pivot Positions`,
    content: `A pivot is the leading (leftmost) nonzero entry in each row of the echelon form. The column containing a pivot is a pivot column; every other column is a free column.

The number of pivots equals the [rank](!/linear-algebra/matrix/rank) of the coefficient matrix. Pivot columns correspond to determined variables (pivot variables) whose values are fixed once the free variables are assigned. Free columns correspond to free variables (parameters) that can take any real value.

If every column of $A$ is a pivot column, the system has no free variables and the solution (if it exists) is unique. If at least one column is free, the solution set (if nonempty) is infinite, parametrized by the free variables. The distinction between pivot and free columns is the structural core of the algorithm — it determines both the form and the dimension of the solution set.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Back Substitution`,
    content: `Once the augmented matrix is in row echelon form, the solution is obtained by solving from the bottom row upward.

The last nonzero row contains the fewest unknowns — typically one pivot variable in terms of free variables and a constant. Solve for that pivot variable. Substitute the result into the row above, which now also becomes solvable for its pivot variable. Continue upward until every pivot variable is expressed in terms of the free variables and the constants from $\\mathbf{b}$.

## Worked Example

$$\\left(\\begin{array}{ccc|c} 2 & -1 & 3 & 9 \\\\ 0 & 4 & -2 & 6 \\\\ 0 & 0 & 5 & 10 \\end{array}\\right)$$

The bottom row gives $5x_3 = 10$, so $x_3 = 2$. The middle row gives $4x_2 - 2(2) = 6$, so $4x_2 = 10$ and $x_2 = 5/2$. The top row gives $2x_1 - 5/2 + 3(2) = 9$, so $2x_1 = 9 + 5/2 - 6 = 11/2$ and $x_1 = 11/4$.

Each step required only previously solved variables. The process terminates in $n$ steps, with the solution fully determined.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Gauss-Jordan Elimination`,
    content: `Gauss-Jordan elimination extends the forward pass with a backward pass that creates zeros above each pivot as well, and scales each pivot to $1$. The result is [reduced row echelon form](!/linear-algebra/linear-systems/echelon-form) (RREF), where every pivot variable is already isolated in its row.

After forward elimination produces REF, continue by working from the bottom pivot upward. For each pivot, add appropriate multiples of its row to the rows above to eliminate all entries above the pivot. Then scale the pivot row so the pivot entry becomes $1$.

The payoff is that in RREF, the solution is visible by direct inspection — no back substitution is needed. Each pivot row reads "$x_i = \\text{(expression in free variables and constants)}$." The trade-off is that the backward pass requires additional row operations, roughly doubling the total work compared to forward elimination alone.

For hand computation, the choice between back substitution (stop at REF) and Gauss-Jordan (continue to RREF) is a matter of preference. For computer implementations, both approaches are standard.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Worked Example: Unique Solution`,
    content: `Solve the system

$$x_1 + 2x_2 - x_3 = 3, \\quad 2x_1 + 5x_2 + x_3 = 8, \\quad 3x_1 + 8x_2 + 2x_3 = 13$$

Form the augmented matrix and apply forward elimination:

$$\\left(\\begin{array}{ccc|c} 1 & 2 & -1 & 3 \\\\ 2 & 5 & 1 & 8 \\\\ 3 & 8 & 2 & 13 \\end{array}\\right) \\xrightarrow{R_2 - 2R_1,\\; R_3 - 3R_1} \\left(\\begin{array}{ccc|c} 1 & 2 & -1 & 3 \\\\ 0 & 1 & 3 & 2 \\\\ 0 & 2 & 5 & 4 \\end{array}\\right)$$

$$\\xrightarrow{R_3 - 2R_2} \\left(\\begin{array}{ccc|c} 1 & 2 & -1 & 3 \\\\ 0 & 1 & 3 & 2 \\\\ 0 & 0 & -1 & 0 \\end{array}\\right)$$

Three pivots in three columns — unique solution. Back substitution: row $3$ gives $-x_3 = 0$, so $x_3 = 0$. Row $2$ gives $x_2 + 3(0) = 2$, so $x_2 = 2$. Row $1$ gives $x_1 + 2(2) - 0 = 3$, so $x_1 = -1$.

Verification: $-1 + 4 - 0 = 3$, $-2 + 10 + 0 = 8$, $-3 + 16 + 0 = 13$. All three equations are satisfied.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Worked Example: Infinitely Many Solutions`,
    content: `Solve the system

$$x_1 - x_2 + 2x_3 + x_4 = 3, \\quad 2x_1 - 2x_2 + 5x_3 + 4x_4 = 8$$

Two equations in four unknowns — more unknowns than equations, so the solution (if it exists) cannot be unique. Form and reduce:

$$\\left(\\begin{array}{cccc|c} 1 & -1 & 2 & 1 & 3 \\\\ 2 & -2 & 5 & 4 & 8 \\end{array}\\right) \\xrightarrow{R_2 - 2R_1} \\left(\\begin{array}{cccc|c} 1 & -1 & 2 & 1 & 3 \\\\ 0 & 0 & 1 & 2 & 2 \\end{array}\\right)$$

Pivots in columns $1$ and $3$. Columns $2$ and $4$ are free. Let $x_2 = s$ and $x_4 = t$. Row $2$ gives $x_3 = 2 - 2t$. Row $1$ gives $x_1 = 3 + s - 2(2 - 2t) - t = -1 + s + 3t$.

The general solution in parametric vector form:

$$\\mathbf{x} = \\begin{pmatrix} -1 \\\\ 0 \\\\ 2 \\\\ 0 \\end{pmatrix} + s\\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\\\ 0 \\end{pmatrix} + t\\begin{pmatrix} 3 \\\\ 0 \\\\ -2 \\\\ 1 \\end{pmatrix}$$

The solution set is a two-dimensional plane in $\\mathbb{R}^4$, passing through $(-1, 0, 2, 0)$ and spanned by two direction vectors.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Worked Example: No Solution`,
    content: `Solve the system

$$x_1 + x_2 = 2, \\quad 2x_1 + 2x_2 = 3$$

Form and reduce:

$$\\left(\\begin{array}{cc|c} 1 & 1 & 2 \\\\ 2 & 2 & 3 \\end{array}\\right) \\xrightarrow{R_2 - 2R_1} \\left(\\begin{array}{cc|c} 1 & 1 & 2 \\\\ 0 & 0 & -1 \\end{array}\\right)$$

The second row reads $0x_1 + 0x_2 = -1$, which is the equation $0 = -1$. This is a contradiction — no values of $x_1$ and $x_2$ can satisfy it.

The system is inconsistent. Geometrically, the two equations represent parallel lines in $\\mathbb{R}^2$: $x_1 + x_2 = 2$ and $x_1 + x_2 = 3/2$ (the second equation, after dividing by $2$). Parallel lines with different intercepts never intersect.

Inconsistency is always detectable in echelon form: a row $[0 \\; 0 \\; \\cdots \\; 0 \\mid d]$ with $d \\neq 0$ means $\\text{rank}([A \\mid \\mathbf{b}]) > \\text{rank}(A)$, and by the [Rouché-Capelli theorem](!/linear-algebra/linear-systems/solvability), no solution exists.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Computational Cost`,
    content: `Forward elimination on an $n \\times n$ system requires roughly $\\frac{2}{3}n^3$ arithmetic operations (multiplications and additions). The cost comes from the nested loop structure: for each of the $n$ pivot columns, elimination involves $O(n)$ rows, each requiring $O(n)$ operations.

Back substitution requires roughly $n^2$ operations — a negligible addition compared to forward elimination. Gauss-Jordan elimination (continuing to RREF) raises the total to roughly $n^3$, because the backward pass does comparable work to the forward pass.

These costs are dramatically better than the alternatives for large systems. [Cramer's rule](!/linear-algebra/determinants/applications) requires $n + 1$ [determinant](!/linear-algebra/determinants) evaluations, each costing $O(n^3)$ via row reduction or $O(n!)$ via cofactor expansion — orders of magnitude slower. Computing the [inverse](!/linear-algebra/matrix/inverse) explicitly costs roughly $2n^3$ operations. Gaussian elimination is the standard baseline against which all other direct methods are measured.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj11: {
    title: `Partial Pivoting`,
    content: `In exact arithmetic, any nonzero entry can serve as a pivot. In floating-point arithmetic, the choice matters. A very small pivot amplifies rounding errors — dividing by a number close to zero magnifies any imprecision in the numerator.

Partial pivoting addresses this by modifying the pivot selection step. At each stage, instead of using whatever nonzero entry happens to sit in the pivot position, the algorithm scans the entries below (and including) the current position in the pivot column and swaps the row with the largest absolute value into the pivot position. This keeps the multipliers $-a_{ij}/a_{pj}$ small, which limits the accumulation of rounding error.

Partial pivoting does not change the mathematical structure of Gaussian elimination — it only changes which row swaps are performed. The echelon form, the rank, the pivots, and the solution are all the same in exact arithmetic. The difference is entirely numerical: partial pivoting makes the computation stable.

Every serious numerical implementation of Gaussian elimination uses partial pivoting by default. In the [LU decomposition](!/linear-algebra/decompositions/lower-upper), the row swaps are recorded in a permutation matrix $P$, giving the factorization $PA = LU$.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

 const introContent = {
  title: `The Workhorse Algorithm of Linear Algebra`,
  content: `Gaussian elimination transforms a linear system into a simpler equivalent form by systematically applying row operations. Forward elimination creates zeros below each pivot, producing row echelon form. Back substitution then solves from the bottom up. The algorithm handles every case — unique solutions, infinitely many solutions, and inconsistent systems — within a single unified framework.`,
}

const faqQuestions = {
  obj1: {
    question: "What is Gaussian elimination?",
    answer: "Gaussian elimination transforms a linear system into row echelon form using three elementary row operations: row swaps, row scaling, and adding multiples of one row to another. Forward elimination creates zeros below each pivot, then back substitution solves from the bottom up.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the difference between REF and RREF?",
    answer: "Row echelon form (REF) has a staircase of pivots with zeros below each one — the solution requires back substitution. Reduced row echelon form (RREF) additionally has each pivot equal to 1 and zeros above each pivot, so the solution is visible by direct inspection.",
    sectionId: "6"
  },
  obj3: {
    question: "How do you know if a system has no solution?",
    answer: "A system is inconsistent when row reduction produces a row of the form [0 0 ⋯ 0 | d] with d ≠ 0, representing the impossible equation 0 = d. This means rank([A | b]) > rank(A), and no solution exists.",
    sectionId: "9"
  },
  obj4: {
    question: "What are pivot and free variables?",
    answer: "Pivot variables correspond to columns containing a pivot in the echelon form — their values are determined by back substitution. Free variables correspond to non-pivot columns and can take any real value. If there are free variables and the system is consistent, infinitely many solutions exist.",
    sectionId: "4"
  },
  obj5: {
    question: "What is partial pivoting?",
    answer: "Partial pivoting selects the largest absolute value in the current pivot column and swaps it into the pivot position. This keeps multipliers small and limits rounding error accumulation in floating-point arithmetic. Every serious numerical implementation uses partial pivoting by default.",
    sectionId: "11"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Gaussian Elimination",
    "description": "Gaussian elimination: forward elimination, back substitution, Gauss-Jordan, row operations, pivots, worked examples for unique, infinite, and no-solution cases, partial pivoting, and cost.",
    "url": "https://www.learnmathclass.com/linear-algebra/linear-systems/gaussian-eliminations",
    "inLanguage": "en-US",
    "learningResourceType": "Explanation",
    "educationalLevel": "College",
    "educationalUse": "Learning",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "about": {
      "@type": "Thing",
      "name": "Gaussian Elimination"
    },
    "teaches": [
      "Three elementary row operations",
      "Forward elimination to row echelon form",
      "Pivots, pivot columns, and free variables",
      "Back substitution procedure",
      "Gauss-Jordan elimination to RREF",
      "Worked examples: unique, infinite, and no solution",
      "Parametric vector form for infinite solutions",
      "Partial pivoting for numerical stability",
      "Computational cost: 2n³/3 operations"
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
        "name": "Linear Systems",
        "item": "https://www.learnmathclass.com/linear-algebra/linear-systems"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Gaussian Elimination",
        "item": "https://www.learnmathclass.com/linear-algebra/linear-systems/gaussian-eliminations"
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


//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Title | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/linear-algebra/linear-systems/gaussian-eliminations",
//          name: "name"
//       },
        
//        }
//     }

return {
  props:{
    sectionsContent,
    introContent,
    faqQuestions,
    schemas,
    seoData: {
      title: "Gaussian Elimination: Row Reduction | Learn Math Class",
      description: "Gaussian elimination: forward elimination, back substitution, Gauss-Jordan, row operations, pivots, worked examples for unique, infinite, and no-solution cases, partial pivoting, and cost.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/linear-systems/gaussian-eliminations",
      name: "Gaussian Elimination"
    },
  }
}
   }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {
export default function GaussianEliminationPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
        ]
    },
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
        ]
    },
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
   {/* <Head>
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
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": seoData.name,
        "description": seoData.description,
        "keywords": seoData.keywords,
        "url": `https://www.learnmathclass.com${seoData.url}`,
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "mainEntity": {
          "@type": "Article",
          "name": seoData.name,
          "dateModified": new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          }
        }
      })
    }}
  />
</Head> */}

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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Gaussian Elimination</h1>
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
