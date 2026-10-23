import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import { tableHeaders } from '@/app/styles/theme'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import completeTheSquareDiagrams from '@/app/components/algebra/visualizers/equations/completeTheSquareDiagrams'
import equationVisualizerDiagrams from '@/app/components/algebra/equations/visualizer/equationVisualizerDiagrams'
import renderFunctionPlot from '@/app/utils/illustrations/functions/graphs/functionPlot'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import TopDownTree from '@/app/components/infographics/TopDownTree/TopDownTree'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
import FormulaAnatomy from '@/app/components/infographics/FormulaAnatomy'


export async function getStaticProps(){
const keyWords = [
  "quadratic equations",
  "solving quadratic equations",
  "quadratic formula",
  "ax² + bx + c = 0",
  "discriminant",
  "completing the square",
  "factoring quadratics",
  "Vieta's formulas",
  "quadratic roots",
  "zero product property",
  "second degree equations",
  "bi-quadratic equations",
  "parabola x-intercepts",
  "double root"
]

const linkStyle = 'color: inherit; text-decoration: underline;'


// ---------- TABLES ----------

// obj5 — comparison: discriminant cases (algebraic)
const obj5Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison} text-align: center;">Discriminant Δ = b² − 4ac</th>
      <th style="${tableHeaders.comparison} text-align: center;"># real roots</th>
      <th style="${tableHeaders.comparison}">Type of roots</th>
      <th style="${tableHeaders.comparison}">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">Δ &gt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">two distinct real roots</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x² − 5x + 3 = 0 (Δ = 13)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">Δ = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">one repeated (double) real root</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x² − 6x + 9 = 0 (Δ = 0)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">Δ &lt; 0</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">0</td>
      <td style="padding: 12px 15px; color: #34495e;">two complex conjugate roots</td>
      <td style="padding: 12px 15px; color: #34495e;">x² + x + 1 = 0 (Δ = −3)</td>
    </tr>
  </tbody>
</table>
`


// obj6 — aggregation (reference card): Vieta's formulas
const obj6Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Quantity</th>
      <th style="${tableHeaders.aggregation}">In terms of roots</th>
      <th style="${tableHeaders.aggregation}">In terms of coefficients</th>
      <th style="${tableHeaders.aggregation}">Use</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Sum</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x₁ + x₂</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">−b ⁄ a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">solve by inspection, verify, construct from roots</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Product</td>
      <td style="padding: 12px 15px; color: #34495e;">x₁ · x₂</td>
      <td style="padding: 12px 15px; color: #34495e;">c ⁄ a</td>
      <td style="padding: 12px 15px; color: #34495e;">solve by inspection, verify, construct from roots</td>
    </tr>
  </tbody>
</table>
`


// obj7 — aggregation: reducible substitution patterns
const obj7Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Original form</th>
      <th style="${tableHeaders.aggregation}">Substitute</th>
      <th style="${tableHeaders.aggregation}">Becomes</th>
      <th style="${tableHeaders.aggregation}">Recover x by</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">ax⁴ + bx² + c = 0  <span style="font-weight:normal;color:#5a7299;">(bi-quadratic)</span></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">u = x²</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">au² + bu + c = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x = ±√u for each u ≥ 0</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">a[f(x)]² + b·f(x) + c = 0  <span style="font-weight:normal;color:#5a7299;">(general)</span></td>
      <td style="padding: 12px 15px; color: #34495e;">u = f(x)</td>
      <td style="padding: 12px 15px; color: #34495e;">au² + bu + c = 0</td>
      <td style="padding: 12px 15px; color: #34495e;">solve f(x) = u₁ and f(x) = u₂; verify all candidates</td>
    </tr>
  </tbody>
</table>
`


// obj8 — comparison: graph behavior by discriminant
const obj8Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison} text-align: center;">Discriminant</th>
      <th style="${tableHeaders.comparison}">x-axis intersection</th>
      <th style="${tableHeaders.comparison}">Geometric behavior</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">Δ &gt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">two distinct points</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">parabola crosses the axis; gap between roots is √Δ ⁄ |a|</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">Δ = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">one point (tangent)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">vertex sits on the axis at x = −b ⁄ 2a</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">Δ &lt; 0</td>
      <td style="padding: 12px 15px; color: #34495e;">none</td>
      <td style="padding: 12px 15px; color: #34495e;">parabola entirely above (a &gt; 0) or below (a &lt; 0) the axis</td>
    </tr>
  </tbody>
</table>
`


// obj9 — summary: capstone of solving methods
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Method</th>
      <th style="${tableHeaders.summary}">When to use</th>
      <th style="${tableHeaders.summary} text-align: center;">Universal?</th>
      <th style="${tableHeaders.summary}">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Factoring</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">when the quadratic factors over the rationals</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">fastest when applicable; uses the zero-product property</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Completing the square</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">always</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">conceptual root; produces the quadratic formula in the general case</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/algebra/formulas#quadratic_formula" style="${linkStyle}">Quadratic formula</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">always</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold; font-size: 18px;">✓</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">direct substitution; surfaces the discriminant explicitly</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Vieta's / inspection</td>
      <td style="padding: 12px 15px; color: #34495e;">when integer roots are visible from sum and product</td>
      <td style="padding: 12px 15px; color: #e74c3c; text-align: center; font-weight: bold; font-size: 18px;">✗</td>
      <td style="padding: 12px 15px; color: #34495e;">guess two numbers with sum −b ⁄ a and product c ⁄ a; only practical when roots are simple</td>
    </tr>
  </tbody>
</table>
`


// ---------- SECTIONS ----------

//  const sectionsContent = {
//   obj0: {
//   title: `Key Terms`,
//   content: `
// ## Equation Structure

// - [Standard Form](!/algebra/definitions#standard_form) — $ax^2 + bx + c = 0$ with $a \\neq 0$
// - [Degree of an Equation](!/algebra/definitions#degree_of_an_equation) — quadratic equations have degree $2$
// - [Coefficient](!/algebra/definitions#coefficient) — the values $a$, $b$, $c$ that determine the equation's behavior

// ## Solutions

// - [Discriminant](!/algebra/definitions#discriminant) — $\\Delta = b^2 - 4ac$, determines the number and type of solutions
// - [Solution Set](!/algebra/definitions#solution_set) — may contain two, one, or zero real values
// - [Extraneous Solution](!/algebra/definitions#extraneous_solution) — may arise from non-reversible steps during solving

// ## Formulas Used on This Page

// - [Quadratic Formula](!/algebra/formulas#quadratic_formula) — $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$
// - [Discriminant](!/algebra/formulas#discriminant) — $\\Delta = b^2 - 4ac$
// - [Square Root Property](!/algebra/formulas#square_root_property) — $x^2 = p \\implies x = \\pm\\sqrt{p}$
// - [Completing the Square](!/algebra/formulas#completing_the_square) — $x^2 + bx = \\left(x + \\frac{b}{2}\\right)^2 - \\frac{b^2}{4}$
// - [Vieta's Formulas (Quadratic)](!/algebra/formulas#vietas_quadratic) — $x_1 + x_2 = -\\frac{b}{a}$, $x_1 \\cdot x_2 = \\frac{c}{a}$
// `,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@

// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Formulas](!/algebra/formulas) →@
// `,
//   link: '',
// },
//   obj1: {
//     title: `Definition and Standard Form`,
//     content: `A quadratic equation in one variable is any equation that can be written as

// $$ax^2 + bx + c = 0$$

// where $a$, $b$, and $c$ are real constants and $a \\neq 0$. The requirement $a \\neq 0$ is what makes the equation genuinely quadratic — if $a$ were zero, the $x^2$ term would vanish and the equation would reduce to a [linear equation](!/algebra/equations/linear).

