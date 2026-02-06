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
  "complex conjugate",
  "conjugate of complex number",
  "z bar notation",
  "complex conjugate definition",
  "conjugate properties",
  "z times z bar",
  "conjugate pairs",
  "reflection real axis",
  "divide complex numbers conjugate",
  "conjugate modulus",
  "z* notation",
  "real part conjugate",
  "imaginary part conjugate",
  "conjugate polynomial roots",
  "complex number division"
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
  title: `Definition of the Conjugate`,
  before: ``,
  content: `For any complex number $z = a + bi$, the conjugate is defined as:

$$\\bar{z} = a - bi$$

The operation preserves the real part $a$ exactly while reversing the sign of the imaginary part. Where the original number has $+bi$, the conjugate has $-bi$. Where the original has $-bi$, the conjugate has $+bi$. Only the vertical component changes; the horizontal component remains untouched.

Concrete examples illustrate the pattern. The conjugate of $3 + 2i$ is $3 - 2i$. The conjugate of $-1 - 4i$ is $-1 + 4i$ — the negative imaginary part becomes positive. The conjugate of $5$ (a real number, written as $5 + 0i$) is simply $5$ — with no imaginary part to flip, nothing changes. The conjugate of $7i$ (pure imaginary, written as $0 + 7i$) is $-7i$ — the entire number negates because the real part contributes nothing.

Two notations appear in mathematical literature. The overline $\\bar{z}$ dominates pure mathematics and most textbooks. The asterisk $z^*$ appears frequently in physics and engineering, particularly in quantum mechanics and signal processing. Both symbols denote the identical operation. This text uses the overline convention, but readers should recognize both forms as equivalent.

The conjugate is not the same as negation. The negative of $3 + 2i$ is $-3 - 2i$, changing both signs. The conjugate $3 - 2i$ changes only the imaginary sign. Confusing these operations leads to errors, particularly when manipulating equations involving both.`,
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
  title: `Geometric Interpretation`,
  before: ``,
  content: `The [complex plane](!/complex-numbers/geometric-representation) transforms the conjugate from an algebraic rule into a visible action. If $z = a + bi$ corresponds to the point $(a, b)$, then $\\bar{z} = a - bi$ corresponds to $(a, -b)$. The horizontal coordinate stays fixed while the vertical coordinate negates. This is reflection across the real axis.

Picture the real axis as a horizontal mirror. Every point above the axis has a mirror image below; every point below has an image above. The conjugate operation sends each complex number to its reflection. The point $2 + 3i$ at coordinates $(2, 3)$ reflects to $2 - 3i$ at $(2, -3)$. The point $-1 - 4i$ at $(-1, -4)$ reflects to $-1 + 4i$ at $(-1, 4)$.

Points lying directly on the mirror remain stationary. These are precisely the real numbers — they have no vertical displacement to reverse, so conjugation leaves them unchanged. The number $5$ sits at $(5, 0)$ on the real axis, and its reflection lands at the same spot. This geometric fact corresponds to the algebraic observation that $\\bar{a} = a$ for any real $a$.

Points on the imaginary axis exhibit different behavior. They lie perpendicular to the mirror, equidistant above and below the real axis. Reflection sends each to the opposite side of the origin. The number $4i$ at $(0, 4)$ reflects to $-4i$ at $(0, -4)$. For pure imaginary numbers, conjugation equals negation: $\\bar{z} = -z$.

The reflection interpretation explains why conjugating twice returns the original number. Reflect a point across a line, then reflect again across the same line — the point returns home. Two mirror operations cancel completely, regardless of where the point started.`,
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
  title: `Fundamental Properties`,
  before: ``,
  content: `The conjugate operation interacts predictably with arithmetic. Five properties govern how conjugation passes through sums, products, and powers, enabling simplification of complicated expressions.

The involution property states that conjugating twice recovers the original: $\\overline{\\bar{z}} = z$. Apply the definition twice: if $z = a + bi$, then $\\bar{z} = a - bi$, and $\\overline{\\bar{z}} = a - (-b)i = a + bi = z$. The double sign flip restores the original imaginary part. Geometrically, reflecting twice across the same axis brings every point back to its starting position.

Additivity allows conjugation to distribute over sums: $\\overline{z_1 + z_2} = \\bar{z_1} + \\bar{z_2}$. The conjugate of a sum equals the sum of the conjugates. Proof: let $z_1 = a + bi$ and $z_2 = c + di$. Then $z_1 + z_2 = (a + c) + (b + d)i$, so $\\overline{z_1 + z_2} = (a + c) - (b + d)i = (a - bi) + (c - di) = \\bar{z_1} + \\bar{z_2}$. The same property extends to subtraction: $\\overline{z_1 - z_2} = \\bar{z_1} - \\bar{z_2}$.

Multiplicativity states that conjugation distributes over products: $\\overline{z_1 \\cdot z_2} = \\bar{z_1} \\cdot \\bar{z_2}$. The conjugate of a product equals the product of the conjugates. Verification requires expanding both sides and comparing — the algebra confirms equality. This property proves invaluable when simplifying products or verifying identities.

Division follows the same pattern: $\\overline{z_1 / z_2} = \\bar{z_1} / \\bar{z_2}$ for $z_2 \\neq 0$. Conjugation passes through quotients just as it passes through products.

Powers inherit the multiplicative property: $\\overline{z^n} = (\\bar{z})^n$ for any integer $n$. Repeated application of the product rule establishes this for positive integers, and the quotient rule extends it to negative integers. Conjugating a power equals powering the conjugate.`,
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
  title: `Conjugate and Modulus`,
  before: ``,
  content: `A fundamental identity connects the conjugate to the [modulus](!/complex-numbers/absolute-value):

$$z \\cdot \\bar{z} = |z|^2$$

The product of any complex number with its conjugate yields the square of its modulus — a real, non-negative value. This relationship lies at the heart of complex arithmetic.

The proof follows from direct expansion. Let $z = a + bi$, so $\\bar{z} = a - bi$. The product becomes:

$$z \\cdot \\bar{z} = (a + bi)(a - bi) = a^2 - abi + abi - b^2i^2 = a^2 - b^2(-1) = a^2 + b^2$$

The middle terms cancel, and $i^2 = -1$ converts the final term to positive. The result $a^2 + b^2$ matches the definition $|z|^2 = a^2 + b^2$ exactly.

This identity explains why $z \\cdot \\bar{z}$ always produces a real number. The imaginary parts eliminate each other through the cancellation of $-abi$ and $+abi$. No matter how complicated $z$ appears, multiplying by its conjugate guarantees a real outcome.

A related fact: conjugation preserves modulus. The numbers $z$ and $\\bar{z}$ lie at equal distances from the origin, as reflection across a line through the origin does not change radial distance. Algebraically, $|\\bar{z}| = |a - bi| = \\sqrt{a^2 + (-b)^2} = \\sqrt{a^2 + b^2} = |z|$. The identity $|\\bar{z}| = |z|$ holds universally.

Taking square roots of $z \\cdot \\bar{z} = |z|^2$ gives $|z| = \\sqrt{z \\cdot \\bar{z}}$, an alternative formula for modulus that sometimes proves more convenient than $\\sqrt{a^2 + b^2}$.`,
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
  title: `Classification Theorems`,
  before: ``,
  content: `The conjugate provides algebraic tests for determining whether a complex number belongs to special subcategories. Two classification theorems identify real numbers and [pure imaginary numbers](!/complex-numbers/imaginary-numbers) through their relationship with their conjugates.

The first theorem: a complex number $z$ is real if and only if $z = \\bar{z}$.

For the forward direction, suppose $z$ is real, meaning $z = a + 0i = a$ for some $a \\in \\mathbb{R}$. Then $\\bar{z} = a - 0i = a = z$. The conjugate equals the original.

For the reverse direction, suppose $z = \\bar{z}$. Writing $z = a + bi$, the equation becomes $a + bi = a - bi$. Comparing imaginary parts: $b = -b$, which forces $2b = 0$ and thus $b = 0$. With zero imaginary part, $z = a$ is real.

Geometrically, real numbers sit on the real axis — the mirror line for conjugation. Points on a mirror remain fixed under reflection, so $z = \\bar{z}$ characterizes exactly those points.

The second theorem: a complex number $z$ is pure imaginary if and only if $\\bar{z} = -z$.

Forward: if $z = bi$ for real $b$, then $\\bar{z} = -bi = -(bi) = -z$.

Reverse: if $\\bar{z} = -z$, then $a - bi = -a - bi$. Comparing real parts: $a = -a$, so $2a = 0$ and $a = 0$. The number has no real part and is pure imaginary.

Geometrically, pure imaginaries sit on the imaginary axis, perpendicular to the mirror. Reflection through the real axis sends each such point to its opposite through the origin, making $\\bar{z} = -z$.`,
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
  title: `Useful Identities`,
  before: ``,
  content: `Three identities involving $z$ and $\\bar{z}$ appear constantly in calculations. Each extracts specific information from a complex number or produces a value with guaranteed properties.

The sum of a number and its conjugate isolates the real part:

$$z + \\bar{z} = (a + bi) + (a - bi) = 2a$$

The imaginary terms cancel, leaving twice the real part. Rearranging provides a formula: $Re(z) = \\frac{z + \\bar{z}}{2}$. This identity guarantees that $z + \\bar{z}$ is always real, regardless of the original number. Encountering this sum in any calculation signals that the result lies on the real axis.

The difference between a number and its conjugate isolates the imaginary part:

$$z - \\bar{z} = (a + bi) - (a - bi) = 2bi$$

The real terms cancel, leaving twice the imaginary term. Rearranging: $Im(z) = \\frac{z - \\bar{z}}{2i}$. This identity guarantees that $z - \\bar{z}$ is always pure imaginary. The result necessarily sits on the vertical axis.

The product of a number and its conjugate yields the squared modulus:

$$z \\cdot \\bar{z} = a^2 + b^2 = |z|^2$$

This result is always real and always non-negative. It equals zero only when $z = 0$. The identity underlies division, modulus computation, and countless proofs.

These three identities — sum, difference, and product with the conjugate — form a toolkit for manipulating complex expressions. Recognizing when they apply often transforms an intimidating calculation into straightforward algebra.`,
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
  title: `Applications to Division`,
  before: ``,
  content: `Division of complex numbers requires expressing the quotient in standard [algebraic form](!/complex-numbers/algebraic-form) $a + bi$. A complex denominator violates this requirement — the conjugate provides the remedy.

Consider the division $\\frac{w}{z}$ where both $w$ and $z$ are complex. The denominator $z = c + di$ contains an imaginary part, preventing direct interpretation as a number in standard form. The strategy: multiply both numerator and denominator by $\\bar{z}$, the conjugate of the denominator.

$$\\frac{w}{z} = \\frac{w}{z} \\cdot \\frac{\\bar{z}}{\\bar{z}} = \\frac{w \\cdot \\bar{z}}{z \\cdot \\bar{z}} = \\frac{w \\cdot \\bar{z}}{|z|^2}$$

The denominator becomes $z \\cdot \\bar{z} = |z|^2$, a real number. The numerator $w \\cdot \\bar{z}$ is some complex number that can be computed by standard multiplication. Dividing a complex number by a real number simply scales both components, yielding standard form.

A complete example: compute $\\frac{3 + 2i}{1 - 4i}$.

The denominator is $1 - 4i$, so its conjugate is $1 + 4i$. Multiply numerator and denominator:

$$\\frac{3 + 2i}{1 - 4i} \\cdot \\frac{1 + 4i}{1 + 4i} = \\frac{(3 + 2i)(1 + 4i)}{(1 - 4i)(1 + 4i)}$$

The denominator: $(1 - 4i)(1 + 4i) = 1 - 16i^2 = 1 + 16 = 17$.

The numerator: $(3 + 2i)(1 + 4i) = 3 + 12i + 2i + 8i^2 = 3 + 14i - 8 = -5 + 14i$.

The quotient: $\\frac{-5 + 14i}{17} = -\\frac{5}{17} + \\frac{14}{17}i$.

Without the conjugate, no systematic method converts complex quotients to standard form. The identity $z \\cdot \\bar{z} = |z|^2$ makes the technique work — it guarantees the denominator becomes real.`,
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
  title: `Conjugate Pairs in Polynomials`,
  before: ``,
  content: `Polynomials with real coefficients exhibit remarkable structure in their complex roots: non-real roots always appear in conjugate pairs. If $z_0$ solves the equation, so does $\\bar{z_0}$.

The theorem states: let $p(z) = a_nz^n + a_{n-1}z^{n-1} + \\cdots + a_1z + a_0$ be a polynomial with all coefficients $a_k$ real. If $p(z_0) = 0$ for some complex number $z_0$, then $p(\\bar{z_0}) = 0$ as well.

The proof exploits how conjugation interacts with polynomial evaluation. Since conjugation distributes over sums and products, and since conjugating a real number leaves it unchanged:

$$\\overline{p(z_0)} = \\overline{a_nz_0^n + \\cdots + a_0} = a_n\\overline{z_0^n} + \\cdots + a_0 = a_n(\\bar{z_0})^n + \\cdots + a_0 = p(\\bar{z_0})$$

The key step uses $\\overline{a_k} = a_k$ because each coefficient is real. If $p(z_0) = 0$, then $\\overline{p(z_0)} = \\bar{0} = 0$, so $p(\\bar{z_0}) = 0$.

Consequences flow immediately. A real quadratic with no real roots must have two complex conjugate roots — if $2 + 3i$ solves it, so does $2 - 3i$. A real cubic always has at least one real root, since complex roots pair off and an odd number of roots cannot all be paired. A real polynomial of degree 4 might have four real roots, two real and two complex conjugates, or two pairs of complex conjugates — but never three real and one complex.

Conjugate pairs multiply to give real quadratic factors. If $z_0 = a + bi$ is a root, then $(z - z_0)(z - \\bar{z_0}) = z^2 - 2az + (a^2 + b^2)$, a quadratic with real coefficients. This factorization explains why every real polynomial factors completely into real linear and real quadratic terms — the [Fundamental Theorem of Algebra](!/complex-numbers/equations-and-polynomials) guarantees complex roots exist, and conjugate pairing ensures they combine into real factors.`,
  after: ``,
  link: '',
},
    obj9:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
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
  title: "The Mirror Operation",
  content: `
  The Mirror Operation
  `
}

