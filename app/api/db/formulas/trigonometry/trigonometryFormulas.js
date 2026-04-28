const trigonometryFormulaList = [

// ─── Trigonometry Formulas — Batch 1 ─────────────────────────────────
// Categories: Measurement & Conversion, Reciprocal, Quotient, Pythagorean
// 11 entries
// All section anchors verified against extract_sections output


// ─── Category: Measurement & Conversion (3 entries) ──────────────────


  {
    name: 'Degree-Radian Conversion',
    entity: 'radian',
    category: 'Measurement & Conversion',
    formula: `$$\\theta_{\\text{rad}} = \\theta_{\\text{deg}} \\times \\frac{\\pi}{180}$$`,
    link: { label: 'Converting Between Degrees and Radians', url: '/trigonometry/degrees-radians#3' },
    fields: {
      explanation: `Converts an angle from degrees to radians by multiplying by the ratio $\\frac{\\pi}{180}$. The reverse conversion multiplies by $\\frac{180}{\\pi}$.`,
      conditions: `The conversion factor follows from $180° = \\pi$ rad. Both directions are exact — no rounding is involved.`,
      variants: `$$\\theta_{\\text{deg}} = \\theta_{\\text{rad}} \\times \\frac{180}{\\pi}$$`,
      related_formulas: `- [Arc Length](!/trigonometry/formulas#arc_length)\n- [Sector Area](!/trigonometry/formulas#sector_area)`,
      related_definitions: `- [Radian](!/trigonometry/definitions#radian)\n- [Degree](!/trigonometry/definitions#degree)`,
    },
  },

  {
    name: 'Arc Length',
    entity: 'arc_length',
    category: 'Measurement & Conversion',
    formula: `$$s = r\\theta$$`,
    link: { label: 'Arc Length', url: '/trigonometry/degrees-radians#4' },
    fields: {
      explanation: `The length of a circular arc equals the radius times the central angle in radians. This is a direct consequence of the radian definition $\\theta = \\frac{s}{r}$.`,
      conditions: `$\\theta$ must be in radians. If the angle is in degrees, use $s = \\frac{\\pi r \\theta}{180}$.`,
      notation: `$s$ = arc length, $r$ = radius, $\\theta$ = central angle (radians).`,
      related_formulas: `- [Sector Area](!/trigonometry/formulas#sector_area)\n- [Degree-Radian Conversion](!/trigonometry/formulas#degree-radian_conversion)`,
      related_definitions: `- [Arc Length](!/trigonometry/definitions#arc_length)\n- [Radian](!/trigonometry/definitions#radian)\n- [Central Angle](!/trigonometry/definitions#central_angle)`,
    },
  },

  {
    name: 'Sector Area',
    entity: 'sector',
    category: 'Measurement & Conversion',
    formula: `$$A = \\frac{1}{2}r^2\\theta$$`,
    link: { label: 'Sector Area', url: '/trigonometry/degrees-radians#5' },
    fields: {
      explanation: `The area of a circular sector equals half the square of the radius times the central angle in radians. The sector is the fraction $\\frac{\\theta}{2\\pi}$ of the full circle area $\\pi r^2$.`,
      conditions: `$\\theta$ must be in radians. If in degrees: $A = \\frac{\\theta}{360} \\times \\pi r^2$.`,
      notation: `$A$ = sector area, $r$ = radius, $\\theta$ = central angle (radians).`,
      variants: `$$A = \\frac{1}{2}rs$$\n\nwhere $s = r\\theta$ is the arc length.`,
      related_formulas: `- [Arc Length](!/trigonometry/formulas#arc_length)\n- [Degree-Radian Conversion](!/trigonometry/formulas#degree-radian_conversion)`,
      related_definitions: `- [Sector](!/trigonometry/definitions#sector)\n- [Radian](!/trigonometry/definitions#radian)\n- [Central Angle](!/trigonometry/definitions#central_angle)`,
    },
  },



// ─── Category: Reciprocal Identities (3 entries) ────────────────────


  {
    name: 'Cosecant Reciprocal Identity',
    entity: 'cosecant',
    category: 'Reciprocal Identities',
    formula: `$$\\csc\\theta = \\frac{1}{\\sin\\theta}$$`,
    link: { label: 'Reciprocal and Quotient Relationships', url: '/trigonometry/functions#7' },
    fields: {
      explanation: `Cosecant is the reciprocal of sine. The product $\\sin\\theta \\cdot \\csc\\theta = 1$ holds wherever both are defined.`,
      conditions: `$\\sin\\theta \\neq 0$, i.e. $\\theta \\neq n\\pi$.`,
      related_formulas: `- [Secant Reciprocal Identity](!/trigonometry/formulas#secant_reciprocal_identity)\n- [Cotangent Reciprocal Identity](!/trigonometry/formulas#cotangent_reciprocal_identity)`,
      related_definitions: `- [Cosecant](!/trigonometry/definitions#cosecant)\n- [Sine](!/trigonometry/definitions#sine)`,
    },
  },

  {
    name: 'Secant Reciprocal Identity',
    entity: 'secant',
    category: 'Reciprocal Identities',
    formula: `$$\\sec\\theta = \\frac{1}{\\cos\\theta}$$`,
    link: { label: 'Reciprocal and Quotient Relationships', url: '/trigonometry/functions#7' },
    fields: {
      explanation: `Secant is the reciprocal of cosine. The product $\\cos\\theta \\cdot \\sec\\theta = 1$ holds wherever both are defined.`,
      conditions: `$\\cos\\theta \\neq 0$, i.e. $\\theta \\neq \\frac{\\pi}{2} + n\\pi$.`,
      related_formulas: `- [Cosecant Reciprocal Identity](!/trigonometry/formulas#cosecant_reciprocal_identity)\n- [Cotangent Reciprocal Identity](!/trigonometry/formulas#cotangent_reciprocal_identity)`,
      related_definitions: `- [Secant](!/trigonometry/definitions#secant)\n- [Cosine](!/trigonometry/definitions#cosine)`,
    },
  },

  {
    name: 'Cotangent Reciprocal Identity',
    entity: 'cotangent',
    category: 'Reciprocal Identities',
    formula: `$$\\cot\\theta = \\frac{1}{\\tan\\theta}$$`,
    link: { label: 'Reciprocal and Quotient Relationships', url: '/trigonometry/functions#7' },
    fields: {
      explanation: `Cotangent is the reciprocal of tangent. The product $\\tan\\theta \\cdot \\cot\\theta = 1$ holds wherever both are defined.`,
      conditions: `$\\tan\\theta \\neq 0$ and defined, i.e. $\\theta \\neq \\frac{n\\pi}{2}$.`,
      related_formulas: `- [Cosecant Reciprocal Identity](!/trigonometry/formulas#cosecant_reciprocal_identity)\n- [Secant Reciprocal Identity](!/trigonometry/formulas#secant_reciprocal_identity)\n- [Cotangent Quotient Identity](!/trigonometry/formulas#cotangent_quotient_identity)`,
      related_definitions: `- [Cotangent](!/trigonometry/definitions#cotangent)\n- [Tangent](!/trigonometry/definitions#tangent)`,
    },
  },



// ─── Category: Quotient Identities (2 entries) ──────────────────────


  {
    name: 'Tangent Quotient Identity',
    entity: 'tangent',
    category: 'Quotient Identities',
    formula: `$$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$$`,
    link: { label: 'Reciprocal and Quotient Relationships', url: '/trigonometry/functions#7' },
    fields: {
      explanation: `Tangent equals the ratio of sine to cosine. On the unit circle, this is $\\frac{y}{x}$, which geometrically represents the slope of the terminal side.`,
      conditions: `$\\cos\\theta \\neq 0$, i.e. $\\theta \\neq \\frac{\\pi}{2} + n\\pi$.`,
      related_formulas: `- [Cotangent Quotient Identity](!/trigonometry/formulas#cotangent_quotient_identity)\n- [Cotangent Reciprocal Identity](!/trigonometry/formulas#cotangent_reciprocal_identity)`,
      related_definitions: `- [Tangent](!/trigonometry/definitions#tangent)\n- [Sine](!/trigonometry/definitions#sine)\n- [Cosine](!/trigonometry/definitions#cosine)`,
    },
  },

  {
    name: 'Cotangent Quotient Identity',
    entity: 'cotangent',
    category: 'Quotient Identities',
    formula: `$$\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$$`,
    link: { label: 'Reciprocal and Quotient Relationships', url: '/trigonometry/functions#7' },
    fields: {
      explanation: `Cotangent equals the ratio of cosine to sine — the reciprocal of the tangent quotient. On the unit circle, this is $\\frac{x}{y}$.`,
      conditions: `$\\sin\\theta \\neq 0$, i.e. $\\theta \\neq n\\pi$.`,
      related_formulas: `- [Tangent Quotient Identity](!/trigonometry/formulas#tangent_quotient_identity)\n- [Cotangent Reciprocal Identity](!/trigonometry/formulas#cotangent_reciprocal_identity)`,
      related_definitions: `- [Cotangent](!/trigonometry/definitions#cotangent)\n- [Cosine](!/trigonometry/definitions#cosine)\n- [Sine](!/trigonometry/definitions#sine)`,
    },
  },



// ─── Category: Pythagorean Identities (3 entries) ───────────────────


  {
    name: 'Pythagorean Identity - Sine Cosine',
    entity: 'sine',
    category: 'Pythagorean Identities',
    formula: `$$\\sin^2\\theta + \\cos^2\\theta = 1$$`,
    link: { label: 'The Pythagorean Identity', url: '/trigonometry/unit-circle#7' },
    fields: {
      explanation: `The fundamental trigonometric identity. It restates the unit circle equation $x^2 + y^2 = 1$ with $x = \\cos\\theta$ and $y = \\sin\\theta$.`,
      derivation: `Every point on the unit circle satisfies $x^2 + y^2 = 1$. Substituting $x = \\cos\\theta$, $y = \\sin\\theta$ gives the identity directly.`,
      variants: `$$\\sin^2\\theta = 1 - \\cos^2\\theta$$\n\n$$\\cos^2\\theta = 1 - \\sin^2\\theta$$`,
      related_formulas: `- [Pythagorean Identity - Tangent Secant](!/trigonometry/formulas#pythagorean_identity_-_tangent_secant)\n- [Pythagorean Identity - Cotangent Cosecant](!/trigonometry/formulas#pythagorean_identity_-_cotangent_cosecant)`,
      related_definitions: `- [Unit Circle](!/trigonometry/definitions#unit_circle)\n- [Sine](!/trigonometry/definitions#sine)\n- [Cosine](!/trigonometry/definitions#cosine)`,
    },
  },

  {
    name: 'Pythagorean Identity - Tangent Secant',
    entity: 'tangent',
    category: 'Pythagorean Identities',
    formula: `$$1 + \\tan^2\\theta = \\sec^2\\theta$$`,
    link: { label: 'The Pythagorean Identity', url: '/trigonometry/unit-circle#7' },
    fields: {
      explanation: `Obtained by dividing $\\sin^2\\theta + \\cos^2\\theta = 1$ by $\\cos^2\\theta$. Connects tangent and secant through the same Pythagorean structure.`,
      derivation: `Divide each term of $\\sin^2\\theta + \\cos^2\\theta = 1$ by $\\cos^2\\theta$:\n\n$$\\frac{\\sin^2\\theta}{\\cos^2\\theta} + 1 = \\frac{1}{\\cos^2\\theta} \\implies \\tan^2\\theta + 1 = \\sec^2\\theta$$`,
      conditions: `$\\cos\\theta \\neq 0$, i.e. $\\theta \\neq \\frac{\\pi}{2} + n\\pi$.`,
      variants: `$$\\sec^2\\theta - \\tan^2\\theta = 1$$\n\n$$\\tan^2\\theta = \\sec^2\\theta - 1$$`,
      related_formulas: `- [Pythagorean Identity - Sine Cosine](!/trigonometry/formulas#pythagorean_identity_-_sine_cosine)\n- [Pythagorean Identity - Cotangent Cosecant](!/trigonometry/formulas#pythagorean_identity_-_cotangent_cosecant)`,
      related_definitions: `- [Tangent](!/trigonometry/definitions#tangent)\n- [Secant](!/trigonometry/definitions#secant)`,
    },
  },

  {
    name: 'Pythagorean Identity - Cotangent Cosecant',
    entity: 'cotangent',
    category: 'Pythagorean Identities',
    formula: `$$1 + \\cot^2\\theta = \\csc^2\\theta$$`,
    link: { label: 'The Pythagorean Identity', url: '/trigonometry/unit-circle#7' },
    fields: {
      explanation: `Obtained by dividing $\\sin^2\\theta + \\cos^2\\theta = 1$ by $\\sin^2\\theta$. Connects cotangent and cosecant through the same Pythagorean structure.`,
      derivation: `Divide each term of $\\sin^2\\theta + \\cos^2\\theta = 1$ by $\\sin^2\\theta$:\n\n$$1 + \\frac{\\cos^2\\theta}{\\sin^2\\theta} = \\frac{1}{\\sin^2\\theta} \\implies 1 + \\cot^2\\theta = \\csc^2\\theta$$`,
      conditions: `$\\sin\\theta \\neq 0$, i.e. $\\theta \\neq n\\pi$.`,
      variants: `$$\\csc^2\\theta - \\cot^2\\theta = 1$$\n\n$$\\cot^2\\theta = \\csc^2\\theta - 1$$`,
      related_formulas: `- [Pythagorean Identity - Sine Cosine](!/trigonometry/formulas#pythagorean_identity_-_sine_cosine)\n- [Pythagorean Identity - Tangent Secant](!/trigonometry/formulas#pythagorean_identity_-_tangent_secant)`,
      related_definitions: `- [Cotangent](!/trigonometry/definitions#cotangent)\n- [Cosecant](!/trigonometry/definitions#cosecant)`,
    },
  },

// ─── Trigonometry Formulas — Batch 2 ─────────────────────────────────
// Categories: Even-Odd, Cofunction, Supplement & Shift, Periodicity
// 18 entries
// All section anchors verified against extract_sections output


// ─── Category: Even-Odd Identities (3 entries) ─────────────────────


  {
    name: 'Sine Odd Identity',
    entity: 'sine',
    category: 'Even-Odd Identities',
    formula: `$$\\sin(-\\theta) = -\\sin\\theta$$`,
    link: { label: 'Even and Odd Symmetry', url: '/trigonometry/properties#2' },
    fields: {
      explanation: `Sine is an odd function. Negating the angle negates the output. On the unit circle, reflecting across the $x$-axis negates the $y$-coordinate.`,
      variants: `$$\\csc(-\\theta) = -\\csc\\theta$$`,
      related_formulas: `- [Cosine Even Identity](!/trigonometry/formulas#cosine_even_identity)\n- [Tangent Odd Identity](!/trigonometry/formulas#tangent_odd_identity)`,
      related_definitions: `- [Sine](!/trigonometry/definitions#sine)\n- [Negative Angle](!/trigonometry/definitions#negative_angle)`,
    },
  },

  {
    name: 'Cosine Even Identity',
    entity: 'cosine',
    category: 'Even-Odd Identities',
    formula: `$$\\cos(-\\theta) = \\cos\\theta$$`,
    link: { label: 'Even and Odd Symmetry', url: '/trigonometry/properties#2' },
    fields: {
      explanation: `Cosine is an even function. Negating the angle leaves the output unchanged. On the unit circle, reflecting across the $x$-axis preserves the $x$-coordinate.`,
      variants: `$$\\sec(-\\theta) = \\sec\\theta$$`,
      related_formulas: `- [Sine Odd Identity](!/trigonometry/formulas#sine_odd_identity)\n- [Tangent Odd Identity](!/trigonometry/formulas#tangent_odd_identity)`,
      related_definitions: `- [Cosine](!/trigonometry/definitions#cosine)\n- [Negative Angle](!/trigonometry/definitions#negative_angle)`,
    },
  },

  {
    name: 'Tangent Odd Identity',
    entity: 'tangent',
    category: 'Even-Odd Identities',
    formula: `$$\\tan(-\\theta) = -\\tan\\theta$$`,
    link: { label: 'Even and Odd Symmetry', url: '/trigonometry/properties#2' },
    fields: {
      explanation: `Tangent is an odd function. It is the ratio of sine (odd) to cosine (even), so $\\frac{-\\sin\\theta}{\\cos\\theta} = -\\tan\\theta$.`,
      variants: `$$\\cot(-\\theta) = -\\cot\\theta$$`,
      related_formulas: `- [Sine Odd Identity](!/trigonometry/formulas#sine_odd_identity)\n- [Cosine Even Identity](!/trigonometry/formulas#cosine_even_identity)`,
      related_definitions: `- [Tangent](!/trigonometry/definitions#tangent)\n- [Negative Angle](!/trigonometry/definitions#negative_angle)`,
    },
  },



// ─── Category: Cofunction Identities (3 entries) ────────────────────


  {
    name: 'Sine-Cosine Cofunction',
    entity: 'complementary_angles',
    category: 'Cofunction Identities',
    formula: `$$\\sin\\!\\left(\\frac{\\pi}{2} - \\theta\\right) = \\cos\\theta$$`,
    link: { label: 'Cofunction Relationships', url: '/trigonometry/right-triangle#8' },
    fields: {
      explanation: `The sine of an angle equals the cosine of its complement. In a right triangle, the side opposite one acute angle is adjacent to the other.`,
      variants: `$$\\cos\\!\\left(\\frac{\\pi}{2} - \\theta\\right) = \\sin\\theta$$\n\n$$\\csc\\!\\left(\\frac{\\pi}{2} - \\theta\\right) = \\sec\\theta$$`,
      related_formulas: `- [Cosine-Sine Cofunction](!/trigonometry/formulas#cosine-sine_cofunction)\n- [Tangent-Cotangent Cofunction](!/trigonometry/formulas#tangent-cotangent_cofunction)`,
      related_definitions: `- [Complementary Angles](!/trigonometry/definitions#complementary_angles)\n- [Sine](!/trigonometry/definitions#sine)\n- [Cosine](!/trigonometry/definitions#cosine)`,
    },
  },

  {
    name: 'Cosine-Sine Cofunction',
    entity: 'complementary_angles',
    category: 'Cofunction Identities',
    formula: `$$\\cos\\!\\left(\\frac{\\pi}{2} - \\theta\\right) = \\sin\\theta$$`,
    link: { label: 'Cofunction Relationships', url: '/trigonometry/right-triangle#8' },
    fields: {
      explanation: `The cosine of an angle equals the sine of its complement. This is the symmetric counterpart of the sine cofunction identity.`,
      variants: `$$\\sec\\!\\left(\\frac{\\pi}{2} - \\theta\\right) = \\csc\\theta$$`,
      related_formulas: `- [Sine-Cosine Cofunction](!/trigonometry/formulas#sine-cosine_cofunction)\n- [Tangent-Cotangent Cofunction](!/trigonometry/formulas#tangent-cotangent_cofunction)`,
      related_definitions: `- [Complementary Angles](!/trigonometry/definitions#complementary_angles)\n- [Cosine](!/trigonometry/definitions#cosine)\n- [Sine](!/trigonometry/definitions#sine)`,
    },
  },

  {
    name: 'Tangent-Cotangent Cofunction',
    entity: 'complementary_angles',
    category: 'Cofunction Identities',
    formula: `$$\\tan\\!\\left(\\frac{\\pi}{2} - \\theta\\right) = \\cot\\theta$$`,
    link: { label: 'Cofunction Relationships', url: '/trigonometry/right-triangle#8' },
    fields: {
      explanation: `The tangent of an angle equals the cotangent of its complement. Follows from dividing the sine and cosine cofunction identities.`,
      variants: `$$\\cot\\!\\left(\\frac{\\pi}{2} - \\theta\\right) = \\tan\\theta$$`,
      related_formulas: `- [Sine-Cosine Cofunction](!/trigonometry/formulas#sine-cosine_cofunction)\n- [Cosine-Sine Cofunction](!/trigonometry/formulas#cosine-sine_cofunction)`,
      related_definitions: `- [Complementary Angles](!/trigonometry/definitions#complementary_angles)\n- [Tangent](!/trigonometry/definitions#tangent)\n- [Cotangent](!/trigonometry/definitions#cotangent)`,
    },
  },



// ─── Category: Supplement & Shift Identities (6 entries) ────────────


  {
    name: 'Sine Supplement Identity',
    entity: 'supplementary_angles',
    category: 'Supplement & Shift Identities',
    formula: `$$\\sin(\\pi - \\theta) = \\sin\\theta$$`,
    link: { label: 'Complementary and Supplementary Angles', url: '/trigonometry/degrees-radians#8' },
    fields: {
      explanation: `Supplementary angles share the same sine. On the unit circle, the points at $\\theta$ and $\\pi - \\theta$ are reflections across the $y$-axis, preserving the $y$-coordinate.`,
      related_formulas: `- [Cosine Supplement Identity](!/trigonometry/formulas#cosine_supplement_identity)\n- [Tangent Supplement Identity](!/trigonometry/formulas#tangent_supplement_identity)`,
      related_definitions: `- [Supplementary Angles](!/trigonometry/definitions#supplementary_angles)\n- [Sine](!/trigonometry/definitions#sine)`,
    },
  },

  {
    name: 'Cosine Supplement Identity',
    entity: 'supplementary_angles',
    category: 'Supplement & Shift Identities',
    formula: `$$\\cos(\\pi - \\theta) = -\\cos\\theta$$`,
    link: { label: 'Complementary and Supplementary Angles', url: '/trigonometry/degrees-radians#8' },
    fields: {
      explanation: `Supplementary angles have opposite cosines. Reflecting across the $y$-axis negates the $x$-coordinate.`,
      related_formulas: `- [Sine Supplement Identity](!/trigonometry/formulas#sine_supplement_identity)\n- [Tangent Supplement Identity](!/trigonometry/formulas#tangent_supplement_identity)`,
      related_definitions: `- [Supplementary Angles](!/trigonometry/definitions#supplementary_angles)\n- [Cosine](!/trigonometry/definitions#cosine)`,
    },
  },

  {
    name: 'Tangent Supplement Identity',
    entity: 'supplementary_angles',
    category: 'Supplement & Shift Identities',
    formula: `$$\\tan(\\pi - \\theta) = -\\tan\\theta$$`,
    link: { label: 'Complementary and Supplementary Angles', url: '/trigonometry/degrees-radians#8' },
    fields: {
      explanation: `The tangent of a supplementary angle is negated. Follows from $\\frac{\\sin\\theta}{-\\cos\\theta} = -\\tan\\theta$.`,
      related_formulas: `- [Sine Supplement Identity](!/trigonometry/formulas#sine_supplement_identity)\n- [Cosine Supplement Identity](!/trigonometry/formulas#cosine_supplement_identity)`,
      related_definitions: `- [Supplementary Angles](!/trigonometry/definitions#supplementary_angles)\n- [Tangent](!/trigonometry/definitions#tangent)`,
    },
  },

  {
    name: 'Sine Anti-Supplement Shift',
    entity: 'sine',
    category: 'Supplement & Shift Identities',
    formula: `$$\\sin(\\pi + \\theta) = -\\sin\\theta$$`,
    link: { label: 'Shift Identities', url: '/trigonometry/identities#shift' },
    fields: {
      explanation: `Adding $\\pi$ to the angle moves the point to the diametrically opposite position on the unit circle, negating both coordinates.`,
      variants: `$$\\cos(\\pi + \\theta) = -\\cos\\theta$$`,
      related_formulas: `- [Cosine Anti-Supplement Shift](!/trigonometry/formulas#cosine_anti-supplement_shift)\n- [Sine Supplement Identity](!/trigonometry/formulas#sine_supplement_identity)`,
      related_definitions: `- [Sine](!/trigonometry/definitions#sine)\n- [Unit Circle](!/trigonometry/definitions#unit_circle)`,
    },
  },

  {
    name: 'Cosine Anti-Supplement Shift',
    entity: 'cosine',
    category: 'Supplement & Shift Identities',
    formula: `$$\\cos(\\pi + \\theta) = -\\cos\\theta$$`,
    link: { label: 'Shift Identities', url: '/trigonometry/identities#shift' },
    fields: {
      explanation: `Adding $\\pi$ negates the $x$-coordinate on the unit circle. Combined with $\\sin(\\pi + \\theta) = -\\sin\\theta$, this implies $\\tan(\\pi + \\theta) = \\tan\\theta$ (the basis for tangent's $\\pi$ period).`,
      related_formulas: `- [Sine Anti-Supplement Shift](!/trigonometry/formulas#sine_anti-supplement_shift)\n- [Tangent Periodicity](!/trigonometry/formulas#tangent_periodicity)`,
      related_definitions: `- [Cosine](!/trigonometry/definitions#cosine)\n- [Unit Circle](!/trigonometry/definitions#unit_circle)`,
    },
  },

  {
    name: 'Quadrature Shift - Sine',
    entity: 'sine',
    category: 'Supplement & Shift Identities',
    formula: `$$\\sin\\!\\left(\\frac{\\pi}{2} + \\theta\\right) = \\cos\\theta$$`,
    link: { label: 'Shift Identities', url: '/trigonometry/identities#shift' },
    fields: {
      explanation: `Adding $\\frac{\\pi}{2}$ to the argument of sine produces cosine. This is the forward-shift counterpart of the cofunction identity (which subtracts $\\frac{\\pi}{2}$).`,
      variants: `$$\\cos\\!\\left(\\frac{\\pi}{2} + \\theta\\right) = -\\sin\\theta$$\n\n$$\\tan\\!\\left(\\frac{\\pi}{2} + \\theta\\right) = -\\cot\\theta$$`,
      related_formulas: `- [Sine-Cosine Cofunction](!/trigonometry/formulas#sine-cosine_cofunction)\n- [Cosine-Sine Cofunction](!/trigonometry/formulas#cosine-sine_cofunction)`,
      related_definitions: `- [Sine](!/trigonometry/definitions#sine)\n- [Cosine](!/trigonometry/definitions#cosine)`,
    },
  },



// ─── Category: Periodicity Identities (3 entries) ───────────────────


  {
    name: 'Sine Periodicity',
    entity: 'periodic_function',
    category: 'Periodicity Identities',
    formula: `$$\\sin(\\theta + 2\\pi) = \\sin\\theta$$`,
    link: { label: 'Periodicity', url: '/trigonometry/properties#1' },
    fields: {
      explanation: `Sine repeats every $2\\pi$ radians. A full rotation returns the point on the unit circle to its starting position, so the $y$-coordinate is unchanged.`,
      conditions: `For all $\\theta$. More generally: $\\sin(\\theta + 2n\\pi) = \\sin\\theta$ for any integer $n$.`,
      variants: `$$\\csc(\\theta + 2\\pi) = \\csc\\theta$$`,
      related_formulas: `- [Cosine Periodicity](!/trigonometry/formulas#cosine_periodicity)\n- [Tangent Periodicity](!/trigonometry/formulas#tangent_periodicity)`,
      related_definitions: `- [Periodic Function](!/trigonometry/definitions#periodic_function)\n- [Coterminal Angles](!/trigonometry/definitions#coterminal_angles)`,
    },
  },

  {
    name: 'Cosine Periodicity',
    entity: 'periodic_function',
    category: 'Periodicity Identities',
    formula: `$$\\cos(\\theta + 2\\pi) = \\cos\\theta$$`,
    link: { label: 'Periodicity', url: '/trigonometry/properties#1' },
    fields: {
      explanation: `Cosine repeats every $2\\pi$ radians. A full rotation preserves the $x$-coordinate on the unit circle.`,
      conditions: `For all $\\theta$. More generally: $\\cos(\\theta + 2n\\pi) = \\cos\\theta$ for any integer $n$.`,
      variants: `$$\\sec(\\theta + 2\\pi) = \\sec\\theta$$`,
      related_formulas: `- [Sine Periodicity](!/trigonometry/formulas#sine_periodicity)\n- [Tangent Periodicity](!/trigonometry/formulas#tangent_periodicity)`,
      related_definitions: `- [Periodic Function](!/trigonometry/definitions#periodic_function)\n- [Coterminal Angles](!/trigonometry/definitions#coterminal_angles)`,
    },
  },

  {
    name: 'Tangent Periodicity',
    entity: 'periodic_function',
    category: 'Periodicity Identities',
    formula: `$$\\tan(\\theta + \\pi) = \\tan\\theta$$`,
    link: { label: 'Periodicity', url: '/trigonometry/properties#1' },
    fields: {
      explanation: `Tangent has the shorter period $\\pi$. A half rotation negates both coordinates, but the ratio $\\frac{y}{x}$ is unchanged.`,
      conditions: `For all $\\theta$ where $\\tan\\theta$ is defined. More generally: $\\tan(\\theta + n\\pi) = \\tan\\theta$ for any integer $n$.`,
      variants: `$$\\cot(\\theta + \\pi) = \\cot\\theta$$`,
      related_formulas: `- [Sine Periodicity](!/trigonometry/formulas#sine_periodicity)\n- [Cosine Periodicity](!/trigonometry/formulas#cosine_periodicity)\n- [Cosine Anti-Supplement Shift](!/trigonometry/formulas#cosine_anti-supplement_shift)`,
      related_definitions: `- [Periodic Function](!/trigonometry/definitions#periodic_function)\n- [Tangent](!/trigonometry/definitions#tangent)`,
    },
  },


// ─── Trigonometry Formulas — Batch 3 ─────────────────────────────────
// Categories: Sum & Difference, Double Angle, Half-Angle, Triple Angle, Power-Reducing
// 15 entries
// All section anchors verified against extract_sections output


// ─── Category: Sum and Difference Formulas (3 entries) ──────────────


  {
    name: 'Sine Sum and Difference',
    entity: 'sine',
    category: 'Sum & Difference Formulas',
    formula: `$$\\sin(A \\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B$$`,
    link: { label: 'Angle Sum Identities', url: '/trigonometry/identities#sum' },
    fields: {
      explanation: `Expresses the sine of a sum or difference of two angles in terms of sines and cosines of the individual angles. The $\\pm$ signs match on both sides.`,
      variants: `$$\\sin(A + B) = \\sin A\\cos B + \\cos A\\sin B$$\n\n$$\\sin(A - B) = \\sin A\\cos B - \\cos A\\sin B$$`,
      related_formulas: `- [Cosine Sum and Difference](!/trigonometry/formulas#cosine_sum_and_difference)\n- [Tangent Sum and Difference](!/trigonometry/formulas#tangent_sum_and_difference)\n- [Sine Double Angle](!/trigonometry/formulas#sine_double_angle)`,
      related_definitions: `- [Sine](!/trigonometry/definitions#sine)\n- [Cosine](!/trigonometry/definitions#cosine)`,
    },
  },

  {
    name: 'Cosine Sum and Difference',
    entity: 'cosine',
    category: 'Sum & Difference Formulas',
    formula: `$$\\cos(A \\pm B) = \\cos A\\cos B \\mp \\sin A\\sin B$$`,
    link: { label: 'Angle Sum Identities', url: '/trigonometry/identities#sum' },
    fields: {
      explanation: `Expresses the cosine of a sum or difference. Note the sign reversal: the $\\pm$ on the left corresponds to $\\mp$ on the right.`,
      variants: `$$\\cos(A + B) = \\cos A\\cos B - \\sin A\\sin B$$\n\n$$\\cos(A - B) = \\cos A\\cos B + \\sin A\\sin B$$`,
      related_formulas: `- [Sine Sum and Difference](!/trigonometry/formulas#sine_sum_and_difference)\n- [Tangent Sum and Difference](!/trigonometry/formulas#tangent_sum_and_difference)\n- [Cosine Double Angle](!/trigonometry/formulas#cosine_double_angle)`,
      related_definitions: `- [Cosine](!/trigonometry/definitions#cosine)\n- [Sine](!/trigonometry/definitions#sine)`,
    },
  },

  {
    name: 'Tangent Sum and Difference',
    entity: 'tangent',
    category: 'Sum & Difference Formulas',
    formula: `$$\\tan(A \\pm B) = \\frac{\\tan A \\pm \\tan B}{1 \\mp \\tan A\\tan B}$$`,
    link: { label: 'Angle Sum Identities', url: '/trigonometry/identities#sum' },
    fields: {
      explanation: `Expresses the tangent of a sum or difference. The numerator sign matches the left side; the denominator sign is opposite.`,
      conditions: `$\\cos A \\neq 0$, $\\cos B \\neq 0$, and $1 \\mp \\tan A\\tan B \\neq 0$.`,
      variants: `$$\\tan(A + B) = \\frac{\\tan A + \\tan B}{1 - \\tan A\\tan B}$$\n\n$$\\tan(A - B) = \\frac{\\tan A - \\tan B}{1 + \\tan A\\tan B}$$`,
      related_formulas: `- [Sine Sum and Difference](!/trigonometry/formulas#sine_sum_and_difference)\n- [Cosine Sum and Difference](!/trigonometry/formulas#cosine_sum_and_difference)\n- [Tangent Double Angle](!/trigonometry/formulas#tangent_double_angle)`,
      related_definitions: `- [Tangent](!/trigonometry/definitions#tangent)`,
    },
  },



// ─── Category: Double Angle Formulas (3 entries) ────────────────────


  {
    name: 'Sine Double Angle',
    entity: 'sine',
    category: 'Double Angle Formulas',
    formula: `$$\\sin 2A = 2\\sin A\\cos A$$`,
    link: { label: 'Double Angle Identities', url: '/trigonometry/identities#double' },
    fields: {
      explanation: `The sine of twice an angle equals twice the product of its sine and cosine. Obtained by setting $B = A$ in the sine sum formula.`,
      derivation: `From $\\sin(A + B) = \\sin A\\cos B + \\cos A\\sin B$, set $B = A$:\n\n$$\\sin 2A = \\sin A\\cos A + \\cos A\\sin A = 2\\sin A\\cos A$$`,
      related_formulas: `- [Cosine Double Angle](!/trigonometry/formulas#cosine_double_angle)\n- [Tangent Double Angle](!/trigonometry/formulas#tangent_double_angle)\n- [Sine Sum and Difference](!/trigonometry/formulas#sine_sum_and_difference)`,
      related_definitions: `- [Sine](!/trigonometry/definitions#sine)\n- [Cosine](!/trigonometry/definitions#cosine)`,
    },
  },

  {
    name: 'Cosine Double Angle',
    entity: 'cosine',
    category: 'Double Angle Formulas',
    formula: `$$\\cos 2A = \\cos^2 A - \\sin^2 A$$`,
    link: { label: 'Double Angle Identities', url: '/trigonometry/identities#double' },
    fields: {
      explanation: `The cosine of twice an angle. This identity has three standard forms, obtained by applying $\\sin^2 A + \\cos^2 A = 1$ to eliminate one function.`,
      derivation: `From $\\cos(A + B) = \\cos A\\cos B - \\sin A\\sin B$, set $B = A$:\n\n$$\\cos 2A = \\cos^2 A - \\sin^2 A$$\n\nSubstitute $\\sin^2 A = 1 - \\cos^2 A$: $\\cos 2A = 2\\cos^2 A - 1$.\n\nSubstitute $\\cos^2 A = 1 - \\sin^2 A$: $\\cos 2A = 1 - 2\\sin^2 A$.`,
      variants: `$$\\cos 2A = 2\\cos^2 A - 1$$\n\n$$\\cos 2A = 1 - 2\\sin^2 A$$`,
      related_formulas: `- [Sine Double Angle](!/trigonometry/formulas#sine_double_angle)\n- [Tangent Double Angle](!/trigonometry/formulas#tangent_double_angle)\n- [Sine Squared Reduction](!/trigonometry/formulas#sine_squared_reduction)\n- [Cosine Squared Reduction](!/trigonometry/formulas#cosine_squared_reduction)`,
      related_definitions: `- [Cosine](!/trigonometry/definitions#cosine)\n- [Sine](!/trigonometry/definitions#sine)`,
    },
  },

  {
    name: 'Tangent Double Angle',
    entity: 'tangent',
    category: 'Double Angle Formulas',
    formula: `$$\\tan 2A = \\frac{2\\tan A}{1 - \\tan^2 A}$$`,
    link: { label: 'Double Angle Identities', url: '/trigonometry/identities#double' },
    fields: {
      explanation: `The tangent of twice an angle. Obtained by setting $B = A$ in the tangent sum formula.`,
      conditions: `$\\cos A \\neq 0$ and $\\tan^2 A \\neq 1$ (i.e. $A \\neq \\frac{\\pi}{4} + \\frac{n\\pi}{2}$).`,
      related_formulas: `- [Sine Double Angle](!/trigonometry/formulas#sine_double_angle)\n- [Cosine Double Angle](!/trigonometry/formulas#cosine_double_angle)\n- [Tangent Sum and Difference](!/trigonometry/formulas#tangent_sum_and_difference)`,
      related_definitions: `- [Tangent](!/trigonometry/definitions#tangent)`,
    },
  },



// ─── Category: Half-Angle Formulas (3 entries) ──────────────────────


  {
    name: 'Sine Half Angle',
    entity: 'sine',
    category: 'Half-Angle Formulas',
    formula: `$$\\sin\\frac{A}{2} = \\pm\\sqrt{\\frac{1 - \\cos A}{2}}$$`,
    link: { label: 'Half Angle Identities', url: '/trigonometry/identities#half' },
    fields: {
      explanation: `Expresses the sine of half an angle in terms of the cosine of the full angle. The sign depends on the quadrant of $\\frac{A}{2}$.`,
      derivation: `From $\\cos 2A = 1 - 2\\sin^2 A$, replace $A$ with $\\frac{A}{2}$:\n\n$$\\cos A = 1 - 2\\sin^2\\frac{A}{2} \\implies \\sin^2\\frac{A}{2} = \\frac{1 - \\cos A}{2}$$`,
      conditions: `$+$ if $\\frac{A}{2}$ is in Quadrant I or II; $-$ if in Quadrant III or IV.`,
      related_formulas: `- [Cosine Half Angle](!/trigonometry/formulas#cosine_half_angle)\n- [Tangent Half Angle](!/trigonometry/formulas#tangent_half_angle)\n- [Cosine Double Angle](!/trigonometry/formulas#cosine_double_angle)`,
      related_definitions: `- [Sine](!/trigonometry/definitions#sine)\n- [Cosine](!/trigonometry/definitions#cosine)`,
    },
  },

  {
    name: 'Cosine Half Angle',
    entity: 'cosine',
    category: 'Half-Angle Formulas',
    formula: `$$\\cos\\frac{A}{2} = \\pm\\sqrt{\\frac{1 + \\cos A}{2}}$$`,
    link: { label: 'Half Angle Identities', url: '/trigonometry/identities#half' },
    fields: {
      explanation: `Expresses the cosine of half an angle in terms of the cosine of the full angle. The sign depends on the quadrant of $\\frac{A}{2}$.`,
      derivation: `From $\\cos 2A = 2\\cos^2 A - 1$, replace $A$ with $\\frac{A}{2}$:\n\n$$\\cos A = 2\\cos^2\\frac{A}{2} - 1 \\implies \\cos^2\\frac{A}{2} = \\frac{1 + \\cos A}{2}$$`,
      conditions: `$+$ if $\\frac{A}{2}$ is in Quadrant I or IV; $-$ if in Quadrant II or III.`,
      related_formulas: `- [Sine Half Angle](!/trigonometry/formulas#sine_half_angle)\n- [Tangent Half Angle](!/trigonometry/formulas#tangent_half_angle)\n- [Cosine Double Angle](!/trigonometry/formulas#cosine_double_angle)`,
      related_definitions: `- [Cosine](!/trigonometry/definitions#cosine)`,
    },
  },

  {
    name: 'Tangent Half Angle',
    entity: 'tangent',
    category: 'Half-Angle Formulas',
    formula: `$$\\tan\\frac{A}{2} = \\pm\\sqrt{\\frac{1 - \\cos A}{1 + \\cos A}}$$`,
    link: { label: 'Half Angle Identities', url: '/trigonometry/identities#half' },
    fields: {
      explanation: `Expresses the tangent of half an angle. The sign-free alternate forms avoid the $\\pm$ ambiguity entirely.`,
      conditions: `$\\cos A \\neq -1$ (i.e. $A \\neq \\pi + 2n\\pi$).`,
      variants: `$$\\tan\\frac{A}{2} = \\frac{\\sin A}{1 + \\cos A}$$\n\n$$\\tan\\frac{A}{2} = \\frac{1 - \\cos A}{\\sin A}$$`,
      related_formulas: `- [Sine Half Angle](!/trigonometry/formulas#sine_half_angle)\n- [Cosine Half Angle](!/trigonometry/formulas#cosine_half_angle)`,
      related_definitions: `- [Tangent](!/trigonometry/definitions#tangent)\n- [Cosine](!/trigonometry/definitions#cosine)`,
    },
  },



// ─── Category: Triple Angle Formulas (3 entries) ────────────────────


  {
    name: 'Sine Triple Angle',
    entity: 'sine',
    category: 'Triple Angle Formulas',
    formula: `$$\\sin 3A = 3\\sin A - 4\\sin^3 A$$`,
    link: { label: 'Triple Angle Identities', url: '/trigonometry/identities#triple' },
    fields: {
      explanation: `Expresses $\\sin 3A$ purely in terms of $\\sin A$. Useful for reducing higher-multiple arguments to single-angle expressions.`,
      derivation: `Write $\\sin 3A = \\sin(2A + A)$, expand with the sum formula, then substitute the double-angle identities and simplify.`,
      related_formulas: `- [Cosine Triple Angle](!/trigonometry/formulas#cosine_triple_angle)\n- [Tangent Triple Angle](!/trigonometry/formulas#tangent_triple_angle)\n- [Sine Double Angle](!/trigonometry/formulas#sine_double_angle)`,
      related_definitions: `- [Sine](!/trigonometry/definitions#sine)`,
    },
  },

  {
    name: 'Cosine Triple Angle',
    entity: 'cosine',
    category: 'Triple Angle Formulas',
    formula: `$$\\cos 3A = 4\\cos^3 A - 3\\cos A$$`,
    link: { label: 'Triple Angle Identities', url: '/trigonometry/identities#triple' },
    fields: {
      explanation: `Expresses $\\cos 3A$ purely in terms of $\\cos A$. The Chebyshev polynomial $T_3(x) = 4x^3 - 3x$ has the same form.`,
      derivation: `Write $\\cos 3A = \\cos(2A + A)$, expand with the sum formula, then substitute the double-angle identities and simplify.`,
      related_formulas: `- [Sine Triple Angle](!/trigonometry/formulas#sine_triple_angle)\n- [Tangent Triple Angle](!/trigonometry/formulas#tangent_triple_angle)\n- [Cosine Double Angle](!/trigonometry/formulas#cosine_double_angle)`,
      related_definitions: `- [Cosine](!/trigonometry/definitions#cosine)`,
    },
  },

  {
    name: 'Tangent Triple Angle',
    entity: 'tangent',
    category: 'Triple Angle Formulas',
    formula: `$$\\tan 3A = \\frac{3\\tan A - \\tan^3 A}{1 - 3\\tan^2 A}$$`,
    link: { label: 'Triple Angle Identities', url: '/trigonometry/identities#triple' },
    fields: {
      explanation: `Expresses $\\tan 3A$ in terms of $\\tan A$.`,
      conditions: `$\\cos A \\neq 0$ and $1 - 3\\tan^2 A \\neq 0$.`,
      related_formulas: `- [Sine Triple Angle](!/trigonometry/formulas#sine_triple_angle)\n- [Cosine Triple Angle](!/trigonometry/formulas#cosine_triple_angle)\n- [Tangent Double Angle](!/trigonometry/formulas#tangent_double_angle)`,
      related_definitions: `- [Tangent](!/trigonometry/definitions#tangent)`,
    },
  },



// ─── Category: Power-Reducing Formulas (3 entries) ──────────────────


  {
    name: 'Sine Squared Reduction',
    entity: 'sine',
    category: 'Power-Reducing Formulas',
    formula: `$$\\sin^2 A = \\frac{1 - \\cos 2A}{2}$$`,
    link: { label: 'Power-Reducing Identities', url: '/trigonometry/identities#power_reducing' },
    fields: {
      explanation: `Replaces $\\sin^2 A$ with a first-power expression involving $\\cos 2A$. Essential for integration of even powers of sine.`,
      derivation: `Rearrange $\\cos 2A = 1 - 2\\sin^2 A$:\n\n$$2\\sin^2 A = 1 - \\cos 2A \\implies \\sin^2 A = \\frac{1 - \\cos 2A}{2}$$`,
      related_formulas: `- [Cosine Squared Reduction](!/trigonometry/formulas#cosine_squared_reduction)\n- [Tangent Squared Reduction](!/trigonometry/formulas#tangent_squared_reduction)\n- [Cosine Double Angle](!/trigonometry/formulas#cosine_double_angle)`,
      related_definitions: `- [Sine](!/trigonometry/definitions#sine)`,
    },
  },

  {
    name: 'Cosine Squared Reduction',
    entity: 'cosine',
    category: 'Power-Reducing Formulas',
    formula: `$$\\cos^2 A = \\frac{1 + \\cos 2A}{2}$$`,
    link: { label: 'Power-Reducing Identities', url: '/trigonometry/identities#power_reducing' },
    fields: {
      explanation: `Replaces $\\cos^2 A$ with a first-power expression involving $\\cos 2A$. Essential for integration of even powers of cosine.`,
      derivation: `Rearrange $\\cos 2A = 2\\cos^2 A - 1$:\n\n$$2\\cos^2 A = 1 + \\cos 2A \\implies \\cos^2 A = \\frac{1 + \\cos 2A}{2}$$`,
      related_formulas: `- [Sine Squared Reduction](!/trigonometry/formulas#sine_squared_reduction)\n- [Tangent Squared Reduction](!/trigonometry/formulas#tangent_squared_reduction)\n- [Cosine Double Angle](!/trigonometry/formulas#cosine_double_angle)`,
      related_definitions: `- [Cosine](!/trigonometry/definitions#cosine)`,
    },
  },

  {
    name: 'Tangent Squared Reduction',
    entity: 'tangent',
    category: 'Power-Reducing Formulas',
    formula: `$$\\tan^2 A = \\frac{1 - \\cos 2A}{1 + \\cos 2A}$$`,
    link: { label: 'Power-Reducing Identities', url: '/trigonometry/identities#power_reducing' },
    fields: {
      explanation: `Replaces $\\tan^2 A$ with an expression involving $\\cos 2A$. Obtained by dividing the sine reduction by the cosine reduction.`,
      conditions: `$\\cos 2A \\neq -1$ (i.e. $A \\neq \\frac{\\pi}{2} + n\\pi$).`,
      related_formulas: `- [Sine Squared Reduction](!/trigonometry/formulas#sine_squared_reduction)\n- [Cosine Squared Reduction](!/trigonometry/formulas#cosine_squared_reduction)`,
      related_definitions: `- [Tangent](!/trigonometry/definitions#tangent)`,
    },
  },


// ─── Trigonometry Formulas — Batch 4 ─────────────────────────────────
// Categories: Product-to-Sum, Sum-to-Product
// 8 entries
// All section anchors verified against extract_sections output


// ─── Category: Product-to-Sum Formulas (4 entries) ──────────────────


  {
    name: 'Product to Sum - Cosine Cosine',
    entity: 'cosine',
    category: 'Product-to-Sum Formulas',
    formula: `$$\\cos A\\cos B = \\frac{1}{2}[\\cos(A - B) + \\cos(A + B)]$$`,
    link: { label: 'Product-to-Sum Identities', url: '/trigonometry/identities#product_sum' },
    fields: {
      explanation: `Converts a product of two cosines into a sum of cosines. Derived by adding the cosine sum and difference formulas.`,
      related_formulas: `- [Product to Sum - Sine Sine](!/trigonometry/formulas#product_to_sum_-_sine_sine)\n- [Product to Sum - Sine Cosine](!/trigonometry/formulas#product_to_sum_-_sine_cosine)\n- [Sum to Product - Cosine Sum](!/trigonometry/formulas#sum_to_product_-_cosine_sum)`,
      related_definitions: `- [Cosine](!/trigonometry/definitions#cosine)`,
    },
  },

  {
    name: 'Product to Sum - Sine Sine',
    entity: 'sine',
    category: 'Product-to-Sum Formulas',
    formula: `$$\\sin A\\sin B = \\frac{1}{2}[\\cos(A - B) - \\cos(A + B)]$$`,
    link: { label: 'Product-to-Sum Identities', url: '/trigonometry/identities#product_sum' },
    fields: {
      explanation: `Converts a product of two sines into a difference of cosines. Derived by subtracting the cosine sum formula from the cosine difference formula.`,
      related_formulas: `- [Product to Sum - Cosine Cosine](!/trigonometry/formulas#product_to_sum_-_cosine_cosine)\n- [Product to Sum - Sine Cosine](!/trigonometry/formulas#product_to_sum_-_sine_cosine)`,
      related_definitions: `- [Sine](!/trigonometry/definitions#sine)\n- [Cosine](!/trigonometry/definitions#cosine)`,
    },
  },

  {
    name: 'Product to Sum - Sine Cosine',
    entity: 'sine',
    category: 'Product-to-Sum Formulas',
    formula: `$$\\sin A\\cos B = \\frac{1}{2}[\\sin(A + B) + \\sin(A - B)]$$`,
    link: { label: 'Product-to-Sum Identities', url: '/trigonometry/identities#product_sum' },
    fields: {
      explanation: `Converts a product of sine and cosine into a sum of sines. Derived by adding the sine sum and difference formulas.`,
      related_formulas: `- [Product to Sum - Cosine Sine](!/trigonometry/formulas#product_to_sum_-_cosine_sine)\n- [Product to Sum - Cosine Cosine](!/trigonometry/formulas#product_to_sum_-_cosine_cosine)`,
      related_definitions: `- [Sine](!/trigonometry/definitions#sine)\n- [Cosine](!/trigonometry/definitions#cosine)`,
    },
  },

  {
    name: 'Product to Sum - Cosine Sine',
    entity: 'cosine',
    category: 'Product-to-Sum Formulas',
    formula: `$$\\cos A\\sin B = \\frac{1}{2}[\\sin(A + B) - \\sin(A - B)]$$`,
    link: { label: 'Product-to-Sum Identities', url: '/trigonometry/identities#product_sum' },
    fields: {
      explanation: `Converts a product of cosine and sine into a difference of sines. The order of $A$ and $B$ matters — swapping them changes the sign pattern.`,
      related_formulas: `- [Product to Sum - Sine Cosine](!/trigonometry/formulas#product_to_sum_-_sine_cosine)\n- [Product to Sum - Sine Sine](!/trigonometry/formulas#product_to_sum_-_sine_sine)`,
      related_definitions: `- [Cosine](!/trigonometry/definitions#cosine)\n- [Sine](!/trigonometry/definitions#sine)`,
    },
  },



// ─── Category: Sum-to-Product Formulas (4 entries) ──────────────────

  {
    name: 'Sum to Product - Sine Sum',
    entity: 'sine',
    category: 'Sum-to-Product Formulas',
    formula: `$$\\sin A + \\sin B = 2\\sin\\frac{A + B}{2}\\cos\\frac{A - B}{2}$$`,
    link: { label: 'Sum-to-Product Identities', url: '/trigonometry/identities#sum_product' },
    fields: {
      explanation: `Converts a sum of sines into a product of sine and cosine. The arguments are the half-sum and half-difference of the original angles.`,
      related_formulas: `- [Sum to Product - Sine Difference](!/trigonometry/formulas#sum_to_product_-_sine_difference)\n- [Product to Sum - Sine Cosine](!/trigonometry/formulas#product_to_sum_-_sine_cosine)`,
      related_definitions: `- [Sine](!/trigonometry/definitions#sine)\n- [Cosine](!/trigonometry/definitions#cosine)`,
    },
  },

  {
    name: 'Sum to Product - Sine Difference',
    entity: 'sine',
    category: 'Sum-to-Product Formulas',
    formula: `$$\\sin A - \\sin B = 2\\cos\\frac{A + B}{2}\\sin\\frac{A - B}{2}$$`,
    link: { label: 'Sum-to-Product Identities', url: '/trigonometry/identities#sum_product' },
    fields: {
      explanation: `Converts a difference of sines into a product of cosine and sine. Note the switch: the sum formula has sine first, the difference has cosine first.`,
      related_formulas: `- [Sum to Product - Sine Sum](!/trigonometry/formulas#sum_to_product_-_sine_sum)\n- [Product to Sum - Sine Cosine](!/trigonometry/formulas#product_to_sum_-_sine_cosine)`,
      related_definitions: `- [Sine](!/trigonometry/definitions#sine)\n- [Cosine](!/trigonometry/definitions#cosine)`,
    },
  },

  {
    name: 'Sum to Product - Cosine Sum',
    entity: 'cosine',
    category: 'Sum-to-Product Formulas',
    formula: `$$\\cos A + \\cos B = 2\\cos\\frac{A + B}{2}\\cos\\frac{A - B}{2}$$`,
    link: { label: 'Sum-to-Product Identities', url: '/trigonometry/identities#sum_product' },
    fields: {
      explanation: `Converts a sum of cosines into a product of two cosines evaluated at the half-sum and half-difference.`,
      related_formulas: `- [Sum to Product - Cosine Difference](!/trigonometry/formulas#sum_to_product_-_cosine_difference)\n- [Product to Sum - Cosine Cosine](!/trigonometry/formulas#product_to_sum_-_cosine_cosine)`,
      related_definitions: `- [Cosine](!/trigonometry/definitions#cosine)`,
    },
  },

  {
    name: 'Sum to Product - Cosine Difference',
    entity: 'cosine',
    category: 'Sum-to-Product Formulas',
    formula: `$$\\cos A - \\cos B = -2\\sin\\frac{A + B}{2}\\sin\\frac{A - B}{2}$$`,
    link: { label: 'Sum-to-Product Identities', url: '/trigonometry/identities#sum_product' },
    fields: {
      explanation: `Converts a difference of cosines into a product. Note the leading negative sign — this is the only sum-to-product formula with a minus in front.`,
      related_formulas: `- [Sum to Product - Cosine Sum](!/trigonometry/formulas#sum_to_product_-_cosine_sum)\n- [Product to Sum - Sine Sine](!/trigonometry/formulas#product_to_sum_-_sine_sine)`,
      related_definitions: `- [Cosine](!/trigonometry/definitions#cosine)\n- [Sine](!/trigonometry/definitions#sine)`,
    },
  },


  // ─── Trigonometry Formulas — Batch 5 ─────────────────────────────────
// Categories: Triangle Formulas, Inverse Trig Identities, General Solutions
// 13 entries
// All section anchors verified against extract_sections output


// ─── Category: Triangle Formulas (5 entries) ────────────────────────


  {
    name: 'Law of Sines',
    entity: 'sine',
    category: 'Triangle Formulas',
    formula: `$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$$`,
    link: { label: 'The Law of Sines', url: '/trigonometry/sines-cosines-law#2' },
    fields: {
      explanation: `In any triangle, each side is proportional to the sine of its opposite angle. The common ratio equals the diameter of the circumscribed circle ($2R$).`,
      conditions: `Valid for any triangle (acute, right, or obtuse). The SSA configuration may produce zero, one, or two solutions (ambiguous case).`,
      variants: `$$\\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c}$$`,
      related_formulas: `- [Law of Cosines](!/trigonometry/formulas#law_of_cosines)\n- [Law of Tangents](!/trigonometry/formulas#law_of_tangents)\n- [Triangle Area - SAS](!/trigonometry/formulas#triangle_area_-_sas)`,
      related_definitions: `- [Sine](!/trigonometry/definitions#sine)`,
    },
  },

  {
    name: 'Law of Cosines',
    entity: 'cosine',
    category: 'Triangle Formulas',
    formula: `$$c^2 = a^2 + b^2 - 2ab\\cos C$$`,
    link: { label: 'The Law of Cosines', url: '/trigonometry/sines-cosines-law#5' },
    fields: {
      explanation: `Relates the three sides of any triangle to the cosine of one angle. Generalizes the Pythagorean theorem: when $C = 90°$, the formula reduces to $c^2 = a^2 + b^2$.`,
      variants: `$$a^2 = b^2 + c^2 - 2bc\\cos A$$\n\n$$b^2 = a^2 + c^2 - 2ac\\cos B$$\n\nAngle-finding form:\n\n$$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$$`,
      related_formulas: `- [Law of Sines](!/trigonometry/formulas#law_of_sines)\n- [Law of Tangents](!/trigonometry/formulas#law_of_tangents)\n- [Herons Formula](!/trigonometry/formulas#herons_formula)`,
      related_definitions: `- [Cosine](!/trigonometry/definitions#cosine)`,
    },
  },

  {
    name: 'Law of Tangents',
    entity: 'tangent',
    category: 'Triangle Formulas',
    formula: `$$\\frac{a - b}{a + b} = \\frac{\\tan\\frac{A - B}{2}}{\\tan\\frac{A + B}{2}}$$`,
    link: { label: 'Choosing Between the Two Laws', url: '/trigonometry/sines-cosines-law#7' },
    fields: {
      explanation: `Relates the difference and sum of two sides to the tangent of the half-difference and half-sum of their opposite angles. Less commonly used than the laws of sines and cosines, but avoids the ambiguous case.`,
      conditions: `$a \\neq b$ (otherwise both sides are zero). Valid for any triangle.`,
      related_formulas: `- [Law of Sines](!/trigonometry/formulas#law_of_sines)\n- [Law of Cosines](!/trigonometry/formulas#law_of_cosines)`,
      related_definitions: `- [Tangent](!/trigonometry/definitions#tangent)`,
    },
  },

  {
    name: 'Triangle Area - SAS',
    entity: 'sine',
    category: 'Triangle Formulas',
    formula: `$$A = \\frac{1}{2}ab\\sin C$$`,
    link: { label: 'Area of a Triangle Using Trigonometry', url: '/trigonometry/sines-cosines-law#8' },
    fields: {
      explanation: `The area of a triangle equals half the product of two sides times the sine of the included angle. Works for all triangles — the standard base-times-height formula is the special case where $C = 90°$.`,
      conditions: `Requires the SAS configuration (two sides and the included angle). $\\sin C > 0$ for all valid triangle angles ($0° < C < 180°$).`,
      notation: `$a$, $b$ = two sides; $C$ = included angle; $A$ = area (not the angle $A$).`,
      related_formulas: `- [Herons Formula](!/trigonometry/formulas#herons_formula)\n- [Law of Sines](!/trigonometry/formulas#law_of_sines)`,
      related_definitions: `- [Sine](!/trigonometry/definitions#sine)`,
    },
  },

  {
    name: 'Herons Formula',
    entity: 'sine',
    category: 'Triangle Formulas',
    formula: `$$A = \\sqrt{s(s-a)(s-b)(s-c)}$$`,
    link: { label: 'Heron', url: '/trigonometry/sines-cosines-law#9' },
    fields: {
      explanation: `Computes the area of a triangle from its three side lengths alone, with no angle information required. The semi-perimeter $s$ absorbs the side data into a symmetric form.`,
      notation: `$s = \\frac{a + b + c}{2}$ (semi-perimeter). $a$, $b$, $c$ = side lengths.`,
      conditions: `$s - a > 0$, $s - b > 0$, $s - c > 0$ (triangle inequality must hold).`,
      related_formulas: `- [Triangle Area - SAS](!/trigonometry/formulas#triangle_area_-_sas)\n- [Law of Cosines](!/trigonometry/formulas#law_of_cosines)`,
      related_definitions: `- [Sine](!/trigonometry/definitions#sine)`,
    },
  },



// ─── Category: Inverse Trigonometric Identities (5 entries) ─────────


  {
    name: 'Arcsin Plus Arccos',
    entity: 'inverse_trigonometric_function',
    category: 'Inverse Trigonometric Identities',
    formula: `$$\\arcsin x + \\arccos x = \\frac{\\pi}{2}$$`,
    link: { label: 'The Arccosine Function', url: '/trigonometry/inverse-functions#3' },
    fields: {
      explanation: `The arcsine and arccosine of the same value are complementary angles. This is the inverse-function version of the cofunction identity $\\sin\\theta = \\cos\\!\\left(\\frac{\\pi}{2} - \\theta\\right)$.`,
      conditions: `$x \\in [-1, 1]$.`,
      related_formulas: `- [Arctan Plus Arccot](!/trigonometry/formulas#arctan_plus_arccot)\n- [Sine-Cosine Cofunction](!/trigonometry/formulas#sine-cosine_cofunction)`,
      related_definitions: `- [Inverse Trigonometric Function](!/trigonometry/definitions#inverse_trigonometric_function)\n- [Complementary Angles](!/trigonometry/definitions#complementary_angles)`,
    },
  },

  {
    name: 'Arctan Plus Arccot',
    entity: 'inverse_trigonometric_function',
    category: 'Inverse Trigonometric Identities',
    formula: `$$\\arctan x + \\operatorname{arccot} x = \\frac{\\pi}{2}$$`,
    link: { label: 'Inverse Reciprocal Functions', url: '/trigonometry/inverse-functions#5' },
    fields: {
      explanation: `The arctangent and arccotangent of the same value are complementary. Parallels the arcsin-plus-arccos identity for the tangent-cotangent pair.`,
      conditions: `$x \\in (-\\infty, \\infty)$.`,
      related_formulas: `- [Arcsin Plus Arccos](!/trigonometry/formulas#arcsin_plus_arccos)\n- [Tangent-Cotangent Cofunction](!/trigonometry/formulas#tangent-cotangent_cofunction)`,
      related_definitions: `- [Inverse Trigonometric Function](!/trigonometry/definitions#inverse_trigonometric_function)`,
    },
  },

  {
    name: 'Arcsin of Negative',
    entity: 'inverse_trigonometric_function',
    category: 'Inverse Trigonometric Identities',
    formula: `$$\\arcsin(-x) = -\\arcsin x$$`,
    link: { label: 'The Arcsine Function', url: '/trigonometry/inverse-functions#2' },
    fields: {
      explanation: `Arcsine is an odd function, inheriting the odd symmetry of sine. Negating the input negates the output.`,
      conditions: `$x \\in [-1, 1]$.`,
      related_formulas: `- [Arccos of Negative](!/trigonometry/formulas#arccos_of_negative)\n- [Arctan of Negative](!/trigonometry/formulas#arctan_of_negative)\n- [Sine Odd Identity](!/trigonometry/formulas#sine_odd_identity)`,
      related_definitions: `- [Inverse Trigonometric Function](!/trigonometry/definitions#inverse_trigonometric_function)`,
    },
  },

  {
    name: 'Arccos of Negative',
    entity: 'inverse_trigonometric_function',
    category: 'Inverse Trigonometric Identities',
    formula: `$$\\arccos(-x) = \\pi - \\arccos x$$`,
    link: { label: 'The Arccosine Function', url: '/trigonometry/inverse-functions#3' },
    fields: {
      explanation: `Arccosine is not odd — negating the input supplements the output rather than negating it. This follows from the supplement identity $\\cos(\\pi - \\theta) = -\\cos\\theta$.`,
      conditions: `$x \\in [-1, 1]$.`,
      related_formulas: `- [Arcsin of Negative](!/trigonometry/formulas#arcsin_of_negative)\n- [Arctan of Negative](!/trigonometry/formulas#arctan_of_negative)\n- [Cosine Supplement Identity](!/trigonometry/formulas#cosine_supplement_identity)`,
      related_definitions: `- [Inverse Trigonometric Function](!/trigonometry/definitions#inverse_trigonometric_function)`,
    },
  },

  {
    name: 'Arctan of Negative',
    entity: 'inverse_trigonometric_function',
    category: 'Inverse Trigonometric Identities',
    formula: `$$\\arctan(-x) = -\\arctan x$$`,
    link: { label: 'The Arctangent Function', url: '/trigonometry/inverse-functions#4' },
    fields: {
      explanation: `Arctangent is an odd function, inheriting the odd symmetry of tangent. Negating the input negates the output.`,
      conditions: `$x \\in (-\\infty, \\infty)$.`,
      related_formulas: `- [Arcsin of Negative](!/trigonometry/formulas#arcsin_of_negative)\n- [Arccos of Negative](!/trigonometry/formulas#arccos_of_negative)\n- [Tangent Odd Identity](!/trigonometry/formulas#tangent_odd_identity)`,
      related_definitions: `- [Inverse Trigonometric Function](!/trigonometry/definitions#inverse_trigonometric_function)`,
    },
  },



// ─── Category: General Solutions (3 entries) ────────────────────────


  {
    name: 'General Solution - Sine Equation',
    entity: 'sine',
    category: 'General Solutions',
    formula: `$$\\sin\\theta = k \\implies \\theta = (-1)^n \\arcsin k + n\\pi$$`,
    link: { label: 'Solving Basic Sine Equations', url: '/trigonometry/equations#2' },
    fields: {
      explanation: `Captures all solutions to $\\sin\\theta = k$ in a single expression. The alternating sign $(-1)^n$ accounts for sine having two solutions per $2\\pi$ period — one in Quadrant I/II and one reflected.`,
      conditions: `$|k| \\leq 1$. No solution if $|k| > 1$.`,
      variants: `Explicit two-family form:\n\n$$\\theta = \\arcsin k + 2n\\pi \\quad\\text{or}\\quad \\theta = \\pi - \\arcsin k + 2n\\pi$$`,
      related_formulas: `- [General Solution - Cosine Equation](!/trigonometry/formulas#general_solution_-_cosine_equation)\n- [General Solution - Tangent Equation](!/trigonometry/formulas#general_solution_-_tangent_equation)`,
      related_definitions: `- [Sine](!/trigonometry/definitions#sine)\n- [Inverse Trigonometric Function](!/trigonometry/definitions#inverse_trigonometric_function)`,
    },
  },

  {
    name: 'General Solution - Cosine Equation',
    entity: 'cosine',
    category: 'General Solutions',
    formula: `$$\\cos\\theta = k \\implies \\theta = \\pm\\arccos k + 2n\\pi$$`,
    link: { label: 'Solving Basic Cosine Equations', url: '/trigonometry/equations#3' },
    fields: {
      explanation: `Captures all solutions to $\\cos\\theta = k$. The $\\pm$ reflects cosine's even symmetry — both $+\\arccos k$ and $-\\arccos k$ are solutions.`,
      conditions: `$|k| \\leq 1$. No solution if $|k| > 1$.`,
      related_formulas: `- [General Solution - Sine Equation](!/trigonometry/formulas#general_solution_-_sine_equation)\n- [General Solution - Tangent Equation](!/trigonometry/formulas#general_solution_-_tangent_equation)`,
      related_definitions: `- [Cosine](!/trigonometry/definitions#cosine)\n- [Inverse Trigonometric Function](!/trigonometry/definitions#inverse_trigonometric_function)`,
    },
  },

  {
    name: 'General Solution - Tangent Equation',
    entity: 'tangent',
    category: 'General Solutions',
    formula: `$$\\tan\\theta = k \\implies \\theta = \\arctan k + n\\pi$$`,
    link: { label: 'Solving Basic Tangent Equations', url: '/trigonometry/equations#4' },
    fields: {
      explanation: `Captures all solutions to $\\tan\\theta = k$. The simplest general solution — tangent has period $\\pi$ and one solution per period, so a single family suffices.`,
      conditions: `$k \\in (-\\infty, \\infty)$. A solution always exists for any real $k$.`,
      related_formulas: `- [General Solution - Sine Equation](!/trigonometry/formulas#general_solution_-_sine_equation)\n- [General Solution - Cosine Equation](!/trigonometry/formulas#general_solution_-_cosine_equation)\n- [Tangent Periodicity](!/trigonometry/formulas#tangent_periodicity)`,
      related_definitions: `- [Tangent](!/trigonometry/definitions#tangent)\n- [Inverse Trigonometric Function](!/trigonometry/definitions#inverse_trigonometric_function)`,
    },
  },



];
    
  
  
  export default trigonometryFormulaList;
  

  //  {
