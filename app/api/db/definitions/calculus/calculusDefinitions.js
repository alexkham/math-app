const calculusTermsList = [

  // ─── LIMITS ─────────────────────────────────────────────────────────────
 
  {
    id: 'limit',
    name: 'Limit',
    category: 'Limits',
    formula: `The value that $f(x)$ approaches as $x$ approaches a specified point $a$: $\\lim_{x \\to a} f(x) = L$ means $f(x)$ can be made arbitrarily close to $L$ by taking $x$ sufficiently close to $a$.`,
    link: { url: '/calculus/limits#1', text: 'The Central Idea of a Limit' },
    fields: {
      intuition: `A limit describes where a function is headed, not where it is. The function value at $a$ may differ from $L$, or may not exist at all — the limit cares only about the approach.`,
      notation: `$\\lim_{x \\to a} f(x) = L$. Variants: $\\lim_{x \\to a^-}$ (left-hand), $\\lim_{x \\to a^+}$ (right-hand), $\\lim_{x \\to \\infty}$ (at infinity). The two-sided limit exists only when both one-sided limits exist and agree.`,
      'related concepts': `- [One-Sided Limit](!/calculus/definitions#one_sided_limit)
- [Continuity](!/calculus/definitions#continuity)
- [Indeterminate Form](!/calculus/definitions#indeterminate_form)
- [Asymptote](!/calculus/definitions#asymptote)`,
    },
  },
 
  {
    id: 'one_sided_limit',
    name: 'One-Sided Limit',
    category: 'Limits',
    formula: `The value $f(x)$ approaches as $x$ approaches $a$ from one direction only: $\\lim_{x \\to a^-} f(x)$ (from the left) or $\\lim_{x \\to a^+} f(x)$ (from the right).`,
    link: { url: '/calculus/limits/one-sided#1', text: 'Left-Hand Limits' },
    fields: {
      intuition: `Sometimes a function behaves differently depending on the direction of approach. One-sided limits isolate each direction. The two-sided limit exists precisely when both one-sided limits exist and are equal.`,
      notation: `The minus superscript $a^-$ signals approach from below (left); the plus superscript $a^+$ signals approach from above (right). Alternative notation: $\\lim_{x \\uparrow a}$ and $\\lim_{x \\downarrow a}$.`,
      'related concepts': `- [Limit](!/calculus/definitions#limit)
- [Continuity](!/calculus/definitions#continuity)
- [Discontinuity](!/calculus/definitions#discontinuity)`,
    },
  },
 
  {
    id: 'continuity',
    name: 'Continuity',
    category: 'Limits',
    formula: `A function $f$ is continuous at $x = a$ if three conditions hold: $f(a)$ is defined, $\\lim_{x \\to a} f(x)$ exists, and $\\lim_{x \\to a} f(x) = f(a)$.`,
    link: { url: '/calculus/limits/continuity#2', text: 'The Formal Definition' },
    fields: {
      intuition: `No breaks, no jumps, no holes. The function value matches what the surrounding values predict. Small changes in input produce small changes in output — no surprises.`,
      properties: `Polynomials are continuous everywhere. Rational functions are continuous wherever the denominator is nonzero. Sums, products, quotients, and compositions of continuous functions are continuous (where defined). Continuity on a closed interval $[a, b]$ requires one-sided continuity at the endpoints.`,
      'related concepts': `- [Limit](!/calculus/definitions#limit)
- [Discontinuity](!/calculus/definitions#discontinuity)
- [Differentiability](!/calculus/definitions#differentiability)`,
    },
  },
 
  {
    id: 'discontinuity',
    name: 'Discontinuity',
    category: 'Limits',
    formula: `A point where a function fails to be continuous — at least one of the three continuity conditions is violated.`,
    link: { url: '/calculus/limits/continuity#4', text: 'Types of Discontinuities' },
    fields: {
      intuition: `Something goes wrong at this point: the function jumps, blows up, oscillates, or has a hole. The type of failure determines whether the discontinuity can be repaired.`,
      'special cases': `Removable: the limit exists but $f(a)$ is missing or wrong — redefine $f(a)$ to fix it. Jump: both one-sided limits exist but differ — cannot be fixed. Infinite: the function blows up to $\\pm\\infty$ — vertical asymptote. Oscillating: the limit fails to exist due to wild oscillation.`,
      'related concepts': `- [Continuity](!/calculus/definitions#continuity)
- [One-Sided Limit](!/calculus/definitions#one_sided_limit)
- [Asymptote](!/calculus/definitions#asymptote)`,
    },
  },
 
  {
    id: 'indeterminate_form',
    name: 'Indeterminate Form',
    category: 'Limits',
    formula: `An expression arising from direct substitution in a limit whose value cannot be determined without further analysis: $\\frac{0}{0}$, $\\frac{\\infty}{\\infty}$, $0 \\cdot \\infty$, $\\infty - \\infty$, $0^0$, $1^\\infty$, $\\infty^0$.`,
    link: { url: '/calculus/limits/evaluating#3', text: 'Indeterminate Forms' },
    fields: {
      intuition: `A competition between opposing tendencies whose outcome depends on relative rates. In $\\frac{0}{0}$, both numerator and denominator vanish — which vanishes faster determines whether the limit is $0$, finite, or infinite.`,
      'common errors': `Treating $\\frac{0}{0}$ as equal to $0$, $1$, or "undefined." It is none of these — it signals that the limit requires algebraic manipulation or other techniques to resolve. The form $\\frac{\\text{nonzero}}{0}$ is not indeterminate — it produces $\\pm\\infty$.`,
      'related concepts': `- [Limit](!/calculus/definitions#limit)
- [Continuity](!/calculus/definitions#continuity)`,
    },
  },
 
  {
    id: 'asymptote',
    name: 'Asymptote',
    category: 'Limits',
    formula: `A line that the graph of a function approaches arbitrarily closely as $x$ or $f(x)$ tends toward infinity or a boundary point.`,
    link: { url: '/calculus/limits/infinity#3', text: 'Horizontal Asymptotes' },
    fields: {
      intuition: `A boundary the curve chases but never settles on. Horizontal asymptotes describe long-run behavior as $x \\to \\pm\\infty$. Vertical asymptotes mark points where the function blows up.`,
      'special cases': `Horizontal: $y = L$ when $\\lim_{x \\to \\pm\\infty} f(x) = L$. Vertical: $x = a$ when $\\lim_{x \\to a} f(x) = \\pm\\infty$. A function can have zero, one, or two horizontal asymptotes, and any number of vertical asymptotes.`,
      'related concepts': `- [Limit](!/calculus/definitions#limit)
- [Discontinuity](!/calculus/definitions#discontinuity)
- [Continuity](!/calculus/definitions#continuity)`,
    },
  },
 
  // ─── DERIVATIVES ────────────────────────────────────────────────────────
 
  {
    id: 'derivative',
    name: 'Derivative',
    category: 'Derivatives',
    formula: `The instantaneous rate of change of $f$ at $x = a$, defined as $f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$, when this limit exists.`,
    link: { url: '/calculus/derivatives#1', text: 'The Difference Quotient and Its Limit' },
    fields: {
      intuition: `The slope of the tangent line at a single point. The derivative captures how fast the function changes at that exact instant — not over an interval, but at a point.`,
      notation: `Lagrange: $f'(x)$. Leibniz: $\\frac{dy}{dx}$. Euler: $Df(x)$. Newton: $\\dot{y}$ (for time derivatives). Each notation emphasizes a different aspect: the function, the ratio of changes, the operator, or the physical context.`,
      'related concepts': `- [Differentiability](!/calculus/definitions#differentiability)
- [Differential](!/calculus/definitions#differential)
- [Tangent Line](!/calculus/definitions#tangent_line)
- [Instantaneous Rate of Change](!/calculus/definitions#instantaneous_rate_of_change)
- [Average Rate of Change](!/calculus/definitions#average_rate_of_change)`,
    },
  },
 
  {
    id: 'differentiability',
    name: 'Differentiability',
    category: 'Derivatives',
    formula: `A function $f$ is differentiable at $x = a$ if $\\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$ exists and is finite.`,
    link: { url: '/calculus/derivatives/differentiability#1', text: 'The Definition of Differentiability' },
    fields: {
      intuition: `The graph has a well-defined, non-vertical tangent line at the point. The secant lines from both sides converge to the same slope. Differentiability implies continuity, but not the reverse.`,
      'special cases': `Failure modes: corners (one-sided slopes disagree), cusps (slopes blow up with opposite signs), vertical tangents (slope is $\\pm\\infty$ from both sides), and discontinuities (function is not even continuous).`,
      'related concepts': `- [Derivative](!/calculus/definitions#derivative)
- [Continuity](!/calculus/definitions#continuity)
- [Tangent Line](!/calculus/definitions#tangent_line)
- [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative)`,
    },
  },
 
  {
    id: 'differential',
    name: 'Differential',
    category: 'Derivatives',
    formula: `The independent differential $dx$ is a freely chosen increment in $x$; the dependent differential is $dy = f'(x) \\cdot dx$, the change predicted by the tangent line.`,
    link: { url: '/calculus/derivatives/differentials#2', text: 'The Differential dy' },
    fields: {
      intuition: `Differentials separate the derivative $\\frac{dy}{dx}$ into two independent quantities. The differential $dy$ approximates the actual change $\\Delta y$ — exact for linear functions, increasingly approximate for curved ones as $dx$ grows.`,
      properties: `$dy = f'(x) \\cdot dx$ is linear in $dx$. For small $dx$, $\\Delta y \\approx dy$. The error $\\Delta y - dy$ shrinks faster than $dx$ itself. Differentials justify treating $\\frac{dy}{dx}$ as a ratio in the chain rule and in separation of variables.`,
      'related concepts': `- [Derivative](!/calculus/definitions#derivative)
- [Partial Derivative](!/calculus/definitions#partial_derivative)`,
    },
  },
 
  {
    id: 'higher_order_derivative',
    name: 'Higher-Order Derivative',
    category: 'Derivatives',
    formula: `The $n$th derivative $f^{(n)}(x)$, obtained by differentiating $f$ a total of $n$ times: $f''(x) = \\frac{d^2y}{dx^2}$, $f'''(x) = \\frac{d^3y}{dx^3}$, and so on.`,
    link: { url: '/calculus/derivatives/higher-order#1', text: 'Definition and Notation' },
    fields: {
      intuition: `Each derivative measures how the previous one changes. The second derivative captures concavity — how the slope itself varies. The third and beyond capture progressively finer aspects of the curve's shape.`,
      properties: `Polynomials of degree $n$ terminate after $n+1$ differentiations. $e^x$ is unchanged at every order. Sine and cosine cycle with period four. The $n$th derivative of $x^n$ is $n!$.`,
      'related concepts': `- [Derivative](!/calculus/definitions#derivative)
- [Concavity](!/calculus/definitions#concavity)
- [Inflection Point](!/calculus/definitions#inflection_point)`,
    },
  },
 
  {
    id: 'partial_derivative',
    name: 'Partial Derivative',
    category: 'Derivatives',
    formula: `The derivative of a multivariable function with respect to one variable while all others are held constant: $\\frac{\\partial f}{\\partial x}$.`,
    link: { url: '/calculus/derivatives/differentials#6', text: 'Differentials of Multiple Variables' },
    fields: {
      intuition: `Freeze every variable except one, then differentiate as usual. The partial derivative measures the function's sensitivity to changes in that single variable, treating the others as constants.`,
      notation: `The symbol $\\partial$ (curly d) distinguishes partial from ordinary derivatives. $\\frac{\\partial f}{\\partial x}$ means differentiate $f$ with respect to $x$; $\\frac{\\partial f}{\\partial y}$ means with respect to $y$. Subscript notation: $f_x$, $f_y$.`,
      'related concepts': `- [Derivative](!/calculus/definitions#derivative)
- [Differential](!/calculus/definitions#differential)`,
    },
  },
 
  {
    id: 'instantaneous_rate_of_change',
    name: 'Instantaneous Rate of Change',
    category: 'Derivatives',
    formula: `The rate of change of $f$ at a single point $x = a$, equal to the derivative $f'(a)$: the limit of average rates of change as the interval shrinks to zero.`,
    link: { url: '/calculus/derivatives/function#6', text: 'The Derivative as Rate of Change' },
    fields: {
      intuition: `How fast the function is changing right now — not over a span, but at one frozen instant. Velocity is the instantaneous rate of change of position; marginal cost is the instantaneous rate of change of total cost.`,
      'common errors': `Confusing instantaneous rate with average rate. The average rate of change over $[a, b]$ is the secant slope; the instantaneous rate at $a$ is the tangent slope. They coincide only for linear functions.`,
      'related concepts': `- [Derivative](!/calculus/definitions#derivative)
- [Average Rate of Change](!/calculus/definitions#average_rate_of_change)
- [Tangent Line](!/calculus/definitions#tangent_line)`,
    },
  },
 
  {
    id: 'average_rate_of_change',
    name: 'Average Rate of Change',
    category: 'Derivatives',
    formula: `The ratio $\\frac{f(b) - f(a)}{b - a}$, measuring the overall change in $f$ per unit change in input over the interval $[a, b]$.`,
    link: { url: '/calculus/derivatives#1', text: 'The Difference Quotient and Its Limit' },
    fields: {
      intuition: `The slope of the secant line connecting $(a, f(a))$ and $(b, f(b))$. It summarizes the function's total change over the interval without revealing what happens in between.`,
      properties: `Equals the slope of the straight line through the two endpoints. The Mean Value Theorem guarantees that for differentiable functions, the instantaneous rate matches the average rate at some interior point.`,
      'related concepts': `- [Derivative](!/calculus/definitions#derivative)
- [Instantaneous Rate of Change](!/calculus/definitions#instantaneous_rate_of_change)`,
    },
  },
 
  {
    id: 'tangent_line',
    name: 'Tangent Line',
    category: 'Derivatives',
    formula: `The line through $(a, f(a))$ with slope $f'(a)$: $y - f(a) = f'(a)(x - a)$.`,
    link: { url: '/calculus/derivatives/graph-analysis#2', text: 'Tangent Lines' },
    fields: {
      intuition: `The best linear approximation to the curve at a single point. Near the point of tangency, the tangent line and the curve are nearly indistinguishable. This is the geometric foundation of differentials and linearization.`,
      properties: `Touches the curve at exactly one point (locally). Its slope equals the derivative. The normal line at the same point is perpendicular, with slope $-1/f'(a)$ when $f'(a) \\neq 0$.`,
      'related concepts': `- [Derivative](!/calculus/definitions#derivative)
- [Differentiability](!/calculus/definitions#differentiability)
- [Differential](!/calculus/definitions#differential)`,
    },
  },
 
  {
    id: 'critical_point',
    name: 'Critical Point',
    category: 'Derivatives',
    formula: `A value $x = c$ in the domain of $f$ where $f'(c) = 0$ or $f'(c)$ does not exist.`,
    link: { url: '/calculus/derivatives/graph-analysis#4', text: 'Critical Points' },
    fields: {
      intuition: `The only candidates for local extrema. If $f$ has a local maximum or minimum at $c$, then $c$ must be a critical point. But not every critical point is an extremum — $f(x) = x^3$ has a critical point at $x = 0$ with no extremum.`,
      properties: `Found by solving $f'(x) = 0$ and identifying where $f'$ is undefined. Classification requires further testing: the first derivative test (sign change of $f'$) or the second derivative test (sign of $f''$).`,
      'related concepts': `- [Local Extremum](!/calculus/definitions#local_extremum)
- [Derivative](!/calculus/definitions#derivative)
- [Inflection Point](!/calculus/definitions#inflection_point)`,
    },
  },
 
  {
    id: 'local_extremum',
    name: 'Local Extremum',
    category: 'Derivatives',
    formula: `A point where $f$ achieves a value greater than (local maximum) or less than (local minimum) all nearby values: $f(c) \\geq f(x)$ or $f(c) \\leq f(x)$ for all $x$ in some open interval around $c$.`,
    link: { url: '/calculus/derivatives/graph-analysis#5', text: 'The First Derivative Test' },
    fields: {
      intuition: `A peak or valley in the immediate neighborhood. The function rises to a local max then falls, or falls to a local min then rises. Farther away, higher peaks or deeper valleys may exist.`,
      properties: `Occurs only at critical points (Fermat's theorem). First derivative test: $f'$ changes sign at the point. Second derivative test: $f''(c) > 0$ gives a local min, $f''(c) < 0$ gives a local max, $f''(c) = 0$ is inconclusive.`,
      'related concepts': `- [Critical Point](!/calculus/definitions#critical_point)
- [Concavity](!/calculus/definitions#concavity)
- [Monotonic Function](!/calculus/definitions#monotonic_function)`,
    },
  },
 
  {
    id: 'concavity',
    name: 'Concavity',
    category: 'Derivatives',
    formula: `A property describing how the slope of $f$ changes: concave up where $f''(x) > 0$ (slope increasing), concave down where $f''(x) < 0$ (slope decreasing).`,
    link: { url: '/calculus/derivatives/graph-analysis#7', text: 'Concavity' },
    fields: {
      intuition: `Concavity describes bending, not direction. A function can rise while bending downward (decelerating) or fall while bending upward (decelerating in the negative direction). Concave up means the curve lies above its tangent lines; concave down means below.`,
      properties: `Determined by the sign of $f''$. Independent of whether $f$ is increasing or decreasing. Changes in concavity occur at inflection points.`,
      'related concepts': `- [Inflection Point](!/calculus/definitions#inflection_point)
- [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative)
- [Local Extremum](!/calculus/definitions#local_extremum)`,
    },
  },
 
  {
    id: 'inflection_point',
    name: 'Inflection Point',
    category: 'Derivatives',
    formula: `A point on the graph of $f$ where the concavity changes — from concave up to concave down, or the reverse.`,
    link: { url: '/calculus/derivatives/graph-analysis#8', text: 'Inflection Points' },
    fields: {
      intuition: `Where the bending reverses direction. The curve transitions from cupping upward to cupping downward (or vice versa). On the graph of $f'$, inflection points of $f$ appear as local extrema.`,
      'common errors': `Assuming $f''(c) = 0$ guarantees an inflection point. It does not — $f(x) = x^4$ has $f''(0) = 0$ but no inflection there (concave up on both sides). The sign of $f''$ must actually switch across $c$.`,
      'related concepts': `- [Concavity](!/calculus/definitions#concavity)
- [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative)
- [Critical Point](!/calculus/definitions#critical_point)`,
    },
  },
 
  {
    id: 'monotonic_function',
    name: 'Monotonic Function',
    category: 'Derivatives',
    formula: `A function that is entirely non-decreasing or entirely non-increasing on an interval. Strictly monotonic: strictly increasing ($a < b \\implies f(a) < f(b)$) or strictly decreasing ($a < b \\implies f(a) > f(b)$).`,
    link: { url: '/calculus/derivatives/graph-analysis#3', text: 'Increasing and Decreasing Functions' },
    fields: {
      intuition: `A function that moves in only one direction — it never reverses. Strictly increasing means the graph only rises; strictly decreasing means it only falls. No turning points, no plateaus (in the strict case).`,
      properties: `Determined by the sign of $f'$: $f' > 0$ on an interval means strictly increasing there, $f' < 0$ means strictly decreasing. A strictly monotonic function on an interval is one-to-one on that interval.`,
      'related concepts': `- [Derivative](!/calculus/definitions#derivative)
- [Critical Point](!/calculus/definitions#critical_point)
- [Local Extremum](!/calculus/definitions#local_extremum)`,
    },
  },
 
  // ─── INTEGRALS ──────────────────────────────────────────────────────────
 
  {
    id: 'antiderivative',
    name: 'Antiderivative',
    category: 'Integrals',
    formula: `A function $F$ whose derivative equals the given function: $F'(x) = f(x)$. Also called a primitive.`,
    link: { url: '/calculus/integrals/indefinite#1', text: 'Antiderivatives' },
    fields: {
      intuition: `The reverse of differentiation. Given a rate of change, the antiderivative recovers the original quantity. Since the derivative of any constant is zero, antiderivatives are never unique — they form a family $F(x) + C$.`,
      properties: `If $F$ is one antiderivative of $f$, every antiderivative has the form $F(x) + C$. The Fundamental Theorem of Calculus connects antiderivatives to definite integrals: $\\int_a^b f(x)\\,dx = F(b) - F(a)$.`,
      'related concepts': `- [Indefinite Integral](!/calculus/definitions#indefinite_integral)
- [Definite Integral](!/calculus/definitions#definite_integral)
- [Derivative](!/calculus/definitions#derivative)`,
    },
  },
 
  {
    id: 'indefinite_integral',
    name: 'Indefinite Integral',
    category: 'Integrals',
    formula: `The general antiderivative of $f$, written $\\int f(x)\\,dx = F(x) + C$, representing the entire family of functions whose derivative is $f$.`,
    link: { url: '/calculus/integrals/indefinite#3', text: 'Notation' },
    fields: {
      intuition: `The notation $\\int f(x)\\,dx$ asks: what function, when differentiated, gives back $f(x)$? The answer is a family, not a single function — the constant $C$ captures the vertical ambiguity that differentiation erases.`,
      'common errors': `Omitting $+ C$. The constant of integration represents infinitely many valid antiderivatives. Dropping it gives only one member of the family and loses generality — especially problematic in differential equations.`,
      'related concepts': `- [Antiderivative](!/calculus/definitions#antiderivative)
- [Definite Integral](!/calculus/definitions#definite_integral)
- [Integrand](!/calculus/definitions#integrand)`,
    },
  },
 
  {
    id: 'definite_integral',
    name: 'Definite Integral',
    category: 'Integrals',
    formula: `The limit of Riemann sums over $[a, b]$: $\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i^*) \\Delta x$, yielding a number that represents accumulated signed area.`,
    link: { url: '/calculus/integrals/definite#2', text: 'Notation and Meaning' },
    fields: {
      intuition: `Continuous summation over an interval. The definite integral accumulates the values of $f$ from $a$ to $b$, producing a single number — not a function. Regions above the $x$-axis contribute positively; regions below contribute negatively.`,
      properties: `The result is a number, not a function. The integration variable is a dummy variable. Additivity: $\\int_a^b + \\int_b^c = \\int_a^c$. Reversing limits negates: $\\int_a^b = -\\int_b^a$. Computed via the Fundamental Theorem: $F(b) - F(a)$.`,
      'related concepts': `- [Riemann Sum](!/calculus/definitions#riemann_sum)
- [Antiderivative](!/calculus/definitions#antiderivative)
- [Signed Area](!/calculus/definitions#signed_area)
- [Bounds of Integration](!/calculus/definitions#bounds_of_integration)
- [Integrand](!/calculus/definitions#integrand)`,
    },
  },
 
  {
    id: 'integrand',
    name: 'Integrand',
    category: 'Integrals',
    formula: `The function $f(x)$ appearing inside an integral expression $\\int f(x)\\,dx$ — the function being integrated.`,
    link: { url: '/calculus/integrals#3', text: 'Notation and Terminology' },
    fields: {
      intuition: `The integrand specifies what is being accumulated at each point. In a definite integral, $f(x)\\,dx$ represents an infinitesimal contribution to the total; the integral sums all such contributions across the interval.`,
      'related concepts': `- [Definite Integral](!/calculus/definitions#definite_integral)
- [Indefinite Integral](!/calculus/definitions#indefinite_integral)
- [Bounds of Integration](!/calculus/definitions#bounds_of_integration)`,
    },
  },
 
  {
    id: 'bounds_of_integration',
    name: 'Bounds of Integration',
    category: 'Integrals',
    formula: `The values $a$ (lower bound) and $b$ (upper bound) in a definite integral $\\int_a^b f(x)\\,dx$, specifying where accumulation begins and ends.`,
    link: { url: '/calculus/integrals/definite#2', text: 'Notation and Meaning' },
    fields: {
      intuition: `The boundaries of the interval over which the function is accumulated. The lower bound sits at the bottom of the integral sign, the upper bound at the top. Swapping them negates the result.`,
      'common errors': `Forgetting to convert bounds when using substitution in definite integrals. If $u = g(x)$, the $x$-bounds $a$ and $b$ must become $u$-bounds $g(a)$ and $g(b)$ — or substitute back to $x$ before evaluating.`,
      'related concepts': `- [Definite Integral](!/calculus/definitions#definite_integral)
- [Integrand](!/calculus/definitions#integrand)
- [Improper Integral](!/calculus/definitions#improper_integral)`,
    },
  },
 
  {
    id: 'riemann_sum',
    name: 'Riemann Sum',
    category: 'Integrals',
    formula: `An approximation to the definite integral formed by partitioning $[a, b]$ into subintervals and summing rectangular areas: $S_n = \\sum_{i=1}^{n} f(x_i^*) \\Delta x$.`,
    link: { url: '/calculus/integrals/definite#1', text: 'The Riemann Sum Construction' },
    fields: {
      intuition: `Approximate the area under a curve with rectangles. Each rectangle has width $\\Delta x$ and height $f(x_i^*)$ at some sample point. As the rectangles become infinitely thin ($n \\to \\infty$), the sum converges to the exact integral.`,
      properties: `The choice of sample points (left, right, midpoint) affects individual sums but not the limit. Left and right sums provide bounds for monotonic functions. The Riemann sum is the construction from which the definite integral is formally defined.`,
      'related concepts': `- [Definite Integral](!/calculus/definitions#definite_integral)
- [Signed Area](!/calculus/definitions#signed_area)`,
    },
  },
 
  {
    id: 'improper_integral',
    name: 'Improper Integral',
    category: 'Integrals',
    formula: `A definite integral where the interval is infinite or the integrand is unbounded within the interval, evaluated as a limit of proper integrals.`,
    link: { url: '/calculus/integrals/improper#1', text: 'What Makes an Integral Improper?' },
    fields: {
      intuition: `Standard integration requires a finite interval and a bounded function. When either condition fails, the integral is improper — it must be computed as a limit. The integral converges if the limit is finite; it diverges otherwise.`,
      'special cases': `Infinite limits: $\\int_a^{\\infty} f(x)\\,dx = \\lim_{b \\to \\infty} \\int_a^b f(x)\\,dx$. Unbounded integrand at $c$: split at $c$ and take one-sided limits. Both conditions can occur simultaneously.`,
      'related concepts': `- [Definite Integral](!/calculus/definitions#definite_integral)
- [Bounds of Integration](!/calculus/definitions#bounds_of_integration)
- [Limit](!/calculus/definitions#limit)`,
    },
  },
 
  {
    id: 'signed_area',
    name: 'Signed Area',
    category: 'Integrals',
    formula: `The value of a definite integral interpreted geometrically: area above the $x$-axis counts as positive, area below counts as negative.`,
    link: { url: '/calculus/integrals/definite#3', text: 'Signed Area Interpretation' },
    fields: {
      intuition: `The integral does not simply measure area — it measures directed area. Regions where $f(x) > 0$ add to the total; regions where $f(x) < 0$ subtract. The integral can be zero even when substantial area exists, if positive and negative regions cancel.`,
      properties: `$\\int_a^b f(x)\\,dx = (\\text{area above}) - (\\text{area below})$. To find total unsigned area, integrate $|f(x)|$ instead. The signed area interpretation gives the integral its physical meaning: net displacement, net charge, net change.`,
      'related concepts': `- [Definite Integral](!/calculus/definitions#definite_integral)
- [Riemann Sum](!/calculus/definitions#riemann_sum)
- [Average Value of a Function](!/calculus/definitions#average_value_of_a_function)`,
    },
  },
 
  {
    id: 'average_value_of_a_function',
    name: 'Average Value of a Function',
    category: 'Integrals',
    formula: `The mean output of $f$ over $[a, b]$: $f_{\\text{avg}} = \\frac{1}{b - a} \\int_a^b f(x)\\,dx$.`,
    link: { url: '/calculus/integrals/definite#7', text: 'Average Value of a Function' },
    fields: {
      intuition: `The height of a rectangle with base $[a, b]$ whose area equals the area under the curve. It generalizes the discrete average to continuous functions: sum everything up (integrate), then divide by the length of the interval.`,
      properties: `The Mean Value Theorem for Integrals guarantees that a continuous $f$ actually attains $f_{\\text{avg}}$ at some point $c \\in (a, b)$: $f(c) = f_{\\text{avg}}$.`,
      'related concepts': `- [Definite Integral](!/calculus/definitions#definite_integral)
- [Signed Area](!/calculus/definitions#signed_area)`,
    },
  },

    // {
    //   name: "Abscissa",
    //   formula: "The horizontal coordinate of a point in a Cartesian plane, representing its distance from the vertical axis.",
    //   fields: [],
    //   category: "Coordinates and Geometry",
    // },
    // {
    //   name: "Absolute Value",
    //   formula: "A measure of a number's magnitude regardless of its sign, denoting its distance from zero on a number line.",
    //   fields: [],
    //   category: "Functions and Rates of Change",
    // },
    // {
    //   name: "Acceleration",
    //   formula: "The rate at which an object's velocity changes with respect to time, expressed as a vector indicating direction and magnitude.",
    //   fields: [],
    //   category: "Motion and Dynamics",
    // },
    // {
    //   name: "Amplitude",
    //   formula: "The maximum displacement of a periodic function or oscillation from its equilibrium position.",
    //   fields: [],
    //   category: "Oscillatory Motion",
    // },
    // {
    //   name: "Angle",
    //   formula: "The rotational measurement between two intersecting lines or surfaces, often quantified in degrees or radians.",
    //   fields: [],
    //   category: "Geometry and Trigonometry",
    // },
    // {
    //   name: "Angular Velocity",
    //   formula: "The rate of change of angular displacement, indicating how quickly an object rotates around a specific axis.",
    //   fields: [],
    //   category: "Motion and Dynamics",
    // },
    // {
    //   name: "Antiderivative",
    //   formula: "A function whose derivative equals the given function, often associated with indefinite integration.",
    //   fields: [],
    //   category: "Integration",
    // },
    // {
    //   name: "Approximation by Differentials",
    //   formula: "A technique for estimating the change in a function using its derivative and small increments in its variable.",
    //   fields: [],
    //   category: "Differentiation",
    // },
    // {
    //   name: "Arclength",
    //   formula: "The total length of a curve, calculated as the integral of the curve's infinitesimal segments.",
    //   fields: [],
    //   category: "Geometry and Calculus",
    // },
    // {
    //   name: "Area",
    //   formula: "A measure of the two-dimensional space enclosed within a boundary, often determined using integrals.",
    //   fields: [],
    //   category: "Geometry and Calculus",
    // },
    // {
    //   name: "Argument",
    //   formula: "The independent variable of a function, especially in trigonometric or complex functions, which determines the function's output.",
    //   fields: [],
    //   category: "Functions",
    // },
    // {
    //   name: "Asymptote",
    //   formula: "A line that a curve approaches but never intersects or reaches as it extends infinitely in one or both directions.",
    //   fields: [],
    //   category: "Graph Analysis",
    // },
    // {
    //   name: "Average Rate of Change",
    //   formula: "The ratio of the change in a function's value to the change in the input variable, representing a slope over an interval.",
    //   fields: [],
    //   category: "Functions and Rates of Change",
    // },
    // {
    //   name: "Average Value of a Function",
    //   formula: "The mean of a function's values over a specific interval, calculated as the integral of the function divided by the interval's length.",
    //   fields: [],
    //   category: "Functions and Integration",
    // },
    // {
    //   name: "Average Velocity",
    //   formula: "The total displacement divided by the total time taken, representing the overall rate of motion over a time interval.",
    //   fields: [],
    //   category: "Motion and Dynamics",
    // },
    // {
    //   name: "Axis of Revolution",
    //   formula: "A line about which a two-dimensional shape rotates to generate a three-dimensional solid.",
    //   fields: [],
    //   category: "Geometry and Calculus",
    // },
    // {
    //   name: "Binomial Series",
    //   formula: "An infinite expansion of expressions raised to a power, generalizing the binomial theorem for real or complex exponents.",
    //   fields: [],
    //   category: "Series and Convergence",
    // },
    // {
    //   name: "Bounded Sequence",
    //   formula: "A sequence whose terms are confined within a finite range, having both upper and lower limits.",
    //   fields: [],
    //   category: "Sequences and Series",
    // },
    // {
    //   name: "Cardioid",
    //   formula: "A heart-shaped curve traced by a point on a circle rolling around another circle of equal radius.",
    //   fields: [],
    //   category: "Coordinates and Geometry",
    // },
    // {
    //   name: "Catenary",
    //   formula: "The curve formed by a hanging flexible chain or cable under its own weight, described mathematically as a hyperbolic cosine.",
    //   fields: [],
    //   category: "Geometry and Trigonometry",
    // },
    // {
    //   name: "Center of Curvature",
    //   formula: "The point at a given location on a curve where the osculating circle is centered, representing the curve's maximum bending at that point.",
    //   fields: [],
    //   category: "Geometry",
    // },
    // {
    //   name: "Centroid",
    //   formula: "The geometric center of a plane figure or solid body, often corresponding to the average position of all points within it.",
    //   fields: [],
    //   category: "Geometry",
    // },
    // {
    //   name: "Chain Rule",
    //   formula: "A fundamental differentiation rule that allows the derivative of a composite function to be expressed in terms of the derivatives of its components.",
    //   fields: [],
    //   category: "Differentiation",
    // },
    // {
    //   name: "Circle",
    //   formula: "A set of all points in a plane equidistant from a fixed central point.",
    //   fields: [],
    //   category: "Coordinates and Geometry",
    // },
    // {
    //   name: "Closed Interval",
    //   formula: "A range of real numbers that includes its endpoints, denoted as [a, b].",
    //   fields: [],
    //   category: "Intervals and Sets",
    // },
    // {
    //   name: "Comparison Test",
    //   formula: "A method for determining the convergence or divergence of a series by comparing it to another series with known behavior.",
    //   fields: [],
    //   category: "Series and Convergence",
    // },
    // {
    //   name: "Composite Function",
    //   formula: "A function formed by applying one function to the results of another, expressed as f(g(x)).",
    //   fields: [],
    //   category: "Functions",
    // },
    // {
    //   name: "Concavity",
    //   formula: "A property describing the curvature of a graph, where a function is concave up if its slope increases and concave down if it decreases.",
    //   fields: [],
    //   category: "Graph Analysis",
    // },
    // {
    //   name: "Conic Sections",
    //   formula: "Curves obtained by intersecting a plane with a cone, resulting in shapes like circles, ellipses, parabolas, and hyperbolas.",
    //   fields: [],
    //   category: "Geometry",
    // },
    // {
    //   name: "Continuous Function",
    //   formula: "A function that has no breaks, jumps, or holes in its domain, allowing it to be drawn without lifting the pen.",
    //   fields: [],
    //   category: "Functions",
    // },
    // {
    //   name: "Convergence",
    //   formula: "A property of a sequence or series approaching a finite limit as its terms progress to infinity.",
    //   fields: [],
    //   category: "Series and Convergence",
    // },
    // {
    //   name: "Coordinate System",
    //   formula: "A framework used to locate points in space, typically defined by axes such as Cartesian, polar, or cylindrical coordinates.",
    //   fields: [],
    //   category: "Coordinates and Geometry",
    // },
    // {
    //   name: "Curvature",
    //   formula: "A measure of how sharply a curve deviates from being a straight line at a given point.",
    //   fields: [],
    //   category: "Geometry",
    // },
    // {
    //   name: "Differential Equations",
    //   formula: "Equations involving derivatives that describe how a function changes in relation to its variables.",
    //   fields: [],
    //   category: "Differential Equations",
    // },
    // {
    //   name: "Direction Field",
    //   formula: "A graphical representation showing the slope of solutions to a differential equation at various points.",
    //   fields: [],
    //   category: "Differential Equations",
    // },
    // {
    //   name: "Divergence",
    //   formula: "A measure of how a vector field spreads out from a point, often computed as the dot product of the del operator with the field.",
    //   fields: [],
    //   category: "Vector Calculus",
    // },
    // {
    //   name: "Domain and Range",
    //   formula: "The domain is the set of all input values for which a function is defined, and the range is the set of all resulting output values.",
    //   fields: [],
    //   category: "Functions",
    // },
    // {
    //   name: "Ellipse",
    //   formula: "A closed curve in which the sum of the distances from any point on the curve to two fixed points (foci) is constant.",
    //   fields: [],
    //   category: "Geometry",
    // },
    // {
    //   name: "Fourier Series",
    //   formula: "A representation of periodic functions as an infinite sum of sines and cosines, each with specific coefficients.",
    //   fields: [],
    //   category: "Series and Convergence",
    // },
    // {
    //   name: "Gradient",
    //   formula: "A vector indicating the direction of the steepest ascent of a scalar field, derived from its partial derivatives.",
    //   fields: [],
    //   category: "Vector Calculus",
    // },
    // {
    //   name: "Harmonic Motion",
    //   formula: "Oscillatory motion, such as that of a pendulum, described mathematically by sinusoidal functions.",
    //   fields: [],
    //   category: "Oscillatory Motion",
    // },
    // {
    //   name: "Hyperbola",
    //   formula: "A curve formed by the intersection of a plane with a double cone, characterized by two separate branches.",
    //   fields: [],
    //   category: "Geometry",
    // },
    // {
    //   name: "Inflection Point",
    //   formula: "A point on a curve where the concavity changes direction.",
    //   fields: [],
    //   category: "Graph Analysis",
    // },
    // {
    //   name: "Integrand",
    //   formula: "The function being integrated in an integral expression.",
    //   fields: [],
    //   category: "Integration",
    // },
    // {
    //   name: "Limit",
    //   formula: "The value a function or sequence approaches as the input or index approaches a specific point or infinity.",
    //   fields: [],
    //   category: "Limits",
    // },
    // {
    //   name: "Local Extremum",
    //   formula: "The highest or lowest value of a function in a specific region, occurring at a local maximum or minimum.",
    //   fields: [],
    //   category: "Functions and Graphs",
    // },
    // {
    //   name: "Parabola",
    //   formula: "A symmetric curve where any point is equidistant from a fixed focus and a directrix.",
    //   fields: [],
    //   category: "Geometry",
    // },
    // {
    //   name: "Parametric Equations",
    //   formula: "Equations defining a curve using a parameter to express coordinates as functions of that parameter.",
    //   fields: [],
    //   category: "Graphing",
    // },
    // {
    //   name: "Partial Derivative",
    //   formula: "The derivative of a multivariable function with respect to one variable while keeping others constant.",
    //   fields: [],
    //   category: "Differentiation",
    // },
    // {
    //   name: "Path Integral",
    //   formula: "An integral that computes a quantity along a curve, often used in physics for work or line integrals.",
    //   fields: [],
    //   category: "Integration",
    // },
    // {
    //   name: "Polar Coordinates",
    //   formula: "A coordinate system where a point's location is determined by its distance from the origin and angle from a reference direction.",
    //   fields: [],
    //   category: "Coordinates and Geometry",
    // },
    // {
    //   name: "Radius of Curvature",
    //   formula: "The reciprocal of curvature, representing the radius of the osculating circle at a point on a curve.",
    //   fields: [],
    //   category: "Geometry",
    // },
    // {
    //   name: "Rectilinear Motion",
    //   formula: "Motion along a straight line, described by functions of time.",
    //   fields: [],
    //   category: "Motion and Dynamics",
    // },
    // {
    //   name: "Series",
    //   formula: "The sum of terms in a sequence, which may converge to a finite value or diverge to infinity.",
    //   fields: [],
    //   category: "Series and Convergence",
    // },
    // {
    //   name: "Slope",
    //   formula: "The ratio of the vertical change to the horizontal change between two points on a line or curve.",
    //   fields: [],
    //   category: "Graph Analysis",
    // },
    // {
    //   name: "Surface Area",
    //   formula: "The total area covering the outer surface of a three-dimensional object, computed using integration for curved surfaces.",
    //   fields: [],
    //   category: "Geometry",
    // },
    // {
    //   name: "Tangent Line/Plane",
    //   formula: "A line or plane that touches a curve or surface at a single point without crossing it locally.",
    //   fields: [],
    //   category: "Graph Analysis",
    // },
    // {
    //   name: "Velocity",
    //   formula: "The rate of change of an object’s position with respect to time, described as a vector quantity.",
    //   fields: [],
    //   category: "Motion and Dynamics",
    // },
    // {
    //   name: "Vector Fields",
    //   formula: "A function assigning a vector to every point in space, used to model physical phenomena like fluid flow or gravitational fields.",
    //   fields: [],
    //   category: "Vector Calculus",
    // },
  ];
  
  export default calculusTermsList;
  