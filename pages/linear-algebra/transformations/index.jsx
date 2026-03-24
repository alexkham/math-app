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
  "linear transformations",
  "linear map",
  "linear operator",
  "matrix transformation",
  "linearity definition",
  "linear transformation examples",
  "differentiation linear transformation",
  "rotation linear transformation",
  "determined by basis",
  "non-examples linear transformation",
  "affine vs linear",
  "matrix connection transformation",
  "geometric linear transformations",
  "linear map vector spaces"
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
    title: `What a Linear Transformation Is`,
    content: `A linear transformation is a function $T: V \\to W$ between [vector spaces](!/linear-algebra/vector-spaces) that preserves the two fundamental operations. For all vectors $\\mathbf{u}, \\mathbf{v} \\in V$ and all scalars $c, d$:

$$T(c\\mathbf{u} + d\\mathbf{v}) = cT(\\mathbf{u}) + dT(\\mathbf{v})$$

This single condition packages two requirements: $T$ preserves addition ($T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) + T(\\mathbf{v})$) and $T$ preserves scalar multiplication ($T(c\\mathbf{v}) = cT(\\mathbf{v})$). A function satisfying both is called linear. A function violating either is not.

The space $V$ is the domain and $W$ is the codomain, both vector spaces over the same field. The terms "linear map," "linear operator" (when $V = W$), and "linear transformation" are all synonymous. The full set of [properties](!/linear-algebra/transformations/properties) that linearity entails — and the strategies for verifying or disproving it — are developed on their own page.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Examples in Rⁿ`,
    content: `The prototypical example is [matrix](!/linear-algebra/matrix) multiplication: $T(\\mathbf{x}) = A\\mathbf{x}$ for a fixed $m \\times n$ matrix $A$. Linearity follows from the distributive properties of matrix-vector multiplication: $A(c\\mathbf{u} + d\\mathbf{v}) = cA\\mathbf{u} + dA\\mathbf{v}$.

Several familiar operations are special cases. The zero transformation $T(\\mathbf{v}) = \\mathbf{0}$ sends every vector to the origin — it corresponds to the zero matrix. The identity transformation $T(\\mathbf{v}) = \\mathbf{v}$ leaves every vector unchanged — it corresponds to the [identity matrix](!/linear-algebra/matrix/types). The projection $T(x, y) = (x, 0)$ drops the second coordinate — it corresponds to $\\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}$. Rotation by a fixed angle $\\theta$ in $\\mathbb{R}^2$ is linear, with matrix $\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$.

In each case, linearity can be verified directly from the definition. The matrix formulation makes the verification automatic — every matrix-vector product is linear by construction.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Non-Examples`,
    content: `Translation $T(\\mathbf{v}) = \\mathbf{v} + \\mathbf{b}$ with $\\mathbf{b} \\neq \\mathbf{0}$ is the most common non-example. It fails immediately: $T(\\mathbf{0}) = \\mathbf{b} \\neq \\mathbf{0}$, but every linear transformation must send $\\mathbf{0}$ to $\\mathbf{0}$.

The squaring function $T(x) = x^2$ from $\\mathbb{R}$ to $\\mathbb{R}$ fails additivity: $T(1 + 1) = 4$ but $T(1) + T(1) = 2$. The absolute value function $T(x) = |x|$ fails homogeneity: $T(-1 \\cdot 2) = 2$ but $-1 \\cdot T(2) = -2$. Norms $T(\\mathbf{v}) = \\|\\mathbf{v}\\|$ fail additivity by the triangle inequality.

Affine maps $T(\\mathbf{v}) = A\\mathbf{v} + \\mathbf{b}$ are linear only when $\\mathbf{b} = \\mathbf{0}$. The matrix part preserves linearity; the constant shift breaks it. Affine maps are important in geometry and optimization, but they are not linear transformations in the sense used here.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Examples Beyond Rⁿ`,
    content: `Linear transformations are not limited to matrix multiplication on column vectors. Any function between [vector spaces](!/linear-algebra/vector-spaces/axioms) that respects addition and scaling qualifies.

Differentiation $T(p) = p'$ on the polynomial space $\\mathcal{P}_n$ is linear: $(p + q)' = p' + q'$ and $(cp)' = cp'$. Integration $T(f) = \\int_a^x f(t)\\,dt$ on $C[a, b]$ is linear by the linearity of the integral. The [transpose](!/linear-algebra/matrix/operations) map $T(A) = A^T$ on $\\mathbb{R}^{n \\times n}$ is linear: $(A + B)^T = A^T + B^T$ and $(cA)^T = cA^T$. The [trace](!/linear-algebra/matrix/trace) $T(A) = \\text{tr}(A)$ from $\\mathbb{R}^{n \\times n}$ to $\\mathbb{R}$ is linear by additivity and scalar homogeneity of the trace.

These examples show that the concept reaches far beyond columns of numbers. Whenever a mathematical operation respects addition and scaling — and many fundamental operations do — it is a linear transformation, and the entire theory applies.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Determined by Action on a Basis`,
    content: `A linear transformation is completely determined by what it does to a [basis](!/linear-algebra/vector-spaces). If $\\mathcal{B} = \\{\\mathbf{v}_1, \\dots, \\mathbf{v}_n\\}$ is a basis for $V$ and the images $T(\\mathbf{v}_1), \\dots, T(\\mathbf{v}_n)$ are specified, then $T(\\mathbf{v})$ is determined for every vector $\\mathbf{v} \\in V$.

The reason is that every vector in $V$ has a unique expression $\\mathbf{v} = c_1\\mathbf{v}_1 + \\cdots + c_n\\mathbf{v}_n$, and linearity forces

$$T(\\mathbf{v}) = c_1T(\\mathbf{v}_1) + \\cdots + c_nT(\\mathbf{v}_n)$$

Conversely, any choice of images for the basis vectors — any $n$ vectors in $W$, with no constraints — defines a unique linear transformation. There are no compatibility conditions to satisfy; the basis images can be chosen freely.

This is the bridge to [matrix representation](!/linear-algebra/transformations/matrix-representation). The columns of the matrix are precisely the images of the basis vectors, and the matrix encodes the entire transformation in a rectangular array of numbers.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Properties`,
    content: `Linearity has immediate consequences that go beyond the defining condition. The zero vector always maps to zero: $T(\\mathbf{0}) = \\mathbf{0}$. Negation is preserved: $T(-\\mathbf{v}) = -T(\\mathbf{v})$. Arbitrary linear combinations are preserved: $T(\\sum c_i \\mathbf{v}_i) = \\sum c_i T(\\mathbf{v}_i)$.

The composition of two linear transformations is linear. If $T: U \\to V$ and $S: V \\to W$ are both linear, then $S \\circ T: U \\to W$ satisfies $(S \\circ T)(c\\mathbf{u} + d\\mathbf{v}) = c(S \\circ T)(\\mathbf{u}) + d(S \\circ T)(\\mathbf{v})$. When both maps are represented by matrices, composition corresponds to matrix multiplication.

A linear transformation is invertible if and only if it is bijective — both injective (trivial kernel) and surjective (image equals the codomain). The inverse of a linear transformation is itself linear. The full development of these [properties](!/linear-algebra/transformations/properties), including strategies for proving and disproving linearity, is on its own page.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `The Matrix Connection`,
    content: `Every linear transformation $T: \\mathbb{R}^n \\to \\mathbb{R}^m$ can be written as $T(\\mathbf{x}) = A\\mathbf{x}$ for a unique $m \\times n$ [matrix](!/linear-algebra/matrix) $A$ whose columns are the images of the standard basis vectors: $A = [T(\\mathbf{e}_1) \\; T(\\mathbf{e}_2) \\; \\cdots \\; T(\\mathbf{e}_n)]$.

