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
  "complex eigenvalues",
  "complex eigenvectors",
  "conjugate pairs eigenvalues",
  "rotation matrix eigenvalues",
  "real canonical form",
  "eigenvalue modulus argument",
  "spiraling dynamical systems",
  "2x2 complex eigenvalues",
  "real matrix complex roots",
  "rotation scaling matrix",
  "negative discriminant eigenvalues",
  "eigenvalue stability analysis",
  "complex characteristic roots",
  "imaginary eigenvalues"
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
    title: `When Complex Eigenvalues Appear`,
    content: `A real matrix with real entries can have complex eigenvalues. This occurs when the [characteristic polynomial](!/linear-algebra/eigen/characteristic-equation) — a polynomial with real coefficients — has roots that are not real.

For a $2 \\times 2$ matrix, complex eigenvalues appear when the discriminant $\\text{tr}(A)^2 - 4\\det(A) < 0$. The quadratic formula produces $\\lambda = \\frac{\\text{tr}(A) \\pm \\sqrt{\\text{negative}}}{2}$, which involves $\\sqrt{-1} = i$.

The geometric interpretation is clear: no real direction in $\\mathbb{R}^2$ is mapped to a scalar multiple of itself. Every vector is rotated, not just stretched or compressed. The simplest example is [rotation](!/linear-algebra/transformations/geometric) by $90°$, with matrix $\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ and characteristic polynomial $\\lambda^2 + 1 = 0$. The eigenvalues are $\\pm i$ — purely imaginary, reflecting pure rotation with no scaling.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Conjugate Pairs`,
    content: `For a real matrix, complex eigenvalues always come in conjugate pairs. If $\\lambda = a + bi$ is an eigenvalue (with $b \\neq 0$), then $\\bar{\\lambda} = a - bi$ is also an eigenvalue.

The proof uses the fact that the characteristic polynomial has real coefficients. If $p(\\lambda) = 0$ and every coefficient of $p$ is real, then $p(\\bar{\\lambda}) = \\overline{p(\\lambda)} = \\overline{0} = 0$. Complex conjugation passes through the polynomial because the coefficients are their own conjugates.

The corresponding eigenvectors are also conjugates: if $\\mathbf{v}$ is an eigenvector for $\\lambda = a + bi$, then $\\bar{\\mathbf{v}}$ is an eigenvector for $\\bar{\\lambda} = a - bi$.

One consequence for odd-dimensional real matrices: at least one eigenvalue must be real. Complex roots pair up, consuming an even number of the $n$ roots. When $n$ is odd, at least one root is left unpaired, and an unpaired root of a real polynomial must be real.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `The 2×2 Case in Detail`,
    content: `A $2 \\times 2$ real matrix with complex eigenvalues $\\lambda = a \\pm bi$ (where $b \\neq 0$) acts as a rotation composed with a scaling. The eigenvalues have modulus $r = \\sqrt{a^2 + b^2}$ and argument $\\theta = \\arctan(b/a)$.

When $r = 1$ (equivalently, $\\det(A) = a^2 + b^2 = 1$), the transformation is a pure rotation by angle $\\theta$. When $r > 1$, it is a rotation with outward spiraling. When $r < 1$, it is a rotation with inward spiraling.

## Worked Example

For $A = \\begin{pmatrix} 3 & -2 \\\\ 1 & 1 \\end{pmatrix}$: $\\text{tr}(A) = 4$, $\\det(A) = 5$, discriminant $= 16 - 20 = -4$. The eigenvalues are

$$\\lambda = \\frac{4 \\pm \\sqrt{-4}}{2} = 2 \\pm i$$

The modulus is $r = \\sqrt{4 + 1} = \\sqrt{5}$ and the argument is $\\theta = \\arctan(1/2)$. The transformation rotates by $\\arctan(1/2) \\approx 26.6°$ while scaling distances by $\\sqrt{5} \\approx 2.24$. Since $r > 1$, repeated application spirals outward.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Complex Eigenvectors`,
    content: `The eigenvectors corresponding to complex eigenvalues have complex entries. To find them, solve $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ using complex arithmetic.

Continuing the example with $A = \\begin{pmatrix} 3 & -2 \\\\ 1 & 1 \\end{pmatrix}$ and $\\lambda = 2 + i$:

$$A - (2 + i)I = \\begin{pmatrix} 1 - i & -2 \\\\ 1 & -1 - i \\end{pmatrix}$$

The second row gives $v_1 + (-1 - i)v_2 = 0$, so $v_1 = (1 + i)v_2$. Setting $v_2 = 1$: $\\mathbf{v} = (1 + i, 1)^T$.

