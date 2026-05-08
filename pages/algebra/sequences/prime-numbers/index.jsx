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
  "prime numbers",
  "prime number sequence",
  "composite numbers",
  "infinitude of primes",
  "Euclid proof primes",
  "sieve of Eratosthenes",
  "primality testing",
  "trial division",
  "prime factorization",
  "fundamental theorem of arithmetic",
  "prime number theorem",
  "Mersenne primes",
  "Fermat primes",
  "twin primes",
  "Sophie Germain primes",
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
    title: `Definition`,
    content: `A **prime number** is an integer greater than $1$ whose only positive [divisors](!/arithmetic/divisibility) are $1$ and itself. A **composite number** is an integer greater than $1$ that has at least one positive divisor other than $1$ and itself. Every integer greater than $1$ is exactly one of these two types.

The first primes are:

$$2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, \\ldots$$

The number $2$ is the only even prime — every other even number is divisible by $2$ and therefore composite. The number $1$ is neither prime nor composite: it has exactly one positive divisor (itself), while primes are required to have exactly two.

The exclusion of $1$ is not arbitrary. If $1$ were prime, the fundamental theorem of arithmetic would fail: $12$ could be factored as $2^2 \\cdot 3$ or $1 \\cdot 2^2 \\cdot 3$ or $1^5 \\cdot 2^2 \\cdot 3$, and uniqueness of prime factorization would be lost.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Infinitude of Primes`,
    content: `There are infinitely many prime numbers. Euclid's proof, over two thousand years old, is one of the most celebrated arguments in all of mathematics.

Assume, for contradiction, that only finitely many primes exist: $p_1, p_2, \\ldots, p_k$. Form the number:

$$N = p_1 \\cdot p_2 \\cdot p_3 \\cdots p_k + 1$$

Dividing $N$ by any prime $p_i$ on the list leaves a remainder of $1$, so $N$ is not divisible by any of the listed primes. Either $N$ is itself prime (a prime missing from the list) or $N$ has a prime factor not on the list. In either case, the original list is incomplete.

The argument does not claim that $N$ is prime — it claims that $N$ has a prime factor outside the assumed list. For instance, $2 \\cdot 3 \\cdot 5 \\cdot 7 \\cdot 11 \\cdot 13 + 1 = 30031 = 59 \\cdot 509$, which is composite, but its factors $59$ and $509$ are primes not in the original set.

No finite collection of primes can account for all of them. New primes always exist beyond any boundary.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `The Sieve of Eratosthenes`,
    content: `The sieve of Eratosthenes is a systematic algorithm for finding all primes up to a given limit $n$.

Start with a list of integers from $2$ to $n$. The smallest unmarked number is $2$ — it is prime. Cross out every multiple of $2$ (i.e., $4, 6, 8, 10, \\ldots$). The next unmarked number is $3$ — it is prime. Cross out every multiple of $3$ that has not already been crossed out ($9, 15, 21, \\ldots$; note $6, 12, 18$ are already gone). Continue: the next unmarked number is $5$, cross out its multiples, and so on.

The process stops once the current prime exceeds $\\sqrt{n}$. Any composite number $\\leq n$ must have a factor $\\leq \\sqrt{n}$, so if it were not already eliminated, one of its factors would have crossed it out in an earlier pass.

For $n = 30$: start with $2, 3, 4, 5, \\ldots, 30$. After sieving by $2$: all even numbers $> 2$ are removed. After $3$: $9, 15, 21, 27$ are removed. After $5$: $25$ is removed. Since $\\sqrt{30} < 6$, the process ends. The surviving numbers $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$ are all primes up to $30$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Primality Testing`,
    content: `To determine whether a single integer $n$ is prime, the most direct method is **trial division**: test whether $n$ is divisible by any integer from $2$ to $\\lfloor \\sqrt{n} \\rfloor$.

The bound $\\sqrt{n}$ is sufficient because if $n = ab$ with $a \\leq b$, then $a \\leq \\sqrt{n}$. Any factor at or below the square root will be caught; any factor above it has a complementary factor below it.

