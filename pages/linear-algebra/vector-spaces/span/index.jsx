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
  "span linear algebra",
  "span of vectors",
  "linear combination span",
  "spanning set",
  "vector in span test",
  "span and column space",
  "span geometric interpretation",
  "does set span Rn",
  "spanning set basis",
  "redundant vectors span",
  "span subspace",
  "span abstract vector space",
  "row reduction span",
  "minimal spanning set"
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
    content: `Given vectors $\\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_k$ in a vector space $V$, their span is the set of all linear combinations:

$$\\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_k\\} = \\{c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k : c_1, \\dots, c_k \\in \\mathbb{R}\\}$$

Every choice of scalars $c_1, \\dots, c_k$ produces one vector in the span. As the scalars range over all real numbers, the span sweeps out an entire [subspace](!/linear-algebra/vector-spaces/subspaces) of $V$.

The span is always a subspace — the smallest subspace of $V$ that contains all of $\\mathbf{v}_1, \\dots, \\mathbf{v}_k$. Adding two linear combinations of these vectors produces another linear combination, and scaling a linear combination by a scalar produces another, so both closure conditions hold automatically.

By convention, the span of the empty set is $\\{\\mathbf{0}\\}$. With no vectors to combine, the only reachable point is the zero vector (the combination with no terms).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Geometric Interpretation`,
    content: `In $\\mathbb{R}^2$ and $\\mathbb{R}^3$, the span of a set of vectors is a flat subspace whose shape depends on how many [independent](!/linear-algebra/vector-spaces/linear-independence) vectors the set contains.

The span of a single nonzero vector $\\mathbf{v}$ is the line $\\{t\\mathbf{v} : t \\in \\mathbb{R}\\}$ — a one-dimensional subspace passing through the origin in the direction of $\\mathbf{v}$.

The span of two non-parallel vectors is a plane through the origin — a two-dimensional subspace. If the two vectors happen to be parallel, one is a scalar multiple of the other, and the span collapses to a line.

The span of three vectors in $\\mathbb{R}^3$ that do not all lie in a single plane is all of $\\mathbb{R}^3$. If the three vectors are coplanar, the span is a plane. If two of the three are parallel, the span may be only a line.

The pattern is consistent: the dimension of the span equals the number of independent vectors in the set, regardless of how many total vectors are present. Redundant vectors — those already in the span of the others — add nothing to the reach.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Spanning Sets`,
    content: `A set of vectors spans a vector space $V$ if $\\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_k\\} = V$ — every vector in $V$ can be written as a linear combination of the set. When this holds, the set is called a spanning set for $V$.

In $\\mathbb{R}^n$, a spanning set must contain at least $n$ vectors. Fewer than $n$ vectors cannot reach every direction — their span is a proper subspace of [dimension](!/linear-algebra/vector-spaces/dimension) less than $n$. A spanning set with exactly $n$ independent vectors is a [basis](!/linear-algebra/vector-spaces/basis). A spanning set with more than $n$ vectors contains redundancies that can be removed.

The standard basis $\\{\\mathbf{e}_1, \\dots, \\mathbf{e}_n\\}$ spans $\\mathbb{R}^n$ with no redundancy. The set $\\{\\mathbf{e}_1, \\mathbf{e}_2, \\mathbf{e}_1 + \\mathbf{e}_2\\}$ also spans $\\mathbb{R}^2$, but the third vector is redundant — it lies in the span of the first two. Removing it leaves a basis.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Testing Whether a Vector Is in a Span`,
    content: `The question "Is $\\mathbf{b}$ in $\\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_k\\}$?" asks whether there exist scalars $c_1, \\dots, c_k$ such that $c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{b}$. This is a [linear system](!/linear-algebra/linear-systems): arrange the vectors as columns of a [matrix](!/linear-algebra/matrix) $A = [\\mathbf{v}_1 \\; \\cdots \\; \\mathbf{v}_k]$ and check whether $A\\mathbf{c} = \\mathbf{b}$ is consistent.

Row reduce the augmented matrix $[A \\mid \\mathbf{b}]$. If a row of the form $[0 \\; 0 \\; \\cdots \\; 0 \\mid d]$ with $d \\neq 0$ appears, the system is inconsistent and $\\mathbf{b}$ is not in the span.

## Example: In the Span

Is $\\mathbf{b} = (5, 3, 7)$ in $\\text{Span}\\{(1, 0, 1), (0, 1, 2)\\}$? Form and reduce:

$$\\begin{pmatrix} 1 & 0 & 5 \\\\ 0 & 1 & 3 \\\\ 1 & 2 & 7 \\end{pmatrix} \\xrightarrow{R_3 - R_1} \\begin{pmatrix} 1 & 0 & 5 \\\\ 0 & 1 & 3 \\\\ 0 & 2 & 2 \\end{pmatrix} \\xrightarrow{R_3 - 2R_2} \\begin{pmatrix} 1 & 0 & 5 \\\\ 0 & 1 & 3 \\\\ 0 & 0 & -4 \\end{pmatrix}$$

The last row reads $0 = -4$, a contradiction. So $\\mathbf{b}$ is not in the span.

## Example: Not in the Span Versus In the Span

Changing the target to $\\mathbf{b} = (5, 3, 11)$ and repeating:

$$\\begin{pmatrix} 1 & 0 & 5 \\\\ 0 & 1 & 3 \\\\ 1 & 2 & 11 \\end{pmatrix} \\xrightarrow{R_3 - R_1} \\begin{pmatrix} 1 & 0 & 5 \\\\ 0 & 1 & 3 \\\\ 0 & 2 & 6 \\end{pmatrix} \\xrightarrow{R_3 - 2R_2} \\begin{pmatrix} 1 & 0 & 5 \\\\ 0 & 1 & 3 \\\\ 0 & 0 & 0 \\end{pmatrix}$$

No contradiction. The solution is $c_1 = 5$, $c_2 = 3$, so $(5, 3, 11) = 5(1, 0, 1) + 3(0, 1, 2)$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Testing Whether a Set Spans Rⁿ`,
    content: `The question "Does $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_k\\}$ span $\\mathbb{R}^n$?" asks whether $A\\mathbf{c} = \\mathbf{b}$ is consistent for every possible right-hand side $\\mathbf{b} \\in \\mathbb{R}^n$, where $A$ is the matrix with the vectors as columns.

Row reduce $A$. The columns span $\\mathbb{R}^n$ if and only if every row of the echelon form contains a pivot. If any row is entirely zero, then for some choices of $\\mathbf{b}$ the augmented system will produce a $[0 \\; \\cdots \\; 0 \\mid d]$ contradiction, meaning those $\\mathbf{b}$ are unreachable.

For the square case — $n$ vectors in $\\mathbb{R}^n$ — spanning reduces to a [determinant](!/linear-algebra/determinants) test: the columns span $\\mathbb{R}^n$ if and only if $\\det(A) \\neq 0$. This is equivalent to independence when the count matches the dimension, which is why the spanning and independence conditions coincide for sets of exactly $n$ vectors in $\\mathbb{R}^n$.

Fewer than $n$ vectors can never span $\\mathbb{R}^n$. An $n \\times k$ matrix with $k < n$ has at most $k$ pivots, so at least $n - k$ rows of the echelon form will be zero. More than $n$ vectors can span $\\mathbb{R}^n$, but only if the set contains at least $n$ independent vectors among them — the extras are redundant.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Span and Column Space`,
    content: `The [column space](!/linear-algebra/vector-spaces/subspaces) of a matrix $A$ is exactly the span of its columns:

$$\\text{Col}(A) = \\text{Span}\\{\\mathbf{a}_1, \\mathbf{a}_2, \\dots, \\mathbf{a}_n\\}$$

This identity connects the abstract concept of span to the concrete question of system solvability. The system $A\\mathbf{x} = \\mathbf{b}$ has a solution if and only if $\\mathbf{b}$ lies in the column space of $A$ — that is, if and only if $\\mathbf{b}$ is in the span of the columns.

The rank of $A$ equals the dimension of the column space, which equals the number of independent columns. The pivot columns of the echelon form identify which original columns form a [basis](!/linear-algebra/vector-spaces/basis) for the column space. The non-pivot columns are redundant — they lie in the span of the pivot columns.

This also explains why row reduction is the universal computational tool for span questions. Every question about span — membership, spanning, independence — translates into a question about the column space of some matrix, and row reduction answers all of them.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Redundancy and Reduction`,
    content: `A spanning set may contain more vectors than necessary. A vector $\\mathbf{v}_j$ in a spanning set is redundant if removing it does not shrink the span:

$$\\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_k\\} = \\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_{j-1}, \\mathbf{v}_{j+1}, \\dots, \\mathbf{v}_k\\}$$

This happens exactly when $\\mathbf{v}_j$ is already a linear combination of the other vectors — it contributes no new directions.

Removing all redundant vectors from a spanning set produces a basis: a minimal spanning set with no waste. The process can be carried out systematically via row reduction. Arrange the vectors as columns, reduce, and identify the pivot columns. The original vectors corresponding to pivot positions form a basis for the span. The non-pivot columns are the redundant ones.

For example, if four vectors in $\\mathbb{R}^3$ are given and row reduction reveals pivots in columns $1$, $2$, and $4$, then the original first, second, and fourth vectors form a basis for the span. The third vector is a combination of the first two.

This reduction process is always possible in finite-dimensional spaces: every spanning set can be trimmed to a basis, and every independent set can be extended to one. The basis sits at the exact boundary between "too few vectors to span" and "too many vectors to be independent."`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Span in Abstract Vector Spaces`,
    content: `The definition of span — the set of all linear combinations — applies in any vector space, not just $\\mathbb{R}^n$.

