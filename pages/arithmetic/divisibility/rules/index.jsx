
// tables-optimized: v4 | 2026-05-25 | 3 tables (obj11 aggregation, obj13 aggregation, obj14 summary capstone)
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css';
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import { tableHeaders } from '@/app/styles/theme'
import { renderDigitRule } from '../../../../app/utils/illustrations/arithmetic/divisibility/digitRule'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import divisibilityTableDiagrams from '@/app/components/divisibility/divisibilityTableDiagrams'
import divisibilityTreeDiagrams from '@/app/components/divisibility/divisibilityTreeDiagrams'


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

const linkStyle = 'color: inherit; text-decoration: underline;'

// ─── TABLES ───────────────────────────────────────────────────────────────

// obj11 — aggregation: composite-divisor tests via coprime factorization
const obj11Table = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation} text-align: center;">n</th>
      <th style="${tableHeaders.aggregation}">Coprime factorization</th>
      <th style="${tableHeaders.aggregation}">Tests to apply</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">6</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2 × 3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">last digit even &nbsp;<b>and</b>&nbsp; digit sum divisible by 3</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">12</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">4 × 3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">last two digits divisible by 4 &nbsp;<b>and</b>&nbsp; digit sum divisible by 3</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">15</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">5 × 3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">last digit 0 or 5 &nbsp;<b>and</b>&nbsp; digit sum divisible by 3</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">18</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2 × 9</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">last digit even &nbsp;<b>and</b>&nbsp; digit sum divisible by 9</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">24</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">8 × 3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">last three digits divisible by 8 &nbsp;<b>and</b>&nbsp; digit sum divisible by 3</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">36</td>
      <td style="padding: 12px 15px; color: #34495e;">4 × 9</td>
      <td style="padding: 12px 15px; color: #34495e;">last two digits divisible by 4 &nbsp;<b>and</b>&nbsp; digit sum divisible by 9</td>
    </tr>
  </tbody>
</table>
`

// obj13 — aggregation: modular mechanism families (groups 9 rules into 5 families)
const obj13Table = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Key modular fact</th>
      <th style="${tableHeaders.aggregation}">Resulting mechanism</th>
      <th style="${tableHeaders.aggregation}">Rules covered</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">10 ≡ 0 (mod 2), (mod 5), (mod 10)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all digits except the last vanish — only the ones digit matters</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rules for 2, 5, 10</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">10² ≡ 0 (mod 4)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all digits beyond the tens place vanish — only the last two matter</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rule for 4</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">10³ ≡ 0 (mod 8)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all digits beyond the hundreds place vanish — only the last three matter</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rule for 8</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">10 ≡ 1 (mod 3), (mod 9)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">every power of 10 is ≡ 1 — every digit contributes its face value → digit sum</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rules for 3, 9</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">10 ≡ −1 (mod 11)</td>
      <td style="padding: 12px 15px; color: #34495e;">powers of 10 alternate +1, −1, +1, … — digits contribute with alternating signs</td>
      <td style="padding: 12px 15px; color: #34495e;">rule for 11</td>
    </tr>
  </tbody>
</table>
`

// obj14 — summary capstone: master 9-rule reference card
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary} text-align: center;">Divisor</th>
      <th style="${tableHeaders.summary}">Test</th>
      <th style="${tableHeaders.summary}">Worked example</th>
      <th style="${tableHeaders.summary}">Modular reason</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">last digit is 0, 2, 4, 6, or 8</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1746 → ends in 6 (even) ✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">10 ≡ 0 (mod 2)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">digit sum is divisible by 3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">729 → 7+2+9=18 → 18 ÷ 3 = 6 ✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">10 ≡ 1 (mod 3)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">last two digits form a number divisible by 4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3516 → 16, and 16 ÷ 4 = 4 ✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">10² ≡ 0 (mod 4)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">5</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">last digit is 0 or 5</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">4835 → ends in 5 ✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">10 ≡ 0 (mod 5)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">6</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">passes the test for 2 AND the test for 3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1254 → 4 (even) ✓ &nbsp;and&nbsp; 1+2+5+4=12, 12 ÷ 3 = 4 ✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">6 = 2 · 3 with gcd(2, 3) = 1</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">8</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">last three digits form a number divisible by 8</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">53104 → 104, and 104 ÷ 8 = 13 ✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">10³ ≡ 0 (mod 8)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">9</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">digit sum is divisible by 9</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">8127 → 8+1+2+7=18, and 18 ÷ 9 = 2 ✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">10 ≡ 1 (mod 9)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">10</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">last digit is 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">5230 → ends in 0 ✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">10 ≡ 0 (mod 10)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">11</td>
      <td style="padding: 12px 15px; color: #34495e;">alternating sum of digits (right → left) is divisible by 11</td>
      <td style="padding: 12px 15px; color: #34495e;">9273 → 3 − 7 + 2 − 9 = −11, and 11 ∣ (−11) ✓</td>
      <td style="padding: 12px 15px; color: #34495e;">10 ≡ −1 (mod 11)</td>
    </tr>
  </tbody>