//         name: "Sine Function (sin)",
//         formula: "$\\sin \\theta = \\frac{\\text{Opposite Side}}{\\text{Hypotenuse}}$",
//         fields: {
//           "Explanation": `In a right-angled triangle, the sine of an angle $\\theta$ is defined as the ratio of the length of the side opposite the angle to the length of the hypotenuse. It's a fundamental trigonometric function used to relate angles to side lengths.
//           <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//                 <!-- Triangle -->
//                 <polygon points="50,150 250,150 250,50" fill="none" stroke="#0000FF" stroke-width="1"/>
//                 <!-- Right angle marker -->
//                 <polyline points="250,150 240,150 240,140 250,140" fill="none" stroke="#0000FF" stroke-width="1"/>
//                 <!-- Labels -->
//                 <text x="120" y="170" text-anchor="middle">Adjacent Side</text>
//                 <text x="270" y="140" text-anchor="start" transform="rotate(-90,270,140)">Opposite Side</text>
//                 <text x="150" y="90" text-anchor="middle" transform="rotate(-27,150,90)">Hypotenuse</text>
//                 <!-- Angle Theta -->
//                 <path d="M85,150 A35,35 0 0,0 75,137" fill="none" stroke="red" stroke-width="1"/>
//                 <text x="95" y="145" text-anchor="middle" font-size="12">θ</text>
//             </svg>`,
//           "$\\sin \\theta$": "Sine of angle $\\theta$",
//           "Opposite Side": "Side opposite to angle $\\theta$",
//           "Hypotenuse": "The longest side opposite the right angle",
//           "Example": "If the opposite side is 3 units and the hypotenuse is 5 units, then $\\sin \\theta = \\frac{3}{5} = 0.6$",
//           "Use Cases": "Calculating heights, distances, and in wave functions.",
         
