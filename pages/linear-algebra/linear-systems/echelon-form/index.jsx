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
  "row echelon form",
  "reduced row echelon form",
  "REF RREF",
  "pivot position",
  "pivot column free column",
  "back substitution",
  "parametric vector form",
  "RREF uniqueness",
  "echelon form rank",
  "reading solutions echelon form",
  "inconsistent system echelon",
  "staircase pattern matrix",
  "Gauss-Jordan RREF",
  "free variables pivot variables"
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
    title: `Row Echelon Form`,
    content: `A matrix is in row echelon form (REF) if it satisfies three conditions. Every zero row (a row of all zeros) sits at the bottom of the matrix. The leading entry of each nonzero row — called the pivot — is strictly to the right of the pivot in the row above. Every entry below a pivot is zero.

These conditions create a staircase pattern that descends from upper-left to lower-right:

$$\\begin{pmatrix} \\boxed{2} & 3 & -1 & 4 & 7 \\\\ 0 & \\boxed{1} & 5 & 0 & 2 \\\\ 0 & 0 & 0 & \\boxed{4} & -3 \\\\ 0 & 0 & 0 & 0 & 0 \\end{pmatrix}$$

The boxed entries are pivots. Each sits to the right of and below the previous one, with zeros filling in below and to the left. The bottom row is all zeros.

REF is not unique. Different sequences of row operations applied to the same matrix can produce different echelon forms — the pivots may have different values, and the non-pivot entries above the pivots may differ. What remains the same across all echelon forms of a given matrix is the set of pivot positions (which columns contain pivots).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Reduced Row Echelon Form`,
    content: `A matrix is in reduced row echelon form (RREF) if it satisfies two additional conditions beyond REF. Each pivot is equal to $1$. Each pivot is the only nonzero entry in its column — all entries above the pivot are also zero, not just below.

Applying these conditions to the previous example:

$$\\begin{pmatrix} 1 & 0 & -16 & 0 & \\frac{29}{4} \\\\ 0 & 1 & 5 & 0 & 2 \\\\ 0 & 0 & 0 & 1 & -\\frac{3}{4} \\\\ 0 & 0 & 0 & 0 & 0 \\end{pmatrix}$$

Every pivot is $1$, and every other entry in a pivot column is $0$. The pivot columns are clean unit vectors within the matrix. The non-pivot columns (columns $3$ and $5$ in this example) can contain anything.

RREF is achieved from REF by [Gauss-Jordan elimination](!/linear-algebra/linear-systems/gaussian-elimination): scale each pivot row so the pivot becomes $1$, then use row addition to eliminate all entries above each pivot.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Uniqueness of RREF`,
    content: `Every matrix has exactly one RREF. No matter which sequence of row operations is used to reach it, the result is the same.

This is not true of REF — different reduction paths can produce different row echelon forms of the same matrix, with different values in the non-pivot entries. But RREF is canonical: it is the unique representative of the matrix's row-equivalence class in reduced form.

The uniqueness of RREF implies that the pivot positions are intrinsic to the matrix. They do not depend on how the reduction is carried out. This means the [rank](!/linear-algebra/matrix/rank) (the number of pivots), the free variables (the non-pivot columns), and the entire solution structure are determined by the matrix itself, not by any particular algorithm applied to it.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Pivot Columns and Free Columns`,
    content: `Pivot columns are the columns that contain a pivot position in the echelon form. Free columns are everything else.

The number of pivot columns equals the rank of the matrix. The number of free columns in the coefficient matrix $A$ (not counting the augmented column) equals $n - \\text{rank}(A)$, which is the nullity — the dimension of the [null space](!/linear-algebra/vector-spaces/fundamental-spaces).

In the context of a linear system, each pivot column corresponds to a pivot variable: a variable whose value is determined once the free variables are assigned. Each free column corresponds to a free variable: a parameter that can take any real value, generating a family of solutions.

For the RREF example above, columns $1$, $2$, and $4$ are pivot columns, while columns $3$ and $5$ are free. The variables $x_1$, $x_2$, $x_4$ are pivot variables determined by $x_3$ and $x_5$, which are free.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Reading Solutions from REF`,
    content: `In row echelon form, the solution is extracted by back substitution: solve from the bottom nonzero row upward, one pivot variable at a time.

## Worked Example

$$\\left(\\begin{array}{ccc|c} 1 & 3 & -2 & 5 \\\\ 0 & 1 & 4 & -1 \\\\ 0 & 0 & 1 & 2 \\end{array}\\right)$$

Row $3$: $x_3 = 2$.

Row $2$: $x_2 + 4(2) = -1$, so $x_2 = -9$.

Row $1$: $x_1 + 3(-9) - 2(2) = 5$, so $x_1 = 5 + 27 + 4 = 36$.

Each step uses values computed in previous steps. The process requires $n$ substitutions for an $n \\times n$ system with a unique solution. When free variables are present, they appear as unresolved symbols carried through the substitution, producing a parametric expression.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Reading Solutions from RREF`,
    content: `In RREF, each pivot variable is already isolated. The solution is visible by inspection — no back substitution is needed.

## Worked Example

The same system in RREF:

$$\\left(\\begin{array}{ccc|c} 1 & 0 & 0 & 36 \\\\ 0 & 1 & 0 & -9 \\\\ 0 & 0 & 1 & 2 \\end{array}\\right)$$

Reading directly: $x_1 = 36$, $x_2 = -9$, $x_3 = 2$.

When free variables are present, RREF isolates each pivot variable in terms of the free variables:

$$\\left(\\begin{array}{cccc|c} 1 & 0 & 3 & 0 & 7 \\\\ 0 & 1 & -2 & 0 & 1 \\\\ 0 & 0 & 0 & 1 & 4 \\end{array}\\right)$$

Column $3$ is free. Reading off: $x_1 = 7 - 3x_3$, $x_2 = 1 + 2x_3$, $x_4 = 4$, and $x_3$ is free. Setting $x_3 = t$ gives the parametric solution without any backward solving.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Parametric Vector Form`,
    content: `When free variables exist, the general solution is best expressed in parametric vector form. Each free variable becomes a parameter, and the solution is written as a particular solution plus a linear combination of direction vectors — one per free variable.

For the system with RREF

$$\\left(\\begin{array}{cccc|c} 1 & 2 & 0 & -1 & 5 \\\\ 0 & 0 & 1 & 3 & -2 \\end{array}\\right)$$

Pivots in columns $1$ and $3$. Free variables: $x_2 = s$, $x_4 = t$. Reading off: $x_1 = 5 - 2s + t$, $x_3 = -2 - 3t$.

$$\\mathbf{x} = \\begin{pmatrix} 5 \\\\ 0 \\\\ -2 \\\\ 0 \\end{pmatrix} + s\\begin{pmatrix} -2 \\\\ 1 \\\\ 0 \\\\ 0 \\end{pmatrix} + t\\begin{pmatrix} 1 \\\\ 0 \\\\ -3 \\\\ 1 \\end{pmatrix}$$

The first vector is a particular solution $\\mathbf{x}_p$. The two direction vectors form a [basis](!/linear-algebra/vector-spaces) for the null space of the coefficient matrix. The solution set is the null space translated by $\\mathbf{x}_p$ — an affine subspace of dimension $2$ in $\\mathbb{R}^4$.

For a [homogeneous](!/linear-algebra/linear-systems/homogeneous) system ($\\mathbf{b} = \\mathbf{0}$), the particular solution is $\\mathbf{0}$ and the general solution is purely a null-space combination.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Detecting Inconsistency`,
    content: `A system is inconsistent — has no solution — if and only if the echelon form of the augmented matrix contains a row of the form

$$[0 \\quad 0 \\quad \\cdots \\quad 0 \\mid d] \\qquad \\text{with } d \\neq 0$$

This row represents the equation $0 = d$, which no values of the unknowns can satisfy.

In terms of [rank](!/linear-algebra/matrix/rank), inconsistency occurs when $\\text{rank}([A \\mid \\mathbf{b}]) > \\text{rank}(A)$. The extra column $\\mathbf{b}$ introduces a new pivot that the coefficient matrix alone does not have — meaning $\\mathbf{b}$ is not in the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

If no such contradictory row appears, the system is consistent. The distinction between unique and infinite solutions then depends on whether free variables exist: rank $= n$ gives a unique solution, rank $< n$ gives infinitely many.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Echelon Form of Special Matrices`,
    content: `Several [matrix types](!/linear-algebra/matrix/types) are already in echelon form or reach it with minimal work.

The [identity matrix](!/linear-algebra/matrix/types) $I_n$ is in RREF: $n$ pivots, each equal to $1$, each alone in its column. Rank $n$, no free variables.

Any [diagonal](!/linear-algebra/matrix/types) matrix is in REF. If all diagonal entries are nonzero, scaling each to $1$ produces RREF. If some diagonal entries are zero, the corresponding rows are zero rows and the rank drops.

An upper [triangular](!/linear-algebra/matrix/types) matrix is already in REF. Its pivots are the nonzero diagonal entries, and its rank equals the number of nonzero entries on the diagonal.

A lower triangular matrix is not in REF (the staircase goes the wrong way), but forward elimination converts it quickly — each column requires at most one elimination step.

The zero matrix is in both REF and RREF. It has rank $0$, and the corresponding homogeneous system $O\\mathbf{x} = \\mathbf{0}$ has every variable free.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Echelon Form and Rank`,
    content: `The [rank](!/linear-algebra/matrix/rank) of any matrix equals the number of pivots in any echelon form. This is the standard computational method for determining rank: row reduce and count pivots.

From the rank, everything else follows. The dimension of the column space is $r$. The dimension of the row space is $r$. The number of free variables is $n - r$. The dimension of the null space is $n - r$. The system $A\\mathbf{x} = \\mathbf{b}$ is consistent if and only if the augmented matrix has the same rank $r$ as $A$. The solution, when it exists, is unique if $r = n$ and infinite if $r < n$.

The pivot positions also identify [bases](!/linear-algebra/vector-spaces) for the fundamental subspaces. The original columns at pivot positions form a basis for the column space. The nonzero rows of the echelon form are a basis for the row space. The parametric solution of $A\\mathbf{x} = \\mathbf{0}$ gives a basis for the null space. Everything flows from counting and locating the pivots.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

 const introContent = {
  title: `The Staircase That Reveals Everything`,
  content: `Row echelon form and reduced row echelon form are the standard targets of Gaussian elimination. The staircase pattern of pivots immediately exposes the rank, the free variables, and the solvability of the system. RREF goes one step further — it is unique for every matrix, making it a canonical form from which the solution can be read without any back substitution.`,
}

const faqQuestions = {
  obj1: {
    question: "What is row echelon form?",
    answer: "A matrix is in row echelon form (REF) when zero rows are at the bottom, each pivot is to the right of the pivot above, and all entries below each pivot are zero. This creates a staircase pattern. The solution is obtained by back substitution from the bottom row upward.",
    sectionId: "1"
  },
  obj2: {
    question: "What is reduced row echelon form?",
    answer: "Reduced row echelon form (RREF) adds two conditions to REF: each pivot equals 1 and is the only nonzero entry in its column. RREF is unique for every matrix, and solutions can be read directly without back substitution.",
    sectionId: "2"
  },
  obj3: {
    question: "What is the difference between pivot and free variables?",
    answer: "Pivot variables correspond to columns containing a pivot — their values are determined by the system. Free variables correspond to non-pivot columns and can take any real value. Free variables parametrize the solution set: each one adds a dimension to the solution space.",
    sectionId: "4"
  },
  obj4: {
    question: "How do you detect an inconsistent system from echelon form?",
    answer: "A system is inconsistent if the echelon form contains a row [0 0 ⋯ 0 | d] with d ≠ 0, representing the impossible equation 0 = d. This means rank([A | b]) > rank(A) and the right-hand side b is not in the column space of A.",
    sectionId: "8"
  },
  obj5: {
    question: "How does echelon form determine the rank?",
    answer: "The rank of a matrix equals the number of pivots in any echelon form. From the rank r, everything follows: column space dimension r, null space dimension n − r, consistency when rank(A) = rank([A | b]), and uniqueness when r = n.",
    sectionId: "10"
  }
}
const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Row Echelon Form and Reduced Row Echelon Form",
    "description": "Row echelon form (REF) and reduced row echelon form (RREF): pivot positions, back substitution, parametric vector form, RREF uniqueness, inconsistency detection, and rank from pivots.",
    "url": "https://www.learnmathclass.com/linear-algebra/linear-systems/echelon-form",
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
      "name": "Row Echelon Form"
    },
    "teaches": [
      "Row echelon form definition and staircase pattern",
      "Reduced row echelon form and its uniqueness",
      "Pivot columns vs free columns",
      "Reading solutions from REF by back substitution",
      "Reading solutions from RREF by inspection",
      "Parametric vector form for infinite solutions",
      "Detecting inconsistency from echelon form",
      "Rank as the number of pivots"
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
        "name": "Echelon Form",
        "item": "https://www.learnmathclass.com/linear-algebra/linear-systems/echelon-form"
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
//         url: "/linear-algebra/linear-systems/echelon-form",
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
      title: "Row Echelon Form (REF) & RREF | Learn Math Class",
      description: "Row echelon form (REF) and reduced row echelon form (RREF): pivot positions, back substitution, parametric vector form, RREF uniqueness, inconsistency detection, and rank from pivots.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/linear-systems/echelon-form",
      name: "Row Echelon Form and Reduced Row Echelon Form"
    },
  }
}
   }
export default function EchelonFormPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Reduced Row Echelon Form(REF)</h1>
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
