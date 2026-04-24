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
  "eigenvalues",
  "eigenvectors",
  "eigenvalue definition",
  "eigenvector definition",
  "Av = λv",
  "eigenspace",
  "find eigenvalues",
  "find eigenvectors",
  "eigenvalue example",
  "characteristic equation",
  "geometric multiplicity",
  "eigenvalue matrix",
  "eigenvalue problem",
  "linear algebra eigenvalues"
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

  const sectionsContent = {
  obj1: {
    title: `The Core Idea`,
    content: `When a [matrix](!/linear-algebra/matrix) $A$ multiplies a vector $\\mathbf{x}$, the result $A\\mathbf{x}$ is usually a vector pointing in a completely different direction. But for certain special vectors, the output $A\\mathbf{x}$ points in the same direction as $\\mathbf{x}$ — it is simply a scaled copy.

These are the vectors that the [linear transformation](!/linear-algebra/transformations) $\\mathbf{x} \\mapsto A\\mathbf{x}$ stretches, compresses, or reverses without deflecting. They are the "natural axes" of the transformation, and the scaling factors measure exactly how the transformation acts along each such axis. Finding these directions and factors is the eigenvalue problem.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Definition`,
    content: `For an $n \\times n$ matrix $A$, a nonzero vector $\\mathbf{v}$ is an eigenvector of $A$ if

$$A\\mathbf{v} = \\lambda\\mathbf{v}$$

for some scalar $\\lambda$. The scalar $\\lambda$ is the corresponding eigenvalue.

The requirement that $\\mathbf{v} \\neq \\mathbf{0}$ is essential. The zero vector trivially satisfies $A\\mathbf{0} = \\lambda\\mathbf{0}$ for every $\\lambda$, so it carries no information and is excluded by convention.

The eigenvalue $\\lambda$ can be any real number, including zero. When $\\lambda = 0$, the equation $A\\mathbf{v} = \\mathbf{0}$ says that $\\mathbf{v}$ is in the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$ — the transformation annihilates that direction entirely.

Only square matrices have eigenvalues. The equation $A\\mathbf{v} = \\lambda\\mathbf{v}$ requires $A\\mathbf{v}$ and $\\lambda\\mathbf{v}$ to live in the same space, which demands that $A$ maps $\\mathbb{R}^n$ to $\\mathbb{R}^n$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Rewriting as a Homogeneous System`,
    content: `The eigenvalue equation $A\\mathbf{v} = \\lambda\\mathbf{v}$ rearranges to

$$(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$$

This is a [homogeneous](!/linear-algebra/linear-systems/homogeneous) linear system with coefficient matrix $A - \\lambda I$. Eigenvectors are its nontrivial solutions. Such solutions exist if and only if $A - \\lambda I$ is singular — that is, if and only if

$$\\det(A - \\lambda I) = 0$$

This [determinant](!/linear-algebra/determinants) condition is the [characteristic equation](!/linear-algebra/eigen/characteristic-equation). It converts the eigenvalue problem from a geometric question ("which directions survive?") into an algebraic one ("which values of $\\lambda$ make this determinant vanish?"). The characteristic equation is a polynomial of degree $n$ in $\\lambda$, and its roots are the eigenvalues.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Eigenspaces`,
    content: `For a given eigenvalue $\\lambda$, the eigenspace is the set of all vectors satisfying $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$, together with the zero vector:

$$E_\\lambda = \\text{Null}(A - \\lambda I)$$

The eigenspace is a [subspace](!/linear-algebra/vector-spaces/subspaces) of $\\mathbb{R}^n$. It contains the zero vector and is closed under addition and scalar multiplication — any linear combination of eigenvectors for the same eigenvalue is again an eigenvector for that eigenvalue (or the zero vector).

The [dimension](!/linear-algebra/vector-spaces/dimension) of the eigenspace is called the geometric multiplicity of $\\lambda$. Finding a [basis](!/linear-algebra/vector-spaces) for the eigenspace is a standard null-space computation: row reduce $A - \\lambda I$ and extract the general solution in parametric form. Each free variable contributes one basis vector to the eigenspace.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Geometric Meaning`,
    content: `An eigenvector $\\mathbf{v}$ defines a direction that the [transformation](!/linear-algebra/transformations) $\\mathbf{x} \\mapsto A\\mathbf{x}$ maps to itself. The eigenvalue $\\lambda$ determines what happens along that direction.

When $\\lambda > 1$, the direction is stretched — the transformation pushes vectors outward along $\\mathbf{v}$. When $0 < \\lambda < 1$, the direction is compressed. When $\\lambda < 0$, the direction is reversed and scaled by $|\\lambda|$ — the vector flips through the origin. When $\\lambda = 1$, the vector is completely fixed. When $\\lambda = 0$, the vector is annihilated — that direction is collapsed to the origin.

## Quick Examples

For the matrix $\\begin{pmatrix} 3 & 0 \\\\ 0 & -2 \\end{pmatrix}$, the standard basis vectors are eigenvectors: $\\mathbf{e}_1$ has eigenvalue $3$ (stretched) and $\\mathbf{e}_2$ has eigenvalue $-2$ (reversed and doubled). A [reflection](!/linear-algebra/transformations/geometric) across a line has eigenvalue $+1$ for vectors on the line and $-1$ for vectors perpendicular to it. A [projection](!/linear-algebra/orthogonality/projections) has eigenvalue $1$ for vectors in the target subspace and $0$ for vectors in its orthogonal complement.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Examples`,
    content: `For a [diagonal](!/linear-algebra/matrix/types) matrix $D = \\text{diag}(d_1, \\dots, d_n)$, the eigenvalues are the diagonal entries $d_1, \\dots, d_n$ and the eigenvectors are the standard basis vectors $\\mathbf{e}_1, \\dots, \\mathbf{e}_n$. The eigenvector-eigenvalue structure is visible by inspection.

For a [triangular](!/linear-algebra/matrix/types) matrix, the eigenvalues are still the diagonal entries (since $\\det(A - \\lambda I)$ is the product of the diagonal entries of $A - \\lambda I$), but the eigenvectors generally require computation.

## Worked Example

For $A = \\begin{pmatrix} 4 & 2 \\\\ 1 & 3 \\end{pmatrix}$, the characteristic equation is $\\det(A - \\lambda I) = (4 - \\lambda)(3 - \\lambda) - 2 = \\lambda^2 - 7\\lambda + 10 = (\\lambda - 2)(\\lambda - 5) = 0$. The eigenvalues are $\\lambda_1 = 2$ and $\\lambda_2 = 5$.

For $\\lambda_1 = 2$: $(A - 2I)\\mathbf{v} = \\begin{pmatrix} 2 & 2 \\\\ 1 & 1 \\end{pmatrix}\\mathbf{v} = \\mathbf{0}$ gives $\\mathbf{v}_1 = (-1, 1)^T$.

For $\\lambda_2 = 5$: $(A - 5I)\\mathbf{v} = \\begin{pmatrix} -1 & 2 \\\\ 1 & -2 \\end{pmatrix}\\mathbf{v} = \\mathbf{0}$ gives $\\mathbf{v}_2 = (2, 1)^T$.

Rotation by $90°$ in $\\mathbb{R}^2$ has matrix $\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ and characteristic polynomial $\\lambda^2 + 1 = 0$. No real direction survives a quarter-turn — the eigenvalues are $\\pm i$, which are [complex](!/linear-algebra/eigen/complex).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Eigenvalues and Matrix Properties`,
    content: `Two of the most basic matrix invariants are direct functions of the eigenvalues.

The [trace](!/linear-algebra/matrix/trace) equals the sum of the eigenvalues: $\\text{tr}(A) = \\lambda_1 + \\lambda_2 + \\cdots + \\lambda_n$, counted with algebraic multiplicity. This follows from the relationship between the coefficients of the characteristic polynomial and the trace.

The [determinant](!/linear-algebra/determinants) equals the product of the eigenvalues: $\\det(A) = \\lambda_1 \\lambda_2 \\cdots \\lambda_n$. This follows from evaluating the characteristic polynomial at $\\lambda = 0$.

Together these two identities connect the simplest diagonal entry sum and the global scaling factor to the eigenvalue spectrum. They immediately imply that $A$ is [invertible](!/linear-algebra/matrix/inverse) if and only if no eigenvalue is zero, and singular if and only if at least one eigenvalue vanishes.

The full set of [properties](!/linear-algebra/eigen/properties) — including eigenvalues of powers, inverses, transposes, and special matrix types — is developed on its own page.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Why Eigenvalues Matter`,
    content: `[Diagonalization](!/linear-algebra/eigen/diagonalization) is the most immediate application. If $A$ has $n$ [linearly independent](!/linear-algebra/vector-spaces/linear-independence) eigenvectors, it can be written as $A = PDP^{-1}$ where $D$ is the diagonal matrix of eigenvalues. This factorization reduces matrix powers to $A^k = PD^kP^{-1}$ — raising a diagonal matrix to a power means raising each diagonal entry independently.

In dynamical systems, eigenvalues determine long-term behavior. The system $\\mathbf{x}_{n+1} = A\\mathbf{x}_n$ grows, decays, or oscillates depending on whether the eigenvalues have absolute value greater than, less than, or equal to $1$. The system $\\mathbf{x}' = A\\mathbf{x}$ has solutions involving $e^{\\lambda t}$, so the real parts of the eigenvalues determine exponential growth or decay and the imaginary parts determine oscillation frequency.

In statistics, the eigenvectors of a covariance matrix point in the directions of maximum variance — this is the foundation of principal component analysis. In physics, the eigenvectors of a Hamiltonian or stiffness matrix correspond to natural modes of vibration. In graph theory, eigenvalues of adjacency and Laplacian matrices encode connectivity and clustering structure.

The eigenvalue decomposition is arguably the single most important factorization in applied mathematics. Virtually every iterative algorithm, stability criterion, and spectral method in scientific computing traces back to it.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

const introContent = {
   id: "intro",
  title: `The Directions a Matrix Preserves`,
  content: `Most vectors change direction when multiplied by a matrix. The rare exceptions — vectors that emerge scaled but not rotated — are eigenvectors, and their scaling factors are eigenvalues. These special directions and values encode the deepest structural information about a linear transformation: how it stretches, compresses, and orients space. They are the key to diagonalization, stability analysis, and the spectral theory that unifies much of applied mathematics.`,
}


const faqQuestions = {
  obj1: {
    question: "What is the core idea of eigenvalues and eigenvectors?",
    answer: "When a matrix multiplies most vectors, the result points in a different direction. Eigenvectors are special vectors that remain in the same direction after multiplication—they're only scaled. The scaling factor is the eigenvalue. These are the 'natural axes' of the transformation.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the definition of eigenvalue and eigenvector?",
    answer: "For an n×n matrix A, a nonzero vector v is an eigenvector if Av = λv for some scalar λ (the eigenvalue). The vector v ≠ 0 is required—the zero vector trivially satisfies the equation for all λ. Only square matrices have eigenvalues.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you find eigenvalues?",
    answer: "Rewrite Av = λv as (A - λI)v = 0. This homogeneous system has nontrivial solutions only when det(A - λI) = 0. This determinant equation (the characteristic equation) is a polynomial whose roots are the eigenvalues.",
    sectionId: "3"
  },
  obj4: {
    question: "What is an eigenspace?",
    answer: "The eigenspace E_λ = Null(A - λI) is the set of all eigenvectors for eigenvalue λ, plus the zero vector. It's a subspace of ℝⁿ. Its dimension is the geometric multiplicity of λ. Find a basis by row reducing A - λI and extracting the null space.",
    sectionId: "4"
  },
  obj5: {
    question: "What is the geometric meaning of eigenvalues?",
    answer: "The eigenvalue determines what happens along the eigenvector direction: λ > 1 stretches, 0 < λ < 1 compresses, λ < 0 reverses direction, λ = 1 fixes the vector, λ = 0 collapses to origin. Eigenvectors are directions the transformation preserves.",
    sectionId: "5"
  },
  obj6: {
    question: "How do you find eigenvectors with an example?",
    answer: "For A = [[4,2],[1,3]]: characteristic equation (4-λ)(3-λ)-2 = 0 gives λ = 2, 5. For λ = 2: solve (A-2I)v = 0, get v₁ = (-1,1)ᵀ. For λ = 5: solve (A-5I)v = 0, get v₂ = (2,1)ᵀ. Verify: Av₁ = 2v₁, Av₂ = 5v₂.",
    sectionId: "6"
  },
  obj7: {
    question: "How are trace and determinant related to eigenvalues?",
    answer: "Trace equals the sum of eigenvalues: tr(A) = λ₁ + λ₂ + ... + λₙ. Determinant equals the product: det(A) = λ₁λ₂...λₙ. A matrix is invertible iff no eigenvalue is zero; singular iff at least one eigenvalue vanishes.",
    sectionId: "7"
  },
  obj8: {
    question: "Why do eigenvalues matter?",
    answer: "Eigenvalues enable diagonalization (A = PDP⁻¹), making Aᵏ easy to compute. In dynamical systems, eigenvalues determine growth/decay/oscillation. In statistics, eigenvectors of covariance matrices give principal components. They're central to spectral methods across applied mathematics.",
    sectionId: "8"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Eigenvalues and Eigenvectors",
    "description": "Learn eigenvalues and eigenvectors: definition, characteristic equation, eigenspaces, geometric meaning, worked examples, trace/determinant relationships, and applications.",
    "url": "https://www.learnmathclass.com/linear-algebra/eigen",
    "inLanguage": "en-US",
    "learningResourceType": "Explanation",
    "educationalLevel": "High School, College",
    "educationalUse": "Learning",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "about": {
      "@type": "Thing",
      "name": "Eigenvalues and Eigenvectors"
    },
    "teaches": [
      "Eigenvalue and eigenvector definition",
      "Characteristic equation det(A - λI) = 0",
      "Eigenspaces and geometric multiplicity",
      "Geometric interpretation of eigenvalues",
      "Computing eigenvectors with examples",
      "Trace and determinant from eigenvalues",
      "Applications of eigenvalue decomposition"
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
        "name": "Eigenvalues and Eigenvectors",
        "item": "https://www.learnmathclass.com/linear-algebra/eigen"
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

   return {
  props: {
    sectionsContent,
    introContent,
    faqQuestions,
    schemas,
    seoData: {
      title: "Eigenvalues & Eigenvectors: Definition & Examples | Learn Math Class",
      description: "Learn eigenvalues and eigenvectors: definition, characteristic equation, eigenspaces, geometric meaning, worked examples, trace/determinant relationships, and applications.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/eigen",
      name: "Eigenvalues and Eigenvectors"
    },
  }
}
   }


   export default function EigenvaluesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Eigenvalues and Eigenvectors</h1>
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
