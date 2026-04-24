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
  "characteristic equation",
  "characteristic polynomial",
  "eigenvalue equation",
  "det(A - λI) = 0",
  "find eigenvalues",
  "characteristic polynomial calculator",
  "algebraic multiplicity",
  "Cayley-Hamilton theorem",
  "eigenvalue polynomial",
  "2x2 characteristic polynomial",
  "3x3 characteristic polynomial",
  "similar matrices eigenvalues",
  "characteristic equation example",
  "matrix eigenvalue formula"
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
    title: `From Eigenvectors to the Determinant Condition`,
    content: `The equation $A\\mathbf{v} = \\lambda\\mathbf{v}$ rearranges to $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$. This is a [homogeneous system](!/linear-algebra/linear-systems/homogeneous), and eigenvectors are its nontrivial solutions. Nontrivial solutions exist if and only if the coefficient matrix $A - \\lambda I$ is singular:

$$\\det(A - \\lambda I) = 0$$

This is the characteristic equation. It holds for exactly those values of $\\lambda$ that are eigenvalues of $A$. Every other value of $\\lambda$ makes $A - \\lambda I$ [invertible](!/linear-algebra/matrix/inverse), the system has only the trivial solution, and no eigenvector exists for that $\\lambda$.

The characteristic equation transforms the geometric question "which directions does $A$ preserve?" into the algebraic question "for which $\\lambda$ is this [determinant](!/linear-algebra/determinants) zero?"`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The Characteristic Polynomial`,
    content: `The expression $p(\\lambda) = \\det(A - \\lambda I)$ is a polynomial of degree $n$ in the variable $\\lambda$. It is called the characteristic polynomial of $A$.

For an $n \\times n$ matrix, $p(\\lambda)$ has degree $n$ with leading term $(-1)^n \\lambda^n$. The constant term is $p(0) = \\det(A)$ — the determinant of the matrix itself. The coefficient of $\\lambda^{n-1}$ is $(-1)^{n-1}\\text{tr}(A)$, connecting the next-to-leading term to the [trace](!/linear-algebra/matrix/trace).

The eigenvalues are precisely the roots of $p(\\lambda) = 0$. Every root is an eigenvalue, and every eigenvalue is a root. The characteristic polynomial packages the entire eigenvalue structure of the matrix into a single algebraic expression.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Computing the Characteristic Polynomial: 2×2`,
    content: `For $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, the characteristic polynomial is

$$p(\\lambda) = \\det\\begin{pmatrix} a - \\lambda & b \\\\ c & d - \\lambda \\end{pmatrix} = (a - \\lambda)(d - \\lambda) - bc = \\lambda^2 - (a + d)\\lambda + (ad - bc)$$

This is $\\lambda^2 - \\text{tr}(A)\\lambda + \\det(A)$. The eigenvalues follow from the quadratic formula:

$$\\lambda = \\frac{\\text{tr}(A) \\pm \\sqrt{\\text{tr}(A)^2 - 4\\det(A)}}{2}$$

The discriminant $\\Delta = \\text{tr}(A)^2 - 4\\det(A)$ classifies the eigenvalue type. When $\\Delta > 0$, there are two distinct real eigenvalues. When $\\Delta = 0$, there is one repeated real eigenvalue. When $\\Delta < 0$, the eigenvalues are a [complex](!/linear-algebra/eigen/complex) conjugate pair.

## Worked Example

For $A = \\begin{pmatrix} 5 & 2 \\\\ 3 & 4 \\end{pmatrix}$: $\\text{tr}(A) = 9$, $\\det(A) = 14$, $\\Delta = 81 - 56 = 25$. The eigenvalues are $\\lambda = \\frac{9 \\pm 5}{2}$, giving $\\lambda_1 = 7$ and $\\lambda_2 = 2$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Computing the Characteristic Polynomial: 3×3`,
    content: `For a $3 \\times 3$ matrix, expanding $\\det(A - \\lambda I)$ using [cofactor](!/linear-algebra/determinants/cofactors) expansion produces a cubic polynomial:

$$p(\\lambda) = -\\lambda^3 + \\text{tr}(A)\\lambda^2 - (\\text{sum of } 2 \\times 2 \\text{ principal minors})\\lambda + \\det(A)$$

The computation is lengthier but follows the same cofactor mechanics as any $3 \\times 3$ determinant.

## Worked Example

For $A = \\begin{pmatrix} 2 & 1 & 0 \\\\ 0 & 3 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix}$, this is upper [triangular](!/linear-algebra/matrix/types), so $A - \\lambda I$ is also upper triangular with diagonal entries $2 - \\lambda$, $3 - \\lambda$, $1 - \\lambda$:

$$p(\\lambda) = (2 - \\lambda)(3 - \\lambda)(1 - \\lambda)$$

The eigenvalues are $\\lambda = 1, 2, 3$ — readable directly from the diagonal. For triangular matrices, the characteristic polynomial always factors as the product of the diagonal terms, making the eigenvalues visible by inspection.

For non-triangular $3 \\times 3$ matrices, the cubic must be factored by finding rational roots (testing factors of the constant term), by inspection, or by the cubic formula.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Larger Matrices`,
    content: `For an $n \\times n$ matrix, the characteristic polynomial has degree $n$, and finding its roots becomes increasingly difficult as $n$ grows. There is no general closed-form formula for roots of polynomials of degree $5$ or higher (Abel-Ruffini theorem), so explicit factoring is limited to small matrices or matrices with special structure.

[Diagonal](!/linear-algebra/matrix/types) and [triangular](!/linear-algebra/matrix/types) matrices are immediate: the eigenvalues are the diagonal entries. Block triangular matrices factor block by block: the characteristic polynomial is the product of the characteristic polynomials of the diagonal blocks.

For general large matrices, eigenvalues are computed numerically by iterative algorithms — most importantly the QR algorithm, which repeatedly applies [QR decompositions](!/linear-algebra/decompositions/qr) to converge on the eigenvalues without ever forming the characteristic polynomial explicitly. Computing the polynomial and then finding its roots is numerically unstable for large $n$ and is never used in practice.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Algebraic Multiplicity`,
    content: `If $\\lambda_0$ is a root of the characteristic polynomial $p(\\lambda)$, its algebraic multiplicity is the largest power $k$ such that $(\\lambda - \\lambda_0)^k$ divides $p(\\lambda)$. Equivalently, it is the multiplicity of $\\lambda_0$ as a root.

If $p(\\lambda) = (\\lambda - 2)^3(\\lambda + 1)$, then $\\lambda = 2$ has algebraic multiplicity $3$ and $\\lambda = -1$ has algebraic multiplicity $1$. The algebraic multiplicities of all eigenvalues sum to $n$ — the degree of the polynomial — when complex roots are included.

The algebraic multiplicity is an upper bound for the geometric multiplicity: $1 \\leq m_g(\\lambda) \\leq m_a(\\lambda)$. The geometric multiplicity is the dimension of the eigenspace, and it can be strictly smaller than the algebraic multiplicity. When this gap occurs for any eigenvalue, the matrix is not [diagonalizable](!/linear-algebra/eigen/diagonalization).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Finding Eigenvectors After Finding Eigenvalues`,
    content: `Once the eigenvalues are known, the eigenvectors for each $\\lambda_i$ are found by solving the homogeneous system $(A - \\lambda_i I)\\mathbf{v} = \\mathbf{0}$.

Row reduce $A - \\lambda_i I$ and express the general solution in parametric form. Each free variable contributes one [basis](!/linear-algebra/vector-spaces) vector for the eigenspace $E_{\\lambda_i}$.

## Worked Example

For $A = \\begin{pmatrix} 1 & 2 \\\\ 4 & 3 \\end{pmatrix}$, the characteristic polynomial is $\\lambda^2 - 4\\lambda - 5 = (\\lambda - 5)(\\lambda + 1)$. Eigenvalues: $\\lambda_1 = 5$, $\\lambda_2 = -1$.

