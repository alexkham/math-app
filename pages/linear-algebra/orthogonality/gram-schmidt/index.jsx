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
  "Gram-Schmidt process",
  "Gram-Schmidt orthogonalization",
  "QR decomposition",
  "orthogonal basis construction",
  "orthonormalization",
  "Gram-Schmidt algorithm",
  "QR factorization",
  "modified Gram-Schmidt",
  "orthogonalize vectors",
  "QR least squares",
  "Legendre polynomials Gram-Schmidt",
  "Householder reflections",
  "orthonormal basis from basis",
  "Gram-Schmidt example"
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
    content: `The input is a set of [linearly independent](!/linear-algebra/vector-spaces/linear-independence) vectors $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_k\\}$ in an [inner product](!/linear-algebra/orthogonality/inner-product) space. The output is an [orthogonal](!/linear-algebra/orthogonality/orthogonal-sets) set $\\{\\mathbf{u}_1, \\mathbf{u}_2, \\dots, \\mathbf{u}_k\\}$ satisfying two conditions: the vectors are pairwise perpendicular ($\\mathbf{u}_i \\cdot \\mathbf{u}_j = 0$ for $i \\neq j$), and they [span](!/linear-algebra/vector-spaces/span) the same subspace ($\\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_j\\} = \\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_j\\}$ at every step $j$).

Optionally, each $\\mathbf{u}_i$ is normalized to unit length, producing an orthonormal set $\\{\\mathbf{q}_1, \\dots, \\mathbf{q}_k\\}$.

The process is the constructive proof that every finite-dimensional inner product space has an orthonormal [basis](!/linear-algebra/vector-spaces). Given any basis, Gram-Schmidt produces an orthonormal one for the same space.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The Algorithm: Two Vectors`,
    content: `Start with two independent vectors $\\mathbf{v}_1$ and $\\mathbf{v}_2$.

Set $\\mathbf{u}_1 = \\mathbf{v}_1$.

Subtract the [projection](!/linear-algebra/orthogonality/projections) of $\\mathbf{v}_2$ onto $\\mathbf{u}_1$:

$$\\mathbf{u}_2 = \\mathbf{v}_2 - \\frac{\\mathbf{u}_1 \\cdot \\mathbf{v}_2}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1}\\,\\mathbf{u}_1$$

The subtracted term is the component of $\\mathbf{v}_2$ along $\\mathbf{u}_1$. Removing it leaves only the component perpendicular to $\\mathbf{u}_1$, so $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = 0$.

## Worked Example

$\\mathbf{v}_1 = (1, 1, 0)$, $\\mathbf{v}_2 = (1, 0, 1)$.

$\\mathbf{u}_1 = (1, 1, 0)$. $\\frac{\\mathbf{u}_1 \\cdot \\mathbf{v}_2}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1} = \\frac{1}{2}$. $\\mathbf{u}_2 = (1, 0, 1) - \\frac{1}{2}(1, 1, 0) = (\\frac{1}{2}, -\\frac{1}{2}, 1)$.

Check: $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = \\frac{1}{2} - \\frac{1}{2} + 0 = 0$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `The Algorithm: General Case`,
    content: `For $k$ independent vectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_k$:

$$\\mathbf{u}_1 = \\mathbf{v}_1$$

$$\\mathbf{u}_j = \\mathbf{v}_j - \\sum_{i=1}^{j-1} \\frac{\\mathbf{u}_i \\cdot \\mathbf{v}_j}{\\mathbf{u}_i \\cdot \\mathbf{u}_i}\\,\\mathbf{u}_i \\qquad \\text{for } j = 2, 3, \\dots, k$$

At each step, $\\mathbf{v}_j$ has its projections onto all previously computed orthogonal vectors subtracted. What remains is the component of $\\mathbf{v}_j$ perpendicular to $\\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}\\}$.

Because $\\mathbf{v}_j$ is independent of $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_{j-1}\\}$ — and therefore not in $\\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}\\}$ — this perpendicular component is nonzero. So each $\\mathbf{u}_j \\neq \\mathbf{0}$, and the process never breaks down.