This eigenvector splits into real and imaginary parts: $\\mathbf{v} = \\underbrace{(1, 1)^T}_{\\mathbf{u}} + i\\underbrace{(1, 0)^T}_{\\mathbf{w}}$. The real vectors $\\mathbf{u}$ and $\\mathbf{w}$ encode the rotation — they span the two-dimensional subspace on which the rotation-scaling acts. The conjugate eigenvector for $\\bar{\\lambda} = 2 - i$ is $\\bar{\\mathbf{v}} = (1 - i, 1)^T$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Real Canonical Form`,
    content: `A $2 \\times 2$ real matrix with eigenvalues $a \\pm bi$ is [similar](!/linear-algebra/transformations/basis-change) (over $\\mathbb{R}$) to the matrix

$$\\begin{pmatrix} a & -b \\\\ b & a \\end{pmatrix} = r\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$$

where $r = \\sqrt{a^2 + b^2}$ and $\\theta = \\arctan(b/a)$. This is a rotation by $\\theta$ scaled by $r$.

The similarity is achieved by the real matrix $P = [\\mathbf{u} \\; \\mathbf{w}]$, where $\\mathbf{v} = \\mathbf{u} + i\\mathbf{w}$ is the complex eigenvector. Then $P^{-1}AP = \\begin{pmatrix} a & -b \\\\ b & a \\end{pmatrix}$.

This is the real alternative to diagonalization: instead of a diagonal matrix with complex entries (which is valid over $\\mathbb{C}$ but not over $\\mathbb{R}$), we get a real $2 \\times 2$ rotation-scaling block. The transformation is expressed in its simplest real form.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Complex Eigenvalues in Larger Matrices`,
    content: `For an $n \\times n$ real matrix, complex eigenvalues still come in conjugate pairs. Each pair contributes a $2 \\times 2$ rotation-scaling block to the real canonical form. Real eigenvalues contribute $1 \\times 1$ blocks (just the eigenvalue itself).

A $4 \\times 4$ matrix with eigenvalues $2 \\pm 3i$ and $-1 \\pm i$ has real canonical form

$$\\begin{pmatrix} 2 & -3 & 0 & 0 \\\\ 3 & 2 & 0 & 0 \\\\ 0 & 0 & -1 & -1 \\\\ 0 & 0 & 1 & -1 \\end{pmatrix}$$

A $3 \\times 3$ matrix with eigenvalues $5$ and $1 \\pm 2i$ has real canonical form

$$\\begin{pmatrix} 5 & 0 & 0 \\\\ 0 & 1 & -2 \\\\ 0 & 2 & 1 \\end{pmatrix}$$

The real canonical form is the real analogue of [diagonalization](!/linear-algebra/eigen/diagonalization): it achieves the simplest possible real matrix that is similar to $A$, with the block structure directly reflecting the eigenvalue spectrum.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Dynamical Systems Interpretation`,
    content: `Complex eigenvalues produce oscillatory behavior in dynamical systems.

In the discrete system $\\mathbf{x}_{n+1} = A\\mathbf{x}_n$, an eigenvalue $\\lambda = a + bi$ with modulus $r = |\\lambda| = \\sqrt{a^2 + b^2}$ generates a spiraling trajectory. When $r > 1$, the spiral grows outward — the system is unstable. When $r < 1$, the spiral decays inward — the system converges to the origin. When $r = 1$, the trajectory traces a closed curve — perpetual oscillation without growth or decay.

In the continuous system $\\mathbf{x}' = A\\mathbf{x}$, an eigenvalue $\\lambda = a + bi$ contributes a term $e^{at}(\\cos bt, \\sin bt)$ to the solution. The real part $a$ determines exponential growth ($a > 0$) or decay ($a < 0$). The imaginary part $b$ determines the oscillation frequency. When $a = 0$, the oscillation is sustained. When $a < 0$, it is damped. When $a > 0$, it grows without bound.

