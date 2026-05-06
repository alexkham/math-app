import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'

export async function getStaticProps() {

  const keyWords = [
  "algebraic identities",
  "binomial expansion",
  "difference of squares",
  "sum of cubes",
  "difference of cubes",
  "perfect square trinomial",
  "binomial theorem",
  "Pascal triangle coefficients",
  "factoring patterns",
  "polynomial identities",
  "square of binomial",
  "cube of binomial",
  "trinomial expansion",
  "Sophie Germain identity",
  "conjugate binomials"
]

const obj1Table = `
<table style="border-collapse: collapse; width: 60%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="background: #06357a; color: white; padding: 15px; text-align: left; font-weight: bold;">Pattern</th>
      <th style="background: #06357a; color: white; padding: 15px; text-align: left; font-weight: bold;">Expanded form</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">(a + b)²</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a² + 2ab + b²</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">(a − b)²</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a² − 2ab + b²</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">(a + b)(a − b)</td>
      <td style="padding: 12px 15px; color: #34495e;">a² − b²</td>
    </tr>
  </tbody>
</table>
`


const obj2Table = `
<table style="border-collapse: collapse; width: 60%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="background: #06357a; color: white; padding: 15px; text-align: left; font-weight: bold;">Pattern</th>
      <th style="background: #06357a; color: white; padding: 15px; text-align: left; font-weight: bold;">Expanded form</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">(a + b)³</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a³ + 3a²b + 3ab² + b³</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">(a − b)³</td>
      <td style="padding: 12px 15px; color: #34495e;">a³ − 3a²b + 3ab² − b³</td>
    </tr>
  </tbody>
</table>
`


const obj5Table = `
<table style="border-collapse: collapse; width: 60%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="background: #06357a; color: white; padding: 15px; text-align: left; font-weight: bold;">Pattern</th>
      <th style="background: #06357a; color: white; padding: 15px; text-align: center; font-weight: bold;">Factors over ℝ?</th>
      <th style="background: #06357a; color: white; padding: 15px; text-align: left; font-weight: bold;">Factorization</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">a² − b²</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a + b)(a − b)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">a² + b²</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">irreducible over ℝ; (a + bi)(a − bi) over ℂ</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">a³ − b³</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a − b)(a² + ab + b²)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">a³ + b³</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a + b)(a² − ab + b²)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">a⁴ − b⁴</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a − b)(a + b)(a² + b²)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">aⁿ − bⁿ (any n)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a − b)(aⁿ⁻¹ + aⁿ⁻²b + ⋯ + bⁿ⁻¹)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">aⁿ + bⁿ (odd n only)</td>
      <td style="padding: 12px 15px; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; color: #34495e;">(a + b)(aⁿ⁻¹ − aⁿ⁻²b + ⋯ + bⁿ⁻¹)</td>
    </tr>
  </tbody>
</table>
`

const summaryTable = `
<table style="border-collapse: collapse; width: 60%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="background: #06357a; color: white; padding: 15px; text-align: left; font-weight: bold;">Family</th>
      <th style="background: #06357a; color: white; padding: 15px; text-align: left; font-weight: bold;">Identity</th>
      <th style="background: #06357a; color: white; padding: 15px; text-align: left; font-weight: bold;">Where it's used</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Square of a sum</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a + b)² = a² + 2ab + b²</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">completing the square, perfect square trinomials</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Square of a difference</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a − b)² = a² − 2ab + b²</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">completing the square, expansions</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Difference of squares</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a² − b² = (a + b)(a − b)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factoring, rationalizing denominators</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Cube of a sum</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a + b)³ = a³ + 3a²b + 3ab² + b³</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cubic expansions, depressed cubics</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Cube of a difference</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a − b)³ = a³ − 3a²b + 3ab² − b³</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cubic expansions, depressed cubics</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Sum of cubes</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a³ + b³ = (a + b)(a² − ab + b²)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factoring cubics</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Difference of cubes</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a³ − b³ = (a − b)(a² + ab + b²)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factoring cubics</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Binomial theorem</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a + b)ⁿ = Σ C(n,k) aⁿ⁻ᵏ bᵏ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">general expansions of any degree</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Square of a trinomial</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a + b + c)² = a² + b² + c² + 2ab + 2ac + 2bc</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">three-variable expansions</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">aⁿ − bⁿ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a − b)(aⁿ⁻¹ + aⁿ⁻²b + ⋯ + bⁿ⁻¹)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factoring any degree, (a − b) always divides</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">aⁿ + bⁿ (odd n)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a + b)(aⁿ⁻¹ − aⁿ⁻²b + ⋯ + bⁿ⁻¹)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factoring odd-degree sums only</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Sophie Germain</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a⁴ + 4b⁴ = (a² + 2ab + 2b²)(a² − 2ab + 2b²)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">specialty factoring</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Sum of squares (over ℂ)</td>
      <td style="padding: 12px 15px; color: #34495e;">a² + b² = (a + bi)(a − bi)</td>
      <td style="padding: 12px 15px; color: #34495e;">complex number factoring</td>
    </tr>
  </tbody>
</table>
`


  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `
## Polynomial structure

- [Polynomial](!/algebra/definitions#polynomial) — the family of expressions all these identities operate on
- [Binomial](!/algebra/definitions#binomial) — most identities expand or factor expressions of the form $a \\pm b$
- [Trinomial](!/algebra/definitions#trinomial) — three-term expressions appearing in obj4
- [Coefficient](!/algebra/definitions#coefficient) — the numerical factors generated by expansion (e.g., the $3$ in $3a^2b$)

## Identity types

- [Identity](!/algebra/definitions#identity) — an equation true for every value of its variables
- [Difference of Squares](!/algebra/definitions#difference_of_squares) — $a^2 - b^2 = (a+b)(a-b)$
- [Perfect Square Trinomial](!/algebra/definitions#perfect_square_trinomial) — $a^2 \\pm 2ab + b^2 = (a \\pm b)^2$
- [Sum and Difference of Cubes](!/algebra/definitions#sum_and_difference_of_cubes) — $a^3 \\pm b^3$ factorizations

## Higher-degree tools

- [Binomial Coefficient](!/combinatorics/binomial-coefficient) — $\\binom{n}{k}$, the coefficients in $(a+b)^n$
- [Binomial Theorem](!/combinatorics/binomial-theorem) — the general formula for $(a+b)^n$
`,
      before: ``,
      after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
      link: '',
    },

    obj1: {
      title: `Squares of Binomials`,
      content: `Three identities form the foundation of nearly all polynomial work. Squaring a sum, squaring a difference, and multiplying conjugate binomials produce predictable results that appear constantly in [factoring](!/algebra/polynomials/factoring), [completing the square](!/algebra/equations/quadratic#3), simplifying rational expressions, and solving [quadratic equations](!/algebra/equations/quadratic).

The middle term is what gets missed most often. Squaring $(a+b)$ does not give $a^2 + b^2$ — the cross term $2ab$ comes from the two outer-and-inner products that survive distribution. The conjugate product $(a+b)(a-b)$ is the exception: there the cross terms cancel, leaving a clean [difference of squares](!/algebra/polynomials/factoring#6) — the most heavily used factoring pattern in algebra.

Geometrically, $(a+b)^2$ is the area of a square with side $a+b$, dissected into one $a \\times a$ square, one $b \\times b$ square, and two $a \\times b$ rectangles. The cross term $2ab$ counts those two rectangles. Once that picture is in working memory, the formula becomes unforgettable. The reverse direction — recognizing $a^2 + 2ab + b^2$ as a [perfect square trinomial](!/algebra/polynomials/factoring#7) — is what lets you collapse three terms into one squared binomial on sight.


`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Cubes of Binomials`,
      content: `Cubing a binomial extends the squaring pattern by one degree. Four terms appear instead of three, with coefficients $1, 3, 3, 1$ governing the expansion. The signs alternate when the binomial is a difference, exactly as they did in the squared case.

These identities show up in [polynomial factoring](!/algebra/polynomials/factoring), in algebraic manipulation involving cubic expressions, and as a stepping stone toward the general binomial theorem. Recognizing $a^3 + 3a^2b + 3ab^2 + b^3$ as $(a+b)^3$ on sight saves the work of factoring it from scratch. The reverse-direction counterparts — the [sum and difference of cubes](!/algebra/polynomials/factoring#8) — are different identities entirely and live in obj5 below; do not confuse the two.

The structural pattern — descending powers of $a$, ascending powers of $b$, symmetric coefficients — is the same one that governs every higher power. Squares and cubes are the two cases worth committing to memory directly; beyond that, the binomial theorem takes over.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Higher Powers and the Binomial Theorem`,
      content: `The pattern in $(a+b)^2$ and $(a+b)^3$ generalizes. For any positive integer $n$:

$$(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k$$

This is the [binomial theorem](!/combinatorics/binomial-theorem). The expansion has $n+1$ terms; the powers of $a$ descend from $n$ to $0$ while the powers of $b$ ascend from $0$ to $n$. The numerical coefficients are the [binomial coefficients](!/combinatorics/binomial-coefficient) $\\binom{n}{k}$, which can be read directly off Pascal's triangle.

The fourth and fifth powers expand to:

$$(a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$$

$$(a+b)^5 = a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5$$

The coefficients $1,4,6,4,1$ and $1,5,10,10,5,1$ are the corresponding rows of Pascal's triangle. For a difference $(a-b)^n$, the same coefficients appear with alternating signs: every odd-indexed term (counting from $k=0$) flips sign, since $(-b)^k$ is negative when $k$ is odd.

Memorizing every higher power is unnecessary. The formula handles them all. What matters is recognizing when the binomial theorem applies and being able to read off any specific term — the term containing $b^k$ is $\\binom{n}{k} a^{n-k} b^k$, no full expansion required.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Trinomial Expansions`,
      content: `When three terms are squared or cubed, the expansion produces every pairwise product of the original terms, each appearing twice (or more) due to the multiple ways factors can combine.

The square of a trinomial follows directly from term-by-term [multiplication](!/algebra/polynomials/operations#5):

$$(a+b+c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc$$

Three squared terms and three doubled cross-products — one for each pair of original terms. The pattern generalizes: squaring a sum of $k$ terms produces $k$ squares plus $\\binom{k}{2}$ doubled cross-products.

The cube of a trinomial is heavier:

$$(a+b+c)^3 = a^3 + b^3 + c^3 + 3(a^2b + a^2c + ab^2 + b^2c + ac^2 + bc^2) + 6abc$$

Three cubed terms, six trinomial cross-products of the form $a^2b$ each with coefficient $3$, and one central term $6abc$ where every variable appears once. The full multinomial theorem governs expansions like these in general, but for three variables at degree two or three, memorizing the pattern is faster than recomputing.

A useful identity hidden in the cubic case is $a^3 + b^3 + c^3 - 3abc = (a+b+c)(a^2+b^2+c^2 - ab - ac - bc)$, which factors a symmetric polynomial that resists the standard sum-of-cubes approach when three variables are involved.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Sums and Differences of Powers`,
      content: `These identities run in the opposite direction to the binomial expansions in obj1–obj3: they take a two-term expression and break it into factors. The two anchors are the [difference of squares](!/algebra/polynomials/factoring#6) and the [sum and difference of cubes](!/algebra/polynomials/factoring#8), but the pattern extends to every degree.

The difference of squares $a^2 - b^2 = (a+b)(a-b)$ is the most-used factoring identity in algebra, appearing constantly in simplification, rationalization, and solving equations. Its sum counterpart $a^2 + b^2$ does not factor over the real numbers — but over the [complex numbers](!/complex-numbers) it splits as $(a+bi)(a-bi)$, with the imaginary unit supplying what the reals lack.

The cubes split cleanly in both directions:

$$a^3 - b^3 = (a-b)(a^2 + ab + b^2)$$

$$a^3 + b^3 = (a+b)(a^2 - ab + b^2)$$

The quadratic factors $a^2 \\pm ab + b^2$ are irreducible over the reals (their discriminants are negative), so this factorization is the end of the line for cubes over $\\mathbb{R}$.

For higher powers, two general patterns govern everything. The difference $a^n - b^n$ always factors — $(a-b)$ divides it for any positive integer $n$:

$$a^n - b^n = (a-b)(a^{n-1} + a^{n-2}b + a^{n-3}b^2 + \\cdots + b^{n-1})$$

The sum $a^n + b^n$ factors only when $n$ is odd, with $(a+b)$ as the divisor:

$$a^n + b^n = (a+b)(a^{n-1} - a^{n-2}b + a^{n-3}b^2 - \\cdots + b^{n-1}) \\quad (n \\text{ odd})$$

When $n$ is even, $a^n + b^n$ is irreducible over the reals. The case $a^4 - b^4$ is worth noting separately because it factors twice — first as a difference of squares, then again because $a^2 - b^2$ factors further: $(a-b)(a+b)(a^2+b^2)$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Useful Specials`,
      content: `A handful of less common identities recur often enough to deserve a place alongside the standard ones. None of them follow from a general theorem the way the binomial expansions do — each is a specific algebraic fact worth recognizing on sight.

The Sophie Germain identity factors $a^4 + 4b^4$, an expression that looks irreducible at first glance:

$$a^4 + 4b^4 = (a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2)$$

It surfaces in number theory and contest problems where $a^4 + 4b^4$ appears and would otherwise resist factoring.

Two paired identities link sums and differences of squared binomials:

$$(a+b)^2 + (a-b)^2 = 2(a^2 + b^2)$$

$$(a+b)^2 - (a-b)^2 = 4ab$$

The first reduces a sum of squared sum and squared difference; the second extracts the product $ab$ from the same pair. Both are useful when manipulating expressions where $a+b$ and $a-b$ appear together.

A symmetric three-variable identity:

$$a^2 + b^2 + c^2 - ab - ac - bc = \\tfrac{1}{2}\\left[(a-b)^2 + (b-c)^2 + (a-c)^2\\right]$$

Recognizing this form proves the expression is non-negative for all real $a, b, c$, which is otherwise non-obvious.

A factorable quartic that is not a perfect square:

$$a^4 + a^2b^2 + b^4 = (a^2 + ab + b^2)(a^2 - ab + b^2)$$

This one looks like a difference of squares hiding inside a sum, and it appears in factoring problems where the standard patterns fail.

Finally, over the [complex numbers](!/complex-numbers), the sum of two squares factors using the imaginary unit:

$$a^2 + b^2 = (a + bi)(a - bi)$$

Over $\\mathbb{R}$ this expression is irreducible; over $\\mathbb{C}$ it splits cleanly, and the factorization is the basis for using complex conjugates to handle expressions that have no real factorization.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Summary of Algebraic Identities`,
      content: `The table below collects every identity from this page in one place. Use it as a reference card — for each pattern, the table shows the canonical form and the contexts where the identity does the most work.`,
      before: ``,
      after: ``,
      link: '',
    },

  }

  const introContent = {
    id: "intro",
    title: "Shortcuts Worth Memorizing",
    content: `An algebraic identity is an [equation](!/algebra/equations) that holds for every value of its variables — not a problem to solve, but a structural fact about how operations interact. The identity $(a+b)^2 = a^2 + 2ab + b^2$ is true whether $a$ and $b$ are integers, fractions, irrationals, or expressions. It describes what squaring a sum does, regardless of what is being squared.

The point of memorizing these patterns is speed. Anyone can derive $(a+b)(a-b) = a^2 - b^2$ by [distribution](!/algebra/polynomials/operations#5), but doing so every time it appears wastes effort. Recognizing the pattern on sight — in either direction — turns a multi-step expansion into a single move. Read left to right, an identity expands. Read right to left, the same identity [factors](!/algebra/polynomials/factoring). Both readings matter.

The identities below are grouped by shape: squares first, then cubes, then higher powers, then expressions in three terms, then the sum and difference of powers, and finally a small set of less common forms that recur often enough to deserve a place in working memory.`
  }


  const faqQuestions = {
  obj1: {
    question: "What is the formula for squaring a binomial?",
    answer: "(a + b)² = a² + 2ab + b² and (a - b)² = a² - 2ab + b². The middle term 2ab comes from the cross-product in distribution. Conjugate binomials (a+b)(a-b) give a² - b², the difference of squares.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the formula for cubing a binomial?",
    answer: "(a + b)³ = a³ + 3a²b + 3ab² + b³ and (a - b)³ = a³ - 3a²b + 3ab² - b³. The coefficients 1, 3, 3, 1 follow the pattern that generalizes to all powers via the binomial theorem.",
    sectionId: "2"
  },
  obj3: {
    question: "What is the binomial theorem?",
    answer: "The binomial theorem expands (a+b)ⁿ as the sum of terms C(n,k)·aⁿ⁻ᵏ·bᵏ for k from 0 to n. The coefficients C(n,k) are binomial coefficients found in Pascal's triangle. For (a-b)ⁿ, signs alternate.",
    sectionId: "3"
  },
  obj4: {
    question: "How do you expand the square of a trinomial?",
    answer: "(a + b + c)² = a² + b² + c² + 2ab + 2ac + 2bc. Each variable is squared once, and every pair of variables produces a doubled cross-product. The pattern extends to any number of terms.",
    sectionId: "4"
  },
  obj5: {
    question: "What are the sum and difference of cubes formulas?",
    answer: "a³ - b³ = (a - b)(a² + ab + b²) and a³ + b³ = (a + b)(a² - ab + b²). The quadratic factors are irreducible over real numbers. For any n, aⁿ - bⁿ always factors with (a - b); aⁿ + bⁿ factors only when n is odd.",
    sectionId: "5"
  },
  obj6: {
    question: "Does the sum of squares factor?",
    answer: "Over real numbers, a² + b² is irreducible and cannot be factored. Over complex numbers, it factors as (a + bi)(a - bi) using the imaginary unit. This is why conjugate pairs appear in complex factorization.",
    sectionId: "6"
  },
  obj7: {
    question: "What is the Sophie Germain identity?",
    answer: "a⁴ + 4b⁴ = (a² + 2ab + 2b²)(a² - 2ab + 2b²). This identity factors an expression that appears irreducible at first glance. It surfaces in number theory and competition problems.",
    sectionId: "6"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Algebraic Identities",
    "description": "Master algebraic identities: squares and cubes of binomials, binomial theorem, trinomial expansions, difference of squares, sum and difference of cubes, higher-power factorizations, and special identities.",
    "url": "https://www.learnmathclass.com/algebra/identities",
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
      "name": "Algebraic Identities"
    },
    "teaches": [
      "Squares of binomials and difference of squares",
      "Cubes of binomials",
      "Binomial theorem and Pascal's triangle",
      "Trinomial expansions",
      "Sum and difference of powers",
      "Special identities including Sophie Germain",
      "Factoring using algebraic identities"
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
        "name": "Algebraic Identities",
        "item": "https://www.learnmathclass.com/algebra/identities"
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

  return {
  props: {
    sectionsContent,
    introContent,
    obj1Table,
    obj2Table,
    obj5Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Algebraic Identities: Binomials, Cubes & Factoring | Learn Math Class",
      description: "Master algebraic identities: squares and cubes of binomials, binomial theorem, trinomial expansions, difference of squares, sum and difference of cubes, higher-power factorizations, and special identities.",
      keywords: keyWords.join(", "),
      url: "/algebra/identities",
      name: "Algebraic Identities"
    },
  }
}
}

export default function AlgebraicIdentitiesPage({
  seoData,
  sectionsContent,
  introContent,
  obj1Table,
  obj2Table,
  obj5Table,
  summaryTable,
  faqQuestions,
  schemas,
}) {

  const genericSections = [
    {
      id: '0',
      title: sectionsContent.obj0.title,
      link: sectionsContent.obj0.link,
      content: [
        sectionsContent.obj0.content,
      ]
    },
    {
      id: '1',
      title: sectionsContent.obj1.title,
      link: sectionsContent.obj1.link,
      content: [
        sectionsContent.obj1.content,
        <div
          key={'obj1-table'}
          style={{ margin: '20px auto', width: '100%' }}
          dangerouslySetInnerHTML={{ __html: obj1Table }}
        />,
      ]
    },
    {
      id: '2',
      title: sectionsContent.obj2.title,
      link: sectionsContent.obj2.link,
      content: [
        sectionsContent.obj2.content,
        <div
          key={'obj2-table'}
          style={{ margin: '20px auto', width: '100%' }}
          dangerouslySetInnerHTML={{ __html: obj2Table }}
        />,
      ]
    },
    {
      id: '3',
      title: sectionsContent.obj3.title,
      link: sectionsContent.obj3.link,
      content: [
        sectionsContent.obj3.content,
      ]
    },
    {
      id: '4',
      title: sectionsContent.obj4.title,
      link: sectionsContent.obj4.link,
      content: [
        sectionsContent.obj4.content,
      ]
    },
    {
      id: '5',
      title: sectionsContent.obj5.title,
      link: sectionsContent.obj5.link,
      content: [
        sectionsContent.obj5.content,
        <div
          key={'obj5-table'}
          style={{ margin: '20px auto', width: '100%' }}
          dangerouslySetInnerHTML={{ __html: obj5Table }}
        />,
      ]
    },
    {
      id: '6',
      title: sectionsContent.obj6.title,
      link: sectionsContent.obj6.link,
      content: [
        sectionsContent.obj6.content,
      ]
    },
    {
      id: '7',
      title: sectionsContent.obj7.title,
      link: sectionsContent.obj7.link,
      content: [
        sectionsContent.obj7.content,
        <div
          key={'summary-table'}
          style={{ margin: '20px auto', width: '100%' }}
          dangerouslySetInnerHTML={{ __html: summaryTable }}
        />,
      ]
    },
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

  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.faq)
    }}
  />
</Head>
      <br />
      <br />
      <br />
      <br />
      <OperaSidebar
        side='right'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb />
      <br />
      <br />
      <h1 className='title' style={{ marginTop: '-50px', marginBottom: '0px' }}>Algebraic Identities</h1>
      <br />
      <br />
      <SectionTableOfContents
        sections={genericSections}
        showSecondaryNav={true}
        secondaryNavMode="siblings"
        secondaryNavTitle="More in this Section"
      />
      <br />
      <br />
      <br />
      <IntroSection
        id={introContent.id}
        title={introContent.title}
        content={introContent.content}
        backgroundColor='#f9fafb'
        textColor="#06357a"
      />
      <br />
      <KeyTermsCard
        id="0"
        title={sectionsContent.obj0.title}
        content={sectionsContent.obj0.content}
        after={sectionsContent.obj0.after}
        variant="light"
      />
      <br />
      <Sections sections={genericSections.slice(1)} />
      <br />
      <br />
      <br />
    </>
  )
}