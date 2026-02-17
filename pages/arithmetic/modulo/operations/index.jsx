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

  const keyWords=['','','','','']

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
  title: `Operating Within a Modulus`,
  content: `Standard arithmetic works on the full number line — results can grow without bound. Modular arithmetic restricts the playing field. Every number is reduced to one of $n$ possible remainders, and every operation stays within that set.

Add $9 + 7$ in ordinary arithmetic and the answer is $16$. Add $9 + 7$ modulo $10$ and the answer is $6$ — the sum wraps past $9$ and cycles back. The number $16$ and the number $6$ are different on the number line, but they are the same in the world of $\\bmod 10$.

The mental model is a clock with $n$ hours. On a $10$-hour clock, moving $7$ steps forward from $9$ lands on $6$, not $16$. On a $12$-hour clock, $10 + 5 = 3$, not $15$. The numbers wrap around whenever they reach the modulus.

This wrap-around is not an approximation or a shortcut — it is a self-contained arithmetic system with its own rules, and those rules are precise enough to produce exact answers to problems that would be impractical to solve on the full number line.`,
  before: ``,
  after: ``,
  link: '',
},


obj2: {
  title: `The Core Principle`,
  content: `The power of modular arithmetic comes from one fact: reducing numbers before, during, or after an operation all produce the same final remainder.

This means large numbers can be replaced by their remainders at any stage of a calculation without affecting the outcome. The formal statement: if $a \\equiv a' \\pmod{n}$ and $b \\equiv b' \\pmod{n}$, then:

$$a + b \\equiv a' + b' \\pmod{n}$$

$$a - b \\equiv a' - b' \\pmod{n}$$

$$a \\cdot b \\equiv a' \\cdot b' \\pmod{n}$$

In words: replacing any number with a congruent one does not change the remainder of the result. The product $89 \\times 76$ modulo $9$ does not require computing $6{,}764$ first — replacing $89$ with $8$ and $76$ with $4$ gives $32$, and $32 \\bmod 9 = 5$. The answer is the same either way.

This principle is what makes modular arithmetic practical. Without it, every computation would require handling the full-size numbers and reducing only at the end.`,
  before: ``,
  after: ``,
  link: '',
},


obj3: {
  title: `Addition`,
  content: `Modular addition reduces each operand, adds the results, and reduces once more if the sum reaches or exceeds $n$:

$$(a + b) \\bmod n = ((a \\bmod n) + (b \\bmod n)) \\bmod n$$

For $(47 + 38) \\bmod 10$: reduce $47$ to $7$ and $38$ to $8$. Add: $7 + 8 = 15$. Reduce: $15 \\bmod 10 = 5$.

For $(123 + 456) \\bmod 7$: reduce $123$ to $4$ and $456$ to $1$. Add: $4 + 1 = 5$. Since $5 < 7$, no further reduction is needed.

The final reduction is necessary because the sum of two remainders can reach as high as $2(n - 1)$. For $\\bmod 10$, the largest possible intermediate sum is $9 + 9 = 18$, which still needs one more reduction. But it can never reach $2n$, so a single reduction always suffices.`,
  before: ``,
  after: ``,
  link: '',
},


obj4: {
  title: `Subtraction`,
  content: `Modular subtraction follows the same reduce-operate-reduce pattern, with one wrinkle: the intermediate result may be negative.

$$(a - b) \\bmod n = ((a \\bmod n) - (b \\bmod n)) \\bmod n$$

For $(23 - 47) \\bmod 10$: reduce $23$ to $3$ and $47$ to $7$. Subtract: $3 - 7 = -4$. The result is negative, so add $n$: $-4 + 10 = 6$.

The alternative is to compute the full subtraction first: $23 - 47 = -24$, then $-24 \\bmod 10 = 6$ (using the floored convention). Either route gives $6$.

The negative intermediate result is not an error — it reflects a position on the number cycle that has wrapped past zero in the backward direction. Adding $n$ translates it to its equivalent position in $\\{0, 1, \\ldots, n-1\\}$.`,
  before: ``,
  after: ``,
  link: '',
},


