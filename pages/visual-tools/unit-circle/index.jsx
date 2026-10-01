
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import UnitCircle from '@/app/components/trigo-calculator/UnitCircle'
import React from 'react';
import '../../pages.css'
import Head from 'next/head'
import SvgDiagram from '@/app/components/diagrams/svg-diagram/SvgDiagram'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Sections from '@/app/components/page-components/section/Sections'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import unitCircleDiagrams from '@/app/components/trigo-calculator/unitCircleDiagrams'


export async function getStaticProps() {
   const keyWords = [
       "unit circle","trig circle","radian unit circle",
       "circle of trigonometry","circle unit trigonometry"
   ]

   
  const sectionsContent={

    definition:{
      title:`What is Unit Circle?`,
      content:``,
      before:`The [unit circle](!/trigonometry/unit-circle#1) is a mathematical abstraction model invented to give us an intuitive understanding of how [trigonometric functions](!/trigonometry) behave in the coordinate system with respect to different [angles](!/visual-tools/unit-circle#angles). Rather than being just another geometric shape, it serves as a visual and computational tool that transforms abstract [trigonometric relationships](!/trigonometry) into concrete, observable patterns.

We create this circle by placing its center at the origin (0,0) of the coordinate plane and setting the radius to exactly 1. This positioning is crucial because when we take any point on the circle and drop perpendicular lines to the x and y axes, we automatically create a right triangle. The [hypotenuse](!/trigonometry/right-triangle#1) of this triangle is always the radius (which equals 1), while the legs are the x and y coordinates of the point.

`,
      after:`
      This model allows us to see trigonometric functions as coordinates on a circle, making it possible to understand their behavior across all possible angles, not just the limited range we can explore with right triangles.`,
      svg:`<svg viewBox="0 0 700 650" style="margin-left:300px; margin-bottom:-500px;" xmlns="http://www.w3.org/2000/svg">
  <!-- Unit circle -->
  <circle cx="150" cy="125" r="80" fill="none" stroke="black" stroke-width="1"/>
  
  <!-- Axes -->
  <line x1="50" y1="125" x2="250" y2="125" stroke="black" stroke-width="1"/>
  <line x1="150" y1="25" x2="150" y2="225" stroke="black" stroke-width="1"/>
  
  <!-- Origin point -->
  <circle cx="150" cy="125" r="2" fill="black"/>
  <text x="155" y="140" font-size="10" fill="black">O (0,0)</text>
  
  <!-- Angle arc at origin -->
  <path d="M 167,125 A 17,17 0 0,0 165,115" fill="none" stroke="black" stroke-width="1"/>
  <text x="175" y="118" font-size="10" fill="black">θ</text>
  
  <!-- Point on circle -->
  <circle cx="214" cy="77" r="2" fill="black"/>
  
  <!-- Radius line -->
  <line x1="150" y1="125" x2="214" y2="77" stroke="black" stroke-width="1"/>
  <text x="165" y="95" font-size="10" fill="black">r = 1</text>
  
  <!-- Dotted projections -->
  <line x1="214" y1="77" x2="214" y2="125" stroke="black" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="214" y1="77" x2="150" y2="77" stroke="black" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="150" y1="125" x2="150" y2="77" stroke="black" stroke-width="1" stroke-dasharray="3,3"/>
  
  <!-- Right triangle -->
  <polygon points="150,125 214,125 214,77" fill="none" stroke="gray" stroke-width="1" stroke-dasharray="3,3"/>
  
  <!-- Right angle indicator -->
  <polygon points="204,125 204,115 214,115" fill="none" stroke="gray" stroke-width="1"/>
  <text x="190" y="110" font-size="8" fill="gray">90°</text>
  
  <!-- Coordinate labels -->
  <text x="202" y="140" font-size="10" fill="black">x</text>
  <text x="220" y="100" font-size="10" fill="black">y</text>
  
  <!-- Axis labels -->
  <text x="240" y="130" font-size="10" fill="black">x-axis</text>
  <text x="155" y="20" font-size="10" fill="black">y-axis</text>
</svg>`,
  
  
    },
    why:{
      title:`Why Radius = 1? `,
      content:``,
      before:`The choice of radius = 1 is not arbitrary—it's a deliberate simplification that eliminates unnecessary complexity from trigonometric calculations. Here's exactly why this matters:
In any right triangle, we define trigonometric functions as ratios:\n


$\\sin \\theta = \\frac{\\text{opposite side}}{\\text{hypotenuse}}$

$\\cos \\theta = \\frac{\\text{adjacent side}}{\\text{hypotenuse}}$
`,
     
between:`When we replace the hypotenuse with 1, the trigonometric functions drastically simplify:

Starting with the basic definitions:

$\\sin \\theta = \\frac{\\text{opposite side}}{\\text{hypotenuse}}$
$\\cos \\theta = \\frac{\\text{adjacent side}}{\\text{hypotenuse}}$

When hypotenuse = 1:

$\\sin \\theta = \\frac{\\text{opposite side}}{1} = \\text{opposite side}$
$\\cos \\theta = \\frac{\\text{adjacent side}}{1} = \\text{adjacent side}$


`,
after:`This means [sine](!/trigonometry/functions#1) becomes simply the [opposite side](!/trigonometry/right-triangle#1), and [cosine](!/trigonometry/functions#2) becomes simply the [adjacent side](!/trigonometry/right-triangle#1). The unit circle allows us to visualize these values directly as coordinates, eliminating the need for division calculations.
`,
      svg:`<svg viewBox="0 0 900 700" style="margin-left:400px;margin-top:-100px;margin-bottom:-300px;" xmlns="http://www.w3.org/2000/svg">
  <!-- Triangle -->
  <polygon points="50,250 250,250 250,100" fill="none" stroke="black" stroke-width="2"/>
  
  <!-- Right angle indicator -->
  <polygon points="235,250 235,235 250,235" fill="none" stroke="black" stroke-width="1"/>
  
  <!-- Angle arc -->
  <path d="M 80,250 A 30,30 0 0,0 77,233" fill="none" stroke="blue" stroke-width="2"/>
  
  <!-- Angle label -->
  <text x="85" y="240" font-size="16" fill="blue">θ</text>
  
  <!-- Side labels -->
  <text x="145" y="270" font-size="14" fill="red" text-anchor="middle">adjacent</text>
  <text x="300" y="175" font-size="14" fill="green" text-anchor="middle">opposite</text>
  <text x="105" y="165" font-size="14" fill="blue" text-anchor="middle">hypotenuse</text>
  
  <!-- Side highlighting -->
  <line x1="50" y1="250" x2="250" y2="250" stroke="red" stroke-width="2" opacity="0.7"/>
  <line x1="250" y1="250" x2="250" y2="100" stroke="green" stroke-width="2" opacity="0.7"/>
  <line x1="50" y1="250" x2="250" y2="100" stroke="blue" stroke-width="2" opacity="0.7"/>
  
  <!-- Formulas with proper color coding -->
  <text x="50" y="40" font-size="16" fill="black">sin θ = <tspan fill="green">opposite</tspan>/<tspan fill="blue">hypotenuse</tspan></text>
  <text x="50" y="65" font-size="16" fill="black">cos θ = <tspan fill="red">adjacent</tspan>/<tspan fill="blue">hypotenuse</tspan></text>
</svg>`,

svg2:`
<svg viewBox="0 0 900 700" style="margin-left:400px;margin-top:-300px;margin-bottom:-300px;" xmlns="http://www.w3.org/2000/svg">
  <!-- Unit circle -->
  <circle cx="200" cy="150" r="80" fill="none" stroke="black" stroke-width="1"/>
  
  <!-- Axes -->
  <line x1="100" y1="150" x2="300" y2="150" stroke="black" stroke-width="1"/>
  <line x1="200" y1="70" x2="200" y2="230" stroke="black" stroke-width="1"/>
  
  <!-- Triangle -->
  <polygon points="200,150 264,150 264,104" fill="none" stroke="black" stroke-width="1"/>
  
  <!-- Right angle indicator -->
  <polygon points="254,150 254,140 264,140" fill="none" stroke="black" stroke-width="1"/>
  
  <!-- Angle arc -->
  <path d="M 220,150 A 20,20 0 0,0 215,138" fill="none" stroke="black" stroke-width="1"/>
  <text x="225" y="143" font-size="12" fill="black">θ</text>
  
  <!-- Hypotenuse (radius = 1) -->
  <line x1="200" y1="150" x2="264" y2="104" stroke="blue" stroke-width="2"/>
  <text x="220" y="120" font-size="12" fill="blue">1</text>
  
  <!-- Adjacent (cos θ) -->
  <line x1="200" y1="150" x2="264" y2="150" stroke="red" stroke-width="2"/>
  <text x="232" y="165" font-size="12" fill="red">cos θ</text>
  
  <!-- Opposite (sin θ) -->
  <line x1="264" y1="150" x2="264" y2="104" stroke="green" stroke-width="2"/>
  <text x="275" y="127" font-size="12" fill="green">sin θ</text>
  
  <!-- Formulas -->
  <text x="320" y="80" font-size="14" fill="black">When radius = 1:</text>
  <text x="320" y="105" font-size="14" fill="black">sin θ = <tspan fill="green">opposite</tspan>/<tspan fill="blue">1</tspan> = <tspan fill="green">opposite</tspan></text>
  <text x="320" y="125" font-size="14" fill="black">cos θ = <tspan fill="red">adjacent</tspan>/<tspan fill="blue">1</tspan> = <tspan fill="red">adjacent</tspan></text>
  
  <!-- Point -->
  <circle cx="264" cy="104" r="2" fill="black"/>
</svg>
`
  
    },
  
    angles:{
  
      title:`Angle Measurements in the Unit Circle`,
      content:``,
      before:`The unit circle uses two primary systems for measuring angles: [degrees](!/trigonometry/degrees-radians#1) and [radians](!/trigonometry/degrees-radians#2). Understanding both systems is essential because different applications favor different units.

**Degrees**: The most familiar system, where a complete rotation around the circle equals 360°. This system divides the circle into 360 equal parts, making it intuitive for everyday use. In the unit circle, we start measuring from the positive x-axis (0°) and move counterclockwise.

**Radians**: The mathematical standard, where a complete rotation equals 2π radians (approximately 6.28). One radian is defined as the angle created when the [arc length](!/trigonometry/degrees-radians#4) equals the radius. Since our circle has radius 1, this means one radian corresponds to an arc length of 1 unit along the circle's circumference.

The conversion between these systems is straightforward:

$\\text{radians} = \\text{degrees} \\times \\frac{\\pi}{180}$

$\\text{degrees} = \\text{radians} \\times \\frac{180}{\\pi}$

**Why radians matter**: While degrees feel more natural, radians create cleaner mathematical relationships. In calculus and advanced mathematics, formulas involving trigonometric functions work more elegantly with radians. For example, the derivative of sin(x) is simply cos(x) when x is in radians, but requires additional conversion factors when x is in degrees.

 @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use degree to radians angle converter](!/converters/degree-radians) →@

  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Check angle conversion table](!/tables/angle-conversion) →@

**Standard position**: Regardless of the unit system, angles in the unit circle are measured from the positive x-axis in a counterclockwise direction. This creates a consistent reference point for all calculations and makes it possible to extend trigonometry beyond the first quadrant.`,
      after:``,
  
    },
    quadrants:{
      title:`The Four Quadrants: A Sign Language`,
      content:`
One of the most crucial concepts for mastering trigonometry is understanding how the signs of sine and cosine change as we move around the circle. The unit circle is divided into four quadrants, each with its own "personality":

**Quadrant I (0° to 90° or 0 to π/2 radians):** Both x and y coordinates are positive, so both cosine and sine are positive. This is the "happy quadrant" where everything is positive and straightforward.

**Quadrant II (90° to 180° or π/2 to π radians):** The x-coordinate becomes negative while y stays positive. This means cosine is negative but sine remains positive. Think "sine is still climbing, but cosine has crossed over to the negative side."

**Quadrant III (180° to 270° or π to 3π/2 radians):** Both coordinates are negative, making both cosine and sine negative. This is the "opposite quadrant" from Quadrant I.

**Quadrant IV (270° to 360° or 3π/2 to 2π radians):** The x-coordinate returns to positive while y becomes negative. Cosine is positive again, but sine has gone negative.

You can observe these sign changes by using the interactive tool above. Set the angle to 45° (π/4 radians), then 135° (3π/4 radians), then 225° (5π/4 radians), and finally 315° (7π/4 radians). Watch how the values in the trigonometric table change signs as you move through each quadrant.


`,
      before:``,
      after:`
 @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use degree to radians angle converter](!/converters/degree-radians) →@

  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Check angle conversion table](!/tables/angle-conversion) →@
Each quadrant has its own section with the tool frozen inside it: [Quadrant I](!#quadrant-i), [Quadrant II](!#quadrant-ii), [Quadrant III](!#quadrant-iii) and [Quadrant IV](!#quadrant-iv). What the six columns of the table mean is explained in [The Six Functions in the Table](!#the-six-functions-in-the-table), and what happens past a full turn in [Angles Beyond 360°](!#angles-beyond-360).
`,
  
    },


    special:{
  
      title:`Special Angles: The Essential Values`,
      content:`Certain angles on the unit circle are particularly important because they produce exact, "clean" trigonometric values that appear frequently in mathematics and real-world applications. These special angles have trigonometric values that can be expressed as simple fractions involving square roots, rather than long decimal approximations.

**The Key Angles:**

**30° (π/6 radians)**: 
 sin(30°) = 1/2
 cos(30°) = √3/2

**45° (π/4 radians)**:
 sin(45°) = √2/2
 cos(45°) = √2/2

**60° (π/3 radians)**:
 sin(60°) = √3/2
 cos(60°) = 1/2

**90° (π/2 radians)**:
 sin(90°) = 1
 cos(90°) = 0

These angles, along with their equivalents in other quadrants, form the backbone of trigonometric calculations. Notice the pattern: 30° and 60° are complementary (they add to 90°), and their sine and cosine values are swapped. The 45° angle creates an isosceles right triangle, giving equal sine and cosine values.

 @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See Special Angles Table](!/tables/special-angles) →@

 @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use trigonometry calculator](!/calculators/trigonometry-calculator) →@

 **Why These Angles Matter:**

These values come from two fundamental right triangles: the 30-60-90 triangle and the 45-45-90 triangle. Because their side ratios involve simple square roots and fractions, calculations remain exact rather than requiring decimal approximations.

**Extended Special Angles:**

The unit circle extends these basic angles to all four quadrants:
- **120° (2π/3)**, **135° (3π/4)**, **150° (5π/6)** in Quadrant II
- **210° (7π/6)**, **225° (5π/4)**, **240° (4π/3)** in Quadrant III  
- **300° (5π/3)**, **315° (7π/4)**, **330° (11π/6)** in Quadrant IV

Try entering these angles in the interactive tool above. You'll notice that the absolute values of sine and cosine remain the same as their first-quadrant counterparts, but the signs change according to the quadrant rules we discussed earlier.

The trigonometry section has dedicated explorers for what this circle shows: the [Angle Explorer](!/trigonometry/visual-tools/angle-explorer) and [Angle Types Explorer](!/trigonometry/visual-tools/angle-types) for angles and quadrants, [Function Signs by Quadrant](!/trigonometry/visual-tools/functions-signs) for the sign pattern, the [Triangle Explorer](!/trigonometry/visual-tools/triangle-explorer) for the right triangles behind the special values, the [Trigonometric Functions Graphs](!/trigonometry/visual-tools/functions-graphs) for the curves, and the [Basic Identities](!/trigonometry/visual-tools/basic-identities), [Pythagorean Identities](!/trigonometry/visual-tools/pythagorean-identities), [Double Angle Identities](!/trigonometry/visual-tools/double-angle-identities), [Half Angle Identities](!/trigonometry/visual-tools/half-angle-identities), [Negative Angle Identities](!/trigonometry/visual-tools/negative-angle-identities) and [Supplementary Angle Identities](!/trigonometry/visual-tools/supplementary-angle-identities) explorers for the relations between the functions.`,
      before:``,
      after:`
      
 @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Use degree to radians angle converter](!/converters/degree-radians) →@

  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Check angle conversion table](!/tables/angle-conversion) →@
Every marked point has a dedicated section with the tool frozen on it: [0°](!#special-angle-0), [30°](!#special-angle-30), [45°](!#special-angle-45), [60°](!#special-angle-60), [90°](!#special-angle-90), [120°](!#special-angle-120), [135°](!#special-angle-135), [150°](!#special-angle-150), [180°](!#special-angle-180), [210°](!#special-angle-210), [225°](!#special-angle-225), [240°](!#special-angle-240), [270°](!#special-angle-270), [300°](!#special-angle-300), [315°](!#special-angle-315) and [330°](!#special-angle-330).
      `,
      link:'/tables/special-angles',
  
    },
    s0:{
      title:`Special Angle 0° (0)`,
      before:`Zero degrees is where every measurement on the circle begins: the terminal ray lies along the positive x-axis and the blue point sits at $(1, 0)$.`,
      after:`**All six values.** $\\sin 0° = 0$, $\\cos 0° = 1$, $\\tan 0° = 0$, $\\csc 0°$ undefined, $\\sec 0° = 1$ and $\\cot 0°$ undefined.

Being an axis angle, $0°$ sits on the boundary between two quadrants rather than inside one, so the usual quadrant sign rules do not apply; the coordinates $(1, 0)$ decide everything directly. This is also the state the reset button (↺) returns to, and where the [angle measurement](!#angles) of every other point starts.

Hover the marked point in the tool to open the box shown in the frozen picture, or type the angle in the input field; the table then reads the decimal forms of the exact values above. The full list of marked points is in [Special Angles](!#special).`,
    },
    s30:{
      title:`Special Angle 30° (π/6)`,
      before:`At $30°$ the point is $\\left(\\tfrac{\\sqrt{3}}{2}, \\tfrac{1}{2}\\right)$: the vertical sine leg is exactly half the radius, the first of the "clean" values the circle is famous for.`,
      after:`**All six values.** $\\sin 30° = \\tfrac{1}{2}$, $\\cos 30° = \\tfrac{\\sqrt{3}}{2}$, $\\tan 30° = \\tfrac{\\sqrt{3}}{3}$, $\\csc 30° = 2$, $\\sec 30° = \\tfrac{2\\sqrt{3}}{3}$ and $\\cot 30° = \\sqrt{3}$.

The point lies in [Quadrant I](!#quadrant-i) with reference angle $30°$, the acute angle between the terminal ray and the x-axis. Its mirror image across the y-axis is [150°](!#special-angle-150). The values come from the 30-60-90 triangle: hypotenuse $1$, short leg $\\tfrac{1}{2}$, long leg $\\tfrac{\\sqrt{3}}{2}$. Its complement [60°](!#special-angle-60) has the same two values swapped.

Hover the marked point in the tool to open the box shown in the frozen picture, or type the angle in the input field; the table then reads the decimal forms of the exact values above. The full list of marked points is in [Special Angles](!#special).`,
    },
    s45:{
      title:`Special Angle 45° (π/4)`,
      before:`At $45°$ the terminal ray bisects the first quadrant and the point is $\\left(\\tfrac{\\sqrt{2}}{2}, \\tfrac{\\sqrt{2}}{2}\\right)$: the sine and cosine legs are equal.`,
      after:`**All six values.** $\\sin 45° = \\tfrac{\\sqrt{2}}{2}$, $\\cos 45° = \\tfrac{\\sqrt{2}}{2}$, $\\tan 45° = 1$, $\\csc 45° = \\sqrt{2}$, $\\sec 45° = \\sqrt{2}$ and $\\cot 45° = 1$.

The point lies in [Quadrant I](!#quadrant-i) with reference angle $45°$, the acute angle between the terminal ray and the x-axis. Its mirror image across the y-axis is [135°](!#special-angle-135). The values come from the 45-45-90 triangle: two equal legs and hypotenuse $1$ force each leg to be $\\tfrac{1}{\\sqrt{2}} = \\tfrac{\\sqrt{2}}{2}$, which is why $\\tan 45° = 1$ exactly.

Hover the marked point in the tool to open the box shown in the frozen picture, or type the angle in the input field; the table then reads the decimal forms of the exact values above. The full list of marked points is in [Special Angles](!#special).`,
    },
    s60:{
      title:`Special Angle 60° (π/3)`,
      before:`At $60°$ the point is $\\left(\\tfrac{1}{2}, \\tfrac{\\sqrt{3}}{2}\\right)$, the $30°$ coordinates swapped: the cosine leg is now the half-radius.`,
      after:`**All six values.** $\\sin 60° = \\tfrac{\\sqrt{3}}{2}$, $\\cos 60° = \\tfrac{1}{2}$, $\\tan 60° = \\sqrt{3}$, $\\csc 60° = \\tfrac{2\\sqrt{3}}{3}$, $\\sec 60° = 2$ and $\\cot 60° = \\tfrac{\\sqrt{3}}{3}$.

The point lies in [Quadrant I](!#quadrant-i) with reference angle $60°$, the acute angle between the terminal ray and the x-axis. Its mirror image across the y-axis is [120°](!#special-angle-120). The same 30-60-90 triangle as at [30°](!#special-angle-30), read from the other acute vertex, which is what the complementary relation $\\cos 60° = \\sin 30°$ means geometrically.

Hover the marked point in the tool to open the box shown in the frozen picture, or type the angle in the input field; the table then reads the decimal forms of the exact values above. The full list of marked points is in [Special Angles](!#special).`,
    },
    s90:{
      title:`Special Angle 90° (π/2)`,
      before:`At $90°$ the terminal ray points straight up and the point is $(0, 1)$: the cosine leg has shrunk to nothing and the sine leg is the whole radius.`,
      after:`**All six values.** $\\sin 90° = 1$, $\\cos 90° = 0$, $\\tan 90°$ undefined, $\\csc 90° = 1$, $\\sec 90°$ undefined and $\\cot 90° = 0$.

Being an axis angle, $90°$ sits on the boundary between two quadrants rather than inside one, so the usual quadrant sign rules do not apply; the coordinates $(0, 1)$ decide everything directly. Because the cosine leg is zero, $\\tan 90°$ and $\\sec 90°$ divide by zero and the table shows Undefined for both. The circle explains the vertical asymptotes of the tangent graph without any algebra.

Hover the marked point in the tool to open the box shown in the frozen picture, or type the angle in the input field; the table then reads the decimal forms of the exact values above. The full list of marked points is in [Special Angles](!#special).`,
    },
    s120:{
      title:`Special Angle 120° (2π/3)`,
      before:`At $120°$ the point is $\\left(-\\tfrac{1}{2}, \\tfrac{\\sqrt{3}}{2}\\right)$: the first special angle past the y-axis, so the cosine leg now runs to the left.`,
      after:`**All six values.** $\\sin 120° = \\tfrac{\\sqrt{3}}{2}$, $\\cos 120° = -\\tfrac{1}{2}$, $\\tan 120° = -\\sqrt{3}$, $\\csc 120° = \\tfrac{2\\sqrt{3}}{3}$, $\\sec 120° = -2$ and $\\cot 120° = -\\tfrac{\\sqrt{3}}{3}$.

The point lies in [Quadrant II](!#quadrant-ii) with reference angle $60°$, the acute angle between the terminal ray and the x-axis. Its mirror image across the y-axis is [60°](!#special-angle-60). Its reference angle is $60°$, so every magnitude equals the [60°](!#special-angle-60) value; only the signs follow [Quadrant II](!#quadrant-ii).

Hover the marked point in the tool to open the box shown in the frozen picture, or type the angle in the input field; the table then reads the decimal forms of the exact values above. The full list of marked points is in [Special Angles](!#special).`,
    },
    s135:{
      title:`Special Angle 135° (3π/4)`,
      before:`At $135°$ the point is $\\left(-\\tfrac{\\sqrt{2}}{2}, \\tfrac{\\sqrt{2}}{2}\\right)$: the $45°$ picture mirrored across the y-axis.`,
      after:`**All six values.** $\\sin 135° = \\tfrac{\\sqrt{2}}{2}$, $\\cos 135° = -\\tfrac{\\sqrt{2}}{2}$, $\\tan 135° = -1$, $\\csc 135° = \\sqrt{2}$, $\\sec 135° = -\\sqrt{2}$ and $\\cot 135° = -1$.

The point lies in [Quadrant II](!#quadrant-ii) with reference angle $45°$, the acute angle between the terminal ray and the x-axis. Its mirror image across the y-axis is [45°](!#special-angle-45). Its reference angle is $45°$, and mirroring across the y-axis flips exactly one coordinate, which is why $\\cos 135° = -\\cos 45°$ while $\\sin 135° = \\sin 45°$.

Hover the marked point in the tool to open the box shown in the frozen picture, or type the angle in the input field; the table then reads the decimal forms of the exact values above. The full list of marked points is in [Special Angles](!#special).`,
    },
    s150:{
      title:`Special Angle 150° (5π/6)`,
      before:`At $150°$ the point is $\\left(-\\tfrac{\\sqrt{3}}{2}, \\tfrac{1}{2}\\right)$: the sine leg is again half the radius, the cosine leg negative and long.`,
      after:`**All six values.** $\\sin 150° = \\tfrac{1}{2}$, $\\cos 150° = -\\tfrac{\\sqrt{3}}{2}$, $\\tan 150° = -\\tfrac{\\sqrt{3}}{3}$, $\\csc 150° = 2$, $\\sec 150° = -\\tfrac{2\\sqrt{3}}{3}$ and $\\cot 150° = -\\sqrt{3}$.

The point lies in [Quadrant II](!#quadrant-ii) with reference angle $30°$, the acute angle between the terminal ray and the x-axis. Its mirror image across the y-axis is [30°](!#special-angle-30). Its reference angle is $30°$, so the magnitudes are the [30°](!#special-angle-30) values with the [Quadrant II](!#quadrant-ii) signs.

Hover the marked point in the tool to open the box shown in the frozen picture, or type the angle in the input field; the table then reads the decimal forms of the exact values above. The full list of marked points is in [Special Angles](!#special).`,
    },
    s180:{
      title:`Special Angle 180° (π)`,
      before:`At $180°$ the terminal ray points along the negative x-axis and the point is $(-1, 0)$: a straight angle, half a turn.`,
      after:`**All six values.** $\\sin 180° = 0$, $\\cos 180° = -1$, $\\tan 180° = 0$, $\\csc 180°$ undefined, $\\sec 180° = -1$ and $\\cot 180°$ undefined.

Being an axis angle, $180°$ sits on the boundary between two quadrants rather than inside one, so the usual quadrant sign rules do not apply; the coordinates $(−1, 0)$ decide everything directly. Like $90°$ it is an axis angle: the sine leg vanishes, so $\\csc 180°$ and $\\cot 180°$ are undefined, and it is the supplementary partner of [0°](!#special-angle-0).

Hover the marked point in the tool to open the box shown in the frozen picture, or type the angle in the input field; the table then reads the decimal forms of the exact values above. The full list of marked points is in [Special Angles](!#special).`,
    },
    s210:{
      title:`Special Angle 210° (7π/6)`,
      before:`At $210°$ the point is $\\left(-\\tfrac{\\sqrt{3}}{2}, -\\tfrac{1}{2}\\right)$: the $30°$ picture rotated half a turn, both legs now negative.`,
      after:`**All six values.** $\\sin 210° = -\\tfrac{1}{2}$, $\\cos 210° = -\\tfrac{\\sqrt{3}}{2}$, $\\tan 210° = \\tfrac{\\sqrt{3}}{3}$, $\\csc 210° = -2$, $\\sec 210° = -\\tfrac{2\\sqrt{3}}{3}$ and $\\cot 210° = \\sqrt{3}$.

The point lies in [Quadrant III](!#quadrant-iii) with reference angle $30°$, the acute angle between the terminal ray and the x-axis. Its mirror image across the y-axis is [330°](!#special-angle-330). Its reference angle is $30°$; rotating by half a turn negates both coordinates, so the tangent, a ratio of two negatives, is positive again.

Hover the marked point in the tool to open the box shown in the frozen picture, or type the angle in the input field; the table then reads the decimal forms of the exact values above. The full list of marked points is in [Special Angles](!#special).`,
    },
    s225:{
      title:`Special Angle 225° (5π/4)`,
      before:`At $225°$ the point is $\\left(-\\tfrac{\\sqrt{2}}{2}, -\\tfrac{\\sqrt{2}}{2}\\right)$: the $45°$ point through the origin, both coordinates negative and equal.`,
      after:`**All six values.** $\\sin 225° = -\\tfrac{\\sqrt{2}}{2}$, $\\cos 225° = -\\tfrac{\\sqrt{2}}{2}$, $\\tan 225° = 1$, $\\csc 225° = -\\sqrt{2}$, $\\sec 225° = -\\sqrt{2}$ and $\\cot 225° = 1$.

The point lies in [Quadrant III](!#quadrant-iii) with reference angle $45°$, the acute angle between the terminal ray and the x-axis. Its mirror image across the y-axis is [315°](!#special-angle-315). Its reference angle is $45°$. Because both legs are equal, $\\tan 225° = 1$ just as at [45°](!#special-angle-45), the signature of [Quadrant III](!#quadrant-iii).

Hover the marked point in the tool to open the box shown in the frozen picture, or type the angle in the input field; the table then reads the decimal forms of the exact values above. The full list of marked points is in [Special Angles](!#special).`,
    },
    s240:{
      title:`Special Angle 240° (4π/3)`,
      before:`At $240°$ the point is $\\left(-\\tfrac{1}{2}, -\\tfrac{\\sqrt{3}}{2}\\right)$: the $60°$ point rotated by $180°$.`,
      after:`**All six values.** $\\sin 240° = -\\tfrac{\\sqrt{3}}{2}$, $\\cos 240° = -\\tfrac{1}{2}$, $\\tan 240° = \\sqrt{3}$, $\\csc 240° = -\\tfrac{2\\sqrt{3}}{3}$, $\\sec 240° = -2$ and $\\cot 240° = \\tfrac{\\sqrt{3}}{3}$.

The point lies in [Quadrant III](!#quadrant-iii) with reference angle $60°$, the acute angle between the terminal ray and the x-axis. Its mirror image across the y-axis is [300°](!#special-angle-300). Its reference angle is $60°$, and the magnitudes are the [60°](!#special-angle-60) values with both signs negative.

Hover the marked point in the tool to open the box shown in the frozen picture, or type the angle in the input field; the table then reads the decimal forms of the exact values above. The full list of marked points is in [Special Angles](!#special).`,
    },
    s270:{
      title:`Special Angle 270° (3π/2)`,
      before:`At $270°$ the terminal ray points straight down and the point is $(0, -1)$: three quarters of a turn.`,
      after:`**All six values.** $\\sin 270° = -1$, $\\cos 270° = 0$, $\\tan 270°$ undefined, $\\csc 270° = -1$, $\\sec 270°$ undefined and $\\cot 270° = 0$.

Being an axis angle, $270°$ sits on the boundary between two quadrants rather than inside one, so the usual quadrant sign rules do not apply; the coordinates $(0, −1)$ decide everything directly. Cosine is zero here, so $\\tan 270°$ and $\\sec 270°$ are undefined, as at [90°](!#special-angle-90); the sine reaches its minimum $-1$.

Hover the marked point in the tool to open the box shown in the frozen picture, or type the angle in the input field; the table then reads the decimal forms of the exact values above. The full list of marked points is in [Special Angles](!#special).`,
    },
    s300:{
      title:`Special Angle 300° (5π/3)`,
      before:`At $300°$ the point is $\\left(\\tfrac{1}{2}, -\\tfrac{\\sqrt{3}}{2}\\right)$: the $60°$ picture reflected in the x-axis, so only the sine has changed sign.`,
      after:`**All six values.** $\\sin 300° = -\\tfrac{\\sqrt{3}}{2}$, $\\cos 300° = \\tfrac{1}{2}$, $\\tan 300° = -\\sqrt{3}$, $\\csc 300° = -\\tfrac{2\\sqrt{3}}{3}$, $\\sec 300° = 2$ and $\\cot 300° = -\\tfrac{\\sqrt{3}}{3}$.

The point lies in [Quadrant IV](!#quadrant-iv) with reference angle $60°$, the acute angle between the terminal ray and the x-axis. Its mirror image across the y-axis is [240°](!#special-angle-240). Its reference angle is $60°$; the [60°](!#special-angle-60) point reflected in the x-axis keeps the cosine and negates the sine, the [Quadrant IV](!#quadrant-iv) rule.

Hover the marked point in the tool to open the box shown in the frozen picture, or type the angle in the input field; the table then reads the decimal forms of the exact values above. The full list of marked points is in [Special Angles](!#special).`,
    },
    s315:{
      title:`Special Angle 315° (7π/4)`,
      before:`At $315°$ the point is $\\left(\\tfrac{\\sqrt{2}}{2}, -\\tfrac{\\sqrt{2}}{2}\\right)$: the $45°$ point reflected in the x-axis.`,
      after:`**All six values.** $\\sin 315° = -\\tfrac{\\sqrt{2}}{2}$, $\\cos 315° = \\tfrac{\\sqrt{2}}{2}$, $\\tan 315° = -1$, $\\csc 315° = -\\sqrt{2}$, $\\sec 315° = \\sqrt{2}$ and $\\cot 315° = -1$.

The point lies in [Quadrant IV](!#quadrant-iv) with reference angle $45°$, the acute angle between the terminal ray and the x-axis. Its mirror image across the y-axis is [225°](!#special-angle-225). Its reference angle is $45°$, so $\\tan 315° = -1$: equal legs of opposite sign. The angle is also written $-45°$, the same terminal ray reached clockwise.

Hover the marked point in the tool to open the box shown in the frozen picture, or type the angle in the input field; the table then reads the decimal forms of the exact values above. The full list of marked points is in [Special Angles](!#special).`,
    },
    s330:{
      title:`Special Angle 330° (11π/6)`,
      before:`At $330°$ the point is $\\left(\\tfrac{\\sqrt{3}}{2}, -\\tfrac{1}{2}\\right)$: the last marked point before the circle closes back on $0°$.`,
      after:`**All six values.** $\\sin 330° = -\\tfrac{1}{2}$, $\\cos 330° = \\tfrac{\\sqrt{3}}{2}$, $\\tan 330° = -\\tfrac{\\sqrt{3}}{3}$, $\\csc 330° = -2$, $\\sec 330° = \\tfrac{2\\sqrt{3}}{3}$ and $\\cot 330° = -\\sqrt{3}$.

The point lies in [Quadrant IV](!#quadrant-iv) with reference angle $30°$, the acute angle between the terminal ray and the x-axis. Its mirror image across the y-axis is [210°](!#special-angle-210). Its reference angle is $30°$; the [30°](!#special-angle-30) values with a negative sine. Written as $-30°$ it shows the even-odd rules: $\\cos(-30°) = \\cos 30°$, $\\sin(-30°) = -\\sin 30°$.

Hover the marked point in the tool to open the box shown in the frozen picture, or type the angle in the input field; the table then reads the decimal forms of the exact values above. The full list of marked points is in [Special Angles](!#special).`,
    },
    q1:{
      title:`Quadrant I: 0° to 90°`,
      before:`Between $0°$ and $90°$ the terminal ray stays in the upper-right quarter of the plane. Both coordinates of the blue point are positive, so every one of the six functions is positive: the only quadrant where nothing needs a sign check.`,
      after:`**Sign pattern.** $\\sin > 0$, $\\cos > 0$, $\\tan > 0$; the reciprocals $\\csc$, $\\sec$, $\\cot$ share those signs. The frozen picture is the tool at $50°$: a short red cosine leg, a longer blue sine leg, both pointing into the positive directions.

**Reference angle.** In this quadrant an angle is its own reference angle, which is why the [special angles](!#special) [30°](!#special-angle-30), [45°](!#special-angle-45) and [60°](!#special-angle-60) live here and every other special value is a reflected copy of one of them.

As the angle grows from $0°$ to $90°$ the sine leg lengthens from $0$ to $1$ while the cosine leg shrinks from $1$ to $0$; drag the point slowly across the quadrant and watch the two table entries trade places.`,
    },
    q2:{
      title:`Quadrant II: 90° to 180°`,
      before:`Between $90°$ and $180°$ the point is in the upper-left quarter: $x$ negative, $y$ positive. Sine (and its reciprocal cosecant) stays positive; cosine, tangent, secant and cotangent turn negative.`,
      after:`**Sign pattern.** $\\sin > 0$, $\\cos < 0$, $\\tan < 0$, and the reciprocals follow: $\\csc > 0$, $\\sec < 0$, $\\cot < 0$. The mnemonic "Students" for this quadrant means only sine survives.

**Reference angle.** For $\\theta$ in this quadrant the reference angle is $180° - \\theta$; the picture shows $140°$, whose reference angle is $40°$. The special points here are [120°](!#special-angle-120), [135°](!#special-angle-135) and [150°](!#special-angle-150), mirrors of $60°$, $45°$ and $30°$.

Notice that the red cosine leg now runs to the left of the origin: its length is unchanged from the mirrored first-quadrant angle, but the table reports it with a minus sign.`,
    },
    q3:{
      title:`Quadrant III: 180° to 270°`,
      before:`Between $180°$ and $270°$ both coordinates are negative. Sine and cosine are both negative, but tangent and cotangent, ratios of two negatives, are positive again.`,
      after:`**Sign pattern.** $\\sin < 0$, $\\cos < 0$, $\\tan > 0$; hence $\\csc < 0$, $\\sec < 0$, $\\cot > 0$. Tangent is positive because it is the ratio of two negative legs.

**Reference angle.** Here the reference angle is $\\theta - 180°$; the frozen $230°$ has reference angle $50°$. The special points are [210°](!#special-angle-210), [225°](!#special-angle-225) and [240°](!#special-angle-240), each the first-quadrant point rotated by half a turn.

Rotating any point by $180°$ negates both coordinates, so $\\sin(\\theta + 180°) = -\\sin\\theta$ and $\\cos(\\theta + 180°) = -\\cos\\theta$; the tool shows both legs flipping when you add $180$ to the input.`,
    },
    q4:{
      title:`Quadrant IV: 270° to 360°`,
      before:`Between $270°$ and $360°$ the point is in the lower-right quarter: $x$ positive, $y$ negative. Cosine and secant are positive; sine, cosecant, tangent and cotangent are negative.`,
      after:`**Sign pattern.** $\\sin < 0$, $\\cos > 0$, $\\tan < 0$; hence $\\csc < 0$, $\\sec > 0$, $\\cot < 0$. Only cosine and secant keep their first-quadrant sign.

**Reference angle.** The reference angle is $360° - \\theta$; the picture shows $320°$, reference angle $40°$. The special points are [300°](!#special-angle-300), [315°](!#special-angle-315) and [330°](!#special-angle-330), the first-quadrant points reflected in the x-axis.

Angles in this quadrant are often written as negatives: $320°$ and $-40°$ share the terminal ray. Type $-40$ in the input to see the same point reached clockwise; this is the picture behind $\\cos(-\\theta) = \\cos\\theta$ and $\\sin(-\\theta) = -\\sin\\theta$.`,
    },
    fnGroup:{
      title:`The Six Functions in the Table`,
      content:`Below the circle the tool keeps a one-row table of all six trigonometric functions of the current angle, each with a Copy button. Every entry is read straight off the picture: two legs, and four ratios built from them.

The two coordinates are the primary functions, [sine](!#sine-on-the-unit-circle) (the blue leg) and [cosine](!#cosine-on-the-unit-circle) (the red leg). Their ratio is the [tangent](!#tangent-on-the-unit-circle), the slope of the radius. The remaining three are reciprocals: [cosecant](!#cosecant-on-the-unit-circle) of sine, [secant](!#secant-on-the-unit-circle) of cosine, and [cotangent](!#cotangent-on-the-unit-circle) of tangent.

The table prints Undefined whenever a denominator is zero: tangent and secant at $90°$ and $270°$, cosecant and cotangent at $0°$ and $180°$. Each function has its own section below, frozen at an angle where its value is easy to read.`,
    },
    fn_sin:{
      title:`Sine on the Unit Circle`,
      before:`On the unit circle the sine of an angle is the y-coordinate of the blue point: the length of the vertical blue leg, taken with a sign. The first column of the table reports exactly that number.`,
      after:`**Definition.** $\\sin\\theta = y$, the signed height of the point above the x-axis. Because the radius is $1$, no division is needed: the leg is the value. At $50°$, the frozen state, $\\sin 50° \\approx 0.76604$.

**Range and sign.** The leg can never be longer than the radius, so $-1 \\le \\sin\\theta \\le 1$; it is $1$ at [90°](!#special-angle-90), $-1$ at [270°](!#special-angle-270) and $0$ at [0°](!#special-angle-0) and [180°](!#special-angle-180). It is positive in [Quadrant I](!#quadrant-i) and [Quadrant II](!#quadrant-ii), negative below the axis.

Drag the point around the circle and watch the sine column rise and fall: that column traced against the angle is the sine wave, which the [Trigonometric Functions Graphs](!/trigonometry/visual-tools/functions-graphs) tool draws.`,
    },
    fn_cos:{
      title:`Cosine on the Unit Circle`,
      before:`The cosine of an angle is the x-coordinate of the blue point: the length of the horizontal red leg along the x-axis, with a sign. The second column of the table reports it.`,
      after:`**Definition.** $\\cos\\theta = x$, the signed distance of the point to the right of the y-axis. At the frozen $50°$, $\\cos 50° \\approx 0.64279$; together with the sine the two legs satisfy $x^2 + y^2 = 1$, which is the Pythagorean identity read off the circle.

**Range and sign.** $-1 \\le \\cos\\theta \\le 1$, with $1$ at [0°](!#special-angle-0), $-1$ at [180°](!#special-angle-180) and $0$ at [90°](!#special-angle-90) and [270°](!#special-angle-270). It is positive to the right of the y-axis, in [Quadrant I](!#quadrant-i) and [Quadrant IV](!#quadrant-iv).

Cosine is the "co-sine", the sine of the complementary angle: the red leg at $\\theta$ has the same length as the blue leg at $90° - \\theta$. Compare the table at [30°](!#special-angle-30) and [60°](!#special-angle-60) to see the two columns swap.`,
    },
    fn_tan:{
      title:`Tangent on the Unit Circle`,
      before:`The tangent is the ratio of the two legs, $\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta} = \\dfrac{y}{x}$: the slope of the blue radius line. The third column of the table reports it, and shows Undefined whenever the radius is vertical.`,
      after:`**Slope reading.** At $50°$ the radius rises $0.76604$ for a run of $0.64279$, so $\\tan 50° \\approx 1.19175$, the value highlighted in the frozen table. Steeper radius, larger tangent; at [45°](!#special-angle-45) the legs are equal and the tangent is exactly $1$.

**Where it breaks.** At [90°](!#special-angle-90) and [270°](!#special-angle-270) the cosine leg is zero, the slope is infinite and the table prints Undefined: these are the vertical asymptotes of the tangent graph.

**Sign.** Tangent is positive where the legs have the same sign, [Quadrant I](!#quadrant-i) and [Quadrant III](!#quadrant-iii), and negative in [Quadrant II](!#quadrant-ii) and [Quadrant IV](!#quadrant-iv). Adding $180°$ negates both legs and leaves the ratio unchanged, so tangent repeats every half turn.`,
    },
    fn_csc:{
      title:`Cosecant on the Unit Circle`,
      before:`The cosecant is the reciprocal of the sine, $\\csc\\theta = \\dfrac{1}{\\sin\\theta} = \\dfrac{1}{y}$. The tool freezes here at $30°$, where the sine leg is exactly half the radius and the cosecant is exactly $2$.`,
      after:`**Reading it.** Because the radius is $1$, $\\csc\\theta$ is "how many sine legs fit into the radius": at $30°$ the blue leg is $\\tfrac{1}{2}$, so two of them make one radius and $\\csc 30° = 2$, the highlighted table entry.

**Range.** A reciprocal of a number between $-1$ and $1$ is never between $-1$ and $1$: $\\csc\\theta \\le -1$ or $\\csc\\theta \\ge 1$. It equals $1$ at [90°](!#special-angle-90) and $-1$ at [270°](!#special-angle-270).

**Undefined** wherever the sine is zero, at [0°](!#special-angle-0) and [180°](!#special-angle-180); near those angles the table value grows without bound. Its sign is the sign of the sine: positive above the x-axis, negative below.`,
    },
    fn_sec:{
      title:`Secant on the Unit Circle`,
      before:`The secant is the reciprocal of the cosine, $\\sec\\theta = \\dfrac{1}{\\cos\\theta} = \\dfrac{1}{x}$. The tool freezes at $60°$, where the red cosine leg is half the radius and the secant is exactly $2$.`,
      after:`**Reading it.** Two copies of the $60°$ cosine leg span the radius, so $\\sec 60° = 2$, as the highlighted table cell shows. Compare with the [cosecant at 30°](!#cosecant-on-the-unit-circle): the same picture with the roles of the legs exchanged.

**Range.** $\\sec\\theta \\le -1$ or $\\sec\\theta \\ge 1$, with $\\sec 0° = 1$ at [0°](!#special-angle-0) and $\\sec 180° = -1$ at [180°](!#special-angle-180).

**Undefined** where the cosine is zero, at [90°](!#special-angle-90) and [270°](!#special-angle-270), the same angles that break the tangent. Its sign follows the cosine: positive to the right of the y-axis, negative to the left.`,
    },
    fn_cot:{
      title:`Cotangent on the Unit Circle`,
      before:`The cotangent is the reciprocal of the tangent, $\\cot\\theta = \\dfrac{\\cos\\theta}{\\sin\\theta} = \\dfrac{x}{y}$: run over rise. The tool freezes at $45°$, where the legs are equal and the cotangent, like the tangent, is exactly $1$.`,
      after:`**Reading it.** At $45°$ the red and blue legs have the same length $\\tfrac{\\sqrt{2}}{2}$, so their ratio is $1$ either way round; the highlighted table cell reads $1.00000$. Away from $45°$ the two columns are reciprocals: at [30°](!#special-angle-30) $\\tan = \\tfrac{\\sqrt{3}}{3}$ and $\\cot = \\sqrt{3}$.

**Undefined** where the sine leg is zero, at [0°](!#special-angle-0) and [180°](!#special-angle-180), exactly where the tangent is $0$; and $\\cot = 0$ at [90°](!#special-angle-90) and [270°](!#special-angle-270), where the tangent is undefined.

**Sign.** Like the tangent it is positive in [Quadrant I](!#quadrant-i) and [Quadrant III](!#quadrant-iii), negative in [Quadrant II](!#quadrant-ii) and [Quadrant IV](!#quadrant-iv), and repeats every $180°$.`,
    },
    rot:{
      title:`Angles Beyond 360°: Full Rounds`,
      before:`The input field accepts any number of degrees. Type $390$ and the point lands where $30°$ put it, but the display reads "1 rounds + 30.0°": the tool counts the complete turns and shows what is left.`,
      after:`**Coterminal angles.** Angles that differ by a whole number of turns, $\\theta$ and $\\theta + 360°k$, share a terminal ray and therefore every trigonometric value: $\\sin 390° = \\sin 30° = \\tfrac{1}{2}$, and the table row is identical to the one at [30°](!#special-angle-30). This is the periodicity of the trigonometric functions seen directly.

**Negative input** works the same way: $-30$ is one clockwise turn short of $330°$, and the display reduces it to a value between $0°$ and $360°$. The green arc always shows the reduced angle, since a full turn would draw a closed circle over itself.

In radians the same statement reads $\\sin(\\theta + 2\\pi k) = \\sin\\theta$; see [Angle Measurements](!#angles) for the conversion and the [Angle Explorer](!/trigonometry/visual-tools/angle-explorer) for coterminal pairs drawn side by side.`,
    },
    obj5:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
    obj5:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
    obj5:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    }  
  }



   const unitCircleSVG=`<svg xmlns="http://www.w3.org/2000/svg" style="margin-bottom:-100px;" viewBox="-1650 -1650 3300 3300">
  <!-- Background -->
  <rect x="-1650" y="-1650" width="3300" height="3300" fill="#f8f9fa" />
  
  <!-- Coordinate system -->
  <line x1="-1500" y1="0" x2="1500" y2="0" stroke="#888" stroke-width="3" />
  <line x1="0" y1="-1500" x2="0" y2="1500" stroke="#888" stroke-width="3" />
  
  <!-- Degree markers (every 30 degrees) -->
  <g stroke="#aaa" stroke-width="3">
    <line x1="-1350" y1="0" x2="-1500" y2="0" />
    <line x1="1350" y1="0" x2="1500" y2="0" />
    <line x1="0" y1="-1350" x2="0" y2="-1500" />
    <line x1="0" y1="1350" x2="0" y2="1500" />
  </g>
  
  <!-- Unit circle -->
  <circle cx="0" cy="0" r="1200" fill="none" stroke="#333" stroke-width="6" />
  
  <!-- Degree lines (every 30 degrees) -->
  <g stroke="#666" stroke-width="4.5" stroke-dasharray="15,15">
    <!-- 30° -->
    <line x1="0" y1="0" x2="1039.23" y2="-600" />
    <!-- 60° -->
    <line x1="0" y1="0" x2="600" y2="-1039.23" />
    
    <!-- 120° -->
    <line x1="0" y1="0" x2="-600" y2="-1039.23" />
    <!-- 150° -->
    <line x1="0" y1="0" x2="-1039.23" y2="-600" />
    
    <!-- 210° -->
    <line x1="0" y1="0" x2="-1039.23" y2="600" />
    <!-- 240° -->
    <line x1="0" y1="0" x2="-600" y2="1039.23" />
    
    <!-- 300° -->
    <line x1="0" y1="0" x2="600" y2="1039.23" />
    <!-- 330° -->
    <line x1="0" y1="0" x2="1039.23" y2="600" />
  </g>
  
  <!-- Degree text (every 30 degrees) -->
  <g font-family="Arial, sans-serif" font-size="60" text-anchor="middle">
    <!-- 0° -->
    <text x="1290" y="90">0°</text>
    <!-- 30° -->
    <text x="1110" y="-570">30°</text>
    <!-- 60° -->
    <text x="660" y="-1020">60°</text>
    <!-- 90° -->
    <text x="0" y="-1290">90°</text>
    <!-- 120° -->
    <text x="-660" y="-1020">120°</text>
    <!-- 150° -->
    <text x="-1110" y="-570">150°</text>
    <!-- 180° -->
    <text x="-1290" y="90">180°</text>
    <!-- 210° -->
    <text x="-1110" y="630">210°</text>
    <!-- 240° -->
    <text x="-660" y="1110">240°</text>
    <!-- 270° -->
    <text x="0" y="1290">270°</text>
    <!-- 300° -->
    <text x="660" y="1110">300°</text>
    <!-- 330° -->
    <text x="1110" y="630">330°</text>
  </g>
  
  <!-- Degree markers (every 10 degrees) -->
  <g stroke="#999" stroke-width="3">
    <!-- 10° -->
    <line x1="1181.76" y1="-205.2" x2="1241.76" y2="-215.82" />
    <!-- 20° -->
    <line x1="1127.64" y1="-410.43" x2="1184.01" y2="-430.95" />
  </g>
  
  <!-- Special points on the unit circle -->
  <g fill="#e63946" stroke="none">
    <!-- 0° / 360° -->
    <circle cx="1200" cy="0" r="18" />
    <!-- 90° -->
    <circle cx="0" cy="-1200" r="18" />
    <!-- 180° -->
    <circle cx="-1200" cy="0" r="18" />
    <!-- 270° -->
    <circle cx="0" cy="1200" r="18" />
    
    <!-- 30° -->
    <circle cx="1039.23" cy="-600" r="18" />
    <!-- 60° -->
    <circle cx="600" cy="-1039.23" r="18" />
    <!-- 120° -->
    <circle cx="-600" cy="-1039.23" r="18" />
    <!-- 150° -->
    <circle cx="-1039.23" cy="-600" r="18" />
    <!-- 210° -->
    <circle cx="-1039.23" cy="600" r="18" />
    <!-- 240° -->
    <circle cx="-600" cy="1039.23" r="18" />
    <!-- 300° -->
    <circle cx="600" cy="1039.23" r="18" />
    <!-- 330° -->
    <circle cx="1039.23" cy="600" r="18" />
  </g>
  
  <!-- Title -->
  <text x="0" y="-1500" font-family="Arial, sans-serif" font-size="72" text-anchor="middle" font-weight="bold">Unit Circle - 360 Degrees</text>
  
  <!-- Center dot -->
  <circle cx="0" cy="0" r="12" fill="#000" />
  
  <!-- Labels for quadrants -->
  <g font-family="Arial, sans-serif" font-size="72" fill="#444" font-weight="bold">
    <text x="450" y="-450" text-anchor="middle">Quadrant I</text>
    <text x="-450" y="-450" text-anchor="middle">Quadrant II</text>
    <text x="-450" y="450" text-anchor="middle">Quadrant III</text>
    <text x="450" y="450" text-anchor="middle">Quadrant IV</text>
  </g>
  
  <!-- Radius example - moved to 0 degrees horizontal -->
  <line x1="0" y1="0" x2="1200" y2="0" stroke="#0066cc" stroke-width="9" />
  <text x="600" y="-60" font-family="Arial, sans-serif" font-size="48" fill="#0066cc">r = 1</text>
</svg>`


