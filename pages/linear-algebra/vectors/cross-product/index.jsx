

// tables-optimized: v4 | 2026-05-22 | 4 tables (obj2 aggregation, obj5 aggregation, obj8 comparison, obj9 summary capstone)
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
  "cross product",
  "vector cross product",
  "cross product formula",
  "cross product calculator",
  "right hand rule",
  "cross product determinant",
  "vector product",
  "cross product properties",
  "anti-commutative",
  "scalar triple product",
  "parallelogram area vector",
  "perpendicular vector",
  "cross product vs dot product",
  "i j k cross product"
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj2 — aggregation (lookup): i, j, k cross product table (3×3 multiplication grid)
  const obj2Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation} text-align: center;">a &times; b</th>
      <th style="${tableHeaders.aggregation} text-align: center;">b = i</th>
      <th style="${tableHeaders.aggregation} text-align: center;">b = j</th>
      <th style="${tableHeaders.aggregation} text-align: center;">b = k</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">a = i</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">k</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">&minus;j</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">a = j</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">&minus;k</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">i</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">a = k</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">j</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">&minus;i</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">0</td>
    </tr>
  </tbody>
</table>
`

  // obj5 — aggregation: 5 algebraic properties
  const obj5Table = `
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
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Anti-commutativity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a &times; b = &minus;(b &times; a)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">swapping inputs flips the output vector</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Distributivity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a &times; (b + c) = a &times; b + a &times; c</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">spreads over sums on either side</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Scalar factoring</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(ca) &times; b = c(a &times; b) = a &times; (cb)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">scalars migrate freely; linear in each slot</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Non-associativity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a &times; (b &times; c) &ne; (a &times; b) &times; c</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">parenthesization changes the result; triple product expansion gives a workaround</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Self-cross product</td>
      <td style="padding: 12px 15px; color: #34495e;">a &times; a = 0</td>
      <td style="padding: 12px 15px; color: #34495e;">forced by anti-commutativity; no area, no unique perpendicular</td>
    </tr>
  </tbody>
</table>
`

  // obj8 — comparison: dot product vs cross product across 6 attributes
  const obj8Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Attribute</th>
      <th style="${tableHeaders.comparison}"><a href="/linear-algebra/vectors/dot-product" style="color: white; text-decoration: underline;">Dot product</a></th>
      <th style="${tableHeaders.comparison}">Cross product</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Output type</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">scalar (number)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">vector</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Domain</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">any &reals;<sup>n</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">only &reals;<sup>3</sup></td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Order sensitivity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">commutative: a &middot; b = b &middot; a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">anti-commutative: a &times; b = &minus;(b &times; a)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Zero means</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">perpendicular (&theta; = &pi;/2)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">parallel (&theta; = 0 or &pi;)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Angular factor extracted</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos &theta;</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sin &theta;</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Geometric reading</td>
      <td style="padding: 12px 15px; color: #34495e;">projection of one vector onto the other</td>
      <td style="padding: 12px 15px; color: #34495e;">area of the parallelogram they span</td>
    </tr>
  </tbody>
</table>
`

  // obj9 — summary capstone: 7 uses of the cross product
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Result</th>
      <th style="${tableHeaders.summary}">Formula</th>
      <th style="${tableHeaders.summary}">What it captures</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Area of a parallelogram</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">&Vert;a &times; b&Vert; = &Vert;a&Vert; &Vert;b&Vert; sin &theta;</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">size of the region spanned by a and b</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Perpendicular direction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a &times; b &perp; a&nbsp;&nbsp;and&nbsp;&nbsp;a &times; b &perp; b</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a vector normal to the plane of a and b</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/vectors/properties" style="${linkStyle}">Test for parallelism</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a &times; b = 0 &hArr; a &parallel; b</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">detects when two vectors are collinear</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Right-handed orientation</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">i &times; j = k (by convention)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">resolves the two-normal ambiguity</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Volume of a parallelepiped</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|a &middot; (b &times; c)|</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">signed volume of the box with edges a, b, c</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Test for coplanarity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a &middot; (b &times; c) = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">detects when three vectors lie in one plane</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Vector triple product</td>
      <td style="padding: 12px 15px; color: #34495e;">a &times; (b &times; c) = (a &middot; c)b &minus; (a &middot; b)c</td>
      <td style="padding: 12px 15px; color: #34495e;">reduces a nested cross product to a sum of scaled vectors</td>
    </tr>
  </tbody>
</table>
`

  // ---------- SECTIONS ----------

//  const sectionsContent = {
//   obj1: {
//     title: `Algebraic Definition`,
//     content: `Given $\\mathbf{a} = (a_1, a_2, a_3)$ and $\\mathbf{b} = (b_1, b_2, b_3)$ in $\\mathbb{R}^3$, their cross product is a new three-component vector built from pairwise differences of mixed products:

// $$\\mathbf{a} \\times \\mathbf{b} = (a_2b_3 - a_3b_2,\\ a_3b_1 - a_1b_3,\\ a_1b_2 - a_2b_1)$$

// The indices rotate cyclically. To obtain the first component, cover the first entries of both vectors and cross-multiply the remaining pairs: $a_2b_3 - a_3b_2$. For the second component, cover the second entries and cross-multiply with a sign reversal: $a_3b_1 - a_1b_3$. The third component follows the same logic with the third entries hidden: $a_1b_2 - a_2b_1$.

// A convenient way to package the computation uses a symbolic $3 \\times 3$ [determinant](!/linear-algebra/determinants) whose first row holds the standard basis vectors:

// $$\\mathbf{a} \\times \\mathbf{b} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\end{vmatrix}$$

// Placing vectors rather than numbers in the top row makes this a notational device rather than a genuine determinant. Still, applying cofactor expansion along that top row reproduces the component formula term by term. The determinant layout keeps the six constituent products and their signs organized in a form that is easy to remember and hard to scramble.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj2: {
//     title: `Standard Basis Cross Products`,
//     content: `Crossing pairs of the standard basis vectors $\\mathbf{i} = (1,0,0)$, $\\mathbf{j} = (0,1,0)$, $\\mathbf{k} = (0,0,1)$ produces a pattern governed by cyclic order:

// $$\\mathbf{i} \\times \\mathbf{j} = \\mathbf{k}, \\quad \\mathbf{j} \\times \\mathbf{k} = \\mathbf{i}, \\quad \\mathbf{k} \\times \\mathbf{i} = \\mathbf{j}$$

// Swapping the two factors in any of these pairs flips the sign:

// $$\\mathbf{j} \\times \\mathbf{i} = -\\mathbf{k}, \\quad \\mathbf{k} \\times \\mathbf{j} = -\\mathbf{i}, \\quad \\mathbf{i} \\times \\mathbf{k} = -\\mathbf{j}$$

// The organizing principle is a directed loop $\\mathbf{i} \\to \\mathbf{j} \\to \\mathbf{k} \\to \\mathbf{i}$. Traversing it in the forward direction yields a positive basis vector; going against the loop negates the outcome. Any basis vector crossed with a copy of itself gives $\\mathbf{0}$: $\\mathbf{i} \\times \\mathbf{i} = \\mathbf{j} \\times \\mathbf{j} = \\mathbf{k} \\times \\mathbf{k} = \\mathbf{0}$.

// Every cross product in $\\mathbb{R}^3$ can be traced back to these nine cases. Expressing both input vectors as [linear combinations](!/linear-algebra/vectors/linear-combinations) of $\\mathbf{i}$, $\\mathbf{j}$, $\\mathbf{k}$ and distributing the cross product over the resulting sums reduces the computation to a collection of basis-pair cross products. Gathering terms afterward recovers the component formula.

// The nine pairings sit in one lookup grid below, with the left input vector indexing the rows and the right input indexing the columns.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj3: {
//     title: `Geometric Interpretation`,
//     content: `The cross product carries geometric content on two distinct levels — one captured by its length, the other by its orientation in space.

// The [magnitude](!/linear-algebra/vectors/magnitude) satisfies:

// $$\\|\\mathbf{a} \\times \\mathbf{b}\\| = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\sin\\theta$$

// where $\\theta$ is the angle separating $\\mathbf{a}$ and $\\mathbf{b}$. The product $\\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\sin\\theta$ has a clean geometric reading: it is the area enclosed by the parallelogram whose adjacent sides are $\\mathbf{a}$ and $\\mathbf{b}$. At $\\theta = \\frac{\\pi}{2}$ the sine reaches $1$ and the parallelogram attains its largest possible area for those two lengths — a rectangle. At $\\theta = 0$ or $\\theta = \\pi$ the sine vanishes, the two sides collapse onto the same line, and the enclosed area drops to zero.

// The direction of $\\mathbf{a} \\times \\mathbf{b}$ sits at a right angle to both $\\mathbf{a}$ and $\\mathbf{b}$ simultaneously. An algebraic confirmation is straightforward: evaluate $\\mathbf{a} \\cdot (\\mathbf{a} \\times \\mathbf{b})$ and $\\mathbf{b} \\cdot (\\mathbf{a} \\times \\mathbf{b})$ component by component, and both [dot products](!/linear-algebra/vectors/dot-product) reduce to zero. The cross product therefore solves a problem that no other operation in the section addresses — it constructs a direction that exits the plane spanned by two given vectors.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj4: {
//     title: `Direction and the Right-Hand Rule`,
//     content: `A plane in $\\mathbb{R}^3$ has two unit normals — they point in opposite directions, and the magnitude formula alone cannot choose between them. Resolving this ambiguity requires an external convention: the right-hand rule.