</table>
`



// ─── ILLUSTRATIONS (digit-rule) ──────────────────────────────────────────

const drObj2 = renderDigitRule({
  kind: 'last-k', number: 1746, divisor: 2,
  info: { lines: [
    { kind: 'formula', text: 'divisible by 2?', role: 'primary' },
    { kind: 'separator' },
    { kind: 'note', text: 'check the last digit' },
    { kind: 'note', text: '6 is even' },
    { kind: 'separator' },
    { kind: 'formula', text: '2 | 1746', role: 'result' },
  ]},
})

const drObj3 = renderDigitRule({
  kind: 'digit-sum', number: 729, divisor: 3,
  info: { lines: [
    { kind: 'formula', text: 'divisible by 3?', role: 'primary' },
    { kind: 'separator' },
    { kind: 'note', text: 'sum the digits' },
    { kind: 'note', text: '7 + 2 + 9 = 18' },
    { kind: 'note', text: '1 + 8 = 9' },
    { kind: 'separator' },
    { kind: 'formula', text: '3 | 729', role: 'result' },
  ]},
})

const drObj4 = renderDigitRule({
  kind: 'last-k', number: 3516, divisor: 4,
  info: { lines: [
    { kind: 'formula', text: 'divisible by 4?', role: 'primary' },
    { kind: 'separator' },
    { kind: 'note', text: 'check the last 2 digits' },
    { kind: 'note', text: '16 ÷ 4 = 4' },
    { kind: 'separator' },
    { kind: 'formula', text: '4 | 3516', role: 'result' },
  ]},
})

const drObj5 = renderDigitRule({
  kind: 'last-k', number: 4835, divisor: 5,
  info: { lines: [
    { kind: 'formula', text: 'divisible by 5?', role: 'primary' },
    { kind: 'separator' },
    { kind: 'note', text: 'check the last digit' },
    { kind: 'note', text: 'ends in 5' },
    { kind: 'separator' },
    { kind: 'formula', text: '5 | 4835', role: 'result' },
  ]},
})

const drObj7 = renderDigitRule({
  kind: 'last-k', number: 53104, divisor: 8,
  info: { lines: [
    { kind: 'formula', text: 'divisible by 8?', role: 'primary' },
    { kind: 'separator' },
    { kind: 'note', text: 'check the last 3 digits' },
    { kind: 'note', text: '104 ÷ 8 = 13' },
    { kind: 'separator' },
    { kind: 'formula', text: '8 | 53104', role: 'result' },
  ]},
})

const drObj8 = renderDigitRule({
  kind: 'digit-sum', number: 8127, divisor: 9,
  info: { lines: [
    { kind: 'formula', text: 'divisible by 9?', role: 'primary' },
    { kind: 'separator' },
    { kind: 'note', text: 'sum the digits' },
    { kind: 'note', text: '8 + 1 + 2 + 7 = 18' },
    { kind: 'note', text: '18 ÷ 9 = 2' },
    { kind: 'separator' },
    { kind: 'formula', text: '9 | 8127', role: 'result' },
  ]},
})

const drObj9 = renderDigitRule({
  kind: 'last-k', number: 5230, divisor: 10,
  info: { lines: [
    { kind: 'formula', text: 'divisible by 10?', role: 'primary' },
    { kind: 'separator' },
    { kind: 'note', text: 'check the last digit' },
    { kind: 'note', text: 'ends in 0' },
    { kind: 'separator' },
    { kind: 'formula', text: '10 | 5230', role: 'result' },
  ]},
})

const drObj10 = renderDigitRule({
  kind: 'alt-sum', number: 9273, divisor: 11,
  info: { lines: [
    { kind: 'formula', text: 'divisible by 11?', role: 'primary' },
    { kind: 'separator' },
    { kind: 'note', text: 'alternating sum, right → left' },
    { kind: 'note', text: '3 − 7 + 2 − 9 = −11' },
    { kind: 'note', text: '11 | (−11)' },
    { kind: 'separator' },
    { kind: 'formula', text: '11 | 9273', role: 'result' },
  ]},
})



    const sectionsContent={

 
obj0: {
  title: `Key Terms`,
  content: `