At every stage, $\\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_j\\} = \\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_j\\}$. The span is preserved because each $\\mathbf{u}_j$ is a linear combination of $\\mathbf{v}_j$ and the earlier $\\mathbf{u}_i$'s (which are themselves combinations of $\\mathbf{v}_1, \\dots, \\mathbf{v}_{j-1}$).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Normalization`,
    content: `After computing the orthogonal set $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_k\\}$, normalization produces an orthonormal set:

$$\\mathbf{q}_i = \\frac{\\mathbf{u}_i}{\\|\\mathbf{u}_i\\|}$$

Each vector is divided by its length, making $\\|\\mathbf{q}_i\\| = 1$ while preserving direction. The resulting set satisfies $\\mathbf{q}_i \\cdot \\mathbf{q}_j = \\delta_{ij}$.

Normalization can be done at each step (normalize $\\mathbf{u}_j$ immediately before moving to $\\mathbf{v}_{j+1}$) or all at the end. The result is the same in exact arithmetic. In practice, normalizing at each step is slightly preferable for numerical stability, as it keeps the vectors well-scaled throughout the computation.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Worked Example: Three Vectors in R³`,
    content: `Orthogonalize $\\mathbf{v}_1 = (1, 1, 1)$, $\\mathbf{v}_2 = (1, 0, 1)$, $\\mathbf{v}_3 = (0, 1, 1)$.

$\\mathbf{u}_1 = (1, 1, 1)$.

For $\\mathbf{u}_2$: $\\frac{\\mathbf{u}_1 \\cdot \\mathbf{v}_2}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1} = \\frac{1 + 0 + 1}{3} = \\frac{2}{3}$. $\\mathbf{u}_2 = (1, 0, 1) - \\frac{2}{3}(1, 1, 1) = (\\frac{1}{3}, -\\frac{2}{3}, \\frac{1}{3})$.

Check: $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = \\frac{1}{3} - \\frac{2}{3} + \\frac{1}{3} = 0$.

For $\\mathbf{u}_3$: $\\frac{\\mathbf{u}_1 \\cdot \\mathbf{v}_3}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1} = \\frac{0 + 1 + 1}{3} = \\frac{2}{3}$ and $\\frac{\\mathbf{u}_2 \\cdot \\mathbf{v}_3}{\\mathbf{u}_2 \\cdot \\mathbf{u}_2} = \\frac{0 - \\frac{2}{3} + \\frac{1}{3}}{\\frac{1}{9} + \\frac{4}{9} + \\frac{1}{9}} = \\frac{-\\frac{1}{3}}{\\frac{6}{9}} = \\frac{-1}{2}$.

$\\mathbf{u}_3 = (0, 1, 1) - \\frac{2}{3}(1, 1, 1) - (-\\frac{1}{2})(\\frac{1}{3}, -\\frac{2}{3}, \\frac{1}{3}) = (0, 1, 1) - (\\frac{2}{3}, \\frac{2}{3}, \\frac{2}{3}) + (\\frac{1}{6}, -\\frac{1}{3}, \\frac{1}{6}) = (-\\frac{1}{2}, 0, \\frac{1}{2})$.

Check: $\\mathbf{u}_1 \\cdot \\mathbf{u}_3 = -\\frac{1}{2} + 0 + \\frac{1}{2} = 0$ and $\\mathbf{u}_2 \\cdot \\mathbf{u}_3 = -\\frac{1}{6} + 0 + \\frac{1}{6} = 0$.

Normalizing: $\\|\\mathbf{u}_1\\| = \\sqrt{3}$, $\\|\\mathbf{u}_2\\| = \\sqrt{6}/3$, $\\|\\mathbf{u}_3\\| = 1/\\sqrt{2}$. The orthonormal basis is $\\{\\mathbf{u}_1/\\sqrt{3}, \\; 3\\mathbf{u}_2/\\sqrt{6}, \\; \\sqrt{2}\\,\\mathbf{u}_3\\}$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Why It Works`,
    content: `At each step, $\\mathbf{u}_j$ is constructed as $\\mathbf{v}_j$ minus everything in $\\mathbf{v}_j$ that lies in the subspace $W_{j-1} = \\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}\\}$. Since $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}\\}$ is orthogonal, the projection formula decomposes cleanly into independent terms — one projection per basis vector.

What remains after subtraction is the component of $\\mathbf{v}_j$ [orthogonal](!/linear-algebra/orthogonality) to $W_{j-1}$. This component is nonzero because $\\mathbf{v}_j \\notin W_{j-1}$ — guaranteed by the independence of the original set.

The span is preserved at each step. Each $\\mathbf{u}_j$ is a linear combination of $\\mathbf{v}_j$ and $\\mathbf{u}_1, \\dots, \\mathbf{u}_{j-1}$, and each earlier $\\mathbf{u}_i$ is a combination of $\\mathbf{v}_1, \\dots, \\mathbf{v}_i$. So $\\mathbf{u}_j \\in \\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_j\\}$, and the reverse inclusion follows because $\\mathbf{v}_j$ can be recovered from $\\mathbf{u}_j$ and the earlier $\\mathbf{u}_i$'s.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `The QR Decomposition`,
    content: `Applying Gram-Schmidt to the columns $\\mathbf{a}_1, \\dots, \\mathbf{a}_n$ of an $m \\times n$ [matrix](!/linear-algebra/matrix) $A$ (with independent columns) produces the [QR decomposition](!/linear-algebra/decompositions/qr):

