



import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'


export async function getStaticProps(){

  const keyWords=[
    'function arithmetic',
    'adding functions',
    'subtracting functions',
    'multiplying functions',
    'dividing functions',
    'function operations',
    'combined functions domain',
    'sum of functions',
    'difference of functions',
    'product of functions',
    'quotient of functions',
    'arithmetic operations on functions',
    'pointwise operations',
    'function combination',
  ]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj6 — comparison: Method 1 vs Method 2 for evaluating combined functions
  const obj6Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Method</th>
      <th style="${tableHeaders.comparison}">Procedure</th>
      <th style="${tableHeaders.comparison}">Best when</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Method 1 — evaluate, then combine</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">compute f(a) and g(a) separately, then apply the operation</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">one-off evaluations; functions given as tables or <a href="/functions/graphs" style="${linkStyle}">graphs</a></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Method 2 — combine, then evaluate</td>
      <td style="padding: 12px 15px; color: #34495e;">build the combined formula (f op g)(x) first, then substitute a</td>
      <td style="padding: 12px 15px; color: #34495e;">repeated evaluations or further analysis of the combined function</td>
    </tr>
  </tbody>
</table>
`

  // obj8 — aggregation: domain rule for each of the four operations
  const obj8Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Operation</th>
      <th style="${tableHeaders.aggregation}">Notation</th>
      <th style="${tableHeaders.aggregation}">Domain rule</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Sum</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(f + g)(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">dom(f) ∩ dom(g)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Difference</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(f − g)(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">dom(f) ∩ dom(g)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Product</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(f · g)(x) &nbsp; or &nbsp; (fg)(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">dom(f) ∩ dom(g)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Quotient</td>
      <td style="padding: 12px 15px; color: #34495e;">(f ⁄ g)(x)</td>
      <td style="padding: 12px 15px; color: #34495e;">dom(f) ∩ dom(g), excluding every x where g(x) = 0</td>
    </tr>
  </tbody>
</table>
`

  // obj9 — comparison: sum vs product behavior across sign cases of f and g
  const obj9Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Sign case</th>
      <th style="${tableHeaders.comparison}">Sum f + g</th>
      <th style="${tableHeaders.comparison}">Product f · g</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">both positive</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">positive — higher than either alone</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">positive</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">opposite signs</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">partial cancellation</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">negative</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">both negative</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">negative — more negative than either alone</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">positive</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">either function = 0</td>
      <td style="padding: 12px 15px; color: #34495e;">takes the value of the other function</td>
      <td style="padding: 12px 15px; color: #34495e;">zero — a zero of f or g becomes a zero of fg</td>
    </tr>
  </tbody>
</table>
`

  // obj13 — summary capstone: the four operations side by side
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Operation</th>
      <th style="${tableHeaders.summary}">Pointwise definition</th>
      <th style="${tableHeaders.summary}">Key properties</th>
      <th style="${tableHeaders.summary}">Example with f and g</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Sum</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(f + g)(x) = f(x) + g(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">commutative; associative</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f = x², g = 5x − 3 &nbsp;⇒&nbsp; x² + 5x − 3</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Difference</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(f − g)(x) = f(x) − g(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">neither commutative nor associative; (g − f) = −(f − g)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f = 3x + 7, g = x² &nbsp;⇒&nbsp; −x² + 3x + 7</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Product</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(fg)(x) = f(x) · g(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">commutative; associative; distributes over addition</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f = x + 2, g = x − 3 &nbsp;⇒&nbsp; x² − x − 6</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Quotient</td>
      <td style="padding: 12px 15px; color: #34495e;">(f ⁄ g)(x) = f(x) ⁄ g(x)</td>
      <td style="padding: 12px 15px; color: #34495e;">neither commutative nor associative; requires g(x) ≠ 0</td>
      <td style="padding: 12px 15px; color: #34495e;">f = x² − 1, g = x + 1 &nbsp;⇒&nbsp; x − 1 &nbsp;(x ≠ −1)</td>
    </tr>
  </tbody>
</table>
`

  // ---------- SECTIONS ----------

// const sectionsContent = {


//   obj0 : {
//   title: `Key Terms`,
//   content: `
// • [Function](!/functions/definitions#function) — the objects being combined through arithmetic operations
// • [Domain](!/functions/definitions#domain) — the combined domain is the intersection of both component domains, minus denominator zeros for quotients
// • [Composition of Functions](!/functions/definitions#composition_of_functions) — a different operation: chaining functions in sequence rather than combining outputs
// • [Zero of a Function](!/functions/definitions#zero_of_a_function) — zeros of components determine zeros of products and sign changes of quotients
// `,
//   before: ``,
//   after: `
 
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Function Definitions](!/functions/definitions) →@`,
//   link: '',
// },
 

//   obj1: {
//     title: `Combining Functions with Operations`,
//     content: `Functions combine through arithmetic operations just as numbers do. Given two functions $f$ and $g$, their sum, difference, product, and quotient are new functions defined pointwise — by performing the operation on the outputs at each input.

