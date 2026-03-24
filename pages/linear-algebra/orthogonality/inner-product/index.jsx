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
  "inner product",
  "dot product linear algebra",
  "inner product space",
  "Cauchy-Schwarz inequality",
  "triangle inequality vectors",
  "angle between vectors",
  "vector norm length",
  "Euclidean distance vectors",
  "Pythagorean theorem vectors",
  "weighted inner product",
  "positive definiteness",
  "unit vector normalization",
  "inner product axioms",
  "Fourier inner product functions"
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
    title: `The Dot Product`,
    content: `The dot product of two vectors $\\mathbf{u} = (u_1, \\dots, u_n)$ and $\\mathbf{v} = (v_1, \\dots, v_n)$ in $\\mathbb{R}^n$ is

$$\\mathbf{u} \\cdot \\mathbf{v} = u_1 v_1 + u_2 v_2 + \\cdots + u_n v_n = \\mathbf{u}^T\\mathbf{v}$$

The result is a scalar, not a [vector](!/linear-algebra/vectors). The matrix form $\\mathbf{u}^T\\mathbf{v}$ treats $\\mathbf{u}$ as a $1 \\times n$ row and $\\mathbf{v}$ as an $n \\times 1$ column, making the dot product a $1 \\times 1$ [matrix multiplication](!/linear-algebra/matrix/operations).

For $\\mathbf{u} = (2, -1, 3, 0)$ and $\\mathbf{v} = (1, 4, -2, 5)$: $\\mathbf{u} \\cdot \\mathbf{v} = 2(1) + (-1)(4) + 3(-2) + 0(5) = 2 - 4 - 6 + 0 = -8$.

The dot product is the standard inner product on $\\mathbb{R}^n$. It is the measuring tool that defines lengths, angles, distances, and perpendicularity throughout finite-dimensional linear algebra.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Properties of the Dot Product`,
    content: `The dot product satisfies three fundamental properties.

Symmetry: $\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{v} \\cdot \\mathbf{u}$. The order does not matter.

Linearity: $(c\\mathbf{u} + d\\mathbf{w}) \\cdot \\mathbf{v} = c(\\mathbf{u} \\cdot \\mathbf{v}) + d(\\mathbf{w} \\cdot \\mathbf{v})$. The dot product distributes over addition and pulls scalars out. Combined with symmetry, it is linear in both arguments (bilinear).

Positive definiteness: $\\mathbf{v} \\cdot \\mathbf{v} \\geq 0$ for all $\\mathbf{v}$, with equality if and only if $\\mathbf{v} = \\mathbf{0}$. The quantity $\\mathbf{v} \\cdot \\mathbf{v} = v_1^2 + v_2^2 + \\cdots + v_n^2$ is a sum of squares, which is zero only when every component is zero.

These three properties — symmetry, linearity, positive definiteness — are not just useful observations. They are the axioms that define an inner product in the abstract setting.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Length`,
    content: `The length (or norm) of a vector $\\mathbf{v}$ is

$$\\|\\mathbf{v}\\| = \\sqrt{\\mathbf{v} \\cdot \\mathbf{v}} = \\sqrt{v_1^2 + v_2^2 + \\cdots + v_n^2}$$

This is the Euclidean norm — the generalization of the Pythagorean theorem to $n$ dimensions. In $\\mathbb{R}^2$, $\\|(3, 4)\\| = \\sqrt{9 + 16} = 5$. In $\\mathbb{R}^3$, $\\|(1, 2, 2)\\| = \\sqrt{1 + 4 + 4} = 3$.

The norm satisfies $\\|\\mathbf{v}\\| \\geq 0$ with equality only for $\\mathbf{v} = \\mathbf{0}$, and $\\|c\\mathbf{v}\\| = |c|\\|\\mathbf{v}\\|$ — scaling a vector scales its length by the absolute value of the scalar.

A unit vector has $\\|\\mathbf{v}\\| = 1$. Any nonzero vector can be normalized — replaced by $\\hat{\\mathbf{v}} = \\mathbf{v}/\\|\\mathbf{v}\\|$, which points in the same direction with length $1$. Normalization preserves direction and discards magnitude.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Distance`,
    content: `The distance between two vectors $\\mathbf{u}$ and $\\mathbf{v}$ is the length of their difference:

$$d(\\mathbf{u}, \\mathbf{v}) = \\|\\mathbf{u} - \\mathbf{v}\\| = \\sqrt{(u_1 - v_1)^2 + (u_2 - v_2)^2 + \\cdots + (u_n - v_n)^2}$$

This is the Euclidean distance — the straight-line separation between two points in $\\mathbb{R}^n$.

Distance satisfies the properties of a metric: $d(\\mathbf{u}, \\mathbf{v}) \\geq 0$ with equality only when $\\mathbf{u} = \\mathbf{v}$; $d(\\mathbf{u}, \\mathbf{v}) = d(\\mathbf{v}, \\mathbf{u})$ (symmetry); and $d(\\mathbf{u}, \\mathbf{w}) \\leq d(\\mathbf{u}, \\mathbf{v}) + d(\\mathbf{v}, \\mathbf{w})$ (triangle inequality). Every inner product induces a distance through this formula, and the resulting distance always satisfies these metric properties.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Angle Between Vectors`,
    content: `For nonzero vectors $\\mathbf{u}$ and $\\mathbf{v}$, the angle $\\theta$ between them satisfies

$$\\cos\\theta = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|}$$

The Cauchy-Schwarz inequality (next section) guarantees that the right-hand side lies between $-1$ and $1$, so the formula always produces a well-defined angle $\\theta \\in [0, \\pi]$.

When $\\cos\\theta = 1$ ($\\theta = 0$), the vectors point in the same direction. When $\\cos\\theta = -1$ ($\\theta = \\pi$), they point in opposite directions. When $\\cos\\theta = 0$ ($\\theta = \\pi/2$), the vectors are orthogonal.

The orthogonality condition $\\mathbf{u} \\cdot \\mathbf{v} = 0$ is the case $\\theta = 90°$. The dot product encodes the full metric geometry of $\\mathbb{R}^n$: length from $\\mathbf{v} \\cdot \\mathbf{v}$, angle from $\\mathbf{u} \\cdot \\mathbf{v}$, and distance from $(\\mathbf{u} - \\mathbf{v}) \\cdot (\\mathbf{u} - \\mathbf{v})$.

For $\\mathbf{u} = (1, 2, 3)$ and $\\mathbf{v} = (4, -1, 2)$: $\\mathbf{u} \\cdot \\mathbf{v} = 4 - 2 + 6 = 8$, $\\|\\mathbf{u}\\| = \\sqrt{14}$, $\\|\\mathbf{v}\\| = \\sqrt{21}$. So $\\cos\\theta = 8/\\sqrt{294} \\approx 0.467$, giving $\\theta \\approx 62.2°$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `The Cauchy-Schwarz Inequality`,
    content: `For all vectors $\\mathbf{u}$ and $\\mathbf{v}$ in $\\mathbb{R}^n$:

$$|\\mathbf{u} \\cdot \\mathbf{v}| \\leq \\|\\mathbf{u}\\| \\, \\|\\mathbf{v}\\|$$

Equality holds if and only if one vector is a scalar multiple of the other — they are parallel.

The proof considers the expression $\\|\\mathbf{u} - t\\mathbf{v}\\|^2 \\geq 0$ for all $t \\in \\mathbb{R}$. Expanding: $\\|\\mathbf{u}\\|^2 - 2t(\\mathbf{u} \\cdot \\mathbf{v}) + t^2\\|\\mathbf{v}\\|^2 \\geq 0$. This is a quadratic in $t$ that is non-negative everywhere, so its discriminant must be non-positive: $4(\\mathbf{u} \\cdot \\mathbf{v})^2 - 4\\|\\mathbf{u}\\|^2\\|\\mathbf{v}\\|^2 \\leq 0$. Rearranging gives Cauchy-Schwarz.

The inequality is what makes the angle formula legitimate. It guarantees $-1 \\leq \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|} \\leq 1$, so $\\cos\\theta$ takes a valid value. Without Cauchy-Schwarz, the angle formula could produce numbers outside $[-1, 1]$, and the geometric interpretation would collapse.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `The Triangle Inequality`,
    content: `For all vectors $\\mathbf{u}$ and $\\mathbf{v}$ in $\\mathbb{R}^n$:

$$\\|\\mathbf{u} + \\mathbf{v}\\| \\leq \\|\\mathbf{u}\\| + \\|\\mathbf{v}\\|$$

The length of one side of a triangle never exceeds the sum of the other two. Equality holds if and only if $\\mathbf{u}$ and $\\mathbf{v}$ point in the same direction (one is a non-negative scalar multiple of the other).

The proof follows from Cauchy-Schwarz. Square both sides: $\\|\\mathbf{u} + \\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 + 2\\mathbf{u} \\cdot \\mathbf{v} + \\|\\mathbf{v}\\|^2 \\leq \\|\\mathbf{u}\\|^2 + 2\\|\\mathbf{u}\\|\\|\\mathbf{v}\\| + \\|\\mathbf{v}\\|^2 = (\\|\\mathbf{u}\\| + \\|\\mathbf{v}\\|)^2$. The key step uses $\\mathbf{u} \\cdot \\mathbf{v} \\leq |\\mathbf{u} \\cdot \\mathbf{v}| \\leq \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|$.

The triangle inequality is essential for the distance function $d(\\mathbf{u}, \\mathbf{v}) = \\|\\mathbf{u} - \\mathbf{v}\\|$ to satisfy the metric axioms. It ensures that going from $\\mathbf{u}$ to $\\mathbf{w}$ directly is never longer than going via $\\mathbf{v}$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `General Inner Products`,
    content: `An inner product on a [vector space](!/linear-algebra/vector-spaces) $V$ is a function $\\langle \\cdot, \\cdot \\rangle: V \\times V \\to \\mathbb{R}$ satisfying three [axioms](!/linear-algebra/vector-spaces/axioms):

