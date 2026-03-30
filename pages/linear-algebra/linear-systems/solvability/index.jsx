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
  "solvability linear systems",
  "existence uniqueness solutions",
  "Rouché-Capelli theorem",
  "rank condition solvability",
  "consistent inconsistent system",
  "overdetermined system",
  "underdetermined system",
  "unique solution condition",
  "infinitely many solutions",
  "column space solvability",
  "solution set structure",
  "affine subspace coset",
  "square system determinant",
  "least squares overdetermined"
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
    title: `The Two Questions`,
    content: `Given the system $A\\mathbf{x} = \\mathbf{b}$ with $A$ of size $m \\times n$, two logically independent questions arise.

Existence: is there at least one vector $\\mathbf{x}$ satisfying $A\\mathbf{x} = \\mathbf{b}$? This asks whether $\\mathbf{b}$ lies in the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

Uniqueness: if a solution exists, is it the only one? This asks whether the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$ is trivial.

The two questions are independent — existence can hold without uniqueness, and non-existence makes uniqueness moot. Both are answered by the [rank](!/linear-algebra/matrix/rank) of $A$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The Existence Condition`,
    content: `The system $A\\mathbf{x} = \\mathbf{b}$ has at least one solution if and only if

$$\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}])$$

When this condition holds, $\\mathbf{b}$ is already a linear combination of the columns of $A$, so appending $\\mathbf{b}$ as an extra column does not introduce a new independent direction — the rank stays the same.

When the condition fails — $\\text{rank}([A \\mid \\mathbf{b}]) > \\text{rank}(A)$ — the vector $\\mathbf{b}$ is not in the column space. In the [echelon form](!/linear-algebra/linear-systems/echelon-form) of the augmented matrix, this appears as a row $[0 \\; 0 \\; \\cdots \\; 0 \\mid d]$ with $d \\neq 0$: the equation $0 = d$ has no solution, and the system is inconsistent.

Since appending one column can increase the rank by at most $1$, the only possibilities are $\\text{rank}([A \\mid \\mathbf{b}]) = \\text{rank}(A)$ (consistent) or $\\text{rank}([A \\mid \\mathbf{b}]) = \\text{rank}(A) + 1$ (inconsistent).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `The Uniqueness Condition`,
    content: `When a solution exists, it is unique if and only if

$$\\text{rank}(A) = n$$

where $n$ is the number of unknowns. Full column rank means every column of $A$ contains a pivot, leaving no free variables. The null space is $\\{\\mathbf{0}\\}$, so the particular solution $\\mathbf{x}_p$ stands alone with nothing to add.

When $\\text{rank}(A) < n$, there are $n - \\text{rank}(A)$ free variables. Each free variable parametrizes a direction along which the solution can move without violating the equations. The solution set is infinite — a translated copy of the null space, which has dimension $n - \\text{rank}(A)$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `The Three Cases Combined`,
    content: `Putting existence and uniqueness together, every linear system falls into exactly one of three cases.

$\\text{rank}(A) < \\text{rank}([A \\mid \\mathbf{b}])$: no solution. The system is inconsistent.

$\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}]) = n$: exactly one solution. The system is consistent and fully determined.

$\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}]) < n$: infinitely many solutions. The system is consistent but underdetermined, with $n - \\text{rank}(A)$ free parameters.

There is no case with a finite number of solutions greater than one. If two distinct solutions exist, their difference lies in the null space, which is a [subspace](!/linear-algebra/vector-spaces/subspaces) — and a nontrivial subspace contains infinitely many vectors, generating infinitely many solutions.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `The Rouché–Capelli Theorem`,
    content: `The existence condition $\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}])$ is known as the Rouché–Capelli theorem (or the Kronecker–Capelli theorem in some traditions). It states:

The system $A\\mathbf{x} = \\mathbf{b}$ is consistent if and only if the coefficient matrix and the augmented matrix have the same rank. When consistent, the solution set has dimension $n - \\text{rank}(A)$.

The theorem unifies the existence and dimension questions into a single rank comparison. It applies to every linear system regardless of the shape of $A$ — square, tall, or wide. The proof follows directly from the column-space interpretation: $\\mathbf{b} \\in \\text{Col}(A)$ if and only if adding $\\mathbf{b}$ as a column does not increase the rank.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Square Systems`,
    content: `When $A$ is $n \\times n$, the [determinant](!/linear-algebra/determinants) provides the sharpest diagnostic.

