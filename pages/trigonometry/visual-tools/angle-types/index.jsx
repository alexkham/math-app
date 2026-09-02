


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import TrigoAngleTypesExplorer from '../../../../app/components/trigonometry/angle/types/TrigoAngleTypesExplorer'
import angleTypesDiagrams from '../../../../app/components/trigonometry/angle/types/trigoAngleTypesDiagrams'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import SiblingsNav from '../../../../app/components/SiblingsNav'
import SiblingsNavStandalone from '../../../../app/components/SiblingsNavStandalone'


export async function getStaticProps(){

  const keyWords = [
    'angle types',
    'angle types visualizer',
    'acute obtuse right reflex',
    'complementary supplementary angles',
    'vertical angles',
    'adjacent angles',
    'standard position angle',
    'reference angle calculator',
    'coterminal angles tool',
    'special angles unit circle',
    'directed angles',
    'positive negative angles',
    'angle classification trigonometry',
    'interactive angle types',
    'angle relationships tool'
  ]

    const sectionsContent={

    obj0:{
      title:`Key Terms`,
      content:`• **Vertex** — the common endpoint where the two rays of an angle meet.
• **Initial side** — the ray from which rotation is measured. In [standard position](!#standard-position) it lies along the positive x-axis.
• **Terminal side** — the ray reached after rotating by the angle.
• **Quadrant** — one of four regions $I$, $II$, $III$, $IV$ where the terminal side may land.
• [Reference angle](!#reference-angles) — the acute angle between the terminal side and the nearest x-axis. Always between $0°$ and $90°$.
• [Coterminal angles](!#coterminal-angles) — angles sharing the same terminal side, differing by full rotations ($360° n$).
• [Special angles](!#special-angles-on-the-unit-circle) — the $16$ unit-circle angles with exact $\\sin$, $\\cos$, $\\tan$ values.
• [Directed angle](!#directed-angles) — an angle carrying a sign indicating rotation direction: positive for counterclockwise, negative for clockwise.`,
      before:``,
      after:``,
      link:'',
    },
    obj1:{
      title:`Choosing a Concept`,
      content:`The tool bundles nine related angle topics. A sidebar (or horizontal scroll on narrow screens) lists them grouped into three categories:

• **Classification** — [Angle Types](!#angle-classifications).
• **Relationships** — [Complementary & Supplementary](!#complementary-and-supplementary-angles), [Vertical Angles](!#vertical-angles), [Adjacent Angles](!#adjacent-angles).
• **Trigonometry** — [Standard Position](!#standard-position), [Reference Angles](!#reference-angles), [Coterminal Angles](!#coterminal-angles), [Special Angles](!#special-angles-on-the-unit-circle), [Directed Angles](!#directed-angles).

Click any item to load that concept's interactive scene and explanation. The active item is highlighted in blue. The top bar shows both the tool name and the active concept's title.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`Switching Dark and Light Modes`,
      content:`A **Light** / **Dark** toggle in the top-right of the panel swaps the color theme across all nine concepts.

What changes with the toggle:
• **Background** — white in light mode, deep slate in dark mode.
• **Text colors** — adjusted for contrast.
• **Panel borders and dividers** — match the active theme.
• **Diagram fill colors** (blue, amber, green, red, purple accents) remain the same in both modes so visualizations stay readable.

The theme persists while you switch between concepts in the same session.`,
      before:``,
      after:``,
      link:'',
    },
    obj3:{
      title:`Dragging to Set Angles`,
      content:`Every scene includes one or more **draggable handles**. Click and drag a handle to rotate the relevant arm of the angle in real time.

How drag works:
• The handle follows your pointer around the vertex.
• The angle value updates continuously in the side panel.
• Some scenes (Vertical, Adjacent) include two independent handles.
• On **Standard Position** and **Directed Angles**, drag below the x-axis to produce negative angles.

Snap-to-special behavior makes it easy to land on common values: as you approach $0°$, $30°$, $45°$, $60°$, $90°$, etc., the handle locks onto the exact value.`,
      before:``,
      after:``,
      link:'',
    },
    obj4:{
      title:`Using Preset Buttons and Quick Angles`,
      content:`Some scenes provide preset buttons for fast navigation to canonical angles.

Examples:
• **Angle Types** — seven buttons (Zero, Acute, Right, Obtuse, Straight, Reflex, Full) jump to representative angles.
• **Complementary & Supplementary** — a two-tab switch toggles the constraint between summing to $90°$ and $180°$.
• **Coterminal Angles** — $+$ and $-$ buttons step through full-rotation offsets from $n = -3$ to $n = +3$.
• **Special Angles** — clicking any of the $16$ ringed points on the unit circle selects it; a Degrees / Radians / Both toggle controls labels.

Presets are the fastest way to see the boundary cases of each concept.`,
      before:``,
      after:``,
      link:'',
    },
    obj5:{
      title:`Reading the Scene Diagrams`,
      content:`Each scene uses a consistent color language to keep the relationships visible at a glance.

Color conventions across scenes:
• **Blue** — the active or first angle.
• **Amber** — the partner angle (the second in a pair, or the negative direction).
• **Green** — right angles, positive sign markers, $\\cos$ measurements.
• **Red** — obtuse markers, negative sign markers, $\\sin$ measurements.
• **Purple** — shared rays or alternative emphasis (e.g., the common arm of adjacent angles).
• **Gray** — reference axes, dashed guides, inactive elements.

A small square at a vertex marks an exact $90°$ angle in place of the usual curved arc.`,
      before:``,
      after:``,
      link:'',
    },
    obj6:{
      title:`Reading the Explanation Panels`,
      content:`The right-hand panel of every concept contains four consistent zones:

• **Title** — name of the active concept.
• **Brief description** — one or two paragraphs explaining what the concept means and why it matters in trigonometry.
• **Live values** — color-coded mini-cards or large numerals showing the current angle, partner angle, sum, or sign data.
• **Reference block** — a formula card (monospace) or a small table summarizing the rule (e.g., quadrant sign chart, reference-angle formulas, even / odd identities).

Drag the scene and the explanation panel updates immediately. Everything is recomputed from the current angle.`,
      before:``,
      after:``,
      link:'',
    },
    obj7:{
      title:`Angle Classifications`,
      content:`The **Angle Types** concept classifies a single rotation by its measure:

• [Zero](!#zero-angles) — $\\theta = 0°$, both rays overlap.
• [Acute](!#acute-angles) — $0° < \\theta < 90°$.
• [Right](!#right-angles) — $\\theta = 90°$, marked with a square instead of an arc.
• [Obtuse](!#obtuse-angles) — $90° < \\theta < 180°$.
• [Straight](!#straight-angles) — $\\theta = 180°$, a straight line.
• [Reflex](!#reflex-angles) — $180° < \\theta < 360°$.
• [Full](!#full-angles) — $\\theta = 360°$, a complete rotation.

Each type uses its own color and is documented in the side panel. For comprehensive coverage with proofs and examples, see the **angle types theory page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj8:{
      title:`Angle Relationships`,
      content:`Three concepts cover how angles relate when they share a vertex or a transversal.

• [Complementary & Supplementary](!#complementary-and-supplementary-angles) — pairs summing to $90°$ or $180°$. The side panel surfaces cofunction identities like $\\sin\\theta = \\cos(90° - \\theta)$.
• [Vertical Angles](!#vertical-angles) — two intersecting lines create two pairs of equal opposite angles. Drag to $90°$ to see all four become right angles.
• [Adjacent Angles](!#adjacent-angles) — two angles share a vertex and a common arm (drawn in purple, dashed). Two independent drag handles let you set each angle separately. The angle addition identities sit right under the diagram.

For full proofs, see the **angle relationships page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj9:{
      title:`Trigonometry-Specific Angle Concepts`,
      content:`Five concepts cover angle ideas central to trigonometry.

• [Standard Position](!#standard-position) — angle with vertex at origin and initial side on the positive x-axis. The side panel shows the active quadrant and the signs of $\\sin$, $\\cos$, $\\tan$.
• [Reference Angles](!#reference-angles) — the acute angle between the terminal side and the nearest x-axis. The panel shows the formula appropriate to the active quadrant ($\\theta$, $180° - \\theta$, $\\theta - 180°$, or $360° - \\theta$).
• [Coterminal Angles](!#coterminal-angles) — same terminal side, different rotation count. Step through $n \\in \\{-3, ..., 3\\}$ and watch the spiral marker connect the base angle to its coterminal partner.
• [Special Angles](!#special-angles-on-the-unit-circle) — the $16$ unit-circle positions whose $\\sin$, $\\cos$, $\\tan$ values are exact. Click any point or row in the table to load it.
• [Directed Angles](!#directed-angles) — positive (counterclockwise) vs. negative (clockwise) angles, with live verification that $\\sin(-\\theta) = -\\sin\\theta$ (odd) and $\\cos(-\\theta) = \\cos\\theta$ (even).`,
      before:``,
      after:``,
      link:'',
    },
    obj10:{
      title:`Why Angle Classification Matters in Trigonometry`,
      content:`Knowing the type of an angle determines almost every downstream calculation:

• **Function signs** depend on quadrant, which depends on classification (acute, obtuse, reflex).
• [Reference angles](!#reference-angles) reduce any trig evaluation to a first-quadrant computation.
• [Coterminal equivalence](!#coterminal-angles) means $\\sin\\theta$, $\\cos\\theta$, $\\tan\\theta$ are periodic; this powers Fourier analysis, wave physics, and signal processing.
• [Special angles](!#special-angles-on-the-unit-circle) provide the exact values that appear in proofs, identities, and integrals.
• [Directed angles](!#directed-angles) distinguish phase and rotation direction in physics, navigation, and complex numbers.

For applications and worked examples, see the **trigonometry foundations page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj11:{
      title:`Related Concepts and Tools`,
      content:`Continue exploring with these connected resources:

• **Angle Explorer** — single-angle visualizer focused on type, quadrant, and reference angle.
• **Trigonometric Functions Graphs** — see how $\\sin$, $\\cos$, $\\tan$ and their reciprocals evolve as $\\theta$ varies.
• **Functions Signs by Quadrants** — the ASTC rule explained interactively.
• **Triangle Explorer** — angles inside triangles, with built-in law of sines and law of cosines.
• **Unit Circle** — geometric setup for every special angle in this tool.
• **Double Angle Identities** — formulas that combine angles into $2\\theta$ relationships.`,
      before:``,
      after:``,
      link:'',
    },

    obj12:{
      title:`Complementary and Supplementary Angles`,
      content:`Two angles are [complementary](!#complementary-angles) when their measures sum to $90°$ and [supplementary](!#supplementary-angles) when they sum to $180°$. The scene draws the pair as a blue sector $\\alpha$ and an amber sector $\\beta$ sharing one vertex, with a two-tab toggle switching the constraint.`,
      before:``,
      after:`The complementary constraint fills a [right angle](!#right-angles), the supplementary one a [straight angle](!#straight-angles). Dragging the blue handle reallocates the total between $\\alpha$ and $\\beta$ while their sum stays fixed — the live sum line under the diagram never changes.

The pair relationship powers the cofunction identities shown in the panel's formula card: $\\sin\\theta = \\cos(90° - \\theta)$, $\\cos\\theta = \\sin(90° - \\theta)$, and $\\tan\\theta = \\cot(90° - \\theta)$.`,
      link:'',
    },
    obj13:{
      title:`Vertical Angles`,
      content:`When two straight lines intersect, they create two pairs of **vertical angles** — opposite angles that are always equal. The blue pair and the amber pair in the scene stay matched no matter how you drag either line.`,
      before:``,
      after:`Why they must be equal: each blue angle and its amber neighbor lie on one straight line, so they are [supplementary](!#supplementary-angles). Two angles supplementary to the same angle are equal — that is the whole proof, visible live as you drag.

Drag to $90°$ and all four angles become equal [right angles](!#right-angles): the two lines are perpendicular, and the four sectors match exactly.`,
      link:'',
    },
    obj14:{
      title:`Adjacent Angles`,
      content:`**Adjacent angles** share a vertex and one common arm — drawn dashed and purple in the scene — and lie on opposite sides of it without overlapping. Two independent handles set $\\alpha$ (blue) and $\\beta$ (amber) separately.`,
      before:``,
      after:`Unlike [complementary](!#complementary-angles) or [supplementary](!#supplementary-angles) pairs, adjacent angles have no fixed total: the combined angle is simply $\\alpha + \\beta$, updated live under the diagram.

Adjacency is the geometric picture behind the **angle addition identities**: $\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$ computes the sine of the combined angle from the two parts you dragged.`,
      link:'',
    },
    obj15:{
      title:`Standard Position`,
      content:`An angle is in **standard position** when its vertex sits at the origin and its initial side lies along the positive x-axis. [Positive angles](!#positive-angles) rotate counterclockwise (blue); [negative angles](!#negative-angles) rotate clockwise (amber) — drag below the x-axis to produce them.`,
      before:``,
      after:`The quadrant containing the terminal side fixes the signs of all six trigonometric functions: [Quadrant I](!#quadrant-i-function-signs) makes everything positive, [Quadrant II](!#quadrant-ii-function-signs) keeps only sine positive, [Quadrant III](!#quadrant-iii-function-signs) only tangent, and [Quadrant IV](!#quadrant-iv-function-signs) only cosine.

Standard position is the convention that makes the rest of trigonometry work: [reference angles](!#reference-angles), [coterminal angles](!#coterminal-angles), and the unit-circle values all assume it.`,
      link:'',
    },
    obj16:{
      title:`Reference Angles`,
      content:`The **reference angle** of $\\theta$ is the acute angle between its terminal side and the nearest x-axis — always between $0°$ and $90°$, always positive. In the scene it is the amber arc hugging the x-axis while the faint blue arc shows the full rotation.`,
      before:``,
      after:`The formula depends on the quadrant: $\\theta$ itself in [Quadrant I](!#reference-angle-in-quadrant-i), $180° - \\theta$ in [Quadrant II](!#reference-angle-in-quadrant-ii), $\\theta - 180°$ in [Quadrant III](!#reference-angle-in-quadrant-iii), and $360° - \\theta$ in [Quadrant IV](!#reference-angle-in-quadrant-iv). The panel highlights the active row as you drag.

Reference angles are the reduction machine of trigonometry: any function of any angle equals plus-or-minus the same function of its reference angle, with the sign taken from the quadrant.`,
      link:'',
    },
    obj17:{
      title:`Coterminal Angles`,
      content:`**Coterminal angles** share the same terminal side while differing by whole rotations: $\\theta$ and $\\theta + 360°n$ point the same way for every integer $n$. The scene's stepper walks $n$ from $-3$ to $+3$ and draws the extra rotations as a dashed purple spiral.`,
      before:``,
      after:`Because the terminal side is identical, every trigonometric value is identical too: $\\sin\\theta = \\sin(\\theta + 360°)$ — the periodicity that underlies waves, oscillations, and signal processing.

Coterminal reduction — bringing any angle into $[0°, 360°)$ — is the standard first step before applying [reference angles](!#reference-angles) or reading signs in [standard position](!#standard-position).`,
      link:'',
    },
    obj18:{
      title:`Special Angles on the Unit Circle`,
      content:`Sixteen unit-circle positions have exact trigonometric values: [0°](!#special-angle-0), [30°](!#special-angle-30), [45°](!#special-angle-45), [60°](!#special-angle-60), [90°](!#special-angle-90), [120°](!#special-angle-120), [135°](!#special-angle-135), [150°](!#special-angle-150), [180°](!#special-angle-180), [210°](!#special-angle-210), [225°](!#special-angle-225), [240°](!#special-angle-240), [270°](!#special-angle-270), [300°](!#special-angle-300), [315°](!#special-angle-315), and [330°](!#special-angle-330). The scene shows them as a ring of clickable points.`,
      before:``,
      after:`The exact values come from just two triangles — the 30-60-90 and the 45-45-90 — reflected into all four quadrants, plus the axis points read directly from the circle's coordinates. That is why the whole ring reduces to the values of $30°$, $45°$, and $60°$ with signs adjusted.

These sixteen positions are also the snap targets in the other scenes: dragging near one locks the handle onto the exact value.`,
      link:'',
    },
    obj19:{
      title:`Directed Angles`,
      content:`A **directed angle** carries a sign along with its magnitude: [positive](!#positive-angles) means counterclockwise rotation (blue), [negative](!#negative-angles) means clockwise (amber). Drag above or below the x-axis to switch direction.`,
      before:``,
      after:`The panel verifies the two parity identities live as you drag: $\\sin(-\\theta) = -\\sin\\theta$ (sine is **odd**) while $\\cos(-\\theta) = \\cos\\theta$ (cosine is **even**).

Direction matters wherever rotation is physical: phase in circuits and waves, bearings in navigation, and the argument of complex numbers all use signed angles.`,
      link:'',
    },
    obj20:{
      title:`Zero Angles`,
      content:`A **zero angle** has measure $0°$: both arms overlap along the same ray and no rotation has occurred. It is the starting state of the Angle Types scene and of every rotation in the tool.`,
      before:``,
      after:`Its trigonometric values anchor the unit circle: $\\sin 0° = 0$, $\\cos 0° = 1$, $\\tan 0° = 0$.

The zero angle is [coterminal](!#coterminal-angles) with every multiple of $360°$ — a [full angle](!#full-angles) returns to exactly this position.`,
      link:'',
    },
    obj21:{
      title:`Acute Angles`,
      content:`An **acute angle** measures strictly between $0°$ and $90°$ — less than a quarter turn. The scene's Acute preset jumps to $45°$, drawn in blue.`,
      before:``,
      after:`Acute angles live entirely in Quadrant I, where every trigonometric function is positive, and they are the raw material of right-triangle trigonometry: both non-right angles of any right triangle are acute.

[Reference angles](!#reference-angles) are acute by definition — which is why every other angle on the circle reduces to an acute one.`,
      link:'',
    },
    obj22:{
      title:`Right Angles`,
      content:`A **right angle** measures exactly $90°$ — a quarter turn. The scene marks it with a small square at the vertex instead of the usual arc, the universal symbol for perpendicularity.`,
      before:``,
      after:`At $90°$ the values hit their quarter-turn landmarks: $\\sin 90° = 1$, $\\cos 90° = 0$, and $\\tan 90°$ is undefined because the tangent ratio divides by zero.

The right angle is the boundary between [acute](!#acute-angles) and [obtuse](!#obtuse-angles), and the total that defines [complementary](!#complementary-angles) pairs.`,
      link:'',
    },
    obj23:{
      title:`Obtuse Angles`,
      content:`An **obtuse angle** measures strictly between $90°$ and $180°$ — more than a quarter turn, less than a half. The scene's preset lands on $130°$, drawn in amber.`,
      before:``,
      after:`An obtuse angle's terminal side points into Quadrant II, where sine stays positive while cosine and tangent turn negative. Its reference angle is $180° - \\theta$.

Every obtuse angle is the [supplement](!#supplementary-angles) of an acute one: together they form a straight line, which is why a triangle can hold at most one obtuse angle.`,
      link:'',
    },
    obj24:{
      title:`Straight Angles`,
      content:`A **straight angle** measures exactly $180°$ — a half turn. The two arms point in opposite directions and form a single straight line through the vertex, drawn in red by the scene.`,
      before:``,
      after:`Its values mark the halfway point of the circle: $\\sin 180° = 0$, $\\cos 180° = -1$, $\\tan 180° = 0$.

The straight angle defines the [supplementary](!#supplementary-angles) relationship and separates ordinary angles from [reflex](!#reflex-angles) ones.`,
      link:'',
    },
    obj25:{
      title:`Reflex Angles`,
      content:`A **reflex angle** measures strictly between $180°$ and $360°$ — more than a half turn but less than a full one. The scene's preset shows $270°$, swept in purple the long way around.`,
      before:``,
      after:`Every arm position below the x-axis can be read two ways: as the reflex angle $\\theta$ or as its non-reflex partner $360° - \\theta$ on the other side. The tool always reports the counterclockwise sweep.

Reflex measures matter wherever full rotational position matters — bearings, phase, and rotations that pass the [straight angle](!#straight-angles) on their way toward a [full angle](!#full-angles).`,
      link:'',
    },
    obj26:{
      title:`Full Angles`,
      content:`A **full angle** measures exactly $360°$ — one complete rotation. The scene draws it as an entire circle around the vertex: the moving arm has returned to the initial side.`,
      before:``,
      after:`Its values repeat the zero position exactly: $\\sin 360° = 0$, $\\cos 360° = 1$, $\\tan 360° = 0$ — the full angle is [coterminal](!#coterminal-angles) with the [zero angle](!#zero-angles).

The full rotation is the period of sine and cosine: adding $360°$ to any angle changes nothing about its trigonometry.`,
      link:'',
    },
    obj27:{
      title:`Complementary Angles`,
      content:`Two angles are **complementary** when their measures sum to $90°$: each is the other's complement, $90° - \\theta$. The scene's Complementary tab constrains the blue and amber sectors to fill a quarter turn, as in the frozen state below ($35° + 55° = 90°$).`,
      before:``,
      after:`Complements are the "co" in cosine: $\\cos\\theta$ literally means the sine of the complement, $\\sin(90° - \\theta)$. That is why sine and cosine swap values across a complementary pair, and why $45°$ — its own complement — has them equal.

Geometrically, the two acute angles of every right triangle are complementary, filling the [right angle](!#right-angles)'s worth of turning that the triangle's third corner leaves over.`,
      link:'',
    },
    obj28:{
      title:`Supplementary Angles`,
      content:`Two angles are **supplementary** when their measures sum to $180°$: each is the other's supplement, $180° - \\theta$. The scene's Supplementary tab stretches the constraint to a half turn — the frozen state shows $110° + 70° = 180°$.`,
      before:``,
      after:`Supplements share their sine and negate their cosine: $\\sin(180° - \\theta) = \\sin\\theta$ while $\\cos(180° - \\theta) = -\\cos\\theta$.

Supplementary pairs appear wherever a [straight angle](!#straight-angles) is split: linear pairs at any line intersection — including the adjacent pairs of [vertical angles](!#vertical-angles) — and co-interior angles between parallels.`,
      link:'',
    },
    obj29:{
      title:`Quadrant I: Function Signs`,
      content:`**Quadrant I** holds angles between $0°$ and $90°$: both coordinates positive, so all six trigonometric functions are positive. The scene highlights the roman numeral I and shows the sign chart row for the current quadrant.`,
      before:``,
      after:`The frozen state shows $50°$: $\\sin$, $\\cos$, and $\\tan$ all read $+$ in the panel's sign cards.

First-quadrant values are the reference data for the entire circle — the [reference angle in Quadrant I](!#reference-angle-in-quadrant-i) is the angle itself, no reduction needed.`,
      link:'',
    },
    obj30:{
      title:`Quadrant II: Function Signs`,
      content:`**Quadrant II** holds angles between $90°$ and $180°$: x negative, y positive. Only sine (and cosecant) stays positive; cosine and tangent go negative.`,
      before:``,
      after:`The frozen state shows $140°$: the sign cards read $\\sin +$, $\\cos -$, $\\tan -$, and the sign-chart row for II is highlighted.

To evaluate here, combine the sign rule with the [reference angle in Quadrant II](!#reference-angle-in-quadrant-ii): $\\sin 140° = \\sin 40°$ while $\\cos 140° = -\\cos 40°$.`,
      link:'',
    },
    obj31:{
      title:`Quadrant III: Function Signs`,
      content:`**Quadrant III** holds angles between $180°$ and $270°$: both coordinates negative. Sine and cosine are both negative, so their ratio — tangent (and cotangent) — is the survivor that stays positive.`,
      before:``,
      after:`The frozen state shows $230°$: sign cards read $\\sin -$, $\\cos -$, $\\tan +$.

Every Quadrant III angle is a Quadrant I angle shifted by $180°$ — see the [reference angle in Quadrant III](!#reference-angle-in-quadrant-iii) — which is exactly why tangent's period is $180°$ rather than $360°$.`,
      link:'',
    },
    obj32:{
      title:`Quadrant IV: Function Signs`,
      content:`**Quadrant IV** holds angles between $270°$ and $360°$: x positive again, y still negative. Cosine (and secant) are positive; sine and tangent are negative.`,
      before:``,
      after:`The frozen state shows $320°$: sign cards read $\\sin -$, $\\cos +$, $\\tan -$.

Quadrant IV angles mirror Quadrant I across the x-axis — the geometry behind cosine being even and sine odd, and the last stop before the rotation closes. Evaluate via the [reference angle in Quadrant IV](!#reference-angle-in-quadrant-iv).`,
      link:'',
    },
    obj33:{
      title:`Reference Angle in Quadrant I`,
      content:`In **Quadrant I** the reference angle is the angle itself: $\\theta_{ref} = \\theta$. The terminal side already makes an acute angle with the positive x-axis, so no reduction is needed.`,
      before:``,
      after:`The frozen state shows $50°$ with its amber reference arc coinciding with the full blue rotation arc — they are the same angle here.

This identity case is what makes Quadrant I the reference data for the whole circle: all other quadrants' formulas fold their angles back onto this one. Signs are all positive here, per [Quadrant I's sign rule](!#quadrant-i-function-signs).`,
      link:'',
    },
    obj34:{
      title:`Reference Angle in Quadrant II`,
      content:`In **Quadrant II** the terminal side is closest to the negative x-axis, so the reference angle measures back from $180°$: $\\theta_{ref} = 180° - \\theta$.`,
      before:``,
      after:`The frozen state shows $140°$: the amber arc from the terminal side to the negative x-axis measures $180° - 140° = 40°$.

Worked through: $\\sin 140° = \\sin 40°$ (sine positive in II) and $\\cos 140° = -\\cos 40°$ (cosine negative), matching [Quadrant II's sign rule](!#quadrant-ii-function-signs).`,
      link:'',
    },
    obj35:{
      title:`Reference Angle in Quadrant III`,
      content:`In **Quadrant III** the terminal side has passed the negative x-axis, so the reference angle measures forward from $180°$: $\\theta_{ref} = \\theta - 180°$.`,
      before:``,
      after:`The frozen state shows $230°$: the amber arc from the negative x-axis to the terminal side measures $230° - 180° = 50°$.

Worked through: $\\tan 230° = \\tan 50°$ (tangent positive in III) while $\\sin 230° = -\\sin 50°$ and $\\cos 230° = -\\cos 50°$, per [Quadrant III's sign rule](!#quadrant-iii-function-signs).`,
      link:'',
    },
    obj36:{
      title:`Reference Angle in Quadrant IV`,
      content:`In **Quadrant IV** the terminal side approaches the positive x-axis from below, so the reference angle measures up to the full turn: $\\theta_{ref} = 360° - \\theta$.`,
      before:``,
      after:`The frozen state shows $320°$: the amber arc from the terminal side up to $360°$ measures $360° - 320° = 40°$.

Worked through: $\\cos 320° = \\cos 40°$ (cosine positive in IV) while $\\sin 320° = -\\sin 40°$, per [Quadrant IV's sign rule](!#quadrant-iv-function-signs).`,
      link:'',
    },
    obj37:{
      title:`Special Angle: 0°`,
      content:`$0°$ sits on the positive x-axis — the starting point of the special-angle ring, with terminal point $(1, 0)$.`,
      before:``,
      after:`$$\\sin 0° = 0 \\qquad \\cos 0° = 1 \\qquad \\tan 0° = 0$$

Cosine is at its maximum here and sine at zero. Every multiple of $360°$ lands back on this point, which is why the ring treats $0°$ and $360°$ as the same position.`,
      link:'',
    },
    obj38:{
      title:`Special Angle: 30°`,
      content:`$30°$ is the smallest member of the 30-60-90 family, one-twelfth of a turn, $\\pi/6$ in radians.`,
      before:``,
      after:`$$\\sin 30° = \\frac{1}{2} \\qquad \\cos 30° = \\frac{\\sqrt{3}}{2} \\qquad \\tan 30° = \\frac{\\sqrt{3}}{3}$$

The half comes straight from the 30-60-90 triangle, where the side opposite $30°$ is half the hypotenuse. Its reflections at $150°$, $210°$, and $330°$ reuse these magnitudes with quadrant signs.`,
      link:'',
    },
    obj39:{
      title:`Special Angle: 45°`,
      content:`$45°$ bisects the right angle along the diagonal $y = x$, $\\pi/4$ in radians. Its sine and cosine are equal.`,
      before:``,
      after:`$$\\sin 45° = \\frac{\\sqrt{2}}{2} \\qquad \\cos 45° = \\frac{\\sqrt{2}}{2} \\qquad \\tan 45° = 1$$

The values come from the isosceles 45-45-90 triangle with legs $1$ and hypotenuse $\\sqrt{2}$. Its reflections live at $135°$, $225°$, and $315°$.`,
      link:'',
    },
    obj40:{
      title:`Special Angle: 60°`,
      content:`$60°$ is the larger acute angle of the 30-60-90 triangle and the interior angle of the equilateral triangle, $\\pi/3$ in radians.`,
      before:``,
      after:`$$\\sin 60° = \\frac{\\sqrt{3}}{2} \\qquad \\cos 60° = \\frac{1}{2} \\qquad \\tan 60° = \\sqrt{3}$$

Sine and cosine swap compared to $30°$ because the two angles are complementary. Its reflections live at $120°$, $240°$, and $300°$.`,
      link:'',
    },
    obj41:{
      title:`Special Angle: 90°`,
      content:`$90°$ points straight up the positive y-axis — the quarter turn, $\\pi/2$ in radians, terminal point $(0, 1)$.`,
      before:``,
      after:`$$\\sin 90° = 1 \\qquad \\cos 90° = 0 \\qquad \\tan 90° \\text{ undefined}$$

Sine peaks at its maximum while cosine crosses zero, so the tangent ratio divides by zero — the first of the two undefined points on the ring.`,
      link:'',
    },
    obj42:{
      title:`Special Angle: 120°`,
      content:`$120°$ lies in Quadrant II, $30°$ past vertical — the supplement of $60°$ and the hexagon's interior angle, $2\\pi/3$ in radians.`,
      before:``,
      after:`$$\\sin 120° = \\frac{\\sqrt{3}}{2} \\qquad \\cos 120° = -\\frac{1}{2} \\qquad \\tan 120° = -\\sqrt{3}$$

The magnitudes are exactly the $60°$ values; only the signs change to Quadrant II's pattern of sine positive, cosine and tangent negative.`,
      link:'',
    },
    obj43:{
      title:`Special Angle: 135°`,
      content:`$135°$ is the Quadrant II diagonal along $y = -x$, supplement of $45°$, $3\\pi/4$ in radians.`,
      before:``,
      after:`$$\\sin 135° = \\frac{\\sqrt{2}}{2} \\qquad \\cos 135° = -\\frac{\\sqrt{2}}{2} \\qquad \\tan 135° = -1$$

With reference angle $45°$, sine and cosine share one magnitude and differ only in sign — forcing the tangent to exactly $-1$.`,
      link:'',
    },
    obj44:{
      title:`Special Angle: 150°`,
      content:`$150°$ sits $30°$ short of the straight line, in Quadrant II — the supplement of $30°$, $5\\pi/6$ in radians.`,
      before:``,
      after:`$$\\sin 150° = \\frac{1}{2} \\qquad \\cos 150° = -\\frac{\\sqrt{3}}{2} \\qquad \\tan 150° = -\\frac{\\sqrt{3}}{3}$$

The classic supplement demonstration: $\\sin 150° = \\sin 30°$ exactly, while the cosine flips sign.`,
      link:'',
    },
    obj45:{
      title:`Special Angle: 180°`,
      content:`$180°$ points along the negative x-axis — the half turn, $\\pi$ radians, terminal point $(-1, 0)$.`,
      before:``,
      after:`$$\\sin 180° = 0 \\qquad \\cos 180° = -1 \\qquad \\tan 180° = 0$$

Cosine bottoms out at its minimum while sine returns to zero. This point is the pivot of the supplement relationship $\\theta \\mapsto 180° - \\theta$.`,
      link:'',
    },
    obj46:{
      title:`Special Angle: 210°`,
      content:`$210°$ lies $30°$ past the straight line, in Quadrant III — $7\\pi/6$ in radians, reference angle $30°$.`,
      before:``,
      after:`$$\\sin 210° = -\\frac{1}{2} \\qquad \\cos 210° = -\\frac{\\sqrt{3}}{2} \\qquad \\tan 210° = \\frac{\\sqrt{3}}{3}$$

Both coordinates go negative here, so their ratio — the tangent — turns positive again, matching $\\tan 30°$ exactly.`,
      link:'',
    },
    obj47:{
      title:`Special Angle: 225°`,
      content:`$225°$ is the Quadrant III diagonal, opposite $45°$ through the origin — $5\\pi/4$ in radians.`,
      before:``,
      after:`$$\\sin 225° = -\\frac{\\sqrt{2}}{2} \\qquad \\cos 225° = -\\frac{\\sqrt{2}}{2} \\qquad \\tan 225° = 1$$

Equal negative coordinates give a tangent of exactly $1$ again: $225° = 45° + 180°$, tangent's period made visible.`,
      link:'',
    },
    obj48:{
      title:`Special Angle: 240°`,
      content:`$240°$ lies $60°$ past the straight line in Quadrant III, diametrically opposite $60°$ — $4\\pi/3$ in radians.`,
      before:``,
      after:`$$\\sin 240° = -\\frac{\\sqrt{3}}{2} \\qquad \\cos 240° = -\\frac{1}{2} \\qquad \\tan 240° = \\sqrt{3}$$

The 30-60-90 magnitudes reappear with both signs flipped, leaving the tangent at a positive $\\sqrt{3}$.`,
      link:'',
    },
    obj49:{
      title:`Special Angle: 270°`,
      content:`$270°$ points straight down the negative y-axis — the three-quarter turn, $3\\pi/2$ radians, terminal point $(0, -1)$.`,
      before:``,
      after:`$$\\sin 270° = -1 \\qquad \\cos 270° = 0 \\qquad \\tan 270° \\text{ undefined}$$

Sine bottoms out at its minimum while cosine crosses zero again — the second and last undefined point for the tangent on the ring.`,
      link:'',
    },
    obj50:{
      title:`Special Angle: 300°`,
      content:`$300°$ lies in Quadrant IV, $60°$ short of the full turn and coterminal with $-60°$ — $5\\pi/3$ in radians.`,
      before:``,
      after:`$$\\sin 300° = -\\frac{\\sqrt{3}}{2} \\qquad \\cos 300° = \\frac{1}{2} \\qquad \\tan 300° = -\\sqrt{3}$$

Cosine turns positive again in Quadrant IV while sine stays negative — the mirror image of $60°$ across the x-axis.`,
      link:'',
    },
    obj51:{
      title:`Special Angle: 315°`,
      content:`$315°$ is the Quadrant IV diagonal, $45°$ short of the full turn and coterminal with $-45°$ — $7\\pi/4$ in radians.`,
      before:``,
      after:`$$\\sin 315° = -\\frac{\\sqrt{2}}{2} \\qquad \\cos 315° = \\frac{\\sqrt{2}}{2} \\qquad \\tan 315° = -1$$

The $45°$ magnitudes return with opposite signs on sine and cosine, making the tangent exactly $-1$.`,
      link:'',
    },
    obj52:{
      title:`Special Angle: 330°`,
      content:`$330°$ sits $30°$ short of closing the rotation, in Quadrant IV, coterminal with $-30°$ — $11\\pi/6$ in radians.`,
      before:``,
      after:`$$\\sin 330° = -\\frac{1}{2} \\qquad \\cos 330° = \\frac{\\sqrt{3}}{2} \\qquad \\tan 330° = -\\frac{\\sqrt{3}}{3}$$

The familiar $30°$ magnitudes make their final appearance before the ring closes, with sine negative below the axis.`,
      link:'',
    },
    obj53:{
      title:`Positive Angles`,
      content:`A **positive angle** rotates counterclockwise from the initial side — the mathematical convention for the positive direction, drawn blue in the scene.`,
      before:``,
      after:`All the standard machinery — quadrants, reference angles, special values — is defined for counterclockwise sweeps first; clockwise angles are handled by symmetry.

Every positive angle has a [negative](!#negative-angles) twin pointing to the same terminal side: $+45°$ and $-315°$ are [coterminal](!#coterminal-angles).`,
      link:'',
    },
    obj54:{
      title:`Negative Angles`,
      content:`A **negative angle** rotates clockwise from the initial side, drawn amber in the scene. Drag below the x-axis in the Directed Angles view to produce one.`,
      before:``,
      after:`Negation is where the parity of the functions shows: $\\sin(-\\theta) = -\\sin\\theta$ makes sine an **odd** function, while $\\cos(-\\theta) = \\cos\\theta$ makes cosine **even** — both verified live in the panel.

Adding $360°$ converts any negative angle to its [positive](!#positive-angles) coterminal twin: $-45°$ is the same terminal side as $315°$.`,
      link:'',
    },

  }


  const faqQuestions = {
    obj1: {
      question: "What angle topics does the explorer cover?",
      answer: "Nine concepts in three groups. Classification covers angle types like acute, right, obtuse, straight, and reflex. Relationships covers complementary, supplementary, vertical, and adjacent angles. Trigonometry covers standard position, reference angles, coterminal angles, special angles, and directed angles."
    },
    obj2: {
      question: "How do I switch between the nine concepts?",
      answer: "On wide screens, a sidebar on the left lists all concepts grouped by category. On narrow screens, the same list becomes a horizontal scrolling tab strip above the scene. Click any item to load its interactive diagram and explanation."
    },
    obj3: {
      question: "Can I work with negative angles?",
      answer: "Yes. In the Standard Position and Directed Angles concepts, dragging below the x-axis produces clockwise (negative) rotations. The diagram color switches to amber and the side panel computes both directions, demonstrating that sine is odd and cosine is even."
    },
    obj4: {
      question: "What is a reference angle and how do I find one?",
      answer: "The reference angle is the acute angle between the terminal side and the nearest x-axis, always between 0 and 90 degrees. The formula depends on the quadrant: theta in Q1, 180 minus theta in Q2, theta minus 180 in Q3, and 360 minus theta in Q4. The Reference Angles concept shows these formulas live."
    },
    obj5: {
      question: "How do special angles relate to the rest of the tool?",
      answer: "Special angles are the 16 unit-circle positions (0, 30, 45, 60, 90 degrees and their reflections) that have exact trig values like 1/2, sqrt(2)/2, sqrt(3)/2. They appear as snap points in the other concepts and as a clickable ring of dots in the Special Angles view."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Interactive Angle Types Explorer",
      "description": "Explore nine angle concepts in one tool: classification, complementary, supplementary, vertical, adjacent, standard position, reference, coterminal, special, and directed angles.",
      "url": "https://www.learnmathclass.com/trigonometry/visual-tools/angle-types",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Nine concept scenes grouped into classification, relationships, and trigonometry",
        "Drag-to-rotate handles with snap-to-special-angle behavior",
        "Preset buttons for canonical angles in each concept",
        "Live signs of sin, cos, tan based on quadrant",
        "Reference angle formulas adapted to the active quadrant",
        "Coterminal stepper with positive and negative full-rotation offsets",
        "Special angles ring with degrees, radians, and exact value labels",
        "Directed angles with even and odd identity verification",
        "Light and dark theme toggle"
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
          "name": "Trigonometry",
          "item": "https://www.learnmathclass.com/trigonometry"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/trigonometry/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Angle Types",
          "item": "https://www.learnmathclass.com/trigonometry/visual-tools/angle-types"
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


  const introContent = {
  id: "intro",
  title: "",
  content: ``
}




  // Framed illustration units for the per-state sections (Line 1 v5): frozen
  // scene + attached picture-reading panel. Systematic groups built in loops.
  const SPECIAL_VALS = {
    0:   ['0','1','0'], 30: ['1/2','&#8730;3/2','1/&#8730;3'], 45: ['&#8730;2/2','&#8730;2/2','1'],
    60:  ['&#8730;3/2','1/2','&#8730;3'], 90: ['1','0','undefined'],
    120: ['&#8730;3/2','&#8722;1/2','&#8722;&#8730;3'], 135: ['&#8730;2/2','&#8722;&#8730;2/2','&#8722;1'],
    150: ['1/2','&#8722;&#8730;3/2','&#8722;1/&#8730;3'], 180: ['0','&#8722;1','0'],
    210: ['&#8722;1/2','&#8722;&#8730;3/2','1/&#8730;3'], 225: ['&#8722;&#8730;2/2','&#8722;&#8730;2/2','1'],
    240: ['&#8722;&#8730;3/2','&#8722;1/2','&#8730;3'], 270: ['&#8722;1','0','undefined'],
    300: ['&#8722;&#8730;3/2','1/2','&#8722;&#8730;3'], 315: ['&#8722;&#8730;2/2','&#8730;2/2','&#8722;1'],
    330: ['&#8722;1/2','&#8730;3/2','&#8722;1/&#8730;3'],
  };
  const ROMAN4 = ['', 'I', 'II', 'III', 'IV'];
  const STD_TEXT = {
    1: 'A terminal ray parked inside 0&#176;&#8211;90&#176;: the first-quadrant case of standard position.',
    2: 'The terminal ray between 90&#176; and 180&#176; &#8212; standard position in the second quadrant.',
    3: 'Between 180&#176; and 270&#176;, the ray points into the third quadrant.',
    4: 'Between 270&#176; and 360&#176;, the ray closes the turn through the fourth quadrant.',
  };
  const REF_TEXT = {
    1: 'In Quadrant I the angle IS its own reference angle &#8212; no folding needed.',
    2: 'The reference angle spans from the terminal ray back to the negative x-axis: 180&#176; &#8722; &#952;.',
    3: 'Past 180&#176;, the reference angle is measured onward from the negative x-axis: &#952; &#8722; 180&#176;.',
    4: 'Approaching the full turn, the reference angle is what remains: 360&#176; &#8722; &#952;.',
  };
  const TYPE_UNITS = {
    zero: ['Zero angle, frozen', 'Both rays coincide on the positive x-axis &#8212; no rotation at all.'],
    acute: ['Acute angle, frozen', 'A sweep caught between 0&#176; and 90&#176;, arc short of the perpendicular.'],
    right: ['Right angle, frozen at 90&#176;', 'The terminal ray exactly perpendicular, marked by the square corner.'],
    obtuse: ['Obtuse angle, frozen', 'Wider than a right angle, narrower than a straight line.'],
    straight: ['Straight angle, frozen at 180&#176;', 'The two rays form a single straight line through the vertex.'],
    reflex: ['Reflex angle, frozen', 'The rotation continues past 180&#176;, sweeping the long way around.'],
    full: ['Full angle, frozen at 360&#176;', 'A complete turn: the terminal ray returns to its start.'],
  };
  const stateUnits = {
    compSuppOverview: demoUnitFrame({ svg: angleTypesDiagrams.compSupp.overview, caption: 'Complement and supplement, frozen',
      text: 'One angle shown against both partners: the complement closing 90&#176; and the supplement closing 180&#176;.' }),
    vertical: demoUnitFrame({ svg: angleTypesDiagrams.vertical, caption: 'Vertical angles, frozen',
      text: 'Two lines crossing: the opposite angle pairs are mirror images and always equal.' }),
    adjacent: demoUnitFrame({ svg: angleTypesDiagrams.adjacent, caption: 'Adjacent angles, frozen',
      text: 'Two angles sharing a vertex and one ray, sitting side by side without overlapping.' }),
    standardOverview: demoUnitFrame({ svg: angleTypesDiagrams.standard.overview, caption: 'Standard position, frozen',
      text: 'Vertex at the origin, initial side fixed on the positive x-axis &#8212; the reference frame for every angle in trigonometry.' }),
    referenceOverview: demoUnitFrame({ svg: angleTypesDiagrams.reference.overview, caption: 'Reference angle, frozen',
      text: 'The acute gap between the terminal ray and the x-axis &#8212; the quadrant-free core of the angle.' }),
    coterminal: demoUnitFrame({ svg: angleTypesDiagrams.coterminal, caption: 'Coterminal pair, frozen',
      text: 'Two different rotations ending on one terminal ray &#8212; a full turn apart.' }),
    specialOverview: demoUnitFrame({ svg: angleTypesDiagrams.specialOverview, caption: 'The special angles, frozen',
      text: 'The multiples of 30&#176; and 45&#176; arranged around the circle &#8212; the positions whose exact values carry all of trigonometry.' }),
    directedOverview: demoUnitFrame({ svg: angleTypesDiagrams.directed.overview, caption: 'Directed angles, frozen',
      text: 'The same magnitude swept two ways: counterclockwise counts positive, clockwise negative.' }),
    positive: demoUnitFrame({ svg: angleTypesDiagrams.directed.positive, caption: 'Positive angle, frozen',
      text: 'A counterclockwise sweep &#8212; the mathematically positive direction of rotation.' }),
    negative: demoUnitFrame({ svg: angleTypesDiagrams.directed.negative, caption: 'Negative angle, frozen',
      text: 'The same start, swept clockwise: the angle carries a minus sign.' }),
    complementary: demoUnitFrame({ svg: angleTypesDiagrams.compSupp.complementary, caption: 'Complementary pair, frozen',
      text: 'Two angles stacked into one right angle &#8212; each is the other&#8217;s complement.' }),
    supplementary: demoUnitFrame({ svg: angleTypesDiagrams.compSupp.supplementary, caption: 'Supplementary pair, frozen',
      text: 'Two angles completing a straight line &#8212; together exactly 180&#176;.' }),
  };
  for (const t of Object.keys(TYPE_UNITS)) {
    stateUnits[t] = demoUnitFrame({ svg: angleTypesDiagrams.types[t], caption: TYPE_UNITS[t][0], text: TYPE_UNITS[t][1] });
  }
  for (let q = 1; q <= 4; q++) {
    stateUnits['std' + q] = demoUnitFrame({ svg: angleTypesDiagrams.standard[q],
      caption: 'Standard position, Quadrant ' + ROMAN4[q], text: STD_TEXT[q] });
    stateUnits['ref' + q] = demoUnitFrame({ svg: angleTypesDiagrams.reference[q],
      caption: 'Reference angle, Quadrant ' + ROMAN4[q], text: REF_TEXT[q] });
  }
  for (const deg of Object.keys(SPECIAL_VALS)) {
    const [s, c, t] = SPECIAL_VALS[deg];
    stateUnits['s' + deg] = demoUnitFrame({
      svg: angleTypesDiagrams.specials[deg],
      caption: deg + '&#176;, frozen',
      text: 'Exact values at this position: sin = ' + s + ', cos = ' + c + ', tan = ' + t + '.',
    });
  }

  const explanations = {
    basic: {
      content: `An angle is formed by two rays sharing a common vertex. In trigonometry, the type determines which quadrant the terminal side lands in, and therefore the signs of sin, cos, and tan. [See all angle classifications](!#angle-classifications)`,
      states: {
        zero: `Both arms overlap. No rotation. [Full treatment of zero angles](!#zero-angles)`,
        acute: `Less than a quarter turn. [Full treatment of acute angles](!#acute-angles)`,
        right: `Exactly a quarter turn. [Full treatment of right angles](!#right-angles)`,
        obtuse: `More than a quarter, less than a half turn. [Full treatment of obtuse angles](!#obtuse-angles)`,
        straight: `Exactly a half turn. A straight line. [Full treatment of straight angles](!#straight-angles)`,
        reflex: `More than a half turn. [Full treatment of reflex angles](!#reflex-angles)`,
        full: `A complete rotation. [Full treatment of full angles](!#full-angles)`,
      },
    },
    "comp-supp": {
      content: `[Complementary](!#complementary-angles) angles sum to 90°. [Supplementary](!#supplementary-angles) angles sum to 180°.
These appear in trig via co-function identities: sin(θ) = cos(90°−θ).`,
    },
    vertical: {
      content: `When two lines intersect, opposite angles are equal. Adjacent pairs sum to 180°.
Drag to 90° to make all four angles equal right angles. [Learn more about vertical angles](!#vertical-angles)`,
    },
    adjacent: {
      content: `Adjacent angles share a common arm (dashed, purple) and vertex, lying on opposite sides without overlapping.
Their sum has no fixed total. They appear in the angle addition identities. [Learn more about adjacent angles](!#adjacent-angles)`,
    },
    standard: {
      content: `Vertex at origin, initial side on positive x-axis. Positive angles rotate CCW; negative rotate CW.
The quadrant of the terminal side determines the signs of all six trig functions. [Learn more about standard position](!#standard-position)`,
    },
    reference: {
      content: `The reference angle is the acute angle (0°–90°) between the terminal side and the nearest x-axis. Always positive.
Trig functions of any angle equal ± the same function of its reference angle — sign depends on quadrant. [Learn more about reference angles](!#reference-angles)`,
    },
    coterminal: {
      content: `Two angles are coterminal when they share the same terminal side — differing by full rotations (multiples of 360°).
Coterminal angles produce identical trig values. sin(θ) = sin(θ+360°) because trig functions are periodic. [Learn more about coterminal angles](!#coterminal-angles)`,
    },
    special: {
      content: `16 standard unit circle angles with exact trig values. Come from 30-60-90 and 45-45-90 triangles reflected across all four quadrants.
Click any point to see its exact values. [Learn more about the special angles](!#special-angles-on-the-unit-circle)`,
    },
    directed: {
      content: `A directed angle has magnitude and direction. [Positive](!#positive-angles) = CCW (blue). [Negative](!#negative-angles) = CW (amber).
Drag above the x-axis for positive, below for negative.`,
    },
  };


   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
         explanations,
         stateUnits,
          seoData: {
        title: "Angle Types Explorer: Interactive Visualizer | Learn Math Class",
        description: "Explore nine angle concepts: classification, complementary, supplementary, vertical, adjacent, standard position, reference, coterminal, special, and directed.",
        hubDescription: "An interactive hub for nine core angle concepts in trigonometry. Drag handles or use presets to explore basic classifications (acute, right, obtuse, straight, reflex), pairwise relationships (complementary, supplementary, vertical, adjacent), and trigonometric foundations (standard position, reference angles, coterminal angles, the 16 special unit-circle angles, and directed angles with even and odd verification).",
        category: "Angles",
        keywords: keyWords.join(", "),
        url: "/trigonometry/visual-tools/angle-types",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="34" x2="26" y2="34" stroke="#85B7EB" stroke-width="1.8"/><line x1="10" y1="34" x2="21.31" y2="22.69" stroke="#85B7EB" stroke-width="1.8"/><path d="M 16 34 A 6 6 0 0 0 14.24 29.76" fill="none" stroke="#0C447C" stroke-width="1.1"/><line x1="48" y1="34" x2="64" y2="34" stroke="#97C459" stroke-width="1.8"/><line x1="48" y1="34" x2="48" y2="18" stroke="#97C459" stroke-width="1.8"/><path d="M 54 34 L 54 28 L 48 28" fill="none" stroke="#27500A" stroke-width="1.1"/><line x1="20" y1="70" x2="36" y2="70" stroke="#FAC775" stroke-width="1.8"/><line x1="20" y1="70" x2="8.69" y2="58.69" stroke="#FAC775" stroke-width="1.8"/><path d="M 26 70 A 6 6 0 0 0 15.76 65.76" fill="none" stroke="#854F0B" stroke-width="1.1"/><line x1="40" y1="70" x2="72" y2="70" stroke="#ED93B1" stroke-width="1.8"/><path d="M 62 70 A 6 6 0 0 0 50 70" fill="none" stroke="#72243E" stroke-width="1.1"/><circle cx="56" cy="70" r="2.2" fill="#ED93B1" stroke="#72243E" stroke-width="1"/></svg>`,
        name: "Interactive Angle Types Explorer"
      },

       }
    }
   }

export default function AngleTypesPage({seoData, sectionsContent, introContent, faqQuestions, schemas, explanations, stateUnits}) {


  const genericSections=[
    {
        id:'key-terms',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
        ]
    },
    {
        id:'choosing-a-concept',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'switching-dark-and-light-modes',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
        ]
    },
    {
        id:'dragging-to-set-angles',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    },
    {
        id:'using-preset-buttons-and-quick-angles',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
        ]
    },
    {
        id:'reading-the-scene-diagrams',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
        ]
    },
    {
        id:'reading-the-explanation-panels',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'angle-classifications',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    {
        id:'angle-relationships',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
    {
        id:'trigonometry-specific-angle-concepts',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'why-angle-classification-matters-in-trigonometry',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
        ]
    },
    {
        id:'related-concepts-and-tools',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
        ]
    },
    {
        id:'complementary-and-supplementary-angles',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
          <div key={'u-compSuppOverview'} dangerouslySetInnerHTML={{ __html: stateUnits['compSuppOverview'] }} />,
          sectionsContent.obj12.after,
        ]
    },
    {
        id:'vertical-angles',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
          <div key={'u-vertical'} dangerouslySetInnerHTML={{ __html: stateUnits['vertical'] }} />,
          sectionsContent.obj13.after,
        ]
    },
    {
        id:'adjacent-angles',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
          <div key={'u-adjacent'} dangerouslySetInnerHTML={{ __html: stateUnits['adjacent'] }} />,
          sectionsContent.obj14.after,
        ]
    },
    {
        id:'standard-position',
        title:sectionsContent.obj15.title,
        link:sectionsContent.obj15.link,
        content:[
          sectionsContent.obj15.content,
          <div key={'u-standardOverview'} dangerouslySetInnerHTML={{ __html: stateUnits['standardOverview'] }} />,
          sectionsContent.obj15.after,
        ]
    },
    {
        id:'reference-angles',
        title:sectionsContent.obj16.title,
        link:sectionsContent.obj16.link,
        content:[
          sectionsContent.obj16.content,
          <div key={'u-referenceOverview'} dangerouslySetInnerHTML={{ __html: stateUnits['referenceOverview'] }} />,
          sectionsContent.obj16.after,
        ]
    },
    {
        id:'coterminal-angles',
        title:sectionsContent.obj17.title,
        link:sectionsContent.obj17.link,
        content:[
          sectionsContent.obj17.content,
          <div key={'u-coterminal'} dangerouslySetInnerHTML={{ __html: stateUnits['coterminal'] }} />,
          sectionsContent.obj17.after,
        ]
    },
    {
        id:'special-angles-on-the-unit-circle',
        title:sectionsContent.obj18.title,
        link:sectionsContent.obj18.link,
        content:[
          sectionsContent.obj18.content,
          <div key={'u-specialOverview'} dangerouslySetInnerHTML={{ __html: stateUnits['specialOverview'] }} />,
          sectionsContent.obj18.after,
        ]
    },
    {
        id:'directed-angles',
        title:sectionsContent.obj19.title,
        link:sectionsContent.obj19.link,
        content:[
          sectionsContent.obj19.content,
          <div key={'u-directedOverview'} dangerouslySetInnerHTML={{ __html: stateUnits['directedOverview'] }} />,
          sectionsContent.obj19.after,
        ]
    },
    {
        id:'zero-angles',
        title:sectionsContent.obj20.title,
        link:sectionsContent.obj20.link,
        content:[
          sectionsContent.obj20.content,
          <div key={'u-zero'} dangerouslySetInnerHTML={{ __html: stateUnits['zero'] }} />,
          sectionsContent.obj20.after,
        ]
    },
    {
        id:'acute-angles',
        title:sectionsContent.obj21.title,
        link:sectionsContent.obj21.link,
        content:[
          sectionsContent.obj21.content,
          <div key={'u-acute'} dangerouslySetInnerHTML={{ __html: stateUnits['acute'] }} />,
          sectionsContent.obj21.after,
        ]
    },
    {
        id:'right-angles',
        title:sectionsContent.obj22.title,
        link:sectionsContent.obj22.link,
        content:[
          sectionsContent.obj22.content,
          <div key={'u-right'} dangerouslySetInnerHTML={{ __html: stateUnits['right'] }} />,
          sectionsContent.obj22.after,
        ]
    },
    {
        id:'obtuse-angles',
        title:sectionsContent.obj23.title,
        link:sectionsContent.obj23.link,
        content:[
          sectionsContent.obj23.content,
          <div key={'u-obtuse'} dangerouslySetInnerHTML={{ __html: stateUnits['obtuse'] }} />,
          sectionsContent.obj23.after,
        ]
    },
    {
        id:'straight-angles',
        title:sectionsContent.obj24.title,
        link:sectionsContent.obj24.link,
        content:[
          sectionsContent.obj24.content,
          <div key={'u-straight'} dangerouslySetInnerHTML={{ __html: stateUnits['straight'] }} />,
          sectionsContent.obj24.after,
        ]
    },
    {
        id:'reflex-angles',
        title:sectionsContent.obj25.title,
        link:sectionsContent.obj25.link,
        content:[
          sectionsContent.obj25.content,
          <div key={'u-reflex'} dangerouslySetInnerHTML={{ __html: stateUnits['reflex'] }} />,
          sectionsContent.obj25.after,
        ]
    },
    {
        id:'full-angles',
        title:sectionsContent.obj26.title,
        link:sectionsContent.obj26.link,
        content:[
          sectionsContent.obj26.content,
          <div key={'u-full'} dangerouslySetInnerHTML={{ __html: stateUnits['full'] }} />,
          sectionsContent.obj26.after,
        ]
    },
    {
        id:'complementary-angles',
        title:sectionsContent.obj27.title,
        link:sectionsContent.obj27.link,
        content:[
          sectionsContent.obj27.content,
          <div key={'u-complementary'} dangerouslySetInnerHTML={{ __html: stateUnits['complementary'] }} />,
          sectionsContent.obj27.after,
        ]
    },
    {
        id:'supplementary-angles',
        title:sectionsContent.obj28.title,
        link:sectionsContent.obj28.link,
        content:[
          sectionsContent.obj28.content,
          <div key={'u-supplementary'} dangerouslySetInnerHTML={{ __html: stateUnits['supplementary'] }} />,
          sectionsContent.obj28.after,
        ]
    },
    {
        id:'quadrant-i-function-signs',
        title:sectionsContent.obj29.title,
        link:sectionsContent.obj29.link,
        content:[
          sectionsContent.obj29.content,
          <div key={'u-std1'} dangerouslySetInnerHTML={{ __html: stateUnits['std1'] }} />,
          sectionsContent.obj29.after,
        ]
    },
    {
        id:'quadrant-ii-function-signs',
        title:sectionsContent.obj30.title,
        link:sectionsContent.obj30.link,
        content:[
          sectionsContent.obj30.content,
          <div key={'u-std2'} dangerouslySetInnerHTML={{ __html: stateUnits['std2'] }} />,
          sectionsContent.obj30.after,
        ]
    },
    {
        id:'quadrant-iii-function-signs',
        title:sectionsContent.obj31.title,
        link:sectionsContent.obj31.link,
        content:[
          sectionsContent.obj31.content,
          <div key={'u-std3'} dangerouslySetInnerHTML={{ __html: stateUnits['std3'] }} />,
          sectionsContent.obj31.after,
        ]
    },
    {
        id:'quadrant-iv-function-signs',
        title:sectionsContent.obj32.title,
        link:sectionsContent.obj32.link,
        content:[
          sectionsContent.obj32.content,
          <div key={'u-std4'} dangerouslySetInnerHTML={{ __html: stateUnits['std4'] }} />,
          sectionsContent.obj32.after,
        ]
    },
    {
        id:'reference-angle-in-quadrant-i',
        title:sectionsContent.obj33.title,
        link:sectionsContent.obj33.link,
        content:[
          sectionsContent.obj33.content,
          <div key={'u-ref1'} dangerouslySetInnerHTML={{ __html: stateUnits['ref1'] }} />,
          sectionsContent.obj33.after,
        ]
    },
    {
        id:'reference-angle-in-quadrant-ii',
        title:sectionsContent.obj34.title,
        link:sectionsContent.obj34.link,
        content:[
          sectionsContent.obj34.content,
          <div key={'u-ref2'} dangerouslySetInnerHTML={{ __html: stateUnits['ref2'] }} />,
          sectionsContent.obj34.after,
        ]
    },
    {
        id:'reference-angle-in-quadrant-iii',
        title:sectionsContent.obj35.title,
        link:sectionsContent.obj35.link,
        content:[
          sectionsContent.obj35.content,
          <div key={'u-ref3'} dangerouslySetInnerHTML={{ __html: stateUnits['ref3'] }} />,
          sectionsContent.obj35.after,
        ]
    },
    {
        id:'reference-angle-in-quadrant-iv',
        title:sectionsContent.obj36.title,
        link:sectionsContent.obj36.link,
        content:[
          sectionsContent.obj36.content,
          <div key={'u-ref4'} dangerouslySetInnerHTML={{ __html: stateUnits['ref4'] }} />,
          sectionsContent.obj36.after,
        ]
    },
    {
        id:'special-angle-0',
        title:sectionsContent.obj37.title,
        link:sectionsContent.obj37.link,
        content:[
          sectionsContent.obj37.content,
          <div key={'u-s0'} dangerouslySetInnerHTML={{ __html: stateUnits['s0'] }} />,
          sectionsContent.obj37.after,
        ]
    },
    {
        id:'special-angle-30',
        title:sectionsContent.obj38.title,
        link:sectionsContent.obj38.link,
        content:[
          sectionsContent.obj38.content,
          <div key={'u-s30'} dangerouslySetInnerHTML={{ __html: stateUnits['s30'] }} />,
          sectionsContent.obj38.after,
        ]
    },
    {
        id:'special-angle-45',
        title:sectionsContent.obj39.title,
        link:sectionsContent.obj39.link,
        content:[
          sectionsContent.obj39.content,
          <div key={'u-s45'} dangerouslySetInnerHTML={{ __html: stateUnits['s45'] }} />,
          sectionsContent.obj39.after,
        ]
    },
    {
        id:'special-angle-60',
        title:sectionsContent.obj40.title,
        link:sectionsContent.obj40.link,
        content:[
          sectionsContent.obj40.content,
          <div key={'u-s60'} dangerouslySetInnerHTML={{ __html: stateUnits['s60'] }} />,
          sectionsContent.obj40.after,
        ]
    },
    {
        id:'special-angle-90',
        title:sectionsContent.obj41.title,
        link:sectionsContent.obj41.link,
        content:[
          sectionsContent.obj41.content,
          <div key={'u-s90'} dangerouslySetInnerHTML={{ __html: stateUnits['s90'] }} />,
          sectionsContent.obj41.after,
        ]
    },
    {
        id:'special-angle-120',
        title:sectionsContent.obj42.title,
        link:sectionsContent.obj42.link,
        content:[
          sectionsContent.obj42.content,
          <div key={'u-s120'} dangerouslySetInnerHTML={{ __html: stateUnits['s120'] }} />,
          sectionsContent.obj42.after,
        ]
    },
    {
        id:'special-angle-135',
        title:sectionsContent.obj43.title,
        link:sectionsContent.obj43.link,
        content:[
          sectionsContent.obj43.content,
          <div key={'u-s135'} dangerouslySetInnerHTML={{ __html: stateUnits['s135'] }} />,
          sectionsContent.obj43.after,
        ]
    },
    {
        id:'special-angle-150',
        title:sectionsContent.obj44.title,
        link:sectionsContent.obj44.link,
        content:[
          sectionsContent.obj44.content,
          <div key={'u-s150'} dangerouslySetInnerHTML={{ __html: stateUnits['s150'] }} />,
          sectionsContent.obj44.after,
        ]
    },
    {
        id:'special-angle-180',
        title:sectionsContent.obj45.title,
        link:sectionsContent.obj45.link,
        content:[
          sectionsContent.obj45.content,
          <div key={'u-s180'} dangerouslySetInnerHTML={{ __html: stateUnits['s180'] }} />,
          sectionsContent.obj45.after,
        ]
    },
    {
        id:'special-angle-210',
        title:sectionsContent.obj46.title,
        link:sectionsContent.obj46.link,
        content:[
          sectionsContent.obj46.content,
          <div key={'u-s210'} dangerouslySetInnerHTML={{ __html: stateUnits['s210'] }} />,
          sectionsContent.obj46.after,
        ]
    },
    {
        id:'special-angle-225',
        title:sectionsContent.obj47.title,
        link:sectionsContent.obj47.link,
        content:[
          sectionsContent.obj47.content,
          <div key={'u-s225'} dangerouslySetInnerHTML={{ __html: stateUnits['s225'] }} />,
          sectionsContent.obj47.after,
        ]
    },
    {
        id:'special-angle-240',
        title:sectionsContent.obj48.title,
        link:sectionsContent.obj48.link,
        content:[
          sectionsContent.obj48.content,
          <div key={'u-s240'} dangerouslySetInnerHTML={{ __html: stateUnits['s240'] }} />,
          sectionsContent.obj48.after,
        ]
    },
    {
        id:'special-angle-270',
        title:sectionsContent.obj49.title,
        link:sectionsContent.obj49.link,
        content:[
          sectionsContent.obj49.content,
          <div key={'u-s270'} dangerouslySetInnerHTML={{ __html: stateUnits['s270'] }} />,
          sectionsContent.obj49.after,
        ]
    },
    {
        id:'special-angle-300',
        title:sectionsContent.obj50.title,
        link:sectionsContent.obj50.link,
        content:[
          sectionsContent.obj50.content,
          <div key={'u-s300'} dangerouslySetInnerHTML={{ __html: stateUnits['s300'] }} />,
          sectionsContent.obj50.after,
        ]
    },
    {
        id:'special-angle-315',
        title:sectionsContent.obj51.title,
        link:sectionsContent.obj51.link,
        content:[
          sectionsContent.obj51.content,
          <div key={'u-s315'} dangerouslySetInnerHTML={{ __html: stateUnits['s315'] }} />,
          sectionsContent.obj51.after,
        ]
    },
    {
        id:'special-angle-330',
        title:sectionsContent.obj52.title,
        link:sectionsContent.obj52.link,
        content:[
          sectionsContent.obj52.content,
          <div key={'u-s330'} dangerouslySetInnerHTML={{ __html: stateUnits['s330'] }} />,
          sectionsContent.obj52.after,
        ]
    },
    {
        id:'positive-angles',
        title:sectionsContent.obj53.title,
        link:sectionsContent.obj53.link,
        content:[
          sectionsContent.obj53.content,
          <div key={'u-positive'} dangerouslySetInnerHTML={{ __html: stateUnits['positive'] }} />,
          sectionsContent.obj53.after,
        ]
    },
    {
        id:'negative-angles',
        title:sectionsContent.obj54.title,
        link:sectionsContent.obj54.link,
        content:[
          sectionsContent.obj54.content,
          <div key={'u-negative'} dangerouslySetInnerHTML={{ __html: stateUnits['negative'] }} />,
          sectionsContent.obj54.after,
        ]
    },

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
      __html: JSON.stringify(schemas.webApplication)
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>
    Angle Types
   </h1>
   <br/>
  {/* <SiblingsNav
     bg="#fafaf7"
  color="#2c5d99"
  activeColor="#143a66"
  activeBg="#dde9f7"
  > */}
    {/* <div style={{transform:'scale(1.15)'}}> */}
    <div style={{ display: 'grid', gridTemplateColumns: '200px minmax(0, 1fr)', gap: 28 }}>
  <SiblingsNavStandalone 
  
     bg="#fafaf7"
  color="#2c5d99"
  activeColor="#143a66"
  activeBg="#dde9f7"
  />
  <TrigoAngleTypesExplorer explanations={explanations}/>
</div>
    {/* <SiblingsNavStandalone/>
   <TrigoAngleTypesExplorer/> */}
   {/* </div> */}
   {/* </SiblingsNav> */}
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
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
          //  "#f2f2f2"
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