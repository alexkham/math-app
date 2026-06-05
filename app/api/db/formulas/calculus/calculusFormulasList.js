


// // ─────────────────────────────────────────────────────────────────────────
// // Calculus Formulas — Limits slice (33 entries)
// // Categories: Limit Laws (15), Continuity (4), Special Limits (8),
// //             Asymptotes & End Behavior (6)
// //
// // Schema per formulas_methodology_final.md:
// //   { name, entity, category, formula, link: { label, url }, ...optional fields }
// // ID is derived from name at render time:
// //   name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')   // strip diacritics
// //       .toLowerCase()
// //       .replace(/[\s-]+/g, '_')
// //       .replace(/[()'`’]/g, '')
// // Examples:
// //   "One-Sided Limit"  → 'one_sided_limit'
// //   "L'Hôpital's Rule" → 'lhopitals_rule'
// //
// // Cross-aspect linking conventions:
// //   - link.url uses plain /path (no ! prefix)
// //   - markdown links inside field strings use !/path prefix
// //   - LaTeX uses double-backslash \\ in template literals
// // ─────────────────────────────────────────────────────────────────────────

// const calculusFormulasList = [

//   // ─── LIMIT LAWS ───────────────────────────────────────────────────────

//   {
//     name: 'Two-Sided Limit Existence Theorem',
//     entity: 'limit',
//     category: 'Limit Laws',
//     formula: `$$\\lim_{x \\to a} f(x) = L \\iff \\lim_{x \\to a^-} f(x) = L \\;\\text{ and }\\; \\lim_{x \\to a^+} f(x) = L$$`,
//     link: { label: 'The Existence Condition', url: '/calculus/limits/two-sided#2' },
//     explanation: `The two-sided limit exists exactly when both one-sided limits exist and agree on a single value. This converts the problem of evaluating a two-sided limit into two simpler problems — compute each direction separately, then check whether they match.`,
//     conditions: `Both one-sided limits must exist as finite values. If either fails to exist (oscillation, unbounded behavior) or if they exist but differ, the two-sided limit does not exist.`,
//     related_formulas: `- [Continuity at a Point](!/calculus/limits/formulas#continuity_at_a_point)
// - [One-Sided Continuity](!/calculus/limits/formulas#one_sided_continuity)`,
//     related_definitions: `- [One-Sided Limit](!/calculus/definitions#one_sided_limit)`,
//   },

//   {
//     name: 'Limit of a Constant',
//     entity: 'limit',
//     category: 'Limit Laws',
//     formula: `$$\\lim_{x \\to a} c = c$$`,
//     link: { label: 'Limit of a Constant', url: '/calculus/limits/rules#2' },
//     explanation: `A constant function outputs the same value for every input. As $x$ approaches $a$, the output never changes, so the limit equals the constant itself.`,
//     related_formulas: `- [Limit of the Identity Function](!/calculus/limits/formulas#limit_of_the_identity_function)
// - [Limit of a Polynomial](!/calculus/limits/formulas#limit_of_a_polynomial)`,
//   },

//   {
//     name: 'Limit of the Identity Function',
//     entity: 'limit',
//     category: 'Limit Laws',
//     formula: `$$\\lim_{x \\to a} x = a$$`,
//     link: { label: 'Limit of the Identity Function', url: '/calculus/limits/rules#3' },
//     explanation: `The identity function returns its input unchanged. As $x$ approaches $a$, the output also approaches $a$. Combined with the constant rule, this provides the base case for evaluating limits of all polynomial expressions.`,
//     related_formulas: `- [Limit of a Constant](!/calculus/limits/formulas#limit_of_a_constant)
// - [Limit of a Polynomial](!/calculus/limits/formulas#limit_of_a_polynomial)`,
//   },

//   {
//     name: 'Sum and Difference Rule (Limits)',
//     entity: 'limit',
//     category: 'Limit Laws',
//     formula: `$$\\lim_{x \\to a} [f(x) \\pm g(x)] = \\lim_{x \\to a} f(x) \\pm \\lim_{x \\to a} g(x)$$`,
//     link: { label: 'Sum and Difference Rules', url: '/calculus/limits/rules#4' },
//     explanation: `The limit of a sum is the sum of the limits; the limit of a difference is the difference of the limits. Limits distribute over addition and subtraction whenever the component limits exist.`,
//     conditions: `Both $\\lim_{x \\to a} f(x)$ and $\\lim_{x \\to a} g(x)$ must exist as finite values. The rule fails for indeterminate forms like $\\infty - \\infty$, where both terms grow unboundedly and the difference is undetermined without further analysis.`,
//     related_formulas: `- [Constant Multiple Rule (Limits)](!/calculus/limits/formulas#constant_multiple_rule_limits)
// - [Product Rule (Limits)](!/calculus/limits/formulas#product_rule_limits)
// - [Quotient Rule (Limits)](!/calculus/limits/formulas#quotient_rule_limits)`,
//     related_definitions: `- [Indeterminate Form](!/calculus/definitions#indeterminate_form)`,
//   },

//   {
//     name: 'Constant Multiple Rule (Limits)',
//     entity: 'limit',
//     category: 'Limit Laws',
//     formula: `$$\\lim_{x \\to a} [c \\cdot f(x)] = c \\cdot \\lim_{x \\to a} f(x)$$`,
//     link: { label: 'Constant Multiple Rule', url: '/calculus/limits/rules#5' },
//     explanation: `Constants pass through limits. Scaling a function by a constant scales its limit by the same constant. This is a special case of the product rule with one factor constant, but it appears often enough to state on its own.`,
//     related_formulas: `- [Sum and Difference Rule (Limits)](!/calculus/limits/formulas#sum_and_difference_rule_limits)
// - [Product Rule (Limits)](!/calculus/limits/formulas#product_rule_limits)`,
//   },

//   {
//     name: 'Product Rule (Limits)',
//     entity: 'limit',
//     category: 'Limit Laws',
//     formula: `$$\\lim_{x \\to a} [f(x) \\cdot g(x)] = \\lim_{x \\to a} f(x) \\cdot \\lim_{x \\to a} g(x)$$`,
//     link: { label: 'Product Rule', url: '/calculus/limits/rules#6' },
//     explanation: `The limit of a product is the product of the limits. The rule extends to any finite number of factors: if every factor has a limit, the product's limit is the product of those limits.`,
//     conditions: `Both component limits must exist as finite values. The rule fails for the indeterminate form $0 \\cdot \\infty$ — when one factor approaches zero while the other grows unboundedly, the product can approach any value depending on relative rates.`,
//     related_formulas: `- [Quotient Rule (Limits)](!/calculus/limits/formulas#quotient_rule_limits)
// - [Power Rule (Limits)](!/calculus/limits/formulas#power_rule_limits)
// - [Sum and Difference Rule (Limits)](!/calculus/limits/formulas#sum_and_difference_rule_limits)`,
//     related_definitions: `- [Indeterminate Form](!/calculus/definitions#indeterminate_form)`,
//   },

//   {
//     name: 'Quotient Rule (Limits)',
//     entity: 'limit',
//     category: 'Limit Laws',
//     formula: `$$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{\\lim_{x \\to a} f(x)}{\\lim_{x \\to a} g(x)}, \\quad \\lim_{x \\to a} g(x) \\neq 0$$`,
//     link: { label: 'Quotient Rule', url: '/calculus/limits/rules#7' },
//     explanation: `The limit of a quotient is the quotient of the limits, provided the denominator's limit is nonzero. When the denominator's limit is zero, this rule fails and other techniques are required.`,
//     conditions: `Both component limits must exist, and the denominator's limit must be nonzero. If $\\lim g = 0$ and $\\lim f \\neq 0$, the limit is typically $\\pm\\infty$ — sign analysis determines which. If both vanish, the form is $\\tfrac{0}{0}$ and demands factoring, rationalization, or L'Hôpital's Rule.`,
//     related_formulas: `- [Product Rule (Limits)](!/calculus/limits/formulas#product_rule_limits)
// - [Limit of a Rational Function](!/calculus/limits/formulas#limit_of_a_rational_function)
// - [L'Hôpital's Rule](!/calculus/limits/formulas#lhopitals_rule)`,
//     related_definitions: `- [Indeterminate Form](!/calculus/definitions#indeterminate_form)`,
//   },

//   {
//     name: 'Power Rule (Limits)',
//     entity: 'limit',
//     category: 'Limit Laws',
//     formula: `$$\\lim_{x \\to a} [f(x)]^n = \\left[\\lim_{x \\to a} f(x)\\right]^n$$`,
//     link: { label: 'Power Rule', url: '/calculus/limits/rules#8' },
//     explanation: `The limit of a power is the power of the limit. For positive integer $n$ this follows from repeated application of the product rule. The rule extends to rational exponents under domain restrictions.`,
//     variants: `Rational exponent form, valid where the right side is defined: $$\\lim_{x \\to a} [f(x)]^{m/n} = \\left[\\lim_{x \\to a} f(x)\\right]^{m/n}$$`,
//     conditions: `For integer $n \\geq 1$, no extra conditions beyond the existence of $\\lim f$. For rational exponents $m/n$ with even $n$, the limit of $f$ must be non-negative.`,
//     related_formulas: `- [Product Rule (Limits)](!/calculus/limits/formulas#product_rule_limits)
// - [Root Rule (Limits)](!/calculus/limits/formulas#root_rule_limits)`,
//   },

//   {
//     name: 'Root Rule (Limits)',
//     entity: 'limit',
//     category: 'Limit Laws',
//     formula: `$$\\lim_{x \\to a} \\sqrt[n]{f(x)} = \\sqrt[n]{\\lim_{x \\to a} f(x)}$$`,
//     link: { label: 'Root Rule', url: '/calculus/limits/rules#9' },
//     explanation: `The limit of a root is the root of the limit, whenever the root is defined. This is the power rule with exponent $1/n$.`,
//     conditions: `For odd $n$, holds for all real values of $\\lim f$. For even $n$, requires $\\lim f \\geq 0$ and $f(x) \\geq 0$ near $a$.`,
//     related_formulas: `- [Power Rule (Limits)](!/calculus/limits/formulas#power_rule_limits)`,
//   },

//   {
//     name: 'Absolute Value Rule (Limits)',
//     entity: 'limit',
//     category: 'Limit Laws',
//     formula: `$$\\lim_{x \\to a} |f(x)| = \\left|\\lim_{x \\to a} f(x)\\right|$$`,
//     link: { label: 'Absolute Value Rule', url: '/calculus/limits/rules#10' },
//     explanation: `Absolute value passes through limits. The converse is false: $\\lim |f|$ may exist when $\\lim f$ does not — for instance, $|(-1)^n| = 1$ for all $n$, but $(-1)^n$ has no limit.`,
//     conditions: `Requires $\\lim f$ to exist. The rule cannot be reversed.`,
//   },

//   {
//     name: 'Limit of a Polynomial',
//     entity: 'limit',
//     category: 'Limit Laws',
//     formula: `$$\\lim_{x \\to a} p(x) = p(a)$$`,
//     link: { label: 'Limits of Polynomials', url: '/calculus/limits/rules#11' },
//     explanation: `For any polynomial, the limit at a point equals the value at that point. Direct substitution always works. This follows from polynomials being continuous everywhere — every polynomial is built from sums, products, and constant multiples of the identity function and constants, all operations that limits respect.`,
//     related_formulas: `- [Limit of a Rational Function](!/calculus/limits/formulas#limit_of_a_rational_function)
// - [Continuity at a Point](!/calculus/limits/formulas#continuity_at_a_point)`,
//     related_definitions: `- [Continuity](!/calculus/definitions#continuity)`,
//   },

//   {
//     name: 'Limit of a Rational Function',
//     entity: 'limit',
//     category: 'Limit Laws',
//     formula: `$$\\lim_{x \\to a} \\frac{p(x)}{q(x)} = \\frac{p(a)}{q(a)}, \\quad q(a) \\neq 0$$`,
//     link: { label: 'Limits of Rational Functions', url: '/calculus/limits/rules#12' },
//     explanation: `When the denominator does not vanish at $a$, the limit of a rational function is just the value at $a$ — direct substitution works. When $q(a) = 0$, this rule no longer applies: the result is either an infinite limit (if $p(a) \\neq 0$) or an indeterminate $\\tfrac{0}{0}$ (if $p(a) = 0$, indicating a shared factor of $(x - a)$).`,
//     conditions: `$q(a) \\neq 0$. Where this fails, factor numerator and denominator and cancel, or analyze sign for vertical asymptote behavior.`,
//     related_formulas: `- [Limit of a Polynomial](!/calculus/limits/formulas#limit_of_a_polynomial)
// - [Quotient Rule (Limits)](!/calculus/limits/formulas#quotient_rule_limits)
// - [L'Hôpital's Rule](!/calculus/limits/formulas#lhopitals_rule)`,
//     related_definitions: `- [Continuity](!/calculus/definitions#continuity)
// - [Asymptote](!/calculus/definitions#asymptote)`,
//   },

//   {
//     name: 'Composition Rule (Limits)',
//     entity: 'limit',
//     category: 'Limit Laws',
//     formula: `$$\\lim_{x \\to a} f(g(x)) = f\\!\\left(\\lim_{x \\to a} g(x)\\right) \\quad \\text{if } f \\text{ is continuous at } \\lim_{x \\to a} g(x)$$`,
//     link: { label: 'Composition Rule', url: '/calculus/limits/rules#13' },
//     explanation: `Limits pass through continuous functions. First find the limit of the inner function, then apply the outer function to that value. The result equals the limit of the composition.`,
//     conditions: `The outer function $f$ must be continuous at the limit of the inner function. Without continuity, the behavior of $f$ near $\\lim g$ may differ from $f(\\lim g)$, breaking the rule.`,
//     related_formulas: `- [Continuity Preserved Under Operations](!/calculus/limits/formulas#continuity_preserved_under_operations)
// - [Continuity at a Point](!/calculus/limits/formulas#continuity_at_a_point)`,
//     related_definitions: `- [Continuity](!/calculus/definitions#continuity)`,
//   },

//   {
//     name: 'Squeeze Theorem',
//     entity: 'limit',
//     category: 'Limit Laws',
//     formula: `$$\\text{If } g(x) \\leq f(x) \\leq h(x) \\text{ near } a \\text{ and } \\lim_{x \\to a} g(x) = \\lim_{x \\to a} h(x) = L,$$
// $$\\text{then } \\lim_{x \\to a} f(x) = L.$$`,
//     link: { label: 'The Squeeze Theorem', url: '/calculus/limits/rules#14' },
//     explanation: `When a function is trapped between two others that converge to the same limit, it has nowhere to go but that limit. The Squeeze Theorem proves the foundational trigonometric limit $\\lim_{x \\to 0} \\tfrac{\\sin x}{x} = 1$ by bounding the ratio between $\\cos x$ and $1$ near zero.`,
//     conditions: `The inequality $g \\leq f \\leq h$ need only hold near $a$, not at $a$ itself. Both bounding limits must exist and be equal. Often used when $f$ contains a bounded oscillating factor (sine, cosine) multiplied by something that vanishes — bound the oscillation by $\\pm 1$ and squeeze.`,
//     related_formulas: `- [Sine Limit at Zero](!/calculus/limits/formulas#sine_limit_at_zero)
// - [Cosine Limit at Zero](!/calculus/limits/formulas#cosine_limit_at_zero)`,
//   },

//   {
//     // TODO: content gap — no current section on /calculus/limits/* covers L'Hôpital's Rule.
//     // Intended target: /calculus/limits/evaluating, extending §3 (Indeterminate Forms)
//     // or as a new dedicated section.
//     name: "L'Hôpital's Rule",
//     entity: 'indeterminate_form',
//     category: 'Limit Laws',
//     formula: `$$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)} \\quad \\text{for indeterminate forms } \\tfrac{0}{0} \\text{ or } \\tfrac{\\infty}{\\infty}$$`,
//     link: { label: '', url: '' },
//     explanation: `When direct substitution gives $\\tfrac{0}{0}$ or $\\tfrac{\\infty}{\\infty}$, replace numerator and denominator with their derivatives and try again. The new limit, if it exists, equals the original. The rule may need to be applied repeatedly when the indeterminate form persists.`,
//     conditions: `The original limit must produce $\\tfrac{0}{0}$ or $\\tfrac{\\infty}{\\infty}$. Both $f$ and $g$ must be differentiable near $a$ (except possibly at $a$), with $g'(x) \\neq 0$ near $a$. The limit of $f'/g'$ must exist (or be $\\pm\\infty$). Other indeterminate forms ($0 \\cdot \\infty$, $\\infty - \\infty$, $0^0$, $1^\\infty$, $\\infty^0$) require algebraic transformation into $\\tfrac{0}{0}$ or $\\tfrac{\\infty}{\\infty}$ before the rule applies.`,
//     related_formulas: `- [Quotient Rule (Limits)](!/calculus/limits/formulas#quotient_rule_limits)
// - [Limit of a Rational Function](!/calculus/limits/formulas#limit_of_a_rational_function)`,
//     related_definitions: `- [Limit](!/calculus/definitions#limit)
// - [Derivative](!/calculus/definitions#derivative)`,
//   },

//   // ─── CONTINUITY ────────────────────────────────────────────────────────

//   {
//     name: 'Continuity at a Point',
//     entity: 'continuity',
//     category: 'Continuity',
//     formula: `$$f \\text{ is continuous at } x = a \\iff \\lim_{x \\to a} f(x) = f(a)$$`,
//     link: { label: 'The Formal Definition', url: '/calculus/limits/continuity#2' },
//     explanation: `A single equation that encodes three requirements: $f(a)$ must be defined, the limit must exist, and the two must match. Continuity means the function value matches what surrounding values predict — no jumps, no holes, no surprises.`,
//     related_formulas: `- [One-Sided Continuity](!/calculus/limits/formulas#one_sided_continuity)
// - [Two-Sided Limit Existence Theorem](!/calculus/limits/formulas#two_sided_limit_existence_theorem)
// - [Limit of a Polynomial](!/calculus/limits/formulas#limit_of_a_polynomial)`,
//     related_definitions: `- [Limit](!/calculus/definitions#limit)`,
//   },

//   {
//     name: 'One-Sided Continuity',
//     entity: 'continuity',
//     category: 'Continuity',
//     formula: `$$f \\text{ right-continuous at } a \\iff \\lim_{x \\to a^+} f(x) = f(a)$$
// $$f \\text{ left-continuous at } a \\iff \\lim_{x \\to a^-} f(x) = f(a)$$`,
//     link: { label: 'One-Sided Continuity', url: '/calculus/limits/one-sided#9' },
//     explanation: `Continuity from a single direction. A function continuous on a closed interval $[a, b]$ must be continuous on $(a, b)$, right-continuous at $a$, and left-continuous at $b$ — full continuity is unavailable at endpoints because only one direction of approach exists.`,
//     related_formulas: `- [Continuity at a Point](!/calculus/limits/formulas#continuity_at_a_point)
// - [Two-Sided Limit Existence Theorem](!/calculus/limits/formulas#two_sided_limit_existence_theorem)`,
//     related_definitions: `- [One-Sided Limit](!/calculus/definitions#one_sided_limit)`,
//   },

//   {
//     name: 'Continuity Preserved Under Operations',
//     entity: 'continuity',
//     category: 'Continuity',
//     formula: `$$f, g \\text{ continuous at } a \\implies f \\pm g, \\; cf, \\; f \\cdot g, \\; \\tfrac{f}{g}\\;(g(a) \\neq 0), \\; f \\circ g \\text{ continuous at } a$$`,
//     link: { label: 'Combinations of Continuous Functions', url: '/calculus/limits/continuity#10' },
//     explanation: `Continuity is preserved by the standard operations — sums, differences, scalar multiples, products, quotients (where defined), and compositions. This means whole families of functions are continuous wherever defined: polynomials everywhere, rational functions where the denominator is nonzero, and any composition built from continuous building blocks.`,
//     related_formulas: `- [Continuity at a Point](!/calculus/limits/formulas#continuity_at_a_point)
// - [Composition Rule (Limits)](!/calculus/limits/formulas#composition_rule_limits)
// - [Sum and Difference Rule (Limits)](!/calculus/limits/formulas#sum_and_difference_rule_limits)
// - [Product Rule (Limits)](!/calculus/limits/formulas#product_rule_limits)
// - [Quotient Rule (Limits)](!/calculus/limits/formulas#quotient_rule_limits)`,
//   },

//   {
//     name: 'Intermediate Value Theorem',
//     entity: 'continuity',
//     category: 'Continuity',
//     formula: `$$f \\text{ continuous on } [a,b], \\; k \\text{ between } f(a) \\text{ and } f(b) \\implies \\exists\\, c \\in (a,b) \\text{ with } f(c) = k$$`,
//     link: { label: 'The Intermediate Value Theorem (IVT)', url: '/calculus/limits/continuity#11' },
//     explanation: `A continuous function on a closed interval hits every value between its endpoints — no skipping. If $f$ is negative at one endpoint and positive at the other, it must equal zero somewhere in between. This is an existence theorem: it guarantees a $c$ exists, but says nothing about where it is or whether it is unique.`,
//     conditions: `$f$ must be continuous on the closed interval $[a, b]$. The value $k$ must lie strictly between $f(a)$ and $f(b)$ (or equal one of them, in which case $c$ is the corresponding endpoint).`,
//     related_formulas: `- [Continuity at a Point](!/calculus/limits/formulas#continuity_at_a_point)`,
//   },

//   // ─── SPECIAL LIMITS ────────────────────────────────────────────────────

//   {
//     name: 'Sine Limit at Zero',
//     entity: 'limit',
//     category: 'Special Limits',
//     formula: `$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$`,
//     link: { label: 'The Fundamental Trigonometric Limit', url: '/calculus/limits/special#2' },
//     explanation: `Direct substitution gives $\\tfrac{0}{0}$, but the geometry of the unit circle reveals that for small $x$, $\\sin x$ and $x$ are nearly equal. Their ratio approaches exactly $1$. This limit is the foundation for the derivatives of $\\sin x$ and $\\cos x$.`,
//     conditions: `$x$ must be measured in radians. The limit fails (becomes $\\tfrac{\\pi}{180}$) if $x$ is in degrees.`,
//     related_formulas: `- [Cosine Limit at Zero](!/calculus/limits/formulas#cosine_limit_at_zero)
// - [Cosine Quadratic Limit at Zero](!/calculus/limits/formulas#cosine_quadratic_limit_at_zero)
// - [Tangent Limit at Zero](!/calculus/limits/formulas#tangent_limit_at_zero)
// - [Squeeze Theorem](!/calculus/limits/formulas#squeeze_theorem)`,
//   },

//   {
//     name: 'Cosine Limit at Zero',
//     entity: 'limit',
//     category: 'Special Limits',
//     formula: `$$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0$$`,
//     link: { label: 'Related Trigonometric Limits', url: '/calculus/limits/special#3' },
//     explanation: `Another $\\tfrac{0}{0}$ form. Multiply by the conjugate $\\tfrac{1 + \\cos x}{1 + \\cos x}$ to convert the numerator to $\\sin^2 x$, then split into $\\tfrac{\\sin x}{x} \\cdot \\tfrac{\\sin x}{1 + \\cos x}$ — the first factor goes to $1$, the second to $0$.`,
//     conditions: `$x$ in radians.`,
//     related_formulas: `- [Sine Limit at Zero](!/calculus/limits/formulas#sine_limit_at_zero)
// - [Cosine Quadratic Limit at Zero](!/calculus/limits/formulas#cosine_quadratic_limit_at_zero)`,
//   },

//   {
//     name: 'Cosine Quadratic Limit at Zero',
//     entity: 'limit',
//     category: 'Special Limits',
//     formula: `$$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}$$`,
//     link: { label: 'Related Trigonometric Limits', url: '/calculus/limits/special#3' },
//     explanation: `The numerator vanishes like $x^2$ near zero — specifically, $1 - \\cos x \\approx \\tfrac{x^2}{2}$. The leading coefficient of that approximation is exactly the limit. The second derivative of $\\cos x$ at zero is $-1$, so the Taylor expansion gives $\\cos x \\approx 1 - \\tfrac{x^2}{2}$.`,
//     conditions: `$x$ in radians.`,
//     related_formulas: `- [Cosine Limit at Zero](!/calculus/limits/formulas#cosine_limit_at_zero)
// - [Sine Limit at Zero](!/calculus/limits/formulas#sine_limit_at_zero)`,
//   },

//   {
//     name: 'Tangent Limit at Zero',
//     entity: 'limit',
//     category: 'Special Limits',
//     formula: `$$\\lim_{x \\to 0} \\frac{\\tan x}{x} = 1$$`,
//     link: { label: 'Related Trigonometric Limits', url: '/calculus/limits/special#3' },
//     explanation: `Follows directly from the sine limit: $\\tfrac{\\tan x}{x} = \\tfrac{\\sin x}{x} \\cdot \\tfrac{1}{\\cos x}$. The first factor goes to $1$, the second goes to $1$, so the product goes to $1$.`,
//     conditions: `$x$ in radians.`,
//     related_formulas: `- [Sine Limit at Zero](!/calculus/limits/formulas#sine_limit_at_zero)
// - [Cosine Limit at Zero](!/calculus/limits/formulas#cosine_limit_at_zero)`,
//   },

//   {
//     name: 'Exponential Limit at Zero',
//     entity: 'limit',
//     category: 'Special Limits',
//     formula: `$$\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$$`,
//     link: { label: 'The Natural Exponential Limit', url: '/calculus/limits/special#5' },
//     explanation: `This limit is the derivative of $e^x$ at $x = 0$, and it is exactly what makes $e$ special — it is the unique base for which the slope at zero equals $1$. The result drives the entire structure of $e^x$ as the function equal to its own derivative.`,
//     variants: `For an arbitrary positive base $a$, the analogue is $$\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a.$$ Setting $a = e$ recovers the natural form.`,
//     related_formulas: `- [Logarithm Taylor Limit](!/calculus/limits/formulas#logarithm_taylor_limit)
// - [Definition of e as a Limit](!/calculus/limits/formulas#definition_of_e_as_a_limit)`,
//     related_definitions: `- [Derivative](!/calculus/definitions#derivative)`,
//   },

//   {
//     name: 'Logarithm Taylor Limit',
//     entity: 'limit',
//     category: 'Special Limits',
//     formula: `$$\\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x} = 1$$`,
//     link: { label: 'Related Exponential Limits', url: '/calculus/limits/special#6' },
//     explanation: `The mirror image of the exponential limit at zero: $\\ln(1+x)$ behaves like $x$ near zero. Substituting $u = \\ln(1+x)$ converts this directly into the exponential limit. Equivalently, this is the derivative of $\\ln x$ at $x = 1$, which equals $1$.`,
//     related_formulas: `- [Exponential Limit at Zero](!/calculus/limits/formulas#exponential_limit_at_zero)
// - [Definition of e as a Limit](!/calculus/limits/formulas#definition_of_e_as_a_limit)`,
//   },

//   {
//     name: 'Definition of e as a Limit',
//     entity: 'limit',
//     category: 'Special Limits',
//     formula: `$$\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e$$`,
//     link: { label: 'The Definition of e', url: '/calculus/limits/special#7' },
//     explanation: `The number $e \\approx 2.71828$ is defined by this limit. It arises in continuous compounding: an annual interest rate of $100\\%$ compounded $n$ times per year produces a growth factor $(1 + 1/n)^n$, which approaches $e$ as compounding becomes continuous.`,
//     variants: `Discrete (sequence) form: $$\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n = e.$$ Reciprocal form (often more useful in derivations): $$\\lim_{x \\to 0} (1 + x)^{1/x} = e.$$`,
//     related_formulas: `- [Exponential Limit at Zero](!/calculus/limits/formulas#exponential_limit_at_zero)
// - [Logarithm Taylor Limit](!/calculus/limits/formulas#logarithm_taylor_limit)`,
//   },

//   {
//     name: 'x ln x Limit at Zero',
//     entity: 'limit',
//     category: 'Special Limits',
//     formula: `$$\\lim_{x \\to 0^+} x \\ln x = 0$$`,
//     link: { label: 'Limits Involving Logarithms', url: '/calculus/limits/special#8' },
//     explanation: `An indeterminate $0 \\cdot (-\\infty)$ form. As $x \\to 0^+$, $\\ln x$ plunges to $-\\infty$, but $x$ vanishes faster than $\\ln x$ blows up. The polynomial factor wins; the product approaches zero.`,
//     related_formulas: `- [Polynomial Beats Logarithm](!/calculus/limits/formulas#polynomial_beats_logarithm)
// - [Logarithm End Behavior](!/calculus/limits/formulas#logarithm_end_behavior)`,
//     related_definitions: `- [Indeterminate Form](!/calculus/definitions#indeterminate_form)`,
//   },

//   // ─── ASYMPTOTES & END BEHAVIOR ─────────────────────────────────────────

//   {
//     name: 'Horizontal Asymptote Condition',
//     entity: 'asymptote',
//     category: 'Asymptotes & End Behavior',
//     formula: `$$\\lim_{x \\to \\infty} f(x) = L \\;\\text{ or }\\; \\lim_{x \\to -\\infty} f(x) = L \\implies y = L \\text{ is a horizontal asymptote}$$`,
//     link: { label: 'Horizontal Asymptotes', url: '/calculus/limits/infinity#3' },
//     explanation: `A finite limit at infinity in either direction produces a horizontal asymptote. A function can have zero, one (the same in both directions), or two (different finite limits at $\\pm\\infty$) horizontal asymptotes.`,
//     related_formulas: `- [Vertical Asymptote Condition](!/calculus/limits/formulas#vertical_asymptote_condition)
// - [Limit of a Rational Function](!/calculus/limits/formulas#limit_of_a_rational_function)`,
//     related_definitions: `- [Limit](!/calculus/definitions#limit)`,
//   },

//   {
//     name: 'Vertical Asymptote Condition',
//     entity: 'asymptote',
//     category: 'Asymptotes & End Behavior',
//     formula: `$$\\lim_{x \\to a^-} f(x) = \\pm\\infty \\;\\text{ or }\\; \\lim_{x \\to a^+} f(x) = \\pm\\infty \\implies x = a \\text{ is a vertical asymptote}$$`,
//     link: { label: 'Vertical Asymptotes', url: '/calculus/limits/infinity#8' },
//     explanation: `Any one-sided infinite limit produces a vertical asymptote. Both sides can disagree in sign — the line $x = a$ is still a vertical asymptote even when one side goes to $+\\infty$ and the other to $-\\infty$. For rational functions, vertical asymptotes typically occur where the denominator vanishes while the numerator does not.`,
//     related_formulas: `- [Horizontal Asymptote Condition](!/calculus/limits/formulas#horizontal_asymptote_condition)
// - [Logarithm End Behavior](!/calculus/limits/formulas#logarithm_end_behavior)`,
//     related_definitions: `- [Discontinuity](!/calculus/definitions#discontinuity)
// - [Limit](!/calculus/definitions#limit)`,
//   },

//   {
//     name: 'Exponential End Behavior',
//     entity: 'limit',
//     category: 'Asymptotes & End Behavior',
//     formula: `$$\\lim_{x \\to \\infty} e^x = \\infty, \\qquad \\lim_{x \\to -\\infty} e^x = 0$$`,
//     link: { label: 'Limits of Exponentials at Infinity', url: '/calculus/limits/infinity#11' },
//     explanation: `The exponential grows without bound to the right and decays to zero to the left. The horizontal asymptote $y = 0$ appears in the direction where the exponent goes to $-\\infty$. For $e^{-x}$, the directions reverse.`,
//     variants: `For general base $a > 1$: $$\\lim_{x \\to \\infty} a^x = \\infty, \\qquad \\lim_{x \\to -\\infty} a^x = 0.$$ For $0 < a < 1$, the limits swap.`,
//     related_formulas: `- [Exponential Beats Polynomial](!/calculus/limits/formulas#exponential_beats_polynomial)
// - [Horizontal Asymptote Condition](!/calculus/limits/formulas#horizontal_asymptote_condition)
// - [Logarithm End Behavior](!/calculus/limits/formulas#logarithm_end_behavior)`,
//     related_definitions: `- [Asymptote](!/calculus/definitions#asymptote)`,
//   },

//   {
//     name: 'Logarithm End Behavior',
//     entity: 'limit',
//     category: 'Asymptotes & End Behavior',
//     formula: `$$\\lim_{x \\to \\infty} \\ln x = \\infty, \\qquad \\lim_{x \\to 0^+} \\ln x = -\\infty$$`,
//     link: { label: 'Limits of Logarithms Toward Zero and Infinity', url: '/calculus/limits/infinity#12' },
//     explanation: `The natural logarithm grows without bound (slowly) and plunges to $-\\infty$ as the argument approaches zero from the right. The line $x = 0$ is a vertical asymptote. No left-hand limit at zero exists because $\\ln x$ is undefined for $x \\leq 0$.`,
//     conditions: `Domain restriction: $\\ln x$ is defined only for $x > 0$, so only the one-sided limit $x \\to 0^+$ is meaningful at the left boundary.`,
//     related_formulas: `- [Polynomial Beats Logarithm](!/calculus/limits/formulas#polynomial_beats_logarithm)
// - [Vertical Asymptote Condition](!/calculus/limits/formulas#vertical_asymptote_condition)
// - [Exponential End Behavior](!/calculus/limits/formulas#exponential_end_behavior)`,
//     related_definitions: `- [Asymptote](!/calculus/definitions#asymptote)`,
//   },

//   {
//     name: 'Exponential Beats Polynomial',
//     entity: 'limit',
//     category: 'Asymptotes & End Behavior',
//     formula: `$$\\lim_{x \\to \\infty} \\frac{x^n}{e^x} = 0 \\quad \\text{for any } n$$`,
//     link: { label: 'Growth Rate Comparisons', url: '/calculus/limits/special#9' },
//     explanation: `Any exponential eventually overtakes any polynomial. Even when the polynomial degree is enormous, the exponential's rate of growth wins for large enough $x$. This is the upper tier of the growth-rate hierarchy.`,
//     variants: `For any base $a > 1$: $$\\lim_{x \\to \\infty} \\frac{x^n}{a^x} = 0.$$`,
//     conditions: `An indeterminate $\\tfrac{\\infty}{\\infty}$ form. Resolved by repeated application of L'Hôpital's Rule, or by noting that $e^x$ grows faster than any polynomial term.`,
//     related_formulas: `- [Polynomial Beats Logarithm](!/calculus/limits/formulas#polynomial_beats_logarithm)
// - [Exponential End Behavior](!/calculus/limits/formulas#exponential_end_behavior)`,
//     related_definitions: `- [Indeterminate Form](!/calculus/definitions#indeterminate_form)`,
//   },

//   {
//     name: 'Polynomial Beats Logarithm',
//     entity: 'limit',
//     category: 'Asymptotes & End Behavior',
//     formula: `$$\\lim_{x \\to \\infty} \\frac{\\ln x}{x^n} = 0 \\quad \\text{for any } n > 0$$`,
//     link: { label: 'Growth Rate Comparisons', url: '/calculus/limits/special#9' },
//     explanation: `Any positive power of $x$ eventually overtakes any logarithm. Logarithms grow but slowly — slower than every polynomial of positive degree. This is the bottom tier of the growth-rate hierarchy.`,
//     conditions: `An indeterminate $\\tfrac{\\infty}{\\infty}$ form. Requires $n > 0$. Resolved by L'Hôpital's Rule or by observing that $\\ln x$ is the inverse of the rapidly-growing exponential.`,
//     related_formulas: `- [Exponential Beats Polynomial](!/calculus/limits/formulas#exponential_beats_polynomial)
// - [Logarithm End Behavior](!/calculus/limits/formulas#logarithm_end_behavior)
// - [x ln x Limit at Zero](!/calculus/limits/formulas#x_ln_x_limit_at_zero)`,
//     related_definitions: `- [Indeterminate Form](!/calculus/definitions#indeterminate_form)`,
//   },


//   // ─── FUNDAMENTAL THEOREM & ANTIDERIVATIVES ──────────────────────────────
 
//   {
//     name: 'Fundamental Theorem of Calculus, Part 1',
//     entity: 'definite_integral',
//     category: 'Fundamental Theorem & Antiderivatives',
//     formula: `$$\\frac{d}{dx} \\int_a^x f(t)\\, dt = f(x)$$`,
//     link: { label: 'Fundamental Theorem of Calculus — Part 1', url: '/calculus/integrals/rules#5' },
//     explanation: `Differentiating an accumulation function recovers the integrand. If you accumulate $f$ from $a$ up to a moving boundary $x$, the rate at which the accumulated total grows at $x$ is exactly $f(x)$. This guarantees that every continuous function has an antiderivative — namely, its own accumulation function — even when no elementary formula expresses it.`,
//     conditions: `$f$ must be continuous on an interval containing $a$ and $x$.`,
//     related_formulas: `- [Fundamental Theorem of Calculus, Part 2](!/calculus/integrals/formulas#fundamental_theorem_of_calculus_part_2)
// - [Antiderivative Family](!/calculus/integrals/formulas#antiderivative_family)`,
//     related_definitions: `- [Antiderivative](!/calculus/definitions#antiderivative)
// - [Definite Integral](!/calculus/definitions#definite_integral)`,
//   },
 