//         },
//         category: "Definitions"
//       },
//       {
//         name: "Cosine Function (cos)",
//         formula: "$\\cos \\theta = \\frac{\\text{Adjacent Side}}{\\text{Hypotenuse}}$",
//         fields: {
//           "Explanation": `In a right-angled triangle, the cosine of an angle $\\theta$ is the ratio of the length of the adjacent side to the angle to the length of the hypotenuse. It's essential for relating side lengths to angles.
//            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//                 <!-- Triangle -->
//                 <polygon points="50,150 250,150 250,50" fill="none" stroke="#0000FF" stroke-width="1"/>
//                 <!-- Right angle marker -->
//                 <polyline points="250,150 240,150 240,140 250,140" fill="none" stroke="#0000FF" stroke-width="1"/>
//                 <!-- Labels -->
//                 <text x="120" y="170" text-anchor="middle">Adjacent Side</text>
//                 <text x="270" y="140" text-anchor="start" transform="rotate(-90,270,140)">Opposite Side</text>
//                 <text x="150" y="90" text-anchor="middle" transform="rotate(-27,150,90)">Hypotenuse</text>
//                 <!-- Angle Theta -->
//                 <path d="M85,150 A35,35 0 0,0 75,137" fill="none" stroke="red" stroke-width="1"/>
//                 <text x="95" y="145" text-anchor="middle" font-size="12">θ</text>
//             </svg>`,
//           "$\\cos \\theta$": "Cosine of angle $\\theta$",
//           "Adjacent Side": "Side adjacent to angle $\\theta$",
//           "Hypotenuse": "The longest side opposite the right angle",
//           "Example": "If the adjacent side is 4 units and the hypotenuse is 5 units, then $\\cos \\theta = \\frac{4}{5} = 0.8$",
//           "Use Cases": "Determining horizontal distances and in harmonic motion.",
          
