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
  "matrix representation linear transformation",
  "standard matrix transformation",
  "linear map matrix",
  "transformation matrix columns",
  "composition matrix multiplication",
  "matrix for abstract vector spaces",
  "differentiation matrix polynomial",
  "standard matrix basis vectors",
  "linear transformation to matrix",
  "matrix encodes transformation",
  "coordinate representation linear map",
  "matrix representation basis",
  "invertible transformation matrix",
  "linear operator matrix"
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
    title: `Every Linear Map from Rⁿ to Rᵐ Is Matrix Multiplication`,
    content: `If $T: \\mathbb{R}^n \\to \\mathbb{R}^m$ is linear, there exists a unique $m \\times n$ [matrix](!/linear-algebra/matrix) $A$ such that

$$T(\\mathbf{x}) = A\\mathbf{x} \\quad \\text{for every } \\mathbf{x} \\in \\mathbb{R}^n$$

This is not an optional representation — it is forced by linearity. Any vector $\\mathbf{x} = x_1\\mathbf{e}_1 + \\cdots + x_n\\mathbf{e}_n$ maps to $T(\\mathbf{x}) = x_1T(\\mathbf{e}_1) + \\cdots + x_nT(\\mathbf{e}_n)$, and this is exactly the matrix-vector product $A\\mathbf{x}$ with $A = [T(\\mathbf{e}_1) \\; T(\\mathbf{e}_2) \\; \\cdots \\; T(\\mathbf{e}_n)]$.

The converse is equally immediate: every $m \\times n$ matrix $A$ defines a linear transformation $\\mathbf{x} \\mapsto A\\mathbf{x}$. The correspondence is one-to-one — different matrices define different transformations, and different transformations produce different matrices. Linear maps $\\mathbb{R}^n \\to \\mathbb{R}^m$ and $m \\times n$ matrices are the same objects viewed from two perspectives.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Constructing the Standard Matrix`,
    content: `The recipe is direct: apply $T$ to each standard basis vector $\\mathbf{e}_1, \\mathbf{e}_2, \\dots, \\mathbf{e}_n$ and arrange the results as columns:

$$A = \\begin{pmatrix} | & | & & | \\\\ T(\\mathbf{e}_1) & T(\\mathbf{e}_2) & \\cdots & T(\\mathbf{e}_n) \\\\ | & | & & | \\end{pmatrix}$$

## Worked Example

Let $T: \\mathbb{R}^3 \\to \\mathbb{R}^2$ be defined by $T(x, y, z) = (2x - y + 3z, \\; 4x + 5z)$.

$T(\\mathbf{e}_1) = T(1, 0, 0) = (2, 4)$

$T(\\mathbf{e}_2) = T(0, 1, 0) = (-1, 0)$

$T(\\mathbf{e}_3) = T(0, 0, 1) = (3, 5)$

$$A = \\begin{pmatrix} 2 & -1 & 3 \\\\ 4 & 0 & 5 \\end{pmatrix}$$

Verification: $A\\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix} = \\begin{pmatrix} 2x - y + 3z \\\\ 4x + 5z \\end{pmatrix} = T(x, y, z)$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Reading the Matrix`,
    content: `Every piece of information about a linear transformation is encoded in its matrix.

Column $j$ tells you where $\\mathbf{e}_j$ goes. If the first column of a $2 \\times 2$ matrix is $(3, -1)^T$, then $(1, 0)$ maps to $(3, -1)$. The matrix is a complete lookup table: the image of any vector is computed by multiplication.

The size $m \\times n$ records the dimensions of codomain ($m$ rows) and domain ($n$ columns). A $3 \\times 2$ matrix represents a map from $\\mathbb{R}^2$ to $\\mathbb{R}^3$ — it embeds a plane into three-dimensional space. A $2 \\times 3$ matrix represents a map from $\\mathbb{R}^3$ to $\\mathbb{R}^2$ — it compresses three dimensions down to two.

A square matrix ($m = n$) represents a transformation from a space to itself — a linear operator. Only operators can have [eigenvalues](!/linear-algebra/eigen), [determinants](!/linear-algebra/determinants), and [traces](!/linear-algebra/matrix/trace).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Matrices for Abstract Vector Spaces`,
    content: `For a linear transformation $T: V \\to W$ between abstract [vector spaces](!/linear-algebra/vector-spaces), the matrix depends on a choice of [basis](!/linear-algebra/vector-spaces) for both $V$ and $W$.

Fix a basis $\\mathcal{B} = \\{\\mathbf{v}_1, \\dots, \\mathbf{v}_n\\}$ for $V$ and a basis $\\mathcal{C} = \\{\\mathbf{w}_1, \\dots, \\mathbf{w}_m\\}$ for $W$. Column $j$ of the matrix $[T]_{\\mathcal{C} \\leftarrow \\mathcal{B}}$ is the $\\mathcal{C}$-coordinate vector of $T(\\mathbf{v}_j)$ — the scalars needed to express $T(\\mathbf{v}_j)$ as a linear combination of $\\mathbf{w}_1, \\dots, \\mathbf{w}_m$.

Different bases give different matrices for the same transformation. The standard matrix for maps between $\\mathbb{R}^n$ and $\\mathbb{R}^m$ is the special case where both bases are standard. For abstract spaces like polynomial or function spaces, there is no "standard" basis in the same sense — every basis choice produces a different but equally valid matrix representation.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Worked Example: Differentiation`,
    content: `Let $T: \\mathcal{P}_2 \\to \\mathcal{P}_1$ be defined by $T(p) = p'$ (differentiation). Choose the monomial basis $\\{1, x, x^2\\}$ for $\\mathcal{P}_2$ and $\\{1, x\\}$ for $\\mathcal{P}_1$.

$T(1) = 0 = 0 \\cdot 1 + 0 \\cdot x$, so column $1$ is $(0, 0)^T$.

$T(x) = 1 = 1 \\cdot 1 + 0 \\cdot x$, so column $2$ is $(1, 0)^T$.

$T(x^2) = 2x = 0 \\cdot 1 + 2 \\cdot x$, so column $3$ is $(0, 2)^T$.

$$[T] = \\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 2 \\end{pmatrix}$$

The $2 \\times 3$ shape reflects $\\dim(\\mathcal{P}_1) = 2$ rows and $\\dim(\\mathcal{P}_2) = 3$ columns. The [rank](!/linear-algebra/matrix/rank) is $2$ — differentiation maps $\\mathcal{P}_2$ onto all of $\\mathcal{P}_1$. The [null space](!/linear-algebra/vector-spaces/fundamental-spaces) is one-dimensional, spanned by the constant polynomial $1$ — the only polynomials whose derivative is zero.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Composition Corresponds to Matrix Multiplication`,
    content: `If $T: U \\to V$ has matrix $A$ (relative to appropriate bases) and $S: V \\to W$ has matrix $B$, then the composition $S \\circ T: U \\to W$ has matrix $BA$.

The order matches the composition: $S$ acts after $T$, and $B$ multiplies from the left. This is why [matrix multiplication](!/linear-algebra/matrix/operations) is defined as it is — the row-times-column rule encodes function composition.

Associativity of matrix multiplication $(BC)A = B(CA)$ mirrors associativity of composition $(R \\circ S) \\circ T = R \\circ (S \\circ T)$. Non-commutativity of multiplication $AB \\neq BA$ mirrors non-commutativity of composition $S \\circ T \\neq T \\circ S$.

The identity transformation $I: V \\to V$ has the [identity matrix](!/linear-algebra/matrix/types) $I_n$ in any basis, and $I_n A = AI_n = A$ — the identity matrix is the multiplicative identity precisely because the identity transformation is the compositional identity.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `The Identity and the Inverse`,
    content: `The identity transformation $I: V \\to V$ sends every vector to itself. In any basis, its matrix is $I_n$.

