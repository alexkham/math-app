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
  "image linear transformation",
  "kernel linear transformation",
  "null space column space",
  "rank-nullity theorem",
  "injective linear map",
  "surjective linear map",
  "isomorphism linear algebra",
  "kernel null space",
  "image range transformation",
  "one-to-one onto linear",
  "dimension constraints transformations",
  "computing image kernel",
  "fundamental decomposition",
  "bijective linear transformation"
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
    title: `The Image`,
    content: `The image (or range) of a linear transformation $T: V \\to W$ is the set of all outputs:

$$\\text{Im}(T) = \\{T(\\mathbf{v}) : \\mathbf{v} \\in V\\}$$

The image is a [subspace](!/linear-algebra/vector-spaces/subspaces) of $W$. It contains $T(\\mathbf{0}) = \\mathbf{0}$, and if $T(\\mathbf{u})$ and $T(\\mathbf{v})$ are in the image, then so is $cT(\\mathbf{u}) + dT(\\mathbf{v}) = T(c\\mathbf{u} + d\\mathbf{v})$ — closure under both operations follows from linearity.

When $T(\\mathbf{x}) = A\\mathbf{x}$ for a [matrix](!/linear-algebra/matrix) $A$, the image is the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$: the set of all vectors expressible as linear combinations of the columns. The [dimension](!/linear-algebra/vector-spaces/dimension) of the image equals the [rank](!/linear-algebra/matrix/rank) of $A$.

The image answers the reachability question: a vector $\\mathbf{w} \\in W$ is in the image if and only if the equation $T(\\mathbf{v}) = \\mathbf{w}$ — equivalently, $A\\mathbf{x} = \\mathbf{w}$ — has a solution.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The Kernel`,
    content: `The kernel (or null space) of $T: V \\to W$ is the set of all inputs that map to zero:

$$\\ker(T) = \\{\\mathbf{v} \\in V : T(\\mathbf{v}) = \\mathbf{0}\\}$$

The kernel is a [subspace](!/linear-algebra/vector-spaces/subspaces) of $V$. It contains $\\mathbf{0}$ (since $T(\\mathbf{0}) = \\mathbf{0}$), and if $T(\\mathbf{u}) = \\mathbf{0}$ and $T(\\mathbf{v}) = \\mathbf{0}$, then $T(c\\mathbf{u} + d\\mathbf{v}) = cT(\\mathbf{u}) + dT(\\mathbf{v}) = \\mathbf{0}$, so $c\\mathbf{u} + d\\mathbf{v} \\in \\ker(T)$.

When $T(\\mathbf{x}) = A\\mathbf{x}$, the kernel is the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$: all solutions to the [homogeneous](!/linear-algebra/linear-systems/homogeneous) system $A\\mathbf{x} = \\mathbf{0}$. Its dimension is the nullity, equal to $n - \\text{rank}(A)$.

The kernel measures the information lost by $T$. Vectors in the kernel are collapsed to $\\mathbf{0}$ — they represent directions that the transformation annihilates. A larger kernel means more information is destroyed.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Injectivity`,
    content: `A linear transformation $T$ is injective (one-to-one) if different inputs always produce different outputs: $T(\\mathbf{u}) = T(\\mathbf{v})$ implies $\\mathbf{u} = \\mathbf{v}$.

For linear maps, injectivity has an elegant equivalent: $T$ is injective if and only if $\\ker(T) = \\{\\mathbf{0}\\}$. The proof is short. If $T(\\mathbf{u}) = T(\\mathbf{v})$, then $T(\\mathbf{u} - \\mathbf{v}) = T(\\mathbf{u}) - T(\\mathbf{v}) = \\mathbf{0}$, so $\\mathbf{u} - \\mathbf{v} \\in \\ker(T)$. If the kernel is trivial, $\\mathbf{u} - \\mathbf{v} = \\mathbf{0}$ and $\\mathbf{u} = \\mathbf{v}$.

For matrix transformations, injectivity is equivalent to full column rank: $\\text{rank}(A) = n$. This means every column is a pivot column, no free variables exist in $A\\mathbf{x} = \\mathbf{0}$, the columns are [linearly independent](!/linear-algebra/vector-spaces/linear-independence), and the [determinant](!/linear-algebra/determinants) is nonzero (in the square case).

Injectivity means the transformation preserves distinctness — no two different inputs are confused with each other.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Surjectivity`,
    content: `A linear transformation $T: V \\to W$ is surjective (onto) if $\\text{Im}(T) = W$ — every vector in the codomain is the image of some vector in the domain.

For matrix transformations, surjectivity is equivalent to full row rank: $\\text{rank}(A) = m$. This means every row contains a pivot, the column space is all of $\\mathbb{R}^m$, and the [system](!/linear-algebra/linear-systems) $A\\mathbf{x} = \\mathbf{b}$ has a solution for every right-hand side $\\mathbf{b}$.

Surjectivity means the transformation has no blind spots — every output is reachable from some input. Failure of surjectivity means the image is a proper subspace of the codomain: certain vectors in $W$ are inherently unreachable, no matter what input is chosen.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Bijectivity and Isomorphisms`,
    content: `A linear transformation that is both injective and surjective is bijective. A bijective linear transformation is called an isomorphism — it establishes that the domain and codomain are structurally identical as [vector spaces](!/linear-algebra/vector-spaces).

For a map $T: V \\to W$ between spaces of equal dimension ($\\dim(V) = \\dim(W) = n$), the three conditions collapse: injective $\\iff$ surjective $\\iff$ bijective. Checking any one of the three establishes the other two. This is because the rank-nullity theorem forces $\\dim(\\text{Im}(T)) + \\dim(\\ker(T)) = n$, and $\\dim(\\text{Im}(T)) \\leq n = \\dim(W)$. If the kernel is trivial (injective), the image has dimension $n$ and must equal all of $W$ (surjective). If the image is all of $W$ (surjective), the kernel must have dimension $0$ (injective).

For matrix transformations between spaces of the same dimension, bijectivity is equivalent to the matrix being square and [invertible](!/linear-algebra/matrix/inverse).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `The Rank-Nullity Theorem for Maps`,
    content: `For a linear transformation $T: V \\to W$ with $V$ finite-dimensional:

$$\\dim(\\text{Im}(T)) + \\dim(\\ker(T)) = \\dim(V)$$

The domain dimensions split between what the map preserves and what it destroys. The image captures the dimensions that survive; the kernel captures the dimensions that are annihilated.

For [matrix](!/linear-algebra/matrix) transformations $T(\\mathbf{x}) = A\\mathbf{x}$, this becomes $\\text{rank}(A) + \\text{nullity}(A) = n$ — the familiar [rank-nullity theorem](!/linear-algebra/matrix/rank) in concrete language.

The theorem constrains the interplay between injectivity and surjectivity. If $\\dim(V) > \\dim(W)$, the image can have at most $\\dim(W)$ dimensions, forcing the kernel to have at least $\\dim(V) - \\dim(W)$ dimensions — the map cannot be injective. If $\\dim(V) < \\dim(W)$, the image cannot fill all of $W$ — the map cannot be surjective.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Dimension Constraints`,
    content: `The rank-nullity theorem imposes hard limits on what a linear transformation can achieve.

$T: V \\to W$ can be injective only if $\\dim(V) \\leq \\dim(W)$. A map from a larger space to a smaller one must collapse some directions — the kernel is forced to be nontrivial.

$T: V \\to W$ can be surjective only if $\\dim(V) \\geq \\dim(W)$. A map from a smaller space to a larger one cannot cover all directions — the image is a proper subspace.

$T$ can be bijective only if $\\dim(V) = \\dim(W)$. This is necessary but not sufficient — even with equal dimensions, the map must still have full rank.

These constraints apply to all linear maps, not just matrix transformations. They are consequences of the rank-nullity theorem and the dimension theory of [vector spaces](!/linear-algebra/vector-spaces/dimension).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Computing the Image and Kernel`,
    content: `For a matrix transformation $T(\\mathbf{x}) = A\\mathbf{x}$, the image and kernel are computed by [row reduction](!/linear-algebra/linear-systems/gaussian-elimination).

The kernel is the null space of $A$: solve $A\\mathbf{x} = \\mathbf{0}$, reduce to [echelon form](!/linear-algebra/linear-systems/echelon-form), and express the solution in parametric vector form. Each free variable contributes one [basis](!/linear-algebra/vector-spaces) vector for $\\ker(T)$.

The image is the column space of $A$: row reduce $A$, identify the pivot columns, and take the corresponding columns of the original matrix $A$ as a basis for $\\text{Im}(T)$.

## Worked Example

