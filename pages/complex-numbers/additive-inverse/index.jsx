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
  "additive inverse complex number",
  "negative complex number",
  "opposite complex number",
  "negate complex number",
  "complex number minus z",
  "additive inverse definition",
  "complex subtraction",
  "reflection through origin",
  "additive inverse vs conjugate",
  "complex number negation",
  "additive inverse formula",
  "z plus negative z equals zero",
  "complex additive identity",
  "inverse properties complex",
  "negate real imaginary parts"
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
    // obj10:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
    obj1: {
  title: `Additive Inverse in Real Numbers`,
  content: `Before examining complex numbers, consider how additive inverses work in the familiar real number system.

For any real number $a$, the additive inverse is $-a$. The defining property is:

$$a + (-a) = 0$$

The sum of a number and its additive inverse always equals zero.

## Examples

- The additive inverse of $5$ is $-5$, since $5 + (-5) = 0$

- The additive inverse of $-3$ is $3$, since $-3 + 3 = 0$

- The additive inverse of $\\frac{7}{2}$ is $-\\frac{7}{2}$, since $\\frac{7}{2} + \\left(-\\frac{7}{2}\\right) = 0$

## Geometric Interpretation

On the number line, a number and its additive inverse lie at equal distances from the origin but on opposite sides. The number $5$ sits five units to the right of zero; its inverse $-5$ sits five units to the left. They are mirror images across the origin.

## Uniqueness

Every real number has exactly one additive inverse. If $a + x = 0$ and $a + y = 0$, then $x = y$. No real number has two different additive inverses, and no real number lacks one.

This structure carries over completely to complex numbers.`,
  before: ``,
  after: ``,
  link: '',
},
obj2: {
  title: `Additive Inverse of a Complex Number`,
  content: `The additive inverse of a complex number follows the same principle as real numbers: find the number that sums to zero. For a complex number $z = a + bi$, the additive inverse is:

$$-z = -a - bi$$

Both the real part and the imaginary part are negated. The defining property remains unchanged:

$$z + (-z) = 0$$

Verification is straightforward. Adding $z = a + bi$ to $-z = -a - bi$ gives:

$$(a + bi) + (-a - bi) = (a + (-a)) + (b + (-b))i = 0 + 0i = 0$$

The real components cancel and the imaginary components cancel, leaving zero.

Consider $z = 3 + 2i$. The additive inverse is $-z = -3 - 2i$. Adding them: $(3 + 2i) + (-3 - 2i) = 0$. For $z = -4 + 5i$, the inverse is $-z = 4 - 5i$. The signs of both components flip. For $z = -1 - 7i$, the inverse is $-z = 1 + 7i$. A number in the third quadrant has its inverse in the first quadrant, and vice versa.

The pattern is consistent: whatever signs the real and imaginary parts carry, the additive inverse reverses both.`,
  before: ``,
  after: ``,
  link: '',
},
obj3: {
  title: `Notation`,
  content: `The additive inverse of $z$ is written $-z$. This notation mirrors the real number convention and means exactly what it suggests: the number that, when added to $z$, yields zero.

When $z$ is given explicitly, the inverse can be written in multiple equivalent forms. For $z = a + bi$, the additive inverse may appear as $-z$, as $-(a + bi)$, or as $-a - bi$. All three expressions denote the same complex number.

Parentheses matter when expressions become nested. The additive inverse of $-3 + 2i$ is $-(-3 + 2i) = 3 - 2i$. Without parentheses, $--3 + 2i$ becomes ambiguous or malformed. Writing $-(-3 + 2i)$ makes the double negation explicit and the result clear.

In equations, the statement $z + w = 0$ implies $w = -z$. If two complex numbers sum to zero, each is the additive inverse of the other. This relationship is symmetric: if $w = -z$, then equally $z = -w$.

When working with the [algebraic form](!/complex-numbers/algebraic-form), writing the inverse as $-a - bi$ often proves clearest. When working abstractly or with named variables, $-z$ is more compact. Context determines which notation communicates most effectively.`,
  before: ``,
  after: ``,
  link: '',
},
obj4: {
  title: `Geometric Interpretation`,
  content: `In the [complex plane](!/complex-numbers/geometric-representation), a complex number $z = a + bi$ corresponds to the point $(a, b)$. Its additive inverse $-z = -a - bi$ corresponds to the point $(-a, -b)$. The relationship between these two points reveals a clean geometric picture.

The additive inverse is the reflection of $z$ through the origin. Not across the real axis, not across the imaginary axis, but through the origin itself — the single point where both axes intersect. If $z$ lies in the first quadrant, $-z$ lies in the third. If $z$ lies in the second quadrant, $-z$ lies in the fourth. The origin sits exactly midway between any number and its additive inverse.

The [modulus](!/complex-numbers/absolute-value) remains unchanged under this reflection:

$$|-z| = |z|$$

Both $z$ and $-z$ lie at the same distance from the origin. They occupy opposite ends of a diameter of the circle centered at the origin with radius $|z|$.

The [argument](!/complex-numbers/trigonometric-form) shifts by exactly $\\pi$ radians:

$$\\arg(-z) = \\arg(z) + \\pi$$

If $z$ points in direction $\\theta$, then $-z$ points in direction $\\theta + \\pi$ — the exact opposite direction. A rotation of $180°$ about the origin carries $z$ to $-z$.

This geometric understanding unifies the algebraic definition. Negating both coordinates, preserving distance, reversing direction, and reflecting through the origin are all descriptions of the same transformation.`,
  before: ``,
  after: ``,
  link: '',
},
obj5: {
  title: `Properties of Additive Inverse`,
  content: `The additive inverse interacts predictably with other operations on complex numbers. These properties follow from the definitions and mirror the corresponding rules for real numbers.

Double negation returns the original number:

$$-(-z) = z$$

Taking the additive inverse twice leaves $z$ unchanged. Reflecting through the origin twice brings you back to where you started.

Negation distributes over addition:

$$-(z_1 + z_2) = -z_1 - z_2$$

The inverse of a sum equals the sum of the inverses. This property underlies the familiar rule for expanding expressions like $-(3 + 2i + 4 - i)$.

Negation and [conjugation](!/complex-numbers/complex-conjugate) commute:

$$-\\overline{z} = \\overline{-z}$$

It does not matter whether you conjugate first and then negate, or negate first and then conjugate. For $z = 3 + 2i$, we have $\\overline{z} = 3 - 2i$ and $-\\overline{z} = -3 + 2i$. Alternatively, $-z = -3 - 2i$ and $\\overline{-z} = -3 + 2i$. Both paths arrive at the same destination.

The [modulus](!/complex-numbers/absolute-value) is unchanged:

$$|-z| = |z|$$

Distance from the origin depends only on position, not direction.

The [argument](!/complex-numbers/trigonometric-form) shifts by $\\pi$:

$$\\arg(-z) = \\arg(z) + \\pi$$

Direction reverses completely, adding half a full rotation.`,
  before: ``,
  after: ``,
  link: '',
},

