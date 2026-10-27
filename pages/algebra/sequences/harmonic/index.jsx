import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import Hierarchy from '@/app/components/infographics/Hierarchy/Hierarchy'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'


export async function getStaticProps(){

 const keyWords = [
  "harmonic sequence",
  "harmonic progression",
  "harmonic series",
  "harmonic series divergence",
  "harmonic numbers",
  "harmonic mean",
  "reciprocals of arithmetic sequence",
  "harmonic sequence formula",
  "harmonic mean formula",
  "AM GM HM inequality",
  "mean inequality",
  "Euler Mascheroni constant",
  "harmonic vs geometric series",
  "harmonic sequence examples",
  "sum of harmonic series",
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


// const sectionsContent = {
//   obj1: {
//     title: `Definition`,
//     content: `A harmonic sequence is a sequence whose terms are the reciprocals of an [arithmetic sequence](!/algebra/sequences/arithmetic). If $b_1, b_2, b_3, \\ldots$ is arithmetic with first term $b_1 > 0$ and common difference $d > 0$, then the harmonic sequence is:

// $$a_n = \\frac{1}{b_n} = \\frac{1}{b_1 + (n-1)d}$$

// The simplest example takes $b_n = n$: the reciprocals $1, \\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}, \\ldots$ form the harmonic sequence of natural number reciprocals. The sequence $\\frac{1}{3}, \\frac{1}{5}, \\frac{1}{7}, \\frac{1}{9}, \\ldots$ is also harmonic — it comes from the arithmetic sequence $3, 5, 7, 9, \\ldots$ with $b_1 = 3$ and $d = 2$.

// A harmonic sequence is neither arithmetic nor [geometric](!/algebra/sequences/geometric). The differences between consecutive terms are not constant (they decrease), and the ratios are not constant either (they approach $1$ from below). The defining property is that the reciprocals form an arithmetic progression — the structure lives one layer down.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj2: {
//     title: `Properties`,
//     content: `Assuming the underlying arithmetic sequence has positive terms and positive common difference, the harmonic sequence is strictly decreasing: each term is smaller than its predecessor because the denominators grow.

// The terms approach zero as $n \\to \\infty$, since the denominators grow without bound. However, the rate of decrease slows — the gap between $\\frac{1}{n}$ and $\\frac{1}{n+1}$ is $\\frac{1}{n(n+1)}$, which itself shrinks as $n$ increases.

// Unlike arithmetic and geometric sequences, harmonic sequences have no closed-form expression for their partial sums. The sum $\\sum_{k=1}^{n} \\frac{1}{k}$ cannot be written as a simple formula in $n$. This absence is not a gap in technique — it is a fundamental property. The partial sums, known as harmonic numbers $H_n$, grow roughly as $\\ln n$ but involve no elementary closed form.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj3: {
//     title: `The Harmonic Series`,
//     content: `The harmonic series is the infinite sum of reciprocals of the natural numbers:

// $$\\sum_{n=1}^{\\infty} \\frac{1}{n} = 1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\cdots$$

// This series diverges — its partial sums grow without bound, even though the individual terms shrink to zero.

// The proof by grouping (attributed to Oresme, 14th century) is among the most elegant in mathematics. Group the terms after the first as follows:

// $$1 + \\frac{1}{2} + \\left(\\frac{1}{3} + \\frac{1}{4}\\right) + \\left(\\frac{1}{5} + \\frac{1}{6} + \\frac{1}{7} + \\frac{1}{8}\\right) + \\cdots$$

// The first group contains $1$ term summing to at least $\\frac{1}{2}$. The next group contains $2$ terms, each at least $\\frac{1}{4}$, summing to at least $\\frac{1}{2}$. The next contains $4$ terms, each at least $\\frac{1}{8}$, again summing to at least $\\frac{1}{2}$. Each doubling block contributes at least $\\frac{1}{2}$, and there are infinitely many blocks.

// The harmonic series grows slowly — its partial sums approximate $\\ln n + \\gamma$, where $\\gamma \\approx 0.5772$ is the Euler–Mascheroni constant. To reach a partial sum exceeding $10$, you need over $12{,}000$ terms. But slowly is not the same as bounded: the sum eventually surpasses any finite threshold.

// This stands in contrast to the [geometric series](!/algebra/sequences/geometric#6) $\\sum \\frac{1}{2^n}$, which converges to $1$. Both series have terms approaching zero, but geometric terms shrink fast enough (by a constant factor) to keep the total finite. Harmonic terms shrink too slowly. The lesson: terms approaching zero is necessary for convergence but not sufficient.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj4: {
//     title: `Harmonic Mean`,
//     content: `The harmonic mean of $n$ positive numbers $a_1, a_2, \\ldots, a_n$ is:

// $$H = \\frac{n}{\\frac{1}{a_1} + \\frac{1}{a_2} + \\cdots + \\frac{1}{a_n}}$$

// For two numbers, this simplifies to:

// $$H = \\frac{2ab}{a + b}$$

// In a harmonic sequence, every term (except the first and last) is the harmonic mean of its two neighbors. This follows from the fact that the reciprocals form an arithmetic sequence: the reciprocal of each term is the [arithmetic mean](!/algebra/sequences/arithmetic#6) of the reciprocals of its neighbors, and taking reciprocals back gives the harmonic mean relationship.

// Inserting $k$ harmonic means between two values $a$ and $b$ reduces to inserting $k$ arithmetic means between $\\frac{1}{a}$ and $\\frac{1}{b}$, then taking reciprocals of all inserted terms.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj5: {
//     title: `The Mean Inequality`,
//     content: `For any set of positive numbers, the three means satisfy:

// $$H \\leq G \\leq A$$

// The harmonic mean is never greater than the [geometric mean](!/algebra/sequences/geometric#7), which is never greater than the arithmetic mean. Equality throughout holds if and only if all numbers are identical.

// For two positive numbers $a$ and $b$:

// $$\\frac{2ab}{a+b} \\leq \\sqrt{ab} \\leq \\frac{a+b}{2}$$

// This chain links the three types of sequences through their associated means. Each mean captures a different notion of "average": arithmetic for additive processes, geometric for multiplicative processes, and harmonic for rates and reciprocals.

// The AM–GM portion of the inequality ($G \\leq A$) is used extensively throughout algebra, particularly in optimization and in proving [inequalities](!/algebra/inequalities). The full three-way chain places the harmonic mean as the lower bound of the trio.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// }

// /algebra/sequences/harmonic — sectionsContent v2
// 3 callouts: obj1 (1), obj4 (1), obj5 (1). obj2/obj3 untouched.

const sectionsContent = {
  obj1: {
    title: `Definition`,
    content: `A harmonic sequence is a sequence whose terms are the reciprocals of an [arithmetic sequence](!/algebra/sequences/arithmetic). If $b_1, b_2, b_3, \\ldots$ is arithmetic with first term $b_1 > 0$ and common difference $d > 0$, then the harmonic sequence is:

@academic[formula_callout:General Term (Harmonic Sequence)
$$a_n = \\frac{1}{b_n} = \\frac{1}{b_1 + (n-1)d}$$
/algebra/formulas#general_term_harmonic_sequence]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

The simplest example takes $b_n = n$: the reciprocals $1, \\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}, \\ldots$ form the harmonic sequence of natural number reciprocals. The sequence $\\frac{1}{3}, \\frac{1}{5}, \\frac{1}{7}, \\frac{1}{9}, \\ldots$ is also harmonic — it comes from the arithmetic sequence $3, 5, 7, 9, \\ldots$ with $b_1 = 3$ and $d = 2$.

@academic[pitfall,aside:true,width:35%:Using a common difference of the terms
Treating $\\frac{1}{3}, \\frac{1}{5}, \\frac{1}{7}, \\ldots$ as arithmetic with $d = \\frac{1}{5} - \\frac{1}{3} = -\\frac{2}{15}$ gives $a_{10} = \\frac{1}{3} + 9 \\cdot \\left(-\\frac{2}{15}\\right) = -\\frac{13}{15}$. The difference $d = 2$ belongs to the denominators: $b_{10} = 3 + 9 \\cdot 2 = 21$, so $a_{10} = \\frac{1}{21}$.
[Read more](!#pitfalls)]@

A harmonic sequence is neither arithmetic nor [geometric](!/algebra/sequences/geometric). The differences between consecutive terms are not constant (they decrease), and the ratios are not constant either (they approach $1$ from below). The defining property is that the reciprocals form an arithmetic progression — the structure lives one layer down.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Properties`,
    content: `Assuming the underlying arithmetic sequence has positive terms and positive common difference, the harmonic sequence is strictly decreasing: each term is smaller than its predecessor because the denominators grow.

The terms approach zero as $n \\to \\infty$, since the denominators grow without bound. However, the rate of decrease slows — the gap between $\\frac{1}{n}$ and $\\frac{1}{n+1}$ is $\\frac{1}{n(n+1)}$, which itself shrinks as $n$ increases.

@academic[rule_theorem_plain:Unlike arithmetic and geometric sequences, harmonic sequences have no closed-form expression for their partial sums.]@

The sum $\\sum_{k=1}^{n} \\frac{1}{k}$ cannot be written as a simple formula in $n$. This absence is not a gap in technique — it is a fundamental property. The partial sums, known as harmonic numbers $H_n$, grow roughly as $\\ln n$ but involve no elementary closed form.

@academic[fact,aside:true,width:35%:Never a whole number after $H_1$
For every $n \\geq 2$, $H_n$ is not an integer. Over a common denominator, every term except $\\frac{1}{2^k}$, the largest power of $2$ up to $n$, gets an even numerator, so the total numerator is odd while the denominator is even.]@

Written as reduced fractions, the first harmonic numbers are $H_1 = 1$, $H_2 = \\frac{3}{2}$, $H_3 = \\frac{11}{6}$, $H_4 = \\frac{25}{12}$, $H_5 = \\frac{137}{60}$ and $H_6 = \\frac{49}{20}$. The numerators and denominators follow no visible pattern, and they grow quickly: already $H_{10} = \\frac{7381}{2520}$. Each value has to be built by adding one more fraction to the one before.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `The Harmonic Series`,
    content: `The harmonic series is the infinite sum of reciprocals of the natural numbers:

@academic[formula_callout:The Harmonic Series
$$\\sum_{n=1}^{\\infty} \\frac{1}{n} = 1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\cdots$$]@

@academic[rule_theorem_plain:This series diverges — its partial sums grow without bound, even though the individual terms shrink to zero.]@

The proof by grouping (attributed to Oresme, 14th century) is among the most elegant in mathematics. Group the terms after the first as follows:

@academic[formula_callout:The Harmonic Series
$$1 + \\frac{1}{2} + \\left(\\frac{1}{3} + \\frac{1}{4}\\right) + \\left(\\frac{1}{5} + \\frac{1}{6} + \\frac{1}{7} + \\frac{1}{8}\\right) + \\cdots$$]@

The first group contains $1$ term summing to at least $\\frac{1}{2}$. The next group contains $2$ terms, each at least $\\frac{1}{4}$, summing to at least $\\frac{1}{2}$. The next contains $4$ terms, each at least $\\frac{1}{8}$, again summing to at least $\\frac{1}{2}$. Each doubling block contributes at least $\\frac{1}{2}$, and there are infinitely many blocks.

@academic[fact,aside:true,width:35%:Drop every 9 and it converges
Remove each term whose denominator contains the digit $9$, and the sum stays below $80$ (it is about $22.92$). There are $8 \\cdot 9^{d-1}$ such numbers with $d$ digits, each term at most $\\frac{1}{10^{d-1}}$, so the $d$-digit block adds at most $8 \\cdot 0.9^{d-1}$, a geometric series with total $80$.]@

The harmonic series grows slowly — its partial sums approximate $\\ln n + \\gamma$, where $\\gamma \\approx 0.5772$ is the Euler–Mascheroni constant. To reach a partial sum exceeding $10$, you need over $12{,}000$ terms. But slowly is not the same as bounded: the sum eventually surpasses any finite threshold.

This stands in contrast to the [geometric series](!/algebra/sequences/geometric#6) $\\sum \\frac{1}{2^n}$, which converges to $1$. Both series have terms approaching zero, but geometric terms shrink fast enough (by a constant factor) to keep the total finite. Harmonic terms shrink too slowly.

@academic[rule_plain:The lesson: terms approaching zero is necessary for convergence but not sufficient.]@`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Harmonic Mean`,
    content: `The harmonic mean of $n$ positive numbers $a_1, a_2, \\ldots, a_n$ is:

@academic[formula_callout:Harmonic Mean
$$H = \\frac{n}{\\frac{1}{a_1} + \\frac{1}{a_2} + \\cdots + \\frac{1}{a_n}}$$
/algebra/formulas#harmonic_mean]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

For two numbers, this simplifies to:

@academic[formula_callout:Harmonic Mean
$$H = \\frac{2ab}{a + b}$$]@

@academic[rule_plain:In a harmonic sequence, every term (except the first and last) is the harmonic mean of its two neighbors.]@

@academic[pitfall,aside:true,width:35%:Averaging the terms instead of their reciprocals
Taking the term between $\\frac{1}{3}$ and $\\frac{1}{7}$ as their average gives $\\frac{1}{2}\\left(\\frac{1}{3} + \\frac{1}{7}\\right) = \\frac{5}{21}$, and $3, \\frac{21}{5}, 7$ is not arithmetic. Averaging the reciprocals $3$ and $7$ gives $5$, so the term is $\\frac{1}{5}$.
[Read more](!#pitfalls)]@

This follows from the fact that the reciprocals form an arithmetic sequence: the reciprocal of each term is the [arithmetic mean](!/algebra/sequences/arithmetic#6) of the reciprocals of its neighbors, and taking reciprocals back gives the harmonic mean relationship.

Inserting $k$ harmonic means between two values $a$ and $b$ reduces to inserting $k$ arithmetic means between $\\frac{1}{a}$ and $\\frac{1}{b}$, then taking reciprocals of all inserted terms.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `The Mean Inequality`,
    content: `For any set of positive numbers, the three means satisfy:

@academic[formula_callout:AM-GM-HM Inequality
$$H \\leq G \\leq A$$
/algebra/formulas#am-gm-hm_inequality]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

The harmonic mean is never greater than the [geometric mean](!/algebra/sequences/geometric#7), which is never greater than the arithmetic mean. Equality throughout holds if and only if all numbers are identical.

For two positive numbers $a$ and $b$:

@academic[formula_callout:The Mean Inequality
$$\\frac{2ab}{a+b} \\leq \\sqrt{ab} \\leq \\frac{a+b}{2}$$]@

This chain links the three types of sequences through their associated means. Each mean captures a different notion of "average": arithmetic for additive processes, geometric for multiplicative processes, and harmonic for rates and reciprocals.

@academic[pitfall,aside:true,width:35%:Averaging speeds with the arithmetic mean
Averaging $60$ km/h out and $40$ km/h back over the same distance as $\\frac{60 + 40}{2} = 50$ km/h is too high: $120$ km each way takes $2 + 3 = 5$ hours for $240$ km, so $48$ km/h. That is the harmonic mean $\\frac{2 \\cdot 60 \\cdot 40}{60 + 40} = 48$.
[Read more](!#pitfalls)]@

Rates are the typical setting for the harmonic mean. When a trip is split into equal distances covered at different speeds, the time for each part is the distance divided by the speed, so the total time adds up reciprocals of the speeds. The average speed of the whole trip is the total distance divided by that total time.

The AM–GM portion of the inequality ($G \\leq A$) is used extensively throughout algebra, particularly in optimization and in proving [inequalities](!/algebra/inequalities). The full three-way chain places the harmonic mean as the lower bound of the trio.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Common Pitfalls`,
    content: `Four mistakes come up again and again with harmonic sequences, the harmonic series and the harmonic mean. Three of them are marked where they happen in the sections above; the fourth is the misreading that the section on the harmonic series answers. Here each is worked through in full, with the wrong and the right working side by side.

**Using a common difference of the terms**

The terms of a harmonic sequence are treated as an arithmetic sequence: a common difference is read off from the first two terms, and the formula $a_n = a_1 + (n-1)d$ is applied to the terms themselves instead of to their reciprocals.

Wrong working: for $\\frac{1}{3}, \\frac{1}{5}, \\frac{1}{7}, \\ldots$,
$$d = \\frac{1}{5} - \\frac{1}{3} = -\\frac{2}{15}, \\quad a_{10} = \\frac{1}{3} + 9 \\cdot \\left(-\\frac{2}{15}\\right) = -\\frac{13}{15}$$

Right working: the arithmetic sequence is the denominators $3, 5, 7, \\ldots$, with $b_1 = 3$ and $d = 2$.
$$b_{10} = 3 + 9 \\cdot 2 = 21, \\quad a_{10} = \\frac{1}{b_{10}} = \\frac{1}{21}$$

Why it happens: the general-term formula of an arithmetic sequence is the one most practised, and the difference is taken of whatever numbers are written down, not of their reciprocals.

How to check: compute a second difference. $\\frac{1}{7} - \\frac{1}{5} = -\\frac{2}{35}$, which is not $-\\frac{2}{15}$, so the terms are not arithmetic. A negative answer is also impossible here: every term of this sequence is a positive fraction.

**Concluding convergence from shrinking terms**

Because the terms $\\frac{1}{n}$ approach zero, the harmonic series is taken to add up to some finite total.

Wrong working: $\\frac{1}{n} \\to 0$, so the later additions become negligible and the partial sums settle at a limit.

Right working: group the terms as in the grouping proof. The block from $\\frac{1}{2^k + 1}$ to $\\frac{1}{2^{k+1}}$ has $2^k$ terms, each at least $\\frac{1}{2^{k+1}}$, so it adds at least $\\frac{1}{2}$:
$$H_{2^k} \\geq 1 + \\frac{k}{2}$$
The partial sums pass every bound, so the series diverges.

Why it happens: for the geometric series, terms that shrink to zero go together with a finite sum, and the condition that the terms approach zero gets mistaken for a test that settles convergence.

How to check: put in a size. With $k = 20$ the bound gives $H_{2^{20}} \\geq 11$, so the first $1{,}048{,}576$ terms already add up to more than $10$, and the next blocks keep adding at least $\\frac{1}{2}$ each.

**Averaging the terms instead of their reciprocals**

The term between two neighbours in a harmonic sequence, or a harmonic mean between two values, is found by averaging the two values directly, as in an arithmetic sequence.

Wrong working: between $\\frac{1}{3}$ and $\\frac{1}{7}$,
$$\\frac{1}{2}\\left(\\frac{1}{3} + \\frac{1}{7}\\right) = \\frac{1}{2} \\cdot \\frac{10}{21} = \\frac{5}{21}$$

Right working: average the reciprocals $3$ and $7$, then take the reciprocal back.
$$\\frac{3 + 7}{2} = 5, \\quad \\text{so the term is } \\frac{1}{5}$$
The two-number formula gives the same: $H = \\frac{2 \\cdot \\frac{1}{3} \\cdot \\frac{1}{7}}{\\frac{1}{3} + \\frac{1}{7}} = \\frac{\\frac{2}{21}}{\\frac{10}{21}} = \\frac{1}{5}$.

Why it happens: the rule "a term is the average of its neighbours" is true for arithmetic sequences and is carried over without the step down to the reciprocals.

How to check: take reciprocals of the three terms; they must form an arithmetic sequence. $3, 5, 7$ does, with difference $2$. The wrong answer gives $3, \\frac{21}{5}, 7$, with differences $\\frac{6}{5}$ and $\\frac{14}{5}$.

**Averaging speeds with the arithmetic mean**

Two speeds held over equal distances are averaged with the arithmetic mean, as if the trip spent equal time at each speed.

Wrong working: $60$ km/h out and $40$ km/h back over the same road,
$$\\frac{60 + 40}{2} = 50$$

Right working: take the distance as $120$ km each way. The trip out takes $\\frac{120}{60} = 2$ hours and the trip back $\\frac{120}{40} = 3$ hours, so $240$ km take $5$ hours:
$$\\frac{240}{5} = 48 = \\frac{2 \\cdot 60 \\cdot 40}{60 + 40}$$
The average speed is the harmonic mean, $48$ km/h, whatever the distance.

Why it happens: the arithmetic mean is the everyday meaning of "average", and it is right when equal times are spent at each speed. With equal distances, more time is spent at the slower speed, which pulls the average down.

How to check: work out the total time from the claimed average. At $50$ km/h, $240$ km would take $4.8$ hours, but the two legs actually take $5$ hours.`,
    before: ``,
    after: ``,
    link: '',
  },
}



const introContent = {
  id: 'intro',
  title: `Reciprocals of Arithmetic Progressions`,
  content: `A harmonic sequence is what you get when you take the reciprocals of an arithmetic sequence. The structure is inherited — the spacing of the original arithmetic progression determines everything — but the behavior is fundamentally different. Harmonic sequences have no closed-form partial sums, and the simplest harmonic series diverges despite its terms shrinking to zero.`,
}


const faqQuestions = {
  obj1: {
    question: "How can the harmonic series diverge when its terms shrink to zero?",
    answer: "Because terms shrinking to zero is necessary for convergence but not sufficient. The terms $\\frac{1}{n}$ do approach zero, yet they do so slowly enough that the running total still grows without bound. A geometric series with $|r| < 1$ shrinks fast enough to converge; the harmonic series sits just on the wrong side of that threshold.",
    sectionId: "3"
  },
  obj2: {
    question: "Is there a formula for $1 + \\frac{1}{2} + \\frac{1}{3} + \\cdots + \\frac{1}{n}$?",
    answer: "No elementary one exists, and that is a genuine mathematical fact rather than a gap in technique. Unlike arithmetic and geometric sequences, harmonic partial sums have no closed form in $n$. They are called harmonic numbers, written $H_n$, and they grow roughly like $\\ln n$, but no simple algebraic expression captures them exactly.",
    sectionId: "2"
  },
  obj3: {
    question: "Which of the three means should you use?",
    answer: "It depends on what the quantities do. Arithmetic mean suits additive processes, geometric mean suits multiplicative ones such as growth rates, and harmonic mean suits rates and reciprocals, like averaging speeds over equal distances. They are ordered $H \\leq G \\leq A$ for positive numbers, with all three equal only when every number is identical.",
    sectionId: "5"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Harmonic Sequences and Series",
    "description": "Learn harmonic sequences: definition as reciprocals of arithmetic progressions, divergence of the harmonic series, harmonic mean, and the AM-GM-HM inequality.",
    "url": "https://www.learnmathclass.com/algebra/sequences/harmonic",
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
      "name": "Harmonic Sequences"
    },
    "teaches": [
      "Definition of a harmonic sequence as reciprocals of an arithmetic progression",
      "Properties of harmonic sequences and absence of closed-form partial sums",
      "Divergence of the harmonic series and Oresme's grouping proof",
      "Harmonic numbers and their logarithmic growth rate",
      "Harmonic mean for two and for n positive numbers",
      "The mean inequality H less than or equal to G less than or equal to A"
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
        "name": "Harmonic Sequences",
        "item": "https://www.learnmathclass.com/algebra/sequences/harmonic"
      }
    ]
  },
}

  const haH = (n) => { let s = 0; for (let k = 1; k <= Math.round(n); k++) s += 1 / k; return s; };
  const haDots = Array.from({ length: 16 }, (_, i) => ({ fn: haH, from: i + 1, to: i + 1, ends: ['closed', 'closed'], color: 'f' }));
  const haSteps = [0, 1, 2].map((k) => ({ fn: () => 1 + (k + 1) / 2, from: 99, to: 99, ends: [null, null], color: 'r', ghost: [[2 ** (k + 1), 2 ** (k + 2)]], label: { text: '≥ ' + (1 + (k + 1) / 2), x: 3 * 2 ** k, y: 1 + (k + 1) / 2, pos: 's' } }));
  const fpHarmonicGrowth = { kind: 'pieces', svgTitle: 'Partial sums of the harmonic series keep climbing: at least 1.5, 2, 2.5, 3 by n = 2, 4, 8, 16', xRange: [0, 17], yRange: [0, 4], xStep: 2, xLetter: 'n',
    pieces: [
      { fn: () => 1, from: 99, to: 99, ends: [null, null], color: 'g', ghost: [[0, 17]], label: { text: '1/2 + 1/4 + 1/8 + … stops at 1', x: 16.8, y: 1, pos: 'sw' } },
      ...haSteps, ...haDots,
    ],
    notes: [{ x: 0.5, y: 3.7, text: 'blue: Hₙ = 1 + 1/2 + … + 1/n', pos: 'e', color: 'f' }, { x: 0.5, y: 3.35, text: 'amber: each doubling block adds at least 1/2', pos: 'e', color: 'r' }],
    caption: 'The harmonic sums never level off, unlike the geometric sum' };
  const fpMeans = { kind: 'pieces', svgTitle: 'For a = 1 and b = x: H = 2x/(1+x) <= G = sqrt x <= A = (1+x)/2, equal only at x = 1', xRange: [0, 9], yRange: [0, 5], xLetter: 'b',
    pieces: [
      { fn: (x) => (1 + x) / 2, from: 0, to: 9, ends: [null, null], color: 'g', label: { text: 'A = (1 + b)/2', x: 6, y: 3.5, pos: 'nw' } },
      { fn: (x) => Math.sqrt(x), from: 0, to: 9, ends: [null, null], color: 'f', label: { text: 'G = √b', x: 8, y: Math.sqrt(8), pos: 'se' } },
      { fn: (x) => 2 * x / (1 + x), from: 0, to: 9, ends: [null, null], color: 'r', label: { text: 'H = 2b/(1 + b)', x: 8.9, y: 1.8, pos: 'sw' } },
    ],
    points: [{ x: 1, y: 1, label: 'all equal at b = 1', pos: 'se' }, { x: 4, y: 2.5 }, { x: 4, y: 2 }, { x: 4, y: 1.6 }],
    vlines: [{ x: 4 }],
    notes: [{ x: 4.15, y: 0.5, text: 'b = 4: H = 1.6, G = 2, A = 2.5', pos: 'e', color: 'r' }],
    caption: 'With a = 1: H ≤ G ≤ A for every b, with equality only at b = 1' };
  const demoUnits = {
    harmonicGrowth: demoUnitFrame({
      svg: renderFunctionPlotV4(fpHarmonicGrowth),
      caption: 'Oresme&#8217;s blocks on the partial sums',
      text: 'The dots are the partial sums H&#8345; for n = 1 to 16. The amber dashes are the grouping bounds: one block of terms brings the sum to at least 1.5 by n = 2, the next block to at least 2 by n = 4, then at least 2.5 by n = 8. Every doubling of n adds at least another 1/2, so the dots keep climbing past any level. The geometric sum 1/2 + 1/4 + 1/8 + &#8230; never passes the dashed line at 1.',
    }),
    means: demoUnitFrame({
      svg: renderFunctionPlotV4(fpMeans),
      caption: 'Three means of 1 and b',
      text: 'Fix a = 1 and let b vary. The three curves are the arithmetic mean (1 + b)/2, the geometric mean &#8730;b and the harmonic mean 2b/(1 + b). They meet at b = 1, where both numbers are equal. Everywhere else they come in the same order, H below G below A: at b = 4 the dashed line reads 1.6, 2 and 2.5.',
    }),
  };

  const meanOrderLevels = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'Three averages, one fixed order',
    preface: 'For any set of positive numbers the three means always line up the same way: the harmonic mean never exceeds the geometric mean, which never exceeds the arithmetic mean.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'Equality only when all numbers are equal',
    conclusion: 'The chain becomes equality throughout exactly when all the numbers are identical. The $G \\leq A$ part is used extensively in optimization and in proving [inequalities](!/algebra/inequalities).',
    axis: { top: 'largest', label: 'size of the mean', bottom: 'smallest' },
    levels: [
      { id: 'a', name: '[Arithmetic mean](!/algebra/sequences/arithmetic)', sub: '$\\frac{a+b}{2}$ — additive processes' },
      { id: 'g', name: '[Geometric mean](!/algebra/sequences/geometric#7)', sub: '$\\sqrt{ab}$ — multiplicative processes' },
      { id: 'h', name: 'Harmonic mean', sub: '$\\frac{2ab}{a+b}$ — rates and reciprocals' },
    ],
  };

  return {
  props:{
    meanOrderLevels,
     sectionsContent,
     introContent,
     faqQuestions,
     schemas,
     demoUnits,
     seoData: {
       title: "Harmonic Sequences, Series & Harmonic Mean | Learn Math Class",
       description: "Learn harmonic sequences: definition as reciprocals of arithmetic progressions, divergence of the harmonic series, harmonic mean, and the AM-GM-HM inequality.",
       keywords: keyWords.join(", "),
       url: "/algebra/sequences/harmonic",
       name: "Harmonic Sequences and Series"
     },
   }
}
   }

const hierarchyTheme = { title: '#06357A', accent: '#2563EB', warm: '#B45309' }

export default function HarmonicSequencesPage({meanOrderLevels, seoData, sectionsContent, introContent, faqQuestions, schemas, demoUnits}) {
    
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
          <div key={'unit-harmonicGrowth'} dangerouslySetInnerHTML={{ __html: demoUnits.harmonicGrowth }} />,
          `The climb is slow: Hₙ grows like ln n, so passing 10 takes over 12,000 terms.`,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          `@academic[punchline:Every harmonic-mean question turns into an arithmetic one: take reciprocals, work there, then take reciprocals back.]@`,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
          <div key={'unit-means'} dangerouslySetInnerHTML={{ __html: demoUnits.means }} />,
          `Here G² = A · H for every b: √b squared is b, and (1 + b)/2 · 2b/(1 + b) = b.`,
          <DiagramFrame
            key={'obj5-diagram'}
            id="mean-inequality-pyramid"
            title="The mean inequality: H ≤ G ≤ A"
            source="/algebra/sequences/harmonic"
          >
            <Hierarchy data={meanOrderLevels} variant="pyramid" exportable={false} theme={hierarchyTheme} />
          </DiagramFrame>,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Harmonic Sequences FAQ`,
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
    // {
    //     id:'6',
    //     title:sectionsContent.obj6.title,
    //     link:sectionsContent.obj6.link,
    //     content:[
    //       sectionsContent.obj6.content,
    //     ]
    // },
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Harmonic Sequences</h1>
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
