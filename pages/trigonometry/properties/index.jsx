

import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){

  const keyWords=[
    'trigonometric properties',
    'periodicity trig functions',
    'even odd trig functions',
    'boundedness sine cosine',
    'zeros of trig functions',
    'trig function discontinuities',
    'vertical asymptotes trig',
    'monotonicity trig intervals',
    'extrema trig functions',
    'domain range trig functions',
    'continuity trigonometric functions',
    'period 2pi pi',
    'sine cosine range -1 to 1',
    'trig function behavior'
  ]

  const faqQuestions = {
    obj1: {
      question: "What does it mean for trigonometric functions to be periodic?",
      answer: "A periodic function repeats its values at regular intervals. Sine, cosine, cosecant, and secant have period 2π, meaning their values repeat every 2π radians. Tangent and cotangent have the shorter period π. Periodicity means every trigonometric graph is fully determined by one period, and equations produce infinite families of solutions spaced by the period."
    },
    obj2: {
      question: "Which trigonometric functions are even and which are odd?",
      answer: "Cosine and secant are even functions, meaning f(-θ) = f(θ) — their graphs are symmetric about the y-axis. Sine, tangent, cosecant, and cotangent are odd functions, meaning f(-θ) = -f(θ) — their graphs are symmetric about the origin. These symmetries follow from reflecting points across the x-axis on the unit circle."
    },
    obj3: {
      question: "Why are sine and cosine bounded between -1 and 1?",
      answer: "Sine and cosine represent the y-coordinate and x-coordinate of a point on the unit circle, which has radius 1. Since every point on the unit circle satisfies x² + y² = 1, both coordinates must satisfy |x| ≤ 1 and |y| ≤ 1. No rotation can produce a value outside [-1, 1], making sine and cosine the only bounded trigonometric functions."
    },
    obj4: {
      question: "Where are the trigonometric functions undefined?",
      answer: "Tangent and secant are undefined wherever cosine equals zero, which occurs at θ = π/2 + nπ for every integer n. Cotangent and cosecant are undefined wherever sine equals zero, at θ = nπ. At these points the functions have vertical asymptotes. Sine and cosine are continuous everywhere with no discontinuities."
    },
    obj5: {
      question: "What are the zeros of the trigonometric functions?",
      answer: "Sine has zeros at θ = nπ (integer multiples of π). Cosine has zeros at θ = π/2 + nπ (odd multiples of π/2). Tangent has the same zeros as sine, at θ = nπ. Cotangent has the same zeros as cosine, at θ = π/2 + nπ. Cosecant and secant have no zeros because the reciprocal of a real number can never equal zero."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Trigonometric Properties",
      "description": "Explore the structural properties of trigonometric functions: periodicity, even/odd symmetry, boundedness, zeros, continuity, monotonicity, and extrema.",
      "url": "https://www.learnmathclass.com/trigonometry/properties",
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
        "name": "Trigonometric Properties"
      },
      "teaches": [
        "Periodicity of all six trigonometric functions",
        "Even and odd symmetry classifications",
        "Boundedness of sine and cosine within [-1, 1]",
        "Zeros of each trigonometric function",
        "Continuity and vertical asymptote locations",
        "Monotonicity on principal intervals",
        "Maximum and minimum values (extrema)"
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
          "name": "Trigonometric Properties",
          "item": "https://www.learnmathclass.com/trigonometry/properties"
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

   obj0: {
    title: `Key Terms`,
    content: `
## Core Concept
 
- [Periodic Function](!/trigonometry/definitions#periodic_function) — a function repeating at regular intervals
- [Unit Circle](!/trigonometry/definitions#unit_circle) — the geometric source of all trigonometric properties
 
## The Six Functions
 
- [Sine](!/trigonometry/definitions#sine) — $y$-coordinate; odd, bounded, period $2\\pi$
- [Cosine](!/trigonometry/definitions#cosine) — $x$-coordinate; even, bounded, period $2\\pi$
- [Tangent](!/trigonometry/definitions#tangent) — $\\frac{y}{x}$; odd, unbounded, period $\\pi$
- [Cosecant](!/trigonometry/definitions#cosecant) — $\\frac{1}{\\sin\\theta}$; odd, unbounded below $|1|$
- [Secant](!/trigonometry/definitions#secant) — $\\frac{1}{\\cos\\theta}$; even, unbounded below $|1|$
- [Cotangent](!/trigonometry/definitions#cotangent) — $\\frac{\\cos\\theta}{\\sin\\theta}$; odd, unbounded, period $\\pi$`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Trigonometry Definitions](!/trigonometry/definitions) →@`,
    link: '',
  },

     obj1: {
    title: `Periodicity`,
    content: `A function $f$ is periodic if there exists a positive number $T$ such that $f(\\theta + T) = f(\\theta)$ for every $\\theta$ in the domain. The smallest such $T$ is the fundamental period.

Sine and cosine have period $2\\pi$:

$$\\sin(\\theta + 2\\pi) = \\sin(\\theta), \\quad \\cos(\\theta + 2\\pi) = \\cos(\\theta)$$

This is a geometric fact: after a full rotation of $2\\pi$ radians around the [unit circle](!/trigonometry/unit-circle), the point $(\\cos\\theta, \\sin\\theta)$ returns to its starting position. The coordinates — and therefore the function values — are unchanged. Adding any integer multiple of $2\\pi$ has no effect: $\\sin(\\theta + 2n\\pi) = \\sin(\\theta)$ for all integers $n$.

Cosecant and secant inherit the periods of their reciprocals. Since $\\csc\\theta = \\frac{1}{\\sin\\theta}$ and sine has period $2\\pi$, cosecant also has period $2\\pi$. The same applies to secant via cosine.

Tangent and cotangent have the shorter period $\\pi$:

$$\\tan(\\theta + \\pi) = \\tan(\\theta), \\quad \\cot(\\theta + \\pi) = \\cot(\\theta)$$

The algebraic reason: $\\tan(\\theta + \\pi) = \\frac{\\sin(\\theta + \\pi)}{\\cos(\\theta + \\pi)} = \\frac{-\\sin\\theta}{-\\cos\\theta} = \\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$. A half rotation negates both coordinates, but the ratio is unaffected. Geometrically, the point diametrically opposite $(\\cos\\theta, \\sin\\theta)$ on the unit circle has both coordinates negated, producing the same value of $\\frac{y}{x}$.

The practical consequence for [equations](!/trigonometry/equations): if $\\theta_0$ is a solution to a trigonometric equation, then $\\theta_0 + 2n\\pi$ (for sine, cosine, cosecant, secant) or $\\theta_0 + n\\pi$ (for tangent, cotangent) are also solutions. This generates the infinite families that characterize general solutions of trigonometric equations.

The practical consequence for [graphs](!/trigonometry/graphs): every trigonometric graph is fully determined by one period. The rest is repetition.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Even and Odd Symmetry`,
    content: `A function is even if $f(-\\theta) = f(\\theta)$ for all $\\theta$ in its domain — its graph is symmetric about the $y$-axis. A function is odd if $f(-\\theta) = -f(\\theta)$ — its graph is symmetric about the origin.

Among the six trigonometric functions, only two are even:

$$\\cos(-\\theta) = \\cos(\\theta), \\quad \\sec(-\\theta) = \\sec(\\theta)$$

The remaining four are odd:

$$\\sin(-\\theta) = -\\sin(\\theta), \\quad \\tan(-\\theta) = -\\tan(\\theta)$$
$$\\csc(-\\theta) = -\\csc(\\theta), \\quad \\cot(-\\theta) = -\\cot(\\theta)$$

The geometric explanation is clean. On the [unit circle](!/trigonometry/unit-circle), the angle $-\\theta$ corresponds to reflecting $\\theta$ across the $x$-axis. This reflection negates the $y$-coordinate but preserves the $x$-coordinate. Since cosine is the $x$-coordinate, it is unchanged — even. Since sine is the $y$-coordinate, it is negated — odd. Tangent, being $\\frac{y}{x}$, is the ratio of an odd quantity to an even one, which is odd. The reciprocal functions inherit the parity of their parent functions: the reciprocal of an even function is even, and the reciprocal of an odd function is odd.

These symmetries are classified as the even/odd [identities](!/trigonometry/identities) and are used constantly in simplification. When a negative angle appears in an expression — say, $\\sin(-3x)$ — the odd identity converts it immediately to $-\\sin(3x)$, eliminating the negative argument. Similarly, $\\cos(-\\alpha) = \\cos(\\alpha)$ allows the sign to be dropped outright.

On the [graphs](!/trigonometry/graphs), even symmetry (cosine, secant) produces a mirror image across the $y$-axis. Odd symmetry (sine, tangent, cosecant, cotangent) produces a $180°$ rotational symmetry about the origin.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Boundedness`,
    content: `A function is bounded if its output never exceeds some fixed value in absolute terms. Among the six trigonometric functions, only sine and cosine are bounded:

$$-1 \\leq \\sin(\\theta) \\leq 1, \\quad -1 \\leq \\cos(\\theta) \\leq 1$$

This follows directly from the [unit circle](!/trigonometry/unit-circle). The coordinates of any point on a circle of radius 1 satisfy $x^2 + y^2 = 1$, which forces $|x| \\leq 1$ and $|y| \\leq 1$. No amount of rotation will ever produce a sine or cosine value outside $[-1, 1]$. The bounds are achieved: $\\sin\\theta = 1$ at $\\theta = \\frac{\\pi}{2}$ and $\\sin\\theta = -1$ at $\\theta = \\frac{3\\pi}{2}$, with analogous extremes for cosine.

Cosecant and secant are bounded away from zero but unbounded overall:

$$|\\csc(\\theta)| \\geq 1, \\quad |\\sec(\\theta)| \\geq 1$$

Since $|\\sin\\theta| \\leq 1$, the reciprocal $|\\csc\\theta| = \\frac{1}{|\\sin\\theta|} \\geq 1$. As $\\sin\\theta$ approaches zero, $\\csc\\theta$ grows without bound. The range of both cosecant and secant is $(-\\infty, -1] \\cup [1, \\infty)$ — they can be arbitrarily large in magnitude but can never take a value between $-1$ and $1$.

Tangent and cotangent are entirely unbounded. Their ranges are $(-\\infty, \\infty)$, and they take every real value on every interval between consecutive asymptotes.

Boundedness has immediate consequences for [equations](!/trigonometry/equations) and [inequalities](!/trigonometry/inequalities):

- $\\sin(x) = 1.5$ has no solution — the output cannot exceed 1.
- $\\csc(x) = 0.3$ has no solution — the output cannot be between $-1$ and $1$.
- $\\tan(x) = 1000$ has solutions — tangent can take any real value.
- $|\\sin(x)| \\leq 1$ is always true — it constrains nothing.

Recognizing these range constraints before attempting to solve prevents wasted effort on impossible equations.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Zeros`,
    content: `The zeros of a trigonometric function — the values of $\\theta$ where the function equals zero — are determined by the [unit circle](!/trigonometry/unit-circle) coordinates and the algebraic definitions.

**Sine** equals zero when the $y$-coordinate on the unit circle is zero — when the terminal side lies on the $x$-axis:

$$\\sin(\\theta) = 0 \\quad \\text{at} \\quad \\theta = n\\pi \\quad (n \\in \\mathbb{Z})$$

That is: $\\ldots, -2\\pi, -\\pi, 0, \\pi, 2\\pi, \\ldots$

**Cosine** equals zero when the $x$-coordinate is zero — when the terminal side lies on the $y$-axis:

$$\\cos(\\theta) = 0 \\quad \\text{at} \\quad \\theta = \\frac{\\pi}{2} + n\\pi \\quad (n \\in \\mathbb{Z})$$

That is: $\\ldots, -\\frac{3\\pi}{2}, -\\frac{\\pi}{2}, \\frac{\\pi}{2}, \\frac{3\\pi}{2}, \\ldots$

**Tangent** equals zero when $\\sin\\theta = 0$ and $\\cos\\theta \\neq 0$ — at the same points as sine:

$$\\tan(\\theta) = 0 \\quad \\text{at} \\quad \\theta = n\\pi$$

**Cotangent** equals zero when $\\cos\\theta = 0$ and $\\sin\\theta \\neq 0$ — at the same points as cosine:

$$\\cot(\\theta) = 0 \\quad \\text{at} \\quad \\theta = \\frac{\\pi}{2} + n\\pi$$

**Cosecant and secant have no zeros.** Since $\\csc\\theta = \\frac{1}{\\sin\\theta}$, a zero would require $\\frac{1}{\\sin\\theta} = 0$, which has no solution — no reciprocal of a real number equals zero. The same applies to secant. Their ranges, $(-\\infty, -1] \\cup [1, \\infty)$, confirm this: zero is not in the range.

The zeros of sine and cosine are evenly spaced at intervals of $\\pi$ — a direct consequence of the $2\\pi$ period and the two zero crossings per cycle. The zeros of tangent coincide with the zeros of sine, and the zeros of cotangent coincide with the zeros of cosine. On the [graphs](!/trigonometry/graphs), these zeros are the $x$-intercepts, and their regular spacing reflects the periodicity.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Continuity and Discontinuities`,
    content: `Sine and cosine are continuous on the entire real line — their graphs are unbroken curves with no jumps, gaps, or asymptotes. This follows from the geometry: as an angle increases smoothly, the point on the [unit circle](!/trigonometry/unit-circle) moves smoothly, and the coordinates change continuously. There is no angle at which the $x$- or $y$-coordinate suddenly jumps.

The remaining four functions all have vertical asymptotes — points where the function value grows without bound and the function is undefined.

**Tangent and secant** are discontinuous at $\\theta = \\frac{\\pi}{2} + n\\pi$ (odd multiples of $\\frac{\\pi}{2}$). These are the zeros of cosine, and since both tangent ($\\frac{\\sin\\theta}{\\cos\\theta}$) and secant ($\\frac{1}{\\cos\\theta}$) have $\\cos\\theta$ in the denominator, division by zero creates the discontinuity. As $\\theta$ approaches any of these points, the function value tends toward $+\\infty$ or $-\\infty$, producing a vertical asymptote on the [graph](!/trigonometry/graphs).

**Cotangent and cosecant** are discontinuous at $\\theta = n\\pi$ (integer multiples of $\\pi$). These are the zeros of sine, and both cotangent ($\\frac{\\cos\\theta}{\\sin\\theta}$) and cosecant ($\\frac{1}{\\sin\\theta}$) have $\\sin\\theta$ in the denominator.

These discontinuities are not removable — the function does not approach a finite limit from either side. They are infinite discontinuities, corresponding to vertical asymptotes. Between consecutive asymptotes, each function is continuous.

The pattern is worth memorizing:

- $\\cos\\theta = 0$ → tangent and secant undefined
- $\\sin\\theta = 0$ → cotangent and cosecant undefined

This determines the domain of any expression involving these functions. For example, the expression $\\tan(x) + \\csc(x)$ is undefined wherever $\\cos(x) = 0$ (from the tangent) or $\\sin(x) = 0$ (from the cosecant) — that is, at every integer multiple of $\\frac{\\pi}{2}$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Monotonicity on Principal Intervals`,
    content: `Monotonicity describes where a function is strictly increasing or strictly decreasing. For trigonometric functions, the intervals of monotonicity repeat with the period, so it suffices to identify them over one period — or, more precisely, over the intervals that will serve as restricted domains for the [inverse functions](!/trigonometry/inverse-functions).

**Sine** is strictly increasing on $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, where it rises from $-1$ to $1$. It is strictly decreasing on $\\left[\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right]$, where it falls from $1$ back to $-1$. These two intervals together span one full period.

**Cosine** is strictly decreasing on $[0, \\pi]$, dropping from $1$ to $-1$. It is strictly increasing on $[\\pi, 2\\pi]$, climbing from $-1$ back to $1$.

**Tangent** is strictly increasing on each interval $\\left(-\\frac{\\pi}{2} + n\\pi, \\frac{\\pi}{2} + n\\pi\\right)$ — that is, on every interval between consecutive asymptotes. Within each such interval, tangent runs continuously from $-\\infty$ to $+\\infty$.

**Cotangent** is strictly decreasing on each interval $(n\\pi, (n+1)\\pi)$ — between its consecutive asymptotes. It runs from $+\\infty$ to $-\\infty$ within each period.

**Secant** is decreasing on $\\left[0, \\frac{\\pi}{2}\\right)$, increasing on $\\left(\\frac{\\pi}{2}, \\pi\\right]$, and so on — its behavior follows from the reciprocal of cosine.

**Cosecant** is decreasing on $\\left(0, \\frac{\\pi}{2}\\right]$, increasing on $\\left[\\frac{\\pi}{2}, \\pi\\right)$, and so on — its behavior follows from the reciprocal of sine.

The principal intervals of monotonicity are precisely the domains used to construct the inverse trigonometric functions. Arcsine uses $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ (where sine is increasing), arccosine uses $[0, \\pi]$ (where cosine is decreasing), and arctangent uses $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ (where tangent is increasing). The choice is not arbitrary — it is dictated by the requirement that the restricted function be one-to-one (which monotonicity guarantees) and that the restricted domain cover the entire range of the function.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Extrema`,
    content: `The maximum and minimum values of a trigonometric function — if they exist — occur at specific, predictable points determined by the [unit circle](!/trigonometry/unit-circle) geometry.

**Sine** achieves its maximum value of $1$ at $\\theta = \\frac{\\pi}{2} + 2n\\pi$ — the top of the unit circle, where the $y$-coordinate is as large as it can be. It achieves its minimum of $-1$ at $\\theta = \\frac{3\\pi}{2} + 2n\\pi$ — the bottom of the circle. These are global (absolute) extrema, and they recur with period $2\\pi$.

**Cosine** achieves its maximum of $1$ at $\\theta = 2n\\pi$ — the rightmost point of the unit circle. Its minimum of $-1$ occurs at $\\theta = \\pi + 2n\\pi$ — the leftmost point.

**Cosecant** has local minima of $1$ (where $\\sin\\theta = 1$) and local maxima of $-1$ (where $\\sin\\theta = -1$). These labels may seem reversed, but they are correct: $\\csc\\theta = 1$ is the smallest positive value cosecant achieves (on the upward-opening branches), and $\\csc\\theta = -1$ is the largest negative value (on the downward-opening branches). Between asymptotes, each branch has exactly one extremum.

**Secant** behaves analogously: local minima of $1$ at cosine's maxima, local maxima of $-1$ at cosine's minima.

**Tangent and cotangent have no extrema.** They are unbounded in both directions, with no maximum or minimum value. Within each period, they increase (tangent) or decrease (cotangent) monotonically from $-\\infty$ to $+\\infty$ or vice versa, never leveling off or turning around.

For transformed functions like $y = A\\sin(Bx - C) + D$, the extrema are:

$$\\text{maximum} = D + |A|, \\quad \\text{minimum} = D - |A|$$

These occur at the same relative positions within each period as for the standard function, shifted according to the phase shift and compressed or stretched according to the period.`,
    before: ``,
    after: ``,
    link: ``,
  },
    obj8:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',

    },
    obj9:{
      title:``,
      content:``,
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
 title: `The Structural Behavior of Sine, Cosine, and Their Companions`,
  content: `Every trigonometric function carries a set of structural features — periodicity, symmetry, boundedness, monotonicity, continuity — that dictate how it behaves across the entire real line. These are not isolated facts to memorize but interconnected consequences of the [unit circle](!/trigonometry/unit-circle) geometry. Periodicity follows from the circle's finite circumference. Even/odd symmetry follows from how coordinates respond to reflecting an angle across the $x$-axis. Boundedness follows from the constraint $x^2 + y^2 = 1$. Monotonicity — where each function increases or decreases — determines the intervals on which [inverse trigonometric functions](!/trigonometry/inverse-functions) can be defined.

These properties govern every computation downstream. Periodicity is the reason trigonometric [equations](!/trigonometry/equations) produce infinitely many solutions. Boundedness is the reason $\\sin(x) = 2$ has no solution at all. Even/odd symmetry simplifies expressions involving negative angles and underlies several fundamental [identities](!/trigonometry/identities). The locations of zeros and asymptotes shape the [graphs](!/trigonometry/graphs) and constrain the domains of composite expressions. Understanding the properties as a coherent system — rather than as a list — is what separates mechanical calculation from genuine fluency with the trigonometric functions.`,
};




   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
          seoData: {
        title: "Trigonometric Properties | Learn Math Class",
        description: "Explore the key properties of trigonometric functions: periodicity, even/odd symmetry, boundedness, zeros, continuity, monotonicity, and extrema explained.",
        keywords: keyWords.join(", "),
        url: "/trigonometry/properties",
         name: "Trigonometric Properties"
      },

       }
    }
   }

export default function PropertiesPage({seoData,sectionsContent , introContent, faqQuestions, schemas}) {


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
    // {
    //     id:'8',
    //     title:sectionsContent.obj8.title,
    //     link:sectionsContent.obj8.link,
    //     content:[
    //       sectionsContent.obj8.content,
    //     ]
    // },
    // {
    //     id:'9',
    //     title:sectionsContent.obj9.title,
    //     link:sectionsContent.obj9.link,
    //     content:[
    //       sectionsContent.obj9.content,
    //     ]
    // },
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Trigonometric Properties</h1>
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
