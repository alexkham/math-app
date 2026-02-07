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
  "algebraic form complex numbers",
  "standard form complex number",
  "a + bi form",
  "real part imaginary part",
  "Re(z) Im(z)",
  "complex number notation",
  "rectangular form complex",
  "complex number equality",
  "complex number components",
  "write complex number standard form",
  "identify real imaginary parts",
  "complex number format",
  "cartesian form complex",
  "complex number representation",
  "a plus bi"
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
  title: `The Standard Form of a Complex Number`,
  before: ``,
  content: `Every complex number can be written in a single canonical format: $z = a + bi$, where $a$ and $b$ are real numbers and $i$ is the [imaginary unit](!/complex-numbers/imaginary-numbers) satisfying $i^2 = -1$. This representation, called the standard form or algebraic form, provides a uniform way to express any element of $\\mathbb{C}$.

The structure mirrors a binomial with two distinct terms. The first term $a$ stands alone as an ordinary real number. The second term $bi$ combines a real coefficient $b$ with the imaginary unit. Addition joins them into a single mathematical object. The number $3 + 2i$ contains real term $3$ and imaginary term $2i$. The number $-1 + 7i$ has real term $-1$ and imaginary term $7i$. Even $4 - 5i$ fits this pattern when read as $4 + (-5)i$.

The real number $a$ is called the real part of $z$. The real number $b$ — not $bi$, just $b$ — is called the imaginary part. This terminology causes confusion at first, since the "imaginary part" is itself a real number. The name indicates which component of $z$ the value describes, not the nature of $b$ as a quantity.

The imaginary unit $i$ serves a structural role: it separates and distinguishes the two components. Without $i$, we could not tell where the real part ends and the imaginary part begins. The expression $a + bi$ packages two independent real values into one object, with $i$ acting as the marker that identifies which piece is which. This packaging allows complex numbers to encode two-dimensional information — a feature that becomes central when we explore the [geometric representation](!/complex-numbers/geometric-representation).

Special cases deserve mention. When $b = 0$, the imaginary term vanishes and $z = a + 0i = a$ reduces to a pure real number. When $a = 0$, the real term vanishes and $z = 0 + bi = bi$ becomes a [pure imaginary number](!/complex-numbers/imaginary-numbers). When both $a = 0$ and $b = 0$, we obtain $z = 0$, the complex number zero. Every real number and every pure imaginary number fits within the algebraic form as a special case — the complex numbers contain all previous number systems as subsets.`,
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
  title: `Real and Imaginary Parts: Formal Notation`,
  before: ``,
  content: `Mathematics benefits from precise notation, and the components of a complex number receive dedicated symbols. For any $z = a + bi$, we write $Re(z) = a$ to denote the real part and $Im(z) = b$ to denote the imaginary part. These functions extract the individual coordinates from the combined expression.

The notation $Re(z)$ reads as "the real part of $z$." Applied to $z = 7 + 4i$, we obtain $Re(7 + 4i) = 7$. The function strips away the imaginary term and returns what remains. Similarly, $Im(z)$ reads as "the imaginary part of $z$," and $Im(7 + 4i) = 4$. Note again: the output is $4$, not $4i$. The function extracts the coefficient, not the entire imaginary term.

Geometric interpretation reinforces the meaning. On the [complex plane](!/complex-numbers/geometric-representation), the real part measures horizontal displacement from the origin — movement along the real axis. The imaginary part measures vertical displacement — movement along the imaginary axis. The number $z = 3 - 2i$ sits at coordinates $(3, -2)$: three units right and two units down. Here $Re(z) = 3$ gives the horizontal coordinate and $Im(z) = -2$ gives the vertical coordinate.

Negative imaginary parts require careful handling. Consider $z = 5 - 3i$. Writing this in strict standard form yields $z = 5 + (-3)i$, revealing that the coefficient of $i$ is $-3$. Therefore $Re(z) = 5$ and $Im(z) = -3$. The negative sign belongs to the imaginary part; it does not float separately. Students who report $Im(5 - 3i) = 3$ have dropped the sign and produced an incorrect answer.

Both $Re$ and $Im$ are functions from $\\mathbb{C}$ to $\\mathbb{R}$. They accept a complex number as input and return a real number as output. No complex number emerges from either function — even when applied to the most elaborate complex expression, the result always belongs to the real number line. This property makes $Re$ and $Im$ essential tools for decomposing complex problems into real-valued components that standard techniques can address.`,
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
  title: `Equality of Complex Numbers`,
  before: ``,
  content: `When do two complex numbers count as the same? The answer demands more than casual inspection — equality in $\\mathbb{C}$ requires matching both components independently. Two complex numbers $z_1 = a + bi$ and $z_2 = c + di$ are equal if and only if $a = c$ and $b = d$. The real parts must match, and the imaginary parts must match. Neither condition alone suffices.

This principle seems obvious yet carries profound implications. The equation $a + bi = c + di$ splits into two separate real equations: $a = c$ from comparing real parts, and $b = d$ from comparing imaginary parts. A single complex equation yields two real constraints. This doubling of information proves invaluable for solving problems.

Consider the equation $z^2 = 3 + 4i$ where we seek $z = x + yi$ with real unknowns $x$ and $y$. Expanding: $(x + yi)^2 = x^2 + 2xyi + y^2i^2 = (x^2 - y^2) + 2xyi$. For this to equal $3 + 4i$, we need $x^2 - y^2 = 3$ and $2xy = 4$. The original complex equation has transformed into a system of two real equations in two real unknowns — a problem with familiar solution techniques.

This method extends broadly. Whenever a complex equation appears, equating real and imaginary parts separately converts the problem into real arithmetic. The strategy applies to polynomial equations, functional equations, and identities. What looks like one equation is actually two, and exploiting this duality simplifies countless calculations throughout complex analysis.

The equality criterion also explains why complex numbers cannot be ordered. With real numbers, we compare single values and declare one larger or smaller. Complex numbers carry two independent values, and no consistent rule determines whether $3 + 2i$ should rank above or below $1 + 5i$. We can compare their [moduli](!/complex-numbers/absolute-value), but the numbers themselves resist ordering.`,
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
  title: `The Complex Conjugate`,
  before: ``,
  content: `Every complex number $z = a + bi$ has a companion called its conjugate, written $\\bar{z}$ and defined as $\\bar{z} = a - bi$. The operation preserves the real part while negating the imaginary part — only the sign in front of $bi$ changes.

The geometric meaning becomes clear on the [complex plane](!/complex-numbers/geometric-representation). If $z$ sits at point $(a, b)$, then $\\bar{z}$ sits at $(a, -b)$. The two points share identical horizontal position but opposite vertical positions. Drawing both reveals mirror images reflected across the real axis. The conjugate of $3 + 2i$ is $3 - 2i$; the conjugate of $-1 - 4i$ is $-1 + 4i$; the conjugate of $5$ (a real number) is simply $5$.

Alternative notation uses $z^*$ instead of $\\bar{z}$, particularly in physics and engineering contexts. Both symbols denote the same operation. This text favors the overline notation $\\bar{z}$ as standard in pure mathematics.

The conjugate appears throughout complex analysis — in [division](!/complex-numbers/operations), in computing the [modulus](!/complex-numbers/absolute-value), in classifying numbers as real or [pure imaginary](!/complex-numbers/imaginary-numbers), and in polynomial theory. A [dedicated section](!/complex-numbers/complex-conjugate) explores the conjugate comprehensively: its algebraic properties, geometric interpretations, and applications to equations and simplification.`,
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
  title: `Properties of the Conjugate`,
  before: ``,
  content: `The conjugate operation obeys algebraic laws that make it compatible with standard arithmetic. These properties transform complex calculations by allowing conjugation to pass through sums, products, and quotients in predictable ways.

Taking the conjugate twice returns the original number: $\\overline{\\bar{z}} = z$. Reflection across the real axis, performed twice, brings every point back to its starting location. This involution property guarantees that conjugation is reversible.

Conjugation distributes over addition: $\\overline{z_1 + z_2} = \\bar{z_1} + \\bar{z_2}$. The conjugate of a sum equals the sum of the conjugates. The same holds for subtraction. This linearity means we can conjugate term by term when facing complicated expressions.

Conjugation also distributes over multiplication: $\\overline{z_1 \\cdot z_2} = \\bar{z_1} \\cdot \\bar{z_2}$. The conjugate of a product equals the product of the conjugates. Extending to division: $\\overline{z_1 / z_2} = \\bar{z_1} / \\bar{z_2}$, valid when $z_2 \\neq 0$. Powers follow naturally: $\\overline{z^n} = (\\bar{z})^n$ for any integer $n$.

These rules prove essential when simplifying expressions, verifying identities, and solving equations. Rather than computing a complicated product and then conjugating, we can conjugate each factor first and multiply afterward — often a simpler path. The [dedicated conjugate page](!/complex-numbers/complex-conjugate) provides complete proofs and extended applications of these properties.`,
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
  title: `Existence Theorems`,
  before: ``,
  content: `The conjugate provides algebraic tests for classifying complex numbers. Two theorems characterize when a complex number belongs to special subcategories — the real numbers and the [pure imaginary numbers](!/complex-numbers/imaginary-numbers).

The first theorem states: a complex number $z$ is real if and only if $z = \\bar{z}$. To verify, let $z = a + bi$. If $z$ is real, then $b = 0$, so $z = a$ and $\\bar{z} = a$, giving $z = \\bar{z}$. Conversely, if $z = \\bar{z}$, then $a + bi = a - bi$, which forces $bi = -bi$, meaning $2bi = 0$ and thus $b = 0$. The number must be real. This theorem lets us test whether an expression yields a real result without fully evaluating it — simply check if it equals its own conjugate.

The second theorem states: a complex number $z$ is pure imaginary if and only if $\\bar{z} = -z$. Again let $z = a + bi$. If $z$ is pure imaginary, then $a = 0$, so $z = bi$ and $\\bar{z} = -bi = -z$. Conversely, if $\\bar{z} = -z$, then $a - bi = -a - bi$, forcing $a = -a$ and therefore $a = 0$. The number has no real part and qualifies as pure imaginary.

Both theorems connect the conjugate operation to fundamental classification questions. A number lives on the real axis precisely when conjugation leaves it fixed. A number lives on the imaginary axis precisely when conjugation negates it. Every other complex number — those with nonzero real and imaginary parts — satisfies neither condition, lying off both axes in the interior of the [complex plane](!/complex-numbers/geometric-representation).`,
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
  title: `Useful Identities with Conjugates`,
  before: ``,
  content: `Three identities involving a complex number and its conjugate appear constantly in applications. Each reveals structural information about how the real and imaginary parts interact.

The sum of a number and its conjugate yields twice the real part: $z + \\bar{z} = (a + bi) + (a - bi) = 2a$. The imaginary terms cancel completely, leaving a purely real result. This identity extracts the real part through arithmetic: $Re(z) = \\frac{z + \\bar{z}}{2}$. Whenever a calculation produces $z + \\bar{z}$, we know immediately the answer is real without further investigation.

The difference between a number and its conjugate yields twice the imaginary part times $i$: $z - \\bar{z} = (a + bi) - (a - bi) = 2bi$. The real terms cancel, leaving a purely imaginary result. This identity extracts the imaginary part: $Im(z) = \\frac{z - \\bar{z}}{2i}$. Recognizing $z - \\bar{z}$ signals that the result lies on the imaginary axis.

The product of a number and its conjugate yields the sum of squares of the components: $z \\cdot \\bar{z} = (a + bi)(a - bi) = a^2 - (bi)^2 = a^2 - b^2i^2 = a^2 + b^2$. This result is always real and always non-negative. It equals zero only when both $a = 0$ and $b = 0$, meaning $z = 0$. This identity connects directly to the [modulus](!/complex-numbers/absolute-value): since $|z|^2 = a^2 + b^2$, we have $z \\cdot \\bar{z} = |z|^2$. The product also enables [division](!/complex-numbers/operations) — multiplying numerator and denominator by the conjugate of the denominator produces a real denominator $|z|^2$, converting the quotient to standard form.

Additional identities and applications appear in the [complex conjugate](!/complex-numbers/complex-conjugate) dedicated page.`,
  after: ``,
  link: '',
},
    obj8:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
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
  
    },
    obj21: {
  title: `The Real Part`,
  before: ``,
  content: `The real part of a complex number extracts its horizontal component. For any number written in algebraic form:

$$z = a + bi$$

the real part is the value $a$, denoted:

$$Re(z) = a$$

This function accepts a complex number as input and returns a real number as output. No matter how elaborate the original expression, $Re(z)$ always belongs to the real number line.

On the [complex plane](!/complex-numbers/geometric-representation), the real part measures horizontal displacement from the origin — movement along the real axis. The number $z = 5 - 3i$ sits at coordinates $(5, -3)$, so $Re(z) = 5$ gives the horizontal position.

A useful identity connects the real part to the [conjugate](!/complex-numbers/complex-conjugate):

$$Re(z) = \\frac{z + \\bar{z}}{2}$$

Adding a number to its conjugate cancels the imaginary terms, leaving twice the real part. This identity often simplifies calculations where extracting the real component matters.

Real numbers are characterized by having no imaginary contribution: $z$ is real if and only if $Re(z) = z$. Equivalently, real numbers satisfy $Im(z) = 0$.`,
  after: ``,
  link: '',
},