obj5: {
  title: `Multiplication`,
  content: `Modular multiplication reduces each factor, multiplies the remainders, and reduces the product:

$$(a \\cdot b) \\bmod n = ((a \\bmod n) \\cdot (b \\bmod n)) \\bmod n$$

For $(23 \\cdot 17) \\bmod 5$: reduce $23$ to $3$ and $17$ to $2$. Multiply: $3 \\cdot 2 = 6$. Reduce: $6 \\bmod 5 = 1$.

For $(89 \\cdot 76) \\bmod 9$: reduce $89$ to $8$ and $76$ to $4$. Multiply: $8 \\cdot 4 = 32$. Reduce: $32 \\bmod 9 = 5$.

The savings are dramatic for large numbers. The product $89 \\times 76 = 6{,}764$ is never needed — the same answer emerges from the product $8 \\times 4 = 32$, a computation simple enough to do mentally.

The principle chains through multiple factors. For $(13 \\cdot 17 \\cdot 19) \\bmod 5$: reduce to $3 \\cdot 2 \\cdot 4 = 24$, then $24 \\bmod 5 = 4$. Reduce at every step to keep the numbers small.`,
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
  title: `Powers`,
  content: `Computing $a^k \\bmod n$ by first calculating $a^k$ and then reducing is impractical — the intermediate number grows exponentially. Instead, reduce after every multiplication.

For $7^4 \\bmod 10$, build the [power](!/algebra/powers) step by step:

$7^1 \\bmod 10 = 7$

$7^2 = 7 \\cdot 7 = 49 \\to 49 \\bmod 10 = 9$

$7^3 = 9 \\cdot 7 = 63 \\to 63 \\bmod 10 = 3$

$7^4 = 3 \\cdot 7 = 21 \\to 21 \\bmod 10 = 1$

The answer is $1$. The largest intermediate number was $63$ — far smaller than $7^4 = 2{,}401$.

For $3^{10} \\bmod 7$:

$3^1 = 3$, $3^2 = 9 \\to 2$, $3^3 = 6$, $3^4 = 18 \\to 4$, $3^5 = 12 \\to 5$, $3^6 = 15 \\to 1$.

At $3^6$, the remainder returns to $1$. From here: $3^{10} = 3^6 \\cdot 3^4 \\equiv 1 \\cdot 4 = 4 \\pmod{7}$.`,
  before: ``,
  after: ``,
  link: '',
},

obj7: {
  title: `Detecting Cycles in Powers`,
  content: `Because $\\bmod n$ confines remainders to a finite set, the sequence of remainders $a^1, a^2, a^3, \\ldots \\bmod n$ must eventually repeat. Once a remainder reappears, the entire pattern cycles from that point forward.

Powers of $2 \\bmod 7$ produce the sequence: $2, 4, 1, 2, 4, 1, 2, 4, 1, \\ldots$ The cycle $\\{2, 4, 1\\}$ has length $3$ and repeats indefinitely.

To compute $2^{100} \\bmod 7$, divide the exponent by the cycle length: $100 = 3 \\cdot 33 + 1$. The remainder is $1$, so $2^{100}$ lands at the same position as $2^1$ in the cycle. The answer is $2$.

Powers of $3 \\bmod 10$ cycle through $\\{3, 9, 7, 1\\}$ with length $4$. For $3^{75} \\bmod 10$: $75 = 4 \\cdot 18 + 3$, so $3^{75}$ matches $3^3 = 7$. The answer is $7$.

The cycle always begins once the remainder $1$ appears (assuming it does), because $a^k \\equiv 1$ implies $a^{k+j} \\equiv a^j$ for any $j$ — the sequence restarts.`,
  before: ``,
  after: ``,
  link: '',
},

