import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../pages.css'
import Head from 'next/head'


export async function getStaticProps(){
const keyWords = [
  "determinant properties",
  "row operations determinant",
  "det AB equals det A det B",
  "determinant row swap",
  "determinant row scaling",
  "determinant transpose",
  "triangular matrix determinant",
  "block triangular determinant",
  "determinant invertibility",
  "multiplicative property determinant",
  "row reduction determinant",
  "det A inverse",
  "determinant row addition",
  "singular matrix determinant"
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


//   const introContent = {
//   id: "intro",
//   title: "",
//   content: ``
// }


const sectionsContent = {
  obj1: {
    title: `Effect of Row Swaps`,
    content: `Swapping two rows of a matrix multiplies its determinant by $-1$. If $B$ is obtained from $A$ by exchanging rows $i$ and $k$, then

$$\\det(B) = -\\det(A)$$

An immediate consequence is that any matrix with two identical rows has determinant zero. Swapping those two rows changes the sign of the determinant, yet the matrix itself is unchanged — the only number equal to its own negative is zero.

The same rule holds for columns: swapping two columns also flips the sign. This follows from [transpose invariance](!/linear-algebra/determinants/properties#transpose), since swapping columns of $A$ is the same as swapping rows of $A^T$, and $\\det(A^T) = \\det(A)$.

Each row swap during [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination) must be tracked. If the reduction to triangular form uses $s$ row swaps, the sign correction is $(-1)^s$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Effect of Row Scaling`,
    content: `Multiplying a single row of $A$ by a nonzero scalar $k$ multiplies the determinant by $k$. If $B$ is obtained from $A$ by replacing row $i$ with $k$ times row $i$, then

$$\\det(B) = k \\cdot \\det(A)$$

This is a single-row rule, not a whole-matrix rule. Scaling the entire matrix $A$ by $k$ means scaling every row, so

$$\\det(kA) = k^n \\det(A)$$

for an $n \\times n$ matrix. A common error is to write $\\det(kA) = k \\det(A)$, forgetting that the scalar passes through each of the $n$ rows independently.

Factoring works in reverse as well: if every entry in some row shares a common factor, that factor can be pulled out in front of the determinant. For instance, if row $2$ of a $3 \\times 3$ matrix is $(6, 12, 18)$, then $6$ can be extracted to give a row of $(1, 2, 3)$ and a factor of $6$ multiplying the determinant. This often simplifies hand computations before beginning a cofactor or elimination approach.

A row of all zeros makes the determinant zero, since scaling that row by $0$ gives $\\det(A) = 0 \\cdot \\det(A') = 0$ regardless of what $A'$ looks like.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Effect of Row Addition`,
    content: `Adding a scalar multiple of one row to a different row leaves the determinant completely unchanged. If $B$ is obtained from $A$ by replacing row $i$ with row $i$ plus $c$ times row $k$ (where $i \\neq k$), then

$$\\det(B) = \\det(A)$$

This is the operation that does all the heavy lifting in Gaussian elimination, and it costs nothing in terms of the determinant. The reason traces back to the [cofactor](!/linear-algebra/determinants/cofactors) structure: the added row's contribution to the Laplace expansion along row $i$ amounts to pairing entries from row $k$ with cofactors from row $i$, which is a "wrong-row" expansion and always sums to zero.

Together, the three row-operation rules form a complete toolkit. Row addition is free, row scaling costs a known multiplicative factor, and row swapping costs a sign flip. Any sequence of these operations can be fully accounted for, which is what makes determinant computation via elimination both possible and efficient.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Computing Determinants via Row Reduction`,
    content: `The three row-operation rules convert Gaussian elimination into a determinant algorithm. The procedure is: reduce $A$ to upper triangular form, record every row swap and every row scaling performed along the way, then compute the determinant of the triangular result as the product of its diagonal entries. Adjust by the accumulated sign flips and scale factors.

## Worked Example

$$A = \\begin{pmatrix} 2 & 1 & -1 & 3 \\\\ 4 & 0 & 2 & 1 \\\\ -2 & 3 & 1 & 5 \\\\ 6 & 2 & 0 & -1 \\end{pmatrix}$$

Subtract $2$ times row $1$ from row $2$, add row $1$ to row $3$, and subtract $3$ times row $1$ from row $4$. All three are row-addition operations, so the determinant is unchanged:

$$\\begin{pmatrix} 2 & 1 & -1 & 3 \\\\ 0 & -2 & 4 & -5 \\\\ 0 & 4 & 0 & 8 \\\\ 0 & -1 & 3 & -10 \\end{pmatrix}$$

Add $2$ times row $2$ to row $3$, and subtract $\\frac{1}{2}$ times row $2$ from row $4$:

$$\\begin{pmatrix} 2 & 1 & -1 & 3 \\\\ 0 & -2 & 4 & -5 \\\\ 0 & 0 & 8 & -2 \\\\ 0 & 0 & 1 & -\\frac{15}{2} \\end{pmatrix}$$

Subtract $\\frac{1}{8}$ times row $3$ from row $4$:

$$\\begin{pmatrix} 2 & 1 & -1 & 3 \\\\ 0 & -2 & 4 & -5 \\\\ 0 & 0 & 8 & -2 \\\\ 0 & 0 & 0 & -\\frac{29}{4} \\end{pmatrix}$$

No row swaps and no row scalings were used — only row additions. The determinant is the product of the diagonal:

$$\\det(A) = 2 \\cdot (-2) \\cdot 8 \\cdot \\left(-\\frac{29}{4}\\right) = 2 \\cdot (-2) \\cdot 8 \\cdot \\left(-\\frac{29}{4}\\right) = 116$$

## Complexity

The reduction to triangular form requires roughly $\\frac{2}{3}n^3$ arithmetic operations. For a $10 \\times 10$ matrix this is about $670$ operations; cofactor expansion on the same matrix would require on the order of $3.6$ million. For anything beyond $4 \\times 4$, row reduction is the only practical hand-computation method, and it is the standard numerical algorithm used by software.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `The Multiplicative Property`,
    content: `For any two $n \\times n$ matrices $A$ and $B$,

$$\\det(AB) = \\det(A) \\cdot \\det(B)$$

This is one of the most powerful structural facts about determinants. The proof splits into two cases. If $A$ is singular, then $AB$ is also singular (it cannot map onto all of $\\mathbb{R}^n$ if $A$ already fails to), so both sides are zero. If $A$ is invertible, it can be written as a product of [elementary matrices](!/linear-algebra/matrix/operations), each corresponding to a single row operation. Since the determinant of each elementary matrix equals the factor by which that row operation multiplies the determinant, the result follows by chaining these factors together.

## Corollaries

The multiplicative property generates several important identities at once. Since $AA^{-1} = I$ and $\\det(I) = 1$:

$$\\det(A) \\cdot \\det(A^{-1}) = 1 \\quad \\Longrightarrow \\quad \\det(A^{-1}) = \\frac{1}{\\det(A)}$$

For any positive integer $k$:

$$\\det(A^k) = (\\det(A))^k$$

And since multiplication of determinants is commutative even when matrix multiplication is not:

$$\\det(AB) = \\det(A)\\det(B) = \\det(B)\\det(A) = \\det(BA)$$

Note that $AB$ and $BA$ generally differ as matrices, yet their determinants always agree.

## A Non-Property

The determinant is not additive. In general, $\\det(A + B) \\neq \\det(A) + \\det(B)$. A quick counterexample: take $A = B = I_2$, so $\\det(A) = \\det(B) = 1$ but $\\det(A + B) = \\det(2I_2) = 4$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Transpose Invariance`,
    id: `transpose`,
    content: `The determinant of a matrix equals the determinant of its [transpose](!/linear-algebra/matrix/operations):

$$\\det(A^T) = \\det(A)$$

This single identity doubles the reach of every row-based property. Anything true about rows is automatically true about columns: swapping two columns flips the sign, scaling a column scales the determinant, and adding a multiple of one column to another leaves the determinant unchanged. Column expansion in the [Laplace formula](!/linear-algebra/determinants/cofactors) works precisely because the transpose identity converts it to a row expansion on $A^T$.

One way to see why the identity holds is through the permutation definition of the determinant. Transposing $A$ replaces the permutation $\\sigma$ with its inverse $\\sigma^{-1}$ in each term of the sum. Since a permutation and its inverse have the same sign (both are even or both are odd), every term in the expansion is unchanged, and the total is the same.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Triangular and Diagonal Matrices`,
    content: `For an upper triangular, lower triangular, or diagonal matrix, the determinant is simply the product of the diagonal entries:

$$\\det(A) = a_{11} \\cdot a_{22} \\cdots a_{nn}$$

This follows directly from cofactor expansion. For a lower triangular matrix, expanding along the first row leaves only the $(1,1)$ entry (all others in the first row are zero), paired with the minor obtained by deleting row $1$ and column $1$ — which is again lower triangular. Repeating this reduction peels off one diagonal entry at a time until only the last entry remains.

As a special case, $\\det(I) = 1$, since the identity matrix is diagonal with every diagonal entry equal to $1$.

This property is what completes the row-reduction algorithm for computing determinants. Gaussian elimination produces an upper triangular matrix, and the determinant of that matrix is the product of its diagonal. Combined with the sign and scaling adjustments from the elimination steps, this gives $\\det(A)$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Block Triangular Matrices`,
    content: `A block triangular matrix is one that can be partitioned into square diagonal blocks with zero blocks either above or below:

$$A = \\begin{pmatrix} A_{11} & A_{12} \\\\ 0 & A_{22} \\end{pmatrix} \\quad \\text{(block upper triangular)}$$

For such matrices, the determinant factors as

$$\\det(A) = \\det(A_{11}) \\cdot \\det(A_{22})$$

and this extends to any number of diagonal blocks:

$$\\det(A) = \\det(A_{11}) \\cdot \\det(A_{22}) \\cdots \\det(A_{kk})$$

The off-diagonal blocks $A_{12}$, etc., can contain anything — only the triangular placement of the zero blocks matters.

## Example

$$A = \\begin{pmatrix} 3 & 1 & 0 & 0 & 0 \\\\ 2 & 5 & 0 & 0 & 0 \\\\ 0 & 0 & 1 & 4 & -2 \\\\ 0 & 0 & 0 & 3 & 1 \\\\ 0 & 0 & 0 & 0 & 7 \\end{pmatrix}$$

This is block upper triangular with a $2 \\times 2$ block $A_{11} = \\begin{pmatrix} 3 & 1 \\\\ 2 & 5 \\end{pmatrix}$ and a $3 \\times 3$ upper triangular block $A_{22} = \\begin{pmatrix} 1 & 4 & -2 \\\\ 0 & 3 & 1 \\\\ 0 & 0 & 7 \\end{pmatrix}$. The determinant is $\\det(A_{11}) \\cdot \\det(A_{22}) = (15 - 2)(1 \\cdot 3 \\cdot 7) = 13 \\cdot 21 = 273$.

This rule does not hold for general block matrices where the off-diagonal blocks are nonzero on both sides of the diagonal. The triangular structure is essential.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `The Invertibility Equivalence`,
    content: `The determinant condenses the most fundamental structural question about a square matrix into a single test:

$$A \\text{ is invertible} \\quad \\Longleftrightarrow \\quad \\det(A) \\neq 0$$

This equivalence sits at the center of a web of conditions that are all mutually equivalent for an $n \\times n$ matrix $A$. The following statements are either all true or all false:

$\\det(A) \\neq 0$. The matrix $A$ is invertible. The [rank](!/linear-algebra/matrix/rank) of $A$ equals $n$. The columns of $A$ are [linearly independent](!/linear-algebra/vector-spaces/linear-independence). The rows of $A$ are linearly independent. The columns of $A$ [span](!/linear-algebra/vector-spaces/span) $\\mathbb{R}^n$. The columns of $A$ form a [basis](!/linear-algebra/vector-spaces/basis) for $\\mathbb{R}^n$. The system $Ax = \\mathbf{b}$ has exactly one solution for every $\\mathbf{b} \\in \\mathbb{R}^n$. The homogeneous system $Ax = \\mathbf{0}$ has only the trivial solution. The [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$ is $\\{\\mathbf{0}\\}$. The matrix $A$ can be written as a product of elementary matrices. The [reduced row echelon form](!/linear-algebra/linear-systems/rref) of $A$ is the identity matrix $I_n$. All [eigenvalues](!/linear-algebra/eigen) of $A$ are nonzero.

Each of these conditions approaches invertibility from a different angle — rank, dimension, solvability, spectral theory — yet they all collapse to the same yes-or-no answer. The determinant is one entry in this list, but it is often the most efficient single computation for settling the question.`,
    before: ``,
    after: ``,
    link: ``,
  },
}


const introContent = {
    id: "intro",
  title: `How Row Operations and Algebra Shape the Determinant`,
  content: `The determinant obeys a small set of algebraic rules that govern how it responds to matrix operations. These rules make the determinant computable without cofactor expansion, connect it to Gaussian elimination, and establish the multiplicative structure that links determinants to matrix products, inverses, and transposes.`,
}


const faqQuestions = {
  obj1: {
    question: "How does swapping rows affect the determinant?",
    answer: "Swapping two rows multiplies the determinant by -1. If a matrix has two identical rows, its determinant is zero (swapping them changes the sign but leaves the matrix unchanged, so det = -det implies det = 0).",
    sectionId: "1"
  },
  obj2: {
    question: "How does scaling a row affect the determinant?",
    answer: "Multiplying one row by scalar k multiplies det by k. For the entire matrix: det(kA) = k^n·det(A) for n×n. A row of zeros makes det = 0. Common factors can be extracted from rows to simplify computation.",
    sectionId: "2"
  },
  obj3: {
    question: "Does row addition change the determinant?",
    answer: "No. Adding a scalar multiple of one row to a different row leaves the determinant unchanged. This is the most-used operation in Gaussian elimination and costs nothing in terms of the determinant.",
    sectionId: "3"
  },
  obj4: {
    question: "How do you compute a determinant using row reduction?",
    answer: "Reduce to upper triangular form, tracking swaps and scalings. The determinant equals the product of diagonal entries times (-1)^(number of swaps) divided by any scaling factors used. This is O(n³) vs O(n!) for cofactor expansion.",
    sectionId: "4"
  },
  obj5: {
    question: "What is the multiplicative property of determinants?",
    answer: "det(AB) = det(A)·det(B) for any n×n matrices. Consequences: det(A⁻¹) = 1/det(A), det(A^k) = det(A)^k, and det(AB) = det(BA) even though AB ≠ BA generally. Note: det is NOT additive.",
    sectionId: "5"
  },
  obj6: {
    question: "Does transposing a matrix change its determinant?",
    answer: "No. det(Aᵀ) = det(A). This means every row property automatically applies to columns: swapping columns flips sign, scaling a column scales det, adding column multiples preserves det. Column expansion works for this reason.",
    sectionId: "6"
  },
  obj7: {
    question: "What is the determinant of a triangular matrix?",
    answer: "For upper triangular, lower triangular, or diagonal matrices: det = product of diagonal entries. det(I) = 1 as a special case. This is why row reduction works: reduce to triangular, multiply the diagonal.",
    sectionId: "7"
  },
  obj8: {
    question: "What is the determinant of a block triangular matrix?",
    answer: "For block triangular matrices: det(A) = det(A₁₁)·det(A₂₂)·...·det(A_kk), the product of determinants of diagonal blocks. Off-diagonal blocks can be anything; only the triangular placement of zero blocks matters.",
    sectionId: "8"
  },
  obj9: {
    question: "How does the determinant test invertibility?",
    answer: "A is invertible iff det(A) ≠ 0. This is equivalent to: rank = n, columns independent, columns span ℝⁿ, Ax = b has unique solution for all b, null space = {0}, all eigenvalues nonzero, RREF is identity.",
    sectionId: "9"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Properties of Determinants",
    "description": "Learn determinant properties: row operations (swap, scale, add), multiplicative property det(AB)=det(A)det(B), transpose invariance, triangular matrices, block determinants, and the invertibility equivalence.",
    "url": "https://www.learnmathclass.com/linear-algebra/determinants/properties",
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
      "name": "Determinant Properties"
    },
    "teaches": [
      "Effect of row swap, scaling, addition on determinant",
      "Computing determinants via row reduction",
      "Multiplicative property det(AB) = det(A)det(B)",
      "Transpose invariance",
      "Triangular and diagonal matrix determinants",
      "Block triangular matrix determinants",
      "Invertibility equivalence"
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
        "name": "Determinants",
        "item": "https://www.learnmathclass.com/linear-algebra/determinants"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Properties of Determinants",
        "item": "https://www.learnmathclass.com/linear-algebra/determinants/properties"
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
      title: "Determinant Properties: Row Operations & Multiplicative Rule | Learn Math Class",
      description: "Learn determinant properties: row operations (swap, scale, add), multiplicative property det(AB)=det(A)det(B), transpose invariance, triangular matrices, block determinants, and the invertibility equivalence.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/determinants/properties",
      name: "Properties of Determinants"
    },
  }
}
   }

   export default function DeterminantPropertiesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Properties of Determinants</h1>
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
