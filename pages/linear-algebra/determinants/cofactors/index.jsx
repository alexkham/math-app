import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){

 const keyWords = [
  "cofactors",
  "minors determinant",
  "Laplace expansion",
  "cofactor expansion",
  "adjugate matrix",
  "cofactor matrix",
  "determinant expansion",
  "signed minor",
  "checkerboard sign pattern",
  "classical adjoint",
  "expand along row",
  "expand along column",
  "adjugate inverse formula",
  "matrix minor"
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
    title: `Minors`,
    content: `Given an $n \\times n$ matrix $A$, the $(i,j)$ minor $M_{ij}$ is the determinant of the $(n-1) \\times (n-1)$ submatrix that remains after removing row $i$ and column $j$. The minor is itself a determinant — a number, not a matrix.

For a $3 \\times 3$ matrix

$$A = \\begin{pmatrix} 2 & 5 & 1 \\\\ 0 & 3 & -2 \\\\ 4 & 1 & 6 \\end{pmatrix}$$

there are nine minors, one for each entry. Deleting row $1$ and column $1$ leaves $\\begin{pmatrix} 3 & -2 \\\\ 1 & 6 \\end{pmatrix}$, so $M_{11} = 3 \\cdot 6 - (-2) \\cdot 1 = 20$. Deleting row $1$ and column $2$ leaves $\\begin{pmatrix} 0 & -2 \\\\ 4 & 6 \\end{pmatrix}$, so $M_{12} = 0 \\cdot 6 - (-2) \\cdot 4 = 8$. Deleting row $1$ and column $3$ leaves $\\begin{pmatrix} 0 & 3 \\\\ 4 & 1 \\end{pmatrix}$, so $M_{13} = 0 \\cdot 1 - 3 \\cdot 4 = -12$.

Continuing this way produces all nine values:

$$M_{21} = 5 \\cdot 6 - 1 \\cdot 1 = 29, \\quad M_{22} = 2 \\cdot 6 - 1 \\cdot 4 = 8, \\quad M_{23} = 2 \\cdot 1 - 5 \\cdot 4 = -18$$

$$M_{31} = 5 \\cdot (-2) - 1 \\cdot 3 = -13, \\quad M_{32} = 2 \\cdot (-2) - 1 \\cdot 0 = -4, \\quad M_{33} = 2 \\cdot 3 - 5 \\cdot 0 = 6$$

For a $4 \\times 4$ matrix, each minor is a $3 \\times 3$ determinant. For a $5 \\times 5$ matrix, each minor is $4 \\times 4$. The recursive chain continues until reaching $1 \\times 1$ sub-determinants, where the minor is simply the lone entry.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Cofactors and the Sign Pattern`,
    content: `The cofactor $C_{ij}$ attaches a prescribed sign to the minor:

$$C_{ij} = (-1)^{i+j} M_{ij}$$

The exponent $i + j$ determines whether the sign is positive or negative. When $i + j$ is even, the cofactor equals the minor; when $i + j$ is odd, the cofactor is the negative of the minor. This produces a checkerboard of signs across the matrix:

$$\\begin{pmatrix} + & - & + & - \\\\ - & + & - & + \\\\ + & - & + & - \\\\ - & + & - & + \\end{pmatrix}$$

The pattern always starts with $+$ at position $(1,1)$ and alternates from there. The sign depends entirely on the position — the actual entries of the matrix play no role in determining it.

Using the $3 \\times 3$ matrix from the previous section, the cofactors are:

$$C_{11} = (+1)(20) = 20, \\quad C_{12} = (-1)(8) = -8, \\quad C_{13} = (+1)(-12) = -12$$

$$C_{21} = (-1)(29) = -29, \\quad C_{22} = (+1)(8) = 8, \\quad C_{23} = (-1)(-18) = 18$$

$$C_{31} = (+1)(-13) = -13, \\quad C_{32} = (-1)(-4) = 4, \\quad C_{33} = (+1)(6) = 6$$

Comparing cofactors to minors, entries at even-sum positions are unchanged while entries at odd-sum positions flip sign.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Laplace Expansion Along a Row`,
    content: `The determinant of $A$ can be computed by selecting any row $i$ and summing the products of each entry in that row with its cofactor:

$$\\det(A) = \\sum_{j=1}^{n} a_{ij} \\, C_{ij} = \\sum_{j=1}^{n} (-1)^{i+j} \\, a_{ij} \\, M_{ij}$$

The remarkable fact is that every row produces the same number. Expanding along row $1$, row $2$, or row $n$ all yield the same determinant. This is not obvious from the formula itself — the proof relies on the algebraic [properties](!/linear-algebra/determinants/properties) of the determinant or on the permutation-based definition.

## Worked Example: 4×4 Matrix

$$A = \\begin{pmatrix} 1 & 3 & 0 & 2 \\\\ -1 & 0 & 2 & 1 \\\\ 0 & 4 & -1 & 3 \\\\ 2 & 1 & 0 & -2 \\end{pmatrix}$$

Expanding along row $1$:

$$\\det(A) = 1 \\cdot C_{11} + 3 \\cdot C_{12} + 0 \\cdot C_{13} + 2 \\cdot C_{14}$$

The zero entry at position $(1,3)$ eliminates one $3 \\times 3$ determinant entirely. The three remaining cofactors require expanding the sub-determinants:

$$M_{11} = \\det\\begin{pmatrix} 0 & 2 & 1 \\\\ 4 & -1 & 3 \\\\ 1 & 0 & -2 \\end{pmatrix} = 0(2 - 0) - 2(-8 - 3) + 1(0 + 1) = 0 + 22 + 1 = 23$$

$$M_{12} = \\det\\begin{pmatrix} -1 & 2 & 1 \\\\ 0 & -1 & 3 \\\\ 2 & 0 & -2 \\end{pmatrix} = -1(2 - 0) - 2(0 - 6) + 1(0 + 2) = -2 + 12 + 2 = 12$$

$$M_{14} = \\det\\begin{pmatrix} -1 & 0 & 2 \\\\ 0 & 4 & -1 \\\\ 2 & 1 & 0 \\end{pmatrix} = -1(0 + 1) - 0(0 + 2) + 2(0 - 8) = -1 + 0 - 16 = -17$$

Applying the signs: $C_{11} = +23$, $C_{12} = -12$, $C_{14} = +(-17) = -17$. The determinant is

$$\\det(A) = 1(23) + 3(-12) + 0 + 2(-17) = 23 - 36 - 34 = -47$$

## Verification via a Different Row

Expanding the same matrix along row $3$ (which has a zero in the first position) would produce the same value $-47$, confirming that the choice of row is purely a matter of computational convenience.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Laplace Expansion Along a Column`,
    content: `The expansion formula works identically along columns. Fixing column $j$:

$$\\det(A) = \\sum_{i=1}^{n} a_{ij} \\, C_{ij} = \\sum_{i=1}^{n} (-1)^{i+j} \\, a_{ij} \\, M_{ij}$$

That column expansion gives the same result as row expansion follows from [transpose invariance](!/linear-algebra/determinants/properties): since $\\det(A^T) = \\det(A)$, expanding $A$ along column $j$ is the same as expanding $A^T$ along row $j$.

The practical consequence is that before starting any cofactor expansion, the first step should be to scan the matrix for the row or column containing the most zeros. Each zero entry eliminates an entire sub-determinant from the sum.

## Worked Example

$$B = \\begin{pmatrix} 3 & 0 & 0 \\\\ 1 & -2 & 5 \\\\ 4 & 0 & 7 \\end{pmatrix}$$

Column $2$ has two zeros. Expanding along column $2$:

$$\\det(B) = 0 \\cdot C_{12} + (-2) \\cdot C_{22} + 0 \\cdot C_{32} = (-2) \\cdot C_{22}$$

The minor $M_{22}$ is the $2 \\times 2$ determinant from deleting row $2$ and column $2$:

$$M_{22} = \\det\\begin{pmatrix} 3 & 0 \\\\ 4 & 7 \\end{pmatrix} = 21$$

Since $C_{22} = (-1)^{2+2}(21) = 21$, we get $\\det(B) = (-2)(21) = -42$.

An expansion along row $1$ or column $1$ would require more terms but produce the same result. The column $2$ expansion reduced the work to a single $2 \\times 2$ determinant.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `The Cofactor Matrix`,
    content: `The cofactor matrix of $A$, sometimes written $\\text{cof}(A)$, is the $n \\times n$ matrix whose $(i,j)$ entry is the cofactor $C_{ij}$. It is not the matrix of minors — the sign factors $(-1)^{i+j}$ are already incorporated.

For the $3 \\times 3$ matrix used earlier,

$$A = \\begin{pmatrix} 2 & 5 & 1 \\\\ 0 & 3 & -2 \\\\ 4 & 1 & 6 \\end{pmatrix}$$

the cofactor matrix is

$$\\text{cof}(A) = \\begin{pmatrix} 20 & -8 & -12 \\\\ -29 & 8 & 18 \\\\ -13 & 4 & 6 \\end{pmatrix}$$

where each entry was computed in the earlier sections. As a check, the Laplace expansion along row $1$ should give $\\det(A) = 2(20) + 5(-8) + 1(-12) = 40 - 40 - 12 = -12$. Along row $2$: $0(-29) + 3(8) + (-2)(18) = 0 + 24 - 36 = -12$. Along row $3$: $4(-13) + 1(4) + 6(6) = -52 + 4 + 36 = -12$. All three rows agree.

The cofactor matrix encodes every possible cofactor expansion simultaneously — each row of $\\text{cof}(A)$ contains the cofactors needed for expansion along the corresponding row of $A$, and each column contains those needed for column expansion.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `The Adjugate`,
    content: `The adjugate (also called the classical adjoint) of $A$ is the transpose of the cofactor matrix:

$$\\operatorname{adj}(A) = \\text{cof}(A)^T$$

For the running example:

$$\\operatorname{adj}(A) = \\begin{pmatrix} 20 & -29 & -13 \\\\ -8 & 8 & 4 \\\\ -12 & 18 & 6 \\end{pmatrix}$$

## The Fundamental Identity

The adjugate satisfies

$$A \\cdot \\operatorname{adj}(A) = \\det(A) \\cdot I$$

To see why, consider the $(i,k)$ entry of the product $A \\cdot \\operatorname{adj}(A)$. This is $\\sum_{j=1}^{n} a_{ij} \\cdot [\\operatorname{adj}(A)]_{jk} = \\sum_{j=1}^{n} a_{ij} \\, C_{kj}$. When $i = k$, this sum is exactly the Laplace expansion of $\\det(A)$ along row $i$, so the diagonal entries equal $\\det(A)$. When $i \\neq k$, the sum pairs the entries of row $i$ with the cofactors of a different row $k$. This is equivalent to computing the determinant of a matrix with two identical rows (row $i$ appears in both its own position and row $k$'s), which is always zero. So the off-diagonal entries vanish.

## Verification

With $\\det(A) = -12$:

$$A \\cdot \\operatorname{adj}(A) = \\begin{pmatrix} 2 & 5 & 1 \\\\ 0 & 3 & -2 \\\\ 4 & 1 & 6 \\end{pmatrix} \\begin{pmatrix} 20 & -29 & -13 \\\\ -8 & 8 & 4 \\\\ -12 & 18 & 6 \\end{pmatrix} = \\begin{pmatrix} -12 & 0 & 0 \\\\ 0 & -12 & 0 \\\\ 0 & 0 & -12 \\end{pmatrix} = -12 \\, I$$

This identity is the foundation of the [adjugate inverse formula](!/linear-algebra/determinants/applications): dividing both sides by $\\det(A)$ gives $A^{-1} = \\frac{1}{\\det(A)} \\operatorname{adj}(A)$, valid whenever $\\det(A) \\neq 0$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Computational Cost`,
    content: `Cofactor expansion is a recursive algorithm. Each $n \\times n$ determinant spawns $n$ sub-problems of size $(n-1) \\times (n-1)$. Without any zero entries to prune terms, the total number of multiplications satisfies the recurrence $T(n) = n \\cdot T(n-1)$, which gives $T(n) = O(n!)$.

To put this in concrete terms: a $10 \\times 10$ determinant via cofactor expansion requires roughly $10! \\approx 3.6$ million multiplications. A $20 \\times 20$ determinant would require over $2 \\times 10^{18}$ — well beyond the reach of any computer running a naive recursive implementation. Row reduction, by contrast, computes the same determinant in roughly $\\frac{2}{3}n^3$ operations: about $670$ for $n = 10$ and about $5300$ for $n = 20$.

This cost difference does not make cofactor expansion useless. For matrices up to $4 \\times 4$, the expansion is fast enough to do by hand and gives the exact symbolic result. For matrices with many zero entries, the effective cost drops dramatically because each zero eliminates an entire recursive branch. In symbolic computation — where entries are polynomials or formal expressions rather than numbers — cofactor expansion preserves structure that row reduction would obscure.

The Laplace expansion is best understood as a theoretical instrument. It defines what the determinant is, establishes its algebraic properties, and produces the adjugate and the cofactor structure. For numerical computation on anything larger than a small matrix, the [row-reduction approach](!/linear-algebra/determinants/properties) is the practical choice.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

const introContent = {
    id: "intro",
  title: `Expanding Along Any Row or Column`,
  content: `The cofactor expansion generalizes the recursive pattern seen in the 3×3 case to matrices of arbitrary size. By systematically pairing each entry with a signed sub-determinant, it reduces an n×n determinant to n determinants of size (n−1)×(n−1), with complete freedom in choosing which row or column drives the expansion.`,
}


const faqQuestions = {
  obj1: {
    question: "What is a minor of a matrix?",
    answer: "The (i,j) minor Mᵢⱼ is the determinant of the (n-1)×(n-1) submatrix remaining after deleting row i and column j. It's a number, not a matrix. A 3×3 matrix has nine minors; a 4×4 has sixteen.",
    sectionId: "1"
  },
  obj2: {
    question: "What is a cofactor?",
    answer: "The cofactor Cᵢⱼ = (-1)^(i+j) Mᵢⱼ is the minor with a sign attached. The sign follows a checkerboard pattern: + at (1,1), alternating from there. When i+j is even, cofactor equals minor; when odd, it's negated.",
    sectionId: "2"
  },
  obj3: {
    question: "What is Laplace expansion along a row?",
    answer: "Laplace expansion computes det(A) by summing each entry in a chosen row times its cofactor: det(A) = Σ aᵢⱼ·Cᵢⱼ. Every row gives the same result. Choose the row with the most zeros to minimize work.",
    sectionId: "3"
  },
  obj4: {
    question: "Can you expand a determinant along a column?",
    answer: "Yes. Column expansion works identically: det(A) = Σ aᵢⱼ·Cᵢⱼ summing over rows i for fixed column j. This equals row expansion because det(Aᵀ) = det(A). Always scan for the row or column with the most zeros first.",
    sectionId: "4"
  },
  obj5: {
    question: "What is the cofactor matrix?",
    answer: "The cofactor matrix cof(A) has the cofactor Cᵢⱼ at position (i,j). It encodes all possible cofactor expansions: row i of cof(A) contains cofactors for expanding along row i of A. Note: signs are already incorporated.",
    sectionId: "5"
  },
  obj6: {
    question: "What is the adjugate matrix?",
    answer: "The adjugate adj(A) = cof(A)ᵀ is the transpose of the cofactor matrix. It satisfies A·adj(A) = det(A)·I. When det(A) ≠ 0, this gives the inverse formula: A⁻¹ = adj(A)/det(A).",
    sectionId: "6"
  },
  obj7: {
    question: "How expensive is cofactor expansion?",
    answer: "Cofactor expansion costs O(n!) operations — impractical for n > 10. Row reduction computes the same determinant in O(n³). Cofactor expansion remains useful for small matrices, symbolic computation, and deriving the adjugate formula.",
    sectionId: "7"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Cofactors and Laplace Expansion",
    "description": "Learn minors, cofactors, and Laplace expansion for determinants. Includes the cofactor matrix, adjugate, inverse formula, worked examples for 3×3 and 4×4 matrices, and computational cost analysis.",
    "url": "https://www.learnmathclass.com/linear-algebra/determinants/cofactors",
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
      "name": "Cofactors and Laplace Expansion"
    },
    "teaches": [
      "Computing minors of a matrix",
      "Cofactors and the checkerboard sign pattern",
      "Laplace expansion along rows and columns",
      "The cofactor matrix",
      "The adjugate and A·adj(A) = det(A)·I",
      "Adjugate formula for matrix inverse",
      "Computational complexity of cofactor expansion"
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
        "name": "Cofactors and Laplace Expansion",
        "item": "https://www.learnmathclass.com/linear-algebra/determinants/cofactors"
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
      title: "Cofactors: Minors, Laplace Expansion & Adjugate | Learn Math Class",
      description: "Learn minors, cofactors, and Laplace expansion for determinants. Includes the cofactor matrix, adjugate, inverse formula, worked examples for 3×3 and 4×4 matrices, and computational cost analysis.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/determinants/cofactors",
      name: "Cofactors and Laplace Expansion"
    },
  }
}
   }

   export default function CofactorsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
    // {
    //     id:'8',
    //     title:sectionsContent.obj8.title,
    //     link:sectionsContent.obj8.link,
    //     content:[
    //       sectionsContent.obj8.content,
    //     ]
    // },
    // {
    //     id:'9',
    //     title:sectionsContent.obj9.title,
    //     link:sectionsContent.obj9.link,
    //     content:[
    //       sectionsContent.obj9.content,
    //     ]
    // },
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Minors, Cofactors, and the Adjugate</h1>
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
