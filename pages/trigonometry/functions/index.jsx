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
    'trigonometric functions',
    'sine function',
    'cosine function',
    'tangent function',
    'cosecant function',
    'secant function',
    'cotangent function',
    'reciprocal trig identities',
    'quotient identities trigonometry',
    'domain and range trig functions',
    'evaluating trig functions',
    'unit circle trig values',
    'finding all six trig values',
    'odd even trig functions'
  ]

  const faqQuestions = {
    obj1: {
      question: "What are the six trigonometric functions?",
      answer: "The six trigonometric functions are sine, cosine, tangent, cosecant, secant, and cotangent. Sine and cosine are the fundamental pair, defined as the y-coordinate and x-coordinate of a point on the unit circle. Tangent is the ratio sin/cos. Cosecant, secant, and cotangent are the reciprocals of sine, cosine, and tangent respectively."
    },
    obj2: {
      question: "What is the domain and range of sine and cosine?",
      answer: "Both sine and cosine have a domain of all real numbers and a range of [-1, 1]. Every real number corresponds to a position on the unit circle, so both functions are defined everywhere. Their outputs are bounded because coordinates on a unit circle never exceed 1 or fall below -1."
    },
    obj3: {
      question: "How do you evaluate a trigonometric function at any angle?",
      answer: "Follow four steps: reduce the angle to a standard range using coterminal angles, identify which quadrant the angle is in, find the reference angle (the acute angle to the x-axis), then evaluate the function at the reference angle and apply the correct sign based on the quadrant."
    },
    obj4: {
      question: "What are the reciprocal and quotient relationships?",
      answer: "The reciprocal relationships are csc θ = 1/sin θ, sec θ = 1/cos θ, and cot θ = 1/tan θ. The quotient relationships are tan θ = sin θ/cos θ and cot θ = cos θ/sin θ. These allow any trigonometric expression to be rewritten in terms of sine and cosine alone."
    },
    obj5: {
      question: "How do you find all six trig values from one known value?",
      answer: "Given one trig function value and the quadrant, use the Pythagorean identity cos²θ + sin²θ = 1 to find the missing sine or cosine. The quadrant determines the sign. Once sine and cosine are known, the remaining four functions follow from the reciprocal and quotient relationships."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Trigonometric Functions",
      "description": "Learn all six trigonometric functions — sine, cosine, tangent, cosecant, secant, and cotangent — with domain, range, and methods for evaluating at any angle.",
      "url": "https://www.learnmathclass.com/trigonometry/functions",
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
        "name": "Trigonometric Functions"
      },
      "teaches": [
        "Sine and cosine as unit circle coordinates",
        "Tangent as the ratio of sine to cosine and as slope",
        "Cosecant, secant, and cotangent as reciprocal functions",
        "Reciprocal and quotient relationships connecting all six functions",
        "Domain and range of each trigonometric function",
        "Evaluating trigonometric functions at any angle using reference angles",
        "Finding all six function values from one known value and the quadrant"
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
          "name": "Trigonometry",
          "item": "https://www.learnmathclass.com/trigonometry"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Trigonometric Functions",
          "item": "https://www.learnmathclass.com/trigonometry/functions"
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

    const sectionsContent={

    // obj1:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',


    // },
    // obj2:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',

    // },

    // obj3:{

    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',

    // },
    // obj4:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',

    // },
    // obj5:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',

    // },
    // obj6:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',

    // },
    // obj7:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',

    // },
    // obj8:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',

    // },
    // obj9:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',

    // },
    // obj10:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',

    // },

     obj1: {
    title: `The Sine Function`,
    content: `The sine function assigns to each real number $\\theta$ the $y$-coordinate of the corresponding point on the [unit circle](!/trigonometry/unit-circle):

$$\\sin(\\theta) = y\\text{-coordinate of the point at angle }\\theta$$

Its domain is the entire real line — every real number corresponds to a position on the unit circle, so $\\sin(\\theta)$ is defined for all $\\theta \\in (-\\infty, \\infty)$. Its range is the closed interval $[-1, 1]$, since the $y$-coordinate of a point on a unit circle can never exceed 1 or fall below $-1$.

The function equals zero whenever the terminal side of $\\theta$ lies on the $x$-axis — that is, at $\\theta = n\\pi$ for every integer $n$: $\\ldots, -2\\pi, -\\pi, 0, \\pi, 2\\pi, \\ldots$. It reaches its maximum value of $1$ at $\\theta = \\frac{\\pi}{2} + 2n\\pi$ (the top of the circle) and its minimum value of $-1$ at $\\theta = \\frac{3\\pi}{2} + 2n\\pi$ (the bottom of the circle).

Sine is periodic with period $2\\pi$: $\\sin(\\theta + 2\\pi) = \\sin(\\theta)$ for all $\\theta$. It is an odd function: $\\sin(-\\theta) = -\\sin(\\theta)$, which means its [graph](!/trigonometry/graphs) is symmetric about the origin. On the interval $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, sine is strictly increasing — a fact that becomes essential when defining the [inverse sine function](!/trigonometry/inverse-functions).

Because the sine function is continuous, bounded, periodic, and smooth, it serves as the prototype for modeling any oscillating quantity. The general sinusoidal model $y = A\\sin(Bx - C) + D$ modifies amplitude, period, phase, and baseline, but the underlying behavior is always that of the sine function on the unit circle.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The Cosine Function`,
    content: `The cosine function assigns to each real number $\\theta$ the $x$-coordinate of the corresponding point on the [unit circle](!/trigonometry/unit-circle):

$$\\cos(\\theta) = x\\text{-coordinate of the point at angle }\\theta$$

Its domain is the entire real line, and its range is $[-1, 1]$ — identical to sine in both respects. The function equals zero whenever the terminal side lies on the $y$-axis: at $\\theta = \\frac{\\pi}{2} + n\\pi$ for every integer $n$. It reaches its maximum of $1$ at $\\theta = 2n\\pi$ (the rightmost point of the circle) and its minimum of $-1$ at $\\theta = \\pi + 2n\\pi$ (the leftmost point).

Cosine is periodic with the same period as sine: $\\cos(\\theta + 2\\pi) = \\cos(\\theta)$. Unlike sine, cosine is an even function: $\\cos(-\\theta) = \\cos(\\theta)$. Geometrically, this follows from the unit circle — reflecting an angle across the $x$-axis negates the $y$-coordinate but preserves the $x$-coordinate. On the [graph](!/trigonometry/graphs), evenness manifests as symmetry about the $y$-axis.

On the interval $[0, \\pi]$, cosine is strictly decreasing — running from $\\cos(0) = 1$ down to $\\cos(\\pi) = -1$. This monotonic interval is the one used to define the [inverse cosine function](!/trigonometry/inverse-functions).

The relationship between sine and cosine is captured by a phase shift: $\\cos(\\theta) = \\sin\\left(\\theta + \\frac{\\pi}{2}\\right)$. The cosine wave is the sine wave translated $\\frac{\\pi}{2}$ units to the left. This is not a coincidence — it reflects the geometric fact that the $x$-coordinate at angle $\\theta$ equals the $y$-coordinate at angle $\\theta + \\frac{\\pi}{2}$ (a quarter rotation ahead on the circle). Equivalently, the cofunction identity $\\cos(\\theta) = \\sin\\left(\\frac{\\pi}{2} - \\theta\\right)$ from [right triangle trigonometry](!/trigonometry/right-triangle) extends to all angles through the unit circle.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `The Tangent Function`,
    content: `Tangent is defined as the ratio of sine to cosine:

$$\\tan(\\theta) = \\frac{\\sin(\\theta)}{\\cos(\\theta)} = \\frac{y}{x}$$

where $(x, y)$ is the point on the [unit circle](!/trigonometry/unit-circle) at angle $\\theta$. This ratio is undefined whenever $\\cos(\\theta) = 0$ — that is, at $\\theta = \\frac{\\pi}{2} + n\\pi$ for every integer $n$. These are precisely the angles where the terminal side is vertical (lying along the $y$-axis), and the $x$-coordinate is zero.

The domain of tangent is all real numbers except the odd multiples of $\\frac{\\pi}{2}$:

$$\\theta \\neq \\frac{\\pi}{2} + n\\pi, \\quad n \\in \\mathbb{Z}$$

The range, by contrast, is the entire real line $(-\\infty, \\infty)$. As $\\theta$ approaches an excluded value, $\\cos(\\theta)$ approaches zero while $\\sin(\\theta)$ approaches $\\pm 1$, driving the ratio toward $+\\infty$ or $-\\infty$. On the [graph](!/trigonometry/graphs), these excluded points correspond to vertical asymptotes.

Tangent is periodic with period $\\pi$ — half the period of sine and cosine. This shorter period arises because $\\tan(\\theta + \\pi) = \\frac{\\sin(\\theta + \\pi)}{\\cos(\\theta + \\pi)} = \\frac{-\\sin\\theta}{-\\cos\\theta} = \\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$. A half rotation negates both coordinates, but their ratio is unchanged.

Tangent is an odd function: $\\tan(-\\theta) = -\\tan(\\theta)$. On the interval $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ — a single period — tangent is strictly increasing, running from $-\\infty$ to $+\\infty$. This is the interval used to define the [inverse tangent function](!/trigonometry/inverse-functions).

Geometrically, $\\tan(\\theta)$ measures the slope of the terminal side of $\\theta$. A line from the origin to $(\\cos\\theta, \\sin\\theta)$ has slope $\\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$. This interpretation connects trigonometry to coordinate geometry and explains why tangent is undefined for vertical lines (slope is undefined when the run is zero).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `The Cosecant Function`,
    content: `Cosecant is the reciprocal of sine:

$$\\csc(\\theta) = \\frac{1}{\\sin(\\theta)}$$

It is defined wherever $\\sin(\\theta) \\neq 0$ — that is, for all $\\theta$ except integer multiples of $\\pi$: $\\theta \\neq n\\pi$, $n \\in \\mathbb{Z}$. At these excluded points (where the terminal side lies on the $x$-axis and $\\sin\\theta = 0$), cosecant is undefined, and the [graph](!/trigonometry/graphs) has vertical asymptotes.

The range of cosecant is $(-\\infty, -1] \\cup [1, \\infty)$. Since $|\\sin\\theta| \\leq 1$, the reciprocal $|\\csc\\theta| = \\frac{1}{|\\sin\\theta|} \\geq 1$. Cosecant can never take a value between $-1$ and $1$. It equals $1$ when $\\sin\\theta = 1$ (at $\\theta = \\frac{\\pi}{2} + 2n\\pi$) and equals $-1$ when $\\sin\\theta = -1$ (at $\\theta = \\frac{3\\pi}{2} + 2n\\pi$).

Cosecant is an odd function, inheriting this property from sine: $\\csc(-\\theta) = \\frac{1}{\\sin(-\\theta)} = \\frac{1}{-\\sin\\theta} = -\\csc\\theta$. Its period is $2\\pi$, the same as sine.

In [right triangle trigonometry](!/trigonometry/right-triangle), cosecant equals hypotenuse over opposite — a ratio that is always greater than 1 for acute angles, since the hypotenuse exceeds every leg. The general function preserves this: the absolute value of cosecant is always at least 1.

Cosecant appears less frequently in elementary problems than sine, cosine, or tangent, but it plays a significant role in the Pythagorean identity $1 + \\cot^2\\theta = \\csc^2\\theta$, in certain [identities](!/trigonometry/identities) and [formula](!/trigonometry/formulas) derivations, and in calculus (as the derivative of $-\\cot\\theta$ and in various integrals).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `The Secant Function`,
    content: `Secant is the reciprocal of cosine:

$$\\sec(\\theta) = \\frac{1}{\\cos(\\theta)}$$

It is defined wherever $\\cos(\\theta) \\neq 0$, which excludes $\\theta = \\frac{\\pi}{2} + n\\pi$ for every integer $n$ — the same points where tangent is undefined. At these angles, the terminal side is vertical, the $x$-coordinate is zero, and both $\\tan\\theta$ and $\\sec\\theta$ have vertical asymptotes on their [graphs](!/trigonometry/graphs).

The range of secant mirrors that of cosecant: $(-\\infty, -1] \\cup [1, \\infty)$. Since $|\\cos\\theta| \\leq 1$, the reciprocal satisfies $|\\sec\\theta| \\geq 1$, and secant can never produce a value strictly between $-1$ and $1$. It equals $1$ at $\\theta = 2n\\pi$ and $-1$ at $\\theta = \\pi + 2n\\pi$.

Secant is an even function: $\\sec(-\\theta) = \\frac{1}{\\cos(-\\theta)} = \\frac{1}{\\cos\\theta} = \\sec\\theta$, since cosine is even. Its period is $2\\pi$.

The Pythagorean identity $1 + \\tan^2\\theta = \\sec^2\\theta$ connects secant directly to tangent. This relationship is heavily used in the simplification of [identities](!/trigonometry/identities) and in calculus, where $\\sec^2\\theta$ appears as the derivative of $\\tan\\theta$ and in the integral of $\\sec\\theta\\tan\\theta$.

In the [right triangle](!/trigonometry/right-triangle) context, secant equals hypotenuse over adjacent — the reciprocal of the cosine ratio. Like cosecant, secant always has absolute value at least 1, reflecting the fact that the hypotenuse always exceeds any leg in a right triangle.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `The Cotangent Function`,
    content: `Cotangent is defined as the ratio of cosine to sine, or equivalently as the reciprocal of tangent:

$$\\cot(\\theta) = \\frac{\\cos(\\theta)}{\\sin(\\theta)} = \\frac{1}{\\tan(\\theta)}$$

It is undefined wherever $\\sin(\\theta) = 0$: at $\\theta = n\\pi$ for every integer $n$. These are the same points where cosecant is undefined — where the terminal side lies along the $x$-axis.

The range of cotangent is the entire real line $(-\\infty, \\infty)$, identical to tangent. As $\\theta$ approaches an excluded value, $\\sin\\theta$ approaches zero while $\\cos\\theta$ approaches $\\pm 1$, and the ratio diverges.

Cotangent is periodic with period $\\pi$, matching tangent. The derivation is analogous: $\\cot(\\theta + \\pi) = \\frac{\\cos(\\theta + \\pi)}{\\sin(\\theta + \\pi)} = \\frac{-\\cos\\theta}{-\\sin\\theta} = \\cot\\theta$. It is an odd function: $\\cot(-\\theta) = -\\cot\\theta$.

On the interval $(0, \\pi)$, cotangent is strictly decreasing — running from $+\\infty$ down to $-\\infty$. This contrasts with tangent, which is increasing on its principal interval. The [graph](!/trigonometry/graphs) of cotangent is a decreasing curve between consecutive asymptotes, while the graph of tangent is an increasing curve.

Cotangent equals zero where cosine equals zero: at $\\theta = \\frac{\\pi}{2} + n\\pi$. In the [right triangle](!/trigonometry/right-triangle), it equals adjacent over opposite — the reciprocal of the tangent ratio. The cofunction relationship $\\cot\\theta = \\tan\\left(\\frac{\\pi}{2} - \\theta\\right)$ ties cotangent to tangent through complementary angles, consistent with the cofunction pattern established for all six functions.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Reciprocal and Quotient Relationships`,
    content: `The six trigonometric functions are not independent — they are connected by a network of algebraic relationships that reduce all six to just two: sine and cosine. Every other function is expressible in terms of these two.

The reciprocal relationships:

$$\\csc\\theta = \\frac{1}{\\sin\\theta}, \\quad \\sec\\theta = \\frac{1}{\\cos\\theta}, \\quad \\cot\\theta = \\frac{1}{\\tan\\theta}$$

The quotient relationships:

$$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}, \\quad \\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$$

Combining reciprocal and quotient relationships, any expression involving the six functions can be rewritten purely in terms of $\\sin\\theta$ and $\\cos\\theta$. For example, $\\sec\\theta\\tan\\theta = \\frac{1}{\\cos\\theta} \\cdot \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{\\sin\\theta}{\\cos^2\\theta}$. This conversion strategy — "write everything in sine and cosine" — is one of the most reliable first steps when simplifying trigonometric expressions or proving [identities](!/trigonometry/identities).

The relationships also imply that the six functions naturally pair off. Sine and cosecant are reciprocals. Cosine and secant are reciprocals. Tangent and cotangent are reciprocals. Within each pair, the product is always 1:

$$\\sin\\theta \\cdot \\csc\\theta = 1, \\quad \\cos\\theta \\cdot \\sec\\theta = 1, \\quad \\tan\\theta \\cdot \\cot\\theta = 1$$

These hold at every point where both functions in the pair are defined. They are among the simplest of the trigonometric [identities](!/trigonometry/identities), but their utility is pervasive.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Domain and Range Summary`,
    content: `The domains and ranges of all six functions follow from their definitions and from the geometry of the [unit circle](!/trigonometry/unit-circle). Sine and cosine, being coordinates of a point on the unit circle, are defined for all real inputs and confined to $[-1, 1]$. The remaining four functions involve division by sine or cosine (or both), so they are undefined wherever the relevant denominator is zero.

**Sine**: domain $(-\\infty, \\infty)$, range $[-1, 1]$

**Cosine**: domain $(-\\infty, \\infty)$, range $[-1, 1]$

**Tangent**: domain $\\{\\theta : \\theta \\neq \\frac{\\pi}{2} + n\\pi,\\, n \\in \\mathbb{Z}\\}$, range $(-\\infty, \\infty)$

**Cotangent**: domain $\\{\\theta : \\theta \\neq n\\pi,\\, n \\in \\mathbb{Z}\\}$, range $(-\\infty, \\infty)$

**Secant**: domain $\\{\\theta : \\theta \\neq \\frac{\\pi}{2} + n\\pi,\\, n \\in \\mathbb{Z}\\}$, range $(-\\infty, -1] \\cup [1, \\infty)$

**Cosecant**: domain $\\{\\theta : \\theta \\neq n\\pi,\\, n \\in \\mathbb{Z}\\}$, range $(-\\infty, -1] \\cup [1, \\infty)$

Several patterns are worth noting. Tangent and secant share the same excluded points — both are undefined where $\\cos\\theta = 0$. Cotangent and cosecant share their excluded points — both are undefined where $\\sin\\theta = 0$. Tangent and cotangent have range $(-\\infty, \\infty)$, meaning any real number is a valid output. Secant and cosecant cannot produce values between $-1$ and $1$ — their outputs are always at least 1 in absolute value. These constraints on range directly affect what [equations](!/trigonometry/equations) have solutions: $\\sin(x) = 2$ has none (since $2 \\notin [-1, 1]$), and $\\csc(x) = 0.5$ has none (since $0.5 \\notin (-\\infty, -1] \\cup [1, \\infty)$).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Evaluating Trigonometric Functions at Any Angle`,
    content: `The procedure for evaluating a trigonometric function at any angle combines three components: coterminal reduction, reference angle computation, and quadrant-based sign assignment.

**Step 1: Reduce to a standard range.** If the angle exceeds $360°$ (or $2\\pi$), or if it is negative, find a coterminal angle in $[0°, 360°)$ or $[0, 2\\pi)$ by adding or subtracting full rotations. For example, $\\sin(750°) = \\sin(750° - 2 \\times 360°) = \\sin(30°)$.

**Step 2: Identify the quadrant.** Determine which quadrant the angle falls in (or whether it is a quadrantal angle lying on an axis). This determines the sign of the function value.

**Step 3: Find the reference angle.** Compute the acute angle between the terminal side and the $x$-axis. The reference angle identifies which set of exact values (from the [special right triangles](!/trigonometry/right-triangle)) to use.

**Step 4: Evaluate and assign the sign.** Look up the function value at the reference angle, then apply the sign from Step 2.

Example: evaluate $\\cos\\left(\\frac{7\\pi}{4}\\right)$.

The angle $\\frac{7\\pi}{4}$ is in $[0, 2\\pi)$, so no coterminal reduction is needed. It lies in Quadrant IV (since $\\frac{3\\pi}{2} < \\frac{7\\pi}{4} < 2\\pi$). The reference angle is $2\\pi - \\frac{7\\pi}{4} = \\frac{\\pi}{4}$. Cosine is positive in Quadrant IV. Therefore $\\cos\\left(\\frac{7\\pi}{4}\\right) = +\\cos\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$.

Example: evaluate $\\tan(240°)$.

The angle $240°$ is in Quadrant III ($180° < 240° < 270°$). The reference angle is $240° - 180° = 60°$. Tangent is positive in Quadrant III (both sine and cosine are negative, and a negative divided by a negative is positive). Therefore $\\tan(240°) = +\\tan(60°) = \\sqrt{3}$.

This procedure works uniformly for every angle and every function. For non-standard angles — those whose reference angle is not $30°$, $45°$, or $60°$ — a calculator is needed for the reference angle evaluation, but the sign-determination step remains the same.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Finding All Function Values from One Known Value`,
    content: `A common task in trigonometry is: given the value of one trigonometric function and the quadrant of the angle, find the values of all six functions. The Pythagorean identity and the reciprocal/quotient relationships make this possible.

Suppose $\\sin\\theta = \\frac{3}{5}$ and $\\theta$ is in Quadrant II. The Pythagorean identity gives:

$$\\cos^2\\theta = 1 - \\sin^2\\theta = 1 - \\frac{9}{25} = \\frac{16}{25}$$

So $\\cos\\theta = \\pm\\frac{4}{5}$. Since $\\theta$ is in Quadrant II, where cosine is negative: $\\cos\\theta = -\\frac{4}{5}$.

From here, the remaining four functions follow:

$$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{3/5}{-4/5} = -\\frac{3}{4}$$

$$\\cot\\theta = \\frac{1}{\\tan\\theta} = -\\frac{4}{3}$$

$$\\sec\\theta = \\frac{1}{\\cos\\theta} = -\\frac{5}{4}$$

$$\\csc\\theta = \\frac{1}{\\sin\\theta} = \\frac{5}{3}$$

The quadrant information is essential. Without it, $\\cos\\theta$ could be $+\\frac{4}{5}$ or $-\\frac{4}{5}$, and half the remaining values would change sign. The Pythagorean identity determines the magnitude; the quadrant determines the sign.

This process also works starting from tangent. If $\\tan\\theta = -\\frac{7}{24}$ and $\\cos\\theta > 0$ (placing $\\theta$ in Quadrant IV), then a right triangle with legs 7 and 24 has hypotenuse $\\sqrt{7^2 + 24^2} = 25$. In Quadrant IV, sine is negative and cosine is positive, so $\\sin\\theta = -\\frac{7}{25}$ and $\\cos\\theta = \\frac{24}{25}$. The reciprocals and remaining ratios follow immediately.

The technique extends to starting from secant, cosecant, or cotangent — the Pythagorean [identities](!/trigonometry/identities) $1 + \\tan^2\\theta = \\sec^2\\theta$ and $1 + \\cot^2\\theta = \\csc^2\\theta$ play the analogous role.`,
    before: ``,
    after: ``,
    link: ``,
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
  title: `From Geometric Ratios to Functions of a Real Variable`,
  content: `In [right triangle trigonometry](!/trigonometry/right-triangle), sine and cosine are ratios — static numbers attached to a specific angle in a specific triangle. On the [unit circle](!/trigonometry/unit-circle), they become coordinates — values that change as the angle sweeps around the circle. The next conceptual step is to treat them as functions: machines that accept any real number as input and return a real number as output, subject to the same analysis applied to polynomial, rational, exponential, or any other class of function.

This shift in perspective opens up the full toolkit of function analysis. Each of the six trigonometric functions has a domain (where it is defined), a range (what values it can produce), intervals of increase and decrease, symmetry properties, and characteristic behavior near its points of discontinuity. Sine and cosine are defined everywhere and bounded between $-1$ and $1$. Tangent and cotangent are defined everywhere except at regularly spaced asymptotes, and their ranges span all real numbers. Cosecant and secant, as reciprocals of sine and cosine, inherit the zeros of their counterparts as points of undefinedness and are bounded away from zero but unbounded overall. These domains and ranges are not arbitrary — they follow inevitably from the [unit circle](!/trigonometry/unit-circle) definitions and govern every computation involving [graphs](!/trigonometry/graphs), [equations](!/trigonometry/equations), [inequalities](!/trigonometry/inequalities), and [inverse functions](!/trigonometry/inverse-functions).`,
};




   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
          seoData: {
        title: "Trigonometric Functions | Learn Math Class",
        description: "Learn all six trigonometric functions: sine, cosine, tangent, cosecant, secant, and cotangent with domain, range, and evaluation methods for any angle.",
        keywords: keyWords.join(", "),
        url: "/trigonometry/functions",
         name: "Trigonometric Functions"
      },

       }
    }
   }

export default function FunctionsPage({seoData,sectionsContent , introContent, faqQuestions, schemas}) {


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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Trigonometric Functions</h1>
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