For $\\lambda_1 = 5$: $A - 5I = \\begin{pmatrix} -4 & 2 \\\\ 4 & -2 \\end{pmatrix}$. Row reducing: $\\begin{pmatrix} 1 & -1/2 \\\\ 0 & 0 \\end{pmatrix}$. Free variable $v_2 = t$, so $v_1 = t/2$. Eigenvector: $\\mathbf{v}_1 = (1, 2)^T$.

For $\\lambda_2 = -1$: $A + I = \\begin{pmatrix} 2 & 2 \\\\ 4 & 4 \\end{pmatrix}$. Row reducing: $\\begin{pmatrix} 1 & 1 \\\\ 0 & 0 \\end{pmatrix}$. Free variable $v_2 = t$, so $v_1 = -t$. Eigenvector: $\\mathbf{v}_2 = (-1, 1)^T$.

Verification: $A\\mathbf{v}_1 = \\begin{pmatrix} 5 \\\\ 10 \\end{pmatrix} = 5\\mathbf{v}_1$ and $A\\mathbf{v}_2 = \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix} = -1 \\cdot \\mathbf{v}_2$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `The Cayley-Hamilton Theorem`,
    content: `Every square matrix satisfies its own characteristic polynomial. If $p(\\lambda) = \\det(A - \\lambda I)$ is the characteristic polynomial, then

$$p(A) = 0$$

where $0$ is the zero matrix and $\\lambda$ is replaced by $A$ (with constant terms multiplied by $I$).

For example, if $p(\\lambda) = \\lambda^2 - 5\\lambda + 6$, then $A^2 - 5A + 6I = O$. This can be rearranged to express $A^{-1}$ as a polynomial in $A$: $A^{-1} = \\frac{1}{6}(5I - A)$ (provided $\\det(A) = 6 \\neq 0$). More generally, the Cayley-Hamilton theorem guarantees that $A^{-1}$ can always be written as a polynomial in $A$ of degree at most $n - 1$.

The theorem also shows that any power $A^k$ with $k \\geq n$ can be reduced to a polynomial in $A$ of degree at most $n - 1$ — the characteristic polynomial provides a recurrence that expresses higher powers in terms of lower ones.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Characteristic Polynomial and Similarity`,
    content: `[Similar](!/linear-algebra/transformations/basis-change) matrices have the same characteristic polynomial:

$$\\det(P^{-1}AP - \\lambda I) = \\det(P^{-1}(A - \\lambda I)P) = \\det(A - \\lambda I)$$

The second equality uses the [multiplicative property](!/linear-algebra/determinants/properties) of the determinant: $\\det(P^{-1})\\det(A - \\lambda I)\\det(P) = \\det(A - \\lambda I)$, since $\\det(P^{-1})\\det(P) = 1$.

This means the characteristic polynomial is a property of the linear transformation itself, not of any particular matrix representation. Changing the basis changes the matrix but not the polynomial. Since the eigenvalues are the roots of the polynomial, similar matrices have the same eigenvalues with the same algebraic multiplicities.

The [trace](!/linear-algebra/matrix/trace) and [determinant](!/linear-algebra/determinants) are just two of the $n$ coefficients of the characteristic polynomial. The polynomial carries more information than either one alone — it determines the complete multiset of eigenvalues, not just their sum and product.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

 const introContent = {
   id: "intro",
  title: `The Polynomial Whose Roots Are the Eigenvalues`,
  content: `The eigenvalue problem Av = λv converts into a determinant condition: det(A − λI) = 0. This determinant is a polynomial in λ whose roots are the eigenvalues. Computing the characteristic polynomial and factoring it is the standard method for finding eigenvalues of small matrices — and the polynomial's coefficients encode the trace, determinant, and other invariants of the matrix.`,
}