Symmetry: $\\langle \\mathbf{u}, \\mathbf{v} \\rangle = \\langle \\mathbf{v}, \\mathbf{u} \\rangle$.

Linearity in the first argument: $\\langle c\\mathbf{u} + d\\mathbf{w}, \\mathbf{v} \\rangle = c\\langle \\mathbf{u}, \\mathbf{v} \\rangle + d\\langle \\mathbf{w}, \\mathbf{v} \\rangle$.

Positive definiteness: $\\langle \\mathbf{v}, \\mathbf{v} \\rangle > 0$ for all $\\mathbf{v} \\neq \\mathbf{0}$.

A vector space equipped with an inner product is called an inner product space. Every inner product induces a norm ($\\|\\mathbf{v}\\| = \\sqrt{\\langle \\mathbf{v}, \\mathbf{v} \\rangle}$), a distance ($d(\\mathbf{u}, \\mathbf{v}) = \\|\\mathbf{u} - \\mathbf{v}\\|$), and a notion of orthogonality ($\\mathbf{u} \\perp \\mathbf{v}$ iff $\\langle \\mathbf{u}, \\mathbf{v} \\rangle = 0$). The Cauchy-Schwarz inequality, the triangle inequality, and the Pythagorean theorem all hold in any inner product space.

The standard dot product on $\\mathbb{R}^n$ is one inner product. But the definition admits many others, each defining a different geometry on the same set of vectors.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Examples of Inner Products`,
    content: `The weighted inner product on $\\mathbb{R}^n$ is $\\langle \\mathbf{u}, \\mathbf{v} \\rangle = \\mathbf{u}^T W \\mathbf{v}$, where $W$ is a [symmetric](!/linear-algebra/matrix/types) positive definite [matrix](!/linear-algebra/matrix). This distorts the standard geometry — unit circles become ellipses, and "perpendicular" directions depend on $W$. When $W = I$, it reduces to the standard dot product.

On the polynomial space $\\mathcal{P}_n$, the inner product $\\langle p, q \\rangle = \\int_{-1}^{1} p(x)q(x)\\,dx$ defines orthogonality via integration. The polynomials $1$, $x$, and $\\frac{1}{2}(3x^2 - 1)$ are orthogonal under this product — these are the first three Legendre polynomials.

On the function space $C[0, 2\\pi]$, the inner product $\\langle f, g \\rangle = \\int_0^{2\\pi} f(x)g(x)\\,dx$ makes sines and cosines orthogonal: $\\int_0^{2\\pi} \\sin(mx)\\cos(nx)\\,dx = 0$ for all integers $m, n$. This is the foundation of Fourier analysis.

The [Frobenius inner product](!/linear-algebra/matrix/trace) on matrices is $\\langle A, B \\rangle = \\text{tr}(A^TB) = \\sum_{ij} a_{ij}b_{ij}$, which treats matrices as vectors of $n^2$ entries.

