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
  "harmonic sequence",
  "harmonic progression",
  "harmonic series",
  "harmonic series divergence",
  "harmonic numbers",
  "harmonic mean",
  "reciprocals of arithmetic sequence",
  "harmonic sequence formula",
  "harmonic mean formula",
  "AM GM HM inequality",
  "mean inequality",
  "Euler Mascheroni constant",
  "harmonic vs geometric series",
  "harmonic sequence examples",
  "sum of harmonic series",
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


// const sectionsContent = {
//   obj1: {
//     title: `Definition`,
//     content: `A harmonic sequence is a sequence whose terms are the reciprocals of an [arithmetic sequence](!/algebra/sequences/arithmetic). If $b_1, b_2, b_3, \\ldots$ is arithmetic with first term $b_1 > 0$ and common difference $d > 0$, then the harmonic sequence is:

// $$a_n = \\frac{1}{b_n} = \\frac{1}{b_1 + (n-1)d}$$

// The simplest example takes $b_n = n$: the reciprocals $1, \\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}, \\ldots$ form the harmonic sequence of natural number reciprocals. The sequence $\\frac{1}{3}, \\frac{1}{5}, \\frac{1}{7}, \\frac{1}{9}, \\ldots$ is also harmonic — it comes from the arithmetic sequence $3, 5, 7, 9, \\ldots$ with $b_1 = 3$ and $d = 2$.

// A harmonic sequence is neither arithmetic nor [geometric](!/algebra/sequences/geometric). The differences between consecutive terms are not constant (they decrease), and the ratios are not constant either (they approach $1$ from below). The defining property is that the reciprocals form an arithmetic progression — the structure lives one layer down.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj2: {
//     title: `Properties`,
//     content: `Assuming the underlying arithmetic sequence has positive terms and positive common difference, the harmonic sequence is strictly decreasing: each term is smaller than its predecessor because the denominators grow.

// The terms approach zero as $n \\to \\infty$, since the denominators grow without bound. However, the rate of decrease slows — the gap between $\\frac{1}{n}$ and $\\frac{1}{n+1}$ is $\\frac{1}{n(n+1)}$, which itself shrinks as $n$ increases.

// Unlike arithmetic and geometric sequences, harmonic sequences have no closed-form expression for their partial sums. The sum $\\sum_{k=1}^{n} \\frac{1}{k}$ cannot be written as a simple formula in $n$. This absence is not a gap in technique — it is a fundamental property. The partial sums, known as harmonic numbers $H_n$, grow roughly as $\\ln n$ but involve no elementary closed form.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj3: {
//     title: `The Harmonic Series`,
//     content: `The harmonic series is the infinite sum of reciprocals of the natural numbers:

// $$\\sum_{n=1}^{\\infty} \\frac{1}{n} = 1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\cdots$$

// This series diverges — its partial sums grow without bound, even though the individual terms shrink to zero.

// The proof by grouping (attributed to Oresme, 14th century) is among the most elegant in mathematics. Group the terms after the first as follows:

// $$1 + \\frac{1}{2} + \\left(\\frac{1}{3} + \\frac{1}{4}\\right) + \\left(\\frac{1}{5} + \\frac{1}{6} + \\frac{1}{7} + \\frac{1}{8}\\right) + \\cdots$$

// The first group contains $1$ term summing to at least $\\frac{1}{2}$. The next group contains $2$ terms, each at least $\\frac{1}{4}$, summing to at least $\\frac{1}{2}$. The next contains $4$ terms, each at least $\\frac{1}{8}$, again summing to at least $\\frac{1}{2}$. Each doubling block contributes at least $\\frac{1}{2}$, and there are infinitely many blocks.

// The harmonic series grows slowly — its partial sums approximate $\\ln n + \\gamma$, where $\\gamma \\approx 0.5772$ is the Euler–Mascheroni constant. To reach a partial sum exceeding $10$, you need over $12{,}000$ terms. But slowly is not the same as bounded: the sum eventually surpasses any finite threshold.