This gives a one-to-one correspondence between linear maps $\\mathbb{R}^n \\to \\mathbb{R}^m$ and $m \\times n$ matrices. Every property of the transformation — its [rank](!/linear-algebra/matrix/rank), [determinant](!/linear-algebra/determinants) (when square), [eigenvalues](!/linear-algebra/eigenvalues-vectors), [image and kernel](!/linear-algebra/transformations/image-kernel) — can be read from the matrix. And every matrix operation — multiplication, inversion, decomposition — has a transformation-level interpretation.

For transformations between abstract vector spaces, the matrix depends on the choice of bases for both domain and codomain. Changing the bases changes the matrix but not the transformation. The relationship between different matrix representations of the same map is governed by [similarity](!/linear-algebra/transformations/basis-change).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Geometry`,
    content: `In $\\mathbb{R}^2$ and $\\mathbb{R}^3$, linear transformations have vivid [geometric](!/linear-algebra/transformations/geometric) meanings. Rotations spin every vector around the origin by a fixed angle. Reflections mirror across a line or plane through the origin. Projections flatten space onto a subspace. Shears tilt one axis relative to another. Scalings stretch or compress along coordinate directions.

Each of these transformations has an explicit matrix that encodes its geometric action. The [determinant](!/linear-algebra/determinants/geometry) of the matrix measures how the transformation scales areas or volumes: $|\\det(A)|$ is the scaling factor, and the sign of $\\det(A)$ indicates whether orientation is preserved ($+$) or reversed ($-$). Orthogonal matrices ($\\det = \\pm 1$) preserve all lengths and angles — they are the rigid motions of linear algebra.