// The procedure is physical: align the fingers of the right hand along $\\mathbf{a}$ and curl them toward $\\mathbf{b}$ through the shorter arc. The extended thumb then indicates which of the two perpendicular directions $\\mathbf{a} \\times \\mathbf{b}$ adopts.

// Switching the operands — computing $\\mathbf{b} \\times \\mathbf{a}$ instead — reverses the curl direction, sending the thumb the opposite way. This is the geometric engine behind anti-commutativity: the two cross products share the same length but face in opposite directions.

// Embedded in the right-hand rule is the concept of orientation. A coordinate system is called right-handed when $\\mathbf{i} \\times \\mathbf{j}$ points along $\\mathbf{k}$; a left-handed system would have it pointing along $-\\mathbf{k}$. The cross product is sensitive to this distinction — adopting the opposite handedness convention would reverse every cross product in $\\mathbb{R}^3$. No such sensitivity appears in the dot product or in any operation on $\\mathbb{R}^2$, making orientation a phenomenon particular to three-dimensional vector multiplication.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj5: {
//     title: `Properties of the Cross Product`,
//     content: `Several algebraic rules govern the cross product, some mirroring the [basic operations](!/linear-algebra/vectors/basic-operations) and others breaking from them sharply.

// ## Anti-Commutativity

// $$\\mathbf{a} \\times \\mathbf{b} = -(\\mathbf{b} \\times \\mathbf{a})$$

// Exchanging the two inputs flips the output vector. In the language of the right-hand rule, reversing which vector the fingers follow and which they curl toward sends the thumb the other way.

// ## Distributivity

// $$\\mathbf{a} \\times (\\mathbf{b} + \\mathbf{c}) = \\mathbf{a} \\times \\mathbf{b} + \\mathbf{a} \\times \\mathbf{c}$$

// The cross product spreads across sums on either side. Because of anti-commutativity, distributing from the right introduces a sign change relative to distributing from the left.

// ## Scalar Factoring

// $$(c\\mathbf{a}) \\times \\mathbf{b} = c(\\mathbf{a} \\times \\mathbf{b}) = \\mathbf{a} \\times (c\\mathbf{b})$$

// A scalar coefficient can migrate freely between the inputs and the output. This makes the cross product linear in each slot independently.

// ## Non-Associativity

// $$\\mathbf{a} \\times (\\mathbf{b} \\times \\mathbf{c}) \\neq (\\mathbf{a} \\times \\mathbf{b}) \\times \\mathbf{c} \\quad \\text{in general}$$

// Regrouping the factors produces a different vector. This stands in stark contrast to addition and scalar multiplication, where parentheses can be shifted without consequence. The vector triple product expansion $\\mathbf{a} \\times (\\mathbf{b} \\times \\mathbf{c}) = (\\mathbf{a} \\cdot \\mathbf{c})\\mathbf{b} - (\\mathbf{a} \\cdot \\mathbf{b})\\mathbf{c}$ provides a workaround for simplifying nested cross products, but it does not make associativity valid.

// ## Self-Cross Product

// $$\\mathbf{a} \\times \\mathbf{a} = \\mathbf{0}$$

// Crossing a vector with itself always returns the zero vector. Anti-commutativity forces this: $\\mathbf{a} \\times \\mathbf{a} = -(\\mathbf{a} \\times \\mathbf{a})$ has the unique solution $\\mathbf{0}$. From the geometric side, a single vector does not span any area — the parallelogram degenerates to a segment — and no unique perpendicular direction can be extracted.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj6: {
//     title: `Parallel Vectors and the Cross Product`,
//     content: `The cross product furnishes a clean test for [parallelism](!/linear-algebra/vectors/properties):

// $$\\mathbf{a} \\times \\mathbf{b} = \\mathbf{0} \\quad \\Longleftrightarrow \\quad \\mathbf{a} \\text{ and } \\mathbf{b} \\text{ are parallel (or one is } \\mathbf{0}\\text{)}$$

// Parallel vectors sit along the same line, so the angle between them is $0$ or $\\pi$. In either case $\\sin\\theta$ vanishes, collapsing the magnitude $\\|\\mathbf{a} \\times \\mathbf{b}\\| = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\sin\\theta$ to zero. A zero magnitude forces the cross product itself to be $\\mathbf{0}$.

// This criterion pairs naturally with the dot product's test for orthogonality. A vanishing dot product signals perpendicularity; a vanishing cross product signals collinearity. The two tests cover opposite ends of the angular spectrum — maximum separation versus no separation at all — and between them, any angular configuration of two vectors in $\\mathbb{R}^3$ can be diagnosed.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj7: {
//     title: `The Scalar Triple Product`,
//     content: `Three vectors in $\\mathbb{R}^3$ can be combined into a single scalar by nesting the cross product inside a dot product:

// $$\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c})$$

// The inner operation $\\mathbf{b} \\times \\mathbf{c}$ yields a vector orthogonal to both $\\mathbf{b}$ and $\\mathbf{c}$, whose length equals the area of the parallelogram they outline. The outer dot product then projects $\\mathbf{a}$ onto that orthogonal direction, effectively extracting the component of $\\mathbf{a}$ that rises out of the $\\mathbf{b}$-$\\mathbf{c}$ plane. Multiplying base area by height produces a volume: the result is the signed volume of the parallelepiped whose edges are $\\mathbf{a}$, $\\mathbf{b}$, $\\mathbf{c}$.

// Taking the absolute value strips the sign and gives the true geometric volume. The sign itself records handedness — it is positive when the triple $\\mathbf{a}$, $\\mathbf{b}$, $\\mathbf{c}$ follows the right-hand convention and negative when it does not.

// An equivalent computation arranges the nine components into a $3 \\times 3$ [determinant](!/linear-algebra/determinants):

// $$\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c}) = \\begin{vmatrix} a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\\\ c_1 & c_2 & c_3 \\end{vmatrix}$$

// A zero determinant means the parallelepiped has been flattened — the three vectors are coplanar, all confined to a single plane with no volume between them.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj8: {
//     title: `Dot Product vs Cross Product`,
//     content: `The two multiplication operations available for vectors occupy complementary niches, and contrasting them sharpens the purpose of each.

// At the most basic level, they differ in what comes out: the dot product delivers a number, while the cross product delivers a vector. They also differ in scope — the component-wise sum of products behind the dot product generalizes to any $\\mathbb{R}^n$, whereas the cross product's reliance on three-component determinants confines it to $\\mathbb{R}^3$.

// Order sensitivity separates them further. Swapping the operands in a dot product changes nothing; swapping them in a cross product reverses the resulting vector entirely. This distinction — commutativity versus anti-commutativity — reflects a deeper geometric divide. The dot product is insensitive to handedness; the cross product is built on it.

// The conditions under which each product vanishes tell opposite stories. A zero dot product flags perpendicularity: the vectors share no directional overlap. A zero cross product flags collinearity: the vectors lie along the same line and enclose no area. One detects maximum angular separation; the other detects none at all.

// Taken together, the two products partition the angular information between a pair of vectors in $\\mathbb{R}^3$ without overlap. The dot product isolates the $\\cos\\theta$ factor — the projection of one vector onto the other. The cross product isolates the $\\sin\\theta$ factor — the extent to which the vectors diverge from each other's direction, packaged as a perpendicular vector whose length records the enclosed area. Every geometric relationship between two vectors in three dimensions can be read from these two numbers.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj9: {
//     title: `Summary of Cross Product Uses`,
//     content: `The preceding sections put the cross product to a small set of distinct uses — measuring the area of a parallelogram, constructing a vector perpendicular to a given plane, testing whether two vectors are parallel, computing the volume of a parallelepiped through the scalar triple product, and reducing nested cross products through the vector triple product expansion. The table below collects these uses in one place: each row pairs a geometric or algebraic result with the formula that delivers it and a one-line statement of what that result captures.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// };


// tables-optimized: v4 | 2026-05-22 | 4 tables (obj2 aggregation, obj5 aggregation, obj8 comparison, obj9 summary capstone)

// ---------- SECTIONS ----------

