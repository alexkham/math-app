import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../pages.css'
import Head from 'next/head'


export async function getStaticProps(){

  const keyWords=[
    'unit circle',
    'unit circle definition',
    'unit circle coordinates',
    'sine and cosine on unit circle',
    'reference angles',
    'quadrant sign rules',
    'ASTC mnemonic',
    'exact trigonometric values',
    'Pythagorean identity',
    'standard angles unit circle',
    'coterminal angles unit circle',
    'negative angles trigonometry',
    'circular motion to waves',
    'unit circle equation x2 y2 1'
  ]

  const faqQuestions = {
    obj1: {
      question: "What is the unit circle?",
      answer: "The unit circle is a circle centered at the origin with radius 1, defined by the equation x² + y² = 1. It is the fundamental tool for extending trigonometric functions beyond right triangles to all real numbers. The coordinates of any point on the unit circle at angle θ are (cos θ, sin θ)."
    },
    obj2: {
      question: "How do you find trigonometric values using the unit circle?",
      answer: "Place the angle in standard position with vertex at the origin and initial side along the positive x-axis. The terminal side intersects the unit circle at a point (x, y). The x-coordinate is cosine and the y-coordinate is sine. All other functions are derived from these two: tan θ = y/x, sec θ = 1/x, csc θ = 1/y, and cot θ = x/y."
    },
    obj3: {
      question: "What are reference angles and how do they work?",
      answer: "A reference angle is the acute angle between the terminal side of an angle and the x-axis, always between 0° and 90°. The trigonometric function values at any angle equal the values at its reference angle, with the sign determined by the quadrant. This reduces evaluation to knowing first-quadrant values and applying the correct sign."
    },
    obj4: {
      question: "What is the Pythagorean identity?",
      answer: "The Pythagorean identity states cos²θ + sin²θ = 1 for every real number θ. It follows directly from the equation of the unit circle, since the coordinates (cos θ, sin θ) must satisfy x² + y² = 1. Dividing by cos²θ or sin²θ produces the related identities 1 + tan²θ = sec²θ and 1 + cot²θ = csc²θ."
    },
    obj5: {
      question: "What are the exact values on the unit circle?",
      answer: "The sixteen standard angles (multiples of 30° and 45°) have exact coordinates built from five values: 0, 1/2, √2/2, √3/2, and 1. First-quadrant values come from the 30-60-90 and 45-45-90 special triangles. All other quadrant values are obtained by adjusting signs according to the quadrant while keeping the same magnitudes."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Unit Circle",
      "description": "Master the unit circle: learn how coordinates define sine and cosine, use reference angles and quadrant signs, and find exact trigonometric values for all standard angles.",
      "url": "https://www.learnmathclass.com/trigonometry/unit-circle",
      "inLanguage": "en-US",
      "learningResourceType": "Explanation",
      "educationalLevel": "High School, College",
      "educationalUse": "Learning",
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student"
      },
      "about": {
        "@type": "Thing",
        "name": "Unit Circle"
      },
      "teaches": [
        "Definition and equation of the unit circle x² + y² = 1",
        "Coordinates as trigonometric values (cos θ, sin θ)",
        "Standard position and the terminal side of an angle",
        "Sign patterns across the four quadrants (ASTC)",
        "Reference angles and their role in evaluation",
        "Exact values for all sixteen standard angles",
        "The Pythagorean identity and its derived forms",
        "Handling angles beyond one rotation and negative angles",
        "Connection between circular motion and wave behavior"
      ],
      "keywords": keyWords.join(", "),
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString()
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
          "name": "Unit Circle",
          "item": "https://www.learnmathclass.com/trigonometry/unit-circle"
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

  // •

//   • First item
// • Second item


// <hr style="border-width:1px;"></hr>

// <hr style="color:blue;" />

// <hr style="border-color:#3498db; border-width:1px;" />



// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@


// <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
        //     {processContent(sectionsContent.normal.notation)}
        // </div>,


//   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
//     {processContent(sectionsContent.normal.parameters)}
// </div>,

//  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
//                   {processContent(sectionsContent.obj4.content)}
//                   </div>,


//  <div key={'dist'} style={{
//                     textAlign: 'center',
//                     transform: 'scale(0.98)',
//                     transformOrigin: 'center',
//                     marginTop:'50px',
//                     marginLeft:'-150px'
//                   }} dangerouslySetInnerHTML={{
//                     __html:   sectionContent.distributions.svg,
//                   }} />

    const sectionsContent={

    // obj1:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',


    // },
    // obj2:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',

    // },

    // obj3:{

    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',

    // },
    // obj4:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',

    // },
    // obj5:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',

    // },
    // obj6:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',

    // },
    // obj7:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',

    // },
    // obj8:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',

    // },
    // obj9:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',

    // },

    obj1: {
    title: `Definition and Equation`,
    content: `The unit circle is defined by two conditions: its center is at the origin of the coordinate plane, and its radius is 1. Every point $(x, y)$ on the circle satisfies:

$$x^2 + y^2 = 1$$

This equation is a direct application of the Pythagorean theorem (or equivalently, the distance formula): a point lies on the unit circle if and only if its distance from the origin is exactly 1.

The choice of radius 1 is deliberate. It eliminates the denominator from the [right triangle](!/trigonometry/right-triangle) definitions. In a right triangle inscribed in a circle of radius $r$, the sine of an angle is $\\frac{\\text{opposite}}{r}$ and the cosine is $\\frac{\\text{adjacent}}{r}$. When $r = 1$, these reduce to simply the opposite and adjacent sides — or equivalently, the $y$- and $x$-coordinates of the point where the terminal side meets the circle. The unit circle strips away the division and makes the coordinates themselves equal to the trigonometric values.

Any circle of radius $r$ could serve a similar purpose — the values would just need to be divided by $r$. But with $r = 1$, no division is necessary, and the connection between geometry and function values is as direct as possible.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Coordinates as Trigonometric Values`,
    content: `For any angle $\\theta$ placed in standard position (vertex at the origin, initial side along the positive $x$-axis), the terminal side intersects the unit circle at exactly one point. The coordinates of that point define cosine and sine:

$$(\\cos\\theta, \\sin\\theta)$$

The $x$-coordinate is $\\cos\\theta$. The $y$-coordinate is $\\sin\\theta$. This is the definition — not a derived result, not an approximation, but the way sine and cosine are defined for arbitrary angles.

From these, the remaining four functions follow:

$$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{y}{x} \\quad (x \\neq 0)$$

$$\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{x}{y} \\quad (y \\neq 0)$$

$$\\sec\\theta = \\frac{1}{\\cos\\theta} = \\frac{1}{x} \\quad (x \\neq 0)$$

$$\\csc\\theta = \\frac{1}{\\sin\\theta} = \\frac{1}{y} \\quad (y \\neq 0)$$

For acute angles in the first quadrant, this definition agrees perfectly with the right triangle ratios. Dropping a perpendicular from the point $P = (\\cos\\theta, \\sin\\theta)$ to the $x$-axis creates a right triangle with hypotenuse 1 (the radius), horizontal leg $\\cos\\theta$, and vertical leg $\\sin\\theta$. The ratios opposite/hypotenuse and adjacent/hypotenuse reproduce $\\sin\\theta$ and $\\cos\\theta$ exactly. The unit circle definition is a generalization that preserves everything from the triangle definition while removing the constraint that $\\theta$ be acute.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Standard Position and the Terminal Side`,
    content: `An angle is in standard position when its vertex sits at the origin and its initial side lies along the positive $x$-axis. The terminal side is the ray obtained by rotating the initial side through the angle $\\theta$. The direction of rotation determines the sign: counterclockwise is positive, clockwise is negative.

The terminal side is what matters for trigonometric evaluation. It determines where the angle "lands" on the unit circle and therefore what point $(\\cos\\theta, \\sin\\theta)$ it produces. Two different rotations that end at the same terminal side — such as $45°$ and $405°$, or $120°$ and $-240°$ — produce the same point on the circle and therefore the same values of all six trigonometric functions.

Angles whose terminal sides fall along the coordinate axes — $0°$, $90°$, $180°$, $270°$, and their equivalents — are called quadrantal angles. Their trigonometric values come directly from the axis coordinates:

- $\\theta = 0°$: point $(1, 0)$ → $\\cos(0°) = 1$, $\\sin(0°) = 0$
- $\\theta = 90°$: point $(0, 1)$ → $\\cos(90°) = 0$, $\\sin(90°) = 1$
- $\\theta = 180°$: point $(-1, 0)$ → $\\cos(180°) = -1$, $\\sin(180°) = 0$
- $\\theta = 270°$: point $(0, -1)$ → $\\cos(270°) = 0$, $\\sin(270°) = -1$

At quadrantal angles, some trigonometric functions are undefined. Tangent and secant require $\\cos\\theta \\neq 0$, so they are undefined at $90°$ and $270°$. Cotangent and cosecant require $\\sin\\theta \\neq 0$, so they are undefined at $0°$ and $180°$. These points of undefinedness correspond to vertical asymptotes on the [graphs](!/trigonometry/graphs) and to excluded values in the domains of the [trigonometric functions](!/trigonometry/functions).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `The Four Quadrants and Sign Patterns`,
    content: `The coordinate axes divide the plane into four quadrants, and the signs of $x$ and $y$ in each quadrant determine the signs of the trigonometric functions.

**Quadrant I** ($0° < \\theta < 90°$): both $x > 0$ and $y > 0$. All six trigonometric functions are positive.

**Quadrant II** ($90° < \\theta < 180°$): $x < 0$, $y > 0$. Sine and cosecant are positive (they depend on $y$). Cosine, secant, tangent, and cotangent are negative.

**Quadrant III** ($180° < \\theta < 270°$): both $x < 0$ and $y < 0$. Tangent and cotangent are positive (the ratio of two negatives is positive). Sine, cosine, cosecant, and secant are negative.

**Quadrant IV** ($270° < \\theta < 360°$): $x > 0$, $y < 0$. Cosine and secant are positive (they depend on $x$). Sine, cosecant, tangent, and cotangent are negative.

The mnemonic ASTC — "All, Sine, Tangent, Cosine" — lists which group of functions is positive in each quadrant, starting from Quadrant I and moving counterclockwise. Various phrase mnemonics exist ("All Students Take Calculus" being the most common), but the underlying logic is more reliable than any mnemonic: $\\cos\\theta$ has the same sign as $x$, $\\sin\\theta$ has the same sign as $y$, and $\\tan\\theta$ is positive when $x$ and $y$ share the same sign.

Knowing the quadrant of an angle immediately determines the sign of every trigonometric function at that angle. This information, combined with the magnitude obtained from a reference angle, is sufficient to evaluate any trigonometric function at any standard angle.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Reference Angles`,
    content: `The reference angle for a given angle $\\theta$ is the acute angle formed between the terminal side of $\\theta$ and the $x$-axis. It is always positive and always lies between $0°$ and $90°$ (or between $0$ and $\\frac{\\pi}{2}$). The reference angle captures the "magnitude" component of the trigonometric evaluation, while the quadrant determines the sign.

The computation depends on the quadrant:

- **Quadrant I**: reference angle $= \\theta$
- **Quadrant II**: reference angle $= 180° - \\theta$ (or $\\pi - \\theta$)
- **Quadrant III**: reference angle $= \\theta - 180°$ (or $\\theta - \\pi$)
- **Quadrant IV**: reference angle $= 360° - \\theta$ (or $2\\pi - \\theta$)

The key property: the trigonometric function values at any angle $\\theta$ equal the function values at the reference angle, up to a sign determined by the quadrant. Formally:

$$|\\sin\\theta| = \\sin(\\text{reference angle}), \\quad |\\cos\\theta| = \\cos(\\text{reference angle})$$

This reduces every trigonometric evaluation to two steps: (1) find the reference angle and evaluate the function there (using the known values from the [special right triangles](!/trigonometry/right-triangle)), and (2) attach the correct sign based on the quadrant.

For example, to evaluate $\\sin(225°)$: the angle is in Quadrant III, so the reference angle is $225° - 180° = 45°$. The sine of $45°$ is $\\frac{\\sqrt{2}}{2}$. Sine is negative in Quadrant III, so $\\sin(225°) = -\\frac{\\sqrt{2}}{2}$.

To evaluate $\\cos\\left(\\frac{5\\pi}{6}\\right)$: the angle is in Quadrant II (between $\\frac{\\pi}{2}$ and $\\pi$), so the reference angle is $\\pi - \\frac{5\\pi}{6} = \\frac{\\pi}{6}$. The cosine of $\\frac{\\pi}{6}$ is $\\frac{\\sqrt{3}}{2}$. Cosine is negative in Quadrant II, so $\\cos\\left(\\frac{5\\pi}{6}\\right) = -\\frac{\\sqrt{3}}{2}$.

Reference angles work because the unit circle has reflective symmetry across both axes. Points in different quadrants that share the same reference angle are mirror images of each other, differing only in the signs of their coordinates.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Exact Values for the Standard Angles`,
    content: `The sixteen standard angles — every multiple of $30°$ and $45°$ from $0°$ to $360°$ — each have exact trigonometric values expressible using only integers, fractions, and square roots. These values are not approximations; they are the precise coordinates of the corresponding points on the unit circle.

The first-quadrant values come directly from the [special right triangles](!/trigonometry/right-triangle):

- $(\\cos 0°, \\sin 0°) = (1, 0)$
- $(\\cos 30°, \\sin 30°) = \\left(\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$
- $(\\cos 45°, \\sin 45°) = \\left(\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}\\right)$
- $(\\cos 60°, \\sin 60°) = \\left(\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$
- $(\\cos 90°, \\sin 90°) = (0, 1)$

Every other standard angle shares one of these reference angles — $30°$, $45°$, or $60°$ — and its coordinates are obtained by adjusting signs according to the quadrant. For instance, $150°$ has reference angle $30°$ and lies in Quadrant II, so $\\cos(150°) = -\\frac{\\sqrt{3}}{2}$ and $\\sin(150°) = \\frac{1}{2}$. The angle $315°$ has reference angle $45°$ and lies in Quadrant IV, so $\\cos(315°) = \\frac{\\sqrt{2}}{2}$ and $\\sin(315°) = -\\frac{\\sqrt{2}}{2}$.

A useful observation: only five magnitudes ever appear as coordinates on the unit circle at standard angles: $0$, $\\frac{1}{2}$, $\\frac{\\sqrt{2}}{2}$, $\\frac{\\sqrt{3}}{2}$, and $1$. The entire unit circle diagram, with all sixteen labeled points, is built from just these five values with appropriate sign changes. Recognizing this pattern — rather than memorizing sixteen separate pairs — is the efficient path to fluency.

The sine values at $0°, 30°, 45°, 60°, 90°$ follow an ascending pattern: $\\frac{\\sqrt{0}}{2}, \\frac{\\sqrt{1}}{2}, \\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{3}}{2}, \\frac{\\sqrt{4}}{2}$ — that is, $0, \\frac{1}{2}, \\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{3}}{2}, 1$. Cosine follows the same values in reverse order. This mnemonic, while not a proof, provides a quick reconstruction of the first-quadrant values.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `The Pythagorean Identity`,
    content: `Every point on the unit circle satisfies $x^2 + y^2 = 1$. Since $x = \\cos\\theta$ and $y = \\sin\\theta$, substitution gives:

$$\\cos^2\\theta + \\sin^2\\theta = 1$$

This is the Pythagorean identity — the most fundamental equation in trigonometry. It holds for every real number $\\theta$, without exception. It is not an approximation, not a special case, and not restricted to any particular quadrant or angle type. It is an algebraic restatement of the geometric fact that sine and cosine are coordinates on a circle of radius 1.

The identity has two standard rearrangements:

$$\\sin^2\\theta = 1 - \\cos^2\\theta \\qquad \\text{and} \\qquad \\cos^2\\theta = 1 - \\sin^2\\theta$$

These substitutions appear constantly in simplification and equation solving. If an expression contains $\\sin^2\\theta$ and it would be simpler in terms of $\\cos\\theta$, replace $\\sin^2\\theta$ with $1 - \\cos^2\\theta$. The reverse substitution is equally common.

Dividing the Pythagorean identity by $\\cos^2\\theta$ (where $\\cos\\theta \\neq 0$) produces:

$$1 + \\tan^2\\theta = \\sec^2\\theta$$

Dividing by $\\sin^2\\theta$ (where $\\sin\\theta \\neq 0$) produces:

$$1 + \\cot^2\\theta = \\csc^2\\theta$$

These are the three Pythagorean [identities](!/trigonometry/identities) — all consequences of a single circle equation. They are among the most frequently used tools in the entire subject, appearing in identity proofs, expression simplification, [equation](!/trigonometry/equations) solving, integration, and the derivation of other [formulas](!/trigonometry/formulas).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Angles Beyond One Rotation and Negative Angles`,
    content: `The unit circle imposes no upper or lower bound on angles. An angle of $400°$ means a full counterclockwise rotation ($360°$) followed by an additional $40°$ — the terminal side lands at the same position as $40°$. An angle of $-150°$ means a clockwise rotation of $150°$. An angle of $1000°$ means two full rotations ($720°$) plus $280°$, so the terminal side coincides with that of $280°$.

This is the geometric meaning of coterminal angles: different amounts of rotation that end at the same point on the circle. Since the trigonometric values depend only on the terminal point — not on how many times the terminal side wound around to get there — coterminal angles always produce identical function values. The angle $\\theta$, the angle $\\theta + 360°$, the angle $\\theta - 360°$, and the angle $\\theta + 720°$ all yield the same sine, the same cosine, and the same everything else.

This wrapping behavior is the source of periodicity. The statement $\\sin(\\theta + 2\\pi) = \\sin\\theta$ is not an algebraic identity to be proved — it is a geometric inevitability. After a full rotation of $2\\pi$ radians, the point on the circle returns to its starting position, and the $y$-coordinate (sine) is unchanged. The same holds for cosine and for all functions derived from them. Tangent and cotangent repeat after just $\\pi$ radians because the ratio $\\frac{y}{x}$ returns to its original value after a half rotation (both $x$ and $y$ reverse sign, and the ratio of two negatives equals the ratio of the original positives).

The ability to handle arbitrary angles — large, small, negative, irrational multiples of $\\pi$ — is what transforms the trigonometric ratios of [right triangle trigonometry](!/trigonometry/right-triangle) into genuine [functions](!/trigonometry/functions) of a real variable, with the full apparatus of analysis (continuity, differentiability, integrability) available.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `From Circular Motion to Waves`,
    content: `Imagine a point $P$ moving counterclockwise around the unit circle at a constant rate. At any moment, the angle $\\theta$ swept from the positive $x$-axis determines the position $P = (\\cos\\theta, \\sin\\theta)$. Now track just the $y$-coordinate as $\\theta$ increases. It starts at $0$ (when $\\theta = 0$), rises to $1$ (at $\\theta = \\frac{\\pi}{2}$), returns to $0$ (at $\\theta = \\pi$), drops to $-1$ (at $\\theta = \\frac{3\\pi}{2}$), and returns to $0$ (at $\\theta = 2\\pi$). Then the pattern repeats.

Plot this $y$-coordinate against $\\theta$, and the result is the familiar wave shape of the [sine graph](!/trigonometry/graphs). The $x$-coordinate, tracked similarly, produces the cosine graph — the same wave, shifted by $\\frac{\\pi}{2}$.

This connection between circular motion and wave motion is not merely a visual analogy. It is the mathematical reason why trigonometric functions model oscillations. Any quantity that varies by cycling through a fixed pattern — a pendulum swinging, a voltage alternating, a season repeating — follows a path that can be described (or closely approximated) by sines and cosines. The unit circle is the generator, and the wave is its projection.

This perspective also explains why the [graphs](!/trigonometry/graphs) of sine and cosine are smooth, continuous, and bounded between $-1$ and $1$: coordinates on a unit circle must lie in $[-1, 1]$, and a point moving at constant speed around a smooth curve traces a smooth function. The amplitude corresponds to the radius (which is 1 for the unit circle), and the period corresponds to the time for one full revolution ($2\\pi$ radians).`,
    before: ``,
    after: ``,
    link: ``,
  },
    obj10:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',

    },
    obj11:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',

    },
    obj12:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',

    },
    obj13:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',

    },
    obj14:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',

    },


    obj15:{

      title:``,
      content:``,
      before:``,
      after:``,
      link:'',

    }

  }


  const introContent = {
  id: "intro",
  title: `Extending Trigonometry Beyond the Right Triangle`,
  content: `A circle of radius 1, centered at the origin — nothing more. Yet this minimal construction carries the entire weight of extending trigonometric functions from acute-angle ratios to functions defined on all real numbers. The idea is direct: place an angle $\\theta$ in standard position, let its terminal side intersect the unit circle at a point $P$, and define $\\cos\\theta$ and $\\sin\\theta$ as the $x$- and $y$-coordinates of $P$. No triangle is needed. No restriction to acute angles applies. Negative angles, obtuse angles, angles spanning multiple rotations — all receive well-defined trigonometric values through this single geometric device.

The unit circle reveals structure that [right triangle trigonometry](!/trigonometry/right-triangle) cannot access. It organizes the signs of the trigonometric functions by quadrant, introduces reference angles as a computational shortcut, provides exact coordinates for the sixteen standard angles, and gives geometric meaning to periodicity — the fact that adding a full rotation returns to the same point and therefore the same function values. The Pythagorean identity $\\cos^2\\theta + \\sin^2\\theta = 1$ is simply the equation of the circle itself, rewritten in trigonometric language. Every pattern visible on the [graphs](!/trigonometry/graphs) of sine and cosine, every symmetry catalogued among the [properties](!/trigonometry/properties), and every sign rule used in solving [equations](!/trigonometry/equations) traces back to this circle.`,
};




   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
          seoData: {
        title: "Unit Circle: Coordinates and Exact Values | Learn Math Class",
        description: "Master the unit circle with exact trigonometric values for all standard angles. Learn reference angles, quadrant sign rules, the Pythagorean identity, and more.",
        keywords: keyWords.join(", "),
        url: "/trigonometry/unit-circle",
         name: "Unit Circle"
      },

       }
    }
   }

export default function UnitCirclePage({seoData,sectionsContent , introContent, faqQuestions, schemas}) {


  const genericSections=[
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    // {
    //     id:'10',
    //     title:sectionsContent.obj10.title,
    //     link:sectionsContent.obj10.link,
    //     content:[
    //       sectionsContent.obj10.content,
    //     ]
    // },
    // {
    //     id:'11',
    //     title:sectionsContent.obj11.title,
    //     link:sectionsContent.obj11.link,
    //     content:[
    //       sectionsContent.obj11.content,
    //     ]
    // },
    // {
    //     id:'12',
    //     title:sectionsContent.obj12.title,
    //     link:sectionsContent.obj12.link,
    //     content:[
    //       sectionsContent.obj12.content,
    //     ]
    // },
    // {
    //     id:'13',
    //     title:sectionsContent.obj13.title,
    //     link:sectionsContent.obj13.link,
    //     content:[
    //       sectionsContent.obj13.content,
    //     ]
    // },
    // {
    //     id:'14',
    //     title:sectionsContent.obj14.title,
    //     link:sectionsContent.obj14.link,
    //     content:[
    //       sectionsContent.obj14.content,
    //     ]
    // },
    // {
    //     id:'15',
    //     title:sectionsContent.obj15.title,
    //     link:sectionsContent.obj15.link,
    //     content:[
    //       sectionsContent.obj15.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },

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
      __html: JSON.stringify(schemas.learningResource)
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Unit Circle</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
         secondaryNavTitle="More in this Section"

   />
   <br/>
   <br/>
   <br/>
    <IntroSection
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        />
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
