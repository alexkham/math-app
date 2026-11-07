// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../pages.css'

// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// export async function getStaticProps(){
// const keyWords = [
//   "orthogonality linear algebra",
//   "orthogonal vectors",
//   "orthogonal complement",
//   "orthonormal basis",
//   "dot product perpendicular",
//   "orthogonal projection",
//   "Gram-Schmidt process",
//   "least squares approximation",
//   "inner product space",
//   "orthogonal sets",
//   "four fundamental subspaces orthogonal",
//   "projection matrix",
//   "QR decomposition",
//   "perpendicular vectors"
// ]
//   // •

// //   \u2022 First item
// // \u2022 Second item

  
// // <hr style="border-width:1px;"></hr>

// // <hr style="color:blue;" />

// // <hr style="border-color:#3498db; border-width:1px;" />



// // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// // <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
//         //     {processContent(sectionsContent.normal.notation)}
//         // </div>,


// //   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
// //     {processContent(sectionsContent.normal.parameters)}
// // </div>,
        
// //  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
// //                   {processContent(sectionsContent.obj4.content)}
// //                   </div>,


// //  <div key={'dist'} style={{
// //                     textAlign: 'center',
// //                     transform: 'scale(0.98)',
// //                     transformOrigin: 'center',
// //                     marginTop:'50px',
// //                     marginLeft:'-150px'
// //                   }} dangerouslySetInnerHTML={{ 
// //                     __html:   sectionContent.distributions.svg,
// //                   }} />

// //     const sectionsContent={

// //     obj1:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
  
// //     },
// //     obj2:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
  
// //     obj3:{
  
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj4:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj5:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj6:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj7:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj8:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj9:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj10:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj11:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj12:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj13:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
// //       link:'',
  
// //     },
// //     obj14:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
// //       link:'',
  
// //     },


// //     obj15:{
  
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     }
  
// //   }

// const sectionsContent = {
//   obj1: {
//     title: `What Orthogonality Means`,
//     content: `Two vectors $\\mathbf{u}$ and $\\mathbf{v}$ in $\\mathbb{R}^n$ are orthogonal if their [dot product](!/linear-algebra/vectors/dot-product) is zero:

// $$\\mathbf{u} \\cdot \\mathbf{v} = u_1 v_1 + u_2 v_2 + \\cdots + u_n v_n = 0$$

// Geometrically, this means the angle between the two vectors is $90°$. The vectors are perpendicular — pointing in completely independent directions with no component of one lying along the other.

// The zero vector is orthogonal to every vector, since $\\mathbf{0} \\cdot \\mathbf{v} = 0$ for all $\\mathbf{v}$. This is a convention that keeps the theory clean, not a geometric statement — the zero vector has no direction. Orthogonality is defined relative to an [inner product](!/linear-algebra/orthogonality/inner-product), and on this site the standard dot product is used unless stated otherwise.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `Orthogonality in R² and R³`,
//     content: `In $\\mathbb{R}^2$, the vectors $(a, b)$ and $(c, d)$ are orthogonal if and only if $ac + bd = 0$. The pair $(1, 2)$ and $(-2, 1)$ satisfies $1(-2) + 2(1) = 0$, so these vectors are perpendicular. Rotating any vector by $90°$ produces an orthogonal partner: $(a, b)$ is orthogonal to $(-b, a)$.

// In $\\mathbb{R}^3$, the standard basis vectors $\\mathbf{e}_1 = (1, 0, 0)$, $\\mathbf{e}_2 = (0, 1, 0)$, $\\mathbf{e}_3 = (0, 0, 1)$ are mutually orthogonal — every pair has dot product zero. The [cross product](!/linear-algebra/vectors/cross-product) $\\mathbf{a} \\times \\mathbf{b}$ produces a vector orthogonal to both $\\mathbf{a}$ and $\\mathbf{b}$, constructing perpendicularity from any two non-parallel inputs.

// Orthogonality is the foundation of coordinate systems. Axes that are perpendicular allow each coordinate to be read independently — changing one coordinate does not affect any other. This independence is what makes orthogonal bases so powerful.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `Orthogonal Complements`,
//     content: `For a [subspace](!/linear-algebra/vector-spaces/subspaces) $W$ of $\\mathbb{R}^n$, the orthogonal complement $W^\\perp$ is the set of all vectors perpendicular to everything in $W$:

// $$W^\\perp = \\{\\mathbf{v} \\in \\mathbb{R}^n : \\mathbf{v} \\cdot \\mathbf{w} = 0 \\text{ for all } \\mathbf{w} \\in W\\}$$

// The orthogonal complement is itself a subspace. Its [dimension](!/linear-algebra/vector-spaces/dimension) satisfies $\\dim(W) + \\dim(W^\\perp) = n$, and taking the complement twice returns to the original: $(W^\\perp)^\\perp = W$.

// The most important structural consequence is the orthogonal decomposition. Every vector $\\mathbf{v} \\in \\mathbb{R}^n$ can be written uniquely as

// $$\\mathbf{v} = \\mathbf{w} + \\mathbf{w}^\\perp$$

// where $\\mathbf{w} \\in W$ and $\\mathbf{w}^\\perp \\in W^\\perp$. The two components are perpendicular to each other: $\\mathbf{w} \\cdot \\mathbf{w}^\\perp = 0$. This decomposition is the geometric heart of [projection](!/linear-algebra/orthogonality/projections): $\\mathbf{w}$ is the projection of $\\mathbf{v}$ onto $W$, and $\\mathbf{w}^\\perp$ is the residual.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `The Four Fundamental Subspaces Revisited`,
//     content: `The orthogonal complement structure appears naturally in the [four fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces) of any $m \\times n$ [matrix](!/linear-algebra/matrix) $A$.

// In $\\mathbb{R}^n$, the row space and the null space are orthogonal complements:

// $$\\text{Row}(A)^\\perp = \\text{Null}(A)$$

// Every vector in the null space is perpendicular to every row of $A$, because $A\\mathbf{x} = \\mathbf{0}$ means the dot product of $\\mathbf{x}$ with each row is zero.

// In $\\mathbb{R}^m$, the column space and the left null space are orthogonal complements:

// $$\\text{Col}(A)^\\perp = \\text{Null}(A^T)$$

// These two pairs of complements are the structural backbone of projection and [least squares](!/linear-algebra/orthogonality/least-squares). Projecting a vector $\\mathbf{b}$ onto the column space means decomposing $\\mathbf{b}$ into a column-space component (the best approximation $A\\hat{\\mathbf{x}}$) and a left-null-space component (the residual $\\mathbf{b} - A\\hat{\\mathbf{x}}$).`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Why Orthogonality Matters`,
//     content: `Orthogonality is the single property that converts hard linear algebra problems into easy ones.

// [Orthogonal bases](!/linear-algebra/orthogonality/orthogonal-sets) make coordinate computation trivial: the coefficient of each basis vector is a single dot product, not the solution of a system. For a general [basis](!/linear-algebra/vector-spaces), finding coordinates requires solving $n$ equations; for an orthonormal basis, it requires $n$ dot products.

// [Projections](!/linear-algebra/orthogonality/projections) onto subspaces have explicit formulas when the basis is orthogonal. The projection of $\\mathbf{b}$ onto a subspace splits into independent projections onto each basis vector, with no cross-talk between components.

// [Least-squares](!/linear-algebra/orthogonality/least-squares) approximation — the best approximate solution when $A\\mathbf{x} = \\mathbf{b}$ has no exact solution — reduces to projecting $\\mathbf{b}$ onto the column space. The normal equations $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ are a direct consequence of the orthogonality condition on the residual.

// [Orthogonal matrices](!/linear-algebra/matrix/types) preserve lengths and angles, making them numerically stable in computation. The [Gram-Schmidt process](!/linear-algebra/orthogonality/gram-schmidt) converts any basis into an orthogonal one, ensuring these benefits are always available.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `Inner Products`,
//     content: `The dot product is the standard way to measure angles and lengths in $\\mathbb{R}^n$, but it is not the only one. An [inner product](!/linear-algebra/orthogonality/inner-product) is any function $\\langle \\cdot, \\cdot \\rangle$ that satisfies symmetry, linearity, and positive definiteness. Different inner products define different notions of perpendicularity and distance.

// A weighted inner product $\\langle \\mathbf{u}, \\mathbf{v} \\rangle = \\mathbf{u}^T W \\mathbf{v}$ (with $W$ symmetric positive definite) distorts the geometry — circles become ellipses, and "perpendicular" means something different than in the standard dot product. On function spaces, the integral $\\langle f, g \\rangle = \\int_a^b f(x)g(x)\\,dx$ defines orthogonality for functions, leading to Fourier series and orthogonal polynomials.