obj6: {
  title: `Additive Inverse vs. Complex Conjugate`,
  content: `Students frequently confuse the additive inverse with the [complex conjugate](!/complex-numbers/complex-conjugate). Both operations involve changing signs, but they change different signs and produce different geometric effects.

The conjugate of $z = a + bi$ is $\\overline{z} = a - bi$. Only the imaginary part changes sign. The real part remains untouched.

The additive inverse of $z = a + bi$ is $-z = -a - bi$. Both parts change sign. Nothing remains untouched.

Consider $z = 3 + 2i$. The conjugate is $\\overline{z} = 3 - 2i$ — same real part, opposite imaginary part. The additive inverse is $-z = -3 - 2i$ — both parts negated. These are different numbers occupying different locations in the complex plane.

Geometrically, conjugation reflects across the real axis. A point above the axis moves to the corresponding point below, and vice versa. The horizontal position stays fixed. Additive inversion reflects through the origin. A point moves to the diametrically opposite position, with both coordinates reversed.

For $z = 4 + 3i$: the conjugate $\\overline{z} = 4 - 3i$ lies directly below $z$, reflected across the horizontal axis. The additive inverse $-z = -4 - 3i$ lies diagonally opposite, reflected through the origin.

When are they equal? Only for pure imaginary numbers. If $z = bi$ with $b \\neq 0$, then $\\overline{z} = -bi$ and $-z = -bi$. Both operations produce the same result. For any number with a nonzero real part, conjugate and additive inverse differ.

The most common mistake is writing $-(3 + 2i) = -3 + 2i$, negating only the real part. This produces the negation of the conjugate, not the additive inverse. The correct result is $-(3 + 2i) = -3 - 2i$, with both signs flipped.`,
  before: ``,
  after: ``,
  link: '',
},


