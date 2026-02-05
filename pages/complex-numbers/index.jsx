// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import React from 'react'
// import '../../pages/pages.css'
// import Head from 'next/head'


// export async function getStaticProps(){

//   const keyWords=['','','','','']

//   // •

// //   \u2022 First item
// // \u2022 Second item

  
// // <hr style="border-width:1px;"></hr>

// // <hr style="color:blue;" />

// // <hr style="border-color:#3498db; border-width:1px;" />



// // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// // <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
//         //     {processContent(sectionsContent.normal.notation)}
//         // </div>,


// //   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
// //     {processContent(sectionsContent.normal.parameters)}
// // </div>,
        
// //  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
// //                   {processContent(sectionsContent.obj4.content)}
// //                   </div>,


// //  <div key={'dist'} style={{
// //                     textAlign: 'center',
// //                     transform: 'scale(0.98)',
// //                     transformOrigin: 'center',
// //                     marginTop:'50px',
// //                     marginLeft:'-150px'
// //                   }} dangerouslySetInnerHTML={{ 
// //                     __html:   sectionContent.distributions.svg,
// //                   }} />

//     const sectionsContent={

//     // obj1:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',
  
  
//     // },
//     obj1: {
//   title: `The Imaginary Unit ($i$) and Pure Imaginary Numbers`,
//   before: ``,
//   content: `The real number system, despite its vastness, cannot solve every equation. The simple polynomial $x^2 + 1 = 0$ has no solution among real numbers because no real number squared produces a negative result. This limitation led mathematicians to define a new number: the [imaginary unit](!/complex-numbers/imaginary-numbers) $i$, where $i^2 = -1$.

// From this single definition, an entire class of numbers emerges. Pure imaginary numbers take the form $bi$ where $b$ is real — examples include $3i$, $-7i$, and $\\frac{1}{2}i$. These numbers exist on their own axis, perpendicular to the real number line.

// The powers of $i$ follow a cyclic pattern that repeats every four steps: $i^1 = i$, $i^2 = -1$, $i^3 = -i$, $i^4 = 1$, then back to $i$. This cycle provides a shortcut for computing any power of $i$ — simply divide the exponent by 4 and use the remainder.`,
//   after: ``,
//   link: '',
// },
//     // obj2:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',
  
//     // },
// obj2: {
//   title: `Algebraic Representation and the Complex Conjugate`,
//   before: ``,
//   content: `When we write $z = a + bi$, the symbols $a$ and $b$ represent ordinary real numbers. Mathematicians assigned names to these components: $Re(z) = a$ labels the horizontal contribution, while $Im(z) = b$ labels the vertical one. Students often stumble here — the quantity $Im(z)$ equals $b$ alone, not $bi$. That coefficient standing before $i$ is itself a member of $\\mathbb{R}$.

// For any $z = a + bi$, we construct its [conjugate](!/complex-numbers/complex-conjugate) by flipping the sign in front of $b$: thus $\\bar{z} = a - bi$. What does this operation actually do? On the [complex plane](!/complex-numbers/geometric-representation), it mirrors the point through the horizontal axis. Studying this picture makes the abstract definition concrete — the conjugate sits at equal distance from the real axis, but on the opposite side.

// Why does this matter? When $z$ meets $\\bar{z}$ through multiplication, something special occurs: $z \\cdot \\bar{z} = a^2 + b^2$, a value guaranteed to be real and non-negative. From here, two tests emerge for classification: if $z = \\bar{z}$, the number must be real; if $\\bar{z} = -z$, it must be pure imaginary.

// The conjugate operation carries deep significance throughout complex mathematics. It enables division by eliminating imaginary numbers from denominators. It connects directly to the modulus through the identity $|z|^2 = z \\cdot \\bar{z}$. It preserves arithmetic structure: the conjugate of a sum equals the sum of conjugates, and the conjugate of a product equals the product of conjugates. These properties make the conjugate indispensable for proofs, simplifications, and computations across every branch of complex analysis. A [dedicated section](!/complex-numbers/complex-conjugate) explores the conjugate in full detail — its properties, its geometric meaning, and its applications to solving equations and simplifying expressions.`,
//   after: ``,
//   link: '',
// },
  
//     // obj3:{
  
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',
  
//     // },

//     obj3: {
//   title: `Arithmetic Operations: Calculating in $\\mathbb{C}$`,
//   before: ``,
//   content: `The four basic operations extend naturally from real numbers into the complex field, though each carries its own character. Two complex numbers are considered equal only when both their real parts match and their imaginary parts match — the equation $a + bi = c + di$ demands $a = c$ and $b = d$ simultaneously.

// [Addition and subtraction](!/complex-numbers/operations) work exactly as intuition suggests: combine the real components together, combine the imaginary components together. Given $z_1 = 3 + 2i$ and $z_2 = 1 - 5i$, their sum becomes $(3 + 1) + (2 - 5)i = 4 - 3i$. No new techniques required — just careful bookkeeping of like terms.

// [Multiplication](!/complex-numbers/operations) demands more attention. We apply the distributive property as with any binomial product, but one crucial substitution changes everything: wherever $i^2$ appears, we replace it with $-1$. The product $(2 + 3i)(4 - i)$ expands to $8 - 2i + 12i - 3i^2$, and since $i^2 = -1$, this simplifies to $8 + 10i + 3 = 11 + 10i$.

// [Division](!/complex-numbers/operations) presents the only genuine challenge. A complex number in the denominator violates standard mathematical convention — we need real denominators for final answers. The solution employs the [conjugate](!/complex-numbers/complex-conjugate): multiply both numerator and denominator by the conjugate of the denominator. This works because $z \\cdot \\bar{z}$ always produces a real number. The fraction $\\frac{3 + 2i}{1 - 4i}$ transforms through multiplication by $\\frac{1 + 4i}{1 + 4i}$, converting the denominator to the real value $1 + 16 = 17$ and allowing us to express the result in standard $a + bi$ form.`,
//   after: ``,
//   link: '',
// },

//     // obj4:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',
  
//     // },

//     obj4: {
//   title: `Geometric Representation: The Complex Plane`,
//   before: ``,
//   content: `Numbers gain new meaning when we can see them. Every complex number $z = a + bi$ corresponds to a unique point $(a, b)$ on a two-dimensional plane. The horizontal axis carries the real numbers, the vertical axis carries the pure imaginary numbers, and every other complex number occupies the space between. This visualization, called the [complex plane](!/complex-numbers/geometric-representation) or Argand diagram, transforms abstract algebra into concrete geometry.

