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
  "modulo operation",
  "modulo definition",
  "remainder division",
  "a mod n",
  "congruence modulo n",
  "modular arithmetic",
  "mod operator",
  "remainder operator",
  "clock arithmetic",
  "congruence classes",
  "modulo divisibility",
  "what is modulo",
  "how modulo works",
  "mod notation",
  "equivalence modulo"
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
  title: `What is Modulo?`,
  content: `The modulo operation takes two integers and returns the remainder of their division. Given integers $a$ and $n$ (with $n > 0$), "$a \\bmod n$" answers one question: what is left over when $a$ is divided by $n$?

The answer comes from the division equation that connects any integer $a$ to a divisor $n$:

$$a = n \\cdot q + r, \\qquad 0 \\leq r < n$$

The integer $q$ is the quotient — how many complete copies of $n$ fit inside $a$. The integer $r$ is the remainder — what remains after those copies are removed. Modulo gives $r$.

The expression $17 \\bmod 5 = 2$ because $17 = 5 \\cdot 3 + 2$. Three complete groups of $5$ account for $15$, leaving $2$.

The expression $23 \\bmod 7 = 2$ because $23 = 7 \\cdot 3 + 2$. Three complete groups of $7$ account for $21$, leaving $2$.

The expression $12 \\bmod 4 = 0$ because $12 = 4 \\cdot 3 + 0$. The division is exact — nothing remains.`,
  before: ``,
  after: ``,
  link: '',
},

obj2: {
  title: `Notation`,
  content: `Mathematical notation writes the operation as $a \\bmod n$. The expression is read "a modulo n" or simply "a mod n."

Most programming languages use the percent symbol instead: $a \\% \\; n$. In C, Java, Python, JavaScript, and nearly every other language, the $\\%$ operator computes remainders. The syntax differs from the mathematical form, but the underlying operation is the same.

One notational subtlety deserves attention early. The expression $a \\bmod n$ denotes an operation that produces a number — a remainder. The expression $a \\equiv b \\pmod{n}$, which appears later on this page, denotes a relationship between two numbers. The first is a computation; the second is a statement. Both use "mod," but they play different grammatical roles.`,
  before: ``,
  after: ``,
  link: '',
},

obj3: {
  title: `Modulo and Divisibility`,
  content: `Modulo and [divisibility](!/arithmetic/divisibility) are two sides of the same coin. Divisibility asks whether one integer divides another exactly. Modulo computes the evidence.

When $a \\bmod n = 0$, the remainder vanishes — $n$ divides $a$ with nothing left over. In divisibility notation, $n \\mid a$. The statement $24 \\bmod 6 = 0$ and the statement $6 \\mid 24$ express identical facts in different languages.

When $a \\bmod n \\neq 0$, the remainder is positive — $n$ does not divide $a$ exactly. The statement $25 \\bmod 6 = 1$ tells us $6 \\nmid 25$, and it tells us by how much the division misses.

Divisibility is the concept — the yes-or-no question of whether one number fits evenly into another. Modulo is the computational tool — it answers the question and, when the answer is no, quantifies the shortfall.`,
  before: ``,
  after: ``,
  link: '',
},

obj4: {
  title: `The Range of Remainders`,
  content: `For a fixed divisor $n$, the remainder $a \\bmod n$ is always one of the values $\\{0, 1, 2, \\ldots, n-1\\}$. There are exactly $n$ possibilities, and no remainder can reach $n$ itself — if it did, another complete copy of $n$ could be extracted.

When $n = 2$, every integer produces a remainder of $0$ or $1$. This is the basis of even and odd: even numbers give $0$, odd numbers give $1$.

When $n = 10$, every integer produces a remainder between $0$ and $9$. That remainder is the last digit of the number — $347 \\bmod 10 = 7$, read directly from the ones place.

When $n = 7$, every integer maps to one of seven remainders: $\\{0, 1, 2, 3, 4, 5, 6\\}$. No matter how large the dividend grows — thousands, millions, billions — the remainder when divided by $7$ never escapes this set.

The modulo operation compresses the entire number line into a finite set of $n$ values, repeating in cycles. Every integer lands somewhere in $\\{0, 1, \\ldots, n-1\\}$, and infinitely many integers share each landing spot.`,
  before: ``,
  after: ``,
  link: '',
},