obj7: {
  title: `The Zero Case`,
  content: `The complex number zero occupies a unique position in the additive structure. It is the only complex number that equals its own additive inverse.

For $z = 0 = 0 + 0i$, the additive inverse is:

$$-0 = -0 - 0i = 0 + 0i = 0$$

Negating zero returns zero. The equation $0 + 0 = 0$ confirms the defining property: zero added to its inverse yields zero.

No other complex number shares this property. For any $z \\neq 0$, the additive inverse $-z$ differs from $z$. If $z = a + bi$ with at least one of $a$ or $b$ nonzero, then $-z = -a - bi$ cannot equal $z$ because either $-a \\neq a$ or $-b \\neq b$ (or both).

Zero also serves as the additive identity — the unique complex number satisfying $z + 0 = z$ for every $z$. These two roles are connected. The additive identity must be its own inverse: if $0 + 0 = 0$ follows from the identity property, and $0 + (-0) = 0$ follows from the inverse property, then $0 = -0$.

Geometrically, zero sits at the origin of the complex plane. Reflection through the origin maps the origin to itself. Every other point moves to a different location; the origin alone stays fixed.`,
  before: ``,
  after: ``,
  link: '',
},

obj8: {
  title: `Connection to Subtraction`,
  content: `Subtraction of complex numbers is not a separate operation but rather addition in disguise. To subtract one complex number from another, add the additive inverse:

$$z_1 - z_2 = z_1 + (-z_2)$$

This definition reduces subtraction to addition, which is already well understood. All properties of subtraction follow from properties of addition combined with properties of the additive inverse.

Consider $(5 + 3i) - (2 + 7i)$. The additive inverse of $2 + 7i$ is $-2 - 7i$. Adding:

$$(5 + 3i) + (-2 - 7i) = (5 + (-2)) + (3 + (-7))i = 3 - 4i$$

This matches the component-wise subtraction rule: subtract real parts and subtract imaginary parts. The rule works precisely because subtraction means adding the inverse, and the inverse negates both components.

The connection explains why subtraction inherits certain behaviors. Subtraction is not commutative: $z_1 - z_2 \\neq z_2 - z_1$ in general, because $z_1 + (-z_2) \\neq z_2 + (-z_1)$ unless $z_1 = z_2$. Subtraction is not associative in the usual sense, but the expression $z_1 - z_2 - z_3$ is unambiguous when read left to right as $(z_1 - z_2) - z_3 = z_1 + (-z_2) + (-z_3)$.

For detailed coverage of subtraction and other arithmetic, see [operations](!/complex-numbers/operations).`,
  before: ``,
  after: ``,
  link: '',
},


