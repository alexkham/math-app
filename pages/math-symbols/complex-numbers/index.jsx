import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import React from 'react';
import Head from 'next/head';
import '../../pages.css'
import DataWrapper from '@/app/components/generic-table/DataWrapper';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';

export default function MathSymbolsComplexNumbersPage({ symbolsData, meta, menuItems, schemas }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords.join(', ')} />
        <meta name="author" content={meta.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={meta.canonical} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Learn Math Class" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webpage) }}
        />
      </Head>

      {/* <GenericNavbar /> */}
      <br />
      <br />
      <br />
      <br />
      <Breadcrumb />
      <OperaSidebar
        side="right"
        sidebarWidth="45px"
        panelWidth="300px"
        iconColor="white"
        panelBackgroundColor="#f2f2f2"
      />
      <h1 className="title" style={{ marginTop: '0px' }}>
        {meta.pageHeading}
      </h1>
      <br />
      <br />
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
        <VerticalButtonGroup
          items={menuItems}
          width="190px"
          isSticky={true}
          verticalOffset='230px'
        />
        <div
          className="title"
          style={{
            margin: 'auto',
            width: '80%',
          }}
        >
          <DataWrapper data={symbolsData} />
        </div>
      </div>
      {/* <ScrollUpButton /> */}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
}

export async function getStaticProps() {

  const menuItems = [
    {
      title: "Linear Algebra",
      link: "/math-symbols/linear-algebra"
    },
    {
      title: "Mathematical Logic",
      link: "/math-symbols/math-logic"
    },
    {
      title: "Calculus",
      link: "/math-symbols/calculus"
    },
    {
      title: "Trigonometry",
      link: "/math-symbols/trigonometry"
    },
    {
      title: "Set Theory",
      link: "/math-symbols/set-theory"
    },
    {
      title: "Combinatorics",
      link: "/math-symbols/combinatorics"
    },
    {
      title: "Probability",
      link: "/math-symbols/probability"
    },
    // {
    //   title: "Complex Numbers",
    //   link: "/math-symbols/complex-numbers"
    // },
  ];

  const meta = {
    title: 'Complex Number Symbols | Complex Number Notation Chart',
    description:
      'Complete reference of complex number symbols with LaTeX codes and explanations. Covers imaginary unit, modulus, argument, conjugate, polar and exponential forms, and more.',
    keywords: [
      'complex number symbols',
      'complex numbers notation',
      'imaginary unit symbol',
      'complex conjugate symbol',
      'modulus symbol',
      'argument symbol',
      'Euler formula',
      'polar form',
      'exponential form',
      'LaTeX complex numbers',
      'math symbols',
      'math symbols chart'
    ],
    author: 'LearnMathClass',
    canonical: 'https://www.learnmathclass.com/math-symbols/complex-numbers',
    pageHeading: 'Complex Numbers Symbols',
  };

  const schemas = {
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
          "name": "Math Symbols",
          "item": "https://www.learnmathclass.com/math-symbols"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Complex Numbers",
          "item": "https://www.learnmathclass.com/math-symbols/complex-numbers"
        }
      ]
    },
    webpage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": meta.title,
      "description": meta.description,
      "url": "https://www.learnmathclass.com/math-symbols/complex-numbers",
      "inLanguage": "en",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Learn Math Class",
        "url": "https://www.learnmathclass.com"
      },
      "about": {
        "@type": "Thing",
        "name": "Complex Numbers",
        "description": "Mathematical numbers of the form a + bi where i is the imaginary unit"
      },
      "educationalLevel": "High School, Undergraduate",
      "learningResourceType": "Reference"
    }
  };

 const symbolsData = {
  "basic_notation": [
    {"symbol": "i", "latex_code": "i", "explanation": "The imaginary unit, defined by i² = −1. It is the foundation of all [imaginary numbers](!/complex-numbers/imaginary-numbers) and complex arithmetic."},
    {"symbol": "z", "latex_code": "z", "explanation": "Standard variable representing a complex number, typically written as z = a + bi where a and b are real numbers."},
    {"symbol": "a + bi", "latex_code": "a + bi", "explanation": "Rectangular or [algebraic form](!/complex-numbers/algebraic-form) of a complex number, where a is the real part and b is the imaginary part."},
    {"symbol": "Re(z)", "latex_code": "\\text{Re}(z)", "explanation": "The real part of z. For z = a + bi, Re(z) = a. Sometimes written as ℜ(z)."},
    {"symbol": "Im(z)", "latex_code": "\\text{Im}(z)", "explanation": "The imaginary part of z. For z = a + bi, Im(z) = b. Note that Im(z) itself is a real number."},
    {"symbol": "ℂ", "latex_code": "\\mathbb{C}", "explanation": "The set of all complex numbers. Contains ℝ (real numbers) as a subset."},
    {"symbol": "ℝ", "latex_code": "\\mathbb{R}", "explanation": "The set of all real numbers. In the [complex plane](!/complex-numbers/geometric-representation), ℝ corresponds to the horizontal axis."}
  ],
  "conjugate_and_inverses": [
    {"symbol": "z̄", "latex_code": "\\bar{z}", "explanation": "The [complex conjugate](!/complex-numbers/complex-conjugate) of z. For z = a + bi, the conjugate is z̄ = a − bi."},
    {"symbol": "z*", "latex_code": "z^*", "explanation": "Alternative notation for the [complex conjugate](!/complex-numbers/complex-conjugate), commonly used in physics and engineering."},
    {"symbol": "−z", "latex_code": "-z", "explanation": "The [additive inverse](!/complex-numbers/additive-inverse) of z. For z = a + bi, we have −z = −a − bi. Satisfies z + (−z) = 0."},
    {"symbol": "z⁻¹", "latex_code": "z^{-1}", "explanation": "The [multiplicative inverse](!/complex-numbers/multiplicative-inverse) (reciprocal) of z. Satisfies z · z⁻¹ = 1. Equals z̄/|z|² for nonzero z."},
    {"symbol": "1/z", "latex_code": "\\frac{1}{z}", "explanation": "Reciprocal of z, equivalent to z⁻¹. Computed by multiplying numerator and denominator by the [conjugate](!/complex-numbers/complex-conjugate)."},
    {"symbol": "z · z̄ = |z|²", "latex_code": "z \\cdot \\bar{z} = |z|^2", "explanation": "Fundamental identity: a complex number times its conjugate equals the square of its [modulus](!/complex-numbers/absolute-value)."}
  ],
  "modulus_and_argument": [
    {"symbol": "|z|", "latex_code": "|z|", "explanation": "The [modulus](!/complex-numbers/absolute-value) (absolute value) of z, representing its distance from the origin in the complex plane."},
    {"symbol": "|z| = √(a² + b²)", "latex_code": "|z| = \\sqrt{a^2 + b^2}", "explanation": "Formula for the [modulus](!/complex-numbers/absolute-value) derived from the Pythagorean theorem. For z = 3 + 4i, |z| = 5."},
    {"symbol": "arg(z)", "latex_code": "\\arg(z)", "explanation": "The argument of z — the angle from the positive real axis to z, measured counterclockwise. Multi-valued, differing by multiples of 2π."},
    {"symbol": "Arg(z)", "latex_code": "\\text{Arg}(z)", "explanation": "The principal argument of z, restricted to (−π, π]. Gives a unique angle for each nonzero complex number."},
    {"symbol": "θ = arctan(b/a)", "latex_code": "\\theta = \\arctan\\left(\\frac{b}{a}\\right)", "explanation": "Formula for the argument when a > 0. For other quadrants, adjustments of π are needed."}
  ],
  "polar_and_trigonometric_forms": [
    {"symbol": "r(cos θ + i sin θ)", "latex_code": "r(\\cos\\theta + i\\sin\\theta)", "explanation": "The [trigonometric form](!/complex-numbers/trigonometric-form) of a complex number, where r = |z| and θ = arg(z)."},
    {"symbol": "r cis θ", "latex_code": "r\\,\\text{cis}\\,\\theta", "explanation": "Shorthand for [trigonometric form](!/complex-numbers/trigonometric-form). \"cis\" stands for \"cosine + i sine\"."},
    {"symbol": "z = r∠θ", "latex_code": "z = r\\angle\\theta", "explanation": "Polar notation commonly used in engineering, where r is the modulus and θ is the argument."}
  ],
  "exponential_form": [
    {"symbol": "re^(iθ)", "latex_code": "re^{i\\theta}", "explanation": "The [exponential form](!/complex-numbers/exponential-form) of a complex number, combining modulus r and argument θ."},
    {"symbol": "e^(iθ) = cos θ + i sin θ", "latex_code": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta", "explanation": "Euler's formula — the bridge between [exponential](!/complex-numbers/exponential-form) and [trigonometric](!/complex-numbers/trigonometric-form) forms."},
    {"symbol": "e^(iπ) + 1 = 0", "latex_code": "e^{i\\pi} + 1 = 0", "explanation": "Euler's identity, connecting five fundamental constants: e, i, π, 1, and 0."},
    {"symbol": "e^(a+bi) = eᵃ(cos b + i sin b)", "latex_code": "e^{a+bi} = e^a(\\cos b + i\\sin b)", "explanation": "General formula for the complex exponential, separating the real exponential growth from the rotational component."}
  ],
  "operations": [
    {"symbol": "z₁ + z₂", "latex_code": "z_1 + z_2", "explanation": "Addition of complex numbers: add real parts and imaginary parts separately. See [operations](!/complex-numbers/operations)."},
    {"symbol": "z₁ − z₂", "latex_code": "z_1 - z_2", "explanation": "Subtraction: (a + bi) − (c + di) = (a − c) + (b − d)i."},
    {"symbol": "z₁ · z₂", "latex_code": "z_1 \\cdot z_2", "explanation": "Multiplication using FOIL and the fact that i² = −1. In polar form: multiply moduli, add arguments."},
    {"symbol": "z₁/z₂", "latex_code": "\\frac{z_1}{z_2}", "explanation": "Division: multiply numerator and denominator by the [conjugate](!/complex-numbers/complex-conjugate) of the denominator."},
    {"symbol": "|z₁z₂| = |z₁||z₂|", "latex_code": "|z_1 z_2| = |z_1||z_2|", "explanation": "The modulus of a product equals the product of the moduli."},
    {"symbol": "arg(z₁z₂) = arg(z₁) + arg(z₂)", "latex_code": "\\arg(z_1 z_2) = \\arg(z_1) + \\arg(z_2)", "explanation": "The argument of a product equals the sum of the arguments (modulo 2π)."}
  ],
  "powers_and_roots": [
    {"symbol": "zⁿ", "latex_code": "z^n", "explanation": "The nth power of z. In exponential form: zⁿ = rⁿe^(inθ)."},
    {"symbol": "(cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ)", "latex_code": "(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)", "explanation": "[De Moivre's theorem](!/complex-numbers/demoivre-theorem) — essential for computing powers and roots of complex numbers."},
    {"symbol": "zⁿ = rⁿe^(inθ)", "latex_code": "z^n = r^n e^{in\\theta}", "explanation": "Power formula in [exponential form](!/complex-numbers/exponential-form): raise the modulus to the nth power, multiply the argument by n."},
    {"symbol": "ⁿ√z", "latex_code": "\\sqrt[n]{z}", "explanation": "The nth root of z. Has exactly n distinct values, evenly spaced around a circle in the complex plane."},
    {"symbol": "ωₖ = e^(2πik/n)", "latex_code": "\\omega_k = e^{2\\pi i k/n}", "explanation": "The nth roots of unity — solutions to zⁿ = 1. There are exactly n of them, for k = 0, 1, ..., n−1."},
    {"symbol": "ω = e^(2πi/n)", "latex_code": "\\omega = e^{2\\pi i/n}", "explanation": "The primitive nth root of unity. All other nth roots are powers of ω."}
  ],
  "geometric_representation": [
    {"symbol": "z = x + iy", "latex_code": "z = x + iy", "explanation": "Complex number as a point (x, y) in the [complex plane](!/complex-numbers/geometric-representation), also called the Argand diagram."},
    {"symbol": "|z − z₀| = r", "latex_code": "|z - z_0| = r", "explanation": "Equation of a circle with center z₀ and radius r in the complex plane."},
    {"symbol": "|z − z₀| < r", "latex_code": "|z - z_0| < r", "explanation": "Open disk: all points strictly inside the circle centered at z₀ with radius r."},
    {"symbol": "|z − z₀| ≤ r", "latex_code": "|z - z_0| \\leq r", "explanation": "Closed disk: all points on or inside the circle centered at z₀ with radius r."},
    {"symbol": "Im(z) > 0", "latex_code": "\\text{Im}(z) > 0", "explanation": "The upper half-plane — all complex numbers with positive imaginary part."},
    {"symbol": "Re(z) > 0", "latex_code": "\\text{Re}(z) > 0", "explanation": "The right half-plane — all complex numbers with positive real part."}
  ],
  "properties_and_identities": [
    {"symbol": "|z₁ + z₂| ≤ |z₁| + |z₂|", "latex_code": "|z_1 + z_2| \\leq |z_1| + |z_2|", "explanation": "Triangle inequality: the modulus of a sum is at most the sum of the moduli. See [properties](!/complex-numbers/properties)."},
    {"symbol": "||z₁| − |z₂|| ≤ |z₁ − z₂|", "latex_code": "||z_1| - |z_2|| \\leq |z_1 - z_2|", "explanation": "Reverse triangle inequality: useful for establishing lower bounds on moduli."},
    {"symbol": "z + z̄ = 2Re(z)", "latex_code": "z + \\bar{z} = 2\\text{Re}(z)", "explanation": "Sum of a complex number and its conjugate gives twice the real part."},
    {"symbol": "z − z̄ = 2i Im(z)", "latex_code": "z - \\bar{z} = 2i\\,\\text{Im}(z)", "explanation": "Difference of a complex number and its conjugate gives twice the imaginary part times i."},
    {"symbol": "|Re(z)| ≤ |z|", "latex_code": "|\\text{Re}(z)| \\leq |z|", "explanation": "The absolute value of the real part never exceeds the modulus."},
    {"symbol": "|Im(z)| ≤ |z|", "latex_code": "|\\text{Im}(z)| \\leq |z|", "explanation": "The absolute value of the imaginary part never exceeds the modulus."}
  ],
  "equations_and_polynomials": [
    {"symbol": "z² = w", "latex_code": "z^2 = w", "explanation": "Quadratic equation in complex numbers — always has exactly two solutions (counting multiplicity)."},
    {"symbol": "zⁿ = w", "latex_code": "z^n = w", "explanation": "The nth power equation has exactly n solutions in ℂ, evenly distributed around a circle."},
    {"symbol": "az² + bz + c = 0", "latex_code": "az^2 + bz + c = 0", "explanation": "Quadratic equation with complex coefficients. Solved using the quadratic formula with complex arithmetic. See [equations and polynomials](!/complex-numbers/equations-polynomials)."},
    {"symbol": "z = (−b ± √(b² − 4ac)) / 2a", "latex_code": "z = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}", "explanation": "Quadratic formula — works for all complex coefficients. The discriminant may be negative or complex."},
    {"symbol": "Pₙ(z) = aₙzⁿ + ... + a₁z + a₀", "latex_code": "P_n(z) = a_n z^n + \\cdots + a_1 z + a_0", "explanation": "Polynomial of degree n with complex coefficients. By the Fundamental Theorem of Algebra, has exactly n roots in ℂ."}
  ],
  "complex_functions": [
    {"symbol": "e^z", "latex_code": "e^z", "explanation": "Complex exponential function. For z = a + bi: e^z = eᵃ(cos b + i sin b)."},
    {"symbol": "ln(z)", "latex_code": "\\ln(z)", "explanation": "Complex natural logarithm. Multi-valued: ln(z) = ln|z| + i(arg(z) + 2πk) for integer k."},
    {"symbol": "Log(z)", "latex_code": "\\text{Log}(z)", "explanation": "Principal branch of the complex logarithm: Log(z) = ln|z| + i·Arg(z)."},
    {"symbol": "sin(z)", "latex_code": "\\sin(z)", "explanation": "Complex sine function, defined for all z ∈ ℂ. Unlike real sine, |sin(z)| can exceed 1."},
    {"symbol": "cos(z)", "latex_code": "\\cos(z)", "explanation": "Complex cosine function. Related to exponentials: cos(z) = (e^(iz) + e^(−iz))/2."},
    {"symbol": "sin(z) = (e^(iz) − e^(−iz))/2i", "latex_code": "\\sin(z) = \\frac{e^{iz} - e^{-iz}}{2i}", "explanation": "Exponential definition of complex sine, derived from Euler's formula."},
    {"symbol": "cos(z) = (e^(iz) + e^(−iz))/2", "latex_code": "\\cos(z) = \\frac{e^{iz} + e^{-iz}}{2}", "explanation": "Exponential definition of complex cosine, derived from Euler's formula."}
  ],
  "hyperbolic_functions": [
    {"symbol": "sinh(z)", "latex_code": "\\sinh(z)", "explanation": "Hyperbolic sine: sinh(z) = (e^z − e^(−z))/2. Closely related to complex sine."},
    {"symbol": "cosh(z)", "latex_code": "\\cosh(z)", "explanation": "Hyperbolic cosine: cosh(z) = (e^z + e^(−z))/2. Closely related to complex cosine."},
    {"symbol": "sin(iz) = i sinh(z)", "latex_code": "\\sin(iz) = i\\sinh(z)", "explanation": "Connection between trigonometric and hyperbolic functions through the imaginary unit."},
    {"symbol": "cos(iz) = cosh(z)", "latex_code": "\\cos(iz) = \\cosh(z)", "explanation": "Connection between complex cosine and hyperbolic cosine."}
  ]
};

  return {
    props: {
      symbolsData,
      meta,
      menuItems,
      schemas
    },
  };
}