// The word "quadratic" derives from the Latin word for square, reflecting the presence of $x^2$ as the highest-degree term. The coefficient $a$ is the leading coefficient, $b$ is the linear coefficient, and $c$ is the constant term. Every quadratic equation can be brought into standard form by rearranging: moving all terms to one side and ordering by descending powers of $x$.

// The equation $x^2 = 5x - 6$, for instance, is not in standard form but is still quadratic. Subtracting $5x$ and adding $6$ to both sides yields $x^2 - 5x + 6 = 0$, with $a = 1$, $b = -5$, and $c = 6$. Recognition is the first step — any equation reducible to the form above, regardless of how it is initially presented, is quadratic and amenable to the methods on this page.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj2: {
//     title: `Solving by Factoring`,
//     content: `When the quadratic expression $ax^2 + bx + c$ can be decomposed into a product of two first-degree factors, the equation reduces to a pair of [linear equations](!/algebra/equations/linear) through the zero-product property: if a product of two factors equals zero, at least one of the factors must be zero.

// Consider $x^2 - 5x + 6 = 0$. The left side factors as $(x - 2)(x - 3) = 0$. Setting each factor equal to zero gives $x - 2 = 0$ or $x - 3 = 0$, so $x = 2$ or $x = 3$. Both values satisfy the original equation.

// When the leading coefficient is not $1$, factoring requires more care. The equation $6x^2 + x - 2 = 0$ factors as $(2x - 1)(3x + 2) = 0$, giving $x = \\frac{1}{2}$ or $x = -\\frac{2}{3}$. Finding these factors involves searching for two binomials whose product reconstructs the original trinomial — a process that amounts to finding two numbers whose product is $ac$ and whose sum is $b$.

// Factoring is efficient when it works, but it has a fundamental limitation: not every quadratic with rational coefficients factors into binomials with rational entries. The equation $x^2 - 2 = 0$ has solutions $x = \\pm\\sqrt{2}$, which are irrational, so no factorization over the rationals exists. A method that handles every quadratic without exception requires a different approach.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj3: {
//     title: `Solving by Completing the Square`,
//     content: `Completing the square transforms any quadratic equation into a form where the solution can be extracted by taking a square root. The method works unconditionally — it does not depend on whether the quadratic factors neatly.

// Starting from $ax^2 + bx + c = 0$, divide every term by $a$ to obtain $x^2 + \\frac{b}{a}x + \\frac{c}{a} = 0$. Move the constant to the right side:

// $$x^2 + \\frac{b}{a}x = -\\frac{c}{a}$$

// The left side is almost a perfect square trinomial. Adding $\\left(\\frac{b}{2a}\\right)^2$ to both sides completes it:

// $$x^2 + \\frac{b}{a}x + \\frac{b^2}{4a^2} = \\frac{b^2}{4a^2} - \\frac{c}{a}$$

// The left side factors as a perfect square:

// $$\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2 - 4ac}{4a^2}$$

// Taking the square root of both sides and isolating $x$ gives the two solutions. The expression under the square root, $b^2 - 4ac$, determines whether those solutions are real or complex.

// As a concrete example, consider $x^2 + 6x + 2 = 0$. Move the constant: $x^2 + 6x = -2$. Half of $6$ is $3$, and $3^2 = 9$. Add $9$ to both sides: $x^2 + 6x + 9 = 7$. Factor: $(x + 3)^2 = 7$. Take roots: $x + 3 = \\pm\\sqrt{7}$. The solutions are $x = -3 + \\sqrt{7}$ and $x = -3 - \\sqrt{7}$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj4: {
//     title: `The Quadratic Formula`,
//     content: `Applying the method of completing the square to the general equation $ax^2 + bx + c = 0$ — with letters in place of specific numbers — produces a universal formula:

// $$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

// This is the quadratic formula. It accepts any real coefficients $a$, $b$, $c$ (with $a \\neq 0$) and returns the solutions directly. The $\\pm$ symbol indicates that two values are generated: one using the positive square root and one using the negative.

// For the equation $2x^2 - 3x - 5 = 0$, the coefficients are $a = 2$, $b = -3$, $c = -5$. Substituting:

// $$x = \\frac{-(-3) \\pm \\sqrt{(-3)^2 - 4(2)(-5)}}{2(2)} = \\frac{3 \\pm \\sqrt{9 + 40}}{4} = \\frac{3 \\pm \\sqrt{49}}{4} = \\frac{3 \\pm 7}{4}$$

// The two solutions are $x = \\frac{10}{4} = \\frac{5}{2}$ and $x = \\frac{-4}{4} = -1$.

// The formula is not a separate technique from completing the square — it is the result of completing the square once, in general form, so that the work never needs repeating. Every specific application of completing the square arrives at the same place the formula reaches in a single substitution.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj5: {
//     title: `The Discriminant`,
//     content: `The expression $\\Delta = b^2 - 4ac$ appearing under the square root in the quadratic formula is called the discriminant. Its value determines the nature and number of solutions without requiring the full computation.

// When $\\Delta > 0$, the square root is a positive real number, and the formula produces two distinct real solutions. The equation $x^2 - 5x + 3 = 0$ has $\\Delta = 25 - 12 = 13 > 0$, so two different real roots exist.

// When $\\Delta = 0$, the square root vanishes, and the formula collapses to a single value $x = -\\frac{b}{2a}$. The quadratic has a repeated root — a double root — and the polynomial factors as $a(x - r)^2$ where $r = -\\frac{b}{2a}$. The equation $x^2 - 6x + 9 = 0$ has $\\Delta = 36 - 36 = 0$ and the single solution $x = 3$.

// When $\\Delta < 0$, no real number has a negative square, so the square root does not produce a real value. Over the real numbers, the equation has no solutions. Over the [complex numbers](!/complex-numbers), the formula yields two conjugate roots $x = \\frac{-b \\pm i\\sqrt{|\\Delta|}}{2a}$, where $i$ is the imaginary unit. The equation $x^2 + x + 1 = 0$ has $\\Delta = 1 - 4 = -3 < 0$ and the complex roots $x = \\frac{-1 \\pm i\\sqrt{3}}{2}$.

// The discriminant is a diagnostic tool: it classifies the equation's solution structure from the coefficients alone.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj6: {
//     title: `Vieta's Formulas`,
//     content: `The French mathematician François Viète established a direct relationship between the roots of a quadratic equation and its coefficients. For the equation $ax^2 + bx + c = 0$ with roots $x_1$ and $x_2$:

// $$x_1 + x_2 = -\\frac{b}{a}$$

// $$x_1 \\cdot x_2 = \\frac{c}{a}$$

// These identities follow from factoring the quadratic as $a(x - x_1)(x - x_2) = 0$ and expanding: $a[x^2 - (x_1 + x_2)x + x_1 x_2] = 0$. Matching coefficients with $ax^2 + bx + c$ produces both formulas.

// Vieta's formulas serve three purposes. First, they verify solutions: after solving $x^2 - 7x + 10 = 0$ and obtaining $x_1 = 2$, $x_2 = 5$, check that $2 + 5 = 7 = -\\frac{-7}{1}$ and $2 \\cdot 5 = 10 = \\frac{10}{1}$. Both match, confirming the answers.

// Second, they construct equations from known roots. If a quadratic equation must have roots $x_1 = -3$ and $x_2 = 4$, then $x_1 + x_2 = 1$ and $x_1 \\cdot x_2 = -12$, so the equation is $x^2 - x - 12 = 0$ (taking $a = 1$). The roots determine the equation uniquely up to a constant multiple.

