import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../pages/pages.css'
import Head from 'next/head'


export async function getStaticProps(){

  const keyWords = [
  "trigonometric form complex numbers",
  "polar form complex numbers",
  "modulus of complex number",
  "argument of complex number",
  "principal argument",
  "cis notation",
  "complex number angle",
  "convert algebraic to trigonometric",
  "convert polar to rectangular",
  "complex multiplication polar form",
  "complex division polar form",
  "r cis theta",
  "argument quadrant",
  "atan2 complex numbers",
  "polar coordinates complex plane"
]

  // •

//   \u2022 First item
// \u2022 Second item

  
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

    obj1: {
  title: `Why a New Representation?`,
  content: `Computing $(1 + i)^{10}$ in algebraic form requires expanding a binomial to the tenth power — dozens of terms, careful bookkeeping, and ample opportunity for error. The trigonometric form reduces this calculation to a few seconds of mental arithmetic.

The key insight comes from the [geometric representation](!/complex-numbers/geometric-representation) of complex numbers. Every complex number corresponds to a point in the plane, and every point can be described two ways: by its Cartesian coordinates $(a, b)$ or by its polar coordinates $(r, \\theta)$. The algebraic form uses Cartesian coordinates. The trigonometric form uses polar coordinates.

Two parameters define a complex number in this representation:

- **Modulus** ($r$): The distance from the origin to the point, identical to the [absolute value](!/complex-numbers/absolute-value) $|z|$.

- **Argument** ($\\theta$): The angle formed between the positive real axis and the line segment connecting the origin to the point.

This shift from rectangular to polar thinking unlocks powerful computational shortcuts. Multiplication becomes rotation combined with scaling. Division becomes counter-rotation combined with shrinking. Powers and roots reduce to simple arithmetic on the modulus and argument.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj2:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
  

    obj2: {
  title: `Modulus (Radius)`,
  content: `The modulus of a complex number $z = a + bi$ measures its distance from the origin in the complex plane. This quantity is computed using the Pythagorean theorem:

$$r = |z| = \\sqrt{a^2 + b^2}$$

The modulus is always a non-negative real number. It equals zero only when both $a = 0$ and $b = 0$, meaning $z = 0$ is the sole complex number with zero modulus.

## Examples

For $z = 3 + 4i$:
$$r = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$

For $z = -2 + 2i$:
$$r = \\sqrt{(-2)^2 + 2^2} = \\sqrt{4 + 4} = \\sqrt{8} = 2\\sqrt{2}$$

For $z = -5i$:
$$r = \\sqrt{0^2 + (-5)^2} = \\sqrt{25} = 5$$

The modulus represents the "size" of a complex number without regard to its direction. Two numbers with the same modulus lie on a circle of radius $r$ centered at the origin.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj3:{
  
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj3: {
  title: `Argument (Angle)`,
  content: `The argument of a complex number $z$ is the angle $\\theta$ measured from the positive real axis to the line segment connecting the origin to $z$. By convention, angles measured counterclockwise are positive, and angles measured clockwise are negative.

The notation $\\arg(z) = \\theta$ denotes the argument of $z$. Arguments are typically expressed in radians, though degrees appear in elementary contexts.

## Finding the Argument

For $z = a + bi$ with $a \\neq 0$, the tangent of the argument satisfies:

$$\\tan\\theta = \\frac{b}{a}$$

However, the arctangent function alone does not determine $\\theta$ uniquely. The equation $\\tan\\theta = \\frac{b}{a}$ has solutions in two quadrants, so you must identify which quadrant contains $z$ and select the appropriate angle.

## The Argument Is Not Unique

Adding any integer multiple of $2\\pi$ to an argument produces another valid argument for the same complex number. If $\\theta$ is an argument of $z$, then so is $\\theta + 2\\pi k$ for any integer $k$. The number $z = 1 + i$ has argument $\\frac{\\pi}{4}$, but also $\\frac{\\pi}{4} + 2\\pi = \\frac{9\\pi}{4}$, and $\\frac{\\pi}{4} - 2\\pi = -\\frac{7\\pi}{4}$, and infinitely many others.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj4:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj4: {
  title: `The Principal Argument`,
  content: `To avoid ambiguity, mathematicians define a unique representative called the principal argument. The principal argument of $z$, denoted $\\text{Arg}(z)$ with a capital A, is the unique argument lying in a specified standard interval.

Two conventions exist:

- **Convention 1:** $\\text{Arg}(z) \\in (-\\pi, \\pi]$

- **Convention 2:** $\\text{Arg}(z) \\in [0, 2\\pi)$

The first convention is more common in advanced mathematics. Under this convention, arguments range from just above $-\\pi$ (pointing almost directly left, slightly below the axis) through $\\pi$ (pointing directly left).

## Examples Using $(-\\pi, \\pi]$

For $z = 1$ (positive real): $\\text{Arg}(z) = 0$

For $z = i$ (positive imaginary): $\\text{Arg}(z) = \\frac{\\pi}{2}$

For $z = -1$ (negative real): $\\text{Arg}(z) = \\pi$

For $z = -i$ (negative imaginary): $\\text{Arg}(z) = -\\frac{\\pi}{2}$

For $z = 1 + i$ (first quadrant): $\\text{Arg}(z) = \\frac{\\pi}{4}$

For $z = -1 - i$ (third quadrant): $\\text{Arg}(z) = -\\frac{3\\pi}{4}$

The principal argument provides a canonical choice when a unique angle is required.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj5:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj5: {
  title: `Quadrant Considerations`,
  content: `The formula $\\theta = \\arctan(b/a)$ returns values in $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$, which covers only the right half of the plane. For complex numbers in the left half-plane, adjustments are necessary.

## Quadrant I: $a > 0$, $b > 0$

The arctangent gives the correct angle directly:
$$\\theta = \\arctan\\left(\\frac{b}{a}\\right)$$

## Quadrant II: $a < 0$, $b > 0$

Add $\\pi$ to the arctangent result:
$$\\theta = \\arctan\\left(\\frac{b}{a}\\right) + \\pi$$

## Quadrant III: $a < 0$, $b < 0$

Subtract $\\pi$ from the arctangent result (for principal argument in $(-\\pi, \\pi]$):
$$\\theta = \\arctan\\left(\\frac{b}{a}\\right) - \\pi$$

## Quadrant IV: $a > 0$, $b < 0$

The arctangent gives the correct angle directly (it will be negative):
$$\\theta = \\arctan\\left(\\frac{b}{a}\\right)$$

## Alternative: The atan2 Function

Many calculators and programming languages provide $\\text{atan2}(b, a)$, which automatically handles quadrant adjustment and returns the principal argument directly.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj6:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj6: {
  title: `Special Angles on the Axes`,
  content: `When a complex number lies on one of the coordinate axes, the argument takes a standard value that requires no calculation.

## Positive Real Axis

For $z = a$ where $a > 0$:
$$\\theta = 0$$

The number points directly to the right.

## Positive Imaginary Axis

For $z = bi$ where $b > 0$:
$$\\theta = \\frac{\\pi}{2} \\quad (90°)$$

The number points directly upward.

## Negative Real Axis

For $z = a$ where $a < 0$:
$$\\theta = \\pi \\quad (180°)$$

The number points directly to the left.

## Negative Imaginary Axis

For $z = bi$ where $b < 0$:
$$\\theta = -\\frac{\\pi}{2} \\quad (-90°) \\quad \\text{or equivalently} \\quad \\frac{3\\pi}{2} \\quad (270°)$$

The number points directly downward. Which value you use depends on your chosen interval for the principal argument.

## The Origin

For $z = 0$, the argument is undefined. A point at the origin has no direction from itself.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj7:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj7: {
  title: `The Trigonometric Form`,
  content: `With modulus $r$ and argument $\\theta$ defined, the trigonometric form expresses a complex number as:

$$z = r(\\cos\\theta + i\\sin\\theta)$$

This formula encodes the relationship between polar and Cartesian coordinates. The real part is $a = r\\cos\\theta$ and the imaginary part is $b = r\\sin\\theta$.

## The cis Notation

Because the combination $\\cos\\theta + i\\sin\\theta$ appears constantly, an abbreviated notation exists:

$$\\text{cis}\\,\\theta = \\cos\\theta + i\\sin\\theta$$

Using this shorthand, the trigonometric form becomes:

$$z = r\\,\\text{cis}\\,\\theta$$

The notation "cis" stands for "cosine + i sine." It appears frequently in precalculus and engineering contexts.

## Connection to Exponential Form

The trigonometric form leads directly to the [exponential form](!/complex-numbers/exponential-form) through Euler's formula:

$$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$$

This identity shows that $\\text{cis}\\,\\theta = e^{i\\theta}$, so the trigonometric and exponential forms are two notations for the same representation.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj8:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj8: {
  title: `Converting Algebraic to Trigonometric`,
  content: `To convert $z = a + bi$ into trigonometric form $z = r\\,\\text{cis}\\,\\theta$:

**Step 1:** Calculate the modulus.
$$r = \\sqrt{a^2 + b^2}$$

**Step 2:** Determine the argument using $\\tan\\theta = \\frac{b}{a}$ with appropriate quadrant adjustment.

**Step 3:** Write the result as $z = r\\,\\text{cis}\\,\\theta$ or $z = r(\\cos\\theta + i\\sin\\theta)$.

## Example 1: Convert $z = 1 + \\sqrt{3}i$

Step 1: $r = \\sqrt{1^2 + (\\sqrt{3})^2} = \\sqrt{1 + 3} = \\sqrt{4} = 2$

Step 2: $\\tan\\theta = \\frac{\\sqrt{3}}{1} = \\sqrt{3}$. Since $a > 0$ and $b > 0$ (first quadrant), $\\theta = \\arctan(\\sqrt{3}) = \\frac{\\pi}{3}$.

Step 3: $z = 2\\,\\text{cis}\\,\\frac{\\pi}{3}$

## Example 2: Convert $z = -3 - 3i$

Step 1: $r = \\sqrt{(-3)^2 + (-3)^2} = \\sqrt{9 + 9} = \\sqrt{18} = 3\\sqrt{2}$

Step 2: $\\tan\\theta = \\frac{-3}{-3} = 1$. Since $a < 0$ and $b < 0$ (third quadrant), $\\theta = \\arctan(1) - \\pi = \\frac{\\pi}{4} - \\pi = -\\frac{3\\pi}{4}$.

Step 3: $z = 3\\sqrt{2}\\,\\text{cis}\\left(-\\frac{3\\pi}{4}\\right)$`,
  before: ``,
  after: ``,
  link: '',
},
    // obj9:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj9: {
  title: `Converting Trigonometric to Algebraic`,
  content: `To convert $z = r\\,\\text{cis}\\,\\theta$ into algebraic form $z = a + bi$:

**Step 1:** Calculate the real part.
$$a = r\\cos\\theta$$

**Step 2:** Calculate the imaginary part.
$$b = r\\sin\\theta$$

**Step 3:** Write the result as $z = a + bi$.

## Example 1: Convert $z = 4\\,\\text{cis}\\,60°$

Step 1: $a = 4\\cos 60° = 4 \\cdot \\frac{1}{2} = 2$

Step 2: $b = 4\\sin 60° = 4 \\cdot \\frac{\\sqrt{3}}{2} = 2\\sqrt{3}$

Step 3: $z = 2 + 2\\sqrt{3}i$

## Example 2: Convert $z = 5\\,\\text{cis}\\,\\frac{3\\pi}{2}$

Step 1: $a = 5\\cos\\frac{3\\pi}{2} = 5 \\cdot 0 = 0$

Step 2: $b = 5\\sin\\frac{3\\pi}{2} = 5 \\cdot (-1) = -5$

Step 3: $z = 0 + (-5)i = -5i$

## Example 3: Convert $z = 2\\,\\text{cis}\\,\\frac{5\\pi}{6}$

Step 1: $a = 2\\cos\\frac{5\\pi}{6} = 2 \\cdot \\left(-\\frac{\\sqrt{3}}{2}\\right) = -\\sqrt{3}$

Step 2: $b = 2\\sin\\frac{5\\pi}{6} = 2 \\cdot \\frac{1}{2} = 1$

Step 3: $z = -\\sqrt{3} + i$`,
  before: ``,
  after: ``,
  link: '',
},
    // obj10:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj10: {
  title: `Multiplication and Division in Trigonometric Form`,
  content: `The trigonometric form reveals that [multiplication](!/complex-numbers/operations) of complex numbers combines rotation with scaling, while division reverses both operations.

## Multiplication Rule

For $z_1 = r_1\\,\\text{cis}\\,\\theta_1$ and $z_2 = r_2\\,\\text{cis}\\,\\theta_2$:

$$z_1 \\cdot z_2 = r_1 r_2\\,\\text{cis}(\\theta_1 + \\theta_2)$$

Multiply the moduli and add the arguments. Geometrically, multiplying by $z_2$ scales distances by $r_2$ and rotates by angle $\\theta_2$.

## Division Rule

For $z_1 = r_1\\,\\text{cis}\\,\\theta_1$ and $z_2 = r_2\\,\\text{cis}\\,\\theta_2$ with $z_2 \\neq 0$:

$$\\frac{z_1}{z_2} = \\frac{r_1}{r_2}\\,\\text{cis}(\\theta_1 - \\theta_2)$$

Divide the moduli and subtract the arguments.

## Example: Multiplication

Let $z_1 = 2\\,\\text{cis}\\,30°$ and $z_2 = 3\\,\\text{cis}\\,45°$.

$$z_1 \\cdot z_2 = (2)(3)\\,\\text{cis}(30° + 45°) = 6\\,\\text{cis}\\,75°$$

## Example: Division

Let $z_1 = 10\\,\\text{cis}\\,\\frac{2\\pi}{3}$ and $z_2 = 2\\,\\text{cis}\\,\\frac{\\pi}{6}$.

$$\\frac{z_1}{z_2} = \\frac{10}{2}\\,\\text{cis}\\left(\\frac{2\\pi}{3} - \\frac{\\pi}{6}\\right) = 5\\,\\text{cis}\\,\\frac{\\pi}{2}$$

These formulas extend naturally to [De Moivre's theorem](!/complex-numbers/de-moivres-theorem), which handles powers and roots with equal elegance.`,
  before: ``,
  after: `@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[De Moivre's Theorem](!/complex-numbers/de-moivres-theorem) →@`,
  link: '',
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
  title: "Describing Complex Numbers by Distance and Direction",
  content: `The [algebraic form](!/complex-numbers/algebraic-form) $z = a + bi$ works well for addition and subtraction, but becomes unwieldy when computing powers and roots. Trigonometric form offers an alternative description: instead of specifying horizontal and vertical components, we specify how far a number lies from the origin and at what angle. This polar perspective transforms multiplication into rotation and scaling, making operations that are tedious in algebraic form almost trivial.`
}

const faqQuestions = {
  obj1: {
    question: "What is the trigonometric form of a complex number?",
    answer: "The trigonometric form expresses a complex number as z = r(cos θ + i sin θ) or z = r cis θ, where r is the modulus (distance from the origin) and θ is the argument (angle from the positive real axis). This form is equivalent to polar coordinates."
  },
  obj2: {
    question: "What is the modulus of a complex number?",
    answer: "The modulus of z = a + bi is r = |z| = √(a² + b²), which measures the distance from the origin to the point in the complex plane. It is always a non-negative real number and equals zero only when z = 0."
  },
  obj3: {
    question: "What is the argument of a complex number?",
    answer: "The argument of a complex number z is the angle θ measured from the positive real axis to the line segment connecting the origin to z. Counterclockwise angles are positive, clockwise angles are negative. It is denoted arg(z)."
  },
  obj4: {
    question: "Why is the argument of a complex number not unique?",
    answer: "Adding any integer multiple of 2π to an argument produces another valid argument for the same complex number. If θ is an argument of z, then θ + 2πk is also an argument for any integer k, since rotating by full circles returns to the same point."
  },
  obj5: {
    question: "What is the principal argument?",
    answer: "The principal argument, denoted Arg(z) with a capital A, is the unique argument lying in a standard interval, typically (-π, π]. This convention provides a canonical choice when a single unique angle is required."
  },
  obj6: {
    question: "What is cis notation?",
    answer: "Cis notation is an abbreviation where cis θ = cos θ + i sin θ. Using this shorthand, the trigonometric form becomes z = r cis θ. The name 'cis' stands for 'cosine plus i sine.'"
  },
  obj7: {
    question: "How do you find the argument in different quadrants?",
    answer: "For Quadrant I and IV (a > 0), use θ = arctan(b/a) directly. For Quadrant II (a < 0, b > 0), add π to the result. For Quadrant III (a < 0, b < 0), subtract π from the result. Alternatively, the atan2(b, a) function handles all quadrants automatically."
  },
  obj8: {
    question: "What is the argument of a number on the real or imaginary axis?",
    answer: "For positive reals: θ = 0. For positive imaginaries (like bi where b > 0): θ = π/2. For negative reals: θ = π. For negative imaginaries: θ = -π/2 or equivalently 3π/2. For z = 0, the argument is undefined."
  },
  obj9: {
    question: "How do you convert from algebraic to trigonometric form?",
    answer: "To convert z = a + bi to trigonometric form: (1) Calculate r = √(a² + b²), (2) Find θ using tan θ = b/a with appropriate quadrant adjustment, (3) Write as z = r cis θ or z = r(cos θ + i sin θ)."
  },
  obj10: {
    question: "How do you convert from trigonometric to algebraic form?",
    answer: "To convert z = r cis θ to algebraic form: (1) Calculate a = r cos θ, (2) Calculate b = r sin θ, (3) Write as z = a + bi."
  },
  obj11: {
    question: "How do you multiply complex numbers in trigonometric form?",
    answer: "For z₁ = r₁ cis θ₁ and z₂ = r₂ cis θ₂, the product is z₁ · z₂ = r₁r₂ cis(θ₁ + θ₂). Multiply the moduli and add the arguments. Geometrically, this combines scaling by r₂ with rotation by θ₂."
  },
  obj12: {
    question: "How do you divide complex numbers in trigonometric form?",
    answer: "For z₁ = r₁ cis θ₁ and z₂ = r₂ cis θ₂ with z₂ ≠ 0, the quotient is z₁/z₂ = (r₁/r₂) cis(θ₁ - θ₂). Divide the moduli and subtract the arguments."
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Trigonometric Form of Complex Numbers",
    "description": "Learn the trigonometric (polar) form of complex numbers: modulus, argument, principal argument, cis notation, and how to convert between algebraic and polar forms.",
    "url": "https://www.learnmathclass.com/complex-numbers/trigonometric-form",
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
      "name": "Trigonometric Form of Complex Numbers"
    },
    "teaches": [
      "Definition and purpose of trigonometric (polar) form",
      "Computing the modulus of a complex number",
      "Finding the argument and principal argument",
      "Quadrant considerations for argument calculation",
      "The cis notation and its connection to exponential form",
      "Converting between algebraic and trigonometric forms",
      "Multiplication and division using trigonometric form"
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
        "name": "Complex Numbers",
        "item": "https://www.learnmathclass.com/complex-numbers"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Trigonometric Form",
        "item": "https://www.learnmathclass.com/complex-numbers/trigonometric-form"
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


  //  return {
  //     props:{
  //        sectionsContent,
  //        introContent,
  //         seoData: {
  //       title: "Trigonometric Form | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/complex-numbers/trigonometric-form",
  //        name: "name"
  //     },
        
  //      }
  //   }

  return {
  props:{
    sectionsContent,
    introContent,
    faqQuestions,
    schemas,
    seoData: {
      title: "Trigonometric Form of Complex Numbers | Learn Math Class",
      description: "Learn the trigonometric (polar) form of complex numbers: modulus, argument, principal argument, cis notation, and how to convert between algebraic and polar forms.",
      keywords: keyWords.join(", "),
      url: "/complex-numbers/trigonometric-form",
      name: "Trigonometric Form of Complex Numbers"
    },
  }
}
   }

// export default function TrigoFormPage({seoData,sectionsContent , introContent}) {
export default function TrigoFormPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   {/* <Head>
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
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": seoData.name,
        "description": seoData.description,
        "keywords": seoData.keywords,
        "url": `https://www.learnmathclass.com${seoData.url}`,
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "mainEntity": {
          "@type": "Article",
          "name": seoData.name,
          "dateModified": new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          }
        }
      })
    }}
  />
</Head> */}
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Trigonometric Form</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}/>
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