// The placement of familiar numbers becomes immediate: real numbers like $3$ or $-2$ sit directly on the horizontal axis, pure imaginary numbers like $4i$ or $-i$ sit on the vertical axis, and the origin represents zero — the only number belonging to both categories simultaneously. A number like $3 + 2i$ appears at the point three units right and two units up from the origin.

// This geometric perspective reveals structure invisible in pure algebra. The [conjugate](!/complex-numbers/complex-conjugate) $\\bar{z}$ appears as a reflection across the real axis. Addition of complex numbers follows the parallelogram rule familiar from vector mathematics. The [modulus](!/complex-numbers/absolute-value) $|z| = \\sqrt{a^2 + b^2}$ measures the straight-line distance from the origin to the point — a direct application of the Pythagorean theorem.

// One fundamental difference separates $\\mathbb{C}$ from $\\mathbb{R}$: complex numbers cannot be ordered. We cannot say $3 + 2i$ is greater than $1 + 5i$ in any meaningful way. The real line has direction — numbers increase as we move right — but the complex plane extends in all directions equally. Only the modulus provides a sense of size, measuring how far each number lies from the origin.

// The [Triangle Inequality](!/complex-numbers/absolute-value) governs how distances combine: $|z_1 + z_2| \\leq |z_1| + |z_2|$. Geometrically, this says the direct path between two points never exceeds the detour through the origin. This inequality appears constantly in analysis and provides essential bounds for estimation and proof.`,
//   after: ``,
//   link: '',
// },
//     // obj5:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',
  
//     // },

//     obj5: {
//   title: `The Mathematical Theory: Complex Numbers as a Field`,
//   before: ``,
//   content: `Mathematics demands rigor beyond intuition. Before accepting $\\mathbb{C}$ as a legitimate number system, we must verify that it satisfies the structural requirements of a [mathematical field](!/complex-numbers/properties-and-fields). A field is a set equipped with addition and multiplication operations that obey eleven specific axioms — the same rules that govern the rational and real numbers.

// The verification proceeds systematically. Addition in $\\mathbb{C}$ is commutative: $z_1 + z_2 = z_2 + z_1$ for any pair of complex numbers. It is also associative: $(z_1 + z_2) + z_3 = z_1 + (z_2 + z_3)$. An additive identity exists — the number $0 + 0i$ satisfies $z + 0 = z$ for every $z$. Every complex number possesses an additive inverse: the negative $-z = -a - bi$ fulfills $z + (-z) = 0$.

// Multiplication follows parallel rules. The operation is commutative and associative. The multiplicative identity $1 + 0i$ satisfies $z \\cdot 1 = z$. Every nonzero complex number has a multiplicative inverse $z^{-1}$ such that $z \\cdot z^{-1} = 1$. The formula for this inverse employs the [conjugate](!/complex-numbers/complex-conjugate): $z^{-1} = \\frac{\\bar{z}}{|z|^2} = \\frac{a - bi}{a^2 + b^2}$.

// The distributive law bridges addition and multiplication: $z_1 \\cdot (z_2 + z_3) = z_1 \\cdot z_2 + z_1 \\cdot z_3$. With all eleven axioms confirmed, $\\mathbb{C}$ earns its status as a field — an algebraic structure where arithmetic behaves predictably and division by any nonzero element remains possible.

// Yet $\\mathbb{C}$ differs from $\\mathbb{R}$ in one critical respect: it lacks order. No definition of "less than" or "greater than" extends consistently to complex numbers. We cannot arrange them on a line from smallest to largest. The complex field trades this linear ordering for something arguably more powerful — algebraic completeness, where every polynomial equation finds its solutions.`,
//   after: ``,
//   link: '',
// },
//     // obj6:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',
  
//     // },

//     obj6: {
//   title: `Trigonometric Representation: Radius and Argument`,
//   before: ``,
//   content: `The algebraic form $z = a + bi$ serves well for addition and subtraction, but multiplication and powers become unwieldy as expressions grow complex. A different representation emerges from the [geometric perspective](!/complex-numbers/geometric-representation): instead of describing where a point lies using horizontal and vertical coordinates, we specify how far it sits from the origin and what angle it makes with the positive real axis.

// The distance from the origin is the [modulus](!/complex-numbers/absolute-value) $r = |z| = \\sqrt{a^2 + b^2}$, computed through the Pythagorean theorem. The angle $\\theta$, called the argument and written $\\arg(z)$, measures the counterclockwise rotation from the positive real axis to the line connecting the origin to $z$. Together, these two values determine the number completely.

// The connection between forms follows from basic trigonometry. If a point lies at distance $r$ and angle $\\theta$, its horizontal coordinate equals $r\\cos\\theta$ and its vertical coordinate equals $r\\sin\\theta$. Thus $z = r\\cos\\theta + ir\\sin\\theta$, which factors as $z = r(\\cos\\theta + i\\sin\\theta)$. Mathematicians abbreviate this as $z = r\\text{cis}\\theta$, where "cis" stands for "cosine plus i sine."

// Converting from algebraic to [trigonometric form](!/complex-numbers/trigonometric-form) requires finding both $r$ and $\\theta$. The modulus comes directly from $r = \\sqrt{a^2 + b^2}$. The argument requires more care: while $\\tan\\theta = \\frac{b}{a}$ provides a starting point, the actual quadrant of $z$ determines whether adjustments are needed. A number in the second quadrant has a different argument than one in the fourth, even if both share the same tangent value.

// Certain angles deserve memorization. Numbers on the positive real axis have argument $0°$. Pure positive imaginaries point straight up at $90°$. Negative reals aim backward at $180°$. Negative imaginaries point downward at $270°$ or equivalently $-90°$. Recognizing these special cases accelerates computation and builds geometric intuition for how arguments behave.

// The true power of trigonometric form reveals itself in multiplication and division. When two numbers multiply, their moduli multiply and their arguments add: $z_1 \\cdot z_2 = r_1 r_2 \\text{cis}(\\theta_1 + \\theta_2)$. Division works inversely — moduli divide, arguments subtract. These elegant rules transform tedious algebraic expansion into simple arithmetic on lengths and angles.`,
//   after: ``,
//   link: '',
// },
//     // obj7:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',
  