const pageIntroData = {
  title: "Base Conversion Made Visual",
  description: "Understand how numbers work in different bases (2-36) with interactive cube visualization. See binary, octal, decimal, and hexadecimal conversions in real-time. Ideal for computer science students and programmers learning number system fundamentals.",
  // icon: (
  //   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
  //     <rect x="3" y="3" width="7" height="7" rx="1"></rect>
  //     <rect x="14" y="3" width="7" height="7" rx="1"></rect>
  //     <rect x="14" y="14" width="7" height="7" rx="1"></rect>
  //     <rect x="3" y="14" width="7" height="7" rx="1"></rect>
  //   </svg>
  // )
};

  // Line 1 (2026-09-23): framed units freezing the tool in each state, built here and
  // rendered as content-array items; see unitCircleDiagrams.js.
  const stateUnits = {
    s0: demoUnitFrame({ svg: unitCircleDiagrams.specials[0], caption: '0&#176; (0), frozen with the hover box open',
      text: 'The point sits at (1, 0): the red leg is cos 0° = 1, the blue leg sin 0° = 0, and the white box repeats the exact values the tool shows on hover.' }),
    s30: demoUnitFrame({ svg: unitCircleDiagrams.specials[30], caption: '30&#176; (π/6), frozen with the hover box open',
      text: 'The point sits at (√3/2, 1/2): the red leg is cos 30° = √3/2, the blue leg sin 30° = 1/2, and the white box repeats the exact values the tool shows on hover.' }),
    s45: demoUnitFrame({ svg: unitCircleDiagrams.specials[45], caption: '45&#176; (π/4), frozen with the hover box open',
      text: 'The point sits at (√2/2, √2/2): the red leg is cos 45° = √2/2, the blue leg sin 45° = √2/2, and the white box repeats the exact values the tool shows on hover.' }),
    s60: demoUnitFrame({ svg: unitCircleDiagrams.specials[60], caption: '60&#176; (π/3), frozen with the hover box open',
      text: 'The point sits at (1/2, √3/2): the red leg is cos 60° = 1/2, the blue leg sin 60° = √3/2, and the white box repeats the exact values the tool shows on hover.' }),
    s90: demoUnitFrame({ svg: unitCircleDiagrams.specials[90], caption: '90&#176; (π/2), frozen with the hover box open',
      text: 'The point sits at (0, 1): the red leg is cos 90° = 0, the blue leg sin 90° = 1, and the white box repeats the exact values the tool shows on hover.' }),
    s120: demoUnitFrame({ svg: unitCircleDiagrams.specials[120], caption: '120&#176; (2π/3), frozen with the hover box open',
      text: 'The point sits at (−1/2, √3/2): the red leg is cos 120° = −1/2, the blue leg sin 120° = √3/2, and the white box repeats the exact values the tool shows on hover.' }),
    s135: demoUnitFrame({ svg: unitCircleDiagrams.specials[135], caption: '135&#176; (3π/4), frozen with the hover box open',
      text: 'The point sits at (−√2/2, √2/2): the red leg is cos 135° = −√2/2, the blue leg sin 135° = √2/2, and the white box repeats the exact values the tool shows on hover.' }),
    s150: demoUnitFrame({ svg: unitCircleDiagrams.specials[150], caption: '150&#176; (5π/6), frozen with the hover box open',
      text: 'The point sits at (−√3/2, 1/2): the red leg is cos 150° = −√3/2, the blue leg sin 150° = 1/2, and the white box repeats the exact values the tool shows on hover.' }),
    s180: demoUnitFrame({ svg: unitCircleDiagrams.specials[180], caption: '180&#176; (π), frozen with the hover box open',
      text: 'The point sits at (−1, 0): the red leg is cos 180° = −1, the blue leg sin 180° = 0, and the white box repeats the exact values the tool shows on hover.' }),
    s210: demoUnitFrame({ svg: unitCircleDiagrams.specials[210], caption: '210&#176; (7π/6), frozen with the hover box open',
      text: 'The point sits at (−√3/2, −1/2): the red leg is cos 210° = −√3/2, the blue leg sin 210° = −1/2, and the white box repeats the exact values the tool shows on hover.' }),
    s225: demoUnitFrame({ svg: unitCircleDiagrams.specials[225], caption: '225&#176; (5π/4), frozen with the hover box open',
      text: 'The point sits at (−√2/2, −√2/2): the red leg is cos 225° = −√2/2, the blue leg sin 225° = −√2/2, and the white box repeats the exact values the tool shows on hover.' }),
    s240: demoUnitFrame({ svg: unitCircleDiagrams.specials[240], caption: '240&#176; (4π/3), frozen with the hover box open',
      text: 'The point sits at (−1/2, −√3/2): the red leg is cos 240° = −1/2, the blue leg sin 240° = −√3/2, and the white box repeats the exact values the tool shows on hover.' }),
    s270: demoUnitFrame({ svg: unitCircleDiagrams.specials[270], caption: '270&#176; (3π/2), frozen with the hover box open',
      text: 'The point sits at (0, −1): the red leg is cos 270° = 0, the blue leg sin 270° = −1, and the white box repeats the exact values the tool shows on hover.' }),
    s300: demoUnitFrame({ svg: unitCircleDiagrams.specials[300], caption: '300&#176; (5π/3), frozen with the hover box open',
      text: 'The point sits at (1/2, −√3/2): the red leg is cos 300° = 1/2, the blue leg sin 300° = −√3/2, and the white box repeats the exact values the tool shows on hover.' }),
    s315: demoUnitFrame({ svg: unitCircleDiagrams.specials[315], caption: '315&#176; (7π/4), frozen with the hover box open',
      text: 'The point sits at (√2/2, −√2/2): the red leg is cos 315° = √2/2, the blue leg sin 315° = −√2/2, and the white box repeats the exact values the tool shows on hover.' }),
    s330: demoUnitFrame({ svg: unitCircleDiagrams.specials[330], caption: '330&#176; (11π/6), frozen with the hover box open',
      text: 'The point sits at (√3/2, −1/2): the red leg is cos 330° = √3/2, the blue leg sin 330° = −1/2, and the white box repeats the exact values the tool shows on hover.' }),
    q1: demoUnitFrame({ svg: unitCircleDiagrams.quadrants[1], caption: 'Quadrant I, frozen at 50&#176;',
      text: 'The tool parked at 50°: both legs point into the positive half-axes, and every entry in the table row below the circle is positive.' }),
    q2: demoUnitFrame({ svg: unitCircleDiagrams.quadrants[2], caption: 'Quadrant II, frozen at 140&#176;',
      text: 'The tool at 140°: the red cosine leg runs left of the origin, so cos, tan, sec and cot read negative while sin and csc stay positive.' }),
    q3: demoUnitFrame({ svg: unitCircleDiagrams.quadrants[3], caption: 'Quadrant III, frozen at 230&#176;',
      text: 'The tool at 230°: both legs point into the negative half-axes; sin and cos are negative, and tan and cot, ratios of two negatives, are positive.' }),
    q4: demoUnitFrame({ svg: unitCircleDiagrams.quadrants[4], caption: 'Quadrant IV, frozen at 320&#176;',
      text: 'The tool at 320°: the blue sine leg hangs below the axis, so sin, csc, tan and cot read negative while cos and sec are positive.' }),
    'fn-sin': demoUnitFrame({ svg: unitCircleDiagrams.functions.sin, caption: 'Sine column highlighted, frozen at 50&#176;',
      text: 'The blue vertical leg from the point down to the x-axis is sin θ; the highlighted first column of the table reads its length, 0.76604 at 50°.' }),
    'fn-cos': demoUnitFrame({ svg: unitCircleDiagrams.functions.cos, caption: 'Cosine column highlighted, frozen at 50&#176;',
      text: 'The red horizontal leg from the origin to the foot of the point is cos θ; the highlighted second column reads 0.64279 at 50°.' }),
    'fn-tan': demoUnitFrame({ svg: unitCircleDiagrams.functions.tan, caption: 'Tangent column highlighted, frozen at 50&#176;',
      text: 'The blue radius line has slope y/x; the highlighted tangent column reads that slope, 1.19175 at 50°.' }),
    'fn-csc': demoUnitFrame({ svg: unitCircleDiagrams.functions.csc, caption: 'Cosecant column highlighted, frozen at 30&#176;',
      text: 'At 30° the blue sine leg is half the radius, so its reciprocal, the highlighted csc column, reads exactly 2.00000.' }),
    'fn-sec': demoUnitFrame({ svg: unitCircleDiagrams.functions.sec, caption: 'Secant column highlighted, frozen at 60&#176;',
      text: 'At 60° the red cosine leg is half the radius, so the highlighted sec column reads its reciprocal, exactly 2.00000.' }),
    'fn-cot': demoUnitFrame({ svg: unitCircleDiagrams.functions.cot, caption: 'Cotangent column highlighted, frozen at 45&#176;',
      text: 'At 45° the two legs are equal, so x/y is 1; the highlighted cot column reads 1.00000, the same as the tangent column beside it.' }),
    rotations: demoUnitFrame({ svg: unitCircleDiagrams.rotations.beyond360, caption: 'Input 390&#176;, frozen: one full round plus 30&#176;',
      text: 'Input 390°: the point, legs and table are those of 30°, while the angle display above the table reads "1 rounds + 30.0°".' }),
  };

  // Line 1: explanations panel entries, keyed by tool state (s<deg>, q1-q4, functions, rotations).
  const explanations = {
    s0: `0° = 0: the point is (1, 0), so cos 0° = 1 and sin 0° = 0; the table shows the decimal forms. [Learn more about 0°](!#special-angle-0) · [All special angles](!#special)`,
    s30: `30° = π/6: the point is (√3/2, 1/2), so cos 30° = √3/2 and sin 30° = 1/2; the table shows the decimal forms. [Learn more about 30°](!#special-angle-30) · [All special angles](!#special)`,
    s45: `45° = π/4: the point is (√2/2, √2/2), so cos 45° = √2/2 and sin 45° = √2/2; the table shows the decimal forms. [Learn more about 45°](!#special-angle-45) · [All special angles](!#special)`,
    s60: `60° = π/3: the point is (1/2, √3/2), so cos 60° = 1/2 and sin 60° = √3/2; the table shows the decimal forms. [Learn more about 60°](!#special-angle-60) · [All special angles](!#special)`,
    s90: `90° = π/2: the point is (0, 1), so cos 90° = 0 and sin 90° = 1; the table shows the decimal forms. [Learn more about 90°](!#special-angle-90) · [All special angles](!#special)`,
    s120: `120° = 2π/3: the point is (−1/2, √3/2), so cos 120° = −1/2 and sin 120° = √3/2; the table shows the decimal forms. [Learn more about 120°](!#special-angle-120) · [All special angles](!#special)`,
    s135: `135° = 3π/4: the point is (−√2/2, √2/2), so cos 135° = −√2/2 and sin 135° = √2/2; the table shows the decimal forms. [Learn more about 135°](!#special-angle-135) · [All special angles](!#special)`,
    s150: `150° = 5π/6: the point is (−√3/2, 1/2), so cos 150° = −√3/2 and sin 150° = 1/2; the table shows the decimal forms. [Learn more about 150°](!#special-angle-150) · [All special angles](!#special)`,
    s180: `180° = π: the point is (−1, 0), so cos 180° = −1 and sin 180° = 0; the table shows the decimal forms. [Learn more about 180°](!#special-angle-180) · [All special angles](!#special)`,
    s210: `210° = 7π/6: the point is (−√3/2, −1/2), so cos 210° = −√3/2 and sin 210° = −1/2; the table shows the decimal forms. [Learn more about 210°](!#special-angle-210) · [All special angles](!#special)`,
    s225: `225° = 5π/4: the point is (−√2/2, −√2/2), so cos 225° = −√2/2 and sin 225° = −√2/2; the table shows the decimal forms. [Learn more about 225°](!#special-angle-225) · [All special angles](!#special)`,
    s240: `240° = 4π/3: the point is (−1/2, −√3/2), so cos 240° = −1/2 and sin 240° = −√3/2; the table shows the decimal forms. [Learn more about 240°](!#special-angle-240) · [All special angles](!#special)`,
    s270: `270° = 3π/2: the point is (0, −1), so cos 270° = 0 and sin 270° = −1; the table shows the decimal forms. [Learn more about 270°](!#special-angle-270) · [All special angles](!#special)`,
    s300: `300° = 5π/3: the point is (1/2, −√3/2), so cos 300° = 1/2 and sin 300° = −√3/2; the table shows the decimal forms. [Learn more about 300°](!#special-angle-300) · [All special angles](!#special)`,
    s315: `315° = 7π/4: the point is (√2/2, −√2/2), so cos 315° = √2/2 and sin 315° = −√2/2; the table shows the decimal forms. [Learn more about 315°](!#special-angle-315) · [All special angles](!#special)`,
    s330: `330° = 11π/6: the point is (√3/2, −1/2), so cos 330° = √3/2 and sin 330° = −1/2; the table shows the decimal forms. [Learn more about 330°](!#special-angle-330) · [All special angles](!#special)`,
    q1: `The point is in Quadrant I, where all six functions are positive; the reference angle is the acute angle between the blue radius and the x-axis. [Learn more about Quadrant I](!#quadrant-i) · [All four quadrants](!#quadrants)`,
    q2: `The point is in Quadrant II, where only sine and cosecant are positive; the reference angle is the acute angle between the blue radius and the x-axis. [Learn more about Quadrant II](!#quadrant-ii) · [All four quadrants](!#quadrants)`,
    q3: `The point is in Quadrant III, where only tangent and cotangent are positive; the reference angle is the acute angle between the blue radius and the x-axis. [Learn more about Quadrant III](!#quadrant-iii) · [All four quadrants](!#quadrants)`,
    q4: `The point is in Quadrant IV, where only cosine and secant are positive; the reference angle is the acute angle between the blue radius and the x-axis. [Learn more about Quadrant IV](!#quadrant-iv) · [All four quadrants](!#quadrants)`,
    functions: `The table reads all six functions of the current angle: [sine](!#sine-on-the-unit-circle) and [cosine](!#cosine-on-the-unit-circle) are the two legs, [tangent](!#tangent-on-the-unit-circle) their ratio, and [cosecant](!#cosecant-on-the-unit-circle), [secant](!#secant-on-the-unit-circle) and [cotangent](!#cotangent-on-the-unit-circle) the reciprocals. [About the table](!#the-six-functions-in-the-table)`,
    rotations: `The input exceeds one turn: the display counts the complete rounds and the point, legs and table belong to the remaining angle, since angles that differ by 360° share every value. [Learn more about full rounds](!#angles-beyond-360) · [Angle measurements](!#angles)`,
  };

   return {
       props: {
      relatedTools: getRelatedTools('trigonometry-unit-circle'),
           stateUnits,
           explanations,
           title: 'Unit Circle Visualizer and Calculator | Learn Math Class',
           description: 'Interactive unit circle visualization tool. Calculate and visualize sine, cosine, tangent and other trigonometric functions in real-time.',
           keywords: keyWords,
           canonicalUrl: 'https://www.learnmathclass.com/visual-tools/unit-circle',
           unitCircleSVG,
           sectionsContent,
           pageIntroData
       },
       revalidate: 3600
   }
}