// The operations act on outputs, not on inputs. To find $(f + g)(3)$, evaluate $f(3)$ and $g(3)$ separately, then add the results. The input $3$ passes through both functions; their outputs combine.

// This pointwise definition means that combining functions produces new functions. If $f(x) = x^2$ and $g(x) = 3x$, then $(f + g)(x) = x^2 + 3x$ is a single function with its own formula, [graph](!/functions/graphs), and [properties](!/functions/properties).

// The four arithmetic operations — addition, subtraction, multiplication, and division — each have their own notation and rules. All share the principle: operate on outputs while the input remains the same.

// These combinations differ from [composition](!/functions/composition), which chains functions together rather than combining their outputs. Arithmetic combines outputs at the same input; composition feeds the output of one function into the input of another.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj2: {
//     title: `Sum of Functions`,
//     content: `The sum of two functions $f$ and $g$ is the function $(f + g)$ defined by:

// $$(f + g)(x) = f(x) + g(x)$$

// At each input $x$, evaluate both functions and add their outputs.

// If $f(x) = x^2$ and $g(x) = 5x - 3$, then:

// $$(f + g)(x) = x^2 + 5x - 3$$

// To evaluate at a specific point, say $x = 2$:

// $$(f + g)(2) = f(2) + g(2) = 4 + 7 = 11$$

// The same result comes from the combined formula: $4 + 10 - 3 = 11$.

// Addition is commutative: $f + g = g + f$. It is also associative: $(f + g) + h = f + (g + h)$. These properties mirror the arithmetic of numbers.

// Sums of functions appear throughout applications. Total cost is fixed cost plus variable cost. Combined revenue is revenue from product A plus revenue from product B. Net force is the sum of individual forces.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj3: {
//     title: `Difference of Functions`,
//     content: `The difference of two functions $f$ and $g$ is the function $(f - g)$ defined by:

// $$(f - g)(x) = f(x) - g(x)$$

// At each input $x$, evaluate both functions and subtract the second from the first.

// If $f(x) = 3x + 7$ and $g(x) = x^2$, then:

// $$(f - g)(x) = 3x + 7 - x^2 = -x^2 + 3x + 7$$

// Order matters. The function $f - g$ is not the same as $g - f$. If $(f - g)(x) = -x^2 + 3x + 7$, then $(g - f)(x) = x^2 - 3x - 7$. The outputs are negatives of each other:

// $$(g - f)(x) = -(f - g)(x)$$

// Subtraction is neither commutative nor associative. Care with order and grouping is essential.

// Differences of functions model comparisons. Profit is revenue minus cost. Net change is final value minus initial value. The gap between two quantities is the difference of the functions measuring them.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj4: {
//     title: `Product of Functions`,
//     content: `The product of two functions $f$ and $g$ is the function $(f \\cdot g)$ or $(fg)$ defined by:

// $$(f \\cdot g)(x) = f(x) \\cdot g(x)$$

// At each input $x$, evaluate both functions and multiply their outputs.

// If $f(x) = x + 2$ and $g(x) = x - 3$, then:

// $$(fg)(x) = (x + 2)(x - 3) = x^2 - x - 6$$

// The product of two linear functions is a quadratic. The product of two polynomials is a polynomial whose degree is the sum of the degrees.

// Multiplication is commutative: $fg = gf$. It is associative: $(fg)h = f(gh)$. It distributes over addition: $f(g + h) = fg + fh$.

// Products of functions arise in area calculations (length times width), in physics (mass times acceleration), and in probability (independent probabilities multiply). When two quantities combine multiplicatively, their functions multiply.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj5: {
//     title: `Quotient of Functions`,
//     content: `The quotient of two functions $f$ and $g$ is the function $(f/g)$ defined by:

// $$\\left(\\frac{f}{g}\\right)(x) = \\frac{f(x)}{g(x)}$$

// At each input $x$, evaluate both functions and divide the first output by the second.

// If $f(x) = x^2 - 1$ and $g(x) = x + 1$, then:

// $$\\left(\\frac{f}{g}\\right)(x) = \\frac{x^2 - 1}{x + 1} = \\frac{(x-1)(x+1)}{x+1} = x - 1$$

