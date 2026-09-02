

import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import ConjugateModulusVisualizer from '../../../../app/components/calculators/complex-numbers/ConjugateModulusVisualizer'
import SiblingsNav from '../../../../app/components/SiblingsNav'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import conjugateModulusDiagrams from '../../../../app/components/calculators/complex-numbers/conjugateModulusDiagrams'

export async function getStaticProps(){

  const keyWords = [
    'complex conjugate visualizer',
    'complex conjugate tool',
    'modulus of complex number',
    'complex conjugate interactive',
    'z bar calculator',
    'complex number modulus calculator',
    'conjugate modulus relationship',
    'z times z bar proof',
    'argand diagram conjugate',
    'complex plane visualizer',
    'complex conjugate reflection',
    'visualize complex conjugate',
    'complex number magnitude',
    'conjugate symmetry tool',
    'interactive complex plane'
  ]

    const sectionsContent={

    obj1:{
      title:`How to Use the Visualizer`,
      content:`This tool lets you explore the relationship between a complex number, its conjugate, and its modulus through direct manipulation on the Argand plane.

**Getting started:**

- Drag the navy blue point labeled **z** anywhere on the complex plane
- Watch the orange point **z̄** (the conjugate) mirror your movements across the real axis
- Observe how the dashed circle representing the modulus updates in real time

**Manual input method:**

Enter specific values using the Re and Im number inputs on the right panel. Values are constrained to the range ±10. If you enter a value outside this range, the tool automatically clamps it and displays a warning message.

**Quick exploration:**

Click any preset button (like 3+2i, −1+4i, or 3i) to jump to interesting examples, or use the Random button to generate unexpected combinations.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`Understanding the Display`,
      content:`The complex plane visualization shows several elements that update as you move z:

**Points and vectors:**

- Navy blue point and vector: your complex number z
- Orange point and dashed vector: the conjugate z̄
- Small gray dot at center: the origin (0, 0)

**Geometric elements:**

- Dashed blue circle: shows all points with the same modulus as z — notice both z and z̄ lie on this circle
- Light right triangles: connect origin → real part → z (and similarly for z̄), showing how modulus relates to the Pythagorean theorem
- Purple dashed vertical line: connects z to z̄, emphasizing reflection symmetry across the real axis

**Axis labels:**

The horizontal axis shows the real part (Re), while the vertical axis shows the imaginary part (Im). Tick marks appear at every 2 units for readability.`,
      before:``,
      after:``,
      link:'',
    },
  
    obj3:{
      title:`Using the Values Panel`,
      content:`The Values panel on the right displays all computed quantities in real time as you manipulate z:

**Basic values:**

- **z**: The complex number you're exploring, shown in standard form a + bi
- **z̄**: The conjugate, with the same real part but negated imaginary part
- **|z|**: The modulus (distance from origin), calculated as $\\sqrt{a^2 + b^2}$
- **|z|²**: The modulus squared, equal to $a^2 + b^2$

**Product display:**

- **z · z̄**: Shows the multiplication setup as (a + bi)(a − bi)

Each row highlights on hover, making it easy to track specific values. The color coding matches the diagram: navy for z, orange for z̄, blue for modulus-related quantities.`,
      before:``,
      after:``,
      link:'',
    },
    obj4:{
      title:`The Proof Box Explained`,
      content:`The green proof box demonstrates a fundamental identity: **z · z̄ = |z|²**. This proof updates live with your current values.

**First line — computing z · z̄:**

The tool calculates $a^2 + b^2$ directly from your real and imaginary parts. For example, with z = 3 + 2i: $3^2 + 2^2 = 9 + 4 = 13$.

**Second line — computing |z|²:**

Starting from the modulus $|z| = \\sqrt{a^2 + b^2}$, squaring gives $|z|^2 = a^2 + b^2$.

**Conclusion:**

Both calculations yield the same result, confirming z · z̄ = |z|². The checkmark indicates the identity holds for your current z value. Try different numbers — the identity always works!`,
      before:``,
      after:``,
      link:'',
    },
    obj5:{
      title:`Exploring Presets and Special Cases`,
      content:`The preset buttons offer carefully chosen examples that highlight different behaviors — each preset has a dedicated section below with the tool frozen on it:

[3+2i](!#the-starting-point-3-2i): A standard complex number in the first quadrant — good starting point for understanding the basics.

[−1+4i](!#negative-real-part-1-4i): Second quadrant example where the real part is negative. Notice z̄ appears in the third quadrant.

[3i](!#purely-imaginary-3i): A purely imaginary number lying on the imaginary axis. Here z and z̄ are symmetric about the origin, and both have the same distance from it.

[4](!#purely-real-4): A purely real number. The conjugate equals the original: $\\bar{4} = 4$. Both points overlap on the real axis.

[−2−3i](!#third-quadrant-2-3i): Third quadrant example. The conjugate z̄ appears in the second quadrant.

**Random**: Generates arbitrary values to test that the z · z̄ = |z|² identity holds universally.`,
      before:``,
      after:``,
      link:'',
    },
    obj6:{
      title:`Special Cases to Investigate`,
      content:`Certain values reveal important properties of conjugates and modulus:

**Purely real numbers (Im = 0):**

Set [z = 4 + 0i](!#purely-real-4). The conjugate equals the original number. Both points overlap on the real axis. Real numbers are their own conjugates.

**Purely imaginary numbers (Re = 0):**

Set [z = 0 + 3i](!#purely-imaginary-3i). The conjugate is z̄ = −3i. Points appear on opposite sides of the origin along the imaginary axis.

**Origin (z = 0):**

Both z and z̄ collapse to [the origin](!#the-origin-z-0). Modulus is zero, and z · z̄ = 0.

**Unit circle:**

Try values where $a^2 + b^2 = 1$, such as 0.6 + 0.8i. The modulus equals 1, so z · z̄ = 1.

**Equal real and imaginary parts:**

Set z = 3 + 3i. The point lies on a 45° diagonal, and z̄ reflects to z = 3 − 3i at −45°.`,
      before:``,
      after:``,
      link:'',
    },
    obj7:{
      title:`What is a Complex Conjugate?`,
      content:`The **complex conjugate** of a number z = a + bi is denoted z̄ (or sometimes z*) and defined as:

$$\\bar{z} = a - bi$$

Geometrically, the conjugate is the **reflection of z across the real axis**. The real part stays the same; only the imaginary part changes sign.

**Key properties:**

- $\\overline{\\bar{z}} = z$ — conjugating twice returns the original
- $\\overline{z_1 + z_2} = \\bar{z_1} + \\bar{z_2}$ — conjugate of a sum is the sum of conjugates
- $\\overline{z_1 \\cdot z_2} = \\bar{z_1} \\cdot \\bar{z_2}$ — conjugate of a product is the product of conjugates
- $z + \\bar{z} = 2a$ — sum gives twice the real part
- $z - \\bar{z} = 2bi$ — difference gives twice the imaginary part

For deeper theory on complex number fundamentals, see **complex numbers introduction**.`,
      before:``,
      after:``,
      link:'',
    },
    obj8:{
      title:`The Modulus of a Complex Number`,
      content:`The **modulus** (or absolute value) of z = a + bi measures its distance from the origin:

$$|z| = \\sqrt{a^2 + b^2}$$

This formula comes directly from the **Pythagorean theorem**. On the complex plane, z forms a right triangle with legs of length |a| and |b|, and the modulus is the hypotenuse.

**Key properties:**

- $|z| \\geq 0$ and $|z| = 0$ only when z = 0
- $|\\bar{z}| = |z|$ — a number and its conjugate have the same modulus
- $|z_1 \\cdot z_2| = |z_1| \\cdot |z_2|$ — modulus of a product is the product of moduli
- $|z_1 / z_2| = |z_1| / |z_2|$ — modulus of a quotient is the quotient of moduli

The dashed circle in the visualizer shows all complex numbers sharing the same modulus as your current z. For more on distance calculations, see **complex plane geometry**.`,
      before:``,
      after:``,
      link:'',
    },
    obj9:{
      title:`Why z · z̄ = |z|²`,
      content:`This identity is one of the most useful in complex number algebra. Here's the algebraic proof:

$$z \\cdot \\bar{z} = (a + bi)(a - bi)$$

Expanding using FOIL:

$$= a^2 - abi + abi - b^2i^2$$
$$= a^2 - b^2(-1)$$
$$= a^2 + b^2$$

Since $|z|^2 = (\\sqrt{a^2 + b^2})^2 = a^2 + b^2$, we have:

$$z \\cdot \\bar{z} = |z|^2$$

**Why this matters:**

This identity is essential for **rationalizing complex denominators**. To divide by a complex number, multiply numerator and denominator by the conjugate:

$$\\frac{1}{z} = \\frac{\\bar{z}}{z \\cdot \\bar{z}} = \\frac{\\bar{z}}{|z|^2}$$

The denominator becomes a real number, eliminating the imaginary part.`,
      before:``,
      after:``,
      link:'',
    },
//     obj10:{
//       title:`Related Concepts and Tools`,
//       content:`Explore more complex number topics with these resources:

// **Related visualizers:**

// - **Complex Number Explorer** — visualize complex numbers with modulus, quadrants, and coordinate display
// - **Complex Operations Visualizer** — see addition, subtraction, and multiplication geometrically
// - **Polar Form Visualizer** — explore the relationship between rectangular and polar representations

// **Theoretical foundations:**

// - **Complex Numbers** — comprehensive introduction to a + bi form
// - **Complex Plane** — understanding the Argand diagram coordinate system
// - **Polar Form** — representing complex numbers as r(cos θ + i sin θ)

// **Calculators:**

// - **Complex Number Calculator** — perform arithmetic operations
// - **Polar to Rectangular Converter** — convert between coordinate systems

// The conjugate and modulus concepts connect to advanced topics like **complex division**, **roots of unity**, and **Euler's formula**.`,
//       before:``,
//       after:``,
//       link:'',
//     },
obj10:{
  title:`Related Concepts and Tools`,
  content:`The conjugate appears throughout complex arithmetic — most visibly wherever division or modulus is involved. These tools show where it leads.

[Division Visualizer](!/complex-numbers/visual-tools/division) — the conjugate is the engine of complex division. To compute $\\frac{z_1}{z_2}$, you multiply numerator and denominator by $\\bar{z_2}$, turning the denominator into the real number $|z_2|^2 = z_2 \\cdot \\bar{z_2}$. This tool makes that process geometric.

[Polar & Rectangular Converter](!/complex-numbers/visual-tools/polar-rectangular) — the modulus $|z|$ you see here is the $r$ in polar form $re^{i\\theta}$. Conjugates share the same modulus but opposite argument: if $z = re^{i\\theta}$, then $\\bar{z} = re^{-i\\theta}$. Convert any point here to see its polar counterpart.

[Multiplication Visualizer](!/complex-numbers/visual-tools/multiplication) — $z \\cdot \\bar{z} = |z|^2$ is a multiplication, and a special one: the imaginary parts cancel exactly. See how multiplying a number by its conjugate always lands on the positive real axis.

[Distance & Midpoint Tool](!/complex-numbers/visual-tools/distance-midpoint) — conjugate pairs $z$ and $\\bar{z}$ are always symmetric about the real axis. Their midpoint is always real, and their distance is always $2|\\text{Im}(z)|$ — pure geometry that this tool illustrates directly.`,
  before:``,
  after:``,
  link:'',
},

    obj11: {
      title: `The Starting Point: 3 + 2i`,
      content: `The tool opens at $z = 3 + 2i$ — a first-quadrant number with nothing special about it, which is exactly the point: every element of the visualizer is visible at once from an ordinary example.`,
      before: ``,
      after: `Read the picture: the navy vector reaches $z = 3 + 2i$, the dashed orange vector reaches $\\bar{z} = 3 - 2i$, and the purple dashed line between them crosses the real axis at $3$ — their shared real part. The two vectors are mirror images across the highlighted real axis.

The [proof box](!#the-proof-box-explained) computes $z \\cdot \\bar{z} = 3^2 + 2^2 = 13$ for this value, and $|z|^2 = (\\sqrt{13})^2 = 13$ — the identity in its most concrete form.

The other presets each break one thing at a time: [−1 + 4i](!#negative-real-part-1-4i) makes the real part negative, [4](!#purely-real-4) and [3i](!#purely-imaginary-3i) drop the number onto an axis, and [−2 − 3i](!#third-quadrant-2-3i) negates both parts.`,
      link: '',
    },

    obj12: {
      title: `Negative Real Part: −1 + 4i`,
      content: `The preset $z = -1 + 4i$ moves the number into the second quadrant: real part negative, imaginary part positive.`,
      before: ``,
      after: `Conjugation never touches the real part, so $\\bar{z} = -1 - 4i$ keeps the same horizontal position and simply drops below the axis — from the second quadrant into the third. Compare this with [the starting preset](!#the-starting-point-3-2i), whose conjugate stays on the right half of the plane.

The modulus ignores both signs: $|-1 + 4i| = \\sqrt{(-1)^2 + 4^2} = \\sqrt{17}$. The proof box still lands on a positive real product, $z \\cdot \\bar{z} = 1 + 16 = 17$ — a negative real part cannot break the identity, because every term gets squared.

Notice the right-triangle guides: the vertical leg now hangs left of the imaginary axis, but its length $4$ and the horizontal leg's length $1$ still assemble the same Pythagorean picture that defines the [modulus](!#the-modulus-of-a-complex-number).`,
      link: '',
    },

    obj13: {
      title: `Purely Imaginary: 3i`,
      content: `The preset $z = 3i$ places the number directly on the imaginary axis: real part zero.`,
      before: ``,
      after: `With no real part, reflection across the real axis is the same as reflection through the origin: $\\overline{3i} = -3i = -(3i)$. The purple symmetry line runs straight down the imaginary axis, and the two vectors point in exactly opposite directions.

The product is still real and positive: $z \\cdot \\bar{z} = (3i)(-3i) = -9i^2 = 9 = |z|^2$. This is $i^2 = -1$ doing its signature work — squaring a purely imaginary number gives a negative real number, and the conjugate's second sign flip makes it positive.

The mirror case is the [purely real preset](!#purely-real-4), where conjugation does nothing at all; between the two axes live the generic examples like [3 + 2i](!#the-starting-point-3-2i).`,
      link: '',
    },

    obj14: {
      title: `Purely Real: 4`,
      content: `The preset $z = 4$ is an ordinary real number viewed inside the complex plane — imaginary part zero.`,
      before: ``,
      after: `Here $\\bar{z} = z$: reflecting a point that already lies on the mirror leaves it fixed. The visualizer draws both points and both vectors, but they coincide — drag z slightly off the axis and watch them split apart.

The identity collapses to ordinary squaring: $z \\cdot \\bar{z} = 4 \\cdot 4 = 16 = |4|^2$. For real numbers the modulus is just the absolute value, so nothing new happens — which is precisely the sense in which complex conjugation extends real arithmetic without disturbing it.

This is one of the two axis cases; the other is the [purely imaginary preset](!#purely-imaginary-3i), where conjugation flips the number to its negative instead of fixing it.`,
      link: '',
    },

    obj15: {
      title: `Third Quadrant: −2 − 3i`,
      content: `The preset $z = -2 - 3i$ has both parts negative, putting the number in the third quadrant — and its conjugate above the axis in the second.`,
      before: ``,
      after: `Conjugation is direction-blind: whichever side of the real axis $z$ occupies, $\\bar{z}$ takes the other. Here that sends the third quadrant to the second — the mirror image of what happens with [−1 + 4i](!#negative-real-part-1-4i).

By a small coincidence of arithmetic, this preset shares its modulus with [the starting preset](!#the-starting-point-3-2i): $|-2 - 3i| = \\sqrt{4 + 9} = \\sqrt{13}$. Load the two presets in turn and the dashed circle does not move — several different numbers live on that one circle, and the proof box computes the same product $13$ for each.

The identity $z \\cdot \\bar{z} = |z|^2$ is quadrant-proof: $(-2)^2 + (-3)^2 = 4 + 9$, every sign erased by squaring.`,
      link: '',
    },

    obj16: {
      title: `The Origin: z = 0`,
      content: `Set both inputs to zero — or drag the point home — and the whole construction collapses: $z = 0$ is its own conjugate and its own negative at once.`,
      before: ``,
      after: `Zero is the degenerate case of everything this tool shows: $\\bar{0} = 0$, $|0| = 0$, and $z \\cdot \\bar{z} = 0 = |0|^2$ — the identity holds with every quantity vanishing. It is the only complex number with modulus zero.

The proof box's checkmark still appears, and it should: the identity is universal, boundary case included. What disappears is the geometry — no vectors, no circle, no triangles — because all of it was built from a nonzero distance.

The [special cases section](!#special-cases-to-investigate) lists the other boundary configurations worth loading: the axes, the unit circle, and the 45° diagonal.`,
      link: '',
    },
  }

  const faqQuestions = {
    obj1: {
      question: "What is a complex conjugate?",
      answer: "The complex conjugate of z = a + bi is z̄ = a − bi. It has the same real part but the opposite sign on the imaginary part. Geometrically, the conjugate is the reflection of z across the real axis on the complex plane."
    },
    obj2: {
      question: "How do you find the conjugate of a complex number?",
      answer: "To find the conjugate, keep the real part unchanged and negate the imaginary part. For example, the conjugate of 3 + 4i is 3 − 4i, and the conjugate of −2 − 5i is −2 + 5i. Purely real numbers are their own conjugates."
    },
    obj3: {
      question: "What is the modulus of a complex number?",
      answer: "The modulus |z| of a complex number z = a + bi is its distance from the origin, calculated as |z| = √(a² + b²). This comes from the Pythagorean theorem applied to the right triangle formed by the real and imaginary components."
    },
    obj4: {
      question: "Why does z times its conjugate equal the modulus squared?",
      answer: "When you multiply z = a + bi by z̄ = a − bi, the cross terms cancel: (a + bi)(a − bi) = a² − (bi)² = a² + b². This equals |z|² = (√(a² + b²))² = a² + b². The result is always a non-negative real number."
    },
    obj5: {
      question: "What is the complex conjugate used for?",
      answer: "Conjugates are essential for dividing complex numbers and rationalizing complex denominators. Multiplying by the conjugate eliminates imaginary parts from denominators. They also appear in finding polynomial roots, signal processing, and quantum mechanics."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Complex Conjugate and Modulus Visualizer",
      "description": "Interactive complex conjugate and modulus visualizer. Explore z, z̄, and |z| by dragging points on the Argand plane with live calculations and proof.",
      "url": "https://www.learnmathclass.com/complex-numbers/visual-tools/complex-conjugate",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Drag-and-drop complex number manipulation on Argand plane",
        "Real-time conjugate z̄ reflection across real axis",
        "Live modulus calculation with visual circle representation",
        "Step-by-step proof that z · z̄ = |z|²",
        "Preset examples including purely real and purely imaginary cases",
        "Manual coordinate input with range validation"
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
          "name": "Complex Conjugate Visualizer",
          "item": "https://www.learnmathclass.com/complex-numbers/visual-tools/complex-conjugate"
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
  // plane + attached picture-reading panel, one frame, no link (own page).
  const stateUnits = {
    start: demoUnitFrame({ svg: conjugateModulusDiagrams.start, caption: 'z = 3 + 2i, frozen',
      text: 'Solid navy vector to z, dashed orange vector to z&#x305; = 3 &#8722; 2i below the axis, and both points pinned to one dashed modulus circle of radius &#8730;13.' }),
    negativeReal: demoUnitFrame({ svg: conjugateModulusDiagrams.negativeReal, caption: 'z = &#8722;1 + 4i, frozen',
      text: 'z sits upper-left, z&#x305; = &#8722;1 &#8722; 4i lower-left: conjugation reflects across the real axis, so a second-quadrant number always has a third-quadrant conjugate.' }),
    pureImaginary: demoUnitFrame({ svg: conjugateModulusDiagrams.pureImaginary, caption: 'z = 3i, frozen',
      text: 'z at 3i and z&#x305; at &#8722;3i sit symmetric about the origin: for a purely imaginary number, the conjugate coincides with the negative.' }),
    purelyReal: demoUnitFrame({ svg: conjugateModulusDiagrams.purelyReal, caption: 'z = 4, frozen',
      text: 'The orange conjugate point hides exactly underneath the navy z: a real number is its own conjugate, and both vectors lie flat on the real axis.' }),
    thirdQuadrant: demoUnitFrame({ svg: conjugateModulusDiagrams.thirdQuadrant, caption: 'z = &#8722;2 &#8722; 3i, frozen',
      text: 'The reflection now goes upward: z&#x305; = &#8722;2 + 3i floats above the real axis while z hangs below. Same modulus circle, radius &#8730;13.' }),
    origin: demoUnitFrame({ svg: conjugateModulusDiagrams.origin, caption: 'z = 0, frozen',
      text: 'Both points, both vectors and the modulus circle have collapsed into the origin dot: at z = 0 there is no direction and no distance left to draw.' }),
  };

  // Per-state additions for the tool's Key Ideas panel, keyed by the preset
  // value z currently matches (see ConjugateModulusVisualizer). Each anchors
  // down to the state's dedicated section.
  const explanations = {
    start: 'This starting value is the tool’s generic example — nothing vanishes, so every element is visible. [Learn more about 3 + 2i](!#the-starting-point-3-2i) · [All presets](!#exploring-presets-and-special-cases)',
    negativeReal: 'A negative real part sends the conjugate from the second quadrant to the third — reflection only ever crosses the real axis. [Learn more about −1 + 4i](!#negative-real-part-1-4i) · [All presets](!#exploring-presets-and-special-cases)',
    pureImaginary: 'On the imaginary axis the conjugate equals the negative: z̄ = −z. [Learn more about 3i](!#purely-imaginary-3i) · [All presets](!#exploring-presets-and-special-cases)',
    purelyReal: 'Real numbers are their own conjugates — the two points coincide on the axis. [Learn more about z = 4](!#purely-real-4) · [All presets](!#exploring-presets-and-special-cases)',
    thirdQuadrant: 'Both parts negative, and the conjugate rises into the second quadrant — same modulus circle as 3 + 2i. [Learn more about −2 − 3i](!#third-quadrant-2-3i) · [All presets](!#exploring-presets-and-special-cases)',
    origin: 'At zero the identity still holds — with every quantity equal to 0. [Learn more about the origin](!#the-origin-z-0) · [All special cases](!#special-cases-to-investigate)',
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
        title: "Complex Conjugate Visualizer - Interactive Tool | Learn Math Class",
        description: "Interactive complex conjugate and modulus visualizer. Explore z, z̄, and |z| by dragging points on the Argand plane with live calculations and proof.",
        keywords: keyWords.join(", "),
        url: "/complex-numbers/visual-tools/complex-conjugate",
        hubDescription: "Drag a point on the Argand plane to see z and its conjugate z̄ mirrored across the real axis. Watch the modulus circle, right triangle decomposition, and the proof that z · z̄ = |z|² update in real time.",
        category: "Modulus & Geometry",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="22" fill="none" stroke="#FAC775" stroke-width="1" stroke-dasharray="3,2.5"/><line x1="10" y1="40" x2="70" y2="40" stroke="#B5D4F4" stroke-width="1.1"/><line x1="40" y1="12" x2="40" y2="68" stroke="#B5D4F4" stroke-width="0.8"/><line x1="58" y1="27" x2="58" y2="53" stroke="#AFA9EC" stroke-width="1.1" stroke-dasharray="2.5,2"/><line x1="40" y1="40" x2="58" y2="27" stroke="#FAC775" stroke-width="1.9"/><line x1="40" y1="40" x2="58" y2="53" stroke="#AFA9EC" stroke-width="1.9"/><circle cx="58" cy="27" r="3.2" fill="#FAC775" stroke="#854F0B" stroke-width="1.2"/><circle cx="58" cy="53" r="3.2" fill="#AFA9EC" stroke="#3C3489" stroke-width="1.2"/><text x="65" y="24" font-family="Georgia,serif" font-size="8" fill="#FAC775" text-anchor="middle" font-style="italic">z</text><line x1="62" y1="52" x2="68" y2="52" stroke="#CECBF6" stroke-width="1"/><text x="65" y="61" font-family="Georgia,serif" font-size="8" fill="#CECBF6" text-anchor="middle" font-style="italic">z</text><text x="20" y="24" font-family="Georgia,serif" font-size="6.5" fill="#FAC775" text-anchor="middle" font-style="italic">|z|</text></svg>`,
         name: "Complex Conjugate and Modulus Visualizer"
      },
        
       }
    }
   }

export default function ComplexConjugateVisualizerPage({
  seoData,
  sectionsContent,
  introContent,
  faqQuestions,
  schemas,
  explanations,
  stateUnits
}) {

    
  const genericSections=[
    {
        id:'how-to-use-the-visualizer',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'understanding-the-display',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
        ]
    },
    {
        id:'using-the-values-panel',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    },
    {
        id:'the-proof-box-explained',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
        ]
    },
    {
        id:'exploring-presets-and-special-cases',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
        ]
    },
    {
        id:'the-starting-point-3-2i',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
          <div key='u-start' dangerouslySetInnerHTML={{ __html: stateUnits.start }} />,
          sectionsContent.obj11.after,
        ]
    },
    {
        id:'negative-real-part-1-4i',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
          <div key='u-negativeReal' dangerouslySetInnerHTML={{ __html: stateUnits.negativeReal }} />,
          sectionsContent.obj12.after,
        ]
    },
    {
        id:'purely-imaginary-3i',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
          <div key='u-pureImaginary' dangerouslySetInnerHTML={{ __html: stateUnits.pureImaginary }} />,
          sectionsContent.obj13.after,
        ]
    },
    {
        id:'purely-real-4',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
          <div key='u-purelyReal' dangerouslySetInnerHTML={{ __html: stateUnits.purelyReal }} />,
          sectionsContent.obj14.after,
        ]
    },
    {
        id:'third-quadrant-2-3i',
        title:sectionsContent.obj15.title,
        link:sectionsContent.obj15.link,
        content:[
          sectionsContent.obj15.content,
          <div key='u-thirdQuadrant' dangerouslySetInnerHTML={{ __html: stateUnits.thirdQuadrant }} />,
          sectionsContent.obj15.after,
        ]
    },
    {
        id:'special-cases-to-investigate',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'the-origin-z-0',
        title:sectionsContent.obj16.title,
        link:sectionsContent.obj16.link,
        content:[
          sectionsContent.obj16.content,
          <div key='u-origin' dangerouslySetInnerHTML={{ __html: stateUnits.origin }} />,
          sectionsContent.obj16.after,
        ]
    },
    {
        id:'what-is-a-complex-conjugate',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    {
        id:'the-modulus-of-a-complex-number',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
    {
        id:'why-z-times-conjugate-equals-modulus-squared',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'related-concepts-and-tools',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
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
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         /> 
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Complex Conjugate Visualizer</h1>
   <br/>
   <SiblingsNav maxWidth='100%'>
   <ConjugateModulusVisualizer explanations={explanations}/>
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