//   {
//     name: 'Fundamental Theorem of Calculus, Part 2',
//     entity: 'definite_integral',
//     category: 'Fundamental Theorem & Antiderivatives',
//     formula: `$$\\int_a^b f(x)\\, dx = F(b) - F(a) \\quad \\text{where } F'(x) = f(x)$$`,
//     link: { label: 'Fundamental Theorem of Calculus — Part 2', url: '/calculus/integrals/rules#6' },
//     explanation: `The computational engine of integral calculus. Rather than computing limits of Riemann sums, find any antiderivative and evaluate at the endpoints. The constant of integration cancels in the subtraction, so any antiderivative works — different choices of $C$ produce the same definite integral.`,
//     conditions: `$f$ must be continuous on $[a, b]$ (or, more generally, integrable with $F$ continuous on $[a, b]$ and differentiable with $F' = f$ on $(a, b)$).`,
//     notation: `Standard shorthand: $F(x) \\big|_a^b$ or $[F(x)]_a^b$ both mean $F(b) - F(a)$.`,
//     related_formulas: `- [Fundamental Theorem of Calculus, Part 1](!/calculus/integrals/formulas#fundamental_theorem_of_calculus_part_1)
// - [Antiderivative Family](!/calculus/integrals/formulas#antiderivative_family)`,
//     related_definitions: `- [Antiderivative](!/calculus/definitions#antiderivative)
// - [Definite Integral](!/calculus/definitions#definite_integral)
// - [Riemann Sum](!/calculus/definitions#riemann_sum)`,
//   },
 
//   {
//     name: 'Antiderivative Family',
//     entity: 'antiderivative',
//     category: 'Fundamental Theorem & Antiderivatives',
//     formula: `$$\\int f(x)\\, dx = F(x) + C \\quad \\text{where } F'(x) = f(x)$$`,
//     link: { label: 'The Constant of Integration', url: '/calculus/integrals/indefinite#2' },
//     explanation: `Antiderivatives come in families. If $F$ is one antiderivative of $f$, every antiderivative has the form $F(x) + C$ for some constant $C$ — because the derivative of any constant is zero, vertical shifts of the graph all share the same derivative. Initial conditions like $F(0) = 3$ pin down $C$.`,
//     conditions: `Holds on any connected interval. On disconnected domains the constant can differ between components.`,
//     related_formulas: `- [Fundamental Theorem of Calculus, Part 2](!/calculus/integrals/formulas#fundamental_theorem_of_calculus_part_2)`,
//     related_definitions: `- [Antiderivative](!/calculus/definitions#antiderivative)
// - [Indefinite Integral](!/calculus/definitions#indefinite_integral)
// - [Integrand](!/calculus/definitions#integrand)`,
//   },
 
//   // ─── INTEGRATION RULES ──────────────────────────────────────────────────
 
//   {
//     name: 'Sum and Difference Rule (Integrals)',
//     entity: 'indefinite_integral',
//     category: 'Integration Rules',
//     formula: `$$\\int [f(x) \\pm g(x)]\\, dx = \\int f(x)\\, dx \\pm \\int g(x)\\, dx$$`,
//     link: { label: 'Sum and Difference Rules', url: '/calculus/integrals/rules#1' },
//     explanation: `Integration distributes over addition and subtraction. Complex integrands break into simpler pieces, each integrated separately. Holds for both definite and indefinite integrals.`,
//     related_formulas: `- [Constant Multiple Rule (Integrals)](!/calculus/integrals/formulas#constant_multiple_rule_integrals)`,
//   },
 
//   {
//     name: 'Constant Multiple Rule (Integrals)',
//     entity: 'indefinite_integral',
//     category: 'Integration Rules',
//     formula: `$$\\int c \\cdot f(x)\\, dx = c \\int f(x)\\, dx$$`,
//     link: { label: 'Constant Multiple Rule', url: '/calculus/integrals/rules#2' },
//     explanation: `Constants factor out of integrals. Combined with the sum rule, this makes integration linear: $\\int [a f + b g]\\, dx = a \\int f\\, dx + b \\int g\\, dx$.`,
//     related_formulas: `- [Sum and Difference Rule (Integrals)](!/calculus/integrals/formulas#sum_and_difference_rule_integrals)`,
//   },
 
//   {
//     name: 'Additivity Over Intervals',
//     entity: 'definite_integral',
//     category: 'Integration Rules',
//     formula: `$$\\int_a^b f(x)\\, dx + \\int_b^c f(x)\\, dx = \\int_a^c f(x)\\, dx$$`,
//     link: { label: 'Additivity Over Intervals', url: '/calculus/integrals/rules#3' },
//     explanation: `An integral over $[a, c]$ can be split at any intermediate point $b$. Essential for piecewise functions where different formulas apply on different subintervals. The point $b$ need not lie between $a$ and $c$ — the rule extends with appropriate sign conventions.`,
//     related_formulas: `- [Reversing Limits of Integration](!/calculus/integrals/formulas#reversing_limits_of_integration)
// - [Zero-Width Interval](!/calculus/integrals/formulas#zero_width_interval)`,
//     related_definitions: `- [Bounds of Integration](!/calculus/definitions#bounds_of_integration)`,
//   },
 
//   {
//     name: 'Reversing Limits of Integration',
//     entity: 'definite_integral',
//     category: 'Integration Rules',
//     formula: `$$\\int_a^b f(x)\\, dx = -\\int_b^a f(x)\\, dx$$`,
//     link: { label: 'Reversing Limits of Integration', url: '/calculus/integrals/rules#4' },
//     explanation: `Swapping the bounds of a definite integral negates the result. The Riemann sum construction accumulates contributions in the direction $a \\to b$; reversing the direction reverses every signed width $\\Delta x$, flipping the total's sign.`,
//     related_formulas: `- [Zero-Width Interval](!/calculus/integrals/formulas#zero_width_interval)
// - [Additivity Over Intervals](!/calculus/integrals/formulas#additivity_over_intervals)`,
//     related_definitions: `- [Bounds of Integration](!/calculus/definitions#bounds_of_integration)`,
//   },
 
//   {
//     name: 'Zero-Width Interval',
//     entity: 'definite_integral',
//     category: 'Integration Rules',
//     formula: `$$\\int_a^a f(x)\\, dx = 0$$`,
//     link: { label: 'Zero-Width Interval', url: '/calculus/integrals/rules#4' },
//     explanation: `An integral over a degenerate interval is zero. With no width, no accumulation occurs.`,
//     related_formulas: `- [Reversing Limits of Integration](!/calculus/integrals/formulas#reversing_limits_of_integration)
// - [Additivity Over Intervals](!/calculus/integrals/formulas#additivity_over_intervals)`,
//   },
 
//   {
//     name: 'Comparison Property (Integrals)',
//     entity: 'definite_integral',
//     category: 'Integration Rules',
//     formula: `$$f(x) \\leq g(x) \\text{ on } [a, b] \\implies \\int_a^b f(x)\\, dx \\leq \\int_a^b g(x)\\, dx$$`,
//     link: { label: 'Comparison Properties', url: '/calculus/integrals/rules#8' },
//     explanation: `Pointwise inequality between integrands carries through to integrals. A special case: if $f \\geq 0$, then $\\int f \\geq 0$. The comparison property underpins both estimation techniques and convergence tests for improper integrals.`,
//     conditions: `The inequality $f \\leq g$ must hold throughout $[a, b]$, and both $f$ and $g$ must be integrable on $[a, b]$.`,
//     related_formulas: `- [Bounding Property (Integrals)](!/calculus/integrals/formulas#bounding_property_integrals)`,
//   },
 
//   {
//     name: 'Bounding Property (Integrals)',
//     entity: 'definite_integral',
//     category: 'Integration Rules',
//     formula: `$$m \\leq f(x) \\leq M \\text{ on } [a, b] \\implies m(b - a) \\leq \\int_a^b f(x)\\, dx \\leq M(b - a)$$`,
//     link: { label: 'Comparison Properties', url: '/calculus/integrals/rules#8' },
//     explanation: `When the integrand is bounded between constants $m$ and $M$, the integral is bounded between the areas of two rectangles of width $b - a$ and heights $m$, $M$. This is the rectangle approximation in its crudest form, and it provides quick sanity checks on computed integrals.`,
//     related_formulas: `- [Comparison Property (Integrals)](!/calculus/integrals/formulas#comparison_property_integrals)
// - [Average Value of a Function](!/calculus/integrals/formulas#average_value_of_a_function)`,
//   },
 
//   {
//     name: 'Substitution Rule',
//     entity: 'indefinite_integral',
//     category: 'Integration Rules',
//     formula: `$$\\int f(g(x))\\, g'(x)\\, dx = \\int f(u)\\, du \\quad \\text{where } u = g(x)$$`,
//     link: { label: 'Substitution (u-Substitution)', url: '/calculus/integrals/techniques#2' },
//     explanation: `The reverse of the chain rule. When the integrand contains an inner function $g(x)$ multiplied by its derivative $g'(x)$, the substitution $u = g(x)$, $du = g'(x)\\, dx$ collapses the integral into a simpler form in $u$.`,
//     variants: `Definite-integral form (with limit conversion): $$\\int_a^b f(g(x))\\, g'(x)\\, dx = \\int_{g(a)}^{g(b)} f(u)\\, du$$`,
//     conditions: `$g$ must be differentiable on the integration interval and $f$ continuous on the range of $g$. For definite integrals, either convert the limits to $u$-values or substitute back to $x$ before evaluating.`,
//     related_formulas: `- [Integration by Parts](!/calculus/integrals/formulas#integration_by_parts)`,
//     related_definitions: `- [Bounds of Integration](!/calculus/definitions#bounds_of_integration)`,
//   },
 
//   {
//     name: 'Integration by Parts',
//     entity: 'indefinite_integral',
//     category: 'Integration Rules',
//     formula: `$$\\int u\\, dv = uv - \\int v\\, du$$`,
//     link: { label: 'Integration by Parts', url: '/calculus/integrals/techniques#3' },
//     explanation: `The reverse of the product rule. Splits an integrand into two factors $u$ and $dv$; differentiating $u$ and integrating $dv$ trades the original integral for a hopefully simpler one. The mnemonic LIATE (Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential) ranks function types by how readily they should be chosen as $u$ — earlier types make better choices.`,
//     variants: `Definite-integral form: $$\\int_a^b u\\, dv = uv \\Big|_a^b - \\int_a^b v\\, du$$`,
//     conditions: `$u$ and $v$ must be differentiable on the integration interval.`,
//     related_formulas: `- [Substitution Rule](!/calculus/integrals/formulas#substitution_rule)
// - [Antiderivative of Natural Log](!/calculus/integrals/formulas#antiderivative_of_natural_log)`,
//   },
 
//   {
//     name: 'Total Unsigned Area',
//     entity: 'signed_area',
//     category: 'Integration Rules',
//     formula: `$$\\text{Total area} = \\int_a^b |f(x)|\\, dx$$`,
//     link: { label: 'Signed Area Interpretation', url: '/calculus/integrals/definite#3' },
//     explanation: `The definite integral computes signed area — regions above the $x$-axis count positively, regions below count negatively. To get total geometric area regardless of sign, integrate the absolute value of $f$. In practice this means splitting the interval where $f$ changes sign and integrating each piece with the appropriate sign.`,
//     related_formulas: `- [Comparison Property (Integrals)](!/calculus/integrals/formulas#comparison_property_integrals)`,
//     related_definitions: `- [Signed Area](!/calculus/definitions#signed_area)
// - [Integrand](!/calculus/definitions#integrand)`,
//   },
 
//   // ─── STANDARD ANTIDERIVATIVES — ALGEBRAIC & LOGARITHMIC ──────────────────
 
//   {
//     name: 'Power Rule (Integrals)',
//     entity: 'indefinite_integral',
//     category: 'Standard Antiderivatives — Algebraic & Logarithmic',
//     formula: `$$\\int x^n\\, dx = \\frac{x^{n+1}}{n + 1} + C \\quad (n \\neq -1)$$`,
//     link: { label: 'Power Functions', url: '/calculus/integrals/special#2' },
//     explanation: `Increase the exponent by one, then divide by the new exponent. The reverse of the differentiation power rule. The exception $n = -1$ is critical — that case produces the natural logarithm rather than $x^0/0$, which is undefined.`,
//     conditions: `For non-integer $n$, the integrand $x^n$ may have domain restrictions (e.g., $x \\geq 0$ for $\\sqrt{x}$). The exception $n = -1$ is handled by the reciprocal antiderivative.`,
//     related_formulas: `- [Reciprocal Antiderivative](!/calculus/integrals/formulas#reciprocal_antiderivative)`,
//   },
 
//   {
//     name: 'Reciprocal Antiderivative',
//     entity: 'indefinite_integral',
//     category: 'Standard Antiderivatives — Algebraic & Logarithmic',
//     formula: `$$\\int \\frac{1}{x}\\, dx = \\ln|x| + C$$`,
//     link: { label: 'Power Functions', url: '/calculus/integrals/special#2' },
//     explanation: `The exceptional case of the power rule. The absolute value matters: for $x > 0$ the antiderivative is $\\ln x$, and for $x < 0$ it is $\\ln(-x)$ (since differentiating gives $1/x$ in either case). The two cases collapse into $\\ln|x|$, valid on either side of zero — but not across it.`,
//     conditions: `Valid on intervals not containing $0$. The constant $C$ may differ on the positive and negative branches.`,
//     related_formulas: `- [Power Rule (Integrals)](!/calculus/integrals/formulas#power_rule_integrals)
// - [Logarithmic Derivative Pattern](!/calculus/integrals/formulas#logarithmic_derivative_pattern)`,
//   },
 
//   {
//     name: 'Logarithmic Derivative Pattern',
//     entity: 'indefinite_integral',
//     category: 'Standard Antiderivatives — Algebraic & Logarithmic',
//     formula: `$$\\int \\frac{f'(x)}{f(x)}\\, dx = \\ln|f(x)| + C$$`,
//     link: { label: 'Logarithmic Integrals', url: '/calculus/integrals/special#6' },
//     explanation: `When the integrand is a function divided by its own derivative — a "logarithmic derivative" pattern — the antiderivative is the logarithm of the function. This pattern appears constantly in disguise: $\\int \\tan x\\, dx$ becomes $\\int (\\sin x)/(\\cos x)\\, dx$, which has the form $-f'/f$ with $f = \\cos x$.`,
//     conditions: `$f$ must be differentiable and nonzero on the integration interval.`,
//     related_formulas: `- [Reciprocal Antiderivative](!/calculus/integrals/formulas#reciprocal_antiderivative)
// - [Antiderivative of Tangent](!/calculus/integrals/formulas#antiderivative_of_tangent)
// - [Antiderivative of Cotangent](!/calculus/integrals/formulas#antiderivative_of_cotangent)`,
//   },
 
//   {
//     name: 'Antiderivative of Natural Log',
//     entity: 'indefinite_integral',
//     category: 'Standard Antiderivatives — Algebraic & Logarithmic',
//     formula: `$$\\int \\ln x\\, dx = x \\ln x - x + C$$`,
//     link: { label: 'Logarithmic Integrals', url: '/calculus/integrals/special#6' },
//     explanation: `The natural logarithm has no elementary antiderivative obvious by inspection — it is found via integration by parts with $u = \\ln x$ and $dv = dx$. The result $x \\ln x - x$ is worth memorizing because $\\ln x$ appears constantly as a multiplicative factor inside more complex integrals.`,
//     conditions: `Defined for $x > 0$.`,
//     related_formulas: `- [Integration by Parts](!/calculus/integrals/formulas#integration_by_parts)
// - [Reciprocal Antiderivative](!/calculus/integrals/formulas#reciprocal_antiderivative)`,
//   },
 
//   // ─── STANDARD ANTIDERIVATIVES — EXPONENTIAL, TRIG & INVERSE TRIG ─────────
 
//   {
//     name: 'Exponential Antiderivative',
//     entity: 'indefinite_integral',
//     category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
//     formula: `$$\\int e^x\\, dx = e^x + C$$`,
//     link: { label: 'Exponential Functions', url: '/calculus/integrals/special#3' },
//     explanation: `The exponential function $e^x$ is its own antiderivative — the same property that makes it its own derivative. This is the defining feature of $e$: it is the unique base for which the function equals its own rate of change.`,
//     variants: `With a linear argument: $$\\int e^{kx}\\, dx = \\frac{e^{kx}}{k} + C$$`,
//     related_formulas: `- [General Exponential Antiderivative](!/calculus/integrals/formulas#general_exponential_antiderivative)`,
//   },
 
//   {
//     name: 'General Exponential Antiderivative',
//     entity: 'indefinite_integral',
//     category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
//     formula: `$$\\int a^x\\, dx = \\frac{a^x}{\\ln a} + C \\quad (a > 0,\\, a \\neq 1)$$`,
//     link: { label: 'Exponential Functions', url: '/calculus/integrals/special#3' },
//     explanation: `For an arbitrary positive base, the antiderivative needs a $1/\\ln a$ correction factor — this compensates for the chain-rule factor $\\ln a$ that appears when differentiating $a^x$. Setting $a = e$ recovers the natural form, since $\\ln e = 1$.`,
//     conditions: `$a > 0$ and $a \\neq 1$. (When $a = 1$, $a^x \\equiv 1$ and the antiderivative is just $x + C$.)`,
//     related_formulas: `- [Exponential Antiderivative](!/calculus/integrals/formulas#exponential_antiderivative)`,
//   },
 
//   {
//     name: 'Antiderivative of Sine',
//     entity: 'indefinite_integral',
//     category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
//     formula: `$$\\int \\sin x\\, dx = -\\cos x + C$$`,
//     link: { label: 'Trigonometric Functions', url: '/calculus/integrals/special#4' },
//     explanation: `The negative sign reverses the negative in $(\\cos x)' = -\\sin x$. Integration recovers $\\cos x$ but with the opposite sign.`,
//     related_formulas: `- [Antiderivative of Cosine](!/calculus/integrals/formulas#antiderivative_of_cosine)`,
//   },
 
//   {
//     name: 'Antiderivative of Cosine',
//     entity: 'indefinite_integral',
//     category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
//     formula: `$$\\int \\cos x\\, dx = \\sin x + C$$`,
//     link: { label: 'Trigonometric Functions', url: '/calculus/integrals/special#4' },
//     explanation: `Direct reverse of $(\\sin x)' = \\cos x$. No sign correction needed.`,
//     related_formulas: `- [Antiderivative of Sine](!/calculus/integrals/formulas#antiderivative_of_sine)`,
//   },
 
//   {
//     name: 'Antiderivative of Secant Squared',
//     entity: 'indefinite_integral',
//     category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
//     formula: `$$\\int \\sec^2 x\\, dx = \\tan x + C$$`,
//     link: { label: 'Trigonometric Functions', url: '/calculus/integrals/special#4' },
//     explanation: `Reverses $(\\tan x)' = \\sec^2 x$. Comes up constantly because $\\sec^2 x$ appears as the result of differentiating any tangent expression via the chain rule.`,
//     related_formulas: `- [Antiderivative of Cosecant Squared](!/calculus/integrals/formulas#antiderivative_of_cosecant_squared)`,
//   },
 
//   {
//     name: 'Antiderivative of Cosecant Squared',
//     entity: 'indefinite_integral',
//     category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
//     formula: `$$\\int \\csc^2 x\\, dx = -\\cot x + C$$`,
//     link: { label: 'Trigonometric Functions', url: '/calculus/integrals/special#4' },
//     explanation: `Reverses $(\\cot x)' = -\\csc^2 x$, so the antiderivative of $\\csc^2 x$ picks up the opposite sign.`,
//     related_formulas: `- [Antiderivative of Secant Squared](!/calculus/integrals/formulas#antiderivative_of_secant_squared)`,
//   },
 
//   {
//     name: 'Antiderivative of Sec Tan',
//     entity: 'indefinite_integral',
//     category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
//     formula: `$$\\int \\sec x \\tan x\\, dx = \\sec x + C$$`,
//     link: { label: 'Trigonometric Functions', url: '/calculus/integrals/special#4' },
//     explanation: `Reverses $(\\sec x)' = \\sec x \\tan x$. Recognize the product $\\sec x \\tan x$ as a derivative pattern, not as something requiring substitution or parts.`,
//     related_formulas: `- [Antiderivative of Csc Cot](!/calculus/integrals/formulas#antiderivative_of_csc_cot)`,
//   },
 
//   {
//     name: 'Antiderivative of Csc Cot',
//     entity: 'indefinite_integral',
//     category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
//     formula: `$$\\int \\csc x \\cot x\\, dx = -\\csc x + C$$`,
//     link: { label: 'Trigonometric Functions', url: '/calculus/integrals/special#4' },
//     explanation: `Reverses $(\\csc x)' = -\\csc x \\cot x$, so the antiderivative carries the opposite sign.`,
//     related_formulas: `- [Antiderivative of Sec Tan](!/calculus/integrals/formulas#antiderivative_of_sec_tan)`,
//   },
 
//   {
//     name: 'Antiderivative of Tangent',
//     entity: 'indefinite_integral',
//     category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
//     formula: `$$\\int \\tan x\\, dx = \\ln|\\sec x| + C$$`,
//     link: { label: 'Integrals Leading to Logarithms', url: '/calculus/integrals/special#7' },
//     explanation: `Rewrite $\\tan x = \\sin x / \\cos x$, recognize as $-f'(x)/f(x)$ with $f = \\cos x$, and apply the logarithmic derivative pattern. Result: $-\\ln|\\cos x| + C$, equivalently $\\ln|\\sec x| + C$.`,
//     variants: `Equivalent form: $$\\int \\tan x\\, dx = -\\ln|\\cos x| + C$$`,
//     related_formulas: `- [Logarithmic Derivative Pattern](!/calculus/integrals/formulas#logarithmic_derivative_pattern)
// - [Antiderivative of Cotangent](!/calculus/integrals/formulas#antiderivative_of_cotangent)
// - [Antiderivative of Secant](!/calculus/integrals/formulas#antiderivative_of_secant)`,
//   },
 
//   {
//     name: 'Antiderivative of Cotangent',
//     entity: 'indefinite_integral',
//     category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
//     formula: `$$\\int \\cot x\\, dx = \\ln|\\sin x| + C$$`,
//     link: { label: 'Integrals Leading to Logarithms', url: '/calculus/integrals/special#7' },
//     explanation: `Rewrite $\\cot x = \\cos x / \\sin x$, recognize as $f'(x)/f(x)$ with $f = \\sin x$, apply the logarithmic derivative pattern.`,
//     related_formulas: `- [Logarithmic Derivative Pattern](!/calculus/integrals/formulas#logarithmic_derivative_pattern)
// - [Antiderivative of Tangent](!/calculus/integrals/formulas#antiderivative_of_tangent)
// - [Antiderivative of Cosecant](!/calculus/integrals/formulas#antiderivative_of_cosecant)`,
//   },
 
//   {
//     name: 'Antiderivative of Secant',
//     entity: 'indefinite_integral',
//     category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
//     formula: `$$\\int \\sec x\\, dx = \\ln|\\sec x + \\tan x| + C$$`,
//     link: { label: 'Integrals Leading to Logarithms', url: '/calculus/integrals/special#7' },
//     explanation: `Less obvious than the other trig integrals. The trick: multiply $\\sec x$ by $(\\sec x + \\tan x)/(\\sec x + \\tan x)$ — a clever form of $1$. The numerator becomes $\\sec^2 x + \\sec x \\tan x$, which is exactly the derivative of the denominator $\\sec x + \\tan x$. The integrand is now in $f'/f$ form.`,
//     related_formulas: `- [Logarithmic Derivative Pattern](!/calculus/integrals/formulas#logarithmic_derivative_pattern)
// - [Antiderivative of Cosecant](!/calculus/integrals/formulas#antiderivative_of_cosecant)
// - [Antiderivative of Tangent](!/calculus/integrals/formulas#antiderivative_of_tangent)`,
//   },
 
//   {
//     name: 'Antiderivative of Cosecant',
//     entity: 'indefinite_integral',
//     category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
//     formula: `$$\\int \\csc x\\, dx = \\ln|\\csc x - \\cot x| + C$$`,
//     link: { label: 'Integrals Leading to Logarithms', url: '/calculus/integrals/special#7' },
//     explanation: `Mirror of the secant trick: multiply $\\csc x$ by $(\\csc x - \\cot x)/(\\csc x - \\cot x)$. The numerator becomes $\\csc^2 x - \\csc x \\cot x$, the derivative of the denominator.`,
//     variants: `Equivalent form: $$\\int \\csc x\\, dx = -\\ln|\\csc x + \\cot x| + C$$`,
//     related_formulas: `- [Logarithmic Derivative Pattern](!/calculus/integrals/formulas#logarithmic_derivative_pattern)
// - [Antiderivative of Secant](!/calculus/integrals/formulas#antiderivative_of_secant)
// - [Antiderivative of Cotangent](!/calculus/integrals/formulas#antiderivative_of_cotangent)`,
//   },
 
//   // ─── INVERSE TRIG, SYMMETRY, IMPROPER, AVERAGE ──────────────────────────
 
//   {
//     name: 'Arctangent Form',
//     entity: 'indefinite_integral',
//     category: 'Inverse Trig, Symmetry, Improper, Average',
//     formula: `$$\\int \\frac{1}{a^2 + x^2}\\, dx = \\frac{1}{a} \\arctan\\frac{x}{a} + C$$`,
//     link: { label: 'Inverse Trigonometric Forms', url: '/calculus/integrals/special#5' },
//     explanation: `Reverses the derivative of arctangent. The general $a$ form is more useful than the special case $a = 1$ — most integrals encountered have an arbitrary constant in place of $1$, and completing the square often produces a quadratic of the form $a^2 + (x - h)^2$ that fits this template.`,
//     variants: `Special case $a = 1$: $$\\int \\frac{1}{1 + x^2}\\, dx = \\arctan x + C$$`,
//     conditions: `$a > 0$.`,
//     related_formulas: `- [Arcsine Form](!/calculus/integrals/formulas#arcsine_form)
// - [Arcsecant Form](!/calculus/integrals/formulas#arcsecant_form)`,
//   },
 
//   {
//     name: 'Arcsine Form',
//     entity: 'indefinite_integral',
//     category: 'Inverse Trig, Symmetry, Improper, Average',
//     formula: `$$\\int \\frac{1}{\\sqrt{a^2 - x^2}}\\, dx = \\arcsin\\frac{x}{a} + C$$`,
//     link: { label: 'Inverse Trigonometric Forms', url: '/calculus/integrals/special#5' },
//     explanation: `Reverses the derivative of arcsine. The square root structure $\\sqrt{a^2 - x^2}$ also appears as the trigger for trigonometric substitution $x = a\\sin\\theta$ — the two approaches give the same result.`,
//     variants: `Special case $a = 1$: $$\\int \\frac{1}{\\sqrt{1 - x^2}}\\, dx = \\arcsin x + C$$`,
//     conditions: `$a > 0$ and $|x| < a$.`,
//     related_formulas: `- [Arctangent Form](!/calculus/integrals/formulas#arctangent_form)
// - [Arcsecant Form](!/calculus/integrals/formulas#arcsecant_form)`,
//   },
 
//   {
//     name: 'Arcsecant Form',
//     entity: 'indefinite_integral',
//     category: 'Inverse Trig, Symmetry, Improper, Average',
//     formula: `$$\\int \\frac{1}{x \\sqrt{x^2 - 1}}\\, dx = \\text{arcsec}\\,|x| + C$$`,
//     link: { label: 'Inverse Trigonometric Forms', url: '/calculus/integrals/special#5' },
//     explanation: `Reverses the derivative of arcsecant. The absolute value handles both branches of the arcsecant function.`,
//     conditions: `$|x| > 1$.`,
//     related_formulas: `- [Arctangent Form](!/calculus/integrals/formulas#arctangent_form)
// - [Arcsine Form](!/calculus/integrals/formulas#arcsine_form)`,
//   },
 
//   {
//     name: 'Even Function Symmetry',
//     entity: 'definite_integral',
//     category: 'Inverse Trig, Symmetry, Improper, Average',
//     formula: `$$\\int_{-a}^{a} f(x)\\, dx = 2 \\int_0^a f(x)\\, dx \\quad \\text{if } f \\text{ is even}$$`,
//     link: { label: 'Symmetry Shortcuts', url: '/calculus/integrals/evaluating#6' },
//     explanation: `An even function $f(-x) = f(x)$ has graph symmetric about the $y$-axis, so the area on $[-a, 0]$ equals the area on $[0, a]$. Compute one and double it.`,
//     conditions: `$f(-x) = f(x)$ for all $x \\in [-a, a]$. Examples: $x^2$, $\\cos x$, $|x|$.`,
//     related_formulas: `- [Odd Function Symmetry](!/calculus/integrals/formulas#odd_function_symmetry)`,
//   },
 
//   {
//     name: 'Odd Function Symmetry',
//     entity: 'definite_integral',
//     category: 'Inverse Trig, Symmetry, Improper, Average',
//     formula: `$$\\int_{-a}^{a} f(x)\\, dx = 0 \\quad \\text{if } f \\text{ is odd}$$`,
//     link: { label: 'Symmetry Shortcuts', url: '/calculus/integrals/evaluating#6' },
//     explanation: `An odd function $f(-x) = -f(x)$ has graph symmetric through the origin, so the signed area on $[-a, 0]$ exactly cancels the signed area on $[0, a]$. The total integral is zero — without computing anything.`,
//     conditions: `$f(-x) = -f(x)$ for all $x \\in [-a, a]$. Examples: $x^3$, $\\sin x$, $\\tan x$.`,
//     related_formulas: `- [Even Function Symmetry](!/calculus/integrals/formulas#even_function_symmetry)`,
//   },
 
//   {
//     name: 'Improper Integral (Infinite Limits)',
//     entity: 'improper_integral',
//     category: 'Inverse Trig, Symmetry, Improper, Average',
//     formula: `$$\\int_a^{\\infty} f(x)\\, dx = \\lim_{b \\to \\infty} \\int_a^b f(x)\\, dx$$`,
//     link: { label: 'Infinite Limits of Integration', url: '/calculus/integrals/improper#2' },
//     explanation: `Definite integrals are defined over finite intervals; integration to $\\infty$ is defined as a limit of finite integrals. The improper integral converges if this limit is finite, diverges otherwise. Symmetric definitions handle the $-\\infty$ case and integrals with both bounds at infinity (split at any finite point and require both halves to converge).`,
//     variants: `Lower limit infinite: $$\\int_{-\\infty}^b f(x)\\, dx = \\lim_{a \\to -\\infty} \\int_a^b f(x)\\, dx$$ Both limits infinite (split at any $c$): $$\\int_{-\\infty}^{\\infty} f(x)\\, dx = \\int_{-\\infty}^c f(x)\\, dx + \\int_c^{\\infty} f(x)\\, dx$$`,
//     conditions: `For the both-infinite case, both component integrals must converge independently — it is not enough for the symmetric limit $\\lim_{R \\to \\infty} \\int_{-R}^R$ to exist.`,
//     related_formulas: `- [Improper Integral (Discontinuous Integrand)](!/calculus/integrals/formulas#improper_integral_discontinuous_integrand)
// - [p-Test for Improper Integrals](!/calculus/integrals/formulas#p_test_for_improper_integrals)`,
//     related_definitions: `- [Improper Integral](!/calculus/definitions#improper_integral)`,
//   },
 
//   {
//     name: 'Improper Integral (Discontinuous Integrand)',
//     entity: 'improper_integral',
//     category: 'Inverse Trig, Symmetry, Improper, Average',
//     formula: `$$\\int_a^b f(x)\\, dx = \\lim_{t \\to b^-} \\int_a^t f(x)\\, dx \\quad \\text{(asymptote at } b\\text{)}$$`,
//     link: { label: 'Discontinuous Integrands', url: '/calculus/integrals/improper#3' },
//     explanation: `When the integrand has a vertical asymptote at an endpoint, integrate to a finite cutoff and take the limit as the cutoff approaches the asymptote. For an asymptote at the left endpoint, the limit runs $t \\to a^+$. For an interior asymptote at $c$, split the integral at $c$ and take both one-sided limits independently.`,
//     variants: `Left endpoint asymptote: $$\\int_a^b f(x)\\, dx = \\lim_{t \\to a^+} \\int_t^b f(x)\\, dx$$ Interior asymptote at $c$: $$\\int_a^b f(x)\\, dx = \\lim_{t \\to c^-} \\int_a^t f(x)\\, dx + \\lim_{s \\to c^+} \\int_s^b f(x)\\, dx$$`,
//     conditions: `For interior asymptotes, both one-sided limits must exist independently. Failing to split at the asymptote produces wrong answers — sometimes "computing" finite values for divergent integrals.`,
//     related_formulas: `- [Improper Integral (Infinite Limits)](!/calculus/integrals/formulas#improper_integral_infinite_limits)
// - [p-Test for Improper Integrals](!/calculus/integrals/formulas#p_test_for_improper_integrals)`,
//     related_definitions: `- [Improper Integral](!/calculus/definitions#improper_integral)
// - [Asymptote](!/calculus/definitions#asymptote)`,
//   },
 
//   {
//     name: 'p-Test for Improper Integrals',
//     entity: 'improper_integral',
//     category: 'Inverse Trig, Symmetry, Improper, Average',
//     formula: `$$\\int_1^{\\infty} \\frac{1}{x^p}\\, dx \\;\\begin{cases} \\text{converges} & p > 1 \\\\ \\text{diverges} & p \\leq 1 \\end{cases} \\qquad \\int_0^1 \\frac{1}{x^p}\\, dx \\;\\begin{cases} \\text{converges} & p < 1 \\\\ \\text{diverges} & p \\geq 1 \\end{cases}$$`,
//     link: { label: 'The p-Test', url: '/calculus/integrals/improper#5' },
//     explanation: `The integrals of $1/x^p$ are the canonical benchmarks for comparing other improper integrals. The boundary case $p = 1$ — which gives $\\ln x$ as an antiderivative — always diverges, both at infinity and at zero. Convergence at infinity requires fast enough decay ($p > 1$); convergence at zero requires slow enough blow-up ($p < 1$).`,
//     related_formulas: `- [Improper Integral (Infinite Limits)](!/calculus/integrals/formulas#improper_integral_infinite_limits)
// - [Improper Integral (Discontinuous Integrand)](!/calculus/integrals/formulas#improper_integral_discontinuous_integrand)`,
//     related_definitions: `- [Improper Integral](!/calculus/definitions#improper_integral)`,
//   },
 
//   {
//     name: 'Average Value of a Function',
//     entity: 'average_value_of_a_function',
//     category: 'Inverse Trig, Symmetry, Improper, Average',
//     formula: `$$f_{\\text{avg}} = \\frac{1}{b - a} \\int_a^b f(x)\\, dx$$`,
//     link: { label: 'Average Value of a Function', url: '/calculus/integrals/definite#7' },
//     explanation: `The continuous analog of an arithmetic mean. The integral computes the total accumulated value, and dividing by the interval length yields the average. Geometrically, $f_{\\text{avg}}$ is the height of the rectangle over $[a, b]$ that has the same area as the region under $f$. The Mean Value Theorem for Integrals guarantees a continuous $f$ actually attains $f_{\\text{avg}}$ at some point $c \\in (a, b)$.`,
//     conditions: `$f$ must be integrable on $[a, b]$ and $a \\neq b$. The Mean Value Theorem for Integrals also requires $f$ continuous on $[a, b]$.`,
//     related_formulas: `- [Bounding Property (Integrals)](!/calculus/integrals/formulas#bounding_property_integrals)`,
//     related_definitions: `- [Average Value of a Function](!/calculus/definitions#average_value_of_a_function)
// - [Definite Integral](!/calculus/definitions#definite_integral)`,
//   },


//   // ============================================================
//   // Category 1 — Definition of the Derivative (2 entries)
//   // ============================================================
 