If $\\det(A) \\neq 0$: the matrix is [invertible](!/linear-algebra/matrix/inverse), the rank is $n$, and the system $A\\mathbf{x} = \\mathbf{b}$ has exactly one solution for every $\\mathbf{b}$. The solution is $\\mathbf{x} = A^{-1}\\mathbf{b}$, or equivalently, the solution obtained by [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination). Existence and uniqueness both hold universally — the right-hand side does not matter.

If $\\det(A) = 0$: the matrix is singular, the rank is less than $n$, and the outcome depends on $\\mathbf{b}$. For some $\\mathbf{b}$ (those in the column space), infinitely many solutions exist. For other $\\mathbf{b}$ (those outside the column space), no solution exists. The determinant test determines whether the coefficient matrix is adequate; the rank comparison with the augmented matrix determines whether the specific $\\mathbf{b}$ is reachable.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Overdetermined Systems`,
    content: `When $m > n$ — more equations than unknowns — the system is overdetermined. The coefficient matrix is tall, and generically, no solution exists.

The column space of $A$ is at most $n$-dimensional inside $\\mathbb{R}^m$. When $m > n$, this column space is a proper subspace — most vectors in $\\mathbb{R}^m$ lie outside it. A randomly chosen $\\mathbf{b}$ will almost certainly not be in the column space, making the system inconsistent.

A solution exists only when $\\mathbf{b}$ happens to lie in the column space — when the extra equations are consistent with the first $n$. When a solution does exist and $\\text{rank}(A) = n$, it is unique.

When no exact solution exists, the [least-squares](!/linear-algebra/orthogonality/least-squares) approach finds the $\\hat{\\mathbf{x}}$ that minimizes $\\|A\\mathbf{x} - \\mathbf{b}\\|^2$ — the closest approximation. The least-squares solution satisfies the normal equations $A^T A \\hat{\\mathbf{x}} = A^T \\mathbf{b}$ and is the [projection](!/linear-algebra/orthogonality/projections) of $\\mathbf{b}$ onto the column space.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Underdetermined Systems`,
    content: `When $m < n$ — fewer equations than unknowns — the system is underdetermined. If a solution exists, it is never unique: the rank cannot exceed $m$, which is less than $n$, so at least $n - m$ free variables remain.

The solution set, when nonempty, is an affine subspace of dimension at least $n - m$. Multiple vectors $\\mathbf{x}$ satisfy the equations, and additional criteria beyond the linear system itself are needed to select a preferred one.

Common selection criteria include minimum norm (the $\\mathbf{x}$ closest to $\\mathbf{0}$, given by the pseudoinverse $\\mathbf{x} = A^T(AA^T)^{-1}\\mathbf{b}$), sparsity (the $\\mathbf{x}$ with the fewest nonzero entries, central to compressed sensing), and physical constraints (bounds or nonnegativity in engineering applications).

Underdetermined systems are not defective — they arise naturally whenever a problem has more degrees of freedom than constraints. The linear system identifies the feasible set; the selection criterion picks a point within it.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Geometric Interpretation`,
    content: `Each equation $a_{i1}x_1 + a_{i2}x_2 + \\cdots + a_{in}x_n = b_i$ defines a hyperplane in $\\mathbb{R}^n$ — a flat set of dimension $n - 1$. The solution set of the full system is the intersection of all $m$ hyperplanes.

When the system is inconsistent, the hyperplanes have no common point. In $\\mathbb{R}^2$ this means parallel lines. In $\\mathbb{R}^3$ it can mean parallel planes, or planes arranged in a triangular prism where each pair intersects but no point lies on all three.

When the system has a unique solution, the hyperplanes meet at a single point. This requires at least $n$ independent equations — enough to cut the solution space down from $n$ dimensions to $0$.

When the system has infinitely many solutions, the hyperplanes meet along a flat of dimension $n - r$, where $r = \\text{rank}(A)$. Each independent equation reduces the dimension of the intersection by one, and the rank counts how many equations cut independently. The remaining $n - r$ dimensions are the free directions in the solution set.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Structure of the Solution Set`,
    content: `When $A\\mathbf{x} = \\mathbf{b}$ is consistent, the complete solution set has the form

$$\\{\\mathbf{x}_p + \\mathbf{x}_h : \\mathbf{x}_h \\in \\text{Null}(A)\\}$$

