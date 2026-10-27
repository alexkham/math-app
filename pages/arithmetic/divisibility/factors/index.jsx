

// tables-optimized: v4 | 2026-05-25 | 3 tables (obj6 comparison, obj10 aggregation, obj12 summary capstone)
// factor-set integrated: v1 | 7 scenes (obj1, obj2, obj3, obj4, obj7, obj9, obj10); obj5 inline-JSX violation fixed
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css';
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import { tableHeaders } from '@/app/styles/theme'
import { renderMultiplesLine } from '../../../../app/utils/illustrations/arithmetic/divisibility/multiplesLine'
import { renderFactorSet } from '../../../../app/utils/illustrations/arithmetic/divisibility/factorSet'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import divisibilityTableDiagrams from '@/app/components/divisibility/divisibilityTableDiagrams'



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

const linkStyle = 'color: inherit; text-decoration: underline;'

// ─── TABLES ───────────────────────────────────────────────────────────────

// obj6 — comparison: factors vs multiples
const obj6Table = `
<table class="styled-table" style="border-collapse: collapse; width: 58%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Aspect</th>
      <th style="${tableHeaders.comparison}">Factors of n</th>
      <th style="${tableHeaders.comparison}">Multiples of n</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Definition</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">integers a such that a ∣ n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">integers b such that n ∣ b</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Direction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">downward — each is ≤ n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">upward — each positive multiple is ≥ n</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Cardinality</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">finite</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">infinite</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Example for n = 12</td>
      <td style="padding: 12px 15px; color: #34495e;">{1, 2, 3, 4, 6, 12}</td>
      <td style="padding: 12px 15px; color: #34495e;">12, 24, 36, 48, 60, …</td>
    </tr>
  </tbody>
</table>
`

// obj10 — aggregation: number classification by sum of divisors
const obj10Table = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Classification</th>
      <th style="${tableHeaders.aggregation}">Sum-of-proper-divisors test</th>
      <th style="${tableHeaders.aggregation}">In σ-notation</th>
      <th style="${tableHeaders.aggregation}">Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Perfect</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sum of proper divisors equals n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">σ(n) = 2n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">6, 28, 496, 8128 &nbsp;(extremely rare)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Abundant</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sum of proper divisors exceeds n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">σ(n) &gt; 2n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">12 (proper-sum = 16), 18, 20, 24, …</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Deficient</td>
      <td style="padding: 12px 15px; color: #34495e;">sum of proper divisors falls short of n</td>
      <td style="padding: 12px 15px; color: #34495e;">σ(n) &lt; 2n</td>
      <td style="padding: 12px 15px; color: #34495e;">every prime; 10 (proper-sum = 8); most numbers</td>
    </tr>
  </tbody>
</table>
`

// obj12 — summary capstone: page-tools synthesis
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Question about n</th>
      <th style="${tableHeaders.summary}">Tool or formula</th>
      <th style="${tableHeaders.summary}">Worked example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Find every factor</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">pair-search from 1 to √n: each a with a ∣ n gives the pair (a, n / a)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">n = 36: test 1–6 → pairs (1,36), (2,18), (3,12), (4,9), (6,6) → 9 factors</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Count the factors</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factor n = p<sub>1</sub><sup>a<sub>1</sub></sup> · … · p<sub>k</sub><sup>a<sub>k</sub></sup>; the number of divisors is (a<sub>1</sub>+1)(a<sub>2</sub>+1)…(a<sub>k</sub>+1)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">72 = 2³ · 3² → (3+1)(2+1) = 12 factors</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Classify n (perfect / abundant / deficient)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sum the proper divisors and compare to n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">6: 1 + 2 + 3 = 6 → perfect; 12: 1+2+3+4+6 = 16 &gt; 12 → abundant</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Find common factors with m</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">intersect the factor sets; the largest is <a href="/arithmetic/divisibility/gcd" style="${linkStyle}">gcd(m, n)</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">12 ∩ 18 in factors → {1, 2, 3, 6}; gcd = 6</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Find common multiples with m</td>
      <td style="padding: 12px 15px; color: #34495e;">the smallest is <a href="/arithmetic/divisibility/lcm" style="${linkStyle}">lcm(m, n)</a>; every common multiple is a multiple of it</td>
      <td style="padding: 12px 15px; color: #34495e;">4 and 6: lcm = 12; common multiples are 12, 24, 36, 48, …</td>
    </tr>
  </tbody>
</table>
`


// ─── ILLUSTRATIONS (multiples-line) ──────────────────────────────────────

const obj5SvgMultiples = renderMultiplesLine({
  kind: 'single-track',
  range: [0, 56],
  step: 7,
  mode: 'list',
  infinite: true,
  info: { lines: [
    { kind: 'formula', text: 'multiples of 7', role: 'primary' },
    { kind: 'separator' },
    { kind: 'note', text: '7, 14, 21, 28, 35,' },
    { kind: 'note', text: '42, 49, 56, …' },
    { kind: 'note', text: 'Infinitely many.', italic: true },
  ]},
})


const obj6SvgSplit = renderMultiplesLine({
  kind: 'split-view',
  center: 24,
  factorsOf: 24,
  multiplesOf: 24,
  multiplesCount: 4,
  info: { lines: [
    { kind: 'formula', text: 'factors vs multiples', role: 'result' },
    { kind: 'separator' },
    { kind: 'list', label: 'factors of 24:', items: '1, 2, 3, 4, 6, 8, 12, 24', role: 'primary' },
    { kind: 'note', text: '8 values, finite', italic: true },
    { kind: 'list', label: 'multiples of 24:', items: '24, 48, 72, 96, …', role: 'secondary' },
    { kind: 'note', text: 'infinitely many', italic: true },
    { kind: 'note', text: '24 is the pivot — largest factor, smallest multiple.' },
  ]},
})


