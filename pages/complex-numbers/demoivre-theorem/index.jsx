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
  "De Moivre's theorem",
  "De Moivre's formula",
  "complex number powers",
  "nth roots complex numbers",
  "roots of unity",
  "cis theta power n",
  "(cos θ + i sin θ)^n",
  "find nth roots",
  "cube roots complex",
  "square roots complex number",
  "complex roots regular polygon",
  "primitive root of unity",
  "De Moivre proof",
  "trigonometric form powers",
  "complex number root formula"
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
  title: `Introduction to De Moivre's Theorem`,
  before: ``,
  content: `Raising complex numbers to powers in [algebraic form](!/complex-numbers/algebraic-form) quickly becomes unmanageable. Squaring $z = a + bi$ requires expanding $(a + bi)^2 = a^2 + 2abi + b^2i^2 = (a^2 - b^2) + 2abi$. Cubing demands multiplying this result by $a + bi$ again. By the time we reach $z^{10}$ or $z^{100}$, the algebraic approach drowns in computation.

The [trigonometric form](!/complex-numbers/trigonometric-form) offers rescue. When $z = r\\text{cis}\\theta$, multiplication becomes elegant: multiply moduli, add arguments. Squaring gives $z^2 = r^2\\text{cis}(2\\theta)$. Cubing gives $z^3 = r^3\\text{cis}(3\\theta)$. The pattern suggests a general rule — and De Moivre's theorem confirms it.

Abraham de Moivre, a French mathematician living in England, discovered this relationship in the early eighteenth century. Though he never stated the theorem in its modern form, his work on probability and trigonometric identities laid the foundation. The theorem bearing his name connects complex exponentiation to the simple operation of multiplying an angle by an integer.

De Moivre's theorem stands among the most useful results in complex analysis. It reduces high powers to trivial calculations, enables extraction of roots, derives trigonometric identities, and appears throughout physics and engineering wherever oscillations and rotations arise.`,
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
  title: `De Moivre's Formula`,
  before: ``,
  content: `The theorem states a precise relationship between powers and angles. For any integer $n$:

$$(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$$

Raise $\\text{cis}\\theta$ to the $n$-th power, and the result is $\\text{cis}(n\\theta)$. The angle simply multiplies by $n$. No expansion, no collecting terms, no tracking powers of $i$ — just multiply the argument.

In the condensed notation: $(\\text{cis}\\theta)^n = \\text{cis}(n\\theta)$.

The formula extends naturally to complex numbers with arbitrary [modulus](!/complex-numbers/absolute-value). If $z = r\\text{cis}\\theta$, then:

$$z^n = (r\\text{cis}\\theta)^n = r^n\\text{cis}(n\\theta)$$

The modulus raises to the $n$-th power while the argument multiplies by $n$. Both operations are elementary. The number $2\\text{cis}(30°)$ raised to the sixth power becomes $2^6\\text{cis}(180°) = 64\\text{cis}(180°) = -64$. What would require extensive algebra in rectangular form reduces to mental arithmetic in trigonometric form.

The formula works for negative integers as well. Since $z^{-n} = 1/z^n$, we have:

$$z^{-n} = r^{-n}\\text{cis}(-n\\theta)$$

Negative exponents invert the modulus and negate the angle multiplier, maintaining the same structural simplicity.`,
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
  title: `Proof of De Moivre's Theorem`,
  before: ``,
  content: `Mathematical induction establishes De Moivre's theorem for positive integers. The proof builds from the multiplication rule for trigonometric form: when two complex numbers multiply, their moduli multiply and their arguments add.

The base case $n = 1$ holds trivially: $(\\cos\\theta + i\\sin\\theta)^1 = \\cos(1 \\cdot \\theta) + i\\sin(1 \\cdot \\theta)$.

For the inductive step, assume the formula holds for $n = k$:

$$(\\cos\\theta + i\\sin\\theta)^k = \\cos(k\\theta) + i\\sin(k\\theta)$$

We must prove it holds for $n = k + 1$. Multiply both sides by $\\cos\\theta + i\\sin\\theta$:

$$(\\cos\\theta + i\\sin\\theta)^{k+1} = (\\cos(k\\theta) + i\\sin(k\\theta))(\\cos\\theta + i\\sin\\theta)$$

The right side is a product of two numbers in trigonometric form. By the multiplication rule, we add arguments:

$$= \\cos(k\\theta + \\theta) + i\\sin(k\\theta + \\theta) = \\cos((k+1)\\theta) + i\\sin((k+1)\\theta)$$

This completes the induction. The theorem holds for all positive integers.

Extension to negative integers follows from the reciprocal. For $n > 0$:

$$z^{-n} = \\frac{1}{z^n} = \\frac{1}{r^n\\text{cis}(n\\theta)} = \\frac{1}{r^n} \\cdot \\text{cis}(-n\\theta) = r^{-n}\\text{cis}(-n\\theta)$$

The formula $z^n = r^n\\text{cis}(n\\theta)$ thus holds for all integers $n$, positive, negative, or zero.`,
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
  title: `Applying De Moivre's Theorem to Powers`,
  before: ``,
  content: `Computing high powers follows a three-step procedure. First convert to trigonometric form, then apply De Moivre's formula, finally convert back to algebraic form if required.

Consider $(1 + i)^{10}$. 

Step 1: Convert $1 + i$ to trigonometric form. The modulus is $|1 + i| = \\sqrt{1^2 + 1^2} = \\sqrt{2}$. The argument satisfies $\\tan\\theta = 1/1 = 1$ with the point in the first quadrant, giving $\\theta = 45° = \\pi/4$. Thus $1 + i = \\sqrt{2}\\text{cis}(45°)$.

Step 2: Apply De Moivre's theorem.

$$(1 + i)^{10} = (\\sqrt{2})^{10}\\text{cis}(10 \\times 45°) = 2^5\\text{cis}(450°) = 32\\text{cis}(450°)$$

Since $450° = 360° + 90°$, the angle reduces to $90°$:

$$= 32\\text{cis}(90°) = 32(\\cos 90° + i\\sin 90°) = 32(0 + i) = 32i$$

Step 3: The answer $32i$ is already in algebraic form.

Verification through direct calculation would require multiplying $1 + i$ by itself ten times — tedious and error-prone. De Moivre's theorem completes the same computation in a few lines.

Another example: find $(\\sqrt{3} - i)^6$. The modulus is $\\sqrt{3 + 1} = 2$. The argument, with $a = \\sqrt{3} > 0$ and $b = -1 < 0$, lies in the fourth quadrant: $\\theta = -30°$. So $\\sqrt{3} - i = 2\\text{cis}(-30°)$, and:

$$(\\sqrt{3} - i)^6 = 2^6\\text{cis}(-180°) = 64\\text{cis}(-180°) = 64(-1) = -64$$`,
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
  title: `Introduction to $n$-th Roots`,
  before: ``,
  content: `De Moivre's theorem runs in reverse to solve equations of the form $z^n = w$. Given a complex number $w$, what values of $z$ satisfy this equation? The answer reveals surprising multiplicity: every nonzero complex number has exactly $n$ distinct $n$-th roots.

Real number experience suggests uniqueness. The equation $x^3 = 8$ has one real solution: $x = 2$. But in $\\mathbb{C}$, the equation $z^3 = 8$ has three solutions. The cube root of $8$ is not just $2$ but three different complex numbers, each of which cubes to $8$.

Where do these extra roots come from? The key lies in angle periodicity. Adding $360°$ (or $2\\pi$ radians) to any argument produces the same complex number: $\\text{cis}(\\theta) = \\text{cis}(\\theta + 360°)$. When we write $w = R\\text{cis}\\phi$, we could equally write $w = R\\text{cis}(\\phi + 360°)$ or $w = R\\text{cis}(\\phi + 720°)$.

Now suppose $z^n = w$ with $z = r\\text{cis}\\alpha$. By De Moivre's theorem, $r^n\\text{cis}(n\\alpha) = R\\text{cis}\\phi$. Matching moduli gives $r = R^{1/n}$. Matching arguments gives $n\\alpha = \\phi + 360°k$ for some integer $k$, so $\\alpha = \\frac{\\phi + 360°k}{n}$.

Different values of $k$ yield different angles $\\alpha$. As $k$ runs from $0$ to $n-1$, we obtain $n$ distinct arguments. Beyond $k = n-1$, the angles repeat modulo $360°$. Exactly $n$ roots exist, no more, no fewer.`,
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
  title: `The Formula for $n$-th Roots`,
  before: ``,
  content: `Let $w = R\\text{cis}\\phi$ be any nonzero complex number. The $n$-th roots of $w$ — all solutions to $z^n = w$ — are given by:

$$z_k = R^{1/n}\\text{cis}\\left(\\frac{\\phi + 2\\pi k}{n}\\right) \\quad \\text{for } k = 0, 1, 2, \\ldots, n-1$$

In degree measure:

$$z_k = R^{1/n}\\text{cis}\\left(\\frac{\\phi + 360°k}{n}\\right) \\quad \\text{for } k = 0, 1, 2, \\ldots, n-1$$

Each root has the same modulus: $|z_k| = R^{1/n}$, the positive real $n$-th root of the original modulus. The roots differ only in their arguments.

The first root ($k = 0$) has argument $\\phi/n$, the original angle divided by $n$. Each subsequent root adds $360°/n$ to the argument. The $n$ roots space themselves evenly around the circle of radius $R^{1/n}$.

Consider finding the cube roots of $8$. Write $8 = 8\\text{cis}(0°)$, so $R = 8$ and $\\phi = 0°$. The formula gives:

$$z_k = 8^{1/3}\\text{cis}\\left(\\frac{0° + 360°k}{3}\\right) = 2\\text{cis}(120°k)$$

For $k = 0$: $z_0 = 2\\text{cis}(0°) = 2$.
For $k = 1$: $z_1 = 2\\text{cis}(120°) = 2(-\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i) = -1 + \\sqrt{3}i$.
For $k = 2$: $z_2 = 2\\text{cis}(240°) = 2(-\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i) = -1 - \\sqrt{3}i$.

Three roots: $2$, $-1 + \\sqrt{3}i$, and $-1 - \\sqrt{3}i$. Each cubes to $8$.`,
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
  title: `Geometric Interpretation of Roots`,
  before: ``,
  content: `The $n$-th roots of any complex number arrange themselves with perfect geometric regularity. Plotting them on the [complex plane](!/complex-numbers/geometric-representation) reveals a pattern of elegant symmetry.

All $n$ roots share the same modulus $R^{1/n}$, placing them on a circle centered at the origin with that radius. They do not cluster or scatter randomly — they distribute themselves at equal angular intervals around this circle.

The angular separation between consecutive roots is exactly $\\frac{360°}{n}$ (or $\\frac{2\\pi}{n}$ radians). The cube roots of any number sit $120°$ apart. Fourth roots sit $90°$ apart. Fifth roots sit $72°$ apart. This uniform spacing holds regardless of which number we take roots of — only the radius and starting angle vary.

The roots form vertices of a regular $n$-gon inscribed in the circle. Cube roots give an equilateral triangle. Fourth roots give a square. Fifth roots give a regular pentagon. The polygon may appear rotated depending on the argument of the original number, but its shape is always perfectly regular.

This geometric picture aids computation and verification. If one root is known, the others follow by rotating $360°/n$ around the origin. If roots fail to form a regular polygon, an error has occurred. The visual pattern provides both a computational shortcut and a consistency check.

The [conjugate](!/complex-numbers/complex-conjugate) relationship appears when the original number $w$ is real and positive. In that case $\\phi = 0°$, and the roots distribute symmetrically about the real axis. Complex roots come in conjugate pairs, with the real axis serving as a line of mirror symmetry.`,
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
  title: `Roots of Unity`,
  before: ``,
  content: `The $n$-th roots of unity — solutions to $z^n = 1$ — form a special case of fundamental importance. Since $1 = 1\\text{cis}(0°)$, the formula simplifies:

$$z_k = \\text{cis}\\left(\\frac{360°k}{n}\\right) = \\text{cis}\\left(\\frac{2\\pi k}{n}\\right) \\quad \\text{for } k = 0, 1, 2, \\ldots, n-1$$

All roots of unity have modulus $1$ — they lie on the unit circle. Their arguments are multiples of $\\frac{360°}{n}$, dividing the circle into $n$ equal arcs.

The root $z_0 = \\text{cis}(0°) = 1$ always appears. Every integer power of $1$ equals $1$, making $1$ an $n$-th root of unity for every $n$.

The fourth roots of unity illustrate the pattern: $z_0 = 1$, $z_1 = i$, $z_2 = -1$, $z_3 = -i$. These four points mark the cardinal directions on the unit circle, forming a square. Each satisfies $z^4 = 1$.

The sixth roots of unity are $1$, $\\text{cis}(60°)$, $\\text{cis}(120°)$, $-1$, $\\text{cis}(240°)$, $\\text{cis}(300°)$. In algebraic form: $1$, $\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i$, $-\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i$, $-1$, $-\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i$, $\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i$. They form a regular hexagon on the unit circle.

The primitive $n$-th root of unity, denoted $\\omega = \\text{cis}\\left(\\frac{2\\pi}{n}\\right)$, generates all others through its powers. Since $z_k = \\omega^k$, the complete set of $n$-th roots of unity is $\\{1, \\omega, \\omega^2, \\ldots, \\omega^{n-1}\\}$. This generator perspective connects roots of unity to group theory and number theory.`,
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
  title: `Properties of Roots of Unity`,
  before: ``,
  content: `The $n$-th roots of unity satisfy algebraic identities that reflect their geometric symmetry. These properties appear throughout mathematics, from polynomial factorization to Fourier analysis.

The sum of all $n$-th roots of unity equals zero:

$$\\sum_{k=0}^{n-1} z_k = 1 + \\omega + \\omega^2 + \\cdots + \\omega^{n-1} = 0$$

Geometrically, the roots form a regular polygon centered at the origin. Their vector sum — placing all arrows tip to tail — returns to the starting point, yielding zero. Algebraically, this is the sum of a geometric series with ratio $\\omega \\neq 1$: $\\frac{1 - \\omega^n}{1 - \\omega} = \\frac{1 - 1}{1 - \\omega} = 0$.

The product of all $n$-th roots of unity follows a pattern:

$$\\prod_{k=0}^{n-1} z_k = (-1)^{n+1}$$

For odd $n$, the product is $1$. For even $n$, the product is $-1$. This connects to the constant term in the polynomial $z^n - 1$, which factors as $(z - z_0)(z - z_1)\\cdots(z - z_{n-1})$.

When $n \\geq 2$, complex roots of unity come in [conjugate](!/complex-numbers/complex-conjugate) pairs. If $\\omega^k$ is a root, so is $\\overline{\\omega^k} = \\omega^{n-k}$. The roots $\\omega$ and $\\omega^{n-1}$ are conjugates; $\\omega^2$ and $\\omega^{n-2}$ are conjugates; and so on. Only $z = 1$ (always) and $z = -1$ (when $n$ is even) sit on the real axis without conjugate partners among the roots.

These symmetries constrain the algebraic behavior of expressions involving roots of unity and simplify many calculations.`,
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
  title: `Worked Examples`,
  before: ``,
  content: `Concrete examples consolidate the root-finding technique. Each follows the same pattern: express the target in trigonometric form, apply the formula, enumerate all $n$ roots.

**Square roots of $i$:** Solve $z^2 = i$.

Write $i = 1\\text{cis}(90°)$. The roots are $z_k = 1^{1/2}\\text{cis}\\left(\\frac{90° + 360°k}{2}\\right)$ for $k = 0, 1$.

$z_0 = \\text{cis}(45°) = \\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2}i$

$z_1 = \\text{cis}(225°) = -\\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2}i$

Two roots, opposite each other on the unit circle.

**Cube roots of $-8$:** Solve $z^3 = -8$.

Write $-8 = 8\\text{cis}(180°)$. The roots are $z_k = 2\\text{cis}\\left(\\frac{180° + 360°k}{3}\\right)$ for $k = 0, 1, 2$.

$z_0 = 2\\text{cis}(60°) = 1 + \\sqrt{3}i$

$z_1 = 2\\text{cis}(180°) = -2$

$z_2 = 2\\text{cis}(300°) = 1 - \\sqrt{3}i$

Three roots forming an equilateral triangle with radius $2$.

**Fourth roots of unity:** Solve $z^4 = 1$.

Write $1 = 1\\text{cis}(0°)$. The roots are $z_k = \\text{cis}(90°k)$ for $k = 0, 1, 2, 3$.

$z_0 = 1$, $z_1 = i$, $z_2 = -1$, $z_3 = -i$

A square on the unit circle at the four cardinal points.

**Fifth roots of $32$:** Solve $z^5 = 32$.

Write $32 = 32\\text{cis}(0°)$. The roots are $z_k = 2\\text{cis}(72°k)$ for $k = 0, 1, 2, 3, 4$.

$z_0 = 2$, $z_1 = 2\\text{cis}(72°)$, $z_2 = 2\\text{cis}(144°)$, $z_3 = 2\\text{cis}(216°)$, $z_4 = 2\\text{cis}(288°)$

A regular pentagon with radius $2$, one vertex on the positive real axis.`,
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
  title: "Powers and Roots Made Simple",
  content: `
  Computing $(1 + i)^{100}$ through repeated multiplication would fill pages with tedious algebra. Yet the answer emerges in seconds using De Moivre's theorem — a formula that transforms exponentiation into elementary arithmetic on angles and lengths. This same principle runs in reverse to extract roots, revealing that every nonzero complex number has exactly $n$ distinct $n$-th roots, arranged in perfect geometric symmetry around the origin.
  `
}