//         },
//         category: "Definitions"
//       },
//       {
//         name: "Tangent Function (tan)",
//         formula: "$\\tan \\theta = \\frac{\\text{Opposite Side}}{\\text{Adjacent Side}}$",
//         fields: {
//           "Explanation": `In a right-angled triangle, the tangent of angle $\\theta$ is the ratio of the length of the opposite side to the length of the adjacent side. It relates the two sides that form the right angle.
//            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//                 <!-- Triangle -->
//                 <polygon points="50,150 250,150 250,50" fill="none" stroke="#0000FF" stroke-width="1"/>
//                 <!-- Right angle marker -->
//                 <polyline points="250,150 240,150 240,140 250,140" fill="none" stroke="#0000FF" stroke-width="1"/>
//                 <!-- Labels -->
//                 <text x="120" y="170" text-anchor="middle">Adjacent Side</text>
//                 <text x="270" y="140" text-anchor="start" transform="rotate(-90,270,140)">Opposite Side</text>
//                 <text x="150" y="90" text-anchor="middle" transform="rotate(-27,150,90)">Hypotenuse</text>
//                 <!-- Angle Theta -->
//                 <path d="M85,150 A35,35 0 0,0 75,137" fill="none" stroke="red" stroke-width="1"/>
//                 <text x="95" y="145" text-anchor="middle" font-size="12">θ</text>
//             </svg>`,
//           "$\\tan \\theta$": "Tangent of angle $\\theta$",
//           "Opposite Side": "Side opposite to angle $\\theta$",
//           "Adjacent Side": "Side adjacent to angle $\\theta$",
//           "Example": "If the opposite side is 3 units and the adjacent side is 4 units, then $\\tan \\theta = \\frac{3}{4} = 0.75$",
//           "Use Cases": "Calculating slopes, angles of elevation or depression.",
         
