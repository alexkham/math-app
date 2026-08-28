import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import InequalityVisualizer from '../../../../app/components/algebra/inequalities/visualizer/InequalityVisualizer'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import inequalityVisualizerDiagrams from '../../../../app/components/algebra/inequalities/visualizer/inequalityVisualizerDiagrams'


export async function getStaticProps(){

  const keyWords = [
    'inequality visualizer',
    'solve inequality graphically',
    'f(x) > 0 visualizer',
    'interactive inequality solver',
    'visual inequality solver',
    'sign chart inequality',
    'inequality solution set',
    'inequality intervals',
    'linear inequality visualizer',
    'quadratic inequality visualizer',
    'polynomial inequality solver',
    'rational inequality visualizer',
    'inequality step by step',
    'algebra inequality tool',
    'strict vs non-strict inequality',
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `
- **Inequality** $f(x) > 0$ (or $<, \\geq, \\leq$) — a statement asking which $x$ make $f(x)$ positive, negative, non-negative, or non-positive
- **Solution set** — the set of all $x$ satisfying the inequality, typically a union of intervals on the real line
- **Direction** — which comparison the inequality uses: $>$, $<$, $\\geq$, or $\\leq$
- **Strictness** — whether the inequality is strict ($>$, $<$) or non-strict ($\\geq$, $\\leq$); affects whether boundary points belong to the solution
- **Sign chart** — a table tracking the sign of $f(x)$ across intervals separated by its zeros and undefined points
- **Critical point** — a zero of $f(x)$ or a point where $f$ is undefined; the only places the sign of $f(x)$ can change
- **Factor** — one of the building blocks of $f(x)$ when written as a product; each gets its own row in the sign chart
- **Interval** — a maximal piece of the real line on which $f(x)$ has constant sign
- **Marble** — the draggable probe positioned at some $x$ in the visualizer; lets you read off the sign of $f(x)$ at that point
- **Pole** — a point where $f$ is undefined (typically a denominator zero); excluded from the solution set regardless of strictness
`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Open the explorer and you see a curve $y = f(x)$ with a draggable marble sitting on it. The inequality currently being solved is displayed symbolically above the graph (e.g. $f(x) > 0$), with each factor of $f$ rendered as a clickable element.

The layout has two columns. On the left, the **Hero panel** shows the inequality and the curve with the marble; the **Controls panel** below it holds the type tabs, parameter sliders, templates, direction and strictness toggles, and interaction modes. On the right, the **Sign chart panel** displays signs of every factor across every interval, and the **Explanation panel** narrates the current step or live reading.

The whole interface is wired together: hovering or clicking a factor in the inequality highlights its row in the sign chart; clicking a column in the sign chart moves the marble; clicking a row in the explanation panel does the same. Everything stays in sync.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Selecting an Inequality Type`,
      content: `The **type bar** at the top of the page is a row of tabs, one per inequality family the visualizer supports. Each tab carries a tooltip describing its structure. Click a tab to switch families.

Switching the type does three things at once:

• The graph updates to show the new function $f(x)$
• The parameter sliders below reconfigure to match the new family's parameters
• The sign chart rebuilds with a new set of factors and intervals

The currently active type is highlighted in blue. The five families are [polynomial](!#polynomial-inequalities-in-the-explorer), [quadratic](!#quadratic-inequalities-in-the-explorer), [absolute value](!#absolute-value-inequalities-in-the-explorer), [rational](!#rational-inequalities-in-the-explorer), and [radical](!#radical-inequalities-in-the-explorer) — each leading to a different sign-chart structure. Higher-degree types produce more factors and more critical points, but the solution-set logic is identical across all of them.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Direction and Strictness`,
      content: `Two controls determine **which** inequality you are solving for the current $f(x)$:

• **Direction** — choose between $>$, $<$, $\\geq$, or $\\leq$. Selecting $>$ asks for $x$ where $f(x)$ is positive; selecting $\\leq$ asks for $x$ where $f(x)$ is non-positive
• **Strictness** — toggles between strict ($>$, $<$) and non-strict ($\\geq$, $\\leq$). The strict and non-strict versions of an inequality differ only at the boundary points (zeros of $f$): strict excludes them, non-strict includes them

Strictness has a visible effect on the solution set: boundary points render as open circles for strict comparisons and filled circles for non-strict ones. Poles — points where $f$ is undefined — are always excluded, regardless of strictness, because $f(x)$ has no value there to compare against zero.`,
      before: ``,
      after: `Each of the four comparisons gets a dedicated frozen frame below, all on the same polynomial: [strictly less than zero](!#strictly-less-than-zero), [at most zero](!#at-most-zero), [strictly greater than zero](!#strictly-greater-than-zero), and [at least zero](!#at-least-zero).`,
      link: '',
    },

    obj4: {
      title: `Three Interaction Modes and Keyboard Shortcuts`,
      content: `The Controls panel offers three modes for moving the marble, each grouped behind its own button. Only one is active at a time.

• **Drag** — grab the marble with the mouse and slide it along the $x$-axis. Hold shift to snap to integer values
• **Step** — Previous and Next buttons jump the marble between named stops: critical points, midpoints of intervals, and other landmarks
• **Auto** — the marble plays back the sequence of stops automatically, with a speed slider for playback rate

Keyboard shortcuts work whenever the page has focus and you are not in an input:

• **Arrow Left / Arrow Right** — nudge the marble by $0.1$; Shift nudges by $1$
• **[** and **]** — step the marble to the previous or next named stop
• **Space** — toggle play/pause in auto mode, or switch to auto mode
• **R** — reset all parameters, marble position, and mode to defaults`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Adjusting Parameters and Using Templates`,
      content: `Each inequality type has its own **parameter sliders**, laid out in a three-column grid below the graph. Drag a slider, click a tick to snap to a notable value, or type directly into the numeric input. Sliders that hit invalid combinations (such as a denominator forced to zero) display a red error chip with the reason.

Each parameter has a value chip showing whether it is positive (blue), negative (amber), or zero (dashed). The mode toggle next to the chip switches between slider and numeric input for finer control.

Above the sliders, the **Templates** strip offers a few preset parameter combinations for the current type — useful starting points for common shapes like "no solution", "solution is a single interval", "solution is two disjoint intervals", and similar. Click a template to load it.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Reading the Sign Chart`,
      content: `The **Sign chart panel** on the right is a compact table tracking the sign of $f(x)$ across the real line. Reading it top to bottom:

• **Header row** — the critical $x$-values (zeros of $f$ and any poles), in increasing order, dividing the real line into intervals
• **Factor rows** — for each factor of $f$, a row of $+$, $-$, or $0$ entries showing the sign of that factor in each interval
• **Product row** — highlighted, gives the sign of $f(x)$ itself in each interval, computed by multiplying the factor signs
• **Pole columns** — points where $f$ is undefined, marked in red

The chart is interactive. Hover or click any factor in the inequality above to highlight its row. Click an interval cell to send the marble there. Click a critical-point column to land the marble exactly on the boundary. The same highlighting flows from the explanation panel and the curve, so every part of the interface points at the same intervals.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Reading the Explanation Panel`,
      content: `The **Explanation panel** below the sign chart has two tabs.

• **Steps** — a numbered list reconstructing the standard solving procedure: identify the factors of $f$, locate their zeros and any poles, build the sign chart, pick the intervals matching the chosen direction, and assemble the solution set with the right boundary inclusion. Each step is tied directly to what is on screen.
• **Live** — a compact table that recomputes whenever the marble moves. It shows the marble's $x$, the sign of each factor at that $x$, the combined sign of $f(x)$, and ends with a verdict: does the inequality hold at this $x$?

If the marble sits at a pole, the Live tab flags $f(x)$ as undefined and notes that this $x$ is excluded from the solution set. A short verbal summary below the table phrases the conclusion in plain language.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What an Inequality Means Geometrically`,
      content: `The inequality $f(x) > 0$ asks for every $x$ at which the graph $y = f(x)$ sits **above** the $x$-axis. The inequality $f(x) < 0$ asks for every $x$ where the graph sits **below**. The non-strict versions $\\geq$ and $\\leq$ include the boundary points where the graph touches the $x$-axis.

Unlike equations — whose solutions are typically isolated points where the curve crosses a level — inequalities have solution sets that are **regions** of the real line, almost always unions of intervals. A linear inequality has one half-line as its solution; a quadratic produces either a bounded interval, two unbounded intervals, an empty set, or the whole real line; rational inequalities can have arbitrarily many disjoint pieces.

The solution set changes whenever the sign of $f(x)$ changes, which happens only at zeros or poles. That is why the sign chart, which catalogs those exact points, is the natural tool for solving any inequality.

For comprehensive theory on inequalities, see **inequalities theory**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `How the Sign Chart Builds the Solution Set`,
      content: `Given the sign chart, building the solution set is mechanical:

1. **Pick the rows matching the direction**. For $f(x) > 0$ or $f(x) \\geq 0$, look at intervals where the product row is $+$. For $f(x) < 0$ or $f(x) \\leq 0$, look where it is $-$.
2. **Include or exclude boundary zeros** based on strictness. Strict comparisons exclude zeros (open intervals); non-strict comparisons include them (closed intervals).
3. **Always exclude poles**. Even with non-strict comparisons, points where $f$ is undefined cannot be in the solution.
4. **Take the union** of all qualifying intervals. The result is the solution set, written in interval notation.

Every inequality of this kind reduces to this procedure once the sign chart is built. The visualizer carries out each step on screen — colored intervals on the curve, highlighted columns in the chart, and a final interval-notation summary in the explanation panel.

For the companion equation case, see **equations visualizer**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Inequalities** — the general theory of inequalities, methods of solution, and classification by type.

**Equation Visualizer** — the companion tool for $f(x) = n$; uses the same marble-and-sign-chart layout but solves for discrete points rather than interval sets.

**Linear Inequalities** — the simplest case, where $f$ is degree one and the solution is a single half-line.

**Quadratic Inequalities** — degree-two case, where the discriminant determines whether the solution is a bounded interval, two unbounded intervals, the empty set, or the whole real line.

**Polynomial Inequalities** — higher-degree cases that can have arbitrarily many intervals in their solution set, each bounded by a real root.

**Rational Inequalities** — inequalities of the form $p(x)/q(x) > 0$, where poles at zeros of $q$ are always excluded from the solution.

**Sign Charts** — the general technique for tracking the sign of a function across intervals.

**Interval Notation** — the standard notation for expressing inequality solution sets as unions of intervals.`,
      before: ``,
      after: ``,
      link: '',
    },

    // ---- Line 1 group sections (one per inequality family) ----

    obj11: {
      title: `Polynomial Inequalities in the Explorer`,
      content: `The Polynomial tab solves $(x - r_1)(x - r_2)(x - r_3) < 0$ — a cubic handed over in factored form, so every root is visible in the formula before the graph draws it. The three templates cover the shapes that matter: [three distinct roots](!#three-distinct-roots), [a double root](!#the-double-root), and [a tight cluster](!#the-tight-cluster) of adjacent roots.

Factored form is the pedagogical gift of this tab: the sign chart's factor rows correspond one-to-one with the parentheses, and the product's sign is literally the product of the rows. Dragging any root dot on the axis rewrites the factorization live.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj12: {
      title: `Quadratic Inequalities in the Explorer`,
      content: `The Quadratic tab works in standard form $ax^2 + bx + c$, where the roots must be **earned** — the tool computes them from the discriminant before it can chart signs. The templates hit the three signature configurations: [two roots](!#a-quadratic-with-two-roots), [no real roots](!#a-quadratic-with-no-real-roots), and [an opens-down parabola](!#a-downward-parabola).

The family adds one twist the factored cubic cannot show: an irreducible quadratic, whose sign never changes. When the discriminant goes negative, the whole parabola sits on one side of zero and the inequality's answer is everything or nothing.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj13: {
      title: `Absolute-Value Inequalities in the Explorer`,
      content: `The Absolute value tab solves $|x - h| - k < 0$ — distance inequalities in disguise. The templates: [the centered V](!#the-centered-v), [a shifted V](!#the-shifted-v), and [the V at zero level](!#the-v-at-zero-level), where the vertex itself touches the axis.

The distance reading turns each solution into a sentence: $|x - h| < k$ means "within $k$ of $h$" — an interval centered at $h$ — while the $>$ version means "farther than $k$ from $h$", the two outer rays. The V's two arms are the two linear cases of the definition, drawn simultaneously.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj14: {
      title: `Rational Inequalities in the Explorer`,
      content: `The Rational tab solves $(x - a)/(x - b) < 0$ and introduces the sign chart's most dangerous feature: the **pole**. The zero at $a$ behaves like any root, but the pole at $b$ is excluded from the domain no matter what — a red, always-open point. The templates: [a simple configuration](!#a-simple-rational-inequality), [zero and pole crossed](!#zero-and-pole-crossed), and [zero and pole adjacent](!#zero-and-pole-adjacent).

The family exists to break a bad habit: multiplying both sides by $(x - b)$ flips the inequality on half the line and silently erases the domain hole. The sign-chart method needs no multiplication — which is exactly why it is the method of record here.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj15: {
      title: `Radical Inequalities in the Explorer`,
      content: `The Radical tab solves $\\sqrt{x - a} - k < 0$ and brings the last complication: a **restricted domain**. Nothing exists left of $x = a$; the region is shaded out in red before any sign question can even be asked. The templates: [the basic radical](!#the-basic-radical), [a shifted start](!#the-shifted-radical), and [a high level](!#the-high-level-radical) pushing the zero far to the right.

The standing lesson: a solution set lives **inside** the domain. Every radical answer is the intersection of an interval with $[a, \\infty)$, and forgetting that intersection is the classic radical-inequality error the red shading makes impossible to commit.`,
      before: ``,
      after: ``,
      link: '',
    },

    // ---- Per-state sections: Polynomial ----

    obj16: {
      title: `Three Distinct Roots`,
      content: `The default state of the whole tool: $(x + 2)(x - 1)(x - 5) < 0$, with roots at $-2$, $1$, and $5$ splitting the line into four intervals. The blue bars shade where the product is negative: left of $-2$, and between $1$ and $5$.`,
      before: ``,
      after: `Three simple roots means the sign alternates through all four intervals — negative, positive, negative, positive — because each crossing flips exactly one factor. The solution $(-\\infty, -2) \\cup (1, 5)$ reads straight off the alternation: every second interval.

The frozen marble sits at the left test point $x = -4$, where all three factors are negative and the product is negative — one sample point certifying the whole leftmost interval. That "test one point per interval" logic is the entire sign-chart method in miniature. See [the double root](!#the-double-root) for what happens when the alternation breaks.`,
      link: '',
    },

    obj17: {
      title: `The Double Root`,
      content: `$(x + 3)(x - 2)^2 < 0$: the squared factor turns the root at $2$ into a touch-point. Only the interval left of $-3$ is shaded — the curve bounces off zero at $x = 2$ without going negative.`,
      before: ``,
      after: `A squared factor never changes sign, so the crossing at $2$ is cancelled: the curve comes down, touches, and returns. The sign pattern is negative, positive, positive — the alternation of [three distinct roots](!#three-distinct-roots) with one flip removed. The solution collapses to $(-\\infty, -3)$.

The subtlety worth dwelling on: $x = 2$ **is** a zero of $f$, so for the non-strict version $\\leq$ it belongs to the solution set as an isolated point — a single closed dot disconnected from the interval. Even multiplicity is precisely the case where strict and non-strict answers differ by an isolated point rather than an endpoint.`,
      link: '',
    },

    obj18: {
      title: `The Tight Cluster`,
      content: `$(x + 1)(x)(x - 1) < 0$: three roots packed at $-1$, $0$, $1$. The shading alternates rapidly — left of $-1$, then between $0$ and $1$.`,
      before: ``,
      after: `Root spacing changes nothing logically and everything visually. The intervals $(-1, 0)$ and $(0, 1)$ are only one unit wide, and the curve oscillates through them in quick succession — a picture of why densely packed roots demand care with test points: there is little room to sample in.

The cluster is also $x^3 - x$ in factored clothing, the same S-curve the equation explorer freezes as its three-root cubic. Same polynomial, different question: there the interest was **where** it crosses zero; here it is **which side** of zero it spends each interval on.`,
      link: '',
    },

    // ---- Per-state sections: Quadratic ----

    obj19: {
      title: `A Quadratic with Two Roots`,
      content: `$x^2 - x - 6 < 0$: the parabola dips below zero between its roots $-2$ and $3$, and the single blue bar spans exactly that dip.`,
      before: ``,
      after: `The tool factors the standard form for you — the sign chart shows $(x + 2)(x - 3)$ — and the answer is the single interval $(-2, 3)$: an upward parabola is negative **between** its roots, always. That "between" is worth internalizing as a reflex; its mirror ("outside") appears when the parabola [opens down](!#a-downward-parabola) or the direction flips to $>$.

Note the contrast with the factored-cubic tab: two roots make three intervals and one sign change fewer, so the solution is one connected piece instead of two. Root count controls solution topology.`,
      link: '',
    },

    obj20: {
      title: `A Quadratic with No Real Roots`,
      content: `$x^2 + 4 < 0$: no roots, no critical points, no shading. The parabola floats entirely above zero, and the solution set is empty.`,
      before: ``,
      after: `With the discriminant negative, the factor row shows a single irreducible chunk $(x^2 + 4)$ whose sign never changes — the sign chart has one column and it reads $+$. The strict inequality $< 0$ therefore has no solutions at all, and the tool's interval notation reports $\\emptyset$.

The flip side is immediate: the same curve makes $x^2 + 4 > 0$ true **everywhere**, solution $(-\\infty, \\infty)$. Irreducible quadratics are all-or-nothing gates — a fact used constantly when factoring higher polynomials, where such factors can be crossed off the sign chart entirely.`,
      link: '',
    },

    obj21: {
      title: `A Downward Parabola`,
      content: `$-x^2 + 2x + 3 < 0$: the parabola opens downward with roots at $-1$ and $3$, and the shading covers the two outer rays — the parabola is below zero **outside** its roots.`,
      before: ``,
      after: `Flipping the leading coefficient's sign swaps "between" and "outside": a downward parabola is positive between its roots and negative beyond them, so the solution is $(-\\infty, -1) \\cup (3, \\infty)$ — the exact complement (up to endpoints) of what [the upward two-root state](!#a-quadratic-with-two-roots) produces.

This state is the standard trap in textbook problems: students memorize "less than zero means between the roots" from upward parabolas and apply it blindly. The frozen frame is the antidote — the rule is not about the inequality sign, it is about which way the parabola opens.`,
      link: '',
    },

    // ---- Per-state sections: Absolute value ----

    obj22: {
      title: `The Centered V`,
      content: `$|x| - 3 < 0$: the V-shape with vertex dipping to $-3$, crossing zero at $\\pm 3$. The blue bar spans the valley between them.`,
      before: ``,
      after: `Read as distance, $|x| < 3$ says "within 3 of the origin" — the interval $(-3, 3)$, an answer you can state before any chart is drawn. The two crossing points are the two linear arms each solving their own equation, $x = 3$ and $-x = 3$.

The V's signature on the sign chart is a single expression row (the tool treats $|x| - 3$ as one factor) with two critical points — unlike polynomial factors, one row can own several sign changes. That is the chart's way of saying the expression is not a polynomial.`,
      link: '',
    },

    obj23: {
      title: `The Shifted V`,
      content: `$|x - 2| - 4 < 0$: the vertex moves to $x = 2$, the crossings to $-2$ and $6$, and the shaded valley follows — an interval of radius $4$ centered at $2$.`,
      before: ``,
      after: `The distance sentence updates without friction: "within 4 of 2" is $(-2, 6)$. Center and radius are exactly the tool's two sliders $h$ and $k$ — the template's whole point is that the interval's midpoint and half-width can be read directly from the formula, no solving required.

Dragging either endpoint dot on the axis adjusts $k$ live — the explorer inverts the geometry back into the parameter, a small demonstration that the endpoint positions and the formula are the same information.`,
      link: '',
    },

    obj24: {
      title: `The V at Zero Level`,
      content: `$|x + 1| < 0$: with $k = 0$ the vertex touches the axis at $-1$, and the strict inequality asks for negative distance. Nothing is shaded — the solution set is empty.`,
      before: ``,
      after: `An absolute value is never negative, so $|x + 1| < 0$ has no solutions regardless of any chart — the frozen frame shows the honest picture: a curve that touches zero once and is positive everywhere else, with an empty axis bar.

The state rewards operator experiments: switch to $\\leq$ and exactly one point qualifies, the vertex $x = -1$, appearing as a single closed dot; switch to $>$ and everything **except** the vertex qualifies. Three radically different solution sets from one frozen curve — the strongest argument on the page that the operator is a genuine state dimension, treated in [Direction and Strictness](!#direction-and-strictness).`,
      link: '',
    },

    // ---- Per-state sections: Rational ----

    obj25: {
      title: `A Simple Rational Inequality`,
      content: `$(x - 1)/(x + 2) < 0$: a zero at $1$ (blue dot) and a pole at $-2$ (red dot, red stripe). The fraction is negative exactly between them — the bar spans $(-2, 1)$.`,
      before: ``,
      after: `A fraction is negative when numerator and denominator disagree in sign, and that happens precisely between the zero and the pole. The sign chart shows the two factor rows disagreeing on exactly that interval — the product row's negative stretch.

The pole's red styling carries the family's core rule: $x = -2$ is not in the domain, so it can never enter a solution set. Even switching to $\\leq$ closes only the zero endpoint at $1$; the pole end stays open forever. Domain first, comparison second.`,
      link: '',
    },

    obj26: {
      title: `Zero and Pole Crossed`,
      content: `$(x + 3)/(x - 4) < 0$: this time the zero ($-3$) sits left of the pole ($4$), and the negative stretch — the shaded bar — runs between them across seven units.`,
      before: ``,
      after: `Swapping which critical point comes first does not change the logic — the fraction is still negative exactly between its two sign-relevant points — but it changes which **kind** of endpoint each end of the solution has: here the left end is a zero (closable under $\\leq$) and the right end is a pole (never closable), the mirror of [the simple configuration](!#a-simple-rational-inequality).

The wide gap also makes the graph's asymptotic behavior legible: the curve dives toward $-\\infty$ approaching the pole from the left, having crossed zero calmly at $-3$ far earlier. Zeros are gentle events; poles are violent ones. The chart treats them with one symbol each — $0$ versus undefined — and the geometry explains the difference.`,
      link: '',
    },

    obj27: {
      title: `Zero and Pole Adjacent`,
      content: `$(x - 2)/(x - 3) < 0$: zero at $2$, pole at $3$, one unit apart. The shaded solution is the narrow interval $(2, 3)$ squeezed between them.`,
      before: ``,
      after: `Proximity stress-tests reading skills: the dashed drop-lines, the differently colored dots, and the thin blue bar all crowd into one unit of axis. The curve behavior is dramatic — it leaves its zero at $2$ and almost immediately plunges toward the pole at $3$.

The adjacent case is also where the multiply-both-sides error hurts most: multiplying by $(x - 3)$, negative throughout the solution interval, silently reverses the inequality exactly where the answer lives. The sign chart sidesteps the whole hazard — which is the family's closing argument for it.`,
      link: '',
    },

    // ---- Per-state sections: Radical ----

    obj28: {
      title: `The Basic Radical`,
      content: `$\\sqrt{x} - 2 < 0$: nothing exists left of $0$ (red shading), the curve rises from the domain edge, and crosses zero at $4$. The bar shades the run from the edge to the crossing.`,
      before: ``,
      after: `Two boundary points with two different characters: $x = 0$ is a domain edge — the amber-flavored "the function starts here" marker — while $x = 4$ is an honest zero where $\\sqrt{x}$ reaches $2$. The solution occupies the stretch between them, where the square root is still small.

Squaring both sides ($x < 4$) happens to work here, but only because the domain was carried along: the correct answer intersects $x < 4$ with $x \\geq 0$. The red shading does that intersection visually before the algebra can forget it.`,
      link: '',
    },

    obj29: {
      title: `The Shifted Radical`,
      content: `$\\sqrt{x + 3} - 1 < 0$: the domain now starts at $-3$, and the zero sits just one unit to the right, at $-2$. A short bar spans the gap.`,
      before: ``,
      after: `Shifting the radicand moves the entire configuration left: domain edge at $-3$, zero at $-3 + k^2 = -2$. The solution $(-3, -2)$ is only one unit wide because $k = 1$ — the zero sits at distance $k^2$ from the edge, so small levels keep the crossing close to the start.

That $k^2$ spacing is the family's quiet parabola-in-reverse: the square root grows slowly, so reaching height $k$ takes $k^2$ of horizontal distance. The next state stretches this to its extreme.`,
      link: '',
    },

    obj30: {
      title: `The High-Level Radical`,
      content: `$\\sqrt{x - 1} - 4 < 0$: the level is high, so the zero lands far out at $x = 1 + 16 = 17$. The shaded run from the domain edge is sixteen units long.`,
      before: ``,
      after: `The frozen frame is the square root's slow growth made spatial: to climb to height $4$, the curve needs $4^2 = 16$ units of runway. The view window stretches to accommodate, and the curve looks nearly flat — an honest picture of how $\\sqrt{x}$ compares with any linear ruler.

Sixteen units of solution from one small parameter change (compare [the basic radical](!#the-basic-radical)) is the family's parting lesson: for radicals, the interesting parameter sensitivity is quadratic, and eyeballing where the zero "should" be will mislead exactly when the level is large.`,
      link: '',
    },

    // ---- Per-state sections: the four comparison operators ----

    obj31: {
      title: `Strictly Less Than Zero`,
      content: `The default comparison, frozen on the default polynomial: $(x + 2)(x - 1)(x - 5) < 0$. Two open-ended bars — $(-\\infty, -2)$ and $(1, 5)$ — with every boundary dot drawn open.`,
      before: ``,
      after: `Strict less-than is the reference state the other three operators perturb. Its signature is the open circles: the roots themselves give $f(x) = 0$, and zero is not less than zero, so all three boundary points are excluded.

The four operator states share one curve and one set of critical points; only membership at and around those points changes. Clicking through them in the live tool with the sign chart in view is the fastest way to see that direction picks **which intervals** and strictness picks **the boundary dots** — two independent switches. Compare [at most zero](!#at-most-zero) for the first switch flipped.`,
      link: '',
    },

    obj32: {
      title: `At Most Zero`,
      content: `The same polynomial under $\\leq$: identical bars, but the three boundary dots at $-2$, $1$, $5$ now render filled — the roots joined the solution set.`,
      before: ``,
      after: `Non-strict comparison admits equality, and equality happens exactly at the zeros of $f$. The solution grows by precisely three points: $(-\\infty, -2] \\cup [1, 5]$. Nothing else moves — the interiors of the intervals were already decided by the sign chart.

The open-versus-filled dot convention is the entire visual difference between this frame and [the strict version](!#strictly-less-than-zero), which is the point: strictness is a boundary-only phenomenon. (For rational types the pole dot would stay open even here — poles never join; see [the rational family](!#rational-inequalities-in-the-explorer).)`,
      link: '',
    },

    obj33: {
      title: `Strictly Greater Than Zero`,
      content: `The same polynomial under $>$: the shading jumps to the complementary intervals $(-2, 1)$ and $(5, \\infty)$, boundary dots open again.`,
      before: ``,
      after: `Flipping direction selects the intervals where the sign chart reads $+$ instead of $-$ — the exact complement of [the less-than state](!#strictly-less-than-zero), minus the boundary points, which belong to neither strict solution. Between the two strict frames, every point of the line is claimed exactly once, except the three roots, claimed by neither.

That near-partition is a useful sanity check when solving by hand: if your $<$ answer and your $>$ answer overlap, or jointly miss an interval, a sign was charted wrong.`,
      link: '',
    },

    obj34: {
      title: `At Least Zero`,
      content: `The final operator: $\\geq$ shades $[-2, 1]$ and $[5, \\infty)$ with filled boundary dots — the positive intervals plus their root endpoints.`,
      before: ``,
      after: `The fourth frame completes a tidy two-by-two: direction chooses the interval family, strictness chooses the dots. Together the $\\leq$ and $\\geq$ frames cover the whole line with the three roots shared — every real number satisfies at least one of the two non-strict comparisons, since every $f(x)$ is $\\leq 0$ or $\\geq 0$.

Frozen side by side, the four frames are a truth table for the operator pair — and a compact answer to the perennial question of when to use round versus square brackets in interval notation: round follows open dots, square follows filled ones, always.`,
      link: '',
    },
  }


  // Frozen-state framed units (Line 1), one per template state plus the four
  // comparison operators. Built here, passed via props, rendered as
  // content-array items.
  const d = inequalityVisualizerDiagrams;
  const u = (key, caption, text) => demoUnitFrame({ svg: d[key], caption, text });
  const stateUnits = {
    'poly-three': u('poly-three', '(x+2)(x&#8722;1)(x&#8722;5) &lt; 0, frozen',
      'Four intervals, alternating signs, two shaded: the default state of the tool, with the marble certifying the leftmost interval from x = &#8722;4.'),
    'poly-double': u('poly-double', '(x+3)(x&#8722;2)&#178; &lt; 0, frozen',
      'The squared factor cancels one sign change: the curve touches zero at 2 and bounces. Only the far-left interval survives.'),
    'poly-cluster': u('poly-cluster', '(x+1)(x)(x&#8722;1) &lt; 0, frozen',
      'Three roots in three units: rapid alternation, narrow intervals &#8212; x&#179; &#8722; x asked a different question.'),
    'quad-two': u('quad-two', 'x&#178; &#8722; x &#8722; 6 &lt; 0, frozen',
      'An upward parabola is negative between its roots: one connected bar from &#8722;2 to 3.'),
    'quad-none': u('quad-none', 'x&#178; + 4 &lt; 0, frozen',
      'No roots, one sign, empty answer: the irreducible quadratic as an all-or-nothing gate.'),
    'quad-down': u('quad-down', '&#8722;x&#178; + 2x + 3 &lt; 0, frozen',
      'Opens down, so &#8220;below zero&#8221; means outside the roots: the two outer rays are shaded, not the middle.'),
    'abs-centered': u('abs-centered', '|x| &#8722; 3 &lt; 0, frozen',
      'Distance under 3 from the origin: the valley of the V, shaded from &#8722;3 to 3.'),
    'abs-shifted': u('abs-shifted', '|x &#8722; 2| &#8722; 4 &lt; 0, frozen',
      'Center 2, radius 4, straight from the formula: the shaded interval runs &#8722;2 to 6.'),
    'abs-zero': u('abs-zero', '|x + 1| &lt; 0, frozen',
      'A distance asked to be negative: the vertex touches zero at &#8722;1 and nothing is shaded anywhere.'),
    'rat-simple': u('rat-simple', '(x&#8722;1)/(x+2) &lt; 0, frozen',
      'Blue zero, red pole, and the negative stretch between them. The red stripe marks the domain hole at &#8722;2.'),
    'rat-crossed': u('rat-crossed', '(x+3)/(x&#8722;4) &lt; 0, frozen',
      'Zero left, pole right, seven units of solution between &#8212; and the curve diving toward the asymptote at 4.'),
    'rat-adjacent': u('rat-adjacent', '(x&#8722;2)/(x&#8722;3) &lt; 0, frozen',
      'One unit between zero and pole: the entire solution squeezed into (2, 3).'),
    'rad-basic': u('rad-basic', '&#8730;x &#8722; 2 &lt; 0, frozen',
      'Red nothing left of 0, then a slow climb to the zero at 4. The solution lives between domain edge and crossing.'),
    'rad-shifted': u('rad-shifted', '&#8730;(x+3) &#8722; 1 &lt; 0, frozen',
      'Domain from &#8722;3, zero at &#8722;2: level 1 keeps the crossing just k&#178; = 1 unit from the edge.'),
    'rad-high': u('rad-high', '&#8730;(x&#8722;1) &#8722; 4 &lt; 0, frozen',
      'Level 4 pushes the zero to 1 + 16 = 17: sixteen units of runway for a square root to climb four.'),
    'op-lt': u('op-lt', 'Operator &lt;, frozen',
      'The reference frame: negative intervals shaded, every boundary dot open &#8212; zero is not less than zero.'),
    'op-le': u('op-le', 'Operator &#8804;, frozen',
      'Same bars, filled dots: non-strict comparison admits the roots themselves, and nothing else changes.'),
    'op-gt': u('op-gt', 'Operator &gt;, frozen',
      'Direction flipped: the complementary intervals light up, boundaries open again.'),
    'op-ge': u('op-ge', 'Operator &#8805;, frozen',
      'The fourth corner of the two-by-two: positive intervals with their endpoints included.'),
  };

  // Per-state panel explanations (Line 1). Rendered inside the tool's
  // Explanation card through processContent — $math$ and same-page !# anchors
  // work. The template entry and the operator entry can both be active.
  const explanations = {
    'poly-three': `Three simple roots alternate the sign through four intervals, and the solution is every second one: $(-\\infty, -2) \\cup (1, 5)$. [Learn more about three distinct roots](!#three-distinct-roots) · [All polynomial states](!#polynomial-inequalities-in-the-explorer)`,
    'poly-double': `The squared factor never changes sign, so the touch at $x = 2$ cancels a flip and the solution collapses to $(-\\infty, -3)$. [Learn more about the double root](!#the-double-root) · [All polynomial states](!#polynomial-inequalities-in-the-explorer)`,
    'poly-cluster': `Roots at $-1$, $0$, $1$ pack the alternation into three units — this is $x^3 - x$ asked a sign question. [Learn more about the tight cluster](!#the-tight-cluster) · [All polynomial states](!#polynomial-inequalities-in-the-explorer)`,
    'quad-two': `An upward parabola is negative between its roots: $(-2, 3)$, one connected interval. [Learn more about the two-root quadratic](!#a-quadratic-with-two-roots) · [All quadratic states](!#quadratic-inequalities-in-the-explorer)`,
    'quad-none': `Negative discriminant makes the factor irreducible and the sign constant — $< 0$ has no solutions, $> 0$ has them all. [Learn more about the no-root quadratic](!#a-quadratic-with-no-real-roots) · [All quadratic states](!#quadratic-inequalities-in-the-explorer)`,
    'quad-down': `Opening downward swaps between and outside: the solution is the two outer rays, $(-\\infty, -1) \\cup (3, \\infty)$. [Learn more about the downward parabola](!#a-downward-parabola) · [All quadratic states](!#quadratic-inequalities-in-the-explorer)`,
    'abs-centered': `$|x| < 3$ reads as distance: within 3 of the origin, the interval $(-3, 3)$. [Learn more about the centered V](!#the-centered-v) · [All absolute-value states](!#absolute-value-inequalities-in-the-explorer)`,
    'abs-shifted': `Center $h = 2$ and radius $k = 4$ give the interval directly: within 4 of 2 is $(-2, 6)$. [Learn more about the shifted V](!#the-shifted-v) · [All absolute-value states](!#absolute-value-inequalities-in-the-explorer)`,
    'abs-zero': `An absolute value is never negative, so the strict inequality is unsatisfiable — switch to $\\leq$ and exactly the vertex qualifies. [Learn more about the V at zero level](!#the-v-at-zero-level) · [All absolute-value states](!#absolute-value-inequalities-in-the-explorer)`,
    'rat-simple': `The fraction is negative where numerator and denominator disagree: between the pole and the zero, $(-2, 1)$ — and the pole can never be included. [Learn more about this configuration](!#a-simple-rational-inequality) · [All rational states](!#rational-inequalities-in-the-explorer)`,
    'rat-crossed': `Zero before pole: the solution $( -3, 4)$ has a closable left end and a never-closable right end. [Learn more about the crossed configuration](!#zero-and-pole-crossed) · [All rational states](!#rational-inequalities-in-the-explorer)`,
    'rat-adjacent': `One unit apart: the whole solution is $(2, 3)$, and multiplying by the denominator would flip the inequality exactly there. [Learn more about the adjacent configuration](!#zero-and-pole-adjacent) · [All rational states](!#rational-inequalities-in-the-explorer)`,
    'rad-basic': `The domain starts at $0$ and the root reaches level $2$ at $x = 4$ — the solution is the run between edge and crossing. [Learn more about the basic radical](!#the-basic-radical) · [All radical states](!#radical-inequalities-in-the-explorer)`,
    'rad-shifted': `Everything shifts left: domain edge $-3$, zero at $-3 + k^2 = -2$, a one-unit solution. [Learn more about the shifted radical](!#the-shifted-radical) · [All radical states](!#radical-inequalities-in-the-explorer)`,
    'rad-high': `Reaching height $4$ takes $4^2 = 16$ units of runway — the zero lands at $17$, and the solution stretches accordingly. [Learn more about the high-level radical](!#the-high-level-radical) · [All radical states](!#radical-inequalities-in-the-explorer)`,
    'op-lt': `Strict less-than: the negative intervals with every boundary excluded — zero is not less than zero. [Learn more about this comparison](!#strictly-less-than-zero) · [Direction and strictness](!#direction-and-strictness)`,
    'op-le': `Non-strict: the same intervals plus the zeros themselves — filled dots, square brackets. [Learn more about this comparison](!#at-most-zero) · [Direction and strictness](!#direction-and-strictness)`,
    'op-gt': `Direction flipped: the sign chart's positive intervals, boundaries still excluded. [Learn more about this comparison](!#strictly-greater-than-zero) · [Direction and strictness](!#direction-and-strictness)`,
    'op-ge': `At least zero: positive intervals with their root endpoints included — round brackets become square. [Learn more about this comparison](!#at-least-zero) · [Direction and strictness](!#direction-and-strictness)`,
  };

  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }


  const faqQuestions = {
    obj1: {
      question: "What does the Inequality Visual Explorer do?",
      answer: "It solves inequalities of the form f(x) compared to zero — strictly greater, strictly less, greater or equal, or less or equal. A curve representing f(x) is plotted against the x-axis, and the solution set is the union of intervals where the curve has the right sign. You drag a marble to probe values, and the sign chart of f(x) shows the structure of the solution interval by interval."
    },
    obj2: {
      question: "What inequality types can the visualizer handle?",
      answer: "Multiple inequality families are supported via the type tabs at the top of the page, including linear, quadratic, polynomial, and rational forms. Each type has its own parameter sliders so you can adjust the shape of the curve, and the sign chart and explanation panel rebuild automatically when you switch types."
    },
    obj3: {
      question: "What is the difference between strict and non-strict inequalities?",
      answer: "Strict inequalities use greater than or less than and exclude the boundary points where f(x) equals zero. Non-strict inequalities use greater or equal or less or equal and include those boundary points. The visualizer's strictness toggle controls this: boundary points render as open circles when strict and filled circles when non-strict. Poles, where f is undefined, are always excluded regardless of strictness."
    },
    obj4: {
      question: "How do I read the sign chart?",
      answer: "Each column in the sign chart corresponds to an interval bounded by critical points (zeros of f and any poles), and each row corresponds to a factor of f. Entries are plus, minus, or zero showing the sign of that factor in that interval. The highlighted product row at the bottom gives the sign of f(x) itself, and intervals where its sign matches the inequality direction are part of the solution set."
    },
    obj5: {
      question: "Why are poles always excluded from the solution?",
      answer: "A pole is an x-value where f is undefined, typically a zero of the denominator in a rational expression. At such a point, f(x) has no value to compare against zero, so the inequality cannot be evaluated. Poles are excluded even when the comparison is non-strict, because non-strictness only governs whether zeros of f are included, not points where f itself fails to exist."
    },
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Inequality Visual Explorer",
      "description": "Interactive visualizer for solving inequalities f(x) > 0, < 0, ≥ 0, ≤ 0 by dragging a marble along the curve. Switch types, change direction and strictness, and read the sign chart of f(x).",
      "url": "https://www.learnmathclass.com/algebra/visual-tools/inequality",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Draggable marble probe along the curve y = f(x) compared against the x-axis",
        "Multiple inequality families selectable from a top type bar with per-family parameter sliders",
        "Direction toggle for greater, less, greater-or-equal, and less-or-equal comparisons",
        "Strictness toggle that switches boundary inclusion between open and closed",
        "Sign chart of f(x) broken down factor by factor with interactive intervals, columns, and pole columns",
        "Three interaction modes: free drag, step through named stops, and auto-play with adjustable speed",
        "Explanation panel with Steps tab for guided solution and Live tab for real-time check at the current marble position",
        "Keyboard shortcuts for nudging, stepping, play/pause, and reset"
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
          "name": "Algebra",
          "item": "https://www.learnmathclass.com/algebra"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/algebra/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Inequality Visual Explorer",
          "item": "https://www.learnmathclass.com/algebra/visual-tools/inequality"
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
      faqQuestions,
      schemas,
      stateUnits,
      explanations,
      seoData: {
        title: "Inequality Visual Explorer | Solve f(x) > 0 Visually",
        description: "Solve inequalities like f(x) > 0 by dragging a marble along the curve. Switch types, change direction and strictness, and read the sign chart of f(x).",
        keywords: keyWords.join(", "),
        url: "/algebra/visual-tools/inequality",
        name: "Inequality Visual Explorer",
        hubDescription: "Drag a marble along the x-axis and watch which intervals satisfy the inequality. Switch between linear, quadratic, polynomial, and rational inequality families, toggle the direction between greater, less, and their non-strict variants, and read the sign chart that builds the solution set interval by interval.",
        category: "",
        subCategory: "",
        image:'/visual-tools/greater2.jpg'

      },
    }
  }
}


