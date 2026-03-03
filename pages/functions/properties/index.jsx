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
    'properties of functions',
    'even odd functions',
    'function symmetry',
    'one-to-one function',
    'increasing decreasing functions',
    'function continuity',
    'asymptotes',
    'end behavior of functions',
    'local extrema',
    'function zeros',
    'monotonic functions',
    'concavity',
    'bounded functions',
    'periodic functions',
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
    title: `Even and Odd Functions`,
    content: `A function is even if $f(-x) = f(x)$ for every $x$ in its [domain](!/functions/domain). Replacing $x$ with $-x$ leaves the output unchanged. The [graph](!/functions/graphs) is symmetric about the $y$-axis — the left half mirrors the right.

The function $f(x) = x^2$ is even: $f(-x) = (-x)^2 = x^2 = f(x)$. So are $f(x) = |x|$, $f(x) = x^4$, and $f(x) = \\cos(x)$.

A function is odd if $f(-x) = -f(x)$ for every $x$ in its domain. Replacing $x$ with $-x$ negates the output. The graph is symmetric about the origin — rotating it $180°$ around the origin produces the same curve.

The function $f(x) = x^3$ is odd: $f(-x) = (-x)^3 = -x^3 = -f(x)$. So are $f(x) = x$, $f(x) = x^5$, and $f(x) = \\sin(x)$.

To test algebraically: substitute $-x$ for $x$, simplify, and compare to $f(x)$ and $-f(x)$. If the result equals $f(x)$, the function is even. If it equals $-f(x)$, the function is odd. If neither, the function is neither even nor odd.

Most functions fall into the third category. The function $f(x) = x^2 + x$ satisfies $f(-x) = x^2 - x$, which equals neither $f(x)$ nor $-f(x)$.

For a function to be even or odd, its domain must be symmetric about the origin — if $x$ is in the domain, so is $-x$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Symmetry`,
    content: `Symmetry describes when one part of a graph determines another through reflection or rotation.

A graph symmetric about the $y$-axis has the property that the point $(x, y)$ lies on the graph if and only if $(-x, y)$ does. Every point on the right has a mirror image on the left. This is the graphical signature of even functions.

A graph symmetric about the origin has the property that $(x, y)$ lies on the graph if and only if $(-x, -y)$ does. Every point has a counterpart obtained by rotating $180°$ around the origin. This is the graphical signature of odd functions.

A graph symmetric about the $x$-axis would have $(x, y)$ on the graph whenever $(x, -y)$ is. But such a curve fails the vertical line test — it cannot represent a function, since one $x$-value would correspond to two $y$-values.

Symmetry about other vertical lines is possible. The parabola $f(x) = (x - 3)^2$ is symmetric about the line $x = 3$. Its vertex lies on this axis of symmetry, and the graph is a mirror image on either side.

Recognizing symmetry simplifies [graphing](!/functions/graphs). For an even function, plotting the right half determines the left. For an odd function, plotting one portion determines the symmetric portion.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `One-to-One Functions`,
    content: `A function is one-to-one (or injective) if different inputs always produce different outputs. No two $x$-values share the same $y$-value. Equivalently, if $f(a) = f(b)$, then $a = b$.

The function $f(x) = 2x + 5$ is one-to-one. If $2a + 5 = 2b + 5$, then $a = b$. Every output comes from exactly one input.

The function $f(x) = x^2$ is not one-to-one on $(-\\infty, \\infty)$. Both $f(3) = 9$ and $f(-3) = 9$ — two different inputs produce the same output.

The horizontal line test identifies one-to-one functions graphically. If every horizontal line intersects the graph at most once, the function is one-to-one. If any horizontal line crosses twice or more, it is not.

One-to-one functions are precisely those that have [inverse functions](!/functions/inverse). Because each output comes from a unique input, the process can be reversed — given an output, identify the input that produced it. This reversal defines the inverse.

A function that is not one-to-one can become one-to-one by restricting its domain. The function $f(x) = x^2$ restricted to $[0, \\infty)$ is one-to-one: positive inputs produce distinct outputs. This restriction enables defining $\\sqrt{x}$ as its inverse.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Onto Functions`,
    content: `A function is onto (or surjective) if every element of the codomain is actually achieved as an output. The [range](!/functions/range) equals the codomain — nothing in the target set is missed.

