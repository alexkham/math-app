// const complexNumbersFormulasList = [

//   // ─── Category: Forms & Conversions (8 entries) ───

//   {
//     name: 'Algebraic Form',
//     category: 'Forms & Conversions',
//     formula: `$$z = a + bi$$`,
//     link: { label: 'Algebraic Form', url: '/complex-numbers/algebraic-form#1' },
//     fields: {
//       explanation: `The standard way of writing a complex number, as a sum of a real part $a$ and an imaginary part $b$ scaled by the imaginary unit $i$. Also called rectangular form or standard form. Every complex number has a unique algebraic form, and every pair of real numbers $(a, b)$ produces exactly one complex number this way.`,
//       conditions: `$a, b \\in \\mathbb{R}$ and $i^2 = -1$. When $b = 0$, $z$ is real. When $a = 0$ and $b \\neq 0$, $z$ is pure imaginary.`,
//       notation: `Some texts write $a + ib$ instead of $a + bi$; the order is conventional. The set of all complex numbers is denoted $\\mathbb{C}$.`,
//       related_formulas: `- [Trigonometric Form](!/complex-numbers/formulas#trigonometric_form)\n- [Exponential Form](!/complex-numbers/formulas#exponential_form)\n- [Real and Imaginary Parts](!/complex-numbers/formulas#real_and_imaginary_parts)\n- [Equality of Complex Numbers](!/complex-numbers/formulas#equality_of_complex_numbers)`,
//       related_definitions: `- [Complex Number](!/complex-numbers/definitions#complex_number)\n- [Algebraic Form](!/complex-numbers/definitions#algebraic_form)\n- [Real Part](!/complex-numbers/definitions#real_part)\n- [Imaginary Part](!/complex-numbers/definitions#imaginary_part)`
//     }
//   },
//   {
//     name: 'Trigonometric Form',
//     category: 'Forms & Conversions',
//     formula: `$$z = r(\\cos\\theta + i\\sin\\theta)$$`,
//     link: { label: 'Trigonometric Form', url: '/complex-numbers/trigonometric-form#7' },
//     fields: {
//       explanation: `Expresses a complex number using its distance $r$ from the origin and its angle $\\theta$ from the positive real axis. Also called polar form. Particularly useful for multiplication, division, and powers, where the geometric meaning becomes transparent.`,
//       conditions: `$r = |z| \\geq 0$ and $\\theta = \\arg(z)$. The argument is determined only up to multiples of $2\\pi$.`,
//       notation: `Often abbreviated $z = r\\,\\mathrm{cis}\\,\\theta$, where $\\mathrm{cis}\\,\\theta = \\cos\\theta + i\\sin\\theta$.`,
//       variants: `Using the principal argument:\n\n$$z = r(\\cos\\Theta + i\\sin\\Theta), \\quad \\Theta \\in (-\\pi, \\pi]$$`,
//       related_formulas: `- [Exponential Form](!/complex-numbers/formulas#exponential_form)\n- [Algebraic Form](!/complex-numbers/formulas#algebraic_form)\n- [Modulus](!/complex-numbers/formulas#modulus)\n- [Argument](!/complex-numbers/formulas#argument)\n- [Polar to Rectangular Conversion](!/complex-numbers/formulas#polar_to_rectangular_conversion)`,
//       related_definitions: `- [Trigonometric Form](!/complex-numbers/definitions#trigonometric_form)\n- [Modulus](!/complex-numbers/definitions#modulus)\n- [Argument](!/complex-numbers/definitions#argument)`
//     }
//   },
//   {
//     name: 'Exponential Form',
//     category: 'Forms & Conversions',
//     formula: `$$z = re^{i\\theta}$$`,
//     link: { label: 'Exponential Form', url: '/complex-numbers/exponential-form#4' },
//     fields: {
//       explanation: [
//         `Compact representation derived from Euler’s formula $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$. Encodes modulus and argument in a single exponential expression. Multiplication, division, and powers reduce to elementary exponent rules.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: 'r, θ', operation: 'apply Euler: e^{iθ} = cos θ + i sin θ' },
//             { value: 'r·e^{iθ}', operation: '' }
//           ],
//           label: 'Exponential Form'
//         }
//       ],
//       conditions: `$r = |z| \\geq 0$ and $\\theta = \\arg(z)$. For $z = 0$, the argument is undefined and $r = 0$.`,
//       related_formulas: `- [Trigonometric Form](!/complex-numbers/formulas#trigonometric_form)\n- [Euler’s Formula](!/complex-numbers/formulas#eulers_formula)\n- [Multiplication in Polar Form](!/complex-numbers/formulas#multiplication_in_polar_form)\n- [De Moivre’s Theorem](!/complex-numbers/formulas#de_moivres_theorem)`,
//       related_definitions: `- [Exponential Form](!/complex-numbers/definitions#exponential_form)\n- [Modulus](!/complex-numbers/definitions#modulus)\n- [Argument](!/complex-numbers/definitions#argument)`
//     }
//   },
//   {
//     name: 'Modulus',
//     category: 'Forms & Conversions',
//     formula: `$$|z| = \\sqrt{a^2 + b^2}$$`,
//     link: { label: 'Absolute Value', url: '/complex-numbers/absolute-value#1' },
//     fields: {
//       explanation: `For $z = a + bi$, the modulus measures the straight-line distance from the origin to $z$ in the complex plane. Direct application of the Pythagorean theorem to the right triangle with legs $|a|$ and $|b|$.`,
//       derivation: [
//         `The point $(a, b)$ forms a right triangle with the origin. The hypotenuse is the distance to $z$.`,
//         {
//           component: 'MathDerivation',
//           items: [
//             { expr: 'horizontal leg $= |a|$, vertical leg $= |b|$', operation: 'Pythagorean theorem' },
//             { expr: '$|z|^2 = a^2 + b^2$', operation: 'take square root' },
//             { expr: '$|z| = \\sqrt{a^2 + b^2}$', tag: 'result' }
//           ]
//         }
//       ],
//       conditions: `$|z| \\geq 0$, with equality only when $z = 0$.`,
//       variants: `In terms of the conjugate:\n\n$$|z| = \\sqrt{z \\cdot \\overline{z}}$$`,
//       related_formulas: `- [Modulus Squared](!/complex-numbers/formulas#modulus_squared)\n- [Modulus of a Product](!/complex-numbers/formulas#modulus_of_a_product)\n- [Triangle Inequality](!/complex-numbers/formulas#triangle_inequality)\n- [Conjugate Times Number](!/complex-numbers/formulas#conjugate_times_number)`,
//       related_definitions: `- [Modulus](!/complex-numbers/definitions#modulus)\n- [Complex Plane](!/complex-numbers/definitions#complex_plane)`
//     }
//   },
//   {
//     name: 'Argument',
//     category: 'Forms & Conversions',
//     formula: `$$\\arg(z) = \\theta \\quad \\text{where} \\quad \\cos\\theta = \\frac{a}{|z|}, \\;\\; \\sin\\theta = \\frac{b}{|z|}$$`,
//     link: { label: 'Trigonometric Form', url: '/complex-numbers/trigonometric-form#3' },
//     fields: {
//       explanation: `The argument is the angle from the positive real axis to the line segment from the origin to $z$, measured counterclockwise. Determined only up to multiples of $2\\pi$ — the principal argument $\\mathrm{Arg}(z) \\in (-\\pi, \\pi]$ provides the canonical choice.`,
//       conditions: `Undefined when $z = 0$. For $z \\neq 0$, infinitely many valid arguments exist, all differing by multiples of $2\\pi$.`,
//       variants: `Two-argument arctangent (handles all four quadrants):\n\n$$\\theta = \\mathrm{atan2}(b, a)$$\n\nQuadrant-adjusted arctangent for $a \\neq 0$:\n\n$$\\theta = \\begin{cases} \\arctan(b/a) & a > 0 \\\\ \\arctan(b/a) + \\pi & a < 0,\\, b \\geq 0 \\\\ \\arctan(b/a) - \\pi & a < 0,\\, b < 0 \\end{cases}$$`,
//       notation: `$\\arg(z)$ denotes any valid argument; $\\mathrm{Arg}(z)$ denotes the principal argument.`,
//       related_formulas: `- [Argument of a Product](!/complex-numbers/formulas#argument_of_a_product)\n- [Argument of a Quotient](!/complex-numbers/formulas#argument_of_a_quotient)\n- [Argument of a Power](!/complex-numbers/formulas#argument_of_a_power)`,
//       related_definitions: `- [Argument](!/complex-numbers/definitions#argument)\n- [Trigonometric Form](!/complex-numbers/definitions#trigonometric_form)`
//     }
//   },
//   {
//     name: 'Polar to Rectangular Conversion',
//     category: 'Forms & Conversions',
//     formula: `$$a = r\\cos\\theta, \\qquad b = r\\sin\\theta$$`,
//     link: { label: 'Exponential Form', url: '/complex-numbers/exponential-form#5' },
//     fields: {
//       explanation: `Recovers the rectangular components $a$ and $b$ from polar parameters $r$ and $\\theta$. Direct trigonometric projection: the horizontal leg of the right triangle is $r\\cos\\theta$, the vertical leg is $r\\sin\\theta$.`,
//       conditions: `Valid for any $r \\geq 0$ and any real $\\theta$. When $r = 0$, both components are zero regardless of $\\theta$.`,
//       variants: `Combined into a single complex number:\n\n$$z = r\\cos\\theta + i \\cdot r\\sin\\theta = r(\\cos\\theta + i\\sin\\theta)$$`,
//       related_formulas: `- [Trigonometric Form](!/complex-numbers/formulas#trigonometric_form)\n- [Algebraic Form](!/complex-numbers/formulas#algebraic_form)\n- [Modulus](!/complex-numbers/formulas#modulus)`,
//       related_definitions: `- [Trigonometric Form](!/complex-numbers/definitions#trigonometric_form)\n- [Real Part](!/complex-numbers/definitions#real_part)\n- [Imaginary Part](!/complex-numbers/definitions#imaginary_part)`
//     }
//   },
//   {
//     name: 'Real and Imaginary Parts',
//     category: 'Forms & Conversions',
//     formula: `$$\\operatorname{Re}(z) = a, \\qquad \\operatorname{Im}(z) = b \\quad \\text{for} \\;\\; z = a + bi$$`,
//     link: { label: 'Algebraic Form', url: '/complex-numbers/algebraic-form#21' },
//     fields: {
//       explanation: `Extraction functions returning the real components of a complex number. Despite its name, $\\operatorname{Im}(z)$ is itself a real number — it is the coefficient of $i$, not the term $bi$.`,
//       conditions: `Both $\\operatorname{Re}$ and $\\operatorname{Im}$ are functions $\\mathbb{C} \\to \\mathbb{R}$.`,
//       variants: `Via the conjugate:\n\n$$\\operatorname{Re}(z) = \\frac{z + \\overline{z}}{2}, \\qquad \\operatorname{Im}(z) = \\frac{z - \\overline{z}}{2i}$$\n\nFrom polar form:\n\n$$\\operatorname{Re}(z) = |z|\\cos\\theta, \\qquad \\operatorname{Im}(z) = |z|\\sin\\theta$$`,
//       related_formulas: `- [Algebraic Form](!/complex-numbers/formulas#algebraic_form)\n- [Polar to Rectangular Conversion](!/complex-numbers/formulas#polar_to_rectangular_conversion)`,
//       related_definitions: `- [Real Part](!/complex-numbers/definitions#real_part)\n- [Imaginary Part](!/complex-numbers/definitions#imaginary_part)`
//     }
//   },
//   {
//     name: 'Equality of Complex Numbers',
//     category: 'Forms & Conversions',
//     formula: `$$a + bi = c + di \\iff a = c \\;\\text{ and }\\; b = d$$`,
//     link: { label: 'Algebraic Form', url: '/complex-numbers/algebraic-form#3' },
//     fields: {
//       explanation: `Two complex numbers are equal if and only if both their real parts and their imaginary parts match. A single complex equation thus splits into two independent real equations — a powerful technique for solving complex equations by separation into real and imaginary parts.`,
//       conditions: `$a, b, c, d \\in \\mathbb{R}$.`,
//       related_formulas: `- [Algebraic Form](!/complex-numbers/formulas#algebraic_form)\n- [Real and Imaginary Parts](!/complex-numbers/formulas#real_and_imaginary_parts)`,
//       related_definitions: `- [Complex Number](!/complex-numbers/definitions#complex_number)\n- [Algebraic Form](!/complex-numbers/definitions#algebraic_form)`
//     }
//   },

//   // ─── Category: Operations (6 entries) ───

//   {
//     name: 'Addition',
//     category: 'Operations',
//     formula: `$$(a + bi) + (c + di) = (a + c) + (b + d)i$$`,
//     link: { label: 'Operations', url: '/complex-numbers/operations#1' },
//     fields: {
//       explanation: `Add real parts to real parts and imaginary parts to imaginary parts. The two components are independent — no interaction occurs between them. Geometrically, addition follows the parallelogram rule: place the two complex numbers as vectors from the origin and the sum is the diagonal.`,
//       conditions: `$a, b, c, d \\in \\mathbb{R}$. Addition is commutative and associative.`,
//       related_formulas: `- [Subtraction](!/complex-numbers/formulas#subtraction)\n- [Triangle Inequality](!/complex-numbers/formulas#triangle_inequality)`,
//       related_definitions: `- [Complex Number](!/complex-numbers/definitions#complex_number)\n- [Algebraic Form](!/complex-numbers/definitions#algebraic_form)`
//     }
//   },
//   {
//     name: 'Subtraction',
//     category: 'Operations',
//     formula: `$$(a + bi) - (c + di) = (a - c) + (b - d)i$$`,
//     link: { label: 'Operations', url: '/complex-numbers/operations#2' },
//     fields: {
//       explanation: `Subtract real parts and imaginary parts independently. Equivalently, $z_1 - z_2 = z_1 + (-z_2)$ where $-z_2$ is the additive inverse. Geometrically, $z_1 - z_2$ is the vector from $z_2$ to $z_1$, and its modulus $|z_1 - z_2|$ is the distance between the two points in the complex plane.`,
//       conditions: `$a, b, c, d \\in \\mathbb{R}$. The negative sign must distribute to both real and imaginary parts of the subtracted number.`,
//       related_formulas: `- [Addition](!/complex-numbers/formulas#addition)\n- [Additive Inverse](!/complex-numbers/formulas#additive_inverse)`,
//       related_definitions: `- [Additive Inverse](!/complex-numbers/definitions#additive_inverse)`
//     }
//   },
//   {
//     name: 'Multiplication',
//     category: 'Operations',
//     formula: `$$(a + bi)(c + di) = (ac - bd) + (ad + bc)i$$`,
//     link: { label: 'Operations', url: '/complex-numbers/operations#3' },
//     fields: {
//       explanation: `Apply the distributive property (FOIL), then collapse $i^2 = -1$. The four cross-terms collect into a real part $ac - bd$ and an imaginary part $ad + bc$.`,
//       derivation: [
//         `Expand using the distributive law and substitute $i^2 = -1$.`,
//         {
//           component: 'MathDerivation',
//           items: [
//             { expr: '$(a + bi)(c + di)$', operation: 'distribute' },
//             { expr: '$ac + adi + bci + bdi^2$', operation: 'substitute $i^2 = -1$' },
//             { expr: '$ac + adi + bci - bd$', operation: 'collect real and imaginary parts' },
//             { expr: '$(ac - bd) + (ad + bc)i$', tag: 'result' }
//           ]
//         }
//       ],
//       conditions: `$a, b, c, d \\in \\mathbb{R}$. Multiplication is commutative and associative.`,
//       related_formulas: `- [Multiplication in Polar Form](!/complex-numbers/formulas#multiplication_in_polar_form)\n- [Modulus of a Product](!/complex-numbers/formulas#modulus_of_a_product)\n- [Argument of a Product](!/complex-numbers/formulas#argument_of_a_product)`,
//       related_definitions: `- [Complex Number](!/complex-numbers/definitions#complex_number)`
//     }
//   },
//   {
//     name: 'Division',
//     category: 'Operations',
//     formula: `$$\\frac{a + bi}{c + di} = \\frac{(ac + bd) + (bc - ad)i}{c^2 + d^2}$$`,
//     link: { label: 'Operations', url: '/complex-numbers/operations#4' },
//     fields: {
//       explanation: `Multiply numerator and denominator by the conjugate of the denominator. The denominator becomes the real number $|z_2|^2 = c^2 + d^2$, converting the quotient to standard algebraic form. This technique is sometimes called rationalizing the denominator.`,
//       derivation: [
//         `Multiply top and bottom by $\\overline{c + di} = c - di$.`,
//         {
//           component: 'MathDerivation',
//           items: [
//             { expr: '$\\frac{a + bi}{c + di} \\cdot \\frac{c - di}{c - di}$', operation: 'expand' },
//             { expr: '$\\frac{(a + bi)(c - di)}{(c + di)(c - di)}$', operation: 'compute denominator' },
//             { expr: '$\\frac{(a + bi)(c - di)}{c^2 + d^2}$', operation: 'expand numerator' },
//             { expr: '$\\frac{(ac + bd) + (bc - ad)i}{c^2 + d^2}$', tag: 'result' }
//           ]
//         }
//       ],
//       conditions: `$c + di \\neq 0$, equivalently $c^2 + d^2 > 0$.`,
//       variants: `Compact form using the conjugate and modulus:\n\n$$\\frac{z_1}{z_2} = \\frac{z_1 \\cdot \\overline{z_2}}{|z_2|^2}$$`,
//       related_formulas: `- [Division in Polar Form](!/complex-numbers/formulas#division_in_polar_form)\n- [Multiplicative Inverse](!/complex-numbers/formulas#multiplicative_inverse)\n- [Conjugate Times Number](!/complex-numbers/formulas#conjugate_times_number)`,
//       related_definitions: `- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate)\n- [Multiplicative Inverse](!/complex-numbers/definitions#multiplicative_inverse)`
//     }
//   },
//   {
//     name: 'Multiplication in Polar Form',
//     category: 'Operations',
//     formula: `$$z_1 \\cdot z_2 = r_1 r_2 \\bigl[\\cos(\\theta_1 + \\theta_2) + i\\sin(\\theta_1 + \\theta_2)\\bigr]$$`,
//     link: { label: 'Trigonometric Form', url: '/complex-numbers/trigonometric-form#10' },
//     fields: {
//       explanation: `Multiply the moduli and add the arguments. Geometrically, multiplication by $z_2$ scales by $|z_2|$ and rotates counterclockwise by $\\arg(z_2)$. Dramatically simpler than rectangular multiplication when both factors are in polar form.`,
//       conditions: `$z_1 = r_1(\\cos\\theta_1 + i\\sin\\theta_1)$ and $z_2 = r_2(\\cos\\theta_2 + i\\sin\\theta_2)$ with $r_1, r_2 \\geq 0$.`,
//       variants: `Exponential form:\n\n$$z_1 \\cdot z_2 = r_1 r_2 \\, e^{i(\\theta_1 + \\theta_2)}$$\n\ncis notation:\n\n$$z_1 \\cdot z_2 = r_1 r_2 \\,\\mathrm{cis}(\\theta_1 + \\theta_2)$$`,
//       related_formulas: `- [Multiplication](!/complex-numbers/formulas#multiplication)\n- [Division in Polar Form](!/complex-numbers/formulas#division_in_polar_form)\n- [Modulus of a Product](!/complex-numbers/formulas#modulus_of_a_product)\n- [Argument of a Product](!/complex-numbers/formulas#argument_of_a_product)\n- [De Moivre’s Theorem](!/complex-numbers/formulas#de_moivres_theorem)`,
//       related_definitions: `- [Trigonometric Form](!/complex-numbers/definitions#trigonometric_form)\n- [Exponential Form](!/complex-numbers/definitions#exponential_form)`
//     }
//   },
//   {
//     name: 'Division in Polar Form',
//     category: 'Operations',
//     formula: `$$\\frac{z_1}{z_2} = \\frac{r_1}{r_2} \\bigl[\\cos(\\theta_1 - \\theta_2) + i\\sin(\\theta_1 - \\theta_2)\\bigr]$$`,
//     link: { label: 'Trigonometric Form', url: '/complex-numbers/trigonometric-form#10' },
//     fields: {
//       explanation: `Divide the moduli and subtract the arguments. Geometrically, division by $z_2$ shrinks by $1/|z_2|$ and rotates clockwise by $\\arg(z_2)$. The inverse of polar multiplication.`,
//       conditions: `$z_2 \\neq 0$ (equivalently $r_2 > 0$).`,
//       variants: `Exponential form:\n\n$$\\frac{z_1}{z_2} = \\frac{r_1}{r_2} \\, e^{i(\\theta_1 - \\theta_2)}$$\n\ncis notation:\n\n$$\\frac{z_1}{z_2} = \\frac{r_1}{r_2} \\,\\mathrm{cis}(\\theta_1 - \\theta_2)$$`,
//       related_formulas: `- [Division](!/complex-numbers/formulas#division)\n- [Multiplication in Polar Form](!/complex-numbers/formulas#multiplication_in_polar_form)\n- [Modulus of a Quotient](!/complex-numbers/formulas#modulus_of_a_quotient)\n- [Argument of a Quotient](!/complex-numbers/formulas#argument_of_a_quotient)`,
//       related_definitions: `- [Trigonometric Form](!/complex-numbers/definitions#trigonometric_form)\n- [Exponential Form](!/complex-numbers/definitions#exponential_form)`
//     }
//   },

