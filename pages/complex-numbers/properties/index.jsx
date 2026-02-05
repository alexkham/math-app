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
  "complex number properties",
  "field axioms complex numbers",
  "complex numbers field",
  "complex conjugate properties",
  "modulus properties",
  "argument properties",
  "triangle inequality complex numbers",
  "algebraic closure",
  "fundamental theorem of algebra",
  "ordered field",
  "commutative property complex numbers",
  "associative property complex numbers",
  "distributive property",
  "multiplicative inverse complex number",
  "reverse triangle inequality"
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
  title: `Overview of Complex Number Properties`,
  content: `The properties of complex numbers fall into distinct categories based on their origin and nature.

**Arithmetic properties** govern basic operations — addition, subtraction, multiplication, and division. These properties derive from the fact that complex numbers form what mathematicians call a field, an algebraic structure shared with the [real numbers](!/complex-numbers/algebraic-form) $\\mathbb{R}$ and rational numbers $\\mathbb{Q}$. Any rule that works for real arithmetic also works for complex arithmetic.

**Conjugate, modulus, and argument properties** are unique to complex numbers. The [conjugate](!/complex-numbers/complex-conjugate) $\\overline{z}$ reflects a number across the real axis. The [modulus](!/complex-numbers/absolute-value) $|z|$ measures distance from the origin. The [argument](!/complex-numbers/trigonometric-form) $\\arg(z)$ specifies direction. Each of these concepts carries its own set of rules describing how it behaves under arithmetic operations.

**Algebraic closure** is a property that makes $\\mathbb{C}$ more powerful than $\\mathbb{R}$. Every polynomial equation has solutions in the complex numbers — a guarantee that real numbers cannot provide.

**Ordering** is a property that $\\mathbb{C}$ lacks. Unlike real numbers, complex numbers cannot be arranged on a line from smallest to largest. The familiar comparisons "greater than" and "less than" do not apply.

The sections that follow examine each category in detail.`,
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
  title: `Complex Numbers as a Field`,
  content: `In abstract algebra, a field is a set equipped with two operations — addition and multiplication — that satisfy a specific collection of axioms. These axioms guarantee predictable arithmetic: you can add, subtract, multiply, and divide (except by zero) and always obtain a result within the same set.

The rational numbers $\\mathbb{Q}$ form a field. So do the real numbers $\\mathbb{R}$. The complex numbers $\\mathbb{C}$ extend this pattern — they too satisfy every field axiom.

Why does this matter? Because field structure ensures that algebraic techniques transfer seamlessly. Factoring, expanding, simplifying, solving equations — all the methods developed for real numbers work identically for complex numbers. No special cases, no exceptions, no hidden traps.

The field axioms divide into several groups:

• **Closure:** Operations keep you inside the set

• **Commutativity:** Order of operands does not matter

• **Associativity:** Grouping of operands does not matter

• **Identity elements:** Zero for addition, one for multiplication

• **Inverse elements:** Every number has a negative; every nonzero number has a reciprocal

• **Distributivity:** Multiplication distributes over addition

The next section lists these axioms precisely and confirms that $\\mathbb{C}$ satisfies each one.`,
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
  title: `Arithmetic Properties (Field Axioms)`,
  content: `The eleven field axioms, all satisfied by $\\mathbb{C}$:

## Closure

• $z_1 + z_2 \\in \\mathbb{C}$ for all $z_1, z_2 \\in \\mathbb{C}$

• $z_1 \\cdot z_2 \\in \\mathbb{C}$ for all $z_1, z_2 \\in \\mathbb{C}$

Adding or multiplying complex numbers always produces a complex number.

## Commutativity

• $z_1 + z_2 = z_2 + z_1$

• $z_1 \\cdot z_2 = z_2 \\cdot z_1$

Order does not affect the result.

## Associativity

• $(z_1 + z_2) + z_3 = z_1 + (z_2 + z_3)$

• $(z_1 \\cdot z_2) \\cdot z_3 = z_1 \\cdot (z_2 \\cdot z_3)$

Grouping does not affect the result.

## Identity Elements

• Additive identity: $z + 0 = z$

• Multiplicative identity: $z \\cdot 1 = z$

## Inverse Elements

• Additive inverse: For every $z$, there exists $-z$ such that $z + (-z) = 0$

• Multiplicative inverse: For every $z \\neq 0$, there exists $z^{-1}$ such that $z \\cdot z^{-1} = 1$

The multiplicative inverse is $z^{-1} = \\frac{\\overline{z}}{|z|^2}$.

## Distributivity

• $z_1 \\cdot (z_2 + z_3) = z_1 \\cdot z_2 + z_1 \\cdot z_3$

Multiplication distributes over addition.

These eleven properties guarantee that complex arithmetic behaves consistently and predictably, just like real arithmetic.`,
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
  title: `Properties of the Conjugate`,
  content: `The [complex conjugate](!/complex-numbers/complex-conjugate) $\\overline{z}$ of $z = a + bi$ is $\\overline{z} = a - bi$. Conjugation interacts with arithmetic operations in predictable ways.

## Conjugate of a Conjugate

$$\\overline{\\overline{z}} = z$$

Conjugating twice returns the original number.

## Conjugate of a Sum

$$\\overline{z_1 + z_2} = \\overline{z_1} + \\overline{z_2}$$

The conjugate of a sum equals the sum of conjugates.

## Conjugate of a Difference

$$\\overline{z_1 - z_2} = \\overline{z_1} - \\overline{z_2}$$

## Conjugate of a Product

$$\\overline{z_1 \\cdot z_2} = \\overline{z_1} \\cdot \\overline{z_2}$$

The conjugate of a product equals the product of conjugates.

## Conjugate of a Quotient

$$\\overline{\\left(\\frac{z_1}{z_2}\\right)} = \\frac{\\overline{z_1}}{\\overline{z_2}}$$

## Extracting Real and Imaginary Parts

$$z + \\overline{z} = 2\\text{Re}(z)$$

$$z - \\overline{z} = 2i \\cdot \\text{Im}(z)$$

## Product with Conjugate

$$z \\cdot \\overline{z} = |z|^2$$

A complex number multiplied by its conjugate yields the square of its [modulus](!/complex-numbers/absolute-value) — always a non-negative real number. This property is essential for [division](!/complex-numbers/operations) of complex numbers.`,
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
  title: `Properties of the Modulus`,
  content: `The [modulus](!/complex-numbers/absolute-value) $|z|$ of $z = a + bi$ is $|z| = \\sqrt{a^2 + b^2}$, representing the distance from the origin to $z$ in the complex plane.

## Non-Negativity

$$|z| \\geq 0$$

$$|z| = 0 \\iff z = 0$$

The modulus is zero only for the number zero itself.

## Modulus of a Conjugate

$$|\\overline{z}| = |z|$$

A number and its [conjugate](!/complex-numbers/complex-conjugate) have equal moduli.

## Modulus of a Product

$$|z_1 \\cdot z_2| = |z_1| \\cdot |z_2|$$

The modulus of a product equals the product of moduli.

## Modulus of a Quotient

$$\\left|\\frac{z_1}{z_2}\\right| = \\frac{|z_1|}{|z_2|}$$

## Modulus of a Power

$$|z^n| = |z|^n$$

## Triangle Inequality

$$|z_1 + z_2| \\leq |z_1| + |z_2|$$

The distance from the origin to $z_1 + z_2$ never exceeds the sum of individual distances. Geometrically, one side of a triangle cannot exceed the sum of the other two sides.

## Reverse Triangle Inequality

$$\\big||z_1| - |z_2|\\big| \\leq |z_1 - z_2|$$

The difference of moduli never exceeds the modulus of the difference.`,
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
  title: `Properties of the Argument`,
  content: `The [argument](!/complex-numbers/trigonometric-form) $\\arg(z)$ is the angle from the positive real axis to the line connecting the origin to $z$. Arguments are determined only up to multiples of $2\\pi$, so the following properties hold modulo $2\\pi$.

## Argument of a Product

$$\\arg(z_1 \\cdot z_2) = \\arg(z_1) + \\arg(z_2)$$

Multiplying complex numbers adds their arguments. Geometrically, multiplication rotates by the sum of the angles.

## Argument of a Quotient

$$\\arg\\left(\\frac{z_1}{z_2}\\right) = \\arg(z_1) - \\arg(z_2)$$

Dividing complex numbers subtracts arguments.

## Argument of a Power

$$\\arg(z^n) = n \\cdot \\arg(z)$$

Raising to the $n$th power multiplies the argument by $n$. This property underlies [De Moivre's theorem](!/complex-numbers/de-moivres-theorem).

## Argument of a Conjugate

$$\\arg(\\overline{z}) = -\\arg(z)$$

Conjugation reflects across the real axis, negating the angle.

## Argument of a Negative

$$\\arg(-z) = \\arg(z) + \\pi$$

Negation rotates by $180°$.

## Note on Multivaluedness

Since $\\arg(z)$ is defined only up to $2\\pi k$ for integer $k$, these equalities hold in the sense that representative values from each side differ by a multiple of $2\\pi$. When using the principal argument $\\text{Arg}(z)$, results may need adjustment to stay within the chosen interval.`,
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
  title: `Algebraic Closure`,
  content: `A field is algebraically closed if every non-constant polynomial with coefficients in that field has at least one root in that field. The complex numbers are algebraically closed. The real numbers are not.

## The Fundamental Theorem of Algebra

Every polynomial of degree $n \\geq 1$ with complex coefficients has exactly $n$ roots in $\\mathbb{C}$, counting multiplicity.

This theorem guarantees that polynomial equations always have solutions — no need to invent further number systems beyond $\\mathbb{C}$.

## Why $\\mathbb{R}$ Fails

The polynomial $x^2 + 1 = 0$ has no real solutions. No real number squared equals $-1$. This limitation motivated the creation of complex numbers in the first place.

In $\\mathbb{C}$, the equation $x^2 + 1 = 0$ has two solutions: $x = i$ and $x = -i$.

## Practical Consequence

When factoring polynomials over $\\mathbb{C}$, every polynomial of degree $n$ factors completely into $n$ linear factors:

$$p(z) = a_n(z - r_1)(z - r_2)\\cdots(z - r_n)$$

Over $\\mathbb{R}$, some polynomials resist complete factorization. Over $\\mathbb{C}$, none do.

For more on polynomial roots, see [equations and polynomials](!/complex-numbers/equations-and-polynomials).`,
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
  title: `What Complex Numbers Lack`,
  content: `Despite their algebraic completeness, complex numbers lack one property that real numbers possess: order.

## Not an Ordered Field

The real numbers are ordered. Given distinct $a, b \\in \\mathbb{R}$, either $a < b$ or $b < a$. This ordering respects arithmetic: if $a < b$, then $a + c < b + c$ for any $c$, and $ac < bc$ when $c > 0$.

No such ordering exists for $\\mathbb{C}$. There is no way to define "$<$" on complex numbers that remains consistent with the field operations.

## Why Ordering Fails

Suppose an ordering existed. Consider where $i$ falls relative to $0$.

**Case 1:** $i > 0$

Then $i \\cdot i > 0$, so $i^2 > 0$, meaning $-1 > 0$. But this contradicts $1 > 0$ (which must hold in any ordered field).

**Case 2:** $i < 0$

Then $-i > 0$, so $(-i)(-i) > 0$, meaning $i^2 > 0$, so $-1 > 0$. Same contradiction.

Neither case works. The number $i$ cannot be consistently placed relative to $0$, and the same argument applies to every non-real complex number.

## What We Can Compare

Although $z_1 < z_2$ is meaningless for complex numbers, we can compare their [moduli](!/complex-numbers/absolute-value). The statement $|z_1| < |z_2|$ is well-defined because moduli are real numbers. We compare sizes, not positions.`,
  before: ``,
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
  title: "The Rules Governing Complex Arithmetic",
  content: `Complex numbers obey specific rules that determine how they interact under arithmetic operations. Some of these properties arise from the algebraic structure shared with real numbers, while others are unique to the complex number system. Understanding these properties provides the foundation for manipulating complex expressions, simplifying calculations, and recognizing what complex numbers can and cannot do.`
}