The singular value decomposition reveals the hidden geometry of any matrix: every linear transformation is a rotation, followed by a coordinate-axis scaling, followed by another rotation. Even the most complicated-looking matrix is just three simple geometric operations composed together.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

const introContent = {
  title: `Functions That Preserve Linear Structure`,
  content: `A linear transformation is a function between vector spaces that respects addition and scalar multiplication. Every matrix defines one, and every linear transformation between finite-dimensional spaces can be encoded as a matrix. This correspondence is the bridge between abstract maps and concrete computation — it turns geometric questions into algebraic ones and algebraic results into geometric insight.`,
}

const faqQuestions = {
  obj1: {
    question: "What is a linear transformation?",
    answer: "A linear transformation is a function T: V → W between vector spaces satisfying T(cu + dv) = cT(u) + dT(v) for all vectors u, v and scalars c, d. It preserves addition and scalar multiplication. Every matrix multiplication T(x) = Ax is linear, and every linear map between finite-dimensional spaces can be represented by a matrix.",
    sectionId: "1"
  },
  obj2: {
    question: "What are examples of linear transformations?",
    answer: "Matrix multiplication, rotation, reflection, projection, and scaling in Rⁿ are all linear. Beyond Rⁿ, differentiation on polynomial spaces, integration on function spaces, the transpose map on matrices, and the trace function are all linear transformations.",
    sectionId: "4"
  },
  obj3: {
    question: "Why is translation not a linear transformation?",
    answer: "Translation T(v) = v + b with b ≠ 0 fails because T(0) = b ≠ 0, but every linear transformation must send the zero vector to zero. More generally, any function with a constant term — including all affine maps with nonzero offset — is not linear.",
    sectionId: "3"
  },
  obj4: {
    question: "Why is a linear transformation determined by its action on a basis?",
    answer: "Every vector v has a unique expression as a linear combination of basis vectors: v = c₁v₁ + ⋯ + cₙvₙ. Linearity forces T(v) = c₁T(v₁) + ⋯ + cₙT(vₙ). So once the images of the basis vectors are specified, T is determined on every vector. Any choice of basis images defines a valid linear transformation.",
    sectionId: "5"
  },
  obj5: {
    question: "How are linear transformations related to matrices?",
    answer: "Every linear map Rⁿ → Rᵐ equals T(x) = Ax for a unique m×n matrix A whose columns are the images of the standard basis vectors. For abstract spaces, the matrix depends on the basis choice. Changing bases changes the matrix via similarity but not the transformation itself.",
    sectionId: "7"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Linear Transformations",
    "description": "Linear transformations: definition, examples in Rⁿ and abstract spaces, non-examples, basis determination, matrix connection, properties, composition, and geometric interpretation.",
    "url": "https://www.learnmathclass.com/linear-algebra/transformations",
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
      "name": "Linear Transformations"
    },
    "teaches": [
      "Definition of linear transformation",
      "Examples: matrix multiplication, rotation, differentiation, trace",
      "Non-examples: translation, squaring, absolute value",
      "Determined by action on a basis",
      "Properties: composition, invertibility, preservation of zero",
      "Matrix representation and the matrix-transformation correspondence",
      "Geometric meaning in R² and R³"
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
        "name": "Linear Transformations",
        "item": "https://www.learnmathclass.com/linear-algebra/transformations"
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
//         url: "/linear-algebra/transformations",
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
      title: "Linear Transformations: Definition & Examples | Learn Math Class",
      description: "Linear transformations: definition, examples in Rⁿ and abstract spaces, non-examples, basis determination, matrix connection, properties, composition, and geometric interpretation.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/transformations",
      name: "Linear Transformations"
    },
  }
}
   }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {
export default function LinearTransformationsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Linear Transformations</h1>
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
