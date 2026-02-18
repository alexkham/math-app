import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../pages/pages.css'
import Head from 'next/head'


export async function getStaticProps(){

 const keyWords = [
  "divisibility",
  "divisibility definition",
  "divisible by",
  "divisor factor",
  "multiple of a number",
  "divisibility notation",
  "a divides b",
  "divisibility properties",
  "remainder zero",
  "divisibility rules",
  "prime numbers",
  "prime factorization",
  "GCD greatest common divisor",
  "LCM least common multiple",
  "factors and multiples"
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

    obj1: {
  title: `What is Divisibility?`,
  content: `An integer $a$ divides an integer $b$ when $b$ equals $a$ multiplied by some integer $k$, with no remainder:

$$a \\mid b \\quad \\text{means} \\quad b = a \\cdot k \\;\\text{ for some integer } k$$

The expression $3 \\mid 12$ is true because $12 = 3 \\cdot 4$. The expression $5 \\mid 12$ is false because no integer $k$ satisfies $12 = 5 \\cdot k$ — the closest are $5 \\cdot 2 = 10$ and $5 \\cdot 3 = 15$, neither of which equals $12$.

The expression $4 \\mid 20$ is true because $20 = 4 \\cdot 5$. The expression $7 \\mid 30$ is false because $30 = 7 \\cdot 4 + 2$ — a remainder of $2$ survives.

Divisibility is a yes-or-no question. Either $a$ fits into $b$ a whole number of times, or it does not. There is no "almost divides" or "partially divides."`,
  before: ``,
  after: ``,
  link: '',
},

obj2: {
  title: `Terminology and Notation`,
  content: `The vertical bar in $a \\mid b$ is the standard notation for divisibility. It is a statement — either true or false — not an operation that produces a number. This distinguishes it from the division symbol $\\div$, which computes a quotient.

A single relationship supports multiple phrasings, all meaning the same thing. When $3 \\mid 12$:

$3$ divides $12$. Or: $12$ is divisible by $3$. Or: $3$ is a divisor of $12$. Or: $3$ is a factor of $12$. Or: $12$ is a multiple of $3$.

Each phrasing shifts the emphasis — "divides" foregrounds $3$, "is divisible by" foregrounds $12$, "factor" and "multiple" name the roles — but the underlying fact is identical in every case: $12 = 3 \\cdot 4$ for an integer $4$.

The negation uses a slashed bar: $5 \\nmid 12$ means $5$ does not divide $12$.`,
  before: ``,
  after: ``,
  link: '',
},

obj3: {
  title: `Basic Properties`,
  content: `Several properties follow immediately from the definition and hold for all integers.

Every nonzero integer divides itself: $a \\mid a$, because $a = a \\cdot 1$.

The number $1$ divides everything: $1 \\mid a$ for any $a$, because $a = 1 \\cdot a$.

Every nonzero integer divides $0$: $a \\mid 0$, because $0 = a \\cdot 0$. Zero is a multiple of every number.

Zero divides nothing except itself: $0 \\mid b$ requires $b = 0 \\cdot k = 0$, so the only value $b$ can take is $0$.

Divisibility is transitive. If $a \\mid b$ and $b \\mid c$, then $a \\mid c$. If $3 \\mid 12$ and $12 \\mid 60$, then $3 \\mid 60$.

Divisibility distributes over addition and subtraction. If $a \\mid b$ and $a \\mid c$, then $a \\mid (b + c)$ and $a \\mid (b - c)$. Since $4 \\mid 20$ and $4 \\mid 12$, it follows that $4 \\mid 32$ and $4 \\mid 8$.

Divisibility scales with multiplication. If $a \\mid b$, then $a \\mid (b \\cdot k)$ for any integer $k$. Since $3 \\mid 12$, it follows that $3 \\mid 36$, $3 \\mid 60$, $3 \\mid 120$, and so on.`,
  before: ``,
  after: ``,
  link: '',
},


obj4: {
  title: `Divisibility and Remainders`,
  content: `For any integers $a$ and $n$ with $n > 0$, the division algorithm guarantees:

$$a = n \\cdot q + r, \\qquad 0 \\leq r < n$$

The integer $q$ is the quotient — how many complete copies of $n$ fit into $a$. The integer $r$ is the remainder — what is left after those copies are removed.

Divisibility corresponds to the case $r = 0$. When the remainder vanishes, the division is exact and $n \\mid a$. When $r \\neq 0$, the division is inexact and $n \\nmid a$.

The operation that extracts $r$ directly is [modulo](!/arithmetic/modulo). The statement $a \\bmod n = 0$ is the computational form of $n \\mid a$. The statement $a \\bmod n \\neq 0$ is the computational form of $n \\nmid a$. Divisibility poses the question; modulo computes the answer.`,
  before: ``,
  after: ``,
  link: '',
},

obj5: {
  title: `Divisibility Rules`,
  content: `Testing whether one number divides another does not always require performing the full division. For certain common divisors, patterns in the decimal digits of a number provide instant answers.

A number is divisible by $2$ if its last digit is even. By $5$ if its last digit is $0$ or $5$. By $10$ if its last digit is $0$. By $3$ if the sum of its digits is divisible by $3$. By $9$ if the sum of its digits is divisible by $9$.

Each rule exploits the structure of base-$10$ place value. The last digit determines divisibility by $2$ and $5$ because $10$ is divisible by both. The digit-sum rule for $9$ works because $10 \\equiv 1 \\pmod{9}$, as explained on the [modular arithmetic](!/arithmetic/modulo/operations) page.

These shortcuts are covered in full — with rules for $2, 3, 4, 5, 6, 8, 9, 10$, and $11$ — on the [divisibility rules](!/arithmetic/divisibility/rules) page.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj6:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
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


    obj6: {
  title: `Factors and Multiples`,
  content: `Every divisibility relationship names two roles. When $a \\mid b$, the number $a$ is a factor (or divisor) of $b$, and $b$ is a multiple of $a$.

The factors of a number are finite. The number $24$ has exactly eight factors: $1, 2, 3, 4, 6, 8, 12, 24$. Every positive integer has at least two factors — $1$ and itself — and most have more.

The multiples of a number are infinite. The multiples of $3$ are $3, 6, 9, 12, 15, \\ldots$ — the list extends without end. Every positive integer generates an infinite sequence of multiples.

Factors come in pairs. If $a$ is a factor of $n$, then $\\frac{n}{a}$ is also a factor. For $24$: the pair $(3, 8)$ corresponds to $3 \\cdot 8 = 24$, and the pair $(4, 6)$ to $4 \\cdot 6 = 24$. Searching for factors only up to $\\sqrt{n}$ is sufficient — every factor above the square root is already paired with one below it.

The full treatment, including counting formulas and systematic methods, appears on the [factors and multiples](!/arithmetic/divisibility/factors) page.`,
  before: ``,
  after: ``,
  link: '',
},

obj7: {
  title: `Prime Numbers`,
  content: `A prime number is an integer greater than $1$ whose only factors are $1$ and itself. The number $7$ is prime — no integer other than $1$ and $7$ divides it. The number $12$ is not prime — it has factors $2, 3, 4$, and $6$ beyond $1$ and $12$.

Primes are the atoms of multiplication. Every integer greater than $1$ is either prime or can be built by multiplying primes together. The number $12 = 2^2 \\cdot 3$ is assembled from the primes $2$ and $3$. The number $30 = 2 \\cdot 3 \\cdot 5$ from three primes.

The first primes are $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, \\ldots$ — an infinite sequence with no largest member. The number $2$ is the only even prime; every other even number is divisible by $2$ and therefore composite.

The number $1$ is not prime. It has only one factor (itself), while the definition requires exactly two. Excluding $1$ is not a technicality — it is necessary to preserve the uniqueness of [prime factorization](!/arithmetic/divisibility/prime-factorization).

The full treatment, including primality testing and the Sieve of Eratosthenes, appears on the [prime numbers](!/arithmetic/divisibility/prime-numbers) page.`,
  before: ``,
  after: ``,
  link: '',
},

obj8: {
  title: `Prime Factorization`,
  content: `The Fundamental Theorem of Arithmetic guarantees that every integer greater than $1$ can be expressed as a product of primes, and that this expression is unique up to the order of the factors.

The number $360$ factors as $2^3 \\cdot 3^2 \\cdot 5$. No other combination of primes produces $360$. The number $84$ factors as $2^2 \\cdot 3 \\cdot 7$. The factorization is a fingerprint — it identifies the number completely.

Prime factorization reveals the divisor structure of a number. The number of factors of $n = p_1^{a_1} \\cdot p_2^{a_2} \\cdots$ is $(a_1 + 1)(a_2 + 1) \\cdots$ — a formula that reads the answer directly from the exponents.

Factorization also underpins the computation of [GCD](!/arithmetic/divisibility/gcd) and [LCM](!/arithmetic/divisibility/lcm). The GCD takes the minimum exponent of each shared prime; the LCM takes the maximum. These connections are developed on the [prime factorization](!/arithmetic/divisibility/prime-factorization) page.`,
  before: ``,
  after: ``,
  link: '',
},


obj9: {
  title: `GCD and LCM`,
  content: `Two numbers may share common factors, and the largest of these is their greatest common divisor. The numbers $48$ and $36$ are both divisible by $1, 2, 3, 4, 6$, and $12$. The largest — $12$ — is $\\gcd(48, 36)$.

The least common multiple runs in the opposite direction. It is the smallest positive integer that both numbers divide into. For $4$ and $6$, the multiples of $4$ are $4, 8, 12, 16, \\ldots$ and the multiples of $6$ are $6, 12, 18, \\ldots$. The smallest number in both lists is $12$, so $\\text{lcm}(4, 6) = 12$.

The two quantities are linked by a clean identity:

$$a \\cdot b = \\gcd(a, b) \\cdot \\text{lcm}(a, b)$$

For $4$ and $6$: $4 \\cdot 6 = 24$, and $\\gcd(4,6) \\cdot \\text{lcm}(4,6) = 2 \\cdot 12 = 24$.

Three methods exist for computing the GCD: listing factors, [prime factorization](!/arithmetic/divisibility/prime-factorization), and the Euclidean algorithm — which uses [modulo](!/arithmetic/modulo) repeatedly to reduce the problem. The full treatment appears on the [GCD](!/arithmetic/divisibility/gcd) and [LCM](!/arithmetic/divisibility/lcm) pages.`,
  before: ``,
  after: ``,
  link: '',
},


obj10: {
  title: `Related Concepts`,
  content: `Divisibility connects outward to several areas that approach the same ideas from different angles.

[Modulo](!/arithmetic/modulo) is the computational counterpart. Where divisibility asks a yes-or-no question — does $n$ divide $a$? — modulo computes the remainder that answers it. The statement $a \\bmod n = 0$ and the statement $n \\mid a$ are two forms of the same fact.

**Fractions** arise when division is not exact. The expression $\\frac{a}{b}$ in lowest terms requires dividing both numerator and denominator by their GCD — a divisibility operation. Simplifying fractions is, at its core, factoring out common divisors.

[Modular arithmetic](!/arithmetic/modulo/operations) extends divisibility into a full arithmetic system where numbers are classified by their remainders. The [divisibility rules](!/arithmetic/divisibility/rules) for $3$, $9$, and $11$ are consequences of how $10$ behaves under [modular arithmetic](!/arithmetic/modulo/operations) — shortcuts derived from congruence properties of the base of our number system.`,
  before: ``,
  after: ``,
  link: '',
},
    obj11:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
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
  title: "When Division Leaves Nothing Behind",
  content: `Some divisions come out clean — $12 ÷ 3$ gives exactly $4$, with nothing left over. Others do not — $13 ÷ 3$ leaves a remainder of $1$. Divisibility is the study of when and why the first case occurs, and the consequences that follow from it. The concept threads through factoring, primes, common divisors, and the internal structure of the integers themselves.`
}

const faqQuestions = {
  obj1: {
    question: "What does divisibility mean?",
    answer: "An integer a divides an integer b (written a | b) when b equals a multiplied by some integer k with no remainder. For example, 3 | 12 because 12 = 3 × 4. Divisibility is a yes-or-no question: either a fits into b a whole number of times, or it does not."
  },
  obj2: {
    question: "What is the difference between a divisor, factor, and multiple?",
    answer: "When a | b: a is called a divisor (or factor) of b, and b is called a multiple of a. For 3 | 12: 3 is a factor of 12, and 12 is a multiple of 3. Divisor and factor mean the same thing; multiple refers to the other number in the relationship."
  },
  obj3: {
    question: "What does the notation a | b mean?",
    answer: "The vertical bar a | b is read 'a divides b' and means b = a × k for some integer k. It is a statement (true or false), not an operation. The negation a ∤ b means 'a does not divide b.' This differs from a ÷ b, which computes a quotient."
  },
  obj4: {
    question: "How is divisibility related to remainders?",
    answer: "Divisibility means the remainder is zero. For any division a ÷ n, the division algorithm gives a = n × q + r. When r = 0, n divides a exactly (n | a). The modulo operation computes r directly: a mod n = 0 means n | a."
  },
  obj5: {
    question: "What are the basic properties of divisibility?",
    answer: "Key properties: every nonzero integer divides itself (a | a); 1 divides everything (1 | a); every nonzero integer divides 0 (a | 0); divisibility is transitive (if a | b and b | c, then a | c); and it distributes over addition (if a | b and a | c, then a | (b+c))."
  },
  obj6: {
    question: "What is a prime number?",
    answer: "A prime number is an integer greater than 1 whose only factors are 1 and itself. Examples: 2, 3, 5, 7, 11, 13. The number 1 is not prime (it has only one factor). Primes are the building blocks of all integers through multiplication."
  },
  obj7: {
    question: "What is prime factorization?",
    answer: "Prime factorization expresses an integer greater than 1 as a product of prime numbers. For example, 360 = 2³ × 3² × 5. The Fundamental Theorem of Arithmetic guarantees this factorization is unique (up to order). It reveals the complete divisor structure of a number."
  },
  obj8: {
    question: "What is the GCD (greatest common divisor)?",
    answer: "The GCD of two numbers is the largest integer that divides both. For 48 and 36, the common divisors are 1, 2, 3, 4, 6, 12, so gcd(48, 36) = 12. Methods include listing factors, prime factorization, or the Euclidean algorithm using repeated modulo operations."
  },
  obj9: {
    question: "What is the LCM (least common multiple)?",
    answer: "The LCM of two numbers is the smallest positive integer that both divide into. For 4 and 6: multiples of 4 are 4, 8, 12, 16...; multiples of 6 are 6, 12, 18...; the smallest common one is 12, so lcm(4, 6) = 12."
  },
  obj10: {
    question: "How are GCD and LCM related?",
    answer: "For any two positive integers a and b: a × b = gcd(a, b) × lcm(a, b). For 4 and 6: 4 × 6 = 24, and gcd(4,6) × lcm(4,6) = 2 × 12 = 24. Knowing one allows you to compute the other from the product."
  },
  obj11: {
    question: "How do you find all factors of a number?",
    answer: "Factors come in pairs: if a is a factor of n, then n/a is also a factor. Search only up to √n — every factor above the square root is paired with one below it. For 24: pairs are (1,24), (2,12), (3,8), (4,6), giving factors 1, 2, 3, 4, 6, 8, 12, 24."
  },
  obj12: {
    question: "What are divisibility rules?",
    answer: "Divisibility rules are shortcuts using digit patterns. A number is divisible by 2 if its last digit is even; by 5 if it ends in 0 or 5; by 3 or 9 if the digit sum is divisible by 3 or 9; by 11 if the alternating digit sum is divisible by 11."
  },
  obj13: {
    question: "Why is 1 not considered prime?",
    answer: "A prime must have exactly two distinct factors: 1 and itself. The number 1 has only one factor (itself). Excluding 1 preserves the uniqueness of prime factorization — otherwise 12 could be written as 2² × 3 or 1 × 2² × 3 or 1² × 2² × 3, etc."
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Divisibility",
    "description": "Master divisibility: definition, notation, properties, factors and multiples, prime numbers, prime factorization, GCD, LCM. Foundation for number theory and modular arithmetic.",
    "url": "https://www.learnmathclass.com/arithmetic/divisibility",
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
      "name": "Divisibility"
    },
    "teaches": [
      "Definition and notation of divisibility",
      "Divisor, factor, and multiple terminology",
      "Basic divisibility properties",
      "Connection to remainders and modulo",
      "Factors, multiples, and prime numbers",
      "Prime factorization and uniqueness",
      "GCD and LCM computation"
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
//         title: "Divisibility Page | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/arithmetic/divisibility",
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
      title: "Divisibility: Factors, Primes, GCD & LCM | Learn Math Class",
      description: "Master divisibility: definition, notation, properties, factors and multiples, prime numbers, prime factorization, GCD, LCM. Foundation for number theory and modular arithmetic.",
      keywords: keyWords.join(", "),
      url: "/arithmetic/divisibility",
      name: "Divisibility"
    },
  }
}
   }

// export default function DivisibilityPage({seoData,sectionsContent , introContent}) {


export default function DivisibilityPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Divisibility</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
     showSecondaryNav={true}
         secondaryNavMode="children"  // or "siblings"
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
