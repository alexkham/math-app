import Head from 'next/head'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import ExplanationDetails from '@/app/components/ExplanationDetails'
import SinusoidalParameterExplorer from '@/app/components/trigonometry/graphs/SinusoidalParameterExplorer'
import functionParametersDiagrams from '@/app/components/trigonometry/graphs/functionParametersDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'
import '@/pages/pages.css'

/* Steps 1-5 (visual-tool-page-creation-instructions v2).
   Route, component, how-to block, template shape, SEO and content.
   IntroSection and KeyTermsCard stay commented permanently (step 4, rulings 2-3).
   Line 1 adds one section per tool state, each carrying a framed unit built
   by demoUnitFrame inside getStaticProps, plus the on-page anchor mesh. */

export async function getStaticProps() {

  const keyWords = [
    'trig function parameters',
    'amplitude period phase shift',
    'sinusoidal function explorer',
    'y = A sin(Bx - C) + D',
    'phase shift calculator graph',
    'vertical shift midline',
    'transform sine graph',
    'transform cosine graph',
    'tangent transformations',
    'interactive trig graph tool',
    'period 2pi over B',
    'amplitude absolute value A',
    'graph transformations trigonometry',
    'inside outside transformations',
    'sinusoidal parameters visualizer',
  ]

  const instructions = [
    'The **Function** row switches the curve between $\\sin$, $\\cos$, $\\tan$ and $\\cot$. The general form $y = Af(Bx - C) + D$ is the same for all four, so every control keeps working when you switch.',
    'The equation above the graph restates the current curve, with each number in the colour of the parameter it belongs to: **A** red, **B** amber, **C** violet, **D** slate. The same four colours label the features on the graph.',
    'The sliders are split into two groups. **Outside the function** holds $A$ and $D$, which act on the value the function returns and therefore move the curve vertically.',
    'Drag **A** to stretch the curve away from its midline. The red bracket on the graph measures $|A|$, and the two dots mark the maximum $D + |A|$ and the minimum $D - |A|$. Pull $A$ below zero and the curve reflects across the midline, with the dashed grey curve showing where it came from.',
    'Drag **D** to move the midline. The dashed slate line follows it to $y = D$, the maximum and minimum move with it, and the amplitude bracket keeps its length.',
    '**Inside the function** holds $B$ and $C$, which act on the input $x$ and therefore move the curve horizontally.',
    'Drag **B** to change how many cycles fit the window. The amber bracket under the curve measures one full period, $\\frac{2\\pi}{|B|}$ for sine and cosine and $\\frac{\\pi}{|B|}$ for tangent and cotangent.',
    'Drag **C** to shift the curve sideways. It moves in steps of $\\frac{\\pi}{12}$, and the violet bar at the top of the graph measures the actual displacement, which is $\\frac{C}{B}$ and not $C$. The readout strip prints both numbers side by side so the difference is visible whenever $B \\ne 1$.',
    'The **Guided walk** buttons set all four parameters at once, one idea per button: the general form, amplitude, a negative $A$, a doubled $B$, the $\\frac{C}{B}$ trap, a raised midline, all four together, and tangent. The explanation panel follows whichever you press.',
    'The strip along the bottom reads the current curve back as numbers: amplitude, period, $C$ itself, the shift $\\frac{C}{B}$, the midline, and the maximum and minimum. Each label carries its parameter colour.',
    'The **Explanations** panel on the right names the four letters, then explains whichever one you last touched. Choosing $\\tan$ or $\\cot$ switches it to the unbounded case, where amplitude has no meaning because the curve has no peak to measure.',
    'The **Reset** button returns the tool to $y = \\sin x$, the baseline every comparison is measured against.',
  ]

  const sectionsContent = {
    obj0: { title: ``, content: ``, before: ``, after: ``, link: '' },

    obj1: {
      title: `Choosing the Function`,
      content: `The **Function** row offers four buttons — $\\sin$, $\\cos$, $\\tan$ and $\\cot$. The curve redraws immediately, and every other control keeps its current value, so switching function is a way of asking what the same four parameters do to a different shape.

The general form is the same in all four cases:

$$y = A\\,f(Bx - C) + D$$

What changes with the function is what the parameters can be seen doing. On $\\sin$ and $\\cos$ the curve is bounded, so all four features are visible at once: a height, a cycle length, a horizontal displacement and a midline. On $\\tan$ and $\\cot$ the curve runs off the top and bottom of the frame between its [asymptotes](!/trigonometry/properties#5), so the height stops being measurable while the other three still are.

The two bounded functions differ only in where their cycle starts, which is why the tool marks the maximum and minimum rather than a starting point: those two dots sit in different places for $\\sin$ and $\\cos$, and comparing them is the quickest way to see the quarter-cycle offset between the two graphs.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `The Equation Bar and the Colour Key`,
      content: `Above the graph, the current curve is written out in full — for example $y = 2.0\\sin(2.00x - \\pi) + 1.0$. Each number appears in the colour of the parameter it belongs to, and the same four colours are used everywhere else in the tool:

- **A** is red, and labels the amplitude bracket, the maximum dot and the minimum dot.
- **B** is amber, and labels the bracket under the curve that spans one period.
- **C** is violet, and labels the bar across the top that measures the phase shift.
- **D** is slate, and labels the dashed midline.

The colour is carried by the slider handle, the number box beside it, the parameter name, and the matching entry in the readout strip. Nothing on the graph is labelled with a bare letter and left for you to match up by guessing.

This matters most when two numbers in the equation are easy to confuse. The value of $C$ is printed in violet in the equation, and the violet bar on the graph measures $\\frac{C}{B}$ — the same colour, deliberately, because the point is that these two violet numbers are not equal unless $B = 1$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Setting the Amplitude with A`,
      content: `The **A** slider runs from $-3$ to $3$ in steps of $0.1$, and sits in the outside group because $A$ multiplies the value the function returns.

As you drag it, the red bracket on the curve keeps measuring the distance from the midline to the peak. That distance is $|A|$, never $A$: drag through zero into the negatives and the bracket length continues to grow while the readout keeps showing a positive number.

Three things move together when $A$ changes. The peak rises to $D + |A|$ and the trough falls to $D - |A|$, both dots relabelling as they go. The midline does not move, because that is $D$'s job. And the horizontal positions of the crossings do not move either, because $A$ does nothing to the input.

At $A = 0$ the curve collapses onto its midline. That is not a defect of the tool but the honest picture: with no vertical stretch left there is no wave, only the constant $y = D$.

Negative values are worth a deliberate pass. The dashed grey curve that appears is the positive-$A$ wave, drawn so the [reflection](!/trigonometry/graphs#6) across the midline can be seen rather than asserted.

Two states are worth freezing: [a stretched wave](!#a-stretched-wave) at $A = 3$, and [a reflected wave](!#a-reflected-wave) at $A = -2$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Moving the Midline with D`,
      content: `The **D** slider runs from $-3$ to $3$ in steps of $0.1$ and sits in the outside group beside $A$, because $D$ is added after the function has returned its value.

The dashed slate line is the [midline](!/trigonometry/graphs#9), and it tracks $D$ exactly. Everything attached to it travels with it: the maximum stays at $D + |A|$, the minimum at $D - |A|$, and the red amplitude bracket keeps precisely the length it had before, because $D$ leaves $A$ alone.

That invariance is the point of having the bracket at all. Raising the midline raises the peak, and a reader who is only watching the peak can easily conclude that the wave grew taller. The bracket does not change length, which settles the question on sight.

The horizontal features ignore $D$ completely: the period bracket keeps its width and the phase-shift bar keeps its position, since neither depends on anything happening outside the function.

For $\\tan$ and $\\cot$ the midline is still drawn and still moves with $D$, even though it is no longer halfway between a maximum and a minimum — there are none. It marks the height the branches pass through.

The frozen case is [a raised midline](!#a-raised-midline), where $D = 2$ and the amplitude bracket is unchanged.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Setting the Period with B`,
      content: `The **B** slider runs from $0.25$ to $4$ in steps of $0.25$ and belongs to the inside group, because $B$ multiplies $x$ before the function is applied.

The amber bracket beneath the curve spans one complete cycle, and its printed length is the period:

$$T = \\frac{2\\pi}{|B|}$$

for $\\sin$ and $\\cos$, and $\\frac{\\pi}{|B|}$ for $\\tan$ and $\\cot$. The window is fixed at $[-2\\pi, 2\\pi]$, so raising $B$ visibly packs more cycles into the same span while the bracket shrinks to match.

Two readings are worth making deliberately. At $B = 2$ the bracket is $\\pi$ wide and exactly two cycles fill the interval $[0, 2\\pi]$. At $B = 0.25$ the bracket is $8\\pi$ wide, wider than the window itself, so the bracket disappears and a single slow cycle stretches past both edges — the tool draws no bracket it cannot fit, rather than drawing a misleading one.

Nothing vertical responds. The amplitude bracket keeps its length and the midline holds its height, because $B$ acts only on the input.

The frozen case is [a doubled frequency](!#a-doubled-frequency), where $B = 2$ halves the period to $\pi$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Shifting with C, and Why the Shift Is C Over B`,
      content: `The **C** slider moves in steps of $\\frac{\\pi}{12}$ from $-2\\pi$ to $2\\pi$, and its number box reads in multiples of $\\pi$ rather than in decimals.

The violet bar across the top of the graph measures the displacement of the curve from the origin. That displacement is:

$$\\text{phase shift} = \\frac{C}{B}$$

and it is the single most common place to go wrong. Set $B = 2$ and $C = \\pi$: the equation bar shows $\\pi$ in violet, the bar on the graph measures $0.5\\pi$, and the readout strip prints both, side by side, under the labels **C itself** and **Shift C/B**.

The reason is visible in the algebra: the standard cycle begins where the argument is zero, so $Bx - C = 0$ gives $x = \\frac{C}{B}$. The bigger $B$ is, the less far the curve has to travel for the argument to catch up.

Leave $B = 1$ and the two numbers agree, which is exactly why the error survives so long — every example with $B = 1$ confirms the wrong rule as loudly as the right one.

The frozen case is [a shifted wave](!#a-shifted-wave), the one place where $C$ and the shift are different numbers.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `The Guided Walk`,
      content: `The eight **Guided walk** buttons each set all four parameters at once and point the explanation panel at one idea. They are meant to be pressed in order, but any of them can be taken alone.

- **form** — the baseline $y = \\sin x$, every parameter at its neutral value.
- **A = 3** — a vertical stretch with nothing else touched.
- **A < 0** — the reflection across the midline, with the dashed ghost of the positive wave.
- **B = 2** — two cycles where there was one, the bracket halving to $\\pi$.
- **C/B** — $B = 2$ with $C = \\pi$, the case where the shift and $C$ differ.
- **D = 2** — the midline raised, the amplitude bracket unchanged.
- **all four** — $y = 2\\sin(2x - \\pi) + 1$, every parameter away from neutral at once.
- **tan** — the unbounded case, where amplitude stops being defined.

Pressing a walk button clears the free-exploration state; moving any slider afterwards releases it again, so the walk is a set of starting points rather than a mode you have to leave.

The walk starts from [the baseline wave](!#the-baseline-wave) and ends at [all four at once](!#all-four-at-once).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Reading the Curve Back as Numbers`,
      content: `The strip along the bottom of the controls states the current curve as six quantities, each in its parameter's colour: **amplitude**, **period**, **C itself**, the **shift**, the **midline**, and the **maximum and minimum** as a pair.

It exists so that the tool can be run backwards. Reading a graph means recovering these numbers from the picture, and the standard order is midline first, then amplitude, then period, then phase shift:

$$D = \\frac{\\text{max} + \\text{min}}{2} \\qquad |A| = \\frac{\\text{max} - \\text{min}}{2}$$

Both readings are on screen at once — the dots give the maximum and minimum, the strip gives $D$ and $|A|$ — so a guess can be checked immediately rather than at the end of a worked exercise.

Two entries are deliberately redundant. **C itself** and **Shift C/B** would be one column in a tidier layout, and are two here because the difference between them is the thing most often lost. For $\\tan$ and $\\cot$ the amplitude entry reads **none** and the maximum and minimum read **unbounded**, rather than printing a number that would not mean anything.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Inside and Outside the Function`,
      content: `The four parameters are not four unrelated knobs. They divide cleanly in two, and the division is structural rather than a convention of notation.

$B$ and $C$ sit **inside** the function, acting on $x$ before $\\sin$ or $\\tan$ ever sees it. Whatever they do, they do to the input axis: $B$ rescales it and $C$ slides it. $A$ and $D$ sit **outside**, acting on the number the function has already returned: $A$ rescales that value and $D$ adds to it.

Everything else follows from this. Amplitude and midline are vertical because they come from outside operations. Period and phase shift are horizontal because they come from inside ones. The two groups never interfere: dragging $B$ cannot change the height of a peak, and dragging $A$ cannot move a zero crossing sideways.

The inside operations also explain their own arithmetic. An inside factor of $B$ compresses the axis by $B$, which is why the period is divided by $|B|$ and why the displacement produced by $C$ is likewise divided by $B$. The same reasoning applies to any function of $x$, not only to the trigonometric ones — this is the general theory of [function transformations](!/trigonometry/graphs#5), seen on a curve where all four effects are visible at once.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Why Tangent and Cotangent Have No Amplitude`,
      content: `Amplitude is defined as half the distance between the maximum and the minimum. Tangent and cotangent have neither: between consecutive [asymptotes](!/trigonometry/properties#5) the branch runs from $-\\infty$ to $\\infty$, so there is no highest point to measure from and no lowest one to measure to.

The tool says so rather than hiding the controls. On $\\tan$ and $\\cot$, the amplitude readout reads **none**, the maximum and minimum read **unbounded**, the red bracket is not drawn, and the explanation panel switches to the unbounded case.

$A$ itself still works, and still does something worth watching: it scales every value of the function by the same factor, steepening or flattening the branches. What it no longer does is set a height, because there is no height. A negative $A$ still reflects the branches across the midline, which for tangent turns a rising branch into a falling one — the shape of cotangent, though not cotangent itself, since the asymptotes stay where tangent's are.

The period also halves relative to the bounded case. Tangent repeats every $\\pi$ rather than every $2\\pi$, so its period is $\\frac{\\pi}{|B|}$, and the amber bracket is correspondingly narrower at the same value of $B$.

The frozen case is [the tangent case](!#the-tangent-case), where the amplitude bracket is absent by design.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `From a Graph Back to an Equation`,
      content: `The reverse problem — given a drawn curve, write its equation — uses exactly the quantities this tool displays, in a fixed order.

Read the **midline** first, as the horizontal line halfway between the highest and lowest points; that is $D$. Read the **amplitude** next, as the distance from that line to a peak; that is $|A|$, with the sign decided by whether the curve leaves the midline upward or downward. Read the **period** third, as the horizontal distance covered by one complete cycle, and convert it with $B = \\frac{2\\pi}{T}$. Read the **phase shift** last, by finding where a standard cycle begins, and recover $C$ from $C = B \\times \\text{shift}$ — the step where the division by $B$ has to be undone rather than forgotten.

This tool supports the practice rather than performing it: set the four sliders to your reading and compare the curve you get with the curve you were given. If they differ, the readout strip shows which of the four quantities disagrees.

The worked procedure, and the [key-point method](!/trigonometry/graphs#11) for drawing such a curve by hand, are treated on the trigonometric graphs lesson page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj12: {
      title: `Related Concepts and Tools`,
      content: `This tool assumes the six graphs are already familiar and asks what four numbers do to them. The neighbouring pages come at the same material from other directions.

The [Trigonometric Functions Graphs](!/trigonometry/visual-tools/functions-graphs) explorer plots each of the six functions in its unmodified form and slides a marker along the curve, reading off values angle by angle — the right place to start if the shape of $\\sin$, $\\tan$ or $\\csc$ is not yet settled.

The [Angle Explorer](!/trigonometry/visual-tools/angle-explorer) and the [Unit Circle](!/trigonometry/unit-circle) treat the input side: what an angle is, how it sits in standard position, and where the values being plotted here actually come from. The [Unit Circle Visualizer](!/visual-tools/unit-circle) is the tool version of that: it turns the angle and reads the coordinates the wave is built from, one special angle at a time.

For the theory behind each parameter in prose form, with worked examples and the full derivations, the [Trigonometric Graphs](!/trigonometry/graphs) lesson covers the general sinusoidal form, amplitude, period, phase shift and vertical shift as separate sections. The [Properties of Trigonometric Functions](!/trigonometry/properties) page covers periodicity, boundedness and asymptotes, which is where the tangent and cotangent case is argued rather than simply stated.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj13: {
      title: `The Baseline Wave`,
      content: `Every comparison in this tool is measured against one curve: $y = \sin x$, with $A = 1$, $B = 1$, $C = 0$ and $D = 2$ replaced by $D = 0$. It is what the **Reset** button restores and what the first button of the [guided walk](!#the-guided-walk) loads.`,
      after: `In this state the midline sits on the $x$-axis, the amplitude bracket measures $1$, the period bracket spans $2\pi$, and there is no phase-shift bar at all, because a displacement of zero is not drawn. Each of the states below changes exactly one of those readings, which is what makes them comparable.`,
      before: ``,
      link: '',
    },

    obj14: {
      title: `A Stretched Wave`,
      content: `Setting $A = 3$ and leaving everything else alone is the cleanest demonstration that [amplitude](!#setting-the-amplitude-with-a) is a vertical quantity and nothing else.`,
      after: `The peak has climbed to $3$ and the trough has fallen to $-3$, so the red bracket now measures $3$. Compare the horizontal features with [the baseline wave](!#the-baseline-wave): the period bracket has the same width and the zero crossings sit at the same places. A stretch away from the midline moves no point sideways.`,
      before: ``,
      link: '',
    },

    obj15: {
      title: `A Reflected Wave`,
      content: `At $A = -2$ the tool draws two curves. The solid one is $y = -2\sin x$; the dashed grey one is $y = 2\sin x$, the wave it is a [reflection](!#setting-the-amplitude-with-a) of.`,
      after: `Read the two together and the rule is visible rather than asserted: every point of one is the mirror image of the other in the midline, the maximum and minimum dots have swapped places, and the amplitude readout stays at $|A| = 2$. The sign of $A$ decides which way the curve leaves the midline; the size of $A$ decides how far it goes.`,
      before: ``,
      link: '',
    },

    obj16: {
      title: `A Doubled Frequency`,
      content: `With $B = 2$ the input axis is compressed by a factor of two, which is the whole content of the [period](!#setting-the-period-with-b) formula $T = \frac{2\pi}{|B|}$.`,
      after: `The amber bracket is now $\pi$ wide instead of $2\pi$, and two complete cycles fit in the interval that previously held one. Nothing vertical has moved: the bracket measuring $|A|$ is the same length as in [the baseline wave](!#the-baseline-wave), and the midline has not shifted. An inside factor rescales the horizontal axis only.`,
      before: ``,
      link: '',
    },

    obj17: {
      title: `A Shifted Wave`,
      content: `This is the state the whole tool exists for. Here $B = 2$ and $C = \pi$, so the equation bar prints $\pi$ while the violet bar on the graph measures $\frac{\pi}{2}$ — the [phase shift](!#shifting-with-c-and-why-the-shift-is-c-over-b) is $\frac{C}{B}$.`,
      after: `The two violet numbers in the readout strip, **C itself** and **Shift C/B**, are deliberately printed side by side in this state. The curve begins its standard cycle where the argument $Bx - C$ is zero, which is $x = \frac{\pi}{2}$, and the bar measures from the origin to exactly that point. Set $B$ back to $1$ and the two numbers coincide again.`,
      before: ``,
      link: '',
    },

    obj18: {
      title: `A Raised Midline`,
      content: `At $D = 2$ the entire curve moves up by two units, which is all a [vertical shift](!#moving-the-midline-with-d) does.`,
      after: `The dashed slate line has moved to $y = 2$, the maximum reads $3$ and the minimum reads $1$, both still exactly $|A|$ away from the midline. The red bracket is the check: it has the same length it had in [the baseline wave](!#the-baseline-wave), so the wave was lifted, not stretched. The period bracket and the crossings are untouched.`,
      before: ``,
      link: '',
    },

    obj19: {
      title: `All Four at Once`,
      content: `The state $y = 2\sin(2x - \pi) + 1$ puts every parameter away from its neutral value at the same time, which is how sinusoids actually arrive in problems.`,
      after: `Each annotation still reports its own parameter and nothing else: the red bracket measures $2$, the amber bracket spans $\pi$, the violet bar measures $\frac{\pi}{2}$, and the dashed midline sits at $y = 1$, with the peak at $3$ and the trough at $-1$. Reading them in the order midline, amplitude, period, shift is exactly the procedure described in [reading the curve back as numbers](!#reading-the-curve-back-as-numbers).`,
      before: ``,
      link: '',
    },

    obj20: {
      title: `The Tangent Case`,
      content: `Switching the function to $\tan$ keeps the same four sliders and drops one annotation, because [amplitude has no meaning](!#why-tangent-and-cotangent-have-no-amplitude) for an unbounded curve.`,
      after: `There is no red bracket and there are no maximum or minimum dots — there is nothing to measure them against. The dashed red lines are the **asymptotes**, and between any two of them the branch covers every real value. What survives is the amber bracket, now spanning $\pi$ rather than $2\pi$, the midline, and the phase-shift bar. The readout strip states the absence in words, printing **none** for amplitude and **unbounded** for the maximum and minimum.`,
      before: ``,
      link: '',
    },
  }

  /* Explanation bodies for the tool's own panel, each ending in the Line 1
     anchor pair: the state section, then the group section that owns it. */
  const explanations = {
    form: `**y = A f(Bx - C) + D.** Four letters, four separate jobs. Move one slider and exactly one feature of the curve responds; each is drawn on the graph in its own colour. **Outside** the function, A and D act on the value it returns, so they work vertically. **Inside**, B and C act on the input x, so they work horizontally. [Learn more about the general form](!#the-baseline-wave) · [the guided walk](!#the-guided-walk)`,
    A: `**A - amplitude.** A stretches the curve away from its midline. Midline to peak is **|A|**, so A = 3 and A = -3 are equally tall. A negative A reflects the curve across the midline; the dashed grey curve is the positive wave it came from, and the amplitude readout stays |A|. Maximum = **D + |A|**, minimum = **D - |A|**. [Learn more about amplitude](!#a-stretched-wave) · [the reflected case](!#a-reflected-wave)`,
    B: `**B - period.** B multiplies x, squeezing the horizontal axis. The period is $\frac{2\pi}{|B|}$ for sine and cosine, $\frac{\pi}{|B|}$ for tangent and cotangent. Larger B fits more cycles in the same window, and nothing vertical responds. [Learn more about the period](!#a-doubled-frequency) · [setting B](!#setting-the-period-with-b)`,
    C: `**C - phase shift.** The curve moves by **C/B**, not by C. With C = $\pi$ and B = 2 the shift is $\frac{\pi}{2}$, not $\pi$. Compare the violet bar on the graph with the value of C in the equation; they agree only when B = 1. [Learn more about the phase shift](!#a-shifted-wave) · [why it is C over B](!#shifting-with-c-and-why-the-shift-is-c-over-b)`,
    D: `**D - vertical shift.** D lifts the whole curve. The midline moves to **y = D**, the maximum to D + |A|, the minimum to D - |A|, and the amplitude bracket keeps its length because D leaves A alone. [Learn more about the vertical shift](!#a-raised-midline) · [moving the midline](!#moving-the-midline-with-d)`,
    unbounded: `**Amplitude has no meaning here.** Tangent and cotangent are unbounded: no peak, so no distance from midline to maximum to measure. A still scales the curve and D still lifts it, but |A| is not an amplitude. The period is $\frac{\pi}{|B|}$, half the sine and cosine case. [Learn more about the tangent case](!#the-tangent-case) · [why there is no amplitude](!#why-tangent-and-cotangent-have-no-amplitude)`,
  }

  const stateUnits = {
    baseline: demoUnitFrame({
      svg: functionParametersDiagrams.generalForm,
      caption: 'y = sin x, the baseline state',
      text: 'Every parameter at its neutral value: amplitude 1, period 2&pi;, no shift, midline on the x-axis. The four annotations name the four features the sliders move.',
    }),
    stretched: demoUnitFrame({
      svg: functionParametersDiagrams.amplitude,
      caption: 'A = 3, everything else unchanged',
      text: 'The red bracket measures 3 and the dots read max = 3, min = &minus;3. The period bracket and the crossings sit exactly where they did at A = 1, because A acts outside the function.',
    }),
    reflected: demoUnitFrame({
      svg: functionParametersDiagrams.reflection,
      caption: 'A = &minus;2, with the positive wave dashed behind it',
      text: 'The solid curve is the dashed one mirrored in the midline. The maximum and minimum dots have traded places, and the amplitude readout stays at |A| = 2, because a distance is never negative.',
    }),
    doubled: demoUnitFrame({
      svg: functionParametersDiagrams.period,
      caption: 'B = 2, the period halved',
      text: 'One cycle now spans &pi; instead of 2&pi;, so two cycles fill the interval that held one. The amplitude bracket is the same length as before: an inside factor rescales the horizontal axis only.',
    }),
    shifted: demoUnitFrame({
      svg: functionParametersDiagrams.phaseShift,
      caption: 'B = 2 and C = &pi;, so the shift is &pi;/2',
      text: 'The equation carries C = &pi; while the violet bar measures &pi;/2. The standard cycle begins where Bx &minus; C = 0, which is x = C/B &mdash; the division by B is the step most often skipped.',
    }),
    raised: demoUnitFrame({
      svg: functionParametersDiagrams.verticalShift,
      caption: 'D = 2, the midline lifted',
      text: 'The dashed midline has moved to y = 2 and carried the maximum and minimum with it, to 3 and 1. The amplitude bracket has not changed length, which is how you tell a lift from a stretch.',
    }),
    combined: demoUnitFrame({
      svg: functionParametersDiagrams.allFour,
      caption: 'y = 2 sin(2x &minus; &pi;) + 1',
      text: 'All four parameters away from neutral at once. Each annotation still reports one parameter: amplitude 2, period &pi;, shift &pi;/2, midline 1, with the peak at 3 and the trough at &minus;1.',
    }),
    tangent: demoUnitFrame({
      svg: functionParametersDiagrams.tangent,
      caption: 'y = tan x, the unbounded case',
      text: 'No amplitude bracket and no maximum or minimum dots, because the branches run to infinity between the dashed asymptotes. The period bracket survives and spans &pi;, half the sine and cosine value.',
    }),
  }

  const introContent = {
    id: 'intro',
    title: '',
    content: ``,
  }

  const faqQuestions = {
    obj0: {
      question: 'Why is the phase shift C divided by B, and not just C?',
      answer: 'Because the standard cycle begins where the argument of the function is zero. Solving Bx - C = 0 gives x = C/B, so the displacement depends on B as well as on C. The two agree only when B = 1, which is why the error survives: every example with B = 1 confirms the wrong rule and the right one equally well. Set B = 2 and C = pi in the tool and the equation bar shows pi while the bar on the graph measures pi/2.',
      sectionId: 'shifting-with-c-and-why-the-shift-is-c-over-b',
    },
    obj1: {
      question: 'Why does a negative A still show a positive amplitude?',
      answer: 'Amplitude is a distance, so it is never negative. A negative A reflects the curve across its midline: peaks become troughs and troughs become peaks, but the distance from the midline to either is still the absolute value of A. The tool draws the positive-A curve as a dashed grey ghost so the reflection is visible, and the amplitude readout stays at the absolute value.',
      sectionId: 'setting-the-amplitude-with-a',
    },
    obj2: {
      question: 'Why does the amplitude readout say none for tangent?',
      answer: 'Tangent has no maximum and no minimum. Between consecutive asymptotes its branch runs from minus infinity to plus infinity, so there is no distance from a midline to a peak to measure. A still scales the branches and D still moves the midline, but the quantity called amplitude is not defined, so the tool reports none rather than printing a number that would not mean anything.',
      sectionId: 'why-tangent-and-cotangent-have-no-amplitude',
    },
    obj3: {
      question: 'Which parameters move the curve sideways and which move it up and down?',
      answer: 'B and C act inside the function, on the input x, so they work horizontally: B sets the period and C produces the phase shift. A and D act outside, on the value the function returns, so they work vertically: A sets the amplitude and D sets the midline. The two groups never interfere, which is why the sliders are grouped that way in the tool.',
      sectionId: 'inside-and-outside-the-function',
    },
    obj4: {
      question: 'In what order should the four parameters be read off a graph?',
      answer: 'Midline first, as the line halfway between the highest and lowest points, which gives D. Amplitude second, as the distance from that line to a peak, which gives the absolute value of A. Period third, as the width of one full cycle, converted with B = 2 pi over T. Phase shift last, from where a standard cycle begins, with C recovered as B times the shift.',
      sectionId: 'from-a-graph-back-to-an-equation',
    },
  }

  const schemas = {
    webApplication: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Trigonometric Function Parameters Explorer',
      url: 'https://www.learnmathclass.com/trigonometry/visual-tools/function-parameters',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires JavaScript',
      description: 'Interactive explorer for the general form y = A f(Bx - C) + D. Drag A, B, C and D on one live curve and watch amplitude, period, phase shift and midline respond, on sine, cosine, tangent and cotangent.',
      inLanguage: 'en-US',
      isAccessibleForFree: true,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Learn Math Class',
      },
    },

    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.learnmathclass.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Trigonometry',
          item: 'https://www.learnmathclass.com/trigonometry',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Visual Tools',
          item: 'https://www.learnmathclass.com/trigonometry/visual-tools',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Trigonometric Function Parameters',
          item: 'https://www.learnmathclass.com/trigonometry/visual-tools/function-parameters',
        },
      ],
    },

    faq: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: Object.keys(faqQuestions).map((key) => ({
        '@type': 'Question',
        name: faqQuestions[key].question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faqQuestions[key].answer,
        },
      })),
    },
  }

  return {
    props: {
      relatedTools: getRelatedTools('function-parameters'),
      instructions,
      explanations,
      stateUnits,
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: 'Trig Function Parameters: A, B, C, D | Learn Math Class',
        description: 'Change A, B, C and D on one live curve and watch amplitude, period, phase shift and midline move. Sine, cosine, tangent and cotangent, side by side.',
        hubDescription: 'An interactive explorer for the general form y = A f(Bx - C) + D. Drag one parameter at a time and watch the feature it controls move on the curve: the amplitude bracket, the period bracket, the phase-shift bar and the midline, each drawn in the colour of its own slider. Works on sine, cosine, tangent and cotangent, and states plainly where amplitude stops having a meaning.',
        category: 'Functions',
        subCategory: 'Graph Transformations',
        keywords: keyWords.join(', '),
        url: '/trigonometry/visual-tools/function-parameters',
        name: 'Trigonometric Function Parameters Explorer',
      },
    },
  }
}