//     // },

//     obj7: {
//   title: `Exponential Form and Euler's Formula`,
//   before: ``,
//   content: `The [trigonometric form](!/complex-numbers/trigonometric-form) $r\\text{cis}\\theta$ simplifies multiplication beautifully, but an even more elegant representation exists. In the eighteenth century, Leonhard Euler discovered a remarkable connection between exponential functions and trigonometry that would reshape mathematics forever: the identity $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$.

// This equation appears almost magical at first glance. The left side involves raising a real number to an imaginary power — an operation with no obvious meaning. Yet when we extend the exponential function into the complex domain through its infinite series expansion, the formula emerges naturally. The real parts collect to form cosine, the imaginary parts assemble into sine, and the equality holds for every real angle $\\theta$.

// From Euler's formula flows the [exponential form](!/complex-numbers/exponential-form) of a complex number: $z = re^{i\\theta}$, where $r$ is the modulus and $\\theta$ is the argument. This notation is mathematically equivalent to $r\\text{cis}\\theta$ but carries computational advantages. Standard exponent rules now apply directly to complex arithmetic. Multiplication becomes $z_1 \\cdot z_2 = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}$ — we simply multiply the coefficients and add the exponents. Division follows as $\\frac{z_1}{z_2} = \\frac{r_1}{r_2}e^{i(\\theta_1 - \\theta_2)}$.

// Powers reduce to almost trivial calculation. Raising $z = re^{i\\theta}$ to the $n$-th power yields $z^n = r^n e^{in\\theta}$. No binomial expansion, no collecting terms, no tracking powers of $i$ — just raise the modulus to the power and multiply the argument by $n$. This efficiency becomes indispensable when computing high powers or extracting roots.

// One specialization of Euler's formula achieves legendary status among mathematicians. Setting $\\theta = \\pi$ produces $e^{i\\pi} = \\cos\\pi + i\\sin\\pi = -1$, which rearranges to $e^{i\\pi} + 1 = 0$. This single equation — known as Euler's Identity — connects five of mathematics' most fundamental constants: $e$, $i$, $\\pi$, $1$, and $0$. It unites exponential growth, imaginary numbers, circular geometry, multiplicative identity, and additive identity into one compact statement, often celebrated as the most beautiful formula in all of mathematics.`,
//   after: ``,
//   link: '',
// },
//     // obj8:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',
  
//     // },

//     obj8: {
//   title: `De Moivre's Theorem and $n$-th Order Roots`,
//   before: ``,
//   content: `The [exponential form](!/complex-numbers/exponential-form) hints at a powerful pattern: raising $z = r\\text{cis}\\theta$ to the $n$-th power multiplies the argument by $n$ while raising the modulus to that power. Abraham de Moivre formalized this observation into the theorem bearing his name: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$ for any integer $n$. In compact notation, $(\\text{cis}\\theta)^n = \\text{cis}(n\\theta)$.

// The practical formula extends to any complex number in [trigonometric form](!/complex-numbers/trigonometric-form): $z^n = r^n\\text{cis}(n\\theta)$. Computing $(1 + i)^{20}$ through algebraic expansion would require enormous effort, but [De Moivre's theorem](!/complex-numbers/demoivre-theorem) reduces it to routine calculation. First convert: $1 + i = \\sqrt{2}\\text{cis}(45°)$. Then apply the formula: $(\\sqrt{2})^{20}\\text{cis}(20 \\cdot 45°) = 1024\\text{cis}(900°) = 1024\\text{cis}(180°) = -1024$. What could have been pages of algebra becomes three lines.

// The theorem's true depth emerges when we reverse direction and seek roots rather than powers. Given a complex number $w$, what values of $z$ satisfy $z^n = w$? The answer reveals geometric elegance: exactly $n$ distinct roots exist, and they distribute themselves evenly around a circle centered at the origin.

// If $w = R\\text{cis}\\phi$, the $n$-th roots follow the formula $z_k = R^{1/n}\\text{cis}\\left(\\frac{\\phi + 360°k}{n}\\right)$ for $k = 0, 1, 2, \\ldots, n-1$. Each root shares the same modulus $R^{1/n}$, placing all of them on a circle of that radius. Their arguments differ by exactly $\\frac{360°}{n}$, spacing them uniformly like vertices of a regular polygon.

// The roots of unity — solutions to $z^n = 1$ — deserve special attention. Since $1 = 1\\text{cis}(0°)$, the $n$-th roots of unity are $z_k = \\text{cis}\\left(\\frac{360°k}{n}\\right)$. For $n = 4$, the fourth roots of unity are $1$, $i$, $-1$, and $-i$, forming a square on the unit circle. For $n = 6$, we obtain a regular hexagon. These roots appear throughout mathematics: in Fourier analysis, in polynomial factorization, in signal processing, and in the study of symmetry. The primitive root $\\omega = \\text{cis}\\left(\\frac{360°}{n}\\right)$ generates all others as powers: $\\omega^0, \\omega^1, \\omega^2, \\ldots, \\omega^{n-1}$.`,
//   after: ``,
//   link: '',
// },
//     // obj9:{
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
//     //   link:'',
  
//     // },

//     obj9: {
//   title: `Complex Equations and Polynomial Theory`,
//   before: ``,
//   content: `The complex number system achieves what no smaller number system can: it provides a home for every polynomial root. This completeness, formalized in the Fundamental Theorem of Algebra, states that every non-constant polynomial with complex coefficients possesses at least one complex root. The immediate consequence transforms our understanding of polynomials: a polynomial of degree $n$ factors completely into exactly $n$ linear terms over $\\mathbb{C}$, meaning it has precisely $n$ roots when counted with multiplicity.

// Consider the equation $x^4 + 1 = 0$, which has no real solutions since $x^4$ is always non-negative. In $\\mathbb{C}$, four distinct roots exist, evenly spaced around the unit circle at arguments $45°$, $135°$, $225°$, and $315°$. The [geometric representation](!/complex-numbers/geometric-representation) reveals their symmetric arrangement, while [De Moivre's theorem](!/complex-numbers/demoivre-theorem) provides the computational machinery to find them.

