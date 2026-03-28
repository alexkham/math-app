import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../pages.css'

import Head from 'next/head'


export async function getStaticProps(){
const keyWords = [
  "orthogonality linear algebra",
  "orthogonal vectors",
  "orthogonal complement",
  "orthonormal basis",
  "dot product perpendicular",
  "orthogonal projection",
  "Gram-Schmidt process",
  "least squares approximation",
  "inner product space",
  "orthogonal sets",
  "four fundamental subspaces orthogonal",
  "projection matrix",
  "QR decomposition",
  "perpendicular vectors"
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
    title: `What Orthogonality Means`,
    content: `Two vectors $\\mathbf{u}$ and $\\mathbf{v}$ in $\\mathbb{R}^n$ are orthogonal if their [dot product](!/linear-algebra/vectors/dot-product) is zero:

$$\\mathbf{u} \\cdot \\mathbf{v} = u_1 v_1 + u_2 v_2 + \\cdots + u_n v_n = 0$$

Geometrically, this means the angle between the two vectors is $90°$. The vectors are perpendicular — pointing in completely independent directions with no component of one lying along the other.

The zero vector is orthogonal to every vector, since $\\mathbf{0} \\cdot \\mathbf{v} = 0$ for all $\\mathbf{v}$. This is a convention that keeps the theory clean, not a geometric statement — the zero vector has no direction. Orthogonality is defined relative to an [inner product](!/linear-algebra/orthogonality/inner-product), and on this site the standard dot product is used unless stated otherwise.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Orthogonality in R² and R³`,
    content: `In $\\mathbb{R}^2$, the vectors $(a, b)$ and $(c, d)$ are orthogonal if and only if $ac + bd = 0$. The pair $(1, 2)$ and $(-2, 1)$ satisfies $1(-2) + 2(1) = 0$, so these vectors are perpendicular. Rotating any vector by $90°$ produces an orthogonal partner: $(a, b)$ is orthogonal to $(-b, a)$.

In $\\mathbb{R}^3$, the standard basis vectors $\\mathbf{e}_1 = (1, 0, 0)$, $\\mathbf{e}_2 = (0, 1, 0)$, $\\mathbf{e}_3 = (0, 0, 1)$ are mutually orthogonal — every pair has dot product zero. The [cross product](!/linear-algebra/vectors/cross-product) $\\mathbf{a} \\times \\mathbf{b}$ produces a vector orthogonal to both $\\mathbf{a}$ and $\\mathbf{b}$, constructing perpendicularity from any two non-parallel inputs.

Orthogonality is the foundation of coordinate systems. Axes that are perpendicular allow each coordinate to be read independently — changing one coordinate does not affect any other. This independence is what makes orthogonal bases so powerful.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Orthogonal Complements`,
    content: `For a [subspace](!/linear-algebra/vector-spaces/subspaces) $W$ of $\\mathbb{R}^n$, the orthogonal complement $W^\\perp$ is the set of all vectors perpendicular to everything in $W$:

$$W^\\perp = \\{\\mathbf{v} \\in \\mathbb{R}^n : \\mathbf{v} \\cdot \\mathbf{w} = 0 \\text{ for all } \\mathbf{w} \\in W\\}$$

The orthogonal complement is itself a subspace. Its [dimension](!/linear-algebra/vector-spaces/dimension) satisfies $\\dim(W) + \\dim(W^\\perp) = n$, and taking the complement twice returns to the original: $(W^\\perp)^\\perp = W$.

The most important structural consequence is the orthogonal decomposition. Every vector $\\mathbf{v} \\in \\mathbb{R}^n$ can be written uniquely as

$$\\mathbf{v} = \\mathbf{w} + \\mathbf{w}^\\perp$$

where $\\mathbf{w} \\in W$ and $\\mathbf{w}^\\perp \\in W^\\perp$. The two components are perpendicular to each other: $\\mathbf{w} \\cdot \\mathbf{w}^\\perp = 0$. This decomposition is the geometric heart of [projection](!/linear-algebra/orthogonality/projections): $\\mathbf{w}$ is the projection of $\\mathbf{v}$ onto $W$, and $\\mathbf{w}^\\perp$ is the residual.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `The Four Fundamental Subspaces Revisited`,
    content: `The orthogonal complement structure appears naturally in the [four fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-subspaces) of any $m \\times n$ [matrix](!/linear-algebra/matrix) $A$.

In $\\mathbb{R}^n$, the row space and the null space are orthogonal complements:

$$\\text{Row}(A)^\\perp = \\text{Null}(A)$$

Every vector in the null space is perpendicular to every row of $A$, because $A\\mathbf{x} = \\mathbf{0}$ means the dot product of $\\mathbf{x}$ with each row is zero.

In $\\mathbb{R}^m$, the column space and the left null space are orthogonal complements:

$$\\text{Col}(A)^\\perp = \\text{Null}(A^T)$$

These two pairs of complements are the structural backbone of projection and [least squares](!/linear-algebra/orthogonality/least-squares). Projecting a vector $\\mathbf{b}$ onto the column space means decomposing $\\mathbf{b}$ into a column-space component (the best approximation $A\\hat{\\mathbf{x}}$) and a left-null-space component (the residual $\\mathbf{b} - A\\hat{\\mathbf{x}}$).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Why Orthogonality Matters`,
    content: `Orthogonality is the single property that converts hard linear algebra problems into easy ones.

[Orthogonal bases](!/linear-algebra/orthogonality/orthogonal-sets) make coordinate computation trivial: the coefficient of each basis vector is a single dot product, not the solution of a system. For a general [basis](!/linear-algebra/vector-spaces), finding coordinates requires solving $n$ equations; for an orthonormal basis, it requires $n$ dot products.

[Projections](!/linear-algebra/orthogonality/projections) onto subspaces have explicit formulas when the basis is orthogonal. The projection of $\\mathbf{b}$ onto a subspace splits into independent projections onto each basis vector, with no cross-talk between components.

[Least-squares](!/linear-algebra/orthogonality/least-squares) approximation — the best approximate solution when $A\\mathbf{x} = \\mathbf{b}$ has no exact solution — reduces to projecting $\\mathbf{b}$ onto the column space. The normal equations $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ are a direct consequence of the orthogonality condition on the residual.

[Orthogonal matrices](!/linear-algebra/matrix/types) preserve lengths and angles, making them numerically stable in computation. The [Gram-Schmidt process](!/linear-algebra/orthogonality/gram-schmidt) converts any basis into an orthogonal one, ensuring these benefits are always available.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Inner Products`,
    content: `The dot product is the standard way to measure angles and lengths in $\\mathbb{R}^n$, but it is not the only one. An [inner product](!/linear-algebra/orthogonality/inner-product) is any function $\\langle \\cdot, \\cdot \\rangle$ that satisfies symmetry, linearity, and positive definiteness. Different inner products define different notions of perpendicularity and distance.

A weighted inner product $\\langle \\mathbf{u}, \\mathbf{v} \\rangle = \\mathbf{u}^T W \\mathbf{v}$ (with $W$ symmetric positive definite) distorts the geometry — circles become ellipses, and "perpendicular" means something different than in the standard dot product. On function spaces, the integral $\\langle f, g \\rangle = \\int_a^b f(x)g(x)\\,dx$ defines orthogonality for functions, leading to Fourier series and orthogonal polynomials.

Every inner product induces a norm ($\\|\\mathbf{v}\\| = \\sqrt{\\langle \\mathbf{v}, \\mathbf{v} \\rangle}$), a distance ($d(\\mathbf{u}, \\mathbf{v}) = \\|\\mathbf{u} - \\mathbf{v}\\|$), and the Cauchy-Schwarz inequality ($|\\langle \\mathbf{u}, \\mathbf{v} \\rangle| \\leq \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|$). The entire orthogonality framework — projections, Gram-Schmidt, least squares — works in any inner product space.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Orthogonal and Orthonormal Sets`,
    content: `An [orthogonal set](!/linear-algebra/orthogonality/orthogonal-sets) is a collection of vectors that are pairwise perpendicular: $\\mathbf{v}_i \\cdot \\mathbf{v}_j = 0$ whenever $i \\neq j$. An orthonormal set adds the requirement that each vector has unit length: $\\|\\mathbf{v}_i\\| = 1$.

Orthogonal sets of nonzero vectors are automatically [linearly independent](!/linear-algebra/vector-spaces/linear-independence) — no independence check is needed. The proof is one line: if $\\sum c_i \\mathbf{v}_i = \\mathbf{0}$, dotting both sides with $\\mathbf{v}_j$ gives $c_j \\|\\mathbf{v}_j\\|^2 = 0$, forcing $c_j = 0$.

The computational advantage of an orthonormal basis $\\{\\mathbf{q}_1, \\dots, \\mathbf{q}_n\\}$ is that coordinates are free: $c_i = \\mathbf{q}_i \\cdot \\mathbf{v}$. No system of equations, no [row reduction](!/linear-algebra/linear-systems/gaussian-elimination), no matrix inversion — just $n$ dot products.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Projections`,
    content: `The orthogonal [projection](!/linear-algebra/orthogonality/projections) of a vector $\\mathbf{b}$ onto a [subspace](!/linear-algebra/vector-spaces/subspaces) $W$ is the closest point in $W$ to $\\mathbf{b}$. It is the component of $\\mathbf{b}$ that lies in $W$, with the perpendicular remainder discarded.

For projection onto a single vector $\\mathbf{a}$: $\\text{proj}_{\\mathbf{a}}\\mathbf{b} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\mathbf{a} \\cdot \\mathbf{a}}\\mathbf{a}$. For projection onto a subspace with basis matrix $A$: $\\hat{\\mathbf{b}} = A(A^TA)^{-1}A^T\\mathbf{b}$.

The projection matrix $P = A(A^TA)^{-1}A^T$ is [symmetric](!/linear-algebra/matrix/types) and [idempotent](!/linear-algebra/matrix/types): $P^T = P$ and $P^2 = P$. The residual $\\mathbf{b} - P\\mathbf{b}$ is orthogonal to $W$ — this is the defining geometric property. And $I - P$ projects onto the orthogonal complement $W^\\perp$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Gram-Schmidt and Least Squares`,
    content: `The [Gram-Schmidt process](!/linear-algebra/orthogonality/gram-schmidt) converts any linearly independent set into an orthogonal (or orthonormal) set spanning the same subspace. It does this by sequentially subtracting projections: each new vector has its components along all previously computed directions removed, leaving only the perpendicular remainder.

Gram-Schmidt applied to the columns of a matrix $A$ produces the [QR decomposition](!/linear-algebra/decompositions/qr) $A = QR$, where $Q$ has orthonormal columns and $R$ is upper triangular. This decomposition is numerically superior to forming $A^TA$ directly and is the standard method for [least-squares](!/linear-algebra/orthogonality/least-squares) computation.

[Least squares](!/linear-algebra/orthogonality/least-squares) addresses the case where $A\\mathbf{x} = \\mathbf{b}$ has no exact solution. The best approximation $\\hat{\\mathbf{x}}$ minimizes $\\|A\\mathbf{x} - \\mathbf{b}\\|^2$ and satisfies the normal equations $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$. Geometrically, $A\\hat{\\mathbf{x}}$ is the projection of $\\mathbf{b}$ onto the column space of $A$ — the closest reachable point to the unreachable target.`,
    before: ``,
    after: ``,
    link: ``,
  },
}


const introContent = {
  title: `Perpendicularity and Its Consequences`,
  content: `Orthogonality — the condition that two vectors are perpendicular — is the geometric idea that makes linear algebra computationally clean. Orthogonal bases turn coordinate-finding into dot products. Projections onto subspaces become explicit formulas. Least-squares approximation reduces to a single matrix equation. Every simplification traces back to the same root: when vectors are perpendicular, their interactions vanish and problems decouple.`,
}

const faqQuestions = {
  obj1: {
    question: "What does orthogonal mean in linear algebra?",
    answer: "Two vectors are orthogonal if their dot product is zero, meaning the angle between them is 90°. The zero vector is orthogonal to every vector by convention. Orthogonality generalizes perpendicularity to any number of dimensions and to abstract inner product spaces.",
    sectionId: "1"
  },
  obj2: {
    question: "What is an orthogonal complement?",
    answer: "The orthogonal complement W⊥ of a subspace W is the set of all vectors perpendicular to everything in W. Its dimension satisfies dim(W) + dim(W⊥) = n, and every vector in Rⁿ decomposes uniquely into a component in W and a component in W⊥.",
    sectionId: "3"
  },
  obj3: {
    question: "Why is orthogonality important in linear algebra?",
    answer: "Orthogonality simplifies nearly every computation. Orthogonal bases turn coordinate-finding into dot products, projections have explicit formulas, and least-squares approximation reduces to a single matrix equation. Orthogonal matrices are also numerically stable in computation.",
    sectionId: "5"
  },
  obj4: {
    question: "What is the difference between orthogonal and orthonormal?",
    answer: "An orthogonal set has pairwise perpendicular vectors (all dot products zero). An orthonormal set adds the requirement that each vector has unit length. Orthonormal bases make coordinates especially simple: each coefficient is just the dot product of the vector with the corresponding basis vector.",
    sectionId: "7"
  },
  obj5: {
    question: "How does orthogonal projection work?",
    answer: "The orthogonal projection of b onto a subspace W is the closest point in W to b. For a single vector a, it is (a·b / a·a)a. For a subspace with basis matrix A, the projection is A(AᵀA)⁻¹Aᵀb. The residual b minus the projection is perpendicular to W.",
    sectionId: "8"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Orthogonality in Linear Algebra",
    "description": "Learn orthogonality in linear algebra: orthogonal vectors, complements, projections, inner products, orthonormal bases, Gram-Schmidt process, and least-squares approximation.",
    "url": "https://www.learnmathclass.com/linear-algebra/orthogonality",
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
      "name": "Orthogonality"
    },
    "teaches": [
      "Orthogonal vectors and the dot product condition",
      "Orthogonal complements and dimension formula",
      "Four fundamental subspaces as orthogonal complement pairs",
      "Inner products and generalized orthogonality",
      "Orthogonal and orthonormal sets and bases",
      "Orthogonal projection onto subspaces",
      "Gram-Schmidt process and least-squares approximation"
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
//         title: "Orthogonality | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/linear-algebra/orthogonality",
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
      title: "Orthogonality: Vectors, Projections & Bases | Learn Math Class",
      description: "Learn orthogonality in linear algebra: orthogonal vectors, complements, projections, inner products, orthonormal bases, Gram-Schmidt process, and least-squares approximation.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/orthogonality",
      name: "Orthogonality in Linear Algebra"
    },
  }
}
   }

// export default function OrthogonalityPage({seoData,sectionsContent , introContent}) {
export default function OrthogonalityPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Orthogonality</h1>
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
