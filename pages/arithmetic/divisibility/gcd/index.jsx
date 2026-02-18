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
  "greatest common divisor",
  "GCD",
  "HCF highest common factor",
  "GCF greatest common factor",
  "find GCD",
  "Euclidean algorithm",
  "coprime numbers",
  "relatively prime",
  "GCD by prime factorization",
  "GCD of two numbers",
  "common divisor",
  "simplify fractions GCD",
  "gcd calculator",
  "how to find GCD",
  "GCD properties"
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
  title: `What is GCD?`,
  content: `The greatest common divisor of two positive integers $a$ and $b$, written $\\gcd(a, b)$, is the largest positive integer that divides both.

The [common factors](!/arithmetic/divisibility/factors) of $12$ and $18$ are $\\{1, 2, 3, 6\\}$. The largest is $6$, so $\\gcd(12, 18) = 6$.

The common factors of $20$ and $35$ are $\\{1, 5\\}$. The largest is $5$, so $\\gcd(20, 35) = 5$.

The GCD always exists for any pair of positive integers, and it is always at least $1$ — because $1$ divides everything. It can never exceed the smaller of the two numbers, since no factor of $a$ can be larger than $a$ itself.

The same concept goes by several names. GCD (greatest common divisor) is standard in most mathematical texts. HCF (highest common factor) is common in British usage. GCF (greatest common factor) appears in some textbooks. All three refer to the same quantity.`,
  before: ``,
  after: ``,
  link: '',
},

obj2: {
  title: `Basic Properties`,
  content: `Several properties follow directly from the definition and hold for all positive integers.

$\\gcd(a, a) = a$. The largest number dividing $a$ and $a$ is $a$ itself.

$\\gcd(a, 1) = 1$. The only positive divisor of $1$ is $1$, so the only common divisor is $1$.

$\\gcd(a, 0) = a$. Every positive integer divides $0$, so the common divisors of $a$ and $0$ are exactly the divisors of $a$. The largest is $a$.

$\\gcd(a, b) = \\gcd(b, a)$. Order is irrelevant — the common factors of $a$ and $b$ are the same as those of $b$ and $a$.

$\\gcd(a, b) \\leq \\min(a, b)$. No common divisor can exceed the smaller number.

One further property connects the GCD to all other common divisors: every common divisor of $a$ and $b$ also divides $\\gcd(a, b)$. The GCD is not just the largest common divisor — it is a multiple of every common divisor.`,
  before: ``,
  after: ``,
  link: '',
},

obj3: {
  title: `Method 1: Listing Factors`,
  content: `The most direct approach finds all factors of each number, identifies the overlap, and selects the largest.

For $\\gcd(24, 36)$:

Factors of $24$: $\\{1, 2, 3, 4, 6, 8, 12, 24\\}$.

Factors of $36$: $\\{1, 2, 3, 4, 6, 9, 12, 18, 36\\}$.

Common factors: $\\{1, 2, 3, 4, 6, 12\\}$.

The largest is $12$, so $\\gcd(24, 36) = 12$.

The method is transparent and reliable for small numbers. For large numbers it becomes impractical — finding all factors of a number like $1{,}764$ requires systematic testing up to $\\sqrt{1764} \\approx 42$, and doing this for two numbers is tedious. The methods that follow avoid listing factors entirely.`,
  before: ``,
  after: ``,
  link: '',
},


obj4: {
  title: `Method 2: Prime Factorization`,
  content: `The [prime factorization](!/arithmetic/divisibility/prime-factorization) of each number reveals exactly which primes they share and in what quantities. The GCD takes the minimum exponent for each common prime.

For $\\gcd(48, 180)$:

$48 = 2^4 \\cdot 3^1$

$180 = 2^2 \\cdot 3^2 \\cdot 5^1$

The primes appearing in both factorizations are $2$ and $3$. The prime $5$ appears only in $180$ and contributes nothing to the GCD.

Take the smaller exponent for each shared prime: $\\min(4, 2) = 2$ for the prime $2$, and $\\min(1, 2) = 1$ for the prime $3$.

$$\\gcd(48, 180) = 2^2 \\cdot 3^1 = 4 \\cdot 3 = 12$$

This method is efficient when the factorizations are easy to find. For numbers whose prime factors are not immediately apparent, the Euclidean algorithm is faster.`,
  before: ``,
  after: ``,
  link: '',
},

