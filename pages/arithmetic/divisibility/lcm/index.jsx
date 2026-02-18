import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../pages/pages.css';
import Head from 'next/head'


export async function getStaticProps(){

  const keyWords = [
  "least common multiple",
  "LCM",
  "find LCM",
  "LCM of two numbers",
  "common multiple",
  "LCM by prime factorization",
  "LCM using GCD",
  "LCM formula",
  "lowest common multiple",
  "LCM calculator",
  "common denominator",
  "LCM and GCD relationship",
  "how to find LCM",
  "LCM of three numbers",
  "LCM applications"
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

    const sectionsContent={

    // obj1:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
  
    // },
    // obj2:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
  
    // obj3:{
  
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
    // obj4:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
    // obj5:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
    // obj6:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },


    obj1: {
  title: `What is LCM?`,
  content: `The least common multiple of two positive integers $a$ and $b$, written $\\text{lcm}(a, b)$, is the smallest positive integer divisible by both.

The [multiples](!/arithmetic/divisibility/factors-and-multiples) of $4$ are $4, 8, 12, 16, 20, 24, \\ldots$ The multiples of $6$ are $6, 12, 18, 24, 30, \\ldots$ The numbers appearing in both lists — the common multiples — are $12, 24, 36, \\ldots$ The smallest is $12$, so $\\text{lcm}(4, 6) = 12$.

The LCM always exists and is always at least as large as the larger input: $\\text{lcm}(a, b) \\geq \\max(a, b)$. The result must be a multiple of both numbers, so it cannot be smaller than either one.

At the other extreme, $\\text{lcm}(a, b) \\leq a \\cdot b$. The product $a \\cdot b$ is always a common multiple — the LCM may equal it or may be smaller, but never exceeds it.`,
  before: ``,
  after: ``,
  link: '',
},

obj2: {
  title: `Basic Properties`,
  content: `Several properties mirror those of the [GCD](!/arithmetic/divisibility/gcd), with directions reversed.

$\\text{lcm}(a, a) = a$. The smallest multiple of $a$ that is also a multiple of $a$ is just $a$ itself.

$\\text{lcm}(a, 1) = a$. Every positive integer is a multiple of $1$, so $a$ already qualifies.

$\\text{lcm}(a, b) = \\text{lcm}(b, a)$. Order is irrelevant — the common multiples of $a$ and $b$ are the same as those of $b$ and $a$.

$\\text{lcm}(a, b) \\leq a \\cdot b$, with equality when $a$ and $b$ are coprime. The product provides an upper bound; shared factors bring the LCM below it.

Both $a$ and $b$ divide $\\text{lcm}(a, b)$ by definition. And the LCM divides every other common multiple — it is the smallest, and all others are its multiples.`,
  before: ``,
  after: ``,
  link: '',
},


obj3: {
  title: `Method 1: Listing Multiples`,
  content: `The most direct approach lists multiples of each number and identifies the first overlap.

For $\\text{lcm}(6, 8)$:

Multiples of $6$: $6, 12, 18, 24, 30, 36, \\ldots$

Multiples of $8$: $8, 16, 24, 32, 40, \\ldots$

The first number appearing in both lists is $24$, so $\\text{lcm}(6, 8) = 24$.

The method is intuitive and works well for small inputs. It becomes tedious when the LCM is much larger than the inputs — for $\\text{lcm}(7, 13) = 91$, listing multiples of $7$ up to $91$ requires thirteen entries. The methods that follow avoid this exhaustive search.`,
  before: ``,
  after: ``,
  link: '',
},


obj4: {
  title: `Method 2: Prime Factorization`,
  content: `The [prime factorization](!/arithmetic/divisibility/prime-factorization) approach mirrors the GCD method, but takes the maximum exponent for each prime instead of the minimum.

For $\\text{lcm}(12, 18)$:

$12 = 2^2 \\cdot 3^1$

$18 = 2^1 \\cdot 3^2$

Every prime appearing in either factorization must appear in the LCM — otherwise the LCM would not be divisible by both. Take the larger exponent for each: $\\max(2, 1) = 2$ for the prime $2$, and $\\max(1, 2) = 2$ for the prime $3$.

$$\\text{lcm}(12, 18) = 2^2 \\cdot 3^2 = 4 \\cdot 9 = 36$$

The contrast with the [GCD](!/arithmetic/divisibility/gcd) is symmetric. The GCD takes the minimum exponent — the overlap. The LCM takes the maximum — the full coverage needed to accommodate both numbers.`,
  before: ``,
  after: ``,
  link: '',
},


obj5: {
  title: `Method 3: Using GCD`,
  content: `When the [GCD](!/arithmetic/divisibility/gcd) is known or easy to compute — particularly through the Euclidean algorithm — the LCM follows from a single formula:

$$\\text{lcm}(a, b) = \\frac{a \\cdot b}{\\gcd(a, b)}$$

For $\\text{lcm}(12, 18)$: $\\gcd(12, 18) = 6$, so $\\text{lcm} = \\frac{12 \\cdot 18}{6} = \\frac{216}{6} = 36$.

For $\\text{lcm}(35, 15)$: $\\gcd(35, 15) = 5$, so $\\text{lcm} = \\frac{35 \\cdot 15}{5} = \\frac{525}{5} = 105$.

This is often the fastest route. The Euclidean algorithm finds the GCD efficiently even for large numbers, and a single division then delivers the LCM. No factorization or multiple-listing is needed.

A practical note: to avoid integer overflow in computation, divide before multiplying — compute $\\frac{a}{\\gcd(a,b)} \\cdot b$ rather than $\\frac{a \\cdot b}{\\gcd(a,b)}$.`,
  before: ``,
  after: ``,
  link: '',
},

obj6: {
  title: `The GCD–LCM Relationship`,
  content: `For any positive integers $a$ and $b$:

$$a \\cdot b = \\gcd(a, b) \\cdot \\text{lcm}(a, b)$$

The identity holds because the [GCD](!/arithmetic/divisibility/gcd) and LCM partition the prime structure of $a \\cdot b$ without overlap or omission.

Consider a prime $p$ appearing with exponent $\\alpha$ in $a$ and $\\beta$ in $b$. Its exponent in $a \\cdot b$ is $\\alpha + \\beta$. Its exponent in the GCD is $\\min(\\alpha, \\beta)$, and in the LCM is $\\max(\\alpha, \\beta)$. Since $\\min(\\alpha, \\beta) + \\max(\\alpha, \\beta) = \\alpha + \\beta$, the exponents in $\\gcd \\cdot \\text{lcm}$ match those in $a \\cdot b$.

This holds for every prime simultaneously, so the products are equal.

The relationship is useful in both directions. Knowing the GCD gives the LCM, and knowing the LCM gives the GCD — each determines the other when $a$ and $b$ are fixed.`,
  before: ``,
  after: ``,
  link: '',
},

    // obj7:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
    // obj8:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
    // obj9:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
    // obj10:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
    // obj11:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj7: {
  title: `When $a$ and $b$ Are Coprime`,
  content: `If $\\gcd(a, b) = 1$, the GCD–LCM formula simplifies to:

$$\\text{lcm}(a, b) = a \\cdot b$$

With no shared prime factors, nothing overlaps. Every prime in $a$ is absent from $b$, and every prime in $b$ is absent from $a$. The LCM must include all of them at full strength, which is exactly what the product provides.

$\\text{lcm}(7, 9) = 63$. The numbers share no common factor ($\\gcd = 1$), so the LCM equals their product.

$\\text{lcm}(8, 15) = 120$. Again coprime, so $8 \\times 15 = 120$.

This also works in reverse: if $\\text{lcm}(a, b) = a \\cdot b$, then $a$ and $b$ must be [coprime](!/arithmetic/divisibility/gcd). Any shared factor would pull the LCM below the product.`,
  before: ``,
  after: ``,
  link: '',
},

obj8: {
  title: `When One Divides the Other`,
  content: `If $a \\mid b$, then $\\text{lcm}(a, b) = b$.

The larger number is already a multiple of the smaller. No number bigger than $b$ is needed — $b$ itself is divisible by both $a$ and $b$.

$\\text{lcm}(4, 12) = 12$, because $4 \\mid 12$.

$\\text{lcm}(5, 30) = 30$, because $5 \\mid 30$.

$\\text{lcm}(a, a) = a$, because every number divides itself.

This is the minimal case — the LCM equals the larger input. At the other extreme (coprime numbers), the LCM equals the full product. Every other case falls between these bounds: $\\max(a, b) \\leq \\text{lcm}(a, b) \\leq a \\cdot b$.`,
  before: ``,
  after: ``,
  link: '',
},

obj9: {
  title: `LCM of More Than Two Numbers`,
  content: `Like the [GCD](!/arithmetic/divisibility/gcd), the LCM extends to more than two numbers by applying it pairwise:

$$\\text{lcm}(a, b, c) = \\text{lcm}(\\text{lcm}(a, b), \\; c)$$

For $\\text{lcm}(4, 6, 9)$:

$\\text{lcm}(4, 6) = 12$.

$\\text{lcm}(12, 9)$: factoring gives $12 = 2^2 \\cdot 3$ and $9 = 3^2$. Maximum exponents: $2^2 \\cdot 3^2 = 36$.

So $\\text{lcm}(4, 6, 9) = 36$.

Alternatively, factor all three numbers at once and take the maximum exponent for each prime across all factorizations. Here $4 = 2^2$, $6 = 2 \\cdot 3$, $9 = 3^2$. The primes present are $2$ and $3$, with maximums $2^2$ and $3^2$. The result is $36$ — the same answer by a more direct route.

The order of pairing does not matter. The LCM is associative and commutative.`,
  before: ``,
  after: ``,
  link: '',
},

obj10: {
  title: `Applications of LCM`,
  content: `Adding **fractions** with different denominators requires a common denominator, and the LCM of the denominators is the smallest one that works. To add $\\frac{1}{4} + \\frac{1}{6}$: $\\text{lcm}(4, 6) = 12$, so $\\frac{1}{4} = \\frac{3}{12}$ and $\\frac{1}{6} = \\frac{2}{12}$, giving $\\frac{5}{12}$.

Scheduling problems are natural LCM applications. If Bus A arrives every $12$ minutes and Bus B every $18$ minutes, and both just arrived simultaneously, they next coincide in $\\text{lcm}(12, 18) = 36$ minutes.

Cycle synchronization follows the same pattern. Two gears with $12$ and $18$ teeth respectively realign after $36$ teeth have passed the contact point. Two blinking lights with periods of $4$ and $6$ seconds flash together every $12$ seconds.

In each case, the question is the same: when does the first simultaneous recurrence occur? The answer is always the LCM of the individual periods.`,
  before: ``,
  after: ``,
  link: '',
},

obj11: {
  title: `Worked Examples`,
  content: `Find $\\text{lcm}(8, 14)$ by listing multiples. Multiples of $8$: $8, 16, 24, 32, 40, 48, 56$. Multiples of $14$: $14, 28, 42, 56$. First common multiple: $56$. So $\\text{lcm}(8, 14) = 56$.

Find $\\text{lcm}(24, 90)$ by [prime factorization](!/arithmetic/divisibility/prime-factorization). $24 = 2^3 \\cdot 3$ and $90 = 2 \\cdot 3^2 \\cdot 5$. Maximum exponents: $2^3 \\cdot 3^2 \\cdot 5 = 8 \\cdot 9 \\cdot 5 = 360$.

Find $\\text{lcm}(35, 15)$ using the [GCD](!/arithmetic/divisibility/gcd). $\\gcd(35, 15) = 5$. So $\\text{lcm} = \\frac{35 \\cdot 15}{5} = 105$.

Find the common denominator for $\\frac{5}{12} + \\frac{7}{18}$. $\\text{lcm}(12, 18) = 36$. Convert: $\\frac{5}{12} = \\frac{15}{36}$ and $\\frac{7}{18} = \\frac{14}{36}$. Sum: $\\frac{29}{36}$.

Verify: $\\gcd(8, 14) \\cdot \\text{lcm}(8, 14) = 2 \\cdot 56 = 112 = 8 \\cdot 14$. The identity holds.

Find $\\text{lcm}(6, 10, 15)$. $\\text{lcm}(6, 10) = 30$. $\\text{lcm}(30, 15) = 30$ (since $15 \\mid 30$). So $\\text{lcm}(6, 10, 15) = 30$.`,
  before: ``,
  after: ``,
  link: '',
},
    obj12:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj13:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',
  
    },
    obj14:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',
  
    },


    obj15:{
  
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    }
  
  }


  const introContent = {
  id: "intro",
  title: "The Smallest Shared Multiple",
  content: `While the [GCD](!/arithmetic/divisibility/gcd) finds the largest number that divides two given integers. The LCM works in the opposite direction — it finds the smallest number that both integers divide into. Where the GCD looks downward into shared factor structure, the LCM looks upward to the first point where two multiplication sequences meet.`
}


