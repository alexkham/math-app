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
  "exponential form complex numbers",
  "Euler's formula",
  "e to the i theta",
  "Euler's identity",
  "e^(iπ) + 1 = 0",
  "complex number exponential notation",
  "re^(iθ)",
  "convert to exponential form",
  "multiply complex exponential form",
  "divide complex exponential form",
  "complex number powers exponential",
  "roots of complex numbers",
  "Taylor series Euler formula",
  "cis notation exponential",
  "polar to exponential form"
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
  title: `Euler's Formula`,
  before: ``,
  content: `In 1748, Leonhard Euler published a relationship that would become one of mathematics' most celebrated results:

$$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$$

The formula asserts an equality between an exponential expression and a trigonometric one. On the left, the base $e$ — the fundamental constant of calculus, approximately $2.71828$ — is raised to an imaginary power $i\\theta$. On the right, ordinary cosine and sine combine with the [imaginary unit](!/complex-numbers/imaginary-numbers) to form a complex number.

The equation holds for every real value of $\\theta$. When $\\theta = 0$, both sides equal $1$. When $\\theta = \\pi/2$, the left side is $e^{i\\pi/2}$ and the right side is $\\cos(\\pi/2) + i\\sin(\\pi/2) = 0 + i = i$. The formula claims these are equal, and they are.

Euler's formula bridges two mathematical worlds. Exponential functions describe growth and decay — populations, radioactive isotopes, compound interest. Trigonometric functions describe oscillation and rotation — waves, circles, periodic phenomena. The formula reveals these as two faces of the same underlying structure, connected through the imaginary unit.

The significance extends beyond elegance. Euler's formula transforms complex arithmetic into exponential arithmetic, where the rules are simpler and more intuitive. It provides the foundation for the exponential form of complex numbers and enables computational techniques impossible with purely algebraic methods.`,
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
  title: `Understanding Euler's Formula`,
  before: ``,
  content: `Euler's formula is not an arbitrary definition but a theorem derivable from fundamental principles. The proof emerges from Taylor series — infinite polynomial expansions that represent functions as sums of powers.

The exponential function has the Taylor series:

$$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\frac{x^4}{4!} + \\cdots$$

Substituting $x = i\\theta$:

$$e^{i\\theta} = 1 + i\\theta + \\frac{(i\\theta)^2}{2!} + \\frac{(i\\theta)^3}{3!} + \\frac{(i\\theta)^4}{4!} + \\cdots$$

The powers of $i$ cycle: $i^2 = -1$, $i^3 = -i$, $i^4 = 1$, and so on. Substituting:

$$= 1 + i\\theta - \\frac{\\theta^2}{2!} - \\frac{i\\theta^3}{3!} + \\frac{\\theta^4}{4!} + \\frac{i\\theta^5}{5!} - \\cdots$$

Separating real and imaginary parts:

$$= \\left(1 - \\frac{\\theta^2}{2!} + \\frac{\\theta^4}{4!} - \\cdots\\right) + i\\left(\\theta - \\frac{\\theta^3}{3!} + \\frac{\\theta^5}{5!} - \\cdots\\right)$$

The real part is the Taylor series for $\\cos\\theta$. The imaginary part is the Taylor series for $\\sin\\theta$. Therefore $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$.

Geometrically, as $\\theta$ increases from $0$, the point $e^{i\\theta}$ traces the unit circle in the [complex plane](!/complex-numbers/geometric-representation). At $\\theta = 0$, we start at $1$. At $\\theta = \\pi/2$, we reach $i$. At $\\theta = \\pi$, we arrive at $-1$. At $\\theta = 2\\pi$, we complete the circle and return to $1$. The exponential $e^{i\\theta}$ parametrizes circular motion.`,
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
  title: `Euler's Identity`,
  before: ``,
  content: `A special case of Euler's formula achieves legendary status. Substituting $\\theta = \\pi$:

$$e^{i\\pi} = \\cos\\pi + i\\sin\\pi = -1 + 0 = -1$$

Rearranging:

$$e^{i\\pi} + 1 = 0$$

This equation — Euler's identity — connects five of mathematics' most fundamental constants in a single statement. The number $e$, base of natural logarithms and central to calculus. The number $i$, foundation of complex arithmetic. The number $\\pi$, ratio of circumference to diameter and key to circular geometry. The number $1$, the multiplicative identity. The number $0$, the additive identity.

Each constant emerged from different mathematical needs: $e$ from growth and limits, $i$ from algebraic completeness, $\\pi$ from measurement of circles, $1$ and $0$ from the structure of arithmetic itself. That a single equation links all five suggests deep unity beneath apparently disparate branches of mathematics.

Mathematicians and physicists routinely cite Euler's identity as the most beautiful formula ever discovered. Richard Feynman called it "the most remarkable formula in mathematics." The equation appears on countless posters, t-shirts, and tattoos — a rare piece of abstract mathematics that captures popular imagination.

Beyond aesthetics, the identity encodes practical information. It confirms that $e^{i\\pi} = -1$, useful whenever exponential and trigonometric expressions interact. It demonstrates that raising a positive real number to an imaginary power can produce a negative real result — a counterintuitive fact with computational consequences.`,
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
  title: `The Exponential Form of a Complex Number`,
  before: ``,
  content: `Euler's formula transforms the [trigonometric form](!/complex-numbers/trigonometric-form) into something more compact. Since $\\text{cis}\\theta = \\cos\\theta + i\\sin\\theta = e^{i\\theta}$, any complex number $z = r\\text{cis}\\theta$ can be written:

$$z = re^{i\\theta}$$

Here $r = |z|$ is the [modulus](!/complex-numbers/absolute-value) and $\\theta = \\arg(z)$ is the argument. The exponential form packages both pieces of information into a single expression resembling a power.

The three representations of a complex number are equivalent:

$$z = a + bi = r(\\cos\\theta + i\\sin\\theta) = r\\text{cis}\\theta = re^{i\\theta}$$

Algebraic form displays the real and imaginary components directly. Trigonometric form emphasizes modulus and argument through explicit trigonometric functions. Exponential form achieves the same emphasis with more economical notation.

The exponential form excels in computation. Standard rules for exponents — which students learn long before complex numbers — apply directly. Multiplying $e^{i\\theta_1}$ by $e^{i\\theta_2}$ yields $e^{i(\\theta_1 + \\theta_2)}$. Dividing subtracts exponents. Raising to a power multiplies the exponent. These rules, familiar from real exponentials, now govern complex arithmetic.

Every nonzero complex number has an exponential form. The number $3 + 4i$ has modulus $5$ and argument $\\arctan(4/3) \\approx 53.13°$, so $3 + 4i = 5e^{i \\cdot 0.927}$ (in radians). The number $-2$ has modulus $2$ and argument $\\pi$, so $-2 = 2e^{i\\pi}$. Even pure imaginaries fit: $i = 1 \\cdot e^{i\\pi/2} = e^{i\\pi/2}$.`,
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
  title: `Converting Between Forms`,
  before: ``,
  content: `Moving between [algebraic](!/complex-numbers/algebraic-form), trigonometric, and exponential forms requires computing modulus and argument or recovering real and imaginary parts.

**Algebraic to Exponential:**

Given $z = a + bi$, find $r$ and $\\theta$:

$$r = \\sqrt{a^2 + b^2}$$

$$\\theta = \\begin{cases} \\arctan(b/a) & \\text{if } a > 0 \\\\ \\arctan(b/a) + \\pi & \\text{if } a < 0, b \\geq 0 \\\\ \\arctan(b/a) - \\pi & \\text{if } a < 0, b < 0 \\\\ \\pi/2 & \\text{if } a = 0, b > 0 \\\\ -\\pi/2 & \\text{if } a = 0, b < 0 \\end{cases}$$

Then write $z = re^{i\\theta}$.

Example: Convert $z = 1 + i$. The modulus is $r = \\sqrt{1 + 1} = \\sqrt{2}$. With $a = 1 > 0$ and $b = 1 > 0$, the argument is $\\theta = \\arctan(1) = \\pi/4$. Thus $1 + i = \\sqrt{2}e^{i\\pi/4}$.

**Exponential to Algebraic:**

Given $z = re^{i\\theta}$, compute:

$$a = r\\cos\\theta \\qquad b = r\\sin\\theta$$

Then write $z = a + bi$.

Example: Convert $z = 4e^{i(2\\pi/3)}$. The real part is $a = 4\\cos(2\\pi/3) = 4(-1/2) = -2$. The imaginary part is $b = 4\\sin(2\\pi/3) = 4(\\sqrt{3}/2) = 2\\sqrt{3}$. Thus $4e^{i(2\\pi/3)} = -2 + 2\\sqrt{3}i$.

Both conversions are routine once the formulas are memorized. The exponential form serves computation; the algebraic form displays components explicitly.`,
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
  title: `Multiplication in Exponential Form`,
  before: ``,
  content: `Multiplying complex numbers in exponential form reduces to elementary exponent rules. Given $z_1 = r_1e^{i\\theta_1}$ and $z_2 = r_2e^{i\\theta_2}$:

$$z_1 \\cdot z_2 = r_1e^{i\\theta_1} \\cdot r_2e^{i\\theta_2} = r_1r_2 \\cdot e^{i\\theta_1} \\cdot e^{i\\theta_2} = r_1r_2 \\cdot e^{i(\\theta_1 + \\theta_2)}$$

The moduli multiply: $|z_1 \\cdot z_2| = r_1r_2$. The arguments add: $\\arg(z_1 \\cdot z_2) = \\theta_1 + \\theta_2$.

This rule follows from the standard law of exponents: $e^a \\cdot e^b = e^{a+b}$. The complex setting changes nothing about how exponents combine.

Geometrically, multiplication scales and rotates. Multiplying by $z_2 = r_2e^{i\\theta_2}$ stretches lengths by factor $r_2$ and rotates counterclockwise by angle $\\theta_2$. Multiplying by $e^{i\\pi/2} = i$ rotates by $90°$ without changing length. Multiplying by $2$ doubles length without rotation. Multiplying by $2e^{i\\pi/4}$ doubles length and rotates $45°$.

Example: Compute $(3e^{i\\pi/6})(2e^{i\\pi/3})$.

Multiply moduli: $3 \\cdot 2 = 6$.
Add arguments: $\\pi/6 + \\pi/3 = \\pi/6 + 2\\pi/6 = 3\\pi/6 = \\pi/2$.

Result: $6e^{i\\pi/2} = 6i$.

Compare this to multiplying the equivalent algebraic forms and simplifying — the exponential approach is faster and less error-prone.`,
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
  title: `Division in Exponential Form`,
  before: ``,
  content: `Division mirrors multiplication with subtraction replacing addition. Given $z_1 = r_1e^{i\\theta_1}$ and $z_2 = r_2e^{i\\theta_2}$ with $z_2 \\neq 0$:

$$\\frac{z_1}{z_2} = \\frac{r_1e^{i\\theta_1}}{r_2e^{i\\theta_2}} = \\frac{r_1}{r_2} \\cdot \\frac{e^{i\\theta_1}}{e^{i\\theta_2}} = \\frac{r_1}{r_2} \\cdot e^{i(\\theta_1 - \\theta_2)}$$

The moduli divide: $|z_1/z_2| = r_1/r_2$. The arguments subtract: $\\arg(z_1/z_2) = \\theta_1 - \\theta_2$.

The exponent law $e^a / e^b = e^{a-b}$ governs the calculation, just as with real exponentials.

Geometrically, dividing by $z_2$ shrinks by factor $1/r_2$ and rotates clockwise by angle $\\theta_2$ (equivalently, counterclockwise by $-\\theta_2$). Division undoes multiplication: if $w = z_1 \\cdot z_2$, then $z_1 = w/z_2$ recovers the original factor.

Example: Compute $\\frac{8e^{i(5\\pi/6)}}{2e^{i(\\pi/3)}}$.

Divide moduli: $8/2 = 4$.
Subtract arguments: $5\\pi/6 - \\pi/3 = 5\\pi/6 - 2\\pi/6 = 3\\pi/6 = \\pi/2$.

Result: $4e^{i\\pi/2} = 4i$.

In [algebraic form](!/complex-numbers/algebraic-form), this division would require multiplying by the [conjugate](!/complex-numbers/complex-conjugate) of the denominator and simplifying — a lengthier process. Exponential form bypasses that machinery entirely.`,
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
  title: `Powers in Exponential Form`,
  before: ``,
  content: `Raising a complex number to a power becomes trivial in exponential form. For $z = re^{i\\theta}$ and any integer $n$:

$$z^n = (re^{i\\theta})^n = r^n \\cdot (e^{i\\theta})^n = r^n e^{in\\theta}$$

The modulus raises to the $n$-th power. The argument multiplies by $n$. Both operations are elementary.

This is [De Moivre's theorem](!/complex-numbers/demoivre-theorem) expressed in exponential notation. The trigonometric statement $(\\text{cis}\\theta)^n = \\text{cis}(n\\theta)$ becomes the exponential statement $(e^{i\\theta})^n = e^{in\\theta}$, a direct consequence of the power rule for exponents.

Example: Compute $(1 + i)^{12}$.

Convert to exponential form: $1 + i = \\sqrt{2}e^{i\\pi/4}$.

Apply the power rule: $(\\sqrt{2}e^{i\\pi/4})^{12} = (\\sqrt{2})^{12} \\cdot e^{i \\cdot 12 \\cdot \\pi/4} = 2^6 \\cdot e^{i \\cdot 3\\pi} = 64e^{i \\cdot 3\\pi}$.

Simplify the argument: $3\\pi = 2\\pi + \\pi$, so $e^{i \\cdot 3\\pi} = e^{i\\pi} = -1$.

Result: $64 \\cdot (-1) = -64$.

The computation required no binomial expansion, no tracking of $i$ powers, no collection of terms. Converting to exponential form, applying the power rule, and simplifying completed the calculation in a few lines.`,
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
  title: `Roots in Exponential Form`,
  before: ``,
  content: `Finding $n$-th roots inverts the power operation. Given $w = Re^{i\\phi}$, the solutions to $z^n = w$ are:

$$z_k = R^{1/n} e^{i(\\phi + 2\\pi k)/n} \\quad \\text{for } k = 0, 1, 2, \\ldots, n-1$$

Each value of $k$ produces a distinct root. Beyond $k = n-1$, the arguments differ by full rotations of $2\\pi$, repeating previous roots.

All $n$ roots share the same modulus $R^{1/n}$, placing them on a circle of that radius in the [complex plane](!/complex-numbers/geometric-representation). Their arguments differ by $2\\pi/n$, spacing them evenly around the circle. The roots form vertices of a regular $n$-gon.

Example: Find the cube roots of $8$.

Write $8 = 8e^{i \\cdot 0}$ (modulus $8$, argument $0$).

Apply the formula: $z_k = 8^{1/3} e^{i(0 + 2\\pi k)/3} = 2e^{i \\cdot 2\\pi k/3}$ for $k = 0, 1, 2$.

$z_0 = 2e^{i \\cdot 0} = 2$
$z_1 = 2e^{i \\cdot 2\\pi/3} = 2(-\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i) = -1 + \\sqrt{3}i$
$z_2 = 2e^{i \\cdot 4\\pi/3} = 2(-\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i) = -1 - \\sqrt{3}i$

Three roots forming an equilateral triangle of radius $2$, one vertex at $2$ on the positive real axis.

The exponential formula makes root extraction systematic: convert to exponential form, apply the root formula, enumerate distinct values of $k$.`,
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
  title: `Why Exponential Form Matters`,
  before: ``,
  content: `The exponential representation of complex numbers is not merely a notational convenience — it fundamentally simplifies how we think about and compute with complex quantities.

**Computational Efficiency:** Multiplication becomes addition of exponents. Division becomes subtraction. Powers become multiplication by integers. Roots become division by integers. Every operation reduces to arithmetic on the modulus and argument, bypassing the algebraic expansion and simplification that [rectangular form](!/complex-numbers/algebraic-form) demands.

**Conceptual Unification:** Exponential form reveals that circular motion and exponential growth are manifestations of the same mathematical structure. A point rotating around the origin traces $e^{i\\theta}$ as $\\theta$ increases — circular motion encoded as an exponential. Conversely, the exponential function, when extended to imaginary inputs, produces rotation rather than growth.

**Foundation for Advanced Mathematics:** Fourier analysis decomposes signals into sums of complex exponentials $e^{i\\omega t}$, each representing a pure oscillation at frequency $\\omega$. Signal processing relies on this decomposition to filter, compress, and analyze audio, images, and communications. Quantum mechanics writes wave functions using complex exponentials, encoding the probability amplitudes that govern particle behavior.

The exponential form appears wherever oscillation, rotation, or periodic phenomena arise. Electrical engineers use it to analyze AC circuits. Physicists use it in wave equations. Mathematicians use it throughout complex analysis. Learning to think in exponential form equips you with a tool that extends far beyond the algebra of complex numbers into the mathematical description of the physical world.`,
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
  title: "The Elegant Union of Exponentials and Circles",
  content: `The [trigonometric form](!/complex-numbers/trigonometric-form) $r\\text{cis}\\theta$ simplifies multiplication and powers, but notation can be streamlined further. Euler's formula reveals that $e^{i\\theta}$ equals $\\cos\\theta + i\\sin\\theta$, allowing us to write any complex number as $z = re^{i\\theta}$. This exponential form inherits all the advantages of trigonometric representation while invoking the familiar rules of exponents — multiplication adds exponents, division subtracts them, and powers simply multiply.`
}