// Every inner product induces a norm ($\\|\\mathbf{v}\\| = \\sqrt{\\langle \\mathbf{v}, \\mathbf{v} \\rangle}$), a distance ($d(\\mathbf{u}, \\mathbf{v}) = \\|\\mathbf{u} - \\mathbf{v}\\|$), and the Cauchy-Schwarz inequality ($|\\langle \\mathbf{u}, \\mathbf{v} \\rangle| \\leq \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|$). The entire orthogonality framework — projections, Gram-Schmidt, least squares — works in any inner product space.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `Orthogonal and Orthonormal Sets`,
//     content: `An [orthogonal set](!/linear-algebra/orthogonality/orthogonal-sets) is a collection of vectors that are pairwise perpendicular: $\\mathbf{v}_i \\cdot \\mathbf{v}_j = 0$ whenever $i \\neq j$. An orthonormal set adds the requirement that each vector has unit length: $\\|\\mathbf{v}_i\\| = 1$.

// Orthogonal sets of nonzero vectors are automatically [linearly independent](!/linear-algebra/vector-spaces/linear-independence) — no independence check is needed. The proof is one line: if $\\sum c_i \\mathbf{v}_i = \\mathbf{0}$, dotting both sides with $\\mathbf{v}_j$ gives $c_j \\|\\mathbf{v}_j\\|^2 = 0$, forcing $c_j = 0$.

// The computational advantage of an orthonormal basis $\\{\\mathbf{q}_1, \\dots, \\mathbf{q}_n\\}$ is that coordinates are free: $c_i = \\mathbf{q}_i \\cdot \\mathbf{v}$. No system of equations, no [row reduction](!/linear-algebra/linear-systems/gaussian-elimination), no matrix inversion — just $n$ dot products.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Projections`,
//     content: `The orthogonal [projection](!/linear-algebra/orthogonality/projections) of a vector $\\mathbf{b}$ onto a [subspace](!/linear-algebra/vector-spaces/subspaces) $W$ is the closest point in $W$ to $\\mathbf{b}$. It is the component of $\\mathbf{b}$ that lies in $W$, with the perpendicular remainder discarded.

// For projection onto a single vector $\\mathbf{a}$: $\\text{proj}_{\\mathbf{a}}\\mathbf{b} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\mathbf{a} \\cdot \\mathbf{a}}\\mathbf{a}$. For projection onto a subspace with basis matrix $A$: $\\hat{\\mathbf{b}} = A(A^TA)^{-1}A^T\\mathbf{b}$.

// The projection matrix $P = A(A^TA)^{-1}A^T$ is [symmetric](!/linear-algebra/matrix/types) and [idempotent](!/linear-algebra/matrix/types): $P^T = P$ and $P^2 = P$. The residual $\\mathbf{b} - P\\mathbf{b}$ is orthogonal to $W$ — this is the defining geometric property. And $I - P$ projects onto the orthogonal complement $W^\\perp$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `Gram-Schmidt and Least Squares`,
//     content: `The [Gram-Schmidt process](!/linear-algebra/orthogonality/gram-schmidt) converts any linearly independent set into an orthogonal (or orthonormal) set spanning the same subspace. It does this by sequentially subtracting projections: each new vector has its components along all previously computed directions removed, leaving only the perpendicular remainder.

// Gram-Schmidt applied to the columns of a matrix $A$ produces the [QR decomposition](!/linear-algebra/decompositions/qr) $A = QR$, where $Q$ has orthonormal columns and $R$ is upper triangular. This decomposition is numerically superior to forming $A^TA$ directly and is the standard method for [least-squares](!/linear-algebra/orthogonality/least-squares) computation.

// [Least squares](!/linear-algebra/orthogonality/least-squares) addresses the case where $A\\mathbf{x} = \\mathbf{b}$ has no exact solution. The best approximation $\\hat{\\mathbf{x}}$ minimizes $\\|A\\mathbf{x} - \\mathbf{b}\\|^2$ and satisfies the normal equations $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$. Geometrically, $A\\hat{\\mathbf{x}}$ is the projection of $\\mathbf{b}$ onto the column space of $A$ — the closest reachable point to the unreachable target.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }


// const introContent = {
//   title: `Perpendicularity and Its Consequences`,
//   content: `Orthogonality — the condition that two vectors are perpendicular — is the geometric idea that makes linear algebra computationally clean. Orthogonal bases turn coordinate-finding into dot products. Projections onto subspaces become explicit formulas. Least-squares approximation reduces to a single matrix equation. Every simplification traces back to the same root: when vectors are perpendicular, their interactions vanish and problems decouple.`,
// }

// const faqQuestions = {
//   obj1: {
//     question: "What does orthogonal mean in linear algebra?",
//     answer: "Two vectors are orthogonal if their dot product is zero, meaning the angle between them is 90°. The zero vector is orthogonal to every vector by convention. Orthogonality generalizes perpendicularity to any number of dimensions and to abstract inner product spaces.",
//     sectionId: "1"
//   },
//   obj2: {
//     question: "What is an orthogonal complement?",
//     answer: "The orthogonal complement W⊥ of a subspace W is the set of all vectors perpendicular to everything in W. Its dimension satisfies dim(W) + dim(W⊥) = n, and every vector in Rⁿ decomposes uniquely into a component in W and a component in W⊥.",
//     sectionId: "3"
//   },
//   obj3: {
//     question: "Why is orthogonality important in linear algebra?",
//     answer: "Orthogonality simplifies nearly every computation. Orthogonal bases turn coordinate-finding into dot products, projections have explicit formulas, and least-squares approximation reduces to a single matrix equation. Orthogonal matrices are also numerically stable in computation.",
//     sectionId: "5"
//   },
//   obj4: {
//     question: "What is the difference between orthogonal and orthonormal?",
//     answer: "An orthogonal set has pairwise perpendicular vectors (all dot products zero). An orthonormal set adds the requirement that each vector has unit length. Orthonormal bases make coordinates especially simple: each coefficient is just the dot product of the vector with the corresponding basis vector.",
//     sectionId: "7"
//   },
//   obj5: {
//     question: "How does orthogonal projection work?",
//     answer: "The orthogonal projection of b onto a subspace W is the closest point in W to b. For a single vector a, it is (a·b / a·a)a. For a subspace with basis matrix A, the projection is A(AᵀA)⁻¹Aᵀb. The residual b minus the projection is perpendicular to W.",
//     sectionId: "8"
//   }
// }


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Orthogonality in Linear Algebra",
//     "description": "Learn orthogonality in linear algebra: orthogonal vectors, complements, projections, inner products, orthonormal bases, Gram-Schmidt process, and least-squares approximation.",
//     "url": "https://www.learnmathclass.com/linear-algebra/orthogonality",
//     "inLanguage": "en-US",
//     "learningResourceType": "Explanation",
//     "educationalLevel": "College",
//     "educationalUse": "Learning",
//     "audience": {
//       "@type": "EducationalAudience",
//       "educationalRole": "student"
//     },
//     "about": {
//       "@type": "Thing",
//       "name": "Orthogonality"
//     },
//     "teaches": [
//       "Orthogonal vectors and the dot product condition",
//       "Orthogonal complements and dimension formula",
//       "Four fundamental subspaces as orthogonal complement pairs",
//       "Inner products and generalized orthogonality",
//       "Orthogonal and orthonormal sets and bases",
//       "Orthogonal projection onto subspaces",
//       "Gram-Schmidt process and least-squares approximation"
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
//         "name": "Orthogonality",
//         "item": "https://www.learnmathclass.com/linear-algebra/orthogonality"
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

// //    return {
// //       props:{
// //          sectionsContent,
// //          introContent,
// //           seoData: {
// //         title: "Orthogonality | Learn Math Class",
// //         description: "Metadescription",
// //         keywords: keyWords.join(", "),
// //         url: "/linear-algebra/orthogonality",
// //          name: "name"
// //       },
        
// //        }
// //     }

// return {
//   props:{
//     sectionsContent,
//     introContent,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "Orthogonality: Vectors, Projections & Bases | Learn Math Class",
//       description: "Learn orthogonality in linear algebra: orthogonal vectors, complements, projections, inner products, orthonormal bases, Gram-Schmidt process, and least-squares approximation.",
//       keywords: keyWords.join(", "),
//       url: "/linear-algebra/orthogonality",
//       name: "Orthogonality in Linear Algebra"
//     },
//   }
// }
//    }

// // export default function OrthogonalityPage({seoData,sectionsContent , introContent}) {
// export default function OrthogonalityPage({seoData, sectionsContent, introContent, schemas}) {
    