obj8: {
  title: `Why Division Is Different`,
  content: `Addition, subtraction, and multiplication all pass through $\\bmod n$ cleanly. Division does not.

Consider $12 \\div 4 = 3$. Working modulo $5$: $12 \\bmod 5 = 2$ and $4 \\bmod 5 = 4$. Dividing the remainders gives $\\frac{2}{4} = 0.5$ — not an integer, and certainly not $3 \\bmod 5 = 3$.

The problem is that division undoes multiplication, but modular reduction discards information that division needs to recover. The product $4 \\cdot 3 = 12$ reduces to $2 \\bmod 5$, and knowing only $2$ and $4$ is not enough to reconstruct $3$ through ordinary division.

Modular division requires a different tool: the modular inverse. The inverse of $b$ modulo $n$ is a number $b^{-1}$ such that $b \\cdot b^{-1} \\equiv 1 \\pmod{n}$. Dividing by $b$ then means multiplying by $b^{-1}$. Not every number has an inverse for every modulus — the theory belongs to number theory and is not covered here.`,
  before: ``,
  after: ``,
  link: '',
},


obj9: {
  title: `Last Digit Problems`,
  content: `The last digit of any number is that number $\\bmod 10$. Finding the last digit of a large [power](!/algebra/powers) reduces to modular exponentiation with $n = 10$.

Find the last digit of $7^{100}$. The powers of $7 \\bmod 10$ cycle: $7, 9, 3, 1, 7, 9, 3, 1, \\ldots$ with period $4$.

Divide the exponent by the cycle length: $100 = 4 \\cdot 25 + 0$. A remainder of $0$ means the exponent aligns with the end of a full cycle — the position of $7^4$, whose last digit is $1$.

Find the last digit of $3^{75}$. The powers of $3 \\bmod 10$ cycle: $3, 9, 7, 1$ with period $4$. Divide: $75 = 4 \\cdot 18 + 3$. The remainder $3$ points to the third position in the cycle: $7$.

The method works for any base. Identify the cycle of last digits, find the exponent's position within that cycle, and read off the answer — no need to compute the full power.`,
  before: ``,
  after: ``,
  link: '',
},


obj10: {
  title: `Clock Problems`,
  content: `Time wraps around, making clock questions natural applications of modular arithmetic.

A $12$-hour clock operates $\\bmod 12$. If it is $10{:}00$ now, what time will it be in $50$ hours? Compute $(10 + 50) \\bmod 12 = 60 \\bmod 12 = 0$. On a $12$-hour clock, a remainder of $0$ corresponds to $12{:}00$.

A $24$-hour clock operates $\\bmod 24$. If it is $21{:}00$ (9 PM), what time will it be in $100$ hours? Compute $(21 + 100) \\bmod 24 = 121 \\bmod 24$. Divide: $121 = 24 \\cdot 5 + 1$. The answer is $1{:}00$ — one o'clock in the morning.

The same logic handles backward calculations. If it is $3{:}00$ now, what time was it $20$ hours ago? Compute $(3 - 20) \\bmod 12 = -17 \\bmod 12$. Adding $24$ (two full cycles): $-17 + 24 = 7$. It was $7{:}00$.`,
  before: ``,
  after: ``,
  link: '',
},
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


    obj11: {
  title: `Day of Week Problems`,
  content: `Days of the week cycle with period $7$, making them a $\\bmod 7$ system. Assign numbers: Sunday $= 0$, Monday $= 1$, Tuesday $= 2$, Wednesday $= 3$, Thursday $= 4$, Friday $= 5$, Saturday $= 6$.

Today is Wednesday (day $3$). What day is it in $100$ days? Compute $(3 + 100) \\bmod 7 = 103 \\bmod 7$. Divide: $103 = 7 \\cdot 14 + 5$. Day $5$ is Friday.

January $1$ is a Monday (day $1$). What day is March $15$? Count the days: $31$ (remaining in January) $+ 28$ (February) $+ 14$ (first $14$ days of March) $= 73$ days later. Compute $(1 + 73) \\bmod 7 = 74 \\bmod 7$. Divide: $74 = 7 \\cdot 10 + 4$. Day $4$ is Thursday.

Larger spans work identically. What day is it $1{,}000$ days from a Tuesday (day $2$)? Compute $(2 + 1000) \\bmod 7 = 1002 \\bmod 7$. Divide: $1002 = 7 \\cdot 143 + 1$. Day $1$ is Monday.`,
  before: ``,
  after: ``,
  link: '',
},