Whether a function is onto depends on how the codomain is defined. The function $f(x) = x^2$ from $\\mathbb{R}$ to $\\mathbb{R}$ is not onto: negative numbers are in the codomain $\\mathbb{R}$ but never appear as outputs. The same function from $\\mathbb{R}$ to $[0, \\infty)$ is onto: every non-negative number is the square of some real number.

The horizontal line test has a variant for onto: every horizontal line at a $y$-value in the codomain must intersect the graph at least once.

The function $f(x) = e^x$ from $\\mathbb{R}$ to $\\mathbb{R}$ is not onto — outputs are always positive. From $\\mathbb{R}$ to $(0, \\infty)$, it is onto — every positive number is $e^x$ for some $x$.

The function $f(x) = x^3$ from $\\mathbb{R}$ to $\\mathbb{R}$ is onto. Every real number is the cube of some real number.

In elementary algebra, codomain is often implicitly taken to be all real numbers, and the focus falls on range rather than the onto property. The distinction becomes important in abstract mathematics and formal definitions.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Bijective Functions`,
    content: `A function is bijective if it is both one-to-one and onto. Every element of the codomain is achieved exactly once. There is a perfect pairing between domain and codomain — each input corresponds to exactly one output, and each output corresponds to exactly one input.

The function $f(x) = 3x - 7$ from $\\mathbb{R}$ to $\\mathbb{R}$ is bijective. It is one-to-one: different inputs give different outputs. It is onto: every real number is $3x - 7$ for some $x$.

The function $f(x) = x^2$ from $\\mathbb{R}$ to $\\mathbb{R}$ is neither one-to-one nor onto, hence not bijective.

The function $f(x) = x^2$ from $[0, \\infty)$ to $[0, \\infty)$ is bijective. Restricting the domain made it one-to-one; restricting the codomain to match the range made it onto.

Bijective functions have [inverses](!/functions/inverse) that are also bijective. The inverse reverses the pairing: if $f(a) = b$, then $f^{-1}(b) = a$. Both functions establish the same one-to-one correspondence, just read in opposite directions.

Bijections are fundamental in counting arguments. Two sets have the same size if and only if there exists a bijection between them.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Increasing and Decreasing`,
    content: `A function is increasing on an interval if larger inputs produce larger outputs throughout that interval. For any $a$ and $b$ in the interval with $a < b$, we have $f(a) < f(b)$. The graph rises from left to right.

A function is decreasing on an interval if larger inputs produce smaller outputs. For $a < b$, we have $f(a) > f(b)$. The graph falls from left to right.

Strictly increasing and strictly decreasing emphasize that the inequality is strict — equal outputs are not allowed. Non-decreasing means $f(a) \\leq f(b)$ when $a < b$, permitting flat segments. Non-increasing means $f(a) \\geq f(b)$, also permitting flat segments.

The function $f(x) = x^3$ is strictly increasing on $(-\\infty, \\infty)$. The function $f(x) = -x$ is strictly decreasing everywhere.

The function $f(x) = x^2$ is decreasing on $(-\\infty, 0]$ and increasing on $[0, \\infty)$. It switches direction at the vertex.

Increasing and decreasing intervals are expressed using $x$-values, describing portions of the domain. The statement "increasing on $(2, 5)$" means that within this interval, the graph rises.

Determining these intervals from a graph is visual: trace the curve and note where it rises, where it falls. From an equation, calculus provides systematic methods; in algebra, analyzing the structure of the formula often suffices.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Monotonic Functions`,
    content: `A function is monotonic if it moves in only one direction — always increasing or always decreasing — across its entire domain. It never reverses course.

A monotonically increasing function satisfies $a < b \\implies f(a) \\leq f(b)$ for all $a, b$ in the domain. A strictly monotonically increasing function satisfies $a < b \\implies f(a) < f(b)$.

A monotonically decreasing function satisfies $a < b \\implies f(a) \\geq f(b)$. A strictly monotonically decreasing function satisfies $a < b \\implies f(a) > f(b)$.

Examples of monotonic functions: $f(x) = e^x$ (strictly increasing), $f(x) = \\ln(x)$ (strictly increasing on its domain), $f(x) = -x^3$ (strictly decreasing), $f(x) = 3$ (constant, hence both non-decreasing and non-increasing).

Monotonic functions are always one-to-one (unless constant). Because they never produce the same output twice (in the strict case), they have [inverses](!/functions/inverse). This is why exponential functions have logarithmic inverses — both are strictly monotonic.

