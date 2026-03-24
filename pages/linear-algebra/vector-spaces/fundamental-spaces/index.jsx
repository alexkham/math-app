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
  "four fundamental subspaces",
  "column space",
  "row space",
  "null space",
  "left null space",
  "rank-nullity theorem",
  "orthogonal complements subspaces",
  "column space basis",
  "null space basis",
  "fundamental subspaces rank",
  "row space null space perpendicular",
  "dimension accounting matrix",
  "fundamental subspaces diagram",
  "matrix subspace structure"
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
    title: `Overview`,
    content: `An $m \\times n$ [matrix](!/linear-algebra/matrix) $A$ gives rise to four [subspaces](!/linear-algebra/vector-spaces/subspaces):

The column space $\\text{Col}(A)$ and the left null space $\\text{Null}(A^T)$ live in $\\mathbb{R}^m$.

The row space $\\text{Row}(A)$ and the null space $\\text{Null}(A)$ live in $\\mathbb{R}^n$.

A single integer — the [rank](!/linear-algebra/matrix/rank) $r$ — controls the [dimension](!/linear-algebra/vector-spaces/dimension) of all four. The column space and row space each have dimension $r$. The null space has dimension $n - r$. The left null space has dimension $m - r$. These four numbers add up correctly: $r + (n - r) = n$ in the domain, and $r + (m - r) = m$ in the codomain.

The four subspaces are not independent of each other. They pair off into [orthogonal](!/linear-algebra/orthogonality) complements — the row space and null space are perpendicular in $\\mathbb{R}^n$, while the column space and left null space are perpendicular in $\\mathbb{R}^m$. This structure is the definitive description of what the map $\\mathbf{x} \\mapsto A\\mathbf{x}$ does.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The Column Space`,
    content: `The column space of $A$ is the [span](!/linear-algebra/vector-spaces/span) of the columns of $A$:

$$\\text{Col}(A) = \\{A\\mathbf{x} : \\mathbf{x} \\in \\mathbb{R}^n\\} = \\text{Span}\\{\\mathbf{a}_1, \\mathbf{a}_2, \\dots, \\mathbf{a}_n\\}$$

It is the set of all possible outputs of the [linear transformation](!/linear-algebra/linear-transformations) $\\mathbf{x} \\mapsto A\\mathbf{x}$, and it lives in $\\mathbb{R}^m$. Its dimension is $r = \\text{rank}(A)$.

The column space answers the solvability question: $A\\mathbf{x} = \\mathbf{b}$ has a solution if and only if $\\mathbf{b} \\in \\text{Col}(A)$. Vectors outside the column space are unreachable — no input $\\mathbf{x}$ can produce them.

To find a [basis](!/linear-algebra/vector-spaces) for the column space, row reduce $A$ and identify the pivot columns. The corresponding columns of the original matrix $A$ form the basis. The echelon form identifies which columns are [independent](!/linear-algebra/vector-spaces/linear-independence), but the original columns are the actual vectors in $\\mathbb{R}^m$ that span the column space.

## Worked Example

$$A = \\begin{pmatrix} 1 & 3 & 2 & -1 \\\\ 2 & 6 & 5 & 0 \\\\ -1 & -3 & 0 & 3 \\end{pmatrix}$$

Row reduction gives pivots in columns $1$ and $3$. The column space basis consists of the first and third columns of the original $A$:

$$\\left\\{\\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix}, \\begin{pmatrix} 2 \\\\ 5 \\\\ 0 \\end{pmatrix}\\right\\}$$

The column space is a two-dimensional subspace (a plane through the origin) in $\\mathbb{R}^3$. The rank is $2$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `The Row Space`,
    content: `The row space of $A$ is the span of the rows, viewed as vectors in $\\mathbb{R}^n$:

$$\\text{Row}(A) = \\text{Col}(A^T)$$

It lives in $\\mathbb{R}^n$ and has dimension $r$ — the same as the column space, despite the two subspaces living in different ambient spaces.

To find a basis for the row space, row reduce $A$ and take the nonzero rows of the echelon form. Unlike the column space, the echelon form's rows are used directly — not the original rows. This is valid because elementary row operations replace rows with linear combinations of existing rows, preserving the row space. The nonzero rows of the echelon form are [independent](!/linear-algebra/vector-spaces/linear-independence) (the staircase pattern of pivots guarantees this) and span the same space as the original rows.