// [Vieta's formulas](!/complex-numbers/equations-and-polynomials) establish a profound connection between a polynomial's roots and its coefficients. For a quadratic $z^2 + bz + c = 0$ with roots $z_1$ and $z_2$, the sum of roots equals $-b$ and the product equals $c$. These relationships extend to higher degrees: for a cubic, the sum of roots, the sum of pairwise products, and the product of all three roots each correspond to specific coefficients. This bridge between algebra and the structure of solutions enables problem-solving techniques unavailable through direct calculation.

// Polynomials with real coefficients exhibit special behavior: their non-real roots always appear in [conjugate](!/complex-numbers/complex-conjugate) pairs. If $z_0$ satisfies a real polynomial, so does $\\bar{z_0}$. This symmetry explains why real quadratics either have two real roots or two complex conjugates — never one of each. The geometric interpretation places conjugate pairs as reflections across the real axis, preserving the polynomial's real character.

// Certain equations showcase the interplay between conjugation and powers. The equation $z^n = \\bar{z}$ yields exactly $n + 2$ solutions: zero itself, plus $n + 1$ values distributed on the unit circle. Solving such equations requires translating into [trigonometric form](!/complex-numbers/trigonometric-form), applying the constraint that $r^n e^{in\\theta} = re^{-i\\theta}$, and extracting the permissible values of $r$ and $\\theta$. These techniques, combining algebraic manipulation with geometric insight, represent the full power of complex number theory applied to equation solving.`,
//   after: ``,
//   link: '',
// },
//     obj10:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj11:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj12:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj13:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },
//     obj14:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },


//     obj15:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     }
  
//   }


//   const introContent = {
//   id: "intro",
//   title: "The Evolution of Numbers: From Counting to Complexity",
//   content: `
//   Mathematics began with natural numbers ($\\mathbb{N}$) for counting, but as we attempted to solve more equations, we had to "expand the bag". We added whole numbers ($\\mathbb{Z}$) for negatives, rational numbers ($\\mathbb{Q}$) for quotients, and real numbers ($\\mathbb{R}$) for values like $\\sqrt{2}$. However, the "R-bag" failed to solve the equation $x^2 + 1 = 0$, leading to the birth of the Complex Numbers ($\\mathbb{C}$).
//   `
// }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Complex Numbers | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/complex-numbers",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function ComplexNumbersPage({seoData,sectionsContent , introContent}) {

    
//   const genericSections=[
//     {
//         id:'1',
//         title:sectionsContent.obj1.title,
//         link:sectionsContent.obj1.link,
//         content:[
//           sectionsContent.obj1.content,
//         ]
//     },
//     {
//         id:'2',
//         title:sectionsContent.obj2.title,
//         link:sectionsContent.obj2.link,
//         content:[
//           sectionsContent.obj2.content,
//         ]
//     },
//     {
//         id:'3',
//         title:sectionsContent.obj3.title,
//         link:sectionsContent.obj3.link,
//         content:[
//           sectionsContent.obj3.content,
//         ]
//     },
//     {
//         id:'4',
//         title:sectionsContent.obj4.title,
//         link:sectionsContent.obj4.link,
//         content:[
//           sectionsContent.obj4.content,
//         ]
//     },
//     {
//         id:'5',
//         title:sectionsContent.obj5.title,
//         link:sectionsContent.obj5.link,
//         content:[
//           sectionsContent.obj5.content,
//         ]
//     },
//     {
//         id:'6',
//         title:sectionsContent.obj6.title,
//         link:sectionsContent.obj6.link,
//         content:[
//           sectionsContent.obj6.content,
//         ]
//     },
//     {
//         id:'7',
//         title:sectionsContent.obj7.title,
//         link:sectionsContent.obj7.link,
//         content:[
//           sectionsContent.obj7.content,
//         ]
//     },
//     {
//         id:'8',
//         title:sectionsContent.obj8.title,
//         link:sectionsContent.obj8.link,
//         content:[
//           sectionsContent.obj8.content,
//         ]
//     },
//     {
//         id:'9',
//         title:sectionsContent.obj9.title,
//         link:sectionsContent.obj9.link,
//         content:[
//           sectionsContent.obj9.content,
//         ]
//     },
//     // {
//     //     id:'10',
//     //     title:sectionsContent.obj10.title,
//     //     link:sectionsContent.obj10.link,
//     //     content:[
//     //       sectionsContent.obj10.content,
//     //     ]
//     // },
//     // {
//     //     id:'11',
//     //     title:sectionsContent.obj11.title,
//     //     link:sectionsContent.obj11.link,
//     //     content:[
//     //       sectionsContent.obj11.content,
//     //     ]
//     // },
//     // {
//     //     id:'12',
//     //     title:sectionsContent.obj12.title,
//     //     link:sectionsContent.obj12.link,
//     //     content:[
//     //       sectionsContent.obj12.content,
//     //     ]
//     // },
//     // {
//     //     id:'13',
//     //     title:sectionsContent.obj13.title,
//     //     link:sectionsContent.obj13.link,
//     //     content:[
//     //       sectionsContent.obj13.content,
//     //     ]
//     // },
//     // {
//     //     id:'14',
//     //     title:sectionsContent.obj14.title,
//     //     link:sectionsContent.obj14.link,
//     //     content:[
//     //       sectionsContent.obj14.content,
//     //     ]
//     // },
//     // {
//     //     id:'15',
//     //     title:sectionsContent.obj15.title,
//     //     link:sectionsContent.obj15.link,
//     //     content:[
//     //       sectionsContent.obj15.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
    
// ]

//   return (
//    <>
//    <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
//   <meta property="og:title" content={seoData.title} />
//   <meta property="og:description" content={seoData.description} />
//   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//   <meta property="og:type" content="article" />
//   <meta property="og:site_name" content="Learn Math Class" />
  
//   <meta name="twitter:card" content="summary" />
//   <meta name="twitter:title" content={seoData.title} />
//   <meta name="twitter:description" content={seoData.description} />
  
//   <meta name="robots" content="index, follow" />
  