//         },
//         category: "Definitions"
//       },
//       {
//         name: "Cosecant Function (csc)",
//         formula: "$\\csc \\theta = \\frac{\\text{Hypotenuse}}{\\text{Opposite Side}} = \\frac{1}{\\sin \\theta}$",
//         fields: {
//           "Explanation": `The cosecant function is the reciprocal of the sine function. It relates the hypotenuse to the opposite side.
//            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//                 <!-- Triangle -->
//                 <polygon points="50,150 250,150 250,50" fill="none" stroke="#0000FF" stroke-width="1"/>
//                 <!-- Right angle marker -->
//                 <polyline points="250,150 240,150 240,140 250,140" fill="none" stroke="#0000FF" stroke-width="1"/>
//                 <!-- Labels -->
//                 <text x="120" y="170" text-anchor="middle">Adjacent Side</text>
//                 <text x="270" y="140" text-anchor="start" transform="rotate(-90,270,140)">Opposite Side</text>
//                 <text x="150" y="90" text-anchor="middle" transform="rotate(-27,150,90)">Hypotenuse</text>
//                 <!-- Angle Theta -->
//                 <path d="M85,150 A35,35 0 0,0 75,137" fill="none" stroke="red" stroke-width="1"/>
//                 <text x="95" y="145" text-anchor="middle" font-size="12">θ</text>
//             </svg>
//             <svg width="400" height="300" viewBox="-150 -150 300 300">
//             <defs>
//                 <marker id="arrowhead" markerWidth="10" markerHeight="7" 
//                     refX="0" refY="3.5" orient="auto">
//                     <polygon points="0 0, 10 3.5, 0 7" />
//                 </marker>
//             </defs>
            
