
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import DeMoivreCalculator from '../../../../app/components/calculators/complex-numbers/DeMoivreCalculator'
import SiblingsNav from '../../../../app/components/SiblingsNav'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import deMoivreDiagrams from '../../../../app/components/calculators/complex-numbers/deMoivreDiagrams'

export async function getStaticProps(){

  const keyWords = [
    "de moivre's theorem",
    "de moivre calculator",
    "complex number power",
    "de moivre's theorem visualizer",
    "complex exponentiation",
    "raise complex number to power",
    "de moivre formula",
    "cos theta i sin theta power n",
    "complex power calculator",
    "polar form exponentiation",
    "complex number nth power",
    "de moivre interactive",
    "spiral complex powers",
    "negative exponent complex number",
    "complex power step by step"
  ]

    const sectionsContent={

    obj1:{
      title:`Getting Started — Set z and Choose n`,
      content:`Drag the navy point $z$ anywhere on the complex plane, or type values into the Re and Im input fields (range $\\pm 10$). Then set the exponent $n$ using the slider ($-10$ to $10$), the input field ($-20$ to $20$), or one of seven presets: $(1+i)^2$, $(1+i)^4$, $i^3$, $(1+i)^8$, $(3+4i)^{-1}$, $2^{10}$, and $(0.5+0.5i)^6$. Each preset has a dedicated section below with the tool frozen on it: the [squaring baseline](!#the-squaring-baseline), the [outward spiral](!#the-outward-spiral-when-z-1), [escaping the window](!#escaping-the-window), the [inward spiral](!#the-inward-spiral-when-z-1), [unit circle rotation](!#unit-circle-rotation-when-z-1), [negative exponents](!#negative-exponents-reciprocals-and-reversal), and the [pure real base](!#pure-real-base-no-spiral-just-scaling).

The green result vector $z^n$ updates instantly along with the step-by-step panel, polar values, and the purple intermediate power trail. Click **Random** to generate a random base and exponent.

The input summary on the right shows $z$ in rectangular form, its modulus $|z|$, its argument $\\theta$ in both degrees and radians, and the current exponent $n$. All values update in real time as you drag or type.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`The Outward Spiral — When |z| > 1`,
      content:`Click $(1+i)^4$ to see the classic outward spiral. Since $|1+i| = \\sqrt{2} \\approx 1.414 > 1$, each successive power has a larger modulus: $|z^k| = |z|^k$ grows with $k$. The purple trail dots $z^1, z^2, z^3$ fan outward from the origin, connected by a dashed polyline.

At each step the angle also increases by $\\theta = 45°$, so the trail rotates $45°$ per step while expanding. The result $(1+i)^4 = -4$ lands on the negative real axis at angle $4 \\times 45° = 180°$ with modulus $(\\sqrt{2})^4 = 4$.

Now click $(1+i)^8$. The spiral extends further — the modulus reaches $(\\sqrt{2})^8 = 16$ — but the angle wraps back to $8 \\times 45° = 360° = 0°$, placing the result at $+16$ on the positive real axis. The trail makes two full revolutions.

Try increasing $n$ with the slider while watching the spiral grow. Each click of $n$ adds one more purple dot and pushes the green result further outward.`,
      before:``,
      after:`The frozen frame catches the fourth power mid-flight: three purple dots at $1+i$, $2i$, and $-2+2i$, each $45°$ further around and $\\sqrt{2}$ times further out, before the teal vector lands on $-4$. Both dashed circles are visible — the small navy one at $|z| = \\sqrt{2}$ and the teal one at $|z^4| = 4$ — with the whole [trail](!#reading-the-purple-trail-and-modulus-circles) strung between them.

The landing point deserves a second look: $(1+i)^4$ is a **negative real number**, reached without a single negative sign in the base. Angle accumulation did it — four lots of $45°$ make the half-turn. Push on to the eighth power and the spiral [escapes the window](!#escaping-the-window) entirely.`,
      link:'',
    },

    obj3:{
      title:`The Inward Spiral — When |z| < 1`,
      content:`Click $(0.5 + 0.5i)^6$ to see the inward spiral. Since $|0.5 + 0.5i| = \\frac{\\sqrt{2}}{2} \\approx 0.707 < 1$, each power has a smaller modulus: $|z^k| = |z|^k$ shrinks toward zero. The purple trail dots spiral inward, converging on the origin.

The result modulus is $(0.707)^6 \\approx 0.125$ — very small. The zoom inset appears in the upper-right corner of the plane, magnifying the area near the origin so the green result point is visible and labeled.

This behavior is the opposite of the outward spiral: if $|z| < 1$, repeated multiplication pulls the point closer to zero. The angle still accumulates ($6 \\times 45° = 270°$), but the distance from the origin shrinks exponentially.

Drag $z$ to any point inside the unit circle and increase $n$ to see the inward spiral get tighter. The higher the exponent, the closer the result is to zero.`,
      before:``,
      after:`The frozen frame shows both of the tool's smallness devices at once: five purple dots coiling into the origin, and the zoom inset in the corner magnifying the final $-0.125i$ that would otherwise be invisible at full scale.

Note the symmetry with [the outward spiral](!#the-outward-spiral-when-z-1): this base is exactly half of $1+i$, same $45°$ angle, and the two spirals are mirror processes — one compounds, one decays. The boundary between them is the unit circle, explored in [the rotation state](!#unit-circle-rotation-when-z-1), where powers neither grow nor shrink.`,
      link:'',
    },

    obj4:{
      title:`Unit Circle Rotation — When |z| = 1`,
      content:`Set $z = i$ (type Re = 0, Im = 1) so that $|z| = 1$. Now slide $n$ from $1$ to $4$. Because $|z| = 1$, the modulus never changes: $|z^n| = 1^n = 1$. Every power stays on the unit circle — the trail dots form a perfect arc with no spiraling.

At $n = 1$: $i^1 = i$ (angle $90°$). At $n = 2$: $i^2 = -1$ (angle $180°$). At $n = 3$: $i^3 = -i$ (angle $270°$). At $n = 4$: $i^4 = 1$ (angle $360° = 0°$). The dashed modulus circles for $z$ and the result overlap because both have radius $1$.

Click the $i^3$ preset to see three purple trail dots evenly spaced $90°$ apart on the unit circle, ending at $-i$.

This is why **powers of i** cycle every four steps. On the unit circle, De Moivre's theorem is pure rotation: the modulus is fixed and only the angle changes. Any point on the unit circle produces this behavior — try $z = \\cos(60°) + i\\sin(60°)$ and watch the dots walk around the circle in $60°$ steps.`,
      before:``,
      after:`The frozen $i^3$ frame is the smallest complete example: two trail dots at $i$ and $-1$, the result at $-i$, and the navy and teal dashed circles perfectly superimposed at radius $1$ — the visual signature of a modulus that refuses to change.

The teal $n\\theta$ arc sweeps clockwise to $-90°$ rather than counterclockwise to $270°$: the tool normalizes result angles into $(-180°, 180°]$, and the two descriptions name the same point. This unit-circle behavior is also where [roots of unity](!#connection-to-roots-of-unity) live — points whose powers walk in place around the circle and come home.`,
      link:'',
    },

    obj5:{
      title:`Negative Exponents — Reciprocals and Reversal`,
      content:`Click $(3+4i)^{-1}$ to see a negative exponent. De Moivre's theorem handles negative powers naturally: $z^{-n} = r^{-n} \\cdot e^{-in\\theta}$. The modulus shrinks (reciprocal) and the angle reverses (negative direction).

Here $|3+4i| = 5$, so $|z^{-1}| = 1/5 = 0.2$. The angle is $\\theta \\approx 53.1°$, so the result angle is $-53.1°$. The green vector is short and points below the real axis — the reciprocal is a tiny vector in the opposite angular direction.

Try sliding $n$ into negative values with any base. The trail reverses: instead of spiraling outward (for $|z| > 1$), it spirals inward. Instead of accumulating angle, it subtracts angle.

At $n = 0$, the result is always $z^0 = 1$ regardless of $z$ — the green point sits at $(1, 0)$ on the positive real axis. This is the boundary between positive and negative exponents.`,
      before:``,
      after:`The frozen frame pairs the extremes: the navy $z = 3+4i$ reaching out to modulus $5$, and its reciprocal caught in the zoom inset at modulus $0.2$ — the two moduli multiplying to exactly $1$, as reciprocals must. The teal $n\\theta$ arc dips below the axis to $-53.1°$, the mirror of the base's angle above it.

Reciprocal-taking is the one power that ties directly back to division: $z^{-1} = \\bar{z}/|z|^2$, so this preset's answer $0.12 - 0.16i$ is just $\\frac{3-4i}{25}$ — the conjugate shrunk by the squared modulus. The [five-step panel](!#the-five-step-calculation) reaches the same place through polar arithmetic alone.`,
      link:'',
    },

    obj6:{
      title:`Pure Real Base — No Spiral, Just Scaling`,
      content:`Click $2^{10}$ to see a purely real base. Since $z = 2$ has angle $\\theta = 0°$, every power also has angle $0°$: the result sits on the positive real axis. The modulus is $2^{10} = 1024$ — far off-screen — so the green result appears as a dashed ray pointing right with an arrow.

The purple trail dots $z^1, z^2, \\dots, z^9$ march along the positive real axis, each one doubling the previous — though only $2$, $4$, and $8$ remain inside the visible window. There is no rotation because $n \\times 0° = 0°$ for any $n$.

Now try changing $z$ to $-2$ (angle $180°$). The powers alternate between the positive and negative real axes: $(-2)^1 = -2$, $(-2)^2 = 4$, $(-2)^3 = -8$, and so on. The trail zigzags left and right along the real axis, growing in magnitude. The angle alternates between $0°$ and $180°$ because $n \\times 180°$ is $0°$ for even $n$ and $180°$ for odd $n$.`,
      before:``,
      after:`The frozen frame is De Moivre's theorem with the rotation half switched off: no arcs anywhere, three doubling dots on the axis, and the dashed ray carrying the invisible $1024$ off to the right. Ordinary real exponentiation is the $\\theta = 0$ slice of the complex theory.

That reading runs both ways: real powers were never a different subject, just the special case where angle multiplication has nothing to multiply. Compare the fully angular opposite — [the unit-circle state](!#unit-circle-rotation-when-z-1), where **only** the angle moves — and the general spirals are every mixture in between.`,
      link:'',
    },

    obj7:{
      title:`Reading the Purple Trail and Modulus Circles`,
      content:`The **purple trail** shows every intermediate power from $z^1$ up to $z^{n-1}$ (for positive $n$) or from $z^{-1}$ down to $z^{-(|n|-1)}$ (for negative $n$). Each dot is labeled with its power. A dashed polyline connects them in order, tracing the spiral path from $z$ to the final result.

Two **dashed modulus circles** appear when relevant. The inner navy circle has radius $|z|$ — the modulus of the base. The outer green circle has radius $|z^n|$ — the modulus of the result. When $|z| > 1$, the result circle is larger; when $|z| < 1$, it is smaller. When $|z| = 1$, both circles coincide.

Two **angle arcs** appear near the origin. The navy arc labeled $\\theta$ shows the argument of $z$. The green arc labeled $n\\theta$ shows the argument of $z^n$. The green arc is always $n$ times as wide as the navy arc — this is the "multiply the angle" rule of De Moivre's theorem made visible.`,
      before:``,
      after:``,
      link:'',
    },

    obj8:{
      title:`The Five-Step Calculation`,
      content:`The **Step-by-Step** panel on the right walks through De Moivre's theorem in five numbered stages.

**Step 1** — convert $z$ to polar form: $z = r \\cdot e^{i\\theta}$, showing the computed modulus and argument.

**Step 2** — state the theorem: $(r \\cdot e^{i\\theta})^n = r^n \\cdot e^{in\\theta}$.

**Step 3** — raise the modulus to the $n$-th power: $|z|^n = r^n$.

**Step 4** — multiply the angle by $n$: $n\\theta$. If the result exceeds $\\pm 180°$, a normalized angle also appears.

**Step 5** — convert back to rectangular form using $\\cos(n\\theta)$ and $\\sin(n\\theta)$, showing the evaluation and the final complex number.

Every value in every step updates dynamically with each drag, keystroke, or slider change. This makes the panel a live worked example for any base-exponent combination you choose.`,
      before:``,
      after:``,
      link:'',
    },

    obj9:{
      title:`What is De Moivre's Theorem?`,
      content:`**De Moivre's theorem** states that for any integer $n$:

$$(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$$

In exponential notation using **Euler's formula**:

$$(re^{i\\theta})^n = r^n \\cdot e^{in\\theta}$$

Raising a complex number to a power means raising the modulus to that power and multiplying the angle by $n$. This converts exponentiation — normally a difficult operation in rectangular form — into a simple combination of real exponentiation and angle multiplication.

The theorem is a direct consequence of Euler's formula and the laws of exponents. Since $e^{i\\theta}$ is a complex exponential, $(e^{i\\theta})^n = e^{in\\theta}$ follows from the rule $a^{mn} = (a^m)^n$.

De Moivre's theorem works for all integers $n$ — positive, negative, and zero. It is also the foundation for finding **roots of unity** and deriving trigonometric identities for $\\cos(n\\theta)$ and $\\sin(n\\theta)$ in terms of powers of $\\cos\\theta$ and $\\sin\\theta$.`,
      before:``,
      after:``,
      link:'',
    },

    obj10:{
      title:`Connection to Roots of Unity`,
      content:`De Moivre's theorem in reverse gives the $n$-th roots of any complex number. The $n$-th roots of unity — the solutions to $z^n = 1$ — are:

$$z_k = e^{i \\cdot 2\\pi k / n} = \\cos\\frac{2\\pi k}{n} + i\\sin\\frac{2\\pi k}{n}, \\quad k = 0, 1, \\dots, n-1$$

These $n$ points are equally spaced around the unit circle, separated by angles of $\\frac{360°}{n}$.

In the visualizer, set $z$ to any $n$-th root of unity and raise it to the $n$-th power — the result will always be $1$. For example, set $z = \\cos(72°) + i\\sin(72°) \\approx 0.31 + 0.95i$ and $n = 5$. The trail traces five equally spaced dots around the unit circle, and the result lands at $1$.

Roots of unity appear throughout mathematics: in Fourier transforms, polynomial factoring, and group theory. De Moivre's theorem is the computational tool that makes finding and verifying these roots straightforward.`,
      before:``,
      after:``,
      link:'',
    },

//     obj11:{
//       title:`Related Concepts and Tools`,
//       content:`De Moivre's theorem ties together many areas of complex number theory. Explore these related pages.

// **Euler's Formula Explorer** — the identity $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ is the foundation of De Moivre's theorem. The explorer visualizes the unit circle trace and the right triangle connection.

// **Complex Multiplication Visualizer** — multiplication is the single-step version of De Moivre: multiply moduli, add angles. Repeated multiplication gives exponentiation.

// **Polar-Rectangular Converter** — De Moivre's theorem requires polar form. This converter handles the conversion between $a + bi$ and $re^{i\\theta}$.

// **Powers of i Calculator** — the $i^n$ cycle is a special case of De Moivre with $r = 1$ and $\\theta = 90°$. The mod 4 pattern emerges because $4 \\times 90° = 360°$.

// **Complex Division Visualizer** — division subtracts angles and divides moduli, the inverse of the power operation.

// **Complex Numbers** — foundational theory covering the imaginary unit, algebraic operations, and the modulus-argument representation.`,
//       before:``,
//       after:``,
//       link:'',
//     },

obj11:{
  title:`Related Concepts and Tools`,
  content:`De Moivre's theorem only makes sense in polar form — the whole point is that exponentiation becomes trivial when you write $z = re^{i\\theta}$. The tools below build up everything this theorem depends on.

The essential prerequisite is the [Polar & Rectangular Converter](!/complex-numbers/visual-tools/polar-rectangular). De Moivre's theorem lives entirely in polar coordinates — $r$ gets raised to the $n$th power, $\\theta$ gets multiplied by $n$. If you want to understand why the step-by-step panel here converts to polar first, that tool shows the conversion geometry in full detail.

Right behind it is [Euler's Formula Explorer](!/complex-numbers/visual-tools/euler-formula). The exponential notation $re^{i\\theta}$ is not just shorthand — it is why De Moivre's theorem works at all. $(re^{i\\theta})^n = r^n e^{in\\theta}$ follows directly from the exponent rules once you accept Euler's formula.

The [Multiplication Visualizer](!/complex-numbers/visual-tools/multiplication) shows the single-step version of what this tool does repeatedly. Each intermediate power in the purple trail is one more multiplication — modulus scales by $|z|$, angle shifts by $\\theta$. The trail you see here is that operation applied $n$ times in sequence.

Finally, for the unit circle behavior — where $|z| = 1$ and powers only rotate — the [Powers of i Calculator](!/complex-numbers/visual-tools/i-powers) is the cleanest special case. Setting $r = 1$ and $\\theta = 90°$ here reproduces exactly the $i, -1, -i, 1$ cycle that tool is built around.`,
  before:``,
  after:``,
  link:'',
},

    obj12:{
      title:`The Squaring Baseline`,
      content:`The preset $(1+i)^2$ is the smallest possible use of the theorem — one multiplication — and the cleanest place to check the machinery against plain algebra.`,
      before:``,
      after:`FOIL gives the answer in one line: $(1+i)^2 = 1 + 2i + i^2 = 2i$. De Moivre's route agrees from the other direction: modulus $(\\sqrt{2})^2 = 2$, angle $2 \\times 45° = 90°$, which is $2i$ exactly. Two completely different computations, one point on the imaginary axis.

The frozen frame is deliberately spare — a single trail dot sitting under $z$ itself, the base's $45°$ arc doubled to the result's $90°$ — because at $n = 2$ the theorem barely differs from [one complex multiplication](!#what-is-de-moivres-theorem). Every larger exponent on this page is this step iterated: the same base squared again gives [the fourth power](!#the-outward-spiral-when-z-1), and twice more, [the eighth](!#escaping-the-window).`,
      link:'',
    },

    obj13:{
      title:`Escaping the Window`,
      content:`The preset $(1+i)^8$ pushes the outward spiral past the edge of the visible plane: the result, $+16$, is real, positive — and outside the $\\pm 10$ window.`,
      before:``,
      after:`The tool answers with its off-screen convention: a dashed teal ray aimed along the positive real axis, arrowhead at the boundary, label pointing at the unreachable $z^8$. The direction is exact even though the endpoint is not drawn — and the seven trail dots, the last of them at $8 - 8i$, still trace the two full revolutions that got there.

The arithmetic behind the direction: $8 \\times 45° = 360°$, a whole number of turns, so the eighth power comes home to the positive real axis with modulus $(\\sqrt{2})^8 = 16$. Squaring [the fourth power's](!#the-outward-spiral-when-z-1) $-4$ confirms it: $(-4)^2 = 16$.

No teal $n\\theta$ arc appears in this frame — the normalized result angle is $0°$, so there is no angle left to draw. Growth without net rotation: the opposite corner of the theorem from [the unit-circle state](!#unit-circle-rotation-when-z-1).`,
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
      question: "What is De Moivre's theorem?",
      answer: "De Moivre's theorem states that (cos θ + i sin θ)^n = cos(nθ) + i sin(nθ) for any integer n. In polar form: (r·e^(iθ))^n = r^n · e^(inθ). It means raising a complex number to a power raises the modulus to that power and multiplies the angle by n."
    },
    obj2: {
      question: "How do you raise a complex number to a power?",
      answer: "Convert to polar form z = r·e^(iθ), then apply De Moivre's theorem: z^n = r^n · e^(inθ). The modulus is raised to the n-th power and the angle is multiplied by n. Convert back to rectangular form using cos(nθ) and sin(nθ)."
    },
    obj3: {
      question: "What do negative exponents mean for complex numbers?",
      answer: "A negative exponent gives the reciprocal: z^(−n) = 1/z^n = r^(−n) · e^(−inθ). The modulus becomes the reciprocal power and the angle reverses direction. For example, (3+4i)^(−1) has modulus 1/5 and angle −53.1°."
    },
    obj4: {
      question: "Why do the powers of a complex number form a spiral?",
      answer: "Each multiplication by z scales by |z| and rotates by θ. When |z| > 1, the distance from the origin grows exponentially, creating an outward spiral. When |z| < 1, the distance shrinks, creating an inward spiral. When |z| = 1, there is no spiral — only rotation around the unit circle."
    },
    obj5: {
      question: "How does De Moivre's theorem relate to roots of unity?",
      answer: "The n-th roots of unity are the solutions to z^n = 1. Using De Moivre's theorem in reverse, they are z_k = e^(i·2πk/n) for k = 0, 1, ..., n−1 — n equally spaced points around the unit circle."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "De Moivre's Theorem Visual Calculator",
      "description": "Interactive De Moivre's theorem calculator with draggable complex plane. Raise any complex number to any integer power, see the spiral trail, angle arcs, and step-by-step polar solution.",
      "url": "https://www.learnmathclass.com/complex-numbers/visual-tools/demoivre-visualizer",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Draggable complex number with adjustable integer exponent from −20 to 20",
        "Purple spiral trail showing all intermediate powers z¹ through z^(n−1)",
        "Dual modulus circles for base and result with angle arcs θ and nθ",
        "Five-step calculation breakdown from polar conversion to rectangular result",
        "Zoom inset for tiny results and ray-to-edge for off-screen results",
        "Seven presets covering outward spiral, inward spiral, unit circle, and negative exponents",
        "n slider for smooth exponent exploration from −10 to 10"
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
          "name": "De Moivre's Theorem Calculator",
          "item": "https://www.learnmathclass.com/complex-numbers/visual-tools/demoivre-visualizer"
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
    squared: demoUnitFrame({ svg: deMoivreDiagrams.squared, caption: '(1+i)&#178;, frozen',
      text: 'The smallest use of the theorem: the 45° base arc doubles to 90° and the result lands on 2i — one multiplication, checked against FOIL.' }),
    fourth: demoUnitFrame({ svg: deMoivreDiagrams.fourth, caption: '(1+i)&#8308;, frozen',
      text: 'Three purple dots fan outward — 1+i, 2i, &#8722;2+2i — each 45° further around and &#8730;2 longer, before the teal vector lands on &#8722;4: a negative real reached with no negative signs.' }),
    iCubed: demoUnitFrame({ svg: deMoivreDiagrams.iCubed, caption: 'i&#179;, frozen',
      text: 'Pure rotation: the navy and teal dashed circles coincide at radius 1, two trail dots wait at i and &#8722;1, and the result is &#8722;i — a quarter-turn walk with no growth.' }),
    eighth: demoUnitFrame({ svg: deMoivreDiagrams.eighth, caption: '(1+i)&#8312;, frozen',
      text: 'The spiral escapes: seven dots trace two full revolutions, the last at 8 &#8722; 8i, and a dashed ray aims at the off-screen +16 on the positive real axis.' }),
    inverse: demoUnitFrame({ svg: deMoivreDiagrams.inverse, caption: '(3+4i)&#8315;&#185;, frozen',
      text: 'The reciprocal caught in the zoom inset: modulus 5 inverts to 0.2, the angle mirrors to &#8722;53.1°, and the moduli multiply back to exactly 1.' }),
    twoTen: demoUnitFrame({ svg: deMoivreDiagrams.twoTen, caption: '2&#185;&#8304;, frozen',
      text: 'De Moivre with the rotation switched off: no arcs, three doubling dots at 2, 4 and 8, and a dashed ray carrying the invisible 1024 off to the right.' }),
    inward: demoUnitFrame({ svg: deMoivreDiagrams.inward, caption: '(0.5+0.5i)&#8310;, frozen',
      text: 'Five dots coil into the origin as the modulus decays by &#8730;2/2 per step; the zoom inset magnifies the final &#8722;0.125i that full scale cannot show.' }),
  };

  // Per-state additions for the tool's Key Ideas panel, keyed by the preset
  // the current (z, n) matches (see DeMoivreCalculator).
  const explanations = {
    squared: 'One multiplication, two routes: FOIL and De Moivre both land (1+i)² on 2i. [Learn more about the squaring baseline](!#the-squaring-baseline) · [Getting started](!#getting-started-set-z-and-choose-n)',
    fourth: 'Four 45° steps make a half-turn: a negative real number from an all-positive base. [Learn more about the outward spiral](!#the-outward-spiral-when-z-1) · [Getting started](!#getting-started-set-z-and-choose-n)',
    iCubed: 'On the unit circle powers only rotate — this is the powers-of-i cycle in motion. [Learn more about unit-circle rotation](!#unit-circle-rotation-when-z-1) · [Getting started](!#getting-started-set-z-and-choose-n)',
    eighth: 'Two full revolutions and modulus 16: the result escapes the window as a dashed ray. [Learn more about escaping the window](!#escaping-the-window) · [Getting started](!#getting-started-set-z-and-choose-n)',
    inverse: 'The reciprocal inverts the modulus and mirrors the angle — |z| · |z⁻¹| = 1. [Learn more about negative exponents](!#negative-exponents-reciprocals-and-reversal) · [Getting started](!#getting-started-set-z-and-choose-n)',
    twoTen: 'θ = 0 disables rotation: ordinary doubling is the real-axis slice of the theorem. [Learn more about the pure real base](!#pure-real-base-no-spiral-just-scaling) · [Getting started](!#getting-started-set-z-and-choose-n)',
    inward: 'A base inside the unit circle decays: the spiral coils into the origin, inset and all. [Learn more about the inward spiral](!#the-inward-spiral-when-z-1) · [Getting started](!#getting-started-set-z-and-choose-n)',
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
        title: "De Moivre's Theorem Calculator | Learn Math Class",
        description: "Visualize De Moivre's theorem interactively. Raise complex numbers to any power, see spiral trails, angle multiplication, and step-by-step polar solutions.",
        keywords: keyWords.join(", "),
        url: "/complex-numbers/visual-tools/demoivre-visualizer",
         name: "De Moivre's Theorem Visual Calculator"
      },
        
       }
    }
   }

export default function DeMoivreVisualizerPage({seoData, sectionsContent, introContent, faqQuestions, schemas, explanations, stateUnits}) {

    
  const genericSections=[
    {
        id:'getting-started-set-z-and-choose-n',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'the-squaring-baseline',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
          <div key='u-squared' dangerouslySetInnerHTML={{ __html: stateUnits.squared }} />,
          sectionsContent.obj12.after,
        ]
    },
    {
        id:'the-outward-spiral-when-z-1',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
          <div key='u-fourth' dangerouslySetInnerHTML={{ __html: stateUnits.fourth }} />,
          sectionsContent.obj2.after,
        ]
    },
    {
        id:'escaping-the-window',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
          <div key='u-eighth' dangerouslySetInnerHTML={{ __html: stateUnits.eighth }} />,
          sectionsContent.obj13.after,
        ]
    },
    {
        id:'the-inward-spiral-when-z-1',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
          <div key='u-inward' dangerouslySetInnerHTML={{ __html: stateUnits.inward }} />,
          sectionsContent.obj3.after,
        ]
    },
    {
        id:'unit-circle-rotation-when-z-1',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <div key='u-iCubed' dangerouslySetInnerHTML={{ __html: stateUnits.iCubed }} />,
          sectionsContent.obj4.after,
        ]
    },
    {
        id:'negative-exponents-reciprocals-and-reversal',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
          <div key='u-inverse' dangerouslySetInnerHTML={{ __html: stateUnits.inverse }} />,
          sectionsContent.obj5.after,
        ]
    },
    {
        id:'pure-real-base-no-spiral-just-scaling',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
          <div key='u-twoTen' dangerouslySetInnerHTML={{ __html: stateUnits.twoTen }} />,
          sectionsContent.obj6.after,
        ]
    },
    {
        id:'reading-the-purple-trail-and-modulus-circles',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    {
        id:'the-five-step-calculation',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
    {
        id:'what-is-de-moivres-theorem',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'connection-to-roots-of-unity',
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>De Moivre Law Visual Calculator</h1>
   <br/>
   <SiblingsNav maxWidth='100%'>
   <DeMoivreCalculator explanations={explanations}/>
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