export default function InequalityVisualExplorerPage({seoData, sectionsContent, introContent, faqQuestions, schemas, stateUnits, explanations}) {

  // Helper rows: plain section / section with after-text / per-state section
  // carrying its frozen unit as [content, unit, after].
  const plain = (obj, id) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [sectionsContent[obj].content]
  })
  const withAfter = (obj, id) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [sectionsContent[obj].content, sectionsContent[obj].after]
  })
  const stateRow = (obj, id, unitKey) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [
      sectionsContent[obj].content,
      <div key={`u-${unitKey}`} dangerouslySetInnerHTML={{ __html: stateUnits[unitKey] }} />,
      sectionsContent[obj].after,
    ]
  })

  const genericSections = [
    plain('obj0', 'key-terms'),
    plain('obj1', 'getting-started-with-the-visualizer'),
    plain('obj2', 'selecting-an-inequality-type'),

    withAfter('obj3', 'direction-and-strictness'),
    stateRow('obj31', 'strictly-less-than-zero', 'op-lt'),
    stateRow('obj32', 'at-most-zero', 'op-le'),
    stateRow('obj33', 'strictly-greater-than-zero', 'op-gt'),
    stateRow('obj34', 'at-least-zero', 'op-ge'),

    plain('obj4', 'three-interaction-modes-and-keyboard-shortcuts'),
    plain('obj5', 'adjusting-parameters-and-using-templates'),
    plain('obj6', 'reading-the-sign-chart'),
    plain('obj7', 'reading-the-explanation-panel'),

    plain('obj11', 'polynomial-inequalities-in-the-explorer'),
    stateRow('obj16', 'three-distinct-roots', 'poly-three'),
    stateRow('obj17', 'the-double-root', 'poly-double'),
    stateRow('obj18', 'the-tight-cluster', 'poly-cluster'),

    plain('obj12', 'quadratic-inequalities-in-the-explorer'),
    stateRow('obj19', 'a-quadratic-with-two-roots', 'quad-two'),
    stateRow('obj20', 'a-quadratic-with-no-real-roots', 'quad-none'),
    stateRow('obj21', 'a-downward-parabola', 'quad-down'),

    plain('obj13', 'absolute-value-inequalities-in-the-explorer'),
    stateRow('obj22', 'the-centered-v', 'abs-centered'),
    stateRow('obj23', 'the-shifted-v', 'abs-shifted'),
    stateRow('obj24', 'the-v-at-zero-level', 'abs-zero'),

    plain('obj14', 'rational-inequalities-in-the-explorer'),
    stateRow('obj25', 'a-simple-rational-inequality', 'rat-simple'),
    stateRow('obj26', 'zero-and-pole-crossed', 'rat-crossed'),
    stateRow('obj27', 'zero-and-pole-adjacent', 'rat-adjacent'),

    plain('obj15', 'radical-inequalities-in-the-explorer'),
    stateRow('obj28', 'the-basic-radical', 'rad-basic'),
    stateRow('obj29', 'the-shifted-radical', 'rad-shifted'),
    stateRow('obj30', 'the-high-level-radical', 'rad-high'),

    plain('obj8', 'what-an-inequality-means-geometrically'),
    plain('obj9', 'how-the-sign-chart-builds-the-solution-set'),
    plain('obj10', 'related-concepts-and-tools'),
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'-30px'}}>Inequality Visual Explorer</h1>
      <br/>
      <div style={{transform:'scale(0.95)'}}>
        <InequalityVisualizer explanations={explanations}/>
      </div>

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