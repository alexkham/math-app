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
  "subspaces linear algebra",
  "subspace test",
  "null space subspace",
  "column space subspace",
  "row space",
  "subspaces of R2 R3",
  "closure addition scalar multiplication",
  "trivial subspace",
  "intersection subspaces",
  "direct sum subspaces",
  "solution set subspace",
  "affine subspace coset",
  "subspace definition",
  "null space column space row space"
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
    content: `A subspace of a vector space $V$ is a nonempty subset $W \\subseteq V$ that is itself a vector space when equipped with the same addition and scalar multiplication as $V$.

Most of the ten axioms — commutativity, associativity, distributivity, the identity $1\\mathbf{v} = \\mathbf{v}$ — hold automatically in $W$ because they hold for all vectors in $V$, and vectors in $W$ are vectors in $V$. The properties that can fail are the closure conditions: the sum of two vectors in $W$ might land outside $W$, or scaling a vector in $W$ might produce something not in $W$. These are the only things that need checking.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The Subspace Test`,
    content: `A nonempty subset $W \\subseteq V$ is a subspace if and only if it satisfies two conditions:

Closure under addition: for all $\\mathbf{u}, \\mathbf{v} \\in W$, the sum $\\mathbf{u} + \\mathbf{v}$ is in $W$.

Closure under scalar multiplication: for all $c \\in \\mathbb{R}$ and all $\\mathbf{v} \\in W$, the product $c\\mathbf{v}$ is in $W$.

These two conditions can be compressed into one: $W$ is a subspace if and only if $c\\mathbf{u} + d\\mathbf{v} \\in W$ for all $\\mathbf{u}, \\mathbf{v} \\in W$ and all scalars $c, d$. This single condition captures both closure properties simultaneously.

The requirement that $W$ be nonempty is essential. Once at least one vector $\\mathbf{v}$ is known to lie in $W$, closure under scalar multiplication with $c = 0$ guarantees $\\mathbf{0} = 0\\mathbf{v} \\in W$. So the zero vector belongs to every subspace. Conversely, if $\\mathbf{0} \\notin W$, then $W$ cannot be a subspace — this is often the fastest way to disqualify a candidate.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Trivial Subspaces`,
    content: `Every vector space $V$ has two subspaces that require no verification. The set $\\{\\mathbf{0}\\}$ containing only the zero vector is a subspace: adding $\\mathbf{0}$ to itself gives $\\mathbf{0}$, and scaling $\\mathbf{0}$ by any scalar gives $\\mathbf{0}$, so both closure conditions hold. This is the smallest possible subspace, with [dimension](!/linear-algebra/vector-spaces/dimension) zero.

The entire space $V$ is also a subspace of itself — trivially, since every vector in $V$ is in $V$ and every operation on $V$ stays in $V$. This is the largest possible subspace.

Every other subspace lies strictly between these two extremes: it contains $\\mathbf{0}$ but does not contain everything. Finding and classifying these intermediate subspaces is one of the central tasks of linear algebra.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Subspaces of R² and R³`,
    content: `The subspaces of $\\mathbb{R}^2$ are completely classified: $\\{\\mathbf{0}\\}$, lines through the origin, and $\\mathbb{R}^2$ itself. There is nothing else. Every line through the origin has the form $\\{t\\mathbf{v} : t \\in \\mathbb{R}\\}$ for some nonzero vector $\\mathbf{v}$, and it is straightforward to verify that this set is closed under addition and scalar multiplication.

The subspaces of $\\mathbb{R}^3$ are: $\\{\\mathbf{0}\\}$, lines through the origin (dimension $1$), planes through the origin (dimension $2$), and $\\mathbb{R}^3$ itself (dimension $3$).

A line that does not pass through the origin — say the set $\\{(1, 0) + t(2, 3) : t \\in \\mathbb{R}\\}$ — is not a subspace. It does not contain $\\mathbf{0}$, and adding two vectors on this line produces a vector that is generally not on the line. Similarly, a plane that does not contain the origin fails the subspace test.

The geometric intuition is that subspaces are the "flat" subsets that pass through the origin. In $\\mathbb{R}^n$, every subspace is a [span](!/linear-algebra/vector-spaces/span) of some set of vectors, and its dimension equals the number of independent vectors needed to span it.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `The Null Space`,
    content: `For an $m \\times n$ [matrix](!/linear-algebra/matrix) $A$, the null space is

$$\\text{Null}(A) = \\{\\mathbf{x} \\in \\mathbb{R}^n : A\\mathbf{x} = \\mathbf{0}\\}$$

the set of all vectors that $A$ maps to the zero vector. This is a subspace of $\\mathbb{R}^n$.

Verification is direct. The zero vector satisfies $A\\mathbf{0} = \\mathbf{0}$, so $\\mathbf{0} \\in \\text{Null}(A)$. If $A\\mathbf{u} = \\mathbf{0}$ and $A\\mathbf{v} = \\mathbf{0}$, then $A(\\mathbf{u} + \\mathbf{v}) = A\\mathbf{u} + A\\mathbf{v} = \\mathbf{0} + \\mathbf{0} = \\mathbf{0}$, so $\\mathbf{u} + \\mathbf{v} \\in \\text{Null}(A)$. If $A\\mathbf{v} = \\mathbf{0}$, then $A(c\\mathbf{v}) = cA\\mathbf{v} = c\\mathbf{0} = \\mathbf{0}$, so $c\\mathbf{v} \\in \\text{Null}(A)$. Both closure conditions hold.