## Continuing the Example

The echelon form of the matrix above has two nonzero rows. These rows (as vectors in $\\mathbb{R}^4$) form a basis for the row space. The row space is a two-dimensional subspace of $\\mathbb{R}^4$.

A key fact that distinguishes the row space from the column space: row reduction preserves the row space but changes the column space. The pivot columns of the echelon form are not a basis for the column space of the original matrix — only the corresponding columns of $A$ are.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `The Null Space`,
    content: `The null space of $A$ is the set of all vectors that $A$ maps to zero:

$$\\text{Null}(A) = \\{\\mathbf{x} \\in \\mathbb{R}^n : A\\mathbf{x} = \\mathbf{0}\\}$$

It lives in $\\mathbb{R}^n$ and has dimension $n - r$, where $r$ is the rank. This dimension is the nullity, and the identity $r + (n - r) = n$ is the [rank-nullity theorem](!/linear-algebra/matrix/rank).

The null space measures the failure of injectivity. If $\\text{Null}(A) = \\{\\mathbf{0}\\}$, the map is injective — different inputs produce different outputs. If the null space is nontrivial, the map collapses some directions to zero, and distinct inputs can produce the same output: if $A\\mathbf{x}_1 = A\\mathbf{x}_2$, then $\\mathbf{x}_1 - \\mathbf{x}_2 \\in \\text{Null}(A)$.

To find a basis, reduce $A$ to [RREF](!/linear-algebra/linear-systems/rref) and identify the free variables. Each free variable is set to $1$ (with the others at $0$), and the corresponding solution is one basis vector for the null space.

## Continuing the Example

The $3 \\times 4$ matrix has rank $2$, so the null space has dimension $4 - 2 = 2$. Two free variables produce two basis vectors. The null space is a two-dimensional subspace of $\\mathbb{R}^4$ — a plane through the origin in four-dimensional space.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `The Left Null Space`,
    content: `The left null space is the null space of the [transpose](!/linear-algebra/matrix/operations):

$$\\text{Null}(A^T) = \\{\\mathbf{y} \\in \\mathbb{R}^m : A^T\\mathbf{y} = \\mathbf{0}\\}$$

Equivalently, it consists of all vectors $\\mathbf{y}$ satisfying $\\mathbf{y}^T A = \\mathbf{0}^T$ — hence the name "left" null space, since $\\mathbf{y}$ multiplies $A$ from the left.

It lives in $\\mathbb{R}^m$ and has dimension $m - r$.

The left null space measures the failure of surjectivity. If $\\text{Null}(A^T) = \\{\\mathbf{0}\\}$, the column space is all of $\\mathbb{R}^m$ and $A\\mathbf{x} = \\mathbf{b}$ has a solution for every $\\mathbf{b}$. If the left null space is nontrivial, there are directions in $\\mathbb{R}^m$ that the column space misses.

To find a basis, solve $A^T\\mathbf{y} = \\mathbf{0}$ by row reducing $A^T$. Alternatively, row reduce $[A^T \\mid I_m]$ — the identity block tracks the row operations, and the bottom portion of the result reveals the left null space.

## Continuing the Example

The matrix is $3 \\times 4$ with rank $2$, so the left null space has dimension $3 - 2 = 1$. It is a line through the origin in $\\mathbb{R}^3$ — a single vector (up to scaling) that is orthogonal to every column of $A$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Dimension Accounting`,
    content: `The four dimensions are not independent — they are locked together by the rank.

In the domain $\\mathbb{R}^n$:

$$\\dim(\\text{Row}(A)) + \\dim(\\text{Null}(A)) = r + (n - r) = n$$

In the codomain $\\mathbb{R}^m$:

$$\\dim(\\text{Col}(A)) + \\dim(\\text{Null}(A^T)) = r + (m - r) = m$$

The first equation is the rank-nullity theorem. The second is its transpose analogue. Together they say that the four subspaces account for every dimension of both the domain and the codomain — nothing is missing and nothing is double-counted.