obj5: {
  title: `Method 3: Euclidean Algorithm`,
  content: `The Euclidean algorithm computes the GCD without factoring either number. It relies on a single property: $\\gcd(a, b) = \\gcd(b, \\; a \\bmod b)$. Replacing the larger number with the remainder of their division preserves the GCD while shrinking the problem.

For $\\gcd(252, 105)$:

$252 = 105 \\cdot 2 + 42$, so $\\gcd(252, 105) = \\gcd(105, 42)$.

$105 = 42 \\cdot 2 + 21$, so $\\gcd(105, 42) = \\gcd(42, 21)$.

$42 = 21 \\cdot 2 + 0$, so $\\gcd(42, 21) = 21$.

The last nonzero remainder is $21$, which is $\\gcd(252, 105)$.

The algorithm works because any common divisor of $a$ and $b$ is also a common divisor of $b$ and $a \\bmod b$. The [modulo](!/arithmetic/modulo) operation peels away multiples of $b$ from $a$, leaving a smaller number with the same common divisor structure. This is the most efficient of the three methods, particularly for large numbers where factorization is difficult.`,
  before: ``,
  after: ``,
  link: '',
},

obj6: {
  title: `Euclidean Algorithm Step by Step`,
  content: `The procedure is mechanical. Start with two positive integers $a$ and $b$, with $a \\geq b$.

Compute $r = a \\bmod b$. Replace $a$ with $b$ and $b$ with $r$. Repeat until $b = 0$. The value of $a$ at that point is the GCD.

For $\\gcd(462, 198)$:

$462 = 198 \\cdot 2 + 66 \\quad \\to \\quad a = 198, \\; b = 66$

$198 = 66 \\cdot 3 + 0 \\quad \\to \\quad b = 0$

$\\gcd(462, 198) = 66$.

For $\\gcd(1{,}071, 462)$:

$1071 = 462 \\cdot 2 + 147 \\quad \\to \\quad a = 462, \\; b = 147$

$462 = 147 \\cdot 3 + 21 \\quad \\to \\quad a = 147, \\; b = 21$

$147 = 21 \\cdot 7 + 0 \\quad \\to \\quad b = 0$

$\\gcd(1071, 462) = 21$.

The algorithm always terminates because the remainder $r$ satisfies $0 \\leq r < b$, so $b$ strictly decreases at each step. A sequence of positive integers that strictly decreases must eventually reach zero.`,
  before: ``,
  after: `

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Try calculating Greatest Common Divisor with our GCF Calculator](!/arithmetic/calculators/gcf-calculator) →@`,

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
  title: `Coprime (Relatively Prime) Numbers`,
  content: `Two numbers are coprime — also called relatively prime — when their GCD is $1$. They share no common factor except the trivial one.

The numbers $8$ and $15$ are coprime: the factors of $8$ are $\\{1, 2, 4, 8\\}$, the factors of $15$ are $\\{1, 3, 5, 15\\}$, and the only overlap is $1$.

The numbers $9$ and $12$ are not coprime: $\\gcd(9, 12) = 3$.

The numbers $7$ and $20$ are coprime: $7$ is [prime](!/arithmetic/divisibility/prime-numbers) and does not divide $20$.

Two structural facts generate coprime pairs reliably. Any two consecutive integers are coprime — $\\gcd(n, n+1) = 1$ for all $n$ — because any common divisor of $n$ and $n+1$ would have to divide their difference, which is $1$. And a prime $p$ is coprime with every number it does not divide.`,
  before: ``,
  after: ``,
  link: '',
},

obj8: {
  title: `Properties of Coprime Numbers`,
  content: `Coprimality enables conclusions that fail for numbers with shared factors.

If $\\gcd(a, b) = 1$ and $a \\mid (b \\cdot c)$, then $a \\mid c$. When $a$ and $b$ share no common factor, the factor $a$ hiding inside the product $b \\cdot c$ must come entirely from $c$. Without coprimality, this inference breaks — $6 \\mid (4 \\cdot 3)$ does not imply $6 \\mid 3$.

If $\\gcd(a, b) = 1$ and $\\gcd(a, c) = 1$, then $\\gcd(a, b \\cdot c) = 1$. Coprimality with individual factors extends to their product.

If $\\gcd(a, b) = 1$, then $\\gcd(a^2, b^2) = 1$. Squaring both numbers introduces no new shared primes.

These properties are essential in the theory of [divisibility](!/arithmetic/divisibility). The rule that divisibility by $6$ can be tested by checking $2$ and $3$ separately works precisely because $\\gcd(2, 3) = 1$. Coprimality is what makes the [combined divisibility rules](!/arithmetic/divisibility/rules) valid.`,
  before: ``,
  after: ``,
  link: '',
},