const faqQuestions = {
  obj1: {
    question: "What is the characteristic equation?",
    answer: "The characteristic equation is det(A - λI) = 0. It arises from the eigenvector equation Av = λv rewritten as (A - λI)v = 0. Nontrivial solutions exist only when A - λI is singular, which happens when its determinant is zero.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the characteristic polynomial?",
    answer: "The characteristic polynomial is p(λ) = det(A - λI), a degree-n polynomial for an n×n matrix. Its roots are the eigenvalues. The constant term is det(A), and the coefficient of λⁿ⁻¹ involves the trace.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you find the characteristic polynomial of a 2×2 matrix?",
    answer: "For A = [[a,b],[c,d]]: p(λ) = λ² - tr(A)λ + det(A) = λ² - (a+d)λ + (ad-bc). Use the quadratic formula: λ = (tr(A) ± √(tr(A)² - 4det(A)))/2.",
    sectionId: "3"
  },
  obj4: {
    question: "How do you find eigenvalues of a 3×3 matrix?",
    answer: "Expand det(A - λI) using cofactors to get a cubic polynomial. For triangular matrices, eigenvalues are the diagonal entries. Otherwise, factor the cubic by finding rational roots or using the cubic formula.",
    sectionId: "4"
  },
  obj5: {
    question: "How are eigenvalues found for large matrices?",
    answer: "For n ≥ 5, no closed-form root formula exists (Abel-Ruffini). Large matrices use iterative algorithms like QR iteration, which converge to eigenvalues without forming the characteristic polynomial—direct polynomial root-finding is numerically unstable.",
    sectionId: "5"
  },
  obj6: {
    question: "What is algebraic multiplicity?",
    answer: "Algebraic multiplicity is the power k such that (λ - λ₀)ᵏ divides the characteristic polynomial—the multiplicity of λ₀ as a root. It's an upper bound for geometric multiplicity. All algebraic multiplicities sum to n.",
    sectionId: "6"
  },
  obj7: {
    question: "How do you find eigenvectors after finding eigenvalues?",
    answer: "For each eigenvalue λᵢ, solve the homogeneous system (A - λᵢI)v = 0. Row reduce A - λᵢI and express the solution in parametric form. Free variables give basis vectors for the eigenspace.",
    sectionId: "7"
  },
  obj8: {
    question: "What is the Cayley-Hamilton theorem?",
    answer: "Every matrix satisfies its own characteristic polynomial: p(A) = 0 (zero matrix). This lets you express A⁻¹ as a polynomial in A and reduce high powers Aᵏ to polynomials of degree at most n-1.",
    sectionId: "8"
  },
  obj9: {
    question: "Do similar matrices have the same characteristic polynomial?",
    answer: "Yes. det(P⁻¹AP - λI) = det(A - λI) because det(P⁻¹)det(P) = 1. The characteristic polynomial is an invariant of the linear transformation, not the specific matrix representation. Similar matrices share eigenvalues with same multiplicities.",
    sectionId: "9"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Characteristic Equation",
    "description": "Learn the characteristic equation det(A - λI) = 0: characteristic polynomial, 2×2 and 3×3 examples, algebraic multiplicity, Cayley-Hamilton theorem, and similarity invariance.",
    "url": "https://www.learnmathclass.com/linear-algebra/eigen/characteristic-equation",
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
      "name": "Characteristic Equation"
    },
    "teaches": [
      "Characteristic equation det(A - λI) = 0",
      "Characteristic polynomial structure",
      "2×2 and 3×3 eigenvalue computation",
      "Algebraic multiplicity of eigenvalues",
      "Finding eigenvectors from eigenvalues",
      "Cayley-Hamilton theorem",
      "Similarity invariance of characteristic polynomial"
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
        "name": "Characteristic Equation",
        "item": "https://www.learnmathclass.com/linear-algebra/eigen/characteristic-equation"
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
      title: "Characteristic Equation: Polynomial & Eigenvalues | Learn Math Class",
      description: "Learn the characteristic equation det(A - λI) = 0: characteristic polynomial, 2×2 and 3×3 examples, algebraic multiplicity, Cayley-Hamilton theorem, and similarity invariance.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/eigen/characteristic-equation",
      name: "Characteristic Equation"
    },
  }
}
   }
export default function CharacteristicEquationPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Characteristic Equation</h1>
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