// provided $x \\neq -1$.

// Division introduces a critical restriction: the denominator cannot be zero. Even if the simplified form appears to have no restriction, the original quotient is undefined where $g(x) = 0$. The function $(f/g)$ has a hole at $x = -1$, not a continuous extension.

// Division is neither commutative nor associative. The quotient $f/g$ differs from $g/f$ unless both equal $1$.

// Quotients of functions model rates and ratios. Average cost is total cost divided by quantity. Speed is distance divided by time. Efficiency is output divided by input.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj6: {
//     title: `Notation and Evaluation at a Point`,
//     content: `The notations $(f + g)(x)$ and $f(x) + g(x)$ mean the same thing. The first emphasizes that $f + g$ is itself a function; the second emphasizes the operation on outputs. Both describe the same value.

// Evaluating a combined function at a specific input can proceed two ways.

// Method 1: Evaluate each function separately, then combine.

// For $(f - g)(4)$ where $f(x) = x^2$ and $g(x) = 2x + 1$:

// $$f(4) = 16, \\quad g(4) = 9$$
// $$(f - g)(4) = 16 - 9 = 7$$

// Method 2: Find the combined formula first, then evaluate.

// $$(f - g)(x) = x^2 - 2x - 1$$
// $$(f - g)(4) = 16 - 8 - 1 = 7$$

// Both methods yield the same result. The first is often faster for a single evaluation; the second is necessary when working with the combined function repeatedly.

// When functions are given as tables or [graphs](!/functions/graphs), only Method 1 applies directly — look up each function value and combine.

// The table below sets the two methods side by side and notes when each is most efficient.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj7: {
//     title: `Domain of Combined Functions`,
//     content: `The [domain](!/functions/domain) of a combined function is restricted to inputs that work for both component functions. An input must be in the domain of $f$ and in the domain of $g$ for the combination to be defined.

// For sums, differences, and products:

// $$\\text{Domain of } f + g, f - g, f \\cdot g = \\text{Domain of } f \\cap \\text{Domain of } g$$

// The intersection ensures both functions can be evaluated.

// If $f(x) = \\sqrt{x}$ with domain $[0, \\infty)$ and $g(x) = \\sqrt{4 - x}$ with domain $(-\\infty, 4]$, then:

// $$\\text{Domain of } f + g = [0, \\infty) \\cap (-\\infty, 4] = [0, 4]$$

// Only inputs from $0$ to $4$ lie in both domains.

// Different component functions can shrink the combined domain dramatically. If $f$ is defined for $x > 0$ and $g$ is defined for $x < 0$, their intersection is empty — the combined function has no valid inputs.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj8: {
//     title: `Additional Restrictions for Quotient`,
//     content: `The quotient $f/g$ inherits all the restrictions of both $f$ and $g$, plus one more: the denominator $g(x)$ cannot equal zero.

// $$\\text{Domain of } \\frac{f}{g} = (\\text{Domain of } f \\cap \\text{Domain of } g) \\setminus \\{x : g(x) = 0\\}$$

// Start with the intersection of domains, then remove any points where $g$ equals zero.

// If $f(x) = x + 3$ and $g(x) = x^2 - 4$, both have domain $(-\\infty, \\infty)$. The intersection is all real numbers. But $g(x) = 0$ when $x = 2$ or $x = -2$. So:

// $$\\text{Domain of } \\frac{f}{g} = (-\\infty, -2) \\cup (-2, 2) \\cup (2, \\infty)$$

// Even if the quotient simplifies algebraically to a function with no apparent restriction, the original domain exclusions remain. The quotient $\\dfrac{x^2 - 1}{x - 1} = x + 1$ simplifies, but the domain still excludes $x = 1$. The [graph](!/functions/graphs) has a hole at $(1, 2)$.

// The table below collects the domain rule for each of the four operations, making the quotient's extra restriction visible at a glance.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj9: {
//     title: `Graphical Interpretation`,
//     content: `Combining functions graphically means combining their heights at each $x$-value.

// For the sum $f + g$, the height of the combined graph at any $x$ equals the sum of the heights of $f$ and $g$ at that $x$. If $f(3) = 2$ and $g(3) = 5$, then $(f + g)(3) = 7$. The point $(3, 7)$ lies on the graph of $f + g$.

// Where both functions are positive, the sum is higher than either. Where one is positive and one is negative, they partially cancel. Where both are negative, the sum is more negative than either.