- [Divisor (Factor)](!/arithmetic/definitions#divisor) — what each rule tests for
- [Multiple](!/arithmetic/definitions#multiple) — a number passing a rule is a multiple of that divisor
- [Coprime](!/arithmetic/definitions#coprime) — required when combining rules for composite divisors`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Arithmetic Definitions](!/arithmetic/definitions) →@`,
  link: '',
},

    obj1: {
  title: `What Are Divisibility Rules?`,
  content: `A [divisibility](!/arithmetic/divisibility) rule is a shortcut that determines whether a number is divisible by a given divisor without carrying out the division. Instead of computing $7{,}836 \\div 3$ and checking for a remainder, the rule says: add the digits $7 + 8 + 3 + 6 = 24$, and check whether that sum is divisible by $3$. It is, so $3 \\mid 7836$.

Every rule exploits the structure of base-$10$ representation. A number like $5{,}432$ is shorthand for $5 \\cdot 10^3 + 4 \\cdot 10^2 + 3 \\cdot 10 + 2$. The behavior of the [powers](!/algebra/powers) of $10$ under [modulo](!/arithmetic/modulo) determines which digit patterns reveal divisibility — and different divisors respond to different patterns.

The rules are shortcuts, not definitions. The definition of divisibility is $a \\mid b$ when $b = a \\cdot k$ for some integer — equivalently, when $b \\bmod a = 0$. The rules provide fast paths to that same conclusion.`,
  before: ``,
  after: ``,
  link: '',
},

// obj2: {
//   title: `Divisibility by 2`,
//   content: `A number is divisible by $2$ if its last digit is even: $0, 2, 4, 6$, or $8$.

// Since $10$ is divisible by $2$, every power of $10$ is also divisible by $2$. The contribution of each digit beyond the ones place — $d \\cdot 10^k$ for $k \\geq 1$ — is automatically a multiple of $2$. Only the final digit $d_0$ remains outside that guarantee, so $d_0$ alone determines divisibility.

// The number $1{,}746$ ends in $6$ (even), so $2 \\mid 1746$.

// The number $3{,}821$ ends in $1$ (odd), so $2 \\nmid 3821$.

// The even numbers — $\\ldots, -4, -2, 0, 2, 4, 6, \\ldots$ — are precisely the integers divisible by $2$. The odd numbers are those that leave a remainder of $1$.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

obj2: {
  title: `Divisibility by 2`,
  content: `@academic[rule_plain:A number is divisible by $2$ if its last digit is even: $0, 2, 4, 6$, or $8$.]@

Since $10$ is divisible by $2$, every power of $10$ is also divisible by $2$. The contribution of each digit beyond the ones place — $d \\cdot 10^k$ for $k \\geq 1$ — is automatically a multiple of $2$. Only the final digit $d_0$ remains outside that guarantee, so $d_0$ alone determines divisibility.

The number $1{,}746$ ends in $6$ (even), so $2 \\mid 1746$, as the figure below shows.`,
  afterFigure: `The number $3{,}821$ ends in $1$ (odd), so $2 \\nmid 3821$.

The even numbers — $\\ldots, -4, -2, 0, 2, 4, 6, \\ldots$ — are precisely the integers divisible by $2$. The odd numbers are those that leave a remainder of $1$.`,
  before: ``,
  after: ``,
  link: '',
},



// obj3: {
//   title: `Divisibility by 3`,
//   content: `A number is divisible by $3$ if the sum of its digits is divisible by $3$.

// The reason traces to a single congruence: $10 \\equiv 1 \\pmod{3}$. Every power of $10$ is also congruent to $1$ modulo $3$: $10^2 \\equiv 1$, $10^3 \\equiv 1$, and so on. A digit $d$ in the $k$th place contributes $d \\cdot 10^k \\equiv d \\cdot 1 = d \\pmod{3}$. The place value drops away entirely, and only the digit itself matters. The number is congruent to the sum of its digits modulo $3$.

// The number $729$: $7 + 2 + 9 = 18$, and $1 + 8 = 9$. Since $3 \\mid 9$, the number is divisible by $3$.

// The number $1{,}234$: $1 + 2 + 3 + 4 = 10$, and $1 + 0 = 1$. Since $3 \\nmid 1$, the number is not divisible by $3$.

// The process can be repeated: if the digit sum is large, sum its digits again. The chain always terminates at a single digit, and that digit determines divisibility.`,
//   before: ``,
//   after: ``,
//   link: '',
// },


// obj4: {
//   title: `Divisibility by 4`,
//   content: `A number is divisible by $4$ if its last two digits form a number divisible by $4$.

// The number $100$ is divisible by $4$, and so is every higher power of $10$. Every digit beyond the tens place contributes a multiple of $100$ — automatically a multiple of $4$. Only the last two digits affect the remainder when dividing by $4$.

// The number $3{,}516$: the last two digits form $16$, and $16 \\div 4 = 4$ exactly. So $4 \\mid 3516$.

// The number $7{,}230$: the last two digits form $30$, and $30 \\div 4 = 7.5$. So $4 \\nmid 7230$.

// For quick mental checks, it helps to know which two-digit endings are divisible by $4$: $00, 04, 08, 12, 16, 20, 24, 28, 32, 36, 40, 44, \\ldots$ — every fourth number from $00$ onward.`,
//   before: ``,
//   after: ``,
//   link: '',
// },


// obj5: {
//   title: `Divisibility by 5`,
//   content: `A number is divisible by $5$ if its last digit is $0$ or $5$.

// The logic is the same as for $2$: since $10$ is divisible by $5$, every digit beyond the ones place contributes a multiple of $5$. Only the last digit matters, and the only single digits divisible by $5$ are $0$ and $5$.

// The number $4{,}835$ ends in $5$, so $5 \\mid 4835$.

// The number $7{,}832$ ends in $2$, so $5 \\nmid 7832$.

// This is the second simplest rule after divisibility by $10$ — a single-digit check with only two possible passing values.`,
//   before: ``,
//   after: ``,
//   link: '',
// },


obj3: {
  title: `Divisibility by 3`,
  content: `@academic[rule_plain:A number is divisible by $3$ if the sum of its digits is divisible by $3$.]@

The reason traces to a single congruence: $10 \\equiv 1 \\pmod{3}$. Every power of $10$ is also congruent to $1$ modulo $3$: $10^2 \\equiv 1$, $10^3 \\equiv 1$, and so on. A digit $d$ in the $k$th place contributes $d \\cdot 10^k \\equiv d \\cdot 1 = d \\pmod{3}$. The place value drops away entirely, and only the digit itself matters. The number is congruent to the sum of its digits modulo $3$.

The number $729$ illustrates the rule: $7 + 2 + 9 = 18$, and $1 + 8 = 9$. Since $3 \\mid 9$, the number is divisible by $3$ — as shown below.`,
  afterFigure: `@academic[pitfall,aside:true,width:35%:Testing 3 by the last digit
Judging by the last digit, $2{,}143$ passes because it ends in $3$, yet its digit sum $10$ fails and $2143 = 3 \\cdot 714 + 1$. And $1{,}257$ ends in $7$, but $1 + 2 + 5 + 7 = 15$, so $3 \\mid 1257$.
[Read more](!#pitfalls)]@

The number $1{,}234$: $1 + 2 + 3 + 4 = 10$, and $1 + 0 = 1$. Since $3 \\nmid 1$, the number is not divisible by $3$.

The process can be repeated: if the digit sum is large, sum its digits again. The chain always terminates at a single digit, and that digit determines divisibility.`,
  before: ``,
  after: ``,
  link: '',
},

obj4: {
  title: `Divisibility by 4`,
  content: `@academic[rule_plain:A number is divisible by $4$ if its last two digits form a number divisible by $4$.]@

The number $100$ is divisible by $4$, and so is every higher power of $10$. Every digit beyond the tens place contributes a multiple of $100$ — automatically a multiple of $4$. Only the last two digits affect the remainder when dividing by $4$.

The number $3{,}516$ illustrates the rule: the last two digits form $16$, and $16 \\div 4 = 4$ exactly, so $4 \\mid 3516$ — as the figure below shows.`,
  afterFigure: `@academic[pitfall,aside:true,width:35%:Testing 4 by the last digit
Judging by the last digit alone, $2{,}134$ looks divisible by $4$ because it ends in $4$, yet $34 = 4 \\cdot 8 + 2$, so $4 \\nmid 2134$. And $3{,}516$ ends in $6$, yet $16 = 4 \\cdot 4$ gives $4 \\mid 3516$.
[Read more](!#pitfalls)]@

The number $7{,}230$: the last two digits form $30$, and $30 \\div 4 = 7.5$. So $4 \\nmid 7230$.

For quick mental checks, it helps to know which two-digit endings are divisible by $4$: $00, 04, 08, 12, 16, 20, 24, 28, 32, 36, 40, 44, \\ldots$ — every fourth number from $00$ onward.`,
  before: ``,
  after: ``,
  link: '',
},

obj5: {
  title: `Divisibility by 5`,
  content: `@academic[rule_plain:A number is divisible by $5$ if its last digit is $0$ or $5$.]@

The logic is the same as for $2$: since $10$ is divisible by $5$, every digit beyond the ones place contributes a multiple of $5$. Only the last digit matters, and the only single digits divisible by $5$ are $0$ and $5$.

The number $4{,}835$ ends in $5$, so $5 \\mid 4835$ — as shown below.`,
  afterFigure: `The number $7{,}832$ ends in $2$, so $5 \\nmid 7832$.

This is the second simplest rule after divisibility by $10$ — a single-digit check with only two possible passing values.`,
  before: ``,
  after: ``,
  link: '',
},


obj6: {
  title: `Divisibility by 6`,
  content: `@academic[rule_plain:A number is divisible by $6$ if it is divisible by both $2$ and $3$.]@

Since $6 = 2 \\times 3$ and $\\gcd(2, 3) = 1$, divisibility by $6$ requires passing both individual tests: the last digit must be even, and the digit sum must be divisible by $3$.

The number $1{,}254$: last digit $4$ (even — passes the $2$ test), digit sum $1 + 2 + 5 + 4 = 12$ (divisible by $3$ — passes the $3$ test). Both conditions hold, so $6 \\mid 1254$.

@academic[pitfall,aside:true,width:35%:Stopping after one passed test
Calling $1{,}234$ divisible by $6$ because it is even skips the test for $3$: its digit sum $10$ fails, and $1234 = 6 \\cdot 205 + 4$. Both tests have to pass, as they do for $1{,}254$.
[Read more](!#pitfalls)]@

The number $2{,}135$: last digit $5$ (odd — fails the $2$ test). No need to check the digit sum. The number is not divisible by $6$.

This approach generalizes. For any composite divisor $n = a \\times b$ where $a$ and $b$ are [coprime](!/arithmetic/divisibility/gcd), divisibility by $n$ is equivalent to divisibility by both $a$ and $b$.`,
  before: ``,
  after: ``,
  link: '',
},


//     obj7: {
//   title: `Divisibility by 8`,
//   content: `A number is divisible by $8$ if its last three digits form a number divisible by $8$.

// The number $1{,}000$ is divisible by $8$ ($1000 = 8 \\times 125$), and so is every higher power of $10$. Digits beyond the hundreds place contribute multiples of $1{,}000$ — all divisible by $8$. Only the last three digits affect the outcome.

// The number $53{,}104$: the last three digits form $104$, and $104 \\div 8 = 13$ exactly. So $8 \\mid 53104$.

// The number $12{,}345$: the last three digits form $345$, and $345 \\div 8 = 43.125$. So $8 \\nmid 12345$.

// This rule is harder to apply mentally than the rules for $2$ or $5$, since it requires dividing a three-digit number by $8$. For quick estimates, checking whether the three-digit number is close to a known multiple of $8$ ($8, 16, 24, \\ldots, 992, 1000$) can help.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

// obj8: {
//   title: `Divisibility by 9`,
//   content: `A number is divisible by $9$ if the sum of its digits is divisible by $9$.

// The reasoning is identical to the rule for $3$: $10 \\equiv 1 \\pmod{9}$, so every power of $10$ is congruent to $1$ modulo $9$, and each digit contributes only its face value. The number is congruent to its digit sum modulo $9$.

// The number $8{,}127$: $8 + 1 + 2 + 7 = 18$, and $18 \\div 9 = 2$ exactly. So $9 \\mid 8127$.

// The number $4{,}825$: $4 + 8 + 2 + 5 = 19$, and $19 \\div 9 = 2$ remainder $1$. So $9 \\nmid 4825$.

// Since $9 = 3^2$, every number divisible by $9$ is automatically divisible by $3$ — but not the other way around. The number $729$ is divisible by both; the number $12$ is divisible by $3$ but not by $9$.`,
//   before: ``,
//   after: ``,
//   link: '',
// },

// obj9: {
//   title: `Divisibility by 10`,
//   content: `A number is divisible by $10$ if its last digit is $0$.

// This is the simplest rule of all. The base of the number system is $10$, so a number has no remainder when divided by $10$ exactly when the ones place is empty.

// The number $5{,}230$ ends in $0$, so $10 \\mid 5230$.

// The number $5{,}235$ ends in $5$, so $10 \\nmid 5235$.

// Since $10 = 2 \\times 5$, divisibility by $10$ requires divisibility by both $2$ and $5$. The only digit that is simultaneously even and a multiple of $5$ is $0$ — which is why the rule reduces to a single condition.`,
//   before: ``,
//   after: ``,
//   link: '',
// },


// obj10: {
//   title: `Divisibility by 11`,
//   content: `A number is divisible by $11$ if the alternating sum of its digits (from right to left: add, subtract, add, subtract, $\\ldots$) is divisible by $11$.

// The congruence behind the rule is $10 \\equiv -1 \\pmod{11}$. Successive [powers](!/algebra/powers) of $10$ alternate: $10^0 = 1$, $10^1 \\equiv -1$, $10^2 \\equiv 1$, $10^3 \\equiv -1$. Each digit's contribution to the remainder alternates in sign depending on its position.

// The number $9{,}273$: alternating sum from the right gives $3 - 7 + 2 - 9 = -11$. Since $11 \\mid (-11)$, the number is divisible by $11$.

// The number $5{,}831$: alternating sum gives $1 - 3 + 8 - 5 = 1$. Since $11 \\nmid 1$, the number is not divisible by $11$.

// If the alternating sum is negative, that is fine — a negative multiple of $11$ still indicates divisibility. The result $-11$, $-22$, or $0$ all confirm the number is divisible by $11$.`,
//   before: ``,
//   after: ``,
//   link: '',
// },



obj7: {
  title: `Divisibility by 8`,
  content: `@academic[rule_plain:A number is divisible by $8$ if its last three digits form a number divisible by $8$.]@

The number $1{,}000$ is divisible by $8$ ($1000 = 8 \\times 125$), and so is every higher power of $10$. Digits beyond the hundreds place contribute multiples of $1{,}000$ — all divisible by $8$. Only the last three digits affect the outcome.

The number $53{,}104$ illustrates the rule: the last three digits form $104$, and $104 \\div 8 = 13$ exactly, so $8 \\mid 53104$ — as the figure below shows.`,
  afterFigure: `The number $12{,}345$: the last three digits form $345$, and $345 \\div 8 = 43.125$. So $8 \\nmid 12345$.

This rule is harder to apply mentally than the rules for $2$ or $5$, since it requires dividing a three-digit number by $8$. For quick estimates, checking whether the three-digit number is close to a known multiple of $8$ ($8, 16, 24, \\ldots, 992, 1000$) can help.`,
  before: ``,
  after: ``,
  link: '',
},

obj8: {
  title: `Divisibility by 9`,
  content: `@academic[rule_plain:A number is divisible by $9$ if the sum of its digits is divisible by $9$.]@

The reasoning is identical to the rule for $3$: $10 \\equiv 1 \\pmod{9}$, so every power of $10$ is congruent to $1$ modulo $9$, and each digit contributes only its face value. The number is congruent to its digit sum modulo $9$.

The number $8{,}127$ illustrates the rule: $8 + 1 + 2 + 7 = 18$, and $18 \\div 9 = 2$ exactly, so $9 \\mid 8127$ — as shown below.`,
  afterFigure: `The number $4{,}825$: $4 + 8 + 2 + 5 = 19$, and $19 \\div 9 = 2$ remainder $1$. So $9 \\nmid 4825$.

@academic[fact,aside:true,width:35%:Swapped digits leave a multiple of 9
Writing $8{,}172$ for $8{,}127$ swaps two digits, and the error $45 = 9 \\cdot 5$ is a multiple of $9$, as it is for every such swap: both numbers have the same digit sum. Bookkeepers whose totals differ by a multiple of $9$ look first for two transposed digits.]@

Since $9 = 3^2$, every number divisible by $9$ is automatically divisible by $3$ — but not the other way around. The number $729$ is divisible by both; the number $12$ is divisible by $3$ but not by $9$.

Because only the digit sum matters, the test for $9$ cannot see the order of the digits. The numbers $8{,}127$, $8{,}172$ and $7{,}281$ all have the digit sum $18$, so all three are multiples of $9$, even though they are three different numbers. The test answers the same way for every rearrangement of the same digits.`,
  before: ``,
  after: ``,
  link: '',
},

obj9: {
  title: `Divisibility by 10`,
  content: `@academic[rule_plain:A number is divisible by $10$ if its last digit is $0$.]@

This is the simplest rule of all. The base of the number system is $10$, so a number has no remainder when divided by $10$ exactly when the ones place is empty.

The number $5{,}230$ ends in $0$, so $10 \\mid 5230$ — as the figure below shows.`,
  afterFigure: `The number $5{,}235$ ends in $5$, so $10 \\nmid 5235$.

Since $10 = 2 \\times 5$, divisibility by $10$ requires divisibility by both $2$ and $5$. The only digit that is simultaneously even and a multiple of $5$ is $0$ — which is why the rule reduces to a single condition.`,
  before: ``,
  after: ``,
  link: '',
},

obj10: {
  title: `Divisibility by 11`,
  content: `@academic[rule_plain:A number is divisible by $11$ if the alternating sum of its digits (from right to left: add, subtract, add, subtract, $\\ldots$) is divisible by $11$.]@

The congruence behind the rule is $10 \\equiv -1 \\pmod{11}$. Successive [powers](!/algebra/powers) of $10$ alternate: $10^0 = 1$, $10^1 \\equiv -1$, $10^2 \\equiv 1$, $10^3 \\equiv -1$. Each digit's contribution to the remainder alternates in sign depending on its position.

The number $9{,}273$ illustrates the rule: alternating sum from the right gives $3 - 7 + 2 - 9 = -11$. Since $11 \\mid (-11)$, the number is divisible by $11$ — as the figure below shows.`,
  afterFigure: `The number $5{,}831$: alternating sum gives $1 - 3 + 8 - 5 = 1$. Since $11 \\nmid 1$, the number is not divisible by $11$.

If the alternating sum is negative, that is fine — a negative multiple of $11$ still indicates divisibility. The result $-11$, $-22$, or $0$ all confirm the number is divisible by $11$.`,
  before: ``,
  after: ``,
  link: '',
},


obj11: {
  title: `Combining Rules`,
  content: `@academic[rule_plain:Divisibility by a composite number can be tested by checking its coprime factors separately.]@

@academic[example:Example
Is $2{,}340$ divisible by $12$? Since $12 = 4 \\times 3$ and $\\gcd(4, 3) = 1$, check each factor independently. Last two digits: $40$, and $40 \\div 4 = 10$ exactly — divisible by $4$. Digit sum: $2 + 3 + 4 + 0 = 9$, divisible by $3$. Both conditions hold, so $12 \\mid 2340$.]@

@academic[example:Example
Is $8{,}910$ divisible by $15$? Since $15 = 5 \\times 3$ and $\\gcd(5, 3) = 1$, check both. Last digit: $0$ — divisible by $5$. Digit sum: $8 + 9 + 1 + 0 = 18$ — divisible by $3$. Both pass, so $15 \\mid 8910$.]@

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
  content: `Every divisibility rule is a consequence of how the base $10$ behaves under [modular arithmetic](!/arithmetic/modulo).

@academic[fact,aside:true,width:35%:Seven has a test, but no digit pattern
On division by $7$, the powers of $10$ leave remainders $1, 3, 2, 6, 4, 5$ and then repeat, too irregular for a digit rule. Yet $7$ divides $10a + b$ exactly when it divides $a - 2b$, since $10(a - 2b) = (10a + b) - 21b$: for $2{,}401$, $240 - 2 = 238$ and $23 - 16 = 7$.]@

A number written in decimal is $d_k \\cdot 10^k + d_{k-1} \\cdot 10^{k-1} + \\cdots + d_1 \\cdot 10 + d_0$. Reducing this expression [modulo](!/arithmetic/modulo) a divisor $n$ replaces each $10^j$ with its remainder modulo $n$, and the pattern of those remainders determines the rule. The symbol $\\equiv$ below reads "is congruent to" — the notation is introduced in the [congruence section](!/arithmetic/modulo#5) of the modulo page.

For $n = 2$ or $n = 5$: $10 \\equiv 0$, so all terms except $d_0$ vanish. Only the last digit matters.

For $n = 4$: $100 \\equiv 0 \\pmod{4}$, so all terms beyond $d_1 \\cdot 10 + d_0$ vanish. The last two digits determine divisibility.

For $n = 8$: $1000 \\equiv 0 \\pmod{8}$, extending the same logic to the last three digits.

For $n = 3$ or $n = 9$: $10 \\equiv 1$, so $10^k \\equiv 1$ for all $k$. Every digit contributes its face value and nothing more. The number reduces to its digit sum.

For $n = 11$: $10 \\equiv -1$, so $10^k$ alternates between $1$ and $-1$. Digits contribute with alternating signs, producing the alternating-sum rule.

Each rule is a human-readable compression of a modular identity. The [modular arithmetic](!/arithmetic/modulo) page develops these identities in full.`,
  before: ``,
  after: ``,
  link: '',
},
    obj14:{
      title:`Summary: Master Rules Reference`,
      content:`Every rule introduced on this page has the same shape — read off a small slice of the number&apos;s digits, do a short calculation, check divisibility of the result. The table below collects all nine rules side by side, paired with a worked example and the modular identity that makes the rule work. It&apos;s designed as the page you&apos;d bookmark and return to: one row per divisor, all the information for applying and understanding each rule in a single line.`,
      before:``,
      after:``,
      link:'',
  
    },


    obj15:{
  
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj16:{
      title:`Common Pitfalls`,
      content:`Four mistakes account for many of the wrong answers when the rules are applied. The first three are marked where they happen in the sections above, and the fourth is the one the Combining Rules section warns about; here each is worked through in full, with the wrong and the right working side by side.

**Testing 3 by the last digit**

The last-digit tests for $2$, $5$ and $10$ are carried over to $3$, and a number is judged by whether its last digit is a multiple of $3$.

Wrong working: $2{,}143$ ends in $3$, so $3 \\mid 2143$; $1{,}257$ ends in $7$, so $3 \\nmid 1257$.

Right working: the digit sum decides. $2 + 1 + 4 + 3 = 10$ is not a multiple of $3$, so $3 \\nmid 2143$, and indeed $2143 = 3 \\cdot 714 + 1$. $1 + 2 + 5 + 7 = 15$ is a multiple of $3$, so $3 \\mid 1257$, and indeed $1257 = 3 \\cdot 419$.

Why it happens: the last-digit rules are learned first and are the simplest, so the same kind of rule is expected for every divisor. They work only for divisors of $10$, and $3$ does not divide $10$: since $10 \\equiv 1 \\pmod{3}$, every digit counts, not just the last one.

How to check: divide once. $2143 \\div 3$ is $714$ with remainder $1$, while $1257 \\div 3 = 419$ exactly.

**Testing 4 by the last digit**

The rule for $4$ is shortened to look like the rule for $2$: a number is judged by whether its last digit alone is a multiple of $4$.

Wrong working: $2{,}134$ ends in $4$, so $4 \\mid 2134$; $3{,}516$ ends in $6$, so $4 \\nmid 3516$.

Right working: the last two digits decide. $34 = 4 \\cdot 8 + 2$, so $4 \\nmid 2134$. $16 = 4 \\cdot 4$, so $4 \\mid 3516$, and indeed $3516 = 4 \\cdot 879$.

Why it happens: $4$ is even, so a one-digit test like the one for $2$ seems natural. But $10$ is not a multiple of $4$, so the tens digit still changes the remainder; only $100$ is a multiple of $4$. The endings $14$ and $34$ end in $4$ and are not multiples of $4$, while $16$ and $36$ end in $6$ and are.

How to check: with an even tens digit the last digit must be $0$, $4$ or $8$; with an odd tens digit it must be $2$ or $6$. In $2{,}134$ the tens digit $3$ is odd and the last digit is $4$, so $4 \\nmid 2134$.

**Stopping after one passed test**

Divisibility by $6$ needs two tests, and the number is declared divisible after passing only one of them, usually the test for $2$.

Wrong working: $1{,}234$ ends in $4$, so it is even, and therefore $6 \\mid 1234$.

Right working: the test for $3$ has to pass as well. $1 + 2 + 3 + 4 = 10$ is not a multiple of $3$, so $3 \\nmid 1234$ and $6 \\nmid 1234$. Indeed $1234 = 6 \\cdot 205 + 4$.

Why it happens: a failed test settles the question at once, as for $2{,}135$, where the odd last digit is enough. That shortcut is carried over to a passed test, which settles nothing on its own.

How to check: every multiple of $6$ is also a multiple of $3$. Since $1234 = 3 \\cdot 411 + 1$, it cannot be a multiple of $6$.

**Combining factors that are not coprime**

A composite divisor is split into two factors that share a divisor, as when $12$ is tested through $2$ and $6$, and passing both tests is taken as proof.

Wrong working: $18$ is even and $18 = 6 \\cdot 3$, so it passes the tests for $2$ and for $6$, and therefore $12 \\mid 18$.

Right working: split $12$ into coprime factors, $12 = 4 \\cdot 3$ with $\\gcd(4, 3) = 1$. The last two digits $18 = 4 \\cdot 4 + 2$ fail the test for $4$, so $12 \\nmid 18$. Indeed $18 = 12 \\cdot 1 + 6$.

Why it happens: $2 \\cdot 6 = 12$, so the split looks natural. But every multiple of $6$ is already even, so the test for $2$ adds nothing, and the two tests together only show divisibility by $\\text{lcm}(2, 6) = 6$.

How to check: compute the GCD of the two factors before using them. $\\gcd(2, 6) = 2$ rules the split out; the table in the Combining Rules section lists coprime splits such as $12 = 4 \\cdot 3$ and $24 = 8 \\cdot 3$.`,
      before:``,
      after:``,
      link:'',
    }
  
  }


  const introContent = {
  id: "intro",
  title: "Testing Divisibility at a Glance",
  content: `Checking whether one number divides another by performing the full division works — but it is slow, especially for large numbers. For the most common divisors, patterns in the decimal digits provide an answer instantly. Each pattern is a consequence of how [modular arithmetic](!/arithmetic/modulo) interacts with the base-$10$ place value system, compressed into a rule simple enough to apply mentally.`
}

// FAQ pass: cut the definition and all nine test-by-N questions — each has
// its own h2 ("What Are Divisibility Rules?", "Divisibility by N") whose
// first line states the rule. Kept the rule for 12 (no h2 — it lives in
// Combining Rules) and the two why-it-works mechanisms, which sit under the
// generic "Why These Rules Work" heading. No rule for 7 exists on the page,
// so no question was invented for it (case C).
const faqQuestions = {
  obj1: {
    question: "How do you test divisibility by 12?",
    answer: "Test divisibility by 4 AND by 3 (coprime factors of 12). Check that the last two digits are divisible by 4 AND the digit sum is divisible by 3. For 1,236: 36 ÷ 4 = 9 and 1+2+3+6 = 12, so 12 | 1236. Do NOT test 2 and 6 — they are not coprime (gcd(2,6)=2≠1). Check any candidate with the [divisibility calculator](!/arithmetic/calculators/divisibility-calculator).",
    sectionId: "11"
  },
  obj2: {
    question: "Why does the digit sum rule work for 3 and 9?",
    answer: "Because 10 ≡ 1 (mod 3) and 10 ≡ 1 (mod 9). Every power of 10 is congruent to 1, so a digit d in position k contributes d×10^k ≡ d×1 = d. The number reduces to the sum of its digits under these moduli.",
    sectionId: "13"
  },
  obj3: {
    question: "Why does the alternating sum rule work for 11?",
    answer: "Because 10 ≡ -1 (mod 11): powers of 10 alternate, 10⁰ = 1, 10¹ ≡ -1, 10² ≡ 1, 10³ ≡ -1. Each digit's contribution therefore alternates in sign with its position, producing the alternating-sum pattern. For 9,273: from the right, 3 − 7 + 2 − 9 = −11, and 11 divides −11, so 11 | 9273.",
    sectionId: "13"
  }
}


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
      "Worked examples applying multiple rules",
      "Master nine-rule reference card"
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
  }
}



  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const demoUnits = {
    byTwo: demoUnitFrame({
      svg: divisibilityTableDiagrams.d2,
      caption: 'The &#247;2 column: every other number',
      text: 'Down the highlighted column every second number is marked, and their last digits run 0, 2, 4, 6, 8 and repeat: the rule for 2 is the pattern of that column read off the ones place. Nothing about the higher digits matters. Scan the column for any range of numbers on the',
      href: '/arithmetic/visual-tools/divisibility-table',
      linkText: 'interactive divisibility table',
    }),
    byThree: demoUnitFrame({
      svg: divisibilityTreeDiagrams.threePass,
      caption: '126: digit sum 9, so divisible by 3 and by 9',
      text: 'The tree tests 126 rule by rule: even, so &#247;2 passes; 26 is not a multiple of 4, so &#247;4 fails; the digit sum 1 + 2 + 6 = 9 is divisible by 3 and by 9, so both of those tests pass. The digit-sum test is the rule of this section carried out as one branch. Send any number down the tree on the',
      href: '/arithmetic/visual-tools/divisibility-tree',
      linkText: 'divisibility decision tree',
    }),
    byFour: demoUnitFrame({
      svg: divisibilityTableDiagrams.d4,
      caption: 'The &#247;4 column: every fourth number',
      text: 'The highlighted column marks every fourth number, and the marks depend only on the last two digits: 12, 16, 112 and 116 are all marked because 12 and 16 are multiples of 4, while the hundreds digit changes nothing. That is the rule for 4 as a column pattern. Check the last-two-digits rule against the column on the',
      href: '/arithmetic/visual-tools/divisibility-table',
      linkText: 'interactive divisibility table',
    }),
  };

return {
  props:{
    demoUnits,
    sectionsContent,
    introContent,
    obj11Table,
    obj13Table,
    summaryTable,
    faqQuestions,
    schemas,
    drObj2,
drObj3,
drObj4,
drObj5,
drObj7,
drObj8,
drObj9,
drObj10,
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

export default function DivisibilityRulesPage({seoData, sectionsContent, introContent, obj11Table,
   obj13Table, summaryTable, faqQuestions, 
   schemas,
  drObj2,
drObj3,
drObj4,
drObj5,
drObj7,
drObj8,
drObj9,
drObj10, demoUnits}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const genericSections=[
     {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
        ]
    },
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    // {
    //     id:'2',
    //     title:sectionsContent.obj2.title,
    //     link:sectionsContent.obj2.link,
    //     content:[
    //       sectionsContent.obj2.content,
    //     ]
    // },
    // {
    //     id:'3',
    //     title:sectionsContent.obj3.title,
    //     link:sectionsContent.obj3.link,
    //     content:[
    //       sectionsContent.obj3.content,
    //     ]
    // },


    {
    id:'2',
    title:sectionsContent.obj2.title,
    link:sectionsContent.obj2.link,
    content:[
      sectionsContent.obj2.content,
      <div key={'obj2-svg'} style={{ maxWidth: '700px', margin: '20px auto' }}
           dangerouslySetInnerHTML={{ __html: drObj2 }} />,
      sectionsContent.obj2.afterFigure,
              <div key={'unit-byTwo'} dangerouslySetInnerHTML={{ __html: demoUnits.byTwo }} />,
          `The rule for 5 and the rule for 10 read the same digit in the same way.`,
        ]
},
{
    id:'3',
    title:sectionsContent.obj3.title,
    link:sectionsContent.obj3.link,
    content:[
      sectionsContent.obj3.content,
      <div key={'obj3-svg'} style={{ maxWidth: '700px', margin: '20px auto' }}
           dangerouslySetInnerHTML={{ __html: drObj3 }} />,
      sectionsContent.obj3.afterFigure,
              <div key={'unit-byThree'} dangerouslySetInnerHTML={{ __html: demoUnits.byThree }} />,
          `The rule for 9 is the same test with a stricter target, as the tree&#8217;s next question shows.`,
        ]
},
    // {
    //     id:'4',
    //     title:sectionsContent.obj4.title,
    //     link:sectionsContent.obj4.link,
    //     content:[
    //       sectionsContent.obj4.content,
    //     ]
    // },


    {
    id:'4',
    title:sectionsContent.obj4.title,
    link:sectionsContent.obj4.link,
    content:[
      sectionsContent.obj4.content,
      <div key={'obj4-svg'} style={{ maxWidth: '700px', margin: '20px auto' }}
           dangerouslySetInnerHTML={{ __html: drObj4 }} />,
      sectionsContent.obj4.afterFigure,
              <div key={'unit-byFour'} dangerouslySetInnerHTML={{ __html: demoUnits.byFour }} />,
          `The rule for 8, three digits instead of two, follows the identical logic one power of ten higher.`,
        ]
},
    // {
    //     id:'5',
    //     title:sectionsContent.obj5.title,
    //     link:sectionsContent.obj5.link,
    //     content:[
    //       sectionsContent.obj5.content,
    //     ]
    // },

    {
    id:'5',
    title:sectionsContent.obj5.title,
    link:sectionsContent.obj5.link,
    content:[
      sectionsContent.obj5.content,
      <div key={'obj5-svg'} style={{ maxWidth: '700px', margin: '20px auto' }}
           dangerouslySetInnerHTML={{ __html: drObj5 }} />,
      sectionsContent.obj5.afterFigure,
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


    {
    id:'7',
    title:sectionsContent.obj7.title,
    link:sectionsContent.obj7.link,
    content:[
      sectionsContent.obj7.content,
      <div key={'obj7-svg'} style={{ maxWidth: '700px', margin: '20px auto' }}
           dangerouslySetInnerHTML={{ __html: drObj7 }} />,
      sectionsContent.obj7.afterFigure,
      `@academic[punchline:Each doubling of the divisor, from $2$ to $4$ to $8$, adds one more final digit to check.]@`,
    ]
},


{
    id:'8',
    title:sectionsContent.obj8.title,
    link:sectionsContent.obj8.link,
    content:[
      sectionsContent.obj8.content,
      <div key={'obj8-svg'} style={{ maxWidth: '700px', margin: '20px auto' }}
           dangerouslySetInnerHTML={{ __html: drObj8 }} />,
      sectionsContent.obj8.afterFigure,
    ]
},


{
    id:'9',
    title:sectionsContent.obj9.title,
    link:sectionsContent.obj9.link,
    content:[
      sectionsContent.obj9.content,
      <div key={'obj9-svg'} style={{ maxWidth: '700px', margin: '20px auto' }}
           dangerouslySetInnerHTML={{ __html: drObj9 }} />,
      sectionsContent.obj9.afterFigure,
    ]
},


{
    id:'10',
    title:sectionsContent.obj10.title,
    link:sectionsContent.obj10.link,
    content:[
      sectionsContent.obj10.content,
      <div key={'obj10-svg'} style={{ maxWidth: '700px', margin: '20px auto' }}
           dangerouslySetInnerHTML={{ __html: drObj10 }} />,
      sectionsContent.obj10.afterFigure,
    ]
},
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
          <div key={'obj11-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj11Table }} />,
          sectionsContent.obj11.after,
          `@academic[punchline:Test a composite divisor through coprime factors only: factors that share a divisor can both pass while the number fails.]@`,
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
          <div key={'obj13-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj13Table }} />,
        ]
    },
    {
        id:'14',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.obj16.title,
        link:sectionsContent.obj16.link,
        content:[
          sectionsContent.obj16.content,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Divisibility Rules FAQ`,
        link:``,
        content:[
          <div key={'faq-wrap'} style={{width:'80%',margin:'auto'}}>
            <FAQSection
              faqQuestions={faqQuestions}
              theme={'leftBorder'}
              width={'100%'}
              openFirst={false}
            />
          </div>,
        ]
    },

]

  return (
   <>

<Head>
  <title>{seoData.title}</title>
  <meta name="description" content={seoData.description} />
  <meta name="keywords" content={seoData.keywords} />
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Divisibility Rules</h1>
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
    <KeyTermsCard
           id="0"
           title={sectionsContent.obj0.title}
           content={sectionsContent.obj0.content}
           after={sectionsContent.obj0.after}
           variant="light"
         />
   <br/>
   <Sections sections={genericSections.slice(1)}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}