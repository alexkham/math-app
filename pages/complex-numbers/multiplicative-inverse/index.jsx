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

  const keyWords=['','','','','']

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
    // obj11:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj1: {
  title: `Multiplicative Inverse in Real Numbers`,
  content: `For any nonzero real number $a$, the multiplicative inverse is $\\frac{1}{a}$, also written $a^{-1}$. The defining property is:

$$a \\cdot \\frac{1}{a} = 1$$

The product of a number and its multiplicative inverse always equals one.

The inverse of $5$ is $\\frac{1}{5}$, since $5 \\cdot \\frac{1}{5} = 1$. The inverse of $-3$ is $-\\frac{1}{3}$, since $(-3) \\cdot \\left(-\\frac{1}{3}\\right) = 1$. The inverse of $\\frac{2}{3}$ is $\\frac{3}{2}$, since $\\frac{2}{3} \\cdot \\frac{3}{2} = 1$. Inversion swaps numerator and denominator.

On the number line, the multiplicative inverse relates to distance from the origin in a reciprocal fashion. Numbers with absolute value greater than one have inverses with absolute value less than one, and vice versa. The number $5$ lies five units from the origin; its inverse $\\frac{1}{5}$ lies only one-fifth of a unit away. The number $\\frac{1}{4}$ lies close to the origin; its inverse $4$ lies far away. Numbers with absolute value exactly one — just $1$ and $-1$ — are their own multiplicative inverses.

Zero has no multiplicative inverse. No real number $x$ satisfies $0 \\cdot x = 1$, because zero times anything is zero. This exception carries over to complex numbers.`,
  before: ``,
  after: ``,
  link: '',
},
obj2: {
  title: `Multiplicative Inverse of a Complex Number`,
  content: `For a nonzero complex number $z = a + bi$, the multiplicative inverse is the unique complex number $w$ satisfying $z \\cdot w = 1$. The formula is:

$$z^{-1} = \\frac{\\overline{z}}{|z|^2} = \\frac{a - bi}{a^2 + b^2}$$

This expression uses the [conjugate](!/complex-numbers/complex-conjugate) $\\overline{z} = a - bi$ in the numerator and the square of the [modulus](!/complex-numbers/absolute-value) $|z|^2 = a^2 + b^2$ in the denominator.

Separating into real and imaginary parts:

$$z^{-1} = \\frac{a}{a^2 + b^2} - \\frac{b}{a^2 + b^2}i$$

Consider $z = 3 + 4i$. The conjugate is $\\overline{z} = 3 - 4i$ and the modulus squared is $|z|^2 = 9 + 16 = 25$. The multiplicative inverse is:

$$z^{-1} = \\frac{3 - 4i}{25} = \\frac{3}{25} - \\frac{4}{25}i$$

Verification: $(3 + 4i)\\left(\\frac{3}{25} - \\frac{4}{25}i\\right) = \\frac{9}{25} - \\frac{12}{25}i + \\frac{12}{25}i - \\frac{16}{25}i^2 = \\frac{9}{25} + \\frac{16}{25} = 1$.

For $z = 2i$, a pure imaginary number, the conjugate is $-2i$ and the modulus squared is $4$. The inverse is $\\frac{-2i}{4} = -\\frac{1}{2}i$. For $z = 1 + i$, the conjugate is $1 - i$ and the modulus squared is $2$. The inverse is $\\frac{1 - i}{2} = \\frac{1}{2} - \\frac{1}{2}i$.`,
  before: ``,
  after: ``,
  link: '',
},

obj3: {
  title: `Why the Formula Works`,
  content: `The formula $z^{-1} = \\frac{\\overline{z}}{|z|^2}$ is not arbitrary. It emerges from a natural strategy: eliminate the imaginary unit from the denominator.

Starting with $\\frac{1}{z} = \\frac{1}{a + bi}$, the goal is to rewrite this with a real denominator. Multiply numerator and denominator by the [conjugate](!/complex-numbers/complex-conjugate):

$$\\frac{1}{a + bi} = \\frac{1}{a + bi} \\cdot \\frac{a - bi}{a - bi} = \\frac{a - bi}{(a + bi)(a - bi)}$$

The denominator simplifies using the identity $z \\cdot \\overline{z} = |z|^2$:

$$(a + bi)(a - bi) = a^2 - (bi)^2 = a^2 - b^2i^2 = a^2 + b^2$$

This is a real number — the square of the modulus. The result:

$$\\frac{1}{z} = \\frac{a - bi}{a^2 + b^2} = \\frac{\\overline{z}}{|z|^2}$$

The key insight is that multiplying any complex number by its conjugate produces a real number. This property converts division by a complex number into division by a real number, which is straightforward.

Verification confirms the formula works:

$$z \\cdot z^{-1} = z \\cdot \\frac{\\overline{z}}{|z|^2} = \\frac{z \\cdot \\overline{z}}{|z|^2} = \\frac{|z|^2}{|z|^2} = 1$$

The product of $z$ and $\\overline{z}$ in the numerator equals $|z|^2$, canceling the denominator exactly.`,
  before: ``,
  after: ``,
  link: '',
},