// For the product $fg$, the height at $x$ is $f(x) \\cdot g(x)$. Where both are positive or both are negative, the product is positive. Where they have opposite signs, the product is negative. Where either equals zero, the product equals zero — the [zeros](!/functions/properties) of $f$ and $g$ are zeros of $fg$.

// Graphing combined functions by hand is labor-intensive — each point requires reading two values and computing. But the concept clarifies what the algebra produces: a new curve whose shape emerges from the interaction of two others.

// The table below sets sum and product behaviors side by side across the possible sign cases of $f$ and $g$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj10: {
//     title: `Algebraic Simplification`,
//     content: `Combined functions often simplify to cleaner forms. Simplification makes evaluation easier and reveals structure.

// For sums and differences, combine like terms:

// $$(3x^2 + 2x - 1) + (x^2 - 5x + 4) = 4x^2 - 3x + 3$$

// For products, distribute and combine:

// $$(x + 3)(x - 2) = x^2 + x - 6$$

// For quotients, factor and reduce when possible:

// $$\\frac{x^2 - 9}{x + 3} = \\frac{(x-3)(x+3)}{x+3} = x - 3 \\quad (x \\neq -3)$$

// Simplification must respect domain restrictions. The reduced form $x - 3$ appears defined everywhere, but the original quotient excludes $x = -3$. The simplified function still has a hole at that point.

// Simplified forms make further analysis easier — finding [zeros](!/functions/properties), identifying [end behavior](!/functions/properties), computing additional values. They also reveal when two apparently different expressions define the same function.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj11: {
//     title: `Building Complex Functions`,
//     content: `Simple functions combine to build complex ones. Understanding the components reveals the structure of the whole.

// The function $h(x) = x^2 + 3x - 5$ can be viewed as the sum of $f(x) = x^2$, $g(x) = 3x$, and $k(x) = -5$. Each component contributes: the parabolic shape from $x^2$, the linear tilt from $3x$, the vertical shift from $-5$.

// The function $h(x) = (x - 2)(x + 5)$ is a product of two linear functions. Its zeros come directly from its factors: $x = 2$ and $x = -5$. Its graph is a parabola opening upward.

// Breaking a function into simpler pieces aids both analysis and construction. To model a situation, identify the contributing factors, express each as a function, and combine appropriately.

// Revenue depends on price and quantity: $R = p \\cdot q$. If price is $p(x) = 50 - 2x$ and quantity is $q(x) = x$, then revenue is $R(x) = (50 - 2x) \\cdot x = 50x - 2x^2$. The combined function inherits meaning from its components.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj12: {
//     title: `Applications in Context`,
//     content: `Function arithmetic models real-world combinations of quantities.

// Profit equals revenue minus cost. If $R(x)$ gives revenue from selling $x$ units and $C(x)$ gives the cost of producing them:

// $$P(x) = R(x) - C(x)$$

// Profit is positive when revenue exceeds cost, negative when cost exceeds revenue, and zero at break-even points where $R(x) = C(x)$.

// Average cost is total cost divided by quantity:

// $$\\bar{C}(x) = \\frac{C(x)}{x}$$

// This quotient is undefined at $x = 0$ (no items produced) and describes cost per unit at each production level.

// Combined distance from two moving objects involves sums or differences depending on direction. If $d_1(t)$ and $d_2(t)$ give positions at time $t$, the gap between them is $|d_1(t) - d_2(t)|$.

// Population models might add birth rate function and subtract death rate function to model net growth. Economic models add multiple income streams or subtract expenses from revenue.

// In each case, the arithmetic of functions translates the arithmetic of the situation. What combines additively in reality combines additively in the model.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj13: {
//     title: `The Four Operations at a Glance`,
//     content: `The four arithmetic operations on functions cover the same essential pattern — combine outputs pointwise — but each has its own properties, restrictions, and idiomatic forms. The table below collects all four side by side as a reference card: the pointwise definition, the key algebraic properties, and an example of the combined formula. Use it to check at a glance which operations are commutative, which need an extra domain caution, and what kind of expression to expect from each.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

// }


