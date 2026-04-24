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
  "geometric transformations linear algebra",
  "rotation matrix",
  "reflection matrix",
  "projection matrix geometric",
  "shear transformation",
  "scaling matrix",
  "rotation matrix R2 R3",
  "Householder reflection",
  "determinant area volume",
  "orthogonal transformation",
  "transformation matrix columns",
  "combining linear transformations",
  "rotation angle matrix formula",
  "geometric interpretation determinant"
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
    title: `How to Read a Transformation Matrix`,
    content: `The geometric effect of a [matrix](!/linear-algebra/matrix) $A$ is revealed by two pieces of information: what it does to the standard [basis](!/linear-algebra/vector-spaces) vectors (the columns) and what its [determinant](!/linear-algebra/determinants) is.

Column $1$ is the image of $\\mathbf{e}_1 = (1, 0)$ in $\\mathbb{R}^2$ or $(1, 0, 0)$ in $\\mathbb{R}^3$. Column $2$ is the image of $\\mathbf{e}_2$. The matrix maps the standard grid to the parallelogram (or parallelepiped) spanned by these column vectors.

The absolute value $|\\det(A)|$ measures how the transformation scales areas (in $\\mathbb{R}^2$) or volumes (in $\\mathbb{R}^3$). The sign of $\\det(A)$ indicates orientation: positive means the transformation preserves handedness, negative means it reverses it. An [orthogonal](!/linear-algebra/matrix/types) matrix ($\\det = \\pm 1$) preserves all lengths and angles — it is a rigid motion.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Scaling`,
    content: `Uniform scaling multiplies every coordinate by the same factor: $T(\\mathbf{x}) = c\\mathbf{x}$, with matrix $cI$. When $c > 1$ the transformation enlarges, when $0 < c < 1$ it shrinks, and when $c < 0$ it reflects through the origin and scales.

Non-uniform scaling stretches each axis independently. In $\\mathbb{R}^2$, $T(x, y) = (c_1 x, c_2 y)$ has matrix $\\text{diag}(c_1, c_2)$. The horizontal axis is scaled by $c_1$ and the vertical by $c_2$. A unit square maps to a rectangle with side lengths $|c_1|$ and $|c_2|$.

The [determinant](!/linear-algebra/determinants/geometry) is $c^n$ for uniform scaling and $c_1 c_2$ (or $c_1 c_2 c_3$) for non-uniform. When any scaling factor is zero, the transformation collapses that axis entirely and the determinant is zero.

In $\\mathbb{R}^3$, $\\text{diag}(c_1, c_2, c_3)$ scales each coordinate axis independently. The unit cube maps to a rectangular box with side lengths $|c_1|$, $|c_2|$, $|c_3|$ and volume $|c_1 c_2 c_3|$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Rotations in R²`,
    content: `Rotation by angle $\\theta$ counterclockwise about the origin has matrix

$$R_\\theta = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$$

The first column $R_\\theta \\mathbf{e}_1 = (\\cos\\theta, \\sin\\theta)$ is the image of $(1, 0)$ — the point on the unit circle at angle $\\theta$. The second column $R_\\theta \\mathbf{e}_2 = (-\\sin\\theta, \\cos\\theta)$ is the image of $(0, 1)$ — the point at angle $\\theta + 90°$.

The determinant is $\\cos^2\\theta + \\sin^2\\theta = 1$ for every $\\theta$: rotations preserve areas and orientation. The matrix is [orthogonal](!/linear-algebra/matrix/types): $R_\\theta^T R_\\theta = I$, so lengths and angles are preserved. The inverse is $R_\\theta^{-1} = R_{-\\theta} = R_\\theta^T$ — rotating backward by the same angle.

Rotations compose by adding angles: $R_\\alpha R_\\beta = R_{\\alpha + \\beta}$. This follows from the trigonometric addition formulas and corresponds to the fact that rotating by $\\beta$ then by $\\alpha$ is the same as rotating by $\\alpha + \\beta$.

Common cases: $R_{90°} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$, $R_{180°} = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$, $R_{45°} = \\frac{1}{\\sqrt{2}}\\begin{pmatrix} 1 & -1 \\\\ 1 & 1 \\end{pmatrix}$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Rotations in R³`,
    content: `In three dimensions, a rotation is specified by an axis and an angle. Rotation by $\\theta$ about the $z$-axis leaves the $z$-coordinate unchanged and rotates the $xy$-plane:

$$R_z(\\theta) = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta & 0 \\\\ \\sin\\theta & \\cos\\theta & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$$

Rotations about the $x$-axis and $y$-axis have the same $2 \\times 2$ rotation block embedded in different positions:

$$R_x(\\theta) = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & \\cos\\theta & -\\sin\\theta \\\\ 0 & \\sin\\theta & \\cos\\theta \\end{pmatrix}, \\quad R_y(\\theta) = \\begin{pmatrix} \\cos\\theta & 0 & \\sin\\theta \\\\ 0 & 1 & 0 \\\\ -\\sin\\theta & 0 & \\cos\\theta \\end{pmatrix}$$

Every $3 \\times 3$ rotation matrix is orthogonal with determinant $+1$. The axis of rotation is the [eigenvector](!/linear-algebra/eigen) with eigenvalue $1$ — the direction that remains fixed. Any rotation in $\\mathbb{R}^3$ can be decomposed into rotations about the coordinate axes (Euler angles), though the decomposition is not unique.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Reflections in R²`,
    content: `Reflection across the $x$-axis flips the $y$-coordinate: $T(x, y) = (x, -y)$, with matrix $\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$.

Reflection across the $y$-axis flips the $x$-coordinate: matrix $\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$.

Reflection across the line $y = x$ swaps coordinates: matrix $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$.

Reflection across an arbitrary line through the origin at angle $\\alpha$ has matrix

$$H_\\alpha = \\begin{pmatrix} \\cos 2\\alpha & \\sin 2\\alpha \\\\ \\sin 2\\alpha & -\\cos 2\\alpha \\end{pmatrix}$$

All reflection matrices share the same properties: the determinant is $-1$ (orientation-reversing, area-preserving), the matrix is [orthogonal](!/linear-algebra/matrix/types) (lengths and angles preserved), and the matrix is [involutory](!/linear-algebra/matrix/types) ($H^2 = I$) — reflecting twice returns every vector to its starting point. The [eigenvalues](!/linear-algebra/eigen) are $+1$ (vectors on the mirror line) and $-1$ (vectors perpendicular to it).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Reflections in R³`,
    content: `Reflection across a coordinate plane negates the coordinate perpendicular to that plane. Reflection across the $xy$-plane: $\\text{diag}(1, 1, -1)$. Across the $xz$-plane: $\\text{diag}(1, -1, 1)$. Across the $yz$-plane: $\\text{diag}(-1, 1, 1)$.

Reflection across an arbitrary plane through the origin with unit normal $\\mathbf{n}$ is given by the Householder matrix:

$$H = I - 2\\mathbf{n}\\mathbf{n}^T$$

This matrix subtracts twice the component of each vector in the direction of $\\mathbf{n}$, effectively mirroring across the plane perpendicular to $\\mathbf{n}$. Householder reflections are orthogonal, have determinant $-1$, and satisfy $H^2 = I$. They are the building blocks of the [QR decomposition](!/linear-algebra/decompositions/qr) and are widely used in numerical algorithms.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Projections`,
    content: `Orthogonal [projection](!/linear-algebra/orthogonality/projections) onto a subspace collapses each vector onto its nearest point in the subspace, discarding the perpendicular component.

Projection onto the $x$-axis in $\\mathbb{R}^2$: $T(x, y) = (x, 0)$, with matrix $\\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}$.

Projection onto a line through the origin in direction $\\mathbf{u}$:

$$P = \\frac{\\mathbf{u}\\mathbf{u}^T}{\\mathbf{u}^T\\mathbf{u}}$$

Projection onto a plane with unit normal $\\mathbf{n}$ in $\\mathbb{R}^3$:

$$P = I - \\frac{\\mathbf{n}\\mathbf{n}^T}{\\mathbf{n}^T\\mathbf{n}}$$

All orthogonal projection matrices share the same algebraic signature: $P^2 = P$ ([idempotent](!/linear-algebra/matrix/types) — projecting twice is the same as projecting once), $P^T = P$ (symmetric), [eigenvalues](!/linear-algebra/eigen) are $0$ and $1$, and $\\text{rank}(P) = \\text{tr}(P)$. The determinant is $0$ unless the projection is onto the full space — projections always collapse at least one dimension.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Shears`,
    content: `A shear displaces each point in proportion to its distance from a fixed line or plane. In $\\mathbb{R}^2$, a horizontal shear shifts the $x$-coordinate by $k$ times the $y$-coordinate:

$$T(x, y) = (x + ky, \\; y), \\quad \\text{matrix } \\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}$$

A vertical shear shifts the $y$-coordinate by $k$ times the $x$-coordinate:

$$T(x, y) = (x, \\; kx + y), \\quad \\text{matrix } \\begin{pmatrix} 1 & 0 \\\\ k & 1 \\end{pmatrix}$$

Both are [triangular](!/linear-algebra/matrix/types) matrices with determinant $1$: shears are area-preserving and orientation-preserving. They are not orthogonal — angles are distorted. A square sheared horizontally becomes a parallelogram of the same area but with tilted sides.

In $\\mathbb{R}^3$, there are six possible shear directions (each coordinate shifted by a multiple of each other coordinate). Each is represented by an identity matrix with one off-diagonal entry replaced by $k$. Shears are fundamental building blocks — any invertible matrix with determinant $1$ can be written as a product of shears.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Combining Transformations`,
    content: `Composing transformations corresponds to [multiplying](!/linear-algebra/matrix/operations) their matrices. A rotation followed by a scaling is $SA$ where $S$ is the scaling matrix and $A$ is the rotation matrix. The product is applied right-to-left: $A$ acts first, then $S$.

Order matters. Rotating then shearing produces a different result from shearing then rotating: $\\text{Shear} \\cdot \\text{Rotation} \\neq \\text{Rotation} \\cdot \\text{Shear}$ in general.

The [singular value decomposition](!/linear-algebra/decompositions/svd) reveals the hidden geometric structure of any matrix: $A = U\\Sigma V^T$, where $V^T$ is a rotation (or rotation-reflection), $\\Sigma$ is a coordinate-axis scaling, and $U$ is another rotation (or rotation-reflection). Every linear transformation is a rotation, followed by a scaling along the coordinate axes, followed by another rotation. The singular values in $\\Sigma$ measure the maximum stretching in each orthogonal direction.

This decomposition means no linear transformation is truly exotic — even the most complex-looking matrix is just three simple geometric operations composed together.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Determinant as Geometric Signature`,
    content: `The [determinant](!/linear-algebra/determinants/geometry) classifies every linear transformation by its effect on size and orientation.

$|\\det(A)|$ is the factor by which the transformation scales areas (in $\\mathbb{R}^2$) or volumes (in $\\mathbb{R}^3$). A unit square maps to a parallelogram of area $|\\det(A)|$. A unit cube maps to a parallelepiped of volume $|\\det(A)|$.

$\\det(A) > 0$: the transformation preserves orientation. Counterclockwise stays counterclockwise in $\\mathbb{R}^2$; right-handed stays right-handed in $\\mathbb{R}^3$. Rotations and shears fall in this category.

$\\det(A) < 0$: the transformation reverses orientation. Counterclockwise becomes clockwise; right-handed becomes left-handed. Reflections are the canonical example.

$\\det(A) = 0$: the transformation collapses at least one dimension. The image is a proper subspace — a line or point in $\\mathbb{R}^2$, a plane, line, or point in $\\mathbb{R}^3$. Projections onto proper subspaces and singular matrices fall here.

$|\\det(A)| = 1$: the transformation preserves area or volume. Rotations ($\\det = +1$) and reflections ($\\det = -1$) are the area-preserving and volume-preserving transformations. Shears also have $\\det = 1$, preserving area despite distorting angles.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

 const introContent = {
  title: `Rotations, Reflections, Projections, and More`,
  content: `In R² and R³, linear transformations have concrete geometric meanings. Each has an explicit matrix encoding its action: rotations spin, reflections mirror, projections flatten, shears skew, and scalings stretch or compress. The determinant of the matrix classifies the transformation by how it affects area, volume, and orientation.`,
}

const faqQuestions = {
  obj1: {
    question: "What is the rotation matrix in R²?",
    answer: "The matrix for counterclockwise rotation by angle θ about the origin is [[cos θ, −sin θ], [sin θ, cos θ]]. It is orthogonal with determinant 1, preserving lengths, angles, and orientation. Rotations compose by adding angles: R_α · R_β = R_(α+β).",
    sectionId: "3"
  },
  obj2: {
    question: "What is a reflection matrix?",
    answer: "A reflection matrix mirrors vectors across a line (in R²) or plane (in R³). Reflection across a line at angle α has matrix [[cos 2α, sin 2α], [sin 2α, −cos 2α]]. All reflection matrices are orthogonal, have determinant −1, and satisfy H² = I — reflecting twice returns to the original.",
    sectionId: "5"
  },
  obj3: {
    question: "What is a shear transformation?",
    answer: "A shear displaces each point proportionally to its distance from a fixed line or plane. A horizontal shear in R² has matrix [[1, k], [0, 1]], shifting x-coordinates by k times the y-coordinate. Shears have determinant 1, so they preserve area despite distorting angles.",
    sectionId: "8"
  },
  obj4: {
    question: "How does the determinant classify geometric transformations?",
    answer: "The absolute value |det(A)| gives the area or volume scaling factor. Positive determinant means orientation is preserved, negative means reversed. Determinant ±1 means area/volume is preserved (rotations, reflections, shears). Determinant 0 means the transformation collapses at least one dimension.",
    sectionId: "10"
  },
  obj5: {
    question: "How do you combine geometric transformations?",
    answer: "Composing transformations corresponds to multiplying their matrices, applied right-to-left. Order matters: rotating then shearing differs from shearing then rotating. The SVD reveals that every linear transformation decomposes into a rotation, a coordinate-axis scaling, and another rotation.",
    sectionId: "9"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Geometric Transformations",
    "description": "Geometric transformations in linear algebra: rotation, reflection, projection, shear, and scaling matrices in R² and R³. Determinant as geometric signature and SVD decomposition.",
    "url": "https://www.learnmathclass.com/linear-algebra/transformations/geometric",
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
      "name": "Geometric Transformations"
    },
    "teaches": [
      "Reading a transformation from its matrix columns",
      "Scaling matrices: uniform and non-uniform",
      "Rotation matrices in R² and R³",
      "Reflection matrices and Householder reflections",
      "Projection matrices as geometric operations",
      "Shear transformations and their properties",
      "Composing transformations via matrix multiplication",
      "Determinant as area/volume scaling and orientation indicator"
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
        "name": "Transformations",
        "item": "https://www.learnmathclass.com/linear-algebra/transformations"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Geometric Transformations",
        "item": "https://www.learnmathclass.com/linear-algebra/transformations/geometric"
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
//         url: "/linear-algebra/transformations/geometric",
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
      title: "Geometric Transformations: Matrices in R² & R³ | Learn Math Class",
      description: "Geometric transformations in linear algebra: rotation, reflection, projection, shear, and scaling matrices in R² and R³. Determinant as geometric signature and SVD decomposition.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/transformations/geometric",
      name: "Geometric Transformations"
    },
  }
}   

}


// export default function PageTemplate({seoData,sectionsContent , introContent}) {
export default function GeometricTransformationsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Geometric Transformations</h1>
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