//   {
//     id: 'average_rate_of_change',
//     category: 'Definition of the Derivative',
//     name: 'Average Rate of Change',
//     formula: `$$\\bar{m} = \\frac{f(b) - f(a)}{b - a}$$`,
//     link: { url: '/calculus/derivatives#1', text: 'the difference quotient and its limit' },
//     topic: 'calculus',
//     entity: 'average_rate_of_change',
//     variables: `
// - $f$ — a function defined on $[a, b]$
// - $a, b$ — endpoints of the interval, with $a \\neq b$
// - $\\bar{m}$ — the average rate of change, equal to the slope of the secant line through $(a, f(a))$ and $(b, f(b))$`,
//     explanation: `
// The average rate of change of $f$ over $[a, b]$ measures the total change in $f$ per unit change in $x$ across the interval. Geometrically, it is the slope of the secant line through the two endpoints. Substituting $b = a + h$ produces the equivalent [difference quotient](!/calculus/derivatives#1) form $\\frac{f(a + h) - f(a)}{h}$, used in the limit definition of the derivative. As the interval shrinks ($h \\to 0$), the average rate of change becomes the [instantaneous rate of change](!/calculus/definitions#instantaneous_rate_of_change).`,
//     related_definitions: `
// - [Average Rate of Change](!/calculus/definitions#average_rate_of_change)
// - [Instantaneous Rate of Change](!/calculus/definitions#instantaneous_rate_of_change)
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Derivative Limit Definition](!/calculus/formulas#derivative_limit_definition)
// - [Mean Value Theorem](!/calculus/formulas#mean_value_theorem)`,
//   },
 
//   {
//     id: 'derivative_limit_definition',
//     category: 'Definition of the Derivative',
//     name: 'Derivative Limit Definition',
//     formula: `$$f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h} = \\lim_{t \\to x} \\frac{f(t) - f(x)}{t - x}$$`,
//     link: { url: '/calculus/derivatives/function#1', text: 'the derivative function defined' },
//     topic: 'calculus',
//     entity: 'derivative',
//     variables: `
// - $f$ — a function differentiable at $x$
// - $h$ — increment in $x$ (the $h$-form lets $h \\to 0$ from either side)
// - $f'(x)$ — derivative of $f$ at $x$, the slope of the tangent line to the graph of $f$ at $(x, f(x))$`,
//     conditions: `
// The limit must exist and be finite. If the one-sided limits differ (corner), are infinite (vertical tangent or cusp), or $f$ is not [continuous](!/calculus/limits/continuity) at $x$, the derivative is undefined there.`,
//     explanation: `
// Both forms define the same quantity. The $h$-form treats $h$ as the increment from a fixed $x$; the $t \\to x$ form lets the input point itself approach $x$. Replacing the fixed point $a$ in the [average rate of change](!/calculus/formulas#average_rate_of_change) with a variable $x$ converts the derivative at a single point into the derivative function $f'$. The limit is a [two-sided limit](!/calculus/limits/two-sided), so left- and right-hand limits of the difference quotient must agree.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)
// - [Differentiability](!/calculus/definitions#differentiability)
// - [Instantaneous Rate of Change](!/calculus/definitions#instantaneous_rate_of_change)
// - [Limit](!/calculus/definitions#limit)`,
//     related_formulas: `
// - [Average Rate of Change](!/calculus/formulas#average_rate_of_change)
// - [Constant Rule (Derivatives)](!/calculus/formulas#constant_rule_derivatives)
// - [Power Rule (Derivatives)](!/calculus/formulas#power_rule_derivatives)`,
//   },
 
//   // ============================================================
//   // Category 2 — Differentiation Rules (7 entries)
//   // ============================================================
 
//   {
//     id: 'constant_rule_derivatives',
//     category: 'Differentiation Rules',
//     name: 'Constant Rule (Derivatives)',
//     formula: `$$\\frac{d}{dx}[c] = 0$$`,
//     link: { url: '/calculus/derivatives/rules#1', text: 'constant rule' },
//     topic: 'calculus',
//     entity: 'derivative',
//     variables: `
// - $c$ — any real constant`,
//     explanation: `
// A constant function has a horizontal graph; its slope is zero everywhere. From the [limit definition](!/calculus/formulas#derivative_limit_definition), the difference quotient $\\frac{c - c}{h} = 0$ for all $h \\neq 0$, so the limit is $0$. Equivalently, this is the [power rule](!/calculus/formulas#power_rule_derivatives) at $n = 0$ since $c = c \\cdot x^0$.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Power Rule (Derivatives)](!/calculus/formulas#power_rule_derivatives)
// - [Sum and Difference Rule (Derivatives)](!/calculus/formulas#sum_and_difference_rule_derivatives)`,
//   },
 
//   {
//     id: 'power_rule_derivatives',
//     category: 'Differentiation Rules',
//     name: 'Power Rule (Derivatives)',
//     formula: `$$\\frac{d}{dx}[x^n] = n x^{n-1}$$`,
//     link: { url: '/calculus/derivatives/rules#2', text: 'power rule' },
//     topic: 'calculus',
//     entity: 'derivative',
//     variables: `
// - $n$ — any real number (integer, rational, or irrational)
// - $x$ — input value (with $x > 0$ required when $n$ is irrational or a non-integer rational)`,
//     explanation: `
// Applies uniformly across all real exponents: positive integers ($\\frac{d}{dx}[x^5] = 5x^4$), negative integers ($\\frac{d}{dx}[x^{-3}] = -3x^{-4}$), fractions ($\\frac{d}{dx}[\\sqrt{x}] = \\frac{1}{2}x^{-1/2}$), and irrationals ($\\frac{d}{dx}[x^{\\pi}] = \\pi x^{\\pi - 1}$). For positive integer $n$, the proof uses the binomial expansion of $(x + h)^n$ in the [limit definition](!/calculus/formulas#derivative_limit_definition); after dividing by $h$ and taking the limit, only the $nx^{n-1}$ term survives. For real exponents, the rule follows from $x^n = e^{n \\ln x}$ via the [chain rule](!/calculus/formulas#chain_rule).`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Constant Rule (Derivatives)](!/calculus/formulas#constant_rule_derivatives)
// - [Chain Rule](!/calculus/formulas#chain_rule)`,
//   },
 
//   {
//     id: 'constant_multiple_rule_derivatives',
//     category: 'Differentiation Rules',
//     name: 'Constant Multiple Rule (Derivatives)',
//     formula: `$$\\frac{d}{dx}[c \\cdot f(x)] = c \\cdot f'(x)$$`,
//     link: { url: '/calculus/derivatives/rules#3', text: 'constant multiple rule' },
//     topic: 'calculus',
//     entity: 'derivative',
//     variables: `
// - $c$ — any real constant
// - $f$ — a function differentiable at $x$`,
//     explanation: `
// Constants factor out of derivatives. From the [limit definition](!/calculus/formulas#derivative_limit_definition), the constant $c$ factors out of the difference quotient and passes through the limit unchanged. The rule is a special case of the [product rule](!/calculus/formulas#product_rule_derivatives) where one factor is constant; stating it separately shortcuts the algebra in nearly every computation.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Sum and Difference Rule (Derivatives)](!/calculus/formulas#sum_and_difference_rule_derivatives)
// - [Product Rule (Derivatives)](!/calculus/formulas#product_rule_derivatives)`,
//   },
 
//   {
//     id: 'sum_and_difference_rule_derivatives',
//     category: 'Differentiation Rules',
//     name: 'Sum and Difference Rule (Derivatives)',
//     formula: `$$\\frac{d}{dx}[f(x) \\pm g(x)] = f'(x) \\pm g'(x)$$`,
//     link: { url: '/calculus/derivatives/rules#4', text: 'sum and difference rules' },
//     topic: 'calculus',
//     entity: 'derivative',
//     variables: `
// - $f, g$ — functions differentiable at $x$
// - $\\pm$ — applies independently to addition and subtraction`,
//     explanation: `
// The derivative distributes over addition and subtraction. From the [limit definition](!/calculus/formulas#derivative_limit_definition), the difference quotient splits into two parts and the [sum and difference rule for limits](!/calculus/formulas#sum_and_difference_rule_limits) applies. Extends to any finite sum: $(f_1 + f_2 + \\cdots + f_n)' = f_1' + f_2' + \\cdots + f_n'$. Combined with the [constant multiple rule](!/calculus/formulas#constant_multiple_rule_derivatives), this differentiates every linear combination — every polynomial term-by-term.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Constant Multiple Rule (Derivatives)](!/calculus/formulas#constant_multiple_rule_derivatives)
// - [Sum and Difference Rule (Limits)](!/calculus/formulas#sum_and_difference_rule_limits)`,
//   },
 
//   {
//     id: 'product_rule_derivatives',
//     category: 'Differentiation Rules',
//     name: 'Product Rule (Derivatives)',
//     formula: `$$\\frac{d}{dx}[f(x) \\cdot g(x)] = f'(x) \\cdot g(x) + f(x) \\cdot g'(x)$$`,
//     link: { url: '/calculus/derivatives/rules#5', text: 'product rule' },
//     topic: 'calculus',
//     entity: 'derivative',
//     variables: `
// - $f, g$ — functions differentiable at $x$`,
//     explanation: `
// The derivative of a product is not the product of the derivatives. Each factor takes a turn being differentiated while the other is held; the contributions are summed. The proof adds and subtracts $f(x + h)g(x)$ inside the difference quotient, splitting it into a piece isolating $g'$ and a piece isolating $f'$. [Differentiability implies continuity](!/calculus/derivatives/differentiability), which is needed for the limit step. For three factors: $(fgh)' = f'gh + fg'h + fgh'$ — each factor differentiated once, the rest unchanged, all summed.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Quotient Rule (Derivatives)](!/calculus/formulas#quotient_rule_derivatives)
// - [Chain Rule](!/calculus/formulas#chain_rule)
// - [Constant Multiple Rule (Derivatives)](!/calculus/formulas#constant_multiple_rule_derivatives)`,
//   },
 
//   {
//     id: 'quotient_rule_derivatives',
//     category: 'Differentiation Rules',
//     name: 'Quotient Rule (Derivatives)',
//     formula: `$$\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{f'(x) \\cdot g(x) - f(x) \\cdot g'(x)}{[g(x)]^2}$$`,
//     link: { url: '/calculus/derivatives/rules#6', text: 'quotient rule' },
//     topic: 'calculus',
//     entity: 'derivative',
//     variables: `
// - $f, g$ — functions differentiable at $x$
// - Required: $g(x) \\neq 0$`,
//     conditions: `
// The denominator $g(x)$ must be nonzero at the point of evaluation. The order of terms in the numerator matters: $f'g - fg'$, not $fg' - f'g$.`,
//     explanation: `
// Equivalently derived from the [product rule](!/calculus/formulas#product_rule_derivatives) applied to $f \\cdot g^{-1}$ together with the [chain rule](!/calculus/formulas#chain_rule). Used directly when the function is naturally a fraction; rewriting as a product is preferred when the denominator is a simple power. The derivatives of $\\tan x$, $\\cot x$, $\\sec x$, $\\csc x$ all follow from the quotient rule applied to ratios of $\\sin$ and $\\cos$.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Product Rule (Derivatives)](!/calculus/formulas#product_rule_derivatives)
// - [Chain Rule](!/calculus/formulas#chain_rule)
// - [Derivative of Tangent](!/calculus/formulas#derivative_of_tangent)`,
//   },
 
//   {
//     id: 'chain_rule',
//     category: 'Differentiation Rules',
//     name: 'Chain Rule',
//     formula: `$$\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x) \\qquad \\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$$`,
//     link: { url: '/calculus/derivatives/rules#7', text: 'chain rule' },
//     topic: 'calculus',
//     entity: 'derivative',
//     variables: `
// - $g$ — function differentiable at $x$
// - $f$ — function differentiable at $g(x)$
// - $y = f(u)$, $u = g(x)$ in the Leibniz form`,
//     explanation: `
// Differentiate the outer function evaluated at the inner function, then multiply by the derivative of the inner function. The Leibniz form makes the rule look like fraction cancellation — and treating $dy/dx$ as a ratio of [differentials](!/calculus/derivatives/differentials) makes that algebra rigorous. For deeper compositions $f(g(h(x)))$, each layer contributes one multiplicative factor: $f'(g(h(x))) \\cdot g'(h(x)) \\cdot h'(x)$. Without the chain rule, composite functions like $\\sin(x^2)$, $e^{3x}$, $\\ln(\\cos x)$ cannot be differentiated — most applications of differentiation use it at some level.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)
// - [Differential](!/calculus/definitions#differential)`,
//     related_formulas: `
// - [Product Rule (Derivatives)](!/calculus/formulas#product_rule_derivatives)
// - [Quotient Rule (Derivatives)](!/calculus/formulas#quotient_rule_derivatives)
// - [Power Rule (Derivatives)](!/calculus/formulas#power_rule_derivatives)`,
//   },
 
//   // ============================================================
//   // Category 3 — Major Theorems (2 entries)
//   // ============================================================
 
//   {
//     id: 'mean_value_theorem',
//     category: 'Major Theorems',
//     name: 'Mean Value Theorem',
//     formula: `$$f'(c) = \\frac{f(b) - f(a)}{b - a} \\qquad \\text{for some } c \\in (a, b)$$`,
//     link: { url: '/calculus/derivatives/rules#8', text: 'mean value theorem' },
//     topic: 'calculus',
//     entity: 'derivative',
//     variables: `
// - $f$ — a function continuous on $[a, b]$ and differentiable on $(a, b)$
// - $c$ — at least one point in the open interval $(a, b)$ where the equality holds`,
//     conditions: `
// $f$ must be [continuous](!/calculus/limits/continuity) on $[a, b]$ and [differentiable](!/calculus/derivatives/differentiability) on $(a, b)$. Failure of either hypothesis can break the conclusion.`,
//     explanation: `
// At some interior point $c$, the [instantaneous rate of change](!/calculus/definitions#instantaneous_rate_of_change) equals the [average rate of change](!/calculus/formulas#average_rate_of_change) over the whole interval. Geometrically, there is a tangent line parallel to the secant line through the endpoints. The theorem is mostly used to prove other results: a function with $f' > 0$ on an interval is increasing; two functions with the same derivative differ by a constant; the [Fundamental Theorem of Calculus, Part 2](!/calculus/formulas#fundamental_theorem_of_calculus_part_2) follows from it. [Rolle's Theorem](!/calculus/formulas#rolles_theorem) is the special case where $f(a) = f(b)$.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)
// - [Continuity](!/calculus/definitions#continuity)
// - [Differentiability](!/calculus/definitions#differentiability)`,
//     related_formulas: `
// - [Rolle's Theorem](!/calculus/formulas#rolles_theorem)
// - [Average Rate of Change](!/calculus/formulas#average_rate_of_change)
// - [Fundamental Theorem of Calculus, Part 2](!/calculus/formulas#fundamental_theorem_of_calculus_part_2)`,
//   },
 
//   {
//     id: 'rolles_theorem',
//     category: 'Major Theorems',
//     name: "Rolle's Theorem",
//     formula: `$$\\text{If } f(a) = f(b), \\text{ then } f'(c) = 0 \\text{ for some } c \\in (a, b)$$`,
//     link: { url: '/calculus/derivatives/rules#9', text: "rolle's theorem" },
//     topic: 'calculus',
//     entity: 'derivative',
//     variables: `
// - $f$ — a function continuous on $[a, b]$ and differentiable on $(a, b)$
// - Required: $f(a) = f(b)$
// - $c$ — at least one point in $(a, b)$ where $f'(c) = 0$`,
//     conditions: `
// Continuity on the closed interval $[a, b]$, differentiability on the open interval $(a, b)$, and matching endpoint values $f(a) = f(b)$.`,
//     explanation: `
// The special case of the [Mean Value Theorem](!/calculus/formulas#mean_value_theorem) where the secant line is horizontal. A function that returns to its starting value must have a horizontal tangent somewhere between — at a maximum, a minimum, or a stationary point of constant value. Rolle's Theorem is often used as a stepping stone: the proof of the MVT itself applies Rolle's to an auxiliary function. Between any two roots of $f$, a root of $f'$ must exist.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)
// - [Critical Point](!/calculus/definitions#critical_point)`,
//     related_formulas: `
// - [Mean Value Theorem](!/calculus/formulas#mean_value_theorem)`,
//   },
 
//   // ============================================================
//   // Category 4 — Derivatives of Common Functions (10 entries)
//   // ============================================================
 
//   {
//     id: 'derivative_of_sine',
//     category: 'Derivatives of Common Functions',
//     name: 'Derivative of Sine',
//     formula: `$$\\frac{d}{dx}[\\sin x] = \\cos x$$`,
//     link: { url: '/calculus/derivatives/common#4', text: 'trigonometric functions: sine and cosine' },
//     topic: 'calculus',
//     entity: 'derivative',
//     explanation: `
// Proved from the [limit definition](!/calculus/formulas#derivative_limit_definition) using the angle addition formula and the [special limits](!/calculus/limits/special) $\\lim_{h \\to 0} \\frac{\\sin h}{h} = 1$ and $\\lim_{h \\to 0} \\frac{\\cos h - 1}{h} = 0$. Repeated differentiation cycles with period four: $\\sin x \\to \\cos x \\to -\\sin x \\to -\\cos x \\to \\sin x$.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Derivative of Cosine](!/calculus/formulas#derivative_of_cosine)
// - [Derivative of Tangent](!/calculus/formulas#derivative_of_tangent)`,
//   },
 
//   {
//     id: 'derivative_of_cosine',
//     category: 'Derivatives of Common Functions',
//     name: 'Derivative of Cosine',
//     formula: `$$\\frac{d}{dx}[\\cos x] = -\\sin x$$`,
//     link: { url: '/calculus/derivatives/common#4', text: 'trigonometric functions: sine and cosine' },
//     topic: 'calculus',
//     entity: 'derivative',
//     explanation: `
// The negative sign is essential — a frequent source of error. Follows by differentiating $\\cos x = \\sin(\\pi/2 - x)$ via the [chain rule](!/calculus/formulas#chain_rule), or directly from the [limit definition](!/calculus/formulas#derivative_limit_definition) using the cosine angle addition formula. Cofunction pattern: cosine, cotangent, and cosecant all carry a negative sign in their derivatives.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Derivative of Sine](!/calculus/formulas#derivative_of_sine)
// - [Derivative of Cotangent](!/calculus/formulas#derivative_of_cotangent)`,
//   },
 
//   {
//     id: 'derivative_of_tangent',
//     category: 'Derivatives of Common Functions',
//     name: 'Derivative of Tangent',
//     formula: `$$\\frac{d}{dx}[\\tan x] = \\sec^2 x$$`,
//     link: { url: '/calculus/derivatives/common#5', text: 'trigonometric functions: tangent, cotangent, secant, cosecant' },
//     topic: 'calculus',
//     entity: 'derivative',
//     conditions: `
// Valid where $\\cos x \\neq 0$, i.e. $x \\neq \\frac{\\pi}{2} + k\\pi$ for integer $k$.`,
//     explanation: `
// Derived via the [quotient rule](!/calculus/formulas#quotient_rule_derivatives) on $\\tan x = \\sin x / \\cos x$: the result is $\\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x} = \\sec^2 x$, using the Pythagorean identity.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Derivative of Cotangent](!/calculus/formulas#derivative_of_cotangent)
// - [Derivative of Secant](!/calculus/formulas#derivative_of_secant)
// - [Quotient Rule (Derivatives)](!/calculus/formulas#quotient_rule_derivatives)`,
//   },
 
//   {
//     id: 'derivative_of_cotangent',
//     category: 'Derivatives of Common Functions',
//     name: 'Derivative of Cotangent',
//     formula: `$$\\frac{d}{dx}[\\cot x] = -\\csc^2 x$$`,
//     link: { url: '/calculus/derivatives/common#5', text: 'trigonometric functions: tangent, cotangent, secant, cosecant' },
//     topic: 'calculus',
//     entity: 'derivative',
//     conditions: `
// Valid where $\\sin x \\neq 0$, i.e. $x \\neq k\\pi$ for integer $k$.`,
//     explanation: `
// Derived via the [quotient rule](!/calculus/formulas#quotient_rule_derivatives) on $\\cot x = \\cos x / \\sin x$. The negative sign matches the cofunction pattern.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Derivative of Tangent](!/calculus/formulas#derivative_of_tangent)
// - [Derivative of Cosecant](!/calculus/formulas#derivative_of_cosecant)`,
//   },
 
//   {
//     id: 'derivative_of_secant',
//     category: 'Derivatives of Common Functions',
//     name: 'Derivative of Secant',
//     formula: `$$\\frac{d}{dx}[\\sec x] = \\sec x \\tan x$$`,
//     link: { url: '/calculus/derivatives/common#5', text: 'trigonometric functions: tangent, cotangent, secant, cosecant' },
//     topic: 'calculus',
//     entity: 'derivative',
//     conditions: `
// Valid where $\\cos x \\neq 0$, i.e. $x \\neq \\frac{\\pi}{2} + k\\pi$ for integer $k$.`,
//     explanation: `
// Derived via the [quotient rule](!/calculus/formulas#quotient_rule_derivatives) on $\\sec x = 1 / \\cos x$, or via the [chain rule](!/calculus/formulas#chain_rule) on $\\sec x = (\\cos x)^{-1}$. No cofunction sign flip — secant is not a cofunction.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Derivative of Cosecant](!/calculus/formulas#derivative_of_cosecant)
// - [Derivative of Tangent](!/calculus/formulas#derivative_of_tangent)`,
//   },
 
//   {
//     id: 'derivative_of_cosecant',
//     category: 'Derivatives of Common Functions',
//     name: 'Derivative of Cosecant',
//     formula: `$$\\frac{d}{dx}[\\csc x] = -\\csc x \\cot x$$`,
//     link: { url: '/calculus/derivatives/common#5', text: 'trigonometric functions: tangent, cotangent, secant, cosecant' },
//     topic: 'calculus',
//     entity: 'derivative',
//     conditions: `
// Valid where $\\sin x \\neq 0$, i.e. $x \\neq k\\pi$ for integer $k$.`,
//     explanation: `
// Derived via the [quotient rule](!/calculus/formulas#quotient_rule_derivatives) on $\\csc x = 1 / \\sin x$. Negative sign matches the cofunction pattern.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Derivative of Secant](!/calculus/formulas#derivative_of_secant)
// - [Derivative of Cotangent](!/calculus/formulas#derivative_of_cotangent)`,
//   },
 
//   {
//     id: 'derivative_of_natural_exponential',
//     category: 'Derivatives of Common Functions',
//     name: 'Derivative of Natural Exponential',
//     formula: `$$\\frac{d}{dx}[e^x] = e^x$$`,
//     link: { url: '/calculus/derivatives/common#6', text: 'exponential functions' },
//     topic: 'calculus',
//     entity: 'derivative',
//     explanation: `
// The natural exponential is the unique non-trivial function equal to its own derivative — the property that defines $e$ as the natural base. Proved from the [limit definition](!/calculus/formulas#derivative_limit_definition) using the [special limit](!/calculus/limits/special) $\\lim_{h \\to 0} \\frac{e^h - 1}{h} = 1$: the difference quotient factors as $e^x \\cdot \\frac{e^h - 1}{h}$, which approaches $e^x \\cdot 1 = e^x$.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Derivative of General Exponential](!/calculus/formulas#derivative_of_general_exponential)
// - [Derivative of Natural Logarithm](!/calculus/formulas#derivative_of_natural_logarithm)`,
//   },
 
//   {
//     id: 'derivative_of_general_exponential',
//     category: 'Derivatives of Common Functions',
//     name: 'Derivative of General Exponential',
//     formula: `$$\\frac{d}{dx}[a^x] = a^x \\ln a$$`,
//     link: { url: '/calculus/derivatives/common#6', text: 'exponential functions' },
//     topic: 'calculus',
//     entity: 'derivative',
//     conditions: `
// $a > 0$ and $a \\neq 1$.`,
//     explanation: `
// Follows from rewriting $a^x = e^{x \\ln a}$ and applying the [chain rule](!/calculus/formulas#chain_rule). The factor $\\ln a$ is constant — it scales the derivative. When $a = e$, $\\ln a = 1$ and the factor disappears, recovering $\\frac{d}{dx}[e^x] = e^x$.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Derivative of Natural Exponential](!/calculus/formulas#derivative_of_natural_exponential)
// - [Derivative of General Logarithm](!/calculus/formulas#derivative_of_general_logarithm)
// - [Chain Rule](!/calculus/formulas#chain_rule)`,
//   },
 
//   {
//     id: 'derivative_of_natural_logarithm',
//     category: 'Derivatives of Common Functions',
//     name: 'Derivative of Natural Logarithm',
//     formula: `$$\\frac{d}{dx}[\\ln x] = \\frac{1}{x}$$`,
//     link: { url: '/calculus/derivatives/common#7', text: 'logarithmic functions' },
//     topic: 'calculus',
//     entity: 'derivative',
//     conditions: `
// $x > 0$. The extension $\\frac{d}{dx}[\\ln |x|] = \\frac{1}{x}$ is valid for all $x \\neq 0$.`,
//     explanation: `
// Derived by [implicit differentiation](!/calculus/derivatives/techniques) of $e^y = x$ where $y = \\ln x$: differentiating gives $e^y \\frac{dy}{dx} = 1$, so $\\frac{dy}{dx} = \\frac{1}{e^y} = \\frac{1}{x}$. The reciprocal form $1/x$ is what makes $\\ln$ ubiquitous in [integration](!/calculus/integrals).`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Derivative of General Logarithm](!/calculus/formulas#derivative_of_general_logarithm)
// - [Derivative of Natural Exponential](!/calculus/formulas#derivative_of_natural_exponential)`,
//   },
 
//   {
//     id: 'derivative_of_general_logarithm',
//     category: 'Derivatives of Common Functions',
//     name: 'Derivative of General Logarithm',
//     formula: `$$\\frac{d}{dx}[\\log_a x] = \\frac{1}{x \\ln a}$$`,
//     link: { url: '/calculus/derivatives/common#7', text: 'logarithmic functions' },
//     topic: 'calculus',
//     entity: 'derivative',
//     conditions: `
// $x > 0$, $a > 0$, $a \\neq 1$.`,
//     explanation: `
// Follows from the change-of-base formula $\\log_a x = \\frac{\\ln x}{\\ln a}$ together with the [constant multiple rule](!/calculus/formulas#constant_multiple_rule_derivatives). When $a = e$, $\\ln a = 1$, recovering $\\frac{d}{dx}[\\ln x] = \\frac{1}{x}$.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Derivative of Natural Logarithm](!/calculus/formulas#derivative_of_natural_logarithm)
// - [Derivative of General Exponential](!/calculus/formulas#derivative_of_general_exponential)`,
//   },
 
//   // ============================================================
//   // Category 5 — Derivatives of Inverse Trigonometric Functions (6 entries)
//   // ============================================================
 
//   {
//     id: 'derivative_of_arcsine',
//     category: 'Derivatives of Inverse Trigonometric Functions',
//     name: 'Derivative of Arcsine',
//     formula: `$$\\frac{d}{dx}[\\arcsin x] = \\frac{1}{\\sqrt{1 - x^2}}$$`,
//     link: { url: '/calculus/derivatives/special#1', text: 'inverse trigonometric functions: arcsine and arccosine' },
//     topic: 'calculus',
//     entity: 'derivative',
//     conditions: `
// $|x| < 1$. At $x = \\pm 1$ the denominator vanishes — the graph of $\\arcsin x$ has vertical tangents at its endpoints.`,
//     explanation: `
// Derived by [implicit differentiation](!/calculus/derivatives/techniques): from $\\sin y = x$ with $y \\in [-\\pi/2, \\pi/2]$, differentiating gives $\\cos y \\cdot y' = 1$, and $\\cos y = \\sqrt{1 - \\sin^2 y} = \\sqrt{1 - x^2}$ (positive since $y$ lies in the first or fourth quadrant).`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Derivative of Arccosine](!/calculus/formulas#derivative_of_arccosine)
// - [Derivative of Sine](!/calculus/formulas#derivative_of_sine)`,
//   },
 
//   {
//     id: 'derivative_of_arccosine',
//     category: 'Derivatives of Inverse Trigonometric Functions',
//     name: 'Derivative of Arccosine',
//     formula: `$$\\frac{d}{dx}[\\arccos x] = -\\frac{1}{\\sqrt{1 - x^2}}$$`,
//     link: { url: '/calculus/derivatives/special#1', text: 'inverse trigonometric functions: arcsine and arccosine' },
//     topic: 'calculus',
//     entity: 'derivative',
//     conditions: `
// $|x| < 1$.`,
//     explanation: `
// Differs from the [arcsine derivative](!/calculus/formulas#derivative_of_arcsine) only in sign — both follow from differentiating $\\arcsin x + \\arccos x = \\frac{\\pi}{2}$.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Derivative of Arcsine](!/calculus/formulas#derivative_of_arcsine)
// - [Derivative of Cosine](!/calculus/formulas#derivative_of_cosine)`,
//   },
 
//   {
//     id: 'derivative_of_arctangent',
//     category: 'Derivatives of Inverse Trigonometric Functions',
//     name: 'Derivative of Arctangent',
//     formula: `$$\\frac{d}{dx}[\\arctan x] = \\frac{1}{1 + x^2}$$`,
//     link: { url: '/calculus/derivatives/special#2', text: 'inverse trigonometric functions: arctangent and arccotangent' },
//     topic: 'calculus',
//     entity: 'derivative',
//     explanation: `
// Defined for all real $x$ — no domain restriction. Derived by [implicit differentiation](!/calculus/derivatives/techniques) of $\\tan y = x$: $\\sec^2 y \\cdot y' = 1$, and $\\sec^2 y = 1 + \\tan^2 y = 1 + x^2$. Always positive, confirming that $\\arctan x$ is strictly increasing. As $x \\to \\pm\\infty$, the derivative approaches zero, reflecting the horizontal asymptotes $y = \\pm \\pi/2$. Reappears prominently in [integration](!/calculus/integrals/special) as the antiderivative of $1/(1+x^2)$.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Derivative of Arccotangent](!/calculus/formulas#derivative_of_arccotangent)
// - [Derivative of Tangent](!/calculus/formulas#derivative_of_tangent)`,
//   },
 
//   {
//     id: 'derivative_of_arccotangent',
//     category: 'Derivatives of Inverse Trigonometric Functions',
//     name: 'Derivative of Arccotangent',
//     formula: `$$\\frac{d}{dx}[\\operatorname{arccot} x] = -\\frac{1}{1 + x^2}$$`,
//     link: { url: '/calculus/derivatives/special#2', text: 'inverse trigonometric functions: arctangent and arccotangent' },
//     topic: 'calculus',
//     entity: 'derivative',
//     explanation: `
// Differs from the [arctangent derivative](!/calculus/formulas#derivative_of_arctangent) only in sign — both follow from differentiating $\\arctan x + \\operatorname{arccot} x = \\frac{\\pi}{2}$.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Derivative of Arctangent](!/calculus/formulas#derivative_of_arctangent)
// - [Derivative of Cotangent](!/calculus/formulas#derivative_of_cotangent)`,
//   },
 
//   {
//     id: 'derivative_of_arcsecant',
//     category: 'Derivatives of Inverse Trigonometric Functions',
//     name: 'Derivative of Arcsecant',
//     formula: `$$\\frac{d}{dx}[\\operatorname{arcsec} x] = \\frac{1}{|x| \\sqrt{x^2 - 1}}$$`,
//     link: { url: '/calculus/derivatives/special#3', text: 'inverse trigonometric functions: arcsecant and arccosecant' },
//     topic: 'calculus',
//     entity: 'derivative',
//     conditions: `
// $|x| > 1$.`,
//     explanation: `
// Derived by [implicit differentiation](!/calculus/derivatives/techniques) of $\\sec y = x$: $\\sec y \\tan y \\cdot y' = 1$, with $\\sec y = x$ and $\\tan y = \\pm\\sqrt{x^2 - 1}$ depending on quadrant. The absolute value $|x|$ resolves the sign uniformly. Appears in integrals of the form $\\int \\frac{1}{x\\sqrt{x^2 - 1}}\\,dx$.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Derivative of Arccosecant](!/calculus/formulas#derivative_of_arccosecant)
// - [Derivative of Secant](!/calculus/formulas#derivative_of_secant)`,
//   },
 
//   {
//     id: 'derivative_of_arccosecant',
//     category: 'Derivatives of Inverse Trigonometric Functions',
//     name: 'Derivative of Arccosecant',
//     formula: `$$\\frac{d}{dx}[\\operatorname{arccsc} x] = -\\frac{1}{|x| \\sqrt{x^2 - 1}}$$`,
//     link: { url: '/calculus/derivatives/special#3', text: 'inverse trigonometric functions: arcsecant and arccosecant' },
//     topic: 'calculus',
//     entity: 'derivative',
//     conditions: `
// $|x| > 1$.`,
//     explanation: `
// Differs from the [arcsecant derivative](!/calculus/formulas#derivative_of_arcsecant) only in sign — both follow from differentiating $\\operatorname{arcsec} x + \\operatorname{arccsc} x = \\frac{\\pi}{2}$.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Derivative of Arcsecant](!/calculus/formulas#derivative_of_arcsecant)
// - [Derivative of Cosecant](!/calculus/formulas#derivative_of_cosecant)`,
//   },
 
//   // ============================================================
//   // Category 6 — Derivatives of Hyperbolic Functions (6 entries)
//   // ============================================================
 
//   {
//     id: 'derivative_of_hyperbolic_sine',
//     category: 'Derivatives of Hyperbolic Functions',
//     name: 'Derivative of Hyperbolic Sine',
//     formula: `$$\\frac{d}{dx}[\\sinh x] = \\cosh x$$`,
//     link: { url: '/calculus/derivatives/special#5', text: 'hyperbolic functions' },
//     topic: 'calculus',
//     entity: 'derivative',
//     explanation: `
// Verified directly from the exponential definition $\\sinh x = \\frac{e^x - e^{-x}}{2}$: differentiating gives $\\frac{e^x + e^{-x}}{2} = \\cosh x$. No special limits needed — the [exponential derivative](!/calculus/formulas#derivative_of_natural_exponential) does all the work.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Derivative of Hyperbolic Cosine](!/calculus/formulas#derivative_of_hyperbolic_cosine)
// - [Derivative of Natural Exponential](!/calculus/formulas#derivative_of_natural_exponential)`,
//   },
 
//   {
//     id: 'derivative_of_hyperbolic_cosine',
//     category: 'Derivatives of Hyperbolic Functions',
//     name: 'Derivative of Hyperbolic Cosine',
//     formula: `$$\\frac{d}{dx}[\\cosh x] = \\sinh x$$`,
//     link: { url: '/calculus/derivatives/special#5', text: 'hyperbolic functions' },
//     topic: 'calculus',
//     entity: 'derivative',
//     explanation: `
// Critical difference from the [trigonometric analog](!/calculus/formulas#derivative_of_cosine): no negative sign. The hyperbolic cycle $\\sinh \\to \\cosh \\to \\sinh \\to \\cdots$ has period two, not four — and never produces a negative sign under differentiation.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Derivative of Hyperbolic Sine](!/calculus/formulas#derivative_of_hyperbolic_sine)
// - [Derivative of Cosine](!/calculus/formulas#derivative_of_cosine)`,
//   },
 
//   {
//     id: 'derivative_of_hyperbolic_tangent',
//     category: 'Derivatives of Hyperbolic Functions',
//     name: 'Derivative of Hyperbolic Tangent',
//     formula: `$$\\frac{d}{dx}[\\tanh x] = \\operatorname{sech}^2 x$$`,
//     link: { url: '/calculus/derivatives/special#5', text: 'hyperbolic functions' },
//     topic: 'calculus',
//     entity: 'derivative',
//     explanation: `
// Derived via the [quotient rule](!/calculus/formulas#quotient_rule_derivatives) on $\\tanh x = \\sinh x / \\cosh x$, using the identity $\\cosh^2 x - \\sinh^2 x = 1$.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Derivative of Hyperbolic Cotangent](!/calculus/formulas#derivative_of_hyperbolic_cotangent)
// - [Derivative of Tangent](!/calculus/formulas#derivative_of_tangent)`,
//   },
 
//   {
//     id: 'derivative_of_hyperbolic_cotangent',
//     category: 'Derivatives of Hyperbolic Functions',
//     name: 'Derivative of Hyperbolic Cotangent',
//     formula: `$$\\frac{d}{dx}[\\coth x] = -\\operatorname{csch}^2 x$$`,
//     link: { url: '/calculus/derivatives/special#5', text: 'hyperbolic functions' },
//     topic: 'calculus',
//     entity: 'derivative',
//     conditions: `
// $x \\neq 0$ (where $\\sinh x = 0$).`,
//     explanation: `
// Derived via the [quotient rule](!/calculus/formulas#quotient_rule_derivatives) on $\\coth x = \\cosh x / \\sinh x$.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Derivative of Hyperbolic Tangent](!/calculus/formulas#derivative_of_hyperbolic_tangent)
// - [Derivative of Cotangent](!/calculus/formulas#derivative_of_cotangent)`,
//   },
 
//   {
//     id: 'derivative_of_hyperbolic_secant',
//     category: 'Derivatives of Hyperbolic Functions',
//     name: 'Derivative of Hyperbolic Secant',
//     formula: `$$\\frac{d}{dx}[\\operatorname{sech} x] = -\\operatorname{sech} x \\tanh x$$`,
//     link: { url: '/calculus/derivatives/special#5', text: 'hyperbolic functions' },
//     topic: 'calculus',
//     entity: 'derivative',
//     explanation: `
// Derived via the [chain rule](!/calculus/formulas#chain_rule) on $\\operatorname{sech} x = (\\cosh x)^{-1}$. Note the negative sign — unlike the trigonometric secant, the hyperbolic secant derivative is negative.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Derivative of Hyperbolic Cosecant](!/calculus/formulas#derivative_of_hyperbolic_cosecant)
// - [Derivative of Secant](!/calculus/formulas#derivative_of_secant)`,
//   },
 
//   {
//     id: 'derivative_of_hyperbolic_cosecant',
//     category: 'Derivatives of Hyperbolic Functions',
//     name: 'Derivative of Hyperbolic Cosecant',
//     formula: `$$\\frac{d}{dx}[\\operatorname{csch} x] = -\\operatorname{csch} x \\coth x$$`,
//     link: { url: '/calculus/derivatives/special#5', text: 'hyperbolic functions' },
//     topic: 'calculus',
//     entity: 'derivative',
//     conditions: `
// $x \\neq 0$.`,
//     explanation: `
// Derived via the [chain rule](!/calculus/formulas#chain_rule) on $\\operatorname{csch} x = (\\sinh x)^{-1}$.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Derivative of Hyperbolic Secant](!/calculus/formulas#derivative_of_hyperbolic_secant)
// - [Derivative of Cosecant](!/calculus/formulas#derivative_of_cosecant)`,
//   },
 
//   // ============================================================
//   // Category 7 — Derivatives of Inverse Hyperbolic Functions (3 entries)
//   // ============================================================
 
//   {
//     id: 'derivative_of_inverse_hyperbolic_sine',
//     category: 'Derivatives of Inverse Hyperbolic Functions',
//     name: 'Derivative of Inverse Hyperbolic Sine',
//     formula: `$$\\frac{d}{dx}[\\operatorname{arcsinh} x] = \\frac{1}{\\sqrt{x^2 + 1}}$$`,
//     link: { url: '/calculus/derivatives/special#6', text: 'inverse hyperbolic functions' },
//     topic: 'calculus',
//     entity: 'derivative',
//     explanation: `
// Defined for all real $x$. Compare with the [arcsine derivative](!/calculus/formulas#derivative_of_arcsine) $\\frac{1}{\\sqrt{1 - x^2}}$ — the sign under the radical flips. Follows from differentiating the logarithmic form $\\operatorname{arcsinh} x = \\ln(x + \\sqrt{x^2 + 1})$. As an antiderivative: $\\int \\frac{1}{\\sqrt{x^2 + 1}}\\,dx = \\operatorname{arcsinh} x + C$.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Derivative of Hyperbolic Sine](!/calculus/formulas#derivative_of_hyperbolic_sine)
// - [Derivative of Arcsine](!/calculus/formulas#derivative_of_arcsine)`,
//   },
 
//   {
//     id: 'derivative_of_inverse_hyperbolic_cosine',
//     category: 'Derivatives of Inverse Hyperbolic Functions',
//     name: 'Derivative of Inverse Hyperbolic Cosine',
//     formula: `$$\\frac{d}{dx}[\\operatorname{arccosh} x] = \\frac{1}{\\sqrt{x^2 - 1}}$$`,
//     link: { url: '/calculus/derivatives/special#6', text: 'inverse hyperbolic functions' },
//     topic: 'calculus',
//     entity: 'derivative',
//     conditions: `
// $x > 1$.`,
//     explanation: `
// Compare with the [arccosine derivative](!/calculus/formulas#derivative_of_arccosine) $-\\frac{1}{\\sqrt{1 - x^2}}$ — both the sign under the radical and the overall sign change. As an antiderivative: $\\int \\frac{1}{\\sqrt{x^2 - 1}}\\,dx = \\operatorname{arccosh} x + C$ on $x > 1$.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Derivative of Hyperbolic Cosine](!/calculus/formulas#derivative_of_hyperbolic_cosine)
// - [Derivative of Arccosine](!/calculus/formulas#derivative_of_arccosine)`,
//   },
 
//   {
//     id: 'derivative_of_inverse_hyperbolic_tangent',
//     category: 'Derivatives of Inverse Hyperbolic Functions',
//     name: 'Derivative of Inverse Hyperbolic Tangent',
//     formula: `$$\\frac{d}{dx}[\\operatorname{arctanh} x] = \\frac{1}{1 - x^2}$$`,
//     link: { url: '/calculus/derivatives/special#6', text: 'inverse hyperbolic functions' },
//     topic: 'calculus',
//     entity: 'derivative',
//     conditions: `
// $|x| < 1$.`,
//     explanation: `
// Compare with the [arctangent derivative](!/calculus/formulas#derivative_of_arctangent) $\\frac{1}{1 + x^2}$ — the sign in the denominator flips. Follows from differentiating $\\operatorname{arctanh} x = \\frac{1}{2}\\ln\\!\\left(\\frac{1 + x}{1 - x}\\right)$.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Derivative of Hyperbolic Tangent](!/calculus/formulas#derivative_of_hyperbolic_tangent)
// - [Derivative of Arctangent](!/calculus/formulas#derivative_of_arctangent)`,
//   },


//     // ──────────────────────────────────────────────────────────────────────
//   // Differentiability (2 entries)
//   // ──────────────────────────────────────────────────────────────────────
 
//   {
//     name: 'One-Sided Derivative',
//     entity: 'derivative',
//     category: 'Differentiability',
//     formula: `$$f'_-(a) = \\lim_{h \\to 0^-} \\frac{f(a+h) - f(a)}{h}, \\qquad f'_+(a) = \\lim_{h \\to 0^+} \\frac{f(a+h) - f(a)}{h}$$`,
//     link: { label: 'One-Sided Derivatives', url: '/calculus/derivatives/differentiability#7' },
//     variables: `
// - $f'_-(a)$ — left-hand derivative at $a$
// - $f'_+(a)$ — right-hand derivative at $a$`,
//     conditions: `The two-sided derivative $f'(a)$ exists if and only if both one-sided derivatives exist, are finite, and are equal: $f'_-(a) = f'_+(a)$.`,
//     explanation: `One-sided derivatives appear at endpoints of closed intervals where only one direction of approach is available, and at boundaries of piecewise functions where different formulas govern each side. Checking that $f'_-(c) = f'_+(c)$ at a junction is the standard test for differentiability of a piecewise function. A corner is exactly the case where both one-sided derivatives are finite but unequal.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)
// - [Differentiability](!/calculus/definitions#differentiability)
// - [One-Sided Limit](!/calculus/definitions#one_sided_limit)`,
//     related_formulas: `
// - [Derivative Limit Definition](!/calculus/derivatives/formulas#derivative_limit_definition)
// - [Differentiability Implies Continuity](!/calculus/derivatives/formulas#differentiability_implies_continuity)`,
//   },
 
//   {
//     name: 'Differentiability Implies Continuity',
//     entity: 'differentiability',
//     category: 'Differentiability',
//     formula: `$$f \\text{ differentiable at } a \\;\\implies\\; f \\text{ continuous at } a$$`,
//     link: { label: 'Differentiability Implies Continuity', url: '/calculus/derivatives/differentiability#2' },
//     explanation: `Differentiability is strictly stronger than continuity. The proof rewrites $f(x) - f(a) = \\frac{f(x) - f(a)}{x - a} \\cdot (x - a)$: as $x \\to a$, the first factor approaches $f'(a)$ (finite by hypothesis), the second approaches $0$, and the product approaches $0$, so $f(x) \\to f(a)$. The converse fails — $f(x) = |x|$ is continuous at $0$ but not differentiable there.`,
//     related_definitions: `
// - [Differentiability](!/calculus/definitions#differentiability)
// - [Continuity](!/calculus/definitions#continuity)
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Derivative Limit Definition](!/calculus/derivatives/formulas#derivative_limit_definition)
// - [One-Sided Derivative](!/calculus/derivatives/formulas#one_sided_derivative)`,
//   },
 
//   // ──────────────────────────────────────────────────────────────────────
//   // Differentials (4 entries)
//   // ──────────────────────────────────────────────────────────────────────
 
//   {
//     name: 'Differential',
//     entity: 'differential',
//     category: 'Differentials',
//     formula: `$$dy = f'(x)\\, dx$$`,
//     link: { label: 'The Differential dy', url: '/calculus/derivatives/differentials#2' },
//     variables: `
// - $dx$ — independent variable, a (finite) increment in $x$
// - $dy$ — differential of $y$, the change predicted by the tangent line`,
//     explanation: `The differential $dy$ is the vertical change along the tangent line at $x$ for a horizontal shift of $dx$. For fixed $x$, $dy$ is a linear function of $dx$. Compared to the actual change $\\Delta y = f(x + dx) - f(x)$, the error $\\Delta y - dy$ vanishes faster than $dx$ itself: $\\lim_{dx \\to 0} (\\Delta y - dy)/dx = 0$. Treating $dx$ and $dy$ as independent quantities makes [Leibniz notation](!/calculus/derivatives/differentials) algebraically rigorous (chain rule cancellation, separation of variables, $u$-substitution).`,
//     related_definitions: `
// - [Differential](!/calculus/definitions#differential)
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Linear Approximation](!/calculus/derivatives/formulas#linear_approximation)
// - [Total Differential](!/calculus/derivatives/formulas#total_differential)
// - [Derivative Limit Definition](!/calculus/derivatives/formulas#derivative_limit_definition)`,
//   },
 
//   {
//     name: 'Linear Approximation',
//     entity: 'differential',
//     category: 'Differentials',
//     formula: `$$f(x + dx) \\approx f(x) + f'(x)\\, dx$$`,
//     link: { label: 'Linear Approximation', url: '/calculus/derivatives/differentials#4' },
//     variables: `
// - $f$ — differentiable at $x$
// - $dx$ — small increment from $x$`,
//     explanation: `The tangent line at $x$ used as an estimator of $f$ at nearby inputs. Equivalent forms: $L(x) = f(a) + f'(a)(x - a)$ as a function of $x$ centered at $a$, or $\\Delta y \\approx f'(x)\\, dx$ in increment notation. Quality depends on the size of $|dx|$ and the magnitude of $f''$ near $x$ — the second derivative controls how quickly the curve diverges from its tangent. Used in error estimation: $|\\Delta y| \\approx |f'(x)|\\, |dx|$, so the derivative acts as an error amplification factor.`,
//     related_definitions: `
// - [Differential](!/calculus/definitions#differential)
// - [Tangent Line](!/calculus/definitions#tangent_line)`,
//     related_formulas: `
// - [Differential](!/calculus/derivatives/formulas#differential)
// - [Tangent Line Equation](!/calculus/derivatives/formulas#tangent_line_equation)
// - [Logarithmic Derivative](!/calculus/derivatives/formulas#logarithmic_derivative)`,
//   },
 
//   {
//     name: 'Total Differential',
//     entity: 'partial_derivative',
//     category: 'Differentials',
//     formula: `$$dz = \\frac{\\partial f}{\\partial x}\\, dx + \\frac{\\partial f}{\\partial y}\\, dy$$`,
//     link: { label: 'Differentials of Multiple Variables', url: '/calculus/derivatives/differentials#6' },
//     variables: `
// - $z = f(x, y)$ — function of two variables
// - $\\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}$ — partial derivatives
// - $dx, dy$ — independent increments in $x$ and $y$`,
//     explanation: `Multivariable extension of the single-variable differential. Each partial derivative weights its variable's contribution; the total is a linear approximation in multiple dimensions. Used heavily in error propagation: if $x$ and $y$ are measured with errors $dx$ and $dy$, the inherited error in $z$ is approximately $|dz|$. Generalizes to $n$ variables: $dz = \\sum_{i=1}^{n} \\frac{\\partial f}{\\partial x_i}\\, dx_i$.`,
//     related_definitions: `
// - [Partial Derivative](!/calculus/definitions#partial_derivative)
// - [Differential](!/calculus/definitions#differential)`,
//     related_formulas: `
// - [Differential](!/calculus/derivatives/formulas#differential)
// - [Linear Approximation](!/calculus/derivatives/formulas#linear_approximation)`,
//   },
 
//   {
//     name: 'Logarithmic Derivative',
//     entity: 'derivative',
//     category: 'Differentials',
//     formula: `$$\\frac{f'(x)}{f(x)} = \\frac{d}{dx}\\bigl[\\ln |f(x)|\\bigr]$$`,
//     link: { label: 'Error Estimation', url: '/calculus/derivatives/differentials#5' },
//     explanation: `Acts as a relative-error amplification factor: a relative error $|dx|$ in $x$ produces a relative error of approximately $\\bigl|\\frac{f'(x)}{f(x)}\\bigr| \\cdot |dx|$ in $f(x)$. For $f(x) = x^n$ this evaluates to $n/x$, so the relative error in $x^n$ is $|n|$ times the relative error in $x$. Also the basis of [logarithmic differentiation](!/calculus/derivatives/techniques): take $\\ln$ of both sides before differentiating to convert products into sums and exponents into multipliers.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)
// - [Differential](!/calculus/definitions#differential)`,
//     related_formulas: `
// - [Derivative of Natural Logarithm](!/calculus/derivatives/formulas#derivative_of_natural_logarithm)
// - [Logarithmic Differentiation](!/calculus/derivatives/formulas#logarithmic_differentiation)
// - [Linear Approximation](!/calculus/derivatives/formulas#linear_approximation)`,
//   },
 
//   // ──────────────────────────────────────────────────────────────────────
//   // Graph Analysis (9 entries)
//   // ──────────────────────────────────────────────────────────────────────
 
//   {
//     name: 'Tangent Line Equation',
//     entity: 'tangent_line',
//     category: 'Graph Analysis',
//     formula: `$$y - f(a) = f'(a)\\,(x - a)$$`,
//     link: { label: 'Tangent Lines', url: '/calculus/derivatives/graph-analysis#2' },
//     variables: `
// - $a$ — point of tangency on the $x$-axis
// - $f'(a)$ — slope of the tangent line at $(a, f(a))$`,
//     explanation: `The line through $(a, f(a))$ with slope $f'(a)$ — the best linear approximation to $f$ near $a$. Equivalent slope-intercept form: $y = f'(a)\\,x + [f(a) - f'(a)\\,a]$. Geometric foundation of the [linear approximation](!/calculus/derivatives/formulas#linear_approximation) formula.`,
//     related_definitions: `
// - [Tangent Line](!/calculus/definitions#tangent_line)
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Normal Line Equation](!/calculus/derivatives/formulas#normal_line_equation)
// - [Linear Approximation](!/calculus/derivatives/formulas#linear_approximation)
// - [Derivative Limit Definition](!/calculus/derivatives/formulas#derivative_limit_definition)`,
//   },
 
//   {
//     name: 'Normal Line Equation',
//     entity: 'tangent_line',
//     category: 'Graph Analysis',
//     formula: `$$y - f(a) = -\\frac{1}{f'(a)}\\,(x - a)$$`,
//     link: { label: 'Tangent Lines', url: '/calculus/derivatives/graph-analysis#2' },
//     conditions: `Requires $f'(a) \\neq 0$. If $f'(a) = 0$, the tangent is horizontal and the normal is the vertical line $x = a$.`,
//     explanation: `The line through $(a, f(a))$ perpendicular to the tangent line. Two lines are perpendicular when their slopes are negative reciprocals; the tangent has slope $f'(a)$, so the normal has slope $-1/f'(a)$.`,
//     related_definitions: `
// - [Tangent Line](!/calculus/definitions#tangent_line)`,
//     related_formulas: `
// - [Tangent Line Equation](!/calculus/derivatives/formulas#tangent_line_equation)`,
//   },
 
//   {
//     name: 'Sign of First Derivative',
//     entity: 'monotonic_function',
//     category: 'Graph Analysis',
//     formula: `$$f'(x) > 0 \\text{ on } (a, b) \\implies f \\text{ strictly increasing on } (a, b) \\\\[4pt] f'(x) < 0 \\text{ on } (a, b) \\implies f \\text{ strictly decreasing on } (a, b)$$`,
//     link: { label: 'Increasing and Decreasing Functions', url: '/calculus/derivatives/graph-analysis#3' },
//     explanation: `The sign of $f'$ on an interval determines the direction of $f$ on that interval. Proof uses the [Mean Value Theorem](!/calculus/derivatives/formulas#mean_value_theorem): for $x_1 < x_2$ in $(a, b)$, there exists $c$ with $f(x_2) - f(x_1) = f'(c)(x_2 - x_1)$, and the sign of $f'(c)$ controls the sign of the difference. To find monotonicity intervals: solve $f'(x) = 0$ and locate where $f'$ is undefined, then test the sign of $f'$ on each resulting open subinterval.`,
//     related_definitions: `
// - [Monotonic Function](!/calculus/definitions#monotonic_function)
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Mean Value Theorem](!/calculus/derivatives/formulas#mean_value_theorem)
// - [Critical Point Condition](!/calculus/derivatives/formulas#critical_point_condition)
// - [First Derivative Test](!/calculus/derivatives/formulas#first_derivative_test)`,
//   },
 
//   {
//     name: 'Critical Point Condition',
//     entity: 'critical_point',
//     category: 'Graph Analysis',
//     formula: `$$f \\text{ has local extremum at } c \\;\\implies\\; f'(c) = 0 \\;\\text{or}\\; f'(c) \\text{ undefined}$$`,
//     link: { label: 'Critical Points', url: '/calculus/derivatives/graph-analysis#4' },
//     explanation: `Fermat's theorem: every interior local extremum is a critical point. The converse fails — $f(x) = x^3$ has $f'(0) = 0$ but no extremum at $0$. Critical points are candidates for extrema, classified by the [first](!/calculus/derivatives/formulas#first_derivative_test) or [second derivative test](!/calculus/derivatives/formulas#second_derivative_test).`,
//     related_definitions: `
// - [Critical Point](!/calculus/definitions#critical_point)
// - [Local Extremum](!/calculus/definitions#local_extremum)`,
//     related_formulas: `
// - [First Derivative Test](!/calculus/derivatives/formulas#first_derivative_test)
// - [Second Derivative Test](!/calculus/derivatives/formulas#second_derivative_test)
// - [Extreme Value Theorem](!/calculus/derivatives/formulas#extreme_value_theorem)`,
//   },
 
//   {
//     name: 'First Derivative Test',
//     entity: 'local_extremum',
//     category: 'Graph Analysis',
//     formula: `$$\\text{At critical point } c: \\;\\; f' \\text{ changes } + \\to - \\Rightarrow \\text{local max}; \\;\\; f' \\text{ changes } - \\to + \\Rightarrow \\text{local min}; \\;\\; \\text{no sign change} \\Rightarrow \\text{neither}$$`,
//     link: { label: 'The First Derivative Test', url: '/calculus/derivatives/graph-analysis#5' },
//     conditions: `$f$ continuous at $c$. The test works even when $f'(c)$ is undefined, as long as $f'$ exists in a deleted neighborhood of $c$.`,
//     explanation: `Classifies a critical point by examining the sign of $f'$ on each side. Universally applicable — does not require $f''$ to exist. Falls back to a sign-chart check for $f'$ in intervals immediately left and right of $c$.`,
//     related_definitions: `
// - [Local Extremum](!/calculus/definitions#local_extremum)
// - [Critical Point](!/calculus/definitions#critical_point)`,
//     related_formulas: `
// - [Critical Point Condition](!/calculus/derivatives/formulas#critical_point_condition)
// - [Second Derivative Test](!/calculus/derivatives/formulas#second_derivative_test)
// - [Sign of First Derivative](!/calculus/derivatives/formulas#sign_of_first_derivative)`,
//   },
 
//   {
//     name: 'Second Derivative Test',
//     entity: 'local_extremum',
//     category: 'Graph Analysis',
//     formula: `$$f'(c) = 0,\\; f''(c) > 0 \\;\\Rightarrow\\; \\text{local min at } c \\\\[4pt] f'(c) = 0,\\; f''(c) < 0 \\;\\Rightarrow\\; \\text{local max at } c$$`,
//     link: { label: 'The Second Derivative Test', url: '/calculus/derivatives/graph-analysis#6' },
//     conditions: `$f'(c) = 0$ and $f''(c)$ exists. If $f''(c) = 0$, the test is inconclusive — fall back to the [first derivative test](!/calculus/derivatives/formulas#first_derivative_test) or examine higher-order derivatives. Cannot handle critical points where $f'(c)$ is undefined.`,
//     explanation: `Faster than the first derivative test when $f''$ is easy to compute: a single value of $f''$ at $c$ determines the classification. The horizontal tangent sits at the bottom of a cup ($f'' > 0$, concave up → minimum) or at the top of a cap ($f'' < 0$, concave down → maximum).`,
//     related_definitions: `
// - [Local Extremum](!/calculus/definitions#local_extremum)
// - [Concavity](!/calculus/definitions#concavity)
// - [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative)`,
//     related_formulas: `
// - [First Derivative Test](!/calculus/derivatives/formulas#first_derivative_test)
// - [Concavity from Second Derivative](!/calculus/derivatives/formulas#concavity_from_second_derivative)
// - [Critical Point Condition](!/calculus/derivatives/formulas#critical_point_condition)`,
//   },
 
//   {
//     name: 'Concavity from Second Derivative',
//     entity: 'concavity',
//     category: 'Graph Analysis',
//     formula: `$$f''(x) > 0 \\text{ on } (a,b) \\;\\Rightarrow\\; f \\text{ concave up on } (a,b) \\\\[4pt] f''(x) < 0 \\text{ on } (a,b) \\;\\Rightarrow\\; f \\text{ concave down on } (a,b)$$`,
//     link: { label: 'Concavity', url: '/calculus/derivatives/graph-analysis#7' },
//     explanation: `The sign of the second derivative tracks how the slope is changing, independent of whether $f$ itself rises or falls. Concave up: the curve lies above its tangent lines, slope is increasing. Concave down: the curve lies below its tangent lines, slope is decreasing. A function can be increasing and concave down simultaneously — rising but decelerating.`,
//     related_definitions: `
// - [Concavity](!/calculus/definitions#concavity)
// - [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative)`,
//     related_formulas: `
// - [Inflection Point Condition](!/calculus/derivatives/formulas#inflection_point_condition)
// - [Second Derivative Test](!/calculus/derivatives/formulas#second_derivative_test)`,
//   },
 
//   {
//     name: 'Inflection Point Condition',
//     entity: 'inflection_point',
//     category: 'Graph Analysis',
//     formula: `$$c \\text{ is an inflection point} \\;\\iff\\; f'' \\text{ changes sign across } c$$`,
//     link: { label: 'Inflection Points', url: '/calculus/derivatives/graph-analysis#8' },
//     conditions: `At an inflection point, $f''(c) = 0$ or $f''(c)$ is undefined. The condition $f''(c) = 0$ alone is necessary but not sufficient — $f(x) = x^4$ has $f''(0) = 0$ with no inflection point at $0$.`,
//     explanation: `Inflection points are where the bending direction reverses. To locate: find where $f''(x) = 0$ or $f''$ is undefined, then verify $f''$ actually changes sign across each candidate. On the graph of $f'$, inflection points of $f$ correspond to local extrema of $f'$.`,
//     related_definitions: `
// - [Inflection Point](!/calculus/definitions#inflection_point)
// - [Concavity](!/calculus/definitions#concavity)`,
//     related_formulas: `
// - [Concavity from Second Derivative](!/calculus/derivatives/formulas#concavity_from_second_derivative)`,
//   },
 
//   {
//     name: 'Extreme Value Theorem',
//     entity: 'derivative',
//     category: 'Graph Analysis',
//     formula: `$$f \\text{ continuous on } [a, b] \\;\\implies\\; f \\text{ attains an absolute max and an absolute min on } [a, b]$$`,
//     link: { label: 'Optimization', url: '/calculus/derivatives/graph-analysis#10' },
//     conditions: `Both hypotheses are essential: $f$ continuous AND interval $[a, b]$ closed and bounded. Discontinuous functions can fail; open or unbounded intervals can fail (e.g., $f(x) = x$ on $(0, 1)$ has no maximum).`,
//     explanation: `Guarantees that optimization on a closed bounded interval produces solutions. The candidates for absolute extrema are the critical points inside $(a, b)$ together with the endpoints $a$ and $b$ — evaluate $f$ at each and pick the largest/smallest.`,
//     related_definitions: `
// - [Continuity](!/calculus/definitions#continuity)
// - [Local Extremum](!/calculus/definitions#local_extremum)`,
//     related_formulas: `
// - [Critical Point Condition](!/calculus/derivatives/formulas#critical_point_condition)
// - [First Derivative Test](!/calculus/derivatives/formulas#first_derivative_test)
// - [Second Derivative Test](!/calculus/derivatives/formulas#second_derivative_test)`,
//   },
 
//   // ──────────────────────────────────────────────────────────────────────
//   // Higher-Order Derivatives (8 entries)
//   // ──────────────────────────────────────────────────────────────────────
 
//   {
//     name: 'nth Derivative of Power',
//     entity: 'higher_order_derivative',
//     category: 'Higher-Order Derivatives',
//     formula: `$$\\frac{d^k}{dx^k}\\bigl[x^m\\bigr] = \\frac{m!}{(m-k)!}\\, x^{m-k} \\quad (k \\leq m), \\qquad \\frac{d^k}{dx^k}\\bigl[x^m\\bigr] = 0 \\quad (k > m)$$`,
//     link: { label: 'Patterns in Repeated Differentiation — Polynomials', url: '/calculus/derivatives/higher-order#4' },
//     variables: `
// - $m$ — positive integer exponent
// - $k$ — derivative order
// - $\\frac{m!}{(m-k)!}$ — falling factorial`,
//     explanation: `Polynomials terminate under repeated differentiation: each application of the [power rule](!/calculus/derivatives/formulas#power_rule_derivatives) drops the degree by one. After $m$ differentiations, $x^m$ becomes the constant $m!$; one more gives zero. The coefficient $m!/(m-k)!$ is the accumulated product of leading coefficients. This is the basis for the Taylor series coefficient formula.`,
//     related_definitions: `
// - [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative)`,
//     related_formulas: `
// - [Power Rule (Derivatives)](!/calculus/derivatives/formulas#power_rule_derivatives)
// - [Taylor Series](!/calculus/derivatives/formulas#taylor_series)`,
//   },
 
//   {
//     name: 'nth Derivative of Natural Exponential',
//     entity: 'higher_order_derivative',
//     category: 'Higher-Order Derivatives',
//     formula: `$$\\frac{d^n}{dx^n}\\bigl[e^x\\bigr] = e^x$$`,
//     link: { label: 'Patterns in Repeated Differentiation — Exponentials', url: '/calculus/derivatives/higher-order#5' },
//     explanation: `The natural exponential is invariant under differentiation at every order — the property that singles out $e$ as the natural base. Among elementary functions only $f \\equiv 0$ and $Ce^x$ share this property.`,
//     related_definitions: `
// - [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative)`,
//     related_formulas: `
// - [Derivative of Natural Exponential](!/calculus/derivatives/formulas#derivative_of_natural_exponential)
// - [nth Derivative of Scaled Exponential](!/calculus/derivatives/formulas#nth_derivative_of_scaled_exponential)`,
//   },
 
//   {
//     name: 'nth Derivative of Scaled Exponential',
//     entity: 'higher_order_derivative',
//     category: 'Higher-Order Derivatives',
//     formula: `$$\\frac{d^n}{dx^n}\\bigl[e^{ax}\\bigr] = a^n e^{ax}$$`,
//     link: { label: 'Patterns in Repeated Differentiation — Exponentials', url: '/calculus/derivatives/higher-order#5' },
//     explanation: `Each differentiation introduces one chain-rule factor of $a$; after $n$ differentiations the constant $a^n$ accumulates. For general base: since $a^x = e^{x \\ln a}$, the $n$th derivative of $a^x$ is $(\\ln a)^n\\, a^x$. This pattern is central in linear differential equations: $e^{ax}$ satisfies any constant-coefficient ODE whose characteristic root is $a$.`,
//     related_definitions: `
// - [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative)`,
//     related_formulas: `
// - [Derivative of Natural Exponential](!/calculus/derivatives/formulas#derivative_of_natural_exponential)
// - [Derivative of General Exponential](!/calculus/derivatives/formulas#derivative_of_general_exponential)
// - [Chain Rule](!/calculus/derivatives/formulas#chain_rule)`,
//   },
 
//   {
//     name: 'nth Derivative of Sine',
//     entity: 'higher_order_derivative',
//     category: 'Higher-Order Derivatives',
//     formula: `$$\\frac{d^n}{dx^n}\\bigl[\\sin x\\bigr] = \\sin\\!\\left(x + \\frac{n\\pi}{2}\\right)$$`,
//     link: { label: 'Patterns in Repeated Differentiation — Sine and Cosine', url: '/calculus/derivatives/higher-order#6' },
//     explanation: `Sine derivatives cycle with period four: $\\sin x \\to \\cos x \\to -\\sin x \\to -\\cos x \\to \\sin x$. The compact form $\\sin(x + n\\pi/2)$ encodes all four cases simultaneously through the phase shift. For $\\sin(ax)$: the cycle persists with each differentiation introducing an additional factor of $a$, so $\\frac{d^n}{dx^n}[\\sin(ax)] = a^n \\sin(ax + n\\pi/2)$.`,
//     related_definitions: `
// - [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative)`,
//     related_formulas: `
// - [Derivative of Sine](!/calculus/derivatives/formulas#derivative_of_sine)
// - [nth Derivative of Cosine](!/calculus/derivatives/formulas#nth_derivative_of_cosine)`,
//   },
 
//   {
//     name: 'nth Derivative of Cosine',
//     entity: 'higher_order_derivative',
//     category: 'Higher-Order Derivatives',
//     formula: `$$\\frac{d^n}{dx^n}\\bigl[\\cos x\\bigr] = \\cos\\!\\left(x + \\frac{n\\pi}{2}\\right)$$`,
//     link: { label: 'Patterns in Repeated Differentiation — Sine and Cosine', url: '/calculus/derivatives/higher-order#6' },
//     explanation: `Same period-four cycle as sine, shifted: $\\cos x \\to -\\sin x \\to -\\cos x \\to \\sin x \\to \\cos x$. The phase-shift form $\\cos(x + n\\pi/2)$ unifies all four cases.`,
//     related_definitions: `
// - [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative)`,
//     related_formulas: `
// - [Derivative of Cosine](!/calculus/derivatives/formulas#derivative_of_cosine)
// - [nth Derivative of Sine](!/calculus/derivatives/formulas#nth_derivative_of_sine)`,
//   },
 
//   {
//     name: 'nth Derivative of Reciprocal',
//     entity: 'higher_order_derivative',
//     category: 'Higher-Order Derivatives',
//     formula: `$$\\frac{d^n}{dx^n}\\!\\left[\\frac{1}{x}\\right] = \\frac{(-1)^n\\, n!}{x^{n+1}}$$`,
//     link: { label: 'The nth Derivative of Specific Forms', url: '/calculus/derivatives/higher-order#7' },
//     conditions: `$x \\neq 0$.`,
//     explanation: `Apply the [power rule](!/calculus/derivatives/formulas#power_rule_derivatives) to $x^{-1}$ repeatedly: each differentiation multiplies by one more negative integer, producing the alternating sign $(-1)^n$ and the factorial $n!$. Special case of the falling-factorial pattern with $m = -1$.`,
//     related_definitions: `
// - [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative)`,
//     related_formulas: `
// - [Power Rule (Derivatives)](!/calculus/derivatives/formulas#power_rule_derivatives)
// - [nth Derivative of Natural Logarithm](!/calculus/derivatives/formulas#nth_derivative_of_natural_logarithm)`,
//   },
 
//   {
//     name: 'nth Derivative of Natural Logarithm',
//     entity: 'higher_order_derivative',
//     category: 'Higher-Order Derivatives',
//     formula: `$$\\frac{d^n}{dx^n}\\bigl[\\ln x\\bigr] = \\frac{(-1)^{n-1}\\, (n-1)!}{x^n} \\qquad (n \\geq 1)$$`,
//     link: { label: 'The nth Derivative of Specific Forms', url: '/calculus/derivatives/higher-order#7' },
//     conditions: `$x > 0$ and $n \\geq 1$. The formula is the [reciprocal pattern](!/calculus/derivatives/formulas#nth_derivative_of_reciprocal) shifted by one, since $(\\ln x)' = 1/x$.`,
//     explanation: `Differentiating $\\ln x$ once gives $1/x$; subsequent differentiations follow the reciprocal pattern. The exponent of $x$ in the denominator equals the order $n$, the factorial is $(n-1)!$, and the alternating sign is $(-1)^{n-1}$ (positive for $n = 1$).`,
//     related_definitions: `
// - [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative)`,
//     related_formulas: `
// - [Derivative of Natural Logarithm](!/calculus/derivatives/formulas#derivative_of_natural_logarithm)
// - [nth Derivative of Reciprocal](!/calculus/derivatives/formulas#nth_derivative_of_reciprocal)`,
//   },
 
//   {
//     name: 'Taylor Series',
//     entity: 'higher_order_derivative',
//     category: 'Higher-Order Derivatives',
//     formula: `$$f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}\\,(x - a)^n$$`,
//     link: { label: 'Higher-Order Derivatives and Taylor Series', url: '/calculus/derivatives/higher-order#8' },
//     variables: `
// - $a$ — center of expansion
// - $f^{(n)}(a)$ — $n$th derivative of $f$ at $a$ (with $f^{(0)} = f$)`,
//     conditions: `Holds for analytic functions in a neighborhood of $a$. Smooth ($C^\\infty$) does not imply analytic — $e^{-1/x^2}$ extended by $f(0) = 0$ has all derivatives zero at $0$ but is not identically zero, so its Taylor series at $0$ does not represent it.`,
//     explanation: `Each coefficient is a higher-order derivative at the center, divided by a factorial. The Taylor polynomial of degree $k$ truncates the series after $k + 1$ terms, providing a polynomial approximation. The Maclaurin series is the special case $a = 0$. Connection to higher-order derivatives is structural: the entire collection $\\{f^{(n)}(a)\\}$ encodes $f$ locally for analytic functions.`,
//     related_definitions: `
// - [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative)
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [nth Derivative of Power](!/calculus/derivatives/formulas#nth_derivative_of_power)
// - [nth Derivative of Natural Exponential](!/calculus/derivatives/formulas#nth_derivative_of_natural_exponential)
// - [nth Derivative of Sine](!/calculus/derivatives/formulas#nth_derivative_of_sine)`,
//   },
 
//   // ──────────────────────────────────────────────────────────────────────
//   // Differentiation Techniques (4 entries)
//   // ──────────────────────────────────────────────────────────────────────
 
//   {
//     name: 'Inverse Function Derivative',
//     entity: 'derivative',
//     category: 'Differentiation Techniques',
//     formula: `$$(f^{-1})'(x) = \\frac{1}{f'\\!\\bigl(f^{-1}(x)\\bigr)}$$`,
//     link: { label: 'Differentiating Inverse Functions', url: '/calculus/derivatives/techniques#4' },
//     conditions: `$f$ one-to-one and differentiable; $f'(f^{-1}(x)) \\neq 0$.`,
//     explanation: `Derived by [implicit differentiation](!/calculus/derivatives/techniques) of $f(y) = x$ where $y = f^{-1}(x)$: differentiating both sides gives $f'(y) \\cdot y' = 1$, so $y' = 1/f'(y) = 1/f'(f^{-1}(x))$. Geometrically, graphs of $f$ and $f^{-1}$ are reflections across $y = x$, so slopes are reciprocals at corresponding points. Used to derive the [inverse trigonometric](!/calculus/derivatives/formulas#derivative_of_arcsine) and inverse hyperbolic derivatives.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Derivative of Arcsine](!/calculus/derivatives/formulas#derivative_of_arcsine)
// - [Derivative of Arctangent](!/calculus/derivatives/formulas#derivative_of_arctangent)
// - [Derivative of Natural Logarithm](!/calculus/derivatives/formulas#derivative_of_natural_logarithm)`,
//   },
 
//   {
//     name: 'Logarithmic Differentiation',
//     entity: 'derivative',
//     category: 'Differentiation Techniques',
//     formula: `$$\\frac{dy}{dx} = y \\cdot \\frac{d}{dx}\\bigl[\\ln |y|\\bigr]$$`,
//     link: { label: 'Logarithmic Differentiation', url: '/calculus/derivatives/techniques#3' },
//     conditions: `$y \\neq 0$ in a neighborhood of the point of evaluation.`,
//     explanation: `Take $\\ln$ of both sides of $y = f(x)$, expand using log properties (products → sums, quotients → differences, exponents → multipliers), then differentiate implicitly. Solving for $dy/dx$ gives the formula above. Distinctively useful for variable-exponent expressions like $x^x$, $(\\sin x)^{\\cos x}$, where no other rule applies cleanly. Also simplifies products and quotients of many factors. The factor $\\frac{d}{dx}[\\ln|y|]$ is the [logarithmic derivative](!/calculus/derivatives/formulas#logarithmic_derivative).`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Logarithmic Derivative](!/calculus/derivatives/formulas#logarithmic_derivative)
// - [Derivative of Natural Logarithm](!/calculus/derivatives/formulas#derivative_of_natural_logarithm)
// - [Chain Rule](!/calculus/derivatives/formulas#chain_rule)`,
//   },
 
//   {
//     name: 'Parametric First Derivative',
//     entity: 'derivative',
//     category: 'Differentiation Techniques',
//     formula: `$$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$$`,
//     link: { label: 'Parametric Differentiation', url: '/calculus/derivatives/techniques#6' },
//     conditions: `$dx/dt \\neq 0$ at the point of evaluation. Both $x(t)$ and $y(t)$ differentiable in $t$.`,
//     explanation: `For a curve given by $x = x(t)$, $y = y(t)$, the slope at a point is the ratio of the two parametric derivatives. Follows from the [chain rule](!/calculus/derivatives/formulas#chain_rule) in Leibniz form: $\\frac{dy}{dt} = \\frac{dy}{dx} \\cdot \\frac{dx}{dt}$. Handles curves that loop, self-intersect, or cannot be expressed as $y = f(x)$.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)`,
//     related_formulas: `
// - [Parametric Second Derivative](!/calculus/derivatives/formulas#parametric_second_derivative)
// - [Chain Rule](!/calculus/derivatives/formulas#chain_rule)`,
//   },
 
//   {
//     name: 'Parametric Second Derivative',
//     entity: 'derivative',
//     category: 'Differentiation Techniques',
//     formula: `$$\\frac{d^2y}{dx^2} = \\frac{\\dfrac{d}{dt}\\!\\left(\\dfrac{dy}{dx}\\right)}{\\dfrac{dx}{dt}}$$`,
//     link: { label: 'Parametric Differentiation', url: '/calculus/derivatives/techniques#6' },
//     conditions: `$dx/dt \\neq 0$ at the point of evaluation. NOT equal to $\\frac{d^2y/dt^2}{d^2x/dt^2}$ — a common error.`,
//     explanation: `Differentiate $dy/dx$ (a function of $t$ via the [first parametric derivative](!/calculus/derivatives/formulas#parametric_first_derivative)) with respect to $t$, then divide by $dx/dt$ once more. The naive formula $\\frac{d^2y/dt^2}{d^2x/dt^2}$ is wrong and produces incorrect concavity analysis when used.`,
//     related_definitions: `
// - [Derivative](!/calculus/definitions#derivative)
// - [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative)`,
//     related_formulas: `
// - [Parametric First Derivative](!/calculus/derivatives/formulas#parametric_first_derivative)
// - [Concavity from Second Derivative](!/calculus/derivatives/formulas#concavity_from_second_derivative)`,
//   },
 

// ];

// export default calculusFormulasList;



// ─────────────────────────────────────────────────────────────────────────
// Calculus Formulas — full list (134 entries)
// Slices: Limits (33), Integrals (38), Derivatives (63)
//
// Schema per formulas_methodology_final.md:
//   { name, entity, category, formula, link: { label, url }, fields: { ... } }
// All descriptive content (explanation, conditions, variables, variants,
// notation, related_formulas, related_definitions) is nested under `fields`
// — required by FormulasTOC for tab rendering.
//
// ID derived from name at render time:
//   name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
//       .toLowerCase()
//       .replace(/[\s-]+/g, '_')
//       .replace(/[()'`’]/g, '')
//
// Cross-aspect linking conventions:
//   - link.url uses plain /path (no ! prefix)
//   - markdown links inside field strings use !/path prefix
//   - LaTeX uses double-backslash \\ in template literals
// ─────────────────────────────────────────────────────────────────────────

const calculusFormulasList = [

  // ═══ LIMITS ═══════════════════════════════════════════════════════════

  // ─── LIMIT LAWS ───────────────────────────────────────────────────────

  {
    name: 'Two-Sided Limit Existence Theorem',
    entity: 'limit',
    category: 'Limit Laws',
    formula: `$$\\lim_{x \\to a} f(x) = L \\iff \\lim_{x \\to a^-} f(x) = L \\;\\text{ and }\\; \\lim_{x \\to a^+} f(x) = L$$`,
    link: { label: 'The Existence Condition', url: '/calculus/limits/two-sided#2' },
    fields: {
      explanation: `The two-sided limit exists exactly when both one-sided limits exist and agree on a single value. This converts the problem of evaluating a two-sided limit into two simpler problems — compute each direction separately, then check whether they match.`,
      conditions: `Both one-sided limits must exist as finite values. If either fails to exist (oscillation, unbounded behavior) or if they exist but differ, the two-sided limit does not exist.`,
      related_formulas: `- [Continuity at a Point](!/calculus/limits/formulas#continuity_at_a_point)
- [One-Sided Continuity](!/calculus/limits/formulas#one_sided_continuity)`,
      related_definitions: `- [One-Sided Limit](!/calculus/definitions#one_sided_limit)`,
    },
  },

  {
    name: 'Limit of a Constant',
    entity: 'limit',
    category: 'Limit Laws',
    formula: `$$\\lim_{x \\to a} c = c$$`,
    link: { label: 'Limit of a Constant', url: '/calculus/limits/rules#2' },
    fields: {
      explanation: `A constant function outputs the same value for every input. As $x$ approaches $a$, the output never changes, so the limit equals the constant itself.`,
      related_formulas: `- [Limit of the Identity Function](!/calculus/limits/formulas#limit_of_the_identity_function)
- [Limit of a Polynomial](!/calculus/limits/formulas#limit_of_a_polynomial)`,
    },
  },

  {
    name: 'Limit of the Identity Function',
    entity: 'limit',
    category: 'Limit Laws',
    formula: `$$\\lim_{x \\to a} x = a$$`,
    link: { label: 'Limit of the Identity Function', url: '/calculus/limits/rules#3' },
    fields: {
      explanation: `The identity function returns its input unchanged. As $x$ approaches $a$, the output also approaches $a$. Combined with the constant rule, this provides the base case for evaluating limits of all polynomial expressions.`,
      related_formulas: `- [Limit of a Constant](!/calculus/limits/formulas#limit_of_a_constant)
- [Limit of a Polynomial](!/calculus/limits/formulas#limit_of_a_polynomial)`,
    },
  },

  {
    name: 'Sum and Difference Rule (Limits)',
    entity: 'limit',
    category: 'Limit Laws',
    formula: `$$\\lim_{x \\to a} [f(x) \\pm g(x)] = \\lim_{x \\to a} f(x) \\pm \\lim_{x \\to a} g(x)$$`,
    link: { label: 'Sum and Difference Rules', url: '/calculus/limits/rules#4' },
    fields: {
      explanation: `The limit of a sum is the sum of the limits; the limit of a difference is the difference of the limits. Limits distribute over addition and subtraction whenever the component limits exist.`,
      conditions: `Both $\\lim_{x \\to a} f(x)$ and $\\lim_{x \\to a} g(x)$ must exist as finite values. The rule fails for indeterminate forms like $\\infty - \\infty$, where both terms grow unboundedly and the difference is undetermined without further analysis.`,
      related_formulas: `- [Constant Multiple Rule (Limits)](!/calculus/limits/formulas#constant_multiple_rule_limits)
- [Product Rule (Limits)](!/calculus/limits/formulas#product_rule_limits)
- [Quotient Rule (Limits)](!/calculus/limits/formulas#quotient_rule_limits)`,
      related_definitions: `- [Indeterminate Form](!/calculus/definitions#indeterminate_form)`,
    },
  },

  {
    name: 'Constant Multiple Rule (Limits)',
    entity: 'limit',
    category: 'Limit Laws',
    formula: `$$\\lim_{x \\to a} [c \\cdot f(x)] = c \\cdot \\lim_{x \\to a} f(x)$$`,
    link: { label: 'Constant Multiple Rule', url: '/calculus/limits/rules#5' },
    fields: {
      explanation: `Constants pass through limits. Scaling a function by a constant scales its limit by the same constant. This is a special case of the product rule with one factor constant, but it appears often enough to state on its own.`,
      related_formulas: `- [Sum and Difference Rule (Limits)](!/calculus/limits/formulas#sum_and_difference_rule_limits)
- [Product Rule (Limits)](!/calculus/limits/formulas#product_rule_limits)`,
    },
  },

  {
    name: 'Product Rule (Limits)',
    entity: 'limit',
    category: 'Limit Laws',
    formula: `$$\\lim_{x \\to a} [f(x) \\cdot g(x)] = \\lim_{x \\to a} f(x) \\cdot \\lim_{x \\to a} g(x)$$`,
    link: { label: 'Product Rule', url: '/calculus/limits/rules#6' },
    fields: {
      explanation: `The limit of a product is the product of the limits. The rule extends to any finite number of factors: if every factor has a limit, the product's limit is the product of those limits.`,
      conditions: `Both component limits must exist as finite values. The rule fails for the indeterminate form $0 \\cdot \\infty$ — when one factor approaches zero while the other grows unboundedly, the product can approach any value depending on relative rates.`,
      related_formulas: `- [Quotient Rule (Limits)](!/calculus/limits/formulas#quotient_rule_limits)
- [Power Rule (Limits)](!/calculus/limits/formulas#power_rule_limits)
- [Sum and Difference Rule (Limits)](!/calculus/limits/formulas#sum_and_difference_rule_limits)`,
      related_definitions: `- [Indeterminate Form](!/calculus/definitions#indeterminate_form)`,
    },
  },

  {
    name: 'Quotient Rule (Limits)',
    entity: 'limit',
    category: 'Limit Laws',
    formula: `$$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{\\lim_{x \\to a} f(x)}{\\lim_{x \\to a} g(x)}, \\quad \\lim_{x \\to a} g(x) \\neq 0$$`,
    link: { label: 'Quotient Rule', url: '/calculus/limits/rules#7' },
    fields: {
      explanation: `The limit of a quotient is the quotient of the limits, provided the denominator's limit is nonzero. When the denominator's limit is zero, this rule fails and other techniques are required.`,
      conditions: `Both component limits must exist, and the denominator's limit must be nonzero. If $\\lim g = 0$ and $\\lim f \\neq 0$, the limit is typically $\\pm\\infty$ — sign analysis determines which. If both vanish, the form is $\\tfrac{0}{0}$ and demands factoring, rationalization, or L'Hôpital's Rule.`,
      related_formulas: `- [Product Rule (Limits)](!/calculus/limits/formulas#product_rule_limits)
- [Limit of a Rational Function](!/calculus/limits/formulas#limit_of_a_rational_function)
- [L'Hôpital's Rule](!/calculus/limits/formulas#lhopitals_rule)`,
      related_definitions: `- [Indeterminate Form](!/calculus/definitions#indeterminate_form)`,
    },
  },

  {
    name: 'Power Rule (Limits)',
    entity: 'limit',
    category: 'Limit Laws',
    formula: `$$\\lim_{x \\to a} [f(x)]^n = \\left[\\lim_{x \\to a} f(x)\\right]^n$$`,
    link: { label: 'Power Rule', url: '/calculus/limits/rules#8' },
    fields: {
      explanation: `The limit of a power is the power of the limit. For positive integer $n$ this follows from repeated application of the product rule. The rule extends to rational exponents under domain restrictions.`,
      variants: `Rational exponent form, valid where the right side is defined: $$\\lim_{x \\to a} [f(x)]^{m/n} = \\left[\\lim_{x \\to a} f(x)\\right]^{m/n}$$`,
      conditions: `For integer $n \\geq 1$, no extra conditions beyond the existence of $\\lim f$. For rational exponents $m/n$ with even $n$, the limit of $f$ must be non-negative.`,
      related_formulas: `- [Product Rule (Limits)](!/calculus/limits/formulas#product_rule_limits)
- [Root Rule (Limits)](!/calculus/limits/formulas#root_rule_limits)`,
    },
  },

  {
    name: 'Root Rule (Limits)',
    entity: 'limit',
    category: 'Limit Laws',
    formula: `$$\\lim_{x \\to a} \\sqrt[n]{f(x)} = \\sqrt[n]{\\lim_{x \\to a} f(x)}$$`,
    link: { label: 'Root Rule', url: '/calculus/limits/rules#9' },
    fields: {
      explanation: `The limit of a root is the root of the limit, whenever the root is defined. This is the power rule with exponent $1/n$.`,
      conditions: `For odd $n$, holds for all real values of $\\lim f$. For even $n$, requires $\\lim f \\geq 0$ and $f(x) \\geq 0$ near $a$.`,
      related_formulas: `- [Power Rule (Limits)](!/calculus/limits/formulas#power_rule_limits)`,
    },
  },

  {
    name: 'Absolute Value Rule (Limits)',
    entity: 'limit',
    category: 'Limit Laws',
    formula: `$$\\lim_{x \\to a} |f(x)| = \\left|\\lim_{x \\to a} f(x)\\right|$$`,
    link: { label: 'Absolute Value Rule', url: '/calculus/limits/rules#10' },
    fields: {
      explanation: `Absolute value passes through limits. The converse is false: $\\lim |f|$ may exist when $\\lim f$ does not — for instance, $|(-1)^n| = 1$ for all $n$, but $(-1)^n$ has no limit.`,
      conditions: `Requires $\\lim f$ to exist. The rule cannot be reversed.`,
    },
  },

  {
    name: 'Limit of a Polynomial',
    entity: 'limit',
    category: 'Limit Laws',
    formula: `$$\\lim_{x \\to a} p(x) = p(a)$$`,
    link: { label: 'Limits of Polynomials', url: '/calculus/limits/rules#11' },
    fields: {
      explanation: `For any polynomial, the limit at a point equals the value at that point. Direct substitution always works. This follows from polynomials being continuous everywhere — every polynomial is built from sums, products, and constant multiples of the identity function and constants, all operations that limits respect.`,
      related_formulas: `- [Limit of a Rational Function](!/calculus/limits/formulas#limit_of_a_rational_function)
- [Continuity at a Point](!/calculus/limits/formulas#continuity_at_a_point)`,
      related_definitions: `- [Continuity](!/calculus/definitions#continuity)`,
    },
  },

  {
    name: 'Limit of a Rational Function',
    entity: 'limit',
    category: 'Limit Laws',
    formula: `$$\\lim_{x \\to a} \\frac{p(x)}{q(x)} = \\frac{p(a)}{q(a)}, \\quad q(a) \\neq 0$$`,
    link: { label: 'Limits of Rational Functions', url: '/calculus/limits/rules#12' },
    fields: {
      explanation: `When the denominator does not vanish at $a$, the limit of a rational function is just the value at $a$ — direct substitution works. When $q(a) = 0$, this rule no longer applies: the result is either an infinite limit (if $p(a) \\neq 0$) or an indeterminate $\\tfrac{0}{0}$ (if $p(a) = 0$, indicating a shared factor of $(x - a)$).`,
      conditions: `$q(a) \\neq 0$. Where this fails, factor numerator and denominator and cancel, or analyze sign for vertical asymptote behavior.`,
      related_formulas: `- [Limit of a Polynomial](!/calculus/limits/formulas#limit_of_a_polynomial)
- [Quotient Rule (Limits)](!/calculus/limits/formulas#quotient_rule_limits)
- [L'Hôpital's Rule](!/calculus/limits/formulas#lhopitals_rule)`,
      related_definitions: `- [Continuity](!/calculus/definitions#continuity)
- [Asymptote](!/calculus/definitions#asymptote)`,
    },
  },

  {
    name: 'Composition Rule (Limits)',
    entity: 'limit',
    category: 'Limit Laws',
    formula: `$$\\lim_{x \\to a} f(g(x)) = f\\!\\left(\\lim_{x \\to a} g(x)\\right) \\quad \\text{if } f \\text{ is continuous at } \\lim_{x \\to a} g(x)$$`,
    link: { label: 'Composition Rule', url: '/calculus/limits/rules#13' },
    fields: {
      explanation: `Limits pass through continuous functions. First find the limit of the inner function, then apply the outer function to that value. The result equals the limit of the composition.`,
      conditions: `The outer function $f$ must be continuous at the limit of the inner function. Without continuity, the behavior of $f$ near $\\lim g$ may differ from $f(\\lim g)$, breaking the rule.`,
      related_formulas: `- [Continuity Preserved Under Operations](!/calculus/limits/formulas#continuity_preserved_under_operations)
- [Continuity at a Point](!/calculus/limits/formulas#continuity_at_a_point)`,
      related_definitions: `- [Continuity](!/calculus/definitions#continuity)`,
    },
  },

  {
    name: 'Squeeze Theorem',
    entity: 'limit',
    category: 'Limit Laws',
    formula: `$$\\text{If } g(x) \\leq f(x) \\leq h(x) \\text{ near } a \\text{ and } \\lim_{x \\to a} g(x) = \\lim_{x \\to a} h(x) = L,$$
$$\\text{then } \\lim_{x \\to a} f(x) = L.$$`,
    link: { label: 'The Squeeze Theorem', url: '/calculus/limits/rules#14' },
    fields: {
      explanation: `When a function is trapped between two others that converge to the same limit, it has nowhere to go but that limit. The Squeeze Theorem proves the foundational trigonometric limit $\\lim_{x \\to 0} \\tfrac{\\sin x}{x} = 1$ by bounding the ratio between $\\cos x$ and $1$ near zero.`,
      conditions: `The inequality $g \\leq f \\leq h$ need only hold near $a$, not at $a$ itself. Both bounding limits must exist and be equal. Often used when $f$ contains a bounded oscillating factor (sine, cosine) multiplied by something that vanishes — bound the oscillation by $\\pm 1$ and squeeze.`,
      related_formulas: `- [Sine Limit at Zero](!/calculus/limits/formulas#sine_limit_at_zero)
- [Cosine Limit at Zero](!/calculus/limits/formulas#cosine_limit_at_zero)`,
    },
  },

  {
    name: "L'Hôpital's Rule",
    entity: 'indeterminate_form',
    category: 'Limit Laws',
    formula: `$$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)} \\quad \\text{for indeterminate forms } \\tfrac{0}{0} \\text{ or } \\tfrac{\\infty}{\\infty}$$`,
    link: { label: "L'Hôpital's Rule", url: '/calculus/derivatives/rules#10' },
    fields: {
      explanation: `When direct substitution gives $\\tfrac{0}{0}$ or $\\tfrac{\\infty}{\\infty}$, replace numerator and denominator with their derivatives and try again. The new limit, if it exists, equals the original. The rule may need to be applied repeatedly when the indeterminate form persists.`,
      conditions: `The original limit must produce $\\tfrac{0}{0}$ or $\\tfrac{\\infty}{\\infty}$. Both $f$ and $g$ must be differentiable near $a$ (except possibly at $a$), with $g'(x) \\neq 0$ near $a$. The limit of $f'/g'$ must exist (or be $\\pm\\infty$). Other indeterminate forms ($0 \\cdot \\infty$, $\\infty - \\infty$, $0^0$, $1^\\infty$, $\\infty^0$) require algebraic transformation into $\\tfrac{0}{0}$ or $\\tfrac{\\infty}{\\infty}$ before the rule applies.`,
      related_formulas: `- [Quotient Rule (Limits)](!/calculus/limits/formulas#quotient_rule_limits)
- [Limit of a Rational Function](!/calculus/limits/formulas#limit_of_a_rational_function)`,
      related_definitions: `- [Limit](!/calculus/definitions#limit)
- [Derivative](!/calculus/definitions#derivative)`,
    },
  },

  // ─── CONTINUITY ────────────────────────────────────────────────────────

  {
    name: 'Continuity at a Point',
    entity: 'continuity',
    category: 'Continuity',
    formula: `$$f \\text{ is continuous at } x = a \\iff \\lim_{x \\to a} f(x) = f(a)$$`,
    link: { label: 'The Formal Definition', url: '/calculus/limits/continuity#2' },
    fields: {
      explanation: `A single equation that encodes three requirements: $f(a)$ must be defined, the limit must exist, and the two must match. Continuity means the function value matches what surrounding values predict — no jumps, no holes, no surprises.`,
      related_formulas: `- [One-Sided Continuity](!/calculus/limits/formulas#one_sided_continuity)
- [Two-Sided Limit Existence Theorem](!/calculus/limits/formulas#two_sided_limit_existence_theorem)
- [Limit of a Polynomial](!/calculus/limits/formulas#limit_of_a_polynomial)`,
      related_definitions: `- [Limit](!/calculus/definitions#limit)`,
    },
  },

  {
    name: 'One-Sided Continuity',
    entity: 'continuity',
    category: 'Continuity',
    formula: `$$f \\text{ right-continuous at } a \\iff \\lim_{x \\to a^+} f(x) = f(a)$$
$$f \\text{ left-continuous at } a \\iff \\lim_{x \\to a^-} f(x) = f(a)$$`,
    link: { label: 'One-Sided Continuity', url: '/calculus/limits/one-sided#9' },
    fields: {
      explanation: `Continuity from a single direction. A function continuous on a closed interval $[a, b]$ must be continuous on $(a, b)$, right-continuous at $a$, and left-continuous at $b$ — full continuity is unavailable at endpoints because only one direction of approach exists.`,
      related_formulas: `- [Continuity at a Point](!/calculus/limits/formulas#continuity_at_a_point)
- [Two-Sided Limit Existence Theorem](!/calculus/limits/formulas#two_sided_limit_existence_theorem)`,
      related_definitions: `- [One-Sided Limit](!/calculus/definitions#one_sided_limit)`,
    },
  },

  {
    name: 'Continuity Preserved Under Operations',
    entity: 'continuity',
    category: 'Continuity',
    formula: `$$f, g \\text{ continuous at } a \\implies f \\pm g, \\; cf, \\; f \\cdot g, \\; \\tfrac{f}{g}\\;(g(a) \\neq 0), \\; f \\circ g \\text{ continuous at } a$$`,
    link: { label: 'Combinations of Continuous Functions', url: '/calculus/limits/continuity#10' },
    fields: {
      explanation: `Continuity is preserved by the standard operations — sums, differences, scalar multiples, products, quotients (where defined), and compositions. This means whole families of functions are continuous wherever defined: polynomials everywhere, rational functions where the denominator is nonzero, and any composition built from continuous building blocks.`,
      related_formulas: `- [Continuity at a Point](!/calculus/limits/formulas#continuity_at_a_point)
- [Composition Rule (Limits)](!/calculus/limits/formulas#composition_rule_limits)
- [Sum and Difference Rule (Limits)](!/calculus/limits/formulas#sum_and_difference_rule_limits)
- [Product Rule (Limits)](!/calculus/limits/formulas#product_rule_limits)
- [Quotient Rule (Limits)](!/calculus/limits/formulas#quotient_rule_limits)`,
    },
  },

  {
    name: 'Intermediate Value Theorem',
    entity: 'continuity',
    category: 'Continuity',
    formula: `$$f \\text{ continuous on } [a,b], \\; k \\text{ between } f(a) \\text{ and } f(b) \\implies \\exists\\, c \\in (a,b) \\text{ with } f(c) = k$$`,
    link: { label: 'The Intermediate Value Theorem (IVT)', url: '/calculus/limits/continuity#11' },
    fields: {
      explanation: `A continuous function on a closed interval hits every value between its endpoints — no skipping. If $f$ is negative at one endpoint and positive at the other, it must equal zero somewhere in between. This is an existence theorem: it guarantees a $c$ exists, but says nothing about where it is or whether it is unique.`,
      conditions: `$f$ must be continuous on the closed interval $[a, b]$. The value $k$ must lie strictly between $f(a)$ and $f(b)$ (or equal one of them, in which case $c$ is the corresponding endpoint).`,
      related_formulas: `- [Continuity at a Point](!/calculus/limits/formulas#continuity_at_a_point)`,
    },
  },

  // ─── SPECIAL LIMITS ────────────────────────────────────────────────────

  {
    name: 'Sine Limit at Zero',
    entity: 'limit',
    category: 'Special Limits',
    formula: `$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$`,
    link: { label: 'The Fundamental Trigonometric Limit', url: '/calculus/limits/special#2' },
    fields: {
      explanation: `Direct substitution gives $\\tfrac{0}{0}$, but the geometry of the unit circle reveals that for small $x$, $\\sin x$ and $x$ are nearly equal. Their ratio approaches exactly $1$. This limit is the foundation for the derivatives of $\\sin x$ and $\\cos x$.`,
      conditions: `$x$ must be measured in radians. The limit fails (becomes $\\tfrac{\\pi}{180}$) if $x$ is in degrees.`,
      related_formulas: `- [Cosine Limit at Zero](!/calculus/limits/formulas#cosine_limit_at_zero)
- [Cosine Quadratic Limit at Zero](!/calculus/limits/formulas#cosine_quadratic_limit_at_zero)
- [Tangent Limit at Zero](!/calculus/limits/formulas#tangent_limit_at_zero)
- [Squeeze Theorem](!/calculus/limits/formulas#squeeze_theorem)`,
    },
  },

  {
    name: 'Cosine Limit at Zero',
    entity: 'limit',
    category: 'Special Limits',
    formula: `$$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0$$`,
    link: { label: 'Related Trigonometric Limits', url: '/calculus/limits/special#3' },
    fields: {
      explanation: `Another $\\tfrac{0}{0}$ form. Multiply by the conjugate $\\tfrac{1 + \\cos x}{1 + \\cos x}$ to convert the numerator to $\\sin^2 x$, then split into $\\tfrac{\\sin x}{x} \\cdot \\tfrac{\\sin x}{1 + \\cos x}$ — the first factor goes to $1$, the second to $0$.`,
      conditions: `$x$ in radians.`,
      related_formulas: `- [Sine Limit at Zero](!/calculus/limits/formulas#sine_limit_at_zero)
- [Cosine Quadratic Limit at Zero](!/calculus/limits/formulas#cosine_quadratic_limit_at_zero)`,
    },
  },

  {
    name: 'Cosine Quadratic Limit at Zero',
    entity: 'limit',
    category: 'Special Limits',
    formula: `$$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}$$`,
    link: { label: 'Related Trigonometric Limits', url: '/calculus/limits/special#3' },
    fields: {
      explanation: `The numerator vanishes like $x^2$ near zero — specifically, $1 - \\cos x \\approx \\tfrac{x^2}{2}$. The leading coefficient of that approximation is exactly the limit. The second derivative of $\\cos x$ at zero is $-1$, so the Taylor expansion gives $\\cos x \\approx 1 - \\tfrac{x^2}{2}$.`,
      conditions: `$x$ in radians.`,
      related_formulas: `- [Cosine Limit at Zero](!/calculus/limits/formulas#cosine_limit_at_zero)
- [Sine Limit at Zero](!/calculus/limits/formulas#sine_limit_at_zero)`,
    },
  },

  {
    name: 'Tangent Limit at Zero',
    entity: 'limit',
    category: 'Special Limits',
    formula: `$$\\lim_{x \\to 0} \\frac{\\tan x}{x} = 1$$`,
    link: { label: 'Related Trigonometric Limits', url: '/calculus/limits/special#3' },
    fields: {
      explanation: `Follows directly from the sine limit: $\\tfrac{\\tan x}{x} = \\tfrac{\\sin x}{x} \\cdot \\tfrac{1}{\\cos x}$. The first factor goes to $1$, the second goes to $1$, so the product goes to $1$.`,
      conditions: `$x$ in radians.`,
      related_formulas: `- [Sine Limit at Zero](!/calculus/limits/formulas#sine_limit_at_zero)
- [Cosine Limit at Zero](!/calculus/limits/formulas#cosine_limit_at_zero)`,
    },
  },

  {
    name: 'Exponential Limit at Zero',
    entity: 'limit',
    category: 'Special Limits',
    formula: `$$\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$$`,
    link: { label: 'The Natural Exponential Limit', url: '/calculus/limits/special#5' },
    fields: {
      explanation: `This limit is the derivative of $e^x$ at $x = 0$, and it is exactly what makes $e$ special — it is the unique base for which the slope at zero equals $1$. The result drives the entire structure of $e^x$ as the function equal to its own derivative.`,
      variants: `For an arbitrary positive base $a$, the analogue is $$\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a.$$ Setting $a = e$ recovers the natural form.`,
      related_formulas: `- [Logarithm Taylor Limit](!/calculus/limits/formulas#logarithm_taylor_limit)
- [Definition of e as a Limit](!/calculus/limits/formulas#definition_of_e_as_a_limit)`,
      related_definitions: `- [Derivative](!/calculus/definitions#derivative)`,
    },
  },

  {
    name: 'Logarithm Taylor Limit',
    entity: 'limit',
    category: 'Special Limits',
    formula: `$$\\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x} = 1$$`,
    link: { label: 'Related Exponential Limits', url: '/calculus/limits/special#6' },
    fields: {
      explanation: `The mirror image of the exponential limit at zero: $\\ln(1+x)$ behaves like $x$ near zero. Substituting $u = \\ln(1+x)$ converts this directly into the exponential limit. Equivalently, this is the derivative of $\\ln x$ at $x = 1$, which equals $1$.`,
      related_formulas: `- [Exponential Limit at Zero](!/calculus/limits/formulas#exponential_limit_at_zero)
- [Definition of e as a Limit](!/calculus/limits/formulas#definition_of_e_as_a_limit)`,
    },
  },

  {
    name: 'Definition of e as a Limit',
    entity: 'limit',
    category: 'Special Limits',
    formula: `$$\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e$$`,
    link: { label: 'The Definition of e', url: '/calculus/limits/special#7' },
    fields: {
      explanation: `The number $e \\approx 2.71828$ is defined by this limit. It arises in continuous compounding: an annual interest rate of $100\\%$ compounded $n$ times per year produces a growth factor $(1 + 1/n)^n$, which approaches $e$ as compounding becomes continuous.`,
      variants: `Discrete (sequence) form: $$\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n = e.$$ Reciprocal form (often more useful in derivations): $$\\lim_{x \\to 0} (1 + x)^{1/x} = e.$$`,
      related_formulas: `- [Exponential Limit at Zero](!/calculus/limits/formulas#exponential_limit_at_zero)
- [Logarithm Taylor Limit](!/calculus/limits/formulas#logarithm_taylor_limit)`,
    },
  },

  {
    name: 'x ln x Limit at Zero',
    entity: 'limit',
    category: 'Special Limits',
    formula: `$$\\lim_{x \\to 0^+} x \\ln x = 0$$`,
    link: { label: 'Limits Involving Logarithms', url: '/calculus/limits/special#8' },
    fields: {
      explanation: `An indeterminate $0 \\cdot (-\\infty)$ form. As $x \\to 0^+$, $\\ln x$ plunges to $-\\infty$, but $x$ vanishes faster than $\\ln x$ blows up. The polynomial factor wins; the product approaches zero.`,
      related_formulas: `- [Polynomial Beats Logarithm](!/calculus/limits/formulas#polynomial_beats_logarithm)
- [Logarithm End Behavior](!/calculus/limits/formulas#logarithm_end_behavior)`,
      related_definitions: `- [Indeterminate Form](!/calculus/definitions#indeterminate_form)`,
    },
  },

  // ─── ASYMPTOTES & END BEHAVIOR ─────────────────────────────────────────

  {
    name: 'Horizontal Asymptote Condition',
    entity: 'asymptote',
    category: 'Asymptotes & End Behavior',
    formula: `$$\\lim_{x \\to \\infty} f(x) = L \\;\\text{ or }\\; \\lim_{x \\to -\\infty} f(x) = L \\implies y = L \\text{ is a horizontal asymptote}$$`,
    link: { label: 'Horizontal Asymptotes', url: '/calculus/limits/infinity#3' },
    fields: {
      explanation: `A finite limit at infinity in either direction produces a horizontal asymptote. A function can have zero, one (the same in both directions), or two (different finite limits at $\\pm\\infty$) horizontal asymptotes.`,
      related_formulas: `- [Vertical Asymptote Condition](!/calculus/limits/formulas#vertical_asymptote_condition)
- [Limit of a Rational Function](!/calculus/limits/formulas#limit_of_a_rational_function)`,
      related_definitions: `- [Limit](!/calculus/definitions#limit)`,
    },
  },

  {
    name: 'Vertical Asymptote Condition',
    entity: 'asymptote',
    category: 'Asymptotes & End Behavior',
    formula: `$$\\lim_{x \\to a^-} f(x) = \\pm\\infty \\;\\text{ or }\\; \\lim_{x \\to a^+} f(x) = \\pm\\infty \\implies x = a \\text{ is a vertical asymptote}$$`,
    link: { label: 'Vertical Asymptotes', url: '/calculus/limits/infinity#8' },
    fields: {
      explanation: `Any one-sided infinite limit produces a vertical asymptote. Both sides can disagree in sign — the line $x = a$ is still a vertical asymptote even when one side goes to $+\\infty$ and the other to $-\\infty$. For rational functions, vertical asymptotes typically occur where the denominator vanishes while the numerator does not.`,
      related_formulas: `- [Horizontal Asymptote Condition](!/calculus/limits/formulas#horizontal_asymptote_condition)
- [Logarithm End Behavior](!/calculus/limits/formulas#logarithm_end_behavior)`,
      related_definitions: `- [Discontinuity](!/calculus/definitions#discontinuity)
- [Limit](!/calculus/definitions#limit)`,
    },
  },

  {
    name: 'Exponential End Behavior',
    entity: 'limit',
    category: 'Asymptotes & End Behavior',
    formula: `$$\\lim_{x \\to \\infty} e^x = \\infty, \\qquad \\lim_{x \\to -\\infty} e^x = 0$$`,
    link: { label: 'Limits of Exponentials at Infinity', url: '/calculus/limits/infinity#11' },
    fields: {
      explanation: `The exponential grows without bound to the right and decays to zero to the left. The horizontal asymptote $y = 0$ appears in the direction where the exponent goes to $-\\infty$. For $e^{-x}$, the directions reverse.`,
      variants: `For general base $a > 1$: $$\\lim_{x \\to \\infty} a^x = \\infty, \\qquad \\lim_{x \\to -\\infty} a^x = 0.$$ For $0 < a < 1$, the limits swap.`,
      related_formulas: `- [Exponential Beats Polynomial](!/calculus/limits/formulas#exponential_beats_polynomial)
- [Horizontal Asymptote Condition](!/calculus/limits/formulas#horizontal_asymptote_condition)
- [Logarithm End Behavior](!/calculus/limits/formulas#logarithm_end_behavior)`,
      related_definitions: `- [Asymptote](!/calculus/definitions#asymptote)`,
    },
  },

  {
    name: 'Logarithm End Behavior',
    entity: 'limit',
    category: 'Asymptotes & End Behavior',
    formula: `$$\\lim_{x \\to \\infty} \\ln x = \\infty, \\qquad \\lim_{x \\to 0^+} \\ln x = -\\infty$$`,
    link: { label: 'Limits of Logarithms Toward Zero and Infinity', url: '/calculus/limits/infinity#12' },
    fields: {
      explanation: `The natural logarithm grows without bound (slowly) and plunges to $-\\infty$ as the argument approaches zero from the right. The line $x = 0$ is a vertical asymptote. No left-hand limit at zero exists because $\\ln x$ is undefined for $x \\leq 0$.`,
      conditions: `Domain restriction: $\\ln x$ is defined only for $x > 0$, so only the one-sided limit $x \\to 0^+$ is meaningful at the left boundary.`,
      related_formulas: `- [Polynomial Beats Logarithm](!/calculus/limits/formulas#polynomial_beats_logarithm)
- [Vertical Asymptote Condition](!/calculus/limits/formulas#vertical_asymptote_condition)
- [Exponential End Behavior](!/calculus/limits/formulas#exponential_end_behavior)`,
      related_definitions: `- [Asymptote](!/calculus/definitions#asymptote)`,
    },
  },

  {
    name: 'Exponential Beats Polynomial',
    entity: 'limit',
    category: 'Asymptotes & End Behavior',
    formula: `$$\\lim_{x \\to \\infty} \\frac{x^n}{e^x} = 0 \\quad \\text{for any } n$$`,
    link: { label: 'Growth Rate Comparisons', url: '/calculus/limits/special#9' },
    fields: {
      explanation: `Any exponential eventually overtakes any polynomial. Even when the polynomial degree is enormous, the exponential's rate of growth wins for large enough $x$. This is the upper tier of the growth-rate hierarchy.`,
      variants: `For any base $a > 1$: $$\\lim_{x \\to \\infty} \\frac{x^n}{a^x} = 0.$$`,
      conditions: `An indeterminate $\\tfrac{\\infty}{\\infty}$ form. Resolved by repeated application of L'Hôpital's Rule, or by noting that $e^x$ grows faster than any polynomial term.`,
      related_formulas: `- [Polynomial Beats Logarithm](!/calculus/limits/formulas#polynomial_beats_logarithm)
- [Exponential End Behavior](!/calculus/limits/formulas#exponential_end_behavior)`,
      related_definitions: `- [Indeterminate Form](!/calculus/definitions#indeterminate_form)`,
    },
  },

  {
    name: 'Polynomial Beats Logarithm',
    entity: 'limit',
    category: 'Asymptotes & End Behavior',
    formula: `$$\\lim_{x \\to \\infty} \\frac{\\ln x}{x^n} = 0 \\quad \\text{for any } n > 0$$`,
    link: { label: 'Growth Rate Comparisons', url: '/calculus/limits/special#9' },
    fields: {
      explanation: `Any positive power of $x$ eventually overtakes any logarithm. Logarithms grow but slowly — slower than every polynomial of positive degree. This is the bottom tier of the growth-rate hierarchy.`,
      conditions: `An indeterminate $\\tfrac{\\infty}{\\infty}$ form. Requires $n > 0$. Resolved by L'Hôpital's Rule or by observing that $\\ln x$ is the inverse of the rapidly-growing exponential.`,
      related_formulas: `- [Exponential Beats Polynomial](!/calculus/limits/formulas#exponential_beats_polynomial)
- [Logarithm End Behavior](!/calculus/limits/formulas#logarithm_end_behavior)
- [x ln x Limit at Zero](!/calculus/limits/formulas#x_ln_x_limit_at_zero)`,
      related_definitions: `- [Indeterminate Form](!/calculus/definitions#indeterminate_form)`,
    },
  },

  // ═══ INTEGRALS ════════════════════════════════════════════════════════

  // ─── FUNDAMENTAL THEOREM & ANTIDERIVATIVES ─────────────────────────────

  {
    name: 'Fundamental Theorem of Calculus, Part 1',
    entity: 'definite_integral',
    category: 'Fundamental Theorem & Antiderivatives',
    formula: `$$\\frac{d}{dx} \\int_a^x f(t)\\, dt = f(x)$$`,
    link: { label: 'Fundamental Theorem of Calculus — Part 1', url: '/calculus/integrals/rules#5' },
    fields: {
      explanation: `Differentiating an accumulation function recovers the integrand. If you accumulate $f$ from $a$ up to a moving boundary $x$, the rate at which the accumulated total grows at $x$ is exactly $f(x)$. This guarantees that every continuous function has an antiderivative — namely, its own accumulation function — even when no elementary formula expresses it.`,
      conditions: `$f$ must be continuous on an interval containing $a$ and $x$.`,
      related_formulas: `- [Fundamental Theorem of Calculus, Part 2](!/calculus/integrals/formulas#fundamental_theorem_of_calculus_part_2)
- [Antiderivative Family](!/calculus/integrals/formulas#antiderivative_family)`,
      related_definitions: `- [Antiderivative](!/calculus/definitions#antiderivative)
- [Definite Integral](!/calculus/definitions#definite_integral)`,
    },
  },

  {
    name: 'Fundamental Theorem of Calculus, Part 2',
    entity: 'definite_integral',
    category: 'Fundamental Theorem & Antiderivatives',
    formula: `$$\\int_a^b f(x)\\, dx = F(b) - F(a) \\quad \\text{where } F'(x) = f(x)$$`,
    link: { label: 'Fundamental Theorem of Calculus — Part 2', url: '/calculus/integrals/rules#6' },
    fields: {
      explanation: `The computational engine of integral calculus. Rather than computing limits of Riemann sums, find any antiderivative and evaluate at the endpoints. The constant of integration cancels in the subtraction, so any antiderivative works — different choices of $C$ produce the same definite integral.`,
      conditions: `$f$ must be continuous on $[a, b]$ (or, more generally, integrable with $F$ continuous on $[a, b]$ and differentiable with $F' = f$ on $(a, b)$).`,
      notation: `Standard shorthand: $F(x) \\big|_a^b$ or $[F(x)]_a^b$ both mean $F(b) - F(a)$.`,
      related_formulas: `- [Fundamental Theorem of Calculus, Part 1](!/calculus/integrals/formulas#fundamental_theorem_of_calculus_part_1)
- [Antiderivative Family](!/calculus/integrals/formulas#antiderivative_family)`,
      related_definitions: `- [Antiderivative](!/calculus/definitions#antiderivative)
- [Definite Integral](!/calculus/definitions#definite_integral)
- [Riemann Sum](!/calculus/definitions#riemann_sum)`,
    },
  },

  {
    name: 'Antiderivative Family',
    entity: 'antiderivative',
    category: 'Fundamental Theorem & Antiderivatives',
    formula: `$$\\int f(x)\\, dx = F(x) + C \\quad \\text{where } F'(x) = f(x)$$`,
    link: { label: 'The Constant of Integration', url: '/calculus/integrals/indefinite#2' },
    fields: {
      explanation: `Antiderivatives come in families. If $F$ is one antiderivative of $f$, every antiderivative has the form $F(x) + C$ for some constant $C$ — because the derivative of any constant is zero, vertical shifts of the graph all share the same derivative. Initial conditions like $F(0) = 3$ pin down $C$.`,
      conditions: `Holds on any connected interval. On disconnected domains the constant can differ between components.`,
      related_formulas: `- [Fundamental Theorem of Calculus, Part 2](!/calculus/integrals/formulas#fundamental_theorem_of_calculus_part_2)`,
      related_definitions: `- [Antiderivative](!/calculus/definitions#antiderivative)
- [Indefinite Integral](!/calculus/definitions#indefinite_integral)
- [Integrand](!/calculus/definitions#integrand)`,
    },
  },

  // ─── INTEGRATION RULES ─────────────────────────────────────────────────

  {
    name: 'Sum and Difference Rule (Integrals)',
    entity: 'indefinite_integral',
    category: 'Integration Rules',
    formula: `$$\\int [f(x) \\pm g(x)]\\, dx = \\int f(x)\\, dx \\pm \\int g(x)\\, dx$$`,
    link: { label: 'Sum and Difference Rules', url: '/calculus/integrals/rules#1' },
    fields: {
      explanation: `Integration distributes over addition and subtraction. Complex integrands break into simpler pieces, each integrated separately. Holds for both definite and indefinite integrals.`,
      related_formulas: `- [Constant Multiple Rule (Integrals)](!/calculus/integrals/formulas#constant_multiple_rule_integrals)`,
    },
  },

  {
    name: 'Constant Multiple Rule (Integrals)',
    entity: 'indefinite_integral',
    category: 'Integration Rules',
    formula: `$$\\int c \\cdot f(x)\\, dx = c \\int f(x)\\, dx$$`,
    link: { label: 'Constant Multiple Rule', url: '/calculus/integrals/rules#2' },
    fields: {
      explanation: `Constants factor out of integrals. Combined with the sum rule, this makes integration linear: $\\int [a f + b g]\\, dx = a \\int f\\, dx + b \\int g\\, dx$.`,
      related_formulas: `- [Sum and Difference Rule (Integrals)](!/calculus/integrals/formulas#sum_and_difference_rule_integrals)`,
    },
  },

  {
    name: 'Additivity Over Intervals',
    entity: 'definite_integral',
    category: 'Integration Rules',
    formula: `$$\\int_a^b f(x)\\, dx + \\int_b^c f(x)\\, dx = \\int_a^c f(x)\\, dx$$`,
    link: { label: 'Additivity Over Intervals', url: '/calculus/integrals/rules#3' },
    fields: {
      explanation: `An integral over $[a, c]$ can be split at any intermediate point $b$. Essential for piecewise functions where different formulas apply on different subintervals. The point $b$ need not lie between $a$ and $c$ — the rule extends with appropriate sign conventions.`,
      related_formulas: `- [Reversing Limits of Integration](!/calculus/integrals/formulas#reversing_limits_of_integration)
- [Zero-Width Interval](!/calculus/integrals/formulas#zero_width_interval)`,
      related_definitions: `- [Bounds of Integration](!/calculus/definitions#bounds_of_integration)`,
    },
  },

  {
    name: 'Reversing Limits of Integration',
    entity: 'definite_integral',
    category: 'Integration Rules',
    formula: `$$\\int_a^b f(x)\\, dx = -\\int_b^a f(x)\\, dx$$`,
    link: { label: 'Reversing Limits of Integration', url: '/calculus/integrals/rules#4' },
    fields: {
      explanation: `Swapping the bounds of a definite integral negates the result. The Riemann sum construction accumulates contributions in the direction $a \\to b$; reversing the direction reverses every signed width $\\Delta x$, flipping the total's sign.`,
      related_formulas: `- [Zero-Width Interval](!/calculus/integrals/formulas#zero_width_interval)
- [Additivity Over Intervals](!/calculus/integrals/formulas#additivity_over_intervals)`,
      related_definitions: `- [Bounds of Integration](!/calculus/definitions#bounds_of_integration)`,
    },
  },

  {
    name: 'Zero-Width Interval',
    entity: 'definite_integral',
    category: 'Integration Rules',
    formula: `$$\\int_a^a f(x)\\, dx = 0$$`,
    link: { label: 'Zero-Width Interval', url: '/calculus/integrals/rules#4' },
    fields: {
      explanation: `An integral over a degenerate interval is zero. With no width, no accumulation occurs.`,
      related_formulas: `- [Reversing Limits of Integration](!/calculus/integrals/formulas#reversing_limits_of_integration)
- [Additivity Over Intervals](!/calculus/integrals/formulas#additivity_over_intervals)`,
    },
  },

  {
    name: 'Comparison Property (Integrals)',
    entity: 'definite_integral',
    category: 'Integration Rules',
    formula: `$$f(x) \\leq g(x) \\text{ on } [a, b] \\implies \\int_a^b f(x)\\, dx \\leq \\int_a^b g(x)\\, dx$$`,
    link: { label: 'Comparison Properties', url: '/calculus/integrals/rules#8' },
    fields: {
      explanation: `Pointwise inequality between integrands carries through to integrals. A special case: if $f \\geq 0$, then $\\int f \\geq 0$. The comparison property underpins both estimation techniques and convergence tests for improper integrals.`,
      conditions: `The inequality $f \\leq g$ must hold throughout $[a, b]$, and both $f$ and $g$ must be integrable on $[a, b]$.`,
      related_formulas: `- [Bounding Property (Integrals)](!/calculus/integrals/formulas#bounding_property_integrals)`,
    },
  },

  {
    name: 'Bounding Property (Integrals)',
    entity: 'definite_integral',
    category: 'Integration Rules',
    formula: `$$m \\leq f(x) \\leq M \\text{ on } [a, b] \\implies m(b - a) \\leq \\int_a^b f(x)\\, dx \\leq M(b - a)$$`,
    link: { label: 'Comparison Properties', url: '/calculus/integrals/rules#8' },
    fields: {
      explanation: `When the integrand is bounded between constants $m$ and $M$, the integral is bounded between the areas of two rectangles of width $b - a$ and heights $m$, $M$. This is the rectangle approximation in its crudest form, and it provides quick sanity checks on computed integrals.`,
      related_formulas: `- [Comparison Property (Integrals)](!/calculus/integrals/formulas#comparison_property_integrals)
- [Average Value of a Function](!/calculus/integrals/formulas#average_value_of_a_function)`,
    },
  },

  {
    name: 'Substitution Rule',
    entity: 'indefinite_integral',
    category: 'Integration Rules',
    formula: `$$\\int f(g(x))\\, g'(x)\\, dx = \\int f(u)\\, du \\quad \\text{where } u = g(x)$$`,
    link: { label: 'Substitution (u-Substitution)', url: '/calculus/integrals/techniques#2' },
    fields: {
      explanation: `The reverse of the chain rule. When the integrand contains an inner function $g(x)$ multiplied by its derivative $g'(x)$, the substitution $u = g(x)$, $du = g'(x)\\, dx$ collapses the integral into a simpler form in $u$.`,
      variants: `Definite-integral form (with limit conversion): $$\\int_a^b f(g(x))\\, g'(x)\\, dx = \\int_{g(a)}^{g(b)} f(u)\\, du$$`,
      conditions: `$g$ must be differentiable on the integration interval and $f$ continuous on the range of $g$. For definite integrals, either convert the limits to $u$-values or substitute back to $x$ before evaluating.`,
      related_formulas: `- [Integration by Parts](!/calculus/integrals/formulas#integration_by_parts)`,
      related_definitions: `- [Bounds of Integration](!/calculus/definitions#bounds_of_integration)`,
    },
  },

  {
    name: 'Integration by Parts',
    entity: 'indefinite_integral',
    category: 'Integration Rules',
    formula: `$$\\int u\\, dv = uv - \\int v\\, du$$`,
    link: { label: 'Integration by Parts', url: '/calculus/integrals/techniques#3' },
    fields: {
      explanation: `The reverse of the product rule. Splits an integrand into two factors $u$ and $dv$; differentiating $u$ and integrating $dv$ trades the original integral for a hopefully simpler one. The mnemonic LIATE (Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential) ranks function types by how readily they should be chosen as $u$ — earlier types make better choices.`,
      variants: `Definite-integral form: $$\\int_a^b u\\, dv = uv \\Big|_a^b - \\int_a^b v\\, du$$`,
      conditions: `$u$ and $v$ must be differentiable on the integration interval.`,
      related_formulas: `- [Substitution Rule](!/calculus/integrals/formulas#substitution_rule)
- [Antiderivative of Natural Log](!/calculus/integrals/formulas#antiderivative_of_natural_log)`,
    },
  },

  {
    name: 'Total Unsigned Area',
    entity: 'signed_area',
    category: 'Integration Rules',
    formula: `$$\\text{Total area} = \\int_a^b |f(x)|\\, dx$$`,
    link: { label: 'Signed Area Interpretation', url: '/calculus/integrals/definite#3' },
    fields: {
      explanation: `The definite integral computes signed area — regions above the $x$-axis count positively, regions below count negatively. To get total geometric area regardless of sign, integrate the absolute value of $f$. In practice this means splitting the interval where $f$ changes sign and integrating each piece with the appropriate sign.`,
      related_formulas: `- [Comparison Property (Integrals)](!/calculus/integrals/formulas#comparison_property_integrals)`,
      related_definitions: `- [Signed Area](!/calculus/definitions#signed_area)
- [Integrand](!/calculus/definitions#integrand)`,
    },
  },

  // ─── STANDARD ANTIDERIVATIVES — ALGEBRAIC & LOGARITHMIC ────────────────

  {
    name: 'Power Rule (Integrals)',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Algebraic & Logarithmic',
    formula: `$$\\int x^n\\, dx = \\frac{x^{n+1}}{n + 1} + C \\quad (n \\neq -1)$$`,
    link: { label: 'Power Functions', url: '/calculus/integrals/special#2' },
    fields: {
      explanation: `Increase the exponent by one, then divide by the new exponent. The reverse of the differentiation power rule. The exception $n = -1$ is critical — that case produces the natural logarithm rather than $x^0/0$, which is undefined.`,
      conditions: `For non-integer $n$, the integrand $x^n$ may have domain restrictions (e.g., $x \\geq 0$ for $\\sqrt{x}$). The exception $n = -1$ is handled by the reciprocal antiderivative.`,
      related_formulas: `- [Reciprocal Antiderivative](!/calculus/integrals/formulas#reciprocal_antiderivative)`,
    },
  },

  {
    name: 'Reciprocal Antiderivative',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Algebraic & Logarithmic',
    formula: `$$\\int \\frac{1}{x}\\, dx = \\ln|x| + C$$`,
    link: { label: 'Power Functions', url: '/calculus/integrals/special#2' },
    fields: {
      explanation: `The exceptional case of the power rule. The absolute value matters: for $x > 0$ the antiderivative is $\\ln x$, and for $x < 0$ it is $\\ln(-x)$ (since differentiating gives $1/x$ in either case). The two cases collapse into $\\ln|x|$, valid on either side of zero — but not across it.`,
      conditions: `Valid on intervals not containing $0$. The constant $C$ may differ on the positive and negative branches.`,
      related_formulas: `- [Power Rule (Integrals)](!/calculus/integrals/formulas#power_rule_integrals)
- [Logarithmic Derivative Pattern](!/calculus/integrals/formulas#logarithmic_derivative_pattern)`,
    },
  },

  {
    name: 'Logarithmic Derivative Pattern',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Algebraic & Logarithmic',
    formula: `$$\\int \\frac{f'(x)}{f(x)}\\, dx = \\ln|f(x)| + C$$`,
    link: { label: 'Logarithmic Integrals', url: '/calculus/integrals/special#6' },
    fields: {
      explanation: `When the integrand is a function divided by its own derivative — a "logarithmic derivative" pattern — the antiderivative is the logarithm of the function. This pattern appears constantly in disguise: $\\int \\tan x\\, dx$ becomes $\\int (\\sin x)/(\\cos x)\\, dx$, which has the form $-f'/f$ with $f = \\cos x$.`,
      conditions: `$f$ must be differentiable and nonzero on the integration interval.`,
      related_formulas: `- [Reciprocal Antiderivative](!/calculus/integrals/formulas#reciprocal_antiderivative)
- [Antiderivative of Tangent](!/calculus/integrals/formulas#antiderivative_of_tangent)
- [Antiderivative of Cotangent](!/calculus/integrals/formulas#antiderivative_of_cotangent)`,
    },
  },

  {
    name: 'Antiderivative of Natural Log',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Algebraic & Logarithmic',
    formula: `$$\\int \\ln x\\, dx = x \\ln x - x + C$$`,
    link: { label: 'Logarithmic Integrals', url: '/calculus/integrals/special#6' },
    fields: {
      explanation: `The natural logarithm has no elementary antiderivative obvious by inspection — it is found via integration by parts with $u = \\ln x$ and $dv = dx$. The result $x \\ln x - x$ is worth memorizing because $\\ln x$ appears constantly as a multiplicative factor inside more complex integrals.`,
      conditions: `Defined for $x > 0$.`,
      related_formulas: `- [Integration by Parts](!/calculus/integrals/formulas#integration_by_parts)
- [Reciprocal Antiderivative](!/calculus/integrals/formulas#reciprocal_antiderivative)`,
    },
  },

  // ─── STANDARD ANTIDERIVATIVES — EXPONENTIAL, TRIG & INVERSE TRIG ───────

  {
    name: 'Exponential Antiderivative',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
    formula: `$$\\int e^x\\, dx = e^x + C$$`,
    link: { label: 'Exponential Functions', url: '/calculus/integrals/special#3' },
    fields: {
      explanation: `The exponential function $e^x$ is its own antiderivative — the same property that makes it its own derivative. This is the defining feature of $e$: it is the unique base for which the function equals its own rate of change.`,
      variants: `With a linear argument: $$\\int e^{kx}\\, dx = \\frac{e^{kx}}{k} + C$$`,
      related_formulas: `- [General Exponential Antiderivative](!/calculus/integrals/formulas#general_exponential_antiderivative)`,
    },
  },

  {
    name: 'General Exponential Antiderivative',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
    formula: `$$\\int a^x\\, dx = \\frac{a^x}{\\ln a} + C \\quad (a > 0,\\, a \\neq 1)$$`,
    link: { label: 'Exponential Functions', url: '/calculus/integrals/special#3' },
    fields: {
      explanation: `For an arbitrary positive base, the antiderivative needs a $1/\\ln a$ correction factor — this compensates for the chain-rule factor $\\ln a$ that appears when differentiating $a^x$. Setting $a = e$ recovers the natural form, since $\\ln e = 1$.`,
      conditions: `$a > 0$ and $a \\neq 1$. (When $a = 1$, $a^x \\equiv 1$ and the antiderivative is just $x + C$.)`,
      related_formulas: `- [Exponential Antiderivative](!/calculus/integrals/formulas#exponential_antiderivative)`,
    },
  },

  {
    name: 'Antiderivative of Sine',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
    formula: `$$\\int \\sin x\\, dx = -\\cos x + C$$`,
    link: { label: 'Trigonometric Functions', url: '/calculus/integrals/special#4' },
    fields: {
      explanation: `The negative sign reverses the negative in $(\\cos x)' = -\\sin x$. Integration recovers $\\cos x$ but with the opposite sign.`,
      related_formulas: `- [Antiderivative of Cosine](!/calculus/integrals/formulas#antiderivative_of_cosine)`,
    },
  },

  {
    name: 'Antiderivative of Cosine',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
    formula: `$$\\int \\cos x\\, dx = \\sin x + C$$`,
    link: { label: 'Trigonometric Functions', url: '/calculus/integrals/special#4' },
    fields: {
      explanation: `Direct reverse of $(\\sin x)' = \\cos x$. No sign correction needed.`,
      related_formulas: `- [Antiderivative of Sine](!/calculus/integrals/formulas#antiderivative_of_sine)`,
    },
  },

  {
    name: 'Antiderivative of Secant Squared',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
    formula: `$$\\int \\sec^2 x\\, dx = \\tan x + C$$`,
    link: { label: 'Trigonometric Functions', url: '/calculus/integrals/special#4' },
    fields: {
      explanation: `Reverses $(\\tan x)' = \\sec^2 x$. Comes up constantly because $\\sec^2 x$ appears as the result of differentiating any tangent expression via the chain rule.`,
      related_formulas: `- [Antiderivative of Cosecant Squared](!/calculus/integrals/formulas#antiderivative_of_cosecant_squared)`,
    },
  },

  {
    name: 'Antiderivative of Cosecant Squared',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
    formula: `$$\\int \\csc^2 x\\, dx = -\\cot x + C$$`,
    link: { label: 'Trigonometric Functions', url: '/calculus/integrals/special#4' },
    fields: {
      explanation: `Reverses $(\\cot x)' = -\\csc^2 x$, so the antiderivative of $\\csc^2 x$ picks up the opposite sign.`,
      related_formulas: `- [Antiderivative of Secant Squared](!/calculus/integrals/formulas#antiderivative_of_secant_squared)`,
    },
  },

  {
    name: 'Antiderivative of Sec Tan',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
    formula: `$$\\int \\sec x \\tan x\\, dx = \\sec x + C$$`,
    link: { label: 'Trigonometric Functions', url: '/calculus/integrals/special#4' },
    fields: {
      explanation: `Reverses $(\\sec x)' = \\sec x \\tan x$. Recognize the product $\\sec x \\tan x$ as a derivative pattern, not as something requiring substitution or parts.`,
      related_formulas: `- [Antiderivative of Csc Cot](!/calculus/integrals/formulas#antiderivative_of_csc_cot)`,
    },
  },

  {
    name: 'Antiderivative of Csc Cot',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
    formula: `$$\\int \\csc x \\cot x\\, dx = -\\csc x + C$$`,
    link: { label: 'Trigonometric Functions', url: '/calculus/integrals/special#4' },
    fields: {
      explanation: `Reverses $(\\csc x)' = -\\csc x \\cot x$, so the antiderivative carries the opposite sign.`,
      related_formulas: `- [Antiderivative of Sec Tan](!/calculus/integrals/formulas#antiderivative_of_sec_tan)`,
    },
  },

  {
    name: 'Antiderivative of Tangent',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
    formula: `$$\\int \\tan x\\, dx = \\ln|\\sec x| + C$$`,
    link: { label: 'Integrals Leading to Logarithms', url: '/calculus/integrals/special#7' },
    fields: {
      explanation: `Rewrite $\\tan x = \\sin x / \\cos x$, recognize as $-f'(x)/f(x)$ with $f = \\cos x$, and apply the logarithmic derivative pattern. Result: $-\\ln|\\cos x| + C$, equivalently $\\ln|\\sec x| + C$.`,
      variants: `Equivalent form: $$\\int \\tan x\\, dx = -\\ln|\\cos x| + C$$`,
      related_formulas: `- [Logarithmic Derivative Pattern](!/calculus/integrals/formulas#logarithmic_derivative_pattern)
- [Antiderivative of Cotangent](!/calculus/integrals/formulas#antiderivative_of_cotangent)
- [Antiderivative of Secant](!/calculus/integrals/formulas#antiderivative_of_secant)`,
    },
  },

  {
    name: 'Antiderivative of Cotangent',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
    formula: `$$\\int \\cot x\\, dx = \\ln|\\sin x| + C$$`,
    link: { label: 'Integrals Leading to Logarithms', url: '/calculus/integrals/special#7' },
    fields: {
      explanation: `Rewrite $\\cot x = \\cos x / \\sin x$, recognize as $f'(x)/f(x)$ with $f = \\sin x$, apply the logarithmic derivative pattern.`,
      related_formulas: `- [Logarithmic Derivative Pattern](!/calculus/integrals/formulas#logarithmic_derivative_pattern)
- [Antiderivative of Tangent](!/calculus/integrals/formulas#antiderivative_of_tangent)
- [Antiderivative of Cosecant](!/calculus/integrals/formulas#antiderivative_of_cosecant)`,
    },
  },

  {
    name: 'Antiderivative of Secant',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
    formula: `$$\\int \\sec x\\, dx = \\ln|\\sec x + \\tan x| + C$$`,
    link: { label: 'Integrals Leading to Logarithms', url: '/calculus/integrals/special#7' },
    fields: {
      explanation: `Less obvious than the other trig integrals. The trick: multiply $\\sec x$ by $(\\sec x + \\tan x)/(\\sec x + \\tan x)$ — a clever form of $1$. The numerator becomes $\\sec^2 x + \\sec x \\tan x$, which is exactly the derivative of the denominator $\\sec x + \\tan x$. The integrand is now in $f'/f$ form.`,
      related_formulas: `- [Logarithmic Derivative Pattern](!/calculus/integrals/formulas#logarithmic_derivative_pattern)
- [Antiderivative of Cosecant](!/calculus/integrals/formulas#antiderivative_of_cosecant)
- [Antiderivative of Tangent](!/calculus/integrals/formulas#antiderivative_of_tangent)`,
    },
  },

  {
    name: 'Antiderivative of Cosecant',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
    formula: `$$\\int \\csc x\\, dx = \\ln|\\csc x - \\cot x| + C$$`,
    link: { label: 'Integrals Leading to Logarithms', url: '/calculus/integrals/special#7' },
    fields: {
      explanation: `Mirror of the secant trick: multiply $\\csc x$ by $(\\csc x - \\cot x)/(\\csc x - \\cot x)$. The numerator becomes $\\csc^2 x - \\csc x \\cot x$, the derivative of the denominator.`,
      variants: `Equivalent form: $$\\int \\csc x\\, dx = -\\ln|\\csc x + \\cot x| + C$$`,
      related_formulas: `- [Logarithmic Derivative Pattern](!/calculus/integrals/formulas#logarithmic_derivative_pattern)
- [Antiderivative of Secant](!/calculus/integrals/formulas#antiderivative_of_secant)
- [Antiderivative of Cotangent](!/calculus/integrals/formulas#antiderivative_of_cotangent)`,
    },
  },

  // ─── INVERSE TRIG, SYMMETRY, IMPROPER, AVERAGE ─────────────────────────

  {
    name: 'Arctangent Form',
    entity: 'indefinite_integral',
    category: 'Inverse Trig, Symmetry, Improper, Average',
    formula: `$$\\int \\frac{1}{a^2 + x^2}\\, dx = \\frac{1}{a} \\arctan\\frac{x}{a} + C$$`,
    link: { label: 'Inverse Trigonometric Forms', url: '/calculus/integrals/special#5' },
    fields: {
      explanation: `Reverses the derivative of arctangent. The general $a$ form is more useful than the special case $a = 1$ — most integrals encountered have an arbitrary constant in place of $1$, and completing the square often produces a quadratic of the form $a^2 + (x - h)^2$ that fits this template.`,
      variants: `Special case $a = 1$: $$\\int \\frac{1}{1 + x^2}\\, dx = \\arctan x + C$$`,
      conditions: `$a > 0$.`,
      related_formulas: `- [Arcsine Form](!/calculus/integrals/formulas#arcsine_form)
- [Arcsecant Form](!/calculus/integrals/formulas#arcsecant_form)`,
    },
  },

  {
    name: 'Arcsine Form',
    entity: 'indefinite_integral',
    category: 'Inverse Trig, Symmetry, Improper, Average',
    formula: `$$\\int \\frac{1}{\\sqrt{a^2 - x^2}}\\, dx = \\arcsin\\frac{x}{a} + C$$`,
    link: { label: 'Inverse Trigonometric Forms', url: '/calculus/integrals/special#5' },
    fields: {
      explanation: `Reverses the derivative of arcsine. The square root structure $\\sqrt{a^2 - x^2}$ also appears as the trigger for trigonometric substitution $x = a\\sin\\theta$ — the two approaches give the same result.`,
      variants: `Special case $a = 1$: $$\\int \\frac{1}{\\sqrt{1 - x^2}}\\, dx = \\arcsin x + C$$`,
      conditions: `$a > 0$ and $|x| < a$.`,
      related_formulas: `- [Arctangent Form](!/calculus/integrals/formulas#arctangent_form)
- [Arcsecant Form](!/calculus/integrals/formulas#arcsecant_form)`,
    },
  },

  {
    name: 'Arcsecant Form',
    entity: 'indefinite_integral',
    category: 'Inverse Trig, Symmetry, Improper, Average',
    formula: `$$\\int \\frac{1}{x \\sqrt{x^2 - 1}}\\, dx = \\text{arcsec}\\,|x| + C$$`,
    link: { label: 'Inverse Trigonometric Forms', url: '/calculus/integrals/special#5' },
    fields: {
      explanation: `Reverses the derivative of arcsecant. The absolute value handles both branches of the arcsecant function.`,
      conditions: `$|x| > 1$.`,
      related_formulas: `- [Arctangent Form](!/calculus/integrals/formulas#arctangent_form)
- [Arcsine Form](!/calculus/integrals/formulas#arcsine_form)`,
    },
  },

  {
    name: 'Even Function Symmetry',
    entity: 'definite_integral',
    category: 'Inverse Trig, Symmetry, Improper, Average',
    formula: `$$\\int_{-a}^{a} f(x)\\, dx = 2 \\int_0^a f(x)\\, dx \\quad \\text{if } f \\text{ is even}$$`,
    link: { label: 'Symmetry Shortcuts', url: '/calculus/integrals/evaluating#6' },
    fields: {
      explanation: `An even function $f(-x) = f(x)$ has graph symmetric about the $y$-axis, so the area on $[-a, 0]$ equals the area on $[0, a]$. Compute one and double it.`,
      conditions: `$f(-x) = f(x)$ for all $x \\in [-a, a]$. Examples: $x^2$, $\\cos x$, $|x|$.`,
      related_formulas: `- [Odd Function Symmetry](!/calculus/integrals/formulas#odd_function_symmetry)`,
    },
  },

  {
    name: 'Odd Function Symmetry',
    entity: 'definite_integral',
    category: 'Inverse Trig, Symmetry, Improper, Average',
    formula: `$$\\int_{-a}^{a} f(x)\\, dx = 0 \\quad \\text{if } f \\text{ is odd}$$`,
    link: { label: 'Symmetry Shortcuts', url: '/calculus/integrals/evaluating#6' },
    fields: {
      explanation: `An odd function $f(-x) = -f(x)$ has graph symmetric through the origin, so the signed area on $[-a, 0]$ exactly cancels the signed area on $[0, a]$. The total integral is zero — without computing anything.`,
      conditions: `$f(-x) = -f(x)$ for all $x \\in [-a, a]$. Examples: $x^3$, $\\sin x$, $\\tan x$.`,
      related_formulas: `- [Even Function Symmetry](!/calculus/integrals/formulas#even_function_symmetry)`,
    },
  },

  {
    name: 'Improper Integral (Infinite Limits)',
    entity: 'improper_integral',
    category: 'Inverse Trig, Symmetry, Improper, Average',
    formula: `$$\\int_a^{\\infty} f(x)\\, dx = \\lim_{b \\to \\infty} \\int_a^b f(x)\\, dx$$`,
    link: { label: 'Infinite Limits of Integration', url: '/calculus/integrals/improper#2' },
    fields: {
      explanation: `Definite integrals are defined over finite intervals; integration to $\\infty$ is defined as a limit of finite integrals. The improper integral converges if this limit is finite, diverges otherwise. Symmetric definitions handle the $-\\infty$ case and integrals with both bounds at infinity (split at any finite point and require both halves to converge).`,
      variants: `Lower limit infinite: $$\\int_{-\\infty}^b f(x)\\, dx = \\lim_{a \\to -\\infty} \\int_a^b f(x)\\, dx$$ Both limits infinite (split at any $c$): $$\\int_{-\\infty}^{\\infty} f(x)\\, dx = \\int_{-\\infty}^c f(x)\\, dx + \\int_c^{\\infty} f(x)\\, dx$$`,
      conditions: `For the both-infinite case, both component integrals must converge independently — it is not enough for the symmetric limit $\\lim_{R \\to \\infty} \\int_{-R}^R$ to exist.`,
      related_formulas: `- [Improper Integral (Discontinuous Integrand)](!/calculus/integrals/formulas#improper_integral_discontinuous_integrand)
- [p-Test for Improper Integrals](!/calculus/integrals/formulas#p_test_for_improper_integrals)`,
      related_definitions: `- [Improper Integral](!/calculus/definitions#improper_integral)`,
    },
  },

  {
    name: 'Improper Integral (Discontinuous Integrand)',
    entity: 'improper_integral',
    category: 'Inverse Trig, Symmetry, Improper, Average',
    formula: `$$\\int_a^b f(x)\\, dx = \\lim_{t \\to b^-} \\int_a^t f(x)\\, dx \\quad \\text{(asymptote at } b\\text{)}$$`,
    link: { label: 'Discontinuous Integrands', url: '/calculus/integrals/improper#3' },
    fields: {
      explanation: `When the integrand has a vertical asymptote at an endpoint, integrate to a finite cutoff and take the limit as the cutoff approaches the asymptote. For an asymptote at the left endpoint, the limit runs $t \\to a^+$. For an interior asymptote at $c$, split the integral at $c$ and take both one-sided limits independently.`,
      variants: `Left endpoint asymptote: $$\\int_a^b f(x)\\, dx = \\lim_{t \\to a^+} \\int_t^b f(x)\\, dx$$ Interior asymptote at $c$: $$\\int_a^b f(x)\\, dx = \\lim_{t \\to c^-} \\int_a^t f(x)\\, dx + \\lim_{s \\to c^+} \\int_s^b f(x)\\, dx$$`,
      conditions: `For interior asymptotes, both one-sided limits must exist independently. Failing to split at the asymptote produces wrong answers — sometimes "computing" finite values for divergent integrals.`,
      related_formulas: `- [Improper Integral (Infinite Limits)](!/calculus/integrals/formulas#improper_integral_infinite_limits)
- [p-Test for Improper Integrals](!/calculus/integrals/formulas#p_test_for_improper_integrals)`,
      related_definitions: `- [Improper Integral](!/calculus/definitions#improper_integral)
- [Asymptote](!/calculus/definitions#asymptote)`,
    },
  },

  {
    name: 'p-Test for Improper Integrals',
    entity: 'improper_integral',
    category: 'Inverse Trig, Symmetry, Improper, Average',
    formula: `$$\\int_1^{\\infty} \\frac{1}{x^p}\\, dx \\;\\begin{cases} \\text{converges} & p > 1 \\\\ \\text{diverges} & p \\leq 1 \\end{cases} \\qquad \\int_0^1 \\frac{1}{x^p}\\, dx \\;\\begin{cases} \\text{converges} & p < 1 \\\\ \\text{diverges} & p \\geq 1 \\end{cases}$$`,
    link: { label: 'The p-Test', url: '/calculus/integrals/improper#5' },
    fields: {
      explanation: `The integrals of $1/x^p$ are the canonical benchmarks for comparing other improper integrals. The boundary case $p = 1$ — which gives $\\ln x$ as an antiderivative — always diverges, both at infinity and at zero. Convergence at infinity requires fast enough decay ($p > 1$); convergence at zero requires slow enough blow-up ($p < 1$).`,
      related_formulas: `- [Improper Integral (Infinite Limits)](!/calculus/integrals/formulas#improper_integral_infinite_limits)
- [Improper Integral (Discontinuous Integrand)](!/calculus/integrals/formulas#improper_integral_discontinuous_integrand)`,
      related_definitions: `- [Improper Integral](!/calculus/definitions#improper_integral)`,
    },
  },

  {
    name: 'Average Value of a Function',
    entity: 'average_value_of_a_function',
    category: 'Inverse Trig, Symmetry, Improper, Average',
    formula: `$$f_{\\text{avg}} = \\frac{1}{b - a} \\int_a^b f(x)\\, dx$$`,
    link: { label: 'Average Value of a Function', url: '/calculus/integrals/definite#7' },
    fields: {
      explanation: `The continuous analog of an arithmetic mean. The integral computes the total accumulated value, and dividing by the interval length yields the average. Geometrically, $f_{\\text{avg}}$ is the height of the rectangle over $[a, b]$ that has the same area as the region under $f$. The Mean Value Theorem for Integrals guarantees a continuous $f$ actually attains $f_{\\text{avg}}$ at some point $c \\in (a, b)$.`,
      conditions: `$f$ must be integrable on $[a, b]$ and $a \\neq b$. The Mean Value Theorem for Integrals also requires $f$ continuous on $[a, b]$.`,
      related_formulas: `- [Bounding Property (Integrals)](!/calculus/integrals/formulas#bounding_property_integrals)`,
      related_definitions: `- [Average Value of a Function](!/calculus/definitions#average_value_of_a_function)
- [Definite Integral](!/calculus/definitions#definite_integral)`,
    },
  },

  // ═══ DERIVATIVES ══════════════════════════════════════════════════════

  // ─── DEFINITION OF THE DERIVATIVE ──────────────────────────────────────

  {
    name: 'Average Rate of Change',
    entity: 'average_rate_of_change',
    category: 'Definition of the Derivative',
    formula: `$$\\bar{m} = \\frac{f(b) - f(a)}{b - a}$$`,
    link: { label: 'The Difference Quotient and Its Limit', url: '/calculus/derivatives#1' },
    fields: {
      variables: `
- $f$ — a function defined on $[a, b]$
- $a, b$ — endpoints of the interval, with $a \\neq b$
- $\\bar{m}$ — the average rate of change, equal to the slope of the secant line through $(a, f(a))$ and $(b, f(b))$`,
      explanation: `
The average rate of change of $f$ over $[a, b]$ measures the total change in $f$ per unit change in $x$ across the interval. Geometrically, it is the slope of the secant line through the two endpoints. Substituting $b = a + h$ produces the equivalent [difference quotient](!/calculus/derivatives#1) form $\\frac{f(a + h) - f(a)}{h}$, used in the limit definition of the derivative. As the interval shrinks ($h \\to 0$), the average rate of change becomes the [instantaneous rate of change](!/calculus/definitions#instantaneous_rate_of_change).`,
      related_definitions: `
- [Average Rate of Change](!/calculus/definitions#average_rate_of_change)
- [Instantaneous Rate of Change](!/calculus/definitions#instantaneous_rate_of_change)
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Derivative Limit Definition](!/calculus/derivatives/formulas#derivative_limit_definition)
- [Mean Value Theorem](!/calculus/derivatives/formulas#mean_value_theorem)`,
    },
  },

  {
    name: 'Derivative Limit Definition',
    entity: 'derivative',
    category: 'Definition of the Derivative',
    formula: `$$f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h} = \\lim_{t \\to x} \\frac{f(t) - f(x)}{t - x}$$`,
    link: { label: 'The Derivative Function Defined', url: '/calculus/derivatives/function#1' },
    fields: {
      variables: `
- $f$ — a function differentiable at $x$
- $h$ — increment in $x$ (the $h$-form lets $h \\to 0$ from either side)
- $f'(x)$ — derivative of $f$ at $x$, the slope of the tangent line to the graph of $f$ at $(x, f(x))$`,
      conditions: `
The limit must exist and be finite. If the one-sided limits differ (corner), are infinite (vertical tangent or cusp), or $f$ is not [continuous](!/calculus/limits/continuity) at $x$, the derivative is undefined there.`,
      explanation: `
Both forms define the same quantity. The $h$-form treats $h$ as the increment from a fixed $x$; the $t \\to x$ form lets the input point itself approach $x$. Replacing the fixed point $a$ in the [average rate of change](!/calculus/derivatives/formulas#average_rate_of_change) with a variable $x$ converts the derivative at a single point into the derivative function $f'$. The limit is a [two-sided limit](!/calculus/limits/two-sided), so left- and right-hand limits of the difference quotient must agree.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)
- [Differentiability](!/calculus/definitions#differentiability)
- [Instantaneous Rate of Change](!/calculus/definitions#instantaneous_rate_of_change)
- [Limit](!/calculus/definitions#limit)`,
      related_formulas: `
- [Average Rate of Change](!/calculus/derivatives/formulas#average_rate_of_change)
- [Constant Rule (Derivatives)](!/calculus/derivatives/formulas#constant_rule_derivatives)
- [Power Rule (Derivatives)](!/calculus/derivatives/formulas#power_rule_derivatives)`,
    },
  },

  // ─── DIFFERENTIATION RULES ─────────────────────────────────────────────

  {
    name: 'Constant Rule (Derivatives)',
    entity: 'derivative',
    category: 'Differentiation Rules',
    formula: `$$\\frac{d}{dx}[c] = 0$$`,
    link: { label: 'Constant Rule', url: '/calculus/derivatives/rules#1' },
    fields: {
      variables: `
- $c$ — any real constant`,
      explanation: `
A constant function has a horizontal graph; its slope is zero everywhere. From the [limit definition](!/calculus/derivatives/formulas#derivative_limit_definition), the difference quotient $\\frac{c - c}{h} = 0$ for all $h \\neq 0$, so the limit is $0$. Equivalently, this is the [power rule](!/calculus/derivatives/formulas#power_rule_derivatives) at $n = 0$ since $c = c \\cdot x^0$.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Power Rule (Derivatives)](!/calculus/derivatives/formulas#power_rule_derivatives)
- [Sum and Difference Rule (Derivatives)](!/calculus/derivatives/formulas#sum_and_difference_rule_derivatives)`,
    },
  },

  {
    name: 'Power Rule (Derivatives)',
    entity: 'derivative',
    category: 'Differentiation Rules',
    formula: `$$\\frac{d}{dx}[x^n] = n x^{n-1}$$`,
    link: { label: 'Power Rule', url: '/calculus/derivatives/rules#2' },
    fields: {
      variables: `
- $n$ — any real number (integer, rational, or irrational)
- $x$ — input value (with $x > 0$ required when $n$ is irrational or a non-integer rational)`,
      explanation: `
Applies uniformly across all real exponents: positive integers ($\\frac{d}{dx}[x^5] = 5x^4$), negative integers ($\\frac{d}{dx}[x^{-3}] = -3x^{-4}$), fractions ($\\frac{d}{dx}[\\sqrt{x}] = \\frac{1}{2}x^{-1/2}$), and irrationals ($\\frac{d}{dx}[x^{\\pi}] = \\pi x^{\\pi - 1}$). For positive integer $n$, the proof uses the binomial expansion of $(x + h)^n$ in the [limit definition](!/calculus/derivatives/formulas#derivative_limit_definition); after dividing by $h$ and taking the limit, only the $nx^{n-1}$ term survives. For real exponents, the rule follows from $x^n = e^{n \\ln x}$ via the [chain rule](!/calculus/derivatives/formulas#chain_rule).`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Constant Rule (Derivatives)](!/calculus/derivatives/formulas#constant_rule_derivatives)
- [Chain Rule](!/calculus/derivatives/formulas#chain_rule)`,
    },
  },

  {
    name: 'Constant Multiple Rule (Derivatives)',
    entity: 'derivative',
    category: 'Differentiation Rules',
    formula: `$$\\frac{d}{dx}[c \\cdot f(x)] = c \\cdot f'(x)$$`,
    link: { label: 'Constant Multiple Rule', url: '/calculus/derivatives/rules#3' },
    fields: {
      variables: `
- $c$ — any real constant
- $f$ — a function differentiable at $x$`,
      explanation: `
Constants factor out of derivatives. From the [limit definition](!/calculus/derivatives/formulas#derivative_limit_definition), the constant $c$ factors out of the difference quotient and passes through the limit unchanged. The rule is a special case of the [product rule](!/calculus/derivatives/formulas#product_rule_derivatives) where one factor is constant; stating it separately shortcuts the algebra in nearly every computation.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Sum and Difference Rule (Derivatives)](!/calculus/derivatives/formulas#sum_and_difference_rule_derivatives)
- [Product Rule (Derivatives)](!/calculus/derivatives/formulas#product_rule_derivatives)`,
    },
  },

  {
    name: 'Sum and Difference Rule (Derivatives)',
    entity: 'derivative',
    category: 'Differentiation Rules',
    formula: `$$\\frac{d}{dx}[f(x) \\pm g(x)] = f'(x) \\pm g'(x)$$`,
    link: { label: 'Sum and Difference Rules', url: '/calculus/derivatives/rules#4' },
    fields: {
      variables: `
- $f, g$ — functions differentiable at $x$
- $\\pm$ — applies independently to addition and subtraction`,
      explanation: `
The derivative distributes over addition and subtraction. From the [limit definition](!/calculus/derivatives/formulas#derivative_limit_definition), the difference quotient splits into two parts and the [sum and difference rule for limits](!/calculus/limits/formulas#sum_and_difference_rule_limits) applies. Extends to any finite sum: $(f_1 + f_2 + \\cdots + f_n)' = f_1' + f_2' + \\cdots + f_n'$. Combined with the [constant multiple rule](!/calculus/derivatives/formulas#constant_multiple_rule_derivatives), this differentiates every linear combination — every polynomial term-by-term.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Constant Multiple Rule (Derivatives)](!/calculus/derivatives/formulas#constant_multiple_rule_derivatives)
- [Sum and Difference Rule (Limits)](!/calculus/limits/formulas#sum_and_difference_rule_limits)`,
    },
  },

  {
    name: 'Product Rule (Derivatives)',
    entity: 'derivative',
    category: 'Differentiation Rules',
    formula: `$$\\frac{d}{dx}[f(x) \\cdot g(x)] = f'(x) \\cdot g(x) + f(x) \\cdot g'(x)$$`,
    link: { label: 'Product Rule', url: '/calculus/derivatives/rules#5' },
    fields: {
      variables: `
- $f, g$ — functions differentiable at $x$`,
      explanation: `
The derivative of a product is not the product of the derivatives. Each factor takes a turn being differentiated while the other is held; the contributions are summed. The proof adds and subtracts $f(x + h)g(x)$ inside the difference quotient, splitting it into a piece isolating $g'$ and a piece isolating $f'$. [Differentiability implies continuity](!/calculus/derivatives/differentiability), which is needed for the limit step. For three factors: $(fgh)' = f'gh + fg'h + fgh'$ — each factor differentiated once, the rest unchanged, all summed.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Quotient Rule (Derivatives)](!/calculus/derivatives/formulas#quotient_rule_derivatives)
- [Chain Rule](!/calculus/derivatives/formulas#chain_rule)
- [Constant Multiple Rule (Derivatives)](!/calculus/derivatives/formulas#constant_multiple_rule_derivatives)`,
    },
  },

  {
    name: 'Quotient Rule (Derivatives)',
    entity: 'derivative',
    category: 'Differentiation Rules',
    formula: `$$\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{f'(x) \\cdot g(x) - f(x) \\cdot g'(x)}{[g(x)]^2}$$`,
    link: { label: 'Quotient Rule', url: '/calculus/derivatives/rules#6' },
    fields: {
      variables: `
- $f, g$ — functions differentiable at $x$
- Required: $g(x) \\neq 0$`,
      conditions: `
The denominator $g(x)$ must be nonzero at the point of evaluation. The order of terms in the numerator matters: $f'g - fg'$, not $fg' - f'g$.`,
      explanation: `
Equivalently derived from the [product rule](!/calculus/derivatives/formulas#product_rule_derivatives) applied to $f \\cdot g^{-1}$ together with the [chain rule](!/calculus/derivatives/formulas#chain_rule). Used directly when the function is naturally a fraction; rewriting as a product is preferred when the denominator is a simple power. The derivatives of $\\tan x$, $\\cot x$, $\\sec x$, $\\csc x$ all follow from the quotient rule applied to ratios of $\\sin$ and $\\cos$.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Product Rule (Derivatives)](!/calculus/derivatives/formulas#product_rule_derivatives)
- [Chain Rule](!/calculus/derivatives/formulas#chain_rule)
- [Derivative of Tangent](!/calculus/derivatives/formulas#derivative_of_tangent)`,
    },
  },

  {
    name: 'Chain Rule',
    entity: 'derivative',
    category: 'Differentiation Rules',
    formula: `$$\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x) \\qquad \\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$$`,
    link: { label: 'Chain Rule', url: '/calculus/derivatives/rules#7' },
    fields: {
      variables: `
- $g$ — function differentiable at $x$
- $f$ — function differentiable at $g(x)$
- $y = f(u)$, $u = g(x)$ in the Leibniz form`,
      explanation: `
Differentiate the outer function evaluated at the inner function, then multiply by the derivative of the inner function. The Leibniz form makes the rule look like fraction cancellation — and treating $dy/dx$ as a ratio of [differentials](!/calculus/derivatives/differentials) makes that algebra rigorous. For deeper compositions $f(g(h(x)))$, each layer contributes one multiplicative factor: $f'(g(h(x))) \\cdot g'(h(x)) \\cdot h'(x)$. Without the chain rule, composite functions like $\\sin(x^2)$, $e^{3x}$, $\\ln(\\cos x)$ cannot be differentiated — most applications of differentiation use it at some level.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)
- [Differential](!/calculus/definitions#differential)`,
      related_formulas: `
- [Product Rule (Derivatives)](!/calculus/derivatives/formulas#product_rule_derivatives)
- [Quotient Rule (Derivatives)](!/calculus/derivatives/formulas#quotient_rule_derivatives)
- [Power Rule (Derivatives)](!/calculus/derivatives/formulas#power_rule_derivatives)`,
    },
  },

  // ─── MAJOR THEOREMS ────────────────────────────────────────────────────

  {
    name: 'Mean Value Theorem',
    entity: 'derivative',
    category: 'Major Theorems',
    formula: `$$f'(c) = \\frac{f(b) - f(a)}{b - a} \\qquad \\text{for some } c \\in (a, b)$$`,
    link: { label: 'Mean Value Theorem', url: '/calculus/derivatives/rules#8' },
    fields: {
      variables: `
- $f$ — a function continuous on $[a, b]$ and differentiable on $(a, b)$
- $c$ — at least one point in the open interval $(a, b)$ where the equality holds`,
      conditions: `
$f$ must be [continuous](!/calculus/limits/continuity) on $[a, b]$ and [differentiable](!/calculus/derivatives/differentiability) on $(a, b)$. Failure of either hypothesis can break the conclusion.`,
      explanation: `
At some interior point $c$, the [instantaneous rate of change](!/calculus/definitions#instantaneous_rate_of_change) equals the [average rate of change](!/calculus/derivatives/formulas#average_rate_of_change) over the whole interval. Geometrically, there is a tangent line parallel to the secant line through the endpoints. The theorem is mostly used to prove other results: a function with $f' > 0$ on an interval is increasing; two functions with the same derivative differ by a constant; the [Fundamental Theorem of Calculus, Part 2](!/calculus/integrals/formulas#fundamental_theorem_of_calculus_part_2) follows from it. [Rolle's Theorem](!/calculus/derivatives/formulas#rolles_theorem) is the special case where $f(a) = f(b)$.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)
- [Continuity](!/calculus/definitions#continuity)
- [Differentiability](!/calculus/definitions#differentiability)`,
      related_formulas: `
- [Rolle's Theorem](!/calculus/derivatives/formulas#rolles_theorem)
- [Average Rate of Change](!/calculus/derivatives/formulas#average_rate_of_change)
- [Fundamental Theorem of Calculus, Part 2](!/calculus/integrals/formulas#fundamental_theorem_of_calculus_part_2)`,
    },
  },

  {
    name: "Rolle's Theorem",
    entity: 'derivative',
    category: 'Major Theorems',
    formula: `$$\\text{If } f(a) = f(b), \\text{ then } f'(c) = 0 \\text{ for some } c \\in (a, b)$$`,
    link: { label: "Rolle's Theorem", url: '/calculus/derivatives/rules#9' },
    fields: {
      variables: `
- $f$ — a function continuous on $[a, b]$ and differentiable on $(a, b)$
- Required: $f(a) = f(b)$
- $c$ — at least one point in $(a, b)$ where $f'(c) = 0$`,
      conditions: `
Continuity on the closed interval $[a, b]$, differentiability on the open interval $(a, b)$, and matching endpoint values $f(a) = f(b)$.`,
      explanation: `
The special case of the [Mean Value Theorem](!/calculus/derivatives/formulas#mean_value_theorem) where the secant line is horizontal. A function that returns to its starting value must have a horizontal tangent somewhere between — at a maximum, a minimum, or a stationary point of constant value. Rolle's Theorem is often used as a stepping stone: the proof of the MVT itself applies Rolle's to an auxiliary function. Between any two roots of $f$, a root of $f'$ must exist.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)
- [Critical Point](!/calculus/definitions#critical_point)`,
      related_formulas: `
- [Mean Value Theorem](!/calculus/derivatives/formulas#mean_value_theorem)`,
    },
  },

  // ─── DERIVATIVES OF COMMON FUNCTIONS ───────────────────────────────────

  {
    name: 'Derivative of Sine',
    entity: 'derivative',
    category: 'Derivatives of Common Functions',
    formula: `$$\\frac{d}{dx}[\\sin x] = \\cos x$$`,
    link: { label: 'Trigonometric Functions: Sine and Cosine', url: '/calculus/derivatives/common#4' },
    fields: {
      explanation: `
Proved from the [limit definition](!/calculus/derivatives/formulas#derivative_limit_definition) using the angle addition formula and the [special limits](!/calculus/limits/special) $\\lim_{h \\to 0} \\frac{\\sin h}{h} = 1$ and $\\lim_{h \\to 0} \\frac{\\cos h - 1}{h} = 0$. Repeated differentiation cycles with period four: $\\sin x \\to \\cos x \\to -\\sin x \\to -\\cos x \\to \\sin x$.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Derivative of Cosine](!/calculus/derivatives/formulas#derivative_of_cosine)
- [Derivative of Tangent](!/calculus/derivatives/formulas#derivative_of_tangent)`,
    },
  },

  {
    name: 'Derivative of Cosine',
    entity: 'derivative',
    category: 'Derivatives of Common Functions',
    formula: `$$\\frac{d}{dx}[\\cos x] = -\\sin x$$`,
    link: { label: 'Trigonometric Functions: Sine and Cosine', url: '/calculus/derivatives/common#4' },
    fields: {
      explanation: `
The negative sign is essential — a frequent source of error. Follows by differentiating $\\cos x = \\sin(\\pi/2 - x)$ via the [chain rule](!/calculus/derivatives/formulas#chain_rule), or directly from the [limit definition](!/calculus/derivatives/formulas#derivative_limit_definition) using the cosine angle addition formula. Cofunction pattern: cosine, cotangent, and cosecant all carry a negative sign in their derivatives.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Derivative of Sine](!/calculus/derivatives/formulas#derivative_of_sine)
- [Derivative of Cotangent](!/calculus/derivatives/formulas#derivative_of_cotangent)`,
    },
  },

  {
    name: 'Derivative of Tangent',
    entity: 'derivative',
    category: 'Derivatives of Common Functions',
    formula: `$$\\frac{d}{dx}[\\tan x] = \\sec^2 x$$`,
    link: { label: 'Trigonometric Functions: Tangent, Cotangent, Secant, Cosecant', url: '/calculus/derivatives/common#5' },
    fields: {
      conditions: `
Valid where $\\cos x \\neq 0$, i.e. $x \\neq \\frac{\\pi}{2} + k\\pi$ for integer $k$.`,
      explanation: `
Derived via the [quotient rule](!/calculus/derivatives/formulas#quotient_rule_derivatives) on $\\tan x = \\sin x / \\cos x$: the result is $\\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x} = \\sec^2 x$, using the Pythagorean identity.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Derivative of Cotangent](!/calculus/derivatives/formulas#derivative_of_cotangent)
- [Derivative of Secant](!/calculus/derivatives/formulas#derivative_of_secant)
- [Quotient Rule (Derivatives)](!/calculus/derivatives/formulas#quotient_rule_derivatives)`,
    },
  },

  {
    name: 'Derivative of Cotangent',
    entity: 'derivative',
    category: 'Derivatives of Common Functions',
    formula: `$$\\frac{d}{dx}[\\cot x] = -\\csc^2 x$$`,
    link: { label: 'Trigonometric Functions: Tangent, Cotangent, Secant, Cosecant', url: '/calculus/derivatives/common#5' },
    fields: {
      conditions: `
Valid where $\\sin x \\neq 0$, i.e. $x \\neq k\\pi$ for integer $k$.`,
      explanation: `
Derived via the [quotient rule](!/calculus/derivatives/formulas#quotient_rule_derivatives) on $\\cot x = \\cos x / \\sin x$. The negative sign matches the cofunction pattern.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Derivative of Tangent](!/calculus/derivatives/formulas#derivative_of_tangent)
- [Derivative of Cosecant](!/calculus/derivatives/formulas#derivative_of_cosecant)`,
    },
  },

  {
    name: 'Derivative of Secant',
    entity: 'derivative',
    category: 'Derivatives of Common Functions',
    formula: `$$\\frac{d}{dx}[\\sec x] = \\sec x \\tan x$$`,
    link: { label: 'Trigonometric Functions: Tangent, Cotangent, Secant, Cosecant', url: '/calculus/derivatives/common#5' },
    fields: {
      conditions: `
Valid where $\\cos x \\neq 0$, i.e. $x \\neq \\frac{\\pi}{2} + k\\pi$ for integer $k$.`,
      explanation: `
Derived via the [quotient rule](!/calculus/derivatives/formulas#quotient_rule_derivatives) on $\\sec x = 1 / \\cos x$, or via the [chain rule](!/calculus/derivatives/formulas#chain_rule) on $\\sec x = (\\cos x)^{-1}$. No cofunction sign flip — secant is not a cofunction.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Derivative of Cosecant](!/calculus/derivatives/formulas#derivative_of_cosecant)
- [Derivative of Tangent](!/calculus/derivatives/formulas#derivative_of_tangent)`,
    },
  },

  {
    name: 'Derivative of Cosecant',
    entity: 'derivative',
    category: 'Derivatives of Common Functions',
    formula: `$$\\frac{d}{dx}[\\csc x] = -\\csc x \\cot x$$`,
    link: { label: 'Trigonometric Functions: Tangent, Cotangent, Secant, Cosecant', url: '/calculus/derivatives/common#5' },
    fields: {
      conditions: `
Valid where $\\sin x \\neq 0$, i.e. $x \\neq k\\pi$ for integer $k$.`,
      explanation: `
Derived via the [quotient rule](!/calculus/derivatives/formulas#quotient_rule_derivatives) on $\\csc x = 1 / \\sin x$. Negative sign matches the cofunction pattern.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Derivative of Secant](!/calculus/derivatives/formulas#derivative_of_secant)
- [Derivative of Cotangent](!/calculus/derivatives/formulas#derivative_of_cotangent)`,
    },
  },

  {
    name: 'Derivative of Natural Exponential',
    entity: 'derivative',
    category: 'Derivatives of Common Functions',
    formula: `$$\\frac{d}{dx}[e^x] = e^x$$`,
    link: { label: 'Exponential Functions', url: '/calculus/derivatives/common#6' },
    fields: {
      explanation: `
The natural exponential is the unique non-trivial function equal to its own derivative — the property that defines $e$ as the natural base. Proved from the [limit definition](!/calculus/derivatives/formulas#derivative_limit_definition) using the [special limit](!/calculus/limits/special) $\\lim_{h \\to 0} \\frac{e^h - 1}{h} = 1$: the difference quotient factors as $e^x \\cdot \\frac{e^h - 1}{h}$, which approaches $e^x \\cdot 1 = e^x$.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Derivative of General Exponential](!/calculus/derivatives/formulas#derivative_of_general_exponential)
- [Derivative of Natural Logarithm](!/calculus/derivatives/formulas#derivative_of_natural_logarithm)`,
    },
  },

  {
    name: 'Derivative of General Exponential',
    entity: 'derivative',
    category: 'Derivatives of Common Functions',
    formula: `$$\\frac{d}{dx}[a^x] = a^x \\ln a$$`,
    link: { label: 'Exponential Functions', url: '/calculus/derivatives/common#6' },
    fields: {
      conditions: `
$a > 0$ and $a \\neq 1$.`,
      explanation: `
Follows from rewriting $a^x = e^{x \\ln a}$ and applying the [chain rule](!/calculus/derivatives/formulas#chain_rule). The factor $\\ln a$ is constant — it scales the derivative. When $a = e$, $\\ln a = 1$ and the factor disappears, recovering $\\frac{d}{dx}[e^x] = e^x$.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Derivative of Natural Exponential](!/calculus/derivatives/formulas#derivative_of_natural_exponential)
- [Derivative of General Logarithm](!/calculus/derivatives/formulas#derivative_of_general_logarithm)
- [Chain Rule](!/calculus/derivatives/formulas#chain_rule)`,
    },
  },

  {
    name: 'Derivative of Natural Logarithm',
    entity: 'derivative',
    category: 'Derivatives of Common Functions',
    formula: `$$\\frac{d}{dx}[\\ln x] = \\frac{1}{x}$$`,
    link: { label: 'Logarithmic Functions', url: '/calculus/derivatives/common#7' },
    fields: {
      conditions: `
$x > 0$. The extension $\\frac{d}{dx}[\\ln |x|] = \\frac{1}{x}$ is valid for all $x \\neq 0$.`,
      explanation: `
Derived by [implicit differentiation](!/calculus/derivatives/techniques) of $e^y = x$ where $y = \\ln x$: differentiating gives $e^y \\frac{dy}{dx} = 1$, so $\\frac{dy}{dx} = \\frac{1}{e^y} = \\frac{1}{x}$. The reciprocal form $1/x$ is what makes $\\ln$ ubiquitous in [integration](!/calculus/integrals).`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Derivative of General Logarithm](!/calculus/derivatives/formulas#derivative_of_general_logarithm)
- [Derivative of Natural Exponential](!/calculus/derivatives/formulas#derivative_of_natural_exponential)`,
    },
  },

  {
    name: 'Derivative of General Logarithm',
    entity: 'derivative',
    category: 'Derivatives of Common Functions',
    formula: `$$\\frac{d}{dx}[\\log_a x] = \\frac{1}{x \\ln a}$$`,
    link: { label: 'Logarithmic Functions', url: '/calculus/derivatives/common#7' },
    fields: {
      conditions: `
$x > 0$, $a > 0$, $a \\neq 1$.`,
      explanation: `
Follows from the change-of-base formula $\\log_a x = \\frac{\\ln x}{\\ln a}$ together with the [constant multiple rule](!/calculus/derivatives/formulas#constant_multiple_rule_derivatives). When $a = e$, $\\ln a = 1$, recovering $\\frac{d}{dx}[\\ln x] = \\frac{1}{x}$.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Derivative of Natural Logarithm](!/calculus/derivatives/formulas#derivative_of_natural_logarithm)
- [Derivative of General Exponential](!/calculus/derivatives/formulas#derivative_of_general_exponential)`,
    },
  },

  // ─── DERIVATIVES OF INVERSE TRIGONOMETRIC FUNCTIONS ────────────────────

  {
    name: 'Derivative of Arcsine',
    entity: 'derivative',
    category: 'Derivatives of Inverse Trigonometric Functions',
    formula: `$$\\frac{d}{dx}[\\arcsin x] = \\frac{1}{\\sqrt{1 - x^2}}$$`,
    link: { label: 'Inverse Trigonometric Functions: Arcsine and Arccosine', url: '/calculus/derivatives/special#1' },
    fields: {
      conditions: `
$|x| < 1$. At $x = \\pm 1$ the denominator vanishes — the graph of $\\arcsin x$ has vertical tangents at its endpoints.`,
      explanation: `
Derived by [implicit differentiation](!/calculus/derivatives/techniques): from $\\sin y = x$ with $y \\in [-\\pi/2, \\pi/2]$, differentiating gives $\\cos y \\cdot y' = 1$, and $\\cos y = \\sqrt{1 - \\sin^2 y} = \\sqrt{1 - x^2}$ (positive since $y$ lies in the first or fourth quadrant).`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Derivative of Arccosine](!/calculus/derivatives/formulas#derivative_of_arccosine)
- [Derivative of Sine](!/calculus/derivatives/formulas#derivative_of_sine)`,
    },
  },

  {
    name: 'Derivative of Arccosine',
    entity: 'derivative',
    category: 'Derivatives of Inverse Trigonometric Functions',
    formula: `$$\\frac{d}{dx}[\\arccos x] = -\\frac{1}{\\sqrt{1 - x^2}}$$`,
    link: { label: 'Inverse Trigonometric Functions: Arcsine and Arccosine', url: '/calculus/derivatives/special#1' },
    fields: {
      conditions: `
$|x| < 1$.`,
      explanation: `
Differs from the [arcsine derivative](!/calculus/derivatives/formulas#derivative_of_arcsine) only in sign — both follow from differentiating $\\arcsin x + \\arccos x = \\frac{\\pi}{2}$.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Derivative of Arcsine](!/calculus/derivatives/formulas#derivative_of_arcsine)
- [Derivative of Cosine](!/calculus/derivatives/formulas#derivative_of_cosine)`,
    },
  },

  {
    name: 'Derivative of Arctangent',
    entity: 'derivative',
    category: 'Derivatives of Inverse Trigonometric Functions',
    formula: `$$\\frac{d}{dx}[\\arctan x] = \\frac{1}{1 + x^2}$$`,
    link: { label: 'Inverse Trigonometric Functions: Arctangent and Arccotangent', url: '/calculus/derivatives/special#2' },
    fields: {
      explanation: `
Defined for all real $x$ — no domain restriction. Derived by [implicit differentiation](!/calculus/derivatives/techniques) of $\\tan y = x$: $\\sec^2 y \\cdot y' = 1$, and $\\sec^2 y = 1 + \\tan^2 y = 1 + x^2$. Always positive, confirming that $\\arctan x$ is strictly increasing. As $x \\to \\pm\\infty$, the derivative approaches zero, reflecting the horizontal asymptotes $y = \\pm \\pi/2$. Reappears prominently in [integration](!/calculus/integrals/special) as the antiderivative of $1/(1+x^2)$.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Derivative of Arccotangent](!/calculus/derivatives/formulas#derivative_of_arccotangent)
- [Derivative of Tangent](!/calculus/derivatives/formulas#derivative_of_tangent)`,
    },
  },

  {
    name: 'Derivative of Arccotangent',
    entity: 'derivative',
    category: 'Derivatives of Inverse Trigonometric Functions',
    formula: `$$\\frac{d}{dx}[\\operatorname{arccot} x] = -\\frac{1}{1 + x^2}$$`,
    link: { label: 'Inverse Trigonometric Functions: Arctangent and Arccotangent', url: '/calculus/derivatives/special#2' },
    fields: {
      explanation: `
Differs from the [arctangent derivative](!/calculus/derivatives/formulas#derivative_of_arctangent) only in sign — both follow from differentiating $\\arctan x + \\operatorname{arccot} x = \\frac{\\pi}{2}$.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Derivative of Arctangent](!/calculus/derivatives/formulas#derivative_of_arctangent)
- [Derivative of Cotangent](!/calculus/derivatives/formulas#derivative_of_cotangent)`,
    },
  },

  {
    name: 'Derivative of Arcsecant',
    entity: 'derivative',
    category: 'Derivatives of Inverse Trigonometric Functions',
    formula: `$$\\frac{d}{dx}[\\operatorname{arcsec} x] = \\frac{1}{|x| \\sqrt{x^2 - 1}}$$`,
    link: { label: 'Inverse Trigonometric Functions: Arcsecant and Arccosecant', url: '/calculus/derivatives/special#3' },
    fields: {
      conditions: `
$|x| > 1$.`,
      explanation: `
Derived by [implicit differentiation](!/calculus/derivatives/techniques) of $\\sec y = x$: $\\sec y \\tan y \\cdot y' = 1$, with $\\sec y = x$ and $\\tan y = \\pm\\sqrt{x^2 - 1}$ depending on quadrant. The absolute value $|x|$ resolves the sign uniformly. Appears in integrals of the form $\\int \\frac{1}{x\\sqrt{x^2 - 1}}\\,dx$.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Derivative of Arccosecant](!/calculus/derivatives/formulas#derivative_of_arccosecant)
- [Derivative of Secant](!/calculus/derivatives/formulas#derivative_of_secant)`,
    },
  },

  {
    name: 'Derivative of Arccosecant',
    entity: 'derivative',
    category: 'Derivatives of Inverse Trigonometric Functions',
    formula: `$$\\frac{d}{dx}[\\operatorname{arccsc} x] = -\\frac{1}{|x| \\sqrt{x^2 - 1}}$$`,
    link: { label: 'Inverse Trigonometric Functions: Arcsecant and Arccosecant', url: '/calculus/derivatives/special#3' },
    fields: {
      conditions: `
$|x| > 1$.`,
      explanation: `
Differs from the [arcsecant derivative](!/calculus/derivatives/formulas#derivative_of_arcsecant) only in sign — both follow from differentiating $\\operatorname{arcsec} x + \\operatorname{arccsc} x = \\frac{\\pi}{2}$.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Derivative of Arcsecant](!/calculus/derivatives/formulas#derivative_of_arcsecant)
- [Derivative of Cosecant](!/calculus/derivatives/formulas#derivative_of_cosecant)`,
    },
  },

  // ─── DERIVATIVES OF HYPERBOLIC FUNCTIONS ───────────────────────────────

  {
    name: 'Derivative of Hyperbolic Sine',
    entity: 'derivative',
    category: 'Derivatives of Hyperbolic Functions',
    formula: `$$\\frac{d}{dx}[\\sinh x] = \\cosh x$$`,
    link: { label: 'Hyperbolic Functions: Sinh, Cosh, Tanh', url: '/calculus/derivatives/special#4' },
    fields: {
      explanation: `
Follows directly from the definition $\\sinh x = \\frac{e^x - e^{-x}}{2}$ together with the [derivative of $e^x$](!/calculus/derivatives/formulas#derivative_of_natural_exponential): differentiating gives $\\frac{e^x + e^{-x}}{2} = \\cosh x$. Hyperbolic derivatives mirror trigonometric derivatives but with no sign flip between $\\sinh$ and $\\cosh$ — both differentiate to each other without a negative.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Derivative of Hyperbolic Cosine](!/calculus/derivatives/formulas#derivative_of_hyperbolic_cosine)
- [Derivative of Natural Exponential](!/calculus/derivatives/formulas#derivative_of_natural_exponential)`,
    },
  },

  {
    name: 'Derivative of Hyperbolic Cosine',
    entity: 'derivative',
    category: 'Derivatives of Hyperbolic Functions',
    formula: `$$\\frac{d}{dx}[\\cosh x] = \\sinh x$$`,
    link: { label: 'Hyperbolic Functions: Sinh, Cosh, Tanh', url: '/calculus/derivatives/special#4' },
    fields: {
      explanation: `
From $\\cosh x = \\frac{e^x + e^{-x}}{2}$, differentiating gives $\\frac{e^x - e^{-x}}{2} = \\sinh x$. No negative sign — the key distinction from $\\frac{d}{dx}[\\cos x] = -\\sin x$.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Derivative of Hyperbolic Sine](!/calculus/derivatives/formulas#derivative_of_hyperbolic_sine)
- [Derivative of Hyperbolic Tangent](!/calculus/derivatives/formulas#derivative_of_hyperbolic_tangent)`,
    },
  },

  {
    name: 'Derivative of Hyperbolic Tangent',
    entity: 'derivative',
    category: 'Derivatives of Hyperbolic Functions',
    formula: `$$\\frac{d}{dx}[\\tanh x] = \\operatorname{sech}^2 x$$`,
    link: { label: 'Hyperbolic Functions: Sinh, Cosh, Tanh', url: '/calculus/derivatives/special#4' },
    fields: {
      explanation: `
Derived via the [quotient rule](!/calculus/derivatives/formulas#quotient_rule_derivatives) on $\\tanh x = \\sinh x / \\cosh x$. The hyperbolic identity $\\cosh^2 x - \\sinh^2 x = 1$ simplifies the numerator to $1$, giving $1/\\cosh^2 x = \\operatorname{sech}^2 x$. Mirrors $\\frac{d}{dx}[\\tan x] = \\sec^2 x$.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Derivative of Hyperbolic Cotangent](!/calculus/derivatives/formulas#derivative_of_hyperbolic_cotangent)
- [Derivative of Tangent](!/calculus/derivatives/formulas#derivative_of_tangent)`,
    },
  },

  {
    name: 'Derivative of Hyperbolic Cotangent',
    entity: 'derivative',
    category: 'Derivatives of Hyperbolic Functions',
    formula: `$$\\frac{d}{dx}[\\coth x] = -\\operatorname{csch}^2 x$$`,
    link: { label: 'Hyperbolic Functions: Coth, Sech, Csch', url: '/calculus/derivatives/special#5' },
    fields: {
      conditions: `
$x \\neq 0$.`,
      explanation: `
Derived via the [quotient rule](!/calculus/derivatives/formulas#quotient_rule_derivatives) on $\\coth x = \\cosh x / \\sinh x$. The negative sign matches the cofunction pattern.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Derivative of Hyperbolic Tangent](!/calculus/derivatives/formulas#derivative_of_hyperbolic_tangent)
- [Derivative of Hyperbolic Cosecant](!/calculus/derivatives/formulas#derivative_of_hyperbolic_cosecant)`,
    },
  },

  {
    name: 'Derivative of Hyperbolic Secant',
    entity: 'derivative',
    category: 'Derivatives of Hyperbolic Functions',
    formula: `$$\\frac{d}{dx}[\\operatorname{sech} x] = -\\operatorname{sech} x \\tanh x$$`,
    link: { label: 'Hyperbolic Functions: Coth, Sech, Csch', url: '/calculus/derivatives/special#5' },
    fields: {
      explanation: `
The negative sign here is the key difference from the trigonometric case $\\frac{d}{dx}[\\sec x] = \\sec x \\tan x$. Derived via the [chain rule](!/calculus/derivatives/formulas#chain_rule) on $\\operatorname{sech} x = (\\cosh x)^{-1}$.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Derivative of Hyperbolic Cosecant](!/calculus/derivatives/formulas#derivative_of_hyperbolic_cosecant)
- [Derivative of Secant](!/calculus/derivatives/formulas#derivative_of_secant)`,
    },
  },

  {
    name: 'Derivative of Hyperbolic Cosecant',
    entity: 'derivative',
    category: 'Derivatives of Hyperbolic Functions',
    formula: `$$\\frac{d}{dx}[\\operatorname{csch} x] = -\\operatorname{csch} x \\coth x$$`,
    link: { label: 'Hyperbolic Functions: Coth, Sech, Csch', url: '/calculus/derivatives/special#5' },
    fields: {
      conditions: `
$x \\neq 0$.`,
      explanation: `
Derived via the [chain rule](!/calculus/derivatives/formulas#chain_rule) on $\\operatorname{csch} x = (\\sinh x)^{-1}$. Matches the trigonometric pattern $\\frac{d}{dx}[\\csc x] = -\\csc x \\cot x$.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Derivative of Hyperbolic Secant](!/calculus/derivatives/formulas#derivative_of_hyperbolic_secant)
- [Derivative of Cosecant](!/calculus/derivatives/formulas#derivative_of_cosecant)`,
    },
  },

  // ─── DERIVATIVES OF INVERSE HYPERBOLIC FUNCTIONS ───────────────────────

  {
    name: 'Derivative of Inverse Hyperbolic Sine',
    entity: 'derivative',
    category: 'Derivatives of Inverse Hyperbolic Functions',
    formula: `$$\\frac{d}{dx}[\\operatorname{arcsinh} x] = \\frac{1}{\\sqrt{x^2 + 1}}$$`,
    link: { label: 'Inverse Hyperbolic Functions', url: '/calculus/derivatives/special#6' },
    fields: {
      explanation: `
Defined for all real $x$. Derived by [implicit differentiation](!/calculus/derivatives/techniques) of $\\sinh y = x$: $\\cosh y \\cdot y' = 1$, and $\\cosh y = \\sqrt{1 + \\sinh^2 y} = \\sqrt{1 + x^2}$.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Derivative of Inverse Hyperbolic Cosine](!/calculus/derivatives/formulas#derivative_of_inverse_hyperbolic_cosine)
- [Derivative of Hyperbolic Sine](!/calculus/derivatives/formulas#derivative_of_hyperbolic_sine)`,
    },
  },

  {
    name: 'Derivative of Inverse Hyperbolic Cosine',
    entity: 'derivative',
    category: 'Derivatives of Inverse Hyperbolic Functions',
    formula: `$$\\frac{d}{dx}[\\operatorname{arccosh} x] = \\frac{1}{\\sqrt{x^2 - 1}}$$`,
    link: { label: 'Inverse Hyperbolic Functions', url: '/calculus/derivatives/special#6' },
    fields: {
      conditions: `
$x > 1$.`,
      explanation: `
Derived by [implicit differentiation](!/calculus/derivatives/techniques) of $\\cosh y = x$ with $y \\geq 0$: $\\sinh y \\cdot y' = 1$, and $\\sinh y = \\sqrt{\\cosh^2 y - 1} = \\sqrt{x^2 - 1}$.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Derivative of Inverse Hyperbolic Sine](!/calculus/derivatives/formulas#derivative_of_inverse_hyperbolic_sine)
- [Derivative of Hyperbolic Cosine](!/calculus/derivatives/formulas#derivative_of_hyperbolic_cosine)`,
    },
  },

  {
    name: 'Derivative of Inverse Hyperbolic Tangent',
    entity: 'derivative',
    category: 'Derivatives of Inverse Hyperbolic Functions',
    formula: `$$\\frac{d}{dx}[\\operatorname{arctanh} x] = \\frac{1}{1 - x^2}$$`,
    link: { label: 'Inverse Hyperbolic Functions', url: '/calculus/derivatives/special#6' },
    fields: {
      conditions: `
$|x| < 1$.`,
      explanation: `
Derived by [implicit differentiation](!/calculus/derivatives/techniques) of $\\tanh y = x$: $\\operatorname{sech}^2 y \\cdot y' = 1$, and $\\operatorname{sech}^2 y = 1 - \\tanh^2 y = 1 - x^2$. Mirrors the [arctangent derivative](!/calculus/derivatives/formulas#derivative_of_arctangent) $\\frac{1}{1+x^2}$ with the sign in the denominator flipped.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Derivative of Hyperbolic Tangent](!/calculus/derivatives/formulas#derivative_of_hyperbolic_tangent)
- [Derivative of Arctangent](!/calculus/derivatives/formulas#derivative_of_arctangent)`,
    },
  },

  // ─── DIFFERENTIABILITY ─────────────────────────────────────────────────

  {
    name: 'One-Sided Derivative',
    entity: 'differentiability',
    category: 'Differentiability',
    formula: `$$f'_-(a) = \\lim_{h \\to 0^-} \\frac{f(a + h) - f(a)}{h} \\qquad f'_+(a) = \\lim_{h \\to 0^+} \\frac{f(a + h) - f(a)}{h}$$`,
    link: { label: 'One-Sided Derivatives', url: '/calculus/derivatives/differentiability#3' },
    fields: {
      variables: `
- $a$ — the point at which the one-sided derivatives are evaluated
- $f'_-(a)$ — left-hand derivative (slope from the left)
- $f'_+(a)$ — right-hand derivative (slope from the right)`,
      conditions: `
The corresponding [one-sided limit](!/calculus/limits/one-sided) must exist. The full [derivative](!/calculus/derivatives/formulas#derivative_limit_definition) $f'(a)$ exists if and only if both one-sided derivatives exist and are equal.`,
      explanation: `
At a corner point (like $|x|$ at $x = 0$), the one-sided derivatives exist but differ, so the two-sided derivative fails. One-sided derivatives are also the right tool at endpoints of closed intervals, where only one direction of approach is available.`,
      related_definitions: `
- [One-Sided Derivative](!/calculus/definitions#one_sided_derivative)
- [Differentiability](!/calculus/definitions#differentiability)
- [Corner](!/calculus/definitions#corner)`,
      related_formulas: `
- [Derivative Limit Definition](!/calculus/derivatives/formulas#derivative_limit_definition)
- [Differentiability Implies Continuity](!/calculus/derivatives/formulas#differentiability_implies_continuity)`,
    },
  },

  {
    name: 'Differentiability Implies Continuity',
    entity: 'differentiability',
    category: 'Differentiability',
    formula: `$$f \\text{ differentiable at } a \\implies f \\text{ continuous at } a$$`,
    link: { label: 'Differentiability Implies Continuity', url: '/calculus/derivatives/differentiability#5' },
    fields: {
      explanation: `
A function with a well-defined tangent line at $a$ must be continuous at $a$ — graphs with jumps or holes cannot have a finite slope at the discontinuity. The converse is false: $|x|$ is continuous at $0$ but has no derivative there (left and right slopes disagree). Continuity is necessary for differentiability but not sufficient.`,
      related_definitions: `
- [Differentiability](!/calculus/definitions#differentiability)
- [Continuity](!/calculus/definitions#continuity)`,
      related_formulas: `
- [One-Sided Derivative](!/calculus/derivatives/formulas#one_sided_derivative)
- [Continuity at a Point](!/calculus/limits/formulas#continuity_at_a_point)`,
    },
  },

  // ─── DIFFERENTIALS ─────────────────────────────────────────────────────

  {
    name: 'Differential',
    entity: 'differential',
    category: 'Differentials',
    formula: `$$dy = f'(x)\\, dx$$`,
    link: { label: 'The Differential dy', url: '/calculus/derivatives/differentials#2' },
    fields: {
      variables: `
- $dx$ — an independent infinitesimal increment in $x$
- $dy$ — the corresponding infinitesimal change in $y = f(x)$, defined by this equation`,
      explanation: `
Treats $dx$ and $dy$ as separate quantities linked by the derivative. Multiplying the slope $f'(x)$ by an infinitesimal change in $x$ produces the corresponding infinitesimal change in $y$. This is the algebraic backbone of [Leibniz notation](!/calculus/derivatives/differentials) — $dy/dx$ becomes a literal ratio of differentials, making the [chain rule](!/calculus/derivatives/formulas#chain_rule) look like fraction cancellation. Used heavily in [substitution](!/calculus/integrals/techniques) and the construction of definite integrals.`,
      related_definitions: `
- [Differential](!/calculus/definitions#differential)
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Linear Approximation](!/calculus/derivatives/formulas#linear_approximation)
- [Total Differential](!/calculus/derivatives/formulas#total_differential)`,
    },
  },

  {
    name: 'Linear Approximation',
    entity: 'differential',
    category: 'Differentials',
    formula: `$$f(x) \\approx f(a) + f'(a)(x - a) \\qquad \\Delta y \\approx f'(a)\\, \\Delta x$$`,
    link: { label: 'Linear Approximation', url: '/calculus/derivatives/differentials#3' },
    fields: {
      variables: `
- $a$ — the base point near which the approximation is centered
- $x$ — the input value where $f$ is being estimated
- $\\Delta x = x - a$, $\\Delta y = f(x) - f(a)$ — actual changes
- $f(a) + f'(a)(x - a)$ — the tangent line at $a$, also called the linearization $L(x)$`,
      conditions: `
$f$ must be differentiable at $a$. The approximation is best when $x$ is close to $a$; error grows with $|x - a|^2$.`,
      explanation: `
The tangent line at $a$ serves as a local model for $f$ near $a$. Solid foundation for Newton's method, error analysis, and the multivariable [total differential](!/calculus/derivatives/formulas#total_differential).`,
      related_definitions: `
- [Linearization](!/calculus/definitions#linearization)
- [Tangent Line](!/calculus/definitions#tangent_line)`,
      related_formulas: `
- [Differential](!/calculus/derivatives/formulas#differential)
- [Tangent Line Equation](!/calculus/derivatives/formulas#tangent_line_equation)
- [Taylor Series](!/calculus/derivatives/formulas#taylor_series)`,
    },
  },

  {
    name: 'Total Differential',
    entity: 'differential',
    category: 'Differentials',
    formula: `$$dz = \\frac{\\partial z}{\\partial x}\\, dx + \\frac{\\partial z}{\\partial y}\\, dy$$`,
    link: { label: 'Total Differential', url: '/calculus/derivatives/differentials#4' },
    fields: {
      variables: `
- $z = f(x, y)$ — a function of two variables
- $\\partial z / \\partial x, \\partial z / \\partial y$ — partial derivatives with respect to each variable
- $dx, dy$ — independent differentials in the two input directions`,
      explanation: `
The multivariable [differential](!/calculus/derivatives/formulas#differential). Each partial derivative captures the rate of change in one input direction; the total differential sums those contributions weighted by the corresponding input changes. For $n$ variables, the pattern continues — one term per partial derivative.`,
      related_definitions: `
- [Differential](!/calculus/definitions#differential)
- [Partial Derivative](!/calculus/definitions#partial_derivative)`,
      related_formulas: `
- [Differential](!/calculus/derivatives/formulas#differential)
- [Linear Approximation](!/calculus/derivatives/formulas#linear_approximation)`,
    },
  },

  {
    name: 'Logarithmic Derivative',
    entity: 'derivative',
    category: 'Differentials',
    formula: `$$\\frac{d}{dx}[\\ln f(x)] = \\frac{f'(x)}{f(x)}$$`,
    link: { label: 'Logarithmic Derivative', url: '/calculus/derivatives/differentials#5' },
    fields: {
      conditions: `
$f(x) > 0$ on the interval of interest. The extension $\\frac{d}{dx}[\\ln|f(x)|] = f'(x)/f(x)$ is valid wherever $f(x) \\neq 0$.`,
      explanation: `
The [chain rule](!/calculus/derivatives/formulas#chain_rule) applied to the logarithm. Frequently used in the reverse direction: when an integrand has the form $f'(x)/f(x)$, recognize it as the [logarithmic derivative pattern](!/calculus/integrals/formulas#logarithmic_derivative_pattern) for integration. Forms the basis of [logarithmic differentiation](!/calculus/derivatives/formulas#logarithmic_differentiation), which turns products and powers into sums via log laws.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Logarithmic Differentiation](!/calculus/derivatives/formulas#logarithmic_differentiation)
- [Derivative of Natural Logarithm](!/calculus/derivatives/formulas#derivative_of_natural_logarithm)
- [Chain Rule](!/calculus/derivatives/formulas#chain_rule)`,
    },
  },

  // ─── GRAPH ANALYSIS ────────────────────────────────────────────────────

  {
    name: 'Tangent Line Equation',
    entity: 'tangent_line',
    category: 'Graph Analysis',
    formula: `$$y - f(a) = f'(a)(x - a) \\qquad y = f(a) + f'(a)(x - a)$$`,
    link: { label: 'Tangent Line Equation', url: '/calculus/derivatives/applications#1' },
    fields: {
      variables: `
- $a$ — the $x$-coordinate of the point of tangency
- $f(a)$ — the $y$-coordinate of the point of tangency
- $f'(a)$ — the slope of the tangent line at $a$`,
      conditions: `
$f$ must be [differentiable](!/calculus/derivatives/differentiability) at $a$. The formula fails at corners, cusps, or vertical-tangent points.`,
      explanation: `
The point-slope form of the line passing through $(a, f(a))$ with slope $f'(a)$. Solving for $y$ produces the linearization $L(x)$ — the source of [linear approximation](!/calculus/derivatives/formulas#linear_approximation). For curves defined implicitly or parametrically, the same construction applies with the appropriate derivative formula.`,
      related_definitions: `
- [Tangent Line](!/calculus/definitions#tangent_line)
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Linear Approximation](!/calculus/derivatives/formulas#linear_approximation)
- [Normal Line Equation](!/calculus/derivatives/formulas#normal_line_equation)
- [Derivative Limit Definition](!/calculus/derivatives/formulas#derivative_limit_definition)`,
    },
  },

  {
    name: 'Normal Line Equation',
    entity: 'tangent_line',
    category: 'Graph Analysis',
    formula: `$$y - f(a) = -\\frac{1}{f'(a)}(x - a)$$`,
    link: { label: 'Normal Line', url: '/calculus/derivatives/applications#2' },
    fields: {
      conditions: `
$f'(a) \\neq 0$. When $f'(a) = 0$, the tangent line is horizontal and the normal line is the vertical line $x = a$.`,
      explanation: `
The normal line is perpendicular to the tangent line at the same point. Perpendicular lines have slopes that are negative reciprocals, so the normal slope is $-1/f'(a)$. Used in geometric applications: reflections, optical normals, mechanics problems involving forces perpendicular to a curved surface.`,
      related_definitions: `
- [Tangent Line](!/calculus/definitions#tangent_line)`,
      related_formulas: `
- [Tangent Line Equation](!/calculus/derivatives/formulas#tangent_line_equation)`,
    },
  },

  {
    name: 'Sign of First Derivative',
    entity: 'first_derivative_test',
    category: 'Graph Analysis',
    formula: `$$f'(x) > 0 \\implies f \\text{ increasing}, \\quad f'(x) < 0 \\implies f \\text{ decreasing}$$`,
    link: { label: 'Increasing and Decreasing', url: '/calculus/derivatives/applications#3' },
    fields: {
      conditions: `
The implications hold on intervals where the sign is consistent. Follows from the [Mean Value Theorem](!/calculus/derivatives/formulas#mean_value_theorem): if $f' > 0$ between $a$ and $b$, then $f(b) - f(a) = f'(c)(b - a) > 0$.`,
      explanation: `
The sign of the derivative determines the direction of motion. Sign changes of $f'$ — only possible at [critical points](!/calculus/definitions#critical_point) — partition the domain into intervals of monotonic behavior. The [first derivative test](!/calculus/derivatives/formulas#first_derivative_test) reads local extrema directly off these sign changes.`,
      related_definitions: `
- [Critical Point](!/calculus/definitions#critical_point)
- [Local Extremum](!/calculus/definitions#local_extremum)`,
      related_formulas: `
- [First Derivative Test](!/calculus/derivatives/formulas#first_derivative_test)
- [Critical Point Condition](!/calculus/derivatives/formulas#critical_point_condition)
- [Mean Value Theorem](!/calculus/derivatives/formulas#mean_value_theorem)`,
    },
  },

  {
    name: 'Critical Point Condition',
    entity: 'critical_point',
    category: 'Graph Analysis',
    formula: `$$f'(c) = 0 \\quad \\text{or} \\quad f'(c) \\text{ undefined}$$`,
    link: { label: 'Critical Points', url: '/calculus/derivatives/applications#4' },
    fields: {
      explanation: `
A critical point is where local extrema can occur — Fermat's theorem states that interior extrema have $f'(c) = 0$ when the derivative exists. But not every critical point is an extremum: $f(x) = x^3$ has a critical point at $0$ with neither a max nor a min. Determining the type requires the [first](!/calculus/derivatives/formulas#first_derivative_test) or [second derivative test](!/calculus/derivatives/formulas#second_derivative_test). Critical points where $f'$ is undefined include corners (like $|x|$ at $0$) and vertical tangents (like $\\sqrt[3]{x}$ at $0$).`,
      related_definitions: `
- [Critical Point](!/calculus/definitions#critical_point)
- [Local Extremum](!/calculus/definitions#local_extremum)`,
      related_formulas: `
- [First Derivative Test](!/calculus/derivatives/formulas#first_derivative_test)
- [Second Derivative Test](!/calculus/derivatives/formulas#second_derivative_test)
- [Sign of First Derivative](!/calculus/derivatives/formulas#sign_of_first_derivative)`,
    },
  },

  {
    name: 'First Derivative Test',
    entity: 'first_derivative_test',
    category: 'Graph Analysis',
    formula: `$$f'(x) \\text{ changes } + \\to - \\text{ at } c \\implies c \\text{ is a local max}$$
$$f'(x) \\text{ changes } - \\to + \\text{ at } c \\implies c \\text{ is a local min}$$`,
    link: { label: 'First Derivative Test', url: '/calculus/derivatives/applications#5' },
    fields: {
      conditions: `
$c$ must be a [critical point](!/calculus/derivatives/formulas#critical_point_condition) of $f$, and $f$ must be continuous at $c$. No sign change of $f'$ at $c$ means $c$ is neither a local max nor a local min.`,
      explanation: `
At a local maximum, $f$ rises into the point ($f' > 0$ on the left) and falls out ($f' < 0$ on the right). At a local minimum, the opposite. The test uses [sign analysis](!/calculus/derivatives/formulas#sign_of_first_derivative) on intervals between critical points — pick a test point in each interval, evaluate $f'$, and read the sign pattern.`,
      related_definitions: `
- [Local Extremum](!/calculus/definitions#local_extremum)
- [Critical Point](!/calculus/definitions#critical_point)`,
      related_formulas: `
- [Critical Point Condition](!/calculus/derivatives/formulas#critical_point_condition)
- [Second Derivative Test](!/calculus/derivatives/formulas#second_derivative_test)
- [Sign of First Derivative](!/calculus/derivatives/formulas#sign_of_first_derivative)`,
    },
  },

  {
    name: 'Second Derivative Test',
    entity: 'second_derivative_test',
    category: 'Graph Analysis',
    formula: `$$f'(c) = 0, \\; f''(c) > 0 \\implies c \\text{ is a local min}$$
$$f'(c) = 0, \\; f''(c) < 0 \\implies c \\text{ is a local max}$$`,
    link: { label: 'Second Derivative Test', url: '/calculus/derivatives/applications#7' },
    fields: {
      conditions: `
$f''(c)$ must exist and be nonzero. The test is inconclusive when $f''(c) = 0$ — fall back to the [first derivative test](!/calculus/derivatives/formulas#first_derivative_test).`,
      explanation: `
At a critical point, the [concavity](!/calculus/derivatives/formulas#concavity_from_second_derivative) determines the type: concave up means a minimum (cup-shape), concave down means a maximum (cap-shape). The test is faster than the first derivative test when $f''$ is easy to evaluate at $c$, but provides no information when $f''(c) = 0$.`,
      related_definitions: `
- [Local Extremum](!/calculus/definitions#local_extremum)
- [Concavity](!/calculus/definitions#concavity)`,
      related_formulas: `
- [First Derivative Test](!/calculus/derivatives/formulas#first_derivative_test)
- [Concavity from Second Derivative](!/calculus/derivatives/formulas#concavity_from_second_derivative)
- [Critical Point Condition](!/calculus/derivatives/formulas#critical_point_condition)`,
    },
  },

  {
    name: 'Concavity from Second Derivative',
    entity: 'concavity',
    category: 'Graph Analysis',
    formula: `$$f''(x) > 0 \\implies f \\text{ concave up}, \\quad f''(x) < 0 \\implies f \\text{ concave down}$$`,
    link: { label: 'Concavity', url: '/calculus/derivatives/applications#6' },
    fields: {
      explanation: `
The second derivative measures how the slope is changing. Positive $f''$ means the slope is increasing — graph bends upward, lies above its tangent lines. Negative $f''$ means the slope is decreasing — graph bends downward, lies below its tangent lines. Sign changes of $f''$ identify [inflection points](!/calculus/derivatives/formulas#inflection_point_condition).`,
      related_definitions: `
- [Concavity](!/calculus/definitions#concavity)
- [Inflection Point](!/calculus/definitions#inflection_point)`,
      related_formulas: `
- [Inflection Point Condition](!/calculus/derivatives/formulas#inflection_point_condition)
- [Second Derivative Test](!/calculus/derivatives/formulas#second_derivative_test)`,
    },
  },

  {
    name: 'Inflection Point Condition',
    entity: 'inflection_point',
    category: 'Graph Analysis',
    formula: `$$f''(c) = 0 \\text{ or undefined}, \\text{ and } f''(x) \\text{ changes sign at } c$$`,
    link: { label: 'Inflection Points', url: '/calculus/derivatives/applications#8' },
    fields: {
      explanation: `
An inflection point is where concavity changes. The vanishing (or undefined value) of $f''$ is necessary but not sufficient — $f(x) = x^4$ has $f''(0) = 0$ but no inflection point there, since $f''$ stays non-negative on both sides. Confirming an inflection point requires checking that $f''$ actually changes sign across $c$.`,
      related_definitions: `
- [Inflection Point](!/calculus/definitions#inflection_point)
- [Concavity](!/calculus/definitions#concavity)`,
      related_formulas: `
- [Concavity from Second Derivative](!/calculus/derivatives/formulas#concavity_from_second_derivative)`,
    },
  },

  {
    name: 'Extreme Value Theorem',
    entity: 'extreme_value_theorem',
    category: 'Graph Analysis',
    formula: `$$f \\text{ continuous on } [a, b] \\implies f \\text{ attains a max and min on } [a, b]$$`,
    link: { label: 'Extreme Value Theorem', url: '/calculus/derivatives/applications#9' },
    fields: {
      conditions: `
Both hypotheses are required: $f$ must be [continuous](!/calculus/limits/continuity), and the interval must be closed and bounded. A discontinuous $f$ may shoot to infinity; an open interval $(a, b)$ may have $f$ approaching a sup/inf at the missing endpoints but never attaining it.`,
      explanation: `
A continuous function on a closed bounded interval cannot escape to infinity (continuity prevents it) and cannot oscillate without bound (the interval is bounded), so it must attain its maximum and minimum values somewhere in $[a, b]$. The theorem guarantees existence but says nothing about where — extrema may be at critical points or at the endpoints, and finding them requires examining all candidates.`,
      related_definitions: `
- [Absolute Extremum](!/calculus/definitions#absolute_extremum)
- [Continuity](!/calculus/definitions#continuity)`,
      related_formulas: `
- [Critical Point Condition](!/calculus/derivatives/formulas#critical_point_condition)
- [Intermediate Value Theorem](!/calculus/limits/formulas#intermediate_value_theorem)`,
    },
  },

  // ─── HIGHER-ORDER DERIVATIVES ──────────────────────────────────────────

  {
    name: 'nth Derivative of Power',
    entity: 'higher_order_derivative',
    category: 'Higher-Order Derivatives',
    formula: `$$\\frac{d^n}{dx^n}[x^m] = \\frac{m!}{(m-n)!}\\, x^{m-n} \\quad (n \\leq m)$$`,
    link: { label: 'Patterns in Repeated Differentiation — Powers', url: '/calculus/derivatives/higher-order#3' },
    fields: {
      conditions: `
$m$ a non-negative integer, $n \\leq m$. For $n > m$, the result is $0$. For $n = m$, the result is $m!$ (a constant).`,
      explanation: `
Each application of the [power rule](!/calculus/derivatives/formulas#power_rule_derivatives) drops the exponent by one and contributes a multiplicative factor of the current exponent. After $n$ differentiations, the accumulated coefficient is $m(m-1)(m-2)\\cdots(m-n+1) = \\frac{m!}{(m-n)!}$, the falling factorial. Foundational to [Taylor series](!/calculus/derivatives/formulas#taylor_series) — the $n$th coefficient of the Taylor expansion of $x^m$ at $0$ comes from this.`,
      related_definitions: `
- [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative)`,
      related_formulas: `
- [Power Rule (Derivatives)](!/calculus/derivatives/formulas#power_rule_derivatives)
- [Taylor Series](!/calculus/derivatives/formulas#taylor_series)`,
    },
  },

  {
    name: 'nth Derivative of Natural Exponential',
    entity: 'higher_order_derivative',
    category: 'Higher-Order Derivatives',
    formula: `$$\\frac{d^n}{dx^n}[e^x] = e^x$$`,
    link: { label: 'Patterns in Repeated Differentiation — Exponentials', url: '/calculus/derivatives/higher-order#4' },
    fields: {
      explanation: `
$e^x$ is its own derivative at every order. The unique non-trivial fixed point of differentiation. This invariance makes $e^x$ central to differential equations — the equation $y' = y$ has solutions $y = Ce^x$.`,
      related_definitions: `
- [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative)`,
      related_formulas: `
- [Derivative of Natural Exponential](!/calculus/derivatives/formulas#derivative_of_natural_exponential)
- [nth Derivative of Scaled Exponential](!/calculus/derivatives/formulas#nth_derivative_of_scaled_exponential)`,
    },
  },

  {
    name: 'nth Derivative of Scaled Exponential',
    entity: 'higher_order_derivative',
    category: 'Higher-Order Derivatives',
    formula: `$$\\frac{d^n}{dx^n}[e^{ax}] = a^n e^{ax}$$`,
    link: { label: 'Patterns in Repeated Differentiation — Exponentials', url: '/calculus/derivatives/higher-order#4' },
    fields: {
      explanation: `
Each differentiation of $e^{ax}$ via the [chain rule](!/calculus/derivatives/formulas#chain_rule) contributes one factor of $a$. After $n$ applications, the coefficient is $a^n$. Reduces to the [natural exponential](!/calculus/derivatives/formulas#nth_derivative_of_natural_exponential) when $a = 1$.`,
      related_definitions: `
- [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative)`,
      related_formulas: `
- [nth Derivative of Natural Exponential](!/calculus/derivatives/formulas#nth_derivative_of_natural_exponential)
- [Chain Rule](!/calculus/derivatives/formulas#chain_rule)`,
    },
  },

  {
    name: 'nth Derivative of Sine',
    entity: 'higher_order_derivative',
    category: 'Higher-Order Derivatives',
    formula: `$$\\frac{d^n}{dx^n}[\\sin x] = \\sin\\!\\left(x + \\frac{n\\pi}{2}\\right)$$`,
    link: { label: 'Patterns in Repeated Differentiation — Sine and Cosine', url: '/calculus/derivatives/higher-order#5' },
    fields: {
      explanation: `
The derivatives of $\\sin x$ cycle with period four: $\\sin x \\to \\cos x \\to -\\sin x \\to -\\cos x \\to \\sin x$. Each differentiation corresponds to a $\\pi/2$ phase shift — every derivative is just sine evaluated at a shifted argument.`,
      related_definitions: `
- [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative)`,
      related_formulas: `
- [nth Derivative of Cosine](!/calculus/derivatives/formulas#nth_derivative_of_cosine)
- [Derivative of Sine](!/calculus/derivatives/formulas#derivative_of_sine)`,
    },
  },

  {
    name: 'nth Derivative of Cosine',
    entity: 'higher_order_derivative',
    category: 'Higher-Order Derivatives',
    formula: `$$\\frac{d^n}{dx^n}[\\cos x] = \\cos\\!\\left(x + \\frac{n\\pi}{2}\\right)$$`,
    link: { label: 'Patterns in Repeated Differentiation — Sine and Cosine', url: '/calculus/derivatives/higher-order#5' },
    fields: {
      explanation: `
Same period-four cycle as sine, also expressible as a phase shift by $\\pi/2$ per differentiation. The two patterns together encode the rotational structure of $\\sin$ and $\\cos$ under differentiation.`,
      related_definitions: `
- [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative)`,
      related_formulas: `
- [nth Derivative of Sine](!/calculus/derivatives/formulas#nth_derivative_of_sine)
- [Derivative of Cosine](!/calculus/derivatives/formulas#derivative_of_cosine)`,
    },
  },

  {
    name: 'nth Derivative of Reciprocal',
    entity: 'higher_order_derivative',
    category: 'Higher-Order Derivatives',
    formula: `$$\\frac{d^n}{dx^n}\\!\\left[\\frac{1}{x}\\right] = \\frac{(-1)^n\\, n!}{x^{n+1}}$$`,
    link: { label: 'Reciprocal and Rational Function Patterns', url: '/calculus/derivatives/higher-order#6' },
    fields: {
      conditions: `
$x \\neq 0$.`,
      explanation: `
Each differentiation drops the exponent (here $-1$ becomes $-2$, then $-3$, ...) and contributes a factor of the current exponent. After $n$ steps, the exponent is $-(n+1)$ and the accumulated factor is $(-1)(-2)(-3)\\cdots(-n) = (-1)^n n!$.`,
      related_definitions: `
- [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative)`,
      related_formulas: `
- [Power Rule (Derivatives)](!/calculus/derivatives/formulas#power_rule_derivatives)
- [nth Derivative of Power](!/calculus/derivatives/formulas#nth_derivative_of_power)`,
    },
  },

  {
    name: 'nth Derivative of Natural Logarithm',
    entity: 'higher_order_derivative',
    category: 'Higher-Order Derivatives',
    formula: `$$\\frac{d^n}{dx^n}[\\ln x] = \\frac{(-1)^{n-1}\\, (n-1)!}{x^n}$$`,
    link: { label: 'Logarithm Patterns', url: '/calculus/derivatives/higher-order#7' },
    fields: {
      conditions: `
$x > 0$, $n \\geq 1$. The first derivative is $1/x$; subsequent derivatives follow the [reciprocal pattern](!/calculus/derivatives/formulas#nth_derivative_of_reciprocal).`,
      explanation: `
After the first differentiation gives $1/x$, repeated differentiation is the reciprocal pattern. The sign alternates and a factorial accumulates. Used in deriving the [Taylor series](!/calculus/derivatives/formulas#taylor_series) of $\\ln(1 + x)$, where the alternating sign produces the classic series $x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots$.`,
      related_definitions: `
- [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative)`,
      related_formulas: `
- [nth Derivative of Reciprocal](!/calculus/derivatives/formulas#nth_derivative_of_reciprocal)
- [Derivative of Natural Logarithm](!/calculus/derivatives/formulas#derivative_of_natural_logarithm)`,
    },
  },

  {
    name: 'Taylor Series',
    entity: 'higher_order_derivative',
    category: 'Higher-Order Derivatives',
    formula: `$$f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x - a)^n$$`,
    link: { label: 'Taylor Series', url: '/calculus/derivatives/higher-order#8' },
    fields: {
      variables: `
- $a$ — center of the expansion (often $a = 0$, giving the Maclaurin series)
- $f^{(n)}(a)$ — the $n$th derivative of $f$ evaluated at $a$
- $n!$ — factorial in the denominator, calibrating each term`,
      conditions: `
$f$ must have derivatives of all orders at $a$. The series converges to $f(x)$ only within the radius of convergence, and only when the remainder term vanishes as $n \\to \\infty$ — not automatic, but it holds for $e^x, \\sin x, \\cos x$ everywhere.`,
      explanation: `
A power series that uses all of $f$'s derivatives at $a$ to reconstruct $f$ near $a$. The $n$th term contributes $(x - a)^n$ corrections in a power-of-$n$ hierarchy: $n = 1$ is the [linear approximation](!/calculus/derivatives/formulas#linear_approximation), $n = 2$ adds curvature, $n = 3$ adds twist, and so on. Truncating at any finite $n$ gives a polynomial that matches $f$ at $a$ up through the $n$th derivative.`,
      related_definitions: `
- [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative)`,
      related_formulas: `
- [Linear Approximation](!/calculus/derivatives/formulas#linear_approximation)
- [nth Derivative of Power](!/calculus/derivatives/formulas#nth_derivative_of_power)`,
    },
  },

  // ─── DIFFERENTIATION TECHNIQUES ────────────────────────────────────────

  {
    name: 'Inverse Function Derivative',
    entity: 'derivative',
    category: 'Differentiation Techniques',
    formula: `$$(f^{-1})'(b) = \\frac{1}{f'(a)} \\quad \\text{where } b = f(a)$$`,
    link: { label: 'Derivative of an Inverse Function', url: '/calculus/derivatives/techniques#1' },
    fields: {
      conditions: `
$f$ must be one-to-one near $a$, [differentiable](!/calculus/derivatives/differentiability) at $a$, and $f'(a) \\neq 0$.`,
      explanation: `
The graphs of $f$ and $f^{-1}$ are mirror images across the line $y = x$, so their slopes at corresponding points are reciprocals. Practical use: when an inverse function $f^{-1}$ is hard to express explicitly, this formula gives its derivative through the easier $f'$. The derivative formulas for $\\arcsin x, \\arccos x, \\arctan x$ all follow from this — each is obtained by applying the rule to the corresponding trigonometric function.`,
      related_definitions: `
- [Inverse Function](!/calculus/definitions#inverse_function)
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Derivative of Arcsine](!/calculus/derivatives/formulas#derivative_of_arcsine)
- [Derivative of Arctangent](!/calculus/derivatives/formulas#derivative_of_arctangent)
- [Chain Rule](!/calculus/derivatives/formulas#chain_rule)`,
    },
  },

  {
    name: 'Logarithmic Differentiation',
    entity: 'derivative',
    category: 'Differentiation Techniques',
    formula: `$$y = f(x) \\implies \\ln y = \\ln f(x) \\implies \\frac{y'}{y} = \\frac{d}{dx}[\\ln f(x)] \\implies y' = y \\cdot \\frac{d}{dx}[\\ln f(x)]$$`,
    link: { label: 'Logarithmic Differentiation', url: '/calculus/derivatives/techniques#3' },
    fields: {
      conditions: `
$f(x) > 0$. For $f$ taking negative values, use $\\ln|f(x)|$ — the derivative formula is unchanged.`,
      explanation: `
A technique, not a single formula. Take the log of both sides, apply log laws (turning products into sums, quotients into differences, powers into products), then differentiate implicitly. Essential for functions where both the base and exponent depend on $x$, like $f(x) = x^x$ — neither the [power rule](!/calculus/derivatives/formulas#power_rule_derivatives) nor the [exponential rule](!/calculus/derivatives/formulas#derivative_of_general_exponential) applies, but the logarithm converts $\\ln(x^x) = x \\ln x$ to a product the [product rule](!/calculus/derivatives/formulas#product_rule_derivatives) handles.`,
      related_definitions: `
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Logarithmic Derivative](!/calculus/derivatives/formulas#logarithmic_derivative)
- [Derivative of Natural Logarithm](!/calculus/derivatives/formulas#derivative_of_natural_logarithm)
- [Chain Rule](!/calculus/derivatives/formulas#chain_rule)`,
    },
  },

  {
    name: 'Parametric First Derivative',
    entity: 'derivative',
    category: 'Differentiation Techniques',
    formula: `$$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} \\quad \\text{when } x = x(t), \\, y = y(t)$$`,
    link: { label: 'Parametric Differentiation', url: '/calculus/derivatives/techniques#4' },
    fields: {
      conditions: `
Both $x(t)$ and $y(t)$ must be [differentiable](!/calculus/derivatives/differentiability), and $dx/dt \\neq 0$ at the point of interest. When $dx/dt = 0$, the tangent line is vertical (assuming $dy/dt \\neq 0$) or the point is singular.`,
      explanation: `
For curves defined parametrically by $(x(t), y(t))$, the slope of the tangent line is the ratio of velocities. Follows from the [chain rule](!/calculus/derivatives/formulas#chain_rule): $dy/dx = (dy/dt)(dt/dx) = (dy/dt)/(dx/dt)$. Many curves are naturally parametric — orbital trajectories, cycloids, Lissajous figures — and have no clean $y = f(x)$ form, so this is the only way to compute slopes.`,
      related_definitions: `
- [Parametric Equations](!/calculus/definitions#parametric_equations)
- [Derivative](!/calculus/definitions#derivative)`,
      related_formulas: `
- [Parametric Second Derivative](!/calculus/derivatives/formulas#parametric_second_derivative)
- [Chain Rule](!/calculus/derivatives/formulas#chain_rule)`,
    },
  },

  {
    name: 'Parametric Second Derivative',
    entity: 'derivative',
    category: 'Differentiation Techniques',
    formula: `$$\\frac{d^2 y}{dx^2} = \\frac{d}{dx}\\!\\left[\\frac{dy}{dx}\\right] = \\frac{d/dt\\,[dy/dx]}{dx/dt}$$`,
    link: { label: 'Parametric Differentiation', url: '/calculus/derivatives/techniques#4' },
    fields: {
      conditions: `
$dx/dt \\neq 0$. The first derivative $dy/dx$ must be differentiable as a function of $t$.`,
      explanation: `
Naive application of the [first parametric derivative](!/calculus/derivatives/formulas#parametric_first_derivative) to $dy/dx$ requires another reciprocal: differentiate $dy/dx$ with respect to $t$, then divide by $dx/dt$ to convert the $t$-derivative back to an $x$-derivative. Critical for analyzing [concavity](!/calculus/derivatives/formulas#concavity_from_second_derivative) of parametric curves.`,
      related_definitions: `
- [Parametric Equations](!/calculus/definitions#parametric_equations)
- [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative)`,
      related_formulas: `
- [Parametric First Derivative](!/calculus/derivatives/formulas#parametric_first_derivative)
- [Concavity from Second Derivative](!/calculus/derivatives/formulas#concavity_from_second_derivative)`,
    },
  },

];

export default calculusFormulasList;