In the polynomial space $\\mathcal{P}_2$, the span of $\\{1, x, x^2\\}$ is all of $\\mathcal{P}_2$, since every polynomial $a + bx + cx^2$ of degree at most $2$ is a linear combination of these three. The set is independent and has the right count ($3 = \\dim(\\mathcal{P}_2)$), so it is the standard basis.

A subtler example is $\\text{Span}\\{1, \\sin^2 x, \\cos^2 x\\}$ in the space of continuous functions. This set has three elements, but the identity $\\sin^2 x + \\cos^2 x = 1$ provides a dependence relation: $1 \\cdot 1 + (-1)\\sin^2 x + (-1)\\cos^2 x = 0$. The span is therefore two-dimensional, not three-dimensional. Any two of the three functions form a basis for the span — the third is redundant.

In abstract spaces, the column-matrix approach is unavailable. Testing whether a specific vector lies in a span, or whether a set spans the whole space, requires working directly from the definition: write the target as a combination and check whether the resulting equation has a solution. The algebraic structure of the particular space — polynomial coefficients, function identities, matrix entries — determines how this check proceeds.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

 const introContent = {
  title: `Everything Reachable by Linear Combinations`,
  content: `The span of a set of vectors is the collection of all their linear combinations — every vector that can be built by adding scaled copies of the given vectors. It is always a subspace, and it is the smallest subspace containing the original set. Span is the other half of what makes a basis: the half that guarantees complete coverage.`,
}