obj12: {
  title: `Why Divisibility Rules Work`,
  content: `The familiar [divisibility rules](!/arithmetic/divisibility/divisibility-rules) are modular arithmetic in disguise. Each rule exploits a congruence property of $10$ — the base of our number system.

The digit-sum rule for $9$ works because $10 \\equiv 1 \\pmod{9}$. Every [power](!/algebra/powers) of $10$ is congruent to $1$: $10^0 = 1$, $10^1 \\equiv 1$, $10^2 \\equiv 1$, and so on. A digit $d$ in the $k$th place contributes $d \\cdot 10^k \\equiv d \\cdot 1 = d \\pmod{9}$. The place value drops away, and only the digit itself matters. So the entire number is congruent to the sum of its digits modulo $9$.

The rule for $3$ follows identically: $10 \\equiv 1 \\pmod{3}$, so the digit sum also determines divisibility by $3$.

The alternating-sum rule for $11$ works because $10 \\equiv -1 \\pmod{11}$. Powers of $10$ alternate: $10^0 = 1$, $10^1 \\equiv -1$, $10^2 \\equiv 1$, $10^3 \\equiv -1$. Each digit's contribution alternates in sign depending on its position, producing the alternating sum.

Every shortcut in the [divisibility rules](!/arithmetic/divisibility/divisibility-rules) page traces back to a congruence property of $10$ modulo the divisor in question. Modular arithmetic is the engine; the rules are the user-facing controls.`,
  before: ``,
  after: ``,
  link: '',
},

obj13: {
  title: `Worked Examples`,
  content: `Compute $(137 \\cdot 249) \\bmod 7$. Reduce: $137 \\bmod 7 = 4$ and $249 \\bmod 7 = 4$. Multiply: $4 \\cdot 4 = 16$. Reduce: $16 \\bmod 7 = 2$.

Find the last two digits of $7^{50}$ (that is, $7^{50} \\bmod 100$). Compute powers step by step: $7^1 = 7$, $7^2 = 49$, $7^4 = 49^2 = 2401 \\to 1 \\bmod 100$. Since $7^4 \\equiv 1 \\pmod{100}$, and $50 = 4 \\cdot 12 + 2$, we get $7^{50} \\equiv 7^2 = 49 \\pmod{100}$. The last two digits are $49$.

A meeting happens every $8$ days. Another happens every $12$ days. Both occur today. When do they next coincide? The answer is the LCM of $8$ and $12$, which is $24$ — but modular thinking frames it as: find the smallest $d > 0$ such that $d \\equiv 0 \\pmod{8}$ and $d \\equiv 0 \\pmod{12}$.

Verify that $8{,}361$ is divisible by $9$. Digit sum: $8 + 3 + 6 + 1 = 18$, then $1 + 8 = 9$. Since $9 \\equiv 0 \\pmod 9$, the number is divisible by $9$. Confirm: $8361 = 9 \\cdot 929$.

Simplify $(2^{50} + 3^{50}) \\bmod 5$. Powers of $2 \\bmod 5$ cycle $\\{2, 4, 3, 1\\}$ with period $4$. Since $50 = 4 \\cdot 12 + 2$, $2^{50} \\equiv 4 \\pmod{5}$. Powers of $3 \\bmod 5$ cycle $\\{3, 4, 2, 1\\}$ with period $4$. Since $50 = 4 \\cdot 12 + 2$, $3^{50} \\equiv 4 \\pmod{5}$. Sum: $4 + 4 = 8 \\to 8 \\bmod 5 = 3$.`,
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
  title: "Arithmetic That Wraps Around",
  content: `[Computing a remainder](!/arithmetic/modulo/computing-remainders) answers a single question about a single number. Modular arithmetic goes further — it builds a complete system where addition, subtraction, multiplication, and exponentiation all operate within the confines of a fixed modulus. Numbers exceeding the range cycle back, and the arithmetic never leaves the set $\\{0, 1, 2, \\ldots, n-1\\}$.`
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Modulo Operations Page | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/modulo/operations",
         name: "name"
      },
        
       }
    }
   }

export default function OperationsPage({seoData,sectionsContent , introContent}) {

    
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Modulo Operations</h1>
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