For $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 1 \\\\ 1 & 3 & 4 \\end{pmatrix}$, row reduction gives $\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}$. Pivots in columns $1$ and $2$. The image has basis $\\{(1, 0, 1), (2, 1, 3)\\}$ — two-dimensional. The kernel has one free variable ($x_3 = t$), giving $\\ker(T) = \\text{Span}\\{(-1, -1, 1)\\}$ — one-dimensional. Check: $2 + 1 = 3 = n$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `The Fundamental Decomposition`,
    content: `The rank-nullity theorem has a structural interpretation that goes beyond dimension counting. The domain $V$ decomposes as a direct sum:

$$V = \\ker(T) \\oplus (\\text{a complement of } \\ker(T))$$

The transformation $T$ kills everything in the kernel and maps the complement bijectively onto the image. Every vector $\\mathbf{v} \\in V$ splits as $\\mathbf{v} = \\mathbf{v}_k + \\mathbf{v}_c$ where $\\mathbf{v}_k \\in \\ker(T)$ and $\\mathbf{v}_c$ is in the complement. Then $T(\\mathbf{v}) = T(\\mathbf{v}_c)$, and the restriction of $T$ to the complement is a bijection onto $\\text{Im}(T)$.

For matrix transformations, the [four fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces) provide the natural complement: the row space of $A$ is the orthogonal complement of the null space in $\\mathbb{R}^n$, and $A$ maps the row space bijectively onto the column space. The null-space component is destroyed; the row-space component survives intact.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

const introContent = {
  title: `What a Transformation Hits and What It Kills`,
  content: `Every linear transformation partitions its domain into two complementary pieces: the kernel, consisting of everything that maps to zero, and a complement that maps bijectively onto the image. The dimensions of the kernel and image are locked together by the rank-nullity theorem, and their relationship determines whether the transformation is injective, surjective, or neither.`,
}



const faqQuestions = {
  obj1: {
    question: "What is the image of a linear transformation?",
    answer: "The image (or range) of T is the set of all outputs: Im(T) = {T(v) : v ∈ V}. It is a subspace of the codomain. For matrix transformations, the image is the column space of A. Its dimension equals the rank of A, and a vector w is in the image if and only if Ax = w has a solution.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the kernel of a linear transformation?",
    answer: "The kernel of T is the set of all inputs that map to zero: ker(T) = {v ∈ V : T(v) = 0}. It is a subspace of the domain. For matrix transformations, the kernel is the null space of A. Its dimension (the nullity) equals n minus the rank.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you determine if a linear transformation is injective?",
    answer: "A linear transformation is injective (one-to-one) if and only if its kernel is trivial: ker(T) = {0}. For matrix transformations, this is equivalent to full column rank, linearly independent columns, no free variables, and (for square matrices) nonzero determinant.",
    sectionId: "3"
  },
  obj4: {
    question: "What is the rank-nullity theorem?",
    answer: "The rank-nullity theorem states that dim(Im(T)) + dim(ker(T)) = dim(V) for any linear transformation T: V → W. The domain dimensions split between what the map preserves (the image) and what it destroys (the kernel). For matrices, rank + nullity = n.",
    sectionId: "6"
  },
  obj5: {
    question: "When is a linear transformation an isomorphism?",
    answer: "A linear transformation is an isomorphism when it is both injective and surjective (bijective). For maps between spaces of equal dimension, any one of the three conditions implies the other two. For matrix transformations, this is equivalent to the matrix being square and invertible.",
    sectionId: "5"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Image and Kernel of Linear Transformations",
    "description": "Image and kernel of linear transformations: definitions, injectivity, surjectivity, isomorphisms, rank-nullity theorem, dimension constraints, computation, and fundamental decomposition.",
    "url": "https://www.learnmathclass.com/linear-algebra/transformations/image-kernel",
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
      "name": "Image and Kernel"
    },
    "teaches": [
      "Image (range) as column space of a matrix",
      "Kernel (null space) as solution set of Ax = 0",
      "Injectivity via trivial kernel",
      "Surjectivity via full row rank",
      "Isomorphisms and bijectivity",
      "Rank-nullity theorem for linear maps",
      "Dimension constraints on injectivity and surjectivity",
      "Fundamental decomposition of the domain"
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
        "name": "Image and Kernel",
        "item": "https://www.learnmathclass.com/linear-algebra/transformations/image-kernel"
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
//         url: "/linear-algebra/transformations/image-kernel",
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
      title: "Image & Kernel: Injectivity and Surjectivity | Learn Math Class",
      description: "Image and kernel of linear transformations: definitions, injectivity, surjectivity, isomorphisms, rank-nullity theorem, dimension constraints, computation, and fundamental decomposition.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/transformations/image-kernel",
      name: "Image and Kernel of Linear Transformations"
    },
  }
}
   }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {
export default function ImageKernelPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Image and Kernel of Linear Transformation</h1>
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