// Third — and often overlooked — they can be used to solve quadratic equations directly when the roots are simple integers. Instead of factoring or applying the formula, the question becomes: which two numbers sum to $-\\frac{b}{a}$ and multiply to $\\frac{c}{a}$? For $x^2 - 7x + 10 = 0$, this asks for two numbers summing to $7$ and multiplying to $10$ — namely $2$ and $5$. The roots are read off by inspection. This approach is fastest when applicable but limited: it works only when the roots are obvious enough to spot, which restricts it to quadratics with integer or simple rational solutions. For irrational or complex roots, the formula remains necessary. In practice, Vieta's inspection is essentially a special case of factoring — finding the factorization $(x - x_1)(x - x_2)$ by going through the roots rather than the trinomial — but it is fast enough on simple cases to deserve recognition as a method in its own right.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj7: {
//     title: `Reducible Equations`,
//     content: `Certain equations of degree higher than two can be converted into quadratic equations through substitution. The key is recognizing that the equation's structure mirrors the quadratic pattern $au^2 + bu + c = 0$, with some expression playing the role of $u$.

// The most common case is the bi-quadratic equation $ax^4 + bx^2 + c = 0$. Setting $u = x^2$ transforms it into $au^2 + bu + c = 0$, a standard quadratic in $u$. Solving for $u$ yields up to two values, and each positive value of $u$ produces two values of $x$ via $x = \\pm\\sqrt{u}$. A negative value of $u$ contributes no real solutions for $x$.

// For example, $x^4 - 5x^2 + 4 = 0$ becomes $u^2 - 5u + 4 = 0$ with $u = x^2$. Factoring gives $(u - 1)(u - 4) = 0$, so $u = 1$ or $u = 4$. Back-substituting: $x^2 = 1$ gives $x = \\pm 1$, and $x^2 = 4$ gives $x = \\pm 2$. The original quartic has four real solutions.

// The substitution pattern extends beyond powers of $x$. Any equation of the form $a[f(x)]^2 + b[f(x)] + c = 0$ is quadratic in $f(x)$. Setting $u = f(x)$ reduces it, and back-substitution after solving requires solving $f(x) = u_1$ and $f(x) = u_2$ separately. Extraneous solutions can arise during back-substitution, so every candidate must be checked in the original equation.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj8: {
//     title: `Connection to Graphing`,
//     content: `The solutions of $ax^2 + bx + c = 0$ correspond to the points where the parabola $y = ax^2 + bx + c$ meets the $x$-axis. At these points the output value is zero, which is precisely what the equation demands. The discriminant controls the geometry of this intersection.

// When $\\Delta > 0$, the parabola crosses the $x$-axis at two distinct points, and the equation has two real solutions. The horizontal distance between these crossing points is $\\frac{\\sqrt{\\Delta}}{|a|}$, so a larger discriminant means the roots are farther apart.

// When $\\Delta = 0$, the parabola is tangent to the $x$-axis — it touches at exactly one point and turns back. The vertex of the parabola sits on the axis, and the double root $x = -\\frac{b}{2a}$ is the $x$-coordinate of that vertex.

// When $\\Delta < 0$, the parabola lies entirely above the $x$-axis (if $a > 0$) or entirely below it (if $a < 0$). It never reaches the axis, so no real intersection exists and the equation has no real solutions. The vertex is the closest the parabola comes to the axis, and the gap between them reflects how negative the discriminant is.

// The sign of $a$ determines the parabola's orientation — opening upward when $a > 0$ and downward when $a < 0$ — but it does not affect the number of solutions. That role belongs exclusively to the discriminant.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj9: {
//     title: `Summary of Solving Methods`,
//     content: `Four methods cover every quadratic equation in practice. Two are universal — completing the square and the quadratic formula always work. Two depend on the equation's specific structure: factoring needs a clean rational decomposition, and Vieta's inspection needs roots simple enough to spot. The table below summarizes when to reach for each, whether it is universal, and what insight each one produces beyond the solution itself.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// };