//   // ─── Category: Conjugate (9 entries) ───

//   {
//     name: 'Complex Conjugate',
//     category: 'Conjugate',
//     formula: `$$\\overline{z} = a - bi \\quad \\text{for} \\;\\; z = a + bi$$`,
//     link: { label: 'Complex Conjugate', url: '/complex-numbers/complex-conjugate#1' },
//     fields: {
//       explanation: `Reflects $z$ across the real axis in the complex plane. The real part stays unchanged; the sign of the imaginary part flips. Conjugation is the most important auxiliary operation in complex arithmetic — it underlies division, modulus computation, and classification of real and pure imaginary numbers.`,
//       conditions: `Defined for every $z \\in \\mathbb{C}$.`,
//       notation: `Written $\\overline{z}$ in pure mathematics, $z^*$ in physics and engineering. Both denote the same operation.`,
//       related_formulas: `- [Conjugate of a Conjugate](!/complex-numbers/formulas#conjugate_of_a_conjugate)\n- [Conjugate Times Number](!/complex-numbers/formulas#conjugate_times_number)\n- [Modulus of Conjugate](!/complex-numbers/formulas#modulus_of_conjugate)\n- [Real Number Test](!/complex-numbers/formulas#real_number_test)\n- [Pure Imaginary Test](!/complex-numbers/formulas#pure_imaginary_test)`,
//       related_definitions: `- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate)`
//     }
//   },
//   {
//     name: 'Conjugate of a Conjugate',
//     category: 'Conjugate',
//     formula: `$$\\overline{\\overline{z}} = z$$`,
//     link: { label: 'Complex Conjugate', url: '/complex-numbers/complex-conjugate#3' },
//     fields: {
//       explanation: `Conjugation is an involution: applying it twice returns the original number. Geometrically, reflecting twice across the same axis brings every point back to its starting position.`,
//       derivation: [
//         `Apply the definition twice.`,
//         {
//           component: 'MathDerivation',
//           items: [
//             { expr: '$z = a + bi$', operation: 'conjugate' },
//             { expr: '$\\overline{z} = a - bi$', operation: 'conjugate again' },
//             { expr: '$\\overline{\\overline{z}} = a - (-b)i = a + bi = z$', tag: 'result' }
//           ]
//         }
//       ],
//       related_formulas: `- [Complex Conjugate](!/complex-numbers/formulas#complex_conjugate)`,
//       related_definitions: `- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate)`
//     }
//   },
//   {
//     name: 'Conjugate of a Sum',
//     category: 'Conjugate',
//     formula: `$$\\overline{z_1 + z_2} = \\overline{z_1} + \\overline{z_2}$$`,
//     link: { label: 'Complex Conjugate', url: '/complex-numbers/complex-conjugate#3' },
//     fields: {
//       explanation: `Conjugation distributes over addition. The conjugate of a sum equals the sum of the conjugates. Allows term-by-term conjugation of expressions involving complex sums.`,
//       conditions: `Holds for any $z_1, z_2 \\in \\mathbb{C}$.`,
//       variants: `Same property for differences:\n\n$$\\overline{z_1 - z_2} = \\overline{z_1} - \\overline{z_2}$$`,
//       related_formulas: `- [Conjugate of a Product](!/complex-numbers/formulas#conjugate_of_a_product)\n- [Conjugate of a Quotient](!/complex-numbers/formulas#conjugate_of_a_quotient)`,
//       related_definitions: `- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate)`
//     }
//   },
//   {
//     name: 'Conjugate of a Product',
//     category: 'Conjugate',
//     formula: `$$\\overline{z_1 \\cdot z_2} = \\overline{z_1} \\cdot \\overline{z_2}$$`,
//     link: { label: 'Complex Conjugate', url: '/complex-numbers/complex-conjugate#3' },
//     fields: {
//       explanation: `Conjugation distributes over multiplication. Allows conjugating each factor independently before multiplying — often simpler than conjugating the full product.`,
//       conditions: `Holds for any $z_1, z_2 \\in \\mathbb{C}$.`,
//       related_formulas: `- [Conjugate of a Sum](!/complex-numbers/formulas#conjugate_of_a_sum)\n- [Conjugate of a Quotient](!/complex-numbers/formulas#conjugate_of_a_quotient)\n- [Conjugate of a Power](!/complex-numbers/formulas#conjugate_of_a_power)`,
//       related_definitions: `- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate)`
//     }
//   },
//   {
//     name: 'Conjugate of a Quotient',
//     category: 'Conjugate',
//     formula: `$$\\overline{\\left(\\frac{z_1}{z_2}\\right)} = \\frac{\\overline{z_1}}{\\overline{z_2}}$$`,
//     link: { label: 'Complex Conjugate', url: '/complex-numbers/complex-conjugate#3' },
//     fields: {
//       explanation: `Conjugation distributes over division. Conjugate the numerator and denominator separately.`,
//       conditions: `$z_2 \\neq 0$.`,
//       related_formulas: `- [Conjugate of a Product](!/complex-numbers/formulas#conjugate_of_a_product)\n- [Conjugate of a Sum](!/complex-numbers/formulas#conjugate_of_a_sum)`,
//       related_definitions: `- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate)`
//     }
//   },
//   {
//     name: 'Conjugate of a Power',
//     category: 'Conjugate',
//     formula: `$$\\overline{z^n} = (\\overline{z})^n$$`,
//     link: { label: 'Complex Conjugate', url: '/complex-numbers/complex-conjugate#3' },
//     fields: {
//       explanation: `Conjugation passes through integer powers. Follows from repeated application of the product rule for positive integers and from the quotient rule for negative integers.`,
//       conditions: `$n \\in \\mathbb{Z}$. For negative $n$, additionally require $z \\neq 0$.`,
//       related_formulas: `- [Conjugate of a Product](!/complex-numbers/formulas#conjugate_of_a_product)\n- [De Moivre’s Theorem](!/complex-numbers/formulas#de_moivres_theorem)`,
//       related_definitions: `- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate)`
//     }
//   },
//   {
//     name: 'Conjugate Times Number',
//     category: 'Conjugate',
//     formula: `$$z \\cdot \\overline{z} = |z|^2 = a^2 + b^2$$`,
//     link: { label: 'Absolute Value', url: '/complex-numbers/absolute-value#3' },
//     fields: {
//       explanation: `The product of a complex number with its conjugate is always the real, non-negative quantity $|z|^2$. The cornerstone identity of complex arithmetic — it makes division by complex numbers possible by converting complex denominators into real ones.`,
//       derivation: [
//         `Direct expansion.`,
//         {
//           component: 'MathDerivation',
//           items: [
//             { expr: '$(a + bi)(a - bi)$', operation: 'distribute' },
//             { expr: '$a^2 - abi + abi - b^2 i^2$', operation: 'cancel cross terms, $i^2 = -1$' },
//             { expr: '$a^2 + b^2$', tag: 'result' }
//           ]
//         }
//       ],
//       conditions: `Holds for every $z \\in \\mathbb{C}$. Equals zero only when $z = 0$.`,
//       related_formulas: `- [Modulus](!/complex-numbers/formulas#modulus)\n- [Modulus Squared](!/complex-numbers/formulas#modulus_squared)\n- [Division](!/complex-numbers/formulas#division)\n- [Multiplicative Inverse](!/complex-numbers/formulas#multiplicative_inverse)`,
//       related_definitions: `- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate)\n- [Modulus](!/complex-numbers/definitions#modulus)`
//     }
//   },
//   {
//     name: 'Real Number Test',
//     category: 'Conjugate',
//     formula: `$$z \\in \\mathbb{R} \\iff z = \\overline{z}$$`,
//     link: { label: 'Complex Conjugate', url: '/complex-numbers/complex-conjugate#5' },
//     fields: {
//       explanation: `A complex number is real if and only if it equals its own conjugate. Geometrically, real numbers lie on the real axis — the mirror line for conjugation — so they are fixed under reflection.`,
//       derivation: [
//         `Forward: if $b = 0$, then $\\overline{z} = a = z$. Reverse: if $a + bi = a - bi$, then $b = 0$.`,
//         {
//           component: 'MathDerivation',
//           items: [
//             { expr: '$z = \\overline{z}$', operation: 'substitute' },
//             { expr: '$a + bi = a - bi$', operation: 'compare imaginary parts' },
//             { expr: '$2bi = 0$', operation: 'conclude' },
//             { expr: '$b = 0 \\;\\Rightarrow\\; z \\in \\mathbb{R}$', tag: 'result' }
//           ]
//         }
//       ],
//       related_formulas: `- [Pure Imaginary Test](!/complex-numbers/formulas#pure_imaginary_test)\n- [Complex Conjugate](!/complex-numbers/formulas#complex_conjugate)`,
//       related_definitions: `- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate)`
//     }
//   },
//   {
//     name: 'Pure Imaginary Test',
//     category: 'Conjugate',
//     formula: `$$z \\;\\text{is pure imaginary} \\iff \\overline{z} = -z$$`,
//     link: { label: 'Complex Conjugate', url: '/complex-numbers/complex-conjugate#5' },
//     fields: {
//       explanation: `A complex number is pure imaginary if and only if its conjugate equals its negative. Pure imaginaries lie on the imaginary axis, perpendicular to the mirror, so reflection sends them to their opposites.`,
//       derivation: [
//         `Forward: if $a = 0$, then $\\overline{z} = -bi = -z$. Reverse: if $\\overline{z} = -z$, then $a - bi = -a - bi$, forcing $a = 0$.`,
//         {
//           component: 'MathDerivation',
//           items: [
//             { expr: '$\\overline{z} = -z$', operation: 'substitute' },
//             { expr: '$a - bi = -a - bi$', operation: 'compare real parts' },
//             { expr: '$2a = 0$', operation: 'conclude' },
//             { expr: '$a = 0 \\;\\Rightarrow\\; z = bi$', tag: 'result' }
//           ]
//         }
//       ],
//       related_formulas: `- [Real Number Test](!/complex-numbers/formulas#real_number_test)\n- [Complex Conjugate](!/complex-numbers/formulas#complex_conjugate)`,
//       related_definitions: `- [Pure Imaginary Number](!/complex-numbers/definitions#pure_imaginary_number)`
//     }
//   },

//   // ─── Category: Modulus (7 entries) ───

