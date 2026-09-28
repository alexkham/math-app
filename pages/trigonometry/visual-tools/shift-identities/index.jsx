import Head from 'next/head'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import SiblingsNavStandalone from '@/app/components/SiblingsNavStandalone'
import ExplanationDetails from '@/app/components/ExplanationDetails'
import ShiftIdentityExplorer from '@/app/components/trigonometry/ShiftIdentityExplorer'
import shiftIdentityDiagrams from '@/app/components/trigonometry/shiftIdentityDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'
import { processContent } from '@/app/utils/contentProcessor'
import '@/pages/pages.css'

/* Visual tool page, steps 1-7 (visual-tool-page-creation-instructions v2).
   Identity-explorer family (mirrors the supplementary-angle page): one
   section per identity, each with a framed unit rendered from the tool's own
   ShiftScene. How-to instructions are a live mesh with the usage sections.
   The rotation panel's note is page-fed (explanations prop, keyed fn:shift)
   and carries the anchor pair. The component's review row is switched off.
   IntroSection and KeyTermsCard stay commented (step 4, rulings 2-3). */

const FN_WORD = { sin: 'sine', cos: 'cosine', tan: 'tangent' }
const SHIFT_WORD = { pi: 'pi', halfPi: 'half-pi' }
const idSlug = (fn, shift) => `${FN_WORD[fn]}-shifted-by-${SHIFT_WORD[shift]}`