// This stands in contrast to the [geometric series](!/algebra/sequences/geometric#6) $\\sum \\frac{1}{2^n}$, which converges to $1$. Both series have terms approaching zero, but geometric terms shrink fast enough (by a constant factor) to keep the total finite. Harmonic terms shrink too slowly. The lesson: terms approaching zero is necessary for convergence but not sufficient.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj4: {
//     title: `Harmonic Mean`,
//     content: `The harmonic mean of $n$ positive numbers $a_1, a_2, \\ldots, a_n$ is:

// $$H = \\frac{n}{\\frac{1}{a_1} + \\frac{1}{a_2} + \\cdots + \\frac{1}{a_n}}$$

// For two numbers, this simplifies to:

// $$H = \\frac{2ab}{a + b}$$

// In a harmonic sequence, every term (except the first and last) is the harmonic mean of its two neighbors. This follows from the fact that the reciprocals form an arithmetic sequence: the reciprocal of each term is the [arithmetic mean](!/algebra/sequences/arithmetic#6) of the reciprocals of its neighbors, and taking reciprocals back gives the harmonic mean relationship.

// Inserting $k$ harmonic means between two values $a$ and $b$ reduces to inserting $k$ arithmetic means between $\\frac{1}{a}$ and $\\frac{1}{b}$, then taking reciprocals of all inserted terms.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj5: {
//     title: `The Mean Inequality`,
//     content: `For any set of positive numbers, the three means satisfy:

// $$H \\leq G \\leq A$$

// The harmonic mean is never greater than the [geometric mean](!/algebra/sequences/geometric#7), which is never greater than the arithmetic mean. Equality throughout holds if and only if all numbers are identical.

// For two positive numbers $a$ and $b$:

// $$\\frac{2ab}{a+b} \\leq \\sqrt{ab} \\leq \\frac{a+b}{2}$$

// This chain links the three types of sequences through their associated means. Each mean captures a different notion of "average": arithmetic for additive processes, geometric for multiplicative processes, and harmonic for rates and reciprocals.

// The AM–GM portion of the inequality ($G \\leq A$) is used extensively throughout algebra, particularly in optimization and in proving [inequalities](!/algebra/inequalities). The full three-way chain places the harmonic mean as the lower bound of the trio.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// }

// /algebra/sequences/harmonic — sectionsContent v2
// 3 callouts: obj1 (1), obj4 (1), obj5 (1). obj2/obj3 untouched.

