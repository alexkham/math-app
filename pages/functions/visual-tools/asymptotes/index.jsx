

import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// Canonical per-family explanations live in getStaticProps below (SSR/SEO-visible);
// the component renders them as the info panel's "Family" tab.
import FunctionAsymptotes from '../../../../app/components/functions/asymptotes/FunctionAsymptotes'
import asymDiagrams from '../../../../app/components/functions/asymptotes/functionAsymptotesDiagrams'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'


export async function getStaticProps(){

  const keyWords = [
    'asymptotes',
    'function asymptotes',
    'vertical asymptote',
    'horizontal asymptote',
    'oblique asymptote',
    'slant asymptote',
    'asymptote visualizer',
    'how to find asymptotes',
    'rational function asymptotes',
    'one-sided limits',
    'limit at infinity',
    'asymptotes of tan',
    'asymptotes of logarithm',
    'asymptotes of arctan',
    'end behavior of function',
  ]

  const sectionsContent = {

    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Open the page and three panels appear. On the left is the **function picker** with eleven functions grouped by the type of asymptote they have — vertical only, horizontal only, both, or oblique. In the center is the **plot panel** with the function curve in blue and its asymptotes drawn as dashed lines:

• **Red dashed verticals** mark vertical asymptotes
• **Green dashed horizontals** mark horizontal asymptotes
• **Purple dashed slants** mark oblique asymptotes

Below the plot, a **detected asymptotes panel** lists each one as a colored pill with its equation. For vertical asymptotes it also shows the one-sided limits ($x \\to c^-$ and $x \\to c^+$, each tagged $+\\infty$ or $-\\infty$). On the right is the **info panel** with two tabs — Detected (state-specific) and Concepts (general theory).

The page launches with the [reciprocal function](!#the-reciprocal-function) $1/x$. The plot shows the two-branch hyperbola, a red dashed vertical line at $x = 0$, and a green dashed horizontal at $y = 0$ — the canonical example of a function with both kinds of asymptote.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Picking a Function`,
      content: `The picker groups eleven functions by which asymptotes they have:

• [Vertical only](!#families-with-vertical-asymptotes-only) — [Logarithm](!#the-logarithmic-family) $\\ln(x)$ (VA at $x = 0$), [Tangent](!#the-tangent-family) (VAs at $\\pi/2 + n\\pi$)
• [Horizontal only](!#families-with-horizontal-asymptotes-only) — [Exponential decay](!#exponential-decay) $e^{-x}$, [the bell](!#the-bell-curve) $1/(1+x^2)$, [Arctangent](!#the-arctangent-function), [Logistic](!#the-logistic-curve)
• [Both V and H](!#families-with-both-asymptote-types) — [Reciprocal](!#the-reciprocal-function) $1/x$, [the shifted rational](!#the-shifted-rational-function) $(x+1)/(x-1)$, [the three-branch rational](!#the-three-branch-rational-function) $x/(x^2-1)$
• [Oblique](!#oblique-asymptotes) — [the classic](!#the-classic-oblique-function) $x + 1/x$, [the oblique rational](!#the-oblique-rational-function) $(x^2 - 1)/x$

The grouping is a teaching tool. **Arctan** is the classic two-different-HA example — $\\pi/2$ on the right, $-\\pi/2$ on the left. **Exponential decay** is the classic one-sided HA — converges on the right, blows up on the left. **$x/(x^2-1)$** has two VAs ($x = \\pm 1$) and one HA ($y = 0$). **$(x^2-1)/x$** simplifies to $x - 1/x$, so its oblique asymptote is $y = x$.

Clicking any entry switches the function and resets transformation parameters to defaults.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Reading the Plot`,
      content: `The plot uses **color as a type code** — every visual element's color tells you what kind of asymptote it is.

• **Blue solid** — the function curve itself, $g(x)$
• **Red dashed verticals** — vertical asymptotes. The curve heads toward $\\pm\\infty$ as $x$ approaches the line.
• **Green dashed horizontals** — horizontal asymptotes. The curve flattens out toward the line as $x \\to \\pm\\infty$.
• **Purple dashed slants** — oblique asymptotes. The curve approaches the slanted line at infinity.

Each line is labeled with its equation directly on the plot. The detector finds all asymptotes numerically at render time, so when you transform the function with sliders, the dashed lines move with it.

A key visual: the function curve **can cross** a horizontal or oblique asymptote in the middle, but never crosses a vertical asymptote (because the function isn't defined there). The asymptote is about long-term behavior, not a barrier the curve must stay away from.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `The Detected Asymptotes Panel`,
      content: `Below the plot, a panel organizes the detected asymptotes by type with color-coded pills:

• **Vertical section** — one row per VA. Each row shows the equation $x = c$ as a red pill, followed by the one-sided limit information: $x \\to c^-$ tagged with $+\\infty$ or $-\\infty$, and $x \\to c^+$ similarly. Reading $1/(x-1)$ for example: $x \\to 1^-: -\\infty$ and $x \\to 1^+: +\\infty$ — the curve drops to negative infinity from the left and rises to positive infinity from the right.

• **Horizontal section** — one row per HA. The pill shows $y = L$ in green, followed by which direction the limit applies: $x \\to +\\infty$, $x \\to -\\infty$, or $x \\to \\pm\\infty$ (when both sides converge to the same value).

• **Oblique section** — one row per oblique asymptote. The pill shows $y = mx + b$ in purple with the side indicator.

A counter at the top of the panel reads the total: "$3$ total" for the reciprocal-with-shift case, for example.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `One-Sided Limits at Vertical Asymptotes`,
      content: `Not every vertical asymptote behaves the same on both sides. The visualizer probes each VA from the left and from the right separately, then reports each one-sided limit independently.

Three patterns show up:

• **Sign-flip** (the curve crosses infinity) — like $1/x$ at $x = 0$. Left limit: $-\\infty$. Right limit: $+\\infty$. The curve flies down on the left, up on the right.

• **Same-sign blow-up** — like $1/x^2$ at $x = 0$. Both sides go to $+\\infty$. The curve forms an upside-down bowl with its peak hidden at the asymptote.

• **One-sided** — like $\\ln(x)$ at $x = 0$. Only the right side is defined; the function isn't real for $x < 0$. The panel shows only the right limit and omits the left entry entirely.

Watching the symbols ($+\\infty$ vs $-\\infty$, present vs absent) gives you the full behavior at the asymptote without needing to compute limits by hand.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Transforming and Tracking Asymptotes`,
      content: `Four sliders apply the affine transformation $g(x) = a \\cdot f(b(x - h)) + k$:

• $a$ — **vertical scale** rescales the output. Horizontal asymptotes move with $a$: a HA at $y = L$ becomes $y = aL + k$.
• $k$ — **vertical shift** lifts the whole curve. HAs shift by $k$; verticals are unaffected.
• $b$ — **horizontal scale** stretches the input. VAs move: $x = c$ becomes $x = c/b + h$.
• $h$ — **horizontal shift** translates left/right. Verticals shift by $h$; HAs are unaffected.

Concrete example: start on the reciprocal, default parameters — VA at $x = 0$, HA at $y = 0$. Drag $h$ to $+2$ — the VA tracks to $x = 2$. Drag $k$ to $+3$ — the HA tracks to $y = 3$. The dashed lines move in real time, and the detector's labels update accordingly.

The detection is purely numerical — no formula manipulation — so even fairly complex compositions like the shifted-and-scaled tangent get correct asymptote labeling.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Oblique Asymptotes`,
      content: `An **oblique** (or **slant**) asymptote is a non-horizontal line $y = mx + b$ that the curve approaches at infinity. Two functions in the picker demonstrate this:

• [The classic oblique](!#the-classic-oblique-function) $x + 1/x$ — at large $|x|$, the $1/x$ term shrinks to zero, leaving $y = x$. The asymptote is the line $y = x$ through the origin.
• [The oblique rational](!#the-oblique-rational-function) $(x^2 - 1)/x$ — polynomial-divide to get $x - 1/x$. Same oblique asymptote: $y = x$.

The detector finds it by computing $m = \\lim_{x \\to \\pm\\infty} g(x)/x$. If that limit is a finite non-zero number, compute $b = \\lim g(x) - mx$. If both limits converge, $y = mx + b$ is the asymptote.

A function has **either** a horizontal asymptote on a side **or** an oblique one **or** neither — never both. A non-zero slope rules out a finite limit at infinity. The detector enforces this: the oblique check runs only on sides where the horizontal check came back empty.

Oblique asymptotes appear most commonly in rational functions where the numerator's degree is exactly one more than the denominator's.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Is an Asymptote?`,
      content: `An **asymptote** is a line (or curve) that the graph of a function approaches arbitrarily closely as a variable approaches some value. Three kinds matter for elementary functions:

• **Vertical** — $x = c$ is a VA if $f(x) \\to \\pm\\infty$ as $x \\to c$ from at least one side. Typical sources: division by zero in rational functions, domain boundaries where a function diverges, periodic singularities like tan and cot.

• **Horizontal** — $y = L$ is an HA if $f(x) \\to L$ as $x \\to +\\infty$ or $x \\to -\\infty$. Common in rational functions with degree denominator $\\geq$ numerator, in $\\arctan$ and logistic curves, in exponential decay.

• **Oblique** — $y = mx + b$ is an oblique asymptote if $f(x) - (mx + b) \\to 0$ at infinity, with $m \\ne 0$.

Asymptotes describe **end behavior** and **singular behavior**, the two key pieces of a function's global structure beyond its local features.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Why Asymptotes Matter`,
      content: `Asymptotes capture how a function behaves where you can't just evaluate it — at points where it blows up, or as inputs grow without bound.

In **rational functions**, asymptotes are the skeleton: you find them, sketch them as dashed lines, and the rest of the graph hangs naturally from that scaffolding. Knowing all VAs and the HA (or OA) tells you the function's overall shape before you compute a single point.

In **modeling**, horizontal asymptotes represent **steady states** or **saturation levels** — the logistic curve's HA at $y = 1$ is the carrying capacity in population models; arctan's HAs at $\\pm\\pi/2$ are the limits of saturating signals.

In **calculus**, asymptotes are explicitly limits: vertical asymptotes are one-sided limits equal to $\\pm\\infty$, and horizontal asymptotes are limits at infinity. Learning to find asymptotes is learning to compute these limits geometrically, before working with the algebra.

The visualizer lets you build intuition by watching the dashed lines emerge from familiar functions and track sliders in real time.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Limits at Infinity** — formal theory of $\\lim_{x \\to \\infty} f(x)$. Horizontal and oblique asymptotes are exactly these limits made visible.

**One-Sided Limits** — the $x \\to c^-$ and $x \\to c^+$ notation in the VA panel. Vertical asymptotes correspond to one-sided limits being $\\pm\\infty$.

**Rational Functions** — the natural home of asymptotes. Polynomial-division and degree comparisons let you find HAs and OAs algebraically; setting the denominator to zero gives VA candidates.

**Domain of a Function** — VAs always sit at points where the function is undefined, but not every undefined point is a VA (removable singularities exist). The Domain visualizer complements this one.

**Function Symmetry** — another structural property in the Function Properties group. Combined with asymptotes, symmetry pins down a function's gross shape.

**Logarithmic Functions**, **Tangent Function**, **Exponential Functions** — the elementary functions whose asymptotic behavior is foundational for everything else.

**Continuity and Discontinuity** — VAs are a specific type of essential discontinuity; the theory connects directly to limit theory.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Families with Vertical Asymptotes Only`,
      content: `Two functions in the picker have vertical asymptotes and nothing else: the [logarithm](!#the-logarithmic-family), whose single wall stands at its domain edge, and the [tangent](!#the-tangent-family), whose walls repeat forever at every half-period. They bracket the two ways a vertical asymptote arises — a domain boundary the function cannot cross, and a periodic division by zero.

Neither function settles toward any height at infinity: the logarithm keeps climbing (ever more slowly), and tangent never stops cycling. That is what "vertical only" means — singular behavior without end-behavior flattening.`,
      before: ``, after: ``, link: '',
    },
    obj12: {
      title: `The Logarithmic Family`,
      content: `The natural logarithm $\\ln(x)$ is the cleanest one-sided vertical asymptote in elementary mathematics: a single wall at $x = 0$, approached from the right only.`,
      before: ``,
      after: `The one-sidedness is the point: for $x < 0$ the function simply does not exist, so the [detected asymptotes panel](!#the-detected-asymptotes-panel) reports only the right-hand limit, $x \\to 0^+ : -\\infty$, and omits the left entry entirely — the pattern examined in [One-Sided Limits](!#one-sided-limits-at-vertical-asymptotes).

There is no horizontal asymptote: $\\ln(x)$ grows without bound. It just does so at an ever-decreasing pace — a slow climb that is easy to mistake for flattening until you scroll the plot.

Drag the horizontal shift $h$ and the wall tracks to $x = h$; the [transformation rules](!#transforming-and-tracking-asymptotes) apply verbatim.`,
      link: '',
    },
    obj13: {
      title: `The Tangent Family`,
      content: `Tangent multiplies the vertical asymptote into a periodic family: one wall at every $x = \\pi/2 + n\\pi$, marching across the axis forever.`,
      before: ``,
      after: `Each wall is a sign-flip asymptote — the curve leaves through $+\\infty$ on one side and re-enters from $-\\infty$ on the other — and between consecutive walls the function sweeps the entire real line once.

The walls come from $\\tan(x) = \\sin(x)/\\cos(x)$: wherever cosine vanishes, the ratio blows up. Because cosine has infinitely many zeros, no other elementary function in the picker matches tangent's asymptote count.

The horizontal-scale slider $b$ compresses the spacing: at $b = 2$ the walls stand $\\pi/2$ apart instead of $\\pi$. Watching the red lines re-space themselves live is the fastest way to internalize the input-transform rule $x = c/b + h$.`,
      link: '',
    },
    obj14: {
      title: `Families with Horizontal Asymptotes Only`,
      content: `Four picker functions flatten toward a height without ever blowing up: [exponential decay](!#exponential-decay), the [bell curve](!#the-bell-curve), the [arctangent](!#the-arctangent-function), and the [logistic curve](!#the-logistic-curve). Between them they cover every horizontal-asymptote pattern: one-sided (decay), one line serving both directions (bell), two different lines (arctan), and a pair of lines boxing the curve in (logistic).

None of them has a vertical asymptote — each is defined and finite on the whole real line. Their interest lies entirely at infinity.`,
      before: ``, after: ``, link: '',
    },
    obj15: {
      title: `Exponential Decay`,
      content: `The decay curve $e^{-x}$ is the textbook one-sided horizontal asymptote: it hugs $y = 0$ ever more tightly to the right, and explodes without bound to the left.`,
      before: ``,
      after: `The asymmetry is the lesson. A horizontal asymptote is a statement about one direction of travel: here $f(x) \\to 0$ as $x \\to +\\infty$, while the limit as $x \\to -\\infty$ does not exist at all. The detected panel tags the green pill accordingly — $x \\to +\\infty$ only.

The curve never touches its asymptote: $e^{-x}$ is strictly positive. But that is a special feature of this function, not a law — the [bell curve](!#the-bell-curve) shares the same asymptote and also never touches it, while other functions cross their HA freely.

Vertical shift $k$ moves the resting level: $y = k$ becomes the new floor, the model's steady state.`,
      link: '',
    },
    obj16: {
      title: `The Bell Curve`,
      content: `The function $1/(1 + x^2)$ makes one symmetric hump at the origin and dies off to zero in both directions — one horizontal asymptote serving both ends of the axis.`,
      before: ``,
      after: `The denominator $1 + x^2$ is never zero, so there is no vertical asymptote anywhere: a rational function with poles nowhere on the real line. Peak value $1$ at $x = 0$, half-height at $x = \\pm 1$, and from there the long symmetric slide toward the green line.

Because the function is even, both tails behave identically — the detected panel shows a single HA tagged $x \\to \\pm\\infty$, the both-sides case.

Compare it with [exponential decay](!#exponential-decay): same asymptote, but the bell approaches it polynomially ($\\sim 1/x^2$) rather than exponentially — visibly slower once you look for it.`,
      link: '',
    },
    obj17: {
      title: `The Arctangent Function`,
      content: `Arctangent is the canonical two-asymptote function: it rises from $y = -\\pi/2$ on the far left to $y = +\\pi/2$ on the far right, a different horizontal asymptote on each side.`,
      before: ``,
      after: `The two limits are genuinely different numbers — $\\lim_{x \\to -\\infty} = -\\pi/2$ and $\\lim_{x \\to +\\infty} = +\\pi/2$ — which is why the detected panel lists two separate green pills, each tagged with its own direction.

The reason lives in the inverse relationship: arctangent undoes [tangent](!#the-tangent-family), so tangent's vertical walls at $\\pm\\pi/2$ become arctangent's horizontal ceilings. Inverting a function reflects its graph across $y = x$, and the reflection turns vertical asymptotes into horizontal ones.

In applications this shape models saturation — a response that levels off at hard limits in both directions.`,
      link: '',
    },
    obj18: {
      title: `The Logistic Curve`,
      content: `The logistic function $1/(1 + e^{-x})$ climbs its S-shape between two horizontal asymptotes: the floor $y = 0$ behind it and the ceiling $y = 1$ ahead.`,
      before: ``,
      after: `Like the [arctangent](!#the-arctangent-function) it has two HAs, but here they box the curve into a bounded band: every value lies strictly between $0$ and $1$. The midpoint crossing at $(0, \\tfrac{1}{2})$ is the curve's only inflection.

The ceiling is the famous one: in population models $y = 1$ is the carrying capacity, in machine learning it is the probability limit of the sigmoid. Steady states in models are horizontal asymptotes wearing applied clothing — the point made in [Why Asymptotes Matter](!#why-asymptotes-matter).

Vertical scale $a$ and shift $k$ move both bounds together: floor $k$, ceiling $a + k$.`,
      link: '',
    },
    obj19: {
      title: `Families with Both Asymptote Types`,
      content: `Three rational functions in the picker carry vertical and horizontal asymptotes at once: the [reciprocal](!#the-reciprocal-function), the [shifted rational](!#the-shifted-rational-function) $(x+1)/(x-1)$, and the [three-branch rational](!#the-three-branch-rational-function) $x/(x^2 - 1)$. This is the classic rational-function situation — poles from the denominator's zeros, plus flattening at infinity because the degrees balance.

Together the dashed lines form a scaffold: sketch the red walls and the green floor first, and the branches of the curve hang from that frame almost by themselves.`,
      before: ``, after: ``, link: '',
    },
    obj20: {
      title: `The Reciprocal Function`,
      content: `The reciprocal $1/x$ is the archetype — one vertical asymptote, one horizontal, two branches, and the page's opening view.`,
      before: ``,
      after: `The vertical wall at $x = 0$ is a sign-flip: $x \\to 0^-$ dives to $-\\infty$, $x \\to 0^+$ soars to $+\\infty$ — the first pattern in [One-Sided Limits](!#one-sided-limits-at-vertical-asymptotes). The horizontal floor $y = 0$ catches both tails.

Every transformed reciprocal $\\frac{a}{b(x-h)} + k$ keeps exactly this structure with the lines moved to $x = h$ and $y = k$ — which makes it the cleanest function for practicing the [tracking rules](!#transforming-and-tracking-asymptotes): two sliders, two dashed lines, one-to-one correspondence.

The hyperbola never meets either line: the two asymptotes are genuine barriers here, though only the vertical one is a barrier by necessity.`,
      link: '',
    },
    obj21: {
      title: `The Shifted Rational Function`,
      content: `The quotient $(x + 1)/(x - 1)$ moves both asymptotes away from the axes: the wall stands at $x = 1$, the floor at $y = 1$.`,
      before: ``,
      after: `Both locations are readable from the formula: the denominator vanishes at $x = 1$ (the pole), and the leading coefficients give $\\lim_{x \\to \\pm\\infty} = 1$ (the level). Equal degrees up and down always produce a horizontal asymptote at the ratio of leading coefficients.

The one-sided limits at the wall flip signs — $-\\infty$ from the left, $+\\infty$ from the right — exactly like the [reciprocal](!#the-reciprocal-function), because near the pole the function behaves like $2/(x-1)$.

Unlike the reciprocal, this curve **crosses** nothing it shouldn't but is allowed to cross its HA — and functions like it do; the green line is a limit, not a fence.`,
      link: '',
    },
    obj22: {
      title: `The Three-Branch Rational Function`,
      content: `The function $x/(x^2 - 1)$ carries two vertical asymptotes at once — walls at $x = -1$ and $x = 1$ — cutting the curve into three branches over one horizontal floor.`,
      before: ``,
      after: `The denominator factors as $(x-1)(x+1)$: two simple zeros, two sign-flip walls. The middle branch lives entirely between the walls, passes through the origin, and — a favorite exam surprise — **crosses its horizontal asymptote** right there at $x = 0$. The green line is end behavior only; the middle of the plot owes it nothing.

Degree one over degree two sends the tails to zero, so $y = 0$ catches both outer branches.

The function is odd — symmetric through the origin — which the three-branch picture makes visible at a glance: the outer branches are $180°$ rotations of each other.`,
      link: '',
    },
    obj23: {
      title: `The Classic Oblique Function`,
      content: `The sum $x + 1/x$ is the cleanest oblique-asymptote specimen: at large $|x|$ the $1/x$ term evaporates and the curve settles against the slanted line $y = x$.`,
      before: ``,
      after: `The formula IS the decomposition: line part $x$, vanishing part $1/x$. That is the oblique-asymptote pattern in its purest form — $f(x) - (mx + b) \\to 0$ with the difference written out explicitly.

There is also a vertical asymptote at $x = 0$ from the $1/x$ term, so the two branches each cling to the purple line at their far end and to the red wall at their near end. The upper branch bottoms out at $(1, 2)$, the lower peaks at $(-1, -2)$.

Its picker partner, the [oblique rational](!#the-oblique-rational-function), hides the same structure inside a quotient — polynomial division is what uncovers it.`,
      link: '',
    },
    obj24: {
      title: `The Oblique Rational Function`,
      content: `The quotient $(x^2 - 1)/x$ looks different from $x + 1/x$ but divides out to $x - 1/x$: same slanted asymptote $y = x$, same wall at $x = 0$.`,
      before: ``,
      after: `This is the general recipe made visible: when the numerator's degree exceeds the denominator's by exactly one, polynomial division splits the function into a line plus a vanishing remainder. The line is the oblique asymptote.

The sign difference in the remainder ($-1/x$ here versus $+1/x$ in the [classic oblique](!#the-classic-oblique-function)) flips which side of the purple line each branch approaches from — compare the two frozen scenes and the mirror-image approach is plain.

Zeros at $x = \\pm 1$ anchor the two branches to the axis on their way between wall and slant — a curve fully determined by three dashed lines and two crossing points.`,
      link: '',
    },
  }


  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }


  const faqQuestions = {
    obj1: {
      question: "What does the Asymptotes Visualizer do?",
      answer: "It plots a function alongside all of its asymptotes — verticals in red, horizontals in green, obliques in purple — and lists each one in a panel below the graph with its equation and direction information. Eleven functions are organized by asymptote type, and four transformation sliders let you watch how shifts and scales move the asymptotes in real time."
    },
    obj2: {
      question: "What is a vertical asymptote?",
      answer: "A vertical line x equals c is a vertical asymptote of a function if the function values tend to plus or minus infinity as x approaches c from at least one side. Common sources are division by zero in rational functions and domain edges where the function diverges, such as the natural logarithm at x equals zero or tangent at x equals pi over two."
    },
    obj3: {
      question: "What is a horizontal asymptote?",
      answer: "A horizontal line y equals L is a horizontal asymptote if the function values approach L as x tends to plus infinity or to minus infinity. A function can have zero, one, or two horizontal asymptotes. Arctangent has two — pi over two on the right and negative pi over two on the left. Exponential decay has only a right-side horizontal asymptote at y equals zero."
    },
    obj4: {
      question: "What is an oblique or slant asymptote?",
      answer: "An oblique asymptote is a non-horizontal line y equals m x plus b that the function approaches at infinity, meaning f of x minus the line tends to zero as x grows large. It appears in rational functions where the numerator's degree is exactly one more than the denominator's. A function has either a horizontal or an oblique asymptote on a given side, never both."
    },
    obj5: {
      question: "Can a function cross an asymptote?",
      answer: "A function can cross a horizontal or oblique asymptote in the middle of its domain — the asymptote describes only end behavior, not a barrier. It cannot cross a vertical asymptote, because the function is undefined there by construction. So vertical asymptotes act as walls; horizontal and oblique asymptotes are guidelines the curve gradually settles onto."
    },
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Function Asymptotes Visualizer",
      "description": "Interactive visualizer that detects and draws vertical, horizontal, and oblique asymptotes of common functions, with one-sided limit information at each vertical asymptote.",
      "url": "https://www.learnmathclass.com/functions/visual-tools/asymptotes",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Eleven functions grouped by asymptote type: vertical only, horizontal only, both, and oblique",
        "Color-coded asymptotes: red vertical, green horizontal, purple oblique",
        "Numerical detection at render time, so asymptotes track all transformations",
        "One-sided limit probes at each vertical asymptote with plus or minus infinity tags",
        "Detected asymptotes panel listing equations and direction indicators",
        "Four transformation sliders to test how shifts and scales move asymptotes",
        "Side info panel with state-specific listing and general asymptote theory"
      ],
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "learningResourceType": "Interactive Tool",
      "educationalLevel": "High School, College",
      "keywords": keyWords.join(", ")
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
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/functions/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Asymptotes",
          "item": "https://www.learnmathclass.com/functions/visual-tools/asymptotes"
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


  // Framed illustration units for the per-state sections (Line 1 v5): frozen
  // plot with detected asymptotes + attached picture-reading panel, no link.
  const stateUnits = {
    logarithmic: demoUnitFrame({ svg: asymDiagrams.logarithmic, caption: 'ln(x), frozen',
      text: 'One red wall at x = 0, approached from the right only &#8212; and no flattening anywhere: the climb never ends.' }),
    tangent: demoUnitFrame({ svg: asymDiagrams.tangent, caption: 'tan(x), frozen',
      text: 'Red walls at every &#960;/2 + n&#960;, each branch sweeping the full height between its two fences.' }),
    expDecay: demoUnitFrame({ svg: asymDiagrams.expDecay, caption: 'e&#8315;&#739;, frozen',
      text: 'The curve hugs the green line y = 0 ever more tightly to the right &#8212; and ignores it completely to the left.' }),
    bell: demoUnitFrame({ svg: asymDiagrams.bell, caption: '1/(1 + x&#178;), frozen',
      text: 'One symmetric hump, both tails sliding down to the same green floor &#8212; and no wall anywhere.' }),
    arctan: demoUnitFrame({ svg: asymDiagrams.arctan, caption: 'arctan(x), frozen',
      text: 'Two different green ceilings: &#8722;&#960;/2 catching the left tail, +&#960;/2 catching the right.' }),
    logistic: demoUnitFrame({ svg: asymDiagrams.logistic, caption: '1/(1 + e&#8315;&#739;), frozen',
      text: 'The S-curve boxed between its floor y = 0 and ceiling y = 1, crossing the midline at (0, &#189;).' }),
    reciprocal: demoUnitFrame({ svg: asymDiagrams.reciprocal, caption: '1/x, frozen',
      text: 'The archetype: red wall at x = 0, green floor at y = 0, two branches pinned between them.' }),
    rationalShifted: demoUnitFrame({ svg: asymDiagrams.rationalShifted, caption: '(x + 1)/(x &#8722; 1), frozen',
      text: 'The same hyperbola structure moved off the axes: wall at x = 1, level at y = 1.' }),
    xOverX2Minus1: demoUnitFrame({ svg: asymDiagrams.xOverX2Minus1, caption: 'x/(x&#178; &#8722; 1), frozen',
      text: 'Two red walls at x = &#177;1 cut the curve into three branches; the middle one crosses the green floor at the origin.' }),
    obliqueClassic: demoUnitFrame({ svg: asymDiagrams.obliqueClassic, caption: 'x + 1/x, frozen',
      text: 'The purple slant y = x catches both far ends while the red wall at x = 0 separates the branches.' }),
    obliqueRational: demoUnitFrame({ svg: asymDiagrams.obliqueRational, caption: '(x&#178; &#8722; 1)/x, frozen',
      text: 'Divided out, this is x &#8722; 1/x: the same purple slant, approached from the mirror side.' }),
  };

  // Canonical per-family explanations for the info panel's Family tab
  // (SSR/SEO-visible; the component has no built-in per-family texts).
  const explanations = {
    logarithmic:
      '## Logarithm\n' +
      '$f(x) = \\ln(x)$ — defined only for $x > 0$, with a **one-sided vertical asymptote** at $x = 0$: ' +
      'the curve dives to $-\\infty$ as $x \\to 0^+$. No horizontal asymptote — growth never stops, it only slows.\n\n' +
      '[Learn more about the logarithmic family](!#the-logarithmic-family) · [Vertical-only families](!#families-with-vertical-asymptotes-only)',
    tangent:
      '## Tangent\n' +
      '$f(x) = \\tan(x)$ — a **periodic family of vertical asymptotes** at $x = \\pi/2 + n\\pi$, wherever cosine vanishes. ' +
      'Every branch runs from $-\\infty$ to $+\\infty$; there is no end behavior to flatten.\n\n' +
      '[Learn more about the tangent family](!#the-tangent-family) · [Vertical-only families](!#families-with-vertical-asymptotes-only)',
    expDecay:
      '## Exponential decay\n' +
      '$f(x) = e^{-x}$ — the classic **one-sided horizontal asymptote**: $f(x) \\to 0$ as $x \\to +\\infty$, ' +
      'but the left side blows up without bound. Never touches its asymptote.\n\n' +
      '[Learn more about exponential decay](!#exponential-decay) · [Horizontal-only families](!#families-with-horizontal-asymptotes-only)',
    bell:
      '## The bell\n' +
      '$f(x) = 1/(1 + x^2)$ — one hump, one **horizontal asymptote at $y = 0$ serving both directions**, ' +
      'and no vertical asymptote since the denominator is never zero.\n\n' +
      '[Learn more about the bell curve](!#the-bell-curve) · [Horizontal-only families](!#families-with-horizontal-asymptotes-only)',
    arctan:
      '## Arctangent\n' +
      '$f(x) = \\arctan(x)$ — the canonical **two-different-asymptotes** example: $y = -\\pi/2$ on the left, ' +
      '$y = +\\pi/2$ on the right. The vertical walls of tangent, reflected into ceilings by inversion.\n\n' +
      '[Learn more about the arctangent function](!#the-arctangent-function) · [Horizontal-only families](!#families-with-horizontal-asymptotes-only)',
    logistic:
      '## Logistic\n' +
      '$f(x) = 1/(1 + e^{-x})$ — an S-curve **boxed between two horizontal asymptotes**, floor $y = 0$ and ceiling $y = 1$. ' +
      'The ceiling is the carrying capacity of population models.\n\n' +
      '[Learn more about the logistic curve](!#the-logistic-curve) · [Horizontal-only families](!#families-with-horizontal-asymptotes-only)',
    reciprocal:
      '## Reciprocal\n' +
      '$f(x) = 1/x$ — the archetype with **both asymptote types**: a sign-flip vertical at $x = 0$ and a horizontal at $y = 0$. ' +
      'Transformations move the pair to $x = h$, $y = k$ — nothing else changes.\n\n' +
      '[Learn more about the reciprocal function](!#the-reciprocal-function) · [Families with both types](!#families-with-both-asymptote-types)',
    rationalShifted:
      '## Shifted rational\n' +
      '$f(x) = (x+1)/(x-1)$ — the structure of the reciprocal, relocated: **wall at $x = 1$, level at $y = 1$** ' +
      '(equal degrees → HA at the ratio of leading coefficients).\n\n' +
      '[Learn more about the shifted rational](!#the-shifted-rational-function) · [Families with both types](!#families-with-both-asymptote-types)',
    xOverX2Minus1:
      '## Three-branch rational\n' +
      '$f(x) = x/(x^2-1)$ — **two vertical asymptotes** at $x = \\pm 1$ and one horizontal at $y = 0$, ' +
      'which the middle branch crosses at the origin: the HA is end behavior, not a fence.\n\n' +
      '[Learn more about the three-branch rational](!#the-three-branch-rational-function) · [Families with both types](!#families-with-both-asymptote-types)',
    obliqueClassic:
      '## Classic oblique\n' +
      '$f(x) = x + 1/x$ — the **oblique asymptote** $y = x$ written directly into the formula: ' +
      'line part plus a vanishing $1/x$. A vertical asymptote at $x = 0$ completes the picture.\n\n' +
      '[Learn more about the classic oblique](!#the-classic-oblique-function) · [Oblique asymptotes](!#oblique-asymptotes)',
    obliqueRational:
      '## Oblique rational\n' +
      '$f(x) = (x^2-1)/x$ — numerator one degree above denominator: polynomial division yields $x - 1/x$, ' +
      'so the **oblique asymptote is $y = x$**, approached from the mirror side of its classic partner.\n\n' +
      '[Learn more about the oblique rational](!#the-oblique-rational-function) · [Oblique asymptotes](!#oblique-asymptotes)',
  };

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      explanations,
      stateUnits,
      seoData: {
        title: "Asymptotes Visualizer | Vertical, Horizontal & Oblique",
        description: "Detect and visualize vertical, horizontal, and oblique asymptotes of any function. Color-coded dashed lines, one-sided limits, and live transformation sliders.",
        keywords: keyWords.join(", "),
        url: "/functions/visual-tools/asymptotes",
        name: "Function Asymptotes Visualizer",
        hubDescription: "Find vertical, horizontal, and oblique asymptotes of common functions and watch them drawn as color-coded dashed lines over the curve. One-sided limit probes report whether each vertical asymptote tends to plus or minus infinity from each side, and four transformation sliders let you watch every asymptote track shifts and scales in real time.",
        category: "Function Properties",
        subCategory: ""
      },
    }
  }
}