The dimension of the null space is the nullity. By the [rank-nullity theorem](!/linear-algebra/matrix/rank), $\\text{rank}(A) + \\text{nullity}(A) = n$. When $A$ has full column [rank](!/linear-algebra/matrix/rank) ($\\text{rank} = n$), the null space is $\\{\\mathbf{0}\\}$ and the map $\\mathbf{x} \\mapsto A\\mathbf{x}$ is injective. When the rank is less than $n$, the null space is nontrivial and the map collapses some directions to zero.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `The Column Space`,
    content: `For an $m \\times n$ matrix $A$ with columns $\\mathbf{a}_1, \\dots, \\mathbf{a}_n$, the column space is

$$\\text{Col}(A) = \\{A\\mathbf{x} : \\mathbf{x} \\in \\mathbb{R}^n\\} = \\text{Span}\\{\\mathbf{a}_1, \\mathbf{a}_2, \\dots, \\mathbf{a}_n\\}$$

It is the set of all possible outputs of the [linear transformation](!/linear-algebra/transformations) $\\mathbf{x} \\mapsto A\\mathbf{x}$, and it lives in $\\mathbb{R}^m$.

The column space is a subspace because the span of any set of vectors is always a subspace. Its dimension equals the [rank](!/linear-algebra/matrix/rank) of $A$.

The column space answers the solvability question: the system $A\\mathbf{x} = \\mathbf{b}$ has a solution if and only if $\\mathbf{b}$ lies in $\\text{Col}(A)$. If $\\mathbf{b}$ is a linear combination of the columns of $A$, the coefficients in that combination are a solution vector $\\mathbf{x}$. If $\\mathbf{b}$ is not in the column space, no solution exists.

To find a [basis](!/linear-algebra/vector-spaces/basis) for the column space, row reduce $A$ and identify the pivot columns. The corresponding columns of the original matrix $A$ — not the echelon form — form a basis for $\\text{Col}(A)$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `The Row Space`,
    content: `The row space of an $m \\times n$ matrix $A$ is the [span](!/linear-algebra/vector-spaces/span) of the rows of $A$, viewed as vectors in $\\mathbb{R}^n$. Equivalently, it is the column space of $A^T$:

$$\\text{Row}(A) = \\text{Col}(A^T)$$

The row space lives in $\\mathbb{R}^n$ and has dimension equal to the rank of $A$ — the same dimension as the column space, despite the two spaces living in different ambient spaces.

A key property is that elementary row operations do not change the row space. Each row operation replaces rows with linear combinations of existing rows, so every row of the echelon form lies in the span of the original rows, and vice versa. The nonzero rows of the echelon form therefore provide a basis for the row space.

The row space and the null space together account for all of $\\mathbb{R}^n$. They are [orthogonal](!/linear-algebra/orthogonality) complements: every vector in the null space is perpendicular to every row of $A$ (since $A\\mathbf{x} = \\mathbf{0}$ means the dot product of $\\mathbf{x}$ with each row is zero), and their dimensions add up to $n$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Subspaces from Operations`,
    content: `New subspaces can be built from existing ones through set-theoretic operations, though not all operations preserve the subspace property.

The intersection of two subspaces $W_1$ and $W_2$ is always a subspace. If $\\mathbf{u}$ and $\\mathbf{v}$ both lie in $W_1 \\cap W_2$, then $\\mathbf{u} + \\mathbf{v}$ lies in $W_1$ (since $W_1$ is a subspace) and in $W_2$ (since $W_2$ is a subspace), so it lies in $W_1 \\cap W_2$. The same argument works for scalar multiples. The intersection can be anything from $\\{\\mathbf{0}\\}$ (if the two subspaces share only the zero vector) to one of the original subspaces (if one contains the other).

The union of two subspaces is almost never a subspace. If $\\mathbf{u} \\in W_1 \\setminus W_2$ and $\\mathbf{v} \\in W_2 \\setminus W_1$, the sum $\\mathbf{u} + \\mathbf{v}$ typically lies in neither $W_1$ nor $W_2$, violating closure. The only exception is when one subspace contains the other.

The sum $W_1 + W_2 = \\{\\mathbf{w}_1 + \\mathbf{w}_2 : \\mathbf{w}_1 \\in W_1, \\mathbf{w}_2 \\in W_2\\}$ is always a subspace — it is the smallest subspace containing both $W_1$ and $W_2$. Its dimension satisfies

$$\\dim(W_1 + W_2) = \\dim(W_1) + \\dim(W_2) - \\dim(W_1 \\cap W_2)$$