$$A = QR$$

$Q$ is $m \\times n$ with [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) columns (the normalized $\\mathbf{q}_i$'s). $R$ is $n \\times n$ upper [triangular](!/linear-algebra/matrix/types) with positive diagonal entries.

The entries of $R$ are the dot products computed during Gram-Schmidt: $R_{ij} = \\mathbf{q}_i \\cdot \\mathbf{a}_j$ for $i \\leq j$, and $R_{ij} = 0$ for $i > j$ (because $\\mathbf{a}_j$'s projection onto $\\mathbf{q}_i$ is zero when $i > j$ — that direction hasn't been subtracted yet).

The factorization captures two complementary pieces of information. $Q$ stores the orthonormal directions. $R$ stores the coefficients that express the original columns in terms of those directions: $\\mathbf{a}_j = R_{1j}\\mathbf{q}_1 + R_{2j}\\mathbf{q}_2 + \\cdots + R_{jj}\\mathbf{q}_j$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `QR and Least Squares`,
    content: `The QR decomposition provides a numerically superior method for solving [least-squares](!/linear-algebra/orthogonality/least-squares) problems.

The normal equations $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ can be rewritten using $A = QR$. Since $A^TA = R^TQ^TQR = R^TR$ and $A^T\\mathbf{b} = R^TQ^T\\mathbf{b}$, the normal equations become $R^TR\\hat{\\mathbf{x}} = R^TQ^T\\mathbf{b}$. Canceling $R^T$ (which is invertible since $R$ has positive diagonal):

$$R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$$

This is an upper triangular system, solved by back substitution. The computation $Q^T\\mathbf{b}$ is just $n$ dot products (one per column of $Q$).

The QR approach avoids forming $A^TA$ explicitly. This matters because the condition number of $A^TA$ is the square of the condition number of $A$ — squaring amplifies rounding errors. Working with $Q$ and $R$ directly preserves the original conditioning and is the standard method for least squares in numerical software.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Numerical Stability`,
    content: `Classical Gram-Schmidt (as presented above) can lose orthogonality in floating-point arithmetic. When the input vectors are nearly dependent, the computed $\\mathbf{u}_j$'s may fail to be perpendicular to machine precision, and the errors accumulate with each step.

Modified Gram-Schmidt addresses this by reorganizing the computation. Instead of computing all projections using the original $\\mathbf{v}_j$, modified Gram-Schmidt updates $\\mathbf{v}_j$ in place after each projection is subtracted. At step $j$, first subtract the projection onto $\\mathbf{u}_1$ from $\\mathbf{v}_j$, then subtract the projection onto $\\mathbf{u}_2$ from the updated $\\mathbf{v}_j$, and so on. The mathematical result is identical in exact arithmetic, but the modified version is significantly more stable numerically.

Householder reflections provide an even more robust alternative for computing the QR factorization. Householder-based QR achieves backward stability — the gold standard in numerical linear algebra — and is the default algorithm in most software libraries.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Gram-Schmidt on Abstract Inner Product Spaces`,
    content: `The algorithm works in any [inner product](!/linear-algebra/orthogonality/inner-product) space — the dot product is replaced by the general inner product $\\langle \\cdot, \\cdot \\rangle$, and the formulas are otherwise identical:

$$\\mathbf{u}_j = \\mathbf{v}_j - \\sum_{i=1}^{j-1} \\frac{\\langle \\mathbf{u}_i, \\mathbf{v}_j \\rangle}{\\langle \\mathbf{u}_i, \\mathbf{u}_i \\rangle}\\,\\mathbf{u}_i$$

Orthogonalizing $\\{1, x, x^2\\}$ in the polynomial space $\\mathcal{P}_2$ with the inner product $\\langle p, q \\rangle = \\int_{-1}^{1} p(x)q(x)\\,dx$ produces the Legendre polynomials (up to normalization): $P_0(x) = 1$, $P_1(x) = x$, $P_2(x) = \\frac{1}{2}(3x^2 - 1)$. The polynomial $x$ is already orthogonal to $1$ under this inner product (the integral of an odd function over a symmetric interval is zero), so the first subtraction has no effect.

On the function space $C[0, 2\\pi]$ with $\\langle f, g \\rangle = \\int_0^{2\\pi} f(x)g(x)\\,dx$, orthogonalizing appropriate function sets produces Fourier bases. The algorithm is identical in structure to the $\\mathbb{R}^n$ version — only the inner product changes.`,
    before: ``,
    after: ``,
    link: ``,
  },
}


 const introContent = {
  title: `Converting Any Basis into an Orthogonal One`,
  content: `The Gram-Schmidt process takes a set of linearly independent vectors and produces an orthogonal (or orthonormal) set spanning the same subspace. It works by sequentially stripping each vector of its components along previously computed directions, leaving only the perpendicular remainder. The result is a constructive proof that orthonormal bases always exist — and the matrix version of this process is the QR decomposition.`,
}