const faqQuestions = {
  obj1: {
    question: "What is the span of a set of vectors?",
    answer: "The span is the set of all linear combinations of the given vectors — every vector reachable by adding scaled copies of them. It is always a subspace, and it is the smallest subspace containing all the original vectors. Its dimension equals the number of independent vectors in the set.",
    sectionId: "1"
  },
  obj2: {
    question: "How do you test if a vector is in a span?",
    answer: "Arrange the spanning vectors as columns of a matrix A, then check if the system Ac = b is consistent by row reducing the augmented matrix [A | b]. If no contradiction row appears (no [0 ⋯ 0 | d] with d ≠ 0), the vector is in the span and the solution gives the coefficients.",
    sectionId: "4"
  },
  obj3: {
    question: "How do you test if a set spans Rⁿ?",
    answer: "Arrange the vectors as columns and row reduce. The set spans Rⁿ if and only if every row contains a pivot. For exactly n vectors in Rⁿ, this is equivalent to the determinant being nonzero. Fewer than n vectors can never span Rⁿ.",
    sectionId: "5"
  },
  obj4: {
    question: "What is the relationship between span and column space?",
    answer: "The column space of a matrix A is exactly the span of its columns. The system Ax = b has a solution if and only if b is in the column space. The rank of A equals the dimension of the span, and pivot columns identify a basis for it.",
    sectionId: "6"
  },
  obj5: {
    question: "How do you remove redundant vectors from a spanning set?",
    answer: "Arrange the vectors as columns and row reduce to identify pivot columns. The original vectors corresponding to pivot positions form a basis for the span — a minimal spanning set with no redundancy. Non-pivot columns are the redundant vectors that lie in the span of the pivot columns.",
    sectionId: "7"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Span of Vectors",
    "description": "Span in linear algebra: definition, geometric interpretation, testing membership and spanning, connection to column space, removing redundancy, and span in abstract vector spaces.",
    "url": "https://www.learnmathclass.com/linear-algebra/vector-spaces/span",
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
      "name": "Span"
    },
    "teaches": [
      "Span as the set of all linear combinations",
      "Geometric interpretation: lines, planes, and higher",
      "Testing whether a vector lies in a span",
      "Testing whether a set spans Rⁿ",
      "Span equals column space of the column matrix",
      "Removing redundancy to extract a basis",
      "Span in polynomial and function spaces"
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
        "name": "Span",
        "item": "https://www.learnmathclass.com/linear-algebra/vector-spaces/span"
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
//         url: "/linear-algebra/vector-spaces/span",
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
      title: "Span: Linear Combinations & Spanning Sets | Learn Math Class",
      description: "Span in linear algebra: definition, geometric interpretation, testing membership and spanning, connection to column space, removing redundancy, and span in abstract vector spaces.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/vector-spaces/span",
      name: "Span of Vectors"
    },
  }
}
   }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {

export default function SpanPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Span</h1>
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
