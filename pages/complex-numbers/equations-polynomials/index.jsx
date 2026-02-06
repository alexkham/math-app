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
  "polynomial equations complex numbers",
  "fundamental theorem of algebra",
  "complex roots polynomial",
  "factor polynomial complex",
  "Vieta's formulas",
  "conjugate pairs roots",
  "solve z^n = w",
  "nth roots complex number",
  "algebraically closed field",
  "quadratic complex coefficients",
  "polynomial factorization",
  "complex solutions polynomial",
  "roots of unity polynomial",
  "real polynomial complex roots",
  "polynomial complex plane"
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
  title: `Polynomial Equations with Complex Solutions`,
  before: ``,
  content: `Real numbers solve many polynomial equations but fail systematically on others. The equation $x^2 - 4 = 0$ yields $x = \\pm 2$, both real. The equation $x^2 + 1 = 0$ yields nothing — no real number squared equals $-1$. This gap plagued mathematics for centuries.

Complex numbers close the gap entirely. The equation $x^2 + 1 = 0$ has two solutions in $\\mathbb{C}$: $x = i$ and $x = -i$. Each satisfies $i^2 = -1$ and $(-i)^2 = -1$. The [imaginary unit](!/complex-numbers/imaginary-numbers) exists precisely to solve this equation.

Higher-degree equations with no real solutions also yield to complex numbers. Consider $x^4 + 4 = 0$, equivalent to $x^4 = -4$. No real fourth power is negative, yet four complex solutions exist. Using [De Moivre's theorem](!/complex-numbers/demoivre-theorem), we write $-4 = 4\\text{cis}(180°)$ and extract fourth roots: $z_k = \\sqrt{2}\\text{cis}(45° + 90°k)$ for $k = 0, 1, 2, 3$. The solutions are $1 + i$, $-1 + i$, $-1 - i$, and $1 - i$.

Even equations mixing real and complex solutions find all their roots in $\\mathbb{C}$. The equation $x^3 + x = 0$ factors as $x(x^2 + 1) = 0$, giving $x = 0$ (real) and $x = \\pm i$ (complex). Three roots total, matching the cubic degree.

The pattern holds universally: every polynomial equation of degree $n$ has exactly $n$ roots when we work in $\\mathbb{C}$ and count roots according to their multiplicity.`,
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
  title: `The Fundamental Theorem of Algebra`,
  before: ``,
  content: `The cornerstone of polynomial theory makes a sweeping guarantee: every non-constant polynomial with complex coefficients has at least one complex root. This is the Fundamental Theorem of Algebra, first rigorously proved by Carl Friedrich Gauss in 1799.

The statement seems modest — just one root guaranteed. But its consequences are profound. If polynomial $p(z)$ of degree $n \\geq 1$ has a root $z_1$, then $p(z) = (z - z_1)q(z)$ where $q(z)$ has degree $n - 1$. If $n - 1 \\geq 1$, the theorem applies again: $q(z)$ has a root $z_2$, so $q(z) = (z - z_2)r(z)$. Continue until only a constant remains.

The conclusion: every polynomial of degree $n$ factors completely as:

$$p(z) = a_n(z - z_1)(z - z_2)\\cdots(z - z_n)$$

where $a_n$ is the leading coefficient and $z_1, z_2, \\ldots, z_n$ are the $n$ roots (possibly with repetitions). A polynomial of degree $n$ has exactly $n$ roots in $\\mathbb{C}$, counted with multiplicity.

This completeness property means $\\mathbb{C}$ is algebraically closed. Every polynomial equation solvable anywhere is solvable in $\\mathbb{C}$. No further extension of the number system is needed to find polynomial roots — complex numbers are the final destination.

The theorem's proof lies beyond elementary methods, requiring tools from analysis or topology. But its implications pervade all of algebra: we can always factor polynomials, always find roots, always reduce polynomial equations to products of linear factors over $\\mathbb{C}$.`,
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
  title: `Factoring Polynomials over $\\mathbb{C}$`,
  before: ``,
  content: `The Fundamental Theorem guarantees that every polynomial splits into linear factors over $\\mathbb{C}$. The factorization reveals the polynomial's roots explicitly and connects algebraic structure to geometric information in the [complex plane](!/complex-numbers/geometric-representation).

For a polynomial $p(z) = a_nz^n + a_{n-1}z^{n-1} + \\cdots + a_1z + a_0$, the complete factorization takes the form:

$$p(z) = a_n(z - z_1)(z - z_2)\\cdots(z - z_n)$$

The roots $z_1, z_2, \\ldots, z_n$ may repeat. A root appearing $m$ times is said to have multiplicity $m$. The polynomial $p(z) = (z - 2)^3(z + i)(z - i)$ has degree $5$, with root $2$ of multiplicity $3$ and simple roots $\\pm i$.

The factorization of $z^3 - 1$ illustrates the interplay with [roots of unity](!/complex-numbers/demoivre-theorem). The roots satisfy $z^3 = 1$, giving $z_0 = 1$, $z_1 = \\text{cis}(120°) = -\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i$, and $z_2 = \\text{cis}(240°) = -\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i$. Writing $\\omega = \\text{cis}(120°)$:

$$z^3 - 1 = (z - 1)(z - \\omega)(z - \\omega^2)$$

Multiplying the last two factors produces a real quadratic: $(z - \\omega)(z - \\omega^2) = z^2 + z + 1$. Thus $z^3 - 1 = (z - 1)(z^2 + z + 1)$, the familiar factorization over $\\mathbb{R}$. Over $\\mathbb{C}$, we factor further into linear terms.

Every polynomial admits such complete factorization. Real polynomials may resist factoring over $\\mathbb{R}$ into linear terms, but over $\\mathbb{C}$, every polynomial yields completely.`,
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
  title: `Vieta's Formulas`,
  before: ``,
  content: `A remarkable correspondence links a polynomial's coefficients to symmetric combinations of its roots. These relationships, known as Vieta's formulas after François Viète, allow information to flow between the algebraic expression of a polynomial and the location of its roots.

For a monic quadratic $z^2 + bz + c = 0$ with roots $z_1$ and $z_2$:

$$z_1 + z_2 = -b \\qquad z_1 \\cdot z_2 = c$$

The sum of roots equals the negative of the linear coefficient. The product of roots equals the constant term. Given roots $3$ and $-5$, the polynomial is $z^2 - (-2)z + (-15) = z^2 + 2z - 15$.

For a monic cubic $z^3 + bz^2 + cz + d = 0$ with roots $z_1$, $z_2$, $z_3$:

$$z_1 + z_2 + z_3 = -b$$
$$z_1z_2 + z_1z_3 + z_2z_3 = c$$
$$z_1z_2z_3 = -d$$

The pattern continues for higher degrees. The $k$-th symmetric sum of roots (all products of $k$ roots) equals $(-1)^k$ times the coefficient of $z^{n-k}$ in a monic polynomial of degree $n$.

These formulas prove useful in both directions. Given a polynomial, we can compute sums and products of roots without finding the roots explicitly. Given information about roots, we can reconstruct polynomial coefficients. Problems asking for the sum of squares of roots or similar expressions often yield to Vieta's formulas combined with algebraic identities like $(z_1 + z_2)^2 = z_1^2 + 2z_1z_2 + z_2^2$.`,
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
  title: `Polynomials with Real Coefficients`,
  before: ``,
  content: `Polynomials whose coefficients are all real numbers exhibit special structure: their non-real roots always come in [conjugate](!/complex-numbers/complex-conjugate) pairs. If $z_0$ is a root, so is $\\bar{z_0}$.

The proof exploits how conjugation interacts with polynomial evaluation. Let $p(z) = a_nz^n + a_{n-1}z^{n-1} + \\cdots + a_0$ with all $a_k$ real. For any complex $z$:

$$\\overline{p(z)} = \\overline{a_nz^n + \\cdots + a_0} = a_n\\overline{z^n} + \\cdots + a_0 = a_n(\\bar{z})^n + \\cdots + a_0 = p(\\bar{z})$$

The key step uses $\\overline{a_k} = a_k$ since each coefficient is real, and the property $\\overline{z^k} = (\\bar{z})^k$.

Now suppose $p(z_0) = 0$. Then $\\overline{p(z_0)} = \\bar{0} = 0$, so $p(\\bar{z_0}) = 0$. The conjugate is also a root.

Consequences abound. A real quadratic with complex roots has the form $(z - z_0)(z - \\bar{z_0})$ with conjugate pair $z_0, \\bar{z_0}$. This product expands to $z^2 - 2\\text{Re}(z_0)z + |z_0|^2$, a real quadratic as expected.

A real polynomial of odd degree must have at least one real root. Complex roots pair off, consuming an even number of the $n$ roots. With $n$ odd, at least one root remains unpaired — and an unpaired root of a real polynomial must be real (otherwise its conjugate would also be a root).

This explains why every real cubic crosses the real axis: it must have either three real roots or one real root plus a conjugate pair.`,
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
  title: `Quadratic Equations with Complex Coefficients`,
  before: ``,
  content: `The quadratic formula extends unchanged into the complex domain. For the equation $az^2 + bz + c = 0$ with complex coefficients $a$, $b$, $c$ (and $a \\neq 0$):

$$z = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

The formula remains valid, but a new challenge emerges: the discriminant $\\Delta = b^2 - 4ac$ may itself be complex, requiring us to compute the square root of a complex number.

Consider $z^2 + 2iz - 1 = 0$. Here $a = 1$, $b = 2i$, $c = -1$. The discriminant is:

$$\\Delta = (2i)^2 - 4(1)(-1) = -4 + 4 = 0$$

With discriminant zero, one repeated root exists: $z = \\frac{-2i}{2} = -i$.

For a case with complex discriminant, take $z^2 + z + (1 - i) = 0$. The discriminant is:

$$\\Delta = 1 - 4(1 - i) = 1 - 4 + 4i = -3 + 4i$$

Finding $\\sqrt{-3 + 4i}$ requires the technique from [De Moivre's theorem](!/complex-numbers/demoivre-theorem). Convert $-3 + 4i$ to [trigonometric form](!/complex-numbers/trigonometric-form): modulus $\\sqrt{9 + 16} = 5$, argument $\\theta = \\arctan(4/(-3))$ adjusted to the second quadrant. The square roots have modulus $\\sqrt{5}$ and arguments $\\theta/2$ and $\\theta/2 + 180°$.

The process is lengthier than real quadratics but entirely systematic. Every quadratic with complex coefficients has two roots in $\\mathbb{C}$ (counting multiplicity), accessible through the same formula that handles real coefficients.`,
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
  title: `Solving $z^n = w$`,
  before: ``,
  content: `Equations of the form $z^n = w$, where $w$ is a given complex number, have exactly $n$ solutions. The technique applies [De Moivre's theorem](!/complex-numbers/demoivre-theorem) systematically.

The procedure:

1. Express $w$ in [trigonometric form](!/complex-numbers/trigonometric-form): $w = R\\text{cis}\\phi$
2. Apply the root formula: $z_k = R^{1/n}\\text{cis}\\left(\\frac{\\phi + 360°k}{n}\\right)$ for $k = 0, 1, \\ldots, n-1$
3. Convert to [algebraic form](!/complex-numbers/algebraic-form) if needed

Example: Solve $z^4 = -16$.

First write $-16$ in trigonometric form. The [modulus](!/complex-numbers/absolute-value) is $16$, and the argument is $180°$ (negative real axis). So $-16 = 16\\text{cis}(180°)$.

The fourth roots have modulus $16^{1/4} = 2$ and arguments $\\frac{180° + 360°k}{4} = 45° + 90°k$:

$z_0 = 2\\text{cis}(45°) = 2 \\cdot \\frac{\\sqrt{2}}{2}(1 + i) = \\sqrt{2}(1 + i)$

$z_1 = 2\\text{cis}(135°) = 2 \\cdot \\frac{\\sqrt{2}}{2}(-1 + i) = \\sqrt{2}(-1 + i)$

$z_2 = 2\\text{cis}(225°) = 2 \\cdot \\frac{\\sqrt{2}}{2}(-1 - i) = \\sqrt{2}(-1 - i)$

$z_3 = 2\\text{cis}(315°) = 2 \\cdot \\frac{\\sqrt{2}}{2}(1 - i) = \\sqrt{2}(1 - i)$

Four roots forming a square on a circle of radius $2$, rotated $45°$ from the axes. Each satisfies $(z_k)^4 = -16$.`,
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
  title: `Solving $z^n = \\bar{z}$`,
  before: ``,
  content: `The equation $z^n = \\bar{z}$ combines exponentiation with [conjugation](!/complex-numbers/complex-conjugate), producing a distinctive solution set. Unlike $z^n = w$ which has exactly $n$ roots, this equation has $n + 2$ solutions.

Begin by writing $z = re^{i\\theta}$ in [exponential form](!/complex-numbers/exponential-form). Then $z^n = r^ne^{in\\theta}$ and $\\bar{z} = re^{-i\\theta}$. The equation becomes:

$$r^ne^{in\\theta} = re^{-i\\theta}$$

Two conditions emerge from matching moduli and arguments.

Moduli: $r^n = r$, giving $r^n - r = r(r^{n-1} - 1) = 0$. Either $r = 0$ or $r^{n-1} = 1$.

Arguments: $n\\theta = -\\theta + 360°k$ for integer $k$, so $(n+1)\\theta = 360°k$, giving $\\theta = \\frac{360°k}{n+1}$.

The solution $r = 0$ yields $z = 0$.

The solutions with $r^{n-1} = 1$ require $r = 1$ (since $r \\geq 0$). These solutions lie on the unit circle with arguments $\\theta = \\frac{360°k}{n+1}$ for $k = 0, 1, \\ldots, n$.

Counting: one solution at the origin, plus $n + 1$ solutions on the unit circle, totaling $n + 2$ solutions.

Example: $z^2 = \\bar{z}$ has $2 + 2 = 4$ solutions.

From $r^2 = r$: $r = 0$ or $r = 1$.
From $3\\theta = 360°k$: $\\theta = 0°, 120°, 240°$.

Solutions: $z = 0$, $z = 1$, $z = \\text{cis}(120°) = -\\frac{1}{2} + \\frac{\\sqrt{3}}{2}i$, $z = \\text{cis}(240°) = -\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i$.`,
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
  title: `Equations Involving Conjugates`,
  before: ``,
  content: `Equations relating $z$ and $\\bar{z}$ often describe geometric loci in the [complex plane](!/complex-numbers/geometric-representation). The [conjugate identities](!/complex-numbers/complex-conjugate) translate these equations into conditions on real and imaginary parts.

**Type 1: $z + \\bar{z} = k$ for real constant $k$.**

Since $z + \\bar{z} = 2\\text{Re}(z)$, the equation becomes $2a = k$, or $a = k/2$. The solution set is the vertical line where the real part equals $k/2$. Every point on this line satisfies the equation; no point off the line does.

**Type 2: $z - \\bar{z} = ki$ for real constant $k$.**

Since $z - \\bar{z} = 2bi$, the equation becomes $2bi = ki$, so $b = k/2$. The solution set is the horizontal line where the imaginary part equals $k/2$.

**Type 3: $z \\cdot \\bar{z} = k$ for positive real constant $k$.**

Since $z \\cdot \\bar{z} = |z|^2$, the equation becomes $|z|^2 = k$, or $|z| = \\sqrt{k}$. The solution set is the circle centered at the origin with radius $\\sqrt{k}$.

**Combining conditions** produces intersections of these loci. The system:
$$z + \\bar{z} = 4 \\quad \\text{and} \\quad z \\cdot \\bar{z} = 5$$

The first equation restricts to the vertical line $\\text{Re}(z) = 2$. The second restricts to the circle $|z| = \\sqrt{5}$. Their intersection: points with real part $2$ on the circle of radius $\\sqrt{5}$. Writing $z = 2 + bi$, we need $4 + b^2 = 5$, so $b = \\pm 1$. Solutions: $z = 2 + i$ and $z = 2 - i$.

This geometric approach often simplifies what algebraic manipulation would make tedious.`,
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
  title: `Applications`,
  before: ``,
  content: `Complex roots of polynomials appear throughout science and engineering, carrying meaning far beyond pure mathematics. The location of roots in the complex plane determines the behavior of physical and computational systems.

**Signal Processing:** The transfer function of a linear filter is a ratio of polynomials in a complex variable. The filter's frequency response — which frequencies pass through and which are attenuated — depends directly on where the polynomial roots lie. Roots near the unit circle create sharp peaks or nulls in the response. Filter design amounts to placing roots strategically in the complex plane.

**Control Theory:** A dynamical system's stability hinges on the roots of its characteristic polynomial. If all roots have negative real parts (lying in the left half-plane), the system is stable — disturbances decay over time. Roots with positive real parts indicate instability — small perturbations grow without bound. Control engineers reshape root locations through feedback to achieve desired stability margins.

**Geometry:** Regular polygons emerge as roots of unity. The $n$-th roots of unity form the vertices of a regular $n$-gon inscribed in the unit circle. Solving $z^n = 1$ constructs the polygon automatically. More generally, the roots of $z^n = w$ form a regular $n$-gon of radius $|w|^{1/n}$.

**Number Theory:** Cyclotomic polynomials — the minimal polynomials whose roots are primitive roots of unity — encode deep arithmetic structure. Their coefficients, degrees, and factorization properties connect to prime numbers, Galois theory, and algebraic integers.

The Fundamental Theorem of Algebra ensures that these applications never encounter polynomials without roots. In $\\mathbb{C}$, every polynomial equation has solutions, making complex numbers the natural language for polynomial-based analysis across all fields.`,
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
  title: "Where Every Polynomial Finds Its Roots",
  content: `The real numbers leave many polynomial equations unsolved — $x^2 + 1 = 0$ has no real answer, and neither does $x^4 + 4 = 0$. Complex numbers fill this gap completely. The Fundamental Theorem of Algebra guarantees that every polynomial equation has solutions in $\\mathbb{C}$, and the number of solutions matches the polynomial's degree exactly. This completeness makes the complex field the natural setting for polynomial theory.`
}

