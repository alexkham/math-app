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
  "sequences",
  "mathematical sequences",
  "arithmetic sequence",
  "geometric sequence",
  "harmonic sequence",
  "fibonacci sequence",
  "triangular numbers",
  "square numbers",
  "prime numbers",
  "common difference",
  "common ratio",
  "explicit formula sequence",
  "recursive sequence",
  "sequence general term",
  "types of sequences",
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

 const sectionsContent = {
  obj1: {
    title: `Definition and Notation`,
    content: `A sequence assigns a number to each positive integer. The input is the **index** $n$, the output is the **term** $a_n$. Writing $a_1, a_2, a_3, \\ldots$ lists the terms in order; the subscript tells you where each term sits.

Formally, a sequence is a function $f: \\mathbb{N} \\to \\mathbb{R}$ — it takes a natural number and returns a real number. The function viewpoint makes precise what "ordered list" means: two sequences are equal exactly when $a_n = b_n$ for every index $n$.

A sequence can be **finite** (a fixed number of terms, such as $3, 7, 11, 15$) or **infinite** (continuing without end, such as $1, 4, 9, 16, \\ldots$). The ellipsis signals that the pattern continues, though what "the pattern" is must be stated explicitly — the sequence $1, 2, 4, \\ldots$ could be [powers](!/algebra/powers) of $2$, or the start of something else entirely.

Two notations are standard. The brace form $\\{a_n\\}_{n=1}^{\\infty}$ names the entire sequence as a single object. The listing form $a_1, a_2, a_3, \\ldots$ displays individual terms. Both are used interchangeably throughout this section.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Explicit and Recursive Definitions`,
    content: `There are two ways to specify a sequence. An **explicit** (closed-form) definition provides a formula that computes $a_n$ directly from $n$. Given the index, you get the term in one step — no need to know any other terms. The sequence $1, 4, 9, 16, 25, \\ldots$ has the explicit definition $a_n = n^2$.

A **recursive** definition computes each term from one or more previous terms, together with enough initial values to get started. The same sequence of perfect squares can be defined recursively as $a_1 = 1$, $a_n = a_{n-1} + 2n - 1$. To find the $50$th term, you would need to compute all $49$ terms before it.

The trade-off is direct access versus structural transparency. An explicit formula lets you jump to any term instantly. A recursive rule reveals how the sequence builds on itself — each term emerges from the ones before it — but forces you to compute terms in order.

Some sequences admit both forms. The [arithmetic sequence](!/algebra/sequences/arithmetic) $2, 5, 8, 11, \\ldots$ can be written explicitly as $a_n = 3n - 1$ or recursively as $a_1 = 2$, $a_n = a_{n-1} + 3$. Others, like the sequence of [prime numbers](!/algebra/sequences/prime-numbers), have no known closed-form expression and resist explicit formulation entirely.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Arithmetic Sequences`,
    content: `An arithmetic sequence is built by adding the same fixed value — the **common difference** $d$ — to each term to produce the next. Starting from an initial term $a_1$, the sequence unfolds as $a_1, a_1 + d, a_1 + 2d, a_1 + 3d, \\ldots$, and the general term is:

$$a_n = a_1 + (n - 1)d$$

The common difference governs direction and spacing. When $d > 0$, the sequence increases; when $d < 0$, it decreases; when $d = 0$, every term is identical. The sequence $7, 3, -1, -5, \\ldots$ has $d = -4$, each term falling four units below the previous.

Arithmetic sequences produce the simplest summation formula in all of mathematics. The sum of the first $n$ terms — the arithmetic series — is:

$$S_n = \\frac{n}{2}(a_1 + a_n)$$

The idea behind the formula is credited to Gauss: pair the first term with the last, the second with the second-to-last, and so on. Each pair sums to $a_1 + a_n$, and there are $\\frac{n}{2}$ such pairs.`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Arithmetic Sequences](!/algebra/sequences/arithmetic) →@`,
    link: '',
  },
  obj4: {
    title: `Geometric Sequences`,
    content: `A geometric sequence is built by multiplying each term by a fixed value — the **common ratio** $r$ — to produce the next. Starting from $a_1$, the terms are $a_1, a_1 r, a_1 r^2, a_1 r^3, \\ldots$, and the general term is:

$$a_n = a_1 \\cdot r^{n-1}$$

Where arithmetic sequences grow (or shrink) by equal steps, geometric sequences grow (or shrink) by equal factors. The sequence $3, 12, 48, 192, \\ldots$ has $r = 4$; the sequence $100, -50, 25, -12.5, \\ldots$ has $r = -\\frac{1}{2}$, alternating in sign with each term.

The sum of a finite geometric series has its own closed form:

$$S_n = a_1 \\cdot \\frac{1 - r^n}{1 - r} \\quad (r \\neq 1)$$

When $|r| < 1$, the terms shrink toward zero fast enough that the infinite series converges to $S = \\frac{a_1}{1 - r}$. When $|r| \\geq 1$, the terms do not diminish and the series diverges.`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Geometric Sequences](!/algebra/sequences/geometric) →@`,
    link: '',
  },
  obj5: {
    title: `Harmonic Sequences`,
    content: `A harmonic sequence is formed by taking the reciprocals of an arithmetic sequence. If the arithmetic progression has first term $b_1$ and common difference $d$, the harmonic sequence is:

$$a_n = \\frac{1}{b_1 + (n-1)d}$$

The simplest example is $1, \\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}, \\ldots$ — the reciprocals of the natural numbers. The terms decrease toward zero, but they do so slowly. Unlike arithmetic and geometric sequences, harmonic sequences have no closed-form expression for their partial sums.

The harmonic series $\\sum_{n=1}^{\\infty} \\frac{1}{n}$ diverges, even though its terms approach zero. This stands in sharp contrast to the geometric series $\\sum \\frac{1}{2^n}$, which converges. Approaching zero is necessary for convergence but not sufficient — the harmonic series is the most important illustration of this distinction.

The harmonic sequence connects to the other two progressions through the inequality of means: for any set of positive numbers, the harmonic mean is never greater than the geometric mean, which is never greater than the arithmetic mean ($H \\leq G \\leq A$).`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Harmonic Sequences](!/algebra/sequences/harmonic) →@`,
    link: '',
  },
  obj6: {
    title: `Fibonacci Numbers`,
    content: `The Fibonacci sequence is defined by a two-term recurrence: each term is the sum of its two immediate predecessors.