//   {
//     name: 'Modulus Squared',
//     category: 'Modulus',
//     formula: `$$|z|^2 = a^2 + b^2$$`,
//     link: { label: 'Absolute Value', url: '/complex-numbers/absolute-value#1' },
//     fields: {
//       explanation: `The square of the modulus equals the sum of squares of the real and imaginary parts. Avoids the square root in $|z|$ — useful in proofs and algebraic manipulations where the squared form is cleaner.`,
//       conditions: `Holds for every $z = a + bi \\in \\mathbb{C}$.`,
//       variants: `Equivalent forms:\n\n$$|z|^2 = z \\cdot \\overline{z}$$\n\nFrom polar form:\n\n$$|z|^2 = r^2$$`,
//       related_formulas: `- [Modulus](!/complex-numbers/formulas#modulus)\n- [Conjugate Times Number](!/complex-numbers/formulas#conjugate_times_number)`,
//       related_definitions: `- [Modulus](!/complex-numbers/definitions#modulus)`
//     }
//   },
//   {
//     name: 'Modulus of Conjugate',
//     category: 'Modulus',
//     formula: `$$|\\overline{z}| = |z|$$`,
//     link: { label: 'Absolute Value', url: '/complex-numbers/absolute-value#4' },
//     fields: {
//       explanation: `Conjugation preserves modulus. Reflection across the real axis does not change distance from the origin, so $z$ and $\\overline{z}$ lie on the same circle centered at the origin.`,
//       derivation: [
//         {
//           component: 'MathDerivation',
//           items: [
//             { expr: '$|\\overline{z}| = |a - bi|$', operation: 'apply modulus formula' },
//             { expr: '$\\sqrt{a^2 + (-b)^2}$', operation: 'simplify' },
//             { expr: '$\\sqrt{a^2 + b^2} = |z|$', tag: 'result' }
//           ]
//         }
//       ],
//       related_formulas: `- [Modulus](!/complex-numbers/formulas#modulus)\n- [Complex Conjugate](!/complex-numbers/formulas#complex_conjugate)`,
//       related_definitions: `- [Modulus](!/complex-numbers/definitions#modulus)\n- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate)`
//     }
//   },
//   {
//     name: 'Modulus of a Product',
//     category: 'Modulus',
//     formula: `$$|z_1 \\cdot z_2| = |z_1| \\cdot |z_2|$$`,
//     link: { label: 'Absolute Value', url: '/complex-numbers/absolute-value#4' },
//     fields: {
//       explanation: `The modulus of a product equals the product of the moduli. Reduces modulus calculations on complicated products to multiplication of individual magnitudes.`,
//       conditions: `Holds for any $z_1, z_2 \\in \\mathbb{C}$.`,
//       related_formulas: `- [Modulus of a Quotient](!/complex-numbers/formulas#modulus_of_a_quotient)\n- [Modulus of a Power](!/complex-numbers/formulas#modulus_of_a_power)\n- [Multiplication in Polar Form](!/complex-numbers/formulas#multiplication_in_polar_form)`,
//       related_definitions: `- [Modulus](!/complex-numbers/definitions#modulus)`
//     }
//   },
//   {
//     name: 'Modulus of a Quotient',
//     category: 'Modulus',
//     formula: `$$\\left|\\frac{z_1}{z_2}\\right| = \\frac{|z_1|}{|z_2|}$$`,
//     link: { label: 'Absolute Value', url: '/complex-numbers/absolute-value#4' },
//     fields: {
//       explanation: `The modulus of a quotient equals the quotient of the moduli.`,
//       conditions: `$z_2 \\neq 0$.`,
//       related_formulas: `- [Modulus of a Product](!/complex-numbers/formulas#modulus_of_a_product)\n- [Division in Polar Form](!/complex-numbers/formulas#division_in_polar_form)`,
//       related_definitions: `- [Modulus](!/complex-numbers/definitions#modulus)`
//     }
//   },
//   {
//     name: 'Modulus of a Power',
//     category: 'Modulus',
//     formula: `$$|z^n| = |z|^n$$`,
//     link: { label: 'Absolute Value', url: '/complex-numbers/absolute-value#4' },
//     fields: {
//       explanation: `Raising a complex number to the $n$-th power raises its modulus to the $n$-th power. Combined with De Moivre’s theorem, this makes computing moduli of powers trivial.`,
//       conditions: `$n \\in \\mathbb{Z}$. For negative $n$, additionally require $z \\neq 0$.`,
//       related_formulas: `- [Modulus of a Product](!/complex-numbers/formulas#modulus_of_a_product)\n- [De Moivre’s Theorem](!/complex-numbers/formulas#de_moivres_theorem)`,
//       related_definitions: `- [Modulus](!/complex-numbers/definitions#modulus)`
//     }
//   },
//   {
//     name: 'Triangle Inequality',
//     category: 'Modulus',
//     formula: `$$|z_1 + z_2| \\leq |z_1| + |z_2|$$`,
//     link: { label: 'Absolute Value', url: '/complex-numbers/absolute-value#5' },
//     fields: {
//       explanation: `The modulus of a sum never exceeds the sum of moduli. Geometrically, one side of a triangle (the direct path from $0$ to $z_1 + z_2$) cannot exceed the sum of the other two sides (the detour through $z_1$ or $z_2$). Foundation for estimation throughout complex analysis.`,
//       conditions: `Holds for any $z_1, z_2 \\in \\mathbb{C}$. Equality holds if and only if $z_1$ and $z_2$ are non-negative real multiples of each other (i.e., point in the same direction from the origin).`,
//       variants: `Generalizes to any finite sum:\n\n$$|z_1 + z_2 + \\cdots + z_n| \\leq |z_1| + |z_2| + \\cdots + |z_n|$$`,
//       related_formulas: `- [Reverse Triangle Inequality](!/complex-numbers/formulas#reverse_triangle_inequality)\n- [Modulus](!/complex-numbers/formulas#modulus)\n- [Addition](!/complex-numbers/formulas#addition)`,
//       related_definitions: `- [Modulus](!/complex-numbers/definitions#modulus)`
//     }
//   },
//   {
//     name: 'Reverse Triangle Inequality',
//     category: 'Modulus',
//     formula: `$$\\bigl||z_1| - |z_2|\\bigr| \\leq |z_1 - z_2|$$`,
//     link: { label: 'Absolute Value', url: '/complex-numbers/absolute-value#7' },
//     fields: {
//       explanation: `The absolute difference of moduli never exceeds the modulus of the difference. Useful for bounding how much $|z|$ can change as $z$ varies.`,
//       derivation: [
//         `Apply the triangle inequality twice and combine.`,
//         {
//           component: 'MathDerivation',
//           items: [
//             { expr: '$|z_1| = |(z_1 - z_2) + z_2| \\leq |z_1 - z_2| + |z_2|$', operation: 'rearrange' },
//             { expr: '$|z_1| - |z_2| \\leq |z_1 - z_2|$', operation: 'swap roles, repeat' },
//             { expr: '$|z_2| - |z_1| \\leq |z_1 - z_2|$', operation: 'combine' },
//             { expr: '$\\bigl||z_1| - |z_2|\\bigr| \\leq |z_1 - z_2|$', tag: 'result' }
//           ]
//         }
//       ],
//       conditions: `Holds for any $z_1, z_2 \\in \\mathbb{C}$.`,
//       related_formulas: `- [Triangle Inequality](!/complex-numbers/formulas#triangle_inequality)\n- [Modulus](!/complex-numbers/formulas#modulus)`,
//       related_definitions: `- [Modulus](!/complex-numbers/definitions#modulus)`
//     }
//   },

//   // ─── Category: Powers & Roots (5 entries) ───

//   {
//     name: 'De Moivre’s Theorem',
//     category: 'Powers & Roots',
//     formula: `$$(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$$`,
//     link: { label: 'De Moivre Theorem', url: '/complex-numbers/demoivre-theorem#2' },
//     fields: {
//       explanation: `Raising a unit-modulus complex number to the $n$-th power multiplies its argument by $n$. Reduces high powers of complex numbers to elementary angle arithmetic — no binomial expansion, no tracking powers of $i$.`,
//       derivation: [
//         `Induction on $n$, using the multiplication-in-polar-form rule.`,
//         {
//           component: 'MathDerivation',
//           items: [
//             { expr: '$n = 1$: trivially holds', operation: 'inductive step' },
//             { expr: '$(\\cos\\theta + i\\sin\\theta)^{k+1} = (\\cos\\theta + i\\sin\\theta)^k \\cdot (\\cos\\theta + i\\sin\\theta)$', operation: 'apply hypothesis and product rule' },
//             { expr: '$= \\cos(k\\theta + \\theta) + i\\sin(k\\theta + \\theta)$', operation: 'simplify' },
//             { expr: '$= \\cos((k+1)\\theta) + i\\sin((k+1)\\theta)$', tag: 'result' }
//           ]
//         }
//       ],
//       conditions: `$n \\in \\mathbb{Z}$. For negative $n$, use $z^{-n} = 1/z^n$.`,
//       variants: `For arbitrary modulus:\n\n$$z^n = r^n \\bigl[\\cos(n\\theta) + i\\sin(n\\theta)\\bigr]$$\n\nIn exponential form:\n\n$$(re^{i\\theta})^n = r^n e^{in\\theta}$$`,
//       related_formulas: `- [Power in Polar Form](!/complex-numbers/formulas#power_in_polar_form)\n- [Nth Roots Formula](!/complex-numbers/formulas#nth_roots_formula)\n- [Roots of Unity](!/complex-numbers/formulas#roots_of_unity)\n- [Euler’s Formula](!/complex-numbers/formulas#eulers_formula)`,
//       related_definitions: `- [Trigonometric Form](!/complex-numbers/definitions#trigonometric_form)\n- [Argument](!/complex-numbers/definitions#argument)`
//     }
//   },
//   {
//     name: 'Power in Polar Form',
//     category: 'Powers & Roots',
//     formula: `$$z^n = r^n e^{in\\theta}$$`,
//     link: { label: 'Exponential Form', url: '/complex-numbers/exponential-form#8' },
//     fields: {
//       explanation: `Exponential-form statement of De Moivre’s theorem. Raises modulus to the $n$-th power and multiplies argument by $n$. Direct consequence of the exponent rule $(e^{i\\theta})^n = e^{in\\theta}$.`,
//       conditions: `$n \\in \\mathbb{Z}$. For $n < 0$, require $z \\neq 0$.`,
//       variants: `Trigonometric form:\n\n$$z^n = r^n \\bigl[\\cos(n\\theta) + i\\sin(n\\theta)\\bigr]$$`,
//       related_formulas: `- [De Moivre’s Theorem](!/complex-numbers/formulas#de_moivres_theorem)\n- [Modulus of a Power](!/complex-numbers/formulas#modulus_of_a_power)\n- [Argument of a Power](!/complex-numbers/formulas#argument_of_a_power)\n- [Nth Roots Formula](!/complex-numbers/formulas#nth_roots_formula)`,
//       related_definitions: `- [Exponential Form](!/complex-numbers/definitions#exponential_form)`
//     }
//   },
//   {
//     name: 'Nth Roots Formula',
//     category: 'Powers & Roots',
//     formula: `$$z_k = R^{1/n} \\bigl[\\cos\\!\\left(\\tfrac{\\phi + 2\\pi k}{n}\\right) + i\\sin\\!\\left(\\tfrac{\\phi + 2\\pi k}{n}\\right)\\bigr], \\quad k = 0, 1, \\ldots, n-1$$`,
//     link: { label: 'De Moivre Theorem', url: '/complex-numbers/demoivre-theorem#6' },
//     fields: {
//       explanation: `Every nonzero complex number $w = Re^{i\\phi}$ has exactly $n$ distinct $n$-th roots. They share the modulus $R^{1/n}$ and are spaced uniformly around the origin at angular intervals of $2\\pi/n$, forming the vertices of a regular $n$-gon.`,
//       derivation: [
//         `Solve $z^n = w$ in polar form.`,
//         {
//           component: 'MathDerivation',
//           items: [
//             { expr: '$r^n e^{in\\alpha} = R e^{i\\phi}$', operation: 'match moduli and arguments' },
//             { expr: '$r = R^{1/n}, \\quad n\\alpha = \\phi + 2\\pi k$', operation: 'solve for $\\alpha$' },
//             { expr: '$\\alpha = \\frac{\\phi + 2\\pi k}{n}$', operation: 'enumerate $k = 0, \\ldots, n-1$' },
//             { expr: '$z_k = R^{1/n} e^{i(\\phi + 2\\pi k)/n}$', tag: 'result' }
//           ]
//         }
//       ],
//       conditions: `$w \\neq 0$ and $n$ is a positive integer. The $n$ roots are distinct; for $k \\geq n$ they repeat modulo $2\\pi$.`,
//       variants: `Exponential form:\n\n$$z_k = R^{1/n} e^{i(\\phi + 2\\pi k)/n}$$`,
//       related_formulas: `- [Roots of Unity](!/complex-numbers/formulas#roots_of_unity)\n- [De Moivre’s Theorem](!/complex-numbers/formulas#de_moivres_theorem)\n- [Power in Polar Form](!/complex-numbers/formulas#power_in_polar_form)`,
//       related_definitions: `- [Roots of Unity](!/complex-numbers/definitions#roots_of_unity)\n- [Exponential Form](!/complex-numbers/definitions#exponential_form)`
//     }
//   },
//   {
//     name: 'Roots of Unity',
//     category: 'Powers & Roots',
//     formula: `$$z_k = e^{i \\, 2\\pi k / n}, \\quad k = 0, 1, \\ldots, n-1$$`,
//     link: { label: 'De Moivre Theorem', url: '/complex-numbers/demoivre-theorem#8' },
//     fields: {
//       explanation: `The $n$ solutions to $z^n = 1$. All lie on the unit circle, equally spaced at angles $2\\pi/n$ apart, forming the vertices of a regular $n$-gon with one vertex at $1$.`,
//       conditions: `$n$ is a positive integer.`,
//       variants: `Trigonometric form:\n\n$$z_k = \\cos\\!\\left(\\tfrac{2\\pi k}{n}\\right) + i\\sin\\!\\left(\\tfrac{2\\pi k}{n}\\right)$$\n\nGenerated by the primitive root:\n\n$$z_k = \\omega^k, \\quad \\omega = e^{i \\, 2\\pi / n}$$`,
//       related_formulas: `- [Sum of Roots of Unity](!/complex-numbers/formulas#sum_of_roots_of_unity)\n- [Nth Roots Formula](!/complex-numbers/formulas#nth_roots_formula)\n- [De Moivre’s Theorem](!/complex-numbers/formulas#de_moivres_theorem)`,
//       related_definitions: `- [Roots of Unity](!/complex-numbers/definitions#roots_of_unity)`
//     }
//   },
//   {
//     name: 'Sum of Roots of Unity',
//     category: 'Powers & Roots',
//     formula: `$$\\sum_{k=0}^{n-1} e^{i \\, 2\\pi k / n} = 0 \\quad (n \\geq 2)$$`,
//     link: { label: 'De Moivre Theorem', url: '/complex-numbers/demoivre-theorem#9' },
//     fields: {
//       explanation: `The sum of all $n$-th roots of unity is zero whenever $n \\geq 2$. Geometrically, the roots form a regular polygon centered at the origin — placed tip-to-tail as vectors, they return to the starting point. Algebraically, this is a finite geometric series with ratio $\\omega \\neq 1$.`,
//       derivation: [
//         `Apply the geometric-series formula with ratio $\\omega = e^{i \\, 2\\pi/n}$.`,
//         {
//           component: 'MathDerivation',
//           items: [
//             { expr: '$\\sum_{k=0}^{n-1} \\omega^k = \\frac{1 - \\omega^n}{1 - \\omega}$', operation: 'use $\\omega^n = 1$' },
//             { expr: '$= \\frac{1 - 1}{1 - \\omega} = 0$', tag: 'result' }
//           ]
//         }
//       ],
//       conditions: `$n \\geq 2$. For $n = 1$ the only root is $1$ itself, so the sum equals $1$.`,
//       related_formulas: `- [Roots of Unity](!/complex-numbers/formulas#roots_of_unity)`,
//       related_definitions: `- [Roots of Unity](!/complex-numbers/definitions#roots_of_unity)`
//     }
//   },

//   // ─── Category: Identities (4 entries) ───

//   {
//     name: 'Euler’s Formula',
//     category: 'Identities',
//     formula: `$$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$$`,
//     link: { label: 'Exponential Form', url: '/complex-numbers/exponential-form#1' },
//     fields: {
//       explanation: `Connects exponential and trigonometric functions through the imaginary unit. Foundation of the exponential form of complex numbers and of every operation in polar coordinates.`,
//       derivation: [
//         `Substitute $x = i\\theta$ into the Taylor series of $e^x$ and separate real and imaginary parts.`,
//         {
//           component: 'MathDerivation',
//           items: [
//             { expr: '$e^{i\\theta} = \\sum_{k=0}^{\\infty} \\frac{(i\\theta)^k}{k!}$', operation: 'expand using powers of $i$' },
//             { expr: '$= \\left(1 - \\tfrac{\\theta^2}{2!} + \\tfrac{\\theta^4}{4!} - \\cdots\\right) + i\\left(\\theta - \\tfrac{\\theta^3}{3!} + \\tfrac{\\theta^5}{5!} - \\cdots\\right)$', operation: 'recognize Taylor series' },
//             { expr: '$= \\cos\\theta + i\\sin\\theta$', tag: 'result' }
//           ]
//         }
//       ],
//       conditions: `$\\theta \\in \\mathbb{R}$. Extends to complex $\\theta$ in advanced analysis.`,
//       variants: `Inverse forms (express $\\cos$ and $\\sin$ via exponentials):\n\n$$\\cos\\theta = \\frac{e^{i\\theta} + e^{-i\\theta}}{2}, \\qquad \\sin\\theta = \\frac{e^{i\\theta} - e^{-i\\theta}}{2i}$$`,
//       related_formulas: `- [Euler’s Identity](!/complex-numbers/formulas#eulers_identity)\n- [Exponential Form](!/complex-numbers/formulas#exponential_form)\n- [De Moivre’s Theorem](!/complex-numbers/formulas#de_moivres_theorem)`,
//       related_definitions: `- [Exponential Form](!/complex-numbers/definitions#exponential_form)\n- [Argument](!/complex-numbers/definitions#argument)`
//     }
//   },
//   {
//     name: 'Euler’s Identity',
//     category: 'Identities',
//     formula: `$$e^{i\\pi} + 1 = 0$$`,
//     link: { label: 'Exponential Form', url: '/complex-numbers/exponential-form#3' },
//     fields: {
//       explanation: `Special case of Euler’s formula at $\\theta = \\pi$. Connects five fundamental constants — $e$, $i$, $\\pi$, $1$, and $0$ — in a single equation. Often cited as the most elegant equation in mathematics.`,
//       derivation: [
//         {
//           component: 'MathDerivation',
//           items: [
//             { expr: 'Set $\\theta = \\pi$ in $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$', operation: 'evaluate' },
//             { expr: '$e^{i\\pi} = \\cos\\pi + i\\sin\\pi = -1 + 0$', operation: 'rearrange' },
//             { expr: '$e^{i\\pi} + 1 = 0$', tag: 'result' }
//           ]
//         }
//       ],
//       related_formulas: `- [Euler’s Formula](!/complex-numbers/formulas#eulers_formula)`,
//       related_definitions: `- [Exponential Form](!/complex-numbers/definitions#exponential_form)`
//     }
//   },
//   {
//     name: 'Powers of i Cycle',
//     category: 'Identities',
//     formula: `$$i^1 = i, \\quad i^2 = -1, \\quad i^3 = -i, \\quad i^4 = 1$$`,
//     link: { label: 'Imaginary Numbers', url: '/complex-numbers/imaginary-numbers#5' },
//     fields: {
//       explanation: `Powers of $i$ cycle through four values with period 4. To compute $i^k$ for any integer $k$, divide $k$ by 4 and use the remainder.`,
//       conditions: `$k \\in \\mathbb{Z}$. The cycle extends to negative exponents: $i^{-1} = -i$, $i^{-2} = -1$, etc.`,
//       variants: `General formula via remainder:\n\n$$i^k = i^{k \\bmod 4}$$\n\nIn polar form, $i = e^{i\\pi/2}$, so $i^k = e^{ik\\pi/2}$ — multiplication by $i$ is a $90°$ rotation.`,
//       related_formulas: `- [De Moivre’s Theorem](!/complex-numbers/formulas#de_moivres_theorem)\n- [Roots of Unity](!/complex-numbers/formulas#roots_of_unity)`,
//       related_definitions: `- [Imaginary Unit](!/complex-numbers/definitions#imaginary_unit)`
//     }
//   },
//   {
//     name: 'Square Root of Negative',
//     category: 'Identities',
//     formula: `$$\\sqrt{-a} = i\\sqrt{a} \\quad (a > 0)$$`,
//     link: { label: 'Imaginary Numbers', url: '/complex-numbers/imaginary-numbers#2' },
//     fields: {
//       explanation: `Extracts the imaginary unit from the square root of a negative real number. Verification: $(i\\sqrt{a})^2 = i^2 \\cdot a = -a$.`,
//       conditions: `$a > 0$. The standard product rule $\\sqrt{xy} = \\sqrt{x}\\sqrt{y}$ does NOT hold when both factors are negative — always extract $i$ from each negative radicand before multiplying.`,
//       variants: `Common pitfall: $\\sqrt{-1} \\cdot \\sqrt{-1} \\neq \\sqrt{(-1)(-1)} = 1$. Correct: $\\sqrt{-1} \\cdot \\sqrt{-1} = i \\cdot i = -1$.`,
//       related_formulas: `- [Powers of i Cycle](!/complex-numbers/formulas#powers_of_i_cycle)`,
//       related_definitions: `- [Imaginary Unit](!/complex-numbers/definitions#imaginary_unit)\n- [Imaginary Number](!/complex-numbers/definitions#imaginary_number)`
//     }
//   },

