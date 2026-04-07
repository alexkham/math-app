


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
    'right triangle trigonometry',
    'SOH CAH TOA',
    'sine cosine tangent ratios',
    'finding missing sides',
    'finding missing angles',
    'special right triangles',
    '45-45-90 triangle',
    '30-60-90 triangle',
    'opposite adjacent hypotenuse',
    'inverse trigonometric functions',
    'right triangle applications',
    'angle of elevation',
    'angle of depression',
    'trigonometric ratios definition'
  ]

  const faqQuestions = {
    obj1: {
      question: "What is SOH CAH TOA?",
      answer: "SOH CAH TOA is a mnemonic for the three primary trigonometric ratios in a right triangle. SOH means Sine = Opposite/Hypotenuse, CAH means Cosine = Adjacent/Hypotenuse, and TOA means Tangent = Opposite/Adjacent. These ratios connect the angles of a right triangle to the lengths of its sides."
    },
    obj2: {
      question: "How do you find a missing side of a right triangle?",
      answer: "When one acute angle and one side are known, choose the trigonometric ratio (sine, cosine, or tangent) that connects the known side, the unknown side, and the given angle. Set up the equation, substitute the known values, and solve for the unknown side. The choice of ratio depends on which pair of sides — opposite, adjacent, or hypotenuse — is involved."
    },
    obj3: {
      question: "What are the special right triangles?",
      answer: "The two special right triangles are the 45-45-90 triangle with side ratios 1:1:√2 and the 30-60-90 triangle with side ratios 1:√3:2. These triangles produce exact trigonometric values without a calculator and form the basis for all exact evaluations on the unit circle."
    },
    obj4: {
      question: "How do you find a missing angle in a right triangle?",
      answer: "When two sides are known, compute the appropriate trigonometric ratio from the side lengths, then apply the inverse function (arcsin, arccos, or arctan) to recover the angle. Once one acute angle is found, the other is its complement since the two acute angles must sum to 90 degrees."
    },
    obj5: {
      question: "What are angles of elevation and depression?",
      answer: "An angle of elevation is measured upward from a horizontal line to a line of sight aimed at a higher object. An angle of depression is measured downward from a horizontal line to a line of sight aimed at a lower object. Both create right triangles that can be solved using trigonometric ratios."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Right Triangle Trigonometry",
      "description": "Learn right triangle trigonometry: SOH CAH TOA ratios, finding missing sides and angles, special triangles 45-45-90 and 30-60-90, and real-world applications.",
      "url": "https://www.learnmathclass.com/trigonometry/right-triangle",
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
        "name": "Right Triangle Trigonometry"
      },
      "teaches": [
        "The three primary trigonometric ratios: sine, cosine, tangent",
        "Labeling sides as opposite, adjacent, and hypotenuse",
        "Finding missing sides using trigonometric ratios",
        "Finding missing angles using inverse trigonometric functions",
        "The 45-45-90 special right triangle and its ratios",
        "The 30-60-90 special right triangle and its ratios",
        "Angles of elevation and depression in applications",
        "Connecting right triangle ratios to the unit circle"
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
          "name": "Right Triangle Trigonometry",
          "item": "https://www.learnmathclass.com/trigonometry/right-triangle"
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

  

     obj1: {
    title: `Naming the Sides: Opposite, Adjacent, Hypotenuse`,
    content: `In a right triangle, the hypotenuse is the side opposite the right angle — always the longest side. The other two sides are called legs, and their names depend on which acute angle is under consideration. For a given acute angle $\\theta$:

- The **opposite** side is the leg directly across the triangle from $\\theta$.
- The **adjacent** side is the leg that forms one ray of $\\theta$ (the other ray being the hypotenuse).

If the triangle has acute angles $\\alpha$ and $\\beta$, what is opposite for $\\alpha$ is adjacent for $\\beta$, and vice versa. The hypotenuse remains the hypotenuse regardless of which angle is chosen — it is determined by the right angle, not by the acute angle under consideration.

This labeling is relational, not absolute. The same side can be "opposite" or "adjacent" depending on which angle is the point of reference. Keeping this distinction clear is essential, because the entire definition of the trigonometric functions depends on correctly identifying which side plays which role relative to the angle in question.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Defining Sine, Cosine, and Tangent`,
    content: `The three primary trigonometric functions are defined as ratios of the sides of a right triangle relative to an acute angle $\\theta$:

$$\\sin(\\theta) = \\frac{\\text{opposite}}{\\text{hypotenuse}}, \\quad \\cos(\\theta) = \\frac{\\text{adjacent}}{\\text{hypotenuse}}, \\quad \\tan(\\theta) = \\frac{\\text{opposite}}{\\text{adjacent}}$$

The mnemonic SOH-CAH-TOA encodes these definitions: Sine = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent.

Each ratio captures a different geometric relationship. Sine measures how much of the hypotenuse is "projected" onto the vertical direction relative to $\\theta$. Cosine measures the horizontal projection. Tangent measures the steepness — how much vertical rise accompanies a given horizontal run. When $\\theta$ is small, the opposite side is short relative to the adjacent, and $\\tan(\\theta)$ is small. As $\\theta$ approaches $90°$, the opposite side grows relative to the adjacent, and $\\tan(\\theta)$ increases without bound.

Because the hypotenuse is always the longest side of a right triangle, both $\\sin(\\theta)$ and $\\cos(\\theta)$ are always between 0 and 1 for acute angles. Tangent has no such restriction — it can take any positive value, approaching infinity as $\\theta$ nears $90°$.

A fundamental observation: these ratios do not depend on the size of the triangle. If two right triangles share the same acute angle $\\theta$, they are similar, and all corresponding side ratios are equal. A right triangle with legs 3 and 4 and hypotenuse 5 gives $\\sin(\\theta) = \\frac{3}{5}$ for the angle opposite the side of length 3 — and any similar triangle, no matter how large or small, produces the same value. The trigonometric functions are properties of the angle alone.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `The Reciprocal Functions: Cosecant, Secant, Cotangent`,
    content: `Each primary ratio has a reciprocal:

$$\\csc(\\theta) = \\frac{\\text{hypotenuse}}{\\text{opposite}} = \\frac{1}{\\sin(\\theta)}$$

$$\\sec(\\theta) = \\frac{\\text{hypotenuse}}{\\text{adjacent}} = \\frac{1}{\\cos(\\theta)}$$

$$\\cot(\\theta) = \\frac{\\text{adjacent}}{\\text{opposite}} = \\frac{1}{\\tan(\\theta)}$$

These three functions — cosecant, secant, and cotangent — do not introduce new information. They repackage the same side relationships in inverted form. If $\\sin(\\theta) = \\frac{3}{5}$, then $\\csc(\\theta) = \\frac{5}{3}$. If $\\cos(\\theta) = \\frac{4}{5}$, then $\\sec(\\theta) = \\frac{5}{4}$.

In basic triangle-solving problems, the reciprocal functions appear less frequently than sine, cosine, and tangent. Their importance grows substantially in the study of [identities](!/trigonometry/identities), where expressions involving $\\sec^2\\theta$ and $\\csc^2\\theta$ arise from the Pythagorean identity and its variants. They also appear naturally in calculus — the derivatives and integrals of tangent and cotangent involve secant and cosecant — and in various formulas throughout physics and engineering.

Since the hypotenuse is always longer than either leg, $\\csc(\\theta) > 1$ and $\\sec(\\theta) > 1$ for all acute angles. Cotangent, like tangent, is unbounded: $\\cot(\\theta) = \\frac{\\cos(\\theta)}{\\sin(\\theta)}$ can take any positive value.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Finding Missing Sides`,
    content: `When one acute angle and one side of a right triangle are known, the remaining two sides can be found using the trigonometric ratios. The strategy is to choose the ratio that connects the known side, the unknown side, and the given angle.

Suppose a right triangle has an acute angle $\\theta = 35°$ and a hypotenuse of length 20. To find the opposite side, use sine:

$$\\sin(35°) = \\frac{x}{20} \\quad \\Rightarrow \\quad x = 20\\sin(35°)$$

To find the adjacent side, use cosine:

$$\\cos(35°) = \\frac{y}{20} \\quad \\Rightarrow \\quad y = 20\\cos(35°)$$

If instead the adjacent side is known (say, 15) and the opposite side is sought, tangent is the appropriate ratio:

$$\\tan(35°) = \\frac{x}{15} \\quad \\Rightarrow \\quad x = 15\\tan(35°)$$

The choice of ratio is not arbitrary — it is dictated by which pair of sides (one known, one unknown) relates to the given angle. Using the wrong ratio is one of the most common errors in triangle problems. A reliable method: label the sides as opposite, adjacent, or hypotenuse relative to the given angle, identify which two are involved (one known, one unknown), and select the ratio that pairs exactly those two.

Calculator usage requires attention to the angle mode. If the angle is given in degrees, the calculator must be in degree mode; if in radians, radian mode. A mismatch produces incorrect results with no error message — the calculator computes the wrong function value silently. This is a persistent source of mistakes, especially early in the subject.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Finding Missing Angles`,
    content: `When two sides of a right triangle are known, the acute angles can be determined. The process reverses the side-finding procedure: compute the ratio from the known sides, then apply the appropriate [inverse trigonometric function](!/trigonometry/inverse-functions) to recover the angle.

For example, in a right triangle with opposite side 5 and hypotenuse 13:

$$\\sin(\\theta) = \\frac{5}{13} \\quad \\Rightarrow \\quad \\theta = \\arcsin\\left(\\frac{5}{13}\\right) \\approx 22.6°$$

Given adjacent side 7 and opposite side 10:

$$\\tan(\\theta) = \\frac{10}{7} \\quad \\Rightarrow \\quad \\theta = \\arctan\\left(\\frac{10}{7}\\right) \\approx 55.0°$$

Once one acute angle is found, the other follows immediately: the two acute angles in a right triangle always sum to $90°$. If $\\theta \\approx 22.6°$, the other acute angle is approximately $90° - 22.6° = 67.4°$.

Any pair of sides is sufficient. If the hypotenuse and adjacent side are known, use $\\arccos$. If the opposite and adjacent sides are known, use $\\arctan$. If the opposite and hypotenuse are known, use $\\arcsin$. The Pythagorean theorem can also provide the third side first, opening up all three options — but this is an extra step that is rarely necessary.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `The 45-45-90 Triangle`,
    content: `An isosceles right triangle — two equal legs and a right angle — has acute angles of $45°$ each. Its side ratios are $1 : 1 : \\sqrt{2}$, meaning that if each leg has length $a$, the hypotenuse has length $a\\sqrt{2}$.

This follows from the Pythagorean theorem: $a^2 + a^2 = c^2$ gives $c = a\\sqrt{2}$.

Alternatively, the triangle arises by cutting a square along its diagonal. The diagonal of a unit square has length $\\sqrt{2}$, and each resulting right triangle has legs of length 1 and hypotenuse $\\sqrt{2}$.

The trigonometric values follow directly from the side ratios:

$$\\sin(45°) = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}, \\quad \\cos(45°) = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}, \\quad \\tan(45°) = \\frac{1}{1} = 1$$

The equality $\\sin(45°) = \\cos(45°)$ is a direct consequence of the triangle's symmetry: the two legs are equal, so opposite and adjacent are identical. This is the only acute angle for which sine and cosine are equal. Tangent equals 1, meaning the opposite and adjacent sides have the same length — the angle bisects the range between $0°$ and $90°$ in a very concrete geometric sense.

The reciprocal values are $\\csc(45°) = \\sqrt{2}$, $\\sec(45°) = \\sqrt{2}$, and $\\cot(45°) = 1$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `The 30-60-90 Triangle`,
    content: `The 30-60-90 triangle has side ratios $1 : \\sqrt{3} : 2$, where the shortest side is opposite the $30°$ angle, the medium side (of length $\\sqrt{3}$ relative to the shortest) is opposite the $60°$ angle, and the hypotenuse is twice the shortest side.

This triangle arises from bisecting an equilateral triangle. An equilateral triangle with side length 2 has all angles equal to $60°$. Dropping an altitude from one vertex to the opposite side bisects that side (creating a segment of length 1) and bisects the vertex angle (creating a $30°$ angle). The altitude has length $\\sqrt{2^2 - 1^2} = \\sqrt{3}$ by the Pythagorean theorem. The result is a right triangle with angles $30°$, $60°$, $90°$ and sides $1$, $\\sqrt{3}$, $2$.

The trigonometric values at $30°$:

$$\\sin(30°) = \\frac{1}{2}, \\quad \\cos(30°) = \\frac{\\sqrt{3}}{2}, \\quad \\tan(30°) = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$$

The trigonometric values at $60°$:

$$\\sin(60°) = \\frac{\\sqrt{3}}{2}, \\quad \\cos(60°) = \\frac{1}{2}, \\quad \\tan(60°) = \\sqrt{3}$$

Notice the swap: $\\sin(30°) = \\cos(60°)$ and $\\cos(30°) = \\sin(60°)$. This is the cofunction relationship at work — $30°$ and $60°$ are complements, so the sine of one equals the cosine of the other.

Together with the 45-45-90 values, these produce exact trigonometric values at $30°$, $45°$, and $60°$ — the three non-trivial standard angles in the first quadrant. Combined with the values at $0°$ ($\\sin = 0$, $\\cos = 1$) and $90°$ ($\\sin = 1$, $\\cos = 0$), they form a complete set that extends to all quadrants via the [unit circle](!/trigonometry/unit-circle).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Cofunction Relationships`,
    content: `In any right triangle, the two acute angles are complementary: they sum to $90°$ (or $\\frac{\\pi}{2}$ radians). This forces a structural relationship between the trigonometric functions evaluated at complementary angles.

Consider an acute angle $\\theta$ in a right triangle. The other acute angle is $90° - \\theta$. The side that is opposite $\\theta$ is adjacent to $90° - \\theta$, and the side that is adjacent to $\\theta$ is opposite $90° - \\theta$. The hypotenuse is shared. Therefore:

$$\\sin(\\theta) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\cos(90° - \\theta)$$

$$\\cos(\\theta) = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\sin(90° - \\theta)$$

$$\\tan(\\theta) = \\frac{\\text{opposite}}{\\text{adjacent}} = \\cot(90° - \\theta)$$

$$\\sec(\\theta) = \\frac{\\text{hypotenuse}}{\\text{adjacent}} = \\csc(90° - \\theta)$$

Each function, evaluated at an angle, equals its cofunction evaluated at the complementary angle. The prefix "co-" in cosine, cotangent, and cosecant is not accidental — it stands for "complement." Cosine is literally the sine of the complement. Cotangent is the tangent of the complement. Cosecant is the secant of the complement.

These relationships are verified by the special triangles: $\\sin(30°) = \\frac{1}{2} = \\cos(60°)$, $\\tan(45°) = 1 = \\cot(45°)$ (since $45°$ is its own complement). They generalize beyond right triangles into the cofunction [identities](!/trigonometry/identities), which hold for all angles — not just acute ones — through the unit circle extension:

$$\\sin(\\theta) = \\cos\\left(\\frac{\\pi}{2} - \\theta\\right), \\quad \\tan(\\theta) = \\cot\\left(\\frac{\\pi}{2} - \\theta\\right), \\quad \\sec(\\theta) = \\csc\\left(\\frac{\\pi}{2} - \\theta\\right)$$`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Angles of Elevation and Depression`,
    content: `Many practical problems involving right triangles are framed in terms of angles of elevation and depression. Both are measured from the horizontal — not from the vertical, and not from the ground.

An **angle of elevation** is the angle measured upward from a horizontal line of sight to a point above the observer. Standing on the ground and looking up at the top of a building, the angle between the horizontal and the line of sight to the top is the angle of elevation.

An **angle of depression** is the angle measured downward from a horizontal line of sight to a point below the observer. Standing on top of a cliff and looking down at a boat, the angle between the horizontal and the line of sight to the boat is the angle of depression.

A key geometric fact simplifies many problems: when a horizontal line from the observer and a horizontal line through the target are parallel (as they typically are, since both are horizontal), the angle of elevation from the lower point equals the angle of depression from the upper point. They are alternate interior angles formed by a transversal crossing two parallel lines. This means the problem can often be set up from either perspective.

The standard problem structure: the observer stands at a known distance from the base of an object, measures the angle of elevation to the top, and seeks the height. This produces a right triangle where the known distance is the adjacent side, the unknown height is the opposite side, and tangent is the relevant ratio:

$$\\tan(\\theta) = \\frac{\\text{height}}{\\text{distance}} \\quad \\Rightarrow \\quad \\text{height} = \\text{distance} \\times \\tan(\\theta)$$

Variations include: finding the distance given the height and angle, finding the angle given the height and distance, problems involving two observation points at different distances, and problems where the observer's own height adds to the triangle.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Limitations and Extensions`,
    content: `Right triangle trigonometry is powerful but confined. It applies only to acute angles — those strictly between $0°$ and $90°$. The definitions break down at the boundaries: at $0°$ the "opposite" side has zero length and the triangle degenerates into a line segment, and at $90°$ the "adjacent" side vanishes. Beyond $90°$, no right triangle can contain the angle as an acute angle, and the ratio definitions cease to apply.

This limitation motivates the transition to the [unit circle](!/trigonometry/unit-circle), which redefines sine and cosine as coordinates of a point on a circle rather than as ratios in a triangle. The unit circle definition agrees with the right triangle definition for acute angles (the triangle formed by dropping a perpendicular from the circle to the $x$-axis reproduces the same ratios) and seamlessly extends to all real numbers.

For triangles that contain no right angle — oblique triangles — neither the right triangle ratios nor a direct application of the unit circle is sufficient. These require the [Law of Sines and Law of Cosines](!/trigonometry/sines-cosines-law), which generalize trigonometric relationships to arbitrary triangles. The Law of Cosines, in particular, reduces to the Pythagorean theorem when one angle is $90°$, revealing it as a direct extension of right triangle geometry.

Despite these limitations, the exact values and geometric intuitions established in right triangle trigonometry remain relevant throughout the entire subject. The special triangle values populate every quadrant of the unit circle, appear in every table of standard angles, and are used in the evaluation of [trigonometric functions](!/trigonometry/functions), the solving of [equations](!/trigonometry/equations), and the application of [formulas](!/trigonometry/formulas). Right triangle trigonometry is where the subject begins, and its results persist everywhere the subject goes.`,
    before: ``,
    after: ``,
    link: ``,
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
 title: `Where Trigonometry Begins: Ratios in a Right Triangle`,
  content: `The six trigonometric functions enter mathematics through a remarkably simple setup: a triangle with one right angle and two acute angles. Given any acute angle $\\theta$ in such a triangle, the three sides acquire names relative to that angle — opposite, adjacent, and hypotenuse — and the ratios between these sides define sine, cosine, tangent, and their reciprocals. What makes these ratios powerful is their invariance under scaling. Any two right triangles that share the same acute angle are similar, and similar triangles preserve all side ratios regardless of size. A 30-60-90 triangle with a hypotenuse of 2 and one with a hypotenuse of 200 yield identical values of $\\sin(30°)$, $\\cos(30°)$, and $\\tan(30°)$. This scale-independence transforms a geometric observation into a universal computational tool — one that has been used for millennia to calculate distances that cannot be measured directly.

Right triangle trigonometry is limited to acute angles: $\\theta$ must satisfy $0° < \\theta < 90°$. For angles outside this range — obtuse, negative, or beyond a full rotation — the definitions must be extended through the [unit circle](!/trigonometry/unit-circle). But the exact values produced here, particularly from the special triangles, remain the foundation of all trigonometric computation. They populate the [unit circle](!/trigonometry/unit-circle), appear in the [graphs](!/trigonometry/graphs), drive the evaluation of [trigonometric functions](!/trigonometry/functions) at standard angles, and recur in the solving of [equations](!/trigonometry/equations) throughout the subject.`,
};




   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
          seoData: {
        title: "Right Triangle Trigonometry | Learn Math Class",
        description: "Master right triangle trigonometry: SOH CAH TOA ratios, finding missing sides and angles, 45-45-90 and 30-60-90 special triangles, and real-world applications.",
        keywords: keyWords.join(", "),
        url: "/trigonometry/right-triangle",
         name: "Right Triangle Trigonometry"
      },

       }
    }
   }

export default function RightTrianglePage({seoData,sectionsContent , introContent, faqQuestions, schemas}) {


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
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
        ]
    },
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Right Triangle</h1>
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
