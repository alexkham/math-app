const complexNumbersTermsList = [


      // ===== FOUNDATIONS (7) =====
 
  {
    id: 'complex_number',
    name: 'Complex Number',
    category: 'Foundations',
    formula: `A number of the form $z = a + bi$, where $a, b \\in \\mathbb{R}$ and $i$ is the [imaginary unit](!/complex-numbers/definitions#imaginary_unit)`,
    link: { url: '/complex-numbers/algebraic-form#1', text: 'Algebraic Form' },
    intuition: `Extends the real number line into a two-dimensional number system by introducing a second component scaled by $i$. Every real number is a complex number with $b = 0$.`,
    notation: `Typically denoted $z$ or $w$. The set of all complex numbers is $\\mathbb{C}$.`,
    'related concepts': `
- [Real Part](!/complex-numbers/definitions#real_part)
- [Imaginary Part](!/complex-numbers/definitions#imaginary_part)
- [Algebraic Form](!/complex-numbers/definitions#algebraic_form)
- [Imaginary Number](!/complex-numbers/definitions#imaginary_number)`,
  },
 
  {
    id: 'imaginary_unit',
    name: 'Imaginary Unit',
    category: 'Foundations',
    formula: `The number $i$ defined by $i^2 = -1$`,
    link: { url: '/complex-numbers/imaginary-numbers#1', text: 'Imaginary Numbers' },
    intuition: `A number that, when squared, gives $-1$. It cannot be placed on the real number line and serves as the building block for all imaginary and complex numbers.`,
    notation: `Denoted $i$. Some engineering texts use $j$ to avoid confusion with electric current.`,
    properties: `
• $i^0 = 1$
• $i^1 = i$
• $i^2 = -1$
• $i^3 = -i$
• $i^4 = 1$ (cycle repeats every 4 powers)`,
    'related concepts': `
- [Imaginary Number](!/complex-numbers/definitions#imaginary_number)
- [Complex Number](!/complex-numbers/definitions#complex_number)`,
  },
 
  {
    id: 'imaginary_number',
    name: 'Imaginary Number',
    category: 'Foundations',
    formula: `A number of the form $bi$, where $b \\in \\mathbb{R}$ and $b \\neq 0$`,
    link: { url: '/complex-numbers/imaginary-numbers#3', text: 'Imaginary Numbers' },
    intuition: `A real multiple of the imaginary unit. Imaginary numbers lie on the vertical axis of the complex plane and have no real component.`,
    'common errors': `Confusing "imaginary number" ($bi$, purely imaginary) with "complex number" ($a + bi$, which includes a real part). Every imaginary number is complex, but not every complex number is imaginary.`,
    'related concepts': `
- [Imaginary Unit](!/complex-numbers/definitions#imaginary_unit)
- [Pure Imaginary Number](!/complex-numbers/definitions#pure_imaginary_number)
- [Complex Plane](!/complex-numbers/definitions#complex_plane)`,
  },
 
  {
    id: 'pure_imaginary_number',
    name: 'Pure Imaginary Number',
    category: 'Foundations',
    formula: `A complex number $z = a + bi$ where $a = 0$ and $b \\neq 0$`,
    link: { url: '/complex-numbers/imaginary-numbers#3', text: 'Imaginary Numbers' },
    intuition: `A complex number with zero real part. Equivalent to an imaginary number — the term "pure" emphasizes the absence of any real component.`,
    examples: `$3i$, $-7i$, $\\frac{i}{2}$ are all pure imaginary. The number $2 + 3i$ is not, because its real part is nonzero.`,
    'related concepts': `
- [Imaginary Number](!/complex-numbers/definitions#imaginary_number)
- [Real Part](!/complex-numbers/definitions#real_part)`,
  },
 
  {
    id: 'real_part',
    name: 'Real Part',
    category: 'Foundations',
    formula: `For $z = a + bi$, the real part is $\\operatorname{Re}(z) = a$`,
    link: { url: '/complex-numbers/algebraic-form#21', text: 'Algebraic Form' },
    intuition: `The component of a complex number that lies along the horizontal axis of the complex plane. It is an ordinary real number.`,
    notation: `Written $\\operatorname{Re}(z)$ or $\\text{Re}\\,z$.`,
    'related concepts': `
- [Imaginary Part](!/complex-numbers/definitions#imaginary_part)
- [Algebraic Form](!/complex-numbers/definitions#algebraic_form)
- [Complex Plane](!/complex-numbers/definitions#complex_plane)`,
  },
 
  {
    id: 'imaginary_part',
    name: 'Imaginary Part',
    category: 'Foundations',
    formula: `For $z = a + bi$, the imaginary part is $\\operatorname{Im}(z) = b$`,
    link: { url: '/complex-numbers/algebraic-form#22', text: 'Algebraic Form' },
    intuition: `The real coefficient of $i$ in a complex number. Despite the name, the imaginary part itself is a real number — it is the scalar multiplying $i$, not the product $bi$.`,
    'common errors': `The imaginary part of $3 + 5i$ is $5$, not $5i$. The factor $i$ is not included.`,
    'related concepts': `
- [Real Part](!/complex-numbers/definitions#real_part)
- [Algebraic Form](!/complex-numbers/definitions#algebraic_form)
- [Imaginary Unit](!/complex-numbers/definitions#imaginary_unit)`,
  },
 
  {
    id: 'algebraic_form',
    name: 'Algebraic Form',
    category: 'Foundations',
    formula: `The representation $z = a + bi$ where $a = \\operatorname{Re}(z)$ and $b = \\operatorname{Im}(z)$`,
    link: { url: '/complex-numbers/algebraic-form#1', text: 'Algebraic Form' },
    intuition: `The standard way of writing a complex number as a sum of its real and imaginary parts. Also called rectangular form or standard form.`,
    notation: `$z = a + bi$ (or $a + ib$ in some texts). The terms $a$ and $b$ are both real numbers.`,
    'related concepts': `
- [Trigonometric Form](!/complex-numbers/definitions#trigonometric_form)
- [Exponential Form](!/complex-numbers/definitions#exponential_form)
- [Real Part](!/complex-numbers/definitions#real_part)
- [Imaginary Part](!/complex-numbers/definitions#imaginary_part)`,
  },
 
  // ===== REPRESENTATIONS (5) =====
 
  {
    id: 'complex_plane',
    name: 'Complex Plane',
    category: 'Representations',
    formula: `The two-dimensional plane in which each complex number $z = a + bi$ corresponds to the point $(a, b)$`,
    link: { url: '/complex-numbers/geometric-representation#1', text: 'Geometric Representation' },
    intuition: `A coordinate system where the horizontal axis represents the real part and the vertical axis represents the imaginary part. Each complex number maps to exactly one point, and each point maps to exactly one complex number.`,
    notation: `Also called the Argand plane or Argand diagram. The horizontal axis is the real axis, the vertical axis is the imaginary axis.`,
    'related concepts': `
- [Modulus](!/complex-numbers/definitions#modulus)
- [Argument](!/complex-numbers/definitions#argument)
- [Algebraic Form](!/complex-numbers/definitions#algebraic_form)`,
  },
 
  {
    id: 'modulus',
    name: 'Modulus',
    category: 'Representations',
    formula: `$|z| = \\sqrt{a^2 + b^2}$ for $z = a + bi$`,
    link: { url: '/complex-numbers/absolute-value#1', text: 'Absolute Value' },
    intuition: `The distance from the origin to the point $z$ in the complex plane. Generalizes the absolute value of real numbers to two dimensions.`,
    properties: `
• $|z| \\geq 0$, with $|z| = 0$ only when $z = 0$
• $|z \\cdot w| = |z| \\cdot |w|$
• $|z|^2 = z \\cdot \\overline{z}$`,
    notation: `Written $|z|$ or $r$. Also called the absolute value of $z$.`,
    'related concepts': `
- [Argument](!/complex-numbers/definitions#argument)
- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate)
- [Complex Plane](!/complex-numbers/definitions#complex_plane)`,
  },
 
  {
    id: 'argument',
    name: 'Argument',
    category: 'Representations',
    formula: `$\\arg(z) = \\theta$ where $\\cos\\theta = \\frac{a}{|z|}$ and $\\sin\\theta = \\frac{b}{|z|}$, for $z = a + bi \\neq 0$`,
    link: { url: '/complex-numbers/trigonometric-form#3', text: 'Trigonometric Form' },
    intuition: `The angle measured counterclockwise from the positive real axis to the line segment connecting the origin to $z$ in the complex plane.`,
    notation: `Written $\\arg(z)$. The principal argument $\\operatorname{Arg}(z)$ restricts the angle to $(-\\pi, \\pi]$.`,
    'special cases': `
• Positive reals: $\\arg(z) = 0$
• Negative reals: $\\arg(z) = \\pi$
• Pure imaginary with $b > 0$: $\\arg(z) = \\frac{\\pi}{2}$
• Pure imaginary with $b < 0$: $\\arg(z) = -\\frac{\\pi}{2}$`,
    'related concepts': `
- [Modulus](!/complex-numbers/definitions#modulus)
- [Trigonometric Form](!/complex-numbers/definitions#trigonometric_form)
- [Complex Plane](!/complex-numbers/definitions#complex_plane)`,
  },
 
  {
    id: 'trigonometric_form',
    name: 'Trigonometric Form',
    category: 'Representations',
    formula: `$z = r(\\cos\\theta + i\\sin\\theta)$ where $r = |z|$ and $\\theta = \\arg(z)$`,
    link: { url: '/complex-numbers/trigonometric-form#7', text: 'Trigonometric Form' },
    intuition: `Expresses a complex number using its distance from the origin and its angle, rather than its horizontal and vertical components. Especially useful for multiplication, division, and powers.`,
    notation: `Also called polar form. Sometimes abbreviated $r\\,\\text{cis}\\,\\theta$.`,
    'related concepts': `
- [Modulus](!/complex-numbers/definitions#modulus)
- [Argument](!/complex-numbers/definitions#argument)
- [Exponential Form](!/complex-numbers/definitions#exponential_form)
- [Algebraic Form](!/complex-numbers/definitions#algebraic_form)`,
  },
 
  {
    id: 'exponential_form',
    name: 'Exponential Form',
    category: 'Representations',
    formula: `$z = re^{i\\theta}$ where $r = |z|$ and $\\theta = \\arg(z)$`,
    link: { url: '/complex-numbers/exponential-form#4', text: 'Exponential Form' },
    intuition: `Writes a complex number as a product of its modulus and a complex exponential. Relies on Euler's formula $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ to compress the trigonometric form into a single exponential term.`,
    properties: `
• $e^{i\\pi} + 1 = 0$ (Euler's identity)
• $e^{i\\theta_1} \\cdot e^{i\\theta_2} = e^{i(\\theta_1 + \\theta_2)}$
• Multiplication and division reduce to operations on $r$ and $\\theta$`,
    'related concepts': `
- [Trigonometric Form](!/complex-numbers/definitions#trigonometric_form)
- [Modulus](!/complex-numbers/definitions#modulus)
- [Argument](!/complex-numbers/definitions#argument)`,
  },
 
  // ===== OPERATIONS & STRUCTURE (4) =====
 
  {
    id: 'complex_conjugate',
    name: 'Complex Conjugate',
    category: 'Operations & Structure',
    formula: `For $z = a + bi$, the conjugate is $\\overline{z} = a - bi$`,
    link: { url: '/complex-numbers/complex-conjugate#1', text: 'Complex Conjugate' },
    intuition: `Reflects a complex number across the real axis in the complex plane. The real part stays the same while the imaginary part changes sign.`,
    properties: `
• $\\overline{\\overline{z}} = z$
• $z \\cdot \\overline{z} = |z|^2$
• $\\overline{z + w} = \\overline{z} + \\overline{w}$
• $\\overline{z \\cdot w} = \\overline{z} \\cdot \\overline{w}$
• $z$ is real if and only if $z = \\overline{z}$`,
    'related concepts': `
- [Modulus](!/complex-numbers/definitions#modulus)
- [Multiplicative Inverse](!/complex-numbers/definitions#multiplicative_inverse)
- [Complex Plane](!/complex-numbers/definitions#complex_plane)`,
  },
 
  {
    id: 'additive_inverse',
    name: 'Additive Inverse',
    category: 'Operations & Structure',
    formula: `For $z = a + bi$, the additive inverse is $-z = -a - bi$`,
    link: { url: '/complex-numbers/additive-inverse#2', text: 'Additive Inverse' },
    intuition: `The complex number that, when added to $z$, yields zero. Geometrically, it is the reflection of $z$ through the origin in the complex plane.`,
    properties: `
• $z + (-z) = 0$
• $|-z| = |z|$
• $\\arg(-z) = \\arg(z) + \\pi$`,
    'related concepts': `
- [Complex Number](!/complex-numbers/definitions#complex_number)
- [Multiplicative Inverse](!/complex-numbers/definitions#multiplicative_inverse)
- [Modulus](!/complex-numbers/definitions#modulus)`,
  },
 
  {
    id: 'multiplicative_inverse',
    name: 'Multiplicative Inverse',
    category: 'Operations & Structure',
    formula: `For $z \\neq 0$, the multiplicative inverse is $z^{-1} = \\frac{\\overline{z}}{|z|^2} = \\frac{a - bi}{a^2 + b^2}$`,
    link: { url: '/complex-numbers/multiplicative-inverse#2', text: 'Multiplicative Inverse' },
    intuition: `The complex number that, when multiplied by $z$, yields $1$. Found by multiplying numerator and denominator by the conjugate.`,
    properties: `
• $z \\cdot z^{-1} = 1$
• $|z^{-1}| = \\frac{1}{|z|}$
• $\\arg(z^{-1}) = -\\arg(z)$`,
    'related concepts': `
- [Complex Conjugate](!/complex-numbers/definitions#complex_conjugate)
- [Modulus](!/complex-numbers/definitions#modulus)
- [Additive Inverse](!/complex-numbers/definitions#additive_inverse)`,
  },
 
  {
    id: 'roots_of_unity',
    name: 'Roots of Unity',
    category: 'Operations & Structure',
    formula: `The $n$th roots of unity are $\\omega_k = e^{i \\frac{2\\pi k}{n}}$ for $k = 0, 1, \\ldots, n-1$`,
    link: { url: '/complex-numbers/equations-polynomials#7', text: 'Equations & Polynomials' },
    intuition: `The $n$ complex numbers that satisfy $z^n = 1$. They are equally spaced around the unit circle in the complex plane, dividing it into $n$ equal arcs.`,
    'special cases': `
• $n = 2$: roots are $1$ and $-1$
• $n = 3$: roots are $1$, $e^{i2\\pi/3}$, $e^{i4\\pi/3}$ (vertices of an equilateral triangle)
• $n = 4$: roots are $1$, $i$, $-1$, $-i$ (vertices of a square)`,
    'related concepts': `
- [Exponential Form](!/complex-numbers/definitions#exponential_form)
- [Modulus](!/complex-numbers/definitions#modulus)
- [Argument](!/complex-numbers/definitions#argument)`,
  },
   
];

export default complexNumbersTermsList;