obj9: {
  title: `GCD of More Than Two Numbers`,
  content: `The GCD extends to any number of inputs by applying it pairwise. The key identity is:

$$\\gcd(a, b, c) = \\gcd(\\gcd(a, b), \\; c)$$

Compute the GCD of the first two numbers, then take the GCD of that result with the third number. The process chains to any length.

For $\\gcd(24, 36, 60)$:

$\\gcd(24, 36) = 12$.

$\\gcd(12, 60) = 12$.

So $\\gcd(24, 36, 60) = 12$.

For $\\gcd(18, 30, 42)$:

$\\gcd(18, 30) = 6$.

$\\gcd(6, 42) = 6$.

So $\\gcd(18, 30, 42) = 6$.

The order of pairing does not matter — the GCD is associative and commutative, so any grouping produces the same result.`,
  before: ``,
  after: ``,
  link: '',
},


obj10: {
  title: `Applications of GCD`,
  content: `The most immediate application is simplifying **fractions**. The fraction $\\frac{24}{36}$ reduces to $\\frac{2}{3}$ by dividing numerator and denominator by $\\gcd(24, 36) = 12$. A fraction is in lowest terms when the GCD of its numerator and denominator is $1$.

Ratios simplify the same way. A rectangle with dimensions $48 \\times 80$ has an aspect ratio of $48:80$. Dividing both by $\\gcd(48, 80) = 16$ gives $3:5$.

Tiling problems use the GCD geometrically. The largest square tile that fits perfectly into a $48 \\times 80$ rectangle has side length $\\gcd(48, 80) = 16$. The rectangle can be covered by $3 \\times 5 = 15$ such tiles with no gaps or overlaps.

The GCD also connects to the [LCM](!/arithmetic/divisibility/lcm) through a clean identity: $a \\cdot b = \\gcd(a, b) \\cdot \\text{lcm}(a, b)$. Knowing the GCD gives the LCM for free, and vice versa.`,
  before: ``,
  after: ``,
  link: '',
},

obj11: {
  title: `Worked Examples`,
  content: `Find $\\gcd(56, 84)$ by listing factors. Factors of $56$: $\\{1, 2, 4, 7, 8, 14, 28, 56\\}$. Factors of $84$: $\\{1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84\\}$. Common: $\\{1, 2, 4, 7, 14, 28\\}$. GCD $= 28$.

Find $\\gcd(120, 84)$ by [prime factorization](!/arithmetic/divisibility/prime-factorization). $120 = 2^3 \\cdot 3 \\cdot 5$ and $84 = 2^2 \\cdot 3 \\cdot 7$. Shared primes: $2^{\\min(3,2)} \\cdot 3^{\\min(1,1)} = 2^2 \\cdot 3 = 12$.

Find $\\gcd(782, 253)$ by the Euclidean algorithm. $782 = 253 \\cdot 3 + 23$. Then $253 = 23 \\cdot 11 + 0$. GCD $= 23$.

Are $35$ and $54$ coprime? $\\gcd(35, 54)$: $54 = 35 \\cdot 1 + 19$, $35 = 19 \\cdot 1 + 16$, $19 = 16 \\cdot 1 + 3$, $16 = 3 \\cdot 5 + 1$, $3 = 1 \\cdot 3 + 0$. GCD $= 1$. Yes, coprime.

Simplify $\\frac{84}{126}$. $\\gcd(84, 126)$: $126 = 84 \\cdot 1 + 42$, $84 = 42 \\cdot 2 + 0$. GCD $= 42$. The fraction reduces to $\\frac{2}{3}$.`,
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
  title: "The Largest Shared Divisor",
  content: `When two numbers share [common factors](!/arithmetic/divisibility/factors), the greatest among them captures the deepest structural connection between the pair. The greatest common divisor — GCD — measures how much two numbers overlap in their factor structure, and it appears everywhere from simplifying **fractions** to determining whether two quantities are fundamentally incompatible.`
}