const sectionsContent = {

  obj0: {
    title: `Key Terms`,
    content: `
## Equation Structure

- [Standard Form](!/algebra/definitions#standard_form) — $ax^2 + bx + c = 0$ with $a \\neq 0$
- [Degree of an Equation](!/algebra/definitions#degree_of_an_equation) — quadratic equations have degree $2$
- [Coefficient](!/algebra/definitions#coefficient) — the values $a$, $b$, $c$ that determine the equation's behavior

## Solutions

- [Discriminant](!/algebra/definitions#discriminant) — $\\Delta = b^2 - 4ac$, determines the number and type of solutions
- [Solution Set](!/algebra/definitions#solution_set) — may contain two, one, or zero real values
- [Extraneous Solution](!/algebra/definitions#extraneous_solution) — may arise from non-reversible steps during solving

## Formulas Used on This Page

- [Quadratic Formula](!/algebra/formulas#quadratic_formula) — $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$
- [Discriminant](!/algebra/formulas#discriminant) — $\\Delta = b^2 - 4ac$
- [Square Root Property](!/algebra/formulas#square_root_property) — $x^2 = p \\implies x = \\pm\\sqrt{p}$
- [Completing the Square](!/algebra/formulas#completing_the_square) — $x^2 + bx = \\left(x + \\frac{b}{2}\\right)^2 - \\frac{b^2}{4}$
- [Vieta's Formulas (Quadratic)](!/algebra/formulas#vietas_formulas_quadratic) — $x_1 + x_2 = -\\frac{b}{a}$, $x_1 \\cdot x_2 = \\frac{c}{a}$
`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@

@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Formulas](!/algebra/formulas) →@
`,
    link: '',
  },

  obj1: {
    title: `Definition and Standard Form`,
    content: `A quadratic equation in one variable is any equation that can be written as

@academic[formula_callout:Definition and Standard Form
$$ax^2 + bx + c = 0$$]@

where $a$, $b$, and $c$ are real constants and $a \\neq 0$. The requirement $a \\neq 0$ is what makes the equation genuinely quadratic — if $a$ were zero, the $x^2$ term would vanish and the equation would reduce to a [linear equation](!/algebra/equations/linear).

The word "quadratic" derives from the Latin word for square, reflecting the presence of $x^2$ as the highest-degree term. The coefficient $a$ is the leading coefficient, $b$ is the linear coefficient, and $c$ is the constant term. Every quadratic equation can be brought into standard form by rearranging: moving all terms to one side and ordering by descending powers of $x$.

The equation $x^2 = 5x - 6$, for instance, is not in standard form but is still quadratic. Subtracting $5x$ and adding $6$ to both sides yields $x^2 - 5x + 6 = 0$, with $a = 1$, $b = -5$, and $c = 6$. Recognition is the first step — any equation reducible to the form above, regardless of how it is initially presented, is quadratic and amenable to the methods on this page.`,
    before: ``,
    after: ``,
    link: '',
  },
  notation: {
    title: `Quadratic Notation`,
    lead: `The contract behind $a$, $b$, $c$, the two letters that both mean discriminant, and what a lowered index does that a raised one does not.`,
    inherited: `The $\\pm$ — [radical notation](!/algebra/roots/properties#notation); $i$ and the conjugate pair — [complex numbers](!/complex-numbers/basics); $\\sqrt{\\ }$ — [roots](!/algebra/roots/properties#notation).`,
    entries: [
      {
        id: 'standard-form-contract',
        tex: `$ax^2 + bx + c = 0$`,
        read: `Standard form — descending powers, everything on the left`,
        means: `A notational contract, not just a tidy habit: $a$, $b$, $c$ have meaning **only relative to this form**. The formula and the discriminant read their inputs from it — feed them coefficients from an unrearranged equation and every sign is suspect.`,
        cases: `From $x^2 = 5x - 6$ the contract reads $b = -5$, not $5$ — the sign travels with the term during the rearrangement in **Definition and Standard Form** above. The function $f(x) = ax^2 + bx + c$ is a different object: a parabola; the $= 0$ asks only where it crosses.`,
        alsoWritten: `Monic form $x^2 + px + q = 0$ — after dividing by $a$; Vieta's formulas are cleanest there, as p and q pick up the sum and product directly.`,
        confusedWith: `A claim about $x$. Standard form asserts nothing by itself — it is a **position** for the pieces, the notational equivalent of lining up digits before long division.`,
      },
      {
        id: 'discriminant-letters',
        tex: `$\\Delta = b^2 - 4ac$`,
        read: `Delta — the discriminant`,
        means: `One number, two letter traditions: $\\Delta$ in most international and university texts — this page's choice, in **The Discriminant** below — and capital $D$ in Russian, German, and much school-level writing. Same definition, same verdicts.`,
        cases: `The sign is the whole message: $\\Delta > 0$ two real roots, $\\Delta = 0$ a double root, $\\Delta < 0$ a conjugate pair. Nothing else about $\\Delta$ is ever used at this level.`,
        alsoWritten: `$D = b^2 - 4ac$ — interchangeable; pick whichever your course uses and stay with it.`,
        confusedWith: `The other deltas. $\\Delta x$ is an [increment](!/calculus/derivatives/differentials#notation) and $\\Delta$ alone often means “change in” — the discriminant $\\Delta$ is a single fixed number computed from coefficients, related to neither.`,
      },
      {
        id: 'root-subscripts',
        tex: `$x_1, \\; x_2$`,
        read: `x one and x two — the two roots`,
        means: `Lowered indices **enumerate**: $x_1$ and $x_2$ are two different numbers sharing a letter. Position is everything — lowered counts, raised operates: $x_2$ is the second root, $x^2$ is a square.`,
        cases: `A double root is written $x_1 = x_2$ — two labels, one value. Vieta's formulas in **Vieta's Formulas** below treat the pair symmetrically, which is why the labels never need to say which root is which.`,
        alsoWritten: `$x'$, $x''$ in some older European texts — a prime-based enumeration that collides with [derivative notation](!/calculus/derivatives/function#notation) and has largely died out for exactly that reason.`,
        confusedWith: `Sequence indexing. In [sequences](!/algebra/sequences) the subscript $a_n$ runs over infinitely many positions; here it is a finite enumeration — two names, fixed in advance, nothing running.`,
      },
    ],
    symbolsHref: `/math-symbols/algebra`,
    symbolsLabel: `All algebra symbols`,
    parentHref: `/algebra/equations`,
    parentLabel: `Equations`,
  },

  obj2: {
    title: `Solving by Factoring`,
    content: `@academic[rule:Zero-product property
When the quadratic expression $ax^2 + bx + c$ can be decomposed into a product of two first-degree factors, the equation reduces to a pair of [linear equations](!/algebra/equations/linear) through the zero-product property: if a product of two factors equals zero, at least one of the factors must be zero.]@

Consider $x^2 - 5x + 6 = 0$. The left side factors as $(x - 2)(x - 3) = 0$. Setting each factor equal to zero gives $x - 2 = 0$ or $x - 3 = 0$, so $x = 2$ or $x = 3$. Both values satisfy the original equation.

@academic[pitfall,aside:true,width:35%:Factoring before the right side is zero
Setting each factor of $x(x - 1) = 6$ equal to $6$ gives $x = 6$ or $x = 7$, but $6 \\cdot 5 = 30$. Moving the $6$ first gives $x^2 - x - 6 = (x - 3)(x + 2) = 0$, so $x = 3$ or $x = -2$.
[Read more](!#pitfalls)]@

When the leading coefficient is not $1$, factoring requires more care. The equation $6x^2 + x - 2 = 0$ factors as $(2x - 1)(3x + 2) = 0$, giving $x = \\frac{1}{2}$ or $x = -\\frac{2}{3}$. Finding these factors involves searching for two binomials whose product reconstructs the original trinomial — a process that amounts to finding two numbers whose product is $ac$ and whose sum is $b$.

Factoring is efficient when it works, but it has a fundamental limitation: not every quadratic with rational coefficients factors into binomials with rational entries. The equation $x^2 - 2 = 0$ has solutions $x = \\pm\\sqrt{2}$, which are irrational, so no factorization over the rationals exists. A method that handles every quadratic without exception requires a different approach.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Solving by Completing the Square`,
    content: `Completing the square transforms any quadratic equation into a form where the solution can be extracted by taking a square root. The method works unconditionally — it does not depend on whether the quadratic factors neatly.

@academic[formula_callout:Square Root Property
$$x^2 = p \\implies x = \\pm\\sqrt{p}$$
/algebra/formulas#square_root_property]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

@academic[formula_callout:Completing the Square
$$x^2 + bx = \\left(x + \\frac{b}{2}\\right)^2 - \\frac{b^2}{4}$$
/algebra/formulas#completing_the_square]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

Starting from $ax^2 + bx + c = 0$, divide every term by $a$ to obtain $x^2 + \\frac{b}{a}x + \\frac{c}{a} = 0$. Move the constant to the right side:

@academic[formula_callout:Solving by Completing the Square
$$x^2 + \\frac{b}{a}x = -\\frac{c}{a}$$]@

The left side is almost a perfect square trinomial. Adding $\\left(\\frac{b}{2a}\\right)^2$ to both sides completes it:

@academic[formula_callout:Solving by Completing the Square
$$x^2 + \\frac{b}{a}x + \\frac{b^2}{4a^2} = \\frac{b^2}{4a^2} - \\frac{c}{a}$$]@

The left side factors as a perfect square:

@academic[formula_callout:Solving by Completing the Square
$$\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2 - 4ac}{4a^2}$$]@

@academic[pitfall,aside:true,width:35%:Dropping the negative square root
Taking only the positive root of $(x - 2)^2 = 9$ gives $x - 2 = 3$, so $x = 5$ alone. Both roots count: $x - 2 = \\pm 3$, so $x = 5$ or $x = -1$.
[Read more](!#pitfalls)]@

Taking the square root of both sides and isolating $x$ gives the two solutions. The expression under the square root, $b^2 - 4ac$, determines whether those solutions are real or complex.

As a concrete example, consider $x^2 + 6x + 2 = 0$. Move the constant: $x^2 + 6x = -2$. Half of $6$ is $3$, and $3^2 = 9$. Add $9$ to both sides: $x^2 + 6x + 9 = 7$. Factor: $(x + 3)^2 = 7$. Take roots: $x + 3 = \\pm\\sqrt{7}$. The solutions are $x = -3 + \\sqrt{7}$ and $x = -3 - \\sqrt{7}$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `The Quadratic Formula`,
    content: `Applying the method of completing the square to the general equation $ax^2 + bx + c = 0$ — with letters in place of specific numbers — produces a universal formula:

@academic[formula_callout:Quadratic Formula
$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$
/algebra/formulas#quadratic_formula]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

This is the quadratic formula. It accepts any real coefficients $a$, $b$, $c$ (with $a \\neq 0$) and returns the solutions directly. The $\\pm$ symbol indicates that two values are generated: one using the positive square root and one using the negative.

For the equation $2x^2 - 3x - 5 = 0$, the coefficients are $a = 2$, $b = -3$, $c = -5$. Substituting:

@academic[formula_callout:The Quadratic Formula
$$x = \\frac{-(-3) \\pm \\sqrt{(-3)^2 - 4(2)(-5)}}{2(2)} = \\frac{3 \\pm \\sqrt{9 + 40}}{4} = \\frac{3 \\pm \\sqrt{49}}{4} = \\frac{3 \\pm 7}{4}$$]@

@academic[pitfall,aside:true,width:35%:Dividing only the root by 2a
Writing $x = -b \\pm \\frac{\\sqrt{b^2 - 4ac}}{2a}$ for $x^2 - 6x + 5 = 0$ gives $6 \\pm \\frac{4}{2}$, so $8$ and $4$. The whole numerator goes over $2a$: $\\frac{6 \\pm 4}{2}$, so $x = 5$ or $x = 1$.
[Read more](!#pitfalls)]@

The two solutions are $x = \\frac{10}{4} = \\frac{5}{2}$ and $x = \\frac{-4}{4} = -1$.

The formula is not a separate technique from completing the square — it is the result of completing the square once, in general form, so that the work never needs repeating. Every specific application of completing the square arrives at the same place the formula reaches in a single substitution.

To solve your own quadratic equation with each step shown, use the [quadratic equation solver](!/algebra/calculators/equations/quadratic).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `The Discriminant`,
    content: `The expression appearing under the square root in the quadratic formula is called the discriminant:

@academic[formula_callout:Discriminant
$$\\Delta = b^2 - 4ac$$
/algebra/formulas#discriminant]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

Its value determines the nature and number of solutions without requiring the full computation.

When $\\Delta > 0$, the square root is a positive real number, and the formula produces two distinct real solutions. The equation $x^2 - 5x + 3 = 0$ has $\\Delta = 25 - 12 = 13 > 0$, so two different real roots exist.

When $\\Delta = 0$, the square root vanishes, and the formula collapses to a single value $x = -\\frac{b}{2a}$. The quadratic has a repeated root — a double root — and the polynomial factors as $a(x - r)^2$ where $r = -\\frac{b}{2a}$. The equation $x^2 - 6x + 9 = 0$ has $\\Delta = 36 - 36 = 0$ and the single solution $x = 3$.

@academic[pitfall,aside:true,width:35%:Losing the sign of a negative c
Computing $-4ac$ for $x^2 + 2x - 3 = 0$ as $-12$ gives $\\Delta = 4 - 12 = -8$ and no real roots. With $c = -3$, $-4ac = -4(1)(-3) = 12$, so $\\Delta = 16$ and $x = 1$ or $x = -3$.
[Read more](!#pitfalls)]@

When $\\Delta < 0$, no real number has a negative square, so the square root does not produce a real value. Over the real numbers, the equation has no solutions. Over the [complex numbers](!/complex-numbers), the formula yields two conjugate roots $x = \\frac{-b \\pm i\\sqrt{|\\Delta|}}{2a}$, where $i$ is the imaginary unit. The equation $x^2 + x + 1 = 0$ has $\\Delta = 1 - 4 = -3 < 0$ and the complex roots $x = \\frac{-1 \\pm i\\sqrt{3}}{2}$.

The discriminant is a diagnostic tool: it classifies the equation's solution structure from the coefficients alone.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Vieta's Formulas`,
    content: `The French mathematician François Viète established a direct relationship between the roots of a quadratic equation and its coefficients. For the equation $ax^2 + bx + c = 0$ with roots $x_1$ and $x_2$:

@academic[formula_callout:Vieta's Formulas (Quadratic)
$$x_1 + x_2 = -\\frac{b}{a} \\qquad x_1 \\cdot x_2 = \\frac{c}{a}$$
/algebra/formulas#vietas_formulas_quadratic]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

These identities follow from factoring the quadratic as $a(x - x_1)(x - x_2) = 0$ and expanding: $a[x^2 - (x_1 + x_2)x + x_1 x_2] = 0$. Matching coefficients with $ax^2 + bx + c$ produces both formulas.

Vieta's formulas serve three purposes. First, they verify solutions: after solving $x^2 - 7x + 10 = 0$ and obtaining $x_1 = 2$, $x_2 = 5$, check that $2 + 5 = 7 = -\\frac{-7}{1}$ and $2 \\cdot 5 = 10 = \\frac{10}{1}$. Both match, confirming the answers.

Second, they construct equations from known roots. If a quadratic equation must have roots $x_1 = -3$ and $x_2 = 4$, then $x_1 + x_2 = 1$ and $x_1 \\cdot x_2 = -12$, so the equation is $x^2 - x - 12 = 0$ (taking $a = 1$).

@academic[rule_corollary_plain:The roots determine the equation uniquely up to a constant multiple.]@

Third — and often overlooked — they can be used to solve quadratic equations directly when the roots are simple integers. Instead of factoring or applying the formula, the question becomes: which two numbers sum to $-\\frac{b}{a}$ and multiply to $\\frac{c}{a}$? For $x^2 - 7x + 10 = 0$, this asks for two numbers summing to $7$ and multiplying to $10$ — namely $2$ and $5$. The roots are read off by inspection. This approach is fastest when applicable but limited: it works only when the roots are obvious enough to spot, which restricts it to quadratics with integer or simple rational solutions. For irrational or complex roots, the formula remains necessary. In practice, Vieta's inspection is essentially a special case of factoring — finding the factorization $(x - x_1)(x - x_2)$ by going through the roots rather than the trinomial — but it is fast enough on simple cases to deserve recognition as a method in its own right.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Reducible Equations`,
    content: `Certain equations of degree higher than two can be converted into quadratic equations through substitution. The key is recognizing that the equation's structure mirrors the quadratic pattern $au^2 + bu + c = 0$, with some expression playing the role of $u$.

The most common case is the bi-quadratic equation $ax^4 + bx^2 + c = 0$. Setting $u = x^2$ transforms it into $au^2 + bu + c = 0$, a standard quadratic in $u$. Solving for $u$ yields up to two values, and each positive value of $u$ produces two values of $x$ via $x = \\pm\\sqrt{u}$. A negative value of $u$ contributes no real solutions for $x$.

For example, $x^4 - 5x^2 + 4 = 0$ becomes $u^2 - 5u + 4 = 0$ with $u = x^2$. Factoring gives $(u - 1)(u - 4) = 0$, so $u = 1$ or $u = 4$. Back-substituting: $x^2 = 1$ gives $x = \\pm 1$, and $x^2 = 4$ gives $x = \\pm 2$. The original quartic has four real solutions.

@academic[pitfall,aside:true,width:35%:Stopping at the substitute variable
Giving $u = 4$ and $u = -1$ as the solutions of $x^4 - 3x^2 - 4 = 0$ answers for $u$, not for $x$. Back-substituting, $x^2 = 4$ gives $x = \\pm 2$ and $x^2 = -1$ gives no real $x$, so the real solutions are $x = \\pm 2$.
[Read more](!#pitfalls)]@

The substitution pattern extends beyond powers of $x$. Any equation of the form $a[f(x)]^2 + b[f(x)] + c = 0$ is quadratic in $f(x)$. Setting $u = f(x)$ reduces it, and back-substitution after solving requires solving $f(x) = u_1$ and $f(x) = u_2$ separately. Extraneous solutions can arise during back-substitution, so every candidate must be checked in the original equation.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Connection to Graphing`,
    content: `@academic[rule_plain:The solutions of $ax^2 + bx + c = 0$ correspond to the points where the parabola $y = ax^2 + bx + c$ meets the $x$-axis.]@

At these points the output value is zero, which is precisely what the equation demands. The discriminant controls the geometry of this intersection.

When $\\Delta > 0$, the parabola crosses the $x$-axis at two distinct points, and the equation has two real solutions. The horizontal distance between these crossing points is $\\frac{\\sqrt{\\Delta}}{|a|}$, so a larger discriminant means the roots are farther apart.

When $\\Delta = 0$, the parabola is tangent to the $x$-axis — it touches at exactly one point and turns back. The vertex of the parabola sits on the axis, and the double root $x = -\\frac{b}{2a}$ is the $x$-coordinate of that vertex.

When $\\Delta < 0$, the parabola lies entirely above the $x$-axis (if $a > 0$) or entirely below it (if $a < 0$). It never reaches the axis, so no real intersection exists and the equation has no real solutions. The vertex is the closest the parabola comes to the axis, and the gap between them reflects how negative the discriminant is.

The sign of $a$ determines the parabola's orientation — opening upward when $a > 0$ and downward when $a < 0$ — but it does not affect the number of solutions. That role belongs exclusively to the discriminant.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Summary of Solving Methods`,
    content: `Four methods cover every quadratic equation in practice. Two are universal — completing the square and the quadratic formula always work. Two depend on the equation's specific structure: factoring needs a clean rational decomposition, and Vieta's inspection needs roots simple enough to spot. The table below summarizes when to reach for each, whether it is universal, and what insight each one produces beyond the solution itself.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Common Pitfalls`,
    content: `Five mistakes account for most wrong answers to quadratic equations. Each one is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Factoring before the right side is zero**

The equation is already written as a product, but the product equals a number other than zero. The zero-product property is applied anyway, and each factor is set equal to that number.

Wrong working:
$$x(x - 1) = 6 \\implies x = 6 \\text{ or } x - 1 = 6 \\implies x = 6 \\text{ or } x = 7$$

Right working: move every term to one side first.
$$x^2 - x - 6 = 0 \\implies (x - 3)(x + 2) = 0 \\implies x = 3 \\text{ or } x = -2$$

Why it happens: the left side already looks factored, so bringing the equation to standard form seems unnecessary. But the zero-product property works only because zero is special: a product is $0$ only when one factor is $0$, while a product of $6$ can come from $2 \\cdot 3$, $12 \\cdot \\frac{1}{2}$ or infinitely many other pairs.

How to check: substitute each answer into the original equation. $x = 6$ gives $6 \\cdot 5 = 30$ and $x = 7$ gives $7 \\cdot 6 = 42$, neither equal to $6$. The right answers give $3 \\cdot 2 = 6$ and $(-2)(-3) = 6$.

**Dropping the negative square root**

After completing the square, the equation has the form $(x + k)^2 = p$ with $p > 0$, and only the positive square root of $p$ is taken.

Wrong working:
$$(x - 2)^2 = 9 \\implies x - 2 = 3 \\implies x = 5$$

Right working: both $3$ and $-3$ square to $9$.
$$(x - 2)^2 = 9 \\implies x - 2 = \\pm 3 \\implies x = 5 \\text{ or } x = -1$$

Why it happens: the symbol $\\sqrt{9}$ means only the positive root, $3$, and taking the square root of both sides is read as applying that symbol. The equation asks for every number whose square is $9$, and there are two.

How to check: when $p > 0$, the equation $(x + k)^2 = p$ always has two roots, placed symmetrically around $x = -k$. Here $5$ and $-1$ lie $3$ units on either side of $2$, and $(-1 - 2)^2 = 9$.

**Dividing only the root by 2a**

The quadratic formula is copied with the fraction bar under the square root alone, so $-b$ is left outside the division.

Wrong working for $x^2 - 6x + 5 = 0$, with $a = 1$, $b = -6$, $c = 5$ and $\\Delta = 36 - 20 = 16$:
$$x = 6 \\pm \\frac{\\sqrt{16}}{2} = 6 \\pm 2 \\implies x = 8 \\text{ or } x = 4$$

Right working: the whole numerator $-b \\pm \\sqrt{\\Delta}$ is divided by $2a$.
$$x = \\frac{6 \\pm 4}{2} \\implies x = 5 \\text{ or } x = 1$$

Why it happens: the formula is often written or remembered in one line, and the length of the fraction bar gets lost. On a calculator the same slip appears when the numerator is not put in brackets.

How to check: by Vieta's formulas the roots must add up to $-\\frac{b}{a} = 6$ and multiply to $\\frac{c}{a} = 5$. The wrong pair gives $8 + 4 = 12$ and $8 \\cdot 4 = 32$; the right pair gives $5 + 1 = 6$ and $5 \\cdot 1 = 5$.

**Losing the sign of a negative c**

The discriminant is computed with the minus sign in $-4ac$ but without the sign of $c$ itself, so a negative $c$ is treated as positive.

Wrong working for $x^2 + 2x - 3 = 0$:
$$\\Delta = 2^2 - 4 \\cdot 1 \\cdot 3 = 4 - 12 = -8 < 0$$
which suggests the equation has no real solutions.

Right working: with $c = -3$,
$$\\Delta = 2^2 - 4(1)(-3) = 4 + 12 = 16 > 0$$
so there are two real roots, $x = \\frac{-2 \\pm 4}{2}$, that is $x = 1$ or $x = -3$.

Why it happens: the formula already contains a minus sign, and writing the coefficients without brackets hides the second one.

How to check: when $a$ and $c$ have opposite signs, $-4ac$ is positive, so $\\Delta = b^2 - 4ac > 0$ and the equation always has two real roots. A negative discriminant in that case means a sign was lost. Factoring confirms the roots here: $(x - 1)(x + 3) = x^2 + 2x - 3$.

**Stopping at the substitute variable**

In a reducible equation, the substitution $u = x^2$ turns the problem into a quadratic in $u$, and the values of $u$ are reported as the answer.

Wrong working:
$$x^4 - 3x^2 - 4 = 0 \\implies u^2 - 3u - 4 = 0 \\implies (u - 4)(u + 1) = 0 \\implies u = 4 \\text{ or } u = -1$$

Right working: each value of $u$ is turned back into an equation in $x$. From $x^2 = 4$, $x = 2$ or $x = -2$. From $x^2 = -1$ there is no real $x$. The real solutions are $x = 2$ and $x = -2$.

Why it happens: solving the quadratic in $u$ feels like the end of the problem, because it is the step where the familiar methods are used. The question, though, was asked about $x$.

How to check: substitute the answers into the original equation. $x = 2$ gives $16 - 12 - 4 = 0$. Read as values of $x$, the numbers $4$ and $-1$ fail: $x = 4$ gives $256 - 48 - 4 = 204$ and $x = -1$ gives $1 - 3 - 4 = -6$.`,
    before: ``,
    after: ``,
    link: '',
  },
};

 const introContent = {
  id: 'intro',
  title: `Second-Degree Equations and the Threshold of Multiplicity`,
  content: `When the unknown is squared, equations acquire a new dimension of complexity. A quadratic equation can produce two solutions, one solution, or no real solutions at all — and a single quantity built from its coefficients determines which case applies before any solving begins. Several distinct methods handle the solving itself, each suited to different situations but all ultimately equivalent. Quadratic equations sit at the boundary between elementary algebra and the richer structure of polynomial equations, and the tools developed here — the discriminant, factoring, completing the square, the quadratic formula, and Vieta's formulas — recur throughout mathematics.`,
};

const faqQuestions = {
  obj1: {
    question: "In $x^2 = 5x - 6$, is $b$ equal to $5$ or $-5$?",
    answer: "It is $-5$. The letters $a$, $b$ and $c$ mean nothing until the equation sits in standard form, so rearrange first: $x^2 - 5x + 6 = 0$. The sign travels with the term as it crosses, giving $a = 1$, $b = -5$, $c = 6$. Reading coefficients off an unrearranged equation makes every sign in the formula suspect.",
    sectionId: "notation"
  },
  obj2: {
    question: "Is the discriminant written $\\Delta$ or $D$?",
    answer: "Both, and they mean the same thing. International and university texts favour $\\Delta$, while Russian, German and much school-level writing use capital $D$; the definition $b^2 - 4ac$ and the verdicts are identical. Pick whichever your course uses and stay consistent. Note that this $\\Delta$ is unrelated to $\\Delta x$, which means a change in $x$.",
    sectionId: "notation"
  },
  obj3: {
    question: "What is the difference between $x_2$ and $x^2$?",
    answer: "Position decides: a lowered index enumerates, a raised one operates. So $x_2$ is the second root, a number in its own right, while $x^2$ is $x$ multiplied by itself. A double root is written $x_1 = x_2$, meaning two labels pointing at one value, which is why the subscripts never have to say which root is which.",
    sectionId: "notation"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Quadratic Equations",
    "description": "Complete guide to quadratic equations: standard form ax² + bx + c = 0, solving by factoring, completing the square, quadratic formula, discriminant analysis, Vieta's formulas, reducible equations, and parabola connections.",
    "url": "https://www.learnmathclass.com/algebra/equations/quadratic",
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
      "name": "Quadratic Equations"
    },
    "teaches": [
      "Standard form ax² + bx + c = 0",
      "Solving by factoring with zero-product property",
      "Completing the square method",
      "The quadratic formula",
      "Discriminant and solution classification",
      "Vieta's formulas for sum and product of roots",
      "Reducible bi-quadratic equations"
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
        "name": "Equations",
        "item": "https://www.learnmathclass.com/algebra/equations"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Quadratic Equations",
        "item": "https://www.learnmathclass.com/algebra/equations/quadratic"
      }
    ]
  },
}



  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const fpZeroProduct = {
    kind: 'product', svgTitle: '(x - 2)(x - 3) = 0 exactly where x - 2 = 0 or x - 3 = 0', f: (x) => x - 2, g: (x) => x - 3, xRange: [-0.5, 5.5], yRange: [-4, 8], yStep: 2,
    zeros: [{ x: 2, label: 'x = 2: x − 2 = 0', dy: 52 }, { x: 3, label: 'x = 3: x − 3 = 0', factor: 'g' }],
    fLabel: { text: 'x − 2', x: 5.3 }, gLabel: { text: 'x − 3', x: -0.4 }, productLabel: { text: '(x − 2)(x − 3) = x² − 5x + 6', x: 2.5, y: 7 },
    caption: 'The product is zero exactly where one factor is zero',
  };
  const fpFormulaRoots = { kind: 'pieces', svgTitle: '2x^2 - 3x - 5 = 0: roots 3/4 plus or minus 7/4', xRange: [-2, 4], yRange: [-7, 8],
  pieces: [{ fn: (x) => 2 * x * x - 3 * x - 5, from: -2, to: 4, ends: [null, null], color: 'f', label: { text: 'y = 2x² − 3x − 5', x: 2.9, y: 6.5, pos: 'w' } }],
  vlines: [{ x: 0.75, label: 'axis x = −b/2a = 3/4' }],
  points: [{ x: -1, y: 0 }, { x: 2.5, y: 0 }],
  notes: [{ x: -1.05, y: -1.6, text: '3/4 − 7/4 = −1', pos: 'w', color: 'r' }, { x: 2.55, y: -1.6, text: '3/4 + 7/4 = 5/2', pos: 'e', color: 'r' }],
  caption: 'Roots = −b/2a ± √Δ/2a: 7/4 either side of the axis' };

  const demoUnits = {
    complete: demoUnitFrame({
      svg: completeTheSquareDiagrams['step-vertex'],
      caption: 'x&#178; + 6x + 5 = 0 becomes (x + 3)&#178; &#8722; 4 = 0',
      text: 'The x&#178; block and the 6x strip, split into two 3x halves, form an incomplete square; adding the 3 &#215; 3 corner completes it, and the constant 5 falls short of that 9 by 4, so the equation reads (x + 3)&#178; = 4 and x + 3 = &#177;2. The method is this rearrangement of area. Step through the corner and the gap on the',
      href: '/algebra/visual-tools/completing-square',
      linkText: 'completing the square visualizer',
    }),
    discriminant: demoUnitFrame({
      svg: equationVisualizerDiagrams['quad-none'],
      caption: 'x&#178; + 4 = 0: the parabola never reaches the axis',
      text: 'The vertex sits at height 4 above the axis, so no real x makes the expression zero: the discriminant 0&#178; &#8722; 4 &#183; 1 &#183; 4 = &#8722;16 is negative and there are no crossings to mark. Lower the parabola by 4 and the crossings merge into one at the vertex; lower it further and two appear. Watch the discriminant change sign on the',
      href: '/algebra/visual-tools/equation',
      linkText: 'equation visual explorer',
    }),
    graph: demoUnitFrame({
      svg: equationVisualizerDiagrams['quad-two'],
      caption: 'x&#178; &#8722; 4 = 0: the solutions are the x-intercepts',
      text: 'The two crossings of the parabola with the axis, at &#8722;2 and 2, are the two solutions of the equation: solving a quadratic and finding the x-intercepts of its graph are the same task. The vertex halfway between them sits on the axis of symmetry x = &#8722;b/2a. Drag the parabola and watch the intercepts move together on the',
      href: '/algebra/visual-tools/equation',
      linkText: 'equation visual explorer',
    }),
    notStandard: demoUnitFrame({
      svg: equationVisualizerDiagrams['quad-high'],
      caption: 'x&#178; &#8722; 2x &#8722; 3 = 5: a quadratic not yet in standard form',
      text: 'The left side is drawn as a parabola and the right side 5 as a level above the axis; the solutions are where the two meet. Moving the 5 across gives x&#178; &#8722; 2x &#8722; 8 = 0, which lowers the parabola by 5 so the same solutions become its crossings of the axis, the standard-form picture. Shift the level yourself on the',
      href: '/algebra/visual-tools/equation',
      linkText: 'equation visual explorer',
    }),
    zeroProduct: demoUnitFrame({
      svg: renderFunctionPlot(fpZeroProduct),
      caption: 'Factoring turns one quadratic into two linear equations',
      text: 'The section\'s x&#178; &#8722; 5x + 6 = (x &#8722; 2)(x &#8722; 3). The two factor lines cross the axis at x = 2 and x = 3, and the parabola, their product, is zero at exactly those inputs and nowhere else: a product vanishes only when one of its factors does.',
    }),
    formulaRoots: demoUnitFrame({
      svg: renderFunctionPlotV4(fpFormulaRoots),
      caption: 'What the &#177; in the formula does',
      text: 'The section\'s 2x&#178; &#8722; 3x &#8722; 5 = 0. The term &#8722;b/2a = 3/4 is the parabola\'s axis of symmetry; &#8730;&#916;/2a = &#8730;49/4 = 7/4 is how far each root sits from it. The &#177; sends one root left and one right: 3/4 &#8722; 7/4 = &#8722;1 and 3/4 + 7/4 = 5/2.',
    }),
  };

  const quadMethodTree = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'Four ways to solve a quadratic',
    preface: 'Two methods always work; two are shortcuts that work only when the numbers cooperate.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'Start fast, fall back safe',
    conclusion: 'Try factoring or Vieta first; when they fail, completing the square or the formula always finish the job.',
    root: { name: 'Solving quadratic equations', sub: '4 methods' },
    children: [
      { id: 'fact', name: 'Factoring', items: [
        { label: 'Works', text: 'only if it factors over $\\mathbb{Q}$' }, { label: 'Then', text: 'zero-product property' } ] },
      { id: 'cts', name: 'Completing the square', items: [
        { label: 'Works', text: 'always' }, { label: 'Bonus', text: 'derives the formula' } ] },
      { id: 'form', name: 'Quadratic formula', items: [
        { label: 'Works', text: 'always' }, { label: 'Bonus', text: 'shows the discriminant' } ] },
      { id: 'vieta', name: 'Vieta, by inspection', items: [
        { label: 'How', text: 'guess roots from sum $-b/a$ and product $c/a$' } ] },
    ],
  };

  const quadraticFormulaAnatomy = {
    header: {
      kicker: 'the formula, part by part',
      title: 'The quadratic formula',
      lede: 'completing the square once, in general form: put in a, b, c and read off both solutions',
    },
    formula: [
      { kind: 'part', id: 'x', children: [ { kind: 'var', text: 'x' } ] },
      { kind: 'op', text: '=' },
      { kind: 'frac',
        num: [
          { kind: 'part', id: 'mb', children: [ { kind: 'op', text: '−', tight: true }, { kind: 'var', text: 'b' } ] },
          { kind: 'part', id: 'pm', children: [ { kind: 'op', text: '±' } ] },
          { kind: 'rad', children: [
            { kind: 'part', id: 'disc', children: [
              { kind: 'var', text: 'b' }, { kind: 'sup', children: [ { kind: 'op', text: '2', tight: true } ] },
              { kind: 'op', text: '−' }, { kind: 'op', text: '4', tight: true }, { kind: 'var', text: 'a' }, { kind: 'var', text: 'c' },
            ] },
          ] },
        ],
        den: [
          { kind: 'part', id: 'den', children: [ { kind: 'op', text: '2', tight: true }, { kind: 'var', text: 'a' } ] },
        ],
      },
    ],
    parts: [
      { id: 'x', color: '#475569', chip: 'x', title: 'The solutions', side: 'bottom',
        tip: 'The values of x that make ax² + bx + c equal 0.',
        desc: 'What the formula returns: the roots of ax² + bx + c = 0, the points where the parabola meets the x-axis. Example: for 2x² − 3x − 5 = 0 the formula gives x = 5/2 and x = −1.' },
      { id: 'mb', color: '#06357A', chip: '−b', title: 'Centre line', side: 'top',
        tip: 'Over 2a, it marks the midpoint of the two solutions.',
        desc: 'Divided by 2a, −b gives the vertex line x = −b/2a, halfway between the two solutions. When the discriminant is 0, the single solution sits exactly there. Example: b = −3, so −b = 3 and the centre is 3/4, halfway between 5/2 and −1.' },
      { id: 'pm', color: '#0284C7', chip: '±', title: 'Two solutions', side: 'top',
        tip: 'Step the same distance to each side of the centre.',
        desc: 'One solution adds the square root, the other subtracts it, so the two solutions sit symmetrically around −b/2a. Example: (3 + 7)/4 = 5/2 and (3 − 7)/4 = −1.' },
      { id: 'disc', color: '#2563EB', chip: 'b² − 4ac', title: 'Discriminant', side: 'top',
        tip: 'Its sign tells how many real solutions there are.',
        desc: 'The [discriminant](!/algebra/definitions#discriminant): positive gives two real solutions, zero gives one, negative gives none. Its square root sets the gap between them, √Δ / |a|. Example: (−3)² − 4(2)(−5) = 49, √49 = 7, gap 7/2.' },
      { id: 'den', color: '#5B7DB1', chip: '2a', title: 'Divides everything above', side: 'bottom',
        tip: 'It divides the whole numerator, not only the root.',
        desc: 'The whole numerator goes over 2a, and the formula needs a ≠ 0. Example: 2a = 4, so all of 3 ± 7 is divided by 4. Dividing only the 7 gives 3 ± 7/4, which is wrong.' },
    ],
  };

   return {
  props: {
    quadraticFormulaAnatomy,
    quadMethodTree,
    demoUnits,
    sectionsContent,
    introContent,
    obj5Table,
    obj6Table,
    obj7Table,
    obj8Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Quadratic Equations: Formula, Discriminant & Methods | Learn Math Class",
      description: "Complete guide to quadratic equations: standard form ax² + bx + c = 0, solving by factoring, completing the square, quadratic formula, discriminant analysis, Vieta's formulas, reducible equations, and parabola connections.",
      keywords: keyWords.join(", "),
      url: "/algebra/equations/quadratic",
      name: "Quadratic Equations"
    },
  }
}
   }