export default function FunctionAsymptotesPage({seoData, sectionsContent, introContent, faqQuestions, schemas, explanations, stateUnits}) {

  const unit = (key) => <div key={'u-' + key} dangerouslySetInnerHTML={{ __html: stateUnits[key] }} />;

  const genericSections = [
    { id:'getting-started-with-the-visualizer',        title:sectionsContent.obj1.title,  link:sectionsContent.obj1.link,  content:[sectionsContent.obj1.content] },
    { id:'picking-a-function',                         title:sectionsContent.obj2.title,  link:sectionsContent.obj2.link,  content:[sectionsContent.obj2.content] },
    { id:'reading-the-plot',                           title:sectionsContent.obj3.title,  link:sectionsContent.obj3.link,  content:[sectionsContent.obj3.content] },
    { id:'the-detected-asymptotes-panel',              title:sectionsContent.obj4.title,  link:sectionsContent.obj4.link,  content:[sectionsContent.obj4.content] },
    { id:'one-sided-limits-at-vertical-asymptotes',    title:sectionsContent.obj5.title,  link:sectionsContent.obj5.link,  content:[sectionsContent.obj5.content] },
    { id:'transforming-and-tracking-asymptotes',       title:sectionsContent.obj6.title,  link:sectionsContent.obj6.link,  content:[sectionsContent.obj6.content] },
    { id:'oblique-asymptotes',                         title:sectionsContent.obj7.title,  link:sectionsContent.obj7.link,  content:[sectionsContent.obj7.content] },
    { id:'what-is-an-asymptote',                       title:sectionsContent.obj8.title,  link:sectionsContent.obj8.link,  content:[sectionsContent.obj8.content] },
    { id:'why-asymptotes-matter',                      title:sectionsContent.obj9.title,  link:sectionsContent.obj9.link,  content:[sectionsContent.obj9.content] },
    { id:'families-with-vertical-asymptotes-only',     title:sectionsContent.obj11.title, link:sectionsContent.obj11.link, content:[sectionsContent.obj11.content] },
    { id:'the-logarithmic-family',                     title:sectionsContent.obj12.title, link:sectionsContent.obj12.link, content:[sectionsContent.obj12.content, unit('logarithmic'), sectionsContent.obj12.after] },
    { id:'the-tangent-family',                         title:sectionsContent.obj13.title, link:sectionsContent.obj13.link, content:[sectionsContent.obj13.content, unit('tangent'), sectionsContent.obj13.after] },
    { id:'families-with-horizontal-asymptotes-only',   title:sectionsContent.obj14.title, link:sectionsContent.obj14.link, content:[sectionsContent.obj14.content] },
    { id:'exponential-decay',                          title:sectionsContent.obj15.title, link:sectionsContent.obj15.link, content:[sectionsContent.obj15.content, unit('expDecay'), sectionsContent.obj15.after] },
    { id:'the-bell-curve',                             title:sectionsContent.obj16.title, link:sectionsContent.obj16.link, content:[sectionsContent.obj16.content, unit('bell'), sectionsContent.obj16.after] },
    { id:'the-arctangent-function',                    title:sectionsContent.obj17.title, link:sectionsContent.obj17.link, content:[sectionsContent.obj17.content, unit('arctan'), sectionsContent.obj17.after] },
    { id:'the-logistic-curve',                         title:sectionsContent.obj18.title, link:sectionsContent.obj18.link, content:[sectionsContent.obj18.content, unit('logistic'), sectionsContent.obj18.after] },
    { id:'families-with-both-asymptote-types',         title:sectionsContent.obj19.title, link:sectionsContent.obj19.link, content:[sectionsContent.obj19.content] },
    { id:'the-reciprocal-function',                    title:sectionsContent.obj20.title, link:sectionsContent.obj20.link, content:[sectionsContent.obj20.content, unit('reciprocal'), sectionsContent.obj20.after] },
    { id:'the-shifted-rational-function',              title:sectionsContent.obj21.title, link:sectionsContent.obj21.link, content:[sectionsContent.obj21.content, unit('rationalShifted'), sectionsContent.obj21.after] },
    { id:'the-three-branch-rational-function',         title:sectionsContent.obj22.title, link:sectionsContent.obj22.link, content:[sectionsContent.obj22.content, unit('xOverX2Minus1'), sectionsContent.obj22.after] },
    { id:'the-classic-oblique-function',               title:sectionsContent.obj23.title, link:sectionsContent.obj23.link, content:[sectionsContent.obj23.content, unit('obliqueClassic'), sectionsContent.obj23.after] },
    { id:'the-oblique-rational-function',              title:sectionsContent.obj24.title, link:sectionsContent.obj24.link, content:[sectionsContent.obj24.content, unit('obliqueRational'), sectionsContent.obj24.after] },
    { id:'related-concepts-and-tools',                 title:sectionsContent.obj10.title, link:sectionsContent.obj10.link, content:[sectionsContent.obj10.content] },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApplication) }}
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Asymptotes</h1>
      <br/>
      <FunctionAsymptotes explanations={explanations}/>
      <br/>
      <SectionTableOfContents sections={genericSections}
        showSecondaryNav={true}
        secondaryNavMode="siblings"
        secondaryNavTitle="More in this Section"
      />
      <br/>
      <br/>
      <br/>
      {/* <IntroSection
        id={introContent.id}
        title={introContent.title}
        content={introContent.content}
        backgroundColor='#f9fafb'
        textColor="#06357a"
      /> */}
      <br/>
      {/* <KeyTermsCard
        id="0"
        title={sectionsContent.obj0.title}
        content={sectionsContent.obj0.content}
        after={sectionsContent.obj0.after}
        variant="light"
      /> */}
      <br/>
      <Sections sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      {/* <ScrollUpButton/> */}
    </>
  )
}