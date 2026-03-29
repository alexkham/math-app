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
  "orthogonal sets",
  "orthonormal sets",
  "orthogonal basis",
  "orthonormal basis",
  "orthogonal matrix",
  "coordinates dot product",
  "Kronecker delta orthonormal",
  "orthogonal vectors independent",
  "Parseval's identity",
  "Bessel's inequality",
  "QR decomposition orthonormal columns",
  "orthogonal matrix properties",
  "unit vectors basis",
  "pairwise perpendicular vectors"
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
    title: `Orthogonal Sets`,
    content: `A set of vectors $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_k\\}$ is orthogonal if every pair has [dot product](!/linear-algebra/vectors/dot-product) zero:

$$\\mathbf{v}_i \\cdot \\mathbf{v}_j = 0 \\quad \\text{for all } i \\neq j$$

The vectors in an orthogonal set must all be nonzero — the zero vector is excluded because including it would trivialize the structure (every vector is orthogonal to $\\mathbf{0}$, so $\\mathbf{0}$ carries no directional information).

For example, $\\{(1, 0, 0), (0, 2, 0), (0, 0, -3)\\}$ is orthogonal in $\\mathbb{R}^3$: every pair of distinct vectors has dot product zero. The vectors need not have the same length, and their lengths can be anything nonzero.

A less obvious example: $\\{(1, 1, 1), (1, -2, 1), (1, 0, -1)\\}$. Checking: $(1)(1) + (1)(-2) + (1)(1) = 0$, $(1)(1) + (1)(0) + (1)(-1) = 0$, $(1)(1) + (-2)(0) + (1)(-1) = 0$. All three pairwise products vanish — the set is orthogonal despite none of the vectors being aligned with the coordinate axes.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Orthogonal Sets Are Independent`,
    content: `Every orthogonal set of nonzero vectors is [linearly independent](!/linear-algebra/vector-spaces/linear-independence). The proof is short and reveals exactly why orthogonality is so powerful.

Suppose $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}$. Dot both sides with $\\mathbf{v}_j$:

$$c_1(\\mathbf{v}_1 \\cdot \\mathbf{v}_j) + c_2(\\mathbf{v}_2 \\cdot \\mathbf{v}_j) + \\cdots + c_k(\\mathbf{v}_k \\cdot \\mathbf{v}_j) = 0$$

Every term with $i \\neq j$ vanishes because $\\mathbf{v}_i \\cdot \\mathbf{v}_j = 0$. Only the $j$-th term survives: $c_j \\|\\mathbf{v}_j\\|^2 = 0$. Since $\\mathbf{v}_j \\neq \\mathbf{0}$, $\\|\\mathbf{v}_j\\|^2 > 0$, so $c_j = 0$. This works for every $j$, so all coefficients are zero.

The key mechanism is that orthogonality isolates each coefficient. Dotting with $\\mathbf{v}_j$ kills every other term, leaving $c_j$ alone. This is why orthogonal bases make coordinates computable by individual dot products — the same isolation principle that proves independence also extracts coordinates.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Orthonormal Sets`,
    content: `An orthonormal set is an orthogonal set where every vector additionally has unit length: $\\|\\mathbf{v}_i\\| = 1$ for all $i$. The two conditions together can be written compactly using the Kronecker delta:

$$\\mathbf{v}_i \\cdot \\mathbf{v}_j = \\delta_{ij} = \\begin{cases} 1 & \\text{if } i = j \\\\ 0 & \\text{if } i \\neq j \\end{cases}$$

Any orthogonal set can be made orthonormal by normalizing each vector: $\\hat{\\mathbf{v}}_i = \\mathbf{v}_i / \\|\\mathbf{v}_i\\|$. The directions are preserved, only the lengths change to $1$.

The standard [basis](!/linear-algebra/vector-spaces) $\\{\\mathbf{e}_1, \\mathbf{e}_2, \\dots, \\mathbf{e}_n\\}$ for $\\mathbb{R}^n$ is orthonormal: $\\mathbf{e}_i \\cdot \\mathbf{e}_j = \\delta_{ij}$ because each basis vector has a single $1$ in a different position. It is the simplest orthonormal set, but far from the only one.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Orthogonal and Orthonormal Bases`,
    content: `An orthogonal basis is an orthogonal set that [spans](!/linear-algebra/vector-spaces/span) the space. An orthonormal basis is an orthonormal set that spans the space.

In $\\mathbb{R}^n$, an orthogonal set of $n$ nonzero vectors is automatically a basis — independence is guaranteed by orthogonality, and $n$ independent vectors in an $n$-dimensional space automatically span. So the only check needed is: do I have $n$ pairwise-orthogonal nonzero vectors? If yes, they form a basis.

Orthonormal bases exist for every finite-dimensional [inner product](!/linear-algebra/orthogonality/inner-product) space. The [Gram-Schmidt process](!/linear-algebra/orthogonality/gram-schmidt) constructs one from any given basis. This means the computational advantages of orthonormal bases are always available — any space that has a basis at all has an orthonormal one.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Coordinates via Dot Products`,
    content: `The defining computational advantage of orthogonal bases is that coordinates are extracted by individual dot products.

For an orthogonal basis $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_n\\}$, the coordinate of $\\mathbf{x}$ along $\\mathbf{v}_i$ is

$$c_i = \\frac{\\mathbf{x} \\cdot \\mathbf{v}_i}{\\mathbf{v}_i \\cdot \\mathbf{v}_i}$$

For an orthonormal basis $\\{\\mathbf{q}_1, \\dots, \\mathbf{q}_n\\}$, the denominator is $1$, and the formula simplifies to

$$c_i = \\mathbf{x} \\cdot \\mathbf{q}_i$$

No [linear system](!/linear-algebra/linear-systems) needs to be solved. No [matrix](!/linear-algebra/matrix) needs to be inverted. Each coordinate is computed independently by a single dot product.

## Worked Example

Let $\\{\\mathbf{q}_1, \\mathbf{q}_2, \\mathbf{q}_3\\}$ be an orthonormal basis for $\\mathbb{R}^3$ with $\\mathbf{q}_1 = \\frac{1}{\\sqrt{2}}(1, 1, 0)$, $\\mathbf{q}_2 = \\frac{1}{\\sqrt{6}}(1, -1, 2)$, $\\mathbf{q}_3 = \\frac{1}{\\sqrt{3}}(-1, 1, 1)$.

For $\\mathbf{x} = (3, 1, 2)$: $c_1 = \\mathbf{x} \\cdot \\mathbf{q}_1 = \\frac{1}{\\sqrt{2}}(3 + 1 + 0) = \\frac{4}{\\sqrt{2}} = 2\\sqrt{2}$, $c_2 = \\mathbf{x} \\cdot \\mathbf{q}_2 = \\frac{1}{\\sqrt{6}}(3 - 1 + 4) = \\frac{6}{\\sqrt{6}} = \\sqrt{6}$, $c_3 = \\mathbf{x} \\cdot \\mathbf{q}_3 = \\frac{1}{\\sqrt{3}}(-3 + 1 + 2) = 0$.

So $\\mathbf{x} = 2\\sqrt{2}\\,\\mathbf{q}_1 + \\sqrt{6}\\,\\mathbf{q}_2 + 0 \\cdot \\mathbf{q}_3$. The zero third coordinate means $\\mathbf{x}$ has no component in the $\\mathbf{q}_3$ direction — it is orthogonal to $\\mathbf{q}_3$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Orthogonal Matrices`,
    content: `An $n \\times n$ [matrix](!/linear-algebra/matrix) $Q$ is [orthogonal](!/linear-algebra/matrix/types) if its columns form an orthonormal set. This is equivalent to $Q^TQ = QQ^T = I$, which is equivalent to $Q^{-1} = Q^T$.

The rows of an orthogonal matrix also form an orthonormal set — orthogonality of columns and rows go together.

The [determinant](!/linear-algebra/determinants) of an orthogonal matrix is $\\pm 1$, since $1 = \\det(I) = \\det(Q^TQ) = \\det(Q)^2$. When $\\det(Q) = +1$, the matrix represents a [rotation](!/linear-algebra/linear-transformations/geometric-transformations). When $\\det(Q) = -1$, it represents a rotation composed with a reflection.

The defining geometric property is that orthogonal matrices preserve the dot product: $(Q\\mathbf{u}) \\cdot (Q\\mathbf{v}) = (Q\\mathbf{u})^T(Q\\mathbf{v}) = \\mathbf{u}^TQ^TQ\\mathbf{v} = \\mathbf{u}^T\\mathbf{v} = \\mathbf{u} \\cdot \\mathbf{v}$. Preserving the dot product automatically preserves lengths ($\\|Q\\mathbf{x}\\| = \\|\\mathbf{x}\\|$), angles, and distances. An orthogonal matrix is a rigid motion of $\\mathbb{R}^n$ — it rearranges vectors without distorting any geometric relationship.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Matrices with Orthonormal Columns`,
    content: `An $m \\times n$ matrix $Q$ with $m > n$ can have orthonormal columns without being square. Such a matrix satisfies $Q^TQ = I_n$ but $QQ^T \\neq I_m$ (the product $QQ^T$ is $m \\times m$ and has [rank](!/linear-algebra/matrix/rank) $n < m$).

The matrix $QQ^T$ is the [projection](!/linear-algebra/orthogonality/projections) matrix onto the column space of $Q$. For any $\\mathbf{b} \\in \\mathbb{R}^m$, the vector $QQ^T\\mathbf{b}$ is the orthogonal projection of $\\mathbf{b}$ onto the $n$-dimensional subspace spanned by the columns of $Q$.

These rectangular matrices with orthonormal columns are the natural output of the [Gram-Schmidt process](!/linear-algebra/orthogonality/gram-schmidt) applied to the columns of a matrix. If $A$ is $m \\times n$ with independent columns, Gram-Schmidt produces an $m \\times n$ matrix $Q$ with orthonormal columns and an $n \\times n$ upper [triangular](!/linear-algebra/matrix/types) matrix $R$ such that $A = QR$. This is the thin [QR decomposition](!/linear-algebra/decompositions/qr).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Parseval's Identity and Bessel's Inequality`,
    content: `For an orthonormal basis $\\{\\mathbf{q}_1, \\dots, \\mathbf{q}_n\\}$ of $\\mathbb{R}^n$ and any vector $\\mathbf{x}$, the coordinates $c_i = \\mathbf{x} \\cdot \\mathbf{q}_i$ satisfy Parseval's identity:

$$\\|\\mathbf{x}\\|^2 = c_1^2 + c_2^2 + \\cdots + c_n^2 = \\sum_{i=1}^{n} (\\mathbf{x} \\cdot \\mathbf{q}_i)^2$$

The squared length of $\\mathbf{x}$ equals the sum of the squares of its coordinates. This is the [Pythagorean theorem](!/linear-algebra/orthogonality/inner-products) applied to the orthonormal decomposition $\\mathbf{x} = c_1\\mathbf{q}_1 + \\cdots + c_n\\mathbf{q}_n$.

When the orthonormal set does not span — when $k < n$ — the sum accounts for only part of the length:

$$\\sum_{i=1}^{k} (\\mathbf{x} \\cdot \\mathbf{q}_i)^2 \\leq \\|\\mathbf{x}\\|^2$$

This is Bessel's inequality. The left side is the squared length of the projection of $\\mathbf{x}$ onto $\\text{Span}\\{\\mathbf{q}_1, \\dots, \\mathbf{q}_k\\}$. The deficit $\\|\\mathbf{x}\\|^2 - \\sum(\\mathbf{x} \\cdot \\mathbf{q}_i)^2$ is the squared length of the component orthogonal to the span. Equality holds if and only if $\\mathbf{x}$ is already in the span, leaving no perpendicular remainder.`,
    before: ``,
    after: ``,
    link: ``,
  },
}