$$F_1 = 1, \\quad F_2 = 1, \\quad F_n = F_{n-1} + F_{n-2} \\quad (n \\geq 3)$$

This produces the sequence $1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, \\ldots$, where growth accelerates because each new term inherits the size of both its parents.

The ratio of consecutive Fibonacci numbers $\\frac{F_{n+1}}{F_n}$ converges to the golden ratio $\\phi = \\frac{1 + \\sqrt{5}}{2} \\approx 1.618$, a number that satisfies $\\phi^2 = \\phi + 1$. Despite its recursive definition, the Fibonacci sequence has a closed-form expression known as Binet's formula:

$$F_n = \\frac{\\phi^n - \\psi^n}{\\sqrt{5}}$$

where $\\psi = \\frac{1 - \\sqrt{5}}{2}$. The formula involves irrational numbers yet always yields an integer — a striking consequence of the algebraic relationship between $\\phi$ and $\\psi$.`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Fibonacci Numbers](!/algebra/sequences/fibonacci) →@`,
    link: '',
  },
  obj7: {
    title: `Triangular Numbers`,
    content: `The triangular numbers count dots arranged in successively larger equilateral triangles: one dot in the first row, two in the second, three in the third, and so on. The $n$-th triangular number is the sum of the first $n$ natural numbers:

$$T_n = 1 + 2 + 3 + \\cdots + n = \\frac{n(n+1)}{2}$$

The first terms are $1, 3, 6, 10, 15, 21, 28, 36, \\ldots$. Recursively, $T_n = T_{n-1} + n$ — each triangular number is built from the previous one by adding a new row.

The formula $T_n = \\frac{n(n+1)}{2}$ also equals the binomial coefficient $\\binom{n+1}{2}$, the number of ways to choose $2$ items from $n + 1$. This connection places triangular numbers at the intersection of summation, geometry, and **combinatorics**.

A key identity ties triangular and square numbers together: the sum of two consecutive triangular numbers is always a perfect square, $T_n + T_{n-1} = n^2$. Geometrically, two triangles of consecutive sizes fit together to form a square.`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Triangular Numbers](!/algebra/sequences/triangular-numbers) →@`,
    link: '',
  },
  obj8: {
    title: `Square Numbers`,
    content: `The square numbers are the perfect squares $1, 4, 9, 16, 25, 36, \\ldots$, given by $S_n = n^2$. Each can be visualized as dots filling a square grid with $n$ rows and $n$ columns.

Recursively, the sequence satisfies $S_n = S_{n-1} + (2n - 1)$. Each new square is built from the previous one by adding an L-shaped border of $2n - 1$ dots. This means every perfect square is a sum of consecutive odd numbers:

$$n^2 = 1 + 3 + 5 + \\cdots + (2n - 1)$$

The difference between consecutive squares is always odd: $S_n - S_{n-1} = 2n - 1$. This connects square numbers to [arithmetic sequences](!/algebra/sequences/arithmetic), since the odd numbers $1, 3, 5, 7, \\ldots$ form an arithmetic progression with common difference $2$.

The sum of the first $n$ squares has its own closed form:

$$\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}$$