If $T$ has matrix $A$ and $T$ is invertible, then $T^{-1}$ has matrix $A^{-1}$. The transformation $T$ is invertible if and only if $A$ is [invertible](!/linear-algebra/matrix/inverse) — the geometric and algebraic conditions coincide exactly. Composing $T$ with $T^{-1}$ gives the identity, and multiplying $A$ by $A^{-1}$ gives $I$. The [determinant](!/linear-algebra/determinants) test ($\\det(A) \\neq 0$) simultaneously answers whether the transformation is bijective and whether the matrix has an inverse.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `The Matrix Encodes Everything`,
    content: `Once a linear transformation is represented by a matrix, every property of the transformation becomes a matrix computation.

The [rank](!/linear-algebra/matrix/rank) of $A$ equals the dimension of the [image](!/linear-algebra/transformations/image-kernel) of $T$. The nullity equals the dimension of the kernel. The [determinant](!/linear-algebra/determinants) (for square matrices) tells whether $T$ is invertible and how it scales volumes. The [eigenvalues](!/linear-algebra/eigen) reveal the scaling factors along invariant directions. The [trace](!/linear-algebra/matrix/trace) equals the sum of the eigenvalues. The [singular values](!/linear-algebra/decompositions/svd) measure the maximum stretching in each orthogonal direction.

This is why matrices dominate computational linear algebra. Abstract transformations are conceptually powerful, but matrices are what computers operate on. The matrix representation converts every question about a linear map into a question about an array of numbers — and arrays of numbers are what algorithms are designed to handle.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

  const introContent = {
  title: `Encoding a Transformation as a Matrix`,
  content: `Every linear transformation between finite-dimensional spaces can be represented by a matrix, and every matrix defines a linear transformation. The columns of the matrix are the images of the basis vectors — this single recipe converts an abstract function into a concrete array of numbers from which every property of the transformation can be extracted.`,
}


const faqQuestions = {
  obj1: {
    question: "How do you find the matrix of a linear transformation?",
    answer: "Apply the transformation to each standard basis vector e₁, e₂, …, eₙ and arrange the results as columns. For abstract vector spaces, apply T to each basis vector of V and express the results as coordinate vectors in the basis of W. The resulting matrix satisfies T(x) = Ax for all x.",
    sectionId: "2"
  },
  obj2: {
    question: "Why does every linear transformation have a matrix?",
    answer: "Linearity forces T(x) = x₁T(e₁) + ⋯ + xₙT(eₙ) for any vector x. This is exactly the matrix-vector product Ax where column j of A is T(eⱼ). The correspondence is one-to-one: different matrices define different transformations, and vice versa.",
    sectionId: "1"
  },
  obj3: {
    question: "How does matrix multiplication relate to composition?",
    answer: "If T has matrix A and S has matrix B, then the composition S ∘ T has matrix BA. The left-to-right order of matrix multiplication matches the outer-to-inner order of composition. This is why matrix multiplication is defined by the row-times-column rule.",
    sectionId: "6"
  },
  obj4: {
    question: "What does the matrix of the differentiation operator look like?",
    answer: "For differentiation T: P₂ → P₁ with monomial bases, the matrix is [[0, 1, 0], [0, 0, 2]]. Column j records the coefficients of T applied to the j-th basis polynomial. The rank is 2 (differentiation maps onto all of P₁) and the kernel is the constant polynomials.",
    sectionId: "5"
  },
  obj5: {
    question: "Does the matrix of a transformation depend on the basis?",
    answer: "Yes. Different bases produce different matrices for the same transformation. The standard matrix uses the standard basis for both domain and codomain. For abstract spaces like polynomial spaces, every basis choice gives a different but equally valid matrix representation.",
    sectionId: "4"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Matrix Representation of Linear Transformations",
    "description": "Matrix representation of linear transformations: standard matrix from basis vectors, abstract spaces, differentiation example, composition as multiplication, and invertibility.",
    "url": "https://www.learnmathclass.com/linear-algebra/transformations/matrix-representations",
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
      "name": "Matrix Representation of Linear Transformations"
    },
    "teaches": [
      "Every linear map Rⁿ → Rᵐ is matrix multiplication",
      "Constructing the standard matrix from basis images",
      "Reading transformation properties from the matrix",
      "Matrix representation in abstract vector spaces",
      "Differentiation as a matrix operation",
      "Composition corresponds to matrix multiplication",
      "Invertibility of transformations and matrices"
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
        "name": "Matrix Representations",
        "item": "https://www.learnmathclass.com/linear-algebra/transformations/matrix-representations"
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
//         url: "/linear-algebra/transformations/matrix-representations",
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
      title: "Matrix Representation of Transformations | Learn Math Class",
      description: "Matrix representation of linear transformations: standard matrix from basis vectors, abstract spaces, differentiation example, composition as multiplication, and invertibility.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/transformations/matrix-representations",
      name: "Matrix Representation of Linear Transformations"
    },
  }
}
   }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {
export default function MatrixRepresentationPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Matric Representation of Linear Transformation</h1>
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
