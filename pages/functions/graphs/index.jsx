
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

  const keyWords=['graphing functions','function graphs','coordinate plane','plotting functions','x-intercept','y-intercept','reading graphs','sketching functions','graph interpretation','key features of graphs','types of curves','function graph examples','vertical line test','graph of a function']

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj6 — comparison: y-intercept vs x-intercepts
  const obj6Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Intercept</th>
      <th style="${tableHeaders.comparison}">Algebraic method</th>
      <th style="${tableHeaders.comparison}">On the graph</th>
      <th style="${tableHeaders.comparison}">How many possible</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">y-intercept (0, f(0))</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">evaluate f(0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">point where the curve crosses the y-axis</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">at most 1 (none if 0 ∉ domain)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">x-intercepts (c, 0)</td>
      <td style="padding: 12px 15px; color: #34495e;">solve f(x) = 0</td>
      <td style="padding: 12px 15px; color: #34495e;">point(s) where the curve crosses the x-axis</td>
      <td style="padding: 12px 15px; color: #34495e;">0, 1, or many</td>
    </tr>
  </tbody>
</table>
`

  // obj7 — aggregation: visible key features
  const obj7Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Feature</th>
      <th style="${tableHeaders.aggregation}">What it looks like</th>
      <th style="${tableHeaders.aggregation}">What it reveals about the function</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Local maximum</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a peak — the curve rises and then falls</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">local high value; turning point from increasing to decreasing</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Local minimum</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a valley — the curve falls and then rises</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">local low value; turning point from decreasing to increasing</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Absolute maximum / minimum</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the highest / lowest point on the entire curve</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the largest / smallest value the function ever takes</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Vertical asymptote</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">curve rises or falls steeply near a vertical line, never reaching it</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">function is undefined or unbounded at that x-value</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Horizontal asymptote</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">curve levels off toward a horizontal line at the far left or far right</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">end behavior approaches that y-value</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Hole</td>
      <td style="padding: 12px 15px; color: #34495e;">a single missing point shown as an open circle</td>
      <td style="padding: 12px 15px; color: #34495e;">removable discontinuity at that x-value</td>
    </tr>
  </tbody>
</table>
`

  // obj8 — aggregation: common curve shapes and the function families they signal
  const obj8Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Curve</th>
      <th style="${tableHeaders.aggregation}">Function family</th>
      <th style="${tableHeaders.aggregation}">Signature features</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Line</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">linear: f(x) = mx + b</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">constant slope, no curvature, extends to infinity in both directions</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Parabola</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">quadratic: f(x) = ax² + bx + c</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">single vertex; opens up if a &gt; 0, down if a &lt; 0</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">S-curve</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cubic: f(x) = ax³ + …</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">one inflection point; ends extend to opposite infinities</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Hyperbola</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rational, e.g. 1 ⁄ x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">two branches separated by vertical and horizontal asymptotes</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Half-curve</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">radical, e.g. √x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">begins at a fixed starting point, extends in one direction with gentle curvature</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">V-shape</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">absolute value: |x|</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">two linear pieces meeting at a vertex; reflects below x-axis back up</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Wave</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">trigonometric: sin, cos</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">periodic oscillation; bounded amplitude; cycles repeat indefinitely</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Growth / decay curve</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">exponential: aˣ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rises rapidly or decays; stays strictly on one side of the x-axis</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Staircase</td>
      <td style="padding: 12px 15px; color: #34495e;">step / piecewise constant</td>
      <td style="padding: 12px 15px; color: #34495e;">horizontal segments connected by jumps at boundaries</td>
    </tr>
  </tbody>
</table>
`

  // obj11 — summary capstone: visual lookup card
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Question about f</th>
      <th style="${tableHeaders.summary}">What to look for on the graph</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">What is f(a)?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">go up from x = a on the x-axis until you meet the curve; read the y-coordinate</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">What x satisfies f(x) = b?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">go across from y = b on the y-axis; read the x-coordinate of every intersection</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">y-intercept</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">point where the curve crosses the y-axis</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">x-intercepts (zeros)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">points where the curve crosses or touches the x-axis</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Domain</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">horizontal extent — every x-value the graph covers</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Range</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">vertical extent — every y-value the curve reaches</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Increasing / decreasing intervals</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">portions of the domain where the curve rises (increasing) or falls (decreasing) from left to right</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Local extrema</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">peaks (local max) and valleys (local min) — the turning points</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Absolute extrema</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the single highest and lowest points on the entire curve</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Symmetry</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">mirror across the y-axis (even function) or point symmetry about the origin (odd function)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">End behavior</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">where the curve heads as x → ∞ and x → −∞ — to a finite limit (horizontal asymptote) or to ±∞</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Asymptotes</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">vertical lines near which the curve diverges; horizontal or slanted lines the curve approaches at the extremes</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Continuity / discontinuities</td>
      <td style="padding: 12px 15px; color: #34495e;">connected curve (continuous); breaks, jumps, or open-circle holes (discontinuous)</td>
    </tr>
  </tbody>
</table>
`
const obj3MiniTable = `
<table style="border-collapse: collapse; margin: 16px auto; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 14px; color: #34495e;">
  <thead>
    <tr style="background: #f5f7fa;">
      <th style="padding: 6px 16px; border: 1px solid #e1e4e8; font-weight: 600; color: #06357a; text-align: center;">x</th>
      <th style="padding: 6px 16px; border: 1px solid #e1e4e8; font-weight: 600; color: #06357a; text-align: center;">f(x)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">0</td><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">3</td></tr>
    <tr><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">1</td><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">0</td></tr>
    <tr><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">2</td><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">&minus;1</td></tr>
    <tr><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">3</td><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">0</td></tr>
    <tr><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">4</td><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">3</td></tr>
  </tbody>
</table>
`


const obj4MiniTable = `
<table style="border-collapse: collapse; margin: 16px auto; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 14px; color: #34495e;">
  <thead>
    <tr style="background: #f5f7fa;">
      <th style="padding: 6px 16px; border: 1px solid #e1e4e8; font-weight: 600; color: #06357a; text-align: center;">x</th>
      <th style="padding: 6px 16px; border: 1px solid #e1e4e8; font-weight: 600; color: #06357a; text-align: center;">f(x)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">&minus;2</td><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">5</td></tr>
    <tr><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">0</td><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">1</td></tr>
    <tr><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">2</td><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">&minus;3</td></tr>
    <tr><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">4</td><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">1</td></tr>
    <tr><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">6</td><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">5</td></tr>
  </tbody>
</table>
`

const sectionsContent = {

  obj0 : {
  title: `Key Terms`,
  content: `
## Reading the Graph
 
• [Domain](!/functions/definitions#domain) — horizontal extent: where the graph exists
• [Range](!/functions/definitions#range) — vertical extent: what $y$-values the graph reaches
• [Zero of a Function](!/functions/definitions#zero_of_a_function) — $x$-intercepts, where the curve crosses the horizontal axis
 
## Key Features
 
• [Asymptote](!/functions/definitions#asymptote) — a line the graph approaches at vertical blowups or horizontal extremes
• [Local Maximum](!/functions/definitions#local_maximum) — a peak on the curve
• [Local Minimum](!/functions/definitions#local_minimum) — a valley on the curve
 
## Connecting to Algebra
 
• [Function](!/functions/definitions#function) — the graph encodes the function visually; the vertical line test confirms it
• [Parent Function](!/functions/definitions#parent_function) — recognizing the parent shape identifies the family from the graph
`,
  before: ``,
  after: `
 
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Function Definitions](!/functions/definitions) →@`,
  link: '',
},

  obj1: {
    title: `The Coordinate Plane`,
    content: `The coordinate plane is the stage on which functions are graphed. Two perpendicular number lines — the horizontal $x$-axis and the vertical $y$-axis — intersect at the origin $(0, 0)$ and extend infinitely in all directions.

Every point in the plane is identified by an ordered pair $(x, y)$. The first coordinate gives the horizontal position: positive to the right of the origin, negative to the left. The second coordinate gives the vertical position: positive above the origin, negative below.

The axes divide the plane into four quadrants. Quadrant I contains points where both coordinates are positive. Quadrant II has negative $x$ and positive $y$. Quadrant III has both coordinates negative. Quadrant IV has positive $x$ and negative $y$.

Plotting a point means locating it on this grid. To plot $(3, -2)$, move $3$ units right from the origin, then $2$ units down. The point lies in Quadrant IV.

This framework provides the canvas for every function graph. The $x$-axis represents input, the $y$-axis represents output, and the curve connecting plotted points shows how output depends on input.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `The Graph of a Function`,
    content: `The graph of a function $f$ is the set of all points $(x, f(x))$ where $x$ is in the [domain](!/functions/domain). Each point pairs an input with its corresponding output, and the complete collection of such points forms a curve in the plane.

For $f(x) = x^2$, the graph includes $(0, 0)$, $(1, 1)$, $(2, 4)$, $(-1, 1)$, $(-2, 4)$, and infinitely many other points. Connected together, they form the familiar parabola opening upward.

The graph is a visual encoding of the function's behavior. Inputs run along the horizontal axis; outputs are measured vertically. To find $f(3)$ from the graph, locate $x = 3$ on the horizontal axis, move vertically to the curve, and read the $y$-coordinate of that point.

Because a function assigns exactly one output to each input, the graph has a definitive property: every vertical line intersects it at most once. This is the vertical line test — if a vertical line crosses a curve twice, that curve does not represent a function.

The graph transforms abstract relationships into geometric objects. Increasing behavior appears as a rising curve. Decreasing behavior appears as a falling curve. Symmetry, periodicity, and boundedness become visible patterns.`,
    before: ``,
    after: ``,
    link: '',
  },

//   obj3: {
//     title: `Sketching Graphs from Equations`,
//     content: `Given a function's equation, the most direct way to produce its graph is point plotting: choose input values, compute outputs, plot the resulting points, and connect them with an appropriate curve.

// For $f(x) = x^2 - 4x + 3$, build a table of values:

// | $x$ | $f(x)$ |
// |-----|--------|
// | $0$ | $3$ |
// | $1$ | $0$ |
// | $2$ | $-1$ |
// | $3$ | $0$ |
// | $4$ | $3$ |

// Plot these five points and connect them with a smooth parabola. The curve passes through $(1, 0)$ and $(3, 0)$, reaches a minimum at $(2, -1)$, and opens upward.

// Choosing strategic points improves efficiency. Include $x = 0$ to find the $y$-intercept. Solve $f(x) = 0$ to find $x$-intercepts. For quadratics, find the vertex. For rational functions, identify asymptotes. For periodic functions, capture at least one full period.

// Recognizing the function type anticipates the shape. Linear equations produce lines. Quadratics produce parabolas. Cubics produce S-curves. Familiarity with [function families](!/functions/families) reduces guesswork — the shape is known in advance, and plotting confirms the specific position and scale.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

obj3: {
  title: `Sketching Graphs from Equations`,
  content: `Given a function's equation, the most direct way to produce its graph is point plotting: choose input values, compute outputs, plot the resulting points, and connect them with an appropriate curve.

For $f(x) = x^2 - 4x + 3$, build a table of values:`,
  contentAfter: `Plot these five points and connect them with a smooth parabola. The curve passes through $(1, 0)$ and $(3, 0)$, reaches a minimum at $(2, -1)$, and opens upward.

Choosing strategic points improves efficiency. Include $x = 0$ to find the $y$-intercept. Solve $f(x) = 0$ to find $x$-intercepts. For quadratics, find the vertex. For rational functions, identify asymptotes. For periodic functions, capture at least one full period.

Recognizing the function type anticipates the shape. Linear equations produce lines. Quadratics produce parabolas. Cubics produce S-curves. Familiarity with [function families](!/functions/families) reduces guesswork — the shape is known in advance, and plotting confirms the specific position and scale.`,
  before: ``,
  after: ``,
  link: '',
},



//   obj4: {
//     title: `Sketching Graphs from Tables`,
//     content: `When a function is given as a table of input-output pairs rather than an equation, the graph emerges by plotting each pair and making reasonable connections.

// A table provides discrete data:

// | $x$ | $f(x)$ |
// |-----|--------|
// | $-2$ | $5$ |
// | $0$ | $1$ |
// | $2$ | $-3$ |
// | $4$ | $1$ |
// | $6$ | $5$ |

// Plot the points $(-2, 5)$, $(0, 1)$, $(2, -3)$, $(4, 1)$, $(6, 5)$. If the function is continuous, connect them with a smooth curve. If the function is discrete — defined only at those specific inputs — leave the points unconnected.

// Tables reveal exact values at sampled points but conceal behavior between samples. The function might oscillate wildly between listed values, or it might follow a simple pattern. Without additional information, connecting points assumes the simplest plausible behavior.

// Context guides interpretation. A table of daily temperatures suggests a continuous underlying process; connecting points makes sense. A table of annual profits at year-end suggests discrete data; plotting only the given points may be more appropriate.

// Tables cannot capture every feature — a maximum might occur between listed points, and asymptotes might lurk where no data exists. Graphs from tables are approximations, constrained by the data provided.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },


obj4: {
  title: `Sketching Graphs from Tables`,
  content: `When a function is given as a table of input-output pairs rather than an equation, the graph emerges by plotting each pair and making reasonable connections.

A table provides discrete data:`,
  contentAfter: `Plot the points $(-2, 5)$, $(0, 1)$, $(2, -3)$, $(4, 1)$, $(6, 5)$. If the function is continuous, connect them with a smooth curve. If the function is discrete — defined only at those specific inputs — leave the points unconnected.

Tables reveal exact values at sampled points but conceal behavior between samples. The function might oscillate wildly between listed values, or it might follow a simple pattern. Without additional information, connecting points assumes the simplest plausible behavior.

Context guides interpretation. A table of daily temperatures suggests a continuous underlying process; connecting points makes sense. A table of annual profits at year-end suggests discrete data; plotting only the given points may be more appropriate.

Tables cannot capture every feature — a maximum might occur between listed points, and asymptotes might lurk where no data exists. Graphs from tables are approximations, constrained by the data provided.`,
  before: ``,
  after: ``,
  link: '',
},


  obj5: {
    title: `Reading Function Values from Graphs`,
    content: `A graph answers questions about function values through geometric reading rather than algebraic calculation.

To find $f(a)$ for a specific input $a$: locate $a$ on the horizontal axis, draw a vertical line to the curve, and read the $y$-coordinate of the intersection point. That $y$-value is $f(a)$.

To find all $x$ such that $f(x) = b$ for a specific output $b$: locate $b$ on the vertical axis, draw a horizontal line to the curve, and read the $x$-coordinates of all intersection points. Each intersection gives a solution.

The first question has at most one answer — a function produces exactly one output per input. The second question may have zero, one, or many answers — multiple inputs can share the same output.

Precision depends on the graph's scale and clarity. Reading $f(2)$ from a carefully drawn graph might yield $f(2) = 3.7$, but the true value might be $3.71$ or $3.68$. Graphs provide estimates; equations provide exact values.

Graphs also answer qualitative questions directly. Is $f(3)$ positive or negative? Check whether the point at $x = 3$ lies above or below the $x$-axis. Is $f(2) > f(5)$? Compare the heights of the graph at those two inputs.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Intercepts`,
    content: `Intercepts are points where the graph crosses the coordinate axes. They anchor the graph to recognizable positions.

The $y$-intercept is the point where the graph crosses the vertical axis. At this point, $x = 0$. To find it algebraically, evaluate $f(0)$. The $y$-intercept is $(0, f(0))$.

A function has at most one $y$-intercept, since $x = 0$ produces at most one output. If $0$ is not in the domain, the function has no $y$-intercept.

The $x$-intercepts are points where the graph crosses the horizontal axis. At these points, $y = 0$. To find them algebraically, solve $f(x) = 0$. Each solution $x = c$ gives an $x$-intercept $(c, 0)$.

A function can have zero, one, or many $x$-intercepts. The parabola $f(x) = x^2 + 1$ has none — it never touches the $x$-axis. The parabola $f(x) = x^2$ has exactly one, at the origin. The sine function has infinitely many, at every integer multiple of $\\pi$.

The $x$-intercepts are the zeros of the function, and finding them is equivalent to solving the equation $f(x) = 0$. This connection makes intercepts central to both graphing and equation-solving. The table below sets the two intercept types side by side with their algebraic methods, graphical meaning, and count.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Identifying Key Features Visually`,
    content: `Beyond intercepts, graphs reveal features that characterize a function's behavior.

Peaks are local high points — places where the graph rises to a summit and then descends. These are local maxima. Valleys are local low points — places where the graph descends to a trough and then rises. These are local minima. Together, peaks and valleys are the turning points of the graph.

The absolute maximum is the highest point on the entire graph; the absolute minimum is the lowest. These may occur at turning points or at the endpoints of a restricted domain. Some functions have no absolute extrema — a line extends forever in both directions without reaching a highest or lowest point.

Asymptotes are lines the graph approaches but never reaches. A vertical asymptote appears where the function blows up toward infinity; the graph rises or falls steeply, getting arbitrarily close to a vertical line. A horizontal asymptote describes end behavior — the graph levels off toward a fixed height as $x$ extends toward infinity.

Holes are single missing points — places where the graph is undefined but the surrounding curve continues smoothly. Holes appear as open circles on carefully drawn graphs and correspond to removable discontinuities in the function.

The table below collects each of these features with what it looks like on the graph and what it reveals about the underlying function.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Types of Curves`,
    content: `Different [function families](!/functions/families) produce different characteristic shapes. Recognizing these shapes enables faster graphing and deeper understanding.

Lines come from linear functions $f(x) = mx + b$. They have constant slope, no curvature, and extend infinitely in both directions.

Parabolas come from quadratic functions $f(x) = ax^2 + bx + c$. They open upward when $a > 0$, downward when $a < 0$, and have a single vertex where the curve turns.

S-curves come from cubic functions. They feature one inflection point where the curve changes from bending one way to bending the other. Both ends extend to infinity, in opposite directions.

Hyperbolas come from simple rational functions like $f(x) = 1/x$. They have two separate branches, one in Quadrants I and III, the other reflected. Vertical and horizontal asymptotes frame the curve.

Half-curves come from radical functions like $f(x) = \\sqrt{x}$. They begin at a starting point and extend in one direction, curving gently.

Waves come from trigonometric functions. They oscillate periodically, rising and falling in regular cycles that repeat forever.

Growth and decay curves come from exponential functions. They rise rapidly toward infinity or decay toward zero, always staying on one side of the horizontal axis.

The table below collects these and a few more parent shapes side by side — useful as a recognition card when looking at an unfamiliar graph and trying to identify the function family it belongs to.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Graphing Technology`,
    content: `Graphing calculators and software automate the plotting process. Enter the function's equation, and the tool generates the graph instantly.

Setting the viewing window determines what portion of the graph is visible. The default window may miss important features — a function with zeros at $x = 100$ and $x = -100$ will appear flat if the window shows only $-10 \\leq x \\leq 10$. Adjusting the window to capture all relevant behavior is essential.

Trace features allow reading coordinates of points on the graph. Moving along the curve displays the $x$ and $y$ values at each position. This answers questions like "what is $f(2.5)$?" directly.

Built-in tools find intercepts, maxima, minima, and intersections. These calculations may be numerical approximations rather than exact answers, but they provide valuable information quickly.

Technology has limitations. It cannot show true asymptotic behavior — only increasingly steep curves within the finite window. It cannot reveal holes unless the software is designed to indicate them. Resolution limits mean that rapid oscillations may appear as solid bands.

Technology is a tool for exploration and verification, not a replacement for understanding. Knowing what a graph should look like allows checking whether the technology is showing something meaningful or misleading.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Graph Interpretation`,
    content: `Reading a graph is not just about extracting numbers — it is about understanding what the function does.

Shape reveals behavior. A graph that rises from left to right represents an increasing function. A graph that oscillates represents periodic behavior. A graph that levels off toward a horizontal line represents bounded end behavior.

The [domain](!/functions/domain) appears as horizontal extent. Where does the graph exist? Where are there gaps or asymptotes?

The [range](!/functions/range) appears as vertical extent. How high does the graph reach? How low? Are there values of $y$ the graph never attains?

Symmetry appears as visual balance. A graph symmetric about the $y$-axis represents an [even function](!/functions/properties). A graph symmetric about the origin represents an odd function.

Comparing graphs reveals relationships between functions. Two functions with the same shape but different positions differ by a [transformation](!/functions/transformations). Two functions that intersect share common solutions.

Graphs translate between the algebraic and the visual. The equation $f(x) = x^2 - 4$ states a rule; its graph shows a parabola crossing the $x$-axis at $\\pm 2$ and reaching a minimum at the origin. Both descriptions capture the same function, and fluency in reading both strengthens understanding of each.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `What to Look For on a Graph`,
    content: `Every question that can be asked about a function corresponds to a feature that can be located visually on its graph. The table below collects the most common questions — value lookups, intercepts, domain and range, monotonicity, extrema, symmetry, end behavior, asymptotes, and continuity — alongside the visual cue that answers each, useful as a reference card when reading any unfamiliar graph.`,
    before: ``,
    after: ``,
    link: '',
  },

}

const introContent = {
  id: "intro",
  title: "Functions Made Visible",
  content: `An equation describes a function algebraically. A graph describes it visually. The graph of a function is the collection of all points $(x, f(x))$ plotted in the coordinate plane — a picture that reveals at a glance what the algebra might take pages to explain.

From a graph, the shape of a function becomes immediate. Where does it rise? Where does it fall? Where does it cross the axes? Where does it reach its highest or lowest points? These questions, difficult to answer from a formula alone, become matters of simple observation once the function is drawn.`
}




  const faqQuestions = {
    q1: {
      question: "What is the graph of a function?",
      answer: "The graph of a function is the set of all points (x, f(x)) plotted in the coordinate plane, where x is in the domain. Each point pairs an input with its corresponding output, forming a curve that visually encodes the function's behavior. Because a function assigns exactly one output to each input, every vertical line intersects the graph at most once."
    },
    q2: {
      question: "How do you find the x-intercepts and y-intercept of a function graph?",
      answer: "The y-intercept is found by evaluating f(0), giving the point (0, f(0)) where the graph crosses the vertical axis. The x-intercepts are found by solving f(x) = 0; each solution x = c gives an x-intercept at (c, 0). A function has at most one y-intercept but can have zero, one, or many x-intercepts."
    },
    q3: {
      question: "How do you sketch a function graph from an equation?",
      answer: "The most direct method is point plotting: choose input values, compute the corresponding outputs, plot the resulting points, and connect them with a smooth curve. Including strategic points such as the y-intercept, x-intercepts, and the vertex or turning point improves efficiency. Recognizing the function family in advance — linear, quadratic, cubic, etc. — allows you to anticipate the shape before plotting."
    },
    q4: {
      question: "What key features can you identify from a function graph?",
      answer: "A graph reveals intercepts, local maxima and minima (peaks and valleys), the absolute maximum and minimum, vertical and horizontal asymptotes, and any holes (removable discontinuities). The domain appears as the horizontal extent of the graph and the range as the vertical extent. Symmetry about the y-axis indicates an even function, while symmetry about the origin indicates an odd function."
    },
    q5: {
      question: "What are the main types of curves produced by different function families?",
      answer: "Linear functions produce straight lines, quadratics produce parabolas, and cubic functions produce S-shaped curves with an inflection point. Rational functions like 1/x produce hyperbolas with asymptotes, radical functions produce half-curves starting from a fixed point, trigonometric functions produce periodic waves, and exponential functions produce rapid growth or decay curves that stay on one side of the horizontal axis."
    },
  }

  const seoData = {
    title: "Graphs of Functions | Learn Math Class",
    description: "Learn how to graph and analyze functions. Covers the coordinate plane, plotting techniques, intercepts, key features, types of curves, and graph interpretation.",
    keywords: keyWords.join(", "),
    url: "/functions/graphs",
    name: "Graphs of Functions",
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": seoData.name,
      "description": seoData.description,
      "url": `https://www.learnmathclass.com${seoData.url}`,
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class",
        "url": "https://www.learnmathclass.com"
      },
      "teaches": [
        "The coordinate plane and how to plot points using ordered pairs",
        "How to read and interpret the graph of a function",
        "Sketching function graphs from equations and tables",
        "Finding x-intercepts, y-intercepts, and key features of graphs",
        "Identifying types of curves produced by different function families",
        "Using graphs to interpret domain, range, symmetry, and end behavior"
      ]
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
          "item": `https://www.learnmathclass.com${seoData.url}`
        }
      ]
    },
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": faqQuestions.q1.question,
          "acceptedAnswer": { "@type": "Answer", "text": faqQuestions.q1.answer }
        },
        {
          "@type": "Question",
          "name": faqQuestions.q2.question,
          "acceptedAnswer": { "@type": "Answer", "text": faqQuestions.q2.answer }
        },
        {
          "@type": "Question",
          "name": faqQuestions.q3.question,
          "acceptedAnswer": { "@type": "Answer", "text": faqQuestions.q3.answer }
        },
        {
          "@type": "Question",
          "name": faqQuestions.q4.question,
          "acceptedAnswer": { "@type": "Answer", "text": faqQuestions.q4.answer }
        },
        {
          "@type": "Question",
          "name": faqQuestions.q5.question,
          "acceptedAnswer": { "@type": "Answer", "text": faqQuestions.q5.answer }
        },
      ]
    },
  }

   return {
      props:{
         sectionsContent,
         introContent,
         obj6Table,
         obj7Table,
         obj8Table,
         summaryTable,
         faqQuestions,
         schemas,
         obj3MiniTable,
         obj4MiniTable,
          seoData: {
        title: "Graphs of Functions | Learn Math Class",
        description: "Learn how to graph and analyze functions. Covers the coordinate plane, plotting techniques, intercepts, key features, types of curves, and graph interpretation.",
        keywords: keyWords.join(", "),
        url: "/functions/graphs",
         name: "Graphs of Functions"
      },
       }
    }
   }