//             <!-- Grid -->
//             <g stroke="lightgray" strokeWidth="0.5">
//                 <line x1="-100" y1="-100" x2="-100" y2="100" />
//                 <line x1="100" y1="-100" x2="100" y2="100" />
//                 <line x1="-100" y1="-100" x2="100" y2="-100" />
//                 <line x1="-100" y1="100" x2="100" y2="100" />
//                 <line x1="-50" y1="-100" x2="-50" y2="100" />
//                 <line x1="50" y1="-100" x2="50" y2="100" />
//                 <line x1="-100" y1="-50" x2="100" y2="-50" />
//                 <line x1="-100" y1="50" x2="100" y2="50" />
//             </g>
            
//             <!-- Unit Circle -->
//             <circle cx="0" cy="0" r="100" stroke="black" fill="none" />
            
//             <!-- Coordinate Axes -->
//             <line x1="-150" y1="0" x2="200" y2="0" stroke="black" markerEnd="url(#arrowhead)" />
//             <line x1="0" y1="-150" x2="0" y2="150" stroke="black" />
            
//             <!-- Reference line y = 1 -->
//             <line x1="-200" y1="-100" x2="200" y2="-100" stroke="blue" strokeWidth="1.5" />
            
//             <!-- Point P on unit circle and connected lines -->
//             <line x1="0" y1="0" x2="86.6" y2="-50" stroke="green" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
//             <!-- Cosecant line - extending through the y=1 line -->
//             <line x1="0" y1="0" x2="86.6" y2="-50" stroke="red" strokeWidth="1.5" />
//             <line x1="86.6" y1="-50" x2="173.2" y2="-100" stroke="red" strokeDasharray="3,3" />
            
//             <!-- Vertical lines showing sin and csc -->
//             <line x1="86.6" y1="-50" x2="86.6" y2="0" stroke="purple" strokeWidth="1.5" />
//             <line x1="173.2" y1="-100" x2="173.2" y2="0" stroke="purple" strokeWidth="1.5" />
            
//             <!-- Points -->
//             <circle cx="86.6" cy="-50" r="3" fill="green" />
//             <circle cx="173.2" cy="-100" r="3" fill="red" />
            
//             <!-- Angle arc -->
//             <path d="M 30 0 A 30 30 0 0 0 26 -15" fill="none" stroke="green" />
            
//             <!-- Labels -->
//             <text x="25" y="-8" fontSize="14">θ</text>
//             <text x="160" y="-85" fontSize="14">csc θ</text>
//             <text x="-120" y="-105 fontSize="14">y = 1</text>
//             <text x="70" y="-25" fontSize="14">sin θ</text>
            
//             <!-- Unit labels -->
//             <text x="102" y="15" fontSize="12">1</text>
//             <text x="-110" y="15" fontSize="12">-1</text>
//             <text x="5" y="-102" fontSize="12">1</text>
//             <text x="5" y="110" fontSize="12">-1</text>
//         </svg>`,
//           "$\\csc \\theta$": "Cosecant of angle $\\theta$",
//           "Hypotenuse": "The longest side opposite the right angle",
//           "Opposite Side": "Side opposite to angle $\\theta$",
//           "Example": "If the hypotenuse is 5 units and the opposite side is 3 units, then $\\csc \\theta = \\frac{5}{3} \\approx 1.6667$",
//           "Use Cases": "Used when the sine value is small and its reciprocal is needed.",
          