const faqQuestions = {
  obj1: {
    question: "What is the Fundamental Theorem of Algebra?",
    answer: "The Fundamental Theorem of Algebra states that every non-constant polynomial with complex coefficients has at least one complex root. This implies every polynomial of degree n has exactly n roots in ℂ (counting multiplicity) and can be factored completely into linear factors."
  },
  obj2: {
    question: "What does it mean that ℂ is algebraically closed?",
    answer: "A field is algebraically closed if every non-constant polynomial with coefficients from that field has a root in the field. The complex numbers ℂ are algebraically closed — every polynomial equation solvable anywhere is solvable in ℂ. No further extension is needed to find polynomial roots."
  },
  obj3: {
    question: "Do complex roots of real polynomials come in conjugate pairs?",
    answer: "Yes. For any polynomial with real coefficients, if z₀ is a non-real root, then its conjugate z̄₀ is also a root. This is because p(z̄) = p̄(z) when all coefficients are real, so p(z₀) = 0 implies p(z̄₀) = 0."
  },
  obj4: {
    question: "Why does every real polynomial of odd degree have at least one real root?",
    answer: "Complex roots of real polynomials come in conjugate pairs, consuming an even number of roots. With odd degree n, at least one root remains unpaired. An unpaired root of a real polynomial must be real, since otherwise its conjugate would also be a root."
  },
  obj5: {
    question: "What are Vieta's formulas?",
    answer: "Vieta's formulas relate a polynomial's coefficients to symmetric combinations of its roots. For a monic quadratic z² + bz + c = 0 with roots z₁, z₂: the sum z₁ + z₂ = -b and the product z₁·z₂ = c. Similar patterns extend to higher degrees."
  },
  obj6: {
    question: "How do you solve z^n = w for a complex number w?",
    answer: "Write w = R·cis(φ) in trigonometric form. The n solutions are z_k = R^(1/n)·cis((φ + 360°k)/n) for k = 0, 1, ..., n-1. All roots have the same modulus R^(1/n) and are evenly spaced around a circle, forming a regular n-gon."
  },
  obj7: {
    question: "How many solutions does z^n = z̄ have?",
    answer: "The equation z^n = z̄ has n + 2 solutions: one at the origin (z = 0) and n + 1 solutions on the unit circle with arguments θ = 360°k/(n+1) for k = 0, 1, ..., n. These unit circle solutions come from requiring r = 1 and (n+1)θ to be a multiple of 360°."
  },
  obj8: {
    question: "What does z + z̄ = k describe geometrically?",
    answer: "Since z + z̄ = 2·Re(z), the equation z + z̄ = k describes the vertical line where Re(z) = k/2. Every point on this line satisfies the equation. Similarly, z·z̄ = k describes a circle centered at the origin with radius √k."
  },
  obj9: {
    question: "Does the quadratic formula work for complex coefficients?",
    answer: "Yes, the quadratic formula z = (-b ± √(b² - 4ac))/(2a) works unchanged for complex coefficients. The discriminant b² - 4ac may be complex, requiring you to find the square root of a complex number using De Moivre's theorem or trigonometric form."
  },
  obj10: {
    question: "How do you factor a polynomial completely over ℂ?",
    answer: "By the Fundamental Theorem, every polynomial of degree n factors as p(z) = aₙ(z - z₁)(z - z₂)···(z - zₙ), where aₙ is the leading coefficient and z₁, ..., zₙ are the n roots (possibly repeated). This complete factorization into linear factors is always possible over ℂ."
  },
  obj11: {
    question: "What is root multiplicity?",
    answer: "A root has multiplicity m if the factor (z - r) appears m times in the polynomial's factorization. For example, in p(z) = (z - 2)³(z + i)(z - i), the root 2 has multiplicity 3 while i and -i are simple roots (multiplicity 1). The multiplicities sum to the degree."
  },
  obj12: {
    question: "Why are complex roots important in engineering?",
    answer: "In signal processing, filter behavior depends on polynomial root locations. In control theory, system stability requires all characteristic polynomial roots to have negative real parts. Root placement in the complex plane directly determines whether systems oscillate, decay, or grow unstably."
  },
  obj13: {
    question: "How are roots of unity related to regular polygons?",
    answer: "The n-th roots of unity (solutions to z^n = 1) form the vertices of a regular n-gon inscribed in the unit circle. More generally, roots of z^n = w form a regular n-gon of radius |w|^(1/n), rotated according to the argument of w."
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Complex Polynomial Equations",
    "description": "Learn how complex numbers solve all polynomial equations. Covers the Fundamental Theorem of Algebra, factoring over ℂ, Vieta's formulas, conjugate pairs, and solving equations like z^n = w.",
    "url": "https://www.learnmathclass.com/complex-numbers/equations-polynomials",
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
      "name": "Polynomial Equations with Complex Numbers"
    },
    "teaches": [
      "The Fundamental Theorem of Algebra",
      "Complete factorization of polynomials over ℂ",
      "Vieta's formulas relating roots and coefficients",
      "Conjugate pairs for real polynomial roots",
      "Solving z^n = w using De Moivre's theorem",
      "Equations involving conjugates and their geometric meaning",
      "Applications in signal processing and control theory"
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
        "name": "Equations and Polynomials",
        "item": "https://www.learnmathclass.com/complex-numbers/equations-polynomials"
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
  //       title: "Equations and Polynomials | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/complex-numbers/equations-polynomials",
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
      title: "Polynomial Equations & Fundamental Theorem | Learn Math Class",
      description: "Learn how complex numbers solve all polynomial equations. Covers the Fundamental Theorem of Algebra, factoring over ℂ, Vieta's formulas, conjugate pairs, and solving equations like z^n = w.",
      keywords: keyWords.join(", "),
      url: "/complex-numbers/equations-polynomials",
      name: "Complex Polynomial Equations"
    },
  }
}
   }

// export default function EquationsPolynomialsPage({seoData,sectionsContent , introContent}) {

export default function EquationsPolynomialsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) { 


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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Equations and Polynomials </h1>
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
