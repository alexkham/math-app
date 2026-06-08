
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
    'trigonometric inequalities',
    'solving trig inequalities',
    'sin x greater than',
    'cos x less than',
    'trig inequality graph method',
    'unit circle inequality',
    'interval notation trig',
    'compound trig inequalities',
    'trig inequality solution set',
    'graphical method inequalities',
    'where is sine positive',
    'where is cosine negative',
    'trig inequality number line',
    'periodic inequality solutions'
  ]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj1 — comparison: equation vs inequality (attribute rows)
  const obj1Table = `
<table class="styled-table" style="border-collapse: collapse; width: 85%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Aspect</th>
      <th style="${tableHeaders.comparison}">Trigonometric equation</th>
      <th style="${tableHeaders.comparison}">Trigonometric inequality</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Solution form</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">isolated points</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">intervals (or unions of intervals)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Boundary points</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the solution itself</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">endpoints of solution intervals</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Endpoint inclusion</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">not a distinction (equality &lt;em&gt;is&lt;/em&gt; the answer)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">open if strict (&gt;, &lt;); closed if non-strict (≥, ≤)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Asymptote handling</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">function defined at every solution</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">always excluded — function undefined there</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">General-solution form</td>
      <td style="padding: 12px 15px; color: #34495e;">x = a + n·period</td>
      <td style="padding: 12px 15px; color: #34495e;">(a, b) + n·period (and unions)</td>
    </tr>
  </tbody>
</table>
`

  // obj3 — comparison: graphical method vs unit circle method
  const obj3Table = `
<table class="styled-table" style="border-collapse: collapse; width: 90%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Method</th>
      <th style="${tableHeaders.comparison}">What you draw</th>
      <th style="${tableHeaders.comparison}">How you read the solution</th>
      <th style="${tableHeaders.comparison}">Best applied to</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Graphical</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the function&apos;s curve plus the horizontal line y = a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">intervals where the curve lies above (&gt; a) or below (&lt; a) the line</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">any inequality — especially transformed functions A·f(Bx+C)+D and tangent</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Unit circle</td>
      <td style="padding: 12px 15px; color: #34495e;">a horizontal line y = a (for sine) or vertical line x = a (for cosine) cutting the circle</td>
      <td style="padding: 12px 15px; color: #34495e;">the arc on the satisfying side; boundary angles read off at intersection points</td>
      <td style="padding: 12px 15px; color: #34495e;">basic sin / cos inequalities; geometric intuition for boundary angles</td>
    </tr>
  </tbody>
</table>
`

  // obj4 — aggregation: sine cases by value of a × inequality direction
  const obj4Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Range of a</th>
      <th style="${tableHeaders.aggregation} text-align: center;">sin(x) &gt; a</th>
      <th style="${tableHeaders.aggregation} text-align: center;">sin(x) ≥ a</th>
      <th style="${tableHeaders.aggregation} text-align: center;">sin(x) &lt; a</th>
      <th style="${tableHeaders.aggregation} text-align: center;">sin(x) ≤ a</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">−1 &lt; a &lt; 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">standard intervals, open endpoints</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">standard intervals, closed endpoints</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">standard intervals, open endpoints</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">standard intervals, closed endpoints</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">a = 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no solution</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x = π/2 + 2nπ only (isolated points)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all real x except π/2 + 2nπ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all real x</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">a = −1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all real x except 3π/2 + 2nπ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all real x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no solution</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x = 3π/2 + 2nπ only (isolated points)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">a &gt; 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no solution</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no solution</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all real x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all real x</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">a &lt; −1</td>
      <td style="padding: 12px 15px; color: #34495e;">all real x</td>
      <td style="padding: 12px 15px; color: #34495e;">all real x</td>
      <td style="padding: 12px 15px; color: #34495e;">no solution</td>
      <td style="padding: 12px 15px; color: #34495e;">no solution</td>
    </tr>
  </tbody>
