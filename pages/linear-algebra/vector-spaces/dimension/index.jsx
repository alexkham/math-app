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
  "dimension vector space",
  "dimension linear algebra",
  "basis size theorem",
  "dimension Rn",
  "finite dimensional vector space",
  "infinite dimensional",
  "dimension subspace",
  "rank-nullity theorem dimension",
  "dimension formula subspace sum",
  "isomorphism dimension",
  "dimension polynomial space",
  "dimension matrix space",
  "basis same number elements",
  "dimension and independence"
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
    content: `The dimension of a vector space $V$, written $\\dim(V)$, is the number of vectors in any [basis](!/linear-algebra/vector-spaces) for $V$.

This definition relies on a nontrivial fact: all bases for $V$ have the same size. Without this guarantee, "the number of vectors in a basis" would depend on which basis was chosen, and the definition would be meaningless. The basis size theorem, proved in the next section, ensures that the count is intrinsic to the space itself.

By convention, the zero space $\\{\\mathbf{0}\\}$ has dimension $0$. Its only "basis" is the empty set, which contains no vectors, is vacuously independent, and spans $\\{\\mathbf{0}\\}$ since the empty linear combination produces $\\mathbf{0}$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The Basis Size Theorem`,
    content: `If a vector space $V$ has a basis with $n$ elements, then every basis for $V$ has exactly $n$ elements.

The proof rests on two supporting facts. First, in a space spanned by $n$ vectors, any set of more than $n$ vectors is [dependent](!/linear-algebra/vector-spaces/linear-independence). Second, any [spanning](!/linear-algebra/vector-spaces/span) set contains at least as many vectors as any independent set.

Suppose $\\mathcal{B}$ has $n$ elements and $\\mathcal{C}$ has $m$ elements, and both are bases. Since $\\mathcal{B}$ spans $V$ and $\\mathcal{C}$ is independent, we get $m \\leq n$. Since $\\mathcal{C}$ spans $V$ and $\\mathcal{B}$ is independent, we get $n \\leq m$. Together, $m = n$.

This theorem is what makes dimension well-defined. It converts a property of a particular basis (its size) into a property of the space itself.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Dimensions of Standard Spaces`,
    content: `The dimension of $\\mathbb{R}^n$ is $n$. The standard basis $\\{\\mathbf{e}_1, \\dots, \\mathbf{e}_n\\}$ has $n$ elements, and any other basis for $\\mathbb{R}^n$ also has exactly $n$ elements.

The [matrix](!/linear-algebra/matrix) space $\\mathbb{R}^{m \\times n}$ has dimension $mn$. The standard basis consists of the $mn$ matrix units $E_{ij}$, one for each entry position.

The polynomial space $\\mathcal{P}_n$ has dimension $n + 1$. The monomial basis $\\{1, x, x^2, \\dots, x^n\\}$ contains $n + 1$ elements. Note the offset: the space of polynomials of degree at most $2$ is three-dimensional, not two-dimensional, because the constant term counts as a basis direction.

The space $\\mathcal{P}$ of all polynomials (no degree bound) is infinite-dimensional. For any proposed finite basis $\\{p_1, \\dots, p_k\\}$, let $N$ be the maximum degree among them. Then $x^{N+1}$ cannot be written as a combination of $p_1, \\dots, p_k$, so the set does not span $\\mathcal{P}$.

The space $C[a, b]$ of continuous functions on $[a, b]$ is also infinite-dimensional, for similar reasons — no finite set of continuous functions can generate all others through linear combinations.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Finite vs. Infinite Dimension`,
    content: `A vector space is finite-dimensional if it has a finite basis, and infinite-dimensional otherwise.

In finite-dimensional spaces, the theory is clean and complete. Every independent set can be extended to a basis. Every spanning set can be reduced to one. The dimension is a finite integer that governs the entire structure of the space.

In infinite-dimensional spaces, the situation is more delicate. Bases still exist (assuming the axiom of choice), but they are called Hamel bases and are often unwieldy — a Hamel basis for $C[0, 1]$ is uncountable and cannot be written down explicitly. In practice, infinite-dimensional spaces are handled with topological tools: Schauder bases (which allow infinite convergent sums), Hilbert space theory, and functional analysis.

On this site, all vector spaces are finite-dimensional unless explicitly stated otherwise. The finite-dimensional theory covers $\\mathbb{R}^n$, $\\mathcal{P}_n$, $\\mathbb{R}^{m \\times n}$, and solution spaces of linear ODEs with constant coefficients — the spaces that appear in a standard linear algebra course.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Dimension and Independence`,
    content: `Dimension places hard constraints on how large an independent set can be.

In an $n$-dimensional space, any set of more than $n$ vectors is [dependent](!/linear-algebra/vector-spaces/linear-independence). This is the absolute ceiling: independence cannot survive past $n$ vectors, no matter how cleverly they are chosen. In $\\mathbb{R}^3$, four or more vectors are always dependent. In $\\mathcal{P}_2$, four or more polynomials are always dependent.

An independent set of exactly $n$ vectors is automatically a basis. Spanning comes for free once the count reaches the dimension. This is one of the most useful shortcuts in practice: to verify that $n$ vectors in an $n$-dimensional space form a basis, it suffices to check independence alone.

An independent set of fewer than $n$ vectors can always be extended to a basis by adding $n - k$ more vectors, where $k$ is the current count. The extension is not unique — there are many ways to complete the set — but the final count is always $n$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Dimension and Spanning`,
    content: `Dimension also constrains spanning sets from the other direction.

In an $n$-dimensional space, any set of fewer than $n$ vectors cannot [span](!/linear-algebra/vector-spaces/span) the space. The span has dimension at most $k < n$, so it is a proper [subspace](!/linear-algebra/vector-spaces/subspaces) — some vectors in $V$ are unreachable. In $\\mathbb{R}^3$, two vectors can span at most a plane, never all of $\\mathbb{R}^3$.

A spanning set of exactly $n$ vectors is automatically a basis. Independence comes for free once the count hits the dimension. This is the mirror image of the independence shortcut: to verify that $n$ vectors span an $n$-dimensional space, it suffices to check spanning alone, and independence follows.

A spanning set of more than $n$ vectors contains redundancies. At least $k - n$ vectors can be removed without shrinking the span. Removing all redundant vectors produces a basis.

These two shortcuts — "$n$ independent vectors in an $n$-dimensional space form a basis" and "$n$ spanning vectors in an $n$-dimensional space form a basis" — are the workhorses of basis verification.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Dimension of Subspaces`,
    content: `If $W$ is a subspace of a finite-dimensional space $V$, then

$$\\dim(W) \\leq \\dim(V)$$

The inequality is strict ($\\dim(W) < \\dim(V)$) for every proper subspace — a subspace that is not all of $V$. The only subspace with $\\dim(W) = \\dim(V)$ is $W = V$ itself. This follows because any basis for $W$ is an independent set in $V$ with $\\dim(W)$ elements, and extending it to a basis for $V$ adds $\\dim(V) - \\dim(W)$ vectors. If no vectors need adding, $W$ already has a basis for all of $V$.

In $\\mathbb{R}^3$, the possible subspace dimensions are $0$ (the zero vector), $1$ (a line through the origin), $2$ (a plane through the origin), and $3$ ($\\mathbb{R}^3$ itself). There is no subspace of dimension $\\frac{3}{2}$ or $\\pi$ — dimension is always a non-negative integer.

For a [matrix](!/linear-algebra/matrix) $A$, the column space is a subspace of $\\mathbb{R}^m$ with dimension equal to the rank, and the null space is a subspace of $\\mathbb{R}^n$ with dimension $n - \\text{rank}(A)$. Both dimensions are bounded by the dimensions of their ambient spaces.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `The Dimension Formula for Subspace Sums`,
    content: `For two [subspaces](!/linear-algebra/vector-spaces/subspaces) $W_1$ and $W_2$ of a finite-dimensional space $V$, the dimension of their sum satisfies