//   // ─── Category: Argument (5 entries) ───

//   {
//     name: 'Argument of a Product',
//     category: 'Argument',
//     formula: `$$\\arg(z_1 \\cdot z_2) = \\arg(z_1) + \\arg(z_2)$$`,
//     link: { label: 'Properties', url: '/complex-numbers/properties#6' },
//     fields: {
//       explanation: `Multiplying complex numbers adds their arguments. Geometrically, multiplication by $z_2$ rotates by $\\arg(z_2)$. Equality holds modulo $2\\pi$ since arguments are determined only up to multiples of $2\\pi$.`,
//       conditions: `$z_1, z_2 \\neq 0$. When using the principal argument $\\mathrm{Arg}$, the result may need normalization to stay in $(-\\pi, \\pi]$.`,
//       related_formulas: `- [Argument of a Quotient](!/complex-numbers/formulas#argument_of_a_quotient)\n- [Argument of a Power](!/complex-numbers/formulas#argument_of_a_power)\n- [Multiplication in Polar Form](!/complex-numbers/formulas#multiplication_in_polar_form)`,
//       related_definitions: `- [Argument](!/complex-numbers/definitions#argument)`
//     }
//   },
//   {
//     name: 'Argument of a Quotient',
//     category: 'Argument',
//     formula: `$$\\arg\\!\\left(\\frac{z_1}{z_2}\\right) = \\arg(z_1) - \\arg(z_2)$$`,
//     link: { label: 'Properties', url: '/complex-numbers/properties#6' },
//     fields: {
//       explanation: `Dividing complex numbers subtracts their arguments. Geometrically, division by $z_2$ rotates clockwise by $\\arg(z_2)$. Modulo $2\\pi$.`,
//       conditions: `$z_1, z_2 \\neq 0$.`,
//       related_formulas: `- [Argument of a Product](!/complex-numbers/formulas#argument_of_a_product)\n- [Division in Polar Form](!/complex-numbers/formulas#division_in_polar_form)`,
//       related_definitions: `- [Argument](!/complex-numbers/definitions#argument)`
//     }
//   },
//   {
//     name: 'Argument of a Power',
//     category: 'Argument',
//     formula: `$$\\arg(z^n) = n \\cdot \\arg(z)$$`,
//     link: { label: 'Properties', url: '/complex-numbers/properties#6' },
//     fields: {
//       explanation: `Raising to the $n$-th power multiplies the argument by $n$. Direct consequence of the product rule applied $n$ times. Underlies De Moivre’s theorem.`,
//       conditions: `$z \\neq 0$ and $n \\in \\mathbb{Z}$. Modulo $2\\pi$.`,
//       related_formulas: `- [Argument of a Product](!/complex-numbers/formulas#argument_of_a_product)\n- [De Moivre’s Theorem](!/complex-numbers/formulas#de_moivres_theorem)\n- [Modulus of a Power](!/complex-numbers/formulas#modulus_of_a_power)`,
//       related_definitions: `- [Argument](!/complex-numbers/definitions#argument)`
//     }
//   },
//   {
//     name: 'Argument of Conjugate',
//     category: 'Argument',
//     formula: `$$\\arg(\\overline{z}) = -\\arg(z)$$`,
//     link: { label: 'Properties', url: '/complex-numbers/properties#6' },
//     fields: {
//       explanation: `Conjugation reflects across the real axis, negating the angle. The modulus is preserved.`,
//       conditions: `$z \\neq 0$.`,
//       related_formulas: `- [Modulus of Conjugate](!/complex-numbers/formulas#modulus_of_conjugate)\n- [Complex Conjugate](!/complex-numbers/formulas#complex_conjugate)`,
//       related_definitions: `- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate)\n- [Argument](!/complex-numbers/definitions#argument)`
//     }
//   },
//   {
//     name: 'Argument of Negative',
//     category: 'Argument',
//     formula: `$$\\arg(-z) = \\arg(z) + \\pi$$`,
//     link: { label: 'Properties', url: '/complex-numbers/properties#6' },
//     fields: {
//       explanation: `Negation rotates by $180°$. Geometrically, $-z$ is the diametrically opposite point through the origin.`,
//       conditions: `$z \\neq 0$. Modulo $2\\pi$.`,
//       related_formulas: `- [Additive Inverse](!/complex-numbers/formulas#additive_inverse)\n- [Argument of Conjugate](!/complex-numbers/formulas#argument_of_conjugate)`,
//       related_definitions: `- [Additive Inverse](!/complex-numbers/definitions#additive_inverse)\n- [Argument](!/complex-numbers/definitions#argument)`
//     }
//   },

//   // ─── Category: Inverses & Distance (4 entries) ───

//   {
//     name: 'Additive Inverse',
//     category: 'Inverses & Distance',
//     formula: `$$-z = -a - bi \\quad \\text{for} \\;\\; z = a + bi$$`,
//     link: { label: 'Additive Inverse', url: '/complex-numbers/additive-inverse#2' },
//     fields: {
//       explanation: `The unique complex number satisfying $z + (-z) = 0$. Both real and imaginary parts negate. Geometrically, reflection through the origin (rotation by $180°$).`,
//       conditions: `Defined for every $z \\in \\mathbb{C}$. The number $0$ is its own additive inverse.`,
//       variants: `Properties: $|-z| = |z|$, $\\arg(-z) = \\arg(z) + \\pi$, $-(-z) = z$.`,
//       related_formulas: `- [Subtraction](!/complex-numbers/formulas#subtraction)\n- [Argument of Negative](!/complex-numbers/formulas#argument_of_negative)`,
//       related_definitions: `- [Additive Inverse](!/complex-numbers/definitions#additive_inverse)`
//     }
//   },
//   {
//     name: 'Multiplicative Inverse',
//     category: 'Inverses & Distance',
//     formula: `$$z^{-1} = \\frac{\\overline{z}}{|z|^2} = \\frac{a - bi}{a^2 + b^2}$$`,
//     link: { label: 'Multiplicative Inverse', url: '/complex-numbers/multiplicative-inverse#2' },
//     fields: {
//       explanation: `The unique complex number satisfying $z \\cdot z^{-1} = 1$. Found by multiplying $1/z$ by $\\overline{z}/\\overline{z}$, which converts the denominator to the real number $|z|^2$.`,
//       derivation: [
//         `Rationalize $1/(a+bi)$ using the conjugate.`,
//         {
//           component: 'MathDerivation',
//           items: [
//             { expr: '$\\frac{1}{a + bi} \\cdot \\frac{a - bi}{a - bi}$', operation: 'expand' },
//             { expr: '$\\frac{a - bi}{a^2 + b^2}$', operation: 'identify $|z|^2 = a^2 + b^2$' },
//             { expr: '$z^{-1} = \\frac{\\overline{z}}{|z|^2}$', tag: 'result' }
//           ]
//         }
//       ],
//       conditions: `$z \\neq 0$. The number $0$ has no multiplicative inverse.`,
//       variants: `In polar form:\n\n$$z^{-1} = \\frac{1}{r} e^{-i\\theta}$$\n\nProperties: $|z^{-1}| = 1/|z|$, $\\arg(z^{-1}) = -\\arg(z)$.`,
//       related_formulas: `- [Division](!/complex-numbers/formulas#division)\n- [Conjugate Times Number](!/complex-numbers/formulas#conjugate_times_number)\n- [Modulus of Inverse](!/complex-numbers/formulas#modulus_of_inverse)`,
//       related_definitions: `- [Multiplicative Inverse](!/complex-numbers/definitions#multiplicative_inverse)\n- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate)`
//     }
//   },
//   {
//     name: 'Modulus of Inverse',
//     category: 'Inverses & Distance',
//     formula: `$$|z^{-1}| = \\frac{1}{|z|}$$`,
//     link: { label: 'Multiplicative Inverse', url: '/complex-numbers/multiplicative-inverse#5' },
//     fields: {
//       explanation: `The modulus of the inverse is the reciprocal of the modulus. Numbers far from the origin have inverses close to the origin, and vice versa. Numbers on the unit circle have inverses also on the unit circle.`,
//       conditions: `$z \\neq 0$.`,
//       related_formulas: `- [Multiplicative Inverse](!/complex-numbers/formulas#multiplicative_inverse)\n- [Modulus of a Quotient](!/complex-numbers/formulas#modulus_of_a_quotient)`,
//       related_definitions: `- [Multiplicative Inverse](!/complex-numbers/definitions#multiplicative_inverse)\n- [Modulus](!/complex-numbers/definitions#modulus)`
//     }
//   },
//   {
//     name: 'Distance Between Complex Numbers',
//     category: 'Inverses & Distance',
//     formula: `$$d(z_1, z_2) = |z_1 - z_2| = \\sqrt{(a_1 - a_2)^2 + (b_1 - b_2)^2}$$`,
//     link: { label: 'Absolute Value', url: '/complex-numbers/absolute-value#8' },
//     fields: {
//       explanation: `Euclidean distance between two points in the complex plane. The modulus of the difference equals the straight-line distance — direct application of the Pythagorean theorem to the right triangle with legs $|a_1 - a_2|$ and $|b_1 - b_2|$.`,
//       conditions: `Defined for all $z_1, z_2 \\in \\mathbb{C}$. Equals zero if and only if $z_1 = z_2$.`,
//       variants: `Locus interpretation: the set $\\{z : |z - z_0| = r\\}$ is a circle of radius $r$ centered at $z_0$.`,
//       related_formulas: `- [Modulus](!/complex-numbers/formulas#modulus)\n- [Subtraction](!/complex-numbers/formulas#subtraction)\n- [Triangle Inequality](!/complex-numbers/formulas#triangle_inequality)`,
//       related_definitions: `- [Modulus](!/complex-numbers/definitions#modulus)\n- [Complex Plane](!/complex-numbers/definitions#complex_plane)`
//     }
//   },

//   // ─── Category: Polynomial Theory (5 entries) ───

//   {
//     name: 'Fundamental Theorem of Algebra',
//     category: 'Polynomial Theory',
//     formula: `$$p(z) = a_n(z - z_1)(z - z_2) \\cdots (z - z_n)$$`,
//     link: { label: 'Equations & Polynomials', url: '/complex-numbers/equations-polynomials#2' },
//     fields: {
//       explanation: `Every non-constant polynomial with complex coefficients factors completely into linear terms over $\\mathbb{C}$. A polynomial of degree $n$ has exactly $n$ roots, counted with multiplicity. This is what makes $\\mathbb{C}$ algebraically closed — no further extension of the number system is needed to solve polynomial equations.`,
//       conditions: `$p(z)$ has degree $n \\geq 1$ with coefficients in $\\mathbb{C}$. The leading coefficient is $a_n \\neq 0$. Roots $z_1, \\ldots, z_n$ may repeat.`,
//       notation: `A root with multiplicity $m$ appears $m$ times in the factorization. The total number of roots, counting multiplicity, equals the degree.`,
//       related_formulas: `- [Conjugate Root Theorem](!/complex-numbers/formulas#conjugate_root_theorem)\n- [Vieta’s Quadratic](!/complex-numbers/formulas#vietas_quadratic)\n- [Quadratic Formula in Complex](!/complex-numbers/formulas#quadratic_formula_in_complex)`,
//       related_definitions: `- [Complex Number](!/complex-numbers/definitions#complex_number)`
//     }
//   },
//   {
//     name: 'Conjugate Root Theorem',
//     category: 'Polynomial Theory',
//     formula: `$$p(z_0) = 0 \\;\\Rightarrow\\; p(\\overline{z_0}) = 0 \\quad \\text{(real coefficients)}$$`,
//     link: { label: 'Equations & Polynomials', url: '/complex-numbers/equations-polynomials#5' },
//     fields: {
//       explanation: `For a polynomial with real coefficients, complex roots come in conjugate pairs. If $z_0$ is a root, so is $\\overline{z_0}$. Consequence: every real polynomial of odd degree has at least one real root.`,
//       derivation: [
//         `Use the fact that $\\overline{a_k} = a_k$ for real coefficients and that conjugation distributes over sums and products.`,
//         {
//           component: 'MathDerivation',
//           items: [
//             { expr: '$\\overline{p(z_0)} = \\overline{a_n z_0^n + \\cdots + a_0}$', operation: 'distribute conjugate' },
//             { expr: '$= a_n \\overline{z_0}^n + \\cdots + a_0 = p(\\overline{z_0})$', operation: 'apply $p(z_0) = 0$' },
//             { expr: '$\\overline{0} = 0 \\;\\Rightarrow\\; p(\\overline{z_0}) = 0$', tag: 'result' }
//           ]
//         }
//       ],
//       conditions: `All coefficients $a_k$ must be real. Theorem fails for polynomials with non-real coefficients.`,
//       related_formulas: `- [Fundamental Theorem of Algebra](!/complex-numbers/formulas#fundamental_theorem_of_algebra)\n- [Complex Conjugate](!/complex-numbers/formulas#complex_conjugate)`,
//       related_definitions: `- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate)`
//     }
//   },
//   {
//     name: 'Quadratic Formula in Complex',
//     category: 'Polynomial Theory',
//     formula: `$$z = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$`,
//     link: { label: 'Equations & Polynomials', url: '/complex-numbers/equations-polynomials#6' },
//     fields: {
//       explanation: `The quadratic formula extends to complex coefficients without modification. Every quadratic equation $az^2 + bz + c = 0$ has exactly two roots in $\\mathbb{C}$ (counting multiplicity), regardless of whether the discriminant is real or complex.`,
//       conditions: `$a, b, c \\in \\mathbb{C}$ and $a \\neq 0$. When the discriminant is complex, computing $\\sqrt{b^2 - 4ac}$ requires the $n$-th roots formula or De Moivre’s theorem.`,
//       variants: `For real coefficients with negative discriminant $b^2 - 4ac < 0$:\n\n$$z = \\frac{-b \\pm i\\sqrt{4ac - b^2}}{2a}$$`,
//       related_formulas: `- [Vieta’s Quadratic](!/complex-numbers/formulas#vietas_quadratic)\n- [Fundamental Theorem of Algebra](!/complex-numbers/formulas#fundamental_theorem_of_algebra)\n- [Conjugate Root Theorem](!/complex-numbers/formulas#conjugate_root_theorem)`,
//       related_definitions: `- [Complex Number](!/complex-numbers/definitions#complex_number)`
//     }
//   },
//   {
//     name: 'Vieta’s Quadratic',
//     category: 'Polynomial Theory',
//     formula: `$$z_1 + z_2 = -\\frac{b}{a}, \\qquad z_1 \\cdot z_2 = \\frac{c}{a}$$`,
//     link: { label: 'Equations & Polynomials', url: '/complex-numbers/equations-polynomials#4' },
//     fields: {
//       explanation: `Relates the roots of a quadratic $az^2 + bz + c = 0$ to its coefficients without solving the equation. Same form as in the real case — Vieta’s formulas extend to complex roots unchanged.`,
//       conditions: `$a \\neq 0$. Coefficients may be real or complex.`,
//       related_formulas: `- [Vieta’s General](!/complex-numbers/formulas#vietas_general)\n- [Quadratic Formula in Complex](!/complex-numbers/formulas#quadratic_formula_in_complex)\n- [Fundamental Theorem of Algebra](!/complex-numbers/formulas#fundamental_theorem_of_algebra)`,
//       related_definitions: `- [Complex Number](!/complex-numbers/definitions#complex_number)`
//     }
//   },
//   {
//     name: 'Vieta’s General',
//     category: 'Polynomial Theory',
//     formula: `$$\\sum_{i} r_i = -\\frac{a_{n-1}}{a_n}, \\qquad \\prod_{i} r_i = (-1)^n \\frac{a_0}{a_n}$$`,
//     link: { label: 'Equations & Polynomials', url: '/complex-numbers/equations-polynomials#4' },
//     fields: {
//       explanation: `For a polynomial of degree $n$, the elementary symmetric sums of its roots equal the coefficients (up to sign and division by $a_n$). The sum of roots and the product of roots are the simplest cases; intermediate symmetric sums correspond to coefficients in between.`,
//       conditions: `$a_n \\neq 0$. Roots $r_1, \\ldots, r_n$ are the $n$ roots in $\\mathbb{C}$ (with multiplicity).`,
//       variants: `For monic cubic $z^3 + bz^2 + cz + d = 0$ with roots $r_1, r_2, r_3$:\n\n$$r_1 + r_2 + r_3 = -b$$\n$$r_1 r_2 + r_1 r_3 + r_2 r_3 = c$$\n$$r_1 r_2 r_3 = -d$$`,
//       related_formulas: `- [Vieta’s Quadratic](!/complex-numbers/formulas#vietas_quadratic)\n- [Fundamental Theorem of Algebra](!/complex-numbers/formulas#fundamental_theorem_of_algebra)`,
//       related_definitions: `- [Complex Number](!/complex-numbers/definitions#complex_number)`
//     }
//   },