const sectionsContent = {
  obj1: {
    title: `Definition`,
    content: `A harmonic sequence is a sequence whose terms are the reciprocals of an [arithmetic sequence](!/algebra/sequences/arithmetic). If $b_1, b_2, b_3, \\ldots$ is arithmetic with first term $b_1 > 0$ and common difference $d > 0$, then the harmonic sequence is:

@academic[formula_callout:General Term (Harmonic Sequence)
$$a_n = \\frac{1}{b_n} = \\frac{1}{b_1 + (n-1)d}$$
/algebra/formulas#general_term_harmonic_sequence]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

The simplest example takes $b_n = n$: the reciprocals $1, \\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}, \\ldots$ form the harmonic sequence of natural number reciprocals. The sequence $\\frac{1}{3}, \\frac{1}{5}, \\frac{1}{7}, \\frac{1}{9}, \\ldots$ is also harmonic — it comes from the arithmetic sequence $3, 5, 7, 9, \\ldots$ with $b_1 = 3$ and $d = 2$.

A harmonic sequence is neither arithmetic nor [geometric](!/algebra/sequences/geometric). The differences between consecutive terms are not constant (they decrease), and the ratios are not constant either (they approach $1$ from below). The defining property is that the reciprocals form an arithmetic progression — the structure lives one layer down.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Properties`,
    content: `Assuming the underlying arithmetic sequence has positive terms and positive common difference, the harmonic sequence is strictly decreasing: each term is smaller than its predecessor because the denominators grow.

The terms approach zero as $n \\to \\infty$, since the denominators grow without bound. However, the rate of decrease slows — the gap between $\\frac{1}{n}$ and $\\frac{1}{n+1}$ is $\\frac{1}{n(n+1)}$, which itself shrinks as $n$ increases.

Unlike arithmetic and geometric sequences, harmonic sequences have no closed-form expression for their partial sums. The sum $\\sum_{k=1}^{n} \\frac{1}{k}$ cannot be written as a simple formula in $n$. This absence is not a gap in technique — it is a fundamental property. The partial sums, known as harmonic numbers $H_n$, grow roughly as $\\ln n$ but involve no elementary closed form.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `The Harmonic Series`,
    content: `The harmonic series is the infinite sum of reciprocals of the natural numbers:

$$\\sum_{n=1}^{\\infty} \\frac{1}{n} = 1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\cdots$$

This series diverges — its partial sums grow without bound, even though the individual terms shrink to zero.

The proof by grouping (attributed to Oresme, 14th century) is among the most elegant in mathematics. Group the terms after the first as follows:

$$1 + \\frac{1}{2} + \\left(\\frac{1}{3} + \\frac{1}{4}\\right) + \\left(\\frac{1}{5} + \\frac{1}{6} + \\frac{1}{7} + \\frac{1}{8}\\right) + \\cdots$$

The first group contains $1$ term summing to at least $\\frac{1}{2}$. The next group contains $2$ terms, each at least $\\frac{1}{4}$, summing to at least $\\frac{1}{2}$. The next contains $4$ terms, each at least $\\frac{1}{8}$, again summing to at least $\\frac{1}{2}$. Each doubling block contributes at least $\\frac{1}{2}$, and there are infinitely many blocks.

The harmonic series grows slowly — its partial sums approximate $\\ln n + \\gamma$, where $\\gamma \\approx 0.5772$ is the Euler–Mascheroni constant. To reach a partial sum exceeding $10$, you need over $12{,}000$ terms. But slowly is not the same as bounded: the sum eventually surpasses any finite threshold.

This stands in contrast to the [geometric series](!/algebra/sequences/geometric#6) $\\sum \\frac{1}{2^n}$, which converges to $1$. Both series have terms approaching zero, but geometric terms shrink fast enough (by a constant factor) to keep the total finite. Harmonic terms shrink too slowly. The lesson: terms approaching zero is necessary for convergence but not sufficient.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Harmonic Mean`,
    content: `The harmonic mean of $n$ positive numbers $a_1, a_2, \\ldots, a_n$ is:

@academic[formula_callout:Harmonic Mean
$$H = \\frac{n}{\\frac{1}{a_1} + \\frac{1}{a_2} + \\cdots + \\frac{1}{a_n}}$$
/algebra/formulas#harmonic_mean]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

For two numbers, this simplifies to:

$$H = \\frac{2ab}{a + b}$$

In a harmonic sequence, every term (except the first and last) is the harmonic mean of its two neighbors. This follows from the fact that the reciprocals form an arithmetic sequence: the reciprocal of each term is the [arithmetic mean](!/algebra/sequences/arithmetic#6) of the reciprocals of its neighbors, and taking reciprocals back gives the harmonic mean relationship.

Inserting $k$ harmonic means between two values $a$ and $b$ reduces to inserting $k$ arithmetic means between $\\frac{1}{a}$ and $\\frac{1}{b}$, then taking reciprocals of all inserted terms.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `The Mean Inequality`,
    content: `For any set of positive numbers, the three means satisfy:

@academic[formula_callout:AM-GM-HM Inequality
$$H \\leq G \\leq A$$
/algebra/formulas#am_gm_hm_inequality]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

The harmonic mean is never greater than the [geometric mean](!/algebra/sequences/geometric#7), which is never greater than the arithmetic mean. Equality throughout holds if and only if all numbers are identical.

For two positive numbers $a$ and $b$:

$$\\frac{2ab}{a+b} \\leq \\sqrt{ab} \\leq \\frac{a+b}{2}$$

This chain links the three types of sequences through their associated means. Each mean captures a different notion of "average": arithmetic for additive processes, geometric for multiplicative processes, and harmonic for rates and reciprocals.

The AM–GM portion of the inequality ($G \\leq A$) is used extensively throughout algebra, particularly in optimization and in proving [inequalities](!/algebra/inequalities). The full three-way chain places the harmonic mean as the lower bound of the trio.`,
    before: ``,
    after: ``,
    link: '',
  },
}



const introContent = {
  id: 'intro',
  title: `Reciprocals of Arithmetic Progressions`,
  content: `A harmonic sequence is what you get when you take the reciprocals of an arithmetic sequence. The structure is inherited — the spacing of the original arithmetic progression determines everything — but the behavior is fundamentally different. Harmonic sequences have no closed-form partial sums, and the simplest harmonic series diverges despite its terms shrinking to zero.`,
}


const faqQuestions = {
  obj1: {
    question: "What is a harmonic sequence?",
    answer: "A harmonic sequence is a sequence whose terms are the reciprocals of an arithmetic sequence. If the underlying arithmetic sequence has first term b_1 and common difference d, the harmonic sequence has general term a_n = 1 divided by (b_1 + (n-1)d). The simplest example is 1, 1/2, 1/3, 1/4, and so on."
  },
  obj2: {
    question: "Does the harmonic series converge or diverge?",
    answer: "The harmonic series, the infinite sum of 1/n for n from 1 to infinity, diverges. Although the individual terms shrink to zero, they do so too slowly for the partial sums to remain bounded. Oresme's classical proof groups the terms into doubling blocks, each contributing at least 1/2 to the total."
  },
  obj3: {
    question: "What is the harmonic mean?",
    answer: "The harmonic mean of n positive numbers is n divided by the sum of their reciprocals. For two numbers a and b, this simplifies to 2ab divided by (a + b). In a harmonic sequence, every interior term equals the harmonic mean of its two neighbors, mirroring the arithmetic mean property of arithmetic sequences."
  },
  obj4: {
    question: "How do the arithmetic, geometric, and harmonic means compare?",
    answer: "For any set of positive numbers, the harmonic mean is never greater than the geometric mean, which is never greater than the arithmetic mean: H is less than or equal to G is less than or equal to A. Equality throughout holds only when all the numbers are identical. This chain links the three families of sequences through their associated means."
  },
  obj5: {
    question: "Why does the harmonic series diverge while the geometric series converges?",
    answer: "Both series have terms approaching zero, but the rate matters. Geometric terms shrink by a constant factor at each step, fast enough to keep the total finite when the absolute value of the ratio is less than 1. Harmonic terms shrink too slowly: terms approaching zero is necessary for convergence but not sufficient."
  },
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Harmonic Sequences and Series",
    "description": "Learn harmonic sequences: definition as reciprocals of arithmetic progressions, divergence of the harmonic series, harmonic mean, and the AM-GM-HM inequality.",
    "url": "https://www.learnmathclass.com/algebra/sequences/harmonic",
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
      "name": "Harmonic Sequences"
    },
    "teaches": [
      "Definition of a harmonic sequence as reciprocals of an arithmetic progression",
      "Properties of harmonic sequences and absence of closed-form partial sums",
      "Divergence of the harmonic series and Oresme's grouping proof",
      "Harmonic numbers and their logarithmic growth rate",
      "Harmonic mean for two and for n positive numbers",
      "The mean inequality H less than or equal to G less than or equal to A"
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
        "name": "Harmonic Sequences",
        "item": "https://www.learnmathclass.com/algebra/sequences/harmonic"
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
       title: "Harmonic Sequences, Series & Harmonic Mean | Learn Math Class",
       description: "Learn harmonic sequences: definition as reciprocals of arithmetic progressions, divergence of the harmonic series, harmonic mean, and the AM-GM-HM inequality.",
       keywords: keyWords.join(", "),
       url: "/algebra/sequences/harmonic",
       name: "Harmonic Sequences and Series"
     },
   }
}
   }

export default function HarmonicSequencesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
        ]
    },
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Harmonic Sequences</h1>
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