$$\\dim(W_1 + W_2) = \\dim(W_1) + \\dim(W_2) - \\dim(W_1 \\cap W_2)$$

This is the linear algebra analogue of the inclusion-exclusion formula for counting elements in the union of two sets. The intersection is subtracted because vectors in $W_1 \\cap W_2$ are counted once in $\\dim(W_1)$ and once in $\\dim(W_2)$, but should only contribute once to the dimension of the sum.

When $W_1 \\cap W_2 = \\{\\mathbf{0}\\}$, the formula simplifies to $\\dim(W_1 + W_2) = \\dim(W_1) + \\dim(W_2)$. In this case the sum is called a direct sum, written $W_1 \\oplus W_2$. Every vector in a direct sum has a unique decomposition as $\\mathbf{w}_1 + \\mathbf{w}_2$ with $\\mathbf{w}_1 \\in W_1$ and $\\mathbf{w}_2 \\in W_2$.

For example, in $\\mathbb{R}^3$, let $W_1$ be the $xy$-plane (dimension $2$) and $W_2$ be the $z$-axis (dimension $1$). Their intersection is $\\{\\mathbf{0}\\}$, so $\\dim(W_1 + W_2) = 2 + 1 - 0 = 3$. The sum is all of $\\mathbb{R}^3$, and the decomposition $\\mathbb{R}^3 = W_1 \\oplus W_2$ splits every vector into its $xy$-component and its $z$-component.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `The Rank-Nullity Theorem as a Dimension Statement`,
    content: `For an $m \\times n$ [matrix](!/linear-algebra/matrix) $A$, the [rank-nullity theorem](!/linear-algebra/matrix/rank) states

$$\\dim(\\text{Col}(A)) + \\dim(\\text{Null}(A)) = n$$

The column space is a subspace of $\\mathbb{R}^m$ with dimension $\\text{rank}(A)$. The null space is a subspace of $\\mathbb{R}^n$ with dimension $n - \\text{rank}(A)$. Their dimensions add up to $n$, the dimension of the domain $\\mathbb{R}^n$.

Interpreted through the lens of [linear transformations](!/linear-algebra/transformations), this says that the $n$ dimensions of the domain split between the image (what the map hits) and the kernel (what the map kills). No dimensions are lost or created — they are redistributed.

The rank-nullity theorem is the fundamental bridge between abstract dimension theory and concrete matrix computation. It connects the number of pivot columns (rank) to the number of free variables (nullity), and it guarantees that every question about the dimension of a null space or column space reduces to row reduction and pivot counting.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Dimension and Isomorphism`,
    content: `Two finite-dimensional vector spaces over the same field are isomorphic — structurally identical as vector spaces — if and only if they have the same dimension.

The forward direction is straightforward: an isomorphism maps a [basis](!/linear-algebra/vector-spaces) to a basis, preserving the count. The reverse direction is the deeper fact: given any two $n$-dimensional spaces $V$ and $W$, choosing a basis for each creates coordinate maps $V \\to \\mathbb{R}^n$ and $W \\to \\mathbb{R}^n$. Composing one with the inverse of the other gives a direct isomorphism $V \\to W$.

This means dimension is the single complete invariant for finite-dimensional vector spaces. It captures everything about the linear-algebraic structure — independence, span, basis size, subspace behavior — in a single integer. Two spaces with the same dimension may contain very different objects (polynomials vs. matrices vs. functions), but from the perspective of linear algebra, they are indistinguishable.

$\\mathbb{R}^3$, $\\mathcal{P}_2$, and the solution space of a third-order homogeneous linear ODE are all three-dimensional. They are isomorphic as vector spaces. Every theorem that holds in one holds in all three — that is the payoff of the axiomatic approach.`,
    before: ``,
    after: ``,
    link: ``,
  },
}


