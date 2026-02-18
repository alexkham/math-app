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
  "factors and multiples",
  "factors of a number",
  "multiples of a number",
  "find all factors",
  "factor pairs",
  "proper divisors",
  "common factors",
  "common multiples",
  "counting factors formula",
  "sum of divisors",
  "perfect numbers",
  "abundant deficient numbers",
  "divisors of a number",
  "how to find factors",
  "factors vs multiples"
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

//     const sectionsContent={

//     // obj1:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',
  
  
//     // },
//     // obj2:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',
  
//     // },
  
//     // obj3:{
  
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',
  
//     // },
//     // obj4:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',
  
//     // },
//     // obj5:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',
  
//     // },
//     // obj6:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',
  
//     // },

//     obj1: {
//   title: `Factors (Divisors)`,
//   content: `A factor of $n$ is any integer $a$ such that $a \\mid n$ — meaning $n = a \\cdot k$ for some integer $k$. The terms "factor" and "divisor" are interchangeable.

// Every positive integer has at least two factors: $1$ and itself. The number $1$ divides everything, and every number divides itself. Most numbers have additional factors between these two extremes.

// The factors of $24$ are $1, 2, 3, 4, 6, 8, 12, 24$ — eight in total. The factors of $13$ are just $1$ and $13$ — making it [prime](!/arithmetic/divisibility/prime-numbers).

// Unlike multiples, which extend infinitely, the factor set of any positive integer is finite. No factor of $n$ can exceed $n$ itself (in absolute value), so the search space is bounded from the start.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

// obj2: {
//   title: `Finding All Factors`,
//   content: `A systematic search tests each integer from $1$ up to $\\sqrt{n}$. If $a$ divides $n$, both $a$ and $\\frac{n}{a}$ are factors — a pair produced from a single test. Stopping at $\\sqrt{n}$ is sufficient because if $a > \\sqrt{n}$, then $\\frac{n}{a} < \\sqrt{n}$, and that smaller partner would already have been found.

// For $n = 36$, test integers from $1$ to $6$ (since $\\sqrt{36} = 6$):

// $1 \\mid 36$: pair $(1, 36)$. $2 \\mid 36$: pair $(2, 18)$. $3 \\mid 36$: pair $(3, 12)$. $4 \\mid 36$: pair $(4, 9)$. $5 \\nmid 36$: skip. $6 \\mid 36$: pair $(6, 6)$.

// The complete factor set is $\\{1, 2, 3, 4, 6, 9, 12, 18, 36\\}$ — nine factors, all discovered by testing only six candidates.

// For large numbers, [divisibility rules](!/arithmetic/divisibility/rules) speed up the testing. Checking whether $2$, $3$, or $5$ divide $n$ takes a glance at the digits, not a full division.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

// obj3: {
//   title: `Factor Pairs`,
//   content: `Every factor $a$ of $n$ has a partner: $\\frac{n}{a}$. Together they satisfy $a \\cdot \\frac{n}{a} = n$, and listing factor pairs ensures no divisor is overlooked.

// For $n = 24$, the pairs are: $(1, 24)$, $(2, 12)$, $(3, 8)$, $(4, 6)$. Each pair multiplies to $24$, and together they account for all eight factors.

// For perfect squares, one pair collapses into a repeated value. The number $36$ has the pair $(6, 6)$ — the square root paired with itself. This is why perfect squares have an odd number of factors: every other factor appears in a pair of two distinct values, but the square root stands alone.

// Organizing factors into pairs is more reliable than listing them individually. Starting from $(1, n)$ and working inward, each successful division test produces two factors at once — halving the work and providing a built-in completeness check.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

// obj4: {
//   title: `Proper Divisors`,
//   content: `The proper divisors of $n$ are all of its factors except $n$ itself. They are the numbers that divide $n$ without being equal to it.

// The proper divisors of $12$ are $\\{1, 2, 3, 4, 6\\}$. The number $12$ itself is excluded.

