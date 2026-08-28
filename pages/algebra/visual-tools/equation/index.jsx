


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import EquationVisualizer from '../../../../app/components/algebra/equations/visualizer/EquationsVisualizer'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import equationVisualizerDiagrams from '../../../../app/components/algebra/equations/visualizer/equationVisualizerDiagrams'


export async function getStaticProps(){

  const keyWords = [
    'equation visualizer',
    'solve equation graphically',
    'f(x) = n visualizer',
    'interactive equation solver',
    'visual equation solver',
    'equation explorer',
    'sign chart equation',
    'find equation solutions',
    'equation root finder',
    'graphical equation solving',
    'equation step by step',
    'algebra equation tool',
    'linear quadratic equation visualizer',
    'curve crosses level n',
    'equation solutions intersection',
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `
- **Equation** $f(x) = n$ — a statement that the value of the function $f$ at some $x$ equals the constant $n$
- **Solution** — a value of $x$ for which $f(x) = n$ holds; geometrically, an $x$ where the curve $y = f(x)$ crosses the horizontal line $y = n$
- **Solution set** — the set of all $x$ satisfying the equation, possibly empty, finite, or infinite
- **f(x) − n** — the auxiliary function whose zeros are exactly the solutions of $f(x) = n$
- **Sign chart** — a table tracking the sign of $f(x) - n$ across intervals separated by its zeros
- **Critical point (in this context)** — a zero of $f(x) - n$ or a point where $f$ is undefined; the only places the sign of $f(x) - n$ can change
- **Marble** — the draggable probe positioned at some $x$ in the visualizer; lets you read off $f(x)$ at that point
- **Multiplicity** — for polynomial equations, how many times a given solution is repeated as a root of $f(x) - n$
- **Linear equation** — $f(x) = n$ where $f$ is a degree-1 polynomial; has exactly one solution unless $f$ is constant
- **Quadratic equation** — $f(x) = n$ where $f$ is a degree-2 polynomial; has zero, one, or two real solutions
`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Open the explorer and you see a curve $y = f(x)$ plotted against a horizontal target line $y = n$. The blue marble sits on the curve at a chosen $x$. Solutions of $f(x) = n$ are exactly the points where the curve crosses the line.

The layout has two columns. On the left, the **Hero panel** shows the equation symbolically and the graph with the marble; the **Controls panel** below it holds equation parameters, templates, and interaction modes. On the right, the **Sign chart panel** displays a row-by-row table of signs for $f(x) - n$, and the **Explanation panel** narrates the current step or live reading.

A **type bar** at the top of the page lets you switch between equation families — [linear](!#linear-equations-in-the-explorer), [quadratic](!#quadratic-equations-in-the-explorer), [cubic](!#cubic-equations-in-the-explorer), and [absolute value](!#absolute-value-equations-in-the-explorer) — each with its own set of parameter sliders. No setup is needed: pick a type, drag the marble, and watch which intervals satisfy the equation light up.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Selecting an Equation Type`,
      content: `The **type bar** at the top of the page is a row of tabs, one per equation family the visualizer supports. Each tab carries a tooltip describing what the family looks like (degree, structure, typical solutions). Click a tab to switch families.

Switching the type does three things at once:

• The graph updates to show the new function $f(x)$
• The parameter sliders below the graph reconfigure to match the new family (a linear equation has two sliders for slope and intercept; higher-degree equations have more)
• The sign chart rebuilds with a new set of factors and intervals

The currently active type is highlighted in blue. Your last-chosen parameters for each family are preserved when you switch back, so you can compare how the same target $n$ behaves across different function shapes.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Three Interaction Modes`,
      content: `The Controls panel offers three modes for moving the marble, each grouped behind its own button. Only one mode is active at a time.

• **Drag** — grab the marble with the mouse and slide it along the $x$-axis. Hold shift to snap to integer values. The most direct way to probe how $f(x)$ compares to $n$ at any chosen $x$.
• **Step** — click Previous and Next to jump the marble between **stops**: critical points, zeros of $f(x) - n$, and other named landmarks. Useful for a guided tour of the equation's structure.
• **Auto** — the marble plays back the sequence of stops automatically. A speed slider controls playback rate; Space toggles play/pause.

The current mode is highlighted in blue, with a small detail strip showing extra context (current step number, playback speed, and so on).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Adjusting Parameters and Using Templates`,
      content: `Each equation type has its own **parameter sliders**, laid out in a three-column grid below the graph. Drag a slider, click a tick to snap to a notable value, or type directly into the numeric input. Sliders that hit invalid combinations (such as a denominator forced to zero) display a red error chip with the reason.

The **target value $n$** has its own slider — the horizontal line moves up and down as you drag it. Watching the line sweep across the curve makes the dependence of the solution set on $n$ visceral: solutions appear, merge at a tangent, and disappear as $n$ crosses critical levels.

Above the sliders, the **Templates** strip offers a few preset parameter combinations for the current type — useful as starting points for common shapes ([no real solutions](!#a-parabola-with-no-solution), [a double root](!#the-tangent-case-one-solution), [two distinct roots](!#a-parabola-with-two-solutions), and so on). Click a template to load it; click again to clear it.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Reading the Sign Chart`,
      content: `The **Sign chart panel** on the right is a compact table tracking the sign of $f(x) - n$ across the real line. Reading it top to bottom:

• **Header row** — the critical $x$-values (zeros of $f(x) - n$ and any undefined points), in increasing order, dividing the real line into intervals
• **Factor rows** — for each factor of $f(x) - n$, a row of $+$, $-$, or $0$ entries showing the sign of that factor in each interval
• **Product row** — highlighted, gives the sign of $f(x) - n$ itself in each interval, computed by multiplying the factor signs
• **Critical-point columns** — show where each factor is zero or where $f(x) - n$ itself is undefined (marked in red)

Hovering or clicking an interval or critical point updates the explanation panel with details. The intervals where the product row reads zero are exactly the solution intervals of $f(x) = n$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Reading the Explanation Panel`,
      content: `The **Explanation panel** below the sign chart has two tabs accessed via small buttons.

• **Steps** — a numbered list reconstructing the standard solving procedure: rewrite the equation as $f(x) - n = 0$, factor or otherwise reduce, locate the zeros, classify them by multiplicity, and read off the solution set. Each step is short and tied to what is on screen.
• **Live** — a compact table that recomputes whenever the marble moves. It shows the marble's current $x$, the value of $f(x)$, the target $n$, the difference $f(x) - n$, and its sign, ending with a verdict: does the equation $f(x) = n$ hold at this $x$?

A short verbal summary below the table phrases the conclusion in plain language. The Steps tab is best for understanding **why** a solution is what it is; the Live tab is best for **checking** candidate solutions in real time.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Keyboard Shortcuts`,
      content: `The visualizer supports a small set of keyboard shortcuts that work whenever the page has focus (and you are not typing in an input).

• **Arrow Left / Arrow Right** — nudge the marble in drag mode by $0.1$; hold Shift to nudge by $1$
• **[** and **]** — step the marble to the previous or next named stop in step mode
• **Space** — toggle play/pause in auto mode, or switch to auto mode if you are in another mode
• **R** — reset all parameters, marble position, and mode to their defaults

The shortcut hint appears in the header above the type bar. The shortcuts are designed to let you sweep across the solution set without taking your hands off the keyboard, useful when you want to compare many configurations quickly.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Does $f(x) = n$ Mean?`,
      content: `The equation $f(x) = n$ asks for every $x$ at which the function $f$ takes the specific value $n$. Geometrically, this is asking where the graph $y = f(x)$ crosses the horizontal line $y = n$ — each crossing point gives one solution.

The number of solutions depends entirely on how the curve and the line interact:

• If they never meet, the equation has **no solution** — the solution set is empty
• If they meet at a single point, the equation has **one solution** — often the case for linear equations
• If the line crosses the curve cleanly at several places, the equation has **several distinct solutions** — common for polynomial equations of degree two or more
• If the line is tangent to the curve at a point, that point is a **repeated solution** (multiplicity at least two)

Solving $f(x) = n$ is exactly the same as finding the zeros of $f(x) - n$ — that single rearrangement is what the sign chart and explanation panel both rely on.

For comprehensive theory on equations and solution sets, see **algebra equations theory**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Why the Sign Chart Helps Even for Equations`,
      content: `Sign charts are most often associated with inequalities, but they are equally useful for equations. The reason: the zeros of $f(x) - n$ are exactly the points where its sign changes (or fails to change, in the case of repeated roots).

A sign chart for $f(x) - n$ presents the structure of the equation visually:

• Every column header in the chart marks a candidate solution
• Sign-change columns identify single (odd-multiplicity) solutions
• Columns where the sign does not change identify even-multiplicity solutions where the curve touches the line without crossing
• Columns labeled "undefined" mark points where $f$ itself blows up — these are not solutions of the equation but may be boundary points of the domain

Reading the sign chart, you get the complete solution structure at a glance without needing to plug values back into $f$.

For the inequality version of the same idea, see **inequalities visualizer**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Equations** — the general theory of equations, methods of solution, and classification by type.

**Inequalities Visualizer** — the companion tool for $f(x) < n$, $f(x) \\leq n$, and the strict and non-strict comparisons; uses the same marble-and-sign-chart layout.

**Linear Equations** — the simplest case, where $f$ is a degree-one polynomial; the visualizer always produces a single solution unless $f$ is constant.

**Quadratic Equations** — degree-two case, where the equation has zero, one, or two real solutions depending on the discriminant of $f(x) - n$.

**Polynomial Equations** — higher-degree cases, where the fundamental theorem of algebra bounds the number of complex solutions by the degree.

**Sign Charts** — the general technique for tracking the sign of a function across intervals, used here and throughout calculus.

**Function Graphs** — visualizers for plotting $y = f(x)$ on its own, without comparison to a target.

**Equation Solving Step by Step** — written walkthroughs of standard solution methods for each equation type.`,
      before: ``,
      after: ``,
      link: '',
    },

    // ---- Line 1 group sections (one per equation family) ----

    obj11: {
      title: `Linear Equations in the Explorer`,
      content: `The Linear tab solves $ax + b = n$ — the family where the curve is a straight line and the story is short: one crossing, one solution, as long as the line actually slopes. The templates freeze the three characteristic pictures: [the basic line](!#the-basic-linear-equation), [a steep line](!#the-steep-line), and [a falling line](!#the-falling-line). A fourth state is not on the template strip but one slider-drag away: [the constant equation](!#the-constant-equation), where $a = 0$ kills the slope and the "one solution" rule breaks down.

Linear equations are where the marble metaphor is easiest to internalize — the curve meets any horizontal level exactly once — which makes this tab the right warm-up before the families where solution counts start to vary.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj12: {
      title: `Quadratic Equations in the Explorer`,
      content: `The Quadratic tab solves $ax^2 + bx + c = n$, and its four templates are a complete tour of what a parabola can do against a horizontal line: cross twice ([two solutions](!#a-parabola-with-two-solutions)), touch once ([the tangent case](!#the-tangent-case-one-solution)), miss entirely ([no solution](!#a-parabola-with-no-solution)), or be revisited with the level pushed up ([raising the level](!#raising-the-level)).

The quartet is the discriminant of $f(x) - n$ made visible: positive, zero, negative — two, one, or zero real roots. Dragging the $n$ slider between the frozen states shows the transitions live: two solutions slide together, merge at the tangent, and vanish.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj13: {
      title: `Cubic Equations in the Explorer`,
      content: `The Cubic tab solves $ax^3 + bx + c = n$. A cubic's ends run to opposite infinities, so it can never miss a horizontal line — the question is only **how many times** it crosses: three ([three roots](!#a-cubic-with-three-roots)), one ([one root](!#a-cubic-with-one-root)), or three again after the level moves off the symmetric zero ([the shifted cubic](!#the-shifted-cubic)).

The guaranteed crossing is the family's headline fact: every cubic equation has at least one real solution, a direct consequence of the intermediate value theorem. The local hills and valleys created by a negative linear coefficient are what open the door to three.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj14: {
      title: `Absolute-Value Equations in the Explorer`,
      content: `The Absolute value tab solves $|x - h| + k = n$ — the V-shape family. The three templates mirror the parabola's trichotomy with sharper geometry: the level line cuts both arms ([two solutions](!#the-v-with-two-solutions)), passes exactly through the vertex ([one solution](!#the-v-at-its-vertex)), or runs below the vertex and never meets the graph ([no solution](!#the-v-that-never-reaches)).

The V makes the solution-count logic purely visual: the vertex sits at height $k$, so everything depends on whether $n$ is above, at, or below $k$. It is the same above/at/below story as the quadratic's discriminant — told without any algebra at all.`,
      before: ``,
      after: ``,
      link: '',
    },

    // ---- Per-state sections: Linear ----

    obj15: {
      title: `The Basic Linear Equation`,
      content: `The opening template freezes $x = 3$ — the identity line $f(x) = x$ against the level $n = 3$. One clean crossing at $x = 3$, marked on the axis; the marble waits at $x = 0$, off by exactly $3$.`,
      before: ``,
      after: `No equation is more transparent, which is precisely its value as a first frame: the curve **is** the $x$-value, so asking "where does $f(x)$ reach $3$?" answers itself. The sign chart underneath is correspondingly minimal — negative left of $3$, zero at $3$, positive right of it.

Every other state on this page is a complication of this picture: steeper slopes rescale it, negative slopes mirror it, higher degrees bend the line into curves that can cross a level more than once — or not at all. Compare [the steep line](!#the-steep-line) for the first complication.`,
      link: '',
    },

    obj16: {
      title: `The Steep Line`,
      content: `The second template freezes $3x - 2 = 4$: a slope-3 line meeting the level at the single solution $x = 2$.`,
      before: ``,
      after: `Steepness changes the **sensitivity**, not the count: there is still exactly one solution, but each unit the level moves shifts it by only a third. Algebraically that is the division step $x = (n - b)/a$ — the steeper the line, the smaller the correction.

The frozen marble at $x = 0$ reads $f(0) = -2$, a gap of $6$ to the target — the amber bar in the frame measures exactly that vertical shortfall. Watching the bar shrink as the marble slides right is the graphical version of "closing in on the solution". The mirrored orientation is next, in [the falling line](!#the-falling-line).`,
      link: '',
    },

    obj17: {
      title: `The Falling Line`,
      content: `The third template freezes $-x + 5 = 0$: a downhill line crossing level zero at $x = 5$.`,
      before: ``,
      after: `A negative slope flips the geometry — the line now descends through the level — but not the arithmetic: one slope, one crossing, one solution. The sign chart is the giveaway detail: $f(x) - n$ is now **positive** on the left and **negative** on the right, the reverse of the rising templates.

That sign reversal matters more than it seems: for equations it changes nothing, but for the companion inequality tool it swaps which side of the crossing satisfies $f(x) < n$. The explorer's shared layout makes the comparison one click away.`,
      link: '',
    },

    obj18: {
      title: `The Constant Equation`,
      content: `Not a template, but one slider-drag away: set $a = 0$ and the line goes flat. The frozen frame shows $2 = 3$ — a horizontal line at height $2$ that never touches the level $3$. No solution markers appear anywhere.`,
      before: ``,
      after: `This is the linear family's degenerate boundary, and the tool's own slider tooltip calls it out: when $a = 0$ the equation has no solution unless $b = n$. The dichotomy is total. If $b \\neq n$, the two horizontal lines are parallel and distinct — the equation $b = n$ is simply false, and the solution set is empty. If $b = n$, they coincide and **every** $x$ is a solution — the equation has become an identity.

Nothing in between is possible: a constant equation has zero solutions or infinitely many, never one. It is the first stop in a theme the other families continue — solution counts are governed by geometry, and degenerate geometry produces degenerate counts. Try it live: load [the basic line](!#the-basic-linear-equation) and drag the slope slider to $0$.`,
      link: '',
    },

    // ---- Per-state sections: Quadratic ----

    obj19: {
      title: `A Parabola with Two Solutions`,
      content: `The first quadratic template freezes $x^2 - 4 = 0$: an upward parabola sliced by the zero level at $x = -2$ and $x = 2$, both marked with dashed drop-lines to the axis.`,
      before: ``,
      after: `Two is the generic count for a parabola: any level strictly above the vertex is crossed exactly twice, once on each arm. Here the vertex sits at $(0, -4)$, the level runs at $0$, and the two crossings land symmetrically at $\\pm 2$ — the symmetry of the picture reflecting the absence of a linear term.

The sign chart shows the signature quadratic pattern: positive, zero, negative, zero, positive — the parabola dips below the level between its two roots. Slide $n$ downward and watch the two solutions walk toward each other; where they meet is the next state, [the tangent case](!#the-tangent-case-one-solution).`,
      link: '',
    },

    obj20: {
      title: `The Tangent Case: One Solution`,
      content: `The second template freezes $x^2 = 0$: the level line grazes the parabola exactly at its vertex. One marker, at $x = 0$ — and this time the marble happens to sit on it.`,
      before: ``,
      after: `Tangency is the boundary case of the discriminant — zero, in this configuration — and the root it produces is **repeated**: $x = 0$ counts twice as a root of $x^2$. The sign chart betrays the multiplicity: the product row reads positive, zero, positive, with **no sign change** across the root. The curve touches the level and retreats without crossing.

That failure to change sign is the visual definition of even multiplicity, and it is why the tangent case is fragile: nudge $n$ up and the single solution splits into [two](!#a-parabola-with-two-solutions); nudge it down and both vanish into [none](!#a-parabola-with-no-solution). One slider unit in either direction changes the count.`,
      link: '',
    },

    obj21: {
      title: `A Parabola with No Solution`,
      content: `The third template freezes $x^2 + 4 = 0$: the parabola floats entirely above the level, its vertex at height $4$, and the frame shows no solution markers at all.`,
      before: ``,
      after: `An empty solution set drawn honestly: the curve and the level line simply never meet, because $x^2 + 4 \\geq 4 > 0$ for every real $x$. The sign chart collapses to a single all-positive row — no zeros, no sign changes, no columns to inspect.

This is also the doorway to complex numbers: $x^2 + 4 = 0$ has no **real** solutions, but it has two imaginary ones, $\\pm 2i$. The explorer draws the real story only — the picture of "no crossing" is exactly what "the roots moved off the real line" looks like from the real axis.`,
      link: '',
    },

    obj22: {
      title: `Raising the Level`,
      content: `The fourth template freezes $x^2 - 2x - 3 = 5$: a shifted parabola against a raised level, crossing at $x = -2$ and $x = 4$.`,
      before: ``,
      after: `This state makes the page's central rearrangement concrete: subtract the level and solve $x^2 - 2x - 8 = 0$, which factors as $(x - 4)(x + 2)$. The two frozen markers are those factors' roots — the target $n = 5$ has been absorbed into the constant term, exactly as the "solve $f(x) = n$ via $f(x) - n = 0$" recipe prescribes.

Unlike [the symmetric two-solution state](!#a-parabola-with-two-solutions), the crossings here are off-center — the linear term $-2x$ pushes the vertex to $x = 1$, and the two solutions sit symmetrically around **that** axis instead of around zero. Same count, same mechanism, less symmetry: a useful step away from special cases.`,
      link: '',
    },

    // ---- Per-state sections: Cubic ----

    obj23: {
      title: `A Cubic with Three Roots`,
      content: `The first cubic template freezes $x^3 - 3x = 0$: an S-shaped curve crossing the zero level three times — at $-\\sqrt{3}$, $0$, and $\\sqrt{3}$.`,
      before: ``,
      after: `Three is the cubic's maximum, and the frame shows what it takes: the negative linear term carves a local hill and valley, and the level line passes **between** their heights, meeting each monotone stretch once. The crossings at $\\pm\\sqrt{3} \\approx \\pm 1.73$ land at irrational positions — the axis labels read $1.73$, a quiet reminder that solution sets don't respect integer grids.

The sign chart alternates through all four intervals: negative, positive, negative, positive. That alternation — sign change at every root — certifies all three roots as simple. Compress the hill and valley away and you get [the one-root cubic](!#a-cubic-with-one-root).`,
      link: '',
    },

    obj24: {
      title: `A Cubic with One Root`,
      content: `The second template freezes $x^3 = 0$: the pure cube, monotone from $-\\infty$ to $+\\infty$, crossing the level exactly once — at the origin, where the marble sits.`,
      before: ``,
      after: `With no linear term to fight it, the cubic never turns back: it rises through every level exactly once, so **every** target $n$ yields exactly one real solution. This is the intermediate value theorem in its cleanest costume — a continuous curve from one infinity to the other cannot skip a level.

The root at $0$ is triple ($x^3$ has $x = 0$ with multiplicity three), and the sign chart records it with a change of sign — odd multiplicity crosses, unlike the quadratic's [tangent touch](!#the-tangent-case-one-solution). The flattened shelf around the origin is the picture of that tripled root: the curve crosses, but reluctantly.`,
      link: '',
    },

    obj25: {
      title: `The Shifted Cubic`,
      content: `The third template freezes $x^3 - 4x = 3$: a cubic with pronounced hill and valley, against a level pushed up to $3$. Three crossings again — at $-1.30$, $-1$, and $2.30$.`,
      before: ``,
      after: `The raised level breaks the symmetry of [the three-root state](!#a-cubic-with-three-roots) without changing the count — the level still threads between the local maximum and minimum. One root is exact: $x = -1$ satisfies $-1 + 4 = 3$, and factoring it out leaves $x^2 - x - 3 = 0$, whose roots $\\tfrac{1 \\pm \\sqrt{13}}{2}$ are the two decimal markers in the frame.

The state is a working demonstration of how cubics are actually solved by hand: find one rational root, divide it out, and finish with the quadratic formula. The frozen frame shows all three answers before any algebra starts — the graph as an answer key.`,
      link: '',
    },

    // ---- Per-state sections: Absolute value ----

    obj26: {
      title: `The V with Two Solutions`,
      content: `The first absolute-value template freezes $|x| = 3$: the V-shape with its vertex at the origin, cut by the level line at $x = -3$ and $x = 3$.`,
      before: ``,
      after: `The absolute-value equation is really two linear equations wearing one symbol: on the right arm $x = 3$, on the left arm $-x = 3$. The two frozen markers are those two answers, placed symmetrically because the V's arms have slopes $\\pm 1$.

Between the arms, the sign chart dips negative — $|x| - 3 < 0$ for $|x| < 3$ — and the pattern negative-between, positive-outside is the V's standing signature, shared with the parabola's [two-solution state](!#a-parabola-with-two-solutions). The difference is the corner: where a parabola turns smoothly, the V has a kink, and the kink is where the solution count pivots — see [the vertex case](!#the-v-at-its-vertex).`,
      link: '',
    },

    obj27: {
      title: `The V at Its Vertex`,
      content: `The second template freezes $|x| + 3 = 3$: the vertex is lifted to exactly the level height, and the line touches the V at the single point $x = 0$ — the marble's own position.`,
      before: ``,
      after: `The V's version of tangency: level and vertex agree, and the equation $|x| = 0$ has the unique solution $x = 0$. But the analogy to the parabola's [tangent case](!#the-tangent-case-one-solution) has a limit worth stating — there is no multiplicity here in the polynomial sense, because $|x|$ is not a polynomial. The curve is not flat at the touching point; it comes in at slope $-1$ and leaves at slope $+1$.

The sign chart still shows the even-multiplicity **pattern** — positive, zero, positive, no sign change — proving the pattern belongs to the geometry (touch without crossing) rather than to polynomial algebra. One nudge of $n$ resolves the state into [two solutions](!#the-v-with-two-solutions) or [none](!#the-v-that-never-reaches).`,
      link: '',
    },

    obj28: {
      title: `The V That Never Reaches`,
      content: `The last template freezes $|x| + 5 = 2$: the V floats with its vertex at height $5$, far above the level line at $2$. No markers, no solutions.`,
      before: ``,
      after: `The inequality behind the emptiness is one line: $|x| + 5 \\geq 5 > 2$ for every $x$, so nothing to solve. The explorer's result pill states it directly — **no real solutions** — and the sign chart is one all-positive stripe, the same degenerate chart the parabola's [no-solution state](!#a-parabola-with-no-solution) produces.

One difference from the quadratic case deserves the closing word: there is no complex-number rescue here. $x^2 + 4 = 0$ has imaginary roots, but $|x| + 5 = 2$ has no solutions in any number system where absolute value means distance — the equation is not hiding its answers off the real line; it simply asks for a negative distance. Empty can mean **empty**.`,
      link: '',
    },
  }


  // Frozen-state framed units (Line 1), one per template state. Built here,
  // passed via props, rendered as content-array items.
  const d = equationVisualizerDiagrams;
  const u = (key, caption, text) => demoUnitFrame({ svg: d[key], caption, text });
  const stateUnits = {
    'lin-basic': u('lin-basic', 'x = 3, frozen',
      'The identity line against level 3: one crossing, marked at x = 3. The marble waits at 0, its amber bar measuring the gap of 3 still to close.'),
    'lin-steep': u('lin-steep', '3x &#8722; 2 = 4, frozen',
      'Slope 3 makes the line race through the level at x = 2. Steepness changes the sensitivity of the solution, never the count.'),
    'lin-negative': u('lin-negative', '&#8722;x + 5 = 0, frozen',
      'The downhill line: still one crossing, at x = 5, but the sign chart flips &#8212; positive left, negative right.'),
    'lin-constant': u('lin-constant', '2 = 3 (a = 0), frozen',
      'The degenerate line: slope zero, two parallel horizontals, no crossing anywhere. Zero solutions &#8212; or infinitely many if b = n.'),
    'quad-two': u('quad-two', 'x&#178; &#8722; 4 = 0, frozen',
      'The generic parabola picture: two symmetric crossings at &#177;2, dashed drop-lines marking both. Positive discriminant, drawn.'),
    'quad-one': u('quad-one', 'x&#178; = 0, frozen',
      'Tangency: the level grazes the vertex, one repeated root at 0 &#8212; and the marble happens to sit on it. Touch without crossing.'),
    'quad-none': u('quad-none', 'x&#178; + 4 = 0, frozen',
      'The parabola floats above the level with nothing to mark. The picture of a negative discriminant &#8212; the roots have left the real line.'),
    'quad-high': u('quad-high', 'x&#178; &#8722; 2x &#8722; 3 = 5, frozen',
      'Off-center crossings at &#8722;2 and 4: the level absorbed into the constant term, the symmetry axis shifted to x = 1.'),
    'cubic-three': u('cubic-three', 'x&#179; &#8722; 3x = 0, frozen',
      'The full S: hill and valley straddling the level, three crossings at &#8722;1.73, 0, 1.73. The cubic&#8217;s maximum count.'),
    'cubic-one': u('cubic-one', 'x&#179; = 0, frozen',
      'The monotone cube crosses every level exactly once &#8212; here at its flattened triple root through the origin.'),
    'cubic-shifted': u('cubic-shifted', 'x&#179; &#8722; 4x = 3, frozen',
      'The raised level still threads between hill and valley: three crossings, one exact (&#8722;1) and two irrational.'),
    'abs-two': u('abs-two', '|x| = 3, frozen',
      'The V cut across both arms: two symmetric solutions at &#177;3 &#8212; two linear equations wearing one symbol.'),
    'abs-one': u('abs-one', '|x| + 3 = 3, frozen',
      'Vertex meets level: a single touching point at x = 0, with a kink where the parabola would have a smooth turn.'),
    'abs-none': u('abs-none', '|x| + 5 = 2, frozen',
      'The V floats three units above the level it can never reach: a distance asked to be negative. Empty, with no complex rescue.'),
  };

  // Per-state panel explanations (Line 1). Rendered inside the tool's
  // Explanation card through processContent — $math$ and same-page !# anchors
  // work. Keyed by template match (special constant state first); nothing
  // renders when no key matches or no prop is passed.
  const explanations = {
    'lin-basic': `A sloped line crosses any level exactly once — here at $x = 3$, where curve and target agree. [Learn more about the basic linear equation](!#the-basic-linear-equation) · [All linear states](!#linear-equations-in-the-explorer)`,
    'lin-steep': `Slope $3$ divides the level's changes by three: $x = (n - b)/a$ — steeper lines make less sensitive solutions. [Learn more about the steep line](!#the-steep-line) · [All linear states](!#linear-equations-in-the-explorer)`,
    'lin-negative': `The downhill crossing at $x = 5$ flips the sign chart: positive before, negative after. [Learn more about the falling line](!#the-falling-line) · [All linear states](!#linear-equations-in-the-explorer)`,
    'lin-constant': `With $a = 0$ the line is horizontal: no solution unless $b = n$, and then every $x$ works — never exactly one. [Learn more about the constant equation](!#the-constant-equation) · [All linear states](!#linear-equations-in-the-explorer)`,
    'quad-two': `A level above the vertex is crossed once per arm — the positive-discriminant picture, $x = \\pm 2$. [Learn more about the two-solution parabola](!#a-parabola-with-two-solutions) · [All quadratic states](!#quadratic-equations-in-the-explorer)`,
    'quad-one': `Level and vertex agree: one repeated root, and the sign chart shows no sign change — touch, not crossing. [Learn more about the tangent case](!#the-tangent-case-one-solution) · [All quadratic states](!#quadratic-equations-in-the-explorer)`,
    'quad-none': `$x^2 + 4 \\geq 4$ keeps the curve strictly above level $0$ — the empty solution set, with the roots gone imaginary. [Learn more about the no-solution parabola](!#a-parabola-with-no-solution) · [All quadratic states](!#quadratic-equations-in-the-explorer)`,
    'quad-high': `Subtract the level and factor: $x^2 - 2x - 8 = (x-4)(x+2)$ — the crossings at $-2$ and $4$, symmetric about the shifted axis $x = 1$. [Learn more about raising the level](!#raising-the-level) · [All quadratic states](!#quadratic-equations-in-the-explorer)`,
    'cubic-three': `The level threads between the local hill and valley, so each monotone stretch is crossed once: roots at $0$ and $\\pm\\sqrt{3}$. [Learn more about the three-root cubic](!#a-cubic-with-three-roots) · [All cubic states](!#cubic-equations-in-the-explorer)`,
    'cubic-one': `A monotone cubic cannot skip a level — every target has exactly one real solution, here the triple root at $0$. [Learn more about the one-root cubic](!#a-cubic-with-one-root) · [All cubic states](!#cubic-equations-in-the-explorer)`,
    'cubic-shifted': `One exact root ($x = -1$) plus the quadratic-formula pair $\\tfrac{1 \\pm \\sqrt{13}}{2}$ — the hand-solving recipe, drawn. [Learn more about the shifted cubic](!#the-shifted-cubic) · [All cubic states](!#cubic-equations-in-the-explorer)`,
    'abs-two': `$|x| = 3$ is two linear equations at once — one per arm — giving the symmetric pair $x = \\pm 3$. [Learn more about the two-solution V](!#the-v-with-two-solutions) · [All absolute-value states](!#absolute-value-equations-in-the-explorer)`,
    'abs-one': `The level passes exactly through the vertex: one solution at $x = 0$, a touch with a kink instead of a tangent. [Learn more about the vertex case](!#the-v-at-its-vertex) · [All absolute-value states](!#absolute-value-equations-in-the-explorer)`,
    'abs-none': `$|x| + 5 \\geq 5 > 2$: the V never descends to the level, and no number system supplies a negative distance. [Learn more about the unreachable level](!#the-v-that-never-reaches) · [All absolute-value states](!#absolute-value-equations-in-the-explorer)`,
  };

  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }


  const faqQuestions = {
    obj1: {
      question: "What does the Equation Visual Explorer do?",
      answer: "It solves equations of the form f(x) equals n graphically. A curve representing f(x) is plotted against a horizontal target line at height n, and the solutions of the equation are exactly the points where the curve crosses the line. You drag a marble along the x-axis to probe values, and the sign chart of f(x) minus n shows the structure of the solution set."
    },
    obj2: {
      question: "What equation types can the visualizer handle?",
      answer: "Multiple equation families are supported via the type tabs at the top of the page, including linear and quadratic forms and other common families. Each type has its own parameter sliders so you can adjust the shape of the curve, and the sign chart and explanation panel rebuild automatically when you switch types."
    },
    obj3: {
      question: "What is the sign chart and how do I read it?",
      answer: "The sign chart is a table tracking the sign of f(x) minus n across the real line. Each column corresponds to an interval bounded by critical points (zeros of f(x) minus n or points where f is undefined); each factor of f(x) minus n gets a row showing whether it is positive, negative, or zero in that interval; the highlighted product row shows the sign of f(x) minus n itself. Columns where the product is zero identify solutions of the equation."
    },
    obj4: {
      question: "What is the marble and how do I use it?",
      answer: "The marble is the draggable probe sitting on the curve at a chosen x. Drag it to read off the value of f at that x and to check whether f(x) equals n. You can drag it directly, step it through named stops (zeros and critical points), or let it auto-play across the entire sequence at adjustable speed."
    },
    obj5: {
      question: "How is solving f(x) equals n different from f(x) equals zero?",
      answer: "The two are the same problem in disguise. Solving f(x) equals n is equivalent to solving f(x) minus n equals zero, which is why the visualizer builds its sign chart for the auxiliary function f(x) minus n rather than for f(x) itself. The target n is just a vertical shift of the zero level."
    },
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Equation Visual Explorer",
      "description": "Interactive visualizer for solving f(x) = n by dragging a marble along the curve. Switch equation types, follow solution steps, and read the sign chart of f(x) − n.",
      "url": "https://www.learnmathclass.com/algebra/visual-tools/equation",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Draggable marble probe along the curve y = f(x) compared against the target line y = n",
        "Multiple equation families selectable from a top type bar with per-family parameter sliders",
        "Three interaction modes: free drag, step through named stops, and auto-play with adjustable speed",
        "Sign chart of f(x) − n broken down factor by factor with interactive intervals and critical points",
        "Explanation panel with Steps tab for guided solution and Live tab for real-time check at the current marble position",
        "Parameter templates for common cases such as no solution, double root, and two distinct roots",
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
          "name": "Equation Visual Explorer",
          "item": "https://www.learnmathclass.com/algebra/visual-tools/equation"
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
        title: "Equation Visual Explorer | Solve f(x) = n Step by Step",
        description: "Solve equations of the form f(x) = n by dragging a marble along the curve. Switch equation types, follow steps, and read the sign chart of f(x) - n.",
        keywords: keyWords.join(", "),
        url: "/algebra/visual-tools/equation",
        name: "Equation Visual Explorer",
        hubDescription: "Drag a marble along the x-axis and watch where the curve crosses the horizontal target line — those crossings are the solutions of f(x) = n. Switch between linear, quadratic, and other equation families, play the solution back in steps, and read the sign chart showing where f(x) − n is positive, negative, or zero.",
        category: "",
        subCategory: "",
      image:'/equations.jpg',

      },
    }
  }
}