//         },
//         category: "Definitions"
//       },
//       {
//         name: "Secant Function (sec)",
//         formula: "$\\sec \\theta = \\frac{\\text{Hypotenuse}}{\\text{Adjacent Side}} = \\frac{1}{\\cos \\theta}$",
//         fields: {
//           "Explanation": `The secant function is the reciprocal of the cosine function. It relates the hypotenuse to the adjacent side.
//            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//                 <!-- Triangle -->
//                 <polygon points="50,150 250,150 250,50" fill="none" stroke="#0000FF" stroke-width="1"/>
//                 <!-- Right angle marker -->
//                 <polyline points="250,150 240,150 240,140 250,140" fill="none" stroke="#0000FF" stroke-width="1"/>
//                 <!-- Labels -->
//                 <text x="120" y="170" text-anchor="middle">Adjacent Side</text>
//                 <text x="270" y="140" text-anchor="start" transform="rotate(-90,270,140)">Opposite Side</text>
//                 <text x="150" y="90" text-anchor="middle" transform="rotate(-27,150,90)">Hypotenuse</text>
//                 <!-- Angle Theta -->
//                 <path d="M85,150 A35,35 0 0,0 75,137" fill="none" stroke="red" stroke-width="1"/>
//                 <text x="95" y="145" text-anchor="middle" font-size="12">θ</text>
//             </svg>
//             <svg width="300" height="300" viewBox="-150 -150 300 300">
//     <defs>
//         <marker id="arrowhead" markerWidth="10" markerHeight="7" 
//             refX="0" refY="3.5" orient="auto">
//             <polygon points="0 0, 10 3.5, 0 7" />
//         </marker>
//     </defs>
    
//     <!-- Grid -->
//     <g stroke="lightgray" strokeWidth="0.5">
//         <line x1="-100" y1="-100" x2="-100" y2="100" />
//         <line x1="100" y1="-100" x2="100" y2="100" />
//         <line x1="-100" y1="-100" x2="100" y2="-100" />
//         <line x1="-100" y1="100" x2="100" y2="100" />
//         <line x1="-50" y1="-100" x2="-50" y2="100" />
//         <line x1="50" y1="-100" x2="50" y2="100" />
//         <line x1="-100" y1="-50" x2="100" y2="-50" />
//         <line x1="-100" y1="50" x2="100" y2="50" />
//     </g>
    
//     <!-- Unit Circle -->
//     <circle cx="0" cy="0" r="100" stroke="black" fill="none" />
    
//     <!-- Coordinate Axes -->
//     <line x1="-150" y1="0" x2="200" y2="0" stroke="black" markerEnd="url(#arrowhead)" />
//     <line x1="0" y1="-150" x2="0" y2="150" stroke="black" />
    
//     <!-- Reference line x = 1 -->
//     <line x1="100" y1="-200" x2="100" y2="200" stroke="blue" strokeWidth="1.5" />
    
//     <!-- Point P on unit circle and connected lines -->
//     <line x1="0" y1="0" x2="86.6" y2="-50" stroke="green" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
//     <!-- Secant line - extending through the x=1 line -->
//     <line x1="0" y1="0" x2="86.6" y2="-50" stroke="red" strokeWidth="1.5" />
//     <line x1="86.6" y1="-50" x2="100" y2="-57.7" stroke="red" strokeDasharray="3,3" />
    
//     <!-- Horizontal lines showing cos and sec -->
//     <line x1="86.6" y1="-50" x2="100" y2="-50" stroke="purple" strokeWidth="1.5" />
//     <line x1="0" y1="-57.7" x2="100" y2="-57.7" stroke="purple" strokeWidth="1.5" />
    
//     <!-- Points -->
//     <circle cx="86.6" cy="-50" r="3" fill="green" />
//     <circle cx="100" cy="-57.7" r="3" fill="red" />
    
//     <!-- Angle arc -->
//     <path d="M 30 0 A 30 30 0 0 0 26 -15" fill="none" stroke="green" />
    
//     <!-- Labels -->
//     <text x="25" y="-8" fontSize="14">θ</text>
//     <text x="110" y="-57.7" fontSize="14">sec θ</text>
//     <text x="105" y="15" fontSize="14">x = 1</text>
//     <text x="90" y="-35" fontSize="14">cos θ</text>
    
//     <!-- Unit labels -->
//     <text x="102" y="15" fontSize="12">1</text>
//     <text x="-110" y="15" fontSize="12">-1</text>
//     <text x="5" y="-102" fontSize="12">1</text>
//     <text x="5" y="110" fontSize="12">-1</text>
// </svg>`,
//           "$\\sec \\theta$": "Secant of angle $\\theta$",
//           "Hypotenuse": "The longest side opposite the right angle",
//           "Adjacent Side": "Side adjacent to angle $\\theta$",
//           "Example": "If the hypotenuse is 5 units and the adjacent side is 4 units, then $\\sec \\theta = \\frac{5}{4} = 1.25$",
//           "Use Cases": "Useful in scenarios where the cosine value is small.",
          
//         },
//         category: "Definitions"
//       },
//       {
//         name: "Cotangent Function (cot)",
//         formula: "$\\cot \\theta = \\frac{\\text{Adjacent Side}}{\\text{Opposite Side}} = \\frac{1}{\\tan \\theta}$",
//         fields: {
//           "Explanation": `The cotangent function is the reciprocal of the tangent function. It relates the adjacent side to the opposite side.
//            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//                 <!-- Triangle -->
//                 <polygon points="50,150 250,150 250,50" fill="none" stroke="#0000FF" stroke-width="1"/>
//                 <!-- Right angle marker -->
//                 <polyline points="250,150 240,150 240,140 250,140" fill="none" stroke="#0000FF" stroke-width="1"/>
//                 <!-- Labels -->
//                 <text x="120" y="170" text-anchor="middle">Adjacent Side</text>
//                 <text x="270" y="140" text-anchor="start" transform="rotate(-90,270,140)">Opposite Side</text>
//                 <text x="150" y="90" text-anchor="middle" transform="rotate(-27,150,90)">Hypotenuse</text>
//                 <!-- Angle Theta -->
//                 <path d="M85,150 A35,35 0 0,0 75,137" fill="none" stroke="red" stroke-width="1"/>
//                 <text x="95" y="145" text-anchor="middle" font-size="12">θ</text>
//             </svg>`,
//           "$\\cot \\theta$": "Cotangent of angle $\\theta$",
//           "Adjacent Side": "Side adjacent to angle $\\theta$",
//           "Opposite Side": "Side opposite to angle $\\theta$",
//           "Example": "If the adjacent side is 4 units and the opposite side is 3 units, then $\\cot \\theta = \\frac{4}{3} \\approx 1.3333$",
//           "Use Cases": "Applied in trigonometric calculations where the tangent value is large.",
          
//         },
//         category: "Definitions"
//       },
//       {
//         name: "Secant Reciprocal Identity",
//         formula: "$\\sec \\theta = \\frac{1}{\\cos \\theta}$",
//         fields: {
//           "Explanation": `The secant function is the reciprocal of the cosine function. Geometrically, on a unit circle, it represents the distance from the center to where a line from the origin at angle θ intersects the secant line (vertical line at x = 1). This relationship is fundamental in calculus and trigonometric substitutions.`,
//           "Derivation": "$$\\sec \\theta = \\frac{1}{\\cos \\theta} = \\frac{\\text{hypotenuse}}{\\text{adjacent}}$$",
//           "Applications": "Used in calculus, especially in integration involving trigonometric functions",
//           "Related": "The Pythagorean identity $\\sec^2 \\theta = 1 + \\tan^2 \\theta$ can be derived using this"
//         },
//         category: "Reciprocal Identities"
//       },
//       {
//         name: "Cosecant Reciprocal Identity",
//         formula: "$\\csc \\theta = \\frac{1}{\\sin \\theta}$",
//         fields: {
//           "Explanation": `The cosecant function is the reciprocal of the sine function. On a unit circle, it represents the distance from the origin to where a line at angle θ intersects the cosecant line (horizontal line at y = 1). This relationship mirrors the secant identity but works with the perpendicular component.`,
//           "Derivation": "$$\\csc \\theta = \\frac{1}{\\sin \\theta} = \\frac{\\text{hypotenuse}}{\\text{opposite}}$$",
//           "Applications": "Essential in integration techniques and solving differential equations",
//           "Related": "Used to derive the Pythagorean identity $\\csc^2 \\theta = 1 + \\cot^2 \\theta$"
//         },
//         category: "Reciprocal Identities"
//       },
//       {
//         name: "Cotangent Reciprocal Identity",
//         formula: "$\\cot \\theta = \\frac{1}{\\tan \\theta} = \\frac{\\cos \\theta}{\\sin \\theta}$",
//         fields: {
//           "Explanation": `The cotangent function is both the reciprocal of tangent and the ratio of cosine to sine. This dual nature makes it particularly useful in simplifying expressions. Unlike secant and cosecant which reference the hypotenuse, cotangent relates the two legs of the right triangle directly.`,
//           "Derivation": `$$\\cot \\theta = \\frac{1}{\\tan \\theta} = \\frac{1}{\\frac{\\sin \\theta}{\\cos \\theta}} = \\frac{\\cos \\theta}{\\sin \\theta}$$`,
//           "Applications": "Useful in solving trigonometric equations and in calculus integration",
//           "Related": "Can be used to convert between tangent and cotangent expressions"
//         },
//         category: "Reciprocal Identities"
//       }

//       ,
//       {
//         name: "Primary Pythagorean Identity",
//         formula: "$\\sin^2 \\theta + \\cos^2 \\theta = 1$",
//         fields: {
//           "Explanation": `This fundamental identity comes directly from the Pythagorean theorem applied to the unit circle. When you place a point P on a unit circle, its coordinates $(\\cos \\theta, \\sin \\theta)$ form a right triangle. Since the radius (hypotenuse) is 1, the squares of sine and cosine must sum to 1. This becomes the foundation for deriving most other trigonometric identities.`,
//           "Visualization": `
//           <svg width="300" height="300" viewBox="-150 -150 300 300">
//     <defs>
//         <marker id="arrowhead" markerWidth="10" markerHeight="7" 
//             refX="0" refY="3.5" orient="auto">
//             <polygon points="0 0, 10 3.5, 0 7" />
//         </marker>
//     </defs>
    
//     <!-- Grid -->
//     <g stroke="lightgray" strokeWidth="0.5">
//         {[-100, -50, 50, 100].map(coord => (
//             <line x1={coord} y1="-100" x2={coord} y2="100" />
//             <line y1={coord} x1="-100" y2={coord} x2="100" />
//         ))}
//     </g>
    
//     <!-- Unit Circle -->
//     <circle cx="0" cy="0" r="100" stroke="black" fill="none" />
    
//     <!-- Coordinate Axes -->
//     <line x1="-150" y1="0" x2="150" y2="0" stroke="black" />
//     <line x1="0" y1="-150" x2="0" y2="150" stroke="black" />
    
//     <!-- Point P and connected lines (at 30 degrees) -->
//     <line x1="0" y1="0" x2="86.6" y2="-50" stroke="green" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
//     <line x1="86.6" y1="0" x2="86.6" y2="-50" stroke="blue" strokeWidth="1.5" />
//     <line x1="0" y1="0" x2="86.6" y2="0" stroke="red" strokeWidth="1.5" />
//     <circle cx="86.6" cy="-50" r="3" fill="red" />
    
//     <!-- Right angle marker -->
//     <path d="M 81.6 0 L 81.6 -5 L 86.6 -5" fill="none" stroke="black" />
    
//     <!-- Labels -->
//     <text x="91.6" y="-25" fontSize="14">sin θ</text>
//     <text x="40" y="15" fontSize="14">cos θ</text>
//     <text x="40" y="-30" fontSize="14">1</text>
    
//     <!-- Angle arc -->
//     <path d="M 30 0 A 30 30 0 0 0 26 -15" fill="none" stroke="green" />
//     <text x="25" y="-8" fontSize="14">θ</text>
    
