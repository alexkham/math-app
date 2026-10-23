
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import CaseSplit from '@/app/components/infographics/CaseSplit/CaseSplit'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
import TaxonomyOutline from '@/app/components/infographics/TaxonomyOutline'


export async function getStaticProps(){
const keyWords = [
  'roots algebra',
  'radicals math',
  'square root',
  'cube root',
  'nth root',
  'principal root',
  'radical notation',
  'radicand and index',
  'rational exponents',
  'simplifying radicals',
  'radical equations',
  'radical functions',
  'even and odd roots',
  'roots and powers connection'
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj4 — aggregation: radical ↔ rational exponent notation mapping
  const obj4Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Operation</th>
      <th style="${tableHeaders.aggregation}">Radical form</th>
      <th style="${tableHeaders.aggregation}">Rational exponent form</th>
      <th style="${tableHeaders.aggregation}">Worked example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Square root</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a^(1/2)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√25 = 25^(1/2) = 5</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Cube root</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∛a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a^(1/3)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∛8 = 8^(1/3) = 2</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">nth root (index n)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ⁿ√a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a^(1/n)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">⁵√32 = 32^(1/5) = 2</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">nth root of a power</td>
      <td style="padding: 12px 15px; color: #34495e;">ⁿ√(aᵐ)</td>
      <td style="padding: 12px 15px; color: #34495e;">a^(m/n)</td>
      <td style="padding: 12px 15px; color: #34495e;">∛(8²) = 8^(2/3) = 4</td>
    </tr>
  </tbody>
</table>
`

  // obj5 — aggregation: the three core radical rules
  const obj5Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Rule</th>
      <th style="${tableHeaders.aggregation}">Formula</th>
      <th style="${tableHeaders.aggregation}">Use case</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Product</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ⁿ√(ab) = ⁿ√a · ⁿ√b</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">splitting or combining a radical across a multiplication</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Quotient</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ⁿ√(a ⁄ b) = ⁿ√a ⁄ ⁿ√b</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">splitting or combining a radical across a division</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Nested radicals</td>
      <td style="padding: 12px 15px; color: #34495e;">ᵐ√(ⁿ√a) = ⁽ᵐⁿ⁾√a</td>
      <td style="padding: 12px 15px; color: #34495e;">collapsing stacked radicals into a single radical by multiplying their indices</td>
    </tr>
  </tbody>
</table>
`

  // obj9 — comparison: even index vs odd index (merges obj3 principal-root + obj9 negative-radicand themes)
  const obj9Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Aspect</th>
      <th style="${tableHeaders.comparison}">Even index (n = 2, 4, 6, …)</th>
      <th style="${tableHeaders.comparison}">Odd index (n = 3, 5, 7, …)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Principal root for positive radicand</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the non-negative real root</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the unique (positive) real root</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Principal root for negative radicand</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">not defined in the real numbers (extends to complex via i)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the unique (negative) real root</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Domain of f(x) = ⁿ√x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x ≥ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all real numbers</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Example: positive radicand</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√16 = 4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∛27 = 3</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Example: negative radicand</td>
      <td style="padding: 12px 15px; color: #34495e;">√(−4) is not a real number</td>
      <td style="padding: 12px 15px; color: #34495e;">∛(−8) = −2</td>
    </tr>
  </tbody>
</table>
`

  // obj11 — summary capstone: hub-level navigator over the roots subtree
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Sub-topic</th>
      <th style="${tableHeaders.summary}">What it covers</th>
      <th style="${tableHeaders.summary}">Go there for</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/algebra/roots/properties" style="${linkStyle}">Properties of Radicals</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">even vs odd index, sign behavior, domain restrictions on radicands</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the fundamental rules that govern when and how radicals are defined</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/algebra/roots/radical-rules" style="${linkStyle}">Radical Rules</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">full product, quotient, power, and nested-radical rules with their restrictions</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a complete algebraic reference for manipulating radical expressions</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/algebra/roots/rational-exponents" style="${linkStyle}">Rational Exponents</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">fractional powers, conversion between forms, exponent laws applied to roots</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">bridging radicals and exponents in any algebraic manipulation</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/algebra/roots/simplifying" style="${linkStyle}">Simplifying Radicals</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">reducing radicals to simplest form, extracting perfect powers, removing fractions under the radical</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">step-by-step techniques to write any radical in its cleanest form</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/algebra/roots/operations" style="${linkStyle}">Operations with Radicals</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">addition and subtraction of like radicals, multiplication and division, rationalizing denominators</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">combining and manipulating radical expressions in calculations</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/algebra/roots/equations" style="${linkStyle}">Radical Equations</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">isolating radicals, raising both sides to powers, identifying extraneous solutions</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">solving equations where the unknown sits under a radical</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/algebra/roots/functions" style="${linkStyle}">Radical Functions</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">domains and graphs of √x and ∛x, transformations, inverse relationship to powers</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">studying radicals as functions — their shape, behavior, and properties</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Radicals and Complex Numbers</td>
      <td style="padding: 12px 15px; color: #34495e;">extending to negative radicands via the imaginary unit i</td>
      <td style="padding: 12px 15px; color: #34495e;">what happens to even roots beyond the real-number system</td>
    </tr>
  </tbody>
</table>
`

  // ---------- SECTIONS ----------

 const sectionsContent = {
  // ============================================================
// obj0 Key Terms — /algebra/roots (hub)
// ============================================================
 
obj0: {
  title: `Key Terms`,
  content: `
## Core Vocabulary
 
- [Root](!/algebra/definitions#root) — the inverse of exponentiation: the value that, raised to a given power, produces the radicand
- [Radical](!/algebra/definitions#radical) — the symbol $\\sqrt[n]{\\phantom{x}}$ used to denote a root operation
- [Index](!/algebra/definitions#index) — the positive integer $n$ specifying which root is taken; even and odd indices behave differently
- [Radicand](!/algebra/definitions#radicand) — the expression placed under the radical sign
 
## Root Types
 
- [Square Root](!/algebra/definitions#square_root) — the second root, written $\\sqrt{a}$, returning the non-negative value whose square is $a$
- [Cube Root](!/algebra/definitions#cube_root) — the third root, written $\\sqrt[3]{a}$, defined for all real numbers
- [Principal Root](!/algebra/definitions#principal_root) — the unique non-negative root returned by the radical symbol when the index is even
 
## Notation and Rules
 
- [Rational Exponent](!/algebra/definitions#rational_exponent) — fractional power notation where $a^{m/n} = \\sqrt[n]{a^m}$
- [Product Rule (Radicals)](!/algebra/definitions#product_rule_(radicals)) — $\\sqrt[n]{ab} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}$
- [Quotient Rule (Radicals)](!/algebra/definitions#quotient_rule_(radicals)) — $\\sqrt[n]{a/b} = \\sqrt[n]{a} / \\sqrt[n]{b}$
 
## Working with Radicals
 
- [Simplest Form](!/algebra/definitions#simplest_form) — no perfect powers under the radical, no fractions under it, no radicals in denominators
- [Like Radicals](!/algebra/definitions#like_radicals) — radicals sharing the same index and radicand, required for addition and subtraction
- [Rationalization](!/algebra/definitions#rationalization) — rewriting an expression so no radical appears in the denominator
- [Radical Equation](!/algebra/definitions#radical_equation) — an equation where the variable appears under a radical sign
- [Extraneous Solution](!/algebra/definitions#extraneous_solution) — a value introduced by a non-reversible step that does not satisfy the original equation
- [Radical Function](!/algebra/definitions#radical_function) — a function of the form $f(x) = \\sqrt[n]{g(x)}$`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},
 

  obj1: {
    title: `What is a Root`,
    content: `A root reverses exponentiation. When a number $a$ is raised to power $n$ and produces $b$, the $n$th root of $b$ returns $a$.

@academic[formula_callout:What is a Root
$$a^n = b \\quad \\Longleftrightarrow \\quad \\sqrt[n]{b} = a$$]@

The radical symbol $\\sqrt{\\phantom{x}}$ denotes a root. The small number tucked into the upper left is the index — it specifies which root. The expression under the radical is the radicand.

@academic[formula_callout:What is a Root
$$\\sqrt[n]{b}$$]@

Here $n$ is the index and $b$ is the radicand. When no index appears, square root (index 2) is assumed.

@academic[formula_callout:What is a Root
$$\\sqrt{25} = 5 \\quad \\text{because} \\quad 5^2 = 25$$]@

@academic[formula_callout:What is a Root
$$\\sqrt[3]{8} = 2 \\quad \\text{because} \\quad 2^3 = 8$$]@

@academic[formula_callout:What is a Root
$$\\sqrt[4]{81} = 3 \\quad \\text{because} \\quad 3^4 = 81$$]@

Every root operation poses a question: what base, raised to this power, yields the radicand?`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Square Roots, Cube Roots, and Beyond`,
    content: `The index determines which power is being reversed.

A square root ($n = 2$) undoes squaring. It appears constantly — in the Pythagorean theorem, the quadratic formula, distance calculations, and anywhere area connects to length.

@academic[formula_callout:Square Roots, Cube Roots, and Beyond
$$\\sqrt{49} = 7, \\quad \\sqrt{144} = 12, \\quad \\sqrt{2} \\approx 1.414$$]@

A cube root ($n = 3$) undoes cubing. It arises in volume problems, certain equations, and throughout higher mathematics.

@academic[formula_callout:Square Roots, Cube Roots, and Beyond
$$\\sqrt[3]{27} = 3, \\quad \\sqrt[3]{-64} = -4, \\quad \\sqrt[3]{1000} = 10$$]@

Higher roots follow the same pattern. Fourth roots undo fourth powers, fifth roots undo fifth powers, and so on.

@academic[formula_callout:Square Roots, Cube Roots, and Beyond
$$\\sqrt[4]{16} = 2, \\quad \\sqrt[5]{32} = 2, \\quad \\sqrt[6]{64} = 2$$]@

The index matters greatly. Even indices behave differently from odd indices — a distinction explored fully in [properties of radicals](!/algebra/roots/properties). This difference affects domain, sign behavior, and how [simplification](!/algebra/roots/simplifying) proceeds.

To compute a square, cube or nth root of any number, use the [root calculator](!/calculators/root-calculator).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Principal Roots`,
    content: `Positive numbers have two square roots. Both 5 and $-5$ square to 25. But the radical symbol returns only one value — the principal root.

For square roots and all even-index roots, the principal root is the non-negative one.

@academic[formula_callout:Principal Roots
$$\\sqrt{25} = 5, \\quad \\text{not } -5, \\quad \\text{and not } \\pm 5$$]@

@academic[pitfall,aside:true,width:35%:Simplifying the root of a square to x
Writing $\\sqrt{x^2} = x$ fails for negative $x$: at $x = -3$ it gives $-3$, but $\\sqrt{(-3)^2} = \\sqrt{9} = 3$. The principal root is non-negative, so $\\sqrt{x^2} = |x|$.
[Read more](!#pitfalls)]@

This convention exists so that $\\sqrt{x}$ is a function — one input, one output. Without it, $\\sqrt{25}$ would have two values, and expressions involving radicals would become ambiguous.

When both roots are needed, write $\\pm\\sqrt{25} = \\pm 5$ explicitly. This notation appears frequently when [solving radical equations](!/algebra/roots/equations).

Odd-index roots have no such ambiguity.

@academic[rule_theorem_plain:Every real number has exactly one real cube root, one real fifth root, and so on.]@

The principal root is simply that unique value.

@academic[formula_callout:Principal Roots
$$\\sqrt[3]{-27} = -3 \\quad \\text{(the only real cube root)}$$]@

The principal root convention allows radicals to behave predictably in equations and as [functions](!/algebra/roots/functions).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Radical and Exponent Notation`,
    content: `Roots can be written two ways: as radicals or as fractional exponents. Both notations represent the same operation.

@academic[formula_callout:Radical to Exponent Conversion
$$\\sqrt[n]{a} = a^{1/n}$$
/algebra/formulas#radical_to_exponent_conversion]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

The index becomes the denominator of the exponent. Square root is $a^{1/2}$, cube root is $a^{1/3}$, fourth root is $a^{1/4}$.

When the radicand itself has a power, the two exponents combine:

@academic[formula_callout:Power Rule (Radicals)
$$\\sqrt[n]{a^m} = a^{m/n}$$
/algebra/formulas#power_rule_radicals]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

This can also be computed as:

@academic[formula_callout:Radical and Exponent Notation
$$\\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m$$]@

For example:

@academic[formula_callout:Radical and Exponent Notation
$$\\sqrt[3]{8^2} = 8^{2/3} = \\left(\\sqrt[3]{8}\\right)^2 = 2^2 = 4$$]@

Exponent notation often simplifies algebraic manipulation, while radical notation is clearer for computation. Converting between forms is a key technique in [simplifying radicals](!/algebra/roots/simplifying). The full treatment appears in [rational exponents](!/algebra/roots/rational-exponents).

The table below collects the two notations side by side with their direct correspondences and worked examples.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Rules for Radicals`,
    content: `Radicals follow specific rules that enable simplification and combination.

The product rule allows a radical of a product to split:

@academic[formula_callout:Product Rule (Radicals)
$$\\sqrt[n]{ab} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}$$
/algebra/formulas#product_rule_radicals]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

The quotient rule does the same for division:

@academic[formula_callout:Quotient Rule (Radicals)
$$\\sqrt[n]{\\frac{a}{b}} = \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}}$$
/algebra/formulas#quotient_rule_radicals]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

Nested radicals combine by multiplying indices:

@academic[formula_callout:Nested Radicals
$$\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[mn]{a}$$
/algebra/formulas#nested_radicals]@

@academic[formulas_link:Browse all algebra formulas
/algebra/formulas]@

These rules work when the indices match and when the radicands satisfy certain conditions.

@academic[rule_plain:Even-index roots require non-negative radicands in the real number system — a restriction detailed in [properties of radicals](!/algebra/roots/properties).]@

@academic[pitfall,aside:true,width:35%:Splitting a root over a sum
Taking $\\sqrt{9 + 16}$ term by term gives $\\sqrt{9} + \\sqrt{16} = 3 + 4 = 7$. The rules cover products and quotients only; the radicand is added first: $\\sqrt{9 + 16} = \\sqrt{25} = 5$.
[Read more](!#pitfalls)]@

All three rules act on a radicand built by multiplication, by division, or from another radical. Radicands built by addition or subtraction, such as $\\sqrt{9 + 16}$ or $\\sqrt{x^2 + 9}$, are just as common: the Pythagorean theorem and the distance formula both produce them.

The complete set of rules, with their restrictions and derivations, appears in [radical rules](!/algebra/roots/radical-rules). Mastering these rules is essential for [operations with radicals](!/algebra/roots/operations).

The table below collects these three rules in compact form; the dedicated rules page develops them with their full restrictions.`,
    before: ``,
    after: ``,
    link: '/algebra/roots/radical-rules',
  },

  obj6: {
    title: `Simplifying and Operating`,
    content: `A radical is in simplest form when no perfect power remains under the radical, no fractions appear under the radical, and no radicals appear in denominators.

@academic[formula_callout:Simplifying and Operating
$$\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}$$]@

The factor 36 is a perfect square and comes out; the factor 2 remains.

@academic[rule_plain:Radicals can be added or subtracted only when they are like radicals — same index and same radicand.]@

@academic[formula_callout:Simplifying and Operating
$$3\\sqrt{5} + 7\\sqrt{5} = 10\\sqrt{5}$$]@

@academic[formula_callout:Simplifying and Operating
$$\\sqrt{2} + \\sqrt{3} \\quad \\text{cannot be combined}$$]@

Multiplication and division follow the [radical rules](!/algebra/roots/radical-rules). Denominators with radicals are typically rationalized — rewritten so the radical moves to the numerator.

Detailed techniques for reducing radicals to simplest form appear in [simplifying radicals](!/algebra/roots/simplifying). Methods for combining and manipulating radical expressions appear in [operations with radicals](!/algebra/roots/operations).`,
    before: ``,
    after: ``,
    link: '/algebra/roots/simplifying',
  },

  obj7: {
    title: `Equations with Radicals`,
    content: `When the unknown sits under a radical, the equation requires special handling.

The standard approach: isolate the radical, then raise both sides to a power that eliminates it.

@academic[formula_callout:Equations with Radicals
$$\\sqrt{x + 3} = 5$$]@

@academic[formula_callout:Equations with Radicals
$$x + 3 = 25$$]@

@academic[formula_callout:Equations with Radicals
$$x = 22$$]@

@academic[pitfall,aside:true,width:35%:Squaring before isolating the radical
Squaring $\\sqrt{x} + 2 = 4$ term by term gives $x + 4 = 16$, so $x = 12$, but $\\sqrt{12} + 2 \\approx 5.46$. Isolating first, $\\sqrt{x} = 2$, gives $x = 4$.
[Read more](!#pitfalls)]@

This process can introduce extraneous solutions — values that satisfy the transformed equation but not the original. Checking solutions is essential, especially with even-index radicals.

Equations with multiple radicals may require the process repeated. Cube roots and higher follow the same logic, though odd-index equations rarely produce extraneous solutions due to different [properties](!/algebra/roots/properties).

Full techniques for solving, including equations with multiple radicals and methods for identifying extraneous solutions, appear in [radical equations](!/algebra/roots/equations).

To solve a specific equation, the [radical equation solver](!/algebra/calculators/equations/radical) isolates the radical, raises both sides to the right power and checks every candidate for extraneous solutions.`,
    before: ``,
    after: ``,
    link: '/algebra/roots/equations',
  },

  obj8: {
    title: `Radicals as Functions`,
    content: `When the radicand contains a variable, the radical becomes a function.

@academic[formula_callout:Radicals as Functions
$$f(x) = \\sqrt{x}$$]@

This function takes an input $x$ and returns its principal square root. Not every input works — the domain depends on the index.

Even-index radical functions require non-negative radicands. The domain of $f(x) = \\sqrt{x}$ is $x \\geq 0$. This restriction stems from the [properties of radicals](!/algebra/roots/properties).

Odd-index radical functions accept all real inputs. The domain of $f(x) = \\sqrt[3]{x}$ is all real numbers.

The graphs have characteristic shapes. Square root functions start at a point and rise gradually. Cube root functions pass through the origin with an S-curve. These shapes transform predictably under shifts, stretches, and reflections.

Radical functions are inverses of power functions. The square root undoes squaring; the cube root undoes cubing. This inverse relationship connects to [rational exponents](!/algebra/roots/rational-exponents).

Full treatment of graphs, domains, transformations, and inverses appears in [radical functions](!/algebra/roots/functions).`,
    before: ``,
    after: ``,
    link: '/algebra/roots/functions',
  },

  obj9: {
    title: `When Radicands Are Negative`,
    content: `Odd roots handle negative radicands naturally. A negative number has a real cube root, fifth root, seventh root, and so on.

@academic[formula_callout:When Radicands Are Negative
$$\\sqrt[3]{-8} = -2, \\quad \\sqrt[5]{-32} = -2$$]@

Even roots of negative numbers do not exist in the real number system. No real number squares to $-4$.

@academic[formula_callout:When Radicands Are Negative
$$\\sqrt{-4} \\quad \\text{is not a real number}$$]@

This distinction between even and odd indices is fundamental to [properties of radicals](!/algebra/roots/properties) and determines the domain of [radical functions](!/algebra/roots/functions).

Mathematics extends beyond the reals. The imaginary unit $i$ is defined by $i^2 = -1$, and with it, even roots of negative numbers become expressible:

@academic[formula_callout:When Radicands Are Negative
$$\\sqrt{-4} = 2i$$]@

This opens the door to complex numbers, where every polynomial has roots and the square root function extends to negative inputs.

The connection between radicals and complex numbers is developed in radicals and complex numbers.

The table below collects the even/odd index distinction in full — covering principal root, domain, and behavior with both positive and negative radicands.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Connection to Powers`,
    content: `Roots and powers are two sides of one coin. Understanding either requires understanding both.

The [powers section](!/algebra/powers) develops exponentiation from natural exponents through negative, rational, and irrational exponents. Rational exponents — fractions as powers — are precisely where roots reappear.

@academic[formula_callout:Connection to Powers
$$a^{1/2} = \\sqrt{a}, \\quad a^{1/3} = \\sqrt[3]{a}, \\quad a^{m/n} = \\sqrt[n]{a^m}$$]@

The laws of exponents govern both operations. Product rules, quotient rules, and power rules translate directly between radical and exponent notation. These connections are explored in [radical rules](!/algebra/roots/radical-rules) and [rational exponents](!/algebra/roots/rational-exponents).

Domain restrictions tighten as exponents become more general. Natural exponents allow any base. Negative exponents exclude zero. Rational exponents with even denominators require non-negative bases (positive when the exponent is negative). This progression mirrors the restrictions on even-index radicals detailed in [properties of radicals](!/algebra/roots/properties).

Mastery of roots and powers together provides the foundation for exponential functions, logarithms, and calculus.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `The Roots Subtree at a Glance`,
    content: `The sub-pages of the roots section develop each topic introduced above with full depth, worked examples, and edge cases. The table below collects them as a navigator — what each page covers and the question that would send you there — so you can dive into any specific area without retracing the hub.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj12: {
    title: `Common Pitfalls`,
    content: `Three mistakes come up again and again when working with roots. Each one is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Simplifying the root of a square to x**

A square root and a square are cancelled against each other, as if $\\sqrt{x^2}$ were always $x$. That is true only when $x \\geq 0$.

Wrong working, for $x = -3$:
$$\\sqrt{(-3)^2} = -3$$

Right working: square first, then take the principal root.
$$\\sqrt{(-3)^2} = \\sqrt{9} = 3 = |-3|$$
In general, $\\sqrt{x^2} = |x|$.

Why it happens: squaring and taking a square root undo each other, and in the other order the cancellation does work: $(\\sqrt{x})^2 = x$ for every $x \\geq 0$. In the order $\\sqrt{x^2}$, the radical returns only the non-negative root, so the sign of $x$ is lost.

How to check: substitute a negative value. A square root is never negative, so a simplification that gives $-3$ for $x = -3$ cannot be right.

**Splitting a root over a sum**

The product rule is carried over to a sum under the radical, and the root is taken term by term.

Wrong working:
$$\\sqrt{9 + 16} = \\sqrt{9} + \\sqrt{16} = 3 + 4 = 7$$

Right working: evaluate the radicand first.
$$\\sqrt{9 + 16} = \\sqrt{25} = 5$$
An expression such as $\\sqrt{x^2 + 9}$ stays as it is; it does not split into $x + 3$.

Why it happens: the product and quotient rules let a radical split, and the same move looks natural for addition. No rule allows it: roots split over multiplication and division only.

How to check: square the answer. $7^2 = 49$, not $25$, while $5^2 = 25$.

**Squaring before isolating the radical**

Both sides are squared while another term still stands beside the radical, and each term is squared on its own.

Wrong working:
$$\\sqrt{x} + 2 = 4 \\implies x + 4 = 16 \\implies x = 12$$

Right working: isolate the radical first, then square.
$$\\sqrt{x} + 2 = 4 \\implies \\sqrt{x} = 2 \\implies x = 4$$
Check: $\\sqrt{4} + 2 = 2 + 2 = 4$.

Why it happens: squaring is meant to remove the radical, and squaring term by term seems to do that. But the square of a sum is not the sum of the squares: $(\\sqrt{x} + 2)^2 = x + 4\\sqrt{x} + 4$, so with the radical not isolated, it does not disappear.

How to check: substitute the result into the original equation. $x = 12$ gives $\\sqrt{12} + 2 \\approx 3.46 + 2 = 5.46$, not $4$.`,
    before: ``,
    after: ``,
    link: '',
  },

}


 const introContent = {
  id: "intro",
  title: "Undoing Powers",
  content: `Raising a number to a power is straightforward — multiply the base by itself repeatedly. But what if you know the result and need to recover the original base? This reverse operation is the root.

Powers and roots are inverse operations. If raising 3 to the second power gives 9, then the square root of 9 returns 3. Every root asks the same question: what number, when raised to a given power, produces this value?`
}




const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Roots and Radicals",
    "description": "Learn roots and radicals: square roots, cube roots, principal roots, radical notation, rational exponents, simplification rules, radical equations, and functions.",
    "url": "https://www.learnmathclass.com/algebra/roots",
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
      "name": "Roots and Radicals"
    },
    "teaches": [
      "Definition of roots as inverse of exponentiation",
      "Square roots, cube roots, and higher-index roots",
      "Principal root convention for even and odd indices",
      "Radical and rational exponent notation",
      "Rules for simplifying and operating with radicals",
      "Radical equations, functions, and complex number connections"
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
        "name": "Roots and Radicals",
        "item": "https://www.learnmathclass.com/algebra/roots"
      }
    ]
  }
}




  const fpPrincipal = { kind: 'pieces', svgTitle: 'x^2 = 25 has solutions -5 and 5; the principal square root of 25 is 5', xRange: [-7, 7], yRange: [-4, 36], yStep: 5,
    pieces: [
      { fn: (x) => x * x, from: -6.2, to: 6.2, ends: [null, null], color: 'f', label: { text: 'y = x²', x: 5.6, y: 31.4, pos: 'w' } },
      { fn: () => 25, from: -7, to: 7, ends: [null, null], color: 'g', label: { text: 'y = 25', x: -6.2, y: 25, pos: 'n' } },
    ],
    points: [{ x: -5, y: 25, label: 'x = −5', pos: 'sw' }, { x: 5, y: 25, label: '√25 = 5', pos: 'se' }],
    notes: [{ x: -6.8, y: -3.6, text: 'x² = 25 has two solutions; √ returns only the non-negative one', pos: 'e', color: 'r' }],
    caption: '√25 = 5, not ±5: the radical names one value so it can be a function' };

  const demoUnits = {
    principal: demoUnitFrame({
      svg: renderFunctionPlotV4(fpPrincipal),
      caption: 'Two square roots, one principal root',
      text: 'The parabola y = x&#178; meets the level 25 twice, at x = &#8722;5 and x = 5: both numbers square to 25. The radical &#8730;25 does not mean both; it names the non-negative one, 5. Choosing one value is what makes &#8730;x a function, with a single output for each input.',
    }),
  };

  const radicalFunctionCases = {
    prefaceTitle: 'The index decides the domain',
    preface: 'When the radicand contains a variable, the radical becomes a function. Not every input works: the domain depends on whether the index is even or odd.',
    conclusionTitle: 'Takeaway',
    conclusion: 'Radical functions are inverses of power functions: the square root undoes squaring, the cube root undoes cubing. See [radical functions](!/algebra/roots/functions).',
    parent: {
      kicker: 'Radical function',
      formula: '$f(x) = \\sqrt[n]{x}$',
      splitBy: 'whether the index $n$ is even or odd',
    },
    cases: [
      {
        id: 'even', condition: 'even index',
        count: { n: '≥0' },
        headline: 'Non-negative radicands only',
        desc: 'starts at a point and rises gradually',
        example: '$\\sqrt{x}$: domain $x \\geq 0$',
      },
      {
        id: 'odd', condition: 'odd index',
        count: { n: 'ℝ' },
        headline: 'All real inputs',
        desc: 'passes through the origin with an S-curve',
        example: '$\\sqrt[3]{x}$: domain all real numbers',
      },
    ],
  };

  const rootsSubtreeOutline = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'The roots pages',
    preface: 'The roots section splits into eight pages, from the basic properties of radicals to their use in equations, functions and the complex numbers.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'Rules first, then use',
    conclusion: 'Properties and rules come first; simplifying and operations put them to work; equations, functions and complex numbers apply them.',
    showLevels: true,
    nodes: [
      { id: 'root', name: 'Roots and radicals', children: [
        { id: 'g1', name: 'Rules', children: [
          { id: 'props', name: '[Properties of radicals](!/algebra/roots/properties)', def: 'even vs odd index, sign, domain' },
          { id: 'rules', name: '[Radical rules](!/algebra/roots/radical-rules)', def: 'product, quotient, power, nested' },
          { id: 'ratexp', name: '[Rational exponents](!/algebra/roots/rational-exponents)', def: 'fractional powers, converting forms' },
        ] },
        { id: 'g2', name: 'Working with radicals', children: [
          { id: 'simp', name: '[Simplifying radicals](!/algebra/roots/simplifying)', def: 'extract perfect powers, clear fractions' },
          { id: 'ops', name: '[Operations with radicals](!/algebra/roots/operations)', def: 'add like radicals, rationalize' },
        ] },
        { id: 'g3', name: 'Applications', children: [
          { id: 'eq', name: '[Radical equations](!/algebra/roots/equations)', def: 'isolate the radical; extraneous solutions' },
          { id: 'fn', name: '[Radical functions](!/algebra/roots/functions)', def: 'domains and graphs of √x and ∛x' },
          { id: 'cx', name: 'Radicals and complex numbers', def: 'negative radicands through i' },
        ] },
      ] },
    ],
  };

   return {
  props: {
    rootsSubtreeOutline,
    radicalFunctionCases,
    sectionsContent,
    introContent,
    obj4Table,
    obj5Table,
    obj9Table,
    summaryTable,
    schemas,
    demoUnits,
    seoData: {
      title: "Roots & Radicals: Square, Cube & Nth Roots | Learn Math Class",
      description: "Learn roots and radicals: square roots, cube roots, principal roots, radical notation, rational exponents, simplification rules, radical equations, and functions.",
      keywords: keyWords.join(", "),
      url: "/algebra/roots",
      name: "Roots and Radicals",
    
    },
  }
}
   }


const figureTheme = { title: '#06357A', parentBg: '#06357A', accent: '#2563EB', warm: '#B45309' }

export default function RootsAndRadicalsPage({rootsSubtreeOutline, radicalFunctionCases, 
  seoData,
  sectionsContent,
  introContent,
  obj4Table,
  obj5Table,
  obj9Table,
  summaryTable,
  schemas,
  demoUnits,
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
          <div key={'unit-principal'} dangerouslySetInnerHTML={{ __html: demoUnits.principal }} />,
          `To get both solutions of x² = 25, write x = ±√25 explicitly.`,
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
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
          <DiagramFrame
            key={'obj8-diagram'}
            id="radical-function-index-cases"
            title="Radical functions: even or odd index"
            source="/algebra/roots"
          >
            <CaseSplit data={radicalFunctionCases} variant="poster" proseStyle="cards" theme={figureTheme} />
          </DiagramFrame>,
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
        id:'pitfalls',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
        ]
    },
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
          <DiagramFrame
            key={'obj11-diagram'}
            id="roots-subtree-outline"
            title="The roots pages: rules, working, applications"
            source="/algebra/roots"
          >
            <TaxonomyOutline data={rootsSubtreeOutline} variant="outline" exportable={false} showToolbar={false} framed={false} />
          </DiagramFrame>,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Roots (Radicals)</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="children"  // or "children"
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