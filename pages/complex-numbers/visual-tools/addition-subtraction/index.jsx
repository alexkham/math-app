import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'

import ComplexAdditionSubtractionVisualizer from '@/app/components/calculators/complex-numbers/ComplexAdditionSubtractionVisualizer'
import SiblingsNav from '../../../../app/components/SiblingsNav'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import complexAddSubDiagrams from '../../../../app/components/calculators/complex-numbers/complexAddSubDiagrams'






export async function getStaticProps(){

  const keyWords = [
    "complex number addition",
    "complex number subtraction",
    "add complex numbers visually",
    "complex addition calculator",
    "parallelogram rule complex numbers",
    "complex subtraction visualizer",
    "vector addition complex plane",
    "complex number arithmetic",
    "add imaginary numbers",
    "subtract complex numbers",
    "triangle inequality complex",
    "complex plane vector addition",
    "tip to tail complex numbers",
    "complex number distance",
    "interactive complex arithmetic"
  ]

    const sectionsContent={

    obj1:{
      title:`Getting Started — Drag Two Points`,
      content:`Two draggable points sit on the complex plane: $z_1$ (navy) and $z_2$ (orange). Grab either point and move it anywhere within the $\\pm 5$ grid to see the addition and subtraction results update instantly.

Alternatively, type precise values into the input fields on the right panel — each point has separate real and imaginary inputs accepting values from $-5$ to $5$ in steps of $0.1$. Five preset configurations are available below the plane: $(3+i)$ & $(1+3i)$, $(2+2i)$ & $(-2+2i)$, $4$ & $3i$, a conjugate pair, and $(-1+3i)$ & $(2-i)$. Click **Random** to generate two arbitrary points. Each preset has a dedicated section below with the tool frozen on it: the [mirror pair](!#the-mirror-pair-preset), the [axis pair](!#the-axis-pair-preset), the [conjugate pair](!#conjugate-pairs-in-addition-and-subtraction), and the [mixed-signs pair](!#the-mixed-signs-preset).

The **Show** toggle lets you display both operations simultaneously, or isolate addition or subtraction for a cleaner view. Start with [Both](!#both-mode-comparing-addition-and-subtraction) to compare the two operations side by side, then switch to [Addition](!#the-parallelogram-rule-for-addition) or [Subtraction](!#subtraction-and-the-difference-vector) to focus on the geometry of each one individually.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`The Parallelogram Rule for Addition`,
      content:`Switch to **Addition** mode to see the parallelogram clearly. The green vector from the origin to the sum point $z_1 + z_2$ forms the diagonal of the parallelogram whose sides are $z_1$ and $z_2$.

Two dashed "ghost" vectors complete the parallelogram. A dashed copy of $z_2$ (orange) is translated to the tip of $z_1$, and a dashed copy of $z_1$ (navy) is translated to the tip of $z_2$. Both ghost vectors arrive at the same destination — the sum point. This is the **tip-to-tail** construction: place one vector's tail at the other's tip, and the sum runs from the origin to where you end up.

The light green shaded region fills the interior of the parallelogram, making the geometric relationship immediately visible. Try the preset $(3+i)$ & $(1+3i)$ — the parallelogram tilts toward the imaginary axis because $z_2$ has a larger imaginary component. Then try $4$ & $3i$ — one side lies along the real axis and the other along the imaginary axis, producing a rectangle.`,
      before:``,
      after:`The frozen frame computes $(3+i) + (1+3i) = 4+4i$: because the two inputs are mirror images across the 45° line, their sum lands exactly on it. The [component-wise rule](!#how-complex-addition-works) is visible in the coordinates — reals $3+1$, imaginaries $1+3$, no interaction between them.

Notice also what the picture does not show: the sum vector $4+4i$ has modulus $\\sqrt{32} \\approx 5.66$, less than $|z_1|+|z_2| = 2\\sqrt{10} \\approx 6.32$ — the [triangle inequality](!#the-triangle-inequality) at work, strict because the two vectors point in different directions.`,
      link:'',
    },

    obj3:{
      title:`Subtraction and the Difference Vector`,
      content:`Switch to **Subtraction** mode to isolate the subtraction geometry. The purple vector from the origin represents $z_1 - z_2$, while a purple dashed line connects the tips of $z_2$ and $z_1$ directly.

This dashed line has the same length and direction as the difference vector — it literally shows "the vector from $z_2$ to $z_1$." The modulus $|z_1 - z_2|$ equals the distance between the two points on the plane.

A faint dashed vector labeled $-z_2$ appears opposite to $z_2$ (rotated 180°). This illustrates the key identity: $z_1 - z_2 = z_1 + (-z_2)$. Subtraction is addition of the negation.

Try the **conjugate pair** preset: $z_1 = 3 + 2i$ and $z_2 = 3 - 2i$. The difference is $4i$ (pure imaginary) and the dashed line between the points is vertical. The sum is $6$ (pure real) and lies on the real axis — conjugate pairs always produce this split.`,
      before:``,
      after:`In the frozen frame, $(3+i) - (1+3i) = 2-2i$: the purple vector drops into the fourth quadrant, and the dashed line from $z_2$ to $z_1$ is its exact translate. The distance between the two points is $|2-2i| = 2\\sqrt{2} \\approx 2.83$.

The faint $-z_2$ ghost at $-1-3i$ completes the identity $z_1 - z_2 = z_1 + (-z_2)$: run the [parallelogram rule](!#the-parallelogram-rule-for-addition) on $z_1$ and the ghost and you land on the same purple point. Full algebra in [how complex subtraction works](!#how-complex-subtraction-works).`,
      link:'',
    },

    obj4:{
      title:`Both Mode — Comparing Addition and Subtraction`,
      content:`In **Both** mode, the addition parallelogram (green) and subtraction vector (purple) appear together. This side-by-side view reveals how the two operations relate geometrically.

The green sum vector and the purple difference vector are actually the two diagonals of the same parallelogram. The sum is the diagonal that starts at the origin and passes through the interior. The difference connects the two input points — it is the other diagonal, translated to start at the origin.

Try dragging $z_2$ to the exact opposite of $z_1$. For example, set $z_1 = 3 + 2i$ and $z_2 = -3 - 2i$. The sum collapses to zero (both vectors cancel) while the difference doubles to $6 + 4i$. The parallelogram degenerates to a line segment because the two vectors are antiparallel.

Now set both points in the same direction — for example $z_1 = 2 + i$ and $z_2 = 4 + 2i$. The sum is $6 + 3i$ (aligned), the parallelogram again degenerates to a line, and the triangle inequality reaches equality.`,
      before:``,
      after:`The frozen frame is the tool's opening state, $(3+i)$ & $(1+3i)$, with everything switched on. The two diagonals tell the whole story: the green one, $4+4i$, runs from the origin through the parallelogram's interior; the purple one, $2-2i$, joins the two input points and reappears as a vector from the origin.

This double-diagonal reading is worth internalizing before visiting the presets — the [mirror pair](!#the-mirror-pair-preset) makes the two diagonals land on the two axes, and the [conjugate pair](!#conjugate-pairs-in-addition-and-subtraction) splits them between real and imaginary in the opposite way.`,
      link:'',
    },

    obj5:{
      title:`Degenerate and Axis-Aligned Configurations`,
      content:`Several input combinations produce visually distinct special cases worth capturing.

**Pure real inputs:** click preset $4$ & $3i$, then change $z_2$ to a real number like $2$. Both vectors lie on the real axis, the parallelogram collapses to a horizontal line, and both the sum and difference are real numbers.

**Pure imaginary inputs:** set $z_1 = 0 + 3i$ and $z_2 = 0 + 2i$. Both vectors are vertical, the parallelogram collapses to a vertical line, and results are purely imaginary.

**One vector zero:** set $z_2 = 0$. The sum equals $z_1$ itself, the difference also equals $z_1$, and the parallelogram disappears because one side has zero length.

**Collinear vectors:** when $z_1$ and $z_2$ point in the same direction (same argument), the parallelogram degenerates to a line and the triangle inequality becomes an equality. Drag both points to, say, the positive real axis to see this.

**Off-screen result:** when the sum exceeds the $\\pm 5$ range, the green vector is replaced by a dashed ray pointing toward the edge with an arrow and the label "$z_1 + z_2 \\to$", indicating the result is beyond the visible area.`,
      before:``,
      after:``,
      link:'',
    },

    obj6:{
      title:`Reading the Step-by-Step Panel`,
      content:`The **Step-by-Step** section on the right breaks down each operation into three lines.

For addition, it shows: the original expression $(z_1) + (z_2)$, the component-wise grouping $(a_1 + a_2) + (b_1 + b_2)i$, and the final simplified result highlighted in green.

For subtraction, the same three-line pattern appears with minus signs: the original expression, the component-wise grouping $(a_1 - a_2) + (b_1 - b_2)i$, and the result in purple.

All values update dynamically as you drag or type. When "Both" mode is active, both operations appear stacked. Switching to "Addition" or "Subtraction" mode hides the irrelevant calculation, giving a cleaner view.

This panel makes the component-wise nature of complex addition explicit — the real and imaginary parts are handled independently, with no cross-terms or powers of $i$ involved.`,
      before:``,
      after:``,
      link:'',
    },

    obj7:{
      title:`The Triangle Inequality`,
      content:`When addition is visible, a dedicated panel displays the **triangle inequality** for the current configuration:

$$|z_1 + z_2| \\leq |z_1| + |z_2|$$

The panel substitutes the actual modulus values and verifies the inequality with a green checkmark. This states that the length of the sum vector can never exceed the sum of the individual lengths — geometrically, the diagonal of a triangle is always shorter than the sum of the other two sides.

Equality holds when $z_1$ and $z_2$ have the same argument (point in the same direction). Drag both points onto the positive real axis — for example $z_1 = 3$ and $z_2 = 2$ — and watch the left side equal the right side exactly: $|5| = |3| + |2| = 5$.

Now rotate $z_2$ perpendicular to $z_1$ and the gap widens. The farther apart the two vectors' directions, the shorter the sum vector relative to the individual lengths.`,
      before:``,
      after:``,
      link:'',
    },

    obj8:{
      title:`How Complex Addition Works`,
      content:`Adding two complex numbers is straightforward — combine real parts and imaginary parts separately:

$$(a + bi) + (c + di) = (a + c) + (b + d)i$$

There are no cross-terms because the real and imaginary components are independent. This is identical to adding two-dimensional vectors component-wise: if $z_1 = (a, b)$ and $z_2 = (c, d)$, then $z_1 + z_2 = (a + c, b + d)$.

The geometric interpretation is the parallelogram rule. Place $z_1$ and $z_2$ as arrows from the origin. The sum is the diagonal of the parallelogram they form. Equivalently, translate $z_2$ so its tail sits at the tip of $z_1$ — the arrow from the origin to the new tip of $z_2$ is $z_1 + z_2$.

Complex addition is commutative ($z_1 + z_2 = z_2 + z_1$) and associative. It also preserves the structure of the complex plane — the sum of two complex numbers is always another complex number.`,
      before:``,
      after:``,
      link:'',
    },

    obj9:{
      title:`How Complex Subtraction Works`,
      content:`Subtracting complex numbers also works component-wise:

$$(a + bi) - (c + di) = (a - c) + (b - d)i$$

The key geometric insight is that $z_1 - z_2$ equals the vector from the point $z_2$ to the point $z_1$. Its modulus $|z_1 - z_2|$ is the Euclidean distance between the two points on the complex plane.

Subtraction can always be rewritten as adding the negation: $z_1 - z_2 = z_1 + (-z_2)$, where $-z_2 = -c - di$ is $z_2$ reflected through the origin (rotated by $180°$). The visualizer shows this as the faint dashed $-z_2$ ghost vector.

Two important special cases: when $z_2$ is the **conjugate** of $z_1$ (same real part, opposite imaginary part), the difference is purely imaginary ($2bi$). When $z_1 = z_2$, the difference is zero.`,
      before:``,
      after:``,
      link:'',
    },

    obj10:{
      title:`Conjugate Pairs in Addition and Subtraction`,
      content:`Click the **Conjugate pair** preset to load $z_1 = 3 + 2i$ and $z_2 = 3 - 2i$. These are complex conjugates — they share the same real part but have opposite imaginary parts.

Adding conjugates always cancels the imaginary components: $(3 + 2i) + (3 - 2i) = 6$. The sum is a pure real number lying on the real axis. In the visualizer, the green sum point sits exactly on the horizontal axis.

Subtracting conjugates always cancels the real components: $(3 + 2i) - (3 - 2i) = 4i$. The difference is a pure imaginary number on the vertical axis. The purple vector points straight up.

The dashed line connecting $z_1$ and $z_2$ is vertical — conjugates are always symmetric about the real axis. This pair produces one of the cleanest illustrations: real-axis sum, imaginary-axis difference, and a perfectly symmetric parallelogram.`,
      before:``,
      after:`The frozen frame also demonstrates the tool's [off-screen behavior](!#degenerate-and-axis-aligned-configurations): the sum $6$ exceeds the $\\pm 5$ window, so the green vector is replaced by a dashed ray aimed along the positive real axis — the direction is exact even when the endpoint is out of view.

The general rule behind the split: $z + \\bar{z} = 2\\,\\text{Re}(z)$ and $z - \\bar{z} = 2\\,\\text{Im}(z)\\,i$. Sum and difference of a conjugate pair are the real and imaginary parts of $z$, each doubled — which is why one diagonal always lies on each axis. The [mirror pair preset](!#the-mirror-pair-preset) produces the same axis-split with the roles reversed.`,
      link:'',
    },

    obj11:{
      title:`Related Concepts and Tools`,
      content:`Explore the full suite of complex number visual tools — each one targets a different operation or concept on the complex plane.

[Complex Numbers](!/complex-numbers) — foundational theory covering the imaginary unit $i$, rectangular form $a + bi$, modulus, argument, and the structure of the complex plane. Start here if you are new to the topic.

[Complex Number Explorer](!/complex-numbers/visual-tools/complex-explorer) — a general-purpose interactive tool for plotting complex numbers, adjusting their real and imaginary parts, and observing how they behave under basic operations.

[Polar & Rectangular Converter](!/complex-numbers/visual-tools/polar-rectangular) — switch between rectangular form $a + bi$ and polar form $r e^{i\theta}$. Polar form simplifies multiplication and division; rectangular form, used in this tool, simplifies addition and subtraction.

[Multiplication Visualizer](!/complex-numbers/visual-tools/multiplication) — see how multiplying two complex numbers stretches and rotates vectors on the plane. The moduli multiply and the arguments add.

[Division Visualizer](!/complex-numbers/visual-tools/division) — visualize complex division as the inverse of multiplication: the moduli divide and the arguments subtract.

[Complex Conjugate Explorer](!/complex-numbers/visual-tools/complex-conjugate) — explore the conjugate $\\bar{z} = a - bi$ and its geometric meaning as a reflection across the real axis. Conjugates appear throughout complex arithmetic and are essential for division.

[Distance & Midpoint Tool](!/complex-numbers/visual-tools/distance-midpoint) — compute and visualize the distance $|z_1 - z_2|$ and midpoint between two complex numbers, connecting complex arithmetic to Euclidean geometry.

[De Moivre's Theorem Visualizer](!/complex-numbers/visual-tools/demoivre-visualizer) — animate the identity $(r e^{i\theta})^n = r^n e^{in\theta}$ and watch how raising a complex number to a power scales its modulus and multiplies its angle.

[Powers of i Calculator](!/complex-numbers/visual-tools/i-powers) — compute $i^n$ for any integer using the mod 4 cycle $i, -1, -i, 1$ and see where each power lands on the unit circle.

[Euler's Formula Explorer](!/complex-numbers/visual-tools/euler-formula) — visualize $e^{i\theta} = \cos\theta + i\sin\theta$ and see how the exponential function traces the unit circle, connecting trigonometry, complex numbers, and the number $e$.`,
      before:``,
      after:``,
      link:'',
    },

    obj12:{
      title:`The Mirror Pair Preset`,
      content:`The preset $(2+2i)$ & $(-2+2i)$ loads two numbers that are reflections of each other across the imaginary axis: same height, opposite real parts.`,
      before:``,
      after:`The cancellation is the reverse of the conjugate pair's: here the real parts cancel in the sum, $(2+2i) + (-2+2i) = 4i$, and the imaginary parts cancel in the difference, $(2+2i) - (-2+2i) = 4$. One diagonal lands on each axis — the same clean split as [conjugate pairs](!#conjugate-pairs-in-addition-and-subtraction), rotated a quarter turn.

There is extra geometry hiding in this preset: both inputs have the same modulus $\\sqrt{8}$, so the parallelogram is a rhombus — and the diagonals of a rhombus are always perpendicular. The frozen frame shows it directly: the vertical sum and horizontal difference cross at a right angle.

Reflection across the imaginary axis is the map $z \\mapsto -\\bar{z}$: it negates the real part and keeps the imaginary part, which is exactly what pairs each input with the other.`,
      link:'',
    },

    obj13:{
      title:`The Axis Pair Preset`,
      content:`The preset $4$ & $3i$ puts one number on each axis: $z_1$ purely real, $z_2$ purely imaginary. The [parallelogram](!#the-parallelogram-rule-for-addition) becomes a perfect rectangle.`,
      before:``,
      after:`With perpendicular sides, the sum $4 + 3i$ is the rectangle's diagonal, and its modulus is the classic $3$–$4$–$5$ triangle: $|4+3i| = \\sqrt{16+9} = 5$. The difference $4 - 3i$ is the other diagonal, and a rectangle's diagonals are equal — so $|z_1 - z_2| = 5$ as well.

This preset is the cleanest possible view of the [triangle inequality](!#the-triangle-inequality) being strict: $5 \\leq 4 + 3 = 7$, with a wide gap because the two vectors are perpendicular — as far from pointing the same way as they can be while staying in one quadrant.

It is also the natural bridge to the [degenerate configurations](!#degenerate-and-axis-aligned-configurations): nudge $z_2$ down onto the real axis and the rectangle collapses to a line.`,
      link:'',
    },

    obj14:{
      title:`The Mixed-Signs Preset`,
      content:`The preset $(-1+3i)$ & $(2-i)$ places the two inputs in opposite quadrants — second and fourth — so the vectors pull against each other.`,
      before:``,
      after:`Opposing directions make addition cancel and subtraction amplify. The sum shrinks to $1 + 2i$, with modulus $\\sqrt{5} \\approx 2.24$ — shorter than $z_1$ itself. The difference stretches to $-3 + 4i$, with modulus exactly $5$ (another $3$–$4$–$5$ triangle, mirrored into the second quadrant): longer than either input.

This is the [triangle inequality](!#the-triangle-inequality) near its other extreme — $\\sqrt{5}$ against $\\sqrt{10} + \\sqrt{5} \\approx 5.4$. Push it all the way by making the vectors exactly antiparallel, as in the [Both mode](!#both-mode-comparing-addition-and-subtraction) example, and the sum collapses to zero.

The lesson of the preset: subtraction measures separation, not size. Two modest numbers far apart in direction produce a small sum and a large difference — $|z_1 - z_2|$ is the distance between the points, whatever their moduli.`,
      link:'',
    },

  }


  const introContent = {
  id: "intro",
  title: "",
  content: ``
}

  const faqQuestions = {
    obj1: {
      question: "How do you add two complex numbers?",
      answer: "Add the real parts together and add the imaginary parts together: (a + bi) + (c + di) = (a + c) + (b + d)i. There are no cross-terms — it works exactly like two-dimensional vector addition."
    },
    obj2: {
      question: "How do you subtract complex numbers?",
      answer: "Subtract real parts and imaginary parts separately: (a + bi) − (c + di) = (a − c) + (b − d)i. Geometrically, z₁ − z₂ is the vector from z₂ to z₁, and its modulus equals the distance between the two points."
    },
    obj3: {
      question: "What is the parallelogram rule for complex addition?",
      answer: "When z₁ and z₂ are drawn as vectors from the origin, their sum z₁ + z₂ is the diagonal of the parallelogram they form. This is equivalent to placing z₂ tip-to-tail at the end of z₁ — the resulting arrow from the origin is the sum."
    },
    obj4: {
      question: "What is the triangle inequality for complex numbers?",
      answer: "The triangle inequality states |z₁ + z₂| ≤ |z₁| + |z₂|. The length of the sum vector never exceeds the sum of the individual lengths. Equality holds only when z₁ and z₂ point in exactly the same direction."
    },
    obj5: {
      question: "What happens when you add complex conjugates?",
      answer: "Adding conjugates cancels the imaginary parts: (a + bi) + (a − bi) = 2a, a pure real number. Subtracting them cancels the real parts: (a + bi) − (a − bi) = 2bi, a pure imaginary number."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Complex Addition & Subtraction Visualizer",
      "description": "Interactive visualizer for adding and subtracting complex numbers. Drag points on the complex plane, see the parallelogram rule, step-by-step solutions, and triangle inequality in real time.",
      "url": "https://www.learnmathclass.com/complex-numbers/visual-tools/addition-subtraction",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Two draggable complex number points with independent input fields",
        "Parallelogram visualization with ghost tip-to-tail vectors for addition",
        "Difference vector and distance line for subtraction",
        "Toggle between Addition, Subtraction, or Both display modes",
        "Live step-by-step component-wise calculation breakdown",
        "Triangle inequality verification with real-time modulus values",
        "Five presets including conjugate pair plus random generator"
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
          "name": "Complex Numbers",
          "item": "https://www.learnmathclass.com/complex-numbers"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/complex-numbers/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Addition & Subtraction Visualizer",
          "item": "https://www.learnmathclass.com/complex-numbers/visual-tools/addition-subtraction"
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
  // plane + attached picture-reading panel, one frame, no link (own page).
  const stateUnits = {
    add: demoUnitFrame({ svg: complexAddSubDiagrams.add, caption: 'Addition mode — (3+i) + (1+3i), frozen',
      text: 'The teal diagonal reaches the sum 4 + 4i; the two dashed ghosts — z&#x2082; shifted to the tip of z&#x2081;, and z&#x2081; shifted to the tip of z&#x2082; — both arrive at the same corner of the shaded parallelogram.' }),
    sub: demoUnitFrame({ svg: complexAddSubDiagrams.sub, caption: 'Subtraction mode — (3+i) &#8722; (1+3i), frozen',
      text: 'The purple vector lands on 2 &#8722; 2i; the dashed line from z&#x2082; to z&#x2081; carries the same length and direction, and the faint &#8722;z&#x2082; ghost points opposite the orange vector.' }),
    both: demoUnitFrame({ svg: complexAddSubDiagrams.both, caption: 'Both mode — the opening pair, frozen',
      text: 'Green and purple share one parallelogram: the sum diagonal runs from the origin through the interior, while the difference matches the other diagonal, joining the two input points.' }),
    mirror: demoUnitFrame({ svg: complexAddSubDiagrams.mirror, caption: 'Mirror pair — (2+2i) &amp; (&#8722;2+2i), frozen',
      text: 'Sum 4i straight up, difference 4 straight right: real parts cancel in the sum, imaginary parts cancel in the difference. Equal moduli make the parallelogram a rhombus with perpendicular diagonals.' }),
    axes: demoUnitFrame({ svg: complexAddSubDiagrams.axes, caption: 'Axis pair — 4 &amp; 3i, frozen',
      text: 'A perfect rectangle: one side on each axis. The sum diagonal reaches 4 + 3i, whose modulus is exactly 5 — the 3-4-5 right triangle hiding inside the parallelogram rule.' }),
    conjugatePair: demoUnitFrame({ svg: complexAddSubDiagrams.conjugatePair, caption: 'Conjugate pair — (3+2i) &amp; (3&#8722;2i), frozen',
      text: 'The sum 6 has left the ±5 window, so a dashed teal ray points along the real axis toward it; the purple difference 4i climbs the imaginary axis. One result per axis — the conjugate split.' }),
    mixed: demoUnitFrame({ svg: complexAddSubDiagrams.mixed, caption: 'Mixed signs — (&#8722;1+3i) &amp; (2&#8722;i), frozen',
      text: 'Vectors pulling in nearly opposite directions: the sum shrinks to 1 + 2i while the difference &#8722;3 + 4i grows longer than either input — cancellation working in reverse.' }),
  };

  // Per-state additions for the tool's Key Ideas panel: one entry per display
  // mode (always active) and one per preset pair (active when matched).
  const explanations = {
    both: 'The two results are the two diagonals of one parallelogram — green through the interior, purple across the input points. [Learn more about Both mode](!#both-mode-comparing-addition-and-subtraction) · [Getting started](!#getting-started-drag-two-points)',
    add: 'Tip-to-tail twice over: both dashed ghosts arrive at the same sum point. [Learn more about the parallelogram rule](!#the-parallelogram-rule-for-addition) · [How addition works](!#how-complex-addition-works)',
    sub: 'The purple vector is the line between the points, picked up and moved to the origin. [Learn more about the difference vector](!#subtraction-and-the-difference-vector) · [How subtraction works](!#how-complex-subtraction-works)',
    mirror: 'Mirror images across the imaginary axis: the sum goes purely imaginary, the difference purely real. [Learn more about the mirror pair](!#the-mirror-pair-preset) · [Getting started](!#getting-started-drag-two-points)',
    axes: 'One input per axis makes the parallelogram a rectangle — and both diagonals have modulus exactly 5. [Learn more about the axis pair](!#the-axis-pair-preset) · [Getting started](!#getting-started-drag-two-points)',
    conjugatePair: 'Conjugates split the results between the axes: real sum, imaginary difference. [Learn more about conjugate pairs](!#conjugate-pairs-in-addition-and-subtraction) · [Getting started](!#getting-started-drag-two-points)',
    mixed: 'Opposite quadrants: the sum cancels down while the difference outgrows both inputs. [Learn more about the mixed-signs pair](!#the-mixed-signs-preset) · [Getting started](!#getting-started-drag-two-points)',
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
        title: "Complex Addition & Subtraction | Learn Math Class",
        description: "Visualize complex number addition and subtraction with draggable vectors. See the parallelogram rule, step-by-step solutions, and triangle inequality in real time.",
        keywords: keyWords.join(", "),
        url: "/complex-numbers/visual-tools/addition-subtraction",
        hubDescription: "Add and subtract complex numbers geometrically. Drag two points and watch the parallelogram rule for addition and the difference vector for subtraction update instantly, with step-by-step component breakdowns and the triangle inequality verified in real time.",
        category: "Arithmetic",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="8" y1="52" x2="74" y2="52" stroke="#B5D4F4" stroke-width="0.9"/><line x1="30" y1="10" x2="30" y2="70" stroke="#B5D4F4" stroke-width="0.9"/><line x1="52" y1="40" x2="62" y2="18" stroke="#B5D4F4" stroke-width="1" stroke-dasharray="2.5,2"/><line x1="40" y1="30" x2="62" y2="18" stroke="#B5D4F4" stroke-width="1" stroke-dasharray="2.5,2"/><line x1="30" y1="52" x2="52" y2="40" stroke="#85B7EB" stroke-width="1.9"/><line x1="30" y1="52" x2="40" y2="30" stroke="#97C459" stroke-width="1.9"/><line x1="30" y1="52" x2="62" y2="18" stroke="#FAC775" stroke-width="2.2"/><circle cx="52" cy="40" r="2.6" fill="#85B7EB" stroke="#0C447C" stroke-width="1"/><circle cx="40" cy="30" r="2.6" fill="#97C459" stroke="#27500A" stroke-width="1"/><circle cx="62" cy="18" r="3.4" fill="#FAC775" stroke="#854F0B" stroke-width="1.2"/><text x="40" y="74" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">z&#8321; + z&#8322;</text></svg>`,
         name: "Complex Addition & Subtraction Visualizer"
      },
        
       }
    }
   }

export default function PageTemplate({seoData, sectionsContent, introContent, faqQuestions, schemas, explanations, stateUnits}) {

    
  const genericSections=[
    {
        id:'getting-started-drag-two-points',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'the-parallelogram-rule-for-addition',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
          <div key='u-add' dangerouslySetInnerHTML={{ __html: stateUnits.add }} />,
          sectionsContent.obj2.after,
        ]
    },
    {
        id:'subtraction-and-the-difference-vector',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
          <div key='u-sub' dangerouslySetInnerHTML={{ __html: stateUnits.sub }} />,
          sectionsContent.obj3.after,
        ]
    },
    {
        id:'both-mode-comparing-addition-and-subtraction',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <div key='u-both' dangerouslySetInnerHTML={{ __html: stateUnits.both }} />,
          sectionsContent.obj4.after,
        ]
    },
    {
        id:'the-mirror-pair-preset',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
          <div key='u-mirror' dangerouslySetInnerHTML={{ __html: stateUnits.mirror }} />,
          sectionsContent.obj12.after,
        ]
    },
    {
        id:'the-axis-pair-preset',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
          <div key='u-axes' dangerouslySetInnerHTML={{ __html: stateUnits.axes }} />,
          sectionsContent.obj13.after,
        ]
    },
    {
        id:'the-mixed-signs-preset',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
          <div key='u-mixed' dangerouslySetInnerHTML={{ __html: stateUnits.mixed }} />,
          sectionsContent.obj14.after,
        ]
    },
    {
        id:'degenerate-and-axis-aligned-configurations',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
        ]
    },
    {
        id:'reading-the-step-by-step-panel',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'the-triangle-inequality',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    {
        id:'how-complex-addition-works',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
    {
        id:'how-complex-subtraction-works',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'conjugate-pairs-in-addition-and-subtraction',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
          <div key='u-conjugatePair' dangerouslySetInnerHTML={{ __html: stateUnits.conjugatePair }} />,
          sectionsContent.obj10.after,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Complex Numbers Addition /Subtraction Visualizer</h1>
   <br/>
   <SiblingsNav maxWidth='100%'>
  <ComplexAdditionSubtractionVisualizer explanations={explanations}/>
  </SiblingsNav>
 
   <br/>
   <SectionTableOfContents sections={genericSections}
     showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
         secondaryNavTitle="More in this Section"
   />
   <br/>
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