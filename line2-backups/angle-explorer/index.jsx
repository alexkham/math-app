

import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '@/pages/pages.css'
import Head from 'next/head'
import AngleExplorer from '../../../../app/components/trigonometry/angle/AngleExplorer'
import angleDiagrams from '../../../../app/components/trigonometry/angle/angleExplorerDiagrams'
import SiblingsNav from '../../../../app/components/SiblingsNav'
import SiblingsNavStandalone from '../../../../app/components/SiblingsNavStandalone'




export async function getStaticProps(){

  const keyWords = [
    'angle explorer',
    'interactive angle visualizer',
    'angle calculator',
    'angle types tool',
    'complementary supplementary angles',
    'coterminal angles calculator',
    'reference angle finder',
    'degrees radians converter',
    'unit circle angles',
    'angle quadrant calculator',
    'acute obtuse reflex angles',
    'trigonometric values calculator',
    'sin cos tan visualizer',
    'visualize angles online',
    'angle properties tool'
  ]

    const sectionsContent={

    obj1:{
      title:`Setting an Angle`,
      content:`Type any value into the **Angle Value** input to update the diagram, properties panel, and trigonometric values in real time. The explorer accepts positive numbers, negative numbers, and values beyond a single rotation, so $720°$ or $-45°$ are both valid inputs.

Tips for entering angles:
• Use the up and down arrow keys for fine adjustments.
• Type a decimal like $52.5$ to explore non-special positions.
• Press **Reset** to return to $0°$ at any time.

The terminal ray on the diagram rotates counterclockwise for positive values and clockwise for negative values, matching standard mathematical convention.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`Choosing Degrees or Radians`,
      content:`Use the unit dropdown next to the input to switch between **Degrees** and **Radians**. Switching the unit reinterprets the current numeric value rather than converting it, so the diagram may jump.

When to pick each unit:
• **Degrees** are intuitive for geometry, navigation, and common reference angles like $30°$, $45°$, and $60°$.
• **Radians** match the natural input for calculus, physics, and the **unit circle**, where $\\pi/2$, $\\pi$, and $2\\pi$ are the key markers.

The properties panel always reports both the degree value and the radian value, making the tool useful for verifying conversions in either direction.`,
      before:``,
      after:``,
      link:'',
    },

    obj3:{
      title:`Using Quick Preset Angles`,
      content:`The **Quick Angles** row provides one-click access to sixteen standard positions: $0°$, $30°$, $45°$, $60°$, $90°$, $120°$, $135°$, $150°$, $180°$, $210°$, $225°$, $240°$, $270°$, $300°$, $315°$, and $330°$.

Why these specific values:
• They are the **special angles** of the unit circle, with exact $\\sin$, $\\cos$, and $\\tan$ values.
• They cover all four quadrants evenly, making them ideal for spotting symmetry.
• Pairs like $30°$ and $150°$ or $45°$ and $135°$ show how reference angles repeat.

Each preset auto-converts to the active unit, so switching to radians and clicking $90°$ enters $\\pi/2$.`,
      before:``,
      after:``,
      link:'',
    },
    obj4:{
      title:`Display Toggle Options`,
      content:`Four checkboxes in the **Display Options** group control what the diagram renders:

• **Show Angle Arc** draws the blue arc sweeping from the initial ray to the terminal ray.
• **Show Reference Lines** adds the unit circle, axes, and Roman numeral quadrant labels (I, II, III, IV).
• **Show Complementary Angle** overlays a green dashed arc to the vertical axis when the angle is between $0°$ and $90°$.
• **Show Supplementary Angle** overlays a red dashed arc to the negative x-axis when the angle is between $0°$ and $180°$.

Toggle these to isolate a concept. Turning off the reference lines, for example, leaves only the rays and arc, useful for clean explanations.`,
      before:``,
      after:``,
      link:'',
    },
    obj5:{
      title:`Reading the Properties Panel`,
      content:`The first column of the panel summarizes everything the explorer derives from the input.

Fields you will see:
• **Current Angle** in both degrees and radians, useful for unit conversion checks.
• **Type** classifies the angle as acute, right, obtuse, straight, or reflex.
• **Quadrant** identifies which of the four regions the terminal ray points into.
• **Reference Angle** gives the acute angle between the terminal ray and the x-axis, always between $0°$ and $90°$.

Watching these values change as you sweep through angles is one of the fastest ways to build intuition about how classification rules work.`,
      before:``,
      after:``,
      link:'',
    },
    obj6:{
      title:`Working with Related and Coterminal Angles`,
      content:`The middle and right columns of the panel report angles connected to the current value.

**Related Angles** column:
• **Complementary**: $90° - \\theta$, shown only when $\\theta$ is between $0°$ and $90°$.
• **Supplementary**: $180° - \\theta$, shown only when $\\theta$ is between $0°$ and $180°$.
• **Reflex**: $360° - \\theta$, the angle on the opposite side of the rotation.

[Coterminal Angles](!#coterminal-angles) column:
• **Positive** adds $360°$ to the input.
• **Negative** subtracts $360°$.
• **General Form** $\\theta + 360°n$ describes every coterminal value, where $n$ is any integer.`,
      before:``,
      after:``,
      link:'',
    },
    obj7:{
      title:`Reading the Trigonometric Values Table`,
      content:`Below the diagram, two compact tables show the six [trigonometric functions](!#the-six-trigonometric-functions) evaluated at the current angle.

**Primary table:** $\\sin\\theta$, $\\cos\\theta$, $\\tan\\theta$.
**Reciprocal table:** $\\csc\\theta$, $\\sec\\theta$, $\\cot\\theta$.

How values are displayed:
• At special angles ($30°$, $45°$, $60°$, etc.), the table shows the **exact form**, such as fractions and radical expressions.
• At other angles, values are rounded decimals.
• Undefined points like $\\tan 90°$ display the infinity symbol.

This makes the explorer a useful companion to **trigonometric identities** and to the **unit circle** when checking exact values.`,
      before:``,
      after:``,
      link:'',
    },
    obj8:{
      title:`What is an Angle?`,
      content:`An angle measures the amount of rotation between two rays meeting at a common vertex. In the explorer, the initial ray points along the positive x-axis and the terminal ray rotates to the input position.

Two units of measure dominate mathematics:
• **Degrees** divide a full rotation into $360$ equal parts.
• **Radians** measure rotation by arc length on a unit circle, with $2\\pi$ radians equal to $360°$.

The conversion formula is $\\theta_{rad} = \\theta_{deg} \\cdot \\frac{\\pi}{180}$.

For a deeper treatment of the definition, see the **angles theory page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj9:{
      title:`Angle Types and Classifications`,
      content:`Angles are classified by their measure:

• [Acute](!#acute-angles): $0° < \\theta < 90°$.
• [Right](!#right-angles): $\\theta = 90°$.
• [Obtuse](!#obtuse-angles): $90° < \\theta < 180°$.
• [Straight](!#straight-angles): $\\theta = 180°$.
• [Reflex](!#reflex-angles): $180° < \\theta < 360°$.

The explorer applies these rules automatically and updates the **Type** field as you change the angle. For full coverage of each type with examples, see the **angle types page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj10:{
      title:`Complementary, Supplementary, and Reference Angles`,
      content:`Three derived angles appear repeatedly in trigonometry:

• [Complementary](!#complementary-angles): a pair summing to $90°$. Used in cofunction identities like $\\sin\\theta = \\cos(90° - \\theta)$.
• [Supplementary](!#supplementary-angles): a pair summing to $180°$. Common in geometry and triangle angle sums.
• [Reference angle](!#reference-angles): the acute angle between the terminal ray and the x-axis. Used to evaluate trigonometric functions in any quadrant by relating them to first-quadrant values.

For full theory and proofs, see the **complementary and supplementary angles page** and the **reference angle page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj11:{
      title:`Related Concepts and Tools`,
      content:`Continue exploring with these connected resources:

• **Unit Circle** — visualize how angle position determines $\\sin$, $\\cos$, and $\\tan$ on a circle of radius $1$.
• **Degrees and Radians Converter** — quick numeric conversion without the diagram.
• **Trigonometric Functions** — full theory of sine, cosine, tangent, and their reciprocals.
• **Special Angles Table** — exact values at $0°$, $30°$, $45°$, $60°$, $90°$, and beyond.
• **Coterminal Angles** — practice problems and proofs for angles sharing a terminal side.
• **Reference Angle Calculator** — focused tool for the reduction rules across quadrants.`,
      before:``,
      after:``,
      link:'',
    },
    obj12:{
      title:`Quadrants and Trigonometric Signs`,
      content:`The coordinate axes divide the plane into four quadrants, labeled counterclockwise with Roman numerals. An angle in standard position belongs to the quadrant containing its terminal ray: [Quadrant I](!#quadrant-i) holds angles between $0°$ and $90°$, [Quadrant II](!#quadrant-ii) between $90°$ and $180°$, [Quadrant III](!#quadrant-iii) between $180°$ and $270°$, and [Quadrant IV](!#quadrant-iv) between $270°$ and $360°$. Angles landing exactly on an axis ($0°$, $90°$, $180°$, $270°$) are called quadrantal angles and sit on the boundary rather than inside a quadrant.

The quadrant determines the sign of every trigonometric function, because $\\cos\\theta$ is the x-coordinate and $\\sin\\theta$ the y-coordinate of the point where the terminal ray meets the unit circle:
• **Quadrant I** — all six functions positive.
• **Quadrant II** — only $\\sin$ (and $\\csc$) positive.
• **Quadrant III** — only $\\tan$ (and $\\cot$) positive.
• **Quadrant IV** — only $\\cos$ (and $\\sec$) positive.

A common mnemonic is **All Students Take Calculus** — one word per quadrant, naming the functions that stay positive there. Combine the quadrant's sign rule with the reference angle and you can evaluate any trigonometric function of any angle using first-quadrant values alone.`,
      before:``,
      after:``,
      link:'',
    },
    obj13:{
      title:`Special Angles and Their Exact Values`,
      content:`The special angles are the multiples of $30°$ and $45°$: sixteen positions around the circle — [0°](!#special-angle-0), [30°](!#special-angle-30), [45°](!#special-angle-45), [60°](!#special-angle-60), [90°](!#special-angle-90), [120°](!#special-angle-120), [135°](!#special-angle-135), [150°](!#special-angle-150), [180°](!#special-angle-180), [210°](!#special-angle-210), [225°](!#special-angle-225), [240°](!#special-angle-240), [270°](!#special-angle-270), [300°](!#special-angle-300), [315°](!#special-angle-315), [330°](!#special-angle-330) — plus [360°](!#special-angle-360), which completes the rotation. They matter because their trigonometric values are **exact** — expressible with fractions and square roots instead of rounded decimals.

The exact values come from two classical triangles:
• The **45-45-90 triangle** gives $\\sin 45° = \\cos 45° = \\frac{\\sqrt{2}}{2}$ and $\\tan 45° = 1$.
• The **30-60-90 triangle** gives $\\sin 30° = \\frac{1}{2}$, $\\cos 30° = \\frac{\\sqrt{3}}{2}$ and $\\sin 60° = \\frac{\\sqrt{3}}{2}$, $\\cos 60° = \\frac{1}{2}$.
• The axis angles $0°$, $90°$, $180°$, $270°$, and $360°$ take their values directly from the unit-circle coordinates $(1,0)$, $(0,1)$, $(-1,0)$, and $(0,-1)$.

Every other special angle is one of these first-quadrant angles reflected into another quadrant: its **reference angle** is $30°$, $45°$, or $60°$, and only the sign changes. For example, $150°$ has reference angle $30°$, so $\\sin 150° = \\frac{1}{2}$ while $\\cos 150° = -\\frac{\\sqrt{3}}{2}$. This is why the explorer can display exact forms at every preset: sixteen positions, but only three underlying triangles.`,
      before:``,
      after:``,
      link:'',
    },

    obj14:{
      title:`Acute Angles`,
      content:`An **acute angle** measures strictly between $0°$ and $90°$: its terminal ray has left the initial ray but has not yet reached the vertical. Every acute angle lies in [Quadrant I](!#quadrant-i), where all six trigonometric values are positive.

${angleDiagrams.types.acute}

The diagram freezes the explorer at $35°$, a typical acute angle: the blue arc has swept just over a third of the way to the vertical axis. Acute angles are the building blocks of trigonometry — both non-right angles of every right triangle are acute, and [reference angles](!#reference-angles) are acute by definition.

Familiar examples: each angle of an equilateral triangle ($60°$), the $30°$ and $45°$ angles of the classical special triangles, and most angles of elevation in applied problems. Any input with $0° < \\theta < 90°$ reports **Type: acute** in the explorer's properties panel.`,
      before:``,
      after:``,
      link:'',
    },
    obj15:{
      title:`Right Angles`,
      content:`A **right angle** measures exactly $90°$: the terminal ray points straight up the positive y-axis, perpendicular to the initial ray. It is the boundary between acute and obtuse, and is marked in diagrams with a small square at the vertex.

${angleDiagrams.types.right}

At $90°$ the trigonometric values hit their quarter-turn landmarks: $\\sin 90° = 1$, $\\cos 90° = 0$, and $\\tan 90°$ is **undefined**, because the ratio $\\frac{\\sin\\theta}{\\cos\\theta}$ divides by zero there. The explorer's [values table](!#reading-the-trigonometric-values-table) shows the infinity symbol for this case.

Right angles are the backbone of coordinate geometry: perpendicular lines, the corners of squares and rectangles, and the defining angle of every right triangle. A $90°$ angle is also a **quadrantal angle** — it sits on the boundary between [Quadrant I](!#quadrant-i) and [Quadrant II](!#quadrant-ii) rather than inside either.`,
      before:``,
      after:``,
      link:'',
    },
    obj16:{
      title:`Obtuse Angles`,
      content:`An **obtuse angle** measures strictly between $90°$ and $180°$: past the vertical, but not yet a straight line. Its terminal ray points into [Quadrant II](!#quadrant-ii), where sine stays positive while cosine and tangent turn negative.

${angleDiagrams.types.obtuse}

The diagram freezes the explorer at $110°$. Its [reference angle](!#reference-angles) is $180° - 110° = 70°$, so $\\sin 110° = \\sin 70°$ while $\\cos 110° = -\\cos 70°$ — the standard Quadrant II sign pattern.

Obtuse angles appear in triangles (a triangle can contain at most one), in bearings and rotations, and as the [supplements](!#supplementary-angles) of acute angles: every obtuse angle pairs with the acute angle $180° - \\theta$ to form a straight line.`,
      before:``,
      after:``,
      link:'',
    },
    obj17:{
      title:`Straight Angles`,
      content:`A **straight angle** measures exactly $180°$: the two rays point in opposite directions and together form a straight line through the vertex. It is half of a full rotation.

${angleDiagrams.types.straight}

At $180°$ the terminal ray lies along the negative x-axis, giving $\\sin 180° = 0$, $\\cos 180° = -1$, and $\\tan 180° = 0$. Like $90°$, it is a **quadrantal angle** — the boundary between [Quadrant II](!#quadrant-ii) and [Quadrant III](!#quadrant-iii).

Straight angles anchor the idea of supplementary pairs: two angles are [supplementary](!#supplementary-angles) precisely when they compose a straight angle. The straight angle also marks the halfway point of the unit circle, where cosine reaches its minimum value of $-1$.`,
      before:``,
      after:``,
      link:'',
    },
    obj18:{
      title:`Reflex Angles`,
      content:`A **reflex angle** measures strictly between $180°$ and $360°$: more than half a rotation, but less than a full turn. Every terminal-ray position below the x-axis admits two readings — the reflex angle measured counterclockwise, and the smaller angle $360° - \\theta$ on the other side.

${angleDiagrams.types.reflex}

The diagram freezes the explorer at $250°$, deep in [Quadrant III](!#quadrant-iii). The blue arc bends back past the straight-angle line: that long sweep is what makes the angle reflex. Its non-reflex partner is $360° - 250° = 110°$.

Reflex angles matter wherever full rotational position matters — compass bearings, phase angles, rotations in graphics — and the explorer's **Reflex** field in the Related Angles column always reports the partner angle on the opposite side of the rotation.`,
      before:``,
      after:``,
      link:'',
    },
    obj19:{
      title:`Quadrant I`,
      content:`**Quadrant I** spans $0°$ to $90°$: the region where both coordinates are positive. Any angle whose terminal ray lands here has every trigonometric value positive — sine, cosine, tangent, and all three reciprocals.

${angleDiagrams.quadrants[1]}

The diagram shades Quadrant I with the explorer frozen at $50°$. In this quadrant an angle **is** its own [reference angle](!#reference-angles): no reduction is needed, which is why first-quadrant values serve as the reference data for the whole circle.

Quadrant I is where the special-triangle values live in their pure positive form: $30°$, $45°$, and $60°$ with their exact sines and cosines. Every other quadrant's values are these same magnitudes with signs adjusted.`,
      before:``,
      after:``,
      link:'',
    },
    obj20:{
      title:`Quadrant II`,
      content:`**Quadrant II** spans $90°$ to $180°$: x negative, y positive. Only sine (and its reciprocal, cosecant) stays positive here; cosine and tangent are negative.

${angleDiagrams.quadrants[2]}

The diagram shades Quadrant II with the explorer frozen at $140°$; the orange arc marks its [reference angle](!#reference-angles) $180° - 140° = 40°$. The reduction rule for this quadrant is $\\theta_{ref} = 180° - \\theta$, so for example $\\sin 140° = \\sin 40°$ and $\\cos 140° = -\\cos 40°$.

The [supplementary](!#supplementary-angles) pairs live across Quadrants I and II: $30°/150°$, $45°/135°$, $60°/120°$ — equal sines, opposite cosines. That symmetry is easiest to see by sweeping the explorer from $40°$ to $140°$ and watching the values table.`,
      before:``,
      after:``,
      link:'',
    },
    obj21:{
      title:`Quadrant III`,
      content:`**Quadrant III** spans $180°$ to $270°$: both coordinates negative. Sine and cosine are both negative, which makes their ratio positive — tangent (and cotangent) are the functions that stay positive here.

${angleDiagrams.quadrants[3]}

The diagram shades Quadrant III with the explorer frozen at $230°$; the orange arc marks the [reference angle](!#reference-angles) $230° - 180° = 50°$. The rule for this quadrant is $\\theta_{ref} = \\theta - 180°$, giving $\\tan 230° = \\tan 50°$ while $\\sin 230° = -\\sin 50°$ and $\\cos 230° = -\\cos 50°$.

Every Quadrant III angle is the $180°$-shift of a [Quadrant I](!#quadrant-i) angle — which is exactly why tangent repeats with period $180°$ rather than $360°$.`,
      before:``,
      after:``,
      link:'',
    },
    obj22:{
      title:`Quadrant IV`,
      content:`**Quadrant IV** spans $270°$ to $360°$: x positive again, y still negative. Cosine (and secant) are positive; sine and tangent are negative.

${angleDiagrams.quadrants[4]}

The diagram shades Quadrant IV with the explorer frozen at $320°$; the orange arc marks the [reference angle](!#reference-angles) $360° - 320° = 40°$. The rule is $\\theta_{ref} = 360° - \\theta$, so $\\cos 320° = \\cos 40°$ while $\\sin 320° = -\\sin 40°$.

Quadrant IV angles are the mirror images of [Quadrant I](!#quadrant-i) angles across the x-axis — the same geometry that makes cosine an even function ($\\cos(-\\theta) = \\cos\\theta$) and sine an odd one ($\\sin(-\\theta) = -\\sin\\theta$), since $-40°$ and $320°$ are [coterminal](!#coterminal-angles).`,
      before:``,
      after:``,
      link:'',
    },
    obj23:{
      title:`Special Angle: 0°`,
      content:`$0°$ is the starting position: the terminal ray coincides with the initial ray along the positive x-axis, and no rotation has occurred. It is a **quadrantal angle**, sitting on a boundary rather than inside any quadrant.

${angleDiagrams.specials[0]}

$$\\sin 0° = 0 \\qquad \\cos 0° = 1 \\qquad \\tan 0° = 0$$

On the unit circle the terminal point is $(1, 0)$ — cosine at its maximum, sine at zero. Every multiple of $360°$ is [coterminal](!#coterminal-angles) with $0°$ and shares these values, which is why the explorer treats $360°$ and $0°$ as the same position.`,
      before:``,
      after:``,
      link:'',
    },
    obj24:{
      title:`Special Angle: 30°`,
      content:`$30°$ is the smallest angle of the [30-60-90 triangle](!#special-angles-and-their-exact-values) family and one-twelfth of a full rotation. In radians it is $\\pi/6$.

${angleDiagrams.specials[30]}

$$\\sin 30° = \\frac{1}{2} \\qquad \\cos 30° = \\frac{\\sqrt{3}}{2} \\qquad \\tan 30° = \\frac{\\sqrt{3}}{3}$$

The value $\\sin 30° = \\frac{1}{2}$ comes straight from the 30-60-90 triangle, where the side opposite $30°$ is exactly half the hypotenuse. $30°$ is the [reference angle](!#reference-angles) for $150°$, $210°$, and $330°$ — their values differ from these only in sign.`,
      before:``,
      after:``,
      link:'',
    },
    obj25:{
      title:`Special Angle: 45°`,
      content:`$45°$ bisects the [right angle](!#right-angles): its terminal ray is the diagonal $y = x$, and its sine and cosine are equal. In radians it is $\\pi/4$.

${angleDiagrams.specials[45]}

$$\\sin 45° = \\frac{\\sqrt{2}}{2} \\qquad \\cos 45° = \\frac{\\sqrt{2}}{2} \\qquad \\tan 45° = 1$$

The values come from the [45-45-90 triangle](!#special-angles-and-their-exact-values) — an isosceles right triangle with legs $1$ and hypotenuse $\\sqrt{2}$. Because the legs are equal, $\\tan 45° = 1$ exactly. $45°$ is the [reference angle](!#reference-angles) for $135°$, $225°$, and $315°$.`,
      before:``,
      after:``,
      link:'',
    },
    obj26:{
      title:`Special Angle: 60°`,
      content:`$60°$ is the larger acute angle of the [30-60-90 triangle](!#special-angles-and-their-exact-values) and the interior angle of the equilateral triangle. In radians it is $\\pi/3$.

${angleDiagrams.specials[60]}

$$\\sin 60° = \\frac{\\sqrt{3}}{2} \\qquad \\cos 60° = \\frac{1}{2} \\qquad \\tan 60° = \\sqrt{3}$$

Note the swap with $30°$: sine and cosine trade values, because $30°$ and $60°$ are [complementary](!#complementary-angles) and $\\sin\\theta = \\cos(90° - \\theta)$. $60°$ is the [reference angle](!#reference-angles) for $120°$, $240°$, and $300°$.`,
      before:``,
      after:``,
      link:'',
    },
    obj27:{
      title:`Special Angle: 90°`,
      content:`$90°$ is the quarter turn: the terminal ray points straight up the positive y-axis. It is a **quadrantal angle** on the boundary between [Quadrant I](!#quadrant-i) and [Quadrant II](!#quadrant-ii), and equals $\\pi/2$ radians.

${angleDiagrams.specials[90]}

$$\\sin 90° = 1 \\qquad \\cos 90° = 0 \\qquad \\tan 90° \\text{ undefined}$$

The terminal point on the unit circle is $(0, 1)$: sine peaks at its maximum while cosine crosses zero, and the tangent ratio divides by zero — the explorer's table shows $\\infty$. Secant is likewise undefined here, while cotangent equals $0$.`,
      before:``,
      after:``,
      link:'',
    },
    obj28:{
      title:`Special Angle: 120°`,
      content:`$120°$ lies in [Quadrant II](!#quadrant-ii), $30°$ past the vertical. It is the [supplement](!#supplementary-angles) of $60°$ and equals $2\\pi/3$ radians.

${angleDiagrams.specials[120]}

$$\\sin 120° = \\frac{\\sqrt{3}}{2} \\qquad \\cos 120° = -\\frac{1}{2} \\qquad \\tan 120° = -\\sqrt{3}$$

Its [reference angle](!#reference-angles) is $180° - 120° = 60°$, so the magnitudes are exactly the $60°$ values with Quadrant II signs: sine positive, cosine and tangent negative. $120°$ is also the interior angle of a regular hexagon.`,
      before:``,
      after:``,
      link:'',
    },
    obj29:{
      title:`Special Angle: 135°`,
      content:`$135°$ is the [Quadrant II](!#quadrant-ii) diagonal — the [supplement](!#supplementary-angles) of $45°$, lying along the line $y = -x$. In radians it is $3\\pi/4$.

${angleDiagrams.specials[135]}

$$\\sin 135° = \\frac{\\sqrt{2}}{2} \\qquad \\cos 135° = -\\frac{\\sqrt{2}}{2} \\qquad \\tan 135° = -1$$

With [reference angle](!#reference-angles) $45°$, its sine and cosine share the same magnitude $\\frac{\\sqrt{2}}{2}$ and differ only in sign, forcing $\\tan 135° = -1$ exactly.`,
      before:``,
      after:``,
      link:'',
    },
    obj30:{
      title:`Special Angle: 150°`,
      content:`$150°$ sits $30°$ short of the [straight angle](!#straight-angles), in [Quadrant II](!#quadrant-ii). It is the [supplement](!#supplementary-angles) of $30°$ and equals $5\\pi/6$ radians.

${angleDiagrams.specials[150]}

$$\\sin 150° = \\frac{1}{2} \\qquad \\cos 150° = -\\frac{\\sqrt{3}}{2} \\qquad \\tan 150° = -\\frac{\\sqrt{3}}{3}$$

Its [reference angle](!#reference-angles) is $30°$, so $\\sin 150° = \\sin 30° = \\frac{1}{2}$ — the classic illustration that supplementary angles have equal sines while their cosines are opposite.`,
      before:``,
      after:``,
      link:'',
    },
    obj31:{
      title:`Special Angle: 180°`,
      content:`$180°$ is the half turn: the terminal ray points along the negative x-axis, forming a straight line with the initial ray. A **quadrantal angle**, it equals $\\pi$ radians.

${angleDiagrams.specials[180]}

$$\\sin 180° = 0 \\qquad \\cos 180° = -1 \\qquad \\tan 180° = 0$$

The terminal point is $(-1, 0)$: cosine reaches its minimum while sine returns to zero. $180°$ separates [Quadrant II](!#quadrant-ii) and [Quadrant III](!#quadrant-iii) and is the pivot of the [supplementary-angle relationship](!#supplementary-angles) $\\theta \\mapsto 180° - \\theta$.`,
      before:``,
      after:``,
      link:'',
    },
    obj32:{
      title:`Special Angle: 210°`,
      content:`$210°$ lies $30°$ past the [straight angle](!#straight-angles), in [Quadrant III](!#quadrant-iii). It equals $7\\pi/6$ radians.

${angleDiagrams.specials[210]}

$$\\sin 210° = -\\frac{1}{2} \\qquad \\cos 210° = -\\frac{\\sqrt{3}}{2} \\qquad \\tan 210° = \\frac{\\sqrt{3}}{3}$$

Its [reference angle](!#reference-angles) is $210° - 180° = 30°$. Both sine and cosine go negative in Quadrant III, so their ratio — tangent — turns positive again, matching $\\tan 30°$ exactly.`,
      before:``,
      after:``,
      link:'',
    },
    obj33:{
      title:`Special Angle: 225°`,
      content:`$225°$ is the [Quadrant III](!#quadrant-iii) diagonal, pointing opposite to $45°$ along the extension of the line $y = x$. In radians it is $5\\pi/4$.

${angleDiagrams.specials[225]}

$$\\sin 225° = -\\frac{\\sqrt{2}}{2} \\qquad \\cos 225° = -\\frac{\\sqrt{2}}{2} \\qquad \\tan 225° = 1$$

With [reference angle](!#reference-angles) $45°$ and both coordinates negative, sine and cosine are equal — so tangent equals $1$, exactly as at $45°$. Tangent's period of $180°$ is visible here: $225° = 45° + 180°$.`,
      before:``,
      after:``,
      link:'',
    },
    obj34:{
      title:`Special Angle: 240°`,
      content:`$240°$ lies $60°$ past the [straight angle](!#straight-angles) in [Quadrant III](!#quadrant-iii), diametrically opposite $60°$. It equals $4\\pi/3$ radians.

${angleDiagrams.specials[240]}

$$\\sin 240° = -\\frac{\\sqrt{3}}{2} \\qquad \\cos 240° = -\\frac{1}{2} \\qquad \\tan 240° = \\sqrt{3}$$

Its [reference angle](!#reference-angles) is $60°$; the 30-60-90 magnitudes carry over with both coordinate signs flipped, leaving the tangent at a positive $\\sqrt{3}$.`,
      before:``,
      after:``,
      link:'',
    },
    obj35:{
      title:`Special Angle: 270°`,
      content:`$270°$ is the three-quarter turn: the terminal ray points straight down the negative y-axis. A **quadrantal angle** between [Quadrant III](!#quadrant-iii) and [Quadrant IV](!#quadrant-iv), it equals $3\\pi/2$ radians.

${angleDiagrams.specials[270]}

$$\\sin 270° = -1 \\qquad \\cos 270° = 0 \\qquad \\tan 270° \\text{ undefined}$$

The terminal point is $(0, -1)$: sine bottoms out at its minimum $-1$ while cosine crosses zero again, making tangent undefined — the second and last such point in a full rotation.`,
      before:``,
      after:``,
      link:'',
    },
    obj36:{
      title:`Special Angle: 300°`,
      content:`$300°$ lies in [Quadrant IV](!#quadrant-iv), $60°$ short of a full turn. It equals $5\\pi/3$ radians and is [coterminal](!#coterminal-angles) with $-60°$.

${angleDiagrams.specials[300]}

$$\\sin 300° = -\\frac{\\sqrt{3}}{2} \\qquad \\cos 300° = \\frac{1}{2} \\qquad \\tan 300° = -\\sqrt{3}$$

Its [reference angle](!#reference-angles) is $360° - 300° = 60°$. Cosine turns positive again in Quadrant IV while sine stays negative — the mirror image of $60°$ across the x-axis.`,
      before:``,
      after:``,
      link:'',
    },
    obj37:{
      title:`Special Angle: 315°`,
      content:`$315°$ is the [Quadrant IV](!#quadrant-iv) diagonal, $45°$ short of a full turn and [coterminal](!#coterminal-angles) with $-45°$. In radians it is $7\\pi/4$.

${angleDiagrams.specials[315]}

$$\\sin 315° = -\\frac{\\sqrt{2}}{2} \\qquad \\cos 315° = \\frac{\\sqrt{2}}{2} \\qquad \\tan 315° = -1$$

With [reference angle](!#reference-angles) $45°$, sine and cosine again share the magnitude $\\frac{\\sqrt{2}}{2}$ but now with opposite signs, giving $\\tan 315° = -1$.`,
      before:``,
      after:``,
      link:'',
    },
    obj38:{
      title:`Special Angle: 330°`,
      content:`$330°$ sits $30°$ short of completing the rotation, in [Quadrant IV](!#quadrant-iv), [coterminal](!#coterminal-angles) with $-30°$. It equals $11\\pi/6$ radians.

${angleDiagrams.specials[330]}

$$\\sin 330° = -\\frac{1}{2} \\qquad \\cos 330° = \\frac{\\sqrt{3}}{2} \\qquad \\tan 330° = -\\frac{\\sqrt{3}}{3}$$

Its [reference angle](!#reference-angles) is $30°$: the familiar $\\frac{1}{2}$ and $\\frac{\\sqrt{3}}{2}$ reappear one last time before the rotation closes, with sine negative below the x-axis.`,
      before:``,
      after:``,
      link:'',
    },
    obj39:{
      title:`Special Angle: 360°`,
      content:`$360°$ completes the full rotation: the terminal ray returns to the positive x-axis, [coterminal](!#coterminal-angles) with $0°$. In radians it is $2\\pi$.

${angleDiagrams.specials[360]}

$$\\sin 360° = 0 \\qquad \\cos 360° = 1 \\qquad \\tan 360° = 0$$

Geometrically the position is identical to $0°$ — same terminal point $(1, 0)$, same values — but the full blue circle records that an entire turn has been swept. Every angle $\\theta$ shares its values with $\\theta + 360°n$: this is the **coterminal** relationship, and it is why the [trigonometric functions](!#the-six-trigonometric-functions) are periodic.`,
      before:``,
      after:``,
      link:'',
    },
    obj40:{
      title:`Complementary Angles`,
      content:`Two angles are **complementary** when their measures sum to $90°$. Each is the other's complement: the complement of $\\theta$ is $90° - \\theta$, defined for angles between $0°$ and $90°$.

${angleDiagrams.concepts.complementary}

The diagram freezes the explorer at $35°$ with the **Show Complementary Angle** overlay on: the green dashed arc measures the remaining $55°$ up to the vertical axis, and $35° + 55° = 90°$.

Complements drive the **cofunction identities**: $\\sin\\theta = \\cos(90° - \\theta)$ and $\\tan\\theta = \\cot(90° - \\theta)$ — "cosine" literally means *sine of the complement*. That is why sine and cosine swap values between $30°$ and $60°$, and coincide at $45°$, which is its own complement. Together with [supplementary](!#supplementary-angles) and [reference angles](!#reference-angles), complements make up the panel's [related angles](!#complementary-supplementary-and-reference-angles) column.`,
      before:``,
      after:``,
      link:'',
    },
    obj41:{
      title:`Supplementary Angles`,
      content:`Two angles are **supplementary** when their measures sum to $180°$ — together they form a [straight angle](!#straight-angles). The supplement of $\\theta$ is $180° - \\theta$, defined for angles between $0°$ and $180°$.

${angleDiagrams.concepts.supplementary}

The diagram freezes the explorer at $110°$ with the **Show Supplementary Angle** overlay on: the red dashed arc measures the $70°$ remaining to the negative x-axis, and $110° + 70° = 180°$.

Supplementary pairs have equal sines and opposite cosines: $\\sin(180° - \\theta) = \\sin\\theta$ and $\\cos(180° - \\theta) = -\\cos\\theta$. Linear pairs formed by intersecting lines are always supplementary, and co-interior angles between parallel lines sum to $180°$ for the same reason.`,
      before:``,
      after:``,
      link:'',
    },
    obj42:{
      title:`Reference Angles`,
      content:`The **reference angle** of $\\theta$ is the acute angle between its terminal ray and the x-axis — always between $0°$ and $90°$, whichever quadrant $\\theta$ lies in.

${angleDiagrams.concepts.reference}

The diagram freezes the explorer at $140°$: the orange arc against the negative x-axis is the reference angle $180° - 140° = 40°$. The rule depends on the quadrant:

$$\\theta_{ref} = \\begin{cases} \\theta & \\text{Quadrant I} \\\\ 180° - \\theta & \\text{Quadrant II} \\\\ \\theta - 180° & \\text{Quadrant III} \\\\ 360° - \\theta & \\text{Quadrant IV} \\end{cases}$$

Reference angles reduce every trigonometric evaluation to a first-quadrant one: take the value at $\\theta_{ref}$, then apply the [quadrant's sign](!#quadrants-and-trigonometric-signs). This single idea is what makes the sixteen [special positions](!#special-angles-and-their-exact-values) around the circle follow from just three triangles.`,
      before:``,
      after:``,
      link:'',
    },
    obj43:{
      title:`Coterminal Angles`,
      content:`**Coterminal angles** share the same terminal ray but differ by whole rotations: $\\theta$ and $\\theta + 360°n$ land in exactly the same position for every integer $n$.

${angleDiagrams.concepts.coterminal}

The diagram shows $45°$ (solid blue arc) and $-315°$ (dashed purple arc): one short counterclockwise sweep, one long clockwise sweep, the same terminal ray. The explorer's [Coterminal column](!#working-with-related-and-coterminal-angles) always lists $\\theta + 360°$ and $\\theta - 360°$, plus the general form $\\theta + 360°n$.

Because trigonometric functions see only the position on the circle, coterminal angles have **identical** values for all six functions: $\\sin 405° = \\sin 45°$ and $\\cos(-315°) = \\cos 45°$. Reducing an angle to its coterminal representative between $0°$ and $360°$ is the standard first step of every evaluation.`,
      before:``,
      after:``,
      link:'',
    },
    obj44:{
      title:`The Six Trigonometric Functions`,
      content:`On the unit circle, the terminal point of angle $\\theta$ has coordinates $(\\cos\\theta, \\sin\\theta)$ — cosine **is** the x-coordinate and sine **is** the y-coordinate. Tangent is their ratio $\\frac{\\sin\\theta}{\\cos\\theta}$, the slope of the terminal ray.

${angleDiagrams.concepts.trigonometric}

The diagram freezes the explorer at $50°$: the green horizontal segment is $\\cos 50°$, the red dashed vertical segment is $\\sin 50°$, and the marked point is where the terminal ray crosses the unit circle.

The remaining three functions are reciprocals: $\\csc\\theta = \\frac{1}{\\sin\\theta}$, $\\sec\\theta = \\frac{1}{\\cos\\theta}$, $\\cot\\theta = \\frac{1}{\\tan\\theta}$. Each is undefined wherever its partner is zero — that is why the [explorer's table](!#reading-the-trigonometric-values-table) shows $\\infty$ for $\\tan 90°$. Together the six functions turn every question about angles into a question about coordinates.`,
      before:``,
      after:``,
      link:'',
    },

  }


  const faqQuestions = {
    obj1: {
      question: "What types of angles does the explorer identify?",
      answer: "The tool classifies any angle as acute, right, obtuse, straight, or reflex based on its measure. It also identifies the quadrant of the terminal side and computes the reference angle, which is always between 0 and 90 degrees."
    },
    obj2: {
      question: "How do I switch between degrees and radians?",
      answer: "Use the unit dropdown next to the angle input to toggle between degrees and radians. The diagram, properties panel, and trigonometric values update instantly. Quick preset buttons enter values in the unit you have selected."
    },
    obj3: {
      question: "What is the difference between complementary and supplementary angles?",
      answer: "Complementary angles add to 90 degrees, while supplementary angles add to 180 degrees. The explorer shows each only when the current angle is small enough for the relationship to be defined and renders them as dashed arcs in distinct colors."
    },
    obj4: {
      question: "What are coterminal angles?",
      answer: "Coterminal angles share the same terminal side as the given angle but differ by full rotations of 360 degrees. The tool displays one positive and one negative coterminal value, plus the general form theta plus 360n degrees."
    },
    obj5: {
      question: "How is the reference angle calculated?",
      answer: "The reference angle is the acute angle between the terminal side and the x-axis. The explorer normalizes the input to the 0 to 360 range, identifies the quadrant, and then applies the matching reduction rule to return a value between 0 and 90 degrees."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Angle Explorer",
      "description": "Visualize any angle interactively in degrees or radians. Explore complementary, supplementary, coterminal, reference angles and quadrants with live trig values.",
      "url": "https://www.learnmathclass.com/trigonometry/visual-tools/angle-explorer",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Numeric angle input with degree or radian unit toggle",
        "Sixteen quick preset angles covering all standard unit-circle positions",
        "Live SVG diagram of the angle with optional arc and reference axes",
        "Toggleable complementary and supplementary angle overlays",
        "Automatic angle classification, quadrant detection, and reference angle calculation",
        "Related and coterminal angle outputs including positive, negative, and general form",
        "Dynamic trigonometric values table for sin, cos, tan, csc, sec, and cot"
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
          "name": "Angle Explorer",
          "item": "https://www.learnmathclass.com/trigonometry/visual-tools/angle-explorer"
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




  const explanations = {
    angleTypes: {
      acute: {
        title: "Acute Angle",
        content: "An acute angle measures between 0° and 90°. These angles are smaller than a right angle and appear 'sharp' or 'pointed'. Common examples include the angles in an equilateral triangle (60°) or the corner of a typical house roof. [Learn more about acute angles](!#acute-angles) · [All angle types](!#angle-types-and-classifications)"
      },
      right: {
        title: "Right Angle",
        content: "A right angle measures exactly 90°. This forms a perfect 'L' shape and is fundamental in geometry. Right angles are found in squares, rectangles, and are essential for perpendicular lines. The symbol ∟ often marks right angles in diagrams. [Learn more about right angles](!#right-angles) · [All angle types](!#angle-types-and-classifications)"
      },
      obtuse: {
        title: "Obtuse Angle",
        content: "An obtuse angle measures between 90° and 180°. These angles are larger than a right angle but smaller than a straight line. They appear 'wide' or 'open'. You can find obtuse angles in some triangles and many everyday objects. [Learn more about obtuse angles](!#obtuse-angles) · [All angle types](!#angle-types-and-classifications)"
      },
      straight: {
        title: "Straight Angle",
        content: "A straight angle measures exactly 180°. This forms a straight line, where the two rays point in completely opposite directions. It's essentially half a full rotation and divides a plane into two equal parts. [Learn more about straight angles](!#straight-angles) · [All angle types](!#angle-types-and-classifications)"
      },
      reflex: {
        title: "Reflex Angle",
        content: "A reflex angle measures between 180° and 360°. These angles are larger than a straight angle and 'bend back' more than halfway around. To visualize a reflex angle, imagine rotating more than halfway but less than a complete turn. [Learn more about reflex angles](!#reflex-angles) · [All angle types](!#angle-types-and-classifications)"
      }
    },

    quadrants: {
      1: {
        title: "First Quadrant (I)",
        content: "In Quadrant I, both x and y coordinates are positive. All trigonometric functions (sin, cos, tan) are positive here. This quadrant contains angles from 0° to 90° and represents the 'northeast' section of the coordinate plane. [Learn more about Quadrant I](!#quadrant-i) · [All quadrants](!#quadrants-and-trigonometric-signs)"
      },
      2: {
        title: "Second Quadrant (II)",
        content: "In Quadrant II, x is negative and y is positive. Here, sine is positive while cosine and tangent are negative. This quadrant contains angles from 90° to 180° and represents the 'northwest' section. [Learn more about Quadrant II](!#quadrant-ii) · [All quadrants](!#quadrants-and-trigonometric-signs)"
      },
      3: {
        title: "Third Quadrant (III)",
        content: "In Quadrant III, both x and y coordinates are negative. Here, tangent is positive while sine and cosine are negative. This quadrant contains angles from 180° to 270° and represents the 'southwest' section. [Learn more about Quadrant III](!#quadrant-iii) · [All quadrants](!#quadrants-and-trigonometric-signs)"
      },
      4: {
        title: "Fourth Quadrant (IV)",
        content: "In Quadrant IV, x is positive and y is negative. Here, cosine is positive while sine and tangent are negative. This quadrant contains angles from 270° to 360° and represents the 'southeast' section. [Learn more about Quadrant IV](!#quadrant-iv) · [All quadrants](!#quadrants-and-trigonometric-signs)"
      }
    },

    specialAngles: {
      0: {
        title: "0° - Zero Angle",
        content: "At 0°, we're pointing along the positive x-axis. sin(0°) = 0, cos(0°) = 1, tan(0°) = 0. This represents no rotation from the initial position. [Full treatment of 0°](!#special-angle-0) · [All special angles](!#special-angles-and-their-exact-values)"
      },
      30: {
        title: "30° - Special Angle",
        content: "30° is part of the 30-60-90 triangle family. sin(30°) = 1/2, cos(30°) = √3/2, tan(30°) = √3/3. This angle appears frequently in geometric constructions and has exact trigonometric values. [Full treatment of 30°](!#special-angle-30) · [All special angles](!#special-angles-and-their-exact-values)"
      },
      45: {
        title: "45° - Special Angle",
        content: "45° creates a perfect diagonal, bisecting a right angle. sin(45°) = cos(45°) = √2/2, tan(45°) = 1. This angle is fundamental in isosceles right triangles and creates equal x and y components. [Full treatment of 45°](!#special-angle-45) · [All special angles](!#special-angles-and-their-exact-values)"
      },
      60: {
        title: "60° - Special Angle",
        content: "60° completes the 30-60-90 triangle. sin(60°) = √3/2, cos(60°) = 1/2, tan(60°) = √3. This angle is one-third of 180° and appears in equilateral triangles where each angle measures 60°. [Full treatment of 60°](!#special-angle-60) · [All special angles](!#special-angles-and-their-exact-values)"
      },
      90: {
        title: "90° - Right Angle",
        content: "90° points straight up along the positive y-axis. sin(90°) = 1, cos(90°) = 0, tan(90°) = ∞ (undefined). This represents a quarter turn and is perpendicular to the x-axis. [Full treatment of 90°](!#special-angle-90) · [All special angles](!#special-angles-and-their-exact-values)"
      },
      120: {
        title: "120° - Supplementary to 60°",
        content: "120° is in the second quadrant. sin(120°) = √3/2, cos(120°) = -1/2, tan(120°) = -√3. Notice how sine keeps the same value as 60° but cosine and tangent become negative. [Full treatment of 120°](!#special-angle-120) · [All special angles](!#special-angles-and-their-exact-values)"
      },
      135: {
        title: "135° - Supplementary to 45°",
        content: "135° creates a diagonal in the second quadrant. sin(135°) = √2/2, cos(135°) = -√2/2, tan(135°) = -1. This angle maintains the same sine value as 45° but with negative cosine. [Full treatment of 135°](!#special-angle-135) · [All special angles](!#special-angles-and-their-exact-values)"
      },
      150: {
        title: "150° - Supplementary to 30°",
        content: "150° is in the second quadrant. sin(150°) = 1/2, cos(150°) = -√3/2, tan(150°) = -√3/3. The sine value matches 30° while cosine and tangent are negative. [Full treatment of 150°](!#special-angle-150) · [All special angles](!#special-angles-and-their-exact-values)"
      },
      180: {
        title: "180° - Straight Angle",
        content: "180° points along the negative x-axis. sin(180°) = 0, cos(180°) = -1, tan(180°) = 0. This represents a half turn, pointing in the exactly opposite direction from 0°. [Full treatment of 180°](!#special-angle-180) · [All special angles](!#special-angles-and-their-exact-values)"
      },
      210: {
        title: "210° - Third Quadrant",
        content: "210° is 30° past the negative x-axis. sin(210°) = -1/2, cos(210°) = -√3/2, tan(210°) = √3/3. Both sine and cosine are negative, but tangent is positive in quadrant III. [Full treatment of 210°](!#special-angle-210) · [All special angles](!#special-angles-and-their-exact-values)"
      },
      225: {
        title: "225° - Third Quadrant",
        content: "225° creates a diagonal in the third quadrant. sin(225°) = -√2/2, cos(225°) = -√2/2, tan(225°) = 1. Both components are negative but equal in magnitude. [Full treatment of 225°](!#special-angle-225) · [All special angles](!#special-angles-and-their-exact-values)"
      },
      240: {
        title: "240° - Third Quadrant",
        content: "240° is 60° past the negative x-axis. sin(240°) = -√3/2, cos(240°) = -1/2, tan(240°) = √3. This maintains the 30-60-90 triangle relationships with appropriate signs. [Full treatment of 240°](!#special-angle-240) · [All special angles](!#special-angles-and-their-exact-values)"
      },
      270: {
        title: "270° - Three Quarter Turn",
        content: "270° points straight down along the negative y-axis. sin(270°) = -1, cos(270°) = 0, tan(270°) = ∞ (undefined). This represents three-quarters of a full rotation. [Full treatment of 270°](!#special-angle-270) · [All special angles](!#special-angles-and-their-exact-values)"
      },
      300: {
        title: "300° - Fourth Quadrant",
        content: "300° is in the fourth quadrant. sin(300°) = -√3/2, cos(300°) = 1/2, tan(300°) = -√3. Cosine is positive while sine and tangent are negative. [Full treatment of 300°](!#special-angle-300) · [All special angles](!#special-angles-and-their-exact-values)"
      },
      315: {
        title: "315° - Fourth Quadrant",
        content: "315° creates a diagonal in the fourth quadrant. sin(315°) = -√2/2, cos(315°) = √2/2, tan(315°) = -1. This is 45° before completing a full rotation. [Full treatment of 315°](!#special-angle-315) · [All special angles](!#special-angles-and-their-exact-values)"
      },
      330: {
        title: "330° - Fourth Quadrant",
        content: "330° is 30° before completing a full turn. sin(330°) = -1/2, cos(330°) = √3/2, tan(330°) = -√3/3. Cosine is positive while sine and tangent are negative. [Full treatment of 330°](!#special-angle-330) · [All special angles](!#special-angles-and-their-exact-values)"
      },
      360: {
        title: "360° - Full Rotation",
        content: "360° completes a full rotation back to 0°. sin(360°) = 0, cos(360°) = 1, tan(360°) = 0. This angle is coterminal with 0° and represents one complete turn around the circle. [Full treatment of 360°](!#special-angle-360) · [All special angles](!#special-angles-and-their-exact-values)"
      }
    },

    concepts: {
      complementary: {
        title: "Complementary Angles",
        content: "Two angles are complementary if they add up to 90°. When you see the complementary angle displayed, it shows how much more you need to reach a right angle. For example, 30° and 60° are complementary because 30° + 60° = 90°. [Learn more about complementary angles](!#complementary-angles) · [Related angle pairs](!#complementary-supplementary-and-reference-angles)"
      },
      supplementary: {
        title: "Supplementary Angles",
        content: "Two angles are supplementary if they add up to 180°. The supplementary angle shown represents how much more you need to form a straight line. For example, 120° and 60° are supplementary because 120° + 60° = 180°. [Learn more about supplementary angles](!#supplementary-angles) · [Related angle pairs](!#complementary-supplementary-and-reference-angles)"
      },
      reference: {
        title: "Reference Angle",
        content: "A reference angle is the acute angle between the terminal ray and the x-axis. It's always between 0° and 90° and helps determine the sign and magnitude of trigonometric functions. Reference angles make calculations easier by relating any angle to a familiar acute angle. [Learn more about reference angles](!#reference-angles) · [Related angle pairs](!#complementary-supplementary-and-reference-angles)"
      },
      coterminal: {
        title: "Coterminal Angles",
        content: "Coterminal angles differ by full rotations (360°). They have the same terminal ray position and identical trigonometric values. Adding or subtracting 360° creates coterminal angles. For example, 45°, 405°, and -315° are all coterminal. [Learn more about coterminal angles](!#coterminal-angles) · [Panel guide](!#working-with-related-and-coterminal-angles)"
      },
      trigonometric: {
        title: "Trigonometric Functions",
        content: "The six trigonometric functions relate angles to ratios in right triangles and positions on the unit circle. Sine (sin) represents the y-coordinate, cosine (cos) the x-coordinate, and tangent (tan) the ratio y/x. The reciprocal functions are cosecant (csc), secant (sec), and cotangent (cot). [Learn more about the six trig functions](!#the-six-trigonometric-functions) · [Reading the values table](!#reading-the-trigonometric-values-table)"
      }
    },

    general: {
      title: "Angle Measurement",
      content: "Angles can be measured in degrees (°) or radians. A full circle is 360° or 2π radians. Angles are formed by two rays sharing a common endpoint called the vertex. The amount of rotation from the initial ray to the terminal ray determines the angle's measure. [Learn more about what an angle is](!#what-is-an-angle)"
    }
  };


   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
         explanations,
          seoData: {
        title: "Angle Explorer: Visualize Trig Angles | Learn Math Class",
        description: "Visualize any angle interactively in degrees or radians. Explore complementary, supplementary, coterminal, reference angles and quadrants with live trig values.",
        hubDescription: "An interactive angle visualizer that lets you set any angle in degrees or radians and instantly see its type, quadrant, reference angle, and its complementary, supplementary, and coterminal partners. Toggle reference lines, jump to preset unit-circle angles, and read live values for sin, cos, tan, csc, sec, and cot, including exact special-angle forms.",
        category: "Angles",
        keywords: keyWords.join(", "),
        url: "/trigonometry/visual-tools/angle-explorer",
        name: "Angle Explorer"
      },

       }
    }
   }

export default function AngleExplorerPage({seoData, sectionsContent, introContent, faqQuestions, schemas, explanations}) {


  const genericSections=[
    {
        id:'setting-an-angle',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'choosing-degrees-or-radians',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
        ]
    },
    {
        id:'using-quick-preset-angles',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    },
    {
        id:'display-toggle-options',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
        ]
    },
    {
        id:'reading-the-properties-panel',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
        ]
    },
    {
        id:'working-with-related-and-coterminal-angles',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'reading-the-trigonometric-values-table',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    {
        id:'what-is-an-angle',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
    {
        id:'angle-types-and-classifications',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'complementary-supplementary-and-reference-angles',
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
        id:'quadrants-and-trigonometric-signs',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
        ]
    },
    {
        id:'special-angles-and-their-exact-values',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
        ]
    },
    {
        id:'acute-angles',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
        ]
    },
    {
        id:'right-angles',
        title:sectionsContent.obj15.title,
        link:sectionsContent.obj15.link,
        content:[
          sectionsContent.obj15.content,
        ]
    },
    {
        id:'obtuse-angles',
        title:sectionsContent.obj16.title,
        link:sectionsContent.obj16.link,
        content:[
          sectionsContent.obj16.content,
        ]
    },
    {
        id:'straight-angles',
        title:sectionsContent.obj17.title,
        link:sectionsContent.obj17.link,
        content:[
          sectionsContent.obj17.content,
        ]
    },
    {
        id:'reflex-angles',
        title:sectionsContent.obj18.title,
        link:sectionsContent.obj18.link,
        content:[
          sectionsContent.obj18.content,
        ]
    },
    {
        id:'quadrant-i',
        title:sectionsContent.obj19.title,
        link:sectionsContent.obj19.link,
        content:[
          sectionsContent.obj19.content,
        ]
    },
    {
        id:'quadrant-ii',
        title:sectionsContent.obj20.title,
        link:sectionsContent.obj20.link,
        content:[
          sectionsContent.obj20.content,
        ]
    },
    {
        id:'quadrant-iii',
        title:sectionsContent.obj21.title,
        link:sectionsContent.obj21.link,
        content:[
          sectionsContent.obj21.content,
        ]
    },
    {
        id:'quadrant-iv',
        title:sectionsContent.obj22.title,
        link:sectionsContent.obj22.link,
        content:[
          sectionsContent.obj22.content,
        ]
    },
    {
        id:'special-angle-0',
        title:sectionsContent.obj23.title,
        link:sectionsContent.obj23.link,
        content:[
          sectionsContent.obj23.content,
        ]
    },
    {
        id:'special-angle-30',
        title:sectionsContent.obj24.title,
        link:sectionsContent.obj24.link,
        content:[
          sectionsContent.obj24.content,
        ]
    },
    {
        id:'special-angle-45',
        title:sectionsContent.obj25.title,
        link:sectionsContent.obj25.link,
        content:[
          sectionsContent.obj25.content,
        ]
    },
    {
        id:'special-angle-60',
        title:sectionsContent.obj26.title,
        link:sectionsContent.obj26.link,
        content:[
          sectionsContent.obj26.content,
        ]
    },
    {
        id:'special-angle-90',
        title:sectionsContent.obj27.title,
        link:sectionsContent.obj27.link,
        content:[
          sectionsContent.obj27.content,
        ]
    },
    {
        id:'special-angle-120',
        title:sectionsContent.obj28.title,
        link:sectionsContent.obj28.link,
        content:[
          sectionsContent.obj28.content,
        ]
    },
    {
        id:'special-angle-135',
        title:sectionsContent.obj29.title,
        link:sectionsContent.obj29.link,
        content:[
          sectionsContent.obj29.content,
        ]
    },
    {
        id:'special-angle-150',
        title:sectionsContent.obj30.title,
        link:sectionsContent.obj30.link,
        content:[
          sectionsContent.obj30.content,
        ]
    },
    {
        id:'special-angle-180',
        title:sectionsContent.obj31.title,
        link:sectionsContent.obj31.link,
        content:[
          sectionsContent.obj31.content,
        ]
    },
    {
        id:'special-angle-210',
        title:sectionsContent.obj32.title,
        link:sectionsContent.obj32.link,
        content:[
          sectionsContent.obj32.content,
        ]
    },
    {
        id:'special-angle-225',
        title:sectionsContent.obj33.title,
        link:sectionsContent.obj33.link,
        content:[
          sectionsContent.obj33.content,
        ]
    },
    {
        id:'special-angle-240',
        title:sectionsContent.obj34.title,
        link:sectionsContent.obj34.link,
        content:[
          sectionsContent.obj34.content,
        ]
    },
    {
        id:'special-angle-270',
        title:sectionsContent.obj35.title,
        link:sectionsContent.obj35.link,
        content:[
          sectionsContent.obj35.content,
        ]
    },
    {
        id:'special-angle-300',
        title:sectionsContent.obj36.title,
        link:sectionsContent.obj36.link,
        content:[
          sectionsContent.obj36.content,
        ]
    },
    {
        id:'special-angle-315',
        title:sectionsContent.obj37.title,
        link:sectionsContent.obj37.link,
        content:[
          sectionsContent.obj37.content,
        ]
    },
    {
        id:'special-angle-330',
        title:sectionsContent.obj38.title,
        link:sectionsContent.obj38.link,
        content:[
          sectionsContent.obj38.content,
        ]
    },
    {
        id:'special-angle-360',
        title:sectionsContent.obj39.title,
        link:sectionsContent.obj39.link,
        content:[
          sectionsContent.obj39.content,
        ]
    },
    {
        id:'complementary-angles',
        title:sectionsContent.obj40.title,
        link:sectionsContent.obj40.link,
        content:[
          sectionsContent.obj40.content,
        ]
    },
    {
        id:'supplementary-angles',
        title:sectionsContent.obj41.title,
        link:sectionsContent.obj41.link,
        content:[
          sectionsContent.obj41.content,
        ]
    },
    {
        id:'reference-angles',
        title:sectionsContent.obj42.title,
        link:sectionsContent.obj42.link,
        content:[
          sectionsContent.obj42.content,
        ]
    },
    {
        id:'coterminal-angles',
        title:sectionsContent.obj43.title,
        link:sectionsContent.obj43.link,
        content:[
          sectionsContent.obj43.content,
        ]
    },
    {
        id:'the-six-trigonometric-functions',
        title:sectionsContent.obj44.title,
        link:sectionsContent.obj44.link,
        content:[
          sectionsContent.obj44.content,
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
   <h1 className='title' style={{marginTop:'-20px',marginBottom:'10px'}}>Basic Angle Explorer</h1>
   <br/>
   <SiblingsNav
      bg="#fafaf7"
  color="#2c5d99"
  activeColor="#143a66"
  activeBg="#dde9f7"
   >
   <div style={{width:'100%',margin:'auto'}}>
   <AngleExplorer explanations={explanations}/>
   </div>
   </SiblingsNav>
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
          //  "#f2f2f2"
          textColor="#06357a"
        /> */}
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