// ─── ILLUSTRATIONS (factor-set) ──────────────────────────────────────────

// obj1 — factors of 24 as a labeled chip set
const fsFactorsObj1 = renderFactorSet({
  kind: 'single-set',
  of: 24,
  info: { lines: [
    { kind: 'formula', text: 'factors of 24', role: 'primary' },
    { kind: 'separator' },
    { kind: 'note', text: '{1, 2, 3, 4, 6, 8, 12, 24}' },
    { kind: 'note', text: '8 factors total', italic: true },
  ]},
})

// obj2 — pair-search up to √36
const fsFactorsObj2 = renderFactorSet({
  kind: 'pairs',
  of: 36,
  info: { lines: [
    { kind: 'formula', text: 'pairs by testing 1 → √36', role: 'primary' },
    { kind: 'separator' },
    { kind: 'note', text: '(1, 36), (2, 18), (3, 12),' },
    { kind: 'note', text: '(4, 9), (6, 6)' },
    { kind: 'note', text: '6 tests → 9 factors', italic: true },
  ]},
})

// obj3 — factor pairs of 24
const fsFactorsObj3 = renderFactorSet({
  kind: 'pairs',
  of: 24,
  info: { lines: [
    { kind: 'formula', text: 'factor pairs of 24', role: 'primary' },
    { kind: 'separator' },
    { kind: 'note', text: '(1, 24), (2, 12),' },
    { kind: 'note', text: '(3, 8), (4, 6)' },
    { kind: 'note', text: 'each pair multiplies to 24', italic: true },
  ]},
})

// obj4 — proper divisors of 12 (12 itself struck out)
const fsFactorsObj4 = renderFactorSet({
  kind: 'single-set',
  of: 12,
  exclude: [12],
  caption: 'sum = 16 > 12 (abundant)',
  info: { lines: [
    { kind: 'formula', text: 'proper divisors of 12', role: 'primary' },
    { kind: 'separator' },
    { kind: 'note', text: '{1, 2, 3, 4, 6}' },
    { kind: 'formula', text: '1+2+3+4+6 = 16', role: 'result' },
    { kind: 'note', text: '16 > 12 → abundant', italic: true },
  ]},
})

// obj7 — common factors of 12 and 18
const fsFactorsObj7 = renderFactorSet({
  kind: 'two-set',
  setA: 12,
  setB: 18,
  info: { lines: [
    { kind: 'formula', text: 'common factors', role: 'result' },
    { kind: 'separator' },
    { kind: 'note', text: '{1, 2, 3, 6}' },
    { kind: 'formula', text: 'gcd(12, 18) = 6', role: 'result' },
  ]},
})

// obj9 — counting factors of 72 via prime factorization
const fsFactorsObj9 = renderFactorSet({
  kind: 'single-set',
  of: 72,
  caption: '12 factors',
  info: { lines: [
    { kind: 'formula', text: '72 = 2³ · 3²', role: 'primary' },
    { kind: 'separator' },
    { kind: 'formula', text: '(3+1)(2+1) = 12', role: 'result' },
    { kind: 'note', text: 'matches the chip count', italic: true },
  ]},
})

// obj10 — σ(12) = 28
const fsFactorsObj10 = renderFactorSet({
  kind: 'single-set',
  of: 12,
  caption: 'σ(12) = 28',
  info: { lines: [
    { kind: 'formula', text: 'σ(12) — sum of all divisors', role: 'primary' },
    { kind: 'separator' },
    { kind: 'note', text: '1+2+3+4+6+12 = 28' },
    { kind: 'note', text: '28 > 2·12 → abundant', italic: true },
  ]},
})