//   const genericSections=[
//     {
//         id:'1',
//         title:sectionsContent.obj1.title,
//         link:sectionsContent.obj1.link,
//         content:[
//           sectionsContent.obj1.content,
//         ]
//     },
//     {
//         id:'2',
//         title:sectionsContent.obj2.title,
//         link:sectionsContent.obj2.link,
//         content:[
//           sectionsContent.obj2.content,
//         ]
//     },
//     {
//         id:'3',
//         title:sectionsContent.obj3.title,
//         link:sectionsContent.obj3.link,
//         content:[
//           sectionsContent.obj3.content,
//         ]
//     },
//     {
//         id:'4',
//         title:sectionsContent.obj4.title,
//         link:sectionsContent.obj4.link,
//         content:[
//           sectionsContent.obj4.content,
//         ]
//     },
//     {
//         id:'5',
//         title:sectionsContent.obj5.title,
//         link:sectionsContent.obj5.link,
//         content:[
//           sectionsContent.obj5.content,
//         ]
//     },
//     {
//         id:'6',
//         title:sectionsContent.obj6.title,
//         link:sectionsContent.obj6.link,
//         content:[
//           sectionsContent.obj6.content,
//         ]
//     },
//     {
//         id:'7',
//         title:sectionsContent.obj7.title,
//         link:sectionsContent.obj7.link,
//         content:[
//           sectionsContent.obj7.content,
//         ]
//     },
//     {
//         id:'8',
//         title:sectionsContent.obj8.title,
//         link:sectionsContent.obj8.link,
//         content:[
//           sectionsContent.obj8.content,
//         ]
//     },
//     {
//         id:'9',
//         title:sectionsContent.obj9.title,
//         link:sectionsContent.obj9.link,
//         content:[
//           sectionsContent.obj9.content,
//         ]
//     },
//     // {
//     //     id:'10',
//     //     title:sectionsContent.obj10.title,
//     //     link:sectionsContent.obj10.link,
//     //     content:[
//     //       sectionsContent.obj10.content,
//     //     ]
//     // },
//     // {
//     //     id:'11',
//     //     title:sectionsContent.obj11.title,
//     //     link:sectionsContent.obj11.link,
//     //     content:[
//     //       sectionsContent.obj11.content,
//     //     ]
//     // },
//     // {
//     //     id:'12',
//     //     title:sectionsContent.obj12.title,
//     //     link:sectionsContent.obj12.link,
//     //     content:[
//     //       sectionsContent.obj12.content,
//     //     ]
//     // },
//     // {
//     //     id:'13',
//     //     title:sectionsContent.obj13.title,
//     //     link:sectionsContent.obj13.link,
//     //     content:[
//     //       sectionsContent.obj13.content,
//     //     ]
//     // },
//     // {
//     //     id:'14',
//     //     title:sectionsContent.obj14.title,
//     //     link:sectionsContent.obj14.link,
//     //     content:[
//     //       sectionsContent.obj14.content,
//     //     ]
//     // },
//     // {
//     //     id:'15',
//     //     title:sectionsContent.obj15.title,
//     //     link:sectionsContent.obj15.link,
//     //     content:[
//     //       sectionsContent.obj15.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
    
// ]

//   return (
//    <>
//    {/* <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
//   <meta property="og:title" content={seoData.title} />
//   <meta property="og:description" content={seoData.description} />
//   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//   <meta property="og:type" content="article" />
//   <meta property="og:site_name" content="Learn Math Class" />
  
//   <meta name="twitter:card" content="summary" />
//   <meta name="twitter:title" content={seoData.title} />
//   <meta name="twitter:description" content={seoData.description} />
  
//   <meta name="robots" content="index, follow" />
  
//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "WebPage",
//         "name": seoData.name,
//         "description": seoData.description,
//         "keywords": seoData.keywords,
//         "url": `https://www.learnmathclass.com${seoData.url}`,
//         "dateModified": new Date().toISOString(),
//         "inLanguage": "en-US",
//         "mainEntity": {
//           "@type": "Article",
//           "name": seoData.name,
//           "dateModified": new Date().toISOString(),
//           "author": {
//             "@type": "Organization",
//             "name": "Learn Math Class"
//           }
//         }
//       })
//     }}
//   />
// </Head> */}

// <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
//   <meta property="og:title" content={seoData.title} />
//   <meta property="og:description" content={seoData.description} />
//   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//   <meta property="og:type" content="article" />
//   <meta property="og:site_name" content="Learn Math Class" />
  
//   <meta name="twitter:card" content="summary" />
//   <meta name="twitter:title" content={seoData.title} />
//   <meta name="twitter:description" content={seoData.description} />
  
//   <meta name="robots" content="index, follow" />
  
//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.learningResource)
//     }}
//   />

//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.breadcrumb)
//     }}
//   />

//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.faq)
//     }}
//   />
// </Head>
//    {/* <GenericNavbar/> */}
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     <OperaSidebar 
//            side='right'
//            // topOffset='65px' 
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          /> 
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Orthogonality</h1>
//    <br/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}
//     showSecondaryNav={true}
//          secondaryNavMode="siblings"  // or "children"
//          secondaryNavTitle="More in this Section"
   
//    />
//    <br/>
//    <br/>
//    <br/>
//     <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           //  "#f2f2f2"
//           textColor="#06357a"
//         />
//    <br/>
//    <br/>
//    <Sections sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }



// tables-optimized: v4 | 2026-05-18 | 3 tables (obj4 aggregation, obj6 aggregation, obj10 summary capstone)
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../pages.css'

import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import subspacesDiagrams from '@/app/components/linear-algebra copy/matrix/subspacesDiagrams'
import NestedContainment from '@/app/components/infographics/NestedContainment/NestedContainment'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
import FormulaSheet from '@/app/components/infographics/FormulaSheet/FormulaSheet'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import MistakeFix from '@/app/components/infographics/MistakeFix/MistakeFix'


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

const linkStyle = 'color: inherit; text-decoration: underline;'

// ---------- TABLES ----------

// obj4 — aggregation: the four fundamental subspaces split into two orthogonal-complement pairs
const obj4Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Ambient space</th>
      <th style="${tableHeaders.aggregation}">Subspace</th>
      <th style="${tableHeaders.aggregation}">Its orthogonal complement</th>
      <th style="${tableHeaders.aggregation}">Dimension sum</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">ℝⁿ (the domain)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Row(A) — row space of A</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Null(A) — null space of A</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rank(A) + nullity(A) = n</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">ℝᵐ (the codomain)</td>
      <td style="padding: 12px 15px; color: #34495e;">Col(A) — column space of A</td>
      <td style="padding: 12px 15px; color: #34495e;">Null(Aᵀ) — left null space of A</td>
      <td style="padding: 12px 15px; color: #34495e;">rank(A) + (m − rank(A)) = m</td>
    </tr>
  </tbody>
</table>
`

// obj6 — aggregation: examples of inner products and what each one enables
const obj6Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Inner product</th>
      <th style="${tableHeaders.aggregation}">Definition</th>
      <th style="${tableHeaders.aggregation}">Setting</th>
      <th style="${tableHeaders.aggregation}">What it enables</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Standard dot product</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">u · v = Σ u<sub>i</sub> v<sub>i</sub></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℝⁿ with Euclidean geometry</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">standard lengths, angles, and perpendicularity</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Weighted inner product</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">⟨u, v⟩ = uᵀ W v (W symmetric positive definite)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ℝⁿ with distorted metric</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ellipsoidal geometry; statistics (e.g. Mahalanobis distance)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Function-space integral</td>
      <td style="padding: 12px 15px; color: #34495e;">⟨f, g⟩ = ∫<sub>a</sub><sup>b</sup> f(x) g(x) dx</td>
      <td style="padding: 12px 15px; color: #34495e;">spaces of square-integrable functions</td>
      <td style="padding: 12px 15px; color: #34495e;">Fourier series, orthogonal polynomials, signal decomposition</td>
    </tr>
  </tbody>
</table>
`