export default function UnitCirclePage({ relatedTools, title, description, keywords, canonicalUrl ,
  unitCircleSVG , sectionsContent ,pageIntroData, stateUnits, explanations}) {


  const unitCircleSections=[
    {
        id:'definition',
        title: sectionsContent.definition.title,
        link:'',
        content:[
          sectionsContent.definition.before,
          sectionsContent.definition.svg,
          sectionsContent.definition.after,
        ]
    },
    {
        id:'why',
        title:sectionsContent.why.title,
        link:'',
        content:[
          sectionsContent.why.before,
          sectionsContent.why.svg,
          sectionsContent.why.between,
          sectionsContent.why.svg2,
          sectionsContent.why.after,
        ]
    },
     {
        id:'angles',
        title:sectionsContent.angles.title,
        link:'',
        content:[
          sectionsContent.angles.before
        ]
    },
      {
        id:'quadrants',
        title:sectionsContent.quadrants.title,
        link:'',
        content:[
          
          sectionsContent.quadrants.content,
          <SvgDiagram key={'quadrants'} data={{ svg: unitCircleSVG,
             explanation: "This unit circle shows all four quadrants with degree markings every 30°. Notice how the signs of sine and cosine change in each quadrant - this is the foundation of trigonometric calculations.", }}
          scale={0.7}
          containerStyle={{marginBottom:'-300px'}} />,
          sectionsContent.quadrants.after,
        
        ]
    },
     {
        id:'special',
        title:sectionsContent.special.title,
        link:sectionsContent.special.link,
        content:[
          sectionsContent.special.content,
          sectionsContent.special.after,
        ]
    },
     {
        id:'special-angle-0',
        title:sectionsContent.s0.title,
        link:'',
        content:[
          sectionsContent.s0.before,
          <div key={'u-s0'} dangerouslySetInnerHTML={{ __html: stateUnits['s0'] }} />,
          sectionsContent.s0.after,
        ]
    },
     {
        id:'special-angle-30',
        title:sectionsContent.s30.title,
        link:'',
        content:[
          sectionsContent.s30.before,
          <div key={'u-s30'} dangerouslySetInnerHTML={{ __html: stateUnits['s30'] }} />,
          sectionsContent.s30.after,
        ]
    },
     {
        id:'special-angle-45',
        title:sectionsContent.s45.title,
        link:'',
        content:[
          sectionsContent.s45.before,
          <div key={'u-s45'} dangerouslySetInnerHTML={{ __html: stateUnits['s45'] }} />,
          sectionsContent.s45.after,
        ]
    },
     {
        id:'special-angle-60',
        title:sectionsContent.s60.title,
        link:'',
        content:[
          sectionsContent.s60.before,
          <div key={'u-s60'} dangerouslySetInnerHTML={{ __html: stateUnits['s60'] }} />,
          sectionsContent.s60.after,
        ]
    },
     {
        id:'special-angle-90',
        title:sectionsContent.s90.title,
        link:'',
        content:[
          sectionsContent.s90.before,
          <div key={'u-s90'} dangerouslySetInnerHTML={{ __html: stateUnits['s90'] }} />,
          sectionsContent.s90.after,
        ]
    },
     {
        id:'special-angle-120',
        title:sectionsContent.s120.title,
        link:'',
        content:[
          sectionsContent.s120.before,
          <div key={'u-s120'} dangerouslySetInnerHTML={{ __html: stateUnits['s120'] }} />,
          sectionsContent.s120.after,
        ]
    },
     {
        id:'special-angle-135',
        title:sectionsContent.s135.title,
        link:'',
        content:[
          sectionsContent.s135.before,
          <div key={'u-s135'} dangerouslySetInnerHTML={{ __html: stateUnits['s135'] }} />,
          sectionsContent.s135.after,
        ]
    },
     {
        id:'special-angle-150',
        title:sectionsContent.s150.title,
        link:'',
        content:[
          sectionsContent.s150.before,
          <div key={'u-s150'} dangerouslySetInnerHTML={{ __html: stateUnits['s150'] }} />,
          sectionsContent.s150.after,
        ]
    },
     {
        id:'special-angle-180',
        title:sectionsContent.s180.title,
        link:'',
        content:[
          sectionsContent.s180.before,
          <div key={'u-s180'} dangerouslySetInnerHTML={{ __html: stateUnits['s180'] }} />,
          sectionsContent.s180.after,
        ]
    },
     {
        id:'special-angle-210',
        title:sectionsContent.s210.title,
        link:'',
        content:[
          sectionsContent.s210.before,
          <div key={'u-s210'} dangerouslySetInnerHTML={{ __html: stateUnits['s210'] }} />,
          sectionsContent.s210.after,
        ]
    },
     {
        id:'special-angle-225',
        title:sectionsContent.s225.title,
        link:'',
        content:[
          sectionsContent.s225.before,
          <div key={'u-s225'} dangerouslySetInnerHTML={{ __html: stateUnits['s225'] }} />,
          sectionsContent.s225.after,
        ]
    },
     {
        id:'special-angle-240',
        title:sectionsContent.s240.title,
        link:'',
        content:[
          sectionsContent.s240.before,
          <div key={'u-s240'} dangerouslySetInnerHTML={{ __html: stateUnits['s240'] }} />,
          sectionsContent.s240.after,
        ]
    },
     {
        id:'special-angle-270',
        title:sectionsContent.s270.title,
        link:'',
        content:[
          sectionsContent.s270.before,
          <div key={'u-s270'} dangerouslySetInnerHTML={{ __html: stateUnits['s270'] }} />,
          sectionsContent.s270.after,
        ]
    },
     {
        id:'special-angle-300',
        title:sectionsContent.s300.title,
        link:'',
        content:[
          sectionsContent.s300.before,
          <div key={'u-s300'} dangerouslySetInnerHTML={{ __html: stateUnits['s300'] }} />,
          sectionsContent.s300.after,
        ]
    },
     {
        id:'special-angle-315',
        title:sectionsContent.s315.title,
        link:'',
        content:[
          sectionsContent.s315.before,
          <div key={'u-s315'} dangerouslySetInnerHTML={{ __html: stateUnits['s315'] }} />,
          sectionsContent.s315.after,
        ]
    },
     {
        id:'special-angle-330',
        title:sectionsContent.s330.title,
        link:'',
        content:[
          sectionsContent.s330.before,
          <div key={'u-s330'} dangerouslySetInnerHTML={{ __html: stateUnits['s330'] }} />,
          sectionsContent.s330.after,
        ]
    },
     {
        id:'quadrant-i',
        title:sectionsContent.q1.title,
        link:'',
        content:[
          sectionsContent.q1.before,
          <div key={'u-q1'} dangerouslySetInnerHTML={{ __html: stateUnits['q1'] }} />,
          sectionsContent.q1.after,
        ]
    },
     {
        id:'quadrant-ii',
        title:sectionsContent.q2.title,
        link:'',
        content:[
          sectionsContent.q2.before,
          <div key={'u-q2'} dangerouslySetInnerHTML={{ __html: stateUnits['q2'] }} />,
          sectionsContent.q2.after,
        ]
    },
     {
        id:'quadrant-iii',
        title:sectionsContent.q3.title,
        link:'',
        content:[
          sectionsContent.q3.before,
          <div key={'u-q3'} dangerouslySetInnerHTML={{ __html: stateUnits['q3'] }} />,
          sectionsContent.q3.after,
        ]
    },
     {
        id:'quadrant-iv',
        title:sectionsContent.q4.title,
        link:'',
        content:[
          sectionsContent.q4.before,
          <div key={'u-q4'} dangerouslySetInnerHTML={{ __html: stateUnits['q4'] }} />,
          sectionsContent.q4.after,
        ]
    },
     {
        id:'the-six-functions-in-the-table',
        title:sectionsContent.fnGroup.title,
        link:'',
        content:[
          sectionsContent.fnGroup.content,
        ]
    },
     {
        id:'sine-on-the-unit-circle',
        title:sectionsContent.fn_sin.title,
        link:'',
        content:[
          sectionsContent.fn_sin.before,
          <div key={'u-fn-sin'} dangerouslySetInnerHTML={{ __html: stateUnits['fn-sin'] }} />,
          sectionsContent.fn_sin.after,
        ]
    },
     {
        id:'cosine-on-the-unit-circle',
        title:sectionsContent.fn_cos.title,
        link:'',
        content:[
          sectionsContent.fn_cos.before,
          <div key={'u-fn-cos'} dangerouslySetInnerHTML={{ __html: stateUnits['fn-cos'] }} />,
          sectionsContent.fn_cos.after,
        ]
    },
     {
        id:'tangent-on-the-unit-circle',
        title:sectionsContent.fn_tan.title,
        link:'',
        content:[
          sectionsContent.fn_tan.before,
          <div key={'u-fn-tan'} dangerouslySetInnerHTML={{ __html: stateUnits['fn-tan'] }} />,
          sectionsContent.fn_tan.after,
        ]
    },
     {
        id:'cosecant-on-the-unit-circle',
        title:sectionsContent.fn_csc.title,
        link:'',
        content:[
          sectionsContent.fn_csc.before,
          <div key={'u-fn-csc'} dangerouslySetInnerHTML={{ __html: stateUnits['fn-csc'] }} />,
          sectionsContent.fn_csc.after,
        ]
    },
     {
        id:'secant-on-the-unit-circle',
        title:sectionsContent.fn_sec.title,
        link:'',
        content:[
          sectionsContent.fn_sec.before,
          <div key={'u-fn-sec'} dangerouslySetInnerHTML={{ __html: stateUnits['fn-sec'] }} />,
          sectionsContent.fn_sec.after,
        ]
    },
     {
        id:'cotangent-on-the-unit-circle',
        title:sectionsContent.fn_cot.title,
        link:'',
        content:[
          sectionsContent.fn_cot.before,
          <div key={'u-fn-cot'} dangerouslySetInnerHTML={{ __html: stateUnits['fn-cot'] }} />,
          sectionsContent.fn_cot.after,
        ]
    },
     {
        id:'angles-beyond-360',
        title:sectionsContent.rot.title,
        link:'',
        content:[
          sectionsContent.rot.before,
          <div key={'u-rotations'} dangerouslySetInnerHTML={{ __html: stateUnits['rotations'] }} />,
          sectionsContent.rot.after,
        ]
    },
    // {
    //     id:'',
    //     title:'',
    //     link:'',
    //     content:''
    // }
]

const baseConverterIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1"></rect>
    <rect x="14" y="3" width="7" height="7" rx="1"></rect>
    <rect x="14" y="14" width="7" height="7" rx="1"></rect>
    <rect x="3" y="14" width="7" height="7" rx="1"></rect>
  </svg>
);

   return (
       <>
           <Head>
               <title>{title}</title>
               <meta name="description" content={description} />
               <meta name="keywords" content={keywords.join(', ')} />
               <link rel="canonical" href={canonicalUrl} />
               <meta property="og:title" content="Unit Circle Visualizer and Calculator" />
               <meta property="og:description" content={description} />
               <meta property="og:url" content={canonicalUrl} />
               <meta property="og:type" content="website" />
               <meta name="robots" content="index, follow" />
           </Head>
           {/* <GenericNavbar/> */}
           <br/>
           <br/>
           <br/>
           <br/>
           <OperaSidebar
               side='right'
               topOffset='65px'
               sidebarWidth='45px'
               panelWidth='200px'
               iconColor='white'
               panelBackgroundColor='#f2f2f2'
           />
           <Breadcrumb/>
           <br/>
           <br/>
           <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Unit Circle Visualizer and Calculator</h1>
        {/* <BaseConverterIntro/> */}
        {/* <div style={{marginBottom:'-60px',marginTop:'0px'}}>
        <PageIntro data={pageIntroData} icon={baseConverterIcon} theme='blue'/>
        </div> */}
         <br/>
         <br/>
         <br/>
         <br/>
           <UnitCircle explanations={explanations}/>
           <br/>
           <br/>
           <SectionTableOfContents sections={unitCircleSections}/>
           <br/>
           <br/>
           <br/>
           <RelatedTools tools={relatedTools}/>
           <Sections sections={unitCircleSections}/>
           <br/>
          {/* <SvgDiagram data={{ svg: unitCircleSVG }}
          scale={0.4}/> */}
           <br/>
           <br/>
           
           <br/>
           {/* <ScrollUpButton/> */}
       </>
   )
}

