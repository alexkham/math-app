import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../pages.css'
import Head from 'next/head'


export async function getStaticProps(){

  const keyWords=[
    'function transformations',
    'graph transformations',
    'vertical shift',
    'horizontal shift',
    'reflection over x-axis',
    'vertical stretch compression',
    'horizontal stretch compression',
    'parent functions',
    'transformation rules',
    'combining transformations',
    'order of transformations',
    'writing equations from graphs',
    'effect on domain and range',
    'graphing transformed functions',
  ]

  // •

//   • First item
// • Second item


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

  //   const sectionsContent={

  //   obj1:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',


  //   },
  //   obj2:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',

  //   },

  //   obj3:{

  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',

  //   },
  //   obj4:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',

  //   },
  //   obj5:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',

  //   },
  //   obj6:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',

  //   },
  //   obj7:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',

  //   },
  //   obj8:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',

  //   },
  //   obj9:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',

  //   },
  //   obj10:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',

  //   },
  //   obj11:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',

  //   },
  //   obj12:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',

  //   },
  //   obj13:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  //     link:'',

  //   },
  //   obj14:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  //     link:'',

  //   },


  //   obj15:{

  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',

  //   }

  // }


  const sectionsContent = {

  obj1: {

    title: `Parent Functions`,

    content: `A parent function is the simplest function representing a [family](!/functions/families). It captures the essential shape without any shifts, stretches, or reflections.

Common parent functions include:

Linear: $f(x) = x$ — a straight line through the origin with slope $1$.

Quadratic: $f(x) = x^2$ — a parabola with vertex at the origin, opening upward.

Cubic: $f(x) = x^3$ — an S-curve passing through the origin with point symmetry.

Absolute value: $f(x) = |x|$ — a V-shape with vertex at the origin.

Square root: $f(x) = \\sqrt{x}$ — a half-curve starting at the origin, rising and flattening.

Reciprocal: $f(x) = 1/x$ — a hyperbola with branches in opposite quadrants.

Exponential: $f(x) = e^x$ or $f(x) = 2^x$ — a curve rising rapidly to the right, approaching zero to the left.

Each parent has characteristic [domain](!/functions/domain), [range](!/functions/range), symmetry, and shape. Transformations modify these features systematically. Knowing the parent means knowing what to expect from its transformed offspring.`,

    before: ``,

    after: ``,

    link: '',

  },

  obj2: {

    title: `Transformations Overview`,

    content: `Transformations alter a function's graph in predictable ways. Four basic types cover most modifications:

Translation shifts the graph horizontally or vertically without changing its shape or orientation.

Reflection flips the graph across an axis, reversing its orientation.

Stretch pulls the graph away from an axis, making it taller or wider.

Compression pushes the graph toward an axis, making it shorter or narrower.

These transformations arise from modifying the function's equation. Changes outside the function — operations applied to $f(x)$ — produce vertical effects. Changes inside the function — operations applied to $x$ — produce horizontal effects.

The general transformed function takes the form:

$$g(x) = a \\cdot f(b(x - h)) + k$$

Here $a$ controls vertical stretch and reflection, $b$ controls horizontal stretch and reflection, $h$ controls horizontal shift, and $k$ controls vertical shift. Understanding each parameter's effect enables both graphing from equations and writing equations from graphs.`,

    before: ``,

    after: ``,

    link: '',

  },

  obj3: {

    title: `Vertical Translations`,

    content: `A vertical translation shifts the graph up or down. Every point moves the same vertical distance; the shape remains unchanged.

The transformation $g(x) = f(x) + k$ shifts the graph of $f$ vertically:

When $k > 0$, the graph shifts up by $k$ units.

When $k < 0$, the graph shifts down by $|k|$ units.

For $f(x) = x^2$, the function $g(x) = x^2 + 3$ shifts the parabola up $3$ units. The vertex moves from $(0, 0)$ to $(0, 3)$.

For $f(x) = \\sqrt{x}$, the function $g(x) = \\sqrt{x} - 2$ shifts the curve down $2$ units. The starting point moves from $(0, 0)$ to $(0, -2)$.

Vertical translation affects the [range](!/functions/range) directly. If $f$ has range $[0, \\infty)$, then $f(x) + k$ has range $[k, \\infty)$. The [domain](!/functions/domain) is unchanged — shifting up or down does not affect which inputs are valid.

The $y$-intercept shifts by $k$: if $f(0) = c$, then $g(0) = c + k$. The $x$-intercepts shift to new locations determined by solving $f(x) + k = 0$.`,

    before: ``,

    after: ``,

    link: '',

  },

  obj4: {

    title: `Horizontal Translations`,

    content: `A horizontal translation shifts the graph left or right. Every point moves the same horizontal distance; the shape remains unchanged.

The transformation $g(x) = f(x - h)$ shifts the graph of $f$ horizontally:

When $h > 0$, the graph shifts right by $h$ units.

When $h < 0$, the graph shifts left by $|h|$ units.

The direction is counterintuitive. Subtracting $h$ inside the function moves the graph in the positive direction. This happens because $f(x - h) = f(x)$ requires $x$ to be $h$ units larger to produce the same output.

For $f(x) = x^2$, the function $g(x) = (x - 3)^2$ shifts the parabola right $3$ units. The vertex moves from $(0, 0)$ to $(3, 0)$.

For $f(x) = |x|$, the function $g(x) = |x + 2|$ shifts the V-shape left $2$ units (since $x + 2 = x - (-2)$, so $h = -2$). The vertex moves from $(0, 0)$ to $(-2, 0)$.

Horizontal translation affects the [domain](!/functions/domain) directly. If $f$ has domain $[0, \\infty)$, then $f(x - h)$ has domain $[h, \\infty)$. The [range](!/functions/range) is unchanged.`,

    before: ``,

    after: ``,

    link: '',

  },

  obj5: {

    title: `Vertical Reflections`,

    content: `A vertical reflection flips the graph across the $x$-axis. Points above the axis move below; points below move above.

The transformation $g(x) = -f(x)$ reflects the graph of $f$ vertically. Each output is negated: where $f$ produced $y$, the reflected function produces $-y$.

For $f(x) = x^2$, the function $g(x) = -x^2$ reflects the parabola across the $x$-axis. The original opens upward with vertex at the minimum; the reflection opens downward with vertex at the maximum.

For $f(x) = \\sqrt{x}$, the function $g(x) = -\\sqrt{x}$ reflects the half-curve below the axis. The original has range $[0, \\infty)$; the reflection has range $(-\\infty, 0]$.

Vertical reflection transforms the [range](!/functions/range). If $f$ has range $[a, b]$, then $-f$ has range $[-b, -a]$. The [domain](!/functions/domain) is unchanged.

Peaks become valleys and valleys become peaks. An [increasing](!/functions/properties) function becomes decreasing, and vice versa. The $x$-intercepts stay fixed — if $f(c) = 0$, then $-f(c) = 0$ as well.`,

    before: ``,

    after: ``,

    link: '',

  },

  obj6: {

    title: `Horizontal Reflections`,

    content: `A horizontal reflection flips the graph across the $y$-axis. Points on the right move to the left; points on the left move to the right.

The transformation $g(x) = f(-x)$ reflects the graph of $f$ horizontally. Each input is negated before the function acts: the output at $x$ equals the original output at $-x$.

For $f(x) = \\sqrt{x}$, the function $g(x) = \\sqrt{-x}$ reflects the half-curve across the $y$-axis. The original exists for $x \\geq 0$; the reflection exists for $x \\leq 0$.

For $f(x) = e^x$, the function $g(x) = e^{-x}$ reflects the exponential curve. The original rises to the right and decays to the left; the reflection rises to the left and decays to the right.

Horizontal reflection transforms the [domain](!/functions/domain). If $f$ has domain $[a, b]$, then $f(-x)$ has domain $[-b, -a]$. The [range](!/functions/range) is unchanged.

The $y$-intercept stays fixed — $f(0) = f(-0)$. The $x$-intercepts reflect: if $f(c) = 0$, then $f(-x) = 0$ at $x = -c$.`,

    before: ``,

    after: ``,

    link: '',

  },

  obj7: {

    title: `Vertical Stretch and Compression`,

    content: `A vertical stretch or compression changes the height of the graph. The $x$-coordinates stay fixed while $y$-coordinates scale.

The transformation $g(x) = a \\cdot f(x)$ scales the graph vertically:

When $|a| > 1$, the graph stretches vertically — it becomes taller.

When $0 < |a| < 1$, the graph compresses vertically, becoming shorter.

When $a < 0$, a reflection across the $x$-axis also occurs.

For $f(x) = x^2$, the function $g(x) = 3x^2$ stretches the parabola vertically by a factor of $3$. Points move three times as far from the $x$-axis. The parabola appears narrower.

For $f(x) = \\sin(x)$, the function $g(x) = \\frac{1}{2}\\sin(x)$ compresses the wave vertically. The amplitude decreases from $1$ to $\\frac{1}{2}$.

Vertical scaling affects the [range](!/functions/range). If $f$ has range $[m, M]$, then $a \\cdot f$ has range $[am, aM]$ when $a > 0$, or $[aM, am]$ when $a < 0$.

The $x$-intercepts remain fixed — scaling zero still yields zero. The $y$-intercept scales: if $f(0) = c$, then $g(0) = ac$.`,

    before: ``,

    after: ``,

    link: '',

  },

  obj8: {

    title: `Horizontal Stretch and Compression`,

    content: `A horizontal stretch or compression changes the width of the graph. The $y$-coordinates stay fixed while $x$-coordinates scale.

The transformation $g(x) = f(bx)$ scales the graph horizontally:

When $|b| > 1$, the graph compresses horizontally — it becomes narrower.

When $0 < |b| < 1$, the graph stretches horizontally, becoming wider.

When $b < 0$, a reflection across the $y$-axis also occurs.

The effect is counterintuitive: multiplying $x$ by a number greater than $1$ makes the graph narrower, not wider. This happens because larger $b$ means reaching the same output values at smaller $x$ values.

For $f(x) = x^2$, the function $g(x) = (2x)^2 = 4x^2$ compresses the parabola horizontally by a factor of $2$. Points at $x = 1$ and $x = -1$ now achieve the heights that $f$ achieved at $x = 2$ and $x = -2$.

For $f(x) = \\sin(x)$, the function $g(x) = \\sin(2x)$ compresses the wave horizontally. The period changes from $2\\pi$ to $\\pi$ — the wave completes twice as fast.

Horizontal scaling affects the [domain](!/functions/domain). If $f$ has domain $[a, b]$, then $f(bx)$ has domain $[a/b, b/b] = [a/b, 1]$ when $b > 0$.`,

    before: ``,

    after: ``,

    link: '',

  },

  obj9: {

    title: `Combining Transformations`,

    content: `Multiple transformations can act together. The general form

$$g(x) = a \\cdot f(b(x - h)) + k$$

combines all four types:

$h$: horizontal shift (right if positive, left if negative)

$k$: vertical shift (up if positive, down if negative)

$a$: vertical stretch ($|a| > 1$), compression ($0 < |a| < 1$), and reflection ($a < 0$)

$b$: horizontal compression ($|b| > 1$), stretch ($0 < |b| < 1$), and reflection ($b < 0$)

For example, $g(x) = -2(x + 3)^2 + 5$ transforms the parent $f(x) = x^2$:

Shift left $3$ units (since $x + 3 = x - (-3)$, so $h = -3$)

Stretch vertically by factor $2$

Reflect across the $x$-axis (negative coefficient)

Shift up $5$ units

The vertex moves from $(0, 0)$ to $(-3, 5)$, and the parabola opens downward.`,

    before: ``,

    after: ``,

    link: '',

  },

  obj10: {

    title: `Order of Transformations`,

    content: `When applying multiple transformations, order matters. Different sequences can produce different results.

One systematic approach applies transformations inside-out:

First, apply horizontal transformations in the order they appear when reading from the variable outward: shift by $h$, then scale by $1/b$.

Then, apply vertical transformations in the order they appear when reading outward from the function: scale by $a$, then shift by $k$.

For $g(x) = 3f(2(x - 1)) + 4$:

Start with parent $f$

Shift right $1$ (horizontal, inside)

Compress horizontally by factor $2$ (horizontal, inside)

Stretch vertically by factor $3$ (vertical, outside)

Shift up $4$ (vertical, outside)

An alternative approach tracks key points. Identify a reference point on the parent — say, the vertex of a parabola — and apply each transformation to that point's coordinates. The final coordinates locate the transformed point.

Both approaches yield the same result when done correctly. Choose the method that makes the most sense for the given problem.`,

    before: ``,

    after: ``,

    link: '',

  },

  obj11: {

    title: `Writing Equations from Transformed Graphs`,

    content: `Given a transformed [graph](!/functions/graphs), the goal is to identify the parent function and the transformations applied, then write the equation.

Step 1: Identify the parent function from the overall shape. Parabola suggests $x^2$; V-shape suggests $|x|$; S-curve suggests $x^3$; half-curve suggests $\\sqrt{x}$.

Step 2: Locate key reference points on the transformed graph. For a parabola, find the vertex. For absolute value, find the vertex. For square root, find the starting point.

Step 3: Compare to the parent. The vertex of $y = x^2$ is at $(0, 0)$. If the transformed vertex is at $(3, -2)$, the graph has shifted right $3$ and down $2$.

Step 4: Determine vertical scaling and reflection. Compare the steepness or amplitude to the parent. If the graph is twice as steep, $|a| = 2$. If it opens in the opposite direction, $a$ is negative.

Step 5: Write the equation. For a parabola with vertex $(3, -2)$ opening downward with steepness $2$:

$$y = -2(x - 3)^2 - 2$$

Step 6: Verify by checking a point. Substitute another visible point into the equation and confirm equality.`,

    before: ``,

    after: ``,

    link: '',

  },

  obj12: {

    title: `Effect on Domain and Range`,

    content: `Each transformation type affects [domain](!/functions/domain) and [range](!/functions/range) in predictable ways.

Vertical translations shift the range. If $f$ has range $[a, b]$, then $f(x) + k$ has range $[a + k, b + k]$. The domain is unchanged.

Horizontal translations shift the domain. If $f$ has domain $[a, b]$, then $f(x - h)$ has domain $[a + h, b + h]$. The range is unchanged.

Vertical scaling multiplies the range. If $f$ has range $[a, b]$, then $c \\cdot f(x)$ has range $[ca, cb]$ when $c > 0$, or $[cb, ca]$ when $c < 0$. The domain is unchanged.

Horizontal scaling divides the domain. If $f$ has domain $[a, b]$, then $f(cx)$ has domain $[a/c, b/c]$ when $c > 0$, or $[b/c, a/c]$ when $c < 0$. The range is unchanged.

Vertical reflection negates the range. Horizontal reflection negates the domain.

Tracking these effects ensures the transformed function is described correctly. The domain and range of $g(x) = 2\\sqrt{x - 3} + 1$ follow from the parent $f(x) = \\sqrt{x}$ with domain $[0, \\infty)$ and range $[0, \\infty)$: shift domain to $[3, \\infty)$, then range becomes $[0, \\infty)$ scaled to $[0, \\infty)$, then shifted to $[1, \\infty)$.`,

    before: ``,

    after: ``,

    link: '',

  },

  obj13: {

    title: `Effect on Key Features`,

    content: `Transformations move and modify all key features of a graph systematically.

Intercepts transform with the graph. The $y$-intercept $f(0)$ moves to $a \\cdot f(-bh) + k$. Each $x$-intercept $c$ moves to $(c/b) + h$ — shifted and scaled horizontally.

Vertices, maxima, and minima move according to both shifts and scalings. The vertex of $f(x) = x^2$ at $(0, 0)$ moves to $(h, k)$ in $a(x - h)^2 + k$. If $a < 0$, a minimum becomes a maximum.

Asymptotes shift with translations. A horizontal asymptote at $y = L$ becomes $y = aL + k$. A vertical asymptote at $x = c$ becomes $x = (c/b) + h$.

Symmetry can be preserved or destroyed. Translating an even function horizontally off-center removes its $y$-axis symmetry. Reflecting an odd function vertically preserves origin symmetry; translating it does not.

Periodicity scales with horizontal transformations. A function with period $p$ becomes a function with period $p/|b|$ under $f(bx)$. Amplitude scales with vertical transformations.

Tracking these features during transformation confirms that the algebraic and geometric descriptions match.`,

    before: ``,

    after: ``,

    link: '',

  },

}

 const introContent = {
  id: "intro",
  title: "Reshaping Functions",
  content: `Every function family has a simplest member — a parent function that captures the essential shape. The parabola $y = x^2$. The absolute value $y = |x|$. The square root $y = \\sqrt{x}$. From each parent, an infinite variety of related functions emerges through transformations: shifts that move the graph, stretches that change its scale, reflections that flip its orientation.

Transformations connect algebra to geometry. A change in the equation produces a predictable change in the [graph](!/functions/graphs). Knowing how each transformation works allows sketching complex functions quickly and writing equations from visual information.`
}




  const faqQuestions = {
    q1: {
      question: "What is a function transformation in math?",
      answer: "A function transformation is a change applied to a parent function that shifts, stretches, compresses, or reflects its graph in a predictable way. The general transformed function takes the form g(x) = a · f(b(x − h)) + k, where each parameter controls a specific type of transformation. Understanding transformations connects algebraic changes in an equation to geometric changes in the graph."
    },
    q2: {
      question: "What is the difference between a vertical shift and a horizontal shift?",
      answer: "A vertical shift moves the graph up or down by adding a constant k to the function: g(x) = f(x) + k. A horizontal shift moves the graph left or right by replacing x with x − h inside the function: g(x) = f(x − h). Horizontal shifts are counterintuitive — subtracting h inside moves the graph to the right, while adding moves it to the left."
    },
    q3: {
      question: "How does a reflection over the x-axis differ from a reflection over the y-axis?",
      answer: "A reflection over the x-axis is produced by negating the output: g(x) = −f(x). Every y-value is negated, flipping the graph vertically so peaks become valleys. A reflection over the y-axis is produced by negating the input: g(x) = f(−x). Every x-value is negated, flipping the graph horizontally so the left and right sides swap."
    },
    q4: {
      question: "What is the order of transformations when graphing a function?",
      answer: "When applying multiple transformations to g(x) = a · f(b(x − h)) + k, apply horizontal transformations first — shift by h, then scale by 1/b — and then apply vertical transformations — scale by a, then shift by k. An alternative approach tracks key reference points through each transformation step by step. Both methods yield the same result when applied consistently."
    },
    q5: {
      question: "How do you write an equation from a transformed graph?",
      answer: "Start by identifying the parent function from the overall shape of the graph — a parabola suggests x², a V-shape suggests |x|, and a half-curve suggests √x. Locate key reference points such as the vertex or starting point, compare their position to the parent to determine the shifts h and k, then assess the steepness and direction to find a. Finally, write the equation and verify by substituting a visible point."
    }
  }

  const seoData = {
    title: "Function Transformations: Shifts, Reflections & Stretches",
    description: "Learn function transformations including vertical and horizontal shifts, reflections, stretches, and compressions. Master graphing techniques and writing equations from graphs.",
    keywords: keyWords.join(", "),
    url: "/functions/transformations",
    name: "Function Transformations"
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": seoData.name,
      "description": seoData.description,
      "url": `https://www.learnmathclass.com${seoData.url}`,
      "inLanguage": "en-US",
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class",
        "url": "https://www.learnmathclass.com"
      },
      "teaches": [
        "How parent functions serve as the foundation for all graph transformations",
        "Applying vertical and horizontal shifts to move graphs up, down, left, and right",
        "Reflecting functions across the x-axis and y-axis",
        "Stretching and compressing graphs vertically and horizontally using scale factors",
        "Combining multiple transformations using the general form g(x) = a·f(b(x−h))+k",
        "Writing equations from transformed graphs by identifying key features and parameters"
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
        }
      ]
    }
  }

   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
          seoData: {
        title: "Function Transformations: Shifts, Reflections & Stretches",
        description: "Learn function transformations including vertical and horizontal shifts, reflections, stretches, and compressions. Master graphing techniques and writing equations from graphs.",
        keywords: keyWords.join(", "),
        url: "/functions/transformations",
         name: "Function Transformations"
      },
       }
    }
   }

export default function TransformationsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Transformations</h1>
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