obj51: {
  title: `How to Compute a Remainder`,
  content: `To find $a \\bmod n$, divide $a$ by $n$, discard the fractional part of the quotient, multiply back, and subtract. The gap between the original number and the nearest multiple of $n$ below it is the remainder.

For $47 \\bmod 5$: divide $47 \\div 5 = 9.4$. The integer part is $9$. Multiply back: $9 \\times 5 = 45$. Subtract: $47 - 45 = 2$. The remainder is $2$.

For $123 \\bmod 7$: divide $123 \\div 7 = 17.57\\ldots$. The integer part is $17$. Multiply back: $17 \\times 7 = 119$. Subtract: $123 - 119 = 4$. The remainder is $4$.

The procedure has a compact formula using the floor function $\\lfloor x \\rfloor$, which gives the greatest integer less than or equal to $x$:

$$a \\bmod n = a - n \\cdot \\left\\lfloor \\frac{a}{n} \\right\\rfloor$$

This captures the three-step process in a single expression: divide, truncate to an integer, subtract the product.`,
  before: ``,
  after: ``,
  link: '',
},

obj61: {
  title: `Edge Cases`,
  content: `Three cases deserve attention before the operation is applied routinely.

When $a < n$, the divisor exceeds the dividend and fits zero times. The entire value of $a$ is the remainder: $3 \\bmod 10 = 3$, $0 \\bmod 5 = 0$, $6 \\bmod 7 = 6$. If $0 \\leq a < n$, then $a \\bmod n = a$ — the number already lies within the remainder set and needs no reduction.

When $n = 1$, every integer is a multiple of $1$, so the remainder is always $0$. The expression $a \\bmod 1 = 0$ for any integer $a$. The remainder set $\\{0, 1, \\ldots, n-1\\}$ collapses to $\\{0\\}$.

When $n = 0$, the operation is undefined. Division by zero has no meaning, and "the remainder when dividing by zero" inherits that meaninglessness. No quotient $q$ satisfies $a = 0 \\cdot q + r$, because $0 \\cdot q = 0$ regardless of $q$. In programming, attempting $a \\% \\; 0$ raises a runtime error.`,
  before: ``,
  after: ``,
  link: '',
},

obj71: {
  title: `Negative Dividends`,
  content: `Everything above assumes $a$ is non-negative. When the dividend is negative, the meaning of "remainder" splits — two conventions exist, each producing a different answer to the same question.

The expression $(-7) \\bmod 3$ equals $-1$ under one convention and $2$ under another. Both satisfy the division equation $a = n \\cdot q + r$; they differ in how the quotient $q$ is rounded, which forces different values of $r$.

The distinction matters in practice because different programming languages adopt different conventions — code that works correctly in Python may produce different results in Java or JavaScript for the same negative input.

The full treatment — both conventions, their rationale, language-specific behavior, and conversion between them — is on the [negative numbers](!/arithmetic/modulo/negative-numbers) page.`,
  before: ``,
  after: ``,
  link: '',
},