const faqQuestions = {
  obj1: {
    question: "What is De Moivre's theorem?",
    answer: "De Moivre's theorem states that (cos θ + i sin θ)^n = cos(nθ) + i sin(nθ) for any integer n. In compact notation, (cis θ)^n = cis(nθ). The angle simply multiplies by the exponent, making complex powers trivial to compute in trigonometric form."
  },
  obj2: {
    question: "How do you apply De Moivre's theorem to complex powers?",
    answer: "Convert the complex number to trigonometric form z = r·cis θ, then apply the formula: z^n = r^n·cis(nθ). The modulus raises to the nth power and the argument multiplies by n. Finally, convert back to algebraic form if needed."
  },
  obj3: {
    question: "Does De Moivre's theorem work for negative exponents?",
    answer: "Yes. For negative integers, z^(-n) = r^(-n)·cis(-nθ). The modulus inverts and the argument multiplies by the negative exponent. The same structural simplicity applies to all integer powers, positive or negative."
  },
  obj4: {
    question: "How do you prove De Moivre's theorem?",
    answer: "The proof uses mathematical induction. The base case n = 1 is trivial. For the inductive step, multiply (cis θ)^k by cis θ, which adds arguments to give cis((k+1)θ). Extension to negative integers follows from the reciprocal relationship z^(-n) = 1/z^n."
  },
  obj5: {
    question: "How many nth roots does a complex number have?",
    answer: "Every nonzero complex number has exactly n distinct nth roots. They all have the same modulus R^(1/n) and are evenly spaced around a circle, with arguments differing by 360°/n. The roots form vertices of a regular n-gon."
  },
  obj6: {
    question: "What is the formula for nth roots of a complex number?",
    answer: "For w = R·cis φ, the n roots are z_k = R^(1/n)·cis((φ + 360°k)/n) for k = 0, 1, ..., n-1. Each value of k gives a distinct root. Beyond k = n-1, the angles repeat and no new roots appear."
  },
  obj7: {
    question: "Why do nth roots form a regular polygon?",
    answer: "All n roots share the same modulus R^(1/n), placing them on a circle. Consecutive roots differ in argument by exactly 360°/n, spacing them evenly. This uniform distribution around the circle creates vertices of a regular n-gon."
  },
  obj8: {
    question: "What are the roots of unity?",
    answer: "The nth roots of unity are the n solutions to z^n = 1. They are z_k = cis(360°k/n) for k = 0, 1, ..., n-1. All lie on the unit circle and form a regular n-gon. The root ω = cis(360°/n) generates all others as powers: 1, ω, ω², ..., ω^(n-1)."
  },
  obj9: {
    question: "What is a primitive root of unity?",
    answer: "The primitive nth root of unity is ω = cis(2π/n) = cis(360°/n). It generates all other nth roots through its powers: the complete set is {1, ω, ω², ..., ω^(n-1)}. This generator connects roots of unity to group theory."
  },
  obj10: {
    question: "What is the sum of all nth roots of unity?",
    answer: "The sum of all nth roots of unity equals zero: 1 + ω + ω² + ... + ω^(n-1) = 0. Geometrically, the roots form a regular polygon centered at the origin, so their vector sum returns to zero. This is a geometric series with ratio ω ≠ 1."
  },
  obj11: {
    question: "What is the product of all nth roots of unity?",
    answer: "The product of all nth roots of unity is (-1)^(n+1). For odd n, the product is 1. For even n, the product is -1. This relates to the constant term of the polynomial z^n - 1."
  },
  obj12: {
    question: "What are the fourth roots of unity?",
    answer: "The fourth roots of unity are 1, i, -1, and -i. They sit at 0°, 90°, 180°, and 270° on the unit circle, forming a square. Each satisfies z⁴ = 1."
  },
  obj13: {
    question: "How do you find the cube roots of a negative number?",
    answer: "Write the negative number in trigonometric form with argument 180°. For -8 = 8·cis(180°), the cube roots are 2·cis((180° + 360°k)/3) for k = 0, 1, 2, giving 2·cis(60°), 2·cis(180°) = -2, and 2·cis(300°). One root is real (-2), and two are complex conjugates."
  },
  obj14: {
    question: "What are the square roots of i?",
    answer: "Write i = 1·cis(90°). The square roots are cis(45°) and cis(225°), which equal (√2/2)(1 + i) and (√2/2)(-1 - i). They are opposite each other on the unit circle, separated by 180°."
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "De Moivre's Theorem",
    "description": "Master De Moivre's theorem for complex powers and roots. Learn the formula (cis θ)^n = cis(nθ), find nth roots of any complex number, and explore roots of unity with geometric interpretations.",
    "url": "https://www.learnmathclass.com/complex-numbers/demoivre-theorem",
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
      "name": "De Moivre's Theorem"
    },
    "teaches": [
      "De Moivre's formula for complex powers",
      "Proof of De Moivre's theorem by induction",
      "Computing high powers of complex numbers",
      "Formula for nth roots of complex numbers",
      "Geometric interpretation of roots as regular polygons",
      "Roots of unity and their properties",
      "Primitive roots of unity and generation"
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
        "name": "De Moivre's Theorem",
        "item": "https://www.learnmathclass.com/complex-numbers/demoivre-theorem"
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
  //       title: "Demoivre Theorem | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/complex-numbers/demoivre-theorem",
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
      title: "De Moivre's Theorem: Powers & Roots of ℂ | Learn Math Class",
      description: "Master De Moivre's theorem for complex powers and roots. Learn the formula (cis θ)^n = cis(nθ), find nth roots of any complex number, and explore roots of unity with geometric interpretations.",
      keywords: keyWords.join(", "),
      url: "/complex-numbers/demoivre-theorem",
      name: "De Moivre's Theorem"
    },
  }
}
   }

// export default function DeMoivreTheoremPage({seoData,sectionsContent , introContent}) {


export default function DeMoivreTheoremPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
</Head>
*/}

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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Demoivre Theorem</h1>
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