obj4: {
  title: `Notation`,
  content: `The multiplicative inverse of $z$ appears in three equivalent notations: $z^{-1}$, $\\frac{1}{z}$, and $1/z$. All three denote the same complex number — the one satisfying $z \\cdot z^{-1} = 1$.

The exponent notation $z^{-1}$ emphasizes the algebraic role of the inverse. It parallels the notation for powers: $z^2$ means $z \\cdot z$, and $z^{-1}$ means the number that "undoes" multiplication by $z$. This notation extends naturally to negative integer exponents, where $z^{-n} = (z^{-1})^n = (z^n)^{-1}$.

The fraction notation $\\frac{1}{z}$ emphasizes division. It reads as "one divided by $z$" and connects to the broader concept of dividing complex numbers.

Parentheses prevent ambiguity when the base is an expression. The inverse of $3 + 2i$ should be written $(3 + 2i)^{-1}$, not $3 + 2i^{-1}$. The latter means $3 + \\frac{1}{2}i = 3 + \\frac{1}{2}i$, something entirely different. Without parentheses, the exponent binds only to $i$.

Similarly, $\\frac{1}{3 + 2i}$ is unambiguous, but inline expressions require care. Writing $1/3 + 2i$ means $\\frac{1}{3} + 2i$, not $\\frac{1}{3 + 2i}$. Use $1/(3 + 2i)$ or $(3 + 2i)^{-1}$ instead.`,
  before: ``,
  after: ``,
  link: '',
},


obj5: {
  title: `Geometric Interpretation`,
  content: `The multiplicative inverse transforms both the distance and direction of a complex number in the [complex plane](!/complex-numbers/geometric-representation).

The modulus inverts:

$$|z^{-1}| = \\frac{1}{|z|}$$

A number far from the origin has an inverse close to the origin, and vice versa. If $|z| = 5$, then $|z^{-1}| = \\frac{1}{5}$. If $|z| = \\frac{1}{3}$, then $|z^{-1}| = 3$. Numbers with modulus greater than one have inverses with modulus less than one. Numbers with modulus less than one have inverses with modulus greater than one.

Numbers on the unit circle — those with $|z| = 1$ — have inverses also on the unit circle, since $|z^{-1}| = \\frac{1}{1} = 1$. These numbers stay the same distance from the origin after inversion.

The argument negates:

$$\\arg(z^{-1}) = -\\arg(z)$$

If $z$ points in direction $\\theta$, then $z^{-1}$ points in direction $-\\theta$. A number in the upper half-plane has its inverse in the lower half-plane, and vice versa. A number at angle $\\frac{\\pi}{4}$ (northeast) has its inverse at angle $-\\frac{\\pi}{4}$ (southeast).

Combining both effects: the multiplicative inverse reflects $z$ across the real axis and scales its distance from the origin by $\\frac{1}{|z|^2}$. Alternatively, in [trigonometric form](!/complex-numbers/trigonometric-form), if $z = r\\,\\text{cis}\\,\\theta$, then $z^{-1} = \\frac{1}{r}\\,\\text{cis}(-\\theta)$.`,
  before: ``,
  after: ``,
  link: '',
},


obj6: {
  title: `Properties of Multiplicative Inverse`,
  content: `The multiplicative inverse interacts with other operations in predictable ways. These properties parallel the corresponding rules for real numbers.

Double inversion returns the original number:

$$(z^{-1})^{-1} = z$$

Taking the multiplicative inverse twice leaves $z$ unchanged. If $w$ is the inverse of $z$, then $z$ is the inverse of $w$.

The inverse of a product equals the product of inverses:

$$(z_1 \\cdot z_2)^{-1} = z_1^{-1} \\cdot z_2^{-1}$$

To invert a product, invert each factor. Order does not matter since multiplication is commutative.

Inversion and [conjugation](!/complex-numbers/complex-conjugate) commute:

$$(\\overline{z})^{-1} = \\overline{z^{-1}}$$

Conjugating first and then inverting produces the same result as inverting first and then conjugating.

The modulus inverts:

$$|z^{-1}| = \\frac{1}{|z|}$$

The argument negates:

$$\\arg(z^{-1}) = -\\arg(z)$$

Powers and inverses interact naturally:

$$(z^n)^{-1} = (z^{-1})^n = z^{-n}$$

The inverse of $z^n$ equals the $n$th power of $z^{-1}$, and both equal $z^{-n}$. This consistency allows negative exponents to work seamlessly with complex numbers, just as they do with real numbers.`,
  before: ``,
  after: ``,
  link: '',
},