Efficiency improves by skipping even numbers after checking $2$: if $n$ is not divisible by $2$, it cannot be divisible by $4, 6, 8, \\ldots$. Checking only $2$ and odd numbers up to $\\sqrt{n}$ cuts the work roughly in half. Further savings come from checking only $2, 3$, and numbers of the form $6k \\pm 1$, since every prime greater than $3$ has this form.

Is $97$ prime? $\\sqrt{97} < 10$, so check divisibility by $2, 3, 5, 7$. None divide $97$, so it is prime.

Is $91$ prime? Check $2$ (no), $3$ (no), $5$ (no), $7$: $91 = 7 \\times 13$. It is composite.

Trial division works well for numbers up to several digits. For very large numbers — the kind used in cryptography — more advanced methods exist, but they are beyond the scope of this page.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Prime Factorization`,
    content: `The **fundamental theorem of arithmetic** states that every integer greater than $1$ can be expressed as a product of prime numbers, and this factorization is unique up to the order of the factors.

$$60 = 2^2 \\cdot 3 \\cdot 5, \\quad 360 = 2^3 \\cdot 3^2 \\cdot 5, \\quad 1001 = 7 \\cdot 11 \\cdot 13$$

No matter how the factorization is carried out — whether starting by dividing out $2$s or by noticing that $1001 = 7 \\times 143$ — the final set of prime factors and their multiplicities is always the same.

Finding the factorization uses repeated division by the smallest available prime. Divide $n$ by $2$ as many times as possible, then by $3$, then by $5$, and so on. For $252$: $252 \\div 2 = 126$, $126 \\div 2 = 63$, $63 \\div 3 = 21$, $21 \\div 3 = 7$, and $7$ is prime. So $252 = 2^2 \\cdot 3^2 \\cdot 7$.

Prime factorization connects directly to the [GCD](!/arithmetic/divisibility/gcd) and [LCM](!/arithmetic/divisibility/lcm). Given the factorizations of two numbers, the GCD takes the minimum [power](!/algebra/powers) of each shared prime, and the LCM takes the maximum power of each prime that appears in either factorization.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `The Prime Number Theorem`,
    content: `Although primes are infinite, they become rarer among larger integers. Among the first $100$ integers, $25$ are prime. Among the first $1{,}000$, only $168$. Among the first $1{,}000{,}000$, only $78{,}498$.

The **prime number theorem** makes this thinning precise. Let $\\pi(n)$ denote the number of primes less than or equal to $n$. Then:

$$\\pi(n) \\approx \\frac{n}{\\ln n}$$

as $n$ grows large. The approximation improves in relative terms: the ratio $\\frac{\\pi(n)}{n / \\ln n}$ approaches $1$.

The practical interpretation is that near a large number $n$, roughly one in every $\\ln n$ integers is prime. Near $n = 1{,}000{,}000$, the average gap between consecutive primes is about $\\ln(10^6) \\approx 13.8$. Near $n = 10^{12}$, it is about $27.6$. Primes spread further apart on average but never disappear.

The prime number theorem was conjectured by Gauss and Legendre in the late 18th century and proved independently by Hadamard and de la Vallée-Poussin in 1896.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `Types of Primes`,
    content: `Certain primes satisfy additional structural constraints, leading to named families.

**Mersenne primes** have the form $2^p - 1$, where $p$ itself must be prime (though not every prime $p$ produces a Mersenne prime). The first Mersenne primes are $3, 7, 31, 127$ (corresponding to $p = 2, 3, 5, 7$). The exponent $p = 11$ gives $2^{11} - 1 = 2047 = 23 \\times 89$, which is composite. The largest known primes are typically Mersenne primes, found by specialized search algorithms.

**Fermat primes** have the form $2^{2^n} + 1$. Only five are known: $3, 5, 17, 257, 65537$ (for $n = 0, 1, 2, 3, 4$). Fermat conjectured that all numbers of this form are prime; Euler disproved this by showing $2^{2^5} + 1 = 4294967297 = 641 \\times 6700417$.