export default function FunctionParametersPage({
  relatedTools,
  instructions,
  explanations,
  stateUnits,
  seoData,
  sectionsContent,
  introContent,
  faqQuestions,
  schemas,
}) {

  const genericSections = [
    {
      id: 'choosing-the-function',
      title: sectionsContent.obj1.title,
      link: sectionsContent.obj1.link,
      content: [sectionsContent.obj1.content],
    },
    {
      id: 'the-equation-bar-and-the-colour-key',
      title: sectionsContent.obj2.title,
      link: sectionsContent.obj2.link,
      content: [sectionsContent.obj2.content],
    },
    {
      id: 'setting-the-amplitude-with-a',
      title: sectionsContent.obj3.title,
      link: sectionsContent.obj3.link,
      content: [sectionsContent.obj3.content],
    },
    {
      id: 'moving-the-midline-with-d',
      title: sectionsContent.obj4.title,
      link: sectionsContent.obj4.link,
      content: [sectionsContent.obj4.content],
    },
    {
      id: 'setting-the-period-with-b',
      title: sectionsContent.obj5.title,
      link: sectionsContent.obj5.link,
      content: [sectionsContent.obj5.content],
    },
    {
      id: 'shifting-with-c-and-why-the-shift-is-c-over-b',
      title: sectionsContent.obj6.title,
      link: sectionsContent.obj6.link,
      content: [sectionsContent.obj6.content],
    },
    {
      id: 'the-guided-walk',
      title: sectionsContent.obj7.title,
      link: sectionsContent.obj7.link,
      content: [sectionsContent.obj7.content],
    },
    {
      id: 'reading-the-curve-back-as-numbers',
      title: sectionsContent.obj8.title,
      link: sectionsContent.obj8.link,
      content: [sectionsContent.obj8.content],
    },
    {
      id: 'inside-and-outside-the-function',
      title: sectionsContent.obj9.title,
      link: sectionsContent.obj9.link,
      content: [sectionsContent.obj9.content],
    },
    {
      id: 'why-tangent-and-cotangent-have-no-amplitude',
      title: sectionsContent.obj10.title,
      link: sectionsContent.obj10.link,
      content: [sectionsContent.obj10.content],
    },
    {
      id: 'from-a-graph-back-to-an-equation',
      title: sectionsContent.obj11.title,
      link: sectionsContent.obj11.link,
      content: [sectionsContent.obj11.content],
    },
    {
      id: 'the-baseline-wave',
      title: sectionsContent.obj13.title,
      link: sectionsContent.obj13.link,
      content: [
        sectionsContent.obj13.content,
        <div key={'u-baseline'} dangerouslySetInnerHTML={{ __html: stateUnits.baseline }} />,
        sectionsContent.obj13.after,
      ],
    },
    {
      id: 'a-stretched-wave',
      title: sectionsContent.obj14.title,
      link: sectionsContent.obj14.link,
      content: [
        sectionsContent.obj14.content,
        <div key={'u-stretched'} dangerouslySetInnerHTML={{ __html: stateUnits.stretched }} />,
        sectionsContent.obj14.after,
      ],
    },
    {
      id: 'a-reflected-wave',
      title: sectionsContent.obj15.title,
      link: sectionsContent.obj15.link,
      content: [
        sectionsContent.obj15.content,
        <div key={'u-reflected'} dangerouslySetInnerHTML={{ __html: stateUnits.reflected }} />,
        sectionsContent.obj15.after,
      ],
    },
    {
      id: 'a-doubled-frequency',
      title: sectionsContent.obj16.title,
      link: sectionsContent.obj16.link,
      content: [
        sectionsContent.obj16.content,
        <div key={'u-doubled'} dangerouslySetInnerHTML={{ __html: stateUnits.doubled }} />,
        sectionsContent.obj16.after,
      ],
    },
    {
      id: 'a-shifted-wave',
      title: sectionsContent.obj17.title,
      link: sectionsContent.obj17.link,
      content: [
        sectionsContent.obj17.content,
        <div key={'u-shifted'} dangerouslySetInnerHTML={{ __html: stateUnits.shifted }} />,
        sectionsContent.obj17.after,
      ],
    },
    {
      id: 'a-raised-midline',
      title: sectionsContent.obj18.title,
      link: sectionsContent.obj18.link,
      content: [
        sectionsContent.obj18.content,
        <div key={'u-raised'} dangerouslySetInnerHTML={{ __html: stateUnits.raised }} />,
        sectionsContent.obj18.after,
      ],
    },
    {
      id: 'all-four-at-once',
      title: sectionsContent.obj19.title,
      link: sectionsContent.obj19.link,
      content: [
        sectionsContent.obj19.content,
        <div key={'u-combined'} dangerouslySetInnerHTML={{ __html: stateUnits.combined }} />,
        sectionsContent.obj19.after,
      ],
    },
    {
      id: 'the-tangent-case',
      title: sectionsContent.obj20.title,
      link: sectionsContent.obj20.link,
      content: [
        sectionsContent.obj20.content,
        <div key={'u-tangent'} dangerouslySetInnerHTML={{ __html: stateUnits.tangent }} />,
        sectionsContent.obj20.after,
      ],
    },
    {
      id: 'related-concepts-and-tools',
      title: sectionsContent.obj12.title,
      link: sectionsContent.obj12.link,
      content: [sectionsContent.obj12.content],
    },
  ].filter((s) => s.title)

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

      <br />
      <br />
      <br />
      <br />
      <OperaSidebar
        side='right'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb />
      <br />
      <br />
      <h1 className='title' style={{ marginTop: '-50px', marginBottom: '0px' }}>
        Trigonometric Function Parameters
      </h1>
      <br />

      <div style={{ width: '80%', margin: 'auto' }}>
        <ExplanationDetails
          title='How to use'
          instructions={instructions}
          accent='#1e40af'
        />
      </div>
      <br />

      <div style={{ width: '90%', margin: 'auto' }}>
        <SinusoidalParameterExplorer explanations={explanations} />
      </div>

      <br />
      <br />

      <SectionTableOfContents
        sections={genericSections}
        showSecondaryNav={true}
        secondaryNavMode="siblings"
        secondaryNavTitle="More in this Section"
      />
      <br />
      <br />

      {/* IntroSection and KeyTermsCard stay commented on a tool page
          (visual-tool-page-creation-instructions v2, step 4, rulings 2 and 3).

      <IntroSection
        id={introContent.id}
        title={introContent.title}
        content={introContent.content}
        backgroundColor='#f9fafb'
        textColor="#06357a"
      />
      <KeyTermsCard
        id="0"
        title={sectionsContent.obj0.title}
        content={sectionsContent.obj0.content}
        after={sectionsContent.obj0.after}
        variant="light"
      />
      */}

      <RelatedTools tools={relatedTools} />

      <Sections sections={genericSections} />

      <br />
      <br />
      <br />
    </>
  )
}
