





// tables-optimized: v4 | 2026-05-24 | 4 tables (obj2 aggregation, obj4 comparison, obj8 comparison, obj10 summary capstone)
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import { tableHeaders } from '@/app/styles/theme'


export async function getStaticProps(){
const keyWords = [
  "limits calculus",
  "limit of a function",
  "evaluating limits",
  "limit rules",
  "one-sided limits",
  "two-sided limits",
  "limits at infinity",
  "infinite limits",
  "squeeze theorem",
  "limit does not exist",
  "continuity",
  "special limits",
  "indeterminate forms",
  "limit notation",
  "calculus foundations"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ─── TABLES ───────────────────────────────────────────────────────────────

// obj2 — aggregation: the three failure modes for limits
const obj2Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Failure mode</th>
      <th style="${tableHeaders.aggregation}">What happens</th>
      <th style="${tableHeaders.aggregation}">Canonical example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Oscillation</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">function bounces between values without settling on any single one</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sin(1/x) as x → 0</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Unbounded behavior</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">function grows without bound rather than approaching a finite value</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1/x² as x → 0 — described as an <a href="/calculus/limits/infinity" style="${linkStyle}">infinite limit</a>, but no finite L</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Direction-dependent</td>
      <td style="padding: 12px 15px; color: #34495e;">left-hand and right-hand limits give different values</td>
      <td style="padding: 12px 15px; color: #34495e;">a step function at the jump point</td>
    </tr>
  </tbody>
</table>
`

// obj4 — comparison: one-sided vs two-sided limits (synthesis after obj3+obj4)
const obj4Table = `
<table class="styled-table" style="border-collapse: collapse; width: 98%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Limit type</th>
      <th style="${tableHeaders.comparison}">Notation</th>
      <th style="${tableHeaders.comparison}">Direction of approach</th>
      <th style="${tableHeaders.comparison}">Exists when…</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/calculus/limits/one-sided" style="${linkStyle}">Left-hand limit</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim<sub>x → a⁻</sub> f(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x approaches a through values less than a only</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">values from below settle on a single L</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/calculus/limits/one-sided" style="${linkStyle}">Right-hand limit</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim<sub>x → a⁺</sub> f(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x approaches a through values greater than a only</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">values from above settle on a single L</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;"><a href="/calculus/limits/two-sided" style="${linkStyle}">Two-sided limit</a></td>
      <td style="padding: 12px 15px; color: #34495e;">lim<sub>x → a</sub> f(x)</td>
      <td style="padding: 12px 15px; color: #34495e;">x approaches a from both sides at once</td>
      <td style="padding: 12px 15px; color: #34495e;">both one-sided limits exist AND are equal</td>
    </tr>
  </tbody>
</table>
`

// obj8 — comparison: limits at infinity vs infinite limits
const obj8Table = `
<table class="styled-table" style="border-collapse: collapse; width: 98%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Concept</th>
      <th style="${tableHeaders.comparison}">Notation</th>
      <th style="${tableHeaders.comparison}">What x does</th>
      <th style="${tableHeaders.comparison}">What f does</th>
      <th style="${tableHeaders.comparison}">Asymptote it signals</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Limit at infinity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim<sub>x → ±∞</sub> f(x) = L</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">grows without bound</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">approaches a finite value L</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">horizontal asymptote y = L</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Infinite limit</td>
      <td style="padding: 12px 15px; color: #34495e;">lim<sub>x → a</sub> f(x) = ±∞</td>
      <td style="padding: 12px 15px; color: #34495e;">approaches a finite value a</td>
      <td style="padding: 12px 15px; color: #34495e;">grows without bound</td>
      <td style="padding: 12px 15px; color: #34495e;">vertical asymptote x = a</td>
    </tr>
  </tbody>
</table>
`

// obj10 — summary capstone: navigation map of the limits subtree
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 98%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Topic</th>
      <th style="${tableHeaders.summary}">What it covers</th>
      <th style="${tableHeaders.summary}">Key idea</th>
      <th style="${tableHeaders.summary}">Page</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/calculus/limits/two-sided" style="${linkStyle}">Two-sided limits</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the standard limit — x approaches a from both sides</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">exists iff both one-sided limits exist and agree</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">/calculus/limits/two-sided</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/calculus/limits/one-sided" style="${linkStyle}">One-sided limits</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">direction-specific approach: left only or right only</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">essential for piecewise functions and domain endpoints</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">/calculus/limits/one-sided</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/calculus/limits/rules" style="${linkStyle}">Limit rules</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">shortcuts for computing complex limits</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sum, product, quotient, constant multiple, and Squeeze Theorem</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">/calculus/limits/rules</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/calculus/limits/evaluating" style="${linkStyle}">Evaluating limits</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">handling indeterminate forms like 0/0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">factor, cancel, rationalize, transform until substitution works</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">/calculus/limits/evaluating</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/calculus/limits/special" style="${linkStyle}">Special limits</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">memorized building blocks for trig and exponential limits</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sin(x)/x → 1, (e<sup>x</sup>−1)/x → 1, (1 + 1/x)<sup>x</sup> → e</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">/calculus/limits/special</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/calculus/limits/infinity" style="${linkStyle}">Limits and infinity</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">limits at infinity (end behavior) and infinite limits (blowups)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">horizontal vs vertical asymptotes; dominant-term analysis</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">/calculus/limits/infinity</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;"><a href="/calculus/limits/continuity" style="${linkStyle}">Continuity</a></td>
      <td style="padding: 12px 15px; color: #34495e;">when a limit equals the function value</td>
      <td style="padding: 12px 15px; color: #34495e;">three conditions; classification of discontinuities; IVT</td>
      <td style="padding: 12px 15px; color: #34495e;">/calculus/limits/continuity</td>
    </tr>
  </tbody>
</table>
`

const sectionsContent = {
  // ─── /calculus/limits (hub) ───────────────────────────────────────────────
 
  obj0: {
    title: `Key Terms`,
    content: `
## Foundations
 
- [Limit](!/calculus/definitions#limit) — the value $f(x)$ approaches as $x$ approaches a point
- [One-Sided Limit](!/calculus/definitions#one_sided_limit) — limit from the left ($a^-$) or right ($a^+$) only
- [Continuity](!/calculus/definitions#continuity) — no breaks: $\\lim_{x \\to a} f(x) = f(a)$
- [Discontinuity](!/calculus/definitions#discontinuity) — a point where continuity fails
 
## Behavior
 
- [Indeterminate Form](!/calculus/definitions#indeterminate_form) — $\\frac{0}{0}$, $\\frac{\\infty}{\\infty}$, and similar forms requiring further analysis
- [Asymptote](!/calculus/definitions#asymptote) — a line the graph approaches at infinity or near a blowup`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
    link: '',
  },
 
  obj1: {
    title: `The Central Idea of a Limit`,
    content: `
A limit answers the question: what value does $f(x)$ approach as $x$ approaches $a$? The emphasis falls on behavior near the point, not at the point. The function value $f(a)$ might not exist, or it might differ from what the surrounding values suggest. The limit ignores $f(a)$ entirely and focuses only on the approach.

The notation

$$\\lim_{x \\to a} f(x) = L$$

states that $f(x)$ gets arbitrarily close to $L$ as $x$ gets sufficiently close to $a$. "Arbitrarily close" means closer than any positive distance you specify. "Sufficiently close" means there exists some neighborhood around $a$ where this closeness holds.

This definition captures something precise: no matter how tight a tolerance you demand around $L$, you can always find inputs near $a$ that produce outputs within that tolerance. The function values converge toward $L$ even if they never reach it.

Limits serve as the foundation for all of calculus. The derivative is defined as a limit of difference quotients. The definite integral is defined as a limit of Riemann sums. Continuity is defined by comparing limits to function values. Every major concept in calculus rests on this single idea of controlled approach.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `Limits That Fail to Exist`,
    content: `
Not every limit exists. When asking what value $f(x)$ approaches as $x \\to a$, sometimes there is no single answer. Three failure modes appear repeatedly.

## Oscillation

A function may bounce between values without settling. Consider $\\sin(1/x)$ as $x \\to 0$. As $x$ shrinks, the argument $1/x$ grows without bound, and the sine oscillates between $-1$ and $1$ infinitely often. No single value $L$ captures what the function approaches.

## Unbounded Behavior

A function may grow without bound rather than approach a finite value. When

$$\\lim_{x \\to a} f(x) = \\infty$$

we say the function has an [infinite limit](!/calculus/limits/infinity), but this means the limit in the usual finite sense does not exist. The notation describes unbounded growth, not convergence to a number.

## Left and Right Disagree

A function may approach different values depending on the direction of approach. If the [left-hand limit](!/calculus/limits/one-sided) yields one value and the [right-hand limit](!/calculus/limits/one-sided) yields another, no single number works for both. The two-sided limit does not exist.

Recognizing these failure modes is as important as computing limits that do exist. The type of failure reveals information about the function's behavior.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj3: {
    title: `Two-Sided Limits`,
    content: `
The standard limit notation

$$\\lim_{x \\to a} f(x) = L$$

requires $x$ to approach $a$ from both directions simultaneously. Values less than $a$ must yield function outputs approaching $L$, and values greater than $a$ must do the same. This is the [two-sided limit](!/calculus/limits/two-sided).

The existence condition is precise: a two-sided limit exists if and only if both one-sided limits exist and are equal. If

$$\\lim_{x \\to a^-} f(x) = L \\quad \\text{and} \\quad \\lim_{x \\to a^+} f(x) = L$$

then the two-sided limit equals $L$. If the one-sided limits differ, or if either fails to exist, the two-sided limit does not exist.

This requirement unifies behavior from both directions into a single value.

The limit symbol and its one-sided variants are catalogued among the [calculus symbols](!/math-symbols/calculus) together with the [LaTeX](!/latex) code for each, and the [mathematical keyboard](!/keyboard) lets you type them directly.
`,
    before: ``,
    after: ``,
    link: `/calculus/limits/two-sided`
  },
  obj4: {
    title: `One-Sided Limits`,
    content: `
Sometimes only one direction of approach matters—or the two directions behave differently. [One-sided limits](!/calculus/limits/one-sided) isolate each direction.

The left-hand limit uses a minus superscript:

$$\\lim_{x \\to a^-} f(x)$$

Here $x$ approaches $a$ through values less than $a$ only. The right-hand limit uses a plus superscript:

$$\\lim_{x \\to a^+} f(x)$$

Here $x$ approaches $a$ through values greater than $a$ only.

One-sided limits are essential for piecewise functions, where different formulas apply on different intervals. At the boundary between pieces, the left-hand and right-hand limits may differ. They also arise naturally at domain endpoints, where only one direction of approach is possible.

The two-sided limit exists precisely when both one-sided limits exist and match.
`,
    before: ``,
    after: ``,
    link: `/calculus/limits/one-sided`
  },
  obj5: {
    title: `Limit Rules`,
    content: `
Computing limits directly from definitions is tedious. [Limit rules](!/calculus/limits/rules) provide shortcuts by breaking complex expressions into simpler pieces.

If both $\\lim_{x \\to a} f(x)$ and $\\lim_{x \\to a} g(x)$ exist, then:

$$\\lim_{x \\to a} [f(x) + g(x)] = \\lim_{x \\to a} f(x) + \\lim_{x \\to a} g(x)$$

$$\\lim_{x \\to a} [f(x) \\cdot g(x)] = \\lim_{x \\to a} f(x) \\cdot \\lim_{x \\to a} g(x)$$

$$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{\\lim_{x \\to a} f(x)}{\\lim_{x \\to a} g(x)} \\quad \\text{provided } \\lim_{x \\to a} g(x) \\neq 0$$

Similar rules hold for differences, constant multiples, and powers. The critical requirement: the component limits must exist. When they don't—when you encounter indeterminate forms like $0/0$—these rules cannot be applied directly.

The [Squeeze Theorem](!/calculus/limits/rules) offers another approach. If $g(x) \\leq f(x) \\leq h(x)$ near $a$ and both $g$ and $h$ approach the same limit $L$, then $f$ must also approach $L$. The function is trapped between two bounds converging to the same value.
`,
    before: ``,
    after: ``,
    link: `/calculus/limits/rules`
  },
  obj6: {
    title: `Evaluating Limits`,
    content: `
The first technique to try is direct substitution: plug $a$ into $f(x)$ and see what happens. For polynomials, this always works. For rational functions, it works whenever the denominator is nonzero at $a$.

When substitution yields an indeterminate form—most commonly $0/0$—the expression must be transformed. [Evaluating limits](!/calculus/limits/evaluating) in these cases requires algebraic manipulation.

## Factoring

If both numerator and denominator vanish at $a$, they share a common factor of $(x - a)$. Factor it out, cancel, and substitute again:

$$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x-2} = \\lim_{x \\to 2} (x + 2) = 4$$

## Rationalizing

When radicals appear, multiply by the conjugate to eliminate them. The difference of squares identity transforms the expression into one where cancellation is possible.

The goal in every case is to rewrite the expression so that direct substitution produces a determinate result.
`,
    before: ``,
    after: ``,
    link: `/calculus/limits/evaluating`
  },
  obj7: {
    title: `Special Limits`,
    content: `
Certain limits appear so frequently that memorizing them pays dividends. These [special limits](!/calculus/limits/special) cannot be evaluated by substitution—each gives an indeterminate form—but their values are well established.

The fundamental trigonometric limit:

$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$

This holds when $x$ is measured in radians. It underlies the derivatives of sine and cosine.

The fundamental exponential limit:

$$\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$$

This defines the derivative of $e^x$ at $x = 0$.

The definition of $e$ itself emerges from a limit:

$$\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e$$

These results serve as building blocks for evaluating more complex expressions.
`,
    before: ``,
    after: ``,
    link: `/calculus/limits/special`
  },
  obj8: {
    title: `Limits and Infinity`,
    content: `
Infinity enters limits in two distinct ways. [Limits at infinity](!/calculus/limits/infinity) ask what happens to $f(x)$ as $x$ grows without bound:

$$\\lim_{x \\to \\infty} f(x) \\quad \\text{or} \\quad \\lim_{x \\to -\\infty} f(x)$$

These describe end behavior. When such a limit equals a finite value $L$, the line $y = L$ is a horizontal asymptote.

[Infinite limits](!/calculus/limits/infinity) describe functions that grow without bound as $x$ approaches a finite value:

$$\\lim_{x \\to a} f(x) = \\infty \\quad \\text{or} \\quad \\lim_{x \\to a} f(x) = -\\infty$$

When this occurs, the line $x = a$ is a vertical asymptote.

For rational functions, dominant term analysis determines behavior at infinity. Divide numerator and denominator by the highest power of $x$ appearing in the denominator, then observe which terms vanish and which remain.
`,
    before: ``,
    after: ``,
    link: `/calculus/limits/infinity`
  },
  obj9: {
    title: `Continuity`,
    content: `
A function is [continuous](!/calculus/limits/continuity) at $x = a$ when the limit equals the function value:

$$\\lim_{x \\to a} f(x) = f(a)$$

This single equation encodes three requirements. First, $f(a)$ must be defined—the function must have a value at $a$. Second, the limit must exist—$f(x)$ must approach some definite value as $x \\to a$. Third, these two values must match.

Failure of any condition creates a discontinuity. A hole in the graph (removable discontinuity) occurs when the limit exists but differs from the function value or the function is undefined. A jump discontinuity occurs when left and right limits differ. An infinite discontinuity occurs when the function blows up.

The Intermediate Value Theorem guarantees that continuous functions on closed intervals attain every value between their endpoints. This result has profound consequences for proving that equations have solutions.
`,
    before: ``,
    after: ``,
    link: `/calculus/limits/continuity`
  },
  obj10: {
    title: `Summary: Navigating the Limits Subtree`,
    content: `
The sections above introduce the foundational ideas; each topic gets a dedicated page that develops the techniques, examples, and edge cases more fully. The table below collects the seven leaf pages in a suggested reading order — from the basic one-sided / two-sided distinction through the computational rules and evaluation techniques, on to special limits, behavior at infinity, and finally continuity. Each row pairs a topic with its key idea and a link to the page where the detail lives.
`,
    before: ``,
    after: ``,
    link: ``
  }
};



const introContent = {
  id: "intro",
  title: `The Language of Approaching`,
  content: `
Calculus begins with a deceptively simple question: what value does a function approach as its input gets closer and closer to some target? The answer—a limit—captures behavior near a point without requiring the function to actually reach that point. This distinction matters. A function might have a hole at $x = 2$, yet still approach a perfectly well-defined value as $x$ moves toward 2 from either side.

Limits formalize the intuition of "getting arbitrarily close." The notation

$$\\lim_{x \\to a} f(x) = L$$

means that $f(x)$ can be made as close to $L$ as desired by taking $x$ sufficiently close to $a$. The function need not be defined at $a$, and even if it is, the value $f(a)$ plays no role in determining the limit. Only the approach matters.

This concept underpins everything that follows in calculus. Derivatives measure instantaneous rates of change through limits. Integrals accumulate quantities through limits. Continuity is defined by limits. Understanding limits thoroughly is not optional preparation—it is the foundation on which the entire subject rests.
`
};

// FAQ pass: cut all seven. Every topic here has a dedicated subpage that owns
// it — rules, evaluating, infinity, continuity, one-sided, two-sided, special —
// and the definition question is answered by the h2 "The Central Idea of a
// Limit". Invented three the hub genuinely owns: the why-limits-matter framing
// and two confusions from "Limits That Fail to Exist", the one section of this
// subtree with no dedicated page of its own.
const faqQuestions = {
  obj1: {
    question: "Why are limits important in calculus?",
    answer: "Because every major construction in calculus is defined as a limit. The derivative is the limit of difference quotients as the interval shrinks toward zero. The definite integral is the limit of Riemann sums as the partition is refined. Continuity is defined by comparing a limit to a function value. Without limits, none of these definitions can be stated precisely.",
    sectionId: "1"
  },
  obj2: {
    question: "Does a function have to be defined at a point for the limit to exist?",
    answer: "No. A limit describes behavior near a point, not at it. The value f(a) may be undefined, or defined but different from the limit, and the limit is unaffected either way. The function (x² − 4)/(x − 2) is undefined at x = 2, yet its limit there is 4. The limit ignores f(a) entirely and looks only at the approach.",
    sectionId: "1"
  },
  obj3: {
    question: "If a limit equals infinity, does the limit exist?",
    answer: "Not in the usual finite sense. Writing lim f(x) = ∞ records that the function grows without bound, which describes how the limit fails rather than a value it reaches. The notation still carries information, since it distinguishes unbounded growth from oscillation, the other common failure mode. See [limits at infinity](!/calculus/limits/infinity) for the full treatment.",
    sectionId: "2"
  }
}



const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Limits in Calculus",
    "description": "Master limits in calculus: definition, one-sided and two-sided limits, limit rules, evaluation techniques, special limits, limits at infinity, and continuity. The foundation of derivatives and integrals.",
    "url": "https://www.learnmathclass.com/calculus/limits",
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
      "name": "Limits in Calculus"
    },
    "teaches": [
      "Definition of limits",
      "One-sided and two-sided limits",
      "When limits fail to exist",
      "Limit rules and Squeeze Theorem",
      "Evaluating indeterminate forms",
      "Special trigonometric and exponential limits",
      "Limits at infinity and asymptotes",
      "Continuity and the Intermediate Value Theorem",
      "Navigation map of the limits subtree"
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
        "name": "Calculus",
        "item": "https://www.learnmathclass.com/calculus"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Limits",
        "item": "https://www.learnmathclass.com/calculus/limits"
      }
    ]
  }
}



   return {
  props: {
    sectionsContent,
    introContent,
    obj2Table,
    obj4Table,
    obj8Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Limits: Definition, Rules & Evaluation Techniques | Learn Math Class",
      description: "Master limits in calculus: definition, one-sided and two-sided limits, limit rules, evaluation techniques, special limits, limits at infinity, and continuity. The foundation of derivatives and integrals.",
      keywords: keyWords.join(", "),
      url: "/calculus/limits",
      name: "Limits in Calculus"
    },
  }
}
   }
export default function LimitsPage({seoData, sectionsContent, introContent, obj2Table, obj4Table, obj8Table, summaryTable, faqQuestions, schemas}) {

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
        ]
    },
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Limits FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Limits in Calculus</h1>
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