const sectionsContent = {


  obj0 : {
  title: `Key Terms`,
  content: `
• [Function](!/functions/definitions#function) — the objects being combined through arithmetic operations
• [Domain](!/functions/definitions#domain) — the combined domain is the intersection of both component domains, minus denominator zeros for quotients
• [Composition of Functions](!/functions/definitions#composition_of_functions) — a different operation: chaining functions in sequence rather than combining outputs
• [Zero of a Function](!/functions/definitions#zero_of_a_function) — zeros of components determine zeros of products and sign changes of quotients
`,
  before: ``,
  after: `
 
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Function Definitions](!/functions/definitions) →@`,
  link: '',
},
 

  obj1: {
    title: `Combining Functions with Operations`,
    content: `Functions combine through arithmetic operations just as numbers do. Given two functions $f$ and $g$, their sum, difference, product, and quotient are new functions defined pointwise — by performing the operation on the outputs at each input.

The operations act on outputs, not on inputs. To find $(f + g)(3)$, evaluate $f(3)$ and $g(3)$ separately, then add the results. The input $3$ passes through both functions; their outputs combine.

This pointwise definition means that combining functions produces new functions. If $f(x) = x^2$ and $g(x) = 3x$, then $(f + g)(x) = x^2 + 3x$ is a single function with its own formula, [graph](!/functions/graphs), and [properties](!/functions/properties).

The four arithmetic operations — addition, subtraction, multiplication, and division — each have their own notation and rules. All share the principle: operate on outputs while the input remains the same.

These combinations differ from [composition](!/functions/composition), which chains functions together rather than combining their outputs. Arithmetic combines outputs at the same input; composition feeds the output of one function into the input of another.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Sum of Functions`,
    content: `The sum of two functions $f$ and $g$ is the function $(f + g)$ defined by:

@academic[formula_callout:Sum of Functions
$$(f + g)(x) = f(x) + g(x)$$
/functions/formulas#sum_of_functions]@

@academic[formulas_link:Browse all functions formulas
/functions/formulas]@

At each input $x$, evaluate both functions and add their outputs.

If $f(x) = x^2$ and $g(x) = 5x - 3$, then:

$$(f + g)(x) = x^2 + 5x - 3$$

To evaluate at a specific point, say $x = 2$:

$$(f + g)(2) = f(2) + g(2) = 4 + 7 = 11$$

The same result comes from the combined formula: $4 + 10 - 3 = 11$.

Addition is commutative: $f + g = g + f$. It is also associative: $(f + g) + h = f + (g + h)$. These properties mirror the arithmetic of numbers.

Sums of functions appear throughout applications. Total cost is fixed cost plus variable cost. Combined revenue is revenue from product A plus revenue from product B. Net force is the sum of individual forces.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Difference of Functions`,
    content: `The difference of two functions $f$ and $g$ is the function $(f - g)$ defined by:

@academic[formula_callout:Difference of Functions
$$(f - g)(x) = f(x) - g(x)$$
/functions/formulas#difference_of_functions]@

@academic[formulas_link:Browse all functions formulas
/functions/formulas]@

At each input $x$, evaluate both functions and subtract the second from the first.

If $f(x) = 3x + 7$ and $g(x) = x^2$, then:

$$(f - g)(x) = 3x + 7 - x^2 = -x^2 + 3x + 7$$

Order matters. The function $f - g$ is not the same as $g - f$. If $(f - g)(x) = -x^2 + 3x + 7$, then $(g - f)(x) = x^2 - 3x - 7$. The outputs are negatives of each other:

$$(g - f)(x) = -(f - g)(x)$$

Subtraction is neither commutative nor associative. Care with order and grouping is essential.

Differences of functions model comparisons. Profit is revenue minus cost. Net change is final value minus initial value. The gap between two quantities is the difference of the functions measuring them.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Product of Functions`,
    content: `The product of two functions $f$ and $g$ is the function $(f \\cdot g)$ or $(fg)$ defined by:

@academic[formula_callout:Product of Functions
$$(fg)(x) = f(x) \\cdot g(x)$$
/functions/formulas#product_of_functions]@

@academic[formulas_link:Browse all functions formulas
/functions/formulas]@

At each input $x$, evaluate both functions and multiply their outputs.

If $f(x) = x + 2$ and $g(x) = x - 3$, then:

$$(fg)(x) = (x + 2)(x - 3) = x^2 - x - 6$$

The product of two linear functions is a quadratic. The product of two polynomials is a polynomial whose degree is the sum of the degrees.

Multiplication is commutative: $fg = gf$. It is associative: $(fg)h = f(gh)$. It distributes over addition: $f(g + h) = fg + fh$.

Products of functions arise in area calculations (length times width), in physics (mass times acceleration), and in probability (independent probabilities multiply). When two quantities combine multiplicatively, their functions multiply.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Quotient of Functions`,
    content: `The quotient of two functions $f$ and $g$ is the function $(f/g)$ defined by:

@academic[formula_callout:Quotient of Functions
$$\\left(\\frac{f}{g}\\right)(x) = \\frac{f(x)}{g(x)}$$
/functions/formulas#quotient_of_functions]@

@academic[formulas_link:Browse all functions formulas
/functions/formulas]@

At each input $x$, evaluate both functions and divide the first output by the second.

If $f(x) = x^2 - 1$ and $g(x) = x + 1$, then:

$$\\left(\\frac{f}{g}\\right)(x) = \\frac{x^2 - 1}{x + 1} = \\frac{(x-1)(x+1)}{x+1} = x - 1$$

provided $x \\neq -1$.

Division introduces a critical restriction: the denominator cannot be zero. Even if the simplified form appears to have no restriction, the original quotient is undefined where $g(x) = 0$. The function $(f/g)$ has a hole at $x = -1$, not a continuous extension.

Division is neither commutative nor associative. The quotient $f/g$ differs from $g/f$ unless both equal $1$.

Quotients of functions model rates and ratios. Average cost is total cost divided by quantity. Speed is distance divided by time. Efficiency is output divided by input.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Notation and Evaluation at a Point`,
    content: `The notations $(f + g)(x)$ and $f(x) + g(x)$ mean the same thing. The first emphasizes that $f + g$ is itself a function; the second emphasizes the operation on outputs. Both describe the same value.

Evaluating a combined function at a specific input can proceed two ways.

Method 1: Evaluate each function separately, then combine.

For $(f - g)(4)$ where $f(x) = x^2$ and $g(x) = 2x + 1$:

$$f(4) = 16, \\quad g(4) = 9$$
$$(f - g)(4) = 16 - 9 = 7$$

Method 2: Find the combined formula first, then evaluate.

$$(f - g)(x) = x^2 - 2x - 1$$
$$(f - g)(4) = 16 - 8 - 1 = 7$$

Both methods yield the same result. The first is often faster for a single evaluation; the second is necessary when working with the combined function repeatedly.

When functions are given as tables or [graphs](!/functions/graphs), only Method 1 applies directly — look up each function value and combine.

The table below sets the two methods side by side and notes when each is most efficient.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Domain of Combined Functions`,
    content: `The [domain](!/functions/domain) of a combined function is restricted to inputs that work for both component functions. An input must be in the domain of $f$ and in the domain of $g$ for the combination to be defined.

For sums, differences, and products:

@academic[formula_callout:Domain of a Combined Function
$$\\text{Dom}(f + g) = \\text{Dom}(f - g) = \\text{Dom}(fg) = \\text{Dom}(f) \\cap \\text{Dom}(g)$$
/functions/formulas#domain_of_a_combined_function]@

@academic[formulas_link:Browse all functions formulas
/functions/formulas]@

The intersection ensures both functions can be evaluated.

If $f(x) = \\sqrt{x}$ with domain $[0, \\infty)$ and $g(x) = \\sqrt{4 - x}$ with domain $(-\\infty, 4]$, then:

$$\\text{Domain of } f + g = [0, \\infty) \\cap (-\\infty, 4] = [0, 4]$$

Only inputs from $0$ to $4$ lie in both domains.

Different component functions can shrink the combined domain dramatically. If $f$ is defined for $x > 0$ and $g$ is defined for $x < 0$, their intersection is empty — the combined function has no valid inputs.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Additional Restrictions for Quotient`,
    content: `The quotient $f/g$ inherits all the restrictions of both $f$ and $g$, plus one more: the denominator $g(x)$ cannot equal zero.

@academic[formula_callout:Domain of a Quotient
$$\\text{Dom}\\!\\left(\\frac{f}{g}\\right) = \\bigl(\\text{Dom}(f) \\cap \\text{Dom}(g)\\bigr) \\setminus \\{x : g(x) = 0\\}$$
/functions/formulas#domain_of_a_quotient]@

@academic[formulas_link:Browse all functions formulas
/functions/formulas]@

Start with the intersection of domains, then remove any points where $g$ equals zero.

If $f(x) = x + 3$ and $g(x) = x^2 - 4$, both have domain $(-\\infty, \\infty)$. The intersection is all real numbers. But $g(x) = 0$ when $x = 2$ or $x = -2$. So:

$$\\text{Domain of } \\frac{f}{g} = (-\\infty, -2) \\cup (-2, 2) \\cup (2, \\infty)$$

Even if the quotient simplifies algebraically to a function with no apparent restriction, the original domain exclusions remain. The quotient $\\dfrac{x^2 - 1}{x - 1} = x + 1$ simplifies, but the domain still excludes $x = 1$. The [graph](!/functions/graphs) has a hole at $(1, 2)$.

The table below collects the domain rule for each of the four operations, making the quotient's extra restriction visible at a glance.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Graphical Interpretation`,
    content: `Combining functions graphically means combining their heights at each $x$-value.

For the sum $f + g$, the height of the combined graph at any $x$ equals the sum of the heights of $f$ and $g$ at that $x$. If $f(3) = 2$ and $g(3) = 5$, then $(f + g)(3) = 7$. The point $(3, 7)$ lies on the graph of $f + g$.

Where both functions are positive, the sum is higher than either. Where one is positive and one is negative, they partially cancel. Where both are negative, the sum is more negative than either.

For the product $fg$, the height at $x$ is $f(x) \\cdot g(x)$. Where both are positive or both are negative, the product is positive. Where they have opposite signs, the product is negative. Where either equals zero, the product equals zero — the [zeros](!/functions/properties) of $f$ and $g$ are zeros of $fg$.

Graphing combined functions by hand is labor-intensive — each point requires reading two values and computing. But the concept clarifies what the algebra produces: a new curve whose shape emerges from the interaction of two others.

The table below sets sum and product behaviors side by side across the possible sign cases of $f$ and $g$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Algebraic Simplification`,
    content: `Combined functions often simplify to cleaner forms. Simplification makes evaluation easier and reveals structure.

For sums and differences, combine like terms:

$$(3x^2 + 2x - 1) + (x^2 - 5x + 4) = 4x^2 - 3x + 3$$

For products, distribute and combine:

$$(x + 3)(x - 2) = x^2 + x - 6$$

For quotients, factor and reduce when possible:

$$\\frac{x^2 - 9}{x + 3} = \\frac{(x-3)(x+3)}{x+3} = x - 3 \\quad (x \\neq -3)$$

Simplification must respect domain restrictions. The reduced form $x - 3$ appears defined everywhere, but the original quotient excludes $x = -3$. The simplified function still has a hole at that point.

Simplified forms make further analysis easier — finding [zeros](!/functions/properties), identifying [end behavior](!/functions/properties), computing additional values. They also reveal when two apparently different expressions define the same function.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `Building Complex Functions`,
    content: `Simple functions combine to build complex ones. Understanding the components reveals the structure of the whole.

The function $h(x) = x^2 + 3x - 5$ can be viewed as the sum of $f(x) = x^2$, $g(x) = 3x$, and $k(x) = -5$. Each component contributes: the parabolic shape from $x^2$, the linear tilt from $3x$, the vertical shift from $-5$.

The function $h(x) = (x - 2)(x + 5)$ is a product of two linear functions. Its zeros come directly from its factors: $x = 2$ and $x = -5$. Its graph is a parabola opening upward.

Breaking a function into simpler pieces aids both analysis and construction. To model a situation, identify the contributing factors, express each as a function, and combine appropriately.

Revenue depends on price and quantity: $R = p \\cdot q$. If price is $p(x) = 50 - 2x$ and quantity is $q(x) = x$, then revenue is $R(x) = (50 - 2x) \\cdot x = 50x - 2x^2$. The combined function inherits meaning from its components.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj12: {
    title: `Applications in Context`,
    content: `Function arithmetic models real-world combinations of quantities.

Profit equals revenue minus cost. If $R(x)$ gives revenue from selling $x$ units and $C(x)$ gives the cost of producing them:

$$P(x) = R(x) - C(x)$$

Profit is positive when revenue exceeds cost, negative when cost exceeds revenue, and zero at break-even points where $R(x) = C(x)$.

Average cost is total cost divided by quantity:

$$\\bar{C}(x) = \\frac{C(x)}{x}$$

This quotient is undefined at $x = 0$ (no items produced) and describes cost per unit at each production level.

Combined distance from two moving objects involves sums or differences depending on direction. If $d_1(t)$ and $d_2(t)$ give positions at time $t$, the gap between them is $|d_1(t) - d_2(t)|$.

Population models might add birth rate function and subtract death rate function to model net growth. Economic models add multiple income streams or subtract expenses from revenue.

In each case, the arithmetic of functions translates the arithmetic of the situation. What combines additively in reality combines additively in the model.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj13: {
    title: `The Four Operations at a Glance`,
    content: `The four arithmetic operations on functions cover the same essential pattern — combine outputs pointwise — but each has its own properties, restrictions, and idiomatic forms. The table below collects all four side by side as a reference card: the pointwise definition, the key algebraic properties, and an example of the combined formula. Use it to check at a glance which operations are commutative, which need an extra domain caution, and what kind of expression to expect from each.`,
    before: ``,
    after: ``,
    link: '',
  },

}



 const introContent = {
  id: "intro",
  title: "Building Functions from Functions",
  content: `Functions can be combined through the same operations that combine numbers. Add two functions, and their outputs add. Multiply two functions, and their outputs multiply. The result in each case is a new function — one whose behavior emerges from the interplay of its components.

These operations extend the toolkit for constructing and analyzing functions. A profit function is revenue minus cost. A density function is mass divided by volume. Combining functions arithmetically is how mathematical models capture relationships that involve multiple contributing factors.`
}




  const faqQuestions = {
    q1: {
      question: "What is function arithmetic?",
      answer: "Function arithmetic refers to combining two functions using the four basic operations: addition, subtraction, multiplication, and division. Each operation acts pointwise — given the same input, you evaluate both functions separately and then apply the operation to their outputs to produce a new function."
    },
    q2: {
      question: "How do you find the sum of two functions?",
      answer: "The sum of two functions f and g is defined as (f + g)(x) = f(x) + g(x). At each input x, evaluate both functions separately and add their outputs. For example, if f(x) = x² and g(x) = 5x - 3, then (f + g)(x) = x² + 5x - 3. Addition of functions is both commutative and associative, mirroring the arithmetic of numbers."
    },
    q3: {
      question: "What is the domain of combined functions?",
      answer: "The domain of a combined function is the intersection of the domains of both component functions — only inputs that work for both f and g are valid. For sums, differences, and products this is the intersection of the two domains. For quotients, you also remove any inputs where the denominator function equals zero, even if the expression simplifies to a form that appears defined there."
    },
    q4: {
      question: "How does the quotient of functions differ from other function operations?",
      answer: "The quotient (f/g)(x) = f(x)/g(x) introduces an extra domain restriction: the denominator g(x) cannot equal zero. This restriction remains even if the quotient simplifies algebraically to a form with no apparent issue — the original exclusion creates a hole in the graph at that point. Division is also neither commutative nor associative, unlike addition and multiplication."
    },
    q5: {
      question: "How is function arithmetic different from function composition?",
      answer: "Function arithmetic combines the outputs of two functions at the same input — for example, (f + g)(x) adds f(x) and g(x) together. Function composition, by contrast, chains functions sequentially: (f ∘ g)(x) feeds the output of g into f as its input. Arithmetic operates on outputs in parallel; composition feeds outputs forward as new inputs."
    },
  }

  const seoData = {
    title: "Function Arithmetic: Operations on Functions | Learn Math Class",
    description: "Learn function arithmetic: adding, subtracting, multiplying, and dividing functions. Master combined function domains, sum of functions, quotient of functions, and real-world applications.",
    keywords: keyWords.join(", "),
    url: "/functions/arithmetic",
    name: "Function Arithmetic: Operations on Functions",
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": seoData.name,
      "description": seoData.description,
      "keywords": seoData.keywords,
      "url": `https://www.learnmathclass.com${seoData.url}`,
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "educationalLevel": "High School",
      "learningResourceType": "Lesson",
      "teaches": [
        "Sum of functions using pointwise addition",
        "Difference of functions and order of subtraction",
        "Product of functions and multiplicative combinations",
        "Quotient of functions and domain restrictions",
        "Domain of combined functions as intersection of component domains",
        "Graphical interpretation of arithmetic operations on functions",
      ],
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class",
        "url": "https://www.learnmathclass.com"
      },
      "provider": {
        "@type": "Organization",
        "name": "Learn Math Class",
        "url": "https://www.learnmathclass.com"
      }
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
          "name": "Functions",
          "item": "https://www.learnmathclass.com/functions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": seoData.name,
          "item": "https://www.learnmathclass.com/functions/arithmetic"
        },
      ]
    },
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": Object.values(faqQuestions).map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    }
  }

   return {
      props:{
         sectionsContent,
         introContent,
         obj6Table,
         obj8Table,
         obj9Table,
         summaryTable,
         faqQuestions,
         schemas,
          seoData: {
        title: "Function Arithmetic: Operations on Functions | Learn Math Class",
        description: "Learn function arithmetic: adding, subtracting, multiplying, and dividing functions. Master combined function domains, sum of functions, quotient of functions, and real-world applications.",
        keywords: keyWords.join(", "),
        url: "/functions/arithmetic",
         name: "Function Arithmetic: Operations on Functions"
      },
       }
    }
   }

export default function ArithmeticPage({
  seoData,
  sectionsContent,
  introContent,
  obj6Table,
  obj8Table,
  obj9Table,
  summaryTable,
  faqQuestions,
  schemas
}) {

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
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
          <div key={'obj8-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj8Table }} />,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
          <div key={'obj9-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj9Table }} />,
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
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Function Arithmetic</h1>
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