// obj10 — summary capstone: roadmap of the orthogonality subtree
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Topic</th>
      <th style="${tableHeaders.summary}">Key statement</th>
      <th style="${tableHeaders.summary}">Main formula or result</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Orthogonal vectors</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">u · v = 0 means u and v are perpendicular</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the dot-product-zero test</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Orthogonal complement W⊥</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">vectors perpendicular to every vector in W form a subspace</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">dim W + dim W⊥ = n; every v = w + w⊥ uniquely</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/orthogonality/inner-product" style="${linkStyle}">Inner product</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">generalizes the dot product to arbitrary vector spaces</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">symmetry, linearity, positive definiteness; induces norm, distance, Cauchy–Schwarz</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/orthogonality/orthogonal-sets" style="${linkStyle}">Orthogonal &amp; orthonormal sets</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">pairwise-perpendicular vectors are automatically independent</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">in an orthonormal basis, coordinates are free: c<sub>i</sub> = q<sub>i</sub> · v</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/orthogonality/projections" style="${linkStyle}">Projection</a> onto a subspace</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the closest point in W to a given b</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">projection matrix P = A(AᵀA)⁻¹Aᵀ; idempotent and symmetric</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/orthogonality/gram-schmidt" style="${linkStyle}">Gram–Schmidt process</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">converts any basis into an orthonormal one</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sequential projection subtraction; produces A = QR (<a href="/linear-algebra/decompositions/qr" style="${linkStyle}">QR decomposition</a>)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;"><a href="/linear-algebra/orthogonality/least-squares" style="${linkStyle}">Least squares</a></td>
      <td style="padding: 12px 15px; color: #34495e;">best approximate solution when A x = b has none</td>
      <td style="padding: 12px 15px; color: #34495e;">normal equations AᵀA x̂ = Aᵀb; A x̂ is the projection of b onto Col(A)</td>
    </tr>
  </tbody>
</table>
`


// Concept introduction (section 1, "What Orthogonality Means") — template E,
// widening. Running instance: pairs in R², R³ and R⁴; (1, 1, 1, 1) and
// (1, −1, 1, −1) are orthogonal though nothing can be drawn. Old obj1 text is
// kept in sectionsContent.obj1, unused; its formula box and three passages
// are carried in unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciPairTable = ciTableOpen(['pair', 'space', 'can be drawn?', 'dot product', 'at right angles?']) +
  ciRow(['(1, 2) and (−2, 1)', 'R²', 'yes', '0', 'yes']) +
  ciRow(['(3, 1) and (1, 2)', 'R²', 'yes', '5', 'no'], { shade: true }) +
  ciRow(['(1, 0, 1) and (0, 1, 0)', 'R³', 'yes, with care', '0', 'yes']) +
  ciRow(['(1, 1, 1, 1) and (1, −1, 1, −1)', 'R⁴', 'no', '0', 'yes, by the dot product'], { shade: true, last: true, color: '#2563EB', cols: [3, 4] }) +
  '</tbody></table>'

const sectionsContent = {
  obj1: {
    title: `What Orthogonality Means`,
    content: `Two vectors $\\mathbf{u}$ and $\\mathbf{v}$ in $\\mathbb{R}^n$ are orthogonal if their [dot product](!/linear-algebra/vectors/dot-product) is zero:

@academic[formula_callout:What Orthogonality Means
$$\\mathbf{u} \\cdot \\mathbf{v} = u_1 v_1 + u_2 v_2 + \\cdots + u_n v_n = 0$$]@

Geometrically, this means the angle between the two vectors is $90°$. The vectors are perpendicular — pointing in completely independent directions with no component of one lying along the other.

The zero vector is orthogonal to every vector, since $\\mathbf{0} \\cdot \\mathbf{v} = 0$ for all $\\mathbf{v}$. This is a convention that keeps the theory clean, not a geometric statement — the zero vector has no direction. Orthogonality is defined relative to an [inner product](!/linear-algebra/orthogonality/inner-product), and on this site the standard dot product is used unless stated otherwise.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Orthogonality in R² and R³`,
    content: `In $\\mathbb{R}^2$, the vectors $(a, b)$ and $(c, d)$ are orthogonal if and only if $ac + bd = 0$. The pair $(1, 2)$ and $(-2, 1)$ satisfies $1(-2) + 2(1) = 0$, so these vectors are perpendicular.

@academic[rule_plain:Rotating any vector by $90°$ produces an orthogonal partner: $(a, b)$ is orthogonal to $(-b, a)$.]@

In $\\mathbb{R}^3$, the standard basis vectors $\\mathbf{e}_1 = (1, 0, 0)$, $\\mathbf{e}_2 = (0, 1, 0)$, $\\mathbf{e}_3 = (0, 0, 1)$ are mutually orthogonal — every pair has dot product zero. The [cross product](!/linear-algebra/vectors/cross-product) $\\mathbf{a} \\times \\mathbf{b}$ produces a vector orthogonal to both $\\mathbf{a}$ and $\\mathbf{b}$, constructing perpendicularity from any two non-parallel inputs.

@academic[fact,aside:true,width:35%:No two cube diagonals are perpendicular
The long diagonals of a cube point along $(\\pm 1, \\pm 1, \\pm 1)$, and the dot product of two such vectors is a sum of three terms $\\pm 1$: an odd number, never $0$. A four-dimensional cube does have four mutually perpendicular diagonals, along $(1, 1, 1, 1)$, $(1, 1, -1, -1)$, $(1, -1, 1, -1)$ and $(1, -1, -1, 1)$.]@

Integer examples are easy to find in $\\mathbb{R}^3$ as well. Besides the standard basis, the vectors $(1, 2, 2)$, $(2, 1, -2)$ and $(2, -2, 1)$ are mutually orthogonal: the three pairs have dot products $2 + 2 - 4 = 0$, $2 - 4 + 2 = 0$ and $4 - 2 - 2 = 0$, and all three vectors have the same length $3$.

Orthogonality is the foundation of coordinate systems. Axes that are perpendicular allow each coordinate to be read independently — changing one coordinate does not affect any other. This independence is what makes orthogonal bases so powerful.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Orthogonal Complements`,
    content: `For a [subspace](!/linear-algebra/vector-spaces/subspaces) $W$ of $\\mathbb{R}^n$, the orthogonal complement $W^\\perp$ is the set of all vectors perpendicular to everything in $W$:

@academic[formula_callout:Orthogonal Complement Definition
$$W^\\perp = \\{\\mathbf{v} \\in \\mathbb{R}^n : \\mathbf{v} \\cdot \\mathbf{w} = 0 \\text{ for all } \\mathbf{w} \\in W\\}$$
/linear-algebra/formulas#orthogonal_complement_definition]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

@academic[rule_theorem_plain:The orthogonal complement is itself a subspace.]@

@academic[pitfall,aside:true,width:35%:Calling any perpendicular subspace the complement
Taking a subspace perpendicular to $W$ as $W^\\perp$: in $\\mathbb{R}^3$ the $y$-axis is perpendicular to the $x$-axis $W$, but the dimensions give $1 + 1 = 2 \\neq 3$. The complement $W^\\perp$ is the whole $yz$-plane, all vectors $(0, b, c)$.
[Read more](!#pitfall-calling-any-perpendicular-subspace-the-complement)]@

Its [dimension](!/linear-algebra/vector-spaces/dimension) satisfies $\\dim(W) + \\dim(W^\\perp) = n$, and taking the complement twice returns to the original: $(W^\\perp)^\\perp = W$.

The most important structural consequence is the orthogonal decomposition. Every vector $\\mathbf{v} \\in \\mathbb{R}^n$ can be written uniquely as

@academic[formula_callout:Orthogonal Complements
$$\\mathbf{v} = \\mathbf{w} + \\mathbf{w}^\\perp$$]@

@academic[fact,aside:true,width:35%:The double complement can outgrow $W$
In the space of sequences $(x_1, x_2, \\ldots)$ with $x_1^2 + x_2^2 + \\cdots$ finite, let $W$ hold the sequences with only finitely many nonzero entries. Every $(0, \\ldots, 0, 1, 0, \\ldots)$ lies in $W$, so only $\\mathbf{0}$ is perpendicular to all of $W$: $W^\\perp = \\{\\mathbf{0}\\}$, and $(W^\\perp)^\\perp$ is the whole space, which also holds $(1, \\frac{1}{2}, \\frac{1}{3}, \\ldots)$.]@

where $\\mathbf{w} \\in W$ and $\\mathbf{w}^\\perp \\in W^\\perp$. The two components are perpendicular to each other: $\\mathbf{w} \\cdot \\mathbf{w}^\\perp = 0$. This decomposition is the geometric heart of [projection](!/linear-algebra/orthogonality/projections): $\\mathbf{w}$ is the projection of $\\mathbf{v}$ onto $W$, and $\\mathbf{w}^\\perp$ is the residual.

Both dimension statements above are proved for $\\mathbb{R}^n$, where every subspace has a finite dimension. Orthogonal complements are defined in exactly the same way in spaces of infinite sequences, with the dot product replaced by the infinite sum $x_1 y_1 + x_2 y_2 + \\cdots$, and in spaces of functions, where it becomes an integral. There a subspace can have infinitely many independent directions, and the count $\\dim(W) + \\dim(W^\\perp) = n$ has no number $n$ to reach.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `The Four Fundamental Subspaces Revisited`,
    content: `The orthogonal complement structure appears naturally in the [four fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces) of any $m \\times n$ [matrix](!/linear-algebra/matrix) $A$.

In $\\mathbb{R}^n$, the row space and the null space are orthogonal complements:

@academic[formula_callout:The Four Fundamental Subspaces Revisited
$$\\text{Row}(A)^\\perp = \\text{Null}(A)$$]@

Every vector in the null space is perpendicular to every row of $A$, because $A\\mathbf{x} = \\mathbf{0}$ means the dot product of $\\mathbf{x}$ with each row is zero.

In $\\mathbb{R}^m$, the column space and the left null space are orthogonal complements:

@academic[formula_callout:The Four Fundamental Subspaces Revisited
$$\\text{Col}(A)^\\perp = \\text{Null}(A^T)$$]@

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

[Orthogonal matrices](!/linear-algebra/matrix/types) preserve lengths and angles, making them numerically stable in computation. The [Gram-Schmidt process](!/linear-algebra/orthogonality/gram-schmidt) converts any basis into an orthogonal one, ensuring these benefits are always available.

@academic[punchline:Perpendicular directions do not interfere, so each piece of a problem is solved on its own, with one dot product.]@`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Inner Products`,
    content: `The dot product is the standard way to measure angles and lengths in $\\mathbb{R}^n$, but it is not the only one. An [inner product](!/linear-algebra/orthogonality/inner-product) is any function $\\langle \\cdot, \\cdot \\rangle$ that satisfies symmetry, linearity, and positive definiteness. Different inner products define different notions of perpendicularity and distance.

A weighted inner product $\\langle \\mathbf{u}, \\mathbf{v} \\rangle = \\mathbf{u}^T W \\mathbf{v}$ (with $W$ symmetric positive definite) distorts the geometry — circles become ellipses, and "perpendicular" means something different than in the standard dot product. On function spaces, the integral $\\langle f, g \\rangle = \\int_a^b f(x)g(x)\\,dx$ defines orthogonality for functions, leading to Fourier series and orthogonal polynomials.

@academic[rule_theorem_plain:Every inner product induces a norm ($\\|\\mathbf{v}\\| = \\sqrt{\\langle \\mathbf{v}, \\mathbf{v} \\rangle}$), a distance ($d(\\mathbf{u}, \\mathbf{v}) = \\|\\mathbf{u} - \\mathbf{v}\\|$), and the Cauchy-Schwarz inequality ($|\\langle \\mathbf{u}, \\mathbf{v} \\rangle| \\leq \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|$).]@

The entire orthogonality framework — projections, Gram-Schmidt, least squares — works in any inner product space.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Orthogonal and Orthonormal Sets`,
    content: `An [orthogonal set](!/linear-algebra/orthogonality/orthogonal-sets) is a collection of vectors that are pairwise perpendicular: $\\mathbf{v}_i \\cdot \\mathbf{v}_j = 0$ whenever $i \\neq j$. An orthonormal set adds the requirement that each vector has unit length: $\\|\\mathbf{v}_i\\| = 1$.

@academic[rule_theorem_plain:Orthogonal sets of nonzero vectors are automatically [linearly independent](!/linear-algebra/vector-spaces/linear-independence) — no independence check is needed.]@

The proof is one line: if $\\sum c_i \\mathbf{v}_i = \\mathbf{0}$, dotting both sides with $\\mathbf{v}_j$ gives $c_j \\|\\mathbf{v}_j\\|^2 = 0$, forcing $c_j = 0$.

The computational advantage of an orthonormal basis $\\{\\mathbf{q}_1, \\dots, \\mathbf{q}_n\\}$ is that coordinates are free: $c_i = \\mathbf{q}_i \\cdot \\mathbf{v}$. No system of equations, no [row reduction](!/linear-algebra/linear-systems/gaussian-elimination), no matrix inversion — just $n$ dot products.

@academic[pitfall,aside:true,width:35%:Treating an orthogonal basis as orthonormal
Using $c_i = \\mathbf{v}_i \\cdot \\mathbf{v}$ with a basis that is orthogonal but not unit length: for $(1, 1)$, $(1, -1)$ and $\\mathbf{v} = (3, 1)$ it gives $c_1 = 4$, $c_2 = 2$, and $4(1, 1) + 2(1, -1) = (6, 2) \\neq \\mathbf{v}$. Dividing by $\\mathbf{v}_i \\cdot \\mathbf{v}_i = 2$ gives $c_1 = 2$, $c_2 = 1$.
[Read more](!#pitfall-treating-an-orthogonal-basis-as-orthonormal)]@

The formula relies on both halves of orthonormality. When $\\mathbf{v} = \\sum c_j \\mathbf{q}_j$ is dotted with $\\mathbf{q}_i$, pairwise perpendicularity removes every term except $c_i\\,\\mathbf{q}_i \\cdot \\mathbf{q}_i$, and unit length makes that term $c_i$ itself. Bases met in practice are often orthogonal without being normalized, such as $(1, 1)$ and $(1, -1)$ in $\\mathbb{R}^2$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Projections`,
    content: `The orthogonal [projection](!/linear-algebra/orthogonality/projections) of a vector $\\mathbf{b}$ onto a [subspace](!/linear-algebra/vector-spaces/subspaces) $W$ is the closest point in $W$ to $\\mathbf{b}$. It is the component of $\\mathbf{b}$ that lies in $W$, with the perpendicular remainder discarded.

For projection onto a single vector $\\mathbf{a}$: $\\text{proj}_{\\mathbf{a}}\\mathbf{b} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\mathbf{a} \\cdot \\mathbf{a}}\\mathbf{a}$. For projection onto a subspace with basis matrix $A$: $\\hat{\\mathbf{b}} = A(A^TA)^{-1}A^T\\mathbf{b}$.

@academic[rule_plain:The projection matrix $P = A(A^TA)^{-1}A^T$ is [symmetric](!/linear-algebra/matrix/types) and [idempotent](!/linear-algebra/matrix/types): $P^T = P$ and $P^2 = P$.]@

The residual $\\mathbf{b} - P\\mathbf{b}$ is orthogonal to $W$ — this is the defining geometric property. And $I - P$ projects onto the orthogonal complement $W^\\perp$.

@academic[pitfall,aside:true,width:35%:Splitting the inverse in P
Splitting $(A^TA)^{-1}$ into $A^{-1}(A^T)^{-1}$ collapses $P$ to $AA^{-1}(A^T)^{-1}A^T = I$. For $A = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$, $A^{-1}$ does not exist, and $P = \\frac{1}{2}\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$ sends $(1, 0)$ to $(\\frac{1}{2}, \\frac{1}{2})$, not to itself.
[Read more](!#pitfall-splitting-the-inverse-in-p)]@

The formula is built for a basis matrix $A$ of size $m \\times n$ with independent columns, usually with $m > n$, so $A$ is tall rather than square. The only matrix inverted is the $n \\times n$ product $A^TA$. For a single column $\\mathbf{a}$ that product is the number $\\mathbf{a} \\cdot \\mathbf{a}$, and $P = \\frac{\\mathbf{a}\\mathbf{a}^T}{\\mathbf{a} \\cdot \\mathbf{a}}$ reproduces the single-vector formula above.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Gram-Schmidt and Least Squares`,
    content: `The [Gram-Schmidt process](!/linear-algebra/orthogonality/gram-schmidt) converts any linearly independent set into an orthogonal (or orthonormal) set spanning the same subspace. It does this by sequentially subtracting projections: each new vector has its components along all previously computed directions removed, leaving only the perpendicular remainder.

@academic[pitfall,aside:true,width:35%:Projecting onto the original vectors
Subtracting projections onto the original $\\mathbf{v}_1, \\mathbf{v}_2$: for $(1, 1, 0)$, $(1, 0, 1)$, $(0, 1, 1)$ it gives $\\mathbf{u}_3 = (-1, \\frac{1}{2}, \\frac{1}{2})$, and $\\mathbf{u}_3 \\cdot \\mathbf{u}_1 = -\\frac{1}{2}$. Projecting onto $\\mathbf{u}_1 = (1, 1, 0)$ and $\\mathbf{u}_2 = (\\frac{1}{2}, -\\frac{1}{2}, 1)$ gives $\\mathbf{u}_3 = (-\\frac{2}{3}, \\frac{2}{3}, \\frac{2}{3})$.
[Read more](!#pitfall-projecting-onto-the-original-vectors)]@

Gram-Schmidt applied to the columns of a matrix $A$ produces the [QR decomposition](!/linear-algebra/decompositions/qr) $A = QR$, where $Q$ has orthonormal columns and $R$ is upper triangular. This decomposition is numerically superior to forming $A^TA$ directly and is the standard method for [least-squares](!/linear-algebra/orthogonality/least-squares) computation.

[Least squares](!/linear-algebra/orthogonality/least-squares) addresses the case where $A\\mathbf{x} = \\mathbf{b}$ has no exact solution. The best approximation $\\hat{\\mathbf{x}}$ minimizes $\\|A\\mathbf{x} - \\mathbf{b}\\|^2$ and satisfies the normal equations $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$. Geometrically, $A\\hat{\\mathbf{x}}$ is the projection of $\\mathbf{b}$ onto the column space of $A$ — the closest reachable point to the unreachable target.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Summary: Orthogonality at a Glance`,
    content: `This summary walks through the orthogonality topics of the page, one per row, in the order the page meets them. Each row names the topic, gives its main formula or result and states the key fact, with a line under the name linking to the section that explains it.

It starts from the test for perpendicular vectors and the orthogonal complement of a subspace, then the way the four fundamental subspaces pair up as complements. Inner products carry the same geometry to other spaces, orthonormal sets make coordinates free, and projection finds the closest point. Gram-Schmidt and least squares close the list.`,
    formulaSheetAfter: `Nearly every result here is one dot product equal to zero, used in a new setting. When a problem about closest points, coordinates or approximate solutions gets stuck, asking which vectors should be perpendicular usually shows the next step.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj11: {
    title: `Common Pitfalls`,
    content: `Four mistakes are common when the ideas of this page are first put to work. Each is marked with a box where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.`,
    before: ``,
    after: `Each slip loses a condition of orthogonality. $W^\\perp$ contains every vector perpendicular to $W$, so its dimension is $n - \\dim W$; coordinates in an orthogonal basis divide by $\\mathbf{q}_i \\cdot \\mathbf{q}_i$; $(A^TA)^{-1}$ cannot be split into inverses of non-square factors; and Gram-Schmidt projects onto the new orthogonal vectors. Counting dimensions, rebuilding the vector, or dotting the result with each earlier vector catches each slip.`,
    link: ``,
  },
}


const introContent = {
  title: `Perpendicularity and Its Consequences`,
  content: `Orthogonality — the condition that two vectors are perpendicular — is the geometric idea that makes linear algebra computationally clean. Orthogonal bases turn coordinate-finding into dot products. Projections onto subspaces become explicit formulas. Least-squares approximation reduces to a single matrix equation. Every simplification traces back to the same root: when vectors are perpendicular, their interactions vanish and problems decouple.

For step-by-step results on your own numbers, use the [Gram–Schmidt](https://calculatematrix.com/matrix-calculators/gram-schmidt) and [vector projection](https://calculatematrix.com/vector-calculators/vector-projection) calculators on CalculateMatrix.`,
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


  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const conceptIntroFigures = {
    pairTable: ciPairTable,
  };

  const demoUnits = {
    // Hub page: one unit, on the section where orthogonality stops
    // being a property of pairs and becomes a property of whole spaces.
    foursubspaces: demoUnitFrame({
      svg: subspacesDiagrams.orth,
      caption: 'Two orthogonal pairings of whole subspaces',
      text: 'Row space against null space, column space against left null space. Every vector in one is orthogonal to every vector in its partner, and each pair fills the space between them, so any vector splits uniquely across the pair. Orthogonality has stopped being a relation between two arrows and become the architecture of the space. Check both pairings on the',
      href: '/linear-algebra/visual-tools/four-fundamental-subspaces',
      linkText: 'four fundamental subspaces visualizer',
    }),
  };

  const orthoNest = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'Each condition narrows the set',
    preface: 'A set of vectors that is orthonormal is automatically orthogonal, and an orthogonal set of nonzero vectors is automatically linearly independent.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'Why orthonormal bases are prized',
    conclusion: 'In an orthonormal basis the coordinates of a vector are just dot products with the basis vectors. See [orthogonal sets](!/linear-algebra/orthogonality/orthogonal-sets).',
    levels: [
      { id: 'on', symbol: 'ON', name: 'Orthonormal sets', note: 'orthogonal, and every vector has unit length' },
      { id: 'og', symbol: '⊥', name: '[Orthogonal sets](!/linear-algebra/orthogonality/orthogonal-sets)', note: 'nonzero vectors, pairwise $\\mathbf{v}_i \\cdot \\mathbf{v}_j = 0$' },
      { id: 'li', symbol: 'LI', name: '[Linearly independent sets](!/linear-algebra/vector-spaces/linear-independence)', note: 'no vector is a combination of the others' },
    ],
  };

  // FAQ pass 2026-11-01: new FAQ section (the page had none). Section overview,
  // so only what this page holds and no child page asks: orthogonal versus
  // perpendicular (intro), the (a, b) / (-b, a) rule and the cube-diagonal fact
  // box under R2 and R3, and the complement pitfall and the double-complement
  // fact box under Orthogonal Complements.
  const faqQuestions = {
    obj1: {
      question: "Is orthogonal the same as perpendicular?",
      answer: "In the plane and in space, yes: two nonzero vectors are orthogonal exactly when they meet at $90°$. Beyond three dimensions there is no picture to check, so the dot product becomes the definition: $(1, 1, 1, 1)$ and $(1, -1, 1, -1)$ are orthogonal in $\\mathbb{R}^4$ because $1 - 1 + 1 - 1 = 0$. One difference remains: by convention the zero vector is orthogonal to every vector, although it has no direction to be perpendicular to.",
      sectionId: "1"
    },
    obj2: {
      question: "How do you find a vector perpendicular to a given vector?",
      answer: "In the plane, swap the two entries and change one sign: $(a, b)$ is orthogonal to $(-b, a)$, since $a(-b) + ba = 0$. This is the vector turned through $90°$; for example, $(1, 2)$ gives $(-2, 1)$. In $\\mathbb{R}^3$ a single vector has a whole plane of perpendicular partners, and the cross product $\\mathbf{a} \\times \\mathbf{b}$ gives one vector perpendicular to two non-parallel vectors at once.",
      sectionId: "2"
    },
    obj3: {
      question: "Are any two diagonals of a cube perpendicular?",
      answer: "No. With the cube's centre at the origin, the long diagonals point along $(\\pm 1, \\pm 1, \\pm 1)$, and the dot product of two of them is a sum of three terms $\\pm 1$. A sum of three odd numbers is odd, so it is never $0$. A four-dimensional cube does have four mutually perpendicular diagonals, along $(1, 1, 1, 1)$, $(1, 1, -1, -1)$, $(1, -1, 1, -1)$ and $(1, -1, -1, 1)$, because four terms $\\pm 1$ can cancel.",
      sectionId: "2"
    },
    obj4: {
      question: "Is a subspace perpendicular to $W$ always its orthogonal complement?",
      answer: "No. $W^\\perp$ holds every vector perpendicular to $W$, and a perpendicular subspace may hold only some of them. In $\\mathbb{R}^3$ the $y$-axis is perpendicular to the $x$-axis, but the complement of the $x$-axis is the whole $yz$-plane, all vectors $(0, b, c)$. A dimension count catches the error: $\\dim W + \\dim W^\\perp$ must equal $n$, and $1 + 1 = 2$ falls short of $3$. Two perpendicular lines in $\\mathbb{R}^2$ pass the count, which is why the mistake looks safe there.",
      sectionId: "3"
    },
    obj5: {
      question: "Is the orthogonal complement of $W^\\perp$ always $W$?",
      answer: "In $\\mathbb{R}^n$, yes: $(W^\\perp)^\\perp = W$ for every subspace. In infinite-dimensional spaces it can fail. In the space of sequences with $x_1^2 + x_2^2 + \\cdots$ finite, let $W$ hold the sequences with only finitely many nonzero entries. Every $(0, \\ldots, 0, 1, 0, \\ldots)$ lies in $W$, so only $\\mathbf{0}$ is perpendicular to all of $W$, and $(W^\\perp)^\\perp$ is the whole space. It contains $(1, \\frac{1}{2}, \\frac{1}{3}, \\ldots)$, which is not in $W$.",
      sectionId: "3"
    }
  }

  // MistakeFix batch 22, 2026-11-04: the "Common Pitfalls" entries, moved word for word
  // out of sectionsContent.obj11 into the MistakeFix data (trace layout).
  const pitfallData = {
    mistakes: [
      { id: 'calling-any-perpendicular-subspace-the-complement', name: `Calling any perpendicular subspace the complement`, errorAt: 1,
        what: `A subspace that is perpendicular to $W$ is taken to be $W^\\perp$. But $W^\\perp$ contains every vector perpendicular to $W$, and a perpendicular subspace may hold only some of them.`,
        wrong: [`In $\\mathbb{R}^3$ let $W$ be the $x$-axis, spanned by $(1, 0, 0)$.`, `The $y$-axis, spanned by $(0, 1, 0)$, is perpendicular to it, since $(1, 0, 0) \\cdot (0, 1, 0) = 0$, so it is declared to be $W^\\perp = \\text{Span}\\{(0, 1, 0)\\}$.`],
        right: [`In $\\mathbb{R}^3$ let $W$ be the $x$-axis, spanned by $(1, 0, 0)$.`, `A vector $\\mathbf{v} = (a, b, c)$ lies in $W^\\perp$ exactly when $\\mathbf{v} \\cdot (1, 0, 0) = a = 0$. So
$$W^\\perp = \\{(0, b, c) : b, c \\in \\mathbb{R}\\}$$`, `The whole $yz$-plane, which contains the $y$-axis, the $z$-axis and every line between them.`],
        why: `In $\\mathbb{R}^2$ a line perpendicular to a line really is its complement, and that picture is carried over to higher dimensions. The phrases "orthogonal subspaces" and "orthogonal complement" also sound alike.`,
        check: `Count dimensions. $\\dim W + \\dim W^\\perp$ must equal $n$. The $x$-axis and the $y$-axis give $1 + 1 = 2$, not $3$; the $x$-axis and the $yz$-plane give $1 + 2 = 3$.` },
      { id: 'treating-an-orthogonal-basis-as-orthonormal', name: `Treating an orthogonal basis as orthonormal`, errorAt: 0,
        what: `The shortcut $c_i = \\mathbf{q}_i \\cdot \\mathbf{v}$ is applied to a basis that is orthogonal but not unit length. Each coordinate then comes out multiplied by the squared length of its basis vector.`,
        wrong: [`Basis $\\mathbf{v}_1 = (1, 1)$, $\\mathbf{v}_2 = (1, -1)$, vector $\\mathbf{v} = (3, 1)$.`, `$$c_1 = \\mathbf{v}_1 \\cdot \\mathbf{v} = 4,$$
$$c_2 = \\mathbf{v}_2 \\cdot \\mathbf{v} = 2,$$
$$4(1, 1) + 2(1, -1) = (6, 2)$$`],
        right: [`Divide each dot product by $\\mathbf{v}_i \\cdot \\mathbf{v}_i$.`, `$$c_1 = \\frac{\\mathbf{v}_1 \\cdot \\mathbf{v}}{\\mathbf{v}_1 \\cdot \\mathbf{v}_1} = \\frac{4}{2}$$
$$= 2,$$
$$c_2 = \\frac{\\mathbf{v}_2 \\cdot \\mathbf{v}}{\\mathbf{v}_2 \\cdot \\mathbf{v}_2} = \\frac{2}{2}$$
$$= 1,$$
$$2(1, 1) + 1(1, -1) = (3, 1)$$`],
        why: `"orthogonal" and "orthonormal" differ by a few letters, and the dot-product formula is usually quoted for the orthonormal case only. Dotting with $\\mathbf{v}_i$ removes the other terms in both cases, but only unit length removes the factor $\\|\\mathbf{v}_i\\|^2$.`,
        check: `Rebuild the vector from its coordinates. The wrong coordinates give $(6, 2) = 2\\mathbf{v}$, too long by exactly $\\|\\mathbf{v}_i\\|^2 = 2$.` },
      { id: 'splitting-the-inverse-in-p', name: `Splitting the inverse in P`, errorAt: 0,
        what: `The rule for inverting a product is applied to $(A^TA)^{-1}$, giving $A^{-1}(A^T)^{-1}$. Everything then cancels, and every projection matrix comes out as the identity.`,
        wrong: [`$$P = A(A^TA)^{-1}A^T$$
$$= AA^{-1}(A^T)^{-1}A^T = I$$`],
        right: [`For $A = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$, whose column spans the line through $(1, 1)$,
$$A^TA = 2,$$
$$P = \\frac{1}{2}\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}\\begin{pmatrix} 1 & 1 \\end{pmatrix}$$
$$= \\frac{1}{2}\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix},$$
$$P\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 1/2 \\\\ 1/2 \\end{pmatrix}$$`],
        why: `The rule $(BC)^{-1} = C^{-1}B^{-1}$ is correct, but only when each factor is square and invertible. Here $A$ is $2 \\times 1$ and has no inverse; only the product $A^TA$ does.`,
        check: `A projection onto a subspace smaller than the whole space cannot be the identity, since vectors outside $W$ must move. Its rank must equal $\\dim W$: here $P$ has rank $1$, while $I$ has rank $2$. The split is valid only when $A$ is square and invertible, and then $W$ is the whole space and $P = I$ is correct.` },
      { id: 'projecting-onto-the-original-vectors', name: `Projecting onto the original vectors`, errorAt: 0,
        what: `In Gram-Schmidt, the third vector has its projections onto the original $\\mathbf{v}_1$ and $\\mathbf{v}_2$ removed, instead of its projections onto the new $\\mathbf{u}_1$ and $\\mathbf{u}_2$. Since $\\mathbf{v}_1$ and $\\mathbf{v}_2$ are not perpendicular to each other, the two subtractions interfere and the result is not orthogonal to them.`,
        wrong: [`$\\mathbf{v}_1 = (1, 1, 0)$, $\\mathbf{v}_2 = (1, 0, 1)$, $\\mathbf{v}_3 = (0, 1, 1)$.`, `$$\\mathbf{u}_3$$
$$= \\mathbf{v}_3 - \\frac{\\mathbf{v}_3 \\cdot \\mathbf{v}_1}{\\mathbf{v}_1 \\cdot \\mathbf{v}_1}\\mathbf{v}_1$$
$$- \\frac{\\mathbf{v}_3 \\cdot \\mathbf{v}_2}{\\mathbf{v}_2 \\cdot \\mathbf{v}_2}\\mathbf{v}_2$$
$$= (0, 1, 1) - \\tfrac{1}{2}(1, 1, 0)$$
$$- \\tfrac{1}{2}(1, 0, 1)$$
$$= (-1, \\tfrac{1}{2}, \\tfrac{1}{2})$$`],
        right: [`First $\\mathbf{u}_1 = \\mathbf{v}_1 = (1, 1, 0)$ and $\\mathbf{u}_2 = \\mathbf{v}_2 - \\frac{1}{2}\\mathbf{u}_1 = (\\frac{1}{2}, -\\frac{1}{2}, 1)$, with $\\mathbf{v}_3 \\cdot \\mathbf{u}_2 = \\frac{1}{2}$ and $\\mathbf{u}_2 \\cdot \\mathbf{u}_2 = \\frac{3}{2}$. Then
$$\\mathbf{u}_3 = \\mathbf{v}_3 - \\tfrac{1}{2}\\mathbf{u}_1 - \\tfrac{1}{3}\\mathbf{u}_2$$
$$= (0, 1, 1) - (\\tfrac{1}{2}, \\tfrac{1}{2}, 0)$$
$$- (\\tfrac{1}{6}, -\\tfrac{1}{6}, \\tfrac{1}{3})$$
$$= (-\\tfrac{2}{3}, \\tfrac{2}{3}, \\tfrac{2}{3})$$`],
        why: `The original vectors are the ones written down in the problem, and "subtract the projections" does not say onto which vectors. For the second vector there is no difference, because $\\mathbf{u}_1 = \\mathbf{v}_1$, so the slip only shows from the third vector on.`,
        check: `Dot the result with every earlier $\\mathbf{u}_j$. The wrong vector gives $(-1, \\frac{1}{2}, \\frac{1}{2}) \\cdot (1, 1, 0) = -\\frac{1}{2}$. The right one gives $(-\\frac{2}{3}, \\frac{2}{3}, \\frac{2}{3}) \\cdot (1, 1, 0) = 0$ and $(-\\frac{2}{3}, \\frac{2}{3}, \\frac{2}{3}) \\cdot (\\frac{1}{2}, -\\frac{1}{2}, 1) = 0$.` },
    ],
  };

  // Formula Summary 2026-11-07: the page's own formulas, replacing the summary table summaryTable.
  const formulaSummaryData = {
    theme: { title: '#06357A', navy: '#06357A', blue: '#2563EB', gold: '#B45309', goldInk: '#B45309' },
    columns: [
      { key: 'name', label: 'Topic', kind: 'name' },
      { key: 'formula', label: 'Main formula or result', kind: 'formula' },
      { key: 'says', label: 'Key statement' },
    ],
    rows: [
      { name: 'Orthogonal vectors', formula: '$\\mathbf{u} \\cdot \\mathbf{v} = 0$', says: '$\\mathbf{u}$ and $\\mathbf{v}$ are perpendicular exactly when their dot product is zero',
        sub: 'The dot-product-zero test, from [what orthogonality means](!#1).' },
      { name: 'Orthogonal complement', formula: '$\\dim W + \\dim W^\\perp = n$, and every $\\mathbf{v} = \\mathbf{w} + \\mathbf{w}^\\perp$ uniquely', says: 'the vectors perpendicular to every vector in $W$ form a subspace $W^\\perp$',
        sub: 'Its dimension count and the unique split of every vector come from [orthogonal complements](!#3).' },
      { name: 'Four fundamental subspaces', formula: '$\\text{Row}(A)^\\perp = \\text{Null}(A), \\quad \\text{Col}(A)^\\perp = \\text{Null}(A^T)$', says: 'the row space and null space are complements in $\\mathbb{R}^n$, the column space and left null space in $\\mathbb{R}^m$',
        sub: 'The two pairs of complements behind projection, from [the four fundamental subspaces revisited](!#4).' },
      { name: 'Inner product', formula: '$\\|\\mathbf{v}\\| = \\sqrt{\\langle \\mathbf{v}, \\mathbf{v} \\rangle}$, $d(\\mathbf{u}, \\mathbf{v}) = \\|\\mathbf{u} - \\mathbf{v}\\|$, $|\\langle \\mathbf{u}, \\mathbf{v} \\rangle| \\leq \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|$', says: 'generalizes the dot product to any vector space and induces a norm, a distance and the Cauchy-Schwarz inequality',
        sub: 'Any product with symmetry, linearity and positive definiteness, as [inner products](!#6) explains.' },
      { name: 'Orthogonal and orthonormal sets', formula: '$c_i = \\mathbf{q}_i \\cdot \\mathbf{v}$ in an orthonormal basis', says: 'pairwise-perpendicular nonzero vectors are automatically independent',
        sub: 'In an orthonormal basis the coordinates come free, as [orthogonal and orthonormal sets](!#7) shows.' },
      { name: 'Projection onto a subspace', formula: '$P = A(A^TA)^{-1}A^T$, with $P^2 = P$ and $P^T = P$', says: 'gives the closest point in $W$ to a given $\\mathbf{b}$',
        sub: 'The projection matrix is idempotent and symmetric, from [projections](!#8).' },
      { name: 'Gram-Schmidt process', formula: '$A = QR$', says: 'converts any basis into an orthonormal one by subtracting projections one after another',
        sub: 'Applied to the columns of $A$ it produces the QR decomposition, as [Gram-Schmidt and least squares](!#9) explains.' },
      { name: 'Least squares', formula: '$A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$', says: 'the best approximate solution when $A\\mathbf{x} = \\mathbf{b}$ has none',
        sub: 'The normal equations, where $A\\hat{\\mathbf{x}}$ is the projection of $\\mathbf{b}$ onto $\\text{Col}(A)$, from [Gram-Schmidt and least squares](!#9).' },
    ],
  };

return {
  props:{
    formulaSummaryData,
    pitfallData,
    faqQuestions,
    orthoNest,
    demoUnits,
    conceptIntroFigures,
    sectionsContent,
    introContent,
    obj4Table,
    obj6Table,
    summaryTable,
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
export default function OrthogonalityPage({ formulaSummaryData, pitfallData,faqQuestions, orthoNest,
  seoData,
  sectionsContent,
  introContent,
  obj4Table,
  obj6Table,
  summaryTable,
  schemas, demoUnits, conceptIntroFigures
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 1 concept introduction — template E (widening).
  const conceptIntro = {
    beats: [
      {
        id: 'intuition',
        lead: `In the plane, two arrows are perpendicular when they meet at a right angle — something a set square can check.`,
        content: [
          `The test works as long as the arrows can be drawn. In four or more dimensions there is nothing to put a set square against.`,
        ],
      },
      {
        id: 'example',
        kind: 'instance',
        tone: 'break',
        lead: `In R⁴ the picture is gone — yet the dot product still gives a clear answer.`,
        content: [
          ciTable('pairTable'),
          `In the rows that can be drawn, the dot product agrees with the picture: it is $0$ exactly when the angle is $90°$. That makes it a test that works where pictures do not.`,
        ],
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `Two vectors are [orthogonal](!/linear-algebra/definitions#orthogonal_vectors) when their dot product is $0$.`,
        formula: [
          `Two vectors $\\mathbf{u}$ and $\\mathbf{v}$ in $\\mathbb{R}^n$ are orthogonal if their [dot product](!/linear-algebra/vectors/dot-product) is zero:`,
          `@academic[formula_callout:What Orthogonality Means
$$\\mathbf{u} \\cdot \\mathbf{v} = u_1 v_1 + u_2 v_2 + \\cdots + u_n v_n = 0$$]@`,
        ],
        footer: `So $(1, 1, 1, 1)$ and $(1, -1, 1, -1)$ are orthogonal in $\\mathbb{R}^4$: $1 - 1 + 1 - 1 = 0$.`,
      },
      {
        id: 'kind',
        lead: `Orthogonality is perpendicularity carried into any number of dimensions.`,
        content: [
          `Geometrically, this means the angle between the two vectors is $90°$. The vectors are perpendicular — pointing in completely independent directions with no component of one lying along the other.`,
        ],
      },
      {
        id: 'survives',
        lead: `Nothing is lost in the plane and in space: there, orthogonal means exactly "at a right angle".`,
        content: [
          `$(1, 2)$ and $(-2, 1)$ are orthogonal and also visibly perpendicular. More examples in two and three dimensions are in [orthogonality in R² and R³](!/linear-algebra/orthogonality#2).`,
        ],
      },
      {
        id: 'caveat',
        lead: `What is new: the zero vector counts as orthogonal to every vector.`,
        content: [
          `The zero vector is orthogonal to every vector, since $\\mathbf{0} \\cdot \\mathbf{v} = 0$ for all $\\mathbf{v}$. This is a convention that keeps the theory clean, not a geometric statement — the zero vector has no direction. Orthogonality is defined relative to an [inner product](!/linear-algebra/orthogonality/inner-product), and on this site the standard dot product is used unless stated otherwise.`,
        ],
      },
      {
        id: 'exit',
        content: `The rest of the page covers orthogonality in two and three dimensions, orthogonal complements, the four fundamental subspaces, why orthogonality matters, and inner products.`,
      },
    ],
  }

  const genericSections=[
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          <ConceptIntro key={'obj1-intro'} data={conceptIntro} />,
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
          <div
            key={'obj4-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj4Table }}
          />,
                  <div key={'unit-foursubspaces'} dangerouslySetInnerHTML={{ __html: demoUnits.foursubspaces }} />,
          `Projections, Gram-Schmidt and least squares in the sections below are all built on this decomposition.`,
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
          <div
            key={'obj6-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj6Table }}
          />,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
          <DiagramFrame
            key={'obj7-diagram'}
            id="orthonormal-orthogonal-nesting"
            title="Orthonormal, orthogonal, independent"
            source="/linear-algebra/orthogonality"
          >
            <NestedContainment data={orthoNest} />
          </DiagramFrame>,
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
        id:'pitfalls',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
          <DiagramFrame
            key={'obj11-mistakes'}
            id="orthogonality-pitfalls"
            title="Common pitfalls with orthogonality"
            source="/linear-algebra/orthogonality"
            after={sectionsContent.obj11.after}
          >
            <MistakeFix data={pitfallData} variant="trace" />
          </DiagramFrame>,
        ]
    },
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
          <DiagramFrame
            key={'formula-summary'}
            id="orthogonality-overview-formula-summary"
            title="Orthogonality at a glance"
            source="/linear-algebra/orthogonality"
            related={{ href: '/linear-algebra/formulas', label: 'All linear algebra formulas' }}
            after={sectionsContent.obj10.formulaSheetAfter}
          >
            <FormulaSheet data={formulaSummaryData} variant="card" />
          </DiagramFrame>,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Orthogonality FAQ`,
        link:``,
        content:[
          <div key={'faq-wrap'} style={{width:'80%',margin:'auto'}}>
            <FAQSection
              faqQuestions={faqQuestions}
              theme={'leftBorder'}
              width={'100%'}
              openFirst={false}
            />
          </div>,
        ]
    },
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Orthogonality</h1>
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