where $\\mathbf{x}_p$ is any one particular solution. This set is a coset of the null space — the null space translated by $\\mathbf{x}_p$. In geometric terms, it is an affine subspace: a [subspace](!/linear-algebra/vector-spaces/subspaces) shifted away from the origin.

The dimension of the solution set equals the dimension of the null space: $n - \\text{rank}(A)$. When this is $0$, the solution set is a single point $\\{\\mathbf{x}_p\\}$. When it is $1$, the solution set is a line. When it is $2$, a plane. The shape is always a flat, and the null space determines its orientation.

The particular solution $\\mathbf{x}_p$ captures the effect of the right-hand side $\\mathbf{b}$. The [homogeneous](!/linear-algebra/linear-systems/homogeneous) component $\\mathbf{x}_h$ captures the inherent freedom in the system — the directions along which the solution can shift without violating any equation. This decomposition into "forced" and "free" parts is one of the most fundamental structural results in linear algebra.`,
    before: ``,
    after: ``,
    link: ``,
  },
}


 const introContent = {
  title: `When Solutions Exist and When They Are Unique`,
  content: `Two separate questions govern every linear system: does at least one solution exist, and if so, is that solution the only one? The rank of the coefficient matrix answers both. A single integer determines whether the system is inconsistent, uniquely solvable, or infinitely underdetermined — and characterizes the geometry of the solution set in each case.`,
}

const faqQuestions = {
  obj1: {
    question: "When does a linear system have a solution?",
    answer: "The system Ax = b has a solution if and only if rank(A) = rank([A | b]), meaning b lies in the column space of A. If appending b as a column increases the rank, the system is inconsistent and no solution exists.",
    sectionId: "2"
  },
  obj2: {
    question: "When is the solution unique?",
    answer: "When a solution exists, it is unique if and only if rank(A) = n (the number of unknowns). Full column rank means no free variables and a trivial null space. When rank(A) < n, there are n − rank(A) free parameters and infinitely many solutions.",
    sectionId: "3"
  },
  obj3: {
    question: "What is the Rouché-Capelli theorem?",
    answer: "The Rouché-Capelli theorem states that Ax = b is consistent if and only if the coefficient matrix and the augmented matrix have the same rank. When consistent, the solution set has dimension n − rank(A). It unifies existence and dimension into a single rank comparison.",
    sectionId: "5"
  },
  obj4: {
    question: "What happens with overdetermined systems?",
    answer: "When there are more equations than unknowns (m > n), no exact solution usually exists because most vectors b lie outside the column space. When no exact solution exists, the least-squares approach finds the x that minimizes ‖Ax − b‖² by solving the normal equations AᵀAx = Aᵀb.",
    sectionId: "7"
  },
  obj5: {
    question: "What is the structure of the solution set?",
    answer: "When consistent, the solution set is {xₚ + xₕ : xₕ ∈ Null(A)} — the null space translated by a particular solution. Its dimension equals n − rank(A). When this is 0, the solution is a single point. When positive, it is a line, plane, or higher-dimensional flat.",
    sectionId: "10"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Solvability of Linear Systems",
    "description": "Solvability of linear systems: existence and uniqueness via rank, Rouché-Capelli theorem, three cases, square and rectangular systems, overdetermined least squares, and solution set structure.",
    "url": "https://www.learnmathclass.com/linear-algebra/linear-systems/solvability",
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
      "name": "Solvability of Linear Systems"
    },
    "teaches": [
      "Existence condition via rank comparison",
      "Uniqueness condition via full column rank",
      "The three cases: none, unique, infinitely many",
      "Rouché-Capelli theorem",
      "Square systems and the determinant test",
      "Overdetermined systems and least squares",
      "Underdetermined systems and minimum norm",
      "Geometric interpretation as hyperplane intersections",
      "Solution set as translated null space"
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
        "name": "Linear Systems",
        "item": "https://www.learnmathclass.com/linear-algebra/linear-systems"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Solvability",
        "item": "https://www.learnmathclass.com/linear-algebra/linear-systems/solvability"
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
//         url: "/linear-algebra/linear-systems/solvability",
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
      title: "Solvability: Existence & Uniqueness | Learn Math Class",
      description: "Solvability of linear systems: existence and uniqueness via rank, Rouché-Capelli theorem, three cases, square and rectangular systems, overdetermined least squares, and solution set structure.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/linear-systems/solvability",
      name: "Solvability of Linear Systems"
    },
  }
}
   }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {
export default function SolvabilityPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Solvability of Linear Systems</h1>
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
