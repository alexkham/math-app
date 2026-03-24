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
  "orthogonal projection",
  "projection onto subspace",
  "projection matrix",
  "projection formula linear algebra",
  "proj vector formula",
  "orthogonal decomposition",
  "projection orthogonal basis",
  "projection matrix properties",
  "idempotent symmetric matrix",
  "closest point subspace",
  "projection least squares",
  "normal equations projection",
  "projection onto vector",
  "A(ATA)^-1 AT formula"
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
    title: `Projection onto a Vector`,
    content: `The orthogonal projection of $\\mathbf{b}$ onto a nonzero vector $\\mathbf{a}$ is the point on the line through $\\mathbf{a}$ nearest to $\\mathbf{b}$:

$$\\text{proj}_{\\mathbf{a}}\\mathbf{b} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\mathbf{a} \\cdot \\mathbf{a}}\\,\\mathbf{a}$$

The scalar $\\hat{c} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\mathbf{a} \\cdot \\mathbf{a}}$ is the component of $\\mathbf{b}$ in the direction of $\\mathbf{a}$. The projection $\\hat{c}\\,\\mathbf{a}$ lies on the line through $\\mathbf{a}$, and the residual $\\mathbf{b} - \\hat{c}\\,\\mathbf{a}$ is [orthogonal](!/linear-algebra/orthogonality) to $\\mathbf{a}$:

$$(\\mathbf{b} - \\hat{c}\\,\\mathbf{a}) \\cdot \\mathbf{a} = \\mathbf{b} \\cdot \\mathbf{a} - \\hat{c}(\\mathbf{a} \\cdot \\mathbf{a}) = \\mathbf{b} \\cdot \\mathbf{a} - \\mathbf{b} \\cdot \\mathbf{a} = 0$$

## Worked Example

Project $\\mathbf{b} = (3, 4, 0)$ onto $\\mathbf{a} = (1, 1, 1)$:

$$\\hat{c} = \\frac{3 + 4 + 0}{1 + 1 + 1} = \\frac{7}{3}, \\quad \\text{proj}_{\\mathbf{a}}\\mathbf{b} = \\frac{7}{3}(1, 1, 1) = \\left(\\frac{7}{3}, \\frac{7}{3}, \\frac{7}{3}\\right)$$

Residual: $\\mathbf{b} - \\text{proj}_{\\mathbf{a}}\\mathbf{b} = (\\frac{2}{3}, \\frac{5}{3}, -\\frac{7}{3})$. Check: $(\\frac{2}{3})(1) + (\\frac{5}{3})(1) + (-\\frac{7}{3})(1) = 0$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The Orthogonal Decomposition`,
    content: `Every vector $\\mathbf{b} \\in \\mathbb{R}^n$ decomposes uniquely with respect to a [subspace](!/linear-algebra/vector-spaces/subspaces) $W$ as

$$\\mathbf{b} = \\hat{\\mathbf{b}} + \\mathbf{z}$$

where $\\hat{\\mathbf{b}} \\in W$ and $\\mathbf{z} \\in W^\\perp$. The component $\\hat{\\mathbf{b}}$ is the orthogonal projection of $\\mathbf{b}$ onto $W$, and $\\mathbf{z} = \\mathbf{b} - \\hat{\\mathbf{b}}$ is the perpendicular residual.

The projection $\\hat{\\mathbf{b}}$ is the closest point in $W$ to $\\mathbf{b}$. For any other vector $\\mathbf{w} \\in W$:

$$\\|\\mathbf{b} - \\mathbf{w}\\|^2 = \\|\\mathbf{z}\\|^2 + \\|\\hat{\\mathbf{b}} - \\mathbf{w}\\|^2 \\geq \\|\\mathbf{z}\\|^2 = \\|\\mathbf{b} - \\hat{\\mathbf{b}}\\|^2$$

The inequality follows from the [Pythagorean theorem](!/linear-algebra/orthogonality/inner-products): $\\mathbf{z}$ is orthogonal to $\\hat{\\mathbf{b}} - \\mathbf{w}$ (both $\\hat{\\mathbf{b}}$ and $\\mathbf{w}$ are in $W$, so their difference is in $W$, and $\\mathbf{z} \\in W^\\perp$). The minimum distance $\\|\\mathbf{z}\\|$ is achieved uniquely at $\\mathbf{w} = \\hat{\\mathbf{b}}$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Projection with an Orthogonal Basis`,
    content: `When $W = \\text{Span}\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_k\\}$ and the [basis](!/linear-algebra/vector-spaces) $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_k\\}$ is orthogonal, the projection of $\\mathbf{b}$ onto $W$ decomposes into independent vector projections:

$$\\text{proj}_W \\mathbf{b} = \\frac{\\mathbf{u}_1 \\cdot \\mathbf{b}}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1}\\,\\mathbf{u}_1 + \\frac{\\mathbf{u}_2 \\cdot \\mathbf{b}}{\\mathbf{u}_2 \\cdot \\mathbf{u}_2}\\,\\mathbf{u}_2 + \\cdots + \\frac{\\mathbf{u}_k \\cdot \\mathbf{b}}{\\mathbf{u}_k \\cdot \\mathbf{u}_k}\\,\\mathbf{u}_k$$

Each term is the projection of $\\mathbf{b}$ onto one basis vector. Orthogonality prevents interference: projecting onto $\\mathbf{u}_1$ does not affect the component along $\\mathbf{u}_2$, because $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = 0$.

When the basis is [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets), the denominators are all $1$:

$$\\text{proj}_W \\mathbf{b} = (\\mathbf{q}_1 \\cdot \\mathbf{b})\\,\\mathbf{q}_1 + (\\mathbf{q}_2 \\cdot \\mathbf{b})\\,\\mathbf{q}_2 + \\cdots + (\\mathbf{q}_k \\cdot \\mathbf{b})\\,\\mathbf{q}_k$$

This is the cleanest formula in all of linear algebra — $k$ dot products and $k$ scalar multiplications.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Projection with an Arbitrary Basis`,
    content: `When the basis for $W$ is not orthogonal, the individual vector projection formula does not apply — projecting onto one basis vector interferes with the others. Instead, the projection requires solving a system.

If the columns of the $m \\times k$ [matrix](!/linear-algebra/matrix) $A$ form a basis for $W$, the projection of $\\mathbf{b}$ onto $W$ is

$$\\hat{\\mathbf{b}} = A(A^TA)^{-1}A^T\\mathbf{b}$$

This formula requires $A^TA$ to be [invertible](!/linear-algebra/matrix/inverse), which holds whenever the columns of $A$ are [linearly independent](!/linear-algebra/vector-spaces/linear-independence).

The derivation comes from the orthogonality condition. The residual $\\mathbf{b} - A\\hat{\\mathbf{x}}$ must be perpendicular to every column of $A$: $A^T(\\mathbf{b} - A\\hat{\\mathbf{x}}) = \\mathbf{0}$. Solving for $\\hat{\\mathbf{x}}$ gives $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$, so $\\hat{\\mathbf{x}} = (A^TA)^{-1}A^T\\mathbf{b}$, and $\\hat{\\mathbf{b}} = A\\hat{\\mathbf{x}} = A(A^TA)^{-1}A^T\\mathbf{b}$.

The alternative is to first orthogonalize the basis using [Gram-Schmidt](!/linear-algebra/orthogonality/gram-schmidt), then use the simpler orthogonal formula. Both approaches give the same projection.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `The Projection Matrix`,
    content: `The matrix $P = A(A^TA)^{-1}A^T$ maps any vector $\\mathbf{b}$ to its projection onto $\\text{Col}(A)$: $\\hat{\\mathbf{b}} = P\\mathbf{b}$.

