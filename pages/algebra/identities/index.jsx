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
import identityDiagrams from '@/app/components/algebra/identities/identityDiagrams'
import binomialCoefficientDiagrams from '@/app/components/algebra/visualizers/binomial/binomialCoefficientDiagrams'
import TaxonomyOutline from '@/app/components/infographics/TaxonomyOutline/TaxonomyOutline'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'

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
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">aⁿ + bⁿ (odd n)</td>
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
- [Trinomial](!/algebra/definitions#trinomial) — three-term expressions appearing in Trinomial Expansions
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

@academic[fact,aside:true,width:35%:A shortcut for mental multiplication
$49 \\cdot 51 = (50 - 1)(50 + 1) = 50^2 - 1 = 2499$. Any two numbers the same distance from an easy square multiply this way, in your head.]@

The middle term is what gets missed most often. Squaring $(a+b)$ does not give $a^2 + b^2$ — the cross term $2ab$ comes from the two outer-and-inner products that survive distribution. The conjugate product $(a+b)(a-b)$ is the exception: there the cross terms cancel, leaving a clean [difference of squares](!/algebra/polynomials/factoring#6) — the most heavily used factoring pattern in algebra.

Geometrically, $(a+b)^2$ is the area of a square with side $a+b$, dissected into one $a \\times a$ square, one $b \\times b$ square, and two $a \\times b$ rectangles. The cross term $2ab$ counts those two rectangles. Once that picture is in working memory, the formula becomes unforgettable. The reverse direction — recognizing $a^2 + 2ab + b^2$ as a [perfect square trinomial](!/algebra/polynomials/factoring#7) — is what lets you collapse three terms into one squared binomial on sight.

@academic[pitfall,aside:true,width:35%:Squaring only the letter
Writing $(2x + 3)^2$ as $2x^2 + 12x + 9$ squares the $x$ but not the $2$; at $x = 1$ that gives $23$ instead of $5^2 = 25$. The first term is $a = 2x$, so $a^2 = 4x^2$ and $(2x + 3)^2 = 4x^2 + 12x + 9$.
[Read more](!#pitfalls)]@

In practice, $a$ and $b$ are rarely single letters. Expanding $(2x + 3)^2$ means applying the identity with $a = 2x$ and $b = 3$, and each of the three terms $a^2$, $2ab$ and $b^2$ is built from those whole expressions. The same substitution works for any binomial, whatever its two terms look like.


`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Cubes of Binomials`,
      content: `Cubing a binomial extends the squaring pattern by one degree. Four terms appear instead of three, with coefficients $1, 3, 3, 1$ governing the expansion. The signs alternate when the binomial is a difference, exactly as they did in the squared case.

These identities show up in [polynomial factoring](!/algebra/polynomials/factoring), in algebraic manipulation involving cubic expressions, and as a stepping stone toward the general binomial theorem. Recognizing $a^3 + 3a^2b + 3ab^2 + b^3$ as $(a+b)^3$ on sight saves the work of factoring it from scratch. The reverse-direction counterparts — the [sum and difference of cubes](!/algebra/polynomials/factoring#8) — are different identities entirely and live in Sums and Differences of Powers below; do not confuse the two.

@academic[pitfall,aside:true,width:35%:Making every sign negative
Writing $(x - 2)^3$ as $x^3 - 6x^2 - 12x - 8$ puts a minus on every term after the first; at $x = 3$ that gives $-71$ instead of $1^3 = 1$. The signs alternate: $(x - 2)^3 = x^3 - 6x^2 + 12x - 8$.
[Read more](!#pitfalls)]@

The structural pattern — descending powers of $a$, ascending powers of $b$, symmetric coefficients — is the same one that governs every higher power. Squares and cubes are the two cases worth committing to memory directly; beyond that, the binomial theorem takes over.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Higher Powers and the Binomial Theorem`,
      content: `The pattern in $(a+b)^2$ and $(a+b)^3$ generalizes. For any positive integer $n$:

@academic[formula_callout:Higher Powers and the Binomial Theorem
$$(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k$$]@

This is the [binomial theorem](!/combinatorics/binomial-theorem). The expansion has $n+1$ terms; the powers of $a$ descend from $n$ to $0$ while the powers of $b$ ascend from $0$ to $n$. The numerical coefficients are the [binomial coefficients](!/combinatorics/binomial-coefficient) $\\binom{n}{k}$, which can be read directly off Pascal's triangle.

The fourth and fifth powers expand to:

@academic[formula_callout:Higher Powers and the Binomial Theorem
$$(a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$$]@

@academic[formula_callout:Higher Powers and the Binomial Theorem
$$(a+b)^5 = a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5$$]@

The coefficients $1,4,6,4,1$ and $1,5,10,10,5,1$ are the corresponding rows of Pascal's triangle.

@academic[rule_corollary_plain:For a difference $(a-b)^n$, the same coefficients appear with alternating signs: every odd-indexed term (counting from $k=0$) flips sign, since $(-b)^k$ is negative when $k$ is odd.]@

Memorizing every higher power is unnecessary. The formula handles them all. What matters is recognizing when the binomial theorem applies and being able to read off any specific term — the term containing $b^k$ is $\\binom{n}{k} a^{n-k} b^k$, no full expansion required.

@academic[pitfall,aside:true,width:35%:Using the binomial coefficient alone
Taking $\\binom{5}{2} = 10$ as the coefficient of $x^3$ in $(x + 2)^5$ leaves out the factor $b^2 = 2^2$. The term is $\\binom{5}{2} x^3 \\cdot 2^2 = 40x^3$.
[Read more](!#pitfalls)]@

Reading off one term is the usual task in practice. In $(x + 2)^5$ the role of $a$ is played by $x$ and the role of $b$ by $2$, and the term with $x^3$ is the one where $n - k = 3$, that is $k = 2$. The general term then gives that term in full, its number and its power of $x$ together.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Trinomial Expansions`,
      content: `When three terms are squared or cubed, the expansion produces every pairwise product of the original terms, each appearing twice (or more) due to the multiple ways factors can combine.

The square of a trinomial follows directly from term-by-term [multiplication](!/algebra/polynomials/operations#5):

@academic[formula_callout:Trinomial Expansions
$$(a+b+c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc$$]@

Three squared terms and three doubled cross-products — one for each pair of original terms.

@academic[rule_corollary_plain:The pattern generalizes: squaring a sum of $k$ terms produces $k$ squares plus $\\binom{k}{2}$ doubled cross-products.]@

The cube of a trinomial is heavier:

@academic[formula_callout:Trinomial Expansions
$$(a+b+c)^3 = a^3 + b^3 + c^3 + 3(a^2b + a^2c + ab^2 + b^2c + ac^2 + bc^2) + 6abc$$]@

Three cubed terms, six trinomial cross-products of the form $a^2b$ each with coefficient $3$, and one central term $6abc$ where every variable appears once. The full multinomial theorem governs expansions like these in general, but for three variables at degree two or three, memorizing the pattern is faster than recomputing.

A useful identity hidden in the cubic case is $a^3 + b^3 + c^3 - 3abc = (a+b+c)(a^2+b^2+c^2 - ab - ac - bc)$, which factors a symmetric polynomial that resists the standard sum-of-cubes approach when three variables are involved.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Sums and Differences of Powers`,
      content: `These identities run in the opposite direction to the binomial expansions in the sections above: they take a two-term expression and break it into factors. The two anchors are the [difference of squares](!/algebra/polynomials/factoring#6) and the [sum and difference of cubes](!/algebra/polynomials/factoring#8), but the pattern extends to every degree.

The difference of squares $a^2 - b^2 = (a+b)(a-b)$ is the most-used factoring identity in algebra, appearing constantly in simplification, rationalization, and solving equations.

@academic[rule_plain:Its sum counterpart $a^2 + b^2$ does not factor over the real numbers — but over the [complex numbers](!/complex-numbers) it splits as $(a+bi)(a-bi)$, with the imaginary unit supplying what the reals lack.]@

The cubes split cleanly in both directions:

@academic[formula_callout:Difference of Cubes
$$a^3 - b^3 = (a-b)(a^2 + ab + b^2)$$
/algebra/formulas#difference_of_cubes]@

@academic[formula_callout:Sum of Cubes
$$a^3 + b^3 = (a+b)(a^2 - ab + b^2)$$
/algebra/formulas#sum_of_cubes]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

@academic[pitfall,aside:true,width:35%:Copying the sign into the quadratic factor
Writing $x^3 + 8$ as $(x + 2)(x^2 + 2x + 4)$ copies the plus sign into the middle term; that product is $x^3 + 4x^2 + 8x + 8$. The middle sign is the opposite one: $x^3 + 8 = (x + 2)(x^2 - 2x + 4)$.
[Read more](!#pitfalls)]@

The quadratic factors $a^2 \\pm ab + b^2$ are irreducible over the reals (their discriminants are negative), so this factorization is the end of the line for cubes over $\\mathbb{R}$.

For higher powers, two general patterns govern everything. The difference $a^n - b^n$ always factors — $(a-b)$ divides it for any positive integer $n$:

@academic[formula_callout:Sums and Differences of Powers
$$a^n - b^n = (a-b)(a^{n-1} + a^{n-2}b + a^{n-3}b^2 + \\cdots + b^{n-1})$$]@

The sum $a^n + b^n$ has $(a+b)$ as a divisor only when $n$ is odd:

@academic[formula_callout:Sums and Differences of Powers
$$a^n + b^n = (a+b)(a^{n-1} - a^{n-2}b + a^{n-3}b^2 - \\cdots + b^{n-1}) \\quad (n \\text{ odd})$$]@

When $n$ is even, $a^n + b^n$ has no factor $(a+b)$; of these, only $a^2 + b^2$ is irreducible over the reals, while for example $a^6 + b^6 = (a^2 + b^2)(a^4 - a^2b^2 + b^4)$. The case $a^4 - b^4$ is worth noting separately because it factors twice — first as a difference of squares, then again because $a^2 - b^2$ factors further: $(a-b)(a+b)(a^2+b^2)$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Useful Specials`,
      content: `A handful of less common identities recur often enough to deserve a place alongside the standard ones. None of them follow from a general theorem the way the binomial expansions do — each is a specific algebraic fact worth recognizing on sight.

The Sophie Germain identity factors $a^4 + 4b^4$, an expression that looks irreducible at first glance:

@academic[formula_callout:Useful Specials
$$a^4 + 4b^4 = (a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2)$$]@

It surfaces in number theory and contest problems where $a^4 + 4b^4$ appears and would otherwise resist factoring.

@academic[fact,aside:true,width:35%:$n^4 + 4$ is almost never prime
For every whole number $n \\geq 2$ both factors are greater than $1$, so $n^4 + 4$ is composite. The one exception is $n = 1$, where $1^4 + 4 = 5$ is prime.]@

Taking $a = n$ and $b = 1$ turns the identity into a statement about whole numbers: $n^4 + 4 = (n^2 + 2n + 2)(n^2 - 2n + 2)$. For $n = 3$ it splits $85$ as $17 \\cdot 5$, and for $n = 5$ it splits $629$ as $37 \\cdot 17$. Each factor is a perfect square plus one, since $n^2 + 2n + 2 = (n + 1)^2 + 1$ and $n^2 - 2n + 2 = (n - 1)^2 + 1$, so both are positive whole numbers for every whole number $n$.

Two paired identities link sums and differences of squared binomials:

@academic[formula_callout:Useful Specials
$$(a+b)^2 + (a-b)^2 = 2(a^2 + b^2)$$]@

@academic[formula_callout:Useful Specials
$$(a+b)^2 - (a-b)^2 = 4ab$$]@

The first reduces a sum of squared sum and squared difference; the second extracts the product $ab$ from the same pair. Both are useful when manipulating expressions where $a+b$ and $a-b$ appear together.

A symmetric three-variable identity:

@academic[formula_callout:Useful Specials
$$a^2 + b^2 + c^2 - ab - ac - bc = \\tfrac{1}{2}\\left[(a-b)^2 + (b-c)^2 + (a-c)^2\\right]$$]@

Recognizing this form proves the expression is non-negative for all real $a, b, c$, which is otherwise non-obvious.

A factorable quartic that is not a perfect square:

@academic[formula_callout:Useful Specials
$$a^4 + a^2b^2 + b^4 = (a^2 + ab + b^2)(a^2 - ab + b^2)$$]@

This one looks like a difference of squares hiding inside a sum, and it appears in factoring problems where the standard patterns fail.

Finally, over the [complex numbers](!/complex-numbers), the sum of two squares factors using the imaginary unit:

@academic[formula_callout:Useful Specials
$$a^2 + b^2 = (a + bi)(a - bi)$$]@

Over $\\mathbb{R}$ this expression is irreducible; over $\\mathbb{C}$ it splits cleanly, and the factorization is the basis for using complex conjugates to handle expressions that have no real factorization.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Summary of Algebraic Identities`,
      content: `The table below collects every identity from this page in one place. Use it as a reference card — for each pattern, the table shows the canonical form and the contexts where the identity does the most work.

For every identity in one searchable list, see the [algebraic identities table](!/tables/algebra-identities).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Common Pitfalls`,
      content: `Most wrong expansions and factorizations come from a handful of slips. The first is described in the section on squares; the others are marked where they happen in the sections above. Here each is worked through in full, with the wrong and the right working side by side.

**Dropping the middle term**

A binomial is squared term by term, as if the square could be shared out over a sum the way it is over a product, and the cross term disappears.

Wrong working:
$$(x + 5)^2 = x^2 + 25$$

Right working: with $a = x$ and $b = 5$, the identity gives $a^2 + 2ab + b^2$:
$$(x + 5)^2 = x^2 + 2 \\cdot x \\cdot 5 + 25 = x^2 + 10x + 25$$

Why it happens: powers do spread over products, $(ab)^2 = a^2b^2$, and the same move looks natural for a sum.

How to check: substitute a value. At $x = 1$, $(1 + 5)^2 = 36$; the wrong form gives $1 + 25 = 26$, the right form $1 + 10 + 25 = 36$.

**Squaring only the letter**

The first term of the binomial carries a number, as in $2x$, but the square is applied to the letter alone and the number is left as it was.

Wrong working:
$$(2x + 3)^2 = 2x^2 + 2 \\cdot 2x \\cdot 3 + 9 = 2x^2 + 12x + 9$$

Right working: the first term is $a = 2x$, so $a^2 = (2x)^2 = 4x^2$:
$$(2x + 3)^2 = 4x^2 + 12x + 9$$

Why it happens: the identity is learned with single letters, and $a^2$ is read as "the letter squared" instead of "the whole first term squared".

How to check: substitute a value. At $x = 1$, $(2 + 3)^2 = 25$; the wrong form gives $2 + 12 + 9 = 23$, the right form $4 + 12 + 9 = 25$.

**Making every sign negative**

In the cube of a difference, the minus sign of the binomial is carried to every term after the first instead of alternating.

Wrong working:
$$(x - 2)^3 = x^3 - 6x^2 - 12x - 8$$

Right working: with $a = x$ and $b = 2$, the identity $a^3 - 3a^2b + 3ab^2 - b^3$ gives
$$(x - 2)^3 = x^3 - 3 \\cdot x^2 \\cdot 2 + 3 \\cdot x \\cdot 4 - 8 = x^3 - 6x^2 + 12x - 8$$

Why it happens: a minus in the binomial suggests a minus everywhere. But the third term contains $(-b)^2$, which is positive.

How to check: substitute a value. At $x = 3$, $(3 - 2)^3 = 1$; the wrong form gives $27 - 54 - 36 - 8 = -71$, the right form $27 - 54 + 36 - 8 = 1$.

**Using the binomial coefficient alone**

Asked for one term of an expansion, the binomial coefficient is read off Pascal's triangle and taken as the whole coefficient, even though $b$ is a number other than $1$ and its power adds a factor.

Wrong working: the term with $x^3$ in $(x + 2)^5$ has $k = 2$, so its coefficient is $\\binom{5}{2} = 10$.

Right working: the general term is $\\binom{n}{k} a^{n-k} b^k$ with $a = x$ and $b = 2$:
$$\\binom{5}{2} x^3 \\cdot 2^2 = 10 \\cdot 4 \\cdot x^3 = 40x^3$$
The coefficient is $40$.

Why it happens: in $(a + b)^n$ with plain letters the binomial coefficients are the whole coefficients, and that habit carries over when $b$ is a number.

How to check: the coefficients of the full expansion add up to the value at $x = 1$, here $(1 + 2)^5 = 243$. The full expansion $x^5 + 10x^4 + 40x^3 + 80x^2 + 80x + 32$ adds up to $243$; the binomial coefficients alone add up to only $2^5 = 32$.

**Copying the sign into the quadratic factor**

When a sum of cubes is factored, the plus sign of the binomial factor is copied into the middle term of the quadratic factor.

Wrong working:
$$x^3 + 8 = (x + 2)(x^2 + 2x + 4)$$

Right working: with $a = x$ and $b = 2$, the identity $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$ gives
$$x^3 + 8 = (x + 2)(x^2 - 2x + 4)$$

Why it happens: the binomial factor has the same sign as the original expression, and it seems natural for the quadratic factor to follow it.

How to check: expand the answer. $(x + 2)(x^2 + 2x + 4) = x^3 + 4x^2 + 8x + 8$, while $(x + 2)(x^2 - 2x + 4) = x^3 - 2x^2 + 4x + 2x^2 - 4x + 8 = x^3 + 8$. At $x = 1$ the original gives $9$, the wrong form $3 \\cdot 7 = 21$, the right form $3 \\cdot 3 = 9$.`,
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
      question: "What is the Sophie Germain identity?",
      answer: "It factors $a^4 + 4b^4$, an expression that looks stubbornly irreducible, into $(a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2)$. Nothing in the standard patterns suggests it, since the expression is a sum rather than a difference and neither term is a perfect square of a binomial. It turns up in number theory and in contest problems.",
      sectionId: "6"
    },
    obj2: {
      question: "When does $a^n + b^n$ factor?",
      answer: "It has $(a + b)$ as a divisor only when $n$ is odd. For even $n$ there is no factor $(a + b)$, yet over the reals only $a^2 + b^2$ is irreducible; for example $a^6 + b^6 = (a^2 + b^2)(a^4 - a^2b^2 + b^4)$. Differences behave better: $a^n - b^n$ factors for every positive $n$, with $(a - b)$ as a divisor. Some cases factor repeatedly, as $a^4 - b^4$ becomes $(a - b)(a + b)(a^2 + b^2)$.",
      sectionId: "5"
    },
    obj3: {
      question: "How do you pull $ab$ out of $a + b$ and $a - b$?",
      answer: "Square both and subtract: $(a+b)^2 - (a-b)^2 = 4ab$, so the product falls out as a quarter of the difference. Adding instead gives the companion identity $(a+b)^2 + (a-b)^2 = 2(a^2 + b^2)$, which strips the cross term entirely. The pair is worth recognising whenever a sum and a difference appear together.",
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
}


  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const demoUnits = {
    trinomial: demoUnitFrame({
      svg: identityDiagrams['tri-3'],
      caption: '(a + b + c)&#178; as nine pieces',
      text: 'A square of side a + b + c, cut along a, b and c in both directions, falls into nine rectangles: three squares a&#178;, b&#178;, c&#178; on the diagonal and six off-diagonal pieces, each product ab, ac, bc appearing twice, once on each side of the diagonal. That is exactly a&#178; + b&#178; + c&#178; + 2ab + 2ac + 2bc. Step through the dissection on the',
      href: '/algebra/visual-tools/identities/square-of-trinomial',
      linkText: 'square of a trinomial explorer',
    }),
    square: demoUnitFrame({
      svg: identityDiagrams['sum-4'],
      caption: '(a + b)&#178; as an area: a&#178; + ab + ab + b&#178;',
      text: 'A square of side a + b is cut into four pieces: an a &#215; a square, a b &#215; b square and two a &#215; b rectangles. Their areas add up to the whole, which is the identity (a + b)&#178; = a&#178; + 2ab + b&#178; read off the picture, the middle term being the two identical rectangles. Build the square piece by piece on the',
      href: '/algebra/visual-tools/identities/square-of-sum',
      linkText: 'square of a sum explorer',
    }),
    binomial: demoUnitFrame({
      svg: binomialCoefficientDiagrams['pascal-n5'],
      caption: 'C(5, 2) = 10 paths through Pascal&#8217;s triangle',
      text: 'The coefficient of a&#179;b&#178; in (a + b)&#8309; is the number of ways to choose which 2 of the 5 factors contribute a b, and the triangle counts those choices as the 10 downward paths that reach the highlighted entry. Every row of the triangle is the coefficient list of one power. Follow the paths for any entry on the',
      href: '/algebra/visual-tools/binomial-coefficient',
      linkText: 'binomial coefficient visualizer',
    }),
    dos: demoUnitFrame({
      svg: identityDiagrams['dos-4'],
      caption: 'a&#178; &#8722; b&#178; rearranged into (a + b)(a &#8722; b)',
      text: 'Removing a b &#215; b corner from an a &#215; a square leaves an L-shape of area a&#178; &#8722; b&#178;; cutting the L into two rectangles, a(a &#8722; b) and (a &#8722; b)b, and laying them end to end gives one rectangle of sides a + b and a &#8722; b. The factorisation is a rearrangement of area, nothing more. Watch the pieces slide into the rectangle on the',
      href: '/algebra/visual-tools/identities/difference-of-squares',
      linkText: 'difference of squares explorer',
    }),
  };

  const identitiesOutline = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'The identities in six groups',
    preface: 'The algebraic identities on this page group by the kind of expression they expand or factor.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'Read them both ways',
    conclusion: 'Every identity works left to right for expanding and right to left for factoring.',
    showLevels: true,
    nodes: [
      { id: 'root', name: 'Algebraic identities', children: [
        { id: 'sq', name: 'Squares of binomials', children: [
          { id: 'p', name: 'Square of a sum', example: '(a + b)²' },
          { id: 'm', name: 'Square of a difference', example: '(a − b)²' },
          { id: 'ds', name: 'Difference of squares', example: 'a² − b²' },
        ] },
        { id: 'cu', name: 'Cubes of binomials', example: '(a ± b)³' },
        { id: 'bt', name: 'Higher powers', def: 'the binomial theorem', example: '(a + b)ⁿ' },
        { id: 'tri', name: 'Trinomial square', example: '(a + b + c)²' },
        { id: 'pow', name: 'Sums and differences of powers', children: [
          { id: 'cubes', name: 'Sum and difference of cubes', example: 'a³ ± b³' },
          { id: 'dn', name: 'Difference of nth powers', example: 'aⁿ − bⁿ' },
          { id: 'sn', name: 'Sum of nth powers', def: 'factors by a + b when n is odd', example: 'aⁿ + bⁿ' },
        ] },
        { id: 'sp', name: 'Useful specials', children: [
          { id: 'sg', name: 'Sophie Germain', example: 'a⁴ + 4b⁴' },
          { id: 'c', name: 'Sum of squares over ℂ', example: 'a² + b²' },
        ] },
      ] },
    ],
  };

  return {
  props: {
    identitiesOutline,
    demoUnits,
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

export default function AlgebraicIdentitiesPage({identitiesOutline, 
  seoData,
  sectionsContent,
  introContent,
  obj1Table,
  obj2Table,
  obj5Table,
  summaryTable,
  faqQuestions,
  schemas, demoUnits
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
                <div key={'unit-square'} dangerouslySetInnerHTML={{ __html: demoUnits.square }} />,
          `The square of a difference and the conjugate product are the same picture with one side shortened or one piece removed.`,
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
        `@academic[punchline:Cubing a binomial always gives the coefficients $1, 3, 3, 1$; a difference only makes the signs alternate.]@`,
      ]
    },
    {
      id: '3',
      title: sectionsContent.obj3.title,
      link: sectionsContent.obj3.link,
      content: [
        sectionsContent.obj3.content,
                <div key={'unit-binomial'} dangerouslySetInnerHTML={{ __html: demoUnits.binomial }} />,
          `Pascal&#8217;s triangle is the binomial theorem with the algebra stripped away.`,
        ]
    },
    {
      id: '4',
      title: sectionsContent.obj4.title,
      link: sectionsContent.obj4.link,
      content: [
        sectionsContent.obj4.content,
                <div key={'unit-trinomial'} dangerouslySetInnerHTML={{ __html: demoUnits.trinomial }} />,
          `Squaring a sum of k terms works the same way: k squares on the diagonal and every pair twice off it.`,
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
                <div key={'unit-dos'} dangerouslySetInnerHTML={{ __html: demoUnits.dos }} />,
          `The higher-degree factorisations above have no such picture, which is why they are learned as patterns.`,
          `@academic[punchline:A difference of like powers always has the factor $a - b$; a sum has $a + b$ only for odd powers.]@`,
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
        <DiagramFrame
          key={'obj7-diagram'}
          id="algebraic-identities-outline"
          title="Algebraic identities in six groups"
          source="/algebra/identities"
        >
          <TaxonomyOutline data={identitiesOutline} variant="outline" exportable={false} showToolbar={false} framed={false} />
        </DiagramFrame>,
      ]
    },
    {
      id: 'pitfalls',
      title: sectionsContent.obj8.title,
      link: sectionsContent.obj8.link,
      content: [
        sectionsContent.obj8.content,
      ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
      id: 'faq',
      title: `Algebraic Identities FAQ`,
      link: ``,
      content: [
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