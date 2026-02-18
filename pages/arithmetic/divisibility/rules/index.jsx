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
  "divisibility rules",
  "divisibility test",
  "divisible by 2",
  "divisible by 3",
  "divisible by 4",
  "divisible by 5",
  "divisible by 6",
  "divisible by 8",
  "divisible by 9",
  "divisible by 10",
  "divisible by 11",
  "digit sum divisibility",
  "alternating sum rule",
  "divisibility shortcuts",
  "last digit test"
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
  title: `What Are Divisibility Rules?`,
  content: `A [divisibility](!/arithmetic/divisibility) rule is a shortcut that determines whether a number is divisible by a given divisor without carrying out the division. Instead of computing $7{,}836 \\div 3$ and checking for a remainder, the rule says: add the digits $7 + 8 + 3 + 6 = 24$, and check whether that sum is divisible by $3$. It is, so $3 \\mid 7836$.

Every rule exploits the structure of base-$10$ representation. A number like $5{,}432$ is shorthand for $5 \\cdot 10^3 + 4 \\cdot 10^2 + 3 \\cdot 10 + 2$. The behavior of the [powers](!/algebra/powers) of $10$ under [modulo](!/arithmetic/modulo) determines which digit patterns reveal divisibility — and different divisors respond to different patterns.

The rules are shortcuts, not definitions. The definition of divisibility is $a \\mid b$ when $b = a \\cdot k$ for some integer — equivalently, when $b \\bmod a = 0$. The rules provide fast paths to that same conclusion.`,
  before: ``,
  after: ``,
  link: '',
},

obj2: {
  title: `Divisibility by 2`,
  content: `A number is divisible by $2$ if its last digit is even: $0, 2, 4, 6$, or $8$.

Since $10$ is divisible by $2$, every power of $10$ is also divisible by $2$. The contribution of each digit beyond the ones place — $d \\cdot 10^k$ for $k \\geq 1$ — is automatically a multiple of $2$. Only the final digit $d_0$ remains outside that guarantee, so $d_0$ alone determines divisibility.

The number $1{,}746$ ends in $6$ (even), so $2 \\mid 1746$.

The number $3{,}821$ ends in $1$ (odd), so $2 \\nmid 3821$.

The even numbers — $\\ldots, -4, -2, 0, 2, 4, 6, \\ldots$ — are precisely the integers divisible by $2$. The odd numbers are those that leave a remainder of $1$.`,
  before: ``,
  after: ``,
  link: '',
},

obj3: {
  title: `Divisibility by 3`,
  content: `A number is divisible by $3$ if the sum of its digits is divisible by $3$.

The reason traces to a single congruence: $10 \\equiv 1 \\pmod{3}$. Every power of $10$ is also congruent to $1$ modulo $3$: $10^2 \\equiv 1$, $10^3 \\equiv 1$, and so on. A digit $d$ in the $k$th place contributes $d \\cdot 10^k \\equiv d \\cdot 1 = d \\pmod{3}$. The place value drops away entirely, and only the digit itself matters. The number is congruent to the sum of its digits modulo $3$.

The number $729$: $7 + 2 + 9 = 18$, and $1 + 8 = 9$. Since $3 \\mid 9$, the number is divisible by $3$.

The number $1{,}234$: $1 + 2 + 3 + 4 = 10$, and $1 + 0 = 1$. Since $3 \\nmid 1$, the number is not divisible by $3$.

The process can be repeated: if the digit sum is large, sum its digits again. The chain always terminates at a single digit, and that digit determines divisibility.`,
  before: ``,
  after: ``,
  link: '',
},


obj4: {
  title: `Divisibility by 4`,
  content: `A number is divisible by $4$ if its last two digits form a number divisible by $4$.

The number $100$ is divisible by $4$, and so is every higher power of $10$. Every digit beyond the tens place contributes a multiple of $100$ — automatically a multiple of $4$. Only the last two digits affect the remainder when dividing by $4$.

The number $3{,}516$: the last two digits form $16$, and $16 \\div 4 = 4$ exactly. So $4 \\mid 3516$.

The number $7{,}230$: the last two digits form $30$, and $30 \\div 4 = 7.5$. So $4 \\nmid 7230$.

For quick mental checks, it helps to know which two-digit endings are divisible by $4$: $00, 04, 08, 12, 16, 20, 24, 28, 32, 36, 40, 44, \\ldots$ — every fourth number from $00$ onward.`,
  before: ``,
  after: ``,
  link: '',
},