When the basis is orthonormal ($A = Q$ with $Q^TQ = I$), the formula simplifies to $P = QQ^T$.

The projection matrix satisfies two algebraic conditions. It is [symmetric](!/linear-algebra/matrix/types): $P^T = P$. And it is [idempotent](!/linear-algebra/matrix/types): $P^2 = P$ — projecting twice gives the same result as projecting once, because vectors already in $W$ are fixed by $P$.

The complementary matrix $I - P$ projects onto $W^\\perp$. It satisfies $(I - P)^T = I - P$ and $(I - P)^2 = I - P$, and for every $\\mathbf{b}$: $P\\mathbf{b} + (I - P)\\mathbf{b} = \\mathbf{b}$, decomposing $\\mathbf{b}$ into its $W$-component and its $W^\\perp$-component.

The [eigenvalues](!/linear-algebra/eigenvalues-vectors) of $P$ are $0$ and $1$: vectors in $W$ map to themselves (eigenvalue $1$) and vectors in $W^\\perp$ map to zero (eigenvalue $0$). The [rank](!/linear-algebra/matrix/rank) of $P$ equals the [trace](!/linear-algebra/matrix/trace) of $P$, which equals $\\dim(W)$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Properties of Orthogonal Projections`,
    content: `Orthogonal projections are characterized by two properties acting together.