Many functions are monotonic on pieces of their domain but not overall. The function $f(x) = \\sin(x)$ increases on some intervals and decreases on others. It is not monotonic on $\\mathbb{R}$, but it is strictly increasing on $[-\\pi/2, \\pi/2]$, enabling the definition of $\\arcsin$ on that restricted domain.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Boundedness`,
    content: `A function is bounded above if its outputs never exceed some finite value. There exists a number $M$ such that $f(x) \\leq M$ for all $x$ in the domain. The graph never rises above the horizontal line $y = M$.

A function is bounded below if its outputs are never less than some finite value. There exists a number $m$ such that $f(x) \\geq m$ for all $x$ in the domain. The graph never falls below $y = m$.

A function is bounded if it is bounded both above and below — its outputs stay within a finite strip.

The function $f(x) = \\sin(x)$ is bounded: $-1 \\leq \\sin(x) \\leq 1$ for all $x$. The function $f(x) = x^2$ is bounded below (by $0$) but not above — it grows without limit. The function $f(x) = x$ is unbounded in both directions.

The function $f(x) = \\dfrac{1}{1 + x^2}$ is bounded: $0 < f(x) \\leq 1$ for all $x$.

Boundedness constrains the [range](!/functions/range). A function bounded above has range with a finite supremum; a function bounded below has range with a finite infimum. A bounded function has range contained in some finite interval.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Local Extrema`,
    content: `A local maximum occurs at $x = c$ if $f(c) \\geq f(x)$ for all $x$ near $c$. The function reaches a peak at $c$ relative to its immediate neighborhood — it may be exceeded elsewhere, but not nearby.

A local minimum occurs at $x = c$ if $f(c) \\leq f(x)$ for all $x$ near $c$. The function reaches a valley at $c$ relative to its immediate neighborhood.

Together, local maxima and local minima are called local extrema.

On a [graph](!/functions/graphs), local maxima appear as peaks — points where the curve rises and then falls. Local minima appear as valleys — points where the curve falls and then rises.

The function $f(x) = x^3 - 3x$ has a local maximum at $x = -1$ (where $f(-1) = 2$) and a local minimum at $x = 1$ (where $f(1) = -2$). Between these points, the function decreases.

Local extrema occur at turning points — places where the function switches between increasing and decreasing. They can also occur at endpoints of a closed domain, where the function might achieve a high or low relative to the interior.

Finding local extrema algebraically is a central problem in calculus. In algebra, analyzing the structure of specific function types — vertices of parabolas, critical points of cubics — provides the answer.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Absolute Extrema`,
    content: `The absolute maximum (or global maximum) of a function is the largest value it achieves anywhere on its domain. If $f(c)$ is the absolute maximum, then $f(c) \\geq f(x)$ for every $x$ in the domain.

The absolute minimum (or global minimum) is the smallest value achieved anywhere on the domain. If $f(c)$ is the absolute minimum, then $f(c) \\leq f(x)$ for every $x$ in the domain.

Absolute extrema are the overall champions — the highest peak and lowest valley across the entire function, not just in a neighborhood.

Not every function has absolute extrema. The function $f(x) = x$ on $(-\\infty, \\infty)$ has no maximum or minimum — it extends without bound in both directions. The function $f(x) = 1/x$ on $(0, 1)$ approaches infinity as $x \\to 0^+$ and approaches $1$ as $x \\to 1^-$, but achieves neither limit.

On a closed, bounded interval, a continuous function always achieves both an absolute maximum and an absolute minimum. This is the Extreme Value Theorem. The extrema occur either at local extrema within the interval or at the endpoints.

To find absolute extrema on $[a, b]$: identify all local extrema in $(a, b)$, evaluate the function at these points and at the endpoints $a$ and $b$, and compare to find the largest and smallest values.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `Continuity`,
    content: `A function is continuous at a point if its graph has no break there — no jump, no hole, no explosion to infinity. Intuitively, the graph can be drawn through that point without lifting the pencil.

Formally, $f$ is continuous at $x = c$ if three conditions hold: $f(c)$ is defined, the limit of $f(x)$ as $x \\to c$ exists, and the limit equals $f(c)$. The output at $c$ matches what the nearby outputs predict.

A function is continuous on an interval if it is continuous at every point in that interval. A function is continuous everywhere if it is continuous on its entire domain.

Polynomials are continuous everywhere. Rational functions are continuous wherever defined — at every point except where the denominator is zero. Exponential, logarithmic, and trigonometric functions are continuous on their domains.

Continuity guarantees certain behaviors. A continuous function on a closed interval achieves its maximum and minimum values. A continuous function that is negative at one point and positive at another must cross zero somewhere in between (Intermediate Value Theorem).

Most functions encountered in elementary mathematics are continuous on their domains. Discontinuities, when they occur, are special events worth noting and classifying.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj12: {
    title: `Types of Discontinuities`,
    content: `When continuity fails, the type of failure is classified by what goes wrong.