</table>
`

  // obj9 — summary capstone: inequality form → approach
  // Form names link to in-page section anchors.
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Inequality form</th>
      <th style="${tableHeaders.summary}">First step</th>
      <th style="${tableHeaders.summary}">Solution structure</th>
      <th style="${tableHeaders.summary}">Repeats with period</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#2" style="${linkStyle}">Basic</a>: f(x) ⋛ a, |a| &lt; 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">solve f(x) = a for the boundary angles</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">union of intervals; open or closed by strictness</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2π (sin, cos, sec, csc); π (tan, cot)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#4" style="${linkStyle}">Range-edge</a>: f(x) ⋛ ±1 for sin or cos</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">compare a to the function&apos;s range [−1, 1]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">isolated points (at the extrema), all reals, or empty</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2π if isolated; n/a if all reals or empty</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#4" style="${linkStyle}">Out-of-range</a>: |a| &gt; 1 for sin or cos</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">check whether a lies outside [−1, 1] — no boundary equation needed</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all reals or empty</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">n/a</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#6" style="${linkStyle}">Compound</a>: a ⋛ f(x) ⋛ b</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">solve each one-sided inequality separately</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">intersection of the two solution sets</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">period of f</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#7" style="${linkStyle}">Transformed</a>: A·f(Bx+C)+D ⋛ a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">isolate f(·); substitute u = Bx+C and solve in u</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">basic-form solution in u, scaled by 1/|B| and shifted; |B| copies per outer period</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">period of f scaled by 1/|B|</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;"><a href="#8" style="${linkStyle}">Reciprocal</a>: 1/f(x) ⋛ a (sec, csc)</td>
      <td style="padding: 12px 15px; color: #34495e;">split by sign of f(x); take the reciprocal carefully on each branch</td>
      <td style="padding: 12px 15px; color: #34495e;">intersection of sign condition and reciprocal-form inequality; asymptotes always excluded</td>
      <td style="padding: 12px 15px; color: #34495e;">period of f</td>
    </tr>
  </tbody>
</table>
`

  const faqQuestions = {
    obj1: {
      question: "How do you solve a trigonometric inequality?",
      answer: "First solve the corresponding equation to find the boundary angles where equality holds. Then determine which intervals between these boundary points satisfy the inequality, using either the unit circle or the graph of the function. Express the solution as a union of intervals, and add the period to capture all solutions if a general solution is needed."
    },
    obj2: {
      question: "What is the graphical method for solving trig inequalities?",
      answer: "Graph the trigonometric function and the constant value on the same axes. The inequality is satisfied wherever the function's graph lies above (for >) or below (for <) the horizontal line. Read the solution intervals directly from the graph by identifying the intersection points and the regions that satisfy the condition."
    },
    obj3: {
      question: "How do you use the unit circle to solve trig inequalities?",
      answer: "On the unit circle, sinθ corresponds to the y-coordinate and cosθ to the x-coordinate. For an inequality like sinθ > 1/2, draw the horizontal line y = 1/2 and identify the arc where the circle lies above it. The angles corresponding to that arc form the solution. This method gives a geometric view of which angles satisfy the inequality."
    },
    obj4: {
      question: "How do you express trigonometric inequality solutions?",
      answer: "Solutions within one period are written as open or closed intervals depending on whether the inequality is strict (< or >) or non-strict (≤ or ≥). The general solution adds integer multiples of the period to each interval endpoint. Solutions are typically expressed in interval notation or set-builder notation."
    },
    obj5: {
      question: "What are compound trigonometric inequalities?",
      answer: "Compound trigonometric inequalities involve two bounds, such as -1/2 ≤ sinx ≤ √3/2. These are solved by finding the solution set for each individual inequality and then taking the intersection. The result is the set of angles where both conditions hold simultaneously, which can be read from the graph or unit circle."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Trigonometric Inequalities",
      "description": "Learn to solve trigonometric inequalities using graphs and the unit circle. Express solutions in interval notation and handle compound inequalities.",
      "url": "https://www.learnmathclass.com/trigonometry/inequalities",
      "inLanguage": "en-US",
      "learningResourceType": "Explanation",
      "educationalLevel": "High School, College",
      "educationalUse": "Learning",
      "audience": { "@type": "EducationalAudience", "educationalRole": "student" },
      "about": { "@type": "Thing", "name": "Trigonometric Inequalities" },
      "teaches": [
        "Solving basic trigonometric inequalities",
        "Using the graph of a trig function to identify solution intervals",
        "Using the unit circle to determine where functions are positive or negative",
        "Expressing solutions in interval notation",
        "Finding general solutions for periodic inequalities",
        "Solving compound trigonometric inequalities",
        "Connecting inequality solutions to equation boundary points",
        "Mapping inequality forms (basic, range-edge, compound, transformed, reciprocal) to their solution approaches"
      ],
      "keywords": keyWords.join(", "),
      "author": { "@type": "Organization", "name": "Learn Math Class" },
      "publisher": { "@type": "Organization", "name": "Learn Math Class" },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString()
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
        { "@type": "ListItem", "position": 2, "name": "Trigonometry", "item": "https://www.learnmathclass.com/trigonometry" },
        { "@type": "ListItem", "position": 3, "name": "Trigonometric Inequalities", "item": "https://www.learnmathclass.com/trigonometry/inequalities" }
      ]
    },
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": Object.keys(faqQuestions).map(key => ({
        "@type": "Question",
        "name": faqQuestions[key].question,
        "acceptedAnswer": { "@type": "Answer", "text": faqQuestions[key].answer }
      }))
    }
  }

    const sectionsContent={

    obj0: {
    title: `Key Terms`,
    content: `
- [Unit Circle](!/trigonometry/definitions#unit_circle) — geometric tool for reading solution intervals from coordinates
- [Reference Angle](!/trigonometry/definitions#reference_angle) — acute angle to the $x$-axis, used to locate boundary points
- [Periodic Function](!/trigonometry/definitions#periodic_function) — repeating behavior that extends solution sets across periods
- [Quadrantal Angles](!/trigonometry/definitions#quadrantal_angles) — boundary angles where some functions are undefined
- [Amplitude](!/trigonometry/definitions#amplitude) — controls the vertical range of transformed inequalities
- [Period](!/trigonometry/definitions#period) — determines how many solution intervals appear in a given domain`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Trigonometry Definitions](!/trigonometry/definitions) →@`,
    link: '',
  },

 obj1: {
    title: `Solutions as Intervals`,
    content: `The solution to a trigonometric inequality is fundamentally different from the solution to an equation. An equation like $\\sin(x) = \\frac{1}{2}$ produces isolated points: $x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$, plus their periodic repetitions. An inequality like $\\sin(x) > \\frac{1}{2}$ produces intervals: the entire stretch of angles between $\\frac{\\pi}{6}$ and $\\frac{5\\pi}{6}$ (exclusive), plus periodic repetitions.

This shift from points to intervals is a consequence of continuity. Since sine is continuous, if $\\sin(a) > \\frac{1}{2}$ and $\\sin(b) > \\frac{1}{2}$ and there is no point between $a$ and $b$ where $\\sin(x) = \\frac{1}{2}$, then $\\sin(x) > \\frac{1}{2}$ for every $x$ between $a$ and $b$. The boundary points — the solutions of the corresponding equation — are where the function crosses the threshold, and the intervals between them are where the inequality holds.

On a restricted interval like $[0, 2\\pi)$, the solution is a finite union of intervals. In general solution form, the pattern repeats: each interval shifts by $2\\pi$ (for sine, cosine, cosecant, secant) or $\\pi$ (for tangent, cotangent) to produce the complete solution set.

Strict inequalities ($>$, $<$) produce open intervals at the boundary points — the boundary is not included. Non-strict inequalities ($\\geq$, $\\leq$) produce closed intervals at boundary points — the boundary is included (provided the function is defined there). At vertical asymptotes, the interval is always open, since the function is undefined.

The two regimes — equation and inequality — contrast on every structural attribute that matters for how the solution is built and written, as the comparison below makes explicit.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The Graphical Method`,
    content: `The graphical method is the most intuitive approach to trigonometric inequalities. It reduces the problem to a visual reading.

**Step 1: Graph the function.** Sketch or visualize $y = \\sin(x)$ (or whichever function appears in the inequality) over the relevant interval. The key features — zeros, extrema, asymptotes, period — should be familiar from the study of [graphs](!/trigonometry/graphs).

**Step 2: Draw the boundary line.** Plot the horizontal line $y = a$, where $a$ is the value on the right side of the inequality.

**Step 3: Identify the intersection points.** These are the solutions of the corresponding equation ($\\sin(x) = a$), which can be found using the techniques from [equation solving](!/trigonometry/equations).

**Step 4: Read the solution intervals.** For $\\sin(x) > a$: the intervals where the curve lies above the horizontal line. For $\\sin(x) < a$: the intervals where the curve lies below.

**Example:** Solve $\\cos(x) > \\frac{1}{2}$ on $[0, 2\\pi)$.

The equation $\\cos(x) = \\frac{1}{2}$ has solutions $x = \\frac{\\pi}{3}$ and $x = \\frac{5\\pi}{3}$ on this interval. The cosine graph starts at $1$ (above $\\frac{1}{2}$), drops to $\\frac{1}{2}$ at $\\frac{\\pi}{3}$, continues below $\\frac{1}{2}$ through the middle of the interval, rises back to $\\frac{1}{2}$ at $\\frac{5\\pi}{3}$, and returns to $1$ at $2\\pi$. The curve is above the line $y = \\frac{1}{2}$ on:

$$x \\in \\left[0, \\frac{\\pi}{3}\\right) \\cup \\left(\\frac{5\\pi}{3}, 2\\pi\\right)$$

The endpoints $\\frac{\\pi}{3}$ and $\\frac{5\\pi}{3}$ are excluded because the inequality is strict ($>$, not $\\geq$). The endpoint $0$ is included because the interval $[0, 2\\pi)$ starts there and $\\cos(0) = 1 > \\frac{1}{2}$.

The graphical method is especially useful for transformed functions — $2\\sin(3x) - 1 > 0$ is harder to handle algebraically, but sketching the transformed graph and reading off the solution intervals is straightforward once the [transformations](!/trigonometry/graphs) are understood.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `The Unit Circle Method`,
    content: `The [unit circle](!/trigonometry/unit-circle) provides a geometric alternative to the graphical method, particularly effective for basic inequalities involving $\\sin(x)$ and $\\cos(x)$.

**For sine inequalities:** since $\\sin\\theta$ is the $y$-coordinate on the unit circle, the inequality $\\sin(x) > a$ asks: for which angles is the $y$-coordinate above the line $y = a$?

Draw the horizontal line $y = a$ across the unit circle. It intersects the circle at two points (assuming $|a| < 1$), dividing the circle into two arcs. The arc where points have $y$-coordinates above $a$ is the solution. Reading off the angles at the intersection points gives the interval boundaries.

**For cosine inequalities:** since $\\cos\\theta$ is the $x$-coordinate, the inequality $\\cos(x) > a$ asks: for which angles is the $x$-coordinate to the right of the vertical line $x = a$?

Draw the vertical line $x = a$ across the unit circle. The arc to the right of this line gives the solution.

**Example:** Solve $\\sin(x) \\geq \\frac{\\sqrt{2}}{2}$ on $[0, 2\\pi)$.

On the unit circle, the horizontal line $y = \\frac{\\sqrt{2}}{2}$ intersects the circle at angles $\\frac{\\pi}{4}$ and $\\frac{3\\pi}{4}$. The arc from $\\frac{\\pi}{4}$ to $\\frac{3\\pi}{4}$ (going counterclockwise through the top of the circle) lies above this line. Since the inequality includes equality ($\\geq$), the endpoints are included:

$$x \\in \\left[\\frac{\\pi}{4}, \\frac{3\\pi}{4}\\right]$$

**For tangent inequalities:** the unit circle method is less direct, since tangent does not correspond to a single coordinate. One approach is to interpret $\\tan\\theta$ as the slope of the terminal side and identify which slopes satisfy the inequality. Alternatively, convert to $\\frac{\\sin\\theta}{\\cos\\theta}$ and reason about the signs and magnitudes separately. In practice, the graphical method is often simpler for tangent inequalities.

Set side by side, the two methods differ less in what they yield than in what they require and where each is most direct.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Solving Sine Inequalities`,
    content: `The full procedure for solving $\\sin(x) > a$ (or $\\geq$, $<$, $\\leq$) combines the boundary equation with interval determination.

**Case $|a| < 1$:** The equation $\\sin(x) = a$ has two solutions per period: $x_1$ and $x_2 = \\pi - x_1$ (where $x_1 = \\arcsin(a)$). The sign of $a$ determines the quadrants. Within one period $[0, 2\\pi)$:

- $\\sin(x) > a$ when $a > 0$: the solution is $(x_1, x_2)$ — the arc where sine exceeds $a$, passing through the maximum.
- $\\sin(x) > a$ when $a < 0$: the solution is $[0, x_2) \\cup (x_1, 2\\pi)$ where $x_1 = \\pi - \\arcsin(a)$ and $x_2 = \\arcsin(a) + 2\\pi$ — the larger arc that includes the maximum. More carefully: the two boundary angles are $\\pi + |\\arcsin(a)|$ and $2\\pi - |\\arcsin(a)|$ (in Quadrants III and IV), and sine exceeds $a$ on the arc that does not pass through the minimum.

**Case $a = 1$:** $\\sin(x) \\geq 1$ is satisfied only at $x = \\frac{\\pi}{2} + 2n\\pi$ (a single point per period). $\\sin(x) > 1$ has no solution.

**Case $a = -1$:** $\\sin(x) \\leq -1$ is satisfied only at $x = \\frac{3\\pi}{2} + 2n\\pi$. $\\sin(x) < -1$ has no solution.

**Case $|a| > 1$:** $\\sin(x) > a$ when $a > 1$: no solution (sine never exceeds 1). $\\sin(x) > a$ when $a < -1$: all real numbers (sine is always greater than any value below $-1$).

These cases follow directly from the [boundedness](!/trigonometry/properties) of sine. Checking whether $a$ falls within $[-1, 1]$ before proceeding prevents unnecessary computation.

All positions of $a$ relative to the function&apos;s range — interior, edge, and outside — collect into the table below across all four inequality directions.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Solving Cosine and Tangent Inequalities`,
    content: `**Cosine inequalities** follow the same logic as sine, with the roles of the coordinates swapped. The equation $\\cos(x) = a$ (for $|a| < 1$) has solutions $x_1 = \\arccos(a)$ and $x_2 = 2\\pi - \\arccos(a)$ on $[0, 2\\pi)$. The key difference from sine: cosine is decreasing on $[0, \\pi]$ and increasing on $[\\pi, 2\\pi]$, so the shape of the solution interval is different.

- $\\cos(x) > a$ on $[0, 2\\pi)$: the arc where cosine exceeds $a$ is $[0, x_1) \\cup (x_2, 2\\pi)$ — the region near $\\theta = 0$ (and $2\\pi$), where the $x$-coordinate on the [unit circle](!/trigonometry/unit-circle) is large.
- $\\cos(x) < a$ on $[0, 2\\pi)$: the complementary arc $(x_1, x_2)$.

The boundary cases ($a = \\pm 1$, $|a| > 1$) parallel those for sine.

**Tangent inequalities** have a different structure because tangent has period $\\pi$, vertical asymptotes, and unbounded range. The equation $\\tan(x) = a$ has one solution per period: $x_0 = \\arctan(a)$. Within one period $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$:

- $\\tan(x) > a$: the interval $(x_0, \\frac{\\pi}{2})$ — from the boundary angle to the next asymptote.
- $\\tan(x) < a$: the interval $(-\\frac{\\pi}{2}, x_0)$ — from the asymptote to the boundary angle.

Since tangent is strictly increasing on each period interval, there is no ambiguity: the function is below $a$ to the left of $x_0$ and above $a$ to the right. The general solution adds $n\\pi$ to shift across periods.

The asymptotes must always be excluded from the solution, regardless of whether the inequality is strict or non-strict — tangent is undefined there.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Compound Inequalities`,
    content: `A compound trigonometric inequality imposes two simultaneous bounds. For example:

$$\\frac{1}{2} < \\sin(x) \\leq \\frac{\\sqrt{3}}{2}$$

This requires $\\sin(x) > \\frac{1}{2}$ and $\\sin(x) \\leq \\frac{\\sqrt{3}}{2}$ simultaneously.

**Step 1: Solve each inequality separately.**

$\\sin(x) > \\frac{1}{2}$ on $[0, 2\\pi)$: $x \\in \\left(\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right)$

$\\sin(x) \\leq \\frac{\\sqrt{3}}{2}$ on $[0, 2\\pi)$: $x \\in \\left[0, \\frac{\\pi}{3}\\right] \\cup \\left[\\frac{2\\pi}{3}, 2\\pi\\right)$

**Step 2: Intersect the solution sets.**

The intersection is the set of $x$ values that satisfy both conditions:

$$x \\in \\left(\\frac{\\pi}{6}, \\frac{\\pi}{3}\\right] \\cup \\left[\\frac{2\\pi}{3}, \\frac{5\\pi}{6}\\right)$$

Graphically, this corresponds to the region where the sine curve lies strictly above $y = \\frac{1}{2}$ and at or below $y = \\frac{\\sqrt{3}}{2}$ — the band between the two horizontal lines, with appropriate endpoint inclusion.

The unit circle interpretation is equally clear: identify the arcs satisfying each condition, then take their overlap. For the example above, the first condition selects the upper arc from $\\frac{\\pi}{6}$ to $\\frac{5\\pi}{6}$, and the second condition excludes the portion between $\\frac{\\pi}{3}$ and $\\frac{2\\pi}{3}$ (where sine exceeds $\\frac{\\sqrt{3}}{2}$). What remains is two symmetric segments flanking the excluded zone.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Inequalities Involving Transformed Functions`,
    content: `When the trigonometric function is transformed — $2\\sin(3x) - 1 > 0$, for instance — the inequality must be handled in stages.

**Step 1: Isolate the trigonometric expression.** Rearrange to place the function on one side:

$$2\\sin(3x) > 1 \\quad \\Rightarrow \\quad \\sin(3x) > \\frac{1}{2}$$

**Step 2: Solve for the inner argument.** Let $u = 3x$. The inequality $\\sin(u) > \\frac{1}{2}$ has the solution:

$$u \\in \\left(\\frac{\\pi}{6} + 2n\\pi, \\quad \\frac{5\\pi}{6} + 2n\\pi\\right)$$

**Step 3: Recover $x$.** Divide by 3:

$$x \\in \\left(\\frac{\\pi}{18} + \\frac{2n\\pi}{3}, \\quad \\frac{5\\pi}{18} + \\frac{2n\\pi}{3}\\right)$$

**Step 4: Restrict to the target interval.** On $[0, 2\\pi)$, substitute $n = 0, 1, 2$ (since the period of $\\sin(3x)$ is $\\frac{2\\pi}{3}$, three periods fit within $[0, 2\\pi)$):

- $n = 0$: $\\left(\\frac{\\pi}{18}, \\frac{5\\pi}{18}\\right)$
- $n = 1$: $\\left(\\frac{\\pi}{18} + \\frac{2\\pi}{3}, \\frac{5\\pi}{18} + \\frac{2\\pi}{3}\\right) = \\left(\\frac{13\\pi}{18}, \\frac{17\\pi}{18}\\right)$
- $n = 2$: $\\left(\\frac{\\pi}{18} + \\frac{4\\pi}{3}, \\frac{5\\pi}{18} + \\frac{4\\pi}{3}\\right) = \\left(\\frac{25\\pi}{18}, \\frac{29\\pi}{18}\\right)$

The multiplier in the argument multiplies the number of solution intervals within a fixed domain — the same phenomenon seen in [multiple-angle equations](!/trigonometry/equations). A coefficient of $B$ in $\\sin(Bx)$ creates $B$ copies of the basic solution pattern within one $2\\pi$ interval.

Vertical shifts ($+D$) and amplitude changes ($A$) affect the threshold value after isolation. Phase shifts ($-C$) offset the interval boundaries. But the core method remains the same: isolate, solve for the inner argument, recover the outer variable, and restrict to the domain.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Domain Considerations for Reciprocal and Quotient Functions`,
    content: `Inequalities involving tangent, cotangent, secant, or cosecant require attention to the domains of these functions — specifically, the vertical asymptotes where they are undefined.

**Example:** Solve $\\sec(x) \\geq 2$ on $[0, 2\\pi)$.

Rewrite using the reciprocal: $\\frac{1}{\\cos(x)} \\geq 2$. This requires two conditions simultaneously:

1. $\\cos(x) > 0$ (secant is positive only when cosine is positive)
2. $\\cos(x) \\leq \\frac{1}{2}$ (taking the reciprocal of both sides reverses the inequality, since $\\cos(x) > 0$)

The intersection of $\\cos(x) > 0$ and $\\cos(x) \\leq \\frac{1}{2}$ on $[0, 2\\pi)$:

$\\cos(x) > 0$ on $\\left[0, \\frac{\\pi}{2}\\right) \\cup \\left(\\frac{3\\pi}{2}, 2\\pi\\right)$

$\\cos(x) \\leq \\frac{1}{2}$ on $\\left[\\frac{\\pi}{3}, \\frac{5\\pi}{3}\\right]$

Intersection: $\\left[\\frac{\\pi}{3}, \\frac{\\pi}{2}\\right) \\cup \\left(\\frac{3\\pi}{2}, \\frac{5\\pi}{3}\\right]$

The points $x = \\frac{\\pi}{2}$ and $x = \\frac{3\\pi}{2}$ are excluded because secant is undefined there (vertical asymptotes on the [graph](!/trigonometry/graphs)).

The reversal of the inequality direction when taking the reciprocal deserves emphasis. If $\\cos(x) > 0$ and $\\frac{1}{\\cos(x)} \\geq 2$, then $\\cos(x) \\leq \\frac{1}{2}$. If $\\cos(x) < 0$ and $\\frac{1}{\\cos(x)} \\geq 2$, there is no solution — a negative reciprocal cannot exceed 2. This case analysis — splitting based on the sign of the denominator — is essential for all inequalities involving reciprocal or quotient [functions](!/trigonometry/functions).`,
    before: ``,
    after: ``,
    link: ``,
  },

    // NEW capstone section
    obj9:{
      title:`Summary of Inequality Forms and Their Solution Approaches`,
      content:`Trigonometric inequalities split into a handful of recognizable forms, each with its own first move and characteristic solution structure. The table below maps every form discussed above to the starting step, the shape of its solution set, and the period over which the pattern repeats.`,
      before:``,
      after:``,
      link:'',

    },
    obj10:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',

    },
    obj11:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',

    },
    obj12:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',

    },
    obj13:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',

    },
    obj14:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',

    },


    obj15:{

      title:``,
      content:``,
      before:``,
      after:``,
      link:'',

    }

  }


  const introContent = {
  id: "intro",
   title: `Finding Intervals Where Trigonometric Conditions Hold`,
  content: `A trigonometric [equation](!/trigonometry/equations) asks: at which angles does a function hit a specific value? A trigonometric inequality asks a broader question: over which intervals does a function stay above, below, or between given bounds? The answer is not a set of isolated angles but a union of intervals — continuous stretches of the real line where the condition is satisfied. And because the trigonometric functions are periodic, these intervals repeat.

Two methods dominate. The graphical approach plots the function and a horizontal boundary line, then reads off the regions where the curve lies on the correct side. The [unit circle](!/trigonometry/unit-circle) approach identifies the boundary angles (the solutions of the corresponding equation) and determines which arc of the circle satisfies the inequality by examining the sign of the function along that arc. Both methods yield the same result; the choice depends on whether a visual or geometric perspective is more natural for the problem at hand. In either case, the underlying logic draws on the same [properties](!/trigonometry/properties) — periodicity, boundedness, continuity — and the same evaluation skills used in equation solving.`,
};




   return {
      props:{
         sectionsContent,
         introContent,
         obj1Table,
         obj3Table,
         obj4Table,
         summaryTable,
         faqQuestions,
         schemas,
          seoData: {
        title: "Trigonometric Inequalities | Learn Math Class",
        description: "Master trigonometric inequalities: solve using graphs and the unit circle, express solutions in interval notation, and handle compound inequalities.",
        keywords: keyWords.join(", "),
        url: "/trigonometry/inequalities",
         name: "Trigonometric Inequalities"
      },

       }
    }
   }

export default function InequalitiesPage({
  seoData,
  sectionsContent,
  introContent,
  obj1Table,
  obj3Table,
  obj4Table,
  summaryTable,
  faqQuestions,
  schemas,
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
          <div key={'obj1-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj1Table }} />,
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
          <div key={'obj3-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj3Table }} />,
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
        ]
    },
    // NEW capstone section: obj9
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Trigonometric Inequalities</h1>
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