const faqQuestions = {
  obj1: {
    question: "What is the least common multiple (LCM)?",
    answer: "The LCM of two positive integers a and b is the smallest positive integer divisible by both. For example, lcm(4, 6) = 12 because 12 is the smallest number that both 4 and 6 divide into evenly."
  },
  obj2: {
    question: "How do you find the LCM by listing multiples?",
    answer: "List multiples of each number and find the first common one. For lcm(6, 8): multiples of 6 are 6,12,18,24... and multiples of 8 are 8,16,24... The first overlap is 24, so lcm(6,8) = 24."
  },
  obj3: {
    question: "How do you find the LCM using prime factorization?",
    answer: "Factor both numbers into primes and take the maximum exponent for each prime. For lcm(12, 18): 12 = 2²×3 and 18 = 2×3². Take max exponents: 2² × 3² = 36."
  },
  obj4: {
    question: "How do you find the LCM using the GCD?",
    answer: "Use the formula: lcm(a,b) = (a × b) / gcd(a,b). For lcm(12, 18): gcd(12,18) = 6, so lcm = (12 × 18) / 6 = 216 / 6 = 36. This is often the fastest method."
  },
  obj5: {
    question: "What is the relationship between GCD and LCM?",
    answer: "For any positive integers a and b: a × b = gcd(a,b) × lcm(a,b). This means knowing one gives you the other. The GCD captures shared factors (minimum exponents), the LCM captures all factors (maximum exponents)."
  },
  obj6: {
    question: "What is the LCM of coprime numbers?",
    answer: "If gcd(a,b) = 1 (coprime), then lcm(a,b) = a × b. With no shared factors, the LCM equals the full product. For example, lcm(7,9) = 63 because gcd(7,9) = 1."
  },
  obj7: {
    question: "What is the LCM when one number divides the other?",
    answer: "If a divides b, then lcm(a,b) = b. The larger number is already a multiple of the smaller. For example, lcm(4,12) = 12 because 4 divides 12."
  },
  obj8: {
    question: "How do you find the LCM of more than two numbers?",
    answer: "Apply LCM pairwise: lcm(a,b,c) = lcm(lcm(a,b), c). For lcm(4,6,9): first lcm(4,6) = 12, then lcm(12,9) = 36. The order doesn't matter."
  },
  obj9: {
    question: "How is LCM used for adding fractions?",
    answer: "The LCM of denominators gives the least common denominator. For 1/4 + 1/6: lcm(4,6) = 12, so convert to 3/12 + 2/12 = 5/12. Using LCM minimizes the size of the common denominator."
  },
  obj10: {
    question: "How is LCM used in scheduling problems?",
    answer: "LCM finds when periodic events coincide. If Bus A comes every 12 minutes and Bus B every 18 minutes, they arrive together every lcm(12,18) = 36 minutes."
  },
  obj11: {
    question: "What are the bounds on LCM?",
    answer: "For positive integers a and b: max(a,b) ≤ lcm(a,b) ≤ a×b. The LCM is at least the larger input (minimal case: one divides the other) and at most the product (maximal case: coprime numbers)."
  }
}



