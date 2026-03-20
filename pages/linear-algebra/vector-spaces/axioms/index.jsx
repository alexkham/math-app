import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../pages.css'
import Head from 'next/head'


export async function getStaticProps(){
const keyWords = [
  "vector space axioms",
  "ten axioms vector space",
  "vector space definition",
  "closure addition scalar multiplication",
  "field of scalars",
  "polynomial vector space",
  "matrix vector space",
  "function space",
  "vector space non-examples",
  "consequences axioms",
  "real complex vector space",
  "Rn vector space axioms",
  "zero vector axiom",
  "additive inverse axiom"
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
    title: `The Idea of Abstraction`,
    content: `[Vectors](!/linear-algebra/vectors) in $\\mathbb{R}^n$ can be added entry by entry and scaled by real numbers. Polynomials can be added and scaled. [Matrices](!/linear-algebra/matrix) can be added and scaled. Continuous functions on an interval can be added and scaled. In each case, the same algebraic patterns appear: addition is commutative and associative, scaling distributes over sums, a zero element absorbs addition, and scaling by $1$ leaves every object unchanged.

A vector space is the formal extraction of these patterns. Rather than proving results separately for columns, polynomials, matrices, and functions, the axioms identify the common thread. Anything proved from the axioms alone — and that includes the entire theory of [linear independence](!/linear-algebra/vector-spaces/linear-independence), [span](!/linear-algebra/vector-spaces/span), [basis](!/linear-algebra/vector-spaces), and [dimension](!/linear-algebra/vector-spaces/dimension) — holds in every setting where the axioms are satisfied.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The Ten Axioms`,
    content: `A vector space over a field $\\mathbb{F}$ is a set $V$ together with two operations — vector addition ($\\mathbf{u} + \\mathbf{v}$) and scalar multiplication ($c\\mathbf{v}$) — satisfying the following ten axioms. For all $\\mathbf{u}, \\mathbf{v}, \\mathbf{w} \\in V$ and all scalars $c, d \\in \\mathbb{F}$:

## Addition Axioms

Closure under addition: $\\mathbf{u} + \\mathbf{v} \\in V$.

Commutativity: $\\mathbf{u} + \\mathbf{v} = \\mathbf{v} + \\mathbf{u}$.

Associativity: $(\\mathbf{u} + \\mathbf{v}) + \\mathbf{w} = \\mathbf{u} + (\\mathbf{v} + \\mathbf{w})$.

Zero vector: there exists an element $\\mathbf{0} \\in V$ such that $\\mathbf{v} + \\mathbf{0} = \\mathbf{v}$ for every $\\mathbf{v} \\in V$.

Additive inverse: for every $\\mathbf{v} \\in V$, there exists $-\\mathbf{v} \\in V$ such that $\\mathbf{v} + (-\\mathbf{v}) = \\mathbf{0}$.

## Scalar Multiplication Axioms

Closure under scalar multiplication: $c\\mathbf{v} \\in V$.

Associativity of scalars: $c(d\\mathbf{v}) = (cd)\\mathbf{v}$.

Distributivity over vector addition: $c(\\mathbf{u} + \\mathbf{v}) = c\\mathbf{u} + c\\mathbf{v}$.

Distributivity over scalar addition: $(c + d)\\mathbf{v} = c\\mathbf{v} + d\\mathbf{v}$.

Multiplicative identity: $1\\mathbf{v} = \\mathbf{v}$.

A set satisfying all ten is a vector space. A set violating even one is not.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `The Field of Scalars`,
    content: `The scalars in a vector space come from a field — a set where addition, subtraction, multiplication, and division (by nonzero elements) all work and satisfy the standard arithmetic laws. The real numbers $\\mathbb{R}$ and the [complex numbers](!/algebra/complex-numbers) $\\mathbb{C}$ are the two fields that appear most often in linear algebra.

A vector space over $\\mathbb{R}$ is called a real vector space. A vector space over $\\mathbb{C}$ is called a complex vector space. The choice of field determines what scalars are available for multiplication, and this affects the structure of the space. For instance, every real [symmetric](!/linear-algebra/matrix/types) matrix has real [eigenvalues](!/linear-algebra/eigenvalues-vectors), but a general real matrix may have complex eigenvalues — a phenomenon visible only when the scalar field extends from $\\mathbb{R}$ to $\\mathbb{C}$.

On this site, the scalar field is $\\mathbb{R}$ unless explicitly stated otherwise. The axioms and definitions carry over to $\\mathbb{C}$ without modification.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `The Standard Example: Rⁿ`,
    content: `The most concrete vector space is $\\mathbb{R}^n$, the set of all ordered $n$-tuples of real numbers:

$$\\mathbb{R}^n = \\{(v_1, v_2, \\dots, v_n) : v_i \\in \\mathbb{R}\\}$$

Addition and scalar multiplication are defined entry by entry:

$$(u_1, \\dots, u_n) + (v_1, \\dots, v_n) = (u_1 + v_1, \\dots, u_n + v_n)$$

$$c(v_1, \\dots, v_n) = (cv_1, \\dots, cv_n)$$

All ten axioms hold. Closure is immediate — sums and scalar products of $n$-tuples are $n$-tuples. Commutativity and associativity of vector addition follow from commutativity and associativity of real number addition applied to each component. The zero vector is $(0, 0, \\dots, 0)$, and the additive inverse of $(v_1, \\dots, v_n)$ is $(-v_1, \\dots, -v_n)$. The scalar multiplication axioms all reduce to properties of real number arithmetic applied entry by entry.

This is the vector space that underlies coordinate geometry, [matrix](!/linear-algebra/matrix) algebra, and nearly every computational method in linear algebra. Every finite-dimensional real vector space is isomorphic to $\\mathbb{R}^n$ for some $n$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Polynomial Spaces`,
    content: `The set $\\mathcal{P}_n$ of all polynomials of degree at most $n$ is a vector space under ordinary polynomial addition and scalar multiplication. A typical element is $a_0 + a_1 x + a_2 x^2 + \\cdots + a_n x^n$ with real coefficients.

Addition combines like terms: $(a_0 + a_1 x) + (b_0 + b_1 x) = (a_0 + b_0) + (a_1 + b_1)x$. Scalar multiplication scales every coefficient: $c(a_0 + a_1 x) = ca_0 + ca_1 x$. The zero vector is the zero polynomial (all coefficients zero). The additive inverse of $p(x) = a_0 + a_1 x + \\cdots + a_n x^n$ is $-p(x) = -a_0 - a_1 x - \\cdots - a_n x^n$.

Closure under addition holds because adding two polynomials of degree at most $n$ produces a polynomial of degree at most $n$ — the degree cannot increase beyond $n$. All other axioms follow from the corresponding properties of real number arithmetic applied to coefficients. The space has [dimension](!/linear-algebra/vector-spaces/dimension) $n + 1$, with the monomial [basis](!/linear-algebra/vector-spaces) $\\{1, x, x^2, \\dots, x^n\\}$.

The set $\\mathcal{P}$ of all polynomials (with no degree restriction) is also a vector space, but it is infinite-dimensional: no finite set of polynomials can span it, because any finite set has a maximum degree that limits which polynomials are reachable.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Matrix Spaces`,
    content: `The set $\\mathbb{R}^{m \\times n}$ of all $m \\times n$ real [matrices](!/linear-algebra/matrix) is a vector space with entry-by-entry [operations](!/linear-algebra/matrix/operations). Addition adds corresponding entries, and scalar multiplication scales every entry by the same scalar.

The zero vector is the $m \\times n$ zero matrix $O$. The additive inverse of $A = (a_{ij})$ is $-A = (-a_{ij})$. All ten axioms reduce to the corresponding properties of real number arithmetic applied to each of the $mn$ entries independently.

This space has dimension $mn$. The standard basis consists of the $mn$ matrix units $E_{ij}$, each with a single $1$ in position $(i,j)$ and zeros elsewhere. Every matrix is a unique linear combination of these basis elements, with the matrix entries as coefficients.

The fact that matrices form a vector space means that the concepts of linear independence, span, and basis apply to sets of matrices — not just to column vectors. For example, the set $\\{I, A, A^2\\}$ might be independent or dependent in $\\mathbb{R}^{n \\times n}$, depending on the specific matrix $A$, and answering this question uses exactly the same abstract framework as for vectors in $\\mathbb{R}^n$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Function Spaces`,
    content: `The set $C[a, b]$ of all continuous real-valued functions on the interval $[a, b]$ is a vector space with pointwise operations:

$$(f + g)(x) = f(x) + g(x), \\qquad (cf)(x) = c \\cdot f(x)$$

The zero vector is the function that is identically zero: $z(x) = 0$ for all $x \\in [a, b]$. The additive inverse of $f$ is $-f$, defined by $(-f)(x) = -f(x)$.

The axioms hold because the sum of two continuous functions is continuous (closure), real-number addition is commutative and associative (so pointwise addition inherits these properties), and the distributive laws follow from ordinary scalar arithmetic applied at each point $x$.

This space is infinite-dimensional. A more structured example is the solution space of a homogeneous linear ordinary differential equation. The set of all solutions to $y'' + py' + qy = 0$ (with continuous coefficients $p, q$) forms a vector space of dimension $2$: the superposition principle guarantees that any linear combination of solutions is again a solution, and the existence-uniqueness theorem guarantees that two independent solutions suffice to generate every solution.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Non-Examples`,
    content: `The axioms are genuine constraints, not automatic properties. Several natural-looking sets fail them.

The set of polynomials of degree exactly $n$ is not a vector space. Adding two polynomials of degree $n$ can cancel the leading terms — for instance, $(x^2 + x) + (-x^2 + 3) = x + 3$, which has degree $1$, not $2$. Closure under addition fails.

The set of positive real numbers with ordinary addition is not a vector space. There is no zero element: no positive real number $z$ satisfies $x + z = x$ for all positive $x$.

The set $\\mathbb{R}^2$ can be equipped with non-standard operations that violate the axioms. Defining "addition" by $(u_1, u_2) \\oplus (v_1, v_2) = (u_1 + v_1, 0)$ fails to produce a vector space — the second component is always destroyed, and the distributive law $c(\\mathbf{u} + \\mathbf{v}) = c\\mathbf{u} + c\\mathbf{v}$ breaks.

A line in $\\mathbb{R}^2$ that does not pass through the origin is not a [subspace](!/linear-algebra/vector-spaces/subspaces): it does not contain $\\mathbf{0}$, and adding two points on the line generally produces a point not on the line. These failures are useful — they confirm that the axioms distinguish genuine vector spaces from imposters.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Immediate Consequences of the Axioms`,
    content: `Several useful facts follow from the ten axioms alone. They are not additional assumptions but provable theorems.

Scaling any vector by zero gives the zero vector: $0\\mathbf{v} = \\mathbf{0}$. The proof uses distributivity: $0\\mathbf{v} = (0 + 0)\\mathbf{v} = 0\\mathbf{v} + 0\\mathbf{v}$, and adding $-(0\\mathbf{v})$ to both sides gives $\\mathbf{0} = 0\\mathbf{v}$.

Scaling the zero vector by any scalar gives the zero vector: $c\\mathbf{0} = \\mathbf{0}$. The argument is similar: $c\\mathbf{0} = c(\\mathbf{0} + \\mathbf{0}) = c\\mathbf{0} + c\\mathbf{0}$.

Scaling by $-1$ produces the additive inverse: $(-1)\\mathbf{v} = -\\mathbf{v}$. This follows from $\\mathbf{v} + (-1)\\mathbf{v} = 1\\mathbf{v} + (-1)\\mathbf{v} = (1 + (-1))\\mathbf{v} = 0\\mathbf{v} = \\mathbf{0}$.

If $c\\mathbf{v} = \\mathbf{0}$, then $c = 0$ or $\\mathbf{v} = \\mathbf{0}$. A nonzero scalar cannot annihilate a nonzero vector — there are no zero divisors in a vector space.

The zero vector is unique, and the additive inverse of each vector is unique. Both proofs are short exercises from the axioms. These facts ensure that the algebraic structure is well-defined and free of ambiguity.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Why Axioms Matter`,
    content: `Working from axioms rather than from specific examples is the mechanism that makes linear algebra so broadly applicable.

Every theorem about [linear independence](!/linear-algebra/vector-spaces/linear-independence) applies to vectors in $\\mathbb{R}^n$, to polynomials in $\\mathcal{P}_n$, to matrices in $\\mathbb{R}^{m \\times n}$, and to functions in $C[a, b]$. Every theorem about [span](!/linear-algebra/vector-spaces/span) and [basis](!/linear-algebra/vector-spaces) applies identically in all these settings. The rank-nullity theorem, the theory of [subspaces](!/linear-algebra/vector-spaces/subspaces), the classification by [dimension](!/linear-algebra/vector-spaces/dimension) — none of these need to be reproved when the objects change from column vectors to polynomials.

The axioms also make clear what is not a vector space. Attempting to apply basis theory, dimension counting, or rank arguments to a set that fails the axioms produces nonsense. Checking the axioms first is a prerequisite for using any of the tools of linear algebra.

The ten axioms are not arbitrary — they are the minimal set of conditions that support the concepts of independence, span, and basis. Every axiom is used in at least one proof along the way from the definition of a vector space to the classification theorem that says two spaces are isomorphic if and only if they have the same dimension.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

 const introContent = {
  title: `The Ten Rules That Define the Structure`,
  content: `A vector space is any set equipped with addition and scalar multiplication that satisfy ten axioms. These axioms capture the common algebraic behavior of Rⁿ, polynomial spaces, matrix spaces, and function spaces. By working from the axioms alone, every theorem applies to all of these settings at once.`,
}


const faqQuestions = {
  obj1: {
    question: "What are the ten axioms of a vector space?",
    answer: "The ten axioms split into five for addition (closure, commutativity, associativity, zero vector, additive inverse) and five for scalar multiplication (closure, scalar associativity, two distributive laws, multiplicative identity 1·v = v). Any set satisfying all ten with two operations is a vector space.",
    sectionId: "2"
  },
  obj2: {
    question: "What are examples of vector spaces besides Rⁿ?",
    answer: "Polynomials of degree at most n (dimension n+1), the set of all m×n matrices (dimension mn), continuous functions on an interval (infinite-dimensional), and solution sets of homogeneous linear ODEs are all vector spaces. Each satisfies the ten axioms under its natural addition and scaling.",
    sectionId: "5"
  },
  obj3: {
    question: "What are common non-examples of vector spaces?",
    answer: "Polynomials of degree exactly n fail closure under addition (leading terms can cancel). Positive reals with ordinary addition lack a zero element. A line not through the origin in R² fails to contain the zero vector. Affine maps T(v) = Av + b with b ≠ 0 break the axioms.",
    sectionId: "8"
  },
  obj4: {
    question: "What follows automatically from the axioms?",
    answer: "Several facts are provable from the axioms alone: 0·v = 0, c·0 = 0, (−1)·v = −v, and if c·v = 0 then c = 0 or v = 0. The zero vector and each additive inverse are unique. These are theorems, not additional assumptions.",
    sectionId: "9"
  },
  obj5: {
    question: "Why do vector space axioms matter?",
    answer: "Working from axioms means every theorem proved abstractly — about independence, span, basis, dimension — applies simultaneously to Rⁿ, polynomial spaces, matrix spaces, and function spaces. The axioms are the minimal conditions supporting the entire framework of linear algebra.",
    sectionId: "10"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Vector Space Axioms",
    "description": "The ten vector space axioms: addition and scalar multiplication rules, Rⁿ and abstract examples, polynomial and matrix spaces, non-examples, consequences of axioms, and why abstraction matters.",
    "url": "https://www.learnmathclass.com/linear-algebra/vector-spaces/axioms",
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
      "name": "Vector Space Axioms"
    },
    "teaches": [
      "The ten axioms defining a vector space",
      "The field of scalars: real and complex",
      "Rⁿ as the standard vector space",
      "Polynomial, matrix, and function space examples",
      "Non-examples and axiom failures",
      "Consequences provable from axioms alone",
      "Why axiomatic abstraction powers linear algebra"
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
        "name": "Axioms",
        "item": "https://www.learnmathclass.com/linear-algebra/vector-spaces/axioms"
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
//         url: "/linear-algebra/vector-spaces/axioms",
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
      title: "Vector Space Axioms: The Ten Rules | Learn Math Class",
      description: "The ten vector space axioms: addition and scalar multiplication rules, Rⁿ and abstract examples, polynomial and matrix spaces, non-examples, consequences of axioms, and why abstraction matters.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/vector-spaces/axioms",
      name: "Vector Space Axioms"
    },
  }
}
   }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {
export default function VectorSpaceAxiomsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Axioms related to Vector Spaces</h1>
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
