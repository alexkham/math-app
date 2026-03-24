import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../pages.css'
import Head from 'next/head'


export async function getStaticProps(){

  const keyWords=[
    'trigonometric graphs',
    'sine graph',
    'cosine graph',
    'tangent graph',
    'amplitude',
    'period of trig functions',
    'phase shift',
    'vertical shift midline',
    'general sinusoidal form',
    'graphing trig functions',
    'cosecant secant cotangent graphs',
    'key-point method graphing',
    'equation from graph sinusoidal',
    'sinusoidal transformations'
  ]

  const faqQuestions = {
    obj1: {
      question: "What are the key features of the sine and cosine graphs?",
      answer: "The sine and cosine graphs are smooth, continuous waves oscillating between -1 and 1 with a period of 2π. The sine graph starts at the origin and follows the pattern zero, maximum, zero, minimum, zero. The cosine graph starts at its maximum and follows maximum, zero, minimum, zero, maximum. They are the same wave shifted by π/2 units horizontally."
    },
    obj2: {
      question: "What does each parameter in y = A sin(Bx - C) + D control?",
      answer: "A controls the amplitude (vertical stretch and reflection). B controls the period, calculated as 2π/|B| for sine and cosine or π/|B| for tangent. C combined with B determines the phase shift equal to C/B. D controls the vertical shift, moving the midline from y = 0 to y = D."
    },
    obj3: {
      question: "How do you find the equation of a sinusoidal function from its graph?",
      answer: "First find the midline D by averaging the maximum and minimum values. Then find the amplitude |A| as half the difference between max and min. Next determine the period and compute B = 2π/period. Finally identify where a standard cycle begins to find the phase shift and compute C = B times the shift. Choose sine if the cycle starts at a midline crossing, cosine if at a peak."
    },
    obj4: {
      question: "How does the tangent graph differ from sine and cosine?",
      answer: "The tangent graph consists of repeating branches separated by vertical asymptotes rather than smooth bounded waves. It has period π instead of 2π, is unbounded with range (-∞, ∞), and has no amplitude. Vertical asymptotes occur where cosine equals zero. The function is strictly increasing within each branch."
    },
    obj5: {
      question: "What is the key-point method for graphing trigonometric functions?",
      answer: "The key-point method divides one period into four equal subintervals and identifies five key points. For sine the y-values follow: midline, max, midline, min, midline. For cosine: max, midline, min, midline, max. Compute the period, phase shift, amplitude, and midline from the equation, plot five equally spaced points, and connect with a smooth curve."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Trigonometric Graphs",
      "description": "Learn to graph sine, cosine, tangent, and reciprocal trig functions. Master amplitude, period, phase shift, vertical shift, and the key-point method.",
      "url": "https://www.learnmathclass.com/trigonometry/graphs",
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
        "name": "Trigonometric Graphs"
      },
      "teaches": [
        "Graph of the sine function with five key points",
        "Graph of the cosine function and its phase relationship to sine",
        "Graph of the tangent function with vertical asymptotes",
        "Graphs of cosecant, secant, and cotangent as reciprocal curves",
        "The general sinusoidal form y = A sin(Bx - C) + D",
        "How amplitude, period, phase shift, and vertical shift transform graphs",
        "Determining a sinusoidal equation from a graph",
        "The key-point method for graphing by hand"
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
          "name": "Trigonometric Graphs",
          "item": "https://www.learnmathclass.com/trigonometry/graphs"
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
    // obj11:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',

    // },


     obj1: {
    title: `Graph of the Sine Function`,
    content: `The graph of $y = \\sin(x)$ is a smooth, continuous wave that oscillates between $-1$ and $1$. It is the visual signature of the sine function and one of the most recognizable curves in mathematics.

The wave begins at the origin: $\\sin(0) = 0$. It rises to its maximum value of $1$ at $x = \\frac{\\pi}{2}$, returns to zero at $x = \\pi$, drops to its minimum of $-1$ at $x = \\frac{3\\pi}{2}$, and returns to zero at $x = 2\\pi$. This completes one full cycle. The pattern then repeats identically — to the right without end, and (by extending leftward) to the left without end.

Five key points define one period of the sine curve:

- $(0, 0)$ — starting zero
- $\\left(\\frac{\\pi}{2}, 1\\right)$ — maximum
- $(\\pi, 0)$ — middle zero
- $\\left(\\frac{3\\pi}{2}, -1\\right)$ — minimum
- $(2\\pi, 0)$ — ending zero

These five points, evenly spaced at intervals of $\\frac{\\pi}{2}$, are the skeleton of the graph. Connecting them with a smooth curve (not straight lines — the curve has a specific rounded shape, concave down from $0$ to $\\pi$ and concave up from $\\pi$ to $2\\pi$) produces the sine wave.

The graph confirms several [properties](!/trigonometry/properties) at a glance. The period is $2\\pi$ — the horizontal length of one complete cycle. The amplitude is $1$ — the vertical distance from the midline ($y = 0$) to either extreme. The function is odd: the graph is symmetric about the origin, meaning the portion for negative $x$ is a $180°$ rotation of the portion for positive $x$. The zeros occur at every integer multiple of $\\pi$: $\\ldots, -2\\pi, -\\pi, 0, \\pi, 2\\pi, \\ldots$`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Graph of the Cosine Function`,
    content: `The graph of $y = \\cos(x)$ is the same wave as sine, shifted $\\frac{\\pi}{2}$ units to the left. The shape, amplitude, and period are identical — only the starting position differs.

The cosine wave begins at its maximum: $\\cos(0) = 1$. It drops to zero at $x = \\frac{\\pi}{2}$, reaches its minimum of $-1$ at $x = \\pi$, returns to zero at $x = \\frac{3\\pi}{2}$, and climbs back to $1$ at $x = 2\\pi$. One complete cycle spans $2\\pi$, the same period as sine.

Five key points for one period:

- $(0, 1)$ — maximum
- $\\left(\\frac{\\pi}{2}, 0\\right)$ — descending zero
- $(\\pi, -1)$ — minimum
- $\\left(\\frac{3\\pi}{2}, 0\\right)$ — ascending zero
- $(2\\pi, 1)$ — return to maximum

The graph is symmetric about the $y$-axis — the hallmark of an even function. For any $x$, the graph at $-x$ has the same height as at $x$. This contrasts with sine's origin symmetry and is the visual expression of $\\cos(-x) = \\cos(x)$.

The horizontal shift between sine and cosine is precisely $\\frac{\\pi}{2}$:

$$\\cos(x) = \\sin\\left(x + \\frac{\\pi}{2}\\right)$$

This means any statement about the sine graph can be translated into a statement about the cosine graph by shifting the reference point. The two functions are, in a sense, the same function observed from two different starting positions on the [unit circle](!/trigonometry/unit-circle) — one starting at the rightmost point (cosine) and the other starting at the top (sine, after a quarter turn).

The zeros of cosine occur at odd multiples of $\\frac{\\pi}{2}$: $\\ldots, -\\frac{3\\pi}{2}, -\\frac{\\pi}{2}, \\frac{\\pi}{2}, \\frac{3\\pi}{2}, \\ldots$ These are precisely the angles where the [tangent and secant functions](!/trigonometry/functions) are undefined.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Graph of the Tangent Function`,
    content: `The graph of $y = \\tan(x)$ looks nothing like the smooth waves of sine and cosine. It consists of repeating branches, each confined between two vertical asymptotes, with the function increasing from $-\\infty$ to $+\\infty$ within each branch.

Vertical asymptotes occur at $x = \\frac{\\pi}{2} + n\\pi$ for every integer $n$ — the points where $\\cos(x) = 0$ and the ratio $\\frac{\\sin x}{\\cos x}$ is undefined. Between consecutive asymptotes, the function is continuous and strictly increasing.

Within the principal period $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$, the key points are:

- As $x \\to -\\frac{\\pi}{2}^+$: $\\tan(x) \\to -\\infty$
- $\\left(-\\frac{\\pi}{4}, -1\\right)$
- $(0, 0)$ — the zero, midway between the asymptotes
- $\\left(\\frac{\\pi}{4}, 1\\right)$
- As $x \\to \\frac{\\pi}{2}^-$: $\\tan(x) \\to +\\infty$

The period of tangent is $\\pi$, not $2\\pi$. Each branch is an exact copy of the previous one, shifted $\\pi$ units to the right. This shorter period reflects the algebraic identity $\\tan(x + \\pi) = \\tan(x)$, which in turn reflects the geometry of the [unit circle](!/trigonometry/unit-circle): after a half rotation, both the $x$- and $y$-coordinates reverse sign, and their ratio is preserved.

The graph passes through the origin and is symmetric about it — tangent is an odd function. There is no amplitude in the usual sense, since tangent is unbounded. The concept of amplitude applies only to sine and cosine (and their transformations), not to functions whose range is $(-\\infty, \\infty)$.

The tangent graph has an inflection point at each zero — the curve changes from concave up to concave down (or vice versa) as it passes through the midline. The steep rise near the asymptotes reflects the rapid growth of $\\frac{\\sin x}{\\cos x}$ as $\\cos x$ approaches zero.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Graphs of Cosecant, Secant, and Cotangent`,
    content: `The reciprocal functions are graphed by inverting the corresponding primary function. This procedure transforms zeros into asymptotes, maxima into minima (and vice versa), and produces U-shaped branches where the original function was positive or negative.

**Cosecant** ($y = \\csc x = \\frac{1}{\\sin x}$): Vertical asymptotes appear at every zero of sine — at $x = n\\pi$. Between consecutive asymptotes, the graph consists of U-shaped curves. Where $\\sin x > 0$ (between $0$ and $\\pi$, for instance), the curve opens upward with a minimum of $1$ at the point where $\\sin x = 1$. Where $\\sin x < 0$ (between $\\pi$ and $2\\pi$), the curve opens downward with a maximum of $-1$ at the point where $\\sin x = -1$. The graph never enters the horizontal strip $-1 < y < 1$. A practical approach to sketching: graph $y = \\sin x$ lightly first, then draw the reciprocal curves using the sine graph as a guide — peaks become valley floors, valleys become ceiling points, and zeros become asymptotes.

**Secant** ($y = \\sec x = \\frac{1}{\\cos x}$): Vertical asymptotes at every zero of cosine — at $x = \\frac{\\pi}{2} + n\\pi$. The structure mirrors cosecant but is shifted horizontally by $\\frac{\\pi}{2}$, consistent with the shift between sine and cosine. Upward-opening U-curves appear where $\\cos x > 0$, with minimum value $1$. Downward-opening curves appear where $\\cos x < 0$, with maximum value $-1$. Sketch by graphing $y = \\cos x$ first, then inverting.

**Cotangent** ($y = \\cot x = \\frac{\\cos x}{\\sin x}$): Vertical asymptotes at $x = n\\pi$ (where $\\sin x = 0$). Between consecutive asymptotes, the function is strictly decreasing — the opposite of tangent's increasing behavior. Within the period $(0, \\pi)$, the curve drops from $+\\infty$ through zero at $x = \\frac{\\pi}{2}$ to $-\\infty$. The period is $\\pi$, matching tangent. The graph is odd-symmetric about the origin.

The key points for cotangent in one period $(0, \\pi)$:

- As $x \\to 0^+$: $\\cot(x) \\to +\\infty$
- $\\left(\\frac{\\pi}{4}, 1\\right)$
- $\\left(\\frac{\\pi}{2}, 0\\right)$ — the zero
- $\\left(\\frac{3\\pi}{4}, -1\\right)$
- As $x \\to \\pi^-$: $\\cot(x) \\to -\\infty$`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `The General Sinusoidal Form`,
    content: `The graphs of sine and cosine can be transformed by four operations — vertical stretching, horizontal stretching, horizontal shifting, and vertical shifting — each controlled by a parameter in the general form:

$$y = A\\sin(Bx - C) + D$$

The same framework applies to cosine: $y = A\\cos(Bx - C) + D$. Understanding what each parameter does is essential for modeling periodic phenomena and for reading equations from graphs.

The four parameters are not independent transformations applied in arbitrary order. They follow a specific structure: $B$ and $C$ act on the input (inside the function), while $A$ and $D$ act on the output (outside). The inner transformations affect the horizontal axis — period and phase shift. The outer transformations affect the vertical axis — amplitude and midline. This inside-outside distinction mirrors the general theory of function transformations.

For tangent and cotangent, the form is the same — $y = A\\tan(Bx - C) + D$ — but amplitude has no geometric meaning since these functions are unbounded. The parameters $B$, $C$, and $D$ still control period, phase shift, and vertical shift in exactly the same way.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Amplitude`,
    content: `The amplitude of a sinusoidal function is the maximum vertical distance from the midline to a peak (or valley). For $y = A\\sin(Bx - C) + D$, the amplitude is $|A|$.

When $|A| > 1$, the wave is stretched vertically — it oscillates over a larger range. When $0 < |A| < 1$, the wave is compressed — it oscillates over a smaller range. The maximum value of the function is $D + |A|$ and the minimum is $D - |A|$.

When $A$ is negative, the graph is reflected across the midline. The wave is inverted: what was a peak becomes a valley, and vice versa. For sine, this means the graph starts by going downward instead of upward. For cosine, it starts at a minimum instead of a maximum. The amplitude is still $|A|$ — amplitude measures distance, which is always non-negative.

Examples:

- $y = 3\\sin(x)$ has amplitude $3$ — the wave reaches $3$ and $-3$.
- $y = 0.5\\cos(x)$ has amplitude $0.5$ — the wave reaches $0.5$ and $-0.5$.
- $y = -2\\sin(x)$ has amplitude $2$ — the wave reaches $2$ and $-2$, but inverted.

Amplitude is specific to bounded oscillating functions. It applies naturally to sine and cosine (and their reciprocals in a looser sense), but not to tangent or cotangent, which have no maximum or minimum and therefore no meaningful amplitude.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Period`,
    content: `The period is the horizontal length of one complete cycle — the smallest positive value $T$ such that $f(x + T) = f(x)$ for all $x$. For the unmodified functions, the periods are $2\\pi$ (sine, cosine, cosecant, secant) and $\\pi$ (tangent, cotangent).

For $y = A\\sin(Bx - C) + D$, the period is:

$$T = \\frac{2\\pi}{|B|}$$

For tangent and cotangent:

$$T = \\frac{\\pi}{|B|}$$

When $|B| > 1$, the period shrinks — more cycles fit into the same horizontal interval. The function oscillates faster. When $0 < |B| < 1$, the period grows — fewer cycles fit, and the oscillation is slower.

Examples:

- $y = \\sin(2x)$ has period $\\frac{2\\pi}{2} = \\pi$ — two full cycles in $[0, 2\\pi]$.
- $y = \\cos\\left(\\frac{x}{3}\\right)$ has period $\\frac{2\\pi}{1/3} = 6\\pi$ — one cycle takes $6\\pi$ units.
- $y = \\tan(4x)$ has period $\\frac{\\pi}{4}$ — four branches in $[0, \\pi]$.

The period is arguably the most important parameter for applications. When modeling a real-world oscillation — a sound wave, an alternating current, a tidal cycle — the period (or its reciprocal, the frequency) is typically the first quantity determined from data. The coefficient $B$ is then computed from $B = \\frac{2\\pi}{T}$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Phase Shift`,
    content: `Phase shift is the horizontal displacement of the graph from its standard starting position. For $y = A\\sin(Bx - C) + D$, the phase shift is:

$$\\text{phase shift} = \\frac{C}{B}$$

A positive phase shift moves the graph to the right; a negative one moves it to the left. The shift is found by setting the argument of the function equal to zero: $Bx - C = 0$ gives $x = \\frac{C}{B}$, which is where the "standard" cycle begins.

It is important to factor correctly. The expression $y = \\sin(2x - \\pi)$ has $B = 2$ and $C = \\pi$, so the phase shift is $\\frac{\\pi}{2}$ to the right — not $\\pi$. A common error is reading $C$ directly as the shift without dividing by $B$. The form $y = \\sin(2(x - \\frac{\\pi}{2}))$ makes the shift explicit by factoring $B$ out of the argument.

Phase shift is particularly important in the relationship between sine and cosine. The identity $\\cos(x) = \\sin(x + \\frac{\\pi}{2})$ means the cosine graph is the sine graph shifted $\\frac{\\pi}{2}$ to the left. Conversely, $\\sin(x) = \\cos(x - \\frac{\\pi}{2})$ — sine is cosine shifted $\\frac{\\pi}{2}$ to the right. When writing the equation of a graph, the choice between sine and cosine often reduces to which starting point — zero crossing or maximum — aligns more naturally with the given graph, and the phase shift accounts for any remaining displacement.

In applications, phase shift represents how far "ahead" or "behind" an oscillation is relative to a reference. Two sound waves with the same frequency but different phase shifts are offset in time. Two electrical signals with a phase difference of $\\pi$ are perfectly out of sync — when one peaks, the other is at its minimum.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Vertical Shift and Midline`,
    content: `The vertical shift $D$ in $y = A\\sin(Bx - C) + D$ moves the entire graph up or down. The graph oscillates around the horizontal line $y = D$ instead of around the $x$-axis. This line is called the midline.

For an unmodified sine or cosine, the midline is $y = 0$ — the function oscillates symmetrically about the $x$-axis. Adding $D > 0$ raises the midline; adding $D < 0$ lowers it. The maximum value of the function becomes $D + |A|$, and the minimum becomes $D - |A|$.

Examples:

- $y = \\sin(x) + 3$ oscillates between $2$ and $4$, centered on $y = 3$.
- $y = 2\\cos(x) - 1$ oscillates between $-3$ and $1$, centered on $y = -1$.

Reading the midline from a graph is straightforward: it is the horizontal line halfway between the maximum and minimum values. Algebraically:

$$D = \\frac{\\text{max} + \\text{min}}{2}$$

And the amplitude is:

$$|A| = \\frac{\\text{max} - \\text{min}}{2}$$

These two readings — midline and amplitude — are usually the first step in determining the equation of a sinusoidal graph. The period is read next (the horizontal distance for one full cycle), and the phase shift is determined last by identifying where a standard cycle begins relative to the $y$-axis.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Determining the Equation from a Graph`,
    content: `Writing the equation of a sinusoidal function from its graph requires extracting the four parameters $A$, $B$, $C$, $D$ and deciding whether to use sine or cosine as the base function.

**Step 1 — Find the midline ($D$).** Identify the maximum and minimum values from the graph. The midline is their average: $D = \\frac{\\text{max} + \\text{min}}{2}$.

**Step 2 — Find the amplitude ($|A|$).** The amplitude is the distance from the midline to either extreme: $|A| = \\frac{\\text{max} - \\text{min}}{2}$. Determine the sign of $A$: if the graph starts by rising from the midline (for sine) or starts at a maximum (for cosine), $A > 0$. If the behavior is inverted, $A < 0$.

**Step 3 — Find the period and compute $B$.** Identify the horizontal distance for one complete cycle. Then $B = \\frac{2\\pi}{\\text{period}}$ (for sine/cosine) or $B = \\frac{\\pi}{\\text{period}}$ (for tangent/cotangent).

**Step 4 — Find the phase shift and compute $C$.** Determine where the "standard" cycle begins. For sine, this is a zero crossing where the function is rising. For cosine, this is a maximum. The $x$-coordinate of this starting point is the phase shift $\\frac{C}{B}$, so $C = B \\times \\text{phase shift}$.

**Step 5 — Choose sine or cosine.** If the graph starts at a midline crossing, sine is more natural. If it starts at a peak or valley, cosine is more natural. Both choices produce correct equations — the phase shift adjusts accordingly.

The result is not unique. The equation $y = 3\\sin(2x - \\frac{\\pi}{2}) + 1$ and $y = 3\\cos(2x - \\pi) + 1$ could describe the same graph with different phase shifts. Any correct equation that matches all four parameters — amplitude, period, phase, and midline — is valid.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj11: {
    title: `Graphing by Hand: The Key-Point Method`,
    content: `The key-point method divides one period into four equal subintervals, identifies the function value at each division point, and connects these five points with the appropriate curve shape.

**For sine** ($y = \\sin(x)$ or transformed): the five key points within one period follow the pattern zero → maximum → zero → minimum → zero. Starting from the beginning of the cycle (accounting for phase shift), mark five equally spaced $x$-values covering one period. The $y$-values cycle through: midline, max, midline, min, midline.

**For cosine**: the pattern is maximum → zero → minimum → zero → maximum. Same spacing, different starting value.

**For tangent**: the pattern is asymptote → $-1$ (quarter point) → zero (midpoint) → $+1$ (three-quarter point) → asymptote. The curve is increasing throughout, passing through the midline at the center of the period.

To graph a transformed function like $y = -2\\sin\\left(\\frac{\\pi}{3}x - \\frac{\\pi}{6}\\right) + 1$:

1. Identify the parameters: $A = -2$, $B = \\frac{\\pi}{3}$, $C = \\frac{\\pi}{6}$, $D = 1$.
2. Compute period: $\\frac{2\\pi}{\\pi/3} = 6$. Phase shift: $\\frac{\\pi/6}{\\pi/3} = \\frac{1}{2}$. Midline: $y = 1$. Amplitude: $2$.
3. The cycle starts at $x = \\frac{1}{2}$ and ends at $x = \\frac{1}{2} + 6 = \\frac{13}{2}$.
4. Divide into four equal parts: $x = \\frac{1}{2}, 2, \\frac{7}{2}, 5, \\frac{13}{2}$.
5. Since $A < 0$ (inverted), the pattern becomes: midline → min → midline → max → midline, with $y$-values $1, -1, 1, 3, 1$.
6. Plot and connect with a smooth curve.

This method produces an accurate sketch without a calculator or graphing software. It works for any sinusoidal function, regardless of how many transformations are applied, because the key-point structure is invariant — only the locations and heights of the five points change.`,
    before: ``,
    after: ``,
    link: ``,
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
  title: `Visualizing Periodic Behavior`,
  content: `The [unit circle](!/trigonometry/unit-circle) defines the trigonometric functions numerically — for each angle, it assigns coordinates. Graphing these functions against the angle reveals their behavior over the entire real line: where they rise and fall, where they cross zero, where they blow up toward infinity, and how they repeat. The sine and cosine graphs are smooth, bounded waves — the same wave, in fact, displaced by a quarter period. The tangent graph is a family of steep curves separated by vertical asymptotes. The reciprocal functions — cosecant, secant, cotangent — inherit their shapes from the functions they invert, with asymptotes replacing zeros and U-shaped branches replacing peaks and valleys.

Beyond recognition, the central skill is transformation. The general sinusoidal form $y = A\\sin(Bx - C) + D$ encodes four modifications — amplitude, period, phase shift, and vertical shift — each controlled by a single parameter. Reading these parameters from a graph, or constructing a graph from a given equation, connects algebraic representation to geometric intuition. This connection runs through the entire subject: the [properties](!/trigonometry/properties) of the functions are visible on the graphs, the solutions to [equations](!/trigonometry/equations) correspond to intersections, and the solution intervals of [inequalities](!/trigonometry/inequalities) correspond to regions where one curve lies above or below another.`,
};



   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
          seoData: {
        title: "Trigonometric Graphs | Learn Math Class",
        description: "Learn to graph sine, cosine, tangent, and reciprocal functions. Master amplitude, period, phase shift, vertical shift, and the key-point method for graphing.",
        keywords: keyWords.join(", "),
        url: "/trigonometry/graphs",
         name: "Trigonometric Graphs"
      },

       }
    }
   }

export default function GraphsPage({seoData,sectionsContent , introContent, faqQuestions, schemas}) {


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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Trigonometric Graphs</h1>
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
