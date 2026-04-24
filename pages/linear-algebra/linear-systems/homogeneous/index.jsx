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
  "homogeneous linear system",
  "Ax = 0",
  "trivial solution nontrivial",
  "null space solution set",
  "superposition principle",
  "homogeneous vs non-homogeneous",
  "nontrivial solutions rank",
  "null space basis",
  "parametric vector form homogeneous",
  "eigenvalue homogeneous system",
  "free variables nontrivial solutions",
  "more unknowns than equations",
  "nullity rank-nullity",
  "linear independence homogeneous"
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
    title: `Definition`,
    content: `A homogeneous linear system is one where every equation has zero on the right-hand side:

$$A\\mathbf{x} = \\mathbf{0}$$

The augmented matrix is $[A \\mid \\mathbf{0}]$. Since the last column is all zeros, row operations on the augmented matrix never produce a contradictory row $[0 \\; \\cdots \\; 0 \\mid d]$ with $d \\neq 0$. A homogeneous system is always consistent.

The vector $\\mathbf{x} = \\mathbf{0}$ satisfies every equation — this is the trivial solution. It always exists. The central question for a homogeneous system is never "does a solution exist?" but "does a nontrivial solution exist?"`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `When Do Nontrivial Solutions Exist?`,
    content: `Nontrivial solutions to $A\\mathbf{x} = \\mathbf{0}$ exist if and only if the [rank](!/linear-algebra/matrix/rank) of $A$ is less than $n$, the number of unknowns. When $\\text{rank}(A) < n$, at least one free variable appears in the [echelon form](!/linear-algebra/linear-systems/echelon-form), and that free variable parametrizes a family of nonzero solutions.

For a square $n \\times n$ matrix, nontrivial solutions exist if and only if $\\det(A) = 0$. A nonzero [determinant](!/linear-algebra/determinants) means full rank, which means no free variables, which means only the trivial solution.

One case is automatic: if the system has more unknowns than equations ($n > m$), nontrivial solutions always exist. The rank of an $m \\times n$ matrix cannot exceed $m$, and when $m < n$, the rank is strictly less than $n$. This guarantees at least $n - m$ free variables, producing an infinite family of nontrivial solutions. Fewer equations than unknowns always leaves room.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `The Solution Set Is the Null Space`,
    content: `The set of all solutions to $A\\mathbf{x} = \\mathbf{0}$ is the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$:

$$\\text{Null}(A) = \\{\\mathbf{x} \\in \\mathbb{R}^n : A\\mathbf{x} = \\mathbf{0}\\}$$

The null space is a [subspace](!/linear-algebra/vector-spaces/subspaces) of $\\mathbb{R}^n$. It contains $\\mathbf{0}$, and it is closed under addition and scalar multiplication: if $A\\mathbf{u} = \\mathbf{0}$ and $A\\mathbf{v} = \\mathbf{0}$, then $A(\\mathbf{u} + \\mathbf{v}) = \\mathbf{0}$ and $A(c\\mathbf{u}) = \\mathbf{0}$.

The [dimension](!/linear-algebra/vector-spaces/dimension) of the null space is the nullity: $\\text{nullity}(A) = n - \\text{rank}(A)$. When the nullity is $0$, the null space is $\\{\\mathbf{0}\\}$ and only the trivial solution exists. When the nullity is $k > 0$, the null space is a $k$-dimensional subspace, and the solution set contains infinitely many vectors forming a $k$-dimensional flat through the origin.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Finding the Null Space`,
    content: `The algorithm is a direct application of [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination). Row reduce $A$ to echelon form (reducing just $A$ — the zero augmented column adds nothing). Identify the pivot variables and the free variables. For each free variable, set it to $1$ with all other free variables at $0$, and solve for the pivot variables by back substitution. Each setting produces one basis vector for the null space.

## Worked Example

$$A = \\begin{pmatrix} 1 & 2 & -1 & 0 & 3 \\\\ 2 & 4 & 0 & 2 & 8 \\\\ -1 & -2 & 2 & 1 & 0 \\end{pmatrix}$$

Row reduce:

$$\\xrightarrow{R_2 - 2R_1,\\; R_3 + R_1} \\begin{pmatrix} 1 & 2 & -1 & 0 & 3 \\\\ 0 & 0 & 2 & 2 & 2 \\\\ 0 & 0 & 1 & 1 & 3 \\end{pmatrix} \\xrightarrow{R_3 - \\frac{1}{2}R_2} \\begin{pmatrix} 1 & 2 & -1 & 0 & 3 \\\\ 0 & 0 & 2 & 2 & 2 \\\\ 0 & 0 & 0 & 0 & 2 \\end{pmatrix}$$

Pivots in columns $1$, $3$, $5$. Free variables: $x_2 = s$, $x_4 = t$. Row $3$: $2x_5 = 0 \\Rightarrow x_5 = 0$. Row $2$: $2x_3 + 2t = 0 \\Rightarrow x_3 = -t$. Row $1$: $x_1 + 2s + t + 0 = 0 \\Rightarrow x_1 = -2s - t$.