export async function getStaticProps() {

  const keyWords = [
    'shift identities',
    'sin(x + pi)',
    'cos(x + pi/2)',
    'sin(theta + pi/2) = cos theta',
    'tan(x + pi)',
    'phase shift identities trig',
    'quarter turn half turn unit circle',
    'trig identities shift by pi',
    'cos(theta + pi) = -cos theta',
    'tan(theta + pi/2) = -cot theta',
    'rotation identities trigonometry',
    'interactive trig identity tool',
    'shift identity explorer',
    'unit circle rotation proof',
    'sine cosine shift pi over 2',
  ]

  const instructions = [
    'The three **tabs** across the top switch between $\\sin$, $\\cos$ and $\\tan$ of the shifted angle. The identity bar underneath writes out the current identity. [Learn more about switching functions](!#switching-between-functions)',
    'The **Shift** buttons choose between $+\\pi$, a half turn, and $+\\frac{\\pi}{2}$, a quarter turn. Together with the tabs they select one of six identities. [Learn more about choosing the shift](!#choosing-the-shift)',
    'Drag the **θ slider** through the full turn from $0°$ to $360°$. The point P and its rotated copy P′ move together, and every value on the page recomputes. [Learn more about the angle](!#adjusting-the-angle)',
    'The figure shows P on the unit circle, the green arrow turning it to P′, and the legs of both right triangles coloured by which function they measure. The banner at the bottom checks the identity numerically. [Learn more about the figure](!#reading-the-rotation-figure)',
    'The panel on the right gives the coordinates of P and P′ and highlights the one consequence that proves the current identity. [Learn more about the rotation panel](!#the-rotation-panel)',
    'The two cards under the figure evaluate the left and right sides of the identity at θ. They agree at every angle. [Learn more about the numerical check](!#checking-both-sides)',
    'The **identity table** under the tool lists all six identities with their effect and value. Click a row to open that identity. [Learn more about the identity table](!#reading-the-identity-table)',
  ]

  /* Note for the rotation panel, keyed fn:shift, rendered under the panel's
     own text. Ends in the Line 1 anchor pair. */
  const explanations = {}
  for (const shift of ['pi', 'halfPi']) {
    for (const fn of ['sin', 'cos', 'tan']) {
      explanations[`${fn}:${shift}`] = `[Full treatment](!#${idSlug(fn, shift)}) · [${shift === 'pi' ? 'Why a half turn flips both signs' : 'Why a quarter turn swaps the coordinates'}](!#${shift === 'pi' ? 'why-a-half-turn-flips-both-signs' : 'why-a-quarter-turn-swaps-the-coordinates'})`
    }
  }

  const D = shiftIdentityDiagrams()
  const unitText = {
    'sin:pi': ['sin(&#952; + &#960;) = &#8722;sin &#952;, frozen at &#952; = 35&#176;', 'The half turn carries P to the opposite point P&#8242;. Its height is the same length as P&#8217;s, pointing down: the sine flips sign.'],
    'cos:pi': ['cos(&#952; + &#960;) = &#8722;cos &#952;, frozen at &#952; = 35&#176;', 'The same half turn read horizontally: P&#8242;&#8217;s x-leg has the length of P&#8217;s, pointing left, so the cosine flips sign.'],
    'tan:pi': ['tan(&#952; + &#960;) = tan &#952;, frozen at &#952; = 35&#176;', 'Both coordinates of P&#8242; are the negatives of P&#8217;s, so their ratio is unchanged. This is why tangent repeats every &#960;.'],
    'sin:halfPi': ['sin(&#952; + &#960;/2) = cos &#952;, frozen at &#952; = 35&#176;', 'The quarter turn swaps the legs: P&#8242;&#8217;s height, drawn in the cosine colour, is exactly as long as P&#8217;s x-leg.'],
    'cos:halfPi': ['cos(&#952; + &#960;/2) = &#8722;sin &#952;, frozen at &#952; = 35&#176;', 'P&#8242;&#8217;s x-leg, in the sine colour, is as long as P&#8217;s height and points left: the cosine becomes minus the sine.'],
    'tan:halfPi': ['tan(&#952; + &#960;/2) = &#8722;cot &#952;, frozen at &#952; = 35&#176;', 'The ratio y/x of P&#8242; is cos &#952; over &#8722;sin &#952;, which is minus the cotangent.'],
  }
  const stateUnits = {}
  for (const key of Object.keys(unitText)) {
    stateUnits[key] = demoUnitFrame({ svg: D[key], caption: unitText[key][0], text: unitText[key][1] })
  }

  const sectionsContent = {
    obj0: { title: ``, content: ``, before: ``, after: ``, link: '' },

    obj1: {
      title: `Switching Between Functions`,
      content: `The tab strip across the top of the tool has one tab for each of $\\sin$, $\\cos$ and $\\tan$, each labelled with the current shift — for example $\\sin(\\theta + \\frac{\\pi}{2})$. The active tab is filled indigo.

Under the tabs, the **identity bar** writes out the identity being shown, with the shift in red and the right-hand side in the colour of the function it turns into: indigo for cosine, amber for sine. A minus sign, when there is one, sits outside the coloured part, so the change of sign is read separately from the change of function.

Switching tabs keeps both the shift and the angle, so the three identities for one shift can be compared at the same point. The figure changes only in which leg of P′ is being read and in what the banner checks.

The current function and shift are written into the page address as \`?shiftFn=\` and \`?shift=\`, so a link can open the tool on a particular identity. The [identity table](!#reading-the-identity-table) is a second way to switch.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Choosing the Shift`,
      content: `Next to the angle slider, two **Shift** buttons choose how far the angle is moved: **$+\\pi$** or **$+\\frac{\\pi}{2}$**. The panel on the right is titled by the choice — **Half turn** or **Quarter turn**.

The shift is the whole geometry of the tool. Adding $\\pi$ to an angle rotates its point on the unit circle by half a turn, to the diametrically opposite point. Adding $\\frac{\\pi}{2}$ rotates it by a quarter turn, counterclockwise. The green arrow in the figure draws that rotation from P to P′, labelled with the shift.

The two shifts produce different kinds of identity. A half turn keeps every function the same and only changes signs — $\\sin$ stays $\\sin$, up to a minus. A quarter turn swaps sine and cosine — $\\sin$ becomes $\\cos$. The [identity table](!#reading-the-identity-table) shows this directly in its **Effect** column: **sign flips** or **unchanged** for the half turn, **sin → cos**-type changes for the quarter turn.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Adjusting the Angle`,
      content: `The **θ slider** runs through a full turn, from $0°$ to $360°$, in whole degrees. The small red arc at the centre of the figure marks θ, and the red label in the top-left corner prints it.

As θ moves, P travels around the circle and P′ travels with it, always a fixed rotation ahead: half a turn for $+\\pi$, a quarter turn for $+\\frac{\\pi}{2}$. The panel's final line says exactly this, and it is the reason the identities hold for every angle rather than just the one on screen.

Dragging through all four quadrants is the best test of the signs. In the first quadrant every coordinate of P is positive and the minus signs of the identities are easy to see. In the other three, the coordinates of P are already negative, and the identities still hold — $\\cos(\\theta + \\pi) = -\\cos\\theta$ is positive whenever $\\cos\\theta$ is negative. The [numerical check](!#checking-both-sides) confirms it at every stop.

For tangent, some angles make one side infinite. The cards print $\\infty$ there, on both sides at once.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Reading the Rotation Figure`,
      content: `The figure is a unit circle with two points on it. **P** is the point at angle θ, with coordinates $(\\cos\\theta, \\sin\\theta)$. **P′** is P rotated by the shift, so its coordinates are the cosine and sine of $\\theta + \\pi$ or $\\theta + \\frac{\\pi}{2}$.

Each point has its own right triangle, dropped from the point to the $x$-axis, with the legs drawn thick and labelled. On P, the horizontal leg is indigo and labelled $\\cos\\theta$; the vertical leg is amber and labelled $\\sin\\theta$. On P′, the legs are **coloured by where they came from**, not by their direction. After a quarter turn, P′'s vertical leg is indigo, because it is as long as P's cosine leg; its horizontal leg is amber, because it is as long as P's sine leg. The labels give the signed values, such as $-\\sin\\theta$.

The **green arrow** turns P into P′ and carries the shift as its label. The **banner** along the bottom states the identity and evaluates both sides at the current θ, so the figure checks itself.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `The Rotation Panel`,
      content: `The panel to the right of the figure turns the picture into the proof.

At the top, in a white box, it gives the coordinates of both points as expressions and as numbers — for a quarter turn, $P = (\\cos\\theta, \\sin\\theta)$ and $P' = (-\\sin\\theta, \\cos\\theta)$ — each coordinate in the colour of its leg in the figure.

Below that, one sentence states what the rotation does: a quarter turn **swaps** the coordinates and puts a minus on the new $x$; a half turn **flips the sign** of both.

Then come three consequence lines, one per function, and the line for the active tab is outlined in indigo. Each one reads the identity off the coordinates of P′: sine is its $y$, cosine is its $x$, tangent is $y$ over $x$. For tangent after a half turn, the line shows the two minus signs cancelling.

The last lines point to this page — to the frozen state of the current identity and to the section explaining its rotation.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Checking Both Sides`,
      content: `Under the figure, two cards evaluate the identity at the current angle. The left card is labelled with the left-hand side, such as $\\cos(\\theta + \\frac{\\pi}{2})$, and the right card with the right-hand side, $-\\sin\\theta$.

The two values agree to three decimal places at every angle. The banner inside the figure makes the same comparison, so both the picture and the cards confirm each other.

Agreement at a single angle is not a proof, but agreement while the slider is being dragged through a full turn is strong evidence, and it catches sign mistakes immediately. If $\\cos(\\theta + \\frac{\\pi}{2})$ were $+\\sin\\theta$, the two cards would show equal magnitudes with opposite signs everywhere except where the sine is zero.

The proof itself is the geometry of the [rotation figure](!#reading-the-rotation-figure): the coordinates of P′ are the functions of the shifted angle by definition, and the rotation fixes what those coordinates are.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Reading the Identity Table`,
      content: `Under the tool, a table lists all six shift identities: the three functions shifted by $\\pi$, then the three shifted by $\\frac{\\pi}{2}$. Its columns are the shifted function, the identity, the **effect**, and the value at the current θ.

The **Effect** column summarises what the shift does in words. Shifting by $\\pi$ gives **sign flips** for sine and cosine and **unchanged** for tangent, the last one in indigo to set it apart. Shifting by $\\frac{\\pi}{2}$ gives **sin → cos**, **cos → −sin** and **tan → −cot**.

The active identity is marked with an indigo bar on the left. Clicking any row switches the tool to that function and shift in one step, which makes the table the quickest way to move between the two halves.

Read down the value column with the slider fixed and relationships appear: the $\\pi$-shifted sine and cosine are the negatives of the ordinary values, and the $\\frac{\\pi}{2}$-shifted sine equals the ordinary cosine.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Why a Half Turn Flips Both Signs`,
      content: `On the unit circle, the point at angle θ is $(\\cos\\theta, \\sin\\theta)$, and the point at angle $\\theta + \\pi$ is the same point turned half-way round the centre. Turning a point half-way round the origin sends $(x, y)$ to $(-x, -y)$ — it is a reflection through the centre. So

$$\\cos(\\theta + \\pi) = -\\cos\\theta \\qquad \\sin(\\theta + \\pi) = -\\sin\\theta$$

and both coordinates change sign while keeping their size. Tangent is the ratio of the two, and the two minus signs cancel:

$$\\tan(\\theta + \\pi) = \\frac{-\\sin\\theta}{-\\cos\\theta} = \\tan\\theta$$

That last identity is the statement that tangent has **period** $\\pi$, half the period of sine and cosine. It is also the reason the graph of tangent repeats after every half turn, with one branch per interval of length $\\pi$. The [periodicity](!/trigonometry/identities#periodicity) identities on the lesson page state the full-turn version for every function.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Why a Quarter Turn Swaps the Coordinates`,
      content: `Turning a point a quarter turn counterclockwise about the origin sends $(x, y)$ to $(-y, x)$: what was the horizontal distance becomes the vertical one, and what was the vertical distance becomes the horizontal one, now pointing the other way. Applied to $P = (\\cos\\theta, \\sin\\theta)$ it gives

$$P' = (-\\sin\\theta, \\cos\\theta)$$

and since $P'$ is the point at angle $\\theta + \\frac{\\pi}{2}$, reading its coordinates gives

$$\\cos\\left(\\theta + \\tfrac{\\pi}{2}\\right) = -\\sin\\theta \\qquad \\sin\\left(\\theta + \\tfrac{\\pi}{2}\\right) = \\cos\\theta$$

The two right triangles in the figure make this visible: they are congruent, turned a quarter turn relative to each other, which is why the tool colours P′'s legs by where they came from. Tangent follows as their ratio, $\\frac{\\cos\\theta}{-\\sin\\theta} = -\\cot\\theta$.

The same swap underlies the [co-function](!/trigonometry/identities#co-function) identities, which use $\\frac{\\pi}{2} - \\theta$ instead of $\\theta + \\frac{\\pi}{2}$; the extra reflection there removes the minus sign.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Shifts and the Sine Wave`,
      content: `Every identity in this tool is also a statement about graphs, because adding a constant to the input shifts a graph sideways.

$\\sin(\\theta + \\frac{\\pi}{2}) = \\cos\\theta$ says that the cosine curve is the sine curve moved $\\frac{\\pi}{2}$ to the left — the two functions are the same wave, a quarter period apart. $\\sin(\\theta + \\pi) = -\\sin\\theta$ says that moving the sine curve half a period gives its reflection in the axis. $\\tan(\\theta + \\pi) = \\tan\\theta$ says that the tangent curve is unchanged by a shift of $\\pi$, which is the definition of having period $\\pi$.

These are the **phase shifts** of the general form $y = A\\sin(Bx - C) + D$ with $C = -\\frac{\\pi}{2}$ or $C = -\\pi$. The [shift identities](!/trigonometry/identities#shift) section of the lesson lists them alongside the rest of the family, and the [phase shift](!/trigonometry/graphs#8) section of the graphs lesson treats the shift of a curve in general.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Related Concepts and Tools`,
      content: `The shift identities are one of several families built from moving a point around the unit circle, and the tools for the others are close neighbours.

• [Supplementary Angle Identities](!/trigonometry/visual-tools/supplementary-angle-identities) — the angle $\\pi - \\theta$, a reflection across the $y$-axis rather than a rotation.
• [Negative Angle Identities](!/trigonometry/visual-tools/negative-angle-identities) — the angle $-\\theta$, a reflection across the $x$-axis.
• [Unit Circle Visualizer](!/visual-tools/unit-circle) — the circle on which every point in this tool lives.
• [Trigonometric Function Parameters](!/trigonometry/visual-tools/function-parameters) — the same shifts seen on the graph, as the $C$ of $y = A\\sin(Bx - C) + D$.
• [Trigonometric Functions Graphs](!/trigonometry/visual-tools/functions-graphs) — the six curves whose periods the half-turn identities describe.

For the theory in prose, the [trigonometric identities](!/trigonometry/identities) lesson sets out every family in one place.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj12: {
      title: `Sine Shifted by Pi`,
      content: `The identity $\\sin(\\theta + \\pi) = -\\sin\\theta$ is the half turn read vertically.`,
      after: `P′ sits diametrically opposite P, so its height is P's height pointing the other way. The amber leg of P′ has exactly the length of P's amber leg, and the label $-\\sin\\theta$ records the direction. The argument for both coordinates is set out in [why a half turn flips both signs](!#why-a-half-turn-flips-both-signs).`,
      before: ``,
      link: '',
    },

    obj13: {
      title: `Cosine Shifted by Pi`,
      content: `The identity $\\cos(\\theta + \\pi) = -\\cos\\theta$ is the same half turn read horizontally.`,
      after: `P′'s indigo leg has the length of P's indigo leg and points the opposite way along the $x$-axis. Together with the sine identity, this is the statement that a half turn is a reflection through the centre of the circle, $(x, y) \\mapsto (-x, -y)$.`,
      before: ``,
      link: '',
    },

    obj14: {
      title: `Tangent Shifted by Pi`,
      content: `The identity $\\tan(\\theta + \\pi) = \\tan\\theta$ is the one half-turn identity with no minus sign.`,
      after: `Both coordinates of P′ are the negatives of P's, so their ratio — the slope of the radius — is unchanged: P and P′ lie on the same line through the centre. This is why tangent has period $\\pi$, and why the table's **Effect** column marks it **unchanged**.`,
      before: ``,
      link: '',
    },

    obj15: {
      title: `Sine Shifted by Half Pi`,
      content: `The identity $\\sin(\\theta + \\frac{\\pi}{2}) = \\cos\\theta$ is the quarter turn read vertically.`,
      after: `P′'s vertical leg is drawn in the cosine colour because it is as long as P's horizontal leg, and it points up, so no sign changes. Graphically, this says the sine wave shifted a quarter period to the left is the cosine wave. The general argument is in [why a quarter turn swaps the coordinates](!#why-a-quarter-turn-swaps-the-coordinates).`,
      before: ``,
      link: '',
    },

    obj16: {
      title: `Cosine Shifted by Half Pi`,
      content: `The identity $\\cos(\\theta + \\frac{\\pi}{2}) = -\\sin\\theta$ is the quarter turn read horizontally.`,
      after: `P′'s horizontal leg has the length of P's vertical leg, drawn in the sine colour, but it now points to the left, which is the minus sign. Of the quarter-turn identities, this is the one where the swap and the sign change happen together.`,
      before: ``,
      link: '',
    },

    obj17: {
      title: `Tangent Shifted by Half Pi`,
      content: `The identity $\\tan(\\theta + \\frac{\\pi}{2}) = -\\cot\\theta$ follows from the other two quarter-turn identities.`,
      after: `Dividing the $y$ of P′ by its $x$ gives $\\frac{\\cos\\theta}{-\\sin\\theta}$, which is $-\\cot\\theta$. Geometrically, the radius to P′ is perpendicular to the radius to P, and perpendicular slopes multiply to $-1$: $\\tan\\theta \\cdot \\tan(\\theta + \\frac{\\pi}{2}) = -1$.`,
      before: ``,
      link: '',
    },
  }

  /* Animated demos (ToolDemoPlayer v3) against the real ShiftIdentityExplorer
     (syncQuery off). θ range = range 0 (0 to 360). Tab labels follow the
     current shift; tab = nth 0, identity-table row = nth 1. */
  const demos = {
    'choosing-the-shift': {
      title: 'Quarter turn and half turn',
      script: [
        { say: `DRAG θ → 60°
P and P′ move together.
Green arrow = quarter turn.
Legs swap colours.` },
        { slide: { range: 0 }, to: 60, ms: 1400 },
        { wait: 2400 },
        { say: `TAP + π
Half turn. P′ opposite P.
Both legs flip. sin → −sin.` },
        { click: { button: '+ π', exact: true } },
        { wait: 2600 },
        { say: `DRAG θ → 140°
P′ stays half a turn ahead.
Holds at every angle.` },
        { slide: { range: 0 }, to: 140, ms: 1500 },
        { wait: 2400 },
        { say: `TAP tan(θ + π)
Two minus signs cancel.
tan(θ + π) = tan θ. Period π.` },
        { click: { button: 'tan(θ + π)', exact: true } },
        { wait: 2600 },
        { say: `TAP + π/2
Quarter turn again.
tan(θ + π/2) = −cot θ.` },
        { click: { button: '+ π/2', exact: true } },
        { wait: 2600 },
      ],
    },
    'reading-the-rotation-figure': {
      title: 'Reading P and P′',
      script: [
        { say: `DRAG θ → 30°
P = (cos θ, sin θ).
Indigo = cos leg. Amber = sin leg.` },
        { slide: { range: 0 }, to: 30, ms: 1300 },
        { wait: 2600 },
        { say: `TAP cos(θ + π/2)
x of P′. Amber leg, pointing left.
= −sin θ.` },
        { click: { button: 'cos(θ + π/2)', exact: true } },
        { wait: 2600 },
        { say: `DRAG θ → 120°
P in quadrant II. cos θ < 0.
Identity still holds. Banner agrees.` },
        { slide: { range: 0 }, to: 120, ms: 1400 },
        { wait: 2600 },
        { say: `TAP sin(θ + π/2)
y of P′. Indigo leg = cos θ.
sin(θ + π/2) = cos θ.` },
        { click: { button: 'sin(θ + π/2)', exact: true } },
        { wait: 2600 },
        { say: `DRAG θ → 300°
Full turn keeps working.
Rotation fixes the identity.` },
        { slide: { range: 0 }, to: 300, ms: 1600 },
        { wait: 2400 },
      ],
    },
    'reading-the-identity-table': {
      title: 'The identity table',
      script: [
        { say: `TAP ROW cos(θ + π/2)
One tap = tab + shift together.
Effect column: cos → −sin.` },
        { click: { button: 'cos(θ + π/2)', nth: 1 } },
        { wait: 2600 },
        { say: `TAP ROW sin(θ + π)
Shift jumps to + π.
Effect: sign flips.` },
        { click: { button: 'sin(θ + π)', nth: 0 } },
        { wait: 2400 },
        { say: `TAP ROW tan(θ + π)
Effect: unchanged.
The only one without a minus.` },
        { click: { button: 'tan(θ + π)', nth: 1 } },
        { wait: 2400 },
        { say: `TAP ROW tan(θ + π/2)
Effect: tan → −cot.
Perpendicular radius. Slopes multiply to −1.` },
        { click: { button: 'tan(θ + π/2)', nth: 0 } },
        { wait: 2600 },
        { say: `DRAG θ → 200°
Whole value column updates.
Six identities, one angle.` },
        { slide: { range: 0 }, to: 200, ms: 1500 },
        { wait: 2400 },
      ],
    },
  }

  const introContent = { id: 'intro', title: '', content: `` }

  const faqQuestions = {
    obj0: {
      question: 'What are the shift identities in trigonometry?',
      answer: 'They give the functions of an angle shifted by pi or pi/2 in terms of the original angle: sin(theta + pi) = -sin theta, cos(theta + pi) = -cos theta, tan(theta + pi) = tan theta, sin(theta + pi/2) = cos theta, cos(theta + pi/2) = -sin theta, and tan(theta + pi/2) = -cot theta.',
      sectionId: 'reading-the-identity-table',
    },
    obj1: {
      question: 'Why does sin(theta + pi/2) equal cos theta?',
      answer: 'Adding pi/2 rotates the point on the unit circle a quarter turn counterclockwise, which sends (x, y) to (-y, x). The point (cos theta, sin theta) goes to (-sin theta, cos theta), and its y-coordinate, the sine of theta + pi/2, is cos theta.',
      sectionId: 'why-a-quarter-turn-swaps-the-coordinates',
    },
    obj2: {
      question: 'Why is tan(theta + pi) equal to tan theta?',
      answer: 'A half turn sends the point (cos theta, sin theta) to (-cos theta, -sin theta). Tangent is the ratio of the two coordinates, and the two minus signs cancel. This is why tangent has period pi rather than 2 pi.',
      sectionId: 'tangent-shifted-by-pi',
    },
    obj3: {
      question: 'What is the difference between a shift by pi and a shift by pi/2?',
      answer: 'Shifting by pi is a half turn: each function keeps its identity and sine and cosine change sign, while tangent is unchanged. Shifting by pi/2 is a quarter turn: sine and cosine swap roles, with a minus sign on the new cosine, and tangent becomes minus cotangent.',
      sectionId: 'choosing-the-shift',
    },
    obj4: {
      question: 'How do the shift identities relate to graphs?',
      answer: 'Adding a constant to the input shifts a graph sideways. sin(theta + pi/2) = cos theta says the cosine curve is the sine curve moved a quarter period to the left, and tan(theta + pi) = tan theta says the tangent curve repeats every pi.',
      sectionId: 'shifts-and-the-sine-wave',
    },
  }

  const schemas = {
    webApplication: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Shift Identities Explorer',
      url: 'https://www.learnmathclass.com/trigonometry/visual-tools/shift-identities',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires JavaScript',
      description: 'Interactive unit-circle proof of the six shift identities: rotate a point by pi or pi/2 and read sin, cos and tan of the shifted angle off the rotated point, with a live numerical check.',
      inLanguage: 'en-US',
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      publisher: { '@type': 'Organization', name: 'Learn Math Class' },
    },
    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.learnmathclass.com' },
        { '@type': 'ListItem', position: 2, name: 'Trigonometry', item: 'https://www.learnmathclass.com/trigonometry' },
        { '@type': 'ListItem', position: 3, name: 'Visual Tools', item: 'https://www.learnmathclass.com/trigonometry/visual-tools' },
        { '@type': 'ListItem', position: 4, name: 'Shift Identities', item: 'https://www.learnmathclass.com/trigonometry/visual-tools/shift-identities' },
      ],
    },
    faq: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: Object.keys(faqQuestions).map((key) => ({
        '@type': 'Question',
        name: faqQuestions[key].question,
        acceptedAnswer: { '@type': 'Answer', text: faqQuestions[key].answer },
      })),
    },
  }

  return {
    props: {
      relatedTools: getRelatedTools('shift-identities'),
      instructions,
      explanations,
      demos,
      stateUnits,
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: 'Shift Identities: sin(θ + π/2) and More | Learn Math Class',
        description: 'Rotate a point on the unit circle by π or π/2 and read the six shift identities off the rotated point, with both sides checked numerically at every angle.',
        hubDescription: 'An interactive unit-circle proof of the six shift identities. Choose a shift of pi or pi/2, drag the angle through a full turn, and watch the point P rotate to P prime while the legs of both right triangles show which coordinate became which. Sine, cosine and tangent of the shifted angle are read off the rotated point and checked numerically, with all six identities in one table.',
        category: 'Identities',
        keywords: keyWords.join(', '),
        url: '/trigonometry/visual-tools/shift-identities',
        name: 'Shift Identities Explorer',
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="24" fill="none" stroke="#B5D4F4" stroke-width="1.2"/><line x1="14" y1="40" x2="66" y2="40" stroke="#B5D4F4" stroke-width="0.8" stroke-dasharray="2,2"/><line x1="40" y1="14" x2="40" y2="66" stroke="#B5D4F4" stroke-width="0.8" stroke-dasharray="2,2"/><line x1="40" y1="40" x2="59.66" y2="40" stroke="#85B7EB" stroke-width="2"/><line x1="59.66" y1="40" x2="59.66" y2="26.23" stroke="#FAC775" stroke-width="2"/><line x1="40" y1="40" x2="26.23" y2="40" stroke="#FAC775" stroke-width="2"/><line x1="26.23" y1="40" x2="26.23" y2="20.34" stroke="#85B7EB" stroke-width="2"/><path d="M 52.29 31.4 A 15 15 0 0 1 31.4 27.71" fill="none" stroke="#97C459" stroke-width="1.3"/><circle cx="59.66" cy="26.23" r="2.3" fill="#E6F1FB"/><circle cx="26.23" cy="20.34" r="2.3" fill="#E6F1FB"/><text x="63" y="23" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" font-style="italic">P</text><text x="17" y="17" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" font-style="italic">P′</text><text x="40" y="77" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle">θ + π/2</text></svg>`,
      },
    },
  }
}