Idempotence ($P^2 = P$): once a vector has been projected, projecting again changes nothing. Every vector in $W$ is a fixed point of $P$. This distinguishes projections from other [linear transformations](!/linear-algebra/linear-transformations) — most transformations continue to change vectors on repeated application.

Symmetry ($P^T = P$): the projection is self-adjoint with respect to the dot product. This means $P\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{u} \\cdot P\\mathbf{v}$ for all $\\mathbf{u}, \\mathbf{v}$. The symmetry condition is what makes the projection orthogonal rather than oblique — it ensures the residual is perpendicular to $W$, not merely non-parallel.

A matrix satisfying $P^2 = P$ and $P^T = P$ is an orthogonal projection. A matrix satisfying $P^2 = P$ but $P^T \\neq P$ is an oblique projection — it projects onto the same subspace but along a different direction, not the perpendicular one.

The error $\\|\\mathbf{b} - P\\mathbf{b}\\|$ is the distance from $\\mathbf{b}$ to $W$. It is the smallest possible value of $\\|\\mathbf{b} - \\mathbf{w}\\|$ over all $\\mathbf{w} \\in W$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Projection and Least Squares`,
    content: `When the [system](!/linear-algebra/linear-systems) $A\\mathbf{x} = \\mathbf{b}$ has no solution — when $\\mathbf{b}$ is not in the [column space](!/linear-algebra/vector-spaces/fundamental-subspaces) of $A$ — the [least-squares](!/linear-algebra/orthogonality/least-squares) solution $\\hat{\\mathbf{x}}$ produces the projection of $\\mathbf{b}$ onto $\\text{Col}(A)$:

$$A\\hat{\\mathbf{x}} = \\hat{\\mathbf{b}} = P\\mathbf{b}$$

The least-squares solution does not solve $A\\mathbf{x} = \\mathbf{b}$. It solves $A\\mathbf{x} = \\hat{\\mathbf{b}}$, where $\\hat{\\mathbf{b}}$ is the closest reachable vector to $\\mathbf{b}$.

The residual $\\mathbf{r} = \\mathbf{b} - A\\hat{\\mathbf{x}}$ lies in $\\text{Col}(A)^\\perp = \\text{Null}(A^T)$ — it is orthogonal to every column of $A$. The condition $A^T\\mathbf{r} = \\mathbf{0}$ is exactly the normal equation $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$.

Every least-squares problem is a projection problem. Solving least squares means projecting the target $\\mathbf{b}$ onto the column space and finding the input $\\hat{\\mathbf{x}}$ that produces the projected output.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Worked Example: Full Projection Computation`,
    content: `Project $\\mathbf{b} = (1, 2, 3)$ onto the subspace $W = \\text{Span}\\{(1, 0, 1), (0, 1, 1)\\}$ in $\\mathbb{R}^3$.

The basis is not orthogonal: $(1, 0, 1) \\cdot (0, 1, 1) = 0 + 0 + 1 = 1 \\neq 0$. Use the general formula. Set $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 1 & 1 \\end{pmatrix}$.

$$A^TA = \\begin{pmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 1 \\end{pmatrix}\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 1 & 1 \\end{pmatrix} = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$$

$$(A^TA)^{-1} = \\frac{1}{3}\\begin{pmatrix} 2 & -1 \\\\ -1 & 2 \\end{pmatrix}$$

$$A^T\\mathbf{b} = \\begin{pmatrix} 1 + 0 + 3 \\\\ 0 + 2 + 3 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 5 \\end{pmatrix}$$

$$\\hat{\\mathbf{x}} = \\frac{1}{3}\\begin{pmatrix} 2 & -1 \\\\ -1 & 2 \\end{pmatrix}\\begin{pmatrix} 4 \\\\ 5 \\end{pmatrix} = \\frac{1}{3}\\begin{pmatrix} 3 \\\\ 6 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$$

$$\\hat{\\mathbf{b}} = A\\hat{\\mathbf{x}} = 1\\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix} + 2\\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix}$$

