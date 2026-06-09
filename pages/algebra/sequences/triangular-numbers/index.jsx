import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){

  const keyWords = [
  "triangular numbers",
  "triangular number sequence",
  "triangular number formula",
  "nth triangular number",
  "sum of natural numbers",
  "figurate numbers",
  "triangular vs square numbers",
  "tetrahedral numbers",
  "binomial coefficient triangular",
  "triangular number test",
  "triangular numbers list",
  "Gauss summation formula",
  "triangular number recursion",
  "triangular numbers properties",
  "triangular numbers examples",
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

//   const sectionsContent = {
//   obj1: {
//     title: `Definition`,
//     content: `The $n$-th triangular number $T_n$ is the sum of the first $n$ positive integers:

// $$T_n = 1 + 2 + 3 + \\cdots + n = \\frac{n(n+1)}{2}$$

// The name comes from a geometric construction: arrange dots in rows of increasing length to form an equilateral triangle. Row $1$ has $1$ dot, row $2$ has $2$, row $3$ has $3$, and the total count after $n$ rows is $T_n$.

// The first triangular numbers are:

// $$1, 3, 6, 10, 15, 21, 28, 36, 45, 55, \\ldots$$

// The closed form $\\frac{n(n+1)}{2}$ follows from the [arithmetic series](!/algebra/sequences/arithmetic#5) formula with $a_1 = 1$ and $d = 1$. The Gauss pairing argument applies directly: $T_n = \\frac{n}{2}(1 + n)$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj2: {
//     title: `Recursive Form`,
//     content: `Each triangular number is the previous one plus a new row of $n$ dots:

// $$T_1 = 1, \\quad T_n = T_{n-1} + n$$

// This recursive definition makes the growth pattern visible — the increments $1, 2, 3, 4, 5, \\ldots$ are themselves the natural numbers. The triangular numbers grow faster than a linear sequence (where increments are constant) but slower than an exponential one.

// The increments form an [arithmetic sequence](!/algebra/sequences/arithmetic) with common difference $1$. The triangular numbers are therefore the partial sums of an arithmetic sequence — they accumulate linearly growing additions.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj3: {
//     title: `Derivation of the Closed Form`,
//     content: `The formula $T_n = \\frac{n(n+1)}{2}$ can be derived by the pairing method. Write the sum forwards and backwards:

// $$S = 1 + 2 + 3 + \\cdots + n$$

// $$S = n + (n-1) + (n-2) + \\cdots + 1$$

// Adding term by term: each pair sums to $n + 1$, and there are $n$ pairs, giving $2S = n(n+1)$ and $S = \\frac{n(n+1)}{2}$.

// An alternative perspective: $T_n = \\binom{n+1}{2}$, the number of ways to choose $2$ items from a set of $n+1$. The binomial coefficient $\\binom{n+1}{2} = \\frac{(n+1)!}{2!(n-1)!} = \\frac{(n+1)n}{2}$ yields the same formula. This connection places triangular numbers inside **combinatorics** — they count unordered pairs. For example, $T_4 = 10$ equals the number of handshakes among $5$ people.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj4: {
//     title: `Properties`,
//     content: `The parity of triangular numbers follows a repeating cycle. $T_n$ is odd when $n \\equiv 1$ or $2 \\pmod{4}$, and even when $n \\equiv 0$ or $3 \\pmod{4}$. The pattern of parities is odd, odd, even, even, odd, odd, even, even, $\\ldots$.

// The sum of two consecutive triangular numbers is a perfect square:

// $$T_n + T_{n-1} = \\frac{n(n+1)}{2} + \\frac{(n-1)n}{2} = n^2$$

// Geometrically, two triangles of consecutive sizes fit together to form a [square](!/algebra/sequences/square-numbers). This identity connects the two simplest figurate number sequences.

// A number $m$ is triangular if and only if $8m + 1$ is a perfect square. Solving $m = \\frac{n(n+1)}{2}$ for $n$ gives $n = \\frac{-1 + \\sqrt{1 + 8m}}{2}$, which is a positive integer precisely when $8m + 1$ is a perfect square. This provides a direct test: $m = 15$ gives $8(15) + 1 = 121 = 11^2$, so $15$ is triangular ($T_5 = 15$).

// The sum of the first $n$ triangular numbers produces the tetrahedral numbers:

// $$\\sum_{k=1}^{n} T_k = \\frac{n(n+1)(n+2)}{6}$$

// This extends the figurate number idea from two dimensions (triangles) to three (tetrahedra).`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// }

// /algebra/sequences/triangular-numbers — sectionsContent v2
// 5 callouts: obj1 (1), obj2 (1), obj3 (1), obj4 (2). All prose preserved exactly.

const sectionsContent = {
  obj1: {
    title: `Definition`,
    content: `The $n$-th triangular number $T_n$ is the sum of the first $n$ positive integers:

@academic[formula_callout:Triangular Number Formula
$$T_n = 1 + 2 + 3 + \\cdots + n = \\frac{n(n+1)}{2}$$
/algebra/formulas#triangular_number_formula]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

The name comes from a geometric construction: arrange dots in rows of increasing length to form an equilateral triangle. Row $1$ has $1$ dot, row $2$ has $2$, row $3$ has $3$, and the total count after $n$ rows is $T_n$.

The first triangular numbers are:

$$1, 3, 6, 10, 15, 21, 28, 36, 45, 55, \\ldots$$

The closed form $\\frac{n(n+1)}{2}$ follows from the [arithmetic series](!/algebra/sequences/arithmetic#5) formula with $a_1 = 1$ and $d = 1$. The Gauss pairing argument applies directly: $T_n = \\frac{n}{2}(1 + n)$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Recursive Form`,
    content: `Each triangular number is the previous one plus a new row of $n$ dots:

@academic[formula_callout:Recursive Form (Triangular Numbers)
$$T_1 = 1, \\quad T_n = T_{n-1} + n$$
/algebra/formulas#recursive_form_triangular_numbers]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

This recursive definition makes the growth pattern visible — the increments $1, 2, 3, 4, 5, \\ldots$ are themselves the natural numbers. The triangular numbers grow faster than a linear sequence (where increments are constant) but slower than an exponential one.

The increments form an [arithmetic sequence](!/algebra/sequences/arithmetic) with common difference $1$. The triangular numbers are therefore the partial sums of an arithmetic sequence — they accumulate linearly growing additions.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Derivation of the Closed Form`,
    content: `The formula $T_n = \\frac{n(n+1)}{2}$ can be derived by the pairing method. Write the sum forwards and backwards:

$$S = 1 + 2 + 3 + \\cdots + n$$

$$S = n + (n-1) + (n-2) + \\cdots + 1$$

Adding term by term: each pair sums to $n + 1$, and there are $n$ pairs, giving $2S = n(n+1)$ and $S = \\frac{n(n+1)}{2}$.

An alternative perspective: $T_n = \\binom{n+1}{2}$, the number of ways to choose $2$ items from a set of $n+1$. The binomial coefficient $\\binom{n+1}{2} = \\frac{(n+1)!}{2!(n-1)!} = \\frac{(n+1)n}{2}$ yields the same formula. This connection places triangular numbers inside **combinatorics** — they count unordered pairs. For example, $T_4 = 10$ equals the number of handshakes among $5$ people.

@academic[formula_callout:Triangular Number as Binomial Coefficient
$$T_n = \\binom{n+1}{2}$$
/algebra/formulas#triangular_number_as_binomial_coefficient]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Properties`,
    content: `The parity of triangular numbers follows a repeating cycle. $T_n$ is odd when $n \\equiv 1$ or $2 \\pmod{4}$, and even when $n \\equiv 0$ or $3 \\pmod{4}$. The pattern of parities is odd, odd, even, even, odd, odd, even, even, $\\ldots$.

The sum of two consecutive triangular numbers is a perfect square:

@academic[formula_callout:Sum of Consecutive Triangular Numbers
$$T_n + T_{n-1} = \\frac{n(n+1)}{2} + \\frac{(n-1)n}{2} = n^2$$
/algebra/formulas#sum_of_consecutive_triangular_numbers]@

Geometrically, two triangles of consecutive sizes fit together to form a [square](!/algebra/sequences/square-numbers). This identity connects the two simplest figurate number sequences.

A number $m$ is triangular if and only if $8m + 1$ is a perfect square. Solving $m = \\frac{n(n+1)}{2}$ for $n$ gives $n = \\frac{-1 + \\sqrt{1 + 8m}}{2}$, which is a positive integer precisely when $8m + 1$ is a perfect square. This provides a direct test: $m = 15$ gives $8(15) + 1 = 121 = 11^2$, so $15$ is triangular ($T_5 = 15$).

The sum of the first $n$ triangular numbers produces the tetrahedral numbers:

@academic[formula_callout:Sum of Triangular Numbers
$$\\sum_{k=1}^{n} T_k = \\frac{n(n+1)(n+2)}{6}$$
/algebra/formulas#sum_of_triangular_numbers]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

This extends the figurate number idea from two dimensions (triangles) to three (tetrahedra).`,
    before: ``,
    after: ``,
    link: '',
  },
}



 const introContent = {
  id: 'intro',
  title: `Dots Arranged in Triangles`,
  content: `The triangular numbers count objects arranged in growing equilateral triangles: one in the first row, two in the second, three in the third. Each triangular number is a partial sum of the natural numbers, giving them a direct connection to arithmetic series. They appear throughout mathematics — in binomial coefficients, in the relationship between consecutive squares, and in counting problems.`,
}

const faqQuestions = {
  obj1: {
    question: "What are triangular numbers?",
    answer: "Triangular numbers count objects arranged in successively larger equilateral triangles, with one dot in the first row, two in the second, three in the third, and so on. The n-th triangular number T_n equals the sum of the first n positive integers. The first triangular numbers are 1, 3, 6, 10, 15, 21, 28, 36, 45, and 55."
  },
  obj2: {
    question: "What is the formula for the nth triangular number?",
    answer: "The closed-form formula for the n-th triangular number is T_n = n times (n + 1) divided by 2. This follows directly from the arithmetic series formula applied to the sum 1 + 2 + 3 + ... + n. The same value equals the binomial coefficient (n+1) choose 2."
  },
  obj3: {
    question: "How do you check whether a number is triangular?",
    answer: "A positive integer m is triangular if and only if 8m + 1 is a perfect square. Solving the equation m = n(n+1)/2 for n gives n = (-1 + square root of (1 + 8m)) divided by 2, which is a positive integer precisely when 8m + 1 is a perfect square."
  },
  obj4: {
    question: "What is the relationship between triangular numbers and square numbers?",
    answer: "The sum of two consecutive triangular numbers is always a perfect square: T_n + T_(n-1) = n squared. Geometrically, two triangles of consecutive sizes fit together to form a square of side n. This identity links the two simplest figurate number sequences."
  },
  obj5: {
    question: "How are triangular numbers connected to combinatorics?",
    answer: "The n-th triangular number equals the binomial coefficient (n+1) choose 2, the number of ways to select 2 items from a set of n+1. For example, T_4 = 10 equals the number of distinct handshakes possible among 5 people. This connection places triangular numbers at the heart of basic counting problems."
  },
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Triangular Numbers Sequence",
    "description": "Learn triangular numbers: definition, closed-form formula n(n+1)/2, recursive form, derivation, properties, and connections to square numbers and combinatorics.",
    "url": "https://www.learnmathclass.com/algebra/sequences/triangular-numbers",
    "inLanguage": "en-US",
    "learningResourceType": "Explanation",
    "educationalLevel": "Middle School, High School, College",
    "educationalUse": "Learning",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "about": {
      "@type": "Thing",
      "name": "Triangular Numbers"
    },
    "teaches": [
      "Definition of triangular numbers and their geometric construction",
      "Closed-form formula T_n = n(n+1)/2 for the n-th triangular number",
      "Recursive form T_n = T_(n-1) + n and connection to arithmetic series",
      "Derivation by Gauss-style pairing and the binomial coefficient identity",
      "Parity pattern, perfect-square test, and the relationship T_n + T_(n-1) = n squared",
      "Connection to tetrahedral numbers and to combinatorial counting problems"
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
        "name": "Algebra",
        "item": "https://www.learnmathclass.com/algebra"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Sequences",
        "item": "https://www.learnmathclass.com/algebra/sequences"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Triangular Numbers",
        "item": "https://www.learnmathclass.com/algebra/sequences/triangular-numbers"
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
  props:{
     sectionsContent,
     introContent,
     faqQuestions,
     schemas,
     seoData: {
       title: "Triangular Numbers: Formula & Properties | Learn Math Class",
       description: "Learn triangular numbers: definition, closed-form formula n(n+1)/2, recursive form, derivation, properties, and connections to square numbers and combinatorics.",
       keywords: keyWords.join(", "),
       url: "/algebra/sequences/triangular-numbers",
       name: "Triangular Numbers Sequence"
     },
   }
}
   }

export default function TriangularNumbersPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
  const genericSections=[
    // {
    //     id:'0',
    //     title:sectionsContent.obj0.title,
    //     link:sectionsContent.obj0.link,
    //     content:[
    //       sectionsContent.obj0.content,
    //     ]
    // },
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
    // {
    //     id:'5',
    //     title:sectionsContent.obj5.title,
    //     link:sectionsContent.obj5.link,
    //     content:[
    //       sectionsContent.obj5.content,
    //     ]
    // },
    // {
    //     id:'6',
    //     title:sectionsContent.obj6.title,
    //     link:sectionsContent.obj6.link,
    //     content:[
    //       sectionsContent.obj6.content,
    //     ]
    // },
    // {
    //     id:'7',
    //     title:sectionsContent.obj7.title,
    //     link:sectionsContent.obj7.link,
    //     content:[
    //       sectionsContent.obj7.content,
    //     ]
    // },
    // {
    //     id:'8',
    //     title:sectionsContent.obj8.title,
    //     link:sectionsContent.obj8.link,
    //     content:[
    //       sectionsContent.obj8.content,
    //     ]
    // },
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Triangular Numbers Sequence</h1>
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
    {/* <KeyTermsCard
     id="0"
     title={sectionsContent.obj0.title}
     content={sectionsContent.obj0.content}
     after={sectionsContent.obj0.after}
     variant="light"
   /> */}
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}
