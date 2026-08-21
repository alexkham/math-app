
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import ComplexExplorer from '@/app/components/calculators/complex-numbers/ComplexExplorer'
import SiblingsNav from '../../../../app/components/SiblingsNav'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import complexExplorerDiagrams from '../../../../app/components/calculators/complex-numbers/complexExplorerDiagrams'

export async function getStaticProps(){

  const keyWords = [
    'complex number explorer',
    'complex plane visualizer',
    'argand diagram interactive',
    'complex number visualization',
    'modulus calculator complex',
    'complex conjugate visualizer',
    'real imaginary parts tool',
    'interactive complex plane',
    'complex number graph',
    'complex plane drag drop',
    'complex number quadrants',
    'complex modulus calculator',
    'visualize complex numbers',
    'argand plane tool',
    'complex number learning tool'
  ]

  const faqQuestions = {
    obj1: {
      question: "What is a complex number?",
      answer: "A complex number has the form z = a + bi, where a is the real part, b is the imaginary part, and i is the imaginary unit satisfying i² = −1. Complex numbers extend real numbers into two dimensions and are essential in engineering, physics, and advanced mathematics."
    },
    obj2: {
      question: "How do I use the Complex Number Explorer?",
      answer: "Click or drag anywhere on the plane to place your complex number, or type exact values in the a and b input fields. The tool instantly displays the real part, imaginary part, modulus, and conjugate. Use the Range buttons to zoom in or out on the plane."
    },
    obj3: {
      question: "What is the modulus of a complex number?",
      answer: "The modulus |z| is the distance from the origin to the point z = a + bi on the complex plane. It's calculated using the Pythagorean theorem: |z| = √(a² + b²). The tool visualizes this as the hypotenuse of a right triangle with legs a and b."
    },
    obj4: {
      question: "What is the complex conjugate?",
      answer: "The conjugate of z = a + bi is z̄ = a − bi. It reflects the original point across the real axis — same horizontal position, opposite vertical position. The tool shows the conjugate as a ghost point below or above the original."
    },
    obj5: {
      question: "What are the four quadrants of the complex plane?",
      answer: "Quadrant I has positive real and imaginary parts. Quadrant II has negative real and positive imaginary. Quadrant III has both negative. Quadrant IV has positive real and negative imaginary. The explanation panel identifies which quadrant your point occupies."
    }
  }

  const sectionsContent = {

    obj1: {
      title: `How to Use the Complex Explorer`,
      content: `This interactive tool visualizes complex numbers on an Argand plane (complex plane). Click anywhere on the grid to place a point, or drag to move it around. The tool responds instantly, updating all calculations as you explore.

Alternatively, type exact values in the **a** and **b** input fields above the plane. The field labeled "a" controls the real part (horizontal position), while "b" controls the imaginary part (vertical position). Press Enter or click away to confirm your input.

Use the **Range ±** buttons to adjust the visible area. Smaller ranges (±5) show more detail for numbers close to the origin, while larger ranges (±10) let you explore bigger values. The snap resolution adjusts automatically based on your zoom level.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Reading the Display Panel`,
      content: `The right side of the tool shows key information about your complex number. At the top, you'll see the full representation **z = a + bi** with your current values.

Three cards display the components: **Real Part** (a) in orange matches the horizontal distance from the origin, **Imaginary Part** (b) in navy matches the vertical distance, and **Modulus** (|z|) in blue shows the straight-line distance from the origin.

Below these cards, the **Explanation Panel** provides context-aware descriptions. It identifies whether your point is purely real, purely imaginary, at the origin, or in one of the four quadrants. Each case includes specific calculations showing how the modulus formula applies to your values.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Understanding the Right Triangle`,
      content: `When your complex number has both nonzero real and imaginary parts, a right triangle appears connecting the origin to your point. This visualization reveals the geometric meaning of complex number components.

The orange horizontal leg represents the real part **a**, stretching along the real axis. The navy vertical leg represents the imaginary part **b**, extending parallel to the imaginary axis. The blue hypotenuse connecting the origin to your point represents the **modulus** |z|.

Labels on each side show the exact values. The small square at the corner confirms the 90° angle. This triangle demonstrates why $|z| = \\sqrt{a^2 + b^2}$ — it's simply the Pythagorean theorem applied to the complex plane.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Exploring the Conjugate`,
      content: `Every complex number z = a + bi has a conjugate z̄ = a − bi, shown as a faint orange point reflected across the real axis. The conjugate shares the same real part but has the opposite imaginary part.

A dashed vertical line connects z and z̄, passing through their shared position on the real axis. This reflection symmetry means that a number and its conjugate are always equidistant from the real axis — one above, one below (unless b = 0).

The **Conjugate** card at the bottom displays the exact value of z̄. Notice that purely real numbers equal their own conjugates (since reflecting across the real axis leaves them unchanged), while purely imaginary numbers have conjugates that are their negatives.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Special Cases: Axes and Origin`,
      content: `Try placing your point directly on one of the axes or at the origin to see how the tool handles special cases. Each of the three cases has a dedicated section below with the tool frozen in that state.

**At the origin (0, 0)**: The number is exactly zero. As [the origin](!#the-origin) section shows, zero is the only complex number with modulus 0, and it's the unique point that is simultaneously real and pure imaginary.

**On the real axis (b = 0)**: The number is [purely real](!#purely-real-numbers), like ordinary real numbers. The modulus simplifies to |a|, matching the familiar absolute value. The conjugate equals the number itself.

**On the imaginary axis (a = 0)**: The number is [purely imaginary](!#pure-imaginary-numbers). The modulus equals |b|. The conjugate is the negative of the original number, sitting on the opposite side of the origin.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `The Four Quadrants`,
      content: `The complex plane divides into four quadrants based on the signs of the real and imaginary parts:

- [Quadrant I](!#quadrant-i-upper-right) (upper right): a > 0 and b > 0
- [Quadrant II](!#quadrant-ii-upper-left) (upper left): a < 0 and b > 0
- [Quadrant III](!#quadrant-iii-lower-left) (lower left): a < 0 and b < 0
- [Quadrant IV](!#quadrant-iv-lower-right) (lower right): a > 0 and b < 0

Each quadrant has a dedicated section below with the tool frozen inside it. The explanation panel identifies which quadrant your point occupies and describes the sign pattern. Drag your point through different quadrants to see how the triangle orientation changes while the modulus formula remains consistent regardless of signs.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What is a Complex Number?`,
      content: `A **complex number** extends the real number system by introducing the imaginary unit $i$, defined by $i^2 = -1$. Every complex number can be written as $z = a + bi$, where $a$ and $b$ are real numbers.

The real part $a = \\text{Re}(z)$ determines horizontal position on the complex plane. The imaginary part $b = \\text{Im}(z)$ determines vertical position. Together, they specify a unique point in two-dimensional space.

Complex numbers arose historically to solve equations like $x^2 + 1 = 0$, which has no real solutions. Today they appear throughout mathematics, physics, and engineering — from signal processing and quantum mechanics to electrical circuits and fluid dynamics.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `The Complex Plane (Argand Diagram)`,
      content: `The **complex plane** represents complex numbers geometrically. The horizontal axis displays real values, while the vertical axis displays imaginary values. A complex number $z = a + bi$ corresponds to the point $(a, b)$.

This representation, also called an **Argand diagram**, transforms algebraic operations into geometric ones. Addition becomes vector addition. Multiplication involves rotation and scaling. The conjugate becomes reflection across the real axis.

The plane extends infinitely in all directions. The Range control in this tool lets you focus on different portions — zoom in for detail near the origin, or zoom out to see larger values. Grid lines help you read coordinates at a glance.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Modulus and the Pythagorean Theorem`,
      content: `The **modulus** (or absolute value) of a complex number measures its distance from the origin:

$$|z| = |a + bi| = \\sqrt{a^2 + b^2}$$

This formula follows directly from the Pythagorean theorem. The point $(a, b)$ forms a right triangle with legs of length $|a|$ and $|b|$. The hypotenuse — the straight-line distance to the origin — equals $\\sqrt{a^2 + b^2}$.

Key properties of modulus include: $|z| \\geq 0$ always, with equality only when $z = 0$. For real numbers, modulus matches absolute value. The modulus of a product equals the product of moduli: $|z_1 z_2| = |z_1| |z_2|$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Complex Conjugates and Their Properties`,
      content: `The **complex conjugate** of $z = a + bi$ is $\\bar{z} = a - bi$. Geometrically, conjugation reflects a point across the real axis — the real part stays the same while the imaginary part changes sign.

Conjugates have important algebraic properties. The product $z \\cdot \\bar{z} = a^2 + b^2 = |z|^2$ always yields a non-negative real number. This makes conjugates essential for division: to compute $\\frac{w}{z}$, multiply numerator and denominator by $\\bar{z}$ to get a real denominator.

Other properties include: $\\overline{z_1 + z_2} = \\bar{z_1} + \\bar{z_2}$ and $\\overline{z_1 \\cdot z_2} = \\bar{z_1} \\cdot \\bar{z_2}$. The conjugate of a conjugate returns the original: $\\overline{\\bar{z}} = z$.`,
      before: ``,
      after: ``,
      link: '',
    },

//     obj11: {
//       title: `Related Concepts`,
//       content: `The Complex Number Explorer connects to several important topics in complex analysis:

// **Polar Form**: Complex numbers can also be written as $z = r(\\cos\\theta + i\\sin\\theta)$ or $z = re^{i\\theta}$, where $r = |z|$ is the modulus and $\\theta$ is the argument (angle from the positive real axis).

// **Complex Arithmetic**: Addition combines real and imaginary parts separately. Multiplication uses the distributive property along with $i^2 = -1$. Division uses conjugates to rationalize denominators.

// **Euler's Formula**: The remarkable identity $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ connects exponential and trigonometric functions through complex numbers.

// **Applications**: Complex numbers model oscillations, waves, electrical impedance, quantum states, and 2D transformations in graphics and engineering.`,
//       before: ``,
//       after: ``,
//       link: '',
//     }

obj11:{
  title:`Related Concepts and Tools`,
  content:`The explorer shows the full picture of a single complex number at once. Each tool below takes one of those properties and goes deeper.

[Complex Conjugate Explorer](!/complex-numbers/visual-tools/complex-conjugate) — the ghost point $\\bar{z}$ you see reflected below the real axis here gets its own dedicated tool. Drag $z$ and watch the conjugate mirror it in real time, with the identity $z \\cdot \\bar{z} = |z|^2$ verified step by step.

[Polar & Rectangular Converter](!/complex-numbers/visual-tools/polar-rectangular) — the modulus and right triangle visible in this explorer are the core of the polar representation $re^{i\\theta}$. This converter makes the switch between the two forms explicit, with live conversion formulas and an angle arc.

[Addition & Subtraction Visualizer](!/complex-numbers/visual-tools/addition-subtraction) — move from one complex number to two. This tool places $z_1$ and $z_2$ on the same plane and shows the parallelogram rule for addition and the difference vector for subtraction.

[Multiplication Visualizer](!/complex-numbers/visual-tools/multiplication) — see what happens when two complex numbers are multiplied: moduli scale and arguments rotate. The single modulus circle you see in the explorer becomes a geometric transformation.

[Distance & Midpoint Tool](!/complex-numbers/visual-tools/distance-midpoint) — extends the modulus concept to two points. The distance $|z_1 - z_2|$ between any two complex numbers is computed and visualized directly on the plane.`,
  before:``,
  after:``,
  link:'',
},

    obj12: {
      title: `The Origin`,
      content: `Zero has a location. On the complex plane, the number $0 = 0 + 0i$ is the point where the real and imaginary axes cross — the anchor from which every other complex number is measured.`,
      before: ``,
      after: `The origin is the only complex number with modulus zero: $|z| = 0$ if and only if $z = 0$. Every other point sits at some positive distance from it, and that distance is exactly what the modulus measures. In the frozen view above, all the tool's usual decorations — the right triangle, the modulus circle, the conjugate ghost — have collapsed into the single point, because every one of them is built from a nonzero distance or height.

Algebraically, zero is the additive identity: $z + 0 = z$ for every complex number $z$. It is also its own conjugate and its own negative, $\\bar{0} = -0 = 0$, which makes it the one fixed point shared by both reflection across the real axis and point reflection through the origin.

The origin is also the only point that belongs to both axes at once — simultaneously a [purely real](!#purely-real-numbers) number and a [pure imaginary](!#pure-imaginary-numbers) one. Every classification the explanation panel can announce meets here.`,
      link: '',
    },

    obj13: {
      title: `Purely Real Numbers`,
      content: `When the imaginary part is zero, $z = a + 0i = a$ is an ordinary real number — the entire real number line lives inside the complex plane as its horizontal axis.`,
      before: ``,
      after: `For a real number, the modulus formula collapses to the familiar absolute value: $|a + 0i| = \\sqrt{a^2 + 0^2} = |a|$. Complex modulus and real absolute value agree completely on the real line — the new definition extends the old one rather than replacing it.

Conjugation does nothing here: $\\overline{a + 0i} = a - 0i = a$. Reflecting across the real axis leaves every point of the axis where it stands, which is why the tool shows no conjugate ghost in this state. In fact this property characterizes the real numbers: $z$ is real exactly when $z = \\bar{z}$.

Try steering the point along the axis with the **a** input field while watching the [display panel](!#reading-the-display-panel): the real part card tracks the number itself, the imaginary part card stays pinned at 0, and the modulus card reports $|a|$. Compare this with the [pure imaginary](!#pure-imaginary-numbers) case, where the roles of the two cards swap exactly.`,
      link: '',
    },

    obj14: {
      title: `Pure Imaginary Numbers`,
      content: `When the real part is zero, $z = 0 + bi = bi$ is a pure imaginary number. These numbers occupy the vertical axis — the real line's perpendicular twin, scaled by the imaginary unit $i$.`,
      before: ``,
      after: `The modulus of $bi$ is $|b|$: the formula gives $\\sqrt{0^2 + b^2} = |b|$, the unsigned height above or below the origin. So $2i$ and $-2i$ share the same modulus, just as $3$ and $-3$ do on the real axis.

Conjugation acts as negation here: $\\overline{bi} = -bi$. That is the exact opposite of the [purely real](!#purely-real-numbers) case, where conjugation changes nothing. The dashed line in the frozen view connects $z$ and $\\bar{z}$ straight through the origin — for pure imaginary numbers, the conjugate and the additive inverse coincide.

Squaring a pure imaginary number always produces a real number that is zero or negative: $(bi)^2 = b^2 i^2 = -b^2$. This is the defining behavior inherited from $i^2 = -1$, and it is why the equation $x^2 + 1 = 0$, unsolvable on the real line, finds its two solutions $\\pm i$ on this axis.`,
      link: '',
    },

    obj15: {
      title: `Quadrant I: Upper Right`,
      content: `When both the real and imaginary parts are positive, $z$ lands in Quadrant I — the upper-right region of the plane. This is the tool's home state: it opens at $z = 2 + 3i$, the point frozen below.`,
      before: ``,
      after: `Quadrant I is where the [right triangle](!#understanding-the-right-triangle) appears in its textbook orientation: legs extending right and up, hypotenuse climbing away from the origin. The modulus computation reads directly off the figure: $|z| = \\sqrt{2^2 + 3^2} = \\sqrt{13}$.

Both coordinates carry positive signs, so the real part card and imaginary part card in the [display panel](!#reading-the-display-panel) show the point's position without any sign juggling. The conjugate $\\bar{z} = 2 - 3i$ drops into [Quadrant IV](!#quadrant-iv-lower-right) — conjugation always pairs the upper-right quadrant with the lower-right one.

Flipping the sign of the real part instead sends the point to [Quadrant II](!#quadrant-ii-upper-left); flipping both signs lands the additive inverse $-z = -2 - 3i$ diagonally opposite in [Quadrant III](!#quadrant-iii-lower-left). All four variants share the same modulus $\\sqrt{13}$, because squaring erases signs.`,
      link: '',
    },

    obj16: {
      title: `Quadrant II: Upper Left`,
      content: `A negative real part with a positive imaginary part places $z$ in Quadrant II, the upper-left region. The frozen example is $z = -3 + 2i$.`,
      before: ``,
      after: `Squaring wipes out signs, so the modulus ignores the quadrant: $|-3 + 2i| = \\sqrt{(-3)^2 + 2^2} = \\sqrt{13}$ — exactly the distance of the frozen $2 + 3i$ in [Quadrant I](!#quadrant-i-upper-right). The dashed modulus circle in the two frozen views is one and the same circle.

The conjugate $\\overline{-3 + 2i} = -3 - 2i$ lands in [Quadrant III](!#quadrant-iii-lower-left): conjugation pairs the two left-hand quadrants with each other, just as it pairs the right-hand ones. Negating only the real part of a number is a reflection across the imaginary axis, and applied to Quadrant I it produces exactly this quadrant.

To reach Quadrant II from Quadrant I with algebra rather than dragging, multiply by $i$: the product $i(2 + 3i) = -3 + 2i$ is precisely the frozen point above. Multiplication by $i$ rotates every complex number a quarter turn counterclockwise, carrying the upper-right quadrant onto the upper-left one.`,
      link: '',
    },

    obj17: {
      title: `Quadrant III: Lower Left`,
      content: `When both parts are negative, $z$ sits in Quadrant III, the lower-left region — diagonally opposite Quadrant I. The frozen example is $z = -2 - 3i$.`,
      before: ``,
      after: `This quadrant is home to the additive inverse of the tool's opening state: $-(2 + 3i) = -2 - 3i$. Negating both parts is a point reflection straight through [the origin](!#the-origin), and it always exchanges Quadrant I with Quadrant III (and [Quadrant II](!#quadrant-ii-upper-left) with [Quadrant IV](!#quadrant-iv-lower-right)).

It is worth separating two reflections that are easy to conflate. The additive inverse $-z$ reflects through the origin and flips both signs; the conjugate $\\bar{z}$ reflects across the real axis and flips only the imaginary sign. For the frozen point, $-z = 2 + 3i$ returns to Quadrant I while $\\bar{z} = -2 + 3i$ rises to Quadrant II — different destinations, both at modulus $\\sqrt{13}$.

Notice how the right-triangle labels in the frozen view keep their signs — $a = -2$, $b = -3$ — while the legs themselves are unsigned lengths 2 and 3. The display panel makes the same distinction: signed coordinates in the part cards, an unsigned distance in the modulus card.`,
      link: '',
    },

    obj18: {
      title: `Quadrant IV: Lower Right`,
      content: `A positive real part with a negative imaginary part puts $z$ in Quadrant IV, the lower-right region. The frozen example is $z = 3 - 2i$.`,
      before: ``,
      after: `Quadrant IV is the conjugate quadrant: every number here is the conjugate of a [Quadrant I](!#quadrant-i-upper-right) number, and vice versa. The frozen $3 - 2i$ is $\\overline{3 + 2i}$, and the tool's ghost point makes the pairing visible — the ghost of any lower-right point always hovers in the upper-right.

That pairing is what makes this quadrant matter in algebra. Whenever a polynomial with real coefficients has a complex root above the real axis, its conjugate root sits below it; the frozen pair multiplies to the real number $z\\bar{z} = |z|^2 = 13$. Real answers out of complex inputs come from exactly this kind of matched pair.

Sign-wise the quadrant mirrors [Quadrant II](!#quadrant-ii-upper-left): one part positive, one negative, just distributed the other way. And the quarter-turn wheel keeps spinning here too — multiplying the frozen point by $i$ gives $i(3 - 2i) = 2 + 3i$, landing on the tool's opening state in Quadrant I.`,
      link: '',
    },

  }

  const seoData = {
    title: "Complex Number Explorer - Interactive Visualizer | Learn Math Class",
    description: "Interactive complex plane visualizer. Drag points to explore real parts, imaginary parts, modulus, and conjugates with instant calculations and explanations.",
    keywords: keyWords.join(", "),
    url: "/complex-numbers/visual-tools/complex-explorer",
    name: "Complex Number Explorer"
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Complex Number Explorer",
      "description": seoData.description,
      "url": `https://www.learnmathclass.com${seoData.url}`,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Interactive Argand plane with drag-and-drop",
        "Real-time modulus calculation",
        "Complex conjugate visualization",
        "Right triangle geometric display",
        "Quadrant-aware explanations",
        "Adjustable range (±5 to ±10)",
        "Coordinate input fields"
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
          "name": "Complex Number Explorer",
          "item": `https://www.learnmathclass.com${seoData.url}`
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
    origin: demoUnitFrame({ svg: complexExplorerDiagrams.origin, caption: 'z = 0, frozen',
      text: 'The point sits exactly where the axes cross. Triangle, projections, conjugate ghost and modulus circle have all collapsed to nothing &#8212; at distance 0 from the origin there is nothing left to draw.' }),
    purelyReal: demoUnitFrame({ svg: complexExplorerDiagrams.purelyReal, caption: 'z = 3, frozen',
      text: 'With b = 0 the point rides the orange real axis. No triangle can form &#8212; the vertical leg would have height zero &#8212; and the dashed modulus circle crosses the axis at 3 and &#8722;3, the two real numbers at distance 3 from the origin.' }),
    pureImaginary: demoUnitFrame({ svg: complexExplorerDiagrams.pureImaginary, caption: 'z = 2i, frozen',
      text: 'The point rides the navy imaginary axis at height 2. Its conjugate ghost sits directly below at &#8722;2i &#8212; reflection across the real axis sends a pure imaginary number to its own negative.' }),
    quadrantI: demoUnitFrame({ svg: complexExplorerDiagrams.quadrantI, caption: 'z = 2 + 3i, frozen',
      text: 'The full anatomy on display: orange horizontal leg a = 2, navy vertical leg b = 3, blue hypotenuse |z| = &#8730;13 &#8776; 3.61 reaching from the origin. The conjugate ghost waits below the real axis at 2 &#8722; 3i.' }),
    quadrantII: demoUnitFrame({ svg: complexExplorerDiagrams.quadrantII, caption: 'z = &#8722;3 + 2i, frozen',
      text: 'The triangle opens leftward: the orange leg runs to &#8722;3, the navy leg rises to 2, and the hypotenuse points up and to the left. The conjugate ghost mirrors the point into the lower-left.' }),
    quadrantIII: demoUnitFrame({ svg: complexExplorerDiagrams.quadrantIII, caption: 'z = &#8722;2 &#8722; 3i, frozen',
      text: 'Both legs reach into negative territory: a = &#8722;2 leftward, b = &#8722;3 downward. The hypotenuse still measures &#8730;13 &#8776; 3.61 &#8212; distance has no sign. The conjugate ghost now floats above the real axis.' }),
    quadrantIV: demoUnitFrame({ svg: complexExplorerDiagrams.quadrantIV, caption: 'z = 3 &#8722; 2i, frozen',
      text: 'The triangle hangs below the real axis: orange leg to 3, navy leg down to &#8722;2. The conjugate ghost hovers above at 3 + 2i &#8212; the mirror image across the orange real axis.' }),
  };

  // Per-state additions for the tool's on-screen explanation panel, keyed by
  // the engine's state (see ComplexExplorer). Appended after the built-in
  // dynamic lines; each anchors down to the state's dedicated section.
  const explanations = {
    origin: 'The origin is the plane’s anchor point — every modulus the tool reports is a distance measured from here. [Learn more about the origin](!#the-origin) · [All special cases](!#special-cases-axes-and-origin)',
    purelyReal: 'On the real axis the complex plane contains the ordinary number line, and complex modulus turns back into plain absolute value. [Learn more about purely real numbers](!#purely-real-numbers) · [All special cases](!#special-cases-axes-and-origin)',
    pureImaginary: 'The imaginary axis is where squaring turns negative: every number on it has a square that is real and non-positive. [Learn more about pure imaginary numbers](!#pure-imaginary-numbers) · [All special cases](!#special-cases-axes-and-origin)',
    quadrantI: 'Upper right is the tool’s home state — the textbook orientation of the modulus triangle. [Learn more about Quadrant I](!#quadrant-i-upper-right) · [All four quadrants](!#the-four-quadrants)',
    quadrantII: 'One sign flip from home: multiplying by i rotates Quadrant I onto this upper-left region. [Learn more about Quadrant II](!#quadrant-ii-upper-left) · [All four quadrants](!#the-four-quadrants)',
    quadrantIII: 'Both parts negative — the quadrant of additive inverses, point-reflected through the origin. [Learn more about Quadrant III](!#quadrant-iii-lower-left) · [All four quadrants](!#the-four-quadrants)',
    quadrantIV: 'The conjugate quadrant: every point here is the mirror image of a Quadrant I number. [Learn more about Quadrant IV](!#quadrant-iv-lower-right) · [All four quadrants](!#the-four-quadrants)',
  };

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      seoData,
      explanations,
      stateUnits
    }
  }
}

export default function ComplexExplorerPage({
  seoData,
  sectionsContent,
  introContent,
  faqQuestions,
  schemas,
  explanations,
  stateUnits
}) {

  const genericSections = [
    {
      id: 'how-to-use-the-complex-explorer',
      title: sectionsContent.obj1.title,
      link: sectionsContent.obj1.link,
      content: [sectionsContent.obj1.content]
    },
    {
      id: 'reading-the-display-panel',
      title: sectionsContent.obj2.title,
      link: sectionsContent.obj2.link,
      content: [sectionsContent.obj2.content]
    },
    {
      id: 'understanding-the-right-triangle',
      title: sectionsContent.obj3.title,
      link: sectionsContent.obj3.link,
      content: [sectionsContent.obj3.content]
    },
    {
      id: 'exploring-the-conjugate',
      title: sectionsContent.obj4.title,
      link: sectionsContent.obj4.link,
      content: [sectionsContent.obj4.content]
    },
    {
      id: 'special-cases-axes-and-origin',
      title: sectionsContent.obj5.title,
      link: sectionsContent.obj5.link,
      content: [sectionsContent.obj5.content]
    },
    {
      id: 'the-origin',
      title: sectionsContent.obj12.title,
      link: sectionsContent.obj12.link,
      content: [sectionsContent.obj12.content, <div key='u-origin' dangerouslySetInnerHTML={{ __html: stateUnits.origin }} />, sectionsContent.obj12.after]
    },
    {
      id: 'purely-real-numbers',
      title: sectionsContent.obj13.title,
      link: sectionsContent.obj13.link,
      content: [sectionsContent.obj13.content, <div key='u-purelyReal' dangerouslySetInnerHTML={{ __html: stateUnits.purelyReal }} />, sectionsContent.obj13.after]
    },
    {
      id: 'pure-imaginary-numbers',
      title: sectionsContent.obj14.title,
      link: sectionsContent.obj14.link,
      content: [sectionsContent.obj14.content, <div key='u-pureImaginary' dangerouslySetInnerHTML={{ __html: stateUnits.pureImaginary }} />, sectionsContent.obj14.after]
    },
    {
      id: 'the-four-quadrants',
      title: sectionsContent.obj6.title,
      link: sectionsContent.obj6.link,
      content: [sectionsContent.obj6.content]
    },
    {
      id: 'quadrant-i-upper-right',
      title: sectionsContent.obj15.title,
      link: sectionsContent.obj15.link,
      content: [sectionsContent.obj15.content, <div key='u-quadrantI' dangerouslySetInnerHTML={{ __html: stateUnits.quadrantI }} />, sectionsContent.obj15.after]
    },
    {
      id: 'quadrant-ii-upper-left',
      title: sectionsContent.obj16.title,
      link: sectionsContent.obj16.link,
      content: [sectionsContent.obj16.content, <div key='u-quadrantII' dangerouslySetInnerHTML={{ __html: stateUnits.quadrantII }} />, sectionsContent.obj16.after]
    },
    {
      id: 'quadrant-iii-lower-left',
      title: sectionsContent.obj17.title,
      link: sectionsContent.obj17.link,
      content: [sectionsContent.obj17.content, <div key='u-quadrantIII' dangerouslySetInnerHTML={{ __html: stateUnits.quadrantIII }} />, sectionsContent.obj17.after]
    },
    {
      id: 'quadrant-iv-lower-right',
      title: sectionsContent.obj18.title,
      link: sectionsContent.obj18.link,
      content: [sectionsContent.obj18.content, <div key='u-quadrantIV' dangerouslySetInnerHTML={{ __html: stateUnits.quadrantIV }} />, sectionsContent.obj18.after]
    },
    {
      id: 'what-is-a-complex-number',
      title: sectionsContent.obj7.title,
      link: sectionsContent.obj7.link,
      content: [sectionsContent.obj7.content]
    },
    {
      id: 'the-complex-plane-argand-diagram',
      title: sectionsContent.obj8.title,
      link: sectionsContent.obj8.link,
      content: [sectionsContent.obj8.content]
    },
    {
      id: 'modulus-and-the-pythagorean-theorem',
      title: sectionsContent.obj9.title,
      link: sectionsContent.obj9.link,
      content: [sectionsContent.obj9.content]
    },
    {
      id: 'complex-conjugates-and-their-properties',
      title: sectionsContent.obj10.title,
      link: sectionsContent.obj10.link,
      content: [sectionsContent.obj10.content]
    },
    {
      id: 'related-concepts-and-tools',
      title: sectionsContent.obj11.title,
      link: sectionsContent.obj11.link,
      content: [sectionsContent.obj11.content]
    }
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Complex Number Explorer</h1>
      <br/>
      <SiblingsNav maxWidth='100%'>
        <div style={{transform:'scale(0.95'}}>
      <ComplexExplorer explanations={explanations}/>
      </div>
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