const faqQuestions = {
  obj1: {
    question: "What is Euler's formula?",
    answer: "Euler's formula states that e^(iθ) = cos θ + i sin θ for any real angle θ. It connects exponential functions with trigonometric functions through the imaginary unit, revealing that growth and oscillation are mathematically unified."
  },
  obj2: {
    question: "How do you prove Euler's formula?",
    answer: "Euler's formula is proven using Taylor series. Substitute iθ into the exponential series e^x = 1 + x + x²/2! + ..., then use the cyclic powers of i to separate real and imaginary parts. The real part becomes the cosine series, and the imaginary part becomes the sine series."
  },
  obj3: {
    question: "What is Euler's identity?",
    answer: "Euler's identity is e^(iπ) + 1 = 0, a special case of Euler's formula when θ = π. It connects five fundamental mathematical constants (e, i, π, 1, and 0) in a single equation, often called the most beautiful formula in mathematics."
  },
  obj4: {
    question: "What is the exponential form of a complex number?",
    answer: "The exponential form writes a complex number as z = re^(iθ), where r is the modulus (distance from origin) and θ is the argument (angle from positive real axis). It is equivalent to the trigonometric form z = r(cos θ + i sin θ) = r cis θ."
  },
  obj5: {
    question: "How do you convert algebraic form to exponential form?",
    answer: "For z = a + bi, calculate r = √(a² + b²) for the modulus and θ = arctan(b/a) adjusted for quadrant for the argument. Then write z = re^(iθ). For example, 1 + i = √2 · e^(iπ/4)."
  },
  obj6: {
    question: "How do you convert exponential form to algebraic form?",
    answer: "For z = re^(iθ), compute the real part a = r cos θ and imaginary part b = r sin θ. Then write z = a + bi. For example, 4e^(i·2π/3) = -2 + 2√3i."
  },
  obj7: {
    question: "How do you multiply complex numbers in exponential form?",
    answer: "To multiply z₁ = r₁e^(iθ₁) and z₂ = r₂e^(iθ₂), multiply the moduli and add the arguments: z₁·z₂ = (r₁r₂)e^(i(θ₁+θ₂)). The standard exponent rule e^a · e^b = e^(a+b) applies directly."
  },
  obj8: {
    question: "How do you divide complex numbers in exponential form?",
    answer: "To divide z₁ = r₁e^(iθ₁) by z₂ = r₂e^(iθ₂), divide the moduli and subtract the arguments: z₁/z₂ = (r₁/r₂)e^(i(θ₁-θ₂)). This follows from the exponent rule e^a / e^b = e^(a-b)."
  },
  obj9: {
    question: "How do you raise a complex number to a power in exponential form?",
    answer: "For z = re^(iθ) and integer n, apply the power rule: z^n = r^n · e^(inθ). The modulus raises to the nth power and the argument multiplies by n. This is De Moivre's theorem in exponential notation."
  },
  obj10: {
    question: "How do you find the nth roots of a complex number?",
    answer: "For w = Re^(iφ), the n roots are z_k = R^(1/n) · e^(i(φ + 2πk)/n) for k = 0, 1, ..., n-1. All roots have modulus R^(1/n) and are evenly spaced around a circle, separated by angle 2π/n."
  },
  obj11: {
    question: "What does e^(iπ) equal?",
    answer: "e^(iπ) = -1. By Euler's formula, e^(iπ) = cos π + i sin π = -1 + 0 = -1. This result, rearranged as e^(iπ) + 1 = 0, is Euler's identity."
  },
  obj12: {
    question: "What does e^(iπ/2) equal?",
    answer: "e^(iπ/2) = i. By Euler's formula, e^(iπ/2) = cos(π/2) + i sin(π/2) = 0 + i·1 = i. This shows that e raised to iπ/2 produces the imaginary unit."
  },
  obj13: {
    question: "Why is exponential form useful for complex numbers?",
    answer: "Exponential form simplifies arithmetic: multiplication adds exponents, division subtracts them, powers multiply the exponent, and roots divide it. It also reveals the connection between circular motion and exponential functions, which is foundational in Fourier analysis, signal processing, and physics."
  },
  obj14: {
    question: "What is the relationship between cis θ and e^(iθ)?",
    answer: "They are equal: cis θ = cos θ + i sin θ = e^(iθ). The notation 'cis' is shorthand for 'cos + i sin,' while e^(iθ) expresses the same value using Euler's formula. Both represent a point on the unit circle at angle θ."
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Exponential Form of Complex Numbers",
    "description": "Master the exponential form z = re^(iθ) of complex numbers. Learn Euler's formula, Euler's identity, and how to multiply, divide, and find powers and roots using exponential notation.",
    "url": "https://www.learnmathclass.com/complex-numbers/exponential-form",
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
      "name": "Exponential Form of Complex Numbers"
    },
    "teaches": [
      "Euler's formula e^(iθ) = cos θ + i sin θ",
      "Euler's identity e^(iπ) + 1 = 0",
      "Exponential form z = re^(iθ)",
      "Converting between algebraic and exponential forms",
      "Multiplication and division in exponential form",
      "Powers and roots using exponential notation",
      "Applications in signal processing and physics"
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
        "name": "Exponential Form",
        "item": "https://www.learnmathclass.com/complex-numbers/exponential-form"
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
  //       title: "Exponential Form | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/complex-numbers/exponential-form",
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
      title: "Exponential Form: Euler's Formula & Identity | Learn Math Class",
      description: "Master the exponential form z = re^(iθ) of complex numbers. Learn Euler's formula, Euler's identity, and how to multiply, divide, and find powers and roots using exponential notation.",
      keywords: keyWords.join(", "),
      url: "/complex-numbers/exponential-form",
      name: "Exponential Form of Complex Numbers"
    },
  }
}
   }

// export default function ExponentialFormPage({seoData,sectionsContent , introContent}) {

export default function ExponentialFormPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Exponential Form</h1>
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