For the running example ($3 \\times 4$ matrix, rank $2$): the row space and null space have dimensions $2$ and $2$, summing to $4 = n$. The column space and left null space have dimensions $2$ and $1$, summing to $3 = m$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Orthogonal Complements`,
    content: `The four subspaces pair off into [orthogonal](!/linear-algebra/orthogonality) complements.

In $\\mathbb{R}^n$, the row space and the null space are orthogonal complements. Every vector in the null space is perpendicular to every row of $A$, because $A\\mathbf{x} = \\mathbf{0}$ means the [dot product](!/linear-algebra/vectors/dot-product) of $\\mathbf{x}$ with each row is zero. Every vector in $\\mathbb{R}^n$ decomposes uniquely as the sum of a row-space component and a null-space component, and these two components are perpendicular.

In $\\mathbb{R}^m$, the column space and the left null space are orthogonal complements. Every vector in $\\text{Null}(A^T)$ is perpendicular to every column of $A$ (since $A^T\\mathbf{y} = \\mathbf{0}$ means $\\mathbf{y}$ dots to zero with each column). Every vector in $\\mathbb{R}^m$ decomposes uniquely as a column-space component plus a left-null-space component.

These orthogonality relationships are not incidental — they are the structural backbone of [projection](!/linear-algebra/orthogonality/projections), [least squares](!/linear-algebra/orthogonality/least-squares), and the singular value decomposition. Projecting $\\mathbf{b}$ onto the column space means splitting $\\mathbf{b}$ into its column-space component (the best approximation $A\\hat{\\mathbf{x}}$) and its left-null-space component (the residual $\\mathbf{b} - A\\hat{\\mathbf{x}}$).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `The Big Picture`,
    content: `The four fundamental subspaces can be arranged in a single diagram with the domain $\\mathbb{R}^n$ on one side and the codomain $\\mathbb{R}^m$ on the other.

The matrix $A$ maps the row space onto the column space. This restriction is a bijection — every vector in the row space has a unique image in the column space, and every vector in the column space comes from exactly one row-space vector. The rank $r$ is the dimension of both spaces, and this bijection is the "useful part" of the map.

The matrix $A$ sends the entire null space to $\\mathbf{0}$. These are the directions that the map annihilates — the information that is lost.

Combining these two facts: every vector $\\mathbf{x} \\in \\mathbb{R}^n$ decomposes as $\\mathbf{x} = \\mathbf{x}_r + \\mathbf{x}_n$ where $\\mathbf{x}_r$ is in the row space and $\\mathbf{x}_n$ is in the null space. Then $A\\mathbf{x} = A\\mathbf{x}_r + A\\mathbf{x}_n = A\\mathbf{x}_r$. The null-space component is destroyed, and the row-space component maps bijectively to the column space.

On the codomain side, the column space is what the map can reach, and the left null space is what remains unreachable. Every vector $\\mathbf{b} \\in \\mathbb{R}^m$ decomposes as $\\mathbf{b} = \\mathbf{b}_c + \\mathbf{b}_\\ell$ where $\\mathbf{b}_c \\in \\text{Col}(A)$ and $\\mathbf{b}_\\ell \\in \\text{Null}(A^T)$. The system $A\\mathbf{x} = \\mathbf{b}$ is solvable if and only if $\\mathbf{b}_\\ell = \\mathbf{0}$.

This four-subspace decomposition summarizes the entire geometry of the linear map in one picture: what gets mapped where, what gets collapsed, and what is left unreachable.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Examples Across Matrix Types`,
    content: `The four-subspace structure varies dramatically with the properties of the matrix.

For a full-rank square [matrix](!/linear-algebra/matrix) ($r = n = m$): the column space and row space are both all of $\\mathbb{R}^n$. The null space and left null space are both $\\{\\mathbf{0}\\}$. The map is a bijection — nothing is lost and nothing is missed. This is the case where $A$ is [invertible](!/linear-algebra/matrix/inverse).

For a rank-$1$ matrix ($r = 1$): the column space is a line in $\\mathbb{R}^m$, and the row space is a line in $\\mathbb{R}^n$. Every input maps to a scalar multiple of a single vector. The null space has dimension $n - 1$ — an entire hyperplane is collapsed to zero. The left null space has dimension $m - 1$. Almost everything on both sides belongs to the null spaces; only one direction survives the map.

For a [projection](!/linear-algebra/orthogonality/projections) matrix ($A^2 = A$, $A = A^T$): the column space and the row space coincide. The null space is the orthogonal complement of the column space. The map fixes every vector in the column space and kills every vector in the null space — it projects $\\mathbb{R}^n$ onto a subspace.

For the zero matrix ($r = 0$): the column space and row space are both $\\{\\mathbf{0}\\}$. The null space is all of $\\mathbb{R}^n$ and the left null space is all of $\\mathbb{R}^m$. Every vector is sent to zero.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

  const introContent = {
  title: `The Complete Structural Portrait of a Matrix`,
  content: `Every matrix defines four subspaces — two in the domain and two in the codomain — whose dimensions and orthogonality relationships form a complete picture of the linear map. The rank governs all four dimensions, and the four subspaces together account for every vector in both spaces.`,
}

const faqQuestions = {
  obj1: {
    question: "What are the four fundamental subspaces of a matrix?",
    answer: "Every m×n matrix A defines four subspaces: the column space (dimension r, in Rᵐ), the row space (dimension r, in Rⁿ), the null space (dimension n−r, in Rⁿ), and the left null space (dimension m−r, in Rᵐ). The rank r controls all four dimensions.",
    sectionId: "1"
  },
  obj2: {
    question: "How do you find a basis for the column space?",
    answer: "Row reduce A and identify the pivot columns. The corresponding columns of the original matrix A (not the echelon form) form a basis for the column space. The number of pivot columns equals the rank.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you find a basis for the null space?",
    answer: "Reduce A to RREF and identify the free variables. Set each free variable to 1 (others to 0) and solve for the pivot variables. Each free variable produces one basis vector for the null space. The null space dimension is n minus the rank.",
    sectionId: "4"
  },
  obj4: {
    question: "How are the four subspaces related by orthogonality?",
    answer: "The row space and null space are orthogonal complements in Rⁿ — every null space vector is perpendicular to every row. The column space and left null space are orthogonal complements in Rᵐ. Every vector in either ambient space decomposes uniquely into components from each complementary pair.",
    sectionId: "7"
  },
  obj5: {
    question: "What is the big picture of the four fundamental subspaces?",
    answer: "The matrix maps the row space bijectively onto the column space (the useful part) and sends the entire null space to zero (the destroyed part). On the codomain side, the column space is reachable and the left null space is unreachable. This decomposition completely describes the geometry of any linear map.",
    sectionId: "8"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Four Fundamental Subspaces",
    "description": "The four fundamental subspaces of a matrix: column space, row space, null space, left null space. Dimension accounting, orthogonal complement pairs, bases, and the complete structural portrait.",
    "url": "https://www.learnmathclass.com/linear-algebra/vector-spaces/fundamental-subspaces",
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
      "name": "Four Fundamental Subspaces"
    },
    "teaches": [
      "Column space as the set of reachable outputs",
      "Row space and its preservation under row reduction",
      "Null space and the failure of injectivity",
      "Left null space and the failure of surjectivity",
      "Dimension accounting: rank controls all four",
      "Orthogonal complement pairing",
      "Row space maps bijectively onto column space",
      "Examples across invertible, rank-1, and projection matrices"
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
        "name": "Vector Spaces",
        "item": "https://www.learnmathclass.com/linear-algebra/vector-spaces"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Fundamental Subspaces",
        "item": "https://www.learnmathclass.com/linear-algebra/vector-spaces/fundamental-subspaces"
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
//         url: "/linear-algebra/vector-spaces/fundamental-subspaces",
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
      title: "Four Fundamental Subspaces of a Matrix | Learn Math Class",
      description: "The four fundamental subspaces of a matrix: column space, row space, null space, left null space. Dimension accounting, orthogonal complement pairs, bases, and the complete structural portrait.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/vector-spaces/fundamental-subspaces",
      name: "Four Fundamental Subspaces"
    },
  }
}
   }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {
export default function FundamentalSubspacesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Fundamental Subspaces</h1>
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