const faqQuestions = {
  obj1: {
    question: "What does the Gram-Schmidt process do?",
    answer: "The Gram-Schmidt process converts a set of linearly independent vectors into an orthogonal (or orthonormal) set spanning the same subspace. It works by sequentially subtracting from each vector its projections onto all previously computed orthogonal directions, leaving only the perpendicular remainder.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the Gram-Schmidt formula?",
    answer: "For each vector vⱼ, compute uⱼ = vⱼ − Σ(uᵢ·vⱼ / uᵢ·uᵢ)uᵢ, summing over all previously computed orthogonal vectors u₁ through uⱼ₋₁. Each term subtracts the projection of vⱼ onto one orthogonal direction. Optionally normalize each uⱼ to unit length.",
    sectionId: "3"
  },
  obj3: {
    question: "What is the QR decomposition?",
    answer: "The QR decomposition A = QR results from applying Gram-Schmidt to the columns of A. The matrix Q has orthonormal columns (the normalized output of Gram-Schmidt), and R is upper triangular with entries recording the dot products computed during the process.",
    sectionId: "7"
  },
  obj4: {
    question: "Why is QR better than normal equations for least squares?",
    answer: "Forming AᵀA squares the condition number of A, amplifying rounding errors. The QR decomposition reduces least squares to the triangular system Rx̂ = Qᵀb, which preserves the original conditioning. This makes QR the standard algorithm in numerical software.",
    sectionId: "8"
  },
  obj5: {
    question: "What is the difference between classical and modified Gram-Schmidt?",
    answer: "Classical Gram-Schmidt computes all projections using the original vector vⱼ. Modified Gram-Schmidt updates vⱼ in place after each projection subtraction. The results are identical in exact arithmetic, but modified Gram-Schmidt is significantly more stable in floating-point computation.",
    sectionId: "9"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Gram-Schmidt Process",
    "description": "The Gram-Schmidt orthogonalization process: algorithm, worked examples, normalization, QR decomposition, least-squares connection, numerical stability, and abstract inner product spaces.",
    "url": "https://www.learnmathclass.com/linear-algebra/orthogonality/gram-schmidt",
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
      "name": "Gram-Schmidt Process"
    },
    "teaches": [
      "Gram-Schmidt orthogonalization algorithm",
      "Step-by-step projection subtraction",
      "Normalization to orthonormal sets",
      "QR decomposition from Gram-Schmidt",
      "QR-based least-squares solution",
      "Classical vs modified Gram-Schmidt stability",
      "Gram-Schmidt on abstract inner product spaces"
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
        "name": "Orthogonality",
        "item": "https://www.learnmathclass.com/linear-algebra/orthogonality"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Gram-Schmidt Process",
        "item": "https://www.learnmathclass.com/linear-algebra/orthogonality/gram-schmidt"
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

  //  return {
  //     props:{
  //        sectionsContent,
  //        introContent,
  //         seoData: {
  //       title: "Gram Schmidt | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/linear-algebra/orthogonality/gram-schmidt",
  //        name: "name"
  //     },
        
  //      }
  //   }

  return {
  props:{
    sectionsContent,
    introContent,
    faqQuestions,
    schemas,
    seoData: {
      title: "Gram-Schmidt Process & QR Decomposition | Learn Math Class",
      description: "The Gram-Schmidt orthogonalization process: algorithm, worked examples, normalization, QR decomposition, least-squares connection, numerical stability, and abstract inner product spaces.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/orthogonality/gram-schmidt",
      name: "Gram-Schmidt Process"
    },
  }
}
   }

// export default function GramSchmidtPage({seoData,sectionsContent , introContent}) {
export default function GramSchmidtsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Gram Schmidt Process</h1>
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