obj7: {
  title: `Multiplicative Inverse vs. Complex Conjugate`,
  content: `Both the multiplicative inverse and the [complex conjugate](!/complex-numbers/complex-conjugate) involve transforming a complex number, but they serve different purposes and produce different results.

The conjugate of $z = a + bi$ is $\\overline{z} = a - bi$. Only the imaginary part changes sign. The real part stays fixed.

The multiplicative inverse of $z = a + bi$ is $z^{-1} = \\frac{a - bi}{a^2 + b^2}$. Both parts are divided by $a^2 + b^2$, and the imaginary part also changes sign.

For $z = 3 + 4i$: the conjugate is $\\overline{z} = 3 - 4i$, while the inverse is $z^{-1} = \\frac{3 - 4i}{25} = \\frac{3}{25} - \\frac{4}{25}i$. These differ by a factor of $25 = |z|^2$.

Geometrically, conjugation reflects across the real axis while preserving the modulus: $|\\overline{z}| = |z|$. Inversion also reflects across the real axis but additionally scales: $|z^{-1}| = \\frac{1}{|z|}$. The conjugate stays on the same circle centered at the origin; the inverse moves to a different circle.

The relationship between them is:

$$z^{-1} = \\frac{\\overline{z}}{|z|^2}$$

When are they equal? Only when $|z|^2 = 1$, meaning $|z| = 1$. On the unit circle, $z^{-1} = \\overline{z}$. For $z = \\frac{3}{5} + \\frac{4}{5}i$, which has modulus $1$, the inverse and conjugate are both $\\frac{3}{5} - \\frac{4}{5}i$. Off the unit circle, they always differ.`,
  before: ``,
  after: ``,
  link: '',
},


obj8: {
  title: `Why Zero Has No Multiplicative Inverse`,
  content: `Zero is the sole complex number without a multiplicative inverse. No complex number $w$ satisfies $0 \\cdot w = 1$.

The reason is fundamental: zero times any number equals zero, never one. Regardless of what $w$ might be, the product $0 \\cdot w$ vanishes. The equation $0 \\cdot w = 1$ has no solution.

The formula $z^{-1} = \\frac{\\overline{z}}{|z|^2}$ reveals the problem algebraically. For $z = 0$, the modulus is $|z| = 0$, so $|z|^2 = 0$ appears in the denominator. Division by zero is undefined, and the formula produces no result.

This exception is unavoidable in any field. The [field axioms](!/complex-numbers/properties) guarantee multiplicative inverses for all nonzero elements, but explicitly exclude zero. The additive identity cannot have a multiplicative inverse — the two roles are incompatible.

The absence of $0^{-1}$ is why division by zero remains undefined for complex numbers, just as for real numbers. The expression $\\frac{z}{0}$ has no meaning. Any calculation that leads to division by zero has gone astray.`,
  before: ``,
  after: ``,
  link: '',
},


obj9: {
  title: `Connection to Division`,
  content: `Division of complex numbers is multiplication by the multiplicative inverse:

$$\\frac{z_1}{z_2} = z_1 \\cdot z_2^{-1}$$

This definition reduces division to multiplication, which is already well understood. Every property of division follows from properties of multiplication combined with properties of the inverse.

Substituting the formula for $z_2^{-1}$:

$$\\frac{z_1}{z_2} = z_1 \\cdot \\frac{\\overline{z_2}}{|z_2|^2} = \\frac{z_1 \\cdot \\overline{z_2}}{|z_2|^2}$$

This is the standard method for dividing complex numbers: multiply the numerator by the conjugate of the denominator, then divide by the modulus squared.

Consider $\\frac{5 + 3i}{1 + 2i}$. The conjugate of the denominator is $1 - 2i$, and $|1 + 2i|^2 = 1 + 4 = 5$. Computing:

$$\\frac{5 + 3i}{1 + 2i} = \\frac{(5 + 3i)(1 - 2i)}{5} = \\frac{5 - 10i + 3i - 6i^2}{5} = \\frac{5 - 7i + 6}{5} = \\frac{11 - 7i}{5} = \\frac{11}{5} - \\frac{7}{5}i$$

The connection explains why division by zero is undefined: zero has no multiplicative inverse, so $z_1 \\cdot 0^{-1}$ is meaningless.

For detailed coverage of division and other arithmetic, see [operations](!/complex-numbers/operations).`,
  before: ``,
  after: ``,
  link: '',
},