const faqQuestions = {
  obj1: {
    question: "What is the complex conjugate?",
    answer: "For a complex number z = a + bi, the conjugate is z̄ = a - bi. It preserves the real part while negating the imaginary part. For example, the conjugate of 3 + 2i is 3 - 2i. Geometrically, it represents reflection across the real axis."
  },
  obj2: {
    question: "What does z̄ or z* notation mean?",
    answer: "Both z̄ (overline) and z* (asterisk) denote the complex conjugate. The overline notation dominates in pure mathematics, while the asterisk appears frequently in physics and engineering, especially in quantum mechanics and signal processing. They represent the identical operation."
  },
  obj3: {
    question: "What is the geometric meaning of the conjugate?",
    answer: "The conjugate is reflection across the real axis in the complex plane. If z = a + bi corresponds to point (a, b), then z̄ = a - bi corresponds to (a, -b). The real axis acts as a mirror, with points above reflecting to corresponding points below."
  },
  obj4: {
    question: "What is z times z̄ equal to?",
    answer: "The product z·z̄ equals |z|², the square of the modulus. For z = a + bi, we get z·z̄ = (a + bi)(a - bi) = a² + b². This product is always a real, non-negative number, and equals zero only when z = 0."
  },
  obj5: {
    question: "What happens when you conjugate twice?",
    answer: "Conjugating twice returns the original number: z̄̄ = z. This is called the involution property. Geometrically, reflecting across the real axis twice brings every point back to its starting position."
  },
  obj6: {
    question: "Does conjugation distribute over addition and multiplication?",
    answer: "Yes. For addition: the conjugate of z₁ + z₂ equals z̄₁ + z̄₂. For multiplication: the conjugate of z₁·z₂ equals z̄₁·z̄₂. These properties also extend to subtraction, division, and powers."
  },
  obj7: {
    question: "How do you know if a complex number is real using conjugates?",
    answer: "A complex number z is real if and only if z = z̄. Real numbers sit on the real axis, which is the mirror line for conjugation. Points on a mirror remain fixed under reflection, so z = z̄ characterizes exactly the real numbers."
  },
  obj8: {
    question: "How do you know if a complex number is pure imaginary using conjugates?",
    answer: "A complex number z is pure imaginary if and only if z̄ = -z. Pure imaginary numbers sit on the imaginary axis, perpendicular to the mirror. Reflection sends each to its opposite through the origin, making the conjugate equal the negative."
  },
  obj9: {
    question: "How does the conjugate help with complex division?",
    answer: "To divide w/z, multiply both numerator and denominator by z̄: (w/z)·(z̄/z̄) = (w·z̄)/(z·z̄) = (w·z̄)/|z|². The denominator becomes real (|z|²), allowing the quotient to be written in standard form a + bi."
  },
  obj10: {
    question: "What is the formula for the real and imaginary parts using conjugates?",
    answer: "Re(z) = (z + z̄)/2 and Im(z) = (z - z̄)/(2i). The sum z + z̄ = 2a isolates the real part, and the difference z - z̄ = 2bi isolates the imaginary part. These identities appear frequently in calculations."
  },
  obj11: {
    question: "Does the conjugate preserve the modulus?",
    answer: "Yes, |z̄| = |z|. The conjugate has the same distance from the origin as the original number because reflection across a line through the origin does not change radial distance. Algebraically, |a - bi| = √(a² + b²) = |a + bi|."
  },
  obj12: {
    question: "Why do complex roots of real polynomials come in conjugate pairs?",
    answer: "Because conjugation distributes over polynomial evaluation and leaves real coefficients unchanged. If p(z₀) = 0 for polynomial p with real coefficients, then p(z̄₀) = p̄(z₀) = 0̄ = 0. So z̄₀ is also a root."
  },
  obj13: {
    question: "Is the conjugate the same as negation?",
    answer: "No. The negative of 3 + 2i is -3 - 2i (both signs change). The conjugate of 3 + 2i is 3 - 2i (only the imaginary sign changes). Confusing these operations leads to errors. They coincide only for pure imaginary numbers."
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Complex Conjugate",
    "description": "Master the complex conjugate: definition, geometric meaning as reflection, properties, the identity z·z̄ = |z|², applications to division, and conjugate pairs in polynomial roots.",
    "url": "https://www.learnmathclass.com/complex-numbers/complex-conjugate",
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
      "name": "Complex Conjugate"
    },
    "teaches": [
      "Definition of complex conjugate z̄ = a - bi",
      "Geometric interpretation as reflection across real axis",
      "Properties: involution, additivity, multiplicativity",
      "The identity z·z̄ = |z|²",
      "Classification theorems for real and pure imaginary numbers",
      "Using conjugates for complex division",
      "Conjugate pairs in real polynomial roots"
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
        "name": "Complex Conjugate",
        "item": "https://www.learnmathclass.com/complex-numbers/complex-conjugate"
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
  //       title: "Complex Conjugate Page | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/complex-numbers/complex-conjugate",
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
      title: "Complex Conjugate: Definition & Properties | Learn Math Class",
      description: "Master the complex conjugate: definition, geometric meaning as reflection, properties, the identity z·z̄ = |z|², applications to division, and conjugate pairs in polynomial roots.",
      keywords: keyWords.join(", "),
      url: "/complex-numbers/complex-conjugate",
      name: "Complex Conjugate"
    },
  }
}
   }

// export default function ComplexConjugatePage({seoData,sectionsContent , introContent}) {


export default function ComplexConjugatePage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
    // {
    //     id:'9',
    //     title:sectionsContent.obj9.title,
    //     link:sectionsContent.obj9.link,
    //     content:[
    //       sectionsContent.obj9.content,
    //     ]
    // },
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Complex Conjugate</h1>
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
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}