// Proper divisors define three classical categories. A number is perfect if the sum of its proper divisors equals the number: $6 = 1 + 2 + 3$, so $6$ is perfect. A number is abundant if the sum exceeds it: the proper divisors of $12$ sum to $1 + 2 + 3 + 4 + 6 = 16 > 12$. A number is deficient if the sum falls short: the proper divisors of $10$ sum to $1 + 2 + 5 = 8 < 10$.

// Perfect numbers are rare. The first four are $6, 28, 496$, and $8{,}128$. Every known perfect number is even, and whether an odd perfect number exists remains one of the oldest unsolved problems in mathematics.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

// obj5: {
//   title: `Multiples`,
//   content: `A multiple of $a$ is any number $b$ such that $a \\mid b$ — meaning $b = a \\cdot k$ for some positive integer $k$. Where factors divide into a number, multiples are produced by multiplying out from it.

// The multiples of $7$ are $7, 14, 21, 28, 35, 42, \\ldots$ — an infinite sequence with no largest member. Every positive integer generates infinitely many multiples.

// Zero is a multiple of every number, since $0 = a \\cdot 0$ for any $a$. It sits at the start of every multiple sequence, though it is often omitted when listing "the multiples of $a$" in contexts where only positive values are relevant.

// The [modulo](!/arithmetic/modulo) operation identifies which multiple of $n$ is closest to a given number $a$ without exceeding it: $a = n \\cdot q + r$, where $n \\cdot q$ is that nearest multiple and $r$ is the gap between it and $a$.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

// obj6: {
//   title: `Factors vs Multiples`,
//   content: `The two concepts are inverses of each other, and mixing them up is one of the most common errors in elementary number theory.

// Factors go downward. The factors of $24$ are $1, 2, 3, 4, 6, 8, 12, 24$ — all less than or equal to $24$. There are finitely many of them.

// Multiples go upward. The multiples of $24$ are $24, 48, 72, 96, \\ldots$ — all greater than or equal to $24$ (excluding zero). There are infinitely many.

// The relationship is symmetric: $a$ is a factor of $b$ if and only if $b$ is a multiple of $a$. The number $3$ is a factor of $12$, and $12$ is a multiple of $3$. Same fact, opposite viewpoints.

// A useful mnemonic: factors fit into a number (they are smaller), multiples multiply out from a number (they are larger). The factor set is contained; the multiple set is unbounded.`,
//   before: ``,
//   after: ``,
//   link: '',
// },


//     // obj7:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',
  
//     // },
//     // obj8:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',
  
//     // },
//     // obj9:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',
  
//     // },
//     // obj10:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',
  
//     // },
//     // obj11:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',
  
//     // },

//     obj7: {
//   title: `Common Factors`,
//   content: `A common factor of two numbers $m$ and $n$ is a number that divides both. Finding common factors means intersecting the two factor sets.

// The factors of $12$ are $\\{1, 2, 3, 4, 6, 12\\}$. The factors of $18$ are $\\{1, 2, 3, 6, 9, 18\\}$. The common factors — numbers appearing in both sets — are $\\{1, 2, 3, 6\\}$.

// Every pair of positive integers shares at least one common factor: $1$ divides both, always. The question is whether they share anything larger.

// The greatest common factor is the largest member of the common factor set. For $12$ and $18$, it is $6$. This value — the [GCD](!/arithmetic/divisibility/gcd) — plays a central role in simplifying **fractions**, solving equations, and determining whether two numbers are coprime.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

// obj8: {
//   title: `Common Multiples`,
//   content: `A common multiple of two numbers $m$ and $n$ is a number divisible by both. Where common factors are drawn from finite sets, common multiples form an infinite sequence.

// The multiples of $4$ are $4, 8, 12, 16, 20, 24, 28, 32, 36, \\ldots$ The multiples of $6$ are $6, 12, 18, 24, 30, 36, \\ldots$ The common multiples are $12, 24, 36, 48, \\ldots$ — every value that appears in both lists.