const sectionsContent = {
  obj1: {
    title: `Algebraic Definition`,
    content: `Given $\\mathbf{a} = (a_1, a_2, a_3)$ and $\\mathbf{b} = (b_1, b_2, b_3)$ in $\\mathbb{R}^3$, their cross product is a new three-component vector built from pairwise differences of mixed products:

@academic[formula_callout:Cross Product (Component Form)
$$\\mathbf{a} \\times \\mathbf{b} = (a_2 b_3 - a_3 b_2,\\ a_3 b_1 - a_1 b_3,\\ a_1 b_2 - a_2 b_1)$$
/linear-algebra/formulas#cross_product_component_form]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

The indices rotate cyclically. To obtain the first component, cover the first entries of both vectors and cross-multiply the remaining pairs: $a_2b_3 - a_3b_2$. For the second component, cover the second entries and cross-multiply with a sign reversal: $a_3b_1 - a_1b_3$. The third component follows the same logic with the third entries hidden: $a_1b_2 - a_2b_1$.

A convenient way to package the computation uses a symbolic $3 \\times 3$ [determinant](!/linear-algebra/determinants) whose first row holds the standard basis vectors:

@academic[formula_callout:Cross Product (Determinant Form)
$$\\mathbf{a} \\times \\mathbf{b} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\end{vmatrix}$$
/linear-algebra/formulas#cross_product_determinant_form]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

Placing vectors rather than numbers in the top row makes this a notational device rather than a genuine determinant. Still, applying cofactor expansion along that top row reproduces the component formula term by term. The determinant layout keeps the six constituent products and their signs organized in a form that is easy to remember and hard to scramble.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Standard Basis Cross Products`,
    content: `Crossing pairs of the standard basis vectors $\\mathbf{i} = (1,0,0)$, $\\mathbf{j} = (0,1,0)$, $\\mathbf{k} = (0,0,1)$ produces a pattern governed by cyclic order:

@academic[formula_callout:Standard Basis Cross Products
$$\\mathbf{i} \\times \\mathbf{j} = \\mathbf{k}, \\quad \\mathbf{j} \\times \\mathbf{k} = \\mathbf{i}, \\quad \\mathbf{k} \\times \\mathbf{i} = \\mathbf{j}$$
/linear-algebra/formulas#standard_basis_cross_products]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

Swapping the two factors in any of these pairs flips the sign:

$$\\mathbf{j} \\times \\mathbf{i} = -\\mathbf{k}, \\quad \\mathbf{k} \\times \\mathbf{j} = -\\mathbf{i}, \\quad \\mathbf{i} \\times \\mathbf{k} = -\\mathbf{j}$$

The organizing principle is a directed loop $\\mathbf{i} \\to \\mathbf{j} \\to \\mathbf{k} \\to \\mathbf{i}$. Traversing it in the forward direction yields a positive basis vector; going against the loop negates the outcome. Any basis vector crossed with a copy of itself gives $\\mathbf{0}$: $\\mathbf{i} \\times \\mathbf{i} = \\mathbf{j} \\times \\mathbf{j} = \\mathbf{k} \\times \\mathbf{k} = \\mathbf{0}$.

Every cross product in $\\mathbb{R}^3$ can be traced back to these nine cases. Expressing both input vectors as [linear combinations](!/linear-algebra/vectors/linear-combinations) of $\\mathbf{i}$, $\\mathbf{j}$, $\\mathbf{k}$ and distributing the cross product over the resulting sums reduces the computation to a collection of basis-pair cross products. Gathering terms afterward recovers the component formula.

The nine pairings sit in one lookup grid below, with the left input vector indexing the rows and the right input indexing the columns.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Geometric Interpretation`,
    content: `The cross product carries geometric content on two distinct levels — one captured by its length, the other by its orientation in space.

The [magnitude](!/linear-algebra/vectors/magnitude) satisfies:

@academic[formula_callout:Cross Product Magnitude
$$\\|\\mathbf{a} \\times \\mathbf{b}\\| = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\sin\\theta$$
/linear-algebra/formulas#cross_product_magnitude]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

where $\\theta$ is the angle separating $\\mathbf{a}$ and $\\mathbf{b}$. The product $\\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\sin\\theta$ has a clean geometric reading: it is the area enclosed by the parallelogram whose adjacent sides are $\\mathbf{a}$ and $\\mathbf{b}$:

@academic[formula_callout:Parallelogram Area
$$\\text{Area} = \\|\\mathbf{a} \\times \\mathbf{b}\\|$$
/linear-algebra/formulas#parallelogram_area]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

At $\\theta = \\frac{\\pi}{2}$ the sine reaches $1$ and the parallelogram attains its largest possible area for those two lengths — a rectangle. At $\\theta = 0$ or $\\theta = \\pi$ the sine vanishes, the two sides collapse onto the same line, and the enclosed area drops to zero.

The direction of $\\mathbf{a} \\times \\mathbf{b}$ sits at a right angle to both $\\mathbf{a}$ and $\\mathbf{b}$ simultaneously. An algebraic confirmation is straightforward: evaluate $\\mathbf{a} \\cdot (\\mathbf{a} \\times \\mathbf{b})$ and $\\mathbf{b} \\cdot (\\mathbf{a} \\times \\mathbf{b})$ component by component, and both [dot products](!/linear-algebra/vectors/dot-product) reduce to zero. The cross product therefore solves a problem that no other operation in the section addresses — it constructs a direction that exits the plane spanned by two given vectors.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Direction and the Right-Hand Rule`,
    content: `A plane in $\\mathbb{R}^3$ has two unit normals — they point in opposite directions, and the magnitude formula alone cannot choose between them. Resolving this ambiguity requires an external convention: the right-hand rule.

The procedure is physical: align the fingers of the right hand along $\\mathbf{a}$ and curl them toward $\\mathbf{b}$ through the shorter arc. The extended thumb then indicates which of the two perpendicular directions $\\mathbf{a} \\times \\mathbf{b}$ adopts.

Switching the operands — computing $\\mathbf{b} \\times \\mathbf{a}$ instead — reverses the curl direction, sending the thumb the opposite way. This is the geometric engine behind anti-commutativity: the two cross products share the same length but face in opposite directions.

Embedded in the right-hand rule is the concept of orientation. A coordinate system is called right-handed when $\\mathbf{i} \\times \\mathbf{j}$ points along $\\mathbf{k}$; a left-handed system would have it pointing along $-\\mathbf{k}$. The cross product is sensitive to this distinction — adopting the opposite handedness convention would reverse every cross product in $\\mathbb{R}^3$. No such sensitivity appears in the dot product or in any operation on $\\mathbb{R}^2$, making orientation a phenomenon particular to three-dimensional vector multiplication.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Properties of the Cross Product`,
    content: `Several algebraic rules govern the cross product, some mirroring the [basic operations](!/linear-algebra/vectors/basic-operations) and others breaking from them sharply.

## Anti-Commutativity

@academic[formula_callout:Cross Product Anti-Commutativity
$$\\mathbf{a} \\times \\mathbf{b} = -(\\mathbf{b} \\times \\mathbf{a})$$
/linear-algebra/formulas#cross_product_anti_commutativity]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

Exchanging the two inputs flips the output vector. In the language of the right-hand rule, reversing which vector the fingers follow and which they curl toward sends the thumb the other way.

## Distributivity

$$\\mathbf{a} \\times (\\mathbf{b} + \\mathbf{c}) = \\mathbf{a} \\times \\mathbf{b} + \\mathbf{a} \\times \\mathbf{c}$$

The cross product spreads across sums on either side. Because of anti-commutativity, distributing from the right introduces a sign change relative to distributing from the left.

## Scalar Factoring

$$(c\\mathbf{a}) \\times \\mathbf{b} = c(\\mathbf{a} \\times \\mathbf{b}) = \\mathbf{a} \\times (c\\mathbf{b})$$

A scalar coefficient can migrate freely between the inputs and the output. This makes the cross product linear in each slot independently.

## Non-Associativity

$$\\mathbf{a} \\times (\\mathbf{b} \\times \\mathbf{c}) \\neq (\\mathbf{a} \\times \\mathbf{b}) \\times \\mathbf{c} \\quad \\text{in general}$$

Regrouping the factors produces a different vector. This stands in stark contrast to addition and scalar multiplication, where parentheses can be shifted without consequence. The vector triple product expansion provides a workaround for simplifying nested cross products:

@academic[formula_callout:Vector Triple Product
$$\\mathbf{a} \\times (\\mathbf{b} \\times \\mathbf{c}) = (\\mathbf{a} \\cdot \\mathbf{c})\\,\\mathbf{b} - (\\mathbf{a} \\cdot \\mathbf{b})\\,\\mathbf{c}$$
/linear-algebra/formulas#vector_triple_product]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

A related identity, due to Lagrange, expresses the dot product of two cross products as a determinant of pairwise dot products:

@academic[formula_callout:Lagrange Identity
$$(\\mathbf{a} \\times \\mathbf{b}) \\cdot (\\mathbf{c} \\times \\mathbf{d}) = (\\mathbf{a} \\cdot \\mathbf{c})(\\mathbf{b} \\cdot \\mathbf{d}) - (\\mathbf{a} \\cdot \\mathbf{d})(\\mathbf{b} \\cdot \\mathbf{c})$$
/linear-algebra/formulas#lagrange_identity]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

Setting $\\mathbf{c} = \\mathbf{a}$ and $\\mathbf{d} = \\mathbf{b}$ recovers the magnitude identity $\\|\\mathbf{a} \\times \\mathbf{b}\\|^2 = \\|\\mathbf{a}\\|^2\\|\\mathbf{b}\\|^2 - (\\mathbf{a} \\cdot \\mathbf{b})^2$, which is equivalent to $\\sin^2\\theta = 1 - \\cos^2\\theta$.

## Self-Cross Product

$$\\mathbf{a} \\times \\mathbf{a} = \\mathbf{0}$$

Crossing a vector with itself always returns the zero vector. Anti-commutativity forces this: $\\mathbf{a} \\times \\mathbf{a} = -(\\mathbf{a} \\times \\mathbf{a})$ has the unique solution $\\mathbf{0}$. From the geometric side, a single vector does not span any area — the parallelogram degenerates to a segment — and no unique perpendicular direction can be extracted.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Parallel Vectors and the Cross Product`,
    content: `The cross product furnishes a clean test for [parallelism](!/linear-algebra/vectors/properties):

@academic[formula_callout:Parallelism Test (Cross Product)
$$\\mathbf{a} \\times \\mathbf{b} = \\mathbf{0} \\iff \\mathbf{a} \\parallel \\mathbf{b}$$
/linear-algebra/formulas#parallelism_test_cross_product]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

Parallel vectors sit along the same line, so the angle between them is $0$ or $\\pi$. In either case $\\sin\\theta$ vanishes, collapsing the magnitude $\\|\\mathbf{a} \\times \\mathbf{b}\\| = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\sin\\theta$ to zero. A zero magnitude forces the cross product itself to be $\\mathbf{0}$. The zero vector is parallel to every vector by convention, so the test absorbs the edge cases naturally.

This criterion pairs naturally with the dot product's test for orthogonality. A vanishing dot product signals perpendicularity; a vanishing cross product signals collinearity. The two tests cover opposite ends of the angular spectrum — maximum separation versus no separation at all — and between them, any angular configuration of two vectors in $\\mathbb{R}^3$ can be diagnosed.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `The Scalar Triple Product`,
    content: `Three vectors in $\\mathbb{R}^3$ can be combined into a single scalar by nesting the cross product inside a dot product:

$$\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c})$$