const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Least Common Multiple (LCM)",
    "description": "Learn to find the LCM using three methods: listing multiples, prime factorization, and the GCD formula. Understand the GCD-LCM relationship and applications like adding fractions.",
    "url": "https://www.learnmathclass.com/arithmetic/divisibility/lcm",
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
      "name": "Least Common Multiple"
    },
    "teaches": [
      "Definition of LCM",
      "Finding LCM by listing multiples",
      "Finding LCM by prime factorization",
      "Finding LCM using GCD formula",
      "The GCD-LCM relationship",
      "LCM of coprime numbers and divisibility cases",
      "Applications: fractions and scheduling"
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
        "name": "Arithmetic",
        "item": "https://www.learnmathclass.com/arithmetic"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Divisibility",
        "item": "https://www.learnmathclass.com/arithmetic/divisibility"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Least Common Multiple (LCM)",
        "item": "https://www.learnmathclass.com/arithmetic/divisibility/lcm"
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
//         title: "Least Common Multiple (LCM) | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/arithmetic/divisibility/lcm",
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
      title: "LCM: Least Common Multiple & GCD Formula | Learn Math Class",
      description: "Learn to find the LCM using three methods: listing multiples, prime factorization, and the GCD formula. Understand the GCD-LCM relationship and applications like adding fractions.",
      keywords: keyWords.join(", "),
      url: "/arithmetic/divisibility/lcm",
      name: "Least Common Multiple (LCM)"
    },
  }
}
   }

// export default function LCMPage({seoData,sectionsContent , introContent}) {

export default function LCMPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) { 


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
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
        ]
    },
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Least Common Multiple (LCM)</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}/>
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