obj9: {
  title: `Uniqueness`,
  content: `Every complex number has exactly one additive inverse. Not zero inverses, not two inverses — precisely one.

The existence is clear: for any $z = a + bi$, the number $-z = -a - bi$ satisfies the defining property $z + (-z) = 0$. An additive inverse always exists.

Uniqueness requires a short argument. Suppose $w_1$ and $w_2$ are both additive inverses of $z$, meaning $z + w_1 = 0$ and $z + w_2 = 0$. Then:

$$w_1 = w_1 + 0 = w_1 + (z + w_2) = (w_1 + z) + w_2 = 0 + w_2 = w_2$$

The two supposed inverses must be the same. No complex number admits two different additive inverses.

This uniqueness is not an accident but a consequence of the [field axioms](!/complex-numbers/properties) that govern complex arithmetic. In any field, additive inverses are unique. The argument above uses only associativity of addition and the properties of zero as the additive identity — both guaranteed by the field structure.

Uniqueness justifies the notation $-z$. If multiple inverses existed, writing $-z$ would be ambiguous — which inverse do we mean? Because exactly one inverse exists, the notation refers unambiguously to that single number.`,
  before: ``,
  after: ``,
  link: '',
},



obj10: {
  title: `Common Mistakes`,
  content: `Several errors appear repeatedly when students work with additive inverses of complex numbers. Recognizing these patterns helps avoid them.

The most frequent mistake is negating only the real part. Given $z = 3 + 2i$, a student writes $-z = -3 + 2i$ instead of the correct $-z = -3 - 2i$. This error produces the negative of the [conjugate](!/complex-numbers/complex-conjugate), not the additive inverse. Both components must change sign.

The reverse error also occurs: negating only the imaginary part. Writing $-z = 3 - 2i$ instead of $-z = -3 - 2i$ produces the conjugate, not the additive inverse. Again, both components must change sign.

Confusion between $-z$ and $\overline{z}$ underlies both mistakes. The conjugate flips one sign; the additive inverse flips both. Keeping this distinction clear prevents the errors.

Sign mistakes compound in subtraction. Computing $(5 + 2i) - (3 - 4i)$ requires the additive inverse of $3 - 4i$, which is $-3 + 4i$. The full calculation:

$$(5 + 2i) + (-3 + 4i) = 2 + 6i$$

A common error is writing $(5 + 2i) - (3 - 4i) = 5 + 2i - 3 - 4i = 2 - 2i$, forgetting that subtracting $-4i$ means adding $+4i$. Distributing the negative sign completely — to both the real and imaginary parts of the subtracted number — eliminates this mistake.

When in doubt, write out the additive inverse explicitly before combining terms. Converting $z_1 - z_2$ to $z_1 + (-z_2)$ and computing $-z_2$ as a separate step reduces errors.`,
  before: ``,
  after: ``,
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
  title: "The Number That Cancels Through Addition",
  content: `Every complex number has a counterpart that, when added to it, produces zero. This counterpart is called the additive inverse. The concept extends directly from real numbers, where $5$ and $-5$ cancel each other, to complex numbers, where both the real and imaginary parts must be negated. Understanding the additive inverse clarifies the nature of subtraction and reveals a fundamental symmetry in the [complex plane](!/complex-numbers/geometric-representation).`
}