obj22: {
  title: `The Imaginary Part`,
  before: ``,
  content: `Given a complex number in algebraic form:

$$z = a + bi$$

the imaginary part captures the coefficient multiplying $i$:

$$Im(z) = b$$

Students frequently misunderstand this definition. The output is $b$ — a real number — not the product $bi$. When $z = 7 + 4i$, the imaginary part equals $4$, an ordinary real value. The word "imaginary" in the name refers to the role this component plays within $z$, not to any special nature of $b$ itself.

Geometrically, $Im(z)$ specifies how far the point lies above or below the horizontal axis in the [complex plane](!/complex-numbers/geometric-representation). Consider $z = 5 - 3i$, located at $(5, -3)$. Here $Im(z) = -3$, indicating three units below the real axis. Dropping the minus sign would place the point incorrectly.

The [conjugate](!/complex-numbers/complex-conjugate) provides an algebraic route to isolate this component:

$$Im(z) = \\frac{z - \\bar{z}}{2i}$$

Taking the difference $z - \\bar{z}$ eliminates the real terms entirely, leaving only the imaginary contribution.

A complex number qualifies as [pure imaginary](!/complex-numbers/imaginary-numbers) precisely when its real part vanishes while the number itself remains nonzero — that is, when $Re(z) = 0$ and $z \\neq 0$.`,
  after: ``,
  link: '',
},
  
  }

  const introContent = {
  id: "intro",
  title: "Building Numbers from Two Components",
  content: `
  Once the [imaginary unit](!/complex-numbers/imaginary-numbers) $i$ enters our mathematical toolkit, we need a systematic way to combine it with real numbers. The algebraic form provides this structure — a standardized notation that expresses every complex number as the sum of a real part and an imaginary part. This representation serves as the foundation for arithmetic, comparison, and manipulation throughout complex analysis.
  `
}