const sectionsContent = {
  obj0: {
  title: `Key Terms`,
  content: `
- [Divisor (Factor)](!/arithmetic/definitions#divisor) — the central concept on this page; an integer that divides another exactly
- [Multiple](!/arithmetic/definitions#multiple) — the counterpart to a factor, produced by multiplying out
- [Prime Number](!/arithmetic/definitions#prime_number) — an integer greater than 1 whose only factors are 1 and itself
- [Composite Number](!/arithmetic/definitions#composite_number) — an integer greater than 1 with additional factors beyond 1 and itself
- [Prime Factorization](!/arithmetic/definitions#prime_factorization) — decomposition into primes, used here to count divisors`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Arithmetic Definitions](!/arithmetic/definitions) →@`,
  link: '',
},

  obj1: {
    title: `Factors (Divisors)`,
    content: `A factor of $n$ is any integer $a$ such that $a \\mid n$ — meaning $n = a \\cdot k$ for some integer $k$. The terms "factor" and "divisor" are interchangeable.

Every integer greater than $1$ has at least two factors: $1$ and itself. The number $1$ divides everything, and every number divides itself. Most numbers have additional factors between these two extremes.

The factors of $24$ are $1, 2, 3, 4, 6, 8, 12, 24$ — eight in total. The factors of $13$ are just $1$ and $13$ — making it prime.`,
    afterFigure: `Unlike multiples, which extend infinitely, the factor set of any positive integer is finite. No factor of $n$ can exceed $n$ itself (in absolute value), so the search space is bounded from the start.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Finding All Factors`,
    content: `A systematic search tests each integer from $1$ up to $\\sqrt{n}$. If $a$ divides $n$, both $a$ and $\\frac{n}{a}$ are factors — a pair produced from a single test. Stopping at $\\sqrt{n}$ is sufficient because if $a > \\sqrt{n}$, then $\\frac{n}{a} < \\sqrt{n}$, and that smaller partner would already have been found.

For $n = 36$, test integers from $1$ to $6$ (since $\\sqrt{36} = 6$):

$1 \\mid 36$: pair $(1, 36)$. $2 \\mid 36$: pair $(2, 18)$. $3 \\mid 36$: pair $(3, 12)$. $4 \\mid 36$: pair $(4, 9)$. $5 \\nmid 36$: skip. $6 \\mid 36$: pair $(6, 6)$.

To list all factors of a specific number, use the [factoring calculator](!/algebra/calculators/factoring).`,
    afterFigure: `@academic[pitfall,aside:true,width:35%:Forgetting the partner factors
Writing down only the successful test values $1, 2, 3, 4, 6$ gives $36$ just five factors. Each success $a \\mid 36$ also gives the partner $36 \\div a$, so $36$, $18$, $12$ and $9$ belong in the list too.
[Read more](!#pitfalls)]@

The complete factor set is $\\{1, 2, 3, 4, 6, 9, 12, 18, 36\\}$ — nine factors, all discovered by testing only six candidates.

For large numbers, [divisibility rules](!/arithmetic/divisibility/rules) speed up the testing. Checking whether $2$, $3$, or $5$ divide $n$ takes a glance at the digits, not a full division.`,
    before: ``,
    after: `
    
    @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use our Divisibility Calculator](!/arithmetic/calculators/divisibility-calculator) →@`,
    link: '',
  },

  obj3: {
    title: `Factor Pairs`,
    content: `@academic[rule_plain:Every factor $a$ of $n$ has a partner: $\\frac{n}{a}$.]@

Together they satisfy $a \\cdot \\frac{n}{a} = n$, and listing factor pairs ensures no divisor is overlooked.

For $n = 24$, the pairs are: $(1, 24)$, $(2, 12)$, $(3, 8)$, $(4, 6)$. Each pair multiplies to $24$, and together they account for all eight factors.`,
    afterFigure: `@academic[pitfall,aside:true,width:35%:Counting the square root twice
Counting two factors for every pair gives $16$ six factors from $(1, 16)$, $(2, 8)$ and $(4, 4)$. The pair $(4, 4)$ holds only one factor, so $16$ has five: $1, 2, 4, 8, 16$.
[Read more](!#pitfalls)]@

For perfect squares, one pair collapses into a repeated value. The number $36$ has the pair $(6, 6)$ — the square root paired with itself. This is why perfect squares have an odd number of factors: every other factor appears in a pair of two distinct values, but the square root stands alone.

Organizing factors into pairs is more reliable than listing them individually. Starting from $(1, n)$ and working inward, each successful division test produces two factors at once — halving the work and providing a built-in completeness check.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Proper Divisors`,
    content: `The proper divisors of $n$ are all of its factors except $n$ itself. They are the numbers that divide $n$ without being equal to it.

The proper divisors of $12$ are $\\{1, 2, 3, 4, 6\\}$. The number $12$ itself is excluded.`,
    afterFigure: `@academic[pitfall,aside:true,width:35%:Counting the number among its proper divisors
Adding $28$ to its own proper divisors gives $1 + 2 + 4 + 7 + 14 + 28 = 56 > 28$, so $28$ looks abundant. Without $28$ the sum is $1 + 2 + 4 + 7 + 14 = 28$, and $28$ is perfect.
[Read more](!#pitfalls)]@

Proper divisors define three classical categories. A number is perfect if the sum of its proper divisors equals the number: $6 = 1 + 2 + 3$, so $6$ is perfect. A number is abundant if the sum exceeds it: the proper divisors of $12$ sum to $1 + 2 + 3 + 4 + 6 = 16 > 12$. A number is deficient if the sum falls short: the proper divisors of $10$ sum to $1 + 2 + 5 = 8 < 10$.

Perfect numbers are rare. The first four are $6, 28, 496$, and $8{,}128$. Every known perfect number is even, and whether an odd perfect number exists remains one of the oldest unsolved problems in mathematics.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Multiples`,
    content: `A multiple of $a$ is any number $b$ such that $a \\mid b$ — meaning $b = a \\cdot k$ for some integer $k$. Where factors divide into a number, multiples are produced by multiplying out from it.

The multiples of $7$ are $7, 14, 21, 28, 35, 42, \\ldots$ — an infinite sequence with no largest member.

@academic[rule_plain:Every positive integer generates infinitely many multiples.]@`,
    afterFigure: `Zero is a multiple of every number, since $0 = a \\cdot 0$ for any $a$. It sits at the start of every multiple sequence, though it is often omitted when listing "the multiples of $a$" in contexts where only positive values are relevant.

The [modulo](!/arithmetic/modulo) operation identifies which multiple of $n$ is closest to a given number $a$ without exceeding it: $a = n \\cdot q + r$, where $n \\cdot q$ is that nearest multiple and $r$ is the gap between it and $a$.`,
    before: ``,
    after: ``,
    link: '',
  },

//   obj6: {
//     title: `Factors vs Multiples`,
//     content: `The two concepts are inverses of each other, and mixing them up is one of the most common errors in elementary number theory.

// Factors go downward. The factors of $24$ are $1, 2, 3, 4, 6, 8, 12, 24$ — all less than or equal to $24$. There are finitely many of them.

// Multiples go upward. The multiples of $24$ are $24, 48, 72, 96, \\ldots$ — all greater than or equal to $24$ (excluding zero). There are infinitely many.

// The relationship is symmetric: $a$ is a factor of $b$ if and only if $b$ is a multiple of $a$. The number $3$ is a factor of $12$, and $12$ is a multiple of $3$. Same fact, opposite viewpoints.

// A useful mnemonic: factors fit into a number (they are smaller), multiples multiply out from a number (they are larger). The factor set is contained; the multiple set is unbounded.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },


obj6: {
  title: `Factors vs Multiples`,
  content: `The two concepts are inverses of each other, and mixing them up is one of the most common errors in elementary number theory.

Factors go downward. The factors of $24$ are $1, 2, 3, 4, 6, 8, 12, 24$ — all less than or equal to $24$. There are finitely many of them.

Multiples go upward. The multiples of $24$ are $24, 48, 72, 96, \\ldots$ — all greater than or equal to $24$ (excluding zero). There are infinitely many.

The contrast is easiest to read on two adjacent number lines, with $24$ itself as the pivot between them:`,
  afterFigure: `The relationship is symmetric: $a$ is a factor of $b$ if and only if $b$ is a multiple of $a$. The number $3$ is a factor of $12$, and $12$ is a multiple of $3$. Same fact, opposite viewpoints.

A useful mnemonic: factors fit into a number (they are smaller), multiples multiply out from a number (they are larger). The factor set is contained; the multiple set is unbounded.`,
  before: ``,
  after: ``,
  link: '',
},

  obj7: {
    title: `Common Factors`,
    content: `A common factor of two numbers $m$ and $n$ is a number that divides both. Finding common factors means intersecting the two factor sets.

@academic[example:Example
The factors of $12$ are $\\{1, 2, 3, 4, 6, 12\\}$. The factors of $18$ are $\\{1, 2, 3, 6, 9, 18\\}$. The common factors — numbers appearing in both sets — are $\\{1, 2, 3, 6\\}$.]@`,
    afterFigure: `Every pair of positive integers shares at least one common factor: $1$ divides both, always. The question is whether they share anything larger.

The greatest common factor is the largest member of the common factor set. For $12$ and $18$, it is $6$. This value — the [GCD](!/arithmetic/divisibility/gcd) — plays a central role in simplifying **fractions**, solving equations, and determining whether two numbers are coprime.`,
    before: ``,
    after: `
    
    @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Visit GCF Calculator Page](!/arithmetic/calculators/gcf-calculator) →@`,
    link: '',
  },

  obj8: {
    title: `Common Multiples`,
    content: `A common multiple of two numbers $m$ and $n$ is a number divisible by both. Where common factors are drawn from finite sets, common multiples form an infinite sequence.

@academic[example:Example
The multiples of $4$ are $4, 8, 12, 16, 20, 24, 28, 32, 36, \\ldots$ The multiples of $6$ are $6, 12, 18, 24, 30, 36, \\ldots$ The common multiples are $12, 24, 36, 48, \\ldots$ — every value that appears in both lists.]@

@academic[pitfall,aside:true,width:35%:Multiplying to get the LCM
Taking $6 \\cdot 8 = 48$ as the smallest common multiple of $6$ and $8$ skips $24$, which both divide: $24 = 6 \\cdot 4 = 8 \\cdot 3$. The product is the least common multiple only when the two numbers share no factor except $1$, as $4$ and $9$ do.
[Read more](!#pitfalls)]@

The smallest positive common multiple is the [LCM](!/arithmetic/divisibility/lcm). For $4$ and $6$, it is $12$. Every other common multiple is a multiple of the LCM: $24 = 2 \\cdot 12$, $36 = 3 \\cdot 12$, and so on.

Common multiples arise naturally in problems involving synchronization. If one event repeats every $4$ days and another every $6$ days, they coincide every $12$ days — the LCM of their periods.`,
    before: ``,
    after: `
    
    @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use LCM Calculator to find Least Common Multiples](!/arithmetic/calculators/lcm-calculator) →@`,
    link: '',
  },

  obj9: {
    title: `Counting Factors`,
    content: `For small numbers, counting factors by listing them is practical. For larger numbers, prime factorization provides a formula.

If $n = p_1^{a_1} \\cdot p_2^{a_2} \\cdots p_k^{a_k}$, the number of positive divisors of $n$ is:

@academic[formula_callout:Counting Factors
$$(a_1 + 1)(a_2 + 1) \\cdots (a_k + 1)$$]@

@academic[pitfall,aside:true,width:35%:Multiplying the exponents
Counting the factors of $12 = 2^2 \\cdot 3$ as $2 \\cdot 1 = 2$ misses most of them. Adding $1$ to each exponent gives $(2 + 1)(1 + 1) = 6$, the factors $1, 2, 3, 4, 6, 12$.
[Read more](!#pitfalls)]@

Each prime factor $p_i$ can appear in a divisor $0, 1, 2, \\ldots, a_i$ times — that is $a_i + 1$ independent choices. The total number of divisors is the product of all these choices.

@academic[example:Example
The number $72 = 2^3 \\cdot 3^2$ has $(3+1)(2+1) = 12$ factors. Listing them confirms: $1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72$ — exactly twelve.]@`,
    afterFigure: `@academic[pitfall,aside:true,width:35%:Counting with factors that are not prime
Reading $36 = 4 \\cdot 9$ as two factors with exponent $1$ gives $(1 + 1)(1 + 1) = 4$, but $36$ has $9$ factors. The formula needs primes: $36 = 2^2 \\cdot 3^2$ gives $(2 + 1)(2 + 1) = 9$.
[Read more](!#pitfalls)]@

The number $100 = 2^2 \\cdot 5^2$ has $(2+1)(2+1) = 9$ factors.

The formula reveals structure that raw listing obscures. A number with many small prime factors has more divisors than a number of similar size with fewer, larger prime factors. The number $60 = 2^2 \\cdot 3 \\cdot 5$ has $12$ factors, while $64 = 2^6$ has only $7$.

The same idea says how to build a number with many factors and keep it small: use the smallest primes, and give the larger exponents to the smaller primes. Swapping two exponents so that the larger one sits on the smaller prime keeps the factor count and makes the number smaller: $2 \\cdot 3^2 = 18$ and $2^2 \\cdot 3 = 12$ both have $6$ factors.

@academic[fact,aside:true,width:35%:$720720$ has $240$ factors
$720720 = 2^4 \\cdot 3^2 \\cdot 5 \\cdot 7 \\cdot 11 \\cdot 13$ has $(4 + 1)(2 + 1)(1 + 1)^4 = 240$ factors, and no smaller number has as many. It is also the smallest number divisible by every whole number from $1$ to $16$.]@

A number with more factors than every smaller number is called highly composite. The first few are $1, 2, 4, 6, 12, 24, 36, 48, 60, 120$, each of them built from the smallest primes with exponents that never increase from one prime to the next. The number $60$, for example, is the smallest number with $12$ factors. Srinivasa Ramanujan studied these numbers in a long paper published in 1915.`,
    before: ``,
    after: `
    
    @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Check our Prime Factorization Calculator](!/arithmetic/calculators/prime-calculator) →@`,
    link: '',
  },

  obj10: {
    title: `Sum of Factors`,
    content: `The sum of all positive divisors of $n$ is denoted $\\sigma(n)$. Like the divisor count, it can be computed directly from the prime factorization.

@academic[example:Example
For $n = 12$: the divisors are $1, 2, 3, 4, 6, 12$, and $\\sigma(12) = 1 + 2 + 3 + 4 + 6 + 12 = 28$.]@`,
    afterFigure: `@academic[fact,aside:true,width:35%:Every even perfect number has one shape
When $2^p - 1$ is prime, $n = 2^{p-1}(2^p - 1)$ is perfect, since $\\sigma(n) = (2^p - 1) \\cdot 2^p = 2n$; this gives $6$, $28$, $496$ and $8{,}128$. Euclid proved this around 300 BC, and about 2,000 years later Euler showed that every even perfect number has this shape.]@

@academic[example:Example
For $n = 6$: the divisors are $1, 2, 3, 6$, and $\\sigma(6) = 1 + 2 + 3 + 6 = 12$. The sum of all divisors is twice the number — but more revealing is that the sum of the proper divisors is $1 + 2 + 3 = 6$, equal to $n$ itself. This makes $6$ a perfect number.]@

The next perfect number, $28 = 2^2 \\cdot 7$, has the same shape as $6 = 2 \\cdot 3$: a power of $2$ times an odd prime. For a number $2^k \\cdot q$ of this shape, the divisors are the powers $1, 2, \\ldots, 2^k$ together with those same powers times $q$, so $\\sigma(2^k q) = (1 + 2 + \\cdots + 2^k)(1 + q) = (2^{k+1} - 1)(q + 1)$. For $28$ this gives $7 \\cdot 8 = 56 = 2 \\cdot 28$.

The relationship between $\\sigma(n)$ and $n$ classifies every positive integer. When $\\sigma(n) - n = n$, the number is perfect. When $\\sigma(n) - n > n$, it is abundant. When $\\sigma(n) - n < n$, it is deficient. Most numbers are deficient; abundance and perfection are the exceptions.`,
    before: ``,
    after: ``,
    link: '',
  },

  notation: {
    title: `Divisor Function Notation`,
    lead: `The divisor-structure toolkit runs on three marks: the prime-power template every formula reads from, the two names of the counting function this page computes anonymously, and the sigma that sums.`,
    inherited: `The divides bar and its slash are owned by [divisibility notation](!/arithmetic/divisibility#2); $\\gcd$ and $\\operatorname{lcm}$ by [their](!/arithmetic/divisibility/gcd#notation) [pages](!/arithmetic/divisibility/lcm#notation).`,
    entries: [
      {
        id: 'canonical-template',
        tex: `$n = p_1^{a_1} \\cdots p_k^{a_k}$`,
        read: `n as a product of prime powers`,
        means: `The canonical-factorization template: $p$ reserved for primes, subscripts enumerating the distinct ones, exponents counting repeats — $72 = 2^3 \\cdot 3^2$ filled in. Every divisor formula on this page reads its data off this shape.`,
        cases: `The subscript does the enumeration job of [root labels](!/algebra/equations/quadratic#notation), conventionally ascending $p_1 < p_2 < \\cdots$; an absent prime is exponent zero, which is exactly how the $(a_i + 1)$ choice-counts of **Counting Factors** above work.`,
        confusedWith: `An equation to solve. The template states a shape — nothing multiplies until a concrete $n$ arrives; treating $p_1^{a_1}$ as unknowns misreads a description as a problem.`,
      },
      {
        id: 'divisor-count-names',
        tex: `$d(n)$ · $\\tau(n)$`,
        read: `d of n; tau of n — the divisor count`,
        means: `The names the counting formula answers to: $(a_1 + 1) \\cdots (a_k + 1)$ of **Counting Factors** above computes $d(n)$ — written $\\tau(n)$ in number-theory texts. This page leaves the function anonymous; the literature does not.`,
        cases: `$d(72) = 12$, $\\tau(64) = 7$ — one function, two dialects: $d$ in elementary writing, $\\tau$ in research papers, alongside $\\sigma$'s family below.`,
        confusedWith: `A differential. The letter $d$ is mathematics' most overloaded — [differentials](!/calculus/derivatives/differentials#notation) own $dx$; here $d(n)$ is an ordinary function value, its parentheses the only shield.`,
      },
      {
        id: 'sigma-function',
        tex: `$\\sigma(n)$`,
        read: `sigma of n — the sum of divisors`,
        means: `Lowercase sigma as a named function: $\\sigma(n)$ sums every positive divisor — $\\sigma(12) = 28$, per **Sum of Factors** above. The perfect/abundant/deficient classification is written entirely in $\\sigma(n) - n$ comparisons.`,
        cases: `Proper-divisor sums drop $n$ itself — $\\sigma(n) - n$, sometimes named $s(n)$, the aliquot sum; perfect numbers are exactly the solutions of $\\sigma(n) = 2n$.`,
        sameGlyphElsewhere: `The letter's other careers: capital $\\Sigma$ is the [summation operator](!/combinatorics/binomial-theorem#notation) — kindred in spirit, different in grammar — and lowercase $\\sigma$ names [singular values](!/linear-algebra/decompositions/svd#notation) and standard deviations elsewhere; the argument $(n)$ marks the divisor-sum reading.`,
      },
    ],
    symbolsHref: `/math-symbols/arithmetic`,
    symbolsLabel: `All arithmetic symbols`,
    parentHref: `/arithmetic/divisibility`,
    parentLabel: `Divisibility`,
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

  obj12: {
    title: `Summary: A Toolkit for Divisor Structure`,
    content: `Every question this page addresses about a number $n$ — what its factors are, how many it has, how it compares to similar numbers, what it shares with another integer — reduces to one of a small set of recurring tools. The table below collects those tools in one place, paired with a worked example so each row stands as both a reference and a reminder of how to apply it.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj13: {
    title: `Common Pitfalls`,
    content: `Seven mistakes account for many of the wrong answers about factors and multiples. Six are marked where they happen in the sections above; the mix-up between factors and multiples is the one **Factors vs Multiples** already warns about. Here each is worked through in full, with the wrong and the right working side by side.

**Forgetting the partner factors**

The pair search tests candidates only up to $\\sqrt{n}$. Each test that succeeds is written down, but its partner $\\frac{n}{a}$ is not, so the list stops at $\\sqrt{n}$ and misses every factor above it.

Wrong working: for $n = 36$, the tests for $1, 2, 3, 4, 6$ succeed, so the factors of $36$ are $1, 2, 3, 4, 6$, five in total.

Right working: each success gives a pair: $(1, 36)$, $(2, 18)$, $(3, 12)$, $(4, 9)$, $(6, 6)$. The factors are $1, 2, 3, 4, 6, 9, 12, 18, 36$, nine in total.

Why it happens: the rule "test up to $\\sqrt{n}$" is read as the end of the list, when it is only the halfway mark of the search.

How to check: the largest factor of $n$ is $n$ itself. A list of the factors of $36$ that does not end in $36$ is incomplete.

**Counting the square root twice**

Every factor pair is counted as two factors, including the pair in which the square root of a perfect square meets itself.

Wrong working: $16$ has the pairs $(1, 16)$, $(2, 8)$ and $(4, 4)$, so it has $3 \\cdot 2 = 6$ factors.

Right working: the pair $(4, 4)$ contributes the single factor $4$. The factors of $16$ are $1, 2, 4, 8, 16$, five in total. In the same way $36$ has $9$ factors, not $10$.

Why it happens: for a number that is not a perfect square every pair really holds two different factors, so "two per pair" becomes a habit.

How to check: a perfect square has an odd number of factors, so an even count for $16$, $36$ or $100$ means the root was counted twice. The counting formula agrees: $16 = 2^4$ has $4 + 1 = 5$ factors.

**Counting the number among its proper divisors**

When a number is classified as perfect, abundant or deficient, the number itself is added to the sum of its proper divisors. The sum then always exceeds $n$, and every number looks abundant.

Wrong working: for $28$, $1 + 2 + 4 + 7 + 14 + 28 = 56 > 28$, so $28$ is abundant.

Right working: the proper divisors leave out $28$ itself. Their sum is $1 + 2 + 4 + 7 + 14 = 28$, equal to the number, so $28$ is perfect.

Why it happens: the full list of divisors ends with $n$, and the sum $\\sigma(n)$ in **Sum of Factors** includes it. The word "proper" is the only signal to drop it.

How to check: with $n$ included, the sum of the divisors of any $n > 1$ is at least $n + 1$, so if every number tested comes out abundant, $n$ was counted. When the full sum $\\sigma(n)$ is used, compare it with $2n$, not with $n$: $\\sigma(28) = 56 = 2 \\cdot 28$.

**Mixing up factors and multiples**

The two words for the two sides of $a \\mid b$ are swapped, so the numbers that go into $n$ are listed as its multiples, or the numbers it goes into as its factors.

Wrong working: the multiples of $12$ are $1, 2, 3, 4, 6, 12$.

Right working: those are the factors of $12$, the numbers that divide it. The multiples of $12$ are $12 \\cdot 1, 12 \\cdot 2, 12 \\cdot 3, \\ldots$, that is $12, 24, 36, 48, \\ldots$

Why it happens: both words come from the same multiplication fact. $12 = 3 \\cdot 4$ makes $3$ a factor of $12$ and $12$ a multiple of $3$, and which side each word belongs to has to be remembered.

How to check: compare sizes and count. A positive factor of $n$ is at most $n$ and there are finitely many; a positive multiple of $n$ is at least $n$ and the list never ends.

**Multiplying to get the LCM**

The product of two numbers is taken as their smallest common multiple.

Wrong working: the least common multiple of $6$ and $8$ is $6 \\cdot 8 = 48$.

Right working: the multiples of $6$ are $6, 12, 18, 24, \\ldots$ and the multiples of $8$ are $8, 16, 24, \\ldots$, and the first one they share is $24$. The product $48 = 2 \\cdot 24$ is a common multiple, but not the smallest.

Why it happens: the product is always a common multiple, and when the two numbers share no factor except $1$, as $4$ and $9$ do, it is the least one, $36$. The shortcut works often enough to seem like a rule.

How to check: if the two numbers share a factor $d > 1$, the product divided by $d$ is still a common multiple. Both $6$ and $8$ are even, and $48 \\div 2 = 24$ is divisible by both: $24 = 6 \\cdot 4 = 8 \\cdot 3$.

**Multiplying the exponents**

In the factor-count formula the added $1$s are dropped, and the exponents of the prime factorization are multiplied as they stand.

Wrong working: $12 = 2^2 \\cdot 3$ has exponents $2$ and $1$, so it has $2 \\cdot 1 = 2$ factors.

Right working: an exponent $a_i$ allows $a_i + 1$ choices, from $0$ to $a_i$ copies of its prime. So $12$ has $(2 + 1)(1 + 1) = 6$ factors: $1, 2, 3, 4, 6, 12$.

Why it happens: the exponent counts the copies of a prime that are present, and the choice of taking none of them, which gives the factors without that prime, is easy to overlook.

How to check: try a prime power. The factors of $8 = 2^3$ are $1, 2, 4, 8$, four of them, which is $3 + 1$ and not $3$. For $72 = 2^3 \\cdot 3^2$, multiplying the exponents gives $6$, while **Counting Factors** lists $12$.

**Counting with factors that are not prime**

The counting formula is applied to a factorization whose bases are not all prime.

Wrong working: $36 = 4 \\cdot 9$, two bases with exponent $1$, so $36$ has $(1 + 1)(1 + 1) = 4$ factors.

Right working: break each base down to primes first. $4 = 2^2$ and $9 = 3^2$, so $36 = 2^2 \\cdot 3^2$ and it has $(2 + 1)(2 + 1) = 9$ factors: $1, 2, 3, 4, 6, 9, 12, 18, 36$.

Why it happens: $4 \\cdot 9$ is a true factorization, and the formula looks as if it reads any exponents. It counts correctly only with primes; built from $4$ and $9$ alone, the factors $2$, $3$, $6$, $12$ and $18$ never appear.

How to check: every base must be prime before the formula is used. The pair search also catches it: $36$ has the pairs $(1, 36)$, $(2, 18)$, $(3, 12)$, $(4, 9)$, $(6, 6)$, far more than four factors.`,
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

// FAQ pass: cut ten case-A questions — this page's h2s (Factors, Multiples,
// Factors vs Multiples, Finding All Factors, Factor Pairs, Proper Divisors,
// Common Factors, Common Multiples, Counting Factors, Sum of Factors /
// Divisor Function Notation) answer them directly. Kept perfect numbers and
// the odd-factor-count puzzle (both buried, no matching heading) and reframed
// "Is 20 abundant or deficient?" to the query people actually type.
const faqQuestions = {
  obj1: {
    question: "What is a perfect number?",
    answer: "A perfect number equals the sum of its proper divisors. The number 6 is perfect: 1 + 2 + 3 = 6. The number 28 is perfect: 1 + 2 + 4 + 7 + 14 = 28. Perfect numbers are rare — the first four are 6, 28, 496, and 8128.",
    sectionId: "4"
  },
  obj2: {
    question: "Why do perfect squares have an odd number of factors?",
    answer: "Factors come in pairs (a, n/a) that multiply to n. For perfect squares, the square root pairs with itself (√n, √n), counting as one factor instead of two. All other pairs contribute two factors, so the total is odd. That is why 36 has nine factors: 1, 2, 3, 4, 6, 9, 12, 18, 36.",
    sectionId: "3"
  },
  obj3: {
    question: "What are abundant and deficient numbers?",
    answer: "Classify a number by the sum of its proper divisors (all factors except the number itself). If the sum exceeds the number, it is abundant: 20 gives 1+2+4+5+10 = 22 > 20. If the sum falls short, it is deficient: 16 gives 1+2+4+8 = 15 < 16. If the sum lands exactly, the number is perfect. List any number's divisors with the [divisibility calculator](!/arithmetic/calculators/divisibility-calculator).",
    sectionId: "10"
  }
}


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
      "Sum of divisors and number classification",
      "Master divisor-structure toolkit"
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
  }
}



  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const demoUnits = {
    multiples: demoUnitFrame({
      svg: divisibilityTableDiagrams.d3,
      caption: 'The &#247;3 column: the multiples of 3 marked down the table',
      text: 'Reading down the highlighted column, every third number is marked as divisible by 3: those marks are the multiples 3, 6, 9, 12, &#8230; produced by multiplying 3 out, an endless sequence spaced 3 apart. The factors of a number are finite; its multiples never stop. Pick any divisor column and read its multiples on the',
      href: '/arithmetic/visual-tools/divisibility-table',
      linkText: 'interactive divisibility table',
    }),
  };

return {
  props:{
    demoUnits,
    sectionsContent,
    introContent,
    obj6Table,
    obj10Table,
    summaryTable,
    faqQuestions,
    schemas,
    obj5SvgMultiples,
    obj6SvgSplit,
    fsFactorsObj1,
    fsFactorsObj2,
    fsFactorsObj3,
    fsFactorsObj4,
    fsFactorsObj7,
    fsFactorsObj9,
    fsFactorsObj10,
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


export default function FactorsPage({seoData, sectionsContent,
  introContent, obj6Table, obj10Table, summaryTable, faqQuestions,
  schemas, obj5SvgMultiples, obj6SvgSplit,
  fsFactorsObj1, fsFactorsObj2, fsFactorsObj3, fsFactorsObj4,
  fsFactorsObj7, fsFactorsObj9, fsFactorsObj10, demoUnits}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }
  const figureWrapStyle = { maxWidth: '800px', margin: '20px auto' }

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
          <div key={'obj1-svg'} style={figureWrapStyle}
               dangerouslySetInnerHTML={{ __html: fsFactorsObj1 }} />,
          sectionsContent.obj1.afterFigure,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
          <div key={'obj2-svg'} style={figureWrapStyle}
               dangerouslySetInnerHTML={{ __html: fsFactorsObj2 }} />,
          sectionsContent.obj2.afterFigure,
          // sectionsContent.obj2.after,
          `@academic[punchline:Testing up to $\\sqrt{n}$ is enough, because every successful test also yields the partner factor above the root.]@`,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
          <div key={'obj3-svg'} style={figureWrapStyle}
               dangerouslySetInnerHTML={{ __html: fsFactorsObj3 }} />,
          sectionsContent.obj3.afterFigure,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <div key={'obj4-svg'} style={figureWrapStyle}
               dangerouslySetInnerHTML={{ __html: fsFactorsObj4 }} />,
          sectionsContent.obj4.afterFigure,
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
      <div key={'obj5-svg'} style={figureWrapStyle}
           dangerouslySetInnerHTML={{ __html: obj5SvgMultiples }} />,
      sectionsContent.obj5.afterFigure,
              <div key={'unit-multiples'} dangerouslySetInnerHTML={{ __html: demoUnits.multiples }} />,
          `Common multiples, treated below, are the rows where two such columns are marked at once.`,
        ]
},
    // {
    //     id:'6',
    //     title:sectionsContent.obj6.title,
    //     link:sectionsContent.obj6.link,
    //     content:[
    //       sectionsContent.obj6.content,
    //       <div key={'obj6-table'} style={tableWrapStyle}
    //            dangerouslySetInnerHTML={{ __html: obj6Table }} />,
    //     ]
    // },

//     {
//     id:'6',
//     title:sectionsContent.obj6.title,
//     link:sectionsContent.obj6.link,
//     content:[
//       sectionsContent.obj6.content,
//       <div key={'obj6-table'} style={tableWrapStyle}
//            dangerouslySetInnerHTML={{ __html: obj6Table }} />,
//       <p key={'obj6-svg-preface'}
//          style={{ maxWidth: '800px', margin: '20px auto 0', fontStyle: 'italic', color: '#666', fontSize: '14px' }}>
//         The figure below shows both sets for the same number, 24 — its eight factors on top, its multiples extending below, with 24 itself as the pivot between them.
//       </p>,
//       <div key={'obj6-svg'}
//            style={{ maxWidth: '800px', margin: '20px auto' }}
//            dangerouslySetInnerHTML={{ __html: obj6SvgSplit }} />,
//     ]
// },



{
    id:'6',
    title:sectionsContent.obj6.title,
    link:sectionsContent.obj6.link,
    content:[
      sectionsContent.obj6.content,
      <div key={'obj6-svg'} style={figureWrapStyle}
           dangerouslySetInnerHTML={{ __html: obj6SvgSplit }} />,
      sectionsContent.obj6.afterFigure,
      <div key={'obj6-table'} style={tableWrapStyle}
           dangerouslySetInnerHTML={{ __html: obj6Table }} />,
    ]
},
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
          <div key={'obj7-svg'} style={figureWrapStyle}
               dangerouslySetInnerHTML={{ __html: fsFactorsObj7 }} />,
          sectionsContent.obj7.afterFigure,
          // sectionsContent.obj7.after,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
          // sectionsContent.obj8.after,
          `@academic[punchline:Common multiples never run out, and every one of them is a multiple of the LCM.]@`,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
          <div key={'obj9-svg'} style={figureWrapStyle}
               dangerouslySetInnerHTML={{ __html: fsFactorsObj9 }} />,
          sectionsContent.obj9.afterFigure,
          // sectionsContent.obj9.after,
          `@academic[punchline:The number of factors is set by the exponents in the prime factorization, not by the size of the number.]@`,
        ]
    },
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
          <div key={'obj10-svg'} style={figureWrapStyle}
               dangerouslySetInnerHTML={{ __html: fsFactorsObj10 }} />,
          sectionsContent.obj10.afterFigure,
          <div key={'obj10-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj10Table }} />,
        ]
    },
    {
        id:'notation',
        title:sectionsContent.notation.title,
        link:``,
        content:[
          <NotationSection
            key={'notation'}
            title={sectionsContent.notation.title}
            lead={sectionsContent.notation.lead}
            inherited={sectionsContent.notation.inherited}
            entries={sectionsContent.notation.entries}
            symbolsHref={sectionsContent.notation.symbolsHref}
            symbolsLabel={sectionsContent.notation.symbolsLabel}
            parentHref={sectionsContent.notation.parentHref}
            parentLabel={sectionsContent.notation.parentLabel}
            theme={'navy'}
          />,
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
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Factors and Multiples FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Factors and Multiples</h1>
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