Each inner product defines its own geometry, but the linear algebra — [projections](!/linear-algebra/orthogonality/projections), [Gram-Schmidt](!/linear-algebra/orthogonality/gram-schmidt), [least squares](!/linear-algebra/orthogonality/least-squares) — works identically in all of them.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `The Pythagorean Theorem`,
    content: `If $\\mathbf{u}$ and $\\mathbf{v}$ are orthogonal ($\\mathbf{u} \\cdot \\mathbf{v} = 0$), then

$$\\|\\mathbf{u} + \\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2$$

The proof is a one-line expansion: $\\|\\mathbf{u} + \\mathbf{v}\\|^2 = \\mathbf{u} \\cdot \\mathbf{u} + 2\\mathbf{u} \\cdot \\mathbf{v} + \\mathbf{v} \\cdot \\mathbf{v} = \\|\\mathbf{u}\\|^2 + 0 + \\|\\mathbf{v}\\|^2$.

The theorem extends to any number of mutually orthogonal vectors: if $\\mathbf{v}_1, \\dots, \\mathbf{v}_k$ are pairwise orthogonal, then

$$\\|\\mathbf{v}_1 + \\mathbf{v}_2 + \\cdots + \\mathbf{v}_k\\|^2 = \\|\\mathbf{v}_1\\|^2 + \\|\\mathbf{v}_2\\|^2 + \\cdots + \\|\\mathbf{v}_k\\|^2$$

All cross terms vanish because every pair has dot product zero. This is not a special property of $\\mathbb{R}^2$ or $\\mathbb{R}^3$ — it holds in any inner product space. The Pythagorean theorem is a direct consequence of the inner product axioms, and it is the reason that orthogonal decompositions are so computationally clean: lengths decompose into independent, additive contributions from each perpendicular direction.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

 const introContent = {
  title: `Measuring Length, Angle, and Distance`,
  content: `The dot product assigns a scalar to every pair of vectors, encoding their lengths, the angle between them, and whether they are perpendicular. It is one instance of a broader concept — the inner product — that carries the same geometric structure into polynomial spaces, function spaces, and matrix spaces. Every notion of orthogonality on this site traces back to an inner product.`,
}

const faqQuestions = {
  obj1: {
    question: "What is the dot product of two vectors?",
    answer: "The dot product of u and v in Rⁿ is u·v = u₁v₁ + u₂v₂ + ⋯ + uₙvₙ, producing a scalar. It can also be written as the matrix product uᵀv. The dot product defines lengths, angles, distances, and perpendicularity in finite-dimensional linear algebra.",
    sectionId: "1"
  },
  obj2: {
    question: "How do you find the angle between two vectors?",
    answer: "The angle θ between nonzero vectors u and v satisfies cos θ = (u·v)/(‖u‖‖v‖). The Cauchy-Schwarz inequality guarantees this ratio lies between −1 and 1. When the dot product is zero, the angle is 90° and the vectors are orthogonal.",
    sectionId: "5"
  },
  obj3: {
    question: "What is the Cauchy-Schwarz inequality?",
    answer: "The Cauchy-Schwarz inequality states |u·v| ≤ ‖u‖‖v‖ for all vectors u and v. Equality holds if and only if the vectors are parallel. It ensures the angle formula always produces a valid cosine value and is fundamental to proving the triangle inequality.",
    sectionId: "6"
  },
  obj4: {
    question: "What is an inner product space?",
    answer: "An inner product space is a vector space equipped with an inner product — a function satisfying symmetry, linearity, and positive definiteness. Every inner product induces a norm, a distance, and a notion of orthogonality. The standard dot product on Rⁿ is one example; integrals on function spaces and weighted products are others.",
    sectionId: "8"
  },
  obj5: {
    question: "What is the Pythagorean theorem for vectors?",
    answer: "If vectors u and v are orthogonal (u·v = 0), then ‖u + v‖² = ‖u‖² + ‖v‖². This extends to any number of mutually orthogonal vectors — all cross terms vanish. It holds in any inner product space and is why orthogonal decompositions produce cleanly additive length contributions.",
    sectionId: "10"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Inner Products and Dot Products",
    "description": "Inner products in linear algebra: dot product, vector length, distance, angles, Cauchy-Schwarz inequality, triangle inequality, general inner product spaces, and the Pythagorean theorem.",
    "url": "https://www.learnmathclass.com/linear-algebra/orthogonality/inner-product",
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
      "name": "Inner Products"
    },
    "teaches": [
      "Dot product definition and matrix form",
      "Symmetry, linearity, and positive definiteness",
      "Vector length, unit vectors, and normalization",
      "Euclidean distance and the angle formula",
      "Cauchy-Schwarz and triangle inequalities",
      "General inner product spaces and examples",
      "Pythagorean theorem for orthogonal vectors"
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
        "name": "Inner Product",
        "item": "https://www.learnmathclass.com/linear-algebra/orthogonality/inner-product"
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
  //       title: "Inner Product | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/linear-algebra/orthogonality/inner-product",
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
      title: "Inner Product: Dot Product, Norms & Angles | Learn Math Class",
      description: "Inner products in linear algebra: dot product, vector length, distance, angles, Cauchy-Schwarz inequality, triangle inequality, general inner product spaces, and the Pythagorean theorem.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/orthogonality/inner-product",
      name: "Inner Products and Dot Products"
    },
  }
}
   }

// export default function InnerProductPage({seoData,sectionsContent , introContent}) {
export default function InnerProductPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Inner Product</h1>
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
