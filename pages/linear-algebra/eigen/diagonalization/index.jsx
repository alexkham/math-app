import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){
const keyWords = [
  "matrix diagonalization",
  "diagonalizable matrix",
  "PDP inverse",
  "eigenvector basis",
  "diagonalization condition",
  "matrix powers formula",
  "spectral theorem symmetric",
  "matrix exponential",
  "Jordan normal form",
  "geometric algebraic multiplicity",
  "diagonalization procedure",
  "Fibonacci matrix",
  "differential equations eigenvalues",
  "defective matrix"
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
    title: `What Diagonalization Means`,
    content: `An $n \\times n$ [matrix](!/linear-algebra/matrix) $A$ is diagonalizable if there exists an [invertible](!/linear-algebra/matrix/inverse) matrix $P$ and a [diagonal](!/linear-algebra/matrix/types) matrix $D$ such that

$$A = PDP^{-1}$$

The columns of $P$ are eigenvectors of $A$. The diagonal entries of $D$ are the corresponding eigenvalues, in the same order. The factorization says that in the [basis](!/linear-algebra/vector-spaces) of eigenvectors, the [transformation](!/linear-algebra/transformations) acts by pure scaling along each axis — the most transparent possible description.

Equivalently, $A$ is diagonalizable if and only if $\\mathbb{R}^n$ has a basis consisting entirely of eigenvectors of $A$. The matrix $P$ converts between the standard basis and this eigenvector basis, and $D$ is the matrix of the transformation in the eigenvector basis.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Constructing the Diagonalization`,
    content: `The procedure has three steps.

Find all eigenvalues by solving the [characteristic equation](!/linear-algebra/eigen/characteristic-equation) $\\det(A - \\lambda I) = 0$.

For each eigenvalue $\\lambda_i$, find a basis for the eigenspace by solving $(A - \\lambda_i I)\\mathbf{v} = \\mathbf{0}$ via [row reduction](!/linear-algebra/linear-systems/gaussian-elimination).

Assemble $P$ and $D$. Place the eigenvectors as columns of $P$ and the corresponding eigenvalues on the diagonal of $D$ in matching order.

## Worked Example

For $A = \\begin{pmatrix} 1 & 2 \\\\ 4 & 3 \\end{pmatrix}$, the characteristic polynomial is $\\lambda^2 - 4\\lambda - 5 = (\\lambda - 5)(\\lambda + 1)$. Eigenvalues: $\\lambda_1 = 5$, $\\lambda_2 = -1$.

For $\\lambda_1 = 5$: eigenvector $\\mathbf{v}_1 = (1, 2)^T$. For $\\lambda_2 = -1$: eigenvector $\\mathbf{v}_2 = (-1, 1)^T$.

$$P = \\begin{pmatrix} 1 & -1 \\\\ 2 & 1 \\end{pmatrix}, \\quad D = \\begin{pmatrix} 5 & 0 \\\\ 0 & -1 \\end{pmatrix}$$

Verification: $AP = \\begin{pmatrix} 5 & 1 \\\\ 10 & -1 \\end{pmatrix} = PD = \\begin{pmatrix} 1 & -1 \\\\ 2 & 1 \\end{pmatrix}\\begin{pmatrix} 5 & 0 \\\\ 0 & -1 \\end{pmatrix} = \\begin{pmatrix} 5 & 1 \\\\ 10 & -1 \\end{pmatrix}$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `When Is a Matrix Diagonalizable?`,
    content: `The definitive condition is: $A$ is diagonalizable if and only if for every eigenvalue, the geometric multiplicity equals the algebraic multiplicity ($m_g(\\lambda) = m_a(\\lambda)$).

A sufficient condition that is easier to check: if $A$ has $n$ distinct eigenvalues, it is automatically diagonalizable. Eigenvectors for distinct eigenvalues are [linearly independent](!/linear-algebra/vector-spaces/linear-independence), so $n$ distinct eigenvalues produce $n$ independent eigenvectors — exactly enough for a basis.

When eigenvalues repeat, diagonalizability depends on the eigenspaces. A repeated eigenvalue $\\lambda$ with algebraic multiplicity $k$ must have a $k$-dimensional eigenspace. If the eigenspace falls short — dimension less than $k$ — there are not enough eigenvectors, and the matrix cannot be diagonalized.

## Example of Failure

$A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$ has eigenvalue $\\lambda = 2$ with $m_a = 2$, but $A - 2I = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$ has null space of dimension $1$. Only one independent eigenvector exists, so $P$ cannot be built. The matrix is defective.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Matrix Powers`,
    content: `The primary computational payoff of diagonalization is the simplification of matrix powers:

$$A^k = PD^kP^{-1} = P\\,\\text{diag}(\\lambda_1^k, \\lambda_2^k, \\dots, \\lambda_n^k)\\,P^{-1}$$

Raising a diagonal matrix to a power means raising each diagonal entry independently. The entire cost of $A^k$, for any $k$, is one [matrix inversion](!/linear-algebra/matrix/inverse) and two matrix multiplications — the same cost regardless of whether $k$ is $2$ or $2$ million.

## Worked Example

Using the diagonalization from section $2$: $P^{-1} = \\frac{1}{3}\\begin{pmatrix} 1 & 1 \\\\ -2 & 1 \\end{pmatrix}$.

$$A^4 = P\\begin{pmatrix} 5^4 & 0 \\\\ 0 & (-1)^4 \\end{pmatrix}P^{-1} = \\begin{pmatrix} 1 & -1 \\\\ 2 & 1 \\end{pmatrix}\\begin{pmatrix} 625 & 0 \\\\ 0 & 1 \\end{pmatrix}\\frac{1}{3}\\begin{pmatrix} 1 & 1 \\\\ -2 & 1 \\end{pmatrix}$$

$$= \\frac{1}{3}\\begin{pmatrix} 625 & -1 \\\\ 1250 & 1 \\end{pmatrix}\\begin{pmatrix} 1 & 1 \\\\ -2 & 1 \\end{pmatrix} = \\frac{1}{3}\\begin{pmatrix} 627 & 624 \\\\ 1248 & 1251 \\end{pmatrix} = \\begin{pmatrix} 209 & 208 \\\\ 416 & 417 \\end{pmatrix}$$

Without diagonalization, computing $A^4$ requires three sequential matrix multiplications.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Systems of Differential Equations`,
    content: `The linear system $\\mathbf{x}' = A\\mathbf{x}$ has a clean solution when $A$ is diagonalizable. In the eigenvector [basis](!/linear-algebra/vector-spaces), the system decouples into $n$ independent scalar equations $y_i' = \\lambda_i y_i$, each with solution $y_i(t) = c_i e^{\\lambda_i t}$.

Converting back to the original basis, the general solution is

$$\\mathbf{x}(t) = c_1 e^{\\lambda_1 t}\\mathbf{v}_1 + c_2 e^{\\lambda_2 t}\\mathbf{v}_2 + \\cdots + c_n e^{\\lambda_n t}\\mathbf{v}_n$$

Each eigenvalue determines the behavior along its eigenvector direction. Positive eigenvalues produce exponential growth, negative eigenvalues produce decay, and zero eigenvalues produce constant components. [Complex](!/linear-algebra/eigen/complex) eigenvalues produce oscillatory terms involving sines and cosines modulated by exponential envelopes.

The constants $c_1, \\dots, c_n$ are determined by the initial condition $\\mathbf{x}(0)$: express $\\mathbf{x}(0)$ as a linear combination of the eigenvectors and read off the coefficients.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Recurrence Relations`,
    content: `The discrete system $\\mathbf{x}_{n+1} = A\\mathbf{x}_n$ has solution $\\mathbf{x}_n = A^n\\mathbf{x}_0$. When $A$ is diagonalizable, this becomes

$$\\mathbf{x}_n = PD^nP^{-1}\\mathbf{x}_0 = c_1 \\lambda_1^n \\mathbf{v}_1 + c_2 \\lambda_2^n \\mathbf{v}_2 + \\cdots + c_n \\lambda_n^n \\mathbf{v}_n$$

The dominant eigenvalue — the eigenvalue with the largest absolute value — determines the long-term growth rate. As $n \\to \\infty$, the term $c_i \\lambda_i^n \\mathbf{v}_i$ with the largest $|\\lambda_i|$ dominates all others.

The Fibonacci sequence provides a classic application. The recurrence $F_{n+1} = F_n + F_{n-1}$ translates to $\\begin{pmatrix} F_{n+1} \\\\ F_n \\end{pmatrix} = \\begin{pmatrix} 1 & 1 \\\\ 1 & 0 \\end{pmatrix}^n \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$. The matrix has eigenvalues $\\phi = \\frac{1 + \\sqrt{5}}{2}$ and $\\hat{\\phi} = \\frac{1 - \\sqrt{5}}{2}$. Diagonalization gives the Binet formula: $F_n = \\frac{\\phi^n - \\hat{\\phi}^n}{\\sqrt{5}}$, a closed-form expression for the $n$-th Fibonacci number.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `The Spectral Theorem for Symmetric Matrices`,
    content: `Every real [symmetric](!/linear-algebra/matrix/types) matrix is diagonalizable. This is guaranteed — no conditions need to be checked.

The result is stronger than ordinary diagonalizability. The diagonalizing matrix $P$ can be chosen [orthogonal](!/linear-algebra/matrix/types) ($P^{-1} = P^T$), giving

$$A = QDQ^T$$

where $Q$ is orthogonal with columns forming an [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) basis of eigenvectors, and $D$ is diagonal with real eigenvalues.

This can be rewritten as the [spectral decomposition](!/linear-algebra/decompositions/spectral):

$$A = \\lambda_1 \\mathbf{q}_1\\mathbf{q}_1^T + \\lambda_2 \\mathbf{q}_2\\mathbf{q}_2^T + \\cdots + \\lambda_n \\mathbf{q}_n\\mathbf{q}_n^T$$

Each term $\\lambda_i \\mathbf{q}_i\\mathbf{q}_i^T$ is the eigenvalue times the [projection](!/linear-algebra/orthogonality/projections) matrix onto the eigenspace. The matrix $A$ is decomposed into a sum of rank-one projections, weighted by eigenvalues.

The spectral theorem is the most powerful diagonalization result in real linear algebra. It guarantees real eigenvalues, orthogonal eigenvectors, and a decomposition that simultaneously diagonalizes and orthogonalizes.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Matrix Exponential`,
    content: `For a diagonalizable matrix, the matrix exponential $e^{At}$ — central to solving $\\mathbf{x}' = A\\mathbf{x}$ — has an explicit form:

$$e^{At} = Pe^{Dt}P^{-1} = P\\,\\text{diag}(e^{\\lambda_1 t}, e^{\\lambda_2 t}, \\dots, e^{\\lambda_n t})\\,P^{-1}$$

The exponential of a diagonal matrix is the diagonal matrix of exponentials. The full matrix exponential is computed from $n$ scalar exponentials, one per eigenvalue.

The solution to $\\mathbf{x}' = A\\mathbf{x}$ with initial condition $\\mathbf{x}(0) = \\mathbf{x}_0$ is then $\\mathbf{x}(t) = e^{At}\\mathbf{x}_0$. This is the matrix-level analogue of the scalar solution $x(t) = e^{at}x_0$ to $x' = ax$.

When $A$ has [complex](!/linear-algebra/eigen/complex) eigenvalues $a \\pm bi$, the exponentials $e^{(a \\pm bi)t} = e^{at}(\\cos bt \\pm i \\sin bt)$ combine in conjugate pairs to produce real oscillatory terms $e^{at}\\cos bt$ and $e^{at}\\sin bt$ in the final solution.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `When Diagonalization Fails`,
    content: `When a matrix is not diagonalizable — when some eigenvalue has geometric multiplicity strictly less than its algebraic multiplicity — the best achievable form under [similarity](!/linear-algebra/transformations/basis-change) is the Jordan normal form.

The Jordan form is block diagonal, with each block a Jordan block:

$$J_k(\\lambda) = \\begin{pmatrix} \\lambda & 1 & 0 & \\cdots & 0 \\\\ 0 & \\lambda & 1 & \\cdots & 0 \\\\ \\vdots & & \\ddots & \\ddots & \\vdots \\\\ 0 & & & \\lambda & 1 \\\\ 0 & & & & \\lambda \\end{pmatrix}$$

A $k \\times k$ Jordan block has the eigenvalue $\\lambda$ on the diagonal and ones on the superdiagonal. A diagonalizable eigenvalue contributes $1 \\times 1$ Jordan blocks. A defective eigenvalue contributes blocks larger than $1 \\times 1$.

The Jordan form is unique up to the ordering of blocks and is the canonical representative of the similarity class. Powers and exponentials of Jordan blocks can still be computed explicitly, but the formulas involve polynomial correction terms ($t^k e^{\\lambda t}$ instead of just $e^{\\lambda t}$) reflecting the defective structure. The full Jordan theory belongs to advanced linear algebra.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Diagonalizability at a Glance`,
    content: `Several quick tests determine or suggest diagonalizability.

A matrix with $n$ distinct eigenvalues is always diagonalizable — distinctness forces independence of eigenvectors.

A real [symmetric](!/linear-algebra/matrix/types) matrix is always diagonalizable, and orthogonally so. This is the spectral theorem.

A matrix satisfying $m_g(\\lambda) = m_a(\\lambda)$ for every eigenvalue is diagonalizable. This is the definitive necessary and sufficient condition.

A matrix with any eigenvalue where $m_g < m_a$ is not diagonalizable. The shortfall means there are not enough eigenvectors to form a basis.

Matrices that are already diagonal are trivially diagonalizable ($P = I$). The identity matrix, all scalar matrices $cI$, and all [diagonal](!/linear-algebra/matrix/types) matrices fall here.

The zero matrix is diagonalizable (it is already diagonal with all eigenvalues zero). A [nilpotent](!/linear-algebra/matrix/types) matrix is diagonalizable if and only if it is the zero matrix — any other nilpotent matrix is defective.`,
    before: ``,
    after: ``,
    link: ``,
  },
}


//   const introContent = {
//   id: "intro",
//   title: "",
//   content: ``
// }

const introContent = {
  id: "intro",
  title: `Reducing a Matrix to Its Eigenvalue Skeleton`,
  content: `A diagonalizable matrix can be factored as PDP⁻¹, where D is the diagonal matrix of eigenvalues and P is the matrix of eigenvectors. This factorization strips away the complexity of the original matrix, reducing powers, exponentials, and differential equations to operations on individual eigenvalues. Diagonalization is possible when and only when the eigenvectors form a basis — and for symmetric matrices, this is always the case.`,
}



const faqQuestions = {
  obj1: {
    question: "What does it mean for a matrix to be diagonalizable?",
    answer: "A matrix A is diagonalizable if A = PDP⁻¹ where D is diagonal (eigenvalues on diagonal) and P has eigenvectors as columns. This means there exists a basis of eigenvectors, and in that basis the transformation acts by pure scaling along each axis.",
    sectionId: "1"
  },
  obj2: {
    question: "How do you diagonalize a matrix?",
    answer: "Find all eigenvalues from det(A - λI) = 0. For each eigenvalue, find eigenvectors by solving (A - λI)v = 0. Place eigenvectors as columns of P and corresponding eigenvalues on diagonal of D. Verify AP = PD.",
    sectionId: "2"
  },
  obj3: {
    question: "When is a matrix diagonalizable?",
    answer: "A matrix is diagonalizable iff geometric multiplicity equals algebraic multiplicity for every eigenvalue. A sufficient (not necessary) condition: n distinct eigenvalues guarantees diagonalizability. Symmetric matrices are always diagonalizable.",
    sectionId: "3"
  },
  obj4: {
    question: "How does diagonalization simplify matrix powers?",
    answer: "A^k = PD^kP⁻¹ = P·diag(λ₁^k, λ₂^k, ..., λₙ^k)·P⁻¹. Raising D to any power just raises each diagonal entry. Computing A^1000 costs the same as A² — one inversion and two multiplications.",
    sectionId: "4"
  },
  obj5: {
    question: "How does diagonalization solve differential equations?",
    answer: "For x' = Ax, diagonalization decouples the system into n independent equations yᵢ' = λᵢyᵢ with solutions e^(λᵢt). The general solution is x(t) = c₁e^(λ₁t)v₁ + c₂e^(λ₂t)v₂ + ... + cₙe^(λₙt)vₙ.",
    sectionId: "5"
  },
  obj6: {
    question: "How does diagonalization solve recurrence relations?",
    answer: "For xₙ₊₁ = Axₙ, diagonalization gives xₙ = c₁λ₁ⁿv₁ + c₂λ₂ⁿv₂ + ... The Fibonacci sequence uses this: the matrix [[1,1],[1,0]] diagonalizes to give Binet's formula Fₙ = (φⁿ - φ̂ⁿ)/√5.",
    sectionId: "6"
  },
  obj7: {
    question: "What is the spectral theorem for symmetric matrices?",
    answer: "Every real symmetric matrix is diagonalizable with an orthogonal matrix: A = QDQᵀ where Q is orthogonal (Q⁻¹ = Qᵀ) with orthonormal eigenvector columns. All eigenvalues are real. This is the most powerful diagonalization result.",
    sectionId: "7"
  },
  obj8: {
    question: "What is the matrix exponential for diagonalizable matrices?",
    answer: "e^(At) = Pe^(Dt)P⁻¹ = P·diag(e^(λ₁t), e^(λ₂t), ..., e^(λₙt))·P⁻¹. The exponential of a diagonal matrix is the diagonal matrix of exponentials. This solves x' = Ax via x(t) = e^(At)x₀.",
    sectionId: "8"
  },
  obj9: {
    question: "What happens when a matrix is not diagonalizable?",
    answer: "Non-diagonalizable (defective) matrices have Jordan normal form instead — block diagonal with Jordan blocks containing 1s on the superdiagonal. Powers and exponentials still compute but with polynomial correction terms (t^k·e^(λt) instead of just e^(λt)).",
    sectionId: "9"
  },
  obj10: {
    question: "What are quick tests for diagonalizability?",
    answer: "n distinct eigenvalues → always diagonalizable. Real symmetric → always diagonalizable (orthogonally). For each eigenvalue: geometric = algebraic multiplicity → diagonalizable. Any eigenvalue with geometric < algebraic → not diagonalizable.",
    sectionId: "10"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Matrix Diagonalization",
    "description": "Learn matrix diagonalization: PDP⁻¹ factorization, conditions for diagonalizability, computing matrix powers, solving differential equations and recurrences, spectral theorem, matrix exponential, and Jordan form.",
    "url": "https://www.learnmathclass.com/linear-algebra/eigen/diagonalization",
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
      "name": "Matrix Diagonalization"
    },
    "teaches": [
      "PDP⁻¹ factorization meaning",
      "Diagonalization procedure",
      "Conditions for diagonalizability",
      "Matrix powers via diagonalization",
      "Solving systems of differential equations",
      "Recurrence relations and Fibonacci",
      "Spectral theorem for symmetric matrices",
      "Matrix exponential computation"
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
        "name": "Eigenvalues & Eigenvectors",
        "item": "https://www.learnmathclass.com/linear-algebra/eigen"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Diagonalization",
        "item": "https://www.learnmathclass.com/linear-algebra/eigen/diagonalization"
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
      title: "Matrix Diagonalization: PDP⁻¹ & Applications | Learn Math Class",
      description: "Learn matrix diagonalization: PDP⁻¹ factorization, conditions for diagonalizability, computing matrix powers, solving differential equations and recurrences, spectral theorem, matrix exponential, and Jordan form.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/eigen/diagonalization",
      name: "Matrix Diagonalization"
    },
  }
}
   }


   export default function DiagonalizationPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Diagonalization</h1>
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