The inner operation $\\mathbf{b} \\times \\mathbf{c}$ yields a vector orthogonal to both $\\mathbf{b}$ and $\\mathbf{c}$, whose length equals the area of the parallelogram they outline. The outer dot product then projects $\\mathbf{a}$ onto that orthogonal direction, effectively extracting the component of $\\mathbf{a}$ that rises out of the $\\mathbf{b}$-$\\mathbf{c}$ plane. Multiplying base area by height produces a volume: the result is the signed volume of the parallelepiped whose edges are $\\mathbf{a}$, $\\mathbf{b}$, $\\mathbf{c}$.

Taking the absolute value strips the sign and gives the true geometric volume of the parallelepiped:

@academic[formula_callout:Parallelepiped Volume
$$V = |\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c})|$$
/linear-algebra/formulas#parallelepiped_volume]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

The sign itself records handedness — it is positive when the triple $\\mathbf{a}$, $\\mathbf{b}$, $\\mathbf{c}$ follows the right-hand convention and negative when it does not.

The tetrahedron (triangular pyramid) with edges $\\mathbf{a}$, $\\mathbf{b}$, $\\mathbf{c}$ from a common vertex occupies exactly one-sixth of this parallelepiped:

@academic[formula_callout:Pyramid Volume
$$V = \\tfrac{1}{6}|\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c})|$$
/linear-algebra/formulas#pyramid_volume]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