export default function EquationVisualExplorerPage({seoData, sectionsContent, introContent, faqQuestions, schemas, stateUnits, explanations}) {

  // Helper rows: plain section / per-state section carrying its frozen unit
  // as [content, unit, after].
  const plain = (obj, id) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [sectionsContent[obj].content]
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
    plain('obj2', 'selecting-an-equation-type'),
    plain('obj3', 'three-interaction-modes'),
    plain('obj4', 'adjusting-parameters-and-using-templates'),
    plain('obj5', 'reading-the-sign-chart'),
    plain('obj6', 'reading-the-explanation-panel'),
    plain('obj7', 'keyboard-shortcuts'),

    plain('obj11', 'linear-equations-in-the-explorer'),
    stateRow('obj15', 'the-basic-linear-equation', 'lin-basic'),
    stateRow('obj16', 'the-steep-line', 'lin-steep'),
    stateRow('obj17', 'the-falling-line', 'lin-negative'),
    stateRow('obj18', 'the-constant-equation', 'lin-constant'),

    plain('obj12', 'quadratic-equations-in-the-explorer'),
    stateRow('obj19', 'a-parabola-with-two-solutions', 'quad-two'),
    stateRow('obj20', 'the-tangent-case-one-solution', 'quad-one'),
    stateRow('obj21', 'a-parabola-with-no-solution', 'quad-none'),
    stateRow('obj22', 'raising-the-level', 'quad-high'),

    plain('obj13', 'cubic-equations-in-the-explorer'),
    stateRow('obj23', 'a-cubic-with-three-roots', 'cubic-three'),
    stateRow('obj24', 'a-cubic-with-one-root', 'cubic-one'),
    stateRow('obj25', 'the-shifted-cubic', 'cubic-shifted'),

    plain('obj14', 'absolute-value-equations-in-the-explorer'),
    stateRow('obj26', 'the-v-with-two-solutions', 'abs-two'),
    stateRow('obj27', 'the-v-at-its-vertex', 'abs-one'),
    stateRow('obj28', 'the-v-that-never-reaches', 'abs-none'),

    plain('obj8', 'what-does-f-x-n-mean'),
    plain('obj9', 'why-the-sign-chart-helps-even-for-equations'),
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'-30px'}}>Equation Visual Explorer</h1>
      <br/>
      <div style={{transform:'scale(0.95)'}}>
        <EquationVisualizer explanations={explanations}/>
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