Setting $s = 1, t = 0$: $\\mathbf{v}_1 = (-2, 1, 0, 0, 0)$. Setting $s = 0, t = 1$: $\\mathbf{v}_2 = (-1, 0, -1, 1, 0)$.

The null space is $\\text{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$, a two-dimensional subspace of $\\mathbb{R}^5$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Parametric Vector Form`,
    content: `The general solution to $A\\mathbf{x} = \\mathbf{0}$ is a linear combination of the null-space basis vectors:

$$\\mathbf{x} = t_1\\mathbf{v}_1 + t_2\\mathbf{v}_2 + \\cdots + t_k\\mathbf{v}_k$$

where $\\mathbf{v}_1, \\dots, \\mathbf{v}_k$ are the basis vectors found by the algorithm above and $t_1, \\dots, t_k$ are free parameters ranging over all real numbers. The number of parameters $k = n - \\text{rank}(A)$ is the nullity.

When $k = 0$, the only solution is $\\mathbf{x} = \\mathbf{0}$. When $k = 1$, the solutions form a line through the origin in $\\mathbb{R}^n$. When $k = 2$, a plane through the origin. In general, the solution set is a $k$-dimensional subspace passing through the origin.

There is no particular solution $\\mathbf{x}_p$ to add because the right-hand side is $\\mathbf{0}$ — the zero vector is itself the particular solution. The entire solution set is the null space, unshifted.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `The Superposition Principle`,
    content: `If $\\mathbf{x}_1$ and $\\mathbf{x}_2$ are solutions to $A\\mathbf{x} = \\mathbf{0}$, then any linear combination $c_1\\mathbf{x}_1 + c_2\\mathbf{x}_2$ is also a solution:

$$A(c_1\\mathbf{x}_1 + c_2\\mathbf{x}_2) = c_1 A\\mathbf{x}_1 + c_2 A\\mathbf{x}_2 = c_1\\mathbf{0} + c_2\\mathbf{0} = \\mathbf{0}$$

This is precisely the statement that the solution set is a [subspace](!/linear-algebra/vector-spaces/subspaces) — it is closed under addition and scalar multiplication. The superposition principle is the reason the general solution is a linear combination of basis vectors, and it is the reason the null space has the clean structure of a [vector space](!/linear-algebra/vector-spaces) rather than an arbitrary collection of points.

Superposition holds only for homogeneous systems. For a non-homogeneous system $A\\mathbf{x} = \\mathbf{b}$ with $\\mathbf{b} \\neq \\mathbf{0}$, the sum of two solutions is generally not a solution: $A(\\mathbf{x}_1 + \\mathbf{x}_2) = \\mathbf{b} + \\mathbf{b} = 2\\mathbf{b} \\neq \\mathbf{b}$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Homogeneous vs. Non-Homogeneous`,
    content: `The homogeneous system $A\\mathbf{x} = \\mathbf{0}$ and the non-homogeneous system $A\\mathbf{x} = \\mathbf{b}$ are deeply connected. If $\\mathbf{x}_p$ is any particular solution to $A\\mathbf{x} = \\mathbf{b}$, then every solution has the form

$$\\mathbf{x} = \\mathbf{x}_p + \\mathbf{x}_h$$

where $\\mathbf{x}_h \\in \\text{Null}(A)$ is a solution to the homogeneous system. The particular solution accounts for $\\mathbf{b}$; the null-space component accounts for the freedom.

This decomposition has two immediate consequences. If the null space is trivial ($\\text{nullity} = 0$), the non-homogeneous system has at most one solution — either $\\mathbf{x}_p$ alone or nothing. If the null space is nontrivial ($\\text{nullity} > 0$), then either $A\\mathbf{x} = \\mathbf{b}$ has no solution or it has infinitely many — there is no middle ground.

The [solution set](!/linear-algebra/linear-systems/solvability) of $A\\mathbf{x} = \\mathbf{b}$ is therefore a translated copy of the null space: the null space shifted by $\\mathbf{x}_p$. The homogeneous system determines the shape and dimension of the solution set; the particular solution determines its position.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Homogeneous Systems and Linear Independence`,
    content: `Testing whether vectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_k$ are [linearly independent](!/linear-algebra/vector-spaces/linear-independence) is equivalent to checking whether the homogeneous system $A\\mathbf{c} = \\mathbf{0}$ has only the trivial solution, where $A = [\\mathbf{v}_1 \\; \\mathbf{v}_2 \\; \\cdots \\; \\mathbf{v}_k]$.

The equation $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}$ is literally the system $A\\mathbf{c} = \\mathbf{0}$. If the null space of $A$ is trivial, the only solution is $\\mathbf{c} = \\mathbf{0}$ and the vectors are independent. If the null space is nontrivial, some nonzero $\\mathbf{c}$ satisfies the equation, providing an explicit dependence relation — the entries of $\\mathbf{c}$ are the coefficients that express one vector as a combination of the others.

This is the computational link between homogeneous systems and independence. Row reducing $A$ and checking for free variables is the standard algorithm for deciding independence, and the null-space basis vectors encode the dependence relations when they exist.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `The Eigenvalue Connection`,
    content: `The [eigenvalue](!/linear-algebra/eigen) equation $A\\mathbf{x} = \\lambda\\mathbf{x}$ can be rewritten as

$$(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$$

This is a homogeneous system with coefficient matrix $A - \\lambda I$. Eigenvectors are precisely the nontrivial solutions. They exist when and only when $A - \\lambda I$ is singular — that is, when $\\det(A - \\lambda I) = 0$.

The values of $\\lambda$ satisfying this [determinant](!/linear-algebra/determinants) condition are the eigenvalues. For each eigenvalue $\\lambda$, the set of all solutions to $(A - \\lambda I)\\mathbf{x} = \\mathbf{0}$ is the eigenspace — the null space of $A - \\lambda I$. The dimension of this eigenspace is the nullity of $A - \\lambda I$, which equals $n - \\text{rank}(A - \\lambda I)$.

This rewriting connects homogeneous systems directly to spectral theory. Every eigenvalue problem is, at its core, a question about when a particular homogeneous system has nontrivial solutions. The machinery of row reduction, null spaces, and rank that governs homogeneous systems is the same machinery that computes eigenvectors and eigenspaces.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

 const introContent = {
  title: `Systems with Zero Right-Hand Side`,
  content: `A homogeneous system Ax = 0 always has the trivial solution x = 0. The real question is whether nontrivial solutions exist — and when they do, the solution set is a subspace of Rⁿ whose structure is governed entirely by the rank of the coefficient matrix.`,
}


const faqQuestions = {
  obj1: {
    question: "What is a homogeneous linear system?",
    answer: "A homogeneous system has the form Ax = 0, where every equation has zero on the right-hand side. It is always consistent because x = 0 (the trivial solution) always works. The key question is whether nontrivial (nonzero) solutions exist.",
    sectionId: "1"
  },
  obj2: {
    question: "When does a homogeneous system have nontrivial solutions?",
    answer: "Nontrivial solutions exist if and only if rank(A) < n (the number of unknowns). For square matrices, this is equivalent to det(A) = 0. If there are more unknowns than equations (n > m), nontrivial solutions are guaranteed because the rank cannot reach n.",
    sectionId: "2"
  },
  obj3: {
    question: "What is the superposition principle?",
    answer: "If x₁ and x₂ are solutions to Ax = 0, then any linear combination c₁x₁ + c₂x₂ is also a solution. This means the solution set is a subspace — the null space. Superposition holds only for homogeneous systems; for Ax = b with b ≠ 0, the sum of two solutions is generally not a solution.",
    sectionId: "6"
  },
  obj4: {
    question: "How are homogeneous and non-homogeneous systems related?",
    answer: "Every solution to Ax = b has the form x = xₚ + xₕ, where xₚ is one particular solution and xₕ is any solution to Ax = 0. The homogeneous system determines the shape and dimension of the solution set; the particular solution determines its position.",
    sectionId: "7"
  },
  obj5: {
    question: "How do homogeneous systems connect to eigenvalues?",
    answer: "The eigenvalue equation Ax = λx rewrites as (A − λI)x = 0, a homogeneous system. Eigenvectors are its nontrivial solutions. Eigenvalues are the values of λ for which det(A − λI) = 0, making the system have nontrivial solutions. The eigenspace is the null space of A − λI.",
    sectionId: "9"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Homogeneous Systems of Equations",
    "description": "Homogeneous linear systems Ax = 0: trivial and nontrivial solutions, null space as solution set, superposition principle, connection to non-homogeneous systems, independence, and eigenvalues.",
    "url": "https://www.learnmathclass.com/linear-algebra/linear-systems/homogenous",
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
      "name": "Homogeneous Linear Systems"
    },
    "teaches": [
      "Definition and always-consistent property",
      "Conditions for nontrivial solutions via rank",
      "Solution set equals the null space",
      "Finding null space basis by row reduction",
      "Parametric vector form of solutions",
      "Superposition principle for homogeneous systems",
      "Relationship to non-homogeneous systems via x = xₚ + xₕ",
      "Connection to linear independence testing",
      "Eigenvalue problems as homogeneous systems"
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
        "name": "Homogeneous Systems",
        "item": "https://www.learnmathclass.com/linear-algebra/linear-systems/homogenous"
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
//         url: "/linear-algebra/linear-systems/homogenous",
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
      title: "Homogeneous Systems: Ax = 0 & Null Space | Learn Math Class",
      description: "Homogeneous linear systems Ax = 0: trivial and nontrivial solutions, null space as solution set, superposition principle, connection to non-homogeneous systems, independence, and eigenvalues.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/linear-systems/homogenous",
      name: "Homogeneous Systems of Equations"
    },
  }
}
   }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {

export default function HomogeneousSystemsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Homogeneous Systems of Equations</h1>
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