const faqQuestions = {
  obj1: {
    question: "What is a field in mathematics?",
    answer: "A field is a set equipped with two operations (addition and multiplication) that satisfy specific axioms: closure, commutativity, associativity, identity elements, inverse elements, and distributivity. Fields guarantee predictable arithmetic where you can add, subtract, multiply, and divide (except by zero)."
  },
  obj2: {
    question: "Are complex numbers a field?",
    answer: "Yes, the complex numbers ℂ form a field. They satisfy all eleven field axioms, which means algebraic techniques developed for real numbers work identically for complex numbers — factoring, expanding, simplifying, and solving equations all transfer seamlessly."
  },
  obj3: {
    question: "What is the multiplicative inverse of a complex number?",
    answer: "For a nonzero complex number z, the multiplicative inverse is z⁻¹ = z̄/|z|², where z̄ is the conjugate and |z| is the modulus. This formula uses the property that z · z̄ = |z|² to eliminate the imaginary part from the denominator."
  },
  obj4: {
    question: "What are the conjugate properties of complex numbers?",
    answer: "Key conjugate properties include: the conjugate of a conjugate returns the original (double conjugate), conjugate distributes over addition and multiplication, z · z̄ = |z|², and z + z̄ = 2Re(z). The conjugate of a quotient equals the quotient of conjugates."
  },
  obj5: {
    question: "What is the product of a complex number and its conjugate?",
    answer: "A complex number multiplied by its conjugate always yields the square of its modulus: z · z̄ = |z|² = a² + b² for z = a + bi. This result is always a non-negative real number and is essential for complex division."
  },
  obj6: {
    question: "What is the modulus of a product of complex numbers?",
    answer: "The modulus of a product equals the product of the moduli: |z₁ · z₂| = |z₁| · |z₂|. Similarly, the modulus of a quotient equals the quotient of moduli, and the modulus of a power equals the modulus raised to that power."
  },
  obj7: {
    question: "What is the triangle inequality for complex numbers?",
    answer: "The triangle inequality states |z₁ + z₂| ≤ |z₁| + |z₂|. Geometrically, the distance from the origin to z₁ + z₂ never exceeds the sum of the individual distances. This is equivalent to saying one side of a triangle cannot exceed the sum of the other two."
  },
  obj8: {
    question: "What is the reverse triangle inequality?",
    answer: "The reverse triangle inequality states ||z₁| - |z₂|| ≤ |z₁ - z₂|. The absolute difference of moduli never exceeds the modulus of the difference. This provides a lower bound complementing the upper bound from the standard triangle inequality."
  },
  obj9: {
    question: "How does the argument behave under multiplication?",
    answer: "The argument of a product equals the sum of arguments: arg(z₁ · z₂) = arg(z₁) + arg(z₂). Geometrically, multiplying complex numbers adds their angles. Similarly, division subtracts arguments, and raising to a power multiplies the argument by the exponent."
  },
  obj10: {
    question: "What is algebraic closure?",
    answer: "A field is algebraically closed if every non-constant polynomial with coefficients in that field has at least one root in that field. The complex numbers are algebraically closed, meaning every polynomial equation has solutions in ℂ. The real numbers are not algebraically closed."
  },
  obj11: {
    question: "What is the Fundamental Theorem of Algebra?",
    answer: "The Fundamental Theorem of Algebra states that every polynomial of degree n ≥ 1 with complex coefficients has exactly n roots in ℂ, counting multiplicity. This guarantees polynomial equations always have solutions without needing number systems beyond the complex numbers."
  },
  obj12: {
    question: "Why can't complex numbers be ordered?",
    answer: "Complex numbers cannot be ordered because no consistent definition of 'less than' exists. If i > 0, then i² > 0, meaning -1 > 0 — a contradiction. If i < 0, then -i > 0, so (-i)² > 0, again giving -1 > 0. Neither case works, so no ordering is possible."
  },
  obj13: {
    question: "Can you compare complex numbers at all?",
    answer: "While z₁ < z₂ is meaningless for complex numbers, you can compare their moduli. The statement |z₁| < |z₂| is well-defined because moduli are real numbers. We compare sizes (distances from origin), not positions."
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Properties of Complex Numbers",
    "description": "Learn properties of complex numbers: field axioms, conjugate properties, modulus and argument rules, triangle inequality, algebraic closure, and why complex numbers cannot be ordered.",
    "url": "https://www.learnmathclass.com/complex-numbers/properties",
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
      "name": "Properties of Complex Numbers"
    },
    "teaches": [
      "Complex numbers as a mathematical field",
      "The eleven field axioms and their verification",
      "Properties of the complex conjugate",
      "Properties of the modulus including triangle inequality",
      "Properties of the argument under arithmetic operations",
      "Algebraic closure and the Fundamental Theorem of Algebra",
      "Why complex numbers cannot be ordered"
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
        "name": "Properties",
        "item": "https://www.learnmathclass.com/complex-numbers/properties"
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
  //       title: "Properties of Complex Numbers | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/complex-numbers/properties",
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
      title: "Properties of Complex Numbers: Field Axioms | Learn Math Class",
      description: "Learn properties of complex numbers: field axioms, conjugate properties, modulus and argument rules, triangle inequality, algebraic closure, and why complex numbers cannot be ordered.",
      keywords: keyWords.join(", "),
      url: "/complex-numbers/properties",
      name: "Properties of Complex Numbers"
    },
  }
}
   }

// export default function PropertiesPage({seoData,sectionsContent , introContent}) {

export default function PropertiesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Compex Numbers Properties</h1>
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