// ];

// export default complexNumbersFormulasList;



const complexNumbersFormulasList = [

  // ─── Category: Forms & Conversions (8 entries) ───

  {
    name: 'Algebraic Form',
    entity: 'algebraic_form',
    category: 'Forms & Conversions',
    formula: `$$z = a + bi$$`,
    link: { label: 'Algebraic Form', url: '/complex-numbers/algebraic-form#1' },
    fields: {
      explanation: `The standard way of writing a complex number, as a sum of a real part $a$ and an imaginary part $b$ scaled by the imaginary unit $i$. Also called rectangular form or standard form. Every complex number has a unique algebraic form, and every pair of real numbers $(a, b)$ produces exactly one complex number this way.`,
      conditions: `$a, b \\in \\mathbb{R}$ and $i^2 = -1$. When $b = 0$, $z$ is real. When $a = 0$ and $b \\neq 0$, $z$ is pure imaginary.`,
      notation: `Some texts write $a + ib$ instead of $a + bi$; the order is conventional. The set of all complex numbers is denoted $\\mathbb{C}$.`,
      related_formulas: `- [Trigonometric Form](!/complex-numbers/formulas#trigonometric_form)\n- [Exponential Form](!/complex-numbers/formulas#exponential_form)\n- [Real and Imaginary Parts](!/complex-numbers/formulas#real_and_imaginary_parts)\n- [Equality of Complex Numbers](!/complex-numbers/formulas#equality_of_complex_numbers)`,
      related_definitions: `- [Complex Number](!/complex-numbers/definitions#complex_number)\n- [Algebraic Form](!/complex-numbers/definitions#algebraic_form)\n- [Real Part](!/complex-numbers/definitions#real_part)\n- [Imaginary Part](!/complex-numbers/definitions#imaginary_part)`
    }
  },
  {
    name: 'Trigonometric Form',
    entity: 'trigonometric_form',
    category: 'Forms & Conversions',
    formula: `$$z = r(\\cos\\theta + i\\sin\\theta)$$`,
    link: { label: 'Trigonometric Form', url: '/complex-numbers/trigonometric-form#7' },
    fields: {
      explanation: `Expresses a complex number using its distance $r$ from the origin and its angle $\\theta$ from the positive real axis. Also called polar form. Particularly useful for multiplication, division, and powers, where the geometric meaning becomes transparent.`,
      conditions: `$r = |z| \\geq 0$ and $\\theta = \\arg(z)$. The argument is determined only up to multiples of $2\\pi$.`,
      notation: `Often abbreviated $z = r\\,\\mathrm{cis}\\,\\theta$, where $\\mathrm{cis}\\,\\theta = \\cos\\theta + i\\sin\\theta$.`,
      variants: `Using the principal argument:\n\n$$z = r(\\cos\\Theta + i\\sin\\Theta), \\quad \\Theta \\in (-\\pi, \\pi]$$`,
      related_formulas: `- [Exponential Form](!/complex-numbers/formulas#exponential_form)\n- [Algebraic Form](!/complex-numbers/formulas#algebraic_form)\n- [Modulus](!/complex-numbers/formulas#modulus)\n- [Argument](!/complex-numbers/formulas#argument)\n- [Polar to Rectangular Conversion](!/complex-numbers/formulas#polar_to_rectangular_conversion)`,
      related_definitions: `- [Trigonometric Form](!/complex-numbers/definitions#trigonometric_form)\n- [Modulus](!/complex-numbers/definitions#modulus)\n- [Argument](!/complex-numbers/definitions#argument)`
    }
  },
  {
    name: 'Exponential Form',
    entity: 'exponential_form',
    category: 'Forms & Conversions',
    formula: `$$z = re^{i\\theta}$$`,
    link: { label: 'Exponential Form', url: '/complex-numbers/exponential-form#4' },
    fields: {
      explanation: [
        `Compact representation derived from Euler’s formula $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$. Encodes modulus and argument in a single exponential expression. Multiplication, division, and powers reduce to elementary exponent rules.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: 'r, θ', operation: 'apply Euler: e^{iθ} = cos θ + i sin θ' },
            { value: 'r·e^{iθ}', operation: '' }
          ],
          label: 'Exponential Form'
        }
      ],
      conditions: `$r = |z| \\geq 0$ and $\\theta = \\arg(z)$. For $z = 0$, the argument is undefined and $r = 0$.`,
      related_formulas: `- [Trigonometric Form](!/complex-numbers/formulas#trigonometric_form)\n- [Euler’s Formula](!/complex-numbers/formulas#eulers_formula)\n- [Multiplication in Polar Form](!/complex-numbers/formulas#multiplication_in_polar_form)\n- [De Moivre’s Theorem](!/complex-numbers/formulas#de_moivres_theorem)`,
      related_definitions: `- [Exponential Form](!/complex-numbers/definitions#exponential_form)\n- [Modulus](!/complex-numbers/definitions#modulus)\n- [Argument](!/complex-numbers/definitions#argument)`
    }
  },
  {
    name: 'Modulus',
    entity: 'modulus',
    category: 'Forms & Conversions',
    formula: `$$|z| = \\sqrt{a^2 + b^2}$$`,
    link: { label: 'Absolute Value', url: '/complex-numbers/absolute-value#1' },
    fields: {
      explanation: `For $z = a + bi$, the modulus measures the straight-line distance from the origin to $z$ in the complex plane. Direct application of the Pythagorean theorem to the right triangle with legs $|a|$ and $|b|$.`,
      derivation: [
        `The point $(a, b)$ forms a right triangle with the origin. The hypotenuse is the distance to $z$.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: 'horizontal leg $= |a|$, vertical leg $= |b|$', operation: 'Pythagorean theorem' },
            { expr: '$|z|^2 = a^2 + b^2$', operation: 'take square root' },
            { expr: '$|z| = \\sqrt{a^2 + b^2}$', tag: 'result' }
          ]
        }
      ],
      conditions: `$|z| \\geq 0$, with equality only when $z = 0$.`,
      variants: `In terms of the conjugate:\n\n$$|z| = \\sqrt{z \\cdot \\overline{z}}$$`,
      related_formulas: `- [Modulus Squared](!/complex-numbers/formulas#modulus_squared)\n- [Modulus of a Product](!/complex-numbers/formulas#modulus_of_a_product)\n- [Triangle Inequality](!/complex-numbers/formulas#triangle_inequality)\n- [Conjugate Times Number](!/complex-numbers/formulas#conjugate_times_number)`,
      related_definitions: `- [Modulus](!/complex-numbers/definitions#modulus)\n- [Complex Plane](!/complex-numbers/definitions#complex_plane)`
    }
  },
  {
    name: 'Argument',
    entity: 'argument',
    category: 'Forms & Conversions',
    formula: `$$\\arg(z) = \\theta \\quad \\text{where} \\quad \\cos\\theta = \\frac{a}{|z|}, \\;\\; \\sin\\theta = \\frac{b}{|z|}$$`,
    link: { label: 'Trigonometric Form', url: '/complex-numbers/trigonometric-form#3' },
    fields: {
      explanation: `The argument is the angle from the positive real axis to the line segment from the origin to $z$, measured counterclockwise. Determined only up to multiples of $2\\pi$ — the principal argument $\\mathrm{Arg}(z) \\in (-\\pi, \\pi]$ provides the canonical choice.`,
      conditions: `Undefined when $z = 0$. For $z \\neq 0$, infinitely many valid arguments exist, all differing by multiples of $2\\pi$.`,
      variants: `Two-argument arctangent (handles all four quadrants):\n\n$$\\theta = \\mathrm{atan2}(b, a)$$\n\nQuadrant-adjusted arctangent for $a \\neq 0$:\n\n$$\\theta = \\begin{cases} \\arctan(b/a) & a > 0 \\\\ \\arctan(b/a) + \\pi & a < 0,\\, b \\geq 0 \\\\ \\arctan(b/a) - \\pi & a < 0,\\, b < 0 \\end{cases}$$`,
      notation: `$\\arg(z)$ denotes any valid argument; $\\mathrm{Arg}(z)$ denotes the principal argument.`,
      related_formulas: `- [Argument of a Product](!/complex-numbers/formulas#argument_of_a_product)\n- [Argument of a Quotient](!/complex-numbers/formulas#argument_of_a_quotient)\n- [Argument of a Power](!/complex-numbers/formulas#argument_of_a_power)`,
      related_definitions: `- [Argument](!/complex-numbers/definitions#argument)\n- [Trigonometric Form](!/complex-numbers/definitions#trigonometric_form)`
    }
  },
  {
    name: 'Polar to Rectangular Conversion',
    entity: 'trigonometric_form',
    category: 'Forms & Conversions',
    formula: `$$a = r\\cos\\theta, \\qquad b = r\\sin\\theta$$`,
    link: { label: 'Exponential Form', url: '/complex-numbers/exponential-form#5' },
    fields: {
      explanation: `Recovers the rectangular components $a$ and $b$ from polar parameters $r$ and $\\theta$. Direct trigonometric projection: the horizontal leg of the right triangle is $r\\cos\\theta$, the vertical leg is $r\\sin\\theta$.`,
      conditions: `Valid for any $r \\geq 0$ and any real $\\theta$. When $r = 0$, both components are zero regardless of $\\theta$.`,
      variants: `Combined into a single complex number:\n\n$$z = r\\cos\\theta + i \\cdot r\\sin\\theta = r(\\cos\\theta + i\\sin\\theta)$$`,
      related_formulas: `- [Trigonometric Form](!/complex-numbers/formulas#trigonometric_form)\n- [Algebraic Form](!/complex-numbers/formulas#algebraic_form)\n- [Modulus](!/complex-numbers/formulas#modulus)`,
      related_definitions: `- [Trigonometric Form](!/complex-numbers/definitions#trigonometric_form)\n- [Real Part](!/complex-numbers/definitions#real_part)\n- [Imaginary Part](!/complex-numbers/definitions#imaginary_part)`
    }
  },
  {
    name: 'Real and Imaginary Parts',
    entity: 'real_part',
    category: 'Forms & Conversions',
    formula: `$$\\operatorname{Re}(z) = a, \\qquad \\operatorname{Im}(z) = b \\quad \\text{for} \\;\\; z = a + bi$$`,
    link: { label: 'Algebraic Form', url: '/complex-numbers/algebraic-form#21' },
    fields: {
      explanation: `Extraction functions returning the real components of a complex number. Despite its name, $\\operatorname{Im}(z)$ is itself a real number — it is the coefficient of $i$, not the term $bi$.`,
      conditions: `Both $\\operatorname{Re}$ and $\\operatorname{Im}$ are functions $\\mathbb{C} \\to \\mathbb{R}$.`,
      variants: `Via the conjugate:\n\n$$\\operatorname{Re}(z) = \\frac{z + \\overline{z}}{2}, \\qquad \\operatorname{Im}(z) = \\frac{z - \\overline{z}}{2i}$$\n\nFrom polar form:\n\n$$\\operatorname{Re}(z) = |z|\\cos\\theta, \\qquad \\operatorname{Im}(z) = |z|\\sin\\theta$$`,
      related_formulas: `- [Algebraic Form](!/complex-numbers/formulas#algebraic_form)\n- [Polar to Rectangular Conversion](!/complex-numbers/formulas#polar_to_rectangular_conversion)`,
      related_definitions: `- [Real Part](!/complex-numbers/definitions#real_part)\n- [Imaginary Part](!/complex-numbers/definitions#imaginary_part)`
    }
  },
  {
    name: 'Equality of Complex Numbers',
    entity: 'complex_number',
    category: 'Forms & Conversions',
    formula: `$$a + bi = c + di \\iff a = c \\;\\text{ and }\\; b = d$$`,
    link: { label: 'Algebraic Form', url: '/complex-numbers/algebraic-form#3' },
    fields: {
      explanation: `Two complex numbers are equal if and only if both their real parts and their imaginary parts match. A single complex equation thus splits into two independent real equations — a powerful technique for solving complex equations by separation into real and imaginary parts.`,
      conditions: `$a, b, c, d \\in \\mathbb{R}$.`,
      related_formulas: `- [Algebraic Form](!/complex-numbers/formulas#algebraic_form)\n- [Real and Imaginary Parts](!/complex-numbers/formulas#real_and_imaginary_parts)`,
      related_definitions: `- [Complex Number](!/complex-numbers/definitions#complex_number)\n- [Algebraic Form](!/complex-numbers/definitions#algebraic_form)`
    }
  },

  // ─── Category: Operations (6 entries) ───

  {
    name: 'Addition',
    entity: 'complex_number',
    category: 'Operations',
    formula: `$$(a + bi) + (c + di) = (a + c) + (b + d)i$$`,
    link: { label: 'Operations', url: '/complex-numbers/operations#1' },
    fields: {
      explanation: `Add real parts to real parts and imaginary parts to imaginary parts. The two components are independent — no interaction occurs between them. Geometrically, addition follows the parallelogram rule: place the two complex numbers as vectors from the origin and the sum is the diagonal.`,
      conditions: `$a, b, c, d \\in \\mathbb{R}$. Addition is commutative and associative.`,
      related_formulas: `- [Subtraction](!/complex-numbers/formulas#subtraction)\n- [Triangle Inequality](!/complex-numbers/formulas#triangle_inequality)`,
      related_definitions: `- [Complex Number](!/complex-numbers/definitions#complex_number)\n- [Algebraic Form](!/complex-numbers/definitions#algebraic_form)`
    }
  },
  {
    name: 'Subtraction',
    entity: 'complex_number',
    category: 'Operations',
    formula: `$$(a + bi) - (c + di) = (a - c) + (b - d)i$$`,
    link: { label: 'Operations', url: '/complex-numbers/operations#2' },
    fields: {
      explanation: `Subtract real parts and imaginary parts independently. Equivalently, $z_1 - z_2 = z_1 + (-z_2)$ where $-z_2$ is the additive inverse. Geometrically, $z_1 - z_2$ is the vector from $z_2$ to $z_1$, and its modulus $|z_1 - z_2|$ is the distance between the two points in the complex plane.`,
      conditions: `$a, b, c, d \\in \\mathbb{R}$. The negative sign must distribute to both real and imaginary parts of the subtracted number.`,
      related_formulas: `- [Addition](!/complex-numbers/formulas#addition)\n- [Additive Inverse](!/complex-numbers/formulas#additive_inverse)`,
      related_definitions: `- [Additive Inverse](!/complex-numbers/definitions#additive_inverse)`
    }
  },
  {
    name: 'Multiplication',
    entity: 'complex_number',
    category: 'Operations',
    formula: `$$(a + bi)(c + di) = (ac - bd) + (ad + bc)i$$`,
    link: { label: 'Operations', url: '/complex-numbers/operations#3' },
    fields: {
      explanation: `Apply the distributive property (FOIL), then collapse $i^2 = -1$. The four cross-terms collect into a real part $ac - bd$ and an imaginary part $ad + bc$.`,
      derivation: [
        `Expand using the distributive law and substitute $i^2 = -1$.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$(a + bi)(c + di)$', operation: 'distribute' },
            { expr: '$ac + adi + bci + bdi^2$', operation: 'substitute $i^2 = -1$' },
            { expr: '$ac + adi + bci - bd$', operation: 'collect real and imaginary parts' },
            { expr: '$(ac - bd) + (ad + bc)i$', tag: 'result' }
          ]
        }
      ],
      conditions: `$a, b, c, d \\in \\mathbb{R}$. Multiplication is commutative and associative.`,
      related_formulas: `- [Multiplication in Polar Form](!/complex-numbers/formulas#multiplication_in_polar_form)\n- [Modulus of a Product](!/complex-numbers/formulas#modulus_of_a_product)\n- [Argument of a Product](!/complex-numbers/formulas#argument_of_a_product)`,
      related_definitions: `- [Complex Number](!/complex-numbers/definitions#complex_number)`
    }
  },
  {
    name: 'Division',
    entity: 'complex_number',
    category: 'Operations',
    formula: `$$\\frac{a + bi}{c + di} = \\frac{(ac + bd) + (bc - ad)i}{c^2 + d^2}$$`,
    link: { label: 'Operations', url: '/complex-numbers/operations#4' },
    fields: {
      explanation: `Multiply numerator and denominator by the conjugate of the denominator. The denominator becomes the real number $|z_2|^2 = c^2 + d^2$, converting the quotient to standard algebraic form. This technique is sometimes called rationalizing the denominator.`,
      derivation: [
        `Multiply top and bottom by $\\overline{c + di} = c - di$.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$\\frac{a + bi}{c + di} \\cdot \\frac{c - di}{c - di}$', operation: 'expand' },
            { expr: '$\\frac{(a + bi)(c - di)}{(c + di)(c - di)}$', operation: 'compute denominator' },
            { expr: '$\\frac{(a + bi)(c - di)}{c^2 + d^2}$', operation: 'expand numerator' },
            { expr: '$\\frac{(ac + bd) + (bc - ad)i}{c^2 + d^2}$', tag: 'result' }
          ]
        }
      ],
      conditions: `$c + di \\neq 0$, equivalently $c^2 + d^2 > 0$.`,
      variants: `Compact form using the conjugate and modulus:\n\n$$\\frac{z_1}{z_2} = \\frac{z_1 \\cdot \\overline{z_2}}{|z_2|^2}$$`,
      related_formulas: `- [Division in Polar Form](!/complex-numbers/formulas#division_in_polar_form)\n- [Multiplicative Inverse](!/complex-numbers/formulas#multiplicative_inverse)\n- [Conjugate Times Number](!/complex-numbers/formulas#conjugate_times_number)`,
      related_definitions: `- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate)\n- [Multiplicative Inverse](!/complex-numbers/definitions#multiplicative_inverse)`
    }
  },
  {
    name: 'Multiplication in Polar Form',
    entity: 'trigonometric_form',
    category: 'Operations',
    formula: `$$z_1 \\cdot z_2 = r_1 r_2 \\bigl[\\cos(\\theta_1 + \\theta_2) + i\\sin(\\theta_1 + \\theta_2)\\bigr]$$`,
    link: { label: 'Trigonometric Form', url: '/complex-numbers/trigonometric-form#10' },
    fields: {
      explanation: `Multiply the moduli and add the arguments. Geometrically, multiplication by $z_2$ scales by $|z_2|$ and rotates counterclockwise by $\\arg(z_2)$. Dramatically simpler than rectangular multiplication when both factors are in polar form.`,
      conditions: `$z_1 = r_1(\\cos\\theta_1 + i\\sin\\theta_1)$ and $z_2 = r_2(\\cos\\theta_2 + i\\sin\\theta_2)$ with $r_1, r_2 \\geq 0$.`,
      variants: `Exponential form:\n\n$$z_1 \\cdot z_2 = r_1 r_2 \\, e^{i(\\theta_1 + \\theta_2)}$$\n\ncis notation:\n\n$$z_1 \\cdot z_2 = r_1 r_2 \\,\\mathrm{cis}(\\theta_1 + \\theta_2)$$`,
      related_formulas: `- [Multiplication](!/complex-numbers/formulas#multiplication)\n- [Division in Polar Form](!/complex-numbers/formulas#division_in_polar_form)\n- [Modulus of a Product](!/complex-numbers/formulas#modulus_of_a_product)\n- [Argument of a Product](!/complex-numbers/formulas#argument_of_a_product)\n- [De Moivre’s Theorem](!/complex-numbers/formulas#de_moivres_theorem)`,
      related_definitions: `- [Trigonometric Form](!/complex-numbers/definitions#trigonometric_form)\n- [Exponential Form](!/complex-numbers/definitions#exponential_form)`
    }
  },
  {
    name: 'Division in Polar Form',
    entity: 'trigonometric_form',
    category: 'Operations',
    formula: `$$\\frac{z_1}{z_2} = \\frac{r_1}{r_2} \\bigl[\\cos(\\theta_1 - \\theta_2) + i\\sin(\\theta_1 - \\theta_2)\\bigr]$$`,
    link: { label: 'Trigonometric Form', url: '/complex-numbers/trigonometric-form#10' },
    fields: {
      explanation: `Divide the moduli and subtract the arguments. Geometrically, division by $z_2$ shrinks by $1/|z_2|$ and rotates clockwise by $\\arg(z_2)$. The inverse of polar multiplication.`,
      conditions: `$z_2 \\neq 0$ (equivalently $r_2 > 0$).`,
      variants: `Exponential form:\n\n$$\\frac{z_1}{z_2} = \\frac{r_1}{r_2} \\, e^{i(\\theta_1 - \\theta_2)}$$\n\ncis notation:\n\n$$\\frac{z_1}{z_2} = \\frac{r_1}{r_2} \\,\\mathrm{cis}(\\theta_1 - \\theta_2)$$`,
      related_formulas: `- [Division](!/complex-numbers/formulas#division)\n- [Multiplication in Polar Form](!/complex-numbers/formulas#multiplication_in_polar_form)\n- [Modulus of a Quotient](!/complex-numbers/formulas#modulus_of_a_quotient)\n- [Argument of a Quotient](!/complex-numbers/formulas#argument_of_a_quotient)`,
      related_definitions: `- [Trigonometric Form](!/complex-numbers/definitions#trigonometric_form)\n- [Exponential Form](!/complex-numbers/definitions#exponential_form)`
    }
  },

  // ─── Category: Conjugate (9 entries) ───

  {
    name: 'Complex Conjugate',
    entity: 'complex_conjugate',
    category: 'Conjugate',
    formula: `$$\\overline{z} = a - bi \\quad \\text{for} \\;\\; z = a + bi$$`,
    link: { label: 'Complex Conjugate', url: '/complex-numbers/complex-conjugate#1' },
    fields: {
      explanation: `Reflects $z$ across the real axis in the complex plane. The real part stays unchanged; the sign of the imaginary part flips. Conjugation is the most important auxiliary operation in complex arithmetic — it underlies division, modulus computation, and classification of real and pure imaginary numbers.`,
      conditions: `Defined for every $z \\in \\mathbb{C}$.`,
      notation: `Written $\\overline{z}$ in pure mathematics, $z^*$ in physics and engineering. Both denote the same operation.`,
      related_formulas: `- [Conjugate of a Conjugate](!/complex-numbers/formulas#conjugate_of_a_conjugate)\n- [Conjugate Times Number](!/complex-numbers/formulas#conjugate_times_number)\n- [Modulus of Conjugate](!/complex-numbers/formulas#modulus_of_conjugate)\n- [Real Number Test](!/complex-numbers/formulas#real_number_test)\n- [Pure Imaginary Test](!/complex-numbers/formulas#pure_imaginary_test)`,
      related_definitions: `- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate)`
    }
  },
  {
    name: 'Conjugate of a Conjugate',
    entity: 'complex_conjugate',
    category: 'Conjugate',
    formula: `$$\\overline{\\overline{z}} = z$$`,
    link: { label: 'Complex Conjugate', url: '/complex-numbers/complex-conjugate#3' },
    fields: {
      explanation: `Conjugation is an involution: applying it twice returns the original number. Geometrically, reflecting twice across the same axis brings every point back to its starting position.`,
      derivation: [
        `Apply the definition twice.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$z = a + bi$', operation: 'conjugate' },
            { expr: '$\\overline{z} = a - bi$', operation: 'conjugate again' },
            { expr: '$\\overline{\\overline{z}} = a - (-b)i = a + bi = z$', tag: 'result' }
          ]
        }
      ],
      related_formulas: `- [Complex Conjugate](!/complex-numbers/formulas#complex_conjugate)`,
      related_definitions: `- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate)`
    }
  },
  {
    name: 'Conjugate of a Sum',
    entity: 'complex_conjugate',
    category: 'Conjugate',
    formula: `$$\\overline{z_1 + z_2} = \\overline{z_1} + \\overline{z_2}$$`,
    link: { label: 'Complex Conjugate', url: '/complex-numbers/complex-conjugate#3' },
    fields: {
      explanation: `Conjugation distributes over addition. The conjugate of a sum equals the sum of the conjugates. Allows term-by-term conjugation of expressions involving complex sums.`,
      conditions: `Holds for any $z_1, z_2 \\in \\mathbb{C}$.`,
      variants: `Same property for differences:\n\n$$\\overline{z_1 - z_2} = \\overline{z_1} - \\overline{z_2}$$`,
      related_formulas: `- [Conjugate of a Product](!/complex-numbers/formulas#conjugate_of_a_product)\n- [Conjugate of a Quotient](!/complex-numbers/formulas#conjugate_of_a_quotient)`,
      related_definitions: `- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate)`
    }
  },
  {
    name: 'Conjugate of a Product',
    entity: 'complex_conjugate',
    category: 'Conjugate',
    formula: `$$\\overline{z_1 \\cdot z_2} = \\overline{z_1} \\cdot \\overline{z_2}$$`,
    link: { label: 'Complex Conjugate', url: '/complex-numbers/complex-conjugate#3' },
    fields: {
      explanation: `Conjugation distributes over multiplication. Allows conjugating each factor independently before multiplying — often simpler than conjugating the full product.`,
      conditions: `Holds for any $z_1, z_2 \\in \\mathbb{C}$.`,
      related_formulas: `- [Conjugate of a Sum](!/complex-numbers/formulas#conjugate_of_a_sum)\n- [Conjugate of a Quotient](!/complex-numbers/formulas#conjugate_of_a_quotient)\n- [Conjugate of a Power](!/complex-numbers/formulas#conjugate_of_a_power)`,
      related_definitions: `- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate)`
    }
  },
  {
    name: 'Conjugate of a Quotient',
    entity: 'complex_conjugate',
    category: 'Conjugate',
    formula: `$$\\overline{\\left(\\frac{z_1}{z_2}\\right)} = \\frac{\\overline{z_1}}{\\overline{z_2}}$$`,
    link: { label: 'Complex Conjugate', url: '/complex-numbers/complex-conjugate#3' },
    fields: {
      explanation: `Conjugation distributes over division. Conjugate the numerator and denominator separately.`,
      conditions: `$z_2 \\neq 0$.`,
      related_formulas: `- [Conjugate of a Product](!/complex-numbers/formulas#conjugate_of_a_product)\n- [Conjugate of a Sum](!/complex-numbers/formulas#conjugate_of_a_sum)`,
      related_definitions: `- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate)`
    }
  },
  {
    name: 'Conjugate of a Power',
    entity: 'complex_conjugate',
    category: 'Conjugate',
    formula: `$$\\overline{z^n} = (\\overline{z})^n$$`,
    link: { label: 'Complex Conjugate', url: '/complex-numbers/complex-conjugate#3' },
    fields: {
      explanation: `Conjugation passes through integer powers. Follows from repeated application of the product rule for positive integers and from the quotient rule for negative integers.`,
      conditions: `$n \\in \\mathbb{Z}$. For negative $n$, additionally require $z \\neq 0$.`,
      related_formulas: `- [Conjugate of a Product](!/complex-numbers/formulas#conjugate_of_a_product)\n- [De Moivre’s Theorem](!/complex-numbers/formulas#de_moivres_theorem)`,
      related_definitions: `- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate)`
    }
  },
  {
    name: 'Conjugate Times Number',
    entity: 'complex_conjugate',
    category: 'Conjugate',
    formula: `$$z \\cdot \\overline{z} = |z|^2 = a^2 + b^2$$`,
    link: { label: 'Absolute Value', url: '/complex-numbers/absolute-value#3' },
    fields: {
      explanation: `The product of a complex number with its conjugate is always the real, non-negative quantity $|z|^2$. The cornerstone identity of complex arithmetic — it makes division by complex numbers possible by converting complex denominators into real ones.`,
      derivation: [
        `Direct expansion.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$(a + bi)(a - bi)$', operation: 'distribute' },
            { expr: '$a^2 - abi + abi - b^2 i^2$', operation: 'cancel cross terms, $i^2 = -1$' },
            { expr: '$a^2 + b^2$', tag: 'result' }
          ]
        }
      ],
      conditions: `Holds for every $z \\in \\mathbb{C}$. Equals zero only when $z = 0$.`,
      related_formulas: `- [Modulus](!/complex-numbers/formulas#modulus)\n- [Modulus Squared](!/complex-numbers/formulas#modulus_squared)\n- [Division](!/complex-numbers/formulas#division)\n- [Multiplicative Inverse](!/complex-numbers/formulas#multiplicative_inverse)`,
      related_definitions: `- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate)\n- [Modulus](!/complex-numbers/definitions#modulus)`
    }
  },
  {
    name: 'Real Number Test',
    entity: 'complex_conjugate',
    category: 'Conjugate',
    formula: `$$z \\in \\mathbb{R} \\iff z = \\overline{z}$$`,
    link: { label: 'Complex Conjugate', url: '/complex-numbers/complex-conjugate#5' },
    fields: {
      explanation: `A complex number is real if and only if it equals its own conjugate. Geometrically, real numbers lie on the real axis — the mirror line for conjugation — so they are fixed under reflection.`,
      derivation: [
        `Forward: if $b = 0$, then $\\overline{z} = a = z$. Reverse: if $a + bi = a - bi$, then $b = 0$.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$z = \\overline{z}$', operation: 'substitute' },
            { expr: '$a + bi = a - bi$', operation: 'compare imaginary parts' },
            { expr: '$2bi = 0$', operation: 'conclude' },
            { expr: '$b = 0 \\;\\Rightarrow\\; z \\in \\mathbb{R}$', tag: 'result' }
          ]
        }
      ],
      related_formulas: `- [Pure Imaginary Test](!/complex-numbers/formulas#pure_imaginary_test)\n- [Complex Conjugate](!/complex-numbers/formulas#complex_conjugate)`,
      related_definitions: `- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate)`
    }
  },
  {
    name: 'Pure Imaginary Test',
    entity: 'pure_imaginary_number',
    category: 'Conjugate',
    formula: `$$z \\;\\text{is pure imaginary} \\iff \\overline{z} = -z$$`,
    link: { label: 'Complex Conjugate', url: '/complex-numbers/complex-conjugate#5' },
    fields: {
      explanation: `A complex number is pure imaginary if and only if its conjugate equals its negative. Pure imaginaries lie on the imaginary axis, perpendicular to the mirror, so reflection sends them to their opposites.`,
      derivation: [
        `Forward: if $a = 0$, then $\\overline{z} = -bi = -z$. Reverse: if $\\overline{z} = -z$, then $a - bi = -a - bi$, forcing $a = 0$.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$\\overline{z} = -z$', operation: 'substitute' },
            { expr: '$a - bi = -a - bi$', operation: 'compare real parts' },
            { expr: '$2a = 0$', operation: 'conclude' },
            { expr: '$a = 0 \\;\\Rightarrow\\; z = bi$', tag: 'result' }
          ]
        }
      ],
      related_formulas: `- [Real Number Test](!/complex-numbers/formulas#real_number_test)\n- [Complex Conjugate](!/complex-numbers/formulas#complex_conjugate)`,
      related_definitions: `- [Pure Imaginary Number](!/complex-numbers/definitions#pure_imaginary_number)`
    }
  },

  // ─── Category: Modulus (7 entries) ───

  {
    name: 'Modulus Squared',
    entity: 'modulus',
    category: 'Modulus',
    formula: `$$|z|^2 = a^2 + b^2$$`,
    link: { label: 'Absolute Value', url: '/complex-numbers/absolute-value#1' },
    fields: {
      explanation: `The square of the modulus equals the sum of squares of the real and imaginary parts. Avoids the square root in $|z|$ — useful in proofs and algebraic manipulations where the squared form is cleaner.`,
      conditions: `Holds for every $z = a + bi \\in \\mathbb{C}$.`,
      variants: `Equivalent forms:\n\n$$|z|^2 = z \\cdot \\overline{z}$$\n\nFrom polar form:\n\n$$|z|^2 = r^2$$`,
      related_formulas: `- [Modulus](!/complex-numbers/formulas#modulus)\n- [Conjugate Times Number](!/complex-numbers/formulas#conjugate_times_number)`,
      related_definitions: `- [Modulus](!/complex-numbers/definitions#modulus)`
    }
  },
  {
    name: 'Modulus of Conjugate',
    entity: 'modulus',
    category: 'Modulus',
    formula: `$$|\\overline{z}| = |z|$$`,
    link: { label: 'Absolute Value', url: '/complex-numbers/absolute-value#4' },
    fields: {
      explanation: `Conjugation preserves modulus. Reflection across the real axis does not change distance from the origin, so $z$ and $\\overline{z}$ lie on the same circle centered at the origin.`,
      derivation: [
        {
          component: 'MathDerivation',
          items: [
            { expr: '$|\\overline{z}| = |a - bi|$', operation: 'apply modulus formula' },
            { expr: '$\\sqrt{a^2 + (-b)^2}$', operation: 'simplify' },
            { expr: '$\\sqrt{a^2 + b^2} = |z|$', tag: 'result' }
          ]
        }
      ],
      related_formulas: `- [Modulus](!/complex-numbers/formulas#modulus)\n- [Complex Conjugate](!/complex-numbers/formulas#complex_conjugate)`,
      related_definitions: `- [Modulus](!/complex-numbers/definitions#modulus)\n- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate)`
    }
  },
  {
    name: 'Modulus of a Product',
    entity: 'modulus',
    category: 'Modulus',
    formula: `$$|z_1 \\cdot z_2| = |z_1| \\cdot |z_2|$$`,
    link: { label: 'Absolute Value', url: '/complex-numbers/absolute-value#4' },
    fields: {
      explanation: `The modulus of a product equals the product of the moduli. Reduces modulus calculations on complicated products to multiplication of individual magnitudes.`,
      conditions: `Holds for any $z_1, z_2 \\in \\mathbb{C}$.`,
      related_formulas: `- [Modulus of a Quotient](!/complex-numbers/formulas#modulus_of_a_quotient)\n- [Modulus of a Power](!/complex-numbers/formulas#modulus_of_a_power)\n- [Multiplication in Polar Form](!/complex-numbers/formulas#multiplication_in_polar_form)`,
      related_definitions: `- [Modulus](!/complex-numbers/definitions#modulus)`
    }
  },
  {
    name: 'Modulus of a Quotient',
    entity: 'modulus',
    category: 'Modulus',
    formula: `$$\\left|\\frac{z_1}{z_2}\\right| = \\frac{|z_1|}{|z_2|}$$`,
    link: { label: 'Absolute Value', url: '/complex-numbers/absolute-value#4' },
    fields: {
      explanation: `The modulus of a quotient equals the quotient of the moduli.`,
      conditions: `$z_2 \\neq 0$.`,
      related_formulas: `- [Modulus of a Product](!/complex-numbers/formulas#modulus_of_a_product)\n- [Division in Polar Form](!/complex-numbers/formulas#division_in_polar_form)`,
      related_definitions: `- [Modulus](!/complex-numbers/definitions#modulus)`
    }
  },
  {
    name: 'Modulus of a Power',
    entity: 'modulus',
    category: 'Modulus',
    formula: `$$|z^n| = |z|^n$$`,
    link: { label: 'Absolute Value', url: '/complex-numbers/absolute-value#4' },
    fields: {
      explanation: `Raising a complex number to the $n$-th power raises its modulus to the $n$-th power. Combined with De Moivre’s theorem, this makes computing moduli of powers trivial.`,
      conditions: `$n \\in \\mathbb{Z}$. For negative $n$, additionally require $z \\neq 0$.`,
      related_formulas: `- [Modulus of a Product](!/complex-numbers/formulas#modulus_of_a_product)\n- [De Moivre’s Theorem](!/complex-numbers/formulas#de_moivres_theorem)`,
      related_definitions: `- [Modulus](!/complex-numbers/definitions#modulus)`
    }
  },
  {
    name: 'Triangle Inequality',
    entity: 'triangle_inequality',
    category: 'Modulus',
    formula: `$$|z_1 + z_2| \\leq |z_1| + |z_2|$$`,
    link: { label: 'Absolute Value', url: '/complex-numbers/absolute-value#5' },
    fields: {
      explanation: `The modulus of a sum never exceeds the sum of moduli. Geometrically, one side of a triangle (the direct path from $0$ to $z_1 + z_2$) cannot exceed the sum of the other two sides (the detour through $z_1$ or $z_2$). Foundation for estimation throughout complex analysis.`,
      conditions: `Holds for any $z_1, z_2 \\in \\mathbb{C}$. Equality holds if and only if $z_1$ and $z_2$ are non-negative real multiples of each other (i.e., point in the same direction from the origin).`,
      variants: `Generalizes to any finite sum:\n\n$$|z_1 + z_2 + \\cdots + z_n| \\leq |z_1| + |z_2| + \\cdots + |z_n|$$`,
      related_formulas: `- [Reverse Triangle Inequality](!/complex-numbers/formulas#reverse_triangle_inequality)\n- [Modulus](!/complex-numbers/formulas#modulus)\n- [Addition](!/complex-numbers/formulas#addition)`,
      related_definitions: `- [Modulus](!/complex-numbers/definitions#modulus)`
    }
  },
  {
    name: 'Reverse Triangle Inequality',
    entity: 'triangle_inequality',
    category: 'Modulus',
    formula: `$$\\bigl||z_1| - |z_2|\\bigr| \\leq |z_1 - z_2|$$`,
    link: { label: 'Absolute Value', url: '/complex-numbers/absolute-value#7' },
    fields: {
      explanation: `The absolute difference of moduli never exceeds the modulus of the difference. Useful for bounding how much $|z|$ can change as $z$ varies.`,
      derivation: [
        `Apply the triangle inequality twice and combine.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$|z_1| = |(z_1 - z_2) + z_2| \\leq |z_1 - z_2| + |z_2|$', operation: 'rearrange' },
            { expr: '$|z_1| - |z_2| \\leq |z_1 - z_2|$', operation: 'swap roles, repeat' },
            { expr: '$|z_2| - |z_1| \\leq |z_1 - z_2|$', operation: 'combine' },
            { expr: '$\\bigl||z_1| - |z_2|\\bigr| \\leq |z_1 - z_2|$', tag: 'result' }
          ]
        }
      ],
      conditions: `Holds for any $z_1, z_2 \\in \\mathbb{C}$.`,
      related_formulas: `- [Triangle Inequality](!/complex-numbers/formulas#triangle_inequality)\n- [Modulus](!/complex-numbers/formulas#modulus)`,
      related_definitions: `- [Modulus](!/complex-numbers/definitions#modulus)`
    }
  },

  // ─── Category: Powers & Roots (5 entries) ───

  {
    name: 'De Moivre’s Theorem',
    entity: 'de_moivres_theorem',
    category: 'Powers & Roots',
    formula: `$$(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$$`,
    link: { label: 'De Moivre Theorem', url: '/complex-numbers/demoivre-theorem#2' },
    fields: {
      explanation: `Raising a unit-modulus complex number to the $n$-th power multiplies its argument by $n$. Reduces high powers of complex numbers to elementary angle arithmetic — no binomial expansion, no tracking powers of $i$.`,
      derivation: [
        `Induction on $n$, using the multiplication-in-polar-form rule.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$n = 1$: trivially holds', operation: 'inductive step' },
            { expr: '$(\\cos\\theta + i\\sin\\theta)^{k+1} = (\\cos\\theta + i\\sin\\theta)^k \\cdot (\\cos\\theta + i\\sin\\theta)$', operation: 'apply hypothesis and product rule' },
            { expr: '$= \\cos(k\\theta + \\theta) + i\\sin(k\\theta + \\theta)$', operation: 'simplify' },
            { expr: '$= \\cos((k+1)\\theta) + i\\sin((k+1)\\theta)$', tag: 'result' }
          ]
        }
      ],
      conditions: `$n \\in \\mathbb{Z}$. For negative $n$, use $z^{-n} = 1/z^n$.`,
      variants: `For arbitrary modulus:\n\n$$z^n = r^n \\bigl[\\cos(n\\theta) + i\\sin(n\\theta)\\bigr]$$\n\nIn exponential form:\n\n$$(re^{i\\theta})^n = r^n e^{in\\theta}$$`,
      related_formulas: `- [Power in Polar Form](!/complex-numbers/formulas#power_in_polar_form)\n- [Nth Roots Formula](!/complex-numbers/formulas#nth_roots_formula)\n- [Roots of Unity](!/complex-numbers/formulas#roots_of_unity)\n- [Euler’s Formula](!/complex-numbers/formulas#eulers_formula)`,
      related_definitions: `- [Trigonometric Form](!/complex-numbers/definitions#trigonometric_form)\n- [Argument](!/complex-numbers/definitions#argument)`
    }
  },
  {
    name: 'Power in Polar Form',
    entity: 'exponential_form',
    category: 'Powers & Roots',
    formula: `$$z^n = r^n e^{in\\theta}$$`,
    link: { label: 'Exponential Form', url: '/complex-numbers/exponential-form#8' },
    fields: {
      explanation: `Exponential-form statement of De Moivre’s theorem. Raises modulus to the $n$-th power and multiplies argument by $n$. Direct consequence of the exponent rule $(e^{i\\theta})^n = e^{in\\theta}$.`,
      conditions: `$n \\in \\mathbb{Z}$. For $n < 0$, require $z \\neq 0$.`,
      variants: `Trigonometric form:\n\n$$z^n = r^n \\bigl[\\cos(n\\theta) + i\\sin(n\\theta)\\bigr]$$`,
      related_formulas: `- [De Moivre’s Theorem](!/complex-numbers/formulas#de_moivres_theorem)\n- [Modulus of a Power](!/complex-numbers/formulas#modulus_of_a_power)\n- [Argument of a Power](!/complex-numbers/formulas#argument_of_a_power)\n- [Nth Roots Formula](!/complex-numbers/formulas#nth_roots_formula)`,
      related_definitions: `- [Exponential Form](!/complex-numbers/definitions#exponential_form)`
    }
  },
  {
    name: 'Nth Roots Formula',
    entity: 'roots_of_unity',
    category: 'Powers & Roots',
    formula: `$$z_k = R^{1/n} \\bigl[\\cos\\!\\left(\\tfrac{\\phi + 2\\pi k}{n}\\right) + i\\sin\\!\\left(\\tfrac{\\phi + 2\\pi k}{n}\\right)\\bigr], \\quad k = 0, 1, \\ldots, n-1$$`,
    link: { label: 'De Moivre Theorem', url: '/complex-numbers/demoivre-theorem#6' },
    fields: {
      explanation: `Every nonzero complex number $w = Re^{i\\phi}$ has exactly $n$ distinct $n$-th roots. They share the modulus $R^{1/n}$ and are spaced uniformly around the origin at angular intervals of $2\\pi/n$, forming the vertices of a regular $n$-gon.`,
      derivation: [
        `Solve $z^n = w$ in polar form.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$r^n e^{in\\alpha} = R e^{i\\phi}$', operation: 'match moduli and arguments' },
            { expr: '$r = R^{1/n}, \\quad n\\alpha = \\phi + 2\\pi k$', operation: 'solve for $\\alpha$' },
            { expr: '$\\alpha = \\frac{\\phi + 2\\pi k}{n}$', operation: 'enumerate $k = 0, \\ldots, n-1$' },
            { expr: '$z_k = R^{1/n} e^{i(\\phi + 2\\pi k)/n}$', tag: 'result' }
          ]
        }
      ],
      conditions: `$w \\neq 0$ and $n$ is a positive integer. The $n$ roots are distinct; for $k \\geq n$ they repeat modulo $2\\pi$.`,
      variants: `Exponential form:\n\n$$z_k = R^{1/n} e^{i(\\phi + 2\\pi k)/n}$$`,
      related_formulas: `- [Roots of Unity](!/complex-numbers/formulas#roots_of_unity)\n- [De Moivre’s Theorem](!/complex-numbers/formulas#de_moivres_theorem)\n- [Power in Polar Form](!/complex-numbers/formulas#power_in_polar_form)`,
      related_definitions: `- [Roots of Unity](!/complex-numbers/definitions#roots_of_unity)\n- [Exponential Form](!/complex-numbers/definitions#exponential_form)`
    }
  },
  {
    name: 'Roots of Unity',
    entity: 'roots_of_unity',
    category: 'Powers & Roots',
    formula: `$$z_k = e^{i \\, 2\\pi k / n}, \\quad k = 0, 1, \\ldots, n-1$$`,
    link: { label: 'De Moivre Theorem', url: '/complex-numbers/demoivre-theorem#8' },
    fields: {
      explanation: `The $n$ solutions to $z^n = 1$. All lie on the unit circle, equally spaced at angles $2\\pi/n$ apart, forming the vertices of a regular $n$-gon with one vertex at $1$.`,
      conditions: `$n$ is a positive integer.`,
      variants: `Trigonometric form:\n\n$$z_k = \\cos\\!\\left(\\tfrac{2\\pi k}{n}\\right) + i\\sin\\!\\left(\\tfrac{2\\pi k}{n}\\right)$$\n\nGenerated by the primitive root:\n\n$$z_k = \\omega^k, \\quad \\omega = e^{i \\, 2\\pi / n}$$`,
      related_formulas: `- [Sum of Roots of Unity](!/complex-numbers/formulas#sum_of_roots_of_unity)\n- [Nth Roots Formula](!/complex-numbers/formulas#nth_roots_formula)\n- [De Moivre’s Theorem](!/complex-numbers/formulas#de_moivres_theorem)`,
      related_definitions: `- [Roots of Unity](!/complex-numbers/definitions#roots_of_unity)`
    }
  },
  {
    name: 'Sum of Roots of Unity',
    entity: 'roots_of_unity',
    category: 'Powers & Roots',
    formula: `$$\\sum_{k=0}^{n-1} e^{i \\, 2\\pi k / n} = 0 \\quad (n \\geq 2)$$`,
    link: { label: 'De Moivre Theorem', url: '/complex-numbers/demoivre-theorem#9' },
    fields: {
      explanation: `The sum of all $n$-th roots of unity is zero whenever $n \\geq 2$. Geometrically, the roots form a regular polygon centered at the origin — placed tip-to-tail as vectors, they return to the starting point. Algebraically, this is a finite geometric series with ratio $\\omega \\neq 1$.`,
      derivation: [
        `Apply the geometric-series formula with ratio $\\omega = e^{i \\, 2\\pi/n}$.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$\\sum_{k=0}^{n-1} \\omega^k = \\frac{1 - \\omega^n}{1 - \\omega}$', operation: 'use $\\omega^n = 1$' },
            { expr: '$= \\frac{1 - 1}{1 - \\omega} = 0$', tag: 'result' }
          ]
        }
      ],
      conditions: `$n \\geq 2$. For $n = 1$ the only root is $1$ itself, so the sum equals $1$.`,
      related_formulas: `- [Roots of Unity](!/complex-numbers/formulas#roots_of_unity)`,
      related_definitions: `- [Roots of Unity](!/complex-numbers/definitions#roots_of_unity)`
    }
  },

  // ─── Category: Identities (4 entries) ───

  {
    name: 'Euler’s Formula',
    entity: 'eulers_formula',
    category: 'Identities',
    formula: `$$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$$`,
    link: { label: 'Exponential Form', url: '/complex-numbers/exponential-form#1' },
    fields: {
      explanation: `Connects exponential and trigonometric functions through the imaginary unit. Foundation of the exponential form of complex numbers and of every operation in polar coordinates.`,
      derivation: [
        `Substitute $x = i\\theta$ into the Taylor series of $e^x$ and separate real and imaginary parts.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$e^{i\\theta} = \\sum_{k=0}^{\\infty} \\frac{(i\\theta)^k}{k!}$', operation: 'expand using powers of $i$' },
            { expr: '$= \\left(1 - \\tfrac{\\theta^2}{2!} + \\tfrac{\\theta^4}{4!} - \\cdots\\right) + i\\left(\\theta - \\tfrac{\\theta^3}{3!} + \\tfrac{\\theta^5}{5!} - \\cdots\\right)$', operation: 'recognize Taylor series' },
            { expr: '$= \\cos\\theta + i\\sin\\theta$', tag: 'result' }
          ]
        }
      ],
      conditions: `$\\theta \\in \\mathbb{R}$. Extends to complex $\\theta$ in advanced analysis.`,
      variants: `Inverse forms (express $\\cos$ and $\\sin$ via exponentials):\n\n$$\\cos\\theta = \\frac{e^{i\\theta} + e^{-i\\theta}}{2}, \\qquad \\sin\\theta = \\frac{e^{i\\theta} - e^{-i\\theta}}{2i}$$`,
      related_formulas: `- [Euler’s Identity](!/complex-numbers/formulas#eulers_identity)\n- [Exponential Form](!/complex-numbers/formulas#exponential_form)\n- [De Moivre’s Theorem](!/complex-numbers/formulas#de_moivres_theorem)`,
      related_definitions: `- [Exponential Form](!/complex-numbers/definitions#exponential_form)\n- [Argument](!/complex-numbers/definitions#argument)`
    }
  },
  {
    name: 'Euler’s Identity',
    entity: 'eulers_identity',
    category: 'Identities',
    formula: `$$e^{i\\pi} + 1 = 0$$`,
    link: { label: 'Exponential Form', url: '/complex-numbers/exponential-form#3' },
    fields: {
      explanation: `Special case of Euler’s formula at $\\theta = \\pi$. Connects five fundamental constants — $e$, $i$, $\\pi$, $1$, and $0$ — in a single equation. Often cited as the most elegant equation in mathematics.`,
      derivation: [
        {
          component: 'MathDerivation',
          items: [
            { expr: 'Set $\\theta = \\pi$ in $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$', operation: 'evaluate' },
            { expr: '$e^{i\\pi} = \\cos\\pi + i\\sin\\pi = -1 + 0$', operation: 'rearrange' },
            { expr: '$e^{i\\pi} + 1 = 0$', tag: 'result' }
          ]
        }
      ],
      related_formulas: `- [Euler’s Formula](!/complex-numbers/formulas#eulers_formula)`,
      related_definitions: `- [Exponential Form](!/complex-numbers/definitions#exponential_form)`
    }
  },
  {
    name: 'Powers of i Cycle',
    entity: 'imaginary_unit',
    category: 'Identities',
    formula: `$$i^1 = i, \\quad i^2 = -1, \\quad i^3 = -i, \\quad i^4 = 1$$`,
    link: { label: 'Imaginary Numbers', url: '/complex-numbers/imaginary-numbers#5' },
    fields: {
      explanation: `Powers of $i$ cycle through four values with period 4. To compute $i^k$ for any integer $k$, divide $k$ by 4 and use the remainder.`,
      conditions: `$k \\in \\mathbb{Z}$. The cycle extends to negative exponents: $i^{-1} = -i$, $i^{-2} = -1$, etc.`,
      variants: `General formula via remainder:\n\n$$i^k = i^{k \\bmod 4}$$\n\nIn polar form, $i = e^{i\\pi/2}$, so $i^k = e^{ik\\pi/2}$ — multiplication by $i$ is a $90°$ rotation.`,
      related_formulas: `- [De Moivre’s Theorem](!/complex-numbers/formulas#de_moivres_theorem)\n- [Roots of Unity](!/complex-numbers/formulas#roots_of_unity)`,
      related_definitions: `- [Imaginary Unit](!/complex-numbers/definitions#imaginary_unit)`
    }
  },
  {
    name: 'Square Root of Negative',
    entity: 'imaginary_unit',
    category: 'Identities',
    formula: `$$\\sqrt{-a} = i\\sqrt{a} \\quad (a > 0)$$`,
    link: { label: 'Imaginary Numbers', url: '/complex-numbers/imaginary-numbers#2' },
    fields: {
      explanation: `Extracts the imaginary unit from the square root of a negative real number. Verification: $(i\\sqrt{a})^2 = i^2 \\cdot a = -a$.`,
      conditions: `$a > 0$. The standard product rule $\\sqrt{xy} = \\sqrt{x}\\sqrt{y}$ does NOT hold when both factors are negative — always extract $i$ from each negative radicand before multiplying.`,
      variants: `Common pitfall: $\\sqrt{-1} \\cdot \\sqrt{-1} \\neq \\sqrt{(-1)(-1)} = 1$. Correct: $\\sqrt{-1} \\cdot \\sqrt{-1} = i \\cdot i = -1$.`,
      related_formulas: `- [Powers of i Cycle](!/complex-numbers/formulas#powers_of_i_cycle)`,
      related_definitions: `- [Imaginary Unit](!/complex-numbers/definitions#imaginary_unit)\n- [Imaginary Number](!/complex-numbers/definitions#imaginary_number)`
    }
  },

  // ─── Category: Argument (5 entries) ───

  {
    name: 'Argument of a Product',
    entity: 'argument',
    category: 'Argument',
    formula: `$$\\arg(z_1 \\cdot z_2) = \\arg(z_1) + \\arg(z_2)$$`,
    link: { label: 'Properties', url: '/complex-numbers/properties#6' },
    fields: {
      explanation: `Multiplying complex numbers adds their arguments. Geometrically, multiplication by $z_2$ rotates by $\\arg(z_2)$. Equality holds modulo $2\\pi$ since arguments are determined only up to multiples of $2\\pi$.`,
      conditions: `$z_1, z_2 \\neq 0$. When using the principal argument $\\mathrm{Arg}$, the result may need normalization to stay in $(-\\pi, \\pi]$.`,
      related_formulas: `- [Argument of a Quotient](!/complex-numbers/formulas#argument_of_a_quotient)\n- [Argument of a Power](!/complex-numbers/formulas#argument_of_a_power)\n- [Multiplication in Polar Form](!/complex-numbers/formulas#multiplication_in_polar_form)`,
      related_definitions: `- [Argument](!/complex-numbers/definitions#argument)`
    }
  },
  {
    name: 'Argument of a Quotient',
    entity: 'argument',
    category: 'Argument',
    formula: `$$\\arg\\!\\left(\\frac{z_1}{z_2}\\right) = \\arg(z_1) - \\arg(z_2)$$`,
    link: { label: 'Properties', url: '/complex-numbers/properties#6' },
    fields: {
      explanation: `Dividing complex numbers subtracts their arguments. Geometrically, division by $z_2$ rotates clockwise by $\\arg(z_2)$. Modulo $2\\pi$.`,
      conditions: `$z_1, z_2 \\neq 0$.`,
      related_formulas: `- [Argument of a Product](!/complex-numbers/formulas#argument_of_a_product)\n- [Division in Polar Form](!/complex-numbers/formulas#division_in_polar_form)`,
      related_definitions: `- [Argument](!/complex-numbers/definitions#argument)`
    }
  },
  {
    name: 'Argument of a Power',
    entity: 'argument',
    category: 'Argument',
    formula: `$$\\arg(z^n) = n \\cdot \\arg(z)$$`,
    link: { label: 'Properties', url: '/complex-numbers/properties#6' },
    fields: {
      explanation: `Raising to the $n$-th power multiplies the argument by $n$. Direct consequence of the product rule applied $n$ times. Underlies De Moivre’s theorem.`,
      conditions: `$z \\neq 0$ and $n \\in \\mathbb{Z}$. Modulo $2\\pi$.`,
      related_formulas: `- [Argument of a Product](!/complex-numbers/formulas#argument_of_a_product)\n- [De Moivre’s Theorem](!/complex-numbers/formulas#de_moivres_theorem)\n- [Modulus of a Power](!/complex-numbers/formulas#modulus_of_a_power)`,
      related_definitions: `- [Argument](!/complex-numbers/definitions#argument)`
    }
  },
  {
    name: 'Argument of Conjugate',
    entity: 'argument',
    category: 'Argument',
    formula: `$$\\arg(\\overline{z}) = -\\arg(z)$$`,
    link: { label: 'Properties', url: '/complex-numbers/properties#6' },
    fields: {
      explanation: `Conjugation reflects across the real axis, negating the angle. The modulus is preserved.`,
      conditions: `$z \\neq 0$.`,
      related_formulas: `- [Modulus of Conjugate](!/complex-numbers/formulas#modulus_of_conjugate)\n- [Complex Conjugate](!/complex-numbers/formulas#complex_conjugate)`,
      related_definitions: `- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate)\n- [Argument](!/complex-numbers/definitions#argument)`
    }
  },
  {
    name: 'Argument of Negative',
    entity: 'argument',
    category: 'Argument',
    formula: `$$\\arg(-z) = \\arg(z) + \\pi$$`,
    link: { label: 'Properties', url: '/complex-numbers/properties#6' },
    fields: {
      explanation: `Negation rotates by $180°$. Geometrically, $-z$ is the diametrically opposite point through the origin.`,
      conditions: `$z \\neq 0$. Modulo $2\\pi$.`,
      related_formulas: `- [Additive Inverse](!/complex-numbers/formulas#additive_inverse)\n- [Argument of Conjugate](!/complex-numbers/formulas#argument_of_conjugate)`,
      related_definitions: `- [Additive Inverse](!/complex-numbers/definitions#additive_inverse)\n- [Argument](!/complex-numbers/definitions#argument)`
    }
  },

  // ─── Category: Inverses & Distance (4 entries) ───

  {
    name: 'Additive Inverse',
    entity: 'additive_inverse',
    category: 'Inverses & Distance',
    formula: `$$-z = -a - bi \\quad \\text{for} \\;\\; z = a + bi$$`,
    link: { label: 'Additive Inverse', url: '/complex-numbers/additive-inverse#2' },
    fields: {
      explanation: `The unique complex number satisfying $z + (-z) = 0$. Both real and imaginary parts negate. Geometrically, reflection through the origin (rotation by $180°$).`,
      conditions: `Defined for every $z \\in \\mathbb{C}$. The number $0$ is its own additive inverse.`,
      variants: `Properties: $|-z| = |z|$, $\\arg(-z) = \\arg(z) + \\pi$, $-(-z) = z$.`,
      related_formulas: `- [Subtraction](!/complex-numbers/formulas#subtraction)\n- [Argument of Negative](!/complex-numbers/formulas#argument_of_negative)`,
      related_definitions: `- [Additive Inverse](!/complex-numbers/definitions#additive_inverse)`
    }
  },
  {
    name: 'Multiplicative Inverse',
    entity: 'multiplicative_inverse',
    category: 'Inverses & Distance',
    formula: `$$z^{-1} = \\frac{\\overline{z}}{|z|^2} = \\frac{a - bi}{a^2 + b^2}$$`,
    link: { label: 'Multiplicative Inverse', url: '/complex-numbers/multiplicative-inverse#2' },
    fields: {
      explanation: `The unique complex number satisfying $z \\cdot z^{-1} = 1$. Found by multiplying $1/z$ by $\\overline{z}/\\overline{z}$, which converts the denominator to the real number $|z|^2$.`,
      derivation: [
        `Rationalize $1/(a+bi)$ using the conjugate.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$\\frac{1}{a + bi} \\cdot \\frac{a - bi}{a - bi}$', operation: 'expand' },
            { expr: '$\\frac{a - bi}{a^2 + b^2}$', operation: 'identify $|z|^2 = a^2 + b^2$' },
            { expr: '$z^{-1} = \\frac{\\overline{z}}{|z|^2}$', tag: 'result' }
          ]
        }
      ],
      conditions: `$z \\neq 0$. The number $0$ has no multiplicative inverse.`,
      variants: `In polar form:\n\n$$z^{-1} = \\frac{1}{r} e^{-i\\theta}$$\n\nProperties: $|z^{-1}| = 1/|z|$, $\\arg(z^{-1}) = -\\arg(z)$.`,
      related_formulas: `- [Division](!/complex-numbers/formulas#division)\n- [Conjugate Times Number](!/complex-numbers/formulas#conjugate_times_number)\n- [Modulus of Inverse](!/complex-numbers/formulas#modulus_of_inverse)`,
      related_definitions: `- [Multiplicative Inverse](!/complex-numbers/definitions#multiplicative_inverse)\n- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate)`
    }
  },
  {
    name: 'Modulus of Inverse',
    entity: 'multiplicative_inverse',
    category: 'Inverses & Distance',
    formula: `$$|z^{-1}| = \\frac{1}{|z|}$$`,
    link: { label: 'Multiplicative Inverse', url: '/complex-numbers/multiplicative-inverse#5' },
    fields: {
      explanation: `The modulus of the inverse is the reciprocal of the modulus. Numbers far from the origin have inverses close to the origin, and vice versa. Numbers on the unit circle have inverses also on the unit circle.`,
      conditions: `$z \\neq 0$.`,
      related_formulas: `- [Multiplicative Inverse](!/complex-numbers/formulas#multiplicative_inverse)\n- [Modulus of a Quotient](!/complex-numbers/formulas#modulus_of_a_quotient)`,
      related_definitions: `- [Multiplicative Inverse](!/complex-numbers/definitions#multiplicative_inverse)\n- [Modulus](!/complex-numbers/definitions#modulus)`
    }
  },
  {
    name: 'Distance Between Complex Numbers',
    entity: 'modulus',
    category: 'Inverses & Distance',
    formula: `$$d(z_1, z_2) = |z_1 - z_2| = \\sqrt{(a_1 - a_2)^2 + (b_1 - b_2)^2}$$`,
    link: { label: 'Absolute Value', url: '/complex-numbers/absolute-value#8' },
    fields: {
      explanation: `Euclidean distance between two points in the complex plane. The modulus of the difference equals the straight-line distance — direct application of the Pythagorean theorem to the right triangle with legs $|a_1 - a_2|$ and $|b_1 - b_2|$.`,
      conditions: `Defined for all $z_1, z_2 \\in \\mathbb{C}$. Equals zero if and only if $z_1 = z_2$.`,
      variants: `Locus interpretation: the set $\\{z : |z - z_0| = r\\}$ is a circle of radius $r$ centered at $z_0$.`,
      related_formulas: `- [Modulus](!/complex-numbers/formulas#modulus)\n- [Subtraction](!/complex-numbers/formulas#subtraction)\n- [Triangle Inequality](!/complex-numbers/formulas#triangle_inequality)`,
      related_definitions: `- [Modulus](!/complex-numbers/definitions#modulus)\n- [Complex Plane](!/complex-numbers/definitions#complex_plane)`
    }
  },

  // ─── Category: Polynomial Theory (5 entries) ───

  {
    name: 'Fundamental Theorem of Algebra',
    entity: 'fundamental_theorem_of_algebra',
    category: 'Polynomial Theory',
    formula: `$$p(z) = a_n(z - z_1)(z - z_2) \\cdots (z - z_n)$$`,
    link: { label: 'Equations & Polynomials', url: '/complex-numbers/equations-polynomials#2' },
    fields: {
      explanation: `Every non-constant polynomial with complex coefficients factors completely into linear terms over $\\mathbb{C}$. A polynomial of degree $n$ has exactly $n$ roots, counted with multiplicity. This is what makes $\\mathbb{C}$ algebraically closed — no further extension of the number system is needed to solve polynomial equations.`,
      conditions: `$p(z)$ has degree $n \\geq 1$ with coefficients in $\\mathbb{C}$. The leading coefficient is $a_n \\neq 0$. Roots $z_1, \\ldots, z_n$ may repeat.`,
      notation: `A root with multiplicity $m$ appears $m$ times in the factorization. The total number of roots, counting multiplicity, equals the degree.`,
      related_formulas: `- [Conjugate Root Theorem](!/complex-numbers/formulas#conjugate_root_theorem)\n- [Vieta’s Quadratic](!/complex-numbers/formulas#vietas_quadratic)\n- [Quadratic Formula in Complex](!/complex-numbers/formulas#quadratic_formula_in_complex)`,
      related_definitions: `- [Complex Number](!/complex-numbers/definitions#complex_number)`
    }
  },
  {
    name: 'Conjugate Root Theorem',
    entity: 'fundamental_theorem_of_algebra',
    category: 'Polynomial Theory',
    formula: `$$p(z_0) = 0 \\;\\Rightarrow\\; p(\\overline{z_0}) = 0 \\quad \\text{(real coefficients)}$$`,
    link: { label: 'Equations & Polynomials', url: '/complex-numbers/equations-polynomials#5' },
    fields: {
      explanation: `For a polynomial with real coefficients, complex roots come in conjugate pairs. If $z_0$ is a root, so is $\\overline{z_0}$. Consequence: every real polynomial of odd degree has at least one real root.`,
      derivation: [
        `Use the fact that $\\overline{a_k} = a_k$ for real coefficients and that conjugation distributes over sums and products.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$\\overline{p(z_0)} = \\overline{a_n z_0^n + \\cdots + a_0}$', operation: 'distribute conjugate' },
            { expr: '$= a_n \\overline{z_0}^n + \\cdots + a_0 = p(\\overline{z_0})$', operation: 'apply $p(z_0) = 0$' },
            { expr: '$\\overline{0} = 0 \\;\\Rightarrow\\; p(\\overline{z_0}) = 0$', tag: 'result' }
          ]
        }
      ],
      conditions: `All coefficients $a_k$ must be real. Theorem fails for polynomials with non-real coefficients.`,
      related_formulas: `- [Fundamental Theorem of Algebra](!/complex-numbers/formulas#fundamental_theorem_of_algebra)\n- [Complex Conjugate](!/complex-numbers/formulas#complex_conjugate)`,
      related_definitions: `- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate)`
    }
  },
  {
    name: 'Quadratic Formula in Complex',
    entity: 'complex_number',
    category: 'Polynomial Theory',
    formula: `$$z = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$`,
    link: { label: 'Equations & Polynomials', url: '/complex-numbers/equations-polynomials#6' },
    fields: {
      explanation: `The quadratic formula extends to complex coefficients without modification. Every quadratic equation $az^2 + bz + c = 0$ has exactly two roots in $\\mathbb{C}$ (counting multiplicity), regardless of whether the discriminant is real or complex.`,
      conditions: `$a, b, c \\in \\mathbb{C}$ and $a \\neq 0$. When the discriminant is complex, computing $\\sqrt{b^2 - 4ac}$ requires the $n$-th roots formula or De Moivre’s theorem.`,
      variants: `For real coefficients with negative discriminant $b^2 - 4ac < 0$:\n\n$$z = \\frac{-b \\pm i\\sqrt{4ac - b^2}}{2a}$$`,
      related_formulas: `- [Vieta’s Quadratic](!/complex-numbers/formulas#vietas_quadratic)\n- [Fundamental Theorem of Algebra](!/complex-numbers/formulas#fundamental_theorem_of_algebra)\n- [Conjugate Root Theorem](!/complex-numbers/formulas#conjugate_root_theorem)`,
      related_definitions: `- [Complex Number](!/complex-numbers/definitions#complex_number)`
    }
  },
  {
    name: 'Vieta’s Quadratic',
    entity: 'vietas_formulas',
    category: 'Polynomial Theory',
    formula: `$$z_1 + z_2 = -\\frac{b}{a}, \\qquad z_1 \\cdot z_2 = \\frac{c}{a}$$`,
    link: { label: 'Equations & Polynomials', url: '/complex-numbers/equations-polynomials#4' },
    fields: {
      explanation: `Relates the roots of a quadratic $az^2 + bz + c = 0$ to its coefficients without solving the equation. Same form as in the real case — Vieta’s formulas extend to complex roots unchanged.`,
      conditions: `$a \\neq 0$. Coefficients may be real or complex.`,
      related_formulas: `- [Vieta’s General](!/complex-numbers/formulas#vietas_general)\n- [Quadratic Formula in Complex](!/complex-numbers/formulas#quadratic_formula_in_complex)\n- [Fundamental Theorem of Algebra](!/complex-numbers/formulas#fundamental_theorem_of_algebra)`,
      related_definitions: `- [Complex Number](!/complex-numbers/definitions#complex_number)`
    }
  },
  {
    name: 'Vieta’s General',
    entity: 'vietas_formulas',
    category: 'Polynomial Theory',
    formula: `$$\\sum_{i} r_i = -\\frac{a_{n-1}}{a_n}, \\qquad \\prod_{i} r_i = (-1)^n \\frac{a_0}{a_n}$$`,
    link: { label: 'Equations & Polynomials', url: '/complex-numbers/equations-polynomials#4' },
    fields: {
      explanation: `For a polynomial of degree $n$, the elementary symmetric sums of its roots equal the coefficients (up to sign and division by $a_n$). The sum of roots and the product of roots are the simplest cases; intermediate symmetric sums correspond to coefficients in between.`,
      conditions: `$a_n \\neq 0$. Roots $r_1, \\ldots, r_n$ are the $n$ roots in $\\mathbb{C}$ (with multiplicity).`,
      variants: `For monic cubic $z^3 + bz^2 + cz + d = 0$ with roots $r_1, r_2, r_3$:\n\n$$r_1 + r_2 + r_3 = -b$$\n$$r_1 r_2 + r_1 r_3 + r_2 r_3 = c$$\n$$r_1 r_2 r_3 = -d$$`,
      related_formulas: `- [Vieta’s Quadratic](!/complex-numbers/formulas#vietas_quadratic)\n- [Fundamental Theorem of Algebra](!/complex-numbers/formulas#fundamental_theorem_of_algebra)`,
      related_definitions: `- [Complex Number](!/complex-numbers/definitions#complex_number)`
    }
  },

];

export default complexNumbersFormulasList;