The factor $\\tfrac{1}{6}$ arises as $\\tfrac{1}{3}$ (the general pyramid factor $V = \\tfrac{1}{3} \\cdot \\text{base} \\cdot \\text{height}$) times $\\tfrac{1}{2}$ (the triangular base is half the parallelogram base).

An equivalent computation arranges the nine components into a $3 \\times 3$ [determinant](!/linear-algebra/determinants):

@academic[formula_callout:Scalar Triple Product
$$\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c}) = \\begin{vmatrix} a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\\\ c_1 & c_2 & c_3 \\end{vmatrix}$$
/linear-algebra/formulas#scalar_triple_product]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

A zero determinant means the parallelepiped has been flattened — the three vectors are coplanar, all confined to a single plane with no volume between them.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj8: {
    title: `Dot Product vs Cross Product`,
    content: `The two multiplication operations available for vectors occupy complementary niches, and contrasting them sharpens the purpose of each.

At the most basic level, they differ in what comes out: the dot product delivers a number, while the cross product delivers a vector. They also differ in scope — the component-wise sum of products behind the dot product generalizes to any $\\mathbb{R}^n$, whereas the cross product's reliance on three-component determinants confines it to $\\mathbb{R}^3$.

Order sensitivity separates them further. Swapping the operands in a dot product changes nothing; swapping them in a cross product reverses the resulting vector entirely. This distinction — commutativity versus anti-commutativity — reflects a deeper geometric divide. The dot product is insensitive to handedness; the cross product is built on it.

The conditions under which each product vanishes tell opposite stories. A zero dot product flags perpendicularity: the vectors share no directional overlap. A zero cross product flags collinearity: the vectors lie along the same line and enclose no area. One detects maximum angular separation; the other detects none at all.

Taken together, the two products partition the angular information between a pair of vectors in $\\mathbb{R}^3$ without overlap. The dot product isolates the $\\cos\\theta$ factor — the projection of one vector onto the other. The cross product isolates the $\\sin\\theta$ factor — the extent to which the vectors diverge from each other's direction, packaged as a perpendicular vector whose length records the enclosed area. Every geometric relationship between two vectors in three dimensions can be read from these two numbers.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj9: {
    title: `Summary of Cross Product Uses`,
    content: `The preceding sections put the cross product to a small set of distinct uses — measuring the area of a parallelogram, constructing a vector perpendicular to a given plane, testing whether two vectors are parallel, computing the volume of a parallelepiped through the scalar triple product, and reducing nested cross products through the vector triple product expansion. The table below collects these uses in one place: each row pairs a geometric or algebraic result with the formula that delivers it and a one-line statement of what that result captures.`,
    before: ``,
    after: ``,
    link: '',
  },
};


 const introContent = {
     id: `intro`,
  title: `A Product That Builds Perpendicular Vectors`,
  content: `The cross product stands apart from every other operation in this section. It takes two vectors and returns a new vector — one that is perpendicular to both inputs. Its magnitude measures the area of the parallelogram the two vectors span, and its direction is determined by a handedness convention that introduces orientation into three-dimensional space. Unlike the [dot product](!/linear-algebra/vectors/dot-product), which works in any $\\mathbb{R}^n$ and produces a scalar, the cross product is defined exclusively in $\\mathbb{R}^3$ and produces a vector. It is anti-commutative, not associative, and zero precisely when the two inputs are parallel. These departures from familiar algebraic patterns are not defects — they reflect the geometric nature of perpendicularity and area in three dimensions.`,
};

const faqQuestions = {
  obj1: {
    question: "What is the cross product formula?",
    answer: "For a = (a₁, a₂, a₃) and b = (b₁, b₂, b₃): a × b = (a₂b₃ - a₃b₂, a₃b₁ - a₁b₃, a₁b₂ - a₂b₁). This can be computed using a 3×3 determinant with i, j, k in the first row and the two vectors in the remaining rows.",
    sectionId: "1"
  },
  obj2: {
    question: "What are the cross products of i, j, and k?",
    answer: "Following cyclic order: i × j = k, j × k = i, k × i = j. Reversing order negates the result: j × i = -k, etc. Any basis vector crossed with itself gives zero. These nine cases form the foundation for all cross product computations.",
    sectionId: "2"
  },
  obj3: {
    question: "What is the geometric meaning of the cross product?",
    answer: "The magnitude ‖a × b‖ = ‖a‖‖b‖sinθ equals the area of the parallelogram spanned by a and b. The direction is perpendicular to both input vectors, exiting the plane they span. Both a·(a × b) and b·(a × b) equal zero.",
    sectionId: "3"
  },
  obj4: {
    question: "What is the right-hand rule?",
    answer: "Align right-hand fingers along a, curl them toward b through the shorter arc—the extended thumb points in the direction of a × b. Switching operands reverses the thumb direction. This convention defines orientation in 3D space.",
    sectionId: "4"
  },
  obj5: {
    question: "What are the properties of the cross product?",
    answer: "Anti-commutative: a × b = -(b × a). Distributive over addition. Scalars factor out freely. NOT associative: a × (b × c) ≠ (a × b) × c generally. Self-cross product is zero: a × a = 0.",
    sectionId: "5"
  },
  obj6: {
    question: "When is the cross product zero?",
    answer: "a × b = 0 if and only if a and b are parallel (or one is zero). Parallel vectors have angle 0 or π, so sinθ = 0 and the magnitude vanishes. This complements the dot product test: zero dot product means perpendicular, zero cross product means parallel.",
    sectionId: "6"
  },
  obj7: {
    question: "What is the scalar triple product?",
    answer: "a · (b × c) equals the signed volume of the parallelepiped with edges a, b, c. It can be computed as a 3×3 determinant. Zero means the three vectors are coplanar. The sign indicates handedness (positive = right-handed orientation).",
    sectionId: "7"
  },
  obj8: {
    question: "What is the difference between dot product and cross product?",
    answer: "Dot product: returns scalar, works in any ℝⁿ, commutative, zero means perpendicular, isolates cosθ. Cross product: returns vector, only in ℝ³, anti-commutative, zero means parallel, isolates sinθ. Together they capture all angular information.",
    sectionId: "8"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Cross Product",
    "description": "Learn the cross product: formula, determinant method, right-hand rule, geometric meaning (area and perpendicularity), properties, scalar triple product, and comparison with dot product.",
    "url": "https://www.learnmathclass.com/linear-algebra/vectors/cross-product",
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
      "name": "Cross Product"
    },
    "teaches": [
      "Cross product formula and determinant method",
      "Standard basis cross products i, j, k",
      "Geometric interpretation: area and perpendicularity",
      "Right-hand rule and orientation",
      "Cross product properties",
      "Scalar triple product and volume",
      "Dot product vs cross product comparison",
      "Applications of the cross product"
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
        "name": "Cross Product",
        "item": "https://www.learnmathclass.com/linear-algebra/vectors/cross-product"
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
    obj5Table,
    obj8Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Cross Product: Formula, Right-Hand Rule & Properties | Learn Math Class",
      description: "Learn the cross product: formula, determinant method, right-hand rule, geometric meaning (area and perpendicularity), properties, scalar triple product, and comparison with dot product.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/vectors/cross-product",
      name: "Cross Product"
    },
  }
}
   }
export default function CrossProductPage({
  seoData,
  sectionsContent,
  introContent,
  obj2Table,
  obj5Table,
  obj8Table,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Cross Product</h1>
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