obj10: {
  title: `Uniqueness`,
  content: `Every nonzero complex number has exactly one multiplicative inverse.

Existence is established by the formula: for any $z = a + bi$ with $z \\neq 0$, the number $z^{-1} = \\frac{\\overline{z}}{|z|^2}$ satisfies $z \\cdot z^{-1} = 1$. Since $z \\neq 0$, at least one of $a$ or $b$ is nonzero, so $|z|^2 = a^2 + b^2 > 0$ and the formula is well-defined.

Uniqueness follows from a short argument. Suppose $w_1$ and $w_2$ both satisfy $z \\cdot w_1 = 1$ and $z \\cdot w_2 = 1$. Then:

$$w_1 = w_1 \\cdot 1 = w_1 \\cdot (z \\cdot w_2) = (w_1 \\cdot z) \\cdot w_2 = 1 \\cdot w_2 = w_2$$

Any two multiplicative inverses of the same number must be equal.

This uniqueness is guaranteed by the [field axioms](!/complex-numbers/properties). In any field, multiplicative inverses of nonzero elements are unique. The argument above uses only associativity of multiplication and the property of one as the multiplicative identity.

Uniqueness justifies the notation $z^{-1}$ and $\\frac{1}{z}$. If multiple inverses existed, these expressions would be ambiguous. Because exactly one inverse exists, the notation refers to a single, well-defined complex number.`,
  before: ``,
  after: ``,
  link: '',
},


obj11: {
  title: `Common Mistakes`,
  content: `Several errors recur when students compute multiplicative inverses of complex numbers.

Forgetting to use the conjugate is common. Students attempt $\\frac{1}{3 + 2i} = \\frac{1}{3} + \\frac{1}{2}i$, treating real and imaginary parts separately. This is incorrect. The inverse of a sum is not the sum of inverses. The correct approach multiplies by $\\frac{3 - 2i}{3 - 2i}$ to obtain $\\frac{3 - 2i}{13}$.

Errors in computing $|z|^2$ are frequent. For $z = 3 - 4i$, the modulus squared is $3^2 + (-4)^2 = 9 + 16 = 25$, not $9 - 16 = -7$. The formula is $a^2 + b^2$, always a sum, never a difference. Signs in the original number do not affect the addition.

Confusing $z^{-1}$ with $-z$ conflates two unrelated operations. The multiplicative inverse $z^{-1}$ satisfies $z \\cdot z^{-1} = 1$. The [additive inverse](!/complex-numbers/additive-inverse) $-z$ satisfies $z + (-z) = 0$. For $z = 2 + i$, the multiplicative inverse is $\\frac{2 - i}{5}$; the additive inverse is $-2 - i$. These share nothing but a sign change in the imaginary part.

Confusing $z^{-1}$ with $\\overline{z}$ is another pitfall. They are equal only on the unit circle. For $z = 3 + 4i$, the conjugate is $3 - 4i$ while the inverse is $\\frac{3 - 4i}{25}$. Forgetting to divide by $|z|^2$ leaves the answer off by a factor of $25$.

Leaving a complex denominator unreduced is incomplete. A final answer like $\\frac{2 + 3i}{1 - i}$ requires rationalization. Multiply by $\\frac{1 + i}{1 + i}$ to obtain a real denominator and express the result in standard [algebraic form](!/complex-numbers/algebraic-form).`,
  before: ``,
  after: ``,
  link: '',
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
  title: "The Number That Cancels Through Multiplication",
  content: `Every nonzero complex number has a counterpart that, when multiplied by it, produces one. This counterpart is called the multiplicative inverse. Unlike the [additive inverse](!/complex-numbers/additive-inverse), which simply negates both components, the multiplicative inverse requires a formula involving the [conjugate](!/complex-numbers/complex-conjugate) and [modulus](!/complex-numbers/absolute-value). Understanding this inverse clarifies the nature of division and completes the arithmetic structure of complex numbers.`
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Multiplicative Inverse of a Complex Number | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/complex-numbers/multiplicative-inverse",
         name: "name"
      },
        
       }
    }
   }

export default function MultiplicativeInversePage({seoData,sectionsContent , introContent}) {

    
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
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
        ]
    },
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Multiplicative Inverse of a Complex Number</h1>
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