const faqQuestions = {
  obj1: {
    question: "What is the additive inverse of a complex number?",
    answer: "The additive inverse of z = a + bi is -z = -a - bi. Both the real part and the imaginary part are negated. The defining property is z + (-z) = 0: a number plus its additive inverse always equals zero."
  },
  obj2: {
    question: "How do you find the additive inverse of a complex number?",
    answer: "Negate both components. For z = a + bi, the additive inverse is -z = -a - bi. For example, the additive inverse of 3 + 2i is -3 - 2i, and the additive inverse of -4 + 5i is 4 - 5i."
  },
  obj3: {
    question: "What is the geometric meaning of the additive inverse?",
    answer: "The additive inverse is the reflection of z through the origin in the complex plane. If z lies in the first quadrant, -z lies in the third. Both z and -z are equidistant from the origin but point in opposite directions, separated by exactly π radians."
  },
  obj4: {
    question: "What is the difference between additive inverse and conjugate?",
    answer: "The additive inverse -z negates both parts: for z = a + bi, -z = -a - bi. The conjugate z̄ negates only the imaginary part: z̄ = a - bi. Geometrically, -z reflects through the origin while z̄ reflects across the real axis."
  },
  obj5: {
    question: "Does taking the additive inverse change the modulus?",
    answer: "No. The modulus is preserved: |-z| = |z|. Both z and -z lie at the same distance from the origin. They occupy opposite ends of a diameter of the circle centered at the origin with radius |z|."
  },
  obj6: {
    question: "What happens to the argument when taking the additive inverse?",
    answer: "The argument shifts by π radians: arg(-z) = arg(z) + π. If z points in direction θ, then -z points in direction θ + π — the exact opposite direction. This corresponds to a 180° rotation about the origin."
  },
  obj7: {
    question: "Is the additive inverse unique?",
    answer: "Yes. Every complex number has exactly one additive inverse. If w₁ and w₂ both satisfy z + w = 0, then w₁ = w₂. This uniqueness justifies writing -z without ambiguity."
  },
  obj8: {
    question: "How is subtraction related to additive inverse?",
    answer: "Subtraction is defined as adding the additive inverse: z₁ - z₂ = z₁ + (-z₂). This reduces subtraction to addition. The component-wise rule works because -z₂ negates both parts of z₂."
  },
  obj9: {
    question: "What is the additive inverse of zero?",
    answer: "The additive inverse of 0 is 0 itself. Zero is the only complex number equal to its own additive inverse. Geometrically, the origin is the only point that maps to itself under reflection through the origin."
  },
  obj10: {
    question: "What is double negation of a complex number?",
    answer: "Double negation returns the original: -(-z) = z. Taking the additive inverse twice leaves the number unchanged. Reflecting through the origin twice brings you back to the starting point."
  },
  obj11: {
    question: "Do negation and conjugation commute?",
    answer: "Yes. The order does not matter: -z̄ = (-z)̄. For z = 3 + 2i, both paths give -3 + 2i. You can negate first then conjugate, or conjugate first then negate — the result is the same."
  },
  obj12: {
    question: "What is a common mistake with additive inverses?",
    answer: "The most common error is negating only one part. Writing -(3 + 2i) = -3 + 2i is wrong — this produces the negative of the conjugate. The correct result is -(3 + 2i) = -3 - 2i, with both signs flipped."
  },
  obj13: {
    question: "When are the additive inverse and conjugate equal?",
    answer: "Only for pure imaginary numbers. If z = bi with b ≠ 0, then -z = -bi and z̄ = -bi, so they match. For any number with a nonzero real part, the additive inverse and conjugate are different."
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Additive Inverse of Complex Numbers",
    "description": "Learn the additive inverse of complex numbers: definition -z = -a - bi, geometric meaning as reflection through origin, properties, comparison with conjugate, connection to subtraction, and common mistakes.",
    "url": "https://www.learnmathclass.com/complex-numbers/additive-inverse",
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
      "name": "Additive Inverse of Complex Numbers"
    },
    "teaches": [
      "Definition of additive inverse: -z = -a - bi",
      "Geometric interpretation as reflection through origin",
      "Properties: double negation, distribution, modulus preservation",
      "Difference between additive inverse and conjugate",
      "Connection between subtraction and additive inverse",
      "Uniqueness of additive inverse",
      "Common mistakes when negating complex numbers"
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
        "name": "Additive Inverse",
        "item": "https://www.learnmathclass.com/complex-numbers/additive-inverse"
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
  //       title: "Additive Inverse of a Complex Number | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/complex-numbers/additive-inverse",
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
      title: "Additive Inverse: Negation of Complex Numbers | Learn Math Class",
      description: "Learn the additive inverse of complex numbers: definition -z = -a - bi, geometric meaning as reflection through origin, properties, comparison with conjugate, connection to subtraction, and common mistakes.",
      keywords: keyWords.join(", "),
      url: "/complex-numbers/additive-inverse",
      name: "Additive Inverse of Complex Numbers"
    },
  }
}
   }

// export default function AdditiveInversePage({seoData,sectionsContent , introContent}) {


export default function AdditiveInversePage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Additive Inverse of a Complex Number</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
   showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "siblings"
         secondaryNavTitle="More in Complex Numbers"
   
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
   <Sections sections={genericSections}
   
   
   />
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}