export default function QuadraticEquationsPage({quadraticFormulaAnatomy, quadMethodTree, 
  seoData,
  sectionsContent,
  introContent,
  obj5Table,
  obj6Table,
  obj7Table,
  obj8Table,
  summaryTable,
  faqQuestions,
  schemas, demoUnits
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const genericSections=[

  {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
          sectionsContent.obj0.after,
        ]
    },
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
          <div key={'unit-notStandard'} dangerouslySetInnerHTML={{ __html: demoUnits.notStandard }} />,
          `Bringing an equation to standard form never changes its solutions, only how they are read.`,
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
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
          <div key={'unit-zeroProduct'} dangerouslySetInnerHTML={{ __html: demoUnits.zeroProduct }} />,
          `The zero-product property is why the right side must be 0 before factoring.`,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
                  <div key={'unit-complete'} dangerouslySetInnerHTML={{ __html: demoUnits.complete }} />,
          `The quadratic formula in the next section is this construction carried out once with letters.`,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <div key={'unit-formulaRoots'} dangerouslySetInnerHTML={{ __html: demoUnits.formulaRoots }} />,
          `When the discriminant is 0 the half-width vanishes and the two roots merge on the axis.`,
          <DiagramFrame
            key={'obj4-diagram'}
            id="quadratic-formula-anatomy"
            title="The quadratic formula, part by part"
            source="/algebra/equations/quadratic"
            before={"Taking the formula apart: the $\\pm$ sign, the discriminant under the root, and the $2a$ below."}
            after={"The part most often misread is the denominator: $2a$ divides $-b$ as well as the square root. The [discriminant](!/algebra/definitions#discriminant) alone tells how many real solutions to expect."}
          >
            <FormulaAnatomy data={quadraticFormulaAnatomy} />
          </DiagramFrame>,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
          <div
            key={'obj5-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj5Table }}
          />,
                  <div key={'unit-discriminant'} dangerouslySetInnerHTML={{ __html: demoUnits.discriminant }} />,
          `Positive, zero, negative: two crossings, one, none.`,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
          <div
            key={'obj6-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj6Table }}
          />,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
          <div
            key={'obj7-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj7Table }}
          />,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
          <div
            key={'obj8-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj8Table }}
          />,
                  <div key={'unit-graph'} dangerouslySetInnerHTML={{ __html: demoUnits.graph }} />,
          `Every algebraic method on this page locates these two points without drawing the curve.`,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
          <div
            key={'summary-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: summaryTable }}
          />,
          <DiagramFrame
            key={'obj9-diagram'}
            id="quadratic-methods-tree"
            title="Four ways to solve a quadratic"
            source="/algebra/equations/quadratic"
          >
            <TopDownTree data={quadMethodTree} />
          </DiagramFrame>,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Quadratic Equations FAQ`,
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
   <br/>
   <br/>
   <br/>
   <br/>
    <OperaSidebar
           side='right'
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         />
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Quadratic Equations</h1>
   <br/>
   <br/>
   <SectionTableOfContents
     sections={genericSections}
     showSecondaryNav={true}
     secondaryNavMode="siblings"
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
   </>
  )
}