const introContent = {
  title: `Bases Where Coordinates Come Free`,
  content: `An orthogonal set consists of vectors that are pairwise perpendicular. An orthonormal set adds the requirement that each vector has unit length. These sets are automatically linearly independent, and when they form a basis, coordinates are computed by dot products alone — no system solving, no row reduction, no matrix inversion.`,
}

const faqQuestions = {
  obj1: {
    question: "What is an orthogonal set of vectors?",
    answer: "An orthogonal set is a collection of nonzero vectors that are pairwise perpendicular — every pair has dot product zero. Orthogonal sets are automatically linearly independent, so no separate independence check is needed.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the difference between orthogonal and orthonormal?",
    answer: "An orthogonal set requires all pairs to have dot product zero. An orthonormal set additionally requires each vector to have unit length. Any orthogonal set can be made orthonormal by dividing each vector by its length.",
    sectionId: "3"
  },
  obj3: {
    question: "How do you find coordinates with an orthonormal basis?",
    answer: "For an orthonormal basis, the coordinate of x along basis vector qᵢ is simply the dot product x · qᵢ. No system of equations or matrix inversion is needed — each coordinate is computed independently by a single dot product.",
    sectionId: "5"
  },
  obj4: {
    question: "What is an orthogonal matrix?",
    answer: "An orthogonal matrix Q has orthonormal columns, satisfying QᵀQ = I and Q⁻¹ = Qᵀ. It preserves dot products, lengths, angles, and distances. Its determinant is ±1, representing a rotation (det +1) or a rotation with reflection (det −1).",
    sectionId: "6"
  },
  obj5: {
    question: "What is Parseval's identity?",
    answer: "Parseval's identity states that for an orthonormal basis, the squared length of any vector equals the sum of the squares of its coordinates: ‖x‖² = Σ(x · qᵢ)². It is the Pythagorean theorem applied to the orthonormal decomposition.",
    sectionId: "8"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Orthogonal and Orthonormal Sets",
    "description": "Orthogonal and orthonormal sets and bases in linear algebra. Coordinates via dot products, orthogonal matrices, Parseval's identity, Bessel's inequality, and QR decomposition.",
    "url": "https://www.learnmathclass.com/linear-algebra/orthogonality/orthogonal-sets",
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
      "name": "Orthogonal and Orthonormal Sets"
    },
    "teaches": [
      "Orthogonal sets and automatic linear independence",
      "Orthonormal sets and the Kronecker delta condition",
      "Orthogonal and orthonormal bases",
      "Computing coordinates via dot products",
      "Orthogonal matrices and length preservation",
      "Rectangular matrices with orthonormal columns",
      "Parseval's identity and Bessel's inequality"
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
        "name": "Orthogonal Sets",
        "item": "https://www.learnmathclass.com/linear-algebra/orthogonality/orthogonal-sets"
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
//         title: "Orthogonal Sets | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/linear-algebra/orthogonality/orthogonal-sets",
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
      title: "Orthogonal & Orthonormal Sets and Bases | Learn Math Class",
      description: "Orthogonal and orthonormal sets and bases in linear algebra. Coordinates via dot products, orthogonal matrices, Parseval's identity, Bessel's inequality, and QR decomposition.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/orthogonality/orthogonal-sets",
      name: "Orthogonal and Orthonormal Sets"
    },
  }
}
   }

// export default function OrthogonalSetsPage({seoData,sectionsContent , introContent}) {

export default function OrthogonalSetsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Orthogonal Sets</h1>
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
