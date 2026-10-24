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


export async function getStaticProps(){

  const keyWords = [
    "square numbers",
    "perfect squares",
    "square number sequence",
    "sum of squares formula",
    "sum of consecutive odd numbers",
    "perfect square test",
    "figurate numbers",
    "square numbers properties",
    "gnomon square numbers",
    "Pythagorean triples",
    "square vs triangular numbers",
    "perfect square last digit",
    "perfect square modulo",
    "nth square number",
    "square numbers examples",
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
//     content: `The $n$-th square number is:

// $$S_n = n^2$$

// The name reflects the geometric construction: arrange $n^2$ dots in a square grid with $n$ rows and $n$ columns. The first square numbers are:

// $$1, 4, 9, 16, 25, 36, 49, 64, 81, 100, \\ldots$$

// A positive integer is called a **perfect square** if it equals $n^2$ for some integer $n$. Testing whether a number is a perfect square amounts to checking whether its [square root](!/algebra/roots) is an integer.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj2: {
//     title: `Recursive Form and Odd Number Sums`,
//     content: `Each square number can be built from the previous one by adding an L-shaped border — a **gnomon** — containing $2n - 1$ dots:

// $$S_1 = 1, \\quad S_n = S_{n-1} + (2n - 1)$$

// The increments $1, 3, 5, 7, 9, \\ldots$ are the odd numbers, which form an [arithmetic sequence](!/algebra/sequences/arithmetic) with first term $1$ and common difference $2$. Summing all the increments gives:

// $$n^2 = 1 + 3 + 5 + \\cdots + (2n - 1)$$

// Every perfect square is a sum of consecutive odd numbers starting from $1$. This identity can be verified by the arithmetic series formula: the sum of the first $n$ odd numbers is $\\frac{n}{2}(1 + (2n-1)) = n^2$.

// The difference between consecutive squares is always odd: $S_n - S_{n-1} = 2n - 1$. This means no two consecutive integers are both perfect squares — there is always an odd gap between neighboring squares, and that gap widens as $n$ grows.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj3: {
//     title: `Properties`,
//     content: `Perfect squares have distinctive divisibility patterns. A perfect square modulo $4$ is always $0$ or $1$ — never $2$ or $3$. This is because even numbers squared give multiples of $4$, and odd numbers squared give $1$ more than a multiple of $4$. Similarly, a perfect square modulo $3$ is always $0$ or $1$ — never $2$.

// The last digit of a perfect square can only be $0, 1, 4, 5, 6,$ or $9$. Any integer ending in $2, 3, 7,$ or $8$ is immediately ruled out as a perfect square, without computing any square root.

// Consecutive perfect squares are always [coprime](!/arithmetic/divisibility): $\\gcd(n^2, (n+1)^2) = 1$, because $\\gcd(n, n+1) = 1$ and the GCD of squares equals the square of the GCD.

// The number of perfect squares up to $N$ is $\\lfloor \\sqrt{N} \\rfloor$. Perfect squares become increasingly sparse — the gap between $n^2$ and $(n+1)^2$ is $2n + 1$, which grows linearly. Among the first $100$ integers, $10$ are perfect squares; among the first $10{,}000$, only $100$ are.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj4: {
//     title: `Sum of Squares`,
//     content: `The sum of the first $n$ square numbers is:

// $$\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}$$

// One derivation uses the telescoping identity $(k+1)^3 - k^3 = 3k^2 + 3k + 1$. Summing both sides from $k = 1$ to $n$:

// $$(n+1)^3 - 1 = 3\\sum k^2 + 3\\sum k + n$$

// Substituting $\\sum k = \\frac{n(n+1)}{2}$ and solving for $\\sum k^2$ gives the result.

// For example, the sum of the first $5$ squares is $1 + 4 + 9 + 16 + 25 = 55$, which matches $\\frac{5 \\cdot 6 \\cdot 11}{6} = 55$.

// This formula contrasts with the [triangular number](!/algebra/sequences/triangular-numbers) sum $\\sum k = \\frac{n(n+1)}{2}$, which is quadratic in $n$. The sum of squares is cubic — each additional term contributes a squared value, making the total grow faster.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj5: {
//     title: `Connections to Triangular Numbers`,
//     content: `Square numbers and [triangular numbers](!/algebra/sequences/triangular-numbers) are linked by the identity:

// $$S_n = T_n + T_{n-1}$$

// Every perfect square is the sum of two consecutive triangular numbers. For $n = 4$: $16 = T_4 + T_3 = 10 + 6$. The geometric proof is direct: cut a square grid of $n^2$ dots along the diagonal staircase. The dots on and above the staircase form a triangle with $n$ rows ($T_n$ dots), and the dots below form a triangle with $n-1$ rows ($T_{n-1}$ dots).

// Another connection runs through Pythagorean triples — sets of three positive integers $(a, b, c)$ satisfying $a^2 + b^2 = c^2$. Every primitive Pythagorean triple can be generated by choosing integers $m > n > 0$ with $\\gcd(m, n) = 1$ and opposite parity, then setting:

// $$a = m^2 - n^2, \\quad b = 2mn, \\quad c = m^2 + n^2$$

// The triple $(3, 4, 5)$ comes from $m = 2, n = 1$; the triple $(5, 12, 13)$ from $m = 3, n = 2$. Pythagorean triples connect square numbers to geometry — each triple defines a right triangle with integer side lengths.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// }


// /algebra/sequences/square-numbers — sectionsContent v2
// 5 callouts: obj1 (1), obj2 (2), obj4 (1), obj5 (1). obj3 untouched.

const sectionsContent = {
  obj1: {
    title: `Definition`,
    content: `The $n$-th square number is:

@academic[formula_callout:Square Number Formula
$$S_n = n^2$$
/algebra/formulas#square_number_formula]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

The name reflects the geometric construction: arrange $n^2$ dots in a square grid with $n$ rows and $n$ columns. The first square numbers are:

@academic[formula_callout:Definition
$$1, 4, 9, 16, 25, 36, 49, 64, 81, 100, \\ldots$$]@

A positive integer is called a **perfect square** if it equals $n^2$ for some integer $n$. Testing whether a number is a perfect square amounts to checking whether its [square root](!/algebra/roots) is an integer.

To list square numbers or test whether a number is a perfect square, use the [square numbers calculator](!/algebra/calculators/sequences/square-numbers).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Recursive Form and Odd Number Sums`,
    content: `Each square number can be built from the previous one by adding an L-shaped border — a **gnomon** — containing $2n - 1$ dots:

@academic[formula_callout:Recursive Form (Square Numbers)
$$S_1 = 1, \\quad S_n = S_{n-1} + (2n - 1)$$
/algebra/formulas#recursive_form_square_numbers]@

The increments $1, 3, 5, 7, 9, \\ldots$ are the odd numbers, which form an [arithmetic sequence](!/algebra/sequences/arithmetic) with first term $1$ and common difference $2$. Summing all the increments gives:

@academic[formula_callout:Sum of First n Odd Numbers
$$n^2 = 1 + 3 + 5 + \\cdots + (2n - 1)$$
/algebra/formulas#sum_of_first_n_odd_numbers]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

@academic[pitfall,aside:true,width:35%:Using the last odd number as n
Taking $1 + 3 + 5 + \\cdots + 99$ as $99^2 = 9801$ squares the last term. The last term is $2n - 1 = 99$, so $n = 50$ and the sum is $50^2 = 2500$.
[Read more](!#pitfalls)]@

Every perfect square is a sum of consecutive odd numbers starting from $1$. This identity can be verified by the arithmetic series formula: the sum of the first $n$ odd numbers is $\\frac{n}{2}(1 + (2n-1)) = n^2$.

The difference between consecutive squares is always odd: $S_n - S_{n-1} = 2n - 1$. This means no two consecutive integers are both perfect squares — there is always an odd gap between neighboring squares, and that gap widens as $n$ grows.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Properties`,
    content: `Perfect squares have distinctive divisibility patterns. A perfect square modulo $4$ is always $0$ or $1$ — never $2$ or $3$. This is because even numbers squared give multiples of $4$, and odd numbers squared give $1$ more than a multiple of $4$. Similarly, a perfect square modulo $3$ is always $0$ or $1$ — never $2$.

The last digit of a perfect square can only be $0, 1, 4, 5, 6,$ or $9$. Any integer ending in $2, 3, 7,$ or $8$ is immediately ruled out as a perfect square, without computing any square root.

@academic[pitfall,aside:true,width:35%:Reading the last-digit test backwards
Calling $26$ a square because it ends in $6$: $5^2 = 25$ and $6^2 = 36$, so $26$ lies between two squares. A good last digit only keeps a number possible; $\\sqrt{N}$ must still be a whole number.
[Read more](!#pitfalls)]@

Both tests are quick filters: each looks at one feature of the number, its remainder or its last digit, and needs no root at all. A number that fails either one is ruled out at once, which makes them useful for large candidates such as $7{,}382$, which ends in $2$, or $15{,}643$, which leaves remainder $3$ on division by $4$.

Consecutive perfect squares are always [coprime](!/arithmetic/divisibility): $\\gcd(n^2, (n+1)^2) = 1$, because $\\gcd(n, n+1) = 1$ and the GCD of squares equals the square of the GCD.

The number of perfect squares up to $N$ is $\\lfloor \\sqrt{N} \\rfloor$. Perfect squares become increasingly sparse — the gap between $n^2$ and $(n+1)^2$ is $2n + 1$, which grows linearly. Among the first $100$ integers, $10$ are perfect squares; among the first $10{,}000$, only $100$ are.

@academic[fact,aside:true,width:35%:Odd tens digits only before a 6
A perfect square with an odd tens digit always ends in $6$, as $16$, $196$ and $576$ do, and every square ending in $6$ has an odd tens digit. Squares leave only the remainders $0, 1, 4, 5, 9$ and $16$ on division by $20$, and only $16$ has an odd tens digit.]@

The last two digits are restricted as well. A number and the number $50$ larger have squares ending in the same two digits, since $(n + 50)^2 = n^2 + 100n + 2500$, and the same holds for $n$ and $50 - n$. The squares of $0$ to $25$ therefore produce every possible ending, and only $22$ of the $100$ endings from $00$ to $99$ ever occur: $00, 01, 04, 09, 16, 21, 24, 25, 29, 36, \\ldots$`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Sum of Squares`,
    content: `The sum of the first $n$ square numbers is:

@academic[formula_callout:Sum of Squares
$$\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}$$
/algebra/formulas#sum_of_squares]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

One derivation uses the telescoping identity $(k+1)^3 - k^3 = 3k^2 + 3k + 1$. Summing both sides from $k = 1$ to $n$:

@academic[formula_callout:Sum of Squares
$$(n+1)^3 - 1 = 3\\sum k^2 + 3\\sum k + n$$]@

Substituting $\\sum k = \\frac{n(n+1)}{2}$ and solving for $\\sum k^2$ gives the result.

For example, the sum of the first $5$ squares is $1 + 4 + 9 + 16 + 25 = 55$, which matches $\\frac{5 \\cdot 6 \\cdot 11}{6} = 55$.

@academic[pitfall,aside:true,width:35%:Squaring the sum instead of summing the squares
Writing $1^2 + 2^2 + \\cdots + 5^2$ as $(1 + 2 + \\cdots + 5)^2$ gives $15^2 = 225$. Each term is squared separately: $1 + 4 + 9 + 16 + 25 = 55$.
[Read more](!#pitfalls)]@

This formula contrasts with the [triangular number](!/algebra/sequences/triangular-numbers) sum $\\sum k = \\frac{n(n+1)}{2}$, which is quadratic in $n$. The sum of squares is cubic — each additional term contributes a squared value, making the total grow faster.

Stacked cannonballs show the sum in solid form. A square pyramid of balls with an $n \\times n$ layer at the bottom, an $(n-1) \\times (n-1)$ layer above it, and so on up to a single ball at the top holds exactly $1^2 + 2^2 + \\cdots + n^2$ balls: $55$ for a pyramid $5$ layers high and $385$ for one $10$ layers high.

@academic[fact,aside:true,width:35%:A pyramid that flattens into a square
A pyramid of cannonballs $24$ layers high holds $\\frac{24 \\cdot 25 \\cdot 49}{6} = 100 \\cdot 49 = 70^2$ balls, so it can be laid out flat as a $70 \\times 70$ square. Apart from a single ball, it is the only such pyramid: G. N. Watson proved this in 1918.]@

For large $n$ the count is close to $\\frac{n^3}{3}$, because the formula expands to $\\frac{n(n+1)(2n+1)}{6} = \\frac{n^3}{3} + \\frac{n^2}{2} + \\frac{n}{6}$. The leading term $\\frac{n^3}{3}$ is the volume of a solid pyramid with an $n \\times n$ base and height $n$, and the balls overshoot it by $\\frac{n^2}{2} + \\frac{n}{6}$: for $n = 10$, that is $385 - 333\\frac{1}{3} = 51\\frac{2}{3}$.

@academic[punchline:Summing squares raises the degree by one: the first $n$ squares add up to a cubic in $n$, close to $\\frac{n^3}{3}$.]@`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Connections to Triangular Numbers`,
    content: `Square numbers and [triangular numbers](!/algebra/sequences/triangular-numbers) are linked by the identity:

@academic[formula_callout:Connections to Triangular Numbers
$$S_n = T_n + T_{n-1}$$]@

Every perfect square is the sum of two consecutive triangular numbers. For $n = 4$: $16 = T_4 + T_3 = 10 + 6$. The geometric proof is direct: cut a square grid of $n^2$ dots along the diagonal staircase. The dots on and above the staircase form a triangle with $n$ rows ($T_n$ dots), and the dots below form a triangle with $n-1$ rows ($T_{n-1}$ dots).

Another connection runs through Pythagorean triples — sets of three positive integers $(a, b, c)$ satisfying $a^2 + b^2 = c^2$. Every primitive Pythagorean triple, with its legs in either order, can be generated by choosing integers $m > n > 0$ with $\\gcd(m, n) = 1$ and opposite parity, then setting:

@academic[formula_callout:Pythagorean Triple Generator
$$a = m^2 - n^2, \\quad b = 2mn, \\quad c = m^2 + n^2$$
/algebra/formulas#pythagorean_triple_generator]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

The triple $(3, 4, 5)$ comes from $m = 2, n = 1$; the triple $(5, 12, 13)$ from $m = 3, n = 2$. Pythagorean triples connect square numbers to geometry — each triple defines a right triangle with integer side lengths.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Common Pitfalls`,
    content: `Three mistakes come up again and again with square numbers. Each one is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Using the last odd number as n**

In the identity $n^2 = 1 + 3 + 5 + \\cdots + (2n - 1)$, $n$ is the number of odd terms, not the last term. Squaring the last odd number counts far too many terms.

Wrong working:
$$1 + 3 + 5 + \\cdots + 99 = 99^2 = 9801$$

Right working: the last term is $2n - 1$, so $2n - 1 = 99$ gives $n = 50$ terms.
$$1 + 3 + 5 + \\cdots + 99 = 50^2 = 2500$$

Why it happens: in the sum of the first $n$ positive integers the last term is $n$ itself, and that habit carries over to the odd numbers, where the last term is $2n - 1$.

How to check: try a short case. $1 + 3 + 5 = 9 = 3^2$, with $3$ terms, while squaring the last term would give $5^2 = 25$. Also, $50$ terms that are each below $100$ add up to less than $50 \\cdot 100 = 5000$, so $9801$ is too large.

**Reading the last-digit test backwards**

The last-digit rule and the remainder rules say what a square cannot look like. They are used the other way round, as if every number with an allowed last digit or remainder were a square.

Wrong working: $26$ ends in $6$, an allowed last digit, and $13$ leaves remainder $1$ on division by $4$, an allowed remainder, so both are taken to be perfect squares.

Right working: the tests can only rule numbers out. To confirm a square, its square root must be a whole number:
$$5^2 = 25 < 26 < 36 = 6^2, \\quad 3^2 = 9 < 13 < 16 = 4^2$$
so neither $26$ nor $13$ is a perfect square. A number that passes, such as $676$, needs the same check: $26^2 = 676$, so it is a square.

Why it happens: the tests are quick and look like a full answer, and the difference between "every square ends in $0, 1, 4, 5, 6$ or $9$" and "every number ending in those digits is a square" is easy to miss.

How to check: find the two consecutive squares around the number. If it equals neither, it is not a square, whatever its last digit. Most numbers pass the digit test: $6$ of the $10$ possible last digits are allowed, while only $10$ of the first $100$ integers are squares.

**Squaring the sum instead of summing the squares**

The sum $\\sum k^2$ is read as $\\left(\\sum k\\right)^2$: the numbers are added first and the total is squared, instead of each number being squared first.

Wrong working:
$$1^2 + 2^2 + 3^2 + 4^2 + 5^2 = (1 + 2 + 3 + 4 + 5)^2 = 15^2 = 225$$

Right working:
$$1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 1 + 4 + 9 + 16 + 25 = 55$$
which matches $\\frac{5 \\cdot 6 \\cdot 11}{6} = 55$.

Why it happens: squaring looks as if it should pass through a sum, the way multiplication by a constant does. It does not: $(a + b)^2 = a^2 + 2ab + b^2$, and the cross terms $2ab$ are what make $225$ so much larger than $55$.

How to check: use $n = 2$. $1^2 + 2^2 = 5$, while $(1 + 2)^2 = 9$. The formula gives $\\frac{2 \\cdot 3 \\cdot 5}{6} = 5$.`,
    before: ``,
    after: ``,
    link: '',
  },
}


  const introContent = {
  id: 'intro',
  title: `Perfect Squares as a Sequence`,
  content: `The square numbers $1, 4, 9, 16, 25, \\ldots$ are among the most recognizable sequences in mathematics. Each is the product of an integer with itself, each can be visualized as dots filling a square grid, and each is a sum of consecutive odd numbers. Their properties connect to arithmetic sequences, triangular numbers, and divisibility.`,
}

  const faqQuestions = {
    obj1: {
      question: "How can you tell at a glance that a number is not a perfect square?",
      answer: "Check its last digit. Perfect squares can only end in $0, 1, 4, 5, 6$ or $9$, so anything ending in $2, 3, 7$ or $8$ is ruled out immediately without computing a root. A stronger test uses remainders: a perfect square is always $0$ or $1$ modulo $4$, and never $2$ or $3$.",
      sectionId: "3"
    },
    obj2: {
      question: "How rare are perfect squares among the integers?",
      answer: "They thin out steadily, because the gap between $n^2$ and $(n+1)^2$ is $2n + 1$ and grows without limit. The count up to $N$ is $\\lfloor \\sqrt{N} \\rfloor$, so ten of the first hundred integers are perfect squares, but only a hundred of the first ten thousand. The proportion keeps falling.",
      sectionId: "3"
    },
    obj3: {
      question: "Can two consecutive perfect squares share a common factor?",
      answer: "Never, other than $1$. Consecutive squares are always coprime: $\\gcd(n^2, (n+1)^2) = 1$. It follows from the fact that $n$ and $n + 1$ are themselves coprime, since consecutive integers share no factor, and squaring preserves that because the GCD of squares is the square of the GCD.",
      sectionId: "3"
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Square Numbers Sequence",
      "description": "Learn square numbers: perfect squares, sum of consecutive odd numbers, sum of squares formula, divisibility properties, and connections to triangular numbers.",
      "url": "https://www.learnmathclass.com/algebra/sequences/square-numbers",
      "inLanguage": "en-US",
      "learningResourceType": "Explanation",
      "educationalLevel": "Middle School, High School, College",
      "educationalUse": "Learning",
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student"
      },
      "about": {
        "@type": "Thing",
        "name": "Square Numbers"
      },
      "teaches": [
        "Definition of square numbers and perfect squares",
        "Recursive form using gnomons and the sum of consecutive odd numbers",
        "Divisibility patterns, last-digit rule, and modular constraints on perfect squares",
        "Closed-form formula for the sum of the first n square numbers",
        "Connection between square numbers and consecutive triangular numbers",
        "Pythagorean triples and how square numbers parameterize integer right triangles"
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
          "name": "Square Numbers",
          "item": "https://www.learnmathclass.com/algebra/sequences/square-numbers"
        }
      ]
    },
  }


  const sqDot = (i, j, color) => ({ fn: () => j, from: i, to: i, ends: ['closed', 'closed'], color });
  const sqGrid = (n, pick) => { const out = []; for (let i = 1; i <= n; i++) for (let j = 1; j <= n; j++) out.push(sqDot(i, j, pick(i, j))); return out; };
  const fpGnomons = { kind: 'pieces', svgTitle: 'A 5 by 5 square of dots built from L-shaped layers of 1, 3, 5, 7, 9 dots', xRange: [0, 6.5], yRange: [0, 6.2], xLetter: 'n', yLetter: 'n',
    pieces: sqGrid(5, (i, j) => (Math.max(i, j) % 2 ? 'f' : 'r')),
    notes: [1, 2, 3, 4, 5].map((k) => ({ x: k + 0.12, y: k + 0.28, text: k === 1 ? '1' : '+' + (2 * k - 1), pos: 'e', color: k % 2 ? 'f' : 'r' })),
    caption: '1 + 3 + 5 + 7 + 9 = 25: each L-shaped layer adds the next odd number' };
  const fpTwoTriangles = { kind: 'pieces', svgTitle: 'A 4 by 4 square of dots cut along the staircase into 10 dots and 6 dots', xRange: [0, 5.5], yRange: [0, 5.2], xLetter: 'n', yLetter: 'n',
    pieces: [{ fn: (x) => x - 0.5, from: 99, to: 99, ends: [null, null], color: 'g', ghost: [[0.6, 4.6]] }, ...sqGrid(4, (i, j) => (j >= i ? 'f' : 'r'))],
    notes: [{ x: 0.3, y: 4.75, text: 'blue: T₄ = 1 + 2 + 3 + 4 = 10', pos: 'e', color: 'f' }, { x: 2.6, y: 0.45, text: 'amber: T₃ = 6', pos: 'e', color: 'r' }],
    caption: '4² = 16 = T₄ + T₃ = 10 + 6: a square is two staircase triangles' };
  const demoUnits = {
    gnomons: demoUnitFrame({
      svg: renderFunctionPlotV4(fpGnomons),
      caption: 'A square built from odd layers',
      text: 'A 5 &#215; 5 square of dots, coloured by layer. The corner dot is 1. Each next layer is an L-shape wrapped around the square before it: 3 dots to make 2 &#215; 2, then 5, 7 and 9. A layer around an (n &#8722; 1) &#215; (n &#8722; 1) square needs n dots along the top and n &#8722; 1 down the side, which is 2n &#8722; 1, so 1 + 3 + 5 + 7 + 9 = 5&#178; = 25.',
    }),
    twoTriangles: demoUnitFrame({
      svg: renderFunctionPlotV4(fpTwoTriangles),
      caption: 'A square cut into two triangles',
      text: 'The section&#8217;s n = 4. The dashed staircase line splits the 4 &#215; 4 square of dots in two. The blue dots on and above it come in columns of 4, 3, 2 and 1, the triangular number T&#8324; = 10. The amber dots below come in columns of 3, 2 and 1, which is T&#8323; = 6. Together they fill the square: 10 + 6 = 16.',
    }),
  };

   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
         demoUnits,
          seoData: {
        title: "Square Numbers: Perfect Squares Formula | Learn Math Class",
        description: "Learn square numbers: perfect squares, sum of consecutive odd numbers, sum of squares formula, divisibility properties, and connections to triangular numbers.",
        keywords: keyWords.join(", "),
        url: "/algebra/sequences/square-numbers",
         name: "Square Numbers Sequence"
      },

       }
    }
   }

export default function SquareNumbersPage({seoData, sectionsContent, introContent, faqQuestions, schemas, demoUnits}) {


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
          <div key={'unit-gnomons'} dangerouslySetInnerHTML={{ __html: demoUnits.gnomons }} />,
          `The layers grow by 2 each time, so the gaps between consecutive squares are the odd numbers.`,
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
          <div key={'unit-twoTriangles'} dangerouslySetInnerHTML={{ __html: demoUnits.twoTriangles }} />,
          `The same cut works for every n: n² = Tₙ + Tₙ₋₁.`,
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
        title:`Square Numbers FAQ`,
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Square Numbers</h1>
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