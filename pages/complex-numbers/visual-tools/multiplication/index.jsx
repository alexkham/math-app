
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../pages.css'
import Head from 'next/head'
import ComplexMultiplicationVisualizer from '../../../../app/components/calculators/complex-numbers/ComplexMultiplicationVisualizer'
import SiblingsNav from '../../../../app/components/SiblingsNav'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import complexMultiplicationDiagrams from '../../../../app/components/calculators/complex-numbers/complexMultiplicationDiagrams'


export async function getStaticProps(){

  const keyWords = [
    "complex multiplication",
    "complex number multiplication",
    "multiply complex numbers",
    "complex multiplication visualizer",
    "FOIL complex numbers",
    "multiply magnitudes add angles",
    "complex multiplication geometry",
    "complex plane multiplication",
    "i squared equals negative one",
    "polar multiplication complex",
    "complex number product calculator",
    "rotation scaling complex plane",
    "interactive complex multiplication",
    "complex multiplication step by step",
    "algebraic complex multiplication"
  ]

    const sectionsContent={

    obj1:{
      title:`Getting Started — Drag and Multiply`,
      content:`Two draggable points represent the factors $z_1$ (navy) and $z_2$ (orange) on the complex plane. Grab either point and move it to see the green product vector $z_1 \\cdot z_2$ update in real time, along with the three angle arcs and both step-by-step solution panels.

You can also type values directly into the input fields on the right — each factor has separate real and imaginary inputs accepting values from $-10$ to $10$. Five preset configurations are available below the plane: $(2+i)(-1+2i)$, $(1+i)(1-i)$, $3 \\times 2i$, $i \\times i$, and $2(-3+4i)$. Click **Random** to generate two arbitrary factors. Each preset has a dedicated section below with the tool frozen on it: the [general case](!#reading-the-three-angle-arcs), [real scaling](!#multiplication-by-a-pure-real-number), [pure imaginary factors](!#multiplication-by-pure-imaginary-numbers), the [conjugate pair](!#conjugate-pair-multiplication), and [i × i](!#why-i-squared-equals-minus-one).

Each input panel shows the complex number in rectangular form alongside its modulus and argument, so you can track both the algebraic and geometric perspectives simultaneously.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`Reading the Three Angle Arcs`,
      content:`Three concentric arcs near the origin display the arguments of both factors and their product. The inner navy arc shows $\\theta_1$ (the argument of $z_1$), the middle orange arc shows $\\theta_2$ (the argument of $z_2$), and the outer green arc shows $\\theta_1 + \\theta_2$ (the argument of the product).

This is the geometric rule in action: **when you multiply complex numbers, angles add**. The green arc visually spans the combined rotation from both factors. Try clicking the preset $(2+i)(-1+2i)$ — the navy arc covers about $26.6°$, the orange arc covers about $116.6°$, and the green product arc covers their sum at $143.1°$.

Click $i \\times i$ to see the cleanest case: each factor has an angle of $90°$, so the product arc spans $180°$, placing the result at $-1$ on the negative real axis. This is the geometric proof that $i^2 = -1$ — two quarter-turn rotations compose into a half-turn.`,
      before:``,
      after:`The frozen frame is the opening preset, and it rewards close reading. The product $(2+i)(-1+2i) = -4+3i$ has modulus exactly $5$ — a hidden $3$–$4$–$5$ triangle — and the polar check agrees: $\\sqrt{5} \\times \\sqrt{5} = 5$. The [geometric method](!#the-geometric-polar-method) panel runs this same computation live.

The three arcs stack outward in the order of the calculation: inner factor angle, middle factor angle, outer sum. Whenever the outer arc crosses the $90°$ line while both inner arcs are in the first quadrant, you are watching the product leave the quadrant its factors live in — angle addition making something visibly new.`,
      link:'',
    },

    obj3:{
      title:`Multiplication by a Pure Real Number`,
      content:`Click the preset $2(-3+4i)$ to see what happens when one factor is purely real. The navy vector for $z_1 = 2$ lies flat on the positive real axis with $\\theta_1 = 0°$. Since its angle is zero, it contributes no rotation — only scaling.

The product $-6 + 8i$ points in the exact same direction as $z_2 = -3 + 4i$ but is twice as long. The green product vector is a stretched copy of the orange vector. The product's angle equals $\\theta_2$ unchanged because $\\theta_1 + \\theta_2 = 0° + \\theta_2 = \\theta_2$.

Now try changing $z_1$ to $-2$. A negative real number has $\\theta_1 = 180°$, so the product rotates $z_2$ by a half-turn (flipping it through the origin) and scales by $2$. The product is $6 - 8i$ — same magnitude, opposite direction.

This shows that multiplying by a positive real stretches without rotating, multiplying by a negative real stretches and flips, and multiplying by $1$ or $-1$ produces no scaling at all.`,
      before:``,
      after:`In the frozen frame the doubling is exactly at the limit of the window: $|{-3+4i}| = 5$, so the product $-6+8i$ has modulus $10$ and its point grazes the edge of the $\\pm 10$ grid. Push $z_1$ any higher and the green vector turns into the dashed ray described in [off-screen products](!#off-screen-products-and-the-zoom-inset).

Note also which arcs are missing: $z_1$ sits on the positive real axis, so there is no navy arc at all — and the orange factor arc and teal product arc coincide at $126.9°$. No rotation contributed, none observed. That is the pure-scaling half of the [rotation-and-scaling decomposition](!#complex-multiplication-as-rotation-and-scaling).`,
      link:'',
    },

    obj4:{
      title:`Multiplication by Pure Imaginary Numbers`,
      content:`Click $3 \\times 2i$ to see a real number multiplied by a pure imaginary. Here $z_1 = 3$ (angle $0°$) and $z_2 = 2i$ (angle $90°$). The product is $6i$ — the result sits on the positive imaginary axis at angle $90°$. Multiplication by $i$ rotates any vector $90°$ counterclockwise.

Now click $i \\times i$. Both factors are the imaginary unit with modulus $1$ and angle $90°$. The product has modulus $1 \\times 1 = 1$ and angle $90° + 90° = 180°$, landing at $-1$. This is the defining property $i^2 = -1$ demonstrated geometrically — two $90°$ rotations compose into a $180°$ rotation.

Try setting $z_1 = 0 + 2i$ and $z_2 = 0 + 3i$. Both are pure imaginary, so both angles are $90°$. The product angle is $180°$ and the modulus is $2 \\times 3 = 6$, giving $-6$. Two pure imaginary numbers always produce a negative real product because $90° + 90° = 180°$.`,
      before:``,
      after:`The frozen frame captures the quarter-turn in its purest useful form: a real number, $3$, lifted off the axis by the factor $2i$. Length doubles ($3 \\times 2 = 6$), direction turns by exactly $90°$, and the product $6i$ stands vertically. One factor supplies all the length change, the other all the rotation.

This is the halfway case between the two extremes on this page: [real factors](!#multiplication-by-a-pure-real-number) rotate nothing, and the [i × i preset](!#why-i-squared-equals-minus-one) rotates twice. The general rule that unifies them is spelled out in the [polar method](!#the-geometric-polar-method): moduli multiply, arguments add — whatever axes the factors start on.`,
      link:'',
    },

    obj5:{
      title:`Conjugate Pair Multiplication`,
      content:`Click $(1+i)(1-i)$ to see a conjugate pair. These two numbers have the same modulus ($\\sqrt{2}$) but opposite angles ($45°$ and $-45°$). Their angles cancel: $45° + (-45°) = 0°$, so the product lies on the positive real axis.

The product is $(1+i)(1-i) = 1 - i^2 = 1 + 1 = 2$. Geometrically, moduli multiply: $\\sqrt{2} \\times \\sqrt{2} = 2$. The result is always a positive real number — this is a general rule: $z \\cdot \\bar{z} = |z|^2$.

In the visualizer, the green product vector sits flat on the real axis. The navy arc points upward, the orange arc points downward by the same amount, and the green product arc vanishes because the total angle is zero.

Try setting $z_1 = 3 + 4i$ and $z_2 = 3 - 4i$. The product is $9 + 16 = 25$ — again a real number equal to $|z_1|^2 = 5^2 = 25$. This pattern is used extensively in complex division and rationalizing denominators.`,
      before:``,
      after:`The frozen frame shows the angle cancellation as symmetry: the navy arc rises to $45°$, the orange arc dips to $-45°$, and no teal arc is drawn at all — the product's argument is exactly zero. The two factor vectors are mirror images across the real axis, and their product $2$ sits between them on it.

Work the same case through the [FOIL panel](!#the-algebraic-foil-method) and the cancellation reappears algebraically: the two cross terms $-i$ and $+i$ annihilate, leaving $1 - i^2 = 2$. Two different mechanisms — angle arithmetic and term cancellation — forced to agree.`,
      link:'',
    },

    obj6:{
      title:`Off-Screen Products and the Zoom Inset`,
      content:`When both factors have large moduli, the product can exceed the visible $\\pm 10$ range. In this case the green product vector is replaced by a dashed ray pointing toward the edge of the plane, with an arrow and the label "$z_1 z_2 \\to$". The right panel still shows the exact numerical result even though the point is off-screen.

Try setting $z_1 = 8 + 6i$ and $z_2 = 5 + 5i$. The product modulus is $10 \\times 5\\sqrt{2} \\approx 70.7$ — far beyond the grid. The dashed ray indicates the direction, and the result panel gives the exact value.

Conversely, when the product modulus is very small (below $1$), a **zoom inset** appears in the upper-right corner of the plane. This magnified view shows a small grid around the origin with the product point plotted at readable scale. Try $z_1 = 0.3$ and $z_2 = 0.2 + 0.1i$ — the product is tiny, but the inset makes it clearly visible with its own labeled axes and coordinates.

These two features ensure every product is readable regardless of magnitude.`,
      before:``,
      after:``,
      link:'',
    },

    obj7:{
      title:`The Algebraic (FOIL) Method`,
      content:`The **Algebraic Method** panel shows the full FOIL expansion step by step. For two complex numbers $(a + bi)(c + di)$, the four terms are:

$$ac + adi + bci + bdi^2$$

Since $i^2 = -1$, the last term becomes $-bd$. Collecting real and imaginary parts gives:

$$(ac - bd) + (ad + bc)i$$

The panel substitutes your current values and walks through each stage: the four FOIL products, combining the $i$ terms, replacing $i^2$ with $-1$, and arriving at the final result.

Try $(2 + i)(-1 + 2i)$ to see a worked example: the four terms are $-2 + 4i + (-i) + 2i^2 = -2 + 3i - 2 = -4 + 3i$. Each intermediate value updates in real time as you adjust the inputs, making this a dynamic FOIL calculator for any pair of complex numbers.`,
      before:``,
      after:``,
      link:'',
    },

    obj8:{
      title:`The Geometric (Polar) Method`,
      content:`The **Geometric Method** panel shows the polar interpretation of multiplication in two lines:

$$|z_1| \\times |z_2| = |z_1 z_2|$$
$$\\theta_1 + \\theta_2 = \\theta_{\\text{product}}$$

Moduli multiply and arguments add. This is why polar form makes multiplication simple — instead of four FOIL terms and an $i^2$ substitution, you just do one multiplication and one addition.

Using **Euler's formula**, $z_1 z_2 = r_1 e^{i\\theta_1} \\cdot r_2 e^{i\\theta_2} = r_1 r_2 \\cdot e^{i(\\theta_1 + \\theta_2)}$. The exponential form turns multiplication of complex numbers into multiplication of real magnitudes and addition of exponents.

The panel also provides a plain-English summary: "The product vector is [modulus] units long at [angle] from the real axis." This sentence combines both polar components into one geometric description. Compare this to the multi-line algebraic expansion above — for multiplication, the polar approach is dramatically simpler.`,
      before:``,
      after:``,
      link:'',
    },

    obj9:{
      title:`Complex Multiplication as Rotation and Scaling`,
      content:`Every complex multiplication can be decomposed into two geometric operations: **scaling** (changing length) and **rotation** (changing angle).

Multiplying $z_1$ by $z_2$ scales $z_1$ by the factor $|z_2|$ and rotates it counterclockwise by $\\theta_2$. Equivalently, it scales $z_2$ by $|z_1|$ and rotates by $\\theta_1$ — the result is the same either way because multiplication is commutative.

When $|z_2| = 1$ (the factor lies on the unit circle), multiplication is a pure rotation with no scaling. Set $z_2$ to any point on the unit circle — for example $z_2 = \\cos(60°) + i\\sin(60°) \\approx 0.5 + 0.87i$ — and watch $z_1$ rotate by $60°$ without changing length.

When $\\theta_2 = 0$ (the factor is a positive real number), multiplication is pure scaling with no rotation. The product points in the same direction as $z_1$ but is stretched or compressed.

This rotation-scaling interpretation is the reason complex multiplication appears throughout physics, signal processing, and computer graphics — it naturally encodes combined scale-and-rotate transformations in a single operation.`,
      before:``,
      after:``,
      link:'',
    },

    obj10:{
      title:`Why i² = −1 Makes Geometric Sense`,
      content:`The preset $i \\times i$ gives the most fundamental demonstration. The imaginary unit $i$ has modulus $1$ and argument $90°$. Multiplying by $i$ means "rotate $90°$ counterclockwise and scale by $1$" — a pure quarter-turn.

Applying this twice: $i \\times i = i^2$. Two quarter-turns make a half-turn ($90° + 90° = 180°$), which places the result at $-1$ on the negative real axis. The length stays $1 \\times 1 = 1$, so the result is exactly $-1$. This is the geometric reason behind the algebraic definition $i^2 = -1$.

Continuing: $i^3 = i^2 \\cdot i = -1 \\cdot i = -i$ (a $270°$ rotation), and $i^4 = i^3 \\cdot i = -i \\cdot i = 1$ (a full $360°$ rotation returning to $1$). This connects directly to the **powers of i** cycle: $1 \\to i \\to -1 \\to -i \\to 1$.

You can verify each step in the visualizer by setting one factor to $i$ and the other to successive powers.`,
      before:``,
      after:`The frozen frame is the smallest possible multiplication picture: both factors are the same unit point, so the navy and orange markers coincide at $i$, their arcs overlap at $90°$, and the teal arc sweeps the full half-turn to land the product on $-1$. Nothing has any length to spare — every modulus involved is $1$ — so the entire event is rotation.

Read against the [three-arc anatomy](!#reading-the-three-angle-arcs), this is the case where the diagram's whole vocabulary collapses to one statement: a quarter turn done twice is a half turn. The algebra $i^2 = -1$ is that sentence written in symbols.`,
      link:'',
    },

//     obj11:{
//       title:`Related Concepts and Tools`,
//       content:`Complex multiplication connects to many areas of complex number theory and applied mathematics. Explore these related pages.

// **Complex Addition & Subtraction Visualizer** — while addition works component-wise (no cross-terms), multiplication involves the FOIL expansion and the $i^2 = -1$ rule. Compare how the two operations look geometrically.

// **Polar-Rectangular Converter** — convert between $a + bi$ and $re^{i\\theta}$ forms. Polar form is where multiplication becomes simple: multiply moduli, add angles.

// **Euler's Formula Explorer** — the identity $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ is the theoretical foundation for the polar multiplication rule.

// **Powers of i Calculator** — the cyclic pattern $i^0 = 1, i^1 = i, i^2 = -1, i^3 = -i$ is a direct consequence of repeated multiplication by $i$.

// **Complex Number Explorer** — a general-purpose tool for all complex operations on the plane.

// **De Moivre's Theorem** — extends the multiplication rule to powers: $(re^{i\\theta})^n = r^n e^{in\\theta}$.`,
//       before:``,
//       after:``,
//       link:'',
//     },

obj11:{
  title:`Related Concepts and Tools`,
  content:`Multiplication is where complex numbers stop feeling like algebra and start feeling like geometry. The "multiply lengths, add angles" rule connects everything else in the toolkit.

The immediate next step from here is [Division](!/complex-numbers/visual-tools/division) — it's the same geometric rule run backwards. Where multiplication adds angles and multiplies moduli, division subtracts angles and divides moduli. Running both tools with the same two points side by side makes the inverse relationship clear in a way that algebra alone doesn't.

The geometric method here — angles and moduli — only makes sense in polar form, so the [Polar & Rectangular Converter](!/complex-numbers/visual-tools/polar-rectangular) is the natural companion. Every pair of values in the polar panel here ($|z_1|$, $\\theta_1$, $|z_2|$, $\\theta_2$) corresponds directly to what that converter shows for a single number.

The "multiplying by $i$ rotates by 90°" idea in the $i \\times i$ preset is the seed of something bigger. The [Powers of i Calculator](!/complex-numbers/visual-tools/i-powers) follows that single observation through its full cycle — each multiplication by $i$ is another 90° rotation, producing the $i, -1, -i, 1$ pattern directly from the geometry you see here.

And if you want to see what happens when you apply this operation repeatedly to the same number, [De Moivre's Theorem](!/complex-numbers/visual-tools/demoivre-visualizer) is exactly that — multiplying $z$ by itself $n$ times, with the spiral trail showing each intermediate step.`,
  before:``,
  after:``,
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
      question: "How do you multiply two complex numbers?",
      answer: "Use FOIL: (a + bi)(c + di) = ac + adi + bci + bdi². Since i² = −1, this simplifies to (ac − bd) + (ad + bc)i. Alternatively, in polar form, multiply the moduli and add the arguments."
    },
    obj2: {
      question: "What does complex multiplication look like geometrically?",
      answer: "Multiplying z₁ by z₂ scales z₁ by the length of z₂ and rotates it by the angle of z₂. The product modulus is |z₁|·|z₂| and the product angle is θ₁ + θ₂. This is why polar form makes multiplication simple."
    },
    obj3: {
      question: "Why does i² equal −1 geometrically?",
      answer: "The imaginary unit i has modulus 1 and angle 90°. Multiplying by i means rotating 90° counterclockwise. Two rotations of 90° give 180°, placing the result at −1 on the negative real axis. Two quarter-turns equal a half-turn."
    },
    obj4: {
      question: "What happens when you multiply complex conjugates?",
      answer: "Conjugates z = a + bi and z̄ = a − bi have equal moduli but opposite angles, so their angles cancel and the product is always a positive real number: z · z̄ = a² + b² = |z|²."
    },
    obj5: {
      question: "Why is polar form better for complex multiplication?",
      answer: "In polar form, multiplication reduces to multiplying two real numbers (moduli) and adding two angles. The algebraic FOIL method requires four products and an i² substitution. Polar form is simpler because Euler's formula converts multiplication into exponent addition."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Complex Multiplication Visualizer",
      "description": "Interactive complex multiplication tool showing both FOIL algebraic steps and polar geometric interpretation. Drag points, see angle arcs, and explore rotation and scaling on the complex plane.",
      "url": "https://www.learnmathclass.com/complex-numbers/visual-tools/multiplication",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Two draggable complex number factors with independent input fields",
        "Three concentric angle arcs showing θ₁, θ₂, and θ₁+θ₂",
        "Full FOIL algebraic expansion with step-by-step substitution",
        "Polar geometric method showing modulus multiplication and angle addition",
        "Zoom inset for small products and ray-to-edge for off-screen products",
        "Five presets including conjugate pair and i×i demonstrations",
        "Real-time modulus and argument display for all three vectors"
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
          "name": "Complex Multiplication Visualizer",
          "item": "https://www.learnmathclass.com/complex-numbers/visual-tools/multiplication"
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
    general: demoUnitFrame({ svg: complexMultiplicationDiagrams.general, caption: '(2+i)(&#8722;1+2i), frozen',
      text: 'All three arcs in play: navy 26.6° plus orange 116.6° gives the teal 143.1°, and the product &#8722;4 + 3i lands at modulus 5 — the lengths &#8730;5 × &#8730;5 multiplied.' }),
    conjugateProduct: demoUnitFrame({ svg: complexMultiplicationDiagrams.conjugateProduct, caption: '(1+i)(1&#8722;i), frozen',
      text: 'Mirror-image factors: the navy arc rises 45°, the orange arc dips &#8722;45°, and no product arc is drawn — the angles cancel and the product 2 sits flat on the real axis.' }),
    realTimesImaginary: demoUnitFrame({ svg: complexMultiplicationDiagrams.realTimesImaginary, caption: '3 × 2i, frozen',
      text: 'A real number turned imaginary: the factor 2i doubles the length and turns 3 by a quarter circle, standing the product 6i upright on the imaginary axis.' }),
    iTimesI: demoUnitFrame({ svg: complexMultiplicationDiagrams.iTimesI, caption: 'i × i, frozen',
      text: 'Both factor points coincide at i. Two 90° arcs stack into the teal half-turn, and the product lands on &#8722;1: the geometric fact behind i&#178; = &#8722;1.' }),
    realScaling: demoUnitFrame({ svg: complexMultiplicationDiagrams.realScaling, caption: '2(&#8722;3+4i), frozen',
      text: 'Pure stretch: no navy arc exists because 2 has angle zero. The product &#8722;6 + 8i points exactly where &#8722;3 + 4i pointed, twice as far — modulus 10, grazing the window edge.' }),
  };

  // Per-state additions for the tool's Key Ideas panel, keyed by the preset
  // pair currently loaded (see ComplexMultiplicationVisualizer).
  const explanations = {
    general: 'This opening pair hides a 3-4-5 triangle: √5 × √5 = 5, at 26.6° + 116.6° = 143.1°. [Learn more about the angle arcs](!#reading-the-three-angle-arcs) · [Getting started](!#getting-started-drag-and-multiply)',
    conjugateProduct: 'Opposite angles cancel to zero — a conjugate product always lands on the positive real axis. [Learn more about conjugate products](!#conjugate-pair-multiplication) · [Getting started](!#getting-started-drag-and-multiply)',
    realTimesImaginary: 'The 2i factor does both jobs at once: doubles the length, turns the direction 90°. [Learn more about imaginary factors](!#multiplication-by-pure-imaginary-numbers) · [Getting started](!#getting-started-drag-and-multiply)',
    iTimesI: 'Two quarter-turns make a half-turn: the geometric reading of i² = −1. [Learn more about why i² = −1](!#why-i-squared-equals-minus-one) · [Getting started](!#getting-started-drag-and-multiply)',
    realScaling: 'A real factor rotates nothing — the product keeps z₂’s direction and doubles its length. [Learn more about real factors](!#multiplication-by-a-pure-real-number) · [Getting started](!#getting-started-drag-and-multiply)',
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
        title: "Complex Multiplication Visualizer | Learn Math Class",
        description: "Visualize complex multiplication with draggable vectors. See FOIL steps, polar angle addition, rotation and scaling, and special cases like i² = −1 in real time.",
        keywords: keyWords.join(", "),
        url: "/complex-numbers/visual-tools/multiplication",
        hubDescription: "See complex multiplication as rotation and scaling. Drag two points and watch the product vector update — moduli multiply, angles add. Follow both the FOIL algebraic method and the geometric polar method side by side.",
        category: "Arithmetic",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="8" y1="48" x2="74" y2="48" stroke="#B5D4F4" stroke-width="0.9"/><line x1="34" y1="12" x2="34" y2="66" stroke="#B5D4F4" stroke-width="0.9"/><line x1="34" y1="48" x2="48.5" y2="41.24" stroke="#85B7EB" stroke-width="1.9"/><line x1="34" y1="48" x2="44.72" y2="39" stroke="#97C459" stroke-width="1.9"/><line x1="34" y1="48" x2="44.99" y2="24.44" stroke="#FAC775" stroke-width="2.3"/><path d="M 42 48 A 8 8 0 0 0 41.25 44.62" fill="none" stroke="#85B7EB" stroke-width="1.2"/><path d="M 43.97 43.35 A 11 11 0 0 0 38.65 38.03" fill="none" stroke="#97C459" stroke-width="1.2"/><circle cx="48.5" cy="41.24" r="2.5" fill="#85B7EB" stroke="#0C447C" stroke-width="1"/><circle cx="44.72" cy="39" r="2.5" fill="#97C459" stroke="#27500A" stroke-width="1"/><circle cx="44.99" cy="24.44" r="3.4" fill="#FAC775" stroke="#854F0B" stroke-width="1.2"/><text x="40" y="72" font-family="Georgia,serif" font-size="7.5" fill="#C0DD97" text-anchor="middle" font-style="italic">&#952;&#8321; + &#952;&#8322;</text></svg>`,
         name: "Complex Multiplication Visualizer"
      },
        
       }
    }
   }

export default function PageTemplate({seoData, sectionsContent, introContent, faqQuestions, schemas, explanations, stateUnits}) {

    
  const genericSections=[
    {
        id:'getting-started-drag-and-multiply',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'reading-the-three-angle-arcs',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
          <div key='u-general' dangerouslySetInnerHTML={{ __html: stateUnits.general }} />,
          sectionsContent.obj2.after,
        ]
    },
    {
        id:'multiplication-by-a-pure-real-number',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
          <div key='u-realScaling' dangerouslySetInnerHTML={{ __html: stateUnits.realScaling }} />,
          sectionsContent.obj3.after,
        ]
    },
    {
        id:'multiplication-by-pure-imaginary-numbers',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <div key='u-realTimesImaginary' dangerouslySetInnerHTML={{ __html: stateUnits.realTimesImaginary }} />,
          sectionsContent.obj4.after,
        ]
    },
    {
        id:'conjugate-pair-multiplication',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
          <div key='u-conjugateProduct' dangerouslySetInnerHTML={{ __html: stateUnits.conjugateProduct }} />,
          sectionsContent.obj5.after,
        ]
    },
    {
        id:'off-screen-products-and-the-zoom-inset',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'the-algebraic-foil-method',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    {
        id:'the-geometric-polar-method',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
    {
        id:'complex-multiplication-as-rotation-and-scaling',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'why-i-squared-equals-minus-one',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
          <div key='u-iTimesI' dangerouslySetInnerHTML={{ __html: stateUnits.iTimesI }} />,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Complex Numbers Multiplication</h1>
   <br/>
   <SiblingsNav maxWidth='100%'>
   <ComplexMultiplicationVisualizer explanations={explanations}/>
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