// The smallest positive common multiple is the [LCM](!/arithmetic/divisibility/lcm). For $4$ and $6$, it is $12$. Every other common multiple is a multiple of the LCM: $24 = 2 \\cdot 12$, $36 = 3 \\cdot 12$, and so on.

// Common multiples arise naturally in problems involving synchronization. If one event repeats every $4$ days and another every $6$ days, they coincide every $12$ days — the LCM of their periods.`,
//   before: ``,
//   after: ``,
//   link: '',
// },


// obj9: {
//   title: `Counting Factors`,
//   content: `For small numbers, counting factors by listing them is practical. For larger numbers, [prime factorization](!/arithmetic/divisibility/prime-factorization) provides a formula.

// If $n = p_1^{a_1} \\cdot p_2^{a_2} \\cdots p_k^{a_k}$, the number of positive divisors of $n$ is:

// $$(a_1 + 1)(a_2 + 1) \\cdots (a_k + 1)$$

// Each prime factor $p_i$ can appear in a divisor $0, 1, 2, \\ldots, a_i$ times — that is $a_i + 1$ independent choices. The total number of divisors is the product of all these choices.

// The number $72 = 2^3 \\cdot 3^2$ has $(3+1)(2+1) = 12$ factors. Listing them confirms: $1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72$ — exactly twelve.

// The number $100 = 2^2 \\cdot 5^2$ has $(2+1)(2+1) = 9$ factors.

// The formula reveals structure that raw listing obscures. A number with many small prime factors has more divisors than a number of similar size with fewer, larger prime factors. The number $60 = 2^2 \\cdot 3 \\cdot 5$ has $12$ factors, while $64 = 2^6$ has only $7$.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

// obj10: {
//   title: `Sum of Factors`,
//   content: `The sum of all positive divisors of $n$ is denoted $\\sigma(n)$. Like the divisor count, it can be computed directly from the [prime factorization](!/arithmetic/divisibility/prime-factorization).

// For $n = 12$: the divisors are $1, 2, 3, 4, 6, 12$, and $\\sigma(12) = 1 + 2 + 3 + 4 + 6 + 12 = 28$.

// For $n = 6$: the divisors are $1, 2, 3, 6$, and $\\sigma(6) = 1 + 2 + 3 + 6 = 12$. The sum of all divisors is twice the number — but more revealing is that the sum of the proper divisors is $1 + 2 + 3 = 6$, equal to $n$ itself. This makes $6$ a perfect number.

// The relationship between $\\sigma(n)$ and $n$ classifies every positive integer. When $\\sigma(n) - n = n$, the number is perfect. When $\\sigma(n) - n > n$, it is abundant. When $\\sigma(n) - n < n$, it is deficient. Most numbers are deficient; abundance and perfection are the exceptions.`,
//   before: ``,
//   after: ``,
//   link: '',
// },


// obj11: {
//   title: `Worked Examples`,
//   content: `Find all factors of $48$. Test from $1$ to $\\sqrt{48} \\approx 6.9$: $1 \\mid 48$ (pair $1, 48$), $2 \\mid 48$ (pair $2, 24$), $3 \\mid 48$ (pair $3, 16$), $4 \\mid 48$ (pair $4, 12$), $5 \\nmid 48$, $6 \\mid 48$ (pair $6, 8$). Factors: $\\{1, 2, 3, 4, 6, 8, 12, 16, 24, 48\\}$ — ten in total.

// List the first $8$ multiples of $9$: $9, 18, 27, 36, 45, 54, 63, 72$.

// Find the common factors of $30$ and $45$. Factors of $30$: $\\{1, 2, 3, 5, 6, 10, 15, 30\\}$. Factors of $45$: $\\{1, 3, 5, 9, 15, 45\\}$. Common: $\\{1, 3, 5, 15\\}$. The [GCD](!/arithmetic/divisibility/gcd) is $15$.