Stability of a linear system reduces to eigenvalue analysis: the system is stable if and only if every eigenvalue has negative real part (continuous) or modulus less than $1$ (discrete).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `The Fundamental Theorem of Algebra Connection`,
    content: `Over $\\mathbb{C}$, every polynomial of degree $n$ factors completely into $n$ linear factors. This means every $n \\times n$ matrix — real or complex — has exactly $n$ eigenvalues counted with algebraic multiplicity when the [characteristic polynomial](!/linear-algebra/eigen/characteristic-equation) is factored over $\\mathbb{C}$.

Over $\\mathbb{R}$, some factors may be irreducible quadratics rather than linear, corresponding to conjugate pairs of complex eigenvalues. The characteristic polynomial of a real matrix factors into linear terms (real eigenvalues) and irreducible quadratic terms (complex conjugate pairs).

Working over $\\mathbb{C}$ simplifies the theory considerably. Every matrix is triangularizable over $\\mathbb{C}$ (Schur decomposition): $A = UTU^*$ where $U$ is unitary and $T$ is upper triangular with eigenvalues on the diagonal. [Diagonalizability](!/linear-algebra/eigen/diagonalization) depends only on whether the geometric multiplicities match the algebraic multiplicities, with no additional complications from irreducible quadratics.

The choice between working over $\\mathbb{R}$ and $\\mathbb{C}$ is a recurring theme. Real matrices are the natural objects of computation, but complex eigenvalues are the natural objects of spectral theory. Both perspectives are needed.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

const introContent = {
   id: "intro",
  title: `When No Real Direction Survives`,
  content: `A real matrix can have complex eigenvalues — this happens when the characteristic polynomial has no real roots. Geometrically, no real direction is mapped to a scalar multiple of itself; the transformation involves rotation. Complex eigenvalues of real matrices always come in conjugate pairs, and each pair corresponds to a rotation-scaling action on a two-dimensional subspace.`,
}

const faqQuestions = {
  obj1: {
    question: "When does a real matrix have complex eigenvalues?",
    answer: "A real matrix has complex eigenvalues when its characteristic polynomial has no real roots. For 2×2 matrices, this occurs when the discriminant tr(A)² - 4det(A) < 0. Geometrically, this means no real direction is mapped to a scalar multiple of itself—the transformation involves rotation.",
    sectionId: "1"
  },
  obj2: {
    question: "Why do complex eigenvalues come in conjugate pairs?",
    answer: "For real matrices, the characteristic polynomial has real coefficients. If λ = a + bi is a root, then so is its conjugate λ̄ = a - bi, because complex conjugation passes through polynomials with real coefficients. The eigenvectors are also conjugates of each other.",
    sectionId: "2"
  },
  obj3: {
    question: "What do complex eigenvalues a ± bi represent geometrically?",
    answer: "Complex eigenvalues represent rotation combined with scaling. The modulus r = √(a² + b²) gives the scaling factor, and θ = arctan(b/a) gives the rotation angle. When r = 1, it's pure rotation; r > 1 spirals outward; r < 1 spirals inward.",
    sectionId: "3"
  },
  obj4: {
    question: "How do you find complex eigenvectors?",
    answer: "Solve (A - λI)v = 0 using complex arithmetic. The eigenvector will have complex entries. Split it into real and imaginary parts: v = u + iw. These real vectors u and w span the 2D subspace where rotation-scaling occurs.",
    sectionId: "4"
  },
  obj5: {
    question: "What is the real canonical form for complex eigenvalues?",
    answer: "A 2×2 real matrix with eigenvalues a ± bi is similar to [[a, -b], [b, a]] = r[[cos θ, -sin θ], [sin θ, cos θ]]. This is the simplest real form—a rotation by θ scaled by r. It's the real alternative to complex diagonalization.",
    sectionId: "5"
  },
  obj6: {
    question: "How do complex eigenvalues appear in larger matrices?",
    answer: "Each conjugate pair contributes a 2×2 rotation-scaling block to the real canonical form. Real eigenvalues contribute 1×1 blocks. A 4×4 matrix with eigenvalues 2±3i and -1±i has two 2×2 blocks in its canonical form.",
    sectionId: "6"
  },
  obj7: {
    question: "What role do complex eigenvalues play in dynamical systems?",
    answer: "Complex eigenvalues produce oscillatory behavior. The modulus determines stability: |λ| > 1 (discrete) or Re(λ) > 0 (continuous) means unstable spiraling outward; |λ| < 1 or Re(λ) < 0 means stable spiraling inward. The imaginary part determines oscillation frequency.",
    sectionId: "7"
  },
  obj8: {
    question: "How does the Fundamental Theorem of Algebra relate to eigenvalues?",
    answer: "Over ℂ, every n×n matrix has exactly n eigenvalues (with multiplicity) because degree-n polynomials factor completely. Over ℝ, complex eigenvalues appear as irreducible quadratic factors. Working over ℂ simplifies theory—every matrix is triangularizable.",
    sectionId: "8"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Complex Eigenvalues",
    "description": "Learn complex eigenvalues: conjugate pairs, rotation-scaling interpretation, 2×2 worked examples, real canonical form, dynamical systems stability, and the connection to the Fundamental Theorem of Algebra.",
    "url": "https://www.learnmathclass.com/linear-algebra/eigen/complex",
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
      "name": "Complex Eigenvalues"
    },
    "teaches": [
      "When real matrices have complex eigenvalues",
      "Complex conjugate pairs property",
      "Rotation-scaling geometric interpretation",
      "Computing complex eigenvectors",
      "Real canonical form for complex eigenvalues",
      "Dynamical systems stability analysis",
      "Fundamental Theorem of Algebra connection"
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
        "name": "Eigenvalues & Eigenvectors",
        "item": "https://www.learnmathclass.com/linear-algebra/eigen"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Complex Eigenvalues",
        "item": "https://www.learnmathclass.com/linear-algebra/eigen/complex"
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
      title: "Complex Eigenvalues: Conjugate Pairs & Rotation | Learn Math Class",
      description: "Learn complex eigenvalues: conjugate pairs, rotation-scaling interpretation, 2×2 worked examples, real canonical form, dynamical systems stability, and the connection to the Fundamental Theorem of Algebra.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/eigen/complex",
      name: "Complex Eigenvalues"
    },
  }
}
   }



  export default function ComplexEigenvaluesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) { 
    
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Complex Eigenvalues</h1>
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