**Twin primes** are pairs of primes that differ by $2$: $(3, 5)$, $(5, 7)$, $(11, 13)$, $(17, 19)$, $(29, 31)$. Whether infinitely many twin prime pairs exist remains one of the oldest open problems in mathematics — the twin prime conjecture is widely believed true but unproven.

**Sophie Germain primes** are primes $p$ for which $2p + 1$ is also prime. The first examples are $2, 3, 5, 11, 23, 29, 41$. These primes play a role in primality testing algorithms and in the theory of safe primes used in cryptography.`,
    before: ``,
    after: ``,
    link: '',
  },
}


  const introContent = {
  id: 'intro',
  title: `Integers with Exactly Two Factors`,
  content: `The prime numbers are the building blocks of the integers: every integer greater than $1$ is either prime or can be expressed as a product of primes. Unlike every other sequence in this section, the primes obey no algebraic formula — there is no expression that computes the $n$-th prime from $n$. What is known about their distribution comes from deep results in number theory rather than from explicit pattern recognition.`,
}


const faqQuestions = {
  obj1: {
    question: "What is a prime number?",
    answer: "A prime number is an integer greater than 1 whose only positive divisors are 1 and itself. A composite number is an integer greater than 1 that has at least one divisor other than 1 and itself. The number 2 is the only even prime, and the number 1 is neither prime nor composite. The first primes are 2, 3, 5, 7, 11, 13, 17, 19, 23, and 29."
  },
  obj2: {
    question: "How do you know there are infinitely many primes?",
    answer: "Euclid's classical proof shows that no finite list can contain all primes. Assume only finitely many primes exist, multiply them all together, and add 1. The resulting number is not divisible by any prime on the list, so either it is itself a new prime or it has a prime factor missing from the list. Either way, the original list is incomplete."
  },
  obj3: {
    question: "How does the sieve of Eratosthenes find primes?",
    answer: "The sieve of Eratosthenes finds all primes up to a limit n. List the integers from 2 to n. Take the smallest unmarked number, mark it prime, and cross out all its multiples. Repeat with the next unmarked number. The process stops once the current prime exceeds the square root of n. The surviving unmarked numbers are exactly the primes up to n."
  },
  obj4: {
    question: "How do you check whether a number is prime?",
    answer: "The most direct method is trial division: test whether n is divisible by any integer from 2 up to the square root of n. The square root suffices because any composite number has a factor at or below its square root. Efficiency improves by skipping even numbers and checking only 2, 3, and integers of the form 6k plus or minus 1."
  },
  obj5: {
    question: "What does the prime number theorem say?",
    answer: "The prime number theorem states that the number of primes less than or equal to n, written pi(n), is approximately n divided by the natural logarithm of n. The approximation becomes more accurate in relative terms as n grows. Practically, near a large number n, roughly one in every ln(n) integers is prime, so primes spread further apart on average but never disappear."
  },
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Prime Numbers",
    "description": "Learn prime numbers: definition, Euclid's infinitude proof, sieve of Eratosthenes, primality testing, prime factorization, prime number theorem, and named families.",
    "url": "https://www.learnmathclass.com/algebra/sequences/prime-numbers",
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
      "name": "Prime Numbers"
    },
    "teaches": [
      "Definition of prime and composite numbers and the role of 1",
      "Euclid's proof that there are infinitely many primes",
      "Sieve of Eratosthenes algorithm for listing primes up to a limit",
      "Trial division and the square-root bound for primality testing",
      "Prime factorization and the fundamental theorem of arithmetic",
      "Prime number theorem and named families: Mersenne, Fermat, twin, and Sophie Germain primes"
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
        "name": "Prime Numbers",
        "item": "https://www.learnmathclass.com/algebra/sequences/prime-numbers"
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
       title: "Prime Numbers: Sieve, Factorization & PNT | Learn Math Class",
description: "Learn prime numbers: definition, Euclid's infinitude proof, sieve of Eratosthenes, primality testing, prime factorization, and the prime number theorem.",
       keywords: keyWords.join(", "),
       url: "/algebra/sequences/prime-numbers",
       name: "Prime Numbers"
     },
   }
}
   }

export default function PrimeNumbersPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Prime Numbers</h1>
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