The projection equals $\\mathbf{b}$ itself — meaning $\\mathbf{b}$ was already in $W$. The residual is $\\mathbf{0}$, confirming $\\mathbf{b} \\in \\text{Span}\\{(1, 0, 1), (0, 1, 1)\\}$. Indeed: $(1, 2, 3) = 1 \\cdot (1, 0, 1) + 2 \\cdot (0, 1, 1)$.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

const introContent = {
  title: `The Closest Point in a Subspace`,
  content: `The orthogonal projection of a vector onto a subspace is the point in the subspace closest to the original vector. The residual — the difference between the vector and its projection — is perpendicular to the subspace. This orthogonal decomposition is the geometric engine behind least squares, the QR decomposition, and every approximation problem in linear algebra.`,
}

const faqQuestions = {
  obj1: {
    question: "What is the formula for projecting a vector onto another vector?",
    answer: "The projection of b onto a nonzero vector a is proj_a(b) = (a·b / a·a) · a. The scalar a·b / a·a gives the component of b in the direction of a, and the residual b minus the projection is orthogonal to a.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the orthogonal decomposition of a vector?",
    answer: "Every vector b in Rⁿ decomposes uniquely as b = b̂ + z, where b̂ is the orthogonal projection onto a subspace W and z is the perpendicular residual in W⊥. The projection b̂ is the closest point in W to b.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you project onto a subspace with a non-orthogonal basis?",
    answer: "If the columns of matrix A form a basis for W, the projection of b onto W is b̂ = A(AᵀA)⁻¹Aᵀb. This formula comes from requiring the residual b − Ab̂ to be orthogonal to every column of A, which yields the normal equations AᵀAx̂ = Aᵀb.",
    sectionId: "4"
  },
  obj4: {
    question: "What are the properties of a projection matrix?",
    answer: "An orthogonal projection matrix P satisfies two conditions: it is symmetric (Pᵀ = P) and idempotent (P² = P). Symmetry ensures the projection is orthogonal rather than oblique. Idempotence means projecting twice gives the same result as projecting once.",
    sectionId: "5"
  },
  obj5: {
    question: "How is projection related to least squares?",
    answer: "When Ax = b has no exact solution, the least-squares solution x̂ produces the projection of b onto the column space of A. The residual b − Ax̂ is orthogonal to the column space, and x̂ satisfies the normal equations AᵀAx̂ = Aᵀb.",
    sectionId: "7"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Orthogonal Projections",
    "description": "Orthogonal projections in linear algebra: projection onto vectors and subspaces, projection matrix P = A(AᵀA)⁻¹Aᵀ, orthogonal decomposition, and connection to least squares.",
    "url": "https://www.learnmathclass.com/linear-algebra/orthogonality/projections",
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
      "name": "Orthogonal Projections"
    },
    "teaches": [
      "Projection of a vector onto another vector",
      "Orthogonal decomposition into subspace and complement",
      "Projection using orthogonal and orthonormal bases",
      "General projection formula A(AᵀA)⁻¹Aᵀ",
      "Projection matrix properties: symmetry and idempotence",
      "Connection between projection and least squares"
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
        "name": "Projections",
        "item": "https://www.learnmathclass.com/linear-algebra/orthogonality/projections"
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
//         title: "Projections | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/linear-algebra/orthogonality/projections",
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
      title: "Projections: Formulas & Matrix Properties | Learn Math Class",
      description: "Orthogonal projections in linear algebra: projection onto vectors and subspaces, projection matrix P = A(AᵀA)⁻¹Aᵀ, orthogonal decomposition, and connection to least squares.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/orthogonality/projections",
      name: "Orthogonal Projections"
    },
  }
}
   }

// export default function ProjectionsPage({seoData,sectionsContent , introContent}) {
export default function ProjectionsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   {/* <Head>
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Orthogonal Projections</h1>
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