//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "WebPage",
//         "name": seoData.name,
//         "description": seoData.description,
//         "keywords": seoData.keywords,
//         "url": `https://www.learnmathclass.com${seoData.url}`,
//         "dateModified": new Date().toISOString(),
//         "inLanguage": "en-US",
//         "mainEntity": {
//           "@type": "Article",
//           "name": seoData.name,
//           "dateModified": new Date().toISOString(),
//           "author": {
//             "@type": "Organization",
//             "name": "Learn Math Class"
//           }
//         }
//       })
//     }}
//   />
// </Head>
//    {/* <GenericNavbar/> */}
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     <OperaSidebar 
//            side='right'
//            // topOffset='65px' 
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          /> 
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Complex Numbers</h1>
//    <br/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//     <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           //  "#f2f2f2"
//           textColor="#06357a"
//         />
//    <br/>
//    <br/>
//    <Sections sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../pages/pages.css'
import Head from 'next/head'


export async function getStaticProps(){

  const keyWords = [
    "complex numbers",
    "imaginary unit",
    "imaginary numbers",
    "complex conjugate",
    "complex plane",
    "Argand diagram",
    "modulus of complex number",
    "argument of complex number",
    "Euler's formula",
    "exponential form complex numbers",
    "trigonometric form complex numbers",
    "De Moivre's theorem",
    "roots of unity",
    "complex number operations",
    "fundamental theorem of algebra"
  ]

    const sectionsContent={

    obj1: {
  title: `The Imaginary Unit ($i$) and Pure Imaginary Numbers`,
  before: ``,
  content: `The real number system, despite its vastness, cannot solve every equation. The simple polynomial $x^2 + 1 = 0$ has no solution among real numbers because no real number squared produces a negative result. This limitation led mathematicians to define a new number: the [imaginary unit](!/complex-numbers/imaginary-numbers) $i$, where $i^2 = -1$.

From this single definition, an entire class of numbers emerges. Pure imaginary numbers take the form $bi$ where $b$ is real — examples include $3i$, $-7i$, and $\\frac{1}{2}i$. These numbers exist on their own axis, perpendicular to the real number line.

The powers of $i$ follow a cyclic pattern that repeats every four steps: $i^1 = i$, $i^2 = -1$, $i^3 = -i$, $i^4 = 1$, then back to $i$. This cycle provides a shortcut for computing any power of $i$ — simply divide the exponent by 4 and use the remainder.`,
  after: ``,
  link: '',
},

obj2: {
  title: `Algebraic Representation and the Complex Conjugate`,
  before: ``,
  content: `When we write $z = a + bi$, the symbols $a$ and $b$ represent ordinary real numbers. Mathematicians assigned names to these components: $Re(z) = a$ labels the horizontal contribution, while $Im(z) = b$ labels the vertical one. Students often stumble here — the quantity $Im(z)$ equals $b$ alone, not $bi$. That coefficient standing before $i$ is itself a member of $\\mathbb{R}$.

For any $z = a + bi$, we construct its [conjugate](!/complex-numbers/complex-conjugate) by flipping the sign in front of $b$: thus $\\bar{z} = a - bi$. What does this operation actually do? On the [complex plane](!/complex-numbers/geometric-representation), it mirrors the point through the horizontal axis. Studying this picture makes the abstract definition concrete — the conjugate sits at equal distance from the real axis, but on the opposite side.

Why does this matter? When $z$ meets $\\bar{z}$ through multiplication, something special occurs: $z \\cdot \\bar{z} = a^2 + b^2$, a value guaranteed to be real and non-negative. From here, two tests emerge for classification: if $z = \\bar{z}$, the number must be real; if $\\bar{z} = -z$, it must be pure imaginary.

The conjugate operation carries deep significance throughout complex mathematics. It enables division by eliminating imaginary numbers from denominators. It connects directly to the modulus through the identity $|z|^2 = z \\cdot \\bar{z}$. It preserves arithmetic structure: the conjugate of a sum equals the sum of conjugates, and the conjugate of a product equals the product of conjugates. These properties make the conjugate indispensable for proofs, simplifications, and computations across every branch of complex analysis. A [dedicated section](!/complex-numbers/complex-conjugate) explores the conjugate in full detail — its properties, its geometric meaning, and its applications to solving equations and simplifying expressions.`,
  after: ``,
  link: '',
},
  
    obj3: {
  title: `Arithmetic Operations: Calculating in $\\mathbb{C}$`,
  before: ``,
  content: `The four basic operations extend naturally from real numbers into the complex field, though each carries its own character. Two complex numbers are considered equal only when both their real parts match and their imaginary parts match — the equation $a + bi = c + di$ demands $a = c$ and $b = d$ simultaneously.

[Addition and subtraction](!/complex-numbers/operations) work exactly as intuition suggests: combine the real components together, combine the imaginary components together. Given $z_1 = 3 + 2i$ and $z_2 = 1 - 5i$, their sum becomes $(3 + 1) + (2 - 5)i = 4 - 3i$. No new techniques required — just careful bookkeeping of like terms.

[Multiplication](!/complex-numbers/operations) demands more attention. We apply the distributive property as with any binomial product, but one crucial substitution changes everything: wherever $i^2$ appears, we replace it with $-1$. The product $(2 + 3i)(4 - i)$ expands to $8 - 2i + 12i - 3i^2$, and since $i^2 = -1$, this simplifies to $8 + 10i + 3 = 11 + 10i$.

[Division](!/complex-numbers/operations) presents the only genuine challenge. A complex number in the denominator violates standard mathematical convention — we need real denominators for final answers. The solution employs the [conjugate](!/complex-numbers/complex-conjugate): multiply both numerator and denominator by the conjugate of the denominator. This works because $z \\cdot \\bar{z}$ always produces a real number. The fraction $\\frac{3 + 2i}{1 - 4i}$ transforms through multiplication by $\\frac{1 + 4i}{1 + 4i}$, converting the denominator to the real value $1 + 16 = 17$ and allowing us to express the result in standard $a + bi$ form.`,
  after: ``,
  link: '',
},

    obj4: {
  title: `Geometric Representation: The Complex Plane`,
  before: ``,
  content: `Numbers gain new meaning when we can see them. Every complex number $z = a + bi$ corresponds to a unique point $(a, b)$ on a two-dimensional plane. The horizontal axis carries the real numbers, the vertical axis carries the pure imaginary numbers, and every other complex number occupies the space between. This visualization, called the [complex plane](!/complex-numbers/geometric-representation) or Argand diagram, transforms abstract algebra into concrete geometry.

The placement of familiar numbers becomes immediate: real numbers like $3$ or $-2$ sit directly on the horizontal axis, pure imaginary numbers like $4i$ or $-i$ sit on the vertical axis, and the origin represents zero — the only number belonging to both categories simultaneously. A number like $3 + 2i$ appears at the point three units right and two units up from the origin.

This geometric perspective reveals structure invisible in pure algebra. The [conjugate](!/complex-numbers/complex-conjugate) $\\bar{z}$ appears as a reflection across the real axis. Addition of complex numbers follows the parallelogram rule familiar from vector mathematics. The [modulus](!/complex-numbers/absolute-value) $|z| = \\sqrt{a^2 + b^2}$ measures the straight-line distance from the origin to the point — a direct application of the Pythagorean theorem.

One fundamental difference separates $\\mathbb{C}$ from $\\mathbb{R}$: complex numbers cannot be ordered. We cannot say $3 + 2i$ is greater than $1 + 5i$ in any meaningful way. The real line has direction — numbers increase as we move right — but the complex plane extends in all directions equally. Only the modulus provides a sense of size, measuring how far each number lies from the origin.

The [Triangle Inequality](!/complex-numbers/absolute-value) governs how distances combine: $|z_1 + z_2| \\leq |z_1| + |z_2|$. Geometrically, this says the direct path between two points never exceeds the detour through the origin. This inequality appears constantly in analysis and provides essential bounds for estimation and proof.`,
  after: ``,
  link: '',
},

    obj5: {
  title: `The Mathematical Theory: Complex Numbers as a Field`,
  before: ``,
  content: `Mathematics demands rigor beyond intuition. Before accepting $\\mathbb{C}$ as a legitimate number system, we must verify that it satisfies the structural requirements of a [mathematical field](!/complex-numbers/properties-and-fields). A field is a set equipped with addition and multiplication operations that obey eleven specific axioms — the same rules that govern the rational and real numbers.

The verification proceeds systematically. Addition in $\\mathbb{C}$ is commutative: $z_1 + z_2 = z_2 + z_1$ for any pair of complex numbers. It is also associative: $(z_1 + z_2) + z_3 = z_1 + (z_2 + z_3)$. An additive identity exists — the number $0 + 0i$ satisfies $z + 0 = z$ for every $z$. Every complex number possesses an additive inverse: the negative $-z = -a - bi$ fulfills $z + (-z) = 0$.

Multiplication follows parallel rules. The operation is commutative and associative. The multiplicative identity $1 + 0i$ satisfies $z \\cdot 1 = z$. Every nonzero complex number has a multiplicative inverse $z^{-1}$ such that $z \\cdot z^{-1} = 1$. The formula for this inverse employs the [conjugate](!/complex-numbers/complex-conjugate): $z^{-1} = \\frac{\\bar{z}}{|z|^2} = \\frac{a - bi}{a^2 + b^2}$.

The distributive law bridges addition and multiplication: $z_1 \\cdot (z_2 + z_3) = z_1 \\cdot z_2 + z_1 \\cdot z_3$. With all eleven axioms confirmed, $\\mathbb{C}$ earns its status as a field — an algebraic structure where arithmetic behaves predictably and division by any nonzero element remains possible.

Yet $\\mathbb{C}$ differs from $\\mathbb{R}$ in one critical respect: it lacks order. No definition of "less than" or "greater than" extends consistently to complex numbers. We cannot arrange them on a line from smallest to largest. The complex field trades this linear ordering for something arguably more powerful — algebraic completeness, where every polynomial equation finds its solutions.`,
  after: ``,
  link: '',
},

    obj6: {
  title: `Trigonometric Representation: Radius and Argument`,
  before: ``,
  content: `The algebraic form $z = a + bi$ serves well for addition and subtraction, but multiplication and powers become unwieldy as expressions grow complex. A different representation emerges from the [geometric perspective](!/complex-numbers/geometric-representation): instead of describing where a point lies using horizontal and vertical coordinates, we specify how far it sits from the origin and what angle it makes with the positive real axis.

The distance from the origin is the [modulus](!/complex-numbers/absolute-value) $r = |z| = \\sqrt{a^2 + b^2}$, computed through the Pythagorean theorem. The angle $\\theta$, called the argument and written $\\arg(z)$, measures the counterclockwise rotation from the positive real axis to the line connecting the origin to $z$. Together, these two values determine the number completely.

The connection between forms follows from basic trigonometry. If a point lies at distance $r$ and angle $\\theta$, its horizontal coordinate equals $r\\cos\\theta$ and its vertical coordinate equals $r\\sin\\theta$. Thus $z = r\\cos\\theta + ir\\sin\\theta$, which factors as $z = r(\\cos\\theta + i\\sin\\theta)$. Mathematicians abbreviate this as $z = r\\text{cis}\\theta$, where "cis" stands for "cosine plus i sine."

Converting from algebraic to [trigonometric form](!/complex-numbers/trigonometric-form) requires finding both $r$ and $\\theta$. The modulus comes directly from $r = \\sqrt{a^2 + b^2}$. The argument requires more care: while $\\tan\\theta = \\frac{b}{a}$ provides a starting point, the actual quadrant of $z$ determines whether adjustments are needed. A number in the second quadrant has a different argument than one in the fourth, even if both share the same tangent value.

Certain angles deserve memorization. Numbers on the positive real axis have argument $0°$. Pure positive imaginaries point straight up at $90°$. Negative reals aim backward at $180°$. Negative imaginaries point downward at $270°$ or equivalently $-90°$. Recognizing these special cases accelerates computation and builds geometric intuition for how arguments behave.

The true power of trigonometric form reveals itself in multiplication and division. When two numbers multiply, their moduli multiply and their arguments add: $z_1 \\cdot z_2 = r_1 r_2 \\text{cis}(\\theta_1 + \\theta_2)$. Division works inversely — moduli divide, arguments subtract. These elegant rules transform tedious algebraic expansion into simple arithmetic on lengths and angles.`,
  after: ``,
  link: '',
},

    obj7: {
  title: `Exponential Form and Euler's Formula`,
  before: ``,
  content: `The [trigonometric form](!/complex-numbers/trigonometric-form) $r\\text{cis}\\theta$ simplifies multiplication beautifully, but an even more elegant representation exists. In the eighteenth century, Leonhard Euler discovered a remarkable connection between exponential functions and trigonometry that would reshape mathematics forever: the identity $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$.

This equation appears almost magical at first glance. The left side involves raising a real number to an imaginary power — an operation with no obvious meaning. Yet when we extend the exponential function into the complex domain through its infinite series expansion, the formula emerges naturally. The real parts collect to form cosine, the imaginary parts assemble into sine, and the equality holds for every real angle $\\theta$.

From Euler's formula flows the [exponential form](!/complex-numbers/exponential-form) of a complex number: $z = re^{i\\theta}$, where $r$ is the modulus and $\\theta$ is the argument. This notation is mathematically equivalent to $r\\text{cis}\\theta$ but carries computational advantages. Standard exponent rules now apply directly to complex arithmetic. Multiplication becomes $z_1 \\cdot z_2 = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}$ — we simply multiply the coefficients and add the exponents. Division follows as $\\frac{z_1}{z_2} = \\frac{r_1}{r_2}e^{i(\\theta_1 - \\theta_2)}$.

Powers reduce to almost trivial calculation. Raising $z = re^{i\\theta}$ to the $n$-th power yields $z^n = r^n e^{in\\theta}$. No binomial expansion, no collecting terms, no tracking powers of $i$ — just raise the modulus to the power and multiply the argument by $n$. This efficiency becomes indispensable when computing high powers or extracting roots.

One specialization of Euler's formula achieves legendary status among mathematicians. Setting $\\theta = \\pi$ produces $e^{i\\pi} = \\cos\\pi + i\\sin\\pi = -1$, which rearranges to $e^{i\\pi} + 1 = 0$. This single equation — known as Euler's Identity — connects five of mathematics' most fundamental constants: $e$, $i$, $\\pi$, $1$, and $0$. It unites exponential growth, imaginary numbers, circular geometry, multiplicative identity, and additive identity into one compact statement, often celebrated as the most beautiful formula in all of mathematics.`,
  after: ``,
  link: '',
},

    obj8: {
  title: `De Moivre's Theorem and $n$-th Order Roots`,
  before: ``,
  content: `The [exponential form](!/complex-numbers/exponential-form) hints at a powerful pattern: raising $z = r\\text{cis}\\theta$ to the $n$-th power multiplies the argument by $n$ while raising the modulus to that power. Abraham de Moivre formalized this observation into the theorem bearing his name: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$ for any integer $n$. In compact notation, $(\\text{cis}\\theta)^n = \\text{cis}(n\\theta)$.

The practical formula extends to any complex number in [trigonometric form](!/complex-numbers/trigonometric-form): $z^n = r^n\\text{cis}(n\\theta)$. Computing $(1 + i)^{20}$ through algebraic expansion would require enormous effort, but [De Moivre's theorem](!/complex-numbers/demoivre-theorem) reduces it to routine calculation. First convert: $1 + i = \\sqrt{2}\\text{cis}(45°)$. Then apply the formula: $(\\sqrt{2})^{20}\\text{cis}(20 \\cdot 45°) = 1024\\text{cis}(900°) = 1024\\text{cis}(180°) = -1024$. What could have been pages of algebra becomes three lines.

The theorem's true depth emerges when we reverse direction and seek roots rather than powers. Given a complex number $w$, what values of $z$ satisfy $z^n = w$? The answer reveals geometric elegance: exactly $n$ distinct roots exist, and they distribute themselves evenly around a circle centered at the origin.

If $w = R\\text{cis}\\phi$, the $n$-th roots follow the formula $z_k = R^{1/n}\\text{cis}\\left(\\frac{\\phi + 360°k}{n}\\right)$ for $k = 0, 1, 2, \\ldots, n-1$. Each root shares the same modulus $R^{1/n}$, placing all of them on a circle of that radius. Their arguments differ by exactly $\\frac{360°}{n}$, spacing them uniformly like vertices of a regular polygon.

The roots of unity — solutions to $z^n = 1$ — deserve special attention. Since $1 = 1\\text{cis}(0°)$, the $n$-th roots of unity are $z_k = \\text{cis}\\left(\\frac{360°k}{n}\\right)$. For $n = 4$, the fourth roots of unity are $1$, $i$, $-1$, and $-i$, forming a square on the unit circle. For $n = 6$, we obtain a regular hexagon. These roots appear throughout mathematics: in Fourier analysis, in polynomial factorization, in signal processing, and in the study of symmetry. The primitive root $\\omega = \\text{cis}\\left(\\frac{360°}{n}\\right)$ generates all others as powers: $\\omega^0, \\omega^1, \\omega^2, \\ldots, \\omega^{n-1}$.`,
  after: ``,
  link: '',
},

    obj9: {
  title: `Complex Equations and Polynomial Theory`,
  before: ``,
  content: `The complex number system achieves what no smaller number system can: it provides a home for every polynomial root. This completeness, formalized in the Fundamental Theorem of Algebra, states that every non-constant polynomial with complex coefficients possesses at least one complex root. The immediate consequence transforms our understanding of polynomials: a polynomial of degree $n$ factors completely into exactly $n$ linear terms over $\\mathbb{C}$, meaning it has precisely $n$ roots when counted with multiplicity.

Consider the equation $x^4 + 1 = 0$, which has no real solutions since $x^4$ is always non-negative. In $\\mathbb{C}$, four distinct roots exist, evenly spaced around the unit circle at arguments $45°$, $135°$, $225°$, and $315°$. The [geometric representation](!/complex-numbers/geometric-representation) reveals their symmetric arrangement, while [De Moivre's theorem](!/complex-numbers/demoivre-theorem) provides the computational machinery to find them.

[Vieta's formulas](!/complex-numbers/equations-and-polynomials) establish a profound connection between a polynomial's roots and its coefficients. For a quadratic $z^2 + bz + c = 0$ with roots $z_1$ and $z_2$, the sum of roots equals $-b$ and the product equals $c$. These relationships extend to higher degrees: for a cubic, the sum of roots, the sum of pairwise products, and the product of all three roots each correspond to specific coefficients. This bridge between algebra and the structure of solutions enables problem-solving techniques unavailable through direct calculation.

Polynomials with real coefficients exhibit special behavior: their non-real roots always appear in [conjugate](!/complex-numbers/complex-conjugate) pairs. If $z_0$ satisfies a real polynomial, so does $\\bar{z_0}$. This symmetry explains why real quadratics either have two real roots or two complex conjugates — never one of each. The geometric interpretation places conjugate pairs as reflections across the real axis, preserving the polynomial's real character.

Certain equations showcase the interplay between conjugation and powers. The equation $z^n = \\bar{z}$ yields exactly $n + 2$ solutions: zero itself, plus $n + 1$ values distributed on the unit circle. Solving such equations requires translating into [trigonometric form](!/complex-numbers/trigonometric-form), applying the constraint that $r^n e^{in\\theta} = re^{-i\\theta}$, and extracting the permissible values of $r$ and $\\theta$. These techniques, combining algebraic manipulation with geometric insight, represent the full power of complex number theory applied to equation solving.`,
  after: ``,
  link: '',
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
  title: "The Evolution of Numbers: From Counting to Complexity",
  content: `
  Mathematics began with natural numbers ($\\mathbb{N}$) for counting, but as we attempted to solve more equations, we had to "expand the bag". We added whole numbers ($\\mathbb{Z}$) for negatives, rational numbers ($\\mathbb{Q}$) for quotients, and real numbers ($\\mathbb{R}$) for values like $\\sqrt{2}$. However, the "R-bag" failed to solve the equation $x^2 + 1 = 0$, leading to the birth of the Complex Numbers ($\\mathbb{C}$).
  `
}


  const faqQuestions = {
    obj1: {
      question: "What is the imaginary unit i?",
      answer: "The imaginary unit i is defined as the number whose square equals -1, written as i² = -1. It was introduced because no real number squared can produce a negative result, yet the equation x² + 1 = 0 requires such a solution."
    },
    obj2: {
      question: "What is the pattern of powers of i?",
      answer: "The powers of i follow a cyclic pattern that repeats every four steps: i¹ = i, i² = -1, i³ = -i, i⁴ = 1, then the cycle repeats. To find any power of i, divide the exponent by 4 and use the remainder to determine the result."
    },
    obj3: {
      question: "What is a complex conjugate?",
      answer: "For a complex number z = a + bi, its conjugate is z̄ = a - bi, obtained by flipping the sign of the imaginary part. Geometrically, the conjugate is a reflection of z across the real axis in the complex plane."
    },
    obj4: {
      question: "What happens when you multiply a complex number by its conjugate?",
      answer: "When a complex number z = a + bi is multiplied by its conjugate z̄ = a - bi, the result is always a real non-negative number: z · z̄ = a² + b². This equals the square of the modulus: |z|² = z · z̄."
    },
    obj5: {
      question: "How do you divide complex numbers?",
      answer: "To divide complex numbers, multiply both numerator and denominator by the conjugate of the denominator. This converts the denominator to a real number (since z · z̄ is always real), allowing you to express the result in standard a + bi form."
    },
    obj6: {
      question: "What is the complex plane?",
      answer: "The complex plane (also called the Argand diagram) is a two-dimensional representation where every complex number z = a + bi corresponds to the point (a, b). The horizontal axis represents real numbers and the vertical axis represents pure imaginary numbers."
    },
    obj7: {
      question: "Why can't complex numbers be ordered?",
      answer: "Complex numbers cannot be ordered because they exist in a two-dimensional plane rather than on a line. We cannot say one complex number is 'greater than' another in any consistent way. Only the modulus (distance from origin) provides a sense of size."
    },
    obj8: {
      question: "What is the trigonometric form of a complex number?",
      answer: "The trigonometric form expresses a complex number as z = r(cos θ + i sin θ) or z = r cis θ, where r is the modulus (distance from origin) and θ is the argument (angle from the positive real axis). This form simplifies multiplication and division."
    },
    obj9: {
      question: "What is Euler's formula?",
      answer: "Euler's formula states that e^(iθ) = cos θ + i sin θ, connecting exponential functions with trigonometry. This remarkable identity allows complex numbers to be written in exponential form as z = re^(iθ), making powers and roots much easier to compute."
    },
    obj10: {
      question: "What is Euler's Identity?",
      answer: "Euler's Identity is e^(iπ) + 1 = 0, obtained by setting θ = π in Euler's formula. It connects five fundamental mathematical constants (e, i, π, 1, and 0) in one equation and is often called the most beautiful formula in mathematics."
    },
    obj11: {
      question: "What is De Moivre's theorem?",
      answer: "De Moivre's theorem states that (cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ) for any integer n. For a complex number in trigonometric form, this means zⁿ = rⁿ cis(nθ), making it easy to compute high powers without algebraic expansion."
    },
    obj12: {
      question: "What is the Fundamental Theorem of Algebra?",
      answer: "The Fundamental Theorem of Algebra states that every non-constant polynomial with complex coefficients has at least one complex root. This means a polynomial of degree n has exactly n roots (counting multiplicity) in the complex numbers, making ℂ algebraically complete."
    }
  }


  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Complex Numbers",
      "description": "Learn complex numbers: imaginary unit, conjugates, complex plane, trigonometric and exponential forms, Euler's formula, De Moivre's theorem, and nth roots.",
      "url": "https://www.learnmathclass.com/complex-numbers",
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
        "name": "Complex Numbers"
      },
      "teaches": [
        "Definition and properties of the imaginary unit i",
        "Algebraic form z = a + bi and complex conjugates",
        "Arithmetic operations in the complex field",
        "Geometric representation on the complex plane",
        "Trigonometric and exponential forms of complex numbers",
        "Euler's formula and Euler's Identity",
        "De Moivre's theorem for powers and roots",
        "The Fundamental Theorem of Algebra"
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


   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
          seoData: {
        title: "Complex Numbers: Complete Guide to ℂ | Learn Math Class",
        description: "Learn complex numbers: imaginary unit, conjugates, complex plane, trigonometric and exponential forms, Euler's formula, De Moivre's theorem, and nth roots.",
        keywords: keyWords.join(", "),
        url: "/complex-numbers",
         name: "Complex Numbers"
      },
        
       }
    }
   }

export default function ComplexNumbersPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Complex Numbers</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
   showSecondaryNav={true}
         secondaryNavMode="children"  // or "siblings"
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
          textColor="#06357a"
        />
   <br/>
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   </>
  )
}