When $W_1 \\cap W_2 = \\{\\mathbf{0}\\}$, the sum is called a direct sum, written $W_1 \\oplus W_2$, and every vector in the sum has a unique decomposition as $\\mathbf{w}_1 + \\mathbf{w}_2$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Solution Sets and Subspaces`,
    content: `The solution set of a [linear system](!/linear-algebra/linear-systems) $A\\mathbf{x} = \\mathbf{b}$ is a subspace only when $\\mathbf{b} = \\mathbf{0}$. In that case, the solution set is the null space of $A$, which passes the subspace test as shown above.

When $\\mathbf{b} \\neq \\mathbf{0}$, the solution set is not a subspace. It does not contain $\\mathbf{0}$ (since $A\\mathbf{0} = \\mathbf{0} \\neq \\mathbf{b}$), and it is not closed under addition or scalar multiplication in general. However, the solution set has a clean geometric description in terms of subspaces.

If $\\mathbf{x}_p$ is any one particular solution to $A\\mathbf{x} = \\mathbf{b}$, then every solution has the form

$$\\mathbf{x} = \\mathbf{x}_p + \\mathbf{x}_h$$

where $\\mathbf{x}_h \\in \\text{Null}(A)$ is a solution to the homogeneous system $A\\mathbf{x} = \\mathbf{0}$. The full solution set is a translated copy of the null space — shifted away from the origin by the vector $\\mathbf{x}_p$. In geometry, this is an affine subspace (also called a coset or a flat): a subspace that has been displaced from the origin.

This decomposition separates the particular and homogeneous contributions. The particular solution $\\mathbf{x}_p$ accounts for the right-hand side $\\mathbf{b}$, while the null-space component $\\mathbf{x}_h$ parametrizes the freedom in the solution. When the null space is trivial ($\\text{Null}(A) = \\{\\mathbf{0}\\}$), the solution is unique: $\\mathbf{x} = \\mathbf{x}_p$ with no freedom.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

 const introContent = {
  title: `Vector Spaces Inside Vector Spaces`,
  content: `A subspace is a subset of a vector space that is itself a vector space under the same operations. Lines and planes through the origin in R³, null spaces and column spaces of matrices, and solution sets of homogeneous systems are all subspaces. A simple two-condition test determines whether a given subset qualifies.`,
}

const faqQuestions = {
  obj1: {
    question: "What is a subspace?",
    answer: "A subspace is a nonempty subset of a vector space that is itself a vector space under the same operations. It must be closed under addition and scalar multiplication. Every subspace contains the zero vector, and these two closure conditions are the only things that need checking.",
    sectionId: "1"
  },
  obj2: {
    question: "How do you test if a subset is a subspace?",
    answer: "Check two conditions: for all u, v in the subset, u + v is also in the subset (closure under addition), and for all scalars c and vectors v in the subset, cv is also in the subset (closure under scalar multiplication). If the zero vector is not in the subset, it fails immediately.",
    sectionId: "2"
  },
  obj3: {
    question: "What are the subspaces of R³?",
    answer: "The subspaces of R³ are: the zero vector alone (dimension 0), lines through the origin (dimension 1), planes through the origin (dimension 2), and R³ itself (dimension 3). A line or plane not passing through the origin is not a subspace.",
    sectionId: "4"
  },
  obj4: {
    question: "Why is the null space a subspace?",
    answer: "The null space of A is the set of all x satisfying Ax = 0. It contains the zero vector (A·0 = 0), and if Au = 0 and Av = 0, then A(u + v) = 0 and A(cv) = 0. Both closure conditions hold, so the null space is a subspace of Rⁿ.",
    sectionId: "5"
  },
  obj5: {
    question: "Is the solution set of Ax = b a subspace?",
    answer: "Only when b = 0 (the homogeneous case), giving the null space. When b ≠ 0, the solution set does not contain the zero vector and is not a subspace. It is an affine subspace — the null space translated by any particular solution xₚ, so every solution has the form x = xₚ + xₕ where xₕ is in the null space.",
    sectionId: "9"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Subspaces",
    "description": "Subspaces in linear algebra: definition, subspace test, null space, column space, row space, subspaces of R² and R³, intersections, direct sums, and solution sets as affine subspaces.",
    "url": "https://www.learnmathclass.com/linear-algebra/subspaces",
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
      "name": "Subspaces"
    },
    "teaches": [
      "Subspace definition and the two-condition test",
      "Trivial subspaces: zero vector and full space",
      "Classification of subspaces in R² and R³",
      "Null space, column space, and row space as subspaces",
      "Intersections, sums, and direct sums of subspaces",
      "Solution sets of Ax = b as affine subspaces"
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
        "name": "Subspaces",
        "item": "https://www.learnmathclass.com/linear-algebra/subspaces"
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
//         url: "/linear-algebra/subspaces",
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
      title: "Subspaces: Definition, Test & Examples | Learn Math Class",
      description: "Subspaces in linear algebra: definition, subspace test, null space, column space, row space, subspaces of R² and R³, intersections, direct sums, and solution sets as affine subspaces.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/subspaces",
      name: "Subspaces"
    },
  }
}

   }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {
export default function SubspacesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Subspaces</h1>
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