const faqQuestions = {
  obj1: {
    question: "What is the algebraic form of a complex number?",
    answer: "The algebraic form (also called standard form or rectangular form) writes every complex number as z = a + bi, where a and b are real numbers and i is the imaginary unit with i² = -1. The value a is the real part and b is the imaginary part."
  },
  obj2: {
    question: "What are the real and imaginary parts of a complex number?",
    answer: "For z = a + bi, the real part is a (written Re(z) = a) and the imaginary part is b (written Im(z) = b). Note that the imaginary part is just b, not bi — it's a real number indicating the coefficient of i."
  },
  obj3: {
    question: "Why is the imaginary part a real number?",
    answer: "The term 'imaginary part' refers to which component of z the value describes, not the nature of the value itself. For z = 3 + 2i, the imaginary part is 2 (a real number), not 2i. The functions Re(z) and Im(z) always output real numbers."
  },
  obj4: {
    question: "When are two complex numbers equal?",
    answer: "Two complex numbers z₁ = a + bi and z₂ = c + di are equal if and only if a = c AND b = d. Both the real parts must match and the imaginary parts must match. This means one complex equation gives two real equations."
  },
  obj5: {
    question: "How do you find the real and imaginary parts of a complex number?",
    answer: "Write the number in standard form a + bi. The coefficient with no i is the real part; the coefficient of i is the imaginary part. For 5 - 3i, rewrite as 5 + (-3)i, giving Re(z) = 5 and Im(z) = -3. Include the negative sign with the imaginary part."
  },
  obj6: {
    question: "What happens when the imaginary part is zero?",
    answer: "When b = 0, the complex number z = a + 0i = a reduces to a real number. Every real number is a complex number with zero imaginary part. This is why ℝ is a subset of ℂ."
  },
  obj7: {
    question: "What happens when the real part is zero?",
    answer: "When a = 0, the complex number z = 0 + bi = bi is called a pure imaginary number. It lies on the imaginary axis of the complex plane. Examples include i, 3i, and -5i."
  },
  obj8: {
    question: "What is the difference between rectangular and polar form?",
    answer: "Rectangular (algebraic) form z = a + bi specifies a complex number by its horizontal and vertical components. Polar (trigonometric) form z = r·cis θ specifies it by distance from origin (modulus r) and angle (argument θ). Both represent the same number differently."
  },
  obj9: {
    question: "How does equating real and imaginary parts help solve equations?",
    answer: "A complex equation a + bi = c + di splits into two real equations: a = c and b = d. This doubles the information from one equation, converting complex problems into systems of real equations that standard techniques can solve."
  },
  obj10: {
    question: "Why can't complex numbers be ordered like real numbers?",
    answer: "Real numbers occupy a one-dimensional line where we can compare single values. Complex numbers carry two independent values (real and imaginary parts), and no consistent rule determines whether 3 + 2i is greater or less than 1 + 5i. We can only compare their moduli."
  },
  obj11: {
    question: "How do you identify if a complex number is real using its conjugate?",
    answer: "A complex number z is real if and only if z = z̄ (equals its conjugate). Real numbers sit on the real axis, which is the mirror line for conjugation. Points on a mirror remain fixed under reflection."
  },
  obj12: {
    question: "How do you identify if a complex number is pure imaginary using its conjugate?",
    answer: "A complex number z is pure imaginary if and only if z̄ = -z (conjugate equals negative). Pure imaginary numbers sit on the imaginary axis, perpendicular to the reflection mirror. Reflection sends them to their opposites through the origin."
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Algebraic Form of Complex Numbers",
    "description": "Master the algebraic form z = a + bi of complex numbers. Learn about real and imaginary parts, Re(z) and Im(z) notation, equality conditions, and how conjugate identities classify numbers.",
    "url": "https://www.learnmathclass.com/complex-numbers/algebraic-form",
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
      "name": "Algebraic Form of Complex Numbers"
    },
    "teaches": [
      "Standard form z = a + bi",
      "Real part Re(z) and imaginary part Im(z)",
      "Equality of complex numbers",
      "The complex conjugate z̄ = a - bi",
      "Conjugate properties and distribution",
      "Classification theorems using conjugates",
      "Useful conjugate identities"
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
        "name": "Algebraic Form",
        "item": "https://www.learnmathclass.com/complex-numbers/algebraic-form"
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
  //       title: "Algebraic Form Page  | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/complex-numbers/algebraic-form",
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
      title: "Algebraic Form: Standard Form a + bi | Learn Math Class",
      description: "Master the algebraic form z = a + bi of complex numbers. Learn about real and imaginary parts, Re(z) and Im(z) notation, equality conditions, and how conjugate identities classify numbers.",
      keywords: keyWords.join(", "),
      url: "/complex-numbers/algebraic-form",
      name: "Algebraic Form of Complex Numbers"
    },
  }
}
   }

// export default function AlgebraicFormPage({seoData,sectionsContent , introContent}) {

export default function AlgebraicFormPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
        id:'21',
        title:sectionsContent.obj21.title,
        link:sectionsContent.obj21.link,
        content:[
          sectionsContent.obj21.content,
        ]
    },
    {
        id:'22',
        title:sectionsContent.obj22.title,
        link:sectionsContent.obj22.link,
        content:[
          sectionsContent.obj22.content,
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
    // {
    //     id:'8',
    //     title:sectionsContent.obj8.title,
    //     link:sectionsContent.obj8.link,
    //     content:[
    //       sectionsContent.obj8.content,
    //     ]
    // },
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Algebraic Form</h1>
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