const faqQuestions = {
  obj1: {
    question: "What is the greatest common divisor (GCD)?",
    answer: "The GCD of two positive integers a and b is the largest positive integer that divides both. For example, gcd(12, 18) = 6 because 6 is the largest number that divides both 12 and 18 evenly."
  },
  obj2: {
    question: "What is the difference between GCD, HCF, and GCF?",
    answer: "They are all the same concept with different names. GCD (greatest common divisor) is standard in mathematics. HCF (highest common factor) is common in British usage. GCF (greatest common factor) appears in some textbooks."
  },
  obj3: {
    question: "How do you find the GCD by listing factors?",
    answer: "List all factors of each number, find the common factors (numbers appearing in both lists), and select the largest. For gcd(24, 36): factors of 24 are {1,2,3,4,6,8,12,24}, factors of 36 are {1,2,3,4,6,9,12,18,36}, common factors are {1,2,3,4,6,12}, so GCD = 12."
  },
  obj4: {
    question: "How do you find the GCD using prime factorization?",
    answer: "Factor both numbers into primes, identify shared primes, and take the minimum exponent for each. For gcd(48, 180): 48 = 2⁴×3¹ and 180 = 2²×3²×5¹. Shared primes: 2^min(4,2) × 3^min(1,2) = 2²×3 = 12."
  },
  obj5: {
    question: "What is the Euclidean algorithm?",
    answer: "A method to find GCD without factoring. Use the property gcd(a,b) = gcd(b, a mod b). Repeatedly replace (a,b) with (b, a mod b) until b=0. The final value of a is the GCD. For gcd(252,105): 252=105×2+42, 105=42×2+21, 42=21×2+0, so GCD=21."
  },
  obj6: {
    question: "What does coprime (relatively prime) mean?",
    answer: "Two numbers are coprime when their GCD is 1 — they share no common factor except 1. For example, 8 and 15 are coprime because gcd(8,15)=1. Any two consecutive integers are always coprime."
  },
  obj7: {
    question: "Why are coprime numbers important?",
    answer: "Coprimality enables key divisibility properties. If gcd(a,b)=1 and a divides b×c, then a must divide c. This is why divisibility by 6 can be tested by checking 2 and 3 separately — because gcd(2,3)=1."
  },
  obj8: {
    question: "How do you find the GCD of more than two numbers?",
    answer: "Apply GCD pairwise: gcd(a,b,c) = gcd(gcd(a,b), c). For gcd(24,36,60): first gcd(24,36)=12, then gcd(12,60)=12. The order doesn't matter — GCD is associative and commutative."
  },
  obj9: {
    question: "How is GCD used to simplify fractions?",
    answer: "Divide both numerator and denominator by their GCD. For 84/126: gcd(84,126)=42, so 84/126 = (84÷42)/(126÷42) = 2/3. A fraction is in lowest terms when gcd(numerator, denominator) = 1."
  },
  obj10: {
    question: "What is the relationship between GCD and LCM?",
    answer: "For any two positive integers a and b: a × b = gcd(a,b) × lcm(a,b). This means if you know the GCD, you can find the LCM by computing (a×b)/gcd(a,b), and vice versa."
  },
  obj11: {
    question: "What is gcd(a, 0)?",
    answer: "gcd(a, 0) = a for any positive integer a. Every positive integer divides 0, so the common divisors of a and 0 are exactly the divisors of a, and the largest is a itself."
  },
  obj12: {
    question: "Which method for finding GCD is most efficient?",
    answer: "The Euclidean algorithm is most efficient, especially for large numbers. It requires no factorization and terminates quickly because the remainder strictly decreases at each step. Listing factors or finding prime factorizations is slower for large numbers."
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Greatest Common Divisor (GCD)",
    "description": "Learn to find the GCD using three methods: listing factors, prime factorization, and the Euclidean algorithm. Understand coprime numbers and applications like simplifying fractions.",
    "url": "https://www.learnmathclass.com/arithmetic/divisibility/gcd",
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
      "name": "Greatest Common Divisor"
    },
    "teaches": [
      "Definition of GCD (HCF, GCF)",
      "Finding GCD by listing factors",
      "Finding GCD by prime factorization",
      "The Euclidean algorithm",
      "Coprime and relatively prime numbers",
      "GCD of multiple numbers",
      "Applications: simplifying fractions and ratios"
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
        "name": "Greatest Common Divisor (GCD)",
        "item": "https://www.learnmathclass.com/arithmetic/divisibility/gcd"
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
//         title: "Greatest Common Divisor (GCD) | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/arithmetic/divisibility/gcd",
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
      title: "GCD: Greatest Common Divisor & Euclidean Algorithm | Learn Math Class",
      description: "Learn to find the GCD using three methods: listing factors, prime factorization, and the Euclidean algorithm. Understand coprime numbers and applications like simplifying fractions.",
      keywords: keyWords.join(", "),
      url: "/arithmetic/divisibility/gcd",
      name: "Greatest Common Divisor (GCD)"
    },
  }
}
   }

// export default function GCDPage({seoData,sectionsContent , introContent}) {

export default function GCDPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
          sectionsContent.obj6.after,
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Greatest Common Divisor (GCD)</h1>
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