obj5: {
  title: `Congruence`,
  content: `When two integers share the same remainder under division by $n$, they are called congruent modulo $n$. The notation is:

$$a \\equiv b \\pmod{n}$$

This reads "a is congruent to b modulo n" and means $a \\bmod n = b \\bmod n$ — both numbers land on the same remainder.

The expression $17 \\equiv 5 \\pmod{12}$ holds because $17 \\bmod 12 = 5$ and $5 \\bmod 12 = 5$. Both leave a remainder of $5$ when divided by $12$.

The expression $23 \\equiv 2 \\pmod{7}$ holds because $23 \\bmod 7 = 2$ and $2 \\bmod 7 = 2$. Both leave a remainder of $2$.

An equivalent way to test congruence: $a \\equiv b \\pmod{n}$ if and only if $n \\mid (a - b)$ — their difference is divisible by $n$. For the first example, $17 - 5 = 12$, and $12 \\mid 12$. For the second, $23 - 2 = 21$, and $7 \\mid 21$.

Congruence is not a new operation. It is a way of saying "same remainder" — a relationship between two numbers with respect to a shared divisor.`,
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
  title: `Properties of Congruence`,
  content: `Congruence modulo $n$ behaves like equality in several important ways. Three properties establish it as an equivalence relation — a formal notion of "sameness" within the modular world.

Reflexive: every integer is congruent to itself. $a \\equiv a \\pmod{n}$ for any $a$ and $n$, because $a - a = 0$ and $n \\mid 0$.

Symmetric: if $a \\equiv b \\pmod{n}$, then $b \\equiv a \\pmod{n}$. If $n$ divides $a - b$, it also divides $b - a$.

Transitive: if $a \\equiv b \\pmod{n}$ and $b \\equiv c \\pmod{n}$, then $a \\equiv c \\pmod{n}$. If $n$ divides both $a - b$ and $b - c$, it divides their sum $(a - b) + (b - c) = a - c$.

These properties mean congruence partitions the integers into groups — called congruence classes — where every integer in a group shares the same remainder. For $n = 3$, the integers split into three classes: those with remainder $0$ (multiples of $3$), those with remainder $1$, and those with remainder $2$. Every integer belongs to exactly one class.`,
  before: ``,
  after: ``,
  link: '',
},

obj7: {
  title: `The Clock Analogy`,
  content: `A $12$-hour clock is modular arithmetic made physical. After $12$ o'clock comes $1$ o'clock, not $13$ — the numbers wrap around.

The time $15{:}00$ on a $24$-hour clock translates to $3{:}00$ on a $12$-hour clock: $15 \\bmod 12 = 3$. The time $27$ hours from midnight is $3{:}00$ AM: $27 \\bmod 12 = 3$. Different numbers, same position on the dial.

Days of the week follow the same pattern with $n = 7$. Starting from Sunday ($0$), day $10$ of a sequence falls on the same weekday as day $3$: $10 \\bmod 7 = 3$, which is Wednesday. Day $17$ is also Wednesday. Day $24$ is Wednesday again. The cycle repeats every $7$ days.

The general principle: any system that cycles with period $n$ is governed by modular arithmetic. Months cycle with period $12$. Musical notes (in Western chromatic tuning) cycle with period $12$. Degree measurements on a compass cycle with period $360$. In each case, modulo captures the wrap-around — reducing an unbounded count to a position within a fixed cycle.`,
  before: ``,
  after: ``,
  link: '',
},

obj8: {
  title: `Why Modulo Matters`,
  content: `At its simplest, modulo tests [divisibility](!/arithmetic/divisibility) — check whether the remainder is zero. But the operation reaches far beyond that single question.

Pattern recognition depends on modulo. The last digit of any number is that number $\\bmod 10$. The last two digits are the number $\\bmod 100$. Identifying whether a number is even or odd is a $\\bmod 2$ test. These are modular observations embedded so deeply in everyday arithmetic that they rarely get named as such.

Many [divisibility rules](!/arithmetic/divisibility/divisibility-rules) are modular arguments in compact form. The rule that a number is divisible by $9$ if its digit sum is divisible by $9$ rests on the fact that $10 \\equiv 1 \\pmod{9}$. The rule for $11$ uses $10 \\equiv -1 \\pmod{11}$. Modulo provides the machinery; the rules are shortcuts derived from it.

In computer science, modulo controls array indexing, hash functions, and cyclic data structures. In cryptography, modular arithmetic underpins the algorithms that secure digital communication. The humble remainder, extracted from a simple division, turns out to be one of the most widely used tools in all of mathematics.`,
  before: ``,
  after: ``,
  link: '',
},


// obj9: {
//   title: `Section Roadmap`,
//   content: `The pages that follow develop modulo from a basic operation into a working arithmetic system.