A removable discontinuity (or hole) occurs when the limit exists but the function is either undefined or has a different value at that point. The graph has a single missing point — a hole that could be "filled in" by redefining the function there. The function $f(x) = \\dfrac{x^2 - 1}{x - 1}$ has a removable discontinuity at $x = 1$.

A jump discontinuity occurs when the left-hand limit and right-hand limit both exist but differ. The function jumps from one value to another. [Piecewise functions](!/functions/piecewise) often have jump discontinuities at the boundaries between pieces.

An infinite discontinuity occurs when the function approaches infinity (or negative infinity) as $x$ approaches some value. This manifests as a vertical asymptote. The function $f(x) = 1/x$ has an infinite discontinuity at $x = 0$.

An oscillating discontinuity occurs when the function oscillates infinitely often near a point without settling to any limit. The function $f(x) = \\sin(1/x)$ near $x = 0$ is the classic example.

Identifying the type of discontinuity guides how to handle it — removable discontinuities can be eliminated by redefining the function; others cannot.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj13: {
    title: `Asymptotes`,
    content: `An asymptote is a line that a graph approaches but typically never reaches. Asymptotes describe limiting behavior — what happens as the function extends toward infinity or toward an undefined point.

A vertical asymptote is a vertical line $x = a$ that the graph approaches as outputs explode toward $\\pm\\infty$. The function $f(x) = 1/(x - 2)$ has a vertical asymptote at $x = 2$. As $x \\to 2$, the outputs grow without bound.

A horizontal asymptote is a horizontal line $y = L$ that the graph approaches as $x \\to \\infty$ or $x \\to -\\infty$. The function $f(x) = 1/x$ has horizontal asymptote $y = 0$. As $x$ grows large, the outputs approach zero.

An oblique (or slant) asymptote is a non-horizontal line $y = mx + b$ that the graph approaches as $x \\to \\pm\\infty$. This occurs in rational functions when the numerator's degree exceeds the denominator's degree by exactly one. The function $f(x) = \\dfrac{x^2 + 1}{x}$ has oblique asymptote $y = x$.

A function can cross a horizontal or oblique asymptote; it describes limiting behavior, not a barrier. A function never crosses a vertical asymptote — the function is undefined there.

Asymptotes shape the large-scale structure of a graph, providing guidelines the curve follows at its extremes.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj14: {
    title: `End Behavior`,
    content: `End behavior describes how $f(x)$ behaves as $x$ moves toward positive or negative infinity — the far right and far left of the [graph](!/functions/graphs).

The notation $f(x) \\to L$ as $x \\to \\infty$ means the outputs approach the value $L$ as $x$ grows without bound. If $L$ is finite, this indicates a horizontal asymptote.

The notation $f(x) \\to \\infty$ as $x \\to \\infty$ means the outputs grow without bound — the graph rises indefinitely on the right.

For polynomials, end behavior is determined by the leading term. The function $f(x) = 3x^4 - 5x^2 + 2$ behaves like $3x^4$ for large $|x|$: rising on both ends since the degree is even and the leading coefficient is positive.

For rational functions, compare the degrees of numerator and denominator. If the numerator has lower degree, $f(x) \\to 0$. If degrees are equal, $f(x)$ approaches the ratio of leading coefficients. If the numerator has higher degree, $f(x)$ is unbounded.

For exponential functions, $a^x \\to \\infty$ as $x \\to \\infty$ when $a > 1$, and $a^x \\to 0$ as $x \\to \\infty$ when $0 < a < 1$.

End behavior provides the frame for the entire graph — knowing where the curve ultimately goes constrains what can happen in between.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj15: {
    title: `Periodicity`,
    content: `A function is periodic if it repeats its values at regular intervals. There exists a positive number $p$ such that $f(x + p) = f(x)$ for all $x$ in the domain. The graph shows the same pattern cycling endlessly.

The smallest such $p$ is called the fundamental period (or simply the period). The function $f(x) = \\sin(x)$ has period $2\\pi$: the wave from $0$ to $2\\pi$ repeats identically thereafter.

Periodic functions have bounded [range](!/functions/range) — the repeating pattern confines outputs to a fixed interval. The sine and cosine functions have range $[-1, 1]$.

The amplitude measures half the vertical distance between maximum and minimum values. For $f(x) = \\sin(x)$, the amplitude is $1$. For $f(x) = 3\\sin(x)$, the amplitude is $3$.

Periodic functions model cyclic phenomena: sound waves, tides, seasons, heartbeats, alternating current. The period corresponds to the duration of one cycle; the amplitude corresponds to the intensity of oscillation.

Not all functions are periodic. Polynomials, exponentials, and logarithms never repeat exactly. Linear combinations of periodic functions with incommensurable periods can produce non-periodic behavior.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj16: {
    title: `Zeros and Roots`,
    content: `A zero of a function is an input value where the output equals zero: $f(c) = 0$. Zeros are also called roots of the function.

Graphically, zeros are $x$-intercepts — points where the curve crosses or touches the horizontal axis.

Finding zeros means solving the equation $f(x) = 0$. For $f(x) = x^2 - 5x + 6$, the zeros are the solutions to $x^2 - 5x + 6 = 0$. Factoring gives $(x - 2)(x - 3) = 0$, so the zeros are $x = 2$ and $x = 3$.

The multiplicity of a zero refers to how many times the corresponding factor appears. If $f(x) = (x - 2)^3(x + 1)$, then $x = 2$ is a zero of multiplicity $3$ and $x = -1$ is a zero of multiplicity $1$.

Multiplicity affects graph behavior. A zero of odd multiplicity crosses the axis — the graph passes through. A zero of even multiplicity touches the axis and turns back — the graph bounces off.

Zeros are fundamental in equation solving, factoring, and sign analysis. Knowing where the function equals zero divides the domain into intervals where the function is positive or negative.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj17: {
    title: `Average Rate of Change`,
    content: `The average rate of change of a function over an interval $[a, b]$ measures how much the output changes per unit of input:

$$\\text{Average rate of change} = \\frac{f(b) - f(a)}{b - a}$$

This is the slope of the secant line connecting the points $(a, f(a))$ and $(b, f(b))$ on the [graph](!/functions/graphs).

For $f(x) = x^2$ on $[1, 3]$:

$$\\frac{f(3) - f(1)}{3 - 1} = \\frac{9 - 1}{2} = 4$$

The function increases by an average of $4$ units in output for each unit of input over this interval.

Average rate of change has units: output units per input unit. If $f(t)$ gives position in meters after $t$ seconds, the average rate of change is average velocity in meters per second.

A positive average rate indicates overall increase over the interval. A negative rate indicates overall decrease. Zero means the function returns to its starting value — though it may have varied in between.

Average rate of change over shrinking intervals approaches the instantaneous rate of change — the derivative — which is the focus of calculus. In algebra, the average rate provides a coarse measure of how fast a function changes.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj18: {
    title: `Concavity`,
    content: `Concavity describes how a curve bends — whether it curves upward like a bowl or downward like an arch.

A function is concave up on an interval if its graph bends upward: it lies above its tangent lines, and the rate of change is increasing. A concave-up curve holds water if imagined as a bowl.

A function is concave down on an interval if its graph bends downward: it lies below its tangent lines, and the rate of change is decreasing. A concave-down curve spills water.

An inflection point is where concavity changes — where the curve switches from bending up to bending down, or vice versa. The cubic $f(x) = x^3$ has an inflection point at the origin: concave down for $x < 0$, concave up for $x > 0$.

Visually, concavity is detected by the curve's shape. A parabola opening upward is entirely concave up. A parabola opening downward is entirely concave down. Cubics and higher-degree polynomials may have regions of both types.

Concavity affects how well a linear approximation fits a curve. Concave-up regions curve away from tangent lines in one direction; concave-down regions curve away in the other.

Full analysis of concavity uses calculus — specifically, the second derivative. In algebra, recognizing concavity provides qualitative understanding of graph shape.`,
    before: ``,
    after: ``,
    link: '',
  },

}


 const introContent = {
  id: "intro",
  title: "The Character of Functions",
  content: `Functions differ not just in their formulas but in their fundamental character. Some are symmetric, others lopsided. Some climb steadily upward, others oscillate endlessly. Some approach boundaries they never cross, others explode toward infinity.

These traits — symmetry, monotonicity, boundedness, continuity, and others — are the properties that classify functions and predict their behavior. Knowing that a function is one-to-one guarantees an [inverse](!/functions/inverse) exists. Knowing that a function is periodic reveals its repetitive structure. Each property answers a specific question about how the function behaves.`
}



  const faqQuestions = {
    q1: {
      question: "How do you determine if a function is even or odd?",
      answer: "To test algebraically, substitute -x for x and simplify. If the result equals f(x), the function is even and symmetric about the y-axis. If it equals -f(x), the function is odd and symmetric about the origin. If neither condition holds, the function is neither even nor odd."
    },
    q2: {
      question: "What is a one-to-one function and why does it matter?",
      answer: "A function is one-to-one (injective) if different inputs always produce different outputs — no two x-values share the same y-value. This property matters because one-to-one functions are precisely those that have inverse functions. The horizontal line test identifies them graphically: if every horizontal line intersects the graph at most once, the function is one-to-one."
    },
    q3: {
      question: "What is the difference between local and absolute extrema?",
      answer: "A local extremum is a peak or valley relative to nearby points — the function is higher or lower than its immediate neighbors, but may be exceeded elsewhere. An absolute extremum is the overall highest or lowest value across the entire domain. On a closed bounded interval, a continuous function always achieves both an absolute maximum and minimum by the Extreme Value Theorem."
    },
    q4: {
      question: "What are the different types of asymptotes?",
      answer: "Vertical asymptotes are vertical lines x = a where the function's outputs grow without bound. Horizontal asymptotes are horizontal lines y = L that the graph approaches as x tends to positive or negative infinity. Oblique (slant) asymptotes are non-horizontal lines the graph approaches at its extremes, occurring in rational functions when the numerator's degree exceeds the denominator's by exactly one."
    },
    q5: {
      question: "What does it mean for a function to be continuous?",
      answer: "A function is continuous at a point if its graph has no break there — no jump, hole, or explosion to infinity. Formally, f is continuous at x = c if f(c) is defined, the limit of f(x) as x approaches c exists, and the limit equals f(c). Polynomials are continuous everywhere, while rational functions are continuous wherever defined — at every point except where the denominator is zero."
    },
  }

  const seoData = {
    title: "Properties of Functions | Learn Math Class",
    description: "Learn properties of functions: even and odd symmetry, one-to-one, monotonicity, continuity, asymptotes, end behavior, extrema, zeros, concavity, and more.",
    keywords: keyWords.join(", "),
    url: "/functions/properties",
    name: "Properties of Functions",
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
        "Even and odd function symmetry",
        "One-to-one and onto functions",
        "Increasing, decreasing, and monotonic functions",
        "Continuity and types of discontinuities",
        "Asymptotes and end behavior",
        "Local and absolute extrema",
      ],
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
        },
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
         faqQuestions,
         schemas,
          seoData: {
        title: "Properties of Functions | Learn Math Class",
        description: "Learn properties of functions: even and odd symmetry, one-to-one, monotonicity, continuity, asymptotes, end behavior, extrema, zeros, concavity, and more.",
        keywords: keyWords.join(", "),
        url: "/functions/properties",
         name: "Properties of Functions"
      },
       }
    }
   }

export default function PropertiesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
    {
        id:'14',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
        ]
    },
    {
        id:'15',
        title:sectionsContent.obj15.title,
        link:sectionsContent.obj15.link,
        content:[
          sectionsContent.obj15.content,
        ]
    },
    {
        id:'16',
        title:sectionsContent.obj16.title,
        link:sectionsContent.obj16.link,
        content:[
          sectionsContent.obj16.content,
        ]
    },
    {
        id:'17',
        title:sectionsContent.obj17.title,
        link:sectionsContent.obj17.link,
        content:[
          sectionsContent.obj17.content,
        ]
    },
    {
        id:'18',
        title:sectionsContent.obj18.title,
        link:sectionsContent.obj18.link,
        content:[
          sectionsContent.obj18.content,
        ]
    },
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Properties of Functions</h1>
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