This formula appears throughout mathematics — in variance calculations, area approximations, and [polynomial](!/algebra/polynomials) identities.`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Square Numbers](!/algebra/sequences/square-numbers) →@`,
    link: '',
  },
  obj9: {
    title: `Prime Numbers`,
    content: `A prime number is an integer greater than $1$ whose only positive [divisors](!/arithmetic/divisibility) are $1$ and itself. The first primes are $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, \\ldots$. The number $1$ is excluded by convention — it has only one divisor, not two.

Unlike every other sequence on this page, the primes follow no algebraic pattern. There is no formula that generates the $n$-th prime from $n$, no common difference, no common ratio, and no recurrence relation. Each prime must be discovered individually, typically by verifying that no integer from $2$ to $\\sqrt{p}$ divides it.

Euclid proved that the primes are infinite: no finite list can contain them all. The argument assumes finitely many primes $p_1, p_2, \\ldots, p_k$, forms the product $N = p_1 p_2 \\cdots p_k + 1$, and observes that $N$ is not divisible by any prime on the list — so either $N$ itself is prime or it has a prime factor missing from the list.

Although primes never run out, they do thin out. The prime number theorem describes the rate: among integers near $n$, roughly one in every $\\ln n$ is prime. The primes become sparser as numbers grow, but they never vanish entirely.`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Prime Numbers](!/algebra/sequences/prime-numbers) →@`,
    link: '',
  },
}

  const introContent = {
  id: 'intro',
  title: `Terms, Indices, and Patterns`,
  content: `A sequence is an ordered list of numbers where each element occupies a definite position. The position is the index, the element at that position is the term, and the rule connecting indices to terms — whether a formula, a recurrence, or an observed pattern — is the sequence's defining characteristic. Some sequences arise from repeated addition, others from repeated multiplication, and others from rules that resist any simple algebraic description. This page introduces the common language and notation, then maps out the principal families: progressions, figurate numbers, recursive sequences, and primes.`,
}

const faqQuestions = {
  obj1: {
    question: "What is a sequence in mathematics?",
    answer: "A sequence is an ordered list of numbers where each element occupies a definite position. Formally, it is a function from the natural numbers to the real numbers, mapping each index n to a term a_n. Sequences can be finite or infinite, and the rule connecting indices to terms defines the sequence."
  },
  obj2: {
    question: "What is the difference between explicit and recursive definitions?",
    answer: "An explicit definition gives a closed-form formula that computes any term directly from its index, allowing instant access to any position. A recursive definition computes each term from one or more previous terms, together with initial values. Some sequences admit both forms; others, like the prime numbers, have no known closed form."
  },
  obj3: {
    question: "What is the formula for the general term of an arithmetic sequence?",
    answer: "The general term of an arithmetic sequence is a_n = a_1 + (n - 1)d, where a_1 is the first term and d is the common difference. Each term is obtained by adding d to the previous one. The sum of the first n terms is given by S_n = n/2 times (a_1 + a_n)."
  },
  obj4: {
    question: "How are arithmetic and geometric sequences different?",
    answer: "Arithmetic sequences grow or shrink by a constant additive step, the common difference d, while geometric sequences grow or shrink by a constant multiplicative factor, the common ratio r. The general term of a geometric sequence is a_n = a_1 times r raised to the power n-1, in contrast to the linear formula for arithmetic sequences."
  },
  obj5: {
    question: "What are the main types of sequences?",
    answer: "The main families include progressions (arithmetic, geometric, harmonic), figurate numbers (triangular, square), recursive sequences such as the Fibonacci numbers, and the prime numbers. Progressions follow algebraic patterns, figurate numbers arise from geometric arrangements, and primes follow no closed-form rule despite being infinite."
  },
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Sequences in Mathematics",
    "description": "Learn about sequences: arithmetic, geometric, harmonic, Fibonacci, triangular, square, and prime numbers. Definitions, formulas, and recursive vs explicit forms.",
    "url": "https://www.learnmathclass.com/algebra/sequences",
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
      "name": "Mathematical Sequences"
    },
    "teaches": [
      "Definition and notation of sequences as functions on the natural numbers",
      "Explicit closed-form definitions versus recursive definitions",
      "Arithmetic sequences, common difference, and the arithmetic series formula",
      "Geometric sequences, common ratio, and finite and infinite geometric series",
      "Harmonic sequences and the divergence of the harmonic series",
      "Fibonacci numbers, triangular numbers, square numbers, and prime numbers"
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
       title: "Sequences: Arithmetic, Geometric & More | Learn Math Class",
       description: "Learn about sequences: arithmetic, geometric, harmonic, Fibonacci, triangular, square, and prime numbers. Definitions, formulas, and recursive vs explicit forms.",
       keywords: keyWords.join(", "),
       url: "/algebra/sequences",
       name: "Sequences in Mathematics"
     },
   }
}
   }

export default function SequencesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Sequences</h1>
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