// [Computing Remainders](!/arithmetic/modulo/computing-remainders) covers the mechanics — how to find $a \\bmod n$ efficiently, what happens with [negative numbers](!/arithmetic/modulo/negative-numbers), and the shortcuts that avoid full division for common moduli.

// [Modular Arithmetic](!/arithmetic/modulo/operations) builds on the operation to create a self-contained system. Addition, subtraction, multiplication, and exponentiation all have modular versions that allow computation with remainders directly — without ever recovering the original numbers. These tools solve problems involving last digits, cyclic patterns, and large powers that would be impractical to compute outright.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

obj9: {
  title: `Section Roadmap`,
  content: `The pages that follow develop modulo in two directions.

[Modular Arithmetic](!/arithmetic/modulo/operations) builds a self-contained system where addition, subtraction, multiplication, and exponentiation all operate within the confines of a fixed modulus. These tools solve problems involving last digits, cyclic patterns, and large [powers](!/algebra/powers) that would be impractical to compute outright.

[Negative Numbers](!/arithmetic/modulo/negative-numbers) addresses the convention split that arises when the dividend is negative — two valid definitions, different answers, and different behavior across programming languages.`,
  before: ``,
  after: ``,
  link: '',
},


obj10: {
  title: `Related Sections`,
  content: `Modulo connects to several areas of arithmetic that approach the same ideas from different angles.

[Divisibility](!/arithmetic/divisibility) is the concept that modulo tests. The statement $a \\bmod n = 0$ is the computational form of $n \\mid a$. Every divisibility question is, at its core, a modulo question.

[Divisibility rules](!/arithmetic/divisibility/divisibility-rules) are modular arguments packaged as mental shortcuts. The digit-sum test for $9$, the last-digit test for $5$, the alternating-sum test for $11$ — each one exploits a congruence property of $10$ raised to successive [powers](!/algebra/powers).

The [GCD](!/arithmetic/divisibility/gcd) — greatest common divisor — relies on modulo through the Euclidean algorithm, which repeatedly applies the modulo operation to reduce a pair of numbers until the remainder reaches zero. The last nonzero remainder is the GCD.`,
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
  title: "The Mathematics of Remainders",
  content: `Division does not always come out even. When $17$ is divided by $5$, the result is $3$ with $2$ left over. That leftover — the remainder — is not a loose end to discard. It carries information about the relationship between the two numbers, and an entire branch of arithmetic is built around extracting and using it.`
}