// Count the factors of $180 = 2^2 \\cdot 3^2 \\cdot 5$. Formula: $(2+1)(2+1)(1+1) = 18$ factors.

// Is $28$ perfect? Proper divisors: $1, 2, 4, 7, 14$. Sum: $1 + 2 + 4 + 7 + 14 = 28$. Yes — $28$ is the second perfect number.

// Is $20$ abundant or deficient? Proper divisors: $1, 2, 4, 5, 10$. Sum: $22 > 20$. Abundant.`,
//   before: ``,
//   after: ``,
//   link: '',
// },


//     obj12:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj13:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },
//     obj14:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },


//     obj15:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     }
  
//   }


const sectionsContent = {

  obj1: {
    title: `Factors (Divisors)`,
    content: `A factor of $n$ is any integer $a$ such that $a \\mid n$ — meaning $n = a \\cdot k$ for some integer $k$. The terms "factor" and "divisor" are interchangeable.

Every positive integer has at least two factors: $1$ and itself. The number $1$ divides everything, and every number divides itself. Most numbers have additional factors between these two extremes.

The factors of $24$ are $1, 2, 3, 4, 6, 8, 12, 24$ — eight in total. The factors of $13$ are just $1$ and $13$ — making it [prime](!/arithmetic/divisibility/prime-numbers).

Unlike multiples, which extend infinitely, the factor set of any positive integer is finite. No factor of $n$ can exceed $n$ itself (in absolute value), so the search space is bounded from the start.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Finding All Factors`,
    content: `A systematic search tests each integer from $1$ up to $\\sqrt{n}$. If $a$ divides $n$, both $a$ and $\\frac{n}{a}$ are factors — a pair produced from a single test. Stopping at $\\sqrt{n}$ is sufficient because if $a > \\sqrt{n}$, then $\\frac{n}{a} < \\sqrt{n}$, and that smaller partner would already have been found.

For $n = 36$, test integers from $1$ to $6$ (since $\\sqrt{36} = 6$):

$1 \\mid 36$: pair $(1, 36)$. $2 \\mid 36$: pair $(2, 18)$. $3 \\mid 36$: pair $(3, 12)$. $4 \\mid 36$: pair $(4, 9)$. $5 \\nmid 36$: skip. $6 \\mid 36$: pair $(6, 6)$.

The complete factor set is $\\{1, 2, 3, 4, 6, 9, 12, 18, 36\\}$ — nine factors, all discovered by testing only six candidates.

For large numbers, [divisibility rules](!/arithmetic/divisibility/rules) speed up the testing. Checking whether $2$, $3$, or $5$ divide $n$ takes a glance at the digits, not a full division.`,
    before: ``,
    after: `
    
    @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use our Divisibility Calculator](!/arithmetic/calculators/divisibility-calculator) →@`,
    link: '',
  },

  obj3: {
    title: `Factor Pairs`,
    content: `Every factor $a$ of $n$ has a partner: $\\frac{n}{a}$. Together they satisfy $a \\cdot \\frac{n}{a} = n$, and listing factor pairs ensures no divisor is overlooked.

For $n = 24$, the pairs are: $(1, 24)$, $(2, 12)$, $(3, 8)$, $(4, 6)$. Each pair multiplies to $24$, and together they account for all eight factors.

For perfect squares, one pair collapses into a repeated value. The number $36$ has the pair $(6, 6)$ — the square root paired with itself. This is why perfect squares have an odd number of factors: every other factor appears in a pair of two distinct values, but the square root stands alone.

Organizing factors into pairs is more reliable than listing them individually. Starting from $(1, n)$ and working inward, each successful division test produces two factors at once — halving the work and providing a built-in completeness check.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Proper Divisors`,
    content: `The proper divisors of $n$ are all of its factors except $n$ itself. They are the numbers that divide $n$ without being equal to it.

The proper divisors of $12$ are $\\{1, 2, 3, 4, 6\\}$. The number $12$ itself is excluded.

Proper divisors define three classical categories. A number is perfect if the sum of its proper divisors equals the number: $6 = 1 + 2 + 3$, so $6$ is perfect. A number is abundant if the sum exceeds it: the proper divisors of $12$ sum to $1 + 2 + 3 + 4 + 6 = 16 > 12$. A number is deficient if the sum falls short: the proper divisors of $10$ sum to $1 + 2 + 5 = 8 < 10$.

Perfect numbers are rare. The first four are $6, 28, 496$, and $8{,}128$. Every known perfect number is even, and whether an odd perfect number exists remains one of the oldest unsolved problems in mathematics.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Multiples`,
    content: `A multiple of $a$ is any number $b$ such that $a \\mid b$ — meaning $b = a \\cdot k$ for some positive integer $k$. Where factors divide into a number, multiples are produced by multiplying out from it.

The multiples of $7$ are $7, 14, 21, 28, 35, 42, \\ldots$ — an infinite sequence with no largest member. Every positive integer generates infinitely many multiples.

Zero is a multiple of every number, since $0 = a \\cdot 0$ for any $a$. It sits at the start of every multiple sequence, though it is often omitted when listing "the multiples of $a$" in contexts where only positive values are relevant.

The [modulo](!/arithmetic/modulo) operation identifies which multiple of $n$ is closest to a given number $a$ without exceeding it: $a = n \\cdot q + r$, where $n \\cdot q$ is that nearest multiple and $r$ is the gap between it and $a$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Factors vs Multiples`,
    content: `The two concepts are inverses of each other, and mixing them up is one of the most common errors in elementary number theory.

Factors go downward. The factors of $24$ are $1, 2, 3, 4, 6, 8, 12, 24$ — all less than or equal to $24$. There are finitely many of them.

Multiples go upward. The multiples of $24$ are $24, 48, 72, 96, \\ldots$ — all greater than or equal to $24$ (excluding zero). There are infinitely many.

The relationship is symmetric: $a$ is a factor of $b$ if and only if $b$ is a multiple of $a$. The number $3$ is a factor of $12$, and $12$ is a multiple of $3$. Same fact, opposite viewpoints.

A useful mnemonic: factors fit into a number (they are smaller), multiples multiply out from a number (they are larger). The factor set is contained; the multiple set is unbounded.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Common Factors`,
    content: `A common factor of two numbers $m$ and $n$ is a number that divides both. Finding common factors means intersecting the two factor sets.

The factors of $12$ are $\\{1, 2, 3, 4, 6, 12\\}$. The factors of $18$ are $\\{1, 2, 3, 6, 9, 18\\}$. The common factors — numbers appearing in both sets — are $\\{1, 2, 3, 6\\}$.

Every pair of positive integers shares at least one common factor: $1$ divides both, always. The question is whether they share anything larger.

The greatest common factor is the largest member of the common factor set. For $12$ and $18$, it is $6$. This value — the [GCD](!/arithmetic/divisibility/gcd) — plays a central role in simplifying **fractions**, solving equations, and determining whether two numbers are coprime.`,
    before: ``,
    after: `
    
    @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Visit GCF Calculator Page](!/arithmetic/calculators/gcf-calculator) →@`,
    link: '',
  },

  obj8: {
    title: `Common Multiples`,
    content: `A common multiple of two numbers $m$ and $n$ is a number divisible by both. Where common factors are drawn from finite sets, common multiples form an infinite sequence.

The multiples of $4$ are $4, 8, 12, 16, 20, 24, 28, 32, 36, \\ldots$ The multiples of $6$ are $6, 12, 18, 24, 30, 36, \\ldots$ The common multiples are $12, 24, 36, 48, \\ldots$ — every value that appears in both lists.

The smallest positive common multiple is the [LCM](!/arithmetic/divisibility/lcm). For $4$ and $6$, it is $12$. Every other common multiple is a multiple of the LCM: $24 = 2 \\cdot 12$, $36 = 3 \\cdot 12$, and so on.

Common multiples arise naturally in problems involving synchronization. If one event repeats every $4$ days and another every $6$ days, they coincide every $12$ days — the LCM of their periods.`,
    before: ``,
    after: `
    
    @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use LCM Calculator to find Least Common Multiples](!/arithmetic/calculators/lcm-calculator) →@`,
    link: '',
  },

  obj9: {
    title: `Counting Factors`,
    content: `For small numbers, counting factors by listing them is practical. For larger numbers, [prime factorization](!/arithmetic/divisibility/prime-factorization) provides a formula.

If $n = p_1^{a_1} \\cdot p_2^{a_2} \\cdots p_k^{a_k}$, the number of positive divisors of $n$ is:

$$(a_1 + 1)(a_2 + 1) \\cdots (a_k + 1)$$

Each prime factor $p_i$ can appear in a divisor $0, 1, 2, \\ldots, a_i$ times — that is $a_i + 1$ independent choices. The total number of divisors is the product of all these choices.

The number $72 = 2^3 \\cdot 3^2$ has $(3+1)(2+1) = 12$ factors. Listing them confirms: $1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72$ — exactly twelve.

The number $100 = 2^2 \\cdot 5^2$ has $(2+1)(2+1) = 9$ factors.

The formula reveals structure that raw listing obscures. A number with many small prime factors has more divisors than a number of similar size with fewer, larger prime factors. The number $60 = 2^2 \\cdot 3 \\cdot 5$ has $12$ factors, while $64 = 2^6$ has only $7$.`,
    before: ``,
    after: `
    
    @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Check our Prime Factorization Calculator](!/arithmetic/calculators/prime-calculator) →@`,
    link: '',
  },

  obj10: {
    title: `Sum of Factors`,
    content: `The sum of all positive divisors of $n$ is denoted $\\sigma(n)$. Like the divisor count, it can be computed directly from the [prime factorization](!/arithmetic/divisibility/prime-factorization).

For $n = 12$: the divisors are $1, 2, 3, 4, 6, 12$, and $\\sigma(12) = 1 + 2 + 3 + 4 + 6 + 12 = 28$.

For $n = 6$: the divisors are $1, 2, 3, 6$, and $\\sigma(6) = 1 + 2 + 3 + 6 = 12$. The sum of all divisors is twice the number — but more revealing is that the sum of the proper divisors is $1 + 2 + 3 = 6$, equal to $n$ itself. This makes $6$ a perfect number.

The relationship between $\\sigma(n)$ and $n$ classifies every positive integer. When $\\sigma(n) - n = n$, the number is perfect. When $\\sigma(n) - n > n$, it is abundant. When $\\sigma(n) - n < n$, it is deficient. Most numbers are deficient; abundance and perfection are the exceptions.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `Worked Examples`,
    content: `Find all factors of $48$. Test from $1$ to $\\sqrt{48} \\approx 6.9$: $1 \\mid 48$ (pair $1, 48$), $2 \\mid 48$ (pair $2, 24$), $3 \\mid 48$ (pair $3, 16$), $4 \\mid 48$ (pair $4, 12$), $5 \\nmid 48$, $6 \\mid 48$ (pair $6, 8$). Factors: $\\{1, 2, 3, 4, 6, 8, 12, 16, 24, 48\\}$ — ten in total.

List the first $8$ multiples of $9$: $9, 18, 27, 36, 45, 54, 63, 72$.

Find the common factors of $30$ and $45$. Factors of $30$: $\\{1, 2, 3, 5, 6, 10, 15, 30\\}$. Factors of $45$: $\\{1, 3, 5, 9, 15, 45\\}$. Common: $\\{1, 3, 5, 15\\}$. The [GCD](!/arithmetic/divisibility/gcd) is $15$.

Count the factors of $180 = 2^2 \\cdot 3^2 \\cdot 5$. Formula: $(2+1)(2+1)(1+1) = 18$ factors.

Is $28$ perfect? Proper divisors: $1, 2, 4, 7, 14$. Sum: $1 + 2 + 4 + 7 + 14 = 28$. Yes — $28$ is the second perfect number.

Is $20$ abundant or deficient? Proper divisors: $1, 2, 4, 5, 10$. Sum: $22 > 20$. Abundant.`,
    before: ``,
    after: ``,
    link: '',
  },

}

  const introContent = {
  id: "intro",
  title: "The Two Sides of Divisibility",
  content: `Every [divisibility](!/arithmetic/divisibility) relationship involves two numbers playing opposite roles. When $3 \\mid 12$, the number $3$ is a factor — it divides in. The number $12$ is a multiple — it is divided into. Factors look downward, toward the smaller numbers that build a given integer. Multiples look upward, toward the infinite sequence of numbers that a given integer builds. Together they form the structural vocabulary of divisibility.`
}

const faqQuestions = {
  obj1: {
    question: "What is a factor of a number?",
    answer: "A factor (or divisor) of n is any integer a such that a divides n evenly — meaning n = a × k for some integer k. Every positive integer has at least two factors: 1 and itself. For example, the factors of 24 are 1, 2, 3, 4, 6, 8, 12, and 24."
  },
  obj2: {
    question: "What is a multiple of a number?",
    answer: "A multiple of a is any number b such that a divides b — meaning b = a × k for some positive integer k. The multiples of 7 are 7, 14, 21, 28, 35... — an infinite sequence. Zero is technically a multiple of every number."
  },
  obj3: {
    question: "What is the difference between factors and multiples?",
    answer: "Factors go downward (smaller than or equal to the number) and are finite. Multiples go upward (larger than or equal) and are infinite. If a is a factor of b, then b is a multiple of a. For 12: factors are 1,2,3,4,6,12; multiples are 12,24,36,48..."
  },
  obj4: {
    question: "How do you find all factors of a number?",
    answer: "Test integers from 1 to √n. If a divides n, both a and n/a are factors — a pair from one test. For 36: test 1-6, finding pairs (1,36), (2,18), (3,12), (4,9), (6,6). This gives all nine factors efficiently."
  },
  obj5: {
    question: "What are factor pairs?",
    answer: "Every factor a of n has a partner n/a, and together they multiply to n. For 24: pairs are (1,24), (2,12), (3,8), (4,6). For perfect squares, the square root pairs with itself, giving an odd number of total factors."
  },
  obj6: {
    question: "What are proper divisors?",
    answer: "Proper divisors of n are all factors except n itself. For 12: proper divisors are {1, 2, 3, 4, 6}. The sum of proper divisors determines whether a number is perfect (sum = n), abundant (sum > n), or deficient (sum < n)."
  },
  obj7: {
    question: "What is a perfect number?",
    answer: "A perfect number equals the sum of its proper divisors. The number 6 is perfect: 1 + 2 + 3 = 6. The number 28 is perfect: 1 + 2 + 4 + 7 + 14 = 28. Perfect numbers are rare — the first four are 6, 28, 496, and 8128."
  },
  obj8: {
    question: "What are common factors?",
    answer: "Common factors of two numbers m and n are numbers that divide both. For 12 and 18: factors of 12 are {1,2,3,4,6,12}, factors of 18 are {1,2,3,6,9,18}, common factors are {1,2,3,6}. The largest common factor is the GCD."
  },
  obj9: {
    question: "What are common multiples?",
    answer: "Common multiples of m and n are numbers divisible by both. For 4 and 6: common multiples are 12, 24, 36, 48... The smallest positive common multiple is the LCM. Every common multiple is a multiple of the LCM."
  },
  obj10: {
    question: "How do you count the number of factors?",
    answer: "Use prime factorization. If n = p₁^a₁ × p₂^a₂ × ... × pₖ^aₖ, the number of factors is (a₁+1)(a₂+1)...(aₖ+1). For 72 = 2³ × 3²: (3+1)(2+1) = 12 factors. Each exponent plus one represents choices for that prime."
  },
  obj11: {
    question: "Why do perfect squares have an odd number of factors?",
    answer: "Factors come in pairs (a, n/a) that multiply to n. For perfect squares, the square root pairs with itself (√n, √n), counting as one factor instead of two. All other pairs contribute two factors, so the total is odd."
  },
  obj12: {
    question: "What is the sum of divisors function σ(n)?",
    answer: "σ(n) is the sum of all positive divisors of n. For 12: σ(12) = 1+2+3+4+6+12 = 28. This function determines perfect/abundant/deficient classification: perfect when σ(n) = 2n, abundant when σ(n) > 2n, deficient when σ(n) < 2n."
  },
  obj13: {
    question: "Is 20 abundant or deficient?",
    answer: "Find proper divisors of 20: {1, 2, 4, 5, 10}. Sum: 1+2+4+5+10 = 22. Since 22 > 20, the number 20 is abundant — the sum of its proper divisors exceeds the number itself."
  }
}

// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Factors and Multiples",
//     "description": "Master factors and multiples: find all factors, factor pairs, proper divisors, common factors/multiples, counting formulas. Learn about perfect, abundant, and deficient numbers.",
//     "url": "https://www.learnmathclass.com/arithmetic/divisibility/factors-and-multiples",
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
//       "name": "Factors and Multiples"
//     },
//     "teaches": [
//       "Definition and finding all factors",
//       "Factor pairs and the square root method",
//       "Proper divisors and perfect numbers",
//       "Multiples and their infinite nature",
//       "Common factors and common multiples",
//       "Counting factors using prime factorization",
//       "Sum of divisors and number classification"
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
//         "name": "Factors and Multiples",
//         "item": "https://www.learnmathclass.com/arithmetic/divisibility/factors-and-multiples"
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
//         title: "Factors and Multiples | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/arithmetic/divisibility/factors",
//          name: "name"
//       },
        
//        }
//     }

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Factors and Multiples",
    "description": "Master factors and multiples: find all factors, factor pairs, proper divisors, common factors/multiples, counting formulas. Learn about perfect, abundant, and deficient numbers.",
    "url": "https://www.learnmathclass.com/arithmetic/divisibility/factors",
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
      "name": "Factors and Multiples"
    },
    "teaches": [
      "Definition and finding all factors",
      "Factor pairs and the square root method",
      "Proper divisors and perfect numbers",
      "Multiples and their infinite nature",
      "Common factors and common multiples",
      "Counting factors using prime factorization",
      "Sum of divisors and number classification"
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
        "name": "Factors and Multiples",
        "item": "https://www.learnmathclass.com/arithmetic/divisibility/factors"
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
//       title: "Factors and Multiples: Divisors, Pairs & Counting | Learn Math Class",
//       description: "Master factors and multiples: find all factors, factor pairs, proper divisors, common factors/multiples, counting formulas. Learn about perfect, abundant, and deficient numbers.",
//       keywords: keyWords.join(", "),
//       url: "/arithmetic/divisibility/factors-and-multiples",
//       name: "Factors and Multiples"
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
      title: "Factors and Multiples: Divisors, Pairs & Counting | Learn Math Class",
      description: "Master factors and multiples: find all factors, factor pairs, proper divisors, common factors/multiples, counting formulas. Learn about perfect, abundant, and deficient numbers.",
      keywords: keyWords.join(", "),
      url: "/arithmetic/divisibility/factors",
      name: "Factors and Multiples"
    },
  }
}
   }

// export default function FactorsPage({seoData,sectionsContent , introContent}) {

export default function FactorsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
          sectionsContent.obj2.after,
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
          sectionsContent.obj7.after,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
          sectionsContent.obj8.after,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
          sectionsContent.obj9.after,
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
{/* 
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Factors and Multiples</h1>
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
