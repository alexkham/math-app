
// tables-optimized: v4 | 2026-05-22 | 4 tables (obj2 aggregation, obj4 aggregation, obj5 aggregation, obj7 summary capstone)
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'


export async function getStaticProps(){

 const keyWords = [
  "vector addition",
  "vector subtraction",
  "scalar multiplication",
  "add vectors",
  "vector operations",
  "tip to tail method",
  "parallelogram method",
  "vector properties",
  "commutative vector addition",
  "distributive property vectors",
  "zero vector",
  "additive inverse vector",
  "scale a vector",
  "vector algebra"
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj2 — aggregation: 4 properties of vector addition
  const obj2Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Property</th>
      <th style="${tableHeaders.aggregation}">Formula</th>
      <th style="${tableHeaders.aggregation}">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Commutativity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a + b = b + a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">order does not affect the sum</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Associativity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(a + b) + c = a + (b + c)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">grouping does not matter; parentheses become optional</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Additive identity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a + 0 = a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the zero vector leaves any vector unchanged</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Additive inverse</td>
      <td style="padding: 12px 15px; color: #34495e;">a + (&minus;a) = 0</td>
      <td style="padding: 12px 15px; color: #34495e;">every vector has a unique negation, same length, opposite direction</td>
    </tr>
  </tbody>
</table>
`

  // obj4 — aggregation (lookup): scalar sign cases
  const obj4Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Case</th>
      <th style="${tableHeaders.aggregation}">Effect on length</th>
      <th style="${tableHeaders.aggregation}">Effect on direction</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">c &gt; 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">stretches by factor |c|</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">same as a</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">0 &lt; c &lt; 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">compresses by factor |c|</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">same as a</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">c &lt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">scales by factor |c|</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">reversed (opposite to a)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">c = 0</td>
      <td style="padding: 12px 15px; color: #34495e;">collapses to zero</td>
      <td style="padding: 12px 15px; color: #34495e;">undefined &mdash; result is the zero vector</td>
    </tr>
  </tbody>
</table>
`

  // obj5 — aggregation: 4 properties of scalar multiplication
  const obj5Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Property</th>
      <th style="${tableHeaders.aggregation}">Formula</th>
      <th style="${tableHeaders.aggregation}">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Associativity with scalars</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">c(da) = (cd)a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">repeated scalings collapse to a single multiplication</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Distributivity over vector addition</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">c(a + b) = ca + cb</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a scalar spreads across each term of a vector sum</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Distributivity over scalar addition</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(c + d)a = ca + da</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a sum of scalars splits into two separate scalings of the same vector</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Multiplicative identity</td>
      <td style="padding: 12px 15px; color: #34495e;">1a = a</td>
      <td style="padding: 12px 15px; color: #34495e;">scaling by 1 leaves any vector unchanged</td>
    </tr>
  </tbody>
</table>
`

  // obj7 — summary capstone: 3 operations × 3 modes
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Operation</th>
      <th style="${tableHeaders.summary}">Component formula</th>
      <th style="${tableHeaders.summary}">Geometric picture</th>
      <th style="${tableHeaders.summary}">Algebraic rules</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Addition</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a + b = (a&#8321; + b&#8321;, &hellip;, a&#8345; + b&#8345;)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">tip-to-tail chain or parallelogram diagonal</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">commutative, associative; identity 0; inverse &minus;a</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Subtraction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a &minus; b = (a&#8321; &minus; b&#8321;, &hellip;, a&#8345; &minus; b&#8345;)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arrow from tip of b to tip of a (common tail)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">defined as a + (&minus;b); inherits all addition rules</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Scalar multiplication</td>
      <td style="padding: 12px 15px; color: #34495e;">ca = (ca&#8321;, &hellip;, ca&#8345;)</td>
      <td style="padding: 12px 15px; color: #34495e;">scales length by |c|; reverses direction if c &lt; 0</td>
      <td style="padding: 12px 15px; color: #34495e;">associative with scalars; distributive (both ways); identity 1</td>
    </tr>
  </tbody>
</table>
`

  // ---------- SECTIONS ----------

//  const sectionsContent = {
//   obj1: {
//     title: `Vector Addition`,
//     content: `Adding two vectors means pairing up their components and summing each pair independently. For $\\mathbf{a} = (a_1, a_2, \\ldots, a_n)$ and $\\mathbf{b} = (b_1, b_2, \\ldots, b_n)$ in the same $\\mathbb{R}^n$:

// $$\\mathbf{a} + \\mathbf{b} = (a_1 + b_1,\\ a_2 + b_2,\\ \\ldots,\\ a_n + b_n)$$

// The result is again a vector in $\\mathbb{R}^n$ — addition does not change the dimension. Both inputs must belong to the same space; adding a vector in $\\mathbb{R}^2$ to a vector in $\\mathbb{R}^3$ is undefined because there is no way to match up the components.

// Geometrically, vector addition has two equivalent visualizations. In the tip-to-tail method, the tail of $\\mathbf{b}$ is placed at the head of $\\mathbf{a}$, and the sum $\\mathbf{a} + \\mathbf{b}$ is the vector running from the tail of $\\mathbf{a}$ to the head of $\\mathbf{b}$. In the parallelogram method, both vectors share a common tail, and the sum is the diagonal of the parallelogram they form. The two constructions always yield the same result, and each highlights a different aspect of addition: tip-to-tail emphasizes sequential displacement, while the parallelogram makes the symmetry between $\\mathbf{a}$ and $\\mathbf{b}$ visually explicit.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj2: {
//     title: `Properties of Addition`,
//     content: `Vector addition obeys four algebraic rules that govern how sums behave. Each has a geometric counterpart that can be verified by drawing the vectors involved.

// ## Commutativity

// $$\\mathbf{a} + \\mathbf{b} = \\mathbf{b} + \\mathbf{a}$$

// The order in which two vectors are added does not affect the result. Geometrically, the parallelogram has the same diagonal regardless of which vector is placed first. At the component level, this follows directly from commutativity of real number addition: $a_i + b_i = b_i + a_i$ for every component.

// ## Associativity

// $$(\\mathbf{a} + \\mathbf{b}) + \\mathbf{c} = \\mathbf{a} + (\\mathbf{b} + \\mathbf{c})$$

// When adding three or more vectors, grouping does not matter. The tip-to-tail construction confirms this: chaining $\\mathbf{a}$, $\\mathbf{b}$, and $\\mathbf{c}$ end to end produces the same resultant vector no matter which pair is summed first. This property allows sums of multiple vectors to be written without parentheses.

// ## Additive Identity

// $$\\mathbf{a} + \\mathbf{0} = \\mathbf{a}$$

// The zero vector $\\mathbf{0} = (0, 0, \\ldots, 0)$ leaves any vector unchanged under addition. It functions as the neutral element: adding it contributes nothing to any component. Geometrically, the zero vector is a point with no length and no direction — appending it tip-to-tail adds no displacement.

// ## Additive Inverse

// $$\\mathbf{a} + (-\\mathbf{a}) = \\mathbf{0}$$

// Every vector $\\mathbf{a}$ has a corresponding vector $-\\mathbf{a} = (-a_1, -a_2, \\ldots, -a_n)$ that cancels it exactly. The inverse has the same [magnitude](!/linear-algebra/vectors/magnitude) as $\\mathbf{a}$ but points in the opposite direction. Adding a vector to its inverse returns to the origin — the displacements undo each other completely.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj3: {
//     title: `Vector Subtraction`,
//     content: `Subtraction is not an independent operation — it is addition combined with negation. The difference $\\mathbf{a} - \\mathbf{b}$ is defined as:

// $$\\mathbf{a} - \\mathbf{b} = \\mathbf{a} + (-\\mathbf{b}) = (a_1 - b_1,\\ a_2 - b_2,\\ \\ldots,\\ a_n - b_n)$$

// Reducing subtraction to addition and negation means that all four properties of addition — commutativity, associativity, identity, and inverse — carry over automatically. No separate set of rules is needed.

// The geometric picture of subtraction is particularly useful. When $\\mathbf{a}$ and $\\mathbf{b}$ are drawn from a common tail, the difference $\\mathbf{a} - \\mathbf{b}$ is the vector pointing from the tip of $\\mathbf{b}$ to the tip of $\\mathbf{a}$. This interpretation connects subtraction directly to distance: the length of $\\mathbf{a} - \\mathbf{b}$ is the Euclidean distance between the heads of the two vectors, formalized as $d(\\mathbf{a}, \\mathbf{b}) = \\|\\mathbf{a} - \\mathbf{b}\\|$ on the [magnitude](!/linear-algebra/vectors/magnitude) page.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj4: {
//     title: `Scalar Multiplication`,
//     content: `Scalar multiplication takes a real number $c$ and a vector $\\mathbf{a}$ and scales every component by $c$:

// $$c\\mathbf{a} = (ca_1,\\ ca_2,\\ \\ldots,\\ ca_n)$$

// The result is always a vector in the same $\\mathbb{R}^n$. Geometrically, scalar multiplication changes the length of the vector by a factor of $|c|$ while preserving or reversing its direction depending on the sign of $c$.

// When $c > 0$, the scaled vector $c\\mathbf{a}$ points in the same direction as $\\mathbf{a}$. If $c > 1$, the vector stretches; if $0 < c < 1$, it compresses. When $c < 0$, the direction flips — the scaled vector points opposite to $\\mathbf{a}$, with its length multiplied by $|c|$. The boundary case $c = 0$ collapses any vector to the zero vector: $0\\mathbf{a} = \\mathbf{0}$.

// Because scalar multiplication only ever stretches, compresses, or reverses a vector along its own line, the result $c\\mathbf{a}$ is always [parallel](!/linear-algebra/vectors/properties) to $\\mathbf{a}$ (provided $\\mathbf{a} \\neq \\mathbf{0}$). This observation becomes important later: two vectors are parallel precisely when one is a scalar multiple of the other.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj5: {
//     title: `Properties of Scalar Multiplication`,
//     content: `Scalar multiplication satisfies its own set of algebraic rules that describe how scalars and vectors interact. Combined with the properties of addition, these rules form the complete algebraic framework for working with vectors.

// ## Associativity with Scalars

// $$c(d\\mathbf{a}) = (cd)\\mathbf{a}$$

// Scaling a vector by $d$ and then by $c$ produces the same result as scaling once by the product $cd$. The operations collapse into a single multiplication on the scalar side.

// ## Distributivity over Vector Addition

// $$c(\\mathbf{a} + \\mathbf{b}) = c\\mathbf{a} + c\\mathbf{b}$$

// A scalar applied to a sum distributes across both terms. Geometrically, scaling the diagonal of a parallelogram by $c$ yields the same vector as scaling both sides by $c$ and then forming the new parallelogram.

// ## Distributivity over Scalar Addition

// $$(c + d)\\mathbf{a} = c\\mathbf{a} + d\\mathbf{a}$$

// Two scalars summed before multiplication produce the same result as two separate scalings added afterward. This rule links the arithmetic of real numbers to the algebra of vectors.

// ## Multiplicative Identity

// $$1\\mathbf{a} = \\mathbf{a}$$

// Scaling by $1$ leaves a vector unchanged. This ensures that the scalar $1$ acts neutrally, just as the zero vector acts neutrally under addition.

// ## Consequences

// Two special cases follow immediately from these rules. Setting $c = 0$ gives $0\\mathbf{a} = \\mathbf{0}$: scaling any vector by zero produces the zero vector. Setting $c = -1$ gives $(-1)\\mathbf{a} = -\\mathbf{a}$: scaling by $-1$ produces the additive inverse. Neither fact requires a separate axiom — both are consequences of the properties above.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj6: {
//     title: `The Algebraic Foundation`,
//     content: `Addition and scalar multiplication are not just two operations among many — they are the two operations on which the entire algebraic theory of vectors rests. Every other construction in this section is built from them. The [dot product](!/linear-algebra/vectors/dot-product) multiplies corresponding components and sums the results — a sequence of scalar multiplications followed by real-number addition. The [cross product](!/linear-algebra/vectors/cross-product) combines components through differences of pairwise products — again, scalar multiplication and addition in a specific pattern. A [linear combination](!/linear-algebra/vectors/linear-combinations) $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k$ is nothing more than repeated scalar multiplication followed by repeated addition.

// The ten properties listed on this page — four for addition, four for scalar multiplication, plus two distributive laws — are not arbitrary. They are precisely the axioms that define a [vector space](!/linear-algebra/vector-spaces/axioms). Any collection of objects that satisfies these rules qualifies as a vector space, whether the objects are arrows in $\\mathbb{R}^3$, polynomials, matrices, or functions. The vectors in $\\mathbb{R}^n$ studied throughout this section are the most concrete example, but the algebraic structure they exhibit extends far beyond ordered tuples of numbers.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj7: {
//     title: `Operations at a Glance`,
//     content: `The page treated addition, subtraction, and scalar multiplication one at a time, presenting each through three lenses — a component formula, a geometric picture, and a list of algebraic rules that the operation satisfies. The table below collects all three operations across those three views in a single place, making explicit the parallel structure that runs through the page and showing where each operation borrows from or extends the others.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// };


// tables-optimized: v4 | 2026-05-22 | 4 tables (obj2 aggregation, obj4 aggregation, obj5 aggregation, obj7 summary capstone)

// ---------- SECTIONS ----------

const sectionsContent = {
  obj1: {
    title: `Vector Addition`,
    content: `Adding two vectors means pairing up their components and summing each pair independently. For $\\mathbf{a} = (a_1, a_2, \\ldots, a_n)$ and $\\mathbf{b} = (b_1, b_2, \\ldots, b_n)$ in the same $\\mathbb{R}^n$:

@academic[formula_callout:Vector Addition
$$\\mathbf{a} + \\mathbf{b} = (a_1 + b_1,\\ a_2 + b_2,\\ \\ldots,\\ a_n + b_n)$$
/linear-algebra/formulas#vector_addition]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

The result is again a vector in $\\mathbb{R}^n$ — addition does not change the dimension. Both inputs must belong to the same space; adding a vector in $\\mathbb{R}^2$ to a vector in $\\mathbb{R}^3$ is undefined because there is no way to match up the components.

Geometrically, vector addition has two equivalent visualizations. In the tip-to-tail method, the tail of $\\mathbf{b}$ is placed at the head of $\\mathbf{a}$, and the sum $\\mathbf{a} + \\mathbf{b}$ is the vector running from the tail of $\\mathbf{a}$ to the head of $\\mathbf{b}$. In the parallelogram method, both vectors share a common tail, and the sum is the diagonal of the parallelogram they form. The two constructions always yield the same result, and each highlights a different aspect of addition: tip-to-tail emphasizes sequential displacement, while the parallelogram makes the symmetry between $\\mathbf{a}$ and $\\mathbf{b}$ visually explicit.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Properties of Addition`,
    content: `Vector addition obeys four algebraic rules that govern how sums behave. Each has a geometric counterpart that can be verified by drawing the vectors involved.

## Commutativity

$$\\mathbf{a} + \\mathbf{b} = \\mathbf{b} + \\mathbf{a}$$

The order in which two vectors are added does not affect the result. Geometrically, the parallelogram has the same diagonal regardless of which vector is placed first. At the component level, this follows directly from commutativity of real number addition: $a_i + b_i = b_i + a_i$ for every component.

## Associativity

$$(\\mathbf{a} + \\mathbf{b}) + \\mathbf{c} = \\mathbf{a} + (\\mathbf{b} + \\mathbf{c})$$

When adding three or more vectors, grouping does not matter. The tip-to-tail construction confirms this: chaining $\\mathbf{a}$, $\\mathbf{b}$, and $\\mathbf{c}$ end to end produces the same resultant vector no matter which pair is summed first. This property allows sums of multiple vectors to be written without parentheses.

## Additive Identity

$$\\mathbf{a} + \\mathbf{0} = \\mathbf{a}$$

The zero vector $\\mathbf{0} = (0, 0, \\ldots, 0)$ leaves any vector unchanged under addition. It functions as the neutral element: adding it contributes nothing to any component. Geometrically, the zero vector is a point with no length and no direction — appending it tip-to-tail adds no displacement.

## Additive Inverse

$$\\mathbf{a} + (-\\mathbf{a}) = \\mathbf{0}$$

Every vector $\\mathbf{a}$ has a corresponding vector $-\\mathbf{a} = (-a_1, -a_2, \\ldots, -a_n)$ that cancels it exactly. The inverse has the same [magnitude](!/linear-algebra/vectors/magnitude) as $\\mathbf{a}$ but points in the opposite direction. Adding a vector to its inverse returns to the origin — the displacements undo each other completely.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Vector Subtraction`,
    content: `Subtraction is not an independent operation — it is addition combined with negation. The difference $\\mathbf{a} - \\mathbf{b}$ is defined as:

@academic[formula_callout:Vector Subtraction
$$\\mathbf{a} - \\mathbf{b} = \\mathbf{a} + (-\\mathbf{b}) = (a_1 - b_1,\\ a_2 - b_2,\\ \\ldots,\\ a_n - b_n)$$
/linear-algebra/formulas#vector_subtraction]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

Reducing subtraction to addition and negation means that all four properties of addition — commutativity, associativity, identity, and inverse — carry over automatically. No separate set of rules is needed.

The geometric picture of subtraction is particularly useful. When $\\mathbf{a}$ and $\\mathbf{b}$ are drawn from a common tail, the difference $\\mathbf{a} - \\mathbf{b}$ is the vector pointing from the tip of $\\mathbf{b}$ to the tip of $\\mathbf{a}$. This interpretation connects subtraction directly to distance: the length of $\\mathbf{a} - \\mathbf{b}$ is the Euclidean distance between the heads of the two vectors, formalized as $d(\\mathbf{a}, \\mathbf{b}) = \\|\\mathbf{a} - \\mathbf{b}\\|$ on the [magnitude](!/linear-algebra/vectors/magnitude) page.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Scalar Multiplication`,
    content: `Scalar multiplication takes a real number $c$ and a vector $\\mathbf{a}$ and scales every component by $c$:

@academic[formula_callout:Scalar Multiplication of Vectors
$$c\\mathbf{a} = (ca_1,\\ ca_2,\\ \\ldots,\\ ca_n)$$
/linear-algebra/formulas#scalar_multiplication_of_vectors]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

The result is always a vector in the same $\\mathbb{R}^n$. Geometrically, scalar multiplication changes the length of the vector by a factor of $|c|$ while preserving or reversing its direction depending on the sign of $c$.

When $c > 0$, the scaled vector $c\\mathbf{a}$ points in the same direction as $\\mathbf{a}$. If $c > 1$, the vector stretches; if $0 < c < 1$, it compresses. When $c < 0$, the direction flips — the scaled vector points opposite to $\\mathbf{a}$, with its length multiplied by $|c|$. The boundary case $c = 0$ collapses any vector to the zero vector: $0\\mathbf{a} = \\mathbf{0}$.

Because scalar multiplication only ever stretches, compresses, or reverses a vector along its own line, the result $c\\mathbf{a}$ is always [parallel](!/linear-algebra/vectors/properties) to $\\mathbf{a}$ (provided $\\mathbf{a} \\neq \\mathbf{0}$). This observation becomes important later: two vectors are parallel precisely when one is a scalar multiple of the other.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Properties of Scalar Multiplication`,
    content: `Scalar multiplication satisfies its own set of algebraic rules that describe how scalars and vectors interact. Combined with the properties of addition, these rules form the complete algebraic framework for working with vectors.

## Associativity with Scalars

$$c(d\\mathbf{a}) = (cd)\\mathbf{a}$$

Scaling a vector by $d$ and then by $c$ produces the same result as scaling once by the product $cd$. The operations collapse into a single multiplication on the scalar side.

## Distributivity over Vector Addition

$$c(\\mathbf{a} + \\mathbf{b}) = c\\mathbf{a} + c\\mathbf{b}$$

A scalar applied to a sum distributes across both terms. Geometrically, scaling the diagonal of a parallelogram by $c$ yields the same vector as scaling both sides by $c$ and then forming the new parallelogram.

## Distributivity over Scalar Addition

$$(c + d)\\mathbf{a} = c\\mathbf{a} + d\\mathbf{a}$$

Two scalars summed before multiplication produce the same result as two separate scalings added afterward. This rule links the arithmetic of real numbers to the algebra of vectors.

## Multiplicative Identity

$$1\\mathbf{a} = \\mathbf{a}$$

Scaling by $1$ leaves a vector unchanged. This ensures that the scalar $1$ acts neutrally, just as the zero vector acts neutrally under addition.

## Consequences

Two special cases follow immediately from these rules. Setting $c = 0$ gives $0\\mathbf{a} = \\mathbf{0}$: scaling any vector by zero produces the zero vector. Setting $c = -1$ gives $(-1)\\mathbf{a} = -\\mathbf{a}$: scaling by $-1$ produces the additive inverse. Neither fact requires a separate axiom — both are consequences of the properties above.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `The Algebraic Foundation`,
    content: `Addition and scalar multiplication are not just two operations among many — they are the two operations on which the entire algebraic theory of vectors rests. Every other construction in this section is built from them. The [dot product](!/linear-algebra/vectors/dot-product) multiplies corresponding components and sums the results — a sequence of scalar multiplications followed by real-number addition. The [cross product](!/linear-algebra/vectors/cross-product) combines components through differences of pairwise products — again, scalar multiplication and addition in a specific pattern. A [linear combination](!/linear-algebra/vectors/linear-combinations) $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k$ is nothing more than repeated scalar multiplication followed by repeated addition.

The ten properties listed on this page — four for addition, four for scalar multiplication, plus two distributive laws — are not arbitrary. They are precisely the axioms that define a [vector space](!/linear-algebra/vector-spaces/axioms). Any collection of objects that satisfies these rules qualifies as a vector space, whether the objects are arrows in $\\mathbb{R}^3$, polynomials, matrices, or functions. The vectors in $\\mathbb{R}^n$ studied throughout this section are the most concrete example, but the algebraic structure they exhibit extends far beyond ordered tuples of numbers.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `Operations at a Glance`,
    content: `The page treated addition, subtraction, and scalar multiplication one at a time, presenting each through three lenses — a component formula, a geometric picture, and a list of algebraic rules that the operation satisfies. The table below collects all three operations across those three views in a single place, making explicit the parallel structure that runs through the page and showing where each operation borrows from or extends the others.`,
    before: ``,
    after: ``,
    link: '',
  },
};

 const introContent = {
     id: `intro`,
  title: `The Three Operations That Define Vector Algebra`,
  content: `Addition, subtraction, and scalar multiplication are the operations that give vectors their algebraic structure. Each works component by component, each preserves the dimension of the input, and each carries a geometric interpretation that reinforces the computation. Together, they satisfy a precise set of rules — commutativity, associativity, distributivity — that make vector algebra predictable and consistent. Every other operation in this section, from the [dot product](!/linear-algebra/vectors/dot-product) to [linear combinations](!/linear-algebra/vectors/linear-combinations), is built on top of these three.`,
};

const faqQuestions = {
  obj1: {
    question: "How do you add two vectors?",
    answer: "Add corresponding components: a + b = (a₁ + b₁, a₂ + b₂, ..., aₙ + bₙ). Both vectors must be in the same ℝⁿ. Geometrically, use tip-to-tail (place b's tail at a's head) or parallelogram method (sum is the diagonal).",
    sectionId: "1"
  },
  obj2: {
    question: "What are the properties of vector addition?",
    answer: "Vector addition is commutative (a + b = b + a), associative ((a + b) + c = a + (b + c)), has an identity (a + 0 = a), and every vector has an inverse (a + (-a) = 0). These mirror real number addition.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you subtract vectors?",
    answer: "Subtraction is addition plus negation: a - b = a + (-b) = (a₁ - b₁, a₂ - b₂, ...). Geometrically, a - b points from the tip of b to the tip of a when both share a common tail. Its length gives the distance between the vectors.",
    sectionId: "3"
  },
  obj4: {
    question: "What is scalar multiplication of a vector?",
    answer: "Multiply each component by the scalar c: ca = (ca₁, ca₂, ..., caₙ). When c > 0, the vector stretches or compresses in the same direction. When c < 0, it also reverses direction. When c = 0, the result is the zero vector.",
    sectionId: "4"
  },
  obj5: {
    question: "What are the properties of scalar multiplication?",
    answer: "Scalar multiplication is associative with scalars (c(da) = (cd)a), distributes over vector addition (c(a + b) = ca + cb) and scalar addition ((c + d)a = ca + da), and has identity 1a = a. Setting c = 0 gives 0a = 0; c = -1 gives the additive inverse.",
    sectionId: "5"
  },
  obj6: {
    question: "Why are addition and scalar multiplication fundamental?",
    answer: "All other vector operations build from these two. The dot product uses component multiplication and addition. Linear combinations are repeated scalar multiplication and addition. The ten properties (4 for addition, 4 for scalar multiplication, 2 distributive) define vector spaces.",
    sectionId: "6"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Basic Vector Operations",
    "description": "Master vector addition, subtraction, and scalar multiplication. Learn component-wise formulas, geometric methods (tip-to-tail, parallelogram), and algebraic properties that define vector spaces.",
    "url": "https://www.learnmathclass.com/linear-algebra/vectors/basic-operations",
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
      "name": "Basic Vector Operations"
    },
    "teaches": [
      "Vector addition and its properties",
      "Tip-to-tail and parallelogram methods",
      "Vector subtraction as addition of inverse",
      "Scalar multiplication",
      "Distributive and associative properties",
      "Foundation for vector space axioms"
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
        "name": "Linear Algebra",
        "item": "https://www.learnmathclass.com/linear-algebra"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Vectors",
        "item": "https://www.learnmathclass.com/linear-algebra/vectors"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Basic Vector Operations",
        "item": "https://www.learnmathclass.com/linear-algebra/vectors/basic-operations"
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
    obj2Table,
    obj4Table,
    obj5Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Vector Operations: Addition, Subtraction & Scaling | Learn Math Class",
      description: "Master vector addition, subtraction, and scalar multiplication. Learn component-wise formulas, geometric methods (tip-to-tail, parallelogram), and algebraic properties that define vector spaces.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/vectors/basic-operations",
      name: "Basic Vector Operations"
    },
  }
}
   }
export default function BasicVectorOperationsPage({
  seoData,
  sectionsContent,
  introContent,
  obj2Table,
  obj4Table,
  obj5Table,
  summaryTable,
  faqQuestions,
  schemas,
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

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
          <div key={'obj2-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj2Table }} />,
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
          <div key={'obj4-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj4Table }} />,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
          <div key={'obj5-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj5Table }} />,
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
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Basic Operations on Vectors</h1>
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
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}