const introContent = {
  title: `The Number That Classifies a Vector Space`,
  content: `Every basis for a given vector space has the same number of elements. This number — the dimension — is the single most important invariant of the space. It governs how many vectors can be independent, how large a spanning set must be, how subspaces nest inside one another, and whether two spaces are structurally identical.`,
}

const faqQuestions = {
  obj1: {
    question: "What is the dimension of a vector space?",
    answer: "The dimension is the number of vectors in any basis. The basis size theorem guarantees all bases have the same number of elements, making dimension well-defined. The zero space has dimension 0. Rⁿ has dimension n, P_n has dimension n+1, and R^(m×n) has dimension mn.",
    sectionId: "1"
  },
  obj2: {
    question: "Why do all bases have the same size?",
    answer: "If basis B has n elements and basis C has m elements, then since B spans and C is independent, m ≤ n. Since C spans and B is independent, n ≤ m. Therefore m = n. This is the basis size theorem, and it is what makes dimension a property of the space rather than a property of a particular basis.",
    sectionId: "2"
  },
  obj3: {
    question: "How does dimension constrain independence and spanning?",
    answer: "In an n-dimensional space, more than n vectors are always dependent, and fewer than n vectors cannot span. Exactly n independent vectors automatically form a basis (spanning is free), and exactly n spanning vectors automatically form a basis (independence is free).",
    sectionId: "5"
  },
  obj4: {
    question: "What is the dimension of a subspace?",
    answer: "A subspace W of an n-dimensional space V satisfies dim(W) ≤ n, with equality only when W = V. For two subspaces, dim(W₁ + W₂) = dim(W₁) + dim(W₂) − dim(W₁ ∩ W₂). When their intersection is trivial, the sum is direct and dimensions simply add.",
    sectionId: "7"
  },
  obj5: {
    question: "When are two vector spaces isomorphic?",
    answer: "Two finite-dimensional vector spaces over the same field are isomorphic if and only if they have the same dimension. Dimension is the single complete invariant: R³, P₂, and the solution space of a third-order linear ODE are all three-dimensional and therefore structurally identical as vector spaces.",
    sectionId: "10"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Dimension of a Vector Space",
    "description": "Dimension of vector spaces: basis size theorem, standard space dimensions, finite vs infinite dimension, constraints on independence and spanning, subspace dimensions, and isomorphism.",
    "url": "https://www.learnmathclass.com/linear-algebra/vector-spaces/dimension",
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
      "name": "Dimension of a Vector Space"
    },
    "teaches": [
      "Dimension as basis size",
      "The basis size theorem",
      "Dimensions of Rⁿ, polynomial, and matrix spaces",
      "Finite vs infinite dimensional spaces",
      "Dimension constraints on independence and spanning",
      "Subspace dimension inequality and sum formula",
      "Rank-nullity as a dimension statement",
      "Dimension as the complete isomorphism invariant"
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
        "name": "Dimension",
        "item": "https://www.learnmathclass.com/linear-algebra/vector-spaces/dimension"
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
//         url: "/linear-algebra/vector-spaces/dimension",
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
      title: "Dimension: Basis Size & Invariant | Learn Math Class",
      description: "Dimension of vector spaces: basis size theorem, standard space dimensions, finite vs infinite dimension, constraints on independence and spanning, subspace dimensions, and isomorphism.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/vector-spaces/dimension",
      name: "Dimension of a Vector Space"
    },
  }
}
   }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {


export default function DimensionPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Dimension of Vector Space</h1>
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