obj5: {
  title: `Divisibility by 5`,
  content: `A number is divisible by $5$ if its last digit is $0$ or $5$.

The logic is the same as for $2$: since $10$ is divisible by $5$, every digit beyond the ones place contributes a multiple of $5$. Only the last digit matters, and the only single digits divisible by $5$ are $0$ and $5$.

The number $4{,}835$ ends in $5$, so $5 \\mid 4835$.

The number $7{,}832$ ends in $2$, so $5 \\nmid 7832$.

This is the second simplest rule after divisibility by $10$ — a single-digit check with only two possible passing values.`,
  before: ``,
  after: ``,
  link: '',
},


obj6: {
  title: `Divisibility by 6`,
  content: `A number is divisible by $6$ if it is divisible by both $2$ and $3$.

Since $6 = 2 \\times 3$ and $\\gcd(2, 3) = 1$, divisibility by $6$ requires passing both individual tests: the last digit must be even, and the digit sum must be divisible by $3$.

The number $1{,}254$: last digit $4$ (even — passes the $2$ test), digit sum $1 + 2 + 5 + 4 = 12$ (divisible by $3$ — passes the $3$ test). Both conditions hold, so $6 \\mid 1254$.

The number $2{,}135$: last digit $5$ (odd — fails the $2$ test). No need to check the digit sum. The number is not divisible by $6$.

This approach generalizes. For any composite divisor $n = a \\times b$ where $a$ and $b$ are [coprime](!/arithmetic/divisibility/gcd), divisibility by $n$ is equivalent to divisibility by both $a$ and $b$.`,
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
    // obj12:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
    // obj13:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
    //   link:'',
  
    // },

    obj7: {
  title: `Divisibility by 8`,
  content: `A number is divisible by $8$ if its last three digits form a number divisible by $8$.

The number $1{,}000$ is divisible by $8$ ($1000 = 8 \\times 125$), and so is every higher power of $10$. Digits beyond the hundreds place contribute multiples of $1{,}000$ — all divisible by $8$. Only the last three digits affect the outcome.

The number $53{,}104$: the last three digits form $104$, and $104 \\div 8 = 13$ exactly. So $8 \\mid 53104$.

The number $12{,}345$: the last three digits form $345$, and $345 \\div 8 = 43.125$. So $8 \\nmid 12345$.

This rule is harder to apply mentally than the rules for $2$ or $5$, since it requires dividing a three-digit number by $8$. For quick estimates, checking whether the three-digit number is close to a known multiple of $8$ ($8, 16, 24, \\ldots, 992, 1000$) can help.`,
  before: ``,
  after: ``,
  link: '',
},

obj8: {
  title: `Divisibility by 9`,
  content: `A number is divisible by $9$ if the sum of its digits is divisible by $9$.

The reasoning is identical to the rule for $3$: $10 \\equiv 1 \\pmod{9}$, so every power of $10$ is congruent to $1$ modulo $9$, and each digit contributes only its face value. The number is congruent to its digit sum modulo $9$.

The number $8{,}127$: $8 + 1 + 2 + 7 = 18$, and $18 \\div 9 = 2$ exactly. So $9 \\mid 8127$.

The number $4{,}825$: $4 + 8 + 2 + 5 = 19$, and $19 \\div 9 = 2$ remainder $1$. So $9 \\nmid 4825$.

Since $9 = 3^2$, every number divisible by $9$ is automatically divisible by $3$ — but not the other way around. The number $729$ is divisible by both; the number $12$ is divisible by $3$ but not by $9$.`,
  before: ``,
  after: ``,
  link: '',
},

obj9: {
  title: `Divisibility by 10`,
  content: `A number is divisible by $10$ if its last digit is $0$.

This is the simplest rule of all. The base of the number system is $10$, so a number has no remainder when divided by $10$ exactly when the ones place is empty.

The number $5{,}230$ ends in $0$, so $10 \\mid 5230$.

The number $5{,}235$ ends in $5$, so $10 \\nmid 5235$.

Since $10 = 2 \\times 5$, divisibility by $10$ requires divisibility by both $2$ and $5$. The only digit that is simultaneously even and a multiple of $5$ is $0$ — which is why the rule reduces to a single condition.`,
  before: ``,
  after: ``,
  link: '',
},


obj10: {
  title: `Divisibility by 11`,
  content: `A number is divisible by $11$ if the alternating sum of its digits (from right to left: add, subtract, add, subtract, $\\ldots$) is divisible by $11$.

The congruence behind the rule is $10 \\equiv -1 \\pmod{11}$. Successive [powers](!/algebra/powers) of $10$ alternate: $10^0 = 1$, $10^1 \\equiv -1$, $10^2 \\equiv 1$, $10^3 \\equiv -1$. Each digit's contribution to the remainder alternates in sign depending on its position.

The number $9{,}273$: alternating sum from the right gives $3 - 7 + 2 - 9 = -11$. Since $11 \\mid (-11)$, the number is divisible by $11$.

The number $5{,}831$: alternating sum gives $1 - 3 + 8 - 5 = 1$. Since $11 \\nmid 1$, the number is not divisible by $11$.

If the alternating sum is negative, that is fine — a negative multiple of $11$ still indicates divisibility. The result $-11$, $-22$, or $0$ all confirm the number is divisible by $11$.`,
  before: ``,
  after: ``,
  link: '',
},


obj11: {
  title: `Combining Rules`,
  content: `Divisibility by a composite number can be tested by checking its coprime factors separately.

Is $2{,}340$ divisible by $12$? Since $12 = 4 \\times 3$ and $\\gcd(4, 3) = 1$, check each factor independently. Last two digits: $40$, and $40 \\div 4 = 10$ exactly — divisible by $4$. Digit sum: $2 + 3 + 4 + 0 = 9$, divisible by $3$. Both conditions hold, so $12 \\mid 2340$.

Is $8{,}910$ divisible by $15$? Since $15 = 5 \\times 3$ and $\\gcd(5, 3) = 1$, check both. Last digit: $0$ — divisible by $5$. Digit sum: $8 + 9 + 1 + 0 = 18$ — divisible by $3$. Both pass, so $15 \\mid 8910$.

The coprimality condition is essential. Testing divisibility by $12$ as "$\\text{divisible by } 2$ and $\\text{divisible by } 6$" is not sufficient, because $\\gcd(2, 6) = 2 \\neq 1$. The factorization must split $12$ into coprime components — $4$ and $3$ — for the combined test to work.`,
  before: ``,
 after: `

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Test divisibility by any of these rules with our Divisibility Calculator](!/arithmetic/calculators/divisibility-calculator) →@`,
  link: '',
},


obj12: {
  title: `Worked Examples`,
  content: `Which of $2, 3, 4, 5, 6, 8, 9, 10$ divide $4{,}320$? Last digit $0$: divisible by $2$, $5$, and $10$. Digit sum $4 + 3 + 2 + 0 = 9$: divisible by $3$ and $9$. Since divisible by both $2$ and $3$: divisible by $6$. Last two digits $20$: $20 \\div 4 = 5$ — divisible by $4$. Last three digits $320$: $320 \\div 8 = 40$ — divisible by $8$. The number passes every test.

Is $7{,}623$ divisible by $3$? Digit sum: $7 + 6 + 2 + 3 = 18$. Since $3 \\mid 18$, yes.

Is $7{,}623$ divisible by $9$? Same digit sum: $18$. Since $9 \\mid 18$, yes.

Is $7{,}623$ divisible by $6$? Last digit $3$ is odd, so $2 \\nmid 7623$. Therefore $6 \\nmid 7623$, regardless of the digit sum.

Is $31{,}724$ divisible by $11$? Alternating sum from the right: $4 - 2 + 7 - 1 + 3 = 11$. Since $11 \\mid 11$, yes.

Common error: testing divisibility by $12$ by checking $2$ and $6$ instead of $4$ and $3$. The number $18$ is divisible by both $2$ and $6$, but $12 \\nmid 18$. Coprime factorization is required.`,
  before: ``,
  after: ``,
  link: '',
},


obj13: {
  title: `Why These Rules Work`,
  content: `Every divisibility rule is a consequence of how the base $10$ behaves under [modular arithmetic](!/arithmetic/modulo/modular-arithmetic).

A number written in decimal is $d_k \\cdot 10^k + d_{k-1} \\cdot 10^{k-1} + \\cdots + d_1 \\cdot 10 + d_0$. Reducing this expression [modulo](!/arithmetic/modulo) a divisor $n$ replaces each $10^j$ with its remainder modulo $n$, and the pattern of those remainders determines the rule.

For $n = 2$ or $n = 5$: $10 \\equiv 0$, so all terms except $d_0$ vanish. Only the last digit matters.

For $n = 4$: $100 \\equiv 0 \\pmod{4}$, so all terms beyond $d_1 \\cdot 10 + d_0$ vanish. The last two digits determine divisibility.

For $n = 8$: $1000 \\equiv 0 \\pmod{8}$, extending the same logic to the last three digits.

For $n = 3$ or $n = 9$: $10 \\equiv 1$, so $10^k \\equiv 1$ for all $k$. Every digit contributes its face value and nothing more. The number reduces to its digit sum.

For $n = 11$: $10 \\equiv -1$, so $10^k$ alternates between $1$ and $-1$. Digits contribute with alternating signs, producing the alternating-sum rule.

Each rule is a human-readable compression of a modular identity. The [modular arithmetic](!/arithmetic/modulo/modular-arithmetic) page develops these identities in full.`,
  before: ``,
  after: ``,
  link: '',
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
  title: "Testing Divisibility at a Glance",
  content: `Checking whether one number divides another by performing the full division works — but it is slow, especially for large numbers. For the most common divisors, patterns in the decimal digits provide an answer instantly. Each pattern is a consequence of how [modular arithmetic](!/arithmetic/modulo/modular-arithmetic) interacts with the base-$10$ place value system, compressed into a rule simple enough to apply mentally.`
}

const faqQuestions = {
  obj1: {
    question: "What are divisibility rules?",
    answer: "Divisibility rules are shortcuts that determine whether a number is divisible by a given divisor without performing the full division. They exploit patterns in decimal digits based on how powers of 10 behave under modular arithmetic."
  },
  obj2: {
    question: "How do you test divisibility by 2?",
    answer: "A number is divisible by 2 if its last digit is even (0, 2, 4, 6, or 8). Since 10 is divisible by 2, all digits except the last contribute multiples of 2, so only the ones digit matters."
  },
  obj3: {
    question: "How do you test divisibility by 3?",
    answer: "A number is divisible by 3 if the sum of its digits is divisible by 3. This works because 10 ≡ 1 (mod 3), so each digit contributes only its face value. For 729: 7+2+9=18, and 3|18, so 3|729."
  },
  obj4: {
    question: "How do you test divisibility by 4?",
    answer: "A number is divisible by 4 if its last two digits form a number divisible by 4. Since 100 is divisible by 4, only the tens and ones places affect the remainder. For 3,516: 16÷4=4 exactly, so 4|3516."
  },
  obj5: {
    question: "How do you test divisibility by 5?",
    answer: "A number is divisible by 5 if its last digit is 0 or 5. Like divisibility by 2, since 10 is divisible by 5, only the last digit matters, and only 0 and 5 are single digits divisible by 5."
  },
  obj6: {
    question: "How do you test divisibility by 6?",
    answer: "A number is divisible by 6 if it is divisible by both 2 AND 3. Since 6=2×3 and gcd(2,3)=1, check that the last digit is even AND the digit sum is divisible by 3. Both conditions must hold."
  },
  obj7: {
    question: "How do you test divisibility by 8?",
    answer: "A number is divisible by 8 if its last three digits form a number divisible by 8. Since 1000 is divisible by 8, only the last three digits affect the remainder. For 53,104: 104÷8=13, so 8|53104."
  },
  obj8: {
    question: "How do you test divisibility by 9?",
    answer: "A number is divisible by 9 if the sum of its digits is divisible by 9. The reasoning is identical to divisibility by 3: since 10≡1 (mod 9), each digit contributes its face value. For 8,127: 8+1+2+7=18, and 9|18."
  },
  obj9: {
    question: "How do you test divisibility by 10?",
    answer: "A number is divisible by 10 if its last digit is 0. This is the simplest rule — the base of our number system is 10, so a number has no remainder when the ones place is empty."
  },
  obj10: {
    question: "How do you test divisibility by 11?",
    answer: "A number is divisible by 11 if the alternating sum of its digits (from right: add, subtract, add...) is divisible by 11. This works because 10≡-1 (mod 11), so digit positions alternate in sign. For 9,273: 3-7+2-9=-11, and 11|-11."
  },
  obj11: {
    question: "How do you test divisibility by 12?",
    answer: "Test divisibility by 4 AND by 3 (coprime factors of 12). Check that the last two digits are divisible by 4 AND the digit sum is divisible by 3. Do NOT test 2 and 6 — they are not coprime (gcd(2,6)=2≠1)."
  },
  obj12: {
    question: "Why does the digit sum rule work for 3 and 9?",
    answer: "Because 10≡1 (mod 3) and 10≡1 (mod 9). Every power of 10 is congruent to 1, so a digit d in position k contributes d×10^k ≡ d×1 = d. The number reduces to the sum of its digits under these moduli."
  },
  obj13: {
    question: "Why does the alternating sum rule work for 11?",
    answer: "Because 10≡-1 (mod 11). Powers of 10 alternate: 10⁰=1, 10¹≡-1, 10²≡1, 10³≡-1. Each digit's contribution alternates in sign based on position, producing the alternating-sum pattern."
  }
}


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Divisibility Rules",
//     "description": "Master divisibility rules for 2, 3, 4, 5, 6, 8, 9, 10, and 11. Learn digit sum tests, last digit checks, alternating sums, and how to combine rules for composite divisors.",
//     "url": "https://www.learnmathclass.com/arithmetic/divisibility/divisibility-rules",
//     "inLanguage": "en-US",
//     "learningResourceType": "Explanation",
//     "educationalLevel": "High School, College",
//     "educationalUse": "Learning",
//     "audience": {
//       "@type": "EducationalAudience",
//       "educationalRole": "student"
//     },
//     "about": {
//       "@type": "Thing",
//       "name": "Divisibility Rules"
//     },
//     "teaches": [
//       "Divisibility tests for 2, 5, and 10 using last digit",
//       "Digit sum rule for 3 and 9",
//       "Last two/three digits for 4 and 8",
//       "Alternating sum rule for 11",
//       "Combining rules for composite divisors",
//       "Why divisibility rules work via modular arithmetic",
//       "Worked examples applying multiple rules"
//     ],
//     "keywords": keyWords.join(", "),
//     "author": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "publisher": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "datePublished": "2024-01-15",
//     "dateModified": new Date().toISOString()
//   },

//   breadcrumb: {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       {
//         "@type": "ListItem",
//         "position": 1,
//         "name": "Home",
//         "item": "https://www.learnmathclass.com"
//       },
//       {
//         "@type": "ListItem",
//         "position": 2,
//         "name": "Arithmetic",
//         "item": "https://www.learnmathclass.com/arithmetic"
//       },
//       {
//         "@type": "ListItem",
//         "position": 3,
//         "name": "Divisibility",
//         "item": "https://www.learnmathclass.com/arithmetic/divisibility"
//       },
//       {
//         "@type": "ListItem",
//         "position": 4,
//         "name": "Divisibility Rules",
//         "item": "https://www.learnmathclass.com/arithmetic/divisibility/divisibility-rules"
//       }
//     ]
//   },

//   faq: {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": Object.keys(faqQuestions).map(key => ({
//       "@type": "Question",
//       "name": faqQuestions[key].question,
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": faqQuestions[key].answer
//       }
//     }))
//   }
// }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Divisibility Rules | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/arithmetic/divisibility/rules",
//          name: "name"
//       },
        
//        }
//     }

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Divisibility Rules",
    "description": "Master divisibility rules for 2, 3, 4, 5, 6, 8, 9, 10, and 11. Learn digit sum tests, last digit checks, alternating sums, and how to combine rules for composite divisors.",
    "url": "https://www.learnmathclass.com/arithmetic/divisibility/rules",
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
      "name": "Divisibility Rules"
    },
    "teaches": [
      "Divisibility tests for 2, 5, and 10 using last digit",
      "Digit sum rule for 3 and 9",
      "Last two/three digits for 4 and 8",
      "Alternating sum rule for 11",
      "Combining rules for composite divisors",
      "Why divisibility rules work via modular arithmetic",
      "Worked examples applying multiple rules"
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
        "name": "Divisibility Rules",
        "item": "https://www.learnmathclass.com/arithmetic/divisibility/rules"
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

// return {
//   props:{
//     sectionsContent,
//     introContent,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "Divisibility Rules: Tests for 2, 3, 4, 5, 6, 8, 9, 10, 11 | Learn Math Class",
//       description: "Master divisibility rules for 2, 3, 4, 5, 6, 8, 9, 10, and 11. Learn digit sum tests, last digit checks, alternating sums, and how to combine rules for composite divisors.",
//       keywords: keyWords.join(", "),
//       url: "/arithmetic/divisibility/divisibility-rules",
//       name: "Divisibility Rules"
//     },
//   }
// }

return {
  props:{
    sectionsContent,
    introContent,
    faqQuestions,
    schemas,
    seoData: {
      title: "Divisibility Rules: Tests for 2, 3, 4, 5, 6, 8, 9, 10, 11 | Learn Math Class",
      description: "Master divisibility rules for 2, 3, 4, 5, 6, 8, 9, 10, and 11. Learn digit sum tests, last digit checks, alternating sums, and how to combine rules for composite divisors.",
      keywords: keyWords.join(", "),
      url: "/arithmetic/divisibility/rules",
      name: "Divisibility Rules"
    },
  }
}
   }

// export default function DivisibilityRulesPage({seoData,sectionsContent , introContent}) {
export default function DivisibilityRulesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
          sectionsContent.obj11.after,
        ]
    },
    {
        id:'12',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
        ]
    },
    {
        id:'13',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
        ]
    },
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Divisibility Rules</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
     showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "siblings"
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