export default function GraphsPage({
  seoData,
  sectionsContent,
  introContent,
  obj6Table,
  obj7Table,
  obj8Table,
  summaryTable,
  faqQuestions,
  schemas,
  obj3MiniTable,
  obj4MiniTable,
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
    // {
    //     id:'3',
    //     title:sectionsContent.obj3.title,
    //     link:sectionsContent.obj3.link,
    //     content:[
    //       sectionsContent.obj3.content,
    //     ]
    // },
    // {
    //     id:'4',
    //     title:sectionsContent.obj4.title,
    //     link:sectionsContent.obj4.link,
    //     content:[
    //       sectionsContent.obj4.content,
    //     ]
    // },

    {
    id:'3',
    title:sectionsContent.obj3.title,
    link:sectionsContent.obj3.link,
    content:[
      sectionsContent.obj3.content,
      <div key={'obj3-mini-table'} style={tableWrapStyle}
           dangerouslySetInnerHTML={{ __html: obj3MiniTable }} />,
      sectionsContent.obj3.contentAfter,
    ]
},

{
    id:'4',
    title:sectionsContent.obj4.title,
    link:sectionsContent.obj4.link,
    content:[
      sectionsContent.obj4.content,
      <div key={'obj4-mini-table'} style={tableWrapStyle}
           dangerouslySetInnerHTML={{ __html: obj4MiniTable }} />,
      sectionsContent.obj4.contentAfter,
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
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
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
          <div
            key={'summary-table'}
            style={tableWrapStyle}
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
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.learningResource) }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Graphs of Functions</h1>
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