const faqQuestions = {
  obj1: {
    question: "What is the modulo operation?",
    answer: "The modulo operation returns the remainder when one integer is divided by another. For a mod n, it answers: what is left over when a is divided by n? For example, 17 mod 5 = 2 because 17 = 5×3 + 2, leaving a remainder of 2."
  },
  obj2: {
    question: "What is the difference between mod and % operators?",
    answer: "Mathematical notation writes a mod n, while most programming languages use a % n. Both compute remainders, but they may differ for negative numbers depending on the language. The underlying operation is the same for positive integers."
  },
  obj3: {
    question: "What is the range of possible remainders for a mod n?",
    answer: "For any divisor n, the remainder is always one of the values {0, 1, 2, ..., n-1}. There are exactly n possibilities. The remainder can never equal n — if it did, another complete copy of n could be extracted."
  },
  obj4: {
    question: "What does congruent modulo n mean?",
    answer: "Two integers a and b are congruent modulo n (written a ≡ b (mod n)) when they have the same remainder upon division by n. Equivalently, n divides their difference (a - b). For example, 17 ≡ 5 (mod 12) because both leave remainder 5."
  },
  obj5: {
    question: "How is modulo related to divisibility?",
    answer: "When a mod n = 0, the remainder is zero, meaning n divides a exactly. The statement a mod n = 0 is the computational form of n | a (n divides a). Every divisibility question is essentially a modulo question."
  },
  obj6: {
    question: "What are the properties of congruence?",
    answer: "Congruence is an equivalence relation with three properties: Reflexive (a ≡ a), Symmetric (if a ≡ b then b ≡ a), and Transitive (if a ≡ b and b ≡ c then a ≡ c). These properties partition integers into congruence classes sharing the same remainder."
  },
  obj7: {
    question: "How does the clock analogy explain modulo?",
    answer: "A 12-hour clock is modular arithmetic: after 12 comes 1, not 13. The time 15:00 on a 24-hour clock is 3:00 on a 12-hour clock (15 mod 12 = 3). Days of the week work similarly with mod 7. Any cyclic system uses modular arithmetic."
  },
  obj8: {
    question: "How do you test if a number is even or odd using modulo?",
    answer: "A number is even if n mod 2 = 0, and odd if n mod 2 = 1. This is a mod 2 test. Similarly, n mod 10 gives the last digit of any number, and n mod 100 gives the last two digits."
  },
  obj9: {
    question: "What is a congruence class?",
    answer: "A congruence class modulo n is the set of all integers sharing the same remainder when divided by n. For n = 3, integers partition into three classes: multiples of 3 (remainder 0), those with remainder 1, and those with remainder 2. Every integer belongs to exactly one class."
  },
  obj10: {
    question: "Why is modulo important in computer science?",
    answer: "Modulo controls array indexing, hash functions, and cyclic data structures. In cryptography, modular arithmetic underpins encryption algorithms like RSA. The remainder operation is fundamental to secure digital communication and efficient data storage."
  },
  obj11: {
    question: "How do divisibility rules relate to modulo?",
    answer: "Divisibility rules are modular arguments in compact form. The digit-sum test for 9 uses the fact that 10 ≡ 1 (mod 9). The test for 11 uses 10 ≡ -1 (mod 11). Each rule exploits a congruence property of powers of 10."
  },
  obj12: {
    question: "What is the difference between a mod n and a ≡ b (mod n)?",
    answer: "a mod n is an operation that produces a number (the remainder). a ≡ b (mod n) is a relationship stating that a and b have the same remainder when divided by n. The first computes a value; the second asserts equality of remainders."
  },
  obj13: {
    question: "How does the Euclidean algorithm use modulo?",
    answer: "The Euclidean algorithm for finding the GCD repeatedly applies modulo to reduce a pair of numbers until the remainder reaches zero. Each step replaces the larger number with the remainder. The last nonzero remainder is the GCD."
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Modulo Operation",
    "description": "Master the modulo operation: definition, notation, congruence, divisibility connection, clock arithmetic analogy. Learn how remainders partition integers into congruence classes.",
    "url": "https://www.learnmathclass.com/arithmetic/modulo",
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
      "name": "Modulo Operation"
    },
    "teaches": [
      "Definition of modulo as remainder after division",
      "Mathematical and programming notation",
      "Connection between modulo and divisibility",
      "Range of remainders for a given divisor",
      "Congruence and its properties",
      "Clock arithmetic analogy",
      "Applications in divisibility testing and computing"
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
        "name": "Modulo",
        "item": "https://www.learnmathclass.com/arithmetic/modulo"
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
//         title: "Modulo Page | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/modulo",
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
      title: "Modulo: Remainders, Congruence & Clock Arithmetic | Learn Math Class",
      description: "Master the modulo operation: definition, notation, congruence, divisibility connection, clock arithmetic analogy. Learn how remainders partition integers into congruence classes.",
      keywords: keyWords.join(", "),
      url: "/arithmetic/modulo",
      name: "Modulo Operation"
    },
  }
}
   }

// export default function ModuloPage({seoData,sectionsContent , introContent}) {



export default function ModuloPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

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
        id:'51',
        title:sectionsContent.obj51.title,
        link:sectionsContent.obj51.link,
        content:[
          sectionsContent.obj51.content,
        ]
    },
     {
        id:'61',
        title:sectionsContent.obj61.title,
        link:sectionsContent.obj61.link,
        content:[
          sectionsContent.obj61.content,
        ]
    },
     {
        id:'71',
        title:sectionsContent.obj71.title,
        link:sectionsContent.obj71.link,
        content:[
          sectionsContent.obj71.content,
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Modulo</h1>
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