export default function ShiftIdentitiesPage({
  relatedTools,
  instructions,
  explanations,
  demos,
  stateUnits,
  seoData,
  sectionsContent,
  introContent,
  faqQuestions,
  schemas,
}) {

  const plain = (id, obj) => ({ id, title: obj.title, link: obj.link, content: [obj.content] })
  const withDemo = (id, obj) => ({
    id,
    title: obj.title,
    link: obj.link,
    content: [
      <ToolDemoPlayer
        key={`demo-${id}`}
        script={demos[id].script}
        title={demos[id].title}
        label={`Demo: ${demos[id].title}`}
        scale={0.6}
        renderText={processContent}
      >
        <ShiftIdentityExplorer explanations={explanations} renderText={processContent} showFrozen={false} syncQuery={false} />
      </ToolDemoPlayer>,
      obj.content,
    ],
  })
  const framed = (id, obj, unitKey) => ({
    id,
    title: obj.title,
    link: obj.link,
    content: [
      obj.content,
      <div key={`u-${unitKey}`} dangerouslySetInnerHTML={{ __html: stateUnits[unitKey] }} />,
      obj.after,
    ],
  })

  const genericSections = [
    plain('switching-between-functions', sectionsContent.obj1),
    withDemo('choosing-the-shift', sectionsContent.obj2),
    plain('adjusting-the-angle', sectionsContent.obj3),
    withDemo('reading-the-rotation-figure', sectionsContent.obj4),
    plain('the-rotation-panel', sectionsContent.obj5),
    plain('checking-both-sides', sectionsContent.obj6),
    withDemo('reading-the-identity-table', sectionsContent.obj7),
    plain('why-a-half-turn-flips-both-signs', sectionsContent.obj8),
    plain('why-a-quarter-turn-swaps-the-coordinates', sectionsContent.obj9),
    plain('shifts-and-the-sine-wave', sectionsContent.obj10),
    plain('related-concepts-and-tools', sectionsContent.obj11),
    framed(idSlug('sin', 'pi'), sectionsContent.obj12, 'sin:pi'),
    framed(idSlug('cos', 'pi'), sectionsContent.obj13, 'cos:pi'),
    framed(idSlug('tan', 'pi'), sectionsContent.obj14, 'tan:pi'),
    framed(idSlug('sin', 'halfPi'), sectionsContent.obj15, 'sin:halfPi'),
    framed(idSlug('cos', 'halfPi'), sectionsContent.obj16, 'cos:halfPi'),
    framed(idSlug('tan', 'halfPi'), sectionsContent.obj17, 'tan:halfPi'),
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
        Shift Identities
      </h1>
      <br />

      <div style={{ width: '80%', margin: 'auto' }}>
        <ExplanationDetails
          title='How to use'
          instructions={instructions}
          accent='#4F46E5'
        />
      </div>
      <br />

      <SiblingsNavStandalone
        bg="#ffffff"
        color="#64748b"
        activeColor="#4F46E5"
        activeBg="#eef2ff"
        topOffset='200px'
      />
      <div style={{ width: '90%', margin: 'auto', zoom: 0.9 }}>
        <ShiftIdentityExplorer
          explanations={explanations}
          renderText={processContent}
          showFrozen={false}
        />
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