//     <!-- Unit labels -->
//     <text x="102" y="15" fontSize="12">1</text>
//     <text x="-110" y="15" fontSize="12">-1</text>
//     <text x="5" y="-102" fontSize="12">1</text>
//     <text x="5" y="110" fontSize="12">-1</text>
// </svg>
//           `,
//           "Derivation": "From Pythagorean theorem: $x^2 + y^2 = r^2$ on unit circle where $r=1$",
//           "Applications": "Fundamental in calculus, physics, and simplifying complex trig expressions",
//           "Related": "All other trig identities can be derived from this one"
//         },
//         category: "Pythagorean Identities"
//       },
//       {
//         name: "Tangent Pythagorean Identity",
//         formula: "$1 + \\tan^2 \\theta = \\sec^2 \\theta$",
//         fields: {
//           "Explanation": `This identity emerges when you divide the primary identity by $\\cos^2 \\theta$. Since $\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta}$ and $\\sec \\theta = \\frac{1}{\\cos \\theta}$, dividing $\\sin^2 \\theta + \\cos^2 \\theta = 1$ by $\\cos^2 \\theta$ gives us this relationship.`,
//           "Derivation": "$$\\frac{\\sin^2 \\theta + \\cos^2 \\theta}{\\cos^2 \\theta} = \\frac{1}{\\cos^2 \\theta}$$ $$\\frac{\\sin^2 \\theta}{\\cos^2 \\theta} + 1 = \\sec^2 \\theta$$ $$\\tan^2 \\theta + 1 = \\sec^2 \\theta$$",
//           "Applications": "Useful in calculus, especially when working with tangent derivatives",
//           "Related": "Can be used to simplify expressions involving tangent and secant"
//         },
//         category: "Pythagorean Identities"
//       },
//       {
//         name: "Cotangent Pythagorean Identity",
//         formula: "$1 + \\cot^2 \\theta = \\csc^2 \\theta$",
//         fields: {
//           "Explanation": `This identity is obtained by dividing the primary identity by $\\sin^2 \\theta$. Since $\\cot \\theta = \\frac{\\cos \\theta}{\\sin \\theta}$ and $\\csc \\theta = \\frac{1}{\\sin \\theta}$, we get this complementary relationship to the tangent identity.`,
//           "Derivation": "$$\\frac{\\sin^2 \\theta + \\cos^2 \\theta}{\\sin^2 \\theta} = \\frac{1}{\\sin^2 \\theta}$$ $$1 + \\frac{\\cos^2 \\theta}{\\sin^2 \\theta} = \\csc^2 \\theta$$ $$1 + \\cot^2 \\theta = \\csc^2 \\theta$$",
//           "Applications": "Particularly useful when working with inverse trigonometric functions",
//           "Related": "Mirrors the tangent identity but uses reciprocal functions"
//         },
//         category: "Pythagorean Identities"
//       },
//       {
//         name: "Sine-Cosine Co-Function Identity",
//         formula: "$\\sin\\left(\\frac{\\pi}{2} - \\theta\\right) = \\cos \\theta$",
//         fields: {
//           "Explanation": `This identity shows that sine of a complementary angle (π/2 - θ) equals the cosine of the original angle θ. Geometrically, this represents the relationship between vertical and horizontal components when an angle is rotated to its complement. When you take π/2 (90°) and subtract θ, you get the complementary angle, and its sine equals the original angle's cosine.`,
//           "Visualization": `<svg width="300" height="300" viewBox="-150 -150 300 300">
//               <!-- Same SVG structure as before but showing complementary angles -->
//               <!-- Would you like me to create the full visualization? -->
//           </svg>`,
//           "Applications": "Used in solving trigonometric equations and simplifying expressions involving complementary angles",
//           "Related": "This forms the basis for other co-function identities"
//         },
//         category: "Co-Function Identities"
//       },
//       {
//         name: "Cosine-Sine Co-Function Identity",
//         formula: "$\\cos\\left(\\frac{\\pi}{2} - \\theta\\right) = \\sin \\theta$",
//         fields: {
//           "Explanation": `The complement of the cosine relationship: cosine of a complementary angle equals the sine of the original angle. This is essentially the same relationship as sine-cosine co-function but from the other perspective. It demonstrates the symmetric nature of complementary angles.`,
//           "Applications": "Helpful in problems involving right triangles and complementary angles",
//           "Related": "Direct complement to the sine co-function identity"
//         },
//         category: "Co-Function Identities"
//       },
//       {
//         name: "Tangent-Cotangent Co-Function Identity",
//         formula: "$\\tan\\left(\\frac{\\pi}{2} - \\theta\\right) = \\cot \\theta$",
//         fields: {
//           "Explanation": `This identity relates the tangent of a complementary angle to the cotangent of the original angle. Since tangent is sine/cosine and cotangent is cosine/sine, this relationship follows naturally from how sine and cosine swap roles in complementary angles.`,
//           "Applications": "Useful in calculus and advanced trigonometric manipulations",
//           "Related": "Connected to the reciprocal relationship between tangent and cotangent"
//         },
//         category: "Co-Function Identities"
//       },
//       {
//         name: "Cotangent-Tangent Co-Function Identity",
//         formula: "$\\cot\\left(\\frac{\\pi}{2} - \\theta\\right) = \\tan \\theta$",
//         fields: {
//           "Explanation": `The complement of the tangent-cotangent relationship. Shows that the cotangent of a complementary angle equals the tangent of the original angle. This follows from the reciprocal nature of these functions and their behavior with complementary angles.`,
//           "Applications": "Used in solving trigonometric equations involving complementary angles",
//           "Related": "Mirror of the tangent co-function identity"
//         },
//         category: "Co-Function Identities"
//       },
//       {
//         name: "Secant-Cosecant Co-Function Identity",
//         formula: "$\\sec\\left(\\frac{\\pi}{2} - \\theta\\right) = \\csc \\theta$",
//         fields: {
//           "Explanation": `The secant of a complementary angle equals the cosecant of the original angle. Since secant and cosecant are reciprocals of cosine and sine respectively, this relationship mirrors the fundamental sine-cosine co-function identity.`,
//           "Applications": "Important in advanced trigonometric calculations and proofs",
//           "Related": "Follows from the basic sine-cosine relationship combined with reciprocal identities"
//         },
//         category: "Co-Function Identities"
//       },
//       {
//         name: "Cosecant-Secant Co-Function Identity",
//         formula: "$\\csc\\left(\\frac{\\pi}{2} - \\theta\\right) = \\sec \\theta$",
//         fields: {
//           "Explanation": `Completes the set of co-function identities by showing that the cosecant of a complementary angle equals the secant of the original angle. This relationship is the natural consequence of how reciprocal functions behave with complementary angles.
//          <svg width="500" height="200" xmlns="http://www.w3.org/2000/svg">
//     <!-- Background Rectangle -->
//     <rect x="270" y="50" width="270" height="120" fill="#f8f9fa" rx="10" stroke="#dee2e6" stroke-width="1"/>
    
//     <!-- Triangle -->
//     <polygon points="50,150 250,150 250,50" fill="none" stroke="#0000FF" stroke-width="1.5"/>
    
//     <!-- Right angle marker -->
//     <polyline points="250,150 240,150 240,140 250,140" fill="none" stroke="#0000FF" stroke-width="1.5"/>
    
//     <!-- Angle Theta -->
//     <path d="M85,150 A35,35 0 0,0 75,137" fill="none" stroke="red" stroke-width="1.5"/>
//     <text x="95" y="145" text-anchor="middle" font-size="14">θ</text>
    
//     <!-- Complementary Angle -->
//     <g transform="translate(0,-32)">
//         <path d="M250,115 A35,35 0 0,1 235,90" fill="none" stroke="green" stroke-width="1.5"/>
//         <text x="220" y="125" text-anchor="middle" font-size="14">π/2 - θ</text>
//     </g>
    
//     <!-- Right Angle Label -->
//     <text x="225" y="135" text-anchor="start" font-size="14">90°</text>

//     <!-- Explanation -->
//     <text x="280" y="70" font-family="Arial, sans-serif" style="font-weight: bold;" font-size="13" fill="#2c3e50">
//         <tspan x="280" dy="0">In any triangle, angles sum to 180°</tspan>
//         <tspan x="280" dy="20" style="font-weight: normal;">We have:</tspan>
//         <tspan x="295" dy="20" style="font-weight: normal;">• One right angle (90°)</tspan>
//         <tspan x="295" dy="20" style="font-weight: normal;">• One angle θ</tspan>
//         <tspan x="295" dy="20" style="font-weight: normal;">• Third is π/2 - θ (complementary)</tspan>
//     </text>
// </svg>`,
//           "Applications": "Used in complex trigonometric proofs and calculations",
//           "Related": "Final piece of the co-function identity set"
//         },
//         category: "Co-Function Identities"
//       },
//       {
//         name: "Cosine Even Identity",
//         formula: "$\\cos(-\\theta) = \\cos \\theta$",
//         fields: {
//           "Explanation": `Cosine is an even function - reflecting angle around y-axis gives same value.
//           <svg width="550" height="300" viewBox="-150 -150 550 300">
//     <!-- Background Rectangle for explanation -->
//     <rect x="240" y="-50" width="270" height="120" fill="#f8f9fa" rx="10" stroke="#dee2e6" stroke-width="1"/>
    
//     <!-- Grid -->
//     <g stroke="lightgray" strokeWidth="0.5">
//         <line x1="-100" y1="-100" x2="-100" y2="100" />
//         <line x1="100" y1="-100" x2="100" y2="100" />
//         <line x1="-100" y1="-100" x2="100" y2="-100" />
//         <line x1="-100" y1="100" x2="100" y2="100" />
//         <line x1="-50" y1="-100" x2="-50" y2="100" />
//         <line x1="50" y1="-100" x2="50" y2="100" />
//         <line x1="-100" y1="-50" x2="100" y2="-50" />
//         <line x1="-100" y1="50" x2="100" y2="50" />
//     </g>
    
//     <!-- Unit Circle -->
//     <circle cx="0" cy="0" r="100" stroke="black" fill="none"/>
    
//     <!-- Axes -->
//     <line x1="-150" y1="0" x2="150" y2="0" stroke="black"/>
//     <line x1="0" y1="-150" x2="0" y2="150" stroke="black"/>
    
//     <!-- +θ angle vector -->
//     <line x1="0" y1="0" x2="86.6" y2="-50" stroke="red" strokeWidth="1.5"/>
    
//     <!-- -θ angle vector -->
//     <line x1="0" y1="0" x2="86.6" y2="50" stroke="blue" strokeWidth="1.5"/>
    
//     <!-- Cosine projections -->
//     <line x1="86.6" y1="-50" x2="86.6" y2="0" stroke="red" strokeDasharray="4"/>
//     <line x1="86.6" y1="50" x2="86.6" y2="0" stroke="blue" strokeDasharray="4"/>
    
//     <!-- Angles arcs -->
//     <path d="M 30 0 A 30 30 0 0 0 26 -15" fill="none" stroke="red"/>
//     <path d="M 30 0 A 30 30 0 0 1 26 15" fill="none" stroke="blue"/>
    
//     <!-- Labels -->
//     <text x="40" y="-10" fill="red">θ</text>
//     <text x="40" y="20" fill="blue">-θ</text>
//     <text x="45" y="-5" fill="black">cos θ</text>

//     <!-- Explanation -->
//     <text x="250" y="-30" font-family="Arial, sans-serif" style="font-weight: bold;" font-size="13" fill="#2c3e50">
//         <tspan x="250" dy="0">Even Function: cos(-θ) = cos(θ)</tspan>
//         <tspan x="250" dy="20" style="font-weight: normal;">When we reflect angle θ across x-axis:</tspan>
//         <tspan x="265" dy="20" style="font-weight: normal;">• x-coordinate stays the same</tspan>
//         <tspan x="265" dy="20" style="font-weight: normal;">• Both angles have same cosine value</tspan>
//         <tspan x="265" dy="20" style="font-weight: normal;">• Only y-coordinate changes sign</tspan>
//     </text>
// </svg>`,
//           "Use Cases": "Simplifying expressions with negative angles",
//           "Remember": "Even functions have no sign change with negative input"
//         },
//         category: "Even Functions"
//       },
//       {
//         name: "Secant Even Identity",
//         formula: "$\\sec(-\\theta) = \\sec \\theta$",
//         fields: {
//           "Explanation": "Secant is even because it's reciprocal of cosine",
//           "Use Cases": "Working with negative angles in secant expressions",
//           "Remember": "Inherits evenness from cosine function"
//         },
//         category: "Even Functions"
//       },
//       {
//         name: "Sine Odd Identity",
//         formula: "$\\sin(-\\theta) = -\\sin \\theta$",
//         fields: {
//           "Explanation": "Sine is an odd function - reflecting angle around origin gives opposite value",
//           "Use Cases": "Wave functions, oscillations with negative angles",
//           "Remember": "Odd functions change sign with negative input"
//         },
//         category: "Odd Functions"
//       },
//       {
//         name: "Tangent Odd Identity",
//         formula: "$\\tan(-\\theta) = -\\tan \\theta$",
//         fields: {
//           "Explanation": "Tangent is odd as it's sine (odd) divided by cosine (even)",
//           "Use Cases": "Simplifying tangent expressions with negative angles",
//           "Remember": "Sign changes when angle becomes negative"
//         },
//         category: "Odd Functions"
//       },
//       {
//         name: "Cosecant Odd Identity",
//         formula: "$\\csc(-\\theta) = -\\csc \\theta$",
//         fields: {
//           "Explanation": "Cosecant is odd because it's reciprocal of sine",
//           "Use Cases": "Working with negative angles in cosecant expressions",
//           "Remember": "Inherits oddness from sine function"
//         },
//         category: "Odd Functions"
//       },
//       {
//         name: "Cotangent Odd Identity",
//         formula: "$\\cot(-\\theta) = -\\cot \\theta$",
//         fields: {
//           "Explanation": "Cotangent is odd as it's cosine (even) divided by sine (odd)",
//           "Use Cases": "Working with negative angles in cotangent expressions",
//           "Remember": "Sign changes when angle becomes negative"
